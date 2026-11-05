import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, k, letter, line, listen, match, script, speak, spell, v } from "./make";

/* Séoul · « Premiers mots » · Murzik arrive sur le tournage, rencontre Sua, le réalisateur et les acteurs, tourne sa première prise. Les lettres de base du hangul. */

const p = (name: string) => pic(`ko/seoul/${name}`);

// Phrases used in several lessons.
const ANNYEONG = k("안녕하세요!");
const NE = k("네.");
const ANIYO = k("아니요.");
const BANGAWOYO = k("반가워요!");
const IREUM = k("이름이 뭐예요?");
const IREUM_SASHA = k("제 이름은 사샤예요.");
const GAMSA = k("감사합니다!");
const GOMAWO = k("고마워요!");
const JOESONG = k("죄송합니다!");
const GWAENCHANA = k("괜찮아요.");
const IGEO = k("이거 뭐예요?");
const EODI = k("어디에서 왔어요?");
const MOSCOW = k("모스크바에서 왔어요.");
const DASI = k("다시 한 번 말해 주세요.");
const CHEONCHEON = k("천천히 말해 주세요.");

const seoul1: Lesson = {
  id: "ko-a1-seoul-1",
  level: "A1",
  cityId: "ko-seoul",
  number: 1,
  title: "Annyeong-haseyo ! — Bonjour !",
  minutes: 7,
  goals: ["Saluer : annyeong-haseyo", "Dire « oui » et « non »", "Te présenter : « Moi, c'est … »"],
  vocabNote: "Les lettres coréennes s'assemblent en syllabes carrées : 안 = ㅇ + ㅏ + ㄴ. Sous chaque phrase, tu vois la prononciation en lettres latines. Annyeong-haseyo est le « bonjour » poli : on peut le dire à tout le monde.",
  vocab: [
    v("kose1-1", ANNYEONG, "Bonjour ! / Salut !", "Murzik à l'aéroport d'Incheon fait signe de la patte, des avions derrière la vitre.", "", p("l1-1")),
    v("kose1-2", NE, "Oui.", "Murzik hoche la tête avec assurance.", "", p("l1-2")),
    v("kose1-3", ANIYO, "Non.", "Murzik secoue la tête et fait non de la patte.", "", p("l1-3")),
    v("kose1-4", k("저는 무르직이에요."), "Moi, c'est Murzik.", "Murzik pose fièrement une patte sur son torse.", "", img.murzik),
    v("kose1-5", BANGAWOYO, "Enchanté !", "Murzik et Sua se serrent la main, c'est-à-dire la main et la patte.", "", p("l1-5")),
    v("kose1-6", k("환영합니다!"), "Bienvenue !", "Sua tient une pancarte avec le nom de Murzik en coréen.", "", p("l1-6")),
    v("kose1-7", k("서울"), "Séoul", "Séoul le soir : les lumières des gratte-ciel et la tour sur la colline.", "", p("l1-7")),
  ],
  letters: [
    letter("ㅇ", "en début de syllabe, il ne se lit pas, il « garde la place » ; en fin de syllabe — « ng »", ANNYEONG, "Bonjour !", "La syllabe 안 commence par ㅇ, mais se lit simplement « an »."),
    letter("ㅏ", "« a » : un bâton avec un petit trait vers la droite", ANNYEONG, "Bonjour !"),
    letter("ㅓ", "« o » (ouvert, proche de « a ») : un bâton avec un petit trait vers la gauche", k("저는 무르직이에요."), "Moi, c'est Murzik.", "Ne le confonds pas avec ㅏ : trait à droite — « a », trait à gauche — « o »."),
    letter("ㅜ", "« ou » : une barre avec une queue vers le bas", k("서울"), "Séoul"),
    letter("ㅡ", "un son entre « eu » et « i » : une simple barre", k("저는 무르직이에요."), "Moi, c'est Murzik."),
    letter("ㅣ", "« i » : un simple bâton", ANIYO, "Non."),
  ],
  dialogue: {
    title: "À l'aéroport",
    note: "Ssi est un petit mot poli qu'on colle après un prénom : Sua ssi, Mureujik ssi. Le coréen n'a pas de son « z », alors Murzik devient ici Mureujik.",
    lines: [
      line("sua", k("안녕하세요! 무르직 씨예요?"), "Bonjour ! Vous êtes Murzik ?"),
      line("murzik", k("네! 저는 무르직이에요."), "Oui ! Moi, c'est Murzik."),
      line("sua", k("반가워요! 저는 수아예요."), "Enchantée ! Moi, c'est Sua."),
      line("murzik", k("수아 씨, 반가워요!"), "Sua, enchanté !"),
      line("sua", k("서울에 오신 것을 환영합니다!"), "Bienvenue à Séoul !"),
      line("murzik", k("우와, 서울이에요!"), "Ouah, c'est Séoul !"),
    ],
    gist: choice("kose1-d1", "Qui accueille Murzik à l'aéroport ?", [
      ["Sua.", true],
      ["Le réalisateur.", false],
      ["Personne.", false],
    ]),
  },
  grammar: [
    {
      title: "Moi, c'est … : jeoneun … ieyo / yeyo",
      paragraphs: [
        "Jeoneun — « je » (poli). En fin de phrase, on met « suis » : après une consonne — ieyo (이에요), après une voyelle — yeyo (예요).",
        "Mureujik finit par une consonne : Mureujigieyo. Sua et Sasha finissent par une voyelle : Suayeyo, Sashayeyo. Le verbe, en coréen, est toujours à la fin de la phrase.",
      ],
      examples: [
        { ru: k("저는 사샤예요."), en: "Moi, c'est Sasha." },
        { ru: k("저는 수아예요."), en: "Moi, c'est Sua." },
      ],
    },
  ],
  tasks: [
    choice("kose1-t1", "Comment dire « Moi, c'est Sasha » ? (Sasha finit par une voyelle)", [
      [k("저는 사샤예요."), true],
      [k("저는 사샤이에요."), false],
      [k("저는 사샤 씨예요."), false],
    ], { skill: "grammar" }),
    listen("kose1-t2", "Écoute. Qu'a répondu Murzik ?", ANIYO, [
      ["Non.", true],
      ["Oui.", false],
      ["Bonjour !", false],
    ]),
    match("kose1-t3", "Relie les paires.", [
      [ANNYEONG, "Bonjour !"],
      [NE, "Oui."],
      [ANIYO, "Non."],
      [k("서울"), "Séoul"],
    ], { skill: "words" }),
    spell("kose1-t4", "Assemble les syllabes du mot « Séoul ».", k("서울"), ["수", "아"]),
    speak("kose1-t5", ANNYEONG, k("안녕하세요! 저는 사샤예요."), "Bonjour ! Moi, c'est Sasha.", {
      help: "Salue à voix haute et présente-toi. À la place de « Sasha », tu peux dire ton prénom.",
    }),
    script("kose1-t6", "Termine la conversation avec Sua.", [
      { speaker: "Sua", text: ANNYEONG },
      { speaker: "Toi", answer: ANNYEONG, options: [ANNYEONG, ANIYO, k("서울")] },
      { speaker: "Sua", text: k("저는 수아예요. 반가워요!") },
      { speaker: "Toi", answer: BANGAWOYO, options: [BANGAWOYO, ANIYO, k("저는 수아예요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ibul",
    itemName: "Couette matelassée bariolée",
    itemNameRu: k("이불"),
    ru: k("우와, 이불이에요!"),
    en: "Ouah, une couette !",
    a11y: "Sur le sol chauffé est posée une épaisse couette-matelas matelassée, rose et bleue.",
    image: p("ibul"),
    steps: ["En Corée, on dort souvent directement sur le sol chauffé.", "Sua apporte une épaisse couette matelassée.", "Elle est rose et bleue.", "Murzik vérifie aussitôt : c'est moelleux !"],
    bridge: "Le matin, Sua emmène Murzik au bureau de l'équipe de tournage. Là-bas, le réalisateur l'attend…",
  },
};

const seoul2: Lesson = {
  id: "ko-a1-seoul-2",
  level: "A1",
  cityId: "ko-seoul",
  number: 2,
  title: "Comment tu t'appelles ?",
  minutes: 7,
  goals: ["Demander le prénom", "Dire comment tu t'appelles", "Présenter quelqu'un : « Voici Minho, il est acteur »"],
  vocabNote: "Ireum — « le prénom ». Je ireumeun … — « mon prénom est … ». Gamdok — « réalisateur », gamdongnim — « monsieur le réalisateur » : c'est ainsi qu'on s'adresse à lui sur le plateau.",
  vocab: [
    v("kose2-1", IREUM, "Comment tu t'appelles ?", "Le réalisateur Park, en casquette, regarde Murzik par-dessus ses lunettes.", "", p("l2-1")),
    v("kose2-2", IREUM_SASHA, "Je m'appelle Sasha.", "Un badge avec un prénom, accroché à un cordon.", "", p("l2-2")),
    v("kose2-3", k("배우"), "acteur, actrice", "L'acteur Minho en costume devant un miroir à ampoules.", "", p("l2-3")),
    v("kose2-4", k("감독님"), "monsieur le réalisateur", "Le réalisateur Park dans un fauteuil pliant avec une inscription au dos.", "", p("l2-4")),
    v("kose2-5", k("친구"), "ami, amie", "Murzik et Minho font un selfie.", "", p("l2-5")),
    v("kose2-6", k("우리"), "nous, notre", "Toute l'équipe de tournage réunie pour la photo de groupe.", "", p("l2-6")),
    v("kose2-7", k("이 사람은 민호 씨예요."), "Voici Minho.", "Sua montre Minho, tout sourire.", "", p("l2-7")),
  ],
  letters: [
    letter("ㄴ", "« n »", IREUM_SASHA, "Je m'appelle Sasha."),
    letter("ㅁ", "« m » : un carré", IREUM, "Comment tu t'appelles ?"),
    letter("ㄹ", "entre voyelles — « r », en fin de syllabe — « l »", IREUM, "Comment tu t'appelles ?", "Dans le mot 서울 (Seoul) elle est à la fin — donc « l »."),
    letter("ㅂ", "« p », entre voyelles — « b »", k("배우"), "acteur"),
    letter("ㅐ", "« è »", k("배우"), "acteur"),
    letter("ㅔ", "« é » ; presque comme ㅐ", IREUM_SASHA, "Je m'appelle Sasha."),
  ],
  dialogue: {
    title: "Le réalisateur Park",
    note: "Ibun — « cette personne », mais avec respect pour celui qu'on présente. I saram — simplement « cette personne ». Geurigo — « et, et aussi ». Pangapseumnida — « enchanté » aussi, mais plus officiel.",
    lines: [
      line("sua", k("감독님, 이분은 무르직 씨예요."), "Monsieur le réalisateur, voici Murzik."),
      line("director", k("안녕하세요. 저는 박 감독이에요."), "Bonjour. Je suis le réalisateur Park."),
      line("murzik", k("안녕하세요, 감독님! 반갑습니다!"), "Bonjour, monsieur le réalisateur ! Enchanté !"),
      line("sua", k("그리고 이 사람은 민호 씨예요. 배우예요."), "Et voici Minho. Il est acteur."),
      line("minho", k("반가워요, 무르직 씨! 우리 친구해요!"), "Enchanté, Murzik ! Devenons amis !"),
    ],
    gist: choice("kose2-d1", "Qui est Minho ?", [
      ["Un acteur.", true],
      ["Le réalisateur.", false],
      ["Le chauffeur.", false],
    ]),
  },
  grammar: [
    {
      title: "Le sujet : eun / neun",
      paragraphs: [
        "La personne ou la chose dont on parle est marquée d'une particule : après une consonne — eun (은), après une voyelle — neun (는). Jeoneun — « moi (pour ce qui me concerne) », ireumeun — « le prénom (pour ce qui le concerne) ».",
        "Ireum finit par une consonne : je ireumeun. Jeo finit par une voyelle : jeoneun. Minho — par une voyelle : Minho ssineun.",
      ],
      examples: [
        { ru: k("제 이름은 민호예요."), en: "Je m'appelle Minho." },
        { ru: k("민호 씨는 배우예요."), en: "Minho est acteur." },
      ],
    },
  ],
  tasks: [
    choice("kose2-t1", "Comment dire « Je m'appelle Minho » ?", [
      [k("제 이름은 민호예요."), true],
      [k("제 이름는 민호예요."), false],
      [k("제 이름은 민호이에요."), false],
    ], { skill: "grammar" }),
    listen("kose2-t2", "Écoute. Qui est cette personne ?", k("배우예요."), [
      ["Un acteur.", true],
      ["Le réalisateur.", false],
      ["Un ami.", false],
    ]),
    match("kose2-t3", "Relie les paires.", [
      [k("이름"), "le prénom"],
      [k("배우"), "acteur"],
      [k("친구"), "ami"],
      [k("감독"), "réalisateur"],
    ], { skill: "words" }),
    spell("kose2-t4", "Assemble les syllabes du mot « acteur ».", k("배우"), ["무", "이"]),
    speak("kose2-t5", IREUM, IREUM_SASHA, "Je m'appelle Sasha.", { help: "Réponds à voix haute au réalisateur. Tu peux donner ton prénom." }),
    script("kose2-t6", "Souviens-toi de la première leçon. Termine les conversations.", [
      { speaker: "Minho", text: ANNYEONG },
      { speaker: "Toi", answer: ANNYEONG, options: [ANNYEONG, ANIYO, k("배우")] },
      { speaker: "Le réalisateur Park", text: k("수아 씨예요?") },
      { speaker: "Toi", answer: k("아니요, 저는 사샤예요."), options: [k("아니요, 저는 사샤예요."), BANGAWOYO, k("서울")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bapsang",
    itemName: "Table basse",
    itemNameRu: k("밥상"),
    ru: k("우와, 밥상이에요!"),
    en: "Ouah, une petite table !",
    a11y: "Une petite table ronde en bois, à pieds courts, posée sur le sol près de la couette.",
    image: p("bapsang"),
    steps: ["Minho apporte une petite table en bois.", "Sur une table comme celle-ci, on mange assis par terre.", "Murzik s'assoit à côté — juste à sa taille.", "Maintenant, il y a où dîner !"],
    bridge: "À la loge, on propose un café à Murzik. Pourvu qu'il ne le renverse pas…",
  },
};

const seoul3: Lesson = {
  id: "ko-a1-seoul-3",
  level: "A1",
  cityId: "ko-seoul",
  number: 3,
  title: "Merci et pardon",
  minutes: 7,
  goals: ["Dire « merci » de deux façons", "T'excuser", "Répondre « ce n'est rien »"],
  vocabNote: "Dans 합니다, la lettre ㅂ devant ㄴ sonne comme un « m » : gamsahamnida. Gamsahamnida et joesonghamnida sont très polis ; gomawoyo et mianhaeyo sont plus simples, mais polis aussi.",
  vocab: [
    v("kose3-1", GAMSA, "Merci ! (très poli)", "Murzik s'incline profondément, pattes jointes.", "", p("l3-1")),
    v("kose3-2", GOMAWO, "Merci ! (plus simple)", "Murzik sourit à Sua et fait signe de la patte.", "", p("l3-2")),
    v("kose3-3", JOESONG, "Pardon ! (très poli)", "Murzik regarde, horrifié, le café renversé.", "", p("l3-3")),
    v("kose3-4", k("미안해요."), "Pardon.", "Murzik plaque les oreilles, penaud.", "", p("l3-4")),
    v("kose3-5", GWAENCHANA, "Ce n'est rien. / Tout va bien.", "La maquilleuse fait non des mains en riant.", "", p("l3-5")),
    v("kose3-6", k("커피"), "café", "Un gobelet en carton de café glacé.", "", p("l3-6")),
    v("kose3-7", k("여기요."), "Voici, je vous en prie.", "La maquilleuse tend le gobelet.", "", p("l3-7")),
  ],
  letters: [
    letter("ㄱ", "« k », entre voyelles — « g »", GAMSA, "Merci !"),
    letter("ㅅ", "« s »", GAMSA, "Merci !"),
    letter("ㅎ", "« h »", GAMSA, "Merci !"),
    letter("ㅈ", "« tch », entre voyelles — « dj »", JOESONG, "Pardon !"),
    letter("ㅗ", "« o » : une barre avec une queue vers le haut", GOMAWO, "Merci !", "ㅗ (queue vers le haut) — « o », ㅜ (queue vers le bas) — « ou »."),
    letter("ㅚ", "« wé » : ㅗ et ㅣ ensemble", JOESONG, "Pardon !"),
  ],
  dialogue: {
    title: "À la loge",
    note: "Yeogiyo — « voici, je vous en prie » (littéralement « ici »). Gwaenchanayo ? avec une question — « ça va ? ».",
    lines: [
      line("makeup", k("무르직 씨, 커피 여기요."), "Murzik, voici le café."),
      line("murzik", GAMSA, "Merci !"),
      line("murzik", k("아! 커피! 죄송합니다!"), "Ah ! Le café ! Pardon !"),
      line("makeup", k("괜찮아요, 괜찮아요!"), "Ce n'est rien, ce n'est rien !"),
      line("sua", k("무르직 씨, 괜찮아요?"), "Murzik, ça va ?"),
      line("murzik", k("네, 괜찮아요. 고마워요, 수아 씨!"), "Oui, tout va bien. Merci, Sua !"),
    ],
    gist: choice("kose3-d1", "Que répond la maquilleuse quand Murzik s'excuse ?", [
      ["Ce n'est rien.", true],
      ["Merci.", false],
      ["Voici le café.", false],
    ]),
  },
  grammar: [
    {
      title: "Deux « merci » : -mnida et -yo",
      paragraphs: [
        "La terminaison -mnida (합니다) est officielle : avec les inconnus, les aînés, au travail. La terminaison -yo (요) est polie aussi, mais plus chaleureuse, pour la conversation de tous les jours.",
        "Gamsahamnida et gomawoyo veulent dire « merci » tous les deux. Au réalisateur, mieux vaut dire gamsahamnida ; à Sua — gomawoyo.",
      ],
      examples: [
        { ru: GAMSA, en: "Merci ! (officiel)" },
        { ru: GOMAWO, en: "Merci ! (de tous les jours)" },
      ],
    },
  ],
  tasks: [
    choice("kose3-t1", "Comment s'excuser le plus poliment possible devant le réalisateur ?", [
      [JOESONG, true],
      [GWAENCHANA, false],
      [GOMAWO, false],
    ], { skill: "grammar" }),
    listen("kose3-t2", "Écoute. Que dit la maquilleuse ?", GWAENCHANA, [
      ["Ce n'est rien.", true],
      ["Merci.", false],
      ["Pardon.", false],
    ]),
    match("kose3-t3", "Relie les paires.", [
      [GAMSA, "Merci !"],
      [JOESONG, "Pardon !"],
      [GWAENCHANA, "Ce n'est rien."],
      [k("커피"), "café"],
    ], { skill: "words" }),
    spell("kose3-t4", "Assemble les syllabes du mot « café ».", k("커피"), ["고", "기"]),
    speak("kose3-t5", k("커피 여기요."), GAMSA, "Merci !", { help: "La maquilleuse te tend un café. Remercie-la à voix haute." }),
    script("kose3-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Le réalisateur Park", text: IREUM },
      { speaker: "Toi", answer: IREUM_SASHA, options: [IREUM_SASHA, GWAENCHANA, k("배우예요.")] },
      { speaker: "Sua", text: k("민호 씨는 배우예요?") },
      { speaker: "Toi", answer: k("네, 배우예요."), options: [k("네, 배우예요."), JOESONG, k("저는 수아예요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hwabun",
    itemName: "Arbrisseau en pot",
    itemNameRu: k("화분"),
    ru: k("우와, 화분이에요!"),
    en: "Ouah, un arbrisseau en pot !",
    a11y: "Sur le rebord de la fenêtre, un pot en terre cuite avec un petit arbrisseau vert.",
    image: p("hwabun"),
    steps: ["La maquilleuse n'en veut pas à Murzik pour le café.", "Au contraire — elle lui offre un pot avec un petit arbrisseau.", "« Pour porter chance au tournage ! »", "Murzik le pose près de la fenêtre."],
    bridge: "Sur le plateau, il y a tant de choses ! Caméras, câbles, micros… Et tout ça, c'est quoi ?",
  },
};

const seoul4: Lesson = {
  id: "ko-a1-seoul-4",
  level: "A1",
  cityId: "ko-seoul",
  number: 4,
  title: "Qu'est-ce que c'est ?",
  minutes: 7,
  goals: ["Demander « Qu'est-ce que c'est ? »", "Dire « ceci », « cela », « là-bas »", "Nommer les choses du plateau de tournage"],
  vocabNote: "Igeo — « ceci » (près de moi), geugeo — « cela » (près de toi), jeogeo — « là-bas » (loin de nous deux). Mwoyeyo ? — « quoi ? », igeo mwoyeyo ? — « qu'est-ce que c'est ? »",
  vocab: [
    v("kose4-1", IGEO, "Qu'est-ce que c'est ?", "Murzik montre une grosse caméra de la patte.", "", p("l4-1")),
    v("kose4-2", k("이건 대본이에요."), "C'est le scénario.", "Sua tient une épaisse pile de feuilles avec un trombone.", "", p("l4-2")),
    v("kose4-3", k("카메라"), "caméra", "Une grosse caméra de cinéma sur un chariot.", "", p("l4-3")),
    v("kose4-4", k("마이크"), "micro", "Un micro à perchman, tout poilu, au-dessus des têtes.", "", p("l4-4")),
    v("kose4-5", k("그거"), "cela (près de toi)", "Murzik montre une chose dans les mains du cadreur.", "", p("l4-5")),
    v("kose4-6", k("저거"), "là-bas", "Murzik montre au loin, vers un projecteur.", "", p("l4-6")),
    v("kose4-7", k("의자"), "chaise", "La chaise pliante du réalisateur, avec son nom au dos.", "", p("l4-7")),
  ],
  letters: [
    letter("ㅋ", "« kh » : ㄱ avec un trait de plus, un son soufflé", k("카메라"), "caméra"),
    letter("ㄷ", "« t », entre voyelles — « d »", k("이건 대본이에요."), "C'est le scénario."),
    letter("ㅢ", "« eu-i » : ㅡ et ㅣ ensemble", k("의자"), "chaise"),
  ],
  dialogue: {
    title: "Sur le plateau",
    note: "Geureom — « alors, et ». Jeogeoneunyo ? — « et là-bas ? ». Je daebon — « mon scénario ».",
    lines: [
      line("murzik", IGEO, "Qu'est-ce que c'est ?"),
      line("cameraman", k("카메라예요."), "Une caméra."),
      line("murzik", k("그럼 저거는요?"), "Et là-bas ?"),
      line("cameraman", k("저거는 마이크예요."), "Là-bas — un micro."),
      line("sua", k("무르직 씨, 이거 대본이에요."), "Murzik, voici le scénario."),
      line("murzik", k("우와! 제 대본이에요?"), "Ouah ! C'est mon scénario ?"),
      line("sua", NE, "Oui."),
    ],
    gist: choice("kose4-d1", "Qu'est-ce que Sua a donné à Murzik ?", [
      ["Le scénario.", true],
      ["Un micro.", false],
      ["Une caméra.", false],
    ]),
  },
  grammar: [
    {
      title: "Ceci, cela, là-bas : igeo, geugeo, jeogeo",
      paragraphs: [
        "Igeo — ce qui est près de moi. Geugeo — ce qui est près de toi. Jeogeo — ce qui est loin de nous deux.",
        "La question « Qu'est-ce que c'est ? » — igeo mwoyeyo ? La réponse : kameraeyo (c'est une caméra), daebonieyo (c'est le scénario).",
      ],
      examples: [
        { ru: k("저거는 카메라예요."), en: "Là-bas — une caméra." },
        { ru: k("그거 뭐예요?"), en: "Qu'est-ce que c'est (près de toi) ?" },
      ],
    },
  ],
  tasks: [
    choice("kose4-t1", "Comment demander ce qu'est une chose éloignée de vous deux ?", [
      [k("저거 뭐예요?"), true],
      [IGEO, false],
      [k("그거 뭐예요?"), false],
    ], { skill: "grammar" }),
    listen("kose4-t2", "Écoute. Qu'est-ce que c'est ?", k("카메라예요."), [
      ["Une caméra.", true],
      ["Un micro.", false],
      ["Un scénario.", false],
    ]),
    match("kose4-t3", "Relie les paires.", [
      [k("대본"), "scénario"],
      [k("카메라"), "caméra"],
      [k("마이크"), "micro"],
      [k("의자"), "chaise"],
    ], { skill: "words" }),
    spell("kose4-t4", "Assemble les syllabes du mot « caméra ».", k("카메라"), ["마", "가"]),
    speak("kose4-t5", IGEO, k("의자예요."), "C'est une chaise.", { help: "Le cadreur montre une chaise. Réponds à voix haute ce que c'est." }),
    script("kose4-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "La maquilleuse", text: k("커피 여기요.") },
      { speaker: "Toi", answer: GAMSA, options: [GAMSA, JOESONG, ANIYO] },
      { speaker: "Sua", text: k("괜찮아요?") },
      { speaker: "Toi", answer: k("네, 괜찮아요."), options: [k("네, 괜찮아요."), IGEO, k("카메라예요.")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "naembi",
    itemName: "Casserole à ramyeon",
    itemNameRu: k("냄비"),
    ru: k("우와, 냄비예요!"),
    en: "Ouah, une casserole !",
    a11y: "Une petite casserole jaune avec des anses et un couvercle, posée sur la table basse ; à côté, un paquet de nouilles.",
    image: p("naembi"),
    steps: ["Le cadreur apporte la casserole jaune.", "« Dans chaque drama, les héros mangent les ramyeon directement dans le couvercle ! »", "À côté — un paquet de nouilles.", "Murzik goûte. Ça brûle, mais c'est bon !"],
    bridge: "Demain, l'actrice principale, Jiyeon, vient sur le plateau. Elle demandera d'où vient Murzik…",
  },
};

const seoul5: Lesson = {
  id: "ko-a1-seoul-5",
  level: "A1",
  cityId: "ko-seoul",
  number: 5,
  title: "Tu viens d'où ?",
  minutes: 7,
  goals: ["Demander « Tu viens d'où ? »", "Dire d'où tu viens", "Dire que tu parles un peu coréen"],
  vocabNote: "Eodieseo wasseoyo ? — « D'où venez-vous ? ». Ville + eseo wasseoyo — « je viens de … ». Hangugeo — « la langue coréenne », hanguk saram — « un Coréen, une Coréenne ».",
  vocab: [
    v("kose5-1", EODI, "Tu viens d'où ?", "L'actrice Jiyeon se penche vers Murzik avec curiosité.", "", p("l5-1")),
    v("kose5-2", k("파리에서 왔어요."), "Je viens de Paris.", "Murzik montre une carte postale avec la tour Eiffel.", "", p("l5-2")),
    v("kose5-3", k("한국"), "Corée", "Une carte de la Corée, avec Séoul marquée d'un cœur.", "", p("l5-3")),
    v("kose5-4", k("한국 사람"), "Coréen, Coréenne", "Jiyeon en hanbok sur le tournage.", "", p("l5-4")),
    v("kose5-5", k("한국어"), "la langue coréenne", "Le carnet de Murzik, rempli de lettres coréennes.", "", p("l5-5")),
    v("kose5-6", k("조금"), "un peu", "Murzik montre des doigts : tout petit peu.", "", p("l5-6")),
    v("kose5-7", k("한국어 잘해요!"), "Tu parles bien coréen !", "Jiyeon lève le pouce.", "", p("l5-7")),
  ],
  letters: [
    letter("ㅆ", "« ss » : double ㅅ, le son est tendu", EODI, "Tu viens d'où ?"),
    letter("ㅘ", "« wa » : ㅗ et ㅏ ensemble", EODI, "Tu viens d'où ?"),
    letter("ㅍ", "« ph » : un son soufflé", k("파리에서 왔어요."), "Je viens de Paris."),
  ],
  dialogue: {
    title: "L'actrice principale",
    note: "Peurangseu — « la France ». Geureonde — « mais, et pourtant ». Anieyo ! — la réponse modeste à un compliment : « Mais non, voyons ! »",
    lines: [
      line("jiyeon", k("안녕하세요! 저는 지연이에요."), "Bonjour ! Moi, c'est Jiyeon."),
      line("murzik", BANGAWOYO, "Enchanté !"),
      line("jiyeon", EODI, "Tu viens d'où ?"),
      line("murzik", k("파리에서 왔어요."), "Je viens de Paris."),
      line("jiyeon", k("우와, 프랑스 사람이에요?"), "Ouah, tu es français ?"),
      line("murzik", k("네! 그런데 한국어 조금 해요."), "Oui ! Mais je parle un peu coréen."),
      line("jiyeon", k("한국어 잘해요!"), "Tu parles bien coréen !"),
      line("murzik", k("아니에요!"), "Mais non, voyons !"),
    ],
    gist: choice("kose5-d1", "D'où vient Murzik ?", [
      ["De Paris.", true],
      ["De Séoul.", false],
      ["De Moscou.", false],
    ]),
  },
  grammar: [
    {
      title: "Je viens de … : … eseo wasseoyo",
      paragraphs: [
        "Ville ou pays + eseo (에서, « de ») + wasseoyo (« suis venu(e) ») : Parieseo wasseoyo — « je viens de Paris », Moseukeubaeseo wasseoyo — « je viens de Moscou ».",
        "Pays + saram (« personne ») — l'habitant du pays : hanguk saram — un Coréen, peurangseu saram — un Français.",
      ],
      examples: [
        { ru: k("수아 씨는 서울에서 왔어요."), en: "Sua vient de Séoul." },
        { ru: k("민호 씨는 한국 사람이에요."), en: "Minho est coréen." },
      ],
    },
  ],
  tasks: [
    choice("kose5-t1", "Comment dire « Je viens de Séoul » ?", [
      [k("서울에서 왔어요."), true],
      [k("서울이에요."), false],
      [k("서울 사람에서 왔어요."), false],
    ], { skill: "grammar" }),
    listen("kose5-t2", "Écoute. Que dit Jiyeon ?", k("한국어 잘해요!"), [
      ["Tu parles bien coréen !", true],
      ["Je viens de Corée.", false],
      ["Un peu.", false],
    ]),
    match("kose5-t3", "Relie les paires.", [
      [k("한국"), "Corée"],
      [k("한국어"), "la langue coréenne"],
      [k("사람"), "personne"],
      [k("조금"), "un peu"],
    ], { skill: "words" }),
    spell("kose5-t4", "Assemble les syllabes du mot « Corée ».", k("한국"), ["궁", "안"]),
    speak("kose5-t5", EODI, MOSCOW, "Je viens de Moscou.", { help: "Réponds à voix haute à Jiyeon. Tu peux dire ta ville." }),
    script("kose5-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Le cadreur", text: IGEO },
      { speaker: "Toi", answer: k("카메라예요."), options: [k("카메라예요."), GAMSA, k("저는 사샤예요.")] },
      { speaker: "Jiyeon", text: IREUM },
      { speaker: "Toi", answer: IREUM_SASHA, options: [IREUM_SASHA, k("서울에서 왔어요."), GWAENCHANA] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "seonpunggi",
    itemName: "Ventilateur",
    itemNameRu: k("선풍기"),
    ru: k("우와, 선풍기예요!"),
    en: "Ouah, un ventilateur !",
    a11y: "Un petit ventilateur vert menthe sur pied tourne la tête près de la fenêtre, le rideau bouge.",
    image: p("seonpunggi"),
    steps: ["Sur le toit, l'été, il fait chaud.", "Jiyeon offre le ventilateur vert menthe.", "Il tourne la tête de gauche à droite.", "Murzik tend ses moustaches dans le courant d'air."],
    bridge: "Demain, répétition. Le réalisateur Park parle très vite…",
  },
};

const seoul6: Lesson = {
  id: "ko-a1-seoul-6",
  level: "A1",
  cityId: "ko-seoul",
  number: 6,
  title: "Répétez, s'il vous plaît !",
  minutes: 7,
  goals: ["Demander de répéter", "Demander de parler moins vite", "Dire « je ne sais pas » et « j'ai compris »"],
  vocabNote: "Juseyo — « s'il vous plaît, donnez / faites ». Malhae juseyo — « dites, s'il vous plaît ». Hwaiting ! — « Allez ! Bon courage ! », c'est ainsi qu'on s'encourage entre collègues.",
  vocab: [
    v("kose6-1", k("잠깐만요!"), "Une minute !", "Murzik lève la patte : attendez !", "", p("l6-1")),
    v("kose6-2", DASI, "Répétez, s'il vous plaît.", "Murzik penche la tête et met une patte derrière son oreille.", "", p("l6-2")),
    v("kose6-3", CHEONCHEON, "Parlez plus lentement, s'il vous plaît.", "Murzik abaisse doucement les pattes : moins vite, plus doucement.", "", p("l6-3")),
    v("kose6-4", k("몰라요."), "Je ne sais pas.", "Murzik hausse les épaules.", "", p("l6-4")),
    v("kose6-5", k("알겠어요!"), "Compris ! / D'accord !", "Murzik hoche joyeusement la tête et fait « ok ».", "", p("l6-5")),
    v("kose6-6", k("이해 못 해요."), "Je ne comprends pas.", "Des points d'interrogation au-dessus de la tête de Murzik.", "", p("l6-6")),
    v("kose6-7", k("화이팅!"), "Allez ! Bon courage !", "Sua serre les poings et encourage Murzik.", "", p("l6-7")),
  ],
  letters: [
    letter("ㄲ", "« kk » : double ㄱ, le son est tendu", k("잠깐만요!"), "Une minute !"),
    letter("ㅊ", "« tchh » : ㅈ avec un trait en plus, un son soufflé", CHEONCHEON, "Parlez plus lentement."),
    letter("ㅌ", "« th » : ㄷ avec un trait en plus, un son soufflé", k("화이팅!"), "Bon courage !"),
    letter("ㅕ", "« yo » : comme ㅓ, mais avec deux traits", ANNYEONG, "Bonjour !", "Dans le mot 안녕하세요 elle est dans la deuxième syllabe : 녕 — « nyeong »."),
    letter("ㅛ", "« yo » : comme ㅗ, mais avec deux queues", k("잠깐만요!"), "Une minute !"),
  ],
  dialogue: {
    title: "La répétition",
    note: "Junbidwaesseoyo ? — « Prêt ? ». Le réalisateur répète syllabe par syllabe pour que Murzik comprenne.",
    lines: [
      line("director", k("무르직 씨, 준비됐어요?"), "Murzik, prêt ?"),
      line("murzik", k("잠깐만요! 죄송합니다, 다시 한 번 말해 주세요."), "Une minute ! Pardon, répétez, s'il vous plaît."),
      line("director", k("준비됐어요?"), "Prêt ?"),
      line("murzik", CHEONCHEON, "Parlez plus lentement, s'il vous plaît."),
      line("director", k("준… 비… 됐… 어요?"), "Prê-ê-êt ?"),
      line("murzik", k("아! 알겠어요! 네!"), "Ah ! Compris ! Oui !"),
      line("sua", k("무르직 씨, 화이팅!"), "Murzik, bon courage !"),
    ],
    gist: choice("kose6-d1", "Pourquoi Murzik demande-t-il de répéter ?", [
      ["Le réalisateur parle trop vite.", true],
      ["Il ne veut pas tourner.", false],
      ["Il a renversé du café.", false],
    ]),
  },
  grammar: [
    {
      title: "S'il vous plaît : … juseyo",
      paragraphs: [
        "Juseyo (주세요) — « donnez, s'il vous plaît ». Après une chose : keopi juseyo — « un café, s'il vous plaît ».",
        "Après une action — « faites, s'il vous plaît » : malhae juseyo — « dites, s'il vous plaît ». Dasi — « encore une fois », cheoncheonhi — « lentement ».",
      ],
      examples: [
        { ru: k("커피 주세요."), en: "Un café, s'il vous plaît." },
        { ru: k("다시 말해 주세요."), en: "Redites-le, s'il vous plaît." },
      ],
    },
  ],
  tasks: [
    choice("kose6-t1", "Comment demander de parler plus lentement ?", [
      [CHEONCHEON, true],
      [DASI, false],
      [k("몰라요."), false],
    ], { skill: "grammar" }),
    listen("kose6-t2", "Écoute. Qu'a dit Murzik ?", k("잠깐만요!"), [
      ["Une minute !", true],
      ["Je ne sais pas.", false],
      ["Compris !", false],
    ]),
    match("kose6-t3", "Relie les paires.", [
      [k("몰라요."), "Je ne sais pas."],
      [k("알겠어요!"), "Compris !"],
      [k("잠깐만요!"), "Une minute !"],
      [k("화이팅!"), "Bon courage !"],
    ], { skill: "words" }),
    spell("kose6-t4", "Assemble les syllabes du mot « encore une fois ».", k("다시"), ["사", "디"]),
    speak("kose6-t5", k("대본 봤어요? 3페이지, 대사 외웠어요?"), CHEONCHEON, "Parlez plus lentement, s'il vous plaît.", {
      help: "Le réalisateur parle très vite. Demande-lui à voix haute de parler plus lentement.",
    }),
    script("kose6-t6", "Souviens-toi des leçons passées. Termine les conversations.", [
      { speaker: "Jiyeon", text: EODI },
      { speaker: "Toi", answer: MOSCOW, options: [MOSCOW, k("몰라요."), GAMSA] },
      { speaker: "La maquilleuse", text: k("미안해요!") },
      { speaker: "Toi", answer: GWAENCHANA, options: [GWAENCHANA, k("화이팅!"), IGEO] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pyeongsang",
    itemName: "Banc de bois",
    itemNameRu: k("평상"),
    ru: k("우와, 평상이에요!"),
    en: "Ouah, un banc de bois !",
    a11y: "Sur le toit, près de la chambre, un large banc de bois bas ; au-dessus, une guirlande d'ampoules ; au loin, les lumières de Séoul.",
    image: p("pyeongsang"),
    steps: ["Les garçons de l'équipe montent le banc de bois sur le toit.", "Au-dessus, on accroche une guirlande d'ampoules.", "Le soir, tout le monde s'y assied ensemble.", "On voit les lumières de Séoul jusqu'à la tour."],
    bridge: "Demain — la première vraie prise. Murzik répète sa réplique toute la nuit.",
  },
};

const seoul7: Lesson = {
  id: "ko-a1-seoul-7",
  level: "A1",
  cityId: "ko-seoul",
  number: 7,
  title: "Moteur ! Première prise",
  minutes: 8,
  goals: ["Comprendre les ordres sur le plateau", "Féliciter et remercier pour le travail", "Dire au revoir"],
  vocabNote: "Annyeonghi gaseyo — « au revoir » à celui qui part. Annyeonghi gyeseyo — à celui qui reste. Sugohasyeosseumnida — « merci pour le travail », c'est ce qu'on se dit après le tournage.",
  vocab: [
    v("kose7-1", k("레디, 액션!"), "Attention, moteur !", "Le réalisateur Park crie dans un porte-voix, le clap claque devant la caméra.", "", p("l7-1")),
    v("kose7-2", k("컷!"), "Coupez ! C'est dans la boîte !", "Le réalisateur lève la main.", "", p("l7-2")),
    v("kose7-3", k("좋아요!"), "Super !", "Le réalisateur lève le pouce.", "", p("l7-3")),
    v("kose7-4", k("잘했어요!"), "Bravo ! (Bien joué !)", "Minho caresse la tête de Murzik.", "", p("l7-4")),
    v("kose7-5", k("수고하셨습니다!"), "Merci pour le travail !", "Toute l'équipe s'incline les uns devant les autres après le tournage.", "", p("l7-5")),
    v("kose7-6", k("내일 봐요!"), "À demain !", "Murzik fait signe depuis les marches du van.", "", p("l7-6")),
    v("kose7-7", k("안녕히 가세요!"), "Au revoir ! (à celui qui part)", "Sua fait signe à la voiture qui s'éloigne.", "", p("l7-7")),
  ],
  letters: [
    letter("ㅅ", "en fin de syllabe — « t »", k("컷!"), "Coupez !", "En début de syllabe, ㅅ — « s », mais à la fin — « t » : 컷 — keot."),
    letter("ㄹ", "en fin de syllabe — « l »", k("내일 봐요!"), "À demain !"),
    letter("ㅎ", "en fin de syllabe, devant une voyelle, ne se lit pas", k("좋아요!"), "Super !", "Ça s'écrit 좋아요, mais ça se dit « joayo »."),
  ],
  dialogue: {
    title: "La première prise",
    note: "Nuguseyo ? — « Qui est-ce ? ». C'est la première scène de Murzik : le chat frappe à la porte du héros.",
    lines: [
      line("director", k("레디, 액션!"), "Attention, moteur !"),
      line("minho", k("누구세요?"), "Qui est là ?"),
      line("murzik", k("안녕하세요! 저는 무르직이에요."), "Bonjour ! Moi, c'est Murzik."),
      line("minho", BANGAWOYO, "Enchanté !"),
      line("director", k("컷! 좋아요! 잘했어요, 무르직 씨!"), "Coupez ! Super ! Bravo, Murzik !"),
      line("sua", k("수고하셨습니다!"), "Merci à tous pour le travail !"),
      line("murzik", k("감사합니다! 내일 봐요!"), "Merci ! À demain !"),
    ],
    gist: choice("kose7-d1", "Comment s'est passée la première prise ?", [
      ["Super, le réalisateur est content.", true],
      ["Mal, il faut la refaire.", false],
      ["Murzik a oublié sa réplique.", false],
    ]),
  },
  grammar: [
    {
      title: "Tout ensemble",
      paragraphs: [
        "Tu sais déjà : te présenter (jeoneun … ieyo / yeyo), demander le prénom (ireumi mwoyeyo ?), dire d'où tu viens (… eseo wasseoyo), demander « qu'est-ce que c'est ? » (igeo mwoyeyo ?) et demander quelque chose (… juseyo).",
        "Nouveau : deux « au revoir ». Annyeonghi gaseyo — à celui qui part, annyeonghi gyeseyo — à celui qui reste.",
      ],
      examples: [
        { ru: k("안녕히 계세요!"), en: "Au revoir ! (à celui qui reste)" },
        { ru: k("내일 봐요!"), en: "À demain !" },
      ],
    },
  ],
  tasks: [
    listen("kose7-t1", "Examen d'écoute. Qui est-ce, et d'où vient-elle ?", k("저는 지연이에요. 서울에서 왔어요. 배우예요."), [
      ["Jiyeon, de Séoul, actrice.", true],
      ["Sua, de Séoul, réalisatrice.", false],
      ["Jiyeon, de Paris, actrice.", false],
    ]),
    choice("kose7-t2", "Tu quittes le tournage, et Sua reste. Que lui dis-tu ?", [
      [k("안녕히 계세요!"), true],
      [k("안녕히 가세요!"), false],
      [k("레디, 액션!"), false],
    ], { skill: "grammar" }),
    match("kose7-t3", "Relie les paires.", [
      [k("컷!"), "Coupez !"],
      [k("좋아요!"), "Super !"],
      [k("잘했어요!"), "Bravo !"],
      [k("내일 봐요!"), "À demain !"],
    ], { skill: "words" }),
    choice("kose7-t4", "Comment se lit le mot 컷 (coupez) ?", [
      ["« keot » — ㅅ à la fin sonne comme « t »", true],
      ["« keos »", false],
      ["« kot » sans souffle", false],
    ], { skill: "letters" }),
    speak("kose7-t5", k("수고하셨습니다!"), k("감사합니다! 내일 봐요!"), "Merci ! À demain !", { help: "Le tournage est fini. Réponds à voix haute à Sua." }),
    script("kose7-t6", "Souviens-toi de tout Séoul. Termine les conversations.", [
      { speaker: "Le réalisateur Park", text: IREUM },
      { speaker: "Toi", answer: IREUM_SASHA, options: [IREUM_SASHA, k("컷!"), ANIYO] },
      { speaker: "Jiyeon", text: EODI },
      { speaker: "Toi", answer: MOSCOW, options: [MOSCOW, k("의자예요."), GAMSA] },
      { speaker: "Le cadreur", text: IGEO },
      { speaker: "Toi", answer: k("마이크예요."), options: [k("마이크예요."), k("안녕히 가세요!"), BANGAWOYO] },
      { speaker: "Le réalisateur Park", text: k("준비됐어요?") },
      { speaker: "Toi", answer: DASI, options: [DASI, k("내일 봐요!"), k("우리")] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "daebon",
    itemName: "Scénario dédicacé",
    itemNameRu: k("대본"),
    ru: k("우와, 제 대본이에요!"),
    en: "Ouah, mon scénario !",
    a11y: "Le scénario du premier épisode, la couverture couverte de dédicaces de stylos différents, avec un petit dessin de chat en haut.",
    image: p("daebon"),
    steps: ["Après le tournage, tout le monde signe le scénario de Murzik.", "Le réalisateur Park, Minho, Jiyeon, Sua, la maquilleuse, le cadreur.", "Minho dessine un petit chat en haut.", "C'est le premier souvenir du tournage !"],
    bridge: "Demain, l'équipe part à Hongdae — tourner la scène du café.",
  },
};

const story: CityStory = {
  home: {
    name: "La chambrette sur le toit",
    nameRu: k("옥탑방"),
    image: p("home"),
    a11y: "Une petite chambrette vide sur le toit d'une maison de Séoul : sol chauffé, fenêtre, et derrière la porte le toit plat et les lumières de la ville. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "daebon",
  welcomeRu: k("안녕, 서울!"),
  welcomeEn: "Bonjour, Séoul !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik avec sa valise à l'aéroport d'Incheon. Sua tient une pancarte avec son prénom en coréen.",
  departureImage: p("departure"),
  departureA11y: "L'équipe de tournage fait signe à Murzik depuis le toit.",
  finale: [
    {
      image: p("daebon"),
      a11y: "Soirée sur le toit. Toute l'équipe est assise sur le banc sous la guirlande, Murzik au centre avec son scénario.",
      lines: [
        { en: "Le soir, toute l'équipe est assise sur le toit, sous la guirlande." },
        { ru: k("잘했어요, 무르직 씨!"), en: "Bravo, Murzik !" },
        { en: "Le réalisateur Park dit que le rôle de Murzik va grandir. La scène du café — dès demain !" },
      ],
    },
    {
      image: p("home"),
      a11y: "Murzik fait le tour de sa chambrette sur le toit, qu'il a meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambrette sur le toit." },
        { en: "Il emporte avec lui le scénario dédicacé. Le premier souvenir du tournage." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { en: "Les premiers tournages à Séoul sont derrière toi !" },
        { en: "7 / 7 leçons" },
        { ru: k("한국어 조금 해요!"), en: "Je parle un peu coréen !" },
      ],
    },
    {
      image: p("departure"),
      a11y: "L'équipe de tournage fait signe au revoir.",
      lines: [
        { ru: k("안녕히 계세요!"), en: "Au revoir !" },
        { ru: k("홍대로 가요!"), en: "On va à Hongdae !" },
      ],
    },
    {
      image: p("metro"),
      a11y: "Murzik et Sua dans une rame du métro de Séoul, des lettres coréennes sur l'affichage.",
      lines: [{ en: "Prochaine étape — Hongdae, le quartier animé de Séoul" }],
    },
    {
      image: pic("ko/hongdae/arrival"),
      a11y: "Murzik et Sua dans une rue lumineuse de Hongdae : musiciens de rue, cafés, enseignes en lettres coréennes.",
      lines: [
        { ru: k("우와, 홍대예요!"), en: "Ouah, c'est Hongdae !" },
        { en: "C'est ici qu'on tournera la scène du café." },
      ],
    },
  ],
};

export const koSeoulFr = {
  id: "ko-seoul",
  name: "Séoul",
  nameKo: k("서울"),
  lessons: [seoul1, seoul2, seoul3, seoul4, seoul5, seoul6, seoul7],
  story,
};
