import type { SpeakerId } from "./types";

/**
 * Recorded voices. Every Russian phrase can have its own mp3 file in public/audio/<voice>/<key>.mp3.
 * If the file exists, the app plays it. If not, the phone's built-in voice reads the text, as before.
 *
 * Murzik's voice is also used for everything that is not a dialogue line:
 * phrase cards, letters, grammar examples and tasks.
 */
export type VoiceId = SpeakerId;

/** Which Grok voice records each character. Change a line here to change a voice. */
export const voiceCast: Record<VoiceId, { grok: string; character: string }> = {
  murzik: { grok: "ara", character: "Murzik — a cheerful, curious young kitten; also reads the phrase cards and tasks" },
  tom: { grok: "leo", character: "Tom — a friendly young Englishman of about 25" },
  neighbour: { grok: "another female voice", character: "Madame Dubois — a kind elderly lady" },
  officer: { grok: "another male voice", character: "Passport officer — a polite, calm man" },
  passerby: { grok: "another female voice", character: "Passer-by — a friendly woman" },
  waiter: { grok: "another male voice", character: "Waiter — a cheerful man of about 40" },
  seller: { grok: "another female voice", character: "Seller — a cheerful woman" },
  cashier: { grok: "another male voice", character: "Cashier / ticket clerk — a calm, friendly voice" },
  barsik: { grok: "another male voice", character: "Barsik — a plump, lazy, funny cousin" },
  musya: { grok: "another female voice", character: "Musya — a five-year-old girl" },
  aunt: { grok: "another female voice", character: "Aunt Olya — a warm mother and teacher" },
  uncle: { grok: "another male voice", character: "Uncle Petya — a jolly cook" },
  marco: { grok: "another male voice", character: "Marco — a young Italian man" },
  irina: { grok: "another female voice", character: "Irina — a kind Russian woman of about 50" },
  karl: { grok: "another male voice", character: "Karl — a gentle old Austrian musician, speaks slowly and warmly" },
  doctor: { grok: "another female voice", character: "Dr Anna Petrovna — a calm, caring Russian doctor of about 60" },
  pharmacist: { grok: "another female voice", character: "Pharmacist — a friendly young woman" },
  katya: { grok: "another female voice", character: "Katya — a lively Russian student of about 20" },
  editor: { grok: "another female voice", character: "Editor — a confident, friendly woman of about 45" },
  nika: { grok: "another female voice", character: "Nika — a cheerful young woman from a Greek-Russian family" },
  receptionist: { grok: "another male voice", character: "Hotel receptionist — a polite, helpful young man" },
  ewa: { grok: "another female voice", character: "Pani Ewa — a lively elderly Polish lady who learned Russian at school" },
  dora: { grok: "another female voice", character: "Dora — a curious ten-year-old girl" },
  jamie: { grok: "another male voice", character: "Jamie — Tom's cheerful Scottish school friend" },
  lev: { grok: "another male voice", character: "Lev — a kind, quiet, elderly voice, warm and a little mysterious" },
};

/** The voice for anything that is not a dialogue line. */
export const NARRATOR: VoiceId = "murzik";

/** Grok voices that actually speak in the app. Ara is the high female voice. Leo is the male voice. */
export function grokVoiceId(voice: VoiceId): "ara" | "leo" | null {
  if (voice === "murzik") return "ara";
  if (voice === "tom") return "leo";
  return null;
}

function normalise(text: string): string {
  return text.normalize("NFC").replace(/\s+/g, " ").trim();
}

/** A short stable file name for a phrase (FNV-1a hash of the exact text). */
export function audioKey(text: string): string {
  let h = 0x811c9dc5;
  for (const ch of normalise(text)) {
    h ^= ch.codePointAt(0)!;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

/**
 * Where the recordings live. "/audio" = inside the project (public/audio).
 * To move them to cloud storage later, put its address here, e.g. "https://audio.example.com".
 */
export const AUDIO_BASE = "/audio";

export function audioUrl(voice: VoiceId, text: string): string {
  return `${AUDIO_BASE}/${voice}/${audioKey(text)}.mp3`;
}
