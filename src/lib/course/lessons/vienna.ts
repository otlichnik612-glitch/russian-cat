import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Vienna · «Свободное время» · lessons 1–7.
 * Murzik and Tom rent a small room above an old coffee house.
 * Murzik discovers he loves drawing — like Grandma Asya, though he does not know it yet.
 * Karl, an old street musician, recognises the cat on Asya's postcard: long ago Asya painted
 * while he played, and she taught him Russian. He wrote a waltz for her.
 */

export const vienna1: Lesson = {
  id: "a1-vienna-1",
  level: "A1",
  cityId: "vienna",
  number: 1,
  title: "What Do You Like Doing?",
  minutes: 5,
  goals: ["Ask what someone likes doing", "Say what you love doing", "Say what you don't like"],
  vocabNote:
    "Я люблю can go with a thing (Я люблю музыку) or with an action (Я люблю читать). Russians use люблю for things they really enjoy.",
  vocab: [
    v("vi1-1", "Что ты любишь делать?", "What do you like doing?", "Tom sits at a café table and asks Murzik with a curious smile.", "Play Что ты любишь делать", pic("vienna/1-1")),
    v("vi1-2", "Я люблю музыку.", "I love music.", "Murzik listens to music with his eyes closed; little musical notes float around him.", "Play Я люблю музыку", pic("vienna/1-2")),
    v("vi1-3", "читать", "to read", "Murzik reads a thick book in a cosy armchair.", "Play читать", pic("vienna/1-3")),
    v("vi1-4", "танцевать", "to dance", "Murzik dances happily, spinning on one paw.", "Play танцевать", pic("vienna/1-4")),
    v("vi1-5", "рисовать", "to draw", "Murzik draws a little house with coloured pencils, his tongue out in concentration.", "Play рисовать", pic("vienna/1-5")),
    v("vi1-6", "Я не люблю…", "I don't like…", "Murzik makes a funny face and pushes away a bowl of porridge.", "Play Я не люблю", pic("vienna/1-6")),
    v("vi1-7", "Это моё хобби.", "It's my hobby.", "Tom proudly holds up his camera.", "Play Это моё хобби", pic("vienna/1-7")),
  ],
  dialogue: {
    title: "At the coffee house",
    note: "Фотографировать — to take photos. Правда? — Really?",
    lines: [
      line("tom", "Мурзик, что ты любишь делать?", "Murzik, what do you like doing?"),
      line("murzik", "Я люблю музыку. И я люблю читать.", "I love music. And I love reading."),
      line("tom", "А танцевать?", "And dancing?"),
      line("murzik", "Нет, я не люблю танцевать. А ты?", "No, I don't like dancing. And you?"),
      line("tom", "Я люблю фотографировать. Это моё хобби.", "I love taking photos. It's my hobby."),
      line("murzik", "А я… я люблю рисовать!", "And I… I love drawing!"),
      line("tom", "Правда? Как твоя бабушка Ася!", "Really? Like your Grandma Asya!"),
    ],
    gist: choice("vi1-d1", "What does Murzik NOT like doing?", [
      ["Dancing.", true],
      ["Reading.", false],
      ["Drawing.", false],
    ]),
  },
  grammar: [
    {
      title: "Люблю + thing or action",
      paragraphs: [
        "я люблю, ты любишь. After люблю use a thing or an action: Я люблю музыку. Я люблю рисовать.",
        "To say you don't like it, add не: Я не люблю танцевать.",
      ],
      examples: [
        { ru: "Ты любишь читать?", en: "Do you like reading?" },
        { ru: "Я не люблю спорт.", en: "I don't like sport." },
      ],
    },
  ],
  tasks: [
    listen("vi1-t1", "Listen. What does the person love doing?", "Я люблю танцевать.", [
      ["Dancing.", true],
      ["Drawing.", false],
      ["Reading.", false],
    ]),
    match("vi1-t2", "Match the Russian with the English.", [
      ["читать", "to read"],
      ["рисовать", "to draw"],
      ["танцевать", "to dance"],
    ], { skill: "words" }),
    fill("vi1-t3", "Complete: “Do you like music?”", "Ты", "музыку?", "любишь", ["любишь", "люблю", "любит"], { skill: "grammar" }),
    spell("vi1-t4", "Build the word for “music”.", "музыка"),
    speak("vi1-t5", "Что ты любишь делать?", "Я люблю читать и рисовать.", "I love reading and drawing.", {
      help: "Tell Tom what you really love doing.",
    }),
    listen("vi1-t6", "Listen and choose the best reply.", "Мы заблудились!", [
      ["Не волнуйся!", true],
      ["Мне всё равно.", false],
      ["Это легко!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "easel",
    itemName: "Easel",
    itemNameRu: "Мольберт",
    ru: "Ура! У меня мольберт!",
    en: "Yay! I have an easel!",
    a11y: "Murzik stands at a small wooden easel by the window of his room above a Vienna coffee house, painting with a brush.",
    image: pic("vienna/reward-1"),
    steps: ["Their room is above an old coffee house.", "It smells of coffee and cake.", "In the corner Murzik finds an old wooden easel.", "He starts to paint right away."],
    bridge: "Downstairs in the coffee house there is an old piano. Can anybody play it?",
  },
};

export const vienna2: Lesson = {
  id: "a1-vienna-2",
  level: "A1",
  cityId: "vienna",
  number: 2,
  title: "Can You Play the Piano?",
  minutes: 5,
  goals: ["Ask if someone can play or sing", "Say what you can and can't do", "Ask someone to teach you"],
  vocabNote:
    "Умею means “I know how to”: Я умею плавать — I can swim. To play an instrument is играть на: на гитаре, на пианино.",
  vocab: [
    v("vi2-1", "Ты умеешь играть на пианино?", "Can you play the piano?", "Murzik points at an old piano in a coffee house and looks at Tom.", "Play Ты умеешь играть на пианино", pic("vienna/2-1")),
    v("vi2-2", "Да, умею.", "Yes, I can.", "Tom sits at the piano and plays with a confident smile.", "Play Да, умею", pic("vienna/2-2")),
    v("vi2-3", "Нет, не умею.", "No, I can't.", "Murzik presses one piano key and makes a funny face at the wrong note.", "Play Нет, не умею", pic("vienna/2-3")),
    v("vi2-4", "играть на гитаре", "to play the guitar", "Tom plays a guitar on a café terrace.", "Play играть на гитаре", pic("vienna/2-4")),
    v("vi2-5", "петь", "to sing", "Murzik sings with his mouth wide open and his eyes closed.", "Play петь", pic("vienna/2-5")),
    v("vi2-6", "плавать", "to swim", "Murzik swims happily in a river with a little float ring.", "Play плавать", pic("vienna/2-6")),
    v("vi2-7", "Научи меня!", "Teach me!", "Murzik pulls Tom's sleeve and points at the guitar with pleading eyes.", "Play Научи меня", pic("vienna/2-7")),
  ],
  dialogue: {
    title: "The old piano",
    note: "Немного means “a little”. Пожалуйста here means “Please!”",
    lines: [
      line("murzik", "Том, ты умеешь играть на пианино?", "Tom, can you play the piano?"),
      line("tom", "Нет, не умею. Но я умею играть на гитаре.", "No, I can't. But I can play the guitar."),
      line("murzik", "Правда? А петь?", "Really? And sing?"),
      line("tom", "Петь — немного.", "Sing — a little."),
      line("murzik", "А я не умею играть. Научи меня!", "And I can't play. Teach me!"),
      line("tom", "Хорошо! Завтра.", "OK! Tomorrow."),
    ],
    gist: choice("vi2-d1", "What can Tom play?", [
      ["The guitar.", true],
      ["The piano.", false],
      ["Nothing.", false],
    ]),
  },
  grammar: [
    {
      title: "Умею + action",
      paragraphs: [
        "я умею, ты умеешь + an action: Я умею плавать. Ты умеешь петь?",
        "For instruments use играть на: играть на гитаре, играть на пианино.",
      ],
      examples: [
        { ru: "Я умею играть на гитаре.", en: "I can play the guitar." },
        { ru: "Я не умею петь.", en: "I can't sing." },
      ],
    },
  ],
  tasks: [
    listen("vi2-t1", "Listen. What can the person do?", "Я умею плавать.", [
      ["Swim.", true],
      ["Sing.", false],
      ["Play the piano.", false],
    ]),
    choice("vi2-t2", "What does петь mean?", [
      ["to sing", true],
      ["to swim", false],
      ["to dance", false],
    ], { skill: "words" }),
    fill("vi2-t3", "Complete: “Can you sing?”", "Ты", "петь?", "умеешь", ["умеешь", "умею", "любит"], { skill: "grammar" }),
    missing("vi2-t4", "Which letter is missing? (guitar)", "гит", "ра", "а", ["а", "о", "е"]),
    speak("vi2-t5", "Ты умеешь играть на гитаре?", "Нет, не умею. Научи меня!", "No, I can't. Teach me!", {
      help: "Answer about yourself. If you can't, ask Tom to teach you.",
    }),
    listen("vi2-t6", "Listen and choose the best reply.", "Что ты любишь делать?", [
      ["Я люблю рисовать.", true],
      ["Да, умею.", false],
      ["Это моя сестра.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "guitar",
    itemName: "Guitar",
    itemNameRu: "Гитара",
    ru: "Ура! У меня гитара!",
    en: "Yay! I have a guitar!",
    a11y: "Murzik holds a small old guitar with a red ribbon on it, sitting on his bed above the coffee house.",
    image: pic("vienna/reward-2"),
    steps: ["The coffee-house owner has an old guitar.", "Nobody plays it now.", "He gives it to Murzik.", "Tom shows him the first notes."],
    bridge: "In the morning Tom goes for a run in the park. He asks Murzik: do you do any sport?",
  },
};

export const vienna3: Lesson = {
  id: "a1-vienna-3",
  level: "A1",
  cityId: "vienna",
  number: 3,
  title: "Do You Do Sport?",
  minutes: 6,
  goals: ["Ask about sport", "Say how often you do something", "Invite a friend to the ice rink"],
  vocabNote:
    "Никогда (never) always needs не: Я никогда не бегаю — literally “I never don't run”. That's normal in Russian!",
  vocab: [
    v("vi3-1", "Ты занимаешься спортом?", "Do you do any sport?", "Tom in running clothes asks Murzik, who is lying on the sofa.", "Play Ты занимаешься спортом", pic("vienna/3-1")),
    v("vi3-2", "Я играю в футбол.", "I play football.", "Murzik kicks a football in a green park.", "Play Я играю в футбол", pic("vienna/3-2")),
    v("vi3-3", "Я бегаю.", "I run.", "Tom jogs along a park path among autumn trees.", "Play Я бегаю", pic("vienna/3-3")),
    v("vi3-4", "каждый день", "every day", "A row of seven little suns, each with a tick under it.", "Play каждый день", pic("vienna/3-4")),
    v("vi3-5", "иногда", "sometimes", "A row of seven little suns; only two have a tick under them.", "Play иногда", pic("vienna/3-5")),
    v("vi3-6", "никогда", "never", "A row of seven little suns, none with a tick; Murzik shrugs.", "Play никогда", pic("vienna/3-6")),
    v("vi3-7", "Пойдём на каток!", "Let's go to the ice rink!", "Murzik holds up a pair of ice skates in front of an outdoor ice rink with lights.", "Play Пойдём на каток", pic("vienna/3-7")),
  ],
  dialogue: {
    title: "In the park",
    note: "По утрам means “in the mornings”. Это весело! — It's fun!",
    lines: [
      line("tom", "Мурзик, ты занимаешься спортом?", "Murzik, do you do any sport?"),
      line("murzik", "Иногда. Я играю в футбол. А ты?", "Sometimes. I play football. And you?"),
      line("tom", "Я бегаю. Каждый день, по утрам.", "I run. Every day, in the mornings."),
      line("murzik", "Каждый день? А я никогда не бегаю!", "Every day? And I never run!"),
      line("tom", "Ха-ха! А на коньках?", "Ha-ha! And skating?"),
      line("murzik", "Да! Пойдём на каток! Это весело!", "Yes! Let's go to the ice rink! It's fun!"),
    ],
    gist: choice("vi3-d1", "How often does Tom run?", [
      ["Every day.", true],
      ["Sometimes.", false],
      ["Never.", false],
    ]),
  },
  grammar: [
    {
      title: "Never: никогда не",
      paragraphs: [
        "каждый день (every day), иногда (sometimes), никогда (never). With никогда you also say не before the verb.",
        "Я никогда не бегаю. — I never run. Я иногда играю в футбол. — I sometimes play football.",
      ],
      examples: [
        { ru: "Я никогда не пою.", en: "I never sing." },
        { ru: "Он бегает каждый день.", en: "He runs every day." },
      ],
    },
  ],
  tasks: [
    listen("vi3-t1", "Listen. How often?", "Иногда я играю в футбол.", [
      ["Sometimes.", true],
      ["Every day.", false],
      ["Never.", false],
    ]),
    match("vi3-t2", "Match the Russian with the English.", [
      ["каждый день", "every day"],
      ["иногда", "sometimes"],
      ["никогда", "never"],
    ], { skill: "words" }),
    choice("vi3-t3", "How do you say “I never run”?", [
      ["Я никогда не бегаю.", true],
      ["Я никогда бегаю.", false],
      ["Я не никогда бегаю.", false],
    ], { skill: "grammar" }),
    spell("vi3-t4", "Build the word for “football”.", "футбол"),
    speak("vi3-t5", "Ты занимаешься спортом?", "Да, я бегаю каждый день.", "Yes, I run every day.", {
      help: "Answer about yourself: what sport, and how often?",
    }),
    listen("vi3-t6", "Listen and choose the best reply.", "Ты умеешь плавать?", [
      ["Да, умею.", true],
      ["Иногда.", false],
      ["Я бегаю.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "skates",
    itemName: "Ice skates",
    itemNameRu: "Коньки",
    ru: "Ура! У меня коньки!",
    en: "Yay! I have ice skates!",
    a11y: "A small pair of white ice skates with red laces hangs on a hook by Murzik's door.",
    image: pic("vienna/reward-3"),
    steps: ["At the ice rink Murzik falls five times.", "Then he falls only twice.", "Then he skates!", "Tom buys him his own little skates."],
    bridge: "Tom has a surprise: two tickets to the Vienna Opera!",
  },
};

export const vienna4: Lesson = {
  id: "a1-vienna-4",
  level: "A1",
  cityId: "vienna",
  number: 4,
  title: "At the Opera",
  minutes: 6,
  goals: ["Find your seat", "Understand short theatre words", "Say you really liked something"],
  vocabNote:
    "Мне понравилось is the past of Мне нравится: “I liked it” (after the show). It is the same for everyone.",
  vocab: [
    v("vi4-1", "Где наши места?", "Where are our seats?", "Tom and Murzik in smart clothes look around a huge red-and-gold opera hall.", "Play Где наши места", pic("vienna/4-1")),
    v("vi4-2", "Ряд пять, место десять.", "Row five, seat ten.", "A theatre ticket with the numbers 5 and 10, held in Murzik's paw.", "Play Ряд пять, место десять", pic("vienna/4-2")),
    v("vi4-3", "Тише!", "Quiet! / Shh!", "A lady in the opera hall puts a finger to her lips.", "Play Тише", pic("vienna/4-3")),
    v("vi4-4", "Начинается!", "It's starting!", "The lights go down and the big red curtain begins to open.", "Play Начинается", pic("vienna/4-4")),
    v("vi4-5", "антракт", "interval", "People chat in a grand foyer with glasses of juice during the break.", "Play антракт", pic("vienna/4-5")),
    v("vi4-6", "Браво!", "Bravo!", "Murzik stands up and claps wildly; singers bow on the stage.", "Play Браво", pic("vienna/4-6")),
    v("vi4-7", "Мне очень понравилось!", "I really liked it!", "Murzik walks out of the opera with shining, happy eyes.", "Play Мне очень понравилось", pic("vienna/4-7")),
  ],
  dialogue: {
    title: "A night at the opera",
    note: "Вот они! — Here they are! Ещё раз — once more.",
    lines: [
      line("tom", "Где наши места?", "Where are our seats?"),
      line("murzik", "Ряд пять, место десять… Вот они!", "Row five, seat ten… Here they are!"),
      line("tom", "Тише, Мурзик! Начинается!", "Shh, Murzik! It's starting!"),
      line("murzik", "Ой… Какая красота!", "Oh… How beautiful!"),
      line("tom", "Сейчас антракт. Тебе нравится?", "It's the interval now. Do you like it?"),
      line("murzik", "Очень! Браво! Мне очень понравилось! Ещё раз!", "Very much! Bravo! I really liked it! Once more!"),
    ],
    gist: choice("vi4-d1", "Does Murzik like the opera?", [
      ["Yes, very much.", true],
      ["No, it's boring.", false],
      ["He doesn't know yet.", false],
    ]),
  },
  grammar: [
    {
      title: "Нравится → понравилось",
      paragraphs: [
        "Мне нравится — I like it (now, in general). Мне понравилось — I liked it (it's over).",
        "Тебе понравилось? — Did you like it? Да, очень!",
      ],
      examples: [
        { ru: "Мне нравится музыка.", en: "I like the music." },
        { ru: "Мне очень понравилось!", en: "I really liked it!" },
      ],
    },
  ],
  tasks: [
    listen("vi4-t1", "Listen. Where are the seats?", "Ряд семь, место три.", [
      ["Row 7, seat 3", true],
      ["Row 3, seat 7", false],
      ["Row 7, seat 10", false],
    ]),
    choice("vi4-t2", "The show is about to begin. Someone is talking loudly. What do you say?", [
      ["Тише!", true],
      ["Браво!", false],
      ["Антракт!", false],
    ], { skill: "words" }),
    choice("vi4-t3", "The concert is over. How do you say “I liked it”?", [
      ["Мне понравилось.", true],
      ["Мне нравится.", false],
      ["Я люблю.", false],
    ], { skill: "grammar" }),
    missing("vi4-t4", "Which letter is missing? (interval)", "антр", "кт", "а", ["а", "о", "и"]),
    speak("vi4-t5", "Тебе понравилось?", "Да! Мне очень понравилось!", "Yes! I really liked it!", {
      help: "Tom asks about the opera. Answer aloud.",
    }),
    listen("vi4-t6", "Listen and choose the best reply.", "Ты занимаешься спортом?", [
      ["Иногда. Я бегаю.", true],
      ["Тише!", false],
      ["Ряд пять.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "opera-glasses",
    itemName: "Opera glasses",
    itemNameRu: "Театральный бинокль",
    ru: "Ура! Театральный бинокль!",
    en: "Yay! Opera glasses!",
    a11y: "Murzik looks through small golden opera glasses out of his window at the roofs of Vienna.",
    image: pic("vienna/reward-4"),
    steps: ["In the interval Tom buys a little present.", "Small golden opera glasses.", "Murzik watches the singers through them.", "At home he watches the whole street."],
    bridge: "The next day, in the park, an old man plays a beautiful waltz on the violin.",
  },
};

export const vienna5: Lesson = {
  id: "a1-vienna-5",
  level: "A1",
  cityId: "vienna",
  number: 5,
  title: "The Old Musician",
  minutes: 6,
  goals: ["Say what music is like", "Say “I remember”", "Ask someone to tell you more"],
  vocabNote:
    "Words like красивая, грустная change their ending to match the word: красивая музыка, красивый вальс.",
  vocab: [
    v("vi5-1", "Какая красивая музыка!", "What beautiful music!", "Murzik stops in the park and listens to an old man playing the violin.", "Play Какая красивая музыка", pic("vienna/5-1")),
    v("vi5-2", "Кто это играет?", "Who is playing?", "Tom looks around the park, trying to see where the music comes from.", "Play Кто это играет", pic("vienna/5-2")),
    v("vi5-3", "грустная песня", "a sad song", "Murzik listens with a small tear in his eye.", "Play грустная песня", pic("vienna/5-3")),
    v("vi5-4", "Это моя любимая песня.", "It's my favourite song.", "The old musician smiles and holds his violin close to his heart.", "Play Это моя любимая песня", pic("vienna/5-4")),
    v("vi5-5", "Я помню.", "I remember.", "The old musician looks into the distance with a warm, faraway smile.", "Play Я помню", pic("vienna/5-5")),
    v("vi5-6", "Это было давно.", "It was a long time ago.", "An old black-and-white photo of a young violinist in a Vienna park.", "Play Это было давно", pic("vienna/5-6")),
    v("vi5-7", "Расскажите, пожалуйста!", "Please tell me more!", "Murzik sits on the bench next to the old man, leaning in to listen.", "Play Расскажите, пожалуйста", pic("vienna/5-7")),
  ],
  dialogue: {
    title: "A waltz in the park",
    note: "Карл speaks Russian a little old-fashioned and slowly. Она учила меня — she taught me.",
    lines: [
      line("murzik", "Какая красивая музыка! Кто это играет?", "What beautiful music! Who is playing?"),
      line("karl", "Я. Меня зовут Карл. Это моя любимая песня.", "Me. My name is Karl. It's my favourite song."),
      line("murzik", "Вы говорите по-русски?", "You speak Russian?"),
      line("karl", "Немного. Меня учила одна рыжая кошка. Это было давно.", "A little. A ginger cat taught me. It was a long time ago."),
      line("murzik", "Рыжая кошка? Её звали Ася?", "A ginger cat? Was her name Asya?"),
      line("karl", "Ася… Да! Я помню.", "Asya… Yes! I remember."),
      line("murzik", "Расскажите, пожалуйста!", "Please tell me more!"),
    ],
    gist: choice("vi5-d1", "Who taught Karl Russian?", [
      ["A ginger cat — Asya.", true],
      ["Tom.", false],
      ["His teacher at school.", false],
    ]),
  },
  grammar: [
    {
      title: "Какая? Какой? — words that match",
      paragraphs: [
        "Describing words match the word they describe. For “she” words (музыка, песня): красивая, грустная. For “he” words (вальс, концерт): красивый, грустный.",
        "Какая красивая музыка! — What beautiful music! Какой красивый вальс! — What a beautiful waltz!",
      ],
      examples: [
        { ru: "грустная песня", en: "a sad song" },
        { ru: "весёлый вальс", en: "a cheerful waltz" },
      ],
    },
  ],
  tasks: [
    listen("vi5-t1", "Listen. What is the song like?", "Это грустная песня.", [
      ["Sad.", true],
      ["Cheerful.", false],
      ["Long.", false],
    ]),
    choice("vi5-t2", "What does Я помню mean?", [
      ["I remember.", true],
      ["I can.", false],
      ["I don't know.", false],
    ], { skill: "words" }),
    fill("vi5-t3", "Complete: “What beautiful music!”", "Какая", "музыка!", "красивая", ["красивая", "красивый", "красивое"], { skill: "grammar" }),
    spell("vi5-t4", "Build the word for “song”.", "песня"),
    speak("vi5-t5", "Это было давно…", "Расскажите, пожалуйста!", "Please tell me more!", {
      help: "The old man starts a story. Politely ask him to tell you more.",
    }),
    listen("vi5-t6", "Listen. What did you hear?", "Мне очень понравилось!", [
      ["Мне очень понравилось!", true],
      ["Мне очень нравится!", false],
      ["Я очень люблю!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sheet-music",
    itemName: "Sheet music",
    itemNameRu: "Ноты",
    ru: "Ура! Старые ноты!",
    en: "Yay! Old sheet music!",
    a11y: "A framed page of old handwritten sheet music hangs above Murzik's easel. A tiny painted ginger cat sits in the corner of the page.",
    image: pic("vienna/reward-5"),
    steps: ["Karl gives Murzik an old page of music.", "It is a waltz. He wrote it long ago.", "In the corner there is a tiny painted ginger cat.", "Asya painted it."],
    bridge: "That evening it rains. Tom and Murzik stay at home. What do they usually do in the evening?",
  },
};

export const vienna6: Lesson = {
  id: "a1-vienna-6",
  level: "A1",
  cityId: "vienna",
  number: 6,
  title: "A Quiet Evening",
  minutes: 6,
  goals: ["Say what you usually do in the evening", "Say you are bored", "Play a game with a friend"],
  vocabNote:
    "Обычно means “usually”. Мне скучно means “I'm bored” — it works like Мне холодно.",
  vocab: [
    v("vi6-1", "Что ты обычно делаешь вечером?", "What do you usually do in the evening?", "Tom and Murzik sit by a rainy window in the evening.", "Play Что ты обычно делаешь вечером", pic("vienna/6-1")),
    v("vi6-2", "Обычно я читаю.", "I usually read.", "Murzik reads a book under a warm lamp with a cup of cocoa.", "Play Обычно я читаю", pic("vienna/6-2")),
    v("vi6-3", "Я слушаю музыку.", "I listen to music.", "Tom lies on the bed with big headphones on.", "Play Я слушаю музыку", pic("vienna/6-3")),
    v("vi6-4", "Я смотрю сериал.", "I watch a series.", "Murzik watches a laptop screen, hugging a cushion.", "Play Я смотрю сериал", pic("vienna/6-4")),
    v("vi6-5", "Мне скучно.", "I'm bored.", "Murzik lies on the floor with his chin on his paws, looking very bored.", "Play Мне скучно", pic("vienna/6-5")),
    v("vi6-6", "Давай сыграем в шахматы!", "Let's play chess!", "Tom puts a chessboard on the table with a big smile.", "Play Давай сыграем в шахматы", pic("vienna/6-6")),
    v("vi6-7", "Твой ход!", "Your move!", "Murzik thinks hard over a chessboard, one paw above a little horse piece.", "Play Твой ход", pic("vienna/6-7")),
  ],
  dialogue: {
    title: "Rain in Vienna",
    note: "Ура, я выиграл! — Hooray, I won! (Murzik is a boy, so выиграл.)",
    lines: [
      line("tom", "Мурзик, что ты обычно делаешь вечером?", "Murzik, what do you usually do in the evening?"),
      line("murzik", "Обычно я читаю или смотрю сериал. А ты?", "I usually read or watch a series. And you?"),
      line("tom", "Я слушаю музыку.", "I listen to music."),
      line("murzik", "Ох… Сегодня мне скучно.", "Oh… Today I'm bored."),
      line("tom", "Давай сыграем в шахматы!", "Let's play chess!"),
      line("murzik", "Давай! Твой ход!", "Let's! Your move!"),
      line("murzik", "Ура, я выиграл!", "Hooray, I won!"),
    ],
    gist: choice("vi6-d1", "Who wins the chess game?", [
      ["Murzik.", true],
      ["Tom.", false],
      ["Nobody — they stop playing.", false],
    ]),
  },
  grammar: [
    {
      title: "Я читаю, ты читаешь, он читает",
      paragraphs: [
        "Many verbs work like читать: я читаю, ты читаешь, он/она читает.",
        "The same with слушать: я слушаю, ты слушаешь. Смотреть is a little different: я смотрю, ты смотришь.",
      ],
      examples: [
        { ru: "Что ты читаешь?", en: "What are you reading?" },
        { ru: "Том слушает музыку.", en: "Tom is listening to music." },
      ],
    },
  ],
  tasks: [
    listen("vi6-t1", "Listen. What does the person usually do in the evening?", "Вечером я обычно слушаю музыку.", [
      ["Listens to music.", true],
      ["Reads.", false],
      ["Plays chess.", false],
    ]),
    match("vi6-t2", "Match the Russian with the English.", [
      ["Мне скучно.", "I'm bored."],
      ["Твой ход!", "Your move!"],
      ["обычно", "usually"],
    ], { skill: "words" }),
    fill("vi6-t3", "Complete: “What are you reading?”", "Что ты", "?", "читаешь", ["читаешь", "читаю", "читает"], { skill: "grammar" }),
    missing("vi6-t4", "Which letter is missing? (chess)", "ша", "маты", "х", ["х", "к", "ш"]),
    speak("vi6-t5", "Что ты обычно делаешь вечером?", "Обычно я читаю или слушаю музыку.", "I usually read or listen to music.", {
      help: "Tell Tom what you really do in the evenings.",
    }),
    listen("vi6-t6", "Listen and choose the best reply.", "Какая красивая музыка!", [
      ["Да, это моя любимая песня.", true],
      ["Мне скучно.", false],
      ["Твой ход!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chess",
    itemName: "Chess set",
    itemNameRu: "Шахматы",
    ru: "Ура! У меня шахматы!",
    en: "Yay! I have a chess set!",
    a11y: "A small wooden chessboard with pieces stands on a little table by Murzik's window. Rain drops run down the glass.",
    image: pic("vienna/reward-6"),
    steps: ["The coffee-house owner hears them laughing.", "He brings up an old wooden chess set.", "“A present for the winner!”", "Murzik puts it by the window."],
    bridge: "Karl invites them to his last concert in Vienna. He will play Asya's waltz.",
  },
};

export const vienna7: Lesson = {
  id: "a1-vienna-7",
  level: "A1",
  cityId: "vienna",
  number: 7,
  title: "Karl's Concert",
  minutes: 7,
  goals: ["Ask “How did you like it?”", "Say it was wonderful", "Thank someone for an evening"],
  vocabNote:
    "Как тебе…? is a short, friendly way to ask “How do you like…?” or “How was…?”: Как тебе концерт?",
  vocab: [
    v("vi7-1", "Как тебе концерт?", "How was the concert?", "Tom leans towards Murzik in a small concert hall and whispers a question.", "Play Как тебе концерт", pic("vienna/7-1")),
    v("vi7-2", "Это было чудесно!", "It was wonderful!", "Murzik presses his paws to his heart with shining eyes.", "Play Это было чудесно", pic("vienna/7-2")),
    v("vi7-3", "Я в восторге!", "I'm thrilled!", "Murzik jumps up with joy in his seat, arms in the air.", "Play Я в восторге", pic("vienna/7-3")),
    v("vi7-4", "Какой талант!", "What talent!", "Karl bows on a small stage with his violin; flowers lie at his feet.", "Play Какой талант", pic("vienna/7-4")),
    v("vi7-5", "Спасибо за вечер!", "Thank you for the evening!", "Murzik shakes Karl's hand warmly after the concert.", "Play Спасибо за вечер", pic("vienna/7-5")),
    v("vi7-6", "До встречи!", "See you!", "Karl waves goodbye at the door of the concert hall.", "Play До встречи", pic("vienna/7-6")),
    v("vi7-7", "Мы ещё вернёмся!", "We'll come back!", "Murzik and Tom wave at the Vienna skyline with big smiles.", "Play Мы ещё вернёмся", pic("vienna/7-7")),
  ],
  dialogue: {
    title: "Asya's waltz",
    note: "Вальс «Ася» — the waltz “Asya”. Вам — to you (polite).",
    lines: [
      line("karl", "А сейчас — вальс «Ася».", "And now — the waltz “Asya”."),
      line("tom", "Мурзик, как тебе концерт?", "Murzik, how is the concert?"),
      line("murzik", "Это было чудесно! Я в восторге!", "It was wonderful! I'm thrilled!"),
      line("tom", "Какой талант!", "What talent!"),
      line("murzik", "Карл, спасибо за вечер!", "Karl, thank you for the evening!"),
      line("karl", "Спасибо вам. Найди её, Мурзик.", "Thank you. Find her, Murzik."),
      line("murzik", "Обязательно! Мы ещё вернёмся!", "Definitely! We'll come back!"),
    ],
    gist: choice("vi7-d1", "What does Karl play at the end?", [
      ["The waltz “Asya”.", true],
      ["A sad song about Vienna.", false],
      ["Tom's favourite song.", false],
    ]),
  },
  grammar: [
    {
      title: "Как тебе …?",
      paragraphs: [
        "Как тебе + thing asks for an opinion: Как тебе концерт? Как тебе Вена? To be polite: Как вам…?",
        "Answers: Чудесно! Очень понравилось! Так себе.",
      ],
      examples: [
        { ru: "Как тебе Вена? — Чудесно!", en: "How do you like Vienna? — Wonderful!" },
        { ru: "Как вам концерт?", en: "How did you like the concert? (polite)" },
      ],
    },
  ],
  tasks: [
    listen("vi7-t1", "Listen. What does the person usually do on Sundays?", "В воскресенье я обычно играю на гитаре, а вечером слушаю музыку. Я никогда не смотрю сериалы.", [
      ["Plays the guitar.", true],
      ["Watches series.", false],
      ["Goes to the opera.", false],
    ], { help: "This is your Vienna listening test." }),
    choice("vi7-t2", "The concert was amazing. What do you say?", [
      ["Это было чудесно!", true],
      ["Мне скучно.", false],
      ["Тише!", false],
    ], { skill: "words" }),
    fill("vi7-t3", "Complete: “How do you like Vienna?”", "Как", "Вена?", "тебе", ["тебе", "ты", "твой"], { skill: "grammar" }),
    spell("vi7-t4", "Build the word for “concert”.", "концерт"),
    speak("vi7-t5", "Как тебе концерт?", "Это было чудесно! Спасибо за вечер!", "It was wonderful! Thank you for the evening!", {
      help: "Karl asks you about his concert. Answer aloud.",
    }),
    listen("vi7-t6", "Listen and choose the best reply.", "Ты умеешь играть на пианино?", [
      ["Нет, не умею. Научи меня!", true],
      ["Это было давно.", false],
      ["Ряд пять, место десять.", false],
    ], { skill: "review" }),
    tf("vi7-t7", "Никогда means “sometimes”.", false, "True or false", { skill: "review" }),
  ],
  reward: {
    itemId: "music-box",
    itemName: "Music box",
    itemNameRu: "Музыкальная шкатулка",
    ru: "Ура! Музыкальная шкатулка!",
    en: "Yay! A music box!",
    a11y: "Murzik opens a small wooden music box. Inside, a tiny ginger cat with a paint brush turns round and round while music plays.",
    image: pic("vienna/reward-7"),
    steps: ["After the concert Karl gives Murzik a small wooden box.", "Murzik opens it.", "It plays the waltz “Asya”.", "A tiny ginger cat with a brush turns round inside."],
    bridge: "The suitcase is packed. The music box plays one last time in the room above the coffee house.",
  },
};
