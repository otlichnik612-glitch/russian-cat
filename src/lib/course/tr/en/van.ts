import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Van · “My town” · what there is in town, where it is, what it's like, a letter from Istanbul, the reply, open or closed, Murzik the tour guide. English version. */

const p = (name: string) => pic(`tr/van/${name}`);

const van1: Lesson = {
  id: "tr-a1-van-1",
  level: "A1",
  cityId: "tr-van",
  number: 1,
  title: "What is there in town?",
  minutes: 7,
  goals: ["Say what there is in town: … var", "Ask: … var mı?", "Say “there isn't”: yok"],
  vocabNote: "Var — “there is”, yok — “there isn't”. The place takes the ending -da / -de: Şehirde bir kale var. — There's a castle in the town.",
  vocab: [
    v("trva1-1", "Şehirde bir kale var.", "There's a castle in the town.", "An ancient castle on a high rock by the lake.", "Listen to Şehirde bir kale var", p("l1-1")),
    v("trva1-2", "kahvaltı evi", "breakfast house", "A cosy café with long tables covered in little plates.", "Listen to kahvaltı evi", p("l1-2")),
    v("trva1-3", "Burada müze var mı?", "Is there a museum here?", "Tom holds a town map and looks around.", "Listen to Burada müze var mı", p("l1-3")),
    v("trva1-4", "Evet, var.", "Yes, there is.", "Gülsüm Teyze nods and points.", "Listen to Evet, var", p("l1-4")),
    v("trva1-5", "Hayır, yok.", "No, there isn't.", "Gülsüm Teyze shakes her head.", "Listen to Hayır, yok", p("l1-5")),
    v("trva1-6", "çarşı", "bazaar, market streets", "Covered market streets lined with little shops.", "Listen to çarşı", p("l1-6")),
    v("trva1-7", "iskele", "pier, jetty", "A wooden jetty with a boat moored by it.", "Listen to iskele", p("l1-7")),
  ],
  dialogue: {
    title: "Gülsüm Teyze",
    note: "Gülsüm Teyze runs a breakfast house by the lake. Ada — “island”. Kilise — “church”. Tekne — “boat”. Dünyanın en güzel kahvaltısı — “the best breakfast in the world”.",
    lines: [
      line("gulsum", "Hoş geldiniz! Ben Gülsüm. Burası benim kahvaltı evim.", "Welcome! I'm Gülsüm. This is my breakfast house."),
      line("tom", "Merhaba! Van'da ne var?", "Hello! What is there in Van?"),
      line("gulsum", "Şehirde eski bir kale var. Gölde de bir ada var, adada eski bir kilise var.", "There's an old castle in the town. And there's an island in the lake, with an old church on it."),
      line("murzik", "Adaya tekne var mı?", "Is there a boat to the island?"),
      line("gulsum", "Evet, var. İskeleden her saat bir tekne var.", "Yes, there is. There's a boat from the jetty every hour."),
      line("tom", "Burada metro var mı?", "Is there a metro here?"),
      line("gulsum", "Hayır, yok! Ama dünyanın en güzel kahvaltısı var!", "No, there isn't! But there's the best breakfast in the world!"),
    ],
    gist: choice("trva1-d1", "What doesn't Van have?", [
      ["A metro.", true],
      ["A castle.", false],
      ["A boat to the island.", false],
    ]),
  },
  grammar: [
    {
      title: "There is / there isn't: var, yok",
      paragraphs: [
        "Var means “there is”: Burada bir müze var. — There's a museum here. Yok means “there isn't”: Burada metro yok. — There's no metro here.",
        "The question is var mı? / yok mu?: Yakında eczane var mı? — Is there a chemist's nearby?",
      ],
      examples: [
        { ru: "Otelde havuz var mı?", en: "Is there a pool at the hotel?" },
        { ru: "Köyde market yok.", en: "There's no shop in the village." },
      ],
    },
  ],
  tasks: [
    choice("trva1-t1", "How do you ask “Is there a chemist's here?”", [
      ["Burada eczane var mı?", true],
      ["Burada eczane var.", false],
      ["Burada eczane nerede var?", false],
    ], { skill: "grammar" }),
    listen("trva1-t2", "Listen. What is there in the village?", "Köyde bir okul var, ama hastane yok.", [
      ["There's a school, but no hospital.", true],
      ["There's a hospital, but no school.", false],
      ["There's neither a school nor a hospital.", false],
    ]),
    match("trva1-t3", "Match the pairs.", [
      ["kale", "castle"],
      ["ada", "island"],
      ["çarşı", "bazaar"],
      ["iskele", "jetty"],
    ], { skill: "words" }),
    missing("trva1-t4", "Which letter is missing? (“bazaar”)", "", "arşı", "ç", ["ç", "c", "ş"]),
    speak("trva1-t5", "Senin şehrinde ne var?", "Şehrimde bir park ve bir müze var.", "There's a park and a museum in my town.", { help: "Say aloud what there is in your town." }),
    choice("trva1-t6", "At a hotel, how do you say “I'd like to check out”?", [
      ["Çıkış yapmak istiyorum.", true],
      ["Çıkış yapıyorum istiyorum.", false],
      ["Çıkış yok.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "puf",
    itemName: "Pouffe",
    itemNameRu: "Puf",
    ru: "Yaşasın! Bir puf!",
    en: "Hooray! A pouffe!",
    a11y: "A soft round pouffe covered in carpet fabric with a red and blue pattern.",
    image: p("puf"),
    steps: ["Gülsüm Teyze rolls a round pouffe across the floor.", "“Odana, canım!” — “For your room, dear!”", "Murzik flops onto it.", "From the pouffe he can see the lake."],
    bridge: "Murzik wants to find the castle by himself. But where is it?",
  },
};

const van2: Lesson = {
  id: "tr-a1-van-2",
  level: "A1",
  cityId: "tr-van",
  number: 2,
  title: "Where is it?",
  minutes: 7,
  goals: ["Say “next to”, “opposite”, “between”", "Ask where a place is", "Understand a passer-by's answer"],
  vocabNote: "Yanında — “next to”, karşısında — “opposite”, arasında — “between”. They come after the place, which takes a “whose” ending: parkın yanında — next to the park (literally “the park's side-at”).",
  vocab: [
    v("trva2-1", "Kale nerede?", "Where's the castle?", "Murzik stands at a crossroads with a map.", "Listen to Kale nerede", p("l2-1")),
    v("trva2-2", "gölün yanında", "next to the lake", "The castle, with the smooth blue lake beside it.", "Listen to gölün yanında", p("l2-2")),
    v("trva2-3", "parkın karşısında", "opposite the park", "A café across the road from a park.", "Listen to parkın karşısında", p("l2-3")),
    v("trva2-4", "banka ile postane arasında", "between the bank and the post office", "A little shop between a bank and a post office.", "Listen to banka ile postane arasında", p("l2-4")),
    v("trva2-5", "Uzak mı?", "Is it far?", "Murzik looks down a long road.", "Listen to Uzak mı", p("l2-5")),
    v("trva2-6", "Yürüyerek on dakika.", "Ten minutes on foot.", "Little paw prints along a path, and a clock.", "Listen to Yürüyerek on dakika", p("l2-6")),
    v("trva2-7", "Sağ olun!", "Thank you!", "Murzik bows to the passer-by.", "Listen to Sağ olun", p("l2-7")),
  ],
  dialogue: {
    title: "At the crossroads",
    note: "Sağ olun is a warm “thank you” (the polite form of Sağ ol). Affedersiniz — “excuse me”.",
    lines: [
      line("murzik", "Affedersiniz, kale nerede?", "Excuse me, where's the castle?"),
      line("passerby", "Kale gölün yanında.", "The castle's next to the lake."),
      line("murzik", "Uzak mı?", "Is it far?"),
      line("passerby", "Hayır, yürüyerek on dakika. Postaneyi biliyor musun?", "No, ten minutes on foot. Do you know the post office?"),
      line("murzik", "Evet, parkın karşısında.", "Yes, it's opposite the park."),
      line("passerby", "Tamam. Kale yolu postane ile banka arasında.", "Good. The road to the castle is between the post office and the bank."),
      line("murzik", "Sağ olun!", "Thank you!"),
    ],
    gist: choice("trva2-d1", "Where does the road to the castle start?", [
      ["Between the post office and the bank.", true],
      ["Opposite the park.", false],
      ["Next to the hotel.", false],
    ]),
  },
  grammar: [
    {
      title: "Next to, opposite, between",
      paragraphs: [
        "The pattern is: place + “whose” ending + yanında / karşısında / arkasında / önünde. Parkın yanında (next to the park), otelin karşısında (opposite the hotel), evin arkasında (behind the house), caminin önünde (in front of the mosque).",
        "“Between” is A ile B arasında: banka ile postane arasında (between the bank and the post office).",
      ],
      examples: [
        { ru: "Eczane otelin karşısında.", en: "The chemist's is opposite the hotel." },
        { ru: "Kedi evin arkasında.", en: "The cat is behind the house." },
      ],
    },
  ],
  tasks: [
    choice("trva2-t1", "How do you say “next to the hotel”?", [
      ["otelin yanında", true],
      ["otel yanında", false],
      ["otelde yanında", false],
    ], { skill: "grammar" }),
    listen("trva2-t2", "Listen. Where's the chemist's?", "Eczane parkın karşısında.", [
      ["Opposite the park.", true],
      ["Next to the park.", false],
      ["Behind the park.", false],
    ]),
    match("trva2-t3", "Match the pairs.", [
      ["yanında", "next to"],
      ["karşısında", "opposite"],
      ["arasında", "between"],
      ["arkasında", "behind"],
    ], { skill: "words" }),
    missing("trva2-t4", "Which letter is missing? (“opposite”)", "kar", "ısında", "ş", ["ş", "s", "ç"]),
    speak("trva2-t5", "Senin evin nerede?", "Evim parkın yanında.", "My house is next to the park.", { help: "Say aloud what your home is next to." }),
    listen("trva2-t6", "Remember the last lesson. Is there a metro?", "Burada metro yok.", [
      ["No, there's no metro.", true],
      ["Yes, there's a metro.", false],
      ["The metro is far away.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yastik",
    itemName: "Embroidered cushion",
    itemNameRu: "Yastık",
    ru: "Yaşasın! İşlemeli bir yastık!",
    en: "Hooray! An embroidered cushion!",
    a11y: "A small cushion embroidered with a white cat that has one blue eye and one green eye.",
    image: p("yastik"),
    steps: ["On the way to the castle there's a little embroidery shop.", "The shopkeeper gives Murzik a small cushion.", "It's embroidered with a white cat with odd eyes.", "“Bu bir Van kedisi!” — “It's a Van cat!”"],
    bridge: "When he gets back, Murzik sees a white cat at the jetty. Is she… swimming?!",
  },
};

const van3: Lesson = {
  id: "tr-a1-van-3",
  level: "A1",
  cityId: "tr-van",
  number: 3,
  title: "What's it like?",
  minutes: 7,
  goals: ["Describe a town and an animal", "Put the adjective before the noun", "Say “very”, “a bit”, “not at all”"],
  vocabNote: "An adjective goes before the noun and never changes: büyük göl — a big lake, büyük göller — big lakes.",
  vocab: [
    v("trva3-1", "Van kedisi", "Van cat", "A snow-white fluffy cat sits on the jetty.", "Listen to Van kedisi", p("l3-1")),
    v("trva3-2", "Bir gözü mavi, bir gözü yeşil.", "One eye is blue, the other is green.", "Close-up: the cat's face, with one blue eye and one green eye.", "Listen to Bir gözü mavi, bir gözü yeşil", p("l3-2")),
    v("trva3-3", "Yüzmeyi seviyor.", "She likes swimming.", "The white cat swims near the jetty, neck stretched out.", "Listen to Yüzmeyi seviyor", p("l3-3")),
    v("trva3-4", "sessiz", "quiet", "A quiet street; an old man dozes on a bench.", "Listen to sessiz", p("l3-4")),
    v("trva3-5", "kalabalık", "crowded", "A crowded bazaar full of shoppers.", "Listen to kalabalık", p("l3-5")),
    v("trva3-6", "biraz soğuk", "a bit cold", "Murzik shivers in the wind by the lake.", "Listen to biraz soğuk", p("l3-6")),
    v("trva3-7", "hiç sıcak değil", "not warm at all", "Icy water by the shore; Murzik dips a paw in.", "Listen to hiç sıcak değil", p("l3-7")),
  ],
  dialogue: {
    title: "Boncuk",
    note: "Boncuk is an ordinary Van cat — she doesn't talk. Boncuk means “bead”. Islak means “wet”.",
    lines: [
      line("murzik", "Bak, Tom! Beyaz bir kedi yüzüyor!", "Look, Tom! A white cat is swimming!"),
      line("gulsum", "Bu Boncuk, bizim kedimiz. O bir Van kedisi.", "That's Boncuk, our cat. She's a Van cat."),
      line("tom", "Bir gözü mavi, bir gözü yeşil! Çok güzel!", "One eye is blue and the other's green! She's beautiful!"),
      line("gulsum", "Evet. Van kedileri yüzmeyi seviyor.", "Yes. Van cats love swimming."),
      line("murzik", "Ben yüzmeyi hiç sevmiyorum! Su biraz soğuk…", "I don't like swimming at all! The water's a bit cold…"),
      line("gulsum", "Boncuk için soğuk değil! Bak, şimdi ıslak ve mutlu.", "It's not cold for Boncuk! Look, now she's wet and happy."),
    ],
    gist: choice("trva3-d1", "What does Boncuk love?", [
      ["Swimming.", true],
      ["Sleeping on suitcases.", false],
      ["Drinking tea.", false],
    ]),
  },
  grammar: [
    {
      title: "Adjectives and “very”",
      paragraphs: [
        "The adjective comes before the noun: eski bir kale (an old castle), sessiz bir sokak (a quiet street). Notice that bir (a) comes between the adjective and the noun — the opposite of English.",
        "Çok — very, biraz — a bit, hiç … değil — not at all: çok kalabalık (very crowded), biraz soğuk (a bit cold), hiç sıcak değil (not warm at all).",
      ],
      examples: [
        { ru: "Van sessiz bir şehir.", en: "Van is a quiet town." },
        { ru: "Göl çok büyük ve çok mavi.", en: "The lake is very big and very blue." },
      ],
    },
  ],
  tasks: [
    choice("trva3-t1", "How do you say “a quiet town”?", [
      ["sessiz bir şehir", true],
      ["bir şehir sessiz", false],
      ["şehir bir sessiz", false],
    ], { skill: "grammar" }),
    listen("trva3-t2", "Listen. What's the weather like?", "Bugün hava biraz soğuk.", [
      ["A bit cold.", true],
      ["Very hot.", false],
      ["Not cold at all.", false],
    ]),
    match("trva3-t3", "Match the pairs.", [
      ["sessiz", "quiet"],
      ["kalabalık", "crowded"],
      ["ıslak", "wet"],
      ["biraz", "a bit"],
    ], { skill: "words" }),
    spell("trva3-t4", "Spell the word for “quiet”.", "sessiz"),
    speak("trva3-t5", "Şehrin nasıl?", "Şehrim büyük ve biraz kalabalık.", "My town is big and a bit crowded.", { help: "Describe your town aloud." }),
    choice("trva3-t6", "How do you say “opposite the park”?", [
      ["parkın karşısında", true],
      ["parkta karşı", false],
      ["park karşıdan", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "oyuncak-kedi",
    itemName: "Toy Van cat",
    itemNameRu: "Oyuncak kedi",
    ru: "Yaşasın! Bir oyuncak kedi!",
    en: "Hooray! A toy cat!",
    a11y: "A soft toy — a little white cat with bead eyes, one blue and one green.",
    image: p("oyuncak-kedi"),
    steps: ["In the evenings Gülsüm Teyze sews toys.", "She gives Murzik a little white cat.", "Its bead eyes are blue and green.", "“Küçük bir Boncuk!” — “A little Boncuk!”"],
    bridge: "In the morning the postman brings a letter. From Istanbul!",
  },
};

const van4: Lesson = {
  id: "tr-a1-van-4",
  level: "A1",
  cityId: "tr-van",
  number: 4,
  title: "A letter from Istanbul",
  minutes: 7,
  goals: ["Understand a short letter", "Learn how letters begin and end", "Understand “he said…”: dedi"],
  vocabNote: "Sevgili — “dear”. Sevgiler — “love” (at the end of a letter). Dedi — “he said, she said”.",
  vocab: [
    v("trva4-1", "Sevgili Murzik,", "Dear Murzik,", "An envelope with a Turkish stamp; inside, a letter on blue paper.", "Listen to Sevgili Murzik", p("l4-1")),
    v("trva4-2", "Umarım iyisindir.", "I hope you're well.", "The start of the letter in neat handwriting.", "Listen to Umarım iyisindir", p("l4-2")),
    v("trva4-3", "Kafeye yaşlı bir kedi geldi.", "An old cat came to the café.", "A drawing in the margin of the letter: a cat at a café door.", "Listen to Kafeye yaşlı bir kedi geldi", p("l4-3")),
    v("trva4-4", "Başında bir şapka vardı.", "He had a hat on his head.", "A drawing in the margin: a hat.", "Listen to Başında bir şapka vardı", p("l4-4")),
    v("trva4-5", "«Asya'yı tanıyorum» dedi.", "“I know Asya,” he said.", "Murzik reads the letter, his eyes wide.", "Listen to Asya'yı tanıyorum dedi", p("l4-5")),
    v("trva4-6", "Seni sordu.", "He asked about you.", "Murzik looks at Tom over the top of the letter.", "Listen to Seni sordu", p("l4-6")),
    v("trva4-7", "Sevgiler, Ayşe Teyze", "Love, Ayşe Teyze", "The signature at the bottom of the letter and a drawing of a glass of tea.", "Listen to Sevgiler, Ayşe Teyze", p("l4-7")),
  ],
  dialogue: {
    title: "The blue envelope",
    note: "Tanımak means “to know (a person)”. Her yerde — “everywhere”. Gördüm — “I saw”.",
    lines: [
      line("murzik", "Tom! Ayşe Teyze'den mektup!", "Tom! A letter from Ayşe Teyze!"),
      line("tom", "Oku, oku! Ne yazıyor?", "Read it, read it! What does she say?"),
      line("ayse", "Sevgili Murzik, nasılsın? Umarım iyisindir. Dün kafeye yaşlı, beyaz bir kedi geldi. Başında bir şapka vardı.", "Dear Murzik, how are you? I hope you're well. Yesterday an old white cat came to the café. He had a hat on his head."),
      line("ayse", "«Asya'yı tanıyorum» dedi. Seni sordu. Sevgiler, Ayşe Teyze.", "“I know Asya,” he said. He asked about you. Love, Ayşe Teyze."),
      line("murzik", "Şapkalı kedi! Onu her yerde gördüm, Tom!", "The cat in the hat! I've seen him everywhere, Tom!"),
      line("tom", "Pamukkale'de, Bodrum'da, Konya'da… Evet!", "In Pamukkale, in Bodrum, in Konya… Yes!"),
    ],
    gist: choice("trva4-d1", "What did the cat in the hat tell Ayşe Teyze?", [
      ["That he knows Asya.", true],
      ["That he lives in Van.", false],
      ["That he's looking for Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "There was: vardı, yoktu",
      paragraphs: [
        "Var and yok in the past: vardı — “there was, had”, yoktu — “there wasn't”. Başında bir şapka vardı. — He had a hat on his head (literally “on his head there was a hat”). Kafede kimse yoktu. — There was nobody in the café.",
        "“He said” is dedi, after the words in quotation marks: «Merhaba» dedi. — “Hello,” he said.",
      ],
      examples: [
        { ru: "Dün parkta çok kedi vardı.", en: "There were lots of cats in the park yesterday." },
        { ru: "Mektupta adres yoktu.", en: "There was no address on the letter." },
      ],
    },
  ],
  tasks: [
    listen("trva4-t1", "Listen. What was on the postman's head?", "Başında siyah bir şapka vardı.", [
      ["A black hat.", true],
      ["A white hat.", false],
      ["Nothing.", false],
    ]),
    choice("trva4-t2", "How do you say “There was no address”?", [
      ["Adres yoktu.", true],
      ["Adres vardı.", false],
      ["Adres yokdu.", false],
    ], { skill: "grammar" }),
    match("trva4-t3", "Match the pairs.", [
      ["Sevgili…", "Dear…"],
      ["Sevgiler", "Love (end of a letter)"],
      ["dedi", "he said"],
      ["şapka", "hat"],
    ], { skill: "words" }),
    missing("trva4-t4", "Which letter is missing? (“dear”)", "Sev", "ili", "g", ["g", "ğ", "k"]),
    speak("trva4-t5", "Mektupta ne yazıyor?", "Kafeye şapkalı bir kedi geldi.", "A cat in a hat came to the café.", { help: "Say aloud the main news from the letter." }),
    choice("trva4-t6", "How do you say “a quiet town”?", [
      ["sessiz bir şehir", true],
      ["şehir sessiz bir", false],
      ["bir sessiz şehirler", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mektup-kagidi",
    itemName: "Writing paper",
    itemNameRu: "Mektup kâğıdı",
    ru: "Yaşasın! Mektup kâğıdı!",
    en: "Hooray! Writing paper!",
    a11y: "A pile of blue writing paper with a thin border of little flowers, and envelopes beside it.",
    image: p("mektup-kagidi"),
    steps: ["Murzik wants to write back to Ayşe Teyze right away.", "Gülsüm Teyze brings some blue writing paper.", "“Cevap yaz, canım!” — “Write a reply, dear!”", "The paper goes on the little table by the window."],
    bridge: "But what can he write with? Murzik looks for a pen…",
  },
};

const van5: Lesson = {
  id: "tr-a1-van-5",
  level: "A1",
  cityId: "tr-van",
  number: 5,
  title: "Writing back",
  minutes: 7,
  goals: ["Write a short letter", "Say “I'm in Van”, “I miss you”", "End a letter: “see you soon”"],
  vocabNote: "Özledim — “I miss (you)”. Sizi özledim — “I miss you” (polite). Görüşmek üzere — “see you soon”. Ellerinizden öperim — “I kiss your hands”: a warm, respectful way to end a letter to an older person.",
  vocab: [
    v("trva5-1", "Sevgili Ayşe Teyze,", "Dear Ayşe Teyze,", "Murzik starts the letter with the tip of his tongue sticking out.", "Listen to Sevgili Ayşe Teyze", p("l5-1")),
    v("trva5-2", "Ben iyiyim.", "I'm well.", "Murzik draws a smile in the margin.", "Listen to Ben iyiyim", p("l5-2")),
    v("trva5-3", "Şimdi Van'dayım.", "I'm in Van now.", "Murzik draws a lake and a mountain.", "Listen to Şimdi Van'dayım", p("l5-3")),
    v("trva5-4", "Burası çok güzel.", "It's very beautiful here.", "The view from the window of the blue lake.", "Listen to Burası çok güzel", p("l5-4")),
    v("trva5-5", "Sizi çok özledim.", "I miss you very much.", "Murzik presses a paw to his heart.", "Listen to Sizi çok özledim", p("l5-5")),
    v("trva5-6", "Mektubunuz için teşekkür ederim.", "Thank you for your letter.", "Murzik carefully folds Ayşe Teyze's letter.", "Listen to Mektubunuz için teşekkür ederim", p("l5-6")),
    v("trva5-7", "Ellerinizden öperim.", "I kiss your hands.", "Murzik writes the last line and signs it with a paw print.", "Listen to Ellerinizden öperim", p("l5-7")),
  ],
  dialogue: {
    title: "A letter to Istanbul",
    note: "Murzik reads his letter aloud, and Tom helps. Gelirse — “if he comes”. Diye sorun — “ask (him) like this”. Kimsin — “who are you”.",
    lines: [
      line("murzik", "Sevgili Ayşe Teyze, nasılsınız? Ben iyiyim.", "Dear Ayşe Teyze, how are you? I'm well."),
      line("murzik", "Şimdi Van'dayım. Burası çok güzel. Bir Van kedisi var, yüzüyor!", "I'm in Van now. It's very beautiful here. There's a Van cat, and she swims!"),
      line("tom", "Şapkalı kediyi de yaz.", "Write about the cat in the hat too."),
      line("murzik", "Şapkalı kedi tekrar gelirse, ona «Sen kimsin?» diye sorun, lütfen.", "If the cat in the hat comes again, please ask him: “Who are you?”"),
      line("murzik", "Sizi çok özledim. Görüşmek üzere! Ellerinizden öperim. Murzik.", "I miss you very much. See you soon! With love and respect, Murzik."),
      line("tom", "Harika bir mektup!", "What a wonderful letter!"),
    ],
    gist: choice("trva5-d1", "What does Murzik ask Ayşe Teyze to do?", [
      ["Ask the cat in the hat who he is.", true],
      ["Send him some tea.", false],
      ["Come to Van.", false],
    ]),
  },
  grammar: [
    {
      title: "I'm here: -dayım, -deyim",
      paragraphs: [
        "“I'm in…” is the “in, at” ending + the “I am” ending: Van'dayım (I'm in Van), evdeyim (I'm at home), oteldeyim (I'm at the hotel), İstanbul'dayım (I'm in Istanbul).",
        "After ç, f, h, k, p, s, ş, t the d becomes t: -tayım / -teyim: Paris'teyim (I'm in Paris), parktayım (I'm in the park).",
      ],
      examples: [
        { ru: "Şimdi Trabzon'dayım.", en: "I'm in Trabzon now." },
        { ru: "Tom şimdi parkta.", en: "Tom is in the park now." },
      ],
    },
  ],
  tasks: [
    choice("trva5-t1", "How do you say “I'm in Paris”?", [
      ["Paris'teyim.", true],
      ["Paris'deyim.", false],
      ["Paris'e im.", false],
    ], { skill: "grammar" }),
    listen("trva5-t2", "Listen. Where is the writer now?", "Şimdi oteldeyim. Burası çok sessiz.", [
      ["At a hotel, and it's quiet.", true],
      ["At home, and it's noisy.", false],
      ["In a park, and it's crowded.", false],
    ]),
    match("trva5-t3", "Match the pairs.", [
      ["özledim", "I miss (you)"],
      ["Görüşmek üzere!", "See you soon!"],
      ["burası", "here, this place"],
      ["mektup", "letter"],
    ], { skill: "words" }),
    spell("trva5-t4", "Spell the word for “letter”.", "mektup"),
    speak("trva5-t5", "Neredesin? Nasılsın?", "Şimdi evdeyim. Ben iyiyim.", "I'm at home now. I'm well.", { help: "Say aloud where you are and how you are." }),
    listen("trva5-t6", "Remember the last lesson. What did the cat say?", "«Asya'yı tanıyorum» dedi.", [
      ["“I know Asya.”", true],
      ["“I'm looking for Tom.”", false],
      ["“I live in Paris.”", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "dolma-kalem",
    itemName: "Fountain pen",
    itemNameRu: "Dolma kalem",
    ru: "Yaşasın! Bir dolma kalem!",
    en: "Hooray! A fountain pen!",
    a11y: "An old dark-blue fountain pen with a gold nib lies on the blue letter.",
    image: p("dolma-kalem"),
    steps: ["Gülsüm Teyze takes an old fountain pen out of a drawer.", "“Bu babamındı.” — “This was my father's.”", "Murzik copies his letter out neatly with it.", "The letters come out neat and beautiful."],
    bridge: "The letter's ready! But is the post office open now?",
  },
};

const van6: Lesson = {
  id: "tr-a1-van-6",
  level: "A1",
  cityId: "tr-van",
  number: 6,
  title: "Open or closed?",
  minutes: 7,
  goals: ["Ask if a place is open", "Say “until five o'clock”: saat beşe kadar", "Say which days somewhere is closed"],
  vocabNote: "-e kadar means “until”: akşama kadar — until the evening, yarına kadar — until tomorrow, saat beşe kadar — until five o'clock.",
  vocab: [
    v("trva6-1", "Postane açık mı?", "Is the post office open?", "Murzik hurries down the street with his letter.", "Listen to Postane açık mı", p("l6-1")),
    v("trva6-2", "Saat beşe kadar açık.", "It's open until five.", "A sign with opening hours on the post office door.", "Listen to Saat beşe kadar açık", p("l6-2")),
    v("trva6-3", "kapalı", "closed", "A KAPALI sign on a shop door.", "Listen to kapalı", p("l6-3")),
    v("trva6-4", "Pazartesi kapalı.", "It's closed on Mondays.", "A calendar with Monday crossed out.", "Listen to Pazartesi kapalı", p("l6-4")),
    v("trva6-5", "Saat kaçta açılıyor?", "What time does it open?", "Murzik stands in front of the museum's closed door.", "Listen to Saat kaçta açılıyor", p("l6-5")),
    v("trva6-6", "akşama kadar", "until the evening", "The sun sinks towards the lake.", "Listen to akşama kadar", p("l6-6")),
    v("trva6-7", "Yetiştik!", "We made it!", "Murzik and Tom rush through the post office door five minutes before closing.", "Listen to Yetiştik", p("l6-7")),
  ],
  dialogue: {
    title: "A dash to the post office",
    note: "Koş — “run”. Kapanıyor — “it's closing”. Hâlâ — “still”.",
    lines: [
      line("murzik", "Gülsüm Teyze, postane açık mı?", "Gülsüm Teyze, is the post office open?"),
      line("gulsum", "Saat beşe kadar açık. Şimdi saat dört buçuk. Koş!", "It's open until five. It's half past four now. Run!"),
      line("tom", "Müze de açık mı?", "Is the museum open too?"),
      line("gulsum", "Hayır, müze bugün kapalı. Pazartesi kapalı.", "No, the museum's closed today. It's closed on Mondays."),
      line("murzik", "Yetiştik! Postane hâlâ açık!", "We made it! The post office is still open!"),
      line("postman", "Evet, ama beş dakika sonra kapanıyor!", "Yes, but it closes in five minutes!"),
    ],
    gist: choice("trva6-d1", "Why is the museum closed?", [
      ["Because it's Monday.", true],
      ["Because it's evening.", false],
      ["Because it's being repaired.", false],
    ]),
  },
  grammar: [
    {
      title: "Until: -e kadar",
      paragraphs: [
        "“Until” or “as far as” is a word with the ending -e / -a plus kadar: saat beşe kadar (until five), akşama kadar (until the evening), göle kadar (as far as the lake), Ankara'ya kadar (as far as Ankara).",
        "“From … until …” is -den … -e kadar: dokuzdan beşe kadar — from nine to five.",
      ],
      examples: [
        { ru: "Müze dokuzdan beşe kadar açık.", en: "The museum is open from nine to five." },
        { ru: "Göle kadar yürüyelim.", en: "Let's walk as far as the lake." },
      ],
    },
  ],
  tasks: [
    choice("trva6-t1", "How do you say “until the evening”?", [
      ["akşama kadar", true],
      ["akşamda kadar", false],
      ["akşamdan kadar", false],
    ], { skill: "grammar" }),
    listen("trva6-t2", "Listen. When is the shop open?", "Dükkân dokuzdan yediye kadar açık.", [
      ["From nine to seven.", true],
      ["From seven to nine.", false],
      ["Until nine.", false],
    ]),
    match("trva6-t3", "Match the pairs.", [
      ["açık", "open"],
      ["kapalı", "closed"],
      ["Pazartesi", "Monday"],
      ["Yetiştik!", "We made it!"],
    ], { skill: "words" }),
    missing("trva6-t4", "Which letter is missing? (“closed”)", "kap", "lı", "a", ["a", "ı", "e"]),
    speak("trva6-t5", "Okul saat kaça kadar açık?", "Okul saat üçe kadar açık.", "The school is open until three.", { help: "Say aloud how late a place is open." }),
    choice("trva6-t6", "How do you start a letter to a friend?", [
      ["Sevgili Selin,", true],
      ["Sevgiler Selin,", false],
      ["Görüşmek üzere Selin,", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kar-kuresi",
    itemName: "Snow globe",
    itemNameRu: "Kar küresi",
    ru: "Yaşasın! Bir kar küresi!",
    en: "Hooray! A snow globe!",
    a11y: "A glass snow globe: inside are a castle on a rock and a blue lake, with snow swirling around.",
    image: p("kar-kuresi"),
    steps: ["Next to the post office there's a souvenir shop.", "It's open until six!", "Tom buys Murzik a snow globe with the castle and the lake.", "Murzik shakes it — and snow swirls over the castle."],
    bridge: "Tomorrow Murzik will show Tom round the town himself. He's a tour guide now!",
  },
};

const van7: Lesson = {
  id: "tr-a1-van-7",
  level: "A1",
  cityId: "tr-van",
  number: 7,
  title: "Murzik the tour guide",
  minutes: 8,
  goals: ["Talk about a town", "Show where things are", "Review all the words from Van"],
  vocabNote: "Rehber — “guide”. Burası — “this place, here”. Şurası — “that place over there”. Ünlü — “famous”.",
  vocab: [
    v("trva7-1", "Ben bugün rehberim!", "Today I'm the tour guide!", "Murzik in a cap with a paw-print flag, Tom behind him.", "Listen to Ben bugün rehberim", p("l7-1")),
    v("trva7-2", "Burası Van Kalesi.", "This is Van Castle.", "Murzik points his paw at the castle.", "Listen to Burası Van Kalesi", p("l7-2")),
    v("trva7-3", "Çok eski ve çok ünlü.", "It's very old and very famous.", "The ancient stones of the castle wall.", "Listen to Çok eski ve çok ünlü", p("l7-3")),
    v("trva7-4", "Şurası bizim kahvaltı evimiz.", "That's our breakfast house over there.", "In the distance by the lake: Gülsüm Teyze's little house.", "Listen to Şurası bizim kahvaltı evimiz", p("l7-4")),
    v("trva7-5", "Soru var mı?", "Any questions?", "Murzik turns to Tom, one paw raised.", "Listen to Soru var mı", p("l7-5")),
    v("trva7-6", "otlu peynir", "herb cheese", "A piece of white cheese with green herbs in it.", "Listen to otlu peynir", p("l7-6")),
    v("trva7-7", "Harika bir rehbersin!", "You're a brilliant guide!", "Tom applauds and Murzik bows.", "Listen to Harika bir rehbersin", p("l7-7")),
  ],
  dialogue: {
    title: "The tour",
    note: "Soru var — “I have a question” (literally “there's a question”). Hadi means “come on, let's go”.",
    lines: [
      line("murzik", "Hoş geldiniz! Ben bugün rehberim!", "Welcome! Today I'm the tour guide!"),
      line("murzik", "Burası Van Kalesi. Çok eski ve çok ünlü. Gölün yanında.", "This is Van Castle. It's very old and very famous. It's next to the lake."),
      line("tom", "Soru var! Müze açık mı?", "Question! Is the museum open?"),
      line("murzik", "Evet, bugün akşama kadar açık.", "Yes, it's open until the evening today."),
      line("murzik", "Şurası bizim kahvaltı evimiz. Orada otlu peynir var!", "And that's our breakfast house over there. They have herb cheese!"),
      line("tom", "Harika bir rehbersin! Hadi, kahvaltıya!", "You're a brilliant guide! Come on, let's have breakfast!"),
    ],
    gist: choice("trva7-d1", "Where is the castle?", [
      ["Next to the lake.", true],
      ["Opposite the post office.", false],
      ["Behind the breakfast house.", false],
    ]),
  },
  grammar: [
    {
      title: "Burası, şurası, orası",
      paragraphs: [
        "Burası — “this place (here)”, şurası — “that place over there (nearby, I'm pointing)”, orası — “that place (there)”.",
        "They're handy for showing someone round a town: Burası müze. — This is the museum. Şurası postane. — That's the post office over there.",
      ],
      examples: [
        { ru: "Burası çok sessiz.", en: "It's very quiet here." },
        { ru: "Orası çok kalabalık.", en: "It's very crowded there." },
      ],
    },
  ],
  tasks: [
    listen("trva7-t1", "Audio exam. What does the guide say?", "Burası eski bir kale. Gölün yanında. Müze saat beşe kadar açık.", [
      ["This is an old castle by the lake; the museum is open until five.", true],
      ["This is a new museum by the post office, and it's closed.", false],
      ["This is an island, and the boat goes every hour.", false],
    ]),
    choice("trva7-t2", "How do you say “It's very quiet here”?", [
      ["Burası çok sessiz.", true],
      ["Orası çok kalabalık.", false],
      ["Burada sessiz yok.", false],
    ], { skill: "grammar" }),
    match("trva7-t3", "Match the pairs.", [
      ["rehber", "guide"],
      ["ünlü", "famous"],
      ["burası", "this place, here"],
      ["otlu peynir", "herb cheese"],
    ], { skill: "words" }),
    spell("trva7-t4", "Spell the word for “guide”.", "rehber"),
    speak("trva7-t5", "Şehrinde ne var? Anlat!", "Burası benim şehrim. Burada eski bir park var.", "This is my town. There's an old park here.", { help: "Give a little tour of your town, aloud." }),
    script("trva7-t6", "Remember all of Van. Finish the conversations.", [
      { speaker: "Tom", text: "Burada müze var mı?" },
      { speaker: "You", answer: "Evet, var. Kalenin yanında.", options: ["Evet, var. Kalenin yanında.", "Evet, var. Kale yanında.", "Hayır, var."] },
      { speaker: "Tom", text: "Müze açık mı?" },
      { speaker: "You", answer: "Evet, saat beşe kadar açık.", options: ["Evet, saat beşe kadar açık.", "Evet, saat beşte kadar açık.", "Hayır, açık."] },
      { speaker: "Gülsüm Teyze", text: "Van nasıl bir şehir?" },
      { speaker: "You", answer: "Sessiz ve çok güzel bir şehir.", options: ["Sessiz ve çok güzel bir şehir.", "Bir şehir sessiz güzel.", "Görüşmek üzere!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kahvalti-tabagi",
    itemName: "Breakfast plate",
    itemNameRu: "Kahvaltı tabağı",
    ru: "Yaşasın! Bir kahvaltı tabağı!",
    en: "Hooray! A breakfast plate!",
    a11y: "A big painted plate with little round hollows for cheese, honey, olives and jam.",
    image: p("kahvalti-tabagi"),
    steps: ["After the tour — Van's famous breakfast.", "Herb cheese, honey, clotted cream, olives, hot bread…", "Gülsüm Teyze gives Murzik a painted plate.", "“Her sabah bizi hatırla!” — “Remember us every morning!”"],
    bridge: "Time to go. The next stop is Gaziantep, the city of copper and pistachios.",
  },
};

const story: CityStory = {
  home: {
    name: "A room by the lake",
    nameRu: "Göl kenarında bir oda",
    image: p("home"),
    a11y: "A bright empty room in a house by the lake. Through the window: blue Lake Van and a snowy mountain. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "kahvalti-tabagi",
  welcomeRu: "Merhaba, Van!",
  welcomeEn: "Hello, Van!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom on the shore of huge, blue Lake Van. A snowy mountain in the distance. It's sunny.",
  departureImage: p("departure"),
  departureA11y: "Gülsüm Teyze waves goodbye outside the breakfast house; Boncuk, the wet white cat, sits beside her.",
  finale: [
    {
      image: p("letter"),
      a11y: "Evening. Murzik sits on the pouffe by the window, looking at the dark lake. Above him, like little clouds, are memories: the white terraces, a night-time street, the orange-tree courtyard, the turquoise dome in the snow. In each one there's a little white cat in a hat.",
      lines: [
        { en: "In the evening Murzik gazes at the lake for a long time, remembering." },
        { en: "Pamukkale. Bodrum. Antalya. Konya. Cappadocia. And everywhere — him, the white cat in the hat." },
        { ru: "Asya'yı tanıyor… Peki, o kim?", en: "He knows Asya… But who is he?" },
      ],
    },
    {
      image: p("kahvalti-tabagi"),
      a11y: "Murzik walks round his room by the lake, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his room by the lake. Tom takes a photo of it for the magazine." },
        { en: "Murzik takes the painted breakfast plate with him." },
        { en: "Ayşe Teyze's letter goes into the suitcase pocket, next to the postcards." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Van tamamlandı!", en: "Van complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — twelfth part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Gülsüm Teyze waves goodbye.",
      lines: [
        { ru: "Hoşça kalın, Gülsüm Teyze!", en: "Goodbye, Gülsüm Teyze!" },
        { ru: "Sıradaki durak: Gaziantep!", en: "Next stop: Gaziantep!" },
      ],
    },
    {
      image: p("road"),
      a11y: "The bus heads south-west along a mountain road, with the lake sparkling below.",
      lines: [{ ru: "Van → Gaziantep", en: "Van → Gaziantep" }],
    },
    {
      image: pic("tr/gaziantep/arrival"),
      a11y: "Murzik and Tom in Gaziantep's copper bazaar: shiny copper jugs and trays, and a craftsman tapping with a little hammer.",
      lines: [
        { ru: "Merhaba, Gaziantep!", en: "Hello, Gaziantep!" },
        { ru: "Ne güzel kokuyor!", en: "What a lovely smell!" },
      ],
    },
  ],
};

export const trVanEn = {
  id: "tr-van",
  name: "Van",
  nameTr: "Van",
  lessons: [van1, van2, van3, van4, van5, van6, van7],
  story,
};
