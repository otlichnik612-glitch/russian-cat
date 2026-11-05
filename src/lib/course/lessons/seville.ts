import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Seville · «Праздник и чувства» · A2 lessons 1–7.
 * «Сначала Севилья», said Asya's message in Marseille, and in Oslo Lev said «Лев помнит Севилью».
 * Heat, siesta, a summer festival in the neighbourhood. Marisol (about 20) studies flamenco; her grandmother
 * Dolores (about 75) teaches it and learned Russian long ago from a friend — Asya. At the festival Dolores sees
 * an old white cat in a grey hat: Lev. Forty years ago Asya and Lev danced here and were happy; then Asya left
 * and Lev waited a long time and then left too — nobody knows why. Asya called Dolores a few days ago:
 * «Придёт рыжий котёнок с платком». Dolores gives Murzik the fan Asya once painted for her, to give to Asya.
 * Grammar: short adjectives — рад, готов, свободен, занят, похож, уверен, должен, счастлив; мне жарко / грустно.
 */

const p = (name: string) => pic(`seville/${name}`);

export const seville1: Lesson = {
  id: "a2-seville-1",
  level: "A2",
  cityId: "seville",
  number: 1,
  title: "It's So Hot!",
  minutes: 8,
  goals: ["Say how you feel: мне жарко, я хочу пить", "Understand advice about the heat", "Use мне + жарко / скучно / грустно"],
  vocabNote: "Russian often says how you feel with мне + a word ending in -о: мне жарко (I'm hot), мне скучно (I'm bored), мне грустно (I'm sad).",
  vocab: [
    v("sv1-1", "Мне очень жарко.", "I'm very hot.", "Murzik fans himself with his paw, his tongue out.", "Listen to Мне очень жарко", p("1-1")),
    v("sv1-2", "сорок градусов в тени", "forty degrees in the shade", "A street thermometer showing 40°.", "Listen to сорок градусов в тени", p("1-2")),
    v("sv1-3", "Я хочу пить.", "I'm thirsty.", "Murzik looks longingly at a glass of water.", "Listen to Я хочу пить", p("1-3")),
    v("sv1-4", "сиеста", "siesta, an afternoon rest", "Closed shutters and an empty street at three in the afternoon.", "Listen to сиеста", p("1-4")),
    v("sv1-5", "Не выходите на солнце днём.", "Don't go out in the sun in the daytime.", "Marisol points at the blazing sun and shakes her finger.", "Listen to Не выходите на солнце днём", p("1-5")),
    v("sv1-6", "кондиционер", "air conditioning", "A white air conditioner on the wall blowing cool air.", "Listen to кондиционер", p("1-6")),
    v("sv1-7", "Носите шляпу.", "Wear a hat.", "A wide straw sun hat on a hook.", "Listen to Носите шляпу", p("1-7")),
    v("sv1-8", "Вечером станет прохладнее.", "It'll get cooler in the evening.", "Evening light; people come out onto the square.", "Listen to Вечером станет прохладнее", p("1-8")),
  ],
  letters: [
    letter("жарко", "ZHAR-ka: stress on ЖАР; the final о sounds like а.", "Мне жарко.", "I'm hot."),
    letter("кондиционер", "kan-di-tsy-a-NER: stress on the end; ц is hard, so и after it sounds like ы.", "Включи кондиционер!", "Turn on the air conditioning!"),
  ],
  dialogue: {
    title: "Three in the afternoon",
    note: "In summer Seville is one of the hottest cities in Europe. In the afternoon many shops close and people rest.",
    lines: [
      line("murzik", "Мне очень жарко! Сколько сейчас градусов?", "I'm so hot! What's the temperature now?"),
      line("marisol", "Сорок в тени. Добро пожаловать в Севилью! Я Марисоль, вы снимаете комнату у нашей соседки.", "Forty in the shade. Welcome to Seville! I'm Marisol — you're renting a room from our neighbour."),
      line("tom", "А почему на улице никого нет?", "And why is there nobody in the street?"),
      line("marisol", "Сиеста. Не выходите на солнце днём — это опасно. И носите шляпу.", "Siesta. Don't go out in the sun in the daytime — it's dangerous. And wear a hat."),
      line("murzik", "Я хочу пить! И мне немного грустно — я хотел погулять.", "I'm thirsty! And I'm a bit sad — I wanted to go for a walk."),
      line("marisol", "Вот вода и кондиционер. Не грусти: вечером станет прохладнее, и весь город выйдет на улицу.", "Here's water and the air conditioning. Don't be sad: it'll get cooler in the evening, and the whole city will come out."),
    ],
    gist: choice("sv1-d1", "Why is the street empty?", [
      ["It's siesta time — it's too hot to go out.", true],
      ["Everyone is at the festival.", false],
      ["It's very early in the morning.", false],
    ]),
  },
  grammar: [
    {
      title: "Мне жарко, мне грустно",
      paragraphs: [
        "To say how you feel, Russian uses the dative + a word in -о: мне жарко, тебе холодно, ему скучно, нам весело, ей грустно.",
        "Past: мне было жарко. Future: мне будет жарко. Compare: я хочу пить (I'm thirsty) — here it's a verb.",
      ],
      examples: [
        { ru: "Тебе не жарко в свитере?", en: "Aren't you hot in that jumper?" },
        { ru: "Вчера нам было очень весело.", en: "We had a lot of fun yesterday." },
      ],
    },
  ],
  tasks: [
    listen("sv1-t1", "Listen. What's the temperature?", "Сорок в тени. Добро пожаловать в Севилью!", [
      ["Forty in the shade.", true],
      ["Fourteen in the shade.", false],
      ["Thirty in the sun.", false],
    ]),
    choice("sv1-t2", "“I'm hot.” Which is right?", [
      ["Мне жарко.", true],
      ["Я жарко.", false],
      ["Меня жарко.", false],
    ], { skill: "grammar" }),
    fill("sv1-t3", "Choose the right word: “Aren't you (to a friend) hot?”", "", "не жарко?", "Тебе", ["Тебе", "Ты", "Тебя"], { skill: "grammar" }),
    read("sv1-t4", "Read the sign in the guesthouse. What should you NOT do?", "ЛЕТО В СЕВИЛЬЕ\n• Пейте много воды\n• Носите шляпу\n• Не выходите на солнце с 14:00 до 18:00\n• Закрывайте окна днём", [
      ["Go out in the sun between 2 and 6 pm.", true],
      ["Drink a lot of water.", false],
      ["Wear a hat.", false],
    ]),
    match("sv1-t5", "Match the Russian with the English.", [
      ["Я хочу пить.", "I'm thirsty."],
      ["сиеста", "an afternoon rest"],
      ["кондиционер", "air conditioning"],
      ["Носите шляпу.", "Wear a hat."],
    ], { skill: "words" }),
    tf("sv1-t6", "Marisol says it will get hotter in the evening.", false, "True or false?", { skill: "listening" }),
    speak("sv1-t7", "Как ты себя чувствуешь?", "Мне очень жарко, и я хочу пить. Можно включить кондиционер?", "I'm very hot and I'm thirsty. Can we turn on the air conditioning?", {
      help: "Say out loud how you feel in the heat.",
    }),
  ],
  reward: {
    itemId: "paperfan",
    itemName: "Paper fan",
    itemNameRu: "Бумажный веер",
    ru: "Веер — лучше любого кондиционера!",
    en: "A fan — better than any air conditioner!",
    a11y: "A cheap red paper fan lies open on a white windowsill; outside, an orange tree in a tiled courtyard.",
    image: p("reward-1"),
    steps: ["Their room is in an old house with a tiled courtyard and an orange tree.", "Marisol gives Murzik a red paper fan.", "“В Севилье у всех есть веер.”", "Murzik waves it all afternoon."],
    bridge: "In the evening Marisol knocks on their door. “В субботу у нас праздник на площади. Вы свободны?”",
  },
};

