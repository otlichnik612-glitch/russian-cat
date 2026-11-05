import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Geneva · «Музей и выставка» · A2 lessons 1–7.
 * Murzik and Tom look for the nineteen drawings Ursula's father sold to a gallery in Geneva thirty years ago.
 * Tickets, museum rules, describing a picture, asking about an artist, opinions. Sophie (about 40), the curator
 * of a small gallery in the old town, learned Russian at university. The nineteen drawings are in the storeroom —
 * and there is a twentieth one, sent by post this spring with no letter: Paris, a window and a ginger kitten.
 * On the back: «Ницца». Grammar: который in all its forms.
 */

const p = (name: string) => pic(`geneva/${name}`);

export const geneva1: Lesson = {
  id: "a2-geneva-1",
  level: "A2",
  cityId: "geneva",
  number: 1,
  title: "Two Tickets, Please",
  minutes: 8,
  goals: ["Buy museum tickets", "Ask about discounts", "Ask when a museum is open"],
  vocabNote: "Для + genitive — for: для студентов, для детей. По понедельникам — on Mondays (every Monday).",
  vocab: [
    v("ge1-1", "билет в музей", "a museum ticket", "A small paper ticket with a picture of a painting on it.", "Listen to билет в музей", p("1-1")),
    v("ge1-2", "взрослый билет", "an adult ticket", "A price board: “adult” in big letters.", "Listen to взрослый билет", p("1-2")),
    v("ge1-3", "льготный билет", "a reduced (concession) ticket", "A smaller price next to the adult one.", "Listen to льготный билет", p("1-3")),
    v("ge1-4", "скидка для студентов", "a student discount", "A student shows a card at the ticket desk.", "Listen to скидка для студентов", p("1-4")),
    v("ge1-5", "Вход бесплатный.", "Admission is free.", "The cashier smiles and waves Murzik through.", "Listen to Вход бесплатный", p("1-5")),
    v("ge1-6", "аудиогид", "an audio guide", "A small device with headphones on the counter.", "Listen to аудиогид", p("1-6")),
    v("ge1-7", "Во сколько закрывается музей?", "What time does the museum close?", "Murzik points at the clock above the ticket desk.", "Listen to Во сколько закрывается музей", p("1-7")),
    v("ge1-8", "по понедельникам", "on Mondays", "A sign on the door with Monday crossed out.", "Listen to по понедельникам", p("1-8")),
  ],
  letters: [
    letter("льготный", "LGOT-ny: stress on the first syllable; the soft л sounds like the l in “million”.", "льготный билет", "a reduced ticket"),
    letter("аудиогид", "a-u-di-a-GEET: every letter is read, stress on the end.", "аудиогид на русском", "an audio guide in Russian"),
  ],
  dialogue: {
    title: "At the ticket desk",
    note: "The gallery is in Geneva's old town, on the hill above the lake. Tom wants to see the drawings signed «А.».",
    lines: [
      line("tom", "Здравствуйте! Два билета, пожалуйста. Один взрослый и… один для кота.", "Hello! Two tickets, please. One adult and… one for the cat."),
      line("cashier", "Для котов вход бесплатный! А вы студент? Для студентов есть скидка.", "Admission is free for cats! And are you a student? There's a student discount."),
      line("tom", "Нет, я фотограф. Значит, взрослый билет. Сколько он стоит?", "No, I'm a photographer. So, an adult ticket. How much is it?"),
      line("cashier", "Пятнадцать франков. Аудиогид на русском — ещё пять.", "Fifteen francs. An audio guide in Russian is five more."),
      line("murzik", "А во сколько закрывается музей?", "And what time does the museum close?"),
      line("cashier", "В шесть. А по понедельникам мы закрыты.", "At six. And on Mondays we're closed."),
      line("tom", "Билет и аудиогид, пожалуйста. Значит, двадцать франков?", "A ticket and an audio guide, please. So that's twenty francs?"),
      line("cashier", "Да. Вот ваш билет, вот аудиогид. Приятного просмотра!", "Yes. Here's your ticket, here's the audio guide. Enjoy the exhibition!"),
    ],
    gist: choice("ge1-d1", "How much does Murzik pay?", [
      ["Nothing: admission is free for cats.", true],
      ["Fifteen francs.", false],
      ["Five francs for an audio guide.", false],
    ]),
  },
  grammar: [
    {
      title: "Для кого? По каким дням?",
      paragraphs: [
        "Для + genitive: для студентов, для детей, для кота, для мамы.",
        "По + dative plural for something that happens every week: по понедельникам (on Mondays), по субботам, по выходным (at weekends).",
      ],
      examples: [
        { ru: "Для детей вход бесплатный.", en: "Admission is free for children." },
        { ru: "По четвергам галерея работает до восьми.", en: "On Thursdays the gallery is open till eight." },
      ],
    },
  ],
  tasks: [
    listen("ge1-t1", "Listen. How much is an adult ticket?", "Пятнадцать франков. Аудиогид на русском — ещё пять.", [
      ["Fifteen francs.", true],
      ["Five francs.", false],
      ["Fifty francs.", false],
    ]),
    choice("ge1-t2", "“There's a discount for students.” Which is right?", [
      ["Для студентов есть скидка.", true],
      ["Для студенты есть скидка.", false],
      ["Для студентам есть скидка.", false],
    ], { skill: "grammar" }),
    fill("ge1-t3", "Choose the right form: “We're closed on Mondays.”", "По", "мы закрыты.", "понедельникам", ["понедельникам", "понедельники", "понедельников"], { skill: "grammar" }),
    read("ge1-t4", "Read the sign. Murzik's friend is a student. How much does she pay?", "ГАЛЕРЕЯ НА ХОЛМЕ\nВт–вс: 10:00–18:00\nЧт: 10:00–20:00\nПн: закрыто\nВзрослый билет — 15 франков\nСтуденты — 10 франков\nДети до 16 лет — бесплатно", [
      ["10 francs.", true],
      ["15 francs.", false],
      ["Nothing.", false],
    ]),
    match("ge1-t5", "Match the Russian with the English.", [
      ["льготный билет", "a reduced ticket"],
      ["аудиогид", "an audio guide"],
      ["Вход бесплатный.", "Admission is free."],
      ["по понедельникам", "on Mondays"],
    ], { skill: "words" }),
    tf("ge1-t6", "The museum is closed on Mondays.", true, "True or false?", { skill: "listening" }),
    speak("ge1-t7", "Здравствуйте! Слушаю вас.", "Здравствуйте! Один взрослый билет и аудиогид, пожалуйста. Во сколько закрывается музей?", "Hello! One adult ticket and an audio guide, please. What time does the museum close?", {
      help: "Buy a ticket out loud and ask when the museum closes.",
    }),
  ],
  reward: {
    itemId: "exhibitionposter",
    itemName: "Exhibition poster",
    itemNameRu: "Афиша выставки",
    ru: "Афиша — на стену!",
    en: "A poster for the wall!",
    a11y: "A large poster with a painting of a blue lake and mountains hangs above Murzik's bed in a small room with a sloping ceiling.",
    image: p("reward-1"),
    steps: ["Murzik and Tom rent a small room in the old town.", "From the window they can see the lake and the big fountain.", "The cashier gives Murzik an old exhibition poster.", "Now there's a lake on the wall too."],
    bridge: "Tom walks into the first room with a big backpack and a camera. A guard is already looking at him.",
  },
};

