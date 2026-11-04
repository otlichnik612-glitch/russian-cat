import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Porto · «Хобби и свободное время» · A2 lessons 1–7.
 * Murzik and Tom rent a narrow blue-tiled house on the steep riverbank. Inês (about 35) paints tiles
 * and runs a small evening art class; she spent a year studying in St Petersburg. Her nephew Tiago (10)
 * wants to be a footballer. Senhor Rui (about 80) has an old wooden river boat; thirty years ago he took
 * a ginger cat along the river every evening while she drew the bridges. She left to see the dragon in Krakow.
 * Grammar: the instrumental — заниматься чем, с кем (с другом, со мной), чем (карандашом, ложкой),
 * быть / стать / работать кем, интересоваться чем, над / под / перед / за чем.
 */

const p = (name: string) => pic(`porto/${name}`);

export const porto1: Lesson = {
  id: "a2-porto-1",
  level: "A2",
  cityId: "porto",
  number: 1,
  title: "What Do You Do in Your Free Time?",
  minutes: 8,
  goals: ["Talk about hobbies", "Use заниматься + the “with” form, the instrumental", "Ask: Чем ты занимаешься?"],
  vocabNote: "Заниматься чем — to do, to be into something. The activity takes the instrumental: спорт → заниматься спортом.",
  vocab: [
    v("po1-1", "в свободное время", "in (your) free time", "Murzik lies in a hammock by the river with a book.", "Listen to в свободное время", p("1-1")),
    v("po1-2", "Чем ты занимаешься?", "What do you do? What are you into?", "Inês, paint on her fingers, smiles at Murzik.", "Listen to Чем ты занимаешься", p("1-2")),
    v("po1-3", "заниматься спортом", "to do sport", "People jogging along the river embankment.", "Listen to заниматься спортом", p("1-3")),
    v("po1-4", "заниматься музыкой", "to play music, to study music", "A boy practises the guitar on a balcony.", "Listen to заниматься музыкой", p("1-4")),
    v("po1-5", "хобби", "hobby", "A table with paints, tiles, a guitar and a ball.", "Listen to хобби", p("1-5")),
    v("po1-6", "расписывать плитку", "to paint tiles", "Inês paints blue flowers on a white tile.", "Listen to расписывать плитку", p("1-6")),
    v("po1-7", "сёрфинг", "surfing", "A surfer on a wave at the ocean beach near Porto.", "Listen to сёрфинг", p("1-7")),
    v("po1-8", "Мне некогда.", "I have no time.", "Tom runs past with his camera, waving.", "Listen to Мне некогда", p("1-8")),
  ],
  letters: [
    letter("-ом / -ой", "The instrumental ends in -ом (masculine, neuter) or -ой (feminine): спортом, музыкой. Said -am / -ay when unstressed.", "заниматься музыкой", "to do music"),
    letter("хобби", "A borrowed word: it never changes — моё хобби, о хобби, много хобби. Stress on the first syllable.", "Моё хобби — сёрфинг.", "My hobby is surfing."),
  ],
  dialogue: {
    title: "On the riverbank",
    note: "Inês studied in St Petersburg for a year, so she speaks Russian with Murzik and Tom.",
    lines: [
      line("ines", "Мурзик, чем ты занимаешься в свободное время?", "Murzik, what do you do in your free time?"),
      line("murzik", "Я рисую. А вы?", "I draw. And you?"),
      line("ines", "Я расписываю плитку. А по субботам занимаюсь сёрфингом.", "I paint tiles. And on Saturdays I go surfing."),
      line("murzik", "Сёрфингом! Здорово! Том, а ты?", "Surfing! Great! Tom, what about you?"),
      line("tom", "Мне некогда! Я фотографирую город.", "I have no time! I'm photographing the city."),
      line("ines", "Фотография — тоже хобби! Приходите ко мне на урок рисования.", "Photography is a hobby too! Come to my drawing class."),
    ],
    gist: choice("po1-d1", "What does Inês do on Saturdays?", [
      ["She goes surfing.", true],
      ["She paints tiles.", false],
      ["She takes photos.", false],
    ]),
  },
  grammar: [
    {
      title: "Заниматься + the instrumental",
      paragraphs: [
        "The instrumental answers чем? (with what?): masculine and neuter add -ом / -ем (спорт → спортом), feminine -а → -ой / -ей (музыка → музыкой).",
        "Заниматься чем: заниматься спортом, музыкой, йогой, танцами (plural -ами). Чем ты занимаешься? — What do you do?",
      ],
      examples: [
        { ru: "Моя сестра занимается танцами.", en: "My sister does dancing." },
        { ru: "Я занимаюсь йогой по утрам.", en: "I do yoga in the mornings." },
      ],
    },
  ],
  tasks: [
    listen("po1-t1", "Listen. What does Inês do?", "Я расписываю плитку. А по субботам занимаюсь сёрфингом.", [
      ["She paints tiles and surfs.", true],
      ["She plays music.", false],
      ["She takes photos.", false],
    ]),
    choice("po1-t2", "“I do sport.” Which is right?", [
      ["Я занимаюсь спортом.", true],
      ["Я занимаюсь спорт.", false],
      ["Я занимаюсь спорта.", false],
    ], { skill: "grammar" }),
    fill("po1-t3", "Choose the right form: “She does music.”", "Она занимается", ".", "музыкой", ["музыкой", "музыка", "музыку"], { skill: "grammar" }),
    read("po1-t4", "Read Inês's poster. When is the drawing class?", "УРОК РИСОВАНИЯ\nКаждый вторник и четверг, 19:00\nДля детей и взрослых\nКраски и плитка — бесплатно!", [
      ["Tuesdays and Thursdays at seven.", true],
      ["Every Saturday morning.", false],
      ["Only for children.", false],
    ]),
    match("po1-t5", "Match the Russian with the English.", [
      ["в свободное время", "in free time"],
      ["хобби", "hobby"],
      ["Мне некогда.", "I have no time."],
      ["заниматься спортом", "to do sport"],
    ], { skill: "words" }),
    tf("po1-t6", "Хобби never changes its ending.", true, "True or false?", { skill: "grammar" }),
    speak("po1-t7", "Чем ты занимаешься в свободное время?", "В свободное время я занимаюсь спортом и музыкой.", "In my free time I do sport and music.", {
      help: "Say out loud what you do in your free time.",
    }),
  ],
  reward: {
    itemId: "bookshelf",
    itemName: "Bookshelf",
    itemNameRu: "Книжная полка",
    ru: "Полка для книг и красок!",
    en: "A shelf for books and paints!",
    a11y: "A narrow wooden shelf on a blue-tiled wall holds books, a jar of brushes and a little potted plant.",
    image: p("reward-1"),
    steps: ["Their narrow house on the riverbank has blue tiles outside and empty walls inside.", "Inês brings an old shelf from her workshop.", "Murzik puts his sketchbooks and paints on it.", "Now his hobby has a home."],
    bridge: "Inês asks: “С кем вы пойдёте на урок? Возьмите с собой друзей!” But Murzik and Tom don't know anyone yet.",
  },
};

