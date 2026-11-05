import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, k, line, listen, match, script, speak, spell, v } from "./make";

/* Suwon · « Combien ? Où ? » · la vieille forteresse : le compte coréen 1–10, les mots-compteurs (gae, myeong, jan, sal), « sur, sous, derrière, à côté », « il y a… ». La scène à l'arc. */

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
  goals: ["Compter de 1 à 5 en coréen", "Demander « Il y en a combien ? »", "Dire « deux », « trois » (objets)"],
  vocabNote: "La deuxième série de nombres — purement coréenne : hana, dul, set, net, daseot. Elle sert à compter les choses, les gens et l'âge. Devant le mot gae (« unité »), hana devient han, dul — du, set — se, net — ne.",
  vocab: [
    v("kosu1-1", k("하나"), "un", "Une flèche dans la main de Minho.", "", p("l1-1")),
    v("kosu1-2", k("둘"), "deux", "Deux flèches.", "", p("l1-2")),
    v("kosu1-3", k("셋"), "trois", "Trois flèches.", "", p("l1-3")),
    v("kosu1-4", k("넷"), "quatre", "Quatre flèches dans un carquois.", "", p("l1-4")),
    v("kosu1-5", k("다섯"), "cinq", "Cinq flèches en éventail.", "", p("l1-5")),
    v("kosu1-6", k("화살"), "la flèche", "Une flèche au plumage vif.", "", p("l1-6")),
    v("kosu1-7", MYEOT_GAE, "Il y en a combien ?", "Murzik montre le carquois en se grattant la tête.", "", p("l1-7")),
  ],
  dialogue: {
    title: "Les flèches de la scène",
    note: "Ne gae — « quatre (unités) ». Hana eopseoyo — « il en manque une ». Yeogi isseoyo — « la voici (elle est ici) ».",
    lines: [
      line("minho", k("화살 하나, 둘, 셋…"), "Flèche — une, deux, trois…"),
      line("murzik", MYEOT_GAE, "Il y en a combien ?"),
      line("minho", DASEOT_GAE, "Cinq."),
      line("sua", k("아니요, 네 개예요!"), "Non, quatre !"),
      line("minho", k("아, 하나 없어요!"), "Oh, il en manque une !"),
      line("murzik", k("여기 있어요!"), "La voici !"),
    ],
    gist: choice("kosu1-d1", "Combien de flèches Sua a-t-elle comptées ?", [
      ["Quatre.", true],
      ["Cinq.", false],
      ["Trois.", false],
    ]),
  },
  grammar: [
    {
      title: "Le compte coréen : hana, dul, set",
      paragraphs: [
        "Hana 1, dul 2, set 3, net 4, daseot 5. C'est comme ça qu'on compte à voix haute : hana, dul, set !",
        "Pour compter des choses, on ajoute gae (« unité ») après le nombre — un peu comme « deux tasses DE café » en français. Les quatre premiers nombres raccourcissent : han gae, du gae, se gae, ne gae. Ensuite sans changement : daseot gae.",
      ],
      examples: [
        { ru: k("하나, 둘, 셋!"), en: "Un, deux, trois !" },
        { ru: k("두 개"), en: "deux (objets)" },
      ],
    },
  ],
  tasks: [
    choice("kosu1-t1", "Comment dire « trois (objets) » ?", [
      [k("세 개"), true],
      [k("셋 개"), false],
      [k("삼 개"), false],
    ], { skill: "grammar" }),
    listen("kosu1-t2", "Écoute. Quel est ce nombre ?", k("넷"), [
      ["4", true],
      ["3", false],
      ["5", false],
    ]),
    match("kosu1-t3", "Relie les paires.", [
      [k("하나"), "1"],
      [k("둘"), "2"],
      [k("셋"), "3"],
      [k("다섯"), "5"],
    ], { skill: "words" }),
    spell("kosu1-t4", "Reconstitue le mot « cinq » à partir des syllabes.", k("다섯"), ["더", "삿"]),
    speak("kosu1-t5", MYEOT_GAE, SE_GAE, "Trois.", { help: "Minho montre trois flèches et demande combien il y en a. Réponds à voix haute." }),
    script("kosu1-t6", "Souviens-toi de Hongdae. Termine les conversations.", [
      { speaker: "Le serveur", text: k("사천오백 원이에요.") },
      { speaker: "Toi", answer: CARD, options: [CARD, k("하나"), k("화살")] },
      { speaker: "Sua", text: k("역이 어디예요?") },
      { speaker: "Toi", answer: JEOGI, options: [JEOGI, k("둘"), MYEOT_GAE] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bangseok",
    itemName: "Coussin de sol",
    itemNameRu: k("방석"),
    ru: k("우와, 방석이에요!"),
    en: "Ouh là, un coussin !",
    a11y: "Un coussin carré en soie pour s'asseoir par terre, rouge à bordure bleue, posé près de la fenêtre du hanok.",
    image: p("bangseok"),
    steps: ["Dans un hanok, on s'assoit directement par terre.", "La maîtresse de maison apporte un coussin de soie.", "Rouge, à bordure bleue.", "Murzik s'assoit dessus, en vrai invité."],
    bridge: "Le soir, on allume les lanternes sur la muraille. Combien y en a-t-il ? Il faut savoir compter au-delà de cinq !",
  },
};

const suwon2: Lesson = {
  id: "ko-a1-suwon-2",
  level: "A1",
  cityId: "ko-suwon",
  number: 2,
  title: "De six à dix",
  minutes: 7,
  goals: ["Compter de 6 à 10 en coréen", "Demander « Il y en a combien ? »", "Répondre « Il y en a dix »"],
  vocabNote: "Yeoseot 6, ilgop 7, yeodeol 8, ahop 9, yeol 10. Myeot gae isseoyo ? — « Il y en a combien ? ».",
  vocab: [
    v("kosu2-1", k("여섯"), "six", "Six lanternes sur la muraille.", "", p("l2-1")),
    v("kosu2-2", k("일곱"), "sept", "Sept marches vers la porte.", "", p("l2-2")),
    v("kosu2-3", k("여덟"), "huit", "Huit fenêtres dans la tour.", "", p("l2-3")),
    v("kosu2-4", k("아홉"), "neuf", "Neuf pierres en ligne.", "", p("l2-4")),
    v("kosu2-5", k("열"), "dix", "Dix lanternes brillent sur la muraille.", "", p("l2-5")),
    v("kosu2-6", k("등"), "la lanterne", "Une lanterne ronde en papier brille d'une lueur orange.", "", p("l2-6")),
    v("kosu2-7", MYEOT_GAE_ISS, "Il y en a combien ?", "Murzik regarde la rangée de lanternes.", "", p("l2-7")),
  ],
  dialogue: {
    title: "Les lanternes de la muraille",
    note: "Deungi — « les lanternes » avec la particule i. Hananeun dariyeyo — « l'une d'elles, c'est la lune ». Dal — « la lune ».",
    lines: [
      line("murzik", k("등이 몇 개 있어요?"), "Il y a combien de lanternes ?"),
      line("sua", k("하나, 둘, 셋… 열 개 있어요!"), "Une, deux, trois… Il y en a dix !"),
      line("murzik", k("아니요, 아홉 개예요!"), "Non, neuf !"),
      line("sua", k("진짜요?"), "Vraiment ?"),
      line("murzik", k("하나는 달이에요!"), "L'une d'elles, c'est la lune !"),
    ],
    gist: choice("kosu2-d1", "Pourquoi Murzik a-t-il compté neuf lanternes ?", [
      ["L'une des « lanternes » était la lune.", true],
      ["Une lanterne s'est éteinte.", false],
      ["Il ne sait pas compter.", false],
    ]),
  },
  grammar: [
    {
      title: "Le compte coréen : de 6 à 10",
      paragraphs: [
        "Yeoseot 6, ilgop 7, yeodeol 8, ahop 9, yeol 10. Ces nombres ne changent pas devant gae : yeoseot gae, ilgop gae, yeol gae.",
        "La question « combien ? » — myeot : myeot gaeyeyo ? ou myeot gae isseoyo ? La réponse : yeol gae isseoyo — « il y en a dix ».",
      ],
      examples: [
        { ru: k("일곱 개"), en: "sept (objets)" },
        { ru: k("열 개"), en: "dix (objets)" },
      ],
    },
  ],
  tasks: [
    choice("kosu2-t1", "Comment dire « huit (objets) » ?", [
      [k("여덟 개"), true],
      [k("팔 개"), false],
      [k("여덟 명"), false],
    ], { skill: "grammar" }),
    listen("kosu2-t2", "Écoute. Quel est ce nombre ?", k("아홉"), [
      ["9", true],
      ["8", false],
      ["10", false],
    ]),
    match("kosu2-t3", "Relie les paires.", [
      [k("여섯"), "6"],
      [k("일곱"), "7"],
      [k("여덟"), "8"],
      [k("열"), "10"],
    ], { skill: "words" }),
    spell("kosu2-t4", "Reconstitue le mot « sept » à partir des syllabes.", k("일곱"), ["알", "곰"]),
    speak("kosu2-t5", MYEOT_GAE_ISS, YEOL_GAE, "Il y en a dix.", { help: "Sua demande combien il y a de lanternes. Compte et réponds à voix haute." }),
    script("kosu2-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Minho", text: k("화살 몇 개예요?") },
      { speaker: "Toi", answer: DASEOT_GAE, options: [DASEOT_GAE, k("열"), JEOGI] },
      { speaker: "Sua", text: k("우유 있어요?") },
      { speaker: "Toi", answer: ISSEOYO, options: [ISSEOYO, k("아홉"), k("등")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "deung",
    itemName: "Lanterne en papier",
    itemNameRu: k("한지 등"),
    ru: k("우와, 등이에요!"),
    en: "Ouh là, une lanterne !",
    a11y: "Une lanterne ronde en papier coréen hanji est accrochée au plafond et diffuse une lumière orange chaude.",
    image: p("deung"),
    steps: ["La maîtresse de maison accroche une lanterne en papier au plafond.", "Le papier hanji — fin et solide.", "La lumière qui le traverse est douce et chaude.", "Murzik a compté : une lanterne. Sûrement pas la lune !"],
    bridge: "À midi, toute l'équipe a faim. Sua commande des lunch-box. Mais combien en faut-il ?",
  },
};

const suwon3: Lesson = {
  id: "ko-a1-suwon-3",
  level: "A1",
  cityId: "ko-suwon",
  number: 3,
  title: "Vous êtes combien ?",
  minutes: 7,
  goals: ["Compter les personnes : myeong", "Commander « deux cafés » : jan", "Demander « Vous êtes combien ? »"],
  vocabNote: "Les mots-compteurs : gae — les objets, myeong — les personnes, jan — les tasses et les verres. L'ordre : chose + nombre + compteur : keopi du jan — « deux cafés ».",
  vocab: [
    v("kosu3-1", k("한 명"), "une personne", "Minho se tient seul devant la porte.", "", p("l3-1")),
    v("kosu3-2", k("두 명"), "deux personnes", "Jiyeon et Sua font signe de la main.", "", p("l3-2")),
    v("kosu3-3", MYEOT_MYEONG, "Vous êtes combien ?", "La vendeuse de lunch-box regarde la foule de l'équipe de tournage.", "", p("l3-3")),
    v("kosu3-4", SE_MYEONG, "Nous sommes trois.", "Murzik, Sua et Minho côte à côte.", "", p("l3-4")),
    v("kosu3-5", k("잔"), "tasse, verre (pour compter)", "Deux tasses de café sur un plateau.", "", p("l3-5")),
    v("kosu3-6", k("커피 두 잔 주세요."), "Deux cafés, s'il vous plaît.", "Sua lève deux doigts.", "", p("l3-6")),
    v("kosu3-7", k("도시락"), "le lunch-box", "Une lunch-box avec du riz, un œuf et des légumes en compartiments.", "", p("l3-7")),
  ],
  dialogue: {
    title: "Des lunch-box pour l'équipe",
    note: "Yeolhan — « onze » (yeol + hana). Jeodo — « moi aussi ».",
    lines: [
      line("sua", k("도시락 주세요."), "Des lunch-box, s'il vous plaît."),
      line("seller", MYEOT_MYEONG, "Vous êtes combien ?"),
      line("sua", k("열 명이에요."), "Dix personnes."),
      line("murzik", k("아니요, 열한 명이에요! 저도 있어요!"), "Non, onze ! Il y a moi aussi !"),
      line("seller", k("하하, 도시락 열한 개!"), "Ha ha, onze lunch-box !"),
      line("sua", k("그리고 커피 두 잔 주세요."), "Et deux cafés en plus, s'il vous plaît."),
    ],
    gist: choice("kosu3-d1", "Combien de lunch-box ont été commandés au final ?", [
      ["Onze.", true],
      ["Dix.", false],
      ["Deux.", false],
    ]),
  },
  grammar: [
    {
      title: "Les mots-compteurs : gae, myeong, jan",
      paragraphs: [
        "En coréen, pour compter on ajoute presque toujours un mot-compteur : gae — pour les objets, myeong — pour les personnes, jan — pour les tasses et les verres. En français on fait pareil avec les mesures : « deux tasses DE café » ; le coréen fait ça pour tout.",
        "L'ordre : chose + nombre + compteur. Dosirak du gae — deux lunch-box, saram se myeong — trois personnes, keopi du jan — deux cafés.",
      ],
      examples: [
        { ru: k("사람 세 명"), en: "trois personnes" },
        { ru: k("커피 두 잔"), en: "deux cafés" },
      ],
    },
  ],
  tasks: [
    choice("kosu3-t1", "Comment dire « deux cafés » ?", [
      [k("커피 두 잔"), true],
      [k("커피 둘 잔"), false],
      [k("두 커피"), false],
    ], { skill: "grammar" }),
    listen("kosu3-t2", "Écoute. Qu'a répondu Sua ?", SE_MYEONG, [
      ["Nous sommes trois.", true],
      ["Trois (objets).", false],
      ["Trois cafés.", false],
    ]),
    match("kosu3-t3", "Relie les paires.", [
      [k("개"), "unité (objets)"],
      [k("명"), "personne (pour compter)"],
      [k("잔"), "tasse"],
      [k("도시락"), "le lunch-box"],
    ], { skill: "words" }),
    spell("kosu3-t4", "Reconstitue le mot « lunch-box » à partir des syllabes.", k("도시락"), ["두", "라"]),
    speak("kosu3-t5", MYEOT_MYEONG, DU_MYEONG, "Nous sommes deux.", { help: "Au café, on te demande combien vous êtes. Réponds à voix haute : vous êtes deux." }),
    script("kosu3-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Sua", text: k("등이 몇 개 있어요?") },
      { speaker: "Toi", answer: YEOL_GAE, options: [YEOL_GAE, SE_MYEONG, k("잔")] },
      { speaker: "Le serveur", text: k("어서 오세요!") },
      { speaker: "Toi", answer: k("저기요, 자리 있어요?"), options: [k("저기요, 자리 있어요?"), k("여섯"), MYEOT_GAE] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chatjan",
    itemName: "Deux tasses à thé",
    itemNameRu: k("찻잔"),
    ru: k("우와, 찻잔이에요!"),
    en: "Ouh là, des tasses !",
    a11y: "Deux petites tasses en porcelaine blanche à motif bleu et une théière sur un plateau.",
    image: p("chatjan"),
    steps: ["La maîtresse de maison apporte une théière et deux tasses.", "Blanches, à motif bleu.", "« Une pour Murzik, une pour Sua ».", "Du jan — deux tasses !"],
    bridge: "Avant la scène à l'arc, Minho ne trouve plus son arc. Où est-il passé ?",
  },
};

const suwon4: Lesson = {
  id: "ko-a1-suwon-4",
  level: "A1",
  cityId: "ko-suwon",
  number: 4,
  title: "Où est mon arc ?",
  minutes: 7,
  goals: ["Dire « sur », « sous », « devant », « derrière », « à côté », « dedans »", "Demander « Où est… ? »", "Répondre « Sur la chaise »"],
  vocabNote: "Wi — sur, au-dessus ; arae — sous ; ap — devant ; dwi — derrière ; yeop — à côté ; an — dedans. Après eux, on ajoute e : uija wie — « sur la chaise ».",
  vocab: [
    v("kosu4-1", k("위"), "sur, au-dessus", "L'arc est posé sur la chaise.", "", p("l4-1")),
    v("kosu4-2", k("아래"), "sous", "Murzik regarde sous la chaise.", "", p("l4-2")),
    v("kosu4-3", k("앞"), "devant", "Murzik se tient devant la caméra.", "", p("l4-3")),
    v("kosu4-4", k("뒤"), "derrière", "L'arc pend dans le dos de Minho.", "", p("l4-4")),
    v("kosu4-5", k("옆"), "à côté", "Sua se tient à côté du cadreur.", "", p("l4-5")),
    v("kosu4-6", k("안"), "dedans", "Murzik sort la tête d'une boîte.", "", p("l4-6")),
    v("kosu4-7", HWAL_EODI, "Où est l'arc ?", "Minho regarde partout, perdu.", "", p("l4-7")),
  ],
  dialogue: {
    title: "L'arc perdu",
    note: "Je hwal — « mon arc ». Eodie isseoyo ? — « où est-ce que c'est ? ».",
    lines: [
      line("minho", k("제 활이 어디에 있어요?"), "Où est mon arc ?"),
      line("sua", k("의자 위에 있어요?"), "Sur la chaise ?"),
      line("minho", k("아니요, 없어요."), "Non, il n'y est pas."),
      line("murzik", k("의자 아래에 있어요?"), "Sous la chaise ?"),
      line("minho", k("없어요…"), "Il n'y est pas…"),
      line("sua", k("아! 민호 씨 뒤에 있어요!"), "Ah ! Il est dans ton dos !"),
      line("minho", k("하하, 진짜요?"), "Ha ha, vraiment ?"),
    ],
    gist: choice("kosu4-d1", "Où était l'arc ?", [
      ["Dans le dos de Minho.", true],
      ["Sur la chaise.", false],
      ["Sous la chaise.", false],
    ]),
  },
  grammar: [
    {
      title: "Où se trouve : …e isseoyo",
      paragraphs: [
        "L'ordre est l'inverse du français : d'abord l'objet-repère (la chaise), puis le mot de lieu (wi, arae…), puis e et isseoyo. Uija wie isseoyo — « il est sur la chaise » (chaise — dessus — sur — il y a).",
        "La question : …i / ga eodie isseoyo ? — « où est… ? ». Hwali eodie isseoyo ? — « Où est l'arc ? ».",
      ],
      examples: [
        { ru: k("가방 안에 있어요."), en: "Il est dans le sac." },
        { ru: k("카메라 옆에 있어요."), en: "Il est à côté de la caméra." },
      ],
    },
  ],
  tasks: [
    choice("kosu4-t1", "Comment dire « Il est sous la chaise » ?", [
      [k("의자 아래에 있어요."), true],
      [UIJA_WI, false],
      [UIJA_DWI, false],
    ], { skill: "grammar" }),
    listen("kosu4-t2", "Écoute. Où est l'arc ?", k("옆에 있어요."), [
      ["À côté.", true],
      ["Dedans.", false],
      ["Derrière.", false],
    ]),
    match("kosu4-t3", "Relie les paires.", [
      [k("위"), "sur, au-dessus"],
      [k("아래"), "sous"],
      [k("앞"), "devant"],
      [k("뒤"), "derrière"],
    ], { skill: "words" }),
    spell("kosu4-t4", "Reconstitue le mot « sous » à partir des syllabes.", k("아래"), ["어", "레"]),
    speak("kosu4-t5", HWAL_EODI, UIJA_WI, "Sur la chaise.", { help: "Minho demande où est son arc. L'arc est sur la chaise. Réponds à voix haute." }),
    script("kosu4-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Le vendeur", text: MYEOT_MYEONG },
      { speaker: "Toi", answer: DU_MYEONG, options: [DU_MYEONG, k("두 잔"), k("아래")] },
      { speaker: "Sua", text: MYEOT_GAE_ISS },
      { speaker: "Toi", answer: k("일곱 개 있어요."), options: [k("일곱 개 있어요."), k("일곱 명이에요."), JEOGI] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chaeksang",
    itemName: "Petit bureau bas",
    itemNameRu: k("책상"),
    ru: k("우와, 책상이에요!"),
    en: "Ouh là, un petit bureau !",
    a11y: "Un petit bureau bas en bois près de la fenêtre du hanok ; dessus, un pinceau et un cahier, et le coussin de sol à côté.",
    image: p("chaeksang"),
    steps: ["La maîtresse de maison installe un petit bureau bas près de la fenêtre.", "Sur le bureau — un pinceau et un cahier.", "Murzik s'assoit sur son coussin devant le bureau.", "Il écrit les lettres coréennes au pinceau !"],
    bridge: "Demain, Sua montrera à Murzik ce qui se cache à l'intérieur de la forteresse.",
  },
};


const suwon5: Lesson = {
  id: "ko-a1-suwon-5",
  level: "A1",
  cityId: "ko-suwon",
  number: 5,
  title: "Dans la forteresse",
  minutes: 7,
  goals: ["Dire « Il y a… là-bas »", "Dire « aussi » : do", "Décrire la forteresse : beaucoup de monde, calme"],
  vocabNote: "Seong — « la forteresse », seongmun — « la porte de la forteresse », seongbyeok — « le mur de la forteresse ». Bak — « dehors ». Do — « aussi » : kapedo — « et le café aussi ».",
  vocab: [
    v("kosu5-1", k("성"), "la forteresse", "Une vieille forteresse de pierre avec des tours.", "", p("l5-1")),
    v("kosu5-2", k("성문"), "la porte de la forteresse", "D'immenses portes de pierre coiffées d'un toit de bois.", "", p("l5-2")),
    v("kosu5-3", k("성벽"), "le mur de la forteresse", "Le mur de pierre serpente sur les collines.", "", p("l5-3")),
    v("kosu5-4", SIJANG, "Il y a un marché.", "Un marché aux étals dressés à l'intérieur de la forteresse.", "", p("l5-4")),
    v("kosu5-5", k("밖"), "dehors", "Un sentier tranquille à l'extérieur du mur.", "", p("l5-5")),
    v("kosu5-6", k("사람이 많아요!"), "Il y a beaucoup de monde !", "Une foule de touristes devant la porte.", "", p("l5-6")),
    v("kosu5-7", k("조용해요."), "C'est calme.", "Murzik est assis seul sur la muraille, dans le silence.", "", p("l5-7")),
  ],
  dialogue: {
    title: "La promenade sur la muraille",
    note: "Gireoyo — « long ». Sijang — « le marché ». Bakkeun — « dehors (en ce qui concerne le dehors) ».",
    lines: [
      line("murzik", k("우와, 성벽이 진짜 길어요!"), "Ouah, le mur est vraiment long !"),
      line("sua", k("성 안에 시장이 있어요."), "Il y a un marché à l'intérieur de la forteresse."),
      line("murzik", k("카페도 있어요?"), "Et il y a aussi un café ?"),
      line("sua", k("네, 성문 옆에 카페가 있어요."), "Oui, il y a un café à côté de la porte."),
      line("murzik", k("사람이 많아요!"), "Quel monde !"),
      line("sua", k("밖은 조용해요."), "Dehors, c'est calme."),
    ],
    gist: choice("kosu5-d1", "Où est le café ?", [
      ["À côté de la porte.", true],
      ["Sur la muraille.", false],
      ["À l'extérieur de la forteresse.", false],
    ]),
  },
  grammar: [
    {
      title: "« Il y a… » : lieu + e, chose + i / ga isseoyo",
      paragraphs: [
        "Pour dire « quelque part, il y a quelque chose », on nomme d'abord le lieu avec e, puis la chose avec i (après une consonne) ou ga (après une voyelle) : seong ane sijangi isseoyo — « dans la forteresse, il y a un marché ».",
        "Do (도) veut dire « aussi, également » : kapedo isseoyo? — « il y a aussi un café ? », jeodo isseoyo — « moi aussi je suis là ».",
      ],
      examples: [
        { ru: k("역 앞에 카페가 있어요."), en: "Il y a un café devant la gare." },
        { ru: k("저도 배우예요."), en: "Moi aussi, je suis acteur." },
      ],
    },
  ],
  tasks: [
    choice("kosu5-t1", "Comment dire « Il y a un café à côté de la porte » ?", [
      [k("성문 옆에 카페가 있어요."), true],
      [k("카페 옆에 성문이에요."), false],
      [k("성문 옆에 카페가 없어요."), false],
    ], { skill: "grammar" }),
    listen("kosu5-t2", "Écoute. Que dit Murzik ?", k("사람이 많아요!"), [
      ["Il y a beaucoup de monde !", true],
      ["C'est calme.", false],
      ["Il y a un marché.", false],
    ]),
    match("kosu5-t3", "Relie les paires.", [
      [k("성"), "la forteresse"],
      [k("성문"), "la porte"],
      [k("성벽"), "le mur"],
      [k("밖"), "dehors"],
    ], { skill: "words" }),
    spell("kosu5-t4", "Reconstitue le mot « mur de la forteresse » à partir des syllabes.", k("성벽"), ["상", "벅"]),
    speak("kosu5-t5", MWOGA, SIJANG, "Il y a un marché.", { help: "Sua demande ce qu'il y a à l'intérieur de la forteresse. Réponds à voix haute." }),
    script("kosu5-t6", "Souviens-toi des leçons précédentes. Termine les conversations.", [
      { speaker: "Minho", text: HWAL_EODI },
      { speaker: "Toi", answer: UIJA_DWI, options: [UIJA_DWI, k("성문"), DU_MYEONG] },
      { speaker: "Le vendeur", text: MYEOT_MYEONG },
      { speaker: "Toi", answer: SE_MYEONG, options: [SE_MYEONG, SE_GAE, k("조용해요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "byeongpung",
    itemName: "Paravent aux montagnes",
    itemNameRu: k("병풍"),
    ru: k("우와, 병풍이에요!"),
    en: "Ouh là, un paravent !",
    a11y: "Un paravent pliant à plusieurs panneaux dressé contre le mur, décoré de montagnes, de pins et de grues.",
    image: p("byeongpung"),
    steps: ["Au marché de la forteresse, on vend de vieux objets.", "Sua déniche un paravent pliant.", "On y voit des montagnes, des pins et des grues.", "Murzik a maintenant tout un paysage derrière lui !"],
    bridge: "La maquilleuse demande l'âge de Murzik. Au fait, quel âge a-t-il ?",
  },
};

const suwon6: Lesson = {
  id: "ko-a1-suwon-6",
  level: "A1",
  cityId: "ko-suwon",
  number: 6,
  title: "Tu as quel âge ?",
  minutes: 7,
  goals: ["Demander l'âge", "Dire quel âge tu as", "Compter jusqu'à 30 avec le compte coréen"],
  vocabNote: "L'âge se dit avec le compte coréen + sal (« an ») : daseot sal — 5 ans. Seumul — 20, devant sal il raccourcit : seumu sal. Quarante — maheun, mais ce n'est pas encore nécessaire.",
  vocab: [
    v("kosu6-1", MYEOT_SAL, "Tu as quel âge ?", "La maquilleuse, son pinceau à la main, regarde Murzik avec curiosité.", "", p("l6-1")),
    v("kosu6-2", k("다섯 살이에요."), "J'ai cinq ans.", "Murzik montre cinq doigts.", "", p("l6-2")),
    v("kosu6-3", SEUMU_SAL, "J'ai vingt ans.", "Un gâteau avec deux bougies en forme de 2 et de 0.", "", p("l6-3")),
    v("kosu6-4", k("스물"), "vingt", "Vingt petites lanternes sur une ficelle.", "", p("l6-4")),
    v("kosu6-5", k("서른"), "trente", "Trente bougies sur un grand gâteau.", "", p("l6-5")),
    v("kosu6-6", k("나이"), "l'âge", "Murzik examine ses moustaches devant le miroir.", "", p("l6-6")),
    v("kosu6-7", k("어려요!"), "Comme tu es jeune !", "La maquilleuse joint les mains, attendrie.", "", p("l6-7")),
  ],
  dialogue: {
    title: "Dans la loge de maquillage",
    note: "Seumuldaseot sal — « vingt-cinq ans ». En Corée, demander l'âge quand on fait connaissance est tout à fait normal.",
    lines: [
      line("makeup", k("무르직 씨, 몇 살이에요?"), "Murzik, tu as quel âge ?"),
      line("murzik", k("저는 다섯 살이에요."), "J'ai cinq ans."),
      line("makeup", k("우와, 어려요!"), "Ouah, comme tu es jeune !"),
      line("murzik", k("지연 씨는 몇 살이에요?"), "Et quel âge a Jiyeon ?"),
      line("jiyeon", k("비밀이에요!"), "C'est un secret !"),
      line("sua", k("하하, 지연 씨는 스물다섯 살이에요."), "Ha ha, Jiyeon a vingt-cinq ans."),
      line("jiyeon", k("수아 씨!"), "Sua !"),
    ],
    gist: choice("kosu6-d1", "Quel âge a Murzik ?", [
      ["Cinq ans.", true],
      ["Vingt-cinq ans.", false],
      ["C'est un secret.", false],
    ]),
  },
  grammar: [
    {
      title: "L'âge : nombre + sal",
      paragraphs: [
        "L'âge se dit avec le compte coréen : daseot sal — 5 ans, yeol sal — 10 ans. En français on dit « j'ai cinq ans », en coréen simplement « cinq ans ». Hana, dul, set, net raccourcissent devant sal : han sal, du sal, se sal, ne sal.",
        "Seumul (20) devient seumu devant sal : seumu sal. Seoreun — 30. Les nombres se composent : seumuldaseot — 25, seoreunhana — 31.",
      ],
      examples: [
        { ru: k("열 살"), en: "10 ans" },
        { ru: k("스무 살"), en: "20 ans" },
      ],
    },
  ],
  tasks: [
    choice("kosu6-t1", "Comment dire « J'ai vingt ans » ?", [
      [SEUMU_SAL, true],
      [k("이십 살이에요."), false],
      [k("스물 살이에요."), false],
    ], { skill: "grammar" }),
    listen("kosu6-t2", "Écoute. Quel âge ?", k("다섯 살이에요."), [
      ["Cinq ans.", true],
      ["Vingt ans.", false],
      ["Trente ans.", false],
    ]),
    match("kosu6-t3", "Relie les paires.", [
      [k("살"), "an (d'âge)"],
      [k("나이"), "l'âge"],
      [k("스물"), "vingt"],
      [k("서른"), "trente"],
    ], { skill: "words" }),
    spell("kosu6-t4", "Reconstitue le mot « âge » à partir des syllabes.", k("나이"), ["너", "니"]),
    speak("kosu6-t5", MYEOT_SAL, SEUMU_SAL, "J'ai vingt ans.", { help: "Réponds à voix haute que tu as vingt ans." }),
    script("kosu6-t6", "Souviens-toi des leçons précédentes. Termine les conversations.", [
      { speaker: "Sua", text: MWOGA },
      { speaker: "Toi", answer: SIJANG, options: [SIJANG, k("스무 살이에요."), k("밖")] },
      { speaker: "Minho", text: k("화살 몇 개예요?") },
      { speaker: "Toi", answer: DASEOT_GAE, options: [DASEOT_GAE, k("다섯 살이에요."), k("나이")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yeon",
    itemName: "Cerf-volant",
    itemNameRu: k("연"),
    ru: k("우와, 연이에요!"),
    en: "Ouh là, un cerf-volant !",
    a11y: "Un cerf-volant coréen rectangulaire, percé d'un trou rond au milieu, avec une queue multicolore, accroché au mur.",
    image: p("yeon"),
    steps: ["Au pied de la muraille, des enfants font voler des cerfs-volants.", "La maquilleuse achète un cerf-volant coréen pour Murzik.", "Rectangulaire, percé d'un trou au milieu.", "Il est accroché au mur et attend le vent."],
    bridge: "Demain — la scène principale à Suwon. Murzik va tirer à l'arc !",
  },
};

const suwon7: Lesson = {
  id: "ko-a1-suwon-7",
  level: "A1",
  cityId: "ko-suwon",
  number: 7,
  title: "La scène à l'arc",
  minutes: 8,
  goals: ["Comprendre « Tirez ! », « Attention ! »", "Féliciter : « Incroyable ! »", "Réviser tout Suwon"],
  vocabNote: "-seyo à la fin du verbe — une demande polie : ssoseyo — « tirez », josimhaseyo — « attention », anjeuseyo — « asseyez-vous ». Majasseoyo — « touché ! ».",
  vocab: [
    v("kosu7-1", k("활"), "l'arc", "Un arc en bois avec un laçage rouge.", "", p("l7-1")),
    v("kosu7-2", k("과녁"), "la cible", "Une cible ronde sur un support de paille.", "", p("l7-2")),
    v("kosu7-3", k("쏘세요!"), "Tirez !", "Le réalisateur Pak fait un signe de la main.", "", p("l7-3")),
    v("kosu7-4", k("조심하세요!"), "Attention !", "Minho tend le bras : doucement !", "", p("l7-4")),
    v("kosu7-5", k("맞았어요!"), "Touché !", "La flèche est plantée en plein centre de la cible.", "", p("l7-5")),
    v("kosu7-6", k("대단해요!"), "Incroyable !", "Toute l'équipe applaudit.", "", p("l7-6")),
    v("kosu7-7", k("다음은 남이섬이에요!"), "Prochain arrêt : l'île de Nami !", "Sua montre une photo de l'île avec son allée de grands arbres.", "", p("l7-7")),
  ],
  dialogue: {
    title: "La scène principale",
    note: "C'est une scène du drama : le chat voyageur tire à l'arc pour la première fois devant la forteresse.",
    lines: [
      line("director", k("레디, 액션!"), "Silence, ça tourne !"),
      line("minho", k("무르직 씨, 조심하세요!"), "Murzik, fais attention !"),
      line("murzik", k("하나, 둘, 셋…"), "Un, deux, trois…"),
      line("director", k("쏘세요!"), "Tirez !"),
      line("sua", k("맞았어요!"), "Touché !"),
      line("minho", k("우와, 대단해요!"), "Ouah, incroyable !"),
      line("director", k("컷! 좋아요!"), "Coupé ! Parfait !"),
    ],
    gist: choice("kosu7-d1", "Murzik a-t-il touché la cible ?", [
      ["Oui, il l'a touchée.", true],
      ["Non, il l'a ratée.", false],
      ["Il n'a pas tiré.", false],
    ]),
  },
  grammar: [
    {
      title: "Tout ensemble. La demande polie en -seyo",
      paragraphs: [
        "Tu sais déjà : compter avec le compte coréen (hana… yeol), compter les objets, les personnes et les tasses (gae, myeong, jan), dire l'âge (sal), « où se trouve » (wi, arae, ap, dwi, yeop, an + e isseoyo) et « là-bas, il y a… ».",
        "Nouveau : -(eu)seyo à la fin du verbe — une demande polie : ssoseyo — « tirez », anjeuseyo — « asseyez-vous », josimhaseyo — « soyez prudent ».",
      ],
      examples: [
        { ru: k("여기 앉으세요."), en: "Asseyez-vous ici." },
        { ru: k("조심하세요!"), en: "Attention !" },
      ],
    },
  ],
  tasks: [
    listen("kosu7-t1", "Examen audio. Quoi et où ?", k("의자 위에 화살이 세 개 있어요."), [
      ["Sur la chaise, trois flèches.", true],
      ["Sous la chaise, trois flèches.", false],
      ["Sur la chaise, quatre flèches.", false],
    ]),
    choice("kosu7-t2", "Minho a 27 ans. Comment le dira-t-il ?", [
      [k("스물일곱 살이에요."), true],
      [k("이십칠 살이에요."), false],
      [k("스물일곱 개예요."), false],
    ], { skill: "grammar" }),
    match("kosu7-t3", "Relie les paires.", [
      [k("활"), "l'arc"],
      [k("과녁"), "la cible"],
      [k("성"), "la forteresse"],
      [k("등"), "la lanterne"],
    ], { skill: "words" }),
    spell("kosu7-t4", "Reconstitue le mot « Suwon » à partir des syllabes.", k("수원"), ["소", "완"]),
    speak("kosu7-t5", k("맞았어요?"), k("네, 맞았어요!"), "Oui, touché !", { help: "Minho te demande si tu as touché la cible. Réponds à voix haute." }),
    script("kosu7-t6", "Souviens-toi de tout Suwon. Termine les conversations.", [
      { speaker: "Minho", text: k("화살 몇 개예요?") },
      { speaker: "Toi", answer: SE_GAE, options: [SE_GAE, SE_MYEONG, k("대단해요!")] },
      { speaker: "Le vendeur", text: MYEOT_MYEONG },
      { speaker: "Toi", answer: DU_MYEONG, options: [DU_MYEONG, k("두 개"), k("활")] },
      { speaker: "Sua", text: HWAL_EODI },
      { speaker: "Toi", answer: UIJA_WI, options: [UIJA_WI, k("과녁"), MYEOT_SAL] },
      { speaker: "La maquilleuse", text: MYEOT_SAL },
      { speaker: "Toi", answer: SEUMU_SAL, options: [SEUMU_SAL, k("스무 개예요."), k("조심하세요!")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hwal",
    itemName: "Arc en jouet",
    itemNameRu: k("활"),
    ru: k("우와, 활이에요!"),
    en: "Ouh là, un arc !",
    a11y: "Un petit arc en bois au laçage rouge et une flèche à embout mou posés sur une table basse.",
    image: p("hwal"),
    steps: ["Après le tournage, l'accessoiriste offre à Murzik un petit arc.", "Celui-là même, de la scène !", "La flèche a un embout mou, sans danger.", "Le troisième souvenir du tournage !"],
    bridge: "Prochain arrêt : l'île de Nami. C'est là qu'on tourne la scène la plus romantique du drama.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre dans un hanok au pied de la muraille",
    nameRu: k("성벽 옆 한옥"),
    image: p("home"),
    a11y: "Une chambre vide dans un vieux hanok coréen : poutres de bois, portes de papier, plancher chauffant. Derrière la fenêtre — la muraille de pierre. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "hwal",
  welcomeRu: k("안녕, 수원!"),
  welcomeEn: "Bonjour, Suwon !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Sua devant les vieilles portes de pierre de la forteresse de Suwon, des banderoles multicolores flottent sur des mâts au-dessus du mur.",
  departureImage: p("departure"),
  departureA11y: "La maîtresse du hanok fait signe à Murzik devant la porte, la muraille derrière elle.",
  finale: [
    {
      image: p("hwal"),
      a11y: "Le soir. Toute l'équipe est assise devant le hanok, Murzik tient fièrement le petit arc.",
      lines: [
        { en: "Le soir, toute l'équipe revisionne la scène à l'arc." },
        { ru: k("대단해요, 무르직 씨!"), en: "Incroyable, Murzik !" },
        { en: "Le réalisateur Pak annonce : sur l'île de Nami, Murzik aura sa propre réplique dans la scène principale !" },
      ],
    },
    {
      image: p("home"),
      a11y: "Murzik fait le tour de sa chambre dans le hanok, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre dans le hanok." },
        { en: "Dans ses bagages — le petit arc de la scène. Le troisième souvenir du tournage." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { en: "Suwon terminé !" },
        { en: "7 / 7 leçons" },
        { ru: k("하나, 둘, 셋… 열!"), en: "Je sais compter jusqu'à dix en coréen !" },
      ],
    },
    {
      image: p("departure"),
      a11y: "La maîtresse du hanok fait signe au revoir.",
      lines: [
        { ru: k("안녕히 계세요!"), en: "Au revoir !" },
        { ru: k("남이섬으로 가요!"), en: "Direction l'île de Nami !" },
      ],
    },
    {
      image: p("bus"),
      a11y: "Le bus de l'équipe de tournage roule sur une route au milieu de collines verdoyantes, Murzik regarde par la fenêtre.",
      lines: [{ en: "Suwon → île de Nami" }],
    },
    {
      image: pic("ko/nami/arrival"),
      a11y: "Murzik et Sua sur un petit ferry, devant eux une île avec une allée de grands arbres.",
      lines: [
        { ru: k("우와, 남이섬이에요!"), en: "Ouah, c'est l'île de Nami !" },
        { en: "Beaucoup de dramas célèbres ont été tournés ici." },
      ],
    },
  ],
};

export const koSuwonFr = {
  id: "ko-suwon",
  name: "Suwon",
  nameKo: k("수원"),
  lessons: [suwon1, suwon2, suwon3, suwon4, suwon5, suwon6, suwon7],
  story,
};
