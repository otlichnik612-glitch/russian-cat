import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Лос-Анджелес · «Пробки и опоздания» · A2, уроки 1–7.
 * Мурзика и Тома пригласили в кулинарную передачу на маленьком телеканале. Продюсер — Дана (около 35).
 * Пробки, опоздание, извинения, репетиция, съёмка с разлитой сальсой. Тако учит готовить Эктор (около 60) —
 * хозяин легендарного фургона с тако; на съёмке он гость передачи.
 * Грамматика: Present Perfect с just, already, yet: We've just left. Have you eaten yet? They've already started.
 */

const p = (name: string) => pic(`en/losangeles/${name}`);

const la1: Lesson = {
  id: "en-a2-losangeles-1",
  level: "A2",
  cityId: "en-losangeles",
  number: 1,
  title: "Stuck in traffic — В пробке",
  minutes: 8,
  goals: ["Сказать, что ты в пробке и опаздываешь", "Just — «только что»", "Have you… yet? — «уже?» в вопросе"],
  vocabNote: "Traffic — движение на дороге (и пробки). A freeway — скоростное шоссе (так говорят в США, особенно в Калифорнии). Running late — опаздываем.",
  vocab: [
    v("enla1-1", "We're stuck in traffic.", "Мы стоим в пробке.", "Жёлтый фургон «Sunny» среди сотен машин на широком шоссе.", "Послушать We're stuck in traffic", p("l1-1")),
    v("enla1-2", "the freeway", "скоростное шоссе", "Шесть полос машин под пальмами.", "Послушать the freeway", p("l1-2")),
    v("enla1-3", "We're running late.", "Мы опаздываем.", "Том нервно смотрит на часы на приборной панели.", "Послушать We're running late", p("l1-3")),
    v("enla1-4", "We've just left.", "Мы только что выехали.", "Мурзик машет из окна: мотель ещё виден позади.", "Послушать We've just left", p("l1-4")),
    v("enla1-5", "Have you left yet?", "Вы уже выехали?", "Дана с наушниками звонит из студии.", "Послушать Have you left yet", p("l1-5")),
    v("enla1-6", "rush hour", "час пик", "Красные стоп-сигналы до самого горизонта.", "Послушать rush hour", p("l1-6")),
    v("enla1-7", "There's been an accident.", "Там произошла авария.", "Мигалки вдалеке, машины объезжают.", "Послушать There's been an accident", p("l1-7")),
    v("enla1-8", "We'll be there in twenty minutes.", "Будем через двадцать минут.", "Навигатор показывает 20 min.", "Послушать We'll be there in twenty minutes", p("l1-8")),
  ],
  letters: [
    letter("yet = [йэт]", "Yet начинается со звука [й]: [йэт]. Не путай с jet [джэт] — реактивный самолёт.", "Have you left yet?", "Вы уже выехали?"),
    letter("traffic = [трЭфик]", "Ударение на первый слог, a — открытое [э].", "stuck in traffic", "в пробке"),
  ],
  dialogue: {
    title: "Звонок из студии",
    note: "Дана — продюсер кулинарной передачи. Мурзика и Тома пригласили на съёмку как «кафе на колёсах».",
    lines: [
      line("dana", "Hi, Tom! It's Dana from the studio. Have you left yet?", "Привет, Том! Это Дана из студии. Вы уже выехали?"),
      line("tom", "Yes, we've just left. But we're stuck in traffic on the freeway.", "Да, мы только что выехали. Но стоим в пробке на шоссе."),
      line("dana", "Oh no. It's rush hour. Are you running late?", "Ой нет. Сейчас час пик. Вы опаздываете?"),
      line("murzik", "A little. There's been an accident ahead.", "Немного. Впереди авария."),
      line("dana", "Is everyone OK?", "Все целы?"),
      line("tom", "I think so — the police are there. We'll be there in twenty minutes. Maybe thirty.", "Кажется, да — там полиция. Будем через двадцать минут. Может, через тридцать."),
      line("dana", "OK. Drive carefully. We'll wait for you!", "Хорошо. Ведите осторожно. Мы вас подождём!"),
    ],
    gist: choice("enla1-d1", "Почему Мурзик и Том опаздывают?", [
      ["Пробка из-за аварии в час пик.", true],
      ["Они проспали.", false],
      ["Сломался фургон.", false],
    ]),
  },
  grammar: [
    {
      title: "Just и yet",
      paragraphs: [
        "Just — «только что»: have / has + just + третья форма. We've just left. She's just called.",
        "Yet — «уже?» в вопросе и «ещё не» в отрицании, всегда в конце: Have you left yet? — Вы уже выехали? We haven't left yet. — Мы ещё не выехали.",
      ],
      examples: [
        { ru: "Dana has just called.", en: "Дана только что звонила." },
        { ru: "Have you had breakfast yet?", en: "Ты уже позавтракал(а)?" },
      ],
    },
  ],
  tasks: [
    listen("enla1-t1", "Послушай. Через сколько они будут на месте?", "We'll be there in twenty minutes. Maybe thirty.", [
      ["Через двадцать или тридцать минут.", true],
      ["Через два часа.", false],
      ["Через пять минут.", false],
    ]),
    choice("enla1-t2", "Как сказать «Мы только что выехали»?", [
      ["We've just left.", true],
      ["We just have leave.", false],
      ["We've left just yet.", false],
    ], { skill: "grammar" }),
    fill("enla1-t3", "Выбери правильное слово: «Вы уже выехали?»", "Have you left", "?", "yet", ["yet", "just", "already yet"], { skill: "grammar" }),
    read("enla1-t4", "Прочитай сообщение от навигатора. Что случилось впереди?", "TRAFFIC ALERT\nI-5 South: accident ahead, 2 lanes closed\nDelay: 25 minutes\nArrival: 9:45 am", [
      ["Авария, закрыты две полосы.", true],
      ["Ремонт дороги.", false],
      ["Дорога свободна.", false],
    ]),
    match("enla1-t5", "Соедини пары.", [
      ["We're stuck in traffic.", "Мы стоим в пробке."],
      ["rush hour", "час пик"],
      ["We're running late.", "Мы опаздываем."],
      ["the freeway", "скоростное шоссе"],
    ], { skill: "words" }),
    tf("enla1-t6", "Дана сердится и не хочет ждать.", false, "listening"),
    speak("enla1-t7", "Hi! Have you left yet? Where are you?", "Yes, we've just left, but we're stuck in traffic. We'll be there in half an hour. Sorry!", "Да, мы только что выехали, но стоим в пробке. Будем через полчаса. Извини!", {
      help: "Ответь вслух на звонок: ты в пробке и опаздываешь.",
    }),
  ],
  reward: {
    itemId: "freeway-map",
    itemName: "Карта шоссе Лос-Анджелеса",
    itemNameRu: "LA freeway map",
    ru: "So many freeways — like spaghetti!",
    en: "Столько шоссе — как спагетти!",
    a11y: "На стене фургона висит карта Лос-Анджелеса: шоссе переплетаются цветными линиями, как спагетти.",
    image: p("freeway-map"),
    steps: ["В пробке Мурзик разглядывает карту.", "Шоссе переплетаются, как спагетти.", "Он обводит студию красным кружком.", "До неё всего десять миль. А они едут уже полчаса."],
    bridge: "Они приезжают на сорок минут позже. Дана встречает их у ворот студии, а Тому очень неловко.",
  },
};

