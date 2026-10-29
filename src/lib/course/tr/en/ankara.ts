import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Ankara · “Celebrations and dates” · at Granny Nur's: months, dates, a birthday, a present, the party, the cake, a postcard with no address. English version. */

const p = (name: string) => pic(`tr/ankara/${name}`);

const ankara1: Lesson = {
  id: "tr-a1-ankara-1",
  level: "A1",
  cityId: "tr-ankara",
  number: 1,
  title: "The months",
  minutes: 7,
  goals: ["Name the months", "Say “in May”: mayısta", "Ask what month it is"],
  vocabNote: "Unlike English, the months are written with a small letter unless they're part of a date: mayısta — “in May”. In a date they take a capital: 5 Mayıs.",
  vocab: [
    v("trak1-1", "ocak, şubat, mart", "January, February, March", "Three calendar pages: snow, snow and the first snowdrops.", "Listen to ocak, şubat, mart", p("l1-1")),
    v("trak1-2", "nisan, mayıs, haziran", "April, May, June", "Three calendar pages: tulips, lilac, sunshine.", "Listen to nisan, mayıs, haziran", p("l1-2")),
    v("trak1-3", "temmuz, ağustos, eylül", "July, August, September", "Three calendar pages: the sea, a watermelon, the first yellow leaves.", "Listen to temmuz, ağustos, eylül", p("l1-3")),
    v("trak1-4", "ekim, kasım, aralık", "October, November, December", "Three calendar pages: falling leaves, rain, a snowman.", "Listen to ekim, kasım, aralık", p("l1-4")),
    v("trak1-5", "Hangi aydayız?", "What month is it?", "Murzik stands in front of a calendar, one eyebrow raised.", "Listen to Hangi aydayız", p("l1-5")),
    v("trak1-6", "mayısta", "in May", "Lilac in bloom by the window.", "Listen to mayısta", p("l1-6")),
    v("trak1-7", "ilkbahar", "spring", "A park in spring, the trees in blossom.", "Listen to ilkbahar", p("l1-7")),
  ],
  dialogue: {
    title: "Granny Nur",
    note: "Granny Nur is Grandma Asya's younger sister, a white Angora cat. Nine means “granny” — an affectionate word. Mevsim means “season”. Doğdu — “was born”.",
    lines: [
      line("nur", "Murzik! Sen Asya'nın torunu musun?", "Murzik! Are you Asya's grandson?"),
      line("murzik", "Evet! Merhaba, Nur Nine!", "Yes! Hello, Granny Nur!"),
      line("nur", "Hoş geldin, canım! Hangi aydayız? Mayıs! İlkbahar en güzel mevsim.", "Welcome, my dear! What month is it? May! Spring is the most beautiful season."),
      line("tom", "Mayısta Ankara çok güzel.", "Ankara is lovely in May."),
      line("nur", "Asya da mayısta doğdu… Ya sen?", "Asya was born in May too… And you?"),
      line("murzik", "Ben de mayısta doğdum!", "I was born in May too!"),
    ],
    gist: choice("trak1-d1", "In which month was Grandma Asya born?", [
      ["May.", true],
      ["April.", false],
      ["June.", false],
    ]),
  },
  grammar: [
    {
      title: "In May: -da, -de, -ta, -te",
      paragraphs: [
        "“In a month” uses the “in, at” ending: mayıs-ta (in May), haziran-da (in June), eylül-de (in September), ağustos-ta (in August).",
        "After s, ş, t, k and the other “hard” sounds it's -ta / -te. The question: Hangi aydayız? — What month is it? (literally “in which month are we?”)",
      ],
      examples: [
        { ru: "Haziranda deniz sıcak.", en: "The sea is warm in June." },
        { ru: "Ben martta doğdum.", en: "I was born in March." },
      ],
    },
  ],
  tasks: [
    choice("trak1-t1", "How do you say “in August”?", [
      ["ağustosta", true],
      ["ağustosda", false],
      ["ağustos", false],
    ], { skill: "grammar" }),
    listen("trak1-t2", "Listen. What month is it?", "Şimdi haziran.", [
      ["June.", true],
      ["January.", false],
      ["May.", false],
    ]),
    match("trak1-t3", "Match the pairs.", [
      ["ocak", "January"],
      ["mayıs", "May"],
      ["eylül", "September"],
      ["aralık", "December"],
    ], { skill: "words" }),
    missing("trak1-t4", "Which letter is missing? (“August”)", "a", "ustos", "ğ", ["ğ", "g", "v"]),
    speak("trak1-t5", "Hangi ayı seviyorsun?", "Haziranı seviyorum, çünkü yaz başlıyor.", "I love June, because summer begins.", { help: "Say aloud which month you like and why." }),
    choice("trak1-t6", "How do you make the toast “To your success!”?", [
      ["Başarına!", true],
      ["Başarın!", false],
      ["Başarıda!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "vazo",
    itemName: "Vase of tulips",
    itemNameRu: "Vazo",
    ru: "Yaşasın! Bir vazo!",
    en: "Hooray! A vase!",
    a11y: "A white vase of spring tulips stands on the windowsill in Granny Nur's house.",
    image: p("vazo"),
    steps: ["Granny Nur puts spring tulips in a vase.", "“Odana!” — “For your room!”", "Murzik carries the vase to the windowsill.", "The room smells of spring."],
    bridge: "Granny Nur looks at the calendar: “And what's the date today?”",
  },
};

const ankara2: Lesson = {
  id: "tr-a1-ankara-2",
  level: "A1",
  cityId: "tr-ankara",
  number: 2,
  title: "What's the date today?",
  minutes: 7,
  goals: ["Ask for and give the date", "Say “first, second, third”", "Say “in three days”, “next week”"],
  vocabNote: "English says “the second of May”, but Turkish uses a plain number in dates: Bugün iki Mayıs — literally “today two May”. Words like birinci (first) and ikinci (second) are for other things: “the first day”, “the second floor”.",
  vocab: [
    v("trak2-1", "Bugün ayın kaçı?", "What's the date today?", "Tom sneaks a look at the calendar, covering it with his hand.", "Listen to Bugün ayın kaçı", p("l2-1")),
    v("trak2-2", "Bugün iki Mayıs.", "It's the second of May.", "A big number two on a calendar page.", "Listen to Bugün iki Mayıs", p("l2-2")),
    v("trak2-3", "birinci, ikinci, üçüncü", "first, second, third", "Three kittens on a podium: first, second and third place.", "Listen to birinci, ikinci, üçüncü", p("l2-3")),
    v("trak2-4", "tarih", "date", "A pen underlines the date on a letter.", "Listen to tarih", p("l2-4")),
    v("trak2-5", "üç gün sonra", "in three days' time", "Three calendar pages, with a cake drawn on the third.", "Listen to üç gün sonra", p("l2-5")),
    v("trak2-6", "geçen hafta", "last week", "An arrow on the calendar pointing back.", "Listen to geçen hafta", p("l2-6")),
    v("trak2-7", "gelecek hafta", "next week", "An arrow on the calendar pointing forward.", "Listen to gelecek hafta", p("l2-7")),
  ],
  dialogue: {
    title: "Tom is up to something",
    note: "Hiç! Sadece soruyorum — “Nothing! I'm just asking”.",
    lines: [
      line("tom", "Nur Nine, bugün ayın kaçı?", "Granny Nur, what's the date today?"),
      line("nur", "Bugün iki Mayıs.", "It's the second of May."),
      line("tom", "Üç gün sonra… beş Mayıs!", "In three days… the fifth of May!"),
      line("murzik", "Beş Mayıs mı? Neden?", "The fifth of May? Why?"),
      line("tom", "Hiç! Sadece soruyorum.", "Nothing! I'm just asking."),
      line("nur", "Bu hafta çok güzel bir gün var, değil mi Tom?", "There's a very special day this week, isn't there, Tom?"),
    ],
    gist: choice("trak2-d1", "What's the date today?", [
      ["The second of May.", true],
      ["The fifth of May.", false],
      ["The third of May.", false],
    ]),
  },
  grammar: [
    {
      title: "Dates and ordinal numbers",
      paragraphs: [
        "A date is a number and a month: Bugün iki Mayıs. — It's the second of May. Bugün on beş Ağustos. — It's the fifteenth of August.",
        "Ordinal numbers (first, second…) take the ending -inci / -ıncı / -uncu / -üncü: bir → birinci, iki → ikinci, üç → üçüncü, dört → dördüncü.",
      ],
      examples: [
        { ru: "Bugün on Mart.", en: "It's the tenth of March." },
        { ru: "Bu benim birinci dersim.", en: "This is my first lesson." },
      ],
    },
  ],
  tasks: [
    listen("trak2-t1", "Listen. What's the date?", "Bugün on beş Ağustos.", [
      ["15 August", true],
      ["5 August", false],
      ["15 April", false],
    ]),
    choice("trak2-t2", "How do you say “It's the third of May”?", [
      ["Bugün üç Mayıs.", true],
      ["Bugün üçüncü Mayıs.", false],
      ["Bugün Mayıs üç.", false],
    ], { skill: "grammar" }),
    match("trak2-t3", "Match the pairs.", [
      ["birinci", "first"],
      ["ikinci", "second"],
      ["geçen hafta", "last week"],
      ["gelecek hafta", "next week"],
    ], { skill: "words" }),
    missing("trak2-t4", "Which letter is missing? (“third”)", "üç", "ncü", "ü", ["ü", "u", "i"]),
    speak("trak2-t5", "Bugün ayın kaçı?", "Bugün on Mart.", "It's the tenth of March.", { help: "Say today's date aloud." }),
    listen("trak2-t6", "Remember the last lesson. When?", "Mayısta.", [
      ["In May.", true],
      ["In March.", false],
      ["In July.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cerceve",
    itemName: "Photo frame",
    itemNameRu: "Çerçeve",
    ru: "Yaşasın! Bir çerçeve!",
    en: "Hooray! A frame!",
    a11y: "A silver photo frame, still empty, stands on the chest of drawers.",
    image: p("cerceve"),
    steps: ["Granny Nur takes a silver frame out of the cupboard.", "“Şimdi boş, ama yakında dolu olacak!” — “It's empty now, but soon there'll be a photo in it!”", "Murzik puts it on the chest of drawers.", "What photo will go in it?"],
    bridge: "Murzik asks Granny Nur: “And when's your birthday?”",
  },
};

const ankara3: Lesson = {
  id: "tr-a1-ankara-3",
  level: "A1",
  cityId: "tr-ankara",
  number: 3,
  title: "When's your birthday?",
  minutes: 7,
  goals: ["Ask when someone's birthday is", "Give a date: beş Mayıs'ta", "Say how old you're going to be"],
  vocabNote: "After a date, the ending goes after an apostrophe: 5 Mayıs'ta, 10 Ekim'de. Kaç yaşına giriyorsun? literally means “which age are you entering?”.",
  vocab: [
    v("trak3-1", "Doğum günün ne zaman?", "When's your birthday?", "Granny Nur asks Murzik with a smile over tea.", "Listen to Doğum günün ne zaman", p("l3-1")),
    v("trak3-2", "Doğum günüm beş Mayıs'ta.", "My birthday is on the fifth of May.", "Murzik points at the fifth of May on the calendar.", "Listen to Doğum günüm beş Mayıs'ta", p("l3-2")),
    v("trak3-3", "Kaç yaşına giriyorsun?", "How old are you going to be?", "Granny Nur leans towards Murzik curiously.", "Listen to Kaç yaşına giriyorsun", p("l3-3")),
    v("trak3-4", "Yedi yaşına giriyorum.", "I'm going to be seven.", "Murzik proudly shows seven fingers on two paws.", "Listen to Yedi yaşına giriyorum", p("l3-4")),
    v("trak3-5", "parti", "party", "A room with garlands and balloons.", "Listen to parti", p("l3-5")),
    v("trak3-6", "davet", "invitation", "A pretty invitation card with balloons on it.", "Listen to davet", p("l3-6")),
    v("trak3-7", "Gelir misin?", "Will you come?", "Tom hands a neighbour an invitation.", "Listen to Gelir misin", p("l3-7")),
  ],
  dialogue: {
    title: "The secret's out",
    note: "Yani means “so, that means”. Davet edelim — “let's invite”. Komşular — “the neighbours”.",
    lines: [
      line("murzik", "Nur Nine, doğum gününüz ne zaman?", "Granny Nur, when's your birthday?"),
      line("nur", "Benim doğum günüm on Ekim'de. Ya senin?", "My birthday is on the tenth of October. And yours?"),
      line("murzik", "Benim doğum günüm beş Mayıs'ta!", "Mine is on the fifth of May!"),
      line("nur", "Beş Mayıs mı? Yani üç gün sonra! Kaç yaşına giriyorsun?", "The fifth of May? That's in three days! How old are you going to be?"),
      line("murzik", "Yedi yaşına giriyorum.", "I'm going to be seven."),
      line("tom", "Parti yapalım mı?", "Shall we have a party?"),
      line("nur", "Tabii! Komşuları da davet edelim.", "Of course! Let's invite the neighbours too."),
    ],
    gist: choice("trak3-d1", "When is Murzik's birthday?", [
      ["On the fifth of May.", true],
      ["On the tenth of October.", false],
      ["On the second of May.", false],
    ]),
  },
  grammar: [
    {
      title: "On a date: 5 Mayıs'ta",
      paragraphs: [
        "“On (a date)” is the date plus the “in, at” ending after an apostrophe: beş Mayıs'ta (on the fifth of May), on Ekim'de (on the tenth of October), on iki Haziran'da (on the twelfth of June).",
        "“I'm going to be…” is a number and yaşına giriyorum: yedi yaşına giriyorum — I'm going to be seven.",
      ],
      examples: [
        { ru: "Doğum günüm on iki Haziran'da.", en: "My birthday is on the twelfth of June." },
        { ru: "Tom yirmi altı yaşına giriyor.", en: "Tom is going to be twenty-six." },
      ],
    },
  ],
  tasks: [
    choice("trak3-t1", "How do you say “on the tenth of October”?", [
      ["on Ekim'de", true],
      ["on Ekim'e", false],
      ["on Ekim'den", false],
    ], { skill: "grammar" }),
    listen("trak3-t2", "Listen. How old is the speaker going to be?", "Otuz yaşına giriyorum.", [
      ["Thirty.", true],
      ["Thirteen.", false],
      ["Three.", false],
    ]),
    match("trak3-t3", "Match the pairs.", [
      ["doğum günü", "birthday"],
      ["davet", "invitation"],
      ["parti", "party"],
      ["Gelir misin?", "Will you come?"],
    ], { skill: "words" }),
    spell("trak3-t4", "Spell the word for “party”.", "parti"),
    speak("trak3-t5", "Doğum günün ne zaman?", "Doğum günüm on iki Haziran'da.", "My birthday is on the twelfth of June.", { help: "Say your birthday aloud." }),
    choice("trak3-t6", "How do you ask “What's the date today?”", [
      ["Bugün ayın kaçı?", true],
      ["Bugün kaç yaşında?", false],
      ["Bugün hangi saat?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kitap",
    itemName: "Old book of fairy tales",
    itemNameRu: "Kitap",
    ru: "Yaşasın! Eski bir kitap!",
    en: "Hooray! An old book!",
    a11y: "An old book of Turkish fairy tales with drawings in the margins. Two names are handwritten inside the cover.",
    image: p("kitap"),
    steps: ["Granny Nur takes an old book down from the shelf.", "“Asya ile çocukken okurduk.” — “Asya and I used to read it as children.”", "Inside the cover are two names: Nur and Asya.", "Murzik gently strokes the pages."],
    bridge: "Tom secretly asks Granny Nur: “What shall we give Murzik?”",
  },
};

const ankara4: Lesson = {
  id: "tr-a1-ankara-4",
  level: "A1",
  cityId: "tr-ankara",
  number: 4,
  title: "What shall we get him?",
  minutes: 7,
  goals: ["Discuss a present", "Say “to him, to her, to you, to me”: ona, sana, bana", "Ask someone to keep a secret"],
  vocabNote: "Ne dersin? — “What do you say? What do you think?” Politely: Ne dersiniz?",
  vocab: [
    v("trak4-1", "Ona ne alalım?", "What shall we get him?", "Tom and Granny Nur whisper in the kitchen.", "Listen to Ona ne alalım", p("l4-1")),
    v("trak4-2", "hediye", "present, gift", "A box in coloured paper with a bow.", "Listen to hediye", p("l4-2")),
    v("trak4-3", "Ona bir resim defteri alalım.", "Let's get him a sketchbook.", "Tom points at a sketchbook in a shop window.", "Listen to Ona bir resim defteri alalım", p("l4-3")),
    v("trak4-4", "Ne dersin?", "What do you think?", "Tom looks at Granny Nur questioningly.", "Listen to Ne dersin", p("l4-4")),
    v("trak4-5", "İyi fikir!", "Good idea!", "A light bulb switches on above Granny Nur's head.", "Listen to İyi fikir", p("l4-5")),
    v("trak4-6", "Sürpriz!", "Surprise!", "Confetti bursts out of a box.", "Listen to Sürpriz", p("l4-6")),
    v("trak4-7", "Ona söyleme!", "Don't tell him!", "Granny Nur puts a finger to her lips.", "Listen to Ona söyleme", p("l4-7")),
  ],
  dialogue: {
    title: "A secret meeting",
    note: "Vereceğim — “I'll give”. Söylemem — “I won't tell”.",
    lines: [
      line("tom", "Nur Nine, Murzik'e ne alalım?", "Granny Nur, what shall we get Murzik?"),
      line("nur", "Hmm… Murzik resim yapmayı seviyor, değil mi?", "Hmm… Murzik likes drawing, doesn't he?"),
      line("tom", "Evet! Ona bir resim defteri alalım. Ne dersiniz?", "Yes! Let's get him a sketchbook. What do you think?"),
      line("nur", "İyi fikir! Ben de ona bir şey vereceğim…", "Good idea! I'm going to give him something too…"),
      line("tom", "Ne?", "What?"),
      line("nur", "Sürpriz! Ama ona söyleme!", "It's a surprise! But don't tell him!"),
      line("tom", "Tamam, söylemem!", "OK, I won't tell!"),
    ],
    gist: choice("trak4-d1", "What does Tom want to give Murzik?", [
      ["A sketchbook.", true],
      ["A saz.", false],
      ["A camera.", false],
    ]),
  },
  grammar: [
    {
      title: "To whom: bana, sana, ona",
      paragraphs: [
        "“To someone” is the ending -a / -e: Murzik'e (to Murzik), anneme (to my mum). The pronouns: bana — to me, sana — to you, ona — to him or her, bize — to us, size — to you (polite or plural).",
        "Ona means both “to him” and “to her”: Turkish uses one word, o, for both “he” and “she”.",
      ],
      examples: [
        { ru: "Ona bir kitap alalım.", en: "Let's get him a book." },
        { ru: "Bana bir hediye mi aldın?", en: "Did you get me a present?" },
      ],
    },
  ],
  tasks: [
    choice("trak4-t1", "How do you say “Let's get him a present”?", [
      ["Ona bir hediye alalım.", true],
      ["Onu bir hediye alalım.", false],
      ["O bir hediye alalım.", false],
    ], { skill: "grammar" }),
    listen("trak4-t2", "Listen. What do they suggest giving?", "Ona bir kitap alalım.", [
      ["A book.", true],
      ["Flowers.", false],
      ["A cake.", false],
    ]),
    match("trak4-t3", "Match the pairs.", [
      ["hediye", "present"],
      ["Sürpriz!", "Surprise!"],
      ["İyi fikir!", "Good idea!"],
      ["Ne dersin?", "What do you think?"],
    ], { skill: "words" }),
    missing("trak4-t4", "Which letter is missing? (“present”)", "hed", "ye", "i", ["i", "ı", "e"]),
    speak("trak4-t5", "Annene ne alıyorsun?", "Ona çiçek alıyorum.", "I'm getting her flowers.", { help: "Say aloud what you'll give your mum." }),
    choice("trak4-t6", "How do you ask “When's your birthday?”", [
      ["Doğum günün ne zaman?", true],
      ["Doğum günü nerede?", false],
      ["Kaç doğum günü?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balonlar",
    itemName: "Balloons",
    itemNameRu: "Balonlar",
    ru: "Yaşasın! Renkli balonlar!",
    en: "Hooray! Colourful balloons!",
    a11y: "A bunch of colourful balloons tied to the back of a chair.",
    image: p("balonlar"),
    steps: ["Tom comes home with a bunch of balloons.", "“Bunlar ne için?” Murzik asks — “What are these for?”", "“Hiç! Güzel, değil mi?” — “No reason! They're pretty, aren't they?”", "Murzik pretends not to notice."],
    bridge: "The morning of the fifth of May. Murzik wakes up — and the house is suspiciously quiet…",
  },
};

const ankara5: Lesson = {
  id: "tr-a1-ankara-5",
  level: "A1",
  cityId: "tr-ankara",
  number: 5,
  title: "İyi ki doğdun! — Happy birthday!",
  minutes: 7,
  goals: ["Wish someone a happy birthday", "Ask someone to open a present", "Say how happy you are about a surprise"],
  vocabNote: "İyi ki doğdun literally means “how good that you were born”. It's the warmest birthday wish.",
  vocab: [
    v("trak5-1", "Doğum günün kutlu olsun!", "Happy birthday!", "Granny Nur holds out a present with a bow to Murzik.", "Listen to Doğum günün kutlu olsun", p("l5-1")),
    v("trak5-2", "İyi ki doğdun!", "Happy birthday! (so glad you were born)", "Tom and Granny Nur jump out from behind the door with party poppers.", "Listen to İyi ki doğdun", p("l5-2")),
    v("trak5-3", "Hediyeni aç!", "Open your present!", "Murzik unties the bow on the box.", "Listen to Hediyeni aç", p("l5-3")),
    v("trak5-4", "Ne güzel bir sürpriz!", "What a lovely surprise!", "Murzik presses his paws to his cheeks in delight.", "Listen to Ne güzel bir sürpriz", p("l5-4")),
    v("trak5-5", "Ne kadar güzel!", "It's so beautiful!", "Murzik holds his new sketchbook, beaming.", "Listen to Ne kadar güzel", p("l5-5")),
    v("trak5-6", "Kaç yaşına girdin?", "How old are you now?", "Granny Nur gently strokes Murzik's head.", "Listen to Kaç yaşına girdin", p("l5-6")),
    v("trak5-7", "Seni seviyoruz!", "We love you!", "Tom and Granny Nur hug Murzik from both sides.", "Listen to Seni seviyoruz", p("l5-7")),
  ],
  dialogue: {
    title: "The morning of the fifth of May",
    note: "Hediyeni — “your present”. Girdin — “you've entered (an age)”, so “you've turned”.",
    lines: [
      line("tom", "Sürpriz! İyi ki doğdun, Murzik!", "Surprise! Happy birthday, Murzik!"),
      line("nur", "Doğum günün kutlu olsun, canım!", "Happy birthday, my dear!"),
      line("murzik", "Ne güzel bir sürpriz! Teşekkürler!", "What a lovely surprise! Thank you!"),
      line("tom", "Hediyeni aç!", "Open your present!"),
      line("murzik", "Bir resim defteri! Ne kadar güzel!", "A sketchbook! It's so beautiful!"),
      line("nur", "Kaç yaşına girdin?", "How old are you now?"),
      line("murzik", "Yedi!", "Seven!"),
      line("tom", "Seni seviyoruz, Murzik!", "We love you, Murzik!"),
    ],
    gist: choice("trak5-d1", "What did Tom give Murzik?", [
      ["A sketchbook.", true],
      ["A book.", false],
      ["Balloons.", false],
    ]),
  },
  grammar: [
    {
      title: "Birthday wishes",
      paragraphs: [
        "Doğum günün kutlu olsun! — “Happy birthday!” (a little more formal). İyi ki doğdun! — the same, but warmer.",
        "With the polite “you”: Doğum gününüz kutlu olsun! İyi ki doğdunuz! This is how you'd wish an older person or someone you don't know well a happy birthday.",
      ],
      examples: [
        { ru: "İyi ki doğdun, Tom!", en: "Happy birthday, Tom!" },
        { ru: "Doğum gününüz kutlu olsun, Nur Nine!", en: "Happy birthday, Granny Nur!" },
      ],
    },
  ],
  tasks: [
    choice("trak5-t1", "How do you warmly wish a friend a happy birthday?", [
      ["İyi ki doğdun!", true],
      ["Geçmiş olsun!", false],
      ["Afiyet olsun!", false],
    ], { skill: "words" }),
    listen("trak5-t2", "Listen. How old has the speaker turned?", "Kırk yaşına girdim.", [
      ["Forty.", true],
      ["Fourteen.", false],
      ["Four.", false],
    ]),
    choice("trak5-t3", "How do you wish your elderly neighbour a happy birthday (politely)?", [
      ["Doğum gününüz kutlu olsun!", true],
      ["Doğum günün kutlu olsun!", false],
      ["Doğum günüm kutlu olsun!", false],
    ], { skill: "grammar" }),
    missing("trak5-t4", "Which letter is missing? (“So glad you were born!”)", "İyi ki do", "dun!", "ğ", ["ğ", "g", "y"]),
    speak("trak5-t5", "Bugün benim doğum günüm!", "İyi ki doğdun! Doğum günün kutlu olsun!", "Happy birthday!", { help: "Wish them a happy birthday aloud." }),
    choice("trak5-t6", "How do you say “Let's get him a book”?", [
      ["Ona bir kitap alalım.", true],
      ["Onu bir kitap alalım.", false],
      ["Ben kitap alalım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "resim-defteri",
    itemName: "Sketchbook",
    itemNameRu: "Resim defteri",
    ru: "Yaşasın! Bir resim defteri!",
    en: "Hooray! A sketchbook!",
    a11y: "A big sketchbook and a box of watercolours. Tom has drawn a ginger kitten on the cover.",
    image: p("resim-defteri"),
    steps: ["Murzik opens the sketchbook.", "Inside is a box of watercolours — from Granny Nur!", "Tom has drawn a ginger kitten on the cover.", "Murzik draws his first picture straight away."],
    bridge: "And in the kitchen there's a cake with candles!",
  },
};

const ankara6: Lesson = {
  id: "tr-a1-ankara-6",
  level: "A1",
  cityId: "tr-ankara",
  number: 6,
  title: "Cake and good wishes",
  minutes: 7,
  goals: ["Make a wish and blow out the candles", "Wish someone health and happiness: dilerim", "Say “many happy returns!”"],
  vocabNote: "Careful: pasta means “cake” in Turkish, not spaghetti! Nice yıllara! — “Many happy returns!” — is said on birthdays and holidays.",
  vocab: [
    v("trak6-1", "pasta", "cake", "A chocolate cake with candles on the table.", "Listen to pasta", p("l6-1")),
    v("trak6-2", "Mumları üfle!", "Blow out the candles!", "Murzik puffs out his cheeks over the candles.", "Listen to Mumları üfle", p("l6-2")),
    v("trak6-3", "Bir dilek tut!", "Make a wish!", "Murzik shuts his eyes tight and folds his paws.", "Listen to Bir dilek tut", p("l6-3")),
    v("trak6-4", "Sana sağlık ve mutluluk dilerim.", "I wish you health and happiness.", "Granny Nur raises a glass of tea.", "Listen to Sana sağlık ve mutluluk dilerim", p("l6-4")),
    v("trak6-5", "Nice yıllara!", "Many happy returns!", "Everyone at the table raises their glasses.", "Listen to Nice yıllara", p("l6-5")),
    v("trak6-6", "Bir dilim daha?", "Another slice?", "Tom holds a knife over the cake.", "Listen to Bir dilim daha", p("l6-6")),
    v("trak6-7", "Dileğin ne?", "What did you wish for?", "Granny Nur leans towards Murzik curiously.", "Listen to Dileğin ne", p("l6-7")),
  ],
  dialogue: {
    title: "Seven candles",
    note: "Söyleyemem — “I can't tell”. Sır means “secret”.",
    lines: [
      line("nur", "İşte pasta! Mumları üfle!", "Here's the cake! Blow out the candles!"),
      line("tom", "Önce bir dilek tut!", "Make a wish first!"),
      line("murzik", "Tamam… Hazır!", "OK… Done!"),
      line("nur", "Dileğin ne?", "What did you wish for?"),
      line("murzik", "Söyleyemem! Sır!", "I can't tell! It's a secret!"),
      line("tom", "Sana sağlık ve mutluluk dilerim!", "I wish you health and happiness!"),
      line("nur", "Nice yıllara, Murzik!", "Many happy returns, Murzik!"),
    ],
    gist: choice("trak6-d1", "Why doesn't Murzik say what he wished for?", [
      ["It's a secret.", true],
      ["He's forgotten.", false],
      ["He didn't make a wish.", false],
    ]),
  },
  grammar: [
    {
      title: "I wish you…: … dilerim",
      paragraphs: [
        "“I wish (you)” is dilerim. The person takes the “to” ending: sana (to you), size (to you, polite). The thing you wish is just the word: Sana sağlık dilerim. — I wish you good health.",
        "You can list several: Sana sağlık, mutluluk ve başarı dilerim. — I wish you health, happiness and success.",
      ],
      examples: [
        { ru: "Size mutluluk dilerim.", en: "I wish you happiness." },
        { ru: "Sana iyi yolculuklar dilerim.", en: "I wish you a good trip." },
      ],
    },
  ],
  tasks: [
    choice("trak6-t1", "How do you say “I wish you happiness”?", [
      ["Sana mutluluk dilerim.", true],
      ["Seni mutluluk dilerim.", false],
      ["Sen mutluluk dilerim.", false],
    ], { skill: "grammar" }),
    listen("trak6-t2", "Listen. What are they wishing?", "Sana sağlık ve başarı dilerim.", [
      ["Health and success.", true],
      ["Happiness and love.", false],
      ["A good journey.", false],
    ]),
    match("trak6-t3", "Match the pairs.", [
      ["pasta", "cake"],
      ["mum", "candle"],
      ["dilek", "wish"],
      ["Nice yıllara!", "Many happy returns!"],
    ], { skill: "words" }),
    missing("trak6-t4", "Which letter is missing? (“Blow!”)", "Ü", "le!", "f", ["f", "v", "p"]),
    speak("trak6-t5", "Bana ne dilersin?", "Sana sağlık ve mutluluk dilerim!", "I wish you health and happiness!", { help: "Wish someone something nice, aloud." }),
    listen("trak6-t6", "Remember the last lesson. What are they saying?", "İyi ki doğdun!", [
      ["Happy birthday!", true],
      ["Get well soon!", false],
      ["Enjoy your meal!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mum",
    itemName: "Cat candle",
    itemNameRu: "Mum",
    ru: "Yaşasın! Bir mum!",
    en: "Hooray! A candle!",
    a11y: "A little cat-shaped candle with the number seven on its side stands on a slice of cake.",
    image: p("mum"),
    steps: ["Granny Nur takes out a cat-shaped candle.", "It has the number seven on it.", "“Hatıra olsun!” — “A keepsake!”", "Murzik puts it on the shelf."],
    bridge: "In the evening the postman brings a postcard. There's no return address on it…",
  },
};

const ankara7: Lesson = {
  id: "tr-a1-ankara-7",
  level: "A1",
  cityId: "tr-ankara",
  number: 7,
  title: "A postcard with no address",
  minutes: 8,
  goals: ["Ask questions: who, from where, why, which", "Understand a short postcard", "Review all the words from Ankara"],
  vocabNote: "Torun means “grandchild” — grandson or granddaughter. Torunum — “my grandchild”. Pul — “postage stamp”. Posta damgası — “postmark”: it shows which city a letter comes from.",
  vocab: [
    v("trak7-1", "Kim gönderdi?", "Who sent it?", "Murzik holds the postcard and looks around, bewildered.", "Listen to Kim gönderdi", p("l7-1")),
    v("trak7-2", "Nereden geldi?", "Where did it come from?", "Tom examines the stamp on the postcard through a magnifying glass.", "Listen to Nereden geldi", p("l7-2")),
    v("trak7-3", "Ne yazıyor?", "What does it say?", "Granny Nur puts on her glasses.", "Listen to Ne yazıyor", p("l7-3")),
    v("trak7-4", "Neden adres yok?", "Why isn't there a return address?", "Close-up: the empty space for a return address on the postcard.", "Listen to Neden adres yok", p("l7-4")),
    v("trak7-5", "Hangi şehirden?", "From which city?", "A blue stamp showing green mountains by the sea, with a round postmark.", "Listen to Hangi şehirden", p("l7-5")),
    v("trak7-6", "torunum", "my grandchild", "A little ginger cat is drawn in the corner of the postcard.", "Listen to torunum", p("l7-6")),
    v("trak7-7", "Bu onun yazısı!", "That's her handwriting!", "Granny Nur holds the postcard to her chest, tears in her eyes.", "Listen to Bu onun yazısı", p("l7-7")),
  ],
  dialogue: {
    title: "The evening post",
    note: "Kartpostal means “postcard”. Yazı — “handwriting, writing”.",
    lines: [
      line("murzik", "Bir kartpostal! Kim gönderdi?", "A postcard! Who sent it?"),
      line("tom", "Bilmiyorum. Adres yok.", "I don't know. There's no address."),
      line("murzik", "Neden adres yok? Ne yazıyor… «İyi ki doğdun, torunum.»", "Why isn't there a return address? What does it say… “Happy birthday, my grandchild.”"),
      line("nur", "Bu… Asya'nın yazısı! Bu onun yazısı!", "This is… Asya's handwriting! It's her handwriting!"),
      line("tom", "Nereden geldi? Bak, posta damgası: Trabzon!", "Where did it come from? Look, the postmark: Trabzon!"),
      line("murzik", "Hangi şehirden? Trabzon'dan! Trabzon'a gidelim!", "Which city? Trabzon! Let's go to Trabzon!"),
    ],
    gist: choice("trak7-d1", "Where did the postcard come from?", [
      ["Trabzon.", true],
      ["Ankara.", false],
      ["Paris.", false],
    ]),
  },
  grammar: [
    {
      title: "Question words",
      paragraphs: [
        "Kim? — who? Ne? — what? Nerede? — where? Nereden? — where from? Nereye? — where to? Ne zaman? — when? Neden? — why? Hangi? — which? Kaç? — how many?",
        "Unlike English, the question word doesn't go first — it usually goes right before the verb: Kartpostalı kim gönderdi? — Who sent the postcard? (literally “the postcard who sent?”)",
      ],
      examples: [
        { ru: "Kartpostal nereden geldi?", en: "Where did the postcard come from?" },
        { ru: "Asya şimdi nerede?", en: "Where's Asya now?" },
      ],
    },
  ],
  tasks: [
    listen("trak7-t1", "Audio exam. What does the postcard say?", "İyi ki doğdun, torunum. Seni çok seviyorum.", [
      ["Happy birthday, my grandchild. I love you very much.", true],
      ["Come and visit me.", false],
      ["Where do you live now?", false],
    ]),
    choice("trak7-t2", "How do you ask “Where did the letter come from?”", [
      ["Mektup nereden geldi?", true],
      ["Mektup nereye geldi?", false],
      ["Mektup nerede geldi?", false],
    ], { skill: "grammar" }),
    match("trak7-t3", "Match the pairs.", [
      ["kim", "who"],
      ["neden", "why"],
      ["nereden", "where from"],
      ["hangi", "which"],
    ], { skill: "words" }),
    spell("trak7-t4", "Spell the word for “grandchild”.", "torun"),
    speak("trak7-t5", "Kartpostalı kim gönderdi?", "Bilmiyorum! Adres yok.", "I don't know! There's no address.", { help: "Answer aloud." }),
    script("trak7-t6", "Remember all of Ankara. Finish the conversations.", [
      { speaker: "Granny Nur", text: "Bugün ayın kaçı?" },
      { speaker: "You", answer: "Bugün beş Mayıs.", options: ["Bugün beş Mayıs.", "Bugün Mayıs.", "Beş yaşında."] },
      { speaker: "Tom", text: "Doğum günün ne zaman?" },
      { speaker: "You", answer: "Beş Mayıs'ta.", options: ["Beş Mayıs'ta.", "Beş Mayıs'tan.", "Hemen!"] },
      { speaker: "Granny Nur", text: "İyi ki doğdun!" },
      { speaker: "You", answer: "Teşekkür ederim!", options: ["Teşekkür ederim!", "Geçmiş olsun!", "Sürpriz!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "battaniye",
    itemName: "Angora wool blanket",
    itemNameRu: "Battaniye",
    ru: "Yaşasın! Yumuşak bir battaniye!",
    en: "Hooray! A soft blanket!",
    a11y: "A fluffy white Angora wool blanket lies folded on an armchair.",
    image: p("battaniye"),
    steps: ["Granny Nur takes a white blanket out of a chest.", "“Bunu Asya ile birlikte ördük.” — “Asya and I knitted this together.”", "The blanket is as soft as a cloud.", "Murzik wraps himself in it and smiles."],
    bridge: "Tomorrow — Trabzon. Maybe someone at the post office there saw who sent it.",
  },
};

const story: CityStory = {
  home: {
    name: "At Granny Nur's",
    nameRu: "Nur Nine'nin evi",
    image: p("home"),
    a11y: "A cosy empty room in Granny Nur's house: lace curtains, an old armchair, embroidery on the wall. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "battaniye",
  welcomeRu: "Merhaba, Ankara!",
  welcomeEn: "Hello, Ankara!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Tom by Ankara's old castle on a hill, with the big city below. A warm spring day.",
  departureImage: p("departure"),
  departureA11y: "Granny Nur, a white Angora cat in a shawl, sees Murzik and Tom off at the airport, waving a white handkerchief.",
  finale: [
    {
      image: p("postcard"),
      a11y: "Close-up: a postcard with a little ginger cat in the corner and a blue stamp showing green mountains by the sea, with a round postmark on it. No return address. Granny Nur's white paw holds the postcard.",
      lines: [
        { en: "Granny Nur holds the postcard in her paws for a long time." },
        { ru: "Asya yaşıyor. Biliyorum.", en: "Asya is alive. I know it." },
        { en: "The handwriting is fresh. The postmark: Trabzon, a city on the Black Sea coast." },
      ],
    },
    {
      image: p("battaniye"),
      a11y: "Murzik walks round his room at Granny Nur's, furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks round his room at Granny Nur's. Tom takes a photo of it for the magazine." },
        { en: "Murzik takes the white blanket the two sisters knitted with him." },
        { en: "Murzik puts the birthday postcard in his backpack, so it's always with him." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy, and Tom celebrates with him.",
      lines: [
        { ru: "Ankara tamamlandı!", en: "Ankara complete!" },
        { en: "7 / 7 lessons" },
        { en: "A1 — tenth part done." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Granny Nur waves goodbye with a white handkerchief.",
      lines: [
        { ru: "Hoşça kal, Nur Nine!", en: "Goodbye, Granny Nur!" },
        { ru: "Sıradaki durak: Trabzon!", en: "Next stop: Trabzon!" },
      ],
    },
    {
      image: p("flight"),
      a11y: "A plane flies north over the mountains towards the Black Sea.",
      lines: [{ ru: "Ankara → Trabzon", en: "Ankara → Trabzon" }],
    },
    {
      image: pic("tr/trabzon/arrival"),
      a11y: "Murzik and Tom in Trabzon: green mountains, tea plantations on the slopes and the grey Black Sea. It's drizzling.",
      lines: [
        { ru: "Merhaba, Trabzon!", en: "Hello, Trabzon!" },
        { ru: "Yine yağmur!", en: "Rain again!" },
      ],
    },
  ],
};

export const trAnkaraEn = {
  id: "tr-ankara",
  name: "Ankara",
  nameTr: "Ankara",
  lessons: [ankara1, ankara2, ankara3, ankara4, ankara5, ankara6, ankara7],
  story,
};
