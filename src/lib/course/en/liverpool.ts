import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Ливерпуль · «Музыка и хобби» · A2, уроки 1–7.
 * Фургон «Hope on Wheels» стоит на набережной у реки Мерси. Рядом каждый день играет уличный музыкант
 * Джейк; его бабушка Морин всю жизнь варит скаус — ливерпульское рагу.
 * Грамматика: Past Continuous (I was playing…), when / while, Past Continuous + Past Simple,
 * описание сцены в рассказе.
 */

const p = (name: string) => pic(`en/liverpool/${name}`);

const liverpool1: Lesson = {
  id: "en-a2-liverpool-1",
  level: "A2",
  cityId: "en-liverpool",
  number: 1,
  title: "What were you doing? — Что ты делал(а)?",
  minutes: 8,
  goals: ["Рассказать, что ты делал(а) в какой-то момент", "Past Continuous: I was playing", "Спросить: What were you doing?"],
  vocabNote: "Past Continuous — «процесс в прошлом»: в тот момент действие шло. I was playing — «я (как раз) играл».",
  vocab: [
    v("enlv1-1", "a busker", "уличный музыкант", "Парень с гитарой играет на набережной, перед ним открытый футляр с монетками.", "Послушать a busker", p("l1-1")),
    v("enlv1-2", "I was playing the guitar.", "Я играл(а) на гитаре.", "Джейк с закрытыми глазами играет на гитаре.", "Послушать I was playing the guitar", p("l1-2")),
    v("enlv1-3", "What were you doing?", "Что ты делал(а)? (в тот момент)", "Том с удивлением смотрит на мокрого Мурзика.", "Послушать What were you doing", p("l1-3")),
    v("enlv1-4", "We were setting up the van.", "Мы готовили фургон к работе.", "Мурзик и Том ставят столики и открывают окошко фургона.", "Послушать We were setting up the van", p("l1-4")),
    v("enlv1-5", "the waterfront", "набережная", "Широкая набережная у реки, большие старинные здания.", "Послушать the waterfront", p("l1-5")),
    v("enlv1-6", "a crowd", "толпа", "Вокруг музыканта собралась толпа.", "Послушать a crowd", p("l1-6")),
    v("enlv1-7", "at that moment", "в тот момент", "Часы на башне показывают ровно двенадцать.", "Послушать at that moment", p("l1-7")),
    v("enlv1-8", "People were dancing!", "Люди танцевали!", "Люди танцуют на набережной под гитару.", "Послушать People were dancing", p("l1-8")),
  ],
  letters: [
    letter("was / were", "Без ударения was звучит коротко [уэз], were — [уэ]: I was [ай уэз] playing, they were [ðэй уэ] dancing.", "We were dancing.", "Мы танцевали."),
    letter("busker = [баскэ]", "U здесь — короткое [а]: busker [баскэ], bus [бас].", "a busker", "уличный музыкант"),
  ],
  dialogue: {
    title: "На набережной",
    note: "Scouse [скаус] — так называют и ливерпульский акцент, и ливерпульское рагу. Mate — «приятель».",
    lines: [
      line("jake", "Hiya! Nice van! I'm Jake. I play here every day.", "Привет! Классный фургон! Я Джейк. Играю здесь каждый день."),
      line("murzik", "We heard you this morning! You were playing the guitar.", "Мы слышали тебя сегодня утром! Ты играл на гитаре."),
      line("jake", "Yeah, and what were you doing?", "Ага, а вы что делали?"),
      line("tom", "We were setting up the van.", "Мы готовили фургон к работе."),
      line("murzik", "And at that moment a big crowd was standing round you. People were dancing!", "И в тот момент вокруг тебя стояла большая толпа. Люди танцевали!"),
      line("jake", "That's Liverpool, mate. Music is everywhere!", "Это Ливерпуль, приятель. Музыка везде!"),
    ],
    gist: choice("enlv1-d1", "Что делали Мурзик и Том, пока Джейк играл?", [
      ["Готовили фургон к работе.", true],
      ["Танцевали.", false],
      ["Спали.", false],
    ]),
  },
  grammar: [
    {
      title: "Past Continuous",
      paragraphs: [
        "Was / were + глагол с -ing: I was playing, you were playing, he / she was playing, we / they were playing.",
        "Так говорят о процессе в определённый момент прошлого: At ten o'clock I was sleeping. — В десять я спал(а) (как раз в это время).",
      ],
      examples: [
        { ru: "What were you doing at 8 o'clock? — I was having breakfast.", en: "Что ты делал(а) в восемь? — Завтракал(а)." },
        { ru: "The sun was shining and people were swimming.", en: "Светило солнце, люди купались." },
      ],
    },
  ],
  tasks: [
    listen("enlv1-t1", "Послушай. Что делали люди вокруг Джейка?", "And at that moment a big crowd was standing round you. People were dancing!", [
      ["Танцевали.", true],
      ["Пели.", false],
      ["Ели.", false],
    ]),
    choice("enlv1-t2", "Как сказать «Мы готовили фургон к работе» (в тот момент)?", [
      ["We were setting up the van.", true],
      ["We was setting up the van.", false],
      ["We were set up the van.", false],
    ], { skill: "grammar" }),
    fill("enlv1-t3", "Выбери правильное слово.", "At ten o'clock she", "sleeping.", "was", ["was", "were", "is"], { skill: "grammar" }),
    read("enlv1-t4", "Прочитай пост Джейка. Где он играл вчера?", "Yesterday I was playing at the waterfront all day. In the evening I was busking near the station. Thanks for listening, Liverpool!", [
      ["На набережной, а вечером у вокзала.", true],
      ["Только у вокзала.", false],
      ["В концертном зале.", false],
    ]),
    match("enlv1-t5", "Соедини пары.", [
      ["a busker", "уличный музыкант"],
      ["the waterfront", "набережная"],
      ["a crowd", "толпа"],
      ["at that moment", "в тот момент"],
    ], { skill: "words" }),
    tf("enlv1-t6", "We were playing — это настоящее время.", false, "grammar"),
    speak("enlv1-t7", "What were you doing at nine o'clock yesterday?", "At nine o'clock I was having breakfast, and my friend was reading the news.", "В девять я завтракал(а), а мой друг читал новости.", {
      help: "Расскажи вслух, что ты делал(а) вчера в девять.",
    }),
  ],
  reward: {
    itemId: "harmonica",
    itemName: "Губная гармошка",
    itemNameRu: "Harmonica",
    ru: "Music for our van!",
    en: "Музыка для нашего фургона!",
    a11y: "Маленькая блестящая губная гармошка лежит на полке фургона рядом с открыткой с видом на реку.",
    image: p("harmonica"),
    steps: ["У Джейка в кармане всегда две губные гармошки.", "Одну он дарит Мурзику.", "«Every van needs some music», — говорит он. «Каждому фургону нужна музыка».", "Мурзик пробует — получается «уи-и-и»."],
    bridge: "Вечером Джейк заходит на чай. «So what do you do for fun?» — спрашивает он. Что у Мурзика и Тома за хобби?",
  },
};