export const geneva2: Lesson = {
  id: "a2-geneva-2",
  level: "A2",
  cityId: "geneva",
  number: 2,
  title: "Museum Rules",
  minutes: 8,
  goals: ["Understand museum rules", "Ask where the cloakroom is", "Describe people: девушка, которая…"],
  vocabNote: "Который — who, which, that. It takes the gender of its noun: мужчина, который; девушка, которая; окно, которое; люди, которые.",
  vocab: [
    v("ge2-1", "Фотографировать со вспышкой нельзя.", "No flash photography.", "A camera with a flash, crossed out in red.", "Listen to Фотографировать со вспышкой нельзя", p("2-1")),
    v("ge2-2", "Руками не трогать!", "Do not touch!", "A paw reaching for a painting, crossed out.", "Listen to Руками не трогать", p("2-2")),
    v("ge2-3", "сдать рюкзак в гардероб", "to leave your backpack in the cloakroom", "Tom hands his big backpack over a counter.", "Listen to сдать рюкзак в гардероб", p("2-3")),
    v("ge2-4", "номерок", "a cloakroom tag", "A small round metal tag with the number 27.", "Listen to номерок", p("2-4")),
    v("ge2-5", "Говорите тише, пожалуйста.", "Please speak more quietly.", "A guard puts a finger to his lips.", "Listen to Говорите тише, пожалуйста", p("2-5")),
    v("ge2-6", "охранник", "a security guard", "A tall man in a dark uniform stands by a door.", "Listen to охранник", p("2-6")),
    v("ge2-7", "зал", "a room, a hall (in a museum)", "A long museum room with paintings on both walls.", "Listen to зал", p("2-7")),
    v("ge2-8", "Экскурсия начинается в два.", "The tour starts at two.", "A small group waits by a sign with a clock.", "Listen to Экскурсия начинается в два", p("2-8")),
  ],
  letters: [
    letter("вспышкой", "FSPYSH-kay: в before с sounds like ф, stress on ВСПЫШ.", "со вспышкой", "with a flash"),
    letter("гардероб", "gar-di-ROP: stress on the end; the final б sounds like п.", "в гардероб", "to the cloakroom"),
  ],
  dialogue: {
    title: "The first room",
    note: "Молодой человек! — Young man! A polite way to call a young man you don't know.",
    lines: [
      line("guard", "Молодой человек! Рюкзак нужно сдать в гардероб.", "Young man! You need to leave the backpack in the cloakroom."),
      line("tom", "Ой, извините. А где гардероб?", "Oh, sorry. And where's the cloakroom?"),
      line("guard", "Внизу. Там девушка, которая выдаёт номерки.", "Downstairs. There's a girl there who gives out the tags."),
      line("tom", "Спасибо! А фотографировать можно?", "Thanks! And can I take photos?"),
      line("guard", "Можно, но со вспышкой нельзя. И руками не трогать!", "You can, but no flash. And do not touch!"),
      line("murzik", "Том, говори тише! Видишь мужчину, который стоит у двери? Он смотрит только на нас.", "Tom, speak more quietly! See the man who's standing by the door? He's only looking at us."),
      line("tom", "Это охранник, который уже говорил со мной.", "That's the guard who already talked to me."),
      line("murzik", "Потому что ты фотограф, который не читает правила!", "Because you're a photographer who doesn't read the rules!"),
    ],
    gist: choice("ge2-d1", "What must Tom do with his backpack?", [
      ["Leave it in the cloakroom.", true],
      ["Leave it by the door.", false],
      ["Give it to Murzik.", false],
    ]),
  },
  grammar: [
    {
      title: "Который (1): who, which, that",
      paragraphs: [
        "Который joins two sentences. Its gender and number come from the noun before it: мужчина, который…; девушка, которая…; окно, которое…; люди, которые…",
        "In writing there is always a comma before который.",
      ],
      examples: [
        { ru: "Это девушка, которая выдаёт номерки.", en: "That's the girl who gives out the tags." },
        { ru: "Я вижу картины, которые висят в первом зале.", en: "I can see the paintings that hang in the first room." },
      ],
    },
  ],
  tasks: [
    listen("ge2-t1", "Listen. Where is the cloakroom?", "Внизу. Там девушка, которая выдаёт номерки.", [
      ["Downstairs.", true],
      ["By the door.", false],
      ["In the first room.", false],
    ]),
    choice("ge2-t2", "“The girl who gives out the tags.” Which is right?", [
      ["девушка, которая выдаёт номерки", true],
      ["девушка, который выдаёт номерки", false],
      ["девушка, которые выдаёт номерки", false],
    ], { skill: "grammar" }),
    fill("ge2-t3", "Choose the right word: “People who are waiting for the tour.”", "Люди,", "ждут экскурсию.", "которые", ["которые", "которая", "которое"], { skill: "grammar" }),
    read("ge2-t4", "Read the rules by the entrance. Which of these is allowed?", "ПРАВИЛА ГАЛЕРЕИ\n• Рюкзаки — в гардероб\n• Фото без вспышки — можно\n• Руками не трогать\n• Еда и напитки — только в кафе", [
      ["Taking photos without a flash.", true],
      ["Eating in the rooms.", false],
      ["Taking a backpack into the rooms.", false],
    ]),
    match("ge2-t5", "Match the Russian with the English.", [
      ["номерок", "a cloakroom tag"],
      ["охранник", "a security guard"],
      ["зал", "a room in a museum"],
      ["Руками не трогать!", "Do not touch!"],
    ], { skill: "words" }),
    tf("ge2-t6", "The guard says Tom can't take any photos at all.", false, "True or false?", { skill: "listening" }),
    script("ge2-t7", "Talk to the guard.", [
      { speaker: "Guard", text: "Рюкзак нужно сдать в гардероб." },
      { speaker: "You", answer: "Извините. А где гардероб?", options: ["Извините. А где гардероб?", "Извините. Руками не трогать.", "Извините. Где номерок?"] },
      { speaker: "Guard", text: "Внизу. Там девушка, которая выдаёт номерки." },
      { speaker: "You", answer: "Спасибо! А фотографировать можно?", options: ["Спасибо! А фотографировать можно?", "Спасибо! Я охранник.", "Спасибо! Экскурсия которая?"] },
    ], { skill: "speaking" }),
  ],
  reward: {
    itemId: "museumplan",
    itemName: "Gallery floor plan",
    itemNameRu: "План галереи",
    ru: "План галереи — чтобы не потеряться!",
    en: "A floor plan — so we don't get lost!",
    a11y: "A folded paper plan of the gallery with three rooms coloured blue, yellow and red is pinned to the wall next to the poster.",
    image: p("reward-2"),
    steps: ["The girl in the cloakroom gives Tom tag number 27.", "And a free paper plan of the gallery.", "Three rooms: landscapes, portraits, modern art.", "Murzik marks the way with a red pencil."],
    bridge: "In the landscape room Murzik stops in front of a big picture of the lake. He wants to tell Tom everything he sees.",
  },
};

