/**
 * Recordings that really exist in public/audio, as "<voice>/<key>" (see audio.ts).
 * Only these are played as files; every other phrase is read at once by the phone's own voice.
 * Empty for now: the course uses the phone's voice. When recordings are added, list them here
 * (or generate this file from the folder) — a phrase missing here never waits for a file.
 */
export const recordedAudio: ReadonlySet<string> = new Set<string>([]);
