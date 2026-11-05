import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Bratislava · «Повторение и экзамен A2» · A2 lessons 1–7.
 * The last city of A2. A guesthouse by the Danube; Murzik can't sleep. Asking people about a ginger cat who paints;
 * buying a present; calls to friends; a painter on the bridge says an old ginger cat paints on the embankment every
 * evening at sunset. Lesson 5: Murzik sees her from behind and can't move. Lesson 6: she turns round — it's Asya.
 * Lesson 7: Asya's story, Dolores's fan, Mara's figs, «Лев помнит Севилью». Keepsake: Asya's sketchbook.
 * Grammar: review of all A2 — aspect, prefixes, cases, comparatives, imperatives, если, reflexive verbs,
 * short adjectives, который, свой / себя, бы.
 */

const p = (name: string) => pic(`bratislava/${name}`);

export const bratislava1: Lesson = {
  id: "a2-bratislava-1",
  level: "A2",
  cityId: "bratislava",
  number: 1,
  title: "The Last City",
  minutes: 8,
  goals: ["Talk about plans and worries", "Review aspect: искал / найду", "Review если + future"],
  vocabNote: "Review: imperfective for a process (буду искать), perfective for a result (найду). Если + future: Если она здесь, мы её найдём.",
  vocab: [
    v("br1-1", "гостевой дом у реки", "a guesthouse by the river", "A small white house with a red roof by a wide river.", "Listen to гостевой дом у реки", p("1-1")),
    v("br1-2", "Я не могу уснуть.", "I can't get to sleep.", "Murzik sits on the windowsill at night, looking at the river.", "Listen to Я не могу уснуть", p("1-2")),
    v("br1-3", "Я так долго её искал (искала).", "I've been looking for her for so long.", "A map with a red line through all the cities of the journey.", "Listen to Я так долго её искал", p("1-3")),
    v("br1-4", "А вдруг её здесь нет?", "What if she isn't here?", "Murzik hugs his knees.", "Listen to А вдруг её здесь нет", p("1-4")),
    v("br1-5", "Если она здесь, мы её найдём.", "If she's here, we'll find her.", "Tom puts a hand on Murzik's shoulder.", "Listen to Если она здесь, мы её найдём", p("1-5")),
    v("br1-6", "Утро вечера мудренее.", "Things will look better in the morning.", "A moon over the river, a sleepy owl on a lamp post.", "Listen to Утро вечера мудренее", p("1-6")),
    v("br1-7", "Дунай", "the Danube", "A wide grey-blue river with boats and bridges.", "Listen to Дунай", p("1-7")),
    v("br1-8", "замок на холме", "the castle on the hill", "A white square castle with four towers above the city.", "Listen to замок на холме", p("1-8")),
  ],
  letters: [
    letter("мудренее", "mud-ri-NYE-ye: stress on НЕ.", "Утро вечера мудренее.", "Things will look better in the morning."),
    letter("Дунай", "du-NAI: stress on the end.", "на Дунае", "on the Danube"),
    letter("замок", "ZA-mak: stress on ЗА. Careful: замОк (stress on the end) is a lock!", "замок на холме", "the castle on the hill"),
  ],
  dialogue: {
    title: "A night by the Danube",
    note: "Утро вечера мудренее — a Russian saying: “the morning is wiser than the evening”. Russians say it when it's better to sleep on a problem.",
    lines: [
      line("murzik", "Том, ты спишь? Я не могу уснуть.", "Tom, are you asleep? I can't get to sleep."),
      line("tom", "Уже нет. Что случилось?", "Not any more. What's wrong?"),
      line("murzik", "Я так долго её искал. Лион, Рига, Цюрих, Севилья… А вдруг её здесь нет?", "I've been looking for her for so long. Lyon, Riga, Zurich, Seville… What if she isn't here?"),
      line("tom", "Смотри: Дунай, замок на холме — как на её рисунке. Если она здесь, мы её найдём.", "Look: the Danube, the castle on the hill — just like in her drawing. If she's here, we'll find her."),
      line("murzik", "А если не найдём?", "And if we don't find her?"),
      line("tom", "Тогда будем искать дальше. А сейчас — спать. Утро вечера мудренее.", "Then we'll keep looking. And now — sleep. Things will look better in the morning."),
    ],
    gist: choice("br1-d1", "Why can't Murzik sleep?", [
      ["He's worried Asya might not be here.", true],
      ["It's too noisy outside.", false],
      ["He's hungry.", false],
    ]),
  },
  grammar: [
    {
      title: "A2 review (1): aspect and если",
      paragraphs: [
        "Imperfective — process or repeated action: я искал(а), буду искать. Perfective — one result: я нашёл (нашла), найду.",
        "Если + future, then future: Если она здесь, мы её найдём. Если пойдёт дождь, мы останемся дома.",
      ],
      examples: [
        { ru: "Мы искали её почти год — и, может быть, завтра найдём.", en: "We've been looking for her for almost a year — and maybe tomorrow we'll find her." },
        { ru: "Если ты устанешь, мы отдохнём.", en: "If you get tired, we'll rest." },
      ],
    },
  ],
  tasks: [
    listen("br1-t1", "Listen. What will they do if they don't find her?", "Тогда будем искать дальше. А сейчас — спать.", [
      ["Keep looking.", true],
      ["Go home to Paris.", false],
      ["Stay in Bratislava forever.", false],
    ]),
    choice("br1-t2", "“If you get tired, we'll rest.” Which is right?", [
      ["Если ты устанешь, мы отдохнём.", true],
      ["Если ты устаёшь, мы отдыхали.", false],
      ["Если ты устал, мы будем отдохнуть.", false],
    ], { skill: "grammar" }),
    fill("br1-t3", "Choose the right form: “Tomorrow we'll find her.”", "Завтра мы её", ".", "найдём", ["найдём", "находили", "искали"], { skill: "grammar" }),
    read("br1-t4", "Read the guesthouse card. Where is breakfast?", "ГОСТЕВОЙ ДОМ «ДУНАЙ»\nЗавтрак: 7:30–10:00, на террасе у реки\nВелосипеды — бесплатно\nНабережная — 2 минуты пешком", [
      ["On the terrace by the river.", true],
      ["In the castle.", false],
      ["There's no breakfast.", false],
    ]),
    match("br1-t5", "Match the Russian with the English.", [
      ["Я не могу уснуть.", "I can't get to sleep."],
      ["А вдруг её здесь нет?", "What if she isn't here?"],
      ["Утро вечера мудренее.", "Things will look better in the morning."],
      ["замок на холме", "the castle on the hill"],
    ], { skill: "words" }),
    tf("br1-t6", "Tom thinks they should go home.", false, "True or false?", { skill: "listening" }),
    speak("br1-t7", "Что ты будешь делать, если не найдёшь то, что ищешь?", "Если не найду сегодня, буду искать завтра. Я не сдамся!", "If I don't find it today, I'll keep looking tomorrow. I won't give up!", {
      help: "Answer out loud with если + future.",
    }),
  ],
  reward: {
    itemId: "danubephoto",
    itemName: "Night photo of the Danube",
    itemNameRu: "Ночной Дунай",
    ru: "Дунай ночью — как в сказке!",
    en: "The Danube at night — like a fairy tale!",
    a11y: "A photo of the Danube at night stands on the windowsill: lights on a bridge, the castle lit up on the hill.",
    image: p("reward-1"),
    steps: ["Tom can't sleep either now.", "He takes a photo of the river at night.", "The castle glows on the hill.", "Murzik falls asleep at last, on the windowsill."],
    bridge: "In the morning they go out with a photo of Asya's drawing. “Вы не видели рыжую кошку, которая рисует?”",
  },
};

