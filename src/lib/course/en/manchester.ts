import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Манчестер · «Футбол и спор» · A2, уроки 1–7.
 * Фургон «Hope on Wheels» стоит у старого кирпичного склада у канала. Брат и сестра Дэнни и Айша
 * болеют за две разные команды города — «красных» и «синих» — и спорят у окошка фургона каждый день.
 * Их бабушка Эдна печёт лучшие Eccles cakes в Манчестере.
 * Грамматика: превосходная степень (the biggest, the most exciting, the best), as … as, one of the…,
 * вежливый спор: I think…, I don't agree, You've got a point.
 */

const p = (name: string) => pic(`en/manchester/${name}`);

const manchester1: Lesson = {
  id: "en-a2-manchester-1",
  level: "A2",
  cityId: "en-manchester",
  number: 1,
  title: "Who do you support? — За кого болеешь?",
  minutes: 8,
  goals: ["Спросить, за кого болеют", "Превосходная степень: the biggest, the best", "the + -est / the most"],
  vocabNote: "Support a team — болеть за команду. A fan — болельщик, фанат.",
  vocab: [
    v("enmc1-1", "Who do you support?", "За кого ты болеешь?", "Дэнни в красном шарфе и Айша в синем стоят у окошка фургона.", "Послушать Who do you support", p("l1-1")),
    v("enmc1-2", "I support the Reds.", "Я болею за «красных».", "Дэнни гордо поднимает красный шарф.", "Послушать I support the Reds", p("l1-2")),
    v("enmc1-3", "a fan", "болельщик, фанат", "Толпа людей в шарфах у стадиона.", "Послушать a fan", p("l1-3")),
    v("enmc1-4", "the best team", "лучшая команда", "Айша показывает на синий кубок на фото.", "Послушать the best team", p("l1-4")),
    v("enmc1-5", "the biggest stadium", "самый большой стадион", "Огромный стадион с красными трибунами.", "Послушать the biggest stadium", p("l1-5")),
    v("enmc1-6", "the most famous", "самый знаменитый", "Фотографии футболистов на стене паба.", "Послушать the most famous", p("l1-6")),
    v("enmc1-7", "my brother / my sister", "мой брат / моя сестра", "Дэнни и Айша — похожи, но в разных шарфах.", "Послушать my brother, my sister", p("l1-7")),
    v("enmc1-8", "Here we go again!", "Ну, опять начинается!", "Том закатывает глаза, слушая их спор.", "Послушать Here we go again", p("l1-8")),
  ],
  letters: [
    letter("-est = [ист]", "Окончание -est звучит коротко: biggest [бИгист], best [бэст].", "the biggest stadium", "самый большой стадион"),
    letter("support = [сэпО:т]", "Ударение на второй слог; r не звучит: [сэпО:т].", "Who do you support?", "За кого болеешь?"),
  ],
  dialogue: {
    title: "У окошка фургона",
    note: "The Reds и the Blues — так болельщики называют две команды Манчестера по цвету формы.",
    lines: [
      line("danny", "Two cups of tea, please! So, who do you support?", "Две чашки чая, пожалуйста! Ну, а вы за кого болеете?"),
      line("murzik", "Er… I don't know. Who do you support?", "Э-э… Не знаю. А ты за кого?"),
      line("danny", "The Reds! They've got the biggest club stadium in England.", "За «красных»! У них самый большой клубный стадион в Англии."),
      line("aisha", "But the Blues are the best team! I'm Aisha, his sister.", "Зато «синие» — лучшая команда! Я Айша, его сестра."),
      line("danny", "The Reds are the most famous team in the world!", "«Красные» — самая знаменитая команда в мире!"),
      line("tom", "Here we go again…", "Ну, опять начинается…"),
    ],
    gist: choice("enmc1-d1", "Кто такие Дэнни и Айша?", [
      ["Брат и сестра, болеют за разные команды.", true],
      ["Футболисты.", false],
      ["Хозяева кафе.", false],
    ]),
  },
  grammar: [
    {
      title: "Превосходная степень",
      paragraphs: [
        "Короткие слова: the + -est: big → the biggest, old → the oldest, nice → the nicest, happy → the happiest.",
        "Длинные: the most: famous → the most famous, exciting → the most exciting. Исключения: good → the best, bad → the worst.",
      ],
      examples: [
        { ru: "This is the oldest pub in the city.", en: "Это самый старый паб в городе." },
        { ru: "It was the worst day of my life!", en: "Это был худший день в моей жизни!" },
      ],
    },
  ],
  tasks: [
    listen("enmc1-t1", "Послушай. Что Дэнни говорит о стадионе «красных»?", "The Reds! They've got the biggest club stadium in England.", [
      ["Он самый большой в Англии.", true],
      ["Он самый старый.", false],
      ["Он самый красивый.", false],
    ]),
    choice("enmc1-t2", "Как сказать «самая знаменитая команда»?", [
      ["the most famous team", true],
      ["the famousest team", false],
      ["the most famousest team", false],
    ], { skill: "grammar" }),
    fill("enmc1-t3", "Выбери правильное слово.", "The Blues are the", "team!", "best", ["best", "goodest", "most good"], { skill: "grammar" }),
    read("enmc1-t4", "Прочитай табличку у стадиона. Сколько мест на стадионе?", "WELCOME TO THE STADIUM\n74,000 seats — the biggest club stadium in England\nStadium tours: daily, 9:30–17:00", [
      ["74 тысячи.", true],
      ["9 тысяч.", false],
      ["17 тысяч.", false],
    ]),
    match("enmc1-t5", "Соедини пары.", [
      ["a fan", "болельщик"],
      ["the best team", "лучшая команда"],
      ["the biggest stadium", "самый большой стадион"],
      ["Here we go again!", "Ну, опять начинается!"],
    ], { skill: "words" }),
    tf("enmc1-t6", "Good → the best, bad → the worst.", true, "grammar"),
    speak("enmc1-t7", "Who do you support?", "I support my local team. They're not the best, but they've got the friendliest fans!", "Я болею за местную команду. Она не лучшая, зато у неё самые дружелюбные болельщики!", {
      help: "Скажи вслух, за какую команду ты болеешь (можно придумать) и почему.",
    }),
  ],
  reward: {
    itemId: "two-scarves",
    itemName: "Два шарфа — красный и синий",
    itemNameRu: "Two football scarves",
    ru: "One red, one blue — no fighting!",
    en: "Один красный, один синий — без драки!",
    a11y: "Над окошком фургона крест-накрест висят два футбольных шарфа — красный и синий.",
    image: p("two-scarves"),
    steps: ["Дэнни дарит фургону красный шарф.", "Через минуту Айша приносит синий.", "Мурзик вешает их крест-накрест над окошком.", "«Our van supports everyone!» «Наш фургон болеет за всех!»"],
    bridge: "В субботу дерби — матч «красных» и «синих». Дэнни и Айша зовут Мурзика и Тома смотреть его в пабе.",
  },
};

