import { useEffect, useRef, useState } from "react";
import { courseDef, type CourseId } from "@/lib/course/active";
import { voiceCast, type VoiceId } from "@/lib/course/audio";
import { grokLanguage } from "@/lib/voice/phrases-lang";
import { voiceAdmin } from "@/lib/voice/voice.functions";
import { Button } from "./ui";

/**
 * The voice page: records the course phrases with Grok, city by city. Opened with ?voice=<code>, where
 * the code is the Netlify variable VOICE_ADMIN_CODE (checked on the server). No password form: the code
 * from the link is sent automatically and kept for the tab, so the developer panel can open it too.
 * In Russian (the author's language). Built for VoiceOver: one heading per part, plain buttons,
 * every result announced in a status line.
 */

type Status = {
  course: { id: string; title: string; lang: string; places: { id: string; name: string; phrases: number; recorded: number; left: number; leftChars: number }[] };
  today: number;
  limit: number;
  keySet: boolean;
};

const PRICE_PER_CHAR = 15 / 1_000_000;
const dollars = (chars: number) => `$${(chars * PRICE_PER_CHAR).toFixed(2)}`;
const CODE_KEY = "talky-kitty-voice-code";

/** The code from ?voice=<code> (then hidden from the address bar), or the one saved for this tab. */
function linkCode(): string {
  try {
    const url = new URL(window.location.href);
    const fromLink = url.searchParams.get("voice")?.trim() ?? "";
    if (fromLink && fromLink !== "1") {
      window.sessionStorage.setItem(CODE_KEY, fromLink);
      url.searchParams.set("voice", "1");
      window.history.replaceState(window.history.state, "", url);
      return fromLink;
    }
    return window.sessionStorage.getItem(CODE_KEY) ?? "";
  } catch {
    return "";
  }
}

export function VoicePage({ onBack }: { onBack: () => void }) {
  const [code] = useState(linkCode);
  const [courses, setCourses] = useState<{ id: string; title: string }[] | null>(null);
  const [course, setCourse] = useState<CourseId | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const stopRef = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => heading.current?.focus(), []);
  useEffect(() => {
    if (code) void signIn();
    else setMessage("Нет кода озвучки. Открой ссылку вида ?voice=КОД.");
    // Runs once on open.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const call = async (input: {
    action: "courses" | "status" | "record" | "sample";
    course?: CourseId;
    place?: string;
    speaker?: string;
    text?: string;
    lang?: string;
  }) => {
    const result = await voiceAdmin({ data: { code, ...input } });
    if (!result.ok) throw new Error(explain(result.error));
    return result;
  };

  const signIn = async () => {
    setMessage("Проверяю код…");
    setBusy("signin");
    try {
      const result = await withTimeout(call({ action: "courses" }), 12_000);
      if ("courses" in result) setCourses(result.courses);
      setMessage("Код верный. Выбери курс.");
    } catch (error) {
      setMessage(signInError(error));
      try {
        window.sessionStorage.removeItem(CODE_KEY);
      } catch {
        // Private mode: nothing was saved.
      }
    } finally {
      setBusy(null);
    }
  };

  const refresh = async (id: CourseId) => {
    const result = await call({ action: "status", course: id });
    if ("status" in result) setStatus(result.status as Status);
  };

  const choose = async (id: CourseId) => {
    setCourse(id);
    setStatus(null);
    setMessage("Считаю фразы…");
    try {
      await refresh(id);
      setMessage("");
    } catch (error) {
      setMessage((error as Error).message);
    }
  };

  /** Records a city (or the whole course) in small parts, until it is done or stopped. */
  const record = async (place: string, name: string) => {
    if (!course) return;
    stopRef.current = false;
    setBusy(place);
    let total = 0;
    try {
      for (;;) {
        if (stopRef.current) {
          setMessage(`Остановлено. ${name}: записано ${total}.`);
          break;
        }
        const result = await call({ action: "record", course, place });
        if (!("recorded" in result)) break;
        total += result.recorded;
        setMessage(`${name}: записано ${total}, осталось ${result.left}.`);
        if (result.left === 0 || result.recorded === 0) {
          setMessage(`${name}: готово, записано ${total}.`);
          break;
        }
      }
    } catch (error) {
      setMessage(`${name}: ошибка. ${(error as Error).message}. Записано ${total}.`);
    } finally {
      setBusy(null);
      await refresh(course).catch(() => undefined);
    }
  };

  return (
    <main lang="ru" className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 bg-paper px-5 py-6">
      <Button variant="quiet" onClick={onBack}>
        Назад
      </Button>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl outline-none">
        Озвучка
      </h1>
      <p>Каждая фраза записывается голосом Grok один раз. Ученики потом слушают готовый файл.</p>
      <p role="status" aria-live="polite" className="font-bold text-garden">
        {message}
      </p>

      {!courses ? (
        busy === "signin" ? null : code ? (
          <Button onClick={() => void signIn()}>Попробовать ещё раз</Button>
        ) : null
      ) : (
        <>
          <h2 className="font-display text-2xl">Курс</h2>
          <div className="grid gap-3">
            {courses.map((c) => (
              <Button key={c.id} variant={course === c.id ? "primary" : "ghost"} aria-pressed={course === c.id} onClick={() => void choose(c.id as CourseId)}>
                {c.title}
              </Button>
            ))}
          </div>
        </>
      )}

      {status ? (
        <>
          <h2 className="font-display text-2xl">{status.course.title}</h2>
          <p>
            {status.keySet ? "Ключ Grok есть." : "Ключа Grok нет: добавь XAI_API_KEY в Netlify."} Сегодня отправлено {status.today.toLocaleString("ru-RU")} знаков из{" "}
            {status.limit.toLocaleString("ru-RU")} ({dollars(status.today)}).
          </p>
          {(() => {
            const left = status.course.places.reduce((sum, p) => sum + p.left, 0);
            const chars = status.course.places.reduce((sum, p) => sum + p.leftChars, 0);
            return (
              <Button disabled={busy !== null || left === 0} onClick={() => void record("all", "Весь курс")}>
                {left === 0 ? "Весь курс озвучен" : `Озвучить весь курс: ${left} фраз, около ${dollars(chars)}`}
              </Button>
            );
          })()}
          {busy ? (
            <Button variant="ghost" onClick={() => (stopRef.current = true)}>
              Остановить
            </Button>
          ) : null}
          <h3 className="font-display text-xl">По городам</h3>
          <ul className="flex flex-col gap-3">
            {status.course.places.map((p) => (
              <li key={p.id} className="flex flex-col gap-2 rounded-3xl border border-line bg-card p-4">
                <p className="text-lg font-bold">{p.name}</p>
                <p>
                  Записано {p.recorded} из {p.phrases}
                  {p.left > 0 ? `, осталось ${p.left} (около ${dollars(p.leftChars)})` : ", всё готово"}.
                </p>
                {p.left > 0 ? (
                  <Button variant="ghost" disabled={busy !== null} onClick={() => void record(p.id, p.name)}>
                    {busy === p.id ? "Записываю…" : `Озвучить: ${p.name}`}
                  </Button>
                ) : null}
              </li>
            ))}
          </ul>
          <VoiceSamples course={status.course.id as CourseId} code={code} onMessage={setMessage} />
        </>
      ) : null}
    </main>
  );
}

