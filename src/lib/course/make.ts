import type { Activity, DialogueLine, LetterCard, ScriptLine, Skill, SpeakerId, VocabItem } from "./types";

type Extra = {
  help?: string;
  promptLang?: "ru";
  image?: string;
  imageA11y?: string;
  skill?: Skill;
  audio?: string;
};

export function v(
  id: string,
  ru: string,
  en: string,
  a11y: string,
  audioLabel: string,
  image: string,
  translit?: string,
): VocabItem {
  return { id, ru, en, a11y, audioLabel, image, translit };
}

export function line(speaker: SpeakerId, ru: string, en: string): DialogueLine {
  return { speaker, ru, en };
}

export function choice(
  id: string,
  prompt: string,
  options: [string, boolean][],
  extra?: Extra,
): Activity {
  return {
    kind: "choice",
    id,
    prompt,
    ...extra,
    options: options.map(([label, correct]) => ({ label, correct })),
  };
}

export function multi(
  id: string,
  prompt: string,
  options: [string, boolean][],
  extra?: Extra,
): Activity {
  return {
    kind: "multi",
    id,
    prompt,
    ...extra,
    options: options.map(([label, correct]) => ({ label, correct })),
  };
}

export function tf(
  id: string,
  statement: string,
  correct: boolean,
  prompt = "True or false",
  extra?: Extra,
): Activity {
  return { kind: "truefalse", id, prompt, statement, correct, ...extra };
}

export function order(id: string, prompt: string, items: string[]): Activity {
  return { kind: "order", id, prompt, items, help: "Use Up and Down to arrange the lines." };
}

export function fill(
  id: string,
  prompt: string,
  before: string,
  after: string,
  answer: string,
  options: string[],
  extra?: Extra,
): Activity {
  return { kind: "fill", id, prompt, before, after, answer, options, ...extra };
}

export function build(id: string, prompt: string, words: string[]): Activity {
  return { kind: "build", id, prompt, words, help: "Use Up and Down to build the sentence." };
}

export function match(id: string, prompt: string, pairs: [string, string][], extra?: Extra): Activity {
  return {
    kind: "match",
    id,
    prompt,
    ...extra,
    pairs: pairs.map(([left, right]) => ({ left, right })),
  };
}

export function speak(
  id: string,
  prompt: string,
  model: string,
  modelEn: string,
  extra?: Extra,
): Activity {
  return { kind: "speak", id, prompt, model, modelEn, promptLang: "ru", skill: "speaking", ...extra };
}

export function script(id: string, prompt: string, lines: ScriptLine[], extra?: Extra): Activity {
  return { kind: "script", id, prompt, lines, ...extra };
}

export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const arr = [...items];
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const rand = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  const same = arr.every((item, i) => Object.is(item, items[i]));
  if (same && arr.length > 1) {
    [arr[0], arr[1]] = [arr[1]!, arr[0]!];
  }
  return arr;
}

export function hasCyrillic(text: string) {
  return /[А-Яа-яЁё]/.test(text);
}

/** Listen to Russian (text hidden) and choose. */
export function listen(
  id: string,
  prompt: string,
  audio: string,
  options: [string, boolean][],
  extra?: Extra,
): Activity {
  return choice(id, prompt, options, { skill: "listening", ...extra, audio });
}

/** Build a word from its letters. */
export function spell(id: string, prompt: string, word: string, extra?: string[], help?: string): Activity {
  return { kind: "spell", id, prompt, word, extra, help, skill: "letters" };
}

/** Choose the missing letter inside a word: before + ? + after. */
export function missing(
  id: string,
  prompt: string,
  before: string,
  after: string,
  answer: string,
  options: string[],
): Activity {
  return { kind: "fill", id, prompt, before, after, answer, options, tight: true, skill: "letters" };
}

export function letter(letter: string, sound: string, example: string, exampleEn: string, trap?: string): LetterCard {
  return { letter, sound, example, exampleEn, trap };
}