export const bratislava2: Lesson = {
  id: "a2-bratislava-2",
  level: "A2",
  cityId: "bratislava",
  number: 2,
  title: "Have You Seen Her?",
  minutes: 8,
  goals: ["Ask passers-by about someone", "Describe a person", "Review accusative and который"],
  vocabNote: "Review: Вы не видели + accusative? — Have you seen…? Кошка, которая рисует — a cat who draws.",
  vocab: [
    v("br2-1", "Вы не видели рыжую кошку?", "Have you seen a ginger cat?", "Murzik shows a photo to a woman with a dog.", "Listen to Вы не видели рыжую кошку", p("2-1")),
    v("br2-2", "пожилая, в соломенной шляпе", "elderly, in a straw hat", "A straw hat with a blue ribbon, drawn on a card.", "Listen to пожилая, в соломенной шляпе", p("2-2")),
    v("br2-3", "кошку, которая рисует", "a cat who paints", "A brush and a small paint box.", "Listen to кошку, которая рисует", p("2-3")),
    v("br2-4", "Мне кажется, я её видел (видела).", "I think I've seen her.", "An old man with a newspaper scratches his head.", "Listen to Мне кажется, я её видел (видела)", p("2-4")),
    v("br2-5", "Спросите у художника на мосту.", "Ask the artist on the bridge.", "A young artist selling paintings on a bridge.", "Listen to Спросите у художника на мосту", p("2-5")),
    v("br2-6", "каждый вечер на закате", "every evening at sunset", "The sun sets over the river; the sky is pink.", "Listen to каждый вечер на закате", p("2-6")),
    v("br2-7", "на набережной", "on the embankment, on the riverside", "A wide walkway along the river with benches and trees.", "Listen to на набережной", p("2-7")),
    v("br2-8", "Сердце стучит.", "My heart is pounding.", "Murzik with a paw pressed to his chest.", "Listen to Сердце стучит", p("2-8")),
  ],
  letters: [
    letter("набережной", "NA-bi-rizh-nay: stress on the first syllable.", "на набережной", "on the embankment"),
    letter("сердце", "SYER-tse: the д is silent.", "Сердце стучит.", "My heart is pounding."),
  ],
  dialogue: {
    title: "The old town",
    note: "Slovak and Russian are both Slavic languages, and many older Slovaks learned Russian at school, so some people understand a little.",
    lines: [
      line("murzik", "Простите, вы не видели рыжую кошку? Пожилая, в соломенной шляпе.", "Excuse me, have you seen a ginger cat? Elderly, in a straw hat."),
      line("passerby", "Нет, к сожалению. А что она делает?", "No, I'm afraid not. And what does she do?"),
      line("tom", "Мы ищем кошку, которая рисует. Вот её рисунок.", "We're looking for a cat who paints. Here's her drawing."),
      line("passerby", "Мне кажется, я видела похожие рисунки… Спросите у художника на мосту. Он всех знает.", "I think I've seen drawings like this… Ask the artist on the bridge. He knows everyone."),
      line("peter", "Рыжая кошка в шляпе? Конечно! Она рисует реку каждый вечер на закате. На набережной, у старой скамейки.", "A ginger cat in a hat? Of course! She paints the river every evening at sunset. On the embankment, by the old bench."),
      line("murzik", "Том… Сердце стучит.", "Tom… My heart is pounding."),
    ],
    gist: choice("br2-d1", "When and where does the ginger cat paint?", [
      ["Every evening at sunset, on the embankment.", true],
      ["Every morning, in the castle.", false],
      ["On Sundays, at the market.", false],
    ]),
  },
  grammar: [
    {
      title: "A2 review (2): accusative and который",
      paragraphs: [
        "Accusative of people and animals: видеть рыжую кошку, старого кота, Тома, Лену. Вы не видели…? — Have you seen…?",
        "Который: кошка, которая рисует; художник, который всех знает; скамейка, у которой она сидит.",
      ],
      examples: [
        { ru: "Мы ищем художницу, которая рисует реку.", en: "We're looking for an artist who paints the river." },
        { ru: "Вы не видели белого кота в шляпе?", en: "Have you seen a white cat in a hat?" },
      ],
    },
  ],
  tasks: [
    listen("br2-t1", "Listen. Where exactly does the cat paint?", "Она рисует реку каждый вечер на закате. На набережной, у старой скамейки.", [
      ["On the embankment, by the old bench.", true],
      ["On the bridge, next to the artist.", false],
      ["In the castle garden.", false],
    ]),
    choice("br2-t2", "“Have you seen a white cat in a hat?” Which is right?", [
      ["Вы не видели белого кота в шляпе?", true],
      ["Вы не видели белый кот в шляпе?", false],
      ["Вы не видели белому коту в шляпе?", false],
    ], { skill: "grammar" }),
    fill("br2-t3", "Choose the right word: “an artist who paints the river”", "художница,", "рисует реку", "которая", ["которая", "который", "которую"], { skill: "grammar" }),
    read("br2-t4", "Read the sign by the bridge artist. When is he there?", "КАРТИНЫ И РИСУНКИ\nКаждый день с 10:00 до заката\nРисую портреты за 15 минут!\nПетер", [
      ["Every day from ten until sunset.", true],
      ["Only at night.", false],
      ["Only on Mondays.", false],
    ]),
    match("br2-t5", "Match the Russian with the English.", [
      ["пожилая, в соломенной шляпе", "elderly, in a straw hat"],
      ["Спросите у художника на мосту.", "Ask the artist on the bridge."],
      ["каждый вечер на закате", "every evening at sunset"],
      ["на набережной", "on the embankment"],
    ], { skill: "words" }),
    tf("br2-t6", "The woman with the dog knows Asya well.", false, "True or false?", { skill: "listening" }),
    speak("br2-t7", "Кого вы ищете?", "Мы ищем пожилую рыжую кошку в соломенной шляпе. Она рисует. Вы её не видели?", "We're looking for an elderly ginger cat in a straw hat. She paints. Have you seen her?", {
      help: "Describe the person you're looking for, out loud.",
    }),
  ],
  reward: {
    itemId: "bridgeportrait",
    itemName: "Quick portrait from the bridge",
    itemNameRu: "Портрет с моста",
    ru: "Мой портрет — за пятнадцать минут!",
    en: "My portrait — in fifteen minutes!",
    a11y: "A quick charcoal portrait of a ginger kitten in a scarf with very wide, hopeful eyes is pinned to the wall.",
    image: p("reward-2"),
    steps: ["The artist on the bridge, Peter, draws Murzik for free.", "“У тебя глаза, как у неё,” he says.", "Murzik's eyes in the drawing are very big.", "Sunset is in eight hours."],
    bridge: "Eight hours is a long time. “Пойдём купим ей подарок,” says Tom. “Ты же не придёшь с пустыми лапами.”",
  },
};

