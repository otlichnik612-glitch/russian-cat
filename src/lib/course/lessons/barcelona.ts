import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Barcelona · «Встречи и прогулки» · A2 lessons 1–7.
 * Murzik and Tom live above a small beach café in Barceloneta. Its owner Carmen (about 40, her
 * mother is Russian, so she speaks Russian) and her son Lucas (12, a skateboarder) show them the city.
 * Meeting up, being late, finding each other, going out and dropping in. In lesson 6 Carmen shows
 * an old sketch of the café on the wall, signed «А.».
 * Grammar: verbs of motion with prefixes — прийти / уйти, выйти / зайти, подойти / отойти,
 * перейти / пройти, приехать / уехать.
 */

const p = (name: string) => pic(`barcelona/${name}`);

export const barcelona1: Lesson = {
  id: "a2-barcelona-1",
  level: "A2",
  cityId: "barcelona",
  number: 1,
  title: "Where Shall We Meet?",
  minutes: 8,
  goals: ["Arrange to meet", "Say when you'll come: приду", "Say someone has left: ушёл"],
  vocabNote: "Prefixes change the meaning of идти: при- means arriving, у- means leaving. Прийти — to come, уйти — to leave.",
  vocab: [
    v("ba1-1", "Где встретимся?", "Where shall we meet?", "Murzik on the phone, looking at a map of Barcelona.", "Listen to Где встретимся", p("1-1")),
    v("ba1-2", "у фонтана", "by the fountain", "A round fountain in a sunny square, pigeons around it.", "Listen to у фонтана", p("1-2")),
    v("ba1-3", "Я приду в шесть.", "I'll come at six.", "A clock showing six, and Murzik giving a thumbs up.", "Listen to Я приду в шесть", p("1-3")),
    v("ba1-4", "Когда ты придёшь?", "When will you come?", "Carmen, a lively woman with dark curly hair, asks on the phone.", "Listen to Когда ты придёшь", p("1-4")),
    v("ba1-5", "Он уже ушёл. / Она уже ушла.", "He's already left. / She's already left.", "An empty chair at a café table, a cup still steaming.", "Listen to Он уже ушёл. Она уже ушла", p("1-5")),
    v("ba1-6", "Я на месте.", "I'm here (at the meeting place).", "Murzik stands by the fountain and waves.", "Listen to Я на месте", p("1-6")),
    v("ba1-7", "Подожди меня!", "Wait for me!", "Tom runs across the square, one hand in the air.", "Listen to Подожди меня", p("1-7")),
    v("ba1-8", "Тогда до встречи у фонтана!", "See you by the fountain, then!", "Murzik and Carmen wave goodbye on their phones.", "Listen to Тогда до встречи у фонтана", p("1-8")),
  ],
  letters: [
    letter("ш", "ш is always hard, even before и and ё: у-ШОЛ.", "ушёл", "left (he)", "Not “ushyol”: say a hard ш."),
    letter("-йти", "Say the й: preey-TEE, ooy-TEE. Spelling: прийти, not придти.", "прийти", "to come"),
  ],
  dialogue: {
    title: "On the phone with Carmen",
    note: "Встретимся — let's meet (future of встретиться). Минут через пять — in about five minutes.",
    lines: [
      line("carmen", "Мурзик, привет! Где встретимся?", "Murzik, hi! Where shall we meet?"),
      line("murzik", "Может быть, у фонтана на площади?", "Maybe by the fountain in the square?"),
      line("carmen", "Хорошо. Когда ты придёшь?", "OK. When will you come?"),
      line("murzik", "Я приду в шесть. А Том придёт позже.", "I'll come at six. And Tom will come later."),
      line("carmen", "Договорились!", "Deal!"),
      line("murzik", "Кармен, я на месте! А ты где?", "Carmen, I'm here! Where are you?"),
      line("carmen", "Я уже иду! Буду минут через пять. А Лукас?", "I'm on my way! I'll be there in about five minutes. And Lucas?"),
      line("murzik", "Лукас был здесь, но он уже ушёл — к друзьям.", "Lucas was here, but he's already left — to see his friends."),
    ],
    gist: choice("ba1-d1", "Where do Murzik and Carmen meet?", [
      ["By the fountain in the square.", true],
      ["At Carmen's café.", false],
      ["At the station.", false],
    ]),
  },
  grammar: [
    {
      title: "Прийти and уйти",
      paragraphs: [
        "Идти means to go on foot. Add при- and you get прийти — to come, to arrive: я приду (I'll come), он пришёл (he came). Add у- and you get уйти — to leave: я уйду, он ушёл.",
        "After a prefix, идти becomes -йти: при + йти = прийти, у + йти = уйти. The past is irregular: пришёл, пришла, пришли; ушёл, ушла, ушли.",
      ],
      examples: [
        { ru: "Когда ты придёшь домой?", en: "When will you come home?" },
        { ru: "Она пришла в шесть и ушла в восемь.", en: "She came at six and left at eight." },
      ],
    },
  ],
  tasks: [
    listen("ba1-t1", "Listen. When will Murzik come?", "Я приду в шесть. А Том придёт позже.", [
      ["At six. Tom will come later.", true],
      ["At six, together with Tom.", false],
      ["Later than Tom.", false],
    ]),
    choice("ba1-t2", "Your friend came to the café, and now he's gone. What do you say?", [
      ["Он уже ушёл.", true],
      ["Он уже пришёл.", false],
      ["Он придёт.", false],
    ], { skill: "grammar" }),
    fill("ba1-t3", "Choose the right word: “She came at six.”", "Она", "в шесть.", "пришла", ["пришла", "пришёл", "придёт"], { skill: "grammar" }),
    script("ba1-t4", "Messages: arrange to meet Carmen.", [
      { speaker: "Carmen", text: "Привет! Где встретимся?" },
      { speaker: "You", answer: "У фонтана на площади.", options: ["У фонтана на площади.", "Он уже ушёл.", "Подожди меня!"] },
      { speaker: "Carmen", text: "Хорошо. Когда ты придёшь?" },
      { speaker: "You", answer: "Я приду в шесть.", options: ["Я приду в шесть.", "Я пришёл в шесть.", "Где встретимся?"] },
      { speaker: "Carmen", text: "Договорились!" },
    ], { skill: "reading" }),
    read("ba1-t5", "Read Tom's message. When will he come?", "Мурзик, я опаздываю! Приду в семь, не в шесть. Подожди меня у фонтана. Том", [
      ["At seven.", true],
      ["At six.", false],
      ["He won't come.", false],
    ]),
    match("ba1-t6", "Match the Russian with the English.", [
      ["Где встретимся?", "Where shall we meet?"],
      ["Я на месте.", "I'm here."],
      ["Подожди меня!", "Wait for me!"],
      ["Тогда до встречи!", "See you then!"],
    ], { skill: "words" }),
    speak("ba1-t7", "Где встретимся?", "Давай у фонтана. Я приду в шесть.", "Let's meet by the fountain. I'll come at six.", {
      help: "Arrange a meeting out loud: where and when.",
    }),
  ],
  reward: {
    itemId: "beachtowel",
    itemName: "Striped beach towel",
    itemNameRu: "Пляжное полотенце",
    ru: "Ура! Полотенце для пляжа!",
    en: "Yay! A towel for the beach!",
    a11y: "A big beach towel with orange and blue stripes hangs over the balcony rail of a small room above a café.",
    image: p("reward-1"),
    steps: ["Murzik's room is above Carmen's café, two steps from the beach.", "Carmen gives him a striped beach towel.", "“In Barcelona everyone goes to the sea after work.”", "Murzik hangs it over the balcony to dry."],
    bridge: "Tomorrow Carmen wants to show them the old town. “Get off at Liceu,” she says. Get off? And which exit?",
  },
};

