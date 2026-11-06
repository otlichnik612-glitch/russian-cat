import type { CourseDef } from "../active";
import { images, pic } from "../art";
import { hasCyrillic } from "../make";
import { makeCourse } from "../model";
import type { CityPlan, CityStory, LevelPlan } from "../types";
import { lesson1, lesson2, lesson3 } from "./lessons/early";
import { lesson4, lesson5, lesson6, lesson7 } from "./lessons/late";
import { prologueFr } from "./prologue";
import { speakersFr } from "./speakers";
import { citiesFr } from "./cities";

/**
 * « Le chat russe » — Russian for French speakers.
 * The same story, Russian texts and pictures as the original version (../); the explanations,
 * translations, letter descriptions and tasks are written for French speakers.
 * The transcription under a phrase uses French letters: е = ie, у = ou, ж = j, ш = ch.
 * In lesson data `ru` = Russian text, `en` = French.
 */

const parisStoryFr: CityStory = {
  home: {
    name: "L'appartement de Murzik à Paris",
    nameRu: "Квартира Мурзика в Париже",
    image: images.apartment,
    a11y: "L'appartement parisien de Murzik est encore presque vide, avec une grande fenêtre et la lumière de l'après-midi.",
  },
  keepsakeId: "bowl",
  welcomeRu: "Привет, Париж!",
  welcomeEn: "Bonjour, Paris !",
  welcomeImage: images.opening,
  welcomeA11y:
    "Murzik le chat salue de la patte dans un jardin parisien. On voit la tour Eiffel au-delà des arbres.",
  departureImage: images.airport,
  departureA11y: "Murzik et Tom avec leurs valises dans un aéroport parisien.",
  finale: [
    {
      image: pic("paris/postcards"),
      a11y: "Gros plan : les pattes de Murzik tiennent deux vieilles cartes postales un peu jaunies, avec la même écriture et le même petit chat roux peint dans le coin. L'une n'a pas de timbre ; l'autre a un timbre de Londres. Aucun mot lisible.",
      lines: [
        { en: "Avant de faire sa valise, Murzik regarde les deux cartes postales de grand-mère Assia : celle de sous sa porte, et celle du vieux bureau." },
        { ru: "Иди по моим следам. — Ася", en: "Suis mes traces. — Assia" },
        { en: "Quelqu'un veut qu'il la retrouve. Et la première étape, c'est Londres." },
      ],
    },
    {
      image: images.rewardBowl,
      a11y: "Murzik traverse l'appartement parisien qu'il a rempli leçon après leçon.",
      lines: [
        { en: "Murzik traverse sa maison parisienne. Tom la prend en photo pour son carnet de voyage." },
        { en: "Il emballe son objet préféré pour l'emporter : son bol." },
        { en: "La carte postale glisse dans la petite poche de sa valise." },
      ],
    },
    {
      image: images.greet,
      a11y: "Murzik saute joyeusement et Tom fête ça avec lui.",
      lines: [
        { ru: "Париж завершён!", en: "Paris terminé !" },
        { en: "7 / 7 leçons" },
        { ru: "Первый город позади!", en: "Ta première ville est derrière toi !" },
        { en: "A1 — bloc 1 du niveau A1 terminé. Le niveau A1 n'est pas fini." },
      ],
    },
    {
      image: images.apartment,
      a11y: "Murzik regarde autour de l'appartement, prend une valise et fait signe au revoir.",
      lines: [{ ru: "До свидания, Париж!", en: "Au revoir, Paris !" }],
    },
    {
      image: images.airport,
      a11y: "Murzik et Tom traversent l'aéroport parisien avec leurs valises.",
      lines: [
        {
          ru: "До свидания, Париж! Время отправляться дальше!",
          en: "Au revoir, Paris ! Il est temps de partir vers de nouvelles aventures !",
        },
        { ru: "Следующая остановка: Лондон!", en: "Prochain arrêt : Londres !" },
      ],
    },
    {
      image: images.flight,
      a11y: "Un petit avion vole au-dessus des nuages de Paris vers Londres.",
      lines: [{ ru: "Париж → Лондон", en: "Paris → Londres" }],
    },
    {
      image: pic("london/arrival"),
      a11y: "Murzik et Tom arrivent à Londres avec leurs valises. Derrière eux, Big Ben et un bus rouge à impériale. Il pleut un peu.",
      lines: [
        { ru: "Привет, Лондон!", en: "Bonjour, Londres !" },
        {
          ru: "Новый город. Новые слова. Новые приключения.",
          en: "Une nouvelle ville. De nouveaux mots. De nouvelles aventures.",
        },
      ],
    },
  ],
};

/** The A1 route of the Russian course: [id, French name, Russian name]. Cities without lessons yet are shown as planned. */
const a1Route: [string, string, string][] = [
  ["paris", "Paris", "Париж"],
  ["london", "Londres", "Лондон"],
  ["madrid", "Madrid", "Мадрид"],
  ["rome", "Rome", "Рим"],
  ["berlin", "Berlin", "Берлин"],
  ["amsterdam", "Amsterdam", "Амстердам"],
  ["vienna", "Vienne", "Вена"],
  ["prague", "Prague", "Прага"],
  ["lisbon", "Lisbonne", "Лиссабон"],
  ["athens", "Athènes", "Афины"],
  ["istanbul", "Istanbul", "Стамбул"],
  ["warsaw", "Varsovie", "Варшава"],
  ["budapest", "Budapest", "Будапешт"],
  ["edinburgh", "Édimbourg", "Эдинбург"],
];

const parisLessonsFr = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7];

const a1: CityPlan[] = a1Route.map(([id, name, nameRu]) => ({
  id,
  name,
  nameRu,
  lessons: id === "paris" ? parisLessonsFr : (citiesFr[id]?.lessons ?? []),
  story: id === "paris" ? parisStoryFr : citiesFr[id]?.story,
}));

const levelsFr: LevelPlan[] = [{ id: "A1", title: "A1", subtitle: "Survie et premières conversations", cities: a1 }];

export const russianCourseFr: CourseDef = {
  id: "ru",
  speechLang: "ru-RU",
  htmlLang: "ru",
  uiLang: "fr",
  title: "Le chat russe",
  model: makeCourse(levelsFr),
  isTarget: hasCyrillic,
  prologue: prologueFr,
  intro: {
    heading: "Apprends le russe et aide-moi à rendre ma maison douillette !",
    tomBold: "Voici Tom !",
    tomRest: "Il voyage avec moi et apprend le russe, comme toi. Viens avec nous !",
    start: "Notre aventure commence à Paris !",
    go: "En route pour l'aventure !",
  },
  speakers: speakersFr,
  uiOverrides: {
    letters: "Les lettres russes",
    lettersIntro: "Le russe utilise l'alphabet cyrillique. Certaines lettres ressemblent aux nôtres mais se prononcent autrement ! Voici les lettres des phrases du jour.",
    playTarget: "Écouter en russe",
    continueJourney: "Continue ton voyage en russe.",
  },
};
