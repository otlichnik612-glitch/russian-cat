#!/usr/bin/env node
/**
 * Draw the missing course pictures with fal.ai (FLUX.2 [flash] edit).
 *
 *   FAL_KEY=… node scripts/generate-images-fal.mjs                 # Portuguese course, 50 new pictures
 *   FAL_KEY=… COURSE=tr LIMIT=20 node scripts/generate-images-fal.mjs
 *   DRY_RUN=1 node scripts/generate-images-fal.mjs                 # only list what would be drawn
 *
 * Settings (environment variables):
 *   FAL_KEY   fal.ai key (required unless DRY_RUN=1). Never write it into code.
 *   COURSE    which course to draw: pt (default), tr, en, ar, ko, ru.
 *   LIMIT     how many NEW pictures to draw in this run (default 50), then stop.
 *   DRY_RUN   1 = send nothing, only print the list.
 *
 * Where things are:
 *   - The text of every picture is the `draw` note in docs/grok-image-list.json.
 *   - Four reference pictures (style and look of the characters) are sent with every request:
 *     assets/references/ref1.jpg … ref4.jpg.
 *   - Results are saved to public/art/<the same path as in the list, without public/art/>,
 *     for example public/art/pt/rio/l1-1.jpg stays public/art/pt/rio/l1-1.jpg.
 *
 * Existing files are never touched: if the picture is already in public/art/
 * (or already drawn in public/art/), it is skipped completely — no request to the API,
 * no redrawing, no overwriting.
 */
