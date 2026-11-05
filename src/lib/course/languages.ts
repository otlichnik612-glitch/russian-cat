import { pic } from "./art";

/** The learner's own language: it decides the language of the interface and explanations. */
export type NativeLang = "en" | "ru" | "fr";
/** The language the learner wants to learn. */
export type TargetLang = "ru" | "tr" | "en" | "pt" | "ar" | "zh" | "ko";

export const nativeOptions: { id: NativeLang; label: string; a11y: string }[] = [
  { id: "ru", label: "Русский · Russian", a11y: "Русский, Russian" },
  { id: "en", label: "English · Английский", a11y: "English, Английский" },
  { id: "fr", label: "Français · French", a11y: "Français, French, Французский" },
];

/**
 * Own languages that are planned but not ready yet: shown on the first screen as "coming soon", not selectable.
 * The label is in that language itself. The picture is a language badge, like languageBadges.
 */
export const soonNativeOptions: { id: string; label: string; a11y: string; soon: { lang: string; text: string }[]; image: string; say: string; badgeA11y: string }[] = [
];

/**
 * Which courses each native language can choose. `ready: false` = planned, shown as "coming soon".
 * A course marked ready also needs written lessons (checked with courseReady in the picker).
 * The course names are in the learner's own language: this screen comes after the learner chose it.
 */
export const courseOptions: Record<NativeLang, { id: TargetLang; label: string; ready: boolean }[]> = {
  fr: [
    { id: "ru", label: "Russe", ready: true },
    { id: "en", label: "Anglais", ready: true },
    { id: "pt", label: "Portugais", ready: true },
    { id: "tr", label: "Turc", ready: true },
    { id: "ar", label: "Arabe", ready: true },
    { id: "zh", label: "Chinois", ready: false },
    { id: "ko", label: "Coréen", ready: true },
  ],
  en: [
    { id: "ru", label: "Russian", ready: true },
    { id: "pt", label: "Portuguese", ready: true },
    { id: "tr", label: "Turkish", ready: true },
    { id: "ar", label: "Arabic", ready: false },
    { id: "zh", label: "Chinese", ready: false },
    { id: "ko", label: "Korean", ready: true },
  ],
  ru: [
    { id: "en", label: "Английский", ready: true },
    { id: "pt", label: "Португальский", ready: true },
    { id: "tr", label: "Турецкий", ready: true },
    { id: "ar", label: "Арабский", ready: true },
    { id: "zh", label: "Китайский", ready: false },
    { id: "ko", label: "Корейский", ready: true },
  ],
};

/**
 * A small picture of Murzik next to each language button. The same picture is used wherever that language appears.
 * Flags are allowed only here, on the language buttons (English, Turkish, Portuguese, Chinese, Korean). Russian and Arabic have no flag.
 * `say` is added to the button's VoiceOver label after the language name.
 */