const liverpool2: Lesson = {
  id: "en-a2-liverpool-2",
  level: "A2",
  cityId: "en-liverpool",
  number: 2,
  title: "What are you into? — Чем увлекаешься?",
  minutes: 8,
  goals: ["Рассказать о хобби", "I'm into…, I'm good at…", "Вспомнить детство: When I was a kid, I was always…"],
  vocabNote: "I'm into… — разговорное «я увлекаюсь». После at и into — существительное или глагол с -ing: I'm good at drawing.",
  vocab: [
    v("enlv2-1", "What are you into?", "Чем увлекаешься?", "Джейк с кружкой чая сидит на ступеньке фургона.", "Послушать What are you into", p("l2-1")),
    v("enlv2-2", "I'm into photography.", "Я увлекаюсь фотографией.", "Том фотографирует закат над рекой.", "Послушать I'm into photography", p("l2-2")),
    v("enlv2-3", "I'm good at drawing.", "Я хорошо рисую.", "Мурзик рисует Джейка с гитарой.", "Послушать I'm good at drawing", p("l2-3")),
    v("enlv2-4", "I'm not very good at singing.", "Я не очень хорошо пою.", "Мурзик поёт, Том затыкает уши.", "Послушать I'm not very good at singing", p("l2-4")),
    v("enlv2-5", "in my spare time", "в свободное время", "Мурзик в гамаке с альбомом.", "Послушать in my spare time", p("l2-5")),
    v("enlv2-6", "a band", "группа (музыкальная)", "Четверо ребят с гитарами и барабаном на маленькой сцене.", "Послушать a band", p("l2-6")),
    v("enlv2-7", "When I was a kid…", "Когда я был(а) маленьким(-ой)…", "Старая фотография: маленький Джейк с игрушечной гитарой.", "Послушать When I was a kid", p("l2-7")),
    v("enlv2-8", "I was always drawing.", "Я всё время рисовал(а).", "Маленький рыжий котёнок рисует на обоях.", "Послушать I was always drawing", p("l2-8")),
  ],
  letters: [
    letter("photography", "Ударение на второй слог: [фэтОгрэфи]. А photo и photograph — на первый: [фОутоу], [фОутэгра:ф].", "I'm into photography.", "Я увлекаюсь фотографией."),
  ],
  dialogue: {
    title: "Вечерний чай",
    note: "Kid — разговорное «ребёнок». Always + Past Continuous — «вечно что-то делал».",
    lines: [
      line("jake", "So what are you into, Murzik?", "Ну а ты чем увлекаешься, Мурзик?"),
      line("murzik", "I'm good at drawing. When I was a kid, I was always drawing on the walls!", "Я хорошо рисую. Когда я был маленьким, я вечно рисовал на стенах!"),
      line("tom", "And I'm into photography. In my spare time I take photos of cities.", "А я увлекаюсь фотографией. В свободное время фотографирую города."),
      line("jake", "Cool. I'm in a band. We play every Friday.", "Круто. Я играю в группе. Мы выступаем каждую пятницу."),
      line("murzik", "Can I sing with you?", "Можно я спою с вами?"),
      line("tom", "Murzik… you're not very good at singing.", "Мурзик… ты не очень хорошо поёшь."),
    ],
    gist: choice("enlv2-d1", "Что делал Мурзик в детстве?", [
      ["Всё время рисовал на стенах.", true],
      ["Играл в группе.", false],
      ["Фотографировал города.", false],
    ]),
  },
  grammar: [
    {
      title: "Good at, into + -ing",
      paragraphs: [
        "После предлогов (at, into, about) глагол стоит с -ing: I'm good at drawing. I'm into cooking.",
        "Always + Past Continuous — про привычку в прошлом, часто с улыбкой или раздражением: He was always singing in the shower!",
      ],
      examples: [
        { ru: "My sister is good at swimming.", en: "Моя сестра хорошо плавает." },
        { ru: "When I was a kid, I was always reading.", en: "В детстве я всё время читал(а)." },
      ],
    },
  ],
  tasks: [
    listen("enlv2-t1", "Послушай. Когда выступает группа Джейка?", "Cool. I'm in a band. We play every Friday.", [
      ["Каждую пятницу.", true],
      ["Каждый день.", false],
      ["Каждое воскресенье.", false],
    ]),
    choice("enlv2-t2", "Как сказать «Я хорошо готовлю»?", [
      ["I'm good at cooking.", true],
      ["I'm good in cook.", false],
      ["I'm good at cook.", false],
    ], { skill: "grammar" }),
    fill("enlv2-t3", "Выбери правильное слово.", "I'm into", "photos of old buildings.", "taking", ["taking", "take", "took"], { skill: "grammar" }),
    read("enlv2-t4", "Прочитай объявление. Кого ищет группа?", "BAND NEEDS A DRUMMER!\nWe play rock and folk every Friday.\nAre you good at playing the drums? Call Jake.", [
      ["Барабанщика.", true],
      ["Певца.", false],
      ["Гитариста.", false],
    ]),
    match("enlv2-t5", "Соедини пары.", [
      ["a band", "группа"],
      ["in my spare time", "в свободное время"],
      ["What are you into?", "Чем увлекаешься?"],
      ["When I was a kid…", "Когда я был(а) маленьким(-ой)…"],
    ], { skill: "words" }),
    script("enlv2-t6", "Новый знакомый спрашивает о хобби.", [
      { speaker: "Джейк", text: "What are you into?" },
      { speaker: "Ты", answer: "I'm into music. I'm good at playing the piano.", options: ["I'm into music. I'm good at playing the piano.", "I'm into music. I'm good at play the piano.", "I was a busker yesterday at that moment."] },
      { speaker: "Джейк", text: "Nice! And when you were a kid?" },
      { speaker: "Ты", answer: "I was always drawing.", options: ["I was always drawing.", "I am always drew.", "I'm not very good at kid."] },
    ], { skill: "speaking" }),
    speak("enlv2-t7", "What are you into?", "I'm into cooking and music. I'm good at baking, but I'm not very good at singing.", "Я увлекаюсь готовкой и музыкой. Я хорошо пеку, но пою не очень.", {
      help: "Расскажи вслух о своих хобби: I'm into…, I'm good at…",
    }),
  ],
  reward: {
    itemId: "jigsaw",
    itemName: "Пазл с Ливерпулем",
    itemNameRu: "Liverpool jigsaw puzzle",
    ru: "A thousand pieces!",
    en: "Тысяча кусочков!",
    a11y: "Коробка пазла с видом ливерпульской набережной стоит на полке фургона; несколько кусочков рассыпаны рядом.",
    image: p("jigsaw"),
    steps: ["У Тома есть ещё одно хобби — пазлы.", "Джейк приносит старый пазл с видом набережной.", "Каждый вечер они собирают по кусочку.", "Через неделю на полке — весь Ливерпуль."],
    bridge: "Утром у фургона сюрприз: на ступеньке лежит что-то в чехле. Кто это оставил, пока они спали?",
  },
};

