import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * French version of ../vancouver.ts.
 * Same story, same English phrases and pictures, but grammar, explanations
 * and translations are written for French-speaking learners.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/vancouver/${name}`);

const vancouver1: Lesson = {
  id: "en-a1-vancouver-1",
  level: "A1",
  cityId: "en-vancouver",
  number: 1,
  title: "What's the matter? — Qu'est-ce qu'il y a ?",
  minutes: 7,
  goals: ["Nommer les parties du corps", "Demander : What's the matter?", "Dire : I don't feel well"],
  vocabNote: "What's the matter? — « Qu'est-ce qu'il y a ? Qu'est-ce que tu as ? » I don't feel well — « Je ne me sens pas bien. »",
  vocab: [
    v("enva1-1", "What's the matter?", "Qu'est-ce qu'il y a ?", "Une femme en blouse blanche se penche vers Murzik, l'air inquiet.", "Écouter What's the matter", p("l1-1")),
    v("enva1-2", "I don't feel well.", "Je ne me sens pas bien.", "Murzik est allongé sous une couverture, les oreilles baissées.", "Écouter I don't feel well", p("l1-2")),
    v("enva1-3", "my head", "ma tête", "Murzik se tient la tête avec ses pattes.", "Écouter my head", p("l1-3")),
    v("enva1-4", "my stomach", "mon ventre", "Murzik se tient le ventre.", "Écouter my stomach", p("l1-4")),
    v("enva1-5", "my back", "mon dos", "Tom se tient le dos en grimaçant.", "Écouter my back", p("l1-5")),
    v("enva1-6", "my arm and my leg", "mon bras et ma jambe", "Schéma : un petit chat, avec des flèches vers sa patte et sa jambe.", "Écouter my arm and my leg", p("l1-6")),
    v("enva1-7", "my throat", "ma gorge", "Murzik montre sa gorge, il porte un foulard.", "Écouter my throat", p("l1-7")),
  ],
  dialogue: {
    title: "Le Dr Lee",
    note: "Dr Lee est médecin, une amie de Mme Hope. Poor thing — « le pauvre ». Long trip — « un long voyage ».",
    lines: [
      line("lee", "Welcome to Vancouver! I'm Dr Lee. Oh, Murzik, what's the matter?", "Bienvenue à Vancouver ! Je suis le Dr Lee. Oh, Murzik, qu'est-ce que tu as ?"),
      line("murzik", "I don't feel well. My head hurts and my throat too.", "Je ne me sens pas bien. J'ai mal à la tête, et à la gorge aussi."),
      line("lee", "Poor thing! It's a long trip from San Francisco.", "Pauvre petit ! Le voyage depuis San Francisco est long."),
      line("tom", "And my back! The train seats…", "Et moi, le dos ! Ces sièges de train…"),
      line("lee", "Ha-ha! Come in, both of you. I'm a doctor!", "Ha ha ! Entrez tous les deux. Je suis médecin !"),
    ],
    gist: choice("enva1-d1", "Qu'est-ce que Murzik a ?", [
      ["Il a mal à la tête et à la gorge.", true],
      ["Il a mal au dos.", false],
      ["Il a mal au ventre et à la jambe.", false],
    ]),
  },
  grammar: [
    {
      title: "My head, my arm",
      paragraphs: [
        "En anglais, pour les parties du corps, on utilise my, your, his : my head, his arm, her leg. En français on dit « j'ai mal à LA tête », mais en anglais jamais « the head » — toujours le possessif : my head.",
        "Pluriel : two arms, two legs. Mots irréguliers : foot — feet (les pieds), tooth — teeth (les dents).",
      ],
      examples: [
        { ru: "My leg hurts.", en: "J'ai mal à la jambe." },
        { ru: "Cats have got four legs.", en: "Les chats ont quatre pattes." },
      ],
    },
  ],
  tasks: [
    choice("enva1-t1", "Comment dire « mon bras » ?", [
      ["my arm", true],
      ["the my arm", false],
      ["arm my", false],
    ], { skill: "grammar" }),
    listen("enva1-t2", "Écoute. Qu'est-ce qu'il a ?", "I don't feel well.", [
      ["Il ne se sent pas bien.", true],
      ["Il est fatigué.", false],
      ["Il a faim.", false],
    ]),
    match("enva1-t3", "Relie les paires.", [
      ["head", "tête"],
      ["stomach", "ventre"],
      ["back", "dos"],
      ["throat", "gorge"],
    ], { skill: "words" }),
    missing("enva1-t4", "Quelle lettre manque ? (« jambe »)", "l", "g", "e", ["e", "o", "u"]),
    speak("enva1-t5", "What's the matter?", "I don't feel well. My head hurts.", "Je ne me sens pas bien. J'ai mal à la tête.", { help: "Dis à voix haute que tu ne te sens pas bien et ce qui te fait mal." }),
    choice("enva1-t6", "Comment dire « Je sais cuisiner » ?", [
      ["I can cook.", true],
      ["I can to cook.", false],
      ["I cans cook.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "first-aid",
    itemName: "Trousse de secours",
    itemNameRu: "First-aid kit",
    ru: "Hooray! A first-aid kit!",
    en: "Hourra ! Une trousse de secours !",
    a11y: "Une petite trousse de secours blanche avec une feuille verte sur le couvercle est accrochée au mur.",
    image: p("first-aid"),
    steps: ["Le Dr Lee montre à Murzik sa chambre dans la maison en bois près de la forêt.", "Elle accroche une petite trousse de secours au mur.", "« Every home needs one! » — « Il en faut une dans chaque maison ! »", "Murzik sait qu'ici on prendra soin de lui."],
    bridge: "Le Dr Lee examine Murzik : « Let's see. Have you got a temperature? »",
  },
};

const vancouver2: Lesson = {
  id: "en-a1-vancouver-2",
  level: "A1",
  cityId: "en-vancouver",
  number: 2,
  title: "I have a headache — J'ai mal à la tête",
  minutes: 7,
  goals: ["Dire ce qui fait mal : I have a headache", "Nommer un rhume, une toux, de la fièvre", "Dire : my leg hurts"],
  vocabNote: "Douleurs : headache — mal de tête, stomachache — mal au ventre, toothache — mal aux dents. I have a cold — j'ai un rhume. My leg hurts — j'ai mal à la jambe.",
  vocab: [
    v("enva2-1", "I have a headache.", "J'ai mal à la tête.", "Murzik avec une serviette mouillée sur le front.", "Écouter I have a headache", p("l2-1")),
    v("enva2-2", "I have a cold.", "J'ai un rhume.", "Murzik éternue dans un mouchoir, le nez rouge.", "Écouter I have a cold", p("l2-2")),
    v("enva2-3", "I have a sore throat.", "J'ai mal à la gorge.", "Murzik boit un thé chaud au miel.", "Écouter I have a sore throat", p("l2-3")),
    v("enva2-4", "I have a temperature.", "J'ai de la fièvre.", "Le thermomètre indique 38.", "Écouter I have a temperature", p("l2-4")),
    v("enva2-5", "I have a cough.", "Je tousse.", "Murzik tousse dans sa patte.", "Écouter I have a cough", p("l2-5")),
    v("enva2-6", "My back hurts.", "J'ai mal au dos.", "Tom s'assied prudemment en se tenant le dos.", "Écouter My back hurts", p("l2-6")),
    v("enva2-7", "It's not serious.", "Ce n'est pas grave.", "Le Dr Lee range son stéthoscope en souriant.", "Écouter It's not serious", p("l2-7")),
  ],
  dialogue: {
    title: "La consultation",
    note: "Open your mouth — « ouvre la bouche ». Say \"Ah\" — « dis “a” ».",
    lines: [
      line("lee", "Have you got a temperature?", "Tu as de la fièvre ?"),
      line("murzik", "I think so. And I have a headache and a sore throat.", "Je crois. Et j'ai mal à la tête et à la gorge."),
      line("lee", "Open your mouth. Say \"Ah\".", "Ouvre la bouche. Dis « a »."),
      line("murzik", "Ah…", "Aaa…"),
      line("lee", "It's a cold. It's not serious. And what about your back, Tom?", "C'est un rhume. Ce n'est pas grave. Et ton dos, Tom ?"),
      line("tom", "My back hurts a little. But I'm OK!", "J'ai un peu mal au dos. Mais ça va !"),
    ],
    gist: choice("enva2-d1", "Qu'a Murzik ?", [
      ["Un rhume, rien de grave.", true],
      ["Une patte cassée.", false],
      ["Il a mal au ventre.", false],
    ]),
  },
  grammar: [
    {
      title: "I have a headache / My leg hurts",
      paragraphs: [
        "Pour les maladies : I have a cold, I have a cough, I have a temperature, I have a headache (= I've got a headache). Bonne nouvelle : en français aussi on dit « j'AI un rhume » — ici les deux langues se ressemblent.",
        "Pour un endroit précis : My leg hurts. — J'ai mal à la jambe. My eyes hurt. — J'ai mal aux yeux. Avec he / she : His arm hurts. Attention : en anglais on dit MY leg (possessif), en français « LA jambe » (article).",
      ],
      examples: [
        { ru: "She has a toothache.", en: "Elle a mal aux dents." },
        { ru: "My feet hurt!", en: "J'ai mal aux pieds !" },
      ],
    },
  ],
  tasks: [
    choice("enva2-t1", "Comment dire « J'ai mal à la tête » ?", [
      ["I have a headache.", true],
      ["I am headache.", false],
      ["My head is headache.", false],
    ], { skill: "grammar" }),
    listen("enva2-t2", "Écoute. Qu'est-ce qu'elle a ?", "I have a toothache.", [
      ["Mal aux dents.", true],
      ["Mal à la gorge.", false],
      ["Mal au ventre.", false],
    ]),
    match("enva2-t3", "Relie les paires.", [
      ["a cold", "un rhume"],
      ["a cough", "une toux"],
      ["a temperature", "de la fièvre"],
      ["hurt", "faire mal"],
    ], { skill: "words" }),
    missing("enva2-t4", "Quelle lettre manque ? (« toux »)", "cou", "h", "g", ["g", "k", "f"]),
    speak("enva2-t5", "What's the matter?", "I have a cold and a sore throat.", "J'ai un rhume et mal à la gorge.", { help: "Raconte à voix haute au médecin ce que tu as." }),
    choice("enva2-t6", "Comment demander « Qu'est-ce qu'il y a ? »", [
      ["What's the matter?", true],
      ["What matter is?", false],
      ["How is the matter?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cocoa",
    itemName: "Tasse de chocolat chaud",
    itemNameRu: "Mug of cocoa",
    ru: "Hooray! A mug of cocoa!",
    en: "Hourra ! Une tasse de chocolat chaud !",
    a11y: "Une grande tasse de chocolat chaud avec des marshmallows, de la vapeur s'en échappe.",
    image: p("cocoa"),
    steps: ["Le Dr Lee apporte un chocolat chaud avec des marshmallows.", "« Doctor's orders! » — « C'est le médecin qui l'ordonne ! »", "La tasse reste à Murzik.", "C'est chaud et sucré."],
    bridge: "Le Dr Lee s'assoit à côté : « Now listen. You should… »",
  },
};

const vancouver3: Lesson = {
  id: "en-a1-vancouver-3",
  level: "A1",
  cityId: "en-vancouver",
  number: 3,
  title: "You should rest — Tu devrais te reposer",
  minutes: 7,
  goals: ["Donner un conseil : You should…", "Dire ce qu'il ne faut pas faire : You shouldn't…", "Demander conseil : What should I do?"],
  vocabNote: "Should — « devrais » (un conseil). Après should, le verbe reste dans sa forme simple : You should rest. La négation : shouldn't.",
  vocab: [
    v("enva3-1", "You should rest.", "Tu devrais te reposer.", "Le Dr Lee arrange l'oreiller de Murzik.", "Écouter You should rest", p("l3-1")),
    v("enva3-2", "You should stay in bed.", "Tu devrais rester au lit.", "Murzik au lit avec un livre.", "Écouter You should stay in bed", p("l3-2")),
    v("enva3-3", "You should drink lots of water.", "Tu devrais boire beaucoup d'eau.", "Un grand verre d'eau avec du citron.", "Écouter You should drink lots of water", p("l3-3")),
    v("enva3-4", "You shouldn't go out today.", "Tu ne devrais pas sortir aujourd'hui.", "Derrière la fenêtre, il pleut et il y a du vent.", "Écouter You shouldn't go out today", p("l3-4")),
    v("enva3-5", "What should I do?", "Qu'est-ce que je devrais faire ?", "Murzik regarde le médecin, perdu.", "Écouter What should I do", p("l3-5")),
    v("enva3-6", "You should see a doctor.", "Tu devrais aller voir un médecin.", "Une plaque avec une croix rouge sur la porte d'une clinique.", "Écouter You should see a doctor", p("l3-6")),
    v("enva3-7", "Get well soon!", "Guéris vite !", "Sam fait signe à Murzik depuis le seuil.", "Écouter Get well soon", p("l3-7")),
  ],
  dialogue: {
    title: "Les conseils du médecin",
    note: "Sam est le fils du Dr Lee, il est garde forestier. Forest — « la forêt ». Ranger — « garde forestier ».",
    lines: [
      line("lee", "Murzik, you should rest. You should stay in bed today.", "Murzik, tu dois te reposer. Aujourd'hui, reste au lit."),
      line("murzik", "But I want to see the forest!", "Mais je veux voir la forêt !"),
      line("lee", "You shouldn't go out today. It's cold and wet.", "Tu ne devrais pas sortir aujourd'hui. Il fait froid et il pleut."),
      line("murzik", "What should I do?", "Alors, qu'est-ce que je dois faire ?"),
      line("lee", "Drink lots of water and sleep. Tomorrow my son Sam can show you the forest.", "Bois beaucoup d'eau et dors. Demain, mon fils Sam pourra te montrer la forêt."),
      line("sam", "Hi, Murzik! I'm a ranger. Get well soon!", "Salut, Murzik ! Je suis garde forestier. Guéris vite !"),
    ],
    gist: choice("enva3-d1", "Pourquoi Murzik ne devrait-il pas sortir ?", [
      ["Il est malade, et dehors il fait froid et humide.", true],
      ["La forêt est fermée.", false],
      ["Sam travaille.", false],
    ]),
  },
  grammar: [
    {
      title: "Should / shouldn't",
      paragraphs: [
        "Pour conseiller : You should rest. She should see a doctor. Should est pareil pour tout le monde, sans -s. En français, on utilise le conditionnel : « tu devrAIS te reposer ».",
        "Négation : You shouldn't go out. Question : Should I take a tablet? What should I do? Attention au faux ami : « un médecin » se dit a doctor ; medicine veut dire « le médicament », pas « le médecin » !",
      ],
      examples: [
        { ru: "You should sleep more.", en: "Tu devrais dormir plus." },
        { ru: "He shouldn't eat so much chocolate.", en: "Il ne devrait pas manger autant de chocolat." },
      ],
    },
  ],
  tasks: [
    choice("enva3-t1", "Comment dire « Tu devrais aller voir un médecin » ?", [
      ["You should see a doctor.", true],
      ["You should to see a doctor.", false],
      ["You shoulds see a doctor.", false],
    ], { skill: "grammar" }),
    listen("enva3-t2", "Écoute. Quel est le conseil ?", "You should drink hot tea with honey.", [
      ["Boire du thé chaud au miel.", true],
      ["Aller chez le médecin.", false],
      ["Ne pas sortir.", false],
    ]),
    match("enva3-t3", "Relie les paires.", [
      ["rest", "se reposer"],
      ["stay in bed", "rester au lit"],
      ["go out", "sortir"],
      ["Get well soon!", "Guéris vite !"],
    ], { skill: "words" }),
    missing("enva3-t4", "Quelle lettre manque ? (« devrait »)", "sho", "ld", "u", ["u", "o", "a"]),
    speak("enva3-t5", "I have a headache. What should I do?", "You should rest and drink lots of water.", "Tu devrais te reposer et boire beaucoup d'eau.", { help: "Donne un conseil à voix haute." }),
    choice("enva3-t6", "Comment dire « J'ai un rhume » ?", [
      ["I have a cold.", true],
      ["I am cold have.", false],
      ["I have cold.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cones",
    itemName: "Pommes de pin dans un vase",
    itemNameRu: "Pine cones",
    ru: "Hooray! Pine cones!",
    en: "Hourra ! Des pommes de pin !",
    a11y: "Un vase en verre plein de grosses pommes de pin sur le rebord de la fenêtre.",
    image: p("cones"),
    steps: ["Pendant que Murzik est malade, Sam lui apporte la forêt.", "Un vase entier d'énormes pommes de pin !", "« The forest is waiting for you! » — « La forêt t'attend ! »", "Les pommes de pin sentent la résine."],
    bridge: "Le matin, Murzik va déjà mieux. Mais sa gorge lui fait encore mal. Direction la pharmacie.",
  },
};

const vancouver4: Lesson = {
  id: "en-a1-vancouver-4",
  level: "A1",
  cityId: "en-vancouver",
  number: 4,
  title: "At the pharmacy — À la pharmacie",
  minutes: 7,
  goals: ["Demander un médicament", "Comprendre comment le prendre", "Demander s'il y a quelque chose contre la douleur"],
  vocabNote: "Something for… — « quelque chose contre… » : something for a cough — quelque chose contre la toux. Twice a day — deux fois par jour.",
  vocab: [
    v("enva4-1", "Can I have something for a sore throat?", "Je peux avoir quelque chose contre le mal de gorge ?", "Murzik au comptoir de la pharmacie.", "Écouter Can I have something for a sore throat", p("l4-1")),
    v("enva4-2", "Try these lozenges.", "Essayez ces pastilles.", "La pharmacienne tend une boîte de pastilles.", "Écouter Try these lozenges", p("l4-2")),
    v("enva4-3", "cough syrup", "le sirop contre la toux", "Un flacon de sirop rouge avec une petite cuillère.", "Écouter cough syrup", p("l4-3")),
    v("enva4-4", "Take one tablet twice a day.", "Prenez un comprimé deux fois par jour.", "Deux comprimés, le soleil et la lune : matin et soir.", "Écouter Take one tablet twice a day", p("l4-4")),
    v("enva4-5", "after meals", "après les repas", "Une assiette et un comprimé côte à côte.", "Écouter after meals", p("l4-5")),
    v("enva4-6", "Do I need a prescription?", "Il me faut une ordonnance ?", "Murzik montre un papier signé par le médecin.", "Écouter Do I need a prescription", p("l4-6")),
    v("enva4-7", "I feel better.", "Je me sens mieux.", "Murzik sourit et s'étire.", "Écouter I feel better", p("l4-7")),
  ],
  dialogue: {
    title: "À la pharmacie",
    note: "Lozenges — des pastilles pour la gorge. Un « comprimé » se dit a tablet ; « une tablette » de chocolat se dit a bar !",
    lines: [
      line("murzik", "Hello. Can I have something for a sore throat, please?", "Bonjour. Je voudrais quelque chose contre le mal de gorge, s'il vous plaît."),
      line("pharmacist", "Of course. Try these lozenges. Have you got a cough?", "Bien sûr. Essayez ces pastilles. Vous toussez aussi ?"),
      line("murzik", "Yes, a little.", "Oui, un peu."),
      line("pharmacist", "Then take this cough syrup. One spoonful twice a day, after meals.", "Alors prenez ce sirop contre la toux. Une cuillère deux fois par jour, après les repas."),
      line("murzik", "Thank you. Do I need a prescription?", "Merci. Il faut une ordonnance ?"),
      line("pharmacist", "No, you don't. That's eleven dollars. Get well soon!", "Non, pas besoin. Ça fait onze dollars. Guérissez vite !"),
    ],
    gist: choice("enva4-d1", "Comment faut-il prendre le sirop ?", [
      ["Une cuillère deux fois par jour, après les repas.", true],
      ["Deux cuillères le matin.", false],
      ["Un comprimé avant de dormir.", false],
    ]),
  },
  grammar: [
    {
      title: "Une fois, deux fois : once, twice, three times",
      paragraphs: [
        "Once — une fois, twice — deux fois, three times — trois fois. A day — par jour, a week — par semaine : twice a day, once a week.",
        "Before meals — avant les repas, after meals — après les repas. Attention : prescription veut dire « ordonnance » — en français, « une prescription » est un terme de droit !",
      ],
      examples: [
        { ru: "Take it three times a day.", en: "Prenez-le trois fois par jour." },
        { ru: "I go swimming once a week.", en: "Je vais nager une fois par semaine." },
      ],
    },
  ],
  tasks: [
    choice("enva4-t1", "Comment dire « deux fois par jour » ?", [
      ["twice a day", true],
      ["two time a day", false],
      ["twice in day", false],
    ], { skill: "grammar" }),
    listen("enva4-t2", "Écoute. Comment faut-il prendre le médicament ?", "Take one tablet three times a day, before meals.", [
      ["Trois fois par jour avant les repas.", true],
      ["Deux fois par jour après les repas.", false],
      ["Une fois par jour avant de dormir.", false],
    ]),
    match("enva4-t3", "Relie les paires.", [
      ["tablet", "comprimé"],
      ["syrup", "sirop"],
      ["twice", "deux fois"],
      ["after meals", "après les repas"],
    ], { skill: "words" }),
    spell("enva4-t4", "Assemble les lettres du mot « mieux ».", "better"),
    speak("enva4-t5", "Can I help you?", "Can I have something for a headache, please?", "Je peux avoir quelque chose contre le mal de tête, s'il vous plaît ?", { help: "Demande un médicament à voix haute à la pharmacie." }),
    choice("enva4-t6", "Comment dire « Tu ne devrais pas sortir » ?", [
      ["You shouldn't go out.", true],
      ["You don't should go out.", false],
      ["You shouldn't to go out.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "torch",
    itemName: "Lampe de poche",
    itemNameRu: "Torch",
    ru: "Hooray! A torch!",
    en: "Hourra ! Une lampe de poche !",
    a11y: "Une lampe de poche de randonnée verte avec une dragonne, accrochée à un crochet près de la porte.",
    image: p("torch"),
    steps: ["Murzik va mieux ! Sam est content.", "« Tomorrow — the forest! » — « Demain — la forêt ! »", "Il offre une lampe de poche de randonnée à Murzik.", "On peut partir en randonnée !"],
    bridge: "Le matin, Sam emmène Murzik et Tom dans la grande forêt.",
  },
};

const vancouver5: Lesson = {
  id: "en-a1-vancouver-5",
  level: "A1",
  cityId: "en-vancouver",
  number: 5,
  title: "In the forest — Dans la forêt",
  minutes: 7,
  goals: ["Nommer la nature : trees, mountains, river", "Comprendre les règles du parc", "Dire « chut ! » et « regarde ! »"],
  vocabNote: "Les règles dans les parcs commencent souvent par Don't : Don't feed the animals. Please be quiet. Keep to the path — « reste sur le sentier ».",
  vocab: [
    v("enva5-1", "tall trees", "les grands arbres", "Des sapins immenses jusqu'au ciel.", "Écouter tall trees", p("l5-1")),
    v("enva5-2", "mountains", "les montagnes", "Des sommets enneigés au-dessus de la forêt.", "Écouter mountains", p("l5-2")),
    v("enva5-3", "a river", "une rivière", "Une rivière rapide et transparente entre les pierres.", "Écouter a river", p("l5-3")),
    v("enva5-4", "Look! A bear!", "Regarde ! Un ours !", "Au loin, près de la rivière, un ours brun pêche.", "Écouter Look! A bear", p("l5-4")),
    v("enva5-5", "Be quiet!", "Chut !", "Sam met un doigt sur ses lèvres.", "Écouter Be quiet", p("l5-5")),
    v("enva5-6", "Don't feed the animals.", "Ne nourrissez pas les animaux.", "Un écureuil tend la patte vers la noisette de Murzik.", "Écouter Don't feed the animals", p("l5-6")),
    v("enva5-7", "Keep to the path.", "Restez sur le sentier.", "Un sentier en bois serpente entre les sapins.", "Écouter Keep to the path", p("l5-7")),
  ],
  dialogue: {
    title: "La randonnée",
    note: "Squirrel — « l'écureuil ». Hungry — « affamé ».",
    lines: [
      line("sam", "Welcome to the forest! Look at the tall trees and the mountains!", "Bienvenue dans la forêt ! Regardez ces grands arbres et ces montagnes !"),
      line("murzik", "It's beautiful! Look, a squirrel! Is it hungry?", "C'est magnifique ! Regardez, un écureuil ! Il a faim ?"),
      line("sam", "Maybe, but don't feed the animals. And keep to the path.", "Peut-être, mais ne nourrissez pas les animaux. Et restez sur le sentier."),
      line("tom", "Look! A bear! Near the river!", "Regardez ! Un ours ! Près de la rivière !"),
      line("sam", "Be quiet! It's OK. He's far away. He's fishing.", "Chut ! Tout va bien. Il est loin. Il pêche."),
      line("murzik", "A real bear! Tom, take a photo!", "Un vrai ours ! Tom, prends une photo !"),
    ],
    gist: choice("enva5-d1", "Que fait l'ours ?", [
      ["Il pêche près de la rivière.", true],
      ["Il vient vers eux par le sentier.", false],
      ["Il dort sous un arbre.", false],
    ]),
  },
  grammar: [
    {
      title: "Les règles : Don't… Please…",
      paragraphs: [
        "Règles et interdictions — l'impératif : Keep to the path. Don't feed the animals. Don't swim here. Comme en français : « ne nourrissez pas… ».",
        "Be + mot : Be quiet! Be careful! Be nice! En français, on utilise être ou faire : « sois sage ! », « fais attention ! ».",
      ],
      examples: [
        { ru: "Don't touch the flowers.", en: "Ne touchez pas les fleurs." },
        { ru: "Please be quiet in the library.", en: "Chut, on est à la bibliothèque." },
      ],
    },
  ],
  tasks: [
    choice("enva5-t1", "Comment dire « Ne nourrissez pas les animaux » ?", [
      ["Don't feed the animals.", true],
      ["No feed animals.", false],
      ["You don't feeding the animals.", false],
    ], { skill: "grammar" }),
    listen("enva5-t2", "Écoute. Quelle est la règle ?", "Please keep to the path.", [
      ["Rester sur le sentier.", true],
      ["Ne pas nourrir les animaux.", false],
      ["Ne pas faire de bruit.", false],
    ]),
    match("enva5-t3", "Relie les paires.", [
      ["tree", "arbre"],
      ["mountain", "montagne"],
      ["river", "rivière"],
      ["bear", "ours"],
    ], { skill: "words" }),
    missing("enva5-t4", "Quelle lettre manque ? (« montagne »)", "mount", "in", "a", ["a", "e", "o"]),
    speak("enva5-t5", "What can you see?", "I can see tall trees and a river.", "Je vois de grands arbres et une rivière.", { help: "Décris à voix haute ce que tu vois dans la forêt." }),
    choice("enva5-t6", "Comment dire « Je me sens mieux » ?", [
      ["I feel better.", true],
      ["I am better feel.", false],
      ["I feel good more.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bird-feeder",
    itemName: "Mangeoire en bois",
    itemNameRu: "Bird feeder",
    ru: "Hooray! A bird feeder!",
    en: "Hourra ! Une mangeoire pour les oiseaux !",
    a11y: "Une mangeoire-cabane en bois avec des graines est accrochée devant la fenêtre, une mésange est posée dessus.",
    image: p("bird-feeder"),
    steps: ["Dans la forêt, il est interdit de nourrir les animaux.", "Mais à la maison, pour les oiseaux, on peut et on doit !", "Sam offre une mangeoire en bois à Murzik.", "Le matin, les oiseaux chantent devant la fenêtre."],
    bridge: "Le lendemain, Murzik veut aller au lac. Mais l'eau des montagnes…",
  },
};

const vancouver6: Lesson = {
  id: "en-a1-vancouver-6",
  level: "A1",
  cityId: "en-vancouver",
  number: 6,
  title: "Too cold! — Trop froid !",
  minutes: 7,
  goals: ["Dire « trop » : too cold to swim", "Dire « assez » : warm enough", "Dire « pas assez » : not enough"],
  vocabNote: "Too — « trop » : too cold. Enough — « assez », mais il se met APRÈS l'adjectif : warm enough. Devant un nom : enough time — assez de temps.",
  vocab: [
    v("enva6-1", "The water is too cold.", "L'eau est trop froide.", "Murzik touche l'eau de la patte et la retire aussitôt.", "Écouter The water is too cold", p("l6-1")),
    v("enva6-2", "It's too cold to swim.", "Il fait trop froid pour nager.", "Un lac de montagne, avec des glaçons au bord.", "Écouter It's too cold to swim", p("l6-2")),
    v("enva6-3", "Is it warm enough?", "Elle est assez chaude ?", "Sam tend une veste chaude à Murzik.", "Écouter Is it warm enough", p("l6-3")),
    v("enva6-4", "We haven't got enough time.", "On n'a pas assez de temps.", "Le soleil se couche derrière les montagnes, Tom regarde sa montre.", "Écouter We haven't got enough time", p("l6-4")),
    v("enva6-5", "It's too far to walk.", "C'est trop loin pour y aller à pied.", "Une longue route qui part vers les montagnes.", "Écouter It's too far to walk", p("l6-5")),
    v("enva6-6", "Let's take the car.", "Prenons la voiture.", "Le vieux pick-up de Sam devant la maison.", "Écouter Let's take the car", p("l6-6")),
    v("enva6-7", "It's perfect!", "C'est parfait !", "Murzik et Tom autour d'un feu de camp au bord du lac.", "Écouter It's perfect", p("l6-7")),
  ],
  dialogue: {
    title: "Le lac de montagne",
    note: "Campfire — « le feu de camp ». Waterfall — « la cascade ».",
    lines: [
      line("murzik", "Can I swim in the lake?", "Je peux nager dans le lac ?"),
      line("sam", "No, the water is too cold. It's too cold to swim, even for bears!", "Non, l'eau est trop froide. Même pour les ours !"),
      line("tom", "Let's walk to the waterfall!", "Allons à la cascade à pied !"),
      line("sam", "It's too far to walk. And we haven't got enough time. Let's take the car.", "C'est trop loin à pied. Et on n'a pas assez de temps. Prenons la voiture."),
      line("sam", "Murzik, is your jacket warm enough?", "Murzik, ta veste est assez chaude ?"),
      line("murzik", "Yes! And the campfire… It's perfect!", "Oui ! Et le feu de camp… C'est parfait !"),
    ],
    gist: choice("enva6-d1", "Pourquoi ne peut-on pas nager ?", [
      ["L'eau est trop froide.", true],
      ["Il y a des ours.", false],
      ["Le lac est trop loin.", false],
    ]),
  },
  grammar: [
    {
      title: "Too et enough",
      paragraphs: [
        "Too + adjectif — « trop » : too cold, too far. Too … to … — « trop… pour… » : It's too cold to swim. — Il fait trop froid pour nager.",
        "Adjectif + enough — « assez » : warm enough, big enough. Attention à la place : en français, « assez » vient AVANT (« assez chaud »), en anglais, enough vient APRÈS : warm enough. Devant un nom, c'est comme en français : enough time — assez de temps. Not enough — « pas assez ».",
      ],
      examples: [
        { ru: "This bag is too small.", en: "Ce sac est trop petit." },
        { ru: "Are you old enough to drive?", en: "Tu es assez grand pour conduire ?" },
      ],
    },
  ],
  tasks: [
    choice("enva6-t1", "Comment dire « assez chaud » ?", [
      ["warm enough", true],
      ["enough warm", false],
      ["too warm enough", false],
    ], { skill: "grammar" }),
    listen("enva6-t2", "Écoute. Pourquoi n'y vont-ils pas à pied ?", "It's too far to walk.", [
      ["C'est trop loin.", true],
      ["Il fait trop froid.", false],
      ["Ils n'ont pas de voiture.", false],
    ]),
    match("enva6-t3", "Relie les paires.", [
      ["too", "trop"],
      ["enough", "assez"],
      ["far", "loin"],
      ["perfect", "parfait"],
    ], { skill: "words" }),
    spell("enva6-t4", "Assemble les lettres du mot « lac ».", "lake"),
    speak("enva6-t5", "Can we swim today?", "No, it's too cold to swim.", "Non, il fait trop froid pour nager.", { help: "Réponds à voix haute avec too." }),
    choice("enva6-t6", "Comment dire « Chut ! » ?", [
      ["Be quiet!", true],
      ["Quiet be!", false],
      ["You quiet!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "moose",
    itemName: "Élan en bois",
    itemNameRu: "Wooden moose",
    ru: "Hooray! A wooden moose!",
    en: "Hourra ! Un élan en bois !",
    a11y: "Une petite figurine d'élan sculptée dans le bois avec de grands bois, posée sur une étagère.",
    image: p("moose"),
    steps: ["Au coin du feu, Sam sculpte une figurine dans le bois.", "C'est un élan avec de grands bois !", "« For you. A friend from the forest. » — « Pour toi. Un ami de la forêt. »", "L'élan trône sur l'étagère, à côté des pommes de pin."],
    bridge: "Dernière soirée. Le Dr Lee sort une enveloppe d'un tiroir.",
  },
};

const vancouver7: Lesson = {
  id: "en-a1-vancouver-7",
  level: "A1",
  cityId: "en-vancouver",
  number: 7,
  title: "Goodbye, Vancouver! — Au revoir, Vancouver !",
  minutes: 8,
  goals: ["Raconter au médecin ce qui ne va pas et comprendre ses conseils", "Décrire la nature", "Revoir tous les mots de Vancouver"],
  vocabNote: "On révise : les parties du corps, I have a headache, should / shouldn't, twice a day, Don't…, too / enough.",
  vocab: [
    v("enva7-1", "It was in my drawer.", "Elle était dans mon tiroir.", "Le Dr Lee sort une enveloppe jaunie d'une commode.", "Écouter It was in my drawer", p("l7-1")),
    v("enva7-2", "the recipe for maple pie", "la recette de la tarte à l'érable", "Une page avec le dessin d'une tarte et d'une feuille d'érable.", "Écouter the recipe for maple pie", p("l7-2")),
    v("enva7-3", "a bottle of maple syrup", "une bouteille de sirop d'érable", "Une bouteille en verre en forme de feuille d'érable, remplie de sirop doré.", "Écouter a bottle of maple syrup", p("l7-3")),
    v("enva7-4", "Look after yourself.", "Prends soin de toi.", "Le Dr Lee arrange le foulard de Murzik.", "Écouter Look after yourself", p("l7-4")),
    v("enva7-5", "Don't forget your medicine.", "N'oublie pas tes médicaments.", "Un flacon de sirop dans la poche latérale de la valise.", "Écouter Don't forget your medicine", p("l7-5")),
    v("enva7-6", "Toronto is in the east.", "Toronto est à l'est.", "Sam montre une flèche vers l'est sur la carte du Canada.", "Écouter Toronto is in the east", p("l7-6")),
    v("enva7-7", "Come back in summer!", "Revenez en été !", "Sam fait signe à côté du vieux pick-up.", "Écouter Come back in summer", p("l7-7")),
  ],
  dialogue: {
    title: "La onzième page",
    note: "Maple — « l'érable ». Le sirop d'érable est le symbole du Canada. Family café — « un café de famille ».",
    lines: [
      line("lee", "Murzik, this is from Mrs Hope's book. It was in my drawer for years.", "Murzik, ceci vient du livre de Mme Hope. Il est resté des années dans mon tiroir."),
      line("murzik", "The recipe for maple pie!", "La recette de la tarte à l'érable !"),
      line("sam", "And this bottle of maple syrup is for your café!", "Et cette bouteille de sirop d'érable est pour ton café !"),
      line("lee", "Look after yourself. And don't forget your medicine!", "Prends soin de toi. Et n'oublie pas tes médicaments !"),
      line("tom", "Where's the next page?", "Où est la page suivante ?"),
      line("lee", "In Toronto, in the east. The Chen family has got a café there. Come back in summer!", "À Toronto, à l'est. La famille Chen y a un café. Revenez en été !"),
    ],
    gist: choice("enva7-d1", "Où est la page suivante ?", [
      ["À Toronto, chez la famille Chen.", true],
      ["À Vancouver, chez Sam.", false],
      ["À San Francisco.", false],
    ]),
  },
  grammar: [
    {
      title: "La santé : tout ensemble",
      paragraphs: [
        "Qu'est-ce qu'il y a : What's the matter? — I have a headache. My back hurts. Conseil : You should rest. You shouldn't go out.",
        "À la pharmacie : Can I have something for a cough? Take it twice a day. Dans la forêt : Don't feed the animals. It's too cold to swim.",
      ],
      examples: [
        { ru: "I have a sore throat. What should I do? — You should drink hot tea.", en: "J'ai mal à la gorge. Qu'est-ce que je dois faire ? — Bois du thé chaud." },
        { ru: "Take one tablet three times a day.", en: "Un comprimé trois fois par jour." },
      ],
    },
  ],
  tasks: [
    listen("enva7-t1", "Examen d'écoute. Que dit le médecin ?", "It's a cold. It's not serious. You should stay in bed and drink lots of water. Take this syrup twice a day.", [
      ["Un rhume, rester au lit, boire beaucoup, sirop deux fois par jour.", true],
      ["Rien de grave, on peut sortir, pas besoin de comprimés.", false],
      ["Une maladie grave, il faut aller à l'hôpital.", false],
    ]),
    choice("enva7-t2", "Choisis la bonne phrase.", [
      ["You should drink more water.", true],
      ["You should drinks more water.", false],
      ["You should to drink more water.", false],
    ], { skill: "grammar" }),
    match("enva7-t3", "Relie les paires.", [
      ["maple", "érable"],
      ["medicine", "médicament"],
      ["east", "est"],
      ["summer", "été"],
    ], { skill: "words" }),
    spell("enva7-t4", "Assemble les lettres du mot « médicament ».", "medicine"),
    speak("enva7-t5", "What's the matter?", "I have a headache and a cough.", "J'ai mal à la tête et je tousse.", { help: "Raconte à voix haute au médecin ce que tu as." }),
    script("enva7-t6", "Souviens-toi de tout Vancouver. Termine la conversation avec le médecin.", [
      { speaker: "Dr Lee", text: "What's the matter?" },
      { speaker: "Toi", answer: "I don't feel well. I have a temperature.", options: ["I don't feel well. I have a temperature.", "I don't feel well. I am temperature.", "I feel better."] },
      { speaker: "Dr Lee", text: "You should stay in bed." },
      { speaker: "Toi", answer: "What should I take?", options: ["What should I take?", "What should I to take?", "What I should take?"] },
      { speaker: "Dr Lee", text: "This syrup, twice a day. Get well soon!" },
      { speaker: "Toi", answer: "Thank you, doctor!", options: ["Thank you, doctor!", "You're welcome!", "Be quiet!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "maple-syrup",
    itemName: "Bouteille de sirop d'érable",
    itemNameRu: "Maple syrup",
    ru: "Hooray! Maple syrup!",
    en: "Hourra ! Du sirop d'érable !",
    a11y: "Une bouteille en verre en forme de feuille d'érable, pleine de sirop doré, avec un petit bouchon.",
    image: p("maple-syrup"),
    steps: ["Sam tend la bouteille en forme de feuille d'érable.", "À l'intérieur, du sirop d'érable doré.", "« From our trees! » — « De nos arbres ! »", "Murzik l'enveloppe dans son foulard pour qu'elle ne se casse pas."],
    bridge: "La page suivante est à l'est du Canada, à Toronto.",
  },
};

const story: CityStory = {
  home: {
    name: "Cabane en bois près de la forêt",
    nameRu: "Murzik's room in Vancouver",
    image: p("home"),
    a11y: "Une chambre vide dans une maison en bois. Par la fenêtre, de grands sapins et des montagnes enneigées. Ça sent la résine. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "maple-syrup",
  welcomeRu: "Hello, Vancouver!",
  welcomeEn: "Salut, Vancouver !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Vancouver : de grands sapins, des montagnes enneigées au-dessus de la mer, des immeubles de verre au bord de l'eau.",
  departureImage: p("departure"),
  departureA11y: "Le Dr Lee et Sam font des signes d'au revoir devant la maison en bois, le vieux pick-up est garé à côté.",
  finale: [
    {
      image: p("page"),
      a11y: "Gros plan : la onzième page du livre de recettes, la recette de la tarte à l'érable. Dans la marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la onzième page. Dans la marge, un mot de Mme Hope :" },
        { ru: "At my café, I always asked: \"How are you today?\" And I listened.", en: "Dans mon café, je demandais toujours : « Comment allez-vous aujourd'hui ? » — et j'écoutais la réponse." },
        { en: "Murzik se souvient du Dr Lee : dès le premier jour, elle lui a demandé ce qu'il avait — et elle l'a écouté." },
      ],
    },
    {
      image: p("maple-syrup"),
      a11y: "Murzik fait le tour de sa chambre dans la cabane en bois, qu'il a meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre à Vancouver. Tom la photographie pour son magazine." },
        { en: "Pour son futur café, il emporte du sirop d'érable." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "Vancouver complete!", en: "Vancouver terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Le Dr Lee et Sam font des signes d'au revoir.",
      lines: [
        { ru: "Goodbye, Dr Lee! Goodbye, Sam!", en: "Au revoir, Dr Lee ! Au revoir, Sam !" },
        { ru: "Next stop: Toronto!", en: "Prochain arrêt : Toronto !" },
      ],
    },
    {
      image: p("train"),
      a11y: "Un long train roule vers l'est à travers les montagnes et les prairies infinies du Canada.",
      lines: [{ ru: "Vancouver → Toronto", en: "Vancouver → Toronto" }],
    },
    {
      image: pic("en/toronto/arrival"),
      a11y: "Murzik et Tom à Toronto : une haute tour au-dessus du lac, des maisons colorées, des fleurs de printemps.",
      lines: [
        { ru: "Hello, Toronto!", en: "Salut, Toronto !" },
        { ru: "It's spring!", en: "C'est le printemps !" },
      ],
    },
  ],
};

export const enVancouverFr = {
  id: "en-vancouver",
  name: "Vancouver",
  nameEn: "Vancouver",
  lessons: [vancouver1, vancouver2, vancouver3, vancouver4, vancouver5, vancouver6, vancouver7],
  story,
};