export const geneva3: Lesson = {
  id: "a2-geneva-3",
  level: "A2",
  cityId: "geneva",
  number: 3,
  title: "What's in the Picture?",
  minutes: 8,
  goals: ["Describe a picture", "Say where things are: в центре, на заднем плане", "Use которую, который after a noun you see or love"],
  vocabNote: "На картине — in the picture. На переднем плане — in the foreground. На заднем плане — in the background.",
  vocab: [
    v("ge3-1", "на картине", "in the picture", "Murzik points at a big painting in a gold frame.", "Listen to на картине", p("3-1")),
    v("ge3-2", "на переднем плане", "in the foreground", "A small boat at the bottom of the painting, close to the viewer.", "Listen to на переднем плане", p("3-2")),
    v("ge3-3", "на заднем плане", "in the background", "Faraway snowy mountains at the top of the painting.", "Listen to на заднем плане", p("3-3")),
    v("ge3-4", "в левом углу", "in the left-hand corner", "A tiny red house in the bottom left corner of the painting.", "Listen to в левом углу", p("3-4")),
    v("ge3-5", "пейзаж", "a landscape", "A painting of a lake, hills and sky.", "Listen to пейзаж", p("3-5")),
    v("ge3-6", "портрет", "a portrait", "A painting of an old lady in a blue hat.", "Listen to портрет", p("3-6")),
    v("ge3-7", "яркие краски", "bright colours", "Splashes of red, yellow and blue paint.", "Listen to яркие краски", p("3-7")),
    v("ge3-8", "Мне кажется, …", "It seems to me…, I think…", "Murzik tilts his head, thinking.", "Listen to Мне кажется", p("3-8")),
  ],
  letters: [
    letter("пейзаж", "pey-ZASH: stress on the end; the final ж sounds like ш.", "красивый пейзаж", "a beautiful landscape"),
    letter("кажется", "KA-zhy-tsa: -тся sounds like “tsa”, and е after ж sounds like ы.", "Мне кажется…", "It seems to me…"),
  ],
  dialogue: {
    title: "The lake picture",
    note: "Куратор — the person who chooses and looks after the pictures in a gallery.",
    lines: [
      line("murzik", "Смотри, Том, это пейзаж. В центре — озеро, а на заднем плане — горы.", "Look, Tom, it's a landscape. In the centre there's a lake, and in the background, mountains."),
      line("tom", "А на переднем плане — лодка, в левом углу — красный домик. Какие яркие краски!", "And in the foreground, a boat, and in the left-hand corner a little red house. What bright colours!"),
      line("murzik", "Мне кажется, это картина, которую я видел на открытке.", "I think it's the picture I saw on a postcard."),
      line("sophie", "Да, это картина, которую любят все туристы.", "Yes, it's the picture that all the tourists love."),
      line("tom", "А вы здесь работаете?", "Do you work here?"),
      line("sophie", "Немного. Меня зовут Софи, я куратор галереи. Я учила русский в университете.", "A little. My name's Sophie, I'm the gallery's curator. I learned Russian at university."),
      line("murzik", "Почему русский?", "Why Russian?"),
      line("sophie", "Я люблю художников, которых все знают: Левитана, Шишкина. Хотела читать их письма.", "I love the artists everyone knows: Levitan, Shishkin. I wanted to read their letters."),
    ],
    gist: choice("ge3-d1", "Who is Sophie?", [
      ["The gallery's curator, who learned Russian at university.", true],
      ["A tourist from Russia.", false],
      ["The guard's daughter.", false],
    ]),
  },
  grammar: [
    {
      title: "Который (2): the picture that I love",
      paragraphs: [
        "When который is the object of its own clause, it takes the accusative: картина, которую я люблю; озеро, которое я вижу; город, который я помню.",
        "For people and animals in the masculine and in the plural, the accusative looks like the genitive: художник, которого я знаю; художники, которых все знают.",
      ],
      examples: [
        { ru: "Это картина, которую любят все туристы.", en: "That's the picture all the tourists love." },
        { ru: "Это художник, которого я очень люблю.", en: "This is an artist I love very much." },
      ],
    },
  ],
  tasks: [
    listen("ge3-t1", "Listen. What is in the background?", "Смотри, Том, это пейзаж. В центре — озеро, а на заднем плане — горы.", [
      ["Mountains.", true],
      ["A boat.", false],
      ["A lake.", false],
    ]),
    choice("ge3-t2", "“The picture that I saw on a postcard.” Which is right?", [
      ["картина, которую я видел(а) на открытке", true],
      ["картина, которая я видел(а) на открытке", false],
      ["картина, который я видел(а) на открытке", false],
    ], { skill: "grammar" }),
    fill("ge3-t3", "Choose the right word: “an artist I know”", "художник,", "я знаю", "которого", ["которого", "который", "которому"], { skill: "grammar" }),
    read("ge3-t4", "Read the label next to the painting. What kind of painting is it?", "«Утро на озере»\nПейзаж. Холст, масло.\nНа переднем плане — рыбацкая лодка, на заднем плане — Альпы.", [
      ["A landscape.", true],
      ["A portrait.", false],
      ["Modern art.", false],
    ]),
    match("ge3-t5", "Match the Russian with the English.", [
      ["на переднем плане", "in the foreground"],
      ["на заднем плане", "in the background"],
      ["портрет", "a portrait"],
      ["яркие краски", "bright colours"],
    ], { skill: "words" }),
    tf("ge3-t6", "Sophie learned Russian because she loves Russian artists.", true, "True or false?", { skill: "listening" }),
    speak("ge3-t7", "Что ты видишь на картине?", "Это пейзаж. В центре — озеро, на переднем плане — лодка, а на заднем плане — горы. Мне кажется, это утро.", "It's a landscape. In the centre there's a lake, in the foreground a boat, and in the background mountains. I think it's morning.", {
      help: "Describe the picture out loud: what is in the centre, in front and behind?",
    }),
  ],
  reward: {
    itemId: "postcardset",
    itemName: "Set of art postcards",
    itemNameRu: "Открытки с картинами",
    ru: "Маленькая галерея — у меня дома!",
    en: "A little gallery of my own!",
    a11y: "Six small postcards with landscapes and portraits stand in a row on the windowsill.",
    image: p("reward-3"),
    steps: ["Sophie gives Murzik a set of postcards from the gallery shop.", "Lakes, mountains, an old lady in a blue hat…", "Murzik lines them up on the windowsill.", "His own little gallery."],
    bridge: "Murzik takes a deep breath. Now he can ask Sophie the most important question.",
  },
};

