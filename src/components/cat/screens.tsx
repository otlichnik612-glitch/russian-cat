import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/course/art";
import {
  cityAfter,
  completedCities,
  courseLessons,
  cityRewards,
  earnedRewards,
  getCity,
  homeCity,
  keepsakes,
  learnedVocab,
  levels,
  nextLesson,
  pendingFinale,
  readyCities,
  course,
  ui,
} from "@/lib/course/active";
import { downloadFlashcards, downloadLessonDoc } from "@/lib/course/downloads";
import { LESSONS_PER_CITY } from "@/lib/course/model";
import { seenFinales, useProgress } from "@/lib/course/progress";
import type { Lesson } from "@/lib/course/types";
import { useIdentity } from "@/lib/identity/client";
import { devToolsEnabled } from "./dev";
import { Button, Card, Illustration, Meter, Picture, PlayButton, Ru, RussianLine } from "./ui";

export function Splash() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-2 px-6 text-center">
      <p className="font-display text-4xl">Talky Kitty</p>
    </main>
  );
}

/** Prologue screens 1 and 2: the postcard under the door. */
export function Opening({ onContinue }: { onContinue: () => void }) {
  const [step, setStep] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
  }, [step]);
  if (step === 0) {
    const page = course.prologue.find;
    return (
      <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-6">
        <p className="font-display text-xl">Talky Kitty</p>
        <p lang="ru" className="font-sans text-lg font-bold">
          {course.title}
        </p>
        <Illustration src={page.image} a11y={page.a11y} />
        <div className="flex flex-col gap-3">
          <h1 ref={heading} tabIndex={-1} className="font-display text-5xl">
            {page.title}
          </h1>
          <p className="text-xl">{page.text}</p>
        </div>
        <Button onClick={() => setStep(1)}>{ui.continue}</Button>
      </main>
    );
  }
  const page = course.prologue.postcard;
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-6">
      <Illustration src={page.image} a11y={page.a11y} />
      <div className="flex flex-col gap-2 rounded-3xl bg-paper-deep p-4">
        <h1 ref={heading} tabIndex={-1} className="sr-only">
          {ui.postcard}
        </h1>
        <RussianLine text={page.ru} id="prologue-postcard" label={`${ui.play} ${page.ru}`} />
        <p className="text-xl">{page.en}</p>
      </div>
      <p className="text-xl">{page.text}</p>
      <p className="text-xl font-bold">{page.question}</p>
      <Button onClick={onContinue}>{ui.continue}</Button>
    </main>
  );
}

/** Prologue screen 3: setting off. The main paragraph is the author's own text. */
export function Intro({ onContinue }: { onContinue: () => void }) {
  const page = course.prologue.journey;
  const intro = course.intro;
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
  }, []);
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-6">
      <Illustration src={page.image} a11y={page.a11y} />
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        {intro.heading}
      </h1>
      <p>{page.text}</p>
      <div className="flex items-center gap-4">
        <img src={intro.companionImage ?? images.tom} alt="" className="size-20 rounded-full object-cover" />
        <p>
          <span className="font-bold">{intro.tomBold}</span> {intro.tomRest}
        </p>
      </div>
      <p className="rounded-2xl bg-card px-4 py-3 font-bold">{intro.start}</p>
      <Button onClick={onContinue}>{intro.go}</Button>
    </main>
  );
}

/** The level (A1, A2…) a city belongs to. */
function levelOf(cityId: string): string {
  return levels.find((level) => level.cities.some((c) => c.id === cityId))?.id ?? "A1";
}

