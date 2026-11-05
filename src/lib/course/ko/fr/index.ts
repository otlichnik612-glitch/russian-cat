import type { CourseDef } from "../../active";
import { pic } from "../../art";
import { makeCourse } from "../../model";
import type { CityPlan, LevelPlan } from "../../types";
import { koCitiesFr } from "./cities";
import { isKorean, k, koreanRomanization } from "./make";
import { koSpeakersFr } from "./speakers";

/**
 * « Miaou ! On tourne un K-drama » — Korean for French speakers, A1.
 * The same story, Korean texts and pictures as the Russian version (../); the explanations,
 * translations and tasks are written for French speakers. Romanization: Revised Romanization.
 * In lesson data `ru` = Korean text, `en` = French.
 */

/** The whole route; cities without lessons yet are shown as planned. */
const route: { id: string; name: string; nameKo: string }[] = [
  { id: "ko-seoul", name: "Séoul", nameKo: k("서울") },
  { id: "ko-hongdae", name: "Hongdae", nameKo: k("홍대") },
  { id: "ko-suwon", name: "Suwon", nameKo: k("수원") },
  { id: "ko-nami", name: "L'île de Nami", nameKo: k("남이섬") },
  { id: "ko-gangneung", name: "Gangneung", nameKo: k("강릉") },
  { id: "ko-seorak", name: "Le mont Seorak", nameKo: k("설악산") },
  { id: "ko-andong", name: "Andong", nameKo: k("안동") },
  { id: "ko-gyeongju", name: "Gyeongju", nameKo: k("경주") },
  { id: "ko-daegu", name: "Daegu", nameKo: k("대구") },
  { id: "ko-busan", name: "Busan", nameKo: k("부산") },
  { id: "ko-tongyeong", name: "Tongyeong", nameKo: k("통영") },
  { id: "ko-jeonju", name: "Jeonju", nameKo: k("전주") },
  { id: "ko-jeju", name: "Jeju", nameKo: k("제주") },
  { id: "ko-premiere", name: "Séoul, de nouveau", nameKo: k("서울") },
];

function levels(): LevelPlan[] {
  const written = new Map(koCitiesFr.map((c) => [c.id, c]));
  const a1: CityPlan[] = route.map((r) => {
    const c = written.get(r.id);
    return { id: r.id, name: r.name, nameRu: r.nameKo, lessons: c?.lessons ?? [], story: c?.story };
  });
  return [{ id: "A1", title: "A1", subtitle: "Premiers mots et premières prises", cities: a1 }];
}

export const koreanCourseFr: CourseDef = {
  id: "ko",
  speechLang: "ko-KR",
  htmlLang: "ko",
  uiLang: "fr",
  title: "Miaou ! On tourne un K-drama",
  isTarget: isKorean,
  translit: koreanRomanization,
  model: makeCourse(levels()),
  prologue: {
    find: {
      image: pic("ko/prologue/1"),
      a11y: "Un matin à Paris. Murzik est assis sur le rebord de la fenêtre avec une enveloppe timbrée de Corée. Une photo de plateau de tournage dépasse de l'enveloppe.",
      title: "Une lettre de Corée",
      text: "Un matin, une lettre de Corée est arrivée pour moi. Dedans, il y avait une photo d'un plateau de tournage et un petit mot.",
    },
    postcard: {
      image: pic("ko/prologue/2"),
      a11y: "Le petit mot en gros plan : quelques lignes en lettres coréennes, un clap et une empreinte de patte de chat dessinée en bas.",
      ru: k("무르직 씨, 우리 드라마에 나와 주세요!"),
      en: "Murzik, viens jouer dans notre série, s'il te plaît !",
      text: "Elle est de Sua, l'assistante du réalisateur. Ils tournent une série sur un chat qui voyage à travers la Corée, et ils cherchent un vrai chat voyageur !",
      question: "Jouer dans un vrai drama coréen ? Bien sûr ! Mais d'abord, il faut que j'apprenne le coréen…",
    },
    journey: {
      image: pic("ko/prologue/3"),
      a11y: "Murzik avec sa valise à côté d'un avion. Sur la valise, un autocollant en forme de clap.",
      // The author's own text (as in the Russian version), with Sua and the film crew instead of Tom.
      text: "Sua, l'équipe de tournage et moi voyageons de ville en ville. Dans chaque ville, j'ai mon petit chez-moi. Chaque leçon terminée te fait gagner un nouvel objet pour le rendre douillet. Petit à petit, ma maison se remplit de merveilles. Et quand il est temps de partir, j'emporte mes objets préférés avec moi !",
    },
  },
  intro: {
    heading: "Apprends le coréen et deviens une star de K-drama !",
    tomBold: "Voici Sua !",
    tomRest: "Elle est l'assistante du réalisateur et elle connaît tout le monde sur le plateau. Elle te donnera des conseils, et nous apprendrons le coréen ensemble !",
    start: "Notre voyage commence à Séoul !",
    go: "En route pour l'aventure !",
    companionImage: pic("ko/sua"),
  },
  speakers: koSpeakersFr,
  uiOverrides: {
    letters: "Les lettres coréennes",
    lettersIntro: "Les lettres coréennes se regroupent en syllabes carrées : 한 = ㅎ + ㅏ + ㄴ. Voici les lettres des phrases du jour.",
    playTarget: "Écouter en coréen",
    showTranslit: "Afficher la romanisation",
    aboutMinutes: (m: number) => `Environ ${m} minutes avec Murzik et Sua.`,
    continueJourney: "Continue ton voyage en coréen.",
  },
};