export const bratislava3: Lesson = {
  id: "a2-bratislava-3",
  level: "A2",
  cityId: "bratislava",
  number: 3,
  title: "A Present for Grandma",
  minutes: 8,
  goals: ["Choose and buy a present", "Review numbers with nouns and the genitive", "Review dative: кому"],
  vocabNote: "Review: numbers + nouns — одна роза, три розы, семь роз. Dative — for whom: подарок бабушке.",
  vocab: [
    v("br3-1", "букет цветов", "a bunch of flowers", "A flower stall with buckets of roses and sunflowers.", "Listen to букет цветов", p("3-1")),
    v("br3-2", "Сколько роз вам нужно?", "How many roses do you need?", "The florist holds up a red rose.", "Listen to Сколько роз вам нужно", p("3-2")),
    v("br3-3", "семь жёлтых роз", "seven yellow roses", "Seven yellow roses tied with a ribbon.", "Listen to семь жёлтых роз", p("3-3")),
    v("br3-4", "Это подарок бабушке.", "It's a present for my grandmother.", "Murzik holds the flowers proudly.", "Listen to Это подарок бабушке", p("3-4")),
    v("br3-5", "Заверните, пожалуйста.", "Wrap it, please.", "Brown paper and a ribbon.", "Listen to Заверните, пожалуйста", p("3-5")),
    v("br3-6", "открытка без подписи", "a card with nothing written in it", "A blank card with a drawing of a cat.", "Listen to открытка без подписи", p("3-6")),
    v("br3-7", "Что написать?", "What shall I write?", "Murzik chews the end of his pen.", "Listen to Что написать", p("3-7")),
    v("br3-8", "Напиши от сердца.", "Write from the heart.", "Tom smiles and taps his chest.", "Listen to Напиши от сердца", p("3-8")),
  ],
  letters: [
    letter("роз", "ROS: the final з sounds like с.", "семь роз", "seven roses"),
    letter("Заверните", "za-VYER-ni-tye: stress on ВЕР.", "Заверните, пожалуйста.", "Wrap it, please."),
  ],
  dialogue: {
    title: "The flower stall",
    note: "In Russian tradition you give an odd number of flowers: 1, 3, 5, 7. Even numbers are for sad occasions.",
    lines: [
      line("seller", "Здравствуйте! Сколько роз вам нужно?", "Hello! How many roses do you need?"),
      line("murzik", "Семь жёлтых роз, пожалуйста. Это подарок бабушке.", "Seven yellow roses, please. It's a present for my grandmother."),
      line("seller", "Жёлтых? Говорят, жёлтые цветы — к разлуке.", "Yellow? They say yellow flowers mean parting."),
      line("murzik", "А у нас будет наоборот — к встрече! Она рыжая. И она любит солнце.", "For us it'll be the other way round — they'll mean meeting! She's ginger. And she loves the sun."),
      line("seller", "Прекрасно. Семь роз — двадцать один евро. Заверните?", "Lovely. Seven roses — twenty-one euros. Shall I wrap them?"),
      line("tom", "Да, заверните, пожалуйста. И ещё открытку.", "Yes, wrap them, please. And a card as well."),
      line("murzik", "А что написать?", "And what shall I write?"),
      line("tom", "Напиши от сердца.", "Write from the heart."),
    ],
    gist: choice("br3-d1", "Why does Murzik choose yellow roses?", [
      ["Asya is ginger and loves the sun.", true],
      ["Yellow roses are the cheapest.", false],
      ["There are no other roses.", false],
    ]),
  },
  grammar: [
    {
      title: "A2 review (3): numbers, genitive, dative",
      paragraphs: [
        "1 роза, 2–4 розы, 5+ роз; один евро, двадцать один евро (евро never changes). Сколько + genitive plural: сколько роз?",
        "Dative — to / for someone: подарок бабушке, открытка Тому, цветы маме.",
      ],
      examples: [
        { ru: "Мне нужны три розы и одна открытка.", en: "I need three roses and one card." },
        { ru: "Я купил(а) цветы бабушке.", en: "I bought flowers for my grandmother." },
      ],
    },
  ],
  tasks: [
    listen("br3-t1", "Listen. How much are the roses?", "Прекрасно. Семь роз — двадцать один евро. Заверните?", [
      ["Twenty-one euros.", true],
      ["Seven euros.", false],
      ["Twenty-seven euros.", false],
    ]),
    choice("br3-t2", "“I need three roses.” Which is right?", [
      ["Мне нужны три розы.", true],
      ["Мне нужны три роз.", false],
      ["Мне нужны три розу.", false],
    ], { skill: "grammar" }),
    fill("br3-t3", "Choose the right form: “a present for my grandmother”", "подарок", "", "бабушке", ["бабушке", "бабушку", "бабушка"], { skill: "grammar" }),
    read("br3-t4", "Read the price list. How much are five roses?", "ЦВЕТЫ У МОСТА\n1 роза — 3 €\n5 роз — 15 €\n7 роз — 21 €\nОткрытка — 2 €", [
      ["15 euros.", true],
      ["12 euros.", false],
      ["21 euros.", false],
    ]),
    match("br3-t5", "Match the Russian with the English.", [
      ["букет цветов", "a bunch of flowers"],
      ["Заверните, пожалуйста.", "Wrap it, please."],
      ["Что написать?", "What shall I write?"],
      ["Напиши от сердца.", "Write from the heart."],
    ], { skill: "words" }),
    tf("br3-t6", "Murzik buys six roses.", false, "True or false?", { skill: "listening" }),
    speak("br3-t7", "Что вы хотите купить?", "Пять красных роз, пожалуйста. Это подарок маме. И заверните, пожалуйста.", "Five red roses, please. It's a present for my mum. And wrap them, please.", {
      help: "Buy flowers out loud. Watch the numbers and endings.",
    }),
  ],
  reward: {
    itemId: "yellowroses",
    itemName: "Seven yellow roses",
    itemNameRu: "Семь жёлтых роз",
    ru: "Жёлтые — как солнце!",
    en: "Yellow — like the sun!",
    a11y: "Seven yellow roses wrapped in brown paper with a ribbon stand in a jar of water on the windowsill.",
    image: p("reward-3"),
    steps: ["The roses wait in a jar of water.", "Murzik writes the card three times.", "The third card says only: «Бабушка, я нашёл тебя».", "He tears it up. “Пока не нашёл.”"],
    bridge: "Four hours to sunset. Murzik picks up the phone. “Я хочу, чтобы все знали.”",
  },
};