export const porto2: Lesson = {
  id: "a2-porto-2",
  level: "A2",
  cityId: "porto",
  number: 2,
  title: "Who With?",
  minutes: 8,
  goals: ["Say who you do things with: с другом, с мамой", "Say мы с тобой — you and I", "Order things “with”: кофе с молоком"],
  vocabNote: "С + the instrumental means together with: с другом, с сестрой, со мной. Мы с тобой — literally “we with you”, meaning “you and I”.",
  vocab: [
    v("po2-1", "С кем?", "Who with?", "Murzik looks around: who will come with him?", "Listen to С кем", p("2-1")),
    v("po2-2", "с друзьями", "with friends", "A group of friends laughing on the riverbank.", "Listen to с друзьями", p("2-2")),
    v("po2-3", "со мной", "with me", "Tiago grabs Murzik's paw and pulls him along.", "Listen to со мной", p("2-3")),
    v("po2-4", "Мы с тобой", "you and I (we with you)", "Murzik and Tiago side by side, both with paint on their noses.", "Listen to Мы с тобой", p("2-4")),
    v("po2-5", "гулять с собакой", "to walk the dog", "An old man walks a small dog along the river.", "Listen to гулять с собакой", p("2-5")),
    v("po2-6", "племянник", "nephew", "Tiago, a ten-year-old boy with a football, next to Inês.", "Listen to племянник", p("2-6")),
    v("po2-7", "пирожное с кремом", "cream pastry (like Porto's custard tart)", "A little golden tart with a burnt-sugar top.", "Listen to пирожное с кремом", p("2-7")),
    v("po2-8", "Можно с вами?", "Can I come with you?", "Tiago asks shyly, holding his ball.", "Listen to Можно с вами", p("2-8")),
  ],
  letters: [
    letter("со мной", "Before мной, с becomes со: sa-MNOY. Also со всеми — with everyone.", "Пойдём со мной!", "Come with me!"),
    letter("с кем, с друзьями", "с is said as one word with the next word: с кем = SKYEM. Before б, г, д, ж, з it sounds like з: с друзьями = zdru-ZYA-mi.", "С кем ты идёшь?", "Who are you going with?"),
  ],
  dialogue: {
    title: "The café by the river",
    note: "Tiago is Inês's nephew; his mother is from Brazil, his father is Inês's brother.",
    lines: [
      line("tiagu", "Тётя Инеш, с кем ты разговариваешь?", "Aunt Inês, who are you talking to?"),
      line("ines", "С Мурзиком и Томом. Это мой племянник Тиагу.", "With Murzik and Tom. This is my nephew Tiago."),
      line("murzik", "Привет! Мы с Томом идём на урок рисования. С кем ты пойдёшь?", "Hi! Tom and I are going to the drawing class. Who are you going with?"),
      line("tiagu", "Ни с кем… Можно с вами?", "With no one… Can I come with you?"),
      line("tom", "Конечно! Пойдём с нами.", "Of course! Come with us."),
      line("ines", "А сначала — кофе с молоком и пирожное с кремом. Для всех!", "But first — coffee with milk and custard tarts. For everyone!"),
    ],
    gist: choice("po2-d1", "Who will Tiago go to the class with?", [
      ["With Murzik and Tom.", true],
      ["With his mother.", false],
      ["With no one — he's staying home.", false],
    ]),
  },
  grammar: [
    {
      title: "С + the instrumental: with whom",
      paragraphs: [
        "С кем? — with whom? Names and nouns: с Томом, с мамой, с другом. Plural: с друзьями, с детьми.",
        "Pronouns: со мной, с тобой, с ним, с ней, с нами, с вами, с ними. Мы с тобой = you and I; мы с Томом = Tom and I.",
      ],
      examples: [
        { ru: "Мы с сестрой живём вместе.", en: "My sister and I live together." },
        { ru: "Я гуляю с собакой каждое утро.", en: "I walk the dog every morning." },
      ],
    },
  ],
  tasks: [
    listen("po2-t1", "Listen. Who is Inês talking to?", "С Мурзиком и Томом. Это мой племянник Тиагу.", [
      ["Murzik and Tom.", true],
      ["Her brother.", false],
      ["Her nephew's teacher.", false],
    ]),
    choice("po2-t2", "“Tom and I are going to the class.” Which is right?", [
      ["Мы с Томом идём на урок.", true],
      ["Я и с Томом идём на урок.", false],
      ["Мы с Том идём на урок.", false],
    ], { skill: "grammar" }),
    fill("po2-t3", "Choose the right form: “Come with me!”", "Пойдём со", "!", "мной", ["мной", "меня", "мне"], { skill: "grammar" }),
    read("po2-t4", "Read the café menu. How much is coffee with milk?", "КАФЕ «РЕКА»\nКофе — 1 €\nКофе с молоком — 1,50 €\nПирожное с кремом — 1,20 €", [
      ["1.50 euros.", true],
      ["1 euro.", false],
      ["1.20 euros.", false],
    ]),
    match("po2-t5", "Match the Russian with the English.", [
      ["С кем?", "Who with?"],
      ["с друзьями", "with friends"],
      ["племянник", "nephew"],
      ["Можно с вами?", "Can I come with you?"],
    ], { skill: "words" }),
    script("po2-t6", "A new friend is going to the beach.", [
      { speaker: "Friend", text: "Я иду на пляж." },
      { speaker: "You", answer: "С кем?", options: ["С кем?", "Чем?", "Кем?"] },
      { speaker: "Friend", text: "С друзьями." },
      { speaker: "You", answer: "А можно с вами?", options: ["А можно с вами?", "А можно с вас?", "А можно с ты?"] },
    ], { skill: "speaking" }),
    speak("po2-t7", "С кем ты проводишь выходные?", "Я провожу выходные с друзьями. Мы с ними гуляем в парке.", "I spend the weekend with friends. We walk in the park together.", {
      help: "Say out loud who you spend your weekend with.",
    }),
  ],
  reward: {
    itemId: "coffeecups",
    itemName: "Two blue coffee cups",
    itemNameRu: "Две синие чашки",
    ru: "Две чашки — для нас с Томом!",
    en: "Two cups — for Tom and me!",
    a11y: "Two small white-and-blue painted coffee cups stand on a tiny table by the window overlooking the river.",
    image: p("reward-2"),
    steps: ["The café owner sees how much Murzik loves coffee with milk.", "He gives them two little cups painted with blue flowers.", "“Одна для тебя, одна для друга.”", "Every morning Murzik and Tom drink coffee by the window."],
    bridge: "Tuesday evening. Inês's workshop smells of paint. On the tables — white tiles, brushes and pencils.",
  },
};