const la2: Lesson = {
  id: "en-a2-losangeles-2",
  level: "A2",
  cityId: "en-losangeles",
  number: 2,
  title: "Sorry we're late! — Извините за опоздание!",
  minutes: 8,
  goals: ["Извиниться и объяснить опоздание", "Already — «уже»", "Спросить, что уже произошло"],
  vocabNote: "Already — «уже» в утверждении: They've already started. Обычно стоит между have и третьей формой.",
  vocab: [
    v("enla2-1", "Sorry we're late!", "Извините за опоздание!", "Том виновато разводит руками у ворот студии.", "Послушать Sorry we're late", p("l2-1")),
    v("enla2-2", "The traffic was terrible.", "Пробки были ужасные.", "Мурзик закатывает глаза.", "Послушать The traffic was terrible", p("l2-2")),
    v("enla2-3", "Have they started yet?", "Они уже начали?", "Закрытая дверь с красной лампой ON AIR.", "Послушать Have they started yet", p("l2-3")),
    v("enla2-4", "They've already started the rehearsal.", "Они уже начали репетицию.", "За стеклом люди ходят с камерами.", "Послушать They've already started the rehearsal", p("l2-4")),
    v("enla2-5", "It won't happen again.", "Это больше не повторится.", "Том прижимает руку к сердцу.", "Послушать It won't happen again", p("l2-5")),
    v("enla2-6", "No worries.", "Не страшно. Ничего.", "Дана улыбается и машет рукой.", "Послушать No worries", p("l2-6")),
    v("enla2-7", "a visitor badge", "пропуск посетителя", "Пластиковый бейдж VISITOR на зажиме.", "Послушать a visitor badge", p("l2-7")),
    v("enla2-8", "Follow me.", "Идите за мной.", "Дана быстро шагает по коридору.", "Послушать Follow me", p("l2-8")),
  ],
  letters: [
    letter("already = [о:лрЭди]", "Ударение на второй слог: al-READ-y.", "They've already started.", "Они уже начали."),
    letter("rehearsal = [рихЁ:рсэл]", "ea здесь звучит как [ё:], ударение на второй слог.", "the rehearsal", "репетиция"),
  ],
  dialogue: {
    title: "У ворот студии",
    note: "No worries — разговорное «ничего страшного»; так говорят в Америке и в Австралии.",
    lines: [
      line("tom", "Dana, hi! Sorry we're late! The traffic was terrible.", "Дана, привет! Извини за опоздание! Пробки были ужасные."),
      line("dana", "No worries. Welcome to LA — everyone's late here.", "Ничего страшного. Добро пожаловать в Лос-Анджелес — здесь все опаздывают."),
      line("murzik", "Have they started yet?", "Они уже начали?"),
      line("dana", "They've already started the rehearsal. But your part is after lunch.", "Они уже начали репетицию. Но ваша часть после обеда."),
      line("tom", "It won't happen again, I promise.", "Это больше не повторится, обещаю."),
      line("dana", "Here are your visitor badges. Follow me — and don't touch the big red button!", "Вот ваши пропуска. Идите за мной — и не трогайте большую красную кнопку!"),
    ],
    gist: choice("enla2-d1", "Когда будет их часть съёмки?", [
      ["После обеда.", true],
      ["Её уже сняли.", false],
      ["Завтра утром.", false],
    ]),
  },
  grammar: [
    {
      title: "Already и yet",
      paragraphs: [
        "Already — «уже» в утверждении: They've already started. I've already eaten.",
        "Yet — «уже?» в вопросе и «ещё не» в отрицании: Have they started yet? — They haven't started yet. По-русски в обоих случаях часто «уже» и «ещё», а по-английски слова разные.",
      ],
      examples: [
        { ru: "I've already read the script.", en: "Я уже прочитал(а) сценарий." },
        { ru: "We haven't had lunch yet.", en: "Мы ещё не обедали." },
      ],
    },
  ],
  tasks: [
    listen("enla2-t1", "Послушай. Что уже началось?", "They've already started the rehearsal. But your part is after lunch.", [
      ["Репетиция.", true],
      ["Обед.", false],
      ["Прямой эфир.", false],
    ]),
    choice("enla2-t2", "Как сказать «Я уже прочитал(а) сценарий»?", [
      ["I've already read the script.", true],
      ["I've read yet the script.", false],
      ["I already have reading the script.", false],
    ], { skill: "grammar" }),
    fill("enla2-t3", "Выбери правильное слово: «Мы ещё не обедали».", "We haven't had lunch", ".", "yet", ["yet", "already", "just"], { skill: "grammar" }),
    read("enla2-t4", "Прочитай расписание на двери студии. Когда снимают «Hope on Wheels»?", "STUDIO 3 — TODAY\n9:00 Rehearsal\n12:00 Lunch\n2:30 pm Hope on Wheels: Tom & Murzik + guest chef Hector\n5:00 pm Wrap", [
      ["В 2:30 дня.", true],
      ["В 9 утра.", false],
      ["В 5 вечера.", false],
    ]),
    match("enla2-t5", "Соедини пары.", [
      ["Sorry we're late!", "Извините за опоздание!"],
      ["It won't happen again.", "Это больше не повторится."],
      ["No worries.", "Ничего страшного."],
      ["Follow me.", "Идите за мной."],
    ], { skill: "words" }),
    tf("enla2-t6", "Дана говорит, что в Лос-Анджелесе все опаздывают.", true, "listening"),
    speak("enla2-t7", "You're late! What happened?", "I'm so sorry I'm late! The traffic was terrible. Have you started yet?", "Прости, что опоздал(а)! Пробки были ужасные. Вы уже начали?", {
      help: "Извинись вслух и объясни опоздание.",
    }),
  ],
  reward: {
    itemId: "studio-pass",
    itemName: "Пропуск на студию",
    itemNameRu: "Studio pass",
    ru: "We're on TV! Well, almost.",
    en: "Мы на телевидении! Ну, почти.",
    a11y: "На зеркале фургона висят два пластиковых пропуска VISITOR — STUDIO 3; на одном фото Мурзика с выпученными глазами.",
    image: p("studio-pass"),
    steps: ["Дана выдаёт им пропуска.", "Фото Мурзика получилось смешное — он моргнул.", "«Ничего, на телевидении все так выглядят», — смеётся Дана.", "Пропуска потом повиснут на зеркале фургона."],
    bridge: "До их части — ещё несколько часов. Дана приносит сценарий: «Вы уже читали? Нет? Тогда читайте — быстро!»",
  },
};

