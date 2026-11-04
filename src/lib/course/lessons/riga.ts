import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Riga · «Снять квартиру» · A2 lessons 1–7.
 * Murzik and Tom want to stay in Riga for a few weeks, so they need a flat. Lena (about 28), a Russian
 * tour guide born in Riga, helps them read ads, compare flats and talk to the landlady. Ilze (about 60)
 * owns the flat and has an amber stall at the Central Market. Thirty years ago a ginger cat came to her
 * mother's stall and painted tiny pictures on amber; then she went north, to Tallinn.
 * Grammar: comparatives (больше, дешевле, светлее, ближе, чем), the superlative (самый, лучший),
 * flat vocabulary.
 */

const p = (name: string) => pic(`riga/${name}`);

export const riga1: Lesson = {
  id: "a2-riga-1",
  level: "A2",
  cityId: "riga",
  number: 1,
  title: "Flat to Rent",
  minutes: 8,
  goals: ["Read a rental ad", "Ask about the price and the floor", "Say what you're looking for"],
  vocabNote: "Сдаётся квартира — flat to rent (literally “a flat is being let”). Снять квартиру — to rent a flat (as a tenant).",
  vocab: [
    v("ri1-1", "снять квартиру", "to rent a flat", "Murzik and Tom look at ads on a board by a café.", "Listen to снять квартиру", p("1-1")),
    v("ri1-2", "Сдаётся квартира.", "Flat to rent.", "A paper ad with tear-off phone numbers.", "Listen to Сдаётся квартира", p("1-2")),
    v("ri1-3", "однокомнатная квартира", "one-room flat (one room + kitchen)", "A plan of a small flat: one room, a kitchen, a bathroom.", "Listen to однокомнатная квартира", p("1-3")),
    v("ri1-4", "на третьем этаже", "on the third floor", "An old building; the third-floor window is circled.", "Listen to на третьем этаже", p("1-4")),
    v("ri1-5", "с балконом", "with a balcony", "A small balcony with flower boxes.", "Listen to с балконом", p("1-5")),
    v("ri1-6", "Сколько стоит в месяц?", "How much is it per month?", "Tom on the phone, pen in hand.", "Listen to Сколько стоит в месяц", p("1-6")),
    v("ri1-7", "залог", "deposit", "A small envelope with money in it.", "Listen to залог", p("1-7")),
    v("ri1-8", "на месяц", "for a month", "A calendar page with one month circled.", "Listen to на месяц", p("1-8")),
  ],
  letters: [
    letter("сдаётся", "-тся sounds like tsa; the stress is on ЁТ: zda-YOT-sa. с before д sounds like з.", "Сдаётся квартира.", "Flat to rent."),
    letter("этаже", "ж is always hard, so е after it sounds like э: na TRYE-tyem e-ta-ZHE.", "на третьем этаже", "on the third floor"),
  ],
  dialogue: {
    title: "Meeting Lena",
    note: "Lena was born in Riga; her family speaks Russian. She works as a tour guide and knows every street.",
    lines: [
      line("tom", "Мы хотим снять квартиру на месяц. Но всё на латышском…", "We want to rent a flat for a month. But everything's in Latvian…"),
      line("lena", "Давайте я помогу. Я Лена, я гид. Вот: «Сдаётся однокомнатная квартира».", "Let me help. I'm Lena, I'm a guide. Look: “One-room flat to rent.”"),
      line("murzik", "А на каком этаже?", "And which floor is it on?"),
      line("lena", "На третьем, с балконом. В старом городе.", "On the third, with a balcony. In the old town."),
      line("tom", "Сколько стоит в месяц?", "How much is it per month?"),
      line("lena", "Шестьсот евро. И залог — тоже шестьсот. Давайте позвоним!", "Six hundred euros. And the deposit is six hundred too. Let's call!"),
    ],
    gist: choice("ri1-d1", "Why does Lena help Tom and Murzik?", [
      ["The ads are in Latvian.", true],
      ["Tom lost his phone.", false],
      ["She owns the flat.", false],
    ]),
  },
  grammar: [
    {
      title: "Talking about a flat",
      paragraphs: [
        "Rooms: однокомнатная (one-room), двухкомнатная (two-room) квартира. Floor: на каком этаже? — на первом, на втором, на третьем. Russians count the ground floor as первый этаж, so на третьем этаже is the UK “second floor”.",
        "Price: сколько стоит в месяц / в неделю? For how long: на месяц, на неделю, на год (на + accusative).",
      ],
      examples: [
        { ru: "Мы ищем двухкомнатную квартиру на год.", en: "We're looking for a two-room flat for a year." },
        { ru: "Квартира на пятом этаже, без лифта.", en: "The flat is on the fifth floor, no lift." },
      ],
    },
  ],
  tasks: [
    listen("ri1-t1", "Listen. How much is the deposit?", "Шестьсот евро. И залог — тоже шестьсот.", [
      ["Six hundred euros.", true],
      ["Sixty euros.", false],
      ["There's no deposit.", false],
    ]),
    choice("ri1-t2", "“We want to rent a flat for a month.” Which is right?", [
      ["Мы хотим снять квартиру на месяц.", true],
      ["Мы хотим снять квартира на месяц.", false],
      ["Мы хотим сдаётся квартиру на месяц.", false],
    ], { skill: "grammar" }),
    fill("ri1-t3", "Choose the right form: “on the third floor”", "на третьем", "", "этаже", ["этаже", "этаж", "этажа"], { skill: "grammar" }),
    read("ri1-t4", "Read the ad. Is there a lift?", "СДАЁТСЯ\nОднокомнатная квартира, 40 м²\n3 этаж, без лифта, с балконом\n600 €/месяц + залог", [
      ["No, there's no lift.", true],
      ["Yes, there is.", false],
      ["The ad doesn't say.", false],
    ]),
    match("ri1-t5", "Match the Russian with the English.", [
      ["снять квартиру", "to rent a flat"],
      ["залог", "deposit"],
      ["с балконом", "with a balcony"],
      ["на месяц", "for a month"],
    ], { skill: "words" }),
    script("ri1-t6", "Call about a flat.", [
      { speaker: "Landlady", text: "Алло, слушаю." },
      { speaker: "You", answer: "Здравствуйте! Я звоню по объявлению. Квартира ещё сдаётся?", options: ["Здравствуйте! Я звоню по объявлению. Квартира ещё сдаётся?", "Здравствуйте! Залог.", "Здравствуйте! На третьем этаже."] },
      { speaker: "Landlady", text: "Да, сдаётся." },
      { speaker: "You", answer: "Сколько стоит в месяц?", options: ["Сколько стоит в месяц?", "Сколько стоит на этаже?", "С балконом в месяц?"] },
    ], { skill: "speaking" }),
    speak("ri1-t7", "Какую квартиру вы ищете?", "Мы ищем однокомнатную квартиру в центре, на месяц. Лучше с балконом.", "We're looking for a one-room flat in the centre, for a month. Preferably with a balcony.", {
      help: "Say out loud what kind of flat you're looking for.",
    }),
  ],
  reward: {
    itemId: "doormat",
    itemName: "Doormat",
    itemNameRu: "Коврик у двери",
    ru: "Коврик — «Добро пожаловать»!",
    en: "A doormat — “Welcome”!",
    a11y: "A woven doormat with «Laipni lūdzam» and «Добро пожаловать» written on it lies in front of a heavy wooden door.",
    image: p("reward-1"),
    steps: ["Lena knows a little shop with doormats.", "On the mat it says “Welcome” in Latvian and in Russian.", "“Для вашей будущей квартиры,” she says.", "They don't have a flat yet — but they have a doormat."],
    bridge: "Two landlords answer. Two flats, two prices. Which one is better?",
  },
};