export const seville2: Lesson = {
  id: "a2-seville-2",
  level: "A2",
  cityId: "seville",
  number: 2,
  title: "Are You Free on Saturday?",
  minutes: 8,
  goals: ["Accept and refuse invitations", "Say you're free, busy, glad, ready", "Use short adjectives: свободен, свободна, свободны"],
  vocabNote: "Short adjectives describe a state now: я свободен (free), занят (busy), рад (glad), готов (ready). They change for gender and number.",
  vocab: [
    v("sv2-1", "Ты свободен в субботу?", "Are you free on Saturday?", "Marisol leans in the doorway with a flyer.", "Listen to Ты свободен в субботу", p("2-1")),
    v("sv2-2", "Я занят. / Я занята.", "I'm busy.", "Tom at a laptop, surrounded by photos.", "Listen to Я занят", p("2-2")),
    v("sv2-3", "Я буду рад(а) прийти.", "I'll be glad to come.", "Murzik smiles and puts a paw on his heart.", "Listen to Я буду рад прийти", p("2-3")),
    v("sv2-4", "праздник на площади", "a festival in the square", "A square hung with paper lanterns and coloured flags.", "Listen to праздник на площади", p("2-4")),
    v("sv2-5", "К сожалению, …", "Unfortunately, …", "Tom shrugs sadly.", "Listen to К сожалению", p("2-5")),
    v("sv2-6", "Мы обязательно придём.", "We'll definitely come.", "Murzik and Tom give a thumbs-up.", "Listen to Мы обязательно придём", p("2-6")),
    v("sv2-7", "Что надеть?", "What should I wear?", "Murzik looks at an open, almost empty wardrobe.", "Listen to Что надеть", p("2-7")),
    v("sv2-8", "Ты готов танцевать?", "Are you ready to dance?", "Marisol strikes a flamenco pose, one arm raised.", "Listen to Ты готов танцевать", p("2-8")),
  ],
  letters: [
    letter("свободен", "sva-BO-din: stress on БО; the last е sounds like и.", "Я свободен.", "I'm free."),
    letter("занята", "za-ni-TA: stress moves to the end in the feminine: занят, but занята.", "Она занята.", "She's busy."),
  ],
  dialogue: {
    title: "An invitation",
    note: "Short adjectives change: он свободен, она свободна, они свободны. Stress can move: занят — занята.",
    lines: [
      line("marisol", "Мурзик, Том, вы свободны в субботу? У нас праздник на площади.", "Murzik, Tom, are you free on Saturday? We've got a festival in the square."),
      line("murzik", "Я свободен! Я буду рад прийти.", "I'm free! I'll be glad to come."),
      line("tom", "К сожалению, днём я занят — у меня съёмка. Но вечером я свободен.", "Unfortunately I'm busy in the daytime — I have a photo shoot. But in the evening I'm free."),
      line("marisol", "Отлично! Праздник начинается в девять вечера. Будет музыка и фламенко.", "Great! The festival starts at nine in the evening. There'll be music and flamenco."),
      line("murzik", "Мы обязательно придём! А что надеть?", "We'll definitely come! And what should I wear?"),
      line("marisol", "Что-нибудь лёгкое. И главное — ты готов танцевать?", "Something light. And most importantly — are you ready to dance?"),
      line("murzik", "Готов! Ну… почти готов.", "Ready! Well… almost ready."),
    ],
    gist: choice("sv2-d1", "When is Tom free on Saturday?", [
      ["In the evening.", true],
      ["In the daytime.", false],
      ["He isn't free at all.", false],
    ]),
  },
  grammar: [
    {
      title: "Short adjectives: рад, готов, свободен, занят",
      paragraphs: [
        "He: свободен, занят, рад, готов. She: свободна, занята, рада, готова. They / вы: свободны, заняты, рады, готовы.",
        "They are used after the subject without “am / is / are”: Я свободен. Она занята. Past: я был свободен, она была занята. Future: я буду рад(а).",
      ],
      examples: [
        { ru: "Марисоль сегодня занята, она танцует.", en: "Marisol is busy today, she's dancing." },
        { ru: "Вы готовы? — Да, готовы!", en: "Are you ready? — Yes, we're ready!" },
      ],
    },
  ],
  tasks: [
    listen("sv2-t1", "Listen. What time does the festival start?", "Отлично! Праздник начинается в девять вечера. Будет музыка и фламенко.", [
      ["At nine in the evening.", true],
      ["At nine in the morning.", false],
      ["At seven in the evening.", false],
    ]),
    choice("sv2-t2", "“Marisol is busy.” Which is right?", [
      ["Марисоль занята.", true],
      ["Марисоль занят.", false],
      ["Марисоль заняты.", false],
    ], { skill: "grammar" }),
    fill("sv2-t3", "Choose the right form: “Are you (plural) ready?”", "Вы", "?", "готовы", ["готовы", "готов", "готова"], { skill: "grammar" }),
    read("sv2-t4", "Read the festival poster. What will there be at eleven?", "ПРАЗДНИК НА ПЛОЩАДИ\nСуббота\n21:00 — музыка\n22:00 — фламенко для всех\n23:00 — танцы до трёх ночи!\nВход свободный", [
      ["Dancing till three in the morning.", true],
      ["Flamenco for everyone.", false],
      ["Music.", false],
    ]),
    match("sv2-t5", "Match the Russian with the English.", [
      ["праздник на площади", "a festival in the square"],
      ["К сожалению", "Unfortunately"],
      ["Мы обязательно придём.", "We'll definitely come."],
      ["Что надеть?", "What should I wear?"],
    ], { skill: "words" }),
    tf("sv2-t6", "Tom is busy in the daytime because of a photo shoot.", true, "True or false?", { skill: "listening" }),
    script("sv2-t7", "Answer Marisol's invitation.", [
      { speaker: "Marisol", text: "Ты свободен (свободна) в субботу?" },
      { speaker: "You", answer: "Да, свободен (свободна)! Буду рад(а) прийти.", options: ["Да, свободен (свободна)! Буду рад(а) прийти.", "Да, свободно! Буду радостно прийти.", "Да, занято! Я готов."] },
      { speaker: "Marisol", text: "Ты готов (готова) танцевать?" },
      { speaker: "You", answer: "Почти готов (готова)!", options: ["Почти готов (готова)!", "Почти готово!", "Почти занятой!"] },
    ], { skill: "speaking" }),
  ],
  reward: {
    itemId: "flamencoposter",
    itemName: "Festival poster",
    itemNameRu: "Афиша праздника",
    ru: "Суббота — праздник!",
    en: "Saturday — the festival!",
    a11y: "A colourful poster with a flamenco dancer in a red dress is pinned to the wall next to the paper fan.",
    image: p("reward-2"),
    steps: ["Marisol leaves them the festival poster.", "A dancer in a red dress, paper lanterns, a guitar.", "Murzik pins it on the wall.", "Every morning he counts the days: three, two, one…"],
    bridge: "“Танцевать надо учиться,” says Marisol. “Пойдёмте в школу моей бабушки.”",
  },
};