export function Home({
  onLesson,
  onJourney,
  onPhrases,
  onApartment,
  onFinale,
  onOpening,
  onDev,
  onLanguages,
  onAccount,
}: {
  onLesson: (id: string) => void;
  onJourney: () => void;
  onPhrases: () => void;
  onApartment: () => void;
  onFinale: (cityId: string) => void;
  onOpening: () => void;
  onDev: () => void;
  onLanguages: () => void;
  onAccount: () => void;
}) {
  const signedIn = useIdentity((state) => state.status === "signed-in");
  const completed = useProgress((state) => state.completedLessonIds);
  const ceremonySeen = useProgress((state) => state.ceremonySeen);
  const finalesSeen = useProgress((state) => state.finalesSeen);
  const finales = seenFinales({ ceremonySeen, finalesSeen });
  const draft = useProgress((state) => state.draft);
  const next = nextLesson(completed);
  const finale = pendingFinale(completed, finales);
  const words = learnedVocab(completed).length;
  const doneCities = completedCities(completed);
  const doneLessons = courseLessons.filter((lesson) => completed.includes(lesson.id)).length;
  const current = next ? getCity(next.cityId) : readyCities[readyCities.length - 1];
  const currentCount = current
    ? current.lessons.filter((lesson) => completed.includes(lesson.id)).length
    : 0;
  const lastStory = readyCities[readyCities.length - 1]?.story;
  const arrival = lastStory?.finale[lastStory.finale.length - 1];
  const upcoming = cityAfter(readyCities[readyCities.length - 1]?.id ?? "");
  const openCities = readyCities.filter(
    (c) => c.id === current?.id || c.lessons.some((lesson) => completed.includes(lesson.id)),
  );

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col gap-6 px-5 py-6">
      <header className="flex items-center gap-4">
        <img src={images.murzik} alt="" className="size-16 rounded-full object-cover" />
        <div>
          <h1 className="font-display text-3xl">Talky Kitty</h1>
          <p lang="ru" className="font-sans text-lg font-bold">
            {course.title}
          </p>
        </div>
      </header>
      <Card className="flex flex-col gap-4">
        {finale?.story ? (
          <>
            <p className="text-base font-bold text-garden">
              {levelOf(finale.id)} · {ui.cityComplete(finale.name)}
              {cityAfter(finale.id) ? ` · ${ui.isNext(cityAfter(finale.id)!.name)}` : ""}
            </p>
            <h2 className="font-display text-4xl">{ui.flightWaiting}</h2>
            <Illustration
              src={finale.story.departureImage}
              a11y={finale.story.departureA11y}
              ratio="aspect-[3/4]"
            />
            <Button onClick={() => onFinale(finale.id)}>{ui.continue}</Button>
          </>
        ) : next && current ? (
          <>
            <p className="text-base font-bold text-garden">
              {ui.lessonOf(next.level, current.name, next.number, LESSONS_PER_CITY)}
            </p>
            {next.number === 1 && current.story && current.id !== readyCities[0]?.id ? (
              <>
                <h2 className="text-4xl">
                  <Ru>{current.story.welcomeRu}</Ru>
                </h2>
                <p>{current.story.welcomeEn}</p>
                <Illustration src={current.story.welcomeImage} a11y={current.story.welcomeA11y} />
              </>
            ) : null}
            <h2 className="font-display text-4xl">{next.title}</h2>
            <p>{ui.aboutMinutes(next.minutes)}</p>
            <Button onClick={() => onLesson(next.id)}>
              {draft?.lessonId === next.id
                ? ui.continueLesson
                : doneLessons === 0
                  ? ui.startLesson1
                  : ui.newLesson}
            </Button>
          </>
        ) : (
          <>
            <p className="text-base font-bold text-garden">
              {upcoming ? `${levelOf(upcoming.id)} · ${upcoming.name}` : ui.nextCity}
            </p>
            {arrival ? (
              <>
                {arrival.lines.map((item) => (
                  <div key={item.en}>
                    {item.ru ? (
                      <h2 className="text-4xl">
                        <Ru>{item.ru}</Ru>
                      </h2>
                    ) : null}
                    <p>{item.en}</p>
                  </div>
                ))}
                <Illustration src={arrival.image} a11y={arrival.a11y} />
              </>
            ) : null}
            <p>
              {upcoming ? ui.nextChapter(upcoming.name) : ui.moreOnTheWay} {ui.untilThen}
            </p>
            <Button variant="ghost" onClick={() => onLesson(courseLessons[0]!.id)}>
              {ui.reviewFromStart}
            </Button>
          </>
        )}
      </Card>
      <Card className="flex flex-col gap-4">
        <h2 className="font-display text-2xl">{ui.yourProgress}</h2>
        {current ? (
          <Meter label={ui.cityLessons(current.name)} value={currentCount} max={LESSONS_PER_CITY} />
        ) : null}
        {doneCities.length ? <p>{ui.citiesVisited(doneCities.map((c) => c.name))}</p> : null}
        <p className="text-muted">
          {ui.phrasesLearned} <span className="font-bold text-ink tabular-nums">{words}</span>.
        </p>
      </Card>
      {openCities.map((c) => (
        <section key={c.id} className="flex flex-col gap-3">
          <h2 className="font-display text-2xl">
            {c.name}{" "}
            <span lang={course.htmlLang} className="font-sans text-lg text-muted">
              {c.nameRu}
            </span>
          </h2>
          {c.lessons.map((lesson) => (
            <LessonRow
              key={lesson.id}
              lesson={lesson}
              state={
                completed.includes(lesson.id) ? "done" : next?.id === lesson.id ? "now" : "locked"
              }
              onOpen={() => onLesson(lesson.id)}
            />
          ))}
        </section>
      ))}
      <Card className="flex flex-col gap-4">
        <HomeView />
        <Button variant="ghost" onClick={onApartment}>
          {ui.openHome}
        </Button>
      </Card>
      <div className="grid gap-3">
        <Button variant="ghost" onClick={onAccount}>
          {signedIn ? ui.yourAccount : ui.saveProgress}
        </Button>
        <Button variant="ghost" onClick={onJourney}>
          {ui.seeJourney}
        </Button>
        <Button variant="ghost" onClick={onPhrases}>
          {ui.yourPhrases}
        </Button>
        <Button variant="quiet" onClick={onOpening}>
          {ui.replayOpening}
        </Button>
        <Button variant="quiet" onClick={onLanguages}>
          {ui.changeLanguage}
        </Button>
      </div>
      {devToolsEnabled() ? (
        <Button variant="ghost" onClick={onDev}>
          Developer panel
        </Button>
      ) : null}
    </main>
  );
}

