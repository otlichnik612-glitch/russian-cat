import type { Sql } from "@/lib/db";
import { mergeProgress, normalizeProgress } from "./merge";
import type { SaveResult } from "./progress.functions";

/**
 * Server-only: save one learner's language choice and progress, combined with what the account
 * already has, and return the combined result. `userId` must come from a checked Identity token.
 */

type SaveData = {
  nativeLang: "en" | "ru" | null;
  targetLang: "ru" | "tr" | null;
  course: "ru" | "tr";
  progress: unknown;
};

const native = (v: unknown) => (v === "en" || v === "ru" ? v : null);
const target = (v: unknown) => (v === "ru" || v === "tr" ? v : null);

export async function saveProgressForUser(sql: Sql, userId: string, data: SaveData): Promise<SaveResult> {
  const course = data.course;

  // Language choice: a value from this device wins; an empty one keeps what the account has.
  const settings = await sql<{ native_language: string | null; target_language: string | null }>`
    insert into user_settings (user_id, native_language, target_language)
    values (${userId}, ${data.nativeLang}, ${data.targetLang})
    on conflict (user_id) do update set
      native_language = coalesce(excluded.native_language, user_settings.native_language),
      target_language = coalesce(excluded.target_language, user_settings.target_language),
      updated_at = now()
    returning native_language, target_language`;

  // What the account already has for this course.
  const stateRows = await sql<{
    seen_intro: boolean;
    ceremony_seen: boolean;
    finales_seen: unknown;
    draft: unknown;
    reset_at: number;
  }>`select seen_intro, ceremony_seen, finales_seen, draft, reset_at
     from user_course_state where user_id = ${userId} and language = ${course}`;
  const lessonRows = await sql<{ lesson_id: string }>`
    select lesson_id from user_progress
    where user_id = ${userId} and language = ${course} and completed`;

  const incoming = normalizeProgress(data.progress);
  const state = stateRows[0];
  const merged =
    state || lessonRows.length > 0
      ? mergeProgress(
          normalizeProgress({
            seenIntro: state?.seen_intro ?? false,
            ceremonySeen: state?.ceremony_seen ?? false,
            finalesSeen: state?.finales_seen ?? [],
            draft: state?.draft ?? null,
            resetAt: Number(state?.reset_at ?? 0),
            completedLessonIds: lessonRows.map((r) => r.lesson_id),
          }),
          incoming,
        )
      : incoming;

  // Lists go to the database as JSON text, which every driver passes the same way.
  const lessons = JSON.stringify(merged.completedLessonIds);

  // Finished lessons: one row each. After a reset, rows that are no longer finished go away.
  await sql`
    delete from user_progress
    where user_id = ${userId} and language = ${course}
      and lesson_id not in (select jsonb_array_elements_text(${lessons}::text::jsonb))`;
  if (merged.completedLessonIds.length > 0) {
    await sql`
      insert into user_progress (user_id, language, lesson_id, completed, last_accessed)
      select ${userId}, ${course}, lesson, true, now()
      from jsonb_array_elements_text(${lessons}::text::jsonb) as lesson
      on conflict (user_id, language, lesson_id) do nothing`;
  }
  if (merged.draft) {
    await sql`
      update user_progress set last_accessed = now()
      where user_id = ${userId} and language = ${course} and lesson_id = ${merged.draft.lessonId}`;
  }

  await sql`
    insert into user_course_state (user_id, language, seen_intro, ceremony_seen, finales_seen, draft, reset_at)
    values (${userId}, ${course}, ${merged.seenIntro}, ${merged.ceremonySeen},
            ${JSON.stringify(merged.finalesSeen)}::text::jsonb,
            ${merged.draft ? JSON.stringify(merged.draft) : null}::text::jsonb, ${merged.resetAt})
    on conflict (user_id, language) do update set
      seen_intro = excluded.seen_intro,
      ceremony_seen = excluded.ceremony_seen,
      finales_seen = excluded.finales_seen,
      draft = excluded.draft,
      reset_at = excluded.reset_at,
      updated_at = now()`;

  const row = settings[0];
  return { nativeLang: native(row?.native_language), targetLang: target(row?.target_language), progress: merged };
}
