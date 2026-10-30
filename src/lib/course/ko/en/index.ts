import type { CourseDef } from "../../active";
import { pic } from "../../art";
import { makeCourse } from "../../model";
import type { CityPlan, LevelPlan } from "../../types";
import { koCitiesEn } from "./cities";
import { isKorean, k, koreanRomanization } from "./make";
import { koSpeakersEn } from "./speakers";

/**
 * “Meow! We're Filming a K-Drama” — Korean for English speakers, A1.
 * The same story, Korean texts and pictures as the Russian version (../); the explanations,
 * translations and tasks are written for English speakers. Romanization: Revised Romanization.
 * In lesson data `ru` = Korean text, `en` = English.
 */

/** The whole route; cities without lessons yet are shown as planned. */
const route: { id: string; name: string; nameKo: string }[] = [
  { id: "ko-seoul", name: "Seoul", nameKo: k("서울") },
  { id: "ko-hongdae", name: "Hongdae", nameKo: k("홍대") },
  { id: "ko-suwon", name: "Suwon", nameKo: k("수원") },
  { id: "ko-nami", name: "Nami Island", nameKo: k("남이섬") },
  { id: "ko-gangneung", name: "Gangneung", nameKo: k("강릉") },
  { id: "ko-seorak", name: "Seoraksan", nameKo: k("설악산") },
  { id: "ko-andong", name: "Andong", nameKo: k("안동") },
  { id: "ko-gyeongju", name: "Gyeongju", nameKo: k("경주") },
  { id: "ko-daegu", name: "Daegu", nameKo: k("대구") },
  { id: "ko-busan", name: "Busan", nameKo: k("부산") },
  { id: "ko-tongyeong", name: "Tongyeong", nameKo: k("통영") },
  { id: "ko-jeonju", name: "Jeonju", nameKo: k("전주") },
  { id: "ko-jeju", name: "Jeju", nameKo: k("제주") },
  { id: "ko-premiere", name: "Seoul again", nameKo: k("서울") },
];

function levels(): LevelPlan[] {
  const written = new Map(koCitiesEn.map((c) => [c.id, c]));
  const a1: CityPlan[] = route.map((r) => {
    const c = written.get(r.id);
    return { id: r.id, name: r.name, nameRu: r.nameKo, lessons: c?.lessons ?? [], story: c?.story };
  });
  return [{ id: "A1", title: "A1", subtitle: "First words and the first takes", cities: a1 }];
}

export const koreanCourseDefEn: CourseDef = {
  id: "ko",
  speechLang: "ko-KR",
  htmlLang: "ko",
  uiLang: "en",
  title: "Meow! We're Filming a K-Drama",
  isTarget: isKorean,
  translit: koreanRomanization,
  model: makeCourse(levels()),
  prologue: {
    find: {
      image: pic("ko/prologue/1"),
      a11y: "Morning in Paris. Murzik sits on the windowsill holding an envelope with Korean stamps. A photo of a film set peeks out of the envelope.",
      title: "A letter from Korea",
      text: "One morning a letter from Korea arrived for me. In the envelope there was a photo of a film set and a note.",
    },
    postcard: {
      image: pic("ko/prologue/2"),
      a11y: "The note up close: a few lines in Korean letters, a clapperboard and a cat's paw print drawn at the bottom.",
      ru: k("무르직 씨, 우리 드라마에 나와 주세요!"),
      en: "Murzik, please be in our drama!",
      text: "It's from Sua, the director's assistant. They are filming a series about a cat who travels around Korea, and they are looking for a real travelling cat!",
      question: "Act in a real Korean drama? Of course! But first I need to learn Korean…",
    },
    journey: {
      image: pic("ko/prologue/3"),
      a11y: "Murzik with his suitcase by a plane. On the suitcase there's a clapperboard sticker.",
      // The author's own text (as in the Russian version), with Sua and the film crew instead of Tom.
      text: "Sua, the film crew and I travel from city to city. In every city, I have a little home. With every lesson you complete, you earn a new item to make it feel cosy. Little by little, my home fills up with wonderful things. And when it's time to move on, I take my favourite things with me!",
    },
  },
  intro: {
    heading: "Learn Korean and become a K-drama star!",
    tomBold: "Meet Sua!",
    tomRest: "She's the director's assistant and knows everyone on set. She'll give you tips, and we'll learn Korean together!",
    start: "Our journey begins in Seoul!",
    go: "Let's go!",
    companionImage: pic("ko/sua"),
  },
  speakers: koSpeakersEn,
  uiOverrides: {
    letters: "Korean letters",
    lettersIntro: "Korean letters are grouped into square syllable blocks: 한 = ㅎ + ㅏ + ㄴ. Here are the letters from today's phrases.",
    playTarget: "Listen in Korean",
    showTranslit: "Show the romanization",
    aboutMinutes: (m: number) => `About ${m} minutes with Murzik and Sua.`,
    continueJourney: "Continue your Korean journey.",
  },
};