export const barcelona2: Lesson = {
  id: "a2-barcelona-2",
  level: "A2",
  cityId: "barcelona",
  number: 2,
  title: "Get Out at Liceu!",
  minutes: 8,
  goals: ["Say where to get out of the metro", "Invite someone to drop in", "Use выйти and зайти"],
  vocabNote: "Вы- means going out, за- means dropping in or going into a place for a short time.",
  vocab: [
    v("ba2-1", "выйти из метро", "to get out of the metro", "Murzik comes up the stairs of a metro station into the sunshine.", "Listen to выйти из метро", p("2-1")),
    v("ba2-2", "Выходи на следующей!", "Get off at the next stop!", "Tom points at the metro map, a station circled.", "Listen to Выходи на следующей", p("2-2")),
    v("ba2-3", "Я вышел. / Я вышла.", "I've come out. (man / woman)", "Murzik stands outside the metro entrance, looking around.", "Listen to Я вышел. Я вышла", p("2-3")),
    v("ba2-4", "зайти в кафе", "to drop into a café", "Murzik pushes open the door of a tiny café.", "Listen to зайти в кафе", p("2-4")),
    v("ba2-5", "Заходи!", "Come in! Drop in!", "Carmen waves from the café door, smiling.", "Listen to Заходи", p("2-5")),
    v("ba2-6", "на минутку", "for a minute", "A clock with one minute highlighted.", "Listen to на минутку", p("2-6")),
    v("ba2-7", "по старому городу", "around the old town", "Murzik and Carmen walk through stone streets with balconies full of flowers.", "Listen to по старому городу", p("2-7")),
    v("ba2-8", "узкая улица", "a narrow street", "A street so narrow that Murzik touches both walls with his paws.", "Listen to узкая улица", p("2-8")),
  ],
  letters: [
    letter("ы", "ы is a deep “i” with the tongue pulled back: VYY-ti.", "выйти", "to get out", "Don't say “viti”: в + ы."),
    letter("д → т", "At the end of a word д sounds like т: GO-rat.", "Старый город", "The old town"),
  ],
  dialogue: {
    title: "In the metro",
    note: "Следующая — the next one (station). Выходи на следующей — get off at the next one.",
    lines: [
      line("tom", "Мурзик, где нам выходить?", "Murzik, where do we get off?"),
      line("murzik", "Кармен сказала: на станции «Лисеу». Это следующая!", "Carmen said: at Liceu station. It's the next one!"),
      line("tom", "Хорошо, выходим на следующей.", "OK, we get off at the next one."),
      line("murzik", "Кармен, мы вышли из метро! Где ты?", "Carmen, we've come out of the metro! Where are you?"),
      line("carmen", "Я в кафе рядом. Заходите на минутку!", "I'm in the café next door. Drop in for a minute!"),
      line("tom", "Ого, какая узкая улица!", "Wow, what a narrow street!"),
      line("carmen", "Это старый город. Здесь все улицы такие.", "This is the old town. All the streets are like that here."),
    ],
    gist: choice("ba2-d1", "Where is Carmen?", [
      ["In a café near the metro.", true],
      ["In the metro.", false],
      ["At the beach.", false],
    ]),
  },
  grammar: [
    {
      title: "Выйти and зайти",
      paragraphs: [
        "Вы- means out: выйти из метро — to get out of the metro. За- means in for a short time: зайти в кафе — to drop into a café.",
        "Note the prepositions: из (out of) after выйти, в (into) after зайти, and к + a person: зайти к другу — to drop in on a friend. The past: вышел, вышла; зашёл, зашла.",
      ],
      examples: [
        { ru: "Я вышла из метро и зашла в кафе.", en: "I came out of the metro and dropped into a café. (woman)" },
        { ru: "Заходи в гости!", en: "Come round and visit!" },
      ],
    },
  ],
  tasks: [
    listen("ba2-t1", "Listen. Where do they get off?", "Хорошо, выходим на следующей.", [
      ["At the next station.", true],
      ["At the last station.", false],
      ["They stay in the metro.", false],
    ]),
    choice("ba2-t2", "“I dropped into a café.” (man) Which is right?", [
      ["Я зашёл в кафе.", true],
      ["Я вышел в кафе.", false],
      ["Я зашёл из кафе.", false],
    ], { skill: "grammar" }),
    fill("ba2-t3", "Choose the right word: “We came out of the metro.”", "Мы", "из метро.", "вышли", ["вышли", "зашли", "перешли"], { skill: "grammar" }),
    read("ba2-t4", "Read the sign at the metro. Which exit goes to the old town?", "ЛИСЕУ\nВыход 1 — Рамбла\nВыход 2 — Старый город\nВыход 3 — Рынок", [
      ["Exit 2.", true],
      ["Exit 1.", false],
      ["Exit 3.", false],
    ]),
    choice("ba2-t5", "Help Tom! He says: «Я зашёл из метро». What should he say?", [
      ["Я вышел из метро.", true],
      ["Я зашёл в метро из.", false],
      ["Я вышел в метро.", false],
    ], { skill: "grammar" }),
    match("ba2-t6", "Match the Russian with the English.", [
      ["выйти", "to get out"],
      ["зайти", "to drop in"],
      ["на минутку", "for a minute"],
      ["узкая улица", "a narrow street"],
    ], { skill: "words" }),
    speak("ba2-t7", "Где ты? Ты уже вышел из метро?", "Да, я вышел. Я в кафе рядом, заходи!", "Yes, I've come out. I'm in the café nearby — drop in!", {
      help: "Your friend is looking for you. Answer out loud. A woman says вышла (and is asked: Ты уже вышла?).",
    }),
  ],
  reward: {
    itemId: "strawhat",
    itemName: "Straw hat",
    itemNameRu: "Соломенная шляпа",
    ru: "Какая шляпа! Соломенная!",
    en: "What a hat! A straw one!",
    a11y: "A straw hat with an orange ribbon hangs on a nail by the balcony door.",
    image: p("reward-2"),
    steps: ["In a tiny shop in the old town Carmen buys Murzik a straw hat.", "“The sun here is strong,” she says.", "It has an orange ribbon.", "Murzik hangs it by the balcony door."],
    bridge: "Tom wants a photo of Murzik in front of a famous church. “Step back! A bit more!”",
  },
};