export const bratislava4: Lesson = {
  id: "a2-bratislava-4",
  level: "A2",
  cityId: "bratislava",
  number: 4,
  title: "Phone Calls",
  minutes: 8,
  goals: ["Share news on the phone", "Review imperatives and promises", "Review comparatives"],
  vocabNote: "Review: imperatives — позвони, держи меня в курсе, не волнуйся; comparatives — ближе, быстрее, лучше.",
  vocab: [
    v("br4-1", "У меня новости.", "I've got news.", "Murzik holds the phone with both paws.", "Listen to У меня новости", p("4-1")),
    v("br4-2", "Мы совсем близко.", "We're very close.", "A map with a pin on the embankment.", "Listen to Мы совсем близко", p("4-2")),
    v("br4-3", "Держи меня в курсе!", "Keep me posted!", "Lena on the screen, smiling, in her yellow raincoat.", "Listen to Держи меня в курсе", p("4-3")),
    v("br4-4", "Позвони, как только найдёшь её.", "Call as soon as you find her.", "Aunt Olya and Musya squeezed into one screen.", "Listen to Позвони, как только найдёшь её", p("4-4")),
    v("br4-5", "Я волнуюсь больше, чем ты.", "I'm more nervous than you.", "Tom on the phone, pacing.", "Listen to Я волнуюсь больше, чем ты", p("4-5")),
    v("br4-6", "Всё будет лучше, чем ты думаешь.", "It'll all be better than you think.", "Madame Dubois on the screen, in her Paris kitchen.", "Listen to Всё будет лучше, чем ты думаешь", p("4-6")),
    v("br4-7", "Обещаю.", "I promise.", "Murzik raises one paw.", "Listen to Обещаю", p("4-7")),
    v("br4-8", "Мы все за тебя болеем!", "We're all rooting for you!", "Lots of hearts on the phone screen.", "Listen to Мы все за тебя болеем", p("4-8")),
  ],
  letters: [
    letter("болеем", "ba-LYE-yem: stress on ЛЕ; болеть за кого — to root for someone.", "Мы за тебя болеем!", "We're rooting for you!"),
    letter("в курсе", "F-KUR-si: в before к sounds like ф.", "Держи меня в курсе.", "Keep me posted."),
  ],
  dialogue: {
    title: "Three calls",
    note: "Lena — Tom's friend from Riga and Tallinn. Aunt Olya and Musya — from Naples. Madame Dubois — Murzik's neighbour in Paris, from A1.",
    lines: [
      line("murzik", "Лена, у меня новости! Мы совсем близко. Она рисует здесь каждый вечер!", "Lena, I've got news! We're very close. She paints here every evening!"),
      line("lena", "Ура! Держи меня в курсе! И передай Тому, что я скучаю.", "Hooray! Keep me posted! And tell Tom I miss him."),
      line("aunt", "Мурзик! Позвони, как только найдёшь её. Муся не отходит от телефона — ждёт.", "Murzik! Call as soon as you find her. Musya won't leave the phone — she's waiting."),
      line("murzik", "Обещаю. Тётя Оля, я волнуюсь…", "I promise. Aunt Olya, I'm nervous…"),
      line("tom", "А я волнуюсь больше, чем ты!", "And I'm more nervous than you!"),
      line("neighbour", "Мурзик, мой мальчик, всё будет лучше, чем ты думаешь. Мы все за тебя болеем. Обнимаю!", "Murzik, my boy, it'll all be better than you think. We're all rooting for you. Hugs!"),
    ],
    gist: choice("br4-d1", "Who does Murzik call?", [
      ["Lena, Aunt Olya and Madame Dubois.", true],
      ["Dolores, Mara and Isabelle.", false],
      ["Only Lena.", false],
    ]),
  },
  grammar: [
    {
      title: "A2 review (4): imperatives and comparatives",
      paragraphs: [
        "Imperatives: позвони, держи меня в курсе, не волнуйся, обними; polite: позвоните, не волнуйтесь. Как только + perfective future: как только найдёшь — as soon as you find.",
        "Comparatives + чем: больше, чем ты; лучше, чем ты думаешь; ближе, чем вчера.",
      ],
      examples: [
        { ru: "Позвони мне, как только приедешь.", en: "Call me as soon as you arrive." },
        { ru: "Сегодня мы ближе, чем когда-либо.", en: "Today we're closer than ever." },
      ],
    },
  ],
  tasks: [
    listen("br4-t1", "Listen. Why won't Musya leave the phone?", "Мурзик! Позвони, как только найдёшь её. Муся не отходит от телефона — ждёт.", [
      ["She's waiting for news.", true],
      ["She's ill.", false],
      ["She's drawing.", false],
    ]),
    choice("br4-t2", "“Call me as soon as you arrive.” Which is right?", [
      ["Позвони мне, как только приедешь.", true],
      ["Позвони мне, как только приезжаешь вчера.", false],
      ["Звонить мне, как только приехал.", false],
    ], { skill: "grammar" }),
    fill("br4-t3", "Choose the right word: “It'll all be better than you think.”", "Всё будет лучше,", "ты думаешь.", "чем", ["чем", "как", "что"], { skill: "grammar" }),
    read("br4-t4", "Read Lena's message. What does she want?", "Лена: Мурзик!!! Я так рада! 😭 Держи меня в курсе. Фото бабушки — сразу мне! И обними Тома за меня.", [
      ["A photo of Grandma straight away, and a hug for Tom.", true],
      ["To come to Bratislava today.", false],
      ["Nothing, she's busy.", false],
    ]),
    match("br4-t5", "Match the Russian with the English.", [
      ["У меня новости.", "I've got news."],
      ["Держи меня в курсе!", "Keep me posted!"],
      ["Обещаю.", "I promise."],
      ["Мы все за тебя болеем!", "We're all rooting for you!"],
    ], { skill: "words" }),
    tf("br4-t6", "Tom says he is less nervous than Murzik.", false, "True or false?", { skill: "listening" }),
    speak("br4-t7", "Позвони другу и расскажи важную новость.", "Привет! У меня новости! Я сдал(а) экзамен. Я так рад(а)! Позвоню вечером, обнимаю!", "Hi! I've got news! I passed my exam. I'm so happy! I'll call you tonight, hugs!", {
      help: "Share some news out loud on the phone.",
    }),
  ],
  reward: {
    itemId: "phonephotos",
    itemName: "Screenshot of the video call",
    itemNameRu: "Снимок экрана",
    ru: "Все друзья — на одном экране!",
    en: "All my friends — on one screen!",
    a11y: "A printed screenshot of a group video call: Lena, Aunt Olya with Musya, Madame Dubois and Tom, all waving.",
    image: p("reward-4"),
    steps: ["In the end everyone joins one big video call.", "Lena, Aunt Olya, Musya, Madame Dubois.", "Tom takes a screenshot.", "The guesthouse prints it for them on the old printer."],
    bridge: "Sunset. The river turns pink. Murzik takes the roses, the fan, the figs — and walks to the embankment.",
  },
};

