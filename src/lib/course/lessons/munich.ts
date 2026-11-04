import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Munich · «Праздник и подарки» · A2 lessons 1–7.
 * Murzik and Tom stay in a wooden attic room in Greta's small guesthouse. Greta (about 55) was born in
 * Kazakhstan to a Russian-German family and moved to Munich as a girl, so Russian is her second home
 * language. The autumn festival is on: tents, music, gingerbread hearts. Otto (about 85) plays the
 * accordion; thirty years ago he played next to a stall where a ginger cat drew on gingerbread hearts.
 * She wanted to see the ocean and left for Porto.
 * Grammar: the dative — кому (маме, Тому, тебе, вам), поздравляю + желаю кому, к кому, мне холодно,
 * мне нравится / нужно / можно, помочь / подарить / позвонить кому.
 */

const p = (name: string) => pic(`munich/${name}`);

export const munich1: Lesson = {
  id: "a2-munich-1",
  level: "A2",
  cityId: "munich",
  number: 1,
  title: "Congratulations!",
  minutes: 8,
  goals: ["Congratulate someone", "Wish someone well: желаю тебе…", "Use the “to” form, the dative: тебе, вам, Грете"],
  vocabNote: "Поздравляю! — Congratulations! After желаю (I wish) you say who in the dative and what in the genitive: желаю тебе счастья.",
  vocab: [
    v("mu1-1", "именинница", "birthday girl", "Greta in a paper crown next to her birthday cake.", "Listen to именинница", p("1-1")),
    v("mu1-2", "С праздником!", "Happy holiday! (to any celebration)", "Colourful flags and a sign: «Праздник!»", "Listen to С праздником", p("1-2")),
    v("mu1-3", "Желаю тебе счастья!", "I wish you happiness!", "Tom raises a glass of juice, smiling.", "Listen to Желаю тебе счастья", p("1-3")),
    v("mu1-4", "здоровья", "(I wish you) health", "A bright red apple and a little heart.", "Listen to здоровья", p("1-4")),
    v("mu1-5", "открытка", "greeting card", "A handmade card with a painted cake.", "Listen to открытка", p("1-5")),
    v("mu1-6", "Сколько вам исполнилось?", "How old are you now? (on a birthday)", "A cake with many candles; Greta laughs.", "Listen to Сколько вам исполнилось", p("1-6")),
    v("mu1-7", "Мне исполнилось пятьдесят пять.", "I've turned fifty-five.", "Greta points proudly at the candles: 5 and 5.", "Listen to Мне исполнилось пятьдесят пять", p("1-7")),
    v("mu1-8", "задуть свечи", "to blow out the candles", "Greta blows; the candles go out.", "Listen to задуть свечи", p("1-8")),
  ],
  letters: [
    letter("здоровья", "з-д-о: start with з and slide straight into д: zda-RO-vya.", "Желаю вам здоровья!", "I wish you good health!"),
    letter("поздравляю", "Stress on ЛЯ: pa-zdra-VLYA-yu. The unstressed о sounds like а.", "Поздравляю!", "Congratulations!"),
  ],
  dialogue: {
    title: "Greta's birthday",
    note: "Greta grew up in Kazakhstan in a Russian-German family; she speaks Russian and German.",
    lines: [
      line("murzik", "Где наша именинница?", "Where's our birthday girl?"),
      line("tom", "Грета, поздравляю! С днём рождения!", "Greta, congratulations! Happy birthday!"),
      line("murzik", "Это вам открытка. Я сам нарисовал!", "This card is for you. I drew it myself!"),
      line("greta", "Какая красивая! Спасибо, Мурзик!", "How beautiful! Thank you, Murzik!"),
      line("tom", "Желаю вам счастья и здоровья!", "I wish you happiness and good health!"),
      line("murzik", "А сколько вам исполнилось?", "And how old are you now?"),
      line("greta", "Мне исполнилось пятьдесят пять. Ну, задуваю свечи!", "I've turned fifty-five. Well, I'm blowing out the candles!"),
    ],
    gist: choice("mu1-d1", "What does Murzik give Greta?", [
      ["A card he drew himself.", true],
      ["A cake with candles.", false],
      ["A bunch of flowers.", false],
    ]),
  },
  grammar: [
    {
      title: "The dative: to whom?",
      paragraphs: [
        "Кому? — to whom? Pronouns: я → мне, ты → тебе, он → ему, она → ей, мы → нам, вы → вам, они → им.",
        "Names and nouns: Том → Тому, Грета → Грете, мама → маме, брат → брату. Желаю тебе / вам + genitive: счастья, здоровья, удачи.",
      ],
      examples: [
        { ru: "Желаю вам удачи!", en: "I wish you good luck!" },
        { ru: "Это открытка маме.", en: "This is a card for Mum." },
      ],
    },
  ],
  tasks: [
    listen("mu1-t1", "Listen. How old is Greta now?", "Мне исполнилось пятьдесят пять.", [
      ["Fifty-five.", true],
      ["Forty-five.", false],
      ["Twenty-five.", false],
    ]),
    choice("mu1-t2", "“I wish you (polite) happiness!” Which is right?", [
      ["Желаю вам счастья!", true],
      ["Желаю вы счастье!", false],
      ["Желаю вас счастью!", false],
    ], { skill: "grammar" }),
    fill("mu1-t3", "Choose the right form: “This card is for Tom.”", "Это открытка", ".", "Тому", ["Тому", "Том", "Томом"], { skill: "grammar" }),
    read("mu1-t4", "Read the card. What does Tom wish Greta?", "Дорогая Грета!\nПоздравляю с днём рождения!\nЖелаю здоровья, счастья и много гостей!\nТом", [
      ["Health, happiness and lots of guests.", true],
      ["A good trip to Kazakhstan.", false],
      ["A new house.", false],
    ]),
    match("mu1-t5", "Match the Russian with the English.", [
      ["именинница", "birthday girl"],
      ["открытка", "greeting card"],
      ["задуть свечи", "to blow out the candles"],
      ["С праздником!", "Happy holiday!"],
    ], { skill: "words" }),
    script("mu1-t6", "It's your friend's birthday.", [
      { speaker: "Friend", text: "Привет! У меня сегодня день рождения!" },
      { speaker: "You", answer: "Поздравляю! Желаю тебе счастья!", options: ["Поздравляю! Желаю тебе счастья!", "Желаю ты счастье!", "Задуть свечи!"] },
      { speaker: "Friend", text: "Спасибо!" },
      { speaker: "You", answer: "А сколько тебе исполнилось?", options: ["А сколько тебе исполнилось?", "А сколько ты исполнилось?", "А открытка тебе?"] },
    ], { skill: "speaking" }),
    speak("mu1-t7", "У меня сегодня день рождения!", "Поздравляю! Желаю тебе здоровья и счастья!", "Congratulations! I wish you health and happiness!", {
      help: "Congratulate your friend out loud.",
    }),
  ],
  reward: {
    itemId: "birthdaycandles",
    itemName: "Birthday candle holder",
    itemNameRu: "Подсвечник",
    ru: "Свечи — как на торте у Греты!",
    en: "Candles — like on Greta's cake!",
    a11y: "A small carved wooden candle holder with five little candles stands on the windowsill of a wooden attic room.",
    image: p("reward-1"),
    steps: ["Murzik and Tom's room is in Greta's small guesthouse, under a wooden roof.", "After the party Greta gives them a little wooden candle holder.", "“In my family we light candles for every birthday.”", "Now five little candles stand on their windowsill."],
    bridge: "The autumn festival opens on Saturday. Greta's grandson has a birthday too — and Murzik has no idea what to give him.",
  },
};

