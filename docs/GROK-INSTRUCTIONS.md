# Instructions for Grok Build

Russian Cat now has the whole of level A1: fourteen finished cities — **Paris**, **London**, **Madrid**, **Rome**, **Berlin**, **Amsterdam**, **Vienna**, **Prague**, **Lisbon**, **Athens**, **Istanbul**, **Warsaw**, **Budapest** and **Edinburgh** — 7 lessons each.
Every text is final: words, translations, dialogues, grammar, every task, every answer option and every correct answer.

**Your only job is to draw the new pictures.**

## Do not change any text or code

- Do not edit, rewrite, shorten, translate, reorder or “improve” anything in `src/lib/course/lessons/` — not the Russian, not the English, not the tasks, not the answers.
- Do not add or remove lessons, words or tasks.
- Do not change any other code file. The app already knows about every finished city.
- Keep the “Developer panel” button and `src/components/cat/dev.tsx` exactly as they are. The author uses them to test lessons.
- If you think a text is wrong, do not fix it. Write it in your report instead.

## Draw the pictures

1. Read `docs/grok-image-notes.md`: it has the style rules and the list of all new pictures, grouped by city.
2. The same list is in `docs/grok-image-list.json`. For each entry:
   - `file` — save the picture exactly here, as a JPEG, with exactly this name.
   - `draw` — what the picture must show.
   - `kind` — `phrase` and `reward` are square (1408 × 1408); `scene` is portrait (1152 × 1728).
3. Do not redraw pictures that already exist in `public/art/`. Keep every picture you have already drawn in this project, even if it is missing from this ZIP.
   New in the last versions: all Berlin pictures (`public/art/berlin/…`), all Amsterdam pictures (`public/art/amsterdam/…`), all Vienna pictures (`public/art/vienna/…`), all Prague pictures (`public/art/prague/…`), all Lisbon pictures (`public/art/lisbon/…`), all Athens pictures (`public/art/athens/…`), all Istanbul pictures (`public/art/istanbul/…`), all Warsaw pictures (`public/art/warsaw/…`), all Budapest pictures (`public/art/budapest/…`), all Edinburgh pictures (`public/art/edinburgh/…`), `lyon/arrival.jpg`, and 6 story pictures: `paris/postcard.jpg`, `london/arrival.jpg`, `london/tea-shop.jpg`, `madrid/arrival.jpg`, `madrid/asya-painting.jpg`, `rome/asya-photo.jpg`. (`madrid/welcome.jpg` is no longer used.)
   New very first screens: `languages/1.jpg` (Murzik with a wooden sign with a question mark) and `languages/2.jpg` (Murzik balancing a globe). No flags, no words.
   New opening: three prologue pictures `prologue/1.jpg`, `prologue/2.jpg`, `prologue/3.jpg`, and `paris/postcards.jpg` (two postcards) for the Paris farewell. Grandma Asya must never be shown.
   Asya's two Paris postcards must look clearly different: a small cream one with no stamp (the door postcard) and an older pale blue-grey one with a red stamp and a London postmark. See “Grandma Asya's two Paris postcards” in `docs/grok-image-notes.md`.
   59 phrase cards in earlier cities were changed to add missing A1 words. Their pictures have new names ending in `b` (for example `london/1-2b.jpg`, `rome/3-3b.jpg`) — draw these as new pictures. The old pictures with the same name without `b` are no longer used; you may leave them.
   **Lev**, the old white cat in a hat, is new in Berlin. He must look kind, warm and friendly — drawn in the same cheerful style as Murzik, never dark, sad or scary.
4. Look at each picture after you make it. Check the meaning, the number of things, the direction of arrows, the action and that Murzik and Tom look the same as in `public/art/murzik.jpg` and `public/art/tom.jpg`.
5. Work in batches (for example one lesson at a time).

Missing pictures are safe: the app hides a picture until its file exists, so lessons work before all pictures are ready. Do not put placeholders or emoji in their place.

## After the pictures

Run:

```bash
npm install
npm run typecheck
npm run build
```

Then open the app, finish a lesson and check that the new pictures appear.

## Название и текст ссылки

- Название приложения — **Talky Kitty** (вкладка браузера, надпись на экранах, имя на экране «Домой»).
- Текст предпросмотра ссылки задаётся в `src/lib/og/site.json`: `ogTitle` — «Talky Kitty», `description` — «Learn languages by traveling with a talking cat!» (описание), `url` — https://talkykitty.com, `type` — website. Не переписывай эти поля и не добавляй теги `og:` вручную в `__root.tsx`: платформа всё равно их удаляет и строит заново из `site.json`.
- Картинку предпросмотра (`public/og.jpg`) не меняй.

## Вход и сохранение прогресса (Netlify Identity + Neon)

- Первый запуск: экран «Hi! My name is Murzik!» → экран «Sign in to save your progress.» (Google, почта, «Not now») → выбор языков → пролог → Париж. Код: `src/components/cat/welcome.tsx`, тексты: `src/lib/course/welcome.ts`.
- Нужны две новые картинки: `public/art/welcome/1.jpg` (Мурзик машет лапой) и `public/art/welcome/2.jpg` (Мурзик печатает на ноутбуке). Описания — в `docs/grok-image-notes.md`, раздел Welcome.
- Вход делает **Netlify Identity** (`src/lib/identity/`), а не встроенный Better Auth шаблона. Не включай Better Auth, не добавляй его таблицы и не меняй `VITE_AUTH_ENABLED` ради входа.
- Прогресс и выбор языка сохраняются в Neon через `DATABASE_URL` из настроек Netlify. Таблицы описаны в `migrations/0002_talky_kitty.sql` и создаются сами при сборке. Не вписывай строку подключения в код.
- В предпросмотре Grok Identity нет: кнопки входа говорят, что вход работает на talkykitty.com, а «Not now» ведёт дальше. Это нормально.
- Проверка после публикации: https://talkykitty.com/api/health.
