/** A course's speech language as the Grok API wants it ("ko-KR" → "ko", "pt-BR" stays, Arabic → "ar-SA"). */
export function grokLanguage(speechLang: string): string {
  if (speechLang.startsWith("pt")) return "pt-BR";
  if (speechLang.startsWith("ar")) return "ar-SA";
  return speechLang.slice(0, 2);
}