const la3: Lesson = {
  id: "en-a2-losangeles-3",
  level: "A2",
  cityId: "en-losangeles",
  number: 3,
  title: "The rehearsal — Репетиция",
  minutes: 8,
  goals: ["Понять, что нужно сделать перед съёмкой", "Have you… yet? — Not yet / Already", "Говорить о подготовке"],
  vocabNote: "A script — сценарий. Lines — реплики (слова роли). Not yet — «ещё нет».",
  vocab: [
    v("enla3-1", "Have you read the script yet?", "Ты уже прочитал(а) сценарий?", "Дана протягивает Мурзику стопку листов.", "Послушать Have you read the script yet", p("l3-1")),
    v("enla3-2", "Not yet.", "Ещё нет.", "Мурзик виновато прячет листы за спину.", "Послушать Not yet", p("l3-2")),
    v("enla3-3", "I've already learned my lines.", "Я уже выучил(а) свои реплики.", "Том гордо стучит пальцем по виску.", "Послушать I've already learned my lines", p("l3-3")),
    v("enla3-4", "Has the chef arrived yet?", "Шеф-повар уже приехал?", "Пустое кресло с надписью GUEST CHEF.", "Послушать Has the chef arrived yet", p("l3-4")),
    v("enla3-5", "makeup", "грим", "Гримёрша пудрит Мурзику нос.", "Послушать makeup", p("l3-5")),
    v("enla3-6", "Look at the camera.", "Смотри в камеру.", "Огромная камера с красной лампочкой.", "Послушать Look at the camera", p("l3-6")),
    v("enla3-7", "Just be yourself.", "Просто будь собой.", "Дана подмигивает Мурзику.", "Послушать Just be yourself", p("l3-7")),
    v("enla3-8", "We haven't decided yet.", "Мы ещё не решили.", "Том и Мурзик спорят над двумя кастрюлями.", "Послушать We haven't decided yet", p("l3-8")),
  ],
  letters: [
    letter("script = [скрипт]", "Читается почти как по-русски, ударение одно.", "the script", "сценарий"),
    letter("makeup = [мЭйкап]", "Make + up — одно слово, ударение на первый слог.", "Time for makeup!", "Пора на грим!"),
  ],
  dialogue: {
    title: "Гримёрка",
    note: "На телевидении перед съёмкой делают грим даже котам — чтобы нос не блестел под лампами.",
    lines: [
      line("dana", "Murzik, have you read the script yet?", "Мурзик, ты уже прочитал сценарий?"),
      line("murzik", "Not yet. But Tom has.", "Ещё нет. Но Том прочитал."),
      line("tom", "I've already learned my lines! \"Welcome to Hope on Wheels!\"", "Я уже выучил свои реплики! «Добро пожаловать в Hope on Wheels!»"),
      line("dana", "Great. And what are you going to cook? Have you decided yet?", "Отлично. А что вы будете готовить? Уже решили?"),
      line("tom", "We haven't decided yet. Fish and chips or clam chowder…", "Мы ещё не решили. Рыбу с картошкой или похлёбку…"),
      line("dana", "Decide fast! Or make fish tacos with our guest chef — he's bringing his salsa. Has he arrived yet? No? OK. Murzik — makeup. Look at the camera, and just be yourself.", "Решайте быстрее! Или сделайте тако с рыбой вместе с нашим гостем — он привезёт свою сальсу. Приглашённый шеф уже приехал? Нет? Хорошо. Мурзик — на грим. Смотри в камеру и просто будь собой."),
    ],
    gist: choice("enla3-d1", "Кто уже выучил реплики?", [
      ["Том.", true],
      ["Мурзик.", false],
      ["Никто.", false],
    ]),
  },
  grammar: [
    {
      title: "Вопросы и ответы с yet",
      paragraphs: [
        "Have you read it yet? — Yes, I have. / Yes, I've already read it. / Not yet. / No, I haven't read it yet.",
        "Has he / she / it…? — третье лицо: Has the chef arrived yet? — He hasn't arrived yet.",
      ],
      examples: [
        { ru: "Has Dana called yet? — Not yet.", en: "Дана уже звонила? — Ещё нет." },
        { ru: "I haven't finished yet, but I've already started.", en: "Я ещё не закончил(а), но уже начал(а)." },
      ],
    },
  ],
  tasks: [
    listen("enla3-t1", "Послушай. Какие блюда они выбирают?", "We haven't decided yet. Fish and chips or clam chowder…", [
      ["Рыбу с картошкой или похлёбку с моллюсками.", true],
      ["Тако или пончики.", false],
      ["Пиццу или суп.", false],
    ]),
    choice("enla3-t2", "Как спросить «Шеф-повар уже приехал?»", [
      ["Has the chef arrived yet?", true],
      ["Have the chef arrived yet?", false],
      ["Has the chef arrive already yet?", false],
    ], { skill: "grammar" }),
    fill("enla3-t3", "Выбери правильный ответ: «Ты уже прочитал(а) сценарий?» — «Ещё нет».", "", ".", "Not yet", ["Not yet", "Already not", "Yet no"], { skill: "grammar" }),
    read("enla3-t4", "Прочитай чек-лист Даны. Что ещё не сделано?", "BEFORE 2:30\n✔ Read the script — Tom\n✘ Read the script — Murzik\n✔ Makeup\n✘ Choose the dish!", [
      ["Мурзик не прочитал сценарий, блюдо не выбрано.", true],
      ["Не сделан грим.", false],
      ["Всё уже готово.", false],
    ]),
    match("enla3-t5", "Соедини пары.", [
      ["Not yet.", "Ещё нет."],
      ["makeup", "грим"],
      ["Look at the camera.", "Смотри в камеру."],
      ["Just be yourself.", "Просто будь собой."],
    ], { skill: "words" }),
    tf("enla3-t6", "Приглашённый шеф уже приехал.", false, "listening"),
    speak("enla3-t7", "Are you ready for the exam? Have you finished the book yet?", "Not yet. I've already read half of it, but I haven't finished yet.", "Ещё нет. Я уже прочитал(а) половину, но ещё не закончил(а).", {
      help: "Ответь вслух: already…, not yet…",
    }),
  ],
  reward: {
    itemId: "script-pages",
    itemName: "Сценарий с автографами",
    itemNameRu: "Signed script",
    ru: "Our first script!",
    en: "Наш первый сценарий!",
    a11y: "В фургоне на прищепке висит стопка листов сценария с пометками маркером и подписью Даны.",
    image: p("script-pages"),
    steps: ["Мурзик всё-таки читает сценарий — за пять минут.", "Свои две реплики он подчёркивает жёлтым.", "Дана расписывается на первой странице: «Будь собой!»", "Сценарий потом повиснет в фургоне на прищепке."],
    bridge: "Половина третьего. Свет, камера, мотор! Мурзик несёт большую миску сальсы…",
  },
};