export const languageBadges: Record<NativeLang | TargetLang, { image: string; say: string; a11y: string }> = {
  fr: {
    image: pic("languages/fr"),
    say: "Мурзик в кафе с круассаном · Murzik in a café with a croissant · Murzik au café avec un croissant",
    a11y:
      "Murzik sits at a small round Paris café table. On the table a little white plate with a golden croissant and a tiny cup of coffee. In one paw he holds a small French flag on a little stick, smiling. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  en: {
    image: pic("languages/en"),
    say: "Мурзик с кофе у флагов · Murzik with coffee by the flags · Murzik avec un café près des drapeaux",
    a11y: "Murzik stands between a small American flag and a small British flag on little poles. He holds a paper takeaway coffee cup in one paw and happily waves with the other, like a tourist in New York. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  ru: {
    image: pic("languages/ru"),
    say: "Мурзик у самовара · Murzik by a samovar · Murzik près d’un samovar",
    a11y: "Murzik sits next to a shiny brass samovar with a cup of tea, smiling. Beside him stand three colourful matryoshka dolls of different sizes. No flag. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  pt: {
    image: pic("languages/pt"),
    say: "Мурзик с футбольным мячом у флага · Murzik with a football by the flag · Murzik avec un ballon près du drapeau",
    a11y: "Murzik does keepy-uppy with a classic black-and-white football, like on a Brazilian beach: the ball bounces up from his knee, he watches it happily, tail up. Next to him a small Brazilian flag on a little pole; a strip of golden sand at the bottom. He wears a plain yellow T-shirt with green trim: no badge, no crest, no number, no logos on the ball. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  tr: {
    image: pic("languages/tr"),
    say: "Мурзик с чаем и симитом у флага · Murzik with tea and a simit by the flag · Murzik avec du thé et un simit près du drapeau",
    a11y: "Murzik stands proudly, chest out, next to a Turkish flag on a small pole. In one paw he holds a tulip-shaped glass of tea, in the other a round sesame simit. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  ar: {
    image: pic("languages/ar"),
    say: "Мурзик на верблюде · Murzik on a camel · Murzik sur un chameau",
    a11y: "Murzik sits happily on a small, friendly camel with a colourful saddle blanket. Behind them rises a golden sand dune with a single palm tree. No flag (Arabic is spoken in many countries). Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  zh: {
    image: pic("languages/zh"),
    say: "Мурзик с красным фонариком у флага · Murzik with a red lantern by the flag · Murzik avec une lanterne rouge près du drapeau",
    a11y: "Murzik holds a round red paper lantern with a golden tassel, smiling, next to a small Chinese flag on a little pole. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
  ko: {
    image: pic("languages/ko"),
    say: "Мурзик с хлопушкой у флага · Murzik with a clapperboard by the flag · Murzik avec un clap de cinéma près du drapeau",
    a11y: "Murzik holds a small film clapperboard (no writing on it), ready to snap it shut, like on a TV set, next to a small South Korean flag on a little pole. Square picture, cream background; keep everything inside the central circle, because the app shows it as a small round badge.",
  },
};

/**
 * The first screen (Murzik says hello, the learner picks their own language) is in Russian and English:
 * the learner's language is not known yet. The course screen is in the learner's own language only.
 */
export const languageScreens = {
  native: {
    image: pic("welcome/1"),
    a11y: "Murzik, a ginger kitten in a scarf, stands on cream paper and waves one paw at you with a big, friendly smile. His suitcase stands beside him.",
    helloRu: "Привет! Я Мурзик.",
    helloEn: "Hi! I'm Murzik.",
    textRu: "Путешествуй со мной и учи языки.",
    textEn: "Travel with me and learn languages.",
    titleRu: "Выбери свой язык",
    titleEn: "Choose your language",
    helloFr: "Salut ! Je suis Murzik.",
    textFr: "Voyage avec moi et apprends des langues.",
    titleFr: "Choisis ta langue",
  },
  target: {
    image: pic("languages/2"),
    a11y: {
      ru: "Мурзик на кремовой бумаге с пунктирными маршрутами между маленькими городами. Он радостно балансирует на лапке маленьким глобусом, глаза сияют, шарф развевается. У его ног стоит чемодан.",
      en: "Murzik on cream paper with dotted travel lines between little cities. He happily balances a small globe on one paw like a ball, eyes shining, scarf fluttering. His suitcase stands at his feet.",
      fr: "Murzik sur du papier crème, entre de petites villes reliées par des pointillés. Il fait tenir un petit globe en équilibre sur sa patte comme un ballon, les yeux brillants, l’écharpe au vent. Sa valise est posée à ses pieds.",
    },
    title: { ru: "Какой язык ты хочешь учить?", en: "Which language do you want to learn?", fr: "Quelle langue veux-tu apprendre ?" },
    soonMark: { ru: "скоро", en: "coming soon", fr: "bientôt" },
    back: { ru: "Назад", en: "Back", fr: "Retour" },
    /** Said when a course that is not ready yet is pressed. */
    soon: {
      ru: {
        ar: "Курс арабского скоро появится.",
        zh: "Курс китайского скоро появится.",
        ko: "Курс корейского скоро появится.",
        tr: "Курс турецкого скоро появится.",
        pt: "Курс португальского скоро появится.",
        en: "Курс английского скоро появится.",
        ru: "Курс русского скоро появится.",
      },
      en: {
        ar: "Arabic is coming soon.",
        zh: "Chinese is coming soon.",
        ko: "Korean is coming soon.",
        tr: "Turkish is coming soon.",
        pt: "Portuguese is coming soon.",
        en: "English is coming soon.",
        ru: "Russian is coming soon.",
      },
      fr: {
        ar: "Le cours d’arabe arrive bientôt.",
        zh: "Le cours de chinois arrive bientôt.",
        ko: "Le cours de coréen arrive bientôt.",
        tr: "Le cours de turc arrive bientôt.",
        pt: "Le cours de portugais arrive bientôt.",
        en: "Le cours d’anglais arrive bientôt.",
        ru: "Le cours de russe arrive bientôt.",
      },
    } as Record<NativeLang, Record<TargetLang, string>>,
  },
};
