import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Krakow · «Потерялся человек» · A2 lessons 1–7.
 * Murzik and Tom rent a room under the roof of an old house near the main square. On the first day Tom gets
 * lost in the crowd, and Murzik has to describe him to strangers. Kasia (about 22) studies Russian at the
 * university and works in a souvenir stall in the old Cloth Hall; she helps. Her grandfather, pan Janek
 * (about 80), carves wooden dragons. Thirty years ago a ginger cat drew the dragon for him — then left
 * for the Baltic to look for amber, in Riga.
 * Grammar: the accusative of people and animals — вижу Тома, ищу друга, жду сестру, знаю Касю;
 * describing people: высокий, с бородой, в очках, в синей куртке; похож на кого.
 */

const p = (name: string) => pic(`krakow/${name}`);

export const krakow1: Lesson = {
  id: "a2-krakow-1",
  level: "A2",
  cityId: "krakow",
  number: 1,
  title: "What Does He Look Like?",
  minutes: 8,
  goals: ["Describe someone's appearance", "Say с бородой, в очках, светлые волосы", "Ask: Вы не видели моего друга?"],
  vocabNote: "To describe a person: с + instrumental for things they have (с бородой — with a beard), в + prepositional for things they wear (в очках — in glasses).",
  vocab: [
    v("kr1-1", "Я потерял(а) друга.", "I've lost my friend.", "Murzik alone in the crowded market square, looking around.", "Listen to Я потерял друга", p("1-1")),
    v("kr1-2", "Вы не видели моего друга?", "Have you seen my friend?", "Murzik asks a woman with a pram.", "Listen to Вы не видели моего друга", p("1-2")),
    v("kr1-3", "худой", "thin, slim", "A thin man in a long coat.", "Listen to худой", p("1-3")),
    v("kr1-4", "светлые волосы", "fair hair", "Tom's fair, slightly messy hair.", "Listen to светлые волосы", p("1-4")),
    v("kr1-5", "с бородой", "with a beard", "A man with a short beard.", "Listen to с бородой", p("1-5")),
    v("kr1-6", "в очках", "wearing glasses", "Tom in round glasses.", "Listen to в очках", p("1-6")),
    v("kr1-7", "лет тридцати", "about thirty years old", "A smiling man of about thirty.", "Listen to лет тридцати", p("1-7")),
    v("kr1-8", "Он примерно такого роста.", "He's about this tall.", "Murzik reaches up high with his paw.", "Listen to Он примерно такого роста", p("1-8")),
  ],
  letters: [
    letter("бородой", "Three о, only the last is stressed: ba-ra-DOY.", "с бородой", "with a beard"),
    letter("моего друга", "г in -ого / -его sounds like в: ma-ye-VO DRU-ga.", "Вы не видели моего друга?", "Have you seen my friend?"),
  ],
  dialogue: {
    title: "In the market square",
    note: "Kasia studies Russian at the university. She works at a souvenir stall in the old Cloth Hall.",
    lines: [
      line("murzik", "Извините, вы не видели моего друга? Я его потерял!", "Excuse me, have you seen my friend? I've lost him!"),
      line("kasia", "Как он выглядит?", "What does he look like?"),
      line("murzik", "Высокий, худой, лет тридцати. Светлые волосы.", "Tall, thin, about thirty. Fair hair."),
      line("kasia", "С бородой?", "With a beard?"),
      line("murzik", "Нет, без бороды. Но в очках. Он примерно такого роста!", "No, no beard. But he wears glasses. He's about this tall!"),
      line("kasia", "Не волнуйся. Я тебе помогу. Меня зовут Кася.", "Don't worry. I'll help you. My name is Kasia."),
    ],
    gist: choice("kr1-d1", "What does Tom look like?", [
      ["Tall, thin, fair hair, glasses, no beard.", true],
      ["Short, with a beard.", false],
      ["Dark hair, no glasses.", false],
    ]),
  },
  grammar: [
    {
      title: "Describing a person",
      paragraphs: [
        "Size and build: высокий / невысокий, худой / полный. Hair: светлые, тёмные, рыжие волосы. Age: мужчина лет тридцати (a man of about 30); or Ему лет тридцать (he's about 30).",
        "Has: с бородой, с усами (moustache), с рюкзаком. Wears: в очках, в шапке. Without: без бороды, без очков (genitive).",
      ],
      examples: [
        { ru: "Это невысокая женщина с тёмными волосами.", en: "She's a short woman with dark hair." },
        { ru: "Он в очках, но без бороды.", en: "He wears glasses but has no beard." },
      ],
    },
  ],
  tasks: [
    listen("kr1-t1", "Listen. How old is Tom, more or less?", "Высокий, худой, лет тридцати. Светлые волосы.", [
      ["About thirty.", true],
      ["About thirteen.", false],
      ["About fifty.", false],
    ]),
    choice("kr1-t2", "“A man with a beard.” Which is right?", [
      ["мужчина с бородой", true],
      ["мужчина в бороде", false],
      ["мужчина с борода", false],
    ], { skill: "grammar" }),
    fill("kr1-t3", "Choose the right form: “He wears glasses.”", "Он в", ".", "очках", ["очках", "очки", "очками"], { skill: "grammar" }),
    read("kr1-t4", "Read the notice at the tourist office. Who is lost?", "ПОТЕРЯЛСЯ РЕБЁНОК!\nМальчик лет семи, светлые волосы, в красной кепке.\nМама ждёт его у фонтана.", [
      ["A boy of about seven in a red cap.", true],
      ["A tall man with glasses.", false],
      ["A ginger cat.", false],
    ]),
    match("kr1-t5", "Match the Russian with the English.", [
      ["худой", "thin"],
      ["с бородой", "with a beard"],
      ["в очках", "wearing glasses"],
      ["светлые волосы", "fair hair"],
    ], { skill: "words" }),
    tf("kr1-t6", "Без бороды means “with a beard”.", false, "True or false?", { skill: "words" }),
    speak("kr1-t7", "Как выглядит твой лучший друг?", "Он высокий, с тёмными волосами и в очках. Ему лет тридцать.", "He's tall, with dark hair and glasses. He's about thirty.", {
      help: "Describe your best friend out loud.",
    }),
  ],
  reward: {
    itemId: "whistle",
    itemName: "Whistle",
    itemNameRu: "Свисток",
    ru: "Свисток! Теперь Том меня услышит!",
    en: "A whistle! Now Tom will hear me!",
    a11y: "A small silver whistle on a red cord hangs on a hook by the door of an attic room with a sloping wooden ceiling.",
    image: p("reward-1"),
    steps: ["Their room is under the roof of an old house near the main square.", "Kasia gives Murzik a silver whistle from her stall.", "“Если опять потеряешь друга — свисти!”", "The whistle hangs by the door, ready."],
    bridge: "But Tom is still lost. Kasia asks: “Во что он одет?” — What is he wearing?",
  },
};

