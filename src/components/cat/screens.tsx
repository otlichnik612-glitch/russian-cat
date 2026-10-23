import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/course/art";
import {
  allPlannedLessons,
  cityAfter,
  completedCities,
  courseLessons,
  cityRewards,
  earnedRewards,
  getCity,
  homeCity,
  keepsakes,
  learnedVocab,
  LESSONS_PER_CITY,
  levels,
  nextLesson,
  pendingFinale,
  plannedInLevel,
  readyCities,
} from "@/lib/course/curriculum";
import { prologue } from "@/lib/course/prologue";
import { seenFinales, useProgress } from "@/lib/course/progress";
import type { Lesson } from "@/lib/course/types";
import { devToolsEnabled } from "./dev";
import { Button, Card, Illustration, Meter, Picture, PlayButton, Ru, RussianLine } from "./ui";

export function Splash() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-2 px-6 text-center">
      <p className="font-display text-4xl">Russian Cat</p>
      <p lang="ru" className="font-sans text-2xl font-bold">
        Русский Кот
      </p>
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
    const page = prologue.find;
    return (
      <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-6">
        <p className="font-display text-xl">Russian Cat</p>
        <p lang="ru" className="font-sans text-lg font-bold">
          Русский Кот
        </p>
        <Illustration src={page.image} a11y={page.a11y} />
        <div className="flex flex-col gap-3">
          <h1 ref={heading} tabIndex={-1} className="font-display text-5xl">
            {page.title}
          </h1>
          <p className="text-xl">{page.text}</p>
        </div>
        <Button onClick={() => setStep(1)}>Continue</Button>
      </main>
    );
  }
  const page = prologue.postcard;
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-6">
      <Illustration src={page.image} a11y={page.a11y} />
      <div className="flex flex-col gap-2 rounded-3xl bg-paper-deep p-4">
        <h1 ref={heading} tabIndex={-1} className="sr-only">
          The postcard
        </h1>
        <RussianLine text={page.ru} id="prologue-postcard" label={`Play ${page.ru}`} />
        <p className="text-xl">{page.en}</p>
      </div>
      <p className="text-xl">{page.text}</p>
      <p className="text-xl font-bold">{page.question}</p>
      <Button onClick={onContinue}>Continue</Button>
    </main>
  );
}

