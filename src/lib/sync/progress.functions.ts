import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { SyncedProgress } from "./merge";

/**
 * Saving the learner's language choice and progress to Neon (DATABASE_URL in Netlify).
 * The browser sends its Netlify Identity token; the server checks it with Netlify and uses
 * only the user id that Netlify confirms. One call both saves and loads: the server combines
 * this device's progress with what the account already has and sends the result back.
 */

const id = z.string().min(1).max(80);

const saveInput = z.object({
  token: z.string().min(1).max(4096),
  nativeLang: z.enum(["en", "ru"]).nullable(),
  targetLang: z.enum(["ru", "tr"]).nullable(),
  course: z.enum(["ru", "tr"]),
  progress: z.object({
    seenIntro: z.boolean(),
    completedLessonIds: z.array(id).max(5000),
    ceremonySeen: z.boolean(),
    finalesSeen: z.array(id).max(500),
    draft: z.object({ lessonId: id, frame: z.number().int().min(0), sub: z.number().int().min(0) }).nullable(),
    resetAt: z.number().min(0),
  }),
});

export type SaveResult = {
  nativeLang: "en" | "ru" | null;
  targetLang: "ru" | "tr" | null;
  progress: SyncedProgress;
};

export const saveMyProgress = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => saveInput.parse(data))
  .handler(async ({ data }): Promise<SaveResult> => {
    const { requireIdentityUserId } = await import("@/lib/identity/verify.server");
    const userId = await requireIdentityUserId(data.token);
    const { getSql } = await import("@/lib/db");
    const { saveProgressForUser } = await import("./progress.server");
    return saveProgressForUser(await getSql(), userId, data);
  });
