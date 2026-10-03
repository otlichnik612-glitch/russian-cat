import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type SpeechValue = {
  playing: string | null;
  play: (id: string, text: string, lang?: string) => void;
  playAll: (lines: { id: string; text: string; lang?: string }[]) => void;
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

function utter(text: string, lang: string, voices: SpeechSynthesisVoice[]) {
  return new Promise<void>((resolve) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.9;
    const voice = pickVoice(voices, lang);
    if (voice) u.voice = voice;
    u.onend = () => resolve();
    u.onerror = () => resolve();
    window.speechSynthesis.speak(u);
  });
}

export function SpeechProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState<string | null>(null);

  const stop = useCallback(() => {
    token += 1;
    window.speechSynthesis?.cancel();
    setPlaying(null);
  }, []);

  const play = useCallback((id: string, text: string, lang = "ru-RU") => {
    const my = ++token;
    window.speechSynthesis?.cancel();
    setPlaying(id);
    void (async () => {
      const voices = await voicesReady();
      if (my !== token) return;
      await utter(text, lang, voices);
      if (my === token) setPlaying(null);
    })();
  }, []);

  const playAll = useCallback((lines: { id: string; text: string; lang?: string }[]) => {
    const my = ++token;
    window.speechSynthesis?.cancel();
    void (async () => {
      const voices = await voicesReady();
      for (const line of lines) {
        if (my !== token) return;
        setPlaying(line.id);
        await utter(line.text, line.lang ?? "ru-RU", voices);
      }
      if (my === token) setPlaying(null);
    })();
  }, []);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const value = useMemo(() => ({ playing, play, playAll, stop }), [playing, play, playAll, stop]);
  return <SpeechContext.Provider value={value}>{children}</SpeechContext.Provider>;
}

export function useSpeech() {
  const ctx = useContext(SpeechContext);
  if (!ctx) throw new Error("Speech missing");
  return ctx;
}