/** Prologue screen 3: setting off. The main paragraph is the author's own text. */
export function Intro({ onContinue }: { onContinue: () => void }) {
  const page = prologue.journey;
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
  }, []);
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-6">
      <Illustration src={page.image} a11y={page.a11y} />
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        Learn Russian and help me decorate my apartment.
      </h1>
      <p>{page.text}</p>
      <div className="flex items-center gap-4">
        <img src={images.tom} alt="" className="size-20 rounded-full object-cover" />
        <p>
          <span className="font-bold">This is Tom.</span> He travels with me and learns Russian, just like you. Come with us!
        </p>
      </div>
      <p className="rounded-2xl bg-card px-4 py-3 font-bold">Paris — we start here</p>
      <Button onClick={onContinue}>{"Let's go!"}</Button>
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
}: {
  onLesson: (id: string) => void;
  onJourney: () => void;
  onPhrases: () => void;
  onApartment: () => void;
  onFinale: (cityId: string) => void;
  onOpening: () => void;
  onDev: () => void;
  onLanguages: () => void;
}) {
  const completed = useProgress((state) => state.completedLessonIds);
  const ceremonySeen = useProgress((state) => state.ceremonySeen);
  const finalesSeen = useProgress((state) => state.finalesSeen);
  const finales = seenFinales({ ceremonySeen, finalesSeen });
  const draft = useProgress((state) => state.draft);
  const reset = useProgress((state) => state.reset);
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
          <h1 className="font-display text-3xl">Russian Cat</h1>
          <p lang="ru" className="font-sans text-lg font-bold">
            Русский Кот
          </p>
        </div>
      </header>
      <Card className="flex flex-col gap-4">
        {finale?.story ? (
          <>
            <p className="text-base font-bold text-garden">
              {levelOf(finale.id)} · {finale.name} complete
              {cityAfter(finale.id) ? ` · ${cityAfter(finale.id)!.name} is next` : ""}
            </p>
            <h2 className="font-display text-4xl">Your flight is waiting.</h2>
            <Illustration
              src={finale.story.departureImage}
              a11y={finale.story.departureA11y}
              ratio="aspect-[3/4]"
            />
            <Button onClick={() => onFinale(finale.id)}>Continue</Button>
          </>
        ) : next && current ? (
          <>
            <p className="text-base font-bold text-garden">
              {next.level} · {current.name} · Lesson {next.number} of {LESSONS_PER_CITY}
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
            <p>About {next.minutes} minutes with Murzik and Tom.</p>
            <Button onClick={() => onLesson(next.id)}>
              {draft?.lessonId === next.id
                ? "Continue lesson"
                : doneLessons === 0
                  ? "Start lesson 1"
                  : "New lesson"}
            </Button>
          </>
        ) : (
          <>
            <p className="text-base font-bold text-garden">
              {upcoming ? `${levelOf(upcoming.id)} · ${upcoming.name}` : "Next city"}
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
              {upcoming
                ? `${upcoming.name} lessons are the next chapter.`
                : "More lessons are on the way."}{" "}
              Until then, review any lesson you like.
            </p>
            <Button variant="ghost" onClick={() => onLesson(courseLessons[0]!.id)}>
              Review from the start
            </Button>
          </>
        )}
      </Card>
      <Card className="flex flex-col gap-4">
        <h2 className="font-display text-2xl">Your progress</h2>
        {current ? (
          <Meter label={`${current.name} lessons`} value={currentCount} max={LESSONS_PER_CITY} />
        ) : null}
        <Meter
          label="A1 cities completed"
          value={doneCities.length}
          max={levels[0]!.cities.length}
        />
        <Meter label="Course lessons" value={doneLessons} max={allPlannedLessons} />
        <p className="text-muted">
          Phrases learned: <span className="font-bold text-ink tabular-nums">{words}</span>. Each
          city is one block of A1.
        </p>
      </Card>
      {openCities.map((c) => (
        <section key={c.id} className="flex flex-col gap-3">
          <h2 className="font-display text-2xl">
            {c.name}{" "}
            <span lang="ru" className="font-sans text-lg text-muted">
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
          Open Murzik’s home
        </Button>
      </Card>
      <div className="grid gap-3">
        <Button variant="ghost" onClick={onJourney}>
          See the journey
        </Button>
        <Button variant="ghost" onClick={onPhrases}>
          Your phrases
        </Button>
        <Button variant="quiet" onClick={onOpening}>
          Replay the opening
        </Button>
        <Button variant="quiet" onClick={onLanguages}>
          Сменить язык · Change language
        </Button>
        <Button
          variant="quiet"
          onClick={() => {
            if (window.confirm("Start the story again? This clears lessons and the apartment on this device.")) reset();
          }}
        >
          Reset progress
        </Button>
      </div>
      {devToolsEnabled() ? (
        <Button variant="ghost" onClick={onDev}>
          Developer panel
        </Button>
      ) : null}
      <p className="text-muted">
        Level plan: {plannedInLevel("A1")} A1 lessons across {levels[0]!.cities.length} cities, then A2, B1, B2 and C1.
      </p>
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
  return (
    <button
      type="button"
      disabled={locked}
      onClick={onOpen}
      aria-label={
        locked
          ? `Lesson ${lesson.number}, ${lesson.title}. Finish the previous lesson first.`
          : `Lesson ${lesson.number}, ${lesson.title}`
      }
      className="flex min-h-16 items-center justify-between gap-3 rounded-3xl border border-line bg-card px-4 py-3 text-left disabled:opacity-55"
    >
      <span>
        <span className="block text-base font-bold text-garden">Lesson {lesson.number}</span>
        <span className="block text-lg font-bold">{lesson.title}</span>
        {locked ? <span className="text-muted">Finish the previous lesson first.</span> : null}
      </span>
      <span className="font-bold text-garden">{state === "done" ? "Review" : state === "now" ? "Open" : ""}</span>
    </button>
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
        Back
      </button>
      <h1 className="font-display text-4xl">The journey</h1>
      <p>Each city is one block of 7 lessons. Where do we fly next? You find out when you finish a city.</p>
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
                      <span lang="ru" className="text-muted">
                        {city.nameRu}
                      </span>
                    </span>
                    <span className="text-muted">{complete ? "Done" : arrived?.id === city.id ? "Arrived" : "Now"}</span>
                  </li>
                );
              })}
              {hidden > 0 ? (
                <li className="flex items-baseline justify-between gap-3 rounded-2xl bg-paper-deep px-3 py-3">
                  <span className="font-bold">? ? ?</span>
                  <span className="text-muted">
                    {hidden} {hidden === 1 ? "city" : "cities"} to discover
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
        Back
      </button>
      <h1 className="font-display text-4xl">Your phrases</h1>
      {items.length === 0 ? <p>They gather here after lesson 1.</p> : null}
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
    ? `${home?.name ?? "Murzik's home"} now has ${items.map((item) => `${item.itemName}, ${item.itemNameRu}`).join("; ")}.`
    : (home?.a11y ?? "Murzik's home is still empty.");
  return (
    <div className="flex flex-col gap-4">
      <Heading className={large ? "font-display text-4xl" : "font-display text-2xl"}>{home?.name ?? "Murzik’s home"}</Heading>
      {home ? (
        <p lang="ru" className="text-lg font-bold">
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
              <p className="px-3 pb-3 text-lg" lang="ru">
                <Ru>{item.itemNameRu}</Ru>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing here yet. Each lesson brings one new thing home.</p>
      )}
      {carried.length ? (
        <div className="rounded-2xl bg-paper-deep p-4">
          <p className="font-bold">In Murzik’s suitcase</p>
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
        Back
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
      <p className="text-base font-bold text-garden">Lesson {lesson.number}</p>
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
        {place?.story?.home.name ?? "Murzik’s home"}: {rewards.map((item) => item.itemName).join(", ")}.
      </p>
      <h2 className="font-display text-3xl">Lesson Complete!</h2>
      <Button onClick={onContinue}>Continue</Button>
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
          <p>
            {done.length} {done.length === 1 ? "city" : "cities"} completed
          </p>
          <p className="mt-2">Continue your Russian journey.</p>
        </Card>
      ) : null}
      <Button onClick={() => (last ? finish() : setIndex(index + 1))}>Continue</Button>
    </main>
  );
}
