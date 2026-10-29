import type { Activity, Lesson, Reward, ScriptLine } from "../types";

/**
 * Helpers for the Turkish course with Russian default texts.
 * The shared helpers in ../make.ts add English help texts; these replace them.
 */
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

/** Put the words in order (Turkish word order is fixed, so this task works well). */
export function build(id: string, prompt: string, words: string[], skill: Activity["skill"] = "grammar"): Activity {
  return { kind: "build", id, prompt, words, skill, help: "Кнопками «Вверх» и «Вниз» поставь слова по порядку." };
}

export function order(id: string, prompt: string, items: string[]): Activity {
  return { kind: "order", id, prompt, items, help: "Кнопками «Вверх» и «Вниз» расставь строки по порядку." };
}

export function spell(id: string, prompt: string, word: string, extra?: string[], help?: string): Activity {
  return { kind: "spell", id, prompt, word, extra, help, skill: "letters" };
}

export type { Activity, Lesson, Reward, ScriptLine };
