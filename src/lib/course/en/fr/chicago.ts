import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * Chicago · « Comment y aller ? » · lessons 1–7 — French version of ../chicago.ts.
 * Same story, same English phrases and pictures; explanations, translations
 * and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/chicago/${name}`);

const chicago1: Lesson = {
  id: "en-a1-chicago-1",
  level: "A1",
  cityId: "en-chicago",
  number: 1,
  title: "There's a park — Il y a un parc",
  minutes: 7,
  goals: ["Dire qu'il y a quelque chose : there is, there are", "Demander : Is there a… near here?", "Dire ce qu'il n'y a pas : there isn't"],
  vocabNote: "There is (there's) — « il y a » pour une chose, there are — pour plusieurs. C'est LA façon de dire qu'il y a quelque chose quelque part.",
  vocab: [
    v("ench1-1", "There's a park near here.", "Il y a un parc près d'ici.", "Un grand parc vert au bord du lac.", "Écouter There's a park near here", p("l1-1")),
    v("ench1-2", "There are two cafés.", "Il y a deux cafés.", "Deux petits cafés dans la même rue.", "Écouter There are two cafés", p("l1-2")),
    v("ench1-3", "Is there a bank near here?", "Il y a une banque près d'ici ?", "Murzik, porte-monnaie en patte, regarde autour de lui dans la rue.", "Écouter Is there a bank near here", p("l1-3")),
    v("ench1-4", "Yes, there is.", "Oui, il y en a une.", "Le chauffeur de taxi hoche la tête et montre du doigt.", "Écouter Yes, there is", p("l1-4")),
    v("ench1-5", "There isn't a subway here.", "Il n'y a pas de métro ici.", "Une rue sans bouche de métro, juste un arrêt de bus.", "Écouter There isn't a subway here", p("l1-5")),
    v("ench1-6", "Are there any shops?", "Il y a des magasins ?", "Murzik regarde la longue rue.", "Écouter Are there any shops", p("l1-6")),
    v("ench1-7", "There's a big lake.", "Il y a un grand lac.", "Un immense lac bleu, comme une mer.", "Écouter There's a big lake", p("l1-7")),
  ],
  dialogue: {
    title: "Tony",
    note: "Tony est chauffeur de taxi, un joyeux amateur de pizza. Neighborhood — « quartier » (orthographe américaine).",
    lines: [
      line("tony", "Hey, Murzik! Welcome to Chicago! I'm Tony. Get in!", "Hé, Murzik ! Bienvenue à Chicago ! Moi, c'est Tony. Monte !"),
      line("murzik", "Hello, Tony! What's in your neighborhood?", "Bonjour, Tony ! Qu'est-ce qu'il y a dans ton quartier ?"),
      line("tony", "There's a big park and there are lots of cafés.", "Il y a un grand parc et plein de cafés."),
      line("tom", "Is there a bank near here?", "Et il y a une banque près d'ici ?"),
      line("tony", "Yes, there is. There's a bank on the corner.", "Oui, il y en a une. Il y a une banque au coin."),
      line("murzik", "And is there a lake?", "Et il y a un lac ?"),
      line("tony", "Ha! There's a lake — like a sea! Lake Michigan!", "Ha ! Il y a un lac — comme une mer ! Le lac Michigan !"),
    ],
    gist: choice("ench1-d1", "Qu'est-ce qu'il y a dans le quartier de Tony ?", [
      ["Un grand parc, plein de cafés et une banque.", true],
      ["Seulement le métro.", false],
      ["Rien, seulement des maisons.", false],
    ]),
  },
  grammar: [
    {
      title: "There is / there are",
      paragraphs: [
        "Pour dire qu'il y a quelque chose quelque part : There's a park. (une chose) There are two cafés. (plusieurs) En français, « il y a » sert pour les deux ; en anglais, il faut choisir : is ou are.",
        "Question : Is there a bank? Are there any shops? Réponse : Yes, there is / are. No, there isn't / aren't. Dans les questions au pluriel, any joue le rôle de notre « des ».",
      ],
      examples: [
        { ru: "There's a café on the corner.", en: "Il y a un café au coin." },
        { ru: "Are there any parks? — Yes, there are.", en: "Il y a des parcs ? — Oui, il y en a." },
      ],
    },
  ],
  tasks: [
    choice("ench1-t1", "Comment dire « Il y a trois magasins ici » ?", [
      ["There are three shops.", true],
      ["There is three shops.", false],
      ["It has three shops.", false],
    ], { skill: "grammar" }),
    listen("ench1-t2", "Écoute. Qu'est-ce qu'il y a près d'ici ?", "There's a hospital near here.", [
      ["Un hôpital.", true],
      ["Une banque.", false],
      ["Un parc.", false],
    ]),
    match("ench1-t3", "Relie les paires.", [
      ["park", "parc"],
      ["bank", "banque"],
      ["lake", "lac"],
      ["near here", "près d'ici"],
    ], { skill: "words" }),
    missing("ench1-t4", "Quelle lettre manque ? (« il y a »)", "T", "ere is", "h", ["h", "e", "r"]),
    speak("ench1-t5", "What's there near your home?", "There's a park and there are two shops.", "Il y a un parc et deux magasins.", { help: "Raconte à voix haute ce qu'il y a près de chez toi." }),
    choice("ench1-t6", "Comment dire « Il pleut en ce moment » ?", [
      ["It's raining.", true],
      ["It rains.", false],
      ["There is rain.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "city-map",
    itemName: "Plan de Chicago",
    itemNameRu: "City map",
    ru: "Hooray! A city map!",
    en: "Hourra ! Un plan de la ville !",
    a11y: "Un grand plan de Chicago accroché au mur. Le lac Michigan est bleu, les parcs sont verts, la maison de Murzik est entourée d'un rond rouge.",
    image: p("city-map"),
    steps: ["Tony emmène Murzik dans une maison avec vue sur le lac.", "Il sort un plan de la ville de la boîte à gants.", "« Your first Chicago map! » — « Ton premier plan de Chicago ! »", "Murzik entoure sa maison d'un rond rouge."],
    bridge: "Le matin, Murzik veut trouver la gare tout seul. Mais où est-elle ?",
  },
};

const chicago2: Lesson = {
  id: "en-a1-chicago-2",
  level: "A1",
  cityId: "en-chicago",
  number: 2,
  title: "Where is the station? — Où est la gare ?",
  minutes: 7,
  goals: ["Dire où se trouve quelque chose", "Dire « à côté », « en face », « entre »", "Dire « au coin »"],
  vocabNote: "Next to — à côté de, opposite — en face de, between — entre, behind — derrière, in front of — devant, on the corner — au coin.",
  vocab: [
    v("ench2-1", "Where is the station?", "Où est la gare ?", "Murzik avec sa valise, debout au carrefour.", "Écouter Where is the station", p("l2-1")),
    v("ench2-2", "It's next to the bank.", "Elle est à côté de la banque.", "La gare et la banque sont côte à côte.", "Écouter It's next to the bank", p("l2-2")),
    v("ench2-3", "It's opposite the park.", "Elle est en face du parc.", "La gare, de l'autre côté de la rue par rapport au parc.", "Écouter It's opposite the park", p("l2-3")),
    v("ench2-4", "between the hotel and the museum", "entre l'hôtel et le musée", "Une petite boutique entre un grand hôtel et un musée.", "Écouter between the hotel and the museum", p("l2-4")),
    v("ench2-5", "behind the church", "derrière l'église", "Une maison derrière la vieille église.", "Écouter behind the church", p("l2-5")),
    v("ench2-6", "in front of the hotel", "devant l'hôtel", "Un taxi garé devant l'hôtel.", "Écouter in front of the hotel", p("l2-6")),
    v("ench2-7", "on the corner", "au coin", "Un petit café au coin de deux rues.", "Écouter on the corner", p("l2-7")),
  ],
  dialogue: {
    title: "Qu'est-ce qui est où",
    note: "Museum — « musée ». Pizza place — « pizzeria ».",
    lines: [
      line("murzik", "Excuse me, where is the station?", "Excusez-moi, où est la gare ?"),
      line("passerby", "It's next to the bank, opposite the park.", "À côté de la banque, en face du parc."),
      line("murzik", "Thank you! And where is the museum?", "Merci ! Et où est le musée ?"),
      line("passerby", "It's between the hotel and the church.", "Entre l'hôtel et l'église."),
      line("tony", "Murzik! I'm here, in front of the hotel! And my pizza place is on the corner!", "Murzik ! Je suis là, devant l'hôtel ! Et ma pizzeria préférée est au coin !"),
    ],
    gist: choice("ench2-d1", "Où est la gare ?", [
      ["À côté de la banque, en face du parc.", true],
      ["Entre l'hôtel et l'église.", false],
      ["Au coin, près de la pizzeria.", false],
    ]),
  },
  grammar: [
    {
      title: "Où : les prépositions de lieu",
      paragraphs: [
        "Next to the bank — à côté de la banque. Opposite the park — en face du parc. Between A and B — entre A et B. Behind — derrière, in front of — devant. En français, on dit « à côté DE », « en face DE » ; en anglais, pas de « of » après next to et opposite.",
        "Devant le lieu, on met souvent the : the bank, the park — celui dont on parle, celui d'ici.",
      ],
      examples: [
        { ru: "The café is opposite the station.", en: "Le café est en face de la gare." },
        { ru: "The bank is between the hotel and the shop.", en: "La banque est entre l'hôtel et le magasin." },
      ],
    },
  ],
  tasks: [
    choice("ench2-t1", "Comment dire « en face du musée » ?", [
      ["opposite the museum", true],
      ["opposite of museum", false],
      ["in opposite the museum", false],
    ], { skill: "grammar" }),
    listen("ench2-t2", "Écoute. Où est le café ?", "The café is behind the hotel.", [
      ["Derrière l'hôtel.", true],
      ["Devant l'hôtel.", false],
      ["À côté de l'hôtel.", false],
    ]),
    match("ench2-t3", "Relie les paires.", [
      ["next to", "à côté de"],
      ["opposite", "en face de"],
      ["between", "entre"],
      ["behind", "derrière"],
    ], { skill: "words" }),
    missing("ench2-t4", "Quelle lettre manque ? (« entre »)", "betw", "en", "e", ["e", "i", "a"]),
    speak("ench2-t5", "Where is your favourite café?", "It's on the corner, opposite the park.", "Au coin, en face du parc.", { help: "Dis à voix haute où se trouve ton endroit préféré." }),
    choice("ench2-t6", "Comment demander « Il y a une banque ici ? »", [
      ["Is there a bank near here?", true],
      ["There is a bank near here?", false],
      ["Is a bank there here?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pass",
    itemName: "Carte de transport",
    itemNameRu: "Travel card",
    ru: "Hooray! A travel card!",
    en: "Hourra ! Une carte de transport !",
    a11y: "Une carte de transport en plastique bleue, accrochée à un cordon près de la porte.",
    image: p("pass"),
    steps: ["À la gare, Tony achète une carte de transport à Murzik.", "« Buses, trains — everything! » — « Bus, trains — tout ! »", "Murzik la passe autour de son cou.", "Il peut maintenant voyager dans toute la ville."],
    bridge: "Murzik veut aller jusqu'à la pizzeria de Tony tout seul. Tony lui explique le chemin.",
  },
};

const chicago3: Lesson = {
  id: "en-a1-chicago-3",
  level: "A1",
  cityId: "en-chicago",
  number: 3,
  title: "Turn left! — Tourne à gauche !",
  minutes: 7,
  goals: ["Expliquer le chemin", "Comprendre : go straight on, turn left, turn right", "Dire « à gauche », « à droite »"],
  vocabNote: "Pour expliquer le chemin, le verbe va en premier : Go straight on. Turn left. C'est l'impératif — comme ça, en anglais, on donne les indications.",
  vocab: [
    v("ench3-1", "Go straight on.", "Va tout droit.", "Une flèche tout droit le long d'une grande rue.", "Écouter Go straight on", p("l3-1")),
    v("ench3-2", "Turn left.", "Tourne à gauche.", "Une flèche qui tourne à gauche.", "Écouter Turn left", p("l3-2")),
    v("ench3-3", "Turn right.", "Tourne à droite.", "Une flèche qui tourne à droite.", "Écouter Turn right", p("l3-3")),
    v("ench3-4", "Cross the street.", "Traverse la rue.", "Murzik traverse la rue sur le passage piéton.", "Écouter Cross the street", p("l3-4")),
    v("ench3-5", "It's on your left.", "C'est sur ta gauche.", "La pizzeria, à gauche de Murzik.", "Écouter It's on your left", p("l3-5")),
    v("ench3-6", "It's on your right.", "C'est sur ta droite.", "Le parc, à droite de Murzik.", "Écouter It's on your right", p("l3-6")),
    v("ench3-7", "at the traffic lights", "au feu", "Un feu au carrefour, il est vert.", "Écouter at the traffic lights", p("l3-7")),
  ],
  dialogue: {
    title: "Le chemin vers la pizzeria",
    note: "Then — « ensuite ». Easy — « facile ».",
    lines: [
      line("murzik", "Tony, how do I get to your pizza place?", "Tony, comment je fais pour aller à ta pizzeria ?"),
      line("tony", "Easy! Go straight on. At the traffic lights, turn left.", "Facile ! Va tout droit. Au feu, tourne à gauche."),
      line("murzik", "Turn left at the traffic lights. Then?", "À gauche au feu. Et ensuite ?"),
      line("tony", "Cross the street and turn right. It's on your left, next to the bank.", "Traverse la rue et tourne à droite. Elle sera sur ta gauche, à côté de la banque."),
      line("murzik", "Straight on, left, cross, right… on my left! Got it!", "Tout droit, à gauche, je traverse, à droite… sur ma gauche ! Compris !"),
    ],
    gist: choice("ench3-d1", "Où est la pizzeria ?", [
      ["À gauche, à côté de la banque.", true],
      ["À droite, en face du parc.", false],
      ["Tout droit, près du lac.", false],
    ]),
  },
  grammar: [
    {
      title: "Les indications : Turn left!",
      paragraphs: [
        "Pour dire quoi faire, on commence directement par le verbe : Go! Turn left! Cross the street! En français, l'impératif change : « tourne / tournez » ; en anglais, un seul mot pour tout le monde : turn. C'est poli si on ajoute please ou si on le dit d'un ton amical.",
        "« Ne fais pas » — Don't + verbe : Don't turn right! Don't cross here! Comme « ne… pas » en français, mais en un seul mot.",
      ],
      examples: [
        { ru: "Go straight on and turn right.", en: "Va tout droit et tourne à droite." },
        { ru: "Don't cross the street here!", en: "Ne traverse pas la rue ici !" },
      ],
    },
  ],
  tasks: [
    choice("ench3-t1", "Comment dire « Ne tourne pas à gauche ! » ?", [
      ["Don't turn left!", true],
      ["No turn left!", false],
      ["Not turn left!", false],
    ], { skill: "grammar" }),
    listen("ench3-t2", "Écoute. Où faut-il aller ?", "Go straight on and turn right at the traffic lights.", [
      ["Tout droit, à droite au feu.", true],
      ["Tout droit, à gauche au feu.", false],
      ["À droite, puis tout droit.", false],
    ]),
    match("ench3-t3", "Relie les paires.", [
      ["left", "à gauche"],
      ["right", "à droite"],
      ["straight on", "tout droit"],
      ["traffic lights", "feux"],
    ], { skill: "words" }),
    missing("ench3-t4", "Quelle lettre manque ? (« à droite »)", "ri", "ht", "g", ["g", "h", "k"]),
    speak("ench3-t5", "How do I get to the park?", "Go straight on and turn left. It's on your right.", "Va tout droit et tourne à gauche. Il sera sur ta droite.", { help: "Explique le chemin à voix haute." }),
    choice("ench3-t6", "Comment dire « à côté de la banque » ?", [
      ["next to the bank", true],
      ["next the bank", false],
      ["near of the bank", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lake-mug",
    itemName: "Mug avec le lac",
    itemNameRu: "Lake mug",
    ru: "Hooray! A mug!",
    en: "Hourra ! Un mug !",
    a11y: "Un grand mug blanc avec un lac bleu dessiné et un petit voilier.",
    image: p("lake-mug"),
    steps: ["Murzik trouve la pizzeria tout seul !", "Tony est si content qu'il lui offre un mug avec le lac.", "« You found it! Good job! » — « Tu l'as trouvée ! Bravo ! »", "Le mug trône sur l'étagère près de la fenêtre."],
    bridge: "Le lendemain, Murzik veut aller au lac. Mais comment ?",
  },
};

const chicago4: Lesson = {
  id: "en-a1-chicago-4",
  level: "A1",
  cityId: "en-chicago",
  number: 4,
  title: "By bus or by train? — En bus ou en train ?",
  minutes: 7,
  goals: ["Nommer les transports : by bus, by train", "Demander comment aller quelque part", "Dire combien de temps prend le trajet"],
  vocabNote: "Le moyen de transport — by : by bus, by train, by taxi, by bike. Mais « à pied » — on foot. It takes ten minutes — « ça prend dix minutes ».",
  vocab: [
    v("ench4-1", "by bus", "en bus", "Un bus rouge à l'arrêt.", "Écouter by bus", p("l4-1")),
    v("ench4-2", "by train", "en train", "Un train aérien file sur un pont entre les immeubles.", "Écouter by train", p("l4-2")),
    v("ench4-3", "by taxi", "en taxi", "Le taxi jaune de Tony.", "Écouter by taxi", p("l4-3")),
    v("ench4-4", "by bike", "à vélo", "Murzik sur un petit vélo le long du lac.", "Écouter by bike", p("l4-4")),
    v("ench4-5", "on foot", "à pied", "Des traces de petites pattes sur le chemin.", "Écouter on foot", p("l4-5")),
    v("ench4-6", "How do you get to work?", "Comment tu vas au travail ?", "Murzik interroge Tony avec curiosité.", "Écouter How do you get to work", p("l4-6")),
    v("ench4-7", "It takes twenty minutes.", "Ça prend vingt minutes.", "Une horloge, l'aiguille parcourt vingt minutes.", "Écouter It takes twenty minutes", p("l4-7")),
  ],
  dialogue: {
    title: "On y va comment ?",
    note: "The L — le métro aérien de Chicago (de elevated — « surélevé »). Beach — « plage ».",
    lines: [
      line("murzik", "Tony, how do I get to the beach? By bus?", "Tony, comment je vais à la plage ? En bus ?"),
      line("tony", "By bus or by train. The train is fast. It takes ten minutes.", "En bus ou en train. Le train est rapide. Ça prend dix minutes."),
      line("murzik", "And how do you get to work?", "Et toi, comment tu vas au travail ?"),
      line("tony", "By taxi, of course! I'm a taxi driver!", "En taxi, bien sûr ! Je suis chauffeur de taxi !"),
      line("tom", "I go everywhere on foot. It's good for photos.", "Moi, je vais partout à pied. C'est bien pour les photos."),
      line("murzik", "And I go by bike! Look!", "Et moi à vélo ! Regardez !"),
    ],
    gist: choice("ench4-d1", "Combien de temps jusqu'à la plage en train ?", [
      ["Dix minutes.", true],
      ["Vingt minutes.", false],
      ["Une heure.", false],
    ]),
  },
  grammar: [
    {
      title: "By bus, on foot, It takes…",
      paragraphs: [
        "Le transport — by + le mot sans a ni the : by bus, by car, by plane. En français, on dit « en bus », « en voiture », « à vélo » — des prépositions différentes ; en anglais, by partout. Exception : on foot — à pied.",
        "La durée : It takes + le temps : It takes five minutes. It takes an hour. Question : How long does it take? En français : « ça prend combien de temps ? ».",
      ],
      examples: [
        { ru: "I go to work by bus. It takes half an hour.", en: "Je vais au travail en bus. Ça prend une demi-heure." },
        { ru: "How long does it take by train?", en: "Ça prend combien de temps en train ?" },
      ],
    },
  ],
  tasks: [
    choice("ench4-t1", "Comment dire « en voiture » ?", [
      ["by car", true],
      ["by a car", false],
      ["on car", false],
    ], { skill: "grammar" }),
    listen("ench4-t2", "Écoute. Comment va-t-il au travail ?", "I go to work on foot. It takes fifteen minutes.", [
      ["À pied, quinze minutes.", true],
      ["En bus, cinquante minutes.", false],
      ["À vélo, cinq minutes.", false],
    ]),
    match("ench4-t3", "Relie les paires.", [
      ["by bus", "en bus"],
      ["by train", "en train"],
      ["by bike", "à vélo"],
      ["on foot", "à pied"],
    ], { skill: "words" }),
    spell("ench4-t4", "Assemble les lettres du mot « train ».", "train"),
    speak("ench4-t5", "How do you get to work?", "I go by bus. It takes twenty minutes.", "En bus. Ça prend vingt minutes.", { help: "Raconte à voix haute comment tu vas au travail ou à l'école." }),
    choice("ench4-t6", "Comment dire « Tourne à droite » ?", [
      ["Turn right.", true],
      ["You right turn.", false],
      ["Turning right.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "shelf",
    itemName: "Étagère en vieille planche",
    itemNameRu: "Shelf",
    ru: "Hooray! A shelf!",
    en: "Hourra ! Une étagère !",
    a11y: "Une simple étagère en bois faite d'une vieille planche, avec un mug, une carte de transport et des galets de la plage.",
    image: p("shelf"),
    steps: ["Sur la plage, Murzik trouve une belle vieille planche, polie par l'eau.", "Tony l'aide à en faire une étagère.", "« Made in Chicago! » — « Fait à Chicago ! »", "Murzik y pose ses galets de la plage."],
    bridge: "Le matin, Murzik ne trouve pas ses clés. Où sont-elles ?",
  },
};

const chicago5: Lesson = {
  id: "en-a1-chicago-5",
  level: "A1",
  cityId: "en-chicago",
  number: 5,
  title: "In, on, under — Dans, sur, sous",
  minutes: 7,
  goals: ["Dire où est un objet : in, on, under", "Demander : Where are my keys?", "Retrouver un objet perdu"],
  vocabNote: "In — dans (à l'intérieur), on — sur (dessus), under — sous. Where is…? — pour une chose, Where are…? — pour plusieurs.",
  vocab: [
    v("ench5-1", "Where are my keys?", "Où sont mes clés ?", "Murzik, désemparé, debout au milieu de la chambre, tout est sens dessus dessous.", "Écouter Where are my keys", p("l5-1")),
    v("ench5-2", "They're on the table.", "Elles sont sur la table.", "Les clés sont posées sur la table.", "Écouter They're on the table", p("l5-2")),
    v("ench5-3", "It's in the bag.", "Il est dans le sac.", "Le téléphone dépasse du sac.", "Écouter It's in the bag", p("l5-3")),
    v("ench5-4", "under the bed", "sous le lit", "Une chaussette perdue sous le lit.", "Écouter under the bed", p("l5-4")),
    v("ench5-5", "on the shelf", "sur l'étagère", "Un mug posé sur l'étagère.", "Écouter on the shelf", p("l5-5")),
    v("ench5-6", "in my pocket", "dans ma poche", "Des clés dépassent de la poche du manteau.", "Écouter in my pocket", p("l5-6")),
    v("ench5-7", "Here they are!", "Les voici !", "Murzik lève les clés, ravi.", "Écouter Here they are", p("l5-7")),
  ],
  dialogue: {
    title: "Où sont les clés ?",
    note: "Look! — « Regarde ! » Silly — « petit bêta ».",
    lines: [
      line("murzik", "Tom! Where are my keys?", "Tom ! Où sont mes clés ?"),
      line("tom", "Are they on the table?", "Elles sont sur la table ?"),
      line("murzik", "No, they aren't. Are they under the bed? No…", "Non. Sous le lit ? Non…"),
      line("tom", "In your bag?", "Dans ton sac ?"),
      line("murzik", "No! Only my phone is in the bag.", "Non ! Il n'y a que mon téléphone dans le sac."),
      line("tom", "Look! They're in your pocket, silly!", "Regarde ! Elles sont dans ta poche, petit bêta !"),
      line("murzik", "Here they are!", "Les voici !"),
    ],
    gist: choice("ench5-d1", "Où étaient les clés ?", [
      ["Dans la poche de Murzik.", true],
      ["Sous le lit.", false],
      ["Dans le sac.", false],
    ]),
  },
  grammar: [
    {
      title: "In, on, under",
      paragraphs: [
        "In — à l'intérieur : in the bag, in the box, in my pocket. On — sur la surface : on the table, on the shelf. Under — en dessous : under the bed. En français, on dit « dans la poche », « sur la table » — presque pareil.",
        "Where is the phone? — It's in the bag. Where are the keys? — They're on the table. Au pluriel — are et they : « mes clés » = my keys, « elles » = they.",
      ],
      examples: [
        { ru: "The cat is under the table.", en: "Le chat est sous la table." },
        { ru: "My glasses are on my head!", en: "Mes lunettes sont sur ma tête !" },
      ],
    },
  ],
  tasks: [
    choice("ench5-t1", "Comment dire « Les livres sont sur l'étagère » ?", [
      ["The books are on the shelf.", true],
      ["The books is on the shelf.", false],
      ["The books are in the shelf under.", false],
    ], { skill: "grammar" }),
    listen("ench5-t2", "Écoute. Où est le téléphone ?", "Your phone is under the sofa.", [
      ["Sous le canapé.", true],
      ["Sur le canapé.", false],
      ["Dans le sac.", false],
    ]),
    match("ench5-t3", "Relie les paires.", [
      ["in", "dans"],
      ["on", "sur"],
      ["under", "sous"],
      ["pocket", "poche"],
    ], { skill: "words" }),
    missing("ench5-t4", "Quelle lettre manque ? (« clés »)", "k", "ys", "e", ["e", "i", "a"]),
    speak("ench5-t5", "Where is your phone?", "It's on the table.", "Sur la table.", { help: "Dis à voix haute où est ton téléphone en ce moment." }),
    choice("ench5-t6", "Comment dire « en bus » ?", [
      ["by bus", true],
      ["on bus", false],
      ["by the bus", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "key-holder",
    itemName: "Porte-clés mural",
    itemNameRu: "Key holder",
    ru: "Hooray! A key holder!",
    en: "Hourra ! Un porte-clés !",
    a11y: "Un petit porte-clés mural en bois en forme de maisonnette avec des crochets, accroché près de la porte ; sur un crochet, les clés de Murzik.",
    image: p("key-holder"),
    steps: ["Tom offre à Murzik un porte-clés en forme de maisonnette.", "« For your keys. Not in your pocket! » — « Pour tes clés. Pas dans ta poche ! »", "Murzik l'accroche près de la porte.", "Les clés sont maintenant toujours à leur place."],
    bridge: "Le soir, Tony invite tout le monde chez lui : « Pizza night! »",
  },
};

const chicago6: Lesson = {
  id: "en-a1-chicago-6",
  level: "A1",
  cityId: "en-chicago",
  number: 6,
  title: "Pizza night — Soirée pizza",
  minutes: 7,
  goals: ["Inviter et proposer : How about…?", "Offrir à manger : Help yourself!", "Dire que ça sent bon et que c'est bon"],
  vocabNote: "How about…? — « Et si on prenait… ? » Help yourself! — « Sers-toi ! » It smells good — « ça sent bon ».",
  vocab: [
    v("ench6-1", "How about pizza?", "Et si on prenait une pizza ?", "Tony tient au-dessus de sa tête une énorme boîte à pizza.", "Écouter How about pizza", p("l6-1")),
    v("ench6-2", "I'm hungry!", "J'ai faim !", "Le ventre de Murzik grogne bruyamment.", "Écouter I'm hungry", p("l6-2")),
    v("ench6-3", "It smells good!", "Ça sent bon !", "Murzik hume la pizza, les yeux fermés.", "Écouter It smells good", p("l6-3")),
    v("ench6-4", "a slice of pizza", "une part de pizza", "Une part épaisse de pizza de Chicago, le fromage file.", "Écouter a slice of pizza", p("l6-4")),
    v("ench6-5", "Help yourself!", "Servez-vous !", "Tony sourit largement et pousse l'assiette.", "Écouter Help yourself", p("l6-5")),
    v("ench6-6", "It's very thick!", "Elle est très épaisse !", "La pizza est haute comme une tarte.", "Écouter It's very thick", p("l6-6")),
    v("ench6-7", "Can I have another slice?", "Je peux reprendre une part ?", "Murzik tend son assiette vide.", "Écouter Can I have another slice", p("l6-7")),
  ],
  dialogue: {
    title: "Chez Tony",
    note: "Deep-dish pizza — la pizza de Chicago, haute comme une tarte. Another — « encore un(e) ».",
    lines: [
      line("tony", "Pizza night! How about deep-dish pizza?", "Soirée pizza ! Et si on prenait une deep-dish pizza ?"),
      line("murzik", "Yes, please! I'm hungry! It smells good!", "Oui, s'il vous plaît ! J'ai faim ! Ça sent bon !"),
      line("tony", "Help yourself! Take a slice.", "Servez-vous ! Prenez une part."),
      line("murzik", "Wow! It's very thick! It's like a pie!", "Ouah ! Elle est super épaisse ! Comme une tarte !"),
      line("tony", "That's Chicago pizza! My grandma's recipe… and Mrs Hope's!", "Ça, c'est la pizza de Chicago ! La recette de ma grand-mère… et de Mme Hope !"),
      line("murzik", "Can I have another slice?", "Je peux reprendre une part ?"),
    ],
    gist: choice("ench6-d1", "Comment est la pizza de Chicago ?", [
      ["Haute et épaisse, comme une tarte.", true],
      ["Fine et croustillante.", false],
      ["Petite et sucrée.", false],
    ]),
  },
  grammar: [
    {
      title: "Proposer et servir",
      paragraphs: [
        "Proposer : How about pizza? Would you like a slice? Let's eat! Servir : Help yourself! Here you are.",
        "Les sensations : It smells good. — Ça sent bon. It tastes great. — C'est délicieux. Another — « encore un(e) du même genre » : another slice, another cup. Et attention : I'm hungry se dit avec to be — « je SUIS affamé », pas avec have comme « j'ai faim » en français !",
      ],
      examples: [
        { ru: "How about a cup of tea?", en: "Et si on prenait une tasse de thé ?" },
        { ru: "Can I have another cookie?", en: "Je peux reprendre un cookie ?" },
      ],
    },
  ],
  tasks: [
    choice("ench6-t1", "Comment redemander une part ?", [
      ["Can I have another slice?", true],
      ["Can I have other slice?", false],
      ["I have more slice?", false],
    ], { skill: "grammar" }),
    listen("ench6-t2", "Écoute. Qu'est-ce qu'on propose ?", "How about a cup of coffee?", [
      ["Une tasse de café.", true],
      ["Une part de pizza.", false],
      ["Aller au cinéma.", false],
    ]),
    match("ench6-t3", "Relie les paires.", [
      ["hungry", "affamé"],
      ["a slice", "une part"],
      ["thick", "épaisse"],
      ["Help yourself!", "Sers-toi !"],
    ], { skill: "words" }),
    spell("ench6-t4", "Assemble les lettres du mot « pizza ».", "pizza"),
    speak("ench6-t5", "How about pizza?", "Yes, please! I'm hungry!", "Oui, s'il te plaît ! J'ai faim !", { help: "Réponds à voix haute à la proposition." }),
    choice("ench6-t6", "Comment dire « Les clés sont sous le lit » ?", [
      ["The keys are under the bed.", true],
      ["The keys is under the bed.", false],
      ["The keys are on under the bed.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "plant",
    itemName: "Plante verte",
    itemNameRu: "Green plant",
    ru: "Hooray! A green plant!",
    en: "Hourra ! Une plante verte !",
    a11y: "Une grande plante verte aux larges feuilles, dans un pot blanc, près de la fenêtre.",
    image: p("plant"),
    steps: ["Chez Tony, il y a plein de plantes.", "Il en donne une à Murzik, avec de grandes feuilles.", "« Water it every week! » — « Arrose-la chaque semaine ! »", "La plante trône près de la fenêtre, face au lac."],
    bridge: "Le dernier jour, Tony emmène Murzik et Tom à la gare. En chemin — une surprise.",
  },
};

const chicago7: Lesson = {
  id: "en-a1-chicago-7",
  level: "A1",
  cityId: "en-chicago",
  number: 7,
  title: "Goodbye, Chicago! — Au revoir, Chicago !",
  minutes: 8,
  goals: ["Demander et expliquer le chemin", "Décrire un quartier : there is, there are", "Revoir tous les mots de Chicago"],
  vocabNote: "On révise : there is / there are, next to / opposite / between, turn left / right, by bus / on foot, in / on / under.",
  vocab: [
    v("ench7-1", "There's something in the glove box.", "Il y a quelque chose dans la boîte à gants.", "Tony ouvre la boîte à gants du taxi.", "Écouter There's something in the glove box", p("l7-1")),
    v("ench7-2", "the recipe for deep-dish pizza", "la recette de la deep-dish pizza", "Une page avec le dessin d'une pizza haute.", "Écouter the recipe for deep-dish pizza", p("l7-2")),
    v("ench7-3", "a pizza pan", "un moule à pizza", "Un moule à pizza rond et profond, en fonte.", "Écouter a pizza pan", p("l7-3")),
    v("ench7-4", "We're going south.", "On va vers le sud.", "Tom montre sur la carte une flèche vers le bas, vers le sud.", "Écouter We're going south", p("l7-4")),
    v("ench7-5", "Drive safely!", "Conduis prudemment !", "Murzik fait signe à Tony devant la gare.", "Écouter Drive safely", p("l7-5")),
    v("ench7-6", "Thanks for everything!", "Merci pour tout !", "Murzik fait un câlin à Tony.", "Écouter Thanks for everything", p("l7-6")),
    v("ench7-7", "Have fun in New Orleans!", "Amusez-vous bien à La Nouvelle-Orléans !", "Tony fait signe depuis la fenêtre du taxi.", "Écouter Have fun in New Orleans", p("l7-7")),
  ],
  dialogue: {
    title: "La huitième page",
    note: "Glove box — « boîte à gants » de la voiture. Jazz — le jazz, la musique de La Nouvelle-Orléans.",
    lines: [
      line("tony", "Murzik, there's something in the glove box. It's for you.", "Murzik, il y a quelque chose dans la boîte à gants. C'est pour toi."),
      line("murzik", "A page! The recipe for deep-dish pizza!", "Une page ! La recette de la deep-dish pizza !"),
      line("tony", "And there's a pizza pan in the back. For your café!", "Et il y a un moule à pizza à l'arrière. Pour ton café !"),
      line("tom", "Thanks for everything, Tony! Where's the next page?", "Merci pour tout, Tony ! Où est la page suivante ?"),
      line("tony", "In New Orleans. My friend Bernadette sings jazz there. Go south!", "À La Nouvelle-Orléans. Mon amie Bernadette y chante du jazz. Allez vers le sud !"),
      line("murzik", "Drive safely, Tony!", "Conduis prudemment, Tony !"),
      line("tony", "Have fun in New Orleans!", "Amusez-vous bien à La Nouvelle-Orléans !"),
    ],
    gist: choice("ench7-d1", "Où est la page suivante ?", [
      ["À La Nouvelle-Orléans, chez la chanteuse Bernadette.", true],
      ["À Boston, chez Emily.", false],
      ["À Chicago, près du lac.", false],
    ]),
  },
  grammar: [
    {
      title: "La ville et le chemin : tout ensemble",
      paragraphs: [
        "Ce qu'il y a : There's a park. There are two cafés. Où : It's next to the bank, opposite the park.",
        "Le chemin : Go straight on, turn left, it's on your right. Le transport : by bus, by train, on foot. It takes ten minutes.",
      ],
      examples: [
        { ru: "There's a café opposite the station. Go straight on, it's on your left.", en: "Il y a un café en face de la gare. Va tout droit, il sera sur ta gauche." },
        { ru: "I go to work by train. It takes twenty minutes.", en: "Je vais au travail en train. Ça prend vingt minutes." },
      ],
    },
  ],
  tasks: [
    listen("ench7-t1", "Examen d'écoute. Comment aller au musée ?", "Go straight on. Turn right at the traffic lights. The museum is on your left, opposite the park.", [
      ["Tout droit, à droite au feu, le musée est à gauche, en face du parc.", true],
      ["Tout droit, à gauche au feu, le musée est à droite, à côté du parc.", false],
      ["À droite, puis tout droit, le musée est derrière le parc.", false],
    ]),
    choice("ench7-t2", "Choisis la bonne phrase.", [
      ["There are two banks near here.", true],
      ["There is two banks near here.", false],
      ["It are two banks near here.", false],
    ], { skill: "grammar" }),
    match("ench7-t3", "Relie les paires.", [
      ["Drive safely!", "Conduis prudemment !"],
      ["Thanks for everything!", "Merci pour tout !"],
      ["south", "sud"],
      ["glove box", "boîte à gants"],
    ], { skill: "words" }),
    spell("ench7-t4", "Assemble les lettres du mot « sud ».", "south"),
    speak("ench7-t5", "How do I get to the station?", "Go straight on and turn left. It's next to the bank.", "Va tout droit et tourne à gauche. La gare est à côté de la banque.", { help: "Explique à voix haute le chemin jusqu'à la gare." }),
    script("ench7-t6", "Souviens-toi de tout Chicago. Termine la conversation dans la rue.", [
      { speaker: "Passante", text: "Can I help you?" },
      { speaker: "Toi", answer: "Yes, please. Is there a bank near here?", options: ["Yes, please. Is there a bank near here?", "Yes, please. There is a bank near here?", "Yes, please. Are there a bank?"] },
      { speaker: "Passante", text: "Yes, there is. Go straight on and turn left." },
      { speaker: "Toi", answer: "Is it far?", options: ["Is it far?", "It's far is?", "Are it far?"] },
      { speaker: "Passante", text: "No, it takes five minutes on foot." },
      { speaker: "Toi", answer: "Thank you very much!", options: ["Thank you very much!", "Help yourself!", "Drive safely!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pizza-pan",
    itemName: "Moule à pizza",
    itemNameRu: "Pizza pan",
    ru: "Hooray! A pizza pan!",
    en: "Hourra ! Un moule à pizza !",
    a11y: "Un moule à pizza rond et profond en fonte, noirci par des années de cuisine.",
    image: p("pizza-pan"),
    steps: ["Tony sort le lourd moule de la banquette arrière.", "« My grandma's pan. Forty years of pizza! » — « Le moule de ma grand-mère. Quarante ans de pizza ! »", "Murzik le soulève à peine.", "Il le pose soigneusement dans la valise."],
    bridge: "La page suivante est au sud, à La Nouvelle-Orléans.",
  },
};

const story: CityStory = {
  home: {
    name: "Appartement avec vue sur le lac",
    nameRu: "Murzik's flat in Chicago",
    image: p("home"),
    a11y: "Un appartement vide et lumineux, tout en haut d'un immeuble. Par la grande fenêtre, le lac Michigan, bleu jusqu'à l'horizon. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "pizza-pan",
  welcomeRu: "Hello, Chicago!",
  welcomeEn: "Bonjour, Chicago !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Chicago : de hauts immeubles de verre au bord d'un immense lac bleu, le vent fait voler l'écharpe de Murzik.",
  departureImage: p("departure"),
  departureA11y: "Tony fait signe depuis la fenêtre du taxi jaune, devant la gare.",
  finale: [
    {
      image: p("page"),
      a11y: "En gros plan : la huitième page du livre de recettes, la recette de la pizza de Chicago. En marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la huitième page. En marge — un mot de Mme Hope :" },
        { ru: "At my café, there was always a map for lost guests.", en: "Dans mon café, il y avait toujours un plan pour les clients perdus." },
        { en: "Murzik regarde son plan de Chicago et sourit." },
      ],
    },
    {
      image: p("pizza-pan"),
      a11y: "Murzik fait le tour de son appartement avec vue sur le lac, meublé leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de son appartement à Chicago. Tom le photographie pour son journal." },
        { en: "Pour son futur café, il emporte le moule à pizza de la grand-mère." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "Chicago complete!", en: "Chicago terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Tony fait un signe d'adieu.",
      lines: [
        { ru: "Goodbye, Tony!", en: "Au revoir, Tony !" },
        { ru: "Next stop: New Orleans!", en: "Prochain arrêt : La Nouvelle-Orléans !" },
      ],
    },
    {
      image: p("train"),
      a11y: "Le train descend vers le sud le long d'un large fleuve, il fait de plus en plus chaud.",
      lines: [{ ru: "Chicago → New Orleans", en: "Chicago → La Nouvelle-Orléans" }],
    },
    {
      image: pic("en/neworleans/arrival"),
      a11y: "Murzik et Tom à La Nouvelle-Orléans : de vieilles maisons aux balcons en fer forgé, des fleurs, une fanfare joue dans la rue.",
      lines: [
        { ru: "Hello, New Orleans!", en: "Bonjour, La Nouvelle-Orléans !" },
        { ru: "It's hot and there's music everywhere!", en: "Il fait chaud et il y a de la musique partout !" },
      ],
    },
  ],
};

export const enChicagoFr = {
  id: "en-chicago",
  name: "Chicago",
  nameEn: "Chicago",
  lessons: [chicago1, chicago2, chicago3, chicago4, chicago5, chicago6, chicago7],
  story,
};