export const geneva4: Lesson = {
  id: "a2-geneva-4",
  level: "A2",
  cityId: "geneva",
  number: 4,
  title: "Looking for an Artist",
  minutes: 8,
  goals: ["Ask about an artist", "Make an appointment", "Use который in other cases: о которой, в котором"],
  vocabNote: "Художник — an artist (man), художница — an artist (woman). Запасник — the storeroom where a museum keeps the pictures it doesn't show.",
  vocab: [
    v("ge4-1", "художница", "an artist (woman)", "A ginger cat seen from behind, painting at an easel.", "Listen to художница", p("4-1")),
    v("ge4-2", "куратор", "a curator", "Sophie with a lanyard and colourful glasses holds a folder.", "Listen to куратор", p("4-2")),
    v("ge4-3", "Мы знаем только имя.", "We only know her (his) first name.", "Tom shrugs, holding a photo of Asya's drawing.", "Listen to Мы знаем только имя", p("4-3")),
    v("ge4-4", "подписывать буквой «А»", "to sign with the letter А", "A pencil writes a curly «А».", "Listen to подписывать буквой А", p("4-4")),
    v("ge4-5", "запасник", "a (museum) storeroom", "Tall shelves full of wrapped pictures and folders.", "Listen to запасник", p("4-5")),
    v("ge4-6", "Их сейчас не показывают.", "They're not on display now.", "An empty space on a gallery wall.", "Listen to Их сейчас не показывают", p("4-6")),
    v("ge4-7", "Можно на них посмотреть?", "Can we have a look at them?", "Murzik looks up at Sophie with hopeful eyes.", "Listen to Можно на них посмотреть", p("4-7")),
    v("ge4-8", "по записи", "by appointment", "Sophie writes a name in a diary.", "Listen to по записи", p("4-8")),
  ],
  letters: [
    letter("художница", "khu-DOZH-ni-tsa: stress on ДОЖ; ж before н stays ж.", "Она художница.", "She's an artist."),
    letter("подпись", "POT-pis': stress on ПОТ; д before п sounds like т.", "подпись «А.»", "the signature «А.»"),
  ],
  dialogue: {
    title: "Sophie's office",
    note: "Часовщик — a clockmaker. Ursula's father sold the drawings to this gallery thirty years ago.",
    lines: [
      line("murzik", "Софи, мы ищем художницу, о которой нам рассказали в Цюрихе.", "Sophie, we're looking for an artist we heard about in Zurich."),
      line("sophie", "Как её зовут?", "What's her name?"),
      line("tom", "Мы знаем только имя — Ася. Она подписывала рисунки буквой «А».", "We only know her first name, Asya. She signed her drawings with the letter А."),
      line("sophie", "Буквой «А»… Девятнадцать рисунков, которые продал нам часовщик из Цюриха?", "With the letter А… The nineteen drawings a clockmaker from Zurich sold us?"),
      line("murzik", "Да! Где они? В каком зале?", "Yes! Where are they? Which room?"),
      line("sophie", "Ни в каком. Их сейчас не показывают. Они в запаснике, в котором мы храним старые рисунки.", "None. They're not on display now. They're in the storeroom where we keep old drawings."),
      line("tom", "Можно на них посмотреть?", "Can we have a look at them?"),
      line("sophie", "В запасник можно только по записи. Завтра в десять вам удобно?", "The storeroom is by appointment only. Is tomorrow at ten convenient for you?"),
    ],
    gist: choice("ge4-d1", "Where are Asya's drawings?", [
      ["In the gallery's storeroom.", true],
      ["In the first room.", false],
      ["Back in Zurich.", false],
    ]),
  },
  grammar: [
    {
      title: "Который (3): every case",
      paragraphs: [
        "Gender and number come from the noun; the case comes from its own clause: художница, о которой нам рассказали (рассказать о ком); запасник, в котором мы храним бумагу (в чём); друг, с которым я живу (с кем).",
        "Every form of который ends like an adjective: которого, которому, которым, о котором; которой, которую; которых, которым.",
      ],
      examples: [
        { ru: "Это зал, в котором висят портреты.", en: "This is the room where the portraits hang." },
        { ru: "Это Том — друг, с которым я путешествую.", en: "This is Tom, the friend I travel with." },
      ],
    },
  ],
  tasks: [
    listen("ge4-t1", "Listen. When can they see the drawings?", "В запасник можно только по записи. Завтра в десять вам удобно?", [
      ["Tomorrow at ten.", true],
      ["Today at two.", false],
      ["On Monday.", false],
    ]),
    choice("ge4-t2", "“The artist we heard about.” Which is right?", [
      ["художница, о которой нам рассказали", true],
      ["художница, которая нам рассказали", false],
      ["художница, о котором нам рассказали", false],
    ], { skill: "grammar" }),
    fill("ge4-t3", "Choose the right word: “the room where the portraits hang”", "зал, в", "висят портреты", "котором", ["котором", "которой", "который"], { skill: "grammar" }),
    choice("ge4-t4", "Detective! Who sold the drawings to the gallery?", [
      ["A clockmaker from Zurich — Ursula's father.", true],
      ["Asya herself.", false],
      ["Sophie's university.", false],
    ], { skill: "listening" }),
    match("ge4-t5", "Match the Russian with the English.", [
      ["куратор", "a curator"],
      ["запасник", "a storeroom"],
      ["по записи", "by appointment"],
      ["Их сейчас не показывают.", "They're not on display now."],
    ], { skill: "words" }),
    read("ge4-t6", "Sophie writes in her diary. Who is coming to see the drawings «А.»?", "Четверг\n10:00 — запасник: Том и кот Мурзик (рисунки «А.»)\n14:00 — экскурсия для школы\n16:30 — реставратор", [
      ["Tom and Murzik, at ten.", true],
      ["A school group, at ten.", false],
      ["A restorer, at two.", false],
    ]),
    speak("ge4-t7", "Чем могу помочь?", "Здравствуйте! Мы ищем рисунки художницы, о которой нам рассказали в Цюрихе. Можно на них посмотреть?", "Hello! We're looking for the drawings of an artist we heard about in Zurich. Can we have a look at them?", {
      help: "Ask about the drawings out loud.",
    }),
  ],
  reward: {
    itemId: "magnifyingglass",
    itemName: "Brass magnifying glass",
    itemNameRu: "Лупа",
    ru: "Лупа — как у настоящего детектива!",
    en: "A magnifying glass — like a real detective!",
    a11y: "An old brass magnifying glass with a wooden handle lies on the desk next to the postcards.",
    image: p("reward-4"),
    steps: ["Sophie opens a drawer in her office.", "She takes out an old brass magnifying glass.", "“Для подписей, которые трудно прочитать.”", "Murzik looks at Tom through it. Tom's nose is enormous."],
    bridge: "Ten o'clock tomorrow is a long way off. Tom wants to see the modern art room first — and then argue about it.",
  },
};

