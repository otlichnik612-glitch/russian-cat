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

## Озвучка

- Сейчас все фразы читает голос телефона (`src/lib/course/speech.tsx`): он включается сразу в момент нажатия, иначе iPhone его глушит. Не добавляй перед ним ожидание и не проверяй файлы по сети.
- Записи голосами героев пока не делаем. Когда начнём: файлы кладутся в `public/audio/<голос>/<ключ>.mp3`, и каждый записанный файл вписывается в `src/lib/course/audio-recorded.ts`. Фразы не из этого списка по-прежнему читает телефон.

## Турецкий курс «Мурзик в Турции»

- Второй курс: турецкий для русскоязычных, весь уровень A1 — 98 уроков в 14 городах Турции. История начинается в Париже (пролог: открытка с маркой Стамбула), а уроки — в Кадыкёе, на азиатском берегу Стамбула, у Айше-тейзе. Он открывается на экране выбора языков: родной — русский, изучаемый — турецкий.
- Тексты курса лежат в `src/lib/course/tr/` (один файл на город). Как и в первом курсе, тексты окончательные: не правь, не сокращай и не переводи их. Если что-то кажется ошибкой — напиши в отчёте.
- Интерфейс этого курса на русском (`src/lib/course/ui-text.ts`), голос телефона — турецкий (`tr-TR`). Прогресс у каждого курса свой, переключение языка его не стирает.
- Нужно нарисовать 800 новых картинок в `public/art/tr/…`. Они есть в `docs/grok-image-list.json` и в конце `docs/grok-image-notes.md` (раздел «Turkish course»: стиль, герои, списки по городам). Подписи `draw` в этом курсе на русском.
- У корейского курса появилась английская версия (для англоязычных). Картинки у неё те же самые, рисовать ничего нового не нужно.
- Главное для картинок: **никаких флагов**, никаких надписей, бабушку Асю не показывать никогда; говорящие коты — только семья Мурзика, Ася и Лев, все остальные — люди; мечети рисовать уважительно, снаружи.
- Теперь у курса две версии: для русскоязычных (`src/lib/course/tr/`) и для англоязычных (`src/lib/course/tr/en/`, родной — английский, изучаемый — турецкий). Турецкий текст, сюжет и картинки общие, объяснения написаны отдельно. **Для английской версии новых картинок не нужно** — она берёт те же `public/art/tr/…`.
- Пролог турецкого курса берёт `prologue/1.jpg` из первого курса, а `tr/prologue/2.jpg` (открытка с видом Стамбула и турецкой маркой) и `tr/prologue/3.jpg` (Мурзик и Том у самолёта) — новые.

## Кнопка «Медленно»

- Рядом с каждой кнопкой «Послушать» теперь есть вторая — «Медленно»: та же фраза медленнее. На ней маленький значок — сонный Мурзик. Нарисуй `public/art/ui/slow.jpg` по описанию в `docs/grok-image-notes.md`, раздел «Button “Slowly”». Пока картинки нет, на кнопке просто надпись.

## Первый экран

- Порядок первых экранов: сначала двуязычный экран «Привет! Я Мурзик» с выбором своего языка (картинка `welcome/1`, Мурзик машет лапкой), потом выбор курса (`languages/2`), потом вход — уже на языке ученика (`welcome/2`). Новых картинок для этого не нужно. Картинка `languages/1` больше не используется.

## Картинки на кнопках выбора языка

- У каждой кнопки языка слева маленькая круглая картинка с Мурзиком (`src/lib/course/languages.ts`, `languageBadges`). Нарисуй три новые картинки: `public/art/languages/en.jpg`, `ru.jpg`, `tr.jpg`. Описания — в `docs/grok-image-notes.md`, раздел «Language buttons».
- Английский: Мурзик со стаканчиком кофе навынос машет, как турист в Нью-Йорке, рядом американский и британский флаги. Русский: Мурзик у самовара, рядом матрёшки, **флага нет**. Турецкий: Мурзик гордо стоит у турецкого флага, в лапах стаканчик чая и симит.
- Новые кнопки: арабский (для русскоязычных уже открыт, для англоязычных — «скоро»), корейский (для русскоязычных уже открыт, для англоязычных — «скоро»), китайский («скоро» для всех). Нарисуй `public/art/languages/ar.jpg`, `zh.jpg`, `ko.jpg` по описаниям в `docs/grok-image-notes.md`, раздел «Language buttons». Арабский — без флага (Мурзик на маленьком верблюде, позади дюна и пальма), китайский — с красным фонариком у китайского флага, корейский — с хлопушкой у флага Южной Кореи.
- На первом экране (выбор своего языка) новая кнопка «Français» — пока «скоро» (Bientôt disponible), выбрать нельзя. Нарисуй `public/art/languages/fr.jpg`: Мурзик за столиком парижского кафе, на тарелочке круассан, рядом маленькая чашка кофе, в лапке маленький флажок Франции. Описание — в `docs/grok-image-notes.md`, раздел «Language buttons».
- Флаги разрешены **только** на этих кнопках. В уроках, городах и остальных картинках флагов по-прежнему нет.

## Английский курс «Мурзик и кафе»