export const barcelona3: Lesson = {
  id: "a2-barcelona-3",
  level: "A2",
  cityId: "barcelona",
  number: 3,
  title: "Step Back a Bit!",
  minutes: 8,
  goals: ["Ask someone to come closer or step back", "Ask someone to take a photo", "Use подойти and отойти"],
  vocabNote: "Под- — up close: подойти (to come up to). От- — away: отойти (to step away).",
  vocab: [
    v("ba3-1", "Подойди ближе!", "Come closer!", "Tom with his camera waves Murzik towards him.", "Listen to Подойди ближе", p("3-1")),
    v("ba3-2", "Отойди немного назад!", "Step back a bit!", "Murzik steps backwards, almost into a fountain.", "Listen to Отойди немного назад", p("3-2")),
    v("ba3-3", "Сфотографируй меня!", "Take a photo of me!", "Murzik poses with his straw hat in front of a huge church.", "Listen to Сфотографируй меня", p("3-3")),
    v("ba3-4", "Вы не могли бы нас сфотографировать?", "Could you take a photo of us?", "Murzik politely hands a camera to a passer-by.", "Listen to Вы не могли бы нас сфотографировать", p("3-4")),
    v("ba3-5", "Улыбнитесь!", "Smile!", "Murzik and Tom grin widely at the camera.", "Listen to Улыбнитесь", p("3-5")),
    v("ba3-6", "Не получилось.", "It didn't come out. / It didn't work.", "A blurry photo on the camera screen.", "Listen to Не получилось", p("3-6")),
    v("ba3-7", "Ещё раз!", "One more time!", "Tom raises the camera again, one finger up.", "Listen to Ещё раз", p("3-7")),
    v("ba3-8", "Отличный кадр!", "A great shot!", "The camera screen shows a perfect photo of Murzik and Tom.", "Listen to Отличный кадр", p("3-8")),
  ],
  letters: [
    letter("о → а", "Unstressed о sounds like а: pa-lu-CHI-las'.", "Не получилось.", "It didn't work."),
    letter("сф", "сф at the start: say both, quickly: sfa-ta-gra-FEE-ruy.", "Сфотографируй меня!", "Take a photo of me!"),
  ],
  dialogue: {
    title: "The photo",
    note: "Вы не могли бы…? — Could you…? It's a very polite way to ask a stranger.",
    lines: [
      line("murzik", "Том, сфотографируй меня! Вот здесь!", "Tom, take a photo of me! Right here!"),
      line("tom", "Отойди немного назад. Ещё! Стоп!", "Step back a bit. More! Stop!"),
      line("murzik", "Так хорошо?", "Is this OK?"),
      line("tom", "Нет, не получилось. Подойди ближе. Улыбнись!", "No, it didn't come out. Come closer. Smile!"),
      line("murzik", "А давай вместе! Извините, вы не могли бы нас сфотографировать?", "Let's do one together! Excuse me, could you take a photo of us?"),
      line("passerby", "Конечно! Улыбнитесь! Ещё раз… Готово!", "Of course! Smile! One more time… Done!"),
      line("tom", "Отличный кадр! Спасибо большое!", "A great shot! Thank you very much!"),
    ],
    gist: choice("ba3-d1", "Who takes the photo of Murzik and Tom together?", [
      ["A woman passing by.", true],
      ["Carmen.", false],
      ["Lucas.", false],
    ]),
  },
  grammar: [
    {
      title: "Подойти and отойти",
      paragraphs: [
        "Под- means coming up close: подойди к фонтану — go up to the fountain. От- means moving away: отойди от фонтана — step away from the fountain.",
        "Notice the prepositions: подойти к + whom/what; отойти от + whom/what. Asking a friend: подойди! отойди! Asking someone you call вы: подойдите! отойдите!",
      ],
      examples: [
        { ru: "Подойди к окну!", en: "Come over to the window!" },
        { ru: "Отойдите, пожалуйста, от двери.", en: "Please step away from the door." },
      ],
    },
  ],
  tasks: [
    listen("ba3-t1", "Listen. What does Tom want Murzik to do?", "Отойди немного назад. Ещё! Стоп!", [
      ["Step back a bit.", true],
      ["Come closer.", false],
      ["Smile.", false],
    ]),
    choice("ba3-t2", "You want a stranger to take your photo. What's the most polite?", [
      ["Вы не могли бы меня сфотографировать?", true],
      ["Сфотографируй меня!", false],
      ["Отойди назад!", false],
    ], { skill: "grammar" }),
    fill("ba3-t3", "Choose the right word: “Come over to the window!”", "", "к окну!", "Подойди", ["Подойди", "Отойди", "Выйди"], { skill: "grammar" }),
    read("ba3-t4", "Read the sign in the church. What must visitors do?", "Фотографировать можно.\nПожалуйста, не подходите близко к картинам.", [
      ["Not go close to the paintings.", true],
      ["Not take photos.", false],
      ["Come close to the paintings.", false],
    ]),
    match("ba3-t5", "Match the Russian with the English.", [
      ["Подойди ближе!", "Come closer!"],
      ["Отойди назад!", "Step back!"],
      ["Не получилось.", "It didn't work."],
      ["Отличный кадр!", "A great shot!"],
    ], { skill: "words" }),
    tf("ba3-t6", "Улыбнитесь! can be said to a group of people.", true, "True or false?", { skill: "words" }),
    speak("ba3-t7", "Ask a stranger to take your photo.", "Извините, вы не могли бы меня сфотографировать?", "Excuse me, could you take a photo of me?", {
      help: "Ask politely out loud, as if to a stranger.",
    }),
  ],
  reward: {
    itemId: "photoframe",
    itemName: "Photo in a frame",
    itemNameRu: "Фото в рамке",
    ru: "Смотри! Наше фото!",
    en: "Look! Our photo!",
    a11y: "A photo of Murzik in a straw hat and Tom, smiling in front of a huge church, in a mosaic frame on the bedside table.",
    image: p("reward-3"),
    steps: ["Tom prints the best photo in a little shop.", "Carmen finds a frame with colourful mosaic.", "“Like the houses of Gaudí,” she says.", "The photo stands by Murzik's bed."],
    bridge: "The next day Murzik explores the old town alone and wants to get back to the sea. Carmen draws the way: “Cross the street, go past the market…”",
  },
};