const liverpool3: Lesson = {
  id: "en-a2-liverpool-3",
  level: "A2",
  cityId: "en-liverpool",
  number: 3,
  title: "While we were sleeping — Пока мы спали",
  minutes: 8,
  goals: ["Рассказать о неожиданном событии", "Past Continuous + Past Simple", "When и while"],
  vocabNote: "Длинное действие — Past Continuous, короткое, которое его прервало, — Past Simple: I was sleeping when the phone rang.",
  vocab: [
    v("enlv3-1", "while", "пока, в то время как", "Луна над фургоном, внутри все спят.", "Послушать while", p("l3-1")),
    v("enlv3-2", "We were sleeping when…", "Мы спали, когда…", "Мурзик и Том спят, у фургона мелькает тень.", "Послушать We were sleeping when", p("l3-2")),
    v("enlv3-3", "someone knocked", "кто-то постучал", "Рука стучит в дверь фургона.", "Послушать someone knocked", p("l3-3")),
    v("enlv3-4", "a ukulele", "укулеле", "Маленькая гитара с четырьмя струнами в чехле.", "Послушать a ukulele", p("l3-4")),
    v("enlv3-5", "a note", "записка", "Листок с надписью от руки, приколотый к чехлу.", "Послушать a note", p("l3-5")),
    v("enlv3-6", "suddenly", "вдруг, внезапно", "Мурзик вскакивает, уши торчком.", "Послушать suddenly", p("l3-6")),
    v("enlv3-7", "I didn't hear anything.", "Я ничего не слышал(а).", "Том зевает и пожимает плечами.", "Послушать I didn't hear anything", p("l3-7")),
    v("enlv3-8", "What happened?", "Что случилось?", "Джейк подходит к фургону с гитарой за спиной.", "Послушать What happened", p("l3-8")),
  ],
  letters: [
    letter("knocked = [нокт]", "В knock буква k не читается: [нок]. Окончание -ed после k — [т]: knocked [нокт].", "Someone knocked.", "Кто-то постучал."),
    letter("ukulele", "По-английски ударение на третий слог: [юкэлЭйли].", "a ukulele", "укулеле"),
  ],
  dialogue: {
    title: "Загадочный подарок",
    note: "Left — прошедшее время от leave (оставить): someone left this — кто-то оставил это. Gig — концерт.",
    lines: [
      line("murzik", "Jake! We were sleeping when someone knocked on the door.", "Джейк! Мы спали, когда кто-то постучал в дверь."),
      line("tom", "I didn't hear anything. I was dreaming about chips.", "Я ничего не слышал. Мне снилась картошка фри."),
      line("murzik", "And while Tom was dreaming, someone left this — a ukulele and a note!", "А пока Тому снился сон, кто-то оставил вот это — укулеле и записку!"),
      line("jake", "What happened next?", "А что было дальше?"),
      line("murzik", "Suddenly I woke up. I opened the door, but the street was empty.", "Я вдруг проснулся. Открыл дверь — а на улице никого."),
      line("jake", "Ha! It was me. I was walking home after a gig. The note says: «You're not good at singing — so play!»", "Ха! Это был я. Я шёл домой после концерта. В записке написано: «Ты не умеешь петь — значит, играй!»"),
    ],
    gist: choice("enlv3-d1", "Кто оставил укулеле?", [
      ["Джейк, когда шёл домой после концерта.", true],
      ["Том.", false],
      ["Неизвестный турист.", false],
    ]),
  },
  grammar: [
    {
      title: "Past Continuous + Past Simple",
      paragraphs: [
        "Длинный фон — Past Continuous, короткое событие — Past Simple: I was walking home when it started to rain.",
        "When обычно перед коротким действием, while — перед длинным: While I was cooking, the phone rang.",
      ],
      examples: [
        { ru: "We were having dinner when the lights went out.", en: "Мы ужинали, когда погас свет." },
        { ru: "While he was sleeping, his cat ate his breakfast.", en: "Пока он спал, кот съел его завтрак." },
      ],
    },
  ],
  tasks: [
    listen("enlv3-t1", "Послушай. Что делал Том, когда кто-то постучал?", "I didn't hear anything. I was dreaming about chips.", [
      ["Спал, ему снилась картошка фри.", true],
      ["Жарил картошку.", false],
      ["Играл на укулеле.", false],
    ]),
    choice("enlv3-t2", "Как сказать «Я шёл домой, когда начался дождь»?", [
      ["I was walking home when it started to rain.", true],
      ["I walked home when it was starting rain.", false],
      ["I was walk home when it started to rain.", false],
    ], { skill: "grammar" }),
    fill("enlv3-t3", "Выбери правильное слово.", "", "I was cooking, the phone rang.", "While", ["While", "During", "At"], { skill: "grammar" }),
    read("enlv3-t4", "Прочитай записку на чехле. Что Джейк советует Мурзику?", "For Murzik.\nYou're not good at singing — so play!\nFirst lesson: Friday, 6 pm, by the river.\nJake", [
      ["Играть, а не петь.", true],
      ["Петь громче.", false],
      ["Продать укулеле.", false],
    ]),
    match("enlv3-t5", "Соедини пары.", [
      ["suddenly", "вдруг"],
      ["a note", "записка"],
      ["while", "пока"],
      ["What happened?", "Что случилось?"],
    ], { skill: "words" }),
    tf("enlv3-t6", "В фразе I was sleeping when someone knocked короткое действие — knocked.", true, "grammar"),
    speak("enlv3-t7", "What happened to you yesterday?", "I was cooking dinner when my friend called. While we were talking, the soup burnt!", "Я готовил(а) ужин, когда позвонил друг. Пока мы говорили, суп сгорел!", {
      help: "Расскажи вслух короткую историю: was …ing when…",
    }),
  ],
  reward: {
    itemId: "ukulele",
    itemName: "Укулеле",
    itemNameRu: "Ukulele",
    ru: "My own ukulele!",
    en: "Моё собственное укулеле!",
    a11y: "Маленькое жёлтое укулеле висит на стенке фургона на гвоздике; к грифу привязана записка.",
    image: p("ukulele"),
    steps: ["Мурзик вешает укулеле на стенку фургона.", "Записку Джейка он оставляет на грифе.", "В пятницу первый урок у реки.", "Через час он играет три аккорда!"],
    bridge: "В субботу Джейк зовёт их на паром через реку Мерси. «Best view of Liverpool», — обещает он.",
  },
};

