/**
 * The Arabic course writes its transcriptions in simple Cyrillic (for Russian speakers).
 * For French speakers the same transcription is rewritten with French letters:
 * у = ou, ш = ch, ж = j, дж = dj, х = h, в = w (Arabic و), й = y, ля = la, я = ya,
 * and a single s between vowels is doubled (висада → wissada) so it is not read as z.
 */

const NAMES: Record<string, string> = { Мурзик: "Murzik", Мурзика: "Murzika", Мурзику: "Murziku" };

const VOWELS = "aeiouyéè";

const SINGLE: Record<string, string> = {
  а: "a", б: "b", в: "w", г: "g", д: "d", е: "e", ё: "yo", ж: "j", з: "z", и: "i", й: "y", к: "k", л: "l",
  м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "ou", ф: "f", х: "h", ц: "ts", ч: "tch",
  ш: "ch", щ: "chtch", ъ: "", ы: "i", ь: "", э: "è", ю: "you", я: "ya",
};

function word(w: string): string {
  if (NAMES[w]) return NAMES[w];
  const lower = w.toLowerCase();
  let out = "";
  for (let i = 0; i < lower.length; i++) {
    const ch = lower[i];
    const next = lower[i + 1];
    const prev = lower[i - 1];
    if (ch === "д" && next === "ж") { out += "dj"; i++; continue; }
    if ((ch === "я" || ch === "ю" || ch === "е") && prev === "л") { out += ch === "я" ? "a" : ch === "ю" ? "ou" : "e"; continue; }
    if (ch === "г" && (next === "и" || next === "е" || next === "й")) { out += "gu"; continue; }
    if (ch === "с" && prev && next && VOWELS.includes(SINGLE[prev]?.slice(-1) ?? "") && "аеиоуыэюяё".includes(next) && out.slice(-1) !== "s") {
      out += "ss";
      continue;
    }
    out += SINGLE[ch] ?? ch;
  }
  return w[0] !== lower[0] ? out.charAt(0).toUpperCase() + out.slice(1) : out;
}

/** A Cyrillic transcription rewritten with French letters. */
export function frenchTranscription(cyrillic: string): string {
  return cyrillic.replace(/[А-Яа-яЁё]+/g, word);
}