export const munich2: Lesson = {
  id: "a2-munich-2",
  level: "A2",
  cityId: "munich",
  number: 2,
  title: "What Shall I Give Him?",
  minutes: 8,
  goals: ["Choose a present", "Say what someone likes: ему нравится", "Ask for advice: Что ему подарить?"],
  vocabNote: "Подарить кому что — to give someone something as a present. Нравится works backwards: Ему нравится футбол — literally “football is pleasing to him”.",
  vocab: [
    v("mu2-1", "Посоветуйте, что подарить.", "Can you suggest a present?", "Murzik stares at a shop window full of gifts, thinking hard.", "Listen to Посоветуйте, что подарить", p("2-1")),
    v("mu2-2", "внук", "grandson", "A tall teenage boy with headphones next to Greta.", "Listen to внук", p("2-2")),
    v("mu2-3", "Ему нравится футбол.", "He likes football.", "A football and a team scarf.", "Listen to Ему нравится футбол", p("2-3")),
    v("mu2-4", "Ей нравятся цветы.", "She likes flowers.", "Greta smelling a pot of red flowers.", "Listen to Ей нравятся цветы", p("2-4")),
    v("mu2-5", "Подари ему книгу.", "Give him a book.", "Greta hands Murzik a book with a ball on the cover.", "Listen to Подари ему книгу", p("2-5")),
    v("mu2-6", "Ему уже не десять лет!", "He's not ten any more!", "The grandson rolls his eyes at a toy car.", "Listen to Ему уже не десять лет", p("2-6")),
    v("mu2-7", "завернуть подарок", "to wrap a present", "Murzik wraps a box in blue paper — tape everywhere.", "Listen to завернуть подарок", p("2-7")),
    v("mu2-8", "подарочная бумага", "wrapping paper", "A roll of shiny paper with stars.", "Listen to подарочная бумага", p("2-8")),
  ],
  letters: [
    letter("нравится / нравятся", "One thing — нравится (NRA-vit-sa), several — нравятся (NRA-vyat-sa). -тся is said tsa.", "Ей нравятся цветы.", "She likes flowers."),
  ],
  dialogue: {
    title: "In the shop",
    note: "Отличная идея! — Great idea! Ему будет шестнадцать — he'll be sixteen.",
    lines: [
      line("murzik", "Грета, у вашего внука скоро день рождения, да? Посоветуйте, что подарить.", "Greta, your grandson has a birthday soon, right? Can you suggest a present?"),
      line("greta", "Максу будет шестнадцать. Ему нравится футбол.", "Max will be sixteen. He likes football."),
      line("murzik", "Может, машинку?", "Maybe a toy car?"),
      line("greta", "Мурзик, ему уже не десять лет! Подари ему книгу про футбол.", "Murzik, he's not ten any more! Give him a book about football."),
      line("tom", "Отличная идея! А что подарить вам? Вам нравятся цветы?", "Great idea! And what shall we give you? Do you like flowers?"),
      line("greta", "Очень! Но мне уже подарили открытку. Это лучший подарок.", "Very much! But I've already been given a card. That's the best present."),
    ],
    gist: choice("mu2-d1", "What will Murzik give Max?", [
      ["A book about football.", true],
      ["A toy car.", false],
      ["Flowers.", false],
    ]),
  },
  grammar: [
    {
      title: "Нравится + the dative",
      paragraphs: [
        "The person who likes is in the dative; the thing is the subject: Мне нравится этот город. Тому нравятся пряники.",
        "One thing → нравится, several → нравятся. Подарить, дать, показать, купить also take кому: Я подарю маме цветы.",
      ],
      examples: [
        { ru: "Брату нравится музыка.", en: "My brother likes music." },
        { ru: "Я куплю сестре шарф.", en: "I'll buy my sister a scarf." },
      ],
    },
  ],
  tasks: [
    listen("mu2-t1", "Listen. What does Max like?", "Максу будет шестнадцать. Ему нравится футбол.", [
      ["Football.", true],
      ["Flowers.", false],
      ["Toy cars.", false],
    ]),
    choice("mu2-t2", "“She likes flowers.” Which is right?", [
      ["Ей нравятся цветы.", true],
      ["Она нравится цветы.", false],
      ["Ей нравится цветы.", false],
    ], { skill: "grammar" }),
    fill("mu2-t3", "Choose the right form: “My brother likes music.”", "", "нравится музыка.", "Брату", ["Брату", "Брат", "Брата"], { skill: "grammar" }),
    read("mu2-t4", "Read Greta's note. What should Murzik NOT buy?", "Мурзик!\nМаксу нравятся книги и футбол.\nНе покупай ему игрушки — ему уже не десять лет!\nГрета", [
      ["Toys.", true],
      ["Books.", false],
      ["Something about football.", false],
    ]),
    match("mu2-t5", "Match the Russian with the English.", [
      ["внук", "grandson"],
      ["завернуть подарок", "to wrap a present"],
      ["подарочная бумага", "wrapping paper"],
      ["Посоветуйте, что подарить.", "Can you suggest a present?"],
    ], { skill: "words" }),
    tf("mu2-t6", "Ему нравится футбол means “He likes football”.", true, "True or false?", { skill: "grammar" }),
    speak("mu2-t7", "Что тебе нравится?", "Мне нравится музыка, а моему другу нравятся книги.", "I like music, and my friend likes books.", {
      help: "Say out loud what you and a friend like.",
    }),
  ],
  reward: {
    itemId: "giftpaper",
    itemName: "Wrapping paper",
    itemNameRu: "Подарочная бумага",
    ru: "Звёзды! Целый рулон!",
    en: "Stars! A whole roll!",
    a11y: "A roll of shiny blue wrapping paper with gold stars leans against the wall, a ball of red ribbon beside it.",
    image: p("reward-2"),
    steps: ["Murzik wraps Max's book — with a lot of tape.", "Greta laughs and gives him the rest of the roll.", "“You'll need it. A traveller always has presents to give.”", "The roll of stars stands in the corner of the attic."],
    bridge: "Max loves the book! He invites everyone to the festival on Saturday: “Приходите к нам в шатёр!”",
  },
};