export const riga2: Lesson = {
  id: "a2-riga-2",
  level: "A2",
  cityId: "riga",
  number: 2,
  title: "Bigger or Cheaper?",
  minutes: 8,
  goals: ["Compare two things: больше, дешевле, светлее", "Say “than”: чем or the genitive", "Weigh pros and cons"],
  vocabNote: "Russian comparatives often end in -ее: светлый → светлее. Many common ones are irregular: большой → больше, дешёвый → дешевле, близкий → ближе.",
  vocab: [
    v("ri2-1", "больше / меньше", "bigger / smaller", "Two flat plans side by side, one clearly bigger.", "Listen to больше, меньше", p("2-1")),
    v("ri2-2", "дешевле / дороже", "cheaper / more expensive", "Two price tags: 550 € and 600 €.", "Listen to дешевле, дороже", p("2-2")),
    v("ri2-3", "светлее", "lighter, brighter", "Sun pours through a big window.", "Listen to светлее", p("2-3")),
    v("ri2-4", "ближе к центру", "closer to the centre", "A map: one pin near the old town, one far away.", "Listen to ближе к центру", p("2-4")),
    v("ri2-5", "удобнее", "more convenient, more comfortable", "A tram stop right outside the door of the first flat.", "Listen to удобнее", p("2-5")),
    v("ri2-6", "чем", "than", "Murzik weighs two flats on old kitchen scales.", "Listen to чем", p("2-6")),
    v("ri2-7", "зато", "but on the other hand", "Murzik holds up a paw: but…", "Listen to зато", p("2-7")),
    v("ri2-8", "плюсы и минусы", "pros and cons", "A notebook with two columns: + and −.", "Listen to плюсы и минусы", p("2-8")),
  ],
  letters: [
    letter("дешевле", "Stress on the end: di-shiv-LYE.", "дешевле", "cheaper"),
    letter("зато", "za-TO: one word, stress on the end. It means “but, to make up for it”.", "Дорого, зато близко.", "Expensive, but close."),
  ],
  dialogue: {
    title: "Two flats",
    note: "Комната — room. Окно во двор — a window onto the courtyard.",
    lines: [
      line("lena", "Первая квартира больше, чем вторая. Но вторая дешевле.", "The first flat is bigger than the second. But the second one is cheaper."),
      line("tom", "А какая ближе к центру?", "And which one is closer to the centre?"),
      line("lena", "Первая. Она в старом городе. Вторая — далеко, но там тише.", "The first. It's in the old town. The second is far, but it's quieter."),
      line("murzik", "А в первой светлее! Большое окно.", "And the first is brighter! A big window."),
      line("tom", "Первая дороже, зато ближе, светлее и удобнее.", "The first is more expensive, but it's closer, brighter and more convenient."),
      line("lena", "Давайте напишем плюсы и минусы.", "Let's write down the pros and cons."),
    ],
    gist: choice("ri2-d1", "What's good about the second flat?", [
      ["It's cheaper and quieter.", true],
      ["It's bigger and brighter.", false],
      ["It's in the old town.", false],
    ]),
  },
  grammar: [
    {
      title: "Comparatives",
      paragraphs: [
        "Regular: -ее: светлый → светлее, тёплый → теплее, интересный → интереснее. Irregular: большой → больше, маленький → меньше, дешёвый → дешевле, дорогой → дороже, близкий → ближе, тихий → тише, хороший → лучше, плохой → хуже.",
        "“Than”: чем + the same form as the first thing (больше, чем вторая; тише, чем в центре) or just the genitive (больше второй).",
      ],
      examples: [
        { ru: "Рига меньше, чем Москва.", en: "Riga is smaller than Moscow." },
        { ru: "Эта квартира дешевле той.", en: "This flat is cheaper than that one." },
      ],
    },
  ],
  tasks: [
    listen("ri2-t1", "Listen. Which flat is closer to the centre?", "Первая. Она в старом городе.", [
      ["The first.", true],
      ["The second.", false],
      ["They're the same.", false],
    ]),
    choice("ri2-t2", "“This flat is cheaper.” Which is right?", [
      ["Эта квартира дешевле.", true],
      ["Эта квартира дешёвее.", false],
      ["Эта квартира более дешевле.", false],
    ], { skill: "grammar" }),
    fill("ri2-t3", "Choose the right word: “It's quieter here than in the centre.”", "Здесь тише,", "в центре.", "чем", ["чем", "как", "что"], { skill: "grammar" }),
    read("ri2-t4", "Read Lena's notes. Which flat has a lift?", "Квартира 1: 40 м², 3 этаж, без лифта, 600 €\nКвартира 2: 30 м², 5 этаж, с лифтом, 550 €", [
      ["The second.", true],
      ["The first.", false],
      ["Neither.", false],
    ]),
    match("ri2-t5", "Match the Russian with the English.", [
      ["дешевле", "cheaper"],
      ["светлее", "brighter"],
      ["удобнее", "more convenient"],
      ["плюсы и минусы", "pros and cons"],
    ], { skill: "words" }),
    tf("ri2-t6", "Хороший → лучше; плохой → хуже.", true, "True or false?", { skill: "grammar" }),
    speak("ri2-t7", "Что лучше: жить в центре или за городом?", "В центре интереснее и ближе к работе, зато за городом тише и дешевле.", "The centre is more interesting and closer to work, but outside the city it's quieter and cheaper.", {
      help: "Compare living in the centre and outside the city out loud.",
    }),
  ],
  reward: {
    itemId: "tapemeasure",
    itemName: "Tape measure",
    itemNameRu: "Рулетка",
    ru: "Рулетка — всё измерим!",
    en: "A tape measure — we'll measure everything!",
    a11y: "A yellow tape measure lies on a windowsill next to a notebook with two columns of pros and cons.",
    image: p("reward-2"),
    steps: ["Murzik wants to know exactly which flat is bigger.", "Lena lends him a tape measure.", "“Сорок метров против тридцати!” he says.", "The tape measure stays in Murzik's pocket."],
    bridge: "Tomorrow they'll see the first flat. The landlady, Ilze, is waiting for them at three.",
  },
};

