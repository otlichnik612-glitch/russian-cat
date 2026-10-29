import type { CourseDef } from "../../active";
import { pic } from "../../art";
import { makeCourse } from "../../model";
import type { CityPlan, LevelPlan } from "../../types";
import { turkishCourseDef } from "..";
import { trCitiesEn } from "./cities";
import { trSpeakersEn } from "./speakers";

/**
 * “Murzik in Turkey” — Turkish for English speakers, A1.
 * The same story, Turkish texts and pictures as the Russian version (../); the explanations,
 * translations and tasks are written for English speakers.
 * In lesson data `ru` = Turkish text, `en` = English.
 */

const a1: CityPlan[] = trCitiesEn.map((c) => ({ id: c.id, name: c.name, nameRu: c.nameTr, lessons: c.lessons, story: c.story }));

const levels: LevelPlan[] = [{ id: "A1", title: "A1", subtitle: "First conversations and life on the road", cities: a1 }];

/**
 * Both Turkish and English use Latin letters, so Turkish texts are found by comparison:
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

export const turkishCourseDefEn: CourseDef = {
  id: "tr",
  speechLang: "tr-TR",
  htmlLang: "tr",
  uiLang: "en",
  title: "Murzik in Turkey",
  model: makeCourse(levels),
  isTarget: (text) => turkishTexts.has(text.normalize("NFC").trim()),
  prologue: {
    find: {
      image: pic("prologue/1"),
      a11y: "Morning in Paris. An old, slightly yellow postcard lies on the floor just inside the door of Murzik's empty apartment. Murzik bends down to pick it up, surprised.",
      title: "Morning in Paris",
      text: "One morning, I found an old postcard under the door of my Paris apartment.",
    },
    postcard: {
      image: pic("tr/prologue/2"),
      a11y: "Close-up of the old postcard: on one side a view of Istanbul — ferries, seagulls and domes above the sea; on the other a few handwritten lines, a small painted ginger cat in the corner and a Turkish stamp with a postmark. No return address.",
      ru: "İzimi takip et. — Asya",
      en: "Follow my steps. — Asya",
      text: "Asya is my grandma. She spent her life travelling around the world, but one day she vanished without a trace. No one has seen her since.",
      question: "Who left this postcard? And where do Grandma Asya’s steps lead? The stamp says Istanbul…",
    },
    journey: {
      image: pic("tr/prologue/3"),
      a11y: "Murzik with his suitcase by a plane. Far away through the windows: Istanbul — the sea, ferries and domes.",
      // The author's own text (as in the Russian course for English speakers). Do not change it.
      text: "Tom and I travel from city to city. In every city, I find a little home. With every lesson you complete, you earn a new item to make it feel cosy. Little by little, my home fills up with wonderful things. And when it’s time to move on, I take my favourite things with me!",
    },
  },
  intro: {
    heading: "Learn Turkish and help me make my home cosy!",
    tomBold: "Meet Tom!",
    tomRest: "He travels with me and is learning Turkish — just like you. Come with us!",
    start: "Our journey begins in Istanbul!",
    go: "Let’s go!",
  },
  speakers: trSpeakersEn,
  uiOverrides: {
    letters: "Turkish letters",
    lettersIntro: "Turkish uses the Latin alphabet, but some letters sound different from English. Here are the letters from today's phrases.",
    playTarget: "Listen in Turkish",
    continueJourney: "Continue your Turkish journey.",
  },
};