export const barcelona4: Lesson = {
  id: "a2-barcelona-4",
  level: "A2",
  cityId: "barcelona",
  number: 4,
  title: "Cross the Street!",
  minutes: 8,
  goals: ["Follow and give directions", "Say you got lost and ask for help", "Use перейти and пройти"],
  vocabNote: "Пере- — across: перейти улицу (cross the street). Про- — through or past: пройти мимо рынка (go past the market).",
  vocab: [
    v("ba4-1", "перейти улицу", "to cross the street", "Murzik waits at a zebra crossing, the light turns green.", "Listen to перейти улицу", p("4-1")),
    v("ba4-2", "светофор", "traffic lights", "Traffic lights with the green man lit.", "Listen to светофор", p("4-2")),
    v("ba4-3", "пройти мимо рынка", "to go past the market", "Murzik walks past a busy market without stopping.", "Listen to пройти мимо рынка", p("4-3")),
    v("ba4-4", "до конца улицы", "to the end of the street", "A long straight street with the sea at the very end.", "Listen to до конца улицы", p("4-4")),
    v("ba4-5", "Я заблудился. / Я заблудилась.", "I'm lost. (man / woman)", "Murzik turns the map upside down, confused.", "Listen to Я заблудился. Я заблудилась", p("4-5")),
    v("ba4-6", "Вы не подскажете, как пройти к морю?", "Could you tell me how to get to the sea?", "Murzik asks an old man with a newspaper.", "Listen to Вы не подскажете, как пройти к морю", p("4-6")),
    v("ba4-7", "Это далеко отсюда?", "Is it far from here?", "Murzik looks at a long road ahead.", "Listen to Это далеко отсюда", p("4-7")),
    v("ba4-8", "Вы почти пришли!", "You're almost there!", "The old man points: the sea is just behind the next house.", "Listen to Вы почти пришли", p("4-8")),
  ],
  letters: [
    letter("светофор", "Unstressed е and о: svi-ta-FOR. Only the last о is clear.", "светофор", "traffic lights"),
    letter("далеко", "Only the last о is stressed: da-li-KO. The е sounds like a short и.", "Это далеко отсюда?", "Is it far from here?"),
  ],
  dialogue: {
    title: "The way to the sea",
    note: "Вы не подскажете…? — Could you tell me…? A polite way to ask for directions.",
    lines: [
      line("murzik", "Извините, вы не подскажете, как пройти к морю? Я заблудился.", "Excuse me, could you tell me how to get to the sea? I'm lost."),
      line("passerby", "Конечно. Перейдите улицу на светофоре.", "Of course. Cross the street at the traffic lights."),
      line("murzik", "А потом?", "And then?"),
      line("passerby", "Потом пройдите мимо рынка и идите до конца улицы.", "Then go past the market and walk to the end of the street."),
      line("murzik", "Это далеко отсюда?", "Is it far from here?"),
      line("passerby", "Нет, минут десять. Вы почти пришли!", "No, about ten minutes. You're almost there!"),
      line("murzik", "Спасибо большое!", "Thank you very much!"),
    ],
    gist: choice("ba4-d1", "How far is the sea?", [
      ["About ten minutes on foot.", true],
      ["An hour by metro.", false],
      ["It's right here.", false],
    ]),
  },
  grammar: [
    {
      title: "Перейти and пройти",
      paragraphs: [
        "Пере- means across: перейти улицу, перейти мост (a bridge). Про- means through or past: пройти мимо рынка, пройти через парк (through the park).",
        "In directions people often use the polite вы form: перейдите, пройдите, идите.",
      ],
      examples: [
        { ru: "Перейдите улицу и пройдите через парк.", en: "Cross the street and go through the park." },
        { ru: "Как пройти к вокзалу?", en: "How do I get to the station?" },
      ],
    },
  ],
  tasks: [
    listen("ba4-t1", "Listen. What should Murzik do first?", "Перейдите улицу на светофоре.", [
      ["Cross the street at the traffic lights.", true],
      ["Go past the market.", false],
      ["Take the metro.", false],
    ]),
    choice("ba4-t2", "“Go past the market.” Which is right?", [
      ["Пройдите мимо рынка.", true],
      ["Перейдите мимо рынка.", false],
      ["Зайдите мимо рынка.", false],
    ], { skill: "grammar" }),
    read("ba4-t3", "Read Carmen's note. What is just before the sea?", "Как дойти до моря:\n1. Перейди улицу у собора.\n2. Пройди мимо рынка.\n3. Иди до конца улицы — там пляж!", [
      ["The end of the street.", true],
      ["The market.", false],
      ["The cathedral.", false],
    ]),
    script("ba4-t4", "You're lost. Ask a passer-by.", [
      { speaker: "You", answer: "Извините, вы не подскажете, как пройти к морю?", options: ["Извините, вы не подскажете, как пройти к морю?", "Отличный кадр!", "Заходи!"] },
      { speaker: "Woman", text: "Перейдите улицу и идите прямо." },
      { speaker: "You", answer: "Это далеко отсюда?", options: ["Это далеко отсюда?", "Я на месте.", "Не получилось."] },
      { speaker: "Woman", text: "Нет, вы почти пришли!" },
    ], { skill: "speaking" }),
    match("ba4-t5", "Match the Russian with the English.", [
      ["перейти улицу", "to cross the street"],
      ["светофор", "traffic lights"],
      ["до конца улицы", "to the end of the street"],
      ["Я заблудился.", "I'm lost."],
    ], { skill: "words" }),
    tf("ba4-t6", "Вы почти пришли! means “You've just left.”", false, "True or false?", { skill: "words" }),
    speak("ba4-t7", "Как пройти к рынку?", "Перейдите улицу на светофоре и идите прямо. Рынок справа.", "Cross the street at the lights and go straight. The market is on the right.", {
      help: "A tourist asks you the way. Give directions out loud.",
    }),
  ],
  reward: {
    itemId: "citymap",
    itemName: "Map of Barcelona",
    itemNameRu: "Карта Барселоны",
    ru: "Теперь я не заблужусь!",
    en: "Now I won't get lost!",
    a11y: "A big colourful map of Barcelona pinned to the wall, with the café, the beach and the old town marked with stickers.",
    image: p("reward-4"),
    steps: ["Lucas gives Murzik a big map of the city.", "He marks the café, the beach and the best skate park.", "“Now you won't get lost,” he laughs.", "Murzik pins it on the wall above his bed."],
    bridge: "On Saturday Carmen's friends arrive by train from Valencia. Carmen wants to meet them at the station.",
  },
};