const manchester2: Lesson = {
  id: "en-a2-manchester-2",
  level: "A2",
  cityId: "en-manchester",
  number: 2,
  title: "The derby — Дерби",
  minutes: 8,
  goals: ["Говорить о матче: счёт, гол, ничья", "Рассказать, кто выиграл", "the most exciting, the worst"],
  vocabNote: "Win — выиграть, lose — проиграть, draw — ничья (и сыграть вничью). What's the score? — Какой счёт?",
  vocab: [
    v("enmc2-1", "a match", "матч", "Большой экран в пабе, на нём футбольное поле.", "Послушать a match", p("l2-1")),
    v("enmc2-2", "What's the score?", "Какой счёт?", "Мурзик заглядывает в экран через плечо Тома.", "Послушать What's the score", p("l2-2")),
    v("enmc2-3", "two-one", "два — один (2:1)", "На табло: 2 — 1.", "Послушать two-one", p("l2-3")),
    v("enmc2-4", "Goal!", "Гол!", "Весь паб вскакивает с поднятыми руками.", "Послушать Goal", p("l2-4")),
    v("enmc2-5", "half-time", "перерыв (между таймами)", "На экране надпись HALF-TIME, люди идут за чаем.", "Послушать half-time", p("l2-5")),
    v("enmc2-6", "a draw", "ничья", "На табло 2 — 2, Дэнни и Айша оба вздыхают.", "Послушать a draw", p("l2-6")),
    v("enmc2-7", "They won! / They lost.", "Они выиграли! / Они проиграли.", "Дэнни прыгает, Айша закрывает лицо руками.", "Послушать They won, they lost", p("l2-7")),
    v("enmc2-8", "the most exciting match", "самый захватывающий матч", "Мурзик на краю стула, глаза огромные.", "Послушать the most exciting match", p("l2-8")),
  ],
  letters: [
    letter("score = [ско:]", "R в конце не звучит, долгое [о:]: score [ско:].", "What's the score?", "Какой счёт?"),
    letter("nil = [нил]", "В британском футболе ноль — nil: two-nil (2:0). Ничья 0:0 — nil-nil.", "two-nil", "два — ноль"),
  ],
  dialogue: {
    title: "В пабе",
    note: "Come on! — Давай! (кричат своей команде). Unbelievable — невероятно.",
    lines: [
      line("murzik", "What's the score?", "Какой счёт?"),
      line("aisha", "One-one. It's half-time.", "Один — один. Сейчас перерыв."),
      line("danny", "Come on, Reds! … GOAL! Two-one!", "Давай, «красные»! … ГОЛ! Два — один!"),
      line("aisha", "Oh no… Wait — GOAL! Two-two! It's a draw!", "О нет… Стоп — ГОЛ! Два — два! Ничья!"),
      line("murzik", "That was the most exciting match of my life!", "Это был самый захватывающий матч в моей жизни!"),
      line("tom", "It was your first match, Murzik.", "Это был твой первый матч, Мурзик."),
    ],
    gist: choice("enmc2-d1", "Чем закончился матч?", [
      ["Ничьей, 2:2.", true],
      ["«Красные» выиграли 2:1.", false],
      ["«Синие» выиграли 2:0.", false],
    ]),
  },
  grammar: [
    {
      title: "Of my life, in the world",
      paragraphs: [
        "После превосходной степени — in (место) или of (группа, время): the best team in England, the most exciting match of my life, the oldest of the three.",
        "Win и lose — неправильные глаголы: win → won, lose → lost. Счёт: two-one (2:1), three-nil (3:0).",
      ],
      examples: [
        { ru: "It was the happiest day of my life.", en: "Это был самый счастливый день в моей жизни." },
        { ru: "We lost three-nil.", en: "Мы проиграли ноль — три." },
      ],
    },
  ],
  tasks: [
    listen("enmc2-t1", "Послушай. Какой счёт был в перерыве?", "One-one. It's half-time.", [
      ["1:1.", true],
      ["2:1.", false],
      ["0:0.", false],
    ]),
    choice("enmc2-t2", "Как сказать «Это был лучший день в моей жизни»?", [
      ["It was the best day of my life.", true],
      ["It was the best day in my life ago.", false],
      ["It was the goodest day of my life.", false],
    ], { skill: "grammar" }),
    fill("enmc2-t3", "Выбери правильное слово.", "Our team", "the match yesterday.", "won", ["won", "winned", "win"], { skill: "grammar" }),
    read("enmc2-t4", "Прочитай новость. Кто забил последний гол?", "DERBY: REDS 2 – 2 BLUES\n20' Khan (Blues) 0–1\n45' Smith (Reds) 1–1\n70' Jones (Reds) 2–1\n89' Patel (Blues) 2–2", [
      ["Патель за «синих» на 89-й минуте.", true],
      ["Джонс за «красных».", false],
      ["Смит за «красных».", false],
    ]),
    match("enmc2-t5", "Соедини пары.", [
      ["a draw", "ничья"],
      ["half-time", "перерыв"],
      ["What's the score?", "Какой счёт?"],
      ["They lost.", "Они проиграли."],
    ], { skill: "words" }),
    tf("enmc2-t6", "Two-nil значит 2:0.", true, "words"),
    speak("enmc2-t7", "Tell me about the most exciting game or match you've seen.", "The most exciting match was last year. It was two-two, and the last goal was in the ninetieth minute!", "Самый захватывающий матч был в прошлом году. Два — два, и последний гол — на девяностой минуте!", {
      help: "Расскажи вслух о самом интересном матче или игре, которую ты видел(а).",
    }),
  ],
  reward: {
    itemId: "scoreboard",
    itemName: "Доска для счёта",
    itemNameRu: "Chalk scoreboard",
    ru: "The score: Reds 2, Blues 2, Van 10!",
    en: "Счёт: «красные» 2, «синие» 2, фургон 10!",
    a11y: "На стенке фургона висит маленькая доска, на ней мелом: REDS 2 — BLUES 2.",
    image: p("scoreboard"),
    steps: ["Хозяин паба отдаёт старую маленькую доску для счёта.", "Мурзик вешает её на фургон.", "Он пишет мелом: REDS 2 — BLUES 2.", "Дэнни и Айша каждый день спорят, что там писать."],
    bridge: "Ничья никого не устроила. Утром Дэнни и Айша снова спорят у фургона — и Мурзик решает их помирить.",
  },
};

