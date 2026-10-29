import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, choice, fill, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Белен · «Последний концерт» · Повторение всего A1. Рынок Ver-o-Peso, асаи, дневной дождь, звонок бабушке, дорога на концерт, встреча с группой, день рождения доны Лусии в Рио. Пипока говорит все свои фразы и новую: «Parabéns, Dona Lúcia!» */

const p = (name: string) => pic(`pt/belem/${name}`);
const LUCIA = t("Дона Лусия", "Dona Lúcia");

const be1: Lesson = {
  id: "pt-a1-belem-1",
  level: "A1",
  cityId: "pt-belem",
  number: 1,
  title: t("O cartaz — Афиша", "O cartaz — The poster"),
  minutes: 7,
  goals: [
    t("Узнать, где и когда концерт", "Find out where and when the concert is"),
    t("Повторить время и дни недели", "Review times and days of the week"),
    t("Повторить вопросы onde, quando, a que horas", "Review the questions onde, quando, a que horas"),
  ],
  vocabNote: t(
    "Cartaz — «афиша». Começar — «начинаться»: O show começa às nove — «Концерт начинается в девять».",
    "Cartaz means “poster”. Começar means “to begin”: O show começa às nove — The show starts at nine.",
  ),
  vocab: [
    v("ptbe1-1", "Olha o cartaz!", t("Смотри, афиша!", "Look, the poster!"),
      t("На стене у порта яркая афиша группы «Maré Alta».", "A bright Maré Alta poster on a wall by the port."),
      p("l1-1")),
    v("ptbe1-2", "Onde é o show?", t("Где концерт?", "Where's the concert?"),
      t("Мурзик водит пальцем по афише.", "Murzik runs a finger along the poster."),
      p("l1-2")),
    v("ptbe1-3", "É na praça, perto do rio.", t("На площади, у реки.", "It's in the square, near the river."),
      t("Площадь у реки, на ней собирают сцену.", "A square by the river where a stage is being built."),
      p("l1-3")),
    v("ptbe1-4", "Quando é o show?", t("Когда концерт?", "When's the concert?"),
      t("Биа смотрит в телефон-календарь.", "Bia checks the calendar on her phone."),
      p("l1-4")),
    v("ptbe1-5", "É amanhã, no sábado.", t("Завтра, в субботу.", "It's tomorrow, on Saturday."),
      t("Календарь: пятница, рядом обведённая суббота.", "A calendar: Friday, and Saturday circled next to it."),
      p("l1-5")),
    v("ptbe1-6", "A que horas começa o show?", t("Во сколько начинается концерт?", "What time does the show start?"),
      t("Мурзик показывает на свои часы.", "Murzik taps his watch."),
      p("l1-6")),
    v("ptbe1-7", "Começa às nove da noite.", t("Начинается в девять вечера.", "It starts at nine in the evening."),
      t("Часы показывают девять, за окном звёзды.", "A clock at nine, with stars outside the window."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("Мы успели!", "We made it!"),
    note: t(
      "Finalmente — «наконец». Último — «последний». A gente — разговорное «мы».",
      "Finalmente means “at last”. Último means “last”. A gente is the everyday way to say “we”.",
    ),
    lines: [
      line("bia", "Finalmente, Belém! Murzik, olha o cartaz!", t("Наконец-то Белен! Мурзик, смотри, афиша!", "Belém at last! Murzik, look at the poster!")),
      line("murzik", "Maré Alta! Onde é o show?", t("«Maré Alta»! Где концерт?", "Maré Alta! Where's the concert?")),
      line("bia", "É na praça, perto do rio.", t("На площади, у реки.", "In the square, near the river.")),
      line("murzik", "E quando é?", t("А когда?", "And when is it?")),
      line("bia", "É amanhã, no sábado. É o último show!", t("Завтра, в субботу. Это последний концерт!", "It's tomorrow, on Saturday. It's the last show!")),
      line("murzik", "A que horas começa o show?", t("Во сколько начинается концерт?", "What time does the show start?")),
      line("bia", "Começa às nove da noite. A gente chegou a tempo!", t("В девять вечера. Мы успели!", "At nine in the evening. We made it in time!")),
    ],
    gist: choice("ptbe1-d1", t("Когда последний концерт?", "When is the last concert?"), [
      [t("Завтра, в субботу, в девять вечера.", "Tomorrow, Saturday, at nine in the evening."), true],
      [t("Сегодня в полдень.", "Today at noon."), false],
      [t("В воскресенье утром.", "On Sunday morning."), false],
    ]),
  },
  grammar: [
    g(
      t("Повторяем: вопросы", "Review: question words"),
      [
        t(
          "Onde? — «где?», Quando? — «когда?», A que horas? — «во сколько?», Quanto? — «сколько?», Quem? — «кто?», Por que? — «почему?», Como? — «как?», O que? — «что?».",
          "Onde? (where?), Quando? (when?), A que horas? (what time?), Quanto? (how much?), Quem? (who?), Por que? (why?), Como? (how?), O que? (what?).",
        ),
        t(
          "Время: às nove — «в девять», à uma — «в час». Da manhã — «утра», da tarde — «дня», da noite — «вечера».",
          "Times: às nove (at nine), à uma (at one). Da manhã (in the morning), da tarde (in the afternoon), da noite (in the evening).",
        ),
      ],
      [
        ["Quem é o cantor? — É o Zeca.", t("Кто певец? — Зека.", "Who's the singer? — Zeca.")],
        ["A que horas sai o ônibus? — Às oito.", t("Во сколько отходит автобус? — В восемь.", "What time does the bus leave? — At eight.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbe1-t1", t("Как спросить «Во сколько начинается концерт?»", "How do you ask “What time does the concert start?”"), [
      ["A que horas começa o show?", true],
      ["Quantas horas é o show?", false],
      ["Onde começa o show?", false],
    ], { skill: "grammar" }),
    listen("ptbe1-t2", t("Послушай. Где концерт?", "Listen. Where is the concert?"), "É na praça, perto do rio.", [
      [t("На площади, у реки.", "In the square, near the river."), true],
      [t("В театре.", "In the theatre."), false],
      [t("На пляже.", "On the beach."), false],
    ]),
    match("ptbe1-t3", PAIRS, [
      ["onde", t("где", "where")],
      ["quando", t("когда", "when")],
      ["quem", t("кто", "who")],
      ["como", t("как", "how")],
    ], { skill: "words" }),
    spell("ptbe1-t4", t("Собери из букв слово «суббота».", "Spell the word for “Saturday”."), "sábado"),
    speak("ptbe1-t5", "A que horas começa o show?", "Começa às nove da noite.", t("Начинается в девять вечера.", "It starts at nine in the evening."), {
      help: t("Ответь вслух по афише.", "Answer aloud, from the poster."),
    }),
    choice("ptbe1-t6", t("Как сказать «Счастливого пути!»?", "How do you say “Have a good trip!”?"), [
      ["Boa viagem!", true],
      ["Bom proveito!", false],
      ["Boa noite!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "poster",
    itemName: t("Афиша концерта", "Concert poster"),
    itemNameRu: "Cartaz do show",
    ru: "Oba! O cartaz do show!",
    en: t("Ура! Афиша концерта!", "Hooray! The concert poster!"),
    a11y: t("На стене висит яркая афиша «Maré Alta» с барабаном и нотами.", "A bright Maré Alta poster with a drum and musical notes hangs on the wall."),
    image: p("poster"),
    steps: [
      t("Хозяйка гостиницы даёт Мурзику лишнюю афишу.", "The guesthouse owner gives Murzik a spare poster."),
      t("Такая же, как в Рио, только последний город — Белен.", "Just like the one in Rio — only the last city is Belém."),
      t("Мурзик вешает её над кроватью.", "Murzik hangs it above his bed."),
      t("«Amanhã!» — «Завтра!»", "“Amanhã!” — “Tomorrow!”"),
    ],
    bridge: t("В то же утро Биа ведёт Мурзика на самый большой рынок города — Ver-o-Peso.", "That same morning Bia takes Murzik to the city's biggest market — Ver-o-Peso."),
  },
};

const be2: Lesson = {
  id: "pt-a1-belem-2",
  level: "A1",
  cityId: "pt-belem",
  number: 2,
  title: t("O Ver-o-Peso — Рынок Ver-o-Peso", "O Ver-o-Peso — Ver-o-Peso market"),
  minutes: 7,
  goals: [
    t("Повторить покупки и цены", "Review shopping and prices"),
    t("Заказать асаи", "Order açaí"),
    t("Сказать, что нравится больше", "Say what you prefer"),
  ],
  vocabNote: t(
    "В Белене асаи едят не сладким, как на юге, а густым и несладким — с рыбой и мукой из маниоки.",
    "In Belém açaí isn't a sweet dessert like in the south — it's thick and unsweetened, eaten with fish and cassava flour.",
  ),
  vocab: [
    v("ptbe2-1", "Eu queria um açaí, por favor.", t("Мне асаи, пожалуйста.", "I'd like an açaí, please."),
      t("Мурзик у прилавка с тёмно-фиолетовым асаи.", "Murzik at a stall of dark purple açaí."),
      p("l2-1")),
    v("ptbe2-2", "Com açúcar ou sem açúcar?", t("С сахаром или без?", "With or without sugar?"),
      t("Продавщица держит сахарницу.", "The stallholder holds up a sugar bowl."),
      p("l2-2")),
    v("ptbe2-3", "Sem açúcar, por favor.", t("Без сахара, пожалуйста.", "No sugar, please."),
      t("Мурзик машет лапой: не надо сахара.", "Murzik waves a paw: no sugar."),
      p("l2-3")),
    v("ptbe2-4", "Quanto custa o quilo de peixe?", t("Сколько стоит килограмм рыбы?", "How much is a kilo of fish?"),
      t("На льду лежит огромная рыба.", "An enormous fish lies on ice."),
      p("l2-4")),
    v("ptbe2-5", "Custa trinta reais.", t("Тридцать реалов.", "It's thirty reais."),
      t("Табличка с ценой «R$ 30».", "A price sign: R$ 30."),
      p("l2-5")),
    v("ptbe2-6", "Eu prefiro o açaí com farinha.", t("Мне больше нравится асаи с мукой маниоки.", "I prefer açaí with cassava flour."),
      t("Миска асаи, посыпанная жёлтой мукой.", "A bowl of açaí sprinkled with yellow cassava flour."),
      p("l2-6")),
    v("ptbe2-7", "É diferente, mas é bom!", t("Необычно, но вкусно!", "It's unusual, but it's good!"),
      t("Мурзик с фиолетовыми усами облизывается.", "Murzik, with purple whiskers, licks his lips."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Асаи на рынке", "Açaí at the market"),
    note: t(
      "Farinha — мука из маниоки, её посыпают почти на всё. Diferente — «необычный, другой».",
      "Farinha is cassava flour — sprinkled on almost everything. Diferente here means “unusual”.",
    ),
    lines: [
      line("seller", "Bom dia! O que vocês querem?", t("Доброе утро! Что желаете?", "Good morning! What would you like?")),
      line("murzik", "Eu queria um açaí, por favor.", t("Мне асаи, пожалуйста.", "I'd like an açaí, please.")),
      line("seller", "Com açúcar ou sem açúcar?", t("С сахаром или без?", "With or without sugar?")),
      line("bia", "Aqui a gente come sem açúcar. Com farinha!", t("Здесь едят без сахара. С мукой из маниоки!", "Here we eat it without sugar. With cassava flour!")),
      line("murzik", "Então sem açúcar, por favor. Quanto custa?", t("Тогда без сахара, пожалуйста. Сколько стоит?", "No sugar, then, please. How much is it?")),
      line("seller", "Dez reais.", t("Десять реалов.", "Ten reais.")),
      line("murzik", "Hmm… É diferente, mas é bom!", t("Хм… Необычно, но вкусно!", "Hmm… It's unusual, but it's good!")),
    ],
    gist: choice("ptbe2-d1", t("Как в Белене едят асаи?", "How do people eat açaí in Belém?"), [
      [t("Без сахара, с мукой из маниоки.", "Without sugar, with cassava flour."), true],
      [t("С мороженым и сахаром.", "With ice cream and sugar."), false],
      [t("С молоком и бананом.", "With milk and banana."), false],
    ]),
  },
  grammar: [
    g(
      t("Повторяем: queria, prefiro, quanto custa", "Review: queria, prefiro, quanto custa"),
      [
        t(
          "Вежливо попросить — Eu queria… («я бы хотел(а)…»). Сравнить — Eu prefiro… («я предпочитаю…»). Цена — Quanto custa? для одного, Quanto custam? для нескольких.",
          "To ask politely: Eu queria… (I'd like…). To compare: Eu prefiro… (I prefer…). Prices: Quanto custa? for one thing, Quanto custam? for several.",
        ),
        t(
          "Com — «с», sem — «без»: com açúcar, sem açúcar, com gelo, sem gelo.",
          "Com means “with”, sem means “without”: com açúcar, sem açúcar, com gelo, sem gelo.",
        ),
      ],
      [
        ["Quanto custam as bananas?", t("Сколько стоят бананы?", "How much are the bananas?")],
        ["Um suco sem gelo, por favor.", t("Сок без льда, пожалуйста.", "A juice without ice, please.")],
      ],
    ),
  ],
  tasks: [
    fill("ptbe2-t1", t("Вставь слово: «Сколько стоят манго?»", "Fill in the word: “How much are the mangoes?”"), "Quanto", "as mangas?", "custam", ["custam", "custa", "custo"], { skill: "grammar" }),
    listen("ptbe2-t2", t("Послушай. Сколько стоит рыба?", "Listen. How much is the fish?"), "Custa trinta reais.", [
      [t("Тридцать реалов.", "Thirty reais."), true],
      [t("Тринадцать реалов.", "Thirteen reais."), false],
      [t("Три реала.", "Three reais."), false],
    ]),
    match("ptbe2-t3", PAIRS, [
      ["com", t("с", "with")],
      ["sem", t("без", "without")],
      ["o peixe", t("рыба", "the fish")],
      ["o açúcar", t("сахар", "sugar")],
    ], { skill: "words" }),
    missing("ptbe2-t4", t("Какой буквы не хватает? («сахар»)", "Which letter is missing? (“sugar”)"), "a", "úcar", "ç", ["ç", "s", "c"]),
    speak("ptbe2-t5", "Bom dia! O que você quer?", "Eu queria um açaí sem açúcar, por favor.", t("Мне асаи без сахара, пожалуйста.", "I'd like an açaí with no sugar, please."), {
      help: t("Закажи вслух.", "Order aloud."),
    }),
    choice("ptbe2-t6", t("Как сказать «Я предпочитаю рыбу»?", "How do you say “I prefer fish”?"), [
      ["Eu prefiro peixe.", true],
      ["Eu prefere peixe.", false],
      ["Eu preferi peixe amanhã.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cuia",
    itemName: t("Расписная калебаса", "Painted gourd bowl"),
    itemNameRu: "Cuia",
    ru: "Oba! Uma cuia!",
    en: t("Ура! Чаша-калебаса!", "Hooray! A gourd bowl!"),
    a11y: t("На столе стоит круглая чёрная чаша из тыквы, расписанная белыми цветами.", "A round black gourd bowl painted with white flowers stands on the table."),
    image: p("cuia"),
    steps: [
      t("На рынке продают чаши из высушенных тыкв — cuias.", "At the market they sell bowls made from dried gourds — cuias."),
      t("В них едят асаи и суп такака.", "People eat açaí and tacacá soup from them."),
      t("Мурзик выбирает чёрную, с белыми цветами.", "Murzik picks a black one with white flowers."),
      t("«Para o meu café em Paris!» — «Для моего кафе в Париже!»", "“Para o meu café em Paris!” — “For my café in Paris!”"),
    ],
    bridge: t("В полдень небо вдруг темнеет. Продавцы спокойно накрывают прилавки.", "At midday the sky suddenly darkens. The stallholders calmly cover their stalls."),
  },
};

const be3: Lesson = {
  id: "pt-a1-belem-3",
  level: "A1",
  cityId: "pt-belem",
  number: 3,
  title: t("A chuva da tarde — Дневной дождь", "A chuva da tarde — The afternoon rain"),
  minutes: 7,
  goals: [
    t("Повторить погоду", "Review the weather"),
    t("Сказать, что будет: vai chover", "Say what's going to happen: vai chover"),
    t("Договориться «после дождя»", "Arrange to meet “after the rain”"),
  ],
  vocabNote: t(
    "В Белене почти каждый день после обеда идёт сильный дождь. Люди даже договариваются: «Encontro você depois da chuva» — «Встретимся после дождя».",
    "In Belém it rains hard almost every afternoon. People even arrange to meet “depois da chuva” — after the rain.",
  ),
  vocab: [
    v("ptbe3-1", "Vai chover.", t("Сейчас пойдёт дождь.", "It's going to rain."),
      t("Над рынком собираются тёмные тучи.", "Dark clouds gather over the market."),
      p("l3-1")),
    v("ptbe3-2", "Está chovendo muito!", t("Идёт сильный дождь!", "It's pouring!"),
      t("Стена дождя, Мурзик прячется под навесом.", "A wall of rain; Murzik shelters under an awning."),
      p("l3-2")),
    v("ptbe3-3", "Chove todo dia à tarde.", t("Дождь идёт каждый день после обеда.", "It rains every afternoon."),
      t("Хозяйка гостиницы спокойно пьёт кофе под навесом.", "The guesthouse owner calmly drinks coffee under the awning."),
      p("l3-3")),
    v("ptbe3-4", "Está quente e úmido.", t("Жарко и влажно.", "It's hot and humid."),
      t("Мурзик с прилипшей мокрой шерстью обмахивается.", "Murzik, his fur damp and flat, fans himself."),
      p("l3-4")),
    v("ptbe3-5", "Depois da chuva", t("после дождя", "after the rain"),
      t("Солнце выглядывает, мокрые улицы блестят.", "The sun comes out; the wet streets glisten."),
      p("l3-5")),
    v("ptbe3-6", "Antes do show", t("перед концертом", "before the concert"),
      t("Часы и афиша рядом.", "A clock next to the poster."),
      p("l3-6")),
    v("ptbe3-7", "Já parou!", t("Уже кончился!", "It's stopped already!"),
      t("Мурзик выходит из-под навеса, над рекой радуга.", "Murzik steps out from under the awning; a rainbow over the river."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Под навесом", "Under the awning"),
    note: t(
      "Parar — «останавливаться»: já parou — «уже перестал». Meia hora — «полчаса».",
      "Parar means “to stop”: já parou — it's stopped already. Meia hora means “half an hour”.",
    ),
    lines: [
      line("murzik", "Bia, olha o céu! Vai chover.", t("Биа, смотри на небо! Сейчас пойдёт дождь.", "Bia, look at the sky! It's going to rain.")),
      line("bia", "Claro! Aqui chove todo dia à tarde.", t("Конечно! Здесь дождь каждый день после обеда.", "Of course! Here it rains every afternoon.")),
      line("murzik", "Nossa! Está chovendo muito!", t("Ого! Какой сильный дождь!", "Wow! It's pouring!")),
      line("bia", "Não se preocupe. A chuva dura meia hora.", t("Не волнуйся. Дождь идёт полчаса.", "Don't worry. The rain lasts half an hour.")),
      line("murzik", "Está quente e úmido… Eu prefiro o frio de Curitiba!", t("Жарко и влажно… Мне больше нравится холод Куритибы!", "It's hot and humid… I prefer the cold in Curitiba!")),
      line("bia", "Olha! Já parou!", t("Смотри! Уже кончился!", "Look! It's stopped already!")),
      line("murzik", "E o show é amanhã. Antes do show, vamos ligar para a Dona Lúcia?", t("А концерт завтра. Давай перед концертом позвоним доне Лусии?", "And the show's tomorrow. Shall we call Dona Lúcia before the show?")),
    ],
    gist: choice("ptbe3-d1", t("Сколько длится дождь в Белене?", "How long does the rain last in Belém?"), [
      [t("Полчаса.", "Half an hour."), true],
      [t("Весь день.", "All day."), false],
      [t("Неделю.", "A week."), false],
    ]),
  },
  grammar: [
    g(
      t("Повторяем: vai + глагол, estar + -ndo", "Review: vai + verb, estar + -ndo"),
      [
        t(
          "Что будет — ir + глагол: vai chover — «пойдёт дождь», vou ligar — «позвоню». Что происходит сейчас — estar + -ndo: está chovendo — «идёт дождь (прямо сейчас)».",
          "What's going to happen — ir + verb: vai chover (it's going to rain), vou ligar (I'm going to call). What's happening right now — estar + -ndo: está chovendo (it's raining).",
        ),
        t(
          "Antes de — «перед, до», depois de — «после»: antes do show, depois da chuva.",
          "Antes de means “before”, depois de “after”: antes do show, depois da chuva.",
        ),
      ],
      [
        ["Amanhã vai fazer sol.", t("Завтра будет солнечно.", "Tomorrow it's going to be sunny.")],
        ["Depois do almoço nós vamos ao rio.", t("После обеда мы пойдём к реке.", "After lunch we're going to the river.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbe3-t1", t("Как сказать «Сейчас пойдёт дождь»?", "How do you say “It's going to rain”?"), [
      ["Vai chover.", true],
      ["Vai chove.", false],
      ["Chovi amanhã.", false],
    ], { skill: "grammar" }),
    listen("ptbe3-t2", t("Послушай. Когда идёт дождь в Белене?", "Listen. When does it rain in Belém?"), "Chove todo dia à tarde.", [
      [t("Каждый день после обеда.", "Every afternoon."), true],
      [t("Только ночью.", "Only at night."), false],
      [t("Никогда.", "Never."), false],
    ]),
    match("ptbe3-t3", PAIRS, [
      ["a chuva", t("дождь", "the rain")],
      ["úmido", t("влажный", "humid")],
      ["antes de", t("перед, до", "before")],
      ["depois de", t("после", "after")],
    ], { skill: "words" }),
    spell("ptbe3-t4", t("Собери из букв слово «дождь».", "Spell the word for “rain”."), "chuva"),
    speak("ptbe3-t5", "Como está o tempo hoje?", "Está quente. Vai chover à tarde.", t("Жарко. После обеда пойдёт дождь. (Можно рассказать о своей погоде.)", "It's hot. It's going to rain this afternoon. (Or describe your own weather.)"), {
      help: t("Расскажи вслух о погоде.", "Talk about the weather aloud."),
    }),
    choice("ptbe3-t6", t("Как сказать «Как холодно!»?", "How do you say “It's so cold!”?"), [
      ["Que frio!", true],
      ["Que calor!", false],
      ["Que lindo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "raincoat",
    itemName: t("Плащ-дождевик", "Raincoat"),
    itemNameRu: "Capa de chuva",
    ru: "Oba! Uma capa de chuva!",
    en: t("Ура! Дождевик!", "Hooray! A raincoat!"),
    a11y: t("На крючке висит жёлтый плащ-дождевик с капюшоном, с него капает вода.", "A yellow hooded raincoat hangs on a hook, dripping."),
    image: p("raincoat"),
    steps: [
      t("Продавец на рынке протягивает Мурзику жёлтый дождевик.", "A stallholder hands Murzik a yellow raincoat."),
      t("«Para amanhã à tarde!» — «На завтра, на после обеда!»", "“Para amanhã à tarde!” — “For tomorrow afternoon!”"),
      t("Мурзик пробует: капюшон закрывает уши.", "Murzik tries it on: the hood covers his ears."),
      t("Дождевик сушится на крючке.", "The raincoat dries on a hook."),
    ],
    bridge: t("Вечером Биа звонит бабушке в Рио.", "In the evening Bia phones her grandma in Rio."),
  },
};

const be4: Lesson = {
  id: "pt-a1-belem-4",
  level: "A1",
  cityId: "pt-belem",
  number: 4,
  title: t("Alô, vovó! — Алло, бабуля!", "Alô, vovó! — Hello, Grandma!"),
  minutes: 7,
  goals: [
    t("Поговорить по телефону", "Talk on the phone"),
    t("Рассказать, где мы были", "Say where you've been"),
    t("Повторить прошедшее время", "Review the past tense"),
  ],
  vocabNote: t(
    "По телефону бразильцы отвечают «Alô?». Saudade — «тоска по тому, кого любишь»: Estou com saudade — «скучаю».",
    "Brazilians answer the phone with “Alô?”. Saudade is the feeling of missing someone you love: Estou com saudade — I miss you.",
  ),
  vocab: [
    v("ptbe4-1", "Alô? Quem fala?", t("Алло? Кто это?", "Hello? Who's speaking?"),
      t("Дона Лусия в очках подносит телефон к уху.", "Dona Lúcia, in her glasses, holds the phone to her ear."),
      p("l4-1")),
    v("ptbe4-2", "Sou eu, vovó! A Bia!", t("Это я, бабуля! Биа!", "It's me, Grandma! Bia!"),
      t("Биа радостно кричит в телефон.", "Bia shouts happily into the phone."),
      p("l4-2")),
    v("ptbe4-3", "Como foi a viagem?", t("Как прошла поездка?", "How was the trip?"),
      t("Лусия удивлённо поднимает брови.", "Lúcia raises her eyebrows in surprise."),
      p("l4-3")),
    v("ptbe4-4", "Nós estamos em Belém.", t("Мы в Белене.", "We're in Belém."),
      t("Мурзик наклоняется к телефону у окна с видом на реку.", "Murzik leans close to the phone by a window overlooking the river."),
      p("l4-4")),
    v("ptbe4-5", "Nós viajamos pelo Brasil todo!", t("Мы объехали всю Бразилию!", "We've travelled all over Brazil!"),
      t("Мурзик показывает альбом с фотографиями Пипоки.", "Murzik holds up the album of Pipoca photos."),
      p("l4-5")),
    v("ptbe4-6", "Estou com saudade!", t("Я скучаю!", "I miss you!"),
      t("Лусия прижимает руку к сердцу.", "Lúcia presses a hand to her heart."),
      p("l4-6")),
    v("ptbe4-7", "Até domingo!", t("До воскресенья!", "See you on Sunday!"),
      t("Биа машет рукой и улыбается, прижимая телефон к уху.", "Bia waves and smiles, the phone at her ear."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Звонок бабушке", "Calling Grandma"),
    note: t(
      "A festa — «праздник». Ainda não — «ещё нет». Domingo — «воскресенье».",
      "A festa means “the party”. Ainda não means “not yet”. Domingo means “Sunday”.",
    ),
    lines: [
      line("lucia", "Alô? Quem fala?", t("Алло? Кто это?", "Hello? Who's speaking?")),
      line("bia", "Sou eu, vovó! A Bia! E o Murzik!", t("Это я, бабуля! Биа! И Мурзик!", "It's me, Grandma! Bia! And Murzik!")),
      line("lucia", "Ai, que bom! Como foi a viagem? Onde vocês estão?", t("Ах, как хорошо! Как поездка? Где вы?", "Oh, how lovely! How was the trip? Where are you?")),
      line("murzik", "Nós estamos em Belém. Nós viajamos pelo Brasil todo!", t("Мы в Белене. Мы объехали всю Бразилию!", "We're in Belém. We've travelled all over Brazil!")),
      line("lucia", "E o Pipoca? Vocês encontraram o Pipoca?", t("А Пипока? Вы нашли Пипоку?", "And Pipoca? Have you found Pipoca?")),
      line("bia", "Ainda não. Mas amanhã a banda faz o último show aqui!", t("Ещё нет. Но завтра группа даёт здесь последний концерт!", "Not yet. But tomorrow the band plays its last show here!")),
      line("lucia", "A minha festa é no domingo… Estou com saudade!", t("Мой праздник в воскресенье… Я скучаю!", "My party's on Sunday… I miss you!")),
      line("murzik", "Nós também! Até domingo, Dona Lúcia!", t("Мы тоже! До воскресенья, дона Лусия!", "So do we! See you on Sunday, Dona Lúcia!")),
    ],
    gist: choice("ptbe4-d1", t("Когда праздник у доны Лусии?", "When is Dona Lúcia's party?"), [
      [t("В воскресенье.", "On Sunday."), true],
      [t("Сегодня.", "Today."), false],
      [t("Через месяц.", "In a month."), false],
    ]),
  },
  grammar: [
    g(
      t("Повторяем: прошедшее время", "Review: the past tense"),
      [
        t(
          "-ar: eu viajei, ele viajou, nós viajamos. -er / -ir: eu comi, ele comeu, nós comemos; eu abri, ele abriu. У правильных глаголов форма nós совпадает с настоящим: viajamos, comemos, abrimos — и «путешествуем, едим, открываем», и «путешествовали, съели, открыли».",
          "-ar: eu viajei, ele viajou, nós viajamos. -er / -ir: eu comi, ele comeu, nós comemos; eu abri, ele abriu. In regular verbs the nós form is the same as the present: viajamos, comemos, abrimos mean both “we travel/eat/open” and “we travelled/ate/opened”.",
        ),
        t(
          "Неправильные: fui / foi / fomos (ir, ser), fiz / fez (fazer), tive / teve (ter), vi / viu (ver).",
          "Irregular: fui / foi / fomos (ir, ser), fiz / fez (fazer), tive / teve (ter), vi / viu (ver).",
        ),
      ],
      [
        ["Nós vimos os botos no rio.", t("Мы видели дельфинов в реке.", "We saw the dolphins in the river.")],
        ["Ontem eu comi açaí.", t("Вчера я ел(а) асаи.", "Yesterday I ate açaí.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbe4-t1", t("Как сказать «Вчера я ел(а) рыбу»?", "How do you say “Yesterday I ate fish”?"), [
      ["Ontem eu comi peixe.", true],
      ["Ontem eu como peixe.", false],
      ["Ontem eu comeu peixe.", false],
    ], { skill: "grammar" }),
    listen("ptbe4-t2", t("Послушай. Что говорит дона Лусия?", "Listen. What does Dona Lúcia say?"), "Estou com saudade!", [
      [t("Я скучаю!", "I miss you!"), true],
      [t("Я устала!", "I'm tired!"), false],
      [t("Мне жарко!", "I'm hot!"), false],
    ]),
    match("ptbe4-t3", PAIRS, [
      ["viajamos", t("мы путешествовали", "we travelled")],
      ["vimos", t("мы видели", "we saw")],
      ["fomos", t("мы ездили", "we went")],
      ["fizemos", t("мы сделали", "we did")],
    ], { skill: "words" }),
    missing("ptbe4-t4", t("Какой буквы не хватает? («тоска, скучаю»)", "Which letter is missing? (“longing”)"), "sauda", "e", "d", ["d", "t", "j"]),
    speak("ptbe4-t5", "Alô? Quem fala?", "Alô! Sou eu! Tudo bem?", t("Алло! Это я! Как дела?", "Hello! It's me! How are you?"), {
      help: t("Ответь вслух по телефону.", "Answer the phone aloud."),
    }),
    choice("ptbe4-t6", t("Как сказать «Мы в Белене»?", "How do you say “We're in Belém”?"), [
      ["Nós estamos em Belém.", true],
      ["Nós somos em Belém.", false],
      ["Nós está em Belém.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "candles",
    itemName: t("Свечи для торта", "Birthday candles"),
    itemNameRu: "Velas de aniversário",
    ru: "Oba! As velas!",
    en: t("Ура! Свечи!", "Hooray! The candles!"),
    a11y: t("В коробочке две свечи-цифры: восемь и ноль.", "Two number candles in a little box: an eight and a zero."),
    image: p("candles"),
    steps: [
      t("После звонка Биа и Мурзик идут в магазин.", "After the call, Bia and Murzik go to a shop."),
      t("Они покупают две свечи-цифры: 8 и 0.", "They buy two number candles: 8 and 0."),
      t("«Oitenta anos!» — «Восемьдесят лет!»", "“Oitenta anos!” — “Eighty years!”"),
      t("Свечи лежат рядом с шалью и топазом.", "The candles go next to the shawl and the topaz."),
    ],
    bridge: t("Суббота. После дождя Мурзик и Биа идут на концерт.", "Saturday. After the rain, Murzik and Bia head for the concert."),
  },
};

const be5: Lesson = {
  id: "pt-a1-belem-5",
  level: "A1",
  cityId: "pt-belem",
  number: 5,
  title: t("A caminho do show — По дороге на концерт", "A caminho do show — On the way to the concert"),
  minutes: 7,
  goals: [
    t("Повторить дорогу и транспорт", "Review directions and transport"),
    t("Купить билеты у входа", "Buy tickets at the entrance"),
    t("Повторить числа", "Review numbers"),
  ],
  vocabNote: t(
    "Ingresso — билет на концерт. Fila — «очередь». Lotado — «битком, полно народу».",
    "Ingresso is a ticket for a show. Fila means “queue”. Lotado means “packed, full”.",
  ),
  vocab: [
    v("ptbe5-1", "Como a gente chega na praça?", t("Как нам добраться до площади?", "How do we get to the square?"),
      t("Мурзик и Биа спрашивают дорогу у таксиста.", "Murzik and Bia ask a taxi driver the way."),
      p("l5-1")),
    v("ptbe5-2", "Vocês podem ir a pé.", t("Можно дойти пешком.", "You can walk there."),
      t("Таксист показывает рукой вдоль набережной.", "The driver points along the riverfront."),
      p("l5-2")),
    v("ptbe5-3", "Siga em frente e vire à esquerda.", t("Идите прямо и поверните налево.", "Go straight on and turn left."),
      t("Стрелки на мокрой мостовой: прямо, налево.", "Arrows on the wet pavement: straight on, then left."),
      p("l5-3")),
    v("ptbe5-4", "Que fila enorme!", t("Какая огромная очередь!", "What a huge queue!"),
      t("Длинная очередь у входа на площадь.", "A long queue at the entrance to the square."),
      p("l5-4")),
    v("ptbe5-5", "Dois ingressos, por favor.", t("Два билета, пожалуйста.", "Two tickets, please."),
      t("Мурзик протягивает деньги в окошко кассы.", "Murzik passes money through the ticket window."),
      p("l5-5")),
    v("ptbe5-6", "São quarenta reais.", t("С вас сорок реалов.", "That's forty reais."),
      t("Кассир показывает четыре пальца.", "The cashier holds up four fingers."),
      p("l5-6")),
    v("ptbe5-7", "Está lotado!", t("Полно народу!", "It's packed!"),
      t("Площадь до отказа заполнена людьми, над сценой огни.", "The square is crammed with people; lights above the stage."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("У входа", "At the entrance"),
    note: t(
      "Cada — «каждый»: vinte cada — «по двадцать». Pertinho — «совсем близко» (от perto).",
      "Cada means “each”: vinte cada — twenty each. Pertinho means “really close” (from perto).",
    ),
    lines: [
      line("murzik", "Com licença, como a gente chega na praça?", t("Извините, как нам добраться до площади?", "Excuse me, how do we get to the square?")),
      line("driver", "É pertinho! Vocês podem ir a pé. Siga em frente e vire à esquerda.", t("Совсем близко! Можно пешком. Идите прямо и поверните налево.", "It's really close! You can walk. Go straight on and turn left.")),
      line("bia", "Obrigada!", t("Спасибо!", "Thanks!")),
      line("murzik", "Olha! Que fila enorme!", t("Смотри! Какая огромная очередь!", "Look! What a huge queue!")),
      line("bia", "Dois ingressos, por favor.", t("Два билета, пожалуйста.", "Two tickets, please.")),
      line("cashier", "Vinte cada. São quarenta reais.", t("По двадцать. С вас сорок реалов.", "Twenty each. That's forty reais.")),
      line("murzik", "Nossa, está lotado! Onde está o palco?", t("Ого, полно народу! Где сцена?", "Wow, it's packed! Where's the stage?")),
    ],
    gist: choice("ptbe5-d1", t("Сколько стоят два билета?", "How much are the two tickets?"), [
      [t("Сорок реалов.", "Forty reais."), true],
      [t("Двадцать реалов.", "Twenty reais."), false],
      [t("Четырнадцать реалов.", "Fourteen reais."), false],
    ]),
  },
  grammar: [
    g(
      t("Повторяем: дорога и транспорт", "Review: directions and transport"),
      [
        t(
          "Дорога: siga em frente — «идите прямо», vire à direita / à esquerda — «поверните направо / налево». Транспорт: de ônibus, de táxi, de barco, но a pé — «пешком».",
          "Directions: siga em frente (go straight on), vire à direita / à esquerda (turn right / left). Transport: de ônibus, de táxi, de barco — but a pé (on foot).",
        ),
        t(
          "Числа десятками: vinte, trinta, quarenta, cinquenta… cem.",
          "Counting in tens: vinte, trinta, quarenta, cinquenta… cem.",
        ),
      ],
      [
        ["Eu vou de ônibus, e você?", t("Я поеду на автобусе, а ты?", "I'm going by bus — and you?")],
        ["A praça fica à direita.", t("Площадь справа.", "The square is on the right.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbe5-t1", t("Как сказать «пешком»?", "How do you say “on foot”?"), [
      ["a pé", true],
      ["de pé", false],
      ["no pé", false],
    ], { skill: "grammar" }),
    listen("ptbe5-t2", t("Послушай. Куда идти?", "Listen. Which way?"), "Siga em frente e vire à esquerda.", [
      [t("Прямо, потом налево.", "Straight on, then left."), true],
      [t("Прямо, потом направо.", "Straight on, then right."), false],
      [t("Назад.", "Back the way you came."), false],
    ]),
    match("ptbe5-t3", PAIRS, [
      ["o ingresso", t("билет на концерт", "the concert ticket")],
      ["a fila", t("очередь", "the queue")],
      ["o palco", t("сцена", "the stage")],
      ["lotado", t("битком", "packed")],
    ], { skill: "words" }),
    spell("ptbe5-t4", t("Собери из букв слово «сорок».", "Spell the word for “forty”."), "quarenta"),
    speak("ptbe5-t5", "Boa noite! Quantos ingressos?", "Dois ingressos, por favor.", t("Два билета, пожалуйста.", "Two tickets, please."), {
      help: t("Купи вслух билеты.", "Buy the tickets aloud."),
    }),
    choice("ptbe5-t6", t("Как сказать «Идите прямо!»?", "How do you say “Go straight on!”?"), [
      ["Siga em frente!", true],
      ["Estou atrasado!", false],
      ["Vire à direita!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "wristband",
    itemName: t("Браслет концерта", "Concert wristband"),
    itemNameRu: "Pulseira do show",
    ru: "Oba! A pulseira do show!",
    en: t("Ура! Браслет концерта!", "Hooray! The concert wristband!"),
    a11y: t("Синий тканевый браслет с надписью «Maré Alta — Belém».", "A blue fabric wristband printed with “Maré Alta — Belém”."),
    image: p("wristband"),
    steps: [
      t("Кассир надевает им на лапы синие браслеты.", "The cashier slips blue wristbands onto their paws."),
      t("«Maré Alta — Belém. O último show!»", "“Maré Alta — Belém. O último show!”"),
      t("Мурзик протискивается поближе к сцене.", "Murzik squeezes his way towards the stage."),
      t("Гаснет свет. Начинается!", "The lights go down. It's starting!"),
    ],
    bridge: t("На сцену выходят Зека и Тиагу. Тиагу ставит большой барабан — тот самый, из Рио.", "Zeca and Tiago come on stage. Tiago sets down a big drum — the very one from Rio."),
  },
};

const be6: Lesson = {
  id: "pt-a1-belem-6",
  level: "A1",
  cityId: "pt-belem",
  number: 6,
  title: t("O Pipoca! — Пипока!", "O Pipoca! — Pipoca!"),
  minutes: 8,
  goals: [
    t("Узнать Пипоку по его фразам", "Recognise Pipoca by his phrases"),
    t("Познакомиться с группой", "Meet the band"),
    t("Повторить фразы всех городов", "Review the phrases from every city"),
  ],
  vocabNote: t(
    "Tambor — «барабан». Case — «футляр» (бразильцы говорят [кейзи]). Microfone — «микрофон».",
    "Tambor means “drum”. Case is a hard case for an instrument (Brazilians say [KAY-zee]). Microfone means “microphone”.",
  ),
  vocab: [
    v("ptbe6-1", "Bom dia, Murzik!", t("Доброе утро, Мурзик!", "Good morning, Murzik!"),
      t("Из барабана вылетает зелёный попугай и садится на микрофон.", "A green parrot bursts out of the drum and lands on the microphone."),
      p("l6-1")),
    v("ptbe6-2", "É o Pipoca!", t("Это Пипока!", "It's Pipoca!"),
      t("Мурзик и Биа подпрыгивают в толпе.", "Murzik and Bia jump up and down in the crowd."),
      p("l6-2")),
    v("ptbe6-3", "Ele viajou no case do tambor!", t("Он ездил в футляре от барабана!", "He travelled in the drum case!"),
      t("Тиагу открывает пустой футляр, внутри перья и крошки.", "Tiago opens the empty drum case — feathers and crumbs inside."),
      p("l6-3")),
    v("ptbe6-4", "Vocês conhecem esse papagaio?", t("Вы знаете этого попугая?", "Do you know this parrot?"),
      t("Певец Зека с микрофоном удивлённо смотрит в зал.", "Zeca, the singer, looks out at the crowd in surprise, microphone in hand."),
      p("l6-4")),
    v("ptbe6-5", "Ele é nosso! Ele é da Dona Lúcia!", t("Он наш! Он доны Лусии!", "He's ours! He's Dona Lúcia's!"),
      t("Мурзик машет лапами со сцены.", "Murzik waves his paws from the stage."),
      p("l6-5")),
    v("ptbe6-6", "Nós procuramos vocês em todo o Brasil!", t("Мы искали вас по всей Бразилии!", "We've looked for you all over Brazil!"),
      t("Биа разворачивает старую афишу из Рио.", "Bia unfolds the old poster from Rio."),
      p("l6-6")),
    v("ptbe6-7", "Inacreditável!", t("Невероятно!", "Unbelievable!"),
      t("Музыканты смеются, зал аплодирует.", "The musicians laugh and the crowd applauds."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Последний концерт", "The last concert"),
    note: t(
      "Пипока говорит все фразы, которые выучил в дороге. Узнаёшь, где он их услышал? Sobe — «поднимайся» (на сцену).",
      "Pipoca says all the phrases he learned on the road. Can you tell where he heard each one? Sobe means “come up” (on stage).",
    ),
    lines: [
      line("pipoca", "Bom dia, Murzik! Mais um café! Quanto custa? Que frio! Que gol!", t("Доброе утро, Мурзик! Ещё кофе! Сколько стоит? Как холодно! Гол!", "Good morning, Murzik! Another coffee! How much is it? It's so cold! What a goal!")),
      line("murzik", "É o Pipoca!", t("Это Пипока!", "It's Pipoca!")),
      line("pipoca", "Que lindo! Olha o jacaré! Estou atrasado! Siga em frente!", t("Какая красота! Смотри, кайман! Я опаздываю! Идите прямо!", "How beautiful! Look, a caiman! I'm late! Go straight on!")),
      line("zeca", "Vocês conhecem esse papagaio?", t("Вы знаете этого попугая?", "Do you know this parrot?")),
      line("bia", "Ele é nosso! Ele é da minha avó! Nós procuramos vocês em todo o Brasil!", t("Он наш! Он моей бабушки! Мы искали вас по всей Бразилии!", "He's ours! He's my grandma's! We've looked for you all over Brazil!")),
      line("pipoca", "Tá uma delícia! Vamos dançar! Estou com calor! Boa viagem!", t("Объедение! Танцуем! Мне жарко! Счастливого пути!", "Delicious! Let's dance! I'm so hot! Have a good trip!")),
      line("tiago", "Ele viajou no case do tambor! Desde o Rio!", t("Он ездил в футляре от барабана! С самого Рио!", "He travelled in the drum case! All the way from Rio!")),
      line("zeca", "Inacreditável! Sobe, Murzik!", t("Невероятно! Поднимайся, Мурзик!", "Unbelievable! Come on up, Murzik!")),
    ],
    gist: choice("ptbe6-d1", t("Как Пипока ездил с группой из Рио?", "How did Pipoca travel with the band from Rio?"), [
      [t("В футляре от барабана.", "In the drum case."), true],
      [t("В клетке на сиденье автобуса.", "In a cage on a bus seat."), false],
      [t("На плече у Зеки.", "On Zeca's shoulder."), false],
    ]),
  },
  grammar: [
    g(
      t("Повторяем: ser, estar, ter", "Review: ser, estar, ter"),
      [
        t(
          "Ser — кто, что, чей, откуда (постоянное): Ele é da Dona Lúcia. Estar — где, как (сейчас): O Pipoca está no microfone — «Пипока на микрофоне». Но о событиях — ser: O show é na praça. Ter — «есть, иметь»: A banda tem um tambor.",
          "Ser is for who, what, whose and where from — things that don't change: Ele é da Dona Lúcia. Estar is for where and how, right now: O Pipoca está no microfone (Pipoca is on the microphone). But for events, use ser: O show é na praça. Ter means “to have”: A banda tem um tambor.",
        ),
        t(
          "Это три самых частых глагола португальского. Ты их уже знаешь!",
          "These are the three most common verbs in Portuguese — and you know them all now!",
        ),
      ],
      [
        ["O Zeca é cantor. Ele está no palco.", t("Зека — певец. Он на сцене.", "Zeca is a singer. He's on stage.")],
        ["O Tiago tem um tambor grande.", t("У Тиагу большой барабан.", "Tiago has a big drum.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbe6-t1", t("Выбери правильно: «Пипока на сцене».", "Choose the right one: “Pipoca is on stage”."), [
      ["O Pipoca está no palco.", true],
      ["O Pipoca é no palco.", false],
      ["O Pipoca tem no palco.", false],
    ], { skill: "grammar" }),
    listen("ptbe6-t2", t("Послушай Пипоку. Эту фразу он выучил в Пантанале. Что он говорит?", "Listen to Pipoca. He learned this phrase in the Pantanal. What is he saying?"), "Olha o jacaré!", [
      [t("Смотри, кайман!", "Look, a caiman!"), true],
      [t("Смотри, гол!", "Look, a goal!"), false],
      [t("Смотри, афиша!", "Look, the poster!"), false],
    ]),
    match("ptbe6-t3", PAIRS, [
      ["Que frio!", t("Куритиба", "Curitiba")],
      ["Que gol!", t("Флорианополис", "Florianópolis")],
      ["Tá uma delícia!", t("Салвадор", "Salvador")],
      ["Boa viagem!", t("Манаус", "Manaus")],
    ], { skill: "review" }),
    missing("ptbe6-t4", t("Какой буквы не хватает? («барабан»)", "Which letter is missing? (“drum”)"), "ta", "bor", "m", ["m", "n", "nh"]),
    speak("ptbe6-t5", "Vocês conhecem esse papagaio?", "Sim! Ele é nosso! Ele é o Pipoca!", t("Да! Он наш! Это Пипока!", "Yes! He's ours! He's Pipoca!"), {
      help: t("Ответь вслух певцу.", "Answer the singer aloud."),
    }),
    choice("ptbe6-t6", t("Где Пипока выучил «Estou atrasado!»?", "Where did Pipoca learn “Estou atrasado!”?"), [
      [t("В Бразилиа, на автовокзале.", "In Brasília, at the bus station."), true],
      [t("На пляже во Флорианополисе.", "On the beach in Florianópolis."), false],
      [t("На теплоходе в Манаусе.", "On the riverboat in Manaus."), false],
    ], { skill: "words" }),
  ],
  reward: {
    itemId: "drumstick",
    itemName: t("Барабанная палочка", "Drumstick"),
    itemNameRu: "Baqueta",
    ru: "Oba! A baqueta do Tiago!",
    en: t("Ура! Палочка Тиагу!", "Hooray! Tiago's drumstick!"),
    a11y: t("Деревянная барабанная палочка с автографами всех музыкантов «Maré Alta».", "A wooden drumstick signed by all the Maré Alta musicians."),
    image: p("drumstick"),
    steps: [
      t("После концерта Тиагу дарит Мурзику барабанную палочку.", "After the show Tiago gives Murzik a drumstick."),
      t("Все музыканты расписываются на ней.", "All the musicians sign it."),
      t("«Desculpa, Murzik! O meu celular também estava no case!» — «Прости, Мурзик! Мой телефон тоже был в футляре!»", "“Desculpa, Murzik! O meu celular também estava no case!” — “Sorry, Murzik! My phone was in the case too!”"),
      t("Пипока сидит у Мурзика на плече и не слезает.", "Pipoca sits on Murzik's shoulder and won't get off."),
    ],
    bridge: t("Зека говорит: «Amanhã nós vamos ao Rio com vocês! Para a festa!» Утром все летят в Рио.", "Zeca says: “Amanhã nós vamos ao Rio com vocês! Para a festa!” In the morning they all fly to Rio."),
  },
};

const be7: Lesson = {
  id: "pt-a1-belem-7",
  level: "A1",
  cityId: "pt-belem",
  number: 7,
  title: t("Parabéns, Dona Lúcia! — С днём рождения, дона Лусия!", "Parabéns, Dona Lúcia! — Happy birthday, Dona Lúcia!"),
  minutes: 8,
  goals: [
    t("Поздравить с днём рождения", "Wish someone a happy birthday"),
    t("Вручить подарок", "Give a present"),
    t("Вспомнить весь уровень A1", "Review the whole of level A1"),
  ],
  vocabNote: t(
    "Parabéns! — «Поздравляю!» и «С днём рождения!». Felicidades! — «Счастья!». A senhora — вежливое «вы» к пожилой женщине.",
    "Parabéns! means “Congratulations!” and “Happy birthday!”. Felicidades! means “All the best!”. A senhora is the polite “you” for an older woman.",
  ),
  vocab: [
    v("ptbe7-1", "Parabéns, Dona Lúcia!", t("С днём рождения, дона Лусия!", "Happy birthday, Dona Lúcia!"),
      t("Пипока влетает в комнату и садится доне Лусии на плечо.", "Pipoca flies into the room and lands on Dona Lúcia's shoulder."),
      p("l7-1")),
    v("ptbe7-2", "Pipoca! Você voltou!", t("Пипока! Ты вернулся!", "Pipoca! You came back!"),
      t("Дона Лусия плачет от радости и гладит попугая.", "Dona Lúcia weeps for joy and strokes the parrot."),
      p("l7-2")),
    v("ptbe7-3", "Este presente é para a senhora.", t("Этот подарок — для вас.", "This present is for you."),
      t("Мурзик протягивает коробку в зелёной бумаге.", "Murzik holds out a box in green paper."),
      p("l7-3")),
    v("ptbe7-4", "Que lindo! Muito obrigada!", t("Какая красота! Большое спасибо!", "How beautiful! Thank you so much!"),
      t("Лусия накидывает шаль с попугаями.", "Lúcia wraps the parrot shawl round her shoulders."),
      p("l7-4")),
    v("ptbe7-5", "É o álbum do Pipoca.", t("Это альбом Пипоки.", "It's Pipoca's album."),
      t("Лусия листает альбом: Пипока в каждом городе.", "Lúcia leafs through the album: Pipoca in every city."),
      p("l7-5")),
    v("ptbe7-6", "Felicidades!", t("Счастья!", "All the best!"),
      t("Все поднимают стаканы с соком у торта со свечами «80».", "Everyone raises glasses of juice by a cake with “80” candles."),
      p("l7-6")),
    v("ptbe7-7", "Vamos sambar!", t("Давайте танцевать самбу!", "Let's dance the samba!"),
      t("Мурзик впервые танцует самбу с доной Лусией.", "Murzik dances the samba for the first time, with Dona Lúcia."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Праздник", "The party"),
    note: t(
      "Voltou — «вернулся». Inteiro — «весь, целый». Vamos sambar — «давайте танцевать самбу».",
      "Voltou means “came back”. Inteiro means “whole”. Vamos sambar means “let's samba”.",
    ),
    lines: [
      line("pipoca", "Parabéns, Dona Lúcia!", t("С днём рождения, дона Лусия!", "Happy birthday, Dona Lúcia!")),
      line("lucia", "Pipoca! Você voltou! Ai, que alegria!", t("Пипока! Ты вернулся! Ах, какая радость!", "Pipoca! You came back! Oh, how wonderful!")),
      line("murzik", "Parabéns, Dona Lúcia! Este presente é para a senhora.", t("С днём рождения, дона Лусия! Этот подарок — для вас.", "Happy birthday, Dona Lúcia! This present is for you.")),
      line("lucia", "Que lindo! Um xale com papagaios! E um topázio! Muito obrigada!", t("Какая красота! Шаль с попугаями! И топаз! Большое спасибо!", "How beautiful! A shawl with parrots! And a topaz! Thank you so much!")),
      line("bia", "E este é o álbum do Pipoca. Ele viajou pelo Brasil inteiro!", t("А это альбом Пипоки. Он объехал всю Бразилию!", "And this is Pipoca's album. He's travelled the whole of Brazil!")),
      line("claudia", "Felicidades, mamãe!", t("Счастья, мама!", "All the best, Mum!")),
      line("zeca", "E agora: música! Vamos sambar!", t("А теперь — музыка! Танцуем самбу!", "And now: music! Let's samba!")),
      line("murzik", "Dona Lúcia, a senhora quer dançar comigo?", t("Дона Лусия, потанцуете со мной?", "Dona Lúcia, would you like to dance with me?")),
    ],
    gist: choice("ptbe7-d1", t("Что дарят доне Лусии?", "What do they give Dona Lúcia?"), [
      [t("Шаль, топаз и альбом Пипоки.", "A shawl, a topaz and Pipoca's album."), true],
      [t("Новую клетку для Пипоки.", "A new cage for Pipoca."), false],
      [t("Билеты в Париж.", "Tickets to Paris."), false],
    ]),
  },
  grammar: [
    g(
      t("Вежливое «вы»: o senhor, a senhora", "The polite “you”: o senhor, a senhora"),
      [
        t(
          "К пожилым людям и незнакомым старшим обращаются o senhor (к мужчине) и a senhora (к женщине). Глагол — как с você: A senhora quer dançar? Para a senhora — «для вас».",
          "With older people, and people you want to show respect to, Brazilians say o senhor (to a man) and a senhora (to a woman) instead of você. The verb is the same as with você: A senhora quer dançar? Para a senhora means “for you”.",
        ),
        t(
          "Поэтому в Бразилии и говорят «Сеу Раймунду» и «дона Лусия»: seu — сокращение от senhor.",
          "That's why you've heard Seu Raimundo and Dona Lúcia: seu is short for senhor.",
        ),
      ],
      [
        ["O senhor fala inglês?", t("Вы говорите по-английски?", "Do you speak English?")],
        ["Obrigado, senhora!", t("Спасибо вам!", "Thank you, madam!")],
      ],
    ),
  ],
  tasks: [
    listen("ptbe7-t1", t("Аудиоэкзамен. Что происходит на празднике?", "Audio exam. What's happening at the party?"), "O Pipoca voltou e disse: Parabéns, Dona Lúcia! O Murzik deu um presente, e todo mundo dançou samba.", [
      [t("Пипока вернулся и поздравил дону Лусию, все танцевали самбу.", "Pipoca came back and wished Dona Lúcia happy birthday, and everyone danced the samba."), true],
      [t("Пипока снова улетел.", "Pipoca flew off again."), false],
      [t("Праздник отменили из-за дождя.", "The party was cancelled because of the rain."), false],
    ]),
    choice("ptbe7-t2", t("Как вежливо спросить пожилую женщину «Хотите кофе?»", "How do you politely ask an older woman “Would you like a coffee?”"), [
      ["A senhora quer um café?", true],
      ["A senhora quero um café?", false],
      ["Você senhora quer café?", false],
    ], { skill: "grammar" }),
    match("ptbe7-t3", PAIRS, [
      ["Parabéns!", t("Поздравляю!", "Happy birthday!")],
      ["Felicidades!", t("Счастья!", "All the best!")],
      ["o presente", t("подарок", "the present")],
      ["o bolo", t("торт", "the cake")],
    ], { skill: "words" }),
    missing("ptbe7-t4", t("Какой буквы не хватает? («Поздравляю!»)", "Which letter is missing? (“Congratulations!”)"), "Parab", "ns!", "é", ["é", "e", "ê"]),
    speak("ptbe7-t5", "Hoje é o meu aniversário!", "Parabéns! Felicidades!", t("Поздравляю! Счастья!", "Happy birthday! All the best!"), {
      help: t("Поздравь вслух.", "Say happy birthday aloud."),
    }),
    script("ptbe7-t6", t("Вспомни весь A1. Поговори с доной Лусией на празднике.", "Remember all of A1. Talk to Dona Lúcia at the party."), [
      { speaker: LUCIA, text: "Oi! Tudo bem? Que bom ver você!" },
      { speaker: YOU, answer: "Tudo ótimo! Parabéns, Dona Lúcia!", options: ["Tudo ótimo! Parabéns, Dona Lúcia!", "Quanto custa?", "Estou atrasado!"] },
      { speaker: LUCIA, text: "Obrigada! E a viagem? Onde você foi?" },
      { speaker: YOU, answer: "Eu fui a muitas cidades. Foi uma aventura!", options: ["Eu fui a muitas cidades. Foi uma aventura!", "Eu vou amanhã cedo.", "Não toque nisso!"] },
      { speaker: LUCIA, text: "Você quer um pedaço de bolo?" },
      { speaker: YOU, answer: "Quero, sim! Obrigado! Tá uma delícia!", options: ["Quero, sim! Obrigado! Tá uma delícia!", "Que frio!", "Siga em frente!"] },
      { speaker: LUCIA, text: "E agora? Vamos sambar?" },
      { speaker: YOU, answer: "Vamos!", options: ["Vamos!", "Boa viagem!", "Por quê?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-belem",
    itemName: t("Фото с праздника", "Photo from the party"),
    itemNameRu: "Foto da festa",
    ru: "Oba! A última foto do álbum!",
    en: t("Ура! Последнее фото в альбоме!", "Hooray! The last photo in the album!"),
    a11y: t(
      "Фото: дона Лусия в шали с попугаями, на плече у неё Пипока. Вокруг Биа, Клаудия, Лео, Мурзик и музыканты «Maré Alta». На столе торт со свечами «80».",
      "A photo: Dona Lúcia in her parrot shawl, with Pipoca on her shoulder. Around her: Bia, Cláudia, Léo, Murzik and the Maré Alta musicians. On the table, a cake with “80” candles.",
    ),
    image: p("photo"),
    steps: [
      t("Лео ставит телефон на таймер.", "Léo sets his phone on a timer."),
      t("Все становятся вокруг доны Лусии.", "Everyone gathers round Dona Lúcia."),
      t("«Todo mundo: Pipoca!» — «Все вместе: Пипока!»", "“Todo mundo: Pipoca!” — “Everybody say Pipoca!”"),
      t("Подпись: «Parabéns, Dona Lúcia!» Последняя страница альбома.", "Caption: “Parabéns, Dona Lúcia!” The last page of the album."),
    ],
    bridge: t("Праздник продолжается до утра.", "The party goes on until morning."),
  },
};

const story: CityStory = {
  home: {
    name: t("Комната в гостинице у реки", "A guesthouse room by the river"),
    nameRu: "Um quarto numa pousada perto do rio",
    image: p("home"),
    a11y: t(
      "Небольшая комната со старой деревянной кроватью. За окном река, лодки и синие башенки рынка. Посередине чемодан Мурзика.",
      "A small room with an old wooden bed. Through the window: the river, boats and the blue turrets of the market. Murzik's suitcase in the middle.",
    ),
  },
  keepsakeId: "photo-belem",
  welcomeRu: "Olá, Belém!",
  welcomeEn: t("Привет, Белен!", "Hello, Belém!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Портовый город у устья реки: старинный рынок с синими башенками, лодки, птицы над водой. На стене — афиша концерта «Maré Alta».",
    "A port city at the mouth of the river: an old market with blue turrets, boats and birds over the water. On a wall: a poster for the Maré Alta concert.",
  ),
  departureImage: p("departure"),
  departureA11y: t(
    "Мурзик, Биа и музыканты с инструментами садятся в самолёт. У Мурзика на плече Пипока.",
    "Murzik, Bia and the musicians board a plane with their instruments. Pipoca is on Murzik's shoulder.",
  ),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом последнее фото: праздник доны Лусии.", "Murzik sticks the last photo into the album: Dona Lúcia's party."),
      lines: [
        { en: t("Последняя страница альбома. Пипока дома.", "The last page of the album. Pipoca is home.") },
        { ru: "Parabéns, Dona Lúcia!", en: t("С днём рождения, дона Лусия!", "Happy birthday, Dona Lúcia!") },
      ],
    },
    {
      image: p("suitcase"),
      a11y: t(
        "Раскрытый чемодан Мурзика: альбом, компас, баночки с речной водой, билет в оперу, чаша-калебаса, жёлтый дождевик, барабанная палочка с автографами и много других вещей из путешествия.",
        "Murzik's open suitcase: the album, the compass, the jars of river water, the opera ticket, the gourd bowl, the yellow raincoat, the signed drumstick and many more things from the journey.",
      ),
      lines: [
        { en: t("Четырнадцать городов. Четырнадцать страниц альбома. Пипока нашёлся.", "Fourteen cities. Fourteen pages in the album. Pipoca has been found.") },
        { ru: "Belém completa! Nível A1 completo!", en: t("Белен пройден! Уровень A1 пройден!", "Belém complete! Level A1 complete!") },
        { en: t("7 / 7 уроков. Четырнадцать городов!", "7 / 7 lessons. Fourteen cities!") },
      ],
    },
    {
      image: pic("pt/rio/party"),
      a11y: t(
        "Двор дома доны Лусии ночью: гирлянды, музыканты играют самбу, Мурзик танцует с доной Лусией. Пипока сидит на барабане.",
        "Dona Lúcia's courtyard at night: fairy lights, the musicians playing samba, Murzik dancing with Dona Lúcia. Pipoca sits on the drum.",
      ),
      lines: [
        { en: t("Мурзик впервые танцует самбу. Немного неуклюже, зато от всей души.", "Murzik dances the samba for the first time. A little clumsily — but with all his heart.") },
        { ru: "Eu sei sambar!", en: t("Я умею танцевать самбу!", "I can samba!") },
      ],
    },
    {
      image: pic("pt/rio/video"),
      a11y: t("Лео с телефоном в руке, на экране видео: Пипока на микрофоне на концерте в Белене.", "Léo holding his phone; on the screen, a video of Pipoca on the microphone at the Belém concert."),
      lines: [
        { en: t("А утром Лео показывает телефон. Видео с Пипокой на концерте смотрит вся Бразилия.", "And in the morning Léo shows them his phone. The whole of Brazil is watching the video of Pipoca at the concert.") },
        { ru: "Murzik, Bia… vocês querem viajar com a gente?", en: t("Мурзик, Биа… хотите поехать с нами?", "Murzik, Bia… do you want to come on the road with us?") },
        { ru: "Começa o A2!", en: t("Начинается A2!", "A2 begins!") },
      ],
    },
  ],
};

export const ptBelem = {
  id: "pt-belem",
  name: t("Белен", "Belém"),
  namePt: "Belém",
  lessons: [be1, be2, be3, be4, be5, be6, be7],
  story,
};
