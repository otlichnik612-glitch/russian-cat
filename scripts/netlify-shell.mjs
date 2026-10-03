/**
 * Netlify publishes dist/client as a static folder. The Nitro function can
 * render HTML, but the folder itself has no index.html, so a static deploy
 * 404s. Write the rendered home page into that folder and fall back to it.
 */
import { writeFile } from "node:fs/promises";

if (process.env.NETLIFY !== "true") {
  process.exit(0);
}

const handler = (await import("../.netlify/functions-internal/server/main.mjs")).default;
const origin = process.env.URL || process.env.DEPLOY_PRIME_URL || "http://localhost";
const response = await handler(new Request(`${origin}/`));
if (!response.ok) {
  console.error(`[netlify-shell] homepage render failed: ${response.status}`);
  process.exit(1);
}
const html = await response.text();
if (!html.includes('src="/assets/')) {
  console.error("[netlify-shell] homepage HTML has no script assets");
  process.exit(1);
}
await writeFile("dist/client/index.html", html);
await writeFile("dist/client/_redirects", "/*  /index.html  200\n");
console.log("[netlify-shell] wrote dist/client/index.html");
