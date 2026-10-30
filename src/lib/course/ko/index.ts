import type { CourseDef } from "../active";
import { pic } from "../art";
import { makeCourse } from "../model";
import type { CityPlan, LevelPlan } from "../types";
import { koCities } from "./cities";
import { isKorean, k, koreanTranscription } from "./make";
import { koSpeakers } from "./speakers";

/**
 * «Мяу! Снимаем дораму» — Korean for Russian speakers, A1.
 * Murzik is invited to play in a Korean TV series and travels with the film crew across South Korea.
 * Explanations and tasks are in Russian; phrases are in Korean with a simple Cyrillic transcription.
 * In lesson data `ru` = Korean text, `en` = Russian translation.
 */

/** The whole route; cities without lessons yet are shown as planned. */
const route: { id: string; name: string; nameKo: string }[] = [
  { id: "ko-seoul", name: "Сеул", nameKo: k("서울", "Соуль") },
  { id: "ko-hongdae", name: "Хондэ", nameKo: k("홍대", "Хондэ") },
  { id: "ko-suwon", name: "Сувон", nameKo: k("수원", "Сувон") },
  { id: "ko-nami", name: "Нами", nameKo: k("남이섬", "Намисом") },
  { id: "ko-gangneung", name: "Каннын", nameKo: k("강릉", "Каннын") },
  { id: "ko-seorak", name: "Сораксан", nameKo: k("설악산", "Сораксан") },
  { id: "ko-andong", name: "Андон", nameKo: k("안동", "Андон") },
  { id: "ko-gyeongju", name: "Кёнджу", nameKo: k("경주", "Кёнджу") },
  { id: "ko-daegu", name: "Тэгу", nameKo: k("대구", "Тэгу") },
  { id: "ko-busan", name: "Пусан", nameKo: k("부산", "Пусан") },
  { id: "ko-tongyeong", name: "Тхонъён", nameKo: k("통영", "Тхонъён") },
  { id: "ko-jeonju", name: "Чонджу", nameKo: k("전주", "Чонджу") },
  { id: "ko-jeju", name: "Чеджу", nameKo: k("제주", "Чеджу") },
  { id: "ko-premiere", name: "Снова Сеул", nameKo: k("서울", "Соуль") },
];

function levels(): LevelPlan[] {
  const written = new Map(koCities.map((c) => [c.id, c]));
  const a1: CityPlan[] = route.map((r) => {
    const c = written.get(r.id);
    return { id: r.id, name: r.name, nameRu: r.nameKo, lessons: c?.lessons ?? [], story: c?.story };
  });
  return [{ id: "A1", title: "A1", subtitle: "Первые слова и первые съёмки", cities: a1 }];
}

export const koreanCourseDef: CourseDef = {
  id: "ko",
  speechLang: "ko-KR",
  htmlLang: "ko",
  uiLang: "ru",
  title: "Мяу! Снимаем дораму",
  isTarget: isKorean,
  translit: koreanTranscription,
  model: makeCourse(levels()),
  prologue: {
    find: {
      image: pic("ko/prologue/1"),
      a11y: "Утро в Париже. Мурзик сидит на подоконнике и держит конверт с корейскими марками. Из конверта выглядывает фотография съёмочной площадки.",
      title: "Письмо из Кореи",
      text: "Однажды утром мне пришло письмо из Кореи. В конверте была фотография съёмочной площадки и записка.",
    },
    postcard: {
      image: pic("ko/prologue/2"),
      a11y: "Записка крупно: несколько строк корейскими буквами, внизу нарисована хлопушка и кошачья лапка.",
      ru: k("무르직 씨, 우리 드라마에 나와 주세요!", "Мурыджик сси, ури тырамаэ нава джусеё!"),
      en: "Мурзик, пожалуйста, сыграйте в нашей дораме!",
      text: "Это пишет Суа, помощница режиссёра. Они снимают сериал про кота, который путешествует по Корее, и ищут настоящего кота-путешественника!",
      question: "Сыграть в настоящей корейской дораме? Конечно, да! Только сначала надо выучить корейский…",
    },
    journey: {
      image: pic("ko/prologue/3"),
      a11y: "Мурзик с чемоданом у самолёта. На чемодане наклейка с хлопушкой.",
      // The author's own text, with Sua and the film crew instead of Tom.
      text: "Мы с Суа и съёмочной группой путешествуем по разным городам. В каждом городе у меня есть свой маленький дом. За каждый пройденный урок ты получаешь новый предмет, который поможет сделать его уютнее. Постепенно дом наполняется интересными вещами. А когда приходит время отправляться дальше, я беру с собой то, что полюбилось мне больше всего!",
    },
  },
  intro: {
    heading: "Учи корейский и стань звездой дорамы!",
    tomBold: "Знакомься, это Суа!",
    tomRest: "Она помощница режиссёра и знает на площадке всех. Она будет подсказывать, а учить корейский мы будем вместе!",
    start: "Наше путешествие начинается в Сеуле!",
    go: "Поехали!",
    companionImage: pic("ko/sua"),
  },
  speakers: koSpeakers,
  uiOverrides: {
    letters: "Корейские буквы",
    lettersIntro: "Корейские буквы складываются в слоги-квадратики: 한 = ㅎ + ㅏ + ㄴ. Вот буквы из сегодняшних фраз.",
    playTarget: "Послушать по-корейски",
    aboutMinutes: (m: number) => `Всего ${m} минут вместе с Мурзиком и Суа.`,
  },
};