const liverpool4: Lesson = {
  id: "en-a2-liverpool-4",
  level: "A2",
  cityId: "en-liverpool",
  number: 4,
  title: "The sun was shining — Светило солнце",
  minutes: 8,
  goals: ["Описать сцену в рассказе", "Past Continuous для фона", "Связать события: then, after that, in the end"],
  vocabNote: "Рассказ часто начинается с Past Continuous — это фон, «декорации»: The sun was shining, the gulls were flying…",
  vocab: [
    v("enlv4-1", "a ferry", "паром", "Бело-красный паром плывёт через широкую реку.", "Послушать a ferry", p("l4-1")),
    v("enlv4-2", "The sun was shining.", "Светило солнце.", "Солнце над рекой, вода блестит.", "Послушать The sun was shining", p("l4-2")),
    v("enlv4-3", "The gulls were screaming.", "Кричали чайки.", "Чайки кружат над паромом с открытыми клювами.", "Послушать The gulls were screaming", p("l4-3")),
    v("enlv4-4", "the deck", "палуба", "Мурзик и Джейк на палубе у перил.", "Послушать the deck", p("l4-4")),
    v("enlv4-5", "the skyline", "силуэт города, панорама", "Панорама Ливерпуля с воды: башни, купола, краны.", "Послушать the skyline", p("l4-5")),
    v("enlv4-6", "After that…", "После этого…", "Паром причаливает к другому берегу.", "Послушать After that", p("l4-6")),
    v("enlv4-7", "In the end…", "В конце концов…", "Все трое сидят на скамейке и смеются.", "Послушать In the end", p("l4-7")),
    v("enlv4-8", "My hat blew away!", "У меня сдуло шляпу!", "Шляпа Тома летит над водой, чайка смотрит на неё.", "Послушать My hat blew away", p("l4-8")),
  ],
  letters: [
    letter("gulls = [галз]", "Gull [гал] — чайка. Не путай с girls [гё:лз] — девочки.", "The gulls were screaming.", "Кричали чайки."),
  ],
  dialogue: {
    title: "На пароме",
    note: "Blew away — прошедшее время от blow away (сдуть). Grab — схватить.",
    lines: [
      line("jake", "Look at the skyline! Best view of Liverpool.", "Посмотрите на панораму! Лучший вид на Ливерпуль."),
      line("murzik", "The sun is shining, the gulls are screaming… I'm drawing it!", "Солнце светит, чайки кричат… Я это рисую!"),
      line("tom", "Oh no! My hat blew away!", "О нет! У меня сдуло шляпу!"),
      line("jake", "Look — a gull grabbed it!", "Смотрите — её схватила чайка!"),
      line("tom", "In the end it dropped my hat on the deck. Phew!", "В конце концов она уронила шляпу на палубу. Фух!"),
      line("murzik", "What a story! Tonight I'll write it in my diary: «The sun was shining, the gulls were screaming…»", "Вот это история! Вечером запишу в дневник: «Светило солнце, кричали чайки…»"),
    ],
    gist: choice("enlv4-d1", "Что случилось со шляпой Тома?", [
      ["Её сдуло, чайка схватила её и уронила на палубу.", true],
      ["Она упала в реку.", false],
      ["Джейк взял её поносить.", false],
    ]),
  },
  grammar: [
    {
      title: "Как рассказать историю",
      paragraphs: [
        "Начало — фон в Past Continuous: It was a sunny day. The sun was shining and the gulls were screaming.",
        "Дальше — события в Past Simple, по порядку: First…, Then…, After that…, In the end…",
      ],
      examples: [
        { ru: "We were sitting on the deck. Then the wind started to blow. After that, my hat blew away.", en: "Мы сидели на палубе. Потом подул ветер. После этого у меня сдуло шляпу." },
        { ru: "In the end, we laughed about it.", en: "В конце концов мы над этим посмеялись." },
      ],
    },
  ],
  tasks: [
    listen("enlv4-t1", "Послушай. Кто схватил шляпу Тома?", "Look — a gull grabbed it!", [
      ["Чайка.", true],
      ["Джейк.", false],
      ["Мурзик.", false],
    ]),
    choice("enlv4-t2", "Как начать рассказ: «Светило солнце, кричали чайки»?", [
      ["The sun was shining and the gulls were screaming.", true],
      ["The sun shines and the gulls scream.", false],
      ["The sun was shine and the gulls was screaming.", false],
    ], { skill: "grammar" }),
    read("enlv4-t3", "Прочитай расписание парома. Как часто ходит паром?", "MERSEY FERRY\nRiver cruise: every hour, 10 am – 5 pm\nThe trip takes 50 minutes.\nCafé on the top deck.", [
      ["Каждый час.", true],
      ["Каждые 50 минут.", false],
      ["Два раза в день.", false],
    ]),
    fill("enlv4-t4", "Выбери правильное слово.", "We were sitting on the deck when the wind", "to blow.", "started", ["started", "was start", "starts"], { skill: "grammar" }),
    match("enlv4-t5", "Соедини пары.", [
      ["a ferry", "паром"],
      ["the deck", "палуба"],
      ["the skyline", "панорама города"],
      ["In the end…", "В конце концов…"],
    ], { skill: "words" }),
    tf("enlv4-t6", "Gulls и girls звучат одинаково.", false, "words"),
    speak("enlv4-t7", "Tell me about a nice day you remember.", "It was a sunny day. The birds were singing and we were walking in the park. Then we had a picnic. In the end, it started to rain!", "Был солнечный день. Пели птицы, мы гуляли в парке. Потом устроили пикник. А в конце пошёл дождь!", {
      help: "Расскажи вслух историю: сначала фон, потом события.",
    }),
  ],
  reward: {
    itemId: "ship-bottle",
    itemName: "Корабль в бутылке",
    itemNameRu: "Ship in a bottle",
    ru: "A ship in a bottle!",
    en: "Корабль в бутылке!",
    a11y: "На полке фургона лежит стеклянная бутылка, внутри — крошечный бело-красный паром.",
    image: p("ship-bottle"),
    steps: ["На пароме есть маленький магазинчик.", "Мурзик покупает корабль в бутылке — копию парома.", "«How did they put it in there?» — удивляется Том.", "Теперь паром всегда плывёт по полке фургона."],
    bridge: "Вечером беда: торт для Джейка пропал! Мурзик берёт блокнот и становится детективом.",
  },
};

