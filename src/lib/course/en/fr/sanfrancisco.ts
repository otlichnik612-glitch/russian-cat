import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * San Francisco · « Le travail » · lessons 1–7 — French version of ../sanfrancisco.ts.
 * Same story, same English phrases and pictures; explanations, translations
 * and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/sanfrancisco/${name}`);

const sanfrancisco1: Lesson = {
  id: "en-a1-sanfrancisco-1",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 1,
  title: "What do you do? — Quel est ton métier ?",
  minutes: 7,
  goals: ["Demander le métier : What do you do?", "Nommer les professions", "Dire où tu travailles"],
  vocabNote: "What do you do? — c'est comme ça qu'on demande le métier (littéralement « Qu'est-ce que tu fais ? »). Devant la profession — a ou an : a doctor, an engineer.",
  vocab: [
    v("ensf1-1", "What do you do?", "Quel est ton métier ?", "Murzik, une tasse de café à la patte, interroge le patron du coffee-shop.", "Écouter What do you do", p("l1-1")),
    v("ensf1-2", "I was a programmer.", "J'étais programmeur.", "Une vieille photo : Daniel devant un ordinateur à trois écrans.", "Écouter I was a programmer", p("l1-2")),
    v("ensf1-3", "Now I'm a barista.", "Maintenant, je suis barista.", "Daniel, en tablier, dessine un cœur sur le café.", "Écouter Now I'm a barista", p("l1-3")),
    v("ensf1-4", "She's a doctor.", "Elle est médecin.", "Une femme en blouse blanche avec un stéthoscope.", "Écouter She's a doctor", p("l1-4")),
    v("ensf1-5", "He's an engineer.", "Il est ingénieur.", "Un homme avec un casque regarde le plan d'un grand pont.", "Écouter He's an engineer", p("l1-5")),
    v("ensf1-6", "I work in an office.", "Je travaille dans un bureau.", "Un bureau lumineux avec des ordinateurs.", "Écouter I work in an office", p("l1-6")),
    v("ensf1-7", "I work from home.", "Je travaille depuis chez moi.", "Une femme avec un ordinateur portable sur le canapé, un chat à côté.", "Écouter I work from home", p("l1-7")),
  ],
  dialogue: {
    title: "Daniel",
    note: "Daniel est le patron d'un petit coffee-shop sur la colline. Avant, il était programmeur. Happier — « plus heureux ».",
    lines: [
      line("daniel", "Welcome to my coffee shop! I'm Daniel.", "Bienvenue dans mon coffee-shop ! Moi, c'est Daniel."),
      line("murzik", "Hello, Daniel! What do you do? Are you a barista?", "Bonjour, Daniel ! Quel est votre métier ? Vous êtes barista ?"),
      line("daniel", "Now I'm a barista. But I was a programmer. I worked in an office.", "Maintenant oui, barista. Mais j'étais programmeur. Je travaillais dans un bureau."),
      line("tom", "Why a coffee shop?", "Pourquoi un coffee-shop ?"),
      line("daniel", "I'm happier here! People come, we talk… And what do you do, Tom?", "Je suis plus heureux ici ! Les gens viennent, on discute… Et toi, Tom, quel est ton métier ?"),
      line("tom", "I'm a photographer. I work for a magazine.", "Je suis photographe. Je travaille pour un magazine."),
    ],
    gist: choice("ensf1-d1", "Quel était le métier de Daniel avant ?", [
      ["Programmeur.", true],
      ["Médecin.", false],
      ["Photographe.", false],
    ]),
  },
  grammar: [
    {
      title: "Le métier : a / an et What do you do?",
      paragraphs: [
        "Pour la profession : I'm a teacher. She's a doctor. He's an engineer (an — devant un son voyelle). Attention, différence importante avec le français : on dit « je suis professeur » SANS article, mais en anglais, a / an est obligatoire !",
        "Où tu travailles : I work in an office / in a shop / in a hospital / from home. « Travailler pour quelqu'un » : I work for a magazine.",
      ],
      examples: [
        { ru: "What do you do? — I'm a nurse. I work in a hospital.", en: "Quel est ton métier ? — Je suis infirmière. Je travaille à l'hôpital." },
        { ru: "My brother is an artist.", en: "Mon frère est artiste." },
      ],
    },
  ],
  tasks: [
    choice("ensf1-t1", "Comment dire « Il est ingénieur » ?", [
      ["He's an engineer.", true],
      ["He's a engineer.", false],
      ["He engineer.", false],
    ], { skill: "grammar" }),
    listen("ensf1-t2", "Écoute. Où travaille-t-elle ?", "She's a teacher. She works in a school.", [
      ["Dans une école.", true],
      ["À l'hôpital.", false],
      ["Dans un bureau.", false],
    ]),
    match("ensf1-t3", "Relie les paires.", [
      ["doctor", "médecin"],
      ["engineer", "ingénieur"],
      ["programmer", "programmeur"],
      ["office", "bureau"],
    ], { skill: "words" }),
    missing("ensf1-t4", "Quelle lettre manque ? (« médecin »)", "doct", "r", "o", ["o", "e", "a"]),
    speak("ensf1-t5", "What do you do?", "I'm a teacher. I work in a school.", "Je suis professeur. Je travaille dans une école.", { help: "Raconte à voix haute ton métier et où tu travailles." }),
    choice("ensf1-t6", "On t'a invité à un concert. Comment accepter poliment ?", [
      ["I'd love to!", true],
      ["I love to!", false],
      ["Sorry, I can't.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "grinder",
    itemName: "Moulin à café",
    itemNameRu: "Coffee grinder",
    ru: "Hooray! A coffee grinder!",
    en: "Hourra ! Un moulin à café !",
    a11y: "Un vieux moulin à café en bois avec une manivelle en cuivre et un petit tiroir en bas.",
    image: p("grinder"),
    steps: ["Daniel montre à Murzik sa chambre au-dessus du coffee-shop.", "Sur l'étagère — un vieux moulin à café à manivelle.", "« My first one! From my programmer days. » — « Mon premier ! De l'époque où j'étais programmeur. »", "Murzik tourne la manivelle : cric-crac, ça sent le café."],
    bridge: "Daniel demande : « Murzik, can you make coffee? »",
  },
};

const sanfrancisco2: Lesson = {
  id: "en-a1-sanfrancisco-2",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 2,
  title: "I can cook — Je sais cuisiner",
  minutes: 7,
  goals: ["Dire ce que tu sais faire : I can", "Dire ce que tu ne sais pas faire : I can't", "Demander : Can you…?"],
  vocabNote: "Can — « savoir, pouvoir ». Après can, le verbe est sans to et sans -s : I can swim, she can swim (pas « she cans swims »). « Ne pas savoir » — can't.",
  vocab: [
    v("ensf2-1", "Can you make coffee?", "Tu sais faire du café ?", "Daniel montre la grosse machine à café.", "Écouter Can you make coffee", p("l2-1")),
    v("ensf2-2", "Yes, I can.", "Oui, je sais.", "Murzik hoche la tête avec assurance.", "Écouter Yes, I can", p("l2-2")),
    v("ensf2-3", "No, I can't.", "Non, je ne sais pas.", "Murzik secoue la tête, gêné.", "Écouter No, I can't", p("l2-3")),
    v("ensf2-4", "I can cook.", "Je sais cuisiner.", "Murzik, en toque, retourne une crêpe.", "Écouter I can cook", p("l2-4")),
    v("ensf2-5", "I can't drive.", "Je ne sais pas conduire.", "Murzik au volant d'une voiture jouet écarte les pattes.", "Écouter I can't drive", p("l2-5")),
    v("ensf2-6", "She can speak three languages.", "Elle sait parler trois langues.", "Une jeune femme, au-dessus d'elle des bulles avec des mots en trois langues.", "Écouter She can speak three languages", p("l2-6")),
    v("ensf2-7", "I can draw a heart.", "Je sais dessiner un cœur.", "Un cœur dessiné sur la mousse d'un cappuccino.", "Écouter I can draw a heart", p("l2-7")),
  ],
  dialogue: {
    title: "La leçon de café",
    note: "Latte art — les dessins sur la mousse de lait du café. Teach — « apprendre, enseigner ».",
    lines: [
      line("daniel", "Murzik, can you make coffee?", "Murzik, tu sais faire du café ?"),
      line("murzik", "No, I can't. But I can make tea! And I can cook.", "Non. Mais je sais faire du thé ! Et je sais cuisiner."),
      line("daniel", "Good! I can teach you. Can you draw?", "Bien ! Je peux t'apprendre. Tu sais dessiner ?"),
      line("murzik", "A little. Why?", "Un peu. Pourquoi ?"),
      line("daniel", "Look — latte art! I can draw a heart on coffee.", "Regarde — le latte art ! Je sais dessiner un cœur sur le café."),
      line("murzik", "Wow! Can I try?", "Ouah ! Je peux essayer ?"),
    ],
    gist: choice("ensf2-d1", "Que ne sait pas encore faire Murzik ?", [
      ["Le café.", true],
      ["Le thé.", false],
      ["Cuisiner.", false],
    ]),
  },
  grammar: [
    {
      title: "Can / can't",
      paragraphs: [
        "Can est pareil pour tout le monde : I can, you can, he can, they can. Après can — le verbe à la base : She can swim. En français, on distingue « savoir » et « pouvoir » ; en anglais, can fait les deux.",
        "Question — can en premier : Can you drive? Réponse : Yes, I can. / No, I can't.",
      ],
      examples: [
        { ru: "My mum can play the piano.", en: "Ma maman sait jouer du piano." },
        { ru: "Can he swim? — No, he can't.", en: "Il sait nager ? — Non." },
      ],
    },
  ],
  tasks: [
    choice("ensf2-t1", "Comment dire « Elle sait nager » ?", [
      ["She can swim.", true],
      ["She cans swim.", false],
      ["She can swims.", false],
    ], { skill: "grammar" }),
    listen("ensf2-t2", "Écoute. Que ne sait-il pas faire ?", "I can cook, but I can't drive.", [
      ["Conduire.", true],
      ["Cuisiner.", false],
      ["Nager.", false],
    ]),
    match("ensf2-t3", "Relie les paires.", [
      ["drive", "conduire"],
      ["draw", "dessiner"],
      ["swim", "nager"],
      ["teach", "enseigner"],
    ], { skill: "words" }),
    missing("ensf2-t4", "Quelle lettre manque ? (« ne peux pas »)", "ca", "'t", "n", ["n", "m", "t"]),
    speak("ensf2-t5", "What can you do?", "I can cook and I can speak English. I can't drive.", "Je sais cuisiner et parler anglais. Je ne sais pas conduire.", { help: "Raconte à voix haute ce que tu sais faire et ce que tu ne sais pas faire." }),
    choice("ensf2-t6", "Comment demander « Quel est ton métier ? »", [
      ["What do you do?", true],
      ["What are you do?", false],
      ["What is your do?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "beans",
    itemName: "Sachet de grains de café",
    itemNameRu: "Coffee beans",
    ru: "Hooray! A bag of coffee beans!",
    en: "Hourra ! Un sachet de grains de café !",
    a11y: "Un sachet en toile, plein de grains de café sombres et brillants, fermé par une ficelle.",
    image: p("beans"),
    steps: ["Toute la soirée, Murzik apprend à faire du café.", "La première tasse — amère. La deuxième — mieux !", "La dixième — parfaite !", "Daniel lui offre un sachet de grains frais."],
    bridge: "Le matin, Murzik a plein de demandes pour Daniel — et Daniel pour Murzik.",
  },
};

const sanfrancisco3: Lesson = {
  id: "en-a1-sanfrancisco-3",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 3,
  title: "Can you help me? — Tu peux m'aider ?",
  minutes: 7,
  goals: ["Demander de l'aide : Can you…?", "Demander la permission : Can I…?", "Répondre : Sure! / Sorry, no."],
  vocabNote: "Can you…? — une demande : « Tu peux… ? » Can I…? — une permission : « Je peux… ? » Réponse : Sure! Of course! ou Sorry, you can't.",
  vocab: [
    v("ensf3-1", "Can you help me?", "Tu peux m'aider ?", "Daniel tient un énorme carton de tasses.", "Écouter Can you help me", p("l3-1")),
    v("ensf3-2", "Sure!", "Bien sûr !", "Murzik accourt et soutient le carton par en dessous.", "Écouter Sure", p("l3-2")),
    v("ensf3-3", "Can I sit here?", "Je peux m'asseoir ici ?", "Un client montre une chaise libre près de la fenêtre.", "Écouter Can I sit here", p("l3-3")),
    v("ensf3-4", "Can you open the window?", "Tu peux ouvrir la fenêtre ?", "Murzik s'étire sur la pointe des pattes vers la fenêtre.", "Écouter Can you open the window", p("l3-4")),
    v("ensf3-5", "Can I use your phone?", "Je peux utiliser ton téléphone ?", "Une jeune femme montre le téléphone de Tom.", "Écouter Can I use your phone", p("l3-5")),
    v("ensf3-6", "Sorry, you can't.", "Désolé, ce n'est pas possible.", "Une pancarte « entrée interdite » sur la porte de la cuisine.", "Écouter Sorry, you can't", p("l3-6")),
    v("ensf3-7", "No problem!", "Pas de problème !", "Murzik lève le pouce.", "Écouter No problem", p("l3-7")),
  ],
  dialogue: {
    title: "Le matin au coffee-shop",
    note: "Fog — « brouillard », le célèbre brouillard de San Francisco.",
    lines: [
      line("daniel", "Murzik, can you help me with this box?", "Murzik, tu peux m'aider avec ce carton ?"),
      line("murzik", "Sure!", "Bien sûr !"),
      line("passerby", "Excuse me, can I sit here?", "Excusez-moi, je peux m'asseoir ici ?"),
      line("murzik", "Of course! Can I get you a coffee?", "Bien sûr ! Je vous apporte un café ?"),
      line("passerby", "Yes, please. And can you open the window? It's warm.", "Oui, s'il vous plaît. Et vous pouvez ouvrir la fenêtre ? Il fait chaud."),
      line("murzik", "No problem! Oh… the fog is coming in!", "Pas de problème ! Oh… le brouillard entre !"),
      line("passerby", "Ha-ha! Can you close it again, please?", "Ha-ha ! Vous pouvez la refermer, s'il vous plaît ?"),
    ],
    gist: choice("ensf3-d1", "Pourquoi referme-t-on la fenêtre ?", [
      ["Le brouillard entre dans le coffee-shop.", true],
      ["Il fait chaud.", false],
      ["Il y a du bruit dans la rue.", false],
    ]),
  },
  grammar: [
    {
      title: "Can you…? Can I…?",
      paragraphs: [
        "La demande : Can you help me? Can you open the window, please? La permission : Can I sit here? Can I use your phone?",
        "Réponses : Sure! Of course! No problem! Ou refuser poliment : Sorry, you can't.",
      ],
      examples: [
        { ru: "Can you pass the sugar, please? — Sure!", en: "Tu peux passer le sucre, s'il te plaît ? — Bien sûr !" },
        { ru: "Can I take a photo? — Of course!", en: "Je peux prendre une photo ? — Bien sûr !" },
      ],
    },
  ],
  tasks: [
    choice("ensf3-t1", "Comment demander la permission de s'asseoir ?", [
      ["Can I sit here?", true],
      ["Can you sit here?", false],
      ["I can sit here?", false],
    ], { skill: "grammar" }),
    listen("ensf3-t2", "Écoute. Que demande-t-on ?", "Can you close the door, please?", [
      ["De fermer la porte.", true],
      ["D'ouvrir la fenêtre.", false],
      ["De s'asseoir ici.", false],
    ]),
    match("ensf3-t3", "Relie les paires.", [
      ["Sure!", "Bien sûr !"],
      ["No problem!", "Pas de problème !"],
      ["open", "ouvrir"],
      ["close", "fermer"],
    ], { skill: "words" }),
    spell("ensf3-t4", "Assemble les lettres du mot « fenêtre ».", "window"),
    speak("ensf3-t5", "Can you help me?", "Sure! No problem!", "Bien sûr ! Pas de problème !", { help: "Réponds à voix haute à la demande." }),
    choice("ensf3-t6", "Comment dire « Je ne sais pas conduire » ?", [
      ["I can't drive.", true],
      ["I don't can drive.", false],
      ["I can't to drive.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ficus",
    itemName: "Ficus en bac",
    itemNameRu: "Ficus",
    ru: "Hooray! A ficus!",
    en: "Hourra ! Un ficus !",
    a11y: "Un grand ficus aux feuilles brillantes, dans un bac en bois, dans un coin.",
    image: p("ficus"),
    steps: ["La cliente revient — avec un cadeau.", "« For the helpful cat! » — « Pour le chat serviable ! »", "C'est un ficus dans un bac en bois.", "Murzik le met dans le coin, près de la fenêtre."],
    bridge: "Daniel dit : « Tomorrow is your first day at work! »",
  },
};

const sanfrancisco4: Lesson = {
  id: "en-a1-sanfrancisco-4",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 4,
  title: "My first day — Mon premier jour",
  minutes: 7,
  goals: ["Comprendre les consignes au travail", "Dire « ne t'inquiète pas », « attention »", "Nommer les objets du travail"],
  vocabNote: "Les consignes — le verbe d'abord : Wash the cups. Be careful! Don't worry! — « Ne t'inquiète pas ! » Customer — « client ».",
  vocab: [
    v("ensf4-1", "Here's your apron.", "Voici ton tablier.", "Daniel tend un petit tablier vert à Murzik.", "Écouter Here's your apron", p("l4-1")),
    v("ensf4-2", "Wash the cups, please.", "Lave les tasses, s'il te plaît.", "Murzik devant l'évier avec une montagne de tasses.", "Écouter Wash the cups, please", p("l4-2")),
    v("ensf4-3", "Be careful! It's hot!", "Fais attention ! C'est chaud !", "De la vapeur sort de la machine à café.", "Écouter Be careful! It's hot", p("l4-3")),
    v("ensf4-4", "Don't worry!", "Ne t'inquiète pas !", "Daniel tape gentiment l'épaule de Murzik.", "Écouter Don't worry", p("l4-4")),
    v("ensf4-5", "a customer", "un client", "Une femme avec un ordinateur portable entre dans le coffee-shop.", "Écouter a customer", p("l4-5")),
    v("ensf4-6", "the coffee machine", "la machine à café", "Une grosse machine à café brillante avec des leviers.", "Écouter the coffee machine", p("l4-6")),
    v("ensf4-7", "Smile and say hello.", "Souris et dis bonjour.", "Murzik sourit largement au client.", "Écouter Smile and say hello", p("l4-7")),
  ],
  dialogue: {
    title: "Le premier jour de travail",
    note: "Broke — « cassé » (passé de break). Happens — « ça arrive ».",
    lines: [
      line("daniel", "Good morning! Here's your apron. First, wash the cups, please.", "Bonjour ! Voici ton tablier. D'abord, lave les tasses, s'il te plaît."),
      line("murzik", "OK! And then?", "D'accord ! Et ensuite ?"),
      line("daniel", "Then help me with the coffee machine. Be careful! It's hot!", "Ensuite, aide-moi avec la machine à café. Fais attention ! C'est chaud !"),
      line("daniel", "And when a customer comes in — smile and say hello.", "Et quand un client entre — souris et dis bonjour."),
      line("murzik", "Oh no! I broke a cup!", "Oh non ! J'ai cassé une tasse !"),
      line("daniel", "Don't worry! It happens. It's your first day!", "Ne t'inquiète pas ! Ça arrive. C'est ton premier jour !"),
    ],
    gist: choice("ensf4-d1", "Que s'est-il passé le premier jour ?", [
      ["Murzik a cassé une tasse.", true],
      ["Murzik s'est brûlé.", false],
      ["La machine à café est en panne.", false],
    ]),
  },
  grammar: [
    {
      title: "Les consignes : Wash! Be careful! Don't worry!",
      paragraphs: [
        "La consigne — le verbe d'abord : Wash the cups. Help me. Smile! Avec be : Be careful! Be quiet! En français aussi, on utilise l'impératif : « lave les tasses ! ».",
        "L'interdiction ou le réconfort — Don't + verbe : Don't worry! Don't touch! Don't run! En français : « ne t'inquiète pas », « ne touche pas » — deux morceaux autour du verbe ; en anglais, don't suffit devant.",
      ],
      examples: [
        { ru: "Please close the door.", en: "Ferme la porte, s'il te plaît." },
        { ru: "Don't touch! It's hot!", en: "Ne touche pas ! C'est chaud !" },
      ],
    },
  ],
  tasks: [
    choice("ensf4-t1", "Comment dire « Ne t'inquiète pas ! » ?", [
      ["Don't worry!", true],
      ["No worry!", false],
      ["Not worry!", false],
    ], { skill: "grammar" }),
    listen("ensf4-t2", "Écoute. Que faut-il faire ?", "Please wash the cups and clean the tables.", [
      ["Laver les tasses et essuyer les tables.", true],
      ["Faire du café.", false],
      ["Accueillir le client.", false],
    ]),
    match("ensf4-t3", "Relie les paires.", [
      ["apron", "tablier"],
      ["customer", "client"],
      ["careful", "prudent"],
      ["wash", "laver"],
    ], { skill: "words" }),
    missing("ensf4-t4", "Quelle lettre manque ? (« tablier »)", "apr", "n", "o", ["o", "a", "u"]),
    speak("ensf4-t5", "I broke a cup! Sorry!", "Don't worry! It happens.", "Ne t'inquiète pas ! Ça arrive.", { help: "Rassure à voix haute." }),
    choice("ensf4-t6", "Comment demander « Tu peux ouvrir la fenêtre ? »", [
      ["Can you open the window?", true],
      ["Can I open you the window?", false],
      ["You can open window?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "apron",
    itemName: "Tablier vert",
    itemNameRu: "Apron",
    ru: "Hooray! My own apron!",
    en: "Hourra ! Mon propre tablier !",
    a11y: "Un petit tablier vert foncé avec une poche, accroché à un crochet ; un crayon dépasse de la poche.",
    image: p("apron"),
    steps: ["Le soir, Daniel dit : « Good job! The apron is yours ».", "« Beau travail ! Le tablier est à toi. »", "Murzik l'accroche au crochet.", "Sa première vraie tenue de travail !"],
    bridge: "Le deuxième jour, Murzik a énormément de choses à faire.",
  },
};

const sanfrancisco5: Lesson = {
  id: "en-a1-sanfrancisco-5",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 5,
  title: "At work — Au travail",
  minutes: 7,
  goals: ["Dire : I'm busy, I'm tired", "Proposer une pause", "Féliciter : Good job!"],
  vocabNote: "Take a break — « faire une pause ». Good job! / Well done! — « Bravo ! Beau travail ! »",
  vocab: [
    v("ensf5-1", "I'm busy right now.", "Je suis occupé là.", "Murzik tient une tasse dans chaque patte, une autre sur la tête.", "Écouter I'm busy right now", p("l5-1")),
    v("ensf5-2", "I'm tired.", "Je suis fatigué.", "Murzik assis sur une marche, les oreilles baissées.", "Écouter I'm tired", p("l5-2")),
    v("ensf5-3", "Let's take a break.", "On fait une pause ?", "Daniel pose sur la table deux tasses et une assiette de cookies.", "Écouter Let's take a break", p("l5-3")),
    v("ensf5-4", "Good job!", "Beau travail !", "Daniel lève le pouce vers Murzik.", "Écouter Good job", p("l5-4")),
    v("ensf5-5", "What time do you finish?", "Tu finis à quelle heure ?", "Tom passe la tête dans le coffee-shop.", "Écouter What time do you finish", p("l5-5")),
    v("ensf5-6", "I finish at four.", "Je finis à quatre heures.", "L'horloge murale indique presque quatre heures.", "Écouter I finish at four", p("l5-6")),
    v("ensf5-7", "I love my job!", "J'adore mon travail !", "Murzik, en tablier, rayonne derrière le comptoir.", "Écouter I love my job", p("l5-7")),
  ],
  dialogue: {
    title: "La pause",
    note: "Right now — « là, tout de suite ». Cable car — le vieux tramway à câble, symbole de San Francisco.",
    lines: [
      line("tom", "Murzik! Can you talk?", "Murzik ! Tu peux parler ?"),
      line("murzik", "Sorry, I'm busy right now!", "Désolé, je suis occupé là !"),
      line("daniel", "Murzik, you're tired. Let's take a break.", "Murzik, tu es fatigué. On fait une pause."),
      line("tom", "What time do you finish?", "Tu finis à quelle heure ?"),
      line("murzik", "I finish at four. Then let's ride the cable car!", "À quatre heures. Ensuite, on monte dans le tramway à câble !"),
      line("daniel", "Good job today, Murzik!", "Beau travail aujourd'hui, Murzik !"),
      line("murzik", "Thank you! I love my job!", "Merci ! J'adore mon travail !"),
    ],
    gist: choice("ensf5-d1", "À quelle heure Murzik finit-il le travail ?", [
      ["À quatre heures.", true],
      ["À six heures.", false],
      ["À deux heures.", false],
    ]),
  },
  grammar: [
    {
      title: "Au travail : d'habitude et maintenant",
      paragraphs: [
        "D'habitude : I start at eight. I finish at four. Maintenant : I'm working. I'm busy right now.",
        "Let's — pour proposer quelque chose ensemble : Let's take a break. Let's have lunch. Comme « on fait une pause ? » en français.",
      ],
      examples: [
        { ru: "I usually finish at five, but today I'm working late.", en: "D'habitude, je finis à cinq heures, mais aujourd'hui je travaille tard." },
        { ru: "Let's have a coffee!", en: "On prend un café ?" },
      ],
    },
  ],
  tasks: [
    choice("ensf5-t1", "Comment proposer une pause ?", [
      ["Let's take a break.", true],
      ["Let's to take a break.", false],
      ["Let take a break.", false],
    ], { skill: "grammar" }),
    listen("ensf5-t2", "Écoute. Pourquoi ne peut-il pas parler ?", "Sorry, I'm busy right now.", [
      ["Il est occupé là.", true],
      ["Il est fatigué.", false],
      ["Il a déjà fini le travail.", false],
    ]),
    match("ensf5-t3", "Relie les paires.", [
      ["busy", "occupé"],
      ["tired", "fatigué"],
      ["break", "pause"],
      ["Good job!", "Beau travail !"],
    ], { skill: "words" }),
    spell("ensf5-t4", "Assemble les lettres du mot « travail ».", "job"),
    speak("ensf5-t5", "What time do you finish work?", "I finish at six.", "Je finis à six heures.", { help: "Dis à voix haute à quelle heure tu finis le travail ou l'école." }),
    choice("ensf5-t6", "Comment dire « Attention ! C'est chaud ! » ?", [
      ["Be careful! It's hot!", true],
      ["Careful you! Hot!", false],
      ["Are careful! It's hot!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cable-car",
    itemName: "Carte postale du tramway",
    itemNameRu: "Cable car postcard",
    ru: "Hooray! A cable car postcard!",
    en: "Hourra ! Une carte postale du tramway à câble !",
    a11y: "Une carte postale : un vieux tramway rouge et marron grimpe une rue en pente raide, au loin la baie bleue.",
    image: p("cable-car"),
    steps: ["Le soir, Murzik et Tom montent dans le tramway à câble.", "En haut, en bas, encore en haut !", "Le conducteur offre une carte postale à Murzik.", "La carte postale trône sur l'étagère."],
    bridge: "Le soir, Murzik interroge Tom sur son travail.",
  },
};

const sanfrancisco6: Lesson = {
  id: "en-a1-sanfrancisco-6",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 6,
  title: "Tom's job — Le métier de Tom",
  minutes: 7,
  goals: ["Raconter le métier de quelqu'un d'autre", "Demander : What does he do?", "Parler des études : I study"],
  vocabNote: "Pour quelqu'un d'autre : What does she do? — She's a nurse. She works in a hospital. Study — « étudier » : I study at university.",
  vocab: [
    v("ensf6-1", "What does Tom do?", "Quel est le métier de Tom ?", "Murzik montre Tom et son appareil photo.", "Écouter What does Tom do", p("l6-1")),
    v("ensf6-2", "He takes photos for a magazine.", "Il prend des photos pour un magazine.", "La couverture d'un magazine avec une photo du pont rouge.", "Écouter He takes photos for a magazine", p("l6-2")),
    v("ensf6-3", "He travels a lot.", "Il voyage beaucoup.", "La valise de Tom couverte d'autocollants de villes.", "Écouter He travels a lot", p("l6-3")),
    v("ensf6-4", "Does he like his job?", "Il aime son travail ?", "Daniel regarde Tom avec curiosité.", "Écouter Does he like his job", p("l6-4")),
    v("ensf6-5", "I study at university.", "J'étudie à l'université.", "Une étudiante avec un sac à dos devant la vieille université.", "Écouter I study at university", p("l6-5")),
    v("ensf6-6", "What do you study?", "Qu'est-ce que tu étudies ?", "Daniel se penche vers l'étudiante au comptoir.", "Écouter What do you study", p("l6-6")),
    v("ensf6-7", "It's my dream.", "C'est mon rêve.", "Murzik, en tablier, regarde au loin, rêveur.", "Écouter It's my dream", p("l6-7")),
  ],
  dialogue: {
    title: "Parler boulot",
    note: "Art — « l'art ». Dream — « rêve ».",
    lines: [
      line("daniel", "Murzik, what does Tom do?", "Murzik, et Tom, quel est son métier ?"),
      line("murzik", "He's a photographer. He takes photos for a magazine. He travels a lot.", "Il est photographe. Il prend des photos pour un magazine. Il voyage beaucoup."),
      line("daniel", "Does he like his job?", "Il aime son travail ?"),
      line("tom", "Yes, I do! I love it.", "Oui ! Je l'adore."),
      line("daniel", "And my new assistant, Lily, studies art at university.", "Et ma nouvelle assistante, Lily, étudie les beaux-arts à l'université."),
      line("murzik", "And I want to be a cook. It's my dream!", "Et moi, je veux devenir cuisinier. C'est mon rêve !"),
    ],
    gist: choice("ensf6-d1", "Qu'étudie Lily ?", [
      ["Les beaux-arts.", true],
      ["La programmation.", false],
      ["La cuisine.", false],
    ]),
  },
  grammar: [
    {
      title: "Le métier d'un autre",
      paragraphs: [
        "What does he / she do? — He's a photographer. He works for a magazine. She studies at university.",
        "N'oublie pas le -s : he takes, he travels, she studies (y → ies). Question : Does he like his job? — Yes, he does.",
      ],
      examples: [
        { ru: "What does your sister do? — She's a doctor.", en: "Ta sœur, quel est son métier ? — Elle est médecin." },
        { ru: "My brother studies music.", en: "Mon frère étudie la musique." },
      ],
    },
  ],
  tasks: [
    choice("ensf6-t1", "Comment demander « Quel est le métier de ton papa ? »", [
      ["What does your dad do?", true],
      ["What do your dad do?", false],
      ["What does your dad does?", false],
    ], { skill: "grammar" }),
    listen("ensf6-t2", "Écoute. Quel est le métier de sa maman ?", "My mum is a nurse. She works in a hospital.", [
      ["Infirmière à l'hôpital.", true],
      ["Professeur dans une école.", false],
      ["Médecin dans un bureau.", false],
    ]),
    match("ensf6-t3", "Relie les paires.", [
      ["study", "étudier"],
      ["university", "université"],
      ["travel", "voyager"],
      ["dream", "rêve"],
    ], { skill: "words" }),
    missing("ensf6-t4", "Quelle lettre manque ? (« elle étudie »)", "she stud", "es", "i", ["i", "y", "e"]),
    speak("ensf6-t5", "What does your friend do?", "She's an engineer. She works in an office.", "Elle est ingénieure. Elle travaille dans un bureau.", { help: "Raconte à voix haute le métier d'un ami ou d'une amie." }),
    choice("ensf6-t6", "Comment dire « Je suis fatigué » ?", [
      ["I'm tired.", true],
      ["I tired.", false],
      ["I have tired.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "guest-books",
    itemName: "Étagère à livres pour les clients",
    itemNameRu: "Guest bookshelf",
    ru: "Hooray! A bookshelf for guests!",
    en: "Hourra ! Une étagère à livres pour les clients !",
    a11y: "Une petite étagère avec des livres multicolores, laissés par les clients du coffee-shop.",
    image: p("guest-books"),
    steps: ["Dans le coffee-shop de Daniel, il y a une étagère : les clients laissent des livres, d'autres les prennent.", "« Take a book, leave a book! » — « Prends un livre, laisse un livre ! »", "Daniel offre à Murzik la même petite étagère.", "Murzik y pose son premier livre en anglais."],
    bridge: "Dernier jour. Daniel appelle Murzik : « Come here. I've got something for you ».",
  },
};

const sanfrancisco7: Lesson = {
  id: "en-a1-sanfrancisco-7",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 7,
  title: "Goodbye, San Francisco! — Au revoir, San Francisco !",
  minutes: 8,
  goals: ["Parler de ton travail et de tes capacités", "Demander de l'aide", "Revoir tous les mots de San Francisco"],
  vocabNote: "On révise : What do you do?, can / can't, Can you…? / Can I…?, les consignes : Be careful! Don't worry!",
  vocab: [
    v("ensf7-1", "Come here!", "Viens ici !", "Daniel fait signe à Murzik depuis le comptoir.", "Écouter Come here", p("l7-1")),
    v("ensf7-2", "the recipe for sourdough bread", "la recette du pain au levain", "Une page avec le dessin d'un pain rond à la croûte croustillante.", "Écouter the recipe for sourdough bread", p("l7-2")),
    v("ensf7-3", "an espresso machine", "une machine à expresso", "Une petite machine à café brillante à deux leviers.", "Écouter an espresso machine", p("l7-3")),
    v("ensf7-4", "You can make great coffee now.", "Maintenant, tu sais faire un café délicieux.", "Murzik tient fièrement une tasse avec un cœur sur la mousse.", "Écouter You can make great coffee now", p("l7-4")),
    v("ensf7-5", "We're going to Canada.", "On part au Canada.", "Tom montre le nord sur la carte.", "Écouter We're going to Canada", p("l7-5")),
    v("ensf7-6", "I'm proud of you!", "Je suis fier de toi !", "Daniel serre Murzik dans ses bras.", "Écouter I'm proud of you", p("l7-6")),
    v("ensf7-7", "Take care, buddy!", "Prends soin de toi, mon pote !", "Daniel fait signe devant la porte du coffee-shop, dans le brouillard.", "Écouter Take care, buddy", p("l7-7")),
  ],
  dialogue: {
    title: "La dixième page",
    note: "Sourdough — le pain au levain, le pain célèbre de San Francisco. Buddy — « mon pote » (à l'américaine).",
    lines: [
      line("daniel", "Come here, Murzik! This page is from Mrs Hope's book.", "Viens ici, Murzik ! Cette page vient du livre de Mme Hope."),
      line("murzik", "The recipe for sourdough bread!", "La recette du pain au levain !"),
      line("daniel", "And this espresso machine is for your café. You can make great coffee now!", "Et cette machine à expresso est pour ton café. Maintenant, tu sais faire un café délicieux !"),
      line("murzik", "Thank you, Daniel! I can't believe it!", "Merci, Daniel ! Je n'arrive pas à y croire !"),
      line("tom", "Where's the next page?", "Où est la page suivante ?"),
      line("daniel", "In Vancouver, in Canada. Ask Dr Lee. I'm proud of you, buddy!", "À Vancouver, au Canada. Demandez le Dr Lee. Je suis fier de toi, mon pote !"),
    ],
    gist: choice("ensf7-d1", "Que donne Daniel pour le café ?", [
      ["Une machine à expresso.", true],
      ["Un tablier.", false],
      ["Un moulin à café.", false],
    ]),
  },
  grammar: [
    {
      title: "Travail et capacités : tout ensemble",
      paragraphs: [
        "Le travail : What do you do? — I'm a cook. I work in a café. Les autres : What does she do? — She studies at university.",
        "Capacités et demandes : I can make coffee. I can't drive. Can you help me? Can I sit here? Les consignes : Be careful! Don't worry!",
      ],
      examples: [
        { ru: "I'm a barista. I can make great coffee.", en: "Je suis barista. Je sais faire un café délicieux." },
        { ru: "Can you help me, please? — Sure!", en: "Tu peux m'aider, s'il te plaît ? — Bien sûr !" },
      ],
    },
  ],
  tasks: [
    listen("ensf7-t1", "Examen d'écoute. Que raconte Daniel ?", "I was a programmer. Now I'm a barista. I can make coffee, but I can't cook. I love my job.", [
      ["Il était programmeur, maintenant il est barista, il sait faire du café, mais pas cuisiner.", true],
      ["Il était cuisinier, maintenant programmeur, il sait cuisiner.", false],
      ["Il a toujours été barista, il n'aime pas son travail.", false],
    ]),
    choice("ensf7-t2", "Choisis la bonne phrase.", [
      ["She can speak French.", true],
      ["She can speaks French.", false],
      ["She cans speak French.", false],
    ], { skill: "grammar" }),
    match("ensf7-t3", "Relie les paires.", [
      ["proud", "fier"],
      ["buddy", "pote"],
      ["believe", "croire"],
      ["Come here!", "Viens ici !"],
    ], { skill: "words" }),
    spell("ensf7-t4", "Assemble les lettres du mot « café ».", "coffee"),
    speak("ensf7-t5", "What do you do and what can you do?", "I'm a student. I can speak English and I can cook.", "Je suis étudiant. Je sais parler anglais et cuisiner.", { help: "Raconte à voix haute ton métier et tes capacités." }),
    script("ensf7-t6", "Souviens-toi de tout San Francisco. Termine les conversations.", [
      { speaker: "Daniel", text: "What do you do?" },
      { speaker: "Toi", answer: "I'm a teacher.", options: ["I'm a teacher.", "I'm teacher.", "I do a teacher."] },
      { speaker: "Daniel", text: "Can you make coffee?" },
      { speaker: "Toi", answer: "Yes, I can.", options: ["Yes, I can.", "Yes, I do.", "Yes, I make."] },
      { speaker: "Daniel", text: "Can you help me with this box?" },
      { speaker: "Toi", answer: "Sure! No problem!", options: ["Sure! No problem!", "Sorry, you can't.", "Don't worry!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "espresso",
    itemName: "Machine à expresso",
    itemNameRu: "Espresso machine",
    ru: "Hooray! An espresso machine!",
    en: "Hourra ! Une machine à expresso !",
    a11y: "Une petite machine à expresso brillante à deux leviers, avec des pièces en cuivre.",
    image: p("espresso"),
    steps: ["Daniel pose une petite machine à café sur le comptoir.", "Elle brille comme si elle était neuve.", "« Your first coffee machine. Make people happy! » — « Ta première machine à café. Rends les gens heureux ! »", "Murzik l'emballe soigneusement dans la valise."],
    bridge: "La page suivante est au nord, à Vancouver, chez le Dr Lee.",
  },
};

const story: CityStory = {
  home: {
    name: "Chambre au-dessus du coffee-shop, sur la colline",
    nameRu: "Murzik's room in San Francisco",
    image: p("home"),
    a11y: "Une chambre vide avec un bow-window au-dessus du coffee-shop, dans une rue en pente raide. Par la fenêtre — la baie et le pont rouge dans le brouillard. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "espresso",
  welcomeRu: "Hello, San Francisco!",
  welcomeEn: "Bonjour, San Francisco !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à San Francisco : le pont rouge dans la brume, des rues en pente raide, un vieux tramway gravit la colline.",
  departureImage: p("departure"),
  departureA11y: "Daniel, en tablier, fait un signe d'adieu devant la porte du coffee-shop, le brouillard tourbillonne autour.",
  finale: [
    {
      image: p("page"),
      a11y: "En gros plan : la dixième page du livre de recettes, la recette du pain au levain. En marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la dixième page. En marge — un mot de Mme Hope :" },
        { ru: "At my café, I learned something new every day.", en: "Dans mon café, j'apprenais chaque jour quelque chose de nouveau." },
        { en: "Murzik se souvient de sa première tasse cassée et de sa dixième tasse de café parfaite." },
      ],
    },
    {
      image: p("espresso"),
      a11y: "Murzik fait le tour de sa chambre au-dessus du coffee-shop, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre à San Francisco. Tom la photographie pour son journal." },
        { en: "Pour son futur café, il emporte la machine à expresso de Daniel." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "San Francisco complete!", en: "San Francisco terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Daniel fait un signe d'adieu.",
      lines: [
        { ru: "Goodbye, Daniel!", en: "Au revoir, Daniel !" },
        { ru: "Next stop: Vancouver!", en: "Prochain arrêt : Vancouver !" },
      ],
    },
    {
      image: p("train"),
      a11y: "Le train monte vers le nord le long de la côte, dehors des forêts et des montagnes.",
      lines: [{ ru: "San Francisco → Vancouver", en: "San Francisco → Vancouver" }],
    },
    {
      image: pic("en/vancouver/arrival"),
      a11y: "Murzik et Tom à Vancouver : de grands sapins, des montagnes enneigées au-dessus de la mer, des immeubles de verre au bord de l'eau.",
      lines: [
        { ru: "Hello, Vancouver!", en: "Bonjour, Vancouver !" },
        { ru: "Look at the mountains!", en: "Regarde ces montagnes !" },
      ],
    },
  ],
};

export const enSanFranciscoFr = {
  id: "en-sanfrancisco",
  name: "San Francisco",
  nameEn: "San Francisco",
  lessons: [sanfrancisco1, sanfrancisco2, sanfrancisco3, sanfrancisco4, sanfrancisco5, sanfrancisco6, sanfrancisco7],
  story,
};