const manchester3: Lesson = {
  id: "en-a2-manchester-3",
  level: "A2",
  cityId: "en-manchester",
  number: 3,
  title: "Let's agree to disagree — Останемся при своём",
  minutes: 8,
  goals: ["Вежливо спорить", "Согласиться и не согласиться", "As … as: такой же… как"],
  vocabNote: "Англичане спорят вежливо: I see what you mean, but… — «Понимаю, но…». Let's agree to disagree — «Пусть каждый останется при своём».",
  vocab: [
    v("enmc3-1", "I don't agree.", "Я не согласен(-на).", "Айша качает головой, скрестив руки.", "Послушать I don't agree", p("l3-1")),
    v("enmc3-2", "You're right.", "Ты прав(а).", "Дэнни кивает, нехотя.", "Послушать You're right", p("l3-2")),
    v("enmc3-3", "I see what you mean, but…", "Понимаю, о чём ты, но…", "Мурзик поднимает лапу, как судья.", "Послушать I see what you mean, but", p("l3-3")),
    v("enmc3-4", "That's not fair!", "Это нечестно!", "Дэнни возмущённо показывает на табло.", "Послушать That's not fair", p("l3-4")),
    v("enmc3-5", "as good as", "такой же хороший, как", "Две одинаковые чашки — красная и синяя.", "Послушать as good as", p("l3-5")),
    v("enmc3-6", "not as strong as", "не такой сильный, как", "Маленький футболист рядом с большим.", "Послушать not as strong as", p("l3-6")),
    v("enmc3-7", "Calm down!", "Успокойся!", "Том держит две чашки чая между Дэнни и Айшей.", "Послушать Calm down", p("l3-7")),
    v("enmc3-8", "Let's agree to disagree.", "Останемся каждый при своём мнении.", "Дэнни и Айша пожимают руки, улыбаясь.", "Послушать Let's agree to disagree", p("l3-8")),
  ],
  letters: [
    letter("agree = [эгрИ:]", "Ударение на второй слог: agree [эгрИ:], disagree [дисэгрИ:].", "I don't agree.", "Я не согласен(-на)."),
  ],
  dialogue: {
    title: "Мирные переговоры",
    note: "Referee — судья. Point — довод, мысль: You've got a point — «В этом что-то есть».",
    lines: [
      line("danny", "The Reds were better! That goal was not fair!", "«Красные» были лучше! Тот гол был нечестный!"),
      line("aisha", "I don't agree. The Blues were as good as the Reds.", "Я не согласна. «Синие» были не хуже «красных»."),
      line("murzik", "Calm down! Danny, I see what you mean, but it was a draw.", "Успокойтесь! Дэнни, понимаю, о чём ты, но была ничья."),
      line("danny", "Hmm… OK, you're right. The Blues weren't as bad as I said.", "Хм… Ладно, ты прав. «Синие» были не так плохи, как я говорил."),
      line("aisha", "And the Reds' stadium is bigger. You've got a point there.", "А стадион у «красных» и правда больше. Тут ты прав."),
      line("tom", "So… let's agree to disagree?", "Итак… каждый при своём мнении?"),
    ],
    gist: choice("enmc3-d1", "Чем закончился спор?", [
      ["Каждый остался при своём, но без ссоры.", true],
      ["Дэнни перешёл за «синих».", false],
      ["Они поругались и ушли.", false],
    ]),
  },
  grammar: [
    {
      title: "As … as",
      paragraphs: [
        "As + прилагательное + as — «такой же, как»: The Blues are as good as the Reds.",
        "Not as … as — «не такой, как»: Danny isn't as calm as Aisha. Это вежливее, чем сказать worse или weaker.",
      ],
      examples: [
        { ru: "My team isn't as strong as yours — but it's more fun!", en: "Моя команда не такая сильная, как твоя, зато веселее!" },
        { ru: "This match was as exciting as the last one.", en: "Этот матч был таким же захватывающим, как прошлый." },
      ],
    },
  ],
  tasks: [
    listen("enmc3-t1", "Послушай. Что говорит Айша?", "I don't agree. The Blues were as good as the Reds.", [
      ["«Синие» были не хуже «красных».", true],
      ["«Красные» были лучше.", false],
      ["Она согласна с Дэнни.", false],
    ]),
    choice("enmc3-t2", "Как вежливо сказать «Понимаю, но не согласен(-на)»?", [
      ["I see what you mean, but I don't agree.", true],
      ["You're right, that's not fair.", false],
      ["Calm down, let's agree.", false],
    ], { skill: "speaking" }),
    fill("enmc3-t3", "Выбери правильное слово.", "Danny isn't as calm", "Aisha.", "as", ["as", "than", "like"], { skill: "grammar" }),
    read("enmc3-t4", "Прочитай сообщение Айши Дэнни. Что она предлагает?", "OK, Danny. Let's agree to disagree. Tea at the van tomorrow? My treat! Aisha", [
      ["Помириться и выпить чаю у фургона, она угощает.", true],
      ["Пойти на матч.", false],
      ["Больше не разговаривать.", false],
    ]),
    match("enmc3-t5", "Соедини пары.", [
      ["I don't agree.", "Я не согласен(-на)."],
      ["You're right.", "Ты прав(а)."],
      ["That's not fair!", "Это нечестно!"],
      ["Calm down!", "Успокойся!"],
    ], { skill: "words" }),
    script("enmc3-t6", "Друг говорит, что его город лучше твоего.", [
      { speaker: "Друг", text: "My city is the best city in the world!" },
      { speaker: "Ты", answer: "I see what you mean, but my city is as beautiful as yours.", options: ["I see what you mean, but my city is as beautiful as yours.", "I see what you mean, but my city is as beautiful than yours.", "Goal! Two-one!"] },
      { speaker: "Друг", text: "Hmm… OK." },
      { speaker: "Ты", answer: "Let's agree to disagree!", options: ["Let's agree to disagree!", "That's not fair score!", "Calm down, half-time!"] },
    ], { skill: "speaking" }),
    speak("enmc3-t7", "Cats are better than dogs. Do you agree?", "I see what you mean, but I don't agree. Dogs are as clever as cats — and they're friendlier!", "Понимаю, о чём ты, но не согласен(-на). Собаки такие же умные, как кошки, — и дружелюбнее!", {
      help: "Вежливо не согласись вслух: I see what you mean, but…",
    }),
  ],
  reward: {
    itemId: "friendship-mug",
    itemName: "Кружка «пополам»",
    itemNameRu: "Half-and-half mug",
    ru: "Half red, half blue — peace!",
    en: "Наполовину красная, наполовину синяя — мир!",
    a11y: "На полке фургона стоит большая кружка: одна половина красная, другая синяя, посередине надпись «Agree to disagree».",
    image: p("friendship-mug"),
    steps: ["Мурзик рисует на кружке две половины — красную и синюю.", "Посередине он пишет: «Agree to disagree».", "Дэнни и Айша пьют из неё чай по очереди.", "Теперь у окошка фургона — мир. Почти."],
    bridge: "В выходные Айша обещает показать им Манчестер: каналы, трамваи и одну из старейших библиотек Британии.",
  },
};

