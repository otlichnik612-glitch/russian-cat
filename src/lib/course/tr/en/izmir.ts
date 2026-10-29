import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, fill, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Izmir · “Family” · at Aunt Leyla's: family, age, looks, character, jobs, friends, a family dinner. English version. */

const p = (name: string) => pic(`tr/izmir/${name}`);

const izmir1: Lesson = {
  id: "tr-a1-izmir-1",
  level: "A1",
  cityId: "tr-izmir",
  number: 1,
  title: "My family",
  minutes: 7,
  goals: ["Name the people in a family", "Say “my”: annem, babam", "Introduce your family"],
  vocabNote: "Turkish has different words for aunts and uncles: teyze is your mother's sister, hala your father's sister, dayı your mother's brother, amca your father's brother. An aunt's husband is enişte. Your mother's mother is anneanne, your father's mother is babaanne.",
  vocab: [
    v("triz1-1", "Bu benim ailem.", "This is my family.", "Aunt Leyla puts her arms round her husband and their two kittens on the doorstep.", "Listen to Bu benim ailem", p("l1-1")),
    v("triz1-2", "annem", "my mum", "Murzik holds a small framed photo of his mum.", "Listen to annem", p("l1-2")),
    v("triz1-3", "babam", "my dad", "Murzik shows a photo of his dad — a ginger cat in glasses.", "Listen to babam", p("l1-3")),
    v("triz1-4", "kardeşim", "my brother or sister", "Tarçın and Minnoş stand side by side, pointing at each other.", "Listen to kardeşim", p("l1-4")),
    v("triz1-5", "teyzem", "my aunt (mum's sister)", "Murzik hugs Aunt Leyla happily.", "Listen to teyzem", p("l1-5")),
    v("triz1-6", "kuzenim", "my cousin", "Murzik, Tarçın and Minnoş sit in a row on the sofa.", "Listen to kuzenim", p("l1-6")),
    v("triz1-7", "anneannem", "my grandma (mum's mum)", "Grandma Asya's postcard with the little painted ginger cat lies on the table.", "Listen to anneannem", p("l1-7")),
  ],
  dialogue: {
    title: "At Aunt Leyla's",
    note: "Eşim — my husband or wife, oğlum — my son, kızım — my daughter. Aunt Leyla is Grandma Asya's daughter and Murzik's mum's sister.",
    lines: [
      line("leyla", "Murzik! Hoş geldin, canım!", "Murzik! Welcome, my dear!"),
      line("murzik", "Teyze! Bu Tom, benim arkadaşım.", "Auntie! This is Tom, my friend."),
      line("leyla", "Hoş geldin, Tom! Bu benim ailem: eşim Mehmet, oğlum Tarçın ve kızım Minnoş.", "Welcome, Tom! This is my family: my husband Mehmet, my son Tarçın and my daughter Minnoş."),
      line("tom", "Memnun oldum!", "Nice to meet you!"),
      line("minnos", "Sen Murzik misin? Benim kuzenim misin?", "Are you Murzik? Are you my cousin?"),
      line("murzik", "Evet, senin kuzeninim!", "Yes, I'm your cousin!"),
      line("tarcin", "Hoş geldin, kuzen!", "Welcome, cousin!"),
    ],
    gist: choice("triz1-d1", "Who welcomes Murzik?", [
      ["Aunt Leyla and her family.", true],
      ["Ayşe Teyze.", false],
      ["Kemal Bey.", false],
    ]),
  },
  grammar: [
    {
      title: "My: -m, -ım, -im",
      paragraphs: [
        "In Turkish “my” is an ending on the word itself. After a vowel it's -m: anne → annem, baba → babam. After a consonant it's -ım, -im, -um or -üm: kardeş → kardeşim, kuzen → kuzenim.",
        "You can add benim for emphasis: benim annem — my mum.",
      ],
      examples: [
        { ru: "Bu benim teyzem.", en: "This is my aunt." },
        { ru: "Kardeşim Paris'te yaşıyor.", en: "My brother lives in Paris." },
      ],
    },
  ],
  tasks: [
    choice("triz1-t1", "How do you say “my dad”?", [
      ["babam", true],
      ["baban", false],
      ["babası", false],
    ], { skill: "grammar" }),
    listen("triz1-t2", "Listen. Who is it?", "Bu benim teyzem.", [
      ["An aunt — mum's sister.", true],
      ["A grandma.", false],
      ["A cousin.", false],
    ]),
    match("triz1-t3", "Match the pairs.", [
      ["annem", "my mum"],
      ["babam", "my dad"],
      ["kardeşim", "my brother or sister"],
      ["anneannem", "my grandma on mum's side"],
    ], { skill: "words" }),
    missing("triz1-t4", "Which letter is missing? (“my family”)", "ail", "m", "e", ["e", "a", "i"]),
    speak("triz1-t5", "Ailende kim var?", "Annem, babam ve bir kardeşim var.", "I have a mum, a dad and a brother (or a sister).", { help: "Talk about your family aloud." }),
    choice("triz1-t6", "You're offered seconds, but you're full. What do you say?", [
      ["Doydum, teşekkürler.", true],
      ["Çok açım!", false],
      ["Hazır!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "saksi",
    itemName: "Flowerpot",
    itemNameRu: "Saksı",
    ru: "Yaşasın! Çiçekli bir saksı!",
    en: "Hooray! A pot of flowers!",
    a11y: "A pot of bright pink bougainvillea stands on a balcony overlooking the sea.",
    image: p("saksi"),
    steps: ["Aunt Leyla brings a pot of flowers.", "Murzik puts it on the balcony.", "The sea murmurs below.", "Now he has a garden too!"],
    bridge: "Minnoş tugs Murzik's paw: “How old are you? I'm five!”",
  },
};

const izmir2: Lesson = {
  id: "tr-a1-izmir-2",
  level: "A1",
  cityId: "tr-izmir",
  number: 2,
  title: "How old are you?",
  minutes: 7,
  goals: ["Ask and say someone's age", "Say “older” and “younger”", "Ask how many brothers and sisters someone has"],
  vocabNote: "Yaş means “age”. Kaç yaşındasın? literally means “at what age are you?”.",
  vocab: [
    v("triz2-1", "Kaç yaşındasın?", "How old are you?", "Minnoş looks up at Murzik curiously.", "Listen to Kaç yaşındasın", p("l2-1")),
    v("triz2-2", "Beş yaşındayım.", "I'm five.", "Minnoş proudly shows her spread paw — five little fingers.", "Listen to Beş yaşındayım", p("l2-2")),
    v("triz2-3", "büyük", "older, big", "Tarçın stands next to little Minnoş, puffing out his chest importantly.", "Listen to büyük", p("l2-3")),
    v("triz2-4", "küçük", "younger, small", "Tiny Minnoş stands on tiptoe next to her brother.", "Listen to küçük", p("l2-4")),
    v("triz2-5", "genç", "young", "Tom jumps over a puddle with a spring in his step.", "Listen to genç", p("l2-5")),
    v("triz2-6", "yaşlı", "old, elderly", "An elderly grey-haired man with a walking stick smiles on a bench by the sea.", "Listen to yaşlı", p("l2-6")),
    v("triz2-7", "Kaç kardeşin var?", "How many brothers and sisters do you have?", "Tom holds up three fingers and looks at Murzik questioningly.", "Listen to Kaç kardeşin var", p("l2-7")),
  ],
  dialogue: {
    title: "Minnoş does the counting",
    note: "Anneannemiz means “our grandma”. Onu çok uzun zamandır görmedim — “I haven't seen her for a very long time”.",
    lines: [
      line("minnos", "Murzik, kaç yaşındasın?", "Murzik, how old are you?"),
      line("murzik", "Altı yaşındayım. Ya sen?", "I'm six. And you?"),
      line("minnos", "Ben beş yaşındayım! Tarçın on iki yaşında.", "I'm five! Tarçın is twelve."),
      line("tarcin", "Evet, ben büyüğüm!", "Yes, I'm the oldest!"),
      line("murzik", "Tom kaç yaşında?", "How old is Tom?"),
      line("tom", "Yirmi beş yaşındayım. Yaşlı değilim, gencim!", "I'm twenty-five. I'm not old, I'm young!"),
      line("minnos", "Ya anneannemiz? Kaç yaşında?", "What about our grandma? How old is she?"),
      line("leyla", "Bilmiyorum, canım… Onu çok uzun zamandır görmedim.", "I don't know, sweetheart… I haven't seen her for a very long time."),
    ],
    gist: choice("triz2-d1", "Who is five?", [
      ["Minnoş.", true],
      ["Tarçın.", false],
      ["Murzik.", false],
    ]),
  },
  grammar: [
    {
      title: "How old: yaşında",
      paragraphs: [
        "To give an age, use a number and yaşında: Minnoş beş yaşında. — Minnoş is five (literally “at five years”).",
        "About yourself, add the “I am” ending: beş yaşındayım (I'm five), yirmi yaşındayım (I'm twenty). The question: Kaç yaşındasın? Politely: Kaç yaşındasınız?",
      ],
      examples: [
        { ru: "Tarçın on iki yaşında.", en: "Tarçın is twelve." },
        { ru: "Ben yirmi beş yaşındayım.", en: "I'm twenty-five." },
      ],
    },
  ],
  tasks: [
    listen("triz2-t1", "Listen. How old is the speaker?", "On iki yaşındayım.", [
      ["12", true],
      ["20", false],
      ["2", false],
    ]),
    choice("triz2-t2", "How do you say “I'm five”?", [
      ["Beş yaşındayım.", true],
      ["Beş yaşım.", false],
      ["Ben beş yaş.", false],
    ], { skill: "grammar" }),
    match("triz2-t3", "Match the pairs.", [
      ["genç", "young"],
      ["yaşlı", "elderly"],
      ["büyük", "older, big"],
      ["küçük", "younger, small"],
    ], { skill: "words" }),
    missing("triz2-t4", "Which letter is missing? (“How old are you?”)", "Kaç ya", "ındasın?", "ş", ["ş", "s", "z"]),
    speak("triz2-t5", "Kaç yaşındasın?", "Yirmi yaşındayım.", "I'm twenty.", { help: "Say aloud how old you are." }),
    choice("triz2-t6", "How do you say “my mum”?", [
      ["annem", true],
      ["annen", false],
      ["annesi", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "resim",
    itemName: "Minnoş's drawing",
    itemNameRu: "Minnoş'un resmi",
    ru: "Yaşasın! Minnoş'un resmi!",
    en: "Hooray! Minnoş's drawing!",
    a11y: "A child's felt-tip drawing: a ginger kitten, a tall man in a green coat and a big sun.",
    image: p("resim"),
    steps: ["Minnoş draws with felt-tip pens.", "“Bu sensin, bu da Tom!” — “This is you, and this is Tom!”", "Murzik hangs the drawing on the wall.", "The most precious picture in the house!"],
    bridge: "Minnoş is drawing the whole family: “Murzik, Tarçın nasıl görünüyor?”",
  },
};

const izmir3: Lesson = {
  id: "tr-a1-izmir-3",
  level: "A1",
  cityId: "tr-izmir",
  number: 3,
  title: "What does he look like?",
  minutes: 7,
  goals: ["Describe what someone looks like", "Say what colour someone's eyes are", "Put the adjective before the noun"],
  vocabNote: "Boy means “height”. Uzun boylu — “tall”, kısa boylu — “short” (of a person).",
  vocab: [
    v("triz3-1", "Nasıl görünüyor?", "What does he look like?", "Minnoş, felt-tip in paw, looks at Murzik and waits for a description.", "Listen to Nasıl görünüyor", p("l3-1")),
    v("triz3-2", "uzun boylu", "tall", "Tall Tom next to little Murzik, by a height chart.", "Listen to uzun boylu", p("l3-2")),
    v("triz3-3", "kısa boylu", "short", "Tarçın stands by the same height chart and can't reach the top mark.", "Listen to kısa boylu", p("l3-3")),
    v("triz3-4", "sarışın", "fair-haired, blond", "Tom with golden hair in the sun.", "Listen to sarışın", p("l3-4")),
    v("triz3-5", "esmer", "dark-haired, olive-skinned", "A dark-haired woman with olive skin smiles on the waterfront.", "Listen to esmer", p("l3-5")),
    v("triz3-6", "Gözleri mavi.", "He has blue eyes.", "Close-up of Tom's blue eyes.", "Listen to Gözleri mavi", p("l3-6")),
    v("triz3-7", "kıvırcık saçlı", "curly-haired", "A little girl with a mop of curls.", "Listen to kıvırcık saçlı", p("l3-7")),
  ],
  dialogue: {
    title: "A portrait for Minnoş",
    note: "Tombul means “chubby” — an affectionate word. Kızıldı — “was ginger”, yeşildi — “were green”: the ending -di means “was / were”.",
    lines: [
      line("minnos", "Tom nasıl görünüyor? Çiziyorum!", "What does Tom look like? I'm drawing!"),
      line("murzik", "Tom uzun boylu ve sarışın. Gözleri mavi.", "Tom is tall and fair-haired. His eyes are blue."),
      line("minnos", "Peki Tarçın?", "And Tarçın?"),
      line("murzik", "Tarçın kısa boylu… ve biraz tombul!", "Tarçın is short… and a bit chubby!"),
      line("tarcin", "Tombul değilim! Sadece çok yemek yiyorum.", "I'm not chubby! I just eat a lot."),
      line("leyla", "Anneannenizin tüyleri kızıldı. Gözleri yeşildi.", "Your grandma had ginger fur. And her eyes were green."),
    ],
    gist: choice("triz3-d1", "What does Tom look like?", [
      ["Tall and fair-haired, with blue eyes.", true],
      ["Short and curly-haired.", false],
      ["Dark-haired, with green eyes.", false],
    ]),
  },
  grammar: [
    {
      title: "Adjectives go first",
      paragraphs: [
        "As in English, the adjective goes before the noun — and it never changes: uzun boylu bir adam (a tall man), uzun boylu bir kadın (a tall woman). Turkish has no grammatical gender at all: even “he” and “she” are the same word, o.",
        "Gözleri mavi — “his eyes are blue”. The ending -leri means “his / her” for several things.",
      ],
      examples: [
        { ru: "Uzun boylu bir kadın.", en: "A tall woman." },
        { ru: "Minnoş'un gözleri yeşil.", en: "Minnoş has green eyes." },
      ],
    },
  ],
  tasks: [
    match("triz3-t1", "Match the pairs.", [
      ["uzun boylu", "tall"],
      ["kısa boylu", "short"],
      ["sarışın", "fair-haired"],
      ["esmer", "dark-haired"],
    ], { skill: "words" }),
    listen("triz3-t2", "Listen. What colour are her eyes?", "Gözleri yeşil.", [
      ["Green.", true],
      ["Blue.", false],
      ["Brown.", false],
    ]),
    choice("triz3-t3", "How do you say “a tall woman”?", [
      ["uzun boylu bir kadın", true],
      ["kadın uzun boylu bir", false],
      ["uzun boylular bir kadın", false],
    ], { skill: "grammar" }),
    missing("triz3-t4", "Which letter is missing? (“fair-haired”)", "sarı", "ın", "ş", ["ş", "s", "c"]),
    speak("triz3-t5", "Annen nasıl görünüyor?", "Annem kısa boylu ve esmer.", "My mum is short and dark-haired.", { help: "Describe someone in your family aloud." }),
    listen("triz3-t6", "Remember the last lesson. How old?", "Yirmi beş yaşında.", [
      ["25", true],
      ["52", false],
      ["15", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ayna",
    itemName: "Mirror",
    itemNameRu: "Ayna",
    ru: "Yaşasın! Yeni bir ayna!",
    en: "Hooray! A new mirror!",
    a11y: "A round mirror in a blue mosaic frame. Murzik and Minnoş pull faces in it.",
    image: p("ayna"),
    steps: ["Uncle Mehmet hangs a round mirror on the wall.", "Murzik looks: ginger fur, green eyes.", "“Gözlerin anneannen gibi!” — “You have your grandma's eyes!”", "Murzik smiles at his reflection."],
    bridge: "Tarçın is sprawled on the sofa: “I'm not lazy, I'm just resting!”",
  },
};

const izmir4: Lesson = {
  id: "tr-a1-izmir-4",
  level: "A1",
  cityId: "tr-izmir",
  number: 4,
  title: "What's he like?",
  minutes: 7,
  goals: ["Describe someone's character", "Say “very”, “a bit” and “not at all”", "Pay a compliment"],
  vocabNote: "Tatlı means both “sweet” (to taste) and “sweet, cute”. Çok tatlı! is what you say about children, kittens and anything adorable.",
  vocab: [
    v("triz4-1", "Nasıl biri?", "What's he like?", "Tom points questioningly at Tarçın, asleep in a hammock.", "Listen to Nasıl biri", p("l4-1")),
    v("triz4-2", "neşeli", "cheerful", "Minnoş laughs and spins round on the spot.", "Listen to neşeli", p("l4-2")),
    v("triz4-3", "tembel", "lazy", "Tarçın dangles lazily from the hammock with a half-eaten apple.", "Listen to tembel", p("l4-3")),
    v("triz4-4", "çalışkan", "hard-working", "Minnoş draws with great concentration, surrounded by a pile of finished drawings.", "Listen to çalışkan", p("l4-4")),
    v("triz4-5", "sakin", "calm", "Uncle Mehmet slowly sips tea, looking at the sea.", "Listen to sakin", p("l4-5")),
    v("triz4-6", "komik", "funny", "Tarçın pulls a funny face, and everyone laughs.", "Listen to komik", p("l4-6")),
    v("triz4-7", "Çok tatlı!", "So sweet!", "Aunt Leyla looks fondly at Minnoş, fast asleep.", "Listen to Çok tatlı", p("l4-7")),
  ],
  dialogue: {
    title: "The lazy cousin",
    note: "Hamakta yatıyor — “he lies in the hammock”. Neşeliydi — “she was cheerful”.",
    lines: [
      line("leyla", "Tarçın çok tembel! Bütün gün hamakta yatıyor.", "Tarçın is so lazy! He lies in the hammock all day."),
      line("tarcin", "Tembel değilim, sakinim!", "I'm not lazy, I'm calm!"),
      line("murzik", "Ama çok komik!", "But he's really funny!"),
      line("leyla", "Evet, neşeli bir çocuk. Minnoş da çok çalışkan: her gün resim yapıyor.", "Yes, he's a cheerful boy. And Minnoş is very hard-working: she draws every day."),
      line("murzik", "Anneannem de resim yapardı, değil mi?", "Grandma used to paint too, didn't she?"),
      line("leyla", "Evet… Annem çok neşeliydi.", "Yes… My mother was very cheerful."),
    ],
    gist: choice("triz4-d1", "What's Tarçın like, according to his mum?", [
      ["Lazy.", true],
      ["Hard-working.", false],
      ["Sad.", false],
    ]),
  },
  grammar: [
    {
      title: "Very, a bit, not at all",
      paragraphs: [
        "Çok means “very”, biraz means “a bit”: çok neşeli — very cheerful, biraz tembel — a bit lazy.",
        "“Not at all” is hiç … değil: Minnoş hiç sakin değil! — Minnoş isn't calm at all! Değil (not) goes after the word, as in Fena değil.",
      ],
      examples: [
        { ru: "Tarçın biraz tembel ama çok komik.", en: "Tarçın is a bit lazy, but very funny." },
        { ru: "Minnoş hiç sakin değil!", en: "Minnoş isn't calm at all!" },
      ],
    },
  ],
  tasks: [
    choice("triz4-t1", "How do you say “He isn't calm at all”?", [
      ["Hiç sakin değil.", true],
      ["Hiç sakin.", false],
      ["Sakin hiç değil mi.", false],
    ], { skill: "grammar" }),
    listen("triz4-t2", "Listen. What's Minnoş like?", "Minnoş çok çalışkan.", [
      ["Hard-working.", true],
      ["Lazy.", false],
      ["Calm.", false],
    ]),
    match("triz4-t3", "Match the pairs.", [
      ["neşeli", "cheerful"],
      ["tembel", "lazy"],
      ["sakin", "calm"],
      ["komik", "funny"],
    ], { skill: "words" }),
    spell("triz4-t4", "Spell the word for “cheerful”.", "neşeli"),
    speak("triz4-t5", "En iyi arkadaşın nasıl biri?", "Çok neşeli ve biraz tembel!", "Very cheerful and a bit lazy!", { help: "Describe a friend's character aloud." }),
    choice("triz4-t6", "How do you say “He has blue eyes”?", [
      ["Gözleri mavi.", true],
      ["Gözler mavi.", false],
      ["Mavi gözleri.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hamak",
    itemName: "Hammock",
    itemNameRu: "Hamak",
    ru: "Yaşasın! Bir hamak!",
    en: "Hooray! A hammock!",
    a11y: "A striped hammock hangs on a terrace overlooking the sea. Tarçın is fast asleep in it.",
    image: p("hamak"),
    steps: ["Tarçın gives Murzik his old hammock.", "“Bende iki tane var!” — “I've got two!”", "Murzik hangs the hammock on the terrace.", "Tarçın immediately falls asleep in it."],
    bridge: "In the evening Uncle Mehmet comes home from work. “So, who does what?” Tom asks.",
  },
};

const izmir5: Lesson = {
  id: "tr-a1-izmir-5",
  level: "A1",
  cityId: "tr-izmir",
  number: 5,
  title: "What do you do?",
  minutes: 7,
  goals: ["Ask what someone does for a living", "Name some jobs", "Say “I'm a teacher”, “I'm a cook”"],
  vocabNote: "-cı, -ci, -cu, -cü is an ending for jobs, a bit like English -er; after the sounds ç, f, h, k, p, s, ş, t it becomes -çı, -çi, -çu, -çü: fotoğraf (photo) → fotoğrafçı (photographer), simit → simitçi (simit seller).",
  vocab: [
    v("triz5-1", "Ne iş yapıyorsun?", "What do you do?", "Tom, notepad in hand, asks Uncle Mehmet.", "Listen to Ne iş yapıyorsun", p("l5-1")),
    v("triz5-2", "öğretmen", "teacher", "Aunt Leyla at a school blackboard with a pointer.", "Listen to öğretmen", p("l5-2")),
    v("triz5-3", "aşçı", "cook, chef", "Uncle Mehmet at the stove in a white chef's hat.", "Listen to aşçı", p("l5-3")),
    v("triz5-4", "ressam", "painter, artist", "Minnoş at an easel in a beret, a brush in her paw.", "Listen to ressam", p("l5-4")),
    v("triz5-5", "fotoğrafçı", "photographer", "Tom, a camera round his neck, photographs the waterfront.", "Listen to fotoğrafçı", p("l5-5")),
    v("triz5-6", "doktor", "doctor", "A doctor in a white coat with a stethoscope.", "Listen to doktor", p("l5-6")),
    v("triz5-7", "Öğrenciyim.", "I'm a student.", "Tarçın, with a backpack and books, yawns at the school door.", "Listen to Öğrenciyim", p("l5-7")),
  ],
  dialogue: {
    title: "Who does what",
    note: "Lokantam var — “I have a little restaurant”. Uyuyorum — “I sleep”.",
    lines: [
      line("mehmet", "Merhaba! Ben geldim!", "Hello! I'm home!"),
      line("murzik", "Mehmet Enişte, ne iş yapıyorsun?", "Uncle Mehmet, what do you do?"),
      line("mehmet", "Aşçıyım! Kordon'da küçük bir lokantam var.", "I'm a cook! I have a little restaurant on the Kordon."),
      line("tom", "Leyla Hanım, siz ne iş yapıyorsunuz?", "Leyla Hanım, and what do you do?"),
      line("leyla", "Ben öğretmenim. Ya sen, Tom?", "I'm a teacher. And you, Tom?"),
      line("tom", "Ben fotoğrafçıyım.", "I'm a photographer."),
      line("minnos", "Ben de ressamım!", "And I'm a painter!"),
      line("tarcin", "Ben… öğrenciyim. Ve uyuyorum.", "I'm… a student. And I sleep."),
    ],
    gist: choice("triz5-d1", "What does Uncle Mehmet do?", [
      ["He's a cook.", true],
      ["He's a teacher.", false],
      ["He's a photographer.", false],
    ]),
  },
  grammar: [
    {
      title: "I'm a teacher: öğretmenim",
      paragraphs: [
        "Your own job takes the same “I am” ending as iyiyim: öğretmen → öğretmenim (I'm a teacher), aşçı → aşçıyım (I'm a cook). There's no word for “a” here.",
        "About someone else, no ending is needed: Leyla öğretmen. Mehmet aşçı. The polite question: Ne iş yapıyorsunuz?",
      ],
      examples: [
        { ru: "Ben fotoğrafçıyım.", en: "I'm a photographer." },
        { ru: "Siz doktor musunuz?", en: "Are you a doctor?" },
      ],
    },
  ],
  tasks: [
    choice("triz5-t1", "How do you say “I'm a photographer”?", [
      ["Fotoğrafçıyım.", true],
      ["Fotoğrafçım.", false],
      ["Fotoğrafçısın.", false],
    ], { skill: "grammar" }),
    listen("triz5-t2", "Listen. What does the speaker do?", "Ben doktorum.", [
      ["A doctor.", true],
      ["A teacher.", false],
      ["A cook.", false],
    ]),
    match("triz5-t3", "Match the pairs.", [
      ["öğretmen", "teacher"],
      ["aşçı", "cook"],
      ["ressam", "painter"],
      ["fotoğrafçı", "photographer"],
    ], { skill: "words" }),
    missing("triz5-t4", "Which letter is missing? (“cook”)", "a", "çı", "ş", ["ş", "s", "ç"]),
    speak("triz5-t5", "Ne iş yapıyorsun?", "Öğrenciyim.", "I'm a student.", { help: "Say aloud what you do." }),
    choice("triz5-t6", "How do you say “He's very cheerful”?", [
      ["Çok neşeli.", true],
      ["Hiç neşeli.", false],
      ["Neşeli çok.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "saat",
    itemName: "Clock-tower clock",
    itemNameRu: "Saat",
    ru: "Yaşasın! Küçük bir saat!",
    en: "Hooray! A little clock!",
    a11y: "A small table clock — a copy of Izmir's famous clock tower, with patterns and arches.",
    image: p("saat"),
    steps: ["Uncle Mehmet brings a box.", "Inside is a little clock — a copy of the clock tower.", "“İzmir'in simgesi!” — “The symbol of Izmir!”", "The clock ticks quietly on the shelf."],
    bridge: "Aunt Leyla says: “Tomorrow Tarçın will introduce you to his friend!”",
  },
};

const izmir6: Lesson = {
  id: "tr-a1-izmir-6",
  level: "A1",
  cityId: "tr-izmir",
  number: 6,
  title: "My friends",
  minutes: 7,
  goals: ["Talk about your friends", "Say “I have” and “I don't have”", "Introduce friends to each other"],
  vocabNote: "Tanıştırayım — “let me introduce you”. It's how you start when you introduce one person to another.",
  vocab: [
    v("triz6-1", "arkadaş", "friend", "Murzik and Tom walk along the waterfront, arms round each other's shoulders.", "Listen to arkadaş", p("l6-1")),
    v("triz6-2", "Benim bir arkadaşım var.", "I have a friend.", "Tarçın shows a photo on his phone and smiles.", "Listen to Benim bir arkadaşım var", p("l6-2")),
    v("triz6-3", "en iyi arkadaşım", "my best friend", "Murzik and Tom give each other a high five.", "Listen to en iyi arkadaşım", p("l6-3")),
    v("triz6-4", "Onu tanıyor musun?", "Do you know her?", "Tarçın points at a girl in the distance and looks at Murzik questioningly.", "Listen to Onu tanıyor musun", p("l6-4")),
    v("triz6-5", "Tanıştırayım: …", "Let me introduce…", "Tom holds out his hand towards Murzik, introducing him.", "Listen to Tanıştırayım", p("l6-5")),
    v("triz6-6", "komşu", "neighbour", "A neighbour waves from the next balcony, covered in flowers.", "Listen to komşu", p("l6-6")),
    v("triz6-7", "birlikte", "together", "Murzik, Tom and Tarçın eat ice cream together on a bench.", "Listen to birlikte", p("l6-7")),
  ],
  dialogue: {
    title: "On the waterfront",
    note: "Seyahat ediyoruz — “we're travelling”. Plaja — “to the beach”. The word onu means both “him” and “her”.",
    lines: [
      line("tarcin", "Murzik, Türkiye'de arkadaşın var mı?", "Murzik, do you have friends in Turkey?"),
      line("murzik", "Evet! Ayşe Teyze var. Ve en iyi arkadaşım Tom!", "Yes! There's Ayşe Teyze. And my best friend Tom!"),
      line("tom", "Biz birlikte seyahat ediyoruz.", "We're travelling together."),
      line("tarcin", "Benim de bir arkadaşım var: komşumuz Ece. Onu tanıyor musun?", "I have a friend too: our neighbour Ece. Do you know her?"),
      line("murzik", "Hayır, tanımıyorum.", "No, I don't know her."),
      line("tarcin", "Gel, tanıştırayım!", "Come on, I'll introduce you!"),
      line("leyla", "Ece çok tatlı bir kız. Plaja birlikte gidin!", "Ece is a really sweet girl. Go to the beach together!"),
    ],
    gist: choice("triz6-d1", "Who is Murzik's best friend?", [
      ["Tom.", true],
      ["Tarçın.", false],
      ["Ece.", false],
    ]),
  },
  grammar: [
    {
      title: "I have: benim … var",
      paragraphs: [
        "Turkish has no verb “to have”. Instead it says “my thing there is”: benim + the thing with the “my” ending + var: Benim bir arkadaşım var. — I have a friend.",
        "“I don't have” is the same with yok: Benim arabam yok. — I don't have a car. The question: Senin kardeşin var mı?",
      ],
      examples: [
        { ru: "Benim bir arkadaşım var.", en: "I have a friend." },
        { ru: "Senin kardeşin var mı? — Hayır, yok.", en: "Do you have a brother or sister? — No, I don't." },
      ],
    },
  ],
  tasks: [
    fill("triz6-t1", "Fill in the word: “I have a friend”.", "Benim bir arkadaşım", ".", "var", ["var", "yok", "değil"], { skill: "grammar" }),
    listen("triz6-t2", "Listen. What does Tarçın say?", "Benim bir kardeşim var.", [
      ["He has a brother or sister.", true],
      ["He has no friends.", false],
      ["He has a dog.", false],
    ]),
    match("triz6-t3", "Match the pairs.", [
      ["arkadaş", "friend"],
      ["komşu", "neighbour"],
      ["birlikte", "together"],
      ["en iyi", "the best"],
    ], { skill: "words" }),
    missing("triz6-t4", "Which letter is missing? (“friend”)", "arkada", "", "ş", ["ş", "s", "z"]),
    speak("triz6-t5", "En iyi arkadaşın kim?", "En iyi arkadaşım Maks.", "My best friend is Max.", { help: "Say aloud who your best friend is." }),
    choice("triz6-t6", "How do you ask “What do you do?”", [
      ["Ne iş yapıyorsun?", true],
      ["Nasıl biri?", false],
      ["Kaç yaşındasın?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sezlong",
    itemName: "Deckchair",
    itemNameRu: "Şezlong",
    ru: "Yaşasın! Bir şezlong!",
    en: "Hooray! A deckchair!",
    a11y: "A striped deckchair stands on a balcony overlooking the sea. Murzik sits in it wearing sunglasses.",
    image: p("sezlong"),
    steps: ["Murzik and Tarçın drag a deckchair back from the beach.", "They put it on the balcony.", "Murzik puts on his sunglasses.", "Perfect: the sea, the sun and friends!"],
    bridge: "On Saturday there's a big family dinner. Murzik decides to show his aunt Grandma's postcard.",
  },
};

const izmir7: Lesson = {
  id: "tr-a1-izmir-7",
  level: "A1",
  cityId: "tr-izmir",
  number: 7,
  title: "Family dinner",
  minutes: 8,
  goals: ["Say “we're all here”", "Take a family photo and make a toast", "Review all the words from Izmir"],
  vocabNote: "Sağlığınıza! — “to your health!”. Turks make this toast with any drink — even tea or ayran.",
  vocab: [
    v("triz7-1", "Hepimiz buradayız!", "We're all here!", "The whole family sits at a long table on the terrace.", "Listen to Hepimiz buradayız", p("l7-1")),
    v("triz7-2", "Bu kim?", "Who's this?", "Minnoş points her paw at a photo on the wall.", "Listen to Bu kim", p("l7-2")),
    v("triz7-3", "Fotoğraf çekelim!", "Let's take a photo!", "Tom sets up his camera on a tripod in front of the table.", "Listen to Fotoğraf çekelim", p("l7-3")),
    v("triz7-4", "Gülümseyin!", "Smile!", "The whole family gives the camera a big smile.", "Listen to Gülümseyin", p("l7-4")),
    v("triz7-5", "Aile çok önemli.", "Family is very important.", "Uncle Mehmet puts his arms round everyone at the table.", "Listen to Aile çok önemli", p("l7-5")),
    v("triz7-6", "Seni özledim.", "I've missed you.", "Aunt Leyla gives Murzik a big hug.", "Listen to Seni özledim", p("l7-6")),
    v("triz7-7", "Sağlığınıza!", "To your health!", "Everyone raises their glasses of tea and ayran.", "Listen to Sağlığınıza", p("l7-7")),
  ],
  dialogue: {
    title: "The postcard",
    note: "Yazısı — “her handwriting”. Bulacak — “will find”. Asya Anneanne'nin sağlığına! — “To Grandma Asya's health!”",
    lines: [
      line("mehmet", "Hepimiz buradayız! Afiyet olsun!", "We're all here! Enjoy your meal!"),
      line("tom", "Fotoğraf çekelim! Gülümseyin!", "Let's take a photo! Smile!"),
      line("murzik", "Leyla Teyze, bak… Bu kartpostal anneannemden.", "Aunt Leyla, look… This postcard is from Grandma."),
      line("leyla", "Bu… annemin yazısı! Annem!", "This is… my mother's handwriting! Mum!"),
      line("leyla", "Onu çok özledim.", "I miss her so much."),
      line("minnos", "Anneanne nerede?", "Where's Grandma?"),
      line("leyla", "Bilmiyoruz, canım. Ama Murzik onu bulacak.", "We don't know, sweetheart. But Murzik will find her."),
      line("mehmet", "Asya Anneanne'nin sağlığına!", "To Grandma Asya's health!"),
    ],
    gist: choice("triz7-d1", "What does Aunt Leyla recognise?", [
      ["Her mother's handwriting.", true],
      ["An old photo of herself.", false],
      ["Grandma's address.", false],
    ]),
  },
  grammar: [
    {
      title: "We, you, they",
      paragraphs: [
        "“We are” is the ending -ız / -iz / -uz / -üz: buradayız — we're here, mutluyuz — we're happy. “You are” (polite or plural) is -sınız: Neredesiniz? — Where are you?",
        "“They” is simply the word onlar, sometimes with -lar on the verb: Onlar burada. — They're here.",
      ],
      examples: [
        { ru: "Hepimiz buradayız!", en: "We're all here!" },
        { ru: "Siz neredesiniz?", en: "Where are you?" },
      ],
    },
  ],
  tasks: [
    listen("triz7-t1", "Audio exam. Listen. Who is in the photo?", "Bu benim annem. Gözleri yeşil, çok neşeli.", [
      ["Mum: green eyes, very cheerful.", true],
      ["Dad: tall and calm.", false],
      ["Grandma: fair-haired and strict.", false],
    ]),
    choice("triz7-t2", "What do you say when you take a photo?", [
      ["Gülümseyin!", true],
      ["Afiyet olsun!", false],
      ["Hoş geldiniz!", false],
    ], { skill: "words" }),
    choice("triz7-t3", "How do you say “We're all here”?", [
      ["Hepimiz buradayız.", true],
      ["Hepimiz buradasınız.", false],
      ["Hepimiz buradayım.", false],
    ], { skill: "grammar" }),
    spell("triz7-t4", "Spell the word for “family”.", "aile"),
    speak("triz7-t5", "Ailende en neşeli kim?", "Kardeşim çok neşeli!", "My brother is very cheerful!", { help: "Say aloud who's the most cheerful person in your family." }),
    script("triz7-t6", "Remember all of Izmir. Finish the conversations.", [
      { speaker: "Minnoş", text: "Kaç yaşındasın?" },
      { speaker: "You", answer: "Yirmi yaşındayım.", options: ["Yirmi yaşındayım.", "Öğretmenim.", "Uzun boylu."] },
      { speaker: "Aunt Leyla", text: "Ne iş yapıyorsun?" },
      { speaker: "You", answer: "Öğrenciyim.", options: ["Öğrenciyim.", "Çok tembel!", "Hepimiz buradayız!"] },
      { speaker: "Tarçın", text: "Benim bir arkadaşım var. Ya senin?" },
      { speaker: "You", answer: "Benim de bir arkadaşım var!", options: ["Benim de bir arkadaşım var!", "Onu tanıyor musun?", "Gülümseyin!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "aile-foto",
    itemName: "Family photo",
    itemNameRu: "Aile fotoğrafı",
    ru: "Yaşasın! Bir aile fotoğrafı!",
    en: "Hooray! A family photo!",
    a11y: "A framed photo: the whole family at the table on the terrace — Aunt Leyla, Uncle Mehmet, Tarçın, Minnoş, Murzik and Tom. Everyone is smiling.",
    image: p("aile-foto"),
    steps: ["Tom prints the photo.", "Aunt Leyla puts it in a frame.", "The whole family together!", "Murzik puts the frame next to the clock."],
    bridge: "Aunt Leyla takes something old and carefully wrapped out of a little box…",
  },
};

const story: CityStory = {
  home: {
    name: "At Aunt Leyla's",
    nameRu: "Leyla Teyze'nin evi",
    image: p("home"),
    a11y: "A bright empty room with a balcony in Aunt Leyla's house on the Kordon waterfront. The sea and palm trees outside. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "saat",
  welcomeRu: "Merhaba, İzmir!",
  welcomeEn: "Hello, Izmir!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom on the Kordon waterfront in Izmir: palm trees, the sea and the ornate old clock tower.",
  departureImage: p("departure"),
  departureA11y: "The whole family sees Murzik and Tom off at the bus station: Minnoş waves, Tarçın yawns, Aunt Leyla wipes away a tear.",
  finale: [
    {
      image: p("photo"),
      a11y: "After dinner Aunt Leyla holds an old black-and-white photo of a young cat with a paintbrush — her face can't be made out. Grandma's postcard is on the table. Murzik, Tarçın and Minnoş look at the photo.",
      lines: [
        { en: "After dinner Aunt Leyla looks at the postcard for a long time. Then she takes an old photo of young Asya out of a little box." },
        { ru: "Bu annem. Onu bul, Murzik.", en: "This is my mother. Find her, Murzik." },
        { en: "“Mum loved hot springs. She used to say: there are white mountains there, like cotton.” White as cotton… Pamukkale!" },
      ],
    },
    {
      image: p("saat"),
      a11y: "Murzik walks round his room at Aunt Leyla's, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his room at Aunt Leyla's. Tom takes a photo of it for his travel diary." },
        { en: "Murzik takes the little clock with him — a copy of Izmir's clock tower." },
        { en: "Grandma's old photo goes into the suitcase pocket, next to the postcards." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "İzmir tamamlandı!", en: "Izmir complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Şimdiden dört şehir!", en: "Four cities already!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "The family waves goodbye by the bus.",
      lines: [
        { ru: "Hoşça kalın! Görüşürüz, Tarçın!", en: "Goodbye! See you, Tarçın!" },
        { ru: "Sıradaki durak: Pamukkale!", en: "Next stop: Pamukkale!" },
      ],
    },
    {
      image: p("road"),
      a11y: "The bus drives inland past fields of cotton.",
      lines: [{ ru: "İzmir → Pamukkale", en: "Izmir → Pamukkale" }],
    },
    {
      image: pic("tr/pamukkale/arrival"),
      a11y: "Murzik and Tom at the foot of Pamukkale's snow-white terraces. The sky is reflected in the blue pools.",
      lines: [
        { ru: "Merhaba, Pamukkale!", en: "Hello, Pamukkale!" },
        { ru: "Pamuk gibi beyaz!", en: "White as cotton!" },
      ],
    },
  ],
};

export const trIzmirEn = {
  id: "tr-izmir",
  name: "Izmir",
  nameTr: "İzmir",
  lessons: [izmir1, izmir2, izmir3, izmir4, izmir5, izmir6, izmir7],
  story,
};
