import { useEffect } from "react";
import { create } from "zustand";
import { getAccessToken, useIdentity } from "./client";
import { amIDeveloper } from "./developer.functions";

/** True while a developer account is signed in (checked by the server). */
export const useDeveloper = create<{ developer: boolean }>()(() => ({ developer: false }));

/** Asks the server once per sign-in whether this account is a developer. */
export function useDeveloperCheck() {
  const userId = useIdentity((state) => state.userId);
  useEffect(() => {
    if (!userId) {
      useDeveloper.setState({ developer: false });
      return;
    }
    let cancelled = false;
    void (async () => {
      try {
        const token = await getAccessToken();
        if (!token) return;
        const result = await amIDeveloper({ data: { token } });
        if (!cancelled) useDeveloper.setState({ developer: result.developer });
      } catch {
        // No answer (offline): keep the learner view.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [userId]);
}
