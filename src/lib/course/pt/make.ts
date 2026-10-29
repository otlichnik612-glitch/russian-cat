import type { Activity, Example, GrammarSection, LetterCard, ScriptLine, VocabItem } from "../types";
import { choice, fill, line, listen, match, missing, multi, script, speak } from "../make";

/**
 * Helpers for the Brazilian Portuguese course.
 *
 * One course, two explanation languages: Russian (for Russian speakers) and English (for English speakers).
 * The Portuguese text, the story and the pictures are shared. Every text in the learner's language is written
 * with `t(russian, english)`: each version is written for its own learners, not translated word for word.
 * `resolveFor(data, "ru" | "en")` turns the shared data into the lessons of one version.
 *
 * In lesson data `ru` = Portuguese text, `en` = the learner's language (Russian or English).
 */

export type PtNative = "ru" | "en";

const MARK = "__pt_t";
type Marked = { [MARK]: [string, string] };

/** A text in the learner's language: Russian version, English version. Typed as string so the shared helpers accept it. */
export function t(ru: string, en: string): string {
  return { [MARK]: [ru, en] } as unknown as string;
}

function isMarked(value: unknown): value is Marked {
  return typeof value === "object" && value !== null && MARK in value;
}

/** Deep copy of the data with every t(…) replaced by the text for one version. */
export function resolveFor<T>(data: T, lang: PtNative): T {
  const walk = (value: unknown): unknown => {
    if (isMarked(value)) return value[MARK][lang === "ru" ? 0 : 1];
    if (Array.isArray(value)) return value.map(walk);
    if (value && typeof value === "object") {
      return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, walk(item)]));
    }
    return value;
  };
  return walk(data) as T;
}

/** "Bom dia!" → "Bom dia": the phrase without the final punctuation, for button labels. */
function bare(text: string) {
  return text.replace(/[.!?…]+$/u, "").trim();
}

/**
 * A new phrase. `a11y` describes the picture (both versions); the picture itself is drawn from the English one.
 * `hint` is the pronunciation help shown in Rio only: Cyrillic for Russian speakers, English spelling for English speakers.
 */
export function v(id: string, pt: string, tr: string, a11y: string, image: string, hint?: string): VocabItem {
  const label = bare(pt);
  return { id, ru: pt, en: tr, a11y, audioLabel: t(`Послушать ${label}`, `Listen to ${label}`), image, translit: hint };
}

export function tf(id: string, statement: string, correct: boolean, skill: Activity["skill"] = "words", prompt?: string): Activity {
  return { kind: "truefalse", id, prompt: prompt ?? t("Правда или нет?", "True or false?"), statement, correct, skill };
}

export function build(id: string, prompt: string, words: string[], skill: Activity["skill"] = "grammar"): Activity {
  return {
    kind: "build",
    id,
    prompt,
    words,
    skill,
    help: t("Кнопками «Вверх» и «Вниз» поставь слова по порядку.", "Use Up and Down to put the words in order."),
  };
}

export function spell(id: string, prompt: string, word: string, extra?: string[]): Activity {
  return { kind: "spell", id, prompt, word, extra, skill: "letters" };
}

export function letter(letterText: string, sound: string, example: string, exampleTr: string, trap?: string): LetterCard {
  return { letter: letterText, sound, example, exampleEn: exampleTr, trap };
}

/** A grammar section: title, paragraphs, examples as [Portuguese, translation]. */
export function g(title: string, paragraphs: string[], examples: [string, string][] = []): GrammarSection {
  return { title, paragraphs, examples: examples.map(([ru, en]): Example => ({ ru, en })) };
}

/** "You" in mini-dialogues. */
export const YOU = t("Ты", "You");

/** "Match the pairs." */
export const PAIRS = t("Соедини пары.", "Match the pairs.");

export { choice, fill, line, listen, match, missing, multi, script, speak };
export type { Activity, ScriptLine };
