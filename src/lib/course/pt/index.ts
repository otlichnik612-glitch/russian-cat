import type { CourseDef, MixedWordTexts } from "../active";
import { pic } from "../art";
import { hasCyrillic } from "../make";
import { makeCourse } from "../model";
import type { CityPlan, LevelPlan } from "../types";
import type { UiLang } from "../ui-text";
import { ptCities } from "./cities";
import { resolveFor, t, type PtNative } from "./make";
import { ptSpeakers } from "./speakers";

/**
 * «Мурзик и попугай» / "Murzik and the Parrot" — Brazilian Portuguese, A1, for Russian and for English speakers.
 * Dona Lúcia's parrot Pipoca escapes in Rio inside the drum case of a touring band. Murzik and her granddaughter Bia
 * follow the tour across Brazil and bring him back for her 80th birthday.
 * The Portuguese, the story and the pictures are shared; explanations are written separately for each language.
 * In lesson data `ru` = Portuguese text, `en` = the learner's language.
 */

const prologue = {
  find: {
    image: pic("pt/prologue/1"),
    a11y: t(
      "Утро в Париже. На соседнем балконе в клетке сидит зелёный попугай с жёлтой головой и что-то громко кричит. Мурзик выглядывает из своего окна и смеётся.",
      "Morning in Paris. On the next balcony a green parrot with a yellow head sits in a cage, shouting something. Murzik leans out of his window, laughing.",
    ),
    title: t("Утро в Париже", "Morning in Paris"),
    text: t(
      "Каждое утро попугай моей соседки, доны Лусии, кричит мне через балкон: «Bom dia, Murzik!» Его зовут Пипока — по-португальски «попкорн».",
      "Every morning my neighbour Dona Lúcia's parrot shouts at me across the balcony: “Bom dia, Murzik!” His name is Pipoca — that's Portuguese for “popcorn”.",
    ),
  },
  postcard: {
    image: pic("pt/prologue/2"),
    a11y: t(
      "Крупно: яркое приглашение с пальмами и нотами. Дона Лусия, пожилая весёлая дама в цветастом платье, протягивает его Мурзику.",
      "Close-up: a bright invitation with palm trees and musical notes. Dona Lúcia, a cheerful old lady in a flowery dress, hands it to Murzik.",
    ),
    ru: "Festa dos 80 anos da Dona Lúcia — Rio de Janeiro",
    en: t("Праздник: доне Лусии 80 лет — Рио-де-Жанейро", "Dona Lúcia's 80th birthday party — Rio de Janeiro"),
    text: t(
      "Дона Лусия родом из Бразилии. Скоро ей 80, и вся её семья соберётся в Рио. Она зовёт меня с собой! И Пипока, конечно, тоже летит.",
      "Dona Lúcia is from Brazil. She'll be 80 soon, and her whole family is getting together in Rio. She's invited me along! And Pipoca is coming too, of course.",
    ),
    question: t("Что может случиться в стране, где все так любят музыку?", "What could happen in a country where everyone loves music this much?"),
  },
  journey: {
    image: pic("pt/prologue/3"),
    a11y: t(
      "Мурзик и дона Лусия в самолёте. На коленях у доны Лусии клетка с Пипокой. В иллюминаторе — море и зелёные горы Рио.",
      "Murzik and Dona Lúcia on the plane. Pipoca's cage is on Dona Lúcia's lap. Through the window: the sea and the green hills of Rio.",
    ),
    text: t(
      "Мы летим в Рио-де-Жанейро! Там меня ждёт внучка доны Лусии, Биа. В каждом городе у меня будет своё маленькое жильё, и за каждый пройденный урок ты получаешь для него новую вещь. А с собой я буду брать самое дорогое.",
      "We're flying to Rio de Janeiro! Dona Lúcia's granddaughter Bia is waiting for us there. In every city I'll have a little home of my own, and every lesson you finish brings a new thing for it. And I'll take the most precious things with me.",
    ),
  },
};