export const geneva5: Lesson = {
  id: "a2-geneva-5",
  level: "A2",
  cityId: "geneva",
  number: 5,
  title: "Did You Like It?",
  minutes: 8,
  goals: ["Ask if someone liked something", "Give your opinion", "Agree and disagree politely"],
  vocabNote: "Понравиться in the past agrees with the thing you liked: мне понравился фильм, понравилась выставка, понравилось кафе, понравились картины.",
  vocab: [
    v("ge5-1", "Тебе понравилась выставка?", "Did you like the exhibition?", "Tom and Murzik walk out of the gallery into the sunshine.", "Listen to Тебе понравилась выставка", p("5-1")),
    v("ge5-2", "Мне понравились пейзажи.", "I liked the landscapes.", "Murzik beams, paws on his heart, in front of a row of landscapes.", "Listen to Мне понравились пейзажи", p("5-2")),
    v("ge5-3", "Честно говоря, …", "To be honest, …", "Tom scratches his head with a guilty smile.", "Listen to Честно говоря", p("5-3")),
    v("ge5-4", "скучно", "boring", "Tom yawns in front of a white wall.", "Listen to скучно", p("5-4")),
    v("ge5-5", "современное искусство", "modern art", "A big red square on a white wall.", "Listen to современное искусство", p("5-5")),
    v("ge5-6", "Я не понимаю, что это.", "I don't understand what it is.", "Tom stares at the red square, head tilted.", "Listen to Я не понимаю, что это", p("5-6")),
    v("ge5-7", "По-моему, …", "In my opinion, …", "Murzik raises one paw like a teacher.", "Listen to По-моему", p("5-7")),
    v("ge5-8", "Я согласен (согласна).", "I agree.", "Tom and Murzik shake hand and paw.", "Listen to Я согласен", p("5-8")),
  ],
  letters: [
    letter("скучно", "SKUSH-na: here чн sounds like “shn”.", "Мне скучно.", "I'm bored."),
    letter("по-моему", "pa-MO-ye-mu: stress on МО.", "По-моему, это интересно.", "In my opinion, it's interesting."),
  ],
  dialogue: {
    title: "By the fountain",
    note: "The famous fountain in Geneva shoots water high above the lake. Tom and Murzik eat ice cream on the shore.",
    lines: [
      line("tom", "Ну, тебе понравилась выставка?", "So, did you like the exhibition?"),
      line("murzik", "Мне очень понравилось! Особенно пейзаж, который мы видели в первом зале.", "I really liked it! Especially the landscape we saw in the first room."),
      line("tom", "А зал, в котором висит современное искусство? Честно говоря, мне было скучно.", "And the room where the modern art hangs? To be honest, I was bored."),
      line("murzik", "По-моему, там интересно. Красный квадрат на белой стене…", "In my opinion it's interesting there. A red square on a white wall…"),
      line("tom", "Я не понимаю, что это. Просто квадрат!", "I don't understand what it is. Just a square!"),
      line("murzik", "Мне кажется, это закат над озером.", "I think it's a sunset over the lake."),
      line("tom", "Ладно, я согласен: закат красивый. Но настоящий — лучше.", "All right, I agree: the sunset is beautiful. But a real one is better."),
      line("murzik", "Согласен! А завтра — рисунки бабушки.", "Agreed! And tomorrow — Grandma's drawings."),
    ],
    gist: choice("ge5-d1", "What did Tom think of the modern art room?", [
      ["He found it boring.", true],
      ["He loved it.", false],
      ["He didn't go in.", false],
    ]),
  },
  grammar: [
    {
      title: "Мне понравился, понравилась, понравилось, понравились",
      paragraphs: [
        "The person who likes is in the dative (мне, тебе, ему, ей, нам); the thing liked is the subject, and the verb agrees with it: мне понравился пейзаж, понравилась картина, понравилось кафе, понравились рисунки.",
        "Понравилось alone, with no noun, means “I liked it (all)”: Мне очень понравилось!",
      ],
      examples: [
        { ru: "Нам понравились портреты.", en: "We liked the portraits." },
        { ru: "Тебе понравился музей?", en: "Did you like the museum?" },
      ],
    },
  ],
  tasks: [
    listen("ge5-t1", "Listen. What did Murzik like most?", "Мне очень понравилось! Особенно пейзаж, который мы видели в первом зале.", [
      ["The landscape in the first room.", true],
      ["The red square.", false],
      ["The portraits.", false],
    ]),
    choice("ge5-t2", "“Did you like the exhibition?” Which is right?", [
      ["Тебе понравилась выставка?", true],
      ["Тебе понравился выставка?", false],
      ["Ты понравилась выставка?", false],
    ], { skill: "grammar" }),
    fill("ge5-t3", "Choose the right form: “We liked the drawings.”", "Нам", "рисунки.", "понравились", ["понравились", "понравилась", "понравился"], { skill: "grammar" }),
    read("ge5-t4", "Read the reviews in the gallery's visitors' book. Who didn't like the visit?", "«Мне очень понравилось! Особенно портреты.» — Анна\n«Честно говоря, было скучно. Мало картин.» — Пьер\n«По-моему, лучший музей в Женеве!» — Марко", [
      ["Pierre (Пьер).", true],
      ["Anna (Анна).", false],
      ["Marco (Марко).", false],
    ]),
    match("ge5-t5", "Match the Russian with the English.", [
      ["Честно говоря", "To be honest"],
      ["скучно", "boring"],
      ["По-моему", "In my opinion"],
      ["современное искусство", "modern art"],
    ], { skill: "words" }),
    tf("ge5-t6", "In the end Tom agrees that the sunset is beautiful.", true, "True or false?", { skill: "listening" }),
    speak("ge5-t7", "Тебе понравилась выставка?", "Мне очень понравилось! Особенно пейзажи. Честно говоря, современное искусство я не понимаю.", "I really liked it! Especially the landscapes. To be honest, I don't understand modern art.", {
      help: "Give your opinion about an exhibition out loud.",
    }),
  ],
  reward: {
    itemId: "fountainglobe",
    itemName: "Fountain snow globe",
    itemNameRu: "Шар с фонтаном",
    ru: "Фонтан, который всегда со мной!",
    en: "A fountain I can always keep with me!",
    a11y: "A small glass globe with a tiny lake and a tall white fountain inside stands on the bedside table.",
    image: p("reward-5"),
    steps: ["On the way home Tom buys a glass globe in a souvenir shop.", "Inside: a tiny lake and a tall white fountain.", "Shake it — and silver drops fly.", "Murzik shakes it before bed. Tomorrow is the big day."],
    bridge: "Ten o'clock. Sophie is waiting at a heavy grey door with a key and two pairs of white gloves.",
  },
};

