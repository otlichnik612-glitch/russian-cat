export type LevelId = "A1" | "A2" | "B1" | "B2" | "C1";

export type VocabItem = {
  id: string;
  ru: string;
  en: string;
  a11y: string;
  audioLabel: string;
  image: string;
};

export type DialogueLine = {
  speaker: "tom" | "murzik";
  ru: string;
  en: string;
};

export type Example = { ru: string; en: string };

export type GrammarSection = {
  title: string;
  paragraphs: string[];
  examples?: Example[];
};

export type ScriptLine =
  | { speaker: string; text: string }
  | { speaker: string; answer: string; options: string[] };

type Base = {
  id: string;
  prompt: string;
  promptLang?: "ru";
  help?: string;
  image?: string;
  imageA11y?: string;
};

export type Activity =
  | (Base & {
      kind: "choice";
      options: { label: string; correct?: boolean }[];
    })
  | (Base & {
      kind: "multi";
      options: { label: string; correct: boolean }[];
    })
  | (Base & { kind: "truefalse"; statement: string; correct: boolean })
  | (Base & { kind: "order"; items: string[] })
  | (Base & {
      kind: "fill";
      before: string;
      after: string;
      answer: string;
      options: string[];
    })
  | (Base & { kind: "build"; words: string[] })
  | (Base & { kind: "match"; pairs: { left: string; right: string }[] })
  | (Base & { kind: "speak"; model: string; modelEn: string })
  | (Base & { kind: "script"; lines: ScriptLine[] });

export type Reward = {
  itemId: string;
  itemName: string;
  itemNameRu: string;
  ru: string;
  en: string;
  a11y: string;
  image: string;
  steps: string[];
  bridge?: string;
};

export type Lesson = {
  id: string;
  level: LevelId;
  cityId: string;
  number: number;
  title: string;
  minutes: number;
  goals: string[];
  vocabNote?: string;
  vocab: VocabItem[];
  miniCheck: Activity[];
  dialogue: { title: string; lines: DialogueLine[]; note?: string };
  comprehension: Activity[];
  grammar: GrammarSection[];
  grammarPractice: Activity[];
  speakingIntro?: string;
  speaking: Activity[];
  contextIntro?: string;
  context?: Activity[];
  review: Activity[];
  reward: Reward;
};

export type CityPlan = {
  id: string;
  name: string;
  nameRu: string;
  lessons: Lesson[];
};

export type LevelPlan = {
  id: LevelId;
  title: string;
  subtitle: string;
  cities: CityPlan[];
};
