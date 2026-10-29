import { pic } from "./art";

/** The learner's own language: it decides the language of the interface and explanations. */
export type NativeLang = "en" | "ru";
/** The language the learner wants to learn. */
export type TargetLang = "ru" | "tr" | "en" | "pt";

export const nativeOptions: { id: NativeLang; label: string; a11y: string }[] = [
  { id: "ru", label: "Русский · Russian", a11y: "Русский, Russian" },
  { id: "en", label: "English · Английский", a11y: "English, Английский" },
];

/**
 * Which courses each native language can choose. `ready: false` = planned, shown as "coming soon".
 * A course marked ready also needs written lessons (checked with courseReady in the picker).
 */
export const courseOptions: Record<NativeLang, { id: TargetLang; label: string; a11y: string; ready: boolean }[]> = {
  en: [
    { id: "ru", label: "Русский · Russian", a11y: "Русский, Russian", ready: true },
    { id: "pt", label: "Португальский · Portuguese", a11y: "Португальский, Portuguese", ready: true },
    { id: "tr", label: "Турецкий · Turkish", a11y: "Турецкий, Turkish", ready: true },
  ],
  ru: [
    { id: "en", label: "Английский · English", a11y: "Английский, English", ready: true },
    { id: "pt", label: "Португальский · Portuguese", a11y: "Португальский, Portuguese", ready: true },
    { id: "tr", label: "Турецкий · Turkish", a11y: "Турецкий, Turkish", ready: true },
  ],
};

/**
 * A small picture of Murzik next to each language button. The same picture is used wherever that language appears.
 * Flags are allowed only here, on the language buttons (English, Turkish, Portuguese). Russian has no flag.
 * `say` is added to the button's VoiceOver label after the language name.
 */
export const languageBadges: Record<NativeLang | TargetLang, { image: string; say: string; a11y: string }> = {
  en: {
    image: pic("languages/en"),
    say: "Мурзик с кофе у флагов · Murzik with coffee by the flags",
    a11y: "Murzik stands between a small American flag and a small British flag on little poles. He holds a paper takeaway coffee cup in one paw and happily waves with the other, like a tourist in New York. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  ru: {
    image: pic("languages/ru"),
    say: "Мурзик у самовара · Murzik by a samovar",
    a11y: "Murzik sits next to a shiny brass samovar with a cup of tea, smiling. Beside him stand three colourful matryoshka dolls of different sizes. No flag. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  pt: {
    image: pic("languages/pt"),
    say: "Мурзик с футбольным мячом у флага · Murzik with a football by the flag",
    a11y: "Murzik does keepy-uppy with a classic black-and-white football, like on a Brazilian beach: the ball bounces up from his knee, he watches it happily, tail up. Next to him a small Brazilian flag on a little pole; a strip of golden sand at the bottom. He wears a plain yellow T-shirt with green trim: no badge, no crest, no number, no logos on the ball. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  tr: {
    image: pic("languages/tr"),
    say: "Мурзик с чаем и симитом у флага · Murzik with tea and a simit by the flag",
    a11y: "Murzik stands proudly, chest out, next to a Turkish flag on a small pole. In one paw he holds a tulip-shaped glass of tea, in the other a round sesame simit. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
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
