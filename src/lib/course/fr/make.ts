import type { Activity, Skill } from "../types";
import { tf as baseTf } from "../make";

/**
 * Helpers for the French version of the Russian course (for French speakers).
 * Same signatures as ../make.ts, with French default texts.
 *
 * The transcription under a phrase is written with French letters:
 * е = ie, ё = io, ю = iou, я = ia, ж = j, х = kh, ч = tch, ш = ch, щ = chtch,
 * ц = ts, у = ou, ы = y, э = è, and the soft sign ь is an apostrophe.
 * In lesson data `ru` = Russian text, `en` = French.
 */

type Extra = {
  help?: string;
  promptLang?: "ru";
  image?: string;
  imageA11y?: string;
  skill?: Skill;
  audio?: string;
  text?: string;
};

export { choice, fill, letter, line, listen, match, missing, multi, read, script, speak, spell, v } from "../make";

export function tf(id: string, statement: string, correct: boolean, prompt = "Vrai ou faux ?", extra?: Extra): Activity {
  return baseTf(id, statement, correct, prompt, extra);
}

/** Put the words in order. */
export function build(id: string, prompt: string, words: string[]): Activity {
  return {
    kind: "build",
    id,
    prompt,
    words,
    help: "Avec les boutons « Monter » et « Descendre », mets les mots dans l'ordre.",
  };
}

/** Put the lines in order. */
export function order(id: string, prompt: string, items: string[]): Activity {
  return {
    kind: "order",
    id,
    prompt,
    items,
    help: "Avec les boutons « Monter » et « Descendre », remets les lignes dans l'ordre.",
  };
}

export type { Activity, Lesson, Reward, ScriptLine } from "../types";
