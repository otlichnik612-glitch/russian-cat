import { allCourseVersions, type CourseDef, type CourseId } from "@/lib/course/active";
import { audioKey, NARRATOR, voiceCast, type VoiceId } from "@/lib/course/audio";
import type { Activity, Lesson } from "@/lib/course/types";

/**
 * Every phrase the app can play aloud, by language, character and city: what the voice page records.
 * Mirrors the play buttons in the lesson screens: dialogue lines in the speaker's voice,
 * everything else (word cards, letters, grammar examples, tasks, the postcard, city welcomes) in Murzik's.
 */
export type Phrase = { lang: string; speaker: VoiceId; key: string; text: string; place: string };

export { grokLanguage } from "./phrases-lang";
import { grokLanguage } from "./phrases-lang";

/** Texts in the language being learned. In Korean and Arabic, explanations mix in Latin or Cyrillic words: those are not played. */
function playable(def: CourseDef, text: string | undefined): text is string {
  if (!text || !text.trim() || !def.isTarget(text)) return false;
  if ((def.id === "ko" || def.id === "ar") && /[A-Za-zА-Яа-яЁё]{2,}/.test(text)) return false;
  return true;
}

const SKIP = new Set(["id", "kind", "skill", "prompt", "help", "image", "imageA11y", "modelEn", "promptLang", "speaker", "extra", "before", "after", "text"]);

function activityTexts(a: Activity, push: (text: string) => void) {
  const any = a as Record<string, unknown>;
  if (a.kind === "speak" && typeof any.prompt === "string") push(any.prompt);
  (function walk(v: unknown, key: string) {
    if (SKIP.has(key)) return;
    if (typeof v === "string") return push(v);
    if (Array.isArray(v)) return v.forEach((x) => walk(x, ""));
    if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, k);
  })(any, "");
}

function lessonPhrases(def: CourseDef, lesson: Lesson, add: (speaker: VoiceId, text: string | undefined, place: string) => void) {
  const place = lesson.cityId;
  const narrate = (text: string | undefined) => add(NARRATOR, text, place);
  lesson.vocab.forEach((v) => narrate(v.ru));
  lesson.letters?.forEach((l) => narrate(l.example));
  lesson.dialogue.lines.forEach((line) => add(line.speaker in voiceCast ? line.speaker : NARRATOR, line.ru, place));
  activityTexts(lesson.dialogue.gist, narrate);
  lesson.grammar.forEach((g) => g.examples?.forEach((e) => narrate(e.ru)));
  lesson.tasks.forEach((t) => activityTexts(t, narrate));
}

/** All phrases of one course (every native-language version and the female forms), without repeats. */
export function coursePhrases(courseId: CourseId): Phrase[] {
  const out = new Map<string, Phrase>();
  for (const { id, def } of allCourseVersions()) {
    if (id !== courseId) continue;
    const lang = grokLanguage(def.speechLang);
    const add = (speaker: VoiceId, text: string | undefined, place: string) => {
      if (!playable(def, text)) return;
      const clean = text.normalize("NFC").replace(/\s+/g, " ").trim();
      const key = audioKey(clean);
      const id2 = `${speaker}/${key}`;
      if (!out.has(id2)) out.set(id2, { lang, speaker, key, text: clean, place });
    };
    add(NARRATOR, def.prologue.postcard.ru, "prologue");
    for (const city of def.model.readyCities) {
      add(NARRATOR, city.story?.welcomeRu, city.id);
      for (const lesson of city.lessons) lessonPhrases(def, lesson, add);
    }
  }
  return [...out.values()];
}

/** The courses that can be recorded, with their cities in route order (names in Russian where there is a Russian version). */
export function voiceCourses(): { id: CourseId; title: string; lang: string; cities: { id: string; name: string }[] }[] {
  const seen = new Map<CourseId, { id: CourseId; title: string; lang: string; cities: { id: string; name: string }[] }>();
  for (const { id, native, def } of allCourseVersions()) {
    const current = seen.get(id);
    if (current && native !== "ru") continue;
    seen.set(id, {
      id,
      title: def.title,
      lang: grokLanguage(def.speechLang),
      cities: [{ id: "prologue", name: native === "ru" ? "Пролог" : "Prologue" }, ...def.model.readyCities.map((c) => ({ id: c.id, name: c.name }))],
    });
  }
  return [...seen.values()];
}
