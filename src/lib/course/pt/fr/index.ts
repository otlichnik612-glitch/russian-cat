import type { CourseDef } from "../../active";
import { pic } from "../../art";
import { hasCyrillic } from "../../make";
import { makeCourse } from "../../model";
import type { CityPlan, LevelPlan } from "../../types";
import { portugueseCourseDefs } from "../index";
import { ptCitiesFr } from "./cities";
import { ptSpeakersFr } from "./speakers";

/**
 * « Murzik et le perroquet » — Brazilian Portuguese for French speakers, A1.
 * The same story, Portuguese texts and pictures as the other versions (../); the explanations,
 * translations, letter descriptions and pronunciation hints are written for French speakers.
 * The hint under a phrase uses French letters: ou = [u], dj = [dʒ], tch = [tʃ], nh = [ɲ].
 * In lesson data `ru` = Portuguese text, `en` = French.
 */

const prologue = {
  find: {
    image: pic("pt/prologue/1"),
    a11y:
      "Un matin à Paris. Sur le balcon d'à côté, un perroquet vert à tête jaune crie quelque chose dans sa cage. Murzik se penche par sa fenêtre en riant.",
    title: "Un matin à Paris",
    text:
      "Chaque matin, le perroquet de ma voisine Dona Lúcia me crie depuis son balcon : « Bom dia, Murzik ! » Il s'appelle Pipoca — ça veut dire « pop-corn » en portugais.",
  },
  postcard: {
    image: pic("pt/prologue/2"),
    a11y:
      "Gros plan : une invitation colorée avec des palmiers et des notes de musique. Dona Lúcia, une vieille dame joyeuse en robe à fleurs, la tend à Murzik.",
    ru: "Festa dos 80 anos da Dona Lúcia — Rio de Janeiro",
    en: "Fête des 80 ans de Dona Lúcia — Rio de Janeiro",
    text:
      "Dona Lúcia vient du Brésil. Elle va bientôt avoir 80 ans, et toute sa famille se réunit à Rio. Elle m'a invité à venir ! Et Pipoca prend l'avion avec nous, bien sûr.",
    question: "Que peut-il bien arriver dans un pays où tout le monde aime tant la musique ?",
  },
  journey: {
    image: pic("pt/prologue/3"),
    a11y:
      "Murzik et Dona Lúcia dans l'avion. La cage de Pipoca est sur les genoux de Dona Lúcia. Par le hublot : la mer et les montagnes vertes de Rio.",
    text:
      "Nous voilà partis pour Rio de Janeiro ! Là-bas nous attend Bia, la petite-fille de Dona Lúcia. Dans chaque ville, j'aurai mon petit chez-moi, et chaque leçon terminée te rapportera un nouvel objet pour le meubler. Et j'emporterai avec moi ce que j'ai de plus précieux.",
  },
};

const intro = {
  heading: "Apprends le portugais avec moi !",
  tomBold: "Voici Bia !",
  tomRest:
    "Elle vient de Rio, et le portugais est sa langue. Elle va nous aider en route. Tu viens ?",
  start: "Notre voyage commence à Rio de Janeiro !",
  go: "En route !",
  companionImage: pic("pt/bia"),
};

const uiOverrides = {
  letters: "Les lettres portugaises",
  lettersIntro:
    "Le portugais utilise presque les mêmes lettres latines que le français, mais certaines se prononcent autrement. Voici les lettres des phrases d'aujourd'hui.",
  playTarget: "Écouter en portugais",
  continueJourney: "Continue ton voyage en portugais.",
};

/** The whole route; cities without lessons yet are shown as planned. */
const route: { id: string; name: string; namePt: string }[] = [
  { id: "pt-rio", name: "Rio de Janeiro", namePt: "Rio de Janeiro" },
  { id: "pt-paraty", name: "Paraty", namePt: "Paraty" },
  { id: "pt-saopaulo", name: "São Paulo", namePt: "São Paulo" },
  { id: "pt-curitiba", name: "Curitiba", namePt: "Curitiba" },
  { id: "pt-floripa", name: "Florianópolis", namePt: "Florianópolis" },
  { id: "pt-foz", name: "Foz do Iguaçu", namePt: "Foz do Iguaçu" },
  { id: "pt-pantanal", name: "Le Pantanal", namePt: "Pantanal" },
  { id: "pt-brasilia", name: "Brasília", namePt: "Brasília" },
  { id: "pt-ouropreto", name: "Ouro Preto", namePt: "Ouro Preto" },
  { id: "pt-salvador", name: "Salvador", namePt: "Salvador" },
  { id: "pt-olinda", name: "Olinda", namePt: "Olinda" },
  { id: "pt-fortaleza", name: "Fortaleza", namePt: "Fortaleza" },
  { id: "pt-manaus", name: "Manaus", namePt: "Manaus" },
  { id: "pt-belem", name: "Belém", namePt: "Belém" },
];

function levels(): LevelPlan[] {
  const written = new Map(ptCitiesFr.map((c) => [c.id, c]));
  const a1: CityPlan[] = route.map((r) => {
    const c = written.get(r.id);
    return { id: r.id, name: r.name, nameRu: r.namePt, lessons: c?.lessons ?? [], story: c?.story };
  });
  return [{ id: "A1", title: "A1", subtitle: "Premières conversations et la vie en voyage", cities: a1 }];
}

/** Portuguese text: Latin letters and no Cyrillic. French explanations are Latin too, so… */
function isPortuguese(text: string): boolean {
  return /[A-Za-zÀ-ÿ]/.test(text) && !hasCyrillic(text);
}

/**
 * …like in the English version, the Portuguese texts are found by comparison:
 * a text is Portuguese when the Russian version of the course has the same text as Portuguese.
 */
const portugueseTexts = new Set<string>();
(function collect(value: unknown) {
  if (typeof value === "string") {
    if (isPortuguese(value)) portugueseTexts.add(value.normalize("NFC").trim());
  } else if (Array.isArray(value)) value.forEach(collect);
  else if (value && typeof value === "object") Object.values(value).forEach(collect);
})([portugueseCourseDefs.ru?.model.levels, portugueseCourseDefs.ru?.prologue]);

export const portugueseCourseFr: CourseDef = {
  id: "pt",
  speechLang: "pt-BR",
  htmlLang: "pt-BR",
  uiLang: "fr",
  title: "Murzik et le perroquet",
  model: makeCourse(levels()),
  isTarget: (text) => portugueseTexts.has(text.normalize("NFC").trim()),
  prologue,
  intro,
  speakers: ptSpeakersFr,
  uiOverrides,
};
