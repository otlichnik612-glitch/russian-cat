import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, v } from "../make";
import type { Lesson } from "../types";

/*
 * Amsterdam · «Как передвигаться» · lessons 1–7.
 * Murzik and Tom live on a little houseboat on a canal. Barsik comes from Rome to visit.
 * They rent bikes, go to a museum, look for windmills and get lost — and a kind old white cat
 * in a hat (Lev) silently shows them the way. The learner still does not know who he is.
 */

export const amsterdam1: Lesson = {
  id: "a1-amsterdam-1",
  level: "A1",
  cityId: "amsterdam",
  number: 1,
  title: "On Foot or by Bike?",
  minutes: 5,
  goals: ["Ask where someone is going", "Say you are going on foot or by bike", "Say “I'm going home”"],
  vocabNote:
    "Russian has two verbs for “to go”: иду is on foot, еду is by bike, bus, car or train.",
  vocab: [
    v("am1-1", "Куда ты идёшь?", "Where are you going?", "Tom meets Murzik on a canal bridge and asks with a friendly wave.", "Play Куда ты идёшь", pic("amsterdam/1-1")),
    v("am1-2", "Я иду домой.", "I'm going home.", "Murzik walks along a canal towards a little houseboat with a lit window.", "Play Я иду домой", pic("amsterdam/1-2")),
    v("am1-3", "пешком", "on foot", "Murzik walks with long happy steps, close-up of his paws on old cobblestones.", "Play пешком", pic("amsterdam/1-3")),
    v("am1-4", "велосипед или машина", "a bike or a car", "A tall Dutch bicycle next to a small red car on a canal street.", "Play велосипед или машина", pic("amsterdam/1-4b")),
    v("am1-5", "Я еду на велосипеде.", "I'm going by bike.", "Tom rides a bicycle along a canal, his green coat flying.", "Play Я еду на велосипеде", pic("amsterdam/1-5")),
    v("am1-6", "Пойдём пешком!", "Let's walk!", "Murzik takes Tom by the hand and points down a pretty canal street.", "Play Пойдём пешком", pic("amsterdam/1-6")),
    v("am1-7", "Здесь все на велосипедах!", "Everyone here is on a bike!", "A busy Amsterdam street full of people riding bicycles; Murzik stares with wide eyes.", "Play Здесь все на велосипедах", pic("amsterdam/1-7")),
  ],
  dialogue: {
    title: "A home on the water",
    note: "На воде means “on the water”. Murzik and Tom will live on a houseboat.",
    lines: [
      line("murzik", "Том, куда мы идём?", "Tom, where are we going?"),
      line("tom", "Домой! Наш дом — на воде.", "Home! Our home is on the water."),
      line("murzik", "На воде? Ого! А это далеко?", "On the water? Wow! Is it far?"),
      line("tom", "Нет, близко. Пойдём пешком!", "No, it's close. Let's walk!"),
      line("murzik", "Смотри, здесь все на велосипедах!", "Look, everyone here is on a bike!"),
      line("tom", "Да! Завтра я еду на велосипеде. А ты?", "Yes! Tomorrow I'm going by bike. And you?"),
      line("murzik", "И я!", "Me too!"),
    ],
    gist: choice("am1-d1", "Where is their new home?", [
      ["On the water.", true],
      ["Next to the station.", false],
      ["Far away, outside the city.", false],
    ]),
  },
  grammar: [
    {
      title: "Иду or еду?",
      paragraphs: [
        "идти — to go on foot: я иду, ты идёшь. ехать — to go by transport: я еду, ты едешь.",
        "Я иду домой — I'm walking home. Я еду на велосипеде — I'm going by bike.",
      ],
      examples: [
        { ru: "Я иду пешком.", en: "I'm walking." },
        { ru: "Ты едешь на велосипеде?", en: "Are you going by bike?" },
      ],
    },
  ],
  tasks: [
    listen("am1-t1", "Listen. How is the person going?", "Я еду на велосипеде.", [
      ["By bike.", true],
      ["On foot.", false],
      ["By bus.", false],
    ]),
    choice("am1-t2", "What does пешком mean?", [
      ["on foot", true],
      ["by bike", false],
      ["at home", false],
    ], { skill: "words" }),
    fill("am1-t3", "Complete: “I'm walking home.”", "Я", "домой.", "иду", ["иду", "еду", "идёшь"], { skill: "grammar" }),
    spell("am1-t4", "Build the word for “home(wards)”.", "домой"),
    speak("am1-t5", "Куда ты идёшь?", "Я иду домой.", "I'm going home.", {
      help: "Tell Tom you are going home.",
    }),
    listen("am1-t6", "Listen and choose the best reply.", "Который час?", [
      ["Сейчас пять часов.", true],
      ["Сегодня пятница.", false],
      ["Через час.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tulips",
    itemName: "Tulips",
    itemNameRu: "Тюльпаны",
    ru: "Ура! Тюльпаны на палубу!",
    en: "Yay! Tulips for the deck!",
    a11y: "Murzik sniffs a wooden window box full of red and yellow tulips on the deck of a little green houseboat.",
    image: pic("amsterdam/reward-1"),
    steps: ["Tom's friend lends them a little houseboat.", "Murzik's room has a round window right above the water.", "On the deck there is a box of red and yellow tulips.", "Murzik smells them and sneezes!"],
    bridge: "Tomorrow Barsik arrives from Rome! Everyone wants to ride bikes together.",
  },
};

export const amsterdam2: Lesson = {
  id: "a1-amsterdam-2",
  level: "A1",
  cityId: "amsterdam",
  number: 2,
  title: "Renting Bikes",
  minutes: 5,
  goals: ["Ask to rent a bike", "Say for how long", "Warn a friend: Careful!"],
  vocabNote:
    "Взять means “to take”. In a shop or a rental, Можно взять…? means “Can I have / rent…?”",
  vocab: [
    v("am2-1", "Можно взять велосипед?", "Can I rent a bike?", "Tom stands at a bike rental shop counter and points at a row of bicycles.", "Play Можно взять велосипед", pic("amsterdam/2-1")),
    v("am2-2", "На сколько?", "For how long?", "The bike rental woman raises her eyebrows and taps her wristwatch.", "Play На сколько", pic("amsterdam/2-2")),
    v("am2-3", "На один день.", "For one day.", "A sun rises on the left and sets on the right, with a bicycle riding between them.", "Play На один день", pic("amsterdam/2-3")),
    v("am2-4", "Вот ваш велосипед.", "Here is your bike.", "The rental woman wheels a shiny bicycle towards Tom with a smile.", "Play Вот ваш велосипед", pic("amsterdam/2-4")),
    v("am2-5", "шлем", "helmet", "Murzik puts on a round blue bicycle helmet that is a little too big for him.", "Play шлем", pic("amsterdam/2-5")),
    v("am2-6", "Осторожно!", "Careful!", "Murzik grabs Barsik's handlebars just before he rides into a canal.", "Play Осторожно", pic("amsterdam/2-6")),
    v("am2-7", "Это легко!", "It's easy!", "Murzik rides a small bicycle with no hands and a big grin.", "Play Это легко", pic("amsterdam/2-7")),
  ],
  dialogue: {
    title: "Three bikes",
    note: "Три велосипеда — three bikes. Трудно means “hard, difficult”.",
    lines: [
      line("seller", "Здравствуйте! Что вы хотите?", "Hello! What would you like?"),
      line("tom", "Можно взять три велосипеда?", "Can we rent three bikes?"),
      line("seller", "Конечно. На сколько?", "Of course. For how long?"),
      line("tom", "На один день.", "For one day."),
      line("seller", "Вот ваши велосипеды. И шлемы!", "Here are your bikes. And helmets!"),
      line("barsik", "Ой… Это трудно!", "Oh… This is hard!"),
      line("murzik", "Нет, Барсик, это легко! Осторожно!", "No, Barsik, it's easy! Careful!"),
    ],
    gist: choice("am2-d1", "How long do they rent the bikes for?", [
      ["For one day.", true],
      ["For one hour.", false],
      ["For a week.", false],
    ]),
  },
  grammar: [
    {
      title: "For how long? — на + time",
      paragraphs: [
        "На сколько? asks “for how long?”. Answer with на: на один день, на час, на два часа.",
        "Remember через from Berlin: через час is “in an hour” (from now). На час is “for an hour”.",
      ],
      examples: [
        { ru: "Велосипед на два часа, пожалуйста.", en: "A bike for two hours, please." },
        { ru: "На один день.", en: "For one day." },
      ],
    },
  ],
  tasks: [
    listen("am2-t1", "Listen. For how long?", "На два часа.", [
      ["For two hours.", true],
      ["In two hours.", false],
      ["At two o'clock.", false],
    ]),
    match("am2-t2", "Match the Russian with the English.", [
      ["шлем", "helmet"],
      ["Осторожно!", "Careful!"],
      ["Это легко!", "It's easy!"],
    ], { skill: "words" }),
    choice("am2-t3", "How do you say “for one day”?", [
      ["на один день", true],
      ["через один день", false],
      ["в один день", false],
    ], { skill: "grammar" }),
    missing("am2-t4", "Which letter is missing? (helmet)", "ш", "ем", "л", ["л", "д", "м"]),
    speak("am2-t5", "Здравствуйте! Что вы хотите?", "Можно взять велосипед на один день?", "Can I rent a bike for one day?", {
      help: "You are at a bike rental. Ask for a bike for one day.",
    }),
    listen("am2-t6", "Listen and choose the best reply.", "Давай пойдём в кино!", [
      ["Давай!", true],
      ["Через час.", false],
      ["Мы были в музее.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fairy-lights",
    itemName: "String of lights",
    itemNameRu: "Гирлянда",
    ru: "Ура! Гирлянда на палубу!",
    en: "Yay! A string of lights for the deck!",
    a11y: "A string of warm little lights hangs along the deck rail of the houseboat at dusk. Murzik and Barsik look at them happily.",
    image: pic("amsterdam/reward-2"),
    steps: ["Barsik brings a present from Aunt Olya.", "It is a long string of little lights.", "They hang it along the deck.", "In the evening the houseboat glows."],
    bridge: "They have bikes now. But where should they ride first?",
  },
};

export const amsterdam3: Lesson = {
  id: "a1-amsterdam-3",
  level: "A1",
  cityId: "amsterdam",
  number: 3,
  title: "Where To?",
  minutes: 6,
  goals: ["Ask where to go", "Say where a place is", "Say “I don't mind”"],
  vocabNote:
    "Куда? asks “where to?” (movement). Где? asks “where?” (place). The ending of the place changes: в музей (to the museum), в музее (in the museum).",
  vocab: [
    v("am3-1", "Куда едем?", "Where are we going?", "Murzik, Tom and Barsik sit on their bikes at a crossroads, looking at each other.", "Play Куда едем", pic("amsterdam/3-1")),
    v("am3-2", "В музей!", "To the museum!", "Murzik points ahead at a grand old museum building with towers.", "Play В музей", pic("amsterdam/3-2")),
    v("am3-3", "Где музей?", "Where is the museum?", "Tom looks around a square with a questioning face.", "Play Где музей", pic("amsterdam/3-3")),
    v("am3-4", "в центре", "in the centre", "A simple round map of a city with a big red dot in the middle.", "Play в центре", pic("amsterdam/3-4")),
    v("am3-5", "Давай сначала в парк!", "Let's go to the park first!", "Barsik points at a green park with ducks and a pond.", "Play Давай сначала в парк", pic("amsterdam/3-5")),
    v("am3-6", "А потом в музей.", "And then to the museum.", "An arrow goes from a green park to a grand museum building.", "Play А потом в музей", pic("amsterdam/3-6")),
    v("am3-7", "Мне всё равно.", "I don't mind.", "Barsik shrugs with a relaxed, sleepy smile.", "Play Мне всё равно", pic("amsterdam/3-7")),
  ],
  dialogue: {
    title: "The park or the museum?",
    note: "Я хочу есть means “I'm hungry” — literally “I want to eat”.",
    lines: [
      line("tom", "Ну, куда едем?", "So, where are we going?"),
      line("murzik", "В музей!", "To the museum!"),
      line("barsik", "А я хочу в парк.", "And I want to go to the park."),
      line("tom", "А где музей?", "And where is the museum?"),
      line("murzik", "Музей в центре. Парк тоже в центре.", "The museum is in the centre. The park is in the centre too."),
      line("tom", "Хорошо. Давай сначала в парк, а потом в музей.", "OK. Let's go to the park first, and then to the museum."),
      line("barsik", "Мне всё равно. Я хочу есть!", "I don't mind. I'm hungry!"),
    ],
    gist: choice("am3-d1", "Where do they go first?", [
      ["To the park.", true],
      ["To the museum.", false],
      ["Home.", false],
    ]),
  },
  grammar: [
    {
      title: "Куда? and Где?",
      paragraphs: [
        "Куда? (where to?) → в музей, в парк, в кафе. Где? (where?) → в музее, в парке, в центре.",
        "After где, most places end in -е: парк → в парке, центр → в центре, музей → в музее.",
      ],
      examples: [
        { ru: "Мы едем в парк.", en: "We're going to the park." },
        { ru: "Мы в парке.", en: "We're in the park." },
      ],
    },
  ],
  tasks: [
    listen("am3-t1", "Listen. Where is the museum?", "Музей в центре.", [
      ["In the centre.", true],
      ["In the park.", false],
      ["Next to the station.", false],
    ]),
    choice("am3-t2", "Your friends can't choose: park or museum? You are happy with both. What do you say?", [
      ["Мне всё равно.", true],
      ["Это трудно!", false],
      ["Осторожно!", false],
    ], { skill: "words" }),
    fill("am3-t3", "Complete: “We're going to the park.”", "Мы едем в", ".", "парк", ["парк", "парке", "парка"], { skill: "grammar" }),
    spell("am3-t4", "Build the word for “museum”.", "музей"),
    speak("am3-t5", "Куда едем?", "Давай сначала в парк!", "Let's go to the park first!", {
      help: "Choose: park or museum. Say where you want to go first.",
    }),
    listen("am3-t6", "Listen and choose the best reply.", "Какой сегодня день?", [
      ["Сегодня суббота.", true],
      ["В центре.", false],
      ["На один день.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "picnic-basket",
    itemName: "Picnic basket",
    itemNameRu: "Корзинка",
    ru: "Ура! Корзинка для пикника!",
    en: "Yay! A picnic basket!",
    a11y: "Murzik holds a wicker picnic basket with a checked cloth on the deck of the houseboat. Barsik peeks inside, hoping for food.",
    image: pic("amsterdam/reward-3"),
    steps: ["In the park they have a picnic.", "Barsik eats almost everything.", "Tom buys a little wicker basket.", "Now Murzik keeps it on the deck."],
    bridge: "After the picnic it is museum time. Tom has his camera ready…",
  },
};

export const amsterdam4: Lesson = {
  id: "a1-amsterdam-4",
  level: "A1",
  cityId: "amsterdam",
  number: 4,
  title: "At the Museum",
  minutes: 6,
  goals: ["Buy museum tickets", "Ask if you can take photos", "Understand “not allowed”"],
  vocabNote:
    "Можно means “you can / it's allowed”. Нельзя means “you can't / it's not allowed”. Касса is a ticket office.",
  vocab: [
    v("am4-1", "Где касса?", "Where is the ticket office?", "Murzik looks around a big museum hall with a questioning face.", "Play Где касса", pic("amsterdam/4-1")),
    v("am4-2", "Три билета, пожалуйста.", "Three tickets, please.", "Tom holds up three fingers at a ticket window.", "Play Три билета, пожалуйста", pic("amsterdam/4-2")),
    v("am4-3", "Сколько стоит билет?", "How much is a ticket?", "Tom holds one ticket and looks at the price board with a questioning face.", "Play Сколько стоит билет", pic("amsterdam/4-3")),
    v("am4-4", "Можно фотографировать?", "Can I take photos?", "Tom lifts his camera and looks at a museum guard with a hopeful face.", "Play Можно фотографировать", pic("amsterdam/4-4")),
    v("am4-5", "Здесь нельзя.", "It's not allowed here.", "A museum guard kindly shakes his finger next to a sign with a crossed-out camera.", "Play Здесь нельзя", pic("amsterdam/4-5")),
    v("am4-6", "Можно.", "You can. / It's allowed.", "A museum guard smiles and nods, opening his hand.", "Play Можно", pic("amsterdam/4-6")),
    v("am4-7", "Какая красота!", "How beautiful!", "Murzik stands amazed in front of a big painting of a windmill at sunset.", "Play Какая красота", pic("amsterdam/4-7")),
  ],
  dialogue: {
    title: "No photos!",
    note: "Ладно means “OK, fine” (a little disappointed). Мельница is a windmill.",
    lines: [
      line("tom", "Здравствуйте! Три билета, пожалуйста. Сколько стоит билет?", "Hello! Three tickets, please. How much is a ticket?"),
      line("cashier", "Двадцать евро.", "Twenty euros."),
      line("tom", "Вот, пожалуйста. А можно фотографировать?", "Here you are. And can I take photos?"),
      line("cashier", "Нет, здесь нельзя.", "No, it's not allowed here."),
      line("tom", "Ох… Ладно.", "Oh… OK."),
      line("murzik", "Том, смотри! Мельница! Какая красота!", "Tom, look! A windmill! How beautiful!"),
      line("barsik", "А где здесь кафе?", "And where is the café here?"),
    ],
    gist: choice("am4-d1", "Can Tom take photos in the museum?", [
      ["No, it's not allowed.", true],
      ["Yes, everywhere.", false],
      ["Yes, but only of windmills.", false],
    ]),
  },
  grammar: [
    {
      title: "Можно and нельзя + verb",
      paragraphs: [
        "Можно + verb: Можно фотографировать? — Can I take photos? Нельзя + verb: Здесь нельзя фотографировать.",
        "The answer can be one word: Можно! or Нельзя.",
      ],
      examples: [
        { ru: "Здесь нельзя есть.", en: "You can't eat here." },
        { ru: "Можно взять велосипед?", en: "Can I rent a bike?" },
      ],
    },
  ],
  tasks: [
    listen("am4-t1", "Listen. How much is a ticket?", "Билет стоит двадцать евро.", [
      ["20 euros", true],
      ["50 euros", false],
      ["2 euros", false],
    ]),
    match("am4-t2", "Match the Russian with the English.", [
      ["касса", "ticket office"],
      ["Можно.", "It's allowed."],
      ["Нельзя.", "It's not allowed."],
    ], { skill: "words" }),
    choice("am4-t3", "A sign shows a crossed-out camera. What does it mean?", [
      ["Здесь нельзя фотографировать.", true],
      ["Здесь можно фотографировать.", false],
      ["Здесь нельзя есть.", false],
    ], { skill: "grammar" }),
    missing("am4-t4", "Which letter is missing? (ticket office)", "ка", "са", "с", ["с", "ш", "з"]),
    speak("am4-t5", "Сколько билетов?", "Три билета, пожалуйста.", "Three tickets, please.", {
      help: "You are at the ticket office with two friends. Answer aloud.",
    }),
    listen("am4-t6", "Listen and choose the best reply.", "Где вы были вчера?", [
      ["Мы были в музее.", true],
      ["Мы едем в парк.", false],
      ["Через час.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "windmill-print",
    itemName: "Windmill picture",
    itemNameRu: "Картина",
    ru: "Ура! Картина с мельницей!",
    en: "Yay! A picture of a windmill!",
    a11y: "Murzik hangs a small framed picture of a windmill at sunset above the round window of his houseboat room.",
    image: pic("amsterdam/reward-4"),
    steps: ["In the museum shop there are copies of the paintings.", "Murzik finds a small windmill picture.", "Tom buys it for him.", "It hangs above the round window."],
    bridge: "Now Murzik wants to see real windmills. Tomorrow they will ride out of the city with a map.",
  },
};

export const amsterdam5: Lesson = {
  id: "a1-amsterdam-5",
  level: "A1",
  cityId: "amsterdam",
  number: 5,
  title: "Show Me on the Map",
  minutes: 6,
  goals: ["Ask “Where are we?”", "Ask someone to show you on a map", "Understand here, there and nearby"],
  vocabNote:
    "Покажите is the polite “Show (me)”. Нам туда literally means “For us — that way”: “We need to go that way.”",
  vocab: [
    v("am5-1", "Где мы?", "Where are we?", "Murzik, Tom and Barsik on their bikes look at a big paper map, puzzled.", "Play Где мы", pic("amsterdam/5-1")),
    v("am5-2", "Мы здесь.", "We're here.", "Murzik's paw points at a red dot on a paper map.", "Play Мы здесь", pic("amsterdam/5-2")),
    v("am5-3", "Покажите на карте, пожалуйста.", "Please show me on the map.", "Tom holds out a map to a friendly woman on a bicycle.", "Play Покажите на карте, пожалуйста", pic("amsterdam/5-3")),
    v("am5-4", "Вот здесь.", "Right here.", "A woman's finger touches one spot on the map; Tom leans in to look.", "Play Вот здесь", pic("amsterdam/5-4")),
    v("am5-5", "там", "there", "Murzik points far away across green fields at a windmill.", "Play там", pic("amsterdam/5-5")),
    v("am5-6", "рядом", "nearby", "A windmill stands very close behind Murzik and his bike.", "Play рядом", pic("amsterdam/5-6")),
    v("am5-7", "Нам туда!", "We need to go that way!", "Murzik on his bike points down a country path with a big arrow-like gesture.", "Play Нам туда", pic("amsterdam/5-7")),
  ],
  dialogue: {
    title: "Where are the windmills?",
    note: "Мельницы — windmills. Ура! you know from every reward.",
    lines: [
      line("tom", "Мурзик, где мы?", "Murzik, where are we?"),
      line("murzik", "Не знаю… Барсик, где карта?", "I don't know… Barsik, where is the map?"),
      line("barsik", "Вот карта!", "Here's the map!"),
      line("tom", "Извините, где мы? Покажите на карте, пожалуйста.", "Excuse me, where are we? Please show me on the map."),
      line("passerby", "Вот здесь. А мельницы там, рядом.", "Right here. And the windmills are there, nearby."),
      line("tom", "Спасибо! Нам туда!", "Thank you! We need to go that way!"),
      line("murzik", "Ура! Мельницы!", "Hooray! Windmills!"),
    ],
    gist: choice("am5-d1", "Where are the windmills?", [
      ["Nearby.", true],
      ["Very far away.", false],
      ["In the museum.", false],
    ]),
  },
  grammar: [
    {
      title: "Здесь, там, туда",
      paragraphs: [
        "Где? (where?) → здесь (here), там (there), рядом (nearby).",
        "Куда? (where to?) → туда (that way, there), сюда (this way, here). Иди сюда! — Come here!",
      ],
      examples: [
        { ru: "Мельница там.", en: "The windmill is there." },
        { ru: "Нам туда.", en: "We need to go that way." },
      ],
    },
  ],
  tasks: [
    listen("am5-t1", "Listen. Where is the windmill?", "Мельница рядом.", [
      ["Nearby.", true],
      ["Far away.", false],
      ["In the centre.", false],
    ]),
    choice("am5-t2", "What does там mean?", [
      ["there", true],
      ["here", false],
      ["nearby", false],
    ], { skill: "words" }),
    fill("am5-t3", "Complete: “We need to go that way!”", "Нам", "!", "туда", ["туда", "там", "здесь"], { skill: "grammar" }),
    spell("am5-t4", "Build the word for “map”.", "карта"),
    speak("am5-t5", "Где мы?", "Мы здесь.", "We're here.", {
      help: "Point at the map and answer.",
    }),
    listen("am5-t6", "Listen and choose the best reply.", "Куда едем?", [
      ["В музей!", true],
      ["В музее.", false],
      ["Мне холодно.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "stove",
    itemName: "Little stove",
    itemNameRu: "Печка",
    ru: "Ура! Тёплая печка!",
    en: "Yay! A warm little stove!",
    a11y: "A small round black wood stove glows warmly in the corner of the houseboat room. Murzik warms his paws in front of it.",
    image: pic("amsterdam/reward-5"),
    steps: ["In the evening it gets cold on the water.", "Tom finds a little old stove in the cupboard.", "He lights it.", "Murzik warms his paws and purrs."],
    bridge: "The last full day. They want to ride along the canals — this time without the map.",
  },
};

export const amsterdam6: Lesson = {
  id: "a1-amsterdam-6",
  level: "A1",
  cityId: "amsterdam",
  number: 6,
  title: "We're Lost!",
  minutes: 6,
  goals: ["Say that you are lost", "Ask for help", "Calm a friend down"],
  vocabNote:
    "Мы заблудились is the past form for “we”, the same for everyone. Телефон сел literally means “the phone sat down”: the battery is dead!",
  vocab: [
    v("am6-1", "Мы заблудились!", "We're lost!", "Murzik, Tom and Barsik stand with their bikes in a maze of identical canal streets, looking worried.", "Play Мы заблудились", pic("amsterdam/6-1")),
    v("am6-2", "Помогите, пожалуйста!", "Please help!", "Barsik raises both paws and calls out with a worried face.", "Play Помогите, пожалуйста", pic("amsterdam/6-2")),
    v("am6-3", "Как называется эта улица?", "What is this street called?", "Murzik looks up at a street corner with a puzzled face; the street sign is blank.", "Play Как называется эта улица", pic("amsterdam/6-3")),
    v("am6-4", "Не волнуйся!", "Don't worry!", "Tom puts a calm hand on Barsik's shoulder and smiles.", "Play Не волнуйся", pic("amsterdam/6-4")),
    v("am6-5", "Телефон сел.", "The phone is dead.", "Tom looks sadly at his phone; the screen shows an empty battery.", "Play Телефон сел", pic("amsterdam/6-5")),
    v("am6-6", "Вон там!", "Over there!", "On a little canal bridge, a kind old white cat in a grey hat smiles and points along the canal.", "Play Вон там", pic("amsterdam/6-6")),
    v("am6-7", "Спасибо за помощь!", "Thanks for your help!", "Murzik waves and calls out his thanks towards a little bridge.", "Play Спасибо за помощь", pic("amsterdam/6-7")),
  ],
  dialogue: {
    title: "The cat on the bridge",
    note: "Он показывает means “he's pointing”. Наш канал — our canal.",
    lines: [
      line("barsik", "Мурзик, где мы?", "Murzik, where are we?"),
      line("murzik", "Не знаю… Мы заблудились!", "I don't know… We're lost!"),
      line("tom", "Не волнуйся! Есть телефон… Ой. Телефон сел.", "Don't worry! There's the phone… Oh. The phone is dead."),
      line("murzik", "Как называется эта улица?", "What is this street called?"),
      line("barsik", "Не знаю! Помогите!", "I don't know! Help!"),
      line("murzik", "Смотрите, кот в шляпе! Он показывает — вон там!", "Look, a cat in a hat! He's pointing — over there!"),
      line("tom", "Вон там наш канал! Спасибо за помощь!", "Our canal is over there! Thanks for your help!"),
    ],
    gist: choice("am6-d1", "Who helps them?", [
      ["A cat in a hat.", true],
      ["A police officer.", false],
      ["Tom's phone.", false],
    ]),
  },
  grammar: [
    {
      title: "Помоги! and Помогите!",
      paragraphs: [
        "You know the -те rule from Rome. To a friend: Помоги! Не волнуйся! To a stranger or to several people: Помогите! Не волнуйтесь!",
        "Не + verb means “Don't…”: Не волнуйся! — Don't worry!",
      ],
      examples: [
        { ru: "Помогите, пожалуйста!", en: "Please help! (polite)" },
        { ru: "Не волнуйтесь!", en: "Don't worry! (polite or to several people)" },
      ],
    },
  ],
  tasks: [
    listen("am6-t1", "Listen. What did you hear?", "Мы заблудились!", [
      ["Мы заблудились!", true],
      ["Мы опоздали!", false],
      ["Мы проспали.", false],
    ]),
    match("am6-t2", "Match the Russian with the English.", [
      ["Телефон сел.", "The phone is dead."],
      ["Вон там!", "Over there!"],
      ["Не волнуйся!", "Don't worry!"],
    ], { skill: "words" }),
    choice("am6-t3", "You are lost and ask a stranger for help. What do you say?", [
      ["Помогите, пожалуйста!", true],
      ["Помоги, пожалуйста!", false],
      ["Не волнуйся!", false],
    ], { skill: "grammar" }),
    missing("am6-t4", "Which letter is missing? (street)", "ул", "ца", "и", ["и", "ы", "е"]),
    speak("am6-t5", "Мы заблудились!", "Не волнуйся! Вон там!", "Don't worry! Over there!", {
      help: "Your friend panics. Calm them down and show the way.",
    }),
    listen("am6-t6", "Listen and choose the best reply.", "Где мы?", [
      ["Мы здесь.", true],
      ["Нам туда.", false],
      ["Можно.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fishing-rod",
    itemName: "Fishing rod",
    itemNameRu: "Удочка",
    ru: "Ура! У меня удочка!",
    en: "Yay! I have a fishing rod!",
    a11y: "Murzik sits on the deck of the houseboat with a small wooden fishing rod over the canal, smiling.",
    image: pic("amsterdam/reward-6"),
    steps: ["When they look at the bridge again, the cat in the hat is gone.", "Back at the canal, an old fisherman packs up.", "He gives Murzik his old fishing rod: “For the cat from the houseboat!”", "Murzik sits on the deck and fishes."],
    bridge: "Tomorrow Barsik goes back to Rome. One last evening together on the boat.",
  },
};

export const amsterdam7: Lesson = {
  id: "a1-amsterdam-7",
  level: "A1",
  cityId: "amsterdam",
  number: 7,
  title: "The Last Evening",
  minutes: 7,
  goals: ["Say you are tired and it was fun", "Say “I'll miss you”", "Understand directions by ear"],
  vocabNote:
    "Я буду скучать means “I'll miss you” — literally “I will be bored without you”. It is the same for everyone.",
  vocab: [
    v("am7-1", "Мы устали.", "We're tired.", "Murzik, Tom and Barsik slump happily on deck cushions under the fairy lights.", "Play Мы устали", pic("amsterdam/7-1")),
    v("am7-2", "Какой день!", "What a day!", "Murzik throws his paws up and laughs, remembering the day.", "Play Какой день", pic("amsterdam/7-2")),
    v("am7-3", "Было весело!", "It was fun!", "Murzik, Tom and Barsik laugh together on the deck.", "Play Было весело", pic("amsterdam/7-3")),
    v("am7-4", "Я буду скучать.", "I'll miss you.", "Murzik hugs Barsik tightly; both have soft, sad smiles.", "Play Я буду скучать", pic("amsterdam/7-4")),
    v("am7-5", "Приезжай в гости!", "Come and visit!", "Barsik waves a paw invitingly, with Roman roofs in a little thought bubble.", "Play Приезжай в гости", pic("amsterdam/7-5")),
    v("am7-6", "Обязательно!", "Definitely!", "Murzik nods firmly with a big smile and a paw on his heart.", "Play Обязательно", pic("amsterdam/7-6")),
    v("am7-7", "Спокойной ночи!", "Good night!", "The houseboat at night with a moon over the canal and one lit round window.", "Play Спокойной ночи", pic("amsterdam/7-7")),
  ],
  dialogue: {
    title: "On the deck at night",
    note: "Не проспи! means “Don't oversleep!” — remember Berlin? Друзья — friends.",
    lines: [
      line("barsik", "Ох, мы устали. Какой день!", "Oh, we're tired. What a day!"),
      line("murzik", "Было весело! Барсик, я буду скучать.", "It was fun! Barsik, I'll miss you."),
      line("barsik", "И я. Приезжай в гости!", "Me too. Come and visit!"),
      line("murzik", "Обязательно!", "Definitely!"),
      line("tom", "Барсик, твой поезд завтра в девять. Не проспи!", "Barsik, your train is tomorrow at nine. Don't oversleep!"),
      line("barsik", "У Мурзика есть будильник!", "Murzik has an alarm clock!"),
      line("tom", "Спокойной ночи, друзья!", "Good night, friends!"),
    ],
    gist: choice("am7-d1", "When is Barsik's train?", [
      ["Tomorrow at nine.", true],
      ["Tonight at nine.", false],
      ["Tomorrow at seven.", false],
    ]),
  },
  grammar: [
    {
      title: "Было + word: it was…",
      paragraphs: [
        "To say how something was, use было: Было весело! — It was fun! Было интересно. — It was interesting.",
        "You already know Было вкусно! from Rome. It is the same pattern.",
      ],
      examples: [
        { ru: "Было весело!", en: "It was fun!" },
        { ru: "Было холодно.", en: "It was cold." },
      ],
    },
  ],
  tasks: [
    listen("am7-t1", "Listen. Where is the museum?", "Мы заблудились. Телефон сел. Музей в центре, а наш канал — вон там.", [
      ["In the centre.", true],
      ["Over there, by the canal.", false],
      ["Nearby, in the park.", false],
    ], { help: "This is your Amsterdam listening test." }),
    choice("am7-t2", "When do you say Спокойной ночи!?", [
      ["Before going to bed.", true],
      ["In the morning.", false],
      ["When you meet someone.", false],
    ], { skill: "words" }),
    fill("am7-t3", "Complete: “It was fun!”", "Было", "!", "весело", ["весело", "весёлый", "весела"], { skill: "grammar" }),
    spell("am7-t4", "Build the word for “bicycle”.", "велосипед"),
    speak("am7-t5", "Приезжай в гости!", "Обязательно! Спасибо!", "Definitely! Thank you!", {
      help: "Barsik invites you to Rome. Answer aloud.",
    }),
    listen("am7-t6", "Listen and choose the best reply.", "На сколько?", [
      ["На один день.", true],
      ["Через час.", false],
      ["В центре.", false],
    ], { skill: "review" }),
    listen("am7-t7", "Listen and choose the best reply.", "Можно фотографировать?", [
      ["Нет, здесь нельзя.", true],
      ["Мне всё равно.", false],
      ["Мы здесь.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "clogs",
    itemName: "Wooden clogs",
    itemNameRu: "Башмачки",
    ru: "Ура! Деревянные башмачки!",
    en: "Yay! Little wooden clogs!",
    a11y: "Murzik proudly wears tiny yellow wooden clogs painted with red tulips on the deck of the houseboat. Barsik claps.",
    image: pic("amsterdam/reward-7"),
    steps: ["Barsik has a present for Murzik.", "Tiny wooden clogs — just Murzik's size!", "They are yellow, with red tulips painted on them.", "Murzik walks around the deck: clip-clop, clip-clop!"],
    bridge: "Barsik's train leaves at nine. This time everyone wakes up on time.",
  },
};
