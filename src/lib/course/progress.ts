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
  /** How the course addresses the learner where the language needs it (Arabic “you”): male or female. */
  learnerGender: "m" | "f" | null;
  /** Show the transcription under phrases (courses that have one, like Arabic). On by default. */
  showTranslit: boolean;
  setLearnerGender: (gender: "m" | "f") => void;
  setShowTranslit: (show: boolean) => void;
  /** Finished lessons of every course the account has (from the server), for the "My courses" list. */
  accountCourses: Partial<Record<TargetLang, string[]>>;
  setAccountCourses: (courses: Partial<Record<TargetLang, string[]>>) => void;
  /** Progress of the courses that are not active now, by course (target language). */
  stash: Partial<Record<TargetLang, CourseSnapshot>>;
  setWelcomeDone: () => void;
  setLanguages: (nativeLang: NativeLang, targetLang: TargetLang) => void;
  /** The learner picked their own language on the first screen (the course comes later). */
  setNativeLang: (nativeLang: NativeLang) => void;
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
  learnerGender: null as "m" | "f" | null,
  showTranslit: true,
  stash: {} as Partial<Record<TargetLang, CourseSnapshot>>,
  accountCourses: {} as Partial<Record<TargetLang, string[]>>,
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...empty,
      setSeenIntro: () => set({ seenIntro: true }),
      setWelcomeDone: () => set({ welcomeDone: true }),
      setNativeLang: (nativeLang) => set({ nativeLang }),
      setLearnerGender: (learnerGender) => set({ learnerGender }),
      setShowTranslit: (showTranslit) => set({ showTranslit }),
      setAccountCourses: (accountCourses) => set({ accountCourses }),
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
          learnerGender: s.learnerGender,
          showTranslit: s.showTranslit,
          nativeLang: s.nativeLang,
          targetLang: s.targetLang,
          stash: s.stash,
          accountCourses: s.accountCourses,
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

/**
 * The courses the learner has started: the active one, the ones waiting in the stash and the ones
 * the account has progress in. For each, its finished lessons (device and account combined).
 */
export function startedCourses(state: {
  targetLang: TargetLang | null;
  seenIntro: boolean;
  completedLessonIds: string[];
  stash: Partial<Record<TargetLang, CourseSnapshot>>;
  accountCourses?: Partial<Record<TargetLang, string[]>>;
}): { id: TargetLang; completed: string[] }[] {
  const out = new Map<TargetLang, Set<string>>();
  const add = (id: TargetLang, ids: string[]) => {
    const set = out.get(id) ?? new Set<string>();
    ids.forEach((x) => set.add(x));
    out.set(id, set);
  };
  if (state.targetLang) add(state.targetLang, state.completedLessonIds);
  for (const [id, snap] of Object.entries(state.stash) as [TargetLang, CourseSnapshot | undefined][])
    if (snap && (snap.seenIntro || snap.completedLessonIds.length > 0)) add(id, snap.completedLessonIds);
  for (const [id, ids] of Object.entries(state.accountCourses ?? {}) as [TargetLang, string[] | undefined][])
    if (ids && ids.length > 0) add(id, ids);
  return [...out].map(([id, ids]) => ({ id, completed: [...ids] }));
}