export const porto3: Lesson = {
  id: "a2-porto-3",
  level: "A2",
  cityId: "porto",
  number: 3,
  title: "With a Pencil or a Brush?",
  minutes: 8,
  goals: ["Say what you do something with: карандашом, кистью", "Follow instructions in a class", "Talk about colours and paints"],
  vocabNote: "The tool you use goes into the instrumental with no preposition: рисовать карандашом — to draw with a pencil.",
  vocab: [
    v("po3-1", "карандашом", "with a pencil", "A pencil drawing of a bridge on a white tile.", "Listen to карандашом", p("3-1")),
    v("po3-2", "кисть / кистью", "brush / with a brush", "Inês holds a thin brush with blue paint.", "Listen to кисть, кистью", p("3-2")),
    v("po3-3", "краски", "paints", "Little pots of blue and yellow paint.", "Listen to краски", p("3-3")),
    v("po3-4", "сначала карандашом, потом краской", "first with pencil, then with paint", "Two tiles: one with a pencil outline, one painted blue.", "Listen to сначала карандашом, потом краской", p("3-4")),
    v("po3-5", "Нарисуй контур.", "Draw the outline.", "Inês draws the outline of a flower.", "Listen to Нарисуй контур", p("3-5")),
    v("po3-6", "Не торопись!", "Don't rush! Take your time!", "Tiago paints too fast; blue drips everywhere.", "Listen to Не торопись", p("3-6")),
    v("po3-7", "печь", "kiln (for tiles)", "A small hot kiln with tiles inside.", "Listen to печь", p("3-7")),
    v("po3-8", "Вышло неплохо!", "It came out quite well!", "Murzik holds up his finished tile with a little boat on it.", "Listen to Вышло неплохо", p("3-8")),
  ],
  letters: [
    letter("кистью", "Soft-sign feminine nouns take -ью: кисть → кистью, ночь → ночью. Said KEEST'-yu.", "рисовать кистью", "to paint with a brush"),
  ],
  dialogue: {
    title: "The tile class",
    note: "Плитки сохнут — the tiles are drying. Обжечь в печи — to fire in the kiln.",
    lines: [
      line("ines", "Сначала нарисуйте контур карандашом.", "First draw the outline with a pencil."),
      line("tiagu", "А можно сразу кистью?", "Can I go straight to the brush?"),
      line("ines", "Нет, не торопись! Сначала карандашом, потом краской.", "No, don't rush! First pencil, then paint."),
      line("murzik", "Я рисую лодку. Синей краской.", "I'm drawing a boat. With blue paint."),
      line("ines", "Отлично. А завтра я обожгу плитки в печи.", "Great. And tomorrow I'll fire the tiles in the kiln."),
      line("murzik", "Смотрите! Вышло неплохо!", "Look! It came out quite well!"),
    ],
    gist: choice("po3-d1", "What does Inês say to Tiago?", [
      ["Don't rush: pencil first, then paint.", true],
      ["Use the brush straight away.", false],
      ["Go home, the class is over.", false],
    ]),
  },
  grammar: [
    {
      title: "The instrumental for tools",
      paragraphs: [
        "What you do something with — instrumental, no preposition: писать ручкой, рисовать карандашом, есть ложкой, резать ножом.",
        "Feminine in -ь: кисть → кистью. Adjectives agree: синей краской, новым карандашом.",
      ],
      examples: [
        { ru: "Суп едят ложкой.", en: "You eat soup with a spoon." },
        { ru: "Напиши это ручкой, не карандашом.", en: "Write it in pen, not in pencil." },
      ],
    },
  ],
  tasks: [
    listen("po3-t1", "Listen. What is Murzik drawing?", "Я рисую лодку. Синей краской.", [
      ["A boat, in blue paint.", true],
      ["A bridge, in pencil.", false],
      ["A flower, in yellow paint.", false],
    ]),
    choice("po3-t2", "“I write with a pen.” Which is right?", [
      ["Я пишу ручкой.", true],
      ["Я пишу с ручкой.", false],
      ["Я пишу ручку.", false],
    ], { skill: "grammar" }),
    fill("po3-t3", "Choose the right form: “You eat soup with a spoon.”", "Суп едят", ".", "ложкой", ["ложкой", "ложка", "с ложкой"], { skill: "grammar" }),
    read("po3-t4", "Read the instructions on the wall. What do you do last?", "КАК РАСПИСАТЬ ПЛИТКУ\n1. Нарисуйте контур карандашом.\n2. Раскрасьте кистью.\n3. Дайте плитке высохнуть.\n4. Обожгите в печи.", [
      ["Fire it in the kiln.", true],
      ["Draw the outline.", false],
      ["Paint it with a brush.", false],
    ]),
    match("po3-t5", "Match the Russian with the English.", [
      ["кисть", "brush"],
      ["краски", "paints"],
      ["Не торопись!", "Don't rush!"],
      ["Вышло неплохо!", "It came out quite well!"],
    ], { skill: "words" }),
    tf("po3-t6", "“Рисовать с карандашом” is the right way to say “to draw with a pencil”.", false, "True or false?", { skill: "grammar" }),
    speak("po3-t7", "Чем ты любишь рисовать?", "Я люблю рисовать карандашом, а мой друг — красками.", "I like drawing in pencil, and my friend likes paints.", {
      help: "Say out loud what you like to draw with.",
    }),
  ],
  reward: {
    itemId: "brushset",
    itemName: "Set of brushes",
    itemNameRu: "Набор кисточек",
    ru: "Мои собственные кисточки!",
    en: "My very own brushes!",
    a11y: "A roll-up canvas case with six brushes of different sizes lies open on the shelf, next to Murzik's tile with a blue boat.",
    image: p("reward-3"),
    steps: ["After the class Inês gives Murzik a set of brushes.", "“У тебя рука художника,” she says.", "Murzik's tile comes out of the kiln — the blue boat shines.", "Both go on the shelf."],
    bridge: "Tiago wants to show Murzik something: his football team. “Я буду футболистом!” he says.",
  },
};