const manchester4: Lesson = {
  id: "en-a2-manchester-4",
  level: "A2",
  cityId: "en-manchester",
  number: 4,
  title: "One of the oldest — Одна из старейших",
  minutes: 8,
  goals: ["Рассказать о достопримечательностях", "One of the + превосходная степень", "Спросить дорогу на трамвае"],
  vocabNote: "One of the oldest libraries — «одна из старейших библиотек». После one of the — всегда множественное число.",
  vocab: [
    v("enmc4-1", "a canal", "канал", "Узкий канал между красными кирпичными складами.", "Послушать a canal", p("l4-1")),
    v("enmc4-2", "a tram", "трамвай", "Жёлтый трамвай едет по улице.", "Послушать a tram", p("l4-2")),
    v("enmc4-3", "one of the oldest libraries", "одна из старейших библиотек", "Готический читальный зал со стрельчатыми окнами.", "Послушать one of the oldest libraries", p("l4-3")),
    v("enmc4-4", "a warehouse", "склад", "Огромный старый склад из красного кирпича.", "Послушать a warehouse", p("l4-4")),
    v("enmc4-5", "the tallest building", "самое высокое здание", "Стеклянная башня над крышами.", "Послушать the tallest building", p("l4-5")),
    v("enmc4-6", "Which stop?", "Какая остановка?", "Айша показывает на карту трамваев.", "Послушать Which stop", p("l4-6")),
    v("enmc4-7", "Get off at…", "Выходи на…", "Двери трамвая открываются на остановке.", "Послушать Get off at", p("l4-7")),
    v("enmc4-8", "the Industrial Revolution", "промышленная революция", "Старая картинка: фабрики с дымящими трубами.", "Послушать the Industrial Revolution", p("l4-8")),
  ],
  letters: [
    letter("warehouse = [уЭэхаус]", "Ware [уэ] + house [хаус]: [уЭэхаус].", "a warehouse", "склад"),
    letter("canal = [кэнЭл]", "Ударение на второй слог: [кэнЭл].", "by the canal", "у канала"),
  ],
  dialogue: {
    title: "Прогулка с Айшей",
    note: "Cotton mills — хлопковые фабрики. Манчестер был центром хлопковой промышленности.",
    lines: [
      line("aisha", "These warehouses are two hundred years old. Manchester was one of the most important cities of the Industrial Revolution.", "Этим складам двести лет. Манчестер был одним из самых важных городов промышленной революции."),
      line("murzik", "And what's that glass tower?", "А что это за стеклянная башня?"),
      line("aisha", "That's one of the tallest buildings in the city. Now — the tram! We're going to the library.", "Это одно из самых высоких зданий города. А теперь — трамвай! Едем в библиотеку."),
      line("tom", "Which stop?", "Какая остановка?"),
      line("aisha", "Get off at the third stop. It's one of the oldest libraries in Britain.", "Выходим на третьей. Это одна из старейших библиотек Британии."),
      line("murzik", "It looks like a castle! The most beautiful library I've seen!", "Она похожа на замок! Самая красивая библиотека, которую я видел!"),
    ],
    gist: choice("enmc4-d1", "На какой остановке выходить к библиотеке?", [
      ["На третьей.", true],
      ["На первой.", false],
      ["На конечной.", false],
    ]),
  },
  grammar: [
    {
      title: "One of the + превосходная степень",
      paragraphs: [
        "One of the + превосходная степень + существительное во множественном числе: one of the oldest libraries, one of the best teams.",
        "Не путай: the oldest library — самая старая (одна), one of the oldest libraries — одна из самых старых.",
      ],
      examples: [
        { ru: "Manchester is one of the biggest cities in England.", en: "Манчестер — один из крупнейших городов Англии." },
        { ru: "She's one of the best players in the team.", en: "Она одна из лучших в команде." },
      ],
    },
  ],
  tasks: [
    listen("enmc4-t1", "Послушай. Сколько лет складам?", "These warehouses are two hundred years old.", [
      ["Двести лет.", true],
      ["Двадцать лет.", false],
      ["Две тысячи лет.", false],
    ]),
    choice("enmc4-t2", "Как сказать «одна из лучших команд»?", [
      ["one of the best teams", true],
      ["one of the best team", false],
      ["one of best teams", false],
    ], { skill: "grammar" }),
    fill("enmc4-t3", "Выбери правильное слово.", "It's one of the oldest", "in Britain.", "libraries", ["libraries", "library", "librarys"], { skill: "grammar" }),
    read("enmc4-t4", "Прочитай табличку в библиотеке. Можно ли здесь фотографировать?", "THE LIBRARY\nOpen: Mon–Sat 10:00–17:00\nFree entry\nPhotos: yes, but no flash. Please be quiet.", [
      ["Да, но без вспышки.", true],
      ["Нет, нельзя.", false],
      ["Только по субботам.", false],
    ]),
    match("enmc4-t5", "Соедини пары.", [
      ["a canal", "канал"],
      ["a tram", "трамвай"],
      ["a warehouse", "склад"],
      ["Get off at…", "Выходи на…"],
    ], { skill: "words" }),
    tf("enmc4-t6", "После one of the существительное стоит в единственном числе.", false, "grammar"),
    speak("enmc4-t7", "Tell me about your city.", "My city is one of the oldest cities in my country. The most beautiful place is the old bridge.", "Мой город — один из старейших в моей стране. Самое красивое место — старый мост.", {
      help: "Расскажи вслух о своём городе: one of the…, the most…",
    }),
  ],
  reward: {
    itemId: "toy-tram",
    itemName: "Игрушечный трамвай",
    itemNameRu: "Toy tram",
    ru: "A little yellow tram!",
    en: "Маленький жёлтый трамвай!",
    a11y: "На полке фургона стоит маленькая жёлтая модель манчестерского трамвая.",
    image: p("toy-tram"),
    steps: ["В сувенирном магазине у библиотеки продаются маленькие трамваи.", "Айша покупает один для фургона.", "«Now you've got a van AND a tram», — смеётся она.", "Трамвай едет по полке рядом с кружкой «пополам»."],
    bridge: "В понедельник в Манчестере дождь. А у фургона — самая длинная очередь за всё лето.",
  },
};