const liverpool5: Lesson = {
  id: "en-a2-liverpool-5",
  level: "A2",
  cityId: "en-liverpool",
  number: 5,
  title: "Who ate the cake? — Кто съел торт?",
  minutes: 8,
  goals: ["Спросить, что кто делал в какое время", "Вопросы в Past Continuous", "Короткие ответы: Yes, I was. / No, I wasn't."],
  vocabNote: "Вопрос: Were you sleeping? — Yes, I was. / No, I wasn't. Where was he going? What were they doing?",
  vocab: [
    v("enlv5-1", "a detective", "детектив, сыщик", "Мурзик в клетчатой кепке с лупой.", "Послушать a detective", p("l5-1")),
    v("enlv5-2", "Where were you at six?", "Где ты был(а) в шесть?", "Мурзик строго смотрит на Тома через лупу.", "Послушать Where were you at six", p("l5-2")),
    v("enlv5-3", "Were you sleeping? — No, I wasn't.", "Ты спал(а)? — Нет.", "Том качает головой, держа в руках гитару Джейка.", "Послушать Were you sleeping", p("l5-3")),
    v("enlv5-4", "crumbs", "крошки", "Дорожка крошек ведёт от стола к двери.", "Послушать crumbs", p("l5-4")),
    v("enlv5-5", "the plate was empty", "тарелка была пустая", "Пустая тарелка, только одна вишенка.", "Послушать the plate was empty", p("l5-5")),
    v("enlv5-6", "It wasn't me!", "Это не я!", "Джейк поднимает руки вверх.", "Послушать It wasn't me", p("l5-6")),
    v("enlv5-7", "I've got a clue.", "У меня есть улика.", "Мурзик держит в лапе белое перо.", "Послушать I've got a clue", p("l5-7")),
    v("enlv5-8", "a seagull", "чайка", "Толстая чайка на крыше фургона с кремом на клюве.", "Послушать a seagull", p("l5-8")),
  ],
  letters: [
    letter("wasn't = [уознт]", "Was not сливается в wasn't [уознт], were not — в weren't [уё:нт].", "No, I wasn't.", "Нет."),
  ],
  dialogue: {
    title: "Расследование",
    note: "Feather — перо. Cream — крем. Beak — клюв.",
    lines: [
      line("murzik", "The cake was on the table at five. At six the plate was empty! Tom, where were you at six?", "В пять торт был на столе. В шесть тарелка была пустая! Том, где ты был в шесть?"),
      line("tom", "I was buying chips. Ask the man in the shop!", "Я покупал картошку фри. Спроси продавца!"),
      line("murzik", "Jake, were you waiting for us in the van?", "Джейк, ты ждал нас в фургоне?"),
      line("jake", "No, I wasn't! I was playing on the waterfront. It wasn't me!", "Нет! Я играл на набережной. Это не я!"),
      line("murzik", "Hmm… There are crumbs on the roof. And I've got a clue — a white feather!", "Хм… На крыше крошки. И у меня есть улика — белое перо!"),
      line("tom", "Look! A seagull — with cream on its beak!", "Смотри! Чайка — с кремом на клюве!"),
    ],
    gist: choice("enlv5-d1", "Кто съел торт?", [
      ["Чайка.", true],
      ["Том.", false],
      ["Джейк.", false],
    ]),
  },
  grammar: [
    {
      title: "Вопросы в Past Continuous",
      paragraphs: [
        "Was / were встаёт перед подлежащим: Were you sleeping? Was she working? Что / где — в начало: What were you doing? Where was he going?",
        "Короткие ответы: Yes, I was. / No, I wasn't. Yes, they were. / No, they weren't.",
      ],
      examples: [
        { ru: "What were you doing at ten? — I was watching TV.", en: "Что ты делал(а) в десять? — Смотрел(а) телевизор." },
        { ru: "Was it raining? — No, it wasn't.", en: "Шёл дождь? — Нет." },
      ],
    },
  ],
  tasks: [
    listen("enlv5-t1", "Послушай. Где был Джейк в шесть?", "No, I wasn't! I was playing on the waterfront. It wasn't me!", [
      ["Играл на набережной.", true],
      ["Ждал в фургоне.", false],
      ["Покупал картошку фри.", false],
    ]),
    choice("enlv5-t2", "Как спросить «Что ты делал(а) в десять?»", [
      ["What were you doing at ten?", true],
      ["What you were doing at ten?", false],
      ["What was you doing at ten?", false],
    ], { skill: "grammar" }),
    fill("enlv5-t3", "Выбери правильное слово: «Шёл дождь? — Нет».", "Was it raining? — No, it", ".", "wasn't", ["wasn't", "weren't", "didn't"], { skill: "grammar" }),
    read("enlv5-t4", "Прочитай записи детектива Мурзика. Кто был в фургоне в шесть?", "5 pm — cake on the table\n6 pm — Tom: chip shop. Jake: waterfront. Murzik: ukulele practice by the river.\n6 pm — van: nobody inside. Window open!", [
      ["Никого, но окно было открыто.", true],
      ["Том.", false],
      ["Джейк.", false],
    ]),
    match("enlv5-t5", "Соедини пары.", [
      ["a detective", "детектив"],
      ["crumbs", "крошки"],
      ["It wasn't me!", "Это не я!"],
      ["I've got a clue.", "У меня есть улика."],
    ], { skill: "words" }),
    script("enlv5-t6", "Детектив задаёт тебе вопросы.", [
      { speaker: "Мурзик", text: "Where were you at six?" },
      { speaker: "Ты", answer: "I was shopping in town.", options: ["I was shopping in town.", "I am shopping in town.", "I were shop in town."] },
      { speaker: "Мурзик", text: "Were you eating cake?" },
      { speaker: "Ты", answer: "No, I wasn't! It wasn't me!", options: ["No, I wasn't! It wasn't me!", "No, I weren't!", "Yes, it was a seagull."] },
    ], { skill: "speaking" }),
    speak("enlv5-t7", "What were you doing at seven o'clock last night?", "At seven o'clock I was cooking dinner. My family was watching TV.", "В семь я готовил(а) ужин. Моя семья смотрела телевизор.", {
      help: "Ответь вслух детективу: что ты делал(а) вчера в семь.",
    }),
  ],
  reward: {
    itemId: "cake-stand",
    itemName: "Подставка для торта с крышкой",
    itemNameRu: "Cake stand with a dome",
    ru: "No more seagull thieves!",
    en: "Больше никаких воров-чаек!",
    a11y: "На столике фургона стоит стеклянная подставка для торта под прозрачным куполом, внутри — новый торт.",
    image: p("cake-stand"),
    steps: ["Том печёт новый торт.", "Джейк приносит от бабушки стеклянную подставку с крышкой.", "«In Liverpool, you protect your cake from the gulls», — смеётся он.", "Чайка сидит на крыше и грустно смотрит на купол."],
    bridge: "Бабушка Джейка, Морин, хочет познакомиться с «котом-детективом». И зовёт всех на скаус.",
  },
};

