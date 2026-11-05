import type { Activity } from "../../types";

/**
 * Helpers for the French version of the English course (for French speakers).
 * Same signatures as ../make.ts (via ../../make.ts), with French default texts.
 *
 * Pronunciation hints are written with French letters, not IPA and not Cyrillic:
 * [i] = meet, [é] = name, [è] = cat/head, [a] = car/cup, [o] = sorry, [ou] = go/good/two,
 * [aï] = hi/my, [aou] = how, [e] = the (unstressed), [eu] = number.
 * th is written [s] or [z] (tongue between the teeth), h is the aspirated English h,
 * r is the soft English r. Stress is not marked; important cases get a note instead.
 */
export { choice, fill, letter, line, listen, match, missing, multi, read, script, speak, v } from "../../make";

export function tf(
  id: string,
  statement: string,
  correct: boolean,
  skill: Activity["skill"] = "words",
  prompt = "Vrai ou faux ?",
): Activity {
  return { kind: "truefalse", id, prompt, statement, correct, skill };
}

/** Put the words in order (English word order is fixed, so this task works well). */
export function build(id: string, prompt: string, words: string[], skill: Activity["skill"] = "grammar"): Activity {
  return { kind: "build", id, prompt, words, skill, help: "Avec les boutons « Monter » et « Descendre », mets les mots dans l'ordre." };
}

export function order(id: string, prompt: string, items: string[]): Activity {
  return { kind: "order", id, prompt, items, help: "Avec les boutons « Monter » et « Descendre », remets les lignes dans l'ordre." };
}

export function spell(id: string, prompt: string, word: string, extra?: string[], help?: string): Activity {
  return { kind: "spell", id, prompt, word, extra, help, skill: "letters" };
}

export type { Activity, Lesson, Reward, ScriptLine } from "../../types";