const la4: Lesson = {
  id: "en-a2-losangeles-4",
  level: "A2",
  cityId: "en-losangeles",
  number: 4,
  title: "Oops! — Ой!",
  minutes: 8,
  goals: ["Сказать, что только что случилось", "Успокоить и предложить помощь", "Just и yet в живой ситуации"],
  vocabNote: "Oops! — «Ой!» (мелкая неприятность). Spill — пролить, разлить. Mess — беспорядок.",
  vocab: [
    v("enla4-1", "Oops!", "Ой!", "Мурзик застыл с пустой миской.", "Послушать Oops", p("l4-1")),
    v("enla4-2", "I've just spilled the salsa!", "Я только что разлил(а) сальсу!", "Красная сальса растекается по столу.", "Послушать I've just spilled the salsa", p("l4-2")),
    v("enla4-3", "What a mess!", "Какой беспорядок!", "Сальса на столе, на полу и на фартуке Тома.", "Послушать What a mess", p("l4-3")),
    v("enla4-4", "It's not live.", "Это не прямой эфир.", "На экране монитора надпись RECORDING, а не LIVE.", "Послушать It's not live", p("l4-4")),
    v("enla4-5", "Let me help.", "Давай я помогу.", "Седой мужчина в фартуке берёт тряпку.", "Послушать Let me help", p("l4-5")),
    v("enla4-6", "Does anyone have a paper towel?", "У кого-нибудь есть бумажное полотенце?", "Том оглядывается по сторонам.", "Послушать Does anyone have a paper towel", p("l4-6")),
    v("enla4-7", "It happens to everyone.", "Со всеми бывает.", "Эктор улыбается и похлопывает Мурзика по плечу.", "Послушать It happens to everyone", p("l4-7")),
    v("enla4-8", "Take two!", "Дубль два!", "Хлопушка с надписью TAKE 2.", "Послушать Take two", p("l4-8")),
  ],
  letters: [
    letter("spilled = [спилд]", "Spill → spilled: окончание -ed здесь звучит как [д]. В Британии часто spilt [спилт].", "I've just spilled it.", "Я только что пролил(а)."),
    letter("salsa = [сА:лсэ]", "Ударение на первый слог; в Америке первое a — долгое [а:].", "a bowl of salsa", "миска сальсы"),
  ],
  dialogue: {
    title: "Свет, камера…",
    note: "Эктор — гость передачи, хозяин знаменитого фургона с тако. Он приехал как раз вовремя.",
    lines: [
      line("murzik", "Oops! I've just spilled the salsa!", "Ой! Я только что разлил сальсу!"),
      line("tom", "What a mess! Does anyone have a paper towel?", "Какой беспорядок! У кого-нибудь есть бумажное полотенце?"),
      line("dana", "Relax! It's not live. We'll just do it again.", "Спокойно! Это не прямой эфир. Просто снимем ещё раз."),
      line("hector", "Let me help. I'm Hector. I've just arrived — and just in time, I think!", "Давай я помогу. Я Эктор. Я только что приехал — и как раз вовремя, кажется!"),
      line("murzik", "I'm so sorry…", "Простите, пожалуйста…"),
      line("hector", "It happens to everyone. I've spilled salsa on live TV twice!", "Со всеми бывает. Я дважды разливал сальсу в прямом эфире!"),
      line("dana", "OK, everyone ready? Take two!", "Так, все готовы? Дубль два!"),
    ],
    gist: choice("enla4-d1", "Почему разлитая сальса — не страшно?", [
      ["Это не прямой эфир — можно снять ещё раз.", true],
      ["Это был прямой эфир.", false],
      ["Сальсы много в холодильнике.", false],
    ]),
  },
  grammar: [
    {
      title: "Только что случилось: just",
      paragraphs: [
        "Новость, которая случилась секунду назад: I've just spilled the salsa! He's just arrived. The show has just started.",
        "Ещё не: We haven't started yet. She hasn't come yet. И just, и yet — для того, что связано с «сейчас».",
      ],
      examples: [
        { ru: "Oh no, I've just broken a glass!", en: "Ой, я только что разбил(а) стакан!" },
        { ru: "Don't worry, the film hasn't started yet.", en: "Не волнуйся, фильм ещё не начался." },
      ],
    },
  ],
  tasks: [
    listen("enla4-t1", "Послушай. Сколько раз Эктор разливал сальсу в эфире?", "It happens to everyone. I've spilled salsa on live TV twice!", [
      ["Два раза.", true],
      ["Ни разу.", false],
      ["Двенадцать раз.", false],
    ]),
    choice("enla4-t2", "Как сказать «Ой, я только что разбил(а) стакан!»?", [
      ["Oh no, I've just broken a glass!", true],
      ["Oh no, I just have break a glass!", false],
      ["Oh no, I've broken yet a glass!", false],
    ], { skill: "grammar" }),
    fill("enla4-t3", "Выбери правильное слово: «Не волнуйся, фильм ещё не начался».", "Don't worry, the film hasn't started", ".", "yet", ["yet", "just", "already"], { skill: "grammar" }),
    read("enla4-t4", "Прочитай сообщение Даны в рабочем чате. Что случилось?", "Dana: Small salsa accident in Studio 3 😂 It's not live, so no problem. Hector has just arrived and he's helping. Take two in 10 min!", [
      ["Разлили сальсу, но это не прямой эфир.", true],
      ["Эктор опоздал.", false],
      ["Съёмку отменили.", false],
    ]),
    match("enla4-t5", "Соедини пары.", [
      ["Oops!", "Ой!"],
      ["What a mess!", "Какой беспорядок!"],
      ["Let me help.", "Давай я помогу."],
      ["It happens to everyone.", "Со всеми бывает."],
    ], { skill: "words" }),
    tf("enla4-t6", "Эктор приехал рано утром.", false, "listening"),
    script("enla4-t7", "Ты случайно разлил(а) сок у друга. Поговори с ним.", [
      { speaker: "Друг", text: "What happened?" },
      { speaker: "Ты", answer: "Oops! I've just spilled the juice. I'm so sorry!", options: ["Oops! I've just spilled the juice. I'm so sorry!", "Oops! I spill yet the juice!", "Oops! Take two!"] },
      { speaker: "Друг", text: "It happens to everyone." },
      { speaker: "Ты", answer: "Let me help. Do you have a paper towel?", options: ["Let me help. Do you have a paper towel?", "Let me help. Does you have a paper towel?", "Let me help. Rush hour!"] },
    ], { skill: "speaking" }),
  ],
  reward: {
    itemId: "apron-salsa",
    itemName: "Фартук с пятном сальсы",
    itemNameRu: "Salsa-stained apron",
    ru: "A famous stain — it's been on TV!",
    en: "Знаменитое пятно — оно было на телевидении!",
    a11y: "На крючке в фургоне висит белый фартук Тома с большим красным пятном сальсы в форме сердца.",
    image: p("apron-salsa"),
    steps: ["Дубль два проходит отлично.", "Только фартук Тома весь в сальсе.", "Пятно похоже на сердце.", "Том решает его никогда не стирать."],
    bridge: "Из-за сценария они пропустили обед. После съёмки Эктор зовёт их к своему фургону: «Вы уже ели? Нет? Тогда пойдёмте — у меня лучшие тако в городе».",
  },
};

