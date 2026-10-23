import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Warsaw · «Мой город» · lessons 1–7.
 * Murzik and Tom rent a room in a colourful house in Warsaw's Old Town from Pani Ewa,
 * a lively elderly lady who learned Russian at school. A letter arrives from Madame Dubois in Paris:
 * a kind old white cat in a hat came asking about Murzik — he said he knew his grandmother.
 * At the end Murzik becomes Tom's tour guide for the travel column.
 */

export const warsaw1: Lesson = {
  id: "a1-warsaw-1",
  level: "A1",
  cityId: "warsaw",
  number: 1,
  title: "What Is There in Town?",
  minutes: 5,
  goals: ["Ask what there is in a place", "Say what there is and isn't", "Talk about your neighbourhood"],
  vocabNote:
    "Есть means “there is”: Здесь есть парк. For “there isn't”, use нет and the “of” form you learned in Istanbul: Здесь нет моря.",
  vocab: [
    v("wa1-1", "Что здесь есть?", "What is there here?", "Murzik looks around a big colourful old square with a curious face.", "Play Что здесь есть", pic("warsaw/1-1")),
    v("wa1-2", "Здесь есть парк.", "There's a park here.", "A green park with old trees, a pond and a little palace.", "Play Здесь есть парк", pic("warsaw/1-2")),
    v("wa1-3", "река", "river", "A wide river with a long bridge and the city on its bank.", "Play река", pic("warsaw/1-3")),
    v("wa1-4", "площадь", "square", "A big old market square with colourful houses all around it.", "Play площадь", pic("warsaw/1-4")),
    v("wa1-5", "старый город", "old town", "Narrow streets with colourful old houses and a castle at the end.", "Play старый город", pic("warsaw/1-5")),
    v("wa1-6", "Здесь нет моря.", "There's no sea here.", "Murzik looks sadly at a map; there is no blue sea anywhere near Warsaw.", "Play Здесь нет моря", pic("warsaw/1-6")),
    v("wa1-7", "Это мой район.", "This is my neighbourhood.", "Pani Ewa, a lively elderly lady with a red beret, spreads her arms in a cosy street.", "Play Это мой район", pic("warsaw/1-7")),
  ],
  dialogue: {
    title: "Pani Ewa",
    note: "Пани is how Poles politely address a woman. Many older Poles learned Russian at school. Зато — but on the other hand.",
    lines: [
      line("ewa", "Добро пожаловать! Я пани Ева. Это мой район — старый город.", "Welcome! I'm Pani Ewa. This is my neighbourhood — the old town."),
      line("murzik", "Как красиво! А что здесь есть?", "How beautiful! And what is there here?"),
      line("ewa", "Здесь есть площадь, парк и река. И кафе, конечно!", "There's a square, a park and a river. And cafés, of course!"),
      line("murzik", "А море?", "And the sea?"),
      line("ewa", "Нет, здесь нет моря. Зато есть Висла — большая река.", "No, there's no sea here. But there's the Vistula — a big river."),
      line("tom", "Вы хорошо говорите по-русски!", "You speak Russian well!"),
      line("ewa", "Я учила русский в школе. Давно!", "I learned Russian at school. Long ago!"),
    ],
    gist: choice("wa1-d1", "What is NOT in Warsaw?", [
      ["The sea.", true],
      ["A river.", false],
      ["A park.", false],
    ]),
  },
  grammar: [
    {
      title: "Есть and нет",
      paragraphs: [
        "Здесь есть парк. — There is a park here. Здесь есть метро. — There is a metro here.",
        "Здесь нет моря. Здесь нет парка. — “There isn't” uses the “of” form.",
      ],
      examples: [
        { ru: "В городе есть река.", en: "There's a river in the city." },
        { ru: "Здесь нет метро.", en: "There's no metro here." },
      ],
    },
  ],
  tasks: [
    listen("wa1-t1", "Listen. What is there?", "Здесь есть река и парк.", [
      ["A river and a park.", true],
      ["A square and a park.", false],
      ["A river and the sea.", false],
    ]),
    match("wa1-t2", "Match the Russian with the English.", [
      ["река", "river"],
      ["площадь", "square"],
      ["район", "neighbourhood"],
    ], { skill: "words" }),
    fill("wa1-t3", "Complete: “There's no sea here.”", "Здесь нет", ".", "моря", ["моря", "море", "морем"], { skill: "grammar" }),
    spell("wa1-t4", "Build the word for “river”.", "река"),
    speak("wa1-t5", "Что есть в твоём городе?", "В моём городе есть парк и река.", "In my town there's a park and a river.", {
      help: "Talk about your real town: what is there?",
    }),
    listen("wa1-t6", "Listen and choose the best reply.", "Всё на месте?", [
      ["Да! Ничего не пропало.", true],
      ["Здесь нет моря.", false],
      ["Это мой район.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bean-bag",
    itemName: "Bean bag",
    itemNameRu: "Кресло-мешок",
    ru: "Ура! Кресло-мешок!",
    en: "Yay! A bean bag!",
    a11y: "Murzik sinks happily into a big soft orange bean bag in a small room with a window onto colourful old houses.",
    image: pic("warsaw/reward-1"),
    steps: ["Pani Ewa shows them a small room upstairs.", "The window looks onto the colourful houses of the old town.", "In the corner there is a big soft bean bag.", "Murzik falls into it and doesn't want to get up."],
    bridge: "Tom wants to explore. But where is everything?",
  },
};

export const warsaw2: Lesson = {
  id: "a1-warsaw-2",
  level: "A1",
  cityId: "warsaw",
  number: 2,
  title: "Where Is It?",
  minutes: 6,
  goals: ["Ask where a place is", "Say opposite, next to, around the corner", "Say “between”"],
  vocabNote:
    "Находится means “is located”: Где находится банк? It is a little more formal than Где банк?",
  vocab: [
    v("wa2-1", "Где находится банк?", "Where is the bank?", "Tom stands in a street with a map and asks a passer-by.", "Play Где находится банк", pic("warsaw/2-1")),
    v("wa2-2", "Напротив.", "Opposite.", "Two buildings facing each other across a street; an arrow points across.", "Play Напротив", pic("warsaw/2-2")),
    v("wa2-3", "Рядом с почтой.", "Next to the post office.", "Two buildings side by side; one has a post horn sign without words.", "Play Рядом с почтой", pic("warsaw/2-3")),
    v("wa2-4", "За углом.", "Around the corner.", "An arrow goes around the corner of a building.", "Play За углом", pic("warsaw/2-4")),
    v("wa2-5", "Между кафе и аптекой.", "Between the café and the pharmacy.", "A small building squeezed between a café and a pharmacy with a green cross.", "Play Между кафе и аптекой", pic("warsaw/2-5")),
    v("wa2-6", "Недалеко отсюда.", "Not far from here.", "Pani Ewa points down the street with a smile; a building is close by.", "Play Недалеко отсюда", pic("warsaw/2-6")),
    v("wa2-7", "Спасибо, понятно!", "Thanks, got it!", "Tom nods with a clear, happy face.", "Play Спасибо, понятно", pic("warsaw/2-7")),
  ],
  dialogue: {
    title: "Pani Ewa's directions",
    note: "Магазин — shop. Пончики — Polish doughnuts. Самые вкусные — the tastiest.",
    lines: [
      line("tom", "Пани Ева, где находится банк?", "Pani Ewa, where is the bank?"),
      line("ewa", "Недалеко отсюда. Рядом с почтой.", "Not far from here. Next to the post office."),
      line("murzik", "А аптека?", "And the pharmacy?"),
      line("ewa", "Аптека напротив. А магазин — за углом.", "The pharmacy is opposite. And the shop is around the corner."),
      line("tom", "А где самые вкусные пончики?", "And where are the tastiest doughnuts?"),
      line("ewa", "Между кафе и аптекой! Маленькая пекарня.", "Between the café and the pharmacy! A little bakery."),
      line("tom", "Спасибо, понятно!", "Thanks, got it!"),
    ],
    gist: choice("wa2-d1", "Where is the bank?", [
      ["Next to the post office.", true],
      ["Opposite the pharmacy.", false],
      ["Around the corner.", false],
    ]),
  },
  grammar: [
    {
      title: "Рядом с, между: -ой / -ом",
      paragraphs: [
        "After рядом с (next to) and между (between) words change: почта → рядом с почтой, аптека → с аптекой, банк → с банком, парк → с парком.",
        "Learn them as phrases: рядом с почтой, между кафе и аптекой.",
      ],
      examples: [
        { ru: "рядом с парком", en: "next to the park" },
        { ru: "между банком и почтой", en: "between the bank and the post office" },
      ],
    },
  ],
  tasks: [
    listen("wa2-t1", "Listen. Where is the shop?", "Магазин за углом.", [
      ["Around the corner.", true],
      ["Opposite.", false],
      ["Next to the bank.", false],
    ]),
    match("wa2-t2", "Match the Russian with the English.", [
      ["напротив", "opposite"],
      ["за углом", "around the corner"],
      ["недалеко", "not far"],
    ], { skill: "words" }),
    fill("wa2-t3", "Complete: “next to the park”.", "рядом с", "", "парком", ["парком", "парк", "парке"], { skill: "grammar" }),
    missing("wa2-t4", "Which letter is missing? (between)", "м", "жду", "е", ["е", "и", "а"]),
    speak("wa2-t5", "Где находится аптека?", "Аптека рядом с почтой.", "The pharmacy is next to the post office.", {
      help: "A tourist asks you. Say the pharmacy is next to the post office.",
    }),
    listen("wa2-t6", "Listen and choose the best reply.", "Что здесь есть?", [
      ["Здесь есть парк и река.", true],
      ["За углом.", false],
      ["Спасибо, понятно!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "amber",
    itemName: "Amber pendant",
    itemNameRu: "Янтарь",
    ru: "Ура! Кусочек янтаря!",
    en: "Yay! A piece of amber!",
    a11y: "A warm golden piece of amber on a string hangs in Murzik's window and glows in the sunlight.",
    image: pic("warsaw/reward-2"),
    steps: ["In a little shop around the corner they sell amber.", "It is golden, like honey.", "Murzik buys a small piece on a string.", "In the sun it glows like a little lamp."],
    bridge: "Tom wants to write about Warsaw for the magazine. What is the city like?",
  },
};

export const warsaw3: Lesson = {
  id: "a1-warsaw-3",
  level: "A1",
  cityId: "warsaw",
  number: 3,
  title: "What Is It Like?",
  minutes: 6,
  goals: ["Describe a place", "Use opposites: old and new, noisy and quiet", "Say you like it here"],
  vocabNote:
    "Мне здесь нравится — I like it here. Уютно means cosy, comfortable.",
  vocab: [
    v("wa3-1", "Какой это город?", "What kind of city is it?", "Tom holds his notebook and pen, ready to write his column.", "Play Какой это город", pic("warsaw/3-1")),
    v("wa3-2", "старый / новый", "old / new", "An old stone church next to a new glass skyscraper.", "Play старый / новый", pic("warsaw/3-2b")),
    v("wa3-3", "Здесь много людей.", "There are a lot of people here.", "A busy old town square full of people, tourists and street musicians.", "Play Здесь много людей", pic("warsaw/3-3b")),
    v("wa3-4", "шумный / тихий", "noisy / quiet", "A noisy crossroads with cars next to a quiet courtyard with a sleeping dog.", "Play шумный / тихий", pic("warsaw/3-4b")),
    v("wa3-5", "Какое красивое небо!", "What a beautiful sky!", "A wide pink and orange sunset sky over the roofs of Warsaw.", "Play Какое красивое небо", pic("warsaw/3-5b")),
    v("wa3-6", "Здесь очень уютно.", "It's very cosy here.", "Murzik curls up in a cosy café corner with a cup of cocoa.", "Play Здесь очень уютно", pic("warsaw/3-6")),
    v("wa3-7", "Мне здесь нравится.", "I like it here.", "Murzik smiles at the colourful houses of the old town.", "Play Мне здесь нравится", pic("warsaw/3-7")),
  ],
  dialogue: {
    title: "Tom's column",
    note: "Записываю — I'm writing it down. И то и другое — both.",
    lines: [
      line("tom", "Мурзик, какой это город? Я записываю.", "Murzik, what kind of city is it? I'm writing it down."),
      line("murzik", "Старый! Смотри, какие старые дома. И здесь много людей!", "Old! Look how old the houses are. And there are a lot of people here!"),
      line("tom", "Но там новые дома. Очень новые.", "But over there are new buildings. Very new."),
      line("murzik", "Значит, и то и другое! Центр шумный, а наш район тихий.", "So, both! The centre is noisy, and our neighbourhood is quiet."),
      line("tom", "А тебе здесь нравится?", "And do you like it here?"),
      line("murzik", "Да, мне здесь нравится. Здесь очень уютно.", "Yes, I like it here. It's very cosy here."),
    ],
    gist: choice("wa3-d1", "What is Murzik's neighbourhood like?", [
      ["Quiet.", true],
      ["Noisy.", false],
      ["New.", false],
    ]),
  },
  grammar: [
    {
      title: "Какой? Какая? Какое? Какие?",
      paragraphs: [
        "The question word matches the thing: Какой город? — Старый. Какая улица? — Тихая. Какое кафе? — Новое. Какие дома? — Старые.",
        "The answer matches too: старый город, тихая улица, новое кафе, старые дома.",
      ],
      examples: [
        { ru: "Какая это улица? — Тихая.", en: "What's this street like? — Quiet." },
        { ru: "Какие здесь дома? — Новые.", en: "What are the houses here like? — New." },
      ],
    },
  ],
  tasks: [
    listen("wa3-t1", "Listen. What is the street like?", "Это очень шумная улица.", [
      ["Very noisy.", true],
      ["Very quiet.", false],
      ["Very old.", false],
    ]),
    choice("wa3-t2", "What is the opposite of старый?", [
      ["новый", true],
      ["тихий", false],
      ["шумный", false],
    ], { skill: "words" }),
    fill("wa3-t3", "Complete: “a quiet street”.", "", "улица", "тихая", ["тихая", "тихий", "тихое"], { skill: "grammar" }),
    spell("wa3-t4", "Build the word for “city / town”.", "город"),
    speak("wa3-t5", "Какой твой город?", "Мой город старый и тихий.", "My town is old and quiet.", {
      help: "Describe your real town with two words.",
    }),
    listen("wa3-t6", "Listen and choose the best reply.", "Где находится банк?", [
      ["Рядом с почтой.", true],
      ["Здесь очень уютно.", false],
      ["Старый.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "teddy-bear",
    itemName: "Teddy bear",
    itemNameRu: "Мишка",
    ru: "Ура! Плюшевый мишка!",
    en: "Yay! A teddy bear!",
    a11y: "A brown teddy bear in a little soldier's cap sits on Murzik's bean bag.",
    image: pic("warsaw/reward-3"),
    steps: ["In a museum shop there is a teddy bear.", "Pani Ewa tells them about a famous Polish bear from long ago.", "Murzik loves the story.", "The bear goes home with him."],
    bridge: "When they come home, Pani Ewa is waiting with an envelope. “A letter for you! From Paris!”",
  },
};

export const warsaw4: Lesson = {
  id: "a1-warsaw-4",
  level: "A1",
  cityId: "warsaw",
  number: 4,
  title: "A Letter from Paris",
  minutes: 6,
  goals: ["Understand a short letter", "Start and end a friendly letter", "Say you miss someone"],
  vocabNote:
    "Дорогой (dear) matches the person: Дорогой Мурзик! Дорогая Ева! Я скучаю means “I miss you” (right now).",
  vocab: [
    v("wa4-1", "Тебе письмо!", "There's a letter for you!", "Pani Ewa holds out a blue envelope with a Paris stamp.", "Play Тебе письмо", pic("warsaw/4-1")),
    v("wa4-2", "Дорогой Мурзик!", "Dear Murzik!", "The top of a letter written in neat handwriting, with a little drawing of the Eiffel Tower.", "Play Дорогой Мурзик", pic("warsaw/4-2")),
    v("wa4-3", "Как ты там?", "How are you doing there?", "Madame Dubois writes a letter at her kitchen table in Paris.", "Play Как ты там", pic("warsaw/4-3")),
    v("wa4-4", "У нас всё хорошо.", "Everything is fine here.", "Madame Dubois waters flowers on her sunny Paris balcony.", "Play У нас всё хорошо", pic("warsaw/4-4")),
    v("wa4-5", "Я скучаю.", "I miss you.", "Madame Dubois looks at a photo of Murzik with a gentle smile.", "Play Я скучаю", pic("warsaw/4-5")),
    v("wa4-6", "Пиши!", "Write to me!", "A pen and a blank sheet of paper on a table.", "Play Пиши", pic("warsaw/4-6")),
    v("wa4-7", "Целую!", "Love and kisses!", "Little hearts at the bottom of a letter.", "Play Целую", pic("warsaw/4-7")),
  ],
  dialogue: {
    title: "Madame Dubois writes",
    note: "Murzik reads the letter, and we hear Madame Dubois's voice. Спрашивал о тебе — he asked about you. Он знал — he knew.",
    lines: [
      line("murzik", "От мадам Дюбуа! «Дорогой Мурзик!»", "From Madame Dubois! “Dear Murzik!”"),
      line("neighbour", "Как ты там? У нас всё хорошо. Я скучаю.", "How are you doing there? Everything is fine here. I miss you."),
      line("neighbour", "Вчера приходил старый белый кот в шляпе. Он спрашивал о тебе.", "Yesterday an old white cat in a hat came. He asked about you."),
      line("neighbour", "Он сказал: «Я знал его бабушку».", "He said: “I knew his grandmother.”"),
      line("neighbour", "Пиши! Целую, мадам Дюбуа.", "Write to me! Love and kisses, Madame Dubois."),
      line("tom", "Кот в шляпе? Мурзик, это он!", "A cat in a hat? Murzik, it's him!"),
      line("murzik", "Он знал бабушку…", "He knew Grandma…"),
    ],
    gist: choice("wa4-d1", "Who came to Madame Dubois?", [
      ["An old white cat in a hat.", true],
      ["Barsik.", false],
      ["Grandma Asya.", false],
    ]),
  },
  grammar: [
    {
      title: "Дорогой, дорогая — dear",
      paragraphs: [
        "A letter starts with Дорогой + a man's name (Дорогой Мурзик!) or Дорогая + a woman's name (Дорогая Ева!). To several people: Дорогие друзья!",
        "A friendly letter often ends with Целую! or Обнимаю! (Hugs!)",
      ],
      examples: [
        { ru: "Дорогая мадам Дюбуа!", en: "Dear Madame Dubois!" },
        { ru: "Дорогие друзья!", en: "Dear friends!" },
      ],
    },
  ],
  tasks: [
    listen("wa4-t1", "Listen. How are things in Paris?", "У нас всё хорошо.", [
      ["Everything is fine.", true],
      ["Everyone is ill.", false],
      ["It's raining.", false],
    ]),
    match("wa4-t2", "Match the Russian with the English.", [
      ["письмо", "letter"],
      ["Я скучаю.", "I miss you."],
      ["Пиши!", "Write to me!"],
    ], { skill: "words" }),
    choice("wa4-t3", "You write to your friend Anna. How do you start?", [
      ["Дорогая Анна!", true],
      ["Дорогой Анна!", false],
      ["Дорогие Анна!", false],
    ], { skill: "grammar" }),
    spell("wa4-t4", "Build the word for “letter”.", "письмо"),
    speak("wa4-t5", "Как ты там?", "У нас всё хорошо. Я скучаю!", "Everything is fine here. I miss you!", {
      help: "A friend far away asks how you are. Answer aloud.",
    }),
    listen("wa4-t6", "Listen and choose the best reply.", "Тебе здесь нравится?", [
      ["Да, здесь очень уютно.", true],
      ["Целую!", false],
      ["Напротив.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "writing-set",
    itemName: "Writing paper",
    itemNameRu: "Бумага для писем",
    ru: "Ура! Бумага для писем!",
    en: "Yay! Writing paper!",
    a11y: "A neat pile of cream writing paper and envelopes tied with a ribbon on Murzik's table.",
    image: pic("warsaw/reward-4"),
    steps: ["Murzik wants to answer right away.", "Pani Ewa gives him writing paper.", "Cream paper and blue envelopes.", "“A real letter is better than a message,” she says."],
    bridge: "Murzik sits down to write back to Paris.",
  },
};

export const warsaw5: Lesson = {
  id: "a1-warsaw-5",
  level: "A1",
  cityId: "warsaw",
  number: 5,
  title: "Writing Back",
  minutes: 6,
  goals: ["Write a short letter", "Say where you are now", "Say “See you soon!”"],
  vocabNote:
    "After в, city names usually end in -е: в Варшаве, в Париже, в Риме, в Берлине. Москва → в Москве.",
  vocab: [
    v("wa5-1", "Я пишу письмо.", "I'm writing a letter.", "Murzik writes at his table with a fountain pen, his tongue out in concentration.", "Play Я пишу письмо", pic("warsaw/5-1")),
    v("wa5-2", "Мы сейчас в Варшаве.", "We're in Warsaw now.", "Murzik and Tom wave in front of the colourful houses of Warsaw's old town square.", "Play Мы сейчас в Варшаве", pic("warsaw/5-2")),
    v("wa5-3", "Погода хорошая.", "The weather is good.", "A sunny sky over red roofs with a few white clouds.", "Play Погода хорошая", pic("warsaw/5-3")),
    v("wa5-4", "Город очень красивый.", "The city is very beautiful.", "A view of Warsaw's old town from the river at sunset.", "Play Город очень красивый", pic("warsaw/5-4")),
    v("wa5-5", "Я по вам скучаю.", "I miss you.", "Murzik holds the photo of Madame Dubois close to his heart.", "Play Я по вам скучаю", pic("warsaw/5-5")),
    v("wa5-6", "До скорой встречи!", "See you soon!", "Murzik draws a heart at the end of his letter.", "Play До скорой встречи", pic("warsaw/5-6")),
    v("wa5-7", "С любовью, Мурзик.", "With love, Murzik.", "Murzik signs the letter with a little paw print.", "Play С любовью, Мурзик", pic("warsaw/5-7")),
  ],
  dialogue: {
    title: "Murzik's letter",
    note: "Murzik reads his letter aloud to Tom. Расскажите — please tell (polite). О нём — about him.",
    lines: [
      line("murzik", "Том, я пишу письмо. Слушай: «Дорогая мадам Дюбуа!»", "Tom, I'm writing a letter. Listen: “Dear Madame Dubois!”"),
      line("murzik", "«Мы сейчас в Варшаве. Погода хорошая, город очень красивый».", "“We're in Warsaw now. The weather is good, the city is very beautiful.”"),
      line("murzik", "«Кот в шляпе — кто он? Расскажите о нём, пожалуйста!»", "“The cat in the hat — who is he? Please tell me about him!”"),
      line("murzik", "«Я по вам скучаю. До скорой встречи! С любовью, Мурзик»", "“I miss you. See you soon! With love, Murzik.”"),
      line("tom", "Очень хорошо! Отправим завтра.", "Very good! We'll send it tomorrow."),
    ],
    gist: choice("wa5-d1", "What does Murzik ask Madame Dubois?", [
      ["Who the cat in the hat is.", true],
      ["How the weather is in Paris.", false],
      ["To visit him in Warsaw.", false],
    ]),
  },
  grammar: [
    {
      title: "В + city: в Варшаве",
      paragraphs: [
        "Where? в + city with -е: Варшава → в Варшаве, Париж → в Париже, Рим → в Риме, Лондон → в Лондоне.",
        "Some don't change: в Токио, в Осло. Афины → в Афинах (it's plural).",
      ],
      examples: [
        { ru: "Мы сейчас в Риме.", en: "We're in Rome now." },
        { ru: "Она живёт в Лондоне.", en: "She lives in London." },
      ],
    },
  ],
  tasks: [
    listen("wa5-t1", "Listen. Where are they now?", "Мы сейчас в Лондоне.", [
      ["In London.", true],
      ["In Warsaw.", false],
      ["In Paris.", false],
    ]),
    choice("wa5-t2", "How do you end a letter to a friend with love?", [
      ["С любовью, …", true],
      ["Дорогой …", false],
      ["Как ты там?", false],
    ], { skill: "words" }),
    fill("wa5-t3", "Complete: “We're in Warsaw now.”", "Мы сейчас в", ".", "Варшаве", ["Варшаве", "Варшава", "Варшаву"], { skill: "grammar" }),
    missing("wa5-t4", "Which letter is missing? (meeting)", "встр", "ча", "е", ["е", "и", "я"]),
    speak("wa5-t5", "Где ты сейчас?", "Я сейчас дома. Погода хорошая.", "I'm at home now. The weather is good.", {
      help: "A friend writes to you. Say where you are now and what the weather is like.",
    }),
    listen("wa5-t6", "Listen and choose the best reply.", "Тебе письмо!", [
      ["Мне? От кого?", true],
      ["С любовью, Мурзик.", false],
      ["Погода хорошая.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fountain-pen",
    itemName: "Fountain pen",
    itemNameRu: "Перьевая ручка",
    ru: "Ура! Перьевая ручка!",
    en: "Yay! A fountain pen!",
    a11y: "A dark green fountain pen and a small bottle of blue ink on Murzik's table next to a sealed envelope.",
    image: pic("warsaw/reward-5"),
    steps: ["Murzik's letter is ready.", "Pani Ewa looks at his writing and smiles.", "She gives him her old fountain pen.", "“For your next letters.”"],
    bridge: "In the morning they post the letter. Then they need a few things from the shops.",
  },
};

export const warsaw6: Lesson = {
  id: "a1-warsaw-6",
  level: "A1",
  cityId: "warsaw",
  number: 6,
  title: "Open or Closed?",
  minutes: 6,
  goals: ["Ask for the nearest shop", "Ask until when it is open", "Understand open, closed, 24 hours"],
  vocabNote:
    "До скольки? means “until what time?”. The answer uses до + the “of” form of the number: до восьми, до десяти.",
  vocab: [
    v("wa6-1", "Где ближайший магазин?", "Where is the nearest shop?", "Tom stands on a street corner with a shopping bag, looking around.", "Play Где ближайший магазин", pic("warsaw/6-1")),
    v("wa6-2", "Магазин открыт.", "The shop is open.", "A shop with its door wide open and warm light inside.", "Play Магазин открыт", pic("warsaw/6-2")),
    v("wa6-3", "Магазин закрыт.", "The shop is closed.", "A shop with dark windows and a locked door; Murzik presses his nose to the glass.", "Play Магазин закрыт", pic("warsaw/6-3")),
    v("wa6-4", "До скольки работает?", "Until what time is it open?", "Murzik points at the opening hours board with a questioning face; the board shows only clock pictures.", "Play До скольки работает", pic("warsaw/6-4")),
    v("wa6-5", "До десяти.", "Until ten.", "A clock with the hands at ten and a little moon next to it.", "Play До десяти", pic("warsaw/6-5")),
    v("wa6-6", "Круглосуточно.", "24 hours a day.", "A shop glowing at night under the stars, with a sun and a moon on its sign.", "Play Круглосуточно", pic("warsaw/6-6")),
    v("wa6-7", "Всё рядом!", "Everything is close by!", "A map of a small neighbourhood with a shop, a pharmacy, a café and a bakery all close together.", "Play Всё рядом", pic("warsaw/6-7")),
  ],
  dialogue: {
    title: "Late shopping",
    note: "Уже восемь — it's already eight. Хлеб и молоко — bread and milk.",
    lines: [
      line("tom", "Пани Ева, где ближайший магазин? Нам нужны хлеб и молоко.", "Pani Ewa, where is the nearest shop? We need bread and milk."),
      line("ewa", "За углом. Но уже восемь…", "Around the corner. But it's already eight…"),
      line("murzik", "А до скольки он работает?", "And until what time is it open?"),
      line("ewa", "До восьми. Сейчас он уже закрыт.", "Until eight. It's already closed now."),
      line("tom", "Ой! А другой магазин?", "Oh! And another shop?"),
      line("ewa", "Напротив аптеки есть магазин. Он работает круглосуточно!", "Opposite the pharmacy there's a shop. It's open 24 hours a day!"),
      line("murzik", "Ура! Здесь всё рядом!", "Hooray! Everything is close by here!"),
    ],
    gist: choice("wa6-d1", "Why can't they go to the shop around the corner?", [
      ["It's already closed.", true],
      ["It's too far.", false],
      ["It has no bread.", false],
    ]),
  },
  grammar: [
    {
      title: "До + time",
      paragraphs: [
        "До means “until”: до восьми (until eight), до десяти (until ten), до часа (until one).",
        "С … до …: Магазин работает с восьми до десяти. — The shop is open from eight to ten.",
      ],
      examples: [
        { ru: "Аптека работает до девяти.", en: "The pharmacy is open until nine." },
        { ru: "с девяти до шести", en: "from nine to six" },
      ],
    },
  ],
  tasks: [
    listen("wa6-t1", "Listen. Until what time is the pharmacy open?", "Аптека работает до девяти.", [
      ["Until nine.", true],
      ["Until ten.", false],
      ["24 hours a day.", false],
    ]),
    match("wa6-t2", "Match the Russian with the English.", [
      ["открыт", "open"],
      ["закрыт", "closed"],
      ["круглосуточно", "24 hours a day"],
    ], { skill: "words" }),
    choice("wa6-t3", "How do you say “until ten”?", [
      ["до десяти", true],
      ["в десять", false],
      ["через десять", false],
    ], { skill: "grammar" }),
    spell("wa6-t4", "Build the word for “shop”.", "магазин"),
    speak("wa6-t5", "До скольки работает магазин?", "Магазин работает до десяти.", "The shop is open until ten.", {
      help: "A neighbour asks you. Say the shop is open until ten.",
    }),
    listen("wa6-t6", "Listen and choose the best reply.", "Где находится банк?", [
      ["За углом.", true],
      ["До десяти.", false],
      ["Круглосуточно.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "thermos",
    itemName: "Thermos",
    itemNameRu: "Термос",
    ru: "Ура! Тёплый термос!",
    en: "Yay! A thermos!",
    a11y: "A red thermos with a little cup on top stands next to Murzik's bean bag; steam rises from the cup.",
    image: pic("warsaw/reward-6"),
    steps: ["In the 24-hour shop Murzik sees a red thermos.", "“For tea on the road!” says Tom.", "They buy it.", "Now there is always hot tea."],
    bridge: "Tomorrow is the last day. Tom has a plan: Murzik will be his tour guide.",
  },
};

export const warsaw7: Lesson = {
  id: "a1-warsaw-7",
  level: "A1",
  cityId: "warsaw",
  number: 7,
  title: "Tour Guide Murzik",
  minutes: 7,
  goals: ["Show someone around", "Say who lived here", "Understand directions in town by ear"],
  vocabNote:
    "Давай я покажу… means “Let me show…”. Здесь жил… — “… lived here” (жил for a man, жила for a woman).",
  vocab: [
    v("wa7-1", "Давай я покажу тебе город!", "Let me show you the city!", "Murzik in a little guide's cap holds a small flag and smiles at Tom.", "Play Давай я покажу тебе город", pic("warsaw/7-1")),
    v("wa7-2", "Посмотри!", "Look!", "Murzik points up at a tall column with a statue on top in the castle square.", "Play Посмотри", pic("warsaw/7-2")),
    v("wa7-3", "Здесь жил Шопен.", "Chopin lived here.", "An old elegant house with a piano visible in the window.", "Play Здесь жил Шопен", pic("warsaw/7-3")),
    v("wa7-4", "Это моё любимое место.", "This is my favourite place.", "Murzik sits on a bench by the river at sunset with a happy face.", "Play Это моё любимое место", pic("warsaw/7-4")),
    v("wa7-5", "Идём дальше!", "Let's keep going!", "Murzik walks ahead waving his little flag; Tom follows with his camera.", "Play Идём дальше", pic("warsaw/7-5")),
    v("wa7-6", "А вот и русалка!", "And here's the mermaid!", "A bronze statue of a mermaid with a sword and a shield in the old town square.", "Play А вот и русалка", pic("warsaw/7-6")),
    v("wa7-7", "Экскурсия окончена!", "The tour is over!", "Murzik takes a bow; Tom and Pani Ewa clap.", "Play Экскурсия окончена", pic("warsaw/7-7")),
  ],
  dialogue: {
    title: "The best guide",
    note: "Символ Варшавы — the symbol of Warsaw. Лучший гид — the best guide.",
    lines: [
      line("murzik", "Том, давай я покажу тебе город!", "Tom, let me show you the city!"),
      line("tom", "Давай! Я буду фотографировать.", "Let's! I'll take photos."),
      line("murzik", "Посмотри! Это старый город и старая церковь. А здесь жил Шопен.", "Look! This is the old town and an old church. And Chopin lived here."),
      line("murzik", "Идём дальше! А вот и русалка — символ Варшавы.", "Let's keep going! And here's the mermaid — the symbol of Warsaw."),
      line("murzik", "А это моё любимое место — река.", "And this is my favourite place — the river."),
      line("murzik", "Экскурсия окончена!", "The tour is over!"),
      line("ewa", "Браво! Лучший гид в Варшаве!", "Bravo! The best guide in Warsaw!"),
    ],
    gist: choice("wa7-d1", "What is Murzik's favourite place?", [
      ["The river.", true],
      ["Chopin's house.", false],
      ["The mermaid.", false],
    ]),
  },
  grammar: [
    {
      title: "Здесь жил / жила / жили",
      paragraphs: [
        "The past matches the person: Здесь жил Шопен (a man). Здесь жила Мария Кюри (a woman). Здесь жили мои друзья (several people).",
        "This is the same -л / -ла / -ли you learned in Istanbul.",
      ],
      examples: [
        { ru: "Здесь жила моя бабушка.", en: "My grandmother lived here." },
        { ru: "Здесь жили студенты.", en: "Students lived here." },
      ],
    },
  ],
  tasks: [
    listen("wa7-t1", "Listen. Where is the café?", "Идите прямо. Банк будет справа. Кафе напротив банка, рядом с аптекой. Оно работает до десяти.", [
      ["Opposite the bank.", true],
      ["Next to the post office.", false],
      ["Around the corner.", false],
    ], { help: "This is your Warsaw listening test." }),
    choice("wa7-t2", "You want your friend to see something. What do you say?", [
      ["Посмотри!", true],
      ["Пиши!", false],
      ["Целую!", false],
    ], { skill: "words" }),
    fill("wa7-t3", "Complete: “My grandmother lived here.”", "Здесь", "моя бабушка.", "жила", ["жила", "жил", "жили"], { skill: "grammar" }),
    spell("wa7-t4", "Build the word for “place”.", "место"),
    speak("wa7-t5", "Какое твоё любимое место?", "Моё любимое место — парк.", "My favourite place is the park.", {
      help: "Say your real favourite place in your town.",
    }),
    listen("wa7-t6", "Listen and choose the best reply.", "До скольки работает магазин?", [
      ["До десяти.", true],
      ["Здесь жил Шопен.", false],
      ["Посмотри!", false],
    ], { skill: "review" }),
    tf("wa7-t7", "Напротив means “opposite”.", true, "True or false", { skill: "review" }),
  ],
  reward: {
    itemId: "mermaid",
    itemName: "Little mermaid",
    itemNameRu: "Русалка",
    ru: "Ура! Маленькая русалка!",
    en: "Yay! A little mermaid!",
    a11y: "Murzik holds a small bronze figure of the Warsaw mermaid with her sword and shield.",
    image: pic("warsaw/reward-7"),
    steps: ["Pani Ewa has a present for the best guide.", "A little bronze mermaid.", "“She protects Warsaw,” says Pani Ewa.", "“Now she will protect you.”"],
    bridge: "The suitcase is packed. Somewhere out there is a cat in a hat who knew Grandma Asya…",
  },
};
