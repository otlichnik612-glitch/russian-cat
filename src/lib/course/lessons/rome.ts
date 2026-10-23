import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Rome · «Люди и семья» · lessons 1–7.
 * Murzik and Tom stay with Murzik's cousin Barsik, a Russian cat family living in Rome:
 * Aunt Olya (Barsik's mum), Uncle Petya (Barsik's dad) and little sister Musya.
 * Murzik's home here: a small room with a terrace in Barsik's flat.
 */

export const rome1: Lesson = {
  id: "a1-rome-1",
  level: "A1",
  cityId: "rome",
  number: 1,
  title: "My Family",
  minutes: 5,
  goals: ["Introduce your family", "Say that you have a brother or a sister", "Ask “Do you have…?”"],
  vocabNote:
    "У меня есть … means “I have …”, literally “At me there is …”. To ask a friend: У тебя есть …? The short answer is Да, есть.",
  vocab: [
    v("ro1-1", "Это моя семья.", "This is my family.", "Barsik, a plump grey cat, proudly shows a framed family photo of four cats.", "Play Это моя семья", pic("rome/1-1")),
    v("ro1-2", "мама и папа (мать и отец)", "mum and dad (mother and father)", "Two grown-up grey cats, Aunt Olya and Uncle Petya, smile side by side.", "Play мама и папа (мать и отец)", pic("rome/1-2b")),
    v("ro1-3", "брат и сестра", "brother and sister", "Barsik and little Musya stand side by side and smile.", "Play брат и сестра", pic("rome/1-3b")),
    v("ro1-4", "муж и жена", "husband and wife", "Aunt Olya and Uncle Petya hold paws, wearing wedding rings, in an old wedding photo.", "Play муж и жена", pic("rome/1-4b")),
    v("ro1-5", "дети: сын и дочь", "children: a son and a daughter", "Aunt Olya hugs her two children: Barsik (her son) and Musya (her daughter).", "Play дети: сын и дочь", pic("rome/1-5b")),
    v("ro1-6", "У меня есть…", "I have…", "Musya holds a toy mouse up proudly in both paws.", "Play У меня есть", pic("rome/1-6b")),
    v("ro1-7", "У тебя есть…? — Да, есть.", "Do you have…? — Yes, I do.", "Barsik asks Murzik a question; Murzik nods, holding a photo of his brother.", "Play У тебя есть? — Да, есть", pic("rome/1-7b")),
  ],
  dialogue: {
    title: "Barsik's family",
    note: "Barsik is Murzik's cousin. Проходите! is the polite or plural “Come in!” Только means “only”.",
    lines: [
      line("barsik", "Мурзик, Том, привет! Проходите!", "Murzik, Tom, hi! Come in!"),
      line("barsik", "Смотрите, это моя семья. Это мама и папа.", "Look, this is my family. This is mum and dad."),
      line("tom", "А это кто?", "And who is this?"),
      line("barsik", "Это моя сестра Муся. Мы их дети.", "This is my sister Musya. We are their children."),
      line("murzik", "У тебя есть брат?", "Do you have a brother?"),
      line("barsik", "Нет, только сестра. А у тебя есть брат?", "No, only a sister. And do you have a brother?"),
      line("murzik", "Да, есть. Он в Москве.", "Yes, I do. He's in Moscow."),
    ],
    gist: choice("ro1-d1", "Who is in Barsik's family?", [
      ["Mum, dad and a little sister.", true],
      ["Mum, dad and a brother.", false],
      ["Only a sister.", false],
    ]),
  },
  grammar: [
    {
      title: "У меня есть …",
      paragraphs: [
        "У меня есть брат — I have a brother. У тебя есть сестра? — Do you have a sister?",
        "Answer with есть: Да, есть. To ask who someone is, say Кто это? — Это моя сестра.",
      ],
      examples: [
        { ru: "У меня есть сестра.", en: "I have a sister." },
        { ru: "У тебя есть брат? — Да, есть.", en: "Do you have a brother? — Yes, I do." },
      ],
    },
  ],
  tasks: [
    match("ro1-t1", "Match the Russian with the English.", [
      ["мама", "mum"],
      ["папа", "dad"],
      ["брат", "brother"],
      ["сестра", "sister"],
    ], { skill: "words" }),
    listen("ro1-t2", "Listen and choose the best reply.", "У тебя есть сестра?", [
      ["Да, есть.", true],
      ["Это моя мама.", false],
      ["Мне тоже.", false],
    ]),
    fill("ro1-t3", "Complete.", "У", "есть брат.", "меня", ["меня", "мне", "я"], { skill: "grammar" }),
    spell("ro1-t4", "Build the word for “sister”.", "сестра"),
    speak("ro1-t5", "У тебя есть брат или сестра?", "Да, у меня есть брат.", "Yes, I have a brother.", {
      help: "Answer aloud about your real family.",
    }),
    listen("ro1-t6", "Listen. What did you hear?", "Нужны яйца.", [
      ["Нужны яйца.", true],
      ["Нужен лук.", false],
      ["Нужна картошка.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "olive-tree",
    itemName: "Olive tree",
    itemNameRu: "Оливковое дерево",
    ru: "Ура! Маленькое оливковое дерево!",
    en: "Yay! A little olive tree!",
    a11y: "A small olive tree in a terracotta pot stands on the sunny terrace of Murzik's room in Rome. Murzik waters it.",
    image: pic("rome/reward-1"),
    steps: ["Barsik shows Murzik his room.", "It has a little terrace.", "Aunt Olya brings a small olive tree.", "Murzik puts it in the sun."],
    bridge: "In the morning Musya wakes Murzik up. She has an important question.",
  },
};

export const rome2: Lesson = {
  id: "a1-rome-2",
  level: "A1",
  cityId: "rome",
  number: 2,
  title: "How Old Are You?",
  minutes: 5,
  goals: ["Ask someone's age", "Say your age", "Talk about an older brother or a younger sister"],
  vocabNote:
    "Russian says age with “to me”: Мне двадцать лет — literally “To me twenty years”. Ему is “to him”, ей is “to her”.",
  vocab: [
    v("ro2-1", "Сколько тебе лет?", "How old are you?", "Musya looks up at Tom with big curious eyes.", "Play Сколько тебе лет", pic("rome/2-1")),
    v("ro2-2", "Мне двадцать лет.", "I'm twenty.", "A birthday cake with the number 20 on it.", "Play Мне двадцать лет", pic("rome/2-2")),
    v("ro2-3", "Сколько ему лет? — Ему три года.", "How old is he? — He's three.", "Murzik points at a photo of a little kitten next to a cake with three candles.", "Play Сколько ему лет? — Ему три года", pic("rome/2-3b")),
    v("ro2-4", "мальчик и девочка", "a boy and a girl", "A little boy and a little girl play with a ball in a Roman square.", "Play мальчик и девочка", pic("rome/2-4b")),
    v("ro2-5", "Ей сорок лет.", "She's forty.", "Aunt Olya smiles next to a cake with the number 40.", "Play Ей сорок лет", pic("rome/2-5")),
    v("ro2-6", "старший брат, младшая сестра", "older brother, younger sister", "Barsik stands tall next to little Musya, with his paw on her head.", "Play старший брат, младшая сестра", pic("rome/2-6b")),
    v("ro2-7", "мужчина и женщина", "a man and a woman", "A man and a woman walk together past a Roman fountain.", "Play мужчина и женщина", pic("rome/2-7b")),
  ],
  dialogue: {
    title: "Musya's question",
    note: "Тому means “to Tom”: names change after this question too. Секрет means “secret”. Musya is still a child: ребёнок (one child), дети (children).",
    lines: [
      line("murzik", "Муся, сколько тебе лет?", "Musya, how old are you?"),
      line("musya", "Мне пять лет! А тебе?", "I'm five! And you?"),
      line("murzik", "Это секрет!", "That's a secret!"),
      line("musya", "А Тому сколько лет?", "And how old is Tom?"),
      line("tom", "Мне двадцать пять лет.", "I'm twenty-five."),
      line("musya", "Ого! Ты старый!", "Wow! You're old!"),
      line("barsik", "Муся! Том молодой! А ты — моя младшая сестра.", "Musya! Tom is young! And you are my younger sister."),
    ],
    gist: choice("ro2-d1", "How old is Musya?", [
      ["Five.", true],
      ["Twenty-five.", false],
      ["Three.", false],
    ]),
  },
  grammar: [
    {
      title: "Год, года or лет?",
      paragraphs: [
        "The word for “years” changes with the number. 1, 21, 31 → год. 2–4, 22–24 → года. 5–20, 25–30 → лет.",
        "Who? Мне (me), тебе (you), ему (him), ей (her): Ему три года. Ей сорок лет.",
      ],
      examples: [
        { ru: "Ему один год.", en: "He's one." },
        { ru: "Ей три года.", en: "She's three." },
        { ru: "Мне двадцать пять лет.", en: "I'm twenty-five." },
      ],
    },
  ],
  tasks: [
    listen("ro2-t1", "Listen. How old is the person?", "Мне двадцать пять лет.", [
      ["25", true],
      ["35", false],
      ["20", false],
    ]),
    choice("ro2-t2", "What does младшая сестра mean?", [
      ["younger sister", true],
      ["older sister", false],
      ["little brother", false],
    ], { skill: "words" }),
    fill("ro2-t3", "Complete.", "Ему три", ".", "года", ["года", "лет", "год"], { skill: "grammar" }),
    missing("ro2-t4", "Which letter is missing? (younger)", "мл", "дшая", "а", ["а", "о", "е"]),
    speak("ro2-t5", "Сколько тебе лет?", "Мне двадцать лет.", "I'm twenty.", {
      help: "Say your real age aloud — or keep it a secret: «Это секрет!»",
    }),
    listen("ro2-t6", "Listen and choose the best reply.", "Кто это?", [
      ["Это моя мама.", true],
      ["Мне пять лет.", false],
      ["Да, есть.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "rocking-chair",
    itemName: "Rocking chair",
    itemNameRu: "Кресло-качалка",
    ru: "Ура! Кресло-качалка!",
    en: "Yay! A rocking chair!",
    a11y: "Murzik rocks happily in an old wooden rocking chair with a knitted cushion, next to the olive tree on his terrace.",
    image: pic("rome/reward-2"),
    steps: ["Uncle Petya brings an old rocking chair.", "It was grandpa's chair.", "It is old, but very comfortable.", "Murzik rocks and smiles."],
    bridge: "Barsik's dad and mum come home. Murzik has never met them.",
  },
};

export const rome3: Lesson = {
  id: "a1-rome-3",
  level: "A1",
  cityId: "rome",
  number: 3,
  title: "What Does He Look Like?",
  minutes: 5,
  goals: ["Ask what someone looks like", "Say tall, short, young, elderly, good-looking", "Say who someone looks like"],
  vocabNote:
    "Какой он? asks “What is he like?” For a woman: Какая она? The answer changes the same way: высокий — высокая.",
  vocab: [
    v("ro3-1", "Какой он?", "What is he like?", "Tom looks at a family photo and points at one of the cats with a curious face.", "Play Какой он", pic("rome/3-1")),
    v("ro3-2", "высокий / невысокий", "tall / short", "A tall grey cat and a short grey cat stand side by side.", "Play высокий / невысокий", pic("rome/3-2b")),
    v("ro3-3", "лицо: глаза, нос, рот", "face: eyes, nose, mouth", "A big, friendly close-up of Murzik's face with his amber eyes, pink nose and smiling mouth.", "Play лицо: глаза, нос, рот", pic("rome/3-3b")),
    v("ro3-4", "молодой / пожилой", "young / elderly", "A young cat and an elderly cat with glasses sit on a bench.", "Play молодой / пожилой", pic("rome/3-4b")),
    v("ro3-5", "У него тёмные волосы.", "He has dark hair.", "Marco, a young man with dark curly hair, smiles.", "Play У него тёмные волосы", pic("rome/3-5b")),
    v("ro3-6", "красивый", "good-looking / beautiful", "Uncle Petya straightens his bow tie in front of a mirror, looking smart.", "Play красивый", pic("rome/3-6")),
    v("ro3-7", "Он похож на папу.", "He looks like his dad.", "Barsik and Uncle Petya stand side by side with the same pose and the same face.", "Play Он похож на папу", pic("rome/3-7")),
  ],
  dialogue: {
    title: "The family photo",
    note: "Дедушка means “grandpa”. Но means “but”. For a girl: Она похожа на маму.",
    lines: [
      line("tom", "Барсик, а какой твой папа?", "Barsik, and what is your dad like?"),
      line("barsik", "Папа высокий и красивый.", "Dad is tall and good-looking."),
      line("murzik", "А мама?", "And mum?"),
      line("barsik", "Мама невысокая.", "Mum is short."),
      line("tom", "А дедушка?", "And grandpa?"),
      line("barsik", "Дедушка пожилой, но очень красивый!", "Grandpa is elderly, but very handsome!"),
      line("murzik", "Смотри, Муся похожа на маму!", "Look, Musya looks like her mum!"),
      line("barsik", "Да! А я похож на папу.", "Yes! And I look like my dad."),
      line("murzik", "У Муси большие зелёные глаза, как у мамы!", "Musya has big green eyes, like her mum!"),
    ],
    gist: choice("ro3-d1", "What is Barsik's dad like?", [
      ["Tall and good-looking.", true],
      ["Short.", false],
      ["Elderly.", false],
    ]),
  },
  grammar: [
    {
      title: "Высокий or высокая?",
      paragraphs: [
        "Adjectives change with the person: он высокий, она высокая. He is tall, she is tall.",
        "The same with похож: он похож на папу, она похожа на маму.",
        "To describe eyes or hair, use у + him/her: У него тёмные волосы. У неё зелёные глаза.",
      ],
      examples: [
        { ru: "Папа высокий.", en: "Dad is tall." },
        { ru: "Мама невысокая.", en: "Mum is short." },
      ],
    },
  ],
  tasks: [
    tf("ro3-t1", "Мама Барсика высокая.", false, "True or false: Barsik's mum is tall.", { skill: "words" }),
    listen("ro3-t2", "Listen. What did you hear?", "Она высокая.", [
      ["Она высокая.", true],
      ["Он высокий.", false],
      ["Она невысокая.", false],
    ]),
    fill("ro3-t3", "Complete.", "Мама", ".", "невысокая", ["невысокая", "невысокий", "невысокое"], { skill: "grammar" }),
    spell("ro3-t4", "Build the word for “young”.", "молодой"),
    speak("ro3-t5", "Какая твоя мама?", "Моя мама невысокая и красивая.", "My mum is short and beautiful.", {
      help: "Describe a real person aloud: your mum, a friend, anyone.",
    }),
    listen("ro3-t6", "Listen. How old is she?", "Ей сорок лет.", [
      ["40", true],
      ["14", false],
      ["4", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mirror",
    itemName: "Round mirror",
    itemNameRu: "Зеркало",
    ru: "Ура! У меня зеркало!",
    en: "Yay! I have a mirror!",
    a11y: "Murzik admires himself in a round mirror with a golden frame on the wall of his room, straightening his scarf.",
    image: pic("rome/reward-3"),
    steps: ["Uncle Petya gives Murzik an old round mirror.", "Murzik hangs it on the wall.", "He looks at himself.", "“Very handsome!” he says."],
    bridge: "Now Murzik knows what the family looks like. But what are they like inside?",
  },
};

export const rome4: Lesson = {
  id: "a1-rome-4",
  level: "A1",
  cityId: "rome",
  number: 4,
  title: "What Is He Like?",
  minutes: 5,
  goals: ["Ask about someone's character", "Say kind, cheerful, clever, serious, lazy", "Say “very”"],
  vocabNote:
    "When you talk about yourself, a woman uses the -ая form: Я весёлая. A man says Я весёлый.",
  vocab: [
    v("ro4-1", "Какой у него характер?", "What is he like (as a person)?", "Tom and Murzik whisper, looking at Barsik asleep on a sofa.", "Play Какой у него характер", pic("rome/4-1")),
    v("ro4-2", "добрый", "kind", "Aunt Olya gives a warm blanket to Musya.", "Play добрый", pic("rome/4-2")),
    v("ro4-3", "весёлый", "cheerful / fun", "Barsik dances and laughs with a spoon as a microphone.", "Play весёлый", pic("rome/4-3")),
    v("ro4-4", "умный", "clever", "Musya wears big glasses and reads a thick book.", "Play умный", pic("rome/4-4")),
    v("ro4-5", "серьёзный", "serious", "Uncle Petya reads a newspaper with a serious face and raised eyebrows.", "Play серьёзный", pic("rome/4-5")),
    v("ro4-6", "ленивый", "lazy", "Barsik lies on the sofa with his eyes closed. The clock shows midday.", "Play ленивый", pic("rome/4-6")),
    v("ro4-7", "Он очень добрый.", "He's very kind.", "Uncle Petya smiles and shares his newspaper and tea with Murzik.", "Play Он очень добрый", pic("rome/4-7")),
  ],
  dialogue: {
    title: "Who is lazy?",
    note: "Весь день means “all day”. Неправда! means “Not true!”",
    lines: [
      line("tom", "Барсик, какой у тебя характер?", "Barsik, what are you like?"),
      line("barsik", "Я весёлый и добрый.", "I'm cheerful and kind."),
      line("musya", "И ленивый! Он спит весь день!", "And lazy! He sleeps all day!"),
      line("barsik", "Неправда! Я… умный!", "Not true! I'm… clever!"),
      line("murzik", "А папа?", "And your dad?"),
      line("barsik", "Папа серьёзный, но очень добрый.", "Dad is serious, but very kind."),
    ],
    gist: choice("ro4-d1", "What does Musya say about Barsik?", [
      ["He is lazy.", true],
      ["He is serious.", false],
      ["He is sad.", false],
    ]),
  },
  grammar: [
    {
      title: "Очень and adjectives",
      paragraphs: [
        "Очень (very) comes before the adjective: очень добрый, очень весёлая.",
        "Ask about a man: Какой у него характер? About a woman: Какой у неё характер?",
      ],
      examples: [
        { ru: "Он очень добрый.", en: "He's very kind." },
        { ru: "Она очень весёлая.", en: "She's very cheerful." },
      ],
    },
  ],
  tasks: [
    match("ro4-t1", "Match the Russian with the English.", [
      ["добрый", "kind"],
      ["весёлый", "cheerful"],
      ["умный", "clever"],
      ["ленивый", "lazy"],
    ], { skill: "words" }),
    listen("ro4-t2", "Listen and choose the best reply.", "Какой у него характер?", [
      ["Он очень добрый.", true],
      ["Ему пять лет.", false],
      ["Он высокий.", false],
    ]),
    choice("ro4-t3", "Find the correct sentence.", [
      ["Она очень весёлая.", true],
      ["Она очень весёлый.", false],
      ["Она очень весело.", false],
    ], { skill: "grammar" }),
    missing("ro4-t4", "Which letter is missing? (cheerful)", "в", "сёлый", "е", ["е", "ё", "и"]),
    speak("ro4-t5", "Какой у тебя характер?", "Я весёлый и добрый.", "I'm cheerful and kind.", {
      help: "Describe yourself aloud. A woman says: Я весёлая и добрая.",
    }),
    listen("ro4-t6", "Listen. What did you hear?", "Он похож на папу.", [
      ["Он похож на папу.", true],
      ["Она похожа на маму.", false],
      ["Он высокий, как папа.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hammock",
    itemName: "Hammock",
    itemNameRu: "Гамак",
    ru: "Ура! Гамак на террасе!",
    en: "Yay! A hammock on the terrace!",
    a11y: "Murzik and Barsik lie together in a striped hammock on the sunny terrace, both with their eyes half closed.",
    image: pic("rome/reward-4"),
    steps: ["Barsik has an old hammock.", "He hangs it on Murzik's terrace.", "Murzik tries it.", "Now they are both a little lazy."],
    bridge: "In the evening Barsik's parents come home from work. What do they do?",
  },
};

export const rome5: Lesson = {
  id: "a1-rome-5",
  level: "A1",
  cityId: "rome",
  number: 5,
  title: "What Do You Do?",
  minutes: 5,
  goals: ["Ask about someone's job", "Name some jobs", "Say where someone works"],
  vocabNote:
    "Кем ты работаешь? literally means “As whom do you work?” Many jobs have a female form: учитель — учительница, студент — студентка.",
  vocab: [
    v("ro5-1", "Кем ты работаешь?", "What do you do?", "Murzik asks Uncle Petya a question at the kitchen door.", "Play Кем ты работаешь", pic("rome/5-1")),
    v("ro5-2", "Я врач.", "I'm a doctor.", "A cat doctor in a white coat with a stethoscope.", "Play Я врач", pic("rome/5-2")),
    v("ro5-3", "Он повар.", "He's a cook.", "Uncle Petya in a tall white chef's hat stirs a big pot.", "Play Он повар", pic("rome/5-3")),
    v("ro5-4", "Она учительница.", "She's a teacher.", "Aunt Olya stands in front of a blackboard with chalk in her paw.", "Play Она учительница", pic("rome/5-4")),
    v("ro5-5", "Я студент.", "I'm a student.", "Barsik carries a backpack and a pile of books, looking sleepy.", "Play Я студент", pic("rome/5-5")),
    v("ro5-6", "Я работаю в…", "I work in / at…", "Tom sits at a laptop in a small office with a window.", "Play Я работаю в", pic("rome/5-6")),
    v("ro5-7", "Она инженер.", "She's an engineer.", "A young woman in a hard hat holds plans in front of a bridge being built.", "Play Она инженер", pic("rome/5-7b")),
  ],
  dialogue: {
    title: "Uncle Petya's kitchen",
    note: "Murzik uses вы with Uncle Petya: Кем вы работаете? В ресторане — in a restaurant. В школе — at a school. Художница means a (woman) artist.",
    lines: [
      line("murzik", "Дядя Петя, кем вы работаете?", "Uncle Petya, what do you do?"),
      line("uncle", "Я повар. Я работаю в ресторане.", "I'm a cook. I work in a restaurant."),
      line("murzik", "А тётя Оля?", "And Aunt Olya?"),
      line("uncle", "Она учительница. Она работает в школе.", "She's a teacher. She works at a school."),
      line("barsik", "А я студент!", "And I'm a student!"),
      line("musya", "А я работаю дома! Я художница!", "And I work at home! I'm an artist!"),
    ],
    gist: choice("ro5-d1", "What is Uncle Petya's job?", [
      ["He's a cook.", true],
      ["He's a doctor.", false],
      ["He's a teacher.", false],
    ]),
  },
  grammar: [
    {
      title: "Я работаю — он работает",
      paragraphs: [
        "The verb ending changes with the person: я работаю, ты работаешь, он / она работает.",
        "With a job you need no verb: Я врач. Он повар. Она учительница.",
      ],
      examples: [
        { ru: "Я работаю в школе.", en: "I work at a school." },
        { ru: "Он работает дома.", en: "He works at home." },
      ],
    },
  ],
  tasks: [
    choice("ro5-t1", "What does врач mean?", [
      ["doctor", true],
      ["cook", false],
      ["student", false],
    ], { skill: "words" }),
    listen("ro5-t2", "Listen. What does it mean?", "Она работает в школе.", [
      ["She works at a school.", true],
      ["She studies at school.", false],
      ["She is a cook.", false],
    ]),
    fill("ro5-t3", "Complete.", "Он", "в ресторане.", "работает", ["работает", "работаю", "работаешь"], { skill: "grammar" }),
    spell("ro5-t4", "Build the word for “cook”.", "повар"),
    speak("ro5-t5", "Кем ты работаешь?", "Я студент.", "I'm a student.", {
      help: "Answer aloud about yourself: Я врач, Я учитель, Я работаю в… A woman student says Я студентка.",
    }),
    listen("ro5-t6", "Listen and choose the best reply.", "Какой у него характер?", [
      ["Он весёлый.", true],
      ["Он повар.", false],
      ["Ему три года.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jug",
    itemName: "Clay jug",
    itemNameRu: "Кувшин",
    ru: "Ура! Глиняный кувшин!",
    en: "Yay! A clay jug!",
    a11y: "A painted clay jug with lemons on it stands on a small shelf in Murzik's room, with a few flowers inside.",
    image: pic("rome/reward-5"),
    steps: ["Uncle Petya's restaurant has old clay jugs.", "He brings one home for Murzik.", "It has lemons painted on it.", "Murzik puts flowers in it."],
    bridge: "Barsik wants Murzik to meet his best friend.",
  },
};

export const rome6: Lesson = {
  id: "a1-rome-6",
  level: "A1",
  cityId: "rome",
  number: 6,
  title: "My Friends",
  minutes: 5,
  goals: ["Introduce a friend", "Say “friend” for a man and for a woman", "Say “we” and “they”"],
  vocabNote:
    "Друг is a male friend, подруга is a female friend. Познакомься! (Let me introduce…) is for a friend; politely: Познакомьтесь!",
  vocab: [
    v("ro6-1", "Это мой друг.", "This is my friend.", "Barsik puts his paw on the shoulder of Marco, a young man with dark curly hair.", "Play Это мой друг", pic("rome/6-1")),
    v("ro6-2", "Это моя подруга.", "This is my friend (a woman).", "Marco introduces Giulia, a young woman with a red scarf and a sketchbook.", "Play Это моя подруга", pic("rome/6-2")),
    v("ro6-3", "Познакомься, это…", "Meet… / Let me introduce…", "Barsik gestures between Murzik and Marco, introducing them.", "Play Познакомься, это", pic("rome/6-3")),
    v("ro6-4", "Мы друзья.", "We're friends.", "Murzik, Barsik, Tom and Marco stand arm in arm, smiling.", "Play Мы друзья", pic("rome/6-4")),
    v("ro6-5", "Они из Италии.", "They're from Italy.", "Marco and Giulia wave in front of the Colosseum with a little Italian flag.", "Play Они из Италии", pic("rome/6-5")),
    v("ro6-6", "Он хороший человек.", "He's a good person.", "Marco helps an old lady carry her shopping bags.", "Play Он хороший человек", pic("rome/6-6b")),
    v("ro6-7", "Давай дружить!", "Let's be friends!", "Murzik holds out his paw to Marco, who shakes it happily.", "Play Давай дружить", pic("rome/6-7")),
  ],
  dialogue: {
    title: "Meet Marco",
    lines: [
      line("barsik", "Мурзик, познакомься, это мой друг Марко.", "Murzik, meet my friend Marco."),
      line("marco", "Привет! Очень приятно!", "Hi! Nice to meet you!"),
      line("murzik", "Мне тоже! Ты говоришь по-русски?", "Me too! Do you speak Russian?"),
      line("marco", "Немного. А это моя подруга Джулия.", "A little. And this is my friend Giulia."),
      line("barsik", "Они из Италии. Мы друзья!", "They're from Italy. We're friends!"),
      line("murzik", "Давай дружить!", "Let's be friends!"),
      line("marco", "Давай!", "Let's!"),
    ],
    gist: choice("ro6-d1", "Who is Marco?", [
      ["Barsik's friend.", true],
      ["Barsik's brother.", false],
      ["A waiter.", false],
    ]),
  },
  grammar: [
    {
      title: "Мы and они",
      paragraphs: [
        "мы — we, они — they. With them, the noun is plural: Мы друзья. Они из Италии.",
        "Друг becomes друзья in the plural. It is irregular: learn it whole.",
      ],
      examples: [
        { ru: "Мы друзья.", en: "We're friends." },
        { ru: "Они вместе.", en: "They're together." },
      ],
    },
  ],
  tasks: [
    tf("ro6-t1", "Марко — брат Барсика.", false, "True or false: Marco is Barsik's brother.", { skill: "words" }),
    listen("ro6-t2", "Listen. What did you hear?", "Это моя подруга.", [
      ["Это моя подруга.", true],
      ["Это мой друг.", false],
      ["Это моя сестра.", false],
    ]),
    choice("ro6-t3", "Find the correct sentence.", [
      ["Мы друзья.", true],
      ["Мы друг.", false],
      ["Мы подруга.", false],
    ], { skill: "grammar" }),
    missing("ro6-t4", "Which letter is missing? (friends)", "др", "зья", "у", ["у", "о", "а"]),
    speak("ro6-t5", "Познакомься, это Марко.", "Привет! Очень приятно!", "Hi! Nice to meet you!", { help: "Barsik introduces his friend. Answer aloud." }),
    listen("ro6-t6", "Listen. What does it mean?", "Он работает дома.", [
      ["He works at home.", true],
      ["He lives at home.", false],
      ["He is at home now.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mosaic",
    itemName: "Mosaic",
    itemNameRu: "Мозаика",
    ru: "Ура! Мозаика с котом!",
    en: "Yay! A mosaic with a cat!",
    a11y: "A small square mosaic of a ginger cat made of colourful stones hangs on the yellow wall of Murzik's room.",
    image: pic("rome/reward-6"),
    steps: ["Marco makes mosaics.", "He makes a little one for his new friend.", "It shows a ginger cat in a scarf.", "Murzik hangs it on the wall."],
    bridge: "Tomorrow is the last evening in Rome. Aunt Olya is cooking a big family dinner.",
  },
};

export const rome7: Lesson = {
  id: "a1-rome-7",
  level: "A1",
  cityId: "rome",
  number: 7,
  title: "Family Dinner",
  minutes: 5,
  goals: ["Invite guests to the table", "Ask someone to pass something", "Thank the host after a meal"],
  vocabNote:
    "За семью! (To family!) is a toast. Russians often make a short toast at a family dinner, even with juice or tea.",
  vocab: [
    v("ro7-1", "Садитесь, пожалуйста!", "Please sit down!", "Aunt Olya invites everyone to a long table set with pasta and bread.", "Play Садитесь, пожалуйста", pic("rome/7-1")),
    v("ro7-2", "Передай, пожалуйста, хлеб.", "Pass the bread, please.", "Musya passes a basket of bread across the table to Murzik.", "Play Передай, пожалуйста, хлеб", pic("rome/7-2")),
    v("ro7-3", "Ещё немного?", "A little more?", "Aunt Olya holds a big spoon over Murzik's plate with a questioning smile.", "Play Ещё немного", pic("rome/7-3")),
    v("ro7-4", "Спасибо, больше не надо.", "Thank you, no more for me.", "Murzik politely raises his paw over his full plate and pats his round tummy.", "Play Спасибо, больше не надо", pic("rome/7-4")),
    v("ro7-5", "Было очень вкусно!", "It was delicious!", "Murzik and Tom smile at Aunt Olya over empty plates.", "Play Было очень вкусно", pic("rome/7-5")),
    v("ro7-6", "За семью!", "To family!", "Everyone at the table raises their glasses of juice for a toast.", "Play За семью", pic("rome/7-6")),
    v("ro7-7", "Приезжайте ещё!", "Come again!", "The whole family waves goodbye at the door.", "Play Приезжайте ещё", pic("rome/7-7")),
  ],
  dialogue: {
    title: "The last evening in Rome",
    note: "Ужин готов means “Dinner is ready”. Паста is pasta.",
    lines: [
      line("aunt", "Садитесь, пожалуйста! Ужин готов.", "Please sit down! Dinner is ready."),
      line("tom", "Спасибо! Ммм, паста!", "Thank you! Mmm, pasta!"),
      line("murzik", "Муся, передай, пожалуйста, хлеб.", "Musya, pass the bread, please."),
      line("uncle", "За семью!", "To family!"),
      line("aunt", "Мурзик, ещё немного?", "Murzik, a little more?"),
      line("murzik", "Спасибо, больше не надо. Было очень вкусно!", "Thank you, no more for me. It was delicious!"),
      line("aunt", "Приезжайте ещё!", "Come again!"),
    ],
    gist: choice("ro7-d1", "What do they eat?", [
      ["Pasta.", true],
      ["Paella.", false],
      ["Soup.", false],
    ]),
  },
  grammar: [
    {
      title: "Передай and Садитесь",
      paragraphs: [
        "The -те rule again: to a friend Передай! Садись! To a guest, or to several people: Передайте! Садитесь!",
        "Было вкусно means “It was tasty”. Было is the past of “is”: learn it in this phrase.",
      ],
      examples: [
        { ru: "Передайте, пожалуйста, хлеб.", en: "Pass the bread, please. (polite)" },
        { ru: "Садись, Мурзик!", en: "Sit down, Murzik!" },
      ],
    },
  ],
  tasks: [
    listen("ro7-t1", "Listen to Barsik. How old is his sister?", "Это моя семья. Мама — учительница, папа — повар. У меня есть сестра. Ей пять лет.", [
      ["5", true],
      ["15", false],
      ["50", false],
    ], { help: "This is your Rome listening test." }),
    choice("ro7-t2", "You invite your friend's mother to sit down at the table. What do you say?", [
      ["Садитесь, пожалуйста!", true],
      ["Садись!", false],
    ], { skill: "grammar" }),
    choice("ro7-t3", "Ещё немного? You are full. What do you say?", [
      ["Спасибо, больше не надо.", true],
      ["Передай, пожалуйста, хлеб.", false],
      ["За семью!", false],
    ], { skill: "words" }),
    spell("ro7-t4", "Build the word for “family”.", "семья"),
    speak("ro7-t5", "Thank the host after dinner.", "Спасибо! Было очень вкусно!", "Thank you! It was delicious!", { promptLang: undefined }),
    listen("ro7-t6", "Listen. What did you hear?", "Мне пять лет.", [
      ["Мне пять лет.", true],
      ["Ей пять лет.", false],
      ["Ему пять лет.", false],
    ], { skill: "review" }),
    listen("ro7-t7", "Listen and choose the best reply.", "Кем ты работаешь?", [
      ["Я студент.", true],
      ["Мне двадцать лет.", false],
      ["Это мой друг.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "family-photo",
    itemName: "Family photo",
    itemNameRu: "Семейное фото",
    ru: "Ура! Наше семейное фото!",
    en: "Yay! Our family photo!",
    a11y: "A framed photo of the whole family at the dinner table: Aunt Olya, Uncle Petya, Barsik, Musya, Murzik and Tom, all smiling.",
    image: pic("rome/reward-7"),
    steps: ["After dinner Uncle Petya takes a photo.", "Everyone is in it, even Tom.", "Aunt Olya puts it in a frame.", "Murzik hugs it."],
    bridge: "The bags are packed. Barsik whispers: “Write to me from the next city!”",
  },
};
