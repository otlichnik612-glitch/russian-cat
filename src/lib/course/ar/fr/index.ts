import type { CourseDef } from "../../active";
import { makeCourse } from "../../model";
import type { CityPlan, LevelPlan } from "../../types";
import { arabicCourseDef } from "..";
import { arabicTranscription } from "../make";
import { frenchDict } from "./dict";
import { frenchTranscription } from "./translit";

/**
 * «Une surprise pour grand-mère» — the Arabic course for French speakers.
 * The same lessons, Arabic texts, audio and pictures as the Russian version (..): every Russian text is replaced
 * by its French text from ./dict (written for French speakers), and the transcription under each Arabic phrase
 * is rewritten with French letters (./translit). A city opens only when all its texts have a French version.
 */

const SKIP = new Set(["id", "cityId", "level", "image", "itemId", "keepsakeId", "kind", "skill", "promptLang", "translit", "companionImage", "welcomeImage", "departureImage", "nameRu", "welcomeRu"]);
const hasCyrillic = (text: string) => /[А-Яа-яЁё]/.test(text);
const norm = (text: string) => text.normalize("NFC");

/** Deep copy with every Russian text replaced by its French text; `missing` collects texts without one. */
function toFrench<T>(value: T, missing: string[]): T {
  const walk = (item: unknown, key?: string, parent?: Record<string, unknown>): unknown => {
    if (typeof item === "string") {
      if ((key && SKIP.has(key)) || item.startsWith("/") || !hasCyrillic(item)) return item;
      // A dialogue line's speaker is an id, not a text.
      if (key === "speaker" && parent && "ru" in parent && "en" in parent) return item;
      const french = frenchDict[norm(item)];
      if (french === undefined) missing.push(item);
      return french ?? item;
    }
    if (typeof item === "function") return item;
    if (Array.isArray(item)) return item.map((x) => walk(x));
    if (item && typeof item === "object")
      return Object.fromEntries(Object.entries(item).map(([k, v]) => [k, walk(v, k, item as Record<string, unknown>)]));
    return item;
  };
  return walk(value) as T;
}

function frenchCourse(base: CourseDef): CourseDef {
  const levels: LevelPlan[] = base.model.levels.map((level) => ({
    ...level,
    subtitle: toFrench(level.subtitle, []),
    cities: level.cities.map((c): CityPlan => {
      const missing: string[] = [];
      const lessons = toFrench(c.lessons, missing);
      const story = toFrench(c.story, missing);
      const ready = c.lessons.length > 0 && missing.length === 0;
      return { ...c, name: toFrench(c.name, []), lessons: ready ? lessons : [], story: ready ? story : undefined };
    }),
  }));
  return {
    ...base,
    uiLang: "fr",
    title: toFrench(base.title, []),
    model: makeCourse(levels),
    translit: (text) => {
      const cyrillic = arabicTranscription(text);
      return cyrillic === undefined ? undefined : frenchTranscription(cyrillic);
    },
    prologue: toFrench(base.prologue, []),
    intro: toFrench(base.intro, []),
    speakers: toFrench(base.speakers, []),
    uiOverrides: {
      letters: "Les lettres arabes",
      lettersIntro: "L'arabe s'écrit de droite à gauche, et presque toutes les lettres d'un mot se relient entre elles. Voici les lettres des phrases du jour.",
      playTarget: "Écouter en arabe",
      aboutMinutes: (m: number) => `Seulement ${m} minutes avec Murzik et Karim.`,
    },
    gender: undefined,
  };
}

const question = toFrench(arabicCourseDef.gender!.question, []);
const female = frenchCourse(arabicCourseDef.gender!.female);
female.gender = { question, female };

/** The Arabic course for French speakers (male forms); `gender.female` has the female forms. */
export const arabicCourseFr: CourseDef = { ...frenchCourse(arabicCourseDef), gender: { question, female } };