export const seville3: Lesson = {
  id: "a2-seville-3",
  level: "A2",
  cityId: "seville",
  number: 3,
  title: "You Look Just Like Her",
  minutes: 8,
  goals: ["Say who someone looks like", "Talk about being sure and being acquainted", "Use похож на, уверен, знаком"],
  vocabNote: "Похож на + accusative — looks like: Ты похож на маму. Она похожа на бабушку.",
  vocab: [
    v("sv3-1", "школа фламенко", "a flamenco school", "A room with mirrors, a wooden floor and a guitar on a chair.", "Listen to школа фламенко", p("3-1")),
    v("sv3-2", "Ты так похож на неё!", "You look so much like her!", "Dolores stares at Murzik, one hand on her heart.", "Listen to Ты так похож на неё", p("3-2")),
    v("sv3-3", "Мы с ней знакомы.", "She and I know each other.", "An old photo: two young dancers, seen from behind.", "Listen to Мы с ней знакомы", p("3-3")),
    v("sv3-4", "Вы уверены?", "Are you sure?", "Tom raises his eyebrows.", "Listen to Вы уверены", p("3-4")),
    v("sv3-5", "Я абсолютно уверена.", "I'm absolutely sure.", "Dolores nods firmly.", "Listen to Я абсолютно уверена", p("3-5")),
    v("sv3-6", "лучшая подруга", "best friend (female)", "Two hands with matching bracelets.", "Listen to лучшая подруга", p("3-6")),
    v("sv3-7", "Она научила меня русскому.", "She taught me Russian.", "An old notebook with Russian words in two handwritings.", "Listen to Она научила меня русскому", p("3-7")),
    v("sv3-8", "Как тесен мир!", "What a small world!", "Murzik and Dolores laugh in front of the mirrors.", "Listen to Как тесен мир", p("3-8")),
  ],
  letters: [
    letter("похож", "pa-KHOSH: stress on the end; the final ж sounds like ш.", "Ты похож на неё.", "You look like her."),
    letter("уверена", "u-VYE-ri-na: stress on ВЕ.", "Я уверена.", "I'm sure."),
  ],
  dialogue: {
    title: "The mirror room",
    note: "Dolores, Marisol's grandmother, is about 75 and has taught flamenco for fifty years.",
    lines: [
      line("marisol", "Бабушка, это Мурзик и Том. Они хотят научиться танцевать.", "Grandma, this is Murzik and Tom. They want to learn to dance."),
      line("dolores", "Рыжий котёнок с платком… Ася говорила, что ты придёшь. Ты так похож на неё!", "A ginger kitten with a scarf… Asya said you would come. You look so much like her!"),
      line("murzik", "На кого?", "Like whom?"),
      line("dolores", "На Асю. Мы с ней давно знакомы. Она моя лучшая подруга. Она позвонила мне на днях.", "Like Asya. We've known each other a long time. She's my best friend. She called me a few days ago."),
      line("tom", "Вы уверены? Ася — его бабушка!", "Are you sure? Asya is his grandmother!"),
      line("dolores", "Я абсолютно уверена. Она научила меня русскому, а я её — танцевать.", "I'm absolutely sure. She taught me Russian, and I taught her to dance."),
      line("murzik", "Как тесен мир!", "What a small world!"),
    ],
    gist: choice("sv3-d1", "Who was Asya to Dolores?", [
      ["Her best friend.", true],
      ["Her teacher at school.", false],
      ["Her sister.", false],
    ]),
  },
  grammar: [
    {
      title: "Похож, уверен, знаком",
      paragraphs: [
        "похож / похожа / похожи на + accusative: Он похож на отца. Мы похожи на маму.",
        "уверен / уверена / уверены (sure); знаком / знакома / знакомы (acquainted): Мы с ней знакомы — she and I know each other.",
      ],
      examples: [
        { ru: "Марисоль очень похожа на бабушку.", en: "Marisol looks a lot like her grandmother." },
        { ru: "Ты уверен(а), что праздник в субботу?", en: "Are you sure the festival is on Saturday?" },
      ],
    },
  ],
  tasks: [
    listen("sv3-t1", "Listen. What did Asya teach Dolores?", "Я абсолютно уверена. Она научила меня русскому, а я её — танцевать.", [
      ["Russian.", true],
      ["To dance.", false],
      ["To paint.", false],
    ]),
    choice("sv3-t2", "“Marisol looks like her grandmother.” Which is right?", [
      ["Марисоль похожа на бабушку.", true],
      ["Марисоль похож на бабушку.", false],
      ["Марисоль похожа с бабушкой.", false],
    ], { skill: "grammar" }),
    fill("sv3-t3", "Choose the right form: “We (Tom and Murzik) are sure.”", "Мы", ".", "уверены", ["уверены", "уверен", "уверена"], { skill: "grammar" }),
    choice("sv3-t4", "Detective! How did Dolores recognise Murzik?", [
      ["A ginger kitten with a scarf — he looks like Asya.", true],
      ["Tom told her his name on the phone.", false],
      ["She saw his photo in a newspaper.", false],
    ], { skill: "listening" }),
    match("sv3-t5", "Match the Russian with the English.", [
      ["школа фламенко", "a flamenco school"],
      ["Вы уверены?", "Are you sure?"],
      ["лучшая подруга", "best friend"],
      ["Как тесен мир!", "What a small world!"],
    ], { skill: "words" }),
    read("sv3-t6", "Read the sign at the school. Since when has the school been open?", "ШКОЛА ФЛАМЕНКО ДОЛОРЕС\nс 1976 года\nУроки для детей и взрослых\nПервый урок — бесплатно!", [
      ["Since 1976.", true],
      ["Since 1996.", false],
      ["Since last year.", false],
    ]),
    speak("sv3-t7", "На кого ты похож (похожа)?", "Я похож (похожа) на маму: у меня её глаза и её улыбка. А характер — как у папы.", "I look like my mum: I've got her eyes and her smile. But my character is like my dad's.", {
      help: "Say out loud who you look like.",
    }),
  ],
  reward: {
    itemId: "castanets",
    itemName: "Castanets",
    itemNameRu: "Кастаньеты",
    ru: "Щёлк-щёлк — кастаньеты!",
    en: "Click-click — castanets!",
    a11y: "A pair of small wooden castanets tied with a red cord lies on the table.",
    image: p("reward-3"),
    steps: ["Dolores opens a drawer full of old castanets.", "She chooses the smallest pair.", "“Эти были у Аси, когда она училась.”", "Murzik clicks them: щёлк-щёлк."],
    bridge: "“А теперь — урок,” says Dolores. “Спину прямо! Ты должен слушать гитару.”",
  },
};