const la5: Lesson = {
  id: "en-a2-losangeles-5",
  level: "A2",
  cityId: "en-losangeles",
  number: 5,
  title: "Hector's taco truck — Фургон Эктора",
  minutes: 8,
  goals: ["Заказать тако", "Have you eaten yet? — Just / already в разговоре о еде", "Говорить о вкусе и остроте"],
  vocabNote: "Spicy — острый. Mild — неострый, мягкий. Toppings — то, что кладут сверху.",
  vocab: [
    v("enla5-1", "Have you eaten yet?", "Вы уже ели?", "Эктор у окошка своего ярко-зелёного фургона.", "Послушать Have you eaten yet", p("l5-1")),
    v("enla5-2", "We haven't had lunch yet.", "Мы ещё не обедали.", "Мурзик держится за живот.", "Послушать We haven't had lunch yet", p("l5-2")),
    v("enla5-3", "I've just made fresh tortillas.", "Я только что сделал(а) свежие лепёшки.", "Стопка тёплых кукурузных лепёшек под полотенцем.", "Послушать I've just made fresh tortillas", p("l5-3")),
    v("enla5-4", "Is it spicy?", "Это острое?", "Мурзик с опаской смотрит на зелёный соус.", "Послушать Is it spicy", p("l5-4")),
    v("enla5-5", "mild", "неострый, мягкий", "Миска с красным соусом и табличкой MILD.", "Послушать mild", p("l5-5")),
    v("enla5-6", "Can I have it without onions?", "Можно без лука?", "Том показывает на лук и качает головой.", "Послушать Can I have it without onions", p("l5-6")),
    v("enla5-7", "a squeeze of lime", "капля сока лайма", "Долька лайма над тако.", "Послушать a squeeze of lime", p("l5-7")),
    v("enla5-8", "These are the best tacos I've ever had.", "Это лучшие тако в моей жизни.", "Том с закрытыми глазами ест тако.", "Послушать These are the best tacos I've ever had", p("l5-8")),
  ],
  letters: [
    letter("tortilla = [тортИйя]", "Испанское слово: ll читается как [й]: tor-TEE-ya. Американцы часто говорят [тортИ:э].", "fresh tortillas", "свежие лепёшки"),
    letter("lime = [лайм]", "i перед согласной и e на конце = [ай]: lime, time.", "a squeeze of lime", "капля лайма"),
  ],
  dialogue: {
    title: "У зелёного фургона",
    note: "Эктор держит фургон с тако уже тридцать лет. Его кукурузные лепёшки — домашние, по рецепту его бабушки из Мексики.",
    lines: [
      line("hector", "So, have you eaten yet?", "Ну что, вы уже ели?"),
      line("murzik", "No, we haven't had lunch yet. I'm starving!", "Нет, мы ещё не обедали. Я умираю с голоду!"),
      line("hector", "Perfect. I've just made fresh tortillas. Chicken or beans?", "Отлично. Я только что сделал свежие лепёшки. С курицей или с фасолью?"),
      line("tom", "Chicken, please. Is it spicy? And can I have it without onions?", "С курицей, пожалуйста. Это острое? И можно без лука?"),
      line("hector", "The green salsa is spicy. The red one is mild. And a squeeze of lime on top!", "Зелёная сальса острая. Красная — мягкая. И капля лайма сверху!"),
      line("tom", "Mmm… These are the best tacos I've ever had.", "Ммм… Это лучшие тако в моей жизни."),
      line("murzik", "I've already eaten three. Can I have a fourth?", "Я уже съел три. Можно четвёртый?"),
    ],
    gist: choice("enla5-d1", "Какая сальса неострая?", [
      ["Красная.", true],
      ["Зелёная.", false],
      ["Обе острые.", false],
    ]),
  },
  grammar: [
    {
      title: "Еда и Present Perfect",
      paragraphs: [
        "Have you eaten yet? — Вы уже ели? We haven't had lunch yet. — Мы ещё не обедали. I've already eaten three. — Я уже съел(а) три.",
        "I've just made… — «я только что сделал(а)» — так предлагают свежую еду: I've just baked bread. I've just made coffee.",
      ],
      examples: [
        { ru: "Have you tried the green salsa yet?", en: "Ты уже пробовал(а) зелёную сальсу?" },
        { ru: "I've just made some coffee. Want some?", en: "Я только что сварил(а) кофе. Хочешь?" },
      ],
    },
  ],
  tasks: [
    listen("enla5-t1", "Послушай. Сколько тако уже съел Мурзик?", "I've already eaten three. Can I have a fourth?", [
      ["Три.", true],
      ["Четыре.", false],
      ["Одно.", false],
    ]),
    choice("enla5-t2", "Как сказать «Я только что сварил(а) кофе. Хочешь?»", [
      ["I've just made some coffee. Want some?", true],
      ["I've made just yet some coffee. Want some?", false],
      ["I just have make coffee. Want some?", false],
    ], { skill: "grammar" }),
    fill("enla5-t3", "Выбери правильное слово: «Ты уже пробовал(а) зелёную сальсу?»", "Have you tried the green salsa", "?", "yet", ["yet", "already yet", "just yet"], { skill: "grammar" }),
    read("enla5-t4", "Прочитай меню Эктора. Сколько стоят два тако с фасолью?", "HECTOR'S TACOS — since 1996\nChicken taco — $4\nBean taco — $3\nSalsa: green (SPICY!) or red (mild)\nLime — free!", [
      ["6 долларов.", true],
      ["8 долларов.", false],
      ["3 доллара.", false],
    ]),
    match("enla5-t5", "Соедини пары.", [
      ["Is it spicy?", "Это острое?"],
      ["mild", "неострый"],
      ["a squeeze of lime", "капля сока лайма"],
      ["Can I have it without onions?", "Можно без лука?"],
    ], { skill: "words" }),
    tf("enla5-t6", "Зелёная сальса у Эктора острая.", true, "listening"),
    speak("enla5-t7", "Have you eaten yet? What would you like?", "Not yet, I'm starving! A chicken taco, please, with the mild salsa and without onions.", "Ещё нет, умираю с голоду! Тако с курицей, пожалуйста, с мягкой сальсой и без лука.", {
      help: "Закажи тако вслух.",
    }),
  ],
  reward: {
    itemId: "lime-squeezer",
    itemName: "Соковыжималка для лайма",
    itemNameRu: "Lime squeezer",
    ru: "A squeeze of lime on everything!",
    en: "Капля лайма на всё!",
    a11y: "На полке фургона лежит ярко-зелёная металлическая выжималка для лайма, рядом — три лайма.",
    image: p("lime-squeezer"),
    steps: ["Эктор дарит им старую выжималку для лайма.", "«Без лайма тако — не тако».", "Мурзик выжимает лайм на всё подряд.", "Даже на пончик. Это была ошибка."],
    bridge: "«Хотите научиться? — спрашивает Эктор. — Завтра в шесть утра. Лепёшки не ждут».",
  },
};

