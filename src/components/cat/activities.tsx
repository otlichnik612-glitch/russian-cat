import { useEffect, useMemo, useRef, useState } from "react";
import { course, isTarget, ui } from "@/lib/course/active";
import { seededShuffle } from "@/lib/course/make";
import type { Activity } from "@/lib/course/types";
import { Button, Illustration, PlayButton, Ru } from "./ui";

type Status = "idle" | "bad" | "good";

export function ActivityCard({
  activity,
  solved,
  onSolved,
  onSlot,
}: {
  activity: Activity;
  solved: boolean;
  onSolved: () => void;
  onSlot?: (slot: { label: string; disabled: boolean; onPress: () => void } | null) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      {activity.image ? (
        <Illustration src={activity.image} a11y={activity.imageA11y} ratio="aspect-square" />
      ) : null}
      <h3 className="font-display text-2xl" lang={activity.promptLang ? course.htmlLang : undefined}>
        {activity.promptLang === "ru" ? <Ru>{activity.prompt}</Ru> : activity.prompt}
      </h3>
      {activity.help ? <p className="text-muted">{activity.help}</p> : null}
      {activity.audio ? (
        <div className="flex flex-col gap-2 rounded-3xl bg-paper-deep p-4">
          <PlayButton id={`${activity.id}-audio`} text={activity.audio} label={ui.playTarget} />
          {solved ? (
            <p className="text-xl">
              <span className="text-muted">{ui.youHeard}</span>
              <Ru>{activity.audio}</Ru>
            </p>
          ) : null}
        </div>
      ) : null}
      <Body activity={activity} solved={solved} onSolved={onSolved} onSlot={onSlot} />
    </div>
  );
}

function Body({
  activity,
  solved,
  onSolved,
  onSlot,
}: {
  activity: Activity;
  solved: boolean;
  onSolved: () => void;
  onSlot?: (slot: { label: string; disabled: boolean; onPress: () => void } | null) => void;
}) {
  if (activity.kind === "speak") return <Speak activity={activity} solved={solved} onSolved={onSolved} />;
  return <Graded activity={activity} solved={solved} onSolved={onSolved} onSlot={onSlot} />;
}

function Speak({
  activity,
  solved,
  onSolved,
}: {
  activity: Extract<Activity, { kind: "speak" }>;
  solved: boolean;
  onSolved: () => void;
}) {
  const [open, setOpen] = useState(solved);
  return (
    <div className="flex flex-col gap-3">
      <PlayButton id={`${activity.id}-q`} text={activity.prompt} label={`${ui.play} ${activity.prompt}`} />
      <Button variant="ghost" onClick={() => setOpen(true)} aria-expanded={open}>
        {open ? ui.modelAnswer : ui.showModelAnswer}
      </Button>
      {open ? (
        <div className="rounded-3xl border border-line bg-paper-deep p-4">
          <p className="text-2xl">
            <Ru>{activity.model}</Ru>
          </p>
          <p className="mt-1 text-muted">{activity.modelEn}</p>
          <div className="mt-3">
            <PlayButton id={`${activity.id}-m`} text={activity.model} label={`${ui.play} ${activity.model}`} />
          </div>
        </div>
      ) : null}
      <Button
        variant={solved ? "ghost" : "primary"}
        onClick={() => {
          setOpen(true);
          onSolved();
        }}
        aria-pressed={solved}
      >
        {solved ? ui.practiced : ui.saidAloud}
      </Button>
    </div>
  );
}

