import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Флорианополис · «Пляж и свободное время» · Остров, море, сёрфинг с Каю, футбол на пляже, «люблю / не люблю», «всегда, иногда, никогда». Пипока выучил «Que gol!». */

const p = (name: string) => pic(`pt/floripa/${name}`);
const CAIO = "Caio";

const fl1: Lesson = {
  id: "pt-a1-floripa-1",
  level: "A1",
  cityId: "pt-floripa",
  number: 1,
  title: "Na praia — À la plage",
  minutes: 7,
  goals: [
    "Nommer ce qu'il y a sur la plage",
    "Proposer : Vamos…?",
    "Prévenir : Cuidado!",
  ],
  vocabNote:
    "Florianópolis est une ville sur une île, avec plus de quarante plages. Les Brésiliens l'appellent affectueusement Floripa.",
  vocab: [
    v("ptfl1-1", "Que praia linda!", "Quelle belle plage !",
      "Une longue plage blanche, la mer bleue, des collines vertes.",
      p("l1-1")),
    v("ptfl1-2", "o mar", "la mer",
      "Murzik se tient au bord de l'eau, une vague lui lèche les pattes.",
      p("l1-2")),
    v("ptfl1-3", "a areia", "le sable",
      "Murzik fait couler le sable d'une patte à l'autre.",
      p("l1-3")),
    v("ptfl1-4", "Passa o protetor!", "Mets de la crème solaire !",
      "Bia tend un tube de crème solaire à Murzik.",
      p("l1-4")),
    v("ptfl1-5", "Cuidado com o sol!", "Attention au soleil !",
      "Le soleil tape sur la plage ; Murzik se cache sous un parasol.",
      p("l1-5")),
    v("ptfl1-6", "Vamos entrar na água?", "On va dans l'eau ?",
      "Bia tire Murzik par la patte vers la mer.",
      p("l1-6")),
    v("ptfl1-7", "A água está gelada!", "L'eau est glacée !",
      "Murzik bondit hors de l'eau, le poil hérissé.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Premier matin sur l'île",
    note:
      "Primeiro — « d'abord ». Gelada — « glacée » (pour l'eau, les boissons). Corajoso — « courageux ».",
    lines: [
      line("murzik", "Nossa! Que praia linda!", "Waouh ! Quelle belle plage !"),
      line("bia", "Olha o mar! Vamos entrar na água?", "Regarde la mer ! On va dans l'eau ?"),
      line("murzik", "Vamos! Mas primeiro… o protetor.", "On y va ! Mais d'abord… la crème solaire."),
      line("bia", "Isso! Cuidado com o sol!", "Bonne idée ! Attention au soleil !"),
      line("murzik", "Aaai! A água está gelada!", "Aïe ! L'eau est glacée !"),
      line("bia", "Gelada? Está ótima! Seja corajoso!", "Glacée ? Elle est parfaite ! Sois courageux !"),
    ],
    gist: choice("ptfl1-d1", "Pourquoi Murzik crie-t-il ?", [
      ["L'eau est froide.", true],
      ["Une méduse l'a piqué.", false],
      ["Il a perdu la crème solaire.", false],
    ]),
  },
  grammar: [
    g(
      "Vamos…? — « On… ? »",
      [
        "Vamos + verbe — c'est à la fois la question « on y va ? » et la proposition « allons-y ! » : Vamos entrar na água? — « On va dans l'eau ? » Vamos! — « On y va ! » C'est le « nous » de l'impératif, comme « allons ! » en français.",
        "Cuidado com… — « attention à… » : Cuidado com o sol! Cuidado com a onda!",
      ],
      [
        ["Vamos à praia?", "On va à la plage ?"],
        ["Cuidado com o carro!", "Attention à la voiture !"],
      ],
    ),
  ],
  tasks: [
    choice("ptfl1-t1", "Comment proposer « On va dans l'eau ? »", [
      ["Vamos entrar na água?", true],
      ["Vamos água entrar?", false],
      ["Nós água?", false],
    ], { skill: "grammar" }),
    listen("ptfl1-t2", "Écoute. Comment est l'eau ?", "A água está gelada!", [
      ["Glacée.", true],
      ["Chaude.", false],
      ["Sale.", false],
    ]),
    match("ptfl1-t3", PAIRS, [
      ["o mar", "la mer"],
      ["a areia", "le sable"],
      ["o sol", "le soleil"],
      ["o protetor", "la crème solaire"],
    ], { skill: "words" }),
    spell("ptfl1-t4", "Assemble le mot « mer ».", "mar"),
    speak("ptfl1-t5", "Vamos entrar na água?", "Vamos! Mas primeiro o protetor.", "On y va ! Mais d'abord la crème solaire.", {
      help: "Accepte à voix haute.",
    }),
    choice("ptfl1-t6", "Comment dire « J'ai froid » ?", [
      ["Estou com frio.", true],
      ["Faz calor.", false],
      ["Estou com sede.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "towel",
    itemName: "Serviette de plage",
    itemNameRu: "Toalha de praia",
    ru: "Oba! Uma toalha de praia!",
    en: "Hourra ! Une serviette de plage !",
    a11y: "Une serviette de plage à rayures sèche sur la rambarde de la cabane.",
    image: p("towel"),
    steps: [
      "Murzik grelotte après la baignade.",
      "Bia l'enroule dans une grande serviette à rayures.",
      "« Fica com ela! » — « Garde-la ! »",
      "La serviette sèche sur la rambarde de la cabane.",
    ],
    bridge: "Sur la plage, quelqu'un crie : « Ei! Vocês gostam de surfe? »",
  },
};

const fl2: Lesson = {
  id: "pt-a1-floripa-2",
  level: "A1",
  cityId: "pt-floripa",
  number: 2,
  title: "Eu gosto de… — J'aime…",
  minutes: 7,
  goals: [
    "Dire ce que tu aimes et ce que tu n'aimes pas",
    "Demander ce que l'autre aime",
    "Dire « j'aime beaucoup », « j'adore »",
  ],
  vocabNote:
    "Gostar — « aimer », mais il se construit avec de, comme « rêver de… » ou « parler de… » en français : eu gosto de praia. Jamais « gosto praia » !",
  vocab: [
    v("ptfl2-1", "Eu gosto de praia.", "J'aime la plage.",
      "Murzik est allongé avec bonheur sur une serviette, sous un parasol.",
      p("l2-1")),
    v("ptfl2-2", "Você gosta de surfar?", "Tu aimes le surf ?",
      "Un adolescent bronzé avec une planche de surf.",
      p("l2-2")),
    v("ptfl2-3", "Eu não gosto de areia no pelo.", "Je n'aime pas le sable dans le poil.",
      "Murzik se débarrasse du sable avec dégoût.",
      p("l2-3")),
    v("ptfl2-4", "Eu gosto muito!", "J'aime beaucoup !",
      "Murzik hoche la tête avec enthousiasme.",
      p("l2-4")),
    v("ptfl2-5", "Eu adoro o mar.", "J'adore la mer.",
      "Bia écoute le bruit des vagues les yeux fermés.",
      p("l2-5")),
    v("ptfl2-6", "Do que você gosta?", "Qu'est-ce que tu aimes ?",
      "L'adolescent à la planche regarde Murzik avec curiosité.",
      p("l2-6")),
    v("ptfl2-7", "Eu não gosto nada!", "Je n'aime pas du tout !",
      "Murzik grimace sous une éclaboussure d'eau salée.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Rencontre avec Caio",
    note:
      "Ei! — « Hé ! ». Pelo — « le poil ». Eu dou aula — « je donne des cours ».",
    lines: [
      line("caio", "Ei! Vocês gostam de surfe? Eu sou o Caio. Eu dou aula!", "Hé ! Vous aimez le surf ? Moi, c'est Caio. Je donne des cours !"),
      line("bia", "Eu gosto muito! E eu adoro o mar.", "J'aime beaucoup ! Et j'adore la mer."),
      line("caio", "E você, gatinho? Você gosta de surfar?", "Et toi, minou ? Tu aimes le surf ?"),
      line("murzik", "Eu não sei… Eu gosto de praia. Mas eu não gosto de água fria.", "Je ne sais pas… J'aime la plage. Mais je n'aime pas l'eau froide."),
      line("caio", "Do que você gosta, então?", "Alors, qu'est-ce que tu aimes ?"),
      line("murzik", "Eu gosto de areia… mas não gosto de areia no pelo!", "J'aime le sable… mais je n'aime pas le sable dans le poil !"),
    ],
    gist: choice("ptfl2-d1", "Qui est Caio ?", [
      ["Un moniteur de surf.", true],
      ["Un musicien du groupe.", false],
      ["Un vendeur de glaces.", false],
    ]),
  },
  grammar: [
    g(
      "Aimer : gosto de, gosto do, gosto da",
      [
        "Après gostar, il y a toujours de — contrairement au français « aimer » qui ne prend rien. Si le nom qui suit a l'article, ils fusionnent : gosto do mar (de + o), gosto da praia (de + a). Devant un verbe, juste de : gosto de surfar — « j'aime surfer » (l'infinitif, comme en français).",
        "La question garde aussi de, et il passe devant, comme « DE quoi tu rêves ? » : Do que você gosta?",
      ],
      [
        ["Eu gosto do mar.", "J'aime la mer."],
        ["Você gosta de nadar?", "Tu aimes nager ?"],
      ],
    ),
  ],
  tasks: [
    choice("ptfl2-t1", "Comment dire « J'aime la plage » ? (a praia)", [
      ["Eu gosto da praia.", true],
      ["Eu gosto a praia.", false],
      ["Eu gosto do praia.", false],
    ], { skill: "grammar" }),
    listen("ptfl2-t2", "Écoute. Qu'est-ce que la personne aime ?", "Eu adoro o mar.", [
      ["La mer.", true],
      ["Le sable.", false],
      ["Le surf.", false],
    ]),
    match("ptfl2-t3", PAIRS, [
      ["Eu gosto.", "J'aime."],
      ["Eu adoro.", "J'adore."],
      ["Eu não gosto.", "Je n'aime pas."],
      ["Eu gosto muito.", "J'aime beaucoup."],
    ], { skill: "words" }),
    missing("ptfl2-t4", "Quelle lettre manque-t-il ? (« aimer »)", "go", "to", "s", ["s", "z", "ss"]),
    speak("ptfl2-t5", "Do que você gosta?", "Eu gosto de música e de praia.", "J'aime la musique et la plage. (Parle de toi.)", {
      help: "Dis à voix haute ce que tu aimes.",
    }),
    choice("ptfl2-t6", "Comment dire « Attention au soleil ! » ?", [
      ["Cuidado com o sol!", true],
      ["Passa o sol!", false],
      ["Que sol lindo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sunscreen",
    itemName: "Crème solaire",
    itemNameRu: "Protetor solar",
    ru: "Oba! Protetor solar!",
    en: "Hourra ! De la crème solaire !",
    a11y: "Un tube jaune de crème solaire avec un petit soleil dessiné, posé sur l'étagère.",
    image: p("sunscreen"),
    steps: [
      "Caio remarque que le nez de Murzik a rougi.",
      "Il lui donne sa propre crème solaire.",
      "« Todo dia, tá? » — « Tous les jours, d'accord ? »",
      "La crème est posée sur l'étagère près de la porte.",
    ],
    bridge: "Caio tend une petite planche à Murzik : « Amanhã, aula de surfe! »",
  },
};

const fl3: Lesson = {
  id: "pt-a1-floripa-3",
  level: "A1",
  cityId: "pt-floripa",
  number: 3,
  title: "A aula de surfe — Le cours de surf",
  minutes: 7,
  goals: [
    "Dire ce que tu sais faire et ne sais pas faire",
    "Comprendre des consignes simples",
    "Encourager : Muito bem!",
  ],
  vocabNote:
    "Saber — « savoir », exactement comme en français : savoir quelque chose et savoir faire quelque chose : Eu sei surfar — « je sais surfer ». Et à Paraty, il y avait Eu não sei nadar.",
  vocab: [
    v("ptfl3-1", "Você sabe surfar?", "Tu sais surfer ?",
      "Caio tient deux planches, une grande et une petite.",
      p("l3-1")),
    v("ptfl3-2", "Eu sei um pouco.", "Je sais un peu.",
      "Bia se tient avec assurance sur une planche, sur le sable.",
      p("l3-2")),
    v("ptfl3-3", "Fica em pé!", "Debout !",
      "Murzik se hisse non sans mal sur la planche, sur une petite vague.",
      p("l3-3")),
    v("ptfl3-4", "Cuidado com a onda!", "Attention à la vague !",
      "Une vague s'approche de Murzik par-derrière.",
      p("l3-4")),
    v("ptfl3-5", "Eu caí!", "Je suis tombé !",
      "Murzik plonge dans l'eau ; seule sa queue dépasse.",
      p("l3-5")),
    v("ptfl3-6", "De novo!", "Encore !",
      "Murzik remonte sur la planche.",
      p("l3-6")),
    v("ptfl3-7", "Muito bem!", "Bravo !",
      "Caio applaudit pendant que Murzik tient sur la planche.",
      p("l3-7")),
  ],
  dialogue: {
    title: "La première vague",
    note:
      "Deita — « allonge-toi ». Rema — « rame ». Agora — « maintenant ». Consegui! — « J'ai réussi ! »",
    lines: [
      line("caio", "Murzik, você sabe surfar?", "Murzik, tu sais surfer ?"),
      line("murzik", "Não… A Bia sabe um pouco.", "Non… Bia sait un peu."),
      line("caio", "Tudo bem! Deita na prancha. Rema! Agora fica em pé!", "Pas grave ! Allonge-toi sur la planche. Rame ! Et maintenant, debout !"),
      line("bia", "Cuidado com a onda!", "Attention à la vague !"),
      line("murzik", "Ai! Eu caí!", "Aïe ! Je suis tombé !"),
      line("caio", "De novo! Rema… fica em pé…", "Encore ! Rame… debout…"),
      line("murzik", "Consegui! Consegui!", "J'ai réussi ! J'ai réussi !"),
      line("caio", "Muito bem, Murzik!", "Bravo, Murzik !"),
    ],
    gist: choice("ptfl3-d1", "Murzik y arrive-t-il ?", [
      ["Oui, à la deuxième tentative.", true],
      ["Non, il tombe tout le temps.", false],
      ["Il n'a pas voulu essayer.", false],
    ]),
  },
  grammar: [
    g(
      "Sei — « je sais »",
      [
        "Saber + verbe — « savoir faire » : Eu sei surfar, você sabe nadar? C'est le même mot qu'en français : « savoir nager », « savoir surfer » ! Les formes : eu sei, você / ele sabe, nós sabemos, eles sabem. Eu sei est irrégulier — comme « je sais » ! — il faut l'apprendre par cœur.",
        "Eu caí — « je suis tombé(e) » — c'est le passé. Bonne nouvelle : au passé, une seule forme pour « tombé » et « tombée ». On verra le passé en détail à Fortaleza.",
      ],
      [
        ["Eu sei nadar.", "Je sais nager."],
        ["Você sabe surfar?", "Tu sais surfer ?"],
      ],
    ),
  ],
  tasks: [
    choice("ptfl3-t1", "Comment dire « Je sais nager » ?", [
      ["Eu sei nadar.", true],
      ["Eu sabe nadar.", false],
      ["Eu sou nadar.", false],
    ], { skill: "grammar" }),
    listen("ptfl3-t2", "Écoute. Que dit Caio ?", "Fica em pé!", [
      ["Debout !", true],
      ["Allonge-toi !", false],
      ["Attention !", false],
    ]),
    match("ptfl3-t3", PAIRS, [
      ["Eu caí!", "Je suis tombé !"],
      ["De novo!", "Encore !"],
      ["Muito bem!", "Bravo !"],
      ["a prancha", "la planche"],
    ], { skill: "words" }),
    spell("ptfl3-t4", "Assemble le mot « vague ».", "onda"),
    speak("ptfl3-t5", "Você sabe surfar?", "Não, eu não sei surfar. Mas eu sei nadar!", "Non, je ne sais pas surfer. Mais je sais nager !", {
      help: "Dis à voix haute ce que tu sais faire et ne sais pas faire.",
    }),
    choice("ptfl3-t6", "Comment demander « Qu'est-ce que tu aimes ? »", [
      ["Do que você gosta?", true],
      ["Você gosta que?", false],
      ["Que você gosta de?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "surfboard",
    itemName: "Petite planche de surf",
    itemNameRu: "Prancha",
    ru: "Oba! Uma prancha!",
    en: "Hourra ! Une planche de surf !",
    a11y: "Une petite planche de surf jaune appuyée contre le mur de la cabane.",
    image: p("surfboard"),
    steps: [
      "Après le cours, Caio donne à Murzik sa vieille planche d'enfant.",
      "« Você tem talento! » — « Tu as du talent ! »",
      "Murzik la porte fièrement jusqu'à la cabane.",
      "La planche est appuyée contre le mur.",
    ],
    bridge: "Au coucher du soleil, un match de foot commence sur la plage. Caio appelle : « Bora jogar? »",
  },
};

const fl4: Lesson = {
  id: "pt-a1-floripa-4",
  level: "A1",
  cityId: "pt-floripa",
  number: 4,
  title: "Futebol na praia — Le foot sur la plage",
  minutes: 7,
  goals: [
    "Inviter à jouer",
    "Comprendre ce qu'on crie pendant un match",
    "Dire qui a gagné",
  ],
  vocabNote:
    "Bora! — un « Allez ! On y va ! » familier, raccourci de Vamos embora. Attention au faux ami : time se prononce [tchimi] et veut dire « équipe », pas « temps » !",
  vocab: [
    v("ptfl4-1", "Vamos jogar futebol?", "On joue au foot ?",
      "Caio tient un ballon sous le bras et fait signe à Murzik.",
      p("l4-1")),
    v("ptfl4-2", "Passa a bola!", "Fais la passe !",
      "Murzik court sur le sable en criant, patte en l'air.",
      p("l4-2")),
    v("ptfl4-3", "Chuta!", "Tire !",
      "Murzik frappe le ballon de toutes ses forces.",
      p("l4-3")),
    v("ptfl4-4", "o time azul", "l'équipe bleue",
      "Des jeunes en maillots bleus se serrent dans les bras.",
      p("l4-4")),
    v("ptfl4-5", "Quem ganhou?", "Qui a gagné ?",
      "Bia avec un sifflet d'arbitre à la main.",
      p("l4-5")),
    v("ptfl4-6", "Nós ganhamos!", "On a gagné !",
      "Murzik et Caio sautent de joie.",
      p("l4-6")),
    v("ptfl4-7", "Empate!", "Match nul !",
      "Le score écrit sur le sable : 2 – 2.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Un match au coucher du soleil",
    note:
      "Gol — « but ». Golaço — « un but magnifique ». Placar — « le score ».",
    lines: [
      line("caio", "Bora! Vamos jogar futebol? Você é do time azul, Murzik.", "Allez ! On joue au foot ? Tu es dans l'équipe bleue, Murzik."),
      line("murzik", "Eu? Tá bom!", "Moi ? D'accord !"),
      line("caio", "Murzik, passa a bola!", "Murzik, fais la passe !"),
      line("bia", "Não! Chuta, Murzik! Chuta!", "Non ! Tire, Murzik ! Tire !"),
      line("murzik", "Gooool!", "Buuuut !"),
      line("caio", "Golaço! Nós ganhamos!", "Quel but ! On a gagné !"),
      line("bia", "Não, o placar é dois a dois. Empate!", "Non, le score est de deux partout. Match nul !"),
    ],
    gist: choice("ptfl4-d1", "Comment le match s'est-il terminé ?", [
      ["Sur un match nul, deux partout.", true],
      ["Les bleus ont gagné.", false],
      ["Murzik a quitté le terrain.", false],
    ]),
  },
  grammar: [
    g(
      "Nós ganhamos : présent et passé se ressemblent",
      [
        "Pour les verbes en -ar, la forme avec nós est la même au présent et au passé : nós ganhamos — « nous gagnons » et « nous avons gagné ». C'est le contexte qui dit lequel. En français, il faut deux formes : « nous gagnons » / « nous avons gagné » — ici, une seule suffit !",
        "Jogar — « jouer à un jeu » : jogar futebol, jogar vôlei. Et pour la musique, c'est tocar (tu te souviens de São Paulo ?). En français, « jouer » fait les deux : « jouer au foot », « jouer de la guitare » — en portugais, il faut choisir !",
      ],
      [
        ["Nós jogamos todo dia.", "Nous jouons tous les jours."],
        ["Ontem nós jogamos futebol.", "Hier, nous avons joué au foot."],
      ],
    ),
  ],
  tasks: [
    choice("ptfl4-t1", "Comment dire « jouer au volley » ?", [
      ["jogar vôlei", true],
      ["tocar vôlei", false],
      ["fazer vôlei", false],
    ], { skill: "grammar" }),
    listen("ptfl4-t2", "Écoute. Qui a gagné ?", "O time azul ganhou!", [
      ["L'équipe bleue.", true],
      ["Match nul.", false],
      ["L'équipe rouge.", false],
    ]),
    match("ptfl4-t3", PAIRS, [
      ["Passa a bola!", "Fais la passe !"],
      ["Chuta!", "Tire !"],
      ["Empate!", "Match nul !"],
      ["o time", "l'équipe"],
    ], { skill: "words" }),
    missing("ptfl4-t4", "Quelle lettre manque-t-il ? (« ballon »)", "bo", "a", "l", ["l", "u", "r"]),
    speak("ptfl4-t5", "Vamos jogar futebol?", "Vamos! Eu sou do time azul!", "On y va ! Je suis dans l'équipe bleue !", {
      help: "Accepte à voix haute et choisis une équipe.",
    }),
    choice("ptfl4-t6", "Comment dire « Je sais un peu » ?", [
      ["Eu sei um pouco.", true],
      ["Eu sou um pouco.", false],
      ["Eu caí um pouco.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sunglasses",
    itemName: "Lunettes de soleil",
    itemNameRu: "Óculos de sol",
    ru: "Oba! Óculos de sol!",
    en: "Hourra ! Des lunettes de soleil !",
    a11y: "Une petite paire de lunettes de soleil à monture verte posée sur la table.",
    image: p("sunglasses"),
    steps: [
      "Après le match, Caio remet un « trophée » à Murzik.",
      "Ce sont des lunettes de soleil minuscules !",
      "« Para o craque! » — « Pour la star du foot ! »",
      "Les lunettes sont posées sur la table de la cabane.",
    ],
    bridge: "Caio raconte sa journée habituelle sur l'île.",
  },
};

const fl5: Lesson = {
  id: "pt-a1-floripa-5",
  level: "A1",
  cityId: "pt-floripa",
  number: 5,
  title: "Sempre, às vezes, nunca — Toujours, parfois, jamais",
  minutes: 7,
  goals: [
    "Raconter ce que tu fais tous les jours",
    "Dire à quelle fréquence",
    "Dire « le matin, l'après-midi, le soir »",
  ],
  vocabNote:
    "Avec nunca, pas besoin de « ne » : Eu nunca como peixe. Mais on entend aussi Eu não como nunca — pour insister.",
  vocab: [
    v("ptfl5-1", "Eu sempre nado de manhã.", "Je nage toujours le matin.",
      "Caio plonge dans une vague au lever du soleil.",
      p("l5-1")),
    v("ptfl5-2", "Às vezes eu surfo à tarde.", "Parfois je surfe l'après-midi.",
      "Caio surfe une grande vague sur sa planche.",
      p("l5-2")),
    v("ptfl5-3", "Eu nunca acordo cedo.", "Je ne me réveille jamais tôt.",
      "Bia dort la tête sous l'oreiller pendant que le réveil sonne.",
      p("l5-3")),
    v("ptfl5-4", "todo dia", "tous les jours",
      "Un calendrier où chaque jour est marqué d'un petit soleil.",
      p("l5-4")),
    v("ptfl5-5", "à noite", "le soir, la nuit",
      "La plage sous la lune.",
      p("l5-5")),
    v("ptfl5-6", "O que você faz de manhã?", "Que fais-tu le matin ?",
      "Bia interviewe Caio, un carnet à la main.",
      p("l5-6")),
    v("ptfl5-7", "Eu tomo café na praia.", "Je prends mon petit-déjeuner sur la plage.",
      "Caio est assis sur le sable avec une tasse et une banane.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Une interview pour le blog",
    note:
      "Tomar café — « prendre le petit-déjeuner », littéralement « prendre un café ». De manhã — « le matin », à tarde — « l'après-midi », à noite — « le soir ».",
    lines: [
      line("bia", "Caio, é para o meu blog. O que você faz de manhã?", "Caio, c'est pour mon blog. Que fais-tu le matin ?"),
      line("caio", "Eu sempre nado de manhã. E eu tomo café na praia.", "Le matin, je nage toujours. Et je prends mon petit-déjeuner sur la plage."),
      line("bia", "E à tarde?", "Et l'après-midi ?"),
      line("caio", "Às vezes eu surfo, às vezes eu dou aula.", "Parfois je surfe, parfois je donne des cours."),
      line("murzik", "E à noite?", "Et le soir ?"),
      line("caio", "À noite eu jogo futebol. Todo dia!", "Le soir, je joue au foot. Tous les jours !"),
      line("murzik", "Eu nunca acordo cedo… Mas aqui eu quero nadar todo dia!", "Je ne me réveille jamais tôt… Mais ici, je veux nager tous les jours !"),
    ],
    gist: choice("ptfl5-d1", "Que fait Caio tous les soirs ?", [
      ["Il joue au foot.", true],
      ["Il donne des cours de surf.", false],
      ["Il se couche tôt.", false],
    ]),
  },
  grammar: [
    g(
      "À quelle fréquence : sempre, às vezes, nunca",
      [
        "Sempre (« toujours »), às vezes (« parfois ») et nunca (« jamais ») se placent d'habitude devant le verbe : Eu sempre nado. Às vezes peut aussi commencer la phrase : Às vezes eu surfo.",
        "Avec nunca, pas besoin de não : Eu nunca acordo cedo. — Je ne me réveille jamais tôt. En français il faut deux morceaux (« ne… jamais ») ; en portugais, nunca suffit à lui tout seul.",
      ],
      [
        ["Eu sempre tomo café.", "Je prends toujours mon petit-déjeuner."],
        ["Ela nunca come carne.", "Elle ne mange jamais de viande."],
      ],
    ),
  ],
  tasks: [
    choice("ptfl5-t1", "Comment dire « Je ne me réveille jamais tôt » ?", [
      ["Eu nunca acordo cedo.", true],
      ["Eu acordo nunca cedo não.", false],
      ["Nunca eu não acordo.", false],
    ], { skill: "grammar" }),
    listen("ptfl5-t2", "Écoute. Quand Caio nage-t-il ?", "Eu sempre nado de manhã.", [
      ["Toujours le matin.", true],
      ["Parfois le soir.", false],
      ["Jamais.", false],
    ]),
    match("ptfl5-t3", PAIRS, [
      ["sempre", "toujours"],
      ["às vezes", "parfois"],
      ["nunca", "jamais"],
      ["todo dia", "tous les jours"],
    ], { skill: "words" }),
    spell("ptfl5-t4", "Assemble le mot « jamais ».", "nunca"),
    speak("ptfl5-t5", "O que você faz de manhã?", "De manhã eu sempre tomo café.", "Le matin, je prends toujours mon petit-déjeuner.", {
      help: "Raconte à voix haute ce que tu fais le matin.",
    }),
    choice("ptfl5-t6", "Le match se termine 1–1. Que crie-t-on ?", [
      ["Empate!", true],
      ["Nós ganhamos!", false],
      ["Chuta!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bucket",
    itemName: "Seau et pelle",
    itemNameRu: "Balde e pá",
    ru: "Oba! Um balde e uma pá!",
    en: "Hourra ! Un seau et une pelle !",
    a11y: "Un seau rouge et une pelle jaune, pleins de sable, devant la porte.",
    image: p("bucket"),
    steps: [
      "Le matin, Murzik construit un château de sable sur la plage.",
      "Des petits enfants lui apportent un seau et une pelle.",
      "« Pode ficar! » — « Garde-les ! »",
      "Le seau trône devant la porte de la cabane.",
    ],
    bridge: "Le soir, Caio les emmène à la lagune pour admirer le coucher du soleil.",
  },
};

const fl6: Lesson = {
  id: "pt-a1-floripa-6",
  level: "A1",
  cityId: "pt-floripa",
  number: 6,
  title: "O pôr do sol — Le coucher du soleil",
  minutes: 7,
  goals: [
    "Décrire un coucher de soleil et le ciel",
    "Dire « j'adore cet endroit »",
    "Commander un açaí",
  ],
  vocabNote:
    "Açaí [assaï] — une baie d'Amazonie. On en fait une crème glacée épaisse qu'on mange à la cuillère, avec de la banane et du granola.",
  vocab: [
    v("ptfl6-1", "o pôr do sol", "le coucher du soleil",
      "Un soleil orange se couche sur la lagune.",
      p("l6-1")),
    v("ptfl6-2", "Que céu bonito!", "Quel beau ciel !",
      "Un ciel rose et orange au-dessus de l'eau.",
      p("l6-2")),
    v("ptfl6-3", "Está ventando.", "Il y a du vent.",
      "Le vent ébouriffe le pelage et les oreilles de Murzik.",
      p("l6-3")),
    v("ptfl6-4", "Vamos sentar aqui?", "On s'assoit ici ?",
      "Bia montre une grande pierre plate au bord de l'eau.",
      p("l6-4")),
    v("ptfl6-5", "Eu amo este lugar.", "J'adore cet endroit.",
      "Murzik contemple l'eau d'un air rêveur.",
      p("l6-5")),
    v("ptfl6-6", "Um açaí, por favor.", "Un açaí, s'il te plaît.",
      "Un bol d'açaï violet foncé avec de la banane et du granola.",
      p("l6-6")),
    v("ptfl6-7", "Olha as estrelas!", "Regarde les étoiles !",
      "Un ciel de nuit plein d'étoiles.",
      p("l6-7")),
  ],
  dialogue: {
    title: "Au bord de la lagune",
    note:
      "Lagoa — « lagune, lac ». Doce — « sucré ». Pode ser — « d'accord, pourquoi pas ».",
    lines: [
      line("caio", "Olha o pôr do sol na lagoa!", "Regarde le coucher du soleil sur la lagune !"),
      line("murzik", "Que céu bonito! Mas está ventando…", "Quel beau ciel ! Mais il y a du vent…"),
      line("bia", "Vamos sentar aqui? Um açaí, Murzik?", "On s'assoit ici ? Un açaí, Murzik ?"),
      line("murzik", "Pode ser! Um açaí, por favor.", "Pourquoi pas ! Un açaí, s'il te plaît."),
      line("murzik", "Hmm, é muito doce! Eu amo este lugar.", "Mmm, c'est trop bon ! J'adore cet endroit."),
      line("bia", "Eu também. Olha as estrelas!", "Moi aussi. Regarde les étoiles !"),
    ],
    gist: choice("ptfl6-d1", "Que mangent Murzik et Bia ?", [
      ["De l'açaí.", true],
      ["Une pizza.", false],
      ["Du poisson frit.", false],
    ]),
  },
  grammar: [
    g(
      "J'aime, j'adore : gostar, adorar, amar",
      [
        "Trois degrés : eu gosto (« j'aime ») → eu adoro (« j'adore ») → eu amo (« j'aime à la folie »). Amo se dit des personnes comme des lieux : Eu amo este lugar.",
        "Après adorar et amar, pas de préposition de : Eu adoro o mar, Eu amo pizza. Seul gostar veut de. Comme en français : on dit « j'aime le thé », mais « je rêve de thé » — chaque verbe a sa règle.",
      ],
      [
        ["Eu gosto de açaí.", "J'aime l'açaí."],
        ["Eu amo o Brasil!", "J'adore le Brésil !"],
      ],
    ),
  ],
  tasks: [
    choice("ptfl6-t1", "Choisis la phrase correcte.", [
      ["Eu adoro o mar.", true],
      ["Eu adoro do mar.", false],
      ["Eu gosto o mar.", false],
    ], { skill: "grammar" }),
    listen("ptfl6-t2", "Écoute. Quel temps fait-il ?", "Está ventando.", [
      ["Il y a du vent.", true],
      ["Il pleut.", false],
      ["Il fait chaud.", false],
    ]),
    match("ptfl6-t3", PAIRS, [
      ["o pôr do sol", "le coucher du soleil"],
      ["o céu", "le ciel"],
      ["as estrelas", "les étoiles"],
      ["a lagoa", "la lagune"],
    ], { skill: "words" }),
    missing("ptfl6-t4", "Quelle lettre manque-t-il ? (« ciel »)", "c", "u", "é", ["é", "e", "ê"]),
    speak("ptfl6-t5", "Você gosta deste lugar?", "Eu amo este lugar!", "J'adore cet endroit !", {
      help: "Réponds à voix haute : comment trouves-tu cet endroit ?",
    }),
    choice("ptfl6-t6", "Comment dire « Je nage toujours le matin » ?", [
      ["Eu sempre nado de manhã.", true],
      ["Eu nunca nado de manhã.", false],
      ["Eu nado sempre à noite.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "coconut",
    itemName: "Coupe en noix de coco",
    itemNameRu: "Copo de coco",
    ru: "Oba! Um copo de coco!",
    en: "Hourra ! Une coupe en noix de coco !",
    a11y: "Une demi-noix de coco, polie jusqu'à briller, posée sur le rebord de la fenêtre comme une coupe.",
    image: p("coconut"),
    steps: [
      "Le vendeur d'açaí tend une demi-noix de coco à Murzik.",
      "« Para o seu açaí! » — « Pour ton açaí ! »",
      "Murzik la porte à la maison.",
      "La coupe en coco trône sur le rebord de la fenêtre.",
    ],
    bridge: "Le matin, sur la plage, Caio s'écrie soudain : « Murzik! O seu papagaio! Eu vi! »",
  },
};

const fl7: Lesson = {
  id: "pt-a1-floripa-7",
  level: "A1",
  cityId: "pt-floripa",
  number: 7,
  title: "Que gol! — Quel but !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Dire « tu vas me manquer »",
    "Revoir tous les mots de Florianópolis",
  ],
  vocabNote:
    "Valeu! — un « merci ! » familier. Vou sentir saudade — « tu vas me manquer ».",
  vocab: [
    v("ptfl7-1", "Que gol!", "Quel but !",
      "Le perroquet vert est perché sur la barre transversale d'un but de plage et bat des ailes.",
      p("l7-1")),
    v("ptfl7-2", "Ele gritou…", "Il a crié…",
      "Caio imite le cri du perroquet, les mains en porte-voix.",
      p("l7-2")),
    v("ptfl7-3", "em cima da trave", "sur la barre transversale",
      "Un but de foot désert sur la plage.",
      p("l7-3")),
    v("ptfl7-4", "Eles foram para Foz do Iguaçu.", "Ils sont partis à Foz do Iguaçu.",
      "Une carte : une longue flèche vers l'intérieur du pays, en direction des chutes.",
      p("l7-4")),
    v("ptfl7-5", "as cataratas", "les chutes d'eau",
      "Une petite image : d'immenses cascades dans la jungle verte.",
      p("l7-5")),
    v("ptfl7-6", "Valeu, Caio!", "Merci, Caio !",
      "Murzik et Caio entrechoquent poing et patte.",
      p("l7-6")),
    v("ptfl7-7", "Vou sentir saudade!", "Tu vas me manquer !",
      "Murzik jette un dernier regard à la plage.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce qu'a dit le perroquet",
    note:
      "Eu vi — « j'ai vu ». Domingo — « dimanche ». Longe daqui — « loin d'ici ».",
    lines: [
      line("caio", "Murzik! O seu papagaio! Eu vi! No domingo, no jogo de futebol!", "Murzik ! Ton perroquet ! Je l'ai vu ! Dimanche, au match de foot !"),
      line("murzik", "O Pipoca! E o que ele fez?", "Pipoca ! Et qu'est-ce qu'il a fait ?"),
      line("caio", "Ele estava em cima da trave. E ele gritou: Que gol! Que gol!", "Il était sur la barre transversale. Et il criait : « Quel but ! Quel but ! »"),
      line("bia", "É ele! E a banda?", "C'est lui ! Et le groupe ?"),
      line("caio", "Eles foram para Foz do Iguaçu. Para as cataratas. É longe daqui!", "Ils sont partis à Foz do Iguaçu. Vers les chutes. C'est loin d'ici !"),
      line("murzik", "Valeu, Caio! Vou sentir saudade!", "Merci, Caio ! Tu vas me manquer !"),
      line("caio", "Eu também! Volta para surfar!", "Toi aussi ! Reviens surfer !"),
    ],
    gist: choice("ptfl7-d1", "Quelle phrase Pipoca a-t-il apprise à Florianópolis ?", [
      ["« Quel but ! »", true],
      ["« Fais la passe ! »", false],
      ["« Quel froid ! »", false],
    ]),
  },
  grammar: [
    g(
      "Vou + verbe — le futur proche",
      [
        "Le futur se construit facilement : vou (du verbe ir, « aller ») + verbe. Vou sentir saudade — « tu vas me manquer », vou nadar — « je vais nager ». Exactement comme le futur proche du français : « je vais + infinitif » ! Plus de détails à Olinda.",
        "Eu vi — « j'ai vu », ele gritou — « il a crié », ele fez — « il a fait ». C'est le passé : nous l'apprendrons pour de bon à Fortaleza.",
      ],
      [
        ["Eu vou surfar amanhã.", "Je vais surfer demain."],
        ["Nós vamos sentir saudade.", "Tu vas nous manquer."],
      ],
    ),
  ],
  tasks: [
    listen("ptfl7-t1", "Examen audio. Que raconte Caio ?", "O papagaio estava em cima da trave e gritou: Que gol! A banda foi para Foz do Iguaçu.", [
      ["Le perroquet criait au match de foot, et le groupe est parti vers les chutes.", true],
      ["Le perroquet a appris à surfer.", false],
      ["Le groupe est resté sur l'île.", false],
    ]),
    choice("ptfl7-t2", "Comment dire « Tu vas me manquer ! » ?", [
      ["Vou sentir saudade!", true],
      ["Estou com saudade de nada!", false],
      ["Vou sentar aqui!", false],
    ], { skill: "words" }),
    build("ptfl7-t3", "Assemble la phrase : « Ils sont partis à Foz do Iguaçu ».", ["Eles", "foram", "para", "Foz", "do", "Iguaçu."]),
    missing("ptfl7-t4", "Quelle lettre manque-t-il ? (« chutes »)", "catara", "as", "t", ["t", "d", "ch"]),
    speak("ptfl7-t5", "Tchau! Volta para surfar!", "Valeu! Vou sentir saudade!", "Merci ! Tu vas me manquer !", {
      help: "Dis au revoir à voix haute.",
    }),
    script("ptfl7-t6", "Souviens-toi de tout Florianópolis. Termine la conversation avec Caio.", [
      { speaker: CAIO, text: "Oi! Você gosta de praia?" },
      { speaker: YOU, answer: "Eu adoro! Mas a água está gelada!", options: ["Eu adoro! Mas a água está gelada!", "Eu gosto o mar.", "Empate!"] },
      { speaker: CAIO, text: "Você sabe surfar?" },
      { speaker: YOU, answer: "Eu sei um pouco.", options: ["Eu sei um pouco.", "Eu sou surfar.", "Passa a bola!"] },
      { speaker: CAIO, text: "Vamos jogar futebol à noite?" },
      { speaker: YOU, answer: "Vamos! Eu sou do time azul!", options: ["Vamos! Eu sou do time azul!", "Nunca à noite não.", "Olha as estrelas!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-floripa",
    itemName: "Photo de Pipoca sur le but",
    itemNameRu: "Foto do Pipoca no gol",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y:
      "Une photo : le perroquet vert sur la barre transversale d'un but de plage ; en bas, des enfants avec un ballon le regardent en levant la tête.",
    image: p("photo"),
    steps: [
      "Caio trouve la photo dans son téléphone.",
      "Pipoca est sur le but, comme un vrai supporter !",
      "Bia l'imprime à la cabine photo près de la plage.",
      "Légende : « Que gol! » Et hop, dans l'album.",
    ],
    bridge: "Devant eux, une longue route vers l'ouest, jusqu'aux chutes d'Iguaçu.",
  },
};

const story: CityStory = {
  home: {
    name: "Une cabane sur la plage",
    nameRu: "A cabana na praia",
    image: p("home"),
    a11y:
      "Une petite cabane en bois sur pilotis au bord de la plage : une véranda, des volets bleus, la mer derrière. La valise de Murzik est posée sur la véranda.",
  },
  keepsakeId: "photo-floripa",
  welcomeRu: "Olá, Floripa!",
  welcomeEn: "Bonjour, Floripa !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Murzik et Bia sur le pont de l'île. Murzik enlève son bonnet et son écharpe ; devant eux, la mer et le soleil.",
  departureImage: p("departure"),
  departureA11y: "Caio fait signe de la main sur la plage, sa planche sous le bras.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca sur le but.",
      lines: [
        { en: "Cinquième page de l'album : Pipoca sur le but de foot." },
        { ru: "Que gol!", en: "Quel but !" },
        { en: "On dirait que Pipoca est devenu un vrai supporter." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Florianópolis completa!", en: "Florianópolis terminée !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Caio fait un signe d'adieu.",
      lines: [
        { ru: "Tchau, Caio! Tchau, praia!", en: "Au revoir, Caio ! Au revoir, la plage !" },
        { ru: "Próxima parada: Foz do Iguaçu!", en: "Prochain arrêt : Foz do Iguaçu !" },
      ],
    },
    {
      image: p("plane"),
      a11y: "Un petit avion vole au-dessus de forêts vertes et de rivières.",
      lines: [{ ru: "Florianópolis → Foz do Iguaçu", en: "Florianópolis → Foz do Iguaçu" }],
    },
    {
      image: pic("pt/foz/arrival"),
      a11y:
        "Murzik et Bia sur une plate-forme d'observation ; devant eux, des dizaines d'immenses cascades dans la jungle, un arc-en-ciel au-dessus de l'eau.",
      lines: [
        { ru: "Olá, Foz do Iguaçu!", en: "Bonjour, Foz do Iguaçu !" },
        { ru: "Que barulho!", en: "Quel vacarme !" },
      ],
    },
  ],
};

export const ptFloripaFr = {
  id: "pt-floripa",
  name: "Florianópolis",
  namePt: "Florianópolis",
  lessons: [fl1, fl2, fl3, fl4, fl5, fl6, fl7],
  story,
};
