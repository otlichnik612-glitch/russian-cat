import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { audioUrl, grokVoiceId, NARRATOR, type VoiceId } from "./audio";
import { speakRu } from "./speak";

type SpeechValue = {
  playing: string | null;
  play: (id: string, text: string, lang?: string, voice?: VoiceId) => void;
  playAll: (lines: { id: string; text: string; lang?: string; voice?: VoiceId }[]) => void;
  stop: () => void;
};

const SpeechContext = createContext<SpeechValue | null>(null);

let token = 0;

function voicesReady(): Promise<SpeechSynthesisVoice[]> {
  const synth = window.speechSynthesis;
  const existing = synth.getVoices();
  if (existing.length) return Promise.resolve(existing);
  return new Promise((resolve) => {
    const finish = () => resolve(synth.getVoices());
    synth.addEventListener("voiceschanged", finish, { once: true });
    window.setTimeout(finish, 250);
  });
}

function pickVoice(voices: SpeechSynthesisVoice[], lang: string) {
  const want = lang.slice(0, 2).toLowerCase();
  return (
    voices.find((v) => v.lang.toLowerCase().replace("_", "-").startsWith(want)) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(want))
  );
}

function utter(text: string, lang: string, voices: SpeechSynthesisVoice[], pitch = 1) {
  return new Promise<void>((resolve) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.9;
    u.pitch = pitch;
    const voice = pickVoice(voices, lang);
    if (voice) u.voice = voice;
    u.onend = () => resolve();
    u.onerror = () => resolve();
    window.speechSynthesis.speak(u);
  });
}

/** Recorded files that turned out to be missing, so we do not ask for them again. */
const missing = new Set<string>();
let player: HTMLAudioElement | null = null;

function stopFile() {
  if (player) {
    player.onended = null;
    player.onerror = null;
    player.pause();
  }
}

/** Plays a recorded mp3. Resolves true when it finished, false if there is no file. */
function playFile(url: string, rememberMiss = true): Promise<boolean> {
  if (missing.has(url) || typeof Audio === "undefined") return Promise.resolve(false);
  // One shared element, so iPhone keeps allowing playback after the first tap.
  player ??= new Audio();
  const el = player;
  return new Promise<boolean>((resolve) => {
    let started = false;
    el.onplaying = () => {
      started = true;
    };
    el.onended = () => resolve(true);
    el.onerror = () => {
      if (!started && rememberMiss) missing.add(url);
      resolve(started);
    };
    el.src = url;
    el.play().catch(() => {
      if (!started && rememberMiss) missing.add(url);
      resolve(false);
    });
  });
}

const heard = new Map<string, string>();

/** Ara for Murzik, Leo for Tom. Remembers a line so the next tap does not ask again. */
async function playGrok(voice: "ara" | "leo", text: string): Promise<boolean> {
  const key = `${voice}\n${text}`;
  let url = heard.get(key);
  if (!url) {
    const result = await speakRu({ data: { text, voice } });
    if (!result.ok) return false;
    const bytes = Uint8Array.from(atob(result.audio), (ch) => ch.charCodeAt(0));
    url = URL.createObjectURL(new Blob([bytes], { type: "audio/mpeg" }));
    heard.set(key, url);
  }
  return playFile(url, false);
}

/** Recorded voice first; Ara or Leo for Murzik and Tom; the phone's own voice if those are unavailable. */
async function say(text: string, lang: string, voice: VoiceId, isCurrent: () => boolean) {
  if (lang.startsWith("ru") && (await playFile(audioUrl(voice, text)))) return;
  if (!isCurrent()) return;
  const grok = grokVoiceId(voice);
  if (lang.startsWith("ru") && grok && (await playGrok(grok, text))) return;
  if (!isCurrent()) return;
  const voices = await voicesReady();
  if (!isCurrent()) return;
  const pitch = voice === "murzik" ? 1.45 : voice === "tom" ? 0.8 : 1;
  await utter(text, lang, voices, pitch);
}

export function SpeechProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState<string | null>(null);

  const stop = useCallback(() => {
    token += 1;
    stopFile();
    window.speechSynthesis?.cancel();
    setPlaying(null);
  }, []);

  const play = useCallback((id: string, text: string, lang = "ru-RU", voice: VoiceId = NARRATOR) => {
    const my = ++token;
    stopFile();
    window.speechSynthesis?.cancel();
    setPlaying(id);
    void (async () => {
      await say(text, lang, voice, () => my === token);
      if (my === token) setPlaying(null);
    })();
  }, []);

  const playAll = useCallback((lines: { id: string; text: string; lang?: string; voice?: VoiceId }[]) => {
    const my = ++token;
    stopFile();
    window.speechSynthesis?.cancel();
    void (async () => {
      for (const line of lines) {
        if (my !== token) return;
        setPlaying(line.id);
        await say(line.text, line.lang ?? "ru-RU", line.voice ?? NARRATOR, () => my === token);
      }
      if (my === token) setPlaying(null);
    })();
  }, []);

  useEffect(
    () => () => {
      stopFile();
      window.speechSynthesis?.cancel();
    },
    [],
  );

  const value = useMemo(() => ({ playing, play, playAll, stop }), [playing, play, playAll, stop]);
  return <SpeechContext.Provider value={value}>{children}</SpeechContext.Provider>;
}

export function useSpeech() {
  const ctx = useContext(SpeechContext);
  if (!ctx) throw new Error("Speech missing");
  return ctx;
}
