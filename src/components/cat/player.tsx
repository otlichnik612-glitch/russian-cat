import { useEffect, useId, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { cityName } from "@/lib/course/curriculum";
import { downloadFlashcards, downloadLessonDoc } from "@/lib/course/downloads";
import { speakers } from "@/lib/course/speakers";
import { useProgress } from "@/lib/course/progress";
import { useSpeech } from "@/lib/course/speech";
import type { Activity, Lesson, Skill } from "@/lib/course/types";
import { ActivityCard } from "./activities";
import { Button, Picture, PlayButton, Ru } from "./ui";

type Frame =
  | { type: "goals" }
  | { type: "vocab" }
  | { type: "letters" }
  | { type: "dialogue" }
  | { type: "grammar" }
  | { type: "single"; kicker: string; title: string; items: Activity[]; listenFirst?: boolean }
  | { type: "stack"; kicker: string; title: string; intro?: string; items: Activity[] };

const skillLabels: Record<Skill, string> = {
  words: "Words",
  listening: "Listening",
  grammar: "Grammar",
  letters: "Letters",
  speaking: "Speaking",
  review: "Review · earlier lessons",
};

const numberWords = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

function framesOf(lesson: Lesson): Frame[] {
  const frames: Frame[] = [{ type: "goals" }, { type: "vocab" }];
  if (lesson.letters?.length) frames.push({ type: "letters" });
  frames.push(
    {
      type: "single",
      kicker: "Listen first",
      title: "Listen to the dialogue",
      items: [lesson.dialogue.gist],
      listenFirst: true,
    },
    { type: "dialogue" },
    { type: "grammar" },
    { type: "single", kicker: "Practice", title: "Your turn", items: lesson.tasks },
  );
  return frames;
}

function isAtEnd(frame: Frame, frameIndex: number, total: number, sub: number) {
  if (frameIndex < total - 1) return false;
  if (frame.type === "single") return sub >= frame.items.length - 1;
  return true;
}

export function LessonPlayer({
  lesson,
  onExit,
  onFinish,
}: {
  lesson: Lesson;
  onExit: () => void;
  onFinish: () => void;
}) {
  const draft = useProgress((state) => state.draft);
  const setDraft = useProgress((state) => state.setDraft);
  const start = draft?.lessonId === lesson.id ? draft : null;
  const frames = framesOf(lesson);
  const [frameIndex, setFrameIndex] = useState(start?.frame ?? 0);
  const [sub, setSub] = useState(start?.sub ?? 0);
  const [solved, setSolved] = useState<Record<string, boolean>>({});
  const [slot, setSlot] = useState<{ label: string; disabled: boolean; onPress: () => void } | null>(null);
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState("");
  const titleId = useId();
  const frame = frames[Math.min(frameIndex, frames.length - 1)] ?? frames[0]!;

  useEffect(() => {
    setDraft({ lessonId: lesson.id, frame: frameIndex, sub });
  }, [frameIndex, lesson.id, setDraft, sub]);

  const single = frame.type === "single" ? frame.items[Math.min(sub, frame.items.length - 1)] : null;
  const stackDone = frame.type === "stack" && frame.items.every((item) => solved[item.id]);
  const singleDone = single ? Boolean(solved[single.id]) : false;
  const canContinue = frame.type === "single" ? singleDone : frame.type === "stack" ? stackDone : true;

  const goNext = () => {
    if (frame.type === "single" && sub < frame.items.length - 1) {
      setSub((value) => value + 1);
      return;
    }
    if (frameIndex >= frames.length - 1) {
      onFinish();
      return;
    }
    const prev = frames[frameIndex + 1];
    setSub(0);
    if (prev) setFrameIndex((value) => value + 1);
  };

  const goBack = () => {
    if (frame.type === "single" && sub > 0) {
      setSub((value) => value - 1);
      return;
    }
    if (frameIndex === 0) {
      if (window.confirm("Leave this lesson? Your place is saved.")) onExit();
      return;
    }
    const prev = frames[frameIndex - 1];
    setFrameIndex((value) => value - 1);
    setSub(prev?.type === "single" ? prev.items.length - 1 : 0);
  };

  const download = async (kind: "lesson" | "cards") => {
    setBusy(kind === "lesson" ? "Preparing the lesson document." : "Preparing the flashcards.");
    try {
      if (kind === "lesson") await downloadLessonDoc(lesson);
      else await downloadFlashcards(lesson);
      setBusy(kind === "lesson" ? "Lesson download started." : "Flashcards download started.");
    } catch {
      setBusy("The download did not finish. Try again.");
    }
  };

  const kicker =
    frame.type === "goals"
      ? `${lesson.level} · ${cityName(lesson.cityId)} · Lesson ${lesson.number} of 7`
      : frame.type === "vocab"
        ? "Vocabulary Focus"
        : frame.type === "dialogue"
          ? "Dialogue"
          : frame.type === "grammar"
            ? "Grammar Focus"
            : frame.type === "letters"
              ? "Russian letters"
              : frame.type === "single" && single?.skill && !frame.listenFirst
                ? skillLabels[single.skill]
                : frame.kicker;

  const title =
    frame.type === "goals"
      ? lesson.title
      : frame.type === "vocab"
        ? `${numberWords[lesson.vocab.length] ?? lesson.vocab.length} new phrases`
        : frame.type === "dialogue"
          ? lesson.dialogue.title
          : frame.type === "grammar"
            ? "How it works"
            : frame.type === "letters"
              ? "New letters"
              : frame.title;

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col">
      <header className="sticky top-0 z-20 border-b border-line bg-paper px-5 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full"
            onClick={goBack}
            aria-label="Back"
          >
            <ChevronLeft aria-hidden />
          </button>
          <p className="flex-1 text-base font-bold">Lesson {lesson.number} of 7</p>
          <p className="tabular-nums text-muted">
            {frameIndex + 1} / {frames.length}
          </p>
        </div>
        <div
          className="mt-2 h-2 overflow-hidden rounded-full bg-paper-deep"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={frames.length}
          aria-valuenow={frameIndex + 1}
          aria-label="Lesson progress"
        >
          <div className="h-full bg-terra" style={{ width: `${((frameIndex + 1) / frames.length) * 100}%` }} />
        </div>
        <details className="mt-2">
          <summary className="min-h-12 text-base font-bold text-garden">Downloads</summary>
          <div className="flex flex-col gap-2 pb-2">
            <Button variant="ghost" className="min-h-12 text-base" onClick={() => void download("lesson")}>
              Download the lesson
            </Button>
            <Button variant="ghost" className="min-h-12 text-base" onClick={() => void download("cards")}>
              Download flashcards
            </Button>
          </div>
        </details>
      </header>
      <main id="lesson-main" className="flex flex-1 flex-col gap-5 px-5 py-5 pb-36">
        <p className="text-base font-bold text-garden">{kicker}</p>
        <h1 tabIndex={-1} id={titleId} className="font-display text-4xl outline-none">
          {title}
        </h1>
        {frame.type === "goals" ? <Goals lesson={lesson} /> : null}
        {frame.type === "vocab" ? <Vocab lesson={lesson} /> : null}
        {frame.type === "dialogue" ? <Dialogue lesson={lesson} /> : null}
        {frame.type === "grammar" ? <Grammar lesson={lesson} /> : null}
        {frame.type === "letters" ? <Letters lesson={lesson} /> : null}
        {frame.type === "single" && frame.listenFirst ? <ListenFirst lesson={lesson} /> : null}
        {frame.type === "single" && single ? (
          <div className="rise" key={single.id}>
            {frame.items.length > 1 ? (
              <p className="mb-3 text-muted">
                Exercise {sub + 1} of {frame.items.length}
              </p>
            ) : null}
            <ActivityCard
              activity={single}
              solved={Boolean(solved[single.id])}
              onSolved={() => {
                setSolved((cur) => ({ ...cur, [single.id]: true }));
                setNote("Correct.");
              }}
              onSlot={setSlot}
            />
          </div>
        ) : null}
        {frame.type === "stack" ? (
          <div className="flex flex-col gap-6">
            {frame.intro ? <p>{frame.intro}</p> : null}
            {frame.items.map((item, index) => (
              <article key={item.id} className="rounded-3xl border border-line bg-card p-4">
                <p className="mb-3 text-muted">
                  {index + 1} of {frame.items.length}
                </p>
                <ActivityCard
                  activity={item}
                  solved={Boolean(solved[item.id])}
                  onSolved={() => {
                    setSolved((cur) => ({ ...cur, [item.id]: true }));
                    setNote("Practiced.");
                  }}
                />
              </article>
            ))}
          </div>
        ) : null}
      </main>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper">
        <div className="safe-bottom mx-auto w-full max-w-lg px-5 py-3">
          <p role="status" className="sr-only">
            {note} {busy}
          </p>
          {slot && !canContinue ? (
            <Button disabled={slot.disabled} onClick={slot.onPress}>
              {slot.label}
            </Button>
          ) : (
            <Button disabled={!canContinue} onClick={goNext}>
              {isAtEnd(frame, frameIndex, frames.length, sub) ? "Finish lesson" : "Continue"}
            </Button>
          )}
          {frame.type === "stack" && !stackDone ? (
            <p className="mt-2 text-center text-muted">Say each line, then continue.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Goals({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex flex-col gap-4">
      <p>By the end of this lesson, you should be able to:</p>
      <ul className="flex flex-col gap-2">
        {lesson.goals.map((goal) => (
          <li key={goal} className="rounded-2xl bg-card px-4 py-3">
            {goal}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Vocab({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex flex-col gap-5">
      {lesson.vocabNote ? <p className="rounded-3xl bg-paper-deep p-4">{lesson.vocabNote}</p> : null}
      {lesson.vocab.map((item) => (
        <article key={item.id} className="flex flex-col gap-3 rounded-3xl border border-line bg-card p-4">
          <Picture src={item.image} className="aspect-square w-full rounded-2xl object-cover" />
          <h2 className="text-4xl">
            <Ru>{item.ru}</Ru>
          </h2>
          {item.translit ? (
            <p className="-mt-2 text-lg text-muted" aria-hidden>
              {item.translit}
            </p>
          ) : null}
          <p>{item.en}</p>
          <p className="sr-only">{item.a11y}</p>
          <PlayButton id={item.id} text={item.ru} label={item.audioLabel} />
        </article>
      ))}
    </div>
  );
}

function ListenFirst({ lesson }: { lesson: Lesson }) {
  const { playAll, playing, stop } = useSpeech();
  const allId = `${lesson.id}-first`;
  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-paper-deep p-4">
      <p>Listen without the text first. Then answer the question. You will see the text next.</p>
      <Button
        aria-label={playing === allId ? "Stop the dialogue" : "Play the dialogue"}
        onClick={() =>
          playing === allId ? stop() : playAll(lesson.dialogue.lines.map((line) => ({ id: allId, text: line.ru, voice: line.speaker })))
        }
      >
        {playing === allId ? "Stop" : "Play the dialogue"}
      </Button>
    </div>
  );
}

function Letters({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex flex-col gap-4">
      <p>Russian uses the Cyrillic alphabet. Here are the letters from today's phrases.</p>
      {(lesson.letters ?? []).map((card) => (
        <article key={card.letter} className="flex flex-col gap-2 rounded-3xl border border-line bg-card p-4">
          <p className="text-6xl font-bold" lang="ru">
            {card.letter}
          </p>
          <p className="text-xl">{card.sound}</p>
          {card.trap ? <p className="font-bold text-terra">{card.trap}</p> : null}
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-2xl">
              <Ru>{card.example}</Ru>
            </p>
            <p className="text-muted">{card.exampleEn}</p>
          </div>
          <PlayButton id={`${lesson.id}-letter-${card.letter}`} text={card.example} label={`Play ${card.example}`} />
        </article>
      ))}
    </div>
  );
}

function Dialogue({ lesson }: { lesson: Lesson }) {
  const { playAll, playing, stop } = useSpeech();
  const lines = lesson.dialogue.lines;
  const allId = `${lesson.id}-all`;
  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="ghost"
        aria-label={playing === allId ? "Stop the dialogue" : "Play the entire dialogue"}
        onClick={() => (playing === allId ? stop() : playAll(lines.map((line) => ({ id: allId, text: line.ru, voice: line.speaker }))))}
      >
        {playing === allId ? "Stop" : "Play all"}
      </Button>
      {lesson.dialogue.note ? <p className="text-muted">{lesson.dialogue.note}</p> : null}
      <ol className="flex flex-col gap-3">
        {lines.map((line, index) => {
          const name = speakers[line.speaker].en;
          const ruName = speakers[line.speaker].ru;
          const mine = line.speaker === "murzik";
          return (
            <li key={`${line.ru}-${index}`} className={mine ? "pl-6" : "pr-6"}>
              <div className="rounded-3xl border border-line bg-card p-4">
                <p className="text-base font-bold text-garden">{name}</p>
                <p className="mt-1 text-2xl">
                  <span className="sr-only">{ruName}: </span>
                  <Ru>{line.ru}</Ru>
                </p>
                <p className="mt-1 text-muted">
                  {name}: {line.en}
                </p>
                <div className="mt-3">
                  <PlayButton id={`${lesson.id}-line-${index}`} text={line.ru} label={`Play ${name}: ${line.ru}`} voice={line.speaker} />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Grammar({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex flex-col gap-6">
      {lesson.grammar.map((section) => (
        <section key={section.title} className="flex flex-col gap-3">
          <h2 className="font-display text-3xl">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.examples?.map((example) => (
            <div key={example.ru} className="rounded-3xl bg-card p-4">
              <p className="text-2xl">
                <Ru>{example.ru}</Ru>
              </p>
              <p className="text-muted">{example.en}</p>
              <div className="mt-3">
                <PlayButton id={`${lesson.id}-${example.ru}`} text={example.ru} label={`Play ${example.ru}`} />
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