export const munich3: Lesson = {
  id: "a2-munich-3",
  level: "A2",
  cityId: "munich",
  number: 3,
  title: "You're Invited!",
  minutes: 8,
  goals: ["Invite someone and accept", "Say where you're going: к другу, к нам", "Say when: к семи часам"],
  vocabNote: "К + the dative — to someone's place: к другу (to a friend's), к нам (to our place). К семи часам — by seven o'clock.",
  vocab: [
    v("mu3-1", "Приходи к нам!", "Come over to our place!", "Max waves from the entrance of a big festival tent.", "Listen to Приходи к нам", p("3-1")),
    v("mu3-2", "пригласить", "to invite", "An invitation card with a picture of a tent.", "Listen to пригласить", p("3-2")),
    v("mu3-3", "шатёр", "big tent, marquee", "A huge white and blue festival tent with flags.", "Listen to шатёр", p("3-3")),
    v("mu3-4", "к семи часам", "by seven o'clock", "A clock showing seven, people walking to the tent.", "Listen to к семи часам", p("3-4")),
    v("mu3-5", "Я приду к тебе.", "I'll come to your place.", "Murzik knocks on a door with a smile.", "Listen to Я приду к тебе", p("3-5")),
    v("mu3-6", "С удовольствием!", "With pleasure!", "Tom puts his hand on his heart and bows.", "Listen to С удовольствием", p("3-6")),
    v("mu3-7", "Что принести?", "What shall I bring?", "Murzik holds a basket, ready to fill it.", "Listen to Что принести", p("3-7")),
    v("mu3-8", "Ничего не надо!", "You don't need to bring anything!", "Greta waves both hands: no, no!", "Listen to Ничего не надо", p("3-8")),
  ],
  letters: [
    letter("шатёр", "ё is always stressed: sha-TYOR. In other forms ё becomes е, and the stress stays at the end: в шатре (fsha-TRYE).", "в шатре", "in the tent"),
    letter("удовольствием", "A long word: u-da-VOL'-stvi-yem. The stress is on ВОЛЬ.", "С удовольствием!", "With pleasure!"),
  ],
  dialogue: {
    title: "The invitation",
    note: "Max speaks Russian with his grandmother at home, so he's happy to practise.",
    lines: [
      line("max", "Мурзик, Том, я вас приглашаю на праздник! Приходите к нам в шатёр.", "Murzik, Tom, I'm inviting you to the festival! Come and join us in the tent."),
      line("tom", "С удовольствием! Когда?", "With pleasure! When?"),
      line("max", "В субботу, к семи часам. Будет музыка!", "On Saturday, by seven o'clock. There'll be music!"),
      line("murzik", "А что принести?", "And what shall we bring?"),
      line("max", "Ничего не надо! Только хорошее настроение.", "You don't need to bring anything! Just a good mood."),
      line("murzik", "Хорошо. Мы придём к вам к семи!", "OK. We'll come to you by seven!"),
    ],
    gist: choice("mu3-d1", "When should they come to the tent?", [
      ["On Saturday by seven.", true],
      ["On Sunday at noon.", false],
      ["Right now.", false],
    ]),
  },
  grammar: [
    {
      title: "К + the dative",
      paragraphs: [
        "К (to) + a person in the dative means to their place: к другу, к маме, к Грете, ко мне, к нам.",
        "With time it means by: к семи часам (by seven), к вечеру (by the evening). Compare: в шатёр (into the tent) — к Максу (to Max).",
      ],
      examples: [
        { ru: "Завтра я иду к врачу.", en: "Tomorrow I'm going to the doctor's." },
        { ru: "Приходите ко мне в гости!", en: "Come and visit me!" },
      ],
    },
  ],
  tasks: [
    listen("mu3-t1", "Listen. What should they bring?", "Ничего не надо! Только хорошее настроение.", [
      ["Nothing, just a good mood.", true],
      ["A cake.", false],
      ["Flowers for Greta.", false],
    ]),
    choice("mu3-t2", "“I'm going to my friend's.” Which is right?", [
      ["Я иду к другу.", true],
      ["Я иду к друг.", false],
      ["Я иду в друга.", false],
    ], { skill: "grammar" }),
    fill("mu3-t3", "Choose the right form: “Come and visit me!”", "Приходи ко", "в гости!", "мне", ["мне", "меня", "я"], { skill: "grammar" }),
    read("mu3-t4", "Read the invitation. Where is the party?", "Приглашение\nДорогие Мурзик и Том!\nПриходите к нам в шатёр «Голубой» в субботу к 19:00.\nМакс", [
      ["In the “Blue” tent.", true],
      ["At Greta's guesthouse.", false],
      ["At Max's school.", false],
    ]),
    script("mu3-t5", "A friend invites you.", [
      { speaker: "Friend", text: "Приходи ко мне в субботу!" },
      { speaker: "You", answer: "С удовольствием! Что принести?", options: ["С удовольствием! Что принести?", "Ничего не надо!", "К семи часам!"] },
      { speaker: "Friend", text: "Ничего не надо!" },
      { speaker: "You", answer: "Хорошо. Я приду к тебе к семи.", options: ["Хорошо. Я приду к тебе к семи.", "Хорошо. Я приду к ты к семи.", "Хорошо. Пригласить."] },
    ], { skill: "speaking" }),
    match("mu3-t6", "Match the Russian with the English.", [
      ["шатёр", "big tent"],
      ["пригласить", "to invite"],
      ["С удовольствием!", "With pleasure!"],
      ["Что принести?", "What shall I bring?"],
    ], { skill: "words" }),
    speak("mu3-t7", "Что ты делаешь в субботу?", "В субботу я иду к другу. Приходи к нам!", "On Saturday I'm going to my friend's. Come and join us!", {
      help: "Say out loud where you're going and invite someone.",
    }),
  ],
  reward: {
    itemId: "slippers",
    itemName: "Felt slippers",
    itemNameRu: "Тапочки",
    ru: "Тёплые тапочки для гостей!",
    en: "Warm slippers for guests!",
    a11y: "Two pairs of grey felt slippers with red hearts stand by the door of the wooden attic room.",
    image: p("reward-3"),
    steps: ["In Greta's house, guests always take off their shoes.", "She gives Murzik and Tom felt slippers with red hearts.", "“Ко мне — только в тапочках!” she laughs.", "Now they stand by the door of the attic."],
    bridge: "Saturday comes — and so does the cold. The festival is outside, and Murzik's paws are freezing.",
  },
};

