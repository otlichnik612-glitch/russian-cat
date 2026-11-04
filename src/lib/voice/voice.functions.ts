import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * The voice page and the app talk to the server through these calls.
 * - voiceFiles: which phrases of a language have a recording (public, no secrets).
 * - voiceAdmin: status, recording and voice samples, only with the VOICE_ADMIN_CODE password.
 */

const lang = z.string().min(2).max(8);

export const voiceFiles = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => z.object({ lang }).parse(data))
  .handler(async ({ data }): Promise<Record<string, number>> => {
    try {
      const { voiceManifest } = await import("./voice.server");
      return await voiceManifest(data.lang);
    } catch {
      // No database or no recordings yet: the app reads with the phone's voice.
      return {};
    }
  });

const adminInput = z.object({
  code: z.string().min(1).max(200),
  action: z.enum(["courses", "status", "record", "sample"]),
  course: z.enum(["ru", "tr", "en", "pt", "ar", "ko"]).optional(),
  place: z.string().max(80).optional(),
  speaker: z.string().max(40).optional(),
  text: z.string().max(200).optional(),
  lang: lang.optional(),
});

export type VoiceAdminResult =
  | { ok: true; courses: { id: string; title: string }[] }
  | { ok: true; status: Awaited<ReturnType<typeof import("./voice.server").voiceStatus>> }
  | { ok: true; recorded: number; left: number; chars: number; today: number }
  | { ok: true; audio: string }
  | { ok: false; error: string };

export const voiceAdmin = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => adminInput.parse(data))
  .handler(async ({ data }): Promise<VoiceAdminResult> => {
    const started = Date.now();
    // Logged to Netlify (Logs → Functions) without the password itself: only whether it is set and matched.
    const expected = process.env.VOICE_ADMIN_CODE?.trim() ?? "";
    console.info(`[voice] ${data.action}: password set in Netlify: ${expected ? "yes" : "no"}, received length ${data.code.trim().length}, expected length ${expected.length}`);
    const server = await import("./voice.server");
    try {
      server.checkVoiceCode(data.code);
      console.info(`[voice] ${data.action}: password ok (${Date.now() - started} ms)`);
      if (data.action === "courses") {
        const { voiceCourses } = await import("./phrases");
        return { ok: true, courses: voiceCourses().map((c) => ({ id: c.id, title: c.title })) };
      }
      if (!data.course && data.action !== "sample") return { ok: false, error: "no course" };
      if (data.action === "status") return { ok: true, status: await server.voiceStatus(data.course!) };
      if (data.action === "record") return { ok: true, ...(await server.recordNext(data.course!, data.place ?? "all")) };
      if (!data.speaker || !data.text || !data.lang) return { ok: false, error: "no sample text" };
      return { ok: true, audio: await server.sampleVoice(data.speaker as never, data.text, data.lang) };
    } catch (error) {
      console.error(`[voice] ${data.action} failed after ${Date.now() - started} ms:`, error instanceof Error ? error.message : error);
      return { ok: false, error: error instanceof server.VoiceError ? error.message : "server error" };
    }
  });
