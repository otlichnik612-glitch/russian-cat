import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * Dublin · « Ma journée » · lessons 1–7 — French version of ../dublin.ts.
 * Same story, same English phrases and pictures; explanations, translations
 * and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/dublin/${name}`);

const dublin1: Lesson = {
  id: "en-a1-dublin-1",
  level: "A1",
  cityId: "en-dublin",
  number: 1,
  title: "What time is it? — Quelle heure est-il ?",
  minutes: 7,
  goals: ["Demander l'heure", "Dire l'heure : o'clock, half past", "Dire quarter past et quarter to"],
  vocabNote: "O'clock — pile : seven o'clock (sept heures). Half past — et demie : half past seven = 7 h 30. Quarter past — et quart (7 h 15), quarter to — moins le quart (7 h 45).",
  vocab: [
    v("endu1-1", "What time is it?", "Quelle heure est-il ?", "Murzik regarde la grande horloge au-dessus de la porte du café.", "Écouter What time is it", p("l1-1")),
    v("endu1-2", "It's seven o'clock.", "Il est sept heures.", "Horloge : la petite aiguille sur le sept, la grande sur le douze.", "Écouter It's seven o'clock", p("l1-2")),
    v("endu1-3", "It's half past eight.", "Il est huit heures et demie.", "Horloge : la grande aiguille sur le six, la petite entre huit et neuf.", "Écouter It's half past eight", p("l1-3")),
    v("endu1-4", "It's quarter past nine.", "Il est neuf heures et quart.", "Horloge : la grande aiguille sur le trois.", "Écouter It's quarter past nine", p("l1-4")),
    v("endu1-5", "It's quarter to ten.", "Il est dix heures moins le quart.", "Horloge : la grande aiguille sur le neuf.", "Écouter It's quarter to ten", p("l1-5")),
    v("endu1-6", "It's early.", "Il est tôt.", "Il fait encore nuit dehors, Murzik bâille.", "Écouter It's early", p("l1-6")),
    v("endu1-7", "We're late!", "On est en retard !", "Tom court dans la rue en enfilant sa veste.", "Écouter We're late", p("l1-7")),
  ],
  dialogue: {
    title: "Seán",
    note: "Seán est barista et violoniste, le petit-fils d'une amie de Mme Hope. Le soir, il y a de la musique live dans son café.",
    lines: [
      line("sean", "Good morning! You're Murzik! I'm Seán.", "Bonjour ! Tu es Murzik ! Je suis Seán."),
      line("murzik", "Good morning! What time is it?", "Bonjour ! Quelle heure est-il ?"),
      line("sean", "It's half past six.", "Il est six heures et demie."),
      line("murzik", "Half past six? It's early!", "Six heures et demie ? Il est tôt !"),
      line("sean", "Not for a café! We open at seven o'clock.", "Pas pour un café ! On ouvre à sept heures."),
      line("tom", "At seven? Quick, Murzik! Let's help!", "À sept heures ? Vite, Murzik ! Allons aider !"),
    ],
    gist: choice("endu1-d1", "À quelle heure ouvre le café de Seán ?", [
      ["À sept heures.", true],
      ["À six heures et demie.", false],
      ["À neuf heures.", false],
    ]),
  },
  grammar: [
    {
      title: "L'heure",
      paragraphs: [
        "Pile — o'clock : It's five o'clock. Et demie — half past : half past five = 5 h 30. Et quart / moins le quart — quarter : quarter past five = 5 h 15, quarter to six = 5 h 45. Comme en français, mais l'ordre change : « past » = et, « to » = moins.",
        "On peut aussi dire simplement les chiffres : It's five thirty (5 h 30), It's five fifteen (5 h 15). On entend ça de plus en plus, surtout en Amérique.",
      ],
      examples: [
        { ru: "It's ten o'clock.", en: "Il est dix heures." },
        { ru: "It's half past two.", en: "Il est deux heures et demie." },
      ],
    },
  ],
  tasks: [
    choice("endu1-t1", "Comment dire 16 h 30 ?", [
      ["It's half past four.", true],
      ["It's half past five.", false],
      ["It's half to four.", false],
    ], { skill: "grammar" }),
    listen("endu1-t2", "Écoute. Quelle heure est-il ?", "It's quarter past eleven.", [
      ["11 h 15", true],
      ["10 h 45", false],
      ["11 h 45", false],
    ]),
    match("endu1-t3", "Relie les paires.", [
      ["o'clock", "pile"],
      ["half past", "et demie"],
      ["early", "tôt"],
      ["late", "tard"],
    ], { skill: "words" }),
    missing("endu1-t4", "Quelle lettre manque ? (« quart »)", "qu", "rter", "a", ["a", "o", "e"]),
    speak("endu1-t5", "What time is it?", "It's nine o'clock.", "Il est neuf heures.", { help: "Dis l'heure à voix haute." }),
    choice("endu1-t6", "Comment dire « J'ai une sœur » ?", [
      ["I've got a sister.", true],
      ["I'm got a sister.", false],
      ["I have sister got.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hourglass",
    itemName: "Sablier",
    itemNameRu: "Hourglass",
    ru: "Hooray! An hourglass!",
    en: "Hourra ! Un sablier !",
    a11y: "Un sablier dans un cadre en bois, le sable doré s'écoule vers le bas.",
    image: p("hourglass"),
    steps: ["Seán fait infuser le thé au sablier.", "« Three minutes. Perfect tea! » — « Trois minutes. Un thé parfait ! »", "Il en a un deuxième — pour Murzik.", "Murzik le pose sur l'étagère de sa chambre au-dessus du café."],
    bridge: "Seán demande : « Murzik, what time do you get up? »",
  },
};

const dublin2: Lesson = {
  id: "en-a1-dublin-2",
  level: "A1",
  cityId: "en-dublin",
  number: 2,
  title: "I get up at seven — Je me lève à sept heures",
  minutes: 7,
  goals: ["Raconter ta journée", "Dire à quelle heure : at seven", "Nommer le petit-déjeuner, le déjeuner et le dîner"],
  vocabNote: "À quelle heure — at : at seven, at half past eight. Breakfast — petit-déjeuner, lunch — déjeuner, dinner — dîner. « Prendre son petit-déjeuner » — have breakfast.",
  vocab: [
    v("endu2-1", "I get up at seven.", "Je me lève à sept heures.", "Murzik s'étire dans son lit, le réveil indique sept heures.", "Écouter I get up at seven", p("l2-1")),
    v("endu2-2", "I have breakfast.", "Je prends mon petit-déjeuner.", "Murzik mange une tartine de confiture et boit du thé.", "Écouter I have breakfast", p("l2-2")),
    v("endu2-3", "I go to work.", "Je vais au travail.", "Seán, avec son sac à dos et son étui à violon, marche dans la rue.", "Écouter I go to work", p("l2-3")),
    v("endu2-4", "We have lunch at one.", "Nous déjeunons à une heure.", "Seán et Murzik mangent une soupe à une petite table.", "Écouter We have lunch at one", p("l2-4")),
    v("endu2-5", "I go home.", "Je rentre à la maison.", "Le soir, Murzik traverse le pont pour rentrer.", "Écouter I go home", p("l2-5")),
    v("endu2-6", "We have dinner at eight.", "Nous dînons à huit heures.", "Seán, Tom et Murzik dînent aux chandelles.", "Écouter We have dinner at eight", p("l2-6")),
    v("endu2-7", "I go to bed at ten.", "Je me couche à dix heures.", "Murzik en pyjama se glisse sous la couette.", "Écouter I go to bed at ten", p("l2-7")),
  ],
  dialogue: {
    title: "La routine",
    note: "Start — « commencer ». Finish — « finir ».",
    lines: [
      line("sean", "Murzik, what time do you get up?", "Murzik, à quelle heure tu te lèves ?"),
      line("murzik", "I get up at eight. And you?", "Je me lève à huit heures. Et toi ?"),
      line("sean", "I get up at six! I have breakfast and I go to work.", "Je me lève à six heures ! Je prends mon petit-déjeuner et je vais au travail."),
      line("tom", "What time do you finish?", "À quelle heure tu finis ?"),
      line("sean", "I finish at five. We have dinner at seven and then — music!", "Je finis à cinq heures. On dîne à sept heures, et ensuite — musique !"),
      line("murzik", "And what time do you go to bed?", "Et à quelle heure tu te couches ?"),
      line("sean", "Very late! At midnight.", "Très tard ! À minuit."),
    ],
    gist: choice("endu2-d1", "À quelle heure se lève Seán ?", [
      ["À six heures.", true],
      ["À huit heures.", false],
      ["À minuit.", false],
    ]),
  },
  grammar: [
    {
      title: "Ma journée : I get up, I go",
      paragraphs: [
        "Pour raconter ce que tu fais tous les jours, on utilise le présent simple : I get up, I have breakfast, I go to work. Avec I, you, we, they, le verbe reste tel quel. Avec he et she, on ajoute -s : he works, she plays — comme la 3e personne en français !",
        "À quelle heure — at : at seven, at half past six. La question : What time do you get up? — « À quelle heure tu te lèves ? »",
      ],
      examples: [
        { ru: "I have lunch at one o'clock.", en: "Je déjeune à une heure." },
        { ru: "We go to bed at eleven.", en: "Nous nous couchons à onze heures." },
      ],
    },
  ],
  tasks: [
    choice("endu2-t1", "Comment dire « Je me lève à sept heures » ?", [
      ["I get up at seven.", true],
      ["I get up in seven.", false],
      ["I am get up at seven.", false],
    ], { skill: "grammar" }),
    listen("endu2-t2", "Écoute. À quelle heure est le déjeuner ?", "We have lunch at half past twelve.", [
      ["À 12 h 30.", true],
      ["À 14 h 30.", false],
      ["À midi.", false],
    ]),
    match("endu2-t3", "Relie les paires.", [
      ["breakfast", "petit-déjeuner"],
      ["lunch", "déjeuner"],
      ["dinner", "dîner"],
      ["go to bed", "se coucher"],
    ], { skill: "words" }),
    missing("endu2-t4", "Quelle lettre manque ? (« petit-déjeuner »)", "br", "akfast", "e", ["e", "a", "i"]),
    speak("endu2-t5", "What time do you get up?", "I get up at seven o'clock.", "Je me lève à sept heures.", { help: "Réponds à voix haute : à quelle heure tu te lèves ?" }),
    choice("endu2-t6", "Comment dire « Il est huit heures et demie » ?", [
      ["It's half past eight.", true],
      ["It's half past nine.", false],
      ["It's half to eight.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bread-basket",
    itemName: "Corbeille à pain",
    itemNameRu: "Bread basket",
    ru: "Hooray! A bread basket!",
    en: "Hourra ! Une corbeille à pain !",
    a11y: "Une corbeille en osier avec une serviette en lin, garnie de tranches de pain noir irlandais.",
    image: p("bread-basket"),
    steps: ["Chaque matin, Murzik prend son petit-déjeuner au café.", "Seán apporte le pain dans une corbeille en osier.", "« Keep it. You have breakfast here every day! » — « Garde-la. Tu prends ton petit-déjeuner ici tous les jours ! »", "La corbeille trône sur la table près de la fenêtre."],
    bridge: "Murzik demande : « Seán, when is the music night? »",
  },
};

const dublin3: Lesson = {
  id: "en-a1-dublin-3",
  level: "A1",
  cityId: "en-dublin",
  number: 3,
  title: "Les jours de la semaine",
  minutes: 7,
  goals: ["Nommer les jours de la semaine", "Dire « lundi » : on Monday", "Dire « aujourd'hui », « demain », « le week-end »"],
  vocabNote: "Les jours de la semaine prennent une majuscule : Monday, Tuesday — contrairement au français ! « Tel jour » — on : on Friday. Le week-end — the weekend, « ce week-end » — at the weekend.",
  vocab: [
    v("endu3-1", "Monday, Tuesday, Wednesday", "lundi, mardi, mercredi", "Trois feuillets de calendrier à la suite.", "Écouter Monday, Tuesday, Wednesday", p("l3-1")),
    v("endu3-2", "Thursday, Friday", "jeudi, vendredi", "Sur le feuillet du vendredi, un violon dessiné.", "Écouter Thursday, Friday", p("l3-2")),
    v("endu3-3", "Saturday, Sunday", "samedi, dimanche", "Sur les feuillets du week-end, un soleil dessiné.", "Écouter Saturday, Sunday", p("l3-3")),
    v("endu3-4", "on Friday", "vendredi", "Calendrier, le vendredi entouré en rouge.", "Écouter on Friday", p("l3-4")),
    v("endu3-5", "today", "aujourd'hui", "Murzik montre le feuillet du jour sur le calendrier.", "Écouter today", p("l3-5")),
    v("endu3-6", "tomorrow", "demain", "Une flèche du feuillet d'aujourd'hui vers le suivant.", "Écouter tomorrow", p("l3-6")),
    v("endu3-7", "at the weekend", "le week-end", "Murzik et Tom se promènent au bord de la mer.", "Écouter at the weekend", p("l3-7")),
  ],
  dialogue: {
    title: "Quand est la musique ?",
    note: "Wednesday s'écrit long mais se dit court : [ouènz-déi]. Closed — « fermé ».",
    lines: [
      line("murzik", "Seán, when is the music night?", "Seán, quand est la soirée musique ?"),
      line("sean", "On Friday.", "Vendredi."),
      line("murzik", "What day is it today?", "On est quel jour aujourd'hui ?"),
      line("sean", "Today is Wednesday. So it's the day after tomorrow!", "On est mercredi. Donc c'est après-demain !"),
      line("tom", "And is the café open at the weekend?", "Et le café est ouvert le week-end ?"),
      line("sean", "On Saturday, yes. On Sunday, it's closed.", "Samedi, oui. Dimanche, c'est fermé."),
    ],
    gist: choice("endu3-d1", "Quand est la soirée musique ?", [
      ["Vendredi.", true],
      ["Mercredi.", false],
      ["Dimanche.", false],
    ]),
  },
  grammar: [
    {
      title: "On Monday, at the weekend",
      paragraphs: [
        "Avec les jours — on : on Monday, on Sunday. Avec l'heure — at : at seven. Avec le week-end — at the weekend (en Amérique — on the weekend).",
        "Today, tomorrow — sans préposition : I work today. See you tomorrow!",
      ],
      examples: [
        { ru: "The café is closed on Sunday.", en: "Le café est fermé le dimanche." },
        { ru: "We play music on Friday at eight.", en: "Nous jouons le vendredi à huit heures." },
      ],
    },
  ],
  tasks: [
    choice("endu3-t1", "Comment dire « lundi » (ce jour-là) ?", [
      ["on Monday", true],
      ["in Monday", false],
      ["at Monday", false],
    ], { skill: "grammar" }),
    listen("endu3-t2", "Écoute. Quel jour ?", "Today is Thursday.", [
      ["Jeudi.", true],
      ["Mardi.", false],
      ["Samedi.", false],
    ]),
    match("endu3-t3", "Relie les paires.", [
      ["Monday", "lundi"],
      ["Wednesday", "mercredi"],
      ["Friday", "vendredi"],
      ["Sunday", "dimanche"],
    ], { skill: "words" }),
    missing("endu3-t4", "Quelle lettre manque ? (« mercredi »)", "We", "nesday", "d", ["d", "t", "n"]),
    speak("endu3-t5", "What do you do at the weekend?", "At the weekend I go to the park.", "Le week-end, je vais au parc.", { help: "Raconte à voix haute ce que tu fais le week-end." }),
    choice("endu3-t6", "Comment dire « Nous déjeunons à une heure » ?", [
      ["We have lunch at one.", true],
      ["We have lunch on one.", false],
      ["We are lunch at one.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "calendar",
    itemName: "Calendrier mural",
    itemNameRu: "Calendar",
    ru: "Hooray! A calendar!",
    en: "Hourra ! Un calendrier !",
    a11y: "Un calendrier mural avec des photos de collines vertes d'Irlande. Le vendredi est entouré en rouge.",
    image: p("calendar"),
    steps: ["Seán offre à Murzik un calendrier avec des vues d'Irlande.", "Murzik entoure le vendredi en rouge.", "« Music night! » — écrit-il.", "Le calendrier est accroché au-dessus du lit."],
    bridge: "En attendant vendredi, Seán parle de lui.",
  },
};

const dublin4: Lesson = {
  id: "en-a1-dublin-4",
  level: "A1",
  cityId: "en-dublin",
  number: 4,
  title: "I live, I work — J'habite, je travaille",
  minutes: 7,
  goals: ["Dire où tu habites et travailles", "Demander : Do you…?", "Répondre : Yes, I do / No, I don't"],
  vocabNote: "La question au présent simple se construit avec do : You live in Dublin. → Do you live in Dublin? La négation — don't : I don't live here.",
  vocab: [
    v("endu4-1", "I live in Dublin.", "J'habite à Dublin.", "Seán est debout sur le pont au-dessus de la rivière.", "Écouter I live in Dublin", p("l4-1")),
    v("endu4-2", "I work in a café.", "Je travaille dans un café.", "Seán prépare du café derrière le comptoir.", "Écouter I work in a café", p("l4-2")),
    v("endu4-3", "Do you live here?", "Tu habites ici ?", "Murzik montre les fenêtres au-dessus du café.", "Écouter Do you live here", p("l4-3")),
    v("endu4-4", "Yes, I do.", "Oui.", "Seán hoche la tête.", "Écouter Yes, I do", p("l4-4")),
    v("endu4-5", "No, I don't.", "Non.", "Seán secoue la tête en souriant.", "Écouter No, I don't", p("l4-5")),
    v("endu4-6", "I don't work on Sunday.", "Je ne travaille pas le dimanche.", "Seán joue du violon au parc un dimanche.", "Écouter I don't work on Sunday", p("l4-6")),
    v("endu4-7", "We play music.", "Nous jouons de la musique.", "Seán au violon et une jeune fille à la guitare jouent ensemble.", "Écouter We play music", p("l4-7")),
  ],
  dialogue: {
    title: "À propos de lui",
    note: "Near the sea — « près de la mer ». Fiddle — « violon » (c'est ainsi qu'on l'appelle dans la musique irlandaise).",
    lines: [
      line("murzik", "Seán, do you live here, above the café?", "Seán, tu habites ici, au-dessus du café ?"),
      line("sean", "No, I don't. I live near the sea. But I work here six days a week.", "Non. J'habite près de la mer. Mais je travaille ici six jours par semaine."),
      line("tom", "Do you work on Sunday?", "Et tu travailles le dimanche ?"),
      line("sean", "No, I don't. On Sunday I play the fiddle in the park.", "Non. Le dimanche, je joue du violon au parc."),
      line("murzik", "Do you play music on Friday too?", "Et tu joues le vendredi aussi ?"),
      line("sean", "Yes, I do! My friends and I play music here. We love it!", "Oui ! Mes amis et moi jouons ici. On adore ça !"),
    ],
    gist: choice("endu4-d1", "Où habite Seán ?", [
      ["Près de la mer.", true],
      ["Au-dessus du café.", false],
      ["Dans le parc.", false],
    ]),
  },
  grammar: [
    {
      title: "Le présent simple : question et négation",
      paragraphs: [
        "L'affirmation : I live, you work, we play, they go. La question — do au début : Do you live here? Do they work on Sunday? Pas d'inversion compliquée comme en français !",
        "La réponse courte : Yes, I do. / No, I don't. La négation — don't devant le verbe : I don't work on Sunday. They don't live here.",
      ],
      examples: [
        { ru: "Do you like tea? — Yes, I do.", en: "Tu aimes le thé ? — Oui." },
        { ru: "We don't work at the weekend.", en: "Nous ne travaillons pas le week-end." },
      ],
    },
  ],
  tasks: [
    choice("endu4-t1", "Comment demander « Tu travailles ici ? »", [
      ["Do you work here?", true],
      ["Are you work here?", false],
      ["You work here do?", false],
    ], { skill: "grammar" }),
    listen("endu4-t2", "Écoute. Travaille-t-il le dimanche ?", "No, I don't work on Sunday.", [
      ["Non, il ne travaille pas.", true],
      ["Oui, il travaille.", false],
      ["Il travaille seulement le matin.", false],
    ]),
    match("endu4-t3", "Relie les paires.", [
      ["live", "habiter"],
      ["work", "travailler"],
      ["play", "jouer"],
      ["Yes, I do.", "Oui."],
    ], { skill: "words" }),
    spell("endu4-t4", "Assemble le mot « habiter ».", "live"),
    speak("endu4-t5", "Do you live in a big city?", "Yes, I do. I live in a big city.", "Oui. J'habite dans une grande ville.", { help: "Réponds à voix haute : Yes, I do ou No, I don't — et dis ta ville." }),
    choice("endu4-t6", "Comment dire « vendredi » (ce jour-là) ?", [
      ["on Friday", true],
      ["in Friday", false],
      ["at Friday", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "knitted-rug",
    itemName: "Tapis en tricot",
    itemNameRu: "Knitted rug",
    ru: "Hooray! A knitted rug!",
    en: "Hourra ! Un tapis en tricot !",
    a11y: "Un tapis épais en tricot de laine blanche et grise avec des motifs en torsades, posé près du lit.",
    image: p("rug"),
    steps: ["La maman de Seán tricote des tapis avec la laine des moutons irlandais.", "Seán en apporte un à Murzik.", "« From my mum. She knits every evening. » — « De la part de ma maman. Elle tricote tous les soirs. »", "Le tapis est chaud et doux."],
    bridge: "Murzik veut savoir ce que Seán fait chaque matin avant le travail.",
  },
};

const dublin5: Lesson = {
  id: "en-a1-dublin-5",
  level: "A1",
  cityId: "en-dublin",
  number: 5,
  title: "Every morning — Chaque matin",
  minutes: 7,
  goals: ["Dire « chaque jour », « le matin », « le soir »", "Poser la question What do you do…?", "Raconter tes habitudes"],
  vocabNote: "In the morning — le matin, in the afternoon — l'après-midi, in the evening — le soir, at night — la nuit. Every day — chaque jour.",
  vocab: [
    v("endu5-1", "every morning", "chaque matin", "Seán court le long de la mer à l'aube.", "Écouter every morning", p("l5-1")),
    v("endu5-2", "in the afternoon", "l'après-midi", "Une journée ensoleillée, des gens boivent un café dehors.", "Écouter in the afternoon", p("l5-2")),
    v("endu5-3", "in the evening", "le soir", "Dublin le soir, les lampadaires sont allumés.", "Écouter in the evening", p("l5-3")),
    v("endu5-4", "What do you do in the morning?", "Qu'est-ce que tu fais le matin ?", "Murzik regarde Seán avec curiosité.", "Écouter What do you do in the morning", p("l5-4")),
    v("endu5-5", "I go for a run.", "Je vais courir.", "Seán en baskets court sur le quai.", "Écouter I go for a run", p("l5-5")),
    v("endu5-6", "I read the news.", "Je lis les infos.", "Tom lit les infos sur son téléphone avec une tasse de café.", "Écouter I read the news", p("l5-6")),
    v("endu5-7", "I drink coffee every day.", "Je bois du café tous les jours.", "Seán avec une grande tasse de café.", "Écouter I drink coffee every day", p("l5-7")),
  ],
  dialogue: {
    title: "Matin au bord de la mer",
    note: "Sleep — « dormir ». Lazy — « paresseux ».",
    lines: [
      line("murzik", "Seán, what do you do in the morning?", "Seán, qu'est-ce que tu fais le matin ?"),
      line("sean", "Every morning I go for a run by the sea. Then I drink coffee.", "Chaque matin, je vais courir au bord de la mer. Ensuite, je bois un café."),
      line("murzik", "Every morning? Wow! Tom, what do you do in the morning?", "Chaque matin ? Ouah ! Tom, et toi, qu'est-ce que tu fais le matin ?"),
      line("tom", "I drink tea and I read the news.", "Je bois du thé et je lis les infos."),
      line("sean", "And you, Murzik?", "Et toi, Murzik ?"),
      line("murzik", "In the morning I sleep! I'm a cat!", "Le matin, je dors ! Je suis un chat !"),
    ],
    gist: choice("endu5-d1", "Que fait Seán chaque matin ?", [
      ["Il court au bord de la mer.", true],
      ["Il lit les infos.", false],
      ["Il dort.", false],
    ]),
  },
  grammar: [
    {
      title: "Quand : in the morning, every day",
      paragraphs: [
        "Les moments de la journée — in the : in the morning, in the afternoon, in the evening. Mais la nuit — at night.",
        "Every — « chaque » : every day, every morning, every Friday. Ces mots se placent en général au début ou à la fin de la phrase.",
      ],
      examples: [
        { ru: "I drink tea every morning.", en: "Je bois du thé chaque matin." },
        { ru: "In the evening we play music.", en: "Le soir, nous jouons de la musique." },
      ],
    },
  ],
  tasks: [
    choice("endu5-t1", "Comment dire « le soir » ?", [
      ["in the evening", true],
      ["at the evening", false],
      ["on evening", false],
    ], { skill: "grammar" }),
    listen("endu5-t2", "Écoute. Que fait-il le soir ?", "In the evening I read a book.", [
      ["Il lit un livre.", true],
      ["Il court.", false],
      ["Il boit un café.", false],
    ]),
    match("endu5-t3", "Relie les paires.", [
      ["in the morning", "le matin"],
      ["in the afternoon", "l'après-midi"],
      ["in the evening", "le soir"],
      ["at night", "la nuit"],
    ], { skill: "words" }),
    missing("endu5-t4", "Quelle lettre manque ? (« chaque »)", "ev", "ry", "e", ["e", "a", "i"]),
    speak("endu5-t5", "What do you do in the morning?", "In the morning I drink coffee and go to work.", "Le matin, je bois un café et je vais au travail.", { help: "Raconte à voix haute ce que tu fais le matin." }),
    choice("endu5-t6", "Comment répondre « Non » à la question Do you work on Sunday?", [
      ["No, I don't.", true],
      ["No, I'm not.", false],
      ["No, I isn't.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "radio",
    itemName: "Vieille radio",
    itemNameRu: "Old radio",
    ru: "Hooray! An old radio!",
    en: "Hourra ! Une vieille radio !",
    a11y: "Une vieille radio en bois avec des boutons ronds, posée sur la table de nuit.",
    image: p("radio"),
    steps: ["Tom trouve une vieille radio au marché.", "Chaque matin, elle joue de la musique irlandaise.", "« Now you wake up to music! » — « Maintenant tu te réveilles en musique ! »", "Murzik danse près de la fenêtre."],
    bridge: "Enfin vendredi ! Ce soir, musique au café.",
  },
};

const dublin6: Lesson = {
  id: "en-a1-dublin-6",
  level: "A1",
  cityId: "en-dublin",
  number: 6,
  title: "Music night — Soirée musique",
  minutes: 7,
  goals: ["Inviter : Come in! Sit down!", "Demander qui joue de quoi", "Dire qui chante et danse : sing, dance"],
  vocabNote: "Play the guitar, play the fiddle — jouer de la guitare, du violon (avec the). Sing — chanter, dance — danser.",
  vocab: [
    v("endu6-1", "Come in!", "Entrez !", "Seán ouvre la porte ; à l'intérieur, plein de monde et de musique.", "Écouter Come in", p("l6-1")),
    v("endu6-2", "Sit down, please.", "Asseyez-vous, je vous en prie.", "Seán montre une chaise libre près de la fenêtre.", "Écouter Sit down, please", p("l6-2")),
    v("endu6-3", "I play the guitar.", "Je joue de la guitare.", "Une jeune fille à la guitare sourit.", "Écouter I play the guitar", p("l6-3")),
    v("endu6-4", "Do you sing?", "Tu chantes ?", "Seán tend un micro à Murzik.", "Écouter Do you sing", p("l6-4")),
    v("endu6-5", "We start at eight.", "On commence à huit heures.", "L'horloge indique huit heures, les musiciens prennent leurs instruments.", "Écouter We start at eight", p("l6-5")),
    v("endu6-6", "Let's dance!", "Dansons !", "Les gens dansent entre les tables.", "Écouter Let's dance", p("l6-6")),
    v("endu6-7", "What a great night!", "Quelle soirée formidable !", "Murzik rayonne, assis sur le comptoir avec un petit tambourin.", "Écouter What a great night", p("l6-7")),
  ],
  dialogue: {
    title: "Vendredi",
    note: "Drum — « tambour ». Brilliant! — « Génial ! », on le dit très souvent en Irlande et en Grande-Bretagne.",
    lines: [
      line("sean", "Come in, come in! Sit down, please. We start at eight.", "Entrez, entrez ! Asseyez-vous, je vous en prie. On commence à huit heures."),
      line("murzik", "Seán, do you sing?", "Seán, tu chantes ?"),
      line("sean", "No, I don't. I play the fiddle. My friend Niamh plays the guitar.", "Non. Je joue du violon. Mon amie Niamh joue de la guitare."),
      line("sean", "Murzik, do you play music?", "Murzik, et toi, tu joues d'un instrument ?"),
      line("murzik", "Not really… but I can play the drum!", "Pas vraiment… mais je sais jouer du tambour !"),
      line("tom", "Brilliant! Let's dance!", "Génial ! Dansons !"),
    ],
    gist: choice("endu6-d1", "De quoi joue Seán ?", [
      ["Du violon.", true],
      ["De la guitare.", false],
      ["Du tambour.", false],
    ]),
  },
  grammar: [
    {
      title: "L'impératif : Come in! Sit down!",
      paragraphs: [
        "Pour inviter ou demander, on prend le verbe tout seul : Come in! Sit down! Listen! Avec please, c'est plus poli : Sit down, please.",
        "Let's — « on… ? » / « allons-y » : Let's dance! Let's go! Let's sing!",
      ],
      examples: [
        { ru: "Come in, please!", en: "Entrez, je vous en prie !" },
        { ru: "Let's play music!", en: "Jouons de la musique !" },
      ],
    },
  ],
  tasks: [
    choice("endu6-t1", "Comment inviter poliment à s'asseoir ?", [
      ["Sit down, please.", true],
      ["You sit down.", false],
      ["Sitting down, please.", false],
    ], { skill: "grammar" }),
    listen("endu6-t2", "Écoute. À quelle heure ça commence ?", "We start at eight.", [
      ["À huit heures.", true],
      ["À neuf heures.", false],
      ["À cinq heures.", false],
    ]),
    match("endu6-t3", "Relie les paires.", [
      ["sing", "chanter"],
      ["dance", "danser"],
      ["the guitar", "la guitare"],
      ["Come in!", "Entrez !"],
    ], { skill: "words" }),
    spell("endu6-t4", "Assemble le mot « chanter ».", "sing"),
    speak("endu6-t5", "Do you play music?", "Yes, I do. I play the guitar.", "Oui. Je joue de la guitare.", { help: "Réponds à voix haute : joues-tu d'un instrument ?" }),
    choice("endu6-t6", "Comment dire « chaque matin » ?", [
      ["every morning", true],
      ["all morning", false],
      ["in every morning", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fiddle",
    itemName: "Petit violon",
    itemNameRu: "Little fiddle",
    ru: "Hooray! A little fiddle!",
    en: "Hourra ! Un petit violon !",
    a11y: "Un petit violon jouet avec son archet, accroché au mur à un clou.",
    image: p("fiddle"),
    steps: ["Après le concert, Seán sort un petit violon d'enfant.", "« This was my first fiddle. » — « C'était mon premier violon. »", "Il l'offre à Murzik.", "Murzik essaie d'en jouer : cric-crac ! Tout le monde rit."],
    bridge: "Demain, Seán a promis de remettre à Murzik quelque chose de très important.",
  },
};

const dublin7: Lesson = {
  id: "en-a1-dublin-7",
  level: "A1",
  cityId: "en-dublin",
  number: 7,
  title: "Goodbye, Dublin! — Au revoir, Dublin !",
  minutes: 8,
  goals: ["Raconter ta journée du matin au soir", "Demander à quelqu'un sa journée", "Revoir tous les mots de Dublin"],
  vocabNote: "On revoit : l'heure, les jours de la semaine, I get up / I work / I go, Do you…? — Yes, I do / No, I don't.",
  vocab: [
    v("endu7-1", "This is for you.", "C'est pour toi.", "Seán tend à Murzik une page pliée.", "Écouter This is for you", p("l7-1")),
    v("endu7-2", "soda bread", "pain au bicarbonate", "Une boule ronde avec une croix sur le dessus.", "Écouter soda bread", p("l7-2")),
    v("endu7-3", "My gran knows Mrs Hope.", "Ma mamie connaît Mme Hope.", "Une vieille photo : deux jeunes filles sur les marches d'un café.", "Écouter My gran knows Mrs Hope", p("l7-3")),
    v("endu7-4", "clay mugs", "tasses en grès", "Quatre tasses en grès de couleurs différentes.", "Écouter clay mugs", p("l7-4")),
    v("endu7-5", "We're flying to New York.", "Nous partons à New York en avion.", "Tom montre deux billets d'avion.", "Écouter We're flying to New York", p("l7-5")),
    v("endu7-6", "Safe travels!", "Bon voyage !", "Seán fait signe devant la porte du café.", "Écouter Safe travels", p("l7-6")),
    v("endu7-7", "I'll miss Dublin.", "Dublin va me manquer.", "Murzik regarde tristement le pont au-dessus de la rivière.", "Écouter I'll miss Dublin", p("l7-7")),
  ],
  dialogue: {
    title: "La cinquième page",
    note: "Across the ocean — « de l'autre côté de l'océan ». America — l'Amérique.",
    lines: [
      line("sean", "Murzik, this is for you. It's from Mrs Hope's book.", "Murzik, c'est pour toi. Ça vient du livre de Mme Hope."),
      line("murzik", "A page! The recipe for soda bread!", "Une page ! La recette du soda bread !"),
      line("sean", "And these clay mugs are for your café.", "Et ces tasses en grès sont pour ton café."),
      line("tom", "Thank you, Seán! Where is the next page?", "Merci, Seán ! Où est la page suivante ?"),
      line("sean", "Across the ocean! In New York. My cousin Marcus has got a diner there.", "De l'autre côté de l'océan ! À New York. Mon cousin Marcus a un petit restaurant là-bas."),
      line("murzik", "New York! I'll miss Dublin…", "New York ! Dublin va me manquer…"),
      line("sean", "Come back on a Friday! Safe travels!", "Reviens un vendredi ! Bon voyage !"),
    ],
    gist: choice("endu7-d1", "Où est la page suivante ?", [
      ["À New York, chez Marcus.", true],
      ["À Londres, chez Mme Hope.", false],
      ["À Édimbourg.", false],
    ]),
  },
  grammar: [
    {
      title: "Ma journée : tout ensemble",
      paragraphs: [
        "La routine : I get up at seven. I have breakfast. I go to work at half past eight. On Sunday I don't work.",
        "Les questions : What time do you get up? What do you do in the evening? Do you work on Saturday? — Yes, I do. / No, I don't.",
      ],
      examples: [
        { ru: "I get up at six and I go for a run.", en: "Je me lève à six heures et je vais courir." },
        { ru: "Do you play music on Friday? — Yes, I do.", en: "Tu joues le vendredi ? — Oui." },
      ],
    },
  ],
  tasks: [
    listen("endu7-t1", "Examen d'écoute. Que raconte Seán ?", "I get up at six. I go for a run. I work from seven to five. On Friday I play the fiddle.", [
      ["Il se lève à six heures, il court, il travaille de sept à cinq, le vendredi il joue du violon.", true],
      ["Il se lève à sept heures, il travaille de six à cinq, le dimanche il chante.", false],
      ["Il se lève à cinq heures, il ne travaille pas, le vendredi il danse.", false],
    ]),
    choice("endu7-t2", "Choisis la phrase correcte.", [
      ["I don't work on Sunday.", true],
      ["I not work on Sunday.", false],
      ["I don't work in Sunday.", false],
    ], { skill: "grammar" }),
    match("endu7-t3", "Relie les paires.", [
      ["Safe travels!", "Bon voyage !"],
      ["mugs", "tasses"],
      ["I'll miss…", "… va me manquer"],
      ["fly", "voler, partir en avion"],
    ], { skill: "words" }),
    spell("endu7-t4", "Assemble le mot « pain ».", "bread"),
    speak("endu7-t5", "Tell me about your day.", "I get up at seven. I go to work at eight. In the evening I read.", "Je me lève à sept heures. À huit heures, je vais au travail. Le soir, je lis.", { help: "Raconte ta journée à voix haute." }),
    script("endu7-t6", "Revois tout Dublin. Termine les conversations.", [
      { speaker: "Seán", text: "What time is it?" },
      { speaker: "Toi", answer: "It's half past seven.", options: ["It's half past seven.", "It's seven and half.", "It's half past at seven."] },
      { speaker: "Seán", text: "What time do you get up?" },
      { speaker: "Toi", answer: "I get up at seven.", options: ["I get up at seven.", "I get up on seven.", "I am get up at seven."] },
      { speaker: "Seán", text: "Do you work on Sunday?" },
      { speaker: "Toi", answer: "No, I don't.", options: ["No, I don't.", "No, I'm not.", "No, I not."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mugs",
    itemName: "Tasses en grès",
    itemNameRu: "Clay mugs",
    ru: "Hooray! Clay mugs!",
    en: "Hourra ! Des tasses en grès !",
    a11y: "Quatre tasses en grès faites main — verte, bleue, crème et marron.",
    image: p("mugs"),
    steps: ["Seán emballe quatre tasses dans du journal.", "C'est sa mamie qui les a faites.", "« For coffee, for tea, for your guests! » — « Pour le café, pour le thé, pour tes clients ! »", "Murzik les pose délicatement dans sa valise."],
    bridge: "La page suivante est de l'autre côté de l'océan, à New York.",
  },
};

const story: CityStory = {
  home: {
    name: "Chambre au-dessus du café de Seán",
    nameRu: "Murzik's room in Dublin",
    image: p("home"),
    a11y: "Une petite chambre vide au-dessus du café. En bas, on entend de la musique ; par la fenêtre, on voit la rivière et le pont. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "mugs",
  welcomeRu: "Hello, Dublin!",
  welcomeEn: "Bonjour, Dublin !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Dublin : des portes de maisons multicolores, un pont sur la rivière, un violon joue quelque part.",
  departureImage: p("departure"),
  departureA11y: "Seán avec son violon fait signe au revoir devant la porte du café.",
  finale: [
    {
      image: p("page"),
      a11y: "Gros plan : la cinquième page du livre de recettes, la recette du soda bread. Dans la marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la cinquième page. Dans la marge — un mot de Mme Hope :" },
        { ru: "At my café, there was music on Fridays.", en: "Dans mon café, il y avait de la musique le vendredi." },
        { en: "Murzik pense au vendredi chez Seán et sourit." },
      ],
    },
    {
      image: p("mugs"),
      a11y: "Murzik fait le tour de sa chambre au-dessus du café, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre à Dublin. Tom la photographie pour le journal." },
        { en: "Pour son futur café, il emporte les tasses en grès." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "Dublin complete!", en: "Dublin terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Seán fait signe de la main pour dire au revoir.",
      lines: [
        { ru: "Goodbye, Seán!", en: "Au revoir, Seán !" },
        { ru: "Next stop: New York!", en: "Prochain arrêt : New York !" },
      ],
    },
    {
      image: img.flight,
      a11y: "L'avion survole l'océan vers l'ouest, vers l'Amérique.",
      lines: [{ ru: "Dublin → New York", en: "Dublin → New York" }],
    },
    {
      image: pic("en/newyork/arrival"),
      a11y: "Murzik et Tom à New York : d'immenses immeubles qui touchent le ciel, des taxis jaunes, le bruit des rues.",
      lines: [
        { ru: "Hello, New York!", en: "Bonjour, New York !" },
        { ru: "Everything is so big!", en: "Tout est si grand ici !" },
      ],
    },
  ],
};

export const enDublinFr = {
  id: "en-dublin",
  name: "Dublin",
  nameEn: "Dublin",
  lessons: [dublin1, dublin2, dublin3, dublin4, dublin5, dublin6, dublin7],
  story,
};