const manchester5: Lesson = {
  id: "en-a2-manchester-5",
  level: "A2",
  cityId: "en-manchester",
  number: 5,
  title: "The busiest day — Самый загруженный день",
  minutes: 8,
  goals: ["Работать с очередью: принять заказ", "Превосходная степень с -y: busiest, wettest", "Извиниться за ожидание"],
  vocabNote: "Busy → busier → the busiest. Wet → wetter → the wettest (согласная удваивается). Queue [кью] — очередь.",
  vocab: [
    v("enmc5-1", "the longest queue", "самая длинная очередь", "Длинная очередь под зонтами у фургона.", "Послушать the longest queue", p("l5-1")),
    v("enmc5-2", "the busiest day", "самый загруженный день", "Мурзик и Том в мыле, руки мелькают.", "Послушать the busiest day", p("l5-2")),
    v("enmc5-3", "the wettest city", "самый дождливый город", "Мокрая улица, все с зонтами.", "Послушать the wettest city", p("l5-3")),
    v("enmc5-4", "Next, please!", "Следующий, пожалуйста!", "Том высовывается из окошка фургона.", "Послушать Next, please", p("l5-4")),
    v("enmc5-5", "Sorry to keep you waiting.", "Извините, что заставили ждать.", "Мурзик протягивает чай промокшему мужчине.", "Послушать Sorry to keep you waiting", p("l5-5")),
    v("enmc5-6", "Eat in or take away?", "Здесь или с собой?", "Бумажный пакет с едой и столик у фургона.", "Послушать Eat in or take away", p("l5-6")),
    v("enmc5-7", "We've run out of…", "У нас закончился…", "Пустая коробка из-под чая.", "Послушать We've run out of", p("l5-7")),
    v("enmc5-8", "the hardest-working", "самый трудолюбивый", "Айша в фартуке помогает за прилавком.", "Послушать the hardest-working", p("l5-8")),
  ],
  letters: [
    letter("queue = [кью]", "Пять букв — один слог: queue [кью]. Очень британское слово.", "a long queue", "длинная очередь"),
  ],
  dialogue: {
    title: "Очередь под дождём",
    note: "Rain doesn't stop Mancunians — манчестерцы не боятся дождя.",
    lines: [
      line("tom", "This is the busiest day of the summer — and the longest queue! Next, please!", "Это самый загруженный день за всё лето — и самая длинная очередь! Следующий, пожалуйста!"),
      line("danny", "Me! Sorry, I'm wet. They say Manchester is the wettest city in England!", "Я! Простите, я мокрый. Говорят, Манчестер — самый дождливый город Англии!"),
      line("murzik", "Sorry to keep you waiting. Eat in or take away?", "Извините, что заставили ждать. Здесь или с собой?"),
      line("danny", "Two teas to take away, please. One for my sister.", "Два чая с собой, пожалуйста. Один для сестры."),
      line("murzik", "Oh no… we've run out of tea!", "Ой… у нас закончился чай!"),
      line("aisha", "Don't worry! I've got a box of tea from Nan's. And an apron — I'll help!", "Не волнуйтесь! У меня коробка чая от бабушки. И фартук — я помогу!"),
    ],
    gist: choice("enmc5-d1", "Как Айша помогает?", [
      ["Приносит чай и встаёт за прилавок.", true],
      ["Встаёт в очередь.", false],
      ["Приносит зонт.", false],
    ]),
  },
  grammar: [
    {
      title: "Правописание: -iest, -ttest",
      paragraphs: [
        "На -y: busy → the busiest, happy → the happiest, easy → the easiest.",
        "Короткое слово на «гласная + согласная» — согласная удваивается: wet → the wettest, big → the biggest, hot → the hottest.",
      ],
      examples: [
        { ru: "July is the hottest month here.", en: "Июль здесь самый жаркий месяц." },
        { ru: "That was the easiest question!", en: "Это был самый лёгкий вопрос!" },
      ],
    },
  ],
  tasks: [
    listen("enmc5-t1", "Послушай. Что закончилось в фургоне?", "Oh no… we've run out of tea!", [
      ["Чай.", true],
      ["Пироги.", false],
      ["Стаканчики.", false],
    ]),
    choice("enmc5-t2", "Как пишется «самый загруженный»?", [
      ["the busiest", true],
      ["the busyest", false],
      ["the most busy-est", false],
    ], { skill: "grammar" }),
    fill("enmc5-t3", "Выбери правильное слово.", "July is the", "month here.", "hottest", ["hottest", "hotest", "most hot"], { skill: "grammar" }),
    read("enmc5-t4", "Прочитай табличку на фургоне. Что можно взять с собой?", "HOPE ON WHEELS\nTea — £1.50\nPie — £3 (eat in or take away)\nSoup — eat in only, sorry!", [
      ["Пирог.", true],
      ["Суп.", false],
      ["Ничего.", false],
    ]),
    match("enmc5-t5", "Соедини пары.", [
      ["the longest queue", "самая длинная очередь"],
      ["Eat in or take away?", "Здесь или с собой?"],
      ["Next, please!", "Следующий, пожалуйста!"],
      ["We've run out of…", "У нас закончился…"],
    ], { skill: "words" }),
    script("enmc5-t6", "Ты в окошке фургона. Длинная очередь.", [
      { speaker: "Покупатель", text: "Hello! I've been waiting for ages!" },
      { speaker: "Ты", answer: "Sorry to keep you waiting. What would you like?", options: ["Sorry to keep you waiting. What would you like?", "Who's the wettest?", "We've run out of you."] },
      { speaker: "Покупатель", text: "A tea, please." },
      { speaker: "Ты", answer: "To take away?", options: ["To take away?", "To take a queue?", "The busiest?"] },
    ], { skill: "speaking" }),
    speak("enmc5-t7", "What's the busiest day of your week?", "Monday is the busiest day. I work all day, and in the evening I go to the gym.", "Понедельник — самый загруженный день. Я работаю весь день, а вечером иду в спортзал.", {
      help: "Расскажи вслух о самом загруженном дне недели.",
    }),
  ],
  reward: {
    itemId: "umbrella-stand",
    itemName: "Подставка для зонтов",
    itemNameRu: "Umbrella stand",
    ru: "For the wettest city!",
    en: "Для самого дождливого города!",
    a11y: "У входа в фургон стоит высокая металлическая подставка, в ней три зонта: красный, синий и полосатый.",
    image: p("umbrella-stand"),
    steps: ["Покупатели ставят мокрые зонты куда попало.", "Дэнни приносит старую подставку из дома.", "Айша кладёт туда красный, синий и полосатый зонт.", "«Free umbrellas for our customers!» — пишет Мурзик."],
    bridge: "Вечером Дэнни и Айша говорят: «Nan wants to meet you». Бабушка Эдна печёт лучшие Eccles cakes в городе.",
  },
};