const liverpool6: Lesson = {
  id: "en-a2-liverpool-6",
  level: "A2",
  cityId: "en-liverpool",
  number: 6,
  title: "Maureen's scouse — Скаус бабушки Морин",
  minutes: 8,
  goals: ["Понять рецепт и историю блюда", "Past Continuous в воспоминаниях", "Сказать, как долго готовить: for two hours"],
  vocabNote: "Scouse [скаус] — густое рагу из мяса и овощей. От него и пошло прозвище ливерпульцев — scousers.",
  vocab: [
    v("enlv6-1", "a stew", "рагу, тушёное блюдо", "Большая кастрюля с густым рагу.", "Послушать a stew", p("l6-1")),
    v("enlv6-2", "lamb", "баранина", "Кусочки баранины на разделочной доске.", "Послушать lamb", p("l6-2")),
    v("enlv6-3", "carrots and onions", "морковь и лук", "Нарезанная морковь и лук.", "Послушать carrots and onions", p("l6-3")),
    v("enlv6-4", "Let it simmer.", "Пусть тихо кипит.", "Кастрюля на маленьком огне, лёгкий пар.", "Послушать Let it simmer", p("l6-4")),
    v("enlv6-5", "Stir it now and then.", "Помешивай время от времени.", "Мурзик мешает рагу большой ложкой.", "Послушать Stir it now and then", p("l6-5")),
    v("enlv6-6", "sailors", "моряки", "Старая фотография: моряки в порту едят из мисок.", "Послушать sailors", p("l6-6")),
    v("enlv6-7", "pickled red cabbage", "маринованная красная капуста", "Банка фиолетовой капусты рядом с тарелкой.", "Послушать pickled red cabbage", p("l6-7")),
    v("enlv6-8", "It tastes even better the next day.", "На следующий день ещё вкуснее.", "Морин подмигивает и закрывает кастрюлю крышкой.", "Послушать It tastes even better the next day", p("l6-8")),
  ],
  letters: [
    letter("lamb = [лэм]", "В lamb буква b на конце не читается: [лэм]. Так же comb [коум], climb [клайм].", "lamb", "баранина"),
  ],
  dialogue: {
    title: "Кухня Морин",
    note: "Love — ливерпульские бабушки так обращаются ко всем: «дорогой, милый».",
    lines: [
      line("maureen", "So you're the detective! Come in, love. I'm making scouse.", "Так ты и есть детектив! Заходи, милый. Я варю скаус."),
      line("maureen", "Cut the lamb, the carrots and the onions. Then let it simmer for two hours.", "Нарежь баранину, морковь и лук. Потом пусть тихо кипит два часа."),
      line("murzik", "Two hours! What were you doing when you first made it?", "Два часа! А что вы делали, когда впервые его сварили?"),
      line("maureen", "I was working in a café by the docks. The sailors were always hungry!", "Я работала в кафе у доков. Моряки всегда были голодные!"),
      line("tom", "And what do you eat it with?", "А с чем его едят?"),
      line("maureen", "Bread and pickled red cabbage. And it tastes even better the next day!", "С хлебом и маринованной красной капустой. А на следующий день он ещё вкуснее!"),
    ],
    gist: choice("enlv6-d1", "Где работала Морин, когда впервые сварила скаус?", [
      ["В кафе у доков.", true],
      ["На пароме.", false],
      ["В музыкальном клубе.", false],
    ]),
  },
  grammar: [
    {
      title: "For + время: как долго",
      paragraphs: [
        "For + отрезок времени — «в течение»: let it simmer for two hours, cook it for ten minutes, I was waiting for an hour.",
        "Чаще всего с Past Simple: I cooked for three hours! — Я готовил(а) целых три часа!",
      ],
      examples: [
        { ru: "Bake it for forty minutes.", en: "Пеки сорок минут." },
        { ru: "We walked by the river for two hours.", en: "Мы два часа гуляли у реки." },
      ],
    },
  ],
  tasks: [
    listen("enlv6-t1", "Послушай. Сколько варится скаус?", "Then let it simmer for two hours.", [
      ["Два часа.", true],
      ["Двадцать минут.", false],
      ["Всю ночь.", false],
    ]),
    choice("enlv6-t2", "Как сказать «Мы гуляли два часа»?", [
      ["We walked for two hours.", true],
      ["We walked during two hours.", false],
      ["We was walk for two hours.", false],
    ], { skill: "grammar" }),
    read("enlv6-t3", "Прочитай рецепт Морин. Что добавляют в самом конце?", "SCOUSE\n1. Fry the lamb and onions.\n2. Add carrots, potatoes and water.\n3. Simmer for two hours. Stir now and then.\n4. At the end, add salt and pepper.", [
      ["Соль и перец.", true],
      ["Баранину и лук.", false],
      ["Морковь и картошку.", false],
    ]),
    fill("enlv6-t4", "Выбери правильное слово.", "Stir it now and", ".", "then", ["then", "than", "there"], { skill: "words" }),
    match("enlv6-t5", "Соедини пары.", [
      ["a stew", "рагу"],
      ["lamb", "баранина"],
      ["sailors", "моряки"],
      ["Let it simmer.", "Пусть тихо кипит."],
    ], { skill: "words" }),
    tf("enlv6-t6", "В слове lamb буква b не читается.", true, "words"),
    speak("enlv6-t7", "What's your favourite dish? How do you make it?", "My favourite dish is soup. I cut the vegetables and let it simmer for an hour. It tastes even better the next day!", "Моё любимое блюдо — суп. Я режу овощи, и он тихо кипит час. На следующий день он ещё вкуснее!", {
      help: "Расскажи вслух о своём любимом блюде.",
    }),
  ],
  reward: {
    itemId: "stew-pot",
    itemName: "Большая кастрюля",
    itemNameRu: "Big stew pot",
    ru: "A pot for a hundred sailors!",
    en: "Кастрюля на сто моряков!",
    a11y: "Огромная старая эмалированная кастрюля, синяя с белыми крапинками, стоит на плите фургона.",
    image: p("stew-pot"),
    steps: ["Морин отдаёт фургону свою старую кастрюлю.", "«It fed half the docks», — говорит она. «Она кормила пол-порта».", "Кастрюля еле помещается на плите.", "Завтра у окошка фургона — скаус для всех."],
    bridge: "Скаус у фургона продан за час. Пора ехать — и пора вклеить в книгу дороги пятый рецепт.",
  },
};

