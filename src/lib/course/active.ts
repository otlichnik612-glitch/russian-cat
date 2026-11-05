import { russianCourse } from "./curriculum";
import { hasCyrillic } from "./make";
import type { CourseModel } from "./model";
import { prologue as russianPrologue } from "./prologue";
import { speakers as russianSpeakers } from "./speakers";
import { englishCourseDef } from "./en";
import { englishCourseFr } from "./en/fr";
import { russianCourseFr } from "./fr";
import { portugueseCourseFr } from "./pt/fr";
import { koreanCourseFr } from "./ko/fr";
import { portugueseCourseDefs } from "./pt";
import { turkishCourseDef } from "./tr";
import { turkishCourseDefEn } from "./tr/en";
import { arabicCourseDef } from "./ar";
import { koreanCourseDef } from "./ko";
import { koreanCourseDefEn } from "./ko/en";
import type { SpeakerId } from "./types";
import { uiText, type UiLang, type UiText } from "./ui-text";

/**
 * The course the learner is taking now. Components read the active course from here, so the same
 * screens show any course (Russian, English, Portuguese, Turkish) in the learner's own language.
 *
 * In lesson data, fields named `ru` hold the language being learned and `en` the learner's own language.
 * For the Turkish course: `ru` = Turkish, `en` = Russian or English.
 */

export type CourseId = "ru" | "tr" | "en" | "pt" | "ar" | "ko";

type Prologue = typeof russianPrologue;

export type CourseDef = {
  id: CourseId;
  /** BCP-47 tag for speech, e.g. "ru-RU". */
  speechLang: string;
  /** HTML lang of the language being learned. */
  htmlLang: string;
  /** Language of the interface and explanations. */
  uiLang: UiLang;
  /** Name of the course under the app name, in the language being learned. */
  title: string;
  model: CourseModel;
  /** True when a piece of text is in the language being learned (it gets a play button and its own lang). */
  isTarget: (text: string) => boolean;
  prologue: Prologue;
  intro: { heading: string; tomBold: string; tomRest: string; start: string; go: string; companionImage?: string };
  /** Dialogue names: `name` in the interface language, `target` in the language being learned. */
  speakers: Partial<Record<SpeakerId, { name: string; target: string }>>;
  /** Interface texts that differ from course to course (for example, which letters are taught). */
  uiOverrides?: Partial<UiText>;
  /** The language being learned is written right to left (Arabic). */
  rtl?: boolean;
  /** The transcription of a phrase in the language being learned, if the course has one (shown under the phrase). */
  translit?: (text: string) => string | undefined;
  /**
   * The language addresses the learner differently for a man and a woman (Arabic “you”).
   * The course asks once, after the intro; `female` is the same course with the female forms.
   */
  gender?: {
    question: { title: string; text: string; male: string; female: string; change: string };
    female: CourseDef;
  };
};

const russianCourseDef: CourseDef = {
  id: "ru",
  speechLang: "ru-RU",
  htmlLang: "ru",
  uiLang: "en",
  title: "Русский Кот",
  model: russianCourse,
  isTarget: hasCyrillic,
  prologue: russianPrologue,
  intro: {
    heading: "Learn Russian and help me make my home feel cosy!",
    tomBold: "This is Tom.",
    tomRest: "He travels with me and learns Russian, just like you. Come with us!",
    start: "Our adventure begins in Paris!",
    go: "Let's go!",
  },
  speakers: Object.fromEntries(
    Object.entries(russianSpeakers).map(([id, s]) => [id, { name: s.en, target: s.ru }]),
  ) as CourseDef["speakers"],
};

/**
 * Every course, by the language being learned and the learner's own language.
 * The story depends on the language being learned; the explanations are written for each native language.
 */
const registry: Record<CourseId, Partial<Record<UiLang, CourseDef>>> = {
  ru: { en: russianCourseDef, fr: russianCourseFr },
  tr: { ru: turkishCourseDef, en: turkishCourseDefEn },
  en: { ru: englishCourseDef, fr: englishCourseFr },
  pt: { ...portugueseCourseDefs, fr: portugueseCourseFr },
  ar: { ru: arabicCourseDef },
  ko: { ru: koreanCourseDef, en: koreanCourseDefEn, fr: koreanCourseFr },
};