export const riga3: Lesson = {
  id: "a2-riga-3",
  level: "A2",
  cityId: "riga",
  number: 3,
  title: "Viewing the Flat",
  minutes: 8,
  goals: ["Name rooms and furniture", "Ask what's in the flat: Здесь есть…?", "Ask to see something: Можно посмотреть?"],
  vocabNote: "Хозяйка — landlady (and also hostess). Хозяин — landlord.",
  vocab: [
    v("ri3-1", "хозяйка", "landlady", "Ilze, a woman of about 60 with an amber brooch, opens the door.", "Listen to хозяйка", p("3-1")),
    v("ri3-2", "Можно посмотреть?", "May we have a look?", "Tom peeks into a room.", "Listen to Можно посмотреть", p("3-2")),
    v("ri3-3", "спальня", "bedroom", "A small bedroom with a wooden bed.", "Listen to спальня", p("3-3")),
    v("ri3-4", "ванная", "bathroom", "A white bathroom with an old bath on legs.", "Listen to ванная", p("3-4")),
    v("ri3-5", "стиральная машина", "washing machine", "A washing machine in the bathroom corner.", "Listen to стиральная машина", p("3-5")),
    v("ri3-6", "шкаф", "wardrobe, cupboard", "A tall old wooden wardrobe.", "Listen to шкаф", p("3-6")),
    v("ri3-7", "Здесь есть интернет?", "Is there internet here?", "Tom holds up his laptop.", "Listen to Здесь есть интернет", p("3-7")),
    v("ri3-8", "отопление", "heating", "An old white radiator under the window.", "Listen to отопление", p("3-8")),
  ],
  letters: [
    letter("ванная", "Spelled with нн but said with one н: VA-na-ya. Stress on the first syllable. It declines like an adjective: посмотреть ванную.", "ванная", "bathroom"),
    letter("шкаф", "One syllable; ф at the end: SHKAF.", "шкаф", "wardrobe"),
  ],
  dialogue: {
    title: "At Ilze's flat",
    note: "Ilze is Latvian and speaks Russian with a soft accent.",
    lines: [
      line("ilze", "Добрый день! Проходите. Вот комната — это и спальня. А вот кухня.", "Good afternoon! Come in. Here's the room — it's the bedroom too. And here's the kitchen."),
      line("tom", "Можно посмотреть ванную?", "May we see the bathroom?"),
      line("ilze", "Конечно. Здесь есть стиральная машина.", "Of course. There's a washing machine here."),
      line("murzik", "А шкаф есть? У нас много вещей.", "And is there a wardrobe? We have lots of things."),
      line("ilze", "Есть, большой старый шкаф.", "Yes, a big old wardrobe."),
      line("tom", "А здесь есть интернет? И отопление?", "And is there internet here? And heating?"),
      line("ilze", "Всё есть. И окно на крыши старого города.", "Everything. And a window onto the rooftops of the old town."),
    ],
    gist: choice("ri3-d1", "What can you see from the window?", [
      ["The rooftops of the old town.", true],
      ["The sea.", false],
      ["The market.", false],
    ]),
  },
  grammar: [
    {
      title: "Здесь есть…? Is there…?",
      paragraphs: [
        "Здесь есть + nominative: Здесь есть балкон? — Да, есть. Нет + genitive: Нет, балкона нет.",
        "Можно + infinitive to ask permission: Можно посмотреть? Можно открыть окно?",
      ],
      examples: [
        { ru: "В квартире есть посудомоечная машина? — Нет, посудомоечной машины нет.", en: "Is there a dishwasher in the flat? — No, there isn't." },
        { ru: "Можно посмотреть кухню?", en: "May we see the kitchen?" },
      ],
    },
  ],
  tasks: [
    listen("ri3-t1", "Listen. What's in the bathroom?", "Можно посмотреть ванную? — Конечно. Здесь есть стиральная машина.", [
      ["A washing machine.", true],
      ["A wardrobe.", false],
      ["A bed.", false],
    ]),
    choice("ri3-t2", "“There's no wardrobe.” Which is right?", [
      ["Шкафа нет.", true],
      ["Шкаф нет.", false],
      ["Нет шкаф.", false],
    ], { skill: "grammar" }),
    fill("ri3-t3", "Choose the right form: “May we see the kitchen?”", "Можно посмотреть", "?", "кухню", ["кухню", "кухня", "кухне"], { skill: "grammar" }),
    read("ri3-t4", "Read the list Ilze gives them. What is NOT in the flat?", "В КВАРТИРЕ ЕСТЬ:\nкровать, шкаф, стол, 2 стула\nстиральная машина, холодильник, интернет\nНЕТ посудомоечной машины", [
      ["A dishwasher.", true],
      ["A washing machine.", false],
      ["A fridge.", false],
    ]),
    match("ri3-t5", "Match the Russian with the English.", [
      ["спальня", "bedroom"],
      ["ванная", "bathroom"],
      ["шкаф", "wardrobe"],
      ["отопление", "heating"],
    ], { skill: "words" }),
    script("ri3-t6", "You're viewing a flat.", [
      { speaker: "Landlady", text: "Проходите! Вот комната." },
      { speaker: "You", answer: "Спасибо. Можно посмотреть кухню?", options: ["Спасибо. Можно посмотреть кухню?", "Спасибо. Можно посмотреть кухня?", "Спасибо. Отопление."] },
      { speaker: "Landlady", text: "Конечно. Что ещё?" },
      { speaker: "You", answer: "Здесь есть интернет?", options: ["Здесь есть интернет?", "Здесь есть интернета?", "Здесь нет интернет?"] },
    ], { skill: "speaking" }),
    speak("ri3-t7", "Что есть в вашей квартире?", "У нас есть спальня, кухня и ванная. Есть стиральная машина, но нет балкона.", "We have a bedroom, a kitchen and a bathroom. There's a washing machine, but no balcony.", {
      help: "Describe your flat out loud: есть… / нет…",
    }),
  ],
  reward: {
    itemId: "curtains",
    itemName: "Linen curtains",
    itemNameRu: "Льняные шторы",
    ru: "Льняные шторы — как в старой Риге!",
    en: "Linen curtains — just like in old Riga!",
    a11y: "Light grey linen curtains with a woven red pattern hang at a window looking onto red-tiled rooftops.",
    image: p("reward-3"),
    steps: ["The window has no curtains.", "Ilze brings linen curtains with a traditional red pattern.", "“Лён — латышская ткань,” she says.", "The room suddenly looks like home."],
    bridge: "The flat is lovely. But is it the best? Lena says: “Посмотрим ещё одну — самую дешёвую.”",
  },
};