export const bratislava5: Lesson = {
  id: "a2-bratislava-5",
  level: "A2",
  cityId: "bratislava",
  number: 5,
  title: "On the Embankment",
  minutes: 8,
  goals: ["Talk about feelings in a big moment", "Review short adjectives: готов, рад, уверен", "Review reflexive verbs: волнуюсь, боюсь"],
  vocabNote: "Review: short adjectives — я готов (готова), уверен (уверена); reflexive verbs — волноваться, бояться, улыбаться.",
  vocab: [
    v("br5-1", "старая скамейка", "the old bench", "A wooden bench under a willow tree by the river.", "Listen to старая скамейка", p("5-1")),
    v("br5-2", "Она сидит ко мне спиной.", "She's sitting with her back to me.", "From behind: an old ginger cat in a straw hat at an easel.", "Listen to Она сидит ко мне спиной", p("5-2")),
    v("br5-3", "Я боюсь.", "I'm scared.", "Murzik frozen behind a tree, roses trembling.", "Listen to Я боюсь", p("5-3")),
    v("br5-4", "Ты готов?", "Are you ready?", "Tom kneels down next to Murzik.", "Listen to Ты готов", p("5-4")),
    v("br5-5", "Я не уверен (уверена).", "I'm not sure.", "Murzik shakes his head slowly.", "Listen to Я не уверен (уверена)", p("5-5")),
    v("br5-6", "Иди. Я буду рядом.", "Go. I'll be close by.", "Tom gives Murzik a gentle push.", "Listen to Иди. Я буду рядом", p("5-6")),
    v("br5-7", "Она рисует реку.", "She's painting the river.", "A watercolour of the pink Danube on the easel.", "Listen to Она рисует реку", p("5-7")),
    v("br5-8", "Простите… Вы — Ася?", "Excuse me… Are you Asya?", "Murzik's voice, very small.", "Listen to Простите… Вы — Ася", p("5-8")),
  ],
  letters: [
    letter("спиной", "spi-NOY: stress on the end.", "сидит спиной", "sits with her back turned"),
    letter("боюсь", "ba-YUS': stress on ЮСЬ; the о sounds like а.", "Я боюсь.", "I'm scared."),
  ],
  dialogue: {
    title: "Sunset",
    note: "This is the moment of the whole journey. Murzik knows Asya only from postcards, drawings and other people's stories.",
    lines: [
      line("tom", "Смотри. У старой скамейки. Рыжая, в соломенной шляпе.", "Look. By the old bench. Ginger, in a straw hat."),
      line("murzik", "Она сидит ко мне спиной… Она рисует реку.", "She's sitting with her back to me… She's painting the river."),
      line("tom", "Ты готов?", "Are you ready?"),
      line("murzik", "Я не уверен. Я боюсь. А вдруг это не она?", "I'm not sure. I'm scared. What if it isn't her?"),
      line("tom", "Иди. Я буду рядом. Всё будет хорошо.", "Go. I'll be close by. Everything will be fine."),
      line("murzik", "Простите… Вы — Ася?", "Excuse me… Are you Asya?"),
    ],
    gist: choice("br5-d1", "What is the cat on the embankment doing?", [
      ["Painting the river.", true],
      ["Reading a book.", false],
      ["Feeding birds.", false],
    ]),
  },
  grammar: [
    {
      title: "A2 review (5): short adjectives and -ся verbs",
      paragraphs: [
        "Short adjectives: я готов / готова, уверен / уверена, рад / рада, счастлив / счастлива. Past: был готов, была рада.",
        "-ся verbs: я боюсь, волнуюсь, улыбаюсь; не бойся, не волнуйся, улыбнись!",
      ],
      examples: [
        { ru: "Не бойся, я рядом.", en: "Don't be scared, I'm here." },
        { ru: "Я была не уверена, что ты придёшь.", en: "I wasn't sure you would come." },
      ],
    },
  ],
  tasks: [
    listen("br5-t1", "Listen. What is Murzik afraid of?", "Я не уверен. Я боюсь. А вдруг это не она?", [
      ["That it isn't her.", true],
      ["The river.", false],
      ["The dark.", false],
    ]),
    choice("br5-t2", "“Don't be scared, I'm here.” Which is right?", [
      ["Не бойся, я рядом.", true],
      ["Не боишься, я рядом.", false],
      ["Не бояться, я рядом.", false],
    ], { skill: "grammar" }),
    fill("br5-t3", "Choose the right form: “She wasn't sure.”", "Она была не", ".", "уверена", ["уверена", "уверен", "уверены"], { skill: "grammar" }),
    read("br5-t4", "There's a small sign on the easel. What does it say?", "Рисую до заката.\nНе мешайте, пожалуйста :)", [
      ["“I paint until sunset. Please don't disturb.”", true],
      ["“Paintings for sale — 20 euros.”", false],
      ["“Back in five minutes.”", false],
    ]),
    match("br5-t5", "Match the Russian with the English.", [
      ["старая скамейка", "the old bench"],
      ["Она сидит ко мне спиной.", "She's sitting with her back to me."],
      ["Я боюсь.", "I'm scared."],
      ["Иди. Я буду рядом.", "Go. I'll be close by."],
    ], { skill: "words" }),
    tf("br5-t6", "Murzik walks up to her at once without any fear.", false, "True or false?", { skill: "listening" }),
    speak("br5-t7", "Как ты себя чувствуешь перед важной встречей?", "Я немного боюсь и волнуюсь. Но я готов (готова)!", "I'm a bit scared and nervous. But I'm ready!", {
      help: "Say out loud how you feel before an important meeting.",
    }),
  ],
  reward: {
    itemId: "willowleaf",
    itemName: "Willow leaf from the embankment",
    itemNameRu: "Ивовый листок",
    ru: "Листок с набережной — на память о самом важном вечере.",
    en: "A leaf from the embankment — to remember the most important evening.",
    a11y: "A long thin willow leaf, pressed flat, lies on the open page of a notebook.",
    image: p("reward-5"),
    steps: ["A willow leaf falls onto Murzik's roses.", "He keeps it.", "Later he presses it in a book.", "So he'll always remember this evening."],
    bridge: "The old cat puts down her brush. Slowly, very slowly, she turns round.",
  },
};