export const krakow2: Lesson = {
  id: "a2-krakow-2",
  level: "A2",
  cityId: "krakow",
  number: 2,
  title: "What Is He Wearing?",
  minutes: 8,
  goals: ["Describe clothes", "Say на нём / на ней — he's / she's wearing", "Say Я ищу высокого мужчину… (the accusative)"],
  vocabNote: "Во что он одет? — What is he wearing? Answer with на нём (on him) + the clothes, or он в + the clothes: на нём синяя куртка = он в синей куртке.",
  vocab: [
    v("kr2-1", "Во что он одет?", "What is he wearing?", "Kasia writes in a notebook, listening to Murzik.", "Listen to Во что он одет", p("2-1")),
    v("kr2-2", "На нём синяя куртка.", "He's wearing a blue jacket.", "Tom's blue waterproof jacket.", "Listen to На нём синяя куртка", p("2-2")),
    v("kr2-3", "в клетчатой кепке", "in a checked cap", "A grey checked cap.", "Listen to в клетчатой кепке", p("2-3")),
    v("kr2-4", "с рюкзаком", "with a rucksack", "A big green rucksack with a camera on the side.", "Listen to с рюкзаком", p("2-4")),
    v("kr2-5", "кроссовки", "trainers", "White trainers, one lace undone.", "Listen to кроссовки", p("2-5")),
    v("kr2-6", "Я ищу мужчину…", "I'm looking for a man…", "Murzik shows his drawing of Tom to a policeman.", "Listen to Я ищу мужчину", p("2-6")),
    v("kr2-7", "Он фотографировал башню.", "He was photographing the tower.", "St Mary's church: two brick towers of different heights.", "Listen to Он фотографировал башню", p("2-7")),
    v("kr2-8", "Я видел(а) такого!", "I've seen someone like that!", "A flower seller points across the square.", "Listen to Я видел такого", p("2-8")),
  ],
  letters: [
    letter("одет", "a-DYET: the д is soft before е, the first о sounds like а.", "Во что он одет?", "What is he wearing?"),
    letter("рюкзак", "From German: ryuk-ZAK. Stress on the end.", "с рюкзаком", "with a rucksack"),
  ],
  dialogue: {
    title: "The search",
    note: "Мужчина is masculine, though it ends in -а. In the accusative it becomes мужчину.",
    lines: [
      line("kasia", "Во что он одет?", "What is he wearing?"),
      line("murzik", "На нём синяя куртка и кроссовки. И он в клетчатой кепке, с рюкзаком.", "He's wearing a blue jacket and trainers. And he's in a checked cap, with a rucksack."),
      line("kasia", "Извините! Мы ищем высокого мужчину в синей куртке.", "Excuse me! We're looking for a tall man in a blue jacket."),
      line("seller", "С рюкзаком? Я видела такого! Он фотографировал башню.", "With a rucksack? I've seen someone like that! He was photographing the tower."),
      line("kasia", "Мариацкий костёл! Это там. Идём!", "St Mary's church! It's over there. Let's go!"),
    ],
    gist: choice("kr2-d1", "Where did the flower seller see Tom?", [
      ["By the church tower, taking photos.", true],
      ["In the Cloth Hall.", false],
      ["At the station.", false],
    ]),
  },
  grammar: [
    {
      title: "На нём, в чём",
      paragraphs: [
        "На нём / на ней + clothes in the nominative: На ней красное платье. Or в + prepositional: Она в красном платье.",
        "Looking for someone: искать + accusative. Masculine people and animals ending in a consonant take -а / -я (Тома, брата); nouns in -а / -я, even masculine ones, take -у / -ю (мужчину, папу, дедушку). Adjectives: высокого, молодого.",
      ],
      examples: [
        { ru: "На ней белая шапка и чёрное пальто.", en: "She's wearing a white hat and a black coat." },
        { ru: "Я ищу молодого человека в очках.", en: "I'm looking for a young man in glasses." },
      ],
    },
  ],
  tasks: [
    listen("kr2-t1", "Listen. What is Tom wearing on his head?", "И он в клетчатой кепке, с рюкзаком.", [
      ["A checked cap.", true],
      ["A woolly hat.", false],
      ["Nothing.", false],
    ]),
    choice("kr2-t2", "“She's wearing a red dress.” Which is right?", [
      ["Она в красном платье.", true],
      ["Она в красное платье.", false],
      ["На ней красном платье.", false],
    ], { skill: "grammar" }),
    fill("kr2-t3", "Choose the right form: “I'm looking for a young man.”", "Я ищу молодого", ".", "человека", ["человека", "человек", "человеку"], { skill: "grammar" }),
    read("kr2-t4", "Read Murzik's note for the police. What colour is Tom's rucksack?", "Том, 30 лет.\nВысокий, худой, в очках.\nСиняя куртка, клетчатая кепка.\nЗелёный рюкзак, на нём фотоаппарат.", [
      ["Green.", true],
      ["Blue.", false],
      ["Checked.", false],
    ]),
    match("kr2-t5", "Match the Russian with the English.", [
      ["кроссовки", "trainers"],
      ["с рюкзаком", "with a rucksack"],
      ["в клетчатой кепке", "in a checked cap"],
      ["Во что он одет?", "What is he wearing?"],
    ], { skill: "words" }),
    script("kr2-t6", "Your friend is lost. Ask a police officer.", [
      { speaker: "Officer", text: "Кого вы ищете?" },
      { speaker: "You", answer: "Я ищу подругу. Она невысокая, с тёмными волосами.", options: ["Я ищу подругу. Она невысокая, с тёмными волосами.", "Я ищу подруга.", "Я ищу кроссовки."] },
      { speaker: "Officer", text: "Во что она одета?" },
      { speaker: "You", answer: "На ней жёлтая куртка и белая шапка.", options: ["На ней жёлтая куртка и белая шапка.", "На ней жёлтую куртку.", "Она в жёлтая куртка."] },
    ], { skill: "speaking" }),
    speak("kr2-t7", "Во что ты сегодня одет(а)?", "Сегодня на мне синие джинсы, белая футболка и кроссовки.", "Today I'm wearing blue jeans, a white T-shirt and trainers.", {
      help: "Say out loud what you're wearing today: на мне…",
    }),
  ],
  reward: {
    itemId: "brightbeanie",
    itemName: "Bright orange beanie",
    itemNameRu: "Ярко-оранжевая шапка",
    ru: "Оранжевая шапка — для Тома!",
    en: "An orange beanie — for Tom!",
    a11y: "A bright orange woolly beanie with a pompom hangs on the hook next to the whistle.",
    image: p("reward-2"),
    steps: ["Kasia sells woolly hats at her stall.", "Murzik buys the brightest one — orange, with a pompom.", "“Теперь я увижу Тома в любой толпе!”", "Murzik hides it in his bag — it's for Tom, when they find him."],
    bridge: "They run to the church tower. Every hour a trumpeter plays from the top. And below — a familiar cap…",
  },
};