export const porto4: Lesson = {
  id: "a2-porto-4",
  level: "A2",
  cityId: "porto",
  number: 4,
  title: "Who Do You Want to Be?",
  minutes: 8,
  goals: ["Talk about jobs and dreams", "Use быть / стать / работать + the instrumental", "Ask: Кем ты хочешь стать?"],
  vocabNote: "Кем? — as whom? After стать (to become), быть (to be — in the past and future) and работать (to work as) the job is in the instrumental.",
  vocab: [
    v("po4-1", "Кем ты хочешь стать?", "What do you want to be?", "Tiago in a football shirt, dreaming, a stadium in the clouds.", "Listen to Кем ты хочешь стать", p("4-1")),
    v("po4-2", "футболистом", "(to be) a footballer", "Tiago kicks a ball into a little goal.", "Listen to футболистом", p("4-2")),
    v("po4-3", "Я хочу стать художником.", "I want to become an artist.", "Murzik at an easel, a beret on his head.", "Listen to Я хочу стать художником", p("4-3")),
    v("po4-4", "работать учителем", "to work as a teacher", "Inês in front of her class with a brush in her hand.", "Listen to работать учителем", p("4-4")),
    v("po4-5", "Кем ты хотел(а) стать в детстве?", "What did you want to be as a child?", "An old photo of little Tom in a pilot's hat.", "Listen to Кем ты хотел стать в детстве", p("4-5")),
    v("po4-6", "мечта", "dream (wish)", "A thought bubble with a stadium full of fans.", "Listen to мечта", p("4-6")),
    v("po4-7", "тренировка", "training session, practice", "Kids running round cones on a pitch.", "Listen to тренировка", p("4-7")),
    v("po4-8", "болеть за команду", "to support a team", "Fans in blue and white scarves cheering.", "Listen to болеть за команду", p("4-8")),
  ],
  letters: [
    letter("болеть", "Болеть means “to be ill”, but болеть за — “to support (a team)”. Same stress: ba-LYET'.", "Я болею за «Порту».", "I support FC Porto."),
  ],
  dialogue: {
    title: "On the pitch",
    note: "«Порту» is also the name of the famous football club. Tiago supports it.",
    lines: [
      line("tiagu", "У меня тренировка! Я буду футболистом.", "I've got practice! I'm going to be a footballer."),
      line("murzik", "Это твоя мечта?", "Is that your dream?"),
      line("tiagu", "Да! Я болею за «Порту». А ты кем хочешь стать?", "Yes! I support Porto. And what do you want to be?"),
      line("murzik", "Я хочу стать художником. Как моя бабушка.", "I want to become an artist. Like my grandmother."),
      line("tiagu", "А Том?", "And Tom?"),
      line("tom", "Я работаю фотографом. А в детстве я хотел быть лётчиком!", "I work as a photographer. And as a child I wanted to be a pilot!"),
    ],
    gist: choice("po4-d1", "What does Murzik want to be?", [
      ["An artist, like his grandmother.", true],
      ["A footballer.", false],
      ["A pilot.", false],
    ]),
  },
  grammar: [
    {
      title: "Быть, стать, работать + кем",
      paragraphs: [
        "Стать кем (become), работать кем (work as), быть кем in the past and future: Я хочу стать врачом. Она работает учительницей. Он был моряком.",
        "In the present there's no быть: Я — врач. But: Я был врачом. Я буду врачом.",
      ],
      examples: [
        { ru: "Мой папа работает инженером.", en: "My dad works as an engineer." },
        { ru: "В детстве я хотел стать космонавтом.", en: "As a child I wanted to be an astronaut." },
      ],
    },
  ],
  tasks: [
    listen("po4-t1", "Listen. What did Tom want to be as a child?", "Я работаю фотографом. А в детстве я хотел быть лётчиком!", [
      ["A pilot.", true],
      ["A photographer.", false],
      ["A footballer.", false],
    ]),
    choice("po4-t2", "“My dad works as an engineer.” Which is right?", [
      ["Мой папа работает инженером.", true],
      ["Мой папа работает инженер.", false],
      ["Мой папа работает как инженера.", false],
    ], { skill: "grammar" }),
    fill("po4-t3", "Choose the right form: “I want to become an artist.”", "Я хочу стать", ".", "художником", ["художником", "художник", "художника"], { skill: "grammar" }),
    read("po4-t4", "Read the notice at the pitch. How old must you be?", "ФУТБОЛЬНАЯ ШКОЛА\nТренировки: пн, ср, пт — 17:00\nДети 8–12 лет\nС собой: вода и форма", [
      ["8 to 12 years old.", true],
      ["Over 12.", false],
      ["Any age.", false],
    ]),
    match("po4-t5", "Match the Russian with the English.", [
      ["мечта", "dream"],
      ["тренировка", "practice"],
      ["болеть за команду", "to support a team"],
      ["футболистом", "(to be) a footballer"],
    ], { skill: "words" }),
    script("po4-t6", "Talk with Tiago.", [
      { speaker: "Tiago", text: "Кем ты хочешь стать?" },
      { speaker: "You", answer: "Я хочу стать врачом.", options: ["Я хочу стать врачом.", "Я хочу стать врач.", "Я хочу болеть."] },
      { speaker: "Tiago", text: "А кем ты работаешь сейчас?" },
      { speaker: "You", answer: "Сейчас я работаю учителем.", options: ["Сейчас я работаю учителем.", "Сейчас я работаю учитель.", "Сейчас я тренировка."] },
    ], { skill: "speaking" }),
    speak("po4-t7", "Кем ты хотел(а) стать в детстве?", "В детстве я хотел(а) стать врачом. А сейчас я работаю учителем.", "As a child I wanted to be a doctor. And now I work as a teacher.", {
      help: "Say out loud what you wanted to be and what you do now. A woman says хотела.",
    }),
  ],
  reward: {
    itemId: "football",
    itemName: "Signed football",
    itemNameRu: "Мяч с автографом",
    ru: "Мяч с автографом Тиагу!",
    en: "A ball signed by Tiago!",
    a11y: "A blue-and-white football with a child's signature in black marker sits in a little wooden stand on the shelf.",
    image: p("reward-4"),
    steps: ["After practice Tiago signs a ball for Murzik.", "“Когда я стану футболистом, это будет ценный мяч!”", "Murzik puts it on a little stand.", "Tom photographs it for Tiago's future fans."],
    bridge: "On Friday Inês takes them to a tiny bar in the old town. There's a guitar, candles — and a singer in a black shawl.",
  },
};

