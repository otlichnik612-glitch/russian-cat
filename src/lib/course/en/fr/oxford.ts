import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * Oxford · « Qui es-tu et d'où viens-tu » · lessons 1–7 — French version of ../oxford.ts.
 * Same story, same English phrases and pictures; explanations, translations,
 * pronunciation hints (French letters) and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/oxford/${name}`);

const oxford1: Lesson = {
  id: "en-a1-oxford-1",
  level: "A1",
  cityId: "en-oxford",
  number: 1,
  title: "Where are you from? — D'où viens-tu ?",
  minutes: 7,
  goals: ["Demander d'où vient quelqu'un", "Dire d'où tu viens", "Dire d'où il ou elle vient"],
  vocabNote: "Les noms de pays prennent une majuscule : Russia, England, India. From veut dire « de » : I'm from Russia — « Je viens de Russie ».",
  vocab: [
    v("enox1-1", "Where are you from?", "D'où viens-tu ?", "Une fille avec un sac à dos et une longue tresse regarde Murzik avec curiosité.", "Écouter Where are you from", p("l1-1"), "[ouèr a you from]"),
    v("enox1-2", "I'm from Russia.", "Je viens de Russie.", "Murzik montre un petit globe.", "Écouter I'm from Russia", p("l1-2"), "[aïm from racha]"),
    v("enox1-3", "Tom is from England.", "Tom vient d'Angleterre.", "Tom est debout sous une vieille arche de pierre et fait signe.", "Écouter Tom is from England", p("l1-3"), "[tom iz from ing-glend]"),
    v("enox1-4", "He's from London.", "Il vient de Londres.", "Murzik montre Tom de la patte.", "Écouter He's from London", p("l1-4"), "[hiz from len-deun]"),
    v("enox1-5", "She's from Oxford.", "Elle vient d'Oxford.", "Murzik montre de la patte la fille à la tresse.", "Écouter She's from Oxford", p("l1-5"), "[chiz from oks-feud]"),
    v("enox1-6", "Her family is from India.", "Sa famille vient d'Inde.", "Une photo d'une grande famille joyeuse devant un jardin en fleurs.", "Écouter Her family is from India", p("l1-6"), "[heu fè-mi-li iz from in-di-e]"),
    v("enox1-7", "Welcome to Oxford!", "Bienvenue à Oxford !", "La fille à la tresse écarte les bras devant le portail d'un vieux collège.", "Écouter Welcome to Oxford", p("l1-7"), "[ouèl-keum tou oks-feud]"),
  ],
  dialogue: {
    title: "Priya",
    note: "Priya est étudiante, la petite-fille d'une vieille amie de Mme Hope. Granddaughter veut dire « petite-fille ».",
    lines: [
      line("priya", "Hi! You're Tom and Murzik! Welcome to Oxford!", "Salut ! Vous êtes Tom et Murzik ! Bienvenue à Oxford !"),
      line("tom", "Hi, Priya! Nice to meet you.", "Salut, Priya ! Ravie de te rencontrer."),
      line("priya", "Murzik, where are you from?", "Murzik, d'où viens-tu ?"),
      line("murzik", "I'm from Russia. And you?", "Je viens de Russie. Et toi ?"),
      line("priya", "I'm from Oxford. But my family is from India.", "Je viens d'Oxford. Mais ma famille vient d'Inde."),
      line("murzik", "And Tom is from London!", "Et Tom vient de Londres !"),
      line("priya", "I know! He's Mrs Hope's grandson!", "Je sais ! C'est le petit-fils de Mme Hope !"),
    ],
    gist: choice("enox1-d1", "D'où vient Priya ?", [
      ["D'Oxford, et sa famille vient d'Inde.", true],
      ["De Londres.", false],
      ["De Russie.", false],
    ]),
  },
  grammar: [
    {
      title: "To be : I am, you are, he is",
      paragraphs: [
        "Le verbe to be, c'est « être ». Au présent, il n'a que trois formes : I am, you are, he / she / it is. Bonne nouvelle : le français en a six !",
        "En version courte : I'm, you're, he's, she's, it's. Comme en français, on ne peut pas sauter le verbe : She's from Oxford, et jamais « She from Oxford ».",
      ],
      examples: [
        { ru: "I'm from Russia.", en: "Je viens de Russie." },
        { ru: "She's from Oxford. He's from London.", en: "Elle vient d'Oxford. Il vient de Londres." },
      ],
    },
  ],
  tasks: [
    choice("enox1-t1", "Comment dire « Elle vient d'Inde » ?", [
      ["She's from India.", true],
      ["She from India.", false],
      ["She are from India.", false],
    ], { skill: "grammar" }),
    listen("enox1-t2", "Écoute. D'où vient la personne ?", "I'm from England.", [
      ["D'Angleterre.", true],
      ["D'Inde.", false],
      ["De Russie.", false],
    ]),
    match("enox1-t3", "Relie les paires.", [
      ["I'm", "je suis"],
      ["you're", "tu es"],
      ["he's", "il est"],
      ["she's", "elle est"],
    ], { skill: "words" }),
    missing("enox1-t4", "Quelle lettre manque ? (« Russie »)", "Ru", "sia", "s", ["s", "c", "z"]),
    speak("enox1-t5", "Where are you from?", "I'm from Russia.", "Je viens de Russie.", { help: "Réponds à voix haute : d'où viens-tu ?" }),
    choice("enox1-t6", "Comment dire « à demain » en partant ?", [
      ["See you tomorrow!", true],
      ["Have a good trip!", false],
      ["Nice to meet you!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lamp",
    itemName: "Lampe de bureau",
    itemNameRu: "Desk lamp",
    ru: "Hooray! A desk lamp!",
    en: "Hourra ! Une lampe de bureau !",
    a11y: "Sur le bureau, une vieille lampe verte avec un pied en laiton éclaire doucement un livre ouvert.",
    image: p("lamp"),
    steps: ["Priya montre à Murzik sa chambre dans la résidence étudiante.", "Sur le bureau — une lampe verte.", "« For reading. Students read a lot here! » — « Pour lire. Les étudiants lisent beaucoup ici ! »", "Murzik l'allume : une lumière chaude."],
    bridge: "Le soir, des amis de Priya passent — ils viennent de plein de pays différents.",
  },
};

const oxford2: Lesson = {
  id: "en-a1-oxford-2",
  level: "A1",
  cityId: "en-oxford",
  number: 2,
  title: "I'm Russian — Je suis russe",
  minutes: 7,
  goals: ["Dire ta nationalité", "Dire quelle langue tu parles", "Demander si quelqu'un parle anglais"],
  vocabNote: "La nationalité et la langue sont souvent le même mot : Russian — « russe » (la langue et la personne), English — « anglais ». Attention : en anglais, ces mots prennent une majuscule, contrairement au français !",
  vocab: [
    v("enox2-1", "I'm Russian.", "Je suis russe.", "Murzik se tient fièrement avec une poupée matriochka dans les pattes.", "Écouter I'm Russian", p("l2-1"), "[aïm ra-chen]"),
    v("enox2-2", "Tom is English.", "Tom est anglais.", "Tom avec une tasse de thé et un parapluie sous le bras.", "Écouter Tom is English", p("l2-2"), "[tom iz ing-glich]"),
    v("enox2-3", "Hiroshi is Japanese.", "Hiroshi est japonais.", "Un étudiant à lunettes salue poliment.", "Écouter Hiroshi is Japanese", p("l2-3"), "[hi-ro-chi iz djè-peu-niz]"),
    v("enox2-4", "Ana is Spanish.", "Ana est espagnole.", "Une fille aux boucles brunes rit et fait signe.", "Écouter Ana is Spanish", p("l2-4"), "[a-na iz spè-nich]"),
    v("enox2-5", "I speak Russian.", "Je parle russe.", "Murzik parle, au-dessus de sa tête un nuage avec les lettres А, Б, В.", "Écouter I speak Russian", p("l2-5"), "[aï spik ra-chen]"),
    v("enox2-6", "Do you speak English?", "Tu parles anglais ?", "Priya se penche vers Murzik en souriant.", "Écouter Do you speak English", p("l2-6"), "[dou you spik ing-glich]"),
    v("enox2-7", "A little.", "Un peu.", "Murzik montre un petit écart entre ses pattes et sourit, gêné.", "Écouter A little", p("l2-7"), "[e li-tel]"),
  ],
  dialogue: {
    title: "Soirée chez Priya",
    note: "Friends — « amis ». Everybody — « tout le monde ». Your English is good! — « Tu parles bien anglais ! »",
    lines: [
      line("priya", "Everybody, this is Murzik. He's Russian.", "Tout le monde, voici Murzik. Il est russe."),
      line("murzik", "Hello! Do you speak Russian?", "Bonjour ! Vous parlez russe ?"),
      line("priya", "No! Hiroshi is Japanese, he speaks Japanese. Ana is Spanish.", "Non ! Hiroshi est japonais, il parle japonais. Ana est espagnole."),
      line("priya", "Murzik, do you speak English?", "Murzik, et toi, tu parles anglais ?"),
      line("murzik", "A little.", "Un peu."),
      line("priya", "Your English is good!", "Tu parles bien anglais !"),
      line("tom", "He's a good student!", "C'est un bon élève !"),
    ],
    gist: choice("enox2-d1", "Comment Murzik parle-t-il anglais ?", [
      ["Un peu.", true],
      ["Pas du tout.", false],
      ["Très bien, comme Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "Pays, nationalité, langue",
      paragraphs: [
        "Pays : Russia, England, Japan, Spain. Nationalité et langue : Russian, English, Japanese, Spanish. Tous ces mots prennent une majuscule en anglais — c'est l'inverse du français, où « russe » et « anglais » s'écrivent en minuscules !",
        "Pour toi : I'm Russian. — « Je suis russe. » Pour la langue : I speak Russian. — « Je parle russe. » Le mot Russian suffit, pas besoin d'un équivalent de « en russe ».",
      ],
      examples: [
        { ru: "Ana is from Spain. She's Spanish.", en: "Ana vient d'Espagne. Elle est espagnole." },
        { ru: "I speak English and Russian.", en: "Je parle anglais et russe." },
      ],
    },
  ],
  tasks: [
    choice("enox2-t1", "Comment écrire « russe » correctement ?", [
      ["Russian", true],
      ["russian", false],
      ["Russia", false],
    ], { skill: "grammar" }),
    listen("enox2-t2", "Écoute. Quelle est sa langue ?", "She speaks Spanish.", [
      ["L'espagnol.", true],
      ["Le japonais.", false],
      ["L'anglais.", false],
    ]),
    match("enox2-t3", "Relie les paires.", [
      ["Russia", "la Russie"],
      ["Russian", "russe"],
      ["England", "l'Angleterre"],
      ["English", "anglais"],
    ], { skill: "words" }),
    spell("enox2-t4", "Assemble le mot « petit, un peu ».", "little"),
    speak("enox2-t5", "Do you speak English?", "A little. I speak Russian.", "Un peu. Je parle russe.", { help: "Réponds à voix haute." }),
    choice("enox2-t6", "Comment demander « D'où viens-tu ? »", [
      ["Where are you from?", true],
      ["How are you?", false],
      ["What's your name?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "map",
    itemName: "Carte du monde",
    itemNameRu: "World map",
    ru: "Hooray! A map of the world!",
    en: "Hourra ! Une carte du monde !",
    a11y: "Au mur, une grande vieille carte du monde. Les amis de Priya ont planté des petites épingles dans leurs pays.",
    image: p("map"),
    steps: ["Les amis de Priya accrochent une carte du monde au mur.", "Chacun plante une épingle dans son pays.", "Murzik plante une épingle en Russie.", "« And soon — the whole world! » — rit Tom. « Et bientôt — le monde entier ! »"],
    bridge: "Le matin, Priya emmène tout le monde visiter les collèges.",
  },
};

const oxford3: Lesson = {
  id: "en-a1-oxford-3",
  level: "A1",
  cityId: "en-oxford",
  number: 3,
  title: "We are friends — Nous sommes amis",
  minutes: 7,
  goals: ["Dire « nous », « vous », « ils »", "Dire qui vous êtes l'un pour l'autre", "Demander : Are they…?"],
  vocabNote: "We are = we're, you are = you're, they are = they're. You, c'est à la fois « tu » et « vous » (plusieurs personnes) — pratique !",
  vocab: [
    v("enox3-1", "We're friends.", "Nous sommes amis.", "Murzik et Tom se tiennent par l'épaule.", "Écouter We're friends", p("l3-1"), "[oui-eu frèndz]"),
    v("enox3-2", "They're students.", "Ils sont étudiants.", "Un groupe d'étudiants en toges devant un bâtiment ancien.", "Écouter They're students", p("l3-2"), "[zè-eu stiou-dents]"),
    v("enox3-3", "Are they your friends?", "Ce sont tes amis ?", "Murzik montre une bande d'étudiants sur la pelouse.", "Écouter Are they your friends", p("l3-3"), "[a zèi ior frèndz]"),
    v("enox3-4", "Yes, they are.", "Oui.", "Priya hoche la tête et fait signe à ses amis.", "Écouter Yes, they are", p("l3-4"), "[iès, zèi a]"),
    v("enox3-5", "This is my college.", "Voici mon collège.", "Priya montre le portail d'un vieux collège avec une tourelle.", "Écouter This is my college", p("l3-5"), "[ziss iz maï ko-lidj]"),
    v("enox3-6", "It's very old.", "Il est très vieux.", "De vieux murs de pierre couverts de lierre.", "Écouter It's very old", p("l3-6"), "[its vè-ri euld]"),
    v("enox3-7", "You're lucky!", "Vous avez de la chance !", "Murzik admire les tours du collège.", "Écouter You're lucky", p("l3-7"), "[iou-eu la-ki]"),
  ],
  dialogue: {
    title: "Promenade dans les collèges",
    note: "Hundred years — « cent ans ». Library — « bibliothèque » (attention : une « librairie » est un magasin de livres, pas une bibliothèque !).",
    lines: [
      line("priya", "This is my college. It's very old!", "Voici mon collège. Il est très vieux !"),
      line("murzik", "How old?", "Vieux comment ?"),
      line("priya", "Seven hundred years!", "Sept cents ans !"),
      line("murzik", "Wow! Are they students?", "Ouah ! Ce sont des étudiants ?"),
      line("priya", "Yes, they are. They're my friends. We're in the same year.", "Oui. Ce sont mes amis. Nous sommes dans la même année."),
      line("murzik", "You're lucky!", "Tu as de la chance !"),
    ],
    gist: choice("enox3-d1", "Quel âge a le collège de Priya ?", [
      ["Sept cents ans.", true],
      ["Soixante-dix ans.", false],
      ["Sept ans.", false],
    ]),
  },
  grammar: [
    {
      title: "To be : we are, you are, they are",
      paragraphs: [
        "Le tableau complet : I am, you are, he / she / it is, we are, you are, they are. Trois formes à retenir : am, is, are — et are pour tout le pluriel.",
        "Pour la question, le verbe passe devant : They are students. → Are they students? Réponse : Yes, they are. / No, they aren't. Pas besoin de « est-ce que » !",
      ],
      examples: [
        { ru: "We're friends.", en: "Nous sommes amis." },
        { ru: "Are you students? — Yes, we are.", en: "Vous êtes étudiants ? — Oui." },
      ],
    },
  ],
  tasks: [
    choice("enox3-t1", "Comment dire « Ils sont étudiants » ?", [
      ["They're students.", true],
      ["They is students.", false],
      ["They students.", false],
    ], { skill: "grammar" }),
    listen("enox3-t2", "Écoute. Qui sont-ils ?", "We're friends.", [
      ["Des amis.", true],
      ["Des étudiants.", false],
      ["Des professeurs.", false],
    ]),
    match("enox3-t3", "Relie les paires.", [
      ["we're", "nous sommes"],
      ["they're", "ils sont"],
      ["friends", "amis"],
      ["students", "étudiants"],
    ], { skill: "words" }),
    missing("enox3-t4", "Quelle lettre manque ? (« ami »)", "fr", "end", "i", ["i", "e", "y"]),
    speak("enox3-t5", "Are you and Tom friends?", "Yes, we are. We're friends.", "Oui. Nous sommes amis.", { help: "Réponds à voix haute." }),
    choice("enox3-t6", "Comment dire « Je parle russe » ?", [
      ["I speak Russian.", true],
      ["I am Russia.", false],
      ["I speak Russia.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "scarf",
    itemName: "Écharpe rayée du collège",
    itemNameRu: "College scarf",
    ru: "Hooray! A college scarf!",
    en: "Hourra ! Une écharpe de collège !",
    a11y: "Une longue écharpe en tricot à rayures bleu foncé et jaunes, accrochée au dossier d'une chaise.",
    image: p("scarf"),
    steps: ["Les amis de Priya offrent à Murzik une écharpe rayée.", "« Now you're one of us! » — « Maintenant tu es des nôtres ! »", "Murzik la noue par-dessus la sienne.", "Maintenant il a deux écharpes !"],
    bridge: "Le soir, sur la pelouse, un jeu : qui comptera jusqu'à vingt en anglais le plus vite ?",
  },
};

const oxford4: Lesson = {
  id: "en-a1-oxford-4",
  level: "A1",
  cityId: "en-oxford",
  number: 4,
  title: "Les nombres 11–20",
  minutes: 7,
  goals: ["Compter jusqu'à vingt", "Demander l'âge", "Dire ton âge"],
  vocabNote: "Les nombres de 13 à 19 finissent en -teen [-tin] : thirteen, fourteen. Ne confonds pas thirteen (13) et thirty (30) : dans -teen, l'accent tombe sur la fin.",
  vocab: [
    v("enox4-1", "eleven, twelve", "onze, douze", "Douze canards nagent sur la rivière.", "Écouter eleven, twelve", p("l4-1"), "[i-lè-ven, touèlv]"),
    v("enox4-2", "thirteen, fourteen, fifteen", "treize, quatorze, quinze", "Quinze barques à l'embarcadère.", "Écouter thirteen, fourteen, fifteen", p("l4-2"), "[seu-tin, fo-tin, fif-tin]"),
    v("enox4-3", "sixteen, seventeen", "seize, dix-sept", "Dix-sept vélos contre le mur du collège.", "Écouter sixteen, seventeen", p("l4-3"), "[siks-tin, sè-ven-tin]"),
    v("enox4-4", "eighteen, nineteen, twenty", "dix-huit, dix-neuf, vingt", "Vingt bougies sur un gâteau.", "Écouter eighteen, nineteen, twenty", p("l4-4"), "[èi-tin, naïn-tin, touèn-ti]"),
    v("enox4-5", "How old are you?", "Quel âge as-tu ?", "Murzik regarde Priya avec curiosité.", "Écouter How old are you", p("l4-5"), "[haou old a you]"),
    v("enox4-6", "I'm twenty.", "J'ai vingt ans.", "Priya montre deux fois dix doigts.", "Écouter I'm twenty", p("l4-6"), "[aïm touèn-ti]"),
    v("enox4-7", "He's twenty-five.", "Il a vingt-cinq ans.", "Murzik montre Tom de la patte.", "Écouter He's twenty-five", p("l4-7"), "[hiz touèn-ti-faïv]"),
  ],
  dialogue: {
    title: "Barque sur la rivière",
    note: "Punt [peunt] — une barque plate qu'on pousse avec une longue perche. À Oxford, on se promène ainsi sur la rivière.",
    lines: [
      line("priya", "How old are you, Murzik?", "Quel âge as-tu, Murzik ?"),
      line("murzik", "I'm six! And you?", "J'ai six ans ! Et toi ?"),
      line("priya", "I'm twenty. And Tom?", "J'ai vingt ans. Et Tom ?"),
      line("tom", "I'm twenty-five.", "J'ai vingt-cinq ans."),
      line("priya", "Look, the punts! One, two… fifteen!", "Regardez, les barques ! Une, deux… quinze !"),
      line("murzik", "Sixteen! There's one more!", "Seize ! Là-bas, il y en a une de plus !"),
    ],
    gist: choice("enox4-d1", "Quel âge a Priya ?", [
      ["Vingt ans.", true],
      ["Vingt-cinq ans.", false],
      ["Six ans.", false],
    ]),
  },
  grammar: [
    {
      title: "L'âge : I'm twenty",
      paragraphs: [
        "Attention, piège pour les francophones : en français on a vingt ans, en anglais on est vingt — avec to be : I'm twenty. He's six. Le mot years (ans) n'est pas obligatoire.",
        "La question : How old are you? — « Quel âge as-tu ? » (littéralement « Comme tu es vieux comment ? »). Ne dis jamais « I have twenty years » — c'est la faute typique des francophones !",
      ],
      examples: [
        { ru: "How old is Tom? — He's twenty-five.", en: "Quel âge a Tom ? — Vingt-cinq ans." },
        { ru: "I'm eighteen.", en: "J'ai dix-huit ans." },
      ],
    },
  ],
  tasks: [
    choice("enox4-t1", "Comment dire « J'ai dix-huit ans » ?", [
      ["I'm eighteen.", true],
      ["I have eighteen.", false],
      ["Me eighteen.", false],
    ], { skill: "grammar" }),
    listen("enox4-t2", "Écoute. Quel nombre ?", "fourteen", [
      ["14", true],
      ["40", false],
      ["4", false],
    ]),
    match("enox4-t3", "Relie les paires.", [
      ["eleven", "11"],
      ["thirteen", "13"],
      ["seventeen", "17"],
      ["twenty", "20"],
    ], { skill: "words" }),
    missing("enox4-t4", "Quelle lettre manque ? (« douze »)", "twel", "e", "v", ["v", "f", "w"]),
    speak("enox4-t5", "How old are you?", "I'm thirty.", "J'ai trente ans.", { help: "Réponds à voix haute : quel âge as-tu ?" }),
    choice("enox4-t6", "Comment demander « Ce sont tes amis ? »", [
      ["Are they your friends?", true],
      ["They are your friends?", false],
      ["Is they your friends?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bike-bell",
    itemName: "Sonnette de vélo",
    itemNameRu: "Bike bell",
    ru: "Hooray! A bike bell!",
    en: "Hourra ! Une sonnette de vélo !",
    a11y: "Une petite sonnette de vélo brillante posée sur le rebord de la fenêtre.",
    image: p("bike-bell"),
    steps: ["À Oxford, tout le monde roule à vélo.", "Le voisin de Priya offre à Murzik une vieille sonnette.", "Dring-dring !", "Murzik sonne tous les matins."],
    bridge: "Murzik veut trouver la bibliothèque tout seul. Mais est-ce loin ?",
  },
};

const oxford5: Lesson = {
  id: "en-a1-oxford-5",
  level: "A1",
  cityId: "en-oxford",
  number: 5,
  title: "Is it far? — C'est loin ?",
  minutes: 7,
  goals: ["Demander où se trouve un lieu", "Dire « ici », « là-bas », « près », « loin »", "Dire « ne… pas » : isn't, aren't, I'm not"],
  vocabNote: "La négation avec to be, c'est juste not : is not = isn't, are not = aren't, I am not = I'm not. Un seul mot — bien plus simple que « ne… pas » !",
  vocab: [
    v("enox5-1", "Where is the library?", "Où est la bibliothèque ?", "Murzik est à un carrefour avec une pile de livres.", "Écouter Where is the library", p("l5-1"), "[ouèr iz eu laï-bre-ri]"),
    v("enox5-2", "Is it far?", "C'est loin ?", "Murzik regarde au loin la longue rue.", "Écouter Is it far", p("l5-2"), "[iz it fa]"),
    v("enox5-3", "It isn't far.", "Ce n'est pas loin.", "Une passante montre la rue voisine de la main.", "Écouter It isn't far", p("l5-3"), "[it i-zent fa]"),
    v("enox5-4", "It's near.", "C'est tout près.", "Un bâtiment rond avec un dôme, juste à côté.", "Écouter It's near", p("l5-4"), "[its ni-eu]"),
    v("enox5-5", "It's over there.", "C'est là-bas.", "La passante montre du doigt un bâtiment au coin de la rue.", "Écouter It's over there", p("l5-5"), "[its eu-veu zè-eu]"),
    v("enox5-6", "I'm not a student.", "Je ne suis pas étudiant.", "Murzik secoue la tête à l'entrée, où un gardien vérifie les cartes d'étudiant.", "Écouter I'm not a student", p("l5-6"), "[aïm not eu stiou-dent]"),
    v("enox5-7", "They aren't open today.", "Ils sont fermés aujourd'hui.", "Sur la porte, une affichette avec un soleil barré.", "Écouter They aren't open today", p("l5-7"), "[zèi ant eu-peun teu-dèi]"),
  ],
  dialogue: {
    title: "Où est la bibliothèque ?",
    note: "Open — « ouvert », closed — « fermé ». Shop — « magasin, boutique ».",
    lines: [
      line("murzik", "Excuse me. Where is the library?", "Pardon. Où est la bibliothèque ?"),
      line("passerby", "It's over there. It isn't far.", "C'est là-bas. Ce n'est pas loin."),
      line("murzik", "Thank you! Is it open?", "Merci ! C'est ouvert ?"),
      line("passerby", "Yes, but only for students. Are you a student?", "Oui, mais seulement pour les étudiants. Tu es étudiant ?"),
      line("murzik", "No, I'm not a student.", "Non, je ne suis pas étudiant."),
      line("passerby", "The bookshops are near. And they're for everybody!", "Les librairies sont tout près. Et elles sont pour tout le monde !"),
    ],
    gist: choice("enox5-d1", "Pourquoi Murzik ne peut-il pas entrer à la bibliothèque ?", [
      ["Elle est réservée aux étudiants.", true],
      ["Elle est fermée.", false],
      ["Elle est très loin.", false],
    ]),
  },
  grammar: [
    {
      title: "La négation : isn't, aren't, I'm not",
      paragraphs: [
        "Pour dire « ne… pas », on met not après am / is / are : It is not far = It isn't far. They are not open = They aren't open. I am not = I'm not. Un seul mot au lieu de deux — « ne… pas » n'existe pas !",
        "Réponses courtes : Is it far? — No, it isn't. Are you a student? — No, I'm not.",
      ],
      examples: [
        { ru: "It isn't far. It's near.", en: "Ce n'est pas loin. C'est tout près." },
        { ru: "Are you a student? — No, I'm not.", en: "Tu es étudiant ? — Non." },
      ],
    },
  ],
  tasks: [
    choice("enox5-t1", "Comment dire « Ce n'est pas loin » ?", [
      ["It isn't far.", true],
      ["It not far.", false],
      ["It don't far.", false],
    ], { skill: "grammar" }),
    listen("enox5-t2", "Écoute. Où est-ce ?", "It's over there. It's near.", [
      ["Là-bas, tout près.", true],
      ["Très loin.", false],
      ["Ici, derrière la porte.", false],
    ]),
    match("enox5-t3", "Relie les paires.", [
      ["far", "loin"],
      ["near", "près"],
      ["open", "ouvert"],
      ["over there", "là-bas"],
    ], { skill: "words" }),
    spell("enox5-t4", "Assemble le mot « loin ».", "far", ["o"]),
    speak("enox5-t5", "Are you a teacher?", "No, I'm not. I'm a student.", "Non. Je suis étudiant.", { help: "Réponds à voix haute avec I'm not." }),
    choice("enox5-t6", "Comment dire « J'ai vingt ans » ?", [
      ["I'm twenty.", true],
      ["I have twenty.", false],
      ["I twenty years.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "books",
    itemName: "Pile de vieux livres",
    itemNameRu: "Old books",
    ru: "Hooray! Old books!",
    en: "Hourra ! De vieux livres !",
    a11y: "Sur l'étagère, une pile de vieux livres en reliure cuir, avec dessus un petit recueil de poésie anglaise.",
    image: p("books"),
    steps: ["À la librairie, le vendeur offre trois vieux livres à Murzik.", "« For a new reader! » — « Pour un nouveau lecteur ! »", "Murzik les pose sur l'étagère.", "Il ne peut pas encore les lire. Pas encore !"],
    bridge: "Le soir, Priya demande : « Murzik, what do you do? You're not a student… »",
  },
};

const oxford6: Lesson = {
  id: "en-a1-oxford-6",
  level: "A1",
  cityId: "en-oxford",
  number: 6,
  title: "Are you a student? — Tu es étudiant ?",
  minutes: 7,
  goals: ["Dire un métier", "Dire a student, a cook", "Demander le métier de quelqu'un"],
  vocabNote: "Devant le métier, l'anglais met toujours a : I'm a student, she's a teacher. C'est l'inverse du français, où l'on dit « je suis étudiant » sans article !",
  vocab: [
    v("enox6-1", "I'm a student.", "Je suis étudiante.", "Priya avec un sac à dos et une pile de cahiers.", "Écouter I'm a student", p("l6-1"), "[aïm eu stiou-dent]"),
    v("enox6-2", "Tom is a photographer.", "Tom est photographe.", "Tom photographie les tours du collège.", "Écouter Tom is a photographer", p("l6-2"), "[tom iz eu feu-to-gra-feu]"),
    v("enox6-3", "She's a teacher.", "Elle est professeure.", "Une femme à lunettes devant un tableau à craie.", "Écouter She's a teacher", p("l6-3"), "[chiz eu ti-tcheu]"),
    v("enox6-4", "Mrs Hope was a cook.", "Mme Hope était cuisinière.", "Une vieille photo : Mme Hope jeune, en toque blanche devant le fourneau.", "Écouter Mrs Hope was a cook", p("l6-4"), "[mi-siz heup ouoz eu kouk]"),
    v("enox6-5", "What's your job?", "Quel est ton métier ?", "Priya se penche vers Murzik, curieuse.", "Écouter What's your job", p("l6-5"), "[ouots ior djob]"),
    v("enox6-6", "I want to be a cook.", "Je veux être cuisinier.", "Murzik avec une petite toque de cuisinier sourit rêveusement.", "Écouter I want to be a cook", p("l6-6"), "[aï ouont tou bi eu kouk]"),
    v("enox6-7", "Good idea!", "Bonne idée !", "Priya applaudit.", "Écouter Good idea", p("l6-7"), "[goud aï-di-eu]"),
  ],
  dialogue: {
    title: "Une page du livre",
    note: "Was — « était » (le passé de is). Marmalade — la marmelade d'oranges : on en fait à Oxford depuis plus de cent ans.",
    lines: [
      line("priya", "Murzik, what's your job? You're not a student.", "Murzik, quel est ton métier ? Tu n'es pas étudiant."),
      line("murzik", "I'm not a cook yet… but I want to be a cook!", "Je ne suis pas encore cuisinier… mais je veux être cuisinier !"),
      line("priya", "Good idea! Mrs Hope was a cook. My gran was a cook too.", "Bonne idée ! Mme Hope était cuisinière. Ma mamie était cuisinière aussi."),
      line("priya", "And look — this is from Mrs Hope's book.", "Et regarde — ça vient du livre de Mme Hope."),
      line("murzik", "A page! The recipe for marmalade!", "Une page ! La recette de la marmelade !"),
      line("tom", "Murzik, it's your second page!", "Murzik, c'est ta deuxième page !"),
    ],
    gist: choice("enox6-d1", "Qu'offre Priya ?", [
      ["Une page du livre de Mme Hope.", true],
      ["Une toque de cuisinier.", false],
      ["Une photo d'elle.", false],
    ]),
  },
  grammar: [
    {
      title: "A devant le métier",
      paragraphs: [
        "Devant le nom d'une personne ou d'une chose au singulier, l'anglais met a : a student, a cook, a page. En français on dit « je suis étudiant » sans article — alors attention à ne pas l'oublier en anglais !",
        "Si le mot commence par une voyelle, a devient an : an artist, an engineer. On verra ça en détail dans la prochaine ville.",
      ],
      examples: [
        { ru: "Tom is a photographer.", en: "Tom est photographe." },
        { ru: "I'm not a teacher. I'm a student.", en: "Je ne suis pas professeur. Je suis étudiant." },
      ],
    },
  ],
  tasks: [
    choice("enox6-t1", "Comment dire « Elle est professeure » ?", [
      ["She's a teacher.", true],
      ["She's teacher.", false],
      ["She teacher.", false],
    ], { skill: "grammar" }),
    listen("enox6-t2", "Écoute. Qui est-il ?", "He's a cook.", [
      ["Cuisinier.", true],
      ["Étudiant.", false],
      ["Photographe.", false],
    ]),
    match("enox6-t3", "Relie les paires.", [
      ["a student", "étudiant"],
      ["a teacher", "professeur"],
      ["a cook", "cuisinier"],
      ["a photographer", "photographe"],
    ], { skill: "words" }),
    missing("enox6-t4", "Quelle lettre manque ? (« cuisinier »)", "co", "k", "o", ["o", "u", "a"]),
    speak("enox6-t5", "What's your job?", "I'm a teacher.", "Je suis professeur.", { help: "Réponds à voix haute : quel est ton métier ?" }),
    choice("enox6-t6", "On te demande : Is it far? Comment dire « Non » ?", [
      ["No, it isn't.", true],
      ["No, it is.", false],
      ["No, I'm not.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "marmalade",
    itemName: "Pot de marmelade d'Oxford",
    itemNameRu: "Marmalade",
    ru: "Hooray! A jar of marmalade!",
    en: "Hourra ! Un pot de marmelade !",
    a11y: "Un pot en verre de marmelade d'oranges épaisse avec des lamelles d'écorce, sur le couvercle un tissu à carreaux.",
    image: p("marmalade"),
    steps: ["Murzik et Priya cuisinent la marmelade avec la recette de la page.", "Toute la maison sent l'orange.", "Ça fait un pot entier !", "Dans la marge de la page — un mot de Mme Hope."],
    bridge: "Demain, Tom et Murzik partent. Priya est triste : « Already? » — « Déjà ? »",
  },
};

const oxford7: Lesson = {
  id: "en-a1-oxford-7",
  level: "A1",
  cityId: "en-oxford",
  number: 7,
  title: "Goodbye, Oxford! — Au revoir, Oxford !",
  minutes: 8,
  goals: ["Parler de toi : nom, pays, âge, métier", "Poser les mêmes questions à quelqu'un", "Revoir tous les mots d'Oxford"],
  vocabNote: "On revoit to be : I'm, you're, he's, she's, we're, they're. Et la négation : I'm not, isn't, aren't.",
  vocab: [
    v("enox7-1", "Tell me about yourself.", "Parle-moi de toi.", "Priya s'assoit en face de Murzik avec une tasse de thé.", "Écouter Tell me about yourself", p("l7-1"), "[tèl mi eu-baout ior-sèlf]"),
    v("enox7-2", "I'm six and I'm from Russia.", "J'ai six ans et je viens de Russie.", "Murzik montre six doigts et un petit globe.", "Écouter I'm six and I'm from Russia", p("l7-2"), "[aïm siks ènd aïm from racha]"),
    v("enox7-3", "Where is the next page?", "Où est la page suivante ?", "Murzik feuillette le livre de recettes avec ses pages vides.", "Écouter Where is the next page", p("l7-3"), "[ouèr iz eu nèkst pèidj]"),
    v("enox7-4", "It's in Bath.", "Elle est à Bath.", "Priya montre sur la carte une petite ville à l'ouest de Londres.", "Écouter It's in Bath", p("l7-4"), "[its in bass]"),
    v("enox7-5", "Come back soon!", "Reviens vite !", "Priya fait signe depuis le quai.", "Écouter Come back soon", p("l7-5"), "[keum bèk soun]"),
    v("enox7-6", "We'll miss you.", "Tu vas nous manquer.", "Les amis de Priya font tristement signe de la main.", "Écouter We'll miss you", p("l7-6"), "[ouil miss you]"),
    v("enox7-7", "Take care!", "Prends soin de toi !", "Priya serre Murzik dans ses bras pour dire au revoir.", "Écouter Take care", p("l7-7"), "[tèik kè-eu]"),
  ],
  dialogue: {
    title: "Sur le quai",
    note: "Next — « suivant ». Bath [bass] — une vieille ville avec des bains romains et des salons de thé.",
    lines: [
      line("murzik", "Priya, where is the next page?", "Priya, où est la page suivante ?"),
      line("priya", "Mrs Hope's list says: Mrs Green, Bath. She's a baker.", "La liste de Mme Hope dit : Mme Green, Bath. Elle est boulangère."),
      line("tom", "Bath isn't far. It's near!", "Bath n'est pas loin. C'est tout près !"),
      line("priya", "This teapot is for your café, Murzik.", "Cette théière est pour ton café, Murzik."),
      line("murzik", "Thank you, Priya! We'll miss you.", "Merci, Priya ! Tu vas nous manquer."),
      line("priya", "Come back soon! Take care!", "Revenez vite ! Prenez soin de vous !"),
    ],
    gist: choice("enox7-d1", "Où vont Murzik et Tom ?", [
      ["À Bath, chez Mme Green.", true],
      ["À Londres, chez Mme Hope.", false],
      ["En Inde.", false],
    ]),
  },
  grammar: [
    {
      title: "Se présenter",
      paragraphs: [
        "Tout ce qu'il faut pour parler de toi, c'est le verbe to be : My name is… I'm from… I'm … (âge). I'm a … (métier).",
        "Et pour les autres : He's from London. She's twenty. They're students. We're friends.",
      ],
      examples: [
        { ru: "My name is Priya. I'm twenty. I'm a student.", en: "Je m'appelle Priya. J'ai vingt ans. Je suis étudiante." },
        { ru: "Tom is from London. He's a photographer.", en: "Tom vient de Londres. Il est photographe." },
      ],
    },
  ],
  tasks: [
    listen("enox7-t1", "Examen d'écoute. Que raconte la jeune fille ?", "My name is Ana. I'm from Spain. I'm nineteen. I'm a student.", [
      ["Ana vient d'Espagne, elle a dix-neuf ans, elle est étudiante.", true],
      ["Ana vient d'Angleterre, elle a quatre-vingt-dix ans, elle est professeure.", false],
      ["Ana vient d'Inde, elle a neuf ans, elle est cuisinière.", false],
    ]),
    choice("enox7-t2", "Choisis la phrase sans erreur.", [
      ["He's a photographer.", true],
      ["He photographer.", false],
      ["He are a photographer.", false],
    ], { skill: "grammar" }),
    match("enox7-t3", "Relie les paires.", [
      ["next", "suivant"],
      ["Take care!", "Prends soin de toi !"],
      ["Come back soon!", "Reviens vite !"],
      ["We'll miss you.", "Tu vas nous manquer."],
    ], { skill: "words" }),
    spell("enox7-t4", "Assemble le mot « page ».", "page"),
    speak("enox7-t5", "Tell me about yourself.", "My name is Alex. I'm from Russia. I'm a teacher.", "Je m'appelle Alex. Je viens de Russie. Je suis professeur.", { help: "Présente-toi à voix haute : nom, pays, métier." }),
    script("enox7-t6", "Revois tout Oxford. Termine les conversations.", [
      { speaker: "Priya", text: "Where are you from?" },
      { speaker: "Toi", answer: "I'm from Russia.", options: ["I'm from Russia.", "I'm Russia.", "I from Russia."] },
      { speaker: "Priya", text: "How old are you?" },
      { speaker: "Toi", answer: "I'm thirty.", options: ["I'm thirty.", "I have thirty.", "I thirty."] },
      { speaker: "Priya", text: "Are you a student?" },
      { speaker: "Toi", answer: "No, I'm not. I'm a teacher.", options: ["No, I'm not. I'm a teacher.", "No, I'm not. I'm teacher.", "No, it isn't."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "teapot",
    itemName: "Théière à fleurs",
    itemNameRu: "Teapot",
    ru: "Hooray! A teapot!",
    en: "Hourra ! Une théière !",
    a11y: "Une théière en porcelaine bien ronde, décorée de petites fleurs roses avec un liseré doré.",
    image: p("teapot"),
    steps: ["Priya offre à Murzik la théière de sa mamie.", "« My gran's. For your café. » — « Celle de ma mamie. Pour ton café. »", "Elle est toute ronde, avec des petites fleurs.", "Murzik l'enveloppe soigneusement dans son écharpe."],
    bridge: "La page suivante est à Bath, chez Mme Green.",
  },
};

const story: CityStory = {
  home: {
    name: "Chambre en résidence étudiante",
    nameRu: "Murzik's room in Oxford",
    image: p("home"),
    a11y: "Une petite chambre vide sous les toits dans une vieille résidence étudiante. Par la fenêtre, les tourelles de pierre des collèges. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "teapot",
  welcomeRu: "Hello, Oxford!",
  welcomeEn: "Bonjour, Oxford !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Oxford : de vieux bâtiments de pierre avec des tourelles, des étudiants à vélo.",
  departureImage: p("departure"),
  departureA11y: "Priya et ses amis font des signes d'au revoir à la gare d'Oxford.",
  finale: [
    {
      image: p("page"),
      a11y: "Gros plan : la deuxième page du livre de recettes, la recette de la marmelade. Dans la marge, un mot écrit à la main.",
      lines: [
        { en: "Le soir, Murzik colle la page dans le livre. Dans la marge — un mot de Mme Hope :" },
        { ru: "At my café, the window table was for people who were alone.", en: "Dans mon café, la table près de la fenêtre était pour ceux qui venaient seuls." },
        { en: "Murzik se dit : « Belle règle. Chez moi, ce sera pareil »." },
      ],
    },
    {
      image: p("teapot"),
      a11y: "Murzik fait le tour de sa chambre d'Oxford, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre à Oxford. Tom la photographie pour le journal." },
        { en: "Pour son futur café, il emporte la théière à fleurs." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "Oxford complete!", en: "Oxford terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Priya fait signe de la main pour dire au revoir.",
      lines: [
        { ru: "Goodbye, Priya!", en: "Au revoir, Priya !" },
        { ru: "Next stop: Bath!", en: "Prochain arrêt : Bath !" },
      ],
    },
    {
      image: p("train"),
      a11y: "Le train roule vers l'ouest entre collines vertes et petits villages.",
      lines: [{ ru: "Oxford → Bath", en: "Oxford → Bath" }],
    },
    {
      image: pic("en/bath/arrival"),
      a11y: "Murzik et Tom à Bath : des maisons en pierre couleur miel en demi-cercle, de vieux bains romains avec de la vapeur au-dessus.",
      lines: [
        { ru: "Hello, Bath!", en: "Bonjour, Bath !" },
        { ru: "It smells of bread!", en: "Ça sent le pain !" },
      ],
    },
  ],
};

export const enOxfordFr = {
  id: "en-oxford",
  name: "Oxford",
  nameEn: "Oxford",
  lessons: [oxford1, oxford2, oxford3, oxford4, oxford5, oxford6, oxford7],
  story,
};