export const krakow3: Lesson = {
  id: "a2-krakow-3",
  level: "A2",
  cityId: "krakow",
  number: 3,
  title: "I Can See Tom!",
  minutes: 8,
  goals: ["Use the accusative of people: вижу Тома, жду Касю", "Use verbs видеть, ждать, искать, встретить кого", "Say where to meet if you get lost"],
  vocabNote: "When a man or a male animal is the object, the accusative looks like the genitive: я вижу Тома, кота, брата. Feminine nouns take -у / -ю: жду Касю, маму.",
  vocab: [
    v("kr3-1", "Я вижу Тома!", "I can see Tom!", "Murzik jumps up and points at a man in a checked cap.", "Listen to Я вижу Тома", p("3-1")),
    v("kr3-2", "трубач", "trumpeter", "A trumpeter plays from a window high in the tower.", "Listen to трубач", p("3-2")),
    v("kr3-3", "каждый час", "every hour", "A clock face with the trumpeter in the tower window.", "Listen to каждый час", p("3-3")),
    v("kr3-4", "Я тебя искал(а)!", "I was looking for you!", "Murzik hugs Tom's leg.", "Listen to Я тебя искал", p("3-4")),
    v("kr3-5", "Я ждал(а) тебя здесь.", "I was waiting for you here.", "Tom sits on the steps of the church with his camera.", "Listen to Я ждал тебя здесь", p("3-5")),
    v("kr3-6", "место встречи", "meeting point", "A big statue in the square with people waiting around it.", "Listen to место встречи", p("3-6")),
    v("kr3-7", "Если потеряемся…", "If we get lost…", "Kasia draws a map on a napkin.", "Listen to Если потеряемся", p("3-7")),
    v("kr3-8", "Познакомься, это Кася.", "Meet Kasia. (This is Kasia.)", "Murzik introduces Kasia to Tom.", "Listen to Познакомься, это Кася", p("3-8")),
  ],
  letters: [
    letter("трубач", "tru-BACH. ч is always soft.", "трубач", "trumpeter"),
    letter("вижу", "In вижу the ж is always hard: VEE-zhu.", "Я вижу Тома!", "I can see Tom!"),
  ],
  dialogue: {
    title: "At the tower",
    note: "The trumpet call from the tower stops in the middle — an old Krakow tradition.",
    lines: [
      line("murzik", "Смотри! Я вижу Тома! Вон там, у башни!", "Look! I can see Tom! Over there, by the tower!"),
      line("tom", "Мурзик! Я ждал тебя здесь. Я слушал трубача.", "Murzik! I was waiting for you here. I was listening to the trumpeter."),
      line("murzik", "А я тебя искал по всей площади!", "And I was looking for you all over the square!"),
      line("murzik", "Познакомься, это Кася. Она мне помогла.", "Meet Kasia. She helped me."),
      line("tom", "Очень приятно, Кася! Спасибо!", "Very nice to meet you, Kasia! Thank you!"),
      line("kasia", "Если потеряетесь опять — место встречи здесь, у башни. Трубач играет каждый час!", "If you get lost again, the meeting point is here, by the tower. The trumpeter plays every hour!"),
    ],
    gist: choice("kr3-d1", "What was Tom doing while Murzik looked for him?", [
      ["Waiting by the tower and listening to the trumpeter.", true],
      ["Looking for Murzik in the Cloth Hall.", false],
      ["Talking to the police.", false],
    ]),
  },
  grammar: [
    {
      title: "The accusative of people and animals",
      paragraphs: [
        "Masculine people and animals take -а / -я in the accusative: вижу Тома, жду брата, люблю кота. Feminine -а / -я → -у / -ю: жду Касю, вижу маму.",
        "Pronouns: меня, тебя, его, её, нас, вас, их. Verbs: видеть, ждать, искать, встретить, знать, любить, позвать кого.",
      ],
      examples: [
        { ru: "Я жду сестру у фонтана.", en: "I'm waiting for my sister by the fountain." },
        { ru: "Ты знаешь этого человека?", en: "Do you know this person?" },
      ],
    },
  ],
  tasks: [
    listen("kr3-t1", "Listen. Where is the meeting point?", "Если потеряетесь опять — место встречи здесь, у башни.", [
      ["By the tower.", true],
      ["By the fountain.", false],
      ["At Kasia's stall.", false],
    ]),
    choice("kr3-t2", "“I'm waiting for my brother.” Which is right?", [
      ["Я жду брата.", true],
      ["Я жду брат.", false],
      ["Я жду брату.", false],
    ], { skill: "grammar" }),
    fill("kr3-t3", "Choose the right form: “I can see Kasia!”", "Я вижу", "!", "Касю", ["Касю", "Кася", "Каси"], { skill: "grammar" }),
    read("kr3-t4", "Read Kasia's napkin map. What should they do if they get lost?", "Если потеряетесь:\n1. Не бегайте!\n2. Идите к башне.\n3. Ждите друг друга, когда играет трубач.", [
      ["Go to the tower and wait.", true],
      ["Run around the square.", false],
      ["Go home.", false],
    ]),
    match("kr3-t5", "Match the Russian with the English.", [
      ["трубач", "trumpeter"],
      ["каждый час", "every hour"],
      ["место встречи", "meeting point"],
      ["Я тебя искал(а)!", "I was looking for you!"],
    ], { skill: "words" }),
    tf("kr3-t6", "In «Я вижу кота» the word кот takes the ending -а because it's an animal.", true, "True or false?", { skill: "grammar" }),
    speak("kr3-t7", "Кого ты ждёшь?", "Я жду друга. Мы встречаемся у фонтана.", "I'm waiting for a friend. We're meeting by the fountain.", {
      help: "Say out loud who you're waiting for and where.",
    }),
  ],
  reward: {
    itemId: "toytrumpet",
    itemName: "Little brass trumpet",
    itemNameRu: "Маленькая труба",
    ru: "Труба — как у трубача!",
    en: "A trumpet — like the trumpeter's!",
    a11y: "A small brass trumpet with a red-and-white ribbon lies on the windowsill; through the window, the church tower.",
    image: p("reward-3"),
    steps: ["At Kasia's stall there are little brass trumpets.", "Tom buys one for Murzik: “Чтобы и я мог тебя найти!”", "Murzik tries to play — the neighbours open their windows.", "The trumpet goes on the windowsill. Quietly."],
    bridge: "In the evening Kasia shows them her family photos. “Угадайте, на кого я похожа?”",
  },
};

