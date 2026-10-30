import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, k, letter, line, listen, match, script, speak, spell, v } from "./make";

/* Hongdae · “Is there? How much?” · a lively Seoul neighbourhood: café, numbers, prices, metro, street musicians, the café scene. The remaining hangul letters. */

const p = (name: string) => pic(`ko/hongdae/${name}`);

const ANNYEONG = k("안녕하세요!");
const ISSEOYO = k("네, 있어요.");
const EOPSSEOYO = k("아니요, 없어요.");
const LONDON = k("런던에서 왔어요.");
const EODI = k("어디에서 왔어요?");
const PHONE_Q = k("전화번호가 뭐예요?");
const PHONE_A = k("공일공, 일이삼사, 오육칠팔이에요.");
const EOLMA = k("얼마예요?");
const CARD = k("카드 돼요?");
const JEOGI = k("저기예요.");
const TOILET = k("화장실이 어디예요?");
const JINJJA = k("진짜 좋아요!");
const MASISSEOYO = k("네, 진짜 맛있어요!");
const COFFEE_PLEASE = k("커피 주세요.");

const hong1: Lesson = {
  id: "ko-a1-hongdae-1",
  level: "A1",
  cityId: "ko-hongdae",
  number: 1,
  title: "Is there any?",
  minutes: 7,
  goals: ["Ask “Do you have …?”", "Answer “there is” and “there isn't”", "Order in a café"],
  vocabNote: "Isseoyo means “there is, I have”, eopseoyo means “there isn't, I don't have”. The question sounds the same, just with a rising voice: uyu isseoyo? means “do you have milk?”.",
  vocab: [
    v("koho1-1", k("아이스 아메리카노 있어요?"), "Do you have iced americano?", "Murzik peeks over the café counter.", "", p("l1-1")),
    v("koho1-2", ISSEOYO, "Yes, we do.", "The barista smiles and nods.", "", p("l1-2")),
    v("koho1-3", EOPSSEOYO, "No, we don't.", "The barista spreads her hands.", "", p("l1-3")),
    v("koho1-4", k("물"), "water", "A glass of water with ice.", "", p("l1-4")),
    v("koho1-5", k("우유"), "milk", "A glass of milk with a foam moustache.", "", p("l1-5")),
    v("koho1-6", k("빵"), "bread, a bun", "A fluffy bun on a plate.", "", p("l1-6")),
    v("koho1-7", k("케이크"), "cake", "A slice of strawberry cake.", "", p("l1-7")),
  ],
  letters: [
    letter("ㅃ", "“pp”: a double ㅂ, said tense and sharp", k("빵"), "bun"),
    letter("ㅠ", "“yu”: like ㅜ, but with two tails", k("우유"), "milk"),
    letter("ㅄ", "two letters at the end of a syllable: at the end of a word or before a consonant only “p” is read", EOPSSEOYO, "No, we don't.", "Before a vowel ㅅ moves to the next syllable: it is written 없어요 and romanized eopseoyo (said like “eop-sseoyo”)."),
  ],
  dialogue: {
    title: "A café in Hongdae",
    note: "Eoseo oseyo! means “Welcome!”: that's how cafés and shops greet you. Saengseon is “fish”. Yeogineun means “here (as for this place)”.",
    lines: [
      line("waiter", k("어서 오세요!"), "Welcome!"),
      line("murzik", k("안녕하세요! 우유 있어요?"), "Hello! Do you have milk?"),
      line("waiter", ISSEOYO, "Yes, we do."),
      line("murzik", k("그럼 우유 주세요. 그리고 생선 있어요?"), "Then milk, please. And do you have fish?"),
      line("waiter", k("생선이요? 아니요, 없어요!"), "Fish? No, we don't!"),
      line("sua", k("하하, 여기는 카페예요!"), "Ha-ha, this is a café!"),
      line("waiter", k("케이크 있어요!"), "But we have cake!"),
    ],
    gist: choice("koho1-d1", "What doesn't the café have?", [
      ["Fish.", true],
      ["Milk.", false],
      ["Cake.", false],
    ]),
  },
  grammar: [
    {
      title: "There is and there isn't: isseoyo / eopseoyo",
      paragraphs: [
        "Isseoyo (있어요) means “there is, I have”. Eopseoyo (없어요) means “there isn't, I don't have”.",
        "The question is the same word with a rising voice: mul isseoyo? means “is there any water?”. The answer: ne, isseoyo — “yes, there is” or aniyo, eopseoyo — “no, there isn't”.",
      ],
      examples: [
        { ru: k("물 있어요?"), en: "Is there any water?" },
        { ru: k("빵 없어요."), en: "There are no buns." },
      ],
    },
  ],
  tasks: [
    choice("koho1-t1", "How do you say “There's no milk”?", [
      [k("우유 없어요."), true],
      [k("우유 있어요."), false],
      [k("우유 아니요."), false],
    ], { skill: "grammar" }),
    listen("koho1-t2", "Listen. What did the barista answer?", ISSEOYO, [
      ["Yes, we do.", true],
      ["No, we don't.", false],
      ["Milk.", false],
    ]),
    match("koho1-t3", "Match the pairs.", [
      [k("물"), "water"],
      [k("우유"), "milk"],
      [k("빵"), "bun"],
      [k("케이크"), "cake"],
    ], { skill: "words" }),
    spell("koho1-t4", "Build the word “milk” from syllables.", k("우유"), ["오", "이"]),
    speak("koho1-t5", k("뭐 드릴까요?"), COFFEE_PLEASE, "A coffee, please.", { help: "The barista asks: “What would you like?”. Answer out loud." }),
    script("koho1-t6", "Remember Seoul. Finish the conversations.", [
      { speaker: "Waiter", text: k("어서 오세요!") },
      { speaker: "You", answer: ANNYEONG, options: [ANNYEONG, EOPSSEOYO, k("빵")] },
      { speaker: "Sua", text: EODI },
      { speaker: "You", answer: LONDON, options: [LONDON, ISSEOYO, k("케이크")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "beanbag",
    itemName: "A beanbag chair",
    itemNameRu: k("빈백"),
    ru: k("우와, 빈백이에요!"),
    en: "Wow, a beanbag chair!",
    a11y: "A soft yellow beanbag chair in the corner of a small room, with a dent exactly the size of a cat.",
    image: p("beanbag"),
    steps: ["The café owner carries a yellow beanbag chair upstairs.", "Murzik flops into it.", "The beanbag takes the shape of a cat.", "Now he doesn't want to get up!"],
    bridge: "In the evening Jiyeon asks Murzik for his phone number. But how do numbers work in Korean?",
  },
};

const hong2: Lesson = {
  id: "ko-a1-hongdae-2",
  level: "A1",
  cityId: "ko-hongdae",
  number: 2,
  title: "Il, i, sam — numbers",
  minutes: 7,
  goals: ["Count from 1 to 10 (Sino-Korean numbers)", "Say a phone number", "Understand 11, 20, 30"],
  vocabNote: "Korean has two sets of numbers. Today you learn the Sino-Korean ones: they are used for phone numbers, prices and dates. The native Korean ones (hana, dul, set) come in Suwon. Zero in a phone number is gong.",
  vocab: [
    v("koho2-1", k("일, 이, 삼"), "one, two, three", "Murzik counts on his fingers: one, two, three.", "", p("l2-1")),
    v("koho2-2", k("사, 오, 육"), "four, five, six", "Six little cakes in the café window.", "", p("l2-2")),
    v("koho2-3", k("칠, 팔, 구"), "seven, eight, nine", "Nine balloons at the café door.", "", p("l2-3")),
    v("koho2-4", k("십"), "ten", "Murzik raises both paws: ten!", "", p("l2-4")),
    v("koho2-5", k("공"), "zero (in a phone number)", "A round doughnut that looks like a zero.", "", p("l2-5")),
    v("koho2-6", PHONE_Q, "What's your phone number?", "Jiyeon hands Murzik her phone.", "", p("l2-6")),
    v("koho2-7", k("비밀이에요!"), "It's a secret!", "Jiyeon winks and puts a finger to her lips.", "", p("l2-7")),
  ],
  letters: [
    letter("ㅝ", "“wo”: ㅜ and ㅓ together", PHONE_Q, "What's your number?"),
    letter("ㅖ", "“ye”: like ㅕ, but with an extra stick", PHONE_Q, "What's your number?"),
    letter("ㅑ", "“ya”: like ㅏ, but with two dashes", k("제 이름은 마야예요."), "My name is Maya."),
  ],
  dialogue: {
    title: "A phone number",
    note: "Korean mobile numbers start with 010 — gongilgong. The digits are read one by one. Je beonhoneun means “my number”.",
    lines: [
      line("jiyeon", k("무르직 씨, 전화번호가 뭐예요?"), "Murzik, what's your phone number?"),
      line("murzik", PHONE_A, "010-1234-5678."),
      line("jiyeon", k("다시 한 번 말해 주세요."), "Say it again, please."),
      line("murzik", k("공일공, 일이삼사, 오육칠팔!"), "010-1234-5678!"),
      line("jiyeon", k("고마워요! 제 번호는… 비밀이에요!"), "Thank you! And my number is… a secret!"),
      line("sua", k("하하! 지연 씨!"), "Ha-ha! Oh, Jiyeon!"),
    ],
    gist: choice("koho2-d1", "What does Jiyeon say about her number?", [
      ["It's a secret.", true],
      ["010-1234-5678.", false],
      ["She doesn't have a phone.", false],
    ]),
  },
  grammar: [
    {
      title: "Sino-Korean numbers: il, i, sam",
      paragraphs: [
        "Il 1, i 2, sam 3, sa 4, o 5, yuk 6, chil 7, pal 8, gu 9, sip 10.",
        "After that you just put them together: sibil is 11 (ten-one), isip is 20 (two-ten), samsip is 30, isibo is 25.",
      ],
      examples: [
        { ru: k("십일"), en: "eleven" },
        { ru: k("이십"), en: "twenty" },
      ],
    },
  ],
  tasks: [
    choice("koho2-t1", "How do you say “twenty”?", [
      [k("이십"), true],
      [k("십이"), false],
      [k("이백"), false],
    ], { skill: "grammar" }),
    listen("koho2-t2", "Listen. What number is it?", k("칠"), [
      ["7", true],
      ["8", false],
      ["1", false],
    ]),
    match("koho2-t3", "Match the pairs.", [
      [k("일"), "1"],
      [k("삼"), "3"],
      [k("팔"), "8"],
      [k("십"), "10"],
    ], { skill: "words" }),
    spell("koho2-t4", "Build “phone number” from syllables.", k("전화번호"), ["존", "하"]),
    speak("koho2-t5", PHONE_Q, PHONE_A, "010-1234-5678.", { help: "Say a phone number out loud. It can be your own, one digit at a time." }),
    script("koho2-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Sua", text: k("커피 있어요?") },
      { speaker: "You", answer: ISSEOYO, options: [ISSEOYO, k("십"), k("비밀이에요!")] },
      { speaker: "Jiyeon", text: EODI },
      { speaker: "You", answer: LONDON, options: [LONDON, EOPSSEOYO, PHONE_A] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sigye",
    itemName: "A wall clock",
    itemNameRu: k("시계"),
    ru: k("우와, 시계예요!"),
    en: "Wow, a clock!",
    a11y: "A round wall clock shaped like a cat's face; the hands are whiskers.",
    image: p("sigye"),
    steps: ["Sua hangs a round clock on the wall.", "The clock face is a cat's face.", "The hands are whiskers!", "Murzik learns his numbers with it."],
    bridge: "In the morning Murzik goes to the café for a coffee on his own. But how much is it?",
  },
};

const hong3: Lesson = {
  id: "ko-a1-hongdae-3",
  level: "A1",
  cityId: "ko-hongdae",
  number: 3,
  title: "How much is it?",
  minutes: 7,
  goals: ["Ask the price", "Understand a price in won", "Say “expensive” and “cheap”"],
  vocabNote: "Won is Korean money. Baek is a hundred, cheon is a thousand, man is ten thousand. Hana means “one”: that's a native Korean number, more about them in Suwon.",
  vocab: [
    v("koho3-1", EOLMA, "How much is it?", "Murzik points at a cup of coffee.", "", p("l3-1")),
    v("koho3-2", k("원"), "won (Korean money)", "Coins and banknotes in a palm.", "", p("l3-2")),
    v("koho3-3", k("백, 천"), "a hundred, a thousand", "A shiny 100-won coin and a blue 1000-won note.", "", p("l3-3")),
    v("koho3-5", k("만"), "ten thousand", "A green 10,000-won note.", "", p("l3-5")),
    v("koho3-6", k("비싸요."), "It's expensive.", "Murzik clutches his head.", "", p("l3-6")),
    v("koho3-4", k("싸요."), "It's cheap.", "Murzik happily shows a coin: cheap!", "", p("l3-4")),
    v("koho3-7", CARD, "Can I pay by card?", "Murzik holds out a little card.", "", p("l3-7")),
  ],
  letters: [
    letter("ㅙ", "“wae”: ㅗ and ㅐ together", CARD, "Can I pay by card?"),
  ],
  dialogue: {
    title: "Murzik pays by himself",
    note: "Amerikano hana juseyo means “one americano, please”. Seoureun means “in Seoul (as for Seoul)”. Dwaeyo means “it's possible, you can”.",
    lines: [
      line("murzik", k("아메리카노 하나 주세요."), "One americano, please."),
      line("waiter", k("사천오백 원이에요."), "Four thousand five hundred won."),
      line("murzik", k("우와, 비싸요!"), "Wow, that's expensive!"),
      line("sua", k("서울은 커피가 비싸요."), "Coffee is expensive in Seoul."),
      line("murzik", CARD, "Can I pay by card?"),
      line("waiter", k("네, 돼요!"), "Yes, you can!"),
    ],
    gist: choice("koho3-d1", "How much is the americano?", [
      ["4,500 won.", true],
      ["1,000 won.", false],
      ["10,000 won.", false],
    ]),
  },
  grammar: [
    {
      title: "Big numbers: baek, cheon, man",
      paragraphs: [
        "Baek is 100, cheon is 1,000, man is 10,000. The number of hundreds or thousands goes before them: sacheon is 4,000, obaek is 500. Together: sacheonobaek won is 4,500 won.",
        "One thousand is simply cheon, without il: cheon won is 1,000 won, man won is 10,000 won.",
      ],
      examples: [
        { ru: k("천 원"), en: "1,000 won" },
        { ru: k("이천 원"), en: "2,000 won" },
      ],
    },
  ],
  tasks: [
    choice("koho3-t1", "How do you say “2,000 won”?", [
      [k("이천 원"), true],
      [k("이백 원"), false],
      [k("이만 원"), false],
    ], { skill: "grammar" }),
    listen("koho3-t2", "Listen. How much is it?", k("만 원이에요."), [
      ["10,000 won.", true],
      ["1,000 won.", false],
      ["100 won.", false],
    ]),
    match("koho3-t3", "Match the pairs.", [
      [k("백"), "a hundred"],
      [k("천"), "a thousand"],
      [k("만"), "ten thousand"],
      [k("원"), "won"],
    ], { skill: "words" }),
    spell("koho3-t4", "Build the word “how much” from syllables.", k("얼마"), ["모", "알"]),
    speak("koho3-t5", k("사천오백 원이에요."), CARD, "Can I pay by card?", { help: "The barista tells you the price. Ask out loud whether you can pay by card." }),
    script("koho3-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Jiyeon", text: PHONE_Q },
      { speaker: "You", answer: PHONE_A, options: [PHONE_A, k("비싸요."), ANNYEONG] },
      { speaker: "Sua", text: k("물 있어요?") },
      { speaker: "You", answer: EOPSSEOYO, options: [EOPSSEOYO, k("천 원"), CARD] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "piggy",
    itemName: "A piggy bank",
    itemNameRu: k("저금통"),
    ru: k("우와, 저금통이에요!"),
    en: "Wow, a piggy bank!",
    a11y: "A pink piggy bank on a shelf, a little pile of 100-won coins next to it.",
    image: p("piggy"),
    steps: ["Murzik carries his change home.", "Sua gives him a pink piggy bank.", "Clink! The first 100-won coin.", "Maybe there'll be enough for his own coffee?"],
    bridge: "Tomorrow Sua teaches Murzik to ride the metro. The main thing is not to get lost!",
  },
};

const hong4: Lesson = {
  id: "ko-a1-hongdae-4",
  level: "A1",
  cityId: "ko-hongdae",
  number: 4,
  title: "Where's the exit?",
  minutes: 7,
  goals: ["Ask “Where is …?”", "Answer “here” and “over there”", "Find your way in the metro"],
  vocabNote: "Eodiyeyo? means “where is it?”. Before it, after a consonant you add i (역이 — yeogi), after a vowel ga (출구가 — chulguga).",
  vocab: [
    v("koho4-1", TOILET, "Where's the toilet?", "Murzik shifts from paw to paw.", "", p("l4-1")),
    v("koho4-2", k("역"), "station", "The entrance to a metro station, steps going down.", "", p("l4-2")),
    v("koho4-3", k("지하철"), "metro, subway", "A shiny metro train pulls up to the platform.", "", p("l4-3")),
    v("koho4-4", k("출구"), "exit", "A yellow exit sign with an arrow.", "", p("l4-4")),
    v("koho4-5", k("여기예요."), "It's here.", "Sua stamps her foot: here!", "", p("l4-5")),
    v("koho4-6", JEOGI, "It's over there.", "Sua points far away.", "", p("l4-6")),
    v("koho4-7", k("지하철 쉬워요!"), "The metro is easy!", "Murzik proudly holds a metro map.", "", p("l4-7")),
  ],
  letters: [
    letter("ㅟ", "“wi”: ㅜ and ㅣ together", k("지하철 쉬워요!"), "The metro is easy!"),
  ],
  dialogue: {
    title: "Hongdae station",
    note: "Hongdaeipguyeok is Hongik University station, “Hongdae” for short. Gu beon chulgu means “exit number nine”: exit numbers use Sino-Korean numbers.",
    lines: [
      line("murzik", k("수아 씨, 홍대입구역이 어디예요?"), "Sua, where's Hongdae station?"),
      line("sua", k("여기예요!"), "It's here!"),
      line("murzik", k("그럼 출구가 어디예요?"), "And where's the exit?"),
      line("sua", k("저기예요. 구 번 출구!"), "Over there. Exit number nine!"),
      line("murzik", k("그런데… 화장실이 어디예요?"), "Um… where's the toilet?"),
      line("sua", k("하하, 화장실은 저기예요!"), "Ha-ha, the toilet is over there!"),
      line("murzik", k("지하철 쉬워요!"), "The metro is easy!"),
    ],
    gist: choice("koho4-d1", "Which exit do they take?", [
      ["Exit nine.", true],
      ["Exit one.", false],
      ["Exit ten.", false],
    ]),
  },
  grammar: [
    {
      title: "Where is …? — …i / ga eodiyeyo?",
      paragraphs: [
        "To ask where something is, add i (after a consonant) or ga (after a vowel) to the word, then eodiyeyo?",
        "Yeok ends in a consonant: yeogi eodiyeyo? Chulgu ends in a vowel: chulguga eodiyeyo? The answer: yeogiyeyo — it's here, jeogiyeyo — it's over there.",
      ],
      examples: [
        { ru: k("역이 어디예요?"), en: "Where's the station?" },
        { ru: k("출구가 어디예요?"), en: "Where's the exit?" },
      ],
    },
  ],
  tasks: [
    choice("koho4-t1", "How do you ask “Where's the exit?”", [
      [k("출구가 어디예요?"), true],
      [k("출구이 어디예요?"), false],
      [k("출구가 얼마예요?"), false],
    ], { skill: "grammar" }),
    listen("koho4-t2", "Listen. Where's the toilet?", JEOGI, [
      ["It's over there.", true],
      ["It's here.", false],
      ["In the metro.", false],
    ]),
    match("koho4-t3", "Match the pairs.", [
      [k("역"), "station"],
      [k("지하철"), "metro, subway"],
      [k("출구"), "exit"],
      [k("화장실"), "toilet"],
    ], { skill: "words" }),
    spell("koho4-t4", "Build the word “metro” from syllables.", k("지하철"), ["자", "찰"]),
    speak("koho4-t5", TOILET, JEOGI, "It's over there.", { help: "Someone asks you where the toilet is. Point and answer out loud." }),
    script("koho4-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Waiter", text: k("사천오백 원이에요.") },
      { speaker: "You", answer: CARD, options: [CARD, k("여기예요."), k("우유")] },
      { speaker: "Jiyeon", text: PHONE_Q },
      { speaker: "You", answer: PHONE_A, options: [PHONE_A, JEOGI, EOPSSEOYO] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "usan",
    itemName: "A clear umbrella",
    itemNameRu: k("우산"),
    ru: k("우와, 우산이에요!"),
    en: "Wow, an umbrella!",
    a11y: "A small clear umbrella dries open by the door, raindrops on it.",
    image: p("usan"),
    steps: ["At the metro exit it starts to rain.", "Sua buys Murzik a clear umbrella.", "Through it you can see both the rain and the lights.", "At home the umbrella dries by the door."],
    bridge: "In the evening street musicians sing on the streets of Hongdae. And one voice sounds familiar…",
  },
};

const hong5: Lesson = {
  id: "ko-a1-hongdae-5",
  level: "A1",
  cityId: "ko-hongdae",
  number: 5,
  title: "A street concert",
  minutes: 7,
  goals: ["Say “It's really great!”", "Say “very” and “too”", "Ask for “One more time!”"],
  vocabNote: "Jinjja means “really, truly”: jinjja joayo means “it's really great”. Neomu means “very, too”. Tto and han beon deo mean “again, one more time”.",
  vocab: [
    v("koho5-1", k("노래"), "song", "A street musician sings with a guitar, a crowd around him.", "", p("l5-1")),
    v("koho5-2", JINJJA, "It's really great!", "Murzik claps his paws.", "", p("l5-2")),
    v("koho5-3", k("진짜요?"), "Really?", "Murzik opens his eyes wide.", "", p("l5-3")),
    v("koho5-4", k("너무"), "very, too", "A huge cup of bubble tea — far too big for a cat.", "", p("l5-4")),
    v("koho5-5", k("또"), "again, more", "The musician lifts his guitar again.", "", p("l5-5")),
    v("koho5-6", k("한 번 더!"), "One more time!", "The crowd raise their hands and ask for more.", "", p("l5-6")),
    v("koho5-7", k("박수!"), "A round of applause!", "Everyone claps, Murzik loudest of all.", "", p("l5-7")),
  ],
  letters: [
    letter("ㄸ", "“tt”: a double ㄷ, said tense and sharp", k("또"), "again"),
    letter("ㅉ", "“jj”: a double ㅈ, said tense and sharp", k("진짜요?"), "Really?"),
  ],
  dialogue: {
    title: "Who's singing?",
    note: "Jeo saram means “that person over there”. Swit! means “Shh!”.",
    lines: [
      line("murzik", k("우와, 노래 진짜 좋아요!"), "Wow, the song is really great!"),
      line("sua", k("저 사람… 민호 씨예요!"), "That person over there… it's Minho!"),
      line("murzik", k("진짜요?"), "Really?"),
      line("minho", k("쉿! 비밀이에요!"), "Shh! It's a secret!"),
      line("sua", k("민호 씨, 한 번 더!"), "Minho, one more time!"),
      line("minho", k("좋아요!"), "All right!"),
      line("murzik", k("박수!"), "A round of applause!"),
    ],
    gist: choice("koho5-d1", "Who is singing in the street?", [
      ["Minho.", true],
      ["Jiyeon.", false],
      ["Director Park.", false],
    ]),
  },
  grammar: [
    {
      title: "Very and really: neomu, jinjja",
      paragraphs: [
        "Neomu means “very” or “too”: neomu joayo means very good, neomu bissayo means too expensive.",
        "Jinjja means “really, truly”: jinjja joayo means really great. Jinjjayo? means “Really?”. Tto and han beon deo mean “one more time”.",
      ],
      examples: [
        { ru: k("너무 좋아요!"), en: "It's so great!" },
        { ru: k("또 만나요!"), en: "See you again!" },
      ],
    },
  ],
  tasks: [
    choice("koho5-t1", "How do you say “It's too expensive!”?", [
      [k("너무 비싸요!"), true],
      [k("너무 싸요!"), false],
      [k("진짜요?"), false],
    ], { skill: "grammar" }),
    listen("koho5-t2", "Listen. What does Sua shout?", k("한 번 더!"), [
      ["One more time!", true],
      ["Really?", false],
      ["The song!", false],
    ]),
    match("koho5-t3", "Match the pairs.", [
      [k("노래"), "song"],
      [k("또"), "again"],
      [k("너무"), "very"],
      [k("진짜"), "really"],
    ], { skill: "words" }),
    spell("koho5-t4", "Build the word “song” from syllables.", k("노래"), ["누", "레"]),
    speak("koho5-t5", k("노래 좋아요?"), JINJJA, "It's really great!", { help: "Minho asks if you liked the song. Answer out loud." }),
    script("koho5-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Sua", text: k("출구가 어디예요?") },
      { speaker: "You", answer: JEOGI, options: [JEOGI, k("박수!"), k("천 원")] },
      { speaker: "Jiyeon", text: EOLMA },
      { speaker: "You", answer: k("천 원이에요."), options: [k("천 원이에요."), k("진짜요?"), k("여기예요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gita",
    itemName: "A little guitar",
    itemNameRu: k("기타"),
    ru: k("우와, 기타예요!"),
    en: "Wow, a guitar!",
    a11y: "A small wooden ukulele leans against the beanbag chair, a kitten sticker on it.",
    image: p("gita"),
    steps: ["After the concert Minho gives Murzik a little guitar.", "“This is my first guitar. Don't tell anyone!”", "Murzik puts a kitten sticker on it.", "Strum! The first note."],
    bridge: "Tomorrow they film the café scene. Murzik is a customer, Jiyeon is the waitress.",
  },
};

const hong6: Lesson = {
  id: "ko-a1-hongdae-6",
  level: "A1",
  cityId: "ko-hongdae",
  number: 6,
  title: "The café scene",
  minutes: 7,
  goals: ["Ask “Is there a free seat?”", "Say “delicious” and “not tasty”", "Call the waiter"],
  vocabNote: "Jeogiyo! means “Excuse me!”: that's how you call a waiter. Masisseoyo means “it's delicious” (literally “there is taste”), madeopseoyo means “it's not tasty” (literally “there is no taste”).",
  vocab: [
    v("koho6-1", k("저기요, 자리 있어요?"), "Excuse me, is there a free seat?", "Murzik peeks into a cosy café.", "", p("l6-1")),
    v("koho6-2", k("여기 앉으세요."), "Please sit here.", "Jiyeon in an apron pulls out a chair.", "", p("l6-2")),
    v("koho6-3", k("메뉴"), "menu", "A menu with pictures of desserts.", "", p("l6-3")),
    v("koho6-4", k("맛있어요!"), "It's delicious!", "Murzik, cream on his whiskers, screws up his eyes with pleasure.", "", p("l6-4")),
    v("koho6-5", k("맛없어요."), "It's not tasty.", "Murzik wrinkles his nose at a lemon.", "", p("l6-5")),
    v("koho6-6", k("웨이터"), "waiter", "A waiter with a tray, playing a part from the script.", "", p("l6-6")),
    v("koho6-7", k("재미있어요!"), "It's fun! It's interesting!", "Murzik laughs together with the film crew.", "", p("l6-7")),
  ],
  letters: [
    letter("ㅞ", "“we”: ㅜ and ㅔ together", k("웨이터"), "waiter"),
  ],
  dialogue: {
    title: "The take in the café",
    note: "This is a scene from the series: Murzik is a customer, Jiyeon is the waitress. Masisseoyo? as a question means “Is it good?”.",
    lines: [
      line("director", k("레디, 액션!"), "Ready, action!"),
      line("murzik", k("저기요, 자리 있어요?"), "Excuse me, is there a free seat?"),
      line("jiyeon", k("네, 여기 앉으세요. 메뉴 여기요."), "Yes, please sit here. Here's the menu."),
      line("murzik", k("케이크 주세요."), "Cake, please."),
      line("jiyeon", k("여기요. 맛있어요?"), "Here you are. Is it good?"),
      line("murzik", MASISSEOYO, "Yes, it's really delicious!"),
      line("director", k("컷! 좋아요!"), "Cut! Great!"),
    ],
    gist: choice("koho6-d1", "What does Murzik order in the scene?", [
      ["Cake.", true],
      ["Coffee.", false],
      ["Fish.", false],
    ]),
  },
  grammar: [
    {
      title: "Delicious and not tasty: masisseoyo / madeopseoyo",
      paragraphs: [
        "Mat means “taste”. Mat + isseoyo = masisseoyo — “delicious” (there is taste). Mat + eopseoyo = madeopseoyo — “not tasty” (there is no taste).",
        "The same way: jaemi (“interest, fun”) + isseoyo = jaemiisseoyo — “it's interesting, it's fun”.",
      ],
      examples: [
        { ru: k("케이크 맛있어요."), en: "The cake is delicious." },
        { ru: k("드라마 재미있어요!"), en: "The drama is fun!" },
      ],
    },
  ],
  tasks: [
    choice("koho6-t1", "How do you say “It's not tasty”?", [
      [k("맛없어요."), true],
      [k("맛있어요!"), false],
      [k("없어요."), false],
    ], { skill: "grammar" }),
    listen("koho6-t2", "Listen. What does Jiyeon say?", k("여기 앉으세요."), [
      ["Please sit here.", true],
      ["Is there a free seat?", false],
      ["Here's the menu.", false],
    ]),
    match("koho6-t3", "Match the pairs.", [
      [k("메뉴"), "menu"],
      [k("자리"), "seat"],
      [k("맛있어요!"), "It's delicious!"],
      [k("맛없어요."), "It's not tasty."],
    ], { skill: "words" }),
    spell("koho6-t4", "Build the word “menu” from syllables.", k("메뉴"), ["매", "누"]),
    speak("koho6-t5", k("맛있어요?"), MASISSEOYO, "Yes, it's really delicious!", { help: "The waitress asks if it's good. Answer out loud." }),
    script("koho6-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Minho", text: k("노래 좋아요?") },
      { speaker: "You", answer: JINJJA, options: [JINJJA, k("맛없어요."), k("출구")] },
      { speaker: "Sua", text: TOILET },
      { speaker: "You", answer: JEOGI, options: [JEOGI, k("메뉴"), ISSEOYO] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mug",
    itemName: "A kitten mug",
    itemNameRu: k("머그컵"),
    ru: k("우와, 머그컵이에요!"),
    en: "Wow, a mug!",
    a11y: "A white mug with a ginger cat painted on it and little ears on the rim stands on the windowsill.",
    image: p("mug"),
    steps: ["The café owner is happy the series is being filmed in her café.", "She gives Murzik a mug.", "It has a ginger cat on it — Murzik's double!", "And on the rim, two little ears."],
    bridge: "The last evening in Hongdae. Tomorrow, Suwon. Murzik needs to top up his metro card.",
  },
};

const hong7: Lesson = {
  id: "ko-a1-hongdae-7",
  level: "A1",
  cityId: "ko-hongdae",
  number: 7,
  title: "See you, Hongdae!",
  minutes: 8,
  goals: ["Top up a metro card", "Answer briefly and politely: …yo", "Remember everything from Hongdae"],
  vocabNote: "A short polite answer is a word + yo (after a consonant iyo): keopiyo means “coffee”, man woniyo means “ten thousand won”.",
  vocab: [
    v("koho7-1", k("교통카드"), "transport card", "A card for the metro and buses with a kitten sticker.", "", p("l7-1")),
    v("koho7-2", k("충전해 주세요."), "Please top it up.", "Murzik holds out his card to the assistant in a convenience store.", "", p("l7-2")),
    v("koho7-3", k("만 원이요."), "Ten thousand won.", "Murzik puts a green note on the counter.", "", p("l7-3")),
    v("koho7-4", k("얘기해 주세요."), "Please tell me about it.", "Murzik listens to Sua, his cheek resting on his paw.", "", p("l7-4")),
    v("koho7-5", k("재미있었어요!"), "That was fun!", "Murzik and Sua laugh on a Hongdae street at night.", "", p("l7-5")),
    v("koho7-6", k("또 오세요!"), "Come again!", "The café owner waves from the door.", "", p("l7-6")),
    v("koho7-7", k("내일은 수원이에요!"), "Tomorrow, Suwon!", "Sua points to a city with a fortress on the map.", "", p("l7-7")),
  ],
  letters: [
    letter("ㅒ", "“yae”: like ㅐ, but with two dashes; it is rare", k("얘기해 주세요."), "Please tell me about it.", "Now you know all the Korean letters!"),
  ],
  dialogue: {
    title: "The last evening",
    note: "Eolmayo? means “How much?” (short and polite). Jaemiisseosseoyo means “it was fun”: the past tense comes in Andong.",
    lines: [
      line("murzik", k("교통카드 충전해 주세요."), "Please top up my transport card."),
      line("seller", k("얼마요?"), "How much?"),
      line("murzik", k("만 원이요."), "Ten thousand won."),
      line("seller", k("네, 여기요."), "All right, here you are."),
      line("sua", k("무르직 씨, 오늘 재미있었어요?"), "Murzik, was today fun?"),
      line("murzik", k("네! 진짜 재미있었어요!"), "Yes! It was really fun!"),
      line("sua", k("내일은 수원이에요!"), "And tomorrow, Suwon!"),
    ],
    gist: choice("koho7-d1", "How much does Murzik put on his card?", [
      ["10,000 won.", true],
      ["1,000 won.", false],
      ["4,500 won.", false],
    ]),
  },
  grammar: [
    {
      title: "All together. A short polite answer",
      paragraphs: [
        "You can already: there is and there isn't (isseoyo / eopseoyo), numbers and prices (il, i, sam; baek, cheon, man), “where?” (…i / ga eodiyeyo?), “very” and “really” (neomu, jinjja).",
        "New: a short polite answer is one word + yo (after a consonant iyo): keopiyo means “coffee”, man woniyo means “ten thousand won”.",
      ],
      examples: [
        { ru: k("커피요."), en: "Coffee." },
        { ru: k("만 원이요."), en: "Ten thousand won." },
      ],
    },
  ],
  tasks: [
    listen("koho7-t1", "Listening test. What does the café have, and how much is the coffee?", k("카페에 케이크 있어요. 커피는 사천 원이에요."), [
      ["They have cake, the coffee is 4,000 won.", true],
      ["They have no cake, the coffee is 4,000 won.", false],
      ["They have cake, the coffee is 400 won.", false],
    ]),
    choice("koho7-t2", "How do you ask “Where's the station?”", [
      [k("역이 어디예요?"), true],
      [k("역가 어디예요?"), false],
      [k("역이 얼마예요?"), false],
    ], { skill: "grammar" }),
    match("koho7-t3", "Match the pairs.", [
      [k("있어요"), "there is"],
      [k("없어요"), "there isn't"],
      [k("비싸요"), "expensive"],
      [k("싸요"), "cheap"],
    ], { skill: "words" }),
    choice("koho7-t4", "Which syllable has the double letter ㄸ (tt)?", [
      ["떡", true],
      ["덕", false],
      ["턱", false],
    ], { skill: "letters" }),
    speak("koho7-t5", k("얼마요?"), k("만 원이요."), "Ten thousand won.", { help: "The shop assistant asks how much to put on the card. Answer briefly and politely." }),
    script("koho7-t6", "Remember all of Hongdae. Finish the conversations.", [
      { speaker: "Waiter", text: k("어서 오세요!") },
      { speaker: "You", answer: k("저기요, 자리 있어요?"), options: [k("저기요, 자리 있어요?"), k("또 오세요!"), k("십")] },
      { speaker: "Jiyeon", text: PHONE_Q },
      { speaker: "You", answer: PHONE_A, options: [PHONE_A, k("맛없어요."), JEOGI] },
      { speaker: "Waiter", text: k("사천오백 원이에요.") },
      { speaker: "You", answer: CARD, options: [CARD, k("박수!"), k("메뉴")] },
      { speaker: "Sua", text: k("재미있었어요?") },
      { speaker: "You", answer: k("네! 진짜 재미있었어요!"), options: [k("네! 진짜 재미있었어요!"), EOPSSEOYO, k("출구가 어디예요?")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tcard",
    itemName: "A transport card with a kitten",
    itemNameRu: k("교통카드"),
    ru: k("우와, 교통카드예요!"),
    en: "Wow, a transport card!",
    a11y: "A small transport card on a lanyard with a kitten charm, a guitar sticker on it.",
    image: p("tcard"),
    steps: ["Sua puts Murzik's card on a lanyard.", "Minho sticks a guitar sticker on it.", "Now Murzik rides the metro on his own.", "The second keepsake from the shoot!"],
    bridge: "In the morning, the metro to Suwon. There's an old fortress there, and a scene with a real bow and arrows!",
  },
};

const story: CityStory = {
  home: {
    name: "A little room above the café",
    nameRu: k("카페 위 작은 방"),
    image: p("home"),
    a11y: "An empty little room above the café: a wooden floor, a window onto a busy street with signs and lights. Murzik's suitcase in the middle.",
  },
  keepsakeId: "tcard",
  welcomeRu: k("안녕, 홍대!"),
  welcomeEn: "Hello, Hongdae!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Sua on a bright street in Hongdae: street musicians, cafés, signs and lights.",
  departureImage: p("departure"),
  departureA11y: "The café owner waves to Murzik from the door; Minho in a cap hides behind her and waves too.",
  finale: [
    {
      image: p("gita"),
      a11y: "Evening. Murzik sits on the windowsill above the café quietly playing the little guitar, the lights of Hongdae below.",
      lines: [
        { en: "The last evening in Hongdae. Murzik plays Minho's guitar." },
        { ru: k("진짜 재미있었어요!"), en: "It was really fun!" },
        { en: "The café scene went well. Director Park says that in Suwon Murzik will have a scene with a real bow!" },
      ],
    },
    {
      image: p("home"),
      a11y: "Murzik walks around his little room above the café, which he furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks around his little room above the café." },
        { en: "He takes with him the transport card with a kitten. The second keepsake from the shoot." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy.",
      lines: [
        { en: "Hongdae is done!" },
        { en: "7 / 7 lessons" },
        { ru: k("한글 다 알아요!"), en: "I know all the Korean letters!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "The café owner and Minho wave goodbye.",
      lines: [
        { ru: k("또 오세요!"), en: "Come again!" },
        { ru: k("내일은 수원이에요!"), en: "Next stop: Suwon!" },
      ],
    },
    {
      image: p("metro"),
      a11y: "Murzik taps his transport card on the metro gate himself; Sua gives him a thumbs up.",
      lines: [{ en: "Hongdae → Suwon" }],
    },
    {
      image: pic("ko/suwon/arrival"),
      a11y: "Murzik and Sua at the old stone gate of the fortress in Suwon; colourful banners on poles flutter above the wall.",
      lines: [
        { ru: k("우와, 수원이에요!"), en: "Wow, it's Suwon!" },
        { en: "There's an old fortress here." },
      ],
    },
  ],
};

export const koHongdaeEn = {
  id: "ko-hongdae",
  name: "Hongdae",
  nameKo: k("홍대"),
  lessons: [hong1, hong2, hong3, hong4, hong5, hong6, hong7],
  story,
};
