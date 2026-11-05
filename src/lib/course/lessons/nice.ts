import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Nice · «Пляж и знакомства» · A2 lessons 1–7.
 * On the back of Asya's twentieth drawing was one word: «Ницца». Murzik and Tom rent a room in the old town.
 * Dasha (about 28) rents out sun loungers on the beach, studies design and draws every morning on the seafront.
 * She introduces them to her friends; sunset on Castle Hill; Tom misses Lena. Alain (about 75), who runs the
 * newspaper kiosk on the seafront, has an envelope: a week ago an old ginger cat in a straw hat left it
 * «для рыжего котёнка». A new postcard: «Я близко». In lesson 7 Murzik glimpses Lev on the seafront.
 * Grammar: reflexive verbs — купаться, познакомиться, встретиться, одеваться, смеяться, imperatives in -ся/-сь.
 */

const p = (name: string) => pic(`nice/${name}`);

export const nice1: Lesson = {
  id: "a2-nice-1",
  level: "A2",
  cityId: "nice",
  number: 1,
  title: "On the Beach",
  minutes: 8,
  goals: ["Rent a sun lounger", "Talk about swimming and sunbathing", "Use verbs with -ся: я купаюсь"],
  vocabNote: "Купаться — to swim, to bathe (in the sea). Загорать — to sunbathe. Взять напрокат — to rent, to hire.",
  vocab: [
    v("ni1-1", "купаться в море", "to swim in the sea", "Tom splashes in clear blue water.", "Listen to купаться в море", p("1-1")),
    v("ni1-2", "загорать", "to sunbathe", "A man lies on a sun lounger with his eyes closed.", "Listen to загорать", p("1-2")),
    v("ni1-3", "взять напрокат лежак", "to rent a sun lounger", "A row of blue sun loungers on the beach.", "Listen to взять напрокат лежак", p("1-3")),
    v("ni1-4", "зонтик от солнца", "a beach umbrella, a sunshade", "A big blue-and-white umbrella over a lounger.", "Listen to зонтик от солнца", p("1-4")),
    v("ni1-5", "крем от солнца", "sun cream", "A white tube of sun cream with a little sun on it.", "Listen to крем от солнца", p("1-5")),
    v("ni1-6", "Вода холодная?", "Is the water cold?", "Murzik dips one paw into the sea.", "Listen to Вода холодная", p("1-6")),
    v("ni1-7", "галька", "pebbles", "Smooth round grey and white pebbles.", "Listen to галька", p("1-7")),
    v("ni1-8", "Я не умею плавать.", "I can't swim.", "Murzik holds a rubber ring, looking worried.", "Listen to Я не умею плавать", p("1-8")),
  ],
  letters: [
    letter("купаться", "ku-PA-tsa: -ться sounds like “tsa”.", "Ты будешь купаться?", "Are you going to swim?"),
    letter("лежак", "li-ZHAK: stress on the end; е before the stress sounds like и.", "два лежака", "two sun loungers"),
  ],
  dialogue: {
    title: "Blue umbrellas",
    note: "The beaches in Nice are covered with pebbles, not sand. Dasha rents out sun loungers in the summer.",
    lines: [
      line("dasha", "Привет! Хотите взять напрокат лежак?", "Hi! Would you like to rent a sun lounger?"),
      line("tom", "Да, два лежака и зонтик, пожалуйста.", "Yes, two loungers and an umbrella, please."),
      line("dasha", "Тридцать евро на весь день.", "Thirty euros for the whole day."),
      line("murzik", "Ой, здесь не песок, а галька!", "Oh, there's no sand here — just pebbles!"),
      line("dasha", "Да, в Ницце пляжи с галькой. Вы будете купаться?", "Yes, the beaches in Nice are pebbly. Are you going to swim?"),
      line("tom", "Я буду купаться, а Мурзик — загорать. Вода холодная?", "I'll swim, and Murzik will sunbathe. Is the water cold?"),
      line("dasha", "Нет, тёплая, двадцать четыре градуса. Только не забудьте крем от солнца!", "No, it's warm, twenty-four degrees. Just don't forget the sun cream!"),
      line("murzik", "А я не умею плавать. Я буду загорать под зонтиком.", "And I can't swim. I'll sunbathe under the umbrella."),
    ],
    gist: choice("ni1-d1", "Why won't Murzik swim?", [
      ["He can't swim.", true],
      ["The water is too cold.", false],
      ["He has no sun cream.", false],
    ]),
  },
  grammar: [
    {
      title: "Verbs with -ся",
      paragraphs: [
        "Some verbs end in -ся: купаться, улыбаться, учиться. Conjugate the verb as usual, then add -ся after a consonant or ь and -сь after a vowel.",
        "я купаюсь, ты купаешься, он / она купается, мы купаемся, вы купаетесь, они купаются.",
      ],
      examples: [
        { ru: "Мы купаемся каждое утро.", en: "We swim every morning." },
        { ru: "Вы купаетесь в море?", en: "Do you swim in the sea?" },
      ],
    },
  ],
  tasks: [
    listen("ni1-t1", "Listen. How warm is the water?", "Нет, тёплая, двадцать четыре градуса. Только не забудьте крем от солнца!", [
      ["Twenty-four degrees.", true],
      ["Fourteen degrees.", false],
      ["Thirty degrees.", false],
    ]),
    choice("ni1-t2", "“Do you swim in the sea every day?” (to a friend) Which is right?", [
      ["Ты купаешься в море каждый день?", true],
      ["Ты купаешь в море каждый день?", false],
      ["Ты купаешьсь в море каждый день?", false],
    ], { skill: "grammar" }),
    fill("ni1-t3", "Choose the right form: “We swim every morning.”", "Мы", "каждое утро.", "купаемся", ["купаемся", "купаемсь", "купаем"], { skill: "grammar" }),
    read("ni1-t4", "Read the price board. How much are two sun loungers and one umbrella?", "ПЛЯЖ «ГОЛУБОЙ ЗОНТИК»\nЛежак — 12 € в день\nЗонтик — 6 € в день\nПолотенце — 3 €\nКрем от солнца — бесплатно!", [
      ["30 euros.", true],
      ["18 euros.", false],
      ["24 euros.", false],
    ]),
    match("ni1-t5", "Match the Russian with the English.", [
      ["загорать", "to sunbathe"],
      ["галька", "pebbles"],
      ["зонтик от солнца", "a beach umbrella"],
      ["крем от солнца", "sun cream"],
    ], { skill: "words" }),
    tf("ni1-t6", "The beaches in Nice are covered with sand.", false, "True or false?", { skill: "listening" }),
    speak("ni1-t7", "Что ты любишь делать на пляже?", "Я люблю купаться в море. А загорать не люблю — я всегда сижу под зонтиком.", "I love swimming in the sea. But I don't like sunbathing — I always sit under an umbrella.", {
      help: "Say out loud what you like doing on the beach.",
    }),
  ],
  reward: {
    itemId: "stripedtowel",
    itemName: "Striped beach towel",
    itemNameRu: "Пляжное полотенце",
    ru: "Полосатое, как я!",
    en: "Striped — just like me!",
    a11y: "An orange-and-white striped beach towel hangs over a chair in a small room with green shutters.",
    image: p("reward-1"),
    steps: ["Murzik and Tom rent a room in the old town: a yellow house with green shutters.", "Dasha gives Murzik an orange-and-white striped towel.", "“Полосатое, как ты!”", "Murzik hangs it over the chair to dry."],
    bridge: "The next morning Dasha isn't at work. She's sitting on the seafront with a sketchbook. Time to get to know each other properly.",
  },
};

