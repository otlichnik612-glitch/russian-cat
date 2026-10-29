import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Konya · “Clothes and feeling unwell” · warm clothes, colours, trying things on, “I feel ill”, at the doctor's, at the chemist's, “I feel better”. English version. */

const p = (name: string) => pic(`tr/konya/${name}`);

const konya1: Lesson = {
  id: "tr-a1-konya-1",
  level: "A1",
  cityId: "tr-konya",
  number: 1,
  title: "Warm clothes",
  minutes: 7,
  goals: ["Name winter clothes", "Say what you need: lazım, gerek", "Buy some warm clothes"],
  vocabNote: "Konya lies on a high plateau. In winter there's snow and frost — nothing like the coast.",
  vocab: [
    v("trko1-1", "Hava çok soğuk.", "It's very cold.", "Murzik shivers in a snowy street, his breath steaming.", "Listen to Hava çok soğuk", p("l1-1")),
    v("trko1-2", "Kalın bir mont lazım.", "I need a warm coat.", "Tom points at a thick coat in a shop window.", "Listen to Kalın bir mont lazım", p("l1-2")),
    v("trko1-3", "atkı", "scarf", "A long knitted scarf.", "Listen to atkı", p("l1-3")),
    v("trko1-4", "bere", "woolly hat", "A knitted hat with a bobble.", "Listen to bere", p("l1-4")),
    v("trko1-5", "eldiven", "gloves", "A pair of warm gloves.", "Listen to eldiven", p("l1-5")),
    v("trko1-6", "kazak", "jumper, sweater", "A thick patterned jumper.", "Listen to kazak", p("l1-6")),
    v("trko1-7", "botlar", "boots", "A pair of warm fur-lined boots.", "Listen to botlar", p("l1-7")),
  ],
  dialogue: {
    title: "The warm-clothes shop",
    note: "Kış means “winter”. Kalın means “thick, warm” (of clothes). Turkish usually says eldiven in the singular, even for a pair of gloves.",
    lines: [
      line("murzik", "Brr! Hava çok soğuk!", "Brrr! It's so cold!"),
      line("tom", "Evet. Kalın bir mont lazım.", "Yes. I need a warm coat."),
      line("seller", "Hoş geldiniz! Ne lazım?", "Welcome! What do you need?"),
      line("murzik", "Bana bir atkı, bir bere ve eldiven lazım.", "I need a scarf, a hat and some gloves."),
      line("seller", "Kazak da gerek mi?", "Do you need a jumper too?"),
      line("tom", "Evet, bana kalın bir kazak lazım. Ve botlar!", "Yes, I need a thick jumper. And boots!"),
      line("seller", "Buyurun. Konya'da kış çok soğuk!", "Here you are. Winter in Konya is very cold!"),
    ],
    gist: choice("trko1-d1", "What does Murzik need?", [
      ["A scarf, a hat and gloves.", true],
      ["A jumper and boots.", false],
      ["Nothing.", false],
    ]),
  },
  grammar: [
    {
      title: "Need: lazım, gerek",
      paragraphs: [
        "“I need” is bana … lazım — literally “to me … is needed”: Bana bir atkı lazım. — I need a scarf. Bana means “to me”, sana “to you”.",
        "Gerek means the same: Kazak gerek mi? — Do you need a jumper? Lazım never changes, whatever comes before it.",
      ],
      examples: [
        { ru: "Bana sıcak bir kazak lazım.", en: "I need a warm jumper." },
        { ru: "Sana eldiven gerek mi?", en: "Do you need gloves?" },
      ],
    },
  ],
  tasks: [
    choice("trko1-t1", "How do you say “I need a hat”?", [
      ["Bana bir bere lazım.", true],
      ["Ben bir bere lazım.", false],
      ["Bana bir bere lazımım.", false],
    ], { skill: "grammar" }),
    listen("trko1-t2", "Listen. What does Tom need?", "Bana kalın bir kazak lazım.", [
      ["A thick jumper.", true],
      ["A scarf.", false],
      ["Gloves.", false],
    ]),
    match("trko1-t3", "Match the pairs.", [
      ["atkı", "scarf"],
      ["bere", "woolly hat"],
      ["eldiven", "gloves"],
      ["kazak", "jumper"],
    ], { skill: "words" }),
    missing("trko1-t4", "Which letter is missing? (“scarf”)", "atk", "", "ı", ["ı", "i", "a"]),
    speak("trko1-t5", "Kışın ne lazım?", "Kışın kalın bir mont ve eldiven lazım.", "In winter you need a warm coat and gloves.", { help: "Say aloud what you need in winter." }),
    choice("trko1-t6", "How do you say “I'll never forget”?", [
      ["Hiç unutmayacağım.", true],
      ["Hiç unutuyorum.", false],
      ["Hiç unuttum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "corap",
    itemName: "Woolly socks",
    itemNameRu: "Yün çorap",
    ru: "Yaşasın! Yün çoraplar!",
    en: "Hooray! Woolly socks!",
    a11y: "A pair of thick patterned woollen socks — tiny, just right for Murzik's paws.",
    image: p("corap"),
    steps: ["The shopkeeper takes out some tiny socks.", "“Hediye! Tam kedi boyu!” — “A present! Cat-sized!”", "Murzik puts them on.", "Toasty!"],
    bridge: "There are so many colourful things on the shelves! “Which colour will you choose?” asks Tom.",
  },
};

const konya2: Lesson = {
  id: "tr-a1-konya-2",
  level: "A1",
  cityId: "tr-konya",
  number: 2,
  title: "What colour?",
  minutes: 7,
  goals: ["Name the main colours", "Ask what colour something is", "Say your favourite colour"],
  vocabNote: "Turkuaz means “turquoise”. The English word comes from French turquoise — “the Turkish stone”.",
  vocab: [
    v("trko2-1", "Ne renk?", "What colour?", "Tom holds up a scarf and looks questioningly.", "Listen to Ne renk", p("l2-1")),
    v("trko2-2", "kırmızı", "red", "A red scarf.", "Listen to kırmızı", p("l2-2")),
    v("trko2-3", "mavi", "blue", "A blue hat.", "Listen to mavi", p("l2-3")),
    v("trko2-4", "yeşil", "green", "Tom's green coat.", "Listen to yeşil", p("l2-4")),
    v("trko2-5", "sarı", "yellow", "Yellow gloves.", "Listen to sarı", p("l2-5")),
    v("trko2-6", "siyah, beyaz", "black, white", "A black glove and a white glove side by side.", "Listen to siyah, beyaz", p("l2-6")),
    v("trko2-7", "turuncu", "orange", "Murzik in his orange scarf against the snow.", "Listen to turuncu", p("l2-7")),
  ],
  dialogue: {
    title: "A colourful shop",
    note: "Benim gibi — “like me”. Senin montun gibi — “like your coat”. Kar means “snow”.",
    lines: [
      line("tom", "Murzik, bu atkı ne renk?", "Murzik, what colour is this scarf?"),
      line("murzik", "Turuncu! Benim gibi!", "Orange! Like me!"),
      line("tom", "Hangi bere? Kırmızı mı, mavi mi?", "Which hat? Red or blue?"),
      line("murzik", "Mavi… Hayır, yeşil! Senin montun gibi.", "Blue… No, green! Like your coat."),
      line("seller", "Sarı, siyah ve beyaz eldivenlerimiz var.", "We have gloves in yellow, black and white."),
      line("murzik", "Beyaz eldiven, lütfen. Kar gibi!", "White gloves, please. Like the snow!"),
      line("tom", "Mevlana'nın kubbesi turkuaz. Çok güzel!", "And the dome of the Mevlana Museum is turquoise. It's beautiful!"),
    ],
    gist: choice("trko2-d1", "Which hat does Murzik choose?", [
      ["The green one.", true],
      ["The blue one.", false],
      ["The red one.", false],
    ]),
  },
  grammar: [
    {
      title: "The colour goes first",
      paragraphs: [
        "As in English, a colour goes before the noun and never changes: kırmızı bir atkı — a red scarf, beyaz eldivenler — white gloves.",
        "The question: Ne renk? or Hangi renk? — What colour? The answer is just the colour: Mavi.",
      ],
      examples: [
        { ru: "Bu atkı ne renk? — Kırmızı.", en: "What colour is this scarf? — Red." },
        { ru: "Yeşil bir bere istiyorum.", en: "I'd like a green hat." },
      ],
    },
  ],
  tasks: [
    listen("trko2-t1", "Listen. What colour is the scarf?", "Atkım kırmızı.", [
      ["Red.", true],
      ["Blue.", false],
      ["Yellow.", false],
    ]),
    match("trko2-t2", "Match the pairs.", [
      ["kırmızı", "red"],
      ["mavi", "blue"],
      ["yeşil", "green"],
      ["sarı", "yellow"],
    ], { skill: "words" }),
    choice("trko2-t3", "How do you say “white gloves”?", [
      ["beyaz eldivenler", true],
      ["eldivenler beyaz bir", false],
      ["beyazlar eldiven", false],
    ], { skill: "grammar" }),
    spell("trko2-t4", "Spell the word for “orange” (the colour).", "turuncu"),
    speak("trko2-t5", "En sevdiğin renk ne?", "En sevdiğim renk mavi.", "My favourite colour is blue.", { help: "Say your favourite colour aloud." }),
    choice("trko2-t6", "How do you say “I need a scarf”?", [
      ["Bana bir atkı lazım.", true],
      ["Bana bir atkı var.", false],
      ["Ben atkı lazım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "dolap",
    itemName: "Painted wardrobe",
    itemNameRu: "Dolap",
    ru: "Yaşasın! Renkli bir dolap!",
    en: "Hooray! A painted wardrobe!",
    a11y: "A small wooden wardrobe painted with turquoise and red flowers. An orange scarf hangs on its door.",
    image: p("dolap"),
    steps: ["The landlady shows them an old painted wardrobe.", "«Bu dolap senin olsun!» — “Let this wardrobe be yours!”", "Murzik puts his new things away in it.", "Every colour in its place!"],
    bridge: "In the shop next door Tom spots another jumper: “Can I try this one on?”",
  },
};

const konya3: Lesson = {
  id: "tr-a1-konya-3",
  level: "A1",
  cityId: "tr-konya",
  number: 3,
  title: "Does it suit me?",
  minutes: 7,
  goals: ["Ask to try something on", "Ask if something suits you", "Ask for a bigger or smaller size: daha"],
  vocabNote: "Beden means “clothes size”: küçük (S), orta (M), büyük (L).",
  vocab: [
    v("trko3-1", "Deneyebilir miyim?", "Can I try it on?", "Tom holds a jumper and looks at the shop assistant.", "Listen to Deneyebilir miyim", p("l3-1")),
    v("trko3-2", "Kabin nerede?", "Where's the changing room?", "Tom looks around the shop; a cubicle with a curtain is in the distance.", "Listen to Kabin nerede", p("l3-2")),
    v("trko3-3", "Yakıştı mı?", "Does it suit me?", "Tom turns in front of the mirror in his new jumper.", "Listen to Yakıştı mı", p("l3-3")),
    v("trko3-4", "Çok yakıştı!", "It really suits you!", "Murzik gives a thumbs up, eyes shining.", "Listen to Çok yakıştı", p("l3-4")),
    v("trko3-5", "Biraz büyük.", "It's a bit big.", "The sleeves of the jumper hang down past Tom's fingers.", "Listen to Biraz büyük", p("l3-5")),
    v("trko3-6", "Daha küçük var mı?", "Do you have a smaller one?", "Tom shows the assistant “smaller” with his fingers.", "Listen to Daha küçük var mı", p("l3-6")),
    v("trko3-7", "Hangi beden?", "Which size?", "The assistant holds up three jumpers in different sizes.", "Listen to Hangi beden", p("l3-7")),
  ],
  dialogue: {
    title: "Trying it on",
    note: "Orta means “medium”. Oldu — “it's turned out, it's become”.",
    lines: [
      line("tom", "Bu kazağı deneyebilir miyim?", "Can I try on this jumper?"),
      line("seller", "Tabii. Kabin orada.", "Of course. The changing room's over there."),
      line("tom", "Murzik, yakıştı mı?", "Murzik, does it suit me?"),
      line("murzik", "Renk çok yakıştı! Ama biraz büyük.", "The colour really suits you! But it's a bit big."),
      line("tom", "Daha küçük var mı?", "Do you have a smaller one?"),
      line("seller", "Hangi beden? Orta mı?", "Which size? Medium?"),
      line("tom", "Evet, orta lütfen.", "Yes, medium, please."),
      line("murzik", "Şimdi çok güzel oldu!", "Now it's perfect!"),
    ],
    gist: choice("trko3-d1", "Why didn't the first jumper fit Tom?", [
      ["It was a bit big.", true],
      ["It was the wrong colour.", false],
      ["It was too expensive.", false],
    ]),
  },
  grammar: [
    {
      title: "Bigger, smaller: daha",
      paragraphs: [
        "English adds -er or “more”; Turkish puts daha before the word: daha küçük — smaller, daha büyük — bigger, daha güzel — more beautiful.",
        "“Than” is the ending -den / -dan on the thing you compare with: Bu kazak o kazaktan daha güzel. — This jumper is nicer than that one.",
      ],
      examples: [
        { ru: "Daha büyük var mı?", en: "Do you have a bigger one?" },
        { ru: "Mavi kazak daha güzel.", en: "The blue jumper is nicer." },
      ],
    },
  ],
  tasks: [
    choice("trko3-t1", "How do you ask “Do you have a smaller one?”", [
      ["Daha küçük var mı?", true],
      ["Çok küçük var mı?", false],
      ["Küçük daha mı?", false],
    ], { skill: "grammar" }),
    listen("trko3-t2", "Listen. What's wrong?", "Biraz küçük.", [
      ["It's a bit small.", true],
      ["It's a bit big.", false],
      ["It's the wrong colour.", false],
    ]),
    match("trko3-t3", "Match the pairs.", [
      ["kabin", "changing room"],
      ["beden", "size"],
      ["denemek", "to try on"],
      ["orta", "medium"],
    ], { skill: "words" }),
    missing("trko3-t4", "Which letter is missing? (“It really suits you!”)", "Çok yakı", "tı!", "ş", ["ş", "s", "z"]),
    speak("trko3-t5", "Bu kazak yakıştı mı?", "Çok yakıştı! Ama biraz büyük.", "It really suits you! But it's a bit big.", { help: "Answer your friend aloud." }),
    listen("trko3-t6", "Remember the colours. What colour is this?", "Turuncu.", [
      ["Orange.", true],
      ["Yellow.", false],
      ["Red.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "aski",
    itemName: "Coat stand",
    itemNameRu: "Askı",
    ru: "Yaşasın! Bir askı!",
    en: "Hooray! A coat stand!",
    a11y: "A wooden coat stand by the door, with Tom's new jumper and Murzik's scarf and hat on it.",
    image: p("aski"),
    steps: ["Tom puts a wooden coat stand by the door.", "He hangs his new jumper on it.", "Murzik hangs up his scarf and hat.", "The hallway's ready for winter!"],
    bridge: "In the night Murzik wakes up: his head aches, his nose is hot…",
  },
};

const konya4: Lesson = {
  id: "tr-a1-konya-4",
  level: "A1",
  cityId: "tr-konya",
  number: 4,
  title: "I don't feel well",
  minutes: 7,
  goals: ["Say you don't feel well", "Say what hurts", "Ask “what hurts?”"],
  vocabNote: "Ağrımak means “to hurt, to ache”. Turkish says “my head is hurting”: Başım ağrıyor — I have a headache.",
  vocab: [
    v("trko4-1", "Kendimi iyi hissetmiyorum.", "I don't feel well.", "Murzik lies in bed, pale, his ears drooping.", "Listen to Kendimi iyi hissetmiyorum", p("l4-1")),
    v("trko4-2", "Başım ağrıyor.", "I've got a headache.", "Murzik holds his head in his paws, with little stars above him.", "Listen to Başım ağrıyor", p("l4-2")),
    v("trko4-3", "Boğazım ağrıyor.", "I've got a sore throat.", "Murzik holds his throat, a scarf round his neck.", "Listen to Boğazım ağrıyor", p("l4-3")),
    v("trko4-4", "Ateşim var.", "I've got a temperature.", "A thermometer in Murzik's mouth, his cheeks red.", "Listen to Ateşim var", p("l4-4")),
    v("trko4-5", "Öksürüyorum.", "I've got a cough.", "Murzik coughs into his paw.", "Listen to Öksürüyorum", p("l4-5")),
    v("trko4-6", "Burnum akıyor.", "I've got a runny nose.", "Murzik, with a red nose, holds a handkerchief.", "Listen to Burnum akıyor", p("l4-6")),
    v("trko4-7", "Neren ağrıyor?", "Where does it hurt?", "Tom leans over Murzik's bed with concern.", "Listen to Neren ağrıyor", p("l4-7")),
  ],
  dialogue: {
    title: "In the night",
    note: "Ne oldu? — “What's the matter?”. Doktora — “to the doctor”.",
    lines: [
      line("murzik", "Tom… Kendimi iyi hissetmiyorum.", "Tom… I don't feel well."),
      line("tom", "Ne oldu? Neren ağrıyor?", "What's the matter? Where does it hurt?"),
      line("murzik", "Başım ağrıyor. Boğazım da ağrıyor.", "I've got a headache. And a sore throat."),
      line("tom", "Ateşin var mı? Ah, evet, ateşin var!", "Have you got a temperature? Oh yes, you have!"),
      line("murzik", "Öksürüyorum… ve burnum akıyor.", "I've got a cough… and a runny nose."),
      line("tom", "Yarın sabah doktora gidelim.", "Let's go to the doctor tomorrow morning."),
    ],
    gist: choice("trko4-d1", "What hurts?", [
      ["His head and his throat.", true],
      ["His tummy.", false],
      ["His paw.", false],
    ]),
  },
  grammar: [
    {
      title: "It hurts: Başım ağrıyor",
      paragraphs: [
        "“My … hurts” is the body part with the “my” ending plus ağrıyor: baş-ım ağrıyor (my head — a headache), boğaz-ım ağrıyor (my throat), karn-ım ağrıyor (my tummy).",
        "To ask a friend: Neren ağrıyor? — Where does it hurt? Politely: Nereniz ağrıyor?",
      ],
      examples: [
        { ru: "Karnım ağrıyor.", en: "I've got a stomach ache." },
        { ru: "Ateşin var mı?", en: "Have you got a temperature?" },
      ],
    },
  ],
  tasks: [
    listen("trko4-t1", "Listen. What hurts?", "Karnım ağrıyor.", [
      ["The tummy.", true],
      ["The head.", false],
      ["The throat.", false],
    ]),
    choice("trko4-t2", "How do you say “I've got a sore throat”?", [
      ["Boğazım ağrıyor.", true],
      ["Boğaz ağrıyorum.", false],
      ["Benim boğaz ağrı.", false],
    ], { skill: "grammar" }),
    match("trko4-t3", "Match the pairs.", [
      ["baş", "head"],
      ["boğaz", "throat"],
      ["karın", "tummy"],
      ["ateş", "temperature, fever"],
    ], { skill: "words" }),
    missing("trko4-t4", "Which letter is missing? (“it hurts”)", "a", "rıyor", "ğ", ["ğ", "g", "y"]),
    speak("trko4-t5", "Neren ağrıyor?", "Başım ağrıyor ve ateşim var.", "I've got a headache and a temperature.", { help: "Answer aloud as if you were ill." }),
    choice("trko4-t6", "How do you ask “Can I try it on?”", [
      ["Deneyebilir miyim?", true],
      ["Deniyor muyum?", false],
      ["Denedim mi?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "termofor",
    itemName: "Hot-water bottle",
    itemNameRu: "Sıcak su torbası",
    ru: "Yaşasın! Bir sıcak su torbası!",
    en: "Hooray! A hot-water bottle!",
    a11y: "Murzik lies in bed under a blanket, hugging a warm hot-water bottle in a knitted cover.",
    image: p("termofor"),
    steps: ["Tom fills a hot-water bottle with hot water.", "He puts a knitted cover on it.", "Murzik hugs it.", "He feels a little better."],
    bridge: "In the morning — off to see Dr Zehra.",
  },
};

const konya5: Lesson = {
  id: "tr-a1-konya-5",
  level: "A1",
  cityId: "tr-konya",
  number: 5,
  title: "At the doctor's",
  minutes: 7,
  goals: ["Understand the doctor", "Understand polite instructions: oturun, açın", "Find out what to do"],
  vocabNote: "In Turkey you address a doctor as doktor hanım (a woman) or doktor bey (a man).",
  vocab: [
    v("trko5-1", "Randevum var.", "I have an appointment.", "Tom at the reception desk of the clinic.", "Listen to Randevum var", p("l5-1")),
    v("trko5-2", "Oturun, lütfen.", "Please sit down.", "Dr Zehra, a calm woman of about fifty in a white coat, points to a chair.", "Listen to Oturun, lütfen", p("l5-2")),
    v("trko5-3", "Ağzınızı açın.", "Open your mouth.", "Murzik opens his mouth wide as the doctor shines a torch.", "Listen to Ağzınızı açın", p("l5-3")),
    v("trko5-4", "Derin nefes alın.", "Take a deep breath.", "The doctor listens to Murzik with a stethoscope.", "Listen to Derin nefes alın", p("l5-4")),
    v("trko5-5", "Grip olmuşsunuz.", "You've got flu.", "Dr Zehra writes something on a patient card.", "Listen to Grip olmuşsunuz", p("l5-5")),
    v("trko5-6", "Dinlenin.", "Get some rest.", "Murzik under a blanket with a book.", "Listen to Dinlenin", p("l5-6")),
    v("trko5-7", "Bol su için.", "Drink plenty of water.", "A glass of water and a jug by the bed.", "Listen to Bol su için", p("l5-7")),
  ],
  dialogue: {
    title: "Dr Zehra",
    note: "Ciddi means “serious”. Ciddi değil — “it's nothing serious”.",
    lines: [
      line("zehra", "Merhaba. Oturun, lütfen. Ne oldu?", "Hello. Please sit down. What's the matter?"),
      line("murzik", "Başım ve boğazım ağrıyor. Ateşim de var.", "I've got a headache and a sore throat. And a temperature."),
      line("zehra", "Ağzınızı açın, lütfen. Şimdi derin nefes alın.", "Open your mouth, please. Now take a deep breath."),
      line("zehra", "Hmm… Grip olmuşsunuz.", "Hmm… You've got flu."),
      line("tom", "Ciddi mi?", "Is it serious?"),
      line("zehra", "Hayır, ciddi değil. Üç gün dinlenin ve bol su için.", "No, it's nothing serious. Rest for three days and drink plenty of water."),
      line("murzik", "Teşekkür ederim, doktor hanım.", "Thank you, doctor."),
    ],
    gist: choice("trko5-d1", "What's wrong with Murzik?", [
      ["He's got flu.", true],
      ["Nothing.", false],
      ["He's broken his paw.", false],
    ]),
  },
  grammar: [
    {
      title: "The doctor uses the polite “you”",
      paragraphs: [
        "A polite instruction is the verb + -in / -ın / -un / -ün: otur → oturun (sit down), aç → açın (open), al → alın (take, breathe in).",
        "“Your” (polite) is the ending -ınız / -iniz: ağzınız — your mouth, ateşiniz — your temperature.",
      ],
      examples: [
        { ru: "Oturun, lütfen.", en: "Please sit down." },
        { ru: "Ateşiniz var mı?", en: "Do you have a temperature?" },
      ],
    },
  ],
  tasks: [
    choice("trko5-t1", "The doctor politely says “Sit down”. How?", [
      ["Oturun.", true],
      ["Otur.", false],
      ["Oturuyorum.", false],
    ], { skill: "grammar" }),
    listen("trko5-t2", "Listen. What does the doctor advise?", "Üç gün dinlenin ve bol su için.", [
      ["Rest for three days and drink plenty of water.", true],
      ["Take medicine for a week.", false],
      ["Go to work.", false],
    ]),
    match("trko5-t3", "Match the pairs.", [
      ["Oturun.", "Sit down."],
      ["Açın.", "Open it."],
      ["Dinlenin.", "Get some rest."],
      ["Ciddi değil.", "It's nothing serious."],
    ], { skill: "words" }),
    spell("trko5-t4", "Spell the word for “doctor”.", "doktor"),
    speak("trko5-t5", "Ne oldu? Nereniz ağrıyor?", "Boğazım ağrıyor ve öksürüyorum.", "I've got a sore throat and a cough.", { help: "Tell the doctor aloud what hurts." }),
    listen("trko5-t6", "Remember the last lesson. What hurts?", "Başım ağrıyor.", [
      ["The head.", true],
      ["The tummy.", false],
      ["The throat.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gece-lambasi",
    itemName: "Night light",
    itemNameRu: "Gece lambası",
    ru: "Yaşasın! Bir gece lambası!",
    en: "Hooray! A night light!",
    a11y: "A little crescent-moon night light glows softly yellow by the bed.",
    image: p("gece-lambasi"),
    steps: ["In the evening Tom puts a night light by the bed.", "It glows like a little moon.", "Murzik feels safe and warm.", "He falls asleep."],
    bridge: "Dr Zehra has written a prescription. “The chemist's is right across the road,” she said.",
  },
};

const konya6: Lesson = {
  id: "tr-a1-konya-6",
  level: "A1",
  cityId: "tr-konya",
  number: 6,
  title: "At the chemist's",
  minutes: 7,
  goals: ["Buy medicine with a prescription", "Understand how to take it: twice a day, after meals", "Wish someone well: Geçmiş olsun!"],
  vocabNote: "Geçmiş olsun — “may it pass” — is what you say to anyone who's ill, and after any kind of trouble. It's like “get well soon”.",
  vocab: [
    v("trko6-1", "eczane", "chemist's, pharmacy", "A pharmacy sign with a red letter E.", "Listen to eczane", p("l6-1")),
    v("trko6-2", "ilaç", "medicine", "Boxes of medicine on a shelf.", "Listen to ilaç", p("l6-2")),
    v("trko6-3", "reçete", "prescription", "Tom hands the pharmacist a prescription.", "Listen to reçete", p("l6-3")),
    v("trko6-4", "Günde iki kez.", "Twice a day.", "Two tablets next to a sun and a moon.", "Listen to Günde iki kez", p("l6-4")),
    v("trko6-5", "Yemekten sonra.", "After meals.", "An empty plate with a tablet beside it.", "Listen to Yemekten sonra", p("l6-5")),
    v("trko6-6", "ağrı kesici", "painkiller", "A small box of tablets with a crossed-out lightning bolt of pain on it.", "Listen to ağrı kesici", p("l6-6")),
    v("trko6-7", "Geçmiş olsun!", "Get well soon!", "The pharmacist smiles and hands over a bag of medicines.", "Listen to Geçmiş olsun", p("l6-7")),
  ],
  dialogue: {
    title: "The chemist's across the road",
    note: "Şurup means “syrup”. Nasıl kullanılıyor? — “How do you take it?”",
    lines: [
      line("tom", "Merhaba. Bu reçete için ilaç alabilir miyim?", "Hello. Can I get the medicine for this prescription?"),
      line("pharmacist", "Tabii. Buyurun: bu şurup ve bu tabletler.", "Of course. Here you are: this syrup and these tablets."),
      line("tom", "Nasıl kullanılıyor?", "How do you take them?"),
      line("pharmacist", "Şurup günde üç kez, yemekten sonra. Tablet günde iki kez.", "The syrup three times a day, after meals. The tablets twice a day."),
      line("tom", "Ağrı kesici de var mı?", "Do you have a painkiller too?"),
      line("pharmacist", "Var. Geçmiş olsun!", "Yes. I hope your friend gets well soon!"),
      line("tom", "Teşekkürler!", "Thanks!"),
    ],
    gist: choice("trko6-d1", "How do you take the syrup?", [
      ["Three times a day after meals.", true],
      ["Twice a day before meals.", false],
      ["Once a day.", false],
    ]),
  },
  grammar: [
    {
      title: "Before and after: -den önce, -den sonra",
      paragraphs: [
        "“After meals” is yemek-ten sonra, “before meals” is yemek-ten önce. The word takes the ending -den / -ten, followed by sonra (after) or önce (before) — the opposite order to English.",
        "“Times a day” is günde … kez: günde iki kez — twice a day, günde bir kez — once a day.",
      ],
      examples: [
        { ru: "Günde üç kez, yemekten sonra.", en: "Three times a day, after meals." },
        { ru: "Uyumadan önce bir tablet.", en: "One tablet before bed." },
      ],
    },
  ],
  tasks: [
    listen("trko6-t1", "Listen. How should you take it?", "Günde iki kez, yemekten önce.", [
      ["Twice a day before meals.", true],
      ["Twice a day after meals.", false],
      ["Three times a day before meals.", false],
    ]),
    choice("trko6-t2", "How do you say “after meals”?", [
      ["yemekten sonra", true],
      ["yemeğe sonra", false],
      ["yemekte sonra", false],
    ], { skill: "grammar" }),
    match("trko6-t3", "Match the pairs.", [
      ["eczane", "pharmacy"],
      ["ilaç", "medicine"],
      ["reçete", "prescription"],
      ["şurup", "syrup"],
    ], { skill: "words" }),
    missing("trko6-t4", "Which letter is missing? (“pharmacy”)", "ec", "ane", "z", ["z", "s", "c"]),
    speak("trko6-t5", "Bu ilaç nasıl kullanılıyor?", "Günde üç kez, yemekten sonra.", "Three times a day, after meals.", { help: "Answer aloud as the pharmacist." }),
    choice("trko6-t6", "The doctor says: Ağzınızı açın. What do you do?", [
      ["Open your mouth.", true],
      ["Sit down.", false],
      ["Take a deep breath.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ihlamur",
    itemName: "Linden tea",
    itemNameRu: "Ihlamur",
    ru: "Yaşasın! Bir kavanoz ıhlamur!",
    en: "Hooray! A jar of linden tea!",
    a11y: "A glass jar of dried linden flowers and a glass of hot tea with honey.",
    image: p("ihlamur"),
    steps: ["The pharmacist adds a jar of dried linden flowers to the bag.", "“Ihlamur için — en iyi ilaç!” — “Drink linden tea — the best medicine!”", "Tom makes the tea with honey.", "Murzik sips it with his eyes closed."],
    bridge: "Three days later Murzik feels much better. And Tom gets an email from a magazine…",
  },
};

const konya7: Lesson = {
  id: "tr-a1-konya-7",
  level: "A1",
  cityId: "tr-konya",
  number: 7,
  title: "I feel better!",
  minutes: 8,
  goals: ["Say you feel better", "Compare: better than yesterday", "Review all the words from Konya"],
  vocabNote: "Neyse ki means “luckily”. Dergi means “magazine”. İş teklifi — “a job offer”.",
  vocab: [
    v("trko7-1", "Daha iyiyim.", "I feel better.", "Murzik sits up in bed, smiling; his cheeks aren't red any more.", "Listen to Daha iyiyim", p("l7-1")),
    v("trko7-2", "Nasılsın şimdi?", "How are you feeling now?", "Dr Zehra looks round the door with a smile.", "Listen to Nasılsın şimdi", p("l7-2")),
    v("trko7-3", "Artık ateşim yok.", "My temperature's gone.", "Murzik shows a thermometer with a normal temperature.", "Listen to Artık ateşim yok", p("l7-3")),
    v("trko7-4", "sağlıklı", "healthy", "Murzik does lively exercises by the window.", "Listen to sağlıklı", p("l7-4")),
    v("trko7-5", "Neyse ki!", "Luckily! Thank goodness!", "Tom breathes a sigh of relief and smiles.", "Listen to Neyse ki", p("l7-5")),
    v("trko7-6", "Bir e-posta geldi!", "An email's come!", "An envelope with little wings on a laptop screen.", "Listen to Bir e-posta geldi", p("l7-6")),
    v("trko7-7", "Bir iş teklifi aldım!", "I've got a job offer!", "Tom jumps up with the laptop in his hands.", "Listen to Bir iş teklifi aldım", p("l7-7")),
  ],
  dialogue: {
    title: "Good news",
    note: "Dr Zehra now uses sen (the friendly “you”) with Murzik: they've become friends. Dergiden — “from the magazine”. Balon fotoğrafları — “photos of hot-air balloons”.",
    lines: [
      line("zehra", "Murzik, nasılsın şimdi?", "Murzik, how are you feeling now?"),
      line("murzik", "Daha iyiyim, teşekkürler! Artık ateşim yok.", "Better, thank you! My temperature's gone."),
      line("zehra", "Neyse ki! Geçmiş olsun.", "Thank goodness! Get well soon."),
      line("tom", "Murzik! Bir e-posta geldi! Dergiden!", "Murzik! An email's come! From the magazine!"),
      line("murzik", "Ne yazıyor?", "What does it say?"),
      line("tom", "Bir iş teklifi aldım! Kapadokya'da, balon fotoğrafları!", "I've got a job offer! In Cappadocia — photos of balloons!"),
      line("murzik", "Harika! Kapadokya'ya gidelim!", "Brilliant! Let's go to Cappadocia!"),
    ],
    gist: choice("trko7-d1", "What does the magazine write to Tom?", [
      ["They're offering him a job in Cappadocia.", true],
      ["They're asking him to come back to London.", false],
      ["They're wishing him a happy birthday.", false],
    ]),
  },
  grammar: [
    {
      title: "Better than: -den daha",
      paragraphs: [
        "Daha iyi means “better”, daha kötü “worse”. Daha iyiyim — I feel better.",
        "“Than” is the ending -den / -dan: Bugün dünden daha iyiyim. — I feel better today than yesterday (literally “today from-yesterday more good-I-am”).",
      ],
      examples: [
        { ru: "Bugün dünden daha iyiyim.", en: "I feel better today than yesterday." },
        { ru: "Konya, Antalya'dan daha soğuk.", en: "Konya is colder than Antalya." },
      ],
    },
  ],
  tasks: [
    listen("trko7-t1", "Audio exam. What does the doctor say?", "Ateşiniz yok, boğazınız iyi. Yarın dışarı çıkabilirsiniz.", [
      ["No temperature, the throat's fine, you can go out tomorrow.", true],
      ["You need to stay in bed for another week.", false],
      ["Take the medicine three times a day.", false],
    ]),
    choice("trko7-t2", "How do you say “I feel better today than yesterday”?", [
      ["Bugün dünden daha iyiyim.", true],
      ["Bugün düne daha iyiyim.", false],
      ["Bugün dün daha iyi.", false],
    ], { skill: "grammar" }),
    match("trko7-t3", "Match the pairs.", [
      ["Daha iyiyim.", "I feel better."],
      ["Neyse ki!", "Luckily!"],
      ["iş teklifi", "job offer"],
      ["dergi", "magazine"],
    ], { skill: "words" }),
    missing("trko7-t4", "Which letter is missing? (“healthy”)", "sa", "lıklı", "ğ", ["ğ", "g", "h"]),
    speak("trko7-t5", "Nasılsın şimdi?", "Daha iyiyim, teşekkürler!", "I feel better, thank you!", { help: "Answer aloud." }),
    script("trko7-t6", "Remember all of Konya. Finish the conversations.", [
      { speaker: "Seller", text: "Ne lazım?" },
      { speaker: "You", answer: "Bana bir atkı lazım.", options: ["Bana bir atkı lazım.", "Bana bir atkıyım.", "Kabin nerede."] },
      { speaker: "Dr Zehra", text: "Nereniz ağrıyor?" },
      { speaker: "You", answer: "Başım ağrıyor.", options: ["Başım ağrıyor.", "Başım ağrı.", "Geçmiş olsun."] },
      { speaker: "Pharmacist", text: "Günde iki kez." },
      { speaker: "You", answer: "Yemekten önce mi, sonra mı?", options: ["Yemekten önce mi, sonra mı?", "Daha küçük var mı?", "Ne renk?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lamba",
    itemName: "Mosaic lamp",
    itemNameRu: "Mozaik lamba",
    ru: "Yaşasın! Bir mozaik lamba!",
    en: "Hooray! A mosaic lamp!",
    a11y: "A hanging lamp of colourful glass mosaic glows with turquoise, red and yellow lights.",
    image: p("lamba"),
    steps: ["Dr Zehra brings a present.", "It's a mosaic lamp — turquoise, like the dome of the Mevlana Museum.", "«Geçmiş olsun, Murzik!» — “Get well soon, Murzik!”", "The room lights up in sparkling colours."],
    bridge: "Tom is expected in Cappadocia. Time to pack!",
  },
};

const story: CityStory = {
  home: {
    name: "A warm room in an old house",
    nameRu: "Eski evde sıcak bir oda",
    image: p("home"),
    a11y: "An empty room in an old house with a stove and thick walls. Snow outside the window and a turquoise dome in the distance. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "lamba",
  welcomeRu: "Merhaba, Konya!",
  welcomeEn: "Hello, Konya!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom in Konya by a turquoise dome. It's cold, and light snow is falling.",
  departureImage: p("departure"),
  departureA11y: "Murzik and Tom, in warm hats and scarves, board a bus.",
  finale: [
    {
      image: p("dome"),
      a11y: "Murzik and Tom in scarves stand by the turquoise dome in light snow. Dr Zehra stands beside them, looking at the postcard. In the distance by the gate: the silhouette of a white cat in a hat.",
      lines: [
        { en: "Before they leave, they go to the turquoise dome. Murzik shows Dr Zehra Grandma's postcard." },
        { ru: "Annem bu kediyi anlatırdı: kubbeyi çizerdi.", en: "My mother used to tell me about this cat, who used to draw the dome." },
        { en: "And by the gate, in the snow, the cat in the hat is standing again. Murzik blinks — and he's gone." },
      ],
    },
    {
      image: p("lamba"),
      a11y: "Murzik walks round his warm room, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his warm room. Tom takes a photo of it for his travel diary." },
        { en: "Murzik takes Dr Zehra's mosaic lamp with him." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Konya tamamlandı!", en: "Konya complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — eighth part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik and Tom board the bus.",
      lines: [
        { ru: "Hoşça kal, Konya!", en: "Bye, Konya!" },
        { ru: "Sıradaki durak: Kapadokya!", en: "Next stop: Cappadocia!" },
      ],
    },
    {
      image: p("road"),
      a11y: "The bus drives across a snowy plain towards distant mountains.",
      lines: [{ ru: "Konya → Kapadokya", en: "Konya → Cappadocia" }],
    },
    {
      image: pic("tr/kapadokya/arrival"),
      a11y: "Murzik and Tom at dawn among the “fairy chimneys” of Cappadocia. Dozens of colourful hot-air balloons in the sky.",
      lines: [
        { ru: "Merhaba, Kapadokya!", en: "Hello, Cappadocia!" },
        { ru: "Balonlar!", en: "Balloons!" },
      ],
    },
  ],
};

export const trKonyaEn = {
  id: "tr-konya",
  name: "Konya",
  nameTr: "Konya",
  lessons: [konya1, konya2, konya3, konya4, konya5, konya6, konya7],
  story,
};
