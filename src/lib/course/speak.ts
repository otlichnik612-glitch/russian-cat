import { createServerFn } from "@tanstack/react-start";

const cache = new Map<string, string>();
const CACHE_MAX = 300;

function remember(key: string, audio: string) {
  if (cache.has(key)) cache.delete(key);
  cache.set(key, audio);
  if (cache.size > CACHE_MAX) {
    const oldest = cache.keys().next().value;
    if (oldest) cache.delete(oldest);
  }
}

/** Speaks one short Russian line with Ara (Murzik) or Leo (Tom). The key stays on the server. */
export const speakRu = createServerFn({ method: "POST" })
  .validator((input: { text?: string; voice?: string }) => {
    const text = String(input?.text ?? "")
      .normalize("NFC")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 400);
    const voice = input?.voice === "leo" ? "leo" : "ara";
    return { text, voice };
  })
  .handler(async ({ data }): Promise<{ ok: true; audio: string } | { ok: false }> => {
    if (!data.text) return { ok: false };
    const key = `${data.voice}\n${data.text}`;
    const hit = cache.get(key);
    if (hit) return { ok: true, audio: hit };

    const apiKey = process.env.XAI_API_KEY?.trim();
    if (!apiKey) return { ok: false };

    const res = await fetch("https://api.x.ai/v1/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ text: data.text, voice_id: data.voice, language: "ru" }),
    });
    if (!res.ok) return { ok: false };
    const audio = Buffer.from(await res.arrayBuffer()).toString("base64");
    remember(key, audio);
    return { ok: true, audio };
  });