/** Listen to each character's voice before recording: one of their lines, not saved. */
function VoiceSamples({ course, code, onMessage }: { course: CourseId; code: string; onMessage: (text: string) => void }) {
  // iPhone plays sound only straight from a tap: the first tap fetches the sample, the second plays it.
  const [ready, setReady] = useState<Partial<Record<VoiceId, string>>>({});
  const def = courseDef(course, "ru") ?? courseDef(course, "en");
  if (!def) return null;
  const lines = new Map<VoiceId, string>();
  lines.set("murzik", def.prologue.postcard.ru);
  for (const city of def.model.readyCities)
    for (const lesson of city.lessons)
      for (const line of lesson.dialogue.lines) if (!lines.has(line.speaker) && line.speaker in voiceCast) lines.set(line.speaker, line.ru);
  const play = async (speaker: VoiceId, text: string) => {
    const name = def.speakers[speaker]?.name ?? speaker;
    const url = ready[speaker];
    if (url) {
      new Audio(url).play().catch(() => onMessage("Не получилось включить звук."));
      return;
    }
    onMessage(`Готовлю голос: ${name}…`);
    const result = await voiceAdmin({ data: { code, action: "sample", speaker, text, lang: grokLanguage(def.speechLang) } });
    if (!result.ok || !("audio" in result)) return onMessage(explain(result.ok ? "server error" : result.error));
    setReady((cur) => ({ ...cur, [speaker]: `data:audio/mpeg;base64,${result.audio}` }));
    onMessage(`Голос готов: ${name}. Нажми ещё раз, чтобы послушать.`);
  };
  return (
    <>
      <h3 className="font-display text-xl">Голоса героев</h3>
      <p>Можно послушать каждого героя до записи. Пробная фраза не сохраняется, стоит меньше цента.</p>
      <ul className="flex flex-col gap-3">
        {[...lines].map(([speaker, text]) => (
          <li key={speaker}>
            <Button variant="ghost" className="justify-start text-left" onClick={() => void play(speaker, text)}>
              {ready[speaker] ? "Слушать: " : "Подготовить: "}
              {def.speakers[speaker]?.name ?? speaker} — голос {voiceCast[speaker]?.grok}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

function withTimeout<T>(work: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    work.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timer);
        reject(error instanceof Error ? error : new Error(String(error)));
      },
    );
  });
}

function signInError(error: unknown): string {
  const raw = error instanceof Error ? error.message : String(error);
  if (raw === "timeout") return "Сервер не ответил за 12 секунд. Проверка кода не должна зависать.";
  if (/fetch|network|load failed|failed to fetch/i.test(raw)) return `Нет ответа от сервера. ${raw}`;
  return raw || "Ошибка сервера. Попробуй ещё раз.";
}

function explain(error: string): string {
  if (error === "wrong password") return "Неверный код в ссылке.";
  if (error.includes("VOICE_ADMIN_CODE")) return "В Netlify нет переменной VOICE_ADMIN_CODE.";
  if (error.includes("XAI_API_KEY")) return "В Netlify нет переменной XAI_API_KEY.";
  if (error.startsWith("daily limit")) return "Достигнут дневной предел знаков. Продолжить можно завтра.";
  if (error.startsWith("Grok answered 401") || error.startsWith("Grok answered 403")) return "Grok не принял ключ. Проверь XAI_API_KEY.";
  if (error.startsWith("Grok answered 402") || /credit|balance/i.test(error)) return "На балансе xAI закончились деньги.";
  if (error.startsWith("Grok answered 429")) return "Grok просит подождать. Нажми ещё раз через минуту.";
  if (error.startsWith("Grok answered")) return `Ошибка Grok: ${error}`;
  return "Ошибка сервера. Попробуй ещё раз.";
}
