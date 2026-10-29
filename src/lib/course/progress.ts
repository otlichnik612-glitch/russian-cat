import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { NativeLang, TargetLang } from "./languages";

export type Draft = { lessonId: string; frame: number; sub: number };

/** Progress in one course. The store holds the active course's progress; the others wait in `stash`. */
export type CourseSnapshot = {
  seenIntro: boolean;
  completedLessonIds: string[];
  ceremonySeen: boolean;
  finalesSeen: string[];
  draft: Draft | null;
  resetAt: number;
};

type ProgressState = {
  seenIntro: boolean;
  completedLessonIds: string[];
  /** Paris farewell seen (kept for progress saved before London existed). */
  ceremonySeen: boolean;
  /** Cities whose farewell story has been seen. */
  finalesSeen: string[];
  draft: Draft | null;
  /** The learner's own language and the course they chose. Empty for progress saved before languages existed. */
  nativeLang: NativeLang | null;
  targetLang: TargetLang | null;
  /** When progress was last reset (ms). Saved progress from before that moment is not merged back. 0 = never. */
  resetAt: number;
  /** The welcome and sign-in screens were passed (signed in or "Not now"). Stays on this device only. */
  welcomeDone: boolean;
  /** Progress of the courses that are not active now, by course (target language). */
  stash: Partial<Record<TargetLang, CourseSnapshot>>;
  setWelcomeDone: () => void;
  setLanguages: (nativeLang: NativeLang, targetLang: TargetLang) => void;
  setSeenIntro: () => void;
  completeLesson: (id: string) => void;
  setDraft: (draft: Draft | null) => void;
  setFinaleSeen: (cityId: string) => void;
  reset: () => void;
};

const emptyCourse: CourseSnapshot = {
  seenIntro: false,
  completedLessonIds: [],
  ceremonySeen: false,
  finalesSeen: [],
  draft: null,
  resetAt: 0,
};

const empty = {
  seenIntro: false,
  completedLessonIds: [] as string[],
  ceremonySeen: false,
  finalesSeen: [] as string[],
  draft: null as Draft | null,
  nativeLang: null as NativeLang | null,
  targetLang: null as TargetLang | null,
  resetAt: 0,
  welcomeDone: false,
  stash: {} as Partial<Record<TargetLang, CourseSnapshot>>,
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...empty,
      setSeenIntro: () => set({ seenIntro: true }),
      setWelcomeDone: () => set({ welcomeDone: true }),
      // Switching course keeps the old course's progress in the stash and brings back the new one's.
      setLanguages: (nativeLang, targetLang) => {
        const s = get();
        const current = s.targetLang ?? "ru";
        if (current === targetLang) return set({ nativeLang, targetLang });
        const snapshot: CourseSnapshot = {
          seenIntro: s.seenIntro,
          completedLessonIds: s.completedLessonIds,
          ceremonySeen: s.ceremonySeen,
          finalesSeen: s.finalesSeen,
          draft: s.draft,
          resetAt: s.resetAt,
        };
        const stash = { ...s.stash, [current]: snapshot };
        const restored = stash[targetLang] ?? emptyCourse;
        delete stash[targetLang];
        set({ nativeLang, targetLang, stash, ...restored });
      },
      completeLesson: (id) => {
        const cur = get().completedLessonIds;
        if (cur.includes(id)) {
          set({ draft: null });
          return;
        }
        set({ completedLessonIds: [...cur, id], draft: null });
      },
      setDraft: (draft) => set({ draft }),
      setFinaleSeen: (cityId) => {
        const cur = get().finalesSeen ?? [];
        if (!cur.includes(cityId)) set({ finalesSeen: [...cur, cityId] });
      },
      // Resets the active course only; the chosen languages and other courses stay.
      reset: () => {
        const s = get();
        set({
          ...empty,
          resetAt: Date.now(),
          welcomeDone: s.welcomeDone,
          nativeLang: s.nativeLang,
          targetLang: s.targetLang,
          stash: s.stash,
        });
      },
    }),
    { name: "russian-cat-progress", skipHydration: true },
  ),
);

/** Farewell stories already seen, including the Paris one saved by older versions. */
export function seenFinales(state: { ceremonySeen: boolean; finalesSeen?: string[] }): string[] {
  const list = state.finalesSeen ?? [];
  return state.ceremonySeen && !list.includes("paris") ? ["paris", ...list] : list;
}
