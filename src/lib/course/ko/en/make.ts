import type { Activity, Lesson, Reward, ScriptLine } from "../../types";
import { v as baseV } from "../../make";
import { romanize } from "../romanize";

/**
 * Helpers for the English version of the Korean course (for English speakers).
 *
 * Every Korean text is written with `k(hangul)`: the romanization under the phrase is made automatically
 * in Revised Romanization (the official South Korean system). A second argument overrides it where the
 * automatic reading is wrong (for example 맛없어요 = madeopseoyo). Names get a capital letter.
 * In lesson data `ru` = Korean text, `en` = English translation.
 */

const romanizations = new Map<string, string>();

/** The same Korean text written with two different romanizations (for the checks). */
export const conflicts: string[] = [];

function key(text: string) {
  return text.normalize("NFC").replace(/\s+/g, " ").trim();
}

/** Korean words that are names: their romanization starts with a capital letter. */
const NAMES = [
  "서울", "무르직", "수아", "민호", "지연", "홍대", "수원", "남이섬", "강릉", "설악산", "안동", "경주", "대구", "부산", "통영",
  "전주", "제주", "인천", "파리", "프랑스", "마야", "런던", "미국", "영국", "한국",
];
const NAME_EXACT = ["박"];

function capitalize(hangul: string, roman: string): string {
  const hw = hangul.split(/\s+/);
  const rw = roman.split(/\s+/);
  if (hw.length !== rw.length) return roman;
  return rw
    .map((w, n) => {
      const h = hw[n]!.replace(/[^가-힣]/g, "");
      const isName = NAMES.some((name) => h.startsWith(name)) || NAME_EXACT.includes(h);
      return isName ? w.replace(/[a-z]/, (c) => c.toUpperCase()) : w;
    })
    .join(" ");
}

/** A Korean text; its romanization is made automatically unless given. */
export function k(hangul: string, roman?: string): string {
  const id = key(hangul);
  const value = roman ?? capitalize(id, romanize(id));
  const before = romanizations.get(id);
  if (before !== undefined && before !== value) conflicts.push(`${hangul}: “${before}” / “${value}”`);
  romanizations.set(id, value);
  return hangul;
}

/** The romanization of a Korean text, if the course has it. */
export function koreanRomanization(text: string): string | undefined {
  return romanizations.get(key(text));
}

/** All registered Korean texts (for the checks). */
export function allRomanizations(): Map<string, string> {
  return romanizations;
}

export { isKorean } from "../make";
export { choice, fill, letter, line, listen, match, missing, multi, script, speak } from "../../make";

/** A new word. The play button is labelled “Listen: <romanization>” unless a label is given. */
export function v(id: string, ru: string, en: string, a11y: string, audioLabel: string, image: string) {
  return baseV(id, ru, en, a11y, audioLabel || `Listen: ${koreanRomanization(ru) ?? ru}`, image);
}

export function tf(id: string, statement: string, correct: boolean, skill: Activity["skill"] = "words", prompt = "True or false?"): Activity {
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
    help: "Use Up and Down to put the words in order, first word at the top. In Korean the verb always comes last.",
  };
}

/** Build a word from its syllable blocks. */
export function spell(id: string, prompt: string, word: string, extra?: string[], help?: string): Activity {
  return { kind: "spell", id, prompt, word, extra, help: help ?? "Tap the syllables in order, left to right.", skill: "letters" };
}

export type { Activity, Lesson, Reward, ScriptLine };