const liverpool7: Lesson = {
  id: "en-a2-liverpool-7",
  level: "A2",
  cityId: "en-liverpool",
  number: 7,
  title: "Liverpool exam — Экзамен: Ливерпуль",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Рассказать историю в прошедшем времени", "Повторить всё из Ливерпуля"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Ливерпуля.",
  vocab: [
    v("enlv7-1", "a gig", "концерт, выступление (разг.)", "Джейк и его группа на маленькой сцене в пабе.", "Послушать a gig", p("l7-1")),
    v("enlv7-2", "a farewell song", "прощальная песня", "Джейк играет, глядя на Мурзика и Тома.", "Послушать a farewell song", p("l7-2")),
    v("enlv7-3", "Manchester", "Манчестер", "Стрелка на карте от Ливерпуля на восток.", "Послушать Manchester", p("l7-3")),
    v("enlv7-4", "It's not far.", "Это недалеко.", "Короткая дорога между двумя городами.", "Послушать It's not far", p("l7-4")),
    v("enlv7-5", "football fans", "футбольные болельщики", "Люди в красных и голубых шарфах.", "Послушать football fans", p("l7-5")),
    v("enlv7-6", "Take care, love!", "Береги себя, милый!", "Морин обнимает Мурзика.", "Послушать Take care, love", p("l7-6")),
    v("enlv7-7", "I'll practise every day.", "Я буду заниматься каждый день.", "Мурзик прижимает к себе укулеле.", "Послушать I'll practise every day", p("l7-7")),
    v("enlv7-8", "Come and see me play!", "Приходите послушать, как я играю!", "Джейк машет гитарой.", "Послушать Come and see me play", p("l7-8")),
  ],
  letters: [
    letter("practise / practice", "В британском английском practise (с s) — глагол, practice (с c) — существительное. Звучат одинаково: [прэктис].", "I'll practise every day.", "Я буду заниматься каждый день."),
  ],
  dialogue: {
    title: "Прощальный концерт",
    note: "Gig — разговорное «концерт». Farewell — прощание.",
    lines: [
      line("jake", "This is a farewell song for my friends from the van!", "Это прощальная песня для моих друзей из фургона!"),
      line("murzik", "Thank you, Jake! I'll practise the ukulele every day.", "Спасибо, Джейк! Я буду заниматься на укулеле каждый день."),
      line("maureen", "Here's my scouse recipe for your book. Take care, love!", "Вот мой рецепт скауса для вашей книги. Береги себя, милый!"),
      line("tom", "We're going to Manchester tomorrow.", "Завтра мы едем в Манчестер."),
      line("jake", "It's not far. But be careful — the football fans there are crazy!", "Это недалеко. Но будьте осторожны — болельщики там сумасшедшие!"),
      line("jake", "And I'm playing at a festival in London in August. Come and see me play!", "А в августе я играю на фестивале в Лондоне. Приходите послушать!"),
    ],
    gist: choice("enlv7-d1", "Где Джейк будет играть в августе?", [
      ["На фестивале в Лондоне.", true],
      ["В Манчестере.", false],
      ["На пароме.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Ливерпуль",
      paragraphs: [
        "Past Continuous: I was playing, they were dancing. Вопросы: What were you doing? Were you sleeping? — No, I wasn't.",
        "Фон + событие: I was walking home when it started to rain. While I was cooking, the phone rang. Хобби: I'm into…, I'm good at…",
      ],
      examples: [
        { ru: "While Tom was buying chips, a seagull stole our cake!", en: "Пока Том покупал картошку фри, чайка украла наш торт!" },
        { ru: "I'm good at drawing, but I'm not very good at singing.", en: "Я хорошо рисую, но пою не очень." },
      ],
    },
  ],
  tasks: [
    listen("enlv7-t1", "Аудиоистория: Джейк рассказывает, как начал играть. Послушай. Что подарила ему бабушка?", "When I was a kid, my nan was always singing in the kitchen. One day I was sitting on the stairs and listening when she came out with an old guitar. It was my grandad's. She said: «Play, love!» I was playing all night. Now I play every day on the waterfront.", [
      ["Старую гитару дедушки.", true],
      ["Укулеле.", false],
      ["Губную гармошку.", false],
    ]),
    choice("enlv7-t2", "Из рассказа Джейка: что делала бабушка, когда он был маленьким?", [
      ["Всё время пела на кухне.", true],
      ["Играла на гитаре.", false],
      ["Работала в порту.", false],
    ], { skill: "listening" }),
    choice("enlv7-t3", "Как сказать «Пока Том покупал картошку фри, чайка украла торт»?", [
      ["While Tom was buying chips, a seagull stole the cake.", true],
      ["While Tom bought chips, a seagull was steal the cake.", false],
      ["When Tom was buy chips, a seagull stealing the cake.", false],
    ], { skill: "grammar" }),
    read("enlv7-t4", "Прочитай афишу. Сколько стоит вход на концерт Джейка?", "TONIGHT AT THE DOCK PUB\nJake & The Mersey Boys\nStarts at 8 pm\nFree entry!", [
      ["Вход бесплатный.", true],
      ["Восемь фунтов.", false],
      ["Только по приглашениям.", false],
    ]),
    script("enlv7-t5", "Попрощайся с Джейком.", [
      { speaker: "Джейк", text: "So where are you going next?" },
      { speaker: "Ты", answer: "To Manchester. It's not far.", options: ["To Manchester. It's not far.", "I was sleeping when someone knocked.", "Let it simmer."] },
      { speaker: "Джейк", text: "See you in London!" },
      { speaker: "Ты", answer: "See you! I'll practise every day!", options: ["See you! I'll practise every day!", "See you! I was practise yesterday!", "It wasn't me!"] },
    ], { skill: "review" }),
    match("enlv7-t6", "Повторяем Ливерпуль: соедини пары.", [
      ["a busker", "уличный музыкант"],
      ["a ferry", "паром"],
      ["crumbs", "крошки"],
      ["a stew", "рагу"],
    ], { skill: "review" }),
    speak("enlv7-t7", "Tell me a short story about something funny that happened to you.", "Last summer I was sitting in a café when a bird flew in. While everyone was laughing, it took my sandwich!", "Прошлым летом я сидел(а) в кафе, когда залетела птица. Пока все смеялись, она утащила мой бутерброд!", {
      help: "Расскажи вслух смешную историю: was …ing when…, while…",
    }),
  ],
  reward: {
    itemId: "recipe-scouse",
    itemName: "Рецепт «Scouse»",
    itemNameRu: "Scouse recipe card",
    ru: "Our fifth recipe!",
    en: "Наш пятый рецепт!",
    a11y: "Карточка с рецептом скауса в пятнах от соуса вклеена на пятую страницу голубой тетради; на полях нарисованы чайка и гитара.",
    image: p("recipe-scouse"),
    steps: ["Мурзик вклеивает рецепт на пятую страницу книги дороги.", "На карточке — пятнышко от соуса: настоящий рецепт с кухни.", "Джейк рисует на полях гитару, а Мурзик — чайку с кремом на клюве.", "Пять рецептов есть. Впереди — Манчестер."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон на набережной",
    nameRu: "The van on the waterfront",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит на широкой набережной у реки; позади три больших старинных здания, по реке идёт паром.",
  },
  keepsakeId: "recipe-scouse",
  welcomeRu: "Hello, Liverpool!",
  welcomeEn: "Привет, Ливерпуль!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон в Ливерпуле: набережная с тремя большими старинными зданиями, река и уличный музыкант с гитарой.",
  departureImage: p("departure"),
  departureA11y: "Джейк с гитарой и бабушка Морин машут голубому фургону на набережной; над ними кружит чайка.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: губная гармошка, пазл с набережной, укулеле на стене, корабль в бутылке, торт под стеклянным куполом и огромная синяя кастрюля.",
      lines: [
        { en: "У фургона теперь своя музыка — и своя чайка на крыше." },
        { en: "В книге дороги пятый рецепт: скаус бабушки Морин." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик играет на укулеле на набережной, Джейк подыгрывает на гитаре, вокруг танцуют люди.",
      lines: [
        { ru: "Liverpool complete!", en: "Ливерпуль пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "I was playing, and people were dancing!", en: "Я играл, а люди танцевали!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Джейк с гитарой и бабушка Морин машут голубому фургону на набережной; над ними кружит чайка.",
      lines: [
        { ru: "Goodbye, Jake! Goodbye, Maureen!", en: "До свидания, Джейк! До свидания, Морин!" },
        { ru: "Next stop: Manchester!", en: "Следующая остановка: Манчестер!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон едет по короткой дороге на восток, за ним летит чайка.",
      lines: [{ ru: "Liverpool → Manchester", en: "Ливерпуль → Манчестер" }],
    },
    {
      image: pic("en/manchester/arrival"),
      a11y: "Голубой фургон в Манчестере: кирпичные склады у каналов, трамвай и болельщики в красных и голубых шарфах.",
      lines: [{ ru: "Hello, Manchester!", en: "Привет, Манчестер!" }],
    },
  ],
};

export const enLiverpool = {
  id: "en-liverpool",
  name: "Ливерпуль",
  nameEn: "Liverpool",
  lessons: [liverpool1, liverpool2, liverpool3, liverpool4, liverpool5, liverpool6, liverpool7],
  story,
};
