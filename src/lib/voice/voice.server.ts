import { timingSafeEqual } from "node:crypto";
import { voiceCast, type VoiceId } from "@/lib/course/audio";
import type { CourseId } from "@/lib/course/active";
import { coursePhrases, voiceCourses, type Phrase } from "./phrases";

/**
 * Server-only: recording phrases with Grok text-to-speech (xAI) and keeping the mp3 files in the database.
 * The key is read from the Netlify variable XAI_API_KEY and never leaves the server.
 * The voice page is opened with the password in the Netlify variable VOICE_ADMIN_CODE.
 */

/** Spending guard: characters sent to Grok per day (300 000 ≈ $4.50 at $15 per million). */
export const DAILY_CHAR_LIMIT = 300_000;
/** Phrases recorded per call of the voice page (the page calls again until the city is done). */
const BATCH = 6;
/** Small files: speech sounds fine at 32 kbps, and the database stays small. */
const OUTPUT = { codec: "mp3", sample_rate: 24000, bit_rate: 32000 };

export class VoiceError extends Error {}

export function checkVoiceCode(code: string): void {
  const expected = process.env.VOICE_ADMIN_CODE?.trim();
  if (!expected) throw new VoiceError("VOICE_ADMIN_CODE is not set in Netlify");
  const a = Buffer.from(code.trim());
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) throw new VoiceError("wrong password");
}

function apiKey(): string {
  const key = process.env.XAI_API_KEY?.trim();
  if (!key) throw new VoiceError("XAI_API_KEY is not set in Netlify");
  return key;
}

export function grokVoice(speaker: VoiceId): string {
  return voiceCast[speaker]?.grok ?? voiceCast.murzik.grok;
}

