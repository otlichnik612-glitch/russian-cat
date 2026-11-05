import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Манаус · «В дороге по Амазонке» · Речной теплоход Сеу Раймунду. Билеты, гамак на палубе, встреча вод, неправильное прошедшее (fui, fiz, tive), театр Амазонас, лес. Пипока выучил «Boa viagem!». */

const p = (name: string) => pic(`pt/manaus/${name}`);
const RAIMUNDO = "Seu Raimundo";

const ma1: Lesson = {
  id: "pt-a1-manaus-1",
  level: "A1",
  cityId: "pt-manaus",
  number: 1,
  title: "A passagem — Le billet",
  minutes: 7,
  goals: [
    "Acheter un billet de bateau",
    "Demander à quelle heure est le départ",
    "Demander combien de temps dure le trajet",
  ],
  vocabNote:
    "Passagem — un billet de train, de bus, d'avion ou de bateau. Bilhete s'emploie plutôt pour le métro, ingresso pour un concert.",
  vocab: [
    v("ptma1-1", "Uma passagem para Belém, por favor.", "Un billet pour Belém, s'il vous plaît.",
      "Murzik au guichet du port fluvial.",
      p("l1-1")),
    v("ptma1-2", "Quando sai o barco?", "Quand part le bateau ?",
      "Un bateau blanc à deux ponts au quai.",
      p("l1-2")),
    v("ptma1-3", "O barco sai amanhã cedo.", "Le bateau part demain matin de bonne heure.",
      "Un horaire : un soleil qui se lève et une horloge sur six heures.",
      p("l1-3")),
    v("ptma1-4", "Quanto tempo dura a viagem?", "Combien de temps dure le voyage ?",
      "Murzik compte les jours sur ses doigts.",
      p("l1-4")),
    v("ptma1-5", "Dura cinco dias.", "Cinq jours.",
      "Un calendrier avec cinq jours marqués.",
      p("l1-5")),
    v("ptma1-6", "Ida e volta?", "Aller-retour ?",
      "Deux flèches : aller et retour.",
      p("l1-6")),
    v("ptma1-7", "Só ida.", "Aller simple.",
      "Une seule flèche qui pointe vers l'avant.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Au port fluvial",
    note:
      "Às seis — « à six heures ». Rede — « hamac » : sur les bateaux de l'Amazonie, tout le monde dort dans un hamac sur le pont.",
    lines: [
      line("bia", "Bom dia! Duas passagens para Belém, por favor.", "Bonjour ! Deux billets pour Belém, s'il vous plaît."),
      line("cashier", "Ida e volta?", "Aller-retour ?"),
      line("bia", "Só ida.", "Aller simple."),
      line("murzik", "Quando sai o barco?", "Quand part le bateau ?"),
      line("cashier", "O barco sai amanhã cedo, às seis.", "Demain matin de bonne heure, à six heures."),
      line("murzik", "E quanto tempo dura a viagem?", "Et combien de temps dure le voyage ?"),
      line("cashier", "Dura cinco dias. Vocês têm rede?", "Cinq jours. Vous avez des hamacs ?"),
      line("bia", "Cinco dias? Nossa! Mas eu adoro barco!", "Cinq jours ? Ouh là ! Mais j'adore le bateau !"),
    ],
    gist: choice("ptma1-d1", "Combien de temps dure le voyage jusqu'à Belém ?", [
      ["Cinq jours.", true],
      ["Un jour.", false],
      ["Deux heures.", false],
    ]),
  },
  grammar: [
    g(
      "Quand et combien de temps : quando, quanto tempo",
      [
        "Quando ? — « quand ? » : Quando sai o barco ? Quanto tempo ? — « combien de temps ? » : Quanto tempo dura a viagem ? La réponse : Dura cinco dias — « ça dure cinq jours ».",
        "Sai — « part », du verbe sair (tu te souviens de eu saio ?). Même chose qu'en français : « il part » prend un « t » à la troisième personne.",
      ],
      [
        ["Quando sai o ônibus?", "Quand part le bus ?"],
        ["A viagem dura duas horas.", "Le trajet dure deux heures."],
      ],
    ),
  ],
  tasks: [
    choice("ptma1-t1", "Comment demander « Combien de temps dure le voyage ? »", [
      ["Quanto tempo dura a viagem?", true],
      ["Quantos anos dura a viagem?", false],
      ["Quando dura a viagem?", false],
    ], { skill: "grammar" }),
    listen("ptma1-t2", "Écoute. Quand part le bateau ?", "O barco sai amanhã cedo.", [
      ["Demain de bonne heure.", true],
      ["Ce soir.", false],
      ["Dans une semaine.", false],
    ]),
    match("ptma1-t3", PAIRS, [
      ["a passagem", "le billet"],
      ["ida e volta", "l'aller-retour"],
      ["só ida", "l'aller simple"],
      ["a viagem", "le voyage"],
    ], { skill: "words" }),
    spell("ptma1-t4", "Reconstitue le mot « voyage ».", "viagem"),
    speak("ptma1-t5", "Bom dia! Para onde?", "Uma passagem para Belém, por favor. Só ida.", "Un billet pour Belém, s'il vous plaît. Aller simple.", {
      help: "Achète un billet à voix haute.",
    }),
    choice("ptma1-t6", "Comment dire « Prends soin de toi ! » ?", [
      ["Cuide-se!", true],
      ["Melhoras!", false],
      ["Descanse!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "compass",
    itemName: "Boussole",
    itemNameRu: "Bússola",
    ru: "Oba! Uma bússola!",
    en: "Hourra ! Une boussole !",
    a11y: "Une vieille boussole en laiton avec un couvercle à charnière est posée sur la petite table.",
    image: p("compass"),
    steps: [
      "Au port, un vieil homme vend des bibelots de marin.",
      "Murzik achète une vieille boussole.",
      "« Para não se perder no rio ! » — « Pour ne pas se perdre sur le fleuve ! »",
      "L'aiguille pointe vers le nord. Et eux vont vers l'est, en descendant le fleuve jusqu'à l'océan !",
    ],
    bridge: "À l'aube, ils montent à bord du bateau. Le pont est plein de hamacs.",
  },
};

const ma2: Lesson = {
  id: "pt-a1-manaus-2",
  level: "A1",
  cityId: "pt-manaus",
  number: 2,
  title: "No barco — Sur le bateau",
  minutes: 7,
  goals: [
    "S'installer sur le pont",
    "Dire « à côté de », « entre »",
    "Faire connaissance avec les voisins",
  ],
  vocabNote:
    "Convés — « le pont ». Pendurar — « accrocher, suspendre » : Onde eu penduro a rede ? — « Où est-ce que j'accroche mon hamac ? »",
  vocab: [
    v("ptma2-1", "Onde eu penduro a rede?", "Où est-ce que j'accroche mon hamac ?",
      "Murzik tient un hamac roulé sur un pont plein de hamacs.",
      p("l2-1")),
    v("ptma2-2", "Pode pendurar aqui.", "Tu peux l'accrocher ici.",
      "Un vieux capitaine avec une casquette désigne une place libre.",
      p("l2-2")),
    v("ptma2-3", "ao lado da Bia", "à côté de Bia",
      "Deux hamacs côte à côte : celui de Murzik et celui de Bia.",
      p("l2-3")),
    v("ptma2-4", "entre duas famílias", "entre deux familles",
      "Les hamacs de Murzik et de Bia entre deux grandes familles.",
      p("l2-4")),
    v("ptma2-5", "Bom dia, vizinho!", "Bonjour, voisin !",
      "Un garçon du hamac voisin fait signe à Murzik.",
      p("l2-5")),
    v("ptma2-6", "Que vento bom!", "Quelle bonne brise !",
      "Murzik se tient près du bastingage, la brise ébouriffe ses moustaches.",
      p("l2-6")),
    v("ptma2-7", "O barco está partindo!", "Le bateau part !",
      "Le bateau s'éloigne du quai, la sirène retentit.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Le capitaine Raimundo",
    note:
      "Capitão — « capitaine ». Todo mundo — « tout le monde ». Bem-vindos — « bienvenue ».",
    lines: [
      line("raimundo", "Bem-vindos ao meu barco! Eu sou o Raimundo, o capitão.", "Bienvenue à bord de mon bateau ! Je suis Raimundo, le capitaine."),
      line("murzik", "Capitão, onde eu penduro a rede?", "Capitaine, où est-ce que j'accroche mon hamac ?"),
      line("raimundo", "Pode pendurar aqui, ao lado da Bia. Entre duas famílias.", "Tu peux l'accrocher ici, à côté de Bia. Entre deux familles."),
      line("joao", "Bom dia, vizinho!", "Bonjour, voisin !"),
      line("murzik", "Bom dia! Que vento bom!", "Bonjour ! Quelle bonne brise !"),
      line("raimundo", "Atenção, todo mundo! O barco está partindo!", "Attention, tout le monde ! Le bateau part !"),
    ],
    gist: choice("ptma2-d1", "Où Murzik accroche-t-il son hamac ?", [
      ["À côté de Bia, entre deux familles.", true],
      ["Dans la cabine du capitaine.", false],
      ["Sur la rive.", false],
    ]),
  },
  grammar: [
    g(
      "Où : ao lado de, entre, na frente de, atrás de",
      [
        "Ao lado de — « à côté de » : ao lado da Bia (de + a). Entre — « entre » : entre duas famílias. Na frente de — « devant », atrás de — « derrière ».",
        "N'oublie pas les contractions, comme en français « du » et « de la » : ao lado do capitão (de + o), atrás da cozinha (de + a).",
      ],
      [
        ["O banheiro é atrás da cozinha.", "Les toilettes sont derrière la cuisine."],
        ["Eu durmo ao lado do Murzik.", "Je dors à côté de Murzik."],
      ],
    ),
  ],
  tasks: [
    choice("ptma2-t1", "Comment dire « à côté du capitaine » ? (o capitão)", [
      ["ao lado do capitão", true],
      ["ao lado da capitão", false],
      ["ao lado o capitão", false],
    ], { skill: "grammar" }),
    listen("ptma2-t2", "Écoute. Que dit le capitaine ?", "O barco está partindo!", [
      ["Le bateau part !", true],
      ["Le bateau est arrivé !", false],
      ["Le bateau est en panne !", false],
    ]),
    match("ptma2-t3", PAIRS, [
      ["ao lado de", "à côté de"],
      ["entre", "entre"],
      ["atrás de", "derrière"],
      ["na frente de", "devant"],
    ], { skill: "words" }),
    missing("ptma2-t4", "Quelle lettre manque-t-il ? (« voisin »)", "vi", "inho", "z", ["z", "s", "ç"]),
    speak("ptma2-t5", "Bom dia, vizinho!", "Bom dia! Que vento bom!", "Bonjour ! Quelle bonne brise !", {
      help: "Dis bonjour à ton voisin, à voix haute.",
    }),
    choice("ptma2-t6", "Comment demander « Quand part le bateau ? »", [
      ["Quando sai o barco?", true],
      ["Quanto custa o barco?", false],
      ["Onde é o barco?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "boat-hammock",
    itemName: "Hamac de bateau",
    itemNameRu: "Rede de barco",
    ru: "Oba! Uma rede de barco!",
    en: "Hourra ! Un hamac de bateau !",
    a11y: "Un hamac bleu vif à franges est suspendu sur le pont.",
    image: p("hammock"),
    steps: [
      "Murzik accroche son nouveau hamac bleu.",
      "Il se balance doucement en regardant le fleuve.",
      "« Aqui é a minha casa por cinco dias ! » — « C'est ma maison pour cinq jours ! »",
      "Le hamac se balance au rythme des vagues.",
    ],
    bridge: "Dans l'après-midi, le capitaine appelle tout le monde au bastingage : « Olhem ! O encontro das águas ! »",
  },
};

const ma3: Lesson = {
  id: "pt-a1-manaus-3",
  level: "A1",
  cityId: "pt-manaus",
  number: 3,
  title: "O encontro das águas — La rencontre des eaux",
  minutes: 7,
  goals: [
    "Décrire un fleuve",
    "Demander « pourquoi ? » et répondre « parce que »",
    "Réagir : Que incrível !",
  ],
  vocabNote:
    "Por que… ? — « pourquoi ? » (en deux mots ; en fin de phrase, por quê ?). Porque — « parce que » (en un seul mot). Ils se prononcent pareil — comme en français « pourquoi » et « parce que » ne se distinguent qu'à l'écrit !",
  vocab: [
    v("ptma3-1", "O rio é escuro.", "Le fleuve est sombre.",
      "L'eau sombre, presque noire du Rio Negro.",
      p("l3-1")),
    v("ptma3-2", "O outro rio é claro.", "L'autre fleuve est clair.",
      "L'eau claire, couleur sable du Solimões.",
      p("l3-2")),
    v("ptma3-3", "As águas não se misturam.", "Les eaux ne se mélangent pas.",
      "L'eau sombre et l'eau claire coulent côte à côte, avec une limite nette entre elles.",
      p("l3-3")),
    v("ptma3-4", "Por quê?", "Pourquoi ?",
      "Murzik penche la tête d'un air interrogateur.",
      p("l3-4")),
    v("ptma3-5", "Porque a água é diferente.", "Parce que l'eau est différente.",
      "Le capitaine montre deux verres : l'un d'eau sombre, l'autre d'eau claire.",
      p("l3-5")),
    v("ptma3-6", "Que incrível!", "Incroyable !",
      "Murzik, ébahi, se penche par-dessus le bastingage.",
      p("l3-6")),
    v("ptma3-7", "Olha os botos!", "Regarde, les dauphins de fleuve !",
      "Des dauphins roses bondissent hors de l'eau.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Deux fleuves",
    note:
      "Encontro — « rencontre ». Quilômetros — « kilomètres ». Boto — le dauphin rose de l'Amazone.",
    lines: [
      line("raimundo", "Olhem! O encontro das águas!", "Regardez ! La rencontre des eaux !"),
      line("murzik", "Este rio é escuro, e o outro rio é claro!", "Ce fleuve est sombre, et l'autre est clair !"),
      line("raimundo", "Isso. E as águas não se misturam por muitos quilômetros.", "C'est ça. Et les eaux ne se mélangent pas pendant des kilomètres."),
      line("murzik", "Por quê?", "Pourquoi ?"),
      line("raimundo", "Porque a água é diferente: uma é quente, a outra é fria.", "Parce que l'eau est différente : l'une est chaude, l'autre est froide."),
      line("murzik", "Que incrível!", "Incroyable !"),
      line("bia", "E olha os botos! Eles são cor-de-rosa!", "Et regarde les dauphins ! Ils sont roses !"),
    ],
    gist: choice("ptma3-d1", "Pourquoi les eaux ne se mélangent-elles pas ?", [
      ["Parce que l'eau est différente.", true],
      ["Parce qu'il y a un mur entre elles.", false],
      ["Parce que l'un des fleuves ne bouge pas.", false],
    ]),
  },
  grammar: [
    g(
      "Pourquoi et parce que : por que et porque",
      [
        "La question « pourquoi ? » — por que ? (en deux mots ; tout à la fin d'une phrase, por quê ?). La réponse « parce que » — porque (en un seul mot). À l'oreille, impossible de les distinguer, seulement à l'écrit.",
        "Diferente — « différent ». Cor-de-rosa — « rose », invariable en genre — comme l'adjectif français « marron » !",
      ],
      [
        ["Por que você está feliz? — Porque eu vi os botos!", "Pourquoi tu es content ? — Parce que j'ai vu les dauphins !"],
        ["Por que o rio é escuro?", "Pourquoi le fleuve est-il sombre ?"],
      ],
    ),
  ],
  tasks: [
    choice("ptma3-t1", "Comment répondre « Parce que l'eau est différente » ?", [
      ["Porque a água é diferente.", true],
      ["Por que a água é diferente.", false],
      ["Por quê a água diferente.", false],
    ], { skill: "grammar" }),
    listen("ptma3-t2", "Écoute. Que voit Bia ?", "Olha os botos!", [
      ["Des dauphins de fleuve.", true],
      ["Des caïmans.", false],
      ["Des pêcheurs.", false],
    ]),
    match("ptma3-t3", PAIRS, [
      ["escuro", "sombre"],
      ["claro", "clair"],
      ["diferente", "différent"],
      ["o boto", "le dauphin de fleuve"],
    ], { skill: "words" }),
    spell("ptma3-t4", "Reconstitue le mot « sombre ».", "escuro"),
    speak("ptma3-t5", "Por que você estuda português?", "Porque eu gosto do Brasil!", "Parce que j'aime le Brésil ! (Donne ta propre raison.)", {
      help: "Dis à voix haute pourquoi tu apprends le portugais.",
    }),
    choice("ptma3-t6", "Comment dire « à côté de Bia » ?", [
      ["ao lado da Bia", true],
      ["entre a Bia", false],
      ["ao lado do Bia", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jar",
    itemName: "Deux petits pots d'eau de fleuve",
    itemNameRu: "Potinhos de água",
    ru: "Oba! Dois potinhos!",
    en: "Hourra ! Deux petits pots !",
    a11y: "Deux petits pots côte à côte sur l'étagère : l'un d'eau sombre, l'autre d'eau claire.",
    image: p("jar"),
    steps: [
      "Le capitaine remplit deux petits pots avec l'eau de chaque fleuve.",
      "« Uma escura, uma clara ! » — « Une sombre, une claire ! »",
      "Murzik les pose soigneusement côte à côte.",
      "Comme les deux fleuves.",
    ],
    bridge: "Le soir, sur le pont, tout le monde raconte des histoires. Murzik raconte son voyage.",
  },
};

const ma4: Lesson = {
  id: "pt-a1-manaus-4",
  level: "A1",
  cityId: "pt-manaus",
  number: 4,
  title: "Eu fui, eu fiz — Je suis allé, j'ai fait",
  minutes: 7,
  goals: [
    "Raconter un voyage au passé",
    "Formes irrégulières : fui, fiz, tive",
    "Demander « Où es-tu allé ? »",
  ],
  vocabNote:
    "Fui — « j'ai été » et « je suis allé » : au passé, ser et ir partagent les mêmes formes. Le sens vient du contexte.",
  vocab: [
    v("ptma4-1", "Eu fui ao Rio.", "Je suis allé à Rio.",
      "Murzik montre Rio sur la carte.",
      p("l4-1")),
    v("ptma4-2", "Nós fomos a muitas cidades.", "Nous sommes allés dans plein de villes.",
      "Une carte du Brésil couverte de points et de flèches.",
      p("l4-2")),
    v("ptma4-3", "Eu fiz muitos amigos.", "Je me suis fait plein d'amis.",
      "L'album est ouvert : des photos de Murzik avec Caio, Juliana, Dona Marta.",
      p("l4-3")),
    v("ptma4-4", "Eu tive um problema.", "J'ai eu un problème.",
      "Murzik rouge de soleil, une compresse froide sur la tête.",
      p("l4-4")),
    v("ptma4-5", "Onde você foi?", "Où es-tu allé ?",
      "Le garçon du hamac voisin écoute Murzik avec intérêt.",
      p("l4-5")),
    v("ptma4-6", "O que vocês fizeram?", "Qu'avez-vous fait ?",
      "Les passagers se rassemblent autour des hamacs.",
      p("l4-6")),
    v("ptma4-7", "Foi uma aventura!", "C'était une aventure !",
      "Murzik écarte largement les pattes.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Histoires sur le pont",
    note:
      "Atrás de — « à la poursuite de ». Desde — « depuis ».",
    lines: [
      line("joao", "Murzik, onde você foi?", "Murzik, où es-tu allé ?"),
      line("murzik", "Eu fui ao Rio, a Paraty, a São Paulo… Nós fomos a muitas cidades!", "Je suis allé à Rio, à Paraty, à São Paulo… Nous sommes allés dans plein de villes !"),
      line("joao", "E o que vocês fizeram?", "Et qu'avez-vous fait ?"),
      line("bia", "Nós fomos atrás de um papagaio! Desde o Rio!", "Nous avons poursuivi un perroquet ! Depuis Rio !"),
      line("murzik", "Eu fiz muitos amigos. E eu tive um problema em Fortaleza: muito sol!", "Je me suis fait plein d'amis. Et à Fortaleza, j'ai eu un problème : trop de soleil !"),
      line("joao", "Que legal!", "Trop bien !"),
      line("murzik", "Foi uma aventura!", "C'était une aventure !"),
    ],
    gist: choice("ptma4-d1", "Quel problème Murzik a-t-il eu à Fortaleza ?", [
      ["Trop de soleil.", true],
      ["Il a perdu son billet.", false],
      ["Il a raté le bus.", false],
    ]),
  },
  grammar: [
    g(
      "Irréguliers au passé : ir, fazer, ter",
      [
        "Ir et ser (« aller », « être ») : eu fui, você / ele foi, nós fomos, eles foram. Fazer (« faire ») : eu fiz, ele fez, nós fizemos, eles fizeram. Ter (« avoir ») : eu tive, ele teve, nós tivemos, eles tiveram.",
        "Bonne nouvelle : fiz ressemble à « j'ai fait », et ter = « avoir », donc eu tive = « j'ai eu ». Fazer amigos — « se faire des amis », exactement comme en français !",
      ],
      [
        ["Ontem nós fomos à praia.", "Hier, nous sommes allés à la plage."],
        ["Ele fez o jantar.", "Il a fait le dîner."],
      ],
    ),
  ],
  tasks: [
    choice("ptma4-t1", "Comment dire « Nous sommes allés au Brésil » ?", [
      ["Nós fomos ao Brasil.", true],
      ["Nós foram ao Brasil.", false],
      ["Nós vamos ao Brasil ontem.", false],
    ], { skill: "grammar" }),
    listen("ptma4-t2", "Écoute. Qu'est-ce que la personne a eu ?", "Eu tive um problema.", [
      ["Un problème.", true],
      ["Un ami.", false],
      ["Un billet.", false],
    ]),
    match("ptma4-t3", PAIRS, [
      ["fui", "je suis allé, j'ai été"],
      ["fiz", "j'ai fait"],
      ["tive", "j'ai eu"],
      ["fomos", "nous sommes allés"],
    ], { skill: "words" }),
    missing("ptma4-t4", "Quelle lettre manque-t-il ? (« aventure »)", "aven", "ura", "t", ["t", "d", "ch"]),
    speak("ptma4-t5", "Onde você foi nas férias?", "Eu fui à praia e fiz muitos amigos.", "Je suis allé à la mer et je me suis fait plein d'amis.", {
      help: "Raconte à voix haute un voyage que tu as fait.",
    }),
    choice("ptma4-t6", "Comment répondre « Parce que j'aime le Brésil » ?", [
      ["Porque eu amo o Brasil.", true],
      ["Por que eu amo o Brasil?", false],
      ["Por quê, eu amo o Brasil.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "guarana",
    itemName: "Bouteille de guaraná",
    itemNameRu: "Guaraná",
    ru: "Oba! Um guaraná!",
    en: "Hourra ! Un guaraná !",
    a11y: "Une petite bouteille de guaraná sur l'étagère, à côté d'une baie rouge avec un petit « œil » noir.",
    image: p("guarana"),
    steps: [
      "Le garçon du hamac voisin offre un guaraná à Murzik.",
      "« É da Amazônia ! » — « Ça vient d'Amazonie ! »",
      "La baie de guaraná ressemble à un petit œil.",
      "La bouteille trône sur l'étagère.",
    ],
    bridge: "Le soir, le bateau retourne au port de Manaus pour charger et y reste jusqu'au matin. Le capitaine les emmène dans un théâtre célèbre.",
  },
};

const ma5: Lesson = {
  id: "pt-a1-manaus-5",
  level: "A1",
  cityId: "pt-manaus",
  number: 5,
  title: "O Teatro Amazonas — Le théâtre Amazonas",
  minutes: 7,
  goals: [
    "Demander « Tu es déjà allé… ? »",
    "Dire « je n'y suis jamais allé »",
    "Se comporter au théâtre",
  ],
  vocabNote:
    "Le Teatro Amazonas a été construit il y a plus de cent ans au milieu de la jungle, quand Manaus était une ville très riche.",
  vocab: [
    v("ptma5-1", "Você já foi à ópera?", "Tu es déjà allé à l'opéra ?",
      "Murzik et Bia devant un théâtre rose au dôme multicolore.",
      p("l5-1")),
    v("ptma5-2", "Eu nunca fui.", "Je n'y suis jamais allé.",
      "Murzik secoue la tête, un peu gêné.",
      p("l5-2")),
    v("ptma5-3", "Tem uma ópera hoje à noite.", "Il y a un opéra ce soir.",
      "Une affiche d'opéra à l'entrée du théâtre.",
      p("l5-3")),
    v("ptma5-4", "Que luxo!", "Quel luxe !",
      "Une salle dorée avec des fauteuils rouges et un immense lustre.",
      p("l5-4")),
    v("ptma5-5", "Silêncio, por favor.", "Silence, s'il vous plaît.",
      "Une ouvreuse pose un doigt sur ses lèvres.",
      p("l5-5")),
    v("ptma5-6", "Bravo!", "Bravo !",
      "La salle applaudit une chanteuse sur scène.",
      p("l5-6")),
    v("ptma5-7", "Eu já vi muitas coisas.", "J'ai déjà vu beaucoup de choses.",
      "Murzik feuillette pensivement son album de photos.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Une soirée à l'opéra",
    note:
      "Cúpula — « dôme ». Lustre — « lustre » (le même mot qu'en français !). Primeira vez — « la première fois ».",
    lines: [
      line("raimundo", "Este é o Teatro Amazonas! Olhem a cúpula!", "Voici le théâtre Amazonas ! Regardez le dôme !"),
      line("bia", "Murzik, você já foi à ópera?", "Murzik, tu es déjà allé à l'opéra ?"),
      line("murzik", "Não, eu nunca fui. É a primeira vez!", "Non, je n'y suis jamais allé. C'est la première fois !"),
      line("raimundo", "Tem uma ópera hoje à noite. Vamos?", "Il y a un opéra ce soir. On y va ?"),
      line("murzik", "Nossa! Que luxo! E o lustre!", "Ouh là ! Quel luxe ! Et le lustre !"),
      line("bia", "Shhh! Silêncio, por favor.", "Chut ! Silence, s'il vous plaît."),
      line("murzik", "Bravo! Bravo!", "Bravo ! Bravo !"),
    ],
    gist: choice("ptma5-d1", "Murzik était-il déjà allé à l'opéra avant ?", [
      ["Non, c'est la première fois.", true],
      ["Oui, plein de fois.", false],
      ["Oui, à Paris.", false],
    ]),
  },
  grammar: [
    g(
      "Já et nunca avec le passé",
      [
        "Já + passé — « déjà » : Você já foi à ópera ? — « Tu es déjà allé à l'opéra ? », Eu já vi — « j'ai déjà vu ». Nunca + passé — « jamais » : Eu nunca fui — « je n'y suis jamais allé ».",
        "Le portugais n'a pas de passé composé séparé ici : il utilise le même passé simple, avec já ou nunca. En français, c'est le passé composé qui fait ce travail.",
      ],
      [
        ["Você já comeu açaí?", "Tu as déjà mangé de l'açaí ?"],
        ["Eu nunca vi neve.", "Je n'ai jamais vu la neige."],
      ],
    ),
  ],
  tasks: [
    choice("ptma5-t1", "Comment demander « Tu es déjà allé au Brésil ? »", [
      ["Você já foi ao Brasil?", true],
      ["Você nunca vai ao Brasil?", false],
      ["Você é já Brasil?", false],
    ], { skill: "grammar" }),
    listen("ptma5-t2", "Écoute. Que dit l'ouvreuse ?", "Silêncio, por favor.", [
      ["Silence, s'il vous plaît.", true],
      ["Bravo !", false],
      ["Votre billet, s'il vous plaît.", false],
    ]),
    match("ptma5-t3", PAIRS, [
      ["já", "déjà"],
      ["nunca", "jamais"],
      ["a ópera", "l'opéra"],
      ["o luxo", "le luxe"],
    ], { skill: "words" }),
    spell("ptma5-t4", "Reconstitue le mot « silence ».", "silêncio"),
    speak("ptma5-t5", "Você já foi à ópera?", "Não, eu nunca fui. Mas eu quero ir!", "Non, je n'y suis jamais allé. Mais je veux y aller !", {
      help: "Réponds à voix haute pour toi-même.",
    }),
    choice("ptma5-t6", "Comment dire « Je me suis fait plein d'amis » ?", [
      ["Eu fiz muitos amigos.", true],
      ["Eu fez muitos amigos.", false],
      ["Eu faço amigos ontem.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "opera-ticket",
    itemName: "Billet d'opéra",
    itemNameRu: "Ingresso da ópera",
    ru: "Oba! O ingresso da ópera!",
    en: "Hourra ! Le billet d'opéra !",
    a11y: "Un billet doré à l'ancienne, orné d'un dessin du dôme du théâtre.",
    image: p("opera-ticket"),
    steps: [
      "Après l'opéra, Murzik garde précieusement son billet.",
      "« A minha primeira ópera ! » — « Mon premier opéra ! »",
      "Il le glisse dans l'album, entre les photos.",
      "Et le lendemain matin — retour sur le pont, en route !",
    ],
    bridge: "Au matin, le bateau accoste près d'un village forestier. Le capitaine les invite à une promenade dans la jungle.",
  },
};

const ma6: Lesson = {
  id: "pt-a1-manaus-6",
  level: "A1",
  cityId: "pt-manaus",
  number: 6,
  title: "Na floresta — Dans la forêt",
  minutes: 7,
  goals: [
    "Comprendre les avertissements dans la forêt",
    "Dire « ne touche pas ! », « ne mange pas ! »",
    "Dire ce qui te fait peur",
  ],
  vocabNote:
    "Estou com medo de… — « j'ai peur de… » : Estou com medo de cobra — « j'ai peur des serpents ». Encore un « estar com » qui correspond à « avoir » en français !",
  vocab: [
    v("ptma6-1", "Não toque nisso!", "Ne touche pas à ça !",
      "Le capitaine arrête net la patte de Murzik devant une chenille aux couleurs vives.",
      p("l6-1")),
    v("ptma6-2", "É venenoso?", "C'est venimeux ?",
      "Murzik regarde la chenille d'un air effrayé.",
      p("l6-2")),
    v("ptma6-3", "Não coma essa fruta!", "Ne mange pas ce fruit !",
      "Le capitaine écarte la patte de Murzik d'une baie inconnue.",
      p("l6-3")),
    v("ptma6-4", "Escuta os macacos!", "Écoute les singes !",
      "Des singes hurleurs crient au sommet d'un arbre.",
      p("l6-4")),
    v("ptma6-5", "Que árvore enorme!", "Quel arbre énorme !",
      "Murzik au pied d'un arbre géant dont les racines sont plus hautes que lui.",
      p("l6-5")),
    v("ptma6-6", "Estou com medo de cobra.", "J'ai peur des serpents.",
      "Murzik se cache derrière Bia ; un serpent pend d'une branche.",
      p("l6-6")),
    v("ptma6-7", "Não se preocupe.", "Ne t'inquiète pas.",
      "Le capitaine pose calmement une main sur l'épaule de Murzik.",
      p("l6-7")),
  ],
  dialogue: {
    title: "Un sentier dans la jungle",
    note:
      "Lagarta — « chenille ». Está dormindo — « elle dort (en ce moment) ». Fica perto de mim — « reste près de moi ».",
    lines: [
      line("raimundo", "Fica perto de mim. E não toque nisso!", "Reste près de moi. Et ne touche pas à ça !"),
      line("murzik", "A lagarta? É venenosa?", "La chenille ? Elle est venimeuse ?"),
      line("raimundo", "É! E não coma essa fruta também.", "Oui ! Et ne mange pas ce fruit non plus."),
      line("bia", "Escuta os macacos! Que barulho!", "Écoute les singes ! Quel vacarme !"),
      line("murzik", "Ai! Uma cobra! Estou com medo de cobra!", "Aïe ! Un serpent ! J'ai peur des serpents !"),
      line("raimundo", "Não se preocupe. Ela não é venenosa. E ela está dormindo.", "Ne t'inquiète pas. Il n'est pas venimeux. Et il dort."),
    ],
    gist: choice("ptma6-d1", "De quoi Murzik a-t-il peur ?", [
      ["Des serpents.", true],
      ["Des singes.", false],
      ["Des arbres.", false],
    ]),
  },
  grammar: [
    g(
      "Ne fais pas : não toque, não coma",
      [
        "Pour interdire, on met não devant la forme polie d'ordre : não toque — « ne touche pas », não coma — « ne mange pas », não se preocupe — « ne t'inquiète pas ». Ce sont les mêmes formes que tome, beba chez le médecin, mais avec não.",
        "Nisso — « à ça, ça » (em + isso) : Não toque nisso ! — « Ne touche pas à ça ! »",
      ],
      [
        ["Não beba essa água!", "Ne bois pas cette eau !"],
        ["Não se preocupe, está tudo bem.", "Ne t'inquiète pas, tout va bien."],
      ],
    ),
  ],
  tasks: [
    choice("ptma6-t1", "Comment dire « Ne bois pas cette eau ! » ?", [
      ["Não beba essa água!", true],
      ["Não bebe essa água ontem!", false],
      ["Beba não essa água!", false],
    ], { skill: "grammar" }),
    listen("ptma6-t2", "Écoute. Que dit le capitaine ?", "Não toque nisso!", [
      ["Ne touche pas à ça !", true],
      ["Ne mange pas ça !", false],
      ["Ne t'inquiète pas !", false],
    ]),
    match("ptma6-t3", PAIRS, [
      ["a cobra", "le serpent"],
      ["o macaco", "le singe"],
      ["venenoso", "venimeux"],
      ["a floresta", "la forêt"],
    ], { skill: "words" }),
    missing("ptma6-t4", "Quelle lettre manque-t-il ? (« serpent »)", "co", "ra", "b", ["b", "v", "p"]),
    speak("ptma6-t5", "Você tem medo de quê?", "Eu estou com medo de cobra!", "J'ai peur des serpents ! (Dis ce qui te fait peur, à toi.)", {
      help: "Dis à voix haute ce qui te fait peur.",
    }),
    choice("ptma6-t6", "Comment demander « Tu es déjà allé à l'opéra ? »", [
      ["Você já foi à ópera?", true],
      ["Você vai à ópera ontem?", false],
      ["Você nunca ópera?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lily",
    itemName: "Fleur de nénuphar géant séchée",
    itemNameRu: "Flor de vitória-régia",
    ru: "Oba! Uma flor de vitória-régia!",
    en: "Hourra ! Une fleur de nénuphar !",
    a11y: "Dans un cadre, une fleur blanche et rose séchée d'un nénuphar géant d'Amazonie.",
    image: p("lily"),
    steps: [
      "Près du village, d'énormes feuilles rondes de nénuphars flottent sur l'eau.",
      "« Uma criança pode sentar nela ! » — « Un enfant peut s'asseoir dessus ! »",
      "Une fillette du village offre à Murzik une fleur séchée.",
      "La fleur encadrée trône près du hamac.",
    ],
    bridge: "Le soir, le capitaine s'assoit à côté de Murzik : « Sabe, eu conheço o seu papagaio… »",
  },
};

const ma7: Lesson = {
  id: "pt-a1-manaus-7",
  level: "A1",
  cityId: "pt-manaus",
  number: 7,
  title: "Boa viagem! — Bon voyage !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Dire « vous arriverez à temps »",
    "Revoir tous les mots de Manaus",
  ],
  vocabNote:
    "Boa viagem ! — « Bon voyage ! » (viagem = « voyage », le même mot !). Último — « dernier » : o último show — « le dernier concert ».",
  vocab: [
    v("ptma7-1", "Boa viagem!", "Bon voyage !",
      "Le perroquet vert, sur la rambarde du bateau, salue d'un coup d'aile les passagers sur le quai.",
      p("l7-1")),
    v("ptma7-2", "Ele viajou no meu barco.", "Il a voyagé sur mon bateau.",
      "Le capitaine montre fièrement son bateau.",
      p("l7-2")),
    v("ptma7-3", "Ele falava com todo mundo.", "Il parlait avec tout le monde.",
      "Le perroquet bavarde avec les passagers dans leurs hamacs.",
      p("l7-3")),
    v("ptma7-4", "Eles foram para Belém.", "Ils sont partis pour Belém.",
      "Une carte : le fleuve rejoint l'océan, avec une ville sur la rive.",
      p("l7-4")),
    v("ptma7-5", "O último show é no sábado!", "Le dernier concert est samedi !",
      "Une affiche avec un ruban et une grande date sur le calendrier.",
      p("l7-5")),
    v("ptma7-6", "Vocês vão chegar a tempo!", "Vous arriverez à temps !",
      "Le capitaine à la barre, le bateau à toute vitesse.",
      p("l7-6")),
    v("ptma7-7", "Muito obrigada, capitão!", "Merci beaucoup, capitaine ! (c'est Bia qui parle)",
      "Bia serre le capitaine dans ses bras sur le quai.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce que le perroquet disait",
    note:
      "Passageiro — « passager ». Desembarcava — « débarquait ». Fofo — « mignon, adorable ».",
    lines: [
      line("raimundo", "Sabe, eu conheço o seu papagaio. Ele viajou no meu barco, com a banda!", "Tu sais, je connais ton perroquet. Il a voyagé sur mon bateau, avec le groupe !"),
      line("murzik", "O Pipoca! E o que ele fazia?", "Pipoca ! Et qu'est-ce qu'il faisait ?"),
      line("raimundo", "Ele falava com todo mundo. E quando um passageiro desembarcava, ele dizia: Boa viagem! Boa viagem!", "Il parlait avec tout le monde. Et quand un passager débarquait, il disait : « Bon voyage ! Bon voyage ! »"),
      line("bia", "Que fofo! E a banda?", "Trop mignon ! Et le groupe ?"),
      line("raimundo", "Eles foram para Belém. O último show é no sábado!", "Ils sont partis pour Belém. Le dernier concert est samedi !"),
      line("murzik", "No sábado? E o barco chega na sexta…", "Samedi ? Et le bateau arrive vendredi…"),
      line("raimundo", "Então vocês vão chegar a tempo! Boa viagem!", "Alors vous arriverez à temps ! Bon voyage !"),
      line("bia", "Muito obrigada, capitão!", "Merci beaucoup, capitaine !"),
    ],
    gist: choice("ptma7-d1", "Quand a lieu le dernier concert du groupe ?", [
      ["Samedi.", true],
      ["Vendredi.", false],
      ["Il a déjà eu lieu.", false],
    ]),
  },
  grammar: [
    g(
      "Falava, dizia — « il parlait, il disait (souvent) »",
      [
        "Ele falava com todo mundo — « il parlait (tout le temps) avec tout le monde ». C'est un autre passé : pour ce qui se répétait ou durait. -ar → -ava (falava), -er / -ir → -ia (dizia, fazia). C'est exactement l'imparfait français : « il parlait, il disait » !",
        "Compare : Ele disse — « il a dit (une fois) », Ele dizia — « il disait (souvent) ». Tu apprendras ce temps en détail au niveau A2.",
      ],
      [
        ["Ele dizia: Boa viagem!", "Il disait tout le temps : « Bon voyage ! »"],
        ["Eu morava no Rio.", "J'habitais à Rio (avant)."],
      ],
    ),
  ],
  tasks: [
    listen("ptma7-t1", "Examen audio. Que raconte le capitaine ?", "O papagaio viajou no meu barco e dizia: Boa viagem! A banda foi para Belém. O último show é no sábado.", [
      ["Le perroquet a voyagé avec le groupe, et le dernier concert est samedi à Belém.", true],
      ["Le perroquet est resté à Manaus.", false],
      ["Le concert a été annulé.", false],
    ]),
    choice("ptma7-t2", "Comment dire « Bon voyage ! » ?", [
      ["Boa viagem!", true],
      ["Boa sorte!", false],
      ["Bom apetite!", false],
    ], { skill: "words" }),
    build("ptma7-t3", "Reconstitue la phrase : « Le dernier concert est samedi ».", ["O", "último", "show", "é", "no", "sábado."]),
    missing("ptma7-t4", "Quelle lettre manque-t-il ? (« dernier »)", "", "ltimo", "ú", ["ú", "u", "o"]),
    speak("ptma7-t5", "Boa viagem!", "Muito obrigado! Até a próxima viagem!", "Merci beaucoup ! Au prochain voyage !", {
      help: "Remercie à voix haute. Obligado ou obrigada, les deux sont possibles.",
    }),
    script("ptma7-t6", "Souviens-toi de tout Manaus. Termine la conversation avec le capitaine.", [
      { speaker: RAIMUNDO, text: "Bem-vindo ao barco! Para onde você vai?" },
      { speaker: YOU, answer: "Eu vou para Belém. Quanto tempo dura a viagem?", options: ["Eu vou para Belém. Quanto tempo dura a viagem?", "Eu fui ontem.", "Não toque nisso!"] },
      { speaker: RAIMUNDO, text: "Cinco dias. Você já viajou de barco?" },
      { speaker: YOU, answer: "Não, eu nunca viajei de barco.", options: ["Não, eu nunca viajei de barco.", "Sim, eu viajo amanhã.", "Por quê?"] },
      { speaker: RAIMUNDO, text: "Pode pendurar a rede aqui." },
      { speaker: YOU, answer: "Obrigado! Que vento bom!", options: ["Obrigado! Que vento bom!", "Estou com medo de rede!", "Bravo!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-manaus",
    itemName: "Photo de Pipoca sur le bateau",
    itemNameRu: "Foto do Pipoca no barco",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y:
      "Une photo : le perroquet vert sur la rambarde d'un bateau fluvial, le large fleuve et la forêt derrière, et le capitaine en casquette à côté de lui.",
    image: p("photo"),
    steps: [
      "Le capitaine sort une vieille photo de sa poche.",
      "Pipoca sur la rambarde, et le capitaine à côté de lui !",
      "« O melhor marinheiro do Amazonas ! » — « Le meilleur matelot de l'Amazone ! »",
      "Légende : « Boa viagem ! » La photo rejoint l'album.",
    ],
    bridge: "Cinq jours sur le fleuve. Et vendredi, au loin, une grande ville au bord de l'océan est apparue.",
  },
};

const story: CityStory = {
  home: {
    name: "Un hamac sur le pont du bateau",
    nameRu: "A rede no convés do barco",
    image: p("home"),
    a11y:
      "Le pont d'un bateau fluvial : des rangées de hamacs multicolores, le large fleuve et un mur de forêt au-delà du bastingage. La valise de Murzik est sur le pont.",
  },
  keepsakeId: "photo-manaus",
  welcomeRu: "Olá, Manaus!",
  welcomeEn: "Bonjour, Manaus !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Un large fleuve sombre ; sur la rive, une ville et un vieil opéra au dôme coloré. Des bateaux fluviaux blancs à deux ponts au quai.",
  departureImage: p("departure"),
  departureA11y: "Le capitaine Raimundo salue depuis la passerelle de son bateau.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca sur le bateau.",
      lines: [
        { en: "Treizième page de l'album : Pipoca, matelot de l'Amazone." },
        { ru: "Boa viagem!", en: "Bon voyage !" },
        { en: "La dernière ville. Le dernier concert. Pourvu qu'ils arrivent à temps !" },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Manaus completa!", en: "Manaus terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Le capitaine fait un signe d'adieu.",
      lines: [
        { ru: "Tchau, capitão Raimundo!", en: "Au revoir, capitaine Raimundo !" },
        { ru: "Última parada: Belém!", en: "Dernier arrêt : Belém !" },
      ],
    },
    {
      image: p("boat"),
      a11y: "Le bateau fluvial descend le large fleuve au coucher du soleil.",
      lines: [{ ru: "Manaus → Belém", en: "Manaus → Belém" }],
    },
    {
      image: pic("pt/belem/arrival"),
      a11y:
        "Une ville portuaire à l'embouchure du fleuve : un vieux marché aux tourelles bleues, des barques et des oiseaux au-dessus de l'eau. Sur un mur : l'affiche du concert de « Maré Alta ».",
      lines: [
        { ru: "Olá, Belém!", en: "Bonjour, Belém !" },
        { ru: "Olha! O cartaz do show!", en: "Regarde ! L'affiche du concert !" },
      ],
    },
  ],
};

export const ptManausFr = {
  id: "pt-manaus",
  name: "Manaus",
  namePt: "Manaus",
  lessons: [ma1, ma2, ma3, ma4, ma5, ma6, ma7],
  story,
};