- Третий курс: английский для русскоязычных, весь уровень A1 — 98 уроков в 14 городах: Лондон, Оксфорд, Бат, Эдинбург, Дублин, Нью-Йорк, Бостон, Чикаго, Новый Орлеан, Сан-Франциско, Ванкувер, Торонто, Сидней, Веллингтон. Он открывается на экране выбора языков: родной — русский, изучаемый — английский.
- Тексты курса лежат в `src/lib/course/en/` (один файл на город). Тексты окончательные: не правь, не сокращай и не переводи их. Если что-то кажется ошибкой — напиши в отчёте.
- Интерфейс курса на русском, голос телефона — американский английский (`en-US`).
- Нужно нарисовать 842 новые картинки в `public/art/en/…`. Они есть в `docs/grok-image-list.json` и в самом конце `docs/grok-image-notes.md` (раздел «English course»: стиль, герои, списки по городам). Подписи `draw` в этом курсе на русском.
- Главное для картинок: флагов нет; говорящий кот — только Мурзик, все остальные — люди; кафе «Хоуп» — маленькое кафе с синей дверью и колокольчиком.
- Рисовать лучше порциями: например, один город за раз («English course — London», потом «Oxford» и так далее).

## Португальский курс «Мурзик и попугай»

- Четвёртый курс: бразильский португальский, весь уровень A1 — 98 уроков в 14 городах Бразилии: Рио-де-Жанейро, Парати, Сан-Паулу, Куритиба, Флорианополис, Фос-ду-Игуасу, Пантанал, Бразилиа, Ору-Прету, Салвадор, Ресифи и Олинда, Форталеза, Манаус, Белен.
- Это один курс в двух версиях: для русскоязычных (родной — русский, изучаемый — португальский) и для англоязычных (родной — английский, изучаемый — португальский). Португальский текст, сюжет и картинки общие, а объяснения написаны отдельно на каждом языке.
- Тексты лежат в `src/lib/course/pt/` (один файл на город). Каждый текст записан парой `t("по-русски", "in English")`. Тексты окончательные: не правь, не сокращай и не переводи их. Если что-то кажется ошибкой — напиши в отчёте.
- Голос телефона — бразильский португальский (`pt-BR`). Интерфейс — на языке ученика.
- Нужно нарисовать 834 новые картинки: 833 в `public/art/pt/…` (вместе с `pt/bia.jpg` — Биа на экране знакомства) и кнопку языка `public/art/languages/pt.jpg` (Мурзик с футбольным мячом, рядом маленький бразильский флаг — флаг только здесь). Они есть в `docs/grok-image-list.json` и в самом конце `docs/grok-image-notes.md` (раздел «Portuguese course»: стиль, герои, списки по городам). Подписи `draw` в этом курсе на английском.
- Главное для картинок: флагов нет (кроме кнопки языка); говорящий кот — только Мурзик, все остальные — люди; Пипока — обычный зелёный попугай с жёлтой головой, везде один и тот же; Тома в этом курсе нет.
- Рисовать лучше порциями: один город за раз («Portuguese course — Rio de Janeiro», потом «Paraty» и так далее).

## Арабский курс «Сюрприз для бабушки»

- Пятый курс: арабский для русскоязычных. Мурзик и Карим тайно собирают всю семью на 90-летие бабушки Фатимы в Абу-Даби. Пролог — в Париже, уроки начинаются в Марракеше. План: `docs/ARABIC-COURSE-PLAN.md`.
- Тексты лежат в `src/lib/course/ar/` (один файл на город). Тексты окончательные: не правь и не переводи их. Если что-то кажется ошибкой — напиши в отчёте.
- Арабские фразы пишутся справа налево, под ними — транскрипция. Это уже сделано в коде, ничего менять не нужно.
- Картинки — в `public/art/ar/…`. Они есть в `docs/grok-image-list.json` и в самом конце `docs/grok-image-notes.md` (раздел «Arabic course»: стиль, герои, списки по городам). Подписи `draw` в этом курсе на русском.
- Главное для картинок: флагов нет, **никаких букв и надписей**, в том числе арабских; говорящий кот — только Мурзик, все остальные — люди; Тома в этом курсе нет.
- Курс пишется порциями по городам. Рисуй только те города, которые уже есть в списке.


## Корейский курс «Мяу! Снимаем дораму»

- Шестой курс: корейский для русскоязычных. Мурзика зовут сниматься в корейской дораме, он ездит со съёмочной группой по Южной Корее. Спутница — Суа, помощница режиссёра. Пролог — в Париже, уроки начинаются в Сеуле. План: `docs/KOREAN-COURSE-PLAN.md`.
- Тексты лежат в `src/lib/course/ko/` (один файл на город). Тексты окончательные: не правь и не переводи их. Если что-то кажется ошибкой — напиши в отчёте.
- Под корейскими фразами показывается транскрипция. Это уже сделано в коде, ничего менять не нужно.
- Картинки — в `public/art/ko/…`. Они есть в `docs/grok-image-list.json` и в самом конце `docs/grok-image-notes.md` (раздел «Korean course»: стиль, герои, списки по городам). Подписи `draw` в этом курсе на русском.
- Главное для картинок: флагов нет (кроме кнопки языка), **никаких читаемых букв и надписей**, в том числе корейских — вывески, сценарии и бейджики рисуй закорючками; говорящий кот — только Мурзик, все остальные — люди; Тома в этом курсе нет; только Южная Корея.
- Курс пишется порциями по городам. Рисуй только те города, которые уже есть в списке.
- Новая картинка `public/art/ui/beta.jpg`: маленький круглый значок рядом с надписью «Бета-версия» на главном экране. Мурзик с задумчивой мордочкой что-то чинит: молоточек в лапке, рядом большая гайка. Описание — в `docs/grok-image-notes.md`, раздел «Beta label».
