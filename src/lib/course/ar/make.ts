import type { Activity, Lesson, Reward, ScriptLine } from "../types";

/**
 * Helpers for the Arabic course «Сюрприз для бабушки» (for Russian speakers).
 *
 * Every Arabic text is written with `a(arabic, transcription)`: the transcription is shown under the phrase
 * (simple Cyrillic, no special signs). Texts that depend on the learner's gender — what others say to the
 * learner (кайфа халюка / халюки) and what the learner says about themselves (таабан / таабана) — are
 * written `g(male, female)`. `resolveGender(data, "m" | "f")` makes the two versions of the course.
 *
 * In lesson data `ru` = Arabic text, `en` = Russian translation.
 */

const transcriptions = new Map<string, string>();


/** Tidy key: the same letters with any spaces, tatweel or final punctuation trimmed. */
function key(text: string) {
  return text.normalize("NFC").replace(/ـ/g, "").replace(/\s+/g, " ").trim();
}

/** An Arabic text and its transcription. */
export function a(arabic: string, transcription: string): string {
  const k = key(arabic);
  const before = transcriptions.get(k);
  if (before !== undefined && before !== transcription) conflicts.push(`${arabic}: «${before}» / «${transcription}»`);
  transcriptions.set(k, transcription);
  return arabic;
}

/** The same Arabic text written with two different transcriptions (for the checks). */
export const conflicts: string[] = [];

/** The transcription of an Arabic text, if the course has it. */
export function arabicTranscription(text: string): string | undefined {
  return transcriptions.get(key(text));
}

/** All registered Arabic texts (for the checks). */
export function allTranscriptions(): Map<string, string> {
  return transcriptions;
}

/** Arabic letters (and the Arabic-Indic digits). */
export function isArabic(text: string): boolean {
  return /[؀-ۿ]/.test(text);
}

const MARK = "__ar_g";
type Marked = { [MARK]: [string, string] };

/** A text in two versions: for a male learner, for a female learner. Typed as string so the helpers accept it. */
export function g(male: string, female: string): string {
  return { [MARK]: [male, female] } as unknown as string;
}

function isMarked(value: unknown): value is Marked {
  return typeof value === "object" && value !== null && MARK in value;
}

/** Deep copy of the data with every g(…) replaced by one version. */
export function resolveGender<T>(data: T, gender: "m" | "f"): T {
  const walk = (value: unknown): unknown => {
    if (isMarked(value)) return value[MARK][gender === "m" ? 0 : 1];
    if (Array.isArray(value)) return value.map(walk);
    if (value && typeof value === "object") {
      return Object.fromEntries(Object.entries(value).map(([k, item]) => [k, walk(item)]));
    }
    return value;
  };
  return walk(data) as T;
}

export {
  choice,
  fill,
  letter,
  line,
  listen,
  match,
  missing,
  multi,
  script,
  speak,
  v,
} from "../make";

export function tf(
  id: string,
  statement: string,
  correct: boolean,
  skill: Activity["skill"] = "words",
  prompt = "Правда или нет?",
): Activity {
  return { kind: "truefalse", id, prompt, statement, correct, skill };
}

/** Put the words in order. The first word is the one on the right when the sentence is read. */
export function build(id: string, prompt: string, words: string[], skill: Activity["skill"] = "grammar"): Activity {
  return {
    kind: "build",
    id,
    prompt,
    words,
    skill,
    help: "Кнопками «Вверх» и «Вниз» поставь слова по порядку: сверху — первое слово (по-арабски оно справа).",
  };
}

export function spell(id: string, prompt: string, word: string, extra?: string[], help?: string): Activity {
  return { kind: "spell", id, prompt, word, extra, help: help ?? "Нажимай буквы по порядку — справа налево, как пишут по-арабски.", skill: "letters" };
}

export type { Activity, Lesson, Reward, ScriptLine };
