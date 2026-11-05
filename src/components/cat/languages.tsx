import { useEffect, useRef, useState } from "react";
import { courseDef, courseReady, uiFor, type CourseId } from "@/lib/course/active";
import { startedCourses, useProgress } from "@/lib/course/progress";
import { useAllOpen } from "./dev";
import { courseOptions, languageBadges, languageScreens, nativeOptions, soonNativeOptions, type NativeLang, type TargetLang } from "@/lib/course/languages";
import { Button, Illustration, Picture } from "./ui";

/**
 * Screen 1 of the app: Murzik says hello and the learner picks their own language.
 * In Russian and English, because the learner's language is not known yet.
 * Built for VoiceOver: focus moves to the heading, every text has its own language.
 */
export function NativePicker({ onChosen }: { onChosen: (nativeLang: NativeLang) => void }) {
  const page = languageScreens.native;
  const [soon, setSoon] = useState<string | null>(null);
  const soonOption = soonNativeOptions.find((option) => option.id === soon);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => heading.current?.focus(), []);
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 bg-paper px-5 py-6">
      <p className="font-display text-xl">Talky Kitty</p>
      <Illustration src={page.image} a11y={page.a11y} />
      <div className="flex flex-col gap-2">
        <p className="flex flex-col">
          <span lang="ru" className="font-sans text-3xl font-bold">
            {page.helloRu}
          </span>
          <span lang="en" className="font-display text-3xl">
            {page.helloEn}
          </span>
          <span lang="fr" className="font-display text-3xl">
            {page.helloFr}
          </span>
        </p>
        <p className="flex flex-col text-lg">
          <span lang="ru">{page.textRu}</span>
          <span lang="en">{page.textEn}</span>
          <span lang="fr">{page.textFr}</span>
        </p>
      </div>
      <h1 ref={heading} tabIndex={-1} className="flex flex-col gap-1">
        <span lang="ru" className="font-sans text-2xl font-bold">
          {page.titleRu}
        </span>
        <span lang="en" className="font-display text-2xl">
          {page.titleEn}
        </span>
        <span lang="fr" className="font-display text-2xl">
          {page.titleFr}
        </span>
      </h1>
      <div className="grid gap-3">
        {nativeOptions.map((option) => (
          <Button
            key={option.id}
            aria-label={`${option.a11y}. ${languageBadges[option.id].say.split(" · ").slice(0, 2).join(" · ")}`}
            className="justify-start gap-4 py-2 pl-2"
            onClick={() => onChosen(option.id)}
          >
            <Badge id={option.id} />
            {option.label}
          </Button>
        ))}
        {soonNativeOptions.map((option) => (
          <Button
            key={option.id}
            variant="ghost"
            lang={option.id}
            aria-label={`${option.label}. ${option.say.split(" · ")[0]}. ${option.soon[0].text}`}
            className="justify-start gap-4 py-2 pl-2"
            onClick={() => setSoon(option.id)}
          >
            <Picture src={option.image} className="size-14 shrink-0 rounded-full bg-paper-deep object-cover opacity-50" />
            {option.label} — {option.soon[0].text.replace(".", "")}
          </Button>
        ))}
      </div>
      <p role="status" aria-live="polite" className="flex flex-col font-bold text-garden">
        {soonOption
          ? soonOption.soon.map((line) => (
              <span key={line.lang} lang={line.lang}>
                {line.text}
              </span>
            ))
          : null}
      </p>
    </main>
  );
}

/** A badge description ("ru · en · fr") in one language. */
function sayIn(say: string, native: NativeLang) {
  const [ru, en, fr] = say.split(" · ");
  return (native === "ru" ? ru : native === "fr" ? fr ?? en : en) ?? say;
}

/**
 * "Which language do you want to learn?" — in the learner's own language only.
 * Only courses available for that native language are shown; courses that are not ready say "coming soon".
 */
