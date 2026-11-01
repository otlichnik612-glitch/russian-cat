import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { checkVoiceCode, VoiceError } from "./voice-auth";

/**
 * The voice page and the app talk to the server through these calls.
 * - voiceFiles: which phrases of a language have a recording (public, no secrets).
 * - voiceAdmin: status, recording and voice samples, only with the VOICE_ADMIN_CODE password.
 *
 * Login (`courses`) checks the password and returns this list. It does not open the database,
 * call xAI, or load the lesson texts.
 */

const lang = z.string().min(2).max(8);

const VOICE_COURSES: { id: "ru" | "tr" | "en" | "pt" | "ar" | "ko"; title: string }[] = [
  { id: "ru", title: "Русский Кот" },
  { id: "tr", title: "Мурзик в Турции" },
  { id: "en", title: "Мурзик и кафе" },
  { id: "pt", title: "Мурзик и попугай" },
  { id: "ar", title: "Сюрприз для бабушки" },
  { id: "ko", title: "Мяу! Снимаем дораму" },
];

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
    console.error("[voice-admin] request", { action: data.action, course: data.course ?? null });
    try {
      checkVoiceCode(data.code);
      if (data.action === "courses") return { ok: true, courses: VOICE_COURSES };
      const server = await import("./voice.server");
      if (!data.course && data.action !== "sample") return { ok: false, error: "no course" };
      if (data.action === "status") return { ok: true, status: await server.voiceStatus(data.course!) };
      if (data.action === "record") return { ok: true, ...(await server.recordNext(data.course!, data.place ?? "all")) };
      if (!data.speaker || !data.text || !data.lang) return { ok: false, error: "no sample text" };
      return { ok: true, audio: await server.sampleVoice(data.speaker as never, data.text, data.lang) };
    } catch (error) {
      console.error("[voice-admin] handler error", error);
      return { ok: false, error: error instanceof VoiceError ? error.message : "server error" };
    }
  });