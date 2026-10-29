import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, fill, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Istanbul · “The European side” · a taxi to Balat, numbers, a room in Balat, the ferry, the weather, the phone, the way to the Galata Tower. English version. */

const p = (name: string) => pic(`tr/istanbul/${name}`);

const istanbul1: Lesson = {
  id: "tr-a1-istanbul-1",
  level: "A1",
  cityId: "tr-istanbul",
  number: 1,
  title: "Moving to Balat",
  minutes: 7,
  goals: ["Take a taxi and give an address", "Say that something is yours", "Ask the driver to stop"],
  vocabNote: "Taxi drivers and passengers use the polite “you”: Bu sizin bavulunuz mu? — Is this your suitcase? The usual answer to “Hoş geldiniz!” (Welcome!) is “Hoş bulduk!”.",
  vocab: [
    v("tris1-1", "Taksi! — Buyurun.", "Taxi! — Get in, please.", "Murzik raises a paw on the pier, and a yellow taxi pulls up.", "Listen to Taksi! Buyurun", p("l1-1"), "[tahk-see — boo-yoo-roon]"),
    v("tris1-2", "Balat'a, lütfen.", "To Balat, please.", "Murzik shows the driver a postcard of colourful houses.", "Listen to Balat'a, lütfen", p("l1-2"), "[bah-lah-tah, lewt-fen]"),
    v("tris1-3", "Bu sizin bavulunuz mu? — Evet, benim.", "Is this your suitcase? — Yes, it's mine.", "The driver points at the suitcase, and Murzik proudly puts a paw on it.", "Listen to Bu sizin bavulunuz mu. Evet, benim", p("l1-3"), "[boo see-zeen bah-voo-loo-nooz moo — eh-vet, beh-neem]"),
    v("tris1-4", "Bu senin çantan mı?", "Is this your bag?", "Murzik hands Tom his camera bag.", "Listen to Bu senin çantan mı", p("l1-4"), "[boo seh-neen chahn-tahn muh]"),
    v("tris1-5", "köprü", "bridge", "The taxi crosses a long bridge over the bay, with fishermen and their rods on it.", "Listen to köprü", p("l1-5"), "[kurp-rew]"),
    v("tris1-6", "Burada durun, lütfen.", "Stop here, please.", "The taxi stops by a colourful house on a steep little street.", "Listen to Burada durun, lütfen", p("l1-6"), "[boo-rah-dah doo-roon, lewt-fen]"),
    v("tris1-7", "Hoş geldiniz! — Hoş bulduk!", "Welcome! — Thank you!", "The driver waves from the window with a smile; Murzik and Tom stand with their suitcases.", "Listen to Hoş geldiniz! Hoş bulduk", p("l1-7"), "[hosh gel-dee-neez — hosh bool-dook]"),
  ],
  dialogue: {
    title: "The taxi",
    note: "Hoş bulduk! is the usual answer to “Welcome!”. Literally it means “we found it good”.",
    lines: [
      line("murzik", "Taksi!", "Taxi!"),
      line("driver", "Buyurun. Nereye?", "Get in, please. Where to?"),
      line("murzik", "Balat'a, lütfen.", "To Balat, please."),
      line("driver", "Bu sizin bavulunuz mu?", "Is this your suitcase?"),
      line("murzik", "Evet, benim. Tom, bu senin çantan mı?", "Yes, it's mine. Tom, is this your bag?"),
      line("tom", "Evet, benim! Teşekkürler.", "Yes, it's mine! Thanks."),
      line("driver", "Bakın, köprü! Balat'a hoş geldiniz!", "Look, the bridge! Welcome to Balat!"),
      line("murzik", "Hoş bulduk! Burada durun, lütfen.", "Thank you! Stop here, please."),
    ],
    gist: choice("tris1-d1", "Where are Murzik and Tom going?", [
      ["To Balat.", true],
      ["To the airport.", false],
      ["To Kadıköy.", false],
    ]),
  },
  grammar: [
    {
      title: "My, your",
      paragraphs: [
        "“My” is benim, “your” (friendly) is senin, “your” (polite) is sizin. They also work as a short answer to “whose?”: Evet, benim. — Yes, it's mine.",
        "Unlike English, the thing itself takes an ending too: bavul-um — my suitcase, bavul-un — your suitcase, bavul-unuz — your suitcase (polite). We'll look at this properly later; for now, learn the questions as whole phrases: Bu sizin bavulunuz mu? Bu senin çantan mı?",
      ],
      examples: [
        { ru: "Bu senin pasaportun mu? — Evet, benim.", en: "Is this your passport? — Yes, it's mine." },
        { ru: "Bu sizin bavulunuz mu? — Hayır.", en: "Is this your suitcase? — No." },
      ],
    },
  ],
  tasks: [
    listen("tris1-t1", "Listen. Where is the passenger going?", "Balat'a, lütfen.", [
      ["To Balat.", true],
      ["To the pier.", false],
      ["To the coffee house.", false],
    ]),
    match("tris1-t2", "Match the pairs.", [
      ["taksi", "taxi"],
      ["köprü", "bridge"],
      ["çanta", "bag"],
      ["bavul", "suitcase"],
    ], { skill: "words" }),
    choice("tris1-t3", "Someone asks you: Bu sizin bavulunuz mu? How do you say “Yes, it's mine” in short?", [
      ["Evet, benim.", true],
      ["Evet, sizin.", false],
      ["Evet, senin.", false],
    ], { skill: "grammar" }),
    missing("tris1-t4", "Which letter is missing? (“bridge”)", "k", "prü", "ö", ["ö", "o", "ü"]),
    speak("tris1-t5", "Buyurun. Nereye?", "Balat'a, lütfen.", "To Balat, please.", { help: "Say aloud where you want to go." }),
    choice("tris1-t6", "The taxi driver is talking very fast. What do you say?", [
      ["Tekrar eder misiniz?", true],
      ["Tekrar eder misin?", false],
      ["Güle güle!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "harita",
    itemName: "Map of Istanbul",
    itemNameRu: "Harita",
    ru: "Yaşasın! Bir İstanbul haritası!",
    en: "Hooray! A map of Istanbul!",
    a11y: "Murzik unfolds a big map of Istanbul with the Bosphorus and ferries on it. Tom points at the Balat neighbourhood.",
    image: p("harita"),
    steps: ["The taxi driver gives Murzik a map of Istanbul.", "They unfold it.", "Here's Kadıköy, here's the Bosphorus, and here's Balat!", "This is where their new home is."],
    bridge: "While Tom pays the taxi driver, Murzik counts everything he can see in the street.",
  },
};

const istanbul2: Lesson = {
  id: "tr-a1-istanbul-2",
  level: "A1",
  cityId: "tr-istanbul",
  number: 2,
  title: "Numbers 0–20",
  minutes: 7,
  goals: ["Count from 0 to 20", "Ask “how many?”", "Give a house or room number"],
  vocabNote: "Turkish numbers are very logical: 11 is on bir (“ten one”), 15 is on beş (“ten five”). No special words like “eleven” or “twelve”!",
  vocab: [
    v("tris2-1", "bir, iki, üç, dört, beş", "one, two, three, four, five", "Murzik counts to five on his paw.", "Listen to bir, iki, üç, dört, beş", p("l2-1"), "[beer, ee-kee, ewch, durt, besh]"),
    v("tris2-2", "altı, yedi, sekiz, dokuz, on", "six, seven, eight, nine, ten", "Ten seagulls fly over the Golden Horn, each with a little number.", "Listen to altı, yedi, sekiz, dokuz, on", p("l2-2"), "[ahl-tuh, yeh-dee, seh-keez, do-kooz, on]"),
    v("tris2-3", "on bir, on iki, on üç, on dört, on beş", "eleven, twelve, thirteen, fourteen, fifteen", "Fifteen white ferries are lined up along the waterfront.", "Listen to on bir, on iki, on üç, on dört, on beş", p("l2-3"), "[on beer, on ee-kee, on ewch, on durt, on besh]"),
    v("tris2-4", "on altı, on yedi, on sekiz, on dokuz, yirmi", "sixteen, seventeen, eighteen, nineteen, twenty", "A seller's tray holds exactly twenty simits.", "Listen to on altı, on yedi, on sekiz, on dokuz, yirmi", p("l2-4"), "[on ahl-tuh, on yeh-dee, on seh-keez, on do-kooz, yeer-mee]"),
    v("tris2-5", "sıfır", "zero", "Murzik holds an empty basket and draws a round zero with his paw.", "Listen to sıfır", p("l2-5"), "[suh-fuhr]"),
    v("tris2-6", "Kaç tane?", "How many?", "Tom points at a flock of seagulls and spreads his hands questioningly.", "Listen to Kaç tane", p("l2-6"), "[kahch tah-neh]"),
    v("tris2-7", "numara", "number", "A blue sign with the number nineteen hangs on a colourful house.", "Listen to numara", p("l2-7"), "[noo-mah-rah]"),
  ],
  dialogue: {
    title: "Seagulls over the Golden Horn",
    note: "Kemal Bey means “Mr Kemal”. Bey goes after a man's first name, and Hanım after a woman's.",
    lines: [
      line("tom", "Murzik, bak! Martılar!", "Murzik, look! Seagulls!"),
      line("murzik", "Bir! İki, üç!", "One! Two, three!"),
      line("tom", "Dört, beş…", "Four, five…"),
      line("murzik", "Altı, yedi!", "Six, seven!"),
      line("tom", "Kaç tane? Yedi mi?", "How many? Seven?"),
      line("murzik", "Evet, yedi martı!", "Yes, seven seagulls!"),
      line("tom", "İşte Kemal Bey'in evi. Numarası on dokuz.", "Here's Kemal Bey's house. It's number nineteen."),
      line("murzik", "Ya oda?", "And the room?"),
      line("tom", "Oda numarası iki.", "Room number two."),
    ],
    gist: choice("tris2-d1", "How many seagulls does Murzik count?", [
      ["Seven.", true],
      ["Three.", false],
      ["Ten.", false],
    ]),
  },
  grammar: [
    {
      title: "Kaç? and numbers",
      paragraphs: [
        "Kaç? means “how many?”. You can answer with just a number: Kaç tane? — Yedi.",
        "11–19 are built as “ten and more”: on bir (11), on beş (15). 20 is yirmi.",
        "Unlike English, a noun after a number stays singular: yedi martı — seven seagulls (literally “seven seagull”), not martılar.",
      ],
      examples: [
        { ru: "Kaç tane? — Beş.", en: "How many? — Five." },
        { ru: "Üç vapur, on martı.", en: "Three ferries, ten seagulls." },
      ],
    },
  ],
  tasks: [
    listen("tris2-t1", "Listen. Which number is it?", "sekiz", [
      ["8", true],
      ["7", false],
      ["3", false],
    ]),
    match("tris2-t2", "Match the numbers.", [
      ["dört", "4"],
      ["dokuz", "9"],
      ["iki", "2"],
      ["on", "10"],
    ], { skill: "words" }),
    choice("tris2-t3", "How do you say “five seagulls”?", [
      ["beş martı", true],
      ["beş martılar", false],
      ["beşler martı", false],
    ], { skill: "grammar" }),
    missing("tris2-t4", "Which letter is missing? (“three”)", "", "ç", "ü", ["ü", "u", "ö"]),
    speak("tris2-t5", "Birden ona kadar say!", "Bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, on.", "One, two, three, four, five, six, seven, eight, nine, ten.", {
      help: "Count aloud from one to ten. Take your time.",
    }),
    choice("tris2-t6", "What does Hoş geldiniz mean?", [
      ["Welcome!", true],
      ["Where's the exit?", false],
      ["Have a good trip!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "perde",
    itemName: "Curtain",
    itemNameRu: "Perde",
    ru: "Yaşasın! Yeni bir perde!",
    en: "Hooray! A new curtain!",
    a11y: "A light curtain with little blue flowers hangs at the window of the room in Balat. Colourful houses outside.",
    image: p("perde"),
    steps: ["A neighbour from across the street gives them a curtain with little blue flowers.", "«Yeni evinize!» — “For your new home!”", "Murzik carries it upstairs to the door.", "Soon it will hang at the window."],
    bridge: "The owner of the house opens the door: “Hoş geldiniz!”",
  },
};

const istanbul3: Lesson = {
  id: "tr-a1-istanbul-3",
  level: "A1",
  cityId: "tr-istanbul",
  number: 3,
  title: "A room in Balat",
  minutes: 7,
  goals: ["Name the room and the things in it", "Say what there is and isn't: var and yok", "Ask where the bathroom is"],
  vocabNote: "Burası means “here, this place”. It's how you show someone a room or a house: Burası mutfak. — This is the kitchen.",
  vocab: [
    v("tris3-1", "ev", "house, home", "A narrow, colourful house in Balat: yellow, with blue shutters.", "Listen to ev", p("l3-1"), "[ev]"),
    v("tris3-2", "oda", "room", "A small bright room with a wooden floor.", "Listen to oda", p("l3-2"), "[o-dah]"),
    v("tris3-3", "Burası senin odan.", "This is your room.", "Kemal Bey, an elderly man with a moustache, opens the door and shows Murzik the room with a smile.", "Listen to Burası senin odan", p("l3-3"), "[boo-rah-suh seh-neen o-dahn]"),
    v("tris3-4", "anahtar", "key", "Kemal Bey hands Murzik an old iron key.", "Listen to anahtar", p("l3-4"), "[ah-nah-tar]"),
    v("tris3-5", "pencere", "window", "A big window with the roofs of Balat and the Golden Horn beyond it.", "Listen to pencere", p("l3-5"), "[pen-jeh-reh]"),
    v("tris3-6", "Banyo nerede?", "Where's the bathroom?", "Murzik, a towel over his shoulder, looks around the hallway questioningly.", "Listen to Banyo nerede", p("l3-6"), "[bahn-yo neh-reh-deh]"),
    v("tris3-7", "Ne güzel!", "How lovely!", "Murzik presses his paws to his chest and gazes out of the window in delight.", "Listen to Ne güzel", p("l3-7"), "[neh gew-zel]"),
  ],
  dialogue: {
    title: "The house in Balat",
    note: "Odada means “in the room”: oda + da. The ending -da / -de means “in, at”: evde — at home, Paris'te — in Paris.",
    lines: [
      line("kemal", "Hoş geldiniz! Ben Kemal. Burası benim evim.", "Welcome! I'm Kemal. This is my house."),
      line("tom", "Hoş bulduk! Memnun oldum.", "Thank you! Nice to meet you."),
      line("kemal", "Murzik, burası senin odan. Bu da anahtar.", "Murzik, this is your room. And here's the key."),
      line("murzik", "Teşekkür ederim! Ne güzel! Büyük bir pencere var!", "Thank you! How lovely! There's a big window!"),
      line("kemal", "Odada dolap var ama yatak yok. Yatak yarın geliyor.", "There's a wardrobe in the room, but no bed. The bed's coming tomorrow."),
      line("murzik", "Önemli değil! Banyo nerede?", "No problem! Where's the bathroom?"),
      line("kemal", "Banyo orada, sağda.", "The bathroom's over there, on the right."),
    ],
    gist: choice("tris3-d1", "What isn't in the room yet?", [
      ["A bed.", true],
      ["A window.", false],
      ["A key.", false],
    ]),
  },
  grammar: [
    {
      title: "Var and yok — there is, there isn't",
      paragraphs: [
        "Var means “there is”, yok means “there isn't”. They go at the end of the sentence: Odada pencere var. — There's a window in the room (literally “in-the-room window there-is”).",
        "Question: Banyo var mı? — Is there a bathroom? Answer: Evet, var. / Hayır, yok.",
      ],
      examples: [
        { ru: "Odada büyük bir pencere var.", en: "There's a big window in the room." },
        { ru: "Dolap var mı? — Hayır, yok.", en: "Is there a wardrobe? — No, there isn't." },
      ],
    },
  ],
  tasks: [
    fill("tris3-t1", "Fill in the word: “There's no bed in the room”.", "Odada yatak", ".", "yok", ["yok", "var", "değil"], { skill: "grammar" }),
    listen("tris3-t2", "Listen. What's in the room?", "Odada büyük bir pencere var.", [
      ["A big window.", true],
      ["A big bed.", false],
      ["A wardrobe.", false],
    ]),
    match("tris3-t3", "Match the pairs.", [
      ["ev", "house"],
      ["oda", "room"],
      ["anahtar", "key"],
      ["pencere", "window"],
    ], { skill: "words" }),
    spell("tris3-t4", "Spell the word for “window”.", "pencere"),
    speak("tris3-t5", "Odanda ne var?", "Odamda bir yatak ve bir pencere var.", "There's a bed and a window in my room.", {
      help: "Say aloud what's in your room.",
    }),
    choice("tris3-t6", "How do you ask a taxi driver to stop here?", [
      ["Burada durun, lütfen.", true],
      ["Balat'a, lütfen.", false],
      ["Nerelisin?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yatak",
    itemName: "Bed",
    itemNameRu: "Yatak",
    ru: "Yaşasın! Yeni bir yatak!",
    en: "Hooray! A new bed!",
    a11y: "A small bed with an embroidered bedspread stands in the room. Murzik jumps onto it with joy.",
    image: p("yatak"),
    steps: ["In the morning the bed arrives.", "Kemal Bey and Tom put it by the window.", "Murzik jumps onto the bedspread.", "So soft!"],
    bridge: "Tom calls: “Murzik, let's go and see the city!”",
  },
};

const istanbul4: Lesson = {
  id: "tr-a1-istanbul-4",
  level: "A1",
  cityId: "tr-istanbul",
  number: 4,
  title: "Ferry or metro?",
  minutes: 7,
  goals: ["Name kinds of transport", "Say how you travel: -la / -le", "Buy a ticket and find the stop"],
  vocabNote: "Durak means “stop” — a bus or tram stop: Durak nerede? — Where's the stop?",
  vocab: [
    v("tris4-1", "vapur", "ferry", "A white Istanbul ferry sails along the Bosphorus with seagulls behind it.", "Listen to vapur", p("l4-1"), "[vah-poor]"),
    v("tris4-2", "metro", "metro, underground", "A metro entrance with a big letter M.", "Listen to metro", p("l4-2"), "[met-ro]"),
    v("tris4-3", "tramvay", "tram", "An old red tram rolls along a pedestrian street.", "Listen to tramvay", p("l4-3"), "[trahm-vai]"),
    v("tris4-4", "otobüs", "bus", "A city bus pulls up at a stop.", "Listen to otobüs", p("l4-4"), "[o-to-bews]"),
    v("tris4-5", "Vapurla gidelim!", "Let's go by ferry!", "Murzik happily tugs Tom by the sleeve towards the pier.", "Listen to Vapurla gidelim", p("l4-5"), "[vah-poor-lah gee-deh-leem]"),
    v("tris4-6", "Bir bilet, lütfen.", "One ticket, please.", "Murzik hands a coin through the ticket-office window.", "Listen to Bir bilet, lütfen", p("l4-6"), "[beer bee-let, lewt-fen]"),
    v("tris4-7", "Durak nerede?", "Where's the stop?", "Tom looks around the street with a map in his hands.", "Listen to Durak nerede", p("l4-7"), "[doo-rahk neh-reh-deh]"),
  ],
  dialogue: {
    title: "How shall we go?",
    note: "Çünkü means “because”. We'll learn it later — for now, just listen.",
    lines: [
      line("tom", "Murzik, Eminönü'ne nasıl gidelim? Metroyla mı, otobüsle mi?", "Murzik, how shall we get to Eminönü? By metro or by bus?"),
      line("murzik", "Vapurla gidelim!", "Let's go by ferry!"),
      line("tom", "Vapurla mı? Neden?", "By ferry? Why?"),
      line("murzik", "Çünkü vapurda martılar var!", "Because there are seagulls on the ferry!"),
      line("tom", "İki bilet, lütfen.", "Two tickets, please."),
      line("cashier", "Buyurun. Vapur on dakika sonra.", "Here you are. The ferry's in ten minutes."),
      line("murzik", "Hadi, Tom!", "Come on, Tom!"),
    ],
    gist: choice("tris4-d1", "How do Tom and Murzik travel?", [
      ["By ferry.", true],
      ["By metro.", false],
      ["By bus.", false],
    ]),
  },
  grammar: [
    {
      title: "By what: -la / -le",
      paragraphs: [
        "English says “by ferry”, “by bus”; Turkish adds the ending -la or -le: vapur-la — by ferry, otobüs-le — by bus. After a, ı, o, u use -la; after e, i, ö, ü use -le.",
        "If the word ends in a vowel, add a y first: metro-yla — by metro, araba-yla — by car.",
      ],
      examples: [
        { ru: "Otobüsle gidelim.", en: "Let's go by bus." },
        { ru: "Metroyla gidiyorum.", en: "I'm going by metro." },
      ],
    },
  ],
  tasks: [
    choice("tris4-t1", "How do you say “by tram”?", [
      ["tramvayla", true],
      ["tramvayle", false],
      ["tramvayda", false],
    ], { skill: "grammar" }),
    listen("tris4-t2", "Listen. How many tickets are they asking for?", "İki bilet, lütfen.", [
      ["Two.", true],
      ["One.", false],
      ["Three.", false],
    ]),
    match("tris4-t3", "Match the pairs.", [
      ["vapur", "ferry"],
      ["otobüs", "bus"],
      ["bilet", "ticket"],
      ["durak", "stop"],
    ], { skill: "words" }),
    missing("tris4-t4", "Which letter is missing? (“bus”)", "otob", "s", "ü", ["ü", "u", "ı"]),
    speak("tris4-t5", "Nasıl gidelim?", "Vapurla gidelim!", "Let's go by ferry!", { help: "Suggest aloud how to travel." }),
    listen("tris4-t6", "Remember the numbers. Which number do you hear?", "on beş", [
      ["15", true],
      ["5", false],
      ["50", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "vapur",
    itemName: "Model ferry",
    itemNameRu: "Vapur",
    ru: "Yaşasın! Küçük bir vapur!",
    en: "Hooray! A little ferry!",
    a11y: "A small wooden model of a white Istanbul ferry stands on the windowsill.",
    image: p("vapur"),
    steps: ["They sell toy ferries on the pier.", "Tom buys one for Murzik.", "Murzik puts it on the windowsill.", "Now there's a ferry sailing at home too!"],
    bridge: "On the way back it starts to rain. And it really pours!",
  },
};

const istanbul5: Lesson = {
  id: "tr-a1-istanbul-5",
  level: "A1",
  cityId: "tr-istanbul",
  number: 5,
  title: "Rain again!",
  minutes: 7,
  goals: ["Ask about the weather", "Say: it's raining, cold, hot, windy", "Be happy about the sun"],
  vocabNote: "Rüzgâr means “wind”. The little hat over â softens the g before it: [rewz-gyar].",
  vocab: [
    v("tris5-1", "Hava nasıl?", "What's the weather like?", "Tom looks at the grey sky over the Bosphorus.", "Listen to Hava nasıl", p("l5-1"), "[hah-vah nah-suhl]"),
    v("tris5-2", "Yağmur yağıyor.", "It's raining.", "Rain pours down on the ferry, drops drumming on the deck.", "Listen to Yağmur yağıyor", p("l5-2"), "[yah-moor yah-uh-yor]"),
    v("tris5-3", "Hava güzel.", "The weather's nice.", "A sunny day, a blue sky over mosques and ferries.", "Listen to Hava güzel", p("l5-3"), "[hah-vah gew-zel]"),
    v("tris5-4", "Soğuk.", "It's cold.", "Murzik shivers and wraps himself in his scarf.", "Listen to Soğuk", p("l5-4"), "[so-ook]"),
    v("tris5-5", "Sıcak.", "It's hot.", "Murzik fans himself with a paw in the bright sun.", "Listen to Sıcak", p("l5-5"), "[suh-jahk]"),
    v("tris5-6", "Rüzgâr var.", "It's windy.", "The wind tugs at Murzik's scarf and at passers-by's hats.", "Listen to Rüzgâr var", p("l5-6"), "[rewz-gyar var]"),
    v("tris5-7", "Güneş açtı!", "The sun's come out!", "The sun comes out from behind the clouds, with a rainbow over the Bosphorus.", "Listen to Güneş açtı", p("l5-7"), "[gew-nesh ahch-tuh]"),
  ],
  dialogue: {
    title: "Rain on the ferry",
    note: "A simit is a sesame bread ring, sold on every corner. And in Turkey tea comes in small glasses — even when it's hot outside.",
    lines: [
      line("tom", "Hava nasıl? Ah, yağmur yağıyor!", "What's the weather like? Oh, it's raining!"),
      line("murzik", "Ve rüzgâr var. Soğuk!", "And it's windy. It's cold!"),
      line("simitci", "Simit! Sıcak çay! Buyurun!", "Simit! Hot tea! Here you go!"),
      line("tom", "İki çay ve bir simit, lütfen.", "Two teas and one simit, please."),
      line("simitci", "Buyurun. Hava kötü ama çay sıcak!", "Here you are. The weather's bad, but the tea's hot!"),
      line("murzik", "Bakın! Güneş açtı!", "Look! The sun's come out!"),
      line("simitci", "İstanbul böyle: yağmur, güneş, yağmur!", "That's Istanbul for you: rain, sun, rain!"),
    ],
    gist: choice("tris5-d1", "What's the weather like at the start?", [
      ["Rainy and windy.", true],
      ["Hot and sunny.", false],
      ["It's snowing.", false],
    ]),
  },
  grammar: [
    {
      title: "Hava + a word",
      paragraphs: [
        "Talking about the weather is easy: Hava güzel. Hava soğuk. Literally “weather nice”, “weather cold” — no word for “is” is needed.",
        "In Turkish the rain “rains”: Yağmur yağıyor — literally “rain is raining”. The ending -iyor means “right now, in progress”, like English -ing.",
      ],
      examples: [
        { ru: "Hava çok sıcak.", en: "It's very hot." },
        { ru: "Bugün yağmur yağıyor.", en: "It's raining today." },
      ],
    },
  ],
  tasks: [
    listen("tris5-t1", "Listen. What's the weather like?", "Rüzgâr var ve soğuk.", [
      ["Windy and cold.", true],
      ["Warm and sunny.", false],
      ["It's raining.", false],
    ]),
    choice("tris5-t2", "What does Sıcak mean?", [
      ["It's hot.", true],
      ["It's cold.", false],
      ["It's windy.", false],
    ], { skill: "words" }),
    choice("tris5-t3", "How do you say “The weather's nice”?", [
      ["Hava güzel.", true],
      ["Hava var güzel.", false],
      ["Güzel hava yok.", false],
    ], { skill: "grammar" }),
    missing("tris5-t4", "Which letter is missing? (“rain”)", "Ya", "mur", "ğ", ["ğ", "g", "h"]),
    speak("tris5-t5", "Bugün hava nasıl?", "Bugün hava güzel.", "The weather's nice today.", { help: "Say aloud what the weather's like where you are today." }),
    choice("tris5-t6", "You want to go by metro. What do you say?", [
      ["Metroyla gidelim!", true],
      ["Metroda gidelim!", false],
      ["Metro gidelim!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "semsiye",
    itemName: "Red umbrella",
    itemNameRu: "Şemsiye",
    ru: "Yaşasın! Kırmızı bir şemsiye!",
    en: "Hooray! A red umbrella!",
    a11y: "Murzik holds a small red umbrella over his head. Rain drips from its edges; the Bosphorus is behind him.",
    image: p("semsiye"),
    steps: ["The simit seller pulls an umbrella out from under his tray.", "“Al, hediye!” — “Here, a present!”", "Murzik opens the red umbrella.", "Now the rain doesn't matter!"],
    bridge: "Back home, Murzik's phone rings. Who could it be?",
  },
};

const istanbul6: Lesson = {
  id: "tr-a1-istanbul-6",
  level: "A1",
  cityId: "tr-istanbul",
  number: 6,
  title: "Call me!",
  minutes: 7,
  goals: ["Answer the phone and say who you are", "Ask for a phone number", "Ask someone to call and promise to call back"],
  vocabNote: "Turks usually say phone numbers in groups, but you can also say them digit by digit: sıfır, beş, üç, iki…",
  vocab: [
    v("tris6-1", "Alo?", "Hello? (on the phone)", "Murzik holds the receiver of an old phone to his ear.", "Listen to Alo", p("l6-1"), "[ah-lo]"),
    v("tris6-2", "Kim arıyor?", "Who's calling?", "Murzik, receiver in paw, raises his eyebrows in surprise.", "Listen to Kim arıyor", p("l6-2"), "[keem ah-ruh-yor]"),
    v("tris6-3", "Benim, Tom.", "It's me, Tom.", "Tom talks on his mobile in the street and waves.", "Listen to Benim, Tom", p("l6-3"), "[beh-neem, tom]"),
    v("tris6-4", "Telefon numaran ne?", "What's your phone number?", "Tom holds a notepad and pen, ready to write the number down.", "Listen to Telefon numaran ne", p("l6-4"), "[teh-leh-fon noo-mah-rahn neh]"),
    v("tris6-5", "Beni ara!", "Call me!", "Murzik makes a “call me” sign, his paw held to his ear.", "Listen to Beni ara", p("l6-5"), "[beh-nee ah-rah]"),
    v("tris6-6", "Şimdi müsait misin?", "Is now a good time to talk?", "Tom makes a careful call and asks with a polite smile.", "Listen to Şimdi müsait misin", p("l6-6"), "[sheem-dee mew-sah-eet mee-seen]"),
    v("tris6-7", "Sonra ararım.", "I'll call you back later.", "Murzik, his paws full of bags, holds the phone with his shoulder.", "Listen to Sonra ararım", p("l6-7"), "[son-rah ah-rah-ruhm]"),
  ],
  dialogue: {
    title: "A phone call",
    note: "Akşam means “in the evening”. Tamam means “OK, agreed” — you'll hear it everywhere in Turkey.",
    lines: [
      line("murzik", "Alo?", "Hello?"),
      line("kemal", "Alo, Murzik? Benim, Kemal.", "Hello, Murzik? It's me, Kemal."),
      line("murzik", "Merhaba, Kemal Bey! Nasılsınız?", "Hello, Kemal Bey! How are you?"),
      line("kemal", "İyiyim. Şimdi müsait misin?", "Fine. Is now a good time to talk?"),
      line("murzik", "Evet, müsaitim.", "Yes, it's fine."),
      line("kemal", "Akşam çatıda çay içelim mi? Tom'un telefon numarası ne?", "Shall we have tea on the roof this evening? What's Tom's phone number?"),
      line("murzik", "Sıfır, beş, üç, iki… Sonra Tom sizi arar.", "Zero, five, three, two… Tom will call you later."),
      line("kemal", "Tamam. Akşam görüşürüz!", "OK. See you this evening!"),
    ],
    gist: choice("tris6-d1", "Who calls Murzik?", [
      ["Kemal Bey.", true],
      ["Tom.", false],
      ["Ayşe Teyze.", false],
    ]),
  },
  grammar: [
    {
      title: "Ara! and beni",
      paragraphs: [
        "A friendly request is just the bare verb: ara! — call!, gel! — come here!, bak! — look!",
        "“Me” is beni and “you” is seni — the forms for the person the action is done to, like English “me” instead of “I” (ben). So “Call me!” is Beni ara! — not Ben ara!",
      ],
      examples: [
        { ru: "Beni ara!", en: "Call me!" },
        { ru: "Sonra seni ararım.", en: "I'll call you later." },
      ],
    },
  ],
  tasks: [
    match("tris6-t1", "Match the pairs.", [
      ["Alo?", "Hello? (on the phone)"],
      ["Kim arıyor?", "Who's calling?"],
      ["Beni ara!", "Call me!"],
      ["Sonra ararım.", "I'll call you back later."],
    ], { skill: "words" }),
    listen("tris6-t2", "Listen to the phone number. What is it?", "Sıfır, beş, üç, iki.", [
      ["0532", true],
      ["0523", false],
      ["0352", false],
    ]),
    choice("tris6-t3", "How do you say “Call me!”?", [
      ["Beni ara!", true],
      ["Bana ara!", false],
      ["Ben ara!", false],
    ], { skill: "grammar" }),
    missing("tris6-t4", "Which letter is missing? (“free, available”)", "m", "sait", "ü", ["ü", "u", "i"]),
    speak("tris6-t5", "Telefon numaran ne?", "Telefon numaram sıfır, beş, üç, iki…", "My number is zero, five, three, two…", {
      help: "Say a phone number aloud, digit by digit. You can make one up.",
    }),
    listen("tris6-t6", "Remember the weather. What do you hear?", "Yağmur yağıyor.", [
      ["It's raining.", true],
      ["It's hot.", false],
      ["It's windy.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "telefon",
    itemName: "Old telephone",
    itemNameRu: "Telefon",
    ru: "Yaşasın! Eski bir telefon!",
    en: "Hooray! An old telephone!",
    a11y: "An old green rotary telephone stands on the little table. Murzik picks up the receiver.",
    image: p("telefon"),
    steps: ["Kemal Bey points to the old phone in the room: «Artık bu senin!» — “It's yours now!”", "“Bu çok eski, ama çalışıyor!” — “It's very old, but it works!”", "Murzik turns the dial.", "Ring-ring!"],
    bridge: "In the evening they drink tea on the roof. Tomorrow Murzik wants to find the Galata Tower: Grandma Asya drew it on her postcard.",
  },
};

const istanbul7: Lesson = {
  id: "tr-a1-istanbul-7",
  level: "A1",
  cityId: "tr-istanbul",
  number: 7,
  title: "Which way?",
  minutes: 8,
  goals: ["Ask the way", "Understand: straight on, right, left, near, far", "Review all the words from Istanbul"],
  vocabNote: "Yakın mı? — “Is it near?”. As you know, the little word mı turns a word into a question.",
  vocab: [
    v("tris7-1", "Galata Kulesi nerede?", "Where's the Galata Tower?", "Murzik holds the postcard with the drawing of the tower and asks a passer-by.", "Listen to Galata Kulesi nerede", p("l7-1"), "[gah-lah-tah koo-leh-see neh-reh-deh]"),
    v("tris7-2", "Düz gidin.", "Go straight on.", "A passer-by points straight ahead down a narrow street.", "Listen to Düz gidin", p("l7-2"), "[dewz gee-deen]"),
    v("tris7-3", "Sağa dönün.", "Turn right.", "An arrow pointing right on an old sign at a street corner.", "Listen to Sağa dönün", p("l7-3"), "[sah-ah dur-newn]"),
    v("tris7-4", "Sola dönün.", "Turn left.", "An arrow pointing left on an old sign at a street corner.", "Listen to Sola dönün", p("l7-4"), "[so-lah dur-newn]"),
    v("tris7-5", "Yakın mı?", "Is it near?", "Murzik looks questioningly at a long flight of steps going up.", "Listen to Yakın mı", p("l7-5"), "[yah-kuhn muh]"),
    v("tris7-6", "Hayır, uzak.", "No, it's far.", "A passer-by points somewhere very far away, beyond the hills.", "Listen to Hayır, uzak", p("l7-6"), "[hah-yuhr, oo-zahk]"),
    v("tris7-7", "Burada!", "Here it is!", "Murzik and Tom stand at the foot of the Galata Tower, pointing at it happily.", "Listen to Burada", p("l7-7"), "[boo-rah-dah]"),
  ],
  dialogue: {
    title: "The way to the tower",
    note: "Yukarı means “up”. Steep streets and steps lead up from the water to the Galata Tower.",
    lines: [
      line("murzik", "Pardon, Galata Kulesi nerede?", "Excuse me, where's the Galata Tower?"),
      line("passerby", "Galata Kulesi mi? Düz gidin, sonra sağa dönün.", "The Galata Tower? Go straight on, then turn right."),
      line("murzik", "Yakın mı?", "Is it near?"),
      line("passerby", "Evet, yakın. Beş dakika.", "Yes, it's near. Five minutes."),
      line("tom", "Sağa mı, sola mı?", "Right or left?"),
      line("passerby", "Sağa! Sonra yukarı.", "Right! Then up."),
      line("murzik", "Çok teşekkürler!", "Thanks a lot!"),
      line("tom", "Burada! İşte Galata Kulesi!", "Here it is! There's the Galata Tower!"),
    ],
    gist: choice("tris7-d1", "Where are Murzik and Tom going?", [
      ["To the Galata Tower.", true],
      ["To the ferry.", false],
      ["Home.", false],
    ]),
  },
  grammar: [
    {
      title: "Polite requests: -in",
      paragraphs: [
        "A polite request (to someone you'd call siz) is the verb plus -in, -ın, -un or -ün: dön → dönün (turn), bak → bakın (look).",
        "Watch out: git → gidin (go). In some words a t between vowels turns into d.",
      ],
      examples: [
        { ru: "Düz gidin, sonra sola dönün.", en: "Go straight on, then turn left." },
        { ru: "Bakın, burada!", en: "Look, here it is!" },
      ],
    },
  ],
  tasks: [
    listen("tris7-t1", "Audio exam. Listen. Which way do you need to turn?", "Düz gidin, sonra sola dönün.", [
      ["Straight on, then left.", true],
      ["Straight on, then right.", false],
      ["Right away to the right.", false],
    ]),
    choice("tris7-t2", "How do you politely say “Look!”?", [
      ["Bakın!", true],
      ["Bak!", false],
      ["Baksın!", false],
    ], { skill: "grammar" }),
    match("tris7-t3", "Match the pairs.", [
      ["yakın", "near"],
      ["uzak", "far"],
      ["sağa", "to the right"],
      ["sola", "to the left"],
    ], { skill: "words" }),
    spell("tris7-t4", "Spell the word for “tower”.", "kule"),
    speak("tris7-t5", "Pardon, durak nerede?", "Düz gidin, sonra sağa dönün.", "Go straight on, then turn right.", { help: "Give directions aloud." }),
    script("tris7-t6", "Remember all of Istanbul. Finish the conversations.", [
      { speaker: "Taxi driver", text: "Buyurun. Nereye?" },
      { speaker: "You", answer: "Balat'a, lütfen.", options: ["Balat'a, lütfen.", "Alo?", "Sağa dönün."] },
      { speaker: "Kemal Bey", text: "Burası senin odan." },
      { speaker: "You", answer: "Teşekkür ederim! Ne güzel!", options: ["Teşekkür ederim! Ne güzel!", "Yağmur yağıyor.", "Kim arıyor?"] },
      { speaker: "Tom", text: "Nasıl gidelim?" },
      { speaker: "You", answer: "Vapurla gidelim!", options: ["Vapurla gidelim!", "Vapur gidelim!", "Hayır, uzak."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bardak",
    itemName: "Tulip tea glasses",
    itemNameRu: "Çay bardakları",
    ru: "Yaşasın! Çay bardakları!",
    en: "Hooray! Tea glasses!",
    a11y: "Two tulip-shaped glasses of hot red tea stand on a copper tray. The Galata Tower is outside the window.",
    image: p("bardak"),
    steps: ["There's a little tea house at the foot of the tower.", "The owner gives Murzik two tea glasses.", "“Bunlar senin! Afiyet olsun!” — “These are yours! Enjoy!”", "Murzik carefully wraps them in his scarf."],
    bridge: "Time to pack the suitcase. But first — one last ferry, and the old simit seller.",
  },
};

const story: CityStory = {
  home: {
    name: "A room in Balat",
    nameRu: "Balat'taki oda",
    image: p("home"),
    a11y: "A small empty room in a colourful house in Balat. Through the big window: rooftops and the Golden Horn. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "bardak",
  welcomeRu: "Merhaba, Balat!",
  welcomeEn: "Hello, Balat!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom with their suitcases on the Istanbul waterfront. Behind them: the Galata Tower, ferries on the Bosphorus and seagulls.",
  departureImage: p("departure"),
  departureA11y: "Murzik and Tom with their suitcases on the pier. A fast ferry waits at the quay, with seagulls circling overhead.",
  finale: [
    {
      image: p("simitci"),
      a11y: "On the deck of the ferry, an elderly seller with a tray of simits looks at the postcard in Murzik's paws and smiles. Tom stands beside them.",
      lines: [
        { en: "The same simit seller is on the ferry again. Murzik shows him Grandma's postcard." },
        { ru: "Asya mı? Onu hatırlıyorum!", en: "Asya? I remember her!" },
        { en: "“A ginger cat who painted ferries and seagulls. One day she said: I want to see real silk — and off she went, south across the sea.”" },
      ],
    },
    {
      image: p("bardak"),
      a11y: "Murzik walks round his room in Balat, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his room in Balat. Tom takes a photo of it for his travel diary." },
        { en: "Murzik takes his favourite thing with him: the tulip tea glasses." },
        { en: "The map of Istanbul goes into the suitcase pocket, next to the postcards." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "İstanbul tamamlandı!", en: "Istanbul complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — second part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik and Tom with their suitcases on the pier by the fast ferry.",
      lines: [
        { ru: "Hoşça kal, İstanbul!", en: "Bye, Istanbul!" },
        { ru: "Sıradaki durak: Bursa!", en: "Next stop: Bursa!" },
      ],
    },
    {
      image: p("to-bursa"),
      a11y: "A fast ferry crosses the Sea of Marmara from Istanbul to Bursa. Murzik and Tom stand on deck, looking ahead.",
      lines: [{ ru: "İstanbul → Bursa", en: "Istanbul → Bursa" }],
    },
    {
      image: pic("tr/bursa/arrival"),
      a11y: "Murzik and Tom have arrived in Bursa. Behind them: green Mount Uludağ and old domes, with trees all around.",
      lines: [
        { ru: "Merhaba, Bursa!", en: "Hello, Bursa!" },
        { ru: "Yeni bir şehir. Yeni kelimeler.", en: "A new city. New words." },
      ],
    },
  ],
};

export const trIstanbulEn = {
  id: "tr-istanbul",
  name: "Istanbul",
  nameTr: "İstanbul",
  lessons: [istanbul1, istanbul2, istanbul3, istanbul4, istanbul5, istanbul6, istanbul7],
  story,
};
