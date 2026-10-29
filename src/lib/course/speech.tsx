import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { audioKey, audioUrl, NARRATOR, type VoiceId } from "./audio";
import { recordedAudio } from "./audio-recorded";
import { course } from "./active";

type SpeechValue = {
  playing: string | null;
  play: (id: string, text: string, lang?: string, voice?: VoiceId) => void;
  playAll: (lines: { id: string; text: string; lang?: string; voice?: VoiceId }[]) => void;
  stop: () => void;
};

const SpeechContext = createContext<SpeechValue | null>(null);

let token = 0;

/** The best voice for the language: a downloaded higher-quality one (Premium / Enhanced) if the phone has it. */
function pickVoice(voices: SpeechSynthesisVoice[], lang: string) {
  const want = lang.slice(0, 2).toLowerCase();
  const matching = voices.filter((v) => v.lang.toLowerCase().replace("_", "-").startsWith(want));
  const quality = (v: SpeechSynthesisVoice) => {
    const name = v.name.toLowerCase();
    if (name.includes("premium")) return 3;
    if (name.includes("enhanced") || name.includes("улучш")) return 2;
    return v.localService ? 1 : 0;
  };
  return matching.sort((a, b) => quality(b) - quality(a))[0];
}

/** The utterance being spoken. Kept here so Safari does not drop it before it ends. */
let current: SpeechSynthesisUtterance | null = null;

/**
 * Speak with the phone's voice right now, in the same tap. iPhone only lets a page speak straight after
 * a tap, so nothing is awaited before `speak`. If the voice list is not loaded yet, the language alone
 * picks the phone's default voice for it.
 */
function utter(text: string, lang: string) {
  return new Promise<void>((resolve) => {
    const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
    if (!synth || typeof SpeechSynthesisUtterance === "undefined") return resolve();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.9;
    const voice = pickVoice(synth.getVoices(), lang);
    if (voice) u.voice = voice;
    const done = () => {
      if (current === u) current = null;
      resolve();
    };
    u.onend = done;
    u.onerror = done;
    current = u;
    synth.speak(u);
    // Safari sometimes starts paused after a cancel.
    if (synth.paused) synth.resume();
  });
}

/** Stop the phone's voice. Calling cancel when nothing is speaking can make Safari skip the next phrase. */
function cancelVoice() {
  const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
  if (synth && (synth.speaking || synth.pending)) synth.cancel();
  current = null;
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
function playFile(url: string): Promise<boolean> {
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
      if (!started) missing.add(url);
      resolve(started);
    };
    el.src = url;
    el.play().catch(() => {
      if (!started) missing.add(url);
      resolve(false);
    });
  });
}

/** A recording when this phrase has one (listed in audio-recorded.ts); otherwise the phone's voice at once. */
async function say(text: string, lang: string, voice: VoiceId, isCurrent: () => boolean) {
  if (lang.startsWith("ru") && recordedAudio.has(`${voice}/${audioKey(text)}`)) {
    if (await playFile(audioUrl(voice, text))) return;
    if (!isCurrent()) return;
  }
  await utter(text, lang);
}

export function SpeechProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState<string | null>(null);

  const stop = useCallback(() => {
    token += 1;
    stopFile();
    cancelVoice();
    setPlaying(null);
  }, []);

  const play = useCallback((id: string, text: string, lang?: string, voice: VoiceId = NARRATOR) => {
    const my = ++token;
    stopFile();
    cancelVoice();
    setPlaying(id);
    void (async () => {
      await say(text, lang ?? course.speechLang, voice, () => my === token);
      if (my === token) setPlaying(null);
    })();
  }, []);

  const playAll = useCallback((lines: { id: string; text: string; lang?: string; voice?: VoiceId }[]) => {
    const my = ++token;
    stopFile();
    cancelVoice();
    void (async () => {
      for (const line of lines) {
        if (my !== token) return;
        setPlaying(line.id);
        await say(line.text, line.lang ?? course.speechLang, line.voice ?? NARRATOR, () => my === token);
      }
      if (my === token) setPlaying(null);
    })();
  }, []);

  // Ask for the voice list early, so the right Russian voice is ready by the first tap.
  useEffect(() => {
    const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
    if (!synth) return;
    synth.getVoices();
    const load = () => synth.getVoices();
    synth.addEventListener?.("voiceschanged", load);
    return () => synth.removeEventListener?.("voiceschanged", load);
  }, []);

  useEffect(
    () => () => {
      stopFile();
      cancelVoice();
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