export const riga4: Lesson = {
  id: "a2-riga-4",
  level: "A2",
  cityId: "riga",
  number: 4,
  title: "The Best One",
  minutes: 8,
  goals: ["Use the superlative: самый, лучший", "Say what's the most … in a city", "Make a choice"],
  vocabNote: "Самый + adjective = the most: самый дешёвый — the cheapest. Самый agrees: самая светлая, самое большое, самые тихие.",
  vocab: [
    v("ri4-1", "самый дешёвый", "the cheapest", "A tiny dark flat with a price tag of 450 €.", "Listen to самый дешёвый", p("4-1")),
    v("ri4-2", "самая светлая", "the brightest", "Ilze's flat full of sunlight.", "Listen to самая светлая", p("4-2")),
    v("ri4-3", "лучший", "the best", "Murzik gives a gold star to Ilze's flat.", "Listen to лучший", p("4-3")),
    v("ri4-4", "худший", "the worst", "A flat with a crack in the ceiling and a dripping tap.", "Listen to худший", p("4-4")),
    v("ri4-5", "в подвале", "in the basement", "A window at ground level, with feet walking past.", "Listen to в подвале", p("4-5")),
    v("ri4-6", "Мы решили.", "We've decided.", "Tom and Murzik shake paws.", "Listen to Мы решили", p("4-6")),
    v("ri4-7", "Мы берём эту.", "We'll take this one.", "Tom points at Ilze's flat on the plan.", "Listen to Мы берём эту", p("4-7")),
    v("ri4-8", "самый большой город", "the biggest city", "A map of the Baltic states, Riga in big letters.", "Listen to самый большой город", p("4-8")),
  ],
  letters: [
    letter("худший", "Stress on the first syllable; д before ш sounds like т: HOOT-shiy.", "худший", "the worst"),
  ],
  dialogue: {
    title: "The cheapest flat",
    note: "Капает кран — the tap is dripping. Трещина — crack.",
    lines: [
      line("lena", "Вот самая дешёвая квартира в центре. Четыреста пятьдесят евро.", "Here's the cheapest flat in the centre. Four hundred and fifty euros."),
      line("murzik", "Она в подвале! Здесь темно, и капает кран.", "It's in the basement! It's dark here, and the tap is dripping."),
      line("tom", "Это худшая квартира, которую я видел.", "This is the worst flat I've seen."),
      line("lena", "Да… Квартира Илзе — самая светлая и самая тёплая.", "Yes… Ilze's flat is the brightest and the warmest."),
      line("murzik", "И самая красивая! Это лучшая квартира.", "And the most beautiful! It's the best flat."),
      line("tom", "Мы решили. Мы берём квартиру Илзе.", "We've decided. We'll take Ilze's flat."),
    ],
    gist: choice("ri4-d1", "Which flat do they choose?", [
      ["Ilze's — the brightest and warmest.", true],
      ["The cheapest one in the basement.", false],
      ["They don't choose any.", false],
    ]),
  },
  grammar: [
    {
      title: "Самый and лучший",
      paragraphs: [
        "Самый + adjective, both agree with the noun: самый тихий район, самая светлая комната, самое старое здание.",
        "Лучший (the best) and худший (the worst) work alone: лучшая квартира, худший день. Also: самый лучший in speech.",
      ],
      examples: [
        { ru: "Рига — самый большой город в Прибалтике.", en: "Riga is the biggest city in the Baltics." },
        { ru: "Это лучший день в моей жизни!", en: "This is the best day of my life!" },
      ],
    },
  ],
  tasks: [
    listen("ri4-t1", "Listen. Where is the cheapest flat?", "Она в подвале! Здесь темно, и капает кран.", [
      ["In the basement.", true],
      ["On the top floor.", false],
      ["Outside the city.", false],
    ]),
    choice("ri4-t2", "“The brightest room.” Which is right?", [
      ["самая светлая комната", true],
      ["самый светлый комната", false],
      ["самая светлее комната", false],
    ], { skill: "grammar" }),
    fill("ri4-t3", "Choose the right form: “This is the best flat.”", "Это", "квартира.", "лучшая", ["лучшая", "лучший", "лучше"], { skill: "grammar" }),
    read("ri4-t4", "Read the guidebook. What is the tallest church?", "РИГА\nСамая высокая церковь — церковь Святого Петра.\nСамый большой собор — Домский.\nСамый большой рынок — Центральный.", [
      ["St Peter's Church.", true],
      ["The Dome Cathedral.", false],
      ["The Central Market.", false],
    ]),
    match("ri4-t5", "Match the Russian with the English.", [
      ["самый дешёвый", "the cheapest"],
      ["худший", "the worst"],
      ["в подвале", "in the basement"],
      ["Мы решили.", "We've decided."],
    ], { skill: "words" }),
    tf("ri4-t6", "«Самая светлая» goes with a feminine noun, like квартира.", true, "True or false?", { skill: "grammar" }),
    speak("ri4-t7", "Какой город — самый красивый, по-твоему?", "По-моему, самый красивый город — Рига. А самый интересный — Париж.", "In my opinion, the most beautiful city is Riga. And the most interesting is Paris.", {
      help: "Say out loud which cities are the most beautiful and interesting for you.",
    }),
  ],
  reward: {
    itemId: "houseplant",
    itemName: "Pot plant",
    itemNameRu: "Цветок в горшке",
    ru: "Цветок для лучшей квартиры!",
    en: "A plant for the best flat!",
    a11y: "A green plant with big round leaves stands in a clay pot on the sunny windowsill.",
    image: p("reward-4"),
    steps: ["Lena is glad they chose Ilze's flat.", "She brings a plant from her own balcony.", "“В самой светлой квартире цветы растут лучше всего.”", "The plant goes on the windowsill, in the sun."],
    bridge: "Now — the contract. Ilze reads the rules aloud. One of them worries Murzik: “Без домашних животных.”",
  },
};