export const munich4: Lesson = {
  id: "a2-munich-4",
  level: "A2",
  cityId: "munich",
  number: 4,
  title: "I'm Cold!",
  minutes: 8,
  goals: ["Say how you feel: мне холодно, мне скучно", "Say what you need or may do: мне нужно, можно, нельзя", "Ask: Тебе не холодно?"],
  vocabNote: "Russian says how you feel with the dative: мне холодно — literally “to me it's cold”.",
  vocab: [
    v("mu4-1", "Я замёрз(ла).", "I'm frozen.", "Murzik shivers, his breath making little clouds.", "Listen to Я замёрз(ла)", p("4-1")),
    v("mu4-2", "Тебе не холодно?", "Aren't you cold?", "Greta looks at Tom in his thin jacket.", "Listen to Тебе не холодно", p("4-2")),
    v("mu4-3", "Мне жарко.", "I'm hot.", "Tom inside the tent, red-faced, fanning himself.", "Listen to Мне жарко", p("4-3")),
    v("mu4-4", "Мне душно.", "It's stuffy (I need air).", "Inside the crowded tent Tom pulls at his collar.", "Listen to Мне душно", p("4-4")),
    v("mu4-5", "Мне нужно согреться.", "I need to warm up.", "Murzik holds a hot cup of tea with both paws.", "Listen to Мне нужно согреться", p("4-5")),
    v("mu4-6", "Тебе можно.", "You may. You're allowed.", "A guard at the carousel nods: yes.", "Listen to Тебе можно", p("4-6")),
    v("mu4-7", "Ему нельзя.", "He's not allowed.", "A sign at the roller coaster: a small cat crossed out.", "Listen to Ему нельзя", p("4-7")),
    v("mu4-8", "рост", "height", "A height bar at a ride: 120 cm.", "Listen to рост", p("4-8")),
  ],
  letters: [
    letter("холодно", "Only the first о is said as о: HO-lad-na.", "Мне холодно.", "I'm cold."),
    letter("-ться", "-ться sounds like tsa, just like -тся: sa-GRET-sa.", "согреться", "to warm up"),
  ],
  dialogue: {
    title: "Outside the tent",
    note: "Murzik is small — the big roller coaster has a height limit.",
    lines: [
      line("greta", "Мурзик, тебе не холодно?", "Murzik, aren't you cold?"),
      line("murzik", "Я замёрз! Мне нужно согреться.", "I'm frozen! I need to warm up."),
      line("greta", "Вот горячий чай. А в шатре жарко и душно!", "Here's some hot tea. And in the tent it's hot and stuffy!"),
      line("max", "Мне скучно. Пойдём на американские горки!", "I'm bored. Let's go on the roller coaster!"),
      line("tom", "Тебе можно, тебе шестнадцать. А Мурзику?", "You're allowed, you're sixteen. And Murzik?"),
      line("max", "Ему нельзя. Нужен рост сто двадцать сантиметров.", "He's not allowed. You need to be a hundred and twenty centimetres tall."),
      line("murzik", "Ну и ладно. Мне и на карусели весело!", "Never mind. I have fun on the carousel anyway!"),
    ],
    gist: choice("mu4-d1", "Why can't Murzik go on the roller coaster?", [
      ["He's too small.", true],
      ["He's too cold.", false],
      ["He's bored.", false],
    ]),
  },
  grammar: [
    {
      title: "Мне холодно, мне нужно, мне можно",
      paragraphs: [
        "Feelings and states: dative + an -о word: мне холодно, тебе жарко, ему скучно, нам весело.",
        "Need, may, mustn't: dative + нужно / можно / нельзя + infinitive: Мне нужно идти. Тебе можно. Ему нельзя кататься.",
      ],
      examples: [
        { ru: "Маме нужно отдохнуть.", en: "Mum needs to rest." },
        { ru: "Детям нельзя пить кофе.", en: "Children aren't allowed coffee." },
      ],
    },
  ],
  tasks: [
    listen("mu4-t1", "Listen. What does Murzik need?", "Я замёрз! Мне нужно согреться.", [
      ["To warm up.", true],
      ["To go home.", false],
      ["To eat something.", false],
    ]),
    choice("mu4-t2", "“I'm bored.” Which is right?", [
      ["Мне скучно.", true],
      ["Я скучно.", false],
      ["Меня скучно.", false],
    ], { skill: "grammar" }),
    fill("mu4-t3", "Choose the right form: “Mum needs to rest.”", "", "нужно отдохнуть.", "Маме", ["Маме", "Мама", "Маму"], { skill: "grammar" }),
    read("mu4-t4", "Read the sign at the ride. Who can't ride?", "АМЕРИКАНСКИЕ ГОРКИ\nРост — от 120 см.\nДетям до 8 лет — только со взрослыми.", [
      ["Anyone shorter than 120 cm.", true],
      ["Anyone over 8.", false],
      ["Adults.", false],
    ]),
    match("mu4-t5", "Match the Russian with the English.", [
      ["Мне холодно.", "I'm cold."],
      ["Мне жарко.", "I'm hot."],
      ["Мне душно.", "It's stuffy."],
      ["Ему нельзя.", "He's not allowed."],
    ], { skill: "words" }),
    choice("mu4-t6", "Help Tom! He says: «Я холодно». What should he say?", [
      ["Мне холодно.", true],
      ["Меня холодно.", false],
      ["Мне холодный.", false],
    ], { skill: "grammar" }),
    speak("mu4-t7", "Тебе не холодно?", "Нет, мне жарко! Мне нужно попить воды.", "No, I'm hot! I need to drink some water.", {
      help: "Answer out loud how you feel.",
    }),
  ],
  reward: {
    itemId: "woolblanket",
    itemName: "Checked wool blanket",
    itemNameRu: "Шерстяной плед",
    ru: "Плед! Теперь мне тепло!",
    en: "A blanket! Now I'm warm!",
    a11y: "A thick red-and-green checked wool blanket lies folded on the bed under the wooden roof.",
    image: p("reward-4"),
    steps: ["At night it's cold in the attic too.", "Greta brings a thick checked blanket.", "Murzik wraps himself in it from ears to tail.", "“Мне тепло!” — only his nose is visible."],
    bridge: "Later that evening the big tent is full. A band plays and people dance on the benches.",
  },
};

