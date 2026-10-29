import type { CourseDef } from "../active";
import { pic } from "../art";
import { hasCyrillic } from "../make";
import { makeCourse } from "../model";
import type { CityPlan, LevelPlan } from "../types";
import { enCities } from "./cities";
import { enSpeakers } from "./speakers";

/**
 * «Мурзик и кафе» — English for Russian speakers, A1.
 * Tom takes Murzik to London, to his grandmother Mrs Hope, who once had a little café. Her old recipe book
 * is missing pages; Murzik collects them across the English-speaking world and, at the end, opens the café again.
 * Explanations and tasks are in Russian; phrases are in English.
 * In lesson data `ru` = English text, `en` = Russian translation.
 */

const a1: CityPlan[] = enCities.map((c) => ({ id: c.id, name: c.name, nameRu: c.nameEn, lessons: c.lessons, story: c.story }));

const levels: LevelPlan[] = [{ id: "A1", title: "A1", subtitle: "Первые разговоры и жизнь в пути", cities: a1 }];

/** English text: Latin letters and no Cyrillic. Russian translations are Cyrillic. */
function isEnglish(text: string): boolean {
  return /[A-Za-z]/.test(text) && !hasCyrillic(text);
}

export const englishCourseDef: CourseDef = {
  id: "en",
  speechLang: "en-US",
  htmlLang: "en",
  uiLang: "ru",
  title: "Мурзик и кафе",
  model: makeCourse(levels),
  isTarget: isEnglish,
  prologue: {
    find: {
      image: pic("en/prologue/1"),
      a11y: "Утро в Париже. Том сидит у Мурзика на кухне и показывает ему старую фотографию: маленькое кафе с синей дверью и цветами в окнах.",
      title: "Утро в Париже",
      text: "Однажды утром Том показал мне старую фотографию: маленькое кафе с синей дверью.",
    },
    postcard: {
      image: pic("en/prologue/2"),
      a11y: "Старая фотография крупно: маленькое кафе с синей дверью, у входа улыбается молодая женщина в фартуке. Вывеску не разобрать.",
      ru: "Hope's Café, London",
      en: "Кафе «Хоуп», Лондон",
      text: "Это кафе бабушки Тома, миссис Хоуп. Когда-то здесь пахло корицей и свежими сконами. Но много лет назад оно закрылось.",
      question: "Почему оно закрылось? И можно ли открыть его снова?",
    },
    journey: {
      image: pic("en/prologue/3"),
      a11y: "Мурзик и Том с чемоданами в поезде. За окном утреннее море, впереди Лондон.",
      text: "Том зовёт меня в Лондон, к бабушке. А потом — дальше, по всему англоязычному миру. В каждом городе у меня будет свой маленький дом, и за каждый пройденный урок ты получаешь новую вещь. А в чемодан я буду собирать вещи для будущего кафе!",
    },
  },
  intro: {
    heading: "Учи английский и помоги мне открыть кафе!",
    tomBold: "Знакомься, это Том!",
    tomRest: "Он из Лондона, английский — его родной язык. Он будет нам помогать. Присоединяйся!",
    start: "Наше путешествие начинается в Лондоне!",
    go: "Вперёд, к приключениям!",
  },
  speakers: enSpeakers,
  uiOverrides: {
    letters: "Английские буквы",
    lettersIntro: "В английском те же латинские буквы, но читаются они по-разному. Вот буквы из сегодняшних фраз.",
    playTarget: "Послушать по-английски",
  },
};