export const barcelona5: Lesson = {
  id: "a2-barcelona-5",
  level: "A2",
  cityId: "barcelona",
  number: 5,
  title: "They've Arrived!",
  minutes: 8,
  goals: ["Talk about arriving and leaving by transport", "Meet guests at the station", "Use приехать and уехать"],
  vocabNote: "Ехать is to go by transport. Приехать — to arrive (by train, car…), уехать — to leave (by transport).",
  vocab: [
    v("ba5-1", "приехать", "to arrive (by transport)", "A train pulls into a big station.", "Listen to приехать", p("5-1")),
    v("ba5-2", "Они приехали!", "They've arrived!", "Two friends with suitcases wave from the train door.", "Listen to Они приехали", p("5-2")),
    v("ba5-3", "уехать", "to leave (by transport)", "A train leaves the platform, a hand waving from the window.", "Listen to уехать", p("5-3")),
    v("ba5-4", "Когда ты уезжаешь?", "When are you leaving?", "Carmen asks with a sad face, holding a cup.", "Listen to Когда ты уезжаешь", p("5-4")),
    v("ba5-5", "встретить на вокзале", "to meet at the station", "Murzik holds up a sign with a drawing of a sun at the station.", "Listen to встретить на вокзале", p("5-5")),
    v("ba5-6", "Поезд опаздывает.", "The train is late.", "A departures board with a delay shown in red.", "Listen to Поезд опаздывает", p("5-6")),
    v("ba5-7", "Как доехали?", "How was your journey?", "Carmen hugs her friends on the platform.", "Listen to Как доехали", p("5-7")),
    v("ba5-8", "Хорошо доехали!", "We had a good journey!", "A friend smiles and gives a thumbs up, suitcase in hand.", "Listen to Хорошо доехали", p("5-8")),
  ],
  letters: [
    letter("вокзал", "Say it like вагзал: vag-ZAL — о sounds like а, and к before з sounds like г.", "на вокзале", "at the station"),
  ],
  dialogue: {
    title: "At the station",
    note: "Как доехали? is the standard question for someone who has just arrived. Доехать — to get somewhere by transport.",
    lines: [
      line("carmen", "Мурзик, пойдём со мной на вокзал? Мои друзья приезжают из Валенсии.", "Murzik, will you come with me to the station? My friends are arriving from Valencia."),
      line("murzik", "Конечно! Когда они приедут?", "Of course! When will they arrive?"),
      line("carmen", "В два. Ой, смотри: поезд опаздывает на двадцать минут.", "At two. Oh, look: the train is twenty minutes late."),
      line("murzik", "Вот он! Они приехали!", "Here it is! They've arrived!"),
      line("carmen", "Привет, дорогие! Как доехали?", "Hi, my dears! How was your journey?"),
      line("rosa", "Хорошо доехали! А это кто?", "We had a good journey! And who's this?"),
      line("carmen", "Это Мурзик. Он живёт у меня, но скоро уезжает.", "This is Murzik. He's staying with me, but he's leaving soon."),
    ],
    gist: choice("ba5-d1", "Why do they wait at the station longer?", [
      ["The train is twenty minutes late.", true],
      ["The friends missed the train.", false],
      ["They came at the wrong time.", false],
    ]),
  },
  grammar: [
    {
      title: "Приехать and уехать",
      paragraphs: [
        "Идти and its family are on foot: пришёл, ушёл. Ехать and its family are by transport: приехал (arrived), уехал (left), доехал (got there).",
        "Their imperfective partners have a different stem: приезжать, уезжать (я приезжаю, ты уезжаешь). The present can mean the near future: они приезжают завтра — they're arriving tomorrow; когда ты уезжаешь? — when are you leaving?",
      ],
      examples: [
        { ru: "Мы приехали в Барселону в понедельник.", en: "We arrived in Barcelona on Monday." },
        { ru: "Она уехала вчера.", en: "She left yesterday." },
      ],
    },
  ],
  tasks: [
    listen("ba5-t1", "Listen. Where are Carmen's friends coming from?", "Мои друзья приезжают из Валенсии.", [
      ["From Valencia.", true],
      ["From Madrid.", false],
      ["From Lyon.", false],
    ]),
    choice("ba5-t2", "Your friends came by train. What do you say?", [
      ["Они приехали!", true],
      ["Они пришли!", false],
      ["Они уехали!", false],
    ], { skill: "grammar" }),
    read("ba5-t3", "Read the board. Which train is late?", "ПРИБЫТИЕ\n13:40 Мадрид — вовремя\n14:00 Валенсия — опаздывает на 20 минут\n14:15 Лион — вовремя", [
      ["The train from Valencia.", true],
      ["The train from Madrid.", false],
      ["The train from Lyon.", false],
    ]),
    fill("ba5-t4", "Choose the right word: “She left yesterday (by train).”", "Она", "вчера.", "уехала", ["уехала", "ушла", "приехала"], { skill: "grammar" }),
    match("ba5-t5", "Match the Russian with the English.", [
      ["приехать", "to arrive"],
      ["уехать", "to leave"],
      ["Как доехали?", "How was your journey?"],
      ["Поезд опаздывает.", "The train is late."],
    ], { skill: "words" }),
    choice("ba5-t6", "Help Tom! He says about friends who came by plane: «Они пришли». What's better?", [
      ["Они прилетели.", true],
      ["Они ушли.", false],
      ["Они уехали.", false],
    ], { skill: "grammar", help: "Bonus word: прилететь — to arrive by plane." }),
    speak("ba5-t7", "Как доехали?", "Хорошо доехали, спасибо! Поезд немного опоздал.", "We had a good journey, thank you! The train was a bit late.", {
      help: "You've just arrived. Answer your host out loud.",
    }),
  ],
  reward: {
    itemId: "hammock",
    itemName: "Hammock",
    itemNameRu: "Гамак",
    ru: "Гамак! Как в отпуске!",
    en: "A hammock! Like on holiday!",
    a11y: "A colourful striped hammock hangs on the balcony, with the sea in the distance.",
    image: p("reward-5"),
    steps: ["Carmen's friends brought a present from Valencia.", "It's a striped hammock.", "“For the guest who's always travelling,” they say.", "Murzik hangs it on the balcony and falls asleep in it at once."],
    bridge: "In the evening Murzik looks at the old pictures on the café walls. One of them — a sketch of the café — is signed «А.».",
  },
};