export const geneva6: Lesson = {
  id: "a2-geneva-6",
  level: "A2",
  cityId: "geneva",
  number: 6,
  title: "The Twentieth Drawing",
  minutes: 8,
  goals: ["Follow instructions", "Read something written by hand", "Understand an important clue"],
  vocabNote: "Наденьте — put on (polite). Аккуратно — carefully, gently. На обратной стороне — on the back.",
  vocab: [
    v("ge6-1", "Наденьте перчатки.", "Put on the gloves.", "Two pairs of white cotton gloves on a table.", "Listen to Наденьте перчатки", p("6-1")),
    v("ge6-2", "папка с рисунками", "a folder of drawings", "A big grey cardboard folder tied with ribbon.", "Listen to папка с рисунками", p("6-2")),
    v("ge6-3", "аккуратно", "carefully, gently", "Murzik lifts a drawing with both paws, very slowly.", "Listen to аккуратно", p("6-3")),
    v("ge6-4", "старая бумага", "old paper", "Yellowed paper with soft pencil lines.", "Listen to старая бумага", p("6-4")),
    v("ge6-5", "Здесь что-то написано.", "Something is written here.", "Tom points at small handwriting.", "Listen to Здесь что-то написано", p("6-5")),
    v("ge6-6", "на обратной стороне", "on the back", "A drawing turned over; a word in pencil on the back.", "Listen to на обратной стороне", p("6-6")),
    v("ge6-7", "двадцатый рисунок", "the twentieth drawing", "One drawing on whiter, newer paper among old ones.", "Listen to двадцатый рисунок", p("6-7")),
    v("ge6-8", "пришёл по почте", "came by post", "An envelope with a stamp and no return address.", "Listen to пришёл по почте", p("6-8")),
  ],
  letters: [
    letter("аккуратно", "a-ku-RAT-na: stress on РАТ; the double к is said as one к.", "Аккуратно, это старая бумага!", "Gently, this is old paper!"),
    letter("двадцатый", "dva-TSA-ty: д before ц is silent.", "двадцатый рисунок", "the twentieth drawing"),
  ],
  dialogue: {
    title: "In the storeroom",
    note: "In Zurich Asya made twenty drawings: Ursula's father kept one and sold nineteen to this gallery. But Sophie's folder holds twenty.",
    lines: [
      line("sophie", "Наденьте перчатки. Это старая бумага — аккуратно.", "Put on the gloves. This is old paper — gently."),
      line("murzik", "Горы, озеро, часы… Это рисунки, которые бабушка рисовала в Цюрихе!", "Mountains, a lake, clocks… These are the drawings Grandma made in Zurich!"),
      line("sophie", "Девятнадцать рисунков. Но в папке есть ещё один — двадцатый.", "Nineteen drawings. But there's one more in the folder — the twentieth."),
      line("tom", "Двадцатый? Урсула говорила, что её папа продал вам девятнадцать.", "The twentieth? Ursula said her dad sold you nineteen."),
      line("sophie", "Он пришёл по почте этой весной. Без письма. Только подпись — «А.».", "It came by post this spring. No letter. Just the signature «А.»."),
      line("murzik", "Это Париж… окно… и рыжий котёнок на подоконнике. Это же я!", "It's Paris… a window… and a ginger kitten on the windowsill. That's me!"),
      line("tom", "Подожди, на обратной стороне что-то написано. Одно слово: «Ницца».", "Wait, something is written on the back. One word: «Nice»."),
      line("murzik", "Значит, бабушка знает, кто я. И она ждёт нас в Ницце!", "So Grandma knows who I am. And she's waiting for us in Nice!"),
    ],
    gist: choice("ge6-d1", "What is special about the twentieth drawing?", [
      ["It's new: it came by post this spring and shows Murzik in Paris.", true],
      ["It's the oldest drawing in the folder.", false],
      ["Ursula's father drew it.", false],
    ]),
  },
  grammar: [
    {
      title: "Ordinal numbers: первый, второй… двадцатый",
      paragraphs: [
        "Ordinal numbers end like adjectives: двадцатый рисунок, двадцатая картина, двадцатое письмо.",
        "In 21st, 22nd… only the last word changes: двадцать первый, двадцать второй.",
      ],
      examples: [
        { ru: "Это мой третий музей за неделю.", en: "This is my third museum this week." },
        { ru: "Двадцатый рисунок пришёл по почте.", en: "The twentieth drawing came by post." },
      ],
    },
  ],
  tasks: [
    listen("ge6-t1", "Listen. When did the twentieth drawing arrive?", "Он пришёл по почте этой весной. Без письма. Только подпись — «А.».", [
      ["This spring.", true],
      ["Thirty years ago.", false],
      ["Last week.", false],
    ]),
    choice("ge6-t2", "Detective! What is written on the back of the drawing?", [
      ["«Ницца».", true],
      ["«Париж».", false],
      ["«Цюрих».", false],
    ], { skill: "listening" }),
    fill("ge6-t3", "Choose the right form: “the twentieth picture”", "", "картина", "двадцатая", ["двадцатая", "двадцатый", "двадцать"], { skill: "grammar" }),
    read("ge6-t4", "Read the storeroom card. How many drawings are in the folder now?", "Папка 14. Художница «А.»\n19 рисунков — из Цюриха, 30 лет назад\n+ 1 рисунок — этой весной, по почте\nНе показывать без куратора!", [
      ["Twenty.", true],
      ["Nineteen.", false],
      ["Fourteen.", false],
    ]),
    match("ge6-t5", "Match the Russian with the English.", [
      ["Наденьте перчатки.", "Put on the gloves."],
      ["аккуратно", "carefully, gently"],
      ["на обратной стороне", "on the back"],
      ["пришёл по почте", "came by post"],
    ], { skill: "words" }),
    tf("ge6-t6", "The twentieth drawing came with a long letter.", false, "True or false?", { skill: "listening" }),
    speak("ge6-t7", "Что на этом рисунке?", "На рисунке — Париж, окно и рыжий котёнок. На обратной стороне что-то написано.", "In the drawing there's Paris, a window and a ginger kitten. Something is written on the back.", {
      help: "Describe the drawing out loud.",
    }),
  ],
  reward: {
    itemId: "sketchpad",
    itemName: "Sketchpad and pencil",
    itemNameRu: "Альбом и карандаш",
    ru: "Теперь я тоже буду рисовать!",
    en: "Now I'm going to draw too!",
    a11y: "A small sketchpad lies open on the bed; on the first page, a wobbly drawing of a fountain and a pencil next to it.",
    image: p("reward-6"),
    steps: ["Back in the room, Murzik can't sit still.", "Grandma drew him. Without ever meeting him?", "He buys a sketchpad and draws the fountain.", "It's wobbly. But it's a start."],
    bridge: "Sophie has a surprise for them before they leave Geneva.",
  },
};