export const riga5: Lesson = {
  id: "a2-riga-5",
  level: "A2",
  cityId: "riga",
  number: 5,
  title: "The Contract",
  minutes: 8,
  goals: ["Understand house rules", "Sign a contract and get keys", "Ask: Можно…? Нельзя…?"],
  vocabNote: "Договор — contract, agreement. Подписать — to sign. Въехать — to move in.",
  vocab: [
    v("ri5-1", "договор", "contract", "A two-page contract on the table, a pen beside it.", "Listen to договор", p("5-1")),
    v("ri5-2", "подписать", "to sign", "Murzik signs with a big flourish.", "Listen to подписать", p("5-2")),
    v("ri5-3", "правила", "rules", "A sheet with a list headed «Правила».", "Listen to правила", p("5-3")),
    v("ri5-4", "без домашних животных", "no pets", "A sign with a dog and a cat crossed out.", "Listen to без домашних животных", p("5-4")),
    v("ri5-5", "соседи", "neighbours", "An old couple waves from the flat across the landing.", "Listen to соседи", p("5-5")),
    v("ri5-6", "после десяти вечера", "after ten in the evening", "A clock showing 22:00, a moon in the window.", "Listen to после десяти вечера", p("5-6")),
    v("ri5-7", "ключи", "keys", "Two old keys on an amber keyring.", "Listen to ключи", p("5-7")),
    v("ri5-8", "въехать", "to move in", "Murzik and Tom carry suitcases up the stairs.", "Listen to въехать", p("5-8")),
  ],
  letters: [
    letter("въехать", "The hard sign ъ keeps в and е apart: v-YE-hat'.", "Когда можно въехать?", "When can we move in?"),
  ],
  dialogue: {
    title: "The rules",
    note: "Ilze laughs: Murzik is not a pet — he's a tenant.",
    lines: [
      line("ilze", "Вот договор. Правила простые: не шуметь после десяти вечера…", "Here's the contract. The rules are simple: no noise after ten in the evening…"),
      line("ilze", "…не курить, и без домашних животных.", "…no smoking, and no pets."),
      line("murzik", "Без животных?! А как же я?", "No pets?! What about me?"),
      line("ilze", "Ты не домашнее животное. Ты жилец! Подписывай.", "You're not a pet. You're a tenant! Sign."),
      line("tom", "Когда можно въехать?", "When can we move in?"),
      line("ilze", "Хоть сегодня. Вот ключи. И передавайте привет соседям!", "Today, if you like. Here are the keys. And say hello to the neighbours!"),
    ],
    gist: choice("ri5-d1", "Why is Murzik worried?", [
      ["A rule says “no pets”.", true],
      ["The contract is in Latvian.", false],
      ["The flat is too expensive.", false],
    ]),
  },
  grammar: [
    {
      title: "Rules: нельзя, не + infinitive",
      paragraphs: [
        "Rules often use the infinitive: не курить (no smoking), не шуметь (no noise). Or нельзя + infinitive: Здесь нельзя курить.",
        "После + genitive: после десяти (after ten), после ужина. До + genitive: до восьми утра (until eight in the morning).",
      ],
      examples: [
        { ru: "После десяти вечера нельзя шуметь.", en: "No noise after ten in the evening." },
        { ru: "Можно въехать до обеда?", en: "Can we move in before lunch?" },
      ],
    },
  ],
  tasks: [
    listen("ri5-t1", "Listen. When must they be quiet?", "Правила простые: не шуметь после десяти вечера…", [
      ["After ten in the evening.", true],
      ["After eight in the morning.", false],
      ["All day.", false],
    ]),
    choice("ri5-t2", "“No smoking here.” Which is right?", [
      ["Здесь нельзя курить.", true],
      ["Здесь нельзя курит.", false],
      ["Здесь не можно курить.", false],
    ], { skill: "grammar" }),
    fill("ri5-t3", "Choose the right form: “after dinner”", "после", "", "ужина", ["ужина", "ужин", "ужином"], { skill: "grammar" }),
    read("ri5-t4", "Read the house rules. When can you put out the rubbish?", "ПРАВИЛА ДОМА\n1. Тишина: 22:00–8:00\n2. Мусор — во дворе, по вторникам и пятницам\n3. Велосипеды — в подвале", [
      ["On Tuesdays and Fridays.", true],
      ["Every day after ten.", false],
      ["In the basement.", false],
    ]),
    match("ri5-t5", "Match the Russian with the English.", [
      ["договор", "contract"],
      ["подписать", "to sign"],
      ["ключи", "keys"],
      ["соседи", "neighbours"],
    ], { skill: "words" }),
    tf("ri5-t6", "Ilze lets Murzik live in the flat.", true, "True or false?", { skill: "listening" }),
    speak("ri5-t7", "Какие правила есть у вас дома?", "У нас нельзя шуметь после одиннадцати. И нельзя курить.", "In our home you can't make noise after eleven. And you can't smoke.", {
      help: "Say out loud what rules there are in your home.",
    }),
  ],
  reward: {
    itemId: "keyring",
    itemName: "Amber keyring",
    itemNameRu: "Брелок с янтарём",
    ru: "Ключи с янтарём — наш дом в Риге!",
    en: "Keys with amber — our home in Riga!",
    a11y: "Two old brass keys on a keyring with a small drop of golden amber hang on a hook by the door.",
    image: p("reward-5"),
    steps: ["Ilze's keys hang on a keyring with a piece of amber.", "“Таких брелоков у меня много — у меня янтарная лавка на рынке,” she says.", "Murzik holds the amber up to the light. It glows like honey.", "Asya's note from Krakow said: “Еду к морю, за янтарём.” Murzik has a feeling."],
    bridge: "On Saturday Ilze invites them to her amber stall at the Central Market.",
  },
};