export function CoursePicker({
  native,
  onChosen,
  onBack,
}: {
  native: NativeLang;
  onChosen: (targetLang: TargetLang) => void;
  onBack: () => void;
}) {
  const [soon, setSoon] = useState<TargetLang | null>(null);
  const allOpen = useAllOpen();
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => heading.current?.focus(), []);
  const page = languageScreens.target;
  return (
    <main lang={native} className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 bg-paper px-5 py-6">
      <Illustration src={page.image} a11y={page.a11y[native]} />
      <h1 ref={heading} tabIndex={-1} className="font-display text-3xl">
        {page.title[native]}
      </h1>
      <div className="grid gap-3">
        {courseOptions[native].map((option) => {
          const ready = (option.ready || allOpen) && courseReady(option.id, native);
          return (
            <Button
              key={option.id}
              variant={ready ? "primary" : "ghost"}
              aria-label={`${option.label}. ${sayIn(languageBadges[option.id].say, native)}${ready ? "" : `. ${page.soonMark[native]}`}`}
              className="justify-start gap-4 py-2 pl-2"
              onClick={() => (ready ? onChosen(option.id) : setSoon(option.id))}
            >
              <Badge id={option.id} faded={!ready} />
              {option.label}
              {ready ? "" : ` — ${page.soonMark[native]}`}
            </Button>
          );
        })}
      </div>
      <p role="status" aria-live="polite" className="font-bold text-garden">
        {soon ? page.soon[native][soon] : null}
      </p>
      <Button variant="quiet" onClick={onBack}>
        {page.back[native]}
      </Button>
    </main>
  );
}

/** The small picture of Murzik on a language button. Hidden from VoiceOver: the button label already says it. */
function Badge({ id, faded }: { id: NativeLang | TargetLang; faded?: boolean }) {
  return (
    <Picture
      src={languageBadges[id].image}
      className={`size-14 shrink-0 rounded-full bg-paper-deep object-cover${faded ? " opacity-50" : ""}`}
    />
  );
}

/**
 * "My courses": every course the learner has started, with where they are in it.
 * Choosing one continues it from the same place; "Add a language" opens the course picker.
 * Shown only to learners with two or more courses. In the learner's own language.
 */
export function MyCourses({
  native,
  onChosen,
  onAdd,
  onBack,
}: {
  native: NativeLang;
  onChosen: (targetLang: TargetLang) => void;
  onAdd: () => void;
  onBack: () => void;
}) {
  const active = useProgress((state) => state.targetLang);
  const started = useProgress((state) => startedCourses(state));
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => heading.current?.focus(), []);
  const t = uiFor(native);
  const rows = started.flatMap(({ id, completed }) => {
    const def = courseDef(id as CourseId, native);
    if (!def) return [];
    const label = courseOptions[native].find((option) => option.id === id)?.label ?? def.title;
    const next = def.model.nextLesson(completed);
    const done = def.model.courseLessons.filter((lesson) => completed.includes(lesson.id)).length;
    const where = next
      ? t.courseAt(def.model.cityName(next.cityId), next.number)
      : done >= def.model.allPlannedLessons
        ? t.courseFinished
        : t.courseWaiting;
    return [{ id, label, where }];
  });
  return (
    <main lang={native} className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 bg-paper px-5 py-6">
      <h1 ref={heading} tabIndex={-1} className="font-display text-3xl">
        {t.myCourses}
      </h1>
      <p className="text-lg">{t.myCoursesText}</p>
      <div className="grid gap-3">
        {rows.map((row) => (
          <Button
            key={row.id}
            variant={row.id === active ? "primary" : "ghost"}
            aria-label={`${row.label}${row.id === active ? `, ${t.courseActive}` : ""}. ${row.where}. ${sayIn(languageBadges[row.id].say, native)}`}
            className="justify-start gap-4 py-2 pl-2 text-left"
            onClick={() => onChosen(row.id)}
          >
            <Badge id={row.id} />
            <span className="flex flex-col">
              <span>
                {row.label}
                {row.id === active ? ` · ${t.courseActive}` : ""}
              </span>
              <span className="text-base font-normal">{row.where}</span>
            </span>
          </Button>
        ))}
      </div>
      <Button variant="ghost" onClick={onAdd}>
        {t.addLanguage}
      </Button>
      <Button variant="quiet" onClick={onBack}>
        {t.back}
      </Button>
    </main>
  );
}