/** One phrase as mp3 from Grok. */
export async function synthesize(text: string, lang: string, voice: string): Promise<Buffer> {
  const response = await fetch("https://api.x.ai/v1/tts", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey()}`, "Content-Type": "application/json" },
    body: JSON.stringify({ text, language: lang, voice_id: voice, output_format: OUTPUT }),
  });
  if (!response.ok) {
    const detail = (await response.text().catch(() => "")).slice(0, 300);
    throw new VoiceError(`Grok answered ${response.status}${detail ? `: ${detail}` : ""}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

type Sql = Awaited<ReturnType<typeof import("@/lib/db").getSql>>;

async function sql(): Promise<Sql> {
  const { getSql } = await import("@/lib/db");
  return getSql();
}

const today = () => new Date().toISOString().slice(0, 10);

async function spentToday(db: Sql): Promise<number> {
  const rows = await db<{ chars: number }>`select chars from voice_spend where day = ${today()}`;
  return Number(rows[0]?.chars ?? 0);
}

async function addSpend(db: Sql, chars: number) {
  await db`
    insert into voice_spend (day, chars) values (${today()}, ${chars})
    on conflict (day) do update set chars = voice_spend.chars + excluded.chars`;
}

/** What is recorded already for a language: speaker/key → the Grok voice used. */
async function recorded(db: Sql, lang: string): Promise<Map<string, string>> {
  const rows = await db<{ speaker: string; key: string; grok_voice: string }>`
    select speaker, key, grok_voice from voice_clip where lang = ${lang}`;
  return new Map(rows.map((r) => [`${r.speaker}/${r.key}`, r.grok_voice]));
}

/** A phrase still to record: no file yet, or recorded with a voice that was changed since. */
function needsRecording(p: Phrase, done: Map<string, string>): boolean {
  const voice = done.get(`${p.speaker}/${p.key}`);
  return voice === undefined || voice !== grokVoice(p.speaker);
}

export type PlaceStatus = { id: string; name: string; phrases: number; recorded: number; left: number; leftChars: number };
export type CourseStatus = { id: string; title: string; lang: string; places: PlaceStatus[] };

export async function voiceStatus(courseId: CourseId): Promise<{ course: CourseStatus; today: number; limit: number; keySet: boolean }> {
  const info = voiceCourses().find((c) => c.id === courseId);
  if (!info) throw new VoiceError("unknown course");
  const db = await sql();
  const phrases = coursePhrases(courseId);
  const done = await recorded(db, info.lang);
  const places: PlaceStatus[] = info.cities.map((c) => {
    const mine = phrases.filter((p) => p.place === c.id);
    const left = mine.filter((p) => needsRecording(p, done));
    return {
      id: c.id,
      name: c.name,
      phrases: mine.length,
      recorded: mine.length - left.length,
      left: left.length,
      leftChars: left.reduce((sum, p) => sum + p.text.length, 0),
    };
  });
  return {
    course: { id: info.id, title: info.title, lang: info.lang, places },
    today: await spentToday(db),
    limit: DAILY_CHAR_LIMIT,
    keySet: Boolean(process.env.XAI_API_KEY?.trim()),
  };
}

/** Records the next few phrases of a city (or the whole course with place "all"). */
export async function recordNext(courseId: CourseId, place: string): Promise<{ recorded: number; left: number; chars: number; today: number }> {
  const db = await sql();
  const phrases = coursePhrases(courseId).filter((p) => place === "all" || p.place === place);
  if (phrases.length === 0) return { recorded: 0, left: 0, chars: 0, today: await spentToday(db) };
  const done = await recorded(db, phrases[0]!.lang);
  const todo = phrases.filter((p) => needsRecording(p, done));
  const batch = todo.slice(0, BATCH);
  const chars = batch.reduce((sum, p) => sum + p.text.length, 0);
  const spent = await spentToday(db);
  if (spent + chars > DAILY_CHAR_LIMIT) throw new VoiceError(`daily limit: ${spent} of ${DAILY_CHAR_LIMIT} characters used today`);
  // Counted before the calls, so a failure half way never lets the guard be passed.
  await addSpend(db, chars);
  const results = await Promise.allSettled(
    batch.map(async (p) => {
      const voice = grokVoice(p.speaker);
      const audio = await synthesize(p.text, p.lang, voice);
      await db`
        insert into voice_clip (lang, speaker, key, grok_voice, text, audio, chars)
        values (${p.lang}, ${p.speaker}, ${p.key}, ${voice}, ${p.text}, ${audio}, ${p.text.length})
        on conflict (lang, speaker, key) do update set
          grok_voice = excluded.grok_voice, text = excluded.text, audio = excluded.audio,
          chars = excluded.chars, created_at = now()`;
    }),
  );
  const failed = results.find((r) => r.status === "rejected") as PromiseRejectedResult | undefined;
  const ok = results.filter((r) => r.status === "fulfilled").length;
  if (ok === 0 && failed) throw failed.reason instanceof Error ? failed.reason : new VoiceError(String(failed.reason));
  return { recorded: ok, left: todo.length - ok, chars, today: spent + chars };
}

/** A short sample of a character's voice, not saved (to choose voices by ear). */
export async function sampleVoice(speaker: VoiceId, text: string, lang: string): Promise<string> {
  const short = text.slice(0, 200);
  const db = await sql();
  const spent = await spentToday(db);
  if (spent + short.length > DAILY_CHAR_LIMIT) throw new VoiceError("daily limit reached");
  await addSpend(db, short.length);
  return (await synthesize(short, lang, grokVoice(speaker))).toString("base64");
}

/** The list of recorded files for the app: "speaker/key" → version (seconds), for one language. */
export async function voiceManifest(lang: string): Promise<Record<string, number>> {
  const db = await sql();
  const rows = await db<{ speaker: string; key: string; v: number }>`
    select speaker, key, extract(epoch from created_at)::bigint as v from voice_clip where lang = ${lang}`;
  return Object.fromEntries(rows.map((r) => [`${r.speaker}/${r.key}`, Number(r.v)]));
}

/** One recorded file. */
export async function voiceClip(lang: string, speaker: string, key: string): Promise<Uint8Array | null> {
  const db = await sql();
  const rows = await db<{ audio: Uint8Array }>`
    select audio from voice_clip where lang = ${lang} and speaker = ${speaker} and key = ${key}`;
  return rows[0]?.audio ?? null;
}
