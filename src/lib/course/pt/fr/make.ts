import type { Activity, Example, GrammarSection, LetterCard, ScriptLine, VocabItem } from "../../types";
import { choice, fill, line, listen, match, missing, multi, script, speak } from "../../make";

/**
 * Helpers for the French version of the Brazilian Portuguese course.
 * The Portuguese text, the story and the pictures are shared with the other versions;
 * every text in the learner's language is written fresh, in French.
 * In lesson data `ru` = Portuguese text, `en` = French.
 *
 * Pronunciation hints use French letters: ou = [u], é/è, in/an for the nasal vowels,
 * dj = [dʒ], tch = [tʃ], lh = [ʎ], nh = [ɲ]. Stress is marked with an acute accent.
 */

/** "Bom dia!" → "Bom dia": the phrase without the final punctuation, for button labels. */
function bare(text: string) {
  return text.replace(/[.!?…]+$/u, "").trim();
}

/**
 * A new phrase. `a11y` describes the picture; the picture itself is shared with the other versions.
 * `hint` is the pronunciation help shown in Rio only, written with French letters.
 */
export function v(id: string, pt: string, tr: string, a11y: string, image: string, hint?: string): VocabItem {
  const label = bare(pt);
  return { id, ru: pt, en: tr, a11y, audioLabel: `Écouter ${label}`, image, translit: hint };
}

export function tf(id: string, statement: string, correct: boolean, skill: Activity["skill"] = "words", prompt = "Vrai ou faux ?"): Activity {
  return { kind: "truefalse", id, prompt, statement, correct, skill };
}

export function build(id: string, prompt: string, words: string[], skill: Activity["skill"] = "grammar"): Activity {
  return {
    kind: "build",
    id,
    prompt,
    words,
    skill,
    help: "Avec les boutons « Monter » et « Descendre », mets les mots dans l'ordre.",
  };
}

export function spell(id: string, prompt: string, word: string, extra?: string[]): Activity {
  return { kind: "spell", id, prompt, word, extra, skill: "letters" };
}

export function letter(letterText: string, sound: string, example: string, exampleTr: string, trap?: string): LetterCard {
  return { letter: letterText, sound, example, exampleEn: exampleTr, trap };
}

/** A grammar section: title, paragraphs, examples as [Portuguese, French]. */
export function g(title: string, paragraphs: string[], examples: [string, string][] = []): GrammarSection {
  return { title, paragraphs, examples: examples.map(([ru, en]): Example => ({ ru, en })) };
}

/** "You" in mini-dialogues. */
export const YOU = "Toi";

/** "Match the pairs." */
export const PAIRS = "Relie les paires.";

export { choice, fill, line, listen, match, missing, multi, script, speak };
export type { Activity, ScriptLine };