export const seville4: Lesson = {
  id: "a2-seville-4",
  level: "A2",
  cityId: "seville",
  number: 4,
  title: "A Flamenco Lesson",
  minutes: 8,
  goals: ["Follow a teacher's instructions", "Say what you must do: должен, должна", "Say something is difficult and ask for help"],
  vocabNote: "Должен / должна / должны + infinitive — must, have to: Ты должен держать спину прямо.",
  vocab: [
    v("sv4-1", "Спину прямо!", "Back straight!", "Dolores taps Murzik gently between the shoulders.", "Listen to Спину прямо", p("4-1")),
    v("sv4-2", "Ты должен слушать гитару.", "You must listen to the guitar.", "A guitarist plays in the corner.", "Listen to Ты должен слушать гитару", p("4-2")),
    v("sv4-3", "хлопать в ладоши", "to clap your hands", "Hands clapping in a circle.", "Listen to хлопать в ладоши", p("4-3")),
    v("sv4-4", "стучать каблуками", "to stamp your heels", "Shoes with small heels on a wooden floor.", "Listen to стучать каблуками", p("4-4")),
    v("sv4-5", "Это так трудно!", "It's so hard!", "Murzik trips over his own paws.", "Listen to Это так трудно", p("4-5")),
    v("sv4-6", "Я не успеваю!", "I can't keep up!", "Tom raises a hand, out of breath.", "Listen to Я не успеваю", p("4-6")),
    v("sv4-7", "Повторяйте за мной.", "Repeat after me.", "Dolores in front of the mirror, the class behind her.", "Listen to Повторяйте за мной", p("4-7")),
    v("sv4-8", "У тебя получается!", "You're getting it!", "Dolores claps and smiles.", "Listen to У тебя получается", p("4-8")),
  ],
  letters: [
    letter("должен", "DOL-zhyn: stress on ДОЛ; ж is always hard, so the е after it sounds like ы.", "Ты должен.", "You must."),
    letter("ладоши", "la-DO-shy: ш is hard, so и after it sounds like ы.", "хлопать в ладоши", "to clap your hands"),
  ],
  dialogue: {
    title: "Back straight!",
    note: "In flamenco people clap a rhythm — the palmas. Dancers stamp their heels on the floor.",
    lines: [
      line("dolores", "Спину прямо! Ты должен слушать гитару, а не смотреть на ноги.", "Back straight! You must listen to the guitar, not look at your feet."),
      line("murzik", "Это так трудно! У меня четыре лапы, и все разные.", "It's so hard! I've got four paws, and they're all different."),
      line("dolores", "Повторяйте за мной: раз, два, три — хлопаем в ладоши. Четыре — стучим каблуками.", "Repeat after me: one, two, three — we clap our hands. Four — we stamp our heels."),
      line("tom", "Медленнее, пожалуйста! Я не успеваю. И я должен ещё дышать.", "Slower, please! I can't keep up. And I still have to breathe."),
      line("dolores", "Мужчины всегда так говорят. Ещё раз! Мы должны быть готовы к субботе.", "Men always say that. Once more! We must be ready by Saturday."),
      line("dolores", "Мурзик, у тебя получается! Ася тоже сначала падала.", "Murzik, you're getting it! Asya fell over at first too."),
    ],
    gist: choice("sv4-d1", "What does Dolores say about Asya?", [
      ["Asya also fell over at first.", true],
      ["Asya never learned to dance.", false],
      ["Asya was the teacher.", false],
    ]),
  },
  grammar: [
    {
      title: "Должен, должна, должны",
      paragraphs: [
        "должен (he / I, man), должна (she / I, woman), должны (we, you, they) + infinitive: Я должен (должна) работать. Мы должны быть готовы.",
        "Past: я должен был, она должна была, мы должны были — I had to / I was supposed to.",
      ],
      examples: [
        { ru: "Марисоль должна танцевать в субботу.", en: "Marisol has to dance on Saturday." },
        { ru: "Мы должны были прийти в шесть.", en: "We were supposed to come at six." },
      ],
    },
  ],
  tasks: [
    listen("sv4-t1", "Listen. On which count do they stamp their heels?", "Повторяйте за мной: раз, два, три — хлопаем в ладоши. Четыре — стучим каблуками.", [
      ["On four.", true],
      ["On one.", false],
      ["On three.", false],
    ]),
    choice("sv4-t2", "“We must be ready by Saturday.” Which is right?", [
      ["Мы должны быть готовы к субботе.", true],
      ["Мы должен быть готов к субботе.", false],
      ["Мы должны быть готова к субботе.", false],
    ], { skill: "grammar" }),
    fill("sv4-t3", "Choose the right form: “Marisol has to dance on Saturday.”", "Марисоль", "танцевать в субботу.", "должна", ["должна", "должен", "должны"], { skill: "grammar" }),
    read("sv4-t4", "Read Dolores's rules on the wall. What must you NOT do?", "ПРАВИЛА ШКОЛЫ\n1. Спину прямо!\n2. Слушай гитару.\n3. Не смотри на ноги.\n4. Улыбайся!", [
      ["Look at your feet.", true],
      ["Smile.", false],
      ["Listen to the guitar.", false],
    ]),
    match("sv4-t5", "Match the Russian with the English.", [
      ["Спину прямо!", "Back straight!"],
      ["хлопать в ладоши", "to clap your hands"],
      ["Повторяйте за мной.", "Repeat after me."],
      ["У тебя получается!", "You're getting it!"],
    ], { skill: "words" }),
    tf("sv4-t6", "Tom asks Dolores to go faster.", false, "True or false?", { skill: "listening" }),
    speak("sv4-t7", "Что ты должен (должна) сделать на этой неделе?", "На этой неделе я должен (должна) много работать. А в субботу я должен (должна) отдохнуть!", "This week I have to work a lot. And on Saturday I have to rest!", {
      help: "Say out loud what you have to do this week.",
    }),
  ],
  reward: {
    itemId: "carnation",
    itemName: "Red carnation",
    itemNameRu: "Красная гвоздика",
    ru: "Гвоздика — для танцора!",
    en: "A carnation — for a dancer!",
    a11y: "A bright red carnation stands in a small blue-and-yellow tiled vase on the windowsill.",
    image: p("reward-4"),
    steps: ["After the lesson Dolores gives Murzik a red carnation.", "“Для танцора, у которого получается.”", "Murzik puts it in a small tiled vase.", "Then he practises in front of the window. Raz, dva, tri…"],
    bridge: "Saturday. Nine in the evening. The square is full of lanterns, guitars and people — and Murzik has butterflies in his tummy.",
  },
};