export const bratislava6: Lesson = {
  id: "a2-bratislava-6",
  level: "A2",
  cityId: "bratislava",
  number: 6,
  title: "Grandma",
  minutes: 8,
  goals: ["Understand an emotional conversation", "Review свой, себя and бы", "Say what you feel"],
  vocabNote: "Review: свой (one's own), себя (oneself), бы (would): Я бы тебя узнала из тысячи — I'd have known you anywhere.",
  vocab: [
    v("br6-1", "Я бы тебя узнала из тысячи.", "I'd have known you anywhere.", "Asya, an old ginger cat in a straw hat, smiles with wet amber eyes.", "Listen to Я бы тебя узнала из тысячи", p("6-1")),
    v("br6-2", "Я ждала тебя.", "I've been waiting for you.", "Asya opens her paws wide.", "Listen to Я ждала тебя", p("6-2")),
    v("br6-3", "Я нашёл (нашла) тебя!", "I've found you!", "Murzik runs into her arms, the roses fall.", "Listen to Я нашёл (нашла) тебя", p("6-3")),
    v("br6-4", "Ты так вырос!", "You've grown so much!", "Asya holds Murzik at arm's length and looks at him.", "Listen to Ты так вырос", p("6-4")),
    v("br6-5", "У тебя мои глаза.", "You have my eyes.", "Two pairs of amber eyes, close together.", "Listen to У тебя мои глаза", p("6-5")),
    v("br6-6", "Ты прошёл такой длинный путь.", "You've come such a long way.", "A map with all the cities, from Paris to Bratislava.", "Listen to Ты прошёл такой длинный путь", p("6-6")),
    v("br6-7", "Познакомься, это мой друг Том.", "Meet my friend Tom.", "Tom shyly takes off his cap.", "Listen to Познакомься, это мой друг Том", p("6-7")),
    v("br6-8", "Спасибо, что ты был с ним.", "Thank you for being with him.", "Asya takes Tom's hand in both paws.", "Listen to Спасибо, что ты был с ним", p("6-8")),
  ],
  letters: [
    letter("вырос", "VY-ras: stress on ВЫ; the final о sounds like а.", "Ты так вырос!", "You've grown so much!"),
    letter("тысячи", "TY-si-chi: stress on ТЫ.", "из тысячи", "out of a thousand"),
  ],
  dialogue: {
    title: "Asya",
    note: "For the first time in the course we see Asya's face: an old ginger cat with amber eyes, grey whiskers and a straw hat with a blue ribbon.",
    lines: [
      line("asya", "Да, я Ася. А ты — Мурзик. Мой рыжий котёнок. Я бы тебя узнала из тысячи.", "Yes, I'm Asya. And you're Murzik. My ginger kitten. I'd have known you anywhere."),
      line("murzik", "Бабушка! Я нашёл тебя!", "Grandma! I've found you!"),
      line("asya", "Я ждала тебя. Каждый вечер. Ты так вырос! И у тебя мои глаза.", "I've been waiting for you. Every evening. You've grown so much! And you have my eyes."),
      line("murzik", "Это тебе. Семь жёлтых роз — как солнце.", "These are for you. Seven yellow roses — like the sun."),
      line("asya", "Ты прошёл такой длинный путь… Через всю Европу.", "You've come such a long way… Across the whole of Europe."),
      line("murzik", "Познакомься, это мой друг Том. Без него я бы не дошёл.", "Meet my friend Tom. I wouldn't have made it without him."),
      line("asya", "Спасибо, что ты был с ним, Том.", "Thank you for being with him, Tom."),
    ],
    gist: choice("br6-d1", "What does Asya say about Murzik's eyes?", [
      ["He has her eyes.", true],
      ["They are like Tom's.", false],
      ["They are very sad.", false],
    ]),
  },
  grammar: [
    {
      title: "A2 review (6): свой, себя, бы",
      paragraphs: [
        "свой — one's own: Ася узнала своего внука. себя — oneself: Мурзик не помнил себя от радости (was beside himself with joy).",
        "бы — would: Я бы тебя узнала из тысячи. Без него я бы не дошёл — I wouldn't have made it without him.",
      ],
      examples: [
        { ru: "Каждый вечер она ждала своего внука.", en: "Every evening she waited for her grandson." },
        { ru: "Без друзей я бы не справился (не справилась).", en: "I wouldn't have managed without my friends." },
      ],
    },
  ],
  tasks: [
    listen("br6-t1", "Listen. How often did Asya wait for him?", "Я ждала тебя. Каждый вечер. Ты так вырос!", [
      ["Every evening.", true],
      ["Every Sunday.", false],
      ["Once a year.", false],
    ]),
    choice("br6-t2", "“Every evening she waited for her grandson.” Which is right?", [
      ["Каждый вечер она ждала своего внука.", true],
      ["Каждый вечер она ждала её внука свой.", false],
      ["Каждый вечер она ждала себя внука.", false],
    ], { skill: "grammar" }),
    fill("br6-t3", "Choose the right word: “I wouldn't have made it without him.”", "Без него я", "не дошёл.", "бы", ["бы", "был", "буду"], { skill: "grammar" }),
    read("br6-t4", "On the back of Asya's river painting there's a note. What does it say?", "Для моего рыжего котёнка.\nКогда ты меня найдёшь —\nэтот вечер будет самым счастливым.\nА.", [
      ["“This evening will be the happiest.”", true],
      ["“Don't look for me.”", false],
      ["“I'm going back to Paris.”", false],
    ]),
    match("br6-t5", "Match the Russian with the English.", [
      ["Я ждала тебя.", "I've been waiting for you."],
      ["Ты так вырос!", "You've grown so much!"],
      ["У тебя мои глаза.", "You have my eyes."],
      ["Ты прошёл такой длинный путь.", "You've come such a long way."],
    ], { skill: "words" }),
    tf("br6-t6", "Asya thanks Tom.", true, "True or false?", { skill: "listening" }),
    speak("br6-t7", "Кому ты хотел(а) бы сказать спасибо?", "Я бы хотел(а) сказать спасибо своему другу. Без него я бы не справился (не справилась).", "I'd like to say thank you to my friend. I wouldn't have managed without him.", {
      help: "Say out loud who you'd like to thank, and why.",
    }),
  ],
  reward: {
    itemId: "riverpainting",
    itemName: "Asya's painting of the Danube",
    itemNameRu: "Акварель «Дунай»",
    ru: "Бабушка нарисовала реку — для меня!",
    en: "Grandma painted the river — for me!",
    a11y: "A watercolour of the pink Danube at sunset, with a tiny ginger kitten on the embankment, hangs above the bed.",
    image: p("reward-6"),
    steps: ["Asya gives Murzik the painting from her easel.", "The pink Danube at sunset.", "And on the embankment — a tiny ginger kitten.", "“Я нарисовала его ещё до того, как ты пришёл.”"],
    bridge: "They sit on the old bench until dark. Murzik has two more things to give her — and one message.",
  },
};