export const nice2: Lesson = {
  id: "a2-nice-2",
  level: "A2",
  cityId: "nice",
  number: 2,
  title: "Let's Get Acquainted",
  minutes: 8,
  goals: ["Get to know someone", "Say how long you have lived somewhere", "Use познакомиться с кем"],
  vocabNote: "Познакомиться с кем — to get to know someone, to meet someone for the first time. It takes the instrumental: с Дашей, с Томом.",
  vocab: [
    v("ni2-1", "Давайте познакомимся!", "Let's introduce ourselves!", "Dasha holds out her hand with a big smile.", "Listen to Давайте познакомимся", p("2-1")),
    v("ni2-2", "Мы с вами знакомы?", "Have we met before?", "Tom squints at Dasha, trying to remember.", "Listen to Мы с вами знакомы", p("2-2")),
    v("ni2-3", "Я здесь в отпуске.", "I'm here on holiday.", "Tom in sunglasses with a backpack on the seafront.", "Listen to Я здесь в отпуске", p("2-3")),
    v("ni2-4", "Вы здесь давно?", "Have you been here long?", "Murzik looks up at Dasha with curiosity.", "Listen to Вы здесь давно", p("2-4")),
    v("ni2-5", "Я живу здесь пять лет.", "I've lived here for five years.", "Dasha shows five fingers.", "Listen to Я живу здесь пять лет", p("2-5")),
    v("ni2-6", "Чем вы занимаетесь?", "What do you do?", "Tom gestures at Dasha's sketchbook.", "Listen to Чем вы занимаетесь", p("2-6")),
    v("ni2-7", "Я учусь на дизайнера.", "I'm studying to be a designer.", "Dasha's sketchbook full of bright patterns.", "Listen to Я учусь на дизайнера", p("2-7")),
    v("ni2-8", "Рад(а) с вами познакомиться.", "Pleased to meet you.", "Murzik bows politely, paw on his chest.", "Listen to Рад(а) с вами познакомиться", p("2-8")),
  ],
  letters: [
    letter("познакомимся", "pa-zna-KO-mim-sya: stress on КО; the first о sounds like а.", "Давайте познакомимся!", "Let's introduce ourselves!"),
    letter("в отпуске", "VOT-pus-ki: в joins the next word; stress on ОТ; the unstressed е sounds like и.", "Я здесь в отпуске.", "I'm here on holiday."),
  ],
  dialogue: {
    title: "On the seafront",
    note: "In Russian “I've lived here for five years” is present tense: Я живу здесь пять лет — I live here five years.",
    lines: [
      line("dasha", "Доброе утро! Мы с вами знакомы? А, вы вчера брали лежаки!", "Good morning! Have we met? Ah, you rented loungers yesterday!"),
      line("tom", "Да! Давайте познакомимся. Я Том, а это Мурзик. Мы здесь в отпуске… почти.", "Yes! Let's introduce ourselves. I'm Tom, and this is Murzik. We're here on holiday… almost."),
      line("dasha", "А я Даша. Рада с вами познакомиться.", "And I'm Dasha. Pleased to meet you."),
      line("murzik", "Вы здесь давно?", "Have you been here long?"),
      line("dasha", "Я живу здесь пять лет. Учусь на дизайнера, а летом работаю на пляже.", "I've lived here for five years. I'm studying to be a designer, and in summer I work on the beach."),
      line("tom", "А чем вы занимаетесь по утрам? Вы рисуете?", "And what do you do in the mornings? Do you draw?"),
      line("dasha", "Да, каждое утро — на набережной. Море, люди, собаки…", "Yes, every morning on the seafront. The sea, people, dogs…"),
      line("murzik", "Мы ищем художницу! Пожилую рыжую кошку. Вы её не видели?", "We're looking for an artist! An old ginger cat. Have you seen her?"),
      line("dasha", "Кошку, которая рисует? Нет… Но спросите у Алена в газетном киоске. Он всех знает.", "A cat who draws? No… But ask Alain at the newspaper kiosk. He knows everyone."),
    ],
    gist: choice("ni2-d1", "Who might know something about Asya?", [
      ["Alain from the newspaper kiosk.", true],
      ["Dasha's teacher.", false],
      ["Nobody in Nice.", false],
    ]),
  },
  grammar: [
    {
      title: "Познакомиться с кем",
      paragraphs: [
        "Познакомиться с + instrumental: познакомиться с Дашей, с Томом, с новыми друзьями.",
        "Past tense: я познакомился / познакомилась, мы познакомились. Мы познакомились в Ницце — we met in Nice.",
      ],
      examples: [
        { ru: "Я хочу познакомиться с вашими друзьями.", en: "I'd like to meet your friends." },
        { ru: "Где вы познакомились?", en: "Where did you meet?" },
      ],
    },
  ],
  tasks: [
    listen("ni2-t1", "Listen. How long has Dasha lived in Nice?", "Я живу здесь пять лет. Учусь на дизайнера, а летом работаю на пляже.", [
      ["Five years.", true],
      ["Five months.", false],
      ["Since last summer.", false],
    ]),
    choice("ni2-t2", "“I'd like to meet Dasha.” Which is right?", [
      ["Я хочу познакомиться с Дашей.", true],
      ["Я хочу познакомиться Дашу.", false],
      ["Я хочу познакомиться к Даше.", false],
    ], { skill: "grammar" }),
    fill("ni2-t3", "Choose the right form: “Where did you meet?”", "Где вы", "?", "познакомились", ["познакомились", "познакомили", "познакомитесь"], { skill: "grammar" }),
    read("ni2-t4", "Read Dasha's profile on a drawing website. What does she study?", "Даша, 28 лет\nЖиву в Ницце 5 лет\nУчусь на дизайнера\nРисую море, людей и собак\nЛетом работаю на пляже «Голубой зонтик»", [
      ["Design.", true],
      ["Medicine.", false],
      ["Languages.", false],
    ]),
    match("ni2-t5", "Match the Russian with the English.", [
      ["Мы с вами знакомы?", "Have we met before?"],
      ["Я здесь в отпуске.", "I'm here on holiday."],
      ["Вы здесь давно?", "Have you been here long?"],
      ["Чем вы занимаетесь?", "What do you do?"],
    ], { skill: "words" }),
    tf("ni2-t6", "Dasha has seen an old ginger cat who draws.", false, "True or false?", { skill: "listening" }),
    speak("ni2-t7", "Давайте познакомимся! Чем вы занимаетесь?", "Рад(а) с вами познакомиться! Меня зовут Алекс. Я учусь в университете, а сейчас я здесь в отпуске.", "Pleased to meet you! My name's Alex. I'm a student, and right now I'm here on holiday.", {
      help: "Introduce yourself out loud and say what you do.",
    }),
  ],
  reward: {
    itemId: "dashasketch",
    itemName: "Dasha's sketch of Murzik",
    itemNameRu: "Набросок Даши",
    ru: "Это я — на пляже!",
    en: "That's me — on the beach!",
    a11y: "A quick pencil sketch of a ginger kitten under a beach umbrella is pinned to the wall above the bed.",
    image: p("reward-2"),
    steps: ["While they talk, Dasha draws something.", "Five minutes — and there's Murzik under the umbrella.", "She tears out the page and gives it to him.", "“Подарок на знакомство!”"],
    bridge: "Alain's kiosk is closed: «Закрыто до четверга». Dasha has another idea for the evening.",
  },
};

