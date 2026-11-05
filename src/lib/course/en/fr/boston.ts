import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * Boston · « La météo et les vêtements » · lessons 1–7 — French version of ../boston.ts.
 * Same story, same English phrases and pictures; explanations, translations
 * and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/boston/${name}`);

const boston1: Lesson = {
  id: "en-a1-boston-1",
  level: "A1",
  cityId: "en-boston",
  number: 1,
  title: "It's raining! — Il pleut !",
  minutes: 7,
  goals: ["Demander quel temps il fait", "Dire : il y a du soleil, il pleut, il fait froid, il y a du vent", "Dire « il pleut en ce moment » : it's raining"],
  vocabNote: "Pour parler du temps, on utilise toujours it : It's cold. It's sunny. It's raining — « il pleut (en ce moment même) ».",
  vocab: [
    v("enbo1-1", "What's the weather like?", "Quel temps fait-il ?", "Murzik regarde par la fenêtre, le nez collé à la vitre.", "Écouter What's the weather like", p("l1-1")),
    v("enbo1-2", "It's raining.", "Il pleut.", "Des gouttes de pluie coulent sur la vitre.", "Écouter It's raining", p("l1-2")),
    v("enbo1-3", "It's sunny.", "Il y a du soleil.", "Un soleil éclatant au-dessus des maisons de briques.", "Écouter It's sunny", p("l1-3")),
    v("enbo1-4", "It's cold.", "Il fait froid.", "Murzik tremble, emmitouflé dans son écharpe.", "Écouter It's cold", p("l1-4")),
    v("enbo1-5", "It's windy.", "Il y a du vent.", "Le vent arrache les feuilles jaunes des arbres.", "Écouter It's windy", p("l1-5")),
    v("enbo1-6", "It's cloudy.", "Il y a des nuages.", "Des nuages gris au-dessus du port.", "Écouter It's cloudy", p("l1-6")),
    v("enbo1-7", "It's warm today.", "Il fait doux aujourd'hui.", "Des gens sont assis sur les bancs du parc, sans veste.", "Écouter It's warm today", p("l1-7")),
  ],
  dialogue: {
    title: "Emily",
    note: "Emily est étudiante, c'est une amie de Rosie. Elle travaille dans un magasin de vêtements. Fall — « automne » en Amérique (en Grande-Bretagne — autumn).",
    lines: [
      line("emily", "Hi! You're Murzik and Tom! I'm Emily. Welcome to Boston!", "Salut ! Vous êtes Murzik et Tom ! Moi, c'est Emily. Bienvenue à Boston !"),
      line("murzik", "Hello, Emily! What's the weather like in Boston?", "Bonjour, Emily ! Quel temps fait-il à Boston ?"),
      line("emily", "Today it's raining and it's cold. It's fall!", "Aujourd'hui, il pleut et il fait froid. C'est l'automne !"),
      line("tom", "Will it be sunny tomorrow?", "Et demain, il y aura du soleil ?"),
      line("emily", "Maybe! In Boston the weather changes every day.", "Peut-être ! À Boston, le temps change tous les jours."),
      line("murzik", "Like in London!", "Comme à Londres !"),
    ],
    gist: choice("enbo1-d1", "Quel temps fait-il aujourd'hui à Boston ?", [
      ["Il pleut et il fait froid.", true],
      ["Il y a du soleil et il fait chaud.", false],
      ["Il y a du vent, mais il fait doux.", false],
    ]),
  },
  grammar: [
    {
      title: "La météo : It's…",
      paragraphs: [
        "En anglais, une phrase a toujours un sujet. Donc même pour la météo, on dit it : It's cold. — Il fait froid. It's sunny. — Il y a du soleil. En français on dit « il fait… », en anglais — « it is… ».",
        "Ce qui se passe en ce moment : It's raining. — Il pleut. It's snowing. — Il neige. En français, « il pleut » suffit ; en anglais, il faut la forme en -ing pour dire « là, maintenant ».",
      ],
      examples: [
        { ru: "It's hot and sunny.", en: "Il fait chaud et il y a du soleil." },
        { ru: "It's snowing!", en: "Il neige !" },
      ],
    },
  ],
  tasks: [
    choice("enbo1-t1", "Comment dire « Il fait froid » ?", [
      ["It's cold.", true],
      ["Is cold.", false],
      ["Cold it.", false],
    ], { skill: "grammar" }),
    listen("enbo1-t2", "Écoute. Quel temps fait-il ?", "It's windy and cloudy.", [
      ["Il y a du vent et des nuages.", true],
      ["Il y a du soleil et il fait chaud.", false],
      ["Il neige.", false],
    ]),
    match("enbo1-t3", "Relie les paires.", [
      ["sunny", "ensoleillé"],
      ["windy", "venteux"],
      ["cold", "froid"],
      ["warm", "doux"],
    ], { skill: "words" }),
    missing("enbo1-t4", "Quelle lettre manque ? (« pluie »)", "ra", "n", "i", ["i", "e", "y"]),
    speak("enbo1-t5", "What's the weather like today?", "It's sunny and warm.", "Il y a du soleil et il fait doux.", { help: "Décris à voix haute le temps qu'il fait aujourd'hui." }),
    choice("enbo1-t6", "Comment dire « Il n'aime pas les hot-dogs » ?", [
      ["He doesn't like hot dogs.", true],
      ["He don't like hot dogs.", false],
      ["He not like hot dogs.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "umbrella",
    itemName: "Parapluie canne",
    itemNameRu: "Umbrella",
    ru: "Hooray! An umbrella!",
    en: "Hourra ! Un parapluie !",
    a11y: "Un grand parapluie canne vert foncé avec une poignée en bois, posé près de la porte.",
    image: p("umbrella"),
    steps: ["Emily montre à Murzik sa chambre dans la vieille maison de briques.", "Près de la porte, il y a un grand parapluie vert.", "« In Boston you need it every day! » — « À Boston, tu en as besoin tous les jours ! »", "Murzik l'ouvre — il est plus grand que Murzik lui-même !"],
    bridge: "Le matin, Emily regarde Murzik : « Murzik, what are you wearing? It's cold! »",
  },
};

const boston2: Lesson = {
  id: "en-a1-boston-2",
  level: "A1",
  cityId: "en-boston",
  number: 2,
  title: "What are you wearing? — Qu'est-ce que tu portes ?",
  minutes: 7,
  goals: ["Nommer les vêtements", "Dire ce que tu portes en ce moment : I'm wearing", "Demander : What are you wearing?"],
  vocabNote: "Ce qui se passe maintenant — am / is / are + verbe en -ing : I'm wearing — « je porte (maintenant) », she's wearing — « elle porte ».",
  vocab: [
    v("enbo2-1", "I'm wearing a scarf.", "Je porte une écharpe.", "Murzik dans son écharpe en tricot rouille.", "Écouter I'm wearing a scarf", p("l2-1")),
    v("enbo2-2", "a coat", "un manteau", "Un long manteau de laine sur un cintre.", "Écouter a coat", p("l2-2")),
    v("enbo2-3", "a jacket", "une veste", "Une veste chaude à capuche.", "Écouter a jacket", p("l2-3")),
    v("enbo2-4", "boots", "des bottes", "Une paire de bottes chaudes près de la porte.", "Écouter boots", p("l2-4")),
    v("enbo2-5", "a hat", "un bonnet", "Un bonnet en tricot à pompon.", "Écouter a hat", p("l2-5")),
    v("enbo2-6", "a T-shirt and jeans", "un T-shirt et un jean", "Emily en T-shirt et jean.", "Écouter a T-shirt and jeans", p("l2-6")),
    v("enbo2-7", "Tom is wearing a green coat.", "Tom porte un manteau vert.", "Tom dans son long manteau vert.", "Écouter Tom is wearing a green coat", p("l2-7")),
  ],
  dialogue: {
    title: "Un matin froid",
    note: "Only — « seulement ». Need — « avoir besoin ».",
    lines: [
      line("emily", "Murzik, what are you wearing? It's cold!", "Murzik, qu'est-ce que tu portes ? Il fait froid !"),
      line("murzik", "I'm wearing my scarf!", "Je porte mon écharpe !"),
      line("emily", "Only a scarf? You need a jacket and boots!", "Seulement une écharpe ? Il te faut une veste et des bottes !"),
      line("tom", "Look at me. I'm wearing a coat, a hat and boots.", "Regarde-moi. Je porte un manteau, un bonnet et des bottes."),
      line("murzik", "But I've got fur!", "Mais moi, j'ai de la fourrure !"),
      line("emily", "Ha-ha! OK. But I'm buying you a hat!", "Ha-ha ! D'accord. Mais je t'achète un bonnet !"),
    ],
    gist: choice("enbo2-d1", "Que porte Murzik ?", [
      ["Seulement une écharpe.", true],
      ["Une veste et des bottes.", false],
      ["Un manteau et un bonnet.", false],
    ]),
  },
  grammar: [
    {
      title: "Le présent continu : I'm wearing",
      paragraphs: [
        "Ce qui se passe en ce moment — am / is / are + verbe en -ing : I'm wearing a coat. She's reading. It's raining. En français, on dit simplement « je porte », « elle lit » ; l'anglais ajoute la petite forme en -ing pour dire « là, maintenant ».",
        "Question : What are you wearing? What is she doing? Réponse : I'm wearing jeans. She's sleeping.",
      ],
      examples: [
        { ru: "Emily is wearing a red jacket.", en: "Emily porte une veste rouge." },
        { ru: "What are you doing? — I'm reading.", en: "Qu'est-ce que tu fais ? — Je lis." },
      ],
    },
  ],
  tasks: [
    choice("enbo2-t1", "Comment dire « Elle porte un manteau » ?", [
      ["She's wearing a coat.", true],
      ["She wearing a coat.", false],
      ["She's wear a coat.", false],
    ], { skill: "grammar" }),
    listen("enbo2-t2", "Écoute. Qu'est-ce qu'il porte ?", "He's wearing jeans and a T-shirt.", [
      ["Un jean et un T-shirt.", true],
      ["Un manteau et un bonnet.", false],
      ["Une veste et des bottes.", false],
    ]),
    match("enbo2-t3", "Relie les paires.", [
      ["coat", "manteau"],
      ["jacket", "veste"],
      ["boots", "bottes"],
      ["hat", "bonnet"],
    ], { skill: "words" }),
    missing("enbo2-t4", "Quelle lettre manque ? (« veste »)", "jack", "t", "e", ["e", "a", "i"]),
    speak("enbo2-t5", "What are you wearing today?", "I'm wearing jeans and a jumper.", "Je porte un jean et un pull.", { help: "Dis à voix haute ce que tu portes en ce moment." }),
    choice("enbo2-t6", "Comment dire « Il pleut » ?", [
      ["It's raining.", true],
      ["It rains now.", false],
      ["Is rain.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cap",
    itemName: "Casquette de baseball",
    itemNameRu: "Baseball cap",
    ru: "Hooray! A baseball cap!",
    en: "Hourra ! Une casquette !",
    a11y: "Une petite casquette de baseball bleue avec des fentes pour les oreilles de chat, accrochée à un crochet.",
    image: p("cap"),
    steps: ["Emily apporte un cadeau à Murzik.", "C'est une casquette de baseball — avec des trous pour les oreilles !", "« A Boston hat for a Boston cat! » — « Une casquette de Boston pour un chat de Boston ! »", "Murzik la porte sans l'enlever."],
    bridge: "Emily invite Murzik dans son magasin : « Come and help me today! »",
  },
};

const boston3: Lesson = {
  id: "en-a1-boston-3",
  level: "A1",
  cityId: "en-boston",
  number: 3,
  title: "Colours — Les couleurs",
  minutes: 7,
  goals: ["Nommer les couleurs", "Demander : What colour is it?", "Décrire un vêtement par sa couleur"],
  vocabNote: "La couleur se place avant le nom : a red jacket. Le mot « couleur » s'écrit différemment : colour en Grande-Bretagne, color en Amérique.",
  vocab: [
    v("enbo3-1", "red and blue", "rouge et bleu", "Une veste rouge et une veste bleue côte à côte.", "Écouter red and blue", p("l3-1")),
    v("enbo3-2", "green and yellow", "vert et jaune", "Un bonnet vert et un bonnet jaune.", "Écouter green and yellow", p("l3-2")),
    v("enbo3-3", "black and white", "noir et blanc", "Des chaussettes noires et blanches.", "Écouter black and white", p("l3-3")),
    v("enbo3-4", "brown and grey", "marron et gris", "Des bottes marron et un manteau gris.", "Écouter brown and grey", p("l3-4")),
    v("enbo3-5", "pink and orange", "rose et orange", "Des écharpes rose et orange.", "Écouter pink and orange", p("l3-5")),
    v("enbo3-6", "What colour is it?", "De quelle couleur est-il ?", "Emily tient un pull et regarde d'un air interrogateur.", "Écouter What colour is it", p("l3-6")),
    v("enbo3-7", "It's dark blue.", "Il est bleu foncé.", "Un pull bleu foncé.", "Écouter It's dark blue", p("l3-7")),
  ],
  dialogue: {
    title: "Dans le magasin de vêtements",
    note: "Sweater — « pull » (en Grande-Bretagne on dit plutôt jumper). Light blue — bleu clair, dark blue — bleu foncé.",
    lines: [
      line("emily", "Murzik, can you help me? These sweaters go here. What colour is this one?", "Murzik, tu peux m'aider ? Les pulls vont ici. De quelle couleur est celui-ci ?"),
      line("murzik", "It's dark blue.", "Il est bleu foncé."),
      line("emily", "Good. And this one?", "Bien. Et celui-ci ?"),
      line("murzik", "It's… orange! Like me!", "Il est… orange ! Comme moi !"),
      line("tom", "And my coat is green. Green is my favourite colour.", "Et mon manteau est vert. Le vert est ma couleur préférée."),
      line("emily", "My favourite colour is yellow. Like Boston in autumn!", "Ma couleur préférée, c'est le jaune. Comme Boston en automne !"),
    ],
    gist: choice("enbo3-d1", "Quelle est la couleur préférée d'Emily ?", [
      ["Le jaune.", true],
      ["Le vert.", false],
      ["L'orange.", false],
    ]),
  },
  grammar: [
    {
      title: "Les couleurs : a red jacket",
      paragraphs: [
        "En français, la couleur suit le nom et s'accorde : une veste rouge, des bottes rouges. En anglais, c'est l'inverse : la couleur se place AVANT le nom et ne change jamais : a red jacket, red boots.",
        "Question : What colour is it? What colour are they? Réponse : It's red. They're black. « Couleur préférée » — favourite colour.",
      ],
      examples: [
        { ru: "I've got a black coat.", en: "J'ai un manteau noir." },
        { ru: "What colour are your eyes? — They're green.", en: "De quelle couleur sont tes yeux ? — Ils sont verts." },
      ],
    },
  ],
  tasks: [
    choice("enbo3-t1", "Comment dire « des bottes rouges » ?", [
      ["red boots", true],
      ["boots red", false],
      ["reds boots", false],
    ], { skill: "grammar" }),
    listen("enbo3-t2", "Écoute. De quelle couleur est le bonnet ?", "My hat is pink.", [
      ["Rose.", true],
      ["Rouge.", false],
      ["Orange.", false],
    ]),
    match("enbo3-t3", "Relie les paires.", [
      ["yellow", "jaune"],
      ["grey", "gris"],
      ["brown", "marron"],
      ["white", "blanc"],
    ], { skill: "words" }),
    spell("enbo3-t4", "Assemble les lettres du mot « vert ».", "green"),
    speak("enbo3-t5", "What's your favourite colour?", "My favourite colour is blue.", "Ma couleur préférée est le bleu.", { help: "Nomme à voix haute ta couleur préférée." }),
    choice("enbo3-t6", "Comment dire « Je porte une écharpe » ?", [
      ["I'm wearing a scarf.", true],
      ["I wearing a scarf.", false],
      ["I'm wear a scarf.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "wellies",
    itemName: "Bottes de pluie",
    itemNameRu: "Rain boots",
    ru: "Hooray! Rain boots!",
    en: "Hourra ! Des bottes de pluie !",
    a11y: "De petites bottes de pluie jaunes posées sur le paillasson près de la porte.",
    image: p("wellies"),
    steps: ["Le soir, au magasin, Murzik trouve des bottes jaunes minuscules.", "« They're your size! », rit Emily. — « C'est ta taille ! »", "Elle les offre à Murzik.", "Les flaques ne font plus peur !"],
    bridge: "Le matin, une cliente entre dans le magasin — et Murzik l'aide lui-même.",
  },
};

const boston4: Lesson = {
  id: "en-a1-boston-4",
  level: "A1",
  cityId: "en-boston",
  number: 4,
  title: "I'm looking for a jacket — Je cherche une veste",
  minutes: 7,
  goals: ["Aider un client : Can I help you?", "Dire ce que tu cherches", "Demander la taille et la cabine d'essayage"],
  vocabNote: "I'm looking for… — « je cherche… ». Try on — « essayer ». Fitting room — « cabine d'essayage ».",
  vocab: [
    v("enbo4-1", "Can I help you?", "Je peux vous aider ?", "Murzik, avec sa casquette, accueille un client à la porte.", "Écouter Can I help you", p("l4-1")),
    v("enbo4-2", "I'm looking for a jacket.", "Je cherche une veste.", "Un client regarde les vestes sur les portants.", "Écouter I'm looking for a jacket", p("l4-2")),
    v("enbo4-3", "What size?", "Quelle taille ?", "Murzik tient deux vestes — une petite et une grande.", "Écouter What size", p("l4-3")),
    v("enbo4-4", "Medium, please.", "Du moyen, s'il vous plaît.", "Une étiquette avec la lettre M.", "Écouter Medium, please", p("l4-4")),
    v("enbo4-5", "Can I try it on?", "Je peux l'essayer ?", "Le client tient la veste devant le miroir.", "Écouter Can I try it on", p("l4-5")),
    v("enbo4-6", "The fitting room is over there.", "La cabine d'essayage est là-bas.", "Murzik montre le rideau de la cabine.", "Écouter The fitting room is over there", p("l4-6")),
    v("enbo4-7", "Just looking, thanks.", "Je regarde, merci.", "Une femme sourit poliment en regardant les écharpes.", "Écouter Just looking, thanks", p("l4-7")),
  ],
  dialogue: {
    title: "La première cliente",
    note: "Small — S, medium — M, large — L. Les tailles de vêtements s'écrivent comme ça : S, M, L.",
    lines: [
      line("murzik", "Good morning! Can I help you?", "Bonjour ! Je peux vous aider ?"),
      line("passerby", "Yes, please. I'm looking for a jacket. A warm jacket.", "Oui, s'il vous plaît. Je cherche une veste. Une veste chaude."),
      line("murzik", "What size?", "Quelle taille ?"),
      line("passerby", "Medium, please. Can I try it on?", "Du moyen, s'il vous plaît. Je peux l'essayer ?"),
      line("murzik", "Of course. The fitting room is over there.", "Bien sûr. La cabine d'essayage est là-bas."),
      line("emily", "Murzik, you're a great shop assistant!", "Murzik, tu es un vendeur formidable !"),
    ],
    gist: choice("enbo4-d1", "Que cherche la cliente ?", [
      ["Une veste chaude, taille moyenne.", true],
      ["Un bonnet et une écharpe.", false],
      ["Des bottes de pluie.", false],
    ]),
  },
  grammar: [
    {
      title: "En ce moment : I'm looking for",
      paragraphs: [
        "I'm looking for… — c'est aussi le présent continu : « je cherche (en ce moment) ». Look for — « chercher ». Attention : le petit mot for ne saute pas — on dit looking FOR.",
        "Demandes polies au magasin : Can I try it on? Can I help you? Can I have…? En français, on utilise souvent le conditionnel (« je voudrais… ») ; en anglais, « Can I…? » suffit.",
      ],
      examples: [
        { ru: "I'm looking for a hat.", en: "Je cherche un bonnet." },
        { ru: "Can I try these boots on?", en: "Je peux essayer ces bottes ?" },
      ],
    },
  ],
  tasks: [
    choice("enbo4-t1", "Comment dire « Je cherche un manteau » ?", [
      ["I'm looking for a coat.", true],
      ["I look a coat.", false],
      ["I'm looking a coat.", false],
    ], { skill: "grammar" }),
    listen("enbo4-t2", "Écoute. Quelle taille ?", "Large, please.", [
      ["Grande.", true],
      ["Moyenne.", false],
      ["Petite.", false],
    ]),
    match("enbo4-t3", "Relie les paires.", [
      ["size", "taille"],
      ["try on", "essayer"],
      ["fitting room", "cabine d'essayage"],
      ["Just looking.", "Je regarde, merci."],
    ], { skill: "words" }),
    missing("enbo4-t4", "Quelle lettre manque ? (« taille »)", "si", "e", "z", ["z", "s", "c"]),
    speak("enbo4-t5", "Can I help you?", "Yes, please. I'm looking for a scarf.", "Oui, s'il vous plaît. Je cherche une écharpe.", { help: "Réponds à voix haute au vendeur : dis ce que tu cherches." }),
    choice("enbo4-t6", "Comment demander « De quelle couleur est-il ? »", [
      ["What colour is it?", true],
      ["What colour it is?", false],
      ["How colour is it?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "thermos",
    itemName: "Thermos",
    itemNameRu: "Thermos",
    ru: "Hooray! A thermos!",
    en: "Hourra ! Un thermos !",
    a11y: "Un thermos métallique rouge avec un gobelet-couvercle, de la vapeur sort du gobelet.",
    image: p("thermos"),
    steps: ["La cliente achète la veste — elle est ravie.", "Le lendemain, elle apporte un thermos à Murzik.", "« Hot tea for a cold day. Thank you, little helper! » — « Du thé chaud pour une journée froide. Merci, petit aide ! »", "Murzik pose le thermos sur l'étagère."],
    bridge: "Dans la journée, Tom entre au magasin : il veut une nouvelle veste, mais rien ne va…",
  },
};

const boston5: Lesson = {
  id: "en-a1-boston-5",
  level: "A1",
  cityId: "en-boston",
  number: 5,
  title: "It's too big — Elle est trop grande",
  minutes: 7,
  goals: ["Dire que le vêtement ne va pas : too big, too small", "Demander une autre couleur ou taille", "Dire « je le prends ! »"],
  vocabNote: "Too — « trop » : too big — trop grand. It fits — « ça va, c'est la bonne taille ». I'll take it — « je le prends ».",
  vocab: [
    v("enbo5-1", "It's too big.", "Elle est trop grande.", "Tom disparaît dans une veste énorme, les manches pendent.", "Écouter It's too big", p("l5-1")),
    v("enbo5-2", "It's too small.", "Elle est trop petite.", "Tom dans une veste minuscule qui ne ferme pas.", "Écouter It's too small", p("l5-2")),
    v("enbo5-3", "Have you got it in blue?", "Vous l'avez en bleu ?", "Tom tient une veste verte et montre une veste bleue sur l'étagère.", "Écouter Have you got it in blue", p("l5-3")),
    v("enbo5-4", "Have you got a bigger size?", "Vous avez une taille au-dessus ?", "Emily cherche une autre taille sur le portant.", "Écouter Have you got a bigger size", p("l5-4")),
    v("enbo5-5", "It fits!", "Ça va parfaitement !", "Tom dans une veste qui tombe impeccablement.", "Écouter It fits", p("l5-5")),
    v("enbo5-6", "It looks great on you!", "Elle te va super bien !", "Murzik lève le pouce vers Tom.", "Écouter It looks great on you", p("l5-6")),
    v("enbo5-7", "I'll take it.", "Je la prends.", "Tom tend la veste vers la caisse.", "Écouter I'll take it", p("l5-7")),
  ],
  dialogue: {
    title: "Tom choisit une veste",
    note: "Bigger — « plus grand », smaller — « plus petit ».",
    lines: [
      line("tom", "Emily, this jacket is too small.", "Emily, cette veste est trop petite."),
      line("emily", "Try this one. It's large.", "Essaie celle-ci. C'est du grand."),
      line("tom", "Now it's too big! Have you got a medium in blue?", "Maintenant elle est trop grande ! Vous avez du moyen en bleu ?"),
      line("emily", "Yes, we have. Here you are.", "Oui, on a. Voilà."),
      line("tom", "It fits!", "Parfaite !"),
      line("murzik", "It looks great on you, Tom!", "Elle te va super bien, Tom !"),
      line("tom", "Thanks! I'll take it.", "Merci ! Je la prends."),
    ],
    gist: choice("enbo5-d1", "Quelle veste Tom a-t-il achetée ?", [
      ["Une bleue, taille moyenne.", true],
      ["Une verte, grande taille.", false],
      ["Une bleue, petite taille.", false],
    ]),
  },
  grammar: [
    {
      title: "Too et very",
      paragraphs: [
        "Very — « très », et ça peut être bien : It's very warm. Too — « trop », et là c'est déjà un problème : It's too warm. En français, c'est pareil : « très » / « trop » — facile !",
        "Too big, too small, too long, too expensive — c'est ce qu'on dit quand un vêtement ne va pas. Comme « trop », too se place devant l'adjectif.",
      ],
      examples: [
        { ru: "These boots are too small.", en: "Ces bottes sont trop petites." },
        { ru: "It's very nice, but it's too expensive.", en: "C'est très joli, mais c'est trop cher." },
      ],
    },
  ],
  tasks: [
    choice("enbo5-t1", "La veste ne va pas, elle est immense. Que dire ?", [
      ["It's too big.", true],
      ["It's very big, I'll take it.", false],
      ["It fits.", false],
    ], { skill: "grammar" }),
    listen("enbo5-t2", "Écoute. Quel est le problème ?", "These boots are too small.", [
      ["Les bottes sont trop petites.", true],
      ["Les bottes sont trop grandes.", false],
      ["Les bottes sont trop chères.", false],
    ]),
    match("enbo5-t3", "Relie les paires.", [
      ["too big", "trop grand"],
      ["too small", "trop petit"],
      ["It fits!", "Ça va parfaitement !"],
      ["I'll take it.", "Je le prends."],
    ], { skill: "words" }),
    spell("enbo5-t4", "Assemble les lettres du mot « trop ».", "too", ["e"]),
    speak("enbo5-t5", "How does the jacket fit?", "It's too big. Have you got a smaller size?", "Elle est trop grande. Vous avez une taille en dessous ?", { help: "Dis à voix haute que le vêtement ne va pas et demande une autre taille." }),
    choice("enbo5-t6", "Comment dire « Je peux l'essayer ? »", [
      ["Can I try it on?", true],
      ["Can I try on it?", false],
      ["I try it?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "donuts",
    itemName: "Boîte de donuts",
    itemNameRu: "Box of donuts",
    ru: "Hooray! A box of donuts!",
    en: "Hourra ! Une boîte de donuts !",
    a11y: "Une boîte ouverte avec six donuts au glaçage multicolore et aux vermicelles.",
    image: p("donuts"),
    steps: ["Tom, dans sa nouvelle veste bleue, est ravi.", "Il achète une boîte de donuts pour tout le monde.", "« For the best shop assistants! » — « Pour les meilleurs vendeurs ! »", "Murzik choisit le rose."],
    bridge: "Le samedi, Emily travaille d'habitude. Mais aujourd'hui, elle fait autre chose…",
  },
};

const boston6: Lesson = {
  id: "en-a1-boston-6",
  level: "A1",
  cityId: "en-boston",
  number: 6,
  title: "Usually or now? — D'habitude ou maintenant ?",
  minutes: 7,
  goals: ["Distinguer « d'habitude » et « maintenant »", "Dire : I usually work, but today I'm studying", "Demander : What are you doing?"],
  vocabNote: "D'habitude, toujours, tous les jours — le présent simple : I work. En ce moment, aujourd'hui — am / is / are + -ing : I'm working.",
  vocab: [
    v("enbo6-1", "Emily usually works on Saturday.", "Emily travaille d'habitude le samedi.", "Emily à la caisse du magasin, sur le calendrier : samedi.", "Écouter Emily usually works on Saturday", p("l6-1")),
    v("enbo6-2", "Today she's studying.", "Aujourd'hui, elle révise.", "Emily à la bibliothèque au milieu de piles de livres.", "Écouter Today she's studying", p("l6-2")),
    v("enbo6-3", "What are you doing?", "Qu'est-ce que tu fais ?", "Murzik regarde par-dessus l'épaule d'Emily.", "Écouter What are you doing", p("l6-3")),
    v("enbo6-4", "I'm writing an essay.", "J'écris une dissertation.", "Emily tape sur son ordinateur portable.", "Écouter I'm writing an essay", p("l6-4")),
    v("enbo6-5", "Tom is taking photos.", "Tom prend des photos.", "Tom avec son appareil photo près du vieux port.", "Écouter Tom is taking photos", p("l6-5")),
    v("enbo6-6", "I'm not working today.", "Je ne travaille pas aujourd'hui.", "Murzik, en bottes de pluie, saute dans les flaques.", "Écouter I'm not working today", p("l6-6")),
    v("enbo6-7", "Are you having fun?", "Tu t'amuses ?", "Emily rit en regardant Murzik tout mouillé.", "Écouter Are you having fun", p("l6-7")),
  ],
  dialogue: {
    title: "Samedi",
    note: "Exam — « examen ». Puddle — « flaque ».",
    lines: [
      line("murzik", "Emily! You usually work on Saturday. What are you doing here?", "Emily ! D'habitude, tu travailles le samedi. Qu'est-ce que tu fais ici ?"),
      line("emily", "I'm not working today. I've got an exam on Monday. I'm studying.", "Je ne travaille pas aujourd'hui. J'ai un examen lundi. Je révise."),
      line("murzik", "What are you writing?", "Et qu'est-ce que tu écris ?"),
      line("emily", "I'm writing an essay. And what are you doing?", "J'écris une dissertation. Et toi, qu'est-ce que tu fais ?"),
      line("murzik", "Tom is taking photos and I'm jumping in puddles!", "Tom prend des photos et moi, je saute dans les flaques !"),
      line("emily", "Ha-ha! Are you having fun?", "Ha-ha ! Tu t'amuses ?"),
      line("murzik", "Yes, I am!", "Oui !"),
    ],
    gist: choice("enbo6-d1", "Pourquoi Emily ne travaille-t-elle pas aujourd'hui ?", [
      ["Elle a un examen, elle révise.", true],
      ["Le magasin est fermé.", false],
      ["Elle est malade.", false],
    ]),
  },
  grammar: [
    {
      title: "I work ou I'm working ?",
      paragraphs: [
        "Le présent simple — pour ce qui arrive d'habitude : Emily works on Saturday. I drink tea every morning.",
        "Le présent continu — pour ce qui se passe maintenant : Today she's studying. Look, it's snowing! Les mots-indices : usually, every day — présent simple ; now, right now, look! — la forme en -ing. En français, « je travaille » sert pour les deux ; en anglais, il faut choisir.",
      ],
      examples: [
        { ru: "I usually drink tea, but today I'm drinking coffee.", en: "D'habitude, je bois du thé, mais aujourd'hui je bois du café." },
        { ru: "Tom works every day. Now he's sleeping.", en: "Tom travaille tous les jours. Là, il dort." },
      ],
    },
  ],
  tasks: [
    choice("enbo6-t1", "Choisis la bonne phrase : « Regarde ! Il neige ! »", [
      ["Look! It's snowing!", true],
      ["Look! It snows!", false],
      ["Look! It snowing!", false],
    ], { skill: "grammar" }),
    listen("enbo6-t2", "Écoute. Que fait Tom maintenant ?", "Tom usually works in the morning, but now he's sleeping.", [
      ["Il dort.", true],
      ["Il travaille.", false],
      ["Il prend des photos.", false],
    ]),
    match("enbo6-t3", "Relie les paires.", [
      ["usually", "d'habitude"],
      ["now", "maintenant"],
      ["today", "aujourd'hui"],
      ["have fun", "s'amuser"],
    ], { skill: "words" }),
    missing("enbo6-t4", "Quelle lettre manque ? (« d'habitude »)", "usu", "lly", "a", ["a", "e", "o"]),
    speak("enbo6-t5", "What are you doing now?", "I'm learning English!", "J'apprends l'anglais !", { help: "Dis à voix haute ce que tu fais en ce moment même." }),
    choice("enbo6-t6", "Les bottes sont immenses. Que dire ?", [
      ["They're too big.", true],
      ["They fit.", false],
      ["They're very small.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "doormat",
    itemName: "Paillasson",
    itemNameRu: "Doormat",
    ru: "Hooray! A doormat!",
    en: "Hourra ! Un paillasson !",
    a11y: "Un paillasson tressé près de la porte avec des traces de petites pattes mouillées.",
    image: p("doormat"),
    steps: ["Murzik rentre à la maison trempé jusqu'aux oreilles.", "Sur le sol — des traces de pattes mouillées.", "Emily rit et apporte un paillasson.", "« Wipe your paws, please! » — « Essuie tes pattes, s'il te plaît ! »"],
    bridge: "Avant le départ, Emily court après Murzik : « Wait! I've got something for you! »",
  },
};

const boston7: Lesson = {
  id: "en-a1-boston-7",
  level: "A1",
  cityId: "en-boston",
  number: 7,
  title: "Goodbye, Boston! — Au revoir, Boston !",
  minutes: 8,
  goals: ["Décrire la météo et les vêtements", "Acheter un vêtement", "Revoir tous les mots de Boston"],
  vocabNote: "On révise : la météo (it's raining), les vêtements et les couleurs, le présent continu, too big.",
  vocab: [
    v("enbo7-1", "Wait a minute!", "Attends une minute !", "Emily court après Murzik dans la rue.", "Écouter Wait a minute", p("l7-1")),
    v("enbo7-2", "Boston cream pie", "le Boston cream pie (gâteau à la crème)", "Un gâteau fourré à la crème avec du chocolat dessus.", "Écouter Boston cream pie", p("l7-2")),
    v("enbo7-3", "My grandma was a cook.", "Ma grand-mère était cuisinière.", "Une vieille photo : une femme en toque devant un gâteau.", "Écouter My grandma was a cook", p("l7-3")),
    v("enbo7-4", "a coat stand", "un portemanteau", "Un portemanteau en bois avec des crochets.", "Écouter a coat stand", p("l7-4")),
    v("enbo7-5", "Your guests need it.", "Tes invités en ont besoin.", "Des manteaux mouillés et des parapluies pendent au portemanteau.", "Écouter Your guests need it", p("l7-5")),
    v("enbo7-6", "It's getting colder.", "Il fait de plus en plus froid.", "Les premiers flocons au-dessus du port.", "Écouter It's getting colder", p("l7-6")),
    v("enbo7-7", "Take your umbrella!", "Prends ton parapluie !", "Emily tend le parapluie vert à Murzik.", "Écouter Take your umbrella", p("l7-7")),
  ],
  dialogue: {
    title: "La septième page",
    note: "Chicago — une grande ville au bord d'un lac, dans le nord des États-Unis.",
    lines: [
      line("emily", "Murzik! Wait a minute! This is for you.", "Murzik ! Attends une minute ! C'est pour toi."),
      line("murzik", "A page! Boston cream pie!", "Une page ! Le Boston cream pie !"),
      line("emily", "My grandma was a cook. She was Mrs Hope's friend.", "Ma grand-mère était cuisinière. C'était une amie de Mme Hope."),
      line("emily", "And this coat stand is for your café. Your guests need it!", "Et ce portemanteau est pour ton café. Tes invités en auront besoin !"),
      line("tom", "Thank you, Emily! Where's the next page?", "Merci, Emily ! Où est la page suivante ?"),
      line("emily", "In Chicago. Ask Tony. He's a taxi driver. Take your umbrella!", "À Chicago. Demandez Tony. Il est chauffeur de taxi. Prends ton parapluie !"),
    ],
    gist: choice("enbo7-d1", "Qui est Tony ?", [
      ["Un chauffeur de taxi à Chicago.", true],
      ["Un cuisinier à Boston.", false],
      ["Le cousin d'Emily.", false],
    ]),
  },
  grammar: [
    {
      title: "Météo et vêtements : tout ensemble",
      paragraphs: [
        "La météo : It's cold. It's raining. Les vêtements en ce moment : I'm wearing a red coat. La couleur : a green umbrella.",
        "Au magasin : I'm looking for… What size? Can I try it on? It's too big. I'll take it.",
      ],
      examples: [
        { ru: "It's cold and I'm wearing a warm coat.", en: "Il fait froid et je porte un manteau chaud." },
        { ru: "Have you got this jacket in black?", en: "Vous avez cette veste en noir ?" },
      ],
    },
  ],
  tasks: [
    listen("enbo7-t1", "Examen d'écoute. Que raconte Emily ?", "It's raining today. I'm wearing my yellow jacket and black boots. I'm not working, I'm studying.", [
      ["Il pleut, elle porte sa veste jaune et des bottes noires, elle révise.", true],
      ["Il y a du soleil, elle porte une veste noire, elle travaille.", false],
      ["Il neige, elle porte des bottes jaunes, elle dort.", false],
    ]),
    choice("enbo7-t2", "Choisis la bonne phrase.", [
      ["She's wearing a blue coat today.", true],
      ["She wearing a blue coat today.", false],
      ["She's wearing a coat blue today.", false],
    ], { skill: "grammar" }),
    match("enbo7-t3", "Relie les paires.", [
      ["Wait a minute!", "Attends une minute !"],
      ["guests", "invités"],
      ["a coat stand", "portemanteau"],
      ["colder", "plus froid"],
    ], { skill: "words" }),
    spell("enbo7-t4", "Assemble les lettres du mot « parapluie ».", "umbrella"),
    speak("enbo7-t5", "What's the weather like and what are you wearing?", "It's cold. I'm wearing a coat and a hat.", "Il fait froid. Je porte un manteau et un bonnet.", { help: "Raconte à voix haute le temps qu'il fait et ce que tu portes." }),
    script("enbo7-t6", "Souviens-toi de tout Boston. Termine la conversation au magasin.", [
      { speaker: "Vendeuse", text: "Can I help you?" },
      { speaker: "Toi", answer: "Yes, please. I'm looking for a jacket.", options: ["Yes, please. I'm looking for a jacket.", "Yes, please. I look a jacket.", "No, I'm wearing."] },
      { speaker: "Vendeuse", text: "What colour?" },
      { speaker: "Toi", answer: "Blue, please.", options: ["Blue, please.", "Medium, please.", "Too big, please."] },
      { speaker: "Vendeuse", text: "How does it fit?" },
      { speaker: "Toi", answer: "It fits! I'll take it.", options: ["It fits! I'll take it.", "It fits! It's too small.", "I'm looking."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "coat-stand",
    itemName: "Portemanteau",
    itemNameRu: "Coat stand",
    ru: "Hooray! A coat stand!",
    en: "Hourra ! Un portemanteau !",
    a11y: "Un grand portemanteau en bois aux crochets courbés, avec l'écharpe rousse de Murzik et sa casquette accrochées.",
    image: p("coat-stand"),
    steps: ["Emily offre à Murzik un vieux portemanteau en bois.", "« For wet coats and umbrellas! » — « Pour les manteaux mouillés et les parapluies ! »", "Murzik y accroche son écharpe et sa casquette.", "Les invités auront maintenant où pendre leur manteau."],
    bridge: "La page suivante est à Chicago, chez Tony le chauffeur de taxi.",
  },
};

const story: CityStory = {
  home: {
    name: "Chambre dans une vieille maison de briques",
    nameRu: "Murzik's room in Boston",
    image: p("home"),
    a11y: "Une chambre vide dans une vieille maison de briques, avec une cheminée et une haute fenêtre. Dehors, des arbres rouges et jaunes. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "coat-stand",
  welcomeRu: "Hello, Boston!",
  welcomeEn: "Bonjour, Boston !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Boston : de vieilles maisons de briques, des feuilles d'automne jaunes et rouges, il pleut.",
  departureImage: p("departure"),
  departureA11y: "Emily, en veste jaune, fait un signe d'adieu devant le magasin de vêtements.",
  finale: [
    {
      image: p("page"),
      a11y: "En gros plan : la septième page du livre de recettes, la recette du Boston cream pie. En marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la septième page. En marge — un mot de Mme Hope :" },
        { ru: "At my café, wet guests always got a warm towel.", en: "Dans mon café, les clients trempés recevaient toujours une serviette chaude." },
        { en: "Murzik se souvient de la pluie de Boston et hoche la tête : c'est bien vrai." },
      ],
    },
    {
      image: p("coat-stand"),
      a11y: "Murzik fait le tour de sa chambre de Boston, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre de Boston. Tom la photographie pour son journal." },
        { en: "Pour son futur café, il emporte le portemanteau." },
        { en: "La moitié du chemin est faite : sept pages sur quatorze !" },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "Boston complete!", en: "Boston terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Emily fait un signe d'adieu.",
      lines: [
        { ru: "Goodbye, Emily!", en: "Au revoir, Emily !" },
        { ru: "Next stop: Chicago!", en: "Prochain arrêt : Chicago !" },
      ],
    },
    {
      image: p("train"),
      a11y: "Le train roule vers l'ouest à travers forêts et champs.",
      lines: [{ ru: "Boston → Chicago", en: "Boston → Chicago" }],
    },
    {
      image: pic("en/chicago/arrival"),
      a11y: "Murzik et Tom à Chicago : de hauts immeubles de verre au bord d'un immense lac bleu, le vent fait voler l'écharpe de Murzik.",
      lines: [
        { ru: "Hello, Chicago!", en: "Bonjour, Chicago !" },
        { ru: "It's so windy!", en: "Quel vent !" },
      ],
    },
  ],
};

export const enBostonFr = {
  id: "en-boston",
  name: "Boston",
  nameEn: "Boston",
  lessons: [boston1, boston2, boston3, boston4, boston5, boston6, boston7],
  story,
};