export const seville5: Lesson = {
  id: "a2-seville-5",
  level: "A2",
  cityId: "seville",
  number: 5,
  title: "The Festival",
  minutes: 8,
  goals: ["Talk about feelings at a party", "Use счастлив, доволен, удивлён", "React with surprise"],
  vocabNote: "More short adjectives for feelings: счастлив (happy), доволен (pleased), удивлён (surprised). And a verb: я волнуюсь (I'm nervous).",
  vocab: [
    v("sv5-1", "Я так счастлив!", "I'm so happy!", "Murzik spins on the square, paws in the air.", "Listen to Я так счастлив", p("5-1")),
    v("sv5-2", "Я немного волнуюсь.", "I'm a bit nervous.", "Murzik holds his castanets tightly, ears down.", "Listen to Я немного волнуюсь", p("5-2")),
    v("sv5-3", "Все довольны.", "Everyone is pleased.", "Smiling faces round the square.", "Listen to Все довольны", p("5-3")),
    v("sv5-4", "Я очень удивлён (удивлена).", "I'm very surprised.", "Tom's mouth falls open.", "Listen to Я очень удивлён", p("5-4")),
    v("sv5-5", "бумажные фонарики", "paper lanterns", "Strings of round paper lanterns over the square.", "Listen to бумажные фонарики", p("5-5")),
    v("sv5-6", "Посмотри вон туда!", "Look over there!", "Marisol points across the square.", "Listen to Посмотри вон туда", p("5-6")),
    v("sv5-7", "белый кот в серой шляпе", "a white cat in a grey hat", "An old white cat in a grey hat with a feather stands at the edge of the crowd.", "Listen to белый кот в серой шляпе", p("5-7")),
    v("sv5-8", "Я глазам своим не верю!", "I can't believe my eyes!", "Dolores drops her castanets.", "Listen to Я глазам своим не верю", p("5-8")),
  ],
  letters: [
    letter("счастлив", "SHAS-lif: сч sounds like щ, a long soft sh; т is silent; the final в sounds like ф.", "Я счастлив!", "I'm happy!"),
    letter("удивлён", "u-div-LYON: ё is always stressed.", "Я удивлён.", "I'm surprised."),
  ],
  dialogue: {
    title: "Under the lanterns",
    note: "Murzik dances with Marisol; Tom takes photos. Dolores watches from a chair by the guitarists.",
    lines: [
      line("murzik", "Я немного волнуюсь… А теперь — я так счастлив! Я танцую!", "I'm a bit nervous… And now — I'm so happy! I'm dancing!"),
      line("marisol", "Смотри, бабушка довольна. Все довольны!", "Look, Grandma is pleased. Everyone is pleased!"),
      line("tom", "Я очень удивлён — Мурзик танцует лучше меня.", "I'm very surprised — Murzik dances better than me."),
      line("marisol", "Посмотри вон туда! Под фонариками, у фонтана.", "Look over there! Under the lanterns, by the fountain."),
      line("murzik", "Белый кот в серой шляпе! Это Лев!", "A white cat in a grey hat! It's Lev!"),
      line("dolores", "Лев? Не может быть! Я глазам своим не верю! Я не видела его сорок лет…", "Lev? It can't be! I can't believe my eyes! I haven't seen him for forty years…"),
      line("tom", "Он опять уходит… Исчез.", "He's leaving again… Gone."),
    ],
    gist: choice("sv5-d1", "Who does Murzik see at the festival?", [
      ["Lev, the white cat in a grey hat.", true],
      ["Asya.", false],
      ["Isabelle from Marseille.", false],
    ]),
  },
  grammar: [
    {
      title: "Feelings: счастлив, доволен, удивлён",
      paragraphs: [
        "счастлив / счастлива / счастливы; доволен / довольна / довольны (+ instrumental: доволен праздником); удивлён / удивлена / удивлены.",
        "Волноваться is a verb: я волнуюсь, ты волнуешься. Не волнуйся! — Don't worry!",
      ],
      examples: [
        { ru: "Долорес довольна учениками.", en: "Dolores is pleased with her students." },
        { ru: "Мы были так счастливы в тот вечер!", en: "We were so happy that evening!" },
      ],
    },
  ],
  tasks: [
    listen("sv5-t1", "Listen. Where is the white cat?", "Посмотри вон туда! Под фонариками, у фонтана.", [
      ["Under the lanterns, by the fountain.", true],
      ["On the stage with the guitarists.", false],
      ["At the school door.", false],
    ]),
    choice("sv5-t2", "“Dolores is pleased.” Which is right?", [
      ["Долорес довольна.", true],
      ["Долорес доволен.", false],
      ["Долорес довольно.", false],
    ], { skill: "grammar" }),
    fill("sv5-t3", "Choose the right form: “We were so happy!”", "Мы были так", "!", "счастливы", ["счастливы", "счастлив", "счастлива"], { skill: "grammar" }),
    read("sv5-t4", "Read Tom's text to Aunt Olya. How does Murzik feel?", "Том: Привет из Севильи! Праздник на площади. Мурзик танцует фламенко и абсолютно счастлив. А я удивлён: у него получается лучше, чем у меня 😄", [
      ["Absolutely happy.", true],
      ["Tired and sad.", false],
      ["Nervous and bored.", false],
    ]),
    match("sv5-t5", "Match the Russian with the English.", [
      ["Я немного волнуюсь.", "I'm a bit nervous."],
      ["Все довольны.", "Everyone is pleased."],
      ["бумажные фонарики", "paper lanterns"],
      ["Я глазам своим не верю!", "I can't believe my eyes!"],
    ], { skill: "words" }),
    tf("sv5-t6", "Dolores saw Lev last year.", false, "True or false?", { skill: "listening" }),
    speak("sv5-t7", "Как ты себя чувствуешь на празднике?", "Сначала я немного волнуюсь, а потом я очень счастлив (счастлива) и всем доволен (довольна)!", "At first I'm a bit nervous, and then I'm very happy and pleased with everything!", {
      help: "Say out loud how you feel at a party.",
    }),
  ],
  reward: {
    itemId: "feria-lantern",
    itemName: "Paper lantern",
    itemNameRu: "Бумажный фонарик",
    ru: "Фонарик с праздника!",
    en: "A lantern from the festival!",
    a11y: "A round paper lantern with red and white spots hangs from the ceiling of the little room.",
    image: p("reward-5"),
    steps: ["The festival ends at three in the morning.", "Marisol takes down a paper lantern for Murzik.", "He hangs it from the ceiling.", "But he can't sleep: he keeps thinking about Lev."],
    bridge: "In the morning Dolores brings coffee and an old photo album. “Я расскажу тебе про Асю и Льва.”",
  },
};