function Graded({
  activity,
  solved,
  onSolved,
  onSlot,
}: {
  activity: Exclude<Activity, { kind: "speak" }>;
  solved: boolean;
  onSolved: () => void;
  onSlot?: (slot: { label: string; disabled: boolean; onPress: () => void } | null) => void;
}) {
  const [status, setStatus] = useState<Status>(solved ? "good" : "idle");
  const [picked, setPicked] = useState<number | null>(null);
  const [multi, setMulti] = useState<number[]>([]);
  const [truth, setTruth] = useState<boolean | null>(null);
  const [word, setWord] = useState<string | null>(null);
  const [lines, setLines] = useState(() =>
    activity.kind === "order" ? seededShuffle(activity.items, activity.id) : [],
  );
  const [built, setBuilt] = useState(() =>
    activity.kind === "build" ? seededShuffle(activity.words, activity.id) : [],
  );
  const [pairs, setPairs] = useState<Record<number, string>>({});
  const tiles = useMemo(
    () => (activity.kind === "spell" ? seededShuffle([...Array.from(activity.word), ...(activity.extra ?? [])], activity.id) : []),
    [activity],
  );
  const [spelled, setSpelled] = useState<number[]>(() =>
    activity.kind === "spell" && solved ? Array.from(activity.word).map((ch) => tiles.indexOf(ch)) : [],
  );
  const [blanks, setBlanks] = useState<Record<number, string>>({});
  const rights = useMemo(
    () => (activity.kind === "match" ? seededShuffle(activity.pairs.map((pair) => pair.right), activity.id) : []),
    [activity],
  );
  const checkRef = useRef<() => void>(() => {});
  const pressRef = useRef<() => void>(() => {});

  const ready = (() => {
    switch (activity.kind) {
      case "choice":
        return picked !== null;
      case "multi":
        return multi.length > 0;
      case "truefalse":
        return truth !== null;
      case "fill":
        return word !== null;
      case "order":
      case "build":
        return true;
      case "spell":
        return spelled.length === Array.from(activity.word).length;
      case "match":
        return activity.pairs.every((_, index) => pairs[index]);
      case "script":
        return activity.lines.every((line, index) => "text" in line || blanks[index]);
      default:
        return false;
    }
  })();

  checkRef.current = () => {
    const ok = isCorrect(activity, {
      picked,
      multi,
      truth,
      word,
      lines,
      built,
      pairs,
      blanks,
      spelled: spelled.map((index) => tiles[index] ?? "").join(""),
    });
    if (ok) {
      setStatus("good");
      onSolved();
    } else {
      setStatus("bad");
    }
  };
  pressRef.current = () => {
    if (status === "bad") {
      setStatus("idle");
      return;
    }
    checkRef.current();
  };

  useEffect(() => {
    if (!onSlot) return;
    if (status === "good" || solved) {
      onSlot(null);
      return;
    }
    onSlot({
      label: status === "bad" ? ui.tryAgain : ui.check,
      disabled: status === "bad" ? false : !ready,
      onPress: () => pressRef.current(),
    });
    return () => onSlot(null);
  }, [activity.kind, onSlot, ready, solved, status]);

  return (
    <div className="flex flex-col gap-3">
      {activity.kind === "choice" ? (
        <OptionList
          labels={activity.options.map((option) => option.label)}
          selected={picked}
          status={status}
          correctIndex={activity.options.findIndex((option) => option.correct)}
          onPick={(index) => {
            setPicked(index);
            if (status === "bad") setStatus("idle");
          }}
          name={activity.id}
          noAudio={Boolean(activity.audio)}
        />
      ) : null}
      {activity.kind === "multi" ? (
        <div className="flex flex-col gap-2" role="group" aria-label={activity.prompt}>
          {activity.options.map((option, index) => {
            const on = multi.includes(index);
            return (
              <ChoiceRow
                key={option.label}
                label={option.label}
                playId={`${activity.id}-${index}`}
                className={optionClass(on, status === "good" && option.correct, status === "good" && on && !option.correct)}
                pressed={on}
                onClick={() => {
                  setMulti((cur) => (cur.includes(index) ? cur.filter((item) => item !== index) : [...cur, index]));
                  if (status === "bad") setStatus("idle");
                }}
              />
            );
          })}
        </div>
      ) : null}
      {activity.kind === "truefalse" ? (
        <div className="flex flex-col gap-3">
          <p className="text-2xl">
            {isTarget(activity.statement) ? <Ru>{activity.statement}</Ru> : activity.statement}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[true, false].map((value) => (
              <button
                key={String(value)}
                type="button"
                aria-pressed={truth === value}
                className={optionClass(truth === value, status === "good" && value === activity.correct, false)}
                onClick={() => {
                  setTruth(value);
                  if (status === "bad") setStatus("idle");
                }}
              >
                {value ? ui.trueLabel : ui.falseLabel}
              </button>
            ))}
          </div>
        </div>
      ) : null}
      {activity.kind === "fill" ? (
        <div className="flex flex-col gap-3">
          <p className="text-2xl">
            <Ru>
              {activity.tight
                ? `${activity.before}${word ?? "_"}${activity.after}`
                : `${activity.before} ${word ?? "______"} ${activity.after}`
                    .replace(/\s+/g, " ")
                    .trim()
                    .replace(/ ([.,!?»])/g, "$1")}
            </Ru>
          </p>
          <div className="flex flex-col gap-2">
            {activity.options.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={word === option}
                className={optionClass(word === option, status === "good" && option === activity.answer, false)}
                onClick={() => {
                  setWord(option);
                  if (status === "bad") setStatus("idle");
                }}
              >
                <Ru>{option}</Ru>
              </button>
            ))}
          </div>
        </div>
      ) : null}
      {activity.kind === "order" ? <Arrange items={lines} setItems={setLines} /> : null}
      {activity.kind === "build" ? <Arrange items={built} setItems={setBuilt} /> : null}
      {activity.kind === "spell" ? (
        <div className="flex flex-col gap-3">
          <p
            className="min-h-16 rounded-2xl border border-line bg-card px-4 py-3 text-4xl tracking-wide"
            lang={course.htmlLang}
            aria-live="polite"
          >
            {spelled.length ? <Ru>{spelled.map((index) => tiles[index]).join("")}</Ru> : <span className="text-muted text-lg">{ui.tapLetters}</span>}
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label={ui.lettersGroup}>
            {tiles.map((tile, index) => {
              const used = spelled.includes(index);
              return (
                <button
                  key={`${tile}-${index}`}
                  type="button"
                  lang={course.htmlLang}
                  disabled={used || status === "good"}
                  aria-label={ui.letterLabel(tile)}
                  className="min-h-14 min-w-14 rounded-2xl border border-line bg-card px-3 text-2xl font-bold disabled:opacity-35"
                  onClick={() => {
                    setSpelled((cur) => [...cur, index]);
                    if (status === "bad") setStatus("idle");
                  }}
                >
                  {tile}
                </button>
              );
            })}
          </div>
          {status !== "good" ? (
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="ghost"
                disabled={!spelled.length}
                onClick={() => {
                  setSpelled((cur) => cur.slice(0, -1));
                  if (status === "bad") setStatus("idle");
                }}
              >
                {ui.undo}
              </Button>
              <Button
                variant="ghost"
                disabled={!spelled.length}
                onClick={() => {
                  setSpelled([]);
                  if (status === "bad") setStatus("idle");
                }}
              >
                {ui.clear}
              </Button>
            </div>
          ) : (
            <PlayButton id={`${activity.id}-word`} text={activity.word} label={`${ui.play} ${activity.word}`} />
          )}
        </div>
      ) : null}
      {activity.kind === "match" ? (
        <div className="flex flex-col gap-4">
          {activity.pairs.map((pair, index) => (
            <label key={pair.left} className="flex flex-col gap-2">
              <span className="text-xl">
                <Ru>{pair.left}</Ru>
              </span>
              <select
                className="min-h-14 rounded-2xl border border-line bg-card px-4 text-lg"
                value={pairs[index] ?? ""}
                onChange={(event) => {
                  setPairs((cur) => ({ ...cur, [index]: event.target.value }));
                  if (status === "bad") setStatus("idle");
                }}
              >
                <option value="">{ui.chooseMeaning}</option>
                {rights.map((right) => (
                  <option key={right} value={right}>
                    {right}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      ) : null}
      {activity.kind === "script" ? (
        <div className="flex flex-col gap-4">
          {activity.lines.map((line, index) =>
            "text" in line ? (
              <p key={index} className="text-xl">
                <span className="text-muted">{line.speaker}: </span>
                <Ru>{line.text}</Ru>
              </p>
            ) : (
              <fieldset key={index} className="flex flex-col gap-2">
                <legend className="text-lg font-bold">{line.speaker}</legend>
                {line.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={blanks[index] === option}
                    className={optionClass(blanks[index] === option, status === "good" && option === line.answer, false)}
                    onClick={() => {
                      setBlanks((cur) => ({ ...cur, [index]: option }));
                      if (status === "bad") setStatus("idle");
                    }}
                  >
                    <Ru>{option}</Ru>
                  </button>
                ))}
              </fieldset>
            ),
          )}
        </div>
      ) : null}
      <p role="status" className={status === "good" ? "font-bold text-garden" : "font-bold text-terra"}>
        {status === "good" ? ui.correct : status === "bad" ? ui.notYet : ""}
      </p>
      {!onSlot && status !== "good" ? (
        <Button disabled={status !== "bad" && !ready} onClick={() => pressRef.current()}>
          {status === "bad" ? ui.tryAgain : ui.check}
        </Button>
      ) : null}
    </div>
  );
}

function isCorrect(
  activity: Exclude<Activity, { kind: "speak" }>,
  state: {
    picked: number | null;
    multi: number[];
    truth: boolean | null;
    word: string | null;
    lines: string[];
    built: string[];
    pairs: Record<number, string>;
    blanks: Record<number, string>;
    spelled: string;
  },
) {
  switch (activity.kind) {
    case "choice":
      return state.picked !== null && Boolean(activity.options[state.picked]?.correct);
    case "multi": {
      const wanted = activity.options.map((option, index) => (option.correct ? index : -1)).filter((index) => index >= 0);
      return wanted.length === state.multi.length && wanted.every((index) => state.multi.includes(index));
    }
    case "truefalse":
      return state.truth === activity.correct;
    case "fill":
      return state.word === activity.answer;
    case "order":
      return state.lines.join("|") === activity.items.join("|");
    case "build":
      return state.built.join("|") === activity.words.join("|");
    case "spell":
      return state.spelled.toLowerCase() === activity.word.toLowerCase();
    case "match":
      return activity.pairs.every((pair, index) => state.pairs[index] === pair.right);
    case "script":
      return activity.lines.every((line, index) => "text" in line || state.blanks[index] === line.answer);
    default:
      return false;
  }
}

function OptionList({
  labels,
  selected,
  status,
  correctIndex,
  onPick,
  name,
  noAudio,
}: {
  labels: string[];
  selected: number | null;
  status: Status;
  correctIndex: number;
  onPick: (index: number) => void;
  name: string;
  noAudio?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2" role="radiogroup" aria-label={name}>
      {labels.map((label, index) => (
        <ChoiceRow
          key={label}
          label={label}
          playId={`${name}-opt-${index}`}
          role="radio"
          checked={selected === index}
          className={optionClass(
            selected === index,
            status === "good" && index === correctIndex,
            status === "good" && selected === index && index !== correctIndex,
          )}
          onClick={() => onPick(index)}
          noAudio={noAudio}
        />
      ))}
    </div>
  );
}

function ChoiceRow({
  label,
  playId,
  className,
  onClick,
  pressed,
  role,
  checked,
  noAudio,
}: {
  label: string;
  playId: string;
  className: string;
  onClick: () => void;
  pressed?: boolean;
  role?: "radio";
  checked?: boolean;
  noAudio?: boolean;
}) {
  return (
    <div className="flex items-stretch gap-2">
      <button
        type="button"
        role={role}
        aria-checked={role === "radio" ? checked : undefined}
        aria-pressed={role === "radio" ? undefined : pressed}
        className={`${className} flex-1`}
        onClick={onClick}
      >
        {isTarget(label) ? <Ru className="text-xl">{label}</Ru> : label}
      </button>
      {isTarget(label) && !noAudio ? <PlayButton id={playId} text={label} label={`${ui.play} ${label}`} /> : null}
    </div>
  );
}

function Arrange({ items, setItems }: { items: string[]; setItems: (items: string[]) => void }) {
  const move = (index: number, dir: -1 | 1) => {
    const next = index + dir;
    if (next < 0 || next >= items.length) return;
    const copy = [...items];
    const current = copy[index];
    const swap = copy[next];
    if (current === undefined || swap === undefined) return;
    copy[index] = swap;
    copy[next] = current;
    setItems(copy);
  };
  return (
    <ol className="flex flex-col gap-2">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-stretch gap-2">
          <div className="flex min-h-14 flex-1 items-center rounded-2xl border border-line bg-card px-4 text-lg">
            {isTarget(item) ? <Ru>{item}</Ru> : item}
          </div>
          <button type="button" className="min-h-14 min-w-14 rounded-2xl border border-line bg-card px-3 font-bold" aria-label={ui.moveUp(item)} onClick={() => move(index, -1)}>
            {ui.up}
          </button>
          <button type="button" className="min-h-14 min-w-14 rounded-2xl border border-line bg-card px-3 font-bold" aria-label={ui.moveDown(item)} onClick={() => move(index, 1)}>
            {ui.down}
          </button>
        </li>
      ))}
    </ol>
  );
}

function optionClass(selected: boolean, good: boolean, bad: boolean) {
  return [
    "flex min-h-14 w-full items-center rounded-2xl border px-4 py-3 text-left text-lg",
    good ? "border-garden bg-on-garden" : bad ? "border-terra bg-paper-deep" : selected ? "border-terra bg-paper-deep" : "border-line bg-card",
  ].join(" ");
}