const manchester6: Lesson = {
  id: "en-a2-manchester-6",
  level: "A2",
  cityId: "en-manchester",
  number: 6,
  title: "Nan's Eccles cakes — Пирожки бабушки Эдны",
  minutes: 8,
  goals: ["Понять рецепт", "Сравнить несколько вещей: the flakiest, the most delicious", "Похвалить еду"],
  vocabNote: "Eccles cakes [Эклз кейкс] — круглые слоёные пирожки с изюмом. Их придумали в городке Экклс под Манчестером.",
  vocab: [
    v("enmc6-1", "puff pastry", "слоёное тесто", "Тонкие слои теста на доске.", "Послушать puff pastry", p("l6-1")),
    v("enmc6-2", "mixed peel", "цукаты", "Горсть мелких разноцветных цукатов.", "Послушать mixed peel", p("l6-2")),
    v("enmc6-3", "Make three cuts on top.", "Сделай три надреза сверху.", "Нож делает три надреза на круглом пирожке.", "Послушать Make three cuts on top", p("l6-3")),
    v("enmc6-4", "brown sugar", "коричневый сахар", "Миска с коричневым сахаром.", "Послушать brown sugar", p("l6-4")),
    v("enmc6-5", "golden brown", "золотистый", "Пирожки в духовке становятся золотистыми.", "Послушать golden brown", p("l6-5")),
    v("enmc6-6", "the flakiest pastry", "самое рассыпчатое тесто", "Крошки слоёного теста летят во все стороны.", "Послушать the flakiest pastry", p("l6-6")),
    v("enmc6-7", "They're delicious!", "Они очень вкусные!", "Мурзик жмурится от удовольствия.", "Послушать They're delicious", p("l6-7")),
    v("enmc6-8", "the family secret", "семейный секрет", "Эдна прикладывает палец к губам.", "Послушать the family secret", p("l6-8")),
  ],
  letters: [
    letter("currants ≠ currents", "Currants [кАрэнтс] — изюм-коринка, currents [кАрэнтс] — течения. Звучат одинаково!", "currants", "мелкий изюм"),
  ],
  dialogue: {
    title: "Кухня бабушки Эдны",
    note: "Nan — бабушка (разг.). Love — ласковое обращение на севере Англии.",
    lines: [
      line("edna", "Put the currants, mixed peel and brown sugar in the middle of the pastry.", "Положи изюм, цукаты и коричневый сахар в середину теста."),
      line("edna", "Close it, turn it over and make three cuts on top.", "Закрой, переверни и сделай три надреза сверху."),
      line("murzik", "Why three?", "Почему три?"),
      line("edna", "That's the family secret, love! Bake them until they're golden brown.", "Это семейный секрет, милый! Пеки, пока не станут золотистыми."),
      line("danny", "Nan's Eccles cakes are the best in Manchester.", "Пирожки бабушки — лучшие в Манчестере."),
      line("aisha", "For once, I agree with my brother! The flakiest pastry in the world.", "В кои-то веки я согласна с братом! Самое рассыпчатое тесто в мире."),
    ],
    gist: choice("enmc6-d1", "В чём Дэнни и Айша наконец согласны?", [
      ["Пирожки бабушки — лучшие.", true],
      ["«Синие» — лучшая команда.", false],
      ["Манчестер — самый дождливый город.", false],
    ]),
  },
  grammar: [
    {
      title: "Until: пока не",
      paragraphs: [
        "Until + действие — «пока не»: Bake them until they're golden brown — «Пеки, пока не станут золотистыми».",
        "Повторяем: the flakiest, the most delicious, the best in Manchester.",
      ],
      examples: [
        { ru: "Stir it until it's thick.", en: "Мешай, пока не загустеет." },
        { ru: "Wait here until I come back.", en: "Жди здесь, пока я не вернусь." },
      ],
    },
  ],
  tasks: [
    listen("enmc6-t1", "Послушай. Сколько надрезов делают сверху?", "Close it, turn it over and make three cuts on top.", [
      ["Три.", true],
      ["Два.", false],
      ["Ни одного.", false],
    ]),
    choice("enmc6-t2", "Как сказать «Пеки, пока не станут золотистыми»?", [
      ["Bake them until they're golden brown.", true],
      ["Bake them while they golden brown.", false],
      ["Bake them until golden they.", false],
    ], { skill: "grammar" }),
    read("enmc6-t3", "Прочитай рецепт Эдны. Сколько минут печь?", "ECCLES CAKES\nPuff pastry, currants, brown sugar, butter\n1. Fill and close.\n2. Turn over, 3 cuts on top.\n3. Bake at 200° for 15–20 minutes.", [
      ["15–20 минут.", true],
      ["200 минут.", false],
      ["3 минуты.", false],
    ]),
    fill("enmc6-t4", "Выбери правильное слово.", "This is the", "cake in Manchester!", "most delicious", ["most delicious", "deliciousest", "more delicious"], { skill: "grammar" }),
    match("enmc6-t5", "Соедини пары.", [
      ["puff pastry", "слоёное тесто"],
      ["mixed peel", "цукаты"],
      ["golden brown", "золотистый"],
      ["the family secret", "семейный секрет"],
    ], { skill: "words" }),
    tf("enmc6-t6", "Currants и currents звучат одинаково.", true, "words"),
    speak("enmc6-t7", "What's the most delicious thing your family cooks?", "The most delicious thing is my grandmother's pie. It's a family secret!", "Самое вкусное — бабушкин пирог. Это семейный секрет!", {
      help: "Расскажи вслух о самом вкусном блюде твоей семьи.",
    }),
  ],
  reward: {
    itemId: "pastry-cutter",
    itemName: "Круглая форма для теста",
    itemNameRu: "Round pastry cutter",
    ru: "Perfect circles every time!",
    en: "Идеальные кружочки каждый раз!",
    a11y: "На полке фургона лежит старая металлическая форма-кружок для вырезания теста, рядом мешочек с изюмом.",
    image: p("pastry-cutter"),
    steps: ["Эдна режет тесто старой круглой формой.", "«This was my mum's», — говорит она. «Это мамина».", "Она дарит форму Мурзику.", "Теперь у фургона будут свои Eccles cakes."],
    bridge: "Пора ехать в Йорк. Но бабушка Эдна готовит ещё один подарок — для книги дороги.",
  },
};