const la6: Lesson = {
  id: "en-a2-losangeles-6",
  level: "A2",
  cityId: "en-losangeles",
  number: 6,
  title: "Making tacos — Готовим тако",
  minutes: 8,
  goals: ["Проверить, что уже сделано на кухне", "Already done! / Not yet!", "Понять рецепт тако"],
  vocabNote: "Dough — тесто. Press — прессовать, придавливать. Already done! — «Уже готово!»",
  vocab: [
    v("enla6-1", "corn masa flour", "кукурузная мука для тортилий", "Мешок жёлтой кукурузной муки.", "Послушать corn masa flour", p("l6-1")),
    v("enla6-2", "a tortilla press", "пресс для лепёшек", "Тяжёлый металлический пресс с ручкой.", "Послушать a tortilla press", p("l6-2")),
    v("enla6-3", "Have you made the dough yet?", "Ты уже сделал(а) тесто?", "Эктор смотрит на миску через очки.", "Послушать Have you made the dough yet", p("l6-3")),
    v("enla6-4", "Already done!", "Уже готово!", "Мурзик гордо показывает круглый шарик теста.", "Послушать Already done", p("l6-4")),
    v("enla6-5", "Press it flat.", "Придави, чтобы стало плоским.", "Мурзик налегает на ручку пресса всем весом.", "Послушать Press it flat", p("l6-5")),
    v("enla6-6", "on a hot griddle", "на горячей плоской сковороде", "Лепёшки на чёрной плоской сковороде; рука Эктора переворачивает их лопаткой.", "Послушать on a hot griddle", p("l6-6")),
    v("enla6-7", "Have you chopped the cilantro yet?", "Ты уже нарезал(а) кинзу?", "Пучок зелёной кинзы на доске.", "Послушать Have you chopped the cilantro yet", p("l6-7")),
    v("enla6-8", "Not yet — just a minute!", "Ещё нет — минутку!", "Том торопливо режет кинзу.", "Послушать Not yet — just a minute", p("l6-8")),
  ],
  letters: [
    letter("dough = [доу]", "gh не читается: dough [доу] — тесто. Doughnut — «тестовый орешек».", "the dough", "тесто"),
    letter("cilantro = [силА:нтроу]", "В Америке кинза — cilantro, в Британии — coriander.", "chopped cilantro", "нарезанная кинза"),
  ],
  dialogue: {
    title: "Шесть утра",
    note: "Горячую сковороду переворачивает Эктор. Мурзик отвечает за тесто и пресс — это безопасно и весело.",
    lines: [
      line("hector", "Good morning! Have you made the dough yet? Corn masa flour, water and a pinch of salt.", "Доброе утро! Ты уже сделал тесто? Кукурузная мука, вода и щепотка соли."),
      line("murzik", "Already done!", "Уже готово!"),
      line("hector", "Good. Now make small balls and put one in the tortilla press. Press it flat.", "Хорошо. Теперь сделай маленькие шарики и положи один в пресс. Придави."),
      line("murzik", "It's so heavy! Done!", "Он такой тяжёлый! Готово!"),
      line("hector", "I'll cook it on a hot griddle — thirty seconds on each side. Tom, have you chopped the cilantro yet?", "Я обжарю её на горячей сковороде — по тридцать секунд с каждой стороны. Том, ты уже нарезал кинзу?"),
      line("tom", "Not yet — just a minute!", "Ещё нет — минутку!"),
      line("hector", "Hurry up! The first customers have already arrived.", "Быстрее! Первые покупатели уже пришли."),
    ],
    gist: choice("enla6-d1", "Сколько жарят лепёшку с каждой стороны?", [
      ["Тридцать секунд.", true],
      ["Три минуты.", false],
      ["Тринадцать секунд.", false],
    ]),
  },
  grammar: [
    {
      title: "На кухне: уже / ещё нет",
      paragraphs: [
        "Проверяем: Have you made the dough yet? Has he chopped the cilantro yet?",
        "Отвечаем: Already done! / Yes, I've already done it. / Not yet! / I haven't done it yet. Just a minute! — Минутку!",
      ],
      examples: [
        { ru: "Have you washed the limes yet? — Already done!", en: "Ты уже помыл(а) лаймы? — Уже готово!" },
        { ru: "The customers have already arrived, but the tortillas aren't ready yet.", en: "Покупатели уже пришли, а лепёшки ещё не готовы." },
      ],
    },
  ],
  tasks: [
    listen("enla6-t1", "Послушай. Из чего тесто для лепёшек?", "Have you made the dough yet? Corn masa flour, water and a pinch of salt.", [
      ["Кукурузная мука, вода и соль.", true],
      ["Пшеничная мука и яйца.", false],
      ["Рис и молоко.", false],
    ]),
    choice("enla6-t2", "Как ответить «Уже готово!»?", [
      ["Already done!", true],
      ["Yet done!", false],
      ["Just yet!", false],
    ], { skill: "grammar" }),
    fill("enla6-t3", "Выбери правильное слово: «Покупатели уже пришли».", "The customers have", "arrived.", "already", ["already", "yet", "still"], { skill: "grammar" }),
    read("enla6-t4", "Прочитай рецепт Эктора. Что делать после пресса?", "HECTOR'S CORN TORTILLAS\n1. Corn masa flour + warm water + a pinch of salt\n2. Make small balls\n3. Press them flat\n4. Cook on a hot griddle, 30 seconds each side (adults only!)\n5. Keep warm under a towel", [
      ["Обжарить на горячей сковороде.", true],
      ["Положить в холодильник.", false],
      ["Сразу нарезать кинзу.", false],
    ]),
    match("enla6-t5", "Соедини пары.", [
      ["corn masa flour", "кукурузная мука для тортилий"],
      ["a tortilla press", "пресс для лепёшек"],
      ["Press it flat.", "Придави, чтобы стало плоским."],
      ["Not yet — just a minute!", "Ещё нет — минутку!"],
    ], { skill: "words" }),
    tf("enla6-t6", "Мурзик сам переворачивает лепёшки на горячей сковороде.", false, "listening"),
    speak("enla6-t7", "Dinner is in five minutes! Have you set the table yet?", "Already done! I've put the plates on the table. But I haven't made the salad yet — just a minute!", "Уже готово! Тарелки я поставил(а). Но салат ещё не сделал(а) — минутку!", {
      help: "Ответь вслух: что уже сделано и что ещё нет.",
    }),
  ],
  reward: {
    itemId: "tortilla-press",
    itemName: "Пресс для лепёшек",
    itemNameRu: "Tortilla press",
    ru: "Press, press — tortilla!",
    en: "Прижал — и лепёшка готова!",
    a11y: "На полке фургона стоит тяжёлый чугунный пресс для лепёшек с длинной ручкой.",
    image: p("tortilla-press"),
    steps: ["К обеду Мурзик делает сто лепёшек.", "Эктор дарит ему старый пресс.", "«Этот пресс помнит мою бабушку».", "Тому приходится нести его — он тяжёлый."],
    bridge: "Вечером Дана присылает сообщение: «Передача выйдет сегодня в восемь! Вы уже видели трейлер?»",
  },
};