export const nice3: Lesson = {
  id: "a2-nice-3",
  level: "A2",
  cityId: "nice",
  number: 3,
  title: "Let's Meet Up",
  minutes: 8,
  goals: ["Invite someone and accept", "Agree on a place and time", "Use встретиться, увидеться (each other)"],
  vocabNote: "Some -ся verbs mean “each other”: встретиться (to meet each other), увидеться (to see each other). Увидимся! — See you!",
  vocab: [
    v("ni3-1", "Вы свободны вечером?", "Are you free this evening?", "Dasha calls Tom; the sun is high over the sea.", "Listen to Вы свободны вечером", p("3-1")),
    v("ni3-2", "Мы собираемся на закат.", "We're going to watch the sunset.", "A hill above the sea; the sky turning orange.", "Listen to Мы собираемся на закат", p("3-2")),
    v("ni3-3", "Присоединяйтесь!", "Join us!", "Dasha waves them over to a group of friends.", "Listen to Присоединяйтесь", p("3-3")),
    v("ni3-4", "Давайте встретимся на набережной.", "Let's meet on the seafront.", "A long curved seafront with palm trees.", "Listen to Давайте встретимся на набережной", p("3-4")),
    v("ni3-5", "у синих стульев", "by the blue chairs", "A row of blue metal chairs facing the sea.", "Listen to у синих стульев", p("3-5")),
    v("ni3-6", "Я могу опоздать.", "I might be late.", "Murzik glances at a clock, worried.", "Listen to Я могу опоздать", p("3-6")),
    v("ni3-7", "Напиши, когда будешь на месте.", "Text me when you get there.", "A phone screen with an unsent message.", "Listen to Напиши, когда будешь на месте", p("3-7")),
    v("ni3-8", "Тогда увидимся!", "See you then!", "Tom gives a thumbs-up to his phone.", "Listen to Тогда увидимся", p("3-8")),
  ],
  letters: [
    letter("свободны", "sva-BOD-ny: stress on БОД; the first о sounds like а.", "Вы свободны?", "Are you free?"),
    letter("стульев", "STUL'-yef: soft л, then й; the final в sounds like ф.", "у синих стульев", "by the blue chairs"),
  ],
  dialogue: {
    title: "A phone call",
    note: "Замковый холм — Castle Hill, a park above the old town with a view over the sea.",
    lines: [
      line("dasha", "Том, привет! Вы свободны вечером?", "Hi, Tom! Are you free this evening?"),
      line("tom", "Да, а что?", "Yes, why?"),
      line("dasha", "Мы с друзьями собираемся на закат на Замковый холм. Присоединяйтесь!", "My friends and I are going to watch the sunset on Castle Hill. Join us!"),
      line("tom", "С радостью! Где встречаемся?", "Gladly! Where are we meeting?"),
      line("dasha", "Давайте встретимся на набережной, у синих стульев, в восемь.", "Let's meet on the seafront, by the blue chairs, at eight."),
      line("tom", "Я могу опоздать — я очень долго собираюсь.", "I might be late — I take ages to get ready."),
      line("dasha", "Ничего страшного. Напиши, когда будешь на месте.", "No problem. Text me when you get there."),
      line("tom", "Хорошо. Тогда увидимся!", "OK. See you then!"),
    ],
    gist: choice("ni3-d1", "Where and when do they meet?", [
      ["On the seafront by the blue chairs, at eight.", true],
      ["On Castle Hill, at six.", false],
      ["At Alain's kiosk, at eight.", false],
    ]),
  },
  grammar: [
    {
      title: "-ся = each other",
      paragraphs: [
        "встретить кого — to meet someone; встретиться — to meet up (with each other). увидеть кого — to see someone; увидеться — to see each other. Careful: познакомиться is to meet for the first time; встретиться is to meet up.",
        "Давайте встретимся… — Let's meet… Увидимся завтра! — See you tomorrow!",
      ],
      examples: [
        { ru: "Мы встретились в Ницце.", en: "We met up in Nice." },
        { ru: "Увидимся у синих стульев!", en: "See you by the blue chairs!" },
      ],
    },
  ],
  tasks: [
    listen("ni3-t1", "Listen. Why might Tom be late?", "Я могу опоздать — я очень долго собираюсь.", [
      ["He takes ages to get ready.", true],
      ["He's still on the beach.", false],
      ["He's tired.", false],
    ]),
    choice("ni3-t2", "“Let's meet on the seafront.” Which is right?", [
      ["Давайте встретимся на набережной.", true],
      ["Давайте встретим на набережной.", false],
      ["Давайте встретимсь на набережной.", false],
    ], { skill: "grammar" }),
    fill("ni3-t3", "Choose the right form: “See you tomorrow!”", "", "завтра!", "Увидимся", ["Увидимся", "Увидим", "Увидят"], { skill: "grammar" }),
    read("ni3-t4", "Read Dasha's message. What should they bring?", "Даша: Ждём вас в 20:00 у синих стульев 🌅\nПотом идём на Замковый холм — минут 20 пешком.\nВозьмите воду и что-нибудь тёплое, наверху ветер!", [
      ["Water and something warm.", true],
      ["Sun cream and a towel.", false],
      ["Food for everyone.", false],
    ]),
    match("ni3-t5", "Match the Russian with the English.", [
      ["Присоединяйтесь!", "Join us!"],
      ["Я могу опоздать.", "I might be late."],
      ["Тогда увидимся!", "See you then!"],
      ["у синих стульев", "by the blue chairs"],
    ], { skill: "words" }),
    tf("ni3-t6", "They are going to watch the sunrise.", false, "True or false?", { skill: "listening" }),
    script("ni3-t7", "Accept Dasha's invitation.", [
      { speaker: "Dasha", text: "Вы свободны вечером? Присоединяйтесь!" },
      { speaker: "You", answer: "С радостью! Где встретимся?", options: ["С радостью! Где встретимся?", "С радостью! Где встретим?", "С радостью! Я не умею плавать."] },
      { speaker: "Dasha", text: "На набережной, у синих стульев, в восемь." },
      { speaker: "You", answer: "Хорошо. Тогда увидимся!", options: ["Хорошо. Тогда увидимся!", "Хорошо. Тогда увидим!", "Хорошо. Вода холодная?"] },
    ], { skill: "speaking" }),
  ],
  reward: {
    itemId: "minibluechair",
    itemName: "Tiny blue chair",
    itemNameRu: "Маленький синий стул",
    ru: "Синий стульчик — как на набережной!",
    en: "A little blue chair — like on the seafront!",
    a11y: "A tiny blue metal chair, the size of a teacup, stands on the windowsill facing the window.",
    image: p("reward-3"),
    steps: ["On the way back Murzik sees a souvenir shop.", "In the window: tiny blue chairs, just like the ones on the seafront.", "He buys one for his windowsill.", "Now it looks at the sea too."],
    bridge: "Seven forty-five. Tom is standing in front of the mirror. He has been standing there for twenty minutes.",
  },
};

