import { useEffect, useId, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { cityName, course, speakerName, ui, type MixedWordTexts } from "@/lib/course/active";
import { useProgress } from "@/lib/course/progress";
import { useSpeech } from "@/lib/course/speech";
import type { Activity, Lesson, Skill, VocabItem } from "@/lib/course/types";
import { seededShuffle } from "@/lib/course/make";
import { ActivityCard } from "./activities";
import { Button, Picture, PlayButton, Ru } from "./ui";

type Frame =
  | { type: "goals" }
  | { type: "word"; item: VocabItem; index: number; total: number; checks: Activity[] }
  | { type: "letters" }
  | { type: "dialogue" }
  | { type: "grammar" }
  | { type: "single"; kicker: string; title: string; items: Activity[]; listenFirst?: boolean }
  | { type: "stack"; kicker: string; title: string; intro?: string; items: Activity[] };

const skillLabel = (skill: Skill) => ui.skill[skill];

/**
 * New words come in small groups. Each word: see and hear it (card), recognise it by ear
 * (target → own language), then recall it (own language → target). After every two words,
 * a short mixed check of the words met so far (up to four).
 */
function wordFrames(lesson: Lesson): Frame[] {
  if (course.mixedWords) return mixedWordFrames(lesson, course.mixedWords);
  const vocab = lesson.vocab;
  const frames: Frame[] = [];
  const others = (item: VocabItem) => vocab.filter((other) => other.id !== item.id);
  vocab.forEach((item, index) => {
    const pool = seededShuffle(others(item), `${item.id}-pool`);
    const distract = pool.slice(0, 2);
    const checks: Activity[] = [];
    if (distract.length >= 1) {
      checks.push({
        kind: "choice",
        id: `${item.id}-hear`,
        prompt: ui.whatDidYouHear,
        audio: item.ru,
        skill: "listening",
        options: seededShuffle([item, ...distract], `${item.id}-hear`).map((o) => ({ label: o.en, correct: o.id === item.id })),
      });
      checks.push({
        kind: "choice",
        id: `${item.id}-say`,
        prompt: ui.howDoYouSay(item.en),
        skill: "words",
        options: seededShuffle([item, ...distract], `${item.id}-say`).map((o) => ({ label: o.ru, correct: o.id === item.id })),
      });
    }
    frames.push({ type: "word", item, index, total: vocab.length, checks });
    const met = index + 1;
    const groupEnd = met % 2 === 0 || met === vocab.length;
    if (groupEnd && met >= 2) {
      const recent = vocab.slice(Math.max(0, met - 4), met);
      frames.push({
        type: "single",
        kicker: ui.vocabFocus,
        title: ui.mixedCheck,
        items: [
          {
            kind: "match",
            id: `${lesson.id}-mix-${met}`,
            prompt: ui.matchPairs,
            skill: "words",
            pairs: recent.map((w) => ({ left: w.ru, right: w.en })),
          },
        ],
      });
    }
  });
  return frames;
}

/** A number from 0 to 1, always the same for the same seed. */
function seeded(seed: string): number {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  h ^= h << 13;
  h ^= h >>> 17;
  h ^= h << 5;
  return (h >>> 0) / 4294967296;
}

type WordTask = "hear" | "say" | "picture" | "truefalse" | "build" | "fill";

/** A plain word of a phrase (no punctuation), usable as a gap or as a wrong option. */
const plainWord = (token: string) => /^[\p{L}'-]+$/u.test(token) && token.length >= 2;

/** One task of the given kind about one phrase, or null when that kind does not suit the phrase. */
function wordTask(kind: WordTask, item: VocabItem, vocab: VocabItem[], texts: MixedWordTexts, tag: string): Activity | null {
  const id = `${item.id}-mx-${kind}${tag}`;
  const others = seededShuffle(
    vocab.filter((other) => other.id !== item.id),
    id,
  );
  const distract = others.slice(0, 2);
  const tokens = item.ru.split(/\s+/).filter(Boolean);
  const alternatives = item.ru.includes("/");
  switch (kind) {
    case "hear":
      if (!distract.length) return null;
      return {
        kind: "choice",
        id,
        prompt: ui.whatDidYouHear,
        audio: item.ru,
        skill: "listening",
        options: seededShuffle([item, ...distract], id).map((o) => ({ label: o.en, correct: o.id === item.id })),
      };
    case "say":
      if (!distract.length) return null;
      return {
        kind: "choice",
        id,
        prompt: ui.howDoYouSay(item.en),
        skill: "words",
        options: seededShuffle([item, ...distract], id).map((o) => ({ label: o.ru, correct: o.id === item.id })),
      };
    case "picture":
      if (!distract.length || !item.image) return null;
      return {
        kind: "choice",
        id,
        prompt: texts.picture,
        image: item.image,
        imageA11y: item.a11y,
        skill: "words",
        options: seededShuffle([item, ...distract], id).map((o) => ({ label: o.ru, correct: o.id === item.id })),
      };
    case "truefalse": {
      const wrong = others[0];
      const right = !wrong || seeded(id) < 0.5;
      return {
        kind: "truefalse",
        id,
        prompt: texts.trueFalse,
        statement: texts.statement(item.ru, right ? item.en : (wrong?.en ?? item.en)),
        correct: right,
        skill: "words",
      };
    }
    case "build":
      if (alternatives || tokens.length < 3) return null;
      return { kind: "build", id, prompt: texts.build(item.en), words: tokens, skill: "grammar", help: texts.buildHelp };
    case "fill": {
      if (alternatives || tokens.length < 2) return null;
      const gaps = tokens.map((token, index) => ({ token, index })).filter(({ token }) => plainWord(token));
      const gap = gaps[Math.floor(seeded(id) * gaps.length)];
      if (!gap) return null;
      const lower = gap.token.toLowerCase();
      const pool = [
        ...new Set(
          others.flatMap((other) => other.ru.split(/\s+/)).filter((token) => plainWord(token) && token.toLowerCase() !== lower),
        ),
      ];
      const wrongs = seededShuffle(pool, id).slice(0, 2);
      if (wrongs.length < 2) return null;
      return {
        kind: "fill",
        id,
        prompt: texts.fill(item.en),
        before: tokens.slice(0, gap.index).join(" "),
        after: tokens.slice(gap.index + 1).join(" "),
        answer: gap.token,
        options: seededShuffle([gap.token, ...wrongs], id),
        skill: "grammar",
      };
    }
  }
}

/**
 * Up to `count` tasks about one phrase, each of a different kind, in a mixed order.
 * `skip`: kinds this phrase already had. `screen`: kinds already on this screen (used last, so a screen stays varied).
 */
function tasksFor(
  item: VocabItem,
  vocab: VocabItem[],
  texts: MixedWordTexts,
  count: number,
  tag: string,
  skip: WordTask[] = [],
  screen: WordTask[] = [],
) {
  const shuffled = seededShuffle<WordTask>(["hear", "say", "picture", "truefalse", "build", "fill"], `${item.id}${tag}-kinds`);
  const kinds = [...shuffled.filter((kind) => !screen.includes(kind)), ...shuffled.filter((kind) => screen.includes(kind))];
  const out: { kind: WordTask; task: Activity }[] = [];
  for (const kind of kinds) {
    if (out.length >= count) break;
    if (skip.includes(kind)) continue;
    const task = wordTask(kind, item, vocab, texts, tag);
    if (task) out.push({ kind, task });
  }
  return out;
}

/**
 * Mixed word practice (courses with `mixedWords`): phrases come in groups of two or three.
 * After each group comes one practice screen: one or two tasks of different kinds per new phrase,
 * plus a task about a phrase from an earlier group, all in a mixed order. The lesson ends the words
 * with a mixed round over all its phrases. The order is fixed per lesson, so a lesson can be resumed.
 */
function mixedWordFrames(lesson: Lesson, texts: MixedWordTexts): Frame[] {
  const vocab = lesson.vocab;
  const frames: Frame[] = [];
  const sizes: number[] = [];
  let left = vocab.length;
  while (left > 0) {
    const size = left <= 3 ? left : left === 4 ? 2 : seeded(`${lesson.id}-group-${sizes.length}`) < 0.5 ? 2 : 3;
    sizes.push(size);
    left -= size;
  }
  const used = new Map<string, WordTask[]>();
  let start = 0;
  sizes.forEach((size, group) => {
    const batch = vocab.slice(start, start + size);
    const earlier = vocab.slice(0, start);
    batch.forEach((item, offset) =>
      frames.push({ type: "word", item, index: start + offset, total: vocab.length, checks: [] }),
    );
    const items: Activity[] = [];
    const onScreen: WordTask[] = [];
    for (const item of batch) {
      const count = seeded(`${item.id}-count`) < 0.5 ? 1 : 2;
      const picked = tasksFor(item, vocab, texts, count, "", [], onScreen);
      used.set(item.id, picked.map((p) => p.kind));
      onScreen.push(...picked.map((p) => p.kind));
      items.push(...picked.map((p) => p.task));
    }
    if (earlier.length) {
      const back = seededShuffle(earlier, `${lesson.id}-back-${group}`)[0]!;
      items.push(...tasksFor(back, vocab, texts, 1, `-late${group}`, used.get(back.id), onScreen).map((p) => p.task));
    }
    frames.push({
      type: "single",
      kicker: ui.vocabFocus,
      title: ui.mixedCheck,
      items: seededShuffle(items, `${lesson.id}-mix-${group}`),
    });
    start += size;
  });
  if (vocab.length >= 3) {
    const pairs = seededShuffle(vocab, `${lesson.id}-final`).slice(0, 4);
    const finale: Activity[] = [
      {
        kind: "match",
        id: `${lesson.id}-mx-final`,
        prompt: ui.matchPairs,
        skill: "words",
        pairs: pairs.map((w) => ({ left: w.ru, right: w.en })),
      },
    ];
    const onScreen: WordTask[] = [];
    for (const item of seededShuffle(vocab, `${lesson.id}-final-tasks`).slice(0, 2)) {
      const picked = tasksFor(item, vocab, texts, 1, "-final", used.get(item.id), onScreen);
      onScreen.push(...picked.map((p) => p.kind));
      finale.push(...picked.map((p) => p.task));
    }
    frames.push({ type: "single", kicker: ui.vocabFocus, title: ui.mixedCheck, items: seededShuffle(finale, `${lesson.id}-finale`) });
  }
  return frames;
}

function framesOf(lesson: Lesson): Frame[] {
  const frames: Frame[] = [{ type: "goals" }, ...wordFrames(lesson)];
  if (lesson.letters?.length) frames.push({ type: "letters" });
  frames.push(
    {
      type: "single",
      kicker: ui.listenFirstKicker,
      title: ui.listenFirstTitle,
      items: [lesson.dialogue.gist],
      listenFirst: true,
    },
    { type: "dialogue" },
    { type: "grammar" },
    { type: "single", kicker: ui.practice, title: ui.yourTurn, items: lesson.tasks },
  );
  return frames;
}

/** How many screens a frame has: a word frame is its card plus its checks. */
function stepsOf(frame: Frame | undefined) {
  if (!frame) return 1;
  if (frame.type === "single") return frame.items.length;
  if (frame.type === "word") return 1 + frame.checks.length;
  return 1;
}

function isAtEnd(frame: Frame, frameIndex: number, total: number, sub: number) {
  if (frameIndex < total - 1) return false;
  return sub >= stepsOf(frame) - 1;
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
  // "Correct." is only announced once: it must not stay on the screen as an extra element next to the main button.
  useEffect(() => {
    if (!note) return;
    const timer = setTimeout(() => setNote(""), 1500);
    return () => clearTimeout(timer);
  }, [note]);
  const titleId = useId();
  const frame = frames[Math.min(frameIndex, frames.length - 1)] ?? frames[0]!;

  useEffect(() => {
    setDraft({ lessonId: lesson.id, frame: frameIndex, sub });
  }, [frameIndex, lesson.id, setDraft, sub]);

  const single =
    frame.type === "single"
      ? frame.items[Math.min(sub, frame.items.length - 1)]
      : frame.type === "word" && sub > 0
        ? (frame.checks[sub - 1] ?? null)
        : null;
  const stackDone = frame.type === "stack" && frame.items.every((item) => solved[item.id]);
  const singleDone = single ? Boolean(solved[single.id]) : false;
  const canContinue = single ? singleDone : frame.type === "stack" ? stackDone : true;

  const goNext = () => {
    if (sub < stepsOf(frame) - 1) {
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
    if (sub > 0) {
      setSub((value) => value - 1);
      return;
    }
    if (frameIndex === 0) {
      if (window.confirm(ui.leaveConfirm)) onExit();
      return;
    }
    const prev = frames[frameIndex - 1];
    setFrameIndex((value) => value - 1);
    setSub(stepsOf(prev) - 1);
  };

  const kicker =
    frame.type === "goals"
      ? ui.lessonOf(lesson.level, cityName(lesson.cityId), lesson.number, 7)
      : frame.type === "word"
        ? ui.vocabFocus
        : frame.type === "dialogue"
          ? ui.dialogue
          : frame.type === "grammar"
            ? ui.grammarFocus
            : frame.type === "letters"
              ? lesson.level === "A1"
                ? ui.letters
                : ui.sounds
              : frame.type === "single" && single?.skill && !frame.listenFirst
                ? skillLabel(single.skill)
                : frame.kicker;

  const title =
    frame.type === "goals"
      ? lesson.title
      : frame.type === "word"
        ? ui.wordOf(frame.index + 1, frame.total)
        : frame.type === "dialogue"
          ? lesson.dialogue.title
          : frame.type === "grammar"
            ? ui.howItWorks
            : frame.type === "letters"
              ? lesson.level === "A1"
                ? ui.newLetters
                : ui.soundsTitle
              : frame.title;

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col">
      <header className="sticky top-0 z-20 border-b border-line bg-paper px-5 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full"
            onClick={goBack}
            aria-label={ui.back}
          >
            <ChevronLeft aria-hidden />
          </button>
          <p className="flex-1 text-base font-bold">{ui.lessonOfShort(lesson.number)}</p>
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
          aria-label={ui.lessonProgress}
        >
          <div className="h-full bg-terra" style={{ width: `${((frameIndex + 1) / frames.length) * 100}%` }} />
        </div>
      </header>
      <main id="lesson-main" className="flex flex-1 flex-col gap-5 px-5 py-5 pb-36">
        <p className="text-base font-bold text-garden">{kicker}</p>
        <h1 tabIndex={-1} id={titleId} className="font-display text-4xl outline-none">
          {title}
        </h1>
        {frame.type === "goals" ? <Goals lesson={lesson} /> : null}
        {frame.type === "word" && sub === 0 ? (
          <WordCard item={frame.item} note={frame.index === 0 ? lesson.vocabNote : undefined} />
        ) : null}
        {frame.type === "dialogue" ? <Dialogue lesson={lesson} /> : null}
        {frame.type === "grammar" ? <Grammar lesson={lesson} /> : null}
        {frame.type === "letters" ? <Letters lesson={lesson} /> : null}
        {frame.type === "single" && frame.listenFirst ? <ListenFirst lesson={lesson} /> : null}
        {single ? (
          <div className="rise" key={single.id}>
            {frame.type === "single" && frame.items.length > 1 ? (
              <p className="mb-3 text-muted">
                {ui.exerciseOf(sub + 1, frame.items.length)}
              </p>
            ) : null}
            <ActivityCard
              activity={single}
              solved={Boolean(solved[single.id])}
              onSolved={() => {
                setSolved((cur) => ({ ...cur, [single.id]: true }));
                setNote(ui.correctNote);
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
                  {ui.nOf(index + 1, frame.items.length)}
                </p>
                <ActivityCard
                  activity={item}
                  solved={Boolean(solved[item.id])}
                  onSolved={() => {
                    setSolved((cur) => ({ ...cur, [item.id]: true }));
                    setNote(ui.practicedNote);
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
            {note}
          </p>
          {slot && !canContinue ? (
            <Button disabled={slot.disabled} onClick={slot.onPress}>
              {slot.label}
            </Button>
          ) : (
            <Button disabled={!canContinue} onClick={goNext}>
              {isAtEnd(frame, frameIndex, frames.length, sub) ? ui.finishLesson : ui.continue}
            </Button>
          )}
          {frame.type === "stack" && !stackDone ? (
            <p className="mt-2 text-center text-muted">{ui.sayEachLine}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Goals({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex flex-col gap-4">
      <p>{ui.goalsIntro}</p>
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

/** One new word: picture, text, translation and its sound. The checks for it follow on the next screens. */
function WordCard({ item, note }: { item: VocabItem; note?: string }) {
  return (
    <div className="flex flex-col gap-5">
      {note ? <p className="rounded-3xl bg-paper-deep p-4">{note}</p> : null}
      {[item].map((item) => (
        <article key={item.id} className="flex flex-col gap-3 rounded-3xl border border-line bg-card p-4">
          <Picture src={item.image} className="aspect-square w-full rounded-2xl object-cover" />
          <h2 className="text-4xl">
            <Ru>{item.ru}</Ru>
          </h2>
          {item.translit && !course.translit ? (
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
      <p>{ui.listenFirstText}</p>
      <Button
        aria-label={playing === allId ? ui.stopDialogue : ui.playDialogue}
        onClick={() =>
          playing === allId ? stop() : playAll(lesson.dialogue.lines.map((line) => ({ id: allId, text: line.ru, voice: line.speaker })))
        }
      >
        {playing === allId ? ui.stop : ui.playDialogue}
      </Button>
    </div>
  );
}

function Letters({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex flex-col gap-4">
      <p>{lesson.level === "A1" ? ui.lettersIntro : ui.soundsIntro}</p>
      {(lesson.letters ?? []).map((card) => (
        <article key={card.letter} className="flex flex-col gap-2 rounded-3xl border border-line bg-card p-4">
          <p className={lesson.level === "A1" ? "text-6xl font-bold" : "text-4xl font-bold"}>
            <Ru>{card.letter}</Ru>
          </p>
          <p className="text-xl">{card.sound}</p>
          {card.trap ? <p className="font-bold text-terra">{card.trap}</p> : null}
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-2xl">
              <Ru>{card.example}</Ru>
            </p>
            <p className="text-muted">{card.exampleEn}</p>
          </div>
          <PlayButton id={`${lesson.id}-letter-${card.letter}`} text={card.example} label={`${ui.play} ${card.example}`} />
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
        aria-label={playing === allId ? ui.stopDialogue : ui.playEntireDialogue}
        onClick={() => (playing === allId ? stop() : playAll(lines.map((line) => ({ id: allId, text: line.ru, voice: line.speaker }))))}
      >
        {playing === allId ? ui.stop : ui.playAll}
      </Button>
      {lesson.dialogue.note ? <p className="text-muted">{lesson.dialogue.note}</p> : null}
      <ol className="flex flex-col gap-3">
        {lines.map((line, index) => {
          const { name, target: ruName } = speakerName(line.speaker);
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
                  <PlayButton id={`${lesson.id}-line-${index}`} text={line.ru} label={`${ui.play} ${name}: ${line.ru}`} voice={line.speaker} />
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
                <PlayButton id={`${lesson.id}-${example.ru}`} text={example.ru} label={`${ui.play} ${example.ru}`} />
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