export const porto5: Lesson = {
  id: "a2-porto-5",
  level: "A2",
  cityId: "porto",
  number: 5,
  title: "An Evening of Fado",
  minutes: 8,
  goals: ["Talk about music and interests", "Use интересоваться, увлекаться, гордиться + the instrumental", "Say how you feel about something: доволен чем"],
  vocabNote: "Some verbs and words always take the instrumental: интересоваться (be interested in), увлекаться (be keen on), гордиться (be proud of), доволен (pleased with).",
  vocab: [
    v("po5-1", "фаду", "fado (Portuguese song)", "A singer in a black shawl sings, eyes closed, by candlelight.", "Listen to фаду", p("5-1")),
    v("po5-2", "интересоваться музыкой", "to be interested in music", "Murzik leans forward, listening carefully.", "Listen to интересоваться музыкой", p("5-2")),
    v("po5-3", "увлекаться фотографией", "to be keen on photography", "Tom takes a photo of the singer without flash.", "Listen to увлекаться фотографией", p("5-3")),
    v("po5-4", "гордиться", "to be proud (of)", "Inês smiles proudly at her city through the window.", "Listen to гордиться", p("5-4")),
    v("po5-5", "душевная песня", "soulful, moving song", "A tear runs down Murzik's cheek.", "Listen to душевная песня", p("5-5")),
    v("po5-6", "Не шумите!", "Don't make noise! (polite)", "Inês puts a finger to her lips.", "Listen to Не шумите", p("5-6")),
    v("po5-7", "Я доволен (довольна) вечером.", "I'm pleased with the evening.", "Tom smiles, walking out into the night street.", "Listen to Я доволен вечером", p("5-7")),
    v("po5-8", "мурашки по коже", "goosebumps", "Murzik's fur stands up on his arm.", "Listen to мурашки по коже", p("5-8")),
  ],
  letters: [
    letter("Не шумите!", "Stress on МИ: ne-shu-MEE-tye. Шуметь — to make noise.", "Не шумите, она поёт!", "Don't make noise, she's singing!"),
  ],
  dialogue: {
    title: "The fado bar",
    note: "During fado people are silent. Saudade — a Portuguese word for longing; Inês says it's like русская тоска.",
    lines: [
      line("ines", "Не шумите! Сейчас будет фаду.", "Don't make noise! Fado is about to start."),
      line("murzik", "Какая душевная песня… У меня мурашки по коже.", "What a moving song… I've got goosebumps."),
      line("ines", "Мы гордимся фаду. Это душа Порту.", "We're proud of fado. It's the soul of Porto."),
      line("tom", "Я увлекаюсь фотографией. Можно сфотографировать певицу?", "I'm keen on photography. Can I photograph the singer?"),
      line("ines", "Можно, но без вспышки. Ты интересуешься музыкой, Мурзик?", "Yes, but without the flash. Are you interested in music, Murzik?"),
      line("murzik", "Теперь — очень! Я доволен этим вечером.", "Now — very much! I'm pleased with this evening."),
    ],
    gist: choice("po5-d1", "What does Inês say about photos?", [
      ["Tom can take photos, but without flash.", true],
      ["Photos are not allowed.", false],
      ["Only with flash.", false],
    ]),
  },
  grammar: [
    {
      title: "Verbs with the instrumental",
      paragraphs: [
        "Интересоваться, увлекаться, заниматься, гордиться, любоваться (admire) + чем / кем: Я интересуюсь историей. Мама гордится сыном.",
        "Доволен / довольна + чем: Я доволен работой. Она довольна отпуском.",
      ],
      examples: [
        { ru: "Мой брат увлекается футболом.", en: "My brother is keen on football." },
        { ru: "Мы гордимся нашим городом.", en: "We're proud of our city." },
      ],
    },
  ],
  tasks: [
    listen("po5-t1", "Listen. How does Murzik feel?", "Какая душевная песня… У меня мурашки по коже.", [
      ["He's got goosebumps — the song moves him.", true],
      ["He's bored.", false],
      ["He wants to go home.", false],
    ]),
    choice("po5-t2", "“I'm interested in history.” Which is right?", [
      ["Я интересуюсь историей.", true],
      ["Я интересуюсь историю.", false],
      ["Я интересуюсь с историей.", false],
    ], { skill: "grammar" }),
    fill("po5-t3", "Choose the right form: “We're proud of our city.”", "Мы гордимся нашим", ".", "городом", ["городом", "город", "города"], { skill: "grammar" }),
    read("po5-t4", "Read the sign at the bar. What is NOT allowed?", "ВЕЧЕР ФАДУ\nНачало в 21:30\nВо время песни — тишина!\nФото без вспышки", [
      ["Talking during a song.", true],
      ["Taking photos without flash.", false],
      ["Coming at half past nine.", false],
    ]),
    match("po5-t5", "Match the Russian with the English.", [
      ["гордиться", "to be proud"],
      ["душевная песня", "moving song"],
      ["Не шумите!", "Don't make noise!"],
      ["мурашки по коже", "goosebumps"],
    ], { skill: "words" }),
    tf("po5-t6", "Inês says fado is the soul of Porto.", true, "True or false?", { skill: "listening" }),
    speak("po5-t7", "Чем ты увлекаешься?", "Я увлекаюсь музыкой и фотографией. А ещё интересуюсь историей.", "I'm keen on music and photography. And I'm also interested in history.", {
      help: "Say out loud what you're keen on and interested in.",
    }),
  ],
  reward: {
    itemId: "fadorecord",
    itemName: "Fado record",
    itemNameRu: "Пластинка фаду",
    ru: "Пластинка фаду! Музыка Порту!",
    en: "A fado record! The music of Porto!",
    a11y: "An old vinyl record in a black-and-gold sleeve leans against the wall; on the cover, a singer in a black shawl.",
    image: p("reward-5"),
    steps: ["After the concert the singer signs an old record.", "“Коту, который плакал на вечере фаду,” she writes.", "Murzik is a little embarrassed — and very happy.", "The record stands on the shelf next to the brushes."],
    bridge: "On the way home they stop by the river. An old man is tying up a wooden boat. He looks at Murzik — and drops his rope.",
  },
};

