import { pic } from "./art";

/** The learner's own language: it decides the language of the interface and explanations. */
export type NativeLang = "en" | "ru";
/** The language the learner wants to learn. */
export type TargetLang = "ru" | "tr";

export const nativeOptions: { id: NativeLang; label: string; a11y: string }[] = [
  { id: "ru", label: "Русский · Russian", a11y: "Русский, Russian" },
  { id: "en", label: "English · Английский", a11y: "English, Английский" },
];

/** Which courses each native language can choose, and whether they are ready. */
export const courseOptions: Record<NativeLang, { id: TargetLang; label: string; a11y: string; ready: boolean }[]> = {
  en: [
    { id: "ru", label: "Русский · Russian", a11y: "Русский, Russian", ready: true },
    { id: "tr", label: "Турецкий · Turkish", a11y: "Турецкий, Turkish. Coming soon", ready: false },
  ],
  ru: [{ id: "tr", label: "Турецкий · Turkish", a11y: "Турецкий, Turkish. Скоро", ready: false }],
};

/** Pictures and texts of the two language screens. Every text is shown in Russian and English. */
export const languageScreens = {
  native: {
    image: pic("languages/1"),
    a11y: "Murzik on cream paper with a faint watercolour world map behind him. He tilts his head with a curious, friendly smile, ears up, holding a small wooden sign with a painted question mark.",
    titleRu: "Выбери свой язык",
    titleEn: "Choose your language",
  },
  target: {
    image: pic("languages/2"),
    a11y: "Murzik on cream paper with dotted travel lines between little cities. He happily balances a small globe on one paw like a ball, eyes shining, scarf fluttering. His suitcase stands at his feet.",
    titleRu: "Какой язык ты хочешь учить?",
    titleEn: "Which language do you want to learn?",
    soonRu: "Курс турецкого скоро появится.",
    soonEn: "Turkish is coming soon.",
  },
};