export const krakow4: Lesson = {
  id: "a2-krakow-4",
  level: "A2",
  cityId: "krakow",
  number: 4,
  title: "Who Do You Look Like?",
  minutes: 8,
  goals: ["Talk about character", "Say похож на кого — looks like", "Describe family in photos"],
  vocabNote: "Похож на + accusative — looks like: Я похожа на маму. Он похож на дедушку.",
  vocab: [
    v("kr4-1", "Ты похож(а) на маму?", "Do you look like your mum?", "Kasia holds a photo next to her face; same smile.", "Listen to Ты похож на маму", p("4-1")),
    v("kr4-2", "Я похожа на папу.", "I look like my dad. (a woman says)", "Kasia and her dad in a photo — same nose, same eyes.", "Listen to Я похожа на папу", p("4-2")),
    v("kr4-3", "общительный", "sociable, outgoing", "Kasia's brother chatting with a group of friends.", "Listen to общительный", p("4-3")),
    v("kr4-4", "спокойный", "calm", "Kasia's mother reading calmly while kids run around.", "Listen to спокойный", p("4-4")),
    v("kr4-5", "рассеянный", "absent-minded", "Tom wearing his glasses on his forehead and looking for them.", "Listen to рассеянный", p("4-5")),
    v("kr4-6", "у него золотые руки", "he's good with his hands (golden hands)", "Old hands carving wood.", "Listen to у него золотые руки", p("4-6")),
    v("kr4-7", "характер", "character, personality", "Two cats: one jumping, one sleeping.", "Listen to характер", p("4-7")),
    v("kr4-8", "Он резчик по дереву.", "He's a woodcarver.", "Pan Janek in a workshop full of wooden figures.", "Listen to Он резчик по дереву", p("4-8")),
  ],
  letters: [
    letter("рассеянный", "Double с and double н: ras-SYE-ya-ny. Stress on СЕ.", "Том рассеянный.", "Tom is absent-minded."),
  ],
  dialogue: {
    title: "Family photos",
    note: "Пан — Mr in Polish. Kasia's grandfather is called pan Janek.",
    lines: [
      line("kasia", "Это моя семья. Угадайте, на кого я похожа?", "This is my family. Guess who I look like?"),
      line("murzik", "На папу! Такие же глаза.", "Your dad! The same eyes."),
      line("kasia", "Да. А характер у меня мамин — я спокойная. А брат весь в папу — общительный.", "Yes. But I have my mum's character — I'm calm. My brother is just like Dad — outgoing."),
      line("tom", "А это кто? Добрый дедушка с бородой.", "And who's this? A kind grandad with a beard."),
      line("kasia", "Это дедушка Янек. Он резчик по дереву. У него золотые руки!", "That's Grandad Janek. He's a woodcarver. He's so good with his hands!"),
      line("murzik", "А на кого похож Том? На рассеянного профессора!", "And who does Tom look like? An absent-minded professor!"),
    ],
    gist: choice("kr4-d1", "Who does Kasia look like?", [
      ["Her dad (but has her mum's character).", true],
      ["Her grandad.", false],
      ["Her mum, in every way.", false],
    ]),
  },
  grammar: [
    {
      title: "Похож на + the accusative",
      paragraphs: [
        "Похож (m) / похожа (f) / похожи (pl) на кого: Он похож на отца. Она похожа на бабушку. Они похожи на маму.",
        "Character: Какой он человек? — Он добрый, весёлый, спокойный. Какой у неё характер? — У неё лёгкий характер.",
      ],
      examples: [
        { ru: "Мой брат похож на дедушку.", en: "My brother looks like our grandad." },
        { ru: "Какой он человек? — Добрый и немного рассеянный.", en: "What's he like? — Kind and a bit absent-minded." },
      ],
    },
  ],
  tasks: [
    listen("kr4-t1", "Listen. What is Kasia's grandad's job?", "Это дедушка Янек. Он резчик по дереву.", [
      ["He's a woodcarver.", true],
      ["He's a trumpeter.", false],
      ["He's a professor.", false],
    ]),
    choice("kr4-t2", "“My brother looks like our grandad.” Which is right?", [
      ["Мой брат похож на дедушку.", true],
      ["Мой брат похож дедушка.", false],
      ["Мой брат похож на дедушке.", false],
    ], { skill: "grammar" }),
    fill("kr4-t3", "Choose the right form: “She looks like her mum.”", "Она", "на маму.", "похожа", ["похожа", "похож", "похожи"], { skill: "grammar" }),
    read("kr4-t4", "Read the caption on the back of a photo. Who is in it?", "Краков, 1995.\nДедушка Янек в мастерской.\nНа полке — его первый дракон.", [
      ["Grandad Janek in his workshop.", true],
      ["Kasia and her mum.", false],
      ["Tom by the tower.", false],
    ]),
    match("kr4-t5", "Match the Russian with the English.", [
      ["общительный", "sociable"],
      ["спокойный", "calm"],
      ["рассеянный", "absent-minded"],
      ["характер", "character"],
    ], { skill: "words" }),
    tf("kr4-t6", "«У него золотые руки» means he's good at making things.", true, "True or false?", { skill: "words" }),
    speak("kr4-t7", "На кого ты похож(а)?", "Я похож(а) на маму, а характер у меня папин: я спокойный и добрый человек.", "I look like my mum, but I have my dad's character: I'm a calm and kind person.", {
      help: "Say out loud who you look like and what your character is like.",
    }),
  ],
  reward: {
    itemId: "photoalbum",
    itemName: "Photo album",
    itemNameRu: "Фотоальбом",
    ru: "Альбом для наших фотографий!",
    en: "An album for our photos!",
    a11y: "A thick photo album with a dark red cover and a little brass corner lies open on the table; inside, photos of Tom and Murzik in different cities.",
    image: p("reward-4"),
    steps: ["Kasia gives them an empty photo album.", "Tom prints his best photos from the trip.", "Lyon, Barcelona, Milan, Munich, Porto — and now Krakow.", "On the last page Tom glues a photo of Kasia's family."],
    bridge: "Tomorrow Kasia is taking them on a trip — deep underground. “Только не теряйтесь!”",
  },
};

