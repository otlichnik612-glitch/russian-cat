import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, k, letter, line, listen, match, script, speak, spell, v } from "./make";

/* Seoul · “First words” · Murzik flies in for the shoot, meets Sua, the director and the actors, and films his first take. The basic hangul letters. */

const p = (name: string) => pic(`ko/seoul/${name}`);

// Phrases used in several lessons.
const ANNYEONG = k("안녕하세요!");
const NE = k("네.");
const ANIYO = k("아니요.");
const BANGAWOYO = k("반가워요!");
const IREUM = k("이름이 뭐예요?");
const IREUM_MAYA = k("제 이름은 마야예요.");
const GAMSA = k("감사합니다!");
const GOMAWO = k("고마워요!");
const JOESONG = k("죄송합니다!");
const GWAENCHANA = k("괜찮아요.");
const IGEO = k("이거 뭐예요?");
const EODI = k("어디에서 왔어요?");
const LONDON = k("런던에서 왔어요.");
const DASI = k("다시 한 번 말해 주세요.");
const CHEONCHEON = k("천천히 말해 주세요.");

const seoul1: Lesson = {
  id: "ko-a1-seoul-1",
  level: "A1",
  cityId: "ko-seoul",
  number: 1,
  title: "Annyeonghaseyo! — Hello!",
  minutes: 7,
  goals: ["Say hello: annyeonghaseyo", "Say “yes” and “no”", "Introduce yourself: “I'm …”"],
  vocabNote: "Korean letters are grouped into square syllable blocks: 안 = ㅇ + ㅏ + ㄴ. Under every phrase you'll see it in Latin letters (the official romanization). Annyeonghaseyo is a polite “hello”: you can say it to anyone.",
  vocab: [
    v("kose1-1", ANNYEONG, "Hello! / Hi!", "Murzik waves a paw at Incheon Airport, planes behind the glass.", "", p("l1-1")),
    v("kose1-2", NE, "Yes.", "Murzik nods confidently.", "", p("l1-2")),
    v("kose1-3", ANIYO, "No.", "Murzik shakes his head and waves a paw.", "", p("l1-3")),
    v("kose1-4", k("저는 무르직이에요."), "I'm Murzik.", "Murzik proudly puts a paw on his chest.", "", img.murzik),
    v("kose1-5", BANGAWOYO, "Nice to meet you!", "Murzik and Sua shake hands — well, a hand and a paw.", "", p("l1-5")),
    v("kose1-6", k("환영합니다!"), "Welcome!", "Sua holds up a sign with Murzik's name in Korean.", "", p("l1-6")),
    v("kose1-7", k("서울"), "Seoul", "Seoul in the evening: skyscraper lights and a tower on a hill.", "", p("l1-7")),
  ],
  letters: [
    letter("ㅇ", "silent at the start of a syllable, it just “holds the place”; at the end of a syllable it is “ng”", ANNYEONG, "Hello!", "The syllable 안 starts with ㅇ, but it is read simply “an”."),
    letter("ㅏ", "“a” as in “father”: a stick with a dash to the right", ANNYEONG, "Hello!"),
    letter("ㅓ", "“eo”, like the “o” in “hot” or the “u” in “but”: a stick with a dash to the left", k("저는 무르직이에요."), "I'm Murzik.", "Don't mix it up with ㅏ: dash to the right is “a”, dash to the left is “eo”."),
    letter("ㅜ", "“u” as in “moon”: a line with a tail pointing down", k("서울"), "Seoul"),
    letter("ㅡ", "“eu”, a short sound with lips spread, like the “oo” in “good” said with a smile: just a line", k("저는 무르직이에요."), "I'm Murzik."),
    letter("ㅣ", "“i” as in “ski”: just a stick", ANIYO, "No."),
  ],
  dialogue: {
    title: "At the airport",
    note: "Ssi is a polite word after a name: Sua ssi, Mureujik ssi. Korean has no “z” sound, so here Murzik is called Mureujik.",
    lines: [
      line("sua", k("안녕하세요! 무르직 씨예요?"), "Hello! Are you Murzik?"),
      line("murzik", k("네! 저는 무르직이에요."), "Yes! I'm Murzik."),
      line("sua", k("반가워요! 저는 수아예요."), "Nice to meet you! I'm Sua."),
      line("murzik", k("수아 씨, 반가워요!"), "Sua, nice to meet you!"),
      line("sua", k("서울에 오신 것을 환영합니다!"), "Welcome to Seoul!"),
      line("murzik", k("우와, 서울이에요!"), "Wow, it's Seoul!"),
    ],
    gist: choice("kose1-d1", "Who meets Murzik at the airport?", [
      ["Sua.", true],
      ["The director.", false],
      ["Nobody.", false],
    ]),
  },
  grammar: [
    {
      title: "I'm …: jeoneun … ieyo / yeyo",
      paragraphs: [
        "Jeoneun means “I” (polite). At the end of the sentence comes “am / is”: after a consonant it is ieyo (이에요), after a vowel it is yeyo (예요).",
        "Mureujik ends in a consonant: Mureujigieyo. Sua and Maya end in a vowel: Suayeyo, Mayayeyo. In Korean the verb always comes at the end of the sentence.",
      ],
      examples: [
        { ru: k("저는 마야예요."), en: "I'm Maya." },
        { ru: k("저는 수아예요."), en: "I'm Sua." },
      ],
    },
  ],
  tasks: [
    choice("kose1-t1", "How do you say “I'm Maya”? (Maya ends in a vowel)", [
      [k("저는 마야예요."), true],
      [k("저는 마야이에요."), false],
      [k("저는 마야 씨예요."), false],
    ], { skill: "grammar" }),
    listen("kose1-t2", "Listen. What did Murzik answer?", ANIYO, [
      ["No.", true],
      ["Yes.", false],
      ["Hello!", false],
    ]),
    match("kose1-t3", "Match the pairs.", [
      [ANNYEONG, "Hello!"],
      [NE, "Yes."],
      [ANIYO, "No."],
      [k("서울"), "Seoul"],
    ], { skill: "words" }),
    spell("kose1-t4", "Build the word “Seoul” from syllables.", k("서울"), ["수", "아"]),
    speak("kose1-t5", ANNYEONG, k("안녕하세요! 저는 마야예요."), "Hello! I'm Maya.", {
      help: "Say hello out loud and introduce yourself. You can say your own name instead of “Maya”.",
    }),
    script("kose1-t6", "Finish the conversation with Sua.", [
      { speaker: "Sua", text: ANNYEONG },
      { speaker: "You", answer: ANNYEONG, options: [ANNYEONG, ANIYO, k("서울")] },
      { speaker: "Sua", text: k("저는 수아예요. 반가워요!") },
      { speaker: "You", answer: BANGAWOYO, options: [BANGAWOYO, ANIYO, k("저는 수아예요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ibul",
    itemName: "A colourful quilted blanket",
    itemNameRu: k("이불"),
    ru: k("우와, 이불이에요!"),
    en: "Wow, a blanket!",
    a11y: "A thick quilted floor mattress-blanket in pink and blue flowers lies on the warm floor.",
    image: p("ibul"),
    steps: ["In Korea people often sleep right on the warm floor.", "Sua brings a thick quilted blanket.", "It has pink and blue flowers.", "Murzik tests it at once: so soft!"],
    bridge: "In the morning Sua takes Murzik to the film crew's office. The director is waiting there…",
  },
};

const seoul2: Lesson = {
  id: "ko-a1-seoul-2",
  level: "A1",
  cityId: "ko-seoul",
  number: 2,
  title: "What's your name?",
  minutes: 7,
  goals: ["Ask someone's name", "Say what your name is", "Introduce someone: “This is Minho, he's an actor”"],
  vocabNote: "Ireum means “name”. Je ireumeun … means “my name is …”. Gamdok is “director”, gamdongnim is “Mr Director”: that's how people address him on set.",
  vocab: [
    v("kose2-1", IREUM, "What's your name?", "Director Park in a cap looks at Murzik over his glasses.", "", p("l2-1")),
    v("kose2-2", IREUM_MAYA, "My name is Maya.", "A name badge on a lanyard.", "", p("l2-2")),
    v("kose2-3", k("배우"), "actor, actress", "Actor Minho in costume in front of a mirror with light bulbs.", "", p("l2-3")),
    v("kose2-4", k("감독님"), "Mr Director", "Director Park in a folding chair with writing on the back.", "", p("l2-4")),
    v("kose2-5", k("친구"), "friend", "Murzik and Minho take a selfie.", "", p("l2-5")),
    v("kose2-6", k("우리"), "we, our", "The whole film crew has gathered for a group photo.", "", p("l2-6")),
    v("kose2-7", k("이 사람은 민호 씨예요."), "This is Minho.", "Sua points at a smiling Minho.", "", p("l2-7")),
  ],
  letters: [
    letter("ㄴ", "“n”", IREUM_MAYA, "My name is Maya."),
    letter("ㅁ", "“m”: a little square", IREUM, "What's your name?"),
    letter("ㄹ", "between vowels it is “r”, at the end of a syllable “l”", IREUM, "What's your name?", "In the word 서울 (Seoul) it comes at the end, so it is “l”."),
    letter("ㅂ", "“b”, close to a soft “p” at the start of a word; at the end of a syllable “p”", k("배우"), "actor"),
    letter("ㅐ", "“ae”, like the “e” in “bed”", k("배우"), "actor"),
    letter("ㅔ", "“e” as in “bed”; it sounds almost the same as ㅐ", IREUM_MAYA, "My name is Maya."),
  ],
  dialogue: {
    title: "Director Park",
    note: "Ibun means “this person” (respectful): a polite way to refer to the person you're introducing. I saram is simply “this person”. Geurigo means “and, also”. Bangapseumnida is the same “nice to meet you”, but more formal.",
    lines: [
      line("sua", k("감독님, 이분은 무르직 씨예요."), "Mr Director, this is Murzik."),
      line("director", k("안녕하세요. 저는 박 감독이에요."), "Hello. I'm Director Park."),
      line("murzik", k("안녕하세요, 감독님! 반갑습니다!"), "Hello, Mr Director! Very nice to meet you!"),
      line("sua", k("그리고 이 사람은 민호 씨예요. 배우예요."), "And this is Minho. He's an actor."),
      line("minho", k("반가워요, 무르직 씨! 우리 친구해요!"), "Nice to meet you, Murzik! Let's be friends!"),
    ],
    gist: choice("kose2-d1", "Who is Minho?", [
      ["An actor.", true],
      ["The director.", false],
      ["A driver.", false],
    ]),
  },
  grammar: [
    {
      title: "The topic: eun / neun",
      paragraphs: [
        "The person or thing you are talking about is marked with a little particle: after a consonant eun (은), after a vowel neun (는). Jeoneun is “I (as for me)”, ireumeun is “the name (as for the name)”.",
        "Ireum ends in a consonant: je ireumeun. Jeo ends in a vowel: jeoneun. Minho ssi ends in a vowel too: Minho ssineun.",
      ],
      examples: [
        { ru: k("제 이름은 민호예요."), en: "My name is Minho." },
        { ru: k("민호 씨는 배우예요."), en: "Minho is an actor." },
      ],
    },
  ],
  tasks: [
    choice("kose2-t1", "How do you say “My name is Minho”?", [
      [k("제 이름은 민호예요."), true],
      [k("제 이름는 민호예요."), false],
      [k("제 이름은 민호이에요."), false],
    ], { skill: "grammar" }),
    listen("kose2-t2", "Listen. Who is this person?", k("배우예요."), [
      ["An actor.", true],
      ["The director.", false],
      ["A friend.", false],
    ]),
    match("kose2-t3", "Match the pairs.", [
      [k("이름"), "name"],
      [k("배우"), "actor"],
      [k("친구"), "friend"],
      [k("감독"), "director"],
    ], { skill: "words" }),
    spell("kose2-t4", "Build the word “actor” from syllables.", k("배우"), ["무", "이"]),
    speak("kose2-t5", IREUM, IREUM_MAYA, "My name is Maya.", { help: "Answer the director out loud. You can say your own name." }),
    script("kose2-t6", "Remember the first lesson. Finish the conversations.", [
      { speaker: "Minho", text: ANNYEONG },
      { speaker: "You", answer: ANNYEONG, options: [ANNYEONG, ANIYO, k("배우")] },
      { speaker: "Director Park", text: k("수아 씨예요?") },
      { speaker: "You", answer: k("아니요, 저는 마야예요."), options: [k("아니요, 저는 마야예요."), BANGAWOYO, k("서울")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bapsang",
    itemName: "A low table",
    itemNameRu: k("밥상"),
    ru: k("우와, 밥상이에요!"),
    en: "Wow, a little table!",
    a11y: "A low round wooden table with short legs stands on the floor next to the blanket.",
    image: p("bapsang"),
    steps: ["Minho brings a low wooden table.", "People eat at a table like this sitting on the floor.", "Murzik sits down next to it — just the right height.", "Now there's a place to have dinner!"],
    bridge: "In the make-up room Murzik is offered a coffee. If only he doesn't spill it…",
  },
};

const seoul3: Lesson = {
  id: "ko-a1-seoul-3",
  level: "A1",
  cityId: "ko-seoul",
  number: 3,
  title: "Thank you and sorry",
  minutes: 7,
  goals: ["Say “thank you” in two ways", "Say sorry", "Answer “that's all right”"],
  vocabNote: "In 합니다 the letter ㅂ before ㄴ sounds like “m”: gamsahamnida. Gamsahamnida and joesonghamnida are very polite; gomawoyo and mianhaeyo are simpler, but still polite.",
  vocab: [
    v("kose3-1", GAMSA, "Thank you! (very polite)", "Murzik bows low with his paws together.", "", p("l3-1")),
    v("kose3-2", GOMAWO, "Thank you! (simpler)", "Murzik smiles at Sua and waves a paw.", "", p("l3-2")),
    v("kose3-3", JOESONG, "I'm sorry! (very polite)", "Murzik stares in horror at the spilled coffee.", "", p("l3-3")),
    v("kose3-4", k("미안해요."), "Sorry.", "Murzik flattens his ears guiltily.", "", p("l3-4")),
    v("kose3-5", GWAENCHANA, "That's all right. / I'm fine.", "The make-up artist waves her hands and laughs.", "", p("l3-5")),
    v("kose3-6", k("커피"), "coffee", "A paper cup of iced coffee.", "", p("l3-6")),
    v("kose3-7", k("여기요."), "Here you are.", "The make-up artist holds out a cup.", "", p("l3-7")),
  ],
  letters: [
    letter("ㄱ", "“g”, close to a soft “k” at the start of a word; at the end of a syllable “k”", GAMSA, "Thank you!"),
    letter("ㅅ", "“s”", GAMSA, "Thank you!"),
    letter("ㅎ", "“h”", GAMSA, "Thank you!"),
    letter("ㅈ", "“j”, close to a soft “ch” at the start of a word", JOESONG, "I'm sorry!"),
    letter("ㅗ", "a short, rounded “o”, like the “aw” in “saw” but shorter: a line with a tail pointing up", GOMAWO, "Thank you!", "ㅗ (tail up) is “o”, ㅜ (tail down) is “u”."),
    letter("ㅚ", "“oe”, sounds like “we”: ㅗ and ㅣ together", JOESONG, "I'm sorry!"),
  ],
  dialogue: {
    title: "In the make-up room",
    note: "Yeogiyo means “here you are” (literally “here”). Gwaenchanayo? as a question means “Are you all right?”.",
    lines: [
      line("makeup", k("무르직 씨, 커피 여기요."), "Murzik, here's your coffee."),
      line("murzik", GAMSA, "Thank you!"),
      line("murzik", k("아! 커피! 죄송합니다!"), "Oh! The coffee! I'm so sorry!"),
      line("makeup", k("괜찮아요, 괜찮아요!"), "It's all right, it's all right!"),
      line("sua", k("무르직 씨, 괜찮아요?"), "Murzik, are you all right?"),
      line("murzik", k("네, 괜찮아요. 고마워요, 수아 씨!"), "Yes, I'm fine. Thank you, Sua!"),
    ],
    gist: choice("kose3-d1", "What does the make-up artist say when Murzik says sorry?", [
      ["That's all right.", true],
      ["Thank you.", false],
      ["Here's your coffee.", false],
    ]),
  },
  grammar: [
    {
      title: "Two “thank yous”: -mnida and -yo",
      paragraphs: [
        "The ending -mnida (합니다) is formal: with strangers, with older people, at work. The ending -yo (요) is polite too, but warmer, for everyday talk.",
        "Gamsahamnida and gomawoyo both mean “thank you”. To the director it's better to say gamsahamnida, to Sua gomawoyo.",
      ],
      examples: [
        { ru: GAMSA, en: "Thank you! (formal)" },
        { ru: GOMAWO, en: "Thank you! (everyday)" },
      ],
    },
  ],
  tasks: [
    choice("kose3-t1", "What is the most polite way to say sorry to the director?", [
      [JOESONG, true],
      [GWAENCHANA, false],
      [GOMAWO, false],
    ], { skill: "grammar" }),
    listen("kose3-t2", "Listen. What does the make-up artist say?", GWAENCHANA, [
      ["That's all right.", true],
      ["Thank you.", false],
      ["Sorry.", false],
    ]),
    match("kose3-t3", "Match the pairs.", [
      [GAMSA, "Thank you!"],
      [JOESONG, "I'm sorry!"],
      [GWAENCHANA, "That's all right."],
      [k("커피"), "coffee"],
    ], { skill: "words" }),
    spell("kose3-t4", "Build the word “coffee” from syllables.", k("커피"), ["고", "기"]),
    speak("kose3-t5", k("커피 여기요."), GAMSA, "Thank you!", { help: "The make-up artist hands you a coffee. Thank her out loud." }),
    script("kose3-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Director Park", text: IREUM },
      { speaker: "You", answer: IREUM_MAYA, options: [IREUM_MAYA, GWAENCHANA, k("배우예요.")] },
      { speaker: "Sua", text: k("민호 씨는 배우예요?") },
      { speaker: "You", answer: k("네, 배우예요."), options: [k("네, 배우예요."), JOESONG, k("저는 수아예요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hwabun",
    itemName: "A little tree in a pot",
    itemNameRu: k("화분"),
    ru: k("우와, 화분이에요!"),
    en: "Wow, a little tree in a pot!",
    a11y: "A clay pot with a small green tree stands on the windowsill.",
    image: p("hwabun"),
    steps: ["The make-up artist isn't cross about the coffee.", "Quite the opposite — she gives Murzik a pot with a little tree.", "“For good luck on set!”", "Murzik puts it on the window."],
    bridge: "There's so much on set! Cameras, cables, microphones… And what's that?",
  },
};

const seoul4: Lesson = {
  id: "ko-a1-seoul-4",
  level: "A1",
  cityId: "ko-seoul",
  number: 4,
  title: "What's this?",
  minutes: 7,
  goals: ["Ask “What's this?”", "Say “this”, “that” and “that over there”", "Name things on the film set"],
  vocabNote: "Igeo is “this” (near me), geugeo is “that” (near you), jeogeo is “that over there” (far from both of us). Mwoyeyo? means “what is it?”, igeo mwoyeyo? means “what's this?”",
  vocab: [
    v("kose4-1", IGEO, "What's this?", "Murzik points a paw at a big camera.", "", p("l4-1")),
    v("kose4-2", k("이건 대본이에요."), "This is the script.", "Sua holds a thick stack of pages with a clip.", "", p("l4-2")),
    v("kose4-3", k("카메라"), "camera", "A big film camera on a dolly.", "", p("l4-3")),
    v("kose4-4", k("마이크"), "microphone", "A fluffy microphone on a long pole above everyone's heads.", "", p("l4-4")),
    v("kose4-5", k("그거"), "that (near you)", "Murzik points at something in the cameraman's hands.", "", p("l4-5")),
    v("kose4-6", k("저거"), "that over there", "Murzik points far away, at a spotlight.", "", p("l4-6")),
    v("kose4-7", k("의자"), "chair", "The director's folding chair with his name on the back.", "", p("l4-7")),
  ],
  letters: [
    letter("ㅋ", "“k”: ㄱ with an extra dash, said with a puff of air", k("카메라"), "camera"),
    letter("ㄷ", "“d”, close to a soft “t” at the start of a word; at the end of a syllable “t”", k("이건 대본이에요."), "This is the script."),
    letter("ㅢ", "“ui”: ㅡ and ㅣ together", k("의자"), "chair"),
  ],
  dialogue: {
    title: "On set",
    note: "Geureom means “then, so”. Jeogeoneunyo? means “and that one over there?”. Je daebon means “my script”.",
    lines: [
      line("murzik", IGEO, "What's this?"),
      line("cameraman", k("카메라예요."), "It's a camera."),
      line("murzik", k("그럼 저거는요?"), "And that one over there?"),
      line("cameraman", k("저거는 마이크예요."), "That one over there is a microphone."),
      line("sua", k("무르직 씨, 이거 대본이에요."), "Murzik, here's the script."),
      line("murzik", k("우와! 제 대본이에요?"), "Wow! Is this my script?"),
      line("sua", NE, "Yes."),
    ],
    gist: choice("kose4-d1", "What did Sua give Murzik?", [
      ["The script.", true],
      ["A microphone.", false],
      ["A camera.", false],
    ]),
  },
  grammar: [
    {
      title: "This, that, that over there: igeo, geugeo, jeogeo",
      paragraphs: [
        "Igeo is something near me. Geugeo is something near you. Jeogeo is something far from both of us.",
        "The question “What's this?” is igeo mwoyeyo? The answer: kamerayeyo (it's a camera), daebonieyo (it's a script).",
      ],
      examples: [
        { ru: k("저거는 카메라예요."), en: "That one over there is a camera." },
        { ru: k("그거 뭐예요?"), en: "What's that (near you)?" },
      ],
    },
  ],
  tasks: [
    choice("kose4-t1", "How do you ask about something far from both of you?", [
      [k("저거 뭐예요?"), true],
      [IGEO, false],
      [k("그거 뭐예요?"), false],
    ], { skill: "grammar" }),
    listen("kose4-t2", "Listen. What is it?", k("카메라예요."), [
      ["It's a camera.", true],
      ["A microphone.", false],
      ["The script.", false],
    ]),
    match("kose4-t3", "Match the pairs.", [
      [k("대본"), "script"],
      [k("카메라"), "camera"],
      [k("마이크"), "microphone"],
      [k("의자"), "chair"],
    ], { skill: "words" }),
    spell("kose4-t4", "Build the word “camera” from syllables.", k("카메라"), ["마", "가"]),
    speak("kose4-t5", IGEO, k("의자예요."), "It's a chair.", { help: "The cameraman points at a chair. Say out loud what it is." }),
    script("kose4-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Make-up artist", text: k("커피 여기요.") },
      { speaker: "You", answer: GAMSA, options: [GAMSA, JOESONG, ANIYO] },
      { speaker: "Sua", text: k("괜찮아요?") },
      { speaker: "You", answer: k("네, 괜찮아요."), options: [k("네, 괜찮아요."), IGEO, k("카메라예요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "naembi",
    itemName: "A little ramyeon pot",
    itemNameRu: k("냄비"),
    ru: k("우와, 냄비예요!"),
    en: "Wow, a little pot!",
    a11y: "A small yellow pot with handles and a lid stands on the table, next to a packet of noodles.",
    image: p("naembi"),
    steps: ["The cameraman brings a yellow pot.", "“In every K-drama the characters eat ramyeon straight from the lid!”", "Next to it, a packet of noodles.", "Murzik has a taste. Hot, but delicious!"],
    bridge: "Tomorrow the lead actress Jiyeon comes to the set. She'll ask where Murzik is from…",
  },
};

const seoul5: Lesson = {
  id: "ko-a1-seoul-5",
  level: "A1",
  cityId: "ko-seoul",
  number: 5,
  title: "Where are you from?",
  minutes: 7,
  goals: ["Ask “Where are you from?”", "Say where you are from", "Say that you speak a little Korean"],
  vocabNote: "Eodieseo wasseoyo? means “Where did you come from?”. A city + eseo wasseoyo means “I'm from …”. Hangugeo is “the Korean language”, Hanguk saram is “a Korean (person)”.",
  vocab: [
    v("kose5-1", EODI, "Where are you from?", "Actress Jiyeon leans towards Murzik with curiosity.", "", p("l5-1")),
    v("kose5-2", k("파리에서 왔어요."), "I'm from Paris.", "Murzik shows a postcard of the Eiffel Tower.", "", p("l5-2")),
    v("kose5-3", k("한국"), "Korea", "A map of Korea with Seoul marked by a heart.", "", p("l5-3")),
    v("kose5-4", k("한국 사람"), "a Korean (person)", "Jiyeon in a hanbok on set.", "", p("l5-4")),
    v("kose5-5", k("한국어"), "the Korean language", "Murzik's notebook, covered in Korean letters.", "", p("l5-5")),
    v("kose5-6", k("조금"), "a little", "Murzik shows with two fingers: just a tiny bit.", "", p("l5-6")),
    v("kose5-7", k("한국어 잘해요!"), "Your Korean is good!", "Jiyeon gives a thumbs up.", "", p("l5-7")),
  ],
  letters: [
    letter("ㅆ", "“ss”: a double ㅅ, said tense and sharp", EODI, "Where are you from?"),
    letter("ㅘ", "“wa”: ㅗ and ㅏ together", EODI, "Where are you from?"),
    letter("ㅍ", "“p”, said with a puff of air", k("파리에서 왔어요."), "I'm from Paris."),
  ],
  dialogue: {
    title: "The lead actress",
    note: "Peurangseu is “France”. Geureonde means “but, by the way”. Anieyo! is a modest answer to a compliment: “Oh, not at all!”",
    lines: [
      line("jiyeon", k("안녕하세요! 저는 지연이에요."), "Hello! I'm Jiyeon."),
      line("murzik", BANGAWOYO, "Very nice to meet you!"),
      line("jiyeon", EODI, "Where are you from?"),
      line("murzik", k("파리에서 왔어요."), "I'm from Paris."),
      line("jiyeon", k("우와, 프랑스 사람이에요?"), "Wow, are you French?"),
      line("murzik", k("네! 그런데 한국어 조금 해요."), "Yes! But I speak a little Korean."),
      line("jiyeon", k("한국어 잘해요!"), "Your Korean is good!"),
      line("murzik", k("아니에요!"), "Oh, not at all!"),
    ],
    gist: choice("kose5-d1", "Where is Murzik from?", [
      ["From Paris.", true],
      ["From Seoul.", false],
      ["From London.", false],
    ]),
  },
  grammar: [
    {
      title: "I'm from …: …eseo wasseoyo",
      paragraphs: [
        "A city or a country + eseo (에서, “from”) + wasseoyo (“came”): Parieseo wasseoyo means “I'm from Paris”, Reondeoneseo wasseoyo means “I'm from London”.",
        "A country + saram (“person”) is someone from that country: Hanguk saram is a Korean, Peurangseu saram is a French person.",
      ],
      examples: [
        { ru: k("수아 씨는 서울에서 왔어요."), en: "Sua is from Seoul." },
        { ru: k("민호 씨는 한국 사람이에요."), en: "Minho is Korean." },
      ],
    },
  ],
  tasks: [
    choice("kose5-t1", "How do you say “I'm from Seoul”?", [
      [k("서울에서 왔어요."), true],
      [k("서울이에요."), false],
      [k("서울 사람에서 왔어요."), false],
    ], { skill: "grammar" }),
    listen("kose5-t2", "Listen. What does Jiyeon say?", k("한국어 잘해요!"), [
      ["Your Korean is good!", true],
      ["I'm from Korea.", false],
      ["A little.", false],
    ]),
    match("kose5-t3", "Match the pairs.", [
      [k("한국"), "Korea"],
      [k("한국어"), "the Korean language"],
      [k("사람"), "person"],
      [k("조금"), "a little"],
    ], { skill: "words" }),
    spell("kose5-t4", "Build the word “Korea” from syllables.", k("한국"), ["궁", "안"]),
    speak("kose5-t5", EODI, LONDON, "I'm from London.", { help: "Answer Jiyeon out loud. You can name your own city." }),
    script("kose5-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Cameraman", text: IGEO },
      { speaker: "You", answer: k("카메라예요."), options: [k("카메라예요."), GAMSA, k("저는 마야예요.")] },
      { speaker: "Jiyeon", text: IREUM },
      { speaker: "You", answer: IREUM_MAYA, options: [IREUM_MAYA, k("서울에서 왔어요."), GWAENCHANA] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "seonpunggi",
    itemName: "A fan",
    itemNameRu: k("선풍기"),
    ru: k("우와, 선풍기예요!"),
    en: "Wow, a fan!",
    a11y: "A small mint-green fan on a stand turns its head by the window; the curtain sways.",
    image: p("seonpunggi"),
    steps: ["On the roof it gets hot in summer.", "Jiyeon gives Murzik a mint-green fan.", "It turns its head this way and that.", "Murzik holds his whiskers up to the breeze."],
    bridge: "Tomorrow is the rehearsal. Director Park speaks very fast…",
  },
};

const seoul6: Lesson = {
  id: "ko-a1-seoul-6",
  level: "A1",
  cityId: "ko-seoul",
  number: 6,
  title: "Could you say that again?",
  minutes: 7,
  goals: ["Ask someone to repeat", "Ask someone to speak more slowly", "Say “I don't know” and “I see”"],
  vocabNote: "Juseyo means “please give / please do”. Malhae juseyo means “please say”. Hwaiting! means “Go for it! Good luck!”: that's how people cheer each other on.",
  vocab: [
    v("kose6-1", k("잠깐만요!"), "Just a moment!", "Murzik raises a paw: wait!", "", p("l6-1")),
    v("kose6-2", DASI, "Please say that again.", "Murzik tilts his head and puts a paw to his ear.", "", p("l6-2")),
    v("kose6-3", CHEONCHEON, "Please speak more slowly.", "Murzik slowly lowers his paws: quieter, slower.", "", p("l6-3")),
    v("kose6-4", k("몰라요."), "I don't know.", "Murzik shrugs.", "", p("l6-4")),
    v("kose6-5", k("알겠어요!"), "I see! / Got it!", "Murzik nods happily and shows “OK”.", "", p("l6-5")),
    v("kose6-6", k("이해 못 해요."), "I don't understand.", "Question marks above Murzik's head.", "", p("l6-6")),
    v("kose6-7", k("화이팅!"), "Go for it! Good luck!", "Sua clenches her fists and cheers Murzik on.", "", p("l6-7")),
  ],
  letters: [
    letter("ㄲ", "“kk”: a double ㄱ, said tense and sharp", k("잠깐만요!"), "Just a moment!"),
    letter("ㅊ", "“ch”: ㅈ with a dash on top, said with a puff of air", CHEONCHEON, "Please speak more slowly."),
    letter("ㅌ", "“t”: ㄷ with an extra dash, said with a puff of air", k("화이팅!"), "Good luck!"),
    letter("ㅕ", "“yeo”: like ㅓ, but with two dashes", ANNYEONG, "Hello!", "In the word 안녕하세요 it is in the second syllable: 녕 is “nyeong”."),
    letter("ㅛ", "“yo”: like ㅗ, but with two tails", k("잠깐만요!"), "Just a moment!"),
  ],
  dialogue: {
    title: "The rehearsal",
    note: "Junbidwaesseoyo? means “Ready?”. The director repeats it syllable by syllable so that Murzik understands.",
    lines: [
      line("director", k("무르직 씨, 준비됐어요?"), "Murzik, are you ready?"),
      line("murzik", k("잠깐만요! 죄송합니다, 다시 한 번 말해 주세요."), "Just a moment! Sorry, could you say that again, please?"),
      line("director", k("준비됐어요?"), "Ready?"),
      line("murzik", CHEONCHEON, "Please speak more slowly."),
      line("director", k("준… 비… 됐… 어요?"), "Rea-dy?"),
      line("murzik", k("아! 알겠어요! 네!"), "Ah! Got it! Yes!"),
      line("sua", k("무르직 씨, 화이팅!"), "Murzik, good luck!"),
    ],
    gist: choice("kose6-d1", "Why does Murzik ask the director to repeat?", [
      ["The director speaks too fast.", true],
      ["He doesn't want to act.", false],
      ["He spilled his coffee.", false],
    ]),
  },
  grammar: [
    {
      title: "Please: …juseyo",
      paragraphs: [
        "Juseyo (주세요) means “please give me”. After a thing: keopi juseyo means “a coffee, please”.",
        "After an action it means “please do”: malhae juseyo means “please say”. Dasi means “again”, cheoncheonhi means “slowly”.",
      ],
      examples: [
        { ru: k("커피 주세요."), en: "A coffee, please." },
        { ru: k("다시 말해 주세요."), en: "Please say it again." },
      ],
    },
  ],
  tasks: [
    choice("kose6-t1", "How do you ask someone to speak more slowly?", [
      [CHEONCHEON, true],
      [DASI, false],
      [k("몰라요."), false],
    ], { skill: "grammar" }),
    listen("kose6-t2", "Listen. What did Murzik say?", k("잠깐만요!"), [
      ["Just a moment!", true],
      ["I don't know.", false],
      ["Got it!", false],
    ]),
    match("kose6-t3", "Match the pairs.", [
      [k("몰라요."), "I don't know."],
      [k("알겠어요!"), "Got it!"],
      [k("잠깐만요!"), "Just a moment!"],
      [k("화이팅!"), "Good luck!"],
    ], { skill: "words" }),
    spell("kose6-t4", "Build the word “again” from syllables.", k("다시"), ["사", "디"]),
    speak("kose6-t5", k("대본 봤어요? 3페이지, 대사 외웠어요?"), CHEONCHEON, "Please speak more slowly.", {
      help: "The director speaks very fast. Ask him out loud to speak more slowly.",
    }),
    script("kose6-t6", "Remember the earlier lessons. Finish the conversations.", [
      { speaker: "Jiyeon", text: EODI },
      { speaker: "You", answer: LONDON, options: [LONDON, k("몰라요."), GAMSA] },
      { speaker: "Make-up artist", text: k("미안해요!") },
      { speaker: "You", answer: GWAENCHANA, options: [GWAENCHANA, k("화이팅!"), IGEO] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pyeongsang",
    itemName: "A wooden platform bench",
    itemNameRu: k("평상"),
    ru: k("우와, 평상이에요!"),
    en: "Wow, a platform bench!",
    a11y: "On the roof by the little room stands a wide, low wooden platform bench, a string of fairy lights above it, the lights of Seoul far away.",
    image: p("pyeongsang"),
    steps: ["The crew haul a wooden platform bench up onto the roof.", "They hang a string of fairy lights above it.", "In the evening everyone sits here together.", "You can see the lights of Seoul all the way to the tower."],
    bridge: "Tomorrow is the first real take. Murzik practises his lines all night.",
  },
};

const seoul7: Lesson = {
  id: "ko-a1-seoul-7",
  level: "A1",
  cityId: "ko-seoul",
  number: 7,
  title: "Action! The first take",
  minutes: 8,
  goals: ["Understand the commands on set", "Praise someone and thank them for their work", "Say goodbye"],
  vocabNote: "Annyeonghi gaseyo is “goodbye” to someone who is leaving. Annyeonghi gyeseyo is to someone who is staying. Sugohasyeotseumnida means “thank you for your hard work”: people say it to each other after filming.",
  vocab: [
    v("kose7-1", k("레디, 액션!"), "Ready, action!", "Director Park shouts into a megaphone; a clapperboard snaps in front of the camera.", "", p("l7-1")),
    v("kose7-2", k("컷!"), "Cut!", "The director raises his hand.", "", p("l7-2")),
    v("kose7-3", k("좋아요!"), "Great!", "The director gives a thumbs up.", "", p("l7-3")),
    v("kose7-4", k("잘했어요!"), "Well done! (That went well!)", "Minho pats Murzik on the head.", "", p("l7-4")),
    v("kose7-5", k("수고하셨습니다!"), "Thank you for your hard work!", "The whole crew bow to each other after filming.", "", p("l7-5")),
    v("kose7-6", k("내일 봐요!"), "See you tomorrow!", "Murzik waves from the steps of the van.", "", p("l7-6")),
    v("kose7-7", k("안녕히 가세요!"), "Goodbye! (to someone leaving)", "Sua waves after the car as it drives away.", "", p("l7-7")),
  ],
  letters: [
    letter("ㅅ", "at the end of a syllable it is “t”", k("컷!"), "Cut!", "At the start of a syllable ㅅ is “s”, but at the end it is “t”: 컷 is keot."),
    letter("ㄹ", "at the end of a syllable it is “l”", k("내일 봐요!"), "See you tomorrow!"),
    letter("ㅎ", "at the end of a syllable before a vowel it is silent", k("좋아요!"), "Great!", "It is written 좋아요, but it sounds “joayo”."),
  ],
  dialogue: {
    title: "The first take",
    note: "Nuguseyo? means “Who is it?”. This is Murzik's first scene: a cat knocks on the hero's door.",
    lines: [
      line("director", k("레디, 액션!"), "Ready, action!"),
      line("minho", k("누구세요?"), "Who is it?"),
      line("murzik", k("안녕하세요! 저는 무르직이에요."), "Hello! I'm Murzik."),
      line("minho", BANGAWOYO, "Very nice to meet you!"),
      line("director", k("컷! 좋아요! 잘했어요, 무르직 씨!"), "Cut! Great! Well done, Murzik!"),
      line("sua", k("수고하셨습니다!"), "Thank you all for your hard work!"),
      line("murzik", k("감사합니다! 내일 봐요!"), "Thank you! See you tomorrow!"),
    ],
    gist: choice("kose7-d1", "How did the first take go?", [
      ["Great, the director is happy.", true],
      ["Badly, they have to film it again.", false],
      ["Murzik forgot his lines.", false],
    ]),
  },
  grammar: [
    {
      title: "All together",
      paragraphs: [
        "You can already: introduce yourself (jeoneun … ieyo / yeyo), ask someone's name (ireumi mwoyeyo?), say where you are from (…eseo wasseoyo), ask “what's this?” (igeo mwoyeyo?) and ask for something (…juseyo).",
        "New: two “goodbyes”. Annyeonghi gaseyo is to someone who is leaving, annyeonghi gyeseyo is to someone who is staying.",
      ],
      examples: [
        { ru: k("안녕히 계세요!"), en: "Goodbye! (to someone staying)" },
        { ru: k("내일 봐요!"), en: "See you tomorrow!" },
      ],
    },
  ],
  tasks: [
    listen("kose7-t1", "Listening test. Who is this and where is she from?", k("저는 지연이에요. 서울에서 왔어요. 배우예요."), [
      ["Jiyeon, from Seoul, an actress.", true],
      ["Sua, from Seoul, a director.", false],
      ["Jiyeon, from Paris, an actress.", false],
    ]),
    choice("kose7-t2", "You're leaving the set, and Sua is staying. What do you say to her?", [
      [k("안녕히 계세요!"), true],
      [k("안녕히 가세요!"), false],
      [k("레디, 액션!"), false],
    ], { skill: "grammar" }),
    match("kose7-t3", "Match the pairs.", [
      [k("컷!"), "Cut!"],
      [k("좋아요!"), "Great!"],
      [k("잘했어요!"), "Well done!"],
      [k("내일 봐요!"), "See you tomorrow!"],
    ], { skill: "words" }),
    choice("kose7-t4", "How is the word 컷 (cut) read?", [
      ["“keot”: ㅅ at the end sounds like “t”", true],
      ["“keos”", false],
      ["“geot”, without a puff of air", false],
    ], { skill: "letters" }),
    speak("kose7-t5", k("수고하셨습니다!"), k("감사합니다! 내일 봐요!"), "Thank you! See you tomorrow!", { help: "Filming is over. Answer Sua out loud." }),
    script("kose7-t6", "Remember all of Seoul. Finish the conversations.", [
      { speaker: "Director Park", text: IREUM },
      { speaker: "You", answer: IREUM_MAYA, options: [IREUM_MAYA, k("컷!"), ANIYO] },
      { speaker: "Jiyeon", text: EODI },
      { speaker: "You", answer: LONDON, options: [LONDON, k("의자예요."), GAMSA] },
      { speaker: "Cameraman", text: IGEO },
      { speaker: "You", answer: k("마이크예요."), options: [k("마이크예요."), k("안녕히 가세요!"), BANGAWOYO] },
      { speaker: "Director Park", text: k("준비됐어요?") },
      { speaker: "You", answer: DASI, options: [DASI, k("내일 봐요!"), k("우리")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "daebon",
    itemName: "A script full of autographs",
    itemNameRu: k("대본"),
    ru: k("우와, 제 대본이에요!"),
    en: "Wow, my script!",
    a11y: "The script of the first episode, its cover full of autographs in different pens, a little drawing of a cat at the top.",
    image: p("daebon"),
    steps: ["After filming, everyone signs Murzik's script.", "Director Park, Minho, Jiyeon, Sua, the make-up artist, the cameraman.", "Minho draws a little cat at the top.", "It's the first keepsake from the shoot!"],
    bridge: "Tomorrow the crew go to Hongdae to film a scene in a café.",
  },
};

const story: CityStory = {
  home: {
    name: "A little room on the roof",
    nameRu: k("옥탑방"),
    image: p("home"),
    a11y: "An empty little room on the roof of a Seoul house: a warm floor, a window, a flat roof and city lights outside the door. Murzik's suitcase in the middle.",
  },
  keepsakeId: "daebon",
  welcomeRu: k("안녕, 서울!"),
  welcomeEn: "Hello, Seoul!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik with his suitcase at Incheon Airport. Sua holds up a sign with his name in Korean.",
  departureImage: p("departure"),
  departureA11y: "The film crew wave to Murzik from the roof.",
  finale: [
    {
      image: p("daebon"),
      a11y: "Evening on the roof. The whole crew sit on the platform bench under the fairy lights, Murzik with his script in the middle.",
      lines: [
        { en: "In the evening the whole crew sit on the roof under the fairy lights." },
        { ru: k("잘했어요, 무르직 씨!"), en: "Well done, Murzik!" },
        { en: "Director Park says Murzik's part will be bigger. The café scene is tomorrow!" },
      ],
    },
    {
      image: p("home"),
      a11y: "Murzik walks around his little room on the roof, which he furnished lesson by lesson.",
      lines: [
        { en: "Murzik walks around his little room on the roof." },
        { en: "He takes with him the script full of autographs. The first keepsake from the shoot." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik jumps for joy.",
      lines: [
        { en: "The first days of filming in Seoul are done!" },
        { en: "7 / 7 lessons" },
        { ru: k("한국어 조금 해요!"), en: "I speak a little Korean!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "The film crew wave goodbye.",
      lines: [
        { ru: k("안녕히 계세요!"), en: "Goodbye!" },
        { ru: k("홍대로 가요!"), en: "Off to Hongdae!" },
      ],
    },
    {
      image: p("metro"),
      a11y: "Murzik and Sua in a Seoul metro carriage, Korean letters on the display.",
      lines: [{ en: "Next stop: Hongdae, Seoul's lively neighbourhood" }],
    },
    {
      image: pic("ko/hongdae/arrival"),
      a11y: "Murzik and Sua on a bright street in Hongdae: street musicians, cafés, signs in Korean letters.",
      lines: [
        { ru: k("우와, 홍대예요!"), en: "Wow, it's Hongdae!" },
        { en: "The café scene will be filmed here." },
      ],
    },
  ],
};

export const koSeoulEn = {
  id: "ko-seoul",
  name: "Seoul",
  nameKo: k("서울"),
  lessons: [seoul1, seoul2, seoul3, seoul4, seoul5, seoul6, seoul7],
  story,
};
