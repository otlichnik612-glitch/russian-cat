import { useEffect, useRef } from "react";
import { create } from "zustand";
import { getAccessToken, identityAvailable, useIdentity } from "@/lib/identity/client";
import { useProgress } from "@/lib/course/progress";
import { normalizeProgress, sameProgress } from "./merge";
import { saveMyProgress } from "./progress.functions";

/** "off": sign-in is not available here (Grok preview); "local": not signed in, progress stays on this device. */
export type SyncStatus = "off" | "local" | "saving" | "saved" | "error";

export const useSyncStatus = create<{ status: SyncStatus; set: (status: SyncStatus) => void }>()((set) => ({
  status: "local",
  set: (status) => set({ status }),
}));

const SAVE_DELAY_MS = 3000;
const RETRY_DELAY_MS = 30_000;

/**
 * Keeps the device and the account in step while the learner is signed in.
 * - Right after sign-in: sends this device's progress; the server combines it with what the account
 *   already has and sends the result back, so nothing done on either side is lost.
 * - Then: every change is saved a few seconds later (and at once when the page is hidden).
 * The app keeps working without an account or a connection: progress always stays on the device too
 * (localStorage), so if the database cannot be reached nothing is lost and the next save catches up.
 * `onRestored` runs after the first successful sync, so the app can skip the opening on a new phone.
 */
export function useProgressSync(onRestored?: () => void) {
  const userId = useIdentity((state) => state.userId);
  const restored = useRef(onRestored);
  restored.current = onRestored;

  useEffect(() => {
    const setStatus = useSyncStatus.getState().set;
    if (!identityAvailable()) return setStatus("off");
    if (!userId) return setStatus("local");

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let inFlight = false;
    let again = false;
    let applying = false;
    let unsubscribe: (() => void) | undefined;

    const push = async (first: boolean): Promise<void> => {
      if (inFlight) {
        again = true;
        return;
      }
      inFlight = true;
      timer = undefined;
      setStatus("saving");
      try {
        const token = await getAccessToken();
        if (!token) {
          if (useIdentity.getState().userId) {
            setStatus("error");
            retry(first);
          } else setStatus("local");
          return;
        }
        const state = useProgress.getState();
        const result = await saveMyProgress({
          data: {
            token,
            nativeLang: state.nativeLang,
            targetLang: state.targetLang,
            course: state.targetLang ?? "ru",
            progress: normalizeProgress(state),
          },
        });
        if (cancelled) return;
        const now = useProgress.getState();
        const patch: Partial<ReturnType<typeof useProgress.getState>> = {};
        if (!sameProgress(normalizeProgress(now), result.progress)) Object.assign(patch, result.progress);
        if (result.nativeLang && result.nativeLang !== now.nativeLang) patch.nativeLang = result.nativeLang;
        if (result.targetLang && result.targetLang !== now.targetLang) patch.targetLang = result.targetLang;
        if (Object.keys(patch).length > 0) {
          applying = true;
          useProgress.setState(patch);
          applying = false;
        }
        setStatus("saved");
        if (first) restored.current?.();
      } catch {
        // Database or network not reachable: progress is safe on the device; try again later.
        if (!cancelled) {
          setStatus("error");
          retry(first);
        }
      } finally {
        inFlight = false;
        if (again && !cancelled) {
          again = false;
          schedule();
        }
      }
    };

    const retry = (first: boolean) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => void push(first), RETRY_DELAY_MS);
    };

    const schedule = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => void push(false), SAVE_DELAY_MS);
    };

    const flush = () => {
      if (timer && document.visibilityState === "hidden") {
        clearTimeout(timer);
        void push(false);
      }
    };

    const start = () => {
      if (cancelled) return;
      void push(true);
      unsubscribe = useProgress.subscribe(() => {
        if (!applying) schedule();
      });
    };

    let unsubscribeHydration: (() => void) | undefined;
    if (useProgress.persist.hasHydrated()) start();
    else unsubscribeHydration = useProgress.persist.onFinishHydration(start);
    document.addEventListener("visibilitychange", flush);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      unsubscribe?.();
      unsubscribeHydration?.();
      document.removeEventListener("visibilitychange", flush);
    };
  }, [userId]);
}