export const riga6: Lesson = {
  id: "a2-riga-6",
  level: "A2",
  cityId: "riga",
  number: 6,
  title: "The Amber Stall",
  minutes: 8,
  goals: ["Talk about materials and souvenirs", "Understand a family memory", "Compare things: старше, красивее, дороже"],
  vocabNote: "Янтарь — amber. Янтарный — made of amber. Кулон — pendant. Мама Илзе продавала янтарь тридцать лет назад.",
  vocab: [
    v("ri6-1", "Центральный рынок", "the Central Market", "Huge old hangars with stalls of fish, bread and amber.", "Listen to Центральный рынок", p("6-1")),
    v("ri6-2", "янтарный кулон", "amber pendant", "A drop-shaped amber pendant on a thin chain.", "Listen to янтарный кулон", p("6-2")),
    v("ri6-3", "внутри", "inside", "A piece of amber with a tiny leaf inside.", "Listen to внутри", p("6-3")),
    v("ri6-4", "Он старше, чем все города.", "It's older than all the cities.", "Ilze holds amber up to the light and smiles.", "Listen to Он старше, чем все города", p("6-4")),
    v("ri6-5", "миллионы лет", "millions of years", "An old forest, then the sea, then a piece of amber.", "Listen to миллионы лет", p("6-5")),
    v("ri6-6", "рисовала на янтаре", "painted on amber", "Tiny paintings of the sea on flat amber pieces.", "Listen to рисовала на янтаре", p("6-6")),
    v("ri6-7", "мама Илзе", "Ilze's mother", "An old photo: a woman behind an amber stall.", "Listen to мама Илзе", p("6-7")),
    v("ri6-8", "Она уехала на север.", "She went north.", "A map arrow from Riga north to Tallinn.", "Listen to Она уехала на север", p("6-8")),
  ],
  letters: [
    letter("кулон", "From French: ku-LON. Stress on the end.", "янтарный кулон", "amber pendant"),
  ],
  dialogue: {
    title: "At the market",
    note: "Илзе is a Latvian name. In Russian it doesn't change: у Илзе, с Илзе.",
    lines: [
      line("ilze", "Вот моя лавка. Янтарь — это смола древних деревьев. Он старше, чем все города.", "Here's my stall. Amber is resin from ancient trees. It's older than all the cities."),
      line("murzik", "А внутри — листик!", "And there's a little leaf inside!"),
      line("ilze", "Тридцать лет назад здесь работала моя мама. И одна рыжая кошка рисовала у неё на янтаре.", "Thirty years ago my mother worked here. And a ginger cat painted on amber at her stall."),
      line("murzik", "Её звали Ася? Она приехала из Кракова?", "Was her name Asya? Did she come from Krakow?"),
      line("ilze", "Да, из Кракова! Мама говорила: её картинки были красивее, чем сам янтарь.", "Yes, from Krakow! My mother said her pictures were more beautiful than the amber itself."),
      line("lena", "А куда она уехала?", "And where did she go?"),
      line("ilze", "На север, в Таллин. Она сказала: «Хочу увидеть белые ночи».", "North, to Tallinn. She said: “I want to see the white nights.”"),
    ],
    gist: choice("ri6-d1", "What did Asya do at the market?", [
      ["She painted on amber.", true],
      ["She sold fish.", false],
      ["She was a guide.", false],
    ]),
  },
  grammar: [
    {
      title: "Comparatives with the genitive",
      paragraphs: [
        "Instead of чем you can use the genitive: старше всех городов = старше, чем все города; красивее янтаря = красивее, чем янтарь.",
        "Useful: старше (older — of people and things), моложе (younger), младше (younger — of siblings), красивее (more beautiful), дороже (more expensive).",
      ],
      examples: [
        { ru: "Моя сестра старше меня.", en: "My sister is older than me." },
        { ru: "Янтарь дороже стекла.", en: "Amber is more expensive than glass." },
      ],
    },
  ],
  tasks: [
    listen("ri6-t1", "Listen. Who worked at the stall thirty years ago?", "Тридцать лет назад здесь работала моя мама.", [
      ["Ilze's mother.", true],
      ["Ilze herself.", false],
      ["Lena.", false],
    ]),
    choice("ri6-t2", "Detective! Where did Asya go next?", [
      ["North, to Tallinn.", true],
      ["Back to Krakow.", false],
      ["South, to the sea.", false],
    ], { skill: "listening" }),
    fill("ri6-t3", "Choose the right form: “My sister is older than me.”", "Моя сестра старше", ".", "меня", ["меня", "я", "мне"], { skill: "grammar" }),
    read("ri6-t4", "In Ilze's old box there's a tiny painted amber and a note. What does the note say?", "Илзе и её маме — на память.\nЕду на север, смотреть белые ночи.\nА.", [
      ["She's going to see the white nights.", true],
      ["She's going home.", false],
      ["She'll come back next year.", false],
    ]),
    match("ri6-t5", "Match the Russian with the English.", [
      ["янтарный кулон", "amber pendant"],
      ["внутри", "inside"],
      ["миллионы лет", "millions of years"],
      ["Центральный рынок", "the Central Market"],
    ], { skill: "words" }),
    tf("ri6-t6", "Ilze's mother said Asya's pictures were more beautiful than the amber.", true, "True or false?", { skill: "listening" }),
    speak("ri6-t7", "Кто в вашей семье старше всех?", "Старше всех моя бабушка. Ей восемьдесят лет. А младше всех — мой брат.", "My grandmother is the oldest. She's eighty. And my brother is the youngest.", {
      help: "Say out loud who's the oldest and youngest in your family.",
    }),
  ],
  reward: {
    itemId: "ryebread",
    itemName: "Basket of rye bread",
    itemNameRu: "Корзинка ржаного хлеба",
    ru: "Чёрный хлеб — как дома!",
    en: "Rye bread — just like at home!",
    a11y: "A wicker basket with a dark round loaf of Latvian rye bread, wrapped in a linen cloth, stands on the kitchen table.",
    image: p("reward-6"),
    steps: ["After the amber hall, Lena takes them to the bread hall.", "She buys a dark round loaf of rye bread.", "“Самый вкусный хлеб в Прибалтике,” she says.", "Murzik eats it with butter. It tastes like home."],
    bridge: "Ilze has something else for Murzik — from her mother's old box. And Lena has a surprise of her own.",
  },
};

