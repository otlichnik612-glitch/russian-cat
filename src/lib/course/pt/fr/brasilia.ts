import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, choice, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Бразилиа · «Работа и время» · Кузен Бии Рафаэл, вечно спешащий. Профессии, который час, во сколько, дни недели, распорядок дня, город-самолёт. Пипока выучил «Estou atrasado!». */

const p = (name: string) => pic(`pt/brasilia/${name}`);
const RAFAEL = "Rafael";

const br1: Lesson = {
  id: "pt-a1-brasilia-1",
  level: "A1",
  cityId: "pt-brasilia",
  number: 1,
  title: "O que você faz? — Qu'est-ce que tu fais dans la vie ?",
  minutes: 7,
  goals: [
    "Demander le métier de quelqu'un",
    "Nommer des métiers",
    "Dire où tu travailles",
  ],
  vocabNote:
    "Les métiers changent selon le genre : professor — professora, médico — médica. Mais jornalista, estudante, motorista restent identiques pour tous — comme « journaliste » en français !",
  vocab: [
    v("ptbr1-1", "O que você faz?", "Qu'est-ce que tu fais dans la vie ?",
      "Murzik regarde avec curiosité un jeune homme en chemise et cravate.",
      p("l1-1")),
    v("ptbr1-2", "Eu sou professor.", "Je suis professeur.",
      "Un professeur avec une craie au tableau noir.",
      p("l1-2")),
    v("ptbr1-3", "Ela é médica.", "Elle est médecin.",
      "Une femme médecin en blouse blanche, avec un stéthoscope.",
      p("l1-3")),
    v("ptbr1-4", "Ele é engenheiro.", "Il est ingénieur.",
      "Un ingénieur en casque étudie des plans.",
      p("l1-4")),
    v("ptbr1-5", "Eu trabalho num escritório.", "Je travaille dans un bureau.",
      "Rafael devant son ordinateur dans un grand bureau.",
      p("l1-5")),
    v("ptbr1-6", "Eu quero ser jornalista.", "Je veux être journaliste.",
      "Bia avec un micro et un carnet.",
      p("l1-6")),
    v("ptbr1-7", "Você gosta do seu trabalho?", "Tu aimes ton travail ?",
      "Murzik tend un micro imaginaire à Rafael.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Le cousin Rafael",
    note:
      "Primo — « cousin ». Funcionário público — « fonctionnaire ». Muito trabalho — « beaucoup de travail ».",
    lines: [
      line("bia", "Murzik, este é o meu primo, o Rafael.", "Murzik, voici mon cousin, Rafael."),
      line("murzik", "Oi, Rafael! O que você faz?", "Salut, Rafael ! Qu'est-ce que tu fais dans la vie ?"),
      line("rafael", "Eu sou funcionário público. Eu trabalho num escritório, num ministério.", "Je suis fonctionnaire. Je travaille dans un bureau, dans un ministère."),
      line("murzik", "Você gosta do seu trabalho?", "Tu aimes ton travail ?"),
      line("rafael", "Gosto, mas é muito trabalho! E a minha mãe é médica, o meu pai é engenheiro…", "Oui, mais il y a beaucoup de travail ! Et ma mère est médecin, mon père est ingénieur…"),
      line("bia", "E eu quero ser jornalista!", "Et moi, je veux être journaliste !"),
      line("rafael", "Eu sei, prima! Você fala muito!", "Je sais, cousine ! Tu parles beaucoup !"),
    ],
    gist: choice("ptbr1-d1", "Où travaille Rafael ?", [
      ["Dans un bureau, dans un ministère.", true],
      ["Dans un hôpital.", false],
      ["Dans une école.", false],
    ]),
  },
  grammar: [
    g(
      "Les métiers : professor, professora",
      [
        "On parle des métiers avec ser, sans article : Eu sou professor, Ela é médica. Exactement comme en français : « je suis professeur », « elle est médecin » — pas de « un/une » ! La forme féminine finit d'habitude en -a : professora, médica, engenheira.",
        "« Devenir » se dit aussi avec ser : Eu quero ser jornalista. — « Je veux être journaliste. »",
      ],
      [
        ["Ele é professor. Ela é professora.", "Il est professeur. Elle est professeure."],
        ["Eu sou jornalista.", "Je suis journaliste."],
      ],
    ),
  ],
  tasks: [
    choice("ptbr1-t1", "Comment dire « Elle est médecin » ?", [
      ["Ela é médica.", true],
      ["Ela é uma médico.", false],
      ["Ela está médica.", false],
    ], { skill: "grammar" }),
    listen("ptbr1-t2", "Écoute. Quel est le métier de cette personne ?", "Eu sou engenheiro.", [
      ["Ingénieur.", true],
      ["Professeur.", false],
      ["Médecin.", false],
    ]),
    match("ptbr1-t3", PAIRS, [
      ["o professor", "le professeur"],
      ["a médica", "la médecin"],
      ["o engenheiro", "l'ingénieur"],
      ["o escritório", "le bureau"],
    ], { skill: "words" }),
    spell("ptbr1-t4", "Assemble le mot « travail ».", "trabalho"),
    speak("ptbr1-t5", "O que você faz?", "Eu sou professor. Eu trabalho numa escola.", "Je suis professeur. Je travaille dans une école. (Parle de ton travail.)", {
      help: "Dis à voix haute ce que tu fais dans la vie. Une femme dira professora.",
    }),
    choice("ptbr1-t6", "Comment dire « Il a sauvé Zeca ! » ?", [
      ["Ele salvou o Zeca!", true],
      ["Ele salva Zeca ontem!", false],
      ["Ele é salvou o Zeca!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "badge",
    itemName: "Badge de visiteur",
    itemNameRu: "Crachá",
    ru: "Oba! Um crachá!",
    en: "Hourra ! Un badge !",
    a11y: "Un badge avec cordon bleu et la photo de Murzik, posé sur le bureau.",
    image: p("badge"),
    steps: [
      "Rafael apporte un badge de visiteur à Murzik.",
      "Avec la photo de Murzik dessus !",
      "« Agora você é funcionário! » — « Maintenant, tu fais partie du personnel ! »",
      "Le badge est posé sur le bureau.",
    ],
    bridge: "Rafael regarde sans cesse sa montre. « Que horas são? »",
  },
};

const br2: Lesson = {
  id: "pt-a1-brasilia-2",
  level: "A1",
  cityId: "pt-brasilia",
  number: 2,
  title: "Que horas são? — Quelle heure est-il ?",
  minutes: 7,
  goals: [
    "Demander l'heure",
    "Dire l'heure : une heure, deux heures, et demie",
    "Dire « il est déjà tard »",
  ],
  vocabNote:
    "Meia — « demi » : três e meia — « trois heures et demie ». Meio-dia — « midi », meia-noite — « minuit ». Presque comme en français !",
  vocab: [
    v("ptbr2-1", "Que horas são?", "Quelle heure est-il ?",
      "Murzik montre son poignet nu.",
      p("l2-1")),
    v("ptbr2-2", "É uma hora.", "Il est une heure.",
      "Une horloge indique une heure.",
      p("l2-2")),
    v("ptbr2-3", "São duas horas.", "Il est deux heures.",
      "Une horloge indique deux heures.",
      p("l2-3")),
    v("ptbr2-4", "São três e meia.", "Il est trois heures et demie.",
      "Une horloge indique trois heures et demie.",
      p("l2-4")),
    v("ptbr2-5", "meio-dia", "midi",
      "Le soleil au zénith ; l'ombre de Murzik est minuscule.",
      p("l2-5")),
    v("ptbr2-6", "meia-noite", "minuit",
      "Un ciel de nuit et une horloge sur douze.",
      p("l2-6")),
    v("ptbr2-7", "Já é tarde!", "Il est déjà tard !",
      "Rafael attrape sa mallette, paniqué.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Rafael, l'éternel pressé",
    note:
      "Reunião — « réunion ». Ainda — « encore ». Calma! — « Du calme ! »",
    lines: [
      line("rafael", "Bia, que horas são?", "Bia, quelle heure est-il ?"),
      line("bia", "São duas horas.", "Il est deux heures."),
      line("rafael", "Duas? Eu tenho uma reunião às três!", "Deux ? J'ai une réunion à trois heures !"),
      line("murzik", "Calma! Ainda é cedo.", "Du calme ! Il est encore tôt."),
      line("rafael", "E agora? Que horas são?", "Et maintenant ? Quelle heure est-il ?"),
      line("bia", "Rafael! São duas e cinco!", "Rafael ! Il est deux heures cinq !"),
      line("rafael", "Já é tarde! Tchau!", "Il est déjà tard ! Salut !"),
    ],
    gist: choice("ptbr2-d1", "À quelle heure est la réunion de Rafael ?", [
      ["À trois heures.", true],
      ["À deux heures.", false],
      ["À midi.", false],
    ]),
  },
  grammar: [
    g(
      "Quelle heure : é uma hora, são duas horas",
      [
        "Une heure — é uma hora (singulier). À partir de deux — são (pluriel) : são duas horas, são cinco horas. Le français fait pareil : « il est une heure », « il est deux heures » !",
        "Les minutes s'ajoutent avec e (« et ») : duas e cinco — « deux heures cinq », três e meia — « trois heures et demie », quatro e quinze — « quatre heures quinze ».",
      ],
      [
        ["São dez e meia.", "Il est dix heures et demie."],
        ["É meio-dia.", "Il est midi."],
      ],
    ),
  ],
  tasks: [
    choice("ptbr2-t1", "Comment dire « Il est deux heures » ?", [
      ["São duas horas.", true],
      ["É duas horas.", false],
      ["São dois horas.", false],
    ], { skill: "grammar" }),
    listen("ptbr2-t2", "Écoute. Quelle heure est-il ?", "São três e meia.", [
      ["3:30", true],
      ["3:00", false],
      ["13:00", false],
    ]),
    match("ptbr2-t3", PAIRS, [
      ["meio-dia", "12:00"],
      ["uma hora", "1:00"],
      ["duas e meia", "2:30"],
      ["quatro e quinze", "4:15"],
    ], { skill: "words" }),
    missing("ptbr2-t4", "Quelle lettre manque-t-il ? (« heure »)", "", "ora", "h", ["h", "o", "g"]),
    speak("ptbr2-t5", "Que horas são agora?", "Agora são dez horas.", "Il est dix heures. (Dis ton heure à toi.)", {
      help: "Dis à voix haute quelle heure il est chez toi.",
    }),
    choice("ptbr2-t6", "Comment demander « Qu'est-ce que tu fais dans la vie ? »", [
      ["O que você faz?", true],
      ["Quem você é?", false],
      ["Onde você mora?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "clock",
    itemName: "Horloge murale",
    itemNameRu: "Relógio de parede",
    ru: "Oba! Um relógio de parede!",
    en: "Hourra ! Une horloge murale !",
    a11y: "Une horloge ronde en forme d'avion, accrochée au mur.",
    image: p("clock"),
    steps: [
      "Le soir, Rafael apporte une horloge à Murzik.",
      "Elle a la forme d'un avion — comme Brasília !",
      "« Para você nunca se atrasar! » — « Pour que tu ne sois jamais en retard ! »",
      "L'horloge est accrochée au-dessus du lit. Tic-tac.",
    ],
    bridge: "Murzik se demande : à quoi ressemble la journée de Rafael ?",
  },
};

const br3: Lesson = {
  id: "pt-a1-brasilia-3",
  level: "A1",
  cityId: "pt-brasilia",
  number: 3,
  title: "A que horas? — À quelle heure ?",
  minutes: 7,
  goals: [
    "Demander à quelle heure quelque chose se passe",
    "Raconter ta journée, heure par heure",
    "Dire « à six heures », « à midi »",
  ],
  vocabNote:
    "Às — « à » devant une heure : às seis — « à six heures ». C'est a + as, comme « à + les » ! Et « à une heure », « à midi » — à uma, ao meio-dia (ao = a + o, comme « au »).",
  vocab: [
    v("ptbr3-1", "A que horas você acorda?", "À quelle heure tu te réveilles ?",
      "Murzik interviewe Rafael, carnet en patte.",
      p("l3-1")),
    v("ptbr3-2", "Eu acordo às seis.", "Je me réveille à six heures.",
      "Le réveil sonne ; dehors, il fait encore nuit.",
      p("l3-2")),
    v("ptbr3-3", "Eu almoço ao meio-dia.", "Je déjeune à midi.",
      "Rafael mange du riz et des haricots à son bureau.",
      p("l3-3")),
    v("ptbr3-4", "A reunião é às nove.", "La réunion est à neuf heures.",
      "Des gens en costume assis autour d'une longue table.",
      p("l3-4")),
    v("ptbr3-5", "Eu saio do trabalho às seis.", "Je sors du travail à six heures.",
      "Rafael sort du bâtiment du ministère au coucher du soleil.",
      p("l3-5")),
    v("ptbr3-6", "Eu janto às oito.", "Je dîne à huit heures.",
      "Le dîner sur la table ; l'horloge indique huit heures.",
      p("l3-6")),
    v("ptbr3-7", "Eu durmo às onze.", "Je me couche à onze heures.",
      "Rafael dort en serrant sa mallette.",
      p("l3-7")),
  ],
  dialogue: {
    title: "L'interview de Rafael",
    note:
      "Tão cedo — « si tôt ». Por isso — « c'est pour ça ».",
    lines: [
      line("murzik", "Rafael, a que horas você acorda?", "Rafael, à quelle heure tu te réveilles ?"),
      line("rafael", "Eu acordo às seis. A reunião é às nove.", "Je me réveille à six heures. La réunion est à neuf heures."),
      line("murzik", "Às seis? Tão cedo! E a que horas você almoça?", "À six heures ? Si tôt ! Et à quelle heure tu déjeunes ?"),
      line("rafael", "Eu almoço ao meio-dia. E eu saio do trabalho às seis.", "Je déjeune à midi. Et je sors du travail à six heures."),
      line("bia", "E você janta a que horas?", "Et tu dînes à quelle heure ?"),
      line("rafael", "Eu janto às oito e durmo às onze.", "Je dîne à huit heures et je me couche à onze heures."),
      line("murzik", "Por isso você está sempre cansado!", "C'est pour ça que tu es toujours fatigué !"),
    ],
    gist: choice("ptbr3-d1", "À quelle heure Rafael se réveille-t-il ?", [
      ["À six heures.", true],
      ["À neuf heures.", false],
      ["À onze heures.", false],
    ]),
  },
  grammar: [
    g(
      "À quelle heure : às, à uma, ao meio-dia",
      [
        "« À quelle heure ? » — A que horas? La réponse : às + l'heure : às seis, às oito e meia. Pour une heure — à uma ; pour midi et minuit — ao meio-dia, à meia-noite. C'est la même logique qu'en français : « à + les » = aux, « à + le » = au.",
        "Saio — « je sors » (de sair) ; durmo — « je dors » (de dormir). La forme avec « je » de ces verbes est un peu spéciale : retiens-les au fur et à mesure.",
      ],
      [
        ["O ônibus sai às sete.", "Le bus part à sept heures."],
        ["Eu almoço à uma.", "Je déjeune à une heure."],
      ],
    ),
  ],
  tasks: [
    choice("ptbr3-t1", "Comment dire « à huit heures » ?", [
      ["às oito", true],
      ["a oito", false],
      ["em oito", false],
    ], { skill: "grammar" }),
    listen("ptbr3-t2", "Écoute. À quelle heure est le dîner ?", "Eu janto às oito.", [
      ["À huit heures.", true],
      ["À six heures.", false],
      ["À midi.", false],
    ]),
    match("ptbr3-t3", PAIRS, [
      ["acordar", "se réveiller"],
      ["almoçar", "déjeuner"],
      ["jantar", "dîner"],
      ["dormir", "dormir"],
    ], { skill: "words" }),
    spell("ptbr3-t4", "Assemble le mot « tôt ».", "cedo"),
    speak("ptbr3-t5", "A que horas você acorda?", "Eu acordo às sete.", "Je me réveille à sept heures. (Dis ton heure à toi.)", {
      help: "Réponds à voix haute : à quelle heure tu te réveilles.",
    }),
    choice("ptbr3-t6", "Comment dire « Il est déjà tard ! » ?", [
      ["Já é tarde!", true],
      ["Boa tarde!", false],
      ["É uma hora.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "planner",
    itemName: "Agenda",
    itemNameRu: "Agenda",
    ru: "Oba! Uma agenda!",
    en: "Hourra ! Un agenda !",
    a11y: "Un petit agenda bleu ; à l'intérieur, un emploi du temps avec des heures et des petits dessins.",
    image: p("planner"),
    steps: [
      "Rafael offre un agenda à Murzik.",
      "Murzik écrit : « Acordar às oito. Brincar. Dormir. »",
      "Rafael rit : « Que vida boa! » — « Quelle belle vie ! »",
      "L'agenda est posé sur le bureau.",
    ],
    bridge: "Murzik demande : « Et le week-end, tu en as ? »",
  },
};

const br4: Lesson = {
  id: "pt-a1-brasilia-4",
  level: "A1",
  cityId: "pt-brasilia",
  number: 4,
  title: "Os dias da semana — Les jours de la semaine",
  minutes: 7,
  goals: [
    "Nommer les jours de la semaine",
    "Demander quel jour on est",
    "Dire « le week-end », « du lundi au vendredi »",
  ],
  vocabNote:
    "En portugais, les jours sont numérotés : segunda-feira (« deuxième jour ») — lundi, terça — mardi, quarta — mercredi, quinta — jeudi, sexta — vendredi. Seuls sábado et domingo ont un vrai nom. À l'oral, on laisse tomber -feira : segunda, terça…",
  vocab: [
    v("ptbr4-1", "Que dia é hoje?", "Quel jour on est aujourd'hui ?",
      "Murzik regarde un grand calendrier mural.",
      p("l4-1")),
    v("ptbr4-2", "Hoje é sexta-feira.", "Aujourd'hui, c'est vendredi.",
      "Le vendredi est entouré sur le calendrier.",
      p("l4-2")),
    v("ptbr4-3", "segunda, terça, quarta", "lundi, mardi, mercredi",
      "Trois pages de calendrier : lundi, mardi, mercredi.",
      p("l4-3")),
    v("ptbr4-4", "quinta e sexta", "jeudi et vendredi",
      "Deux pages de calendrier : jeudi et vendredi.",
      p("l4-4")),
    v("ptbr4-5", "sábado e domingo", "samedi et dimanche",
      "Un week-end ensoleillé : un hamac et un ballon.",
      p("l4-5")),
    v("ptbr4-6", "de segunda a sexta", "du lundi au vendredi",
      "Cinq jours ouvrés grisés sur le calendrier.",
      p("l4-6")),
    v("ptbr4-7", "no fim de semana", "le week-end",
      "Rafael en short et casquette fait du vélo.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Enfin le week-end",
    note:
      "Amanhã — « demain ». Andar de bicicleta — « faire du vélo ».",
    lines: [
      line("murzik", "Rafael, que dia é hoje?", "Rafael, quel jour on est aujourd'hui ?"),
      line("rafael", "Hoje é sexta-feira! Amanhã é sábado!", "Aujourd'hui, c'est vendredi ! Demain, samedi !"),
      line("murzik", "Você trabalha no sábado?", "Tu travailles samedi ?"),
      line("rafael", "Não! Eu trabalho de segunda a sexta.", "Non ! Je travaille du lundi au vendredi."),
      line("bia", "E o que você faz no fim de semana?", "Et qu'est-ce que tu fais le week-end ?"),
      line("rafael", "No sábado eu ando de bicicleta. E no domingo… eu durmo!", "Samedi, je fais du vélo. Et dimanche… je dors !"),
    ],
    gist: choice("ptbr4-d1", "Que fait Rafael le dimanche ?", [
      ["Il dort.", true],
      ["Il travaille.", false],
      ["Il fait du vélo.", false],
    ]),
  },
  grammar: [
    g(
      "Lundi, samedi : na segunda, no sábado",
      [
        "« Lundi » — na segunda (féminin, comme « la ») ; « samedi » — no sábado (masculin, comme « le »). Pour quelque chose de régulier — « le lundi, tous les lundis » — às segundas, aos sábados.",
        "De… a… — « de… à… » : de segunda a sexta (« du lundi au vendredi »), de manhã à noite (« du matin au soir »). Comme en français !",
      ],
      [
        ["Na quarta eu vou ao cinema.", "Mercredi, je vais au cinéma."],
        ["Eu não trabalho no domingo.", "Dimanche, je ne travaille pas."],
      ],
    ),
  ],
  tasks: [
    choice("ptbr4-t1", "Comment dire « samedi » (ce jour-là) ?", [
      ["no sábado", true],
      ["na sábado", false],
      ["em sábado o", false],
    ], { skill: "grammar" }),
    listen("ptbr4-t2", "Écoute. Quel jour on est aujourd'hui ?", "Hoje é quarta-feira.", [
      ["Mercredi.", true],
      ["Jeudi.", false],
      ["Lundi.", false],
    ]),
    match("ptbr4-t3", PAIRS, [
      ["segunda-feira", "lundi"],
      ["quarta-feira", "mercredi"],
      ["sexta-feira", "vendredi"],
      ["domingo", "dimanche"],
    ], { skill: "words" }),
    missing("ptbr4-t4", "Quelle lettre manque-t-il ? (« samedi »)", "s", "bado", "á", ["á", "a", "â"]),
    speak("ptbr4-t5", "O que você faz no fim de semana?", "No sábado eu descanso e no domingo eu vejo os amigos.", "Samedi, je me repose, et dimanche, je vois mes amis.", {
      help: "Raconte à voix haute ce que tu fais le week-end.",
    }),
    choice("ptbr4-t6", "Comment demander « À quelle heure tu te réveilles ? »", [
      ["A que horas você acorda?", true],
      ["Que horas são?", false],
      ["Que dia é hoje?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "calendar",
    itemName: "Calendrier",
    itemNameRu: "Calendário",
    ru: "Oba! Um calendário!",
    en: "Hourra ! Un calendrier !",
    a11y: "Un calendrier mural avec des photos du Brésil ; un jour est entouré d'un cœur rouge.",
    image: p("calendar"),
    steps: [
      "Bia accroche un calendrier dans la chambre de Murzik.",
      "Un jour est entouré d'un cœur rouge.",
      "« O aniversário da vovó! » — « L'anniversaire de mamie ! »",
      "Il reste de moins en moins de pages avant ce jour.",
    ],
    bridge: "Samedi matin, Murzik note comment se passe sa journée.",
  },
};

const br5: Lesson = {
  id: "pt-a1-brasilia-5",
  level: "A1",
  cityId: "pt-brasilia",
  number: 5,
  title: "A rotina — La journée type",
  minutes: 7,
  goals: [
    "Raconter ta matinée",
    "Enchaîner le récit : d'abord, ensuite",
    "Dire « quelle course ! »",
  ],
  vocabNote:
    "Tomar banho — « prendre une douche », littéralement « prendre un bain ». Beaucoup de Brésiliens prennent deux ou trois douches par jour — il fait chaud !",
  vocab: [
    v("ptbr5-1", "Primeiro eu tomo banho.", "D'abord, je prends une douche.",
      "Murzik sous la douche, couvert de mousse, avec un canard en plastique.",
      p("l5-1")),
    v("ptbr5-2", "Eu escovo os dentes.", "Je me brosse les dents.",
      "Murzik se brosse les dents avec une petite brosse.",
      p("l5-2")),
    v("ptbr5-3", "Eu me visto.", "Je m'habille.",
      "Murzik enfile un T-shirt par la tête.",
      p("l5-3")),
    v("ptbr5-4", "Depois eu tomo café.", "Ensuite, je prends mon petit-déjeuner.",
      "Murzik mange du pain et boit un café au lait.",
      p("l5-4")),
    v("ptbr5-5", "Eu pego o ônibus.", "J'attrape le bus.",
      "Rafael court après un bus qui démarre.",
      p("l5-5")),
    v("ptbr5-6", "No fim, eu descanso.", "Et à la fin, je me repose.",
      "Murzik allongé sur le canapé avec un livre.",
      p("l5-6")),
    v("ptbr5-7", "Que correria!", "Quelle course !",
      "Rafael court avec sa mallette, un sandwich et son téléphone à la fois.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Le matin de Murzik et le matin de Rafael",
    note:
      "Com calma — « sans se presser ». Tudo junto — « tout en même temps ».",
    lines: [
      line("bia", "Murzik, como é a sua manhã?", "Murzik, comment se passe ton matin ?"),
      line("murzik", "Primeiro eu tomo banho. Depois eu escovo os dentes e me visto.", "D'abord, je prends une douche. Ensuite, je me brosse les dents et je m'habille."),
      line("murzik", "Depois eu tomo café, com calma.", "Ensuite, je prends mon petit-déjeuner, sans me presser."),
      line("bia", "E o Rafael?", "Et Rafael ?"),
      line("rafael", "Eu? Eu acordo, tomo banho, tomo café e pego o ônibus… tudo junto!", "Moi ? Je me réveille, je prends une douche, je déjeune et j'attrape le bus… tout en même temps !"),
      line("murzik", "Que correria!", "Quelle course !"),
    ],
    gist: choice("ptbr5-d1", "En quoi le matin de Rafael diffère-t-il de celui de Murzik ?", [
      ["Rafael fait tout en courant.", true],
      ["Rafael ne déjeune pas.", false],
      ["Rafael se lève tard.", false],
    ]),
  },
  grammar: [
    g(
      "D'abord, ensuite, à la fin",
      [
        "Pour raconter dans l'ordre : primeiro — « d'abord », depois — « ensuite », então — « alors, et là », no fim — « à la fin ».",
        "Eu me visto — « je m'habille » : le petit me fonctionne exactement comme le « m' » français ! Ces verbes pronominaux reviendront : me chamo — « je m'appelle ».",
      ],
      [
        ["Primeiro eu trabalho, depois eu janto.", "D'abord, je travaille, ensuite je dîne."],
        ["Eu me chamo Murzik.", "Je m'appelle Murzik."],
      ],
    ),
  ],
  tasks: [
    choice("ptbr5-t1", "Comment dire « Je m'habille » ?", [
      ["Eu me visto.", true],
      ["Eu visto me.", false],
      ["Eu sou visto.", false],
    ], { skill: "grammar" }),
    listen("ptbr5-t2", "Écoute. Que fait la personne d'abord ?", "Primeiro eu tomo banho, depois eu tomo café.", [
      ["Elle prend une douche.", true],
      ["Elle déjeune.", false],
      ["Elle prend le bus.", false],
    ]),
    match("ptbr5-t3", PAIRS, [
      ["primeiro", "d'abord"],
      ["depois", "ensuite"],
      ["no fim", "à la fin"],
      ["tomar banho", "prendre une douche"],
    ], { skill: "words" }),
    spell("ptbr5-t4", "Assemble le mot « ensuite ».", "depois"),
    speak("ptbr5-t5", "Como é a sua manhã?", "Primeiro eu tomo banho. Depois eu tomo café.", "D'abord, je prends une douche. Ensuite, je déjeune.", {
      help: "Raconte à voix haute ta matinée, étape par étape.",
    }),
    choice("ptbr5-t6", "Comment dire « le week-end » ?", [
      ["no fim de semana", true],
      ["de segunda a sexta", false],
      ["na sexta-feira", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "toothbrush",
    itemName: "Brosse à dents",
    itemNameRu: "Escova de dentes",
    ru: "Oba! Uma escova de dentes!",
    en: "Hourra ! Une brosse à dents !",
    a11y: "Dans la salle de bain, une petite brosse à dents avec un manche en forme de perroquet, dans un gobelet vert.",
    image: p("toothbrush"),
    steps: [
      "Bia achète une nouvelle brosse à dents pour Murzik.",
      "Son manche a la forme d'un perroquet.",
      "« Para lembrar do Pipoca! » — « Pour ne pas oublier Pipoca ! »",
      "La brosse attend dans son gobelet, dans la salle de bain.",
    ],
    bridge: "L'après-midi, Rafael leur fait visiter la ville. Vue d'en haut, elle ressemble à un avion !",
  },
};

const br6: Lesson = {
  id: "pt-a1-brasilia-6",
  level: "A1",
  cityId: "pt-brasilia",
  number: 6,
  title: "A cidade-avião — La ville-avion",
  minutes: 7,
  goals: [
    "Décrire une ville hors du commun",
    "Comparer : plus grand, plus petit",
    "Dire à quoi ça ressemble",
  ],
  vocabNote:
    "Brasília a été construite de toutes pièces en quatre ans à peine, entre 1956 et 1960. Vue d'en haut, la ville ressemble à un avion — ou à un oiseau.",
  vocab: [
    v("ptbr6-1", "Brasília parece um avião.", "Brasília ressemble à un avion.",
      "Une carte de Brasília vue d'en haut : une ville en forme d'avion.",
      p("l6-1")),
    v("ptbr6-2", "o Congresso", "le Congrès",
      "Deux hautes tours blanches et deux coupoles, l'une vers le haut, l'autre vers le bas.",
      p("l6-2")),
    v("ptbr6-3", "a catedral", "la cathédrale",
      "Une cathédrale comme une couronne de colonnes blanches et courbes.",
      p("l6-3")),
    v("ptbr6-4", "É muito moderno.", "C'est très moderne.",
      "Murzik contemple les bâtiments blancs avec admiration.",
      p("l6-4")),
    v("ptbr6-5", "Quem fez isso?", "Qui a construit ça ?",
      "Murzik montre un bâtiment étonnant.",
      p("l6-5")),
    v("ptbr6-6", "Brasília é mais nova do que o Rio.", "Brasília est plus récente que Rio.",
      "Deux images côte à côte : le vieux Rio et la nouvelle Brasília.",
      p("l6-6")),
    v("ptbr6-7", "O Rio é maior.", "Rio est plus grande.",
      "Un grand et un petit cercle sur une carte.",
      p("l6-7")),
  ],
  dialogue: {
    title: "La visite de la capitale",
    note:
      "Asas — « les ailes ». O arquiteto — « l'architecte ». Menos — « moins ».",
    lines: [
      line("rafael", "Olha o mapa: Brasília parece um avião! Essas são as asas.", "Regardez la carte : Brasília ressemble à un avion ! Voilà les ailes."),
      line("murzik", "Que legal! E aquele prédio é o Congresso?", "Trop bien ! Et ce bâtiment, c'est le Congrès ?"),
      line("rafael", "É! E ali é a catedral. Tudo é muito moderno.", "Oui ! Et là-bas, la cathédrale. Tout est très moderne."),
      line("murzik", "Quem fez isso?", "Qui a construit tout ça ?"),
      line("rafael", "Um arquiteto famoso, Oscar Niemeyer.", "Un architecte célèbre, Oscar Niemeyer."),
      line("bia", "Brasília é mais nova do que o Rio. Mas o Rio é maior!", "Brasília est plus récente que Rio. Mais Rio est plus grande !"),
      line("rafael", "E Brasília tem menos praia!", "Et Brasília a moins de plages !"),
    ],
    gist: choice("ptbr6-d1", "À quoi ressemble Brasília vue d'en haut ?", [
      ["À un avion.", true],
      ["À un bateau.", false],
      ["À une étoile.", false],
    ]),
  },
  grammar: [
    g(
      "Comparer : mais… do que",
      [
        "« Plus… que » — mais… do que : Brasília é mais nova do que o Rio. « Moins… que » — menos… do que. Exactement comme « plus… que » en français ! Et l'adjectif s'accorde toujours : Brasília é mais nova (a cidade).",
        "Quelques mots spéciaux : maior — « plus grand », menor — « plus petit », melhor — « meilleur ». Parecer — « ressembler » : parece um avião. Attention, faux ami : « parecer » ne veut pas dire « paraître » au sens de « sembler », mais presque !",
      ],
      [
        ["O Rio é mais antigo do que Brasília.", "Rio est plus ancienne que Brasília."],
        ["O meu quarto é menor.", "Ma chambre est plus petite."],
      ],
    ),
  ],
  tasks: [
    choice("ptbr6-t1", "Comment dire « Rio est plus grande » ?", [
      ["O Rio é maior.", true],
      ["O Rio é mais grande.", false],
      ["O Rio é grande do que.", false],
    ], { skill: "grammar" }),
    listen("ptbr6-t2", "Écoute. À quoi ressemble la ville ?", "A cidade parece um avião.", [
      ["À un avion.", true],
      ["À un oiseau.", false],
      ["À un poisson.", false],
    ]),
    match("ptbr6-t3", PAIRS, [
      ["maior", "plus grand"],
      ["menor", "plus petit"],
      ["melhor", "meilleur"],
      ["moderno", "moderne"],
    ], { skill: "words" }),
    missing("ptbr6-t4", "Quelle lettre manque-t-il ? (« avion »)", "avi", "o", "ã", ["ã", "a", "â"]),
    speak("ptbr6-t5", "A sua cidade é grande?", "A minha cidade é menor do que o Rio.", "Ma ville est plus petite que Rio. (Compare ta ville.)", {
      help: "Compare ta ville avec Rio à voix haute.",
    }),
    choice("ptbr6-t6", "Comment dire « D'abord, je prends une douche » ?", [
      ["Primeiro eu tomo banho.", true],
      ["No fim eu tomo banho.", false],
      ["Eu me visto banho.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "model",
    itemName: "Maquette du Congrès",
    itemNameRu: "Maquete do Congresso",
    ru: "Oba! Uma maquete!",
    en: "Hourra ! Une maquette !",
    a11y: "Une petite maquette blanche sur l'étagère : deux tourelles et deux coupoles.",
    image: p("model"),
    steps: [
      "La boutique de souvenirs vend des petites maquettes.",
      "Rafael achète le Congrès pour Murzik.",
      "« Agora você tem a capital no quarto! » — « Maintenant, tu as la capitale dans ta chambre ! »",
      "La maquette trône sur l'étagère.",
    ],
    bridge: "Le soir, Rafael se souvient avoir vu quelque chose de très étrange à la gare routière.",
  },
};

const br7: Lesson = {
  id: "pt-a1-brasilia-7",
  level: "A1",
  cityId: "pt-brasilia",
  number: 7,
  title: "Estou atrasado! — Je suis en retard !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Dire « cours ! », « ne sois pas en retard ! »",
    "Revoir tous les mots de Brasília",
  ],
  vocabNote:
    "Estou atrasado — « je suis en retard » (un homme) ; une femme dit estou atrasada. Contrairement au français « en retard », qui ne change pas, le portugais accorde ! Rodoviária — « gare routière ».",
  vocab: [
    v("ptbr7-1", "Estou atrasado!", "Je suis en retard !",
      "Le perroquet vert bat des ailes sur le tableau des départs.",
      p("l7-1")),
    v("ptbr7-2", "na rodoviária", "à la gare routière",
      "Une immense gare routière, des gens courent avec des sacs.",
      p("l7-2")),
    v("ptbr7-3", "toda hora", "tout le temps",
      "Rafael regarde sa montre, encore et encore.",
      p("l7-3")),
    v("ptbr7-4", "Ele imitou o Rafael!", "Il a imité Rafael !",
      "Rafael et le perroquet se prennent la tête exactement de la même façon.",
      p("l7-4")),
    v("ptbr7-5", "Eles foram para Ouro Preto.", "Ils sont partis pour Ouro Preto.",
      "Une carte : une flèche vers une vieille ville dans les collines.",
      p("l7-5")),
    v("ptbr7-6", "Corre!", "Cours !",
      "Murzik et Bia courent vers le bus avec leurs valises.",
      p("l7-6")),
    v("ptbr7-7", "Não se atrase!", "Ne sois pas en retard !",
      "Rafael remue le doigt en souriant.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce qu'a dit le perroquet",
    note:
      "Ontem — « hier ». Gritando — « en criant ». Riu — « a ri ».",
    lines: [
      line("rafael", "Ah, o papagaio! Eu vi na rodoviária, ontem.", "Ah, le perroquet ! Je l'ai vu à la gare routière, hier."),
      line("bia", "E o que ele fez?", "Et qu'est-ce qu'il a fait ?"),
      line("rafael", "Eu estava correndo, gritando: Estou atrasado! E ele repetiu: Estou atrasado! Estou atrasado!", "J'étais en train de courir en criant : « Je suis en retard ! » Et il a répété : « Je suis en retard ! Je suis en retard ! »"),
      line("murzik", "Ele imitou você! Que engraçado!", "Il t'a imité ! Trop drôle !"),
      line("rafael", "Toda a rodoviária riu. Eles foram para Ouro Preto.", "Toute la gare a ri. Ils sont partis pour Ouro Preto."),
      line("bia", "O ônibus sai às oito! Que horas são?", "Le bus part à huit heures ! Quelle heure est-il ?"),
      line("rafael", "Sete e meia! Corre! Não se atrase!", "Sept heures et demie ! Courez ! Ne soyez pas en retard !"),
    ],
    gist: choice("ptbr7-d1", "Quelle phrase Pipoca a-t-il apprise à Brasília ?", [
      ["« Je suis en retard ! »", true],
      ["« Quelle heure est-il ? »", false],
      ["« Quelle course ! »", false],
    ]),
  },
  grammar: [
    g(
      "Estava correndo — « j'étais en train de courir »",
      [
        "Tu te souviens de estava olhando ? Pareil ici : eu estava correndo — « j'étais en train de courir ». Estar au passé — estava — plus la terminaison -ando / -endo : l'action en cours dans le passé, comme « être en train de » au français.",
        "Ele repetiu — « il a répété », ele imitou — « il a imité » : le passé en -iu et -ou.",
      ],
      [
        ["Eu estava dormindo.", "J'étais en train de dormir."],
        ["Nós estávamos comendo.", "Nous étions en train de manger."],
      ],
    ),
  ],
  tasks: [
    listen("ptbr7-t1", "Examen audio. Que raconte Rafael ?", "O papagaio estava na rodoviária e repetiu: Estou atrasado! A banda foi para Ouro Preto.", [
      ["Le perroquet imitait les gens à la gare routière, et le groupe est parti pour Ouro Preto.", true],
      ["Le perroquet a raté le bus.", false],
      ["Le groupe a joué au Congrès.", false],
    ]),
    choice("ptbr7-t2", "Bia est en retard. Que dit-elle ?", [
      ["Estou atrasada!", true],
      ["Estou atrasado!", false],
      ["Sou atrasada!", false],
    ], { skill: "grammar" }),
    match("ptbr7-t3", PAIRS, [
      ["Corre!", "Cours !"],
      ["toda hora", "tout le temps"],
      ["a rodoviária", "la gare routière"],
      ["Não se atrase!", "Ne sois pas en retard !"],
    ], { skill: "words" }),
    missing("ptbr7-t4", "Quelle lettre manque-t-il ? (« en retard »)", "atra", "ado", "s", ["s", "z", "ç"]),
    speak("ptbr7-t5", "O ônibus sai às oito! Corre!", "Estou atrasado! Tchau!", "Je suis en retard ! Salut !", {
      help: "Dis-le à voix haute. Une femme dira atrasada.",
    }),
    script("ptbr7-t6", "Souviens-toi de tout Brasília. Termine la conversation avec Rafael.", [
      { speaker: RAFAEL, text: "Oi! O que você faz?" },
      { speaker: YOU, answer: "Eu sou estudante.", options: ["Eu sou estudante.", "Eu estou estudante.", "São duas horas."] },
      { speaker: RAFAEL, text: "A que horas você acorda?" },
      { speaker: YOU, answer: "Eu acordo às sete.", options: ["Eu acordo às sete.", "São sete horas.", "No domingo."] },
      { speaker: RAFAEL, text: "E no fim de semana?" },
      { speaker: YOU, answer: "No sábado eu descanso.", options: ["No sábado eu descanso.", "Na sábado eu descanso.", "Que correria!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-brasilia",
    itemName: "Photo de Pipoca sur le tableau des départs",
    itemNameRu: "Foto do Pipoca na rodoviária",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y:
      "Une photo : le perroquet vert sur le tableau des départs ; en bas, les passagers avec leurs sacs rient.",
    image: p("photo"),
    steps: [
      "Rafael trouve une photo dans son téléphone.",
      "Pipoca sur le tableau, et en dessous, toute la gare qui rit !",
      "Murzik rit avec eux.",
      "Légende : « Estou atrasado! » Et hop, dans l'album.",
    ],
    bridge: "Le bus file vers le sud-est, dans les collines du Minas Gerais.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre dans l'appartement de Rafael",
    nameRu: "O quarto no apartamento do Rafael",
    image: p("home"),
    a11y:
      "Une chambre claire et bien rangée dans un immeuble posé sur pilotis. Par la fenêtre : des arbres verts et des immeubles blancs. La valise de Murzik au milieu.",
  },
  keepsakeId: "photo-brasilia",
  welcomeRu: "Olá, Brasília!",
  welcomeEn: "Bonjour, Brasília !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Une large esplanade avec des bâtiments blancs aux formes étonnantes : deux hautes tours et des coupoles. Rafael, en chemise et cravate, se presse à la rencontre de Murzik et Bia.",
  departureImage: p("departure"),
  departureA11y: "Rafael fait signe depuis le quai de la gare routière.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca sur le tableau des départs.",
      lines: [
        { en: "Huitième page de l'album : Pipoca à la gare routière." },
        { ru: "Estou atrasado!", en: "Je suis en retard !" },
        { en: "Et sur le calendrier, le cœur rouge se rapproche." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Brasília completa!", en: "Brasília terminée !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Rafael fait un signe d'adieu.",
      lines: [
        { ru: "Tchau, Rafael! Não se atrase!", en: "Au revoir, Rafael ! Ne sois pas en retard !" },
        { ru: "Próxima parada: Ouro Preto!", en: "Prochain arrêt : Ouro Preto !" },
      ],
    },
    {
      image: p("bus"),
      a11y: "Un bus de nuit roule sur une route sinueuse entre les collines.",
      lines: [{ ru: "Brasília → Ouro Preto", en: "Brasília → Ouro Preto" }],
    },
    {
      image: pic("pt/ouropreto/arrival"),
      a11y:
        "Une vieille ville sur les collines : des maisons blanches aux fenêtres colorées, des rues pavées qui montent et descendent raide, des églises à clochetons.",
      lines: [
        { ru: "Olá, Ouro Preto!", en: "Bonjour, Ouro Preto !" },
        { ru: "Quantas ladeiras!", en: "Que de ruelles en pente !" },
      ],
    },
  ],
};

export const ptBrasiliaFr = {
  id: "pt-brasilia",
  name: "Brasília",
  namePt: "Brasília",
  lessons: [br1, br2, br3, br4, br5, br6, br7],
  story,
};
