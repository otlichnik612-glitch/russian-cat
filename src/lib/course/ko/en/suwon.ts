import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, k, line, listen, match, script, speak, spell, v } from "./make";

/* Suwon · “How many? Where?” · the old fortress: native Korean numbers 1–10, counting words (gae, myeong, jan, sal), “on, under, behind, next to”, “there is … there”. The bow scene. */

const p = (name: string) => pic(`ko/suwon/${name}`);

const CARD = k("카드 돼요?");
const JEOGI = k("저기예요.");
const ISSEOYO = k("네, 있어요.");
const MYEOT_GAE = k("몇 개예요?");
const SE_GAE = k("세 개예요.");
const DASEOT_GAE = k("다섯 개예요.");
const MYEOT_GAE_ISS = k("몇 개 있어요?");
const YEOL_GAE = k("열 개 있어요.");
const MYEOT_MYEONG = k("몇 명이에요?");
const DU_MYEONG = k("두 명이에요.");
const SE_MYEONG = k("세 명이에요.");
const HWAL_EODI = k("활이 어디에 있어요?");
const UIJA_WI = k("의자 위에 있어요.");
const UIJA_DWI = k("의자 뒤에 있어요.");
const MWOGA = k("성 안에 뭐가 있어요?");
const SIJANG = k("시장이 있어요.");
const MYEOT_SAL = k("몇 살이에요?");
const SEUMU_SAL = k("스무 살이에요.");

