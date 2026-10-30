/**
 * Short sounds after "Check": a light rising chime for a right answer, a soft low "uh-uh" for a wrong one.
 * Made with the phone's own sound engine, so no sound files are needed. Played straight from the tap
 * on "Check", which iPhone requires. VoiceOver still says "Correct." / "Not yet." as before.
 */
let context: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  context ??= new Ctor();
  if (context.state === "suspended") void context.resume();
  return context;
}

/** One soft note: `start` and `length` in seconds from now. */
function note(ctx: AudioContext, frequency: number, start: number, length: number, type: OscillatorType, volume: number) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  const t = ctx.currentTime + start;
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(volume, t + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + length);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + length + 0.02);
}

export function playChime(kind: "good" | "bad") {
  try {
    const ctx = audio();
    if (!ctx) return;
    if (kind === "good") {
      note(ctx, 880, 0, 0.18, "sine", 0.18); // A5
      note(ctx, 1318.5, 0.09, 0.32, "sine", 0.18); // E6
    } else {
      note(ctx, 311, 0, 0.16, "triangle", 0.2); // E♭4
      note(ctx, 233, 0.17, 0.26, "triangle", 0.2); // B♭3
    }
  } catch {
    // No sound is fine: the words "Correct." / "Not yet." are still there.
  }
}
