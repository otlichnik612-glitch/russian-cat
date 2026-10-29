import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Antalya · “Free time” · what I like doing, what I can do, sport, a concert at Aspendos, the old musician, a quiet evening, a concert. English version. */

const p = (name: string) => pic(`tr/antalya/${name}`);

const antalya1: Lesson = {
  id: "tr-a1-antalya-1",
  level: "A1",
  cityId: "tr-antalya",
  number: 1,
  title: "What do you like doing?",
  minutes: 7,
  goals: ["Ask what someone likes doing", "Say “I like swimming, drawing”", "Say what you don't like"],
  vocabNote: "Boş zaman means “free time” — literally “empty time”.",
  vocab: [
    v("tran1-1", "Boş zamanında ne yapıyorsun?", "What do you do in your free time?", "Tom sits in a little courtyard under an orange tree, looking at Murzik with interest.", "Listen to Boş zamanında ne yapıyorsun", p("l1-1")),
    v("tran1-2", "Yüzmeyi seviyorum.", "I like swimming.", "Murzik swims in clear water near the rocks.", "Listen to Yüzmeyi seviyorum", p("l1-2")),
    v("tran1-3", "Resim yapmayı seviyorum.", "I like drawing.", "Murzik draws an orange tree in his sketchbook.", "Listen to Resim yapmayı seviyorum", p("l1-3")),
    v("tran1-4", "Kitap okumayı seviyorum.", "I like reading.", "Tom reads a book in a wicker chair.", "Listen to Kitap okumayı seviyorum", p("l1-4")),
    v("tran1-5", "Müzik dinlemeyi seviyorum.", "I like listening to music.", "Murzik, in headphones, nods his head to the beat.", "Listen to Müzik dinlemeyi seviyorum", p("l1-5")),
    v("tran1-6", "Dans etmeyi sevmiyorum.", "I don't like dancing.", "Tom tries clumsily to dance, waving his arms in embarrassment.", "Listen to Dans etmeyi sevmiyorum", p("l1-6")),
    v("tran1-7", "Ne yapmayı seviyorsun?", "What do you like doing?", "Murzik, sketchbook in paw, looks at Tom questioningly.", "Listen to Ne yapmayı seviyorsun", p("l1-7")),
  ],
  dialogue: {
    title: "In the courtyard",
    note: "Göster! means “Show me!”. Anneannen gibi — “like your grandma”.",
    lines: [
      line("tom", "Murzik, boş zamanında ne yapıyorsun?", "Murzik, what do you do in your free time?"),
      line("murzik", "Yüzmeyi seviyorum. Ve… resim yapmayı seviyorum!", "I like swimming. And… I like drawing!"),
      line("tom", "Resim mi? Göster!", "Drawing? Show me!"),
      line("murzik", "Bak: portakal ağacı.", "Look: an orange tree."),
      line("tom", "Çok güzel! Anneannen gibi!", "It's lovely! Just like your grandma!"),
      line("murzik", "Sen ne yapmayı seviyorsun?", "What do you like doing?"),
      line("tom", "Fotoğraf çekmeyi ve müzik dinlemeyi seviyorum. Ama dans etmeyi sevmiyorum!", "I like taking photos and listening to music. But I don't like dancing!"),
    ],
    gist: choice("tran1-d1", "What does Murzik like doing?", [
      ["Swimming and drawing.", true],
      ["Dancing.", false],
      ["Reading.", false],
    ]),
  },
  grammar: [
    {
      title: "I like doing: -meyi seviyorum",
      paragraphs: [
        "Where English says “I like swimming”, Turkish takes the -mek / -mak form of the verb, drops the final k and adds -yi / -yı: yüzmek → yüzmeyi seviyorum (I like swimming), okumak → okumayı seviyorum (I like reading).",
        "“I don't like” is sevmiyorum: Dans etmeyi sevmiyorum. The question: Ne yapmayı seviyorsun?",
      ],
      examples: [
        { ru: "Resim yapmayı seviyorum.", en: "I like drawing." },
        { ru: "Tom dans etmeyi sevmiyor.", en: "Tom doesn't like dancing." },
      ],
    },
  ],
  tasks: [
    choice("tran1-t1", "How do you say “I like swimming”?", [
      ["Yüzmeyi seviyorum.", true],
      ["Yüzmek seviyorum.", false],
      ["Yüzüyorum seviyorum.", false],
    ], { skill: "grammar" }),
    listen("tran1-t2", "Listen. What doesn't the speaker like?", "Dans etmeyi sevmiyorum.", [
      ["Dancing.", true],
      ["Swimming.", false],
      ["Reading.", false],
    ]),
    match("tran1-t3", "Match the pairs.", [
      ["yüzmek", "to swim"],
      ["okumak", "to read"],
      ["dinlemek", "to listen"],
      ["dans etmek", "to dance"],
    ], { skill: "words" }),
    missing("tran1-t4", "Which letter is missing? (“I love, I like”)", "sev", "yorum", "i", ["i", "ı", "e"]),
    speak("tran1-t5", "Boş zamanında ne yapıyorsun?", "Kitap okumayı ve yüzmeyi seviyorum.", "I like reading and swimming.", { help: "Say aloud what you like doing." }),
    choice("tran1-t6", "How do you say “We're lost!”?", [
      ["Kaybolduk!", true],
      ["Kayboldum!", false],
      ["Kaybolacağız!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sandalye",
    itemName: "Wicker chair",
    itemNameRu: "Hasır sandalye",
    ru: "Yaşasın! Hasır bir sandalye!",
    en: "Hooray! A wicker chair!",
    a11y: "A wicker chair stands in the courtyard under the orange tree, with a sketchbook and pencils on it.",
    image: p("sandalye"),
    steps: ["Murzik puts a wicker chair under the orange tree.", "He puts his sketchbook on it.", "He sits down to draw.", "Shade, quiet and the smell of oranges."],
    bridge: "In the evening, music drifts over from the next courtyard. Someone is playing the saz…",
  },
};

const antalya2: Lesson = {
  id: "tr-a1-antalya-2",
  level: "A1",
  cityId: "tr-antalya",
  number: 2,
  title: "Can you play the saz?",
  minutes: 7,
  goals: ["Ask if someone can do something", "Say “I can” and “I can't”", "Ask someone to teach you"],
  vocabNote: "The saz is a Turkish string instrument with a long neck. The best-known kind is the bağlama. Usta means “master” — a respectful title for musicians and craftsmen.",
  vocab: [
    v("tran2-1", "saz", "saz (a string instrument)", "A wooden saz with a long neck leans against a stone wall.", "Listen to saz", p("l2-1")),
    v("tran2-2", "Saz çalabiliyor musun?", "Can you play the saz?", "An elderly musician holds out a saz to Murzik.", "Listen to Saz çalabiliyor musun", p("l2-2")),
    v("tran2-3", "Evet, çalabiliyorum.", "Yes, I can.", "Hasan Usta confidently plucks the strings.", "Listen to Evet, çalabiliyorum", p("l2-3")),
    v("tran2-4", "Hayır, çalamıyorum.", "No, I can't.", "Murzik holds the saz upside down and smiles sheepishly.", "Listen to Hayır, çalamıyorum", p("l2-4")),
    v("tran2-5", "Biraz şarkı söyleyebiliyorum.", "I can sing a little.", "Murzik sings with his eyes closed, musical notes above his head.", "Listen to Biraz şarkı söyleyebiliyorum", p("l2-5")),
    v("tran2-6", "Öğretir misiniz?", "Could you teach me?", "Tom clasps his hands hopefully in front of Hasan Usta.", "Listen to Öğretir misiniz", p("l2-6")),
    v("tran2-7", "şarkı", "song", "Drawn musical notes fly out of a window.", "Listen to şarkı", p("l2-7")),
  ],
  dialogue: {
    title: "Music over the wall",
    note: "Evladım — “my child” — is an affectionate word older people use. Önce dinleyin — “listen first”.",
    lines: [
      line("murzik", "Merhaba! Çok güzel çalıyorsunuz!", "Hello! You play so beautifully!"),
      line("hasan", "Teşekkür ederim, evladım. Sen saz çalabiliyor musun?", "Thank you, my child. Can you play the saz?"),
      line("murzik", "Hayır, çalamıyorum. Ama biraz şarkı söyleyebiliyorum.", "No, I can't. But I can sing a little."),
      line("hasan", "Gel, otur. Bu saz çok eski.", "Come and sit down. This saz is very old."),
      line("tom", "Bize öğretir misiniz?", "Could you teach us?"),
      line("hasan", "Tabii! Önce dinleyin.", "Of course! Listen first."),
    ],
    gist: choice("tran2-d1", "What can Murzik do?", [
      ["Sing a little.", true],
      ["Play the saz.", false],
      ["Nothing.", false],
    ]),
  },
  grammar: [
    {
      title: "I can: -ebiliyorum",
      paragraphs: [
        "“I can” is the verb + -abiliyorum / -ebiliyorum: çal-abiliyorum — I can play, söyle-yebiliyorum — I can sing.",
        "“I can't” is -amıyorum / -emiyorum: çal-amıyorum — I can't play, söyle-yemiyorum — I can't sing.",
      ],
      examples: [
        { ru: "Hasan Usta saz çalabiliyor.", en: "Hasan Usta can play the saz." },
        { ru: "Ben dans edemiyorum.", en: "I can't dance." },
      ],
    },
  ],
  tasks: [
    choice("tran2-t1", "How do you say “I can't play”?", [
      ["Çalamıyorum.", true],
      ["Çalmıyorum.", false],
      ["Çalabiliyorum.", false],
    ], { skill: "grammar" }),
    listen("tran2-t2", "Listen. What can the speaker do?", "Gitar çalabiliyorum ama şarkı söyleyemiyorum.", [
      ["Play the guitar, but not sing.", true],
      ["Sing, but not play.", false],
      ["Neither sing nor play.", false],
    ]),
    match("tran2-t3", "Match the pairs.", [
      ["şarkı", "song"],
      ["çalmak", "to play (an instrument)"],
      ["söylemek", "to sing, to say"],
      ["öğretmek", "to teach"],
    ], { skill: "words" }),
    spell("tran2-t4", "Spell the word for “song”.", "şarkı"),
    speak("tran2-t5", "Şarkı söyleyebiliyor musun?", "Evet, biraz söyleyebiliyorum.", "Yes, I can sing a little.", { help: "Answer aloud." }),
    choice("tran2-t6", "How do you say “I like reading”?", [
      ["Kitap okumayı seviyorum.", true],
      ["Kitap okumak seviyorum.", false],
      ["Kitap okuyorum seviyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "radyo",
    itemName: "Old radio",
    itemNameRu: "Radyo",
    ru: "Yaşasın! Eski bir radyo!",
    en: "Hooray! An old radio!",
    a11y: "A wooden valve radio with round knobs. Music pours out of it.",
    image: p("radyo"),
    steps: ["Hasan Usta brings an old radio.", "“Türkü dinle!” — “Listen to folk songs!”", "Murzik turns the knob.", "The sound of the saz fills the room."],
    bridge: "Hasan Usta says: “In the mornings I swim, and in the evenings I play. Do you do any sport?”",
  },
};

const antalya3: Lesson = {
  id: "tr-a1-antalya-3",
  level: "A1",
  cityId: "tr-antalya",
  number: 3,
  title: "Do you do any sport?",
  minutes: 7,
  goals: ["Ask about sport", "Say how often: every day, sometimes, never", "Say “twice a week”"],
  vocabNote: "Hiç with a negative verb means “never, not at all”: Hiç koşmuyorum. — I never run.",
  vocab: [
    v("tran3-1", "Spor yapıyor musun?", "Do you do any sport?", "Tom, in sports kit, does exercises on the beach.", "Listen to Spor yapıyor musun", p("l3-1")),
    v("tran3-2", "her gün", "every day", "Seven calendar pages, each with a swimmer drawn on it.", "Listen to her gün", p("l3-2")),
    v("tran3-3", "bazen", "sometimes", "Only two or three swimmers on the calendar, on different days.", "Listen to bazen", p("l3-3")),
    v("tran3-4", "hiç", "not at all; with a negative — never", "An empty calendar and Murzik asleep on a sunlounger.", "Listen to hiç", p("l3-4")),
    v("tran3-5", "Haftada iki kez yüzüyorum.", "I swim twice a week.", "Murzik holds up two fingers with the sea behind him.", "Listen to Haftada iki kez yüzüyorum", p("l3-5")),
    v("tran3-6", "futbol", "football", "Boys kick a ball about on the beach.", "Listen to futbol", p("l3-6")),
    v("tran3-7", "koşmak", "to run", "Tom runs along the waterfront under the palm trees.", "Listen to koşmak", p("l3-7")),
  ],
  dialogue: {
    title: "Morning on the beach",
    note: "English uses “play” for both games and instruments, but Turkish doesn't: oynamak is to play a game or with a ball, and çalmak is to play an instrument.",
    lines: [
      line("hasan", "Günaydın! Ben her sabah yüzüyorum.", "Good morning! I swim every morning."),
      line("murzik", "Her gün mü? Ben bazen yüzüyorum.", "Every day? I swim sometimes."),
      line("tom", "Ben haftada iki kez koşuyorum.", "I run twice a week."),
      line("hasan", "Ya futbol? Futbol oynuyor musunuz?", "And football? Do you play football?"),
      line("murzik", "Hayır, hiç oynamıyorum! Ama topla oynamayı seviyorum.", "No, I never play! But I do like playing with a ball."),
      line("hasan", "Al, bu top senin!", "Here, this ball is yours!"),
    ],
    gist: choice("tran3-d1", "How often does Hasan Usta swim?", [
      ["Every day.", true],
      ["Sometimes.", false],
      ["Never.", false],
    ]),
  },
  grammar: [
    {
      title: "How often?",
      paragraphs: [
        "Her gün — every day, sık sık — often, bazen — sometimes. “Never” is hiç with a negative verb: Hiç koşmuyorum. Turkish uses a double negative here, unlike English.",
        "“Times” is kez: haftada iki kez (twice a week), ayda bir kez (once a month). Haftada — “a week” (literally “in a week”), ayda — “a month”.",
      ],
      examples: [
        { ru: "Her gün yüzüyorum.", en: "I swim every day." },
        { ru: "Hiç futbol oynamıyorum.", en: "I never play football." },
      ],
    },
  ],
  tasks: [
    choice("tran3-t1", "How do you say “I never run”?", [
      ["Hiç koşmuyorum.", true],
      ["Hiç koşuyorum.", false],
      ["Her gün koşmuyorum.", false],
    ], { skill: "grammar" }),
    listen("tran3-t2", "Listen. How often?", "Haftada üç kez.", [
      ["Three times a week.", true],
      ["Every day.", false],
      ["Once a month.", false],
    ]),
    match("tran3-t3", "Match the pairs.", [
      ["her gün", "every day"],
      ["bazen", "sometimes"],
      ["futbol", "football"],
      ["koşmak", "to run"],
    ], { skill: "words" }),
    missing("tran3-t4", "Which letter is missing? (“sometimes”)", "baz", "n", "e", ["e", "a", "ı"]),
    speak("tran3-t5", "Spor yapıyor musun?", "Evet, haftada iki kez yüzüyorum.", "Yes, I swim twice a week.", { help: "Say aloud whether you do any sport." }),
    choice("tran3-t6", "How do you say “I can sing”?", [
      ["Şarkı söyleyebiliyorum.", true],
      ["Şarkı söyleyemiyorum.", false],
      ["Şarkı söylemeyi.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "top",
    itemName: "Ball",
    itemNameRu: "Top",
    ru: "Yaşasın! Bir top!",
    en: "Hooray! A ball!",
    a11y: "A striped beach ball lies in the shade of the orange tree.",
    image: p("top"),
    steps: ["Hasan Usta gives Murzik a striped ball.", "Murzik tosses it up.", "He catches it on his nose!", "The ball rests in the courtyard under the tree."],
    bridge: "This evening there's a concert in the ancient theatre at Aspendos!",
  },
};

const antalya4: Lesson = {
  id: "tr-a1-antalya-4",
  level: "A1",
  cityId: "tr-antalya",
  number: 4,
  title: "A concert at Aspendos",
  minutes: 7,
  goals: ["Ask if someone liked something", "Say “I really liked it” and “I didn't like it at all”", "Praise something: “wonderful!”"],
  vocabNote: "Aspendos is an ancient Roman theatre near Antalya. Concerts and ballets are still held there in summer.",
  vocab: [
    v("tran4-1", "antik tiyatro", "ancient theatre", "A huge ancient stone theatre with rows of steps in a semicircle.", "Listen to antik tiyatro", p("l4-1")),
    v("tran4-2", "konser", "concert", "An orchestra on the ancient stage, the audience on the stone steps.", "Listen to konser", p("l4-2")),
    v("tran4-3", "sahne", "stage", "A lit stage with columns in the evening light.", "Listen to sahne", p("l4-3")),
    v("tran4-4", "Beğendin mi?", "Did you like it?", "After the concert Tom asks Murzik with a smile.", "Listen to Beğendin mi", p("l4-4")),
    v("tran4-5", "Çok beğendim!", "I loved it!", "Murzik beams and claps his paws.", "Listen to Çok beğendim", p("l4-5")),
    v("tran4-6", "Hiç beğenmedim.", "I didn't like it at all.", "Tom grimaces and waves it away.", "Listen to Hiç beğenmedim", p("l4-6")),
    v("tran4-7", "Harika!", "Wonderful!", "Fireworks burst over the theatre.", "Listen to Harika", p("l4-7")),
  ],
  dialogue: {
    title: "Under the stars",
    note: "Dansları — “the dances” (as the object of the verb). Çünkü means “because”.",
    lines: [
      line("tom", "Vay! Bu antik tiyatro çok büyük!", "Wow! This ancient theatre is huge!"),
      line("murzik", "Ve çok eski. Sahne çok güzel!", "And very old. The stage is beautiful!"),
      line("tom", "Murzik, konseri beğendin mi?", "Murzik, did you like the concert?"),
      line("murzik", "Çok beğendim! Harika!", "I loved it! Wonderful!"),
      line("tom", "Ben de. Ama dansları hiç beğenmedim.", "Me too. But I didn't like the dancing at all."),
      line("murzik", "Neden? Danslar çok güzeldi!", "Why? The dances were beautiful!"),
      line("tom", "Çünkü ben dans etmeyi sevmiyorum!", "Because I don't like dancing!"),
    ],
    gist: choice("tran4-d1", "Did Murzik like the concert?", [
      ["He loved it.", true],
      ["He didn't like it at all.", false],
      ["He didn't go to the concert.", false],
    ]),
  },
  grammar: [
    {
      title: "Liked it: beğendim",
      paragraphs: [
        "Beğenmek means “to like, to approve of” something you've seen or tried. I liked it — beğendim; did you like it? — beğendin mi?",
        "It works just like English “like”: the thing you liked is the object: Konseri beğendim. — I liked the concert. Didn't like — beğenmedim.",
      ],
      examples: [
        { ru: "Konseri çok beğendim.", en: "I really liked the concert." },
        { ru: "Filmi beğendin mi? — Hiç beğenmedim.", en: "Did you like the film? — I didn't like it at all." },
      ],
    },
  ],
  tasks: [
    choice("tran4-t1", "How do you ask “Did you like it?”", [
      ["Beğendin mi?", true],
      ["Beğendim mi?", false],
      ["Beğeniyor mu musun?", false],
    ], { skill: "grammar" }),
    listen("tran4-t2", "Listen. Did they like it?", "Hiç beğenmedim.", [
      ["Not at all.", true],
      ["Very much.", false],
      ["A little.", false],
    ]),
    match("tran4-t3", "Match the pairs.", [
      ["sahne", "stage"],
      ["konser", "concert"],
      ["Harika!", "Wonderful!"],
      ["antik", "ancient"],
    ], { skill: "words" }),
    missing("tran4-t4", "Which letter is missing? (“I liked it”)", "Be", "endim", "ğ", ["ğ", "g", "y"]),
    speak("tran4-t5", "Konseri beğendin mi?", "Çok beğendim! Harika!", "I loved it! Wonderful!", { help: "Answer aloud." }),
    choice("tran4-t6", "What does bazen mean?", [
      ["sometimes", true],
      ["every day", false],
      ["never", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "notalar",
    itemName: "Old sheet music",
    itemNameRu: "Notalar",
    ru: "Yaşasın! Eski notalar!",
    en: "Hooray! Old sheet music!",
    a11y: "Yellowed sheets of music tied with a ribbon. A tiny ginger cat is drawn in the corner of the top sheet.",
    image: p("notalar"),
    steps: ["After the concert Hasan Usta comes over to them.", "He holds out some yellowed sheet music.", "There's a tiny ginger cat drawn in the corner!", "Murzik freezes: it's Grandma's drawing."],
    bridge: "“This song has a name,” Hasan Usta says quietly. “It's called Asya.”",
  },
};

const antalya5: Lesson = {
  id: "tr-a1-antalya-5",
  level: "A1",
  cityId: "tr-antalya",
  number: 5,
  title: "The old musician",
  minutes: 8,
  goals: ["Understand a story about the past", "Say what someone used to do: -ardı", "Ask “and what happened next?”"],
  vocabNote: "Anlatır mısınız? — “Will you tell us?”. Sonra ne oldu? — “And what happened next?”",
  vocab: [
    v("tran5-1", "Onu tanıyordum.", "I knew her.", "Hasan Usta gazes thoughtfully at the old postcard in Murzik's paws.", "Listen to Onu tanıyordum", p("l5-1")),
    v("tran5-2", "çok eskiden", "a very long time ago", "An old faded photo of the same courtyard with the orange tree.", "Listen to çok eskiden", p("l5-2")),
    v("tran5-3", "Burada resim yapardı.", "She used to paint here.", "An old easel stands under the orange tree.", "Listen to Burada resim yapardı", p("l5-3")),
    v("tran5-4", "Ben saz çalardım.", "And I used to play the saz.", "A young musician plays the saz in the same courtyard — an old picture in a frame.", "Listen to Ben saz çalardım", p("l5-4")),
    v("tran5-5", "Bu şarkının adı «Asya».", "This song is called “Asya”.", "Hasan Usta points at the music; a single name is written on the first sheet.", "Listen to Bu şarkının adı Asya", p("l5-5")),
    v("tran5-6", "Bir mektup bekliyordu.", "She was waiting for a letter.", "An empty letterbox on an old door.", "Listen to Bir mektup bekliyordu", p("l5-6")),
    v("tran5-7", "Gelmedi.", "It never came.", "Hasan Usta shakes his head sadly.", "Listen to Gelmedi", p("l5-7")),
  ],
  dialogue: {
    title: "The song “Asya”",
    note: "Avlu means “courtyard”. Yazdım — “I wrote”. Galiba — “I think, probably”.",
    lines: [
      line("hasan", "Asya'yı tanıyordum. Çok eskiden…", "I knew Asya. A very long time ago…"),
      line("murzik", "Gerçekten mi? Anlatır mısınız?", "Really? Will you tell us?"),
      line("hasan", "Bu avluda resim yapardı. Ben de saz çalardım.", "She used to paint in this courtyard. And I used to play the saz."),
      line("hasan", "Bu şarkıyı onun için yazdım. Şarkının adı «Asya».", "I wrote this song for her. The song is called “Asya”."),
      line("tom", "Çok güzel bir şarkı.", "It's a beautiful song."),
      line("hasan", "Hep Moskova'dan bir mektup bekliyordu. Ama mektup gelmedi.", "She was always waiting for a letter from Moscow. But the letter never came."),
      line("murzik", "Sonra ne oldu?", "And what happened next?"),
      line("hasan", "Bir gün gitti. Galiba Konya'ya…", "One day she left. To Konya, I think…"),
    ],
    gist: choice("tran5-d1", "What is Hasan Usta's song called?", [
      ["“Asya”.", true],
      ["“Antalya”.", false],
      ["“The Sea”.", false],
    ]),
  },
  grammar: [
    {
      title: "Used to: -ardı, -erdi",
      paragraphs: [
        "For things that happened again and again in the past — English “used to” — Turkish uses -ardı / -erdi (with some verbs -ırdı / -irdi / -urdu / -ürdü: gelirdi, okurdu): resim yap-ardı — she used to paint, saz çal-ardım — I used to play the saz.",
        "Something that happened once uses the familiar -dı / -di: Bir gün gitti. — One day she left.",
      ],
      examples: [
        { ru: "Asya her gün resim yapardı.", en: "Asya used to paint every day." },
        { ru: "Bir gün gitti.", en: "One day she left." },
      ],
    },
  ],
  tasks: [
    listen("tran5-t1", "Listen. What did Asya use to do?", "Burada resim yapardı.", [
      ["She used to paint here.", true],
      ["She used to play the saz.", false],
      ["She used to sing songs.", false],
    ]),
    choice("tran5-t2", "How do you say “I used to play the saz”?", [
      ["Saz çalardım.", true],
      ["Saz çalacağım.", false],
      ["Saz çalıyorum.", false],
    ], { skill: "grammar" }),
    match("tran5-t3", "Match the pairs.", [
      ["eskiden", "in the past, long ago"],
      ["mektup", "letter"],
      ["beklemek", "to wait"],
      ["tanımak", "to know (a person)"],
    ], { skill: "words" }),
    missing("tran5-t4", "Which letter is missing? (“letter”)", "mekt", "p", "u", ["u", "ü", "o"]),
    speak("tran5-t5", "Çocukken ne yapardın?", "Her gün top oynardım.", "I used to play ball every day.", { help: "Say aloud what you used to do as a child." }),
    choice("tran5-t6", "How do you say “I really liked it”?", [
      ["Çok beğendim.", true],
      ["Çok beğeneceğim.", false],
      ["Çok beğenmedim.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "portakal",
    itemName: "Basket of oranges",
    itemNameRu: "Portakal sepeti",
    ru: "Yaşasın! Bir sepet portakal!",
    en: "Hooray! A basket of oranges!",
    a11y: "A wicker basket full of oranges, leaves still on, stands on the windowsill.",
    image: p("portakal"),
    steps: ["Hasan Usta picks oranges from the tree.", "“Asya bu ağacı çok severdi.” — “Asya loved this tree.”", "He puts them in a basket.", "It smells of sunshine!"],
    bridge: "Hasan Usta invites them round in the evening for tea and backgammon.",
  },
};

const antalya6: Lesson = {
  id: "tr-a1-antalya-6",
  level: "A1",
  cityId: "tr-antalya",
  number: 6,
  title: "A quiet evening",
  minutes: 7,
  goals: ["Say who's doing what right now", "Use -iyor with every person", "Play backgammon the Turkish way"],
  vocabNote: "Tavla is Turkish backgammon. A six on the dice has a Persian name, şeş, but a five is Turkish, beş. Şeş beş! — “six-five!”",
  vocab: [
    v("tran6-1", "Ne yapıyorsunuz?", "What are you doing?", "Tom looks into the lantern-lit courtyard.", "Listen to Ne yapıyorsunuz", p("l6-1")),
    v("tran6-2", "Tavla oynuyoruz.", "We're playing backgammon.", "Hasan Usta and Murzik lean over a backgammon board.", "Listen to Tavla oynuyoruz", p("l6-2")),
    v("tran6-3", "Çay içiyorum.", "I'm drinking tea.", "Murzik holds a tulip glass in both paws.", "Listen to Çay içiyorum", p("l6-3")),
    v("tran6-4", "Kitap okuyor.", "He's reading a book.", "Tom reads a book under a lantern.", "Listen to Kitap okuyor", p("l6-4")),
    v("tran6-5", "Sıra sende!", "Your turn!", "Hasan Usta hands Murzik the dice.", "Listen to Sıra sende", p("l6-5")),
    v("tran6-6", "Kim kazandı?", "Who won?", "Tom looks curiously at the board.", "Listen to Kim kazandı", p("l6-6")),
    v("tran6-7", "sakin bir akşam", "a quiet evening", "The courtyard at night: a lantern, the orange tree, the stars.", "Listen to sakin bir akşam", p("l6-7")),
  ],
  dialogue: {
    title: "Backgammon under the lantern",
    note: "Turks say Bravo! too.",
    lines: [
      line("tom", "Ne yapıyorsunuz?", "What are you doing?"),
      line("hasan", "Tavla oynuyoruz. Gel, otur!", "We're playing backgammon. Come and sit down!"),
      line("murzik", "Ben de geliyorum!", "I'm coming too!"),
      line("hasan", "Murzik, sıra sende!", "Murzik, your turn!"),
      line("murzik", "Tamam… Şeş beş!", "OK… Six-five!"),
      line("tom", "Bravo! Kim kazandı?", "Well done! Who won?"),
      line("hasan", "Murzik kazandı! Ne güzel, sakin bir akşam…", "Murzik won! What a lovely, quiet evening…"),
    ],
    gist: choice("tran6-d1", "Who won at backgammon?", [
      ["Murzik.", true],
      ["Hasan Usta.", false],
      ["Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "-iyor: every person",
      paragraphs: [
        "I — oynuyorum, you — oynuyorsun, he / she — oynuyor, we — oynuyoruz, you (polite or plural) — oynuyorsunuz, they — oynuyorlar.",
        "The -yor part never changes — only the vowel before it does: iç-iyor, oku-yor, oyn-uyor, gül-üyor.",
      ],
      examples: [
        { ru: "Biz tavla oynuyoruz, onlar çay içiyorlar.", en: "We're playing backgammon, and they're drinking tea." },
        { ru: "Sen ne yapıyorsun?", en: "And what are you doing?" },
      ],
    },
  ],
  tasks: [
    choice("tran6-t1", "How do you say “They're playing”?", [
      ["Oynuyorlar.", true],
      ["Oynuyoruz.", false],
      ["Oynuyorsun.", false],
    ], { skill: "grammar" }),
    listen("tran6-t2", "Listen. What is Tom doing?", "Tom kitap okuyor.", [
      ["Reading a book.", true],
      ["Drinking tea.", false],
      ["Playing backgammon.", false],
    ]),
    match("tran6-t3", "Match the pairs.", [
      ["tavla", "backgammon"],
      ["Sıra sende!", "Your turn!"],
      ["kazanmak", "to win"],
      ["sakin", "quiet, calm"],
    ], { skill: "words" }),
    spell("tran6-t4", "Spell the word for “backgammon”.", "tavla"),
    speak("tran6-t5", "Şu an ne yapıyorsun?", "Türkçe öğreniyorum!", "I'm learning Turkish!", { help: "Say aloud what you're doing right now." }),
    listen("tran6-t6", "Remember Hasan Usta's story. What was Asya waiting for?", "Bir mektup bekliyordu.", [
      ["A letter.", true],
      ["A bus.", false],
      ["A concert.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tavla",
    itemName: "Backgammon set",
    itemNameRu: "Tavla",
    ru: "Yaşasın! Bir tavla!",
    en: "Hooray! A backgammon set!",
    a11y: "A wooden backgammon board with mother-of-pearl inlay, with two dice beside it.",
    image: p("tavla"),
    steps: ["Hasan Usta folds up the board.", "“Al, bu senin. Sen kazandın!” — “Here, it's yours. You won!”", "Murzik carefully carries the backgammon set home.", "Now he can play with Tom!"],
    bridge: "Tomorrow evening Hasan Usta is playing a concert in an old courtyard in Kaleiçi. And one of the songs is special.",
  },
};

const antalya7: Lesson = {
  id: "tr-a1-antalya-7",
  level: "A1",
  cityId: "tr-antalya",
  number: 7,
  title: "Hasan Usta's concert",
  minutes: 8,
  goals: ["Cheer a musician on: “bravo!”, “one more song!”", "Say “I'll never forget”", "Review all the words from Antalya"],
  vocabNote: "Alkışlamak means “to applaud”. Alkışlayalım! — “Let's give him a hand!”",
  vocab: [
    v("tran7-1", "Konser nasıldı?", "How was the concert?", "After the concert Tom puts away his camera and asks Murzik.", "Listen to Konser nasıldı", p("l7-1")),
    v("tran7-2", "Çok duygusaldı.", "It was very moving.", "Murzik wipes away a little tear as he listens to the music.", "Listen to Çok duygusaldı", p("l7-2")),
    v("tran7-3", "Alkışlayalım!", "Let's give him a hand!", "The audience in the courtyard applauds the musician.", "Listen to Alkışlayalım", p("l7-3")),
    v("tran7-4", "Bravo!", "Bravo! Well done!", "Murzik jumps up and claps with his paws held high.", "Listen to Bravo", p("l7-4")),
    v("tran7-5", "Bir şarkı daha!", "One more song!", "The audience hold up one finger each: “One more!”", "Listen to Bir şarkı daha", p("l7-5")),
    v("tran7-6", "Bu senin için.", "This is for you.", "Hasan Usta holds out a little saz to Murzik.", "Listen to Bu senin için", p("l7-6")),
    v("tran7-7", "Hiç unutmayacağım.", "I'll never forget it.", "Murzik holds the saz to his chest and looks at Hasan Usta.", "Listen to Hiç unutmayacağım", p("l7-7")),
  ],
  dialogue: {
    title: "A song for Asya",
    note: "Sen de çal — “you play it too”. Unutmayacağım — “I won't forget”: -ma- (not) + -yacak (will).",
    lines: [
      line("hasan", "Bu şarkı Asya için.", "This song is for Asya."),
      line("tom", "Alkışlayalım! Bravo!", "Let's give him a hand! Bravo!"),
      line("murzik", "Bir şarkı daha!", "One more song!"),
      line("hasan", "Murzik, bu saz senin için. Asya'nın şarkısını sen de çal.", "Murzik, this saz is for you. You play Asya's song too."),
      line("murzik", "Teşekkür ederim, Hasan Usta. Hiç unutmayacağım.", "Thank you, Hasan Usta. I'll never forget it."),
      line("tom", "Konser nasıldı, Murzik?", "How was the concert, Murzik?"),
      line("murzik", "Çok duygusaldı…", "It was very moving…"),
    ],
    gist: choice("tran7-d1", "What does Hasan Usta give Murzik?", [
      ["A little saz.", true],
      ["Sheet music.", false],
      ["Oranges.", false],
    ]),
  },
  grammar: [
    {
      title: "Won't: -meyecek, -mayacak",
      paragraphs: [
        "The negative future — English “won't” — is -mayacak / -meyecek: unut-mayacağ-ım — I won't forget, gel-meyeceğ-im — I won't come.",
        "With hiç it becomes “never”: Hiç unutmayacağım. — I'll never forget.",
      ],
      examples: [
        { ru: "Seni hiç unutmayacağım.", en: "I'll never forget you." },
        { ru: "Yarın gelmeyeceğim.", en: "I won't come tomorrow." },
      ],
    },
  ],
  tasks: [
    listen("tran7-t1", "Audio exam. What's happening today?", "Bu akşam saat dokuzda avluda konser var. Herkes gelsin!", [
      ["A concert in the courtyard at nine — everyone's welcome.", true],
      ["A concert in the theatre at eight.", false],
      ["Dinner at nine.", false],
    ]),
    choice("tran7-t2", "How do you say “I'll never forget”?", [
      ["Hiç unutmayacağım.", true],
      ["Hiç unutacağım.", false],
      ["Hiç unutmadım.", false],
    ], { skill: "grammar" }),
    match("tran7-t3", "Match the pairs.", [
      ["Bravo!", "Well done!"],
      ["Bir şarkı daha!", "One more song!"],
      ["Alkışlayalım!", "Let's give him a hand!"],
      ["unutmak", "to forget"],
    ], { skill: "words" }),
    missing("tran7-t4", "Which letter is missing? (“Let's give him a hand!”)", "Alkı", "layalım!", "ş", ["ş", "s", "ç"]),
    speak("tran7-t5", "Konser nasıldı?", "Harikaydı! Çok beğendim.", "It was wonderful! I loved it.", { help: "Say aloud how you liked the concert." }),
    script("tran7-t6", "Remember all of Antalya. Finish the conversations.", [
      { speaker: "Tom", text: "Ne yapmayı seviyorsun?" },
      { speaker: "You", answer: "Resim yapmayı seviyorum.", options: ["Resim yapmayı seviyorum.", "Resim yapıyorum seviyorum.", "Çalamıyorum."] },
      { speaker: "Hasan Usta", text: "Saz çalabiliyor musun?" },
      { speaker: "You", answer: "Hayır, çalamıyorum.", options: ["Hayır, çalamıyorum.", "Hayır, çalmayı.", "Her gün."] },
      { speaker: "Tom", text: "Konseri beğendin mi?" },
      { speaker: "You", answer: "Çok beğendim!", options: ["Çok beğendim!", "Çok beğeneceğim!", "Sıra sende!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "baglama",
    itemName: "Little saz",
    itemNameRu: "Bağlama",
    ru: "Yaşasın! Küçük bir bağlama!",
    en: "Hooray! A little bağlama!",
    a11y: "A small saz with a long neck and a body of pale wood. A tiny cat is carved on the body.",
    image: p("baglama"),
    steps: ["Hasan Usta holds out a little saz to Murzik.", "“Bunu Asya için yapmıştım.” — “I made this for Asya, long ago.”", "A tiny cat is carved on the body.", "Murzik holds the saz to his chest."],
    bridge: "Time to go. Hasan Usta said Asya left for Konya.",
  },
};

const story: CityStory = {
  home: {
    name: "A stone house in Kaleiçi",
    nameRu: "Kaleiçi'nde taş ev",
    image: p("home"),
    a11y: "An empty room with stone walls and a wooden ceiling. The window looks onto a courtyard with an orange tree. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "baglama",
  welcomeRu: "Merhaba, Antalya!",
  welcomeEn: "Hello, Antalya!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom by the ancient Hadrian's Gate in Antalya. Behind them: the narrow streets of Kaleiçi and orange trees.",
  departureImage: p("departure"),
  departureA11y: "Murzik and Tom with their suitcases and the little saz at the bus station. Snow-capped mountains in the distance.",
  finale: [
    {
      image: p("window"),
      a11y: "Evening. Murzik quietly plays the little saz by the window. In the courtyard, in the shade of the orange tree, a white cat in a hat stands listening.",
      lines: [
        { en: "On the last evening Murzik tries to play the song “Asya”. He can only manage a tiny bit so far." },
        { en: "Outside the window, in the shade of the orange tree, someone is listening. A white cat in a hat… But when Murzik looks out, the courtyard is empty." },
        { ru: "Yine o kedi…", en: "That cat again…" },
      ],
    },
    {
      image: p("baglama"),
      a11y: "Murzik walks round his stone house, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his stone house in Kaleiçi. Tom takes a photo of it for his travel diary." },
        { en: "Murzik takes Hasan Usta's little saz with him." },
        { en: "The music for the song “Asya” goes into the suitcase pocket, next to the postcards." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Antalya tamamlandı!", en: "Antalya complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Yolun yarısı!", en: "Halfway there!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik and Tom say goodbye to Hasan Usta by the bus.",
      lines: [
        { ru: "Hoşça kalın, Hasan Usta!", en: "Goodbye, Hasan Usta!" },
        { ru: "Sıradaki durak: Konya!", en: "Next stop: Konya!" },
      ],
    },
    {
      image: p("road"),
      a11y: "The bus climbs through snowy mountains to a high plateau.",
      lines: [
        { en: "Murzik and Tom stayed by the warm sea until winter came. Up in the mountains, snow is already lying." },
        { ru: "Antalya → Konya", en: "Antalya → Konya" },
      ],
    },
    {
      image: pic("tr/konya/arrival"),
      a11y: "Murzik and Tom in Konya by a turquoise dome. It's cold, and light snow is falling.",
      lines: [
        { ru: "Merhaba, Konya!", en: "Hello, Konya!" },
        { ru: "Brr… Burası çok soğuk!", en: "Brrr… It's so cold here!" },
      ],
    },
  ],
};

export const trAntalyaEn = {
  id: "tr-antalya",
  name: "Antalya",
  nameTr: "Antalya",
  lessons: [antalya1, antalya2, antalya3, antalya4, antalya5, antalya6, antalya7],
  story,
};
