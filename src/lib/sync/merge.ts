import type { Draft } from "@/lib/course/progress";

/** The part of the learner's progress that is saved to the account. Same shape on the device and in the database. */
export type SyncedProgress = {
  seenIntro: boolean;
  completedLessonIds: string[];
  ceremonySeen: boolean;
  finalesSeen: string[];
  draft: Draft | null;
  resetAt: number;
};

export const emptyProgress: SyncedProgress = {
  seenIntro: false,
  completedLessonIds: [],
  ceremonySeen: false,
  finalesSeen: [],
  draft: null,
  resetAt: 0,
};

/** Read anything (old saved data, a database row) into a clean SyncedProgress. */
export function normalizeProgress(value: unknown): SyncedProgress {
  const v = (value && typeof value === "object" ? value : {}) as Partial<Record<keyof SyncedProgress, unknown>>;
  const strings = (list: unknown) =>
    Array.isArray(list) ? [...new Set(list.filter((x): x is string => typeof x === "string"))].sort() : [];
  const d = v.draft as Partial<Draft> | null | undefined;
  const draft =
    d && typeof d.lessonId === "string" && typeof d.frame === "number" && typeof d.sub === "number"
      ? { lessonId: d.lessonId, frame: d.frame, sub: d.sub }
      : null;
  return {
    seenIntro: v.seenIntro === true,
    completedLessonIds: strings(v.completedLessonIds),
    ceremonySeen: v.ceremonySeen === true,
    finalesSeen: strings(v.finalesSeen),
    draft,
    resetAt: typeof v.resetAt === "number" && Number.isFinite(v.resetAt) ? v.resetAt : 0,
  };
}

/**
 * Combine saved progress with progress from a device.
 * - If one side was reset later than the other, that side wins as it is (a reset must not be undone).
 * - Otherwise nothing is lost: finished lessons and farewells from both sides are kept.
 *   The unfinished lesson comes from the device (`incoming`): that is where the learner is now.
 */
export function mergeProgress(saved: SyncedProgress, incoming: SyncedProgress): SyncedProgress {
  if (incoming.resetAt > saved.resetAt) return incoming;
  if (saved.resetAt > incoming.resetAt) return saved;
  const completed = [...new Set([...saved.completedLessonIds, ...incoming.completedLessonIds])].sort();
  return {
    seenIntro: saved.seenIntro || incoming.seenIntro,
    completedLessonIds: completed,
    ceremonySeen: saved.ceremonySeen || incoming.ceremonySeen,
    finalesSeen: [...new Set([...saved.finalesSeen, ...incoming.finalesSeen])].sort(),
    draft: incoming.draft,
    resetAt: incoming.resetAt,
  };
}

export function sameProgress(a: SyncedProgress, b: SyncedProgress): boolean {
  return JSON.stringify(normalizeProgress(a)) === JSON.stringify(normalizeProgress(b));
}