export const krakow5: Lesson = {
  id: "a2-krakow-5",
  level: "A2",
  cityId: "krakow",
  number: 5,
  title: "Don't Lose the Group!",
  minutes: 8,
  goals: ["Follow a guide's instructions", "Ask who's missing: Кого не хватает?", "Use the accusative in commands: Подождите меня!"],
  vocabNote: "On a group tour: Не отставайте! — Don't fall behind! Подождите меня! — Wait for me! Позовите экскурсовода! — Call the guide!",
  vocab: [
    v("kr5-1", "соляная шахта", "salt mine", "A huge underground hall carved out of grey salt.", "Listen to соляная шахта", p("5-1")),
    v("kr5-2", "экскурсовод", "tour guide", "A guide with a little flag in front of a group.", "Listen to экскурсовод", p("5-2")),
    v("kr5-3", "Не отставайте!", "Don't fall behind!", "The guide waves to people at the back.", "Listen to Не отставайте", p("5-3")),
    v("kr5-4", "Подождите меня!", "Wait for me!", "Tom runs to catch up, camera in hand.", "Listen to Подождите меня", p("5-4")),
    v("kr5-5", "Кого не хватает?", "Who's missing?", "The guide counts heads; one gap in the line.", "Listen to Кого не хватает", p("5-5")),
    v("kr5-6", "ступеньки", "steps", "A long wooden staircase going down and down, step after step.", "Listen to ступеньки", p("5-6")),
    v("kr5-7", "Держитесь за перила!", "Hold on to the handrail!", "People holding the wooden rail on the stairs.", "Listen to Держитесь за перила", p("5-7")),
    v("kr5-8", "Всё из соли!", "Everything is made of salt!", "A chandelier and statues — all carved from salt.", "Listen to Всё из соли", p("5-8")),
  ],
  letters: [
    letter("ступеньки", "stu-PYEN'-ki: stress on ПЕ, soft н.", "ступеньки", "steps"),
    letter("экскурсовод", "eks-kur-sa-VOT: the final д sounds like т.", "экскурсовод", "tour guide"),
  ],
  dialogue: {
    title: "In the salt mine",
    note: "Не хватает кого — someone is missing (genitive). Опять — again.",
    lines: [
      line("guide", "Идём вниз по ступенькам. Держитесь за перила и не отставайте!", "We're going down the stairs. Hold on to the handrail and don't fall behind!"),
      line("murzik", "Ого! Здесь всё из соли — даже люстры!", "Wow! Everything here is made of salt — even the chandeliers!"),
      line("guide", "Так, считаем. Кого не хватает?", "Right, let's count. Who's missing?"),
      line("kasia", "Тома! Опять!", "Tom! Again!"),
      line("tom", "Подождите меня! Я фотографировал люстру!", "Wait for me! I was photographing the chandelier!"),
      line("murzik", "Том, надень оранжевую шапку. Я буду держать тебя за руку.", "Tom, put on the orange beanie. I'll hold your hand."),
    ],
    gist: choice("kr5-d1", "Why is Tom late again?", [
      ["He was photographing a chandelier.", true],
      ["He was buying salt.", false],
      ["He fell down the stairs.", false],
    ]),
  },
  grammar: [
    {
      title: "Commands with кого",
      paragraphs: [
        "Many commands take the accusative: Подождите меня! Позовите экскурсовода! Возьмите детей за руку!",
        "Держать кого за руку — to hold someone's hand. Держаться за что — to hold on to something.",
      ],
      examples: [
        { ru: "Подожди нас у входа!", en: "Wait for us at the entrance!" },
        { ru: "Позовите, пожалуйста, врача!", en: "Please call a doctor!" },
      ],
    },
  ],
  tasks: [
    listen("kr5-t1", "Listen. What does the guide say?", "Держитесь за перила и не отставайте!", [
      ["Hold the handrail and don't fall behind.", true],
      ["Don't take photos.", false],
      ["Wait at the entrance.", false],
    ]),
    choice("kr5-t2", "“Wait for us!” Which is right?", [
      ["Подождите нас!", true],
      ["Подождите мы!", false],
      ["Подождите нам!", false],
    ], { skill: "grammar" }),
    fill("kr5-t3", "Choose the right form: “Please call a doctor!”", "Позовите, пожалуйста,", "!", "врача", ["врача", "врач", "врачу"], { skill: "grammar" }),
    read("kr5-t4", "Read the ticket. How many stairs are there at the start?", "СОЛЯНАЯ ШАХТА\nЭкскурсия — 3 часа\nВ начале — 380 ступенек вниз\nНаверх — на лифте\nВнизу +14°: возьмите кофту!", [
      ["380 steps down.", true],
      ["14 steps.", false],
      ["3 steps.", false],
    ]),
    match("kr5-t5", "Match the Russian with the English.", [
      ["экскурсовод", "tour guide"],
      ["ступеньки", "steps"],
      ["Не отставайте!", "Don't fall behind!"],
      ["Кого не хватает?", "Who's missing?"],
    ], { skill: "words" }),
    script("kr5-t6", "You fell behind the group.", [
      { speaker: "Guide", text: "Все здесь? Кого не хватает?" },
      { speaker: "You", answer: "Подождите меня! Я здесь!", options: ["Подождите меня! Я здесь!", "Подождите я!", "Всё из соли!"] },
      { speaker: "Guide", text: "Не отставайте, пожалуйста." },
      { speaker: "You", answer: "Извините! Я фотографировал(а).", options: ["Извините! Я фотографировал(а).", "Извините! Держитесь за перила.", "Извините! Экскурсовод."] },
    ], { skill: "speaking" }),
    speak("kr5-t7", "Ты на экскурсии и отстал(а). Что ты крикнешь?", "Подождите меня, пожалуйста! Я сейчас!", "Please wait for me! I'm coming!", {
      help: "Shout out loud to the group so they wait for you.",
    }),
  ],
  reward: {
    itemId: "saltlamp",
    itemName: "Salt lamp",
    itemNameRu: "Соляная лампа",
    ru: "Лампа из настоящей соли!",
    en: "A lamp made of real salt!",
    a11y: "A pink-orange lamp carved from a block of salt glows softly on the bedside table under the sloping roof.",
    image: p("reward-5"),
    steps: ["At the mine shop Murzik buys a lamp made of salt.", "It glows warm orange — like Tom's beanie.", "“Теперь я найду Тома даже в темноте,” Murzik jokes.", "At night the attic glows pink."],
    bridge: "Kasia finally takes them to meet her grandfather in his workshop. Pan Janek looks at Murzik — and puts down his knife.",
  },
};

