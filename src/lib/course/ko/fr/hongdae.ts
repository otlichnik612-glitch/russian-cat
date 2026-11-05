import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, k, letter, line, listen, match, script, speak, spell, v } from "./make";

/* Hongdae · « Il y a ? Combien ? » · un quartier animé de Séoul : café, chiffres, prix, métro, musiciens de rue, la scène au café. Les dernières lettres du hangul. */

const p = (name: string) => pic(`ko/hongdae/${name}`);

const ANNYEONG = k("안녕하세요!");
const ISSEOYO = k("네, 있어요.");
const EOPSSEOYO = k("아니요, 없어요.");
const MOSCOW = k("모스크바에서 왔어요.");
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
  title: "Il y a ou il n'y a pas ?",
  minutes: 7,
  goals: ["Demander « Vous avez… ? »", "Répondre « il y a » et « il n'y a pas »", "Commander au café"],
  vocabNote: "Isseoyo — « il y a », eopseoyo — « il n'y a pas ». La question se dit avec les mêmes mots, juste avec l'intonation montante : uyu isseoyo ? — « il y a du lait ? ».",
  vocab: [
    v("koho1-1", k("아이스 아메리카노 있어요?"), "Vous avez un café glacé ?", "Murzik jette un œil par-dessus le comptoir du café.", "", p("l1-1")),
    v("koho1-2", ISSEOYO, "Oui, il y en a.", "Le barista sourit et hoche la tête.", "", p("l1-2")),
    v("koho1-3", EOPSSEOYO, "Non, il n'y en a pas.", "Le barista écarte les bras.", "", p("l1-3")),
    v("koho1-4", k("물"), "de l'eau", "Un verre d'eau avec des glaçons.", "", p("l1-4")),
    v("koho1-5", k("우유"), "du lait", "Un verre de lait avec une moustache de mousse.", "", p("l1-5")),
    v("koho1-6", k("빵"), "du pain, une brioche", "Une brioche bien gonflée dans une assiette.", "", p("l1-6")),
    v("koho1-7", k("케이크"), "un gâteau", "Une part de gâteau aux fraises.", "", p("l1-7")),
  ],
  letters: [
    letter("ㅃ", "« pp » : la double de ㅂ, prononcée de façon tendue", k("빵"), "brioche"),
    letter("ㅠ", "« yu » : comme ㅜ (« ou »), mais avec deux petites queues", k("우유"), "lait"),
    letter("ㅄ", "deux lettres en fin de syllabe : en fin de mot ou devant une consonne, on ne lit que « p »", EOPSSEOYO, "Non, il n'y en a pas.", "Devant une voyelle, le ㅅ passe à la syllabe suivante : écrit 없어요, prononcé « eop-sseoyo »."),
  ],
  dialogue: {
    title: "Le café de Hongdae",
    note: "Eoseo oseyo ! — « Bienvenue ! », l'accueil des cafés et des magasins. Saengseon — « poisson ». Yeogineun — « ici (en ce qui concerne cet endroit) ».",
    lines: [
      line("waiter", k("어서 오세요!"), "Bienvenue !"),
      line("murzik", k("안녕하세요! 우유 있어요?"), "Bonjour ! Vous avez du lait ?"),
      line("waiter", ISSEOYO, "Oui, il y en a."),
      line("murzik", k("그럼 우유 주세요. 그리고 생선 있어요?"), "Alors du lait, s'il vous plaît. Et vous avez du poisson ?"),
      line("waiter", k("생선이요? 아니요, 없어요!"), "Du poisson ? Non, il n'y en a pas !"),
      line("sua", k("하하, 여기는 카페예요!"), "Ha ha, mais ici c'est un café !"),
      line("waiter", k("케이크 있어요!"), "Par contre, il y a du gâteau !"),
    ],
    gist: choice("koho1-d1", "Qu'est-ce qu'il n'y a pas au café ?", [
      ["Du poisson.", true],
      ["Du lait.", false],
      ["Du gâteau.", false],
    ]),
  },
  grammar: [
    {
      title: "Il y a et il n'y a pas : isseoyo / eopseoyo",
      paragraphs: [
        "Isseoyo (있어요) — « il y a ». Eopseoyo (없어요) — « il n'y a pas ». C'est exactement la logique du français « il y a » !",
        "La question, c'est le même mot avec l'intonation montante : mul isseoyo ? — « il y a de l'eau ? ». La réponse : ne, isseoyo — « oui, il y en a » ou aniyo, eopseoyo — « non, il n'y en a pas ».",
      ],
      examples: [
        { ru: k("물 있어요?"), en: "Il y a de l'eau ?" },
        { ru: k("빵 없어요."), en: "Il n'y a plus de brioche." },
      ],
    },
  ],
  tasks: [
    choice("koho1-t1", "Comment dire « Il n'y a pas de lait » ?", [
      [k("우유 없어요."), true],
      [k("우유 있어요."), false],
      [k("우유 아니요."), false],
    ], { skill: "grammar" }),
    listen("koho1-t2", "Écoute. Qu'a répondu le barista ?", ISSEOYO, [
      ["Oui, il y en a.", true],
      ["Non, il n'y en a pas.", false],
      ["Du lait.", false],
    ]),
    match("koho1-t3", "Relie les paires.", [
      [k("물"), "eau"],
      [k("우유"), "lait"],
      [k("빵"), "brioche"],
      [k("케이크"), "gâteau"],
    ], { skill: "words" }),
    spell("koho1-t4", "Reconstitue le mot « lait » à partir des syllabes.", k("우유"), ["오", "이"]),
    speak("koho1-t5", k("뭐 드릴까요?"), COFFEE_PLEASE, "Un café, s'il vous plaît.", { help: "Le barista demande : « Je vous sers quoi ? ». Réponds à voix haute." }),
    script("koho1-t6", "Souviens-toi de Séoul. Termine les conversations.", [
      { speaker: "Le serveur", text: k("어서 오세요!") },
      { speaker: "Toi", answer: ANNYEONG, options: [ANNYEONG, EOPSSEOYO, k("빵")] },
      { speaker: "Sua", text: EODI },
      { speaker: "Toi", answer: MOSCOW, options: [MOSCOW, ISSEOYO, k("케이크")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "beanbag",
    itemName: "Pouf",
    itemNameRu: k("빈백"),
    ru: k("우와, 빈백이에요!"),
    en: "Ouh là, un pouf !",
    a11y: "Un pouf jaune moelleux dans le coin d'une petite pièce, avec un creux exactement à la taille d'un chat.",
    image: p("beanbag"),
    steps: ["La patronne du café monte un pouf jaune.", "Murzik s'y affale.", "Le pouf prend la forme du chat.", "Maintenant, impossible de s'en lever !"],
    bridge: "Le soir, Jiyeon demande son numéro de téléphone à Murzik. Mais comment dit-on les chiffres en coréen ?",
  },
};

const hong2: Lesson = {
  id: "ko-a1-hongdae-2",
  level: "A1",
  cityId: "ko-hongdae",
  number: 2,
  title: "Il, i, sam — les chiffres",
  minutes: 7,
  goals: ["Compter de 1 à 10 (numération sino-coréenne)", "Dire un numéro de téléphone", "Comprendre 11, 20, 30"],
  vocabNote: "Le coréen a deux séries de nombres. Aujourd'hui, les sino-coréens : ils servent pour les téléphones, les prix et les dates. Les nombres purement coréens (hana, dul, set) arriveront à Suwon. Le zéro d'un numéro de téléphone se dit gong.",
  vocab: [
    v("koho2-1", k("일, 이, 삼"), "un, deux, trois", "Murzik compte sur ses petits doigts : un, deux, trois.", "", p("l2-1")),
    v("koho2-2", k("사, 오, 육"), "quatre, cinq, six", "Six pâtisseries dans la vitrine du café.", "", p("l2-2")),
    v("koho2-3", k("칠, 팔, 구"), "sept, huit, neuf", "Neuf ballons à l'entrée du café.", "", p("l2-3")),
    v("koho2-4", k("십"), "dix", "Murzik lève les deux pattes : dix !", "", p("l2-4")),
    v("koho2-5", k("공"), "zéro (dans un numéro de téléphone)", "Un beignet rond, comme un zéro.", "", p("l2-5")),
    v("koho2-6", PHONE_Q, "C'est quoi ton numéro de téléphone ?", "Jiyeon tend son téléphone à Murzik.", "", p("l2-6")),
    v("koho2-7", k("비밀이에요!"), "C'est un secret !", "Jiyeon fait un clin d'œil et pose un doigt sur ses lèvres.", "", p("l2-7")),
  ],
  letters: [
    letter("ㅝ", "« wo » : ㅜ et ㅓ ensemble", PHONE_Q, "C'est quoi ton numéro ?"),
    letter("ㅖ", "« ye » : comme ㅕ, mais avec un bâtonnet", PHONE_Q, "C'est quoi ton numéro ?"),
    letter("ㅑ", "« ya » : comme ㅏ, mais avec deux bâtonnets", k("제 이름은 사샤예요."), "Je m'appelle Sacha."),
  ],
  dialogue: {
    title: "Le numéro de téléphone",
    note: "Les numéros coréens commencent par 010 — gong-il-gong. On lit les chiffres un par un (en France on les lit par paires — pas en Corée !). Je beonhoneun — « mon numéro ».",
    lines: [
      line("jiyeon", k("무르직 씨, 전화번호가 뭐예요?"), "Murzik, c'est quoi ton numéro de téléphone ?"),
      line("murzik", PHONE_A, "010-1234-5678."),
      line("jiyeon", k("다시 한 번 말해 주세요."), "Répète, s'il te plaît."),
      line("murzik", k("공일공, 일이삼사, 오육칠팔!"), "010-1234-5678 !"),
      line("jiyeon", k("고마워요! 제 번호는… 비밀이에요!"), "Merci ! Et mon numéro… c'est un secret !"),
      line("sua", k("하하! 지연 씨!"), "Ha ha ! Ah, Jiyeon !"),
    ],
    gist: choice("koho2-d1", "Que dit Jiyeon à propos de son numéro ?", [
      ["C'est un secret.", true],
      ["010-1234-5678.", false],
      ["Elle n'a pas de téléphone.", false],
    ]),
  },
  grammar: [
    {
      title: "La numération sino-coréenne : il, i, sam",
      paragraphs: [
        "Il 1, i 2, sam 3, sa 4, o 5, yuk 6, chil 7, pal 8, gu 9, sip 10.",
        "Ensuite on les combine : sip-il — 11 (dix-un), i-sip — 20 (deux-dix), sam-sip — 30, i-sip-o — 25. Plus simple que soixante-dix et quatre-vingt-dix !",
      ],
      examples: [
        { ru: k("십일"), en: "onze" },
        { ru: k("이십"), en: "vingt" },
      ],
    },
  ],
  tasks: [
    choice("koho2-t1", "Comment dit-on « vingt » ?", [
      [k("이십"), true],
      [k("십이"), false],
      [k("이백"), false],
    ], { skill: "grammar" }),
    listen("koho2-t2", "Écoute. Quel est ce chiffre ?", k("칠"), [
      ["7", true],
      ["8", false],
      ["1", false],
    ]),
    match("koho2-t3", "Relie les paires.", [
      [k("일"), "1"],
      [k("삼"), "3"],
      [k("팔"), "8"],
      [k("십"), "10"],
    ], { skill: "words" }),
    spell("koho2-t4", "Reconstitue « numéro de téléphone » à partir des syllabes.", k("전화번호"), ["존", "하"]),
    speak("koho2-t5", PHONE_Q, PHONE_A, "010-1234-5678.", { help: "Dis un numéro de téléphone à voix haute. Le tien si tu veux, chiffre par chiffre." }),
    script("koho2-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Sua", text: k("커피 있어요?") },
      { speaker: "Toi", answer: ISSEOYO, options: [ISSEOYO, k("십"), k("비밀이에요!")] },
      { speaker: "Jiyeon", text: EODI },
      { speaker: "Toi", answer: MOSCOW, options: [MOSCOW, EOPSSEOYO, PHONE_A] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sigye",
    itemName: "Horloge murale",
    itemNameRu: k("시계"),
    ru: k("우와, 시계예요!"),
    en: "Ouh là, une horloge !",
    a11y: "Une horloge murale ronde en forme de tête de chat, les aiguilles sont des moustaches.",
    image: p("sigye"),
    steps: ["Sua accroche une horloge ronde au mur.", "Le cadran est une tête de chat.", "Les aiguilles sont des moustaches !", "Murzik apprend les chiffres dessus."],
    bridge: "Le matin, Murzik va tout seul au café chercher un café. Mais combien ça coûte ?",
  },
};

const hong3: Lesson = {
  id: "ko-a1-hongdae-3",
  level: "A1",
  cityId: "ko-hongdae",
  number: 3,
  title: "Ça coûte combien ?",
  minutes: 7,
  goals: ["Demander le prix", "Comprendre un prix en wons", "Dire « cher » et « pas cher »"],
  vocabNote: "Le won — la monnaie coréenne. Baek — cent, cheon — mille, man — dix mille. Hana — « un » : c'est la numération purement coréenne, on la verra à Suwon.",
  vocab: [
    v("koho3-1", EOLMA, "Ça coûte combien ?", "Murzik montre le gobelet de café.", "", p("l3-1")),
    v("koho3-2", k("원"), "le won (la monnaie coréenne)", "Des pièces et des billets dans une paume.", "", p("l3-2")),
    v("koho3-3", k("백, 천"), "cent, mille", "Une pièce brillante de cent wons et un billet bleu de mille wons.", "", p("l3-3")),
    v("koho3-5", k("만"), "dix mille", "Un billet vert de dix mille wons.", "", p("l3-5")),
    v("koho3-6", k("비싸요."), "C'est cher.", "Murzik se prend la tête entre les pattes.", "", p("l3-6")),
    v("koho3-4", k("싸요."), "C'est pas cher.", "Murzik montre joyeusement une pièce : pas cher !", "", p("l3-4")),
    v("koho3-7", CARD, "Je peux payer par carte ?", "Murzik tend une petite carte bancaire.", "", p("l3-7")),
  ],
  letters: [
    letter("ㅙ", "« we » : ㅗ et ㅐ ensemble", CARD, "Je peux payer par carte ?"),
  ],
  dialogue: {
    title: "Murzik paie tout seul",
    note: "Amerikano hana juseyo — « un americano, s'il vous plaît ». Seoureun — « à Séoul (en ce qui concerne Séoul) ». Dwaeyo — « on peut ».",
    lines: [
      line("murzik", k("아메리카노 하나 주세요."), "Un americano, s'il vous plaît."),
      line("waiter", k("사천오백 원이에요."), "Quatre mille cinq cents wons."),
      line("murzik", k("우와, 비싸요!"), "Ouh là, c'est cher !"),
      line("sua", k("서울은 커피가 비싸요."), "À Séoul, le café est cher."),
      line("murzik", CARD, "Je peux payer par carte ?"),
      line("waiter", k("네, 돼요!"), "Oui, bien sûr !"),
    ],
    gist: choice("koho3-d1", "Combien coûte l'americano ?", [
      ["4500 wons.", true],
      ["1000 wons.", false],
      ["10 000 wons.", false],
    ]),
  },
  grammar: [
    {
      title: "Les grands nombres : baek, cheon, man",
      paragraphs: [
        "Baek — 100, cheon — 1000, man — 10 000. Le nombre de centaines ou de milliers se dit devant : sa-cheon — 4000, o-baek — 500. Ensemble : sacheon-obaek won — 4500 wons.",
        "« Mille » se dit juste cheon, sans il : cheon won — 1000 wons, man won — 10 000 wons. Attention : le coréen groupe par « dix mille » (man), pas par mille comme le français !",
      ],
      examples: [
        { ru: k("천 원"), en: "1000 wons" },
        { ru: k("이천 원"), en: "2000 wons" },
      ],
    },
  ],
  tasks: [
    choice("koho3-t1", "Comment dire « 2000 wons » ?", [
      [k("이천 원"), true],
      [k("이백 원"), false],
      [k("이만 원"), false],
    ], { skill: "grammar" }),
    listen("koho3-t2", "Écoute. Combien ça coûte ?", k("만 원이에요."), [
      ["10 000 wons.", true],
      ["1000 wons.", false],
      ["100 wons.", false],
    ]),
    match("koho3-t3", "Relie les paires.", [
      [k("백"), "cent"],
      [k("천"), "mille"],
      [k("만"), "dix mille"],
      [k("원"), "won"],
    ], { skill: "words" }),
    spell("koho3-t4", "Reconstitue le mot « combien » à partir des syllabes.", k("얼마"), ["모", "알"]),
    speak("koho3-t5", k("사천오백 원이에요."), CARD, "Je peux payer par carte ?", { help: "Le barista annonce le prix. Demande à voix haute si tu peux payer par carte." }),
    script("koho3-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Jiyeon", text: PHONE_Q },
      { speaker: "Toi", answer: PHONE_A, options: [PHONE_A, k("비싸요."), ANNYEONG] },
      { speaker: "Sua", text: k("물 있어요?") },
      { speaker: "Toi", answer: EOPSSEOYO, options: [EOPSSEOYO, k("천 원"), CARD] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "piggy",
    itemName: "Tirelire-cochon",
    itemNameRu: k("저금통"),
    ru: k("우와, 저금통이에요!"),
    en: "Ouh là, une tirelire !",
    a11y: "Une tirelire-cochon rose sur l'étagère, à côté une petite pile de pièces de cent wons.",
    image: p("piggy"),
    steps: ["Murzik rapporte la monnaie à la maison.", "Sua lui offre une tirelire-cochon rose.", "Ting ! La première pièce de cent wons.", "Peut-être de quoi s'offrir un café ?"],
    bridge: "Demain, Sua apprend à Murzik à prendre le métro. L'essentiel — ne pas se perdre !",
  },
};

const hong4: Lesson = {
  id: "ko-a1-hongdae-4",
  level: "A1",
  cityId: "ko-hongdae",
  number: 4,
  title: "Où est la sortie ?",
  minutes: 7,
  goals: ["Demander « Où est… ? »", "Répondre « ici » et « là-bas »", "S'orienter dans le métro"],
  vocabNote: "Eodiyeyo ? — « où est… ? ». Devant, on ajoute i après une consonne (yeogi — la station) et ga après une voyelle (chulguga — la sortie).",
  vocab: [
    v("koho4-1", TOILET, "Où sont les toilettes ?", "Murzik trépigne d'une patte sur l'autre.", "", p("l4-1")),
    v("koho4-2", k("역"), "la station", "L'entrée d'une station de métro, des marches qui descendent.", "", p("l4-2")),
    v("koho4-3", k("지하철"), "le métro", "Une rame de métro brillante arrive à quai.", "", p("l4-3")),
    v("koho4-4", k("출구"), "la sortie", "Un panneau de sortie jaune avec une flèche.", "", p("l4-4")),
    v("koho4-5", k("여기예요."), "Ici.", "Sua tape du pied : ici !", "", p("l4-5")),
    v("koho4-6", JEOGI, "Là-bas.", "Sua montre au loin.", "", p("l4-6")),
    v("koho4-7", k("지하철 쉬워요!"), "Le métro, c'est facile !", "Murzik tient fièrement le plan du métro.", "", p("l4-7")),
  ],
  letters: [
    letter("ㅟ", "« wi » : ㅜ et ㅣ ensemble — ça se lit comme « oui » en français !", k("지하철 쉬워요!"), "Le métro, c'est facile !"),
  ],
  dialogue: {
    title: "La station Hongdae",
    note: "Hongdae-ipgu-yeok — la station « Hongdae ». Gu beon chulgu — « la sortie numéro neuf » : les numéros de sortie se disent avec les nombres sino-coréens.",
    lines: [
      line("murzik", k("수아 씨, 홍대입구역이 어디예요?"), "Sua, où est la station « Hongdae » ?"),
      line("sua", k("여기예요!"), "Ici !"),
      line("murzik", k("그럼 출구가 어디예요?"), "Et où est la sortie ?"),
      line("sua", k("저기예요. 구 번 출구!"), "Là-bas. La sortie numéro neuf !"),
      line("murzik", k("그런데… 화장실이 어디예요?"), "Et… où sont les toilettes ?"),
      line("sua", k("하하, 화장실은 저기예요!"), "Ha ha, les toilettes sont là-bas !"),
      line("murzik", k("지하철 쉬워요!"), "Le métro, c'est facile !"),
    ],
    gist: choice("koho4-d1", "Par quelle sortie sortent-ils ?", [
      ["La neuvième.", true],
      ["La première.", false],
      ["La dixième.", false],
    ]),
  },
  grammar: [
    {
      title: "Où est… ? — …i / ga eodiyeyo ?",
      paragraphs: [
        "Pour demander où est quelque chose, on ajoute après le mot i (après une consonne) ou ga (après une voyelle), puis eodiyeyo ?",
        "Yeok finit par une consonne : yeogi eodiyeyo ? Chulgu finit par une voyelle : chulguga eodiyeyo ? La réponse : yeogiyeyo — ici, jeogiyeyo — là-bas.",
      ],
      examples: [
        { ru: k("역이 어디예요?"), en: "Où est la station ?" },
        { ru: k("출구가 어디예요?"), en: "Où est la sortie ?" },
      ],
    },
  ],
  tasks: [
    choice("koho4-t1", "Comment demander « Où est la sortie ? »", [
      [k("출구가 어디예요?"), true],
      [k("출구이 어디예요?"), false],
      [k("출구가 얼마예요?"), false],
    ], { skill: "grammar" }),
    listen("koho4-t2", "Écoute. Où sont les toilettes ?", JEOGI, [
      ["Là-bas.", true],
      ["Ici.", false],
      ["Dans le métro.", false],
    ]),
    match("koho4-t3", "Relie les paires.", [
      [k("역"), "la station"],
      [k("지하철"), "le métro"],
      [k("출구"), "la sortie"],
      [k("화장실"), "les toilettes"],
    ], { skill: "words" }),
    spell("koho4-t4", "Reconstitue le mot « métro » à partir des syllabes.", k("지하철"), ["자", "찰"]),
    speak("koho4-t5", TOILET, JEOGI, "Là-bas.", { help: "On te demande où sont les toilettes. Montre et réponds à voix haute." }),
    script("koho4-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Le serveur", text: k("사천오백 원이에요.") },
      { speaker: "Toi", answer: CARD, options: [CARD, k("여기예요."), k("우유")] },
      { speaker: "Jiyeon", text: PHONE_Q },
      { speaker: "Toi", answer: PHONE_A, options: [PHONE_A, JEOGI, EOPSSEOYO] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "usan",
    itemName: "Parapluie transparent",
    itemNameRu: k("우산"),
    ru: k("우와, 우산이에요!"),
    en: "Ouh là, un parapluie !",
    a11y: "Un petit parapluie transparent sèche, ouvert, près de la porte, couvert de gouttes de pluie.",
    image: p("usan"),
    steps: ["À la sortie du métro, la pluie se met à tomber.", "Sua achète un parapluie transparent à Murzik.", "À travers, on voit la pluie et les lumières.", "À la maison, le parapluie sèche près de la porte."],
    bridge: "Le soir, des musiciens de rue chantent dans les rues de Hongdae. Et l'une des voix semble familière…",
  },
};

const hong5: Lesson = {
  id: "ko-a1-hongdae-5",
  level: "A1",
  cityId: "ko-hongdae",
  number: 5,
  title: "Le concert de rue",
  minutes: 7,
  goals: ["Dire « C'est vraiment génial ! »", "Dire « très » et « trop »", "Demander « Encore ! »"],
  vocabNote: "Jinjja — « vraiment, pour de vrai » : jinjja joayo — « c'est vraiment bien ». Neomu — « très, trop ». Tto et han beon deo — « encore une fois ».",
  vocab: [
    v("koho5-1", k("노래"), "la chanson", "Un musicien de rue chante avec sa guitare, entouré d'une foule.", "", p("l5-1")),
    v("koho5-2", JINJJA, "C'est vraiment génial !", "Murzik applaudit des deux pattes.", "", p("l5-2")),
    v("koho5-3", k("진짜요?"), "Vraiment ?", "Murzik écarquille les yeux.", "", p("l5-3")),
    v("koho5-4", k("너무"), "très, trop", "Un énorme gobelet de bubble tea — trop grand pour un chat.", "", p("l5-4")),
    v("koho5-5", k("또"), "encore, à nouveau", "Le musicien reprend sa guitare.", "", p("l5-5")),
    v("koho5-6", k("한 번 더!"), "Encore une fois !", "La foule lève les bras et en redemande.", "", p("l5-6")),
    v("koho5-7", k("박수!"), "Applaudissements !", "Tout le monde applaudit, Murzik le plus fort.", "", p("l5-7")),
  ],
  letters: [
    letter("ㄸ", "« tt » : la double de ㄷ, prononcée de façon tendue", k("또"), "encore"),
    letter("ㅉ", "« jj » : la double de ㅈ, prononcée de façon tendue", k("진짜요?"), "Vraiment ?"),
  ],
  dialogue: {
    title: "Qui chante ?",
    note: "Jeo saram — « cet homme là-bas ». Swit ! — « Chut ! ».",
    lines: [
      line("murzik", k("우와, 노래 진짜 좋아요!"), "Ouh là, cette chanson est vraiment géniale !"),
      line("sua", k("저 사람… 민호 씨예요!"), "Cet homme là-bas… c'est Minho !"),
      line("murzik", k("진짜요?"), "Vraiment ?"),
      line("minho", k("쉿! 비밀이에요!"), "Chut ! C'est un secret !"),
      line("sua", k("민호 씨, 한 번 더!"), "Minho, encore une fois !"),
      line("minho", k("좋아요!"), "D'accord !"),
      line("murzik", k("박수!"), "Applaudissements !"),
    ],
    gist: choice("koho5-d1", "Qui chante dans la rue ?", [
      ["Minho.", true],
      ["Jiyeon.", false],
      ["Le réalisateur Park.", false],
    ]),
  },
  grammar: [
    {
      title: "Très et vraiment : neomu, jinjja",
      paragraphs: [
        "Neomu — « très » ou « trop » : neomu joayo — très bien, neomu bissayo — trop cher.",
        "Jinjja — « vraiment » : jinjja joayo — vraiment génial. Jinjjayo ? — « Vraiment ? ». Tto et han beon deo — « encore une fois ».",
      ],
      examples: [
        { ru: k("너무 좋아요!"), en: "C'est trop bien !" },
        { ru: k("또 만나요!"), en: "On se revoit !" },
      ],
    },
  ],
  tasks: [
    choice("koho5-t1", "Comment dire « C'est trop cher ! » ?", [
      [k("너무 비싸요!"), true],
      [k("너무 싸요!"), false],
      [k("진짜요?"), false],
    ], { skill: "grammar" }),
    listen("koho5-t2", "Écoute. Que crie Sua ?", k("한 번 더!"), [
      ["Encore une fois !", true],
      ["Vraiment ?", false],
      ["Une chanson !", false],
    ]),
    match("koho5-t3", "Relie les paires.", [
      [k("노래"), "la chanson"],
      [k("또"), "encore"],
      [k("너무"), "très"],
      [k("진짜"), "vraiment"],
    ], { skill: "words" }),
    spell("koho5-t4", "Reconstitue le mot « chanson » à partir des syllabes.", k("노래"), ["누", "레"]),
    speak("koho5-t5", k("노래 좋아요?"), JINJJA, "C'est vraiment génial !", { help: "Minho demande si la chanson t'a plu. Réponds à voix haute." }),
    script("koho5-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Sua", text: k("출구가 어디예요?") },
      { speaker: "Toi", answer: JEOGI, options: [JEOGI, k("박수!"), k("천 원")] },
      { speaker: "Jiyeon", text: EOLMA },
      { speaker: "Toi", answer: k("천 원이에요."), options: [k("천 원이에요."), k("진짜요?"), k("여기예요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gita",
    itemName: "Petite guitare",
    itemNameRu: k("기타"),
    ru: k("우와, 기타예요!"),
    en: "Ouh là, une guitare !",
    a11y: "Une petite guitare en bois, façon ukulélé, adossée au pouf, avec un autocollant de chat dessus.",
    image: p("gita"),
    steps: ["Après le concert, Minho donne sa petite guitare à Murzik.", "« C'est ma première guitare. Mais à personne d'autre ! »", "Murzik y colle un autocollant de chat.", "Dzing ! La première note."],
    bridge: "Demain, on tourne la scène du café. Murzik sera le client, Jiyeon la serveuse.",
  },
};

const hong6: Lesson = {
  id: "ko-a1-hongdae-6",
  level: "A1",
  cityId: "ko-hongdae",
  number: 6,
  title: "La scène au café",
  minutes: 7,
  goals: ["Demander « Il reste une place ? »", "Dire « c'est bon » et « ce n'est pas bon »", "Appeler le serveur"],
  vocabNote: "Jeogiyo ! — « Excusez-moi ! » : c'est comme ça qu'on appelle le serveur. Masisseoyo — « c'est bon » (litt. « il y a du goût »), madeopseoyo — « ce n'est pas bon » (litt. « il n'y a pas de goût »).",
  vocab: [
    v("koho6-1", k("저기요, 자리 있어요?"), "Excusez-moi, il reste une place ?", "Murzik jette un œil dans un café cosy.", "", p("l6-1")),
    v("koho6-2", k("여기 앉으세요."), "Asseyez-vous ici.", "Jiyeon, en tablier, tire une chaise.", "", p("l6-2")),
    v("koho6-3", k("메뉴"), "le menu", "Un menu avec des photos de desserts.", "", p("l6-3")),
    v("koho6-4", k("맛있어요!"), "C'est bon !", "Murzik, de la crème sur les moustaches, plisse les yeux de plaisir.", "", p("l6-4")),
    v("koho6-5", k("맛없어요."), "Ce n'est pas bon.", "Murzik plisse le nez au-dessus d'un citron.", "", p("l6-5")),
    v("koho6-6", k("웨이터"), "le serveur", "Un serveur avec un plateau, dans son rôle du scénario.", "", p("l6-6")),
    v("koho6-7", k("재미있어요!"), "C'est amusant ! Génial !", "Murzik rit avec toute l'équipe de tournage.", "", p("l6-7")),
  ],
  letters: [
    letter("ㅞ", "« we » : ㅜ et ㅔ ensemble", k("웨이터"), "le serveur"),
  ],
  dialogue: {
    title: "La prise au café",
    note: "C'est une scène de la série : Murzik joue le client, Jiyeon la serveuse. Masisseoyo ? avec l'intonation — « C'est bon ? ».",
    lines: [
      line("director", k("레디, 액션!"), "Moteur, action !"),
      line("murzik", k("저기요, 자리 있어요?"), "Excusez-moi, il reste une place ?"),
      line("jiyeon", k("네, 여기 앉으세요. 메뉴 여기요."), "Oui, asseyez-vous ici. Voici le menu."),
      line("murzik", k("케이크 주세요."), "Un gâteau, s'il vous plaît."),
      line("jiyeon", k("여기요. 맛있어요?"), "Voilà. C'est bon ?"),
      line("murzik", MASISSEOYO, "Oui, c'est vraiment bon !"),
      line("director", k("컷! 좋아요!"), "Coupez ! Parfait !"),
    ],
    gist: choice("koho6-d1", "Que commande Murzik dans la scène ?", [
      ["Un gâteau.", true],
      ["Un café.", false],
      ["Du poisson.", false],
    ]),
  },
  grammar: [
    {
      title: "C'est bon et ce n'est pas bon : masisseoyo / madeopseoyo",
      paragraphs: [
        "Mat — « le goût ». Mat + isseoyo = masisseoyo — « c'est bon » (il y a du goût). Mat + eopseoyo = madeopseoyo — « ce n'est pas bon » (il n'y a pas de goût).",
        "Pareil : jaemi (« l'intérêt ») + isseoyo = jaemiisseoyo — « c'est amusant, intéressant ».",
      ],
      examples: [
        { ru: k("케이크 맛있어요."), en: "Le gâteau est bon." },
        { ru: k("드라마 재미있어요!"), en: "Le drama est génial !" },
      ],
    },
  ],
  tasks: [
    choice("koho6-t1", "Comment dire « Ce n'est pas bon » ?", [
      [k("맛없어요."), true],
      [k("맛있어요!"), false],
      [k("없어요."), false],
    ], { skill: "grammar" }),
    listen("koho6-t2", "Écoute. Que dit Jiyeon ?", k("여기 앉으세요."), [
      ["Asseyez-vous ici.", true],
      ["Il reste une place ?", false],
      ["Voici le menu.", false],
    ]),
    match("koho6-t3", "Relie les paires.", [
      [k("메뉴"), "le menu"],
      [k("자리"), "la place"],
      [k("맛있어요!"), "C'est bon !"],
      [k("맛없어요."), "Ce n'est pas bon."],
    ], { skill: "words" }),
    spell("koho6-t4", "Reconstitue le mot « menu » à partir des syllabes.", k("메뉴"), ["매", "누"]),
    speak("koho6-t5", k("맛있어요?"), MASISSEOYO, "Oui, c'est vraiment bon !", { help: "La serveuse demande si c'est bon. Réponds à voix haute." }),
    script("koho6-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Minho", text: k("노래 좋아요?") },
      { speaker: "Toi", answer: JINJJA, options: [JINJJA, k("맛없어요."), k("출구")] },
      { speaker: "Sua", text: TOILET },
      { speaker: "Toi", answer: JEOGI, options: [JEOGI, k("메뉴"), ISSEOYO] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mug",
    itemName: "Mug avec un chat",
    itemNameRu: k("머그컵"),
    ru: k("우와, 머그컵이에요!"),
    en: "Ouh là, un mug !",
    a11y: "Un mug blanc avec un chat roux dessiné et des petites oreilles sur le bord, posé sur le rebord de la fenêtre.",
    image: p("mug"),
    steps: ["La patronne du café est ravie qu'on tourne la série chez elle.", "Elle offre un mug à Murzik.", "Dessus, un chat roux — le portrait craché de Murzik !", "Et sur le bord, deux petites oreilles."],
    bridge: "Dernière soirée à Hongdae. Demain, direction Suwon. Il faut recharger la carte de métro.",
  },
};

const hong7: Lesson = {
  id: "ko-a1-hongdae-7",
  level: "A1",
  cityId: "ko-hongdae",
  number: 7,
  title: "À bientôt, Hongdae !",
  minutes: 8,
  goals: ["Recharger la carte de métro", "Répondre court et poli : …yo", "Revoir tout Hongdae"],
  vocabNote: "La réponse courte et polie, c'est le mot + yo (iyeyo après une consonne) : keopiyeyo — « un café », man woniyeyo — « dix mille wons ».",
  vocab: [
    v("koho7-1", k("교통카드"), "la carte de transport", "Une carte pour le métro et le bus avec un autocollant de chat.", "", p("l7-1")),
    v("koho7-2", k("충전해 주세요."), "Rechargez-la, s'il vous plaît.", "Murzik tend sa carte au vendeur de la supérette.", "", p("l7-2")),
    v("koho7-3", k("만 원이요."), "Dix mille wons.", "Murzik pose un billet vert sur le comptoir.", "", p("l7-3")),
    v("koho7-4", k("얘기해 주세요."), "Raconte-moi, s'il te plaît.", "Murzik écoute Sua, la joue appuyée sur sa patte.", "", p("l7-4")),
    v("koho7-5", k("재미있었어요!"), "C'était génial !", "Murzik et Sua rient dans une rue de Hongdae, la nuit.", "", p("l7-5")),
    v("koho7-6", k("또 오세요!"), "Revenez nous voir !", "La patronne du café fait signe depuis la porte.", "", p("l7-6")),
    v("koho7-7", k("내일은 수원이에요!"), "Demain, c'est Suwon !", "Sua montre sur la carte une ville avec une forteresse.", "", p("l7-7")),
  ],
  letters: [
    letter("ㅒ", "« ye » : comme ㅐ, mais avec deux bâtonnets ; elle est rare", k("얘기해 주세요."), "Raconte-moi, s'il te plaît.", "Tu connais maintenant toutes les lettres coréennes !"),
  ],
  dialogue: {
    title: "La dernière soirée",
    note: "Eolmayeyo ? — « C'est combien ? » (court et poli). Jaemiisseosseoyo — « c'était génial » : le passé arrive à Andong.",
    lines: [
      line("murzik", k("교통카드 충전해 주세요."), "Rechargez ma carte de transport, s'il vous plaît."),
      line("seller", k("얼마요?"), "De combien ?"),
      line("murzik", k("만 원이요."), "De dix mille wons."),
      line("seller", k("네, 여기요."), "D'accord, voilà."),
      line("sua", k("무르직 씨, 오늘 재미있었어요?"), "Murzik, c'était bien, aujourd'hui ?"),
      line("murzik", k("네! 진짜 재미있었어요!"), "Oui ! C'était vraiment génial !"),
      line("sua", k("내일은 수원이에요!"), "Et demain — Suwon !"),
    ],
    gist: choice("koho7-d1", "De combien Murzik recharge-t-il sa carte ?", [
      ["De 10 000 wons.", true],
      ["De 1000 wons.", false],
      ["De 4500 wons.", false],
    ]),
  },
  grammar: [
    {
      title: "Tout ensemble. La réponse courte et polie",
      paragraphs: [
        "Tu sais déjà : il y a / il n'y a pas (isseoyo / eopseoyo), les nombres et les prix (il, i, sam ; baek, cheon, man), « où est… ? » (…i / ga eodiyeyo ?), « très » et « vraiment » (neomu, jinjja).",
        "Nouveau : pour répondre court et poli, on prend le mot + yo (iyeyo après une consonne) : keopiyeyo — « un café », man woniyeyo — « dix mille wons ».",
      ],
      examples: [
        { ru: k("커피요."), en: "Un café." },
        { ru: k("만 원이요."), en: "Dix mille wons." },
      ],
    },
  ],
  tasks: [
    listen("koho7-t1", "Examen audio. Qu'est-ce qu'il y a au café et combien coûte le café ?", k("카페에 케이크 있어요. 커피는 사천 원이에요."), [
      ["Il y a du gâteau, le café coûte 4000 wons.", true],
      ["Il n'y a pas de gâteau, le café coûte 4000 wons.", false],
      ["Il y a du gâteau, le café coûte 400 wons.", false],
    ]),
    choice("koho7-t2", "Comment demander « Où est la station ? »", [
      [k("역이 어디예요?"), true],
      [k("역가 어디예요?"), false],
      [k("역이 얼마예요?"), false],
    ], { skill: "grammar" }),
    match("koho7-t3", "Relie les paires.", [
      [k("있어요"), "il y a"],
      [k("없어요"), "il n'y a pas"],
      [k("비싸요"), "cher"],
      [k("싸요"), "pas cher"],
    ], { skill: "words" }),
    choice("koho7-t4", "Dans quelle syllabe y a-t-il la lettre double ㄸ (tt) ?", [
      ["떡", true],
      ["덕", false],
      ["턱", false],
    ], { skill: "letters" }),
    speak("koho7-t5", k("얼마요?"), k("만 원이요."), "Dix mille wons.", { help: "Le vendeur demande de combien recharger la carte. Réponds court et poli." }),
    script("koho7-t6", "Souviens-toi de tout Hongdae. Termine les conversations.", [
      { speaker: "Le serveur", text: k("어서 오세요!") },
      { speaker: "Toi", answer: k("저기요, 자리 있어요?"), options: [k("저기요, 자리 있어요?"), k("또 오세요!"), k("십")] },
      { speaker: "Jiyeon", text: PHONE_Q },
      { speaker: "Toi", answer: PHONE_A, options: [PHONE_A, k("맛없어요."), JEOGI] },
      { speaker: "Le serveur", text: k("사천오백 원이에요.") },
      { speaker: "Toi", answer: CARD, options: [CARD, k("박수!"), k("메뉴")] },
      { speaker: "Sua", text: k("재미있었어요?") },
      { speaker: "Toi", answer: k("네! 진짜 재미있었어요!"), options: [k("네! 진짜 재미있었어요!"), EOPSSEOYO, k("출구가 어디예요?")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tcard",
    itemName: "Carte de transport à chat",
    itemNameRu: k("교통카드"),
    ru: k("우와, 교통카드예요!"),
    en: "Ouh là, une carte de transport !",
    a11y: "Une petite carte de transport sur un cordon avec un porte-clés chat, et un autocollant de guitare dessus.",
    image: p("tcard"),
    steps: ["Sua accroche la carte au cordon de Murzik.", "Minho y colle un autocollant de guitare.", "Maintenant, Murzik prend le métro tout seul.", "Le deuxième souvenir du tournage !"],
    bridge: "Au matin — le métro jusqu'à Suwon. Là-bas, une vieille forteresse et une scène à l'arc et aux flèches !",
  },
};

const story: CityStory = {
  home: {
    name: "La chambrette au-dessus du café",
    nameRu: k("카페 위 작은 방"),
    image: p("home"),
    a11y: "Une petite chambrette vide au-dessus du café : parquet en bois, fenêtre sur une rue bruyante pleine d'enseignes et de lumières. La valise de Murzik au milieu.",
  },
  keepsakeId: "tcard",
  welcomeRu: k("안녕, 홍대!"),
  welcomeEn: "Bonjour, Hongdae !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Sua dans une rue animée de Hongdae : musiciens de rue, cafés, enseignes et lumières.",
  departureImage: p("departure"),
  departureA11y: "La patronne du café fait signe à Murzik depuis la porte ; Minho, casquette sur la tête, se cache derrière elle et fait signe lui aussi.",
  finale: [
    {
      image: p("gita"),
      a11y: "Le soir. Murzik est assis sur le rebord de la fenêtre au-dessus du café et joue doucement de la petite guitare ; en bas, les lumières de Hongdae.",
      lines: [
        { en: "Dernière soirée à Hongdae. Murzik joue de la guitare de Minho." },
        { ru: k("진짜 재미있었어요!"), en: "C'était vraiment génial !" },
        { en: "La scène du café est réussie. Le réalisateur Park dit qu'à Suwon, Murzik aura une scène avec un vrai arc !" },
      ],
    },
    {
      image: p("home"),
      a11y: "Murzik fait le tour de sa chambrette au-dessus du café, qu'il a meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambrette au-dessus du café." },
        { en: "Dans ses bagages — la carte de transport à chat. Le deuxième souvenir du tournage." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { en: "Hongdae terminé !" },
        { en: "7 / 7 leçons" },
        { ru: k("한글 다 알아요!"), en: "Je connais toutes les lettres coréennes !" },
      ],
    },
    {
      image: p("departure"),
      a11y: "La patronne du café et Minho font des signes d'adieu.",
      lines: [
        { ru: k("또 오세요!"), en: "Revenez nous voir !" },
        { ru: k("내일은 수원이에요!"), en: "Prochain arrêt : Suwon !" },
      ],
    },
    {
      image: p("metro"),
      a11y: "Murzik passe lui-même sa carte de transport sur le tourniquet du métro ; Sua, à côté, lève le pouce.",
      lines: [{ en: "Hongdae → Suwon" }],
    },
    {
      image: pic("ko/suwon/arrival"),
      a11y: "Murzik et Sua devant les vieilles portes de pierre de la forteresse de Suwon ; des bannières colorées flottent au-dessus de la muraille.",
      lines: [
        { ru: k("우와, 수원이에요!"), en: "Ouh là, c'est Suwon !" },
        { en: "C'est là que se dresse la vieille forteresse." },
      ],
    },
  ],
};

export const koHongdaeFr = {
  id: "ko-hongdae",
  name: "Hongdae",
  nameKo: k("홍대"),
  lessons: [hong1, hong2, hong3, hong4, hong5, hong6, hong7],
  story,
};