const la7: Lesson = {
  id: "en-a2-losangeles-7",
  level: "A2",
  cityId: "en-losangeles",
  number: 7,
  title: "Los Angeles exam — Экзамен: Лос-Анджелес",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Рассказать, что уже сделано и что ещё нет", "Повторить всё из Лос-Анджелеса"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Лос-Анджелеса.",
  vocab: [
    v("enla7-1", "Our fourteenth recipe!", "Наш четырнадцатый рецепт!", "Мурзик держит карточку с рецептом тако.", "Послушать Our fourteenth recipe", p("l7-1")),
    v("enla7-2", "The show has just aired.", "Передача только что вышла в эфир.", "Экран маленького телевизора в фургоне: Мурзик с миской сальсы.", "Послушать The show has just aired", p("l7-2")),
    v("enla7-3", "Have you seen it yet?", "Ты уже видел(а)?", "Дана показывает телефон.", "Послушать Have you seen it yet", p("l7-3")),
    v("enla7-4", "We've already gotten a hundred messages.", "Нам уже пришло сто сообщений.", "Телефон Тома без конца вибрирует.", "Послушать We've already gotten a hundred messages", p("l7-4")),
    v("enla7-5", "You're famous now!", "Теперь вы знамениты!", "Прохожие машут жёлтому фургону.", "Послушать You're famous now", p("l7-5")),
    v("enla7-6", "Texas", "Техас", "Карта: дорога на восток, через пустыню.", "Послушать Texas", p("l7-6")),
    v("enla7-7", "three days on the road", "три дня в дороге", "Бесконечная дорога через пустыню, кактусы.", "Послушать three days on the road", p("l7-7")),
    v("enla7-8", "Don't be late this time!", "В этот раз не опаздывайте!", "Эктор шутливо грозит пальцем.", "Послушать Don't be late this time", p("l7-8")),
  ],
  letters: [
    letter("aired = [эрд]", "Air → aired [эрд]: «вышло в эфир».", "The show has just aired.", "Передача только что вышла."),
  ],
  dialogue: {
    title: "В фургоне у телевизора",
    note: "Остин — столица Техаса. Туда от Лос-Анджелеса больше двух тысяч километров: три дня пути.",
    lines: [
      line("dana", "The show has just aired! Have you seen it yet?", "Передача только что вышла! Вы уже видели?"),
      line("tom", "Yes! And we've already gotten a hundred messages on my phone.", "Да! И нам уже пришло сто сообщений."),
      line("dana", "Everyone loves the salsa part. You're famous now, Murzik!", "Всем нравится момент с сальсой. Теперь ты знаменит, Мурзик!"),
      line("hector", "Here's my recipe for your road book. My grandmother's tacos.", "Вот мой рецепт для вашей книги дороги. Тако моей бабушки."),
      line("murzik", "Our fourteenth recipe! Thank you, Hector.", "Наш четырнадцатый рецепт! Спасибо, Эктор."),
      line("tom", "Tomorrow we're driving to Texas, to Austin. It's a long drive — three days on the road.", "Завтра едем в Техас, в Остин. Ехать долго — три дня в дороге."),
      line("hector", "Leave early — and don't be late this time!", "Выезжайте пораньше — и в этот раз не опаздывайте!"),
    ],
    gist: choice("enla7-d1", "Сколько сообщений уже пришло после передачи?", [
      ["Сто.", true],
      ["Десять.", false],
      ["Ни одного.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Лос-Анджелес",
      paragraphs: [
        "Just — только что: We've just left. I've just spilled the salsa. Already — уже: They've already started. Yet — уже? / ещё не: Have you eaten yet? We haven't started yet. Not yet. Already done!",
        "Опоздания: We're stuck in traffic. We're running late. Sorry we're late! The traffic was terrible. It won't happen again. No worries.",
      ],
      examples: [
        { ru: "We've already packed, but we haven't left yet.", en: "Мы уже собрались, но ещё не выехали." },
        { ru: "Hector has just sent us a message!", en: "Эктор только что прислал нам сообщение!" },
      ],
    },
  ],
  tasks: [
    listen("enla7-t1", "Аудиоистория: Дана рассказывает о съёмке. Сколько дублей было?", "I've worked in TV for twelve years. I've seen a lot of guests, but I've never had a cat on the show before. First they were late — of course, this is LA. Then Murzik spilled the salsa. We did two takes, and the second one was perfect. The show has just aired, and we've already had a thousand comments!", [
      ["Два.", true],
      ["Двенадцать.", false],
      ["Один.", false],
    ]),
    listen("enla7-t2", "Послушай конец рассказа Даны. Сколько комментариев уже пришло?", "The show has just aired, and we've already had a thousand comments!", [
      ["Тысяча.", true],
      ["Сто.", false],
      ["Двенадцать.", false],
    ]),
    choice("enla7-t3", "Как сказать «Мы уже собрались, но ещё не выехали»?", [
      ["We've already packed, but we haven't left yet.", true],
      ["We've yet packed, but we haven't left already.", false],
      ["We already packed, but we haven't leave yet.", false],
    ], { skill: "grammar" }),
    read("enla7-t4", "Прочитай маршрут. Где они будут ночевать первую ночь?", "LA → AUSTIN (about 1,400 miles)\nDay 1: LA → Phoenix (6 hours)\nDay 2: Phoenix → El Paso (6 hours)\nDay 3: El Paso → Austin (8 hours)", [
      ["В Финиксе.", true],
      ["В Эль-Пасо.", false],
      ["В Остине.", false],
    ]),
    script("enla7-t5", "Попрощайся с Даной и Эктором.", [
      { speaker: "Дана", text: "Have you seen the show yet?" },
      { speaker: "Ты", answer: "Yes, we've just watched it! Thank you for everything.", options: ["Yes, we've just watched it! Thank you for everything.", "Yes, we've watched it yet!", "Yes, we're stuck in traffic!"] },
      { speaker: "Эктор", text: "Don't be late this time!" },
      { speaker: "Ты", answer: "We won't! We've already packed.", options: ["We won't! We've already packed.", "We won't! We haven't packed already.", "We won't! Oops!"] },
    ], { skill: "review" }),
    match("enla7-t6", "Повторяем Лос-Анджелес: соедини пары.", [
      ["rush hour", "час пик"],
      ["the script", "сценарий"],
      ["mild", "неострый"],
      ["a tortilla press", "пресс для лепёшек"],
    ], { skill: "review" }),
    speak("enla7-t7", "What have you already done today? What haven't you done yet?", "I've already had breakfast and I've just finished my English lesson. But I haven't called my mom yet.", "Я уже позавтракал(а) и только что закончил(а) урок английского. Но маме ещё не позвонил(а).", {
      help: "Расскажи вслух, что ты уже сделал(а) сегодня и что ещё нет.",
    }),
  ],
  reward: {
    itemId: "recipe-tacos",
    itemName: "Рецепт «Tacos»",
    itemNameRu: "Taco recipe card",
    ru: "Our fourteenth recipe — from Hector's grandmother!",
    en: "Наш четырнадцатый рецепт — от бабушки Эктора!",
    a11y: "Карточка с рецептом тако вклеена на четырнадцатую страницу голубой тетради; в углу — красное пятнышко сальсы.",
    image: p("recipe-tacos"),
    steps: ["Мурзик вклеивает рецепт Эктора на четырнадцатую страницу.", "На карточке — маленькое пятнышко сальсы.", "«Это автограф», — говорит Мурзик.", "Утром жёлтый фургон выезжает в шесть. Без пробок!"],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у студии",
    nameRu: "The van by the studio",
    image: p("home"),
    a11y: "Жёлтый фургон «Sunny» стоит на парковке у телестудии; вокруг пальмы, вдали на холмах — большие белые буквы.",
  },
  keepsakeId: "recipe-tacos",
  welcomeRu: "Hello, Los Angeles!",
  welcomeEn: "Привет, Лос-Анджелес!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Лос-Анджелесе: пальмы, солнце, широкие улицы с пробками и холмы вдали.",
  departureImage: p("departure"),
  departureA11y: "Дана и Эктор машут жёлтому фургону на рассвете; на пустом шоссе — ни одной пробки.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "В фургоне уютно: карта шоссе, два пропуска на зеркале, сценарий на прищепке, фартук с пятном сальсы, выжималка для лайма, пресс для лепёшек и рецепт тако.",
      lines: [
        { en: "Опоздали, разлили сальсу — и всё равно стали звёздами." },
        { en: "В книге дороги четырнадцатый рецепт: тако бабушки Эктора." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "На экране маленького телевизора Мурзик держит пустую миску, а Эктор смеётся; в фургоне Том и Мурзик смотрят передачу.",
      lines: [
        { ru: "Los Angeles complete!", en: "Лос-Анджелес пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "We've just been on TV — and we already have fans!", en: "Мы только что были на ТВ — и у нас уже есть поклонники!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Дана и Эктор машут жёлтому фургону на рассвете; на пустом шоссе — ни одной пробки.",
      lines: [
        { ru: "Goodbye, Los Angeles! Thank you, Dana and Hector!", en: "До свидания, Лос-Анджелес! Спасибо, Дана и Эктор!" },
        { ru: "Next stop: Austin!", en: "Следующая остановка: Остин!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Жёлтый фургон едет на восток через пустыню; кактусы и красные горы.",
      lines: [{ ru: "Los Angeles → Austin", en: "Лос-Анджелес → Остин" }],
    },
    {
      image: pic("en/austin/arrival"),
      a11y: "Мурзик и Том в Остине: широкая река, мосты, живая музыка и дым от барбекю.",
      lines: [{ ru: "Hello, Austin!", en: "Привет, Остин!" }],
    },
  ],
};

export const enLosAngeles = {
  id: "en-losangeles",
  name: "Лос-Анджелес",
  nameEn: "Los Angeles",
  lessons: [la1, la2, la3, la4, la5, la6, la7],
  story,
};
