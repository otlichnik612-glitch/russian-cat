import { createFileRoute } from "@tanstack/react-router";

/**
 * One recorded phrase as mp3: /api/voice/<language>/<character>/<key>.
 * The address carries ?v=<when it was recorded>, so a re-recorded phrase gets a new address
 * and the old file can be kept in the browser cache for a year.
 */
export const Route = createFileRoute("/api/voice/$lang/$speaker/$key")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { voiceClip } = await import("@/lib/voice/voice.server");
        const key = params.key.replace(/\.mp3$/, "");
        const audio = /^[0-9a-f]{8}$/.test(key) ? await voiceClip(params.lang, params.speaker, key).catch(() => null) : null;
        if (!audio) return new Response("not found", { status: 404, headers: { "cache-control": "no-store" } });
        return new Response(audio as BodyInit, {
          headers: { "content-type": "audio/mpeg", "cache-control": "public, max-age=31536000, immutable" },
        });
      },
    },
  },
});