const manchester7: Lesson = {
  id: "en-a2-manchester-7",
  level: "A2",
  cityId: "en-manchester",
  number: 7,
  title: "Manchester exam — Экзамен: Манчестер",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Сравнить и выбрать лучшее", "Повторить всё из Манчестера"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Манчестера.",
  vocab: [
    v("enmc7-1", "York", "Йорк", "Стрелка на карте от Манчестера на северо-восток.", "Послушать York", p("l7-1")),
    v("enmc7-2", "the city walls", "городские стены", "Старинные каменные стены вокруг города.", "Послушать the city walls", p("l7-2")),
    v("enmc7-3", "We'll both come.", "Мы оба приедем.", "Дэнни и Айша стоят плечом к плечу.", "Послушать We'll both come", p("l7-3")),
    v("enmc7-4", "in the same car", "в одной машине", "Маленькая машина с красным и синим шарфами из окон.", "Послушать in the same car", p("l7-4")),
    v("enmc7-5", "the happiest", "самый счастливый", "Эдна улыбается, глядя на внуков.", "Послушать the happiest", p("l7-5")),
    v("enmc7-6", "Text us when you get there!", "Напишите, как доедете!", "Айша машет зонтом.", "Послушать Text us when you get there", p("l7-6")),
    v("enmc7-7", "Mind how you go!", "Счастливо! Осторожней в пути!", "Эдна машет с крыльца.", "Послушать Mind how you go", p("l7-7")),
    v("enmc7-8", "Our sixth recipe!", "Наш шестой рецепт!", "Мурзик держит карточку с рецептом.", "Послушать Our sixth recipe", p("l7-8")),
  ],
  letters: [
    letter("York = [йо:к]", "R не звучит, долгое [о:]: York [йо:к].", "to York", "в Йорк"),
  ],
  dialogue: {
    title: "Прощание у склада",
    note: "Mind how you go — северное «будь осторожен в пути».",
    lines: [
      line("edna", "Here's my Eccles cake recipe for your road book.", "Вот мой рецепт Eccles cakes для вашей книги дороги."),
      line("murzik", "Our sixth recipe! Thank you, Edna!", "Наш шестой рецепт! Спасибо, Эдна!"),
      line("tom", "We're going to York next. It's got the longest city walls in England.", "Дальше мы едем в Йорк. Там самые длинные городские стены в Англии."),
      line("danny", "We'll both come to the festival in London. In the same car!", "Мы оба приедем на фестиваль в Лондоне. В одной машине!"),
      line("aisha", "With one red scarf and one blue scarf. Text us when you get there!", "С одним красным шарфом и одним синим. Напишите, как доедете!"),
      line("edna", "My grandchildren in one car — I'm the happiest nan in Manchester! Mind how you go!", "Мои внуки в одной машине — я самая счастливая бабушка в Манчестере! Счастливо!"),
    ],
    gist: choice("enmc7-d1", "Почему Эдна — самая счастливая бабушка?", [
      ["Внуки поедут на фестиваль вместе, в одной машине.", true],
      ["Её команда выиграла.", false],
      ["Она получила рецепт.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Манчестер",
      paragraphs: [
        "Превосходная степень: the biggest, the wettest, the busiest, the most exciting, the best, the worst; in England, of my life; one of the oldest libraries.",
        "Сравнение и спор: as good as, not as strong as; I don't agree. I see what you mean, but… You're right. Let's agree to disagree.",
      ],
      examples: [
        { ru: "It's one of the best cities I've visited, but not the driest!", en: "Это один из лучших городов, где я был(а), но не самый сухой!" },
        { ru: "Danny isn't as calm as Aisha, but he's as kind.", en: "Дэнни не такой спокойный, как Айша, но такой же добрый." },
      ],
    },
  ],
  tasks: [
    listen("enmc7-t1", "Аудиоистория: Эдна рассказывает о внуках. Послушай. Почему Дэнни и Айша болеют за разные команды?", "When Danny and Aisha were little, their dad supported the Reds and their mum supported the Blues. Danny went to matches with his dad, and Aisha went with her mum. Now they argue every day. But every Sunday they come to my house, and that's the happiest day of my week.", [
      ["Папа болел за «красных», а мама — за «синих».", true],
      ["Так решила бабушка.", false],
      ["Они живут в разных районах.", false],
    ]),
    choice("enmc7-t2", "Из рассказа Эдны: какой день недели для неё самый счастливый?", [
      ["Воскресенье.", true],
      ["Суббота — день матча.", false],
      ["Понедельник.", false],
    ], { skill: "listening" }),
    choice("enmc7-t3", "Как сказать «Дэнни не такой спокойный, как Айша»?", [
      ["Danny isn't as calm as Aisha.", true],
      ["Danny isn't calm than Aisha.", false],
      ["Danny isn't the calmest as Aisha.", false],
    ], { skill: "grammar" }),
    read("enmc7-t4", "Прочитай сообщение Айши. Что они привезут на фестиваль?", "See you in London in August! Danny's driving. I'm bringing Nan's Eccles cakes. Danny's bringing… his opinions. Aisha", [
      ["Пирожки бабушки (и мнения Дэнни).", true],
      ["Футбольный мяч.", false],
      ["Красный и синий фургон.", false],
    ]),
    script("enmc7-t5", "Попрощайся с Дэнни и Айшей.", [
      { speaker: "Айша", text: "Where are you going next?" },
      { speaker: "Ты", answer: "To York. It's got the longest city walls in England.", options: ["To York. It's got the longest city walls in England.", "To York. It's got the most long city walls.", "Goal! Two-two!"] },
      { speaker: "Дэнни", text: "Don't forget us!" },
      { speaker: "Ты", answer: "We won't! See you at the festival!", options: ["We won't! See you at the festival!", "That's not fair!", "Who's next?"] },
    ], { skill: "review" }),
    match("enmc7-t6", "Повторяем Манчестер: соедини пары.", [
      ["a draw", "ничья"],
      ["the longest queue", "самая длинная очередь"],
      ["a tram", "трамвай"],
      ["puff pastry", "слоёное тесто"],
    ], { skill: "review" }),
    speak("enmc7-t7", "Which city is the best for you, and why?", "For me, the best city is Manchester. It's not the driest, but the people are the friendliest!", "Для меня лучший город — Манчестер. Не самый сухой, зато люди самые дружелюбные!", {
      help: "Расскажи вслух о лучшем городе: the best, the most…, not as … as.",
    }),
  ],
  reward: {
    itemId: "recipe-eccles-cakes",
    itemName: "Рецепт «Eccles cakes»",
    itemNameRu: "Eccles cakes recipe card",
    ru: "Our sixth recipe!",
    en: "Наш шестой рецепт!",
    a11y: "Карточка с рецептом Eccles cakes вклеена на шестую страницу голубой тетради; на полях нарисованы два шарфа — красный и синий.",
    image: p("recipe-eccles-cakes"),
    steps: ["Мурзик вклеивает рецепт на шестую страницу книги дороги.", "Эдна написала его крупным почерком, с тремя подчёркнутыми надрезами.", "Дэнни рисует на полях красный шарф, Айша — синий.", "Шесть рецептов есть. Впереди — Йорк."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у канала",
    nameRu: "The van by the canal",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит у узкого канала между старыми складами из красного кирпича; мимо едет жёлтый трамвай.",
  },
  keepsakeId: "recipe-eccles-cakes",
  welcomeRu: "Hello, Manchester!",
  welcomeEn: "Привет, Манчестер!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон в Манчестере: кирпичные склады у каналов, трамвай и болельщики в красных и синих шарфах.",
  departureImage: p("departure"),
  departureA11y: "Дэнни в красном шарфе, Айша в синем и бабушка Эдна машут голубому фургону у канала под мелким дождём.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: два шарфа крест-накрест, доска со счётом, кружка «пополам», игрушечный трамвай, подставка с зонтами и форма для теста.",
      lines: [
        { en: "У фургона теперь болеют за всех — и никто не ссорится." },
        { en: "В книге дороги шестой рецепт: Eccles cakes бабушки Эдны." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик в одном красном и одном синем носке стоит между Дэнни и Айшей, все трое держат Eccles cakes.",
      lines: [
        { ru: "Manchester complete!", en: "Манчестер пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "The best team? The van team!", en: "Лучшая команда? Команда фургона!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Дэнни в красном шарфе, Айша в синем и бабушка Эдна машут голубому фургону у канала под мелким дождём.",
      lines: [
        { ru: "Goodbye, Danny! Goodbye, Aisha! Goodbye, Edna!", en: "До свидания, Дэнни! До свидания, Айша! До свидания, Эдна!" },
        { ru: "Next stop: York!", en: "Следующая остановка: Йорк!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон едет на северо-восток через зелёные холмы и каменные изгороди.",
      lines: [{ ru: "Manchester → York", en: "Манчестер → Йорк" }],
    },
    {
      image: pic("en/york/arrival"),
      a11y: "Голубой фургон в Йорке: старинные городские стены, узкие средневековые улочки и большой готический собор.",
      lines: [{ ru: "Hello, York!", en: "Привет, Йорк!" }],
    },
  ],
};

export const enManchester = {
  id: "en-manchester",
  name: "Манчестер",
  nameEn: "Manchester",
  lessons: [manchester1, manchester2, manchester3, manchester4, manchester5, manchester6, manchester7],
  story,
};