export const krakow6: Lesson = {
  id: "a2-krakow-6",
  level: "A2",
  cityId: "krakow",
  number: 6,
  title: "The Woodcarver",
  minutes: 8,
  goals: ["Understand a memory", "Talk about a legend", "Use the accusative in a story: помню её, нарисовала дракона"],
  vocabNote: "The Wawel dragon lived in a cave under the castle hill, the legend says. Today a metal dragon there breathes real fire.",
  vocab: [
    v("kr6-1", "мастерская", "workshop", "A small room full of wood shavings and carved figures.", "Listen to мастерская", p("6-1")),
    v("kr6-2", "вырезать из дерева", "to carve from wood", "Janek's hands carve a small dragon.", "Listen to вырезать из дерева", p("6-2")),
    v("kr6-3", "легенда", "legend", "An old book open at a picture of a dragon and a knight.", "Listen to легенда", p("6-3")),
    v("kr6-4", "пещера", "cave", "A dark cave entrance under a castle on a hill.", "Listen to пещера", p("6-4")),
    v("kr6-5", "дышит огнём", "breathes fire", "A metal dragon statue breathing a real flame.", "Listen to дышит огнём", p("6-5")),
    v("kr6-6", "Я её хорошо помню.", "I remember her well.", "Janek smiles, looking at an old drawing.", "Listen to Я её хорошо помню", p("6-6")),
    v("kr6-7", "по её рисунку", "from her drawing", "An old pencil drawing of a dragon next to the carved one.", "Listen to по её рисунку", p("6-7")),
    v("kr6-8", "янтарь", "amber", "A piece of golden amber with a tiny leaf inside.", "Listen to янтарь", p("6-8")),
  ],
  letters: [
    letter("пещера", "pi-SHSHYE-ra: щ is one long, soft ш (like the sh…sh in “fresh sheep”, with no gap). The first е is weak, almost и.", "в пещере", "in the cave"),
    letter("янтарь", "yan-TAR': stress on the end, soft р.", "янтарь", "amber"),
  ],
  dialogue: {
    title: "Janek remembers",
    note: "Pan Janek learned Russian at school long ago and still speaks it slowly and carefully.",
    lines: [
      line("janek", "Рыжий кот… Тридцать лет назад сюда приходила рыжая кошка. Я её хорошо помню.", "A ginger cat… Thirty years ago a ginger cat used to come here. I remember her well."),
      line("murzik", "Её звали Ася? Она приехала из Порту?", "Was her name Asya? Did she come from Porto?"),
      line("janek", "Да! Она хотела увидеть дракона из легенды. Мы ходили к пещере каждый день.", "Yes! She wanted to see the dragon from the legend. We went to the cave every day."),
      line("janek", "Она нарисовала дракона, а я вырезал его из дерева — по её рисунку.", "She drew the dragon, and I carved it from wood — from her drawing."),
      line("kasia", "Дедушка, тот самый дракон? У тебя на полке?", "Grandad, that dragon? The one on your shelf?"),
      line("janek", "Тот самый. А потом она уехала на Балтику. Сказала: «Хочу найти янтарь». В Ригу.", "That very one. And then she left for the Baltic. She said: “I want to find amber.” To Riga."),
    ],
    gist: choice("kr6-d1", "What did Janek carve from Asya's drawing?", [
      ["A dragon.", true],
      ["A trumpet.", false],
      ["A boat.", false],
    ]),
  },
  grammar: [
    {
      title: "The accusative in stories",
      paragraphs: [
        "Помнить, видеть, рисовать, вырезать, встретить, найти + accusative: Я её помню. Она нарисовала дракона. Хочу найти янтарь.",
        "Дракон is masculine and animate (a creature) → дракона. Янтарь is a thing → янтарь (no change).",
      ],
      examples: [
        { ru: "Я хорошо помню бабушку.", en: "I remember my grandmother well." },
        { ru: "Мы видели дракона у замка.", en: "We saw the dragon by the castle." },
      ],
    },
  ],
  tasks: [
    listen("kr6-t1", "Listen. Where did Asya and Janek go every day?", "Мы ходили к пещере каждый день.", [
      ["To the dragon's cave.", true],
      ["To the salt mine.", false],
      ["To the tower.", false],
    ]),
    choice("kr6-t2", "Detective! Where did Asya go next?", [
      ["To Riga, to find amber.", true],
      ["Back to Porto.", false],
      ["To the salt mine.", false],
    ], { skill: "listening" }),
    fill("kr6-t3", "Choose the right form: “She drew the dragon.”", "Она нарисовала", ".", "дракона", ["дракона", "дракон", "дракону"], { skill: "grammar" }),
    read("kr6-t4", "Under the wooden dragon there's an old note. What does it say?", "Янеку — за золотые руки.\nДракон получился лучше, чем на рисунке!\nЕду к морю, за янтарём. А.", [
      ["The dragon came out better than the drawing; she's going to the sea for amber.", true],
      ["She's going back to Porto.", false],
      ["She wants Janek to come with her.", false],
    ]),
    match("kr6-t5", "Match the Russian with the English.", [
      ["мастерская", "workshop"],
      ["легенда", "legend"],
      ["пещера", "cave"],
      ["янтарь", "amber"],
    ], { skill: "words" }),
    tf("kr6-t6", "Janek carved the dragon from Asya's drawing.", true, "True or false?", { skill: "listening" }),
    speak("kr6-t7", "Кого ты хорошо помнишь из детства?", "Я хорошо помню бабушку. Она всегда рисовала со мной.", "I remember my grandmother well. She always drew with me.", {
      help: "Say out loud who you remember well from childhood.",
    }),
  ],
  reward: {
    itemId: "carvedbox",
    itemName: "Carved wooden box",
    itemNameRu: "Резная шкатулка",
    ru: "Шкатулка с драконами!",
    en: "A box with dragons on it!",
    a11y: "A small wooden box with tiny dragons carved on the lid stands on the shelf; inside lies Asya's old note.",
    image: p("reward-6"),
    steps: ["Janek gives Murzik a little carved box.", "“Для её записок,” he says. “У тебя их уже много.”", "Murzik puts Asya's note inside, very carefully.", "The tiny dragons on the lid seem to smile."],
    bridge: "Tomorrow — the train to Riga. Janek is working all night on something. Kasia won't say what.",
  },
};

