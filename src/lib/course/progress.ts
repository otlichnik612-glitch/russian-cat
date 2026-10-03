import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Draft = { lessonId: string; frame: number; sub: number };

type ProgressState = {
  seenIntro: boolean;
  completedLessonIds: string[];
  ceremonySeen: boolean;
  draft: Draft | null;
  setSeenIntro: () => void;
  completeLesson: (id: string) => void;
  setDraft: (draft: Draft | null) => void;
  setCeremonySeen: () => void;
  reset: () => void;
};

const empty = {
  seenIntro: false,
  completedLessonIds: [] as string[],
  ceremonySeen: false,
  draft: null as Draft | null,
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...empty,
      setSeenIntro: () => set({ seenIntro: true }),
      completeLesson: (id) => {
        const cur = get().completedLessonIds;
        if (cur.includes(id)) {
          set({ draft: null });
          return;
        }
        set({ completedLessonIds: [...cur, id], draft: null });
      },
      setDraft: (draft) => set({ draft }),
      setCeremonySeen: () => set({ ceremonySeen: true }),
      reset: () => set({ ...empty }),
    }),
    { name: "russian-cat-progress", skipHydration: true },
  ),
);
