import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Bodrum · “Getting around” · on foot and by bike, renting, where to, the museum, the map, “we're lost”, the last evening. English version. */

const p = (name: string) => pic(`tr/bodrum/${name}`);

const bodrum1: Lesson = {
  id: "tr-a1-bodrum-1",
  level: "A1",
  cityId: "tr-bodrum",
  number: 1,
  title: "On foot or by bike?",
  minutes: 7,
  goals: ["Say how you get somewhere", "Ask how long the journey takes", "Talk about what's happening now: -iyor"],
  vocabNote: "Kaptan means “captain”. In Turkey it goes after the name: Ali Kaptan, just like Kemal Bey or Ayşe Teyze.",
  vocab: [
    v("trbo1-1", "yürüyerek", "on foot", "Murzik strides along a white street with blue doors.", "Listen to yürüyerek", p("l1-1")),
    v("trbo1-2", "bisiklet", "bicycle", "A pale blue bicycle with a basket against a white wall.", "Listen to bisiklet", p("l1-2")),
    v("trbo1-3", "taksi", "taxi", "A yellow taxi on the waterfront.", "Listen to taksi", p("l1-3")),
    v("trbo1-4", "tekne", "boat", "A wooden boat bobs in the blue bay.", "Listen to tekne", p("l1-4")),
    v("trbo1-5", "Yürüyorum.", "I'm walking.", "Murzik walks along swinging his paws, a little backpack on his back.", "Listen to Yürüyorum", p("l1-5")),
    v("trbo1-6", "Bisiklete biniyorum.", "I'm cycling.", "Tom rides a bike, his green coat flapping.", "Listen to Bisiklete biniyorum", p("l1-6")),
    v("trbo1-7", "Ne kadar sürer?", "How long does it take?", "Murzik holds an hourglass with a questioning look.", "Listen to Ne kadar sürer", p("l1-7")),
  ],
  dialogue: {
    title: "On the gulet",
    note: "A gulet is a wooden sailing boat — in Bodrum people live and travel on them. Dikkat means “careful”. Dar means “narrow”.",
    lines: [
      line("captain", "Hoş geldiniz! Benim adım Ali. Bu teknenin kaptanıyım.", "Welcome! My name's Ali. I'm the captain of this boat."),
      line("tom", "Merhaba, Ali Kaptan! Kaleye nasıl gidebiliriz?", "Hello, Captain Ali! How can we get to the castle?"),
      line("captain", "Yürüyerek gidin. Yakın.", "Go on foot. It's near."),
      line("murzik", "Ne kadar sürer?", "How long does it take?"),
      line("captain", "On dakika. Ama bisikletle beş dakika!", "Ten minutes. But by bike it's five!"),
      line("tom", "Bisiklet var mı?", "Is there a bike?"),
      line("captain", "Var! Ama dikkat: sokaklar çok dar.", "There is! But careful: the streets are very narrow."),
      line("murzik", "Ben yürüyorum. Tom bisiklete biniyor!", "I'm walking. Tom's cycling!"),
    ],
    gist: choice("trbo1-d1", "How will they get to the castle?", [
      ["Murzik on foot, Tom by bike.", true],
      ["Both by taxi.", false],
      ["By boat.", false],
    ]),
  },
  grammar: [
    {
      title: "Right now: -iyor",
      paragraphs: [
        "For what's happening now — like English “-ing” — use the verb + -ıyor / -iyor / -uyor / -üyor: bin-iyor — he's riding, getting on. If the verb ends in a vowel, it merges with -yor: yürü-yor — he's walking.",
        "Then comes the ending for the person: yürüyor-um — I'm walking, yürüyor-sun — you're walking, yürüyor — he's / she's walking, yürüyor-uz — we're walking.",
      ],
      examples: [
        { ru: "Ben yürüyorum, sen bisiklete biniyorsun.", en: "I'm walking, and you're cycling." },
        { ru: "Tom taksiyle gidiyor.", en: "Tom is going by taxi." },
      ],
    },
  ],
  tasks: [
    choice("trbo1-t1", "How do you say “I'm walking”?", [
      ["Yürüyorum.", true],
      ["Yürüyorsun.", false],
      ["Yürüdüm.", false],
    ], { skill: "grammar" }),
    listen("trbo1-t2", "Listen. How is the speaker travelling?", "Taksiyle gidiyorum.", [
      ["By taxi.", true],
      ["By bike.", false],
      ["On foot.", false],
    ]),
    match("trbo1-t3", "Match the pairs.", [
      ["yürüyerek", "on foot"],
      ["bisiklet", "bicycle"],
      ["tekne", "boat"],
      ["taksi", "taxi"],
    ], { skill: "words" }),
    missing("trbo1-t4", "Which letter is missing? (“on foot”)", "y", "rüyerek", "ü", ["ü", "u", "ı"]),
    speak("trbo1-t5", "Okula nasıl gidiyorsun?", "Otobüsle gidiyorum.", "I go by bus.", { help: "Say aloud how you get to school or work." }),
    choice("trbo1-t6", "How do you ask “What are you going to do at the weekend?”", [
      ["Hafta sonu ne yapacaksın?", true],
      ["Hafta sonu ne yaptın?", false],
      ["Hafta sonu nerede?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bisiklet",
    itemName: "Bicycle",
    itemNameRu: "Bisiklet",
    ru: "Yaşasın! Küçük bir bisiklet!",
    en: "Hooray! A little bicycle!",
    a11y: "A small pale blue bicycle with a basket stands on the quay by the gulet.",
    image: p("bisiklet"),
    steps: ["An old child's bike stands by the gulet.", "“Bu senin olsun!” says the captain — “Let it be yours!”", "Murzik rings the bell.", "Ring-ring!"],
    bridge: "Tom needs a bigger bike, so he heads to a rental shop.",
  },
};

const bodrum2: Lesson = {
  id: "tr-a1-bodrum-2",
  level: "A1",
  cityId: "tr-bodrum",
  number: 2,
  title: "Hire for the day",
  minutes: 7,
  goals: ["Rent something", "Say for how long: for an hour, for a day", "Say “from … to …”"],
  vocabNote: "-liğine / -lığına / -luğuna / -lüğüne means “for (a length of time)”: bir saatliğine — for an hour, bir günlüğüne — for a day.",
  vocab: [
    v("trbo2-1", "kiralamak", "to rent, to hire", "A rental shop sign: rows of bikes and scooters.", "Listen to kiralamak", p("l2-1")),
    v("trbo2-2", "Bir bisiklet kiralamak istiyorum.", "I'd like to rent a bike.", "Tom stands at the rental counter, pointing at a bike.", "Listen to Bir bisiklet kiralamak istiyorum", p("l2-2")),
    v("trbo2-3", "Kaç saatliğine?", "For how many hours?", "The man in the rental shop holds a watch and looks questioningly.", "Listen to Kaç saatliğine", p("l2-3")),
    v("trbo2-4", "Bir günlüğüne.", "For one day.", "Tom shows one finger and a little sun on the calendar.", "Listen to Bir günlüğüne", p("l2-4")),
    v("trbo2-5", "Saat ikiden beşe kadar.", "From two to five.", "Two clocks — one at two, one at five — with an arrow between them.", "Listen to Saat ikiden beşe kadar", p("l2-5")),
    v("trbo2-6", "kask", "helmet", "Murzik in a blue helmet that's a bit too big.", "Listen to kask", p("l2-6")),
    v("trbo2-7", "depozito", "deposit", "Tom puts his passport and some money on the counter.", "Listen to depozito", p("l2-7")),
  ],
  dialogue: {
    title: "At the rental shop",
    note: "İki yüz means “two hundred”. Alalım — “let's take it”.",
    lines: [
      line("tom", "Merhaba! Bir bisiklet kiralamak istiyorum.", "Hello! I'd like to rent a bike."),
      line("seller", "Tabii. Kaç saatliğine?", "Of course. For how many hours?"),
      line("tom", "Saat ikiden beşe kadar.", "From two to five."),
      line("seller", "Üç saat. Altmış lira. Kask da var.", "Three hours. Sixty lira. There's a helmet too."),
      line("murzik", "Bir günlüğüne ne kadar?", "How much is it for a whole day?"),
      line("seller", "Yüz lira. Depozito iki yüz lira.", "A hundred lira. The deposit is two hundred lira."),
      line("tom", "Tamam, bir günlüğüne alalım!", "OK, let's take it for the day!"),
    ],
    gist: choice("trbo2-d1", "How long does Tom rent the bike for?", [
      ["One day.", true],
      ["Three hours.", false],
      ["A week.", false],
    ]),
  },
  grammar: [
    {
      title: "From … to …: -den … -e kadar",
      paragraphs: [
        "“From” is an ending: -den / -dan: saat iki-den — from two. After the sounds ç, f, h, k, p, s, ş, t it's -ten / -tan: beş-ten — from five.",
        "“Until, to” is -e / -a kadar: beş-e kadar — until five, akşam-a kadar — until the evening. Together: sabahtan akşama kadar — from morning to evening.",
      ],
      examples: [
        { ru: "Saat ikiden beşe kadar.", en: "From two to five." },
        { ru: "Sabahtan akşama kadar plajdayız.", en: "We're on the beach from morning to evening." },
      ],
    },
  ],
  tasks: [
    listen("trbo2-t1", "Listen. From what time to what time?", "Saat üçten altıya kadar.", [
      ["From three to six.", true],
      ["From two to five.", false],
      ["From six to three.", false],
    ]),
    choice("trbo2-t2", "How do you say “from morning to evening”?", [
      ["sabahtan akşama kadar", true],
      ["sabaha akşamdan kadar", false],
      ["sabahta akşamda kadar", false],
    ], { skill: "grammar" }),
    match("trbo2-t3", "Match the pairs.", [
      ["kask", "helmet"],
      ["kiralamak", "to rent"],
      ["bir günlüğüne", "for one day"],
      ["depozito", "deposit"],
    ], { skill: "words" }),
    spell("trbo2-t4", "Spell the word for “helmet”.", "kask"),
    speak("trbo2-t5", "Kaç saatliğine?", "İki saatliğine.", "For two hours.", { help: "Say aloud how long you want the bike for." }),
    listen("trbo2-t6", "Remember the last lesson. How is the speaker getting there?", "Yürüyorum.", [
      ["On foot.", true],
      ["By bike.", false],
      ["By boat.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kum-saati",
    itemName: "Hourglass",
    itemNameRu: "Kum saati",
    ru: "Yaşasın! Bir kum saati!",
    en: "Hooray! An hourglass!",
    a11y: "An hourglass with blue sand stands on a shelf in the cabin.",
    image: p("kum-saati"),
    steps: ["The man in the rental shop gives Murzik an hourglass.", "“Zamanı unutmayın!” — “Don't forget the time!”", "Murzik turns it over.", "The blue sand trickles down."],
    bridge: "Tarçın phones: “I'm coming to see you from Izmir! Where should I go?”",
  },
};

const bodrum3: Lesson = {
  id: "tr-a1-bodrum-3",
  level: "A1",
  cityId: "tr-bodrum",
  number: 3,
  title: "Where to?",
  minutes: 7,
  goals: ["Ask where someone is going", "Say “to the beach”, “to the port”, “to the castle”", "Suggest a swim"],
  vocabNote: "Denize girmek — literally “to go into the sea” — means to go for a swim. Hadi, denize girelim! — “Let's go for a swim!”",
  vocab: [
    v("trbo3-1", "Nereye gidiyorsun?", "Where are you going?", "Tarçın stands on the quay with a little suitcase, waving.", "Listen to Nereye gidiyorsun", p("l3-1")),
    v("trbo3-2", "Plaja gidiyorum.", "I'm going to the beach.", "Murzik heads for the sea with a towel and a parasol.", "Listen to Plaja gidiyorum", p("l3-2")),
    v("trbo3-3", "kaleye", "to the castle", "A path leads up to the old stone castle above the bay.", "Listen to kaleye", p("l3-3")),
    v("trbo3-4", "limana", "to the port", "A signpost with an arrow to the port full of boats.", "Listen to limana", p("l3-4")),
    v("trbo3-5", "denize", "into the sea, to the sea", "Murzik takes a running jump into the blue water.", "Listen to denize", p("l3-5")),
    v("trbo3-6", "Hadi, denize girelim!", "Let's go for a swim!", "Murzik, in a rubber ring, drags Tarçın towards the water.", "Listen to Hadi, denize girelim", p("l3-6")),
    v("trbo3-7", "Geliyorum!", "I'm coming!", "Tarçın reluctantly gets up from the sunlounger.", "Listen to Geliyorum", p("l3-7")),
  ],
  dialogue: {
    title: "Tarçın arrives",
    note: "Hamağa — “to the hammock”. Yorucu means “tiring”.",
    lines: [
      line("tarcin", "Merhaba! Ben geldim! Nereye gidiyorsunuz?", "Hi! I'm here! Where are you going?"),
      line("murzik", "Tarçın! Plaja gidiyoruz. Sen de gel!", "Tarçın! We're going to the beach. Come with us!"),
      line("tarcin", "Plaja mı? Ben hamağa gitmek istiyorum.", "To the beach? I want to go to the hammock."),
      line("tom", "Hamak yok! Önce kaleye, sonra limana, sonra denize!", "There's no hammock! First the castle, then the port, then the sea!"),
      line("tarcin", "Çok yorucu!", "That's so tiring!"),
      line("murzik", "Hadi, denize girelim!", "Come on, let's go for a swim!"),
      line("tarcin", "Tamam, tamam… Geliyorum!", "OK, OK… I'm coming!"),
    ],
    gist: choice("trbo3-d1", "Where does Tarçın want to go?", [
      ["To the hammock.", true],
      ["To the castle.", false],
      ["To the port.", false],
    ]),
  },
  grammar: [
    {
      title: "Where to: -e, -a",
      paragraphs: [
        "English uses “to”; Turkish adds the ending -e or -a: plaj → plaja (to the beach), liman → limana (to the port), deniz → denize (to the sea).",
        "After a vowel, add a y: kale → kaleye (to the castle), Antalya → Antalya'ya. The question: Nereye? — Where to?",
      ],
      examples: [
        { ru: "Önce kaleye, sonra limana gidiyoruz.", en: "First we're going to the castle, then to the port." },
        { ru: "Nereye gidiyorsun? — Plaja.", en: "Where are you going? — To the beach." },
      ],
    },
  ],
  tasks: [
    choice("trbo3-t1", "How do you say “to the castle”? (castle — kale)", [
      ["kaleye", true],
      ["kalea", false],
      ["kalede", false],
    ], { skill: "grammar" }),
    listen("trbo3-t2", "Listen. Where is the speaker going?", "Limana gidiyorum.", [
      ["To the port.", true],
      ["To the beach.", false],
      ["To the castle.", false],
    ]),
    match("trbo3-t3", "Match the pairs.", [
      ["plaj", "beach"],
      ["kale", "castle"],
      ["liman", "port"],
      ["deniz", "sea"],
    ], { skill: "words" }),
    missing("trbo3-t4", "Which letter is missing? (“beach”)", "pla", "", "j", ["j", "c", "ş"]),
    speak("trbo3-t5", "Nereye gidiyorsun?", "Plaja gidiyorum.", "I'm going to the beach.", { help: "Say aloud where you're going." }),
    choice("trbo3-t6", "How do you say “from two to five”?", [
      ["Saat ikiden beşe kadar.", true],
      ["Saat ikiye beşten kadar.", false],
      ["Saat iki beş kadar.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "can-simidi",
    itemName: "Lifebuoy",
    itemNameRu: "Can simidi",
    ru: "Yaşasın! Bir can simidi!",
    en: "Hooray! A lifebuoy!",
    a11y: "A red and white lifebuoy hangs on the cabin wall.",
    image: p("can-simidi"),
    steps: ["Captain Ali gives Tarçın a lifebuoy.", "Tarçın instantly falls asleep in it, right on the water.", "Tom laughs: can simidi literally means “life simit”!", "Now the lifebuoy hangs in the cabin."],
    bridge: "Tomorrow — the museum in the castle. It's full of treasures found under the sea!",
  },
};

const bodrum4: Lesson = {
  id: "tr-a1-bodrum-4",
  level: "A1",
  cityId: "tr-bodrum",
  number: 4,
  title: "The museum in the castle",
  minutes: 7,
  goals: ["Ask if it's open and how much it costs to get in", "Ask if you can take photos", "Understand what's not allowed: yasak"],
  vocabNote: "Bodrum Castle houses a museum of underwater archaeology: ancient ships and amphorae from the seabed.",
  vocab: [
    v("trbo4-1", "müze", "museum", "The gates of the old castle, with little flags with anchors above them.", "Listen to müze", p("l4-1")),
    v("trbo4-2", "Giriş ne kadar?", "How much is it to get in?", "Tom at the museum ticket desk points at the price list.", "Listen to Giriş ne kadar", p("l4-2")),
    v("trbo4-3", "Fotoğraf çekebilir miyim?", "Can I take photos?", "Tom politely points at his camera.", "Listen to Fotoğraf çekebilir miyim", p("l4-3")),
    v("trbo4-4", "Yasak.", "It's not allowed.", "A sign: a camera flash crossed out.", "Listen to Yasak", p("l4-4")),
    v("trbo4-5", "Dokunmak yasak!", "Do not touch!", "A sign with a crossed-out hand by an ancient amphora.", "Listen to Dokunmak yasak", p("l4-5")),
    v("trbo4-6", "Açık mı?", "Is it open?", "Murzik peeks through the half-open wooden gates.", "Listen to Açık mı", p("l4-6")),
    v("trbo4-7", "eski", "old, ancient", "An ancient wooden ship under glass in the museum.", "Listen to eski", p("l4-7")),
  ],
  dialogue: {
    title: "Treasures from the seabed",
    note: "Kişi başı — “per person”. Flaş — “flash”. Gemi — “ship”.",
    lines: [
      line("murzik", "Merhaba! Müze açık mı?", "Hello! Is the museum open?"),
      line("cashier", "Evet, açık. Hoş geldiniz.", "Yes, it's open. Welcome."),
      line("tom", "Giriş ne kadar?", "How much is it to get in?"),
      line("cashier", "Kişi başı yüz lira.", "A hundred lira per person."),
      line("tom", "Fotoğraf çekebilir miyim?", "Can I take photos?"),
      line("cashier", "Evet, ama flaş yasak.", "Yes, but no flash."),
      line("tarcin", "Bu eski bir gemi mi?", "Is this an old ship?"),
      line("cashier", "Evet, çok eski! Ama lütfen, dokunmak yasak!", "Yes, very old! But please — don't touch!"),
    ],
    gist: choice("trbo4-d1", "What's not allowed in the museum?", [
      ["Touching the exhibits and using flash.", true],
      ["Taking any photos at all.", false],
      ["Talking.", false],
    ]),
  },
  grammar: [
    {
      title: "Not allowed: -mek yasak",
      paragraphs: [
        "“No doing something” is the verb in its -mek / -mak form (like English “to do”) plus yasak: Dokunmak yasak. — No touching. Burada yüzmek yasak. — No swimming here.",
        "“Can I?” is -ebilir miyim? / -abilir miyim? (remember Bursa): Girebilir miyim? — Can I come in?",
      ],
      examples: [
        { ru: "Burada fotoğraf çekmek yasak.", en: "No photos here." },
        { ru: "Girebilir miyim?", en: "Can I come in?" },
      ],
    },
  ],
  tasks: [
    choice("trbo4-t1", "How do you say “No swimming here”? (to swim — yüzmek)", [
      ["Burada yüzmek yasak.", true],
      ["Burada yüzmek yasaklar.", false],
      ["Burada yüzüyor yasak.", false],
    ], { skill: "grammar" }),
    listen("trbo4-t2", "Listen. What is allowed?", "Fotoğraf çekebilirsiniz, ama flaş yasak.", [
      ["Taking photos without flash.", true],
      ["Taking photos with flash.", false],
      ["No photos at all.", false],
    ]),
    match("trbo4-t3", "Match the pairs.", [
      ["müze", "museum"],
      ["giriş", "entrance"],
      ["yasak", "not allowed"],
      ["eski", "old"],
    ], { skill: "words" }),
    missing("trbo4-t4", "Which letter is missing? (“to touch”)", "Dok", "nmak", "u", ["u", "ü", "o"]),
    speak("trbo4-t5", "Fotoğraf çekebilir miyim?", "Evet, ama flaş yasak.", "Yes, but no flash.", { help: "Answer aloud as a museum attendant." }),
    choice("trbo4-t6", "How do you say “I'm going to the beach”?", [
      ["Plaja gidiyorum.", true],
      ["Plajda gidiyorum.", false],
      ["Plajdan gidiyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tablo",
    itemName: "Painting of white houses",
    itemNameRu: "Tablo",
    ru: "Yaşasın! Güzel bir tablo!",
    en: "Hooray! A beautiful painting!",
    a11y: "A small oil painting: Bodrum's white houses, blue doors and boats in the bay.",
    image: p("tablo"),
    steps: ["Paintings hang in a little shop by the museum.", "One shows white houses and blue doors.", "Murzik buys it as a souvenir.", "The painting hangs above his bunk."],
    bridge: "Captain Ali gets out a map: “Here are the best bays for diving. Shall I show you?”",
  },
};

const bodrum5: Lesson = {
  id: "tr-a1-bodrum-5",
  level: "A1",
  cityId: "tr-bodrum",
  number: 5,
  title: "Show me on the map",
  minutes: 7,
  goals: ["Ask someone to show you on a map", "Say “here”, “over there”, “there”", "Ask if it's far from here"],
  vocabNote: "English has two words — “this” and “that” — but Turkish has three: bu (this, near me), şu (that one there, that you can point to), o (that, far away). The same goes for burada, şurada, orada.",
  vocab: [
    v("trbo5-1", "Haritada gösterir misiniz?", "Could you show me on the map?", "Tom unfolds a sea chart in front of Captain Ali.", "Listen to Haritada gösterir misiniz", p("l5-1")),
    v("trbo5-2", "şurada", "over there", "The captain points at the next bay.", "Listen to şurada", p("l5-2")),
    v("trbo5-3", "orada", "there, far away", "The captain points at an island on the horizon.", "Listen to orada", p("l5-3")),
    v("trbo5-4", "koy", "bay, cove", "A small turquoise cove among pine trees.", "Listen to koy", p("l5-4")),
    v("trbo5-5", "ada", "island", "A rocky island in the middle of the blue sea.", "Listen to ada", p("l5-5")),
    v("trbo5-6", "Buradan ne kadar uzak?", "How far is it from here?", "Murzik measures a distance on the map with his paw.", "Listen to Buradan ne kadar uzak", p("l5-6")),
    v("trbo5-7", "Burada dalabilir miyiz?", "Can we dive here?", "Murzik, in a mask, stands on deck pointing at the water.", "Listen to Burada dalabilir miyiz", p("l5-7")),
  ],
  dialogue: {
    title: "The sea chart",
    note: "Kara Ada — “Black Island” near Bodrum — has hot springs. Yarım saat means “half an hour”.",
    lines: [
      line("tom", "Ali Kaptan, en güzel koy nerede? Haritada gösterir misiniz?", "Captain Ali, where's the most beautiful bay? Could you show us on the map?"),
      line("captain", "Tabii. Bakın: biz buradayız. Şu koy çok güzel.", "Of course. Look: we're here. That bay there is lovely."),
      line("murzik", "O ada ne?", "What's that island?"),
      line("captain", "O, Kara Ada. Orada sıcak su kaynağı var!", "That's Kara Ada. There's a hot spring there!"),
      line("tarcin", "Buradan ne kadar uzak?", "How far is it from here?"),
      line("captain", "Tekneyle yarım saat.", "Half an hour by boat."),
      line("tom", "Burada dalabilir miyiz?", "Can we dive here?"),
      line("captain", "Evet! Maskeniz var mı?", "Yes! Do you have masks?"),
    ],
    gist: choice("trbo5-d1", "What is there on Kara Ada?", [
      ["A hot spring.", true],
      ["A museum.", false],
      ["A restaurant.", false],
    ]),
  },
  grammar: [
    {
      title: "Bu, şu, o",
      paragraphs: [
        "Bu — “this” (near me), şu — “that one there” (nearby, you can point to it), o — “that” (far away).",
        "It's the same for places: burada — here, şurada — over there, orada — there. And “from here” is buradan, with the ending -dan.",
      ],
      examples: [
        { ru: "Bu koy çok güzel, ama o ada daha güzel.", en: "This bay is very beautiful, but that island is even more beautiful." },
        { ru: "Biz buradayız, plaj şurada.", en: "We're here, and the beach is over there." },
      ],
    },
  ],
  tasks: [
    choice("trbo5-t1", "How do you say “that island” (far away)?", [
      ["o ada", true],
      ["bu ada", false],
      ["orada ada", false],
    ], { skill: "grammar" }),
    listen("trbo5-t2", "Listen. How long does it take to get to the island?", "Tekneyle yarım saat.", [
      ["Half an hour by boat.", true],
      ["An hour on foot.", false],
      ["Five minutes by taxi.", false],
    ]),
    match("trbo5-t3", "Match the pairs.", [
      ["koy", "bay"],
      ["ada", "island"],
      ["şurada", "over there"],
      ["harita", "map"],
    ], { skill: "words" }),
    spell("trbo5-t4", "Spell the word for “island”.", "ada", ["e"]),
    speak("trbo5-t5", "Haritada gösterir misiniz?", "Tabii. Biz buradayız.", "Of course. We're here.", { help: "Answer aloud and point to the place on the map." }),
    choice("trbo5-t6", "At the museum someone says: Dokunmak yasak! What does it mean?", [
      ["Do not touch!", true],
      ["You can take photos.", false],
      ["Entry is free.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "maske",
    itemName: "Diving mask",
    itemNameRu: "Maske",
    ru: "Yaşasın! Bir dalış maskesi!",
    en: "Hooray! A diving mask!",
    a11y: "Murzik pops up out of the water in a mask and snorkel, with little fish all around.",
    image: p("maske"),
    steps: ["Captain Ali takes some masks out of a box.", "Murzik puts on the smallest one.", "He dives — and there are fish!", "He gets to keep the mask."],
    bridge: "In the evening Murzik and Tarçın go for a walk through the white streets… and get lost.",
  },
};

const bodrum6: Lesson = {
  id: "tr-a1-bodrum-6",
  level: "A1",
  cityId: "tr-bodrum",
  number: 6,
  title: "We're lost!",
  minutes: 7,
  goals: ["Say “we're lost”", "Politely ask for help", "Ask which way a place is"],
  vocabNote: "Çıkmaz sokak means “dead end” — literally “a street that doesn't come out”.",
  vocab: [
    v("trbo6-1", "Kaybolduk!", "We're lost!", "Murzik and Tarçın stand bewildered among identical white streets at night.", "Listen to Kaybolduk", p("l6-1")),
    v("trbo6-2", "Yardım eder misiniz?", "Could you help us?", "Murzik politely waves to someone in the dark.", "Listen to Yardım eder misiniz", p("l6-2")),
    v("trbo6-3", "Liman hangi tarafta?", "Which way is the port?", "Murzik turns right, then left, at a crossroads.", "Listen to Liman hangi tarafta", p("l6-3")),
    v("trbo6-4", "Bu sokak çıkmaz.", "This is a dead end.", "A white street ends at a wall with a blue door.", "Listen to Bu sokak çıkmaz", p("l6-4")),
    v("trbo6-5", "Geri dönelim.", "Let's go back.", "Tarçın turns round and pulls Murzik back.", "Listen to Geri dönelim", p("l6-5")),
    v("trbo6-6", "Onu takip edelim!", "Let's follow him!", "Murzik points at the shadow of a cat in a hat up ahead.", "Listen to Onu takip edelim", p("l6-6")),
    v("trbo6-7", "Kurtulduk!", "We made it out!", "Murzik and Tarçın run happily out towards the lights of the port.", "Listen to Kurtulduk", p("l6-7")),
  ],
  dialogue: {
    title: "Night-time streets",
    note: "Burası neresi? — “Where are we?”. Yine means “again”. İkinci kez — “the second time”.",
    lines: [
      line("murzik", "Tarçın, burası neresi? Kaybolduk!", "Tarçın, where are we? We're lost!"),
      line("tarcin", "Bu sokak çıkmaz! Geri dönelim.", "This is a dead end! Let's go back."),
      line("murzik", "Pardon! Yardım eder misiniz? Liman hangi tarafta?", "Excuse me! Could you help us? Which way is the port?"),
      line("tarcin", "Bak! Şapkalı bir kedi… Bize yolu gösteriyor!", "Look! A cat in a hat… He's showing us the way!"),
      line("murzik", "Hadi, onu takip edelim!", "Come on, let's follow him!"),
      line("tarcin", "İşte liman! Kurtulduk!", "There's the port! We made it!"),
      line("murzik", "Kedi nerede? Yine gitti… İkinci kez!", "Where's the cat? Gone again… That's the second time!"),
    ],
    gist: choice("trbo6-d1", "Who helps them find the way?", [
      ["A white cat in a hat.", true],
      ["Captain Ali.", false],
      ["Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "Polite requests: -er misiniz?",
      paragraphs: [
        "The most polite way to ask is a question, just like English “Could you…?”: Yardım eder misiniz? — Could you help us? You already know some: Tekrar eder misiniz? Gösterir misiniz?",
        "It sounds much softer than the command Yardım edin! — “Help!”. Save that one for real emergencies.",
      ],
      examples: [
        { ru: "Yardım eder misiniz?", en: "Could you help us?" },
        { ru: "Haritada gösterir misiniz?", en: "Could you show me on the map?" },
      ],
    },
  ],
  tasks: [
    listen("trbo6-t1", "Listen. What's happened?", "Kaybolduk! Bu sokak çıkmaz.", [
      ["They're lost, and it's a dead end.", true],
      ["They've found the port.", false],
      ["They've missed the boat.", false],
    ]),
    choice("trbo6-t2", "How do you politely ask “Could you help us?”", [
      ["Yardım eder misiniz?", true],
      ["Yardım et!", false],
      ["Yardım ediyor musun?", false],
    ], { skill: "grammar" }),
    match("trbo6-t3", "Match the pairs.", [
      ["Kaybolduk!", "We're lost!"],
      ["Geri dönelim.", "Let's go back."],
      ["çıkmaz sokak", "dead end"],
      ["taraf", "side, direction"],
    ], { skill: "words" }),
    missing("trbo6-t4", "Which letter is missing? (“We're lost!”)", "Kaybol", "uk!", "d", ["d", "t", "n"]),
    speak("trbo6-t5", "Kayboldunuz mu?", "Evet! Yardım eder misiniz?", "Yes! Could you help us?", { help: "Answer aloud and ask for help." }),
    choice("trbo6-t6", "How do you ask “Can we dive here?”", [
      ["Burada dalabilir miyiz?", true],
      ["Burada dalış var.", false],
      ["Orada dalmak.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "nazar",
    itemName: "Nazar — the blue eye",
    itemNameRu: "Nazar boncuğu",
    ru: "Yaşasın! Bir nazar boncuğu!",
    en: "Hooray! A nazar!",
    a11y: "A blue glass “evil eye” charm, a nazar, hangs over the cabin door and sparkles in the sun.",
    image: p("nazar"),
    steps: ["In the morning Captain Ali hangs a blue eye over the door.", "“Nazar değmesin!” — “To keep the evil eye away!”", "Murzik touches it with his paw.", "Now they'll never get lost again!"],
    bridge: "The last evening in Bodrum. Captain Ali invites everyone to go fishing.",
  },
};

const bodrum7: Lesson = {
  id: "tr-a1-bodrum-7",
  level: "A1",
  cityId: "tr-bodrum",
  number: 7,
  title: "The last evening",
  minutes: 8,
  goals: ["Say it was fun", "Say you'll miss someone", "Review all the words from Bodrum"],
  vocabNote: "Görüşmek üzere — “until we meet again”. It's a little more formal than Görüşürüz.",
  vocab: [
    v("trbo7-1", "Çok eğlenceliydi!", "It was great fun!", "Murzik, Tom and Tarçın laugh on the deck of the gulet.", "Listen to Çok eğlenceliydi", p("l7-1")),
    v("trbo7-2", "Seni özleyeceğim.", "I'll miss you.", "Murzik hugs Tarçın on the quay.", "Listen to Seni özleyeceğim", p("l7-2")),
    v("trbo7-3", "Bir daha gel!", "Come again!", "Captain Ali waves from the gulet with a smile.", "Listen to Bir daha gel", p("l7-3")),
    v("trbo7-4", "Balık tutalım!", "Let's go fishing!", "Murzik casts a fishing line from the side of the boat.", "Listen to Balık tutalım", p("l7-4")),
    v("trbo7-5", "Ne güzel bir akşam!", "What a lovely evening!", "Sunset over the bay, the castle lights reflected in the water.", "Listen to Ne güzel bir akşam", p("l7-5")),
    v("trbo7-6", "İyi ki geldik.", "I'm so glad we came.", "Murzik and Tom sit on deck watching the sunset.", "Listen to İyi ki geldik", p("l7-6")),
    v("trbo7-7", "Görüşmek üzere!", "See you soon!", "Tarçın, with his backpack, waves from the steps of the bus.", "Listen to Görüşmek üzere", p("l7-7")),
  ],
  dialogue: {
    title: "Fishing at sunset",
    note: "Son akşam — “the last evening”. Uyuyacağım — “I'm going to sleep”.",
    lines: [
      line("captain", "Son akşam! Balık tutalım mı?", "The last evening! Shall we go fishing?"),
      line("tarcin", "Ben uyuyacağım…", "I'm going to sleep…"),
      line("murzik", "Tarçın! Hadi, balık tutalım!", "Tarçın! Come on, let's go fishing!"),
      line("tom", "Ne güzel bir akşam!", "What a lovely evening!"),
      line("murzik", "Ali Kaptan, çok eğlenceliydi. Sizi özleyeceğim.", "Captain Ali, it was great fun. I'll miss you."),
      line("captain", "Ben de. Bir daha gelin!", "Me too. Come again!"),
      line("tarcin", "İyi ki geldim. Görüşmek üzere, kuzen!", "I'm so glad I came. See you soon, cousin!"),
    ],
    gist: choice("trbo7-d1", "What do they do on the last evening?", [
      ["They go fishing on the boat.", true],
      ["They go to the museum.", false],
      ["They pack their suitcases.", false],
    ]),
  },
  grammar: [
    {
      title: "Was and will be",
      paragraphs: [
        "For the past, use -dı / -di: Çok eğlenceli-ydi. — It was great fun. For the future, -ecek / -acak: Seni özle-yeceğ-im. — I'll miss you.",
        "The polite “you” here is sizi: Sizi özleyeceğim. — I'll miss you (polite). A polite invitation: Bir daha gelin!",
      ],
      examples: [
        { ru: "Dün çok eğlenceliydi.", en: "Yesterday was great fun." },
        { ru: "Seni çok özleyeceğim.", en: "I'll miss you a lot." },
      ],
    },
  ],
  tasks: [
    listen("trbo7-t1", "Audio exam. What does the captain say?", "Yarın sabah saat yedide limana gideceğiz. Kaybolmayın!", [
      ["Tomorrow at seven in the morning, to the port — and don't get lost.", true],
      ["This evening we're going to the beach.", false],
      ["Tomorrow we're going to the museum.", false],
    ]),
    choice("trbo7-t2", "How do you say “It was great fun”?", [
      ["Çok eğlenceliydi.", true],
      ["Çok eğlenceli olacak.", false],
      ["Çok eğlenceliyim.", false],
    ], { skill: "grammar" }),
    match("trbo7-t3", "Match the pairs.", [
      ["Bir daha gel!", "Come again!"],
      ["Görüşmek üzere!", "See you soon!"],
      ["balık", "fish"],
      ["son akşam", "the last evening"],
    ], { skill: "words" }),
    missing("trbo7-t4", "Which letter is missing? (“I'll miss you”)", "Özleyece", "im.", "ğ", ["ğ", "k", "g"]),
    speak("trbo7-t5", "Bodrum nasıldı?", "Çok eğlenceliydi!", "It was great fun!", { help: "Say aloud how you liked Bodrum." }),
    script("trbo7-t6", "Remember all of Bodrum. Finish the conversations.", [
      { speaker: "Seller", text: "Kaç saatliğine?" },
      { speaker: "You", answer: "Bir günlüğüne.", options: ["Bir günlüğüne.", "Plaja.", "Yasak."] },
      { speaker: "Tarçın", text: "Nereye gidiyorsun?" },
      { speaker: "You", answer: "Plaja gidiyorum.", options: ["Plaja gidiyorum.", "Plajda gidiyorum.", "Kaybolduk!"] },
      { speaker: "Cashier", text: "Flaş yasak." },
      { speaker: "You", answer: "Tamam, teşekkürler.", options: ["Tamam, teşekkürler.", "Bir daha gel!", "Kurtulduk!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "olta",
    itemName: "Fishing rod",
    itemNameRu: "Olta",
    ru: "Yaşasın! Bir olta!",
    en: "Hooray! A fishing rod!",
    a11y: "A wooden fishing rod with a red float leans against the side of the gulet at sunset.",
    image: p("olta"),
    steps: ["Captain Ali gives Murzik a fishing rod.", "Murzik catches a little fish…", "…and lets it go back into the sea.", "He keeps the rod as a souvenir."],
    bridge: "In the morning — off they go. Tarçın heads home to Izmir, and Murzik and Tom travel on east along the coast.",
  },
};

const story: CityStory = {
  home: {
    name: "A cabin on the gulet",
    nameRu: "Guletteki kamara",
    image: p("home"),
    a11y: "A small empty wooden cabin on an old gulet: a round porthole, a bunk and the blue bay outside. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "nazar",
  welcomeRu: "Merhaba, Bodrum!",
  welcomeEn: "Hello, Bodrum!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom on the Bodrum waterfront: little white houses, an old castle and wooden boats in a blue bay.",
  departureImage: p("departure"),
  departureA11y: "Murzik and Tom with their suitcases on the quay. Captain Ali waves from the gulet; Tarçın, with his backpack, yawns.",
  finale: [
    {
      image: p("alley"),
      a11y: "A white Bodrum street at night. In the distance, in the lamplight, the silhouette of a cat in a hat.",
      lines: [
        { en: "That night Murzik can't sleep. The cat in the hat was in the photo in Pamukkale, and now he's here in Bodrum." },
        { ru: "Kim bu kedi? Neden bize yardım ediyor?", en: "Who is this cat? Why is he helping us?" },
        { en: "Murzik decides: if they meet again, he'll definitely talk to him." },
      ],
    },
    {
      image: p("nazar"),
      a11y: "Murzik walks round his cabin on the gulet, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his cabin. Tom takes a photo of it for his travel diary." },
        { en: "Murzik takes Captain Ali's blue nazar with him — to keep the evil eye away on the road." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Bodrum tamamlandı!", en: "Bodrum complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — sixth part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik and Tom with their suitcases on the quay, saying goodbye to Captain Ali and Tarçın.",
      lines: [
        { ru: "Hoşça kal, Bodrum! Hoşça kal, Tarçın!", en: "Bye, Bodrum! Bye, Tarçın!" },
        { ru: "Sıradaki durak: Antalya!", en: "Next stop: Antalya!" },
      ],
    },
    {
      image: p("road"),
      a11y: "The bus drives east along a mountain road by the sea.",
      lines: [{ ru: "Bodrum → Antalya", en: "Bodrum → Antalya" }],
    },
    {
      image: pic("tr/antalya/arrival"),
      a11y: "Murzik and Tom by the ancient Hadrian's Gate in Antalya. Behind them: the narrow streets of Kaleiçi and orange trees.",
      lines: [
        { ru: "Merhaba, Antalya!", en: "Hello, Antalya!" },
        { ru: "Portakal kokusu!", en: "It smells of oranges!" },
      ],
    },
  ],
};

export const trBodrumEn = {
  id: "tr-bodrum",
  name: "Bodrum",
  nameTr: "Bodrum",
  lessons: [bodrum1, bodrum2, bodrum3, bodrum4, bodrum5, bodrum6, bodrum7],
  story,
};