export const porto6: Lesson = {
  id: "a2-porto-6",
  level: "A2",
  cityId: "porto",
  number: 6,
  title: "The Old Boatman",
  minutes: 8,
  goals: ["Understand a memory", "Say where: над рекой, под мостом, перед домом", "Use the instrumental after над, под, перед, за, между"],
  vocabNote: "Над (above), под (under), перед (in front of), за (behind), между (between) take the instrumental when they say where something is.",
  vocab: [
    v("po6-1", "лодочник", "boatman", "Senhor Rui, an old man with a white moustache, in his wooden boat.", "Listen to лодочник", p("6-1")),
    v("po6-2", "катать на лодке", "to take for a boat ride", "Young Rui rows; a ginger cat seen from behind sits in the boat with a sketchbook.", "Listen to катать на лодке", p("6-2")),
    v("po6-3", "под мостом", "under the bridge", "The boat slides under a huge iron bridge.", "Listen to под мостом", p("6-3")),
    v("po6-4", "над рекой", "above the river", "Seagulls fly above the river at sunset.", "Listen to над рекой", p("6-4")),
    v("po6-5", "между домами", "between the houses", "A narrow staircase between colourful tiled houses.", "Listen to между домами", p("6-5")),
    v("po6-6", "каждый вечер", "every evening", "The same boat, the same sunset, many days in a row.", "Listen to каждый вечер", p("6-6")),
    v("po6-7", "Она рисовала мосты.", "She drew the bridges.", "Pages of a sketchbook with bridges drawn in ink.", "Listen to Она рисовала мосты", p("6-7")),
    v("po6-8", "дракон", "dragon", "An old drawing: a little dragon by a castle on a hill.", "Listen to дракон", p("6-8")),
  ],
  letters: [
    letter("под мостом", "под is said together with the next word, and its о sounds like а: pad-mas-TOM. The д stays д before м, but becomes т before a voiceless sound: под столом = pat-sta-LOM.", "под мостом", "under the bridge"),
  ],
  dialogue: {
    title: "Rui remembers",
    note: "Senhor Rui worked for years with Russian sailors in the port and still remembers some Russian.",
    lines: [
      line("rui", "Рыжий кот… Тридцать лет назад я катал на лодке рыжую кошку. Ты так похож на неё!", "A ginger cat… Thirty years ago I took a ginger cat out in my boat. You look so like her!"),
      line("murzik", "Ася? Её звали Ася?", "Asya? Was her name Asya?"),
      line("rui", "Да, Ася. Каждый вечер мы плавали под мостами, а она их рисовала.", "Yes, Asya. Every evening we sailed under the bridges, and she drew them."),
      line("ines", "Над рекой — закат, под мостом — лодка… Красиво!", "A sunset above the river, a boat under the bridge… Beautiful!"),
      line("murzik", "А куда она потом уехала?", "And where did she go after that?"),
      line("rui", "Она нарисовала дракона и сказала: «Хочу увидеть настоящего. В Кракове».", "She drew a dragon and said: “I want to see a real one. In Krakow.”"),
    ],
    gist: choice("po6-d1", "What did Asya draw from the boat?", [
      ["The bridges.", true],
      ["The boatman.", false],
      ["The fado singer.", false],
    ]),
  },
  grammar: [
    {
      title: "Над, под, перед, за, между + the instrumental",
      paragraphs: [
        "Where? — над рекой (above the river), под мостом (under the bridge), перед домом (in front of the house), за домом (behind the house), между домами (between the houses).",
        "Перед + time = before: перед ужином, перед уроком.",
      ],
      examples: [
        { ru: "Кот спит под столом.", en: "The cat is sleeping under the table." },
        { ru: "Помой руки перед едой.", en: "Wash your hands before you eat." },
      ],
    },
  ],
  tasks: [
    listen("po6-t1", "Listen. When did Rui take Asya on the river?", "Каждый вечер мы плавали под мостами, а она их рисовала.", [
      ["Every evening.", true],
      ["Every morning.", false],
      ["Only once.", false],
    ]),
    choice("po6-t2", "Detective! Where did Asya go next?", [
      ["To Krakow, to see a dragon.", true],
      ["Back to Munich.", false],
      ["To the ocean beach.", false],
    ], { skill: "listening" }),
    fill("po6-t3", "Choose the right form: “The cat is sleeping under the table.”", "Кот спит под", ".", "столом", ["столом", "стол", "стола"], { skill: "grammar" }),
    read("po6-t4", "Rui shows a drawing. On the back there's a note. Who is it for?", "Руй, спасибо за реку и за закаты.\nЕду в Краков — к дракону!\nА.", [
      ["For Rui.", true],
      ["For Inês.", false],
      ["For Murzik.", false],
    ]),
    match("po6-t5", "Match the Russian with the English.", [
      ["над рекой", "above the river"],
      ["под мостом", "under the bridge"],
      ["между домами", "between the houses"],
      ["лодочник", "boatman"],
    ], { skill: "words" }),
    tf("po6-t6", "Asya drew the bridges from Rui's boat.", true, "True or false?", { skill: "listening" }),
    speak("po6-t7", "Где ты живёшь?", "Я живу в доме над рекой. Перед домом — парк, а за домом — магазин.", "I live in a house above the river. In front of the house there's a park, and behind it a shop.", {
      help: "Describe out loud where you live: над, перед, за.",
    }),
  ],
  reward: {
    itemId: "rivermap",
    itemName: "Old river map",
    itemNameRu: "Старая карта реки",
    ru: "Карта реки — с мостами Аси!",
    en: "A river map — with Asya's bridges!",
    a11y: "An old yellowed map of the river with all its bridges hangs on the blue-tiled wall; tiny ink sketches of bridges in the margins.",
    image: p("reward-6"),
    steps: ["Rui brings an old map of the river.", "In the margins — tiny ink bridges.", "“Это она рисовала, пока я грёб,” he says.", "Murzik hangs the map on the wall, very carefully."],
    bridge: "Tomorrow they leave for Krakow. Rui has one more thing to give — but first, one last boat ride.",
  },
};