export const munich5: Lesson = {
  id: "a2-munich-5",
  level: "A2",
  cityId: "munich",
  number: 5,
  title: "At the Festival",
  minutes: 8,
  goals: ["Talk about a festival", "Ask: Тебе понравилось?", "Help someone: помочь кому"],
  vocabNote: "Помочь, позвонить, ответить, сказать, улыбнуться all take кому: помоги мне, позвони маме.",
  vocab: [
    v("mu5-1", "оркестр", "band, brass band", "A brass band in green hats plays on a stage.", "Listen to оркестр", p("5-1")),
    v("mu5-2", "танцевать на скамейке", "to dance on the bench", "People in the tent dance standing on long wooden benches.", "Listen to танцевать на скамейке", p("5-2")),
    v("mu5-3", "Подай мне руку!", "Give me your hand!", "Murzik can't climb onto the bench; Max reaches down.", "Listen to Подай мне руку", p("5-3")),
    v("mu5-4", "кружка", "big mug", "A huge glass mug of apple juice on the table.", "Listen to кружка", p("5-4")),
    v("mu5-5", "Позвони маме!", "Call your mum!", "Greta hands Max a phone.", "Listen to Позвони маме", p("5-5")),
    v("mu5-6", "Ответь мне!", "Answer me!", "Tom shouts over the loud music, hand to his ear.", "Listen to Ответь мне", p("5-6")),
    v("mu5-7", "Тебе понравилось?", "Did you like it?", "Greta asks, smiling, as they walk out of the tent.", "Listen to Тебе понравилось", p("5-7")),
    v("mu5-8", "Мне понравился оркестр.", "I liked the band.", "Murzik jumps with joy, a paper hat on his head.", "Listen to Мне понравился оркестр", p("5-8")),
  ],
  letters: [
    letter("понравилось", "Stress on the second syllable: pa-NRA-vi-las'.", "Тебе понравилось?", "Did you like it?"),
  ],
  dialogue: {
    title: "In the tent",
    note: "Понравилось is the past of понравиться (the one-time partner of нравиться): Мне понравилось — I liked it (this time).",
    lines: [
      line("max", "Слушайте, оркестр! Все танцуют на скамейках!", "Listen, the band! Everyone's dancing on the benches!"),
      line("murzik", "Макс, подай мне руку! Скамейка высокая!", "Max, give me your hand! The bench is high!"),
      line("tom", "Мурзик! Где ты? Ответь мне!", "Murzik! Where are you? Answer me!"),
      line("murzik", "Я здесь, на скамейке! Я танцую!", "I'm here, on the bench! I'm dancing!"),
      line("greta", "Макс, позвони маме. Уже поздно.", "Max, call your mum. It's late already."),
      line("greta", "Ну, Мурзик, тебе понравилось?", "Well, Murzik, did you like it?"),
      line("murzik", "Мне очень понравилось! Особенно мне понравился оркестр.", "I liked it very much! I especially liked the band."),
    ],
    gist: choice("mu5-d1", "Why can't Tom find Murzik?", [
      ["Murzik is dancing on a bench.", true],
      ["Murzik went home.", false],
      ["Murzik is on the roller coaster.", false],
    ]),
  },
  grammar: [
    {
      title: "Verbs with кому",
      paragraphs: [
        "These verbs take the dative: помочь (help), позвонить (call), ответить (answer), сказать (tell), показать (show), улыбнуться (smile at).",
        "Помоги мне! Позвони маме! Покажи Тому фото! In English you “help someone”, in Russian you “give help to someone”.",
      ],
      examples: [
        { ru: "Я позвоню тебе вечером.", en: "I'll call you in the evening." },
        { ru: "Покажи бабушке фотографии.", en: "Show Grandma the photos." },
      ],
    },
  ],
  tasks: [
    listen("mu5-t1", "Listen. Where is Murzik?", "Я здесь, на скамейке! Я танцую!", [
      ["On a bench, dancing.", true],
      ["Outside the tent.", false],
      ["At the bar.", false],
    ]),
    choice("mu5-t2", "“Call your mum!” Which is right?", [
      ["Позвони маме!", true],
      ["Позвони маму!", false],
      ["Позвони мама!", false],
    ], { skill: "grammar" }),
    fill("mu5-t3", "Choose the right form: “Help me!”", "Помоги", "!", "мне", ["мне", "меня", "я"], { skill: "grammar" }),
    read("mu5-t4", "Read the festival programme. When does the band play?", "ШАТЁР «ГОЛУБОЙ»\n12:00 — обед\n18:00 — оркестр\n22:30 — шатёр закрывается", [
      ["At six in the evening.", true],
      ["At noon.", false],
      ["At half past ten.", false],
    ]),
    match("mu5-t5", "Match the Russian with the English.", [
      ["оркестр", "band"],
      ["кружка", "big mug"],
      ["Ответь мне!", "Answer me!"],
      ["Тебе понравилось?", "Did you like it?"],
    ], { skill: "words" }),
    tf("mu5-t6", "In Russian, помочь takes the dative: помоги мне.", true, "True or false?", { skill: "grammar" }),
    speak("mu5-t7", "Тебе понравился праздник?", "Да, мне очень понравилось! Я позвоню маме и всё расскажу.", "Yes, I liked it very much! I'll call Mum and tell her everything.", {
      help: "Say out loud how you liked the festival.",
    }),
  ],
  reward: {
    itemId: "carouselhorse",
    itemName: "Little carousel horse",
    itemNameRu: "Карусельная лошадка",
    ru: "Лошадка с карусели!",
    en: "A horse from the carousel!",
    a11y: "A small painted wooden carousel horse with a golden mane stands on the windowsill of the attic.",
    image: p("reward-5"),
    steps: ["At the carousel there's a lottery.", "Murzik wins a little wooden horse, painted red and gold.", "Max claps: “Тебе повезло!”", "The horse goes on the windowsill, looking at the festival lights."],
    bridge: "On the way home they pass an old man with an accordion. He stops playing and stares at Murzik.",
  },
};

