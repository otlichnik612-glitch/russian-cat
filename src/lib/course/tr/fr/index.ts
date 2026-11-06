import type { CourseDef } from "../../active";
import { pic } from "../../art";
import { makeCourse } from "../../model";
import type { CityPlan, LevelPlan } from "../../types";
import { turkishCourseDef } from "..";
import { trCitiesFr } from "./cities";
import { trSpeakersFr } from "./speakers";

/**
 * « Murzik en Turquie » — Turkish for French speakers, A1.
 * The same story, Turkish texts and pictures as the Russian version (../); the explanations,
 * translations, pronunciation hints and tasks are written for French speakers.
 * In lesson data `ru` = Turkish text, `en` = French.
 */

const a1: CityPlan[] = trCitiesFr.map((c) => ({ id: c.id, name: c.name, nameRu: c.nameTr, lessons: c.lessons, story: c.story }));

const levels: LevelPlan[] = [{ id: "A1", title: "A1", subtitle: "Premières conversations et vie sur la route", cities: a1 }];

/**
 * Both Turkish and French use Latin letters, so Turkish texts are found by comparison:
 * a text is Turkish when the Russian version of the course has the same text as Turkish.
 */
const turkishTexts = new Set<string>();
/** Fields that hold ids or file paths, not text. */
const NOT_TEXT = new Set(["id", "speaker", "image", "itemId", "cityId", "level", "kind", "skill", "keepsakeId", "welcomeImage", "departureImage", "audioLabel"]);
(function collect(value: unknown) {
  if (typeof value === "string") {
    if (turkishCourseDef.isTarget(value)) turkishTexts.add(value.normalize("NFC").trim());
  } else if (Array.isArray(value)) value.forEach(collect);
  else if (value && typeof value === "object")
    for (const [key, item] of Object.entries(value)) if (!NOT_TEXT.has(key)) collect(item);
})([turkishCourseDef.model.levels, turkishCourseDef.prologue]);

export const turkishCourseDefFr: CourseDef = {
  id: "tr",
  speechLang: "tr-TR",
  htmlLang: "tr",
  uiLang: "fr",
  title: "Murzik en Turquie",
  model: makeCourse(levels),
  isTarget: (text) => turkishTexts.has(text.normalize("NFC").trim()),
  prologue: {
    find: {
      image: pic("prologue/1"),
      a11y: "Un matin à Paris. Une vieille carte postale un peu jaunie est posée sur le sol, juste à l'entrée de l'appartement vide de Murzik. Murzik se penche pour la ramasser, surpris.",
      title: "Un matin à Paris",
      text: "Un matin, j'ai trouvé une vieille carte postale glissée sous la porte de mon appartement parisien.",
    },
    postcard: {
      image: pic("tr/prologue/2"),
      a11y: "La vieille carte postale en gros plan : d'un côté, une vue d'Istanbul — des ferries, des mouettes et des coupoles au-dessus de la mer ; de l'autre, quelques lignes écrites à la main, un petit chat roux peint dans le coin et un timbre turc avec un cachet. Pas d'adresse d'expéditeur.",
      ru: "İzimi takip et. — Asya",
      en: "Suis mes traces. — Asya",
      text: "Asya, c'est ma grand-mère. Elle a passé sa vie à voyager autour du monde, mais un jour elle a disparu sans laisser de traces. Personne ne l'a revue depuis.",
      question: "Qui a laissé cette carte ? Et où mènent les pas de grand-mère Asya ? Le timbre dit : Istanbul…",
    },
    journey: {
      image: pic("tr/prologue/3"),
      a11y: "Murzik avec sa valise près d'un avion. Au loin, derrière les hublots : Istanbul — la mer, des ferries et des coupoles.",
      // The author's own text (as in the French version of the Russian course). Do not change it.
      text: "Tom et moi voyageons de ville en ville. Dans chaque ville, je trouve un petit chez-moi. Chaque leçon terminée te fait gagner un nouvel objet pour le rendre douillet. Petit à petit, ma maison se remplit de belles choses. Et quand il est temps de repartir, j'emporte mes objets préférés avec moi !",
    },
  },
  intro: {
    heading: "Apprends le turc et aide-moi à rendre ma maison douillette !",
    tomBold: "Voici Tom !",
    tomRest: "Il voyage avec moi et apprend le turc — comme toi. Rejoins-nous !",
    start: "Notre voyage commence à Istanbul !",
    go: "En route pour l'aventure !",
  },
  speakers: trSpeakersFr,
  uiOverrides: {
    letters: "Les lettres turques",
    lettersIntro: "Le turc utilise l'alphabet latin, comme le français, mais certaines lettres se prononcent autrement. Voici les lettres des phrases du jour.",
    playTarget: "Écouter en turc",
    continueJourney: "Continue ton voyage en turc.",
  },
};