export const bratislava7: Lesson = {
  id: "a2-bratislava-7",
  level: "A2",
  cityId: "bratislava",
  number: 7,
  title: "A2 Exam",
  minutes: 10,
  goals: ["Understand a longer story", "Use the grammar of the whole A2 level", "Finish A2!"],
  vocabNote: "Lesson 7 is the exam for the whole A2 level: Asya's story and a review of everything from Lyon to Bratislava.",
  vocab: [
    v("br7-1", "Это тебе от Долорес.", "This is for you from Dolores.", "Murzik holds out the black painted fan.", "Listen to Это тебе от Долорес", p("7-1")),
    v("br7-2", "А это инжир от Мары.", "And these are figs from Mara.", "A paper bag of figs.", "Listen to А это инжир от Мары", p("7-2")),
    v("br7-3", "Все тебя помнят.", "Everyone remembers you.", "Faces from the journey in a circle: Ursula, Sophie, Dolores, Mara…", "Listen to Все тебя помнят", p("7-3")),
    v("br7-4", "Он просил передать…", "He asked me to tell you…", "A grey feather in Murzik's paw.", "Listen to Он просил передать", p("7-4")),
    v("br7-5", "Я тоже помню.", "I remember too.", "Asya closes her eyes and smiles.", "Listen to Я тоже помню", p("7-5")),
    v("br7-6", "мой альбом", "my sketchbook", "An old, fat sketchbook tied with string.", "Listen to мой альбом", p("7-6")),
    v("br7-7", "Теперь он твой.", "Now it's yours.", "Asya puts the sketchbook into Murzik's paws.", "Listen to Теперь он твой", p("7-7")),
    v("br7-8", "Дальше пойдём вместе.", "From now on we'll go together.", "Three figures on the embankment: Asya, Murzik and Tom.", "Listen to Дальше пойдём вместе", p("7-8")),
  ],
  letters: [
    letter("альбом", "al'-BOM: stress on the end; soft л.", "мой альбом", "my sketchbook"),
  ],
  dialogue: {
    title: "On the old bench",
    note: "Lev — the old white cat in a grey hat. In Oslo he asked Murzik: «Если найдёшь её раньше меня — скажи ей, что Лев помнит Севилью».",
    lines: [
      line("murzik", "Бабушка, это тебе от Долорес. Она тебя ждёт. А это инжир от Мары.", "Grandma, this is for you from Dolores. She's waiting for you. And these are figs from Mara."),
      line("asya", "Веер Долорес… Я сама его расписала! И инжир! Все меня помнят.", "Dolores's fan… I painted it myself! And figs! Everyone remembers me."),
      line("murzik", "И ещё. В Осло я встретил Льва. Он просил передать: «Лев помнит Севилью». А в Севилье, на празднике, я видел его снова. Он опять исчез.", "And one more thing. In Oslo I met Lev. He asked me to tell you: “Lev remembers Seville.” And in Seville, at the festival, I saw him again. He disappeared again."),
      line("asya", "Лев… Я тоже помню. Это долгая история. Я расскажу её тебе — в дороге.", "Lev… I remember too. It's a long story. I'll tell it to you — on the road."),
      line("asya", "А это мой первый альбом. С него всё началось пятьдесят лет назад. Теперь он твой.", "And this is my first sketchbook. It all began with it fifty years ago. Now it's yours."),
      line("tom", "В дороге? Значит…", "On the road? So…"),
      line("asya", "Да. Дальше пойдём вместе. Мне нужно собрать свои рисунки — и найти одного старого кота.", "Yes. From now on we'll go together. I need to gather my drawings — and find one old cat."),
    ],
    gist: choice("br7-d1", "What does Asya decide?", [
      ["To travel on together with Murzik and Tom.", true],
      ["To stay in Bratislava alone.", false],
      ["To go back to Seville tomorrow.", false],
    ]),
  },
  grammar: [
    {
      title: "A2 review: the whole level",
      paragraphs: [
        "Verbs: aspect (делал / сделал), prefixes (пришёл, уехал, вышел), imperatives (позвони, не волнуйся), -ся verbs, если + future, бы (хотел бы, мог бы).",
        "Cases and words: genitive (нет чего, пять роз), dative (кому, мне надо), instrumental (с кем), accusative (вижу кошку), comparatives (лучше, чем), short adjectives (рад, готов), который, свой и себя.",
      ],
      examples: [
        { ru: "Мы искали её почти год и наконец нашли — на набережной Дуная.", en: "We looked for her for almost a year and finally found her — on the Danube embankment." },
        { ru: "Если бы не Том, я бы не дошёл (не дошла).", en: "If it weren't for Tom, I wouldn't have made it." },
      ],
    },
  ],
  tasks: [
    listen("br7-t1", "Audio story: Asya talks about herself. How long has she been travelling and drawing?", "Пятьдесят лет назад я уехала из дома с одним альбомом и одним карандашом. Я рисовала в Лионе, в Цюрихе, в Севилье, в Ницце. Я платила за комнаты рисунками и дружила с теми, кто меня приютил. Я много раз хотела вернуться. Но всегда находился ещё один город. А теперь у меня есть внук, который нашёл меня сам.", [
      ["Fifty years.", true],
      ["Fifteen years.", false],
      ["Five years.", false],
    ]),
    listen("br7-t2", "Listen to the end of Asya's story. What does she have now?", "Я много раз хотела вернуться. Но всегда находился ещё один город. А теперь у меня есть внук, который нашёл меня сам.", [
      ["A grandson who found her himself.", true],
      ["A house in Paris.", false],
      ["A new sketchbook.", false],
    ]),
    choice("br7-t3", "A2 review: “We looked for her for many months and finally found her.” Which is right?", [
      ["Мы искали её много месяцев и наконец нашли.", true],
      ["Мы нашли её много месяцев и наконец искали.", false],
      ["Мы искали её много месяца и наконец находили.", false],
    ], { skill: "grammar" }),
    read("br7-t4", "Read the first page of Asya's sketchbook. Where did she start?", "Альбом № 1\nПариж. Начало пути.\nЕсли найдёшь этот альбом — верни его рыжей кошке в соломенной шляпе.\nА.", [
      ["In Paris.", true],
      ["In Bratislava.", false],
      ["In Seville.", false],
    ]),
    script("br7-t5", "Talk to Asya.", [
      { speaker: "Asya", text: "Ты прошёл такой длинный путь. Ты устал?" },
      { speaker: "You", answer: "Немного. Но я так рад(а), что нашёл (нашла) тебя!", options: ["Немного. Но я так рад(а), что нашёл (нашла) тебя!", "Немного. Но я рада, что найду тебя вчера.", "Немного. Номер ещё не готов."] },
      { speaker: "Asya", text: "Дальше пойдём вместе?" },
      { speaker: "You", answer: "Конечно! Я бы очень хотел(а).", options: ["Конечно! Я бы очень хотел(а).", "Конечно! Я хочу бы очень.", "Конечно! Заверните, пожалуйста."] },
    ], { skill: "review" }),
    match("br7-t6", "A2 review: match the Russian with the English.", [
      ["часы с кукушкой", "a cuckoo clock"],
      ["веер", "a fan"],
      ["ракушка", "a shell"],
      ["альбом", "a sketchbook"],
    ], { skill: "review" }),
    speak("br7-t7", "Расскажи о своём путешествии по уровню A2.", "Я побывал(а) в восемнадцати городах. Я научился (научилась) говорить о жизни: о погоде, о деньгах, о здоровье и о чувствах. И я очень рад(а)!", "I've been to eighteen cities. I've learned to talk about life: the weather, money, health and feelings. And I'm very happy!", {
      help: "Tell out loud what you've learned on A2.",
    }),
  ],
  reward: {
    itemId: "asyasketchbook",
    itemName: "Asya's sketchbook",
    itemNameRu: "Альбом Аси",
    ru: "Альбом бабушки — теперь мой!",
    en: "Grandma's sketchbook — mine now!",
    a11y: "An old, fat sketchbook tied with string lies open: tiny drawings of cats, boats, clocks and rivers fill every page.",
    image: p("reward-7"),
    steps: ["Asya gives Murzik her very first sketchbook.", "Cats, boats, clocks, rivers — where it all began.", "Murzik calls Aunt Olya and Musya; Tom sends Lena a photo of the three of them.", "On the last page Murzik draws three figures on a bench. Asya, Tom — and himself."],
  },
};

export const bratislavaLessons: Lesson[] = [bratislava1, bratislava2, bratislava3, bratislava4, bratislava5, bratislava6, bratislava7];