export const munich6: Lesson = {
  id: "a2-munich-6",
  level: "A2",
  cityId: "munich",
  number: 6,
  title: "The Accordion Player",
  minutes: 8,
  goals: ["Understand a memory", "Talk about gingerbread hearts", "Use the dative in a story: писать кому, играть кому"],
  vocabNote: "Пряник — gingerbread. At the festival people buy big gingerbread hearts with words on them for someone they love.",
  vocab: [
    v("mu6-1", "аккордеон", "accordion", "Otto, an old man with a white beard, holds an accordion.", "Listen to аккордеон", p("6-1")),
    v("mu6-2", "пряничное сердце", "gingerbread heart", "A big gingerbread heart on a ribbon, with words in white icing.", "Listen to пряничное сердце", p("6-2")),
    v("mu6-3", "надпись", "inscription, the words written on it", "Close-up: «Любимой маме» in white icing.", "Listen to надпись", p("6-3")),
    v("mu6-4", "лавка", "stall", "A small wooden stall full of gingerbread hearts.", "Listen to лавка", p("6-4")),
    v("mu6-5", "Я играл ей вальсы.", "I played waltzes for her.", "Young Otto plays; a ginger cat seen from behind draws on hearts.", "Listen to Я играл ей вальсы", p("6-5")),
    v("mu6-6", "Она всем улыбалась.", "She smiled at everyone.", "Many people around the stall, all smiling.", "Listen to Она всем улыбалась", p("6-6")),
    v("mu6-7", "Она мечтала увидеть океан.", "She dreamed of seeing the ocean.", "A gingerbread heart with a little drawn wave.", "Listen to Она мечтала увидеть океан", p("6-7")),
    v("mu6-8", "Как будто это было вчера.", "As if it was yesterday.", "Otto closes his eyes, smiling.", "Listen to Как будто это было вчера", p("6-8")),
  ],
  letters: [
    letter("сердце", "The д is silent: SER-tse.", "пряничное сердце", "gingerbread heart"),
    letter("аккордеон", "Two к, said as one long k: a-kar-de-ON.", "аккордеон", "accordion"),
  ],
  dialogue: {
    title: "Otto remembers",
    note: "Otto learned some Russian from Greta's family many years ago. Рыжая кошка — a ginger cat.",
    lines: [
      line("otto", "Рыжий кот… Тридцать лет назад здесь была рыжая кошка.", "A ginger cat… Thirty years ago there was a ginger cat here."),
      line("murzik", "Её звали Ася?", "Was her name Asya?"),
      line("otto", "Да! Она рисовала надписи на пряничных сердцах. А я играл ей вальсы.", "Yes! She drew the words on the gingerbread hearts. And I played waltzes for her."),
      line("greta", "Я помню эту лавку! Ася всем улыбалась.", "I remember that stall! Asya smiled at everyone."),
      line("otto", "Как будто это было вчера. Она мечтала увидеть океан.", "As if it was yesterday. She dreamed of seeing the ocean."),
      line("murzik", "А куда она уехала?", "And where did she go?"),
      line("otto", "В Португалию. В Порту. Она написала мне открытку оттуда.", "To Portugal. To Porto. She wrote me a card from there."),
    ],
    gist: choice("mu6-d1", "What did Asya do at the festival?", [
      ["She drew the words on gingerbread hearts.", true],
      ["She played the accordion.", false],
      ["She sold flowers.", false],
    ]),
  },
  grammar: [
    {
      title: "The dative in stories",
      paragraphs: [
        "Писать, играть, улыбаться, показывать кому: Она написала мне открытку. Я играл ей вальсы. Она всем улыбалась.",
        "Всем — to everyone (dative of все). Никому — to no one: Я никому не скажу.",
      ],
      examples: [
        { ru: "Напиши мне из Порту!", en: "Write to me from Porto!" },
        { ru: "Он играл детям на аккордеоне.", en: "He played the accordion for the children." },
      ],
    },
  ],
  tasks: [
    listen("mu6-t1", "Listen. What did Otto do?", "А я играл ей вальсы.", [
      ["He played waltzes for her.", true],
      ["He sold her gingerbread.", false],
      ["He drew pictures with her.", false],
    ]),
    choice("mu6-t2", "Detective! Where did Asya go next?", [
      ["To Porto, to see the ocean.", true],
      ["Back to Milan.", false],
      ["To Kazakhstan.", false],
    ], { skill: "listening" }),
    read("mu6-t3", "Otto shows an old postcard. Read it. What does Asya see from her window?", "Дорогой Отто!\nЯ в Порту. Из окна видно океан!\nСпасибо тебе за вальсы.\nА.", [
      ["The ocean.", true],
      ["The festival tent.", false],
      ["The mountains.", false],
    ]),
    fill("mu6-t4", "Choose the right form: “She smiled at everyone.”", "Она", "улыбалась.", "всем", ["всем", "все", "всех"], { skill: "grammar" }),
    match("mu6-t5", "Match the Russian with the English.", [
      ["аккордеон", "accordion"],
      ["лавка", "stall"],
      ["надпись", "inscription"],
      ["пряничное сердце", "gingerbread heart"],
    ], { skill: "words" }),
    tf("mu6-t6", "Asya sent Otto a postcard from Porto.", true, "True or false?", { skill: "listening" }),
    speak("mu6-t7", "Что ты напишешь на пряничном сердце?", "Я напишу: «Любимой бабушке».", "I'll write: “To my beloved grandma.”", {
      help: "Say out loud what you'd write on a gingerbread heart, and for whom.",
    }),
  ],
  reward: {
    itemId: "gingerheart",
    itemName: "Gingerbread heart",
    itemNameRu: "Пряничное сердце",
    ru: "«Мурзику» — моё имя на сердце!",
    en: "“For Murzik” — my name on a heart!",
    a11y: "A big gingerbread heart on a red ribbon hangs on the wall; in white icing it says «Мурзику».",
    image: p("reward-6"),
    steps: ["Otto buys a big gingerbread heart at the stall.", "The seller writes on it in white icing: «Мурзику».", "“Ася писала так же красиво,” Otto says.", "Murzik hangs it on the wall — it's too beautiful to eat."],
    bridge: "The festival ends tomorrow, and the train to Porto leaves in the evening. One last day in Munich.",
  },
};

