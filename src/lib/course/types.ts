export type LevelId = "A1" | "A2" | "B1" | "B2" | "C1";

export type VocabItem = {
  id: string;
  ru: string;
  en: string;
  a11y: string;
  audioLabel: string;
  image: string;
  /** Latin-letter reading help, shown while the learner is still learning the alphabet. */
  translit?: string;
};

export type SpeakerId =
  | "tom"
  | "murzik"
  | "neighbour"
  | "officer"
  | "driver"
  | "passerby"
  | "waiter"
  | "seller"
  | "cashier"
  | "barsik"
  | "musya"
  | "aunt"
  | "uncle"
  | "marco"
  | "irina"
  | "karl"
  | "doctor"
  | "pharmacist"
  | "katya"
  | "editor"
  | "nika"
  | "receptionist"
  | "ewa"
  | "dora"
  | "jamie"
  | "lev"
  // Turkish course
  | "ayse"
  | "kemal"
  | "simitci"
  | "zeynep"
  | "leyla"
  | "mehmet"
  | "tarcin"
  | "minnos"
  | "selin"
  | "captain"
  | "hasan"
  | "zehra"
  | "deniz"
  | "potter"
  | "nur"
  | "postman"
  | "gulsum"
  | "elif"
  | "can"
  | "pilot"
  // English course
  | "hope"
  | "priya"
  | "green"
  | "fiona"
  | "ian"
  | "rory"
  | "isla"
  | "sean"
  | "marcus"
  | "rosie"
  | "emily"
  | "tony"
  | "bernadette"
  | "daniel"
  | "lee"
  | "sam"
  | "michael"
  | "lucy"
  | "may"
  | "chloe"
  | "grace"
  // Portuguese course
  | "lucia"
  | "bia"
  | "pipoca"
  | "claudia"
  | "leo"
  | "zeca"
  | "tiago"
  | "antonio"
  | "neide"
  | "gabriel"
  | "caio"
  | "juliana"
  | "benedito"
  | "rafael"
  | "marta"
  | "celeste"
  | "lia"
  | "paulo"
  | "raimundo"
  | "marcos"
  | "davi"
  | "ana"
  | "mestre"
  | "pintor"
  | "joao";

export type DialogueLine = {
  speaker: SpeakerId;
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

/** Which skill a task trains. The lesson screen shows it as the task's label. */
export type Skill = "words" | "listening" | "grammar" | "letters" | "speaking" | "review";

type Base = {
  id: string;
  prompt: string;
  promptLang?: "ru";
  help?: string;
  image?: string;
  imageA11y?: string;
  skill?: Skill;
  /**
   * Russian text the learner hears instead of reading. It stays hidden until
   * the task is solved, and the answer options lose their own play buttons.
   */
  audio?: string;
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
      /** Join the parts without spaces: a missing letter inside a word. */
      tight?: boolean;
    })
  | (Base & { kind: "build"; words: string[] })
  | (Base & { kind: "spell"; word: string; extra?: string[] })
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

/** One letter of the Russian alphabet, taught with a word from the lesson. */
export type LetterCard = {
  letter: string;
  sound: string;
  example: string;
  exampleEn: string;
  /** A warning for letters that look like English ones but sound different. */
  trap?: string;
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
  /** Seven new phrases. */
  vocab: VocabItem[];
  /** New letters (Paris only). */
  letters?: LetterCard[];
  dialogue: {
    title: string;
    lines: DialogueLine[];
    note?: string;
    /** A question answered after listening, before the text is shown. */
    gist: Activity;
  };
  grammar: GrammarSection[];
  /** About six short tasks, one per skill, in this order. */
  tasks: Activity[];
  reward: Reward;
};

export type StoryBeat = {
  image: string;
  a11y: string;
  lines: { ru?: string; en: string }[];
};

/** The story shown around a city: its welcome card and the farewell scenes after lesson 7. */
export type CityStory = {
  /** Murzik's home in this city, which the lesson rewards furnish. */
  home: { name: string; nameRu: string; image: string; a11y: string };
  /** The reward Murzik takes with him when he leaves. */
  keepsakeId: string;
  welcomeRu: string;
  welcomeEn: string;
  welcomeImage: string;
  welcomeA11y: string;
  departureImage: string;
  departureA11y: string;
  finale: StoryBeat[];
};

export type CityPlan = {
  id: string;
  name: string;
  nameRu: string;
  lessons: Lesson[];
  story?: CityStory;
};

export type LevelPlan = {
  id: LevelId;
  title: string;
  subtitle: string;
  cities: CityPlan[];
};