export const nice4: Lesson = {
  id: "a2-nice-4",
  level: "A2",
  cityId: "nice",
  number: 4,
  title: "Getting Ready",
  minutes: 8,
  goals: ["Talk about getting ready", "Say you're in a hurry", "Know the difference: одевать / одеваться"],
  vocabNote: "Одевать кого — to dress someone. Одеваться — to dress (yourself). The -ся means “yourself”.",
  vocab: [
    v("ni4-1", "переодеться", "to change (clothes)", "Tom holds a white shirt and a blue one.", "Listen to переодеться", p("4-1")),
    v("ni4-2", "Я быстро переоденусь.", "I'll change quickly.", "Tom dashes behind a door with a shirt.", "Listen to Я быстро переоденусь", p("4-2")),
    v("ni4-3", "причесаться", "to comb your hair", "Tom fights his curly hair with a comb.", "Listen to причесаться", p("4-3")),
    v("ni4-4", "смотреться в зеркало", "to look at yourself in the mirror", "Tom in front of a mirror, turning left and right.", "Listen to смотреться в зеркало", p("4-4")),
    v("ni4-5", "Мы торопимся!", "We're in a hurry!", "Murzik pulls Tom by the sleeve.", "Listen to Мы торопимся", p("4-5")),
    v("ni4-6", "без десяти восемь", "ten to eight", "A clock: 7:50.", "Listen to без десяти восемь", p("4-6")),
    v("ni4-7", "Белая рубашка или синяя?", "The white shirt or the blue one?", "Two shirts on hangers.", "Listen to Белая рубашка или синяя", p("4-7")),
    v("ni4-8", "Я готов. / Я готова.", "I'm ready.", "Tom stands at the door, shoes on.", "Listen to Я готов", p("4-8")),
  ],
  letters: [
    letter("причесаться", "pri-chi-SA-tsa: stress on СА; -ться sounds like “tsa”.", "Мне надо причесаться.", "I need to comb my hair."),
    letter("торопимся", "ta-RO-pim-sya: stress on РО.", "Мы торопимся!", "We're in a hurry!"),
  ],
  dialogue: {
    title: "In front of the mirror",
    note: "Без десяти восемь — ten to eight: literally “without ten, eight”.",
    lines: [
      line("murzik", "Том, мы торопимся! Уже без десяти восемь!", "Tom, we're in a hurry! It's already ten to eight!"),
      line("tom", "Я быстро переоденусь. Белая рубашка или синяя?", "I'll change quickly. The white shirt or the blue one?"),
      line("murzik", "Синяя. Она тебе идёт.", "The blue one. It suits you."),
      line("tom", "А волосы? Я не могу причесаться — они такие кудрявые!", "And my hair? I can't comb it — it's so curly!"),
      line("murzik", "Не смотрись в зеркало так долго! Тебе и так хорошо.", "Don't look in the mirror for so long! You look fine as you are."),
      line("tom", "Всё, я готов. Ты оделся?", "That's it, I'm ready. Are you dressed?"),
      line("murzik", "Я кот. Я всегда одет. Только шарф надену!", "I'm a cat. I'm always dressed. I'll just put on my scarf!"),
    ],
    gist: choice("ni4-d1", "Which shirt does Murzik choose for Tom?", [
      ["The blue one.", true],
      ["The white one.", false],
      ["Neither — Tom wears a T-shirt.", false],
    ]),
  },
  grammar: [
    {
      title: "одевать / одеваться",
      paragraphs: [
        "Without -ся the verb needs an object: Мама одевает ребёнка — Mum dresses the child. With -ся you do it to yourself: Я одеваюсь — I get dressed.",
        "The same pattern: причесать кого / причесаться, мыть кого / мыться, смотреть на кого / смотреться в зеркало.",
      ],
      examples: [
        { ru: "Я быстро оделся и вышел.", en: "I quickly got dressed and went out." },
        { ru: "Даша причёсывает собаку.", en: "Dasha is combing the dog." },
      ],
    },
  ],
  tasks: [
    listen("ni4-t1", "Listen. What time is it?", "Том, мы торопимся! Уже без десяти восемь!", [
      ["Ten to eight.", true],
      ["Ten past eight.", false],
      ["Eight o'clock.", false],
    ]),
    choice("ni4-t2", "“I get dressed quickly.” Which is right?", [
      ["Я быстро одеваюсь.", true],
      ["Я быстро одеваю.", false],
      ["Я быстро одеваюсь себя.", false],
    ], { skill: "grammar" }),
    fill("ni4-t3", "Choose the right form: “Mum is dressing the child.”", "Мама", "ребёнка.", "одевает", ["одевает", "одевается", "одевайся"], { skill: "grammar" }),
    read("ni4-t4", "Read Tom's note to himself. What does he still need to do?", "До 20:00:\n✔ душ\n✔ переодеться (синяя рубашка)\n✘ причесаться\n✔ найти ключи", [
      ["Comb his hair.", true],
      ["Change his shirt.", false],
      ["Find the keys.", false],
    ]),
    match("ni4-t5", "Match the Russian with the English.", [
      ["переодеться", "to change clothes"],
      ["причесаться", "to comb your hair"],
      ["Мы торопимся!", "We're in a hurry!"],
      ["без десяти восемь", "ten to eight"],
    ], { skill: "words" }),
    tf("ni4-t6", "Murzik needs a lot of time to get dressed.", false, "True or false?", { skill: "listening" }),
    speak("ni4-t7", "Ты готов(а)? Мы торопимся!", "Подожди минутку! Я быстро переоденусь и причешусь. Всё, я готов(а)!", "Wait a minute! I'll quickly change and comb my hair. That's it, I'm ready!", {
      help: "Answer out loud: you need a minute to get ready.",
    }),
  ],
  reward: {
    itemId: "pocketmirror",
    itemName: "Pocket mirror",
    itemNameRu: "Карманное зеркальце",
    ru: "Зеркальце — для Тома!",
    en: "A pocket mirror — for Tom!",
    a11y: "A small round pocket mirror in a blue case lies open on the shelf by the door.",
    image: p("reward-4"),
    steps: ["Tom is ready at last — in the blue shirt.", "Murzik hands him a little round pocket mirror.", "“Теперь можно смотреться в зеркало по дороге.”", "Tom laughs — and they run out of the door."],
    bridge: "Eight o'clock, the blue chairs. Dasha's friends have a guitar — and the sun is going down.",
  },
};

