import { images as img, pic } from "../art";
import { choice, fill, letter, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/* Paris · «Первый разговор» · lessons 4–7 */

export const lesson4: Lesson = {
  id: "a1-paris-4",
  level: "A1",
  cityId: "paris",
  number: 4,
  title: "I Don't Understand",
  minutes: 6,
  goals: ["Say that you do not understand", "Ask someone to repeat or slow down", "Ask about a word"],
  vocabNote:
    "These phrases keep any conversation going. Повтори is for a friend; add -те for вы: Повторите — just like Извини → Извините.",
  vocab: [
    v("l4-1", "Я не понимаю.", "I don't understand.", "Tom scratches his head with a puzzled face. A question mark floats above him.", "Play Я не понимаю", pic("paris/l4-1"), "ya ne ponimayu."),
    v("l4-2", "Повтори, пожалуйста.", "Say it again, please.", "Tom leans towards Murzik and cups a hand behind his ear.", "Play Повтори, пожалуйста", pic("paris/l4-3"), "povtori, pozhaluysta."),
    v("l4-3", "Повторите, пожалуйста.", "Could you repeat, please? (polite)", "Murzik politely cups a paw behind his ear while Madame Dubois speaks.", "Play Повторите, пожалуйста", pic("paris/l4-4"), "povtorite, pozhaluysta."),
    v("l4-4", "Медленнее, пожалуйста.", "More slowly, please.", "Tom makes a gentle “slow down” gesture with both hands. A small snail sits on the table.", "Play Медленнее, пожалуйста", pic("paris/l4-5"), "medlenneye, pozhaluysta."),
    v("l4-5", "Как по-русски…?", "How do you say … in Russian?", "Tom holds up a cup and looks at Murzik with a questioning face.", "Play Как по-русски", pic("paris/l4-8"), "kak po-russki…?"),
    v("l4-6", "Что значит…?", "What does … mean?", "Tom holds an open notebook with one word underlined and looks puzzled.", "Play Что значит", pic("paris/l4-9"), "chto znachit…?"),
    v("l4-7", "Я не знаю.", "I don't know.", "Murzik shrugs with both paws open and a funny, confused face.", "Play Я не знаю", pic("paris/l4-10"), "ya ne znayu."),
  ],
  letters: [
    letter("Л л", "“l” as in “lamp”", "Медленнее", "More slowly"),
    letter("Я я", "“ya” as in “yard”", "Я не знаю", "I don't know", "Looks like a backwards R. It means “I”!"),
    letter("Ю ю", "“yu” as in “you”", "Я не понимаю", "I don't understand"),
    letter("Ч ч", "“ch” as in “chair”", "Что значит…?", "What does … mean?", "Looks like the number 4."),
    letter("Э э", "“e” as in “end”", "Это лампа", "This is a lamp"),
  ],
  dialogue: {
    title: "A Russian lesson in the kitchen",
    lines: [
      line("tom", "Мурзик, что это?", "Murzik, what is this?"),
      line("murzik", "Это лампа.", "This is a lamp."),
      line("tom", "Извини, я не понимаю. Повтори, пожалуйста.", "Sorry, I don't understand. Say it again, please."),
      line("murzik", "Лам-па.", "Lamp."),
      line("tom", "А как по-русски “table”?", "And how do you say “table” in Russian?"),
      line("murzik", "Стол.", "Table."),
      line("tom", "Медленнее, пожалуйста.", "More slowly, please."),
      line("murzik", "Сто-о-ол.", "Ta-a-able."),
      line("tom", "А это что?", "And what is this?"),
      line("murzik", "Хм… Я не знаю!", "Hmm… I don't know!"),
    ],
    gist: choice("l4-d1", "What is Tom doing?", [
      ["Learning Russian words.", true],
      ["Buying a lamp.", false],
      ["Saying goodbye.", false],
    ]),
  },
  grammar: [
    {
      title: "Не means “not”",
      paragraphs: [
        "Put не right before the verb to make it negative. This order does not change.",
        "Я понимаю — I understand. Я не понимаю — I don't understand. Я знаю — I know. Я не знаю — I don't know.",
      ],
      examples: [
        { ru: "Я не понимаю.", en: "I don't understand." },
        { ru: "Я не знаю.", en: "I don't know." },
      ],
    },
  ],
  tasks: [
    choice("l4-t1", 'How do you ask "What does … mean?"', [
      ["Что значит…?", true],
      ["Как по-русски…?", false],
      ["Я не знаю.", false],
    ], { skill: "words" }),
    listen("l4-t2", "Listen. What did you hear?", "Повторите, пожалуйста.", [
      ["Повторите, пожалуйста.", true],
      ["Повтори, пожалуйста.", false],
      ["Медленнее, пожалуйста.", false],
    ]),
    choice("l4-t3", "Find the correct sentence.", [
      ["Я понимаю не.", false],
      ["Я не понимаю.", true],
      ["Не я понимаю.", false],
    ], { skill: "grammar" }),
    missing("l4-t4", "Which letter is missing? (I don't understand.)", "Я не понима", "", "ю", ["ю", "я", "а"]),
    speak("l4-t5", "Как у тебя дела?", "Медленнее, пожалуйста.", "More slowly, please.", {
      help: "Tom speaks much too fast! Ask him aloud to slow down.",
    }),
    choice("l4-t6", "Your friend gives you a cup of tea. What do you say?", [
      ["Спасибо!", true],
      ["Извините!", false],
      ["Ничего страшного.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kitchen-table",
    itemName: "Kitchen table",
    itemNameRu: "Стол",
    ru: "Ура! У меня новый стол!",
    en: "Yay! I have a new table!",
    a11y: "Murzik is standing beside his new kitchen table. A cup and a plate are on the table. Tom is standing nearby, and Murzik's other apartment furniture remains visible.",
    image: img.table,
    steps: ["The kitchen appears.", "Murzik notices the new table.", "He puts a cup and a plate on it.", "Tom smiles."],
    bridge: "At the new table, Tom and Murzik have tea. Tom is curious: where is a Russian cat from?",
  },
};

export const lesson5: Lesson = {
  id: "a1-paris-5",
  level: "A1",
  cityId: "paris",
  number: 5,
  title: "Where Are You From?",
  minutes: 6,
  goals: ["Say where you are from", "Say where you live", "Ask if someone speaks Russian"],
  vocabNote:
    "City names change a little after из (from) and в (in): Москва → из Москвы, Париж → в Париже. Learn them as whole phrases for now.",
  vocab: [
    v("l5-1", "Откуда ты?", "Where are you from?", "Tom and Murzik sit at the kitchen table with cups of tea. Tom asks a question with a curious face.", "Play Откуда ты", pic("paris/l5-1"), "otkuda ty?"),
    v("l5-2", "Я из Москвы.", "I'm from Moscow.", "Murzik holds a postcard of Moscow's Red Square with colourful domes.", "Play Я из Москвы", pic("paris/l5-2"), "ya iz Moskvy."),
    v("l5-3", "Я из Лондона.", "I'm from London.", "Tom holds a postcard of London with Big Ben and a red bus.", "Play Я из Лондона", pic("paris/l5-3"), "ya iz Londona."),
    v("l5-4", "Где ты живёшь?", "Where do you live?", "Tom points at a small map of Europe on the wall with a questioning look.", "Play Где ты живёшь", pic("paris/l5-4"), "gde ty zhivyosh?"),
    v("l5-5", "Я живу в Париже.", "I live in Paris.", "Murzik stands at his window. The Eiffel Tower is visible outside.", "Play Я живу в Париже", pic("paris/l5-5"), "ya zhivu v Parizhe."),
    v("l5-6", "Ты говоришь по-русски?", "Do you speak Russian?", "Murzik looks at Tom with raised eyebrows and an encouraging smile.", "Play Ты говоришь по-русски", pic("paris/l5-6"), "ty govorish' po-russki?"),
    v("l5-7", "Да, немного.", "Yes, a little.", "Tom shows a tiny gap between his thumb and finger and smiles shyly.", "Play Да, немного", pic("paris/l5-7"), "da, nemnogo."),
  ],
  letters: [
    letter("Г г", "“g” as in “go”", "Ты говоришь по-русски?", "Do you speak Russian?"),
    letter("У у", "“oo” as in “food”", "Я учу русский", "I'm learning Russian", "Looks like English Y, but sounds like OO!"),
    letter("Ш ш", "“sh” as in “shop”", "Хорошо", "Fine"),
    letter("Ё ё", "“yo” as in “yoghurt”", "Где ты живёшь?", "Where do you live?", "Always stressed. The two dots are often left out in print."),
    letter("Ь ь", "no sound of its own", "Ты говоришь", "You speak", "The soft sign makes the letter before it soft."),
  ],
  dialogue: {
    title: "Tea and questions",
    note: "Я учу русский means “I'm learning Russian.” Но means “but”.",
    lines: [
      line("murzik", "Том, откуда ты?", "Tom, where are you from?"),
      line("tom", "Я из Лондона. А ты?", "I'm from London. And you?"),
      line("murzik", "Я из Москвы. Но я живу в Париже.", "I'm from Moscow. But I live in Paris."),
      line("tom", "Ты русский кот!", "You're a Russian cat!"),
      line("murzik", "Да! А ты говоришь по-русски?", "Yes! And do you speak Russian?"),
      line("tom", "Да, немного. Я учу русский.", "Yes, a little. I'm learning Russian."),
      line("murzik", "А где ты живёшь?", "And where do you live?"),
      line("tom", "Я живу в Лондоне.", "I live in London."),
    ],
    gist: choice("l5-d1", "Where is Murzik from?", [
      ["Moscow.", true],
      ["London.", false],
      ["Paris.", false],
    ]),
  },
  grammar: [
    {
      title: "From a city, in a city",
      paragraphs: [
        "Я из … — I'm from …: Москва → из Москвы, Лондон → из Лондона, Париж → из Парижа.",
        "Я живу в … — I live in …: Париж → в Париже, Лондон → в Лондоне, Москва → в Москве.",
      ],
      examples: [
        { ru: "Я из Лондона.", en: "I'm from London." },
        { ru: "Я живу в Париже.", en: "I live in Paris." },
      ],
    },
  ],
  tasks: [
    tf("l5-t1", "Том живёт в Париже.", false, "True or false: Tom lives in Paris.", { skill: "words" }),
    listen("l5-t2", "Listen. What does it mean?", "Где ты живёшь?", [
      ["Where do you live?", true],
      ["Where are you from?", false],
      ["Do you speak Russian?", false],
    ]),
    fill("l5-t3", "Complete.", "Я живу в", ".", "Париже", ["Париже", "Париж", "Парижа"], { skill: "grammar" }),
    spell("l5-t4", "Build the word for “I learn”.", "учу"),
    speak("l5-t5", "Откуда ты?", "Я из Лондона.", "I'm from London.", {
      help: "Answer aloud. Use your own city if you know how to say it.",
    }),
    listen("l5-t6", "Listen and choose the best reply.", "Что значит «миска»?", [
      ["Миска — это “bowl”.", true],
      ["Я из Москвы.", false],
      ["Да, немного.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fridge",
    itemName: "Refrigerator",
    itemNameRu: "Холодильник",
    ru: "Ура! У меня новый холодильник!",
    en: "Yay! I have a new refrigerator!",
    a11y: "Murzik is standing next to his new refrigerator in the kitchen. He has opened the refrigerator and is looking inside happily. Tom is standing beside him. The kitchen table, bowl, chair and sofa remain visible in the apartment.",
    image: img.fridge,
    steps: ["Murzik notices the new refrigerator.", "He opens it.", "He looks inside happily.", "Tom looks inside too."],
    bridge: "Tom lives in London. He has an idea, and he wants to ask Murzik a question.",
  },
};

export const lesson6: Lesson = {
  id: "a1-paris-6",
  level: "A1",
  cityId: "paris",
  number: 6,
  title: "Yes, No, Maybe",
  minutes: 6,
  goals: ["Offer something to a friend", "Say yes, no thank you or maybe", "Invite a friend for a walk"],
  vocabNote:
    "Russians often answer with the verb, not only with yes or no: Хочешь? — Хочу! (Do you want some? — I do!)",
  vocab: [
    v("l6-1", "Хочешь чай?", "Would you like some tea?", "Tom holds a teapot over a cup and looks at Murzik.", "Play Хочешь чай", pic("paris/l6-2"), "khochesh' chay?"),
    v("l6-2", "Да, хочу.", "Yes, I'd like some.", "Murzik nods eagerly and holds out his cup with both paws.", "Play Да, хочу", pic("paris/l6-3"), "da, khochu."),
    v("l6-3", "Нет, спасибо.", "No, thank you.", "Murzik raises a paw politely and smiles, saying no kindly.", "Play Нет, спасибо", pic("paris/l6-5"), "net, spasibo."),
    v("l6-4", "Конечно!", "Of course!", "Murzik nods with great enthusiasm, his tail high in the air.", "Play Конечно", pic("paris/l6-6"), "konechno!"),
    v("l6-5", "Может быть.", "Maybe.", "Murzik taps his chin with a paw, thinking, with one eyebrow raised.", "Play Может быть", pic("paris/l6-7"), "mozhet byt'."),
    v("l6-6", "Давай!", "Let's! / Sure!", "Murzik and Tom give each other a high five.", "Play Давай", pic("paris/l6-8"), "davay!"),
    v("l6-7", "Пойдём гулять?", "Shall we go for a walk?", "Tom stands at the door in his coat and points outside, inviting Murzik.", "Play Пойдём гулять", pic("paris/l6-9"), "poydyom gulyat'?"),
  ],
  letters: [
    letter("Х х", "“ch” as in Scottish “loch”", "Хочешь чай?", "Would you like some tea?", "Looks like English X, but sounds like a soft H."),
    letter("Б б", "“b” as in “bag”", "Может быть", "Maybe"),
    letter("Ы ы", "a deep “i”, said with a smile", "Может быть", "Maybe", "There is no English sound like it. Listen and copy."),
    letter("Й й", "“y” as in “boy”", "Давай!", "Let's!"),
    letter("Ц ц", "“ts” as in “cats”", "Улица", "Street"),
  ],
  dialogue: {
    title: "Tom's idea",
    note: "Ты хочешь в Лондон? means “Do you want to go to London?” Russians often leave out the verb “go”.",
    lines: [
      line("tom", "Мурзик, хочешь чай?", "Murzik, would you like some tea?"),
      line("murzik", "Нет, спасибо.", "No, thank you."),
      line("tom", "А кофе?", "And coffee?"),
      line("murzik", "Может быть… Да, хочу!", "Maybe… Yes, I'd like some!"),
      line("tom", "Пойдём гулять?", "Shall we go for a walk?"),
      line("murzik", "Давай!", "Let's!"),
      line("tom", "И ещё… Ты хочешь в Лондон? Со мной?", "And one more thing… Do you want to go to London? With me?"),
      line("murzik", "В Лондон? Конечно!", "To London? Of course!"),
    ],
    gist: choice("l6-d1", "What is Tom's big idea?", [
      ["To go to London together.", true],
      ["To make tea.", false],
      ["To buy a lamp.", false],
    ]),
  },
  grammar: [
    {
      title: "Хочу and хочешь",
      paragraphs: [
        "я хочу — I want. ты хочешь — you want. A question sounds like a statement with a rising voice: Хочешь чай? ↗",
        "Answer with the verb: Да, хочу. — Нет, не хочу. Politely: Нет, спасибо.",
      ],
      examples: [
        { ru: "Хочешь кофе? — Да, хочу!", en: "Would you like some coffee? — Yes, please!" },
        { ru: "Хочешь чай? — Нет, спасибо.", en: "Would you like some tea? — No, thank you." },
      ],
    },
  ],
  tasks: [
    match("l6-t1", "Match the Russian with the English.", [
      ["Конечно!", "Of course!"],
      ["Может быть.", "Maybe."],
      ["Давай!", "Let's!"],
    ], { skill: "words" }),
    listen("l6-t2", "Listen and choose the best reply.", "Хочешь кофе?", [
      ["Да, хочу!", true],
      ["Да, хочешь!", false],
      ["Мне тоже.", false],
    ]),
    fill("l6-t3", "Complete.", "Ты", "чай?", "хочешь", ["хочешь", "хочу", "хочет"], { skill: "grammar" }),
    missing("l6-t4", "Which letter is missing? (I want.)", "Хо", "у", "ч", ["ч", "ш", "ж"]),
    speak("l6-t5", "Пойдём гулять?", "Давай! Хорошая идея!", "Let's! Good idea!", {
      help: "Tom invites you for a walk. Answer aloud.",
    }),
    listen("l6-t6", "Listen. What did you hear?", "Я из Москвы.", [
      ["Я из Москвы.", true],
      ["Я в Москве.", false],
      ["Я из Лондона.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "desk",
    itemName: "Desk",
    itemNameRu: "Письменный стол",
    ru: "Ура! У меня новый стол!",
    en: "Yay! I have a new desk!",
    a11y: "Murzik is sitting at his new desk near the window. His laptop is on the desk. Tom is standing nearby. The furniture and objects from previous lessons remain visible in the apartment.",
    image: img.desk,
    steps: ["An old desk from the flea market appears near the window.", "Murzik opens its drawer.", "Inside there is another postcard — this one has a London stamp!", "The same handwriting. The same little painted cat. Grandma Asya!"],
    bridge: "Grandma Asya was in London once! Now Murzik knows where her steps begin. He buys a ticket. Tomorrow he has to say goodbye to Paris.",
  },
};

export const lesson7: Lesson = {
  id: "a1-paris-7",
  level: "A1",
  cityId: "paris",
  number: 7,
  title: "See You!",
  minutes: 6,
  goals: ["Say goodbye to a friend and politely", "Wish someone a good day and a good trip", "Answer a wish"],
  vocabNote:
    "Пока! is for friends. До свидания! is polite and safe with anyone. Wishes such as Хорошего дня! are fixed phrases: learn them whole.",
  vocab: [
    v("l7-1", "Пока!", "Bye!", "Murzik waves goodbye to Tom at the door with a cheerful smile.", "Play Пока", pic("paris/l7-1"), "poka!"),
    v("l7-2", "До свидания!", "Goodbye! (polite)", "Murzik waves goodbye to Madame Dubois on the staircase, standing up straight.", "Play До свидания", pic("paris/l7-2"), "do svidaniya!"),
    v("l7-3", "До завтра!", "See you tomorrow!", "Tom waves from the street in the evening. A crescent moon is in the sky.", "Play До завтра", pic("paris/l7-3"), "do zavtra!"),
    v("l7-4", "Мне пора.", "I have to go.", "Tom looks at his wristwatch and puts on his coat in a hurry.", "Play Мне пора", pic("paris/l7-5"), "mne pora."),
    v("l7-5", "Хорошего дня!", "Have a good day!", "Madame Dubois smiles and waves to Murzik on a sunny morning.", "Play Хорошего дня", pic("paris/l7-6"), "khoroshego dnya!"),
    v("l7-6", "И тебе!", "You too!", "Murzik waves back to Tom with a big smile.", "Play И тебе", pic("paris/l7-7"), "i tebe!"),
    v("l7-7", "Счастливого пути!", "Have a good trip!", "Madame Dubois waves a handkerchief as Murzik carries his small suitcase.", "Play Счастливого пути", pic("paris/l7-9"), "schastlivogo puti!"),
  ],
  letters: [
    letter("Ф ф", "“f” as in “fun”", "Кофе", "Coffee"),
    letter("Щ щ", "a long, soft “sh”", "Ещё раз!", "Once more!", "Softer and longer than Ш."),
    letter("Ъ ъ", "no sound of its own", "Подъезд", "Entrance", "The hard sign is rare. It makes a tiny pause."),
  ],
  dialogue: {
    title: "Goodbye, Paris",
    note: "Я еду в … means “I'm going to …” by car, train or plane. You will meet it again in London. И вам! is the polite “You too!”",
    lines: [
      line("murzik", "Мадам Дюбуа, до свидания! Я еду в Лондон.", "Madame Dubois, goodbye! I'm going to London."),
      line("neighbour", "В Лондон? Счастливого пути!", "To London? Have a good trip!"),
      line("murzik", "Спасибо! Хорошего дня!", "Thank you! Have a good day!"),
      line("neighbour", "И тебе!", "You too!"),
      line("tom", "Мурзик, мне пора. До завтра!", "Murzik, I have to go. See you tomorrow!"),
      line("murzik", "Пока, Том! До завтра!", "Bye, Tom! See you tomorrow!"),
    ],
    gist: choice("l7-d1", "Where is Murzik going?", [
      ["To London.", true],
      ["To Moscow.", false],
      ["To the park.", false],
    ]),
  },
  grammar: [
    {
      title: "Пока or До свидания?",
      paragraphs: [
        "Пока! — to friends, family and children. До свидания! — politely, to anyone. It is never wrong.",
        "To answer a wish, say И тебе! to a friend or И вам! politely.",
      ],
      examples: [
        { ru: "Хорошего дня! — И тебе!", en: "Have a good day! — You too!" },
        { ru: "Хорошего дня! — Спасибо, и вам!", en: "Have a good day! — Thank you, you too!" },
      ],
    },
  ],
  tasks: [
    listen("l7-t1", "Listen to the short conversation. How is the second person?", "Привет! Как дела? — Так себе. А у тебя? — Отлично!", [
      ["So-so.", true],
      ["Great.", false],
      ["Bad.", false],
    ], { help: "This is your Paris listening test." }),
    choice("l7-t2", "You leave a shop. The shop assistant is an adult. What do you say?", [
      ["Пока!", false],
      ["До свидания!", true],
    ], { skill: "grammar" }),
    choice("l7-t3", "Your friend says Хорошего дня! What do you answer?", [
      ["И тебе!", true],
      ["И вам!", false],
      ["Мне пора.", false],
    ], { skill: "words" }),
    spell("l7-t4", "Build the word for “Thank you”.", "Спасибо"),
    speak("l7-t5", "Мне пора.", "Пока! До завтра!", "Bye! See you tomorrow!", { help: "Tom has to go. Say goodbye aloud." }),
    listen("l7-t6", "Listen and choose the best reply.", "Откуда ты?", [
      ["Я из Лондона.", true],
      ["Мне пора.", false],
      ["Хорошо, спасибо.", false],
    ], { skill: "review" }),
    choice("l7-t7", "Хочешь чай? You don't want any. Choose the polite answer.", [
      ["Нет, спасибо.", true],
      ["Давай!", false],
      ["Конечно!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "clock",
    itemName: "Wall clock",
    itemNameRu: "Часы",
    ru: "Ура! У меня новые часы!",
    en: "Yay! I have a new clock!",
    a11y: "A new wall clock appears in Murzik's apartment. Murzik looks at it happily. The bowl, chair, sofa, kitchen table, refrigerator and desk are still there.",
    image: img.clock,
    steps: ["A new wall clock appears.", "Murzik looks at it happily.", "The clock shows it is time to go.", "Murzik picks up his suitcase."],
    bridge: "The clock says it is time. The flight to London leaves in the morning.",
  },
};