export const munich7: Lesson = {
  id: "a2-munich-7",
  level: "A2",
  cityId: "munich",
  number: 7,
  title: "Munich Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Thank people and say goodbye", "Review everything from Munich"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Munich.",
  vocab: [
    v("mu7-1", "кружка с крышкой", "mug with a lid", "A painted stone mug with a little pewter lid.", "Listen to кружка с крышкой", p("7-1")),
    v("mu7-2", "Спасибо вам за всё!", "Thank you for everything!", "Tom hugs Greta at the door.", "Listen to Спасибо вам за всё", p("7-2")),
    v("mu7-3", "Нам было очень весело.", "We had a lot of fun.", "Photos on the table: the tent, the carousel, the cake.", "Listen to Нам было очень весело", p("7-3")),
    v("mu7-4", "Напиши нам!", "Write to us!", "Max holds up his phone.", "Listen to Напиши нам", p("7-4")),
    v("mu7-5", "Передай Асе…", "Tell Asya… (pass on to Asya)", "Otto gives Murzik Asya's old postcard from Porto.", "Listen to Передай Асе", p("7-5")),
    v("mu7-6", "поезд отходит", "the train is leaving", "A night train at the platform, the doors open.", "Listen to поезд отходит", p("7-6")),
    v("mu7-7", "через Париж", "via Paris", "A map: a line from Munich through Paris to Porto.", "Listen to через Париж", p("7-7")),
    v("mu7-8", "Я буду вам писать.", "I'll write to you.", "Murzik puts Max's address in his notebook.", "Listen to Я буду вам писать", p("7-8")),
  ],
  letters: [
    letter("за всё", "за всё is said as one word: za-FSYO. в before с sounds like ф.", "Спасибо за всё!", "Thanks for everything!"),
  ],
  dialogue: {
    title: "At the station",
    note: "Передай кому что — pass something on to someone.",
    lines: [
      line("greta", "Это вам на дорогу. Кружка с крышкой — для чая в поезде.", "This is for the journey. A mug with a lid — for tea on the train."),
      line("tom", "Спасибо вам за всё! Нам было очень весело.", "Thank you for everything! We had a lot of fun."),
      line("max", "Напиши нам из Порту!", "Write to us from Porto!"),
      line("murzik", "Я буду вам писать каждую неделю!", "I'll write to you every week!"),
      line("otto", "Передай Асе: Отто всё ещё играет вальсы.", "Tell Asya: Otto still plays waltzes."),
      line("tom", "Мурзик, поезд отходит! Едем через Париж!", "Murzik, the train is leaving! We're going via Paris!"),
    ],
    gist: choice("mu7-d1", "What does Otto ask Murzik to tell Asya?", [
      ["That he still plays waltzes.", true],
      ["That the festival is over.", false],
      ["That Greta has a birthday.", false],
    ]),
  },
  grammar: [
    {
      title: "Munich review: the dative",
      paragraphs: [
        "Кому: мне, тебе, ему, ей, нам, вам, им; Тому, Грете, маме, брату, всем.",
        "Желаю тебе, нравится кому, к кому, мне холодно, мне нужно / можно / нельзя, помочь / позвонить / написать кому.",
      ],
      examples: [
        { ru: "Максу нравится футбол, а Грете — цветы.", en: "Max likes football, and Greta likes flowers." },
        { ru: "Мне нужно позвонить маме.", en: "I need to call Mum." },
      ],
    },
  ],
  tasks: [
    listen("mu7-t1", "Audio story: Greta tells about her guesthouse. Listen. Why do guests like it?", "Мой дом стоит недалеко от праздничных шатров. Каждую осень ко мне приезжают гости из разных стран. Я им готовлю завтрак и рассказываю про Мюнхен. Гостям нравится, что у меня тихо и тепло. А моему внуку нравится говорить с гостями по-русски.", [
      ["It's quiet and warm.", true],
      ["It's in the festival tent.", false],
      ["It's very cheap.", false],
    ]),
    choice("mu7-t2", "In Greta's story, what does Max like?", [
      ["Speaking Russian with the guests.", true],
      ["Cooking breakfast.", false],
      ["Travelling to other countries.", false],
    ], { skill: "listening" }),
    choice("mu7-t3", "“I need to call Mum.” Which is right?", [
      ["Мне нужно позвонить маме.", true],
      ["Я нужно позвонить маму.", false],
      ["Меня нужно позвонить мама.", false],
    ], { skill: "grammar" }),
    read("mu7-t4", "Read the ticket. Where do they change trains?", "БИЛЕТ\nМюнхен — Париж: 21:50 – 06:40\nПариж — Порту: 08:10 – 22:30\nВагон 5, места 21–22", [
      ["In Paris.", true],
      ["In Porto.", false],
      ["They don't change.", false],
    ]),
    script("mu7-t5", "Say goodbye to Greta and Max.", [
      { speaker: "Greta", text: "Это вам на дорогу." },
      { speaker: "You", answer: "Спасибо вам за всё! Нам было очень весело.", options: ["Спасибо вам за всё! Нам было очень весело.", "Мне скучно.", "Ему нельзя."] },
      { speaker: "Max", text: "Напиши нам!" },
      { speaker: "You", answer: "Обязательно! Я буду вам писать.", options: ["Обязательно! Я буду вам писать.", "Обязательно! Я буду вас писать.", "Поздравляю!"] },
    ], { skill: "review" }),
    match("mu7-t6", "Munich review: match the Russian with the English.", [
      ["открытка", "greeting card"],
      ["шатёр", "big tent"],
      ["Мне жарко.", "I'm hot."],
      ["пряничное сердце", "gingerbread heart"],
    ], { skill: "review" }),
    speak("mu7-t7", "Как прошёл праздник?", "Мне очень понравилось! Мы танцевали на скамейках, и нам было очень весело.", "I liked it very much! We danced on the benches and had a lot of fun.", {
      help: "Say out loud how the festival went.",
    }),
  ],
  reward: {
    itemId: "lidmug",
    itemName: "Mug with a lid",
    itemNameRu: "Кружка с крышкой",
    ru: "Кружка с крышкой — для чая в дороге!",
    en: "A mug with a lid — for tea on the road!",
    a11y: "A grey stone mug painted with blue flowers, with a small shiny pewter lid, stands on the attic table next to the gingerbread heart.",
    image: p("reward-7"),
    steps: ["Greta's present is an old painted stone mug with a lid.", "“My grandmother brought it from Kazakhstan.”", "The lid keeps the tea hot — and the train can't spill it.", "Murzik will drink from it all the way to the ocean.", "And Otto gives him Asya's old postcard: «Возьми её с собой — на счастье»."],
  },
};

export const munichLessons: Lesson[] = [munich1, munich2, munich3, munich4, munich5, munich6, munich7];