export const barcelona6: Lesson = {
  id: "a2-barcelona-6",
  level: "A2",
  cityId: "barcelona",
  number: 6,
  title: "The Sketch on the Wall",
  minutes: 8,
  goals: ["Ask who did something", "Talk about a visit long ago", "Review the motion verbs"],
  vocabNote: "Висеть — to hang (be on the wall). Подписать — to sign (a picture, a card).",
  vocab: [
    v("ba6-1", "картина висит на стене", "a picture is hanging on the wall", "An old sketch in a wooden frame on the café wall.", "Listen to картина висит на стене", p("6-1")),
    v("ba6-2", "набросок", "a sketch", "A quick pencil drawing of the café, with a few lines of the sea.", "Listen to набросок", p("6-2")),
    v("ba6-3", "подпись", "signature", "Close-up: a single letter «А» in the corner of the sketch.", "Listen to подпись", p("6-3")),
    v("ba6-4", "Кто это нарисовал?", "Who drew this?", "Murzik points at the sketch with wide eyes.", "Listen to Кто это нарисовал", p("6-4")),
    v("ba6-5", "Однажды она зашла к нам.", "Once she dropped in on us.", "An old photo of the café, a ginger cat at a table seen from behind.", "Listen to Однажды она зашла к нам", p("6-5")),
    v("ba6-6", "Она пришла с моря.", "She came from the sea.", "Wet paw prints lead from the beach to the café door.", "Listen to Она пришла с моря", p("6-6")),
    v("ba6-7", "в подарок", "as a present", "A sketch wrapped with a ribbon.", "Listen to в подарок", p("6-7")),
    v("ba6-8", "Она уехала на юг.", "She left for the south.", "A road on a map going south along the sea.", "Listen to Она уехала на юг", p("6-8")),
  ],
  letters: [
    letter("подпись", "д before п sounds like т, and the ending сь is soft: POT-pis'.", "подпись", "signature"),
  ],
  dialogue: {
    title: "«А.»",
    note: "Мама рассказывала — Mum used to tell (the story). Carmen's mother owned the café before her.",
    lines: [
      line("murzik", "Кармен, кто это нарисовал? Тут подпись: «А.»", "Carmen, who drew this? There's a signature: «А.»"),
      line("carmen", "Это очень старый набросок. Я тогда была маленькая. Мама рассказывала про него.", "It's a very old sketch. I was little then. Mum used to tell me about it."),
      line("murzik", "А что она рассказывала?", "And what did she tell you?"),
      line("carmen", "Однажды к нам зашла рыжая кошка. Она пришла с моря, вся мокрая!", "Once a ginger cat dropped in on us. She came from the sea, all wet!"),
      line("carmen", "Мама угостила её чаем, а она нарисовала кафе — в подарок.", "Mum gave her some tea, and she drew the café — as a present."),
      line("murzik", "Это Ася! Моя бабушка! А куда она пошла потом?", "It's Asya! My grandmother! And where did she go then?"),
      line("carmen", "Мама говорила, что она уехала на юг. В Италию, кажется.", "Mum said she left for the south. To Italy, I think."),
    ],
    gist: choice("ba6-d1", "Why did Asya draw the café?", [
      ["As a present, after Carmen's mother gave her tea.", true],
      ["To sell the picture.", false],
      ["Because she lived there.", false],
    ]),
  },
  grammar: [
    {
      title: "Barcelona review: motion with prefixes",
      paragraphs: [
        "On foot (идти): пришла — came, ушла — left, зашла — dropped in, вышла — went out, подошла — came up, прошла — went past.",
        "By transport (ехать): приехала — arrived, уехала — left. The prefix tells you the direction!",
      ],
      examples: [
        { ru: "Она зашла в кафе, а потом уехала на юг.", en: "She dropped into the café and then left for the south." },
        { ru: "Он подошёл к картине.", en: "He went up to the picture." },
      ],
    },
  ],
  tasks: [
    listen("ba6-t1", "Listen. Where did the ginger cat come from?", "Она пришла с моря, вся мокрая!", [
      ["From the sea, all wet.", true],
      ["From the train station.", false],
      ["From Lyon.", false],
    ]),
    choice("ba6-t2", "Detective! What clue does Murzik get?", [
      ["Asya left for the south, maybe to Italy.", true],
      ["Asya lives in Barcelona.", false],
      ["Asya works in Carmen's café.", false],
    ], { skill: "listening" }),
    choice("ba6-t3", "Which verb fits: “She ___ into the café for a minute.”", [
      ["зашла", true],
      ["уехала", false],
      ["перешла", false],
    ], { skill: "grammar" }),
    read("ba6-t4", "On the back of the sketch there's a note. What did Asya like?", "Спасибо за чай!\nКакое море! Какой город!\nЗавтра — на юг.\nА.", [
      ["The sea and the city.", true],
      ["The tea only.", false],
      ["The train.", false],
    ]),
    match("ba6-t5", "Match the Russian with the English.", [
      ["набросок", "a sketch"],
      ["подпись", "signature"],
      ["в подарок", "as a present"],
      ["на юг", "to the south"],
    ], { skill: "words" }),
    tf("ba6-t6", "Carmen's mother met Asya in the café.", true, "True or false?", { skill: "listening" }),
    speak("ba6-t7", "Кто это нарисовал?", "Это нарисовала моя бабушка. Много лет назад она зашла в это кафе.", "My grandmother drew this. She dropped into this café many years ago.", {
      help: "Answer as if it were your grandmother's drawing.",
    }),
  ],
  reward: {
    itemId: "mosaictile",
    itemName: "Mosaic tile",
    itemNameRu: "Мозаичная плитка",
    ru: "Какая красивая плитка!",
    en: "What a beautiful tile!",
    a11y: "A square tile with a bright mosaic of the sea, a boat and a little sun, leaning against the wall on a shelf.",
    image: p("reward-6"),
    steps: ["Carmen takes the sketch off the wall… but no, she can't give it away.", "Instead, she gives Murzik a mosaic tile from the café.", "On it: the sea, a boat and a little sun.", "“Your grandmother looked at this wall too,” she says."],
    bridge: "Tomorrow they leave for Italy — to Milan. But first, one last evening on the beach with Carmen and Lucas.",
  },
};

