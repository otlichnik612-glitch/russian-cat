import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, fill, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Pamukkale · “Time and plans” · telling the time, days of the week, the bus, being late, invitations, yesterday, plans. English version. */

const p = (name: string) => pic(`tr/pamukkale/${name}`);

const pamukkale1: Lesson = {
  id: "tr-a1-pamukkale-1",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 1,
  title: "What time is it?",
  minutes: 7,
  goals: ["Ask what time it is", "Tell the time: three o'clock, half past three", "Name the times of day"],
  vocabNote: "Buçuk means “and a half”. Turks say “three and a half” — the same hour as English “half past three”.",
  vocab: [
    v("trpm1-1", "Saat kaç?", "What time is it?", "Tom looks at his empty wrist and raises his eyebrows.", "Listen to Saat kaç", p("l1-1")),
    v("trpm1-2", "Saat üç.", "It's three o'clock.", "A round clock on the wall shows exactly three.", "Listen to Saat üç", p("l1-2")),
    v("trpm1-3", "Saat üç buçuk.", "It's half past three.", "The clock shows half past three: the big hand points down.", "Listen to Saat üç buçuk", p("l1-3")),
    v("trpm1-4", "sabah", "morning", "The white terraces in soft morning light, with the sun rising above them.", "Listen to sabah", p("l1-4")),
    v("trpm1-5", "öğlen", "noon, midday", "The sun high overhead, short shadows, Murzik under a parasol.", "Listen to öğlen", p("l1-5")),
    v("trpm1-6", "akşam", "evening", "A pink evening sky over the white slopes.", "Listen to akşam", p("l1-6")),
    v("trpm1-7", "gece", "night", "A starry night over the guesthouse, with a light on in the window.", "Listen to gece", p("l1-7")),
  ],
  dialogue: {
    title: "Morning at the guesthouse",
    note: "Kahvaltı means “breakfast”. Gün batımı means “sunset”. Güzelmiş — “they say it's beautiful”.",
    lines: [
      line("tom", "Selin, saat kaç?", "Selin, what time is it?"),
      line("selin", "Saat yedi buçuk. Kahvaltı hazır!", "Half past seven. Breakfast is ready!"),
      line("murzik", "Sabah çok güzel! Teraslar ne zaman açık?", "What a lovely morning! When are the terraces open?"),
      line("selin", "Sabah sekizde açılıyor.", "They open at eight in the morning."),
      line("tom", "Akşam da gidelim mi? Gün batımı çok güzelmiş.", "Shall we go in the evening too? They say the sunset is beautiful."),
      line("selin", "Evet! Akşam çok güzel. Gece de yıldızlar var.", "Yes! It's lovely in the evening. And at night there are stars."),
    ],
    gist: choice("trpm1-d1", "What time is it now?", [
      ["Half past seven.", true],
      ["Eight o'clock.", false],
      ["Seven o'clock.", false],
    ]),
  },
  grammar: [
    {
      title: "Saat kaç? — Saat + a number",
      paragraphs: [
        "To tell the time, say saat (hour, clock) and a number: Saat üç. — It's three o'clock. Saat on iki. — It's twelve o'clock.",
        "Half is buçuk: Saat üç buçuk — literally “three and a half”, which is half past three (3:30).",
      ],
      examples: [
        { ru: "Saat kaç? — Saat dokuz.", en: "What time is it? — Nine o'clock." },
        { ru: "Saat yedi buçuk.", en: "It's half past seven." },
      ],
    },
  ],
  tasks: [
    listen("trpm1-t1", "Listen. What time is it?", "Saat dört buçuk.", [
      ["4:30", true],
      ["3:30", false],
      ["4:00", false],
    ]),
    match("trpm1-t2", "Match the pairs.", [
      ["sabah", "morning"],
      ["öğlen", "noon"],
      ["akşam", "evening"],
      ["gece", "night"],
    ], { skill: "words" }),
    choice("trpm1-t3", "How do you say “half past two” (2:30)?", [
      ["Saat iki buçuk.", true],
      ["Saat üç buçuk.", false],
      ["Saat buçuk iki.", false],
    ], { skill: "grammar" }),
    missing("trpm1-t4", "Which letter is missing? (“and a half”)", "bu", "uk", "ç", ["ç", "c", "ş"]),
    speak("trpm1-t5", "Saat kaç?", "Saat on bir.", "It's eleven o'clock.", { help: "Look at a clock and say the time aloud." }),
    choice("trpm1-t6", "How do you say “We're all here”?", [
      ["Hepimiz buradayız.", true],
      ["Hepimiz buradasın.", false],
      ["Hepimiz buradayım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "calar-saat",
    itemName: "Alarm clock",
    itemNameRu: "Çalar saat",
    ru: "Yaşasın! Bir çalar saat!",
    en: "Hooray! An alarm clock!",
    a11y: "A round tin alarm clock with two bells stands on the bedside table.",
    image: p("calar-saat"),
    steps: ["Selin brings an old alarm clock.", "“Sabah erken kalkın!” — “Get up early!”", "Murzik puts it by his bed.", "Tick-tock!"],
    bridge: "Selin asks: “How many days are you staying?” And what day is it today, anyway?",
  },
};

const pamukkale2: Lesson = {
  id: "tr-a1-pamukkale-2",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 2,
  title: "What day is it today?",
  minutes: 7,
  goals: ["Name the days of the week", "Say “today”, “tomorrow”, “yesterday”", "Ask what day it is"],
  vocabNote: "Remember pazar — “market”? It's also “Sunday”. Cumartesi is Saturday — literally “after Friday” (cuma is Friday).",
  vocab: [
    v("trpm2-1", "Bugün günlerden ne?", "What day is it today?", "Murzik stands in front of a calendar, scratching his head.", "Listen to Bugün günlerden ne", p("l2-1")),
    v("trpm2-2", "pazartesi, salı, çarşamba", "Monday, Tuesday, Wednesday", "Three calendar pages in a row.", "Listen to pazartesi, salı, çarşamba", p("l2-2")),
    v("trpm2-3", "perşembe, cuma", "Thursday, Friday", "Two more calendar pages, with a star on Friday.", "Listen to perşembe, cuma", p("l2-3")),
    v("trpm2-4", "cumartesi, pazar", "Saturday, Sunday", "The last two pages, with little suns on them — the weekend.", "Listen to cumartesi, pazar", p("l2-4")),
    v("trpm2-5", "bugün", "today", "Murzik points his paw at today's page on the calendar.", "Listen to bugün", p("l2-5")),
    v("trpm2-6", "yarın", "tomorrow", "Murzik points at the next page.", "Listen to yarın", p("l2-6")),
    v("trpm2-7", "dün", "yesterday", "Murzik looks back at yesterday's page.", "Listen to dün", p("l2-7")),
  ],
  dialogue: {
    title: "How many days?",
    note: "Kalıyorsunuz — “you're staying”. Hierapolis is an ancient city right above the terraces.",
    lines: [
      line("selin", "Kaç gün kalıyorsunuz?", "How many days are you staying?"),
      line("tom", "Üç gün. Bugün günlerden ne?", "Three days. What day is it today?"),
      line("selin", "Bugün perşembe.", "Today is Thursday."),
      line("murzik", "Yani perşembe, cuma, cumartesi. Pazar günü gidiyoruz.", "So Thursday, Friday, Saturday. We leave on Sunday."),
      line("selin", "Cumartesi akşam teraslarda konser var!", "There's a concert on the terraces on Saturday evening!"),
      line("tom", "Harika! Yarın ne yapalım?", "Great! What shall we do tomorrow?"),
      line("selin", "Yarın Hierapolis'e gidin. Çok eski bir şehir.", "Tomorrow, go to Hierapolis. It's a very old city."),
    ],
    gist: choice("trpm2-d1", "What day is it today?", [
      ["Thursday.", true],
      ["Friday.", false],
      ["Sunday.", false],
    ]),
  },
  grammar: [
    {
      title: "Today, tomorrow, yesterday",
      paragraphs: [
        "Bugün — today, yarın — tomorrow, dün — yesterday. They usually go at the start of the sentence: Yarın Hierapolis'e gidiyoruz.",
        "“On a day” is just the name of the day, optionally with günü: Pazar (günü) gidiyoruz. — We leave on Sunday. No word for “on” is needed.",
      ],
      examples: [
        { ru: "Bugün cuma.", en: "Today is Friday." },
        { ru: "Cumartesi günü konser var.", en: "There's a concert on Saturday." },
      ],
    },
  ],
  tasks: [
    listen("trpm2-t1", "Listen. What day is it?", "Bugün cumartesi.", [
      ["Saturday.", true],
      ["Wednesday.", false],
      ["Friday.", false],
    ]),
    match("trpm2-t2", "Match the pairs.", [
      ["pazartesi", "Monday"],
      ["çarşamba", "Wednesday"],
      ["cuma", "Friday"],
      ["pazar", "Sunday"],
    ], { skill: "words" }),
    fill("trpm2-t3", "Fill in the word: “Today is Thursday”.", "", "perşembe.", "Bugün", ["Bugün", "Yarın", "Dün"], { skill: "grammar" }),
    missing("trpm2-t4", "Which letter is missing? (“Wednesday”)", "", "arşamba", "ç", ["ç", "c", "s"]),
    speak("trpm2-t5", "Bugün günlerden ne?", "Bugün pazartesi.", "Today is Monday.", { help: "Say aloud what day it is today." }),
    listen("trpm2-t6", "Remember the time. What time is it?", "Saat sekiz buçuk.", [
      ["8:30", true],
      ["9:30", false],
      ["8:00", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "takvim",
    itemName: "Calendar",
    itemNameRu: "Takvim",
    ru: "Yaşasın! Yeni bir takvim!",
    en: "Hooray! A new calendar!",
    a11y: "A calendar with a photo of the white terraces hangs on the wall. There's a little cat drawn on Thursday.",
    image: p("takvim"),
    steps: ["Murzik hangs the calendar on the wall.", "He draws a little cat on Thursday.", "And a musical note on Saturday: the concert!", "Now he can see how many days are left."],
    bridge: "Tomorrow — Hierapolis. But first they need to go to Denizli and find out when the bus comes back.",
  },
};

const pamukkale3: Lesson = {
  id: "tr-a1-pamukkale-3",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 3,
  title: "When's the bus?",
  minutes: 7,
  goals: ["Ask what time the bus leaves", "Say “at two o'clock”: saat ikide", "Find the platform and the journey time"],
  vocabNote: "An otogar is a bus station. A peron is the platform (bay) the bus leaves from.",
  vocab: [
    v("trpm3-1", "Otobüs saat kaçta?", "What time is the bus?", "Murzik at the ticket window points at the timetable.", "Listen to Otobüs saat kaçta", p("l3-1")),
    v("trpm3-2", "Saat ikide.", "At two o'clock.", "The cashier points at a clock with its hands on two.", "Listen to Saat ikide", p("l3-2")),
    v("trpm3-3", "Ne zaman?", "When?", "Tom spreads his hands questioningly at the departures board.", "Listen to Ne zaman", p("l3-3")),
    v("trpm3-4", "otogar", "bus station", "A big bus station with rows of intercity coaches.", "Listen to otogar", p("l3-4")),
    v("trpm3-5", "peron", "platform", "A sign for platform 12, with a coach next to it.", "Listen to peron", p("l3-5")),
    v("trpm3-6", "Kaç dakika?", "How many minutes?", "Murzik holds an hourglass with a questioning look.", "Listen to Kaç dakika", p("l3-6")),
    v("trpm3-7", "gidiş-dönüş", "return (there and back)", "Two tickets: an arrow there and an arrow back.", "Listen to gidiş-dönüş", p("l3-7")),
  ],
  dialogue: {
    title: "Denizli bus station",
    note: "Sürüyor means “it takes, it lasts”. Kaç dakika sürüyor? — “How long does it take?”",
    lines: [
      line("murzik", "Pamukkale'ye otobüs saat kaçta?", "What time is the bus to Pamukkale?"),
      line("cashier", "Saat ikide ve saat dörtte.", "At two and at four."),
      line("tom", "Şimdi saat kaç?", "And what time is it now?"),
      line("cashier", "Bir buçuk.", "Half past one."),
      line("murzik", "Saat ikide gidelim! İki bilet, lütfen.", "Let's take the two o'clock! Two tickets, please."),
      line("cashier", "Buyurun. Peron on iki.", "Here you are. Platform twelve."),
      line("tom", "Kaç dakika sürüyor?", "How long does it take?"),
      line("cashier", "Yirmi dakika.", "Twenty minutes."),
    ],
    gist: choice("trpm3-d1", "What time will they leave?", [
      ["At two o'clock.", true],
      ["At four o'clock.", false],
      ["At half past one.", false],
    ]),
  },
  grammar: [
    {
      title: "At what time: saat ikide",
      paragraphs: [
        "English says “at two”; Turkish adds an ending instead: saat, the number and -de / -da: saat ikide (at two), saat altıda (at six).",
        "After the sounds ç, f, h, k, p, s, ş, t the ending becomes -te / -ta: saat üçte (at three), saat beşte (at five), saat dörtte (at four).",
      ],
      examples: [
        { ru: "Otobüs saat beşte.", en: "The bus is at five." },
        { ru: "Saat kaçta? — Saat onda.", en: "At what time? — At ten." },
      ],
    },
  ],
  tasks: [
    choice("trpm3-t1", "How do you say “at five o'clock”?", [
      ["saat beşte", true],
      ["saat beşde", false],
      ["saat beş", false],
    ], { skill: "grammar" }),
    listen("trpm3-t2", "Listen. What time is the bus?", "Otobüs saat dörtte.", [
      ["At four.", true],
      ["At two.", false],
      ["At five.", false],
    ]),
    match("trpm3-t3", "Match the pairs.", [
      ["otogar", "bus station"],
      ["peron", "platform"],
      ["ne zaman", "when"],
      ["dakika", "minute"],
    ], { skill: "words" }),
    spell("trpm3-t4", "Spell the word for “bus station”.", "otogar"),
    speak("trpm3-t5", "Otobüs saat kaçta?", "Saat üçte.", "At three o'clock.", { help: "Say aloud what time the bus is." }),
    choice("trpm3-t6", "What does dün mean?", [
      ["yesterday", true],
      ["tomorrow", false],
      ["today", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "canta",
    itemName: "Backpack",
    itemNameRu: "Sırt çantası",
    ru: "Yaşasın! Yeni bir sırt çantası!",
    en: "Hooray! A new backpack!",
    a11y: "A small orange backpack with pockets and a little cat keyring.",
    image: p("canta"),
    steps: ["At the market in Denizli, Murzik spots an orange backpack.", "It's just his size!", "Murzik packs water and the map into it.", "Ready for hiking!"],
    bridge: "The next morning, for some reason, the alarm clock stays silent…",
  },
};

const pamukkale4: Lesson = {
  id: "tr-a1-pamukkale-4",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 4,
  title: "We're late!",
  minutes: 7,
  goals: ["Say “we're late” and “the bus has gone”", "Hurry a friend up", "Ask about the next bus"],
  vocabNote: "Kaçmak means “to run away”. Otobüs kaçtı — “the bus ran away”, meaning it left without us.",
  vocab: [
    v("trpm4-1", "Geç kaldık!", "We're late!", "Murzik and Tom run down the street; the clock already says nine.", "Listen to Geç kaldık", p("l4-1")),
    v("trpm4-2", "Acele et!", "Hurry up!", "Murzik tugs Tom's sleeve as Tom pulls on a shoe on the run.", "Listen to Acele et", p("l4-2")),
    v("trpm4-3", "erken", "early", "Early morning, the sun just rising, Murzik yawning.", "Listen to erken", p("l4-3")),
    v("trpm4-4", "geç", "late", "The clock shows well past nine, and Murzik clutches his head.", "Listen to geç", p("l4-4")),
    v("trpm4-5", "Otobüs kaçtı!", "We've missed the bus!", "The bus drives off as Murzik and Tom wave after it.", "Listen to Otobüs kaçtı", p("l4-5")),
    v("trpm4-6", "Sonraki otobüs ne zaman?", "When's the next bus?", "Tom reads the timetable at the bus stop.", "Listen to Sonraki otobüs ne zaman", p("l4-6")),
    v("trpm4-7", "Bekleyelim.", "Let's wait.", "Murzik and Tom sit on a bench at the bus stop.", "Listen to Bekleyelim", p("l4-7")),
  ],
  dialogue: {
    title: "The alarm didn't go off",
    note: "Çalmadı — “it didn't ring”. Şapkalı — “in a hat”. Gitti — “he's gone”.",
    lines: [
      line("murzik", "Tom! Saat kaç? Saat dokuz! Geç kaldık!", "Tom! What time is it? Nine o'clock! We're late!"),
      line("tom", "Ne? Çalar saat çalmadı!", "What? The alarm didn't go off!"),
      line("murzik", "Acele et! Otobüs saat dokuzda!", "Hurry up! The bus is at nine!"),
      line("tom", "Otobüs kaçtı!", "We've missed the bus!"),
      line("murzik", "Pardon, sonraki otobüs ne zaman?", "Excuse me, when's the next bus?"),
      line("passerby", "Saat onda. Bekleyin.", "At ten. Just wait."),
      line("tom", "Tamam, bekleyelim. Murzik, bak… Şapkalı, beyaz bir kedi!", "OK, let's wait. Murzik, look… A white cat in a hat!"),
      line("murzik", "Nerede? Gitti…", "Where? He's gone…"),
    ],
    gist: choice("trpm4-d1", "Why are they late?", [
      ["The alarm didn't go off.", true],
      ["The bus broke down.", false],
      ["They got lost.", false],
    ]),
  },
  grammar: [
    {
      title: "The past tense: -dı, -di, -du, -dü",
      paragraphs: [
        "The past tense is the verb + -dı / -di / -du / -dü — a bit like English -ed: Otobüs kaç-tı — the bus left. After the sounds ç, f, h, k, p, s, ş, t the d turns into a t.",
        "“We” in the past is -dık / -dik / -duk / -dük: geç kal-dık — we were late, gel-dik — we came.",
      ],
      examples: [
        { ru: "Geç kaldık!", en: "We're late! (literally “we stayed late”)" },
        { ru: "Otobüs saat dokuzda geldi.", en: "The bus came at nine." },
      ],
    },
  ],
  tasks: [
    listen("trpm4-t1", "Listen. What happened?", "Otobüs kaçtı!", [
      ["They've missed the bus.", true],
      ["The bus has arrived.", false],
      ["The bus has broken down.", false],
    ]),
    choice("trpm4-t2", "How do you say “We're late”?", [
      ["Geç kaldık.", true],
      ["Geç kaldım.", false],
      ["Geç kalıyoruz mu.", false],
    ], { skill: "grammar" }),
    match("trpm4-t3", "Match the pairs.", [
      ["erken", "early"],
      ["geç", "late"],
      ["Acele et!", "Hurry up!"],
      ["Bekleyelim.", "Let's wait."],
    ], { skill: "words" }),
    missing("trpm4-t4", "Which letter is missing? (“it's gone, it ran away”)", "ka", "tı", "ç", ["ç", "c", "ş"]),
    speak("trpm4-t5", "Sonraki otobüs ne zaman?", "Saat onda.", "At ten o'clock.", { help: "Answer aloud." }),
    listen("trpm4-t6", "Remember the last lesson. At what time?", "Saat ikide.", [
      ["At two o'clock.", true],
      ["At ten.", false],
      ["At twelve.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "terlik",
    itemName: "Slippers",
    itemNameRu: "Terlik",
    ru: "Yaşasın! Yeni terlikler!",
    en: "Hooray! New slippers!",
    a11y: "A pair of soft embroidered slippers by the bed — tiny, just right for Murzik's paws.",
    image: p("terlik"),
    steps: ["In the morning rush, Murzik runs about barefoot.", "Selin gives him some slippers.", "“Acele etme!” — “Don't rush!”", "Now his mornings are warm and comfy."],
    bridge: "In the evening Selin invites them to the terraces: “The sunset here is the best in Turkey!”",
  },
};

const pamukkale5: Lesson = {
  id: "tr-a1-pamukkale-5",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 5,
  title: "Let's watch the sunset!",
  minutes: 7,
  goals: ["Invite someone somewhere", "Accept or politely say no", "Agree where to meet"],
  vocabNote: "Maalesef means “unfortunately, I'm afraid”. Start a refusal with it and it'll sound polite.",
  vocab: [
    v("trpm5-1", "Gün batımını izleyelim mi?", "Shall we watch the sunset?", "Selin points at the sky turning pink over the terraces.", "Listen to Gün batımını izleyelim mi", p("l5-1")),
    v("trpm5-2", "Bu akşam ne yapıyorsun?", "What are you doing this evening?", "Selin looks round the door of Murzik's room.", "Listen to Bu akşam ne yapıyorsun", p("l5-2")),
    v("trpm5-3", "Benimle gelir misin?", "Will you come with me?", "Selin holds out her hand, inviting him along.", "Listen to Benimle gelir misin", p("l5-3")),
    v("trpm5-4", "Çok isterim!", "I'd love to!", "Murzik jumps for joy, tail straight up.", "Listen to Çok isterim", p("l5-4")),
    v("trpm5-5", "Maalesef gelemem.", "I'm afraid I can't come.", "Tom spreads his hands apologetically, pointing at a pile of photos.", "Listen to Maalesef gelemem", p("l5-5")),
    v("trpm5-6", "Başka zaman.", "Another time.", "Tom waves in a friendly way and smiles.", "Listen to Başka zaman", p("l5-6")),
    v("trpm5-7", "Nerede buluşalım?", "Where shall we meet?", "Murzik, a map in his paws, looks at Selin.", "Listen to Nerede buluşalım", p("l5-7")),
  ],
  dialogue: {
    title: "An invitation",
    note: "Kapının önünde — “in front of the gate”.",
    lines: [
      line("selin", "Murzik, bu akşam ne yapıyorsun?", "Murzik, what are you doing this evening?"),
      line("murzik", "Bilmiyorum. Neden?", "I don't know. Why?"),
      line("selin", "Gün batımını izleyelim mi? Teraslarda çok güzel.", "Shall we watch the sunset? It's beautiful on the terraces."),
      line("murzik", "Çok isterim!", "I'd love to!"),
      line("tom", "Ben de! Nerede buluşalım?", "Me too! Where shall we meet?"),
      line("selin", "Saat altıda, kapının önünde.", "At six, by the gate."),
      line("murzik", "Tamam, görüşürüz!", "OK, see you then!"),
    ],
    gist: choice("trpm5-d1", "When and where will they meet?", [
      ["At six, by the gate.", true],
      ["At eight, by the bus.", false],
      ["In the morning, on the terraces.", false],
    ]),
  },
  grammar: [
    {
      title: "Let's: -elim, -alım",
      paragraphs: [
        "“Let's do something” is the verb + -elim / -alım: gid-elim — let's go, izle-yelim — let's watch, buluş-alım — let's meet.",
        "Add mi to make it an invitation, like English “Shall we…?”: Gidelim mi? — Shall we go? İzleyelim mi? — Shall we watch?",
      ],
      examples: [
        { ru: "Saat altıda buluşalım.", en: "Let's meet at six." },
        { ru: "Sinemaya gidelim mi?", en: "Shall we go to the cinema?" },
      ],
    },
  ],
  tasks: [
    choice("trpm5-t1", "How do you say “Let's meet”?", [
      ["Buluşalım.", true],
      ["Buluşelim.", false],
      ["Buluşuyoruz mu.", false],
    ], { skill: "grammar" }),
    listen("trpm5-t2", "Listen. How do they answer the invitation?", "Maalesef gelemem. Başka zaman.", [
      ["They say no.", true],
      ["They happily say yes.", false],
      ["They ask where to meet.", false],
    ]),
    match("trpm5-t3", "Match the pairs.", [
      ["Çok isterim!", "I'd love to!"],
      ["Maalesef gelemem.", "I'm afraid I can't come."],
      ["Başka zaman.", "Another time."],
      ["Nerede buluşalım?", "Where shall we meet?"],
    ], { skill: "words" }),
    missing("trpm5-t4", "Which letter is missing? (“sunset”)", "Gün bat", "mı", "ı", ["ı", "i", "a"]),
    speak("trpm5-t5", "Bu akşam sinemaya gidelim mi?", "Çok isterim! Saat kaçta?", "I'd love to! What time?", { help: "Accept the invitation aloud." }),
    choice("trpm5-t6", "How do you say “We're late”?", [
      ["Geç kaldık.", true],
      ["Geç kaldınız.", false],
      ["Erken kaldık.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "afis",
    itemName: "Poster",
    itemNameRu: "Afiş",
    ru: "Yaşasın! Bir afiş!",
    en: "Hooray! A poster!",
    a11y: "A poster for the evening concert on the terraces hangs on the wall: white slopes in pink sunset light.",
    image: p("afis"),
    steps: ["Posters for Saturday's concert hang by the gate.", "Selin gives one to Murzik.", "Murzik hangs it above his bed.", "The concert is tomorrow!"],
    bridge: "In the morning Selin asks: “Where were you yesterday afternoon? I was looking for you!”",
  },
};

const pamukkale6: Lesson = {
  id: "tr-a1-pamukkale-6",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 6,
  title: "Where were you yesterday?",
  minutes: 7,
  goals: ["Ask where someone was", "Say: we were…, it was beautiful", "Describe the past: it was hot, it was crowded"],
  vocabNote: "Kalabalık means both “a crowd” and “crowded”. Kalabalıktı — “it was crowded”.",
  vocab: [
    v("trpm6-1", "Dün neredeydiniz?", "Where were you yesterday?", "Selin looks in surprise at a suntanned Murzik and Tom.", "Listen to Dün neredeydiniz", p("l6-1")),
    v("trpm6-2", "Termal havuzdaydık.", "We were at the thermal pool.", "Murzik and Tom swim in the ancient pool among fallen columns.", "Listen to Termal havuzdaydık", p("l6-2")),
    v("trpm6-3", "Evdeydik.", "We were at home.", "Murzik and Tom sit on the sofa at home with tea.", "Listen to Evdeydik", p("l6-3")),
    v("trpm6-4", "Hava nasıldı?", "What was the weather like?", "Selin points at the sky and raises her eyebrows.", "Listen to Hava nasıldı", p("l6-4")),
    v("trpm6-5", "Çok güzeldi!", "It was really beautiful!", "Murzik closes his eyes dreamily, remembering the white terraces.", "Listen to Çok güzeldi", p("l6-5")),
    v("trpm6-6", "Kalabalıktı.", "It was crowded.", "A crowd of tourists with cameras on the terraces.", "Listen to Kalabalıktı", p("l6-6")),
    v("trpm6-7", "Su sıcaktı.", "The water was warm.", "A light steam rises from the blue water of the pool.", "Listen to Su sıcaktı", p("l6-7")),
  ],
  dialogue: {
    title: "The ancient pool",
    note: "Antik means “ancient”. Yazın means “in summer”. Hep means “always”.",
    lines: [
      line("selin", "Günaydın! Dün neredeydiniz?", "Good morning! Where were you yesterday?"),
      line("tom", "Dün Hierapolis'teydik. Sonra termal havuzdaydık.", "Yesterday we were in Hierapolis. Then we were at the thermal pool."),
      line("selin", "Antik havuzda mı? Su nasıldı?", "In the ancient pool? What was the water like?"),
      line("murzik", "Su sıcaktı! Çok güzeldi!", "The water was warm! It was really beautiful!"),
      line("tom", "Ama çok kalabalıktı.", "But it was very crowded."),
      line("selin", "Evet, yazın hep kalabalık.", "Yes, it's always crowded in summer."),
    ],
    gist: choice("trpm6-d1", "Where were Tom and Murzik yesterday?", [
      ["In Hierapolis and at the thermal pool.", true],
      ["At home.", false],
      ["In Denizli.", false],
    ]),
  },
  grammar: [
    {
      title: "Was, were: -dı",
      paragraphs: [
        "“Was” in the past uses the same ending -dı / -di / -du / -dü, added straight to the word: güzel-di — it was beautiful, sıcak-tı — it was hot.",
        "“We were” is -dık, “you were” (polite or plural) is -dınız: havuzda-y-dık — we were at the pool, nerede-y-diniz — where were you? After a vowel, add a y.",
      ],
      examples: [
        { ru: "Dün evdeydik.", en: "Yesterday we were at home." },
        { ru: "Hava çok sıcaktı.", en: "It was very hot." },
      ],
    },
  ],
  tasks: [
    choice("trpm6-t1", "How do you ask “Where were you yesterday?”", [
      ["Dün neredeydiniz?", true],
      ["Dün neredesiniz?", false],
      ["Dün nerede olacaksınız?", false],
    ], { skill: "grammar" }),
    listen("trpm6-t2", "Listen. What was the water like?", "Su çok sıcaktı.", [
      ["Very warm.", true],
      ["Cold.", false],
      ["Dirty.", false],
    ]),
    match("trpm6-t3", "Match the pairs.", [
      ["kalabalık", "crowded"],
      ["sıcak", "warm, hot"],
      ["havuz", "pool"],
      ["dün", "yesterday"],
    ], { skill: "words" }),
    missing("trpm6-t4", "Which letter is missing? (“It was beautiful”)", "Güzel", "i", "d", ["d", "t", "l"]),
    speak("trpm6-t5", "Dün neredeydiniz?", "Dün evdeydik.", "Yesterday we were at home.", { help: "Say aloud where you were yesterday." }),
    choice("trpm6-t6", "You're invited to the cinema, but you can't go. What do you say?", [
      ["Maalesef gelemem.", true],
      ["Çok isterim!", false],
      ["Buluşalım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bornoz",
    itemName: "Bathrobe",
    itemNameRu: "Bornoz",
    ru: "Yaşasın! Yumuşak bir bornoz!",
    en: "Hooray! A soft bathrobe!",
    a11y: "A fluffy white hooded bathrobe hangs on a hook. Murzik is lost inside it — only his ears show.",
    image: p("bornoz"),
    steps: ["Selin brings a bathrobe: “Take it to the pool next time!”", "It's enormous!", "Murzik disappears into it completely.", "Warm and soft!"],
    bridge: "The last days in Pamukkale. Selin asks: “What are you doing at the weekend?”",
  },
};

const pamukkale7: Lesson = {
  id: "tr-a1-pamukkale-7",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 7,
  title: "Weekend plans",
  minutes: 8,
  goals: ["Talk about plans: the future tense", "Ask about someone's weekend plans", "Review all the words from Pamukkale"],
  vocabNote: "Hafta means “week”, and sonu means “its end”. Hafta sonu — “the weekend”, just like in English.",
  vocab: [
    v("trpm7-1", "Hafta sonu ne yapacaksın?", "What are you going to do at the weekend?", "Selin looks at Murzik curiously.", "Listen to Hafta sonu ne yapacaksın", p("l7-1")),
    v("trpm7-2", "Pazar günü Bodrum'a gideceğiz.", "On Sunday we're going to Bodrum.", "Tom points on the map to a blue bay by the sea.", "Listen to Pazar günü Bodrum'a gideceğiz", p("l7-2")),
    v("trpm7-3", "Fotoğraf çekeceğim.", "I'm going to take photos.", "Tom raises his camera to his eye.", "Listen to Fotoğraf çekeceğim", p("l7-3")),
    v("trpm7-4", "Dinleneceğim.", "I'm going to relax.", "Murzik lies on a sunlounger with a book.", "Listen to Dinleneceğim", p("l7-4")),
    v("trpm7-5", "Belki yüzeceğiz.", "Maybe we'll go swimming.", "Murzik, in a swimming mask, gazes dreamily at the water.", "Listen to Belki yüzeceğiz", p("l7-5")),
    v("trpm7-6", "hafta sonu", "weekend", "Two calendar pages with little suns.", "Listen to hafta sonu", p("l7-6")),
    v("trpm7-7", "Planın ne?", "What are your plans?", "Murzik holds a notebook with his plans drawn in it.", "Listen to Planın ne", p("l7-7")),
  ],
  dialogue: {
    title: "The last day",
    note: "Tekneler means “boats”. Planımız — “our plan”.",
    lines: [
      line("selin", "Hafta sonu ne yapacaksınız?", "What are you going to do at the weekend?"),
      line("tom", "Cumartesi konsere gideceğiz. Ben fotoğraf çekeceğim.", "On Saturday we're going to the concert. I'm going to take photos."),
      line("murzik", "Ben de dinleneceğim! Belki yüzeceğiz.", "And I'm going to relax! Maybe we'll go swimming."),
      line("selin", "Pazar günü?", "And on Sunday?"),
      line("tom", "Pazar günü Bodrum'a gideceğiz.", "On Sunday we're going to Bodrum."),
      line("selin", "Bodrum mu? Deniz, tekneler… Harika!", "Bodrum? The sea, the boats… Wonderful!"),
      line("murzik", "Planımız çok güzel!", "We have a great plan!"),
    ],
    gist: choice("trpm7-d1", "What will they do on Sunday?", [
      ["Go to Bodrum.", true],
      ["Go to the concert.", false],
      ["Relax at home.", false],
    ]),
  },
  grammar: [
    {
      title: "The future: -ecek, -acak",
      paragraphs: [
        "The future is the verb + -ecek / -acak — like English “will” or “going to”, but as an ending: gid-ecek — will go, çek-ecek — will take (photos), yap-acak — will do. After a vowel, add a y: oku-y-acak — will read, izle-y-ecek — will watch.",
        "Before a vowel the k turns into ğ: gideceğ-im — I'll go, gideceğ-iz — we'll go. With “you” it stays: yapacak-sın.",
      ],
      examples: [
        { ru: "Yarın Bodrum'a gideceğiz.", en: "Tomorrow we're going to Bodrum." },
        { ru: "Hafta sonu ne yapacaksın?", en: "What are you going to do at the weekend?" },
      ],
    },
  ],
  tasks: [
    listen("trpm7-t1", "Audio exam. What's happening on Saturday?", "Cumartesi akşam saat sekizde konser var. Sonra gece yüzeceğiz.", [
      ["A concert at eight, then a night swim.", true],
      ["A concert at six, then dinner.", false],
      ["A bus at eight.", false],
    ]),
    choice("trpm7-t2", "How do you say “We're going to Bodrum”?", [
      ["Bodrum'a gideceğiz.", true],
      ["Bodrum'a gittik.", false],
      ["Bodrum'a gidiyoruz mu.", false],
    ], { skill: "grammar" }),
    match("trpm7-t3", "Match the pairs.", [
      ["hafta sonu", "weekend"],
      ["plan", "a plan"],
      ["dinlenmek", "to relax"],
      ["yüzmek", "to swim"],
    ], { skill: "words" }),
    missing("trpm7-t4", "Which letter is missing? (“we'll go”)", "gidece", "iz", "ğ", ["ğ", "k", "g"]),
    speak("trpm7-t5", "Hafta sonu ne yapacaksın?", "Dinleneceğim ve kitap okuyacağım.", "I'm going to relax and read a book.", { help: "Talk about your weekend plans aloud." }),
    script("trpm7-t6", "Remember all of Pamukkale. Finish the conversations.", [
      { speaker: "Selin", text: "Saat kaç?" },
      { speaker: "You", answer: "Saat yedi buçuk.", options: ["Saat yedi buçuk.", "Bugün perşembe.", "Saat kaçta?"] },
      { speaker: "Cashier", text: "Otobüs saat ikide." },
      { speaker: "You", answer: "İki bilet, lütfen.", options: ["İki bilet, lütfen.", "Geç kaldık!", "Çok güzeldi!"] },
      { speaker: "Selin", text: "Dün neredeydiniz?" },
      { speaker: "You", answer: "Termal havuzdaydık.", options: ["Termal havuzdaydık.", "Yarın gideceğiz.", "Bekleyelim."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pestamal",
    itemName: "Cotton towel",
    itemNameRu: "Peştamal",
    ru: "Yaşasın! Bir peştamal!",
    en: "Hooray! A peştamal!",
    a11y: "A thin striped cotton peştamal towel lies folded on the bed. It comes from Denizli, the land of famous cotton.",
    image: p("pestamal"),
    steps: ["Selin gives Murzik a striped peştamal.", "“Denizli'nin pamuğu!” — “Cotton from Denizli!”", "Murzik wraps himself in it after a swim.", "Light and warm!"],
    bridge: "Saturday evening, the concert on the terraces. And once again a white cat in a hat flashes past in the crowd…",
  },
};

const story: CityStory = {
  home: {
    name: "A guesthouse by the terraces",
    nameRu: "Pansiyon odası",
    image: p("home"),
    a11y: "A simple empty room in a small guesthouse at the foot of the white terraces. The snow-white slope can be seen through the window. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "pestamal",
  welcomeRu: "Merhaba, Pamukkale!",
  welcomeEn: "Hello, Pamukkale!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom at the foot of Pamukkale's snow-white terraces. The sky is reflected in the blue pools.",
  departureImage: p("departure"),
  departureA11y: "Murzik and Tom board a bus with their suitcases, the white terraces behind them.",
  finale: [
    {
      image: p("lev"),
      a11y: "The evening concert on the white terraces in pink sunset light. Far off in the crowd stands an old white cat in a hat, looking towards Murzik. Murzik doesn't see him.",
      lines: [
        { en: "The Saturday concert on the terraces. Tom films the sunset for his travel diary." },
        { en: "Back at the guesthouse, Tom scrolls through his photos. In one, right in the corner, is an old white cat in a hat. He's looking straight at Murzik." },
        { ru: "Bu şapkalı kedi kim?", en: "Who is this cat in a hat?" },
      ],
    },
    {
      image: p("pestamal"),
      a11y: "Murzik walks round his room in the guesthouse, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his room by the terraces. Tom takes a photo of it." },
        { en: "Murzik takes the striped peştamal from Denizli with him." },
        { en: "Tom keeps the photo of the cat in the hat. Just in case." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Pamukkale tamamlandı!", en: "Pamukkale complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — fifth part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik and Tom board the bus.",
      lines: [
        { ru: "Hoşça kal, Pamukkale!", en: "Bye, Pamukkale!" },
        { ru: "Sıradaki durak: Bodrum!", en: "Next stop: Bodrum!" },
      ],
    },
    {
      image: p("road"),
      a11y: "The bus winds down from the mountains to the blue Aegean Sea.",
      lines: [{ ru: "Pamukkale → Bodrum", en: "Pamukkale → Bodrum" }],
    },
    {
      image: pic("tr/bodrum/arrival"),
      a11y: "Murzik and Tom on the Bodrum waterfront: little white houses, an old castle and wooden boats in a blue bay.",
      lines: [
        { ru: "Merhaba, Bodrum!", en: "Hello, Bodrum!" },
        { ru: "Deniz! Güneş! Tekneler!", en: "The sea! The sun! Boats!" },
      ],
    },
  ],
};

export const trPamukkaleEn = {
  id: "tr-pamukkale",
  name: "Pamukkale",
  nameTr: "Pamukkale",
  lessons: [pamukkale1, pamukkale2, pamukkale3, pamukkale4, pamukkale5, pamukkale6, pamukkale7],
  story,
};
