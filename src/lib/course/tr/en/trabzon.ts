import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Trabzon · “At the hotel” · a booking, things not working, requests, a missing suitcase, the post office, checking out. English version. */

const p = (name: string) => pic(`tr/trabzon/${name}`);

const trabzon1: Lesson = {
  id: "tr-a1-trabzon-1",
  level: "A1",
  cityId: "tr-trabzon",
  number: 1,
  title: "I have a booking",
  minutes: 7,
  goals: ["Say you have a booking", "Say “for two nights”: iki gece", "Ask about breakfast and the floor"],
  vocabNote: "Remember: no plural after a number: iki gece — “two nights” (literally “two night”), üç gün — “three days”, beş oda — “five rooms”.",
  vocab: [
    v("trtt1-1", "Rezervasyonum var.", "I have a booking.", "Tom at the reception desk, dripping with rain.", "Listen to Rezervasyonum var", p("l1-1")),
    v("trtt1-2", "iki gece", "two nights", "Two moons over the Black Sea.", "Listen to iki gece", p("l1-2")),
    v("trtt1-3", "iki kişilik oda", "a double room, a room for two", "A room with two beds and a window onto the sea.", "Listen to iki kişilik oda", p("l1-3")),
    v("trtt1-4", "Anahtarınız burada.", "Here's your key.", "An old key with a wooden fob numbered 305.", "Listen to Anahtarınız burada", p("l1-4")),
    v("trtt1-5", "Kahvaltı dahil mi?", "Is breakfast included?", "Tom points at a picture of tea and bread rolls.", "Listen to Kahvaltı dahil mi", p("l1-5")),
    v("trtt1-6", "Oda kaçıncı katta?", "Which floor is the room on?", "Murzik looks up the staircase.", "Listen to Oda kaçıncı katta", p("l1-6")),
    v("trtt1-7", "asansör", "lift, elevator", "An old lift with a folding metal gate.", "Listen to asansör", p("l1-7")),
  ],
  dialogue: {
    title: "At the desk",
    note: "Adınız? — “Your name?” Buyurun — “here you are”. Üçüncü kat — “the third floor”.",
    lines: [
      line("tom", "İyi akşamlar! Rezervasyonum var.", "Good evening! I have a booking."),
      line("receptionist", "Hoş geldiniz! Adınız?", "Welcome! Your name?"),
      line("tom", "Tom Brown. İki gece.", "Tom Brown. Two nights."),
      line("receptionist", "Evet, iki kişilik oda. Buyurun, anahtarınız.", "Yes, a room for two. Here's your key."),
      line("murzik", "Kahvaltı dahil mi?", "Is breakfast included?"),
      line("receptionist", "Evet, dahil. Sabah yediden ona kadar.", "Yes, it is. From seven to ten in the morning."),
      line("tom", "Oda kaçıncı katta?", "Which floor is the room on?"),
      line("receptionist", "Üçüncü katta. Asansör orada.", "The third. The lift's over there."),
    ],
    gist: choice("trtt1-d1", "How many nights is Tom's booking for?", [
      ["Two.", true],
      ["Three.", false],
      ["One.", false],
    ]),
  },
  grammar: [
    {
      title: "No -ler after a number",
      paragraphs: [
        "The plural -ler / -lar isn't used after a number: iki gece (two nights), üç gün (three days), dört kişi (four people).",
        "Or after “how many” and “a lot of”: kaç gece? (how many nights?), çok oda (lots of rooms).",
      ],
      examples: [
        { ru: "Üç gece kalıyoruz.", en: "We're staying for three nights." },
        { ru: "Otelde kırk oda var.", en: "The hotel has forty rooms." },
      ],
    },
  ],
  tasks: [
    choice("trtt1-t1", "How do you say “three nights”?", [
      ["üç gece", true],
      ["üç geceler", false],
      ["üçler gece", false],
    ], { skill: "grammar" }),
    listen("trtt1-t2", "Listen. Which floor is the room on?", "Odanız beşinci katta.", [
      ["The fifth.", true],
      ["The first.", false],
      ["The third.", false],
    ]),
    match("trtt1-t3", "Match the pairs.", [
      ["anahtar", "key"],
      ["asansör", "lift"],
      ["gece", "night"],
      ["oda", "room"],
    ], { skill: "words" }),
    missing("trtt1-t4", "Which letter is missing? (“lift”)", "asans", "r", "ö", ["ö", "o", "ü"]),
    speak("trtt1-t5", "İyi akşamlar! Buyurun?", "Rezervasyonum var. İki gece.", "I have a booking. Two nights.", { help: "Say aloud that you have a booking for two nights." }),
    choice("trtt1-t6", "How do you ask “What's the date today?”", [
      ["Bugün ayın kaçı?", true],
      ["Bugün kaçıncı kat?", false],
      ["Bugün kaç gece?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yagmurluk",
    itemName: "Yellow raincoat",
    itemNameRu: "Yağmurluk",
    ru: "Yaşasın! Bir yağmurluk!",
    en: "Hooray! A raincoat!",
    a11y: "A small bright yellow hooded raincoat hangs on a hook by the door of the room.",
    image: p("yagmurluk"),
    steps: ["It's raining outside again.", "The receptionist holds out a little yellow raincoat.", "“Trabzon'da hep lazım!” — “You always need one in Trabzon!”", "Murzik hangs it on the hook by the door."],
    bridge: "Murzik switches on the light in the room… and nothing happens!",
  },
};

const trabzon2: Lesson = {
  id: "tr-a1-trabzon-2",
  level: "A1",
  cityId: "tr-trabzon",
  number: 2,
  title: "It's not working!",
  minutes: 7,
  goals: ["Say that something isn't working", "Make negatives: çalışmıyor", "Ask for help on the phone"],
  vocabNote: "Çalışmak means “to work” — for both people and machines, just like English. Bozuk means “broken”.",
  vocab: [
    v("trtt2-1", "Işık yanmıyor.", "The light isn't working.", "Murzik clicks the switch in the dark room.", "Listen to Işık yanmıyor", p("l2-1")),
    v("trtt2-2", "Klima çalışmıyor.", "The air conditioning isn't working.", "Tom taps the air-conditioner remote.", "Listen to Klima çalışmıyor", p("l2-2")),
    v("trtt2-3", "Sıcak su yok.", "There's no hot water.", "Murzik flinches under a cold shower.", "Listen to Sıcak su yok", p("l2-3")),
    v("trtt2-4", "Televizyon bozuk.", "The TV is broken.", "Nothing but grey snow on the TV screen.", "Listen to Televizyon bozuk", p("l2-4")),
    v("trtt2-5", "Yardım edebilir misiniz?", "Can you help?", "Tom calls on the room phone.", "Listen to Yardım edebilir misiniz", p("l2-5")),
    v("trtt2-6", "Hemen geliyorum.", "I'm coming right away.", "The receptionist hurries down the corridor with a toolbox.", "Listen to Hemen geliyorum", p("l2-6")),
    v("trtt2-7", "Oldu!", "There we go!", "The light is on in the room again.", "Listen to Oldu", p("l2-7")),
  ],
  dialogue: {
    title: "A call to reception",
    note: "Alo — “hello” (on the phone). Elektrik — “electricity”. Fırtına — “storm”.",
    lines: [
      line("tom", "Alo, iyi akşamlar. Oda üç yüz beş.", "Hello, good evening. Room three hundred and five."),
      line("receptionist", "Buyurun, efendim.", "Yes, sir, how can I help?"),
      line("tom", "Işık yanmıyor. Klima da çalışmıyor.", "The light isn't working. And the air conditioning isn't working either."),
      line("receptionist", "Çok özür dilerim. Elektrik yok, fırtına var.", "I'm very sorry. There's no electricity — there's a storm."),
      line("murzik", "Sıcak su da yok!", "And there's no hot water!"),
      line("receptionist", "Hemen geliyorum. Size bir el feneri getiriyorum.", "I'm coming right away. I'll bring you a torch."),
    ],
    gist: choice("trtt2-d1", "Why isn't the light working?", [
      ["There's a storm, and no electricity.", true],
      ["The bulb has gone.", false],
      ["Tom hasn't paid.", false],
    ]),
  },
  grammar: [
    {
      title: "Isn't doing: -mıyor, -miyor, -muyor, -müyor",
      paragraphs: [
        "The negative goes before -yor: çalış-mıyor (it isn't working), gel-miyor (he isn't coming), bul-muyor (he doesn't find it), gör-müyor (he doesn't see).",
        "The vowel in the negative matches the word: ı, i, u or ü. About yourself: çalışmıyorum — I'm not working, anlamıyorum — I don't understand.",
      ],
      examples: [
        { ru: "Asansör çalışmıyor.", en: "The lift isn't working." },
        { ru: "Murzik uyumuyor, kitap okuyor.", en: "Murzik isn't sleeping; he's reading a book." },
      ],
    },
  ],
  tasks: [
    choice("trtt2-t1", "How do you say “The lift isn't working”?", [
      ["Asansör çalışmıyor.", true],
      ["Asansör çalışıyor.", false],
      ["Asansör çalışmak yok.", false],
    ], { skill: "grammar" }),
    listen("trtt2-t2", "Listen. What isn't working?", "Televizyon çalışmıyor.", [
      ["The TV.", true],
      ["The phone.", false],
      ["The lift.", false],
    ]),
    match("trtt2-t3", "Match the pairs.", [
      ["bozuk", "broken"],
      ["ışık", "light"],
      ["sıcak su", "hot water"],
      ["Oldu!", "There we go!"],
    ], { skill: "words" }),
    missing("trtt2-t4", "Which letter is missing? (“light”)", "", "şık", "I", ["I", "İ", "U"]),
    speak("trtt2-t5", "Resepsiyon, buyurun?", "Klima çalışmıyor. Yardım edebilir misiniz?", "The air conditioning isn't working. Can you help?", { help: "Report something broken aloud and ask for help." }),
    listen("trtt2-t6", "Remember the last lesson. What are they asking?", "Kahvaltı dahil mi?", [
      ["Is breakfast included?", true],
      ["Where's the lift?", false],
      ["How much is the room?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "el-feneri",
    itemName: "Torch",
    itemNameRu: "El feneri",
    ru: "Yaşasın! Bir el feneri!",
    en: "Hooray! A torch!",
    a11y: "A small metal torch shines a warm beam on the wall of the room.",
    image: p("el-feneri"),
    steps: ["The receptionist brings a torch.", "Murzik draws cats and stars on the wall with the beam.", "An hour later the lights come back on.", "“Fener senin olsun!” — “Keep the torch!”"],
    bridge: "In the morning Murzik needs another towel. How can he ask?",
  },
};

const trabzon3: Lesson = {
  id: "tr-a1-trabzon-3",
  level: "A1",
  cityId: "tr-trabzon",
  number: 3,
  title: "Could I have…?",
  minutes: 7,
  goals: ["Ask politely: alabilir miyim?", "Say “I want to see”: görmek istiyorum", "Ask for the Wi-Fi password"],
  vocabNote: "Alabilir miyim? — “Could I have?” It's a ready-made polite phrase: Bir çay alabilir miyim? — “Could I have a tea?”",
  vocab: [
    v("trtt3-1", "Bir havlu daha alabilir miyim?", "Could I have another towel?", "Murzik peeks round the door, wrapped in a tiny towel.", "Listen to Bir havlu daha alabilir miyim", p("l3-1")),
    v("trtt3-2", "yastık", "pillow", "A soft white pillow.", "Listen to yastık", p("l3-2")),
    v("trtt3-3", "Wi-Fi şifresi ne?", "What's the Wi-Fi password?", "Tom at the desk with his laptop.", "Listen to Wi-Fi şifresi ne", p("l3-3")),
    v("trtt3-4", "Ben denizi görmek istiyorum.", "I want to see the sea.", "Murzik presses his nose against the window; it's foggy outside.", "Listen to Ben denizi görmek istiyorum", p("l3-4")),
    v("trtt3-5", "Çay içmek istiyorum.", "I'd like a tea.", "A tulip glass of tea on a saucer.", "Listen to Çay içmek istiyorum", p("l3-5")),
    v("trtt3-6", "Tabii, buyurun.", "Of course, here you are.", "The receptionist holds out a pile of towels.", "Listen to Tabii, buyurun", p("l3-6")),
    v("trtt3-7", "Uzungöl", "Lake Uzungöl", "A lake in green mountains, with a wooden mosque by the water and mist over it.", "Listen to Uzungöl", p("l3-7")),
  ],
  dialogue: {
    title: "Morning requests",
    note: "Daha means “more, another”. Dolapta — “in the wardrobe”. Gezi — “a trip, an excursion”.",
    lines: [
      line("murzik", "Günaydın! Bir havlu daha alabilir miyim?", "Good morning! Could I have another towel?"),
      line("receptionist", "Tabii, buyurun. Yastık da dolapta var.", "Of course, here you are. There's a pillow in the wardrobe too."),
      line("tom", "Wi-Fi şifresi ne?", "What's the Wi-Fi password?"),
      line("receptionist", "Karadeniz, büyük harfle.", "“Karadeniz”, with a capital letter."),
      line("murzik", "Bugün Uzungöl'ü görmek istiyorum!", "Today I want to see Uzungöl!"),
      line("receptionist", "Çok güzel bir yer. Saat onda gezi var.", "It's a beautiful place. There's a trip at ten o'clock."),
    ],
    gist: choice("trtt3-d1", "What does Murzik want to see?", [
      ["Lake Uzungöl.", true],
      ["The sea.", false],
      ["The post office.", false],
    ]),
  },
  grammar: [
    {
      title: "Want to do: -mek istiyorum",
      paragraphs: [
        "“I want to do something” is the verb in its -mek / -mak form plus istiyorum: görmek istiyorum (I want to see), içmek istiyorum (I want to drink), kalmak istiyorum (I want to stay). Note the order: the verb comes first, “want” last.",
        "“I don't want” is istemiyorum: Uyumak istemiyorum! — I don't want to sleep!",
      ],
      examples: [
        { ru: "Akşam denize gitmek istiyorum.", en: "In the evening I want to go to the sea." },
        { ru: "Tom fotoğraf çekmek istiyor.", en: "Tom wants to take photos." },
      ],
    },
  ],
  tasks: [
    choice("trtt3-t1", "How do you say “I want to stay”?", [
      ["Kalmak istiyorum.", true],
      ["Kalıyorum istiyorum.", false],
      ["Kal istiyorum.", false],
    ], { skill: "grammar" }),
    listen("trtt3-t2", "Listen. What are they asking for?", "Bir yastık daha alabilir miyim?", [
      ["Another pillow.", true],
      ["Another towel.", false],
      ["More tea.", false],
    ]),
    match("trtt3-t3", "Match the pairs.", [
      ["havlu", "towel"],
      ["yastık", "pillow"],
      ["şifre", "password"],
      ["daha", "more, another"],
    ], { skill: "words" }),
    spell("trtt3-t4", "Spell the word for “towel”.", "havlu"),
    speak("trtt3-t5", "Ne yapmak istiyorsun?", "Ben denizi görmek istiyorum.", "I want to see the sea.", { help: "Say aloud what you want to do." }),
    choice("trtt3-t6", "How do you say “The light isn't working”?", [
      ["Işık yanmıyor.", true],
      ["Işık yanıyor.", false],
      ["Işık yok yanıyor.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "findik",
    itemName: "Jar of hazelnuts",
    itemNameRu: "Fındık",
    ru: "Yaşasın! Bir kavanoz fındık!",
    en: "Hooray! A jar of hazelnuts!",
    a11y: "A glass jar of roasted hazelnuts, with a green ribbon tied round the lid.",
    image: p("findik"),
    steps: ["At Uzungöl an old woman is selling hazelnuts.", "“Karadeniz'in fındığı en iyisi!” — “Black Sea hazelnuts are the best!”", "She gives Murzik a whole jar.", "The jar goes on the shelf in the room."],
    bridge: "After lunch Murzik comes back to the room… and his suitcase has gone!",
  },
};

const trabzon4: Lesson = {
  id: "tr-a1-trabzon-4",
  level: "A1",
  cityId: "tr-trabzon",
  number: 4,
  title: "The missing suitcase",
  minutes: 7,
  goals: ["Say that something has gone missing", "Talk about the past: -dı, -di, -tı, -ti", "Describe a thing: its colour, what's inside"],
  vocabNote: "Kayboldu — “it's got lost, it's gone missing”. Bıraktım — “I left it”. Endişelenme — “don't worry”.",
  vocab: [
    v("trtt4-1", "Bavulum kayboldu!", "My suitcase has gone!", "Murzik stands in the middle of the empty room, paws to his cheeks.", "Listen to Bavulum kayboldu", p("l4-1")),
    v("trtt4-2", "Burada bıraktım.", "I left it here.", "Murzik points at the empty spot by the bed.", "Listen to Burada bıraktım", p("l4-2")),
    v("trtt4-3", "Rengi ne?", "What colour is it?", "The receptionist holds a notepad and pen.", "Listen to Rengi ne", p("l4-3")),
    v("trtt4-4", "Kırmızı, küçük.", "Red, and small.", "A drawing of a small red suitcase.", "Listen to Kırmızı, küçük", p("l4-4")),
    v("trtt4-5", "İçinde ne var?", "What's inside?", "A diagram: a suitcase with postcards and toys inside.", "Listen to İçinde ne var", p("l4-5")),
    v("trtt4-6", "Bulamıyorum.", "I can't find it.", "Murzik looks under the bed.", "Listen to Bulamıyorum", p("l4-6")),
    v("trtt4-7", "Endişelenme!", "Don't worry!", "Tom puts a hand on Murzik's shoulder.", "Listen to Endişelenme", p("l4-7")),
  ],
  dialogue: {
    title: "The empty room",
    note: "Sabah — “in the morning”. Kartpostallarım — “my postcards”. Arıyoruz — “we're looking”.",
    lines: [
      line("murzik", "Tom! Bavulum kayboldu!", "Tom! My suitcase has gone!"),
      line("tom", "Nerede bıraktın?", "Where did you leave it?"),
      line("murzik", "Sabah burada bıraktım. Şimdi yok!", "I left it here this morning. And now it's gone!"),
      line("receptionist", "Rengi ne?", "What colour is it?"),
      line("murzik", "Kırmızı, küçük. İçinde bütün kartpostallarım var!", "Red, and small. All my postcards are inside!"),
      line("receptionist", "Endişelenme, hemen arıyoruz.", "Don't worry, we'll look for it right away."),
    ],
    gist: choice("trtt4-d1", "What's in the suitcase?", [
      ["All Murzik's postcards.", true],
      ["Tom's camera.", false],
      ["The room key.", false],
    ]),
  },
  grammar: [
    {
      title: "The past: -dı, -di, -du, -dü",
      paragraphs: [
        "The past tense is the ending -dı / -di / -du / -dü: geldi (came), kaldı (stayed), buldu (found), gördü (saw).",
        "After ç, f, h, k, p, s, ş, t it's -tı / -ti / -tu / -tü: bıraktı (left), gitti (went), içti (drank). For “I” add -m: geldim, bıraktım. For “you” add -n: geldin, bıraktın.",
      ],
      examples: [
        { ru: "Dün Trabzon'a geldik.", en: "We came to Trabzon yesterday." },
        { ru: "Murzik çay içti.", en: "Murzik drank some tea." },
      ],
    },
  ],
  tasks: [
    choice("trtt4-t1", "How do you say “I left it”?", [
      ["bıraktım", true],
      ["bırakdım", false],
      ["bırakıyorum", false],
    ], { skill: "grammar" }),
    listen("trtt4-t2", "Listen. What's the suitcase like?", "Bavulum büyük ve mavi.", [
      ["Big and blue.", true],
      ["Small and red.", false],
      ["Big and red.", false],
    ]),
    match("trtt4-t3", "Match the pairs.", [
      ["bavul", "suitcase"],
      ["kayboldu", "it's gone missing"],
      ["içinde", "inside"],
      ["Endişelenme!", "Don't worry!"],
    ], { skill: "words" }),
    missing("trtt4-t4", "Which letter is missing? (“I can't find it”)", "Bula", "ıyorum", "m", ["m", "n", "y"]),
    speak("trtt4-t5", "Ne oldu?", "Bavulum kayboldu! Kırmızı, küçük.", "My suitcase has gone! It's red and small.", { help: "Say aloud what's missing and describe it." }),
    choice("trtt4-t6", "How do you politely ask for another pillow?", [
      ["Bir yastık daha alabilir miyim?", true],
      ["Bir yastık daha istemiyorum.", false],
      ["Yastık çalışmıyor.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bavul-etiketi",
    itemName: "Luggage tag",
    itemNameRu: "Bavul etiketi",
    ru: "Yaşasın! Bir bavul etiketi!",
    en: "Hooray! A luggage tag!",
    a11y: "A leather luggage tag shaped like a cat's head, with a card inside that says “Murzik”.",
    image: p("bavul-etiketi"),
    steps: ["The receptionist brings a leather luggage tag.", "“Bavul bulununca, bunu tak!” — “When your suitcase turns up, put this on it!”", "Murzik writes his name on the card.", "The tag waits on the bedside table."],
    bridge: "While they search for the suitcase, Murzik goes to the post office to ask about the postcard.",
  },
};

const trabzon5: Lesson = {
  id: "tr-a1-trabzon-5",
  level: "A1",
  cityId: "tr-trabzon",
  number: 5,
  title: "At the post office",
  minutes: 7,
  goals: ["Buy a stamp and an envelope", "Ask who sent a postcard", "Say “I don't remember”"],
  vocabNote: "In Turkey the post office is known as PTT. Göndermek means “to send”, hatırlamak “to remember”.",
  vocab: [
    v("trtt5-1", "postane", "post office", "A post office building with a yellow PTT sign.", "Listen to postane", p("l5-1")),
    v("trtt5-2", "pul", "stamp", "A stamp showing green mountains by the sea.", "Listen to pul", p("l5-2")),
    v("trtt5-3", "zarf", "envelope", "A white envelope.", "Listen to zarf", p("l5-3")),
    v("trtt5-4", "Mektup göndermek istiyorum.", "I'd like to send a letter.", "Murzik hands a letter through the window.", "Listen to Mektup göndermek istiyorum", p("l5-4")),
    v("trtt5-5", "Bu kartpostalı kim gönderdi?", "Who sent this postcard?", "Murzik puts the postcard on the counter.", "Listen to Bu kartpostalı kim gönderdi", p("l5-5")),
    v("trtt5-6", "Hatırlamıyorum.", "I don't remember.", "The post office clerk spreads his hands.", "Listen to Hatırlamıyorum", p("l5-6")),
    v("trtt5-7", "Her gün çok mektup geliyor.", "Lots of letters come in every day.", "Piles of letters and parcels behind the counter.", "Listen to Her gün çok mektup geliyor", p("l5-7")),
  ],
  dialogue: {
    title: "Window number two",
    note: "Belki means “maybe”. Yaşlı bir kedi — “an old cat”. Bir sorum var — “I have a question”.",
    lines: [
      line("murzik", "Merhaba! Bir pul ve bir zarf, lütfen.", "Hello! A stamp and an envelope, please."),
      line("postman", "Buyurun. On beş lira.", "Here you are. Fifteen lira."),
      line("murzik", "Bir sorum var. Bu kartpostalı kim gönderdi?", "I have a question. Who sent this postcard?"),
      line("postman", "Hmm… Hatırlamıyorum. Her gün çok mektup geliyor.", "Hmm… I don't remember. Lots of letters come in every day."),
      line("murzik", "Yaşlı bir kedi… belki?", "An old cat… maybe?"),
      line("postman", "Bilmiyorum, özür dilerim.", "I don't know, I'm sorry."),
    ],
    gist: choice("trtt5-d1", "Does the clerk remember who sent the postcard?", [
      ["No, he doesn't.", true],
      ["Yes, it was an old cat.", false],
      ["Yes, it was Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "Isn't doing: review",
      paragraphs: [
        "Negatives: hatırla-mıyor-um (I don't remember), bil-miyor-um (I don't know), gör-müyor-um (I don't see).",
        "Don't mix them up: yok means “there isn't, there's no” (Adres yok. — There's no address), while -mıyor means “isn't doing” (Gelmiyor. — He isn't coming).",
      ],
      examples: [
        { ru: "Postane bugün çalışmıyor.", en: "The post office isn't open today." },
        { ru: "Zarf yok.", en: "There are no envelopes." },
      ],
    },
  ],
  tasks: [
    choice("trtt5-t1", "How do you say “I don't remember”?", [
      ["Hatırlamıyorum.", true],
      ["Hatırlıyorum.", false],
      ["Hatırlamak yok.", false],
    ], { skill: "grammar" }),
    listen("trtt5-t2", "Listen. How much is it?", "Yirmi lira.", [
      ["Twenty lira.", true],
      ["Twelve lira.", false],
      ["Two hundred lira.", false],
    ]),
    match("trtt5-t3", "Match the pairs.", [
      ["postane", "post office"],
      ["pul", "stamp"],
      ["zarf", "envelope"],
      ["mektup", "letter"],
    ], { skill: "words" }),
    spell("trtt5-t4", "Spell the word for “envelope”.", "zarf"),
    speak("trtt5-t5", "Buyurun, ne istiyorsunuz?", "Mektup göndermek istiyorum. Bir pul, lütfen.", "I'd like to send a letter. A stamp, please.", { help: "Say aloud that you'd like to send a letter." }),
    listen("trtt5-t6", "Remember the last lesson. What happened?", "Bavulum kayboldu.", [
      ["A suitcase has gone missing.", true],
      ["The TV broke.", false],
      ["There's no hot water.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pul-albumu",
    itemName: "Stamp album",
    itemNameRu: "Pul albümü",
    ru: "Yaşasın! Bir pul albümü!",
    en: "Hooray! A stamp album!",
    a11y: "A green stamp album with three stamps in it already: Istanbul, Cappadocia and Trabzon.",
    image: p("pul-albumu"),
    steps: ["The post office clerk takes a stamp album out of a drawer.", "“Üzgünüm, hatırlamıyorum. Ama bu senin olsun.” — “I'm sorry, I don't remember. But you can have this.”", "Murzik sticks in his first stamps.", "And one day — a stamp from Grandma Asya."],
    bridge: "Tom is waiting for Murzik outside the post office: “Çabuk! Otelden telefon geldi!” — “Quick! The hotel phoned!”",
  },
};

const trabzon6: Lesson = {
  id: "tr-a1-trabzon-6",
  level: "A1",
  cityId: "tr-trabzon",
  number: 6,
  title: "Found it!",
  minutes: 7,
  goals: ["Say where something was found", "Say “didn't do”: -medi, -madı", "Be glad and say thank you"],
  vocabNote: "Bulundu — “it's been found”. Çamaşırhane — “laundry room”. Eksik — “missing”: Hiçbir şey eksik değil — “Nothing's missing”.",
  vocab: [
    v("trtt6-1", "Bavulun bulundu!", "Your suitcase has been found!", "The receptionist runs down the corridor, waving.", "Listen to Bavulun bulundu", p("l6-1")),
    v("trtt6-2", "çamaşırhanede", "in the laundry room", "A laundry room: washing machines, piles of linen.", "Listen to çamaşırhanede", p("l6-2")),
    v("trtt6-3", "Üstünde bir kedi uyuyor.", "There's a cat asleep on it.", "A fat grey cat is curled up on the red suitcase.", "Listen to Üstünde bir kedi uyuyor", p("l6-3")),
    v("trtt6-4", "Ne kadar tatlı!", "How sweet!", "Murzik looks fondly at the sleeping cat.", "Listen to Ne kadar tatlı", p("l6-4")),
    v("trtt6-5", "Hiçbir şey eksik değil.", "Nothing's missing.", "Murzik counts the postcards in his suitcase.", "Listen to Hiçbir şey eksik değil", p("l6-5")),
    v("trtt6-6", "Kimse almadı.", "Nobody took it.", "The receptionist laughs and shrugs.", "Listen to Kimse almadı", p("l6-6")),
    v("trtt6-7", "Çok şükür!", "Thank goodness!", "Murzik hugs his suitcase.", "Listen to Çok şükür", p("l6-7")),
  ],
  dialogue: {
    title: "The laundry room",
    note: "Pamuk — “cotton” — is the hotel cat's name. Taşıdı — “carried, moved”. Herhalde — “probably”.",
    lines: [
      line("receptionist", "Murzik! Bavulun bulundu! Çamaşırhanede!", "Murzik! Your suitcase has been found! In the laundry room!"),
      line("murzik", "Çamaşırhanede mi? Kim götürdü?", "In the laundry room? Who took it there?"),
      line("receptionist", "Kimse almadı. Temizlikçi taşıdı, herhalde.", "Nobody took it. The cleaner probably moved it."),
      line("tom", "Bak! Üstünde bir kedi uyuyor!", "Look! There's a cat asleep on it!"),
      line("receptionist", "Bu Pamuk, otelin kedisi. Sıcak bavulları çok seviyor.", "That's Pamuk, the hotel cat. She loves warm suitcases."),
      line("murzik", "Ne kadar tatlı! Hiçbir şey eksik değil. Çok şükür!", "How sweet! Nothing's missing. Thank goodness!"),
    ],
    gist: choice("trtt6-d1", "Where was the suitcase found?", [
      ["In the laundry room.", true],
      ["At the post office.", false],
      ["In the lift.", false],
    ]),
  },
  grammar: [
    {
      title: "Didn't: -madı, -medi",
      paragraphs: [
        "The negative past puts -ma / -me before the past ending: al-madı (didn't take), gel-medi (didn't come), gör-medi (didn't see).",
        "About yourself: almadım — I didn't take it, görmedim — I didn't see it. Kimse means “nobody”, and it goes with a negative verb: Kimse gelmedi. — Nobody came (literally “nobody didn't come”).",
      ],
      examples: [
        { ru: "Ben bavulu görmedim.", en: "I didn't see the suitcase." },
        { ru: "Kedi uyanmadı.", en: "The cat didn't wake up." },
      ],
    },
  ],
  tasks: [
    choice("trtt6-t1", "How do you say “Nobody came”?", [
      ["Kimse gelmedi.", true],
      ["Kimse geldi.", false],
      ["Kim gelmedi?", false],
    ], { skill: "grammar" }),
    listen("trtt6-t2", "Listen. Who's asleep on the suitcase?", "Bavulun üstünde bir kedi uyuyor.", [
      ["A cat.", true],
      ["Murzik.", false],
      ["Tom.", false],
    ]),
    match("trtt6-t3", "Match the pairs.", [
      ["bulundu", "it's been found"],
      ["üstünde", "on top of it"],
      ["kimse", "nobody"],
      ["eksik", "missing"],
    ], { skill: "words" }),
    missing("trtt6-t4", "Which letter is missing? (“laundry room”)", "çama", "ırhane", "ş", ["ş", "s", "ç"]),
    speak("trtt6-t5", "Bavulu sen mi aldın?", "Hayır, ben almadım!", "No, I didn't take it!", { help: "Say aloud that you didn't take it." }),
    choice("trtt6-t6", "How do you say “I'd like to send a letter”?", [
      ["Mektup göndermek istiyorum.", true],
      ["Mektup gönderdi istiyorum.", false],
      ["Mektup göndermiyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kemence",
    itemName: "Toy kemençe",
    itemNameRu: "Kemençe",
    ru: "Yaşasın! Küçük bir kemençe!",
    en: "Hooray! A little kemençe!",
    a11y: "A small wooden kemençe — a narrow three-stringed fiddle — with its bow.",
    image: p("kemence"),
    steps: ["The hotel cook celebrates by playing the kemençe.", "Everyone in the lobby dances the horon, holding hands.", "The cook gives Murzik a little kemençe.", "Murzik tries to play: “Eeee!” Everyone laughs."],
    bridge: "Tomorrow they check out. Time to pack the suitcase — with its new tag!",
  },
};

const trabzon7: Lesson = {
  id: "tr-a1-trabzon-7",
  level: "A1",
  cityId: "tr-trabzon",
  number: 7,
  title: "Checking out",
  minutes: 8,
  goals: ["Check out of the hotel and pay", "Ask for a taxi", "Review all the words from Trabzon"],
  vocabNote: "Çıkış means “check-out, exit”. Hesap — “the bill”. Yine bekleriz — “we hope to see you again” (what hotels and cafés say as you leave).",
  vocab: [
    v("trtt7-1", "Çıkış yapmak istiyorum.", "I'd like to check out.", "Tom at the desk with the suitcases.", "Listen to Çıkış yapmak istiyorum", p("l7-1")),
    v("trtt7-2", "Hesabı alabilir miyim?", "Could I have the bill?", "The receptionist hands Tom the bill.", "Listen to Hesabı alabilir miyim", p("l7-2")),
    v("trtt7-3", "Taksi çağırabilir misiniz?", "Could you call a taxi?", "A yellow taxi pulls up outside the hotel.", "Listen to Taksi çağırabilir misiniz", p("l7-3")),
    v("trtt7-4", "Havalimanına gidiyoruz.", "We're going to the airport.", "A sign with a plane symbol.", "Listen to Havalimanına gidiyoruz", p("l7-4")),
    v("trtt7-5", "Her şey çok güzeldi.", "Everything was wonderful.", "Murzik gives a paws-up “great!”.", "Listen to Her şey çok güzeldi", p("l7-5")),
    v("trtt7-6", "Yine bekleriz!", "Hope to see you again!", "The receptionist waves at the door.", "Listen to Yine bekleriz", p("l7-6")),
    v("trtt7-7", "Yolunuz açık olsun!", "Have a safe journey!", "The taxi drives off along the wet road by the sea.", "Listen to Yolunuz açık olsun", p("l7-7")),
  ],
  dialogue: {
    title: "Goodbye, hotel",
    note: "Güzeldi — “it was lovely, it was good”. Hediyemiz — “our present”. Yolunda — “all right, in order”.",
    lines: [
      line("tom", "Günaydın. Çıkış yapmak istiyorum. Hesabı alabilir miyim?", "Good morning. I'd like to check out. Could I have the bill?"),
      line("receptionist", "Tabii. Her şey yolunda mıydı?", "Of course. Was everything all right?"),
      line("murzik", "Evet! Her şey çok güzeldi. Pamuk da!", "Yes! Everything was wonderful. Pamuk too!"),
      line("tom", "Taksi çağırabilir misiniz? Havalimanına gidiyoruz.", "Could you call a taxi? We're going to the airport."),
      line("receptionist", "Hemen. Bu da hediyemiz, Murzik.", "Right away. And this is our present for you, Murzik."),
      line("receptionist", "Yolunuz açık olsun! Yine bekleriz!", "Have a safe journey! Hope to see you again!"),
    ],
    gist: choice("trtt7-d1", "Where are Tom and Murzik going?", [
      ["To the airport.", true],
      ["To the post office.", false],
      ["To the lake.", false],
    ]),
  },
  grammar: [
    {
      title: "Was: -dı with an adjective",
      paragraphs: [
        "“Was” is the same past ending, added straight to the word: güzel → güzeldi (it was lovely), sıcak → sıcaktı (it was hot), yorgun → yorgundum (I was tired).",
        "The question: … mıydı? / miydi? — Her şey yolunda mıydı? — Was everything all right? Oda temiz miydi? — Was the room clean?",
      ],
      examples: [
        { ru: "Hava çok soğuktu.", en: "The weather was very cold." },
        { ru: "Kahvaltı çok güzeldi.", en: "Breakfast was wonderful." },
      ],
    },
  ],
  tasks: [
    listen("trtt7-t1", "Audio exam. What does the receptionist say?", "Odanız üçüncü katta. Kahvaltı sabah yediden ona kadar. Asansör orada.", [
      ["The room's on the third floor; breakfast is from seven to ten.", true],
      ["The room's on the tenth floor; there's no breakfast.", false],
      ["The lift isn't working; the room's on the third floor.", false],
    ]),
    choice("trtt7-t2", "How do you say “It was cold”?", [
      ["Soğuktu.", true],
      ["Soğukdu.", false],
      ["Soğuk değil.", false],
    ], { skill: "grammar" }),
    match("trtt7-t3", "Match the pairs.", [
      ["çıkış", "check-out"],
      ["hesap", "bill"],
      ["havalimanı", "airport"],
      ["Yine bekleriz!", "Hope to see you again!"],
    ], { skill: "words" }),
    spell("trtt7-t4", "Spell the word for “taxi”.", "taksi"),
    speak("trtt7-t5", "Her şey yolunda mıydı?", "Evet, her şey çok güzeldi. Teşekkürler!", "Yes, everything was wonderful. Thank you!", { help: "Answer the receptionist aloud." }),
    script("trtt7-t6", "Remember all of Trabzon. Finish the conversations.", [
      { speaker: "Receptionist", text: "Hoş geldiniz! Buyurun?" },
      { speaker: "You", answer: "Rezervasyonum var. İki gece.", options: ["Rezervasyonum var. İki gece.", "Rezervasyonum var. İki geceler.", "Bavulum kayboldu."] },
      { speaker: "Receptionist", text: "Odanız nasıl?" },
      { speaker: "You", answer: "Evet, klima çalışmıyor.", options: ["Evet, klima çalışmıyor.", "Evet, klima çalışıyor.", "Hayır, klima yok değil."] },
      { speaker: "Receptionist", text: "Yolunuz açık olsun!" },
      { speaker: "You", answer: "Teşekkürler! Her şey çok güzeldi.", options: ["Teşekkürler! Her şey çok güzeldi.", "Hatırlamıyorum.", "Hoş geldiniz!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "caydanlik",
    itemName: "Double teapot",
    itemNameRu: "Çaydanlık",
    ru: "Yaşasın! Bir çaydanlık!",
    en: "Hooray! A teapot!",
    a11y: "A small Turkish double teapot: boiling water below, strong tea on top. Tea leaves are painted on its side.",
    image: p("caydanlik"),
    steps: ["The receptionist holds out a box.", "Inside is a double teapot: water below, tea on top.", "“Karadeniz çayı için!” — “For Black Sea tea!”", "Murzik carefully packs it in his suitcase — the one with the new tag."],
    bridge: "Next stop — Van, a city by a huge lake.",
  },
};

const story: CityStory = {
  home: {
    name: "A hotel room",
    nameRu: "Otel odası",
    image: p("home"),
    a11y: "An empty hotel room with a big window. Outside: fog, wet green mountains and the grey Black Sea. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "caydanlik",
  welcomeRu: "Merhaba, Trabzon!",
  welcomeEn: "Hello, Trabzon!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom in Trabzon: green mountains, tea plantations on the slopes and the grey Black Sea. It's drizzling.",
  departureImage: p("departure"),
  departureA11y: "The hotel receptionist waves goodbye at the door; Pamuk, the grey cat, sits on the steps.",
  finale: [
    {
      image: p("umbrella"),
      a11y: "Trabzon's wet waterfront. Murzik, in his yellow raincoat, walks to the taxi. In the distance, by a lamp post, a white cat in a hat stands under a black umbrella watching him go. Murzik doesn't notice him.",
      lines: [
        { en: "Murzik hurries to the taxi and doesn't look back." },
        { en: "But on the waterfront, under a black umbrella, stands a white cat in a hat." },
        { en: "He watches the taxi go and smiles quietly." },
      ],
    },
    {
      image: p("caydanlik"),
      a11y: "Murzik walks round his hotel room, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his room. Tom takes a photo of it for the magazine." },
        { en: "Murzik takes the double teapot for Black Sea tea with him." },
        { en: "His suitcase has a tag now: “Murzik”. It won't get lost again." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Trabzon tamamlandı!", en: "Trabzon complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — eleventh part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "The hotel receptionist waves goodbye.",
      lines: [
        { ru: "Hoşça kal, Trabzon!", en: "Goodbye, Trabzon!" },
        { ru: "Sıradaki durak: Van!", en: "Next stop: Van!" },
      ],
    },
    {
      image: p("flight"),
      a11y: "A plane flies east over snowy mountains.",
      lines: [{ ru: "Trabzon → Van", en: "Trabzon → Van" }],
    },
    {
      image: pic("tr/van/arrival"),
      a11y: "Murzik and Tom on the shore of huge, blue Lake Van. A snowy mountain in the distance. It's sunny.",
      lines: [
        { ru: "Merhaba, Van!", en: "Hello, Van!" },
        { ru: "Ne büyük bir göl!", en: "What a huge lake!" },
      ],
    },
  ],
};

export const trTrabzonEn = {
  id: "tr-trabzon",
  name: "Trabzon",
  nameTr: "Trabzon",
  lessons: [trabzon1, trabzon2, trabzon3, trabzon4, trabzon5, trabzon6, trabzon7],
  story,
};