function LessonRow({
  lesson,
  state,
  onOpen,
}: {
  lesson: Lesson;
  state: "done" | "now" | "locked";
  onOpen: () => void;
}) {
  const locked = state === "locked";
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState("");
  const panelId = `lesson-actions-${lesson.id}`;

  const download = async (kind: "lesson" | "cards") => {
    setStatus(kind === "lesson" ? ui.preparingLesson : ui.preparingCards);
    try {
      if (kind === "lesson") await downloadLessonDoc(lesson);
      else await downloadFlashcards(lesson);
      setStatus(kind === "lesson" ? ui.lessonDownloadStarted : ui.cardsDownloadStarted);
    } catch {
      setStatus(ui.downloadFailed);
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-3xl border border-line bg-card">
      <button
        type="button"
        disabled={locked}
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={locked ? undefined : expanded}
        aria-controls={locked ? undefined : panelId}
        aria-label={
          locked
            ? ui.lessonLocked(lesson.number, lesson.title)
            : ui.lessonOpen(lesson.number, lesson.title)
        }
        className="flex min-h-16 items-center justify-between gap-3 rounded-3xl px-4 py-3 text-left disabled:opacity-55"
      >
        <span>
          <span className="block text-base font-bold text-garden">{ui.lesson(lesson.number)}</span>
          <span className="block text-lg font-bold">{lesson.title}</span>
          {locked ? <span className="text-muted">{ui.finishPrevious}</span> : null}
        </span>
        <span className="font-bold text-garden">{state === "done" ? ui.review : state === "now" ? ui.open : ""}</span>
      </button>
      {!locked && expanded ? (
        <div id={panelId} className="flex flex-col gap-2 px-4 pb-4">
          <Button onClick={onOpen}>{state === "done" ? ui.reviewThisLesson : ui.startThisLesson}</Button>
          <Button variant="ghost" onClick={() => void download("cards")}>
            {ui.downloadCards}
          </Button>
          <Button variant="ghost" onClick={() => void download("lesson")}>
            {ui.downloadLesson}
          </Button>
          <p role="status" className="text-muted">
            {status}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function Journey({ onBack }: { onBack: () => void }) {
  const completed = useProgress((state) => state.completedLessonIds);
  const next = nextLesson(completed);
  // After the last written city, its farewell already revealed the next stop.
  const arrived = next ? null : cityAfter(readyCities[readyCities.length - 1]?.id ?? "");
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 px-5 py-6">
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        {ui.back}
      </button>
      <h1 className="font-display text-4xl">{ui.journey}</h1>
      <p>{ui.journeyIntro}</p>
      {levels.map((level) => {
        // Only cities the learner has reached are named. The rest stay a surprise.
        const reached = level.cities.filter(
          (city) =>
            next?.cityId === city.id ||
            arrived?.id === city.id ||
            city.lessons.some((lesson) => completed.includes(lesson.id)),
        );
        const hidden = level.cities.length - reached.length;
        return (
          <details key={level.id} open={reached.length > 0} className="rounded-3xl border border-line bg-card p-4">
            <summary className="min-h-12 text-xl font-bold">
              {level.title} · {level.subtitle}
            </summary>
            <ul className="mt-3 flex flex-col gap-2">
              {reached.map((city) => {
                const complete = city.lessons.length > 0 && city.lessons.every((lesson) => completed.includes(lesson.id));
                return (
                  <li key={city.id} className="flex items-baseline justify-between gap-3 rounded-2xl bg-paper px-3 py-3">
                    <span>
                      <span className="font-bold">{city.name}</span>{" "}
                      <span lang={course.htmlLang} className="text-muted">
                        {city.nameRu}
                      </span>
                    </span>
                    <span className="text-muted">{complete ? ui.done : arrived?.id === city.id ? ui.arrived : ui.now}</span>
                  </li>
                );
              })}
              {hidden > 0 ? (
                <li className="flex items-baseline justify-between gap-3 rounded-2xl bg-paper-deep px-3 py-3">
                  <span className="font-bold">? ? ?</span>
                  <span className="text-muted">
                    {ui.citiesToDiscover(hidden)}
                  </span>
                </li>
              ) : null}
            </ul>
          </details>
        );
      })}
    </main>
  );
}

export function Phrases({ onBack }: { onBack: () => void }) {
  const completed = useProgress((state) => state.completedLessonIds);
  const items = learnedVocab(completed);
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 px-5 py-6">
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        {ui.back}
      </button>
      <h1 className="font-display text-4xl">{ui.yourPhrases}</h1>
      {items.length === 0 ? <p>{ui.phrasesEmpty}</p> : null}
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.id} className="rounded-3xl border border-line bg-card p-4">
            <Picture src={item.image} className="mb-3 aspect-square w-full rounded-2xl object-cover" />
            <p className="text-3xl">
              <Ru>{item.ru}</Ru>
            </p>
            <p>{item.en}</p>
            <p className="sr-only">{item.a11y}</p>
            <div className="mt-3">
              <PlayButton id={`bank-${item.id}`} text={item.ru} label={item.audioLabel} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

/** Murzik's home in the current city, plus the favourite things he carries from earlier cities. */
function HomeView({ large = false }: { large?: boolean }) {
  const completed = useProgress((state) => state.completedLessonIds);
  const place = homeCity(completed);
  const home = place.story?.home;
  const items = cityRewards(place, completed);
  const carried = keepsakes(completed).filter((item) => !items.some((own) => own.itemId === item.itemId));
  const Heading = large ? "h1" : "h2";
  const description = items.length
    ? ui.homeNowHas(home?.name ?? ui.murziksHome, items.map((item) => `${item.itemName}, ${item.itemNameRu}`).join("; "))
    : (home?.a11y ?? ui.homeEmpty);
  return (
    <div className="flex flex-col gap-4">
      <Heading className={large ? "font-display text-4xl" : "font-display text-2xl"}>{home?.name ?? ui.murziksHome}</Heading>
      {home ? (
        <p className="text-lg font-bold">
          <Ru>{home.nameRu}</Ru>
        </p>
      ) : null}
      <Illustration
        src={items.length ? items[items.length - 1]!.image : (home?.image ?? images.apartment)}
        a11y={description}
        ratio={large ? "aspect-[3/4]" : "aspect-[4/3]"}
      />
      {items.length ? (
        <ul className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <li key={item.itemId} className="pop overflow-hidden rounded-2xl border border-line bg-paper">
              <Picture src={item.image} className="aspect-square w-full object-cover" />
              <p className="px-3 pt-2 font-bold">{item.itemName}</p>
              <p className="px-3 pb-3 text-lg">
                <Ru>{item.itemNameRu}</Ru>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{ui.nothingYet}</p>
      )}
      {carried.length ? (
        <div className="rounded-2xl bg-paper-deep p-4">
          <p className="font-bold">{ui.inSuitcase}</p>
          <p>
            {carried.map((item) => item.itemName).join(" · ")}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function Apartment({ onBack }: { onBack: () => void }) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 px-5 py-6">
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        {ui.back}
      </button>
      <HomeView large />
    </main>
  );
}

export function RewardScreen({ lesson, onContinue }: { lesson: Lesson; onContinue: () => void }) {
  const completeLesson = useProgress((state) => state.completeLesson);
  const completed = useProgress((state) => state.completedLessonIds);
  const place = getCity(lesson.cityId);
  const withThis = completed.includes(lesson.id) ? completed : [...completed, lesson.id];
  const rewards = place ? cityRewards(place, withThis) : earnedRewards(withThis);
  useEffect(() => {
    completeLesson(lesson.id);
  }, [completeLesson, lesson.id]);
  const reward = lesson.reward;
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 px-5 py-6">
      <p className="text-base font-bold text-garden">{ui.lesson(lesson.number)}</p>
      <Illustration src={reward.image} a11y={reward.a11y} />
      <ol className="flex flex-col gap-2">
        {reward.steps.map((step) => (
          <li key={step} className="rounded-2xl bg-card px-4 py-3">
            {step}
          </li>
        ))}
      </ol>
      <h1 className="text-4xl">
        <Ru>{reward.ru}</Ru>
      </h1>
      <p className="text-xl">{reward.en}</p>
      <p className="sr-only">{reward.a11y}</p>
      {reward.bridge ? <p>{reward.bridge}</p> : null}
      <p className="text-muted">
        {place?.story?.home.name ?? ui.murziksHome}: {rewards.map((item) => item.itemName).join(", ")}.
      </p>
      <h2 className="font-display text-3xl">{ui.lessonComplete}</h2>
      <Button onClick={onContinue}>{ui.continue}</Button>
    </main>
  );
}

export function Finale({ cityId, onDone }: { cityId: string; onDone: () => void }) {
  const setFinaleSeen = useProgress((state) => state.setFinaleSeen);
  const completed = useProgress((state) => state.completedLessonIds);
  const place = getCity(cityId);
  const beats = place?.story?.finale ?? [];
  const earned = place ? cityRewards(place, completed) : [];
  const [index, setIndex] = useState(0);
  const beat = beats[index] ?? beats[0];
  const last = index >= beats.length - 1;
  const done = completedCities(completed);
  const following = cityAfter(cityId);
  const finish = () => {
    setFinaleSeen(cityId);
    onDone();
  };
  useEffect(() => {
    if (beats.length === 0) {
      setFinaleSeen(cityId);
      onDone();
    }
  }, [beats.length, cityId, onDone, setFinaleSeen]);
  if (!beat) return null;
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 px-5 py-6">
      <p className="text-base font-bold text-garden">
        {index + 1} / {beats.length}
      </p>
      <Illustration src={beat.image} a11y={beat.a11y} />
      <div className="flex flex-col gap-3">
        {index === 0 ? <p>{earned.map((item) => item.itemName).join(" · ")}</p> : null}
        {beat.lines.map((item) => (
          <div key={item.en}>
            {item.ru ? (
              <h2 className="text-3xl">
                <Ru>{item.ru}</Ru>
              </h2>
            ) : null}
            <p className="text-xl">{item.en}</p>
          </div>
        ))}
      </div>
      {last ? (
        <Card>
          <p className="font-bold">A1</p>
          {done.map((c) => (
            <p key={c.id}>{c.name} ✓</p>
          ))}
          {following ? <p>{following.name} →</p> : null}
          <p>{ui.citiesCompleted(done.length)}</p>
          <p className="mt-2">{ui.continueJourney}</p>
        </Card>
      ) : null}
      <Button onClick={() => (last ? finish() : setIndex(index + 1))}>{ui.continue}</Button>
    </main>
  );
}
