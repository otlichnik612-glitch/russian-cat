import { images as img, pic } from "../art";
import { choice, fill, letter, line, listen, match, missing, script, speak, spell, v } from "../make";
import type { Lesson } from "../types";

/* Paris · «Первый разговор» · lessons 1–3 */

export const lesson1: Lesson = {
  id: "a1-paris-1",
  level: "A1",
  cityId: "paris",
  number: 1,
  title: "Hello!",
  minutes: 6,
  goals: ["Say hello to a friend and politely", "Ask someone's name and say yours", "Say “Nice to meet you”"],
  vocabNote:
    "Привет! is for friends and children. Здравствуйте! is the polite hello for adults you do not know. When in doubt, say Здравствуйте!",
  vocab: [
    v("l1-1", "Привет!", "Hi!", "Murzik is smiling and waving hello with his paw.", "Play Привет", img.murzik, "privet!"),
    v("l1-2", "Здравствуйте!", "Hello! (polite)", "Murzik stands up straight with his paws together and gives a small polite bow to an elderly lady.", "Play Здравствуйте", pic("paris/l1-2"), "zdravstvuyte!"),
    v("l1-3", "Как тебя зовут?", "What's your name?", "Tom bends down towards Murzik with a friendly, curious face, as if asking a question.", "Play Как тебя зовут", pic("paris/l1-4"), "kak tebya zovut?"),
    v("l1-4", "Меня зовут…", "My name is…", "Murzik puts a paw on his chest and proudly says his name.", "Play Меня зовут", pic("paris/l1-5"), "menya zovut…"),
    v("l1-5", "А тебя?", "And you? (your name?)", "Murzik points a paw at Tom with a questioning look.", "Play А тебя", pic("paris/l1-6"), "a tebya?"),
    v("l1-6", "Очень приятно.", "Nice to meet you.", "Murzik and Tom greet each other in a Paris garden with the Eiffel Tower behind them.", "Play Очень приятно", img.greet, "ochen' priyatno."),
    v("l1-7", "Мне тоже.", "Me too.", "Murzik nods happily and puts a paw on his chest, smiling back at Tom.", "Play Мне тоже", pic("paris/l1-8"), "mne tozhe."),
  ],
  letters: [
    letter("А а", "“a” as in “father”", "А тебя?", "And you?"),
    letter("О о", "“o” as in “more”", "Том", "Tom"),
    letter("К к", "“k” as in “kite”", "Как тебя зовут?", "What's your name?"),
    letter("М м", "“m” as in “mum”", "Меня зовут…", "My name is…"),
    letter("Т т", "“t” as in “top”", "Том", "Tom"),
  ],
  dialogue: {
    title: "A new friend in Paris",
    note: "Я Том means “I'm Tom”. Russian has no word for “am” here.",
    lines: [
      line("tom", "Привет!", "Hi!"),
      line("murzik", "Привет!", "Hi!"),
      line("tom", "Я Том. Как тебя зовут?", "I'm Tom. What's your name?"),
      line("murzik", "Меня зовут Мурзик.", "My name is Murzik."),
      line("tom", "Очень приятно!", "Nice to meet you!"),
      line("murzik", "Мне тоже! Том, а это мой дом.", "Me too! Tom, and this is my home."),
      line("tom", "Ого! Как красиво!", "Wow! How lovely!"),
    ],
    gist: choice("l1-d1", "What is happening?", [
      ["Tom and Murzik meet for the first time.", true],
      ["Tom and Murzik say goodbye.", false],
      ["Tom orders a coffee.", false],
    ]),
  },
  grammar: [
    {
      title: "Привет or Здравствуйте?",
      paragraphs: [
        "Russian has two kinds of “you”: ты for a friend, a child or family, and вы for an adult you do not know well.",
        "With ты: Привет! Как тебя зовут? With вы: Здравствуйте! Как вас зовут?",
      ],
      examples: [
        { ru: "Привет! Как тебя зовут?", en: "Hi! What's your name? (to a friend)" },
        { ru: "Здравствуйте! Как вас зовут?", en: "Hello! What's your name? (polite)" },
      ],
    },
  ],
  tasks: [
    choice("l1-t1", "What does Очень приятно mean?", [
      ["Nice to meet you.", true],
      ["Me too.", false],
      ["Hello.", false],
    ], { skill: "words" }),
    listen("l1-t2", "Listen. What does it mean?", "Как тебя зовут?", [
      ["What's your name?", true],
      ["How are you?", false],
      ["Who is this?", false],
    ]),
    choice("l1-t3", "You meet your new teacher, an adult. What do you say?", [
      ["Привет! Как тебя зовут?", false],
      ["Здравствуйте! Как вас зовут?", true],
    ], { skill: "grammar" }),
    spell("l1-t4", "Build Tom's name from the letters.", "Том"),
    speak("l1-t5", "Привет! Как тебя зовут?", "Привет! Меня зовут Алекс.", "Hi! My name is Alex.", {
      help: "Answer aloud with your own name.",
    }),
    script("l1-t6", "Complete the mini-dialogue.", [
      { speaker: "Tom", text: "Меня зовут Том. А тебя?" },
      {
        speaker: "You",
        answer: "Меня зовут Алекс.",
        options: ["Меня зовут Алекс.", "Мне тоже.", "Как тебя зовут?"],
      },
      { speaker: "Tom", text: "Очень приятно!" },
      {
        speaker: "You",
        answer: "Мне тоже!",
        options: ["Мне тоже!", "Здравствуйте!", "А тебя?"],
      },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bowl",
    itemName: "Bowl",
    itemNameRu: "Миска",
    ru: "Ура! Это моя миска!",
    en: "Yay! This is my bowl!",
    a11y: "Murzik is sitting in his apartment and happily hugging his new bowl. Tom is smiling nearby.",
    image: img.rewardBowl,
    steps: ["Murzik notices the bowl.", "He runs toward it.", "He hugs the bowl.", "Tom smiles."],
    bridge: "Tom promises to come back tomorrow. Murzik wants to know how his new friend is doing.",
  },
};

export const lesson2: Lesson = {
  id: "a1-paris-2",
  level: "A1",
  cityId: "paris",
  number: 2,
  title: "How Are You?",
  minutes: 6,
  goals: ["Ask how someone is", "Say great, fine, OK, so-so or bad", "Ask “And you?”"],
  vocabNote:
    "Russians often answer Нормально (OK). It is a normal, honest answer, not a sad one.",
  vocab: [
    v("l2-1", "Как дела?", "How are you?", "Tom waves at Murzik in the doorway with a warm, curious smile.", "Play Как дела", pic("paris/l2-1"), "kak dela?"),
    v("l2-2", "Хорошо, спасибо.", "Fine, thanks.", "Murzik smiles calmly and shows a thumbs-up with his paw.", "Play Хорошо, спасибо", pic("paris/l2-3"), "khorosho, spasibo."),
    v("l2-3", "Отлично!", "Great!", "Murzik jumps for joy with both paws in the air.", "Play Отлично", pic("paris/l2-4"), "otlichno!"),
    v("l2-4", "Нормально.", "OK. / Not bad.", "Murzik shrugs with a relaxed, neutral face.", "Play Нормально", pic("paris/l2-5"), "normal'no."),
    v("l2-5", "Так себе.", "So-so.", "Murzik tilts his paw from side to side with a doubtful face.", "Play Так себе", pic("paris/l2-6"), "tak sebe."),
    v("l2-6", "Плохо.", "Bad.", "Murzik sits under a small grey rain cloud with drooping ears.", "Play Плохо", pic("paris/l2-7"), "plokho."),
    v("l2-7", "А у тебя?", "And you? (how are you?)", "Murzik points a paw back at Tom with a friendly questioning look.", "Play А у тебя", pic("paris/l2-8"), "a u tebya?"),
  ],
  letters: [
    letter("Р р", "a rolled “r”", "Привет", "Hi", "Looks like English P, but sounds like R!"),
    letter("В в", "“v” as in “van”", "Привет", "Hi", "Looks like English B, but sounds like V!"),
    letter("Н н", "“n” as in “no”", "Нормально", "OK", "Looks like English H, but sounds like N!"),
    letter("С с", "“s” as in “sun”", "Спасибо", "Thank you", "Looks like English C, and always sounds like S."),
    letter("Е е", "“ye” as in “yes”", "Привет", "Hi", "Looks like English E, but sounds like YE."),
  ],
  dialogue: {
    title: "The next morning",
    note: "Madame Dubois is Murzik's elderly neighbour. Murzik is polite with her: Здравствуйте! and Как у вас дела?",
    lines: [
      line("tom", "Привет, Мурзик! Как дела?", "Hi, Murzik! How are you?"),
      line("murzik", "Привет! Так себе. А у тебя?", "Hi! So-so. And you?"),
      line("tom", "Отлично!", "Great!"),
      line("murzik", "Здравствуйте, мадам Дюбуа! Как у вас дела?", "Hello, Madame Dubois! How are you?"),
      line("neighbour", "Хорошо, спасибо. А у тебя?", "Fine, thank you. And you?"),
      line("murzik", "Теперь — отлично!", "Now — great!"),
    ],
    gist: choice("l2-d1", "How is Murzik at the end?", [
      ["So-so.", false],
      ["Great.", true],
      ["Bad.", false],
    ]),
  },
  grammar: [
    {
      title: "А тебя? or А у тебя?",
      paragraphs: [
        "After Как тебя зовут? ask back with А тебя? — you want a name.",
        "After Как дела? ask back with А у тебя? — you want to know how someone is. Politely: А у вас?",
      ],
      examples: [
        { ru: "Меня зовут Том. А тебя?", en: "My name is Tom. And you?" },
        { ru: "Хорошо, спасибо. А у тебя?", en: "Fine, thanks. And you?" },
      ],
    },
  ],
  tasks: [
    match("l2-t1", "Match the Russian with the English.", [
      ["Отлично!", "Great!"],
      ["Нормально.", "OK."],
      ["Так себе.", "So-so."],
      ["Плохо.", "Bad."],
    ], { skill: "words" }),
    listen("l2-t2", "Listen. What did you hear?", "А у тебя?", [
      ["А у тебя?", true],
      ["А тебя?", false],
      ["А у вас?", false],
    ]),
    fill("l2-t3", "Tom asks Как дела? Ask him back.", "Хорошо, спасибо. А", "?", "у тебя", ["у тебя", "тебя", "меня"], { skill: "grammar" }),
    missing("l2-t4", "Which letter is missing? (Hi!)", "При", "ет", "в", ["в", "р", "н"]),
    speak("l2-t5", "Как дела?", "Как дела?", "How are you?", {
      help: "Listen and repeat. Try to sound just like the recording.",
    }),
    listen("l2-t6", "Listen and choose the best reply.", "Очень приятно!", [
      ["Мне тоже!", true],
      ["Так себе.", false],
      ["А у тебя?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chair",
    itemName: "Chair",
    itemNameRu: "Стул",
    ru: "Ура! У меня новый стул!",
    en: "Yay! I have a new chair!",
    a11y: "Murzik is happily sitting on his new chair. His bowl is nearby, and Tom is smiling next to him.",
    image: img.chair,
    steps: ["Murzik notices the new chair.", "He climbs onto it.", "He sits down proudly.", "Tom smiles."],
    bridge: "Tom comes back the next day with his camera — he is a photographer — and a small present. Murzik will need some polite words.",
  },
};

export const lesson3: Lesson = {
  id: "a1-paris-3",
  level: "A1",
  cityId: "paris",
  number: 3,
  title: "Thank You and Sorry",
  minutes: 6,
  goals: ["Say thank you and answer it", "Give something to someone", "Say sorry to a friend and to an adult"],
  vocabNote:
    "Пожалуйста is a busy word: “please”, “you're welcome” (the answer to Спасибо) and, with Вот, “Here you are”. Не за что also answers Спасибо.",
  vocab: [
    v("l3-1", "Спасибо!", "Thank you!", "Murzik holds a small gift box and smiles at Tom gratefully.", "Play Спасибо", pic("paris/l3-1"), "spasibo!"),
    v("l3-2", "Спасибо большое!", "Thank you very much!", "Murzik hugs a gift box with shining eyes and a very big smile.", "Play Спасибо большое", pic("paris/l3-2"), "spasibo bol'shoye!"),
    v("l3-3", "Пожалуйста.", "You're welcome. / Please.", "Tom smiles warmly and makes a small modest gesture with his hand.", "Play Пожалуйста", pic("paris/l3-3"), "pozhaluysta."),
    v("l3-4", "Вот, пожалуйста.", "Here you are.", "Tom holds out a small gift box to Murzik with both hands.", "Play Вот, пожалуйста", pic("paris/l3-5"), "vot, pozhaluysta."),
    v("l3-5", "Извини!", "Sorry! (to a friend)", "Tom has stepped on Murzik's tail by accident and lifts his foot, looking sorry.", "Play Извини", pic("paris/l3-6"), "izvini!"),
    v("l3-6", "Извините!", "Sorry! / Excuse me! (polite)", "Murzik politely raises a paw to get the attention of Madame Dubois on the staircase.", "Play Извините", pic("paris/l3-7"), "izvinite!"),
    v("l3-7", "Ничего страшного.", "It's nothing. / No problem.", "Murzik smiles and waves his tail kindly, showing everything is fine.", "Play Ничего страшного", pic("paris/l3-8"), "nichego strashnogo."),
  ],
  letters: [
    letter("П п", "“p” as in “pen”", "Пожалуйста", "Please"),
    letter("И и", "“ee” as in “see”", "Извини", "Sorry", "Looks like a backwards N. It sounds like EE."),
    letter("З з", "“z” as in “zoo”", "Извините", "Excuse me", "Looks like the number 3."),
    letter("Д д", "“d” as in “dog”", "Да", "Yes"),
    letter("Ж ж", "“s” as in “pleasure”", "Пожалуйста", "Please"),
  ],
  dialogue: {
    title: "A present for Murzik",
    note: "Это тебе means “This is for you.” Ой! is what Russians say when something small goes wrong.",
    lines: [
      line("tom", "Привет, Мурзик! Вот, пожалуйста. Это тебе.", "Hi, Murzik! Here you are. This is for you."),
      line("murzik", "Мне? Спасибо большое!", "For me? Thank you very much!"),
      line("tom", "Пожалуйста!", "You're welcome!"),
      line("murzik", "Ой! Мой хвост!", "Ouch! My tail!"),
      line("tom", "Ой, извини!", "Oh, sorry!"),
      line("murzik", "Ничего страшного.", "It's nothing."),
    ],
    gist: choice("l3-d1", "What happens?", [
      ["Tom gives Murzik a present.", true],
      ["Tom asks for the bill.", false],
      ["Tom says goodbye.", false],
    ]),
  },
  grammar: [
    {
      title: "Извини or Извините?",
      paragraphs: [
        "Извини is for ты: a friend, a child, family. Извините is for вы: an adult you do not know well.",
        "Извините also means “Excuse me” when you want someone's attention.",
      ],
      examples: [
        { ru: "Извини, Том!", en: "Sorry, Tom!" },
        { ru: "Извините, мадам Дюбуа!", en: "Excuse me, Madame Dubois!" },
      ],
    },
  ],
  tasks: [
    choice("l3-t1", "Someone says Спасибо! What can you answer?", [
      ["Пожалуйста.", true],
      ["Извини.", false],
      ["Спасибо большое!", false],
    ], { skill: "words" }),
    listen("l3-t2", "Listen and choose the best reply.", "Ой, извини!", [
      ["Ничего страшного.", true],
      ["Пожалуйста.", false],
      ["Мне тоже.", false],
    ]),
    choice("l3-t3", "You bump into an adult in the street. What do you say?", [
      ["Извини!", false],
      ["Извините!", true],
    ], { skill: "grammar" }),
    spell("l3-t4", "Build the word for “Sorry!” (to a friend).", "Извини"),
    speak("l3-t5", "Вот, пожалуйста. Это тебе.", "Спасибо большое!", "Thank you very much!", {
      help: "Tom gives you a present. Answer aloud.",
    }),
    listen("l3-t6", "Listen. What did you hear?", "Так себе.", [
      ["Так себе.", true],
      ["Тоже хорошо.", false],
      ["Отлично.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sofa",
    itemName: "Sofa",
    itemNameRu: "Диван",
    ru: "Ура! У меня новый диван!",
    en: "Yay! I have a new sofa!",
    a11y: "Murzik is happily sitting on his new sofa in his Paris apartment. His bowl and chair are still nearby, and Tom is standing next to him.",
    image: img.sofa,
    steps: ["In the evening a delivery van arrives.", "It brings a new sofa for Murzik.", "Murzik jumps onto it.", "Tom smiles."],
    bridge: "Tom wants to learn more Russian words. Murzik decides to be his teacher.",
  },
};