export const krakow7: Lesson = {
  id: "a2-krakow-7",
  level: "A2",
  cityId: "krakow",
  number: 7,
  title: "Krakow Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Describe people and say goodbye", "Review everything from Krakow"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Krakow.",
  vocab: [
    v("kr7-1", "деревянный дракончик", "little wooden dragon", "A small carved wooden dragon with tiny wings.", "Listen to деревянный дракончик", p("7-1")),
    v("kr7-2", "Он всю ночь работал.", "He worked all night.", "Janek asleep at his workbench at dawn, wood shavings everywhere.", "Listen to Он всю ночь работал", p("7-2")),
    v("kr7-3", "Он охраняет путешественников.", "It protects travellers.", "The little dragon on top of Murzik's suitcase.", "Listen to Он охраняет путешественников", p("7-3")),
    v("kr7-4", "Береги Тома!", "Look after Tom!", "Kasia laughs and points at Tom's orange beanie.", "Listen to Береги Тома", p("7-4")),
    v("kr7-5", "Не теряйся!", "Don't get lost!", "Murzik wags his finger at Tom.", "Listen to Не теряйся", p("7-5")),
    v("kr7-6", "Я буду по тебе скучать.", "I'll miss you.", "Kasia hugs Murzik at the station.", "Listen to Я буду по тебе скучать", p("7-6")),
    v("kr7-7", "Возвращайтесь!", "Come back (to us)!", "Janek waves his cap.", "Listen to Возвращайтесь", p("7-7")),
    v("kr7-8", "в Ригу", "to Riga", "A map: a line north from Krakow to the Baltic Sea.", "Listen to в Ригу", p("7-8")),
  ],
  letters: [
    letter("дракончик", "-чик makes things small and sweet: дракон → дракончик (dra-KON-chik).", "деревянный дракончик", "little wooden dragon"),
  ],
  dialogue: {
    title: "At the station",
    note: "Беречь кого — to look after, to protect someone.",
    lines: [
      line("janek", "Это тебе. Деревянный дракончик. Я всю ночь работал.", "This is for you. A little wooden dragon. I worked all night."),
      line("murzik", "Спасибо, пан Янек! Он как дракон Аси!", "Thank you, pan Janek! It's like Asya's dragon!"),
      line("janek", "Он охраняет путешественников. И помогает найти тех, кого ищешь.", "It protects travellers. And it helps you find the ones you're looking for."),
      line("kasia", "Мурзик, береги Тома! Том, не теряйся!", "Murzik, look after Tom! Tom, don't get lost!"),
      line("tom", "Обещаю! Шапка на мне.", "I promise! I've got the beanie on."),
      line("kasia", "Я буду по вам скучать. Возвращайтесь!", "I'll miss you. Come back!"),
    ],
    gist: choice("kr7-d1", "What does the wooden dragon do, according to Janek?", [
      ["It protects travellers and helps them find people.", true],
      ["It breathes fire.", false],
      ["It brings good weather.", false],
    ]),
  },
  grammar: [
    {
      title: "Krakow review",
      paragraphs: [
        "Appearance: высокий, худой, светлые волосы, с бородой, в очках, лет тридцати. Clothes: на нём куртка, он в кепке.",
        "Accusative of people: вижу Тома, жду Касю, ищу мужчину, помню её, похож на маму. Commands: Подождите меня! Береги Тома!",
      ],
      examples: [
        { ru: "Я ищу невысокую девушку в красной куртке.", en: "I'm looking for a short girl in a red jacket." },
        { ru: "Кася похожа на папу, а характер у неё мамин.", en: "Kasia looks like her dad, but has her mum's character." },
      ],
    },
  ],
  tasks: [
    listen("kr7-t1", "Audio story: Kasia talks about her grandfather. Listen. What does he make?", "Мой дедушка — резчик по дереву. Он работает в маленькой мастерской рядом с замком. Туристы покупают его драконов. Он высокий, с белой бородой, всегда в старой кепке. Все соседи его знают и любят. А я похожа на него в одном: я тоже люблю делать всё руками.", [
      ["Wooden dragons.", true],
      ["Salt lamps.", false],
      ["Brass trumpets.", false],
    ]),
    choice("kr7-t2", "In Kasia's story, how is she like her grandfather?", [
      ["In one way: she also loves making things by hand.", true],
      ["She has a white beard.", false],
      ["She also wears an old cap.", false],
    ], { skill: "listening" }),
    choice("kr7-t3", "“I'm looking for a short girl in a red jacket.” Which is right?", [
      ["Я ищу невысокую девушку в красной куртке.", true],
      ["Я ищу невысокая девушка в красной куртке.", false],
      ["Я ищу невысокую девушку в красную куртку.", false],
    ], { skill: "grammar" }),
    read("kr7-t4", "Read the train ticket. Where do they change?", "БИЛЕТ\nКраков — Варшава: 08:05 – 10:30\nВаршава — Рига: 11:15 – 22:40\nВагон 3, место 15", [
      ["In Warsaw.", true],
      ["In Riga.", false],
      ["They don't change.", false],
    ]),
    script("kr7-t5", "Say goodbye to Kasia.", [
      { speaker: "Kasia", text: "Я буду по вам скучать!" },
      { speaker: "You", answer: "Мы тоже! Спасибо, что ты нам помогла.", options: ["Мы тоже! Спасибо, что ты нам помогла.", "Не отставайте!", "Всё из соли!"] },
      { speaker: "Kasia", text: "Береги Тома!" },
      { speaker: "You", answer: "Обязательно! Я буду держать его за руку.", options: ["Обязательно! Я буду держать его за руку.", "Обязательно! Я буду держать он за руку.", "Обязательно! Он в очках."] },
    ], { skill: "review" }),
    match("kr7-t6", "Krakow review: match the Russian with the English.", [
      ["с бородой", "with a beard"],
      ["кроссовки", "trainers"],
      ["место встречи", "meeting point"],
      ["экскурсовод", "tour guide"],
    ], { skill: "review" }),
    speak("kr7-t7", "Ты потерял(а) друга на вокзале. Опиши его.", "Я ищу друга. Он высокий, с тёмными волосами, в очках. На нём синяя куртка. Вы его не видели?", "I'm looking for my friend. He's tall, with dark hair, in glasses. He's wearing a blue jacket. Have you seen him?", {
      help: "Describe your lost friend out loud and ask if someone has seen him.",
    }),
  ],
  reward: {
    itemId: "wooddragon",
    itemName: "Little wooden dragon",
    itemNameRu: "Деревянный дракончик",
    ru: "Дракончик — охранник путешественников!",
    en: "A little dragon — guardian of travellers!",
    a11y: "A small carved wooden dragon with tiny wings hangs from the handle of Murzik's suitcase, next to the orange beanie.",
    image: p("reward-7"),
    steps: ["Janek's present is a little dragon carved overnight.", "It looks just like Asya's drawing.", "“Он охраняет путешественников,” says Janek.", "Murzik ties it to the handle of his suitcase."],
  },
};

export const krakowLessons: Lesson[] = [krakow1, krakow2, krakow3, krakow4, krakow5, krakow6, krakow7];
