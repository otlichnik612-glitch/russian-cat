/**
 * Revised Romanization of Korean (the official South Korean system, the one on road signs and in the metro),
 * for the English version of the Korean course.
 *
 * Follows the official rules: sound changes between syllables of one word are written as heard
 * (liaison, nasalization, ㄴ+ㄹ = ll, aspiration with ㅎ, palatalization 같이 = gachi),
 * tense consonants after a final are not shown (학교 = hakgyo). Words are romanized one by one.
 * Capital letters (names) are added by the course, not here.
 */

const INITIAL = ["g", "kk", "n", "d", "tt", "r", "m", "b", "pp", "s", "ss", "", "j", "jj", "ch", "k", "t", "p", "h"];
const VOWEL = ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"];
// Finals: index 0 = none.
const FINALS = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const INITIAL_JAMO = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

type Syl = { i: string; v: number; f: string };

function split(ch: string): Syl | null {
  const code = ch.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return null;
  return { i: INITIAL_JAMO[Math.floor(code / 588)]!, v: Math.floor((code % 588) / 28), f: FINALS[code % 28]! };
}

/** How a final sounds at the end of a word or before a consonant. */
const CODA: Record<string, string> = {
  "": "", ㄱ: "k", ㄲ: "k", ㄳ: "k", ㄴ: "n", ㄵ: "n", ㄶ: "n", ㄷ: "t", ㄹ: "l", ㄺ: "k", ㄻ: "m", ㄼ: "l", ㄽ: "l", ㄾ: "l",
  ㄿ: "p", ㅀ: "l", ㅁ: "m", ㅂ: "p", ㅄ: "p", ㅅ: "t", ㅆ: "t", ㅇ: "ng", ㅈ: "t", ㅊ: "t", ㅋ: "k", ㅌ: "t", ㅍ: "p", ㅎ: "t",
};
/** A double final before a vowel: the first part stays, the second moves to the next syllable. */
const DOUBLE: Record<string, [string, string]> = {
  ㄳ: ["ㄱ", "ㅅ"], ㄵ: ["ㄴ", "ㅈ"], ㄶ: ["ㄴ", "ㅎ"], ㄺ: ["ㄹ", "ㄱ"], ㄻ: ["ㄹ", "ㅁ"], ㄼ: ["ㄹ", "ㅂ"], ㄽ: ["ㄹ", "ㅅ"],
  ㄾ: ["ㄹ", "ㅌ"], ㄿ: ["ㄹ", "ㅍ"], ㅀ: ["ㄹ", "ㅎ"], ㅄ: ["ㅂ", "ㅅ"],
};
const ROMAN_INITIAL = (j: string) => INITIAL[INITIAL_JAMO.indexOf(j)]!;
const ASPIRATE: Record<string, string> = { ㄱ: "ㅋ", ㄷ: "ㅌ", ㅂ: "ㅍ", ㅈ: "ㅊ" };

/** Words whose standard pronunciation the rules above do not give (a boundary inside a compound word). */
const EXCEPTIONS: Record<string, string> = {
  맛없어요: "madeopseoyo",
  맛없어: "madeopseo",
};

function word(text: string): string {
  if (EXCEPTIONS[text]) return EXCEPTIONS[text];
  const syls: (Syl | string)[] = [...text].map((ch) => split(ch) ?? ch);
  // Apply the sound changes between neighbouring syllables, then read each one.
  for (let n = 0; n < syls.length - 1; n++) {
    const a = syls[n]!;
    const b = syls[n + 1]!;
    if (typeof a === "string" || typeof b === "string" || !a.f) continue;
    const f = a.f;
    if (b.i === "ㅇ") {
      // Liaison.
      if (f === "ㅇ") continue;
      if (f === "ㅎ") { a.f = ""; continue; }
      if (DOUBLE[f]) {
        const [stay, move] = DOUBLE[f];
        // ㄶ / ㅀ: ㅎ is silent, so ㄴ / ㄹ itself moves (괜찮아요 = gwaenchanayo, 싫어요 = sireoyo).
        if (move === "ㅎ") { a.f = ""; b.i = stay; continue; }
        a.f = stay;
        b.i = move;
        continue;
      }
      // Palatalization: ㄷ/ㅌ + 이.
      if ((f === "ㄷ" || f === "ㅌ") && b.v === 20) { a.f = ""; b.i = f === "ㄷ" ? "ㅈ" : "ㅊ"; continue; }
      a.f = "";
      b.i = f;
      continue;
    }
    if (b.i === "ㅎ") {
      // Aspiration: ㄱ/ㄷ/ㅂ/ㅈ + ㅎ.
      const last = DOUBLE[f] ? DOUBLE[f][1] : f;
      const keep = DOUBLE[f] ? DOUBLE[f][0] : "";
      const base = { ㄱ: "ㄱ", ㄲ: "ㄱ", ㅋ: "ㄱ", ㄷ: "ㄷ", ㅅ: "ㄷ", ㅆ: "ㄷ", ㅈ: "ㅈ", ㅊ: "ㅈ", ㅌ: "ㄷ", ㅂ: "ㅂ", ㅍ: "ㅂ" }[last];
      if (base) { a.f = keep; b.i = ASPIRATE[base]!; continue; }
    }
    if (f === "ㅎ" || f === "ㄶ" || f === "ㅀ") {
      const keep = f === "ㅎ" ? "" : f === "ㄶ" ? "ㄴ" : "ㄹ";
      if (ASPIRATE[b.i]) { a.f = keep; b.i = ASPIRATE[b.i]!; continue; }
      if (b.i === "ㅅ") { a.f = keep; b.i = "ㅆ"; continue; }
      if (b.i === "ㄴ") { a.f = keep || "ㄴ"; continue; }
    }
    const coda = CODA[f]!;
    // ㄴ + ㄹ and ㄹ + ㄴ: ll.
    if ((coda === "n" && b.i === "ㄹ") || (coda === "l" && b.i === "ㄴ")) { a.f = "ㄹ"; b.i = "ㄹ"; continue; }
    // Nasalization before ㄴ / ㅁ, and ㄹ after other consonants becomes ㄴ.
    if (b.i === "ㄹ" && coda !== "l") b.i = "ㄴ";
    if (b.i === "ㄴ" || b.i === "ㅁ") {
      if (coda === "k") a.f = "ㅇ";
      else if (coda === "t") a.f = "ㄴ";
      else if (coda === "p") a.f = "ㅁ";
    }
  }
  let out = "";
  for (let n = 0; n < syls.length; n++) {
    const s = syls[n]!;
    if (typeof s === "string") { out += s; continue; }
    const next = syls[n + 1];
    out += ROMAN_INITIAL(s.i) + VOWEL[s.v];
    if (!s.f) continue;
    if (s.f === "ㄹ" && next && typeof next !== "string" && next.i === "ㄹ") { out += "l"; continue; }
    out += CODA[s.f];
  }
  // ㄹㄹ is written ll, not lr.
  return out.replace(/lr/g, "ll");
}

/** Romanize a Korean text; spaces and punctuation stay as they are. */
export function romanize(text: string): string {
  return text.normalize("NFC").replace(/[가-힣]+/g, (w) => word(w));
}