/** The version of a course for this native language, or its only version. */
function pick(id: CourseId, native?: UiLang | null): CourseDef {
  const versions = registry[id];
  return (native ? versions[native] : undefined) ?? Object.values(versions)[0]!;
}

/** Every written version of every course (and its female-forms twin), for the voice page. */
export function allCourseVersions(): { id: CourseId; native: UiLang; def: CourseDef }[] {
  const out: { id: CourseId; native: UiLang; def: CourseDef }[] = [];
  for (const [id, versions] of Object.entries(registry) as [CourseId, Partial<Record<UiLang, CourseDef>>][])
    for (const [native, def] of Object.entries(versions) as [UiLang, CourseDef | undefined][]) {
      if (!def || def.model.readyCities.length === 0) continue;
      out.push({ id, native, def });
      if (def.gender) out.push({ id, native, def: def.gender.female });
    }
  return out;
}

/** Interface texts in a given language (for screens shown before or outside the active course). */
export const uiFor = (lang: UiLang): UiText => uiText[lang];

/** The version of a course for this native language, if it has lessons (for the "My courses" list). */
export function courseDef(id: CourseId, native?: UiLang | null): CourseDef | null {
  return courseReady(id, native) ? pick(id, native) : null;
}

/** True when a course has lessons the learner can open (for this native language, if given). */
export function courseReady(id: string, native?: UiLang | null): boolean {
  const versions = registry[id as CourseId];
  if (!versions) return false;
  const def = native ? versions[native] : Object.values(versions)[0];
  return Boolean(def && def.model.readyCities.length > 0);
}

// Live bindings: importers always see the active course's values.
export let course: CourseDef = russianCourseDef;
export let ui: UiText = uiText.en;
export let levels = course.model.levels;
export let readyCities = course.model.readyCities;
export let courseLessons = course.model.courseLessons;
export let allPlannedLessons = course.model.allPlannedLessons;

/** Switch the whole app to a course. Safe to call on every render. */
export function setActiveCourse(id: string | null | undefined, native?: UiLang | null, gender?: "m" | "f" | null) {
  const base = id && courseReady(id, native) ? pick(id as CourseId, native) : russianCourseDef;
  const next = gender === "f" && base.gender ? base.gender.female : base;
  if (next === course) return;
  course = next;
  ui = { ...uiText[next.uiLang], ...next.uiOverrides };
  levels = next.model.levels;
  readyCities = next.model.readyCities;
  courseLessons = next.model.courseLessons;
  allPlannedLessons = next.model.allPlannedLessons;
  if (typeof document !== "undefined") document.documentElement.lang = next.uiLang;
}

export const getLesson = (id: string) => course.model.getLesson(id);
export const getCity = (id: string) => course.model.getCity(id);
export const cityName = (id: string) => course.model.cityName(id);
export const plannedInLevel: CourseModel["plannedInLevel"] = (level) => course.model.plannedInLevel(level);
export const earnedRewards: CourseModel["earnedRewards"] = (ids) => course.model.earnedRewards(ids);
export const learnedVocab: CourseModel["learnedVocab"] = (ids) => course.model.learnedVocab(ids);
export const cityRewards: CourseModel["cityRewards"] = (c, ids) => course.model.cityRewards(c, ids);
export const keepsakes: CourseModel["keepsakes"] = (ids) => course.model.keepsakes(ids);
export const homeCity: CourseModel["homeCity"] = (ids) => course.model.homeCity(ids);
export const completedCities: CourseModel["completedCities"] = (ids) => course.model.completedCities(ids);
export const nextLesson: CourseModel["nextLesson"] = (ids) => course.model.nextLesson(ids);
export const pendingFinale: CourseModel["pendingFinale"] = (ids, seen) => course.model.pendingFinale(ids, seen);
export const cityAfter: CourseModel["cityAfter"] = (id) => course.model.cityAfter(id);
export const isTarget = (text: string) => course.isTarget(text);

/** Display names of a dialogue speaker for the active course. */
export function speakerName(id: SpeakerId): { name: string; target: string } {
  return course.speakers[id] ?? { name: id, target: id };
}

/** "Listen to X" → "Stop X" in the interface language. */
export function stopLabel(label: string): string {
  return label.startsWith(ui.play) ? ui.stop + label.slice(ui.play.length) : label;
}
