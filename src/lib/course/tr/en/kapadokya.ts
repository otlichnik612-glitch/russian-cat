import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { build, choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Cappadocia · “Work and study” · where you work, studying, a working day, a job interview, good news, the first day, a celebration. English version. */

const p = (name: string) => pic(`tr/kapadokya/${name}`);

const kapadokya1: Lesson = {
  id: "tr-a1-kapadokya-1",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 1,
  title: "Where do you work?",
  minutes: 7,
  goals: ["Ask where someone works", "Say “I work in a hotel, in an office”", "Say “I'm not working”"],
  vocabNote: "Peri bacası — a “fairy chimney”, one of Cappadocia's rock towers. Homes and even hotels are carved into these rocks.",
  vocab: [
    v("trka1-1", "Nerede çalışıyorsun?", "Where do you work?", "Deniz, at the desk of the cave hotel, looks at Tom curiously.", "Listen to Nerede çalışıyorsun", p("l1-1")),
    v("trka1-2", "Bir otelde çalışıyorum.", "I work in a hotel.", "Deniz, a cheerful student, hands out keys at the desk.", "Listen to Bir otelde çalışıyorum", p("l1-2")),
    v("trka1-3", "Evden çalışıyorum.", "I work from home.", "Tom sits on the bed in the cave room with his laptop.", "Listen to Evden çalışıyorum", p("l1-3")),
    v("trka1-4", "iş", "work, job", "A briefcase and a cup of coffee on a desk.", "Listen to iş", p("l1-4")),
    v("trka1-5", "ofis", "office", "A bright office with desks and computers.", "Listen to ofis", p("l1-5")),
    v("trka1-6", "Çalışmıyorum.", "I'm not working.", "Murzik lies lazily in a hammock, spreading his paws.", "Listen to Çalışmıyorum", p("l1-6")),
    v("trka1-7", "çömlekçi", "potter", "An elderly potter shapes a jug on a potter's wheel.", "Listen to çömlekçi", p("l1-7")),
  ],
  dialogue: {
    title: "The cave hotel",
    note: "İş görüşmesi — “a job interview”. Babam — “my dad”.",
    lines: [
      line("deniz", "Hoş geldiniz! Ben Deniz. Bu otelde çalışıyorum.", "Welcome! I'm Deniz. I work at this hotel."),
      line("tom", "Memnun oldum! Ben Tom, fotoğrafçıyım.", "Nice to meet you! I'm Tom, I'm a photographer."),
      line("deniz", "Nerede çalışıyorsun?", "And where do you work?"),
      line("tom", "Şimdi çalışmıyorum. Ama yarın bir iş görüşmem var! Bir dergide.", "I'm not working at the moment. But tomorrow I have a job interview! At a magazine."),
      line("murzik", "Deniz, sen öğrenci misin?", "Deniz, are you a student?"),
      line("deniz", "Evet! Öğrenciyim ve bu otelde çalışıyorum.", "Yes! I'm a student, and I work at this hotel."),
      line("deniz", "Babam çömlekçi. Avanos'ta çalışıyor.", "My dad's a potter. He works in Avanos."),
    ],
    gist: choice("trka1-d1", "Where does Deniz work?", [
      ["At the hotel.", true],
      ["At a magazine.", false],
      ["In a pottery workshop.", false],
    ]),
  },
  grammar: [
    {
      title: "Where I work: -de çalışıyorum",
      paragraphs: [
        "“In, at” is the ending -de / -da: bir otel-de çalışıyorum (in a hotel), bir okul-da (in a school), bir ofis-te (in an office — after s it's -te).",
        "“From” is -den / -dan: ev-den çalışıyorum — I work from home. “I'm not working” is çalış-mı-yorum.",
      ],
      examples: [
        { ru: "Bir hastanede çalışıyorum.", en: "I work in a hospital." },
        { ru: "Babam Avanos'ta çalışıyor.", en: "My dad works in Avanos." },
      ],
    },
  ],
  tasks: [
    choice("trka1-t1", "How do you say “I work in a school”? (school — okul)", [
      ["Okulda çalışıyorum.", true],
      ["Okula çalışıyorum.", false],
      ["Okulde çalışıyorum.", false],
    ], { skill: "grammar" }),
    listen("trka1-t2", "Listen. Where does the speaker work?", "Bir hastanede çalışıyorum.", [
      ["In a hospital.", true],
      ["In a hotel.", false],
      ["At home.", false],
    ]),
    match("trka1-t3", "Match the pairs.", [
      ["iş", "work"],
      ["ofis", "office"],
      ["otel", "hotel"],
      ["çömlekçi", "potter"],
    ], { skill: "words" }),
    missing("trka1-t4", "Which letter is missing? (“I work”)", "Çal", "şıyorum", "ı", ["ı", "i", "u"]),
    speak("trka1-t5", "Nerede çalışıyorsun?", "Bir ofiste çalışıyorum.", "I work in an office.", { help: "Say aloud where you work or study." }),
    choice("trka1-t6", "How do you say “I feel better”?", [
      ["Daha iyiyim.", true],
      ["Daha iyisin.", false],
      ["İyi daha.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "masa-lambasi",
    itemName: "Desk lamp",
    itemNameRu: "Masa lambası",
    ru: "Yaşasın! Bir masa lambası!",
    en: "Hooray! A desk lamp!",
    a11y: "A desk lamp with a fabric shade stands in a stone niche of the cave room.",
    image: p("masa-lambasi"),
    steps: ["Deniz brings a desk lamp to their room.", "“Akşam çalışmak için!” — “For working in the evening!”", "Murzik puts it in a stone niche.", "The cave feels cosy."],
    bridge: "Deniz tells them: by day she studies at university, and in the evenings she works.",
  },
};

const kapadokya2: Lesson = {
  id: "tr-a1-kapadokya-2",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 2,
  title: "I'm a student",
  minutes: 7,
  goals: ["Ask what someone is studying", "Say “I'm at university”", "Tell okumak and öğrenmek apart"],
  vocabNote: "Okumak means both “to read” and “to study (at school or university)”. Öğrenmek means “to learn something”: Türkçe öğreniyorum.",
  vocab: [
    v("trka2-1", "Öğrenci misin?", "Are you a student?", "Murzik looks curiously at Deniz's pile of textbooks.", "Listen to Öğrenci misin", p("l2-1")),
    v("trka2-2", "Üniversitede okuyorum.", "I'm at university.", "Deniz with her backpack outside the university building.", "Listen to Üniversitede okuyorum", p("l2-2")),
    v("trka2-3", "Ne okuyorsun?", "What are you studying?", "Tom points at Deniz's textbook.", "Listen to Ne okuyorsun", p("l2-3")),
    v("trka2-4", "Turizm okuyorum.", "I'm studying tourism.", "A textbook with a world map and a little plane on the cover.", "Listen to Turizm okuyorum", p("l2-4")),
    v("trka2-5", "Türkçe öğreniyorum.", "I'm learning Turkish.", "Murzik writes Turkish words in a notebook.", "Listen to Türkçe öğreniyorum", p("l2-5")),
    v("trka2-6", "ders", "lesson, class", "A lecture room with a teacher at the board.", "Listen to ders", p("l2-6")),
    v("trka2-7", "sınav", "exam", "Deniz worries over an exam paper.", "Listen to sınav", p("l2-7")),
  ],
  dialogue: {
    title: "Study and work",
    note: "Zor means “difficult”. Türkçen iyi! — “Your Turkish is good!”",
    lines: [
      line("murzik", "Deniz, ne okuyorsun?", "Deniz, what are you studying?"),
      line("deniz", "Turizm okuyorum. Üniversitede.", "Tourism. At university."),
      line("tom", "Zor mu?", "Is it hard?"),
      line("deniz", "Biraz. Yarın sınavım var!", "A bit. I've got an exam tomorrow!"),
      line("murzik", "Ben de Türkçe öğreniyorum! Her gün bir ders.", "And I'm learning Turkish! One lesson every day."),
      line("deniz", "Çok güzel! Türkçen iyi!", "That's great! Your Turkish is good!"),
    ],
    gist: choice("trka2-d1", "What is Deniz studying?", [
      ["Tourism.", true],
      ["Turkish.", false],
      ["Photography.", false],
    ]),
  },
  grammar: [
    {
      title: "Okumak or öğrenmek?",
      paragraphs: [
        "Okumak is “to read”, and also “to study” at school or university: Üniversitede okuyorum. Turizm okuyorum — I'm studying tourism (it's my subject).",
        "Öğrenmek is “to learn, to find out something new”: Türkçe öğreniyorum. — I'm learning Turkish.",
      ],
      examples: [
        { ru: "Deniz turizm okuyor.", en: "Deniz is studying tourism." },
        { ru: "Murzik Türkçe öğreniyor.", en: "Murzik is learning Turkish." },
      ],
    },
  ],
  tasks: [
    choice("trka2-t1", "How do you say “I'm learning Turkish”?", [
      ["Türkçe öğreniyorum.", true],
      ["Türkçe öğretiyorum.", false],
      ["Türkçe okuyor.", false],
    ], { skill: "grammar" }),
    listen("trka2-t2", "Listen. What's happening tomorrow?", "Yarın sınavım var.", [
      ["An exam.", true],
      ["A party.", false],
      ["A drawing lesson.", false],
    ]),
    match("trka2-t3", "Match the pairs.", [
      ["ders", "lesson"],
      ["sınav", "exam"],
      ["üniversite", "university"],
      ["öğrenmek", "to learn"],
    ], { skill: "words" }),
    spell("trka2-t4", "Spell the word for “lesson”.", "ders"),
    speak("trka2-t5", "Ne öğreniyorsun?", "Türkçe öğreniyorum. Her gün bir ders!", "I'm learning Turkish. One lesson every day!", { help: "Say aloud what you're learning." }),
    listen("trka2-t6", "Remember the last lesson. Where does the speaker work?", "Evden çalışıyorum.", [
      ["From home.", true],
      ["In an office.", false],
      ["In a hotel.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "defter",
    itemName: "Notebook",
    itemNameRu: "Defter",
    ru: "Yaşasın! Yeni bir defter!",
    en: "Hooray! A new notebook!",
    a11y: "A notebook with a hot-air-balloon pattern on the cover. Turkish words are written on the first page.",
    image: p("defter"),
    steps: ["Deniz gives Murzik a notebook.", "“Türkçe kelimeler için!” — “For Turkish words!”", "Murzik writes his first word: balon.", "Soon the notebook will be full!"],
    bridge: "Deniz invites them to her dad's pottery workshop: “His day starts at six in the morning!”",
  },
};

const kapadokya3: Lesson = {
  id: "tr-a1-kapadokya-3",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 3,
  title: "My working day",
  minutes: 7,
  goals: ["Talk about your day", "Say what time you get up, start and finish", "Say “every morning”"],
  vocabNote: "Avanos is a little riverside town in Cappadocia, where people have made jugs from red river clay for thousands of years.",
  vocab: [
    v("trka3-1", "Saat altıda kalkıyorum.", "I get up at six.", "The potter stretches by the window; outside it's dawn, and the clock says six.", "Listen to Saat altıda kalkıyorum", p("l3-1")),
    v("trka3-2", "İşe saat yedide başlıyorum.", "I start work at seven.", "The potter sits down at his wheel; the clock says seven.", "Listen to İşe saat yedide başlıyorum", p("l3-2")),
    v("trka3-3", "Öğlen yemek yiyorum.", "I have lunch at noon.", "The potter eats flatbread and cheese outside the workshop.", "Listen to Öğlen yemek yiyorum", p("l3-3")),
    v("trka3-4", "Saat beşte bitiriyorum.", "I finish at five.", "The potter wipes his hands; the clock says five.", "Listen to Saat beşte bitiriyorum", p("l3-4")),
    v("trka3-5", "Akşam dinleniyorum.", "In the evening I relax.", "The potter sits with a tea on a bench by the river.", "Listen to Akşam dinleniyorum", p("l3-5")),
    v("trka3-6", "her sabah", "every morning", "Seven little suns above the horizon.", "Listen to her sabah", p("l3-6")),
    v("trka3-7", "Çok yoğun bir gün.", "A very busy day.", "The potter is surrounded by dozens of new jugs.", "Listen to Çok yoğun bir gün", p("l3-7")),
  ],
  dialogue: {
    title: "In the workshop",
    note: "Yine means “again”. İşimi seviyorum — “I love my work”.",
    lines: [
      line("potter", "Hoş geldiniz! Ben her sabah saat altıda kalkıyorum.", "Welcome! I get up at six every morning."),
      line("murzik", "Altıda mı? Çok erken!", "At six? That's so early!"),
      line("potter", "İşe saat yedide başlıyorum. Öğlen yemek yiyorum, sonra yine çalışıyorum.", "I start work at seven. I have lunch at noon, then I work again."),
      line("tom", "Saat kaçta bitiriyorsunuz?", "What time do you finish?"),
      line("potter", "Saat beşte. Akşam dinleniyorum.", "At five. In the evening I relax."),
      line("deniz", "Babam çok çalışkan!", "My dad's very hard-working!"),
      line("potter", "Çok yoğun bir gün, ama işimi seviyorum.", "It's a very busy day, but I love my work."),
    ],
    gist: choice("trka3-d1", "What time does the potter start work?", [
      ["At seven.", true],
      ["At six.", false],
      ["At five.", false],
    ]),
  },
  grammar: [
    {
      title: "My day: -iyorum + a time",
      paragraphs: [
        "For a daily routine English uses the present simple (“I get up”), but Turkish often uses the same -iyorum form: kalk-ıyorum (I get up), başl-ıyorum (I start), bitir-iyorum (I finish).",
        "Times take the ending -de / -da / -te / -ta: saat altıda, saat yedide, saat beşte. For order: önce (first), sonra (then).",
      ],
      examples: [
        { ru: "Önce kahvaltı yapıyorum, sonra işe gidiyorum.", en: "First I have breakfast, then I go to work." },
        { ru: "Saat dokuzda başlıyorum.", en: "I start at nine." },
      ],
    },
  ],
  tasks: [
    listen("trka3-t1", "Listen. What time does the speaker get up?", "Her sabah saat yedide kalkıyorum.", [
      ["At seven.", true],
      ["At six.", false],
      ["At eight.", false],
    ]),
    build("trka3-t2", "Put the words in order: “I start work at seven”.", ["İşe", "saat", "yedide", "başlıyorum."]),
    match("trka3-t3", "Match the pairs.", [
      ["kalkmak", "to get up"],
      ["başlamak", "to start"],
      ["bitirmek", "to finish"],
      ["dinlenmek", "to relax"],
    ], { skill: "words" }),
    missing("trka3-t4", "Which letter is missing? (“I finish”)", "bit", "riyorum", "i", ["i", "ı", "e"]),
    speak("trka3-t5", "Günün nasıl geçiyor?", "Saat yedide kalkıyorum, dokuzda işe başlıyorum.", "I get up at seven and start work at nine.", { help: "Describe your usual day aloud." }),
    choice("trka3-t6", "How do you say “I'm at university”?", [
      ["Üniversitede okuyorum.", true],
      ["Üniversiteye okuyorum.", false],
      ["Üniversiteden okuyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kalemlik",
    itemName: "Pencil pot",
    itemNameRu: "Kalemlik",
    ru: "Yaşasın! Bir kalemlik!",
    en: "Hooray! A pencil pot!",
    a11y: "A handmade clay pot full of pencils and brushes.",
    image: p("kalemlik"),
    steps: ["The potter shapes a little pot on his wheel.", "“Bu senin için!” — “This is for you!”", "Murzik puts his pencils in it.", "Drawing is even easier now!"],
    bridge: "And this evening Tom has his interview with the magazine. He's very nervous.",
  },
};

const kapadokya4: Lesson = {
  id: "tr-a1-kapadokya-4",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 4,
  title: "The job interview",
  minutes: 7,
  goals: ["Answer “why?”: çünkü", "Say how long you've been doing something", "Understand interview questions"],
  vocabNote: "Üç yıldır — “for three years (and still)”. The ending -dır after a period of time works like English “for” with “have been”.",
  vocab: [
    v("trka4-1", "iş görüşmesi", "job interview", "Tom, in a shirt, sits in front of a laptop on a video call.", "Listen to iş görüşmesi", p("l4-1")),
    v("trka4-2", "Neden bu işi istiyorsunuz?", "Why do you want this job?", "On the laptop screen: a strict but friendly woman editor.", "Listen to Neden bu işi istiyorsunuz", p("l4-2")),
    v("trka4-3", "Çünkü fotoğraf çekmeyi seviyorum.", "Because I love taking photos.", "Tom eagerly shows his camera to the webcam.", "Listen to Çünkü fotoğraf çekmeyi seviyorum", p("l4-3")),
    v("trka4-4", "Deneyiminiz var mı?", "Do you have any experience?", "On screen, the editor leafs through a folder of Tom's photos.", "Listen to Deneyiminiz var mı", p("l4-4")),
    v("trka4-5", "Üç yıldır fotoğrafçıyım.", "I've been a photographer for three years.", "Three photo albums stacked next to Tom.", "Listen to Üç yıldır fotoğrafçıyım", p("l4-5")),
    v("trka4-6", "Ne zaman başlayabilirsiniz?", "When can you start?", "The editor looks at a calendar with a smile.", "Listen to Ne zaman başlayabilirsiniz", p("l4-6")),
    v("trka4-7", "Hemen!", "Right away!", "Tom jumps up from his chair, his eyes shining.", "Listen to Hemen", p("l4-7")),
  ],
  dialogue: {
    title: "The video call",
    note: "Seyahat etmek — “to travel”. Tom Bey — a polite way to address Tom.",
    lines: [
      line("editor", "Merhaba, Tom Bey. Neden bu işi istiyorsunuz?", "Hello, Tom. Why do you want this job?"),
      line("tom", "Çünkü fotoğraf çekmeyi çok seviyorum. Ve seyahat etmeyi!", "Because I love taking photos. And travelling!"),
      line("editor", "Deneyiminiz var mı?", "Do you have any experience?"),
      line("tom", "Evet. Üç yıldır fotoğrafçıyım.", "Yes. I've been a photographer for three years."),
      line("editor", "Güzel. Fotoğraflarınızda hep bir kedi var. Neden?", "Good. There's always a cat in your photos. Why?"),
      line("tom", "Çünkü o benim en iyi arkadaşım: Murzik!", "Because he's my best friend: Murzik!"),
      line("editor", "Harika. Ne zaman başlayabilirsiniz?", "Wonderful. When can you start?"),
      line("tom", "Hemen!", "Right away!"),
    ],
    gist: choice("trka4-d1", "Why is there a cat in all Tom's photos?", [
      ["Because Murzik is his best friend.", true],
      ["Because he loves all cats.", false],
      ["Because the magazine asked him to.", false],
    ]),
  },
  grammar: [
    {
      title: "Why? — Because…",
      paragraphs: [
        "Neden? means “why?”. The answer starts with çünkü — “because”: Neden? — Çünkü seyahat etmeyi seviyorum.",
        "“For (a length of time), and still” is the period + -dır / -dir / -dur / -dür, or -tır / -tir / -tur / -tür after ç, f, h, k, p, s, ş, t: üç yıldır (for three years), iki aydır (for two months). Turkish keeps the verb in the present here: Üç yıldır fotoğrafçıyım — literally “for three years I am a photographer”.",
      ],
      examples: [
        { ru: "Neden Türkçe öğreniyorsun? — Çünkü Türkiye'yi seviyorum.", en: "Why are you learning Turkish? — Because I love Turkey." },
        { ru: "Beş yıldır öğretmenim.", en: "I've been a teacher for five years." },
      ],
    },
  ],
  tasks: [
    choice("trka4-t1", "How do you answer “Because I love the sea”?", [
      ["Çünkü denizi seviyorum.", true],
      ["Neden denizi seviyorum.", false],
      ["Çünkü deniz seviyor.", false],
    ], { skill: "grammar" }),
    listen("trka4-t2", "Listen. How many years' experience does the speaker have?", "Beş yıldır öğretmenim.", [
      ["Five years.", true],
      ["Three years.", false],
      ["One year.", false],
    ]),
    match("trka4-t3", "Match the pairs.", [
      ["iş görüşmesi", "job interview"],
      ["deneyim", "experience"],
      ["Hemen!", "Right away!"],
      ["neden", "why"],
    ], { skill: "words" }),
    missing("trka4-t4", "Which letter is missing? (“because”)", "Ç", "nkü", "ü", ["ü", "u", "i"]),
    speak("trka4-t5", "Neden Türkçe öğreniyorsun?", "Çünkü Türkiye'yi çok seviyorum!", "Because I really love Turkey!", { help: "Say aloud why you're learning Turkish." }),
    listen("trka4-t6", "Remember the last lesson. What does the potter say?", "Saat beşte bitiriyorum.", [
      ["He finishes at five.", true],
      ["He starts at five.", false],
      ["He gets up at five.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sandik",
    itemName: "Chest",
    itemNameRu: "Sandık",
    ru: "Yaşasın! Eski bir sandık!",
    en: "Hooray! An old chest!",
    a11y: "A carved wooden chest with iron corners stands in a niche of the cave room.",
    image: p("sandik"),
    steps: ["While Tom talks to the magazine, Deniz brings in a chest.", "“Fotoğraflarınız için!” — “For your photos!”", "Murzik puts the photos in it.", "The chest smells of old wood."],
    bridge: "The next morning Tom gets an answer…",
  },
};

const kapadokya5: Lesson = {
  id: "tr-a1-kapadokya-5",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 5,
  title: "Good news!",
  minutes: 7,
  goals: ["Share some news", "Congratulate someone and wish them luck", "Say “from Monday”: -den itibaren"],
  vocabNote: "Köşe means “corner”, and in a magazine it's a “column”. Şehir şehir — “city by city”.",
  vocab: [
    v("trka5-1", "Bir haberim var!", "I've got some news!", "Tom rushes into the room waving his phone.", "Listen to Bir haberim var", p("l5-1")),
    v("trka5-2", "İyi haber!", "Good news!", "A drawn sun shines above Tom.", "Listen to İyi haber", p("l5-2")),
    v("trka5-3", "İşe alındım!", "I got the job!", "Tom jumps for joy, and Murzik claps his paws.", "Listen to İşe alındım", p("l5-3")),
    v("trka5-4", "Pazartesiden itibaren", "from Monday", "A calendar with Monday circled in red.", "Listen to Pazartesiden itibaren", p("l5-4")),
    v("trka5-5", "Tebrikler!", "Congratulations!", "Deniz and Murzik hug Tom.", "Listen to Tebrikler", p("l5-5")),
    v("trka5-6", "Çok sevindim!", "I'm so happy for you!", "Murzik spins round with happiness.", "Listen to Çok sevindim", p("l5-6")),
    v("trka5-7", "Başarılar!", "Good luck!", "Deniz gives Tom a thumbs up.", "Listen to Başarılar", p("l5-7")),
  ],
  dialogue: {
    title: "The magazine's answer",
    note: "Peki — “well, so”. İlk means “first”.",
    lines: [
      line("tom", "Murzik! Deniz! Bir haberim var!", "Murzik! Deniz! I've got some news!"),
      line("deniz", "Ne oldu? İyi haber mi?", "What is it? Good news?"),
      line("tom", "Çok iyi haber! İşe alındım!", "Very good news! I got the job!"),
      line("murzik", "Tebrikler, Tom! Çok sevindim!", "Congratulations, Tom! I'm so happy for you!"),
      line("tom", "Pazartesiden itibaren dergide çalışıyorum. «Şehir Şehir» köşesi!", "From Monday I'm working for the magazine. The “City by City” column!"),
      line("deniz", "Başarılar! Peki, ilk fotoğraf ne?", "Good luck! So what's the first photo going to be?"),
      line("tom", "Balonlar! Ve tabii Murzik!", "Balloons! And Murzik, of course!"),
    ],
    gist: choice("trka5-d1", "From what day is Tom working for the magazine?", [
      ["From Monday.", true],
      ["From tomorrow.", false],
      ["In a month's time.", false],
    ]),
  },
  grammar: [
    {
      title: "Starting from: -den itibaren",
      paragraphs: [
        "“Starting from” is a word with the ending -den / -dan plus itibaren: pazartesi-den itibaren — from Monday (on), yarın-dan itibaren — from tomorrow.",
        "After ç, f, h, k, p, s, ş, t it's -ten / -tan: bugün-den, but saat beş-ten itibaren — from five o'clock.",
      ],
      examples: [
        { ru: "Yarından itibaren çalışıyorum.", en: "I'm working from tomorrow." },
        { ru: "Saat beşten itibaren evdeyim.", en: "I'm at home from five o'clock." },
      ],
    },
  ],
  tasks: [
    choice("trka5-t1", "How do you say “from tomorrow”?", [
      ["yarından itibaren", true],
      ["yarına itibaren", false],
      ["yarında itibaren", false],
    ], { skill: "grammar" }),
    listen("trka5-t2", "Listen. What's the news?", "İşe alındım!", [
      ["They got the job.", true],
      ["They lost their job.", false],
      ["They were late for work.", false],
    ]),
    match("trka5-t3", "Match the pairs.", [
      ["Tebrikler!", "Congratulations!"],
      ["Başarılar!", "Good luck!"],
      ["haber", "news"],
      ["köşe", "column, corner"],
    ], { skill: "words" }),
    missing("trka5-t4", "Which letter is missing? (“Congratulations!”)", "Tebr", "kler!", "i", ["i", "ı", "e"]),
    speak("trka5-t5", "Bir haberim var: işe alındım!", "Tebrikler! Başarılar!", "Congratulations! Good luck!", { help: "Congratulate your friend aloud." }),
    choice("trka5-t6", "How do you ask “Why?”", [
      ["Neden?", true],
      ["Çünkü?", false],
      ["Nerede?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balon",
    itemName: "Toy hot-air balloon",
    itemNameRu: "Balon",
    ru: "Yaşasın! Küçük bir balon!",
    en: "Hooray! A little balloon!",
    a11y: "A toy hot-air balloon with a striped basket hangs from the ceiling of the cave room.",
    image: p("balon"),
    steps: ["Deniz gives Tom a toy hot-air balloon.", "“Yeni işine!” — “To your new job!”", "Murzik hangs it from the ceiling.", "The balloon sways gently."],
    bridge: "Monday. Tom's first day at work — at dawn, up in the sky!",
  },
};

const kapadokya6: Lesson = {
  id: "tr-a1-kapadokya-6",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 6,
  title: "The first day",
  minutes: 7,
  goals: ["Say you're nervous", "Say “our”: -ımız, -imiz", "Understand the balloon pilot"],
  vocabNote: "Heyecan means “excitement” — happy or nervous. Heyecanlıyım — “I'm excited, I'm nervous”.",
  vocab: [
    v("trka6-1", "İlk günüm!", "My first day!", "Tom at dawn, with his camera, by a huge balloon.", "Listen to İlk günüm", p("l6-1")),
    v("trka6-2", "Heyecanlıyım.", "I'm nervous.", "Tom nervously adjusts his camera strap.", "Listen to Heyecanlıyım", p("l6-2")),
    v("trka6-3", "Bu bizim balonumuz.", "This is our balloon.", "The pilot points at a striped balloon.", "Listen to Bu bizim balonumuz", p("l6-3")),
    v("trka6-4", "Sıkı tutunun!", "Hold on tight!", "Murzik and Tom grip the edge of the basket.", "Listen to Sıkı tutunun", p("l6-4")),
    v("trka6-5", "Yükseliyoruz!", "We're going up!", "The balloon lifts off the ground; people wave below.", "Listen to Yükseliyoruz", p("l6-5")),
    v("trka6-6", "Manzara harika!", "The view is amazing!", "Below: fairy chimneys and valleys in the pink dawn.", "Listen to Manzara harika", p("l6-6")),
    v("trka6-7", "peri bacaları", "fairy chimneys", "Tall rock towers with tiny windows.", "Listen to peri bacaları", p("l6-7")),
  ],
  dialogue: {
    title: "A flight at dawn",
    note: "Gülümse! means “Smile!”. Ofisim — “my office”.",
    lines: [
      line("tom", "Bugün ilk günüm! Çok heyecanlıyım.", "Today's my first day! I'm so nervous."),
      line("pilot", "Günaydın! Ben Kerem, sizin pilotunuz. Bu bizim balonumuz.", "Good morning! I'm Kerem, your pilot. This is our balloon."),
      line("murzik", "Vay! Çok büyük!", "Wow! It's huge!"),
      line("pilot", "Sıkı tutunun! Yükseliyoruz!", "Hold on tight! We're going up!"),
      line("tom", "Manzara harika! Murzik, gülümse!", "The view is amazing! Murzik, smile!"),
      line("murzik", "Bak, Tom! Peri bacaları!", "Look, Tom! Fairy chimneys!"),
      line("pilot", "Burası benim ofisim!", "This is my office!"),
    ],
    gist: choice("trka6-d1", "Where does Tom spend his first day at work?", [
      ["In a hot-air balloon.", true],
      ["In the magazine's office.", false],
      ["At the hotel.", false],
    ]),
  },
  grammar: [
    {
      title: "Our: -ımız, -imiz, -umuz, -ümüz",
      paragraphs: [
        "“Our” is the ending -ımız / -imiz / -umuz / -ümüz: bizim balon-umuz — our balloon, bizim ev-imiz — our house. After a vowel: oda-mız — our room.",
        "“Your” (polite or plural) is -ınız / -iniz / -unuz / -ünüz: sizin pilot-unuz — your pilot. You can leave out bizim and sizin.",
      ],
      examples: [
        { ru: "Bu bizim evimiz.", en: "This is our house." },
        { ru: "Pilotunuz kim?", en: "Who's your pilot?" },
      ],
    },
  ],
  tasks: [
    choice("trka6-t1", "How do you say “our balloon”?", [
      ["bizim balonumuz", true],
      ["bizim balonum", false],
      ["biz balon", false],
    ], { skill: "grammar" }),
    listen("trka6-t2", "Listen. What does the pilot say?", "Sıkı tutunun! Yükseliyoruz!", [
      ["Hold on, we're going up!", true],
      ["We're landing!", false],
      ["We're late!", false],
    ]),
    match("trka6-t3", "Match the pairs.", [
      ["İlk günüm!", "My first day!"],
      ["Heyecanlıyım.", "I'm nervous."],
      ["manzara", "view"],
      ["pilot", "balloon pilot"],
    ], { skill: "words" }),
    missing("trka6-t4", "Which letter is missing? (“view”)", "manz", "ra", "a", ["a", "e", "ı"]),
    speak("trka6-t5", "Bugün ilk günün mü?", "Evet, ilk günüm! Çok heyecanlıyım.", "Yes, it's my first day! I'm so nervous.", { help: "Answer aloud." }),
    choice("trka6-t6", "How do you congratulate a friend?", [
      ["Tebrikler!", true],
      ["Geçmiş olsun!", false],
      ["Afiyet olsun!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fotograf-makinesi",
    itemName: "Camera",
    itemNameRu: "Fotoğraf makinesi",
    ru: "Yaşasın! Bir fotoğraf makinesi!",
    en: "Hooray! A camera!",
    a11y: "Tom's old film camera in a leather case — now it's Murzik's.",
    image: p("fotograf-makinesi"),
    steps: ["After the flight Tom takes out his old camera.", "“Al, artık senin. Sen de çek!” — “Here, it's yours now. You take photos too!”", "Murzik takes his first picture.", "It shows balloons over the rocks."],
    bridge: "In the evening there's a party at the potter's: Tom got the job!",
  },
};

const kapadokya7: Lesson = {
  id: "tr-a1-kapadokya-7",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 7,
  title: "A party at the potter's",
  minutes: 8,
  goals: ["Make a toast: “To your success!”", "Say “I'm proud” and “thank you for everything”", "Review all the words from Cappadocia"],
  vocabNote: "Toasts use the “to” ending: Başarına! — “To your success!”, Sağlığına! — “To your health!”. You can say them with any drink.",
  vocab: [
    v("trka7-1", "Kutlayalım!", "Let's celebrate!", "A table is laid in the workshop courtyard, with lanterns hanging above.", "Listen to Kutlayalım", p("l7-1")),
    v("trka7-2", "Başarına!", "To your success!", "Everyone raises glasses of ayran and juice.", "Listen to Başarına", p("l7-2")),
    v("trka7-3", "Sağlığına!", "To your health!", "The potter raises a glass of tea.", "Listen to Sağlığına", p("l7-3")),
    v("trka7-4", "Gurur duyuyorum.", "I'm proud.", "Murzik looks proudly at Tom, chest puffed out.", "Listen to Gurur duyuyorum", p("l7-4")),
    v("trka7-5", "Her şey için teşekkürler.", "Thank you for everything.", "Tom hugs Deniz and the potter.", "Listen to Her şey için teşekkürler", p("l7-5")),
    v("trka7-6", "hatıra", "souvenir, keepsake", "Little clay souvenir jugs stand on a shelf.", "Listen to hatıra", p("l7-6")),
    v("trka7-7", "Kim bilir?", "Who knows?", "Tom winks slyly and hides an envelope behind his back.", "Listen to Kim bilir", p("l7-7")),
  ],
  dialogue: {
    title: "An evening in Avanos",
    note: "Avanos'tan hatıra — “a souvenir of Avanos”. Sıradaki — “the next one”.",
    lines: [
      line("potter", "Kutlayalım! Tom'un yeni işine!", "Let's celebrate! To Tom's new job!"),
      line("deniz", "Başarına, Tom!", "To your success, Tom!"),
      line("tom", "Her şey için teşekkürler!", "Thank you for everything!"),
      line("murzik", "Seninle gurur duyuyorum, Tom!", "I'm proud of you, Tom!"),
      line("potter", "Murzik, bu testi senin için. Avanos'tan hatıra.", "Murzik, this jug is for you. A souvenir of Avanos."),
      line("deniz", "Sıradaki şehir neresi?", "Which city's next?"),
      line("tom", "Kim bilir?", "Who knows?"),
    ],
    gist: choice("trka7-d1", "What are they celebrating?", [
      ["Tom's new job.", true],
      ["Murzik's birthday.", false],
      ["Deniz's exam.", false],
    ]),
  },
  grammar: [
    {
      title: "Toasts: -a, -e",
      paragraphs: [
        "A toast is a word with the “to” ending -a / -e: başarı-n-a — to your success, sağlığ-ın-a — to your health, dostluğ-a — to friendship.",
        "Watch out: a k at the end of a word usually becomes ğ before a vowel: sağlık → sağlığına, dostluk → dostluğa.",
      ],
      examples: [
        { ru: "Dostluğa!", en: "To friendship!" },
        { ru: "Yeni işine!", en: "To your new job!" },
      ],
    },
  ],
  tasks: [
    listen("trka7-t1", "Audio exam. When will they be picked up, and how long is the flight?", "Yarın sabah saat beşte sizi otelden alacağız. Uçuş bir saat sürüyor.", [
      ["They'll be picked up from the hotel at five in the morning, and the flight takes an hour.", true],
      ["The flight is at five in the evening.", false],
      ["The flight takes three hours.", false],
    ]),
    choice("trka7-t2", "How do you make the toast “To friendship!”? (friendship — dostluk)", [
      ["Dostluğa!", true],
      ["Dostluk!", false],
      ["Dostlukta!", false],
    ], { skill: "grammar" }),
    match("trka7-t3", "Match the pairs.", [
      ["Kutlayalım!", "Let's celebrate!"],
      ["Başarılar!", "Good luck!"],
      ["Kim bilir?", "Who knows?"],
      ["hatıra", "souvenir"],
    ], { skill: "words" }),
    missing("trka7-t4", "Which letter is missing? (“jug”)", "tes", "i", "t", ["t", "d", "s"]),
    speak("trka7-t5", "Neden gurur duyuyorsun?", "Çünkü arkadaşım işe alındı!", "Because my friend got the job!", { help: "Answer aloud." }),
    script("trka7-t6", "Remember all of Cappadocia. Finish the conversations.", [
      { speaker: "Deniz", text: "Nerede çalışıyorsun?" },
      { speaker: "You", answer: "Bir ofiste çalışıyorum.", options: ["Bir ofiste çalışıyorum.", "Bir ofise çalışıyorum.", "Hemen!"] },
      { speaker: "Editor", text: "Neden bu işi istiyorsunuz?" },
      { speaker: "You", answer: "Çünkü fotoğraf çekmeyi seviyorum.", options: ["Çünkü fotoğraf çekmeyi seviyorum.", "Neden fotoğraf.", "İlk günüm!"] },
      { speaker: "Tom", text: "İşe alındım!" },
      { speaker: "You", answer: "Tebrikler! Başarılar!", options: ["Tebrikler! Başarılar!", "Geçmiş olsun!", "Kim bilir?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "testi",
    itemName: "Clay jug",
    itemNameRu: "Testi",
    ru: "Yaşasın! Bir testi!",
    en: "Hooray! A clay jug!",
    a11y: "A red clay jug from Avanos, painted with hot-air balloons.",
    image: p("testi"),
    steps: ["The potter puts a red jug on the table.", "It's painted with hot-air balloons.", "“Avanos'tan hatıra!” — “A souvenir of Avanos!”", "Murzik hugs the jug."],
    bridge: "They'll be off soon. And Tom has some kind of secret…",
  },
};

const story: CityStory = {
  home: {
    name: "A room in a cave hotel",
    nameRu: "Mağara otelinde bir oda",
    image: p("home"),
    a11y: "An empty room carved right into the rock: a vaulted stone ceiling, niches in the walls and a small window onto the valley. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "testi",
  welcomeRu: "Merhaba, Kapadokya!",
  welcomeEn: "Hello, Cappadocia!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom at dawn among the fairy chimneys of Cappadocia. Dozens of colourful hot-air balloons in the sky.",
  departureImage: p("departure"),
  departureA11y: "Murzik and Tom with their suitcases outside the cave hotel. Deniz waves to them.",
  finale: [
    {
      image: p("magazine"),
      a11y: "A new issue of a travel magazine: on the cover, a ginger kitten against a sky of hot-air balloons. Murzik and Tom look at it with delight.",
      lines: [
        { en: "A month later, in spring, the magazine comes out, with the first “City by City” column. On the cover: Murzik against a sky of balloons." },
        { ru: "Murzik kapakta!", en: "Murzik's on the cover!" },
        { en: "And in one photo, in the basket of a nearby balloon, there's a white cat in a hat. Tom frowns: him again?" },
      ],
    },
    {
      image: p("testi"),
      a11y: "Murzik walks round his cave room, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his cave room. Tom takes a photo of it — for the magazine this time." },
        { en: "Murzik takes the red jug from Avanos with him." },
        { en: "The magazine goes into the suitcase pocket, next to the postcards." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Kapadokya tamamlandı!", en: "Cappadocia complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — ninth part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik and Tom say goodbye to Deniz outside the hotel.",
      lines: [
        { ru: "Hoşça kal, Kapadokya! Hoşça kal, Deniz!", en: "Bye, Cappadocia! Bye, Deniz!" },
        { ru: "Sıradaki durak: Ankara!", en: "Next stop: Ankara!" },
      ],
    },
    {
      image: p("train"),
      a11y: "A train crosses the spring steppe towards the capital.",
      lines: [{ ru: "Kapadokya → Ankara", en: "Cappadocia → Ankara" }],
    },
    {
      image: pic("tr/ankara/arrival"),
      a11y: "Murzik and Tom by Ankara's old castle on a hill, with the big city below. A warm spring day.",
      lines: [
        { ru: "Merhaba, Ankara!", en: "Hello, Ankara!" },
        { ru: "Başkent!", en: "The capital!" },
      ],
    },
  ],
};

export const trKapadokyaEn = {
  id: "tr-kapadokya",
  name: "Cappadocia",
  nameTr: "Kapadokya",
  lessons: [kapadokya1, kapadokya2, kapadokya3, kapadokya4, kapadokya5, kapadokya6, kapadokya7],
  story,
};