export const porto7: Lesson = {
  id: "a2-porto-7",
  level: "A2",
  cityId: "porto",
  number: 7,
  title: "Porto Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Talk about your hobbies and plans", "Review everything from Porto"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Porto.",
  vocab: [
    v("po7-1", "деревянная лодочка", "little wooden boat", "A small carved wooden boat with a striped sail.", "Listen to деревянная лодочка", p("7-1")),
    v("po7-2", "Я сам её вырезал.", "I carved it myself.", "Rui holds a small knife and the wooden boat.", "Listen to Я сам её вырезал", p("7-2")),
    v("po7-3", "плыть по реке", "to sail along the river", "The boat glides along the golden river.", "Listen to плыть по реке", p("7-3")),
    v("po7-4", "закат", "sunset", "The sky over the river turns orange and pink.", "Listen to закат", p("7-4")),
    v("po7-5", "Я буду скучать по вам.", "I'll miss you.", "Murzik hugs Tiago.", "Listen to Я буду скучать по вам", p("7-5")),
    v("po7-6", "Не грусти!", "Don't be sad!", "Inês gently pats Murzik's head.", "Listen to Не грусти", p("7-6")),
    v("po7-7", "вместе с Томом", "together with Tom", "Murzik and Tom side by side in the boat.", "Listen to вместе с Томом", p("7-7")),
    v("po7-8", "Найди её!", "Find her!", "Rui points north-east, to the evening sky.", "Listen to Найди её", p("7-8")),
  ],
  letters: [
    letter("скучать по", "Скучать по + the dative: скучать по вам, по маме. Said sku-CHAT' pa VAM.", "Я буду скучать по вам.", "I'll miss you."),
  ],
  dialogue: {
    title: "The last boat ride",
    note: "Вырезать — to carve. Rui carves little boats in the winter.",
    lines: [
      line("rui", "Это тебе. Деревянная лодочка. Я сам её вырезал.", "This is for you. A little wooden boat. I carved it myself."),
      line("murzik", "Спасибо! Она как ваша лодка.", "Thank you! It's like your boat."),
      line("rui", "Тридцать лет назад я плавал по реке с Асей. А сегодня — с тобой.", "Thirty years ago I sailed along the river with Asya. And today — with you."),
      line("tiagu", "Я буду скучать по вам!", "I'll miss you!"),
      line("ines", "Не грусти, Тиагу. Мурзик пришлёт нам открытку из Кракова.", "Don't be sad, Tiago. Murzik will send us a postcard from Krakow."),
      line("rui", "Найди её, Мурзик. И передай: Руй всё ещё катает художников.", "Find her, Murzik. And tell her: Rui still takes artists out on the river."),
    ],
    gist: choice("po7-d1", "What does Rui give Murzik?", [
      ["A little wooden boat he carved.", true],
      ["Asya's sketchbook.", false],
      ["A fado record.", false],
    ]),
  },
  grammar: [
    {
      title: "Porto review: the instrumental",
      paragraphs: [
        "Чем / кем: заниматься спортом, рисовать карандашом, стать художником, гордиться городом, доволен вечером.",
        "С кем: с Томом, со мной, мы с тобой. Где: над рекой, под мостом, перед домом, за домом, между домами.",
      ],
      examples: [
        { ru: "Мы с сестрой занимаемся танцами.", en: "My sister and I do dancing." },
        { ru: "Он хочет стать фотографом и снимать закаты над рекой.", en: "He wants to become a photographer and shoot sunsets over the river." },
      ],
    },
  ],
  tasks: [
    listen("po7-t1", "Audio story: Inês talks about her work. Listen. Who taught her to paint tiles?", "Меня научил расписывать плитку дедушка. Он работал художником всю жизнь. Сначала я рисовала карандашом, потом кистью. Сейчас я сама работаю учителем, и у меня есть свои ученики. Я горжусь ими. Мой самый маленький ученик — Тиагу.", [
      ["Her grandfather.", true],
      ["Senhor Rui.", false],
      ["A teacher in St Petersburg.", false],
    ]),
    choice("po7-t2", "In Inês's story, who is her youngest student?", [
      ["Tiago.", true],
      ["Murzik.", false],
      ["Her grandfather.", false],
    ], { skill: "listening" }),
    choice("po7-t3", "“My sister and I do dancing.” Which is right?", [
      ["Мы с сестрой занимаемся танцами.", true],
      ["Я и сестра занимаемся танцы.", false],
      ["Мы с сестра занимаемся танцами.", false],
    ], { skill: "grammar" }),
    read("po7-t4", "Read the boat tour sign. How long is the tour?", "ПРОГУЛКА ПО РЕКЕ\nШесть мостов за 50 минут\nКаждый вечер в 19:00 — на закате\nДети до 6 лет — бесплатно", [
      ["50 minutes.", true],
      ["6 hours.", false],
      ["19 minutes.", false],
    ]),
    script("po7-t5", "Say goodbye to Inês and Tiago.", [
      { speaker: "Tiago", text: "Я буду скучать по вам!" },
      { speaker: "You", answer: "Не грусти! Мы пришлём тебе открытку.", options: ["Не грусти! Мы пришлём тебе открытку.", "Не шумите!", "Под мостом."] },
      { speaker: "Inês", text: "Чем ты будешь заниматься в Кракове?" },
      { speaker: "You", answer: "Буду рисовать вместе с Томом.", options: ["Буду рисовать вместе с Томом.", "Буду рисовать вместе с Том.", "Буду рисовать вместе Тома."] },
    ], { skill: "review" }),
    match("po7-t6", "Porto review: match the Russian with the English.", [
      ["хобби", "hobby"],
      ["кисть", "brush"],
      ["мечта", "dream"],
      ["закат", "sunset"],
    ], { skill: "review" }),
    speak("po7-t7", "Расскажи о себе: чем ты занимаешься и кем хочешь стать?", "Я занимаюсь музыкой и рисую карандашом. Я хочу стать художником. Мы с другом часто рисуем вместе.", "I do music and draw in pencil. I want to become an artist. My friend and I often draw together.", {
      help: "Talk about your hobbies and dreams out loud.",
    }),
  ],
  reward: {
    itemId: "woodenboat",
    itemName: "Little wooden boat",
    itemNameRu: "Деревянная лодочка",
    ru: "Лодочка — как у Руя!",
    en: "A little boat — like Rui's!",
    a11y: "A small carved wooden boat with a striped sail stands on the windowsill; behind it, the river and an iron bridge at sunset.",
    image: p("reward-7"),
    steps: ["Rui's present is a little boat he carved himself.", "It looks just like his old river boat.", "“В ней тридцать лет Порту,” he says.", "Murzik will keep it in his suitcase, wrapped in Asya's scarf."],
  },
};

export const portoLessons: Lesson[] = [porto1, porto2, porto3, porto4, porto5, porto6, porto7];