export const riga7: Lesson = {
  id: "a2-riga-7",
  level: "A2",
  cityId: "riga",
  number: 7,
  title: "Riga Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Compare and choose", "Review everything from Riga"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Riga.",
  vocab: [
    v("ri7-1", "Это от мамы.", "This is from my mother.", "Ilze holds out a small velvet box.", "Listen to Это от мамы", p("7-1")),
    v("ri7-2", "на счастье", "for luck", "An amber pendant catches the light.", "Listen to на счастье", p("7-2")),
    v("ri7-3", "Я поеду с вами.", "I'll go with you.", "Lena holds up her own train ticket.", "Listen to Я поеду с вами", p("7-3")),
    v("ri7-4", "Моя бабушка живёт в Таллине.", "My grandmother lives in Tallinn.", "Lena shows a photo of an old lady with white hair.", "Listen to Моя бабушка живёт в Таллине", p("7-4")),
    v("ri7-5", "вернуть ключи", "to return the keys", "Tom hands Ilze the keys with the amber keyring.", "Listen to вернуть ключи", p("7-5")),
    v("ri7-6", "Лучше поздно, чем никогда.", "Better late than never.", "Tom runs for the bus, laughing.", "Listen to Лучше поздно, чем никогда", p("7-6")),
    v("ri7-7", "автобус в Таллин", "the bus to Tallinn", "A blue coach at the bus station, «Tallinn» on the front.", "Listen to автобус в Таллин", p("7-7")),
    v("ri7-8", "четыре с половиной часа", "four and a half hours", "A clock with an arrow running from 9:00 to 13:30.", "Listen to четыре с половиной часа", p("7-8")),
  ],
  letters: [
    letter("счастье", "сч sounds like a long щ: SHSHAS-tye.", "на счастье", "for luck"),
  ],
  dialogue: {
    title: "Goodbye, Riga",
    note: "Беречь — to look after, treasure. На счастье — for luck. Лучше поздно, чем никогда — a common saying.",
    lines: [
      line("ilze", "Это от мамы. Янтарный кулон. Ася нарисовала на нём море.", "This is from my mother. An amber pendant. Asya painted the sea on it."),
      line("murzik", "Правда? Спасибо, Илзе! Я буду его беречь.", "Really? Thank you, Ilze! I'll take good care of it."),
      line("ilze", "Это на счастье. Найди её.", "It's for luck. Find her."),
      line("murzik", "Ася уехала тридцать лет назад… Ну, лучше поздно, чем никогда!", "Asya left thirty years ago… Well, better late than never!"),
      line("lena", "А я поеду с вами! Моя бабушка живёт в Таллине.", "And I'll go with you! My grandmother lives in Tallinn."),
      line("tom", "Отлично! Автобус в Таллин через час.", "Great! The bus to Tallinn is in an hour."),
      line("lena", "Ехать четыре с половиной часа. Я расскажу вам всё про Таллин!", "It takes four and a half hours. I'll tell you everything about Tallinn!"),
    ],
    gist: choice("ri7-d1", "Why is Lena going to Tallinn?", [
      ["Her grandmother lives there.", true],
      ["She has a new job there.", false],
      ["She wants to buy amber.", false],
    ]),
  },
  grammar: [
    {
      title: "Riga review",
      paragraphs: [
        "Flats: снять квартиру, однокомнатная, на третьем этаже, с балконом, залог, договор, ключи. Здесь есть…? — Есть. / Нет + genitive.",
        "Comparing: больше, дешевле, светлее, ближе, тише, лучше (чем … / + genitive). Superlative: самый дешёвый, самая светлая, лучший.",
      ],
      examples: [
        { ru: "Эта квартира больше и светлее, зато та дешевле.", en: "This flat is bigger and brighter, but that one is cheaper." },
        { ru: "Это самая лучшая квартира в старом городе.", en: "This is the very best flat in the old town." },
      ],
    },
  ],
  tasks: [
    listen("ri7-t1", "Audio story: Lena talks about her work. Listen. What does she like most about her job?", "Я работаю гидом уже пять лет. Я показываю туристам старый город, рынок и самые красивые улицы. Летом работы больше, зимой меньше. Самое интересное в моей работе — люди. Каждый день я знакомлюсь с кем-то новым. Например, с рыжим котом и его другом Томом!", [
      ["The people she meets.", true],
      ["The old buildings.", false],
      ["The winter holidays.", false],
    ]),
    choice("ri7-t2", "In Lena's story, when does she have more work?", [
      ["In summer.", true],
      ["In winter.", false],
      ["The same all year.", false],
    ], { skill: "listening" }),
    choice("ri7-t3", "“This flat is bigger, but that one is cheaper.” Which is right?", [
      ["Эта квартира больше, зато та дешевле.", true],
      ["Эта квартира больше, зато та дешёвее.", false],
      ["Эта квартира большее, зато та дешевле.", false],
    ], { skill: "grammar" }),
    read("ri7-t4", "Read the bus ticket. When do they arrive in Tallinn?", "РИГА — ТАЛЛИН\nОтправление: 09:00\nПрибытие: 13:30\nМеста 12, 13, 14", [
      ["At half past one.", true],
      ["At nine.", false],
      ["At half past four.", false],
    ]),
    script("ri7-t5", "Say goodbye to Ilze.", [
      { speaker: "Ilze", text: "Вот вам кулон — на счастье." },
      { speaker: "You", answer: "Спасибо! Это самый лучший подарок.", options: ["Спасибо! Это самый лучший подарок.", "Спасибо! Это самая лучший подарок.", "Спасибо! Здесь нет подвала."] },
      { speaker: "Ilze", text: "Ключи не забыли?" },
      { speaker: "You", answer: "Нет, вот ключи. Спасибо за квартиру!", options: ["Нет, вот ключи. Спасибо за квартиру!", "Нет, вот ключей.", "Нет, без домашних животных."] },
    ], { skill: "review" }),
    match("ri7-t6", "Riga review: match the Russian with the English.", [
      ["залог", "deposit"],
      ["спальня", "bedroom"],
      ["самый дешёвый", "the cheapest"],
      ["договор", "contract"],
    ], { skill: "review" }),
    speak("ri7-t7", "Опиши свою идеальную квартиру.", "Моя идеальная квартира — светлая, с балконом, ближе к центру, чем сейчас. Не самая большая, зато самая уютная.", "My ideal flat is bright, with a balcony, closer to the centre than now. Not the biggest, but the cosiest.", {
      help: "Describe your ideal flat out loud: больше, ближе, самый…",
    }),
  ],
  reward: {
    itemId: "amberpendant",
    itemName: "Amber pendant",
    itemNameRu: "Янтарный кулон",
    ru: "Кулон с морем, которое нарисовала Ася!",
    en: "A pendant with the sea that Asya painted!",
    a11y: "A drop-shaped amber pendant on a thin chain; inside the amber, a tiny painted sea with a little boat.",
    image: p("reward-7"),
    steps: ["Ilze's present is an amber pendant from her mother's stall.", "On it — a tiny sea and a boat, painted by Asya.", "Murzik holds it up to the window. The sea glows gold.", "He puts it on. Now a piece of Asya travels with him."],
  },
};

export const rigaLessons: Lesson[] = [riga1, riga2, riga3, riga4, riga5, riga6, riga7];