export const geneva7: Lesson = {
  id: "a2-geneva-7",
  level: "A2",
  cityId: "geneva",
  number: 7,
  title: "Geneva Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Talk about a museum visit", "Review everything from Geneva"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Geneva.",
  vocab: [
    v("ge7-1", "копия", "a copy", "A print of the Paris drawing in a simple wooden frame.", "Listen to копия", p("7-1")),
    v("ge7-2", "Оригинал остаётся в галерее.", "The original stays in the gallery.", "The real drawing goes back into the grey folder.", "Listen to Оригинал остаётся в галерее", p("7-2")),
    v("ge7-3", "в хороших руках", "in good hands", "Sophie hands the frame to Murzik with a smile.", "Listen to в хороших руках", p("7-3")),
    v("ge7-4", "Женевское озеро", "Lake Geneva", "A wide blue lake with white sails.", "Listen to Женевское озеро", p("7-4")),
    v("ge7-5", "знаменитый фонтан", "the famous fountain", "A tall white jet of water above the lake.", "Listen to знаменитый фонтан", p("7-5")),
    v("ge7-6", "с пересадкой", "with a change (of trains)", "A train ticket with two trains on it.", "Listen to с пересадкой", p("7-6")),
    v("ge7-7", "Пишите мне!", "Write to me!", "Sophie mimes typing on a phone.", "Listen to Пишите мне", p("7-7")),
    v("ge7-8", "Передайте ей привет.", "Say hello to her from me.", "Sophie waves at the station.", "Listen to Передайте ей привет", p("7-8")),
  ],
  letters: [
    letter("Женевское", "zhy-NEF-ska-ye: в before с sounds like ф; stress on НЕВ.", "Женевское озеро", "Lake Geneva"),
  ],
  dialogue: {
    title: "A present from Sophie",
    note: "Передать привет — to pass on greetings. Передайте ей привет! — Say hello to her from me!",
    lines: [
      line("sophie", "Это вам. Копия двадцатого рисунка. Оригинал остаётся в галерее.", "This is for you. A copy of the twentieth drawing. The original stays in the gallery."),
      line("murzik", "Спасибо! Это лучший подарок!", "Thank you! It's the best present!"),
      line("sophie", "Это вам на память. А как вы поедете в Ниццу?", "It's a keepsake for you. And how will you get to Nice?"),
      line("tom", "На поезде, с пересадкой. Ехать почти семь часов.", "By train, with a change. It's almost seven hours."),
      line("sophie", "Когда найдёте художницу, которую так долго ищете, — пишите мне!", "When you find the artist you've been looking for so long — write to me!"),
      line("murzik", "Обязательно напишем!", "We'll definitely write!"),
      line("sophie", "И передайте ей привет. Скажите, что её рисунки в хороших руках.", "And say hello to her from me. Tell her her drawings are in good hands."),
    ],
    gist: choice("ge7-d1", "What does Sophie give Murzik?", [
      ["A copy of the twentieth drawing.", true],
      ["The original drawing.", false],
      ["A ticket to Nice.", false],
    ]),
  },
  grammar: [
    {
      title: "Geneva review",
      paragraphs: [
        "Который: мужчина, который стоит у двери; картина, которую я люблю; художник, которого все знают; художница, о которой нам рассказали; зал, в котором висят портреты.",
        "Museum words: билет, скидка для студентов, по понедельникам, гардероб, номерок, на переднем / заднем плане, мне понравилась выставка, по-моему, на обратной стороне.",
      ],
      examples: [
        { ru: "Это галерея, в которой мы нашли рисунки бабушки.", en: "This is the gallery where we found Grandma's drawings." },
        { ru: "Мне очень понравилась картина, которую нам показала Софи.", en: "I really liked the picture Sophie showed us." },
      ],
    },
  ],
  tasks: [
    listen("ge7-t1", "Audio story: Sophie talks about her gallery. How many rooms does it have?", "Нашей галерее пятьдесят лет. Её открыла моя тётя. В галерее три зала: в первом — пейзажи, во втором — портреты, а в третьем — современное искусство. Каждый год к нам приходят двадцать тысяч посетителей. Но больше всего я люблю большую серую папку, которая лежит в запаснике.", [
      ["Three.", true],
      ["Two.", false],
      ["Twenty.", false],
    ]),
    choice("ge7-t2", "In Sophie's story, what is in the second room?", [
      ["Portraits.", true],
      ["Landscapes.", false],
      ["Modern art.", false],
    ], { skill: "listening" }),
    choice("ge7-t3", "“The gallery where we found the drawings.” Which is right?", [
      ["галерея, в которой мы нашли рисунки", true],
      ["галерея, которая мы нашли рисунки", false],
      ["галерея, в котором мы нашли рисунки", false],
    ], { skill: "grammar" }),
    read("ge7-t4", "Read the train ticket. Where do they change trains?", "ЖЕНЕВА — НИЦЦА\nОтправление: 07:40\nПересадка: Лион\nПрибытие: 14:35\n2 пассажира (+ кот)", [
      ["In Lyon.", true],
      ["In Geneva.", false],
      ["They don't change.", false],
    ]),
    script("ge7-t5", "Say goodbye to Sophie.", [
      { speaker: "Sophie", text: "Это вам на память — копия рисунка." },
      { speaker: "You", answer: "Спасибо! Это лучший подарок!", options: ["Спасибо! Это лучший подарок!", "Спасибо! Руками не трогать!", "Спасибо! Мне было скучно."] },
      { speaker: "Sophie", text: "Пишите мне! И передайте ей привет." },
      { speaker: "You", answer: "Обязательно! Спасибо за всё!", options: ["Обязательно! Спасибо за всё!", "Обязательно, по понедельникам!", "Обязательно, со вспышкой!"] },
    ], { skill: "review" }),
    match("ge7-t6", "Geneva review: match the Russian with the English.", [
      ["скидка для студентов", "a student discount"],
      ["гардероб", "a cloakroom"],
      ["пейзаж", "a landscape"],
      ["копия", "a copy"],
    ], { skill: "review" }),
    speak("ge7-t7", "Расскажи, как ты ходил(а) в музей.", "Я купил(а) билет со скидкой и взял(а) аудиогид. Мне очень понравились пейзажи, которые висят в первом зале.", "I bought a discount ticket and took an audio guide. I really liked the landscapes in the first room.", {
      help: "Tell the story of a museum visit out loud.",
    }),
  ],
  reward: {
    itemId: "asyacopy",
    itemName: "Copy of Asya's drawing",
    itemNameRu: "Копия рисунка Аси",
    ru: "Бабушка нарисовала меня!",
    en: "Grandma drew me!",
    a11y: "A framed copy of a pencil drawing stands on top of Murzik's suitcase: a Paris window and a ginger kitten on the windowsill, signed «А.».",
    image: p("reward-7"),
    steps: ["Sophie gives Murzik a framed copy of the twentieth drawing.", "A Paris window, a ginger kitten — and «А.» in the corner.", "On the back of the frame Sophie has copied one word: «Ницца».", "Murzik packs it on top of everything."],
  },
};

export const genevaLessons: Lesson[] = [geneva1, geneva2, geneva3, geneva4, geneva5, geneva6, geneva7];
