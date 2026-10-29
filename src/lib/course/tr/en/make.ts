import type { Activity } from "../../types";

/**
 * Helpers for the English version of the Turkish course (for English speakers).
 * Same signatures as ../make.ts, with English default texts.
 */
export { choice, fill, letter, line, listen, match, missing, multi, script, speak, v } from "../../make";

export function tf(
  id: string,
  statement: string,
  correct: boolean,
  skill: Activity["skill"] = "words",
  prompt = "True or false?",
): Activity {
  return { kind: "truefalse", id, prompt, statement, correct, skill };
}

/** Put the words in order (Turkish word order is fixed, so this task works well). */
export function build(id: string, prompt: string, words: string[], skill: Activity["skill"] = "grammar"): Activity {
  return { kind: "build", id, prompt, words, skill, help: "Use Up and Down to put the words in order." };
}

export function order(id: string, prompt: string, items: string[]): Activity {
  return { kind: "order", id, prompt, items, help: "Use Up and Down to put the lines in order." };
}

export function spell(id: string, prompt: string, word: string, extra?: string[], help?: string): Activity {
  return { kind: "spell", id, prompt, word, extra, help, skill: "letters" };
}
