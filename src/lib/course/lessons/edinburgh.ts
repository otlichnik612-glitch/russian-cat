import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Edinburgh · «Повторение и экзамен A1» · lessons 1–7.
 * Murzik and Tom stay with Jamie, Tom's cheerful school friend, in an old stone house.
 * Each lesson revisits an A1 theme with seven new phrases. In lesson 6 the cat in the hat
 * finally speaks: «Ты внук Аси?» — and disappears. Lesson 7 is the A1 exam.
 */

export const edinburgh1: Lesson = {
  id: "a1-edinburgh-1",
  level: "A1",
  cityId: "edinburgh",
  number: 1,
  title: "Long Time No See!",
  minutes: 5,
  goals: ["Greet an old friend", "Ask what's new", "Answer: nothing special"],
  vocabNote:
    "This city repeats all of A1 — with new phrases. Сколько лет, сколько зим! literally means “So many summers, so many winters!”",
  vocab: [
    v("ed1-1", "Давно не виделись!", "Long time no see!", "Jamie, a tall red-haired young man in a knitted jumper, hugs Tom at the door of a stone house.", "Listen to Давно не виделись", pic("edinburgh/1-1")),
    v("ed1-2", "Сколько лет, сколько зим!", "It's been ages!", "Tom and Jamie laugh and shake hands warmly.", "Listen to Сколько лет, сколько зим", pic("edinburgh/1-2")),
    v("ed1-3", "Как жизнь?", "How's life?", "Jamie leans on the door frame with a friendly grin.", "Listen to Как жизнь", pic("edinburgh/1-3")),
    v("ed1-4", "Что нового?", "What's new?", "Jamie pours tea and looks at Tom with curiosity.", "Listen to Что нового", pic("edinburgh/1-4")),
    v("ed1-5", "Ничего особенного.", "Nothing special.", "Jamie shrugs and smiles.", "Listen to Ничего особенного", pic("edinburgh/1-5")),
    v("ed1-6", "Всё по-старому.", "Same as always.", "Jamie's cosy, slightly messy room with a guitar and books — nothing has changed.", "Listen to Всё по-старому", pic("edinburgh/1-6")),
    v("ed1-7", "Знакомься, это Мурзик!", "Meet Murzik!", "Tom introduces Murzik to Jamie; Murzik waves a paw.", "Listen to Знакомься, это Мурзик", pic("edinburgh/1-7")),
  ],
  dialogue: {
    title: "An old friend",
    note: "Jamie went to school with Tom and learned Russian at university. А у тебя? — And you?",
    lines: [
      line("jamie", "Том! Давно не виделись! Сколько лет, сколько зим!", "Tom! Long time no see! It's been ages!"),
      line("tom", "Джейми! Привет! Как жизнь?", "Jamie! Hi! How's life?"),
      line("jamie", "Всё по-старому. А у тебя? Что нового?", "Same as always. And you? What's new?"),
      line("tom", "У меня? Столько всего! Знакомься, это Мурзик!", "Me? So much! Meet Murzik!"),
      line("murzik", "Здравствуйте! Очень приятно.", "Hello! Nice to meet you."),
      line("jamie", "Мне тоже! Проходите!", "Nice to meet you too! Come in!"),
    ],
    gist: choice("ed1-d1", "Who is Jamie?", [
      ["Tom's old school friend.", true],
      ["Murzik's cousin.", false],
      ["A hotel receptionist.", false],
    ]),
  },
  grammar: [
    {
      title: "A1 review: greetings",
      paragraphs: [
        "To a friend: Привет! Как дела? Пока! Politely: Здравствуйте! Как у вас дела? До свидания!",
        "New and friendly: Давно не виделись! Как жизнь? Что нового?",
      ],
      examples: [
        { ru: "Привет! Что нового?", en: "Hi! What's new?" },
        { ru: "Здравствуйте! Очень приятно.", en: "Hello! Nice to meet you." },
      ],
    },
  ],
  tasks: [
    listen("ed1-t1", "Listen and choose the best reply.", "Что нового?", [
      ["Ничего особенного.", true],
      ["Сколько лет, сколько зим!", false],
      ["Мне тоже.", false],
    ]),
    match("ed1-t2", "Match the Russian with the English.", [
      ["Давно не виделись!", "Long time no see!"],
      ["Как жизнь?", "How's life?"],
      ["Всё по-старому.", "Same as always."],
    ], { skill: "words" }),
    choice("ed1-t3", "You meet your friend's grandmother. What do you say?", [
      ["Здравствуйте! Очень приятно.", true],
      ["Привет! Как жизнь?", false],
      ["Пока!", false],
    ], { skill: "grammar" }),
    spell("ed1-t4", "Build the word for “life”.", "жизнь"),
    speak("ed1-t5", "Давно не виделись! Что нового?", "Ничего особенного. Всё по-старому!", "Nothing special. Same as always!", {
      help: "An old friend greets you. Answer aloud.",
    }),
    listen("ed1-t6", "Listen and choose the best reply.", "Расскажи всё с начала!", [
      ["Всё началось в Париже.", true],
      ["Ничего особенного.", false],
      ["Как жизнь?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fireplace",
    itemName: "Fireplace",
    itemNameRu: "Камин",
    ru: "Ура! Тёплый камин!",
    en: "Yay! A warm fireplace!",
    a11y: "A small stone fireplace with a crackling fire in Murzik's room in an old Edinburgh house. Rain runs down the window.",
    image: pic("edinburgh/reward-1"),
    steps: ["Jamie's house is old and made of grey stone.", "Murzik's room has a little fireplace.", "Jamie lights the fire.", "Outside it rains. Inside it's warm."],
    bridge: "In the morning: sun. Ten minutes later: rain. Ten minutes later: sun again!",
  },
};

export const edinburgh2: Lesson = {
  id: "a1-edinburgh-2",
  level: "A1",
  cityId: "edinburgh",
  number: 2,
  title: "Four Seasons in a Day",
  minutes: 6,
  goals: ["Talk about changing weather", "Tell someone what to wear", "Say “but how beautiful!”"],
  vocabNote:
    "То дождь, то солнце means “now rain, now sun”. Плащ is a raincoat.",
  vocab: [
    v("ed2-1", "То дождь, то солнце.", "Now rain, now sun.", "A sky half full of rain clouds and half bright with sun, with a rainbow between.", "Listen to То дождь, то солнце", pic("edinburgh/2-1")),
    v("ed2-2", "Какой сильный ветер!", "What a strong wind!", "Murzik holds on to a lamp post while the wind blows his scarf straight out.", "Listen to Какой сильный ветер", pic("edinburgh/2-2")),
    v("ed2-3", "плащ", "raincoat", "A yellow raincoat with a hood hanging by the door.", "Listen to плащ", pic("edinburgh/2-3")),
    v("ed2-4", "Надень плащ!", "Put on a raincoat!", "Jamie hands Murzik a small yellow raincoat.", "Listen to Надень плащ", pic("edinburgh/2-4")),
    v("ed2-5", "Здесь всегда так?", "Is it always like this here?", "Murzik looks up at the changing sky with a puzzled face.", "Listen to Здесь всегда так", pic("edinburgh/2-5")),
    v("ed2-6", "Иногда идёт снег.", "Sometimes it snows.", "Snowflakes fall over the grey stone houses of Edinburgh.", "Listen to Иногда идёт снег", pic("edinburgh/2-6b")),
    v("ed2-7", "Зато какая красота!", "But how beautiful it is!", "A view of Edinburgh's old town and castle on the rock after rain, with a rainbow.", "Listen to Зато какая красота", pic("edinburgh/2-7")),
  ],
  dialogue: {
    title: "Scottish weather",
    note: "Ой, опять дождь! — Oh, rain again! You know Зато from Warsaw: “but on the other hand”.",
    lines: [
      line("murzik", "Ой! Солнце… Ой, опять дождь! Здесь всегда так?", "Oh! Sun… Oh, rain again! Is it always like this here?"),
      line("jamie", "Почти всегда. То дождь, то солнце. А иногда идёт снег!", "Almost always. Now rain, now sun. And sometimes it snows!"),
      line("tom", "И какой сильный ветер!", "And what a strong wind!"),
      line("jamie", "Мурзик, надень плащ!", "Murzik, put on a raincoat!"),
      line("murzik", "Спасибо. Брр! Здесь холодно, как в Праге.", "Thank you. Brr! It's cold here, like in Prague."),
      line("jamie", "Зато какая красота! Смотри — радуга!", "But how beautiful! Look — a rainbow!"),
    ],
    gist: choice("ed2-d1", "What is the weather like in Edinburgh?", [
      ["It keeps changing: rain, then sun.", true],
      ["Hot and sunny all day.", false],
      ["It snows all the time.", false],
    ]),
  },
  grammar: [
    {
      title: "A1 review: weather and clothes",
      paragraphs: [
        "Weather: Холодно. Тепло. Идёт дождь. Светит солнце. Какой сильный ветер!",
        "Clothes: Мне нужна куртка. Надень шапку! Надень плащ! (London and Prague.)",
      ],
      examples: [
        { ru: "Идёт дождь. Надень плащ!", en: "It's raining. Put on a raincoat!" },
        { ru: "Сегодня тепло и светит солнце.", en: "Today it's warm and the sun is shining." },
      ],
    },
  ],
  tasks: [
    listen("ed2-t1", "Listen. What is the weather like?", "Сегодня холодно и сильный ветер.", [
      ["Cold and windy.", true],
      ["Warm and sunny.", false],
      ["Rainy and warm.", false],
    ]),
    choice("ed2-t2", "What is плащ?", [
      ["a raincoat", true],
      ["an umbrella", false],
      ["a hat", false],
    ], { skill: "words" }),
    fill("ed2-t3", "Complete: “Put on a hat!”", "Надень", "!", "шапку", ["шапку", "шапка", "шапки"], { skill: "grammar" }),
    missing("ed2-t4", "Which letter is missing? (wind)", "в", "тер", "е", ["е", "и", "ё"]),
    speak("ed2-t5", "Какая сегодня погода?", "Сегодня то дождь, то солнце.", "Today it's now rain, now sun.", {
      help: "Describe today's real weather.",
    }),
    listen("ed2-t6", "Listen and choose the best reply.", "Мне холодно!", [
      ["Надень плащ!", true],
      ["Почти всегда.", false],
      ["Зато какая красота!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "wellies",
    itemName: "Rain boots",
    itemNameRu: "Резиновые сапоги",
    ru: "Ура! Резиновые сапоги!",
    en: "Yay! Rain boots!",
    a11y: "A small pair of bright yellow rain boots stands by the fireplace, drying, next to the yellow raincoat.",
    image: pic("edinburgh/reward-2"),
    steps: ["Murzik jumps into every puddle.", "His paws are wet!", "Jamie finds old yellow rain boots — just his size.", "Now every puddle is a joy."],
    bridge: "In the morning Jamie cooks a real Scottish breakfast.",
  },
};

export const edinburgh3: Lesson = {
  id: "a1-edinburgh-3",
  level: "A1",
  cityId: "edinburgh",
  number: 3,
  title: "A Scottish Breakfast",
  minutes: 6,
  goals: ["Talk about breakfast", "Wish someone a good meal", "Ask for a recipe"],
  vocabNote:
    "Приятного аппетита! is said before a meal, like “Enjoy your meal!”. Добавки? — “Seconds?”",
  vocab: [
    v("ed3-1", "Что на завтрак?", "What's for breakfast?", "Murzik sniffs the air in a cosy kitchen with a big stove.", "Listen to Что на завтрак", pic("edinburgh/3-1")),
    v("ed3-2", "овсянка", "porridge", "A bowl of warm porridge with honey and berries.", "Listen to овсянка", pic("edinburgh/3-2")),
    v("ed3-3", "яичница", "fried eggs", "Two fried eggs in a pan.", "Listen to яичница", pic("edinburgh/3-3")),
    v("ed3-4", "Приятного аппетита!", "Enjoy your meal!", "Jamie puts plates on the table with a big smile.", "Listen to Приятного аппетита", pic("edinburgh/3-4")),
    v("ed3-5", "Добавки?", "Seconds?", "Jamie holds a pot of porridge over Murzik's empty bowl.", "Listen to Добавки", pic("edinburgh/3-5")),
    v("ed3-6", "Очень сытно!", "Very filling!", "Murzik leans back in his chair, patting his round tummy.", "Listen to Очень сытно", pic("edinburgh/3-6")),
    v("ed3-7", "Можно рецепт?", "Can I have the recipe?", "Murzik holds his sketchbook and pencil, ready to write.", "Listen to Можно рецепт", pic("edinburgh/3-7")),
  ],
  dialogue: {
    title: "Breakfast at Jamie's",
    note: "Без сахара you know from Madrid. Секрет — с солью! — The secret: with salt!",
    lines: [
      line("murzik", "Джейми, что на завтрак?", "Jamie, what's for breakfast?"),
      line("jamie", "Овсянка и яичница! Приятного аппетита!", "Porridge and fried eggs! Enjoy your meal!"),
      line("tom", "Спасибо! Ммм, очень вкусно.", "Thank you! Mmm, very tasty."),
      line("jamie", "Мурзик, добавки?", "Murzik, seconds?"),
      line("murzik", "Нет, спасибо. Очень сытно! Можно рецепт?", "No, thank you. Very filling! Can I have the recipe?"),
      line("jamie", "Конечно. Секрет — с солью, без сахара!", "Of course. The secret: with salt, no sugar!"),
    ],
    gist: choice("ed3-d1", "What is the secret of Jamie's porridge?", [
      ["Salt, no sugar.", true],
      ["Lots of sugar.", false],
      ["Chocolate.", false],
    ]),
  },
  grammar: [
    {
      title: "A1 review: food and cafés",
      paragraphs: [
        "In a café: Мне кофе, пожалуйста. Можно чай? С молоком? Без сахара. Счёт, пожалуйста. (Madrid.)",
        "At the table: Приятного аппетита! Очень вкусно! Спасибо, больше не надо. (Rome.)",
      ],
      examples: [
        { ru: "Мне чай с молоком, пожалуйста.", en: "Tea with milk for me, please." },
        { ru: "Спасибо, больше не надо. Очень сытно!", en: "Thanks, no more for me. Very filling!" },
      ],
    },
  ],
  tasks: [
    listen("ed3-t1", "Listen. What's for breakfast?", "На завтрак овсянка и чай.", [
      ["Porridge and tea.", true],
      ["Fried eggs and coffee.", false],
      ["Porridge and coffee.", false],
    ]),
    choice("ed3-t2", "Everyone sits down to eat. What do you say?", [
      ["Приятного аппетита!", true],
      ["Добавки?", false],
      ["Можно рецепт?", false],
    ], { skill: "words" }),
    fill("ed3-t3", "Complete: “Tea without sugar.”", "Чай без", ".", "сахара", ["сахара", "сахар", "сахаром"], { skill: "grammar" }),
    spell("ed3-t4", "Build the word for “porridge”.", "овсянка"),
    speak("ed3-t5", "Добавки?", "Нет, спасибо. Очень сытно!", "No, thank you. Very filling!", {
      help: "You are full. Say no politely.",
    }),
    listen("ed3-t6", "Listen and choose the best reply.", "Какой сильный ветер!", [
      ["Надень плащ!", true],
      ["Приятного аппетита!", false],
      ["Очень сытно!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mug",
    itemName: "Big mug",
    itemNameRu: "Кружка",
    ru: "Ура! Большая кружка!",
    en: "Yay! A big mug!",
    a11y: "A big green mug with a little thistle painted on it, full of hot cocoa, stands on the windowsill.",
    image: pic("edinburgh/reward-3"),
    steps: ["Jamie has a cupboard full of mugs.", "“Choose one,” he says.", "Murzik chooses a big green one with a thistle.", "It holds a lot of cocoa!"],
    bridge: "Today they want to see the famous castle on the rock. But how do they get up there?",
  },
};

export const edinburgh4: Lesson = {
  id: "a1-edinburgh-4",
  level: "A1",
  cityId: "edinburgh",
  number: 4,
  title: "Up to the Castle",
  minutes: 6,
  goals: ["Ask how to get somewhere on foot", "Understand up the hill, ten minutes", "Say what a view!"],
  vocabNote:
    "Как дойти до…? means “How do I get to … on foot?” (дойти — to walk to). You know Как пройти к…? from London — both are fine.",
  vocab: [
    v("ed4-1", "Как дойти до замка?", "How do I get to the castle on foot?", "Tom asks a passer-by on a steep cobbled street, pointing up.", "Listen to Как дойти до замка", pic("edinburgh/4-1")),
    v("ed4-2", "Это наверху.", "It's up at the top.", "A grey stone castle on top of a high dark rock.", "Listen to Это наверху", pic("edinburgh/4-2")),
    v("ed4-3", "Идти минут десять.", "It's about a ten-minute walk.", "A little clock face with an arrow going around ten minutes.", "Listen to Идти минут десять", pic("edinburgh/4-3")),
    v("ed4-4", "лестница", "stairs", "Long narrow stone stairs going steeply up between old houses.", "Listen to лестница", pic("edinburgh/4-4")),
    v("ed4-5", "Я устал. / Я устала.", "I'm tired. (man / woman)", "Murzik sits down on a step, out of breath.", "Listen to Я устал. Я устала", pic("edinburgh/4-5")),
    v("ed4-6", "Мы почти пришли!", "We're almost there!", "Tom points at the castle gate just a few steps away.", "Listen to Мы почти пришли", pic("edinburgh/4-6")),
    v("ed4-7", "Какой вид!", "What a view!", "From the castle wall: the whole city, the sea and the hills.", "Listen to Какой вид", pic("edinburgh/4-7")),
  ],
  dialogue: {
    title: "The long climb",
    note: "Ещё немного! — A little more! Наверху — at the top.",
    lines: [
      line("tom", "Извините, как дойти до замка?", "Excuse me, how do I get to the castle?"),
      line("passerby", "Это наверху. Идите прямо, потом по лестнице. Идти минут десять.", "It's up at the top. Go straight on, then up the stairs. It's about ten minutes."),
      line("murzik", "Ох… Лестница… Том, я устал!", "Oh… Stairs… Tom, I'm tired!"),
      line("tom", "Ещё немного! Мы почти пришли!", "A little more! We're almost there!"),
      line("murzik", "Ура! Мы на месте!", "Hooray! We're here!"),
      line("tom", "Смотри! Какой вид!", "Look! What a view!"),
    ],
    gist: choice("ed4-d1", "How long is the walk to the castle?", [
      ["About ten minutes.", true],
      ["About an hour.", false],
      ["Two minutes.", false],
    ]),
  },
  grammar: [
    {
      title: "A1 review: directions",
      paragraphs: [
        "Идите прямо. Поверните направо / налево. Это далеко? — Нет, это близко. (London.)",
        "Где? здесь, там, рядом, напротив, за углом. Куда? туда, сюда. (Amsterdam and Warsaw.)",
      ],
      examples: [
        { ru: "Идите прямо, потом налево.", en: "Go straight on, then left." },
        { ru: "Замок там, наверху.", en: "The castle is up there." },
      ],
    },
  ],
  tasks: [
    listen("ed4-t1", "Listen. Which way?", "Идите прямо, потом направо.", [
      ["Straight on, then right.", true],
      ["Straight on, then left.", false],
      ["Left, then straight on.", false],
    ]),
    match("ed4-t2", "Match the Russian with the English.", [
      ["наверху", "at the top"],
      ["лестница", "stairs"],
      ["Какой вид!", "What a view!"],
    ], { skill: "words" }),
    choice("ed4-t3", "A woman has climbed many stairs. What does she say?", [
      ["Я устала!", true],
      ["Я устал!", false],
      ["Мы устали!", false],
    ], { skill: "grammar" }),
    spell("ed4-t4", "Build the word for “castle”.", "замок"),
    speak("ed4-t5", "Как дойти до музея?", "Идите прямо, потом налево. Это близко.", "Go straight on, then left. It's close.", {
      help: "A tourist asks you the way. Give simple directions.",
    }),
    listen("ed4-t6", "Listen and choose the best reply.", "Что на завтрак?", [
      ["Овсянка и яичница.", true],
      ["Это наверху.", false],
      ["Лестница.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "telescope",
    itemName: "Little telescope",
    itemNameRu: "Подзорная труба",
    ru: "Ура! Подзорная труба!",
    en: "Yay! A little telescope!",
    a11y: "Murzik looks through a small brass telescope out of his window towards the castle on the rock.",
    image: pic("edinburgh/reward-4"),
    steps: ["In the castle shop there is a little brass telescope.", "Tom buys it for Murzik.", "From the window Murzik can see the castle.", "And the sea. And far, far away…"],
    bridge: "Tonight there is a festival in the old town. Music everywhere!",
  },
};

export const edinburgh5: Lesson = {
  id: "a1-edinburgh-5",
  level: "A1",
  cityId: "edinburgh",
  number: 5,
  title: "The Festival",
  minutes: 6,
  goals: ["Talk about an evening out", "React to music", "Ask for an encore"],
  vocabNote:
    "Пойдём послушаем! means “Let's go and listen!”. Волынка — bagpipes, the famous Scottish instrument.",
  vocab: [
    v("ed5-1", "Что сегодня вечером?", "What's on tonight?", "Murzik looks at a colourful street full of festival lights and people.", "Listen to Что сегодня вечером", pic("edinburgh/5-1")),
    v("ed5-2", "фестиваль", "festival", "A busy street at night with musicians, jugglers and lights.", "Listen to фестиваль", pic("edinburgh/5-2")),
    v("ed5-3", "волынка", "bagpipes", "A man in a kilt plays the bagpipes on the street.", "Listen to волынка", pic("edinburgh/5-3")),
    v("ed5-4", "Пойдём послушаем!", "Let's go and listen!", "Murzik pulls Tom by the hand towards the music.", "Listen to Пойдём послушаем", pic("edinburgh/5-4")),
    v("ed5-5", "Как громко!", "How loud!", "Murzik covers his ears but laughs.", "Listen to Как громко", pic("edinburgh/5-5")),
    v("ed5-6", "Мне нравится эта мелодия.", "I like this tune.", "Murzik sways happily with his eyes closed; musical notes float around.", "Listen to Мне нравится эта мелодия", pic("edinburgh/5-6")),
    v("ed5-7", "Ещё раз, пожалуйста!", "Once more, please!", "The crowd claps; Murzik jumps up and down.", "Listen to Ещё раз, пожалуйста", pic("edinburgh/5-7")),
  ],
  dialogue: {
    title: "Music in the old town",
    note: "Эта мелодия… похожа на вальс «Ася»! — This tune… sounds like the waltz “Asya”!",
    lines: [
      line("murzik", "Джейми, что сегодня вечером?", "Jamie, what's on tonight?"),
      line("jamie", "Фестиваль! Музыка, театр… И волынка!", "A festival! Music, theatre… And bagpipes!"),
      line("tom", "Пойдём послушаем!", "Let's go and listen!"),
      line("murzik", "Ой, как громко! Но мне нравится эта мелодия.", "Oh, how loud! But I like this tune."),
      line("murzik", "Том… Эта мелодия похожа на вальс «Ася»!", "Tom… This tune sounds like the waltz “Asya”!"),
      line("tom", "Правда? Ещё раз, пожалуйста!", "Really? Once more, please!"),
    ],
    gist: choice("ed5-d1", "What does the tune sound like?", [
      ["The waltz “Asya”.", true],
      ["A Russian song from Moscow.", false],
      ["Tom's favourite song.", false],
    ]),
  },
  grammar: [
    {
      title: "A1 review: free time",
      paragraphs: [
        "Я люблю музыку. Я умею играть на гитаре. Иногда я бегаю. (Vienna.)",
        "Invitations: Давай пойдём в кино! У тебя есть время? Договорились! (Berlin.)",
      ],
      examples: [
        { ru: "Давай пойдём на концерт!", en: "Let's go to a concert!" },
        { ru: "Мне очень понравилось!", en: "I really liked it!" },
      ],
    },
  ],
  tasks: [
    listen("ed5-t1", "Listen. What is on tonight?", "Сегодня вечером концерт и фестиваль.", [
      ["A concert and a festival.", true],
      ["A film.", false],
      ["A football match.", false],
    ]),
    choice("ed5-t2", "What is волынка?", [
      ["bagpipes", true],
      ["a violin", false],
      ["a festival", false],
    ], { skill: "words" }),
    fill("ed5-t3", "Complete: “Let's go to the cinema!”", "Давай", "в кино!", "пойдём", ["пойдём", "послушаем", "мелодия"], { skill: "grammar" }),
    missing("ed5-t4", "Which letter is missing? (tune)", "мел", "дия", "о", ["о", "а", "е"]),
    speak("ed5-t5", "Что ты любишь делать вечером?", "Я люблю слушать музыку.", "I love listening to music.", {
      help: "Say what you really like doing in the evening.",
    }),
    listen("ed5-t6", "Listen and choose the best reply.", "Как дойти до замка?", [
      ["Это наверху. Идти минут десять.", true],
      ["Как громко!", false],
      ["Ещё раз, пожалуйста!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "toy-bagpipes",
    itemName: "Toy bagpipes",
    itemNameRu: "Волынка",
    ru: "Ура! Маленькая волынка!",
    en: "Yay! Little bagpipes!",
    a11y: "Murzik puffs his cheeks blowing into a tiny tartan toy bagpipe; Tom covers his ears and laughs.",
    image: pic("edinburgh/reward-5"),
    steps: ["At the festival there is a toy stall.", "Murzik sees tiny tartan bagpipes.", "He blows into them: a terrible noise!", "Everybody laughs."],
    bridge: "On the way home, the music still in his head, Murzik sees someone under a street lamp. A hat…",
  },
};

export const edinburgh6: Lesson = {
  id: "a1-edinburgh-6",
  level: "A1",
  cityId: "edinburgh",
  number: 6,
  title: "The Cat in the Hat",
  minutes: 6,
  goals: ["Speak politely to a stranger", "Ask “Do we know each other?”", "Ask someone to wait"],
  vocabNote:
    "Простите is another polite “Excuse me / Sorry”. Подождите! and Не уходите! are polite: Wait! Don't go!",
  vocab: [
    v("ed6-1", "Простите…", "Excuse me…", "Murzik steps carefully towards a figure under a street lamp on a misty night.", "Listen to Простите", pic("edinburgh/6-1")),
    v("ed6-2", "Мы знакомы?", "Do we know each other?", "Murzik looks up with a hopeful, questioning face.", "Listen to Мы знакомы", pic("edinburgh/6-2")),
    v("ed6-3", "Ты внук Аси?", "Are you Asya's grandson?", "A kind old white cat in a grey hat bends down and looks warmly at Murzik.", "Listen to Ты внук Аси", pic("edinburgh/6-3")),
    v("ed6-4", "Откуда вы знаете?", "How do you know?", "Murzik's eyes go wide with surprise.", "Listen to Откуда вы знаете", pic("edinburgh/6-4")),
    v("ed6-5", "Подождите!", "Wait!", "Murzik reaches out a paw as the old cat turns away.", "Listen to Подождите", pic("edinburgh/6-5")),
    v("ed6-6", "Не уходите!", "Don't go!", "Murzik runs after the old cat into the mist.", "Listen to Не уходите", pic("edinburgh/6-6")),
    v("ed6-7", "Он исчез!", "He's disappeared!", "Murzik stands alone under the street lamp in the mist. Only a grey feather lies on the stones.", "Listen to Он исчез", pic("edinburgh/6-7")),
  ],
  dialogue: {
    title: "Under the street lamp",
    note: "Ты так похож на неё — you look so much like her. Скоро — soon.",
    lines: [
      line("murzik", "Простите… Мы знакомы?", "Excuse me… Do we know each other?"),
      line("lev", "Ты внук Аси?", "Are you Asya's grandson?"),
      line("murzik", "Да! Откуда вы знаете?", "Yes! How do you know?"),
      line("lev", "Ты так похож на неё… Мы ещё встретимся. Скоро.", "You look so much like her… We'll meet again. Soon."),
      line("murzik", "Подождите! Не уходите!", "Wait! Don't go!"),
      line("tom", "Мурзик! Кто это был?", "Murzik! Who was that?"),
      line("murzik", "Он исчез!", "He's disappeared!"),
    ],
    gist: choice("ed6-d1", "What does the cat in the hat ask?", [
      ["If Murzik is Asya's grandson.", true],
      ["If Murzik is lost.", false],
      ["What time it is.", false],
    ]),
  },
  grammar: [
    {
      title: "A1 review: ты and вы",
      paragraphs: [
        "To a friend or a child: ты, Подожди! Не уходи! To a stranger or an older person: вы, Подождите! Не уходите! (Rome and Amsterdam.)",
        "The old cat says ты to Murzik — older people often do this to children.",
      ],
      examples: [
        { ru: "Подожди, Том!", en: "Wait, Tom!" },
        { ru: "Простите, вы не знаете, где вокзал?", en: "Excuse me, do you know where the station is?" },
      ],
    },
  ],
  tasks: [
    listen("ed6-t1", "Listen. What does Murzik shout?", "Подождите! Не уходите!", [
      ["Wait! Don't go!", true],
      ["Help! I'm lost!", false],
      ["Hello! Nice to meet you!", false],
    ]),
    match("ed6-t2", "Match the Russian with the English.", [
      ["Простите…", "Excuse me…"],
      ["Мы знакомы?", "Do we know each other?"],
      ["Он исчез!", "He's disappeared!"],
    ], { skill: "words" }),
    choice("ed6-t3", "You ask an old man you don't know to wait. What do you say?", [
      ["Подождите!", true],
      ["Подожди!", false],
      ["Не уходи!", false],
    ], { skill: "grammar" }),
    spell("ed6-t4", "Build the word for “grandson”.", "внук"),
    speak("ed6-t5", "Простите, мы знакомы?", "Нет, но очень приятно!", "No, but nice to meet you!", {
      help: "A stranger thinks they know you. Answer politely.",
    }),
    listen("ed6-t6", "Listen and choose the best reply.", "Что сегодня вечером?", [
      ["Фестиваль!", true],
      ["Он исчез!", false],
      ["Мы знакомы?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "flat-cap",
    itemName: "Tweed cap",
    itemNameRu: "Кепка",
    ru: "Кепка… как у него.",
    en: "A cap… like his.",
    a11y: "Murzik tries on a small grey tweed cap in front of the mirror, thinking hard about the cat in the hat.",
    image: pic("edinburgh/reward-6"),
    steps: ["Murzik can't sleep.", "In the morning he buys a little grey cap.", "He looks in the mirror.", "“We'll meet again,” he whispers."],
    bridge: "The last day in Edinburgh. And the big day: the A1 exam!",
  },
};

export const edinburgh7: Lesson = {
  id: "a1-edinburgh-7",
  level: "A1",
  cityId: "edinburgh",
  number: 7,
  title: "The A1 Exam",
  minutes: 8,
  goals: ["Show everything you have learned in A1", "Understand longer Russian by ear", "Celebrate finishing A1"],
  vocabNote:
    "This is your A1 exam: tasks from all fourteen cities. Take your time — you can do it!",
  vocab: [
    v("ed7-1", "Экзамен сдан!", "The exam is passed!", "Murzik holds up a certificate with a big gold star (no words on it).", "Listen to Экзамен сдан", pic("edinburgh/7-1")),
    v("ed7-2", "Молодец!", "Well done!", "Tom gives Murzik a big high five.", "Listen to Молодец", pic("edinburgh/7-2")),
    v("ed7-3", "Уровень A1 пройден!", "Level A1 is complete!", "A path of fourteen little city icons ends at a gold flag.", "Listen to Уровень A1 пройден", pic("edinburgh/7-3")),
    v("ed7-4", "Это было нелегко.", "It wasn't easy.", "Murzik wipes his forehead with a relieved smile.", "Listen to Это было нелегко", pic("edinburgh/7-4")),
    v("ed7-5", "Что дальше?", "What's next?", "Murzik looks at a road that splits into many paths towards new cities.", "Listen to Что дальше", pic("edinburgh/7-5")),
    v("ed7-6", "Новый уровень!", "A new level!", "A door opens onto a bright new landscape.", "Listen to Новый уровень", pic("edinburgh/7-6")),
    v("ed7-7", "До встречи на A2!", "See you in A2!", "Murzik and Tom wave goodbye with their suitcases.", "Listen to До встречи на A2", pic("edinburgh/7-7")),
  ],
  dialogue: {
    title: "A note on the table",
    note: "Записка — a note. Я тоже её ищу — I'm looking for her too. Л. — the letter L.",
    lines: [
      line("tom", "Мурзик, ты молодец! Экзамен сдан! Уровень A1 пройден!", "Murzik, well done! The exam is passed! Level A1 is complete!"),
      line("murzik", "Ура! Это было нелегко.", "Hooray! It wasn't easy."),
      line("jamie", "Мурзик, тебе записка. Её принесли утром.", "Murzik, there's a note for you. Someone brought it this morning."),
      line("murzik", "«Я тоже её ищу. Лион. — Л.»", "“I'm looking for her too. Lyon. — L.”"),
      line("tom", "Лион? Это во Франции!", "Lyon? That's in France!"),
      line("murzik", "Что дальше? Новый уровень! До встречи на A2!", "What's next? A new level! See you in A2!"),
    ],
    gist: choice("ed7-d1", "What does the note say?", [
      ["“I'm looking for her too. Lyon.”", true],
      ["“Happy birthday, grandson.”", false],
      ["“Go home to Moscow.”", false],
    ]),
  },
  grammar: [
    {
      title: "A1: what you can do now",
      paragraphs: [
        "You can greet people, introduce yourself, order food, buy things, ask the way, talk about family, time, plans, hobbies, health, work, dates and your town.",
        "You can talk about the past (я был / была), the present (я живу) and the future (я буду). That is A1!",
      ],
      examples: [
        { ru: "Меня зовут Мурзик. Я из Москвы.", en: "My name is Murzik. I'm from Moscow." },
        { ru: "Я изучаю русский язык.", en: "I'm studying Russian." },
      ],
    },
  ],
  tasks: [
    listen("ed7-t1", "Exam 1 · Listen. Where is the person from and where do they live now?", "Привет! Меня зовут Анна. Я из Лондона, но сейчас я живу в Риме. Я работаю в кафе.", [
      ["From London, lives in Rome.", true],
      ["From Rome, lives in London.", false],
      ["From London, lives in Paris.", false],
    ], { help: "This is your A1 exam. Listen as many times as you like." }),
    listen("ed7-t2", "Exam 2 · Listen. How much does it all cost?", "Два кофе и один чай. С вас двадцать пять евро.", [
      ["25 euros.", true],
      ["20 euros.", false],
      ["5 euros.", false],
    ], { skill: "listening" }),
    listen("ed7-t3", "Exam 3 · Listen. When and where are they meeting?", "Давай встретимся в субботу в семь часов, у входа в кино.", [
      ["Saturday at seven, at the cinema entrance.", true],
      ["Sunday at seven, at the station.", false],
      ["Saturday at eleven, at the museum.", false],
    ], { skill: "listening" }),
    choice("ed7-t4", "Exam 4 · You meet your friend's grandmother. What do you say?", [
      ["Здравствуйте! Очень приятно.", true],
      ["Привет! Как жизнь?", false],
      ["Пока!", false],
    ], { skill: "words" }),
    fill("ed7-t5", "Exam 5 · Complete: “I have a headache.”", "У меня болит", ".", "голова", ["голова", "голову", "головы"], { skill: "grammar" }),
    fill("ed7-t6", "Exam 6 · Complete: “We're going to the museum.”", "Мы едем в", ".", "музей", ["музей", "музее", "музея"], { skill: "grammar" }),
    spell("ed7-t7", "Exam 7 · Build the word for “journey / trip”.", "путешествие"),
    speak("ed7-t8", "Расскажи о себе.", "Меня зовут Том. Я из Лондона. Я фотограф. Я люблю путешествовать.", "My name is Tom. I'm from London. I'm a photographer. I love travelling.", {
      help: "Exam 8 · Say four sentences about yourself: name, where you're from, what you do, what you love.",
    }),
    tf("ed7-t9", "Exam 9 · Я была в Париже is said by a woman.", true, "True or false", { skill: "review" }),
  ],
  reward: {
    itemId: "thistle",
    itemName: "Thistle brooch",
    itemNameRu: "Чертополох",
    ru: "Ура! Брошь-чертополох!",
    en: "Yay! A thistle brooch!",
    a11y: "Murzik pins a small silver and purple thistle brooch onto his rust-orange scarf.",
    image: pic("edinburgh/reward-7"),
    steps: ["Jamie gives Murzik a present for the exam.", "A little brooch: a purple thistle, the flower of Scotland.", "“It's small, but very strong — like you,” says Jamie.", "Murzik pins it on his scarf."],
    bridge: "A1 is finished. The note from L. lies in the suitcase pocket, next to Grandma Asya's postcards.",
  },
};
