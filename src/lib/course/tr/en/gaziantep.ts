import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Gaziantep · “What I did” · the past tense in every person, telling a story in order, feelings, zaten / henüz, Tom's photos. English version. */

const p = (name: string) => pic(`tr/gaziantep/${name}`);

const gaziantep1: Lesson = {
  id: "tr-a1-gaziantep-1",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 1,
  title: "What did you do yesterday?",
  minutes: 7,
  goals: ["Ask what someone did", "Talk about yesterday", "Say “I didn't do anything”"],
  vocabNote: "Yaptın — “you did”, yaptım — “I did”. Dün — “yesterday”, dün akşam — “yesterday evening, last night”.",
  vocab: [
    v("trga1-1", "Dün ne yaptın?", "What did you do yesterday?", "Elif, with her plaits, sits on the steps of a copper shop.", "Listen to Dün ne yaptın", p("l1-1")),
    v("trga1-2", "Çarşıya gittim.", "I went to the bazaar.", "Murzik walks through the copper bazaar with a basket.", "Listen to Çarşıya gittim", p("l1-2")),
    v("trga1-3", "Baklava yedim.", "I ate baklava.", "Murzik with baklava crumbs on his whiskers.", "Listen to Baklava yedim", p("l1-3")),
    v("trga1-4", "Ne aldın?", "What did you buy?", "Elif peeps into Murzik's basket.", "Listen to Ne aldın", p("l1-4")),
    v("trga1-5", "Hiçbir şey yapmadım.", "I didn't do anything.", "Tom lies on the sofa with his eyes shut.", "Listen to Hiçbir şey yapmadım", p("l1-5")),
    v("trga1-6", "dün akşam", "yesterday evening", "The bazaar in the evening, with the lamps lit.", "Listen to dün akşam", p("l1-6")),
    v("trga1-7", "bütün gün", "all day", "A clock whose hands race round from morning to evening.", "Listen to bütün gün", p("l1-7")),
  ],
  dialogue: {
    title: "Elif",
    note: "Elif is ten; she's the coppersmith's granddaughter. Dedem — “my grandad”. Bakırcı — “coppersmith”. Ders çalıştım — “I did my homework, I studied”.",
    lines: [
      line("elif", "Merhaba! Ben Elif. Dedem bakırcı. Sen dün ne yaptın?", "Hi! I'm Elif. My grandad's a coppersmith. What did you do yesterday?"),
      line("murzik", "Dün çarşıya gittim. Baklava yedim!", "Yesterday I went to the bazaar. I ate baklava!"),
      line("elif", "Ne aldın?", "What did you buy?"),
      line("murzik", "Biraz pul biber aldım. Sen ne yaptın?", "I bought some red pepper flakes. What did you do?"),
      line("elif", "Ben bütün gün ders çalıştım. Tom ne yaptı?", "I did homework all day. What did Tom do?"),
      line("tom", "Ben mi? Hiçbir şey yapmadım. Uyudum!", "Me? I didn't do anything. I slept!"),
    ],
    gist: choice("trga1-d1", "What did Elif do yesterday?", [
      ["She did homework all day.", true],
      ["She went to the bazaar.", false],
      ["She slept.", false],
    ]),
  },
  grammar: [
    {
      title: "The past: I, you, he",
      paragraphs: [
        "The past tense: gittim (I went), gittin (you went), gitti (he / she went). The ending is -dı / -tı (following vowel harmony), then -m for “I” or -n for “you”.",
        "A question with a question word has no mı: Ne yaptın? Nereye gittin? A yes/no question takes mı: Baklava yedin mi? — Did you eat baklava?",
      ],
      examples: [
        { ru: "Dün akşam film izledim.", en: "I watched a film last night." },
        { ru: "Elif okula gitti.", en: "Elif went to school." },
      ],
    },
  ],
  tasks: [
    choice("trga1-t1", "How do you say “I ate baklava”?", [
      ["Baklava yedim.", true],
      ["Baklava yedin.", false],
      ["Baklava yiyorum.", false],
    ], { skill: "grammar" }),
    listen("trga1-t2", "Listen. What did the speaker do yesterday?", "Dün akşam arkadaşımla yemek yaptım.", [
      ["Cooked with a friend.", true],
      ["Went to the cinema with a friend.", false],
      ["Slept all day.", false],
    ]),
    match("trga1-t3", "Match the pairs.", [
      ["gittim", "I went"],
      ["yedim", "I ate"],
      ["aldın", "you bought"],
      ["yaptı", "he did"],
    ], { skill: "words" }),
    missing("trga1-t4", "Which letter is missing? (“baklava”)", "bak", "ava", "l", ["l", "r", "n"]),
    speak("trga1-t5", "Dün ne yaptın?", "Dün çarşıya gittim ve baklava yedim.", "Yesterday I went to the bazaar and ate baklava.", { help: "Say aloud what you did yesterday." }),
    choice("trga1-t6", "How do you ask “Is there a museum here?”", [
      ["Burada müze var mı?", true],
      ["Burada müze mi?", false],
      ["Müze burada yok mu var?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pul-biber",
    itemName: "Bag of red pepper",
    itemNameRu: "Pul biber",
    ru: "Yaşasın! Pul biber!",
    en: "Hooray! Red pepper flakes!",
    a11y: "A little linen bag of red pepper flakes, tied with string.",
    image: p("pul-biber"),
    steps: ["Murzik brings a bag of pepper back from the bazaar.", "It smells of sunshine and smoke.", "“Az koy, çok acı!” Elif laughs. “Only a little — it's hot!”", "The bag hangs on a hook in his room."],
    bridge: "The next day Elif knocks on the door: “Neredeydin? Seni bekledim!” — “Where were you? I waited for you!”",
  },
};

const gaziantep2: Lesson = {
  id: "tr-a1-gaziantep-2",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 2,
  title: "Where were you?",
  minutes: 7,
  goals: ["Ask: Neredeydin?", "Say where you were and who with", "Know every form of the past: we, you, they"],
  vocabNote: "Neredeydin? — “Where were you?” Evdeydim — “I was at home”. Kiminle? — “Who with?” Tom'la — “with Tom”.",
  vocab: [
    v("trga2-1", "Neredeydin?", "Where were you?", "Elif stands with her hands on her hips.", "Listen to Neredeydin", p("l2-1")),
    v("trga2-2", "Müzedeydim.", "I was at the museum.", "Murzik in front of a huge ancient mosaic.", "Listen to Müzedeydim", p("l2-2")),
    v("trga2-3", "Kiminle?", "Who with?", "Elif tilts her head, curious.", "Listen to Kiminle", p("l2-3")),
    v("trga2-4", "Tom'la gittik.", "I went with Tom.", "Murzik and Tom walk side by side down an old street.", "Listen to Tom'la gittik", p("l2-4")),
    v("trga2-5", "Siz ne gördünüz?", "And what did you see?", "Elif sits down next to them, ready to listen.", "Listen to Siz ne gördünüz", p("l2-5")),
    v("trga2-6", "Çingene Kızı", "“The Gypsy Girl” (a mosaic)", "A famous mosaic: a girl's face with big, sad eyes.", "Listen to Çingene Kızı", p("l2-6")),
    v("trga2-7", "Seni bekledim!", "I waited for you!", "Elif points at the clock.", "Listen to Seni bekledim", p("l2-7")),
  ],
  dialogue: {
    title: "The mosaic",
    note: "Çingene Kızı (“The Gypsy Girl”) is a famous ancient mosaic in Gaziantep's Zeugma Museum. Gözleri — “her eyes”. Takip ediyor — “follow”. Tom'la gittik literally means “we went with Tom” — Turkish says “we” here.",
    lines: [
      line("elif", "Murzik! Neredeydin? Seni bekledim!", "Murzik! Where were you? I waited for you!"),
      line("murzik", "Müzedeydim. Özür dilerim!", "I was at the museum. I'm sorry!"),
      line("elif", "Kiminle?", "Who with?"),
      line("murzik", "Tom'la gittik. Mozaikleri gördük.", "I went with Tom. We saw the mosaics."),
      line("elif", "Çingene Kızı'nı gördünüz mü?", "Did you see “The Gypsy Girl”?"),
      line("tom", "Evet, gördük! Gözleri insanı takip ediyor!", "Yes, we did! Her eyes follow you around!"),
      line("elif", "Evet! Ben de geçen yıl sınıfımla gittim.", "Yes! I went last year with my class."),
    ],
    gist: choice("trga2-d1", "Where was Murzik?", [
      ["At the museum with Tom.", true],
      ["At the bazaar with Elif.", false],
      ["At home on his own.", false],
    ]),
  },
  grammar: [
    {
      title: "The past: every person",
      paragraphs: [
        "Gitmek in the past: gittim (I), gittin (you), gitti (he, she), gittik (we), gittiniz (you, plural or polite), gittiler (they).",
        "“Was” somewhere is -daydım, -deydin…: evdeydim (I was at home), neredeydin? (where were you?), müzedeydik (we were at the museum).",
      ],
      examples: [
        { ru: "Dün Tom'la parktaydık.", en: "Tom and I were in the park yesterday." },
        { ru: "Onlar dün akşam geldiler.", en: "They arrived last night." },
      ],
    },
  ],
  tasks: [
    choice("trga2-t1", "How do you say “we saw”?", [
      ["gördük", true],
      ["gördünüz", false],
      ["gördüler", false],
    ], { skill: "grammar" }),
    listen("trga2-t2", "Listen. Where were the speakers yesterday?", "Dün sinemadaydık.", [
      ["At the cinema.", true],
      ["At the museum.", false],
      ["At home.", false],
    ]),
    match("trga2-t3", "Match the pairs.", [
      ["gittik", "we went"],
      ["gittiniz", "you (plural) went"],
      ["gittiler", "they went"],
      ["Kiminle?", "Who with?"],
    ], { skill: "words" }),
    missing("trga2-t4", "Which letter is missing? (“Where were you?”)", "Nered", "ydin?", "e", ["e", "a", "i"]),
    speak("trga2-t5", "Dün neredeydin?", "Dün evdeydim. Annemle yemek yaptık.", "I was at home yesterday. Mum and I cooked.", { help: "Say aloud where you were yesterday and who with." }),
    listen("trga2-t6", "Remember the last lesson. What's the question?", "Dün ne yaptın?", [
      ["What did you do yesterday?", true],
      ["Where were you yesterday?", false],
      ["What will you do tomorrow?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "masa-ortusu",
    itemName: "Embroidered tablecloth",
    itemNameRu: "Masa örtüsü",
    ru: "Yaşasın! İşlemeli bir masa örtüsü!",
    en: "Hooray! An embroidered tablecloth!",
    a11y: "A white tablecloth embroidered round the edge with pomegranates and pistachio sprigs.",
    image: p("masa-ortusu"),
    steps: ["Elif's grandma embroiders tablecloths.", "She gives one to Murzik, with pomegranates and pistachios round the edge.", "Murzik spreads it on his little table.", "At once the room looks festive."],
    bridge: "Elif begs: “Bana her şeyi anlat! Nasıl başladı?” — “Tell me everything! How did it start?”",
  },
};

const gaziantep3: Lesson = {
  id: "tr-a1-gaziantep-3",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 3,
  title: "How it all began",
  minutes: 7,
  goals: ["Tell a story in order: önce, sonra, sonunda", "Say “suddenly”: birden", "Retell the start of the journey"],
  vocabNote: "Önce — “first”, sonra — “then, after that”, birden — “suddenly”, sonunda — “in the end, finally”.",
  vocab: [
    v("trga3-1", "Önce Paris'teydim.", "First I was in Paris.", "A memory: Murzik on a Paris rooftop, the Eiffel Tower in the distance.", "Listen to Önce Paris'teydim", p("l3-1")),
    v("trga3-2", "Birden bir kartpostal geldi.", "Suddenly a postcard arrived.", "A postcard flies in through the window and Murzik catches it in his paws.", "Listen to Birden bir kartpostal geldi", p("l3-2")),
    v("trga3-3", "Sonra İstanbul'a geldim.", "Then I came to Istanbul.", "A memory: a ferry on the Bosphorus, with seagulls.", "Listen to Sonra İstanbul'a geldim", p("l3-3")),
    v("trga3-4", "Orada Tom'la tanıştım.", "There I met Tom.", "A memory: Tom with his camera, holding out a hand to Murzik on the Kadıköy waterfront.", "Listen to Orada Tom'la tanıştım", p("l3-4")),
    v("trga3-5", "Sonunda buraya geldik.", "And finally we came here.", "Murzik and Elif sit on the steps of the copper shop.", "Listen to Sonunda buraya geldik", p("l3-5")),
    v("trga3-6", "büyükannem", "my grandma", "An old postcard signed “Asya”.", "Listen to büyükannem", p("l3-6")),
    v("trga3-7", "Vay be!", "Wow!", "Elif's eyes and mouth are wide open.", "Listen to Vay be", p("l3-7")),
  ],
  dialogue: {
    title: "A story on the steps",
    note: "Kayboldu — “she disappeared”. Arıyorum — “I'm looking for”. Tanışmak — “to meet (for the first time)”: Tom'la tanıştım — “I met Tom”.",
    lines: [
      line("elif", "Anlat! Her şey nasıl başladı?", "Tell me! How did it all begin?"),
      line("murzik", "Önce Paris'teydim. Büyükannem Asya yıllar önce kayboldu.", "First I was in Paris. My grandma Asya disappeared years ago."),
      line("murzik", "Birden bir kartpostal geldi: «İzimi takip et. — Asya»", "Suddenly a postcard arrived: “Follow my steps. — Asya”"),
      line("elif", "Vay be! Sonra?", "Wow! And then?"),
      line("murzik", "Sonra İstanbul'a geldim. Orada Tom'la tanıştım. Sonra Bursa'ya, İzmir'e gittik…", "Then I came to Istanbul. There I met Tom. Then we went to Bursa, to Izmir…"),
      line("murzik", "Sonunda buraya geldik. Ve hâlâ onu arıyorum.", "And finally we came here. And I'm still looking for her."),
    ],
    gist: choice("trga3-d1", "What did the first postcard say?", [
      ["“Follow my steps. — Asya”", true],
      ["“Happy birthday, little one”", false],
      ["“Come to Konya. — Asya”", false],
    ]),
  },
  grammar: [
    {
      title: "Telling a story in order",
      paragraphs: [
        "Önce — first, sonra — then, birden — suddenly, sonunda — finally. These words usually go at the start of the sentence.",
        "“After something” is -den sonra: kahvaltıdan sonra (after breakfast). “Before something” is -den önce: yemekten önce (before the meal). Notice the ending: Turkish says “from breakfast after”.",
      ],
      examples: [
        { ru: "Önce kahvaltı yaptık, sonra müzeye gittik.", en: "First we had breakfast, then we went to the museum." },
        { ru: "Okuldan sonra Elif dedesine gidiyor.", en: "After school Elif goes to her grandad's." },
      ],
    },
  ],
  tasks: [
    choice("trga3-t1", "How do you say “after breakfast”?", [
      ["kahvaltıdan sonra", true],
      ["kahvaltı sonra", false],
      ["kahvaltıda sonra", false],
    ], { skill: "grammar" }),
    listen("trga3-t2", "Listen. What did they do first?", "Önce çay içtik, sonra çarşıya gittik.", [
      ["Drank tea.", true],
      ["Went to the bazaar.", false],
      ["Went to the museum.", false],
    ]),
    match("trga3-t3", "Match the pairs.", [
      ["önce", "first"],
      ["sonra", "then"],
      ["birden", "suddenly"],
      ["sonunda", "finally"],
    ], { skill: "words" }),
    spell("trga3-t4", "Spell the word for “suddenly”.", "birden"),
    speak("trga3-t5", "Bugün sabah ne yaptın?", "Önce kahvaltı yaptım, sonra işe gittim.", "First I had breakfast, then I went to work.", { help: "Say aloud, in order, what you did this morning." }),
    choice("trga3-t6", "How do you ask “Where were you?”", [
      ["Neredeydin?", true],
      ["Nereye gittin mi?", false],
      ["Nerede misin?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fistik",
    itemName: "Bag of pistachios",
    itemNameRu: "Fıstık",
    ru: "Yaşasın! Antep fıstığı!",
    en: "Hooray! Pistachios!",
    a11y: "A cloth bag full of bright green pistachios.",
    image: p("fistik"),
    steps: ["Elif listens to the story, nibbling pistachios.", "“Antep fıstığı dünyanın en iyisi!” — “Antep pistachios are the best in the world!”", "She fills a whole bag for Murzik.", "The bag goes on the tablecloth."],
    bridge: "Elif asks: “Kartpostal gelince ne hissettin?” — “How did you feel when the postcard came?”",
  },
};

const gaziantep4: Lesson = {
  id: "tr-a1-gaziantep-4",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 4,
  title: "How did you feel?",
  minutes: 7,
  goals: ["Talk about feelings in the past", "Say “I was scared”, “I was delighted”", "Ask: Ne hissettin?"],
  vocabNote: "In Turkish, feelings in the past sound like actions: korktum — “I got scared”, sevindim — “I was glad”, şaşırdım — “I was surprised”.",
  vocab: [
    v("trga4-1", "Ne hissettin?", "How did you feel?", "Elif listens, her chin on her fist.", "Listen to Ne hissettin", p("l4-1")),
    v("trga4-2", "Çok şaşırdım.", "I was very surprised.", "A memory: Murzik holding the postcard, eyes like saucers.", "Listen to Çok şaşırdım", p("l4-2")),
    v("trga4-3", "Çok mutlu oldum.", "I was very happy.", "A memory: Murzik jumping for joy.", "Listen to Çok mutlu oldum", p("l4-3")),
    v("trga4-4", "Biraz korktum.", "I was a bit scared.", "A memory: Murzik by the plane, ears flat.", "Listen to Biraz korktum", p("l4-4")),
    v("trga4-5", "Üzüldüm.", "I was sad.", "A memory: Murzik alone at the window in the rain.", "Listen to Üzüldüm", p("l4-5")),
    v("trga4-6", "Heyecanlandım.", "I got excited.", "A memory: Murzik on the doorstep with his suitcase.", "Listen to Heyecanlandım", p("l4-6")),
    v("trga4-7", "Çok cesursun!", "You're very brave!", "Elif looks at Murzik in admiration.", "Listen to Çok cesursun", p("l4-7")),
  ],
  dialogue: {
    title: "How it felt",
    note: "Uçak — “plane”. İlk defa — “for the first time”. Cesur — “brave”. Gelince — “when (it) came”.",
    lines: [
      line("elif", "Kartpostal gelince ne hissettin?", "How did you feel when the postcard came?"),
      line("murzik", "Önce çok şaşırdım. Sonra çok sevindim!", "First I was very surprised. Then I was really glad!"),
      line("elif", "Korktun mu?", "Were you scared?"),
      line("murzik", "Biraz korktum. İlk defa uçağa bindim!", "A bit. It was my first time on a plane!"),
      line("murzik", "Bavulum kayboldu, çok üzüldüm. Ama sonra bulundu.", "My suitcase got lost and I was very sad. But then it was found."),
      line("elif", "Çok cesursun, Murzik!", "You're very brave, Murzik!"),
    ],
    gist: choice("trga4-d1", "How did Murzik feel when the postcard came?", [
      ["First surprised, then glad.", true],
      ["First scared, then sad.", false],
      ["He didn't feel anything.", false],
    ]),
  },
  grammar: [
    {
      title: "Feelings: the past instead of the present",
      paragraphs: [
        "When a feeling has already arrived, Turkish often uses the past: Acıktım — “I've become hungry” (that is, “I'm hungry”), Yoruldum — “I'm tired”, Anladım — “I understand, got it”.",
        "That's why “I'm very pleased” is in the past too: Çok sevindim! Memnun oldum!",
      ],
      examples: [
        { ru: "Acıktım! Yemek var mı?", en: "I'm hungry! Is there any food?" },
        { ru: "Seni gördüğüme çok sevindim.", en: "I'm so glad to see you." },
      ],
    },
  ],
  tasks: [
    choice("trga4-t1", "How do you say “I'm tired”?", [
      ["Yoruldum.", true],
      ["Yoruluyorum.", false],
      ["Yorgunum değil.", false],
    ], { skill: "grammar" }),
    listen("trga4-t2", "Listen. How did the speaker feel?", "Sınavı geçtim, çok sevindim!", [
      ["Delighted.", true],
      ["Scared.", false],
      ["Sad.", false],
    ]),
    match("trga4-t3", "Match the pairs.", [
      ["korktum", "I got scared"],
      ["sevindim", "I was glad"],
      ["şaşırdım", "I was surprised"],
      ["üzüldüm", "I was sad"],
    ], { skill: "words" }),
    missing("trga4-t4", "Which letter is missing? (“I was surprised”)", "Şa", "ırdım", "ş", ["ş", "s", "z"]),
    speak("trga4-t5", "İlk defa uçağa bindin. Ne hissettin?", "Biraz korktum, ama çok heyecanlandım.", "I was a bit scared, but very excited.", { help: "Say aloud how you felt." }),
    choice("trga4-t6", "How do you say “First we drank tea, then we went to the bazaar”?", [
      ["Önce çay içtik, sonra çarşıya gittik.", true],
      ["Sonra çay içtik, önce çarşıya gittik.", false],
      ["Önce çay içiyoruz, sonra çarşı.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "elifin-resmi",
    itemName: "Elif's drawing",
    itemNameRu: "Elif'in resmi",
    ru: "Yaşasın! Elif'in resmi!",
    en: "Hooray! Elif's drawing!",
    a11y: "A child's drawing in coloured pencils: a ginger kitten with a suitcase walks along a path of postcards, with the outline of a cat ahead.",
    image: p("elifin-resmi"),
    steps: ["Elif draws while Murzik talks.", "In the picture a ginger kitten with a suitcase walks along a path of postcards.", "“Bu sensin!” — “That's you!”", "Murzik hangs the drawing on the wall."],
    bridge: "Elif asks: “Büyükanneni buldun mu?” — “Have you found your grandma?” Murzik sighs: “Henüz değil…” — “Not yet…”",
  },
};

const gaziantep5: Lesson = {
  id: "tr-a1-gaziantep-5",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 5,
  title: "Already, or not yet?",
  minutes: 7,
  goals: ["Say “already”: zaten", "Say “not yet”: henüz … -medi", "Ask: … bitti mi?"],
  vocabNote: "Zaten — “already, anyway”: Zaten biliyorum — “I know that already”. Henüz — “(not) yet”, usually with a negative: Henüz bitmedi — “It hasn't finished yet”.",
  vocab: [
    v("trga5-1", "Büyükanneni buldun mu?", "Have you found your grandma?", "Elif gently touches Murzik's paw.", "Listen to Büyükanneni buldun mu", p("l5-1")),
    v("trga5-2", "Henüz bulmadım.", "I haven't found her yet.", "Murzik gazes at the sunset over the bazaar.", "Listen to Henüz bulmadım", p("l5-2")),
    v("trga5-3", "Zaten biliyorum.", "I know that already.", "Elif waves a hand: “I know, I know!”", "Listen to Zaten biliyorum", p("l5-3")),
    v("trga5-4", "Ödevin bitti mi?", "Have you finished your homework?", "The coppersmith grandad looks into Elif's exercise book.", "Listen to Ödevin bitti mi", p("l5-4")),
    v("trga5-5", "Henüz bitmedi.", "It's not finished yet.", "Elif's exercise book still has lots of empty lines.", "Listen to Henüz bitmedi", p("l5-5")),
    v("trga5-6", "Zaten yedim.", "I've already eaten.", "Murzik pats his round tummy.", "Listen to Zaten yedim", p("l5-6")),
    v("trga5-7", "Hikâye henüz bitmedi!", "The story isn't over yet!", "Murzik clenches his paw, determined.", "Listen to Hikâye henüz bitmedi", p("l5-7")),
  ],
  dialogue: {
    title: "Not the end yet",
    note: "Dede — “grandad”. Ödev — “homework”. Kebap — “kebab”. Notice: where English says “have you found…?”, Turkish simply uses the past: buldun mu?",
    lines: [
      line("elif", "Büyükanneni buldun mu?", "Have you found your grandma?"),
      line("murzik", "Henüz bulmadım… Ama hikâye henüz bitmedi!", "Not yet… But the story isn't over yet!"),
      line("tom", "Elif, ödevin bitti mi? Deden soruyor.", "Elif, have you finished your homework? Your grandad's asking."),
      line("elif", "Henüz bitmedi. Ama matematiği zaten biliyorum!", "Not yet. But I know my maths already!"),
      line("tom", "Kebap yiyelim mi?", "Shall we have some kebab?"),
      line("murzik", "Ben zaten yedim! Baklava…", "I've already eaten! Baklava…"),
    ],
    gist: choice("trga5-d1", "Has Murzik found his grandma?", [
      ["Not yet.", true],
      ["Yes, in Van.", false],
      ["Yes, in Gaziantep.", false],
    ]),
  },
  grammar: [
    {
      title: "Zaten and henüz",
      paragraphs: [
        "Zaten — “already, anyway”: Zaten yedim. — I've already eaten. Zaten biliyorum. — I know that already.",
        "Henüz — “(not) yet”, usually with a negative verb. Henüz yemedim. — I haven't eaten yet. Henüz gelmedi. — He hasn't come yet. The short answer is Henüz değil. — Not yet.",
        "Turkish has no separate “have done” tense: the ordinary past covers both “I ate” and “I have eaten”.",
      ],
      examples: [
        { ru: "Tom henüz uyanmadı.", en: "Tom hasn't woken up yet." },
        { ru: "Bu filmi zaten izledim.", en: "I've already seen this film." },
      ],
    },
  ],
  tasks: [
    choice("trga5-t1", "How do you say “I haven't eaten yet”?", [
      ["Henüz yemedim.", true],
      ["Henüz yedim.", false],
      ["Zaten yemedim.", false],
    ], { skill: "grammar" }),
    listen("trga5-t2", "Listen. Has the bus come?", "Otobüs henüz gelmedi.", [
      ["Not yet.", true],
      ["Yes, it has.", false],
      ["It isn't coming.", false],
    ]),
    match("trga5-t3", "Match the pairs.", [
      ["zaten", "already, anyway"],
      ["henüz değil", "not yet"],
      ["bitti", "it's finished"],
      ["ödev", "homework"],
    ], { skill: "words" }),
    spell("trga5-t4", "Spell the word for “homework”.", "ödev"),
    speak("trga5-t5", "Kahvaltı yaptın mı?", "Evet, zaten yaptım.", "Yes, I've already had it.", { help: "Answer aloud using zaten or henüz." }),
    listen("trga5-t6", "Remember the last lesson. How did Murzik feel?", "Çok şaşırdım.", [
      ["Very surprised.", true],
      ["Very tired.", false],
      ["Very scared.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gezi-gunlugu",
    itemName: "Travel diary",
    itemNameRu: "Gezi günlüğü",
    ru: "Yaşasın! Bir gezi günlüğü!",
    en: "Hooray! A travel diary!",
    a11y: "A thick diary with a leather cover embossed with a compass; inside, blank pages.",
    image: p("gezi-gunlugu"),
    steps: ["Tom hands Murzik a thick diary.", "“Hikâyeni yaz. Henüz bitmedi!” — “Write your story down. It isn't over yet!”", "On the first page Murzik writes: “Paris”.", "The diary goes next to Elif's drawing."],
    bridge: "In the evening Elif asks: “Fotoğraflarını göster!” — “Show me your photos!”",
  },
};

const gaziantep6: Lesson = {
  id: "tr-a1-gaziantep-6",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 6,
  title: "Do you remember?",
  minutes: 7,
  goals: ["Ask: Hatırlıyor musun?", "Show and describe a photo", "Say “I didn't notice”"],
  vocabNote: "Fark etmek — “to notice”. Fark etmedim — “I didn't notice”. Tesadüf — “coincidence, chance”.",
  vocab: [
    v("trga6-1", "Hatırlıyor musun?", "Do you remember?", "Tom shows a seaside photo on his camera screen.", "Listen to Hatırlıyor musun", p("l6-1")),
    v("trga6-2", "Bu fotoğrafı İzmir'de çektim.", "I took this photo in Izmir.", "A photo of the Izmir seafront at sunset.", "Listen to Bu fotoğrafı İzmir'de çektim", p("l6-2")),
    v("trga6-3", "Bak, yine o!", "Look, it's him again!", "Elif jabs a finger at the corner of the photo.", "Listen to Bak, yine o", p("l6-3")),
    v("trga6-4", "Her fotoğrafta var!", "He's in every photo!", "A fan of photos on the table; in each one, a tiny white cat in a hat.", "Listen to Her fotoğrafta var", p("l6-4")),
    v("trga6-5", "Hiç fark etmedim.", "I didn't notice at all.", "Tom clutches his head.", "Listen to Hiç fark etmedim", p("l6-5")),
    v("trga6-6", "Bu tesadüf değil.", "This is no coincidence.", "Murzik looks at the photos, serious.", "Listen to Bu tesadüf değil", p("l6-6")),
    v("trga6-7", "Bizi takip ediyor.", "He's following us.", "The shadow of a cat in a hat on the wall.", "Listen to Bizi takip ediyor", p("l6-7")),
  ],
  dialogue: {
    title: "Tom's photos",
    note: "Fotoğraf çekmek — “to take a photo”: çektim — “I took”. Köşede — “in the corner”.",
    lines: [
      line("tom", "Murzik, bu fotoğrafı hatırlıyor musun? İzmir'de çektim.", "Murzik, do you remember this photo? I took it in Izmir."),
      line("elif", "Bak! Köşede bir kedi var. Şapkalı!", "Look! There's a cat in the corner. In a hat!"),
      line("tom", "Bu da İstanbul… Bak, yine o!", "And this is Istanbul… Look, it's him again!"),
      line("murzik", "Bursa, Kapadokya, Trabzon… Her fotoğrafta var!", "Bursa, Cappadocia, Trabzon… He's in every photo!"),
      line("tom", "Hiç fark etmedim!", "I didn't notice him in these photos at all!"),
      line("murzik", "Bu tesadüf değil, Tom. Bizi takip ediyor.", "This is no coincidence, Tom. He's following us."),
    ],
    gist: choice("trga6-d1", "What did Elif spot in Tom's photos?", [
      ["The cat in the hat in every photo.", true],
      ["Grandma Asya.", false],
      ["The lost suitcase.", false],
    ]),
  },
  grammar: [
    {
      title: "Didn't do: a review",
      paragraphs: [
        "The negative in the past: fark et-me-di-m (I didn't notice), gör-me-di-k (we didn't see), gel-me-di-ler (they didn't come). The -me- / -ma- goes straight after the verb stem.",
        "Hiç with a negative means “not at all, never”: Hiç görmedim. — I've never seen it. Hiç fark etmedik. — We didn't notice at all.",
      ],
      examples: [
        { ru: "Onu hiç görmedik.", en: "We've never seen him." },
        { ru: "Elif ödevini unutmadı.", en: "Elif didn't forget her homework." },
      ],
    },
  ],
  tasks: [
    choice("trga6-t1", "How do you say “We've never seen it”?", [
      ["Hiç görmedik.", true],
      ["Hiç gördük.", false],
      ["Hiç görmüyoruz değil.", false],
    ], { skill: "grammar" }),
    listen("trga6-t2", "Listen. Where was the photo taken?", "Bu fotoğrafı Antalya'da çektim.", [
      ["In Antalya.", true],
      ["In Ankara.", false],
      ["In Izmir.", false],
    ]),
    match("trga6-t3", "Match the pairs.", [
      ["fark etmek", "to notice"],
      ["tesadüf", "coincidence"],
      ["köşede", "in the corner"],
      ["yine", "again"],
    ], { skill: "words" }),
    missing("trga6-t4", "Which letter is missing? (“photo”)", "fo", "oğraf", "t", ["t", "d", "f"]),
    speak("trga6-t5", "Bu fotoğrafı nerede çektin?", "Bu fotoğrafı İstanbul'da çektim.", "I took this photo in Istanbul.", { help: "Say aloud where you took a photo." }),
    choice("trga6-t6", "How do you say “Not yet”?", [
      ["Henüz değil.", true],
      ["Zaten değil.", false],
      ["Henüz var.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fotograf-albumu",
    itemName: "Photo album",
    itemNameRu: "Fotoğraf albümü",
    ru: "Yaşasın! Bir fotoğraf albümü!",
    en: "Hooray! A photo album!",
    a11y: "A big photo album with card pages, holding photos from every Turkish city.",
    image: p("fotograf-albumu"),
    steps: ["Tom prints his photos at a photo shop in the bazaar.", "Murzik sticks them into a big album.", "Under each photo he writes the name of the city.", "And in the corner of every one — him. The cat in the hat."],
    bridge: "Tomorrow Murzik will tell the whole story — to Elif's grandad.",
  },
};

const gaziantep7: Lesson = {
  id: "tr-a1-gaziantep-7",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 7,
  title: "The whole story",
  minutes: 8,
  goals: ["Tell a story in order in the past", "Answer questions about the journey", "Review all the words from Gaziantep"],
  vocabNote: "Yolculuk — “journey, trip”. Şimdiye kadar — “so far, up to now”.",
  vocab: [
    v("trga7-1", "Şimdiye kadar on üç şehir gördüm.", "So far I've seen thirteen cities.", "A map of Turkey with paw-print flags on every city.", "Listen to Şimdiye kadar on üç şehir gördüm", p("l7-1")),
    v("trga7-2", "En çok hangi şehri sevdin?", "Which city did you like best?", "Elif's grandad, in a leather apron, asks Murzik.", "Listen to En çok hangi şehri sevdin", p("l7-2")),
    v("trga7-3", "Hepsini sevdim!", "I liked them all!", "Murzik flings his paws wide as if hugging the whole world.", "Listen to Hepsini sevdim", p("l7-3")),
    v("trga7-4", "yolculuk", "journey", "Murzik's suitcase, covered in city stickers.", "Listen to yolculuk", p("l7-4")),
    v("trga7-5", "Çok şey öğrendim.", "I've learnt a lot.", "Murzik leafs through his travel diary.", "Listen to Çok şey öğrendim", p("l7-5")),
    v("trga7-6", "bakır tepsi", "copper tray", "A gleaming copper tray with a pomegranate pattern.", "Listen to bakır tepsi", p("l7-6")),
    v("trga7-7", "Yolun açık olsun!", "Have a safe journey!", "Elif's grandad rests his hand on Murzik's head.", "Listen to Yolun açık olsun", p("l7-7")),
  ],
  dialogue: {
    title: "The coppersmith grandad",
    note: "Elif's grandad is a coppersmith; Elif passes on his words. Sabahtan akşama kadar — “from morning till evening”. Yolun açık olsun — literally “may your road be open”. Diyor ki — “he says (that)”.",
    lines: [
      line("elif", "Dedem soruyor: En çok hangi şehri sevdin?", "Grandad's asking: which city did you like best?"),
      line("murzik", "Hepsini sevdim! Önce İstanbul'u gördüm, sonra denizi, sonra dağları…", "I liked them all! First I saw Istanbul, then the sea, then the mountains…"),
      line("murzik", "Çok şey öğrendim. Ama büyükannemi henüz bulmadım.", "I've learnt a lot. But I haven't found my grandma yet."),
      line("elif", "Dedem bunu senin için yaptı. Sabahtan akşama kadar çalıştı!", "Grandad made this for you. He worked from morning till evening!"),
      line("murzik", "Bir bakır tepsi! Çok teşekkür ederim!", "A copper tray! Thank you so much!"),
      line("elif", "Dedem diyor ki: Yolun açık olsun!", "Grandad says: have a safe journey!"),
    ],
    gist: choice("trga7-d1", "What did Elif's grandad make for Murzik?", [
      ["A copper tray.", true],
      ["A copper teapot.", false],
      ["A photo album.", false],
    ]),
  },
  grammar: [
    {
      title: "Telling a story in the past: all together",
      paragraphs: [
        "To tell a story you need the past tense (gittim, gördük), order words (önce, sonra, birden, sonunda) and feelings (sevindim, korktum).",
        "Önce Paris'teydim. Birden bir kartpostal geldi. Çok şaşırdım. Sonra Tom'la yola çıktık. Sonunda buraya geldik.",
      ],
      examples: [
        { ru: "Önce Ankara'ya gittik, sonra Trabzon'a.", en: "First we went to Ankara, then to Trabzon." },
        { ru: "Birden yağmur başladı ve çok üzüldük.", en: "Suddenly it started raining and we were very upset." },
      ],
    },
  ],
  tasks: [
    listen("trga7-t1", "Audio exam. What's the story about?", "Önce Van'daydık. Sonra otobüsle buraya geldik. Birden Elif'le tanıştık. Çok sevindim!", [
      ["They were in Van, came here by bus and met Elif.", true],
      ["They were in Trabzon, flew in and lost a suitcase.", false],
      ["They were in Van, went to a museum and saw a mosaic.", false],
    ]),
    choice("trga7-t2", "How do you say “They came yesterday”?", [
      ["Dün geldiler.", true],
      ["Dün geldik.", false],
      ["Dün geliyorlar.", false],
    ], { skill: "grammar" }),
    match("trga7-t3", "Match the pairs.", [
      ["yolculuk", "journey"],
      ["bakır", "copper"],
      ["öğrendim", "I learnt"],
      ["hepsini", "all of them"],
    ], { skill: "words" }),
    spell("trga7-t4", "Spell the word for “tray”.", "tepsi"),
    speak("trga7-t5", "Geçen yıl nereye gittin?", "Geçen yıl denize gittim. Çok güzeldi!", "Last year I went to the seaside. It was lovely!", { help: "Talk aloud about a trip you took." }),
    script("trga7-t6", "Remember all of Gaziantep. Finish the conversations.", [
      { speaker: "Elif", text: "Dün ne yaptın?" },
      { speaker: "You", answer: "Önce müzeye gittim, sonra baklava yedim.", options: ["Önce müzeye gittim, sonra baklava yedim.", "Önce müzeye gidiyorum, sonra baklava.", "Henüz değil."] },
      { speaker: "Elif", text: "Kiminle gittin?" },
      { speaker: "You", answer: "Tom'la gittik.", options: ["Tom'la gittik.", "Tom gittik.", "Tom'la gittiler."] },
      { speaker: "Elif", text: "Büyükanneni buldun mu?" },
      { speaker: "You", answer: "Henüz bulmadım.", options: ["Henüz bulmadım.", "Henüz buldum.", "Zaten bulmadım."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bakir-tepsi",
    itemName: "Copper tray",
    itemNameRu: "Bakır tepsi",
    ru: "Yaşasın! Bir bakır tepsi!",
    en: "Hooray! A copper tray!",
    a11y: "A gleaming handmade copper tray. Pomegranates are hammered round the edge, and in the middle is a little ginger kitten.",
    image: p("bakir-tepsi"),
    steps: ["Elif's grandad tapped away with his little hammer all day.", "Round the edge of the tray — pomegranates.", "And in the middle — a little ginger kitten!", "Murzik wraps the tray in the tablecloth and packs it in his suitcase."],
    bridge: "The last A1 city is Mardin. Tom's friend is waiting there… and maybe an answer, too.",
  },
};

const story: CityStory = {
  home: {
    name: "A room above the copper bazaar",
    nameRu: "Bakırcılar Çarşısı'nın üstünde bir oda",
    image: p("home"),
    a11y: "An empty stone-walled room above the copper bazaar. The tapping of little hammers drifts up from below. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "bakir-tepsi",
  welcomeRu: "Merhaba, Gaziantep!",
  welcomeEn: "Hello, Gaziantep!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom in Gaziantep's copper bazaar: shiny copper jugs and trays, and a craftsman tapping with a little hammer.",
  departureImage: p("departure"),
  departureA11y: "Elif and her grandad in his leather apron wave goodbye outside the copper shop.",
  finale: [
    {
      image: p("photos"),
      a11y: "Night. Murzik sits over the open photo album. In the corner of every photo is a white cat in a hat. The last page is empty.",
      lines: [
        { en: "At night Murzik leafs through the album again." },
        { en: "Istanbul, Bursa, Izmir, Cappadocia, Trabzon… He's in every photo." },
        { ru: "Kimsin sen?", en: "Who are you?" },
      ],
    },
    {
      image: p("bakir-tepsi"),
      a11y: "Murzik walks round his room above the copper bazaar, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his room above the bazaar. Tom takes a photo of it for the magazine." },
        { en: "Murzik takes the copper tray with the ginger kitten with him." },
        { en: "Elif's drawing goes inside the travel diary." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Gaziantep tamamlandı!", en: "Gaziantep complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — thirteenth part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Elif waves goodbye.",
      lines: [
        { ru: "Hoşça kal, Elif!", en: "Bye, Elif!" },
        { ru: "Sıradaki durak: Mardin!", en: "Next stop: Mardin!" },
      ],
    },
    {
      image: p("road"),
      a11y: "The bus heads east across a yellow plain towards a town on a mountain.",
      lines: [{ ru: "Gaziantep → Mardin", en: "Gaziantep → Mardin" }],
    },
    {
      image: pic("tr/mardin/arrival"),
      a11y: "Murzik and Tom in front of Mardin: honey-coloured stone houses climb the mountainside in steps, with an endless plain below.",
      lines: [
        { ru: "Merhaba, Mardin!", en: "Hello, Mardin!" },
        { ru: "Bütün şehir taştan!", en: "The whole town is made of stone!" },
      ],
    },
  ],
};

export const trGaziantepEn = {
  id: "tr-gaziantep",
  name: "Gaziantep",
  nameTr: "Gaziantep",
  lessons: [gaziantep1, gaziantep2, gaziantep3, gaziantep4, gaziantep5, gaziantep6, gaziantep7],
  story,
};