export const seville6: Lesson = {
  id: "a2-seville-6",
  level: "A2",
  cityId: "seville",
  number: 6,
  title: "Asya and Lev",
  minutes: 8,
  goals: ["Understand a story about the past", "Talk about feelings in the past: была счастлива", "Use short adjectives in the past"],
  vocabNote: "In the past, short adjectives go with был / была / были: она была счастлива, он был влюблён.",
  vocab: [
    v("sv6-1", "сорок лет назад", "forty years ago", "An old photo with yellowed edges.", "Listen to сорок лет назад", p("6-1")),
    v("sv6-2", "Они танцевали всю ночь.", "They danced all night.", "A drawing in an album: two cats dancing under lanterns, seen from behind.", "Listen to Они танцевали всю ночь", p("6-2")),
    v("sv6-3", "Он был влюблён.", "He was in love.", "A pressed red carnation between the pages.", "Listen to Он был влюблён", p("6-3")),
    v("sv6-4", "Она была счастлива.", "She was happy.", "A page with a little drawn heart signed «А.».", "Listen to Она была счастлива", p("6-4")),
    v("sv6-5", "Потом она уехала.", "Then she left.", "An empty bench under an orange tree.", "Listen to Потом она уехала", p("6-5")),
    v("sv6-6", "Он долго ждал.", "He waited a long time.", "A white cat's grey hat on a bench, in a drawing.", "Listen to Он долго ждал", p("6-6")),
    v("sv6-7", "Почему — я не знаю.", "Why — I don't know.", "Dolores shrugs sadly.", "Listen to Почему — я не знаю", p("6-7")),
    v("sv6-8", "Лев помнит Севилью.", "Lev remembers Seville.", "Murzik closes the album and looks out of the window.", "Listen to Лев помнит Севилью", p("6-8")),
  ],
  letters: [
    letter("влюблён", "vlyub-LYON: ё is always stressed; feminine — влюблена.", "Он был влюблён.", "He was in love."),
  ],
  dialogue: {
    title: "The old album",
    note: "In Oslo Lev asked Murzik: «Если найдёшь её раньше меня — скажи ей, что Лев помнит Севилью».",
    lines: [
      line("dolores", "Сорок лет назад, на таком же празднике, Ася танцевала со Львом. Они танцевали всю ночь.", "Forty years ago, at a festival just like this one, Asya danced with Lev. They danced all night."),
      line("murzik", "Он был влюблён?", "Was he in love?"),
      line("dolores", "Очень. И она была счастлива — я никогда не видела её такой.", "Very much. And she was happy — I'd never seen her like that."),
      line("tom", "А что было потом?", "And what happened next?"),
      line("dolores", "Потом она уехала. Он долго ждал её здесь, а потом тоже уехал. Почему она уехала — я не знаю. Она никогда не рассказывала.", "Then she left. He waited for her here a long time, and then he left too. Why — I don't know. She never told me."),
      line("murzik", "В Осло Лев сказал мне: «Скажи ей, что Лев помнит Севилью».", "In Oslo Lev told me: “Tell her that Lev remembers Seville.”"),
      line("dolores", "Значит, он всё ещё её любит. Найди её, Мурзик.", "So he still loves her. Find her, Murzik."),
    ],
    gist: choice("sv6-d1", "What happened forty years ago?", [
      ["Asya and Lev danced all night at a festival.", true],
      ["Asya opened a flamenco school.", false],
      ["Lev left Seville and Asya waited.", false],
    ]),
  },
  grammar: [
    {
      title: "Был рад, была счастлива",
      paragraphs: [
        "Short adjective + был / была / было / были: он был влюблён, она была счастлива, мы были рады, они были заняты.",
        "Future: буду готов(а), будем рады. Present: no verb at all — Я рад(а).",
      ],
      examples: [
        { ru: "Мы были очень рады вас видеть.", en: "We were very glad to see you." },
        { ru: "Она была уверена, что он придёт.", en: "She was sure he would come." },
      ],
    },
  ],
  tasks: [
    listen("sv6-t1", "Listen. How long did Asya and Lev dance?", "Сорок лет назад, на таком же празднике, Ася танцевала со Львом. Они танцевали всю ночь.", [
      ["All night.", true],
      ["Forty minutes.", false],
      ["One dance.", false],
    ]),
    choice("sv6-t2", "Detective! Why did Asya leave Seville?", [
      ["Nobody knows — she never told Dolores.", true],
      ["Because Lev left first.", false],
      ["Because she was ill.", false],
    ], { skill: "listening" }),
    fill("sv6-t3", "Choose the right form: “She was happy.”", "Она была", ".", "счастлива", ["счастлива", "счастлив", "счастливы"], { skill: "grammar" }),
    read("sv6-t4", "Under a drawing in the album there are a few words in Asya's handwriting. What do they say?", "Севилья. Праздник.\nЛев танцует лучше всех.\nЯ счастлива.\nА.", [
      ["“Lev dances best of all. I'm happy.”", true],
      ["“Lev has gone. I'm sad.”", false],
      ["“I'm leaving tomorrow.”", false],
    ]),
    match("sv6-t5", "Match the Russian with the English.", [
      ["сорок лет назад", "forty years ago"],
      ["Он был влюблён.", "He was in love."],
      ["Он долго ждал.", "He waited a long time."],
      ["Почему — я не знаю.", "Why — I don't know."],
    ], { skill: "words" }),
    tf("sv6-t6", "Dolores thinks Lev still loves Asya.", true, "True or false?", { skill: "listening" }),
    speak("sv6-t7", "Когда ты был (была) очень счастлив (счастлива)?", "Я был (была) очень счастлив (счастлива), когда мы с друзьями танцевали всю ночь на празднике.", "I was very happy when my friends and I danced all night at a festival.", {
      help: "Tell out loud about a happy moment.",
    }),
  ],
  reward: {
    itemId: "seville-photo",
    itemName: "Copy of an old drawing",
    itemNameRu: "Рисунок «Праздник»",
    ru: "Ася и Лев — сорок лет назад!",
    en: "Asya and Lev — forty years ago!",
    a11y: "A small copy of an old pencil drawing stands on the shelf: two cats seen from behind dancing under lanterns; in the corner, «А.».",
    image: p("reward-6"),
    steps: ["Tom photographs the drawing from the album.", "Two cats, seen from behind, dance under lanterns.", "In the corner — «А.».", "Murzik puts the copy on the shelf and looks at it for a long time."],
    bridge: "On their last day Dolores takes something wrapped in silk paper out of a drawer.",
  },
};