const suwon1: Lesson = {
  id: "ko-a1-suwon-1",
  level: "A1",
  cityId: "ko-suwon",
  number: 1,
  title: "Hana, dul, set",
  minutes: 7,
  goals: ["Count from 1 to 5 in native Korean numbers", "Ask “How many?”", "Say “two things”, “three things”"],
  vocabNote: "The second set of numbers is native Korean: hana, dul, set, net, daseot. It is used to count things, people and age. Before the word gae (“item”) hana becomes han, dul becomes du, set becomes se, net becomes ne.",
  vocab: [
    v("kosu1-1", k("하나"), "one", "One arrow in Minho's hand.", "", p("l1-1")),
    v("kosu1-2", k("둘"), "two", "Two arrows.", "", p("l1-2")),
    v("kosu1-3", k("셋"), "three", "Three arrows.", "", p("l1-3")),
    v("kosu1-4", k("넷"), "four", "Four arrows in a quiver.", "", p("l1-4")),
    v("kosu1-5", k("다섯"), "five", "Five arrows fanned out.", "", p("l1-5")),
    v("kosu1-6", k("화살"), "arrow", "An arrow with bright feathers.", "", p("l1-6")),
    v("kosu1-7", MYEOT_GAE, "How many are there?", "Murzik points at the quiver and scratches his head.", "", p("l1-7")),
  ],
  dialogue: {
    title: "Arrows for the scene",
    note: "Ne gae means “four of them”. Hana eopseoyo means “one is missing”. Yeogi isseoyo means “here it is (it's here)”.",
    lines: [
      line("minho", k("화살 하나, 둘, 셋…"), "Arrows: one, two, three…"),
      line("murzik", MYEOT_GAE, "How many are there?"),
      line("minho", DASEOT_GAE, "Five."),
      line("sua", k("아니요, 네 개예요!"), "No, four!"),
      line("minho", k("아, 하나 없어요!"), "Oh, one is missing!"),
      line("murzik", k("여기 있어요!"), "Here it is!"),
    ],
    gist: choice("kosu1-d1", "How many arrows did Sua count?", [
      ["Four.", true],
      ["Five.", false],
      ["Three.", false],
    ]),
  },
  grammar: [
    {
      title: "Native Korean numbers: hana, dul, set",
      paragraphs: [
        "Hana 1, dul 2, set 3, net 4, daseot 5. This is how you count out loud: hana, dul, set!",
        "When you count things, you put gae (“item”) after the number. The first four numbers get shorter: han gae, du gae, se gae, ne gae. After that nothing changes: daseot gae.",
      ],
      examples: [
        { ru: k("하나, 둘, 셋!"), en: "One, two, three!" },
        { ru: k("두 개"), en: "two things" },
      ],
    },
  ],
  tasks: [
    choice("kosu1-t1", "How do you say “three things”?", [
      [k("세 개"), true],
      [k("셋 개"), false],
      [k("삼 개"), false],
    ], { skill: "grammar" }),
    listen("kosu1-t2", "Listen. What number is it?", k("넷"), [
      ["4", true],
      ["3", false],
      ["5", false],
    ]),
    match("kosu1-t3", "Match the pairs.", [
      [k("하나"), "1"],
      [k("둘"), "2"],
      [k("셋"), "3"],
      [k("다섯"), "5"],
    ], { skill: "words" }),
    spell("kosu1-t4", "Build the word “five” from syllables.", k("다섯"), ["더", "삿"]),
    speak("kosu1-t5", MYEOT_GAE, SE_GAE, "Three.", { help: "Minho shows three arrows and asks how many there are. Answer out loud." }),
    script("kosu1-t6", "Remember Hongdae. Finish the conversations.", [
      { speaker: "Waiter", text: k("사천오백 원이에요.") },
      { speaker: "You", answer: CARD, options: [CARD, k("하나"), k("화살")] },
      { speaker: "Sua", text: k("역이 어디예요?") },
      { speaker: "You", answer: JEOGI, options: [JEOGI, k("둘"), MYEOT_GAE] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bangseok",
    itemName: "A floor cushion",
    itemNameRu: k("방석"),
    ru: k("우와, 방석이에요!"),
    en: "Wow, a cushion!",
    a11y: "A square silk floor cushion, red with a blue border, lies by the window of the hanok.",
    image: p("bangseok"),
    steps: ["In a hanok people sit right on the floor.", "The lady of the house brings a silk cushion.", "A red one, with a blue border.", "Murzik sits on it like a real guest."],
    bridge: "In the evening lanterns light up on the fortress wall. How many are there? He'll have to count past five!",
  },
};

const suwon2: Lesson = {
  id: "ko-a1-suwon-2",
  level: "A1",
  cityId: "ko-suwon",
  number: 2,
  title: "From six to ten",
  minutes: 7,
  goals: ["Count from 6 to 10 in native Korean numbers", "Ask “How many are there?”", "Answer “There are ten”"],
  vocabNote: "Yeoseot 6, ilgop 7, yeodeol 8, ahop 9, yeol 10. Myeot gae isseoyo? means “How many are there?”.",
  vocab: [
    v("kosu2-1", k("여섯"), "six", "Six lanterns on the wall.", "", p("l2-1")),
    v("kosu2-2", k("일곱"), "seven", "Seven steps up to the gate.", "", p("l2-2")),
    v("kosu2-3", k("여덟"), "eight", "Eight little windows in the tower.", "", p("l2-3")),
    v("kosu2-4", k("아홉"), "nine", "Nine stones in a row.", "", p("l2-4")),
    v("kosu2-5", k("열"), "ten", "Ten lanterns glowing on the wall.", "", p("l2-5")),
    v("kosu2-6", k("등"), "lantern", "A round paper lantern glowing orange.", "", p("l2-6")),
    v("kosu2-7", MYEOT_GAE_ISS, "How many are there?", "Murzik looks at a row of lanterns.", "", p("l2-7")),
  ],
  dialogue: {
    title: "Lanterns on the wall",
    note: "Deungi is “lanterns” with the particle i. Hananeun darieyo means “one of them is the moon”. Dal is “moon”.",
    lines: [
      line("murzik", k("등이 몇 개 있어요?"), "How many lanterns are there here?"),
      line("sua", k("하나, 둘, 셋… 열 개 있어요!"), "One, two, three… There are ten!"),
      line("murzik", k("아니요, 아홉 개예요!"), "No, nine!"),
      line("sua", k("진짜요?"), "Really?"),
      line("murzik", k("하나는 달이에요!"), "One of them is the moon!"),
    ],
    gist: choice("kosu2-d1", "Why did Murzik count nine lanterns?", [
      ["One “lantern” is the moon.", true],
      ["One lantern went out.", false],
      ["He can't count.", false],
    ]),
  },
  grammar: [
    {
      title: "Native Korean numbers: from 6 to 10",
      paragraphs: [
        "Yeoseot 6, ilgop 7, yeodeol 8, ahop 9, yeol 10. These numbers don't change before gae: yeoseot gae, ilgop gae, yeol gae.",
        "The question “how many?” is myeot: myeot gaeyeyo? or myeot gae isseoyo? The answer: yeol gae isseoyo — “there are ten”.",
      ],
      examples: [
        { ru: k("일곱 개"), en: "seven things" },
        { ru: k("열 개"), en: "ten things" },
      ],
    },
  ],
  tasks: [
    choice("kosu2-t1", "How do you say “eight things”?", [
      [k("여덟 개"), true],
      [k("팔 개"), false],
      [k("여덟 명"), false],
    ], { skill: "grammar" }),
    listen("kosu2-t2", "Listen. What number is it?", k("아홉"), [
      ["9", true],
      ["8", false],
      ["10", false],
    ]),
    match("kosu2-t3", "Match the pairs.", [
      [k("여섯"), "6"],
      [k("일곱"), "7"],
      [k("여덟"), "8"],
      [k("열"), "10"],
    ], { skill: "words" }),
    spell("kosu2-t4", "Build the word “seven” from syllables.", k("일곱"), ["알", "곰"]),
    speak("kosu2-t5", MYEOT_GAE_ISS, YEOL_GAE, "There are ten.", { help: "Sua asks how many lanterns there are. Count them and answer out loud." }),
    script("kosu2-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Minho", text: k("화살 몇 개예요?") },
      { speaker: "You", answer: DASEOT_GAE, options: [DASEOT_GAE, k("열"), JEOGI] },
      { speaker: "Sua", text: k("우유 있어요?") },
      { speaker: "You", answer: ISSEOYO, options: [ISSEOYO, k("아홉"), k("등")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "deung",
    itemName: "A paper lantern",
    itemNameRu: k("한지 등"),
    ru: k("우와, 등이에요!"),
    en: "Wow, a lantern!",
    a11y: "A round lantern of Korean hanji paper hangs from the ceiling and glows with a warm orange light.",
    image: p("deung"),
    steps: ["The lady of the house hangs a paper lantern from the ceiling.", "Hanji paper is thin and strong.", "The light through it is soft and warm.", "Murzik counts: one lantern. Definitely not the moon!"],
    bridge: "At lunchtime the whole crew is hungry. Sua orders lunches. But how many?",
  },
};

const suwon3: Lesson = {
  id: "ko-a1-suwon-3",
  level: "A1",
  cityId: "ko-suwon",
  number: 3,
  title: "How many of you are there?",
  minutes: 7,
  goals: ["Count people: myeong", "Order “two coffees”: jan", "Ask “How many of you are there?”"],
  vocabNote: "Counting words: gae for things, myeong for people, jan for cups and glasses. The order is: thing + number + counting word: keopi du jan means two coffees.",
  vocab: [
    v("kosu3-1", k("한 명"), "one person", "Minho stands alone at the gate.", "", p("l3-1")),
    v("kosu3-2", k("두 명"), "two people", "Jiyeon and Sua wave.", "", p("l3-2")),
    v("kosu3-3", MYEOT_MYEONG, "How many of you are there?", "The lunch seller looks at the crowd of the film crew.", "", p("l3-3")),
    v("kosu3-4", SE_MYEONG, "There are three of us.", "Murzik, Sua and Minho stand side by side.", "", p("l3-4")),
    v("kosu3-5", k("잔"), "cup, glass (when counting)", "Two cups of coffee on a tray.", "", p("l3-5")),
    v("kosu3-6", k("커피 두 잔 주세요."), "Two coffees, please.", "Sua holds up two fingers.", "", p("l3-6")),
    v("kosu3-7", k("도시락"), "a lunch box", "A box with rice, egg and vegetables in separate sections.", "", p("l3-7")),
  ],
  dialogue: {
    title: "Lunches for the crew",
    note: "Yeolhan means “eleven” (yeol + hana). Jeodo means “me too”.",
    lines: [
      line("sua", k("도시락 주세요."), "Lunches, please."),
      line("seller", MYEOT_MYEONG, "How many of you are there?"),
      line("sua", k("열 명이에요."), "There are ten of us."),
      line("murzik", k("아니요, 열한 명이에요! 저도 있어요!"), "No, eleven! I'm here too!"),
      line("seller", k("하하, 도시락 열한 개!"), "Ha-ha, eleven lunch boxes!"),
      line("sua", k("그리고 커피 두 잔 주세요."), "And two coffees, please."),
    ],
    gist: choice("kosu3-d1", "How many lunches did they order in the end?", [
      ["Eleven.", true],
      ["Ten.", false],
      ["Two.", false],
    ]),
  },
  grammar: [
    {
      title: "Counting words: gae, myeong, jan",
      paragraphs: [
        "When counting, Korean usually adds a counting word: gae for things, myeong for people, jan for cups and glasses.",
        "The order is: thing + number + counting word. Dosirak du gae is two lunch boxes, saram se myeong is three people, keopi du jan is two coffees.",
      ],
      examples: [
        { ru: k("사람 세 명"), en: "three people" },
        { ru: k("커피 두 잔"), en: "two coffees" },
      ],
    },
  ],
  tasks: [
    choice("kosu3-t1", "How do you say “two coffees”?", [
      [k("커피 두 잔"), true],
      [k("커피 둘 잔"), false],
      [k("두 커피"), false],
    ], { skill: "grammar" }),
    listen("kosu3-t2", "Listen. What did Sua answer?", SE_MYEONG, [
      ["There are three of us.", true],
      ["Three.", false],
      ["Three coffees.", false],
    ]),
    match("kosu3-t3", "Match the pairs.", [
      [k("개"), "item (when counting)"],
      [k("명"), "person (when counting)"],
      [k("잔"), "cup"],
      [k("도시락"), "a lunch box"],
    ], { skill: "words" }),
    spell("kosu3-t4", "Build the word “lunch box” from syllables.", k("도시락"), ["두", "라"]),
    speak("kosu3-t5", MYEOT_MYEONG, DU_MYEONG, "There are two of us.", { help: "At a café they ask how many of you there are. Answer out loud: there are two of you." }),
    script("kosu3-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Sua", text: k("등이 몇 개 있어요?") },
      { speaker: "You", answer: YEOL_GAE, options: [YEOL_GAE, SE_MYEONG, k("잔")] },
      { speaker: "Waiter", text: k("어서 오세요!") },
      { speaker: "You", answer: k("저기요, 자리 있어요?"), options: [k("저기요, 자리 있어요?"), k("여섯"), MYEOT_GAE] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chatjan",
    itemName: "Two teacups",
    itemNameRu: k("찻잔"),
    ru: k("우와, 찻잔이에요!"),
    en: "Wow, teacups!",
    a11y: "Two small white porcelain cups with a blue pattern and a little teapot stand on a tray.",
    image: p("chatjan"),
    steps: ["The lady of the house brings a teapot and two cups.", "White, with a blue pattern.", "“One for Murzik, one for Sua.”", "Du jan — two cups!"],
    bridge: "Before the bow scene Minho can't find his bow. Where is it?",
  },
};

const suwon4: Lesson = {
  id: "ko-a1-suwon-4",
  level: "A1",
  cityId: "ko-suwon",
  number: 4,
  title: "Where's my bow?",
  minutes: 7,
  goals: ["Say “on”, “under”, “in front of”, “behind”, “next to”, “inside”", "Ask “Where is …?”", "Answer “On the chair”"],
  vocabNote: "Wi means on, above; arae is under; ap is in front of; dwi is behind; yeop is next to; an is inside. After them you add e: uija wie means on the chair.",
  vocab: [
    v("kosu4-1", k("위"), "on, above", "The bow lies on the chair.", "", p("l4-1")),
    v("kosu4-2", k("아래"), "under", "Murzik looks under the chair.", "", p("l4-2")),
    v("kosu4-3", k("앞"), "in front of", "Murzik stands in front of the camera.", "", p("l4-3")),
    v("kosu4-4", k("뒤"), "behind", "The bow hangs on Minho's back.", "", p("l4-4")),
    v("kosu4-5", k("옆"), "next to", "Sua stands next to the cameraman.", "", p("l4-5")),
    v("kosu4-6", k("안"), "inside", "Murzik peeks out of a box.", "", p("l4-6")),
    v("kosu4-7", HWAL_EODI, "Where's the bow?", "Minho looks around, puzzled.", "", p("l4-7")),
  ],
  dialogue: {
    title: "The missing bow",
    note: "Je hwal means “my bow”. Eodie isseoyo? means “where is it?”.",
    lines: [
      line("minho", k("제 활이 어디에 있어요?"), "Where's my bow?"),
      line("sua", k("의자 위에 있어요?"), "Is it on the chair?"),
      line("minho", k("아니요, 없어요."), "No, it's not there."),
      line("murzik", k("의자 아래에 있어요?"), "Under the chair?"),
      line("minho", k("없어요…"), "It's not there…"),
      line("sua", k("아! 민호 씨 뒤에 있어요!"), "Ah! It's behind you, Minho!"),
      line("minho", k("하하, 진짜요?"), "Ha-ha, really?"),
    ],
    gist: choice("kosu4-d1", "Where was the bow?", [
      ["On Minho's back.", true],
      ["On the chair.", false],
      ["Under the chair.", false],
    ]),
  },
  grammar: [
    {
      title: "Where it is: …e isseoyo",
      paragraphs: [
        "The order is the reverse of English “on the chair”: first the reference object (the chair), then the place word (wi, arae…), then e and isseoyo. Uija wie isseoyo means “it's on the chair” (chair – top – at – is).",
        "The question: …i / ga eodie isseoyo? means “where is …?”. Hwari eodie isseoyo? means “Where's the bow?”.",
      ],
      examples: [
        { ru: k("가방 안에 있어요."), en: "It's in the bag." },
        { ru: k("카메라 옆에 있어요."), en: "It's next to the camera." },
      ],
    },
  ],
  tasks: [
    choice("kosu4-t1", "How do you say “It's under the chair”?", [
      [k("의자 아래에 있어요."), true],
      [UIJA_WI, false],
      [UIJA_DWI, false],
    ], { skill: "grammar" }),
    listen("kosu4-t2", "Listen. Where's the bow?", k("옆에 있어요."), [
      ["Next to it.", true],
      ["Inside.", false],
      ["Behind.", false],
    ]),
    match("kosu4-t3", "Match the pairs.", [
      [k("위"), "on, above"],
      [k("아래"), "under"],
      [k("앞"), "in front of"],
      [k("뒤"), "behind"],
    ], { skill: "words" }),
    spell("kosu4-t4", "Build the word “under” from syllables.", k("아래"), ["어", "레"]),
    speak("kosu4-t5", HWAL_EODI, UIJA_WI, "On the chair.", { help: "Minho asks where his bow is. The bow is on the chair. Answer out loud." }),
    script("kosu4-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Shop assistant", text: MYEOT_MYEONG },
      { speaker: "You", answer: DU_MYEONG, options: [DU_MYEONG, k("두 잔"), k("아래")] },
      { speaker: "Sua", text: MYEOT_GAE_ISS },
      { speaker: "You", answer: k("일곱 개 있어요."), options: [k("일곱 개 있어요."), k("일곱 명이에요."), JEOGI] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chaeksang",
    itemName: "A low writing desk",
    itemNameRu: k("책상"),
    ru: k("우와, 책상이에요!"),
    en: "Wow, a little desk!",
    a11y: "A low wooden writing desk by the hanok window, a brush and a notebook on it, a floor cushion next to it.",
    image: p("chaeksang"),
    steps: ["The lady of the house puts a low desk by the window.", "On the desk, a brush and a notebook.", "Murzik sits on the cushion in front of the desk.", "He writes Korean letters with a brush!"],
    bridge: "Tomorrow Sua will show Murzik what is hidden inside the fortress.",
  },
};

const suwon5: Lesson = {
  id: "ko-a1-suwon-5",
  level: "A1",
  cityId: "ko-suwon",
  number: 5,
  title: "In the fortress",
  minutes: 7,
  goals: ["Say “There is … there”", "Say “too”: do", "Describe the fortress: lots of people, quiet"],
  vocabNote: "Seong is “fortress”, seongmun is “fortress gate”, seongbyeok is “fortress wall”. Bak means “outside”. Do means “too”: kapedo means “a café too”.",
  vocab: [
    v("kosu5-1", k("성"), "fortress", "An old stone fortress with towers.", "", p("l5-1")),
    v("kosu5-2", k("성문"), "fortress gate", "A huge stone gate with a wooden roof.", "", p("l5-2")),
    v("kosu5-3", k("성벽"), "fortress wall", "A stone wall winds over the hills.", "", p("l5-3")),
    v("kosu5-4", SIJANG, "There's a market.", "A market with stalls inside the fortress.", "", p("l5-4")),
    v("kosu5-5", k("밖"), "outside", "A quiet path outside the wall.", "", p("l5-5")),
    v("kosu5-6", k("사람이 많아요!"), "There are so many people!", "A crowd of tourists at the gate.", "", p("l5-6")),
    v("kosu5-7", k("조용해요."), "It's quiet.", "Murzik sits alone on the wall; all is quiet.", "", p("l5-7")),
  ],
  dialogue: {
    title: "A walk along the wall",
    note: "Gireoyo means “it's long”. Sijang is “market”. Bakkeun means “outside (as for outside)”.",
    lines: [
      line("murzik", k("우와, 성벽이 진짜 길어요!"), "Wow, the wall is really long!"),
      line("sua", k("성 안에 시장이 있어요."), "There's a market inside the fortress."),
      line("murzik", k("카페도 있어요?"), "Is there a café too?"),
      line("sua", k("네, 성문 옆에 카페가 있어요."), "Yes, there's a café next to the gate."),
      line("murzik", k("사람이 많아요!"), "There are so many people!"),
      line("sua", k("밖은 조용해요."), "But outside it's quiet."),
    ],
    gist: choice("kosu5-d1", "Where is the café?", [
      ["Next to the gate.", true],
      ["On the wall.", false],
      ["Outside the fortress.", false],
    ]),
  },
  grammar: [
    {
      title: "There is … there: place + e, thing + i / ga isseoyo",
      paragraphs: [
        "To say “there is something somewhere”, first name the place with e, then the thing with i (after a consonant) or ga (after a vowel): seong ane sijangi isseoyo means “there's a market inside the fortress”.",
        "Do (도) means “too, also”: kapedo isseoyo? means “is there a café too?”, jeodo isseoyo means “I'm here too”.",
      ],
      examples: [
        { ru: k("역 앞에 카페가 있어요."), en: "There's a café in front of the station." },
        { ru: k("저도 배우예요."), en: "I'm an actor too." },
      ],
    },
  ],
  tasks: [
    choice("kosu5-t1", "How do you say “There's a café next to the gate”?", [
      [k("성문 옆에 카페가 있어요."), true],
      [k("카페 옆에 성문이에요."), false],
      [k("성문 옆에 카페가 없어요."), false],
    ], { skill: "grammar" }),
    listen("kosu5-t2", "Listen. What does Murzik say?", k("사람이 많아요!"), [
      ["There are so many people!", true],
      ["It's quiet.", false],
      ["There's a market.", false],
    ]),
    match("kosu5-t3", "Match the pairs.", [
      [k("성"), "fortress"],
      [k("성문"), "gate"],
      [k("성벽"), "wall"],
      [k("밖"), "outside"],
    ], { skill: "words" }),
    spell("kosu5-t4", "Build the word “fortress wall” from syllables.", k("성벽"), ["상", "벅"]),
    speak("kosu5-t5", MWOGA, SIJANG, "There's a market.", { help: "Sua asks what there is inside the fortress. Answer out loud." }),
    script("kosu5-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Minho", text: HWAL_EODI },
      { speaker: "You", answer: UIJA_DWI, options: [UIJA_DWI, k("성문"), DU_MYEONG] },
      { speaker: "Shop assistant", text: MYEOT_MYEONG },
      { speaker: "You", answer: SE_MYEONG, options: [SE_MYEONG, SE_GAE, k("조용해요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "byeongpung",
    itemName: "A folding screen with mountains",
    itemNameRu: k("병풍"),
    ru: k("우와, 병풍이에요!"),
    en: "Wow, a folding screen!",
    a11y: "A folding screen of several panels stands by the wall, painted with mountains, pine trees and cranes.",
    image: p("byeongpung"),
    steps: ["At the market in the fortress they sell old things.", "Sua finds a folding screen.", "It has mountains, pine trees and cranes on it.", "Now Murzik has a whole landscape behind him!"],
    bridge: "The make-up artist asks how old Murzik is. How old is he, actually?",
  },
};

const suwon6: Lesson = {
  id: "ko-a1-suwon-6",
  level: "A1",
  cityId: "ko-suwon",
  number: 6,
  title: "How old are you?",
  minutes: 7,
  goals: ["Ask someone's age", "Say how old you are", "Count to 30 with native Korean numbers"],
  vocabNote: "Age uses native Korean numbers + sal (“year of age”): daseot sal is 5 years old. Seumul is 20; before sal it gets shorter: seumu sal. Forty is maheun, but you don't need it yet.",
  vocab: [
    v("kosu6-1", MYEOT_SAL, "How old are you?", "The make-up artist, a brush in her hand, looks at Murzik with curiosity.", "", p("l6-1")),
    v("kosu6-2", k("다섯 살이에요."), "I'm five.", "Murzik holds up five little fingers.", "", p("l6-2")),
    v("kosu6-3", SEUMU_SAL, "I'm twenty.", "A cake with two candles shaped like the numbers 2 and 0.", "", p("l6-3")),
    v("kosu6-4", k("스물"), "twenty", "Twenty little lights on a string.", "", p("l6-4")),
    v("kosu6-5", k("서른"), "thirty", "Thirty candles on a big cake.", "", p("l6-5")),
    v("kosu6-6", k("나이"), "age", "Murzik studies his whiskers in front of the mirror.", "", p("l6-6")),
    v("kosu6-7", k("어려요!"), "So young!", "The make-up artist clasps her hands, touched.", "", p("l6-7")),
  ],
  dialogue: {
    title: "In the make-up room",
    note: "Seumuldaseot sal means “twenty-five years old”. In Korea asking someone's age when you meet is quite normal.",
    lines: [
      line("makeup", k("무르직 씨, 몇 살이에요?"), "Murzik, how old are you?"),
      line("murzik", k("저는 다섯 살이에요."), "I'm five."),
      line("makeup", k("우와, 어려요!"), "Wow, so young!"),
      line("murzik", k("지연 씨는 몇 살이에요?"), "And how old is Jiyeon?"),
      line("jiyeon", k("비밀이에요!"), "It's a secret!"),
      line("sua", k("하하, 지연 씨는 스물다섯 살이에요."), "Ha-ha, Jiyeon is twenty-five."),
      line("jiyeon", k("수아 씨!"), "Sua!"),
    ],
    gist: choice("kosu6-d1", "How old is Murzik?", [
      ["Five.", true],
      ["Twenty-five.", false],
      ["It's a secret.", false],
    ]),
  },
  grammar: [
    {
      title: "Age: number + sal",
      paragraphs: [
        "Age is said with native Korean numbers: daseot sal is 5 years old, yeol sal is 10. Hana, dul, set, net get shorter before sal: han sal, du sal, se sal, ne sal.",
        "Seumul (20) becomes seumu before sal: seumu sal. Thirty is seoreun. Numbers are put together: seumuldaseot is 25, seoreunhana is 31.",
      ],
      examples: [
        { ru: k("열 살"), en: "10 years old" },
        { ru: k("스무 살"), en: "20 years old" },
      ],
    },
  ],
  tasks: [
    choice("kosu6-t1", "How do you say “I'm twenty”?", [
      [SEUMU_SAL, true],
      [k("이십 살이에요."), false],
      [k("스물 살이에요."), false],
    ], { skill: "grammar" }),
    listen("kosu6-t2", "Listen. How old?", k("다섯 살이에요."), [
      ["Five years old.", true],
      ["Five things.", false],
      ["Five people.", false],
    ]),
    match("kosu6-t3", "Match the pairs.", [
      [k("살"), "year (of age)"],
      [k("나이"), "age"],
      [k("스물"), "twenty"],
      [k("서른"), "thirty"],
    ], { skill: "words" }),
    spell("kosu6-t4", "Build the word “age” from syllables.", k("나이"), ["너", "니"]),
    speak("kosu6-t5", MYEOT_SAL, SEUMU_SAL, "I'm twenty.", { help: "Say out loud that you are twenty." }),
    script("kosu6-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Sua", text: MWOGA },
      { speaker: "You", answer: SIJANG, options: [SIJANG, k("스무 살이에요."), k("밖")] },
      { speaker: "Minho", text: k("화살 몇 개예요?") },
      { speaker: "You", answer: DASEOT_GAE, options: [DASEOT_GAE, k("다섯 살이에요."), k("나이")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yeon",
    itemName: "A kite",
    itemNameRu: k("연"),
    ru: k("우와, 연이에요!"),
    en: "Wow, a kite!",
    a11y: "A rectangular Korean kite with a round hole in the middle and a colourful tail hangs on the wall.",
    image: p("yeon"),
    steps: ["By the fortress wall children fly kites.", "The make-up artist buys Murzik a Korean kite.", "A rectangular one, with a hole in the middle.", "It hangs on the wall, waiting for the wind."],
    bridge: "Tomorrow is the main scene in Suwon. Murzik will shoot a bow!",
  },
};

const suwon7: Lesson = {
  id: "ko-a1-suwon-7",
  level: "A1",
  cityId: "ko-suwon",
  number: 7,
  title: "The bow scene",
  minutes: 8,
  goals: ["Understand “Shoot!” and “Careful!”", "Give praise: “Amazing!”", "Remember everything from Suwon"],
  vocabNote: "-seyo at the end is a polite request: ssoseyo means “shoot”, josimhaseyo means “be careful”, anjeuseyo means “sit down”. Majasseoyo means “it's a hit!”.",
  vocab: [
    v("kosu7-1", k("활"), "bow", "A wooden bow with a red grip.", "", p("l7-1")),
    v("kosu7-2", k("과녁"), "target", "A round target on a straw stand.", "", p("l7-2")),
    v("kosu7-3", k("쏘세요!"), "Shoot!", "Director Park waves his hand.", "", p("l7-3")),
    v("kosu7-4", k("조심하세요!"), "Careful!", "Minho holds out his hand: careful!", "", p("l7-4")),
    v("kosu7-5", k("맞았어요!"), "A hit!", "An arrow sticks right in the centre of the target.", "", p("l7-5")),
    v("kosu7-6", k("대단해요!"), "Amazing!", "The whole crew applaud.", "", p("l7-6")),
    v("kosu7-7", k("다음은 남이섬이에요!"), "Next stop: Nami Island!", "Sua shows a photo of the island with an avenue of tall trees.", "", p("l7-7")),
  ],
  dialogue: {
    title: "The main scene",
    note: "This is a scene from the series: the travelling cat shoots a bow for the first time by the fortress.",
    lines: [
      line("director", k("레디, 액션!"), "Ready, action!"),
      line("minho", k("무르직 씨, 조심하세요!"), "Murzik, careful!"),
      line("murzik", k("하나, 둘, 셋…"), "One, two, three…"),
      line("director", k("쏘세요!"), "Shoot!"),
      line("sua", k("맞았어요!"), "A hit!"),
      line("minho", k("우와, 대단해요!"), "Wow, amazing!"),
      line("director", k("컷! 좋아요!"), "Cut! Great!"),
    ],
    gist: choice("kosu7-d1", "Did Murzik hit the target?", [
      ["Yes, he did.", true],
      ["No, he missed.", false],
      ["He didn't shoot.", false],
    ]),
  },
  grammar: [
    {
      title: "All together. The polite request -seyo",
      paragraphs: [
        "You can already: count with native Korean numbers (hana… yeol), count things, people and cups (gae, myeong, jan), say your age (sal), say where something is (wi, arae, ap, dwi, yeop, an + e isseoyo) and “there is … there”.",
        "New: -(eu)seyo at the end of a verb is a polite request: ssoseyo means “shoot”, anjeuseyo means “sit down”, josimhaseyo means “please be careful”.",
      ],
      examples: [
        { ru: k("여기 앉으세요."), en: "Please sit here." },
        { ru: k("조심하세요!"), en: "Careful!" },
      ],
    },
  ],
  tasks: [
    listen("kosu7-t1", "Listening test. What is where?", k("의자 위에 화살이 세 개 있어요."), [
      ["There are three arrows on the chair.", true],
      ["There are three arrows under the chair.", false],
      ["There are four arrows on the chair.", false],
    ]),
    choice("kosu7-t2", "Minho is 27. How does he say it?", [
      [k("스물일곱 살이에요."), true],
      [k("이십칠 살이에요."), false],
      [k("스물일곱 개예요."), false],
    ], { skill: "grammar" }),
    match("kosu7-t3", "Match the pairs.", [
      [k("활"), "bow"],
      [k("과녁"), "target"],
      [k("성"), "fortress"],
      [k("등"), "lantern"],
    ], { skill: "words" }),
    spell("kosu7-t4", "Build the word “Suwon” from syllables.", k("수원"), ["소", "완"]),
    speak("kosu7-t5", k("맞았어요?"), k("네, 맞았어요!"), "Yes, I hit it!", { help: "Minho asks if you hit the target. Answer out loud." }),
    script("kosu7-t6", "Remember all of Suwon. Finish the conversations.", [
      { speaker: "Minho", text: k("화살 몇 개예요?") },
      { speaker: "You", answer: SE_GAE, options: [SE_GAE, SE_MYEONG, k("대단해요!")] },
      { speaker: "Shop assistant", text: MYEOT_MYEONG },
      { speaker: "You", answer: DU_MYEONG, options: [DU_MYEONG, k("두 개"), k("활")] },
      { speaker: "Sua", text: HWAL_EODI },
      { speaker: "You", answer: UIJA_WI, options: [UIJA_WI, k("과녁"), MYEOT_SAL] },
      { speaker: "Make-up artist", text: MYEOT_SAL },
      { speaker: "You", answer: SEUMU_SAL, options: [SEUMU_SAL, k("스무 개예요."), k("조심하세요!")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hwal",
    itemName: "A toy bow",
    itemNameRu: k("활"),
    ru: k("우와, 활이에요!"),
    en: "Wow, a bow!",
    a11y: "A small wooden bow with a red grip and an arrow with a soft tip lie on the desk.",
    image: p("hwal"),
    steps: ["After filming the props manager gives Murzik a small bow.", "The very one from the scene!", "The arrow has a soft tip, so it's safe.", "The third keepsake from the shoot!"],
    bridge: "Next is Nami Island. That's where they film the most romantic scene of the series.",
  },
};

const story: CityStory = {
  home: {
    name: "A room in a hanok by the fortress wall",
    nameRu: k("성벽 옆 한옥"),
    image: p("home"),
    a11y: "An empty room in an old Korean hanok house: wooden beams, paper doors, a warm floor. Outside the window, the stone fortress wall. Murzik's suitcase in the middle.",
  },
  keepsakeId: "hwal",
  welcomeRu: k("안녕, 수원!"),
  welcomeEn: "Hello, Suwon!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik and Sua at the old stone gate of the fortress in Suwon; colourful banners on poles flutter above the wall.",
  departureImage: p("departure"),
  departureA11y: "The lady of the hanok waves to Murzik at the gate, the fortress wall behind her.",
  finale: [
    {
      image: p("hwal"),
      a11y: "Evening. The whole crew sit by the hanok; Murzik proudly holds the little bow.",
      lines: [
        { en: "In the evening the whole crew watch the bow scene again." },
        { ru: k("대단해요, 무르직 씨!"), en: "Amazing, Murzik!" },
        { en: "Director Park says that on Nami Island Murzik will have his own lines in the main scene!" },
      ],
    },
    {
      image: p("home"),
      a11y: "Murzik walks around his room in the hanok, which he furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks around his room in the hanok." },
        { en: "He takes with him the little bow from the scene. The third keepsake from the shoot." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy.",
      lines: [
        { en: "Suwon is done!" },
        { en: "7 / 7 lessons" },
        { ru: k("하나, 둘, 셋… 열!"), en: "I can count to ten in Korean!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "The lady of the hanok waves goodbye.",
      lines: [
        { ru: k("안녕히 계세요!"), en: "Goodbye!" },
        { ru: k("남이섬으로 가요!"), en: "Off to Nami Island!" },
      ],
    },
    {
      image: p("bus"),
      a11y: "The film crew's bus drives along a road through green hills; Murzik looks out of the window.",
      lines: [{ en: "Suwon → Nami Island" }],
    },
    {
      image: pic("ko/nami/arrival"),
      a11y: "Murzik and Sua on a little ferry; ahead, an island with an avenue of tall trees.",
      lines: [
        { ru: k("우와, 남이섬이에요!"), en: "Wow, it's Nami Island!" },
        { en: "Many famous K-dramas were filmed here." },
      ],
    },
  ],
};

export const koSuwonEn = {
  id: "ko-suwon",
  name: "Suwon",
  nameKo: k("수원"),
  lessons: [suwon1, suwon2, suwon3, suwon4, suwon5, suwon6, suwon7],
  story,
};
