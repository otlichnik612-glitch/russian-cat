import type { Activity } from "../../types";

/**
 * Helpers for the French version of the Turkish course (for French speakers).
 * Same signatures as ../make.ts, with French default texts.
 *
 * Pronunciation hints are written with French letters: [ou] = u, [u] = ü, [eu] = ı and ö,
 * [ch] = ş, [tch] = ç, [dj] = c, [é]/[è] = e, [gu] = g before e/i. A doubled n or m after a vowel
 * ([onn], [bénimm]) means the vowel is not nasal.
 */
export { choice, fill, letter, line, listen, match, missing, multi, script, speak, v } from "../../make";

export function tf(
  id: string,
  statement: string,
  correct: boolean,
  skill: Activity["skill"] = "words",
  prompt = "Vrai ou faux ?",
): Activity {
  return { kind: "truefalse", id, prompt, statement, correct, skill };
}

/** Put the words in order (Turkish word order is fixed, so this task works well). */
export function build(id: string, prompt: string, words: string[], skill: Activity["skill"] = "grammar"): Activity {
  return { kind: "build", id, prompt, words, skill, help: "Avec les boutons « Monter » et « Descendre », mets les mots dans l'ordre." };
}

export function order(id: string, prompt: string, items: string[]): Activity {
  return { kind: "order", id, prompt, items, help: "Avec les boutons « Monter » et « Descendre », remets les lignes dans l'ordre." };
}

export function spell(id: string, prompt: string, word: string, extra?: string[], help?: string): Activity {
  return { kind: "spell", id, prompt, word, extra, help, skill: "letters" };
}
