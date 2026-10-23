import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Istanbul · «В гостинице» · lessons 1–7.
 * Murzik and Tom follow the postmark to Istanbul and stay in a small hotel with a balcony
 * over the Bosphorus. Things go wrong in the room, the suitcase with all of Murzik's keepsakes
 * disappears, and the post office cannot say who sent the postcard. The suitcase is found
 * in the laundry room — with Pamuk, the hotel's white fluffy cat (an ordinary, non-talking cat), asleep on it.
 */

export const istanbul1: Lesson = {
  id: "a1-istanbul-1",
  level: "A1",
  cityId: "istanbul",
  number: 1,
  title: "I Have a Booking",
  minutes: 5,
  goals: ["Check in at a hotel", "Say how many nights", "Ask if breakfast is included"],
  vocabNote:
    "Бронь is a booking. Ночь (night) changes like час: одна ночь, две ночи, пять ночей.",
  vocab: [
    v("is1-1", "У меня бронь.", "I have a booking.", "Tom stands at a hotel reception desk with his suitcase and smiles.", "Play У меня бронь", pic("istanbul/1-1")),
    v("is1-2", "На имя Том Браун.", "In the name of Tom Brown.", "The receptionist looks at a computer screen, finding the booking.", "Play На имя Том Браун", pic("istanbul/1-2")),
    v("is1-3", "На сколько ночей?", "For how many nights?", "The receptionist raises his eyebrows with a friendly smile; a moon is in the window.", "Play На сколько ночей", pic("istanbul/1-3")),
    v("is1-4", "На три ночи.", "For three nights.", "Three little moons in a row.", "Play На три ночи", pic("istanbul/1-4")),
    v("is1-5", "Вот ваш ключ.", "Here is your key.", "The receptionist hands Tom an old brass key with a big tassel.", "Play Вот ваш ключ", pic("istanbul/1-5")),
    v("is1-6", "Это хорошая гостиница.", "This is a good hotel.", "A small, pretty hotel with flowers on the balconies and a view of the sea.", "Play Это хорошая гостиница", pic("istanbul/1-6b")),
    v("is1-7", "Завтрак включён?", "Is breakfast included?", "A breakfast table with bread, cheese, olives, tomatoes and tea in tulip-shaped glasses.", "Play Завтрак включён", pic("istanbul/1-7")),
  ],
  dialogue: {
    title: "At the reception",
    note: "Номер means both “number” and “hotel room”. С семи до десяти — from seven to ten.",
    lines: [
      line("receptionist", "Добрый вечер! Добро пожаловать!", "Good evening! Welcome!"),
      line("tom", "Добрый вечер! У меня бронь. На имя Том Браун.", "Good evening! I have a booking. In the name of Tom Brown."),
      line("receptionist", "Да, вот. На сколько ночей?", "Yes, here it is. For how many nights?"),
      line("tom", "На три ночи.", "For three nights."),
      line("receptionist", "Хорошо. Вот ваш ключ. Номер двенадцать.", "Good. Here is your key. Room twelve."),
      line("murzik", "А завтрак включён?", "And is breakfast included?"),
      line("receptionist", "Конечно! С семи до десяти.", "Of course! From seven to ten."),
      line("murzik", "Ура! Это хорошая гостиница!", "Hooray! This is a good hotel!"),
    ],
    gist: choice("is1-d1", "How many nights will they stay?", [
      ["Three.", true],
      ["Two.", false],
      ["Twelve.", false],
    ]),
  },
  grammar: [
    {
      title: "Ночь, ночи, ночей",
      paragraphs: [
        "It works like час and год: одна ночь, две / три / четыре ночи, пять ночей.",
        "На + number means “for”: на одну ночь, на три ночи, на пять ночей.",
      ],
      examples: [
        { ru: "на одну ночь", en: "for one night" },
        { ru: "на пять ночей", en: "for five nights" },
      ],
    },
  ],
  tasks: [
    listen("is1-t1", "Listen. For how many nights?", "На пять ночей.", [
      ["Five.", true],
      ["Four.", false],
      ["Two.", false],
    ]),
    match("is1-t2", "Match the Russian with the English.", [
      ["бронь", "booking"],
      ["ключ", "key"],
      ["завтрак", "breakfast"],
    ], { skill: "words" }),
    fill("is1-t3", "Complete: “for two nights”.", "на две", "", "ночи", ["ночи", "ночей", "ночь"], { skill: "grammar" }),
    spell("is1-t4", "Build the word for “breakfast”.", "завтрак"),
    speak("is1-t5", "Добрый вечер! Чем могу помочь?", "У меня бронь. На три ночи.", "I have a booking. For three nights.", {
      help: "You arrive at a hotel. Say you have a booking for three nights.",
    }),
    listen("is1-t6", "Listen and choose the best reply.", "Когда у тебя день рождения?", [
      ["Пятого мая.", true],
      ["На три ночи.", false],
      ["Номер двенадцать.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "brass-lamp",
    itemName: "Mosaic lamp",
    itemNameRu: "Лампа",
    ru: "Ура! Разноцветная лампа!",
    en: "Yay! A colourful lamp!",
    a11y: "A hanging lamp made of many little pieces of coloured glass glows in the hotel room. Through the balcony door the Bosphorus shines at night.",
    image: pic("istanbul/reward-1"),
    steps: ["Room twelve has a little balcony.", "From it you can see the sea and the boats.", "Above the bed hangs a lamp of coloured glass.", "It throws little colours all over the walls."],
    bridge: "In the morning Murzik turns on the shower… and nothing happens.",
  },
};

export const istanbul2: Lesson = {
  id: "a1-istanbul-2",
  level: "A1",
  cityId: "istanbul",
  number: 2,
  title: "It Doesn't Work!",
  minutes: 6,
  goals: ["Say something doesn't work", "Say something is missing", "Ask for another room"],
  vocabNote:
    "Нет + thing uses the “of” form: вода → нет воды, полотенца → нет полотенец. You saw it in Prague: У меня нет шапки.",
  vocab: [
    v("is2-1", "Не работает кондиционер.", "The air conditioning doesn't work.", "Tom presses the button of an air conditioner; nothing happens; he fans himself in the heat.", "Play Не работает кондиционер", pic("istanbul/2-1")),
    v("is2-2", "Нет горячей воды.", "There's no hot water.", "Murzik under a cold shower with his fur standing on end.", "Play Нет горячей воды", pic("istanbul/2-2")),
    v("is2-3", "Нет полотенец.", "There are no towels.", "An empty towel rail in a hotel bathroom; Murzik drips water on the floor.", "Play Нет полотенец", pic("istanbul/2-3")),
    v("is2-4", "Можно другой номер?", "Can we have another room?", "Tom asks at the reception desk, pointing upstairs.", "Play Можно другой номер", pic("istanbul/2-4")),
    v("is2-5", "Извините за неудобства.", "Sorry for the inconvenience.", "The receptionist puts a hand on his heart and bows his head politely.", "Play Извините за неудобства", pic("istanbul/2-5")),
    v("is2-6", "Сейчас всё исправим.", "We'll fix everything right now.", "A repairman with a toolbox walks quickly towards the room.", "Play Сейчас всё исправим", pic("istanbul/2-6")),
    v("is2-7", "Теперь всё в порядке.", "Now everything is fine.", "Murzik, wrapped in a big fluffy towel, gives a thumbs up.", "Play Теперь всё в порядке", pic("istanbul/2-7")),
  ],
  dialogue: {
    title: "Room twelve",
    note: "И ещё — and also. Через пять минут — in five minutes (you know через from Berlin).",
    lines: [
      line("tom", "Извините, в номере двенадцать не работает кондиционер.", "Excuse me, in room twelve the air conditioning doesn't work."),
      line("murzik", "И нет горячей воды! И нет полотенец!", "And there's no hot water! And there are no towels!"),
      line("receptionist", "Ой! Извините за неудобства. Сейчас всё исправим.", "Oh! Sorry for the inconvenience. We'll fix everything right now."),
      line("tom", "А можно другой номер?", "And can we have another room?"),
      line("receptionist", "К сожалению, нет. Но мастер будет через пять минут.", "Unfortunately not. But the repairman will be there in five minutes."),
      line("murzik", "Ура! Теперь всё в порядке!", "Hooray! Now everything is fine!"),
    ],
    gist: choice("is2-d1", "What is NOT a problem in room twelve?", [
      ["The key doesn't work.", true],
      ["There's no hot water.", false],
      ["There are no towels.", false],
    ]),
  },
  grammar: [
    {
      title: "Нет + the “of” form",
      paragraphs: [
        "Есть вода. → Нет воды. Есть шапка. → Нет шапки. Есть полотенца. → Нет полотенец.",
        "It's enough to learn the common ones as phrases: нет воды, нет света (no light), нет интернета.",
      ],
      examples: [
        { ru: "Нет интернета.", en: "There's no internet." },
        { ru: "Нет света.", en: "There's no light." },
      ],
    },
  ],
  tasks: [
    listen("is2-t1", "Listen. What's the problem?", "Нет интернета.", [
      ["There's no internet.", true],
      ["There's no hot water.", false],
      ["The light doesn't work.", false],
    ]),
    choice("is2-t2", "What does Извините за неудобства mean?", [
      ["Sorry for the inconvenience.", true],
      ["Now everything is fine.", false],
      ["Can we have another room?", false],
    ], { skill: "words" }),
    fill("is2-t3", "Complete: “There's no hot water.”", "Нет горячей", ".", "воды", ["воды", "вода", "воду"], { skill: "grammar" }),
    missing("is2-t4", "Which letter is missing? (towel)", "пол", "тенце", "о", ["о", "а", "е"]),
    speak("is2-t5", "Чем могу помочь?", "В номере нет горячей воды.", "There's no hot water in the room.", {
      help: "Call the reception and say there's no hot water.",
    }),
    listen("is2-t6", "Listen and choose the best reply.", "На сколько ночей?", [
      ["На три ночи.", true],
      ["Номер двенадцать.", false],
      ["Нет полотенец.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tea-glasses",
    itemName: "Tea glasses",
    itemNameRu: "Стаканчики",
    ru: "Ура! Стаканчики для чая!",
    en: "Yay! Little tea glasses!",
    a11y: "Two small tulip-shaped glasses of red tea on little saucers stand on the balcony table.",
    image: pic("istanbul/reward-2"),
    steps: ["To say sorry, the receptionist brings tea.", "It comes in little glasses shaped like tulips.", "“For you. A present,” he says.", "Tea on the balcony, with a view of the sea."],
    bridge: "Murzik and Tom want to go into town. But first, a few requests at the reception.",
  },
};

export const istanbul3: Lesson = {
  id: "a1-istanbul-3",
  level: "A1",
  cityId: "istanbul",
  number: 3,
  title: "Could I Have…?",
  minutes: 6,
  goals: ["Make polite requests in a hotel", "Ask for a taxi or a wake-up call", "Ask for the wi-fi password"],
  vocabNote:
    "After можно and other “give me” words, “she” words change -а to -у: подушка → одну подушку, карта → карту.",
  vocab: [
    v("is3-1", "Можно ещё одну подушку?", "Could I have one more pillow?", "Murzik hugs a pillow and holds up one finger at the reception.", "Play Можно ещё одну подушку", pic("istanbul/3-1")),
    v("is3-2", "Разбудите меня в семь, пожалуйста.", "Please wake me up at seven.", "Murzik points at a clock showing seven while asking the receptionist.", "Play Разбудите меня в семь, пожалуйста", pic("istanbul/3-2")),
    v("is3-3", "Можно оставить чемодан?", "Can I leave my suitcase?", "Tom puts a suitcase down next to the reception desk.", "Play Можно оставить чемодан", pic("istanbul/3-3")),
    v("is3-4", "Вызовите такси, пожалуйста.", "Please call a taxi.", "A yellow taxi waits in front of the hotel.", "Play Вызовите такси, пожалуйста", pic("istanbul/3-4")),
    v("is3-5", "Какой пароль от вай-фая?", "What's the wi-fi password?", "Tom holds his phone up and looks at the receptionist.", "Play Какой пароль от вай-фая", pic("istanbul/3-5")),
    v("is3-6", "Без проблем.", "No problem.", "The receptionist gives a friendly thumbs up.", "Play Без проблем", pic("istanbul/3-6")),
    v("is3-7", "Мы скоро вернёмся.", "We'll be back soon.", "Murzik and Tom wave at the hotel door as they leave.", "Play Мы скоро вернёмся", pic("istanbul/3-7")),
  ],
  dialogue: {
    title: "Before going out",
    note: "Вот, пожалуйста — here you are. Пароль — password.",
    lines: [
      line("tom", "Извините, можно оставить чемодан? Мы идём в город.", "Excuse me, can we leave the suitcase? We're going into town."),
      line("receptionist", "Без проблем. Оставьте здесь.", "No problem. Leave it here."),
      line("murzik", "И можно ещё одну подушку?", "And could I have one more pillow?"),
      line("receptionist", "Конечно.", "Of course."),
      line("tom", "А какой пароль от вай-фая?", "And what's the wi-fi password?"),
      line("receptionist", "Вот, пожалуйста. Вызвать такси?", "Here you are. Shall I call a taxi?"),
      line("tom", "Нет, спасибо. Мы пешком. Мы скоро вернёмся!", "No, thank you. We'll walk. We'll be back soon!"),
    ],
    gist: choice("is3-d1", "Where do they leave the suitcase?", [
      ["At the reception.", true],
      ["In a taxi.", false],
      ["In room twelve.", false],
    ]),
  },
  grammar: [
    {
      title: "“She” words after можно: -у",
      paragraphs: [
        "When you ask for a “she” word, -а becomes -у: подушка → Можно подушку? карта → Дайте карту, пожалуйста.",
        "“He” words don't change: Можно чемодан? Можно ключ?",
      ],
      examples: [
        { ru: "Можно карту?", en: "Could I have a map?" },
        { ru: "Дайте, пожалуйста, воду.", en: "Could I have some water, please?" },
      ],
    },
  ],
  tasks: [
    listen("is3-t1", "Listen. What time is the wake-up call?", "Разбудите меня в шесть, пожалуйста.", [
      ["At six.", true],
      ["At seven.", false],
      ["At ten.", false],
    ]),
    choice("is3-t2", "You need a taxi to the airport. What do you say at the reception?", [
      ["Вызовите такси, пожалуйста.", true],
      ["Можно оставить чемодан?", false],
      ["Какой пароль от вай-фая?", false],
    ], { skill: "words" }),
    fill("is3-t3", "Complete: “Could I have a map?”", "Можно", "?", "карту", ["карту", "карта", "карты"], { skill: "grammar" }),
    spell("is3-t4", "Build the word for “pillow / cushion”.", "подушка"),
    speak("is3-t5", "Чем могу помочь?", "Какой пароль от вай-фая?", "What's the wi-fi password?", {
      help: "You need the internet. Ask the receptionist for the wi-fi password.",
    }),
    listen("is3-t6", "Listen and choose the best reply.", "Извините, нет горячей воды.", [
      ["Извините за неудобства. Сейчас всё исправим.", true],
      ["Без проблем. Оставьте здесь.", false],
      ["Завтрак включён.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "turkish-delight",
    itemName: "Box of Turkish delight",
    itemNameRu: "Лукум",
    ru: "Ура! Коробка лукума!",
    en: "Yay! A box of Turkish delight!",
    a11y: "An open round wooden box of pink and white Turkish delight dusted with sugar, on the balcony table.",
    image: pic("istanbul/reward-3"),
    steps: ["In the old bazaar there are so many sweets.", "Murzik tries a piece of Turkish delight.", "It's soft and sweet and smells of roses.", "Tom buys a whole box."],
    bridge: "They come back to the hotel for the suitcase. The receptionist looks behind the desk… The suitcase is gone!",
  },
};

export const istanbul4: Lesson = {
  id: "a1-istanbul-4",
  level: "A1",
  cityId: "istanbul",
  number: 4,
  title: "The Lost Suitcase",
  minutes: 6,
  goals: ["Say you lost something", "Describe what it looks like", "Comfort a friend"],
  vocabNote:
    "Мы потеряли is the past for “we”: the same for everyone. Был is the past of “is” for a “he” word: Чемодан был здесь.",
  vocab: [
    v("is4-1", "Мы потеряли чемодан!", "We've lost our suitcase!", "Murzik and Tom stand by the empty spot behind the reception desk with shocked faces.", "Play Мы потеряли чемодан", pic("istanbul/4-1")),
    v("is4-2", "Он был здесь!", "It was here!", "Murzik points at an empty place on the floor.", "Play Он был здесь", pic("istanbul/4-2")),
    v("is4-3", "Как он выглядит?", "What does it look like?", "The receptionist holds a notepad and a pen, ready to write.", "Play Как он выглядит", pic("istanbul/4-3")),
    v("is4-4", "Большой и коричневый.", "Big and brown.", "Murzik spreads his arms wide to show a big suitcase; a brown colour patch next to him.", "Play Большой и коричневый", pic("istanbul/4-4")),
    v("is4-5", "Там все мои вещи!", "All my things are in it!", "A thought bubble above Murzik shows his bowl, teapot, fan, family photo, alarm clock, clogs, music box, puppet, tile and postcard.", "Play Там все мои вещи", pic("istanbul/4-5")),
    v("is4-6", "Мы обязательно поищем.", "We'll definitely look for it.", "The receptionist and a porter start looking around the hotel.", "Play Мы обязательно поищем", pic("istanbul/4-6")),
    v("is4-7", "Не плачь!", "Don't cry!", "Tom hugs Murzik, who has a tear on his cheek.", "Play Не плачь", pic("istanbul/4-7")),
  ],
  dialogue: {
    title: "Where is it?",
    note: "Моя миска, мой чайник — my bowl, my teapot. Мы найдём — we'll find it.",
    lines: [
      line("murzik", "Том! Мы потеряли чемодан!", "Tom! We've lost the suitcase!"),
      line("tom", "Извините, где наш чемодан? Он был здесь!", "Excuse me, where is our suitcase? It was here!"),
      line("receptionist", "Ой… А как он выглядит?", "Oh… And what does it look like?"),
      line("tom", "Большой и коричневый.", "Big and brown."),
      line("murzik", "Там все мои вещи! Моя миска, мой чайник, открытка…", "All my things are in it! My bowl, my teapot, the postcard…"),
      line("receptionist", "Не волнуйтесь. Мы обязательно поищем.", "Don't worry. We'll definitely look for it."),
      line("tom", "Мурзик, не плачь. Мы найдём.", "Murzik, don't cry. We'll find it."),
    ],
    gist: choice("is4-d1", "What does the suitcase look like?", [
      ["Big and brown.", true],
      ["Small and red.", false],
      ["Big and blue.", false],
    ]),
  },
  grammar: [
    {
      title: "Был, была, было, были",
      paragraphs: [
        "The past of “is” changes with the word: чемодан был, сумка была, письмо было, вещи были.",
        "Он был здесь — It (the suitcase) was here. Она была здесь — It (the bag) was here.",
      ],
      examples: [
        { ru: "Сумка была здесь.", en: "The bag was here." },
        { ru: "Вещи были в чемодане.", en: "The things were in the suitcase." },
      ],
    },
  ],
  tasks: [
    listen("is4-t1", "Listen. What does the bag look like?", "Сумка маленькая и красная.", [
      ["Small and red.", true],
      ["Big and brown.", false],
      ["Small and black.", false],
    ]),
    match("is4-t2", "Match the Russian with the English.", [
      ["Мы потеряли чемодан!", "We've lost our suitcase!"],
      ["Не плачь!", "Don't cry!"],
      ["Там все мои вещи!", "All my things are in it!"],
    ], { skill: "words" }),
    fill("is4-t3", "Complete: “The bag was here.”", "Сумка", "здесь.", "была", ["была", "был", "были"], { skill: "grammar" }),
    missing("is4-t4", "Which letter is missing? (suitcase)", "чем", "дан", "о", ["о", "а", "е"]),
    speak("is4-t5", "Как выглядит ваш чемодан?", "Большой и коричневый.", "Big and brown.", {
      help: "Describe your lost suitcase: its size and colour.",
    }),
    listen("is4-t6", "Listen and choose the best reply.", "Можно оставить чемодан?", [
      ["Без проблем.", true],
      ["Не плачь!", false],
      ["Большой и коричневый.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "flashlight",
    itemName: "Torch",
    itemNameRu: "Фонарик",
    ru: "Фонарик… для поисков.",
    en: "A torch… for the search.",
    a11y: "Murzik holds a small torch and shines it under the hotel stairs, looking very determined.",
    image: pic("istanbul/reward-4"),
    steps: ["The receptionist gives Murzik a torch.", "Murzik looks under the beds.", "He looks behind the curtains.", "Nothing. He doesn't give up."],
    bridge: "While the hotel searches, Tom has an idea: the post office. Maybe someone there remembers the postcard.",
  },
};

export const istanbul5: Lesson = {
  id: "a1-istanbul-5",
  level: "A1",
  cityId: "istanbul",
  number: 5,
  title: "At the Post Office",
  minutes: 6,
  goals: ["Ask where the post office is", "Send a postcard", "Say “I want to…”"],
  vocabNote:
    "Хочу + action means “I want to…”: Я хочу отправить открытку. You know хочешь from Paris.",
  vocab: [
    v("is5-1", "Где почта?", "Where is the post office?", "Murzik and Tom look around a busy old street full of shops.", "Play Где почта", pic("istanbul/5-1")),
    v("is5-2", "Я хочу отправить открытку.", "I want to send a postcard.", "Murzik holds up a postcard of Istanbul at a post office counter.", "Play Я хочу отправить открытку", pic("istanbul/5-2")),
    v("is5-3", "марка", "stamp", "A colourful postage stamp with a picture of a seagull.", "Play марка", pic("istanbul/5-3")),
    v("is5-4", "в Рим", "to Rome", "An arrow goes from Istanbul to a little picture of the Colosseum.", "Play в Рим", pic("istanbul/5-4")),
    v("is5-5", "Кто отправил эту открытку?", "Who sent this postcard?", "Murzik shows the mysterious birthday postcard to a post office clerk.", "Play Кто отправил эту открытку", pic("istanbul/5-5")),
    v("is5-6", "Я не помню.", "I don't remember.", "The clerk shrugs with a kind, sorry face.", "Play Я не помню", pic("istanbul/5-6")),
    v("is5-7", "Каждый день — сотни открыток.", "Hundreds of postcards every day.", "A huge pile of postcards and letters on the post office counter.", "Play Каждый день — сотни открыток", pic("istanbul/5-7")),
  ],
  dialogue: {
    title: "The postmark",
    note: "Барсику — to Barsik. Жаль — what a pity.",
    lines: [
      line("murzik", "Здравствуйте! Я хочу отправить открытку в Рим. Барсику!", "Hello! I want to send a postcard to Rome. To Barsik!"),
      line("cashier", "Конечно. Вот марка.", "Of course. Here's a stamp."),
      line("tom", "И ещё вопрос. Кто отправил эту открытку? Отсюда.", "And one more question. Who sent this postcard? From here."),
      line("cashier", "Ой… Я не помню. Каждый день — сотни открыток.", "Oh… I don't remember. Hundreds of postcards every day."),
      line("murzik", "Жаль…", "What a pity…"),
      line("cashier", "Но эта кошка… Красивая. Как вы!", "But this cat… Pretty. Like you!"),
    ],
    gist: choice("is5-d1", "Does the clerk know who sent the postcard?", [
      ["No, the clerk doesn't remember.", true],
      ["Yes, an old lady.", false],
      ["Yes, Tom's friend.", false],
    ]),
  },
  grammar: [
    {
      title: "Хочу + action",
      paragraphs: [
        "я хочу, ты хочешь + action: Я хочу отправить открытку. Ты хочешь купить марку?",
        "Хочу + place means “I want to go to…”: Я хочу в Рим. (You saw Ты хочешь в Лондон? in Paris.)",
      ],
      examples: [
        { ru: "Я хочу купить марку.", en: "I want to buy a stamp." },
        { ru: "Ты хочешь отправить письмо?", en: "Do you want to send a letter?" },
      ],
    },
  ],
  tasks: [
    listen("is5-t1", "Listen. Where does the person want to send the postcard?", "Я хочу отправить открытку в Лондон.", [
      ["To London.", true],
      ["To Rome.", false],
      ["To Paris.", false],
    ]),
    choice("is5-t2", "What is марка?", [
      ["a stamp", true],
      ["a postcard", false],
      ["a post office", false],
    ], { skill: "words" }),
    fill("is5-t3", "Complete: “I want to send a letter.”", "Я", "отправить письмо.", "хочу", ["хочу", "хочешь", "хочет"], { skill: "grammar" }),
    spell("is5-t4", "Build the word for “post office”.", "почта"),
    speak("is5-t5", "Что вы хотите?", "Я хочу отправить открытку.", "I want to send a postcard.", {
      help: "You are at the post office. Say you want to send a postcard.",
    }),
    listen("is5-t6", "Listen and choose the best reply.", "Мы потеряли чемодан!", [
      ["Не волнуйтесь. Мы обязательно поищем.", true],
      ["Вот марка.", false],
      ["Без проблем.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "stamp-album",
    itemName: "Stamp album",
    itemNameRu: "Марки",
    ru: "Ура! Альбом для марок!",
    en: "Yay! A stamp album!",
    a11y: "Murzik opens a small blue stamp album with a few colourful stamps from different countries.",
    image: pic("istanbul/reward-5"),
    steps: ["The clerk feels sorry for Murzik.", "She gives him a little stamp album.", "Inside there are stamps from many countries.", "“Start a collection!” she says."],
    bridge: "Back at the hotel, the receptionist is running towards them: “Come quickly! The laundry room!”",
  },
};

export const istanbul6: Lesson = {
  id: "a1-istanbul-6",
  level: "A1",
  cityId: "istanbul",
  number: 6,
  title: "Found!",
  minutes: 6,
  goals: ["Say something has been found", "Check nothing is missing", "Say a big thank you"],
  vocabNote:
    "The past changes with the thing: чемодан нашёлся (he word), сумка нашлась (she word). Нашёлся means “turned up, was found”.",
  vocab: [
    v("is6-1", "Чемодан нашёлся!", "The suitcase has been found!", "The receptionist points at a big brown suitcase in a laundry room full of white sheets.", "Play Чемодан нашёлся", pic("istanbul/6-1")),
    v("is6-2", "Вот он!", "There it is!", "Murzik runs towards the brown suitcase with open arms.", "Play Вот он", pic("istanbul/6-2")),
    v("is6-3", "Какое счастье!", "What happiness! / Thank goodness!", "Murzik hugs the suitcase with closed eyes and a huge smile.", "Play Какое счастье", pic("istanbul/6-3")),
    v("is6-4", "Всё на месте?", "Is everything there?", "Tom opens the suitcase and looks inside.", "Play Всё на месте", pic("istanbul/6-4")),
    v("is6-5", "Ничего не пропало.", "Nothing is missing.", "Inside the open suitcase: the bowl, the teapot, the fan, the family photo, the alarm clock, the clogs, the music box, the puppet, the tile and the postcard.", "Play Ничего не пропало", pic("istanbul/6-5")),
    v("is6-6", "Кто его нашёл?", "Who found it?", "Murzik looks around the laundry room with a questioning face.", "Play Кто его нашёл", pic("istanbul/6-6")),
    v("is6-7", "Спасибо огромное!", "Thank you so much!", "Murzik shakes the receptionist's hand with both paws.", "Play Спасибо огромное", pic("istanbul/6-7")),
  ],
  dialogue: {
    title: "The laundry room",
    note: "Памук is the hotel's white fluffy cat (an ordinary cat — he doesn't talk!). Спит — is sleeping. Тёплый — warm.",
    lines: [
      line("receptionist", "Смотрите! Чемодан нашёлся!", "Look! The suitcase has been found!"),
      line("murzik", "Вот он! Какое счастье!", "There it is! Thank goodness!"),
      line("tom", "А кто его нашёл?", "And who found it?"),
      line("receptionist", "Памук! Наш кот. Он спит на нём. Чемодан тёплый!", "Pamuk! Our cat. He sleeps on it. The suitcase is warm!"),
      line("tom", "Ха-ха! Мурзик, всё на месте?", "Ha-ha! Murzik, is everything there?"),
      line("murzik", "Да! Ничего не пропало. Спасибо огромное!", "Yes! Nothing is missing. Thank you so much!"),
    ],
    gist: choice("is6-d1", "Who found the suitcase?", [
      ["Pamuk, the hotel cat.", true],
      ["Tom.", false],
      ["The post office clerk.", false],
    ]),
  },
  grammar: [
    {
      title: "Past: -л, -ла, -ло, -ли",
      paragraphs: [
        "In the past, the ending shows who or what did it: чемодан нашёлся, сумка нашлась, письмо пришло, вещи пропали.",
        "“He” words: -л. “She” words: -ла. “It” words: -ло. Many: -ли.",
      ],
      examples: [
        { ru: "Сумка нашлась!", en: "The bag has been found!" },
        { ru: "Письмо пришло.", en: "The letter has come." },
      ],
    },
  ],
  tasks: [
    listen("is6-t1", "Listen. What has been found?", "Сумка нашлась!", [
      ["The bag.", true],
      ["The suitcase.", false],
      ["The key.", false],
    ]),
    choice("is6-t2", "You get your lost things back. What do you say to the person who helped?", [
      ["Спасибо огромное!", true],
      ["Ничего не пропало.", false],
      ["Кто его нашёл?", false],
    ], { skill: "words" }),
    choice("is6-t3", "Which is right: “The bag has been found!”?", [
      ["Сумка нашлась!", true],
      ["Сумка нашёлся!", false],
      ["Сумка нашлись!", false],
    ], { skill: "grammar" }),
    spell("is6-t4", "Build the word for “happiness”.", "счастье"),
    speak("is6-t5", "Всё на месте?", "Да! Ничего не пропало. Спасибо огромное!", "Yes! Nothing is missing. Thank you so much!", {
      help: "Your lost suitcase is back. Check it and thank the receptionist.",
    }),
    listen("is6-t6", "Listen and choose the best reply.", "Кто отправил эту открытку?", [
      ["Я не помню.", true],
      ["Вот марка.", false],
      ["Чемодан нашёлся!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "iznik-plate",
    itemName: "Painted plate",
    itemNameRu: "Тарелка",
    ru: "Ура! Расписная тарелка!",
    en: "Yay! A painted plate!",
    a11y: "A round plate painted with blue tulips and red flowers hangs on the wall of the hotel room. Pamuk, a fluffy white cat, sleeps on Murzik's bed below it.",
    image: pic("istanbul/reward-6"),
    steps: ["The hotel owner says sorry again.", "He gives Murzik a painted plate.", "It has blue tulips on it.", "Pamuk now sleeps on Murzik's bed."],
    bridge: "The last morning in Istanbul. Time to pay and say goodbye.",
  },
};

export const istanbul7: Lesson = {
  id: "a1-istanbul-7",
  level: "A1",
  cityId: "istanbul",
  number: 7,
  title: "Check-out",
  minutes: 7,
  goals: ["Check out of a hotel", "Say everything was great", "Understand hotel problems by ear"],
  vocabNote:
    "Мы выезжаем means “we're checking out / leaving”. Отзыв is a review.",
  vocab: [
    v("is7-1", "Мы выезжаем сегодня.", "We're checking out today.", "Tom stands at the reception with the suitcase and gives back the brass key.", "Play Мы выезжаем сегодня", pic("istanbul/7-1")),
    v("is7-2", "Вот ваш счёт.", "Here is your bill.", "The receptionist hands Tom a small paper bill.", "Play Вот ваш счёт", pic("istanbul/7-2")),
    v("is7-3", "Всё было отлично!", "Everything was great!", "Murzik gives two thumbs up with a big smile.", "Play Всё было отлично", pic("istanbul/7-3")),
    v("is7-4", "Хорошей дороги!", "Have a good journey!", "The receptionist waves from the hotel door.", "Play Хорошей дороги", pic("istanbul/7-4")),
    v("is7-5", "Оставьте, пожалуйста, отзыв.", "Please leave a review.", "The receptionist shows a phone screen with five empty stars.", "Play Оставьте, пожалуйста, отзыв", pic("istanbul/7-5")),
    v("is7-6", "Обязательно оставим!", "We definitely will!", "Tom taps five stars on his phone.", "Play Обязательно оставим", pic("istanbul/7-6")),
    v("is7-7", "Приезжайте к нам ещё!", "Come and stay with us again!", "The whole hotel staff waves goodbye; Pamuk the cat sits on the steps.", "Play Приезжайте к нам ещё", pic("istanbul/7-7")),
  ],
  dialogue: {
    title: "Goodbye, room twelve",
    note: "Пять звёзд — five stars. Даже — even.",
    lines: [
      line("tom", "Доброе утро! Мы выезжаем сегодня.", "Good morning! We're checking out today."),
      line("receptionist", "Конечно. Вот ваш счёт. Как вам у нас?", "Of course. Here is your bill. How did you like it here?"),
      line("murzik", "Всё было отлично! Даже чемодан нашёлся!", "Everything was great! Even the suitcase was found!"),
      line("receptionist", "Ха-ха! Оставьте, пожалуйста, отзыв.", "Ha-ha! Please leave a review."),
      line("tom", "Обязательно оставим! Пять звёзд.", "We definitely will! Five stars."),
      line("receptionist", "Спасибо! Хорошей дороги! Приезжайте к нам ещё!", "Thank you! Have a good journey! Come and stay with us again!"),
    ],
    gist: choice("is7-d1", "How many stars will Tom give?", [
      ["Five.", true],
      ["Three.", false],
      ["Twelve.", false],
    ]),
  },
  grammar: [
    {
      title: "Всё было… — everything was…",
      paragraphs: [
        "Всё (everything) is an “it” word, so: Всё было отлично! Всё было хорошо.",
        "Compare: Номер был хороший. Еда была вкусная. Всё было отлично!",
      ],
      examples: [
        { ru: "Всё было хорошо.", en: "Everything was fine." },
        { ru: "Завтрак был вкусный.", en: "Breakfast was tasty." },
      ],
    },
  ],
  tasks: [
    listen("is7-t1", "Listen. What is the problem with the room?", "Здравствуйте! Номер семь. Кондиционер работает, но нет горячей воды. И, пожалуйста, ещё одну подушку.", [
      ["No hot water.", true],
      ["The air conditioning doesn't work.", false],
      ["No towels.", false],
    ], { help: "This is your Istanbul listening test." }),
    choice("is7-t2", "Your friend is going on a long trip. What do you say?", [
      ["Хорошей дороги!", true],
      ["Вот ваш счёт.", false],
      ["Мы выезжаем сегодня.", false],
    ], { skill: "words" }),
    fill("is7-t3", "Complete: “Everything was great!”", "Всё", "отлично!", "было", ["было", "был", "была"], { skill: "grammar" }),
    spell("is7-t4", "Build the word for “key”.", "ключ"),
    speak("is7-t5", "Как вам у нас?", "Всё было отлично! Спасибо!", "Everything was great! Thank you!", {
      help: "The receptionist asks how you liked the hotel. Answer aloud.",
    }),
    listen("is7-t6", "Listen and choose the best reply.", "Чемодан нашёлся!", [
      ["Какое счастье!", true],
      ["Не плачь!", false],
      ["Хорошей дороги!", false],
    ], { skill: "review" }),
    tf("is7-t7", "Нет полотенец means “There are no towels”.", true, "True or false", { skill: "review" }),
  ],
  reward: {
    itemId: "luggage-tag",
    itemName: "Luggage tag",
    itemNameRu: "Бирка",
    ru: "Ура! Бирка для чемодана!",
    en: "Yay! A luggage tag!",
    a11y: "Murzik ties a little leather luggage tag shaped like a cat's paw to the handle of his brown suitcase.",
    image: pic("istanbul/reward-7"),
    steps: ["At the market Tom finds a leather luggage tag.", "It is shaped like a cat's paw.", "Murzik ties it to his suitcase.", "Now the suitcase will never get lost again."],
    bridge: "The suitcase is safe. But the postcard is still a mystery…",
  },
};