const intro = {
  heading: t("Учи португальский вместе со мной!", "Learn Portuguese with me!"),
  tomBold: t("Знакомься, это Биа!", "Meet Bia!"),
  tomRest: t(
    "Она из Рио, португальский — её родной язык. Она будет нам помогать. Присоединяйся!",
    "She's from Rio, and Portuguese is her language. She'll help us along the way. Come with us!",
  ),
  start: t("Наше путешествие начинается в Рио-де-Жанейро!", "Our journey begins in Rio de Janeiro!"),
  go: t("Вперёд!", "Let's go!"),
  companionImage: pic("pt/bia"),
};

const uiOverrides = {
  letters: t("Португальские буквы", "Portuguese letters"),
  lettersIntro: t(
    "В португальском почти те же латинские буквы, но некоторые читаются по-своему. Вот буквы из сегодняшних фраз.",
    "Portuguese uses the same Latin letters as English, but many are said differently. Here are the letters from today's phrases.",
  ),
  playTarget: t("Послушать по-португальски", "Listen in Portuguese"),
  continueJourney: t("Путешествие продолжается!", "Continue your Portuguese journey."),
};

function levelsFor(lang: PtNative): LevelPlan[] {
  const cities: CityPlan[] = ptCities.map((c) => ({ id: c.id, name: c.name, nameRu: c.namePt, lessons: c.lessons, story: c.story }));
  return [
    {
      id: "A1",
      title: "A1",
      subtitle: t("Первые разговоры и жизнь в пути", "First conversations and life on the road"),
      cities: resolveFor(cities, lang),
    },
  ];
}

/** Portuguese text: Latin letters and no Cyrillic. Russian explanations are Cyrillic. */
function isPortugueseForRussians(text: string): boolean {
  return /[A-Za-zÀ-ÿ]/.test(text) && !hasCyrillic(text);
}

function makeDef(lang: PtNative, isTarget: (text: string) => boolean): CourseDef {
  return {
    id: "pt",
    speechLang: "pt-BR",
    htmlLang: "pt-BR",
    uiLang: lang as UiLang,
    title: lang === "ru" ? "Мурзик и попугай" : "Murzik and the Parrot",
    model: makeCourse(levelsFor(lang)),
    isTarget,
    prologue: resolveFor(prologue, lang),
    intro: resolveFor(intro, lang),
    speakers: ptSpeakers(lang),
    uiOverrides: resolveFor(uiOverrides, lang),
    // Mixed word practice: for now only in the version for Russian speakers.
    ...(lang === "ru" ? { mixedWords: mixedWordsRu } : {}),
  };
}

/** Task texts of the mixed word practice (version for Russian speakers). */
const mixedWordsRu: MixedWordTexts = {
  picture: "Что на картинке?",
  trueFalse: "Перевод верный?",
  statement: (target, native) => `«${target}» — это «${native}»`,
  build: (native) => `Собери фразу: «${native}»`,
  buildHelp: "Кнопками «Вверх» и «Вниз» поставь слова по порядку.",
  fill: (native) => `Вставь пропущенное слово: «${native}»`,
};

const forRussians = makeDef("ru", isPortugueseForRussians);

/**
 * For English speakers both languages use Latin letters, so the Portuguese texts are found by comparison:
 * a text is Portuguese when the Russian version of the course has the same text as Portuguese.
 */
const portugueseTexts = new Set<string>();
(function collect(value: unknown) {
  if (typeof value === "string") {
    if (isPortugueseForRussians(value)) portugueseTexts.add(value.normalize("NFC").trim());
  } else if (Array.isArray(value)) value.forEach(collect);
  else if (value && typeof value === "object") Object.values(value).forEach(collect);
})([forRussians.model.levels, forRussians.prologue]);

const forEnglish = makeDef("en", (text) => portugueseTexts.has(text.normalize("NFC").trim()));

/** The course for each native language. */
export const portugueseCourseDefs: Partial<Record<UiLang, CourseDef>> = { ru: forRussians, en: forEnglish };