export const barcelona7: Lesson = {
  id: "a2-barcelona-7",
  level: "A2",
  cityId: "barcelona",
  number: 7,
  title: "Barcelona Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Say goodbye and promise to come back", "Review everything from Barcelona"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Barcelona.",
  vocab: [
    v("ba7-1", "последний вечер", "the last evening", "Sunset over the sea, the café lights coming on.", "Listen to последний вечер", p("7-1")),
    v("ba7-2", "на пляже", "on the beach", "Murzik, Tom, Carmen and Lucas sit on the sand.", "Listen to на пляже", p("7-2")),
    v("ba7-3", "Мы обязательно вернёмся!", "We'll definitely come back!", "Murzik raises his paw like a promise.", "Listen to Мы обязательно вернёмся", p("7-3")),
    v("ba7-4", "Не забывай нас!", "Don't forget us!", "Lucas hugs Murzik with his skateboard under his arm.", "Listen to Не забывай нас", p("7-4")),
    v("ba7-5", "Будем на связи!", "Let's keep in touch!", "Carmen mimes typing on her phone.", "Listen to Будем на связи", p("7-5")),
    v("ba7-6", "проводить на вокзал", "to see someone off at the station", "Carmen and Lucas walk with Murzik and Tom to the station.", "Listen to проводить на вокзал", p("7-6")),
    v("ba7-7", "Счастливо!", "All the best! Bye!", "Lucas waves both hands.", "Listen to Счастливо", p("7-7")),
    v("ba7-8", "Удачи в Италии!", "Good luck in Italy!", "Carmen points at a map of Italy.", "Listen to Удачи в Италии", p("7-8")),
  ],
  letters: [
    letter("Счастливо!", "The т is silent and the stress is on и: shchis-LEE-va.", "Счастливо!", "All the best!", "Not SHCHAS-li-va."),
  ],
  dialogue: {
    title: "The last evening",
    note: "Проводим — we'll see you off. Обязательно — definitely, for sure.",
    lines: [
      line("lucas", "Мурзик, это ваш последний вечер?", "Murzik, is this your last evening?"),
      line("murzik", "Да. Завтра мы уезжаем в Милан.", "Yes. Tomorrow we're leaving for Milan."),
      line("carmen", "Мы проводим вас на вокзал. Поезд в десять?", "We'll see you off at the station. Is the train at ten?"),
      line("tom", "В десять. Мы выйдем из дома в девять.", "At ten. We'll leave the house at nine."),
      line("lucas", "Не забывай нас! Будем на связи!", "Don't forget us! Let's keep in touch!"),
      line("murzik", "Не забуду! Мы обязательно вернёмся!", "I won't forget! We'll definitely come back!"),
      line("carmen", "Удачи в Италии! Найди свою бабушку.", "Good luck in Italy! Find your grandmother."),
    ],
    gist: choice("ba7-d1", "When will they leave the house tomorrow?", [
      ["At nine.", true],
      ["At ten.", false],
      ["At two.", false],
    ]),
  },
  grammar: [
    {
      title: "Barcelona review",
      paragraphs: [
        "On foot: прийти, уйти, выйти, зайти, подойти, отойти, перейти, пройти. By transport: приехать, уехать, доехать.",
        "Future: я приду, мы выйдем, вы уедете. Past: пришёл / пришла, уехал / уехала.",
      ],
      examples: [
        { ru: "Мы выйдем из дома в девять и приедем на вокзал в полдесятого.", en: "We'll leave the house at nine and get to the station at half past nine." },
        { ru: "Вы обязательно вернётесь?", en: "Will you definitely come back?" },
      ],
    },
  ],
  tasks: [
    listen("ba7-t1", "Audio story: Lucas talks about his day. Listen. Where did he go first?", "Утром я вышел из дома в восемь. Сначала я зашёл к другу, и мы пошли в скейт-парк. Потом мы перешли улицу и пришли на пляж. Вечером я пришёл домой поздно, и мама была недовольна!", [
      ["To his friend's house.", true],
      ["To the beach.", false],
      ["To the skate park, alone.", false],
    ]),
    choice("ba7-t2", "In Lucas's story, why was his mum unhappy?", [
      ["He came home late.", true],
      ["He crossed the street.", false],
      ["He lost his skateboard.", false],
    ], { skill: "listening" }),
    choice("ba7-t3", "“We'll leave the house at nine.” Which is right?", [
      ["Мы выйдем из дома в девять.", true],
      ["Мы зайдём из дома в девять.", false],
      ["Мы вышли из дома в девять.", false],
    ], { skill: "grammar" }),
    read("ba7-t4", "Read the ticket. Where is the train going?", "БАРСЕЛОНА → МИЛАН\nОтправление: 10:00\nВагон 5", [
      ["To Milan.", true],
      ["To Valencia.", false],
      ["To Lyon.", false],
    ]),
    script("ba7-t5", "Say goodbye to Carmen and Lucas.", [
      { speaker: "Lucas", text: "Не забывай нас!" },
      { speaker: "You", answer: "Не забуду! Мы обязательно вернёмся!", options: ["Не забуду! Мы обязательно вернёмся!", "Я заблудился.", "Поезд опаздывает."] },
      { speaker: "Carmen", text: "Удачи в Италии!" },
      { speaker: "You", answer: "Спасибо за всё! Пишите!", options: ["Спасибо за всё! Пишите!", "Отойди назад!", "Где встретимся?"] },
    ], { skill: "review" }),
    match("ba7-t6", "Barcelona review: match the Russian with the English.", [
      ["Где встретимся?", "Where shall we meet?"],
      ["выйти из метро", "to get out of the metro"],
      ["перейти улицу", "to cross the street"],
      ["Как доехали?", "How was your journey?"],
    ], { skill: "review" }),
    speak("ba7-t7", "Что ты делал вчера?", "Вчера я вышел из дома в девять, зашёл в кафе, а потом пришёл на пляж.", "Yesterday I left home at nine, dropped into a café, and then came to the beach.", {
      help: "Tell your day out loud with motion verbs. A woman says вышла, зашла, пришла (and is asked: Что ты делала вчера?).",
    }),
  ],
  reward: {
    itemId: "ceramiclizard",
    itemName: "Ceramic lizard",
    itemNameRu: "Керамическая ящерица",
    ru: "Ха! Разноцветная ящерица!",
    en: "Ha! A colourful lizard!",
    a11y: "A small ceramic lizard covered in bright mosaic sits on the windowsill next to the striped hammock.",
    image: p("reward-7"),
    steps: ["Lucas gives Murzik a little ceramic lizard.", "It's covered in bright mosaic, like the famous dragon in the park.", "“It will guard your room,” says Lucas.", "Murzik puts it on the windowsill."],
  },
};

export const barcelonaLessons: Lesson[] = [barcelona1, barcelona2, barcelona3, barcelona4, barcelona5, barcelona6, barcelona7];