export const seville7: Lesson = {
  id: "a2-seville-7",
  level: "A2",
  cityId: "seville",
  number: 7,
  title: "Seville Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Talk about feelings", "Review everything from Seville"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Seville.",
  vocab: [
    v("sv7-1", "веер", "a fan", "A black silk fan painted with little cats and boats.", "Listen to веер", p("7-1")),
    v("sv7-2", "Ася расписала его для меня.", "Asya painted it for me.", "Dolores opens the fan carefully.", "Listen to Ася расписала его для меня", p("7-2")),
    v("sv7-3", "Я не могу его взять.", "I can't take it.", "Murzik holds up both paws.", "Listen to Я не могу его взять", p("7-3")),
    v("sv7-4", "Ты должен отдать его ей.", "You must give it to her.", "Dolores closes Murzik's paws around the fan.", "Listen to Ты должен отдать его ей", p("7-4")),
    v("sv7-5", "Передай ей, что я её жду.", "Tell her I'm waiting for her.", "Dolores smiles, her eyes wet.", "Listen to Передай ей, что я её жду", p("7-5")),
    v("sv7-6", "Мне грустно уезжать.", "I'm sad to leave.", "Murzik looks back at the orange tree in the courtyard.", "Listen to Мне грустно уезжать", p("7-6")),
    v("sv7-7", "каникулы", "holidays (school holidays)", "A phone screen: Barsik and Musya waving.", "Listen to каникулы", p("7-7")),
    v("sv7-8", "Мы будем рады вас видеть.", "We'll be glad to see you.", "Marisol and Dolores wave at the gate.", "Listen to Мы будем рады вас видеть", p("7-8")),
  ],
  letters: [
    letter("веер", "VYE-yir: stress on the first е; the second, unstressed е sounds like и.", "чёрный веер", "a black fan"),
  ],
  dialogue: {
    title: "A present in silk paper",
    note: "Barsik and Musya are Murzik's young cousins. In A1 they were with Aunt Olya in Rome.",
    lines: [
      line("dolores", "Это веер. Ася расписала его для меня — котами и лодками. Она всегда их рисовала.", "This is a fan. Asya painted it for me — with cats and boats. She always drew them."),
      line("murzik", "Он такой красивый… Я не могу его взять.", "It's so beautiful… I can't take it."),
      line("dolores", "Можешь. Когда найдёшь Асю — ты должен отдать его ей. И передай ей, что я её жду.", "You can. When you find Asya, you must give it to her. And tell her I'm waiting for her."),
      line("tom", "Звонит тётя Оля! У Барсика и Муси каникулы — они летят в Неаполь.", "Aunt Olya's calling! Barsik and Musya are on holiday — they're flying to Naples."),
      line("murzik", "Ура! Мне грустно уезжать, но я так рад!", "Hooray! I'm sad to leave, but I'm so glad!"),
      line("marisol", "Приезжайте ещё! Мы будем рады вас видеть.", "Come again! We'll be glad to see you."),
    ],
    gist: choice("sv7-d1", "What must Murzik do with the fan?", [
      ["Give it to Asya when he finds her.", true],
      ["Sell it in Naples.", false],
      ["Give it to Musya.", false],
    ]),
  },
  grammar: [
    {
      title: "Seville review",
      paragraphs: [
        "мне жарко, грустно, скучно, весело. Short adjectives: рад, готов, свободен, занят, похож на, уверен, знаком, должен, счастлив, доволен, удивлён, влюблён — with -а for women and -ы for plural.",
        "Past: был рад, была счастлива, были заняты. Future: буду рад(а), будем готовы.",
      ],
      examples: [
        { ru: "Я был(а) очень рад(а), когда увидел(а) Льва.", en: "I was very glad when I saw Lev." },
        { ru: "Мы должны идти, но нам грустно уезжать.", en: "We have to go, but we're sad to leave." },
      ],
    },
  ],
  tasks: [
    listen("sv7-t1", "Audio story: Marisol talks about her grandmother. How old was Dolores when she opened the school?", "Моя бабушка открыла школу фламенко, когда ей было двадцать пять лет. Сначала у неё было только три ученицы. Сейчас у нас сто учеников — от пяти до восьмидесяти лет. Бабушка всегда говорит: «Ты не должен танцевать красиво. Ты должен быть счастлив, когда танцуешь».", [
      ["Twenty-five.", true],
      ["Fifteen.", false],
      ["Eighty.", false],
    ]),
    listen("sv7-t2", "Listen to the end of Marisol's story. What does Dolores always say?", "Бабушка всегда говорит: «Ты не должен танцевать красиво. Ты должен быть счастлив, когда танцуешь».", [
      ["“You don't have to dance beautifully. You have to be happy when you dance.”", true],
      ["“You must never look at your feet.”", false],
      ["“Only children can learn flamenco.”", false],
    ]),
    choice("sv7-t3", "“We have to go, but we're sad to leave.” Which is right?", [
      ["Мы должны идти, но нам грустно уезжать.", true],
      ["Мы должен идти, но мы грустно уезжать.", false],
      ["Мы должны идти, но нас грустные уезжать.", false],
    ], { skill: "grammar" }),
    read("sv7-t4", "Read the boarding pass. Where are they flying?", "СЕВИЛЬЯ — НЕАПОЛЬ\nРейс 3107\nПосадка: 11:15\nВылет: 11:50\nМесто: 14A", [
      ["To Naples.", true],
      ["To Rome.", false],
      ["To Marseille.", false],
    ]),
    script("sv7-t5", "Say goodbye to Dolores.", [
      { speaker: "Dolores", text: "Передай Асе, что я её жду." },
      { speaker: "You", answer: "Обязательно передам! Я так рад(а), что мы познакомились.", options: ["Обязательно передам! Я так рад(а), что мы познакомились.", "Обязательно передам! Мне жарко.", "Обязательно передам! Я занята вечером."] },
      { speaker: "Dolores", text: "Мы будем рады вас видеть снова." },
      { speaker: "You", answer: "Спасибо! Мне грустно уезжать.", options: ["Спасибо! Мне грустно уезжать.", "Спасибо! Я грустно уезжаю на вас.", "Спасибо! Спину прямо!"] },
    ], { skill: "review" }),
    match("sv7-t6", "Seville review: match the Russian with the English.", [
      ["Мне жарко.", "I'm hot."],
      ["Я занят.", "I'm busy."],
      ["похож на", "looks like"],
      ["веер", "a fan"],
    ], { skill: "review" }),
    speak("sv7-t7", "Как ты себя чувствуешь, когда уезжаешь из любимого места?", "Мне всегда грустно уезжать. Но я рад(а), потому что впереди новые места и новые друзья.", "I'm always sad to leave. But I'm glad, because there are new places and new friends ahead.", {
      help: "Say out loud how you feel when you leave a place you love.",
    }),
  ],
  reward: {
    itemId: "asyafan",
    itemName: "Asya's painted fan",
    itemNameRu: "Веер Аси",
    ru: "Веер бабушки — я отдам его ей!",
    en: "Grandma's fan — I'll give it to her!",
    a11y: "A black silk fan painted with little cats and boats lies half-open on top of Murzik's suitcase.",
    image: p("reward-7"),
    steps: ["Dolores gives Murzik the fan that Asya painted.", "Little cats and boats — Asya always drew them.", "“Отдай его ей. И скажи, что я жду.”", "Murzik packs it very carefully, next to the scarf."],
  },
};

export const sevilleLessons: Lesson[] = [seville1, seville2, seville3, seville4, seville5, seville6, seville7];