export const nice5: Lesson = {
  id: "a2-nice-5",
  level: "A2",
  cityId: "nice",
  number: 5,
  title: "Sunset on the Hill",
  minutes: 8,
  goals: ["Meet a group of new people", "Say you miss someone", "Use смеяться, стесняться and other -ся verbs"],
  vocabNote: "Some verbs are almost always used with -ся: смеяться (to laugh), улыбаться (to smile), бояться (to be afraid), стесняться (to be shy).",
  vocab: [
    v("ni5-1", "Познакомьтесь с моими друзьями.", "Meet my friends.", "Dasha points to two friends with a guitar.", "Listen to Познакомьтесь с моими друзьями", p("5-1")),
    v("ni5-2", "Пойдёмте танцевать!", "Let's all go and dance!", "Dasha waves the whole group over to dance.", "Listen to Пойдёмте танцевать", p("5-2")),
    v("ni5-3", "Не стесняйся!", "Don't be shy!", "Tom hides behind Murzik.", "Listen to Не стесняйся", p("5-3")),
    v("ni5-4", "смеяться", "to laugh", "Everyone laughs, Murzik holds his tummy.", "Listen to смеяться", p("5-4")),
    v("ni5-5", "Над чем ты смеёшься?", "What are you laughing at?", "Murzik laughs, holding his tummy; Lena's face on a phone screen.", "Listen to Над чем ты смеёшься", p("5-5")),
    v("ni5-6", "Я скучаю по тебе.", "I miss you.", "Tom talks to his phone, the sunset behind him.", "Listen to Я скучаю по тебе", p("5-6")),
    v("ni5-7", "вид на море", "a view of the sea", "Roofs of the old town, the bay and the orange sky.", "Listen to вид на море", p("5-7")),
    v("ni5-8", "самый красивый закат", "the most beautiful sunset", "The sun goes down behind the hills; the whole bay turns orange and everyone is quiet.", "Listen to самый красивый закат", p("5-8")),
  ],
  letters: [
    letter("смеёшься", "smi-YO-sha: stress on Ё; шьс is said as one long ш.", "Над чем ты смеёшься?", "What are you laughing at?"),
    letter("скучаю", "sku-CHA-yu: stress on ЧА.", "Я скучаю.", "I miss (someone)."),
  ],
  dialogue: {
    title: "Castle Hill",
    note: "Лена — Tom's friend from Riga and Tallinn. She stayed in Tallinn, so Tom calls her by video.",
    lines: [
      line("dasha", "Познакомьтесь с моими друзьями: это Лука и Сара.", "Meet my friends: this is Luca and Sara."),
      line("tom", "Привет! Ого, какой вид на море! Самый красивый закат в моей жизни.", "Hi! Wow, what a view of the sea! The most beautiful sunset of my life."),
      line("dasha", "Пойдёмте танцевать! Лука и Сара всех научат.", "Let's all go and dance! Luca and Sara will teach everyone."),
      line("tom", "Я стесняюсь… Лучше я позвоню Лене.", "I'm shy… I'd better call Lena."),
      line("tom", "Лена, привет! Смотри, какой закат! Я скучаю по тебе.", "Lena, hi! Look at this sunset! I miss you."),
      line("lena", "Я тоже по тебе скучаю. А над чем смеётся Мурзик?", "I miss you too. And what's Murzik laughing at?"),
      line("murzik", "Над Лукой! Он танцует, как пингвин. Том, не стесняйся, иди танцуй!", "At Luca! He dances like a penguin. Tom, don't be shy, go and dance!"),
    ],
    gist: choice("ni5-d1", "Who does Tom call?", [
      ["Lena.", true],
      ["His grandmother.", false],
      ["Alain.", false],
    ]),
  },
  grammar: [
    {
      title: "Смеяться над чем, скучать по кому",
      paragraphs: [
        "Смеяться над + instrumental: смеяться над Томом, над шуткой. Стесняться (to be shy): Не стесняйся! Улыбаться кому: улыбаться Даше.",
        "Careful: скучать (to miss) has no -ся. Скучать по + dative: Я скучаю по тебе, по маме, по Парижу.",
      ],
      examples: [
        { ru: "Все смеялись над моей шуткой.", en: "Everyone laughed at my joke." },
        { ru: "Мурзик скучает по Парижу.", en: "Murzik misses Paris." },
      ],
    },
  ],
  tasks: [
    listen("ni5-t1", "Listen. What does Tom say to Lena?", "Лена, привет! Смотри, какой закат! Я скучаю по тебе.", [
      ["“I miss you.”", true],
      ["“I'm coming tomorrow.”", false],
      ["“I can't dance.”", false],
    ]),
    choice("ni5-t2", "“What are you laughing at?” Which is right?", [
      ["Над чем ты смеёшься?", true],
      ["О чём ты смеёшь?", false],
      ["Над что ты смеёшься?", false],
    ], { skill: "grammar" }),
    fill("ni5-t3", "Choose the right form: “I miss Paris.”", "Я скучаю по", ".", "Парижу", ["Парижу", "Париж", "Парижем"], { skill: "grammar" }),
    read("ni5-t4", "Read Dasha's post. Where did they watch the sunset?", "Лучший вечер лета! 🌅 Замковый холм, гитара, новые друзья — Том и кот Мурзик. Том сначала стеснялся, а потом танцевал со всеми до одиннадцати!", [
      ["On Castle Hill.", true],
      ["On the beach.", false],
      ["By the blue chairs.", false],
    ]),
    match("ni5-t5", "Match the Russian with the English.", [
      ["Не стесняйся!", "Don't be shy!"],
      ["смеяться", "to laugh"],
      ["Я скучаю по тебе.", "I miss you."],
      ["вид на море", "a view of the sea"],
    ], { skill: "words" }),
    tf("ni5-t6", "Tom calls Lena from the hill.", true, "True or false?", { skill: "listening" }),
    speak("ni5-t7", "По кому или по чему ты скучаешь, когда путешествуешь?", "Когда я путешествую, я скучаю по семье и по друзьям. И немного по дому.", "When I travel, I miss my family and my friends. And home a little.", {
      help: "Say out loud who or what you miss when you travel.",
    }),
  ],
  reward: {
    itemId: "partylights",
    itemName: "String of fairy lights",
    itemNameRu: "Гирлянда",
    ru: "Огоньки — как на холме!",
    en: "Little lights — like on the hill!",
    a11y: "A string of small warm fairy lights hangs along the window frame; outside it's dark blue night.",
    image: p("reward-5"),
    steps: ["The party ends at eleven.", "Sara gives Murzik the fairy lights from the picnic.", "He hangs them round his window.", "Every night his room glows like Castle Hill."],
    bridge: "Thursday. Alain's kiosk is open at last — and Alain has been waiting for a ginger kitten.",
  },
};

