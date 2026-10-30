import type { Activity, Lesson, Reward, ScriptLine } from "../types";

/**
 * Helpers for the Korean course (for Russian speakers).
 *
 * Every Korean text is written with `k(hangul, transcription)`: the transcription is shown under the phrase
 * in simple Cyrillic (based on the Kontsevich system, written as the phrase sounds, no special signs).
 * In lesson data `ru` = Korean text, `en` = Russian translation.
 */

const transcriptions = new Map<string, string>();

/** The same Korean text written with two different transcriptions (for the checks). */
export const conflicts: string[] = [];

function key(text: string) {
  return text.normalize("NFC").replace(/\s+/g, " ").trim();
}

/** A Korean text and its transcription. */
export function k(hangul: string, transcription: string): string {
  const id = key(hangul);
  const before = transcriptions.get(id);
  if (before !== undefined && before !== transcription) conflicts.push(`${hangul}: «${before}» / «${transcription}»`);
  transcriptions.set(id, transcription);
  return hangul;
}

/** The transcription of a Korean text, if the course has it. */
export function koreanTranscription(text: string): string | undefined {
  return transcriptions.get(key(text));
}

/** All registered Korean texts (for the checks). */
export function allTranscriptions(): Map<string, string> {
  return transcriptions;
}

/** Hangul syllables or letters. */
export function isKorean(text: string): boolean {
  return /[ᄀ-ᇿ㄰-㆏가-힯]/.test(text);
}

export { choice, fill, letter, line, listen, match, missing, multi, script, speak, v } from "../make";

export function tf(id: string, statement: string, correct: boolean, skill: Activity["skill"] = "words", prompt = "Правда или нет?"): Activity {
  return { kind: "truefalse", id, prompt, statement, correct, skill };
}

/** Put the words in order. */
export function build(id: string, prompt: string, words: string[], skill: Activity["skill"] = "grammar"): Activity {
  return {
    kind: "build",
    id,
    prompt,
    words,
    skill,
    help: "Кнопками «Вверх» и «Вниз» поставь слова по порядку: сверху — первое слово. В корейском глагол всегда в конце.",
  };
}

/** Build a word from its syllable blocks. */
export function spell(id: string, prompt: string, word: string, extra?: string[], help?: string): Activity {
  return { kind: "spell", id, prompt, word, extra, help: help ?? "Нажимай слоги по порядку, слева направо.", skill: "letters" };
}

export type { Activity, Lesson, Reward, ScriptLine };
