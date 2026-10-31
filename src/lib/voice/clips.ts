import { create } from "zustand";
import { audioKey, NARRATOR, type VoiceId } from "@/lib/course/audio";
import { grokLanguage } from "./phrases-lang";
import { voiceFiles } from "./voice.functions";

/**
 * Which phrases of the active course have a recording (from the voice page), loaded once per language.
 * A phrase without a recording is read by the phone's own voice, as before.
 */
export const useClips = create<{ lang: string | null; files: Record<string, number> }>()(() => ({ lang: null, files: {} }));

let loading: string | null = null;

/** Load the list for a course's speech language (e.g. "ko-KR"). Safe to call on every render. */
export function loadClips(speechLang: string) {
  const lang = grokLanguage(speechLang);
  if (useClips.getState().lang === lang || loading === lang) return;
  loading = lang;
  void voiceFiles({ data: { lang } })
    .then((files) => {
      if (loading === lang) useClips.setState({ lang, files });
    })
    .catch(() => undefined)
    .finally(() => {
      if (loading === lang) loading = null;
    });
}

/** The address of a recording of this phrase: in this character's voice, else in Murzik's; null if none. */
export function clipUrl(text: string, voice: VoiceId): string | null {
  const { lang, files } = useClips.getState();
  if (!lang) return null;
  const key = audioKey(text);
  for (const who of voice === NARRATOR ? [voice] : [voice, NARRATOR]) {
    const v = files[`${who}/${key}`];
    if (v) return `/api/voice/${lang}/${who}/${key}?v=${v}`;
  }
  return null;
}