export const nice6: Lesson = {
  id: "a2-nice-6",
  level: "A2",
  cityId: "nice",
  number: 6,
  title: "A New Postcard",
  minutes: 8,
  goals: ["Understand a message passed on by someone", "Read a handwritten postcard", "Understand -ся imperatives: улыбайся, не торопись"],
  vocabNote: "Imperatives of -ся verbs: улыбаться → улыбайся / улыбайтесь; учиться → учись / учитесь; торопиться → не торопись. -ся after a consonant, й or ь, -сь after a vowel.",
  vocab: [
    v("ni6-1", "газетный киоск", "a newspaper kiosk", "A small green kiosk full of newspapers and postcards.", "Listen to газетный киоск", p("6-1")),
    v("ni6-2", "Мы вас искали.", "We were looking for you.", "Murzik stands on tiptoe at the kiosk window.", "Listen to Мы вас искали", p("6-2")),
    v("ni6-3", "Она просила передать…", "She asked me to give you…", "Alain holds out an envelope.", "Listen to Она просила передать", p("6-3")),
    v("ni6-4", "для рыжего котёнка", "for a ginger kitten", "Handwriting on an envelope.", "Listen to для рыжего котёнка", p("6-4")),
    v("ni6-5", "Знакомься с людьми.", "Get to know people.", "Murzik surrounded by smiling faces on the seafront.", "Listen to Знакомься с людьми", p("6-5")),
    v("ni6-6", "Улыбайся!", "Smile!", "Murzik smiles, holding the postcard.", "Listen to Улыбайся", p("6-6")),
    v("ni6-7", "Учись у людей.", "Learn from people.", "Faces of the people Murzik has met, like a photo album.", "Listen to Учись у людей", p("6-7")),
    v("ni6-8", "Я близко.", "I'm close.", "Two words in Asya's curly handwriting.", "Listen to Я близко", p("6-8")),
  ],
  letters: [
    letter("торопись", "ta-ra-PEES': stress on ПИСЬ; both о sound like а.", "Не торопись.", "Take your time."),
    letter("котёнка", "ka-TYON-ka: ё is always stressed.", "для рыжего котёнка", "for a ginger kitten"),
  ],
  dialogue: {
    title: "At Alain's kiosk",
    note: "Alain has had the kiosk on the seafront for forty years. He learned Russian from tourists — a word a day.",
    lines: [
      line("murzik", "Здравствуйте! Вы Ален? Мы вас искали. Киоск был закрыт.", "Hello! Are you Alain? We were looking for you. The kiosk was closed."),
      line("alain", "Да, я ездил к дочери. А ты — рыжий котёнок с шарфом?", "Yes, I went to see my daughter. And you're a ginger kitten with a scarf?"),
      line("murzik", "Да… А что?", "Yes… Why?"),
      line("alain", "Неделю назад сюда пришла пожилая кошка. Купила открытку с морем и оставила конверт. Она просила передать его рыжему котёнку.", "A week ago an old cat came here. She bought a postcard with the sea on it and left an envelope. She asked me to give it to a ginger kitten."),
      line("tom", "Как она выглядела?", "What did she look like?"),
      line("alain", "Рыжая, в соломенной шляпе. Всё время улыбалась. Говорила по-русски.", "Ginger, in a straw hat. She smiled the whole time. She spoke Russian."),
      line("murzik", "«Мой рыжий котёнок! Я близко. Не торопись. Знакомься с людьми, учись у них, улыбайся. А.»", "“My ginger kitten! I'm close. Take your time. Get to know people, learn from them, smile. А.”"),
      line("tom", "Она знает, что мы здесь. И она хочет, чтобы мы не торопились.", "She knows we're here. And she wants us to take our time."),
    ],
    gist: choice("ni6-d1", "What did the old cat leave at the kiosk?", [
      ["An envelope with a postcard for Murzik.", true],
      ["A drawing of the kiosk.", false],
      ["Her straw hat.", false],
    ]),
  },
  grammar: [
    {
      title: "Imperatives with -ся",
      paragraphs: [
        "Make the imperative as usual, then add -ся after a consonant, й or ь and -сь after a vowel: улыбайся, знакомься, учись, не торопись, не волнуйся.",
        "Polite or plural: add -тесь: улыбайтесь, знакомьтесь, учитесь, не торопитесь.",
      ],
      examples: [
        { ru: "Знакомьтесь, это Даша.", en: "Let me introduce Dasha. (Meet Dasha.)" },
        { ru: "Не торопитесь, у нас много времени.", en: "Take your time, we have plenty." },
      ],
    },
  ],
  tasks: [
    listen("ni6-t1", "Listen. When did the old cat come to the kiosk?", "Неделю назад сюда пришла пожилая кошка. Купила открытку с морем и оставила конверт.", [
      ["A week ago.", true],
      ["Yesterday.", false],
      ["Thirty years ago.", false],
    ]),
    choice("ni6-t2", "Detective! What was the old cat wearing?", [
      ["A straw hat.", true],
      ["A grey hat with a feather.", false],
      ["A red scarf.", false],
    ], { skill: "listening" }),
    fill("ni6-t3", "Choose the right form: “Smile!” (to a friend)", "", "!", "Улыбайся", ["Улыбайся", "Улыбайсь", "Улыбается"], { skill: "grammar" }),
    read("ni6-t4", "Read the postcard. What does Asya ask Murzik NOT to do?", "Мой рыжий котёнок!\nЯ близко. Не торопись.\nЗнакомься с людьми, учись у них, улыбайся.\nА.", [
      ["To rush.", true],
      ["To smile.", false],
      ["To meet people.", false],
    ]),
    match("ni6-t5", "Match the Russian with the English.", [
      ["газетный киоск", "a newspaper kiosk"],
      ["Мы вас искали.", "We were looking for you."],
      ["Учись у людей.", "Learn from people."],
      ["Я близко.", "I'm close."],
    ], { skill: "words" }),
    tf("ni6-t6", "The old cat spoke French with Alain.", false, "True or false?", { skill: "listening" }),
    speak("ni6-t7", "Что бы ты написал(а) на открытке другу?", "Привет! Не торопись, отдыхай, улыбайся! Знакомься с новыми людьми. Скоро увидимся!", "Hi! Take your time, rest, smile! Get to know new people. See you soon!", {
      help: "Write a postcard to a friend — say it out loud.",
    }),
  ],
  reward: {
    itemId: "seastamps",
    itemName: "Sheet of sea stamps",
    itemNameRu: "Марки с морем",
    ru: "Марки — чтобы отвечать бабушке!",
    en: "Stamps — to write back to Grandma!",
    a11y: "A sheet of small postage stamps with blue waves and white boats lies on the desk next to the sketchpad.",
    image: p("reward-6"),
    steps: ["Alain tears off a sheet of stamps with blue waves.", "“Чтобы ты мог ей ответить.”", "Murzik doesn't know Grandma's address yet.", "But one day he'll write back."],
    bridge: "Their last day in Nice. Dasha comes to say goodbye — and Murzik sees someone he knows on the seafront.",
  },
};

