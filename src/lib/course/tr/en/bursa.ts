import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { build, choice, line, listen, match, missing, script, speak, spell, tf, v } from "./make";

/* Bursa · “Food and shopping” · the tea house, the lokanta, the market, prices, paying, dinner, cooking at home. English version. */

const p = (name: string) => pic(`tr/bursa/${name}`);

const bursa1: Lesson = {
  id: "tr-a1-bursa-1",
  level: "A1",
  cityId: "tr-bursa",
  number: 1,
  title: "In the tea house",
  minutes: 7,
  goals: ["Order tea or coffee", "Say “with sugar” and “without sugar”", "Ask for the bill"],
  vocabNote: "Turkish coffee is brewed with the sugar already in it, so the waiter asks in advance: şekerli mi, şekersiz mi?",
  vocab: [
    v("trbu1-1", "Ne istersiniz?", "What would you like?", "A waiter with a tray leans politely over the table.", "Listen to Ne istersiniz", p("l1-1")),
    v("trbu1-2", "Bir çay, lütfen.", "A tea, please.", "Tom holds up one finger next to a tulip glass of tea.", "Listen to Bir çay, lütfen", p("l1-2")),
    v("trbu1-3", "Bir Türk kahvesi, lütfen.", "A Turkish coffee, please.", "A tiny cup of thick, frothy coffee and a glass of water.", "Listen to Bir Türk kahvesi, lütfen", p("l1-3")),
    v("trbu1-4", "Şekerli mi, şekersiz mi?", "With or without sugar?", "The waiter holds a sugar bowl in one hand and gestures questioningly with the other.", "Listen to Şekerli mi, şekersiz mi", p("l1-4")),
    v("trbu1-5", "Az şekerli.", "With a little sugar.", "Murzik shows a tiny lump of sugar with his paw.", "Listen to Az şekerli", p("l1-5")),
    v("trbu1-6", "Başka bir şey?", "Anything else?", "The waiter waits with a notepad, eyebrows raised.", "Listen to Başka bir şey", p("l1-6")),
    v("trbu1-7", "Hesap, lütfen.", "The bill, please.", "Tom raises his hand as if writing in the air — asking for the bill.", "Listen to Hesap, lütfen", p("l1-7")),
  ],
  dialogue: {
    title: "The tea house by the Koza Han",
    note: "Altında means “under it”. Turks use the word resim for both a painting and a drawing.",
    lines: [
      line("waiter", "Hoş geldiniz! Ne istersiniz?", "Welcome! What would you like?"),
      line("tom", "Bir çay, lütfen.", "A tea, please."),
      line("murzik", "Bir Türk kahvesi, lütfen.", "A Turkish coffee, please."),
      line("waiter", "Şekerli mi, şekersiz mi?", "With or without sugar?"),
      line("murzik", "Az şekerli.", "With a little sugar."),
      line("waiter", "Başka bir şey?", "Anything else?"),
      line("tom", "Hayır, teşekkürler. Murzik, bak! Duvarda bir resim var.", "No, thanks. Murzik, look! There's a picture on the wall."),
      line("murzik", "Bir kedi resmi! Altında bir isim var: Asya!", "A picture of a cat! And there's a name under it: Asya!"),
    ],
    gist: choice("trbu1-d1", "What does Murzik see on the wall?", [
      ["A drawing of a cat signed “Asya”.", true],
      ["A map of Bursa.", false],
      ["The menu.", false],
    ]),
  },
  grammar: [
    {
      title: "With and without: -lı and -sız",
      paragraphs: [
        "“With something” is the ending -lı, -li, -lu or -lü: şeker-li — with sugar, süt-lü — with milk.",
        "“Without something” is -sız, -siz, -suz or -süz, much like English “-less”: şeker-siz — without sugar (“sugarless”), süt-süz — without milk. As always, the vowel matches the word.",
      ],
      examples: [
        { ru: "Şekersiz bir kahve, lütfen.", en: "A coffee without sugar, please." },
        { ru: "Sütlü çay var mı?", en: "Do you have tea with milk?" },
      ],
    },
  ],
  tasks: [
    listen("trbu1-t1", "Listen. What coffee does the customer want?", "Bir Türk kahvesi, az şekerli.", [
      ["Turkish, slightly sweet.", true],
      ["Tea without sugar.", false],
      ["Coffee without sugar.", false],
    ]),
    match("trbu1-t2", "Match the pairs.", [
      ["Hesap, lütfen.", "The bill, please."],
      ["Başka bir şey?", "Anything else?"],
      ["şekerli", "with sugar"],
      ["şekersiz", "without sugar"],
    ], { skill: "words" }),
    choice("trbu1-t3", "How do you say “without milk”? (milk — süt)", [
      ["sütsüz", true],
      ["sütsız", false],
      ["sütlü", false],
    ], { skill: "grammar" }),
    missing("trbu1-t4", "Which letter is missing? (“coffee”)", "kahv", "", "e", ["e", "a", "ı"]),
    speak("trbu1-t5", "Ne istersiniz?", "Bir çay, lütfen.", "A tea, please.", { help: "Order aloud what you'd like." }),
    choice("trbu1-t6", "How do you ask “Where's the stop?”", [
      ["Durak nerede?", true],
      ["Durak ne kadar?", false],
      ["Durak var mı?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fincan",
    itemName: "Little coffee cup",
    itemNameRu: "Fincan",
    ru: "Yaşasın! Küçük bir fincan!",
    en: "Hooray! A little coffee cup!",
    a11y: "A small porcelain Turkish coffee cup with a red pattern, on a saucer. Next to it: a glass of water and a piece of Turkish delight.",
    image: p("fincan"),
    steps: ["The waiter brings the coffee in a beautiful little cup.", "“Bu fincan sizin olsun!” — “Let this cup be yours!”", "Murzik wraps it up carefully.", "The first thing for his home in Bursa!"],
    bridge: "The waiter says a guest left the drawing here, long ago. The owner of the lokanta across the street knows more.",
  },
};

const bursa2: Lesson = {
  id: "tr-a1-bursa-2",
  level: "A1",
  cityId: "tr-bursa",
  number: 2,
  title: "In the lokanta",
  minutes: 7,
  goals: ["Ask for the menu and for advice", "Order food and a drink", "Say “I'm hungry”"],
  vocabNote: "A lokanta is a simple Turkish restaurant with home-style food. İskender is Bursa's famous dish: meat on bread with tomato sauce and yoghurt.",
  vocab: [
    v("trbu2-1", "Menü var mı?", "Is there a menu?", "Tom points questioningly at the empty table.", "Listen to Menü var mı", p("l2-1")),
    v("trbu2-2", "Ne tavsiye edersiniz?", "What do you recommend?", "Murzik, menu in paws, looks at the owner of the lokanta.", "Listen to Ne tavsiye edersiniz", p("l2-2")),
    v("trbu2-3", "Bir İskender, lütfen.", "One İskender, please.", "A plate of İskender: meat on bread with tomato sauce and yoghurt.", "Listen to Bir İskender, lütfen", p("l2-3")),
    v("trbu2-4", "Çok açım!", "I'm really hungry!", "Murzik holds his empty tummy, dreaming of a plate of food.", "Listen to Çok açım", p("l2-4")),
    v("trbu2-5", "Bir de ayran.", "And an ayran, too.", "A tall glass of white, frothy ayran.", "Listen to Bir de ayran", p("l2-5")),
    v("trbu2-6", "Vejetaryen yemek var mı?", "Do you have vegetarian food?", "Tom points at a picture of vegetables on the menu.", "Listen to Vejetaryen yemek var mı", p("l2-6")),
    v("trbu2-7", "Bir dakika, lütfen.", "Just a minute, please.", "The owner raises a finger: “Coming!”", "Listen to Bir dakika, lütfen", p("l2-7")),
  ],
  dialogue: {
    title: "At Zeynep Hanım's",
    note: "Oturun means “sit down” (polite). Bursa'nın en meşhur yemeği — “Bursa's most famous dish”. Ayran is a salty yoghurt drink.",
    lines: [
      line("zeynep", "Hoş geldiniz! Buyurun, oturun.", "Welcome! Come in, sit down."),
      line("tom", "Teşekkürler. Menü var mı?", "Thanks. Is there a menu?"),
      line("zeynep", "Tabii, buyurun.", "Of course, here you are."),
      line("murzik", "Ne tavsiye edersiniz?", "What do you recommend?"),
      line("zeynep", "İskender! Bursa'nın en meşhur yemeği.", "İskender! Bursa's most famous dish."),
      line("murzik", "Çok açım! Bir İskender, lütfen. Bir de ayran.", "I'm really hungry! One İskender, please. And an ayran, too."),
      line("tom", "Ben de İskender istiyorum!", "I'd like İskender too!"),
      line("zeynep", "Bir dakika!", "Just a minute!"),
    ],
    gist: choice("trbu2-d1", "What does Murzik order?", [
      ["İskender and ayran.", true],
      ["Tea and a simit.", false],
      ["Just water.", false],
    ]),
  },
  grammar: [
    {
      title: "I'm hungry: -ım, -im, -um, -üm",
      paragraphs: [
        "In English you say “I am hungry”. In Turkish “I am” is just an ending on the word: aç (hungry) → açım — I'm hungry. The ending is -ım, -im, -um or -üm, following vowel harmony.",
        "After a vowel, add a y: mutlu → mutlu-y-um — I'm happy. You already know a word like this: iyi → iyiyim — I'm fine.",
      ],
      examples: [
        { ru: "Açım!", en: "I'm hungry!" },
        { ru: "Murzik çok mutlu. — Ben de mutluyum!", en: "Murzik is very happy. — I'm happy too!" },
      ],
    },
  ],
  tasks: [
    choice("trbu2-t1", "How do you say “I'm hungry”?", [
      ["Açım.", true],
      ["Aç.", false],
      ["Açsın.", false],
    ], { skill: "grammar" }),
    listen("trbu2-t2", "Listen. What does the owner recommend?", "İskender tavsiye ederim.", [
      ["İskender.", true],
      ["Ayran.", false],
      ["A simit.", false],
    ]),
    match("trbu2-t3", "Match the pairs.", [
      ["menü", "menu"],
      ["ayran", "ayran (yoghurt drink)"],
      ["yemek", "food"],
      ["vejetaryen", "vegetarian"],
    ], { skill: "words" }),
    missing("trbu2-t4", "Which letter is missing? (“Is there a menu?”)", "Men", " var mı?", "ü", ["ü", "u", "i"]),
    speak("trbu2-t5", "Ne istersiniz?", "Bir İskender, lütfen. Bir de ayran.", "One İskender, please. And an ayran, too.", { help: "Order lunch aloud." }),
    choice("trbu2-t6", "The waiter asks: Şekerli mi? You want it without sugar. What do you say?", [
      ["Şekersiz, lütfen.", true],
      ["Şekerli, lütfen.", false],
      ["Hesap, lütfen.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tabak",
    itemName: "Painted plate",
    itemNameRu: "Tabak",
    ru: "Yaşasın! Güzel bir tabak!",
    en: "Hooray! A beautiful plate!",
    a11y: "A big ceramic plate painted with blue tulips stands on Murzik's shelf.",
    image: p("tabak"),
    steps: ["Zeynep Hanım gives Murzik a plate with tulips.", "“Bursa'dan hatıra!” — “A souvenir of Bursa!”", "Murzik puts it on his shelf.", "Beautiful!"],
    bridge: "Zeynep Hanım says: “Tomorrow is market day. Let's go together — I'll show you the freshest tomatoes!”",
  },
};

const bursa3: Lesson = {
  id: "tr-a1-bursa-3",
  level: "A1",
  cityId: "tr-bursa",
  number: 3,
  title: "At the market",
  minutes: 7,
  goals: ["Name kinds of food", "Buy a kilo of something", "Make plurals: -lar / -ler"],
  vocabNote: "Pazar means both “market” and “Sunday”. Every neighbourhood in Turkey has its own market day.",
  vocab: [
    v("trbu3-1", "pazar", "market", "A busy market under awnings: piles of vegetables and fruit.", "Listen to pazar", p("l3-1")),
    v("trbu3-2", "domates", "tomato", "A crate of shiny red tomatoes.", "Listen to domates", p("l3-2")),
    v("trbu3-3", "elma", "apple", "A basket of red and green apples.", "Listen to elma", p("l3-3")),
    v("trbu3-4", "ekmek", "bread", "A round, golden loaf on a wooden board.", "Listen to ekmek", p("l3-4")),
    v("trbu3-5", "peynir", "cheese", "Chunks of white Turkish cheese in a bowl.", "Listen to peynir", p("l3-5")),
    v("trbu3-6", "Bir kilo elma, lütfen.", "A kilo of apples, please.", "Murzik points at the scales with apples on them.", "Listen to Bir kilo elma, lütfen", p("l3-6")),
    v("trbu3-7", "Taze mi?", "Are they fresh?", "Zeynep Hanım sniffs a tomato critically.", "Listen to Taze mi", p("l3-7")),
  ],
  dialogue: {
    title: "Market day",
    note: "Bakalım means “let's see”. Alalım means “let's buy”.",
    lines: [
      line("seller", "Buyurun! Domatesler çok taze!", "Come and see! The tomatoes are really fresh!"),
      line("zeynep", "Taze mi? Bakalım…", "Fresh, are they? Let's see…"),
      line("seller", "Tabii taze! Bugün geldi.", "Of course they're fresh! They came in today."),
      line("murzik", "Bir kilo domates, lütfen. Bir de elma.", "A kilo of tomatoes, please. And some apples, too."),
      line("seller", "Kaç kilo elma?", "How many kilos of apples?"),
      line("murzik", "İki kilo.", "Two kilos."),
      line("zeynep", "Peynir de alalım. Ve ekmek!", "Let's get some cheese too. And bread!"),
    ],
    gist: choice("trbu3-d1", "What does Murzik buy?", [
      ["Tomatoes and apples.", true],
      ["Just bread.", false],
      ["Fish.", false],
    ]),
  },
  grammar: [
    {
      title: "More than one: -lar and -ler",
      paragraphs: [
        "The plural ending is -lar or -ler — like English -s. After a, ı, o, u use -lar; after e, i, ö, ü use -ler: elma → elmalar, ekmek → ekmekler.",
        "Remember: after a number or kilo, no plural is needed — iki kilo domates (literally “two kilo tomato”), beş elma.",
      ],
      examples: [
        { ru: "Domatesler çok taze.", en: "The tomatoes are very fresh." },
        { ru: "İki kilo elma, lütfen.", en: "Two kilos of apples, please." },
      ],
    },
  ],
  tasks: [
    choice("trbu3-t1", "How do you say “apples”?", [
      ["elmalar", true],
      ["elmaler", false],
      ["elmalır", false],
    ], { skill: "grammar" }),
    listen("trbu3-t2", "Listen. How many kilos of apples?", "İki kilo elma, lütfen.", [
      ["Two.", true],
      ["One.", false],
      ["Three.", false],
    ]),
    match("trbu3-t3", "Match the pairs.", [
      ["ekmek", "bread"],
      ["peynir", "cheese"],
      ["elma", "apple"],
      ["domates", "tomato"],
    ], { skill: "words" }),
    spell("trbu3-t4", "Spell the word for “cheese”.", "peynir"),
    speak("trbu3-t5", "Ne istiyorsunuz?", "Bir kilo domates, lütfen.", "A kilo of tomatoes, please.", { help: "Ask for something at the market, aloud." }),
    listen("trbu3-t6", "Remember the tea house. What is the customer asking for?", "Hesap, lütfen.", [
      ["The bill.", true],
      ["The menu.", false],
      ["Tea.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sepet",
    itemName: "Basket",
    itemNameRu: "Sepet",
    ru: "Yaşasın! Büyük bir sepet!",
    en: "Hooray! A big basket!",
    a11y: "Murzik carries a wicker basket full of tomatoes, apples and bread. Zeynep Hanım walks beside him.",
    image: p("sepet"),
    steps: ["The seller gives them a wicker basket.", "Murzik puts the shopping in it.", "The basket is heavy, but Murzik proudly carries it himself.", "Now it'll live in the kitchen!"],
    bridge: "There's so much at the market! And the sweet shop has Bursa's famous candied chestnuts. But how much are they?",
  },
};

const bursa4: Lesson = {
  id: "tr-a1-bursa-4",
  level: "A1",
  cityId: "tr-bursa",
  number: 4,
  title: "How much is it?",
  minutes: 7,
  goals: ["Ask the price", "Understand numbers up to 100", "Say “expensive”, “cheap” and ask for a discount"],
  vocabNote: "The tens are easy to learn in pairs: yirmi (20), otuz (30), kırk (40), elli (50). 25 is yirmi beş — literally “twenty five”, just like English.",
  vocab: [
    v("trbu4-1", "Ne kadar?", "How much is it?", "Murzik holds a box of sweets and looks questioningly at the seller.", "Listen to Ne kadar", p("l4-1")),
    v("trbu4-2", "yirmi, otuz, kırk, elli", "twenty, thirty, forty, fifty", "Four price tags on the counter: 20, 30, 40 and 50.", "Listen to yirmi, otuz, kırk, elli", p("l4-2")),
    v("trbu4-3", "altmış, yetmiş, seksen, doksan, yüz", "sixty, seventy, eighty, ninety, a hundred", "Five price tags in a row: 60, 70, 80, 90 and 100.", "Listen to altmış, yetmiş, seksen, doksan, yüz", p("l4-3")),
    v("trbu4-4", "lira", "lira (Turkish money)", "A few Turkish coins and banknotes in a palm.", "Listen to lira", p("l4-4")),
    v("trbu4-5", "Çok pahalı!", "That's very expensive!", "Murzik stares at a huge price tag in horror, ears sticking up.", "Listen to Çok pahalı", p("l4-5")),
    v("trbu4-6", "Ucuz.", "It's cheap.", "Murzik happily points at a small price tag.", "Listen to Ucuz", p("l4-6")),
    v("trbu4-7", "İndirim var mı?", "Is there a discount?", "Tom gives the seller a cheeky smile and shows “a little bit” with his fingers.", "Listen to İndirim var mı", p("l4-7")),
  ],
  dialogue: {
    title: "Candied chestnuts",
    note: "Kestane şekeri — candied chestnuts, Bursa's famous sweet. Peki means “all right”.",
    lines: [
      line("murzik", "Bu kestane şekeri ne kadar?", "How much are these candied chestnuts?"),
      line("seller", "Yüz lira.", "A hundred lira."),
      line("murzik", "Yüz lira mı? Çok pahalı!", "A hundred lira? That's very expensive!"),
      line("seller", "Ama çok güzel! Tamam, doksan lira.", "But they're really good! OK, ninety lira."),
      line("tom", "İndirim var mı? Seksen?", "Is there a discount? Eighty?"),
      line("seller", "Peki, seksen beş lira.", "All right, eighty-five lira."),
      line("murzik", "Tamam! Teşekkürler!", "Deal! Thanks!"),
    ],
    gist: choice("trbu4-d1", "What price do they pay for the chestnuts in the end?", [
      ["85 lira.", true],
      ["100 lira.", false],
      ["80 lira.", false],
    ]),
  },
  grammar: [
    {
      title: "Numbers up to 100",
      paragraphs: [
        "Bigger numbers are simple: tens + units. yirmi beş — 25, kırk iki — 42, doksan dokuz — 99. No “and” is needed.",
        "To ask a price, say Ne kadar? or Kaç lira? Answer with a number and lira: Elli lira. Like “seven seagulls” in Istanbul, lira stays singular after a number.",
      ],
      examples: [
        { ru: "Bu ne kadar? — Otuz beş lira.", en: "How much is this? — Thirty-five lira." },
        { ru: "Kaç lira? — Yetmiş.", en: "How many lira? — Seventy." },
      ],
    },
  ],
  tasks: [
    listen("trbu4-t1", "Listen to the price.", "Kırk beş lira.", [
      ["45 lira", true],
      ["54 lira", false],
      ["40 lira", false],
    ]),
    match("trbu4-t2", "Match the numbers.", [
      ["otuz", "30"],
      ["elli", "50"],
      ["seksen", "80"],
      ["yüz", "100"],
    ], { skill: "words" }),
    choice("trbu4-t3", "How do you say “seventy-two”?", [
      ["yetmiş iki", true],
      ["iki yetmiş", false],
      ["yetmiş ve iki", false],
    ], { skill: "grammar" }),
    missing("trbu4-t4", "Which letter is missing? (“sixty”)", "altm", "ş", "ı", ["ı", "i", "u"]),
    speak("trbu4-t5", "Bu ne kadar?", "Elli lira.", "Fifty lira.", { help: "Say a price aloud." }),
    choice("trbu4-t6", "How do you say “tomatoes”?", [
      ["domatesler", true],
      ["domateslar", false],
      ["domatesiler", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kestane",
    itemName: "Candied chestnuts",
    itemNameRu: "Kestane şekeri",
    ru: "Yaşasın! Kestane şekeri!",
    en: "Hooray! Candied chestnuts!",
    a11y: "A pretty box of glazed chestnuts, Bursa's famous sweet. Murzik tries one and closes his eyes with pleasure.",
    image: p("kestane"),
    steps: ["The seller wraps the box in paper.", "Murzik tries a chestnut.", "He closes his eyes with pleasure.", "The box gets a place of honour on the shelf."],
    bridge: "In the silk row of the Koza Han, Murzik sees a scarf just like the one in Grandma's drawing. But how can he pay for it?",
  },
};

const bursa5: Lesson = {
  id: "tr-a1-bursa-5",
  level: "A1",
  cityId: "tr-bursa",
  number: 5,
  title: "Card or cash?",
  minutes: 7,
  goals: ["Ask if you can pay by card", "Understand the cashier", "Ask for a receipt and your change"],
  vocabNote: "The Koza Han is Bursa's old silk market. Koza means “silkworm cocoon”.",
  vocab: [
    v("trbu5-1", "Kartla mı, nakit mi?", "Card or cash?", "The cashier points at the card machine and the cash drawer.", "Listen to Kartla mı, nakit mi", p("l5-1")),
    v("trbu5-2", "Kartla ödeyebilir miyim?", "Can I pay by card?", "Murzik holds out a bank card with a questioning look.", "Listen to Kartla ödeyebilir miyim", p("l5-2")),
    v("trbu5-3", "Nakit.", "Cash.", "Tom puts some banknotes on the counter.", "Listen to Nakit", p("l5-3")),
    v("trbu5-4", "fiş", "receipt", "A long paper receipt curls out of the till.", "Listen to fiş", p("l5-4")),
    v("trbu5-5", "para üstü", "change", "The cashier counts coins into Murzik's paw.", "Listen to para üstü", p("l5-5")),
    v("trbu5-6", "Bozuk param yok.", "I don't have any change.", "Murzik turns out his empty purse, and a moth flies out.", "Listen to Bozuk param yok", p("l5-6")),
    v("trbu5-7", "Kasa nerede?", "Where's the till?", "Murzik, a scarf in his paws, looks around a big shop.", "Listen to Kasa nerede", p("l5-7")),
  ],
  dialogue: {
    title: "The silk row",
    note: "Değil mi? goes at the end of a sentence, like the English tag “isn't it?”, “right?”.",
    lines: [
      line("seller", "Bu ipek eşarp çok güzel, değil mi?", "This silk scarf is beautiful, isn't it?"),
      line("murzik", "Evet! Ne kadar?", "Yes! How much is it?"),
      line("seller", "Seksen lira.", "Eighty lira."),
      line("murzik", "Kartla ödeyebilir miyim?", "Can I pay by card?"),
      line("seller", "Tabii. Kasa orada.", "Of course. The till's over there."),
      line("cashier", "Kartla mı, nakit mi?", "Card or cash?"),
      line("murzik", "Kartla. Fiş, lütfen.", "Card. A receipt, please."),
      line("cashier", "Buyurun, fişiniz.", "Here's your receipt."),
    ],
    gist: choice("trbu5-d1", "How does Murzik pay?", [
      ["By card.", true],
      ["In cash.", false],
      ["He doesn't pay.", false],
    ]),
  },
  grammar: [
    {
      title: "Can I…? — -ebilir miyim?",
      paragraphs: [
        "“Can I…? / May I…?” is the verb + -ebilir miyim? or -abilir miyim?: öde-yebilir miyim? — can I pay?, al-abilir miyim? — can I have / take?",
        "After a, ı, o, u use -abilir; after e, i, ö, ü use -ebilir. If the verb ends in a vowel, add a y: öde-y-ebilir.",
      ],
      examples: [
        { ru: "Kartla ödeyebilir miyim?", en: "Can I pay by card?" },
        { ru: "Bir fiş alabilir miyim?", en: "Can I have a receipt?" },
      ],
    },
  ],
  tasks: [
    choice("trbu5-t1", "How do you ask “Can I pay by card?”", [
      ["Kartla ödeyebilir miyim?", true],
      ["Kartla ödeyebilir misin?", false],
      ["Kartla öde mi?", false],
    ], { skill: "grammar" }),
    listen("trbu5-t2", "Listen. What doesn't the customer have?", "Bozuk param yok.", [
      ["Change (coins).", true],
      ["A card.", false],
      ["A receipt.", false],
    ]),
    match("trbu5-t3", "Match the pairs.", [
      ["fiş", "receipt"],
      ["kasa", "till"],
      ["nakit", "cash"],
      ["para üstü", "change"],
    ], { skill: "words" }),
    missing("trbu5-t4", "Which letter is missing? (“receipt”)", "fi", "", "ş", ["ş", "s", "ç"]),
    speak("trbu5-t5", "Kartla mı, nakit mi?", "Nakit, lütfen.", "Cash, please.", { help: "Say aloud how you'll pay." }),
    listen("trbu5-t6", "Remember the numbers. What's the price?", "Doksan lira.", [
      ["90 lira", true],
      ["19 lira", false],
      ["60 lira", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "esarp",
    itemName: "Silk scarf",
    itemNameRu: "İpek eşarp",
    ru: "Yaşasın! Bir ipek eşarp!",
    en: "Hooray! A silk scarf!",
    a11y: "Murzik tries on a light silk scarf with a tulip pattern; Tom is reflected in the mirror beside him.",
    image: p("esarp"),
    steps: ["Murzik unfolds the silk scarf.", "It's as light as a cloud.", "The pattern is tulips, just like in Grandma's drawing.", "Murzik ties it round his neck next to his own scarf."],
    bridge: "In the evening Zeynep Hanım invites them to dinner.",
  },
};

const bursa6: Lesson = {
  id: "tr-a1-bursa-6",
  level: "A1",
  cityId: "tr-bursa",
  number: 6,
  title: "Afiyet olsun! — Enjoy your meal!",
  minutes: 7,
  goals: ["Invite people to the table and wish them a good meal", "Praise the food and thank the cook", "Politely say no to seconds"],
  vocabNote: "Eline sağlık literally means “health to your hand”. It's how you thank the person who cooked. They answer: Afiyet olsun!",
  vocab: [
    v("trbu6-1", "Masaya buyurun!", "Come to the table, please!", "Zeynep Hanım puts a big dish on the table and waves everyone over.", "Listen to Masaya buyurun", p("l6-1")),
    v("trbu6-2", "Afiyet olsun!", "Enjoy your meal!", "Everyone at the laid table smiles and picks up their spoons.", "Listen to Afiyet olsun", p("l6-2")),
    v("trbu6-3", "Çok lezzetli!", "It's delicious!", "Murzik closes his eyes with pleasure, his spoon full.", "Listen to Çok lezzetli", p("l6-3")),
    v("trbu6-4", "Eline sağlık!", "Thank you, that was delicious! (to the cook)", "Murzik puts a grateful paw on his chest and bows to Zeynep Hanım.", "Listen to Eline sağlık", p("l6-4")),
    v("trbu6-5", "Biraz daha ister misin?", "Would you like a bit more?", "Zeynep Hanım holds a ladle over Murzik's plate.", "Listen to Biraz daha ister misin", p("l6-5")),
    v("trbu6-6", "Doydum, teşekkürler.", "I'm full, thank you.", "Murzik leans back in his chair, patting his round tummy.", "Listen to Doydum, teşekkürler", p("l6-6")),
    v("trbu6-7", "tatlı", "dessert, something sweet", "A dish of little sweets in syrup.", "Listen to tatlı", p("l6-7")),
  ],
  dialogue: {
    title: "Dinner at Zeynep Hanım's",
    note: "Canım means “my dear”. Kestane tatlısı is a chestnut dessert. Ellerinize sağlık is the polite form of Eline sağlık.",
    lines: [
      line("zeynep", "Masaya buyurun! Afiyet olsun!", "Come to the table! Enjoy your meal!"),
      line("tom", "Teşekkürler! Mmm, çok lezzetli!", "Thank you! Mmm, it's delicious!"),
      line("murzik", "Evet! Ellerinize sağlık, Zeynep Hanım!", "Yes! Thank you, it's delicious, Zeynep Hanım!"),
      line("zeynep", "Afiyet olsun, canım. Biraz daha ister misin?", "Enjoy it, my dear. Would you like a bit more?"),
      line("murzik", "Hayır, doydum, teşekkürler. Ama tatlı var mı?", "No, I'm full, thank you. But is there dessert?"),
      line("zeynep", "Tabii! Kestane tatlısı!", "Of course! Chestnut dessert!"),
    ],
    gist: choice("trbu6-d1", "What does Murzik say to the cook after the meal?", [
      ["He thanks her for the delicious dinner.", true],
      ["He asks for the bill.", false],
      ["He says it wasn't nice.", false],
    ]),
  },
  grammar: [
    {
      title: "Words at the table",
      paragraphs: [
        "Before a meal, and whenever you see someone eating, Turks say Afiyet olsun! — “enjoy your meal!”. English has no everyday word for this — Turkish does, and uses it all the time.",
        "After the meal you thank the cook: Eline sağlık! She answers: Afiyet olsun! A Turkish dinner never goes without these words.",
      ],
      examples: [
        { ru: "Eline sağlık! — Afiyet olsun!", en: "Thank you, that was delicious! — Enjoy it!" },
        { ru: "Biraz daha ister misin? — Doydum, teşekkürler.", en: "Would you like some more? — I'm full, thank you." },
      ],
    },
  ],
  tasks: [
    choice("trbu6-t1", "What do you say to someone who has cooked a delicious meal?", [
      ["Eline sağlık!", true],
      ["Afiyet olsun!", false],
      ["Hesap, lütfen!", false],
    ], { skill: "words" }),
    listen("trbu6-t2", "Listen. What are you being offered?", "Biraz daha ister misin?", [
      ["A bit more food.", true],
      ["Tea.", false],
      ["The bill.", false],
    ]),
    tf("trbu6-t3", "Afiyet olsun! is said before a meal or when someone is eating.", true, "grammar"),
    missing("trbu6-t4", "Which letter is missing? (“delicious”)", "lezzetl", "", "i", ["i", "ı", "e"]),
    speak("trbu6-t5", "Biraz daha ister misin?", "Hayır, doydum, teşekkürler.", "No, I'm full, thank you.", { help: "Politely say no, aloud." }),
    choice("trbu6-t6", "You want to pay in cash. What do you say?", [
      ["Nakit, lütfen.", true],
      ["Kartla, lütfen.", false],
      ["Fiş, lütfen.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tencere",
    itemName: "Copper pot",
    itemNameRu: "Tencere",
    ru: "Yaşasın! Bakır bir tencere!",
    en: "Hooray! A copper pot!",
    a11y: "A shiny copper pot with a lid stands on the stove. Murzik sees his reflection in it.",
    image: p("tencere"),
    steps: ["After dinner Zeynep Hanım brings out a copper pot.", "“Al, bu senin. Yemek yaparsın!” — “Here, it's yours. You'll cook in it!”", "Murzik looks into it like a mirror.", "Tomorrow — a cooking lesson!"],
    bridge: "Zeynep Hanım promises to teach Murzik to make real menemen.",
  },
};

const bursa7: Lesson = {
  id: "tr-a1-bursa-7",
  level: "A1",
  cityId: "tr-bursa",
  number: 7,
  title: "Cooking at home",
  minutes: 8,
  goals: ["Understand a simple recipe", "Say “first… then…”", "Review all the words from Bursa"],
  vocabNote: "Menemen is Turkish scrambled eggs with tomatoes and peppers. Every family makes it for breakfast.",
  vocab: [
    v("trbu7-1", "Önce soğanı doğra.", "First, chop the onion.", "Murzik in an apron chops an onion, shedding funny little tears.", "Listen to Önce soğanı doğra", p("l7-1")),
    v("trbu7-2", "Domatesleri ekle.", "Add the tomatoes.", "Murzik's paw tips chopped tomatoes into the pan.", "Listen to Domatesleri ekle", p("l7-2")),
    v("trbu7-3", "Karıştır.", "Stir.", "Murzik stirs the pan with a wooden spoon.", "Listen to Karıştır", p("l7-3")),
    v("trbu7-4", "tuz", "salt", "A little salt shaker and a pinch of salt.", "Listen to tuz", p("l7-4")),
    v("trbu7-5", "ocak", "cooker, stove", "A gas cooker with a blue flame.", "Listen to ocak", p("l7-5")),
    v("trbu7-6", "Hazır!", "It's ready!", "Murzik proudly lifts a pan of hot menemen.", "Listen to Hazır", p("l7-6")),
    v("trbu7-7", "Tadına bak!", "Have a taste!", "Murzik holds out a spoon to Tom: “Have a taste!”", "Listen to Tadına bak", p("l7-7")),
  ],
  dialogue: {
    title: "A cooking lesson",
    note: "Yapıyoruz means “we're making”. Yumurta means “egg”.",
    lines: [
      line("zeynep", "Bugün menemen yapıyoruz! Önce soğanı doğra.", "Today we're making menemen! First, chop the onion."),
      line("murzik", "Tamam. Sonra?", "OK. Then what?"),
      line("zeynep", "Sonra domatesleri ekle. Karıştır!", "Then add the tomatoes. Stir!"),
      line("tom", "Tuz var mı?", "Is there any salt?"),
      line("zeynep", "Biraz tuz. Şimdi yumurta.", "A little salt. Now the eggs."),
      line("murzik", "Hazır mı?", "Is it ready?"),
      line("zeynep", "Hazır! Tadına bak!", "It's ready! Have a taste!"),
      line("murzik", "Çok lezzetli! Eline sağlık!", "It's delicious! Thank you!"),
    ],
    gist: choice("trbu7-d1", "What are they cooking?", [
      ["Menemen — eggs with tomatoes.", true],
      ["İskender.", false],
      ["Soup.", false],
    ]),
  },
  grammar: [
    {
      title: "First… then…",
      paragraphs: [
        "Önce means “first”, sonra means “then”. With them a recipe is easy to follow: Önce soğanı doğra, sonra domatesleri ekle.",
        "A friendly instruction is just the bare verb, like in English: doğra! — chop!, ekle! — add!, karıştır! — stir! You already know bak! and ara!.",
      ],
      examples: [
        { ru: "Önce soğanı doğra, sonra karıştır.", en: "First chop the onion, then stir." },
        { ru: "Biraz tuz ekle.", en: "Add a little salt." },
      ],
    },
  ],
  tasks: [
    listen("trbu7-t1", "Audio exam. What do you need to do first?", "Önce soğanı doğra, sonra domatesleri ekle.", [
      ["Chop the onion.", true],
      ["Add the tomatoes.", false],
      ["Add salt.", false],
    ]),
    match("trbu7-t2", "Match the pairs.", [
      ["tuz", "salt"],
      ["ocak", "cooker"],
      ["soğan", "onion"],
      ["yumurta", "egg"],
    ], { skill: "words" }),
    build("trbu7-t3", "Put the words in order: “First chop the onion, then add the tomatoes”.", ["Önce", "soğanı", "doğra,", "sonra", "domatesleri", "ekle."]),
    missing("trbu7-t4", "Which letter is missing? (“stir”)", "Karışt", "r", "ı", ["ı", "i", "u"]),
    speak("trbu7-t5", "Hazır mı?", "Hazır! Tadına bak!", "It's ready! Have a taste!", { help: "Answer aloud and offer a taste." }),
    script("trbu7-t6", "Remember all of Bursa. Finish the conversations.", [
      { speaker: "Waiter", text: "Ne istersiniz?" },
      { speaker: "You", answer: "Bir çay, lütfen.", options: ["Bir çay, lütfen.", "Doydum.", "Kasa nerede?"] },
      { speaker: "Seller", text: "Yüz lira." },
      { speaker: "You", answer: "Çok pahalı! İndirim var mı?", options: ["Çok pahalı! İndirim var mı?", "Çok lezzetli!", "Afiyet olsun!"] },
      { speaker: "Zeynep Hanım", text: "Afiyet olsun!" },
      { speaker: "You", answer: "Teşekkürler! Eline sağlık!", options: ["Teşekkürler! Eline sağlık!", "Hesap, lütfen.", "Taze mi?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "onluk",
    itemName: "Apron",
    itemNameRu: "Önlük",
    ru: "Yaşasın! Yeni bir önlük!",
    en: "Hooray! A new apron!",
    a11y: "Murzik, in a little apron with an embroidered tulip, stands at the stove holding a wooden spoon.",
    image: p("onluk"),
    steps: ["Zeynep Hanım ties an apron on Murzik.", "It has a tulip embroidered on it.", "“Artık sen bir aşçısın!” — “Now you're a real cook!”", "Murzik proudly raises his spoon."],
    bridge: "Before they leave, Zeynep Hanım wants to tell them about the drawing of the ginger cat.",
  },
};

const story: CityStory = {
  home: {
    name: "A room with a bay window",
    nameRu: "Cumbalı oda",
    image: p("home"),
    a11y: "A room in an old house with a wooden bay window overlooking the street. The Koza Han silk market can be seen below. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "esarp",
  welcomeRu: "Merhaba, Bursa!",
  welcomeEn: "Hello, Bursa!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom have arrived in Bursa. Behind them: green Mount Uludağ and old domes, with trees all around.",
  departureImage: p("departure"),
  departureA11y: "Murzik and Tom with their suitcases at Bursa bus station, next to an intercity coach.",
  finale: [
    {
      image: p("zeynep"),
      a11y: "Zeynep Hanım takes the drawing of the ginger cat down from the tea-house wall and hands it to Murzik. Tom stands beside them.",
      lines: [
        { en: "On the last evening Zeynep Hanım brings the drawing of the ginger cat from the tea house opposite and gives it to Murzik." },
        { ru: "Çok güzel resim yapardı. Ama hep kızını özlüyordu.", en: "She painted beautifully. But she always missed her daughter." },
        { en: "Her daughter? Murzik remembers: his Aunt Leyla, Grandma Asya's daughter, lives in Izmir!" },
      ],
    },
    {
      image: p("esarp"),
      a11y: "Murzik walks round the room with the bay window, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round the room with the bay window. Tom takes a photo of it for his travel diary." },
        { en: "Murzik takes the silk scarf from the Koza Han with him." },
        { en: "Grandma's drawing goes into the suitcase pocket, next to the postcards." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Bursa tamamlandı!", en: "Bursa complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — third part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik and Tom with their suitcases by the intercity coach.",
      lines: [
        { ru: "Hoşça kal, Bursa!", en: "Bye, Bursa!" },
        { ru: "Sıradaki durak: İzmir!", en: "Next stop: Izmir!" },
      ],
    },
    {
      image: p("road"),
      a11y: "The coach drives along a road through olive groves towards the sea.",
      lines: [{ ru: "Bursa → İzmir", en: "Bursa → Izmir" }],
    },
    {
      image: pic("tr/izmir/arrival"),
      a11y: "Murzik and Tom on the Kordon waterfront in Izmir: palm trees, the sea and the ornate old clock tower.",
      lines: [
        { ru: "Merhaba, İzmir!", en: "Hello, İzmir!" },
        { ru: "Burada teyzem yaşıyor!", en: "My aunt lives here!" },
      ],
    },
  ],
};

export const trBursaEn = {
  id: "tr-bursa",
  name: "Bursa",
  nameTr: "Bursa",
  lessons: [bursa1, bursa2, bursa3, bursa4, bursa5, bursa6, bursa7],
  story,
};