import { existsSync, linkSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIST = join(ROOT, "docs/grok-image-list.json");
const OUT_DIR = join(ROOT, "public/art");
/** Temporary files live outside public/, so a half-written picture never ships or blocks a redraw. */
const TMP_DIR = join(ROOT, ".fal-tmp");
const REFERENCES = [1, 2, 3, 4].map((n) => join(ROOT, `assets/references/ref${n}.jpg`));

const ENDPOINT = "fal-ai/flux-2/flash/edit";
const QUEUE_URL = `https://queue.fal.run/${ENDPOINT}`;

const COURSE = (process.env.COURSE || "pt").trim().toLowerCase();
const LIMIT = Number.parseInt(process.env.LIMIT || "50", 10);
const DRY_RUN = process.env.DRY_RUN === "1";
const FAL_KEY = process.env.FAL_KEY;

/** Folders of the other courses inside public/art/. Everything else (city folders) is the Russian course. */
const COURSE_FOLDERS = ["pt", "tr", "en", "ar", "ko"];
const NOT_A_COURSE = ["welcome", "prologue", "languages", "ui"];

/** The four references show the style; the note says what to draw. */
const REFERENCE_HINT =
  "Use the reference images only for the art style and for how the recurring characters look. Do not copy their scenes.";

/** Picture sizes from docs/grok-image-notes.md: phrase pictures and rewards are square, scenes are portrait. */
function sizeFor(kind) {
  return kind === "scene" ? { width: 1152, height: 1728 } : { width: 1408, height: 1408 };
}

function courseOf(file) {
  const folder = file.replace(/^public\/art\//, "").split("/")[0];
  if (COURSE_FOLDERS.includes(folder)) return folder;
  if (NOT_A_COURSE.includes(folder) || !file.slice("public/art/".length).includes("/")) return "";
  return "ru";
}

function outPath(file) {
  return join(OUT_DIR, file.replace(/^public\/art\//, ""));
}

function alreadyThere(entry) {
  return existsSync(outPath(entry.file)) || existsSync(join(ROOT, entry.file));
}

function dataUri(path) {
  return `data:image/jpeg;base64,${readFileSync(path).toString("base64")}`;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function falJson(url, init = {}) {
  const res = await fetch(url, {
    ...init,
    headers: { Authorization: `Key ${FAL_KEY}`, "Content-Type": "application/json", ...(init.headers || {}) },
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`fal.ai ${res.status}: ${text.slice(0, 300)}`);
  return JSON.parse(text);
}

/** Send one request to the queue, wait for it, return the picture bytes. */
async function draw(entry, references) {
  const submitted = await falJson(QUEUE_URL, {
    method: "POST",
    body: JSON.stringify({
      prompt: `${entry.draw}\n\n${REFERENCE_HINT}`,
      image_urls: references,
      image_size: sizeFor(entry.kind),
      num_images: 1,
      output_format: "jpeg",
    }),
  });
  const statusUrl = submitted.status_url;
  const responseUrl = submitted.response_url;
  for (let i = 0; i < 300; i++) {
    const status = await falJson(statusUrl);
    if (status.status === "COMPLETED") break;
    if (i === 299) throw new Error("fal.ai: no answer after 10 minutes");
    await sleep(2000);
  }
  const result = await falJson(responseUrl);
  const url = result?.images?.[0]?.url;
  if (!url) throw new Error(`fal.ai: no picture in the answer: ${JSON.stringify(result).slice(0, 300)}`);
  const img = await fetch(url);
  if (!img.ok) throw new Error(`download ${img.status}`);
  return Buffer.from(await img.arrayBuffer());
}

/** Save without ever overwriting: link() fails if the target already exists. */
function saveNew(target, bytes) {
  mkdirSync(dirname(target), { recursive: true });
  mkdirSync(TMP_DIR, { recursive: true });
  const tmp = join(TMP_DIR, `${process.pid}-${Date.now()}.jpg`);
  writeFileSync(tmp, bytes);
  try {
    linkSync(tmp, target);
  } finally {
    unlinkSync(tmp);
  }
}

async function main() {
  if (![...COURSE_FOLDERS, "ru"].includes(COURSE)) {
    console.error(`COURSE must be one of: ${[...COURSE_FOLDERS, "ru"].join(", ")}`);
    process.exit(1);
  }
  if (!Number.isFinite(LIMIT) || LIMIT < 1) {
    console.error("LIMIT must be a positive number.");
    process.exit(1);
  }

  const list = JSON.parse(readFileSync(LIST, "utf8"));
  const course = list.filter((e) => courseOf(e.file) === COURSE && e.draw);
  const todo = course.filter((e) => !alreadyThere(e));
  console.log(`Course ${COURSE}: ${course.length} pictures in the list, ${course.length - todo.length} already exist, ${todo.length} missing.`);
  console.log(`This run draws at most ${LIMIT}.`);

  if (DRY_RUN) {
    for (const e of todo.slice(0, LIMIT)) console.log(`would draw ${outPath(e.file).slice(ROOT.length + 1)}`);
    return;
  }

  if (!FAL_KEY) {
    console.error("FAL_KEY is not set.");
    process.exit(1);
  }
  const missingRefs = REFERENCES.filter((p) => !existsSync(p));
  if (missingRefs.length) {
    console.error(`Reference pictures are missing: ${missingRefs.map((p) => p.slice(ROOT.length + 1)).join(", ")}`);
    process.exit(1);
  }
  const references = REFERENCES.map(dataUri);

  let made = 0;
  let failedInARow = 0;
  for (const entry of todo) {
    if (made >= LIMIT) break;
    const target = outPath(entry.file);
    // Check again right before the request: another run may have saved it meanwhile.
    if (alreadyThere(entry)) {
      console.log(`skip (exists) ${target.slice(ROOT.length + 1)}`);
      continue;
    }
    try {
      const bytes = await draw(entry, references);
      if (existsSync(target)) {
        console.log(`skip (appeared meanwhile) ${target.slice(ROOT.length + 1)}`);
        continue;
      }
      saveNew(target, bytes);
      made++;
      failedInARow = 0;
      console.log(`[${made}/${LIMIT}] saved ${target.slice(ROOT.length + 1)}`);
    } catch (err) {
      failedInARow++;
      console.error(`failed ${entry.file}: ${err.message}`);
      if (failedInARow >= 3) {
        console.error("Three failures in a row, stopping.");
        process.exit(1);
      }
    }
  }
  console.log(`Done: ${made} new pictures.`);
}

main();