export const nice7: Lesson = {
  id: "a2-nice-7",
  level: "A2",
  cityId: "nice",
  number: 7,
  title: "Nice Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Say goodbye to new friends", "Review everything from Nice"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Nice.",
  vocab: [
    v("ni7-1", "новая открытка", "a new postcard", "Asya's new postcard with the sea on it.", "Listen to новая открытка", p("7-1")),
    v("ni7-2", "Английская набережная", "the Promenade des Anglais", "The long seafront with palm trees and blue chairs.", "Listen to Английская набережная", p("7-2")),
    v("ni7-3", "Мне показалось…", "I thought… (It seemed to me…)", "Murzik rubs his eyes.", "Listen to Мне показалось", p("7-3")),
    v("ni7-4", "белый кот в шляпе", "a white cat in a hat", "Far away on the seafront, a white cat in a grey hat.", "Listen to белый кот в шляпе", p("7-4")),
    v("ni7-5", "Куда он делся?", "Where did he go?", "An empty blue chair; a grey feather on the seat.", "Listen to Куда он делся", p("7-5")),
    v("ni7-6", "Я рад(а), что мы познакомились.", "I'm glad we met.", "Dasha hugs Murzik.", "Listen to Я рад(а), что мы познакомились", p("7-6")),
    v("ni7-7", "Мы ещё встретимся.", "We'll meet again.", "Dasha and Murzik wave at each other.", "Listen to Мы ещё встретимся", p("7-7")),
    v("ni7-8", "поезд в Марсель", "the train to Marseille", "A train at the station; a sign says MARSEILLE.", "Listen to поезд в Марсель", p("7-8")),
  ],
  letters: [
    letter("исчез", "i-SHCHES: сч sounds like щ; stress on the end; the final з sounds like с.", "Он исчез.", "He disappeared."),
  ],
  dialogue: {
    title: "On the Promenade",
    note: "Лев — the old white cat in a grey hat with a feather. Murzik saw him in Oslo. He is looking for Asya too.",
    lines: [
      line("dasha", "Уже уезжаете? Не грусти, Мурзик. Мы ещё встретимся.", "Leaving already? Don't be sad, Murzik. We'll meet again."),
      line("murzik", "Спасибо, Даша! Я рад, что мы познакомились.", "Thank you, Dasha! I'm glad we met."),
      line("tom", "Наш поезд в Марсель через час.", "Our train to Marseille is in an hour."),
      line("murzik", "Смотри! Там, на набережной, — белый кот в шляпе!", "Look! Over there on the seafront — a white cat in a hat!"),
      line("tom", "Где? Куда он делся? Я никого не вижу.", "Where? Where did he go? I can't see anyone."),
      line("murzik", "Он исчез… Мне показалось, это Лев.", "He's disappeared… I thought it was Lev."),
      line("dasha", "Белый кот в серой шляпе? Он каждое утро сидит у синих стульев. Он тоже кого-то ищет.", "A white cat in a grey hat? He sits by the blue chairs every morning. He's looking for someone too."),
    ],
    gist: choice("ni7-d1", "What does Dasha say about the white cat?", [
      ["He sits by the blue chairs every morning and is looking for someone.", true],
      ["She has never seen him.", false],
      ["He works at the kiosk.", false],
    ]),
  },
  grammar: [
    {
      title: "Nice review",
      paragraphs: [
        "Verbs with -ся: я купаюсь, мы купаемся; познакомиться с кем; встретиться, увидимся; одеваться, переодеться, причесаться; смеяться над кем, стесняться; but скучать по кому — no -ся.",
        "Imperatives: улыбайся, знакомься, учись, не торопись, не стесняйся; polite: улыбайтесь, знакомьтесь.",
      ],
      examples: [
        { ru: "Мы познакомились на пляже и виделись каждый вечер.", en: "We met on the beach and saw each other every evening." },
        { ru: "Не торопитесь, улыбайтесь — и всё получится!", en: "Take your time, smile — and everything will work out!" },
      ],
    },
  ],
  tasks: [
    listen("ni7-t1", "Audio story: Dasha talks about her day. What time does she get up in summer?", "Я живу в Ницце пять лет. Летом каждое утро я встаю в шесть и купаюсь в море. Потом я рисую на набережной. Днём я работаю на пляже, а вечером встречаюсь с друзьями на Замковом холме. Зимой я учусь и скучаю по лету.", [
      ["At six.", true],
      ["At seven.", false],
      ["At eight.", false],
    ]),
    choice("ni7-t2", "In Dasha's story, what does she do in winter?", [
      ["She studies and misses the summer.", true],
      ["She works on the beach.", false],
      ["She swims every morning.", false],
    ], { skill: "listening" }),
    choice("ni7-t3", "“We met on the beach.” Which is right?", [
      ["Мы познакомились на пляже.", true],
      ["Мы познакомили на пляже.", false],
      ["Мы познакомилсь на пляже.", false],
    ], { skill: "grammar" }),
    read("ni7-t4", "Read the train ticket. When do they arrive in Marseille?", "НИЦЦА — МАРСЕЛЬ\nОтправление: 10:15\nПрибытие: 12:52\nВагон 4, места 21–22", [
      ["At 12:52.", true],
      ["At 10:15.", false],
      ["At 12:15.", false],
    ]),
    script("ni7-t5", "Say goodbye to Dasha.", [
      { speaker: "Dasha", text: "Не грусти! Мы ещё встретимся." },
      { speaker: "You", answer: "Спасибо! Я рад(а), что мы познакомились.", options: ["Спасибо! Я рад(а), что мы познакомились.", "Спасибо! Я рад(а), что мы познакомили.", "Спасибо! Вода холодная?"] },
      { speaker: "Dasha", text: "Пиши мне! Улыбайся!" },
      { speaker: "You", answer: "Обязательно! До встречи!", options: ["Обязательно! До встречи!", "Обязательно! Мы торопимся!", "Обязательно! Я не умею плавать."] },
    ], { skill: "review" }),
    match("ni7-t6", "Nice review: match the Russian with the English.", [
      ["загорать", "to sunbathe"],
      ["Присоединяйтесь!", "Join us!"],
      ["Не стесняйся!", "Don't be shy!"],
      ["Куда он делся?", "Where did he go?"],
    ], { skill: "review" }),
    speak("ni7-t7", "Как ты познакомился (познакомилась) со своим лучшим другом?", "Мы познакомились в школе. Сначала я стеснялся (стеснялась), а потом мы подружились.", "We met at school. At first I was shy, and then we became friends.", {
      help: "Tell out loud how you met your best friend.",
    }),
  ],
  reward: {
    itemId: "nicepostcard",
    itemName: "Asya's postcard from Nice",
    itemNameRu: "Открытка Аси из Ниццы",
    ru: "«Я близко» — бабушка рядом!",
    en: "“I'm close” — Grandma is near!",
    a11y: "Asya's postcards lie in a row on top of Murzik's suitcase; the newest one, with the sea on it, says «Я близко».",
    image: p("reward-7"),
    steps: ["Murzik puts the new postcard next to Grandma's postcards from Paris and Athens.", "Same handwriting. Same «А.».", "«Я близко. Не торопись.»", "On a blue chair on the seafront, a grey feather is left behind."],
  },
};

export const niceLessons: Lesson[] = [nice1, nice2, nice3, nice4, nice5, nice6, nice7];
