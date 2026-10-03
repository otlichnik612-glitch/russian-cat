import { useEffect, useState } from "react";
import { images } from "@/lib/course/art";
import {
  allPlannedLessons,
  earnedRewards,
  learnedVocab,
  LESSONS_PER_CITY,
  levels,
  nextParisLesson,
  parisComplete,
  parisLessons,
  plannedInLevel,
} from "@/lib/course/curriculum";
import { useProgress } from "@/lib/course/progress";
import type { Lesson } from "@/lib/course/types";
import { Button, Card, Illustration, Meter, PlayButton, Ru } from "./ui";

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

export function Opening({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-6">
      <p className="font-display text-xl">Russian Cat</p>
      <p lang="ru" className="font-sans text-lg font-bold">
        Русский Кот
      </p>
      <Illustration
        src={images.opening}
        a11y="Murzik the cat waves hello in a Paris garden. The Eiffel Tower is visible beyond the trees."
      />
      <div className="flex flex-col gap-3">
        <h1 className="font-display text-5xl">Hello, I’m Murzik!</h1>
        <p className="text-xl">I like to travel and teach Russian.</p>
      </div>
      <Button onClick={onContinue}>Continue</Button>
    </main>
  );
}

export function Intro({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-6">
      <Illustration
        src={images.greet}
        a11y="Murzik and Tom greet each other in a Paris garden, with the Eiffel Tower behind them."
      />
      <h1 className="font-display text-4xl">Learn Russian and help me decorate my apartment.</h1>
      <p>
        I travel from city to city with Tom. You learn the words. Little by little, my home fills with the things we
        find along the way.
      </p>
      <Illustration
        src={images.apartment}
        a11y="Murzik's Paris apartment is still almost empty, with a tall window and afternoon light."
      />
      <div className="flex items-center gap-4">
        <img src={images.tom} alt="" className="size-20 rounded-full object-cover" />
        <p>
          <span className="font-bold">This is Tom.</span> He asks the questions, answers mine, and comes with me.
        </p>
      </div>
      <ol className="flex flex-col gap-2">
        <li className="rounded-2xl bg-card px-4 py-3 font-bold">Paris — we start here</li>
        <li className="rounded-2xl bg-paper-deep px-4 py-3">London — the next stop</li>
        <li className="rounded-2xl bg-paper-deep px-4 py-3">Then onward, from A1 all the way to C1</li>
      </ol>
      <Button onClick={onContinue}>Continue</Button>
    </main>
  );
}

