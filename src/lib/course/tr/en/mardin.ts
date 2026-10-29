import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Mardin · “A1 review” · meeting Can, mountain weather, breakfast, up to the old town, a festival, the cat in the hat, the A1 exam. English version. */

const p = (name: string) => pic(`tr/mardin/${name}`);

const mardin1: Lesson = {
  id: "tr-a1-mardin-1",
  level: "A1",
  cityId: "tr-mardin",
  number: 1,
  title: "Long time no see!",
  minutes: 7,
  goals: ["Greet an old friend", "Introduce a friend: Tanıştırayım", "Ask how things are going"],
  vocabNote: "Reviewing greetings and introductions. Uzun zamandır görüşmedik — “we haven't seen each other for ages”. Tanıştırayım — “let me introduce…”.",
  vocab: [
    v("trma1-1", "Görüşmeyeli çok oldu!", "Long time no see!", "Tom and his friend Can hug at the bus station.", "Listen to Görüşmeyeli çok oldu", p("l1-1")),
    v("trma1-2", "Uzun zamandır görüşmedik.", "We haven't seen each other for ages.", "Can, a camera round his neck, claps Tom on the shoulder.", "Listen to Uzun zamandır görüşmedik", p("l1-2")),
    v("trma1-3", "Tanıştırayım: bu Murzik.", "Let me introduce you: this is Murzik.", "Tom points to Murzik, who waves a paw.", "Listen to Tanıştırayım: bu Murzik", p("l1-3")),
    v("trma1-4", "Nasıl gidiyor?", "How's it going?", "Can smiles, squinting in the sun.", "Listen to Nasıl gidiyor", p("l1-4")),
    v("trma1-5", "Her şey yolunda.", "Everything's fine.", "Tom gives a thumbs-up.", "Listen to Her şey yolunda", p("l1-5")),
    v("trma1-6", "Hâlâ fotoğrafçı mısın?", "Are you still a photographer?", "Tom nods at Can's camera.", "Listen to Hâlâ fotoğrafçı mısın", p("l1-6")),
    v("trma1-7", "eski arkadaş", "old friend", "An old photo: a young Tom and Can with their cameras.", "Listen to eski arkadaş", p("l1-7")),
  ],
  dialogue: {
    title: "Can",
    note: "Can (say “jahn”) is Tom's friend, a photographer at the same magazine. Dergi — “magazine”. Yol arkadaşı — “travel companion”. Bahsetmek — “to talk about”.",
    lines: [
      line("can", "Tom! Görüşmeyeli çok oldu!", "Tom! Long time no see!"),
      line("tom", "Can! Uzun zamandır görüşmedik! Nasıl gidiyor?", "Can! It's been ages! How's it going?"),
      line("can", "Her şey yolunda. Hâlâ dergide çalışıyorum.", "Everything's fine. I'm still working at the magazine."),
      line("tom", "Tanıştırayım: bu Murzik. Benim yol arkadaşım.", "Let me introduce you: this is Murzik. My travel companion."),
      line("murzik", "Merhaba! Memnun oldum!", "Hello! Nice to meet you!"),
      line("can", "Ben de! Tom senden çok bahsetti. Mardin'e hoş geldin!", "You too! Tom's told me a lot about you. Welcome to Mardin!"),
    ],
    gist: choice("trma1-d1", "Who is Can?", [
      ["Tom's old friend, a photographer.", true],
      ["Tom's brother.", false],
      ["The hotel owner.", false],
    ]),
  },
  grammar: [
    {
      title: "Review: introductions and “how are you?”",
      paragraphs: [
        "Introductions: Benim adım… (my name is…), Memnun oldum (nice to meet you), Tanıştırayım: bu… (let me introduce: this is…).",
        "How are you: Nasılsın? Nasıl gidiyor? Ne haber? Answers: İyiyim, teşekkürler. Her şey yolunda. Fena değil.",
      ],
      examples: [
        { ru: "Tanıştırayım: bu benim kardeşim.", en: "Let me introduce my brother." },
        { ru: "Fena değil, sen nasılsın?", en: "Not bad, how about you?" },
      ],
    },
  ],
  tasks: [
    choice("trma1-t1", "How do you say “We haven't seen each other for ages”?", [
      ["Uzun zamandır görüşmedik.", true],
      ["Uzun zamandır görüşüyoruz.", false],
      ["Uzun zaman görüşmek.", false],
    ], { skill: "grammar" }),
    listen("trma1-t2", "Listen. How is he?", "Fena değil, biraz yorgunum.", [
      ["Not bad, a bit tired.", true],
      ["Great, not tired at all.", false],
      ["Bad, he's ill.", false],
    ]),
    match("trma1-t3", "Match the pairs.", [
      ["Tanıştırayım", "Let me introduce"],
      ["Her şey yolunda.", "Everything's fine."],
      ["hâlâ", "still"],
      ["eski arkadaş", "old friend"],
    ], { skill: "words" }),
    missing("trma1-t4", "Which letter is missing? (“still”)", "h", "lâ", "â", ["â", "a", "e"]),
    speak("trma1-t5", "Merhaba! Ben Can. Sen kimsin?", "Merhaba! Benim adım Murzik. Memnun oldum!", "Hi! My name's Murzik. Nice to meet you!", { help: "Introduce yourself aloud." }),
    choice("trma1-t6", "How do you say “I haven't found it yet”?", [
      ["Henüz bulmadım.", true],
      ["Zaten bulmadım.", false],
      ["Henüz buldum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kupa",
    itemName: "Cat mug",
    itemNameRu: "Kupa",
    ru: "Yaşasın! Bir kupa!",
    en: "Hooray! A mug!",
    a11y: "A big ceramic mug with a picture of a ginger kitten holding a camera.",
    image: p("kupa"),
    steps: ["Can takes a mug out of his rucksack.", "On it is a ginger kitten with a camera.", "“Tom fotoğrafını gönderdi, ben de yaptırdım!” — “Tom sent me your photo, so I had this made!”", "The mug goes on the windowsill."],
    bridge: "Can looks at the sky: “Dağda hava çabuk değişir.” — “In the mountains the weather changes fast.”",
  },
};

const mardin2: Lesson = {
  id: "tr-a1-mardin-2",
  level: "A1",
  cityId: "tr-mardin",
  number: 2,
  title: "Mountain weather",
  minutes: 7,
  goals: ["Review the weather", "Talk about day and night: gündüz, gece", "Ask about tomorrow's weather"],
  vocabNote: "Reviewing the weather. Gündüz — “in the daytime”, gece — “at night”. Serin — “cool”. Ova — “plain”.",
  vocab: [
    v("trma2-1", "Gündüz sıcak, gece serin.", "It's hot by day and cool at night.", "Half the picture is sun, half is moon over the stone town.", "Listen to Gündüz sıcak, gece serin", p("l2-1")),
    v("trma2-2", "Rüzgâr esiyor.", "The wind is blowing.", "Murzik's scarf flutters in the wind.", "Listen to Rüzgâr esiyor", p("l2-2")),
    v("trma2-3", "Yarın hava nasıl olacak?", "What will the weather be like tomorrow?", "Tom checks the forecast on his phone.", "Listen to Yarın hava nasıl olacak", p("l2-3")),
    v("trma2-4", "Bulutlu olacak.", "It'll be cloudy.", "Clouds over the plain.", "Listen to Bulutlu olacak", p("l2-4")),
    v("trma2-5", "Ceketini al!", "Take your jacket!", "Can holds out a little jacket to Murzik.", "Listen to Ceketini al", p("l2-5")),
    v("trma2-6", "ova", "plain", "An endless yellow plain stretching to the horizon.", "Listen to ova", p("l2-6")),
    v("trma2-7", "Güneş batıyor.", "The sun is setting.", "A red sun sinks below the plain.", "Listen to Güneş batıyor", p("l2-7")),
  ],
  dialogue: {
    title: "On the roof",
    note: "Belki — “maybe”. Kıpkırmızı — “bright red, red all over”. Syria is very close, just across the plain.",
    lines: [
      line("murzik", "Hava çok güzel! Ama rüzgâr esiyor.", "The weather's lovely! But the wind's blowing."),
      line("can", "Mardin'de gündüz sıcak, gece serin. Ceketini al!", "In Mardin it's hot by day and cool at night. Take your jacket!"),
      line("tom", "Yarın hava nasıl olacak?", "What will the weather be like tomorrow?"),
      line("can", "Bulutlu olacak, belki biraz yağmur.", "It'll be cloudy, maybe a little rain."),
      line("murzik", "Bak! Güneş batıyor! Ova kıpkırmızı!", "Look! The sun's setting! The plain's gone bright red!"),
      line("can", "İşte Mardin'in en güzel fotoğrafı. Hadi, Tom!", "That's the best photo in Mardin. Go on, Tom!"),
    ],
    gist: choice("trma2-d1", "What will the weather be like tomorrow?", [
      ["Cloudy, maybe some rain.", true],
      ["Hot and sunny.", false],
      ["Snow and wind.", false],
    ]),
  },
  grammar: [
    {
      title: "Review: the weather and the future",
      paragraphs: [
        "Weather now: Hava güzel / sıcak / soğuk. Yağmur yağıyor. Rüzgâr esiyor.",
        "Weather tomorrow uses -acak / -ecek: Yarın güneşli olacak. Yarın yağmur yağacak. The question: Yarın hava nasıl olacak?",
      ],
      examples: [
        { ru: "Yarın kar yağacak.", en: "It's going to snow tomorrow." },
        { ru: "Akşam hava serin olacak.", en: "It'll be cool in the evening." },
      ],
    },
  ],
  tasks: [
    choice("trma2-t1", "How do you say “It'll be cloudy tomorrow”?", [
      ["Yarın bulutlu olacak.", true],
      ["Yarın bulutlu oldu.", false],
      ["Yarın bulutlu oluyor değil.", false],
    ], { skill: "grammar" }),
    listen("trma2-t2", "Listen. What's the weather like?", "Bugün rüzgâr esiyor ve hava serin.", [
      ["Windy and cool.", true],
      ["Hot and still.", false],
      ["It's snowing.", false],
    ]),
    match("trma2-t3", "Match the pairs.", [
      ["gündüz", "in the daytime"],
      ["gece", "at night"],
      ["serin", "cool"],
      ["ova", "plain"],
    ], { skill: "words" }),
    missing("trma2-t4", "Which letter is missing? (“plain”)", "o", "a", "v", ["v", "b", "f"]),
    speak("trma2-t5", "Bugün hava nasıl?", "Bugün hava güneşli ama biraz rüzgârlı.", "It's sunny today, but a bit windy.", { help: "Say aloud what the weather's like today." }),
    listen("trma2-t6", "Remember the last lesson. How are things?", "Her şey yolunda.", [
      ["Everything's fine.", true],
      ["Everything's lost.", false],
      ["Everything's closed.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "durbun",
    itemName: "Spyglass",
    itemNameRu: "Dürbün",
    ru: "Yaşasın! Bir dürbün!",
    en: "Hooray! A spyglass!",
    a11y: "A small brass spyglass on a tripod by a window looking out over the plain.",
    image: p("durbun"),
    steps: ["Can sets up a brass spyglass by the window.", "“Bak, ovanın sonu yok!” — “Look, the plain never ends!”", "Murzik looks far away, right to the horizon.", "The spyglass stays by the window."],
    bridge: "In the morning — Mardin's famous breakfast on the terrace.",
  },
};

const mardin3: Lesson = {
  id: "tr-a1-mardin-3",
  level: "A1",
  cityId: "tr-mardin",
  number: 3,
  title: "A Mardin breakfast",
  minutes: 7,
  goals: ["Review food and ordering", "Say what you like and don't like", "Offer to pay: Ben ısmarlıyorum"],
  vocabNote: "Reviewing food. Ismarlamak — “to treat (someone)”: Ben ısmarlıyorum — “it's my treat”. Acı — “spicy, hot”.",
  vocab: [
    v("trma3-1", "Mardin kahvaltısı", "Mardin breakfast", "A stone terrace with a table covered in little plates of cheese, herbs and spreads.", "Listen to Mardin kahvaltısı", p("l3-1")),
    v("trma3-2", "Bir menengiç kahvesi, lütfen.", "One menengiç coffee, please.", "A little cup of thick, pale, frothy coffee.", "Listen to Bir menengiç kahvesi, lütfen", p("l3-2")),
    v("trma3-3", "Bu acı mı?", "Is this spicy?", "Murzik sniffs a red paste suspiciously.", "Listen to Bu acı mı", p("l3-3")),
    v("trma3-4", "Biraz acı.", "A bit spicy.", "Murzik tries it and his ears turn red.", "Listen to Biraz acı", p("l3-4")),
    v("trma3-5", "Doydum!", "I'm full!", "Murzik leans back in his chair, patting his tummy.", "Listen to Doydum", p("l3-5")),
    v("trma3-6", "Zeytini sevmiyorum.", "I don't like olives.", "Murzik pushes the plate of olives away with his paw.", "Listen to Zeytini sevmiyorum", p("l3-6")),
    v("trma3-7", "Bugün ben ısmarlıyorum!", "Today it's my treat!", "Can takes the bill from the waiter.", "Listen to Bugün ben ısmarlıyorum", p("l3-7")),
  ],
  dialogue: {
    title: "The terrace",
    note: "Menengiç is a wild pistachio: its roasted seeds make a mild, caffeine-free “coffee”. Olmaz — “no way, certainly not”. Doydum — literally “I've filled up” — another feeling in the past.",
    lines: [
      line("waiter", "Günaydın! Ne istersiniz?", "Good morning! What would you like?"),
      line("can", "Mardin kahvaltısı ve üç menengiç kahvesi, lütfen.", "A Mardin breakfast and three menengiç coffees, please."),
      line("murzik", "Bu kırmızı ne? Acı mı?", "What's this red stuff? Is it spicy?"),
      line("waiter", "Biraz acı. Ama çok lezzetli!", "A bit spicy. But it's delicious!"),
      line("murzik", "Evet, çok lezzetli! Ama zeytini sevmiyorum.", "Yes, it's delicious! But I don't like olives."),
      line("murzik", "Doydum! Çok teşekkürler!", "I'm full! Thank you so much!"),
      line("tom", "Hesap lütfen!", "The bill, please!"),
      line("can", "Olmaz! Bugün ben ısmarlıyorum!", "No way! Today it's my treat!"),
    ],
    gist: choice("trma3-d1", "Who pays for breakfast?", [
      ["Can.", true],
      ["Tom.", false],
      ["Murzik.", false],
    ]),
  },
  grammar: [
    {
      title: "Review: likes and dislikes",
      paragraphs: [
        "Seviyorum — I like, sevmiyorum — I don't like. The thing you like takes -ı / -i / -u / -ü: zeytini sevmiyorum, çayı seviyorum.",
        "In a café: Ne istersiniz? — Bir çay, lütfen. Hesap lütfen! Afiyet olsun!",
      ],
      examples: [
        { ru: "Kahveyi çok seviyorum.", en: "I love coffee." },
        { ru: "Tom acıyı sevmiyor.", en: "Tom doesn't like spicy food." },
      ],
    },
  ],
  tasks: [
    choice("trma3-t1", "How do you say “I don't like olives”?", [
      ["Zeytini sevmiyorum.", true],
      ["Zeytin sevmiyorum değil.", false],
      ["Zeytini seviyorum.", false],
    ], { skill: "grammar" }),
    listen("trma3-t2", "Listen. What did they order?", "İki çay ve bir simit, lütfen.", [
      ["Two teas and one simit.", true],
      ["One tea and two simits.", false],
      ["Two coffees and one simit.", false],
    ]),
    match("trma3-t3", "Match the pairs.", [
      ["acı", "spicy"],
      ["lezzetli", "delicious"],
      ["zeytin", "olive"],
      ["ısmarlamak", "to treat (someone)"],
    ], { skill: "words" }),
    spell("trma3-t4", "Spell the word for “olive”.", "zeytin"),
    speak("trma3-t5", "Ne istersiniz?", "Bir çay ve bir peynirli börek, lütfen.", "One tea and one cheese börek, please.", { help: "Order breakfast aloud." }),
    choice("trma3-t6", "How do you say “It's hot by day and cool at night”?", [
      ["Gündüz sıcak, gece serin.", true],
      ["Gece sıcak, gündüz serin.", false],
      ["Gündüz soğuk, gece sıcak.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "menengic-kahvesi",
    itemName: "Tin of menengiç coffee",
    itemNameRu: "Menengiç kahvesi",
    ru: "Yaşasın! Menengiç kahvesi!",
    en: "Hooray! Menengiç coffee!",
    a11y: "A small patterned tin of ground wild pistachio seeds.",
    image: p("menengic-kahvesi"),
    steps: ["The waiter gives Murzik a tin of menengiç.", "“Kahve değil, ama kahve gibi!” — “It's not coffee, but it's like coffee!”", "Murzik sniffs it: it smells nutty.", "The tin goes on the shelf."],
    bridge: "After breakfast Can leads everyone up to the old town.",
  },
};

const mardin4: Lesson = {
  id: "tr-a1-mardin-4",
  level: "A1",
  cityId: "tr-mardin",
  number: 4,
  title: "Up to the old town",
  minutes: 7,
  goals: ["Review directions: up, down, left, right", "Review shopping: how much, expensive", "Haggle"],
  vocabNote: "Yukarı — “up, upstairs”, aşağı — “down”. Merdiven — “stairs, steps”. İndirim — “discount”.",
  vocab: [
    v("trma4-1", "Merdivenlerden yukarı çık.", "Go up the steps.", "A narrow stone stairway between honey-coloured houses.", "Listen to Merdivenlerden yukarı çık", p("l4-1")),
    v("trma4-2", "aşağı", "down", "Murzik looks down from a high stairway.", "Listen to aşağı", p("l4-2")),
    v("trma4-3", "dar sokak", "narrow street", "A street so narrow a donkey can barely squeeze through.", "Listen to dar sokak", p("l4-3")),
    v("trma4-4", "Bu sabun kaç lira?", "How much is this soap?", "A little shop piled high with green soap.", "Listen to Bu sabun kaç lira", p("l4-4")),
    v("trma4-5", "Biraz pahalı.", "It's a bit expensive.", "Murzik peers into his purse.", "Listen to Biraz pahalı", p("l4-5")),
    v("trma4-6", "Son fiyat ne?", "What's your best price?", "Murzik gives the shopkeeper a sly smile.", "Listen to Son fiyat ne", p("l4-6")),
    v("trma4-7", "Tamam, alıyorum!", "OK, I'll take it!", "Murzik holds out some coins.", "Listen to Tamam, alıyorum", p("l4-7")),
  ],
  dialogue: {
    title: "The soap shop",
    note: "Bıttım sabunu is soap made from wild pistachio oil; it's made in Mardin. Son fiyat — literally “last price”. Senin için — “for you”.",
    lines: [
      line("can", "Merdivenlerden yukarı çıkalım. Eski şehir yukarıda.", "Let's go up the steps. The old town is at the top."),
      line("murzik", "Ne kadar dar sokaklar! Bak, bir sabun dükkânı!", "What narrow streets! Look, a soap shop!"),
      line("murzik", "Bu sabun kaç lira?", "How much is this soap?"),
      line("seller", "Bu bıttım sabunu. Yüz lira.", "It's wild pistachio soap. A hundred lira."),
      line("murzik", "Biraz pahalı… Son fiyat ne?", "That's a bit expensive… What's your best price?"),
      line("seller", "Senin için seksen lira!", "For you, eighty lira!"),
      line("murzik", "Tamam, alıyorum!", "OK, I'll take it!"),
    ],
    gist: choice("trma4-d1", "How much did Murzik pay for the soap?", [
      ["Eighty lira.", true],
      ["A hundred lira.", false],
      ["Eighteen lira.", false],
    ]),
  },
  grammar: [
    {
      title: "Review: directions and shopping",
      paragraphs: [
        "Directions: düz git (go straight on), sağa dön (turn right), sola dön (turn left), yukarı çık (go up), aşağı in (go down).",
        "Shopping: Bu kaç lira? Pahalı / ucuz. İndirim var mı? Tamam, alıyorum!",
      ],
      examples: [
        { ru: "Aşağı in, sonra sola dön.", en: "Go down, then turn left." },
        { ru: "Bu çok ucuz, iki tane alıyorum.", en: "That's very cheap — I'll take two." },
      ],
    },
  ],
  tasks: [
    choice("trma4-t1", "How do you say “Go up”?", [
      ["Yukarı çık.", true],
      ["Aşağı in.", false],
      ["Yukarı in.", false],
    ], { skill: "grammar" }),
    listen("trma4-t2", "Listen. Which way?", "Aşağı in, sonra sağa dön.", [
      ["Down, then right.", true],
      ["Up, then left.", false],
      ["Straight on, then down.", false],
    ]),
    match("trma4-t3", "Match the pairs.", [
      ["yukarı", "up"],
      ["aşağı", "down"],
      ["merdiven", "stairs"],
      ["indirim", "discount"],
    ], { skill: "words" }),
    missing("trma4-t4", "Which letter is missing? (“down”)", "a", "ağı", "ş", ["ş", "s", "z"]),
    speak("trma4-t5", "Bu şal iki yüz lira.", "Biraz pahalı. İndirim var mı?", "That's a bit expensive. Is there a discount?", { help: "Haggle aloud." }),
    listen("trma4-t6", "Remember the last lesson. What does Can say?", "Bugün ben ısmarlıyorum!", [
      ["Today it's my treat!", true],
      ["I'm not eating today!", false],
      ["The bill, please!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sabun",
    itemName: "Mardin soap",
    itemNameRu: "Sabun",
    ru: "Yaşasın! Mardin sabunu!",
    en: "Hooray! Mardin soap!",
    a11y: "A bar of green soap with a pressed pattern, wrapped in paper and tied with thread.",
    image: p("sabun"),
    steps: ["The shopkeeper wraps the soap in paper.", "It smells of nuts and herbs.", "“Hediye için mi?” — “Is it a present?” “Hayır, benim için!” — “No, it's for me!”", "The soap goes by the washbasin."],
    bridge: "In the evening there's music in the streets: there's a festival in the old town!",
  },
};

const mardin5: Lesson = {
  id: "tr-a1-mardin-5",
  level: "A1",
  cityId: "tr-mardin",
  number: 5,
  title: "The festival",
  minutes: 7,
  goals: ["Review invitations: Gel! Hadi!", "Wish someone a happy holiday: İyi bayramlar!", "Review “let's…”: -elim"],
  vocabNote: "Şenlik — “festival, celebration”. Bayram — “holiday, feast day” (a big one everyone celebrates). İyi bayramlar — “happy holidays!”",
  vocab: [
    v("trma5-1", "Müzik çalıyor!", "There's music playing!", "A drum and a zurna pipe play in the square.", "Listen to Müzik çalıyor", p("l5-1")),
    v("trma5-2", "şenlik", "festival", "A square strung with little lanterns.", "Listen to şenlik", p("l5-2")),
    v("trma5-3", "Hadi, gel!", "Come on, come here!", "A girl from the line of dancers holds out her hand to Murzik.", "Listen to Hadi, gel", p("l5-3")),
    v("trma5-4", "Dans edelim!", "Let's dance!", "Murzik and Tom in the line of dancers.", "Listen to Dans edelim", p("l5-4")),
    v("trma5-5", "İyi bayramlar!", "Happy holidays!", "Neighbours swap sweets.", "Listen to İyi bayramlar", p("l5-5")),
    v("trma5-6", "Size de!", "And to you!", "An old neighbour bows in reply.", "Listen to Size de", p("l5-6")),
    v("trma5-7", "Ne kadar eğlenceli!", "What fun!", "Murzik spins round with his paws flung wide.", "Listen to Ne kadar eğlenceli", p("l5-7")),
  ],
  dialogue: {
    title: "The line dance",
    note: "Halay is a line dance where people hold hands or link little fingers. Kolay — “easy”. Adım — here, “a step”.",
    lines: [
      line("murzik", "Dinleyin! Müzik çalıyor!", "Listen! There's music playing!"),
      line("can", "Bu akşam bayram şenliği var. Hadi, gel!", "There's a holiday festival tonight. Come on, let's go!"),
      line("tom", "Bu ne dansı?", "What dance is this?"),
      line("can", "Halay! Çok kolay. Bir adım sağa, bir adım sola…", "The halay! It's very easy. One step right, one step left…"),
      line("murzik", "Dans edelim! Ne kadar eğlenceli!", "Let's dance! What fun!"),
      line("tom", "İyi bayramlar!", "Happy holidays!"),
      line("can", "Size de!", "And to you!"),
    ],
    gist: choice("trma5-d1", "What dance are they doing in the square?", [
      ["The halay.", true],
      ["The horon.", false],
      ["A waltz.", false],
    ]),
  },
  grammar: [
    {
      title: "Review: let's…",
      paragraphs: [
        "“Let's…” is -elim / -alım: dans edelim (let's dance), gidelim (let's go), yiyelim (let's eat), bakalım (let's see).",
        "As a suggestion: … -elim mi? / -alım mı? — Çay içelim mi? — Shall we have some tea?",
      ],
      examples: [
        { ru: "Hadi, şenliğe gidelim!", en: "Come on, let's go to the festival!" },
        { ru: "Biraz dinlenelim mi?", en: "Shall we have a little rest?" },
      ],
    },
  ],
  tasks: [
    choice("trma5-t1", "How do you say “Let's go!”?", [
      ["Gidelim!", true],
      ["Gittik!", false],
      ["Gidiyorlar!", false],
    ], { skill: "grammar" }),
    listen("trma5-t2", "Listen. What's being suggested?", "Çay içelim mi?", [
      ["Having some tea.", true],
      ["Dancing.", false],
      ["Going home.", false],
    ]),
    match("trma5-t3", "Match the pairs.", [
      ["şenlik", "festival"],
      ["İyi bayramlar!", "Happy holidays!"],
      ["Size de!", "And to you!"],
      ["eğlenceli", "fun"],
    ], { skill: "words" }),
    spell("trma5-t4", "Spell the word for “music”.", "müzik"),
    speak("trma5-t5", "İyi bayramlar!", "Size de! İyi bayramlar!", "And to you! Happy holidays!", { help: "Reply aloud to the holiday greeting." }),
    choice("trma5-t6", "How do you ask “Is there a discount?”", [
      ["İndirim var mı?", true],
      ["İndirim mi var değil?", false],
      ["İndirim nerede?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "telkari-kutu",
    itemName: "Silver filigree box",
    itemNameRu: "Telkari kutu",
    ru: "Yaşasın! Bir telkari kutu!",
    en: "Hooray! A filigree box!",
    a11y: "A tiny box made of fine silver wire woven like lace.",
    image: p("telkari-kutu"),
    steps: ["At the festival a craftsman shows off his silver lace — telkari.", "He gives Murzik a tiny box.", "“Küçük sırlar için.” — “For little secrets.”", "Murzik puts Grandma Asya's postcards inside."],
    bridge: "Late in the evening Murzik goes out onto the terrace. Someone is sitting there…",
  },
};

const mardin6: Lesson = {
  id: "tr-a1-mardin-6",
  level: "A1",
  cityId: "tr-mardin",
  number: 6,
  title: "The cat in the hat",
  minutes: 7,
  goals: ["Understand a short talk with a stranger", "Say “wait!”, “don't go!”", "Read a note"],
  vocabNote: "Benziyorsun — “you look like”. Yakında — “soon”. Görüşeceğiz — “we'll see each other”. Not — “note”.",
  vocab: [
    v("trma6-1", "Affedersiniz… Tanışıyor muyuz?", "Excuse me… Do we know each other?", "An old white cat in a hat sits on the terrace in the moonlight.", "Listen to Affedersiniz… Tanışıyor muyuz", p("l6-1")),
    v("trma6-2", "Asya'nın torunu musun?", "Are you Asya's grandson?", "The cat in the hat slowly turns his head.", "Listen to Asya'nın torunu musun", p("l6-2")),
    v("trma6-3", "Ona çok benziyorsun.", "You look very like her.", "The eyes of the cat in the hat glow warmly.", "Listen to Ona çok benziyorsun", p("l6-3")),
    v("trma6-4", "Yakında görüşeceğiz.", "We'll meet again soon.", "The cat in the hat stands up and raises his hat.", "Listen to Yakında görüşeceğiz", p("l6-4")),
    v("trma6-5", "Bekleyin! Gitmeyin!", "Wait! Don't go!", "Murzik reaches out a paw, but the terrace is already empty.", "Listen to Bekleyin! Gitmeyin", p("l6-5")),
    v("trma6-6", "Bir not bıraktı.", "He left a note.", "A folded sheet of paper lies on the divan.", "Listen to Bir not bıraktı", p("l6-6")),
    v("trma6-7", "Ben de onu arıyorum.", "I'm looking for her too.", "Close-up: the note in neat, old-fashioned handwriting.", "Listen to Ben de onu arıyorum", p("l6-7")),
  ],
  dialogue: {
    title: "The terrace at night",
    note: "Torun — “grandchild”. Nereden biliyorsunuz — “how do you know”. Kayboldu — “he's vanished”. Murzik uses the polite “you” (-siniz) with the old cat.",
    lines: [
      line("murzik", "Affedersiniz… Tanışıyor muyuz?", "Excuse me… Do we know each other?"),
      line("lev", "Asya'nın torunu musun?", "Are you Asya's grandson?"),
      line("murzik", "Evet! Nereden biliyorsunuz?", "Yes! How do you know?"),
      line("lev", "Ona çok benziyorsun… Yakında görüşeceğiz.", "You look so like her… We'll meet again soon."),
      line("murzik", "Bekleyin! Gitmeyin!", "Wait! Don't go!"),
      line("tom", "Murzik! Kim vardı burada?", "Murzik! Who was here?"),
      line("murzik", "Kayboldu! Ama bir not bıraktı…", "He's vanished! But he left a note…"),
    ],
    gist: choice("trma6-d1", "What did the cat in the hat say?", [
      ["That Murzik looks like Asya and they'll meet again soon.", true],
      ["That Asya lives in Mardin.", false],
      ["That he's Murzik's grandad.", false],
    ]),
  },
  grammar: [
    {
      title: "Polite requests: -in, -ın / -meyin",
      paragraphs: [
        "A polite or plural request ends in -in / -ın / -un / -ün: bekleyin (wait), gelin (come here), oturun (sit down), dinleyin (listen).",
        "“Don't…” is -meyin / -mayın: gitmeyin (don't go), korkmayın (don't be afraid), unutmayın (don't forget).",
      ],
      examples: [
        { ru: "Lütfen bekleyin!", en: "Please wait!" },
        { ru: "Korkmayın, ben arkadaşım.", en: "Don't be afraid, I'm a friend." },
      ],
    },
  ],
  tasks: [
    choice("trma6-t1", "How do you say “Don't go!” politely?", [
      ["Gitmeyin!", true],
      ["Gidin!", false],
      ["Gitmiyorum!", false],
    ], { skill: "grammar" }),
    listen("trma6-t2", "Listen. What does the cat in the hat say?", "Yakında görüşeceğiz.", [
      ["We'll meet again soon.", true],
      ["We haven't seen each other for ages.", false],
      ["We'll never meet again.", false],
    ]),
    match("trma6-t3", "Match the pairs.", [
      ["yakında", "soon"],
      ["benziyorsun", "you look like"],
      ["not", "note"],
      ["Bekleyin!", "Wait!"],
    ], { skill: "words" }),
    missing("trma6-t4", "Which letter is missing? (“grandchild”)", "tor", "n", "u", ["u", "ü", "o"]),
    speak("trma6-t5", "Kimsin sen?", "Ben Murzik. Asya'nın torunuyum.", "I'm Murzik. I'm Asya's grandson.", { help: "Introduce yourself aloud to the cat in the hat." }),
    listen("trma6-t6", "Remember the last lesson. What do people say at the festival?", "İyi bayramlar!", [
      ["Happy holidays!", true],
      ["Have a good trip!", false],
      ["Enjoy your meal!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sedir",
    itemName: "Divan with cushions",
    itemNameRu: "Sedir",
    ru: "Yaşasın! Bir sedir!",
    en: "Hooray! A divan!",
    a11y: "A low divan by the window, covered with a rug and embroidered cushions. A single white hair lies on it.",
    image: p("sedir"),
    steps: ["Murzik and Tom carry the divan in from the terrace.", "A single white hair still lies on it.", "Murzik sits where the cat in the hat sat.", "And gazes at the stars for a long time."],
    bridge: "Tomorrow is the A1 exam. Murzik tucks the note under his pillow.",
  },
};

const mardin7: Lesson = {
  id: "tr-a1-mardin-7",
  level: "A1",
  cityId: "tr-mardin",
  number: 7,
  title: "The A1 exam",
  minutes: 9,
  goals: ["Pass the A1 exam", "Understand the note from the cat in the hat", "Celebrate the end of the level"],
  vocabNote: "Sınav — “exam”. Tebrikler — “congratulations”. Gurur duymak — “to be proud”. Başardın — “you did it”. Seviye — “level”.",
  vocab: [
    v("trma7-1", "A1 sınavı", "the A1 exam", "Murzik at a desk with a pencil; on the paper, in big letters: A1.", "Listen to A1 sınavı", p("l7-1")),
    v("trma7-2", "Seninle gurur duyuyoruz!", "We're proud of you!", "Tom and Can applaud.", "Listen to Seninle gurur duyuyoruz", p("l7-2")),
    v("trma7-3", "Başardın!", "You did it!", "Murzik holds his paper with a top mark high above his head.", "Listen to Başardın", p("l7-3")),
    v("trma7-4", "A1 seviyesi bitti.", "Level A1 is finished.", "A map of Turkey with every city marked by a paw print.", "Listen to A1 seviyesi bitti", p("l7-4")),
    v("trma7-5", "Notta ne yazıyor?", "What does the note say?", "Murzik unfolds the note.", "Listen to Notta ne yazıyor", p("l7-5")),
    v("trma7-6", "Safranbolu", "Safranbolu (a town)", "An old town of white wooden houses in a green valley.", "Listen to Safranbolu", p("l7-6")),
    v("trma7-7", "Yeni bir yolculuk başlıyor!", "A new journey is beginning!", "Murzik with his suitcase on the doorstep, the road ahead.", "Listen to Yeni bir yolculuk başlıyor", p("l7-7")),
  ],
  dialogue: {
    title: "The note",
    note: "Altında — “underneath, below it”. L. is the first letter of the cat in the hat's name. Sıradaki — “the next”.",
    lines: [
      line("tom", "Tebrikler, Murzik! Sınavı geçtin! Başardın! Seninle gurur duyuyoruz!", "Congratulations, Murzik! You passed the exam! You did it! We're proud of you!"),
      line("can", "A1 seviyesi bitti! Şimdi ne yapacaksın?", "Level A1 is finished! What are you going to do now?"),
      line("murzik", "Bakın, notu okuyorum: «Ben de onu arıyorum. — L.»", "Look, I'm reading the note: “I'm looking for her too. — L.”"),
      line("tom", "Altında bir şey daha var…", "There's something else underneath…"),
      line("murzik", "«Safranbolu.» Sıradaki şehrimiz!", "“Safranbolu.” Our next city!"),
      line("tom", "Yeni bir yolculuk başlıyor!", "A new journey is beginning!"),
    ],
    gist: choice("trma7-d1", "Which town is written on the note?", [
      ["Safranbolu.", true],
      ["Istanbul.", false],
      ["Paris.", false],
    ]),
  },
  grammar: [
    {
      title: "All of A1 at a glance",
      paragraphs: [
        "Present: geliyorum (I'm coming). Past: geldim (I came). Future: geleceğim (I'll come). “Let's”: gelelim. Request: gel / gelin. Negative: gelmiyorum, gelmedim.",
        "Place endings: -de (where), -e (where to), -den (where from). There is / there isn't: var / yok. Questions: mı, mi, mu, mü.",
      ],
      examples: [
        { ru: "İki gün önce Mardin'e geldik, yarın Safranbolu'ya gideceğiz.", en: "We came to Mardin two days ago; tomorrow we're going to Safranbolu." },
        { ru: "Türkçe öğreniyorum ve çok seviyorum!", en: "I'm learning Turkish and I love it!" },
      ],
    },
  ],
  tasks: [
    listen("trma7-t1", "Audio exam. What is Murzik talking about?", "Önce Paris'teydim. Sonra Türkiye'ye geldim. Türkiye'de on dört şehir gördüm. Büyükannemi henüz bulmadım, ama yakında bulacağım!", [
      ["He was in Paris, has seen fourteen Turkish cities and will find his grandma soon.", true],
      ["He lives in Mardin and doesn't want to go anywhere.", false],
      ["He found his grandma in Paris.", false],
    ]),
    choice("trma7-t2", "Exam. How do you say “Tomorrow we're going to Safranbolu”?", [
      ["Yarın Safranbolu'ya gideceğiz.", true],
      ["Yarın Safranbolu'da gittik.", false],
      ["Dün Safranbolu'ya gideceğiz.", false],
    ], { skill: "grammar" }),
    match("trma7-t3", "Exam. Match the pairs.", [
      ["geldim", "I came"],
      ["geliyorum", "I'm coming"],
      ["geleceğim", "I'll come"],
      ["gelmedim", "I didn't come"],
    ], { skill: "words" }),
    spell("trma7-t4", "Exam. Spell the word for “exam”.", "sınav"),
    speak("trma7-t5", "Türkçe öğreniyor musun?", "Evet, Türkçe öğreniyorum. A1 seviyesi bitti!", "Yes, I'm learning Turkish. I've finished level A1!", { help: "Say aloud that you've finished level A1." }),
    script("trma7-t6", "The A1 exam. Remember the whole journey and finish the conversations.", [
      { speaker: "Ayşe Teyze", text: "Merhaba! Nasılsın?" },
      { speaker: "You", answer: "İyiyim, teşekkürler. Siz nasılsınız?", options: ["İyiyim, teşekkürler. Siz nasılsınız?", "Hoşça kal!", "Afiyet olsun!"] },
      { speaker: "Waiter", text: "Ne istersiniz?" },
      { speaker: "You", answer: "Bir çay, lütfen.", options: ["Bir çay, lütfen.", "Bir çaylar, lütfen.", "Çay yok."] },
      { speaker: "Passer-by", text: "Nereye gidiyorsun?" },
      { speaker: "You", answer: "Müzeye gidiyorum.", options: ["Müzeye gidiyorum.", "Müzede gidiyorum.", "Müzeden gidiyorum."] },
      { speaker: "Elif", text: "Dün ne yaptın?" },
      { speaker: "You", answer: "Çarşıya gittim.", options: ["Çarşıya gittim.", "Çarşıya gideceğim.", "Çarşı gitti."] },
      { speaker: "Can", text: "Yarın ne yapacaksın?" },
      { speaker: "You", answer: "Yarın Safranbolu'ya gideceğim.", options: ["Yarın Safranbolu'ya gideceğim.", "Dün Safranbolu'ya gittim.", "Safranbolu yok."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fener",
    itemName: "Copper lantern",
    itemNameRu: "Fener",
    ru: "Yaşasın! Bir fener!",
    en: "Hooray! A lantern!",
    a11y: "A hand-made copper lantern with coloured glass panes. A candle burns inside, throwing coloured patterns on the walls.",
    image: p("fener"),
    steps: ["Can hands over a copper lantern with coloured glass.", "“Yolunu aydınlatsın!” — “May it light your way!”", "Murzik lights the candle, and coloured patterns dance across the walls.", "The lantern is Mardin's most special thing."],
    bridge: "Level A1 complete! Next: Safranbolu and level A2.",
  },
};

const story: CityStory = {
  home: {
    name: "A stone house with a terrace",
    nameRu: "Taş ev",
    image: p("home"),
    a11y: "An empty room in a honey-coloured stone house: arches, a high ceiling and a door onto the terrace. Beyond the terrace, an endless plain. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "fener",
  welcomeRu: "Merhaba, Mardin!",
  welcomeEn: "Hello, Mardin!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom in front of Mardin: honey-coloured stone houses climb the mountainside in steps, with an endless plain below.",
  departureImage: p("departure"),
  departureA11y: "Can, with his camera, waves goodbye at Mardin bus station.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "Murzik stands in his Mardin room: the divan with cushions, the spyglass by the window, the cat mug, the silver box. In his paws is the copper lantern with coloured glass.",
      lines: [
        { en: "The stone house stays warm even at night." },
        { en: "Murzik takes his favourite thing with him: the copper lantern." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Murzik and Tom on the terrace at sunset, arms raised high. Behind them, a long road with fourteen little paw-print marks.",
      lines: [
        { ru: "Mardin tamamlandı!", en: "Mardin complete!" },
        { en: "7 / 7 lessons" },
        { ru: "A1 seviyesi tamamlandı! On dört şehir!", en: "Level A1 complete! Fourteen cities!" },
      ],
    },
    {
      image: p("suitcase"),
      a11y: "Murzik's open suitcase: a copper coffee pot, tulip tea glasses, a silk scarf, a clock, a cotton towel, an evil-eye bead, a little saz, a mosaic lamp, a clay jug, a white blanket, a double teapot, a breakfast plate, a copper tray and the copper lantern. In the silver box are Grandma Asya's postcards and a note signed “L.”.",
      lines: [
        { en: "Fourteen cities. Fourteen favourite things. Grandma Asya's postcards. And a note from the cat in the hat." },
        { ru: "Ben de onu arıyorum.", en: "I'm looking for her too." },
        { en: "Murzik shuts his suitcase. “Safranbolu,” he says. “Let's go.”" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Can waves goodbye.",
      lines: [
        { ru: "Hoşça kal, Mardin! Hoşça kal, Can!", en: "Goodbye, Mardin! Bye, Can!" },
        { ru: "Sıradaki durak: Safranbolu!", en: "Next stop: Safranbolu!" },
      ],
    },
    {
      image: p("flight"),
      a11y: "A plane flies north-west right across Turkey.",
      lines: [{ ru: "Mardin → Safranbolu", en: "Mardin → Safranbolu" }],
    },
    {
      image: pic("tr/safranbolu/arrival"),
      a11y: "Murzik and Tom in Safranbolu: white wooden houses with dark beams in a green valley, and cobbled streets.",
      lines: [
        { ru: "Merhaba, Safranbolu!", en: "Hello, Safranbolu!" },
        { ru: "A2 başlıyor!", en: "A2 begins!" },
      ],
    },
  ],
};

export const trMardinEn = {
  id: "tr-mardin",
  name: "Mardin",
  nameTr: "Mardin",
  lessons: [mardin1, mardin2, mardin3, mardin4, mardin5, mardin6, mardin7],
  story,
};
