import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Флорианополис · «Пляж и свободное время» · Остров, море, сёрфинг с Каю, футбол на пляже, «люблю / не люблю», «всегда, иногда, никогда». Пипока выучил «Que gol!». */

const p = (name: string) => pic(`pt/floripa/${name}`);
const CAIO = t("Каю", "Caio");

const fl1: Lesson = {
  id: "pt-a1-floripa-1",
  level: "A1",
  cityId: "pt-floripa",
  number: 1,
  title: t("Na praia — На пляже", "Na praia — On the beach"),
  minutes: 7,
  goals: [
    t("Назвать то, что есть на пляже", "Name things on the beach"),
    t("Предложить: Vamos…?", "Suggest doing something: Vamos…?"),
    t("Предупредить: Cuidado!", "Warn someone: Cuidado!"),
  ],
  vocabNote: t(
    "Флорианополис — город на острове, у него больше сорока пляжей. Сами бразильцы ласково зовут его Floripa [флори́па].",
    "Florianópolis is a city on an island with more than forty beaches. Brazilians call it Floripa for short.",
  ),
  vocab: [
    v("ptfl1-1", "Que praia linda!", t("Какой чудесный пляж!", "What a gorgeous beach!"),
      t("Длинный белый пляж, синее море, зелёные холмы.", "A long white beach, blue sea and green hills."),
      p("l1-1")),
    v("ptfl1-2", "o mar", t("море", "the sea"),
      t("Мурзик стоит у самой кромки воды, волна лижет лапы.", "Murzik stands right at the water's edge, a wave lapping his paws."),
      p("l1-2")),
    v("ptfl1-3", "a areia", t("песок", "the sand"),
      t("Мурзик пересыпает песок из лапы в лапу.", "Murzik pours sand from one paw to the other."),
      p("l1-3")),
    v("ptfl1-4", "Passa o protetor!", t("Намажься кремом от солнца!", "Put some sun cream on!"),
      t("Биа протягивает Мурзику тюбик крема от солнца.", "Bia hands Murzik a tube of sun cream."),
      p("l1-4")),
    v("ptfl1-5", "Cuidado com o sol!", t("Осторожно, солнце!", "Watch out for the sun!"),
      t("Над пляжем палит солнце, Мурзик прячется под зонтик.", "The sun blazes over the beach; Murzik hides under an umbrella."),
      p("l1-5")),
    v("ptfl1-6", "Vamos entrar na água?", t("Пойдём в воду?", "Shall we go in the water?"),
      t("Биа тянет Мурзика за лапу к морю.", "Bia pulls Murzik by the paw towards the sea."),
      p("l1-6")),
    v("ptfl1-7", "A água está gelada!", t("Вода ледяная!", "The water's freezing!"),
      t("Мурзик выскакивает из воды, шерсть дыбом.", "Murzik leaps out of the water, fur standing on end."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("Первое утро на острове", "First morning on the island"),
    note: t(
      "Primeiro — «сначала». Gelada — «ледяная» (о воде, о напитках). Corajoso — «смелый».",
      "Primeiro means “first”. Gelada means “ice-cold” (for water and drinks). Corajoso means “brave”.",
    ),
    lines: [
      line("murzik", "Nossa! Que praia linda!", t("Ого! Какой чудесный пляж!", "Wow! What a gorgeous beach!")),
      line("bia", "Olha o mar! Vamos entrar na água?", t("Смотри, море! Пойдём в воду?", "Look at the sea! Shall we go in?")),
      line("murzik", "Vamos! Mas primeiro… o protetor.", t("Пойдём! Но сначала… крем от солнца.", "Let's go! But first… sun cream.")),
      line("bia", "Isso! Cuidado com o sol!", t("Правильно! Осторожно с солнцем!", "Good thinking! Watch out for the sun!")),
      line("murzik", "Aaai! A água está gelada!", t("А-а-ай! Вода ледяная!", "Aaargh! The water's freezing!")),
      line("bia", "Gelada? Está ótima! Seja corajoso!", t("Ледяная? Отличная вода! Будь смелее!", "Freezing? It's lovely! Be brave!")),
    ],
    gist: choice("ptfl1-d1", t("Почему Мурзик кричит?", "Why does Murzik shout?"), [
      [t("Вода холодная.", "The water's cold."), true],
      [t("Его ужалила медуза.", "A jellyfish stung him."), false],
      [t("Он потерял крем.", "He lost the sun cream."), false],
    ]),
  },
  grammar: [
    g(
      t("Vamos…? — «Давай…?»", "Vamos…? — “Shall we…? Let's…”"),
      [
        t(
          "Vamos + глагол — это и вопрос «давай?», и предложение «давай!»: Vamos entrar na água? — Пойдём в воду? Vamos! — Пойдём!",
          "Vamos + verb works as both “Shall we…?” and “Let's…!”: Vamos entrar na água? (Shall we go in the water?) — Vamos! (Let's go!)",
        ),
        t(
          "Cuidado com… — «осторожно с…»: Cuidado com o sol! Cuidado com a onda!",
          "Cuidado com… means “watch out for…”: Cuidado com o sol! Cuidado com a onda!",
        ),
      ],
      [
        ["Vamos à praia?", t("Пойдём на пляж?", "Shall we go to the beach?")],
        ["Cuidado com o carro!", t("Осторожно, машина!", "Watch out for the car!")],
      ],
    ),
  ],
  tasks: [
    choice("ptfl1-t1", t("Как предложить «Пойдём в воду?»", "How do you say “Shall we go in the water?”"), [
      ["Vamos entrar na água?", true],
      ["Vamos água entrar?", false],
      ["Nós água?", false],
    ], { skill: "grammar" }),
    listen("ptfl1-t2", t("Послушай. Какая вода?", "Listen. What's the water like?"), "A água está gelada!", [
      [t("Ледяная.", "Freezing."), true],
      [t("Тёплая.", "Warm."), false],
      [t("Грязная.", "Dirty."), false],
    ]),
    match("ptfl1-t3", PAIRS, [
      ["o mar", t("море", "the sea")],
      ["a areia", t("песок", "the sand")],
      ["o sol", t("солнце", "the sun")],
      ["o protetor", t("крем от солнца", "sun cream")],
    ], { skill: "words" }),
    spell("ptfl1-t4", t("Собери из букв слово «море».", "Spell the word for “sea”."), "mar"),
    speak("ptfl1-t5", "Vamos entrar na água?", "Vamos! Mas primeiro o protetor.", t("Пойдём! Но сначала крем от солнца.", "Let's go! But sun cream first."), {
      help: t("Согласись вслух.", "Agree aloud."),
    }),
    choice("ptfl1-t6", t("Как сказать «Мне холодно»?", "How do you say “I'm cold”?"), [
      ["Estou com frio.", true],
      ["Faz calor.", false],
      ["Estou com sede.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "towel",
    itemName: t("Пляжное полотенце", "Beach towel"),
    itemNameRu: "Toalha de praia",
    ru: "Oba! Uma toalha de praia!",
    en: t("Ура! Пляжное полотенце!", "Hooray! A beach towel!"),
    a11y: t("На перилах домика сушится полосатое пляжное полотенце.", "A striped beach towel dries on the cabin's railing."),
    image: p("towel"),
    steps: [
      t("Мурзик дрожит после моря.", "Murzik is shivering after his swim."),
      t("Биа заворачивает его в большое полосатое полотенце.", "Bia wraps him in a big striped towel."),
      t("«Fica com ela!» — «Оставь его себе!»", "“Fica com ela!” — “Keep it!”"),
      t("Полотенце сушится на перилах домика.", "The towel dries on the railing of their beach cabin."),
    ],
    bridge: t("На пляже кто-то кричит: «Ei! Vocês gostam de surfe?»", "Someone on the beach shouts: “Ei! Vocês gostam de surfe?”"),
  },
};

const fl2: Lesson = {
  id: "pt-a1-floripa-2",
  level: "A1",
  cityId: "pt-floripa",
  number: 2,
  title: t("Eu gosto de… — Я люблю…", "Eu gosto de… — I like…"),
  minutes: 7,
  goals: [
    t("Сказать, что тебе нравится и что нет", "Say what you like and don't like"),
    t("Спросить, что нравится другому", "Ask what someone else likes"),
    t("Сказать «очень люблю», «обожаю»", "Say you really like or love something"),
  ],
  vocabNote: t(
    "Gostar — «нравиться», но строится иначе: тот, кто любит, — подлежащее, а после глагола всегда de, как в «я в восторге от…»: eu gosto de praia.",
    "Gostar means “to like” and is always followed by de: eu gosto de praia — I like the beach. Never just “gosto praia”.",
  ),
  vocab: [
    v("ptfl2-1", "Eu gosto de praia.", t("Я люблю пляж.", "I like the beach."),
      t("Мурзик блаженно лежит на полотенце под зонтиком.", "Murzik lies blissfully on a towel under an umbrella."),
      p("l2-1")),
    v("ptfl2-2", "Você gosta de surfar?", t("Ты любишь сёрфинг?", "Do you like surfing?"),
      t("Загорелый парень-подросток с доской для сёрфинга.", "A suntanned teenage boy with a surfboard."),
      p("l2-2")),
    v("ptfl2-3", "Eu não gosto de areia no pelo.", t("Не люблю, когда песок в шерсти.", "I don't like sand in my fur."),
      t("Мурзик с отвращением отряхивается от песка.", "Murzik shakes the sand out of his fur in disgust."),
      p("l2-3")),
    v("ptfl2-4", "Eu gosto muito!", t("Мне очень нравится!", "I really like it!"),
      t("Мурзик восторженно кивает.", "Murzik nods enthusiastically."),
      p("l2-4")),
    v("ptfl2-5", "Eu adoro o mar.", t("Я обожаю море.", "I love the sea."),
      t("Биа с закрытыми глазами слушает шум волн.", "Bia listens to the waves with her eyes closed."),
      p("l2-5")),
    v("ptfl2-6", "Do que você gosta?", t("Что ты любишь?", "What do you like?"),
      t("Подросток с доской с интересом смотрит на Мурзика.", "The boy with the surfboard looks at Murzik curiously."),
      p("l2-6")),
    v("ptfl2-7", "Eu não gosto nada!", t("Мне совсем не нравится!", "I don't like it at all!"),
      t("Мурзик морщится от брызг солёной воды.", "Murzik screws up his face at a splash of salty water."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Знакомство с Каю", "Meeting Caio"),
    note: t(
      "Ei! — «Эй!». Pelo — «шерсть». Eu dou aula — «я даю уроки».",
      "Ei! means “Hey!”. Pelo means “fur”. Eu dou aula means “I give lessons”.",
    ),
    lines: [
      line("caio", "Ei! Vocês gostam de surfe? Eu sou o Caio. Eu dou aula!", t("Эй! Любите сёрфинг? Я Каю. Я даю уроки!", "Hey! Do you like surfing? I'm Caio. I give lessons!")),
      line("bia", "Eu gosto muito! E eu adoro o mar.", t("Я очень люблю! И я обожаю море.", "I really like it! And I love the sea.")),
      line("caio", "E você, gatinho? Você gosta de surfar?", t("А ты, котик? Любишь сёрфинг?", "And you, little cat? Do you like surfing?")),
      line("murzik", "Eu não sei… Eu gosto de praia. Mas eu não gosto de água fria.", t("Не знаю… Я люблю пляж. Но не люблю холодную воду.", "I don't know… I like the beach. But I don't like cold water.")),
      line("caio", "Do que você gosta, então?", t("А что ты тогда любишь?", "So what do you like?")),
      line("murzik", "Eu gosto de areia… mas não gosto de areia no pelo!", t("Люблю песок… но не люблю песок в шерсти!", "I like sand… but I don't like sand in my fur!")),
    ],
    gist: choice("ptfl2-d1", t("Кто такой Каю?", "Who is Caio?"), [
      [t("Инструктор по сёрфингу.", "A surf instructor."), true],
      [t("Музыкант из группы.", "One of the band's musicians."), false],
      [t("Продавец мороженого.", "An ice-cream seller."), false],
    ]),
  },
  grammar: [
    g(
      t("Люблю: gosto de, gosto do, gosto da", "Gostar de: gosto de, gosto do, gosto da"),
      [
        t(
          "После gostar всегда de. Если дальше слово с артиклем, они сливаются: gosto do mar (de + o), gosto da praia (de + a). Если дальше глагол — просто de: gosto de surfar.",
          "Gostar is always followed by de. If a noun with “the” follows, they join: gosto do mar (de + o), gosto da praia (de + a). Before a verb, just de: gosto de surfar (I like surfing — note: no -ing, just the basic verb). For things in general you can drop “the”: gosto de praia (I like beaches).",
        ),
        t(
          "Вопрос «Что ты любишь?» тоже с de, и оно встаёт вперёд: Do que você gosta?",
          "The question also keeps de — at the front: Do que você gosta? (literally “Of what do you like?”).",
        ),
      ],
      [
        ["Eu gosto do mar.", t("Я люблю море.", "I like the sea.")],
        ["Você gosta de nadar?", t("Ты любишь плавать?", "Do you like swimming?")],
      ],
    ),
  ],
  tasks: [
    choice("ptfl2-t1", t("Как сказать «Я люблю пляж»? (a praia)", "How do you say “I like the beach”? (a praia)"), [
      ["Eu gosto da praia.", true],
      ["Eu gosto a praia.", false],
      ["Eu gosto do praia.", false],
    ], { skill: "grammar" }),
    listen("ptfl2-t2", t("Послушай. Что любит человек?", "Listen. What does the person like?"), "Eu adoro o mar.", [
      [t("Море.", "The sea."), true],
      [t("Песок.", "Sand."), false],
      [t("Сёрфинг.", "Surfing."), false],
    ]),
    match("ptfl2-t3", PAIRS, [
      ["Eu gosto.", t("Мне нравится.", "I like it.")],
      ["Eu adoro.", t("Я обожаю.", "I love it.")],
      ["Eu não gosto.", t("Мне не нравится.", "I don't like it.")],
      ["Eu gosto muito.", t("Мне очень нравится.", "I really like it.")],
    ], { skill: "words" }),
    missing("ptfl2-t4", t("Какой буквы не хватает? («нравится»)", "Which letter is missing? (“like”)"), "go", "to", "s", ["s", "z", "ss"]),
    speak("ptfl2-t5", "Do que você gosta?", "Eu gosto de música e de praia.", t("Я люблю музыку и пляж. (Расскажи о себе.)", "I like music and the beach. (Talk about yourself.)"), {
      help: t("Скажи вслух, что ты любишь.", "Say aloud what you like."),
    }),
    choice("ptfl2-t6", t("Как сказать «Осторожно, солнце!»?", "How do you say “Watch out for the sun!”?"), [
      ["Cuidado com o sol!", true],
      ["Passa o sol!", false],
      ["Que sol lindo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sunscreen",
    itemName: t("Крем от солнца", "Sun cream"),
    itemNameRu: "Protetor solar",
    ru: "Oba! Protetor solar!",
    en: t("Ура! Крем от солнца!", "Hooray! Sun cream!"),
    a11y: t("На полке стоит жёлтый тюбик крема от солнца с нарисованным солнышком.", "A yellow tube of sun cream with a little sun on it stands on the shelf."),
    image: p("sunscreen"),
    steps: [
      t("Каю видит, что у Мурзика покраснел нос.", "Caio notices that Murzik's nose has gone pink."),
      t("Он даёт ему свой крем от солнца.", "He gives him his own sun cream."),
      t("«Todo dia, tá?» — «Каждый день, договорились?»", "“Todo dia, tá?” — “Every day, OK?”"),
      t("Крем стоит на полке у двери.", "The sun cream stands on the shelf by the door."),
    ],
    bridge: t("Каю протягивает Мурзику маленькую доску: «Amanhã, aula de surfe!»", "Caio hands Murzik a little board: “Amanhã, aula de surfe!”"),
  },
};

const fl3: Lesson = {
  id: "pt-a1-floripa-3",
  level: "A1",
  cityId: "pt-floripa",
  number: 3,
  title: t("A aula de surfe — Урок сёрфинга", "A aula de surfe — The surf lesson"),
  minutes: 7,
  goals: [
    t("Сказать, что умеешь и не умеешь", "Say what you can and can't do"),
    t("Понять простые команды", "Understand simple instructions"),
    t("Подбодрить: Muito bem!", "Encourage someone: Muito bem!"),
  ],
  vocabNote: t(
    "Saber — «знать» и «уметь»: Eu sei surfar — «я умею сёрфить». А в Парати была фраза Eu não sei nadar.",
    "Saber means “to know” and also “to know how”: Eu sei surfar — I can surf. You heard Eu não sei nadar in Paraty.",
  ),
  vocab: [
    v("ptfl3-1", "Você sabe surfar?", t("Ты умеешь сёрфить?", "Can you surf?"),
      t("Каю держит две доски, большую и маленькую.", "Caio holds two surfboards, a big one and a small one."),
      p("l3-1")),
    v("ptfl3-2", "Eu sei um pouco.", t("Немного умею.", "I can, a little."),
      t("Биа уверенно стоит на доске на песке.", "Bia stands confidently on a board on the sand."),
      p("l3-2")),
    v("ptfl3-3", "Fica em pé!", t("Вставай!", "Stand up!"),
      t("Мурзик неуверенно встаёт на доске на маленькой волне.", "Murzik wobbles to his feet on a board on a small wave."),
      p("l3-3")),
    v("ptfl3-4", "Cuidado com a onda!", t("Осторожно, волна!", "Watch out for the wave!"),
      t("Сзади на Мурзика надвигается волна.", "A wave rolls up behind Murzik."),
      p("l3-4")),
    v("ptfl3-5", "Eu caí!", t("Я упал!", "I fell off!"),
      t("Мурзик плюхается в воду, только хвост торчит.", "Murzik splashes into the water; only his tail sticks out."),
      p("l3-5")),
    v("ptfl3-6", "De novo!", t("Ещё раз!", "Again!"),
      t("Мурзик снова забирается на доску.", "Murzik climbs back onto the board."),
      p("l3-6")),
    v("ptfl3-7", "Muito bem!", t("Молодец!", "Well done!"),
      t("Каю хлопает в ладоши, Мурзик стоит на доске.", "Caio claps as Murzik rides the board."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Первая волна", "The first wave"),
    note: t(
      "Deita — «ложись». Rema — «греби». Agora — «сейчас». Consegui! — «У меня получилось!»",
      "Deita means “lie down”. Rema means “paddle”. Agora means “now”. Consegui! means “I did it!”",
    ),
    lines: [
      line("caio", "Murzik, você sabe surfar?", t("Мурзик, ты умеешь сёрфить?", "Murzik, can you surf?")),
      line("murzik", "Não… A Bia sabe um pouco.", t("Нет… А Биа немного умеет.", "No… Bia can, a bit.")),
      line("caio", "Tudo bem! Deita na prancha. Rema! Agora fica em pé!", t("Ничего! Ложись на доску. Греби! А теперь вставай!", "No problem! Lie on the board. Paddle! Now stand up!")),
      line("bia", "Cuidado com a onda!", t("Осторожно, волна!", "Watch out for the wave!")),
      line("murzik", "Ai! Eu caí!", t("Ай! Я упал!", "Ow! I fell off!")),
      line("caio", "De novo! Rema… fica em pé…", t("Ещё раз! Греби… вставай…", "Again! Paddle… stand up…")),
      line("murzik", "Consegui! Consegui!", t("Получилось! Получилось!", "I did it! I did it!")),
      line("caio", "Muito bem, Murzik!", t("Молодец, Мурзик!", "Well done, Murzik!")),
    ],
    gist: choice("ptfl3-d1", t("Получилось ли у Мурзика?", "Does Murzik manage it in the end?"), [
      [t("Да, со второй попытки.", "Yes, on his second try."), true],
      [t("Нет, он всё время падает.", "No, he keeps falling off."), false],
      [t("Он не захотел пробовать.", "He didn't want to try."), false],
    ]),
  },
  grammar: [
    g(
      t("Sei — «умею»", "Sei — “I know how”"),
      [
        t(
          "Saber + глагол — «уметь»: Eu sei surfar, você sabe nadar? Формы: eu sei, você / ele sabe, nós sabemos, eles sabem. Eu sei — неправильная форма, её надо запомнить.",
          "Saber + verb means “can, know how to”: Eu sei surfar, você sabe nadar? Forms: eu sei, você / ele sabe, nós sabemos, eles sabem. Eu sei is irregular — just learn it.",
        ),
        t(
          "Eu caí — «я упал(а)» — это прошедшее время. Здесь хорошая новость: в прошедшем времени португальские глаголы по роду не меняются, «упал» и «упала» — одно слово.",
          "Eu caí (I fell) is in the past tense. You'll meet the past properly later — for now, enjoy that it's a single word.",
        ),
      ],
      [
        ["Eu sei nadar.", t("Я умею плавать.", "I can swim.")],
        ["Você sabe surfar?", t("Ты умеешь сёрфить?", "Can you surf?")],
      ],
    ),
  ],
  tasks: [
    choice("ptfl3-t1", t("Как сказать «Я умею плавать»?", "How do you say “I can swim”?"), [
      ["Eu sei nadar.", true],
      ["Eu sabe nadar.", false],
      ["Eu sou nadar.", false],
    ], { skill: "grammar" }),
    listen("ptfl3-t2", t("Послушай. Что говорит Каю?", "Listen. What does Caio say?"), "Fica em pé!", [
      [t("Вставай!", "Stand up!"), true],
      [t("Ложись!", "Lie down!"), false],
      [t("Осторожно!", "Watch out!"), false],
    ]),
    match("ptfl3-t3", PAIRS, [
      ["Eu caí!", t("Я упал!", "I fell off!")],
      ["De novo!", t("Ещё раз!", "Again!")],
      ["Muito bem!", t("Молодец!", "Well done!")],
      ["a prancha", t("доска", "the surfboard")],
    ], { skill: "words" }),
    spell("ptfl3-t4", t("Собери из букв слово «волна».", "Spell the word for “wave”."), "onda"),
    speak("ptfl3-t5", "Você sabe surfar?", "Não, eu não sei surfar. Mas eu sei nadar!", t("Нет, я не умею сёрфить. Но я умею плавать!", "No, I can't surf. But I can swim!"), {
      help: t("Ответь вслух, что ты умеешь и чего не умеешь.", "Say aloud what you can and can't do."),
    }),
    choice("ptfl3-t6", t("Как спросить «Что ты любишь?»", "How do you ask “What do you like?”"), [
      ["Do que você gosta?", true],
      ["Você gosta que?", false],
      ["Que você gosta de?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "surfboard",
    itemName: t("Маленькая доска для сёрфинга", "Little surfboard"),
    itemNameRu: "Prancha",
    ru: "Oba! Uma prancha!",
    en: t("Ура! Доска для сёрфинга!", "Hooray! A surfboard!"),
    a11y: t("К стене домика прислонена маленькая жёлтая доска для сёрфинга.", "A small yellow surfboard leans against the wall of the cabin."),
    image: p("surfboard"),
    steps: [
      t("После урока Каю отдаёт Мурзику свою детскую доску.", "After the lesson Caio gives Murzik his old children's board."),
      t("«Você tem talento!» — «У тебя талант!»", "“Você tem talento!” — “You've got talent!”"),
      t("Мурзик гордо несёт её в домик.", "Murzik proudly carries it to the cabin."),
      t("Доска стоит у стены.", "The board leans against the wall."),
    ],
    bridge: t("На закате на пляже начинается футбол. Каю зовёт: «Bora jogar?»", "At sunset a football game starts on the beach. Caio calls: “Bora jogar?”"),
  },
};

const fl4: Lesson = {
  id: "pt-a1-floripa-4",
  level: "A1",
  cityId: "pt-floripa",
  number: 4,
  title: t("Futebol na praia — Футбол на пляже", "Futebol na praia — Beach football"),
  minutes: 7,
  goals: [
    t("Позвать играть", "Invite someone to play"),
    t("Понять, что кричат в игре", "Understand what people shout in a game"),
    t("Сказать, кто выиграл", "Say who won"),
  ],
  vocabNote: t(
    "Bora! — разговорное «Давай! Погнали!», сокращение от Vamos embora. Time [чи́ми] — «команда».",
    "Bora! is casual for “Let's go!” — short for vamos embora. And careful: time [CHEE-mee] means “team”, not “time”!",
  ),
  vocab: [
    v("ptfl4-1", "Vamos jogar futebol?", t("Сыграем в футбол?", "Shall we play football?"),
      t("Каю держит мяч под мышкой и машет Мурзику.", "Caio holds a ball under his arm and waves to Murzik."),
      p("l4-1")),
    v("ptfl4-2", "Passa a bola!", t("Пасуй!", "Pass the ball!"),
      t("Мурзик бежит по песку и кричит, подняв лапу.", "Murzik runs across the sand, paw in the air, shouting."),
      p("l4-2")),
    v("ptfl4-3", "Chuta!", t("Бей!", "Shoot!"),
      t("Мурзик со всей силы бьёт по мячу.", "Murzik kicks the ball as hard as he can."),
      p("l4-3")),
    v("ptfl4-4", "o time azul", t("синяя команда", "the blue team"),
      t("Ребята в синих майках обнимаются.", "Kids in blue shirts hug each other."),
      p("l4-4")),
    v("ptfl4-5", "Quem ganhou?", t("Кто выиграл?", "Who won?"),
      t("Биа с судейским свистком в руке.", "Bia holding a referee's whistle."),
      p("l4-5")),
    v("ptfl4-6", "Nós ganhamos!", t("Мы выиграли!", "We won!"),
      t("Мурзик и Каю прыгают от радости.", "Murzik and Caio jump for joy."),
      p("l4-6")),
    v("ptfl4-7", "Empate!", t("Ничья!", "It's a draw!"),
      t("Счёт на песке: 2 : 2.", "The score written in the sand: 2–2."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Матч на закате", "A match at sunset"),
    note: t(
      "Gol — «гол». Golaço — «шикарный гол». Placar — «счёт».",
      "Gol means “goal”. Golaço is a fantastic goal. Placar means “the score”.",
    ),
    lines: [
      line("caio", "Bora! Vamos jogar futebol? Você é do time azul, Murzik.", t("Погнали! Сыграем в футбол? Ты за синих, Мурзик.", "Come on! Shall we play football? You're on the blue team, Murzik.")),
      line("murzik", "Eu? Tá bom!", t("Я? Ладно!", "Me? OK!")),
      line("caio", "Murzik, passa a bola!", t("Мурзик, пасуй!", "Murzik, pass the ball!")),
      line("bia", "Não! Chuta, Murzik! Chuta!", t("Нет! Бей, Мурзик! Бей!", "No! Shoot, Murzik! Shoot!")),
      line("murzik", "Gooool!", t("Го-о-ол!", "Gooooal!")),
      line("caio", "Golaço! Nós ganhamos!", t("Шикарный гол! Мы выиграли!", "What a goal! We won!")),
      line("bia", "Não, o placar é dois a dois. Empate!", t("Нет, счёт два — два. Ничья!", "No, the score's two–two. It's a draw!")),
    ],
    gist: choice("ptfl4-d1", t("Чем закончился матч?", "How did the match end?"), [
      [t("Ничьей, два — два.", "A two–two draw."), true],
      [t("Синие выиграли.", "The blue team won."), false],
      [t("Мурзик ушёл с поля.", "Murzik left the pitch."), false],
    ]),
  },
  grammar: [
    g(
      t("Nós ganhamos: «выигрываем» и «выиграли»", "Nós ganhamos: present and past look the same"),
      [
        t(
          "У глаголов на -ar форма с nós одна и та же в настоящем и прошедшем: nós ganhamos — «мы выигрываем» и «мы выиграли». Что имеется в виду, понятно по ситуации.",
          "For -ar verbs, the nós form is the same in the present and the past: nós ganhamos means “we win” or “we won”. The context tells you which.",
        ),
        t(
          "Jogar — «играть в игру»: jogar futebol, jogar vôlei. А для музыки — tocar (помнишь Сан-Паулу?).",
          "Jogar is for games and sports: jogar futebol, jogar vôlei. For instruments it's tocar (remember São Paulo?).",
        ),
      ],
      [
        ["Nós jogamos todo dia.", t("Мы играем каждый день.", "We play every day.")],
        ["Ontem nós jogamos futebol.", t("Вчера мы играли в футбол.", "Yesterday we played football.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfl4-t1", t("Как сказать «играть в волейбол»?", "How do you say “play volleyball”?"), [
      ["jogar vôlei", true],
      ["tocar vôlei", false],
      ["fazer vôlei", false],
    ], { skill: "grammar" }),
    listen("ptfl4-t2", t("Послушай. Кто выиграл?", "Listen. Who won?"), "O time azul ganhou!", [
      [t("Синяя команда.", "The blue team."), true],
      [t("Ничья.", "It was a draw."), false],
      [t("Красная команда.", "The red team."), false],
    ]),
    match("ptfl4-t3", PAIRS, [
      ["Passa a bola!", t("Пасуй!", "Pass the ball!")],
      ["Chuta!", t("Бей!", "Shoot!")],
      ["Empate!", t("Ничья!", "It's a draw!")],
      ["o time", t("команда", "the team")],
    ], { skill: "words" }),
    missing("ptfl4-t4", t("Какой буквы не хватает? («мяч»)", "Which letter is missing? (“ball”)"), "bo", "a", "l", ["l", "u", "r"]),
    speak("ptfl4-t5", "Vamos jogar futebol?", "Vamos! Eu sou do time azul!", t("Давай! Я за синих!", "Let's go! I'm on the blue team!"), {
      help: t("Согласись вслух и выбери команду.", "Agree aloud and pick a team."),
    }),
    choice("ptfl4-t6", t("Как сказать «Я умею немного»?", "How do you say “I can, a little”?"), [
      ["Eu sei um pouco.", true],
      ["Eu sou um pouco.", false],
      ["Eu caí um pouco.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sunglasses",
    itemName: t("Солнечные очки", "Sunglasses"),
    itemNameRu: "Óculos de sol",
    ru: "Oba! Óculos de sol!",
    en: t("Ура! Солнечные очки!", "Hooray! Sunglasses!"),
    a11y: t("На столике лежат маленькие солнечные очки в зелёной оправе.", "A small pair of green sunglasses lies on the table."),
    image: p("sunglasses"),
    steps: [
      t("После матча Каю вручает Мурзику «приз».", "After the match Caio gives Murzik a “prize”."),
      t("Это маленькие солнечные очки!", "It's a tiny pair of sunglasses!"),
      t("«Para o craque!» — «Для звезды футбола!»", "“Para o craque!” — “For the star player!”"),
      t("Очки лежат на столике в домике.", "The sunglasses lie on the table in the cabin."),
    ],
    bridge: t("Каю рассказывает о своём обычном дне на острове.", "Caio tells them about a normal day on the island."),
  },
};

const fl5: Lesson = {
  id: "pt-a1-floripa-5",
  level: "A1",
  cityId: "pt-floripa",
  number: 5,
  title: t("Sempre, às vezes, nunca — Всегда, иногда, никогда", "Sempre, às vezes, nunca — Always, sometimes, never"),
  minutes: 7,
  goals: [
    t("Рассказать, что делаешь каждый день", "Talk about what you do every day"),
    t("Сказать, как часто", "Say how often"),
    t("Сказать «утром, днём, вечером»", "Say “in the morning, afternoon, evening”"),
  ],
  vocabNote: t(
    "С nunca не нужно «не»: Eu nunca como peixe. Но можно сказать и Eu não como nunca — так говорят для усиления.",
    "Nunca means “never”: Eu nunca como peixe. You'll also hear Eu não como nunca — a double negative is perfectly correct in Portuguese.",
  ),
  vocab: [
    v("ptfl5-1", "Eu sempre nado de manhã.", t("Я всегда плаваю по утрам.", "I always swim in the morning."),
      t("Каю на рассвете ныряет в волну.", "Caio dives into a wave at sunrise."),
      p("l5-1")),
    v("ptfl5-2", "Às vezes eu surfo à tarde.", t("Иногда я сёрфлю днём.", "Sometimes I surf in the afternoon."),
      t("Каю на доске на высокой волне.", "Caio riding a big wave on his board."),
      p("l5-2")),
    v("ptfl5-3", "Eu nunca acordo cedo.", t("Я никогда не встаю рано.", "I never get up early."),
      t("Биа спит, накрыв голову подушкой, будильник звенит.", "Bia sleeps with a pillow over her head as the alarm rings."),
      p("l5-3")),
    v("ptfl5-4", "todo dia", t("каждый день", "every day"),
      t("Календарь, где каждый день отмечен солнышком.", "A calendar with a little sun drawn on every day."),
      p("l5-4")),
    v("ptfl5-5", "à noite", t("вечером, ночью", "in the evening, at night"),
      t("Пляж под луной.", "The beach under the moon."),
      p("l5-5")),
    v("ptfl5-6", "O que você faz de manhã?", t("Что ты делаешь утром?", "What do you do in the morning?"),
      t("Биа с блокнотом берёт у Каю интервью.", "Bia interviews Caio with a notebook."),
      p("l5-6")),
    v("ptfl5-7", "Eu tomo café na praia.", t("Я завтракаю на пляже.", "I have breakfast on the beach."),
      t("Каю сидит на песке с чашкой и бананом.", "Caio sits on the sand with a cup and a banana."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("Интервью для блога", "An interview for the blog"),
    note: t(
      "Tomar café — «завтракать», буквально «пить кофе». De manhã — «утром», à tarde — «днём», à noite — «вечером».",
      "Tomar café means “to have breakfast” (literally “to take coffee”). De manhã — in the morning, à tarde — in the afternoon, à noite — in the evening.",
    ),
    lines: [
      line("bia", "Caio, é para o meu blog. O que você faz de manhã?", t("Каю, это для моего блога. Что ты делаешь утром?", "Caio, this is for my blog. What do you do in the morning?")),
      line("caio", "Eu sempre nado de manhã. E eu tomo café na praia.", t("Утром я всегда плаваю. И завтракаю на пляже.", "I always swim in the morning. And I have breakfast on the beach.")),
      line("bia", "E à tarde?", t("А днём?", "And in the afternoon?")),
      line("caio", "Às vezes eu surfo, às vezes eu dou aula.", t("Иногда сёрфлю, иногда даю уроки.", "Sometimes I surf, sometimes I give lessons.")),
      line("murzik", "E à noite?", t("А вечером?", "And in the evening?")),
      line("caio", "À noite eu jogo futebol. Todo dia!", t("Вечером играю в футбол. Каждый день!", "In the evening I play football. Every day!")),
      line("murzik", "Eu nunca acordo cedo… Mas aqui eu quero nadar todo dia!", t("Я никогда не встаю рано… Но здесь хочу плавать каждый день!", "I never get up early… But here I want to swim every day!")),
    ],
    gist: choice("ptfl5-d1", t("Что Каю делает каждый вечер?", "What does Caio do every evening?"), [
      [t("Играет в футбол.", "He plays football."), true],
      [t("Даёт уроки сёрфинга.", "He gives surf lessons."), false],
      [t("Рано ложится спать.", "He goes to bed early."), false],
    ]),
  },
  grammar: [
    g(
      t("Как часто: sempre, às vezes, nunca", "How often: sempre, às vezes, nunca"),
      [
        t(
          "Sempre — «всегда», às vezes — «иногда», nunca — «никогда». Обычно они стоят перед глаголом: Eu sempre nado. Às vezes можно поставить и в начало: Às vezes eu surfo.",
          "Sempre (always), às vezes (sometimes) and nunca (never) usually go before the verb: Eu sempre nado. Às vezes can also start the sentence: Às vezes eu surfo.",
        ),
        t(
          "С nunca частица não не нужна: Eu nunca acordo cedo. — Я никогда не встаю рано.",
          "With nunca you don't need não: Eu nunca acordo cedo — I never get up early.",
        ),
      ],
      [
        ["Eu sempre tomo café.", t("Я всегда завтракаю.", "I always have breakfast.")],
        ["Ela nunca come carne.", t("Она никогда не ест мясо.", "She never eats meat.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfl5-t1", t("Как сказать «Я никогда не встаю рано»?", "How do you say “I never get up early”?"), [
      ["Eu nunca acordo cedo.", true],
      ["Eu acordo nunca cedo não.", false],
      ["Nunca eu não acordo.", false],
    ], { skill: "grammar" }),
    listen("ptfl5-t2", t("Послушай. Когда Каю плавает?", "Listen. When does Caio swim?"), "Eu sempre nado de manhã.", [
      [t("Всегда утром.", "Always in the morning."), true],
      [t("Иногда вечером.", "Sometimes in the evening."), false],
      [t("Никогда.", "Never."), false],
    ]),
    match("ptfl5-t3", PAIRS, [
      ["sempre", t("всегда", "always")],
      ["às vezes", t("иногда", "sometimes")],
      ["nunca", t("никогда", "never")],
      ["todo dia", t("каждый день", "every day")],
    ], { skill: "words" }),
    spell("ptfl5-t4", t("Собери из букв слово «никогда».", "Spell the word for “never”."), "nunca"),
    speak("ptfl5-t5", "O que você faz de manhã?", "De manhã eu sempre tomo café.", t("Утром я всегда завтракаю.", "In the morning I always have breakfast."), {
      help: t("Расскажи вслух, что ты делаешь утром.", "Say aloud what you do in the morning."),
    }),
    choice("ptfl5-t6", t("Матч закончился 1 : 1. Что кричат?", "The match ends 1–1. What do people shout?"), [
      ["Empate!", true],
      ["Nós ganhamos!", false],
      ["Chuta!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bucket",
    itemName: t("Ведёрко и лопатка", "Bucket and spade"),
    itemNameRu: "Balde e pá",
    ru: "Oba! Um balde e uma pá!",
    en: t("Ура! Ведёрко и лопатка!", "Hooray! A bucket and spade!"),
    a11y: t("У порога стоят красное ведёрко и жёлтая лопатка, полные песка.", "A red bucket and a yellow spade, full of sand, stand by the doorstep."),
    image: p("bucket"),
    steps: [
      t("Утром Мурзик строит на пляже замок из песка.", "In the morning Murzik builds a sandcastle on the beach."),
      t("Маленькие дети приносят ему ведёрко и лопатку.", "Some little kids bring him a bucket and spade."),
      t("«Pode ficar!» — «Оставь себе!»", "“Pode ficar!” — “You can keep them!”"),
      t("Ведёрко стоит у порога домика.", "The bucket stands by the cabin door."),
    ],
    bridge: t("Вечером Каю ведёт их к лагуне — смотреть закат.", "In the evening Caio takes them to the lagoon to watch the sunset."),
  },
};

const fl6: Lesson = {
  id: "pt-a1-floripa-6",
  level: "A1",
  cityId: "pt-floripa",
  number: 6,
  title: t("O pôr do sol — Закат", "O pôr do sol — Sunset"),
  minutes: 7,
  goals: [
    t("Описать закат и небо", "Describe a sunset and the sky"),
    t("Сказать «я люблю это место»", "Say “I love this place”"),
    t("Заказать асаи", "Order an açaí"),
  ],
  vocabNote: t(
    "Açaí [асаи́] — ягода из Амазонии. Из неё делают густой холодный крем, его едят ложкой с бананом и гранолой.",
    "Açaí [ah-sah-EE] is a berry from the Amazon. It's made into a thick, frozen purée that you eat with a spoon, topped with banana and granola.",
  ),
  vocab: [
    v("ptfl6-1", "o pôr do sol", t("закат", "the sunset"),
      t("Оранжевое солнце садится в лагуну.", "An orange sun sets over the lagoon."),
      p("l6-1")),
    v("ptfl6-2", "Que céu bonito!", t("Какое красивое небо!", "What a beautiful sky!"),
      t("Розово-оранжевое небо над водой.", "A pink and orange sky over the water."),
      p("l6-2")),
    v("ptfl6-3", "Está ventando.", t("Ветрено.", "It's windy."),
      t("Ветер треплет Мурзику шерсть и уши.", "The wind ruffles Murzik's fur and ears."),
      p("l6-3")),
    v("ptfl6-4", "Vamos sentar aqui?", t("Сядем здесь?", "Shall we sit here?"),
      t("Биа показывает на большой плоский камень у воды.", "Bia points to a big flat rock by the water."),
      p("l6-4")),
    v("ptfl6-5", "Eu amo este lugar.", t("Я люблю это место.", "I love this place."),
      t("Мурзик мечтательно смотрит на воду.", "Murzik gazes dreamily at the water."),
      p("l6-5")),
    v("ptfl6-6", "Um açaí, por favor.", t("Асаи, пожалуйста.", "An açaí, please."),
      t("Миска с тёмно-фиолетовым асаи, бананом и гранолой.", "A bowl of dark purple açaí with banana and granola."),
      p("l6-6")),
    v("ptfl6-7", "Olha as estrelas!", t("Смотри, звёзды!", "Look at the stars!"),
      t("Ночное небо, полное звёзд.", "A night sky full of stars."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("У лагуны", "By the lagoon"),
    note: t(
      "Lagoa — «лагуна, озеро». Doce — «сладкий». Pode ser — «можно, давай».",
      "Lagoa means “lagoon, lake”. Doce means “sweet”. Pode ser means “OK, why not”.",
    ),
    lines: [
      line("caio", "Olha o pôr do sol na lagoa!", t("Смотрите, закат над лагуной!", "Look at the sunset over the lagoon!")),
      line("murzik", "Que céu bonito! Mas está ventando…", t("Какое красивое небо! Но ветрено…", "What a beautiful sky! But it's windy…")),
      line("bia", "Vamos sentar aqui? Um açaí, Murzik?", t("Сядем здесь? Асаи, Мурзик?", "Shall we sit here? An açaí, Murzik?")),
      line("murzik", "Pode ser! Um açaí, por favor.", t("Давай! Асаи, пожалуйста.", "Why not! An açaí, please.")),
      line("murzik", "Hmm, é muito doce! Eu amo este lugar.", t("М-м, такой сладкий! Я люблю это место.", "Mmm, it's so sweet! I love this place.")),
      line("bia", "Eu também. Olha as estrelas!", t("Я тоже. Смотри, звёзды!", "Me too. Look at the stars!")),
    ],
    gist: choice("ptfl6-d1", t("Что едят Мурзик и Биа?", "What do Murzik and Bia eat?"), [
      [t("Асаи.", "Açaí."), true],
      [t("Пиццу.", "Pizza."), false],
      [t("Жареную рыбу.", "Fried fish."), false],
    ]),
  },
  grammar: [
    g(
      t("Нравится, обожаю, люблю: gostar, adorar, amar", "Gostar, adorar, amar"),
      [
        t(
          "Три ступени: eu gosto (нравится) → eu adoro (обожаю) → eu amo (люблю всем сердцем). Amo говорят и о людях, и о местах: Eu amo este lugar.",
          "Three steps up: eu gosto (I like) → eu adoro (I love, I adore) → eu amo (I love with all my heart). Brazilians say amo about people and places alike: Eu amo este lugar.",
        ),
        t(
          "После adorar и amar предлог de не нужен: Eu adoro o mar, Eu amo pizza. Только у gostar есть de.",
          "Adorar and amar don't take de: Eu adoro o mar, Eu amo pizza. Only gostar needs de.",
        ),
      ],
      [
        ["Eu gosto de açaí.", t("Мне нравится асаи.", "I like açaí.")],
        ["Eu amo o Brasil!", t("Я люблю Бразилию!", "I love Brazil!")],
      ],
    ),
  ],
  tasks: [
    choice("ptfl6-t1", t("Выбери правильную фразу.", "Pick the correct sentence."), [
      ["Eu adoro o mar.", true],
      ["Eu adoro do mar.", false],
      ["Eu gosto o mar.", false],
    ], { skill: "grammar" }),
    listen("ptfl6-t2", t("Послушай. Какая погода?", "Listen. What's the weather like?"), "Está ventando.", [
      [t("Ветрено.", "It's windy."), true],
      [t("Идёт дождь.", "It's raining."), false],
      [t("Жарко.", "It's hot."), false],
    ]),
    match("ptfl6-t3", PAIRS, [
      ["o pôr do sol", t("закат", "the sunset")],
      ["o céu", t("небо", "the sky")],
      ["as estrelas", t("звёзды", "the stars")],
      ["a lagoa", t("лагуна", "the lagoon")],
    ], { skill: "words" }),
    missing("ptfl6-t4", t("Какой буквы не хватает? («небо»)", "Which letter is missing? (“sky”)"), "c", "u", "é", ["é", "e", "ê"]),
    speak("ptfl6-t5", "Você gosta deste lugar?", "Eu amo este lugar!", t("Я люблю это место!", "I love this place!"), {
      help: t("Ответь вслух, как тебе это место.", "Say aloud how you feel about the place."),
    }),
    choice("ptfl6-t6", t("Как сказать «Я всегда плаваю по утрам»?", "How do you say “I always swim in the morning”?"), [
      ["Eu sempre nado de manhã.", true],
      ["Eu nunca nado de manhã.", false],
      ["Eu nado sempre à noite.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "coconut",
    itemName: t("Чашка из кокоса", "Coconut cup"),
    itemNameRu: "Copo de coco",
    ru: "Oba! Um copo de coco!",
    en: t("Ура! Кокосовая чашка!", "Hooray! A coconut cup!"),
    a11y: t("Половинка кокоса, отполированная до блеска, стоит на подоконнике как чашка.", "Half a coconut shell, polished till it shines, sits on the windowsill like a cup."),
    image: p("coconut"),
    steps: [
      t("Продавец асаи протягивает Мурзику половинку кокоса.", "The açaí seller hands Murzik half a coconut shell."),
      t("«Para o seu açaí!» — «Для твоего асаи!»", "“Para o seu açaí!” — “For your açaí!”"),
      t("Мурзик несёт её домой.", "Murzik carries it home."),
      t("Кокосовая чашка стоит на подоконнике.", "The coconut cup sits on the windowsill."),
    ],
    bridge: t("Утром на пляже Каю вдруг кричит: «Murzik! O seu papagaio! Eu vi!»", "In the morning Caio suddenly shouts on the beach: “Murzik! O seu papagaio! Eu vi!”"),
  },
};

const fl7: Lesson = {
  id: "pt-a1-floripa-7",
  level: "A1",
  cityId: "pt-floripa",
  number: 7,
  title: t("Que gol! — Какой гол!", "Que gol! — What a goal!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Сказать «буду скучать»", "Say “I'll miss you”"),
    t("Вспомнить все слова Флорианополиса", "Review all the words from Florianópolis"),
  ],
  vocabNote: t(
    "Valeu! — разговорное «Спасибо! Круто!». Vou sentir saudade — «буду скучать».",
    "Valeu! is a casual “Thanks! Cheers!”. Vou sentir saudade means “I'll miss you”.",
  ),
  vocab: [
    v("ptfl7-1", "Que gol!", t("Какой гол!", "What a goal!"),
      t("Зелёный попугай сидит на перекладине футбольных ворот на пляже и машет крыльями.", "The green parrot perches on the crossbar of a beach goal, flapping his wings."),
      p("l7-1")),
    v("ptfl7-2", "Ele gritou…", t("Он закричал…", "He shouted…"),
      t("Каю изображает крик попугая, сложив руки рупором.", "Caio cups his hands like a megaphone, imitating the parrot."),
      p("l7-2")),
    v("ptfl7-3", "em cima da trave", t("на перекладине ворот", "on the crossbar"),
      t("Пустые футбольные ворота на пляже.", "An empty football goal on the beach."),
      p("l7-3")),
    v("ptfl7-4", "Eles foram para Foz do Iguaçu.", t("Они уехали в Фос-ду-Игуасу.", "They've gone to Foz do Iguaçu."),
      t("Карта: длинная стрелка вглубь страны, к водопадам.", "A map: a long arrow inland, towards the waterfalls."),
      p("l7-4")),
    v("ptfl7-5", "as cataratas", t("водопады", "the waterfalls"),
      t("Маленькая картинка: огромные водопады в зелёных джунглях.", "A little picture: huge waterfalls in green jungle."),
      p("l7-5")),
    v("ptfl7-6", "Valeu, Caio!", t("Спасибо, Каю!", "Cheers, Caio!"),
      t("Мурзик и Каю стукаются кулаком и лапой.", "Murzik and Caio bump fist and paw."),
      p("l7-6")),
    v("ptfl7-7", "Vou sentir saudade!", t("Буду скучать!", "I'll miss you!"),
      t("Мурзик в последний раз оглядывается на пляж.", "Murzik takes one last look at the beach."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Eu vi — «я видел». Domingo — «воскресенье». Longe daqui — «далеко отсюда».",
      "Eu vi means “I saw”. Domingo means “Sunday”. Longe daqui means “far from here”.",
    ),
    lines: [
      line("caio", "Murzik! O seu papagaio! Eu vi! No domingo, no jogo de futebol!", t("Мурзик! Твой попугай! Я его видел! В воскресенье, на футболе!", "Murzik! Your parrot! I saw him! On Sunday, at the football game!")),
      line("murzik", "O Pipoca! E o que ele fez?", t("Пипока! И что он делал?", "Pipoca! And what did he do?")),
      line("caio", "Ele estava em cima da trave. E ele gritou: Que gol! Que gol!", t("Сидел на перекладине ворот. И кричал: «Какой гол! Какой гол!»", "He was sitting on the crossbar. And he shouted: What a goal! What a goal!")),
      line("bia", "É ele! E a banda?", t("Это он! А группа?", "That's him! And the band?")),
      line("caio", "Eles foram para Foz do Iguaçu. Para as cataratas. É longe daqui!", t("Уехали в Фос-ду-Игуасу. К водопадам. Это далеко отсюда!", "They've gone to Foz do Iguaçu. To the falls. It's a long way from here!")),
      line("murzik", "Valeu, Caio! Vou sentir saudade!", t("Спасибо, Каю! Буду скучать!", "Cheers, Caio! I'll miss you!")),
      line("caio", "Eu também! Volta para surfar!", t("Я тоже! Возвращайся сёрфить!", "Me too! Come back and surf!")),
    ],
    gist: choice("ptfl7-d1", t("Какую фразу выучил Пипока во Флорианополисе?", "What phrase did Pipoca learn in Florianópolis?"), [
      [t("«Какой гол!»", "“What a goal!”"), true],
      [t("«Пасуй!»", "“Pass the ball!”"), false],
      [t("«Какой холод!»", "“It's freezing!”"), false],
    ]),
  },
  grammar: [
    g(
      t("Vou + глагол — «буду, собираюсь»", "Vou + verb — “I'm going to”"),
      [
        t(
          "Будущее в разговоре строят просто: vou (от ir, «идти») + глагол. Vou sentir saudade — «буду скучать», vou nadar — «пойду плавать». Подробнее — в Олинде.",
          "The easy way to talk about the future: vou (from ir, to go) + verb. Vou sentir saudade — “I'm going to miss you”, vou nadar — “I'm going to swim”. More on this in Olinda.",
        ),
        t(
          "Eu vi — «я видел(а)», ele gritou — «он закричал», ele fez — «он сделал». Это прошедшее время, его мы будем учить в Форталезе.",
          "Eu vi (I saw), ele gritou (he shouted), ele fez (he did) are all past tense. We'll learn it properly in Fortaleza.",
        ),
      ],
      [
        ["Eu vou surfar amanhã.", t("Завтра я буду сёрфить.", "I'm going to surf tomorrow.")],
        ["Nós vamos sentir saudade.", t("Мы будем скучать.", "We're going to miss you.")],
      ],
    ),
  ],
  tasks: [
    listen("ptfl7-t1", t("Аудиоэкзамен. Что рассказывает Каю?", "Audio exam. What does Caio tell them?"), "O papagaio estava em cima da trave e gritou: Que gol! A banda foi para Foz do Iguaçu.", [
      [t("Попугай кричал на футболе, а группа уехала к водопадам.", "The parrot shouted at the football, and the band went to the waterfalls."), true],
      [t("Попугай научился сёрфить.", "The parrot learned to surf."), false],
      [t("Группа осталась на острове.", "The band stayed on the island."), false],
    ]),
    choice("ptfl7-t2", t("Как сказать «Буду скучать!»?", "How do you say “I'll miss you!”?"), [
      ["Vou sentir saudade!", true],
      ["Estou com saudade de nada!", false],
      ["Vou sentar aqui!", false],
    ], { skill: "words" }),
    build("ptfl7-t3", t("Собери фразу: «Они уехали в Фос-ду-Игуасу».", "Build the sentence: “They've gone to Foz do Iguaçu”."), ["Eles", "foram", "para", "Foz", "do", "Iguaçu."]),
    missing("ptfl7-t4", t("Какой буквы не хватает? («водопады»)", "Which letter is missing? (“waterfalls”)"), "catara", "as", "t", ["t", "d", "ch"]),
    speak("ptfl7-t5", "Tchau! Volta para surfar!", "Valeu! Vou sentir saudade!", t("Спасибо! Буду скучать!", "Cheers! I'll miss you!"), {
      help: t("Попрощайся вслух.", "Say goodbye aloud."),
    }),
    script("ptfl7-t6", t("Вспомни весь Флорианополис. Закончи разговор с Каю.", "Remember all of Florianópolis. Finish the conversation with Caio."), [
      { speaker: CAIO, text: "Oi! Você gosta de praia?" },
      { speaker: YOU, answer: "Eu adoro! Mas a água está gelada!", options: ["Eu adoro! Mas a água está gelada!", "Eu gosto o mar.", "Empate!"] },
      { speaker: CAIO, text: "Você sabe surfar?" },
      { speaker: YOU, answer: "Eu sei um pouco.", options: ["Eu sei um pouco.", "Eu sou surfar.", "Passa a bola!"] },
      { speaker: CAIO, text: "Vamos jogar futebol à noite?" },
      { speaker: YOU, answer: "Vamos! Eu sou do time azul!", options: ["Vamos! Eu sou do time azul!", "Nunca à noite não.", "Olha as estrelas!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-floripa",
    itemName: t("Фото Пипоки на воротах", "Photo of Pipoca on the goal"),
    itemNameRu: "Foto do Pipoca no gol",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай на перекладине пляжных ворот, внизу ребята с мячом смотрят на него, задрав головы.",
      "A photo: the green parrot on the crossbar of a beach goal, with kids and a ball looking up at him.",
    ),
    image: p("photo"),
    steps: [
      t("Каю находит фото в телефоне.", "Caio finds a photo on his phone."),
      t("Пипока сидит на воротах, как настоящий болельщик!", "There's Pipoca on the goal, like a real fan!"),
      t("Биа печатает его в фотобудке у пляжа.", "Bia prints it at a photo booth by the beach."),
      t("Подпись: «Que gol!» Фото — в альбом.", "Caption: “Que gol!” Into the album it goes."),
    ],
    bridge: t("Впереди долгая дорога на запад, к водопадам Игуасу.", "Ahead lies a long trip — all the way across southern Brazil to the Iguaçu Falls."),
  },
};

const story: CityStory = {
  home: {
    name: t("Домик на пляже", "A beach cabin"),
    nameRu: "A cabana na praia",
    image: p("home"),
    a11y: t(
      "Маленький деревянный домик на сваях у пляжа: веранда, синие ставни, за домиком море. На веранде — чемодан Мурзика.",
      "A little wooden cabin on stilts by the beach: a veranda, blue shutters, the sea behind. Murzik's suitcase sits on the veranda.",
    ),
  },
  keepsakeId: "photo-floripa",
  welcomeRu: "Olá, Floripa!",
  welcomeEn: t("Привет, Флорипа!", "Hello, Floripa!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Мурзик и Биа на мосту на остров. Мурзик снимает шапку и шарф, впереди море и солнце.",
    "Murzik and Bia on the bridge to the island. Murzik pulls off his hat and scarf; ahead are the sea and the sun.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Каю с доской машет на пляже.", "Caio waves from the beach, surfboard under his arm."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки на воротах.", "Murzik sticks the photo of Pipoca on the goal into the album."),
      lines: [
        { en: t("Пятая страница альбома: Пипока на футбольных воротах.", "Page five of the album: Pipoca on the football goal.") },
        { ru: "Que gol!", en: t("Какой гол!", "What a goal!") },
        { en: t("Кажется, Пипока стал настоящим болельщиком.", "Looks like Pipoca has become a real football fan.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Florianópolis completa!", en: t("Флорианополис пройден!", "Florianópolis complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Каю машет на прощание.", "Caio waves goodbye."),
      lines: [
        { ru: "Tchau, Caio! Tchau, praia!", en: t("Пока, Каю! Пока, пляж!", "Bye, Caio! Bye, beach!") },
        { ru: "Próxima parada: Foz do Iguaçu!", en: t("Следующая остановка: Фос-ду-Игуасу!", "Next stop: Foz do Iguaçu!") },
      ],
    },
    {
      image: p("plane"),
      a11y: t("Маленький самолёт летит над зелёными лесами и реками.", "A small plane flies over green forests and rivers."),
      lines: [{ ru: "Florianópolis → Foz do Iguaçu", en: t("Флорианополис → Фос-ду-Игуасу", "Florianópolis → Foz do Iguaçu") }],
    },
    {
      image: pic("pt/foz/arrival"),
      a11y: t(
        "Мурзик и Биа на смотровой площадке, перед ними десятки огромных водопадов в джунглях, над водой радуга.",
        "Murzik and Bia on a viewing platform facing dozens of huge waterfalls in the jungle, a rainbow over the spray.",
      ),
      lines: [
        { ru: "Olá, Foz do Iguaçu!", en: t("Привет, Фос-ду-Игуасу!", "Hello, Foz do Iguaçu!") },
        { ru: "Que barulho!", en: t("Какой шум!", "What a roar!") },
      ],
    },
  ],
};

export const ptFloripa = {
  id: "pt-floripa",
  name: t("Флорианополис", "Florianópolis"),
  namePt: "Florianópolis",
  lessons: [fl1, fl2, fl3, fl4, fl5, fl6, fl7],
  story,
};