export function Home({
  onLesson,
  onJourney,
  onPhrases,
  onApartment,
  onFinale,
  onOpening,
}: {
  onLesson: (id: string) => void;
  onJourney: () => void;
  onPhrases: () => void;
  onApartment: () => void;
  onFinale: () => void;
  onOpening: () => void;
}) {
  const completed = useProgress((state) => state.completedLessonIds);
  const ceremony = useProgress((state) => state.ceremonySeen);
  const draft = useProgress((state) => state.draft);
  const reset = useProgress((state) => state.reset);
  const next = nextParisLesson(completed);
  const done = parisComplete(completed);
  const rewards = earnedRewards(completed);
  const words = learnedVocab(completed).length;
  const parisCount = parisLessons.filter((lesson) => completed.includes(lesson.id)).length;

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
        {done && !ceremony ? (
          <>
            <p className="text-base font-bold text-garden">A1 · Paris complete · London is next</p>
            <h2 className="font-display text-4xl">Your flight is waiting.</h2>
            <Illustration src={images.airport} a11y="Murzik and Tom with suitcases in a Paris airport." ratio="aspect-[3/4]" />
            <Button onClick={onFinale}>Continue</Button>
          </>
        ) : done ? (
          <>
            <p className="text-base font-bold text-garden">A1 · London</p>
            <h2 className="font-display text-4xl">
              <Ru>Привет, Лондон!</Ru>
            </h2>
            <p>Hello, London!</p>
            <Illustration src={images.london} a11y="Murzik and Tom arrive in London with their suitcases." />
            <p>Paris is your first city, not the whole of A1. London lessons are the next chapter.</p>
            <Button variant="ghost" onClick={() => onLesson(parisLessons[0]!.id)}>
              Review Paris
            </Button>
          </>
        ) : next ? (
          <>
            <p className="text-base font-bold text-garden">A1 · Paris · Lesson {next.number} of 7</p>
            <h2 className="font-display text-4xl">{next.title}</h2>
            <p>About {next.minutes} minutes with Murzik and Tom.</p>
            <Button onClick={() => onLesson(next.id)}>
              {draft?.lessonId === next.id ? "Continue lesson" : parisCount === 0 ? "Start lesson 1" : "New lesson"}
            </Button>
          </>
        ) : null}
      </Card>
      <Card className="flex flex-col gap-4">
        <h2 className="font-display text-2xl">Your progress</h2>
        <Meter label="Paris lessons" value={parisCount} max={LESSONS_PER_CITY} />
        <Meter label="A1 cities begun" value={done ? 1 : 0} max={levels[0]!.cities.length} />
        <Meter label="Course lessons" value={parisCount} max={allPlannedLessons} />
        <p className="text-muted">
          Phrases learned: <span className="font-bold text-ink tabular-nums">{words}</span>. A1 is not finished when
          Paris is.
        </p>
      </Card>
      <section className="flex flex-col gap-3">
        <h2 className="font-display text-2xl">Paris</h2>
        {parisLessons.map((lesson) => (
          <LessonRow
            key={lesson.id}
            lesson={lesson}
            state={completed.includes(lesson.id) ? "done" : next?.id === lesson.id ? "now" : "locked"}
            onOpen={() => onLesson(lesson.id)}
          />
        ))}
      </section>
      <Card className="flex flex-col gap-4">
        <h2 className="font-display text-2xl">Murzik’s apartment</h2>
        <Illustration
          src={rewards.length ? images.rewardBowl : images.apartment}
          a11y={
            rewards.length
              ? `The apartment now has ${rewards.map((item) => item.itemName).join(", ")}.`
              : "The apartment is still sparse."
          }
          ratio="aspect-[4/3]"
        />
        {rewards.length ? (
          <ul className="grid grid-cols-2 gap-3">
            {rewards.map((item) => (
              <li key={item.itemId} className="overflow-hidden rounded-2xl border border-line bg-paper">
                <img src={item.image} alt="" className="aspect-square w-full object-cover" />
                <p className="px-3 py-2 font-bold">{item.itemName}</p>
                <p className="px-3 pb-3" lang="ru">
                  <Ru>{item.itemNameRu}</Ru>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nothing here yet. The first lesson brings a bowl home.</p>
        )}
        <Button variant="ghost" onClick={onApartment}>
          Open the apartment
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
        <Button
          variant="quiet"
          onClick={() => {
            if (window.confirm("Start the story again? This clears lessons and the apartment on this device.")) reset();
          }}
        >
          Reset progress
        </Button>
      </div>
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
  const done = parisComplete(completed);
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 px-5 py-6">
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        Back
      </button>
      <h1 className="font-display text-4xl">The journey</h1>
      <p>Each city is one block of 7 lessons. Finishing a city does not finish the level.</p>
      {levels.map((level) => (
        <details key={level.id} open={level.id === "A1"} className="rounded-3xl border border-line bg-card p-4">
          <summary className="min-h-12 text-xl font-bold">
            {level.title} · {level.subtitle}
          </summary>
          <ul className="mt-3 flex flex-col gap-2">
            {level.cities.map((city, index) => {
              const ready = city.lessons.length > 0;
              const complete = ready && city.lessons.every((lesson) => completed.includes(lesson.id));
              return (
                <li key={city.id} className="flex items-baseline justify-between gap-3 rounded-2xl bg-paper px-3 py-3">
                  <span>
                    <span className="font-bold">{city.name}</span>{" "}
                    <span lang="ru" className="text-muted">
                      {city.nameRu}
                    </span>
                  </span>
                  <span className="text-muted">
                    {complete ? "Done" : ready ? "Now" : index === 1 && level.id === "A1" && done ? "Arrived" : "Later"}
                  </span>
                </li>
              );
            })}
          </ul>
        </details>
      ))}
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
            <img src={item.image} alt="" className="mb-3 aspect-square w-full rounded-2xl object-cover" />
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

export function Apartment({ onBack }: { onBack: () => void }) {
  const completed = useProgress((state) => state.completedLessonIds);
  const rewards = earnedRewards(completed);
  const description =
    rewards.length === 0
      ? "Murzik's apartment is still sparse."
      : `Murzik's apartment now has ${rewards.map((item) => `${item.itemName}, ${item.itemNameRu}`).join("; ")}.`;
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 px-5 py-6">
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        Back
      </button>
      <h1 className="font-display text-4xl">Murzik’s apartment</h1>
      <Illustration src={rewards.length ? images.rewardBowl : images.apartment} a11y={description} />
      <p className="sr-only">{description}</p>
      {rewards.length === 0 ? <p>The bowl from lesson 1 will be the first thing that stays.</p> : null}
      <ul className="grid grid-cols-2 gap-3">
        {rewards.map((item) => (
          <li key={item.itemId} className="pop overflow-hidden rounded-3xl border border-line bg-card">
            <img src={item.image} alt="" className="aspect-square w-full object-cover" />
            <p className="px-3 pt-3 font-bold">{item.itemName}</p>
            <p className="px-3 pb-3 text-lg" lang="ru">
              <Ru>{item.itemNameRu}</Ru>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function RewardScreen({ lesson, onContinue }: { lesson: Lesson; onContinue: () => void }) {
  const completeLesson = useProgress((state) => state.completeLesson);
  const completed = useProgress((state) => state.completedLessonIds);
  const rewards = earnedRewards(completed.includes(lesson.id) ? completed : [...completed, lesson.id]);
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
      <p className="text-muted">Still home: {rewards.map((item) => item.itemName).join(", ")}.</p>
      <h2 className="font-display text-3xl">Lesson Complete!</h2>
      <Button onClick={onContinue}>Continue</Button>
    </main>
  );
}

const finaleBeats = [
  {
    image: images.rewardBowl,
    a11y: "Murzik walks through the Paris apartment he has been filling, lesson by lesson.",
    lines: [{ en: "Murzik walks through his Paris home. Tom joins him." }],
  },
  {
    image: images.greet,
    a11y: "Murzik jumps happily and Tom celebrates with him.",
    lines: [
      { ru: "Париж завершён!", en: "Paris complete!" },
      { en: "7 / 7 lessons" },
      { ru: "Ты закончил первый город!", en: "You completed your first city!" },
      { en: "A1 — Block 1 of A1 complete. A1 itself is not finished." },
    ],
  },
  {
    image: images.apartment,
    a11y: "Murzik looks around the apartment, picks up a suitcase, and waves goodbye.",
    lines: [{ ru: "До свидания, Париж!", en: "Goodbye, Paris!" }],
  },
  {
    image: images.airport,
    a11y: "Murzik and Tom walk through the Paris airport with suitcases.",
    lines: [
      {
        ru: "До свидания, Париж! Время отправляться дальше!",
        en: "Goodbye, Paris! It’s time for my next adventure!",
      },
      { ru: "Следующая остановка: Лондон!", en: "Next stop: London!" },
    ],
  },
  {
    image: images.flight,
    a11y: "A small plane flies above the clouds from Paris toward London.",
    lines: [{ ru: "Париж → Лондон", en: "Paris → London" }],
  },
  {
    image: images.london,
    a11y: "Murzik and Tom arrive in London and look around with excitement.",
    lines: [
      { ru: "Привет, Лондон!", en: "Hello, London!" },
      {
        ru: "Новый город. Новые слова. Новые приключения.",
        en: "A new city. New words. New adventures.",
      },
    ],
  },
];

export function Finale({ onDone }: { onDone: () => void }) {
  const setCeremony = useProgress((state) => state.setCeremonySeen);
  const rewards = earnedRewards(useProgress((state) => state.completedLessonIds));
  const [index, setIndex] = useState(0);
  const beat = finaleBeats[index] ?? finaleBeats[0]!;
  const last = index === finaleBeats.length - 1;
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 px-5 py-6">
      <p className="text-base font-bold text-garden">
        {index + 1} / {finaleBeats.length}
      </p>
      <Illustration src={beat.image} a11y={beat.a11y} />
      <div className="flex flex-col gap-3">
        {index === 0 ? <p>{rewards.map((item) => item.itemName).join(" · ")}</p> : null}
        {beat.lines.map((line) => (
          <div key={line.en}>
            {"ru" in line && line.ru ? (
              <h2 className="text-3xl">
                <Ru>{line.ru}</Ru>
              </h2>
            ) : null}
            <p className="text-xl">{line.en}</p>
          </div>
        ))}
      </div>
      {last ? (
        <Card>
          <p className="font-bold">A1</p>
          <p>Paris ✓</p>
          <p>London →</p>
          <p>1 city completed</p>
          <p className="mt-2">Continue your Russian journey.</p>
        </Card>
      ) : null}
      <Button
        onClick={() => {
          if (last) {
            setCeremony();
            onDone();
            return;
          }
          setIndex(index + 1);
        }}
      >
        Continue
      </Button>
    </main>
  );
}
