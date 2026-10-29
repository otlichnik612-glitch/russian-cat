import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, fill, letter, line, listen, match, missing, script, speak, spell, tf, v } from "./make";

/* Kadıköy (the Asian side of Istanbul) · “First conversation” · Murzik and Tom learn their first Turkish words from Ayşe Teyze, who runs the coffee house. English version. */

const p = (name: string) => pic(`tr/kadikoy/${name}`);

const kadikoy1: Lesson = {
  id: "tr-a1-kadikoy-1",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 1,
  title: "Merhaba! — Hello!",
  minutes: 6,
  goals: ["Say hello to a friend and to someone you don't know", "Ask someone's name and say yours", "Say “Nice to meet you”"],
  vocabNote: "Merhaba works with anyone, any time. Selam is more casual — it's how friends say hi. When in doubt, say Merhaba.",
  vocab: [
    v("trpa1-1", "Merhaba!", "Hello! / Hi!", "Murzik smiles and waves his paw.", "Listen to Merhaba", img.murzik, "[mehr-hah-bah]"),
    v("trpa1-2", "Selam!", "Hi! (to a friend)", "Murzik cheerfully waves to Tom from the window.", "Listen to Selam", p("l1-2"), "[seh-lahm]"),
    v("trpa1-3", "Adın ne?", "What's your name?", "Tom leans towards Murzik with a curious look, as if asking a question.", "Listen to Adın ne", pic("paris/l1-4"), "[ah-duhn neh]"),
    v("trpa1-4", "Benim adım…", "My name is…", "Murzik puts a paw on his chest and proudly says his name.", "Listen to Benim adım", pic("paris/l1-5"), "[beh-neem ah-duhm]"),
    v("trpa1-5", "Ya senin?", "And yours? (your name?)", "Murzik points his paw at Tom with a questioning look.", "Listen to Ya senin", pic("paris/l1-6"), "[yah seh-neen]"),
    v("trpa1-6", "Memnun oldum.", "Nice to meet you.", "Murzik and Tom meet on the Kadıköy waterfront, with ferries and seagulls behind them.", "Listen to Memnun oldum", p("l1-6"), "[mehm-noon ol-doom]"),
    v("trpa1-7", "Ben de.", "Me too.", "Murzik nods happily, paw on his chest, smiling at Tom.", "Listen to Ben de", pic("paris/l1-8"), "[ben deh]"),
  ],
  letters: [
    letter("A a", "like the “a” in “father”, but short", "Adın ne?", "What's your name?"),
    letter("E e", "like the “e” in “bed”", "Memnun oldum.", "Nice to meet you."),
    letter("M m", "like English “m”", "Merhaba!", "Hello!"),
    letter("N n", "like English “n”", "Ben de.", "Me too."),
    letter("I ı", "a short “uh”, like the “i” in “cousin”", "Adın ne?", "What's your name?", "The letter without a dot is not “ee”: adın sounds like [ah-duhn]!"),
  ],
  dialogue: {
    title: "A new friend in Kadıköy",
    note: "Ben Tom means “I am Tom” — literally “I Tom”. Turkish doesn't need a separate word for “am” here.",
    lines: [
      line("tom", "Merhaba!", "Hi!"),
      line("murzik", "Merhaba!", "Hi!"),
      line("tom", "Ben Tom. Adın ne?", "I'm Tom. What's your name?"),
      line("murzik", "Benim adım Murzik.", "My name is Murzik."),
      line("tom", "Memnun oldum!", "Nice to meet you!"),
      line("murzik", "Ben de! Tom, bu benim evim.", "You too! Tom, this is my home."),
      line("tom", "Vay! Çok güzel!", "Wow! It's lovely!"),
    ],
    gist: choice("trpa1-d1", "What's happening?", [
      ["Tom and Murzik are meeting for the first time.", true],
      ["Tom and Murzik are saying goodbye.", false],
      ["Tom is ordering a coffee.", false],
    ]),
  },
  grammar: [
    {
      title: "Merhaba or Selam? Two kinds of “you”",
      paragraphs: [
        "Merhaba is a greeting for every situation: a friend or an adult you don't know. Selam is more casual, for friends.",
        "English has one “you”, but Turkish has two, like French tu and vous. To a friend: Adın ne? To an adult you don't know: Adınız ne?",
      ],
      examples: [
        { ru: "Selam! Adın ne?", en: "Hi! What's your name? (to a friend)" },
        { ru: "Merhaba! Adınız ne?", en: "Hello! What's your name? (polite)" },
      ],
    },
  ],
  tasks: [
    choice("trpa1-t1", "What does Memnun oldum mean?", [
      ["Nice to meet you.", true],
      ["Me too.", false],
      ["Hello.", false],
    ], { skill: "words" }),
    listen("trpa1-t2", "Listen. What does it mean?", "Adın ne?", [
      ["What's your name?", true],
      ["How are you?", false],
      ["Who is that?", false],
    ]),
    choice("trpa1-t3", "You're meeting your new teacher, an adult. What do you say?", [
      ["Selam! Adın ne?", false],
      ["Merhaba! Adınız ne?", true],
    ], { skill: "grammar" }),
    spell("trpa1-t4", "Spell Tom's name.", "Tom"),
    speak("trpa1-t5", "Merhaba! Adın ne?", "Merhaba! Benim adım Aleks.", "Hi! My name is Alex.", {
      help: "Answer aloud and say your own name.",
    }),
    script("trpa1-t6", "Finish the mini-dialogue.", [
      { speaker: "Tom", text: "Benim adım Tom. Ya senin?" },
      { speaker: "You", answer: "Benim adım Aleks.", options: ["Benim adım Aleks.", "Ben de.", "Adın ne?"] },
      { speaker: "Tom", text: "Memnun oldum!" },
      { speaker: "You", answer: "Ben de!", options: ["Ben de!", "Merhaba!", "Ya senin?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kase",
    itemName: "Painted bowl",
    itemNameRu: "Kâse",
    ru: "Yaşasın! Bu benim kâsem!",
    en: "Hooray! This is my bowl!",
    a11y: "In his new room above the coffee house, Murzik happily hugs a new bowl with a turquoise Turkish pattern. Tom smiles beside him.",
    image: p("kase"),
    steps: ["Murzik spots a patterned bowl.", "He runs over to it.", "He hugs the bowl.", "Tom smiles."],
    bridge: "Tom lives next door and promises to drop by tomorrow. And downstairs, in the little coffee house, the owner is already waiting for Murzik.",
  },
};

const kadikoy2: Lesson = {
  id: "tr-a1-kadikoy-2",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 2,
  title: "Nasılsın? — How are you?",
  minutes: 6,
  goals: ["Ask how someone is", "Answer: great, good, not bad, so-so, bad", "Ask back: “And you?”"],
  vocabNote: "To Nasılsın? Turks most often answer İyiyim, sen? — “Fine, and you?”. To an adult you'd politely say Nasılsınız?",
  vocab: [
    v("trpa2-1", "Nasılsın?", "How are you?", "Tom waves to Murzik in the doorway with a warm smile.", "Listen to Nasılsın", pic("paris/l2-1"), "[nah-suhl-suhn]"),
    v("trpa2-2", "İyiyim, teşekkürler.", "Fine, thanks.", "Murzik smiles calmly and gives a thumbs up.", "Listen to İyiyim, teşekkürler", pic("paris/l2-3"), "[ee-yee-yeem, teh-shek-kewr-ler]"),
    v("trpa2-3", "Çok iyiyim!", "I'm great!", "Murzik jumps for joy, both paws in the air.", "Listen to Çok iyiyim", pic("paris/l2-4"), "[chok ee-yee-yeem]"),
    v("trpa2-4", "Fena değil.", "Not bad.", "Murzik shrugs calmly.", "Listen to Fena değil", pic("paris/l2-5"), "[feh-nah deh-eel]"),
    v("trpa2-5", "Şöyle böyle.", "So-so.", "Murzik wobbles his paw from side to side, looking doubtful.", "Listen to Şöyle böyle", pic("paris/l2-6"), "[shur-leh bur-leh]"),
    v("trpa2-6", "Kötüyüm.", "I'm not well.", "Murzik sits under a little grey cloud, ears drooping.", "Listen to Kötüyüm", pic("paris/l2-7"), "[kur-tew-yewm]"),
    v("trpa2-7", "Sen nasılsın?", "And how are you?", "Murzik points his paw at Tom in a friendly way, as if asking back.", "Listen to Sen nasılsın", pic("paris/l2-8"), "[sen nah-suhl-suhn]"),
  ],
  letters: [
    letter("İ i", "like the “ee” in “see”, but short", "İyiyim.", "I'm fine.", "With a dot it's “ee”, without a dot it's “uh”. Even the capital İ has a dot."),
    letter("Y y", "like the “y” in “yes”", "İyiyim.", "I'm fine.", "Y is always a consonant, never a vowel as in “happy”."),
    letter("S s", "like the “s” in “sun” — never like “z”", "Sen nasılsın?", "And how are you?"),
    letter("Ş ş", "like “sh” in “shop”", "Şöyle böyle.", "So-so.", "The little tail under the S turns it into “sh”."),
    letter("L l", "like English “l”; next to e and i it's lighter", "Nasılsın?", "How are you?"),
  ],
  dialogue: {
    title: "Morning in the coffee house",
    note: "Ayşe Teyze runs the coffee house downstairs, and Murzik rents a room from her. Teyze means “auntie”: a warm, respectful way to address an older woman. Murzik uses the polite “you” with her: Nasılsınız?",
    lines: [
      line("ayse", "Günaydın! Sen yeni komşu musun?", "Good morning! Are you the new neighbour?"),
      line("murzik", "Günaydın! Evet. Benim adım Murzik.", "Good morning! Yes. My name is Murzik."),
      line("ayse", "Ben Ayşe. Memnun oldum!", "I'm Ayşe. Nice to meet you!"),
      line("murzik", "Ben de! Nasılsınız?", "You too! How are you?"),
      line("ayse", "İyiyim, teşekkürler. Sen nasılsın?", "Fine, thank you. And how are you?"),
      line("murzik", "Çok iyiyim!", "I'm great!"),
      line("ayse", "Çay ister misin?", "Would you like some tea?"),
    ],
    gist: choice("trpa2-d1", "Who is Murzik talking to?", [
      ["The owner of the coffee house.", true],
      ["Tom.", false],
      ["A seller at the market.", false],
    ]),
  },
  grammar: [
    {
      title: "Nasılsın or Nasılsınız?",
      paragraphs: [
        "“You” to one friend is sen; the polite (or plural) “you” is siz. To a friend: Nasılsın? To an adult you don't know: Nasılsınız?",
        "The ending -sın means “you” (friendly), and -sınız means “you” (polite). That's why the word sen is often left out: Nasılsın? already means “How are you?”.",
      ],
      examples: [
        { ru: "Nasılsın, Tom?", en: "How are you, Tom?" },
        { ru: "Nasılsınız, Ayşe Teyze?", en: "How are you, Auntie Ayşe?" },
      ],
    },
  ],
  tasks: [
    listen("trpa2-t1", "Listen. How is the speaker?", "Kötüyüm.", [
      ["Not well.", true],
      ["Great.", false],
      ["Fine.", false],
    ]),
    match("trpa2-t2", "Match the pairs.", [
      ["İyiyim.", "I'm fine."],
      ["Çok iyiyim!", "I'm great!"],
      ["Şöyle böyle.", "So-so."],
      ["Kötüyüm.", "I'm not well."],
    ], { skill: "words" }),
    choice("trpa2-t3", "You're asking your elderly neighbour how she is. What do you say?", [
      ["Nasılsın?", false],
      ["Nasılsınız?", true],
    ], { skill: "grammar" }),
    missing("trpa2-t4", "Which letter is missing? (“So-so”)", "", "öyle böyle.", "Ş", ["Ş", "S", "Ç"]),
    speak("trpa2-t5", "Nasılsın?", "İyiyim, teşekkürler. Sen nasılsın?", "Fine, thanks. And how are you?", {
      help: "Answer aloud and ask back.",
    }),
    choice("trpa2-t6", "Tom says: Memnun oldum! What do you answer?", [
      ["Ben de!", true],
      ["Adın ne?", false],
      ["Kötüyüm.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "minder",
    itemName: "Floor cushion",
    itemNameRu: "Minder",
    ru: "Yaşasın! Yeni bir minder!",
    en: "Hooray! A new floor cushion!",
    a11y: "Murzik is curled up comfortably on a big cushion with a Turkish pattern, right on the floor by the window.",
    image: p("minder"),
    steps: ["Ayşe Teyze brings a big cushion.", "Murzik puts it by the window.", "He sits down.", "So comfy!"],
    bridge: "Tomorrow Tom is coming with a present. Time to learn to say “thank you” properly!",
  },
};

const kadikoy3: Lesson = {
  id: "tr-a1-kadikoy-3",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 3,
  title: "Thank you and sorry",
  minutes: 6,
  goals: ["Say thank you and reply to it", "Ask politely", "Say sorry and “it's fine”"],
  vocabNote: "Sağ ol is a short, friendly “thanks”. Teşekkür ederim works with everyone — friends and strangers alike.",
  vocab: [
    v("trpa3-1", "Teşekkür ederim.", "Thank you.", "Murzik holds a little gift box and smiles gratefully at Tom.", "Listen to Teşekkür ederim", pic("paris/l3-1"), "[teh-shek-kewr eh-deh-reem]"),
    v("trpa3-2", "Sağ ol!", "Thanks! (friendly)", "Murzik cheerfully gives Tom a thumbs up.", "Listen to Sağ ol", p("l3-2"), "[sah-ol]"),
    v("trpa3-3", "Rica ederim.", "You're welcome.", "Tom smiles warmly with a modest wave of his hand.", "Listen to Rica ederim", pic("paris/l3-3"), "[ree-jah eh-deh-reem]"),
    v("trpa3-4", "Lütfen.", "Please.", "Murzik politely folds his paws and points at a cup of tea.", "Listen to Lütfen", p("l3-4"), "[lewt-fen]"),
    v("trpa3-5", "Özür dilerim!", "I'm sorry!", "Tom has accidentally stepped on Murzik's tail and lifts his foot guiltily.", "Listen to Özür dilerim", pic("paris/l3-6"), "[ur-zewr dee-leh-reem]"),
    v("trpa3-6", "Pardon!", "Excuse me! (to get past)", "Murzik politely raises a paw to squeeze past an elderly lady in the narrow coffee-house doorway.", "Listen to Pardon", p("l3-6"), "[par-don]"),
    v("trpa3-7", "Önemli değil.", "It's fine. / No problem.", "Murzik smiles and swishes his tail good-naturedly: all is well.", "Listen to Önemli değil", pic("paris/l3-8"), "[ur-nem-lee deh-eel]"),
  ],
  letters: [
    letter("Ğ ğ", "soft g: not pronounced, it just stretches the vowel before it", "Sağ ol!", "Thanks!", "Sağ ol sounds like [sah-ol]."),
    letter("Ö ö", "like the “ur” in “fur” (without the r), lips rounded — like German ö", "Özür dilerim.", "I'm sorry."),
    letter("C c", "like the “j” in “jam”", "Rica ederim.", "You're welcome.", "Never like “k” or “s”: C always sounds like “j”."),
    letter("P p", "like English “p”", "Pardon!", "Excuse me!"),
    letter("F f", "like English “f”", "Lütfen.", "Please."),
  ],
  dialogue: {
    title: "A present",
    note: "Lütfen and rica ederim match English nicely: lütfen is “please” when you ask for something, and rica ederim is “you're welcome” after “thank you”.",
    lines: [
      line("tom", "Murzik, bu senin için.", "Murzik, this is for you."),
      line("murzik", "Vay! Teşekkür ederim!", "Wow! Thank you!"),
      line("tom", "Rica ederim.", "You're welcome."),
      line("tom", "Ah! Özür dilerim!", "Oops! Sorry!"),
      line("murzik", "Önemli değil.", "It's fine."),
      line("ayse", "Pardon… Bu bir raf mı? Çok güzel!", "Excuse me… Is that a shelf? It's beautiful!"),
      line("murzik", "Evet! Sağ ol, Tom!", "Yes! Thanks, Tom!"),
    ],
    gist: choice("trpa3-d1", "Why does Tom say “Özür dilerim!”?", [
      ["He did something by accident.", true],
      ["He's saying thank you.", false],
      ["He's saying goodbye.", false],
    ]),
  },
  grammar: [
    {
      title: "Lütfen or rica ederim?",
      paragraphs: [
        "Lütfen is what you say when you ask for something: Bir çay, lütfen. — A tea, please.",
        "Rica ederim is the answer to “thank you”: Teşekkür ederim! — Rica ederim.",
      ],
      examples: [
        { ru: "Bir çay, lütfen.", en: "A tea, please." },
        { ru: "Teşekkür ederim! — Rica ederim.", en: "Thank you! — You're welcome." },
      ],
    },
  ],
  tasks: [
    choice("trpa3-t1", "Someone says: Teşekkür ederim! What do you answer?", [
      ["Rica ederim.", true],
      ["Lütfen.", false],
      ["Pardon!", false],
    ], { skill: "grammar" }),
    listen("trpa3-t2", "Listen. What is being said?", "Özür dilerim.", [
      ["I'm sorry.", true],
      ["Thank you.", false],
      ["Please.", false],
    ]),
    tf("trpa3-t3", "Sağ ol means “thanks”.", true),
    missing("trpa3-t4", "Which letter is missing? (“You're welcome”)", "Ri", "a ederim.", "c", ["c", "ç", "j"]),
    speak("trpa3-t5", "Özür dilerim!", "Önemli değil.", "It's fine.", { help: "Answer aloud." }),
    choice("trpa3-t6", "How do you say “Nice to meet you”?", [
      ["Memnun oldum.", true],
      ["Ben de.", false],
      ["Nasılsın?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "raf",
    itemName: "Carved shelf",
    itemNameRu: "Raf",
    ru: "Yaşasın! Yeni bir raf!",
    en: "Hooray! A new shelf!",
    a11y: "A small carved wooden shelf with a pattern hangs on Murzik's wall. Murzik puts his bowl on it.",
    image: p("raf"),
    steps: ["Tom hangs the shelf on the wall.", "Murzik puts his bowl on it.", "He steps back to admire it.", "Lovely!"],
    bridge: "The next day Tom goes to the coffee house with Murzik. But Ayşe Teyze talks so fast…",
  },
};

const kadikoy4: Lesson = {
  id: "tr-a1-kadikoy-4",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 4,
  title: "I don't understand",
  minutes: 7,
  goals: ["Say you don't understand", "Ask someone to repeat and to speak more slowly", "Ask how to say something in Turkish and what a word means"],
  vocabNote: "Anlamadım literally means “I didn't understand”, but Turks use it to say “I don't understand”. Don't be shy about asking people to repeat: Turks are happy to help.",
  vocab: [
    v("trpa4-1", "Anlamadım.", "I don't understand.", "Tom scratches his head, looking puzzled. A question mark floats above him.", "Listen to Anlamadım", pic("paris/l4-1"), "[ahn-lah-mah-duhm]"),
    v("trpa4-2", "Tekrar eder misin?", "Could you say that again?", "Tom leans towards Murzik with a hand cupped to his ear.", "Listen to Tekrar eder misin", pic("paris/l4-3"), "[tek-rar eh-der mee-seen]"),
    v("trpa4-3", "Tekrar eder misiniz?", "Could you say that again? (polite)", "Murzik politely cups a paw to his ear while Ayşe Teyze talks.", "Listen to Tekrar eder misiniz", p("l4-3"), "[tek-rar eh-der mee-see-neez]"),
    v("trpa4-4", "Daha yavaş, lütfen.", "More slowly, please.", "Tom makes a gentle “slow down” gesture. A little snail sits on the table.", "Listen to Daha yavaş, lütfen", pic("paris/l4-5"), "[dah-hah yah-vahsh, lewt-fen]"),
    v("trpa4-5", "Türkçesi ne?", "What's that in Turkish?", "Tom holds a cup and looks at Murzik questioningly.", "Listen to Türkçesi ne", pic("paris/l4-8"), "[tewrk-cheh-see neh]"),
    v("trpa4-6", "… ne demek?", "What does … mean?", "Tom holds an open notebook with an underlined word and looks puzzled.", "Listen to ne demek", pic("paris/l4-9"), "[neh deh-mek]"),
    v("trpa4-7", "Bilmiyorum.", "I don't know.", "Murzik spreads his paws with a funny, puzzled face.", "Listen to Bilmiyorum", pic("paris/l4-10"), "[beel-mee-yo-room]"),
  ],
  letters: [
    letter("Ç ç", "like the “ch” in “church”", "Türkçesi ne?", "What's that in Turkish?", "With a tail it's “ch”; without a tail (C) it's “j”."),
    letter("Ü ü", "say “ee” with your lips rounded for “oo” — like German ü or French u", "Türkçesi ne?", "What's that in Turkish?"),
    letter("R r", "a light tap of the tongue, as in Spanish or Scottish English", "Tekrar eder misin?", "Could you say that again?"),
    letter("K k", "like English “k”", "Tekrar eder misin?", "Could you say that again?"),
    letter("D d", "like English “d”", "Anlamadım.", "I don't understand."),
  ],
  dialogue: {
    title: "In the coffee house",
    note: "Ayşe Teyze talks fast. No problem: Tekrar eder misiniz? Daha yavaş, lütfen.",
    lines: [
      line("ayse", "Hoş geldin, Tom! Ne alırsın? Çay mı, kahve mi?", "Welcome, Tom! What will you have? Tea or coffee?"),
      line("tom", "Pardon… Anlamadım.", "Sorry… I don't understand."),
      line("murzik", "Tekrar eder misiniz? Daha yavaş, lütfen.", "Could you say that again? More slowly, please."),
      line("ayse", "Çay mı? Kahve mi?", "Tea? Coffee?"),
      line("tom", "Aa! Çay, lütfen. Murzik, «cup» Türkçesi ne?", "Oh! Tea, please. Murzik, what's “cup” in Turkish?"),
      line("murzik", "Bilmiyorum!", "I don't know!"),
      line("ayse", "Bardak! Bu bir bardak.", "Bardak! This is a glass."),
    ],
    gist: choice("trpa4-d1", "Why doesn't Tom answer straight away?", [
      ["He doesn't understand Ayşe Teyze.", true],
      ["He doesn't want any tea.", false],
      ["He's in a hurry.", false],
    ]),
  },
  grammar: [
    {
      title: "How to say “not”",
      paragraphs: [
        "In Turkish “not” isn't a separate word like in English — it's a little piece inside the verb: -ma- or -me-. anla-dım — “I understood”, anla-ma-dım — “I didn't understand”. bil-iyorum — “I know”, bil-mi-yorum — “I don't know” (before -yor the vowel changes: bil-me- → bil-mi-yorum).",
        "To ask “what does … mean?”, put the question after the word: Bardak ne demek? — What does bardak mean?",
      ],
      examples: [
        { ru: "Bardak ne demek?", en: "What does bardak mean?" },
        { ru: "Anlamadım. Tekrar eder misiniz?", en: "I don't understand. Could you say that again?" },
      ],
    },
  ],
  tasks: [
    choice("trpa4-t1", "What does Bilmiyorum mean?", [
      ["I don't know.", true],
      ["I don't understand.", false],
      ["More slowly, please.", false],
    ], { skill: "words" }),
    listen("trpa4-t2", "Listen. What is the person asking for?", "Daha yavaş, lütfen.", [
      ["To speak more slowly.", true],
      ["To say it again.", false],
      ["To say a word in Turkish.", false],
    ]),
    choice("trpa4-t3", "You don't understand an elderly shopkeeper. How do you politely ask her to repeat?", [
      ["Tekrar eder misin?", false],
      ["Tekrar eder misiniz?", true],
    ], { skill: "grammar" }),
    missing("trpa4-t4", "Which letter is missing? (“in Turkish”)", "Türk", "e", "ç", ["ç", "c", "s"]),
    speak("trpa4-t5", "Kitap ne demek?", "Bilmiyorum. Tekrar eder misin?", "I don't know. Could you say that again?", {
      help: "Someone asks you about a word you don't know. Say aloud that you don't know and ask them to repeat.",
    }),
    match("trpa4-t6", "Remember the last lesson. Match the pairs.", [
      ["Teşekkür ederim.", "Thank you."],
      ["Rica ederim.", "You're welcome."],
      ["Özür dilerim.", "I'm sorry."],
      ["Önemli değil.", "It's fine."],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kilim",
    itemName: "Kilim rug",
    itemNameRu: "Kilim",
    ru: "Yaşasın! Yeni bir kilim!",
    en: "Hooray! A new kilim!",
    a11y: "A bright kilim rug with a red and blue pattern lies on the floor of Murzik's room. Murzik rolls on it with joy.",
    image: p("kilim"),
    steps: ["Ayşe Teyze unrolls an old kilim.", "Murzik helps spread it out.", "He rolls around on it.", "Soft and beautiful!"],
    bridge: "In the evening Tom asks: “Murzik, where are you from, anyway?”",
  },
};

const kadikoy5: Lesson = {
  id: "tr-a1-kadikoy-5",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 5,
  title: "Where are you from?",
  minutes: 7,
  goals: ["Ask where someone is from", "Say where you're from and where you live", "Ask if someone speaks Turkish"],
  vocabNote: "Nereli means “from where”. The ending -lı / -li / -lu / -lü means “from”: Moskovalı — from Moscow, Londralı — from London.",
  vocab: [
    v("trpa5-1", "Nerelisin?", "Where are you from?", "Tom and Murzik sit at the kitchen table with tea. Tom asks curiously.", "Listen to Nerelisin", pic("paris/l5-1"), "[neh-reh-lee-seen]"),
    v("trpa5-2", "Moskovalıyım.", "I'm from Moscow.", "Murzik holds a postcard of Moscow with colourful domes.", "Listen to Moskovalıyım", pic("paris/l5-2"), "[mos-ko-vah-luh-yuhm]"),
    v("trpa5-3", "Londralıyım.", "I'm from London.", "Tom holds a postcard of Big Ben and a red bus.", "Listen to Londralıyım", pic("paris/l5-3"), "[lon-drah-luh-yuhm]"),
    v("trpa5-4", "Nerede yaşıyorsun?", "Where do you live?", "Tom points at a little map of Europe on the wall with a questioning look.", "Listen to Nerede yaşıyorsun", pic("paris/l5-4"), "[neh-reh-deh yah-shuh-yor-soon]"),
    v("trpa5-5", "Paris'te yaşıyorum.", "I live in Paris.", "Murzik shows Tom a photo of his Paris apartment, with the Eiffel Tower in the window.", "Listen to Paris'te yaşıyorum", p("l5-5"), "[pah-rees-teh yah-shuh-yo-room]"),
    v("trpa5-6", "Türkçe biliyor musun?", "Do you speak Turkish?", "Murzik looks at Tom with raised eyebrows and an encouraging smile.", "Listen to Türkçe biliyor musun", pic("paris/l5-6"), "[tewrk-cheh bee-lee-yor moo-soon]"),
    v("trpa5-7", "Evet, biraz.", "Yes, a little.", "Tom shows a tiny gap between his thumb and finger and smiles shyly.", "Listen to Evet, biraz", pic("paris/l5-7"), "[eh-vet, bee-rahz]"),
  ],
  letters: [
    letter("B b", "like English “b”", "Evet, biraz.", "Yes, a little."),
    letter("V v", "like English “v”, but softer", "Evet.", "Yes."),
    letter("Z z", "like English “z”", "Evet, biraz.", "Yes, a little."),
    letter("O o", "like the “o” in “more”, but short", "Londralıyım.", "I'm from London.", "O is always a clear “o” — it never turns into “oh” or “uh”."),
    letter("U u", "like the “oo” in “book”", "Türkçe biliyor musun?", "Do you speak Turkish?"),
  ],
  dialogue: {
    title: "An evening in the kitchen",
    note: "Paris'te means “in Paris”. Names of people and places take an apostrophe before an ending: Paris'te, Tom'a.",
    lines: [
      line("tom", "Murzik, nerelisin?", "Murzik, where are you from?"),
      line("murzik", "Moskovalıyım. Ya sen?", "I'm from Moscow. And you?"),
      line("tom", "Londralıyım. Nerede yaşıyorsun?", "I'm from London. And where do you live?"),
      line("murzik", "Paris'te yaşıyorum. Türkçe biliyor musun?", "I live in Paris. Do you speak Turkish?"),
      line("tom", "Evet, biraz. Sen?", "Yes, a little. You?"),
      line("murzik", "Ben de biraz. Ama Ayşe Teyze çok iyi biliyor!", "Me too, a little. But Auntie Ayşe speaks it really well!"),
      line("tom", "Tabii, o İstanbullu!", "Of course — she's from Istanbul!"),
    ],
    gist: choice("trpa5-d1", "Where is Tom from?", [
      ["London.", true],
      ["Moscow.", false],
      ["Istanbul.", false],
    ]),
  },
  grammar: [
    {
      title: "Where from: -lı, -li, -lu, -lü",
      paragraphs: [
        "To say where someone is from, add -lı, -li, -lu or -lü to the name of the city: Moskova → Moskovalı, Londra → Londralı, İstanbul → İstanbullu.",
        "Which one? The last vowel of the word decides. After a or ı — -lı; after e or i — -li; after o or u — -lu; after ö or ü — -lü. This is vowel harmony, one of the key ideas of Turkish: endings change their vowel to match the word.",
      ],
      examples: [
        { ru: "Ben Moskovalıyım.", en: "I'm from Moscow." },
        { ru: "Ayşe Teyze İstanbullu.", en: "Auntie Ayşe is from Istanbul." },
      ],
    },
  ],
  tasks: [
    listen("trpa5-t1", "Listen. Where does the speaker live?", "Paris'te yaşıyorum.", [
      ["In Paris.", true],
      ["In Moscow.", false],
      ["In London.", false],
    ]),
    choice("trpa5-t2", "How do you say “I'm from London”?", [
      ["Londralıyım.", true],
      ["Londraliyim.", false],
      ["Londraluyum.", false],
    ], { skill: "grammar" }),
    match("trpa5-t3", "Match the pairs.", [
      ["Nerelisin?", "Where are you from?"],
      ["Nerede yaşıyorsun?", "Where do you live?"],
      ["Evet, biraz.", "Yes, a little."],
      ["Türkçe biliyor musun?", "Do you speak Turkish?"],
    ], { skill: "words" }),
    spell("trpa5-t4", "Spell the word for “yes”.", "Evet", ["a"]),
    speak("trpa5-t5", "Nerelisin?", "Moskovalıyım.", "I'm from Moscow.", {
      help: "Say aloud where you're from. For example: New Yorkluyum — I'm from New York.",
    }),
    choice("trpa5-t6", "Ayşe Teyze is talking very fast. What do you say to her?", [
      ["Daha yavaş, lütfen.", true],
      ["Memnun oldum.", false],
      ["Fena değil.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sehpa",
    itemName: "Carved coffee table",
    itemNameRu: "Sehpa",
    ru: "Yaşasın! Yeni bir sehpa!",
    en: "Hooray! A new coffee table!",
    a11y: "A low carved wooden table stands on the kilim with two glasses of tea on it. Murzik and Tom sit beside it on cushions.",
    image: p("sehpa"),
    steps: ["Tom brings a low carved table.", "He puts it on the kilim.", "Murzik pours the tea.", "Now they can drink tea the Turkish way!"],
    bridge: "Tomorrow is a day off. Tom wants to show Murzik something interesting.",
  },
};

const kadikoy6: Lesson = {
  id: "tr-a1-kadikoy-6",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 6,
  title: "Yes, no, maybe",
  minutes: 7,
  goals: ["Offer something and answer “yes” or “no”", "Say “of course”, “maybe”, “let's go”", "Ask a question with the little word mi"],
  vocabNote: "Tabii is written with two i's but sounds simply like [tah-bee]. Hadi! — “come on!, let's go!” — is something Turks say all the time.",
  vocab: [
    v("trpa6-1", "Çay ister misin?", "Would you like some tea?", "Tom holds a teapot over a glass and looks at Murzik.", "Listen to Çay ister misin", pic("paris/l6-2"), "[chai ees-ter mee-seen]"),
    v("trpa6-2", "Evet, isterim.", "Yes, please.", "Murzik nods happily and holds out his glass with both paws.", "Listen to Evet, isterim", pic("paris/l6-3"), "[eh-vet, ees-teh-reem]"),
    v("trpa6-3", "Hayır, teşekkürler.", "No, thank you.", "Murzik politely raises a paw and declines with a smile.", "Listen to Hayır, teşekkürler", pic("paris/l6-5"), "[hah-yuhr, teh-shek-kewr-ler]"),
    v("trpa6-4", "Tabii!", "Of course!", "Murzik nods eagerly, tail straight up.", "Listen to Tabii", pic("paris/l6-6"), "[tah-bee]"),
    v("trpa6-5", "Belki.", "Maybe.", "Murzik taps his chin with a paw and raises an eyebrow thoughtfully.", "Listen to Belki", pic("paris/l6-7"), "[bel-kee]"),
    v("trpa6-6", "Hadi!", "Let's go! / Come on!", "Murzik and Tom give each other a high five.", "Listen to Hadi", pic("paris/l6-8"), "[hah-dee]"),
    v("trpa6-7", "Yürüyüşe çıkalım mı?", "Shall we go for a walk?", "Tom stands by the door in his coat, calling Murzik to come outside.", "Listen to Yürüyüşe çıkalım mı", pic("paris/l6-9"), "[yew-rew-yew-sheh chuh-kah-luhm muh]"),
  ],
  letters: [
    letter("H h", "like the “h” in “hat” — always pronounced", "Hayır.", "No."),
    letter("I ı / İ i", "review: without a dot — “uh”, with a dot — “ee”", "Yürüyüşe çıkalım mı?", "Shall we go for a walk?", "çıkalım sounds like [chuh-kah-luhm]."),
    letter("Ş ş", "review: “sh”", "Yürüyüşe çıkalım mı?", "Shall we go for a walk?"),
  ],
  dialogue: {
    title: "The flea market",
    note: "Bit pazarı means “flea market” — just like in English: bit is “flea”, pazar is “market”.",
    lines: [
      line("tom", "Murzik, yürüyüşe çıkalım mı?", "Murzik, shall we go for a walk?"),
      line("murzik", "Belki… Nereye?", "Maybe… Where to?"),
      line("tom", "Bit pazarına! Kadıköy'de çok güzel bir bit pazarı var.", "To the flea market! There's a really good flea market in Kadıköy."),
      line("murzik", "Tabii! Hadi!", "Of course! Let's go!"),
      line("tom", "Bak, eski bir masa! Çok güzel.", "Look, an old table! It's beautiful."),
      line("tom", "Çay ister misin? Burada bir kafe var.", "Would you like some tea? There's a café here."),
      line("murzik", "Hayır, teşekkürler. Masa istiyorum!", "No, thank you. I want the table!"),
    ],
    gist: choice("trpa6-d1", "What does Murzik want?", [
      ["The old table.", true],
      ["Some tea.", false],
      ["To go home.", false],
    ]),
  },
  grammar: [
    {
      title: "Questions with mi",
      paragraphs: [
        "English makes yes/no questions by changing word order (“Do you…?”, “Is it…?”). Turkish keeps the order and adds a little word, mi, after the word you're asking about: Çay ister misin? — Would you like some tea?",
        "The vowel in mi follows vowel harmony: mı, mi, mu, mü. çıkalım mı, ister misin, var mı, güzel mi.",
      ],
      examples: [
        { ru: "Çay ister misin? — Evet, isterim.", en: "Would you like some tea? — Yes, please." },
        { ru: "Kahve ister misin? — Hayır, teşekkürler.", en: "Would you like a coffee? — No, thank you." },
      ],
    },
  ],
  tasks: [
    choice("trpa6-t1", "Choose the right question: “Would you like a coffee?”", [
      ["Kahve ister misin?", true],
      ["Kahve ister mısın?", false],
      ["Kahve istersin mi?", false],
    ], { skill: "grammar" }),
    listen("trpa6-t2", "Listen. What is Murzik doing?", "Hayır, teşekkürler.", [
      ["Politely saying no.", true],
      ["Saying yes.", false],
      ["Saying he doesn't know.", false],
    ]),
    match("trpa6-t3", "Match the pairs.", [
      ["Evet", "Yes"],
      ["Hayır", "No"],
      ["Belki", "Maybe"],
      ["Tabii!", "Of course!"],
    ], { skill: "words" }),
    spell("trpa6-t4", "Spell the word for “let's go!”.", "Hadi", ["e"]),
    speak("trpa6-t5", "Yürüyüşe çıkalım mı?", "Tabii! Hadi!", "Of course! Let's go!", { help: "Say yes, aloud." }),
    choice("trpa6-t6", "What does Nerelisin mean?", [
      ["Where are you from?", true],
      ["Where do you live?", false],
      ["What's your name?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "masa",
    itemName: "Antique table",
    itemNameRu: "Masa",
    ru: "Yaşasın! Eski bir masa!",
    en: "Hooray! An old table!",
    a11y: "A small antique table with mother-of-pearl inlay stands by the window. The drawer is open, and Murzik holds an old postcard in his paws.",
    image: p("masa"),
    steps: [
      "Murzik opens the drawer of the old table.",
      "There's another postcard inside!",
      "The same handwriting. The same little painted ginger cat. Grandma Asya!",
      "The postcard shows the Galata Tower and the colourful houses of Balat, across the water.",
    ],
    bridge: "Grandma Asya was in Balat, on the European side! The trail leads there…",
  },
};

const kadikoy7: Lesson = {
  id: "tr-a1-kadikoy-7",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 7,
  title: "Görüşürüz! — See you!",
  minutes: 8,
  goals: ["Say goodbye to a friend and to someone you don't know", "Wish someone a good day and a good trip", "Review all the words from Kadıköy"],
  vocabNote: "Hoşça kal is said by the person leaving. Güle güle is the answer from the person staying. Görüşürüz! — “see you!” — works for both.",
  vocab: [
    v("trpa7-1", "Hoşça kal!", "Bye! (said by the one leaving)", "Murzik cheerfully waves goodbye to Tom at the door.", "Listen to Hoşça kal", pic("paris/l7-1"), "[hosh-chah kahl]"),
    v("trpa7-2", "Güle güle!", "Bye! (said by the one staying)", "Ayşe Teyze waves from the coffee-house door.", "Listen to Güle güle", p("l7-2"), "[gew-leh gew-leh]"),
    v("trpa7-3", "Görüşürüz!", "See you!", "Murzik and Tom wave to each other from opposite sides of the street.", "Listen to Görüşürüz", p("l7-3"), "[gur-rew-shew-rewz]"),
    v("trpa7-4", "Yarın görüşürüz!", "See you tomorrow!", "Tom waves from the street in the evening. A crescent moon is in the sky.", "Listen to Yarın görüşürüz", pic("paris/l7-3"), "[yah-ruhn gur-rew-shew-rewz]"),
    v("trpa7-5", "İyi günler!", "Have a nice day!", "On a sunny morning Ayşe Teyze smiles and waves to Murzik.", "Listen to İyi günler", p("l7-5"), "[ee-yee gewn-ler]"),
    v("trpa7-6", "Sana da!", "You too!", "Murzik waves back at Tom with a big smile.", "Listen to Sana da", pic("paris/l7-7"), "[sah-nah dah]"),
    v("trpa7-7", "İyi yolculuklar!", "Have a good trip!", "Ayşe Teyze waves a handkerchief as Murzik carries a little suitcase.", "Listen to İyi yolculuklar", p("l7-7"), "[ee-yee yol-joo-look-lar]"),
  ],
  letters: [
    letter("G g", "always hard, like the “g” in “go” — never like “gem”", "Görüşürüz!", "See you!"),
    letter("J j", "like the “s” in “measure”; it's rare", "plaj", "beach", "The Turkish alphabet has 29 letters, and no Q, W or X at all."),
  ],
  dialogue: {
    title: "Goodbye",
    note: "Hoşça kalın is the polite form of Hoşça kal, for adults. Canım — “my dear” — is an affectionate word for people you're close to.",
    lines: [
      line("murzik", "Ayşe Teyze, yarın Balat'a gidiyorum!", "Auntie Ayşe, tomorrow I'm moving to Balat!"),
      line("ayse", "Balat'a mı? Ne güzel! Ben orada doğdum!", "To Balat? How lovely! I was born there!"),
      line("ayse", "Al, bu cezve senin. Balat'ta kahve yaparsın.", "Here, this cezve is yours. You can make coffee in Balat."),
      line("murzik", "Çok teşekkür ederim!", "Thank you so much!"),
      line("ayse", "Rica ederim. İyi yolculuklar!", "You're welcome. Have a good trip!"),
      line("murzik", "Hoşça kalın, Ayşe Teyze!", "Goodbye, Auntie Ayşe!"),
      line("ayse", "Güle güle, canım!", "Bye-bye, my dear!"),
    ],
    gist: choice("trpa7-d1", "What does Ayşe Teyze give Murzik?", [
      ["A cezve, a little coffee pot.", true],
      ["A tea glass.", false],
      ["A postcard.", false],
    ]),
  },
  grammar: [
    {
      title: "Who's leaving, and who's staying",
      paragraphs: [
        "English uses “bye” for both, but Turkish has two different words. If you're leaving, say Hoşça kal! (to adults: Hoşça kalın!). If you're staying, answer Güle güle!",
        "Görüşürüz! — “see you!” — works for both. You can add when: Yarın görüşürüz! — See you tomorrow!",
      ],
      examples: [
        { ru: "Hoşça kal, Tom! — Güle güle!", en: "Bye, Tom! — Bye-bye!" },
        { ru: "Yarın görüşürüz!", en: "See you tomorrow!" },
      ],
    },
  ],
  tasks: [
    listen("trpa7-t1", "Listen. Who is leaving?", "Hoşça kal, Tom! — Güle güle, Murzik!", [
      ["Murzik.", true],
      ["Tom.", false],
      ["Ayşe Teyze.", false],
    ]),
    choice("trpa7-t2", "Your friend is going home and you're staying. What do you say?", [
      ["Güle güle!", true],
      ["Hoşça kal!", false],
      ["Merhaba!", false],
    ], { skill: "words" }),
    fill("trpa7-t3", "Fill in the word: “See you tomorrow!”", "", "görüşürüz!", "Yarın", ["Yarın", "İyi", "Güle"], { skill: "grammar" }),
    missing("trpa7-t4", "Which letter is missing? (“See you!”)", "Görüşürü", "!", "z", ["z", "s", "ş"]),
    speak("trpa7-t5", "İyi günler!", "Sana da!", "You too!", { help: "Answer aloud." }),
    script("trpa7-t6", "Remember all of Kadıköy. Finish the conversation with Ayşe Teyze.", [
      { speaker: "Ayşe Teyze", text: "Merhaba! Nasılsın?" },
      { speaker: "You", answer: "İyiyim, teşekkürler.", options: ["İyiyim, teşekkürler.", "Bilmiyorum.", "Güle güle!"] },
      { speaker: "Ayşe Teyze", text: "Çay ister misin?" },
      { speaker: "You", answer: "Evet, isterim!", options: ["Evet, isterim!", "Özür dilerim.", "Nerelisin?"] },
      { speaker: "Ayşe Teyze", text: "İyi yolculuklar!" },
      { speaker: "You", answer: "Teşekkür ederim! Hoşça kalın!", options: ["Teşekkür ederim! Hoşça kalın!", "Rica ederim!", "Memnun oldum."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cezve",
    itemName: "Copper cezve",
    itemNameRu: "Cezve",
    ru: "Yaşasın! Bir cezve!",
    en: "Hooray! A cezve!",
    a11y: "Murzik holds a small copper cezve, a coffee pot with a long handle. Ayşe Teyze smiles in the coffee-house doorway.",
    image: p("cezve"),
    steps: ["Ayşe Teyze hands Murzik a little parcel.", "Inside is a copper cezve.", "“For real Turkish coffee!”", "Murzik hugs it tight."],
    bridge: "The suitcase is packed. Tomorrow — by ferry across the Bosphorus to Balat!",
  },
};

const story: CityStory = {
  home: {
    name: "A room above the coffee house in Kadıköy",
    nameRu: "Murzik'in Kadıköy'deki odası",
    image: p("home"),
    a11y: "A small empty room above Ayşe Teyze's coffee house: a wooden floor, a window onto a busy Kadıköy street and the sea in the distance. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "cezve",
  welcomeRu: "Merhaba, İstanbul!",
  welcomeEn: "Hello, Istanbul!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik with his suitcase on the Kadıköy pier, on the Asian side of Istanbul. White ferries, seagulls and little coffee houses along the shore.",
  departureImage: p("departure"),
  departureA11y: "Ayşe Teyze waves goodbye at the coffee-house door as Murzik and Tom walk to the pier with their suitcases.",
  finale: [
    {
      image: p("postcards"),
      a11y: "Close-up: Murzik's paws hold two old postcards in the same handwriting, each with the same little painted ginger cat. The first shows Istanbul and a Turkish stamp, the second the Galata Tower and the colourful houses of Balat. The words can't be read.",
      lines: [
        { en: "Before packing, Murzik looks at Grandma Asya's two postcards: the one that came to Paris, and the one from the old table." },
        { ru: "İzimi takip et. — Asya", en: "Follow my steps. — Asya" },
        { en: "Someone wants him to find her. The next step is Balat, on the other side of the Bosphorus." },
      ],
    },
    {
      image: p("cezve"),
      a11y: "Murzik walks round his room above the coffee house, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his room in Kadıköy. Tom takes a photo of it for his travel diary." },
        { en: "Murzik takes his favourite thing with him: Ayşe Teyze's cezve." },
        { en: "The postcards go into the pocket of his suitcase." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Kadıköy tamamlandı!", en: "Kadıköy complete!" },
        { en: "7 / 7 lessons" },
        { ru: "İlk şehir tamam!", en: "First city done!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Ayşe Teyze waves goodbye at the coffee-house door.",
      lines: [
        { ru: "Hoşça kalın, Ayşe Teyze!", en: "Goodbye, Auntie Ayşe!" },
        { ru: "Sıradaki durak: Balat!", en: "Next stop: Balat!" },
      ],
    },
    {
      image: p("ferry"),
      a11y: "A white ferry crosses the Bosphorus from the Asian side to the European side. Murzik and Tom stand on deck with seagulls all around.",
      lines: [{ ru: "Kadıköy → Balat", en: "Kadıköy → Balat" }],
    },
    {
      image: pic("tr/istanbul/arrival"),
      a11y: "Murzik and Tom with their suitcases on the waterfront of the European side. Behind them: the Galata Tower, ferries on the Bosphorus and seagulls.",
      lines: [
        { ru: "İşte Avrupa yakası!", en: "Here's the European side!" },
        { ru: "Yeni bir semt. Yeni kelimeler. Yeni maceralar.", en: "A new neighbourhood. New words. New adventures." },
      ],
    },
  ],
};

export const trKadikoyEn = {
  id: "tr-kadikoy",
  name: "Kadıköy",
  nameTr: "Kadıköy",
  lessons: [kadikoy1, kadikoy2, kadikoy3, kadikoy4, kadikoy5, kadikoy6, kadikoy7],
  story,
};
