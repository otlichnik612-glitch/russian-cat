import type { CourseDef } from "../../active";
import { pic } from "../../art";
import { makeCourse } from "../../model";
import type { CityPlan, LevelPlan } from "../../types";
import { englishCourseDef } from "..";
import { enCitiesFr } from "./cities";
import { enSpeakersFr } from "./speakers";

/**
 * « Murzik et le café » — English for French speakers, A1.
 * The same story, English texts and pictures as the Russian version (../); the explanations,
 * translations, pronunciation hints and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French.
 */

/** The 14 cities of English A1, in route order: [id, French name, English name]. Cities without lessons yet are shown as planned. */
const a1Route: [string, string, string][] = [
  ["en-london", "Londres", "London"],
  ["en-oxford", "Oxford", "Oxford"],
  ["en-bath", "Bath", "Bath"],
  ["en-edinburgh", "Édimbourg", "Edinburgh"],
  ["en-dublin", "Dublin", "Dublin"],
  ["en-newyork", "New York", "New York"],
  ["en-boston", "Boston", "Boston"],
  ["en-chicago", "Chicago", "Chicago"],
  ["en-neworleans", "La Nouvelle-Orléans", "New Orleans"],
  ["en-sanfrancisco", "San Francisco", "San Francisco"],
  ["en-vancouver", "Vancouver", "Vancouver"],
  ["en-toronto", "Toronto", "Toronto"],
  ["en-sydney", "Sydney", "Sydney"],
  ["en-wellington", "Wellington", "Wellington"],
];

const a1: CityPlan[] = a1Route.map(([id, name, nameEn]) => {
  const c = enCitiesFr.find((written) => written.id === id);
  return { id, name, nameRu: nameEn, lessons: c?.lessons ?? [], story: c?.story };
});

const levels: LevelPlan[] = [{ id: "A1", title: "A1", subtitle: "Premières conversations et la vie en voyage", cities: a1 }];

/**
 * Both English and French use Latin letters, so English texts are found by comparison:
 * a text is English when the Russian version of the course has the same text as English.
 */
const englishTexts = new Set<string>();
/** Fields that hold ids or file paths, not text. */
const NOT_TEXT = new Set(["id", "speaker", "image", "itemId", "cityId", "level", "kind", "skill", "keepsakeId", "welcomeImage", "departureImage", "audioLabel"]);
(function collect(value: unknown) {
  if (typeof value === "string") {
    if (englishCourseDef.isTarget(value)) englishTexts.add(value.normalize("NFC").trim());
  } else if (Array.isArray(value)) value.forEach(collect);
  else if (value && typeof value === "object")
    for (const [key, item] of Object.entries(value)) if (!NOT_TEXT.has(key)) collect(item);
})([englishCourseDef.model.levels, englishCourseDef.prologue]);

export const englishCourseFr: CourseDef = {
  id: "en",
  speechLang: "en-US",
  htmlLang: "en",
  uiLang: "fr",
  title: "Murzik et le café",
  model: makeCourse(levels),
  isTarget: (text) => englishTexts.has(text.normalize("NFC").trim()),
  prologue: {
    find: {
      image: pic("en/prologue/1"),
      a11y: "Un matin à Paris. Tom est assis dans la cuisine de Murzik et lui montre une vieille photo : un petit café avec une porte bleue et des fleurs aux fenêtres.",
      title: "Un matin à Paris",
      text: "Un matin, Tom m'a montré une vieille photo : un petit café avec une porte bleue.",
    },
    postcard: {
      image: pic("en/prologue/2"),
      a11y: "La vieille photo en gros plan : un petit café avec une porte bleue ; à l'entrée, une jeune femme en tablier sourit. L'enseigne est illisible.",
      ru: "Hope's Café, London",
      en: "Le café « Hope », Londres",
      text: "C'était le café de la grand-mère de Tom, Mrs Hope. Autrefois, il sentait la cannelle et les scones tout chauds. Mais il y a bien longtemps, il a fermé.",
      question: "Pourquoi a-t-il fermé ? Et peut-on le rouvrir ?",
    },
    journey: {
      image: pic("en/prologue/3"),
      a11y: "Murzik et Tom avec leurs valises dans un train. Dehors, la mer au matin ; devant, Londres.",
      text: "Tom m'emmène à Londres, chez sa grand-mère. Et ensuite — plus loin, à travers tout le monde anglophone. Dans chaque ville, j'aurai ma petite maison, et pour chaque leçon terminée, tu gagnes un nouvel objet. Dans ma valise, je collectionnerai des choses pour le futur café !",
    },
  },
  intro: {
    heading: "Apprends l'anglais et aide-moi à rouvrir le café !",
    tomBold: "Voici Tom !",
    tomRest: "Il vient de Londres, l'anglais est sa langue maternelle. Il va nous aider. Rejoins-nous !",
    start: "Notre voyage commence à Londres !",
    go: "En route pour l'aventure !",
  },
  speakers: enSpeakersFr,
  uiOverrides: {
    letters: "L'alphabet anglais",
    lettersIntro: "L'anglais utilise l'alphabet latin, comme le français, mais les lettres se prononcent différemment. Voici les lettres des phrases du jour.",
    playTarget: "Écouter en anglais",
    continueJourney: "Continue ton voyage en anglais.",
  },
};
