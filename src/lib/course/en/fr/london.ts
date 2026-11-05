import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, fill, letter, line, listen, match, missing, script, speak, spell, tf, v } from "./make";

/**
 * Londres · « Premiers mots » · lessons 1–7 — French version of ../london.ts.
 * Same story, same English phrases and pictures; explanations, translations,
 * pronunciation hints (French letters) and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/london/${name}`);

const london1: Lesson = {
  id: "en-a1-london-1",
  level: "A1",
  cityId: "en-london",
  number: 1,
  title: "Hello! — Salut !",
  minutes: 6,
  goals: ["Saluer un ami et poliment", "Demander le nom de quelqu'un et dire le sien", "Dire « Enchanté »"],
  vocabNote: "Hello ! convient à tout le monde. Hi ! est plus simple, entre amis. I'm est la forme courte de I am, « je suis ».",
  vocab: [
    v("enlo1-1", "Hello!", "Bonjour ! / Salut !", "Murzik à la gare sourit et salue de la patte.", "Écouter Hello", p("l1-1"), "[hèlou]"),
    v("enlo1-2", "Hi!", "Salut ! (entre amis)", "Murzik fait joyeusement signe à Tom.", "Écouter Hi", p("l1-2"), "[haï]"),
    v("enlo1-3", "What's your name?", "Comment tu t'appelles ?", "Une dame âgée en chapeau se penche vers Murzik, curieuse, comme pour poser une question.", "Écouter What's your name", p("l1-3"), "[ouots ior néim]"),
    v("enlo1-4", "My name is Murzik.", "Je m'appelle Murzik.", "Murzik pose une patte sur son torse et annonce fièrement son nom.", "Écouter My name is Murzik", p("l1-4"), "[maï néim iz Murzik]"),
    v("enlo1-5", "I'm Tom.", "Moi, c'est Tom.", "Tom se montre du doigt en souriant.", "Écouter I'm Tom", p("l1-5"), "[aïm Tom]"),
    v("enlo1-6", "Nice to meet you.", "Enchanté.", "Murzik et la dame âgée se serrent la patte et la main.", "Écouter Nice to meet you", p("l1-6"), "[naïs tou mite iou]"),
    v("enlo1-7", "Nice to meet you too.", "Moi aussi, enchantée.", "La dame en chapeau sourit chaleureusement en réponse.", "Écouter Nice to meet you too", p("l1-7"), "[naïs tou mite iou tou]"),
  ],
  letters: [
    letter("A a", "dans l'alphabet — « éi » ; dans les mots souvent « è » ou « a »", "name", "nom", "Dans name, la lettre a se lit « éi » : [néim]. Pas « a » comme en français !"),
    letter("B b", "comme « b » ; dans l'alphabet — « bi »", "Bye!", "Salut !"),
    letter("C c", "devant e, i — « s », sinon — « k » ; dans l'alphabet — « si »", "nice", "gentil", "nice — [naïs], mais cat — [kèt]."),
    letter("D d", "comme « d » ; dans l'alphabet — « di »", "Hello, dear!", "Bonjour, mon cher !"),
    letter("E e", "dans l'alphabet — « i » ; dans les mots souvent « è »", "meet", "rencontrer", "Deux e de suite se lisent comme un « i » long : meet — [mite]. La lettre se dit [i], pas « euh » !"),
  ],
  dialogue: {
    title: "À la gare",
    note: "Gran — « mamie », le surnom tendre que Tom donne à sa grand-mère. Welcome, Murzik! — « Bienvenue, Murzik ! »",
    lines: [
      line("tom", "Gran! Hello!", "Mamie ! Salut !"),
      line("hope", "Tom! Hello, dear! And who is this?", "Tom ! Bonjour, mon cher ! Et qui voilà ?"),
      line("murzik", "Hello! My name is Murzik.", "Bonjour ! Je m'appelle Murzik."),
      line("hope", "Welcome, Murzik! I'm Mrs Hope. Nice to meet you.", "Bienvenue, Murzik ! Je suis Mrs Hope. Enchantée."),
      line("murzik", "Nice to meet you too!", "Moi aussi, enchanté !"),
      line("hope", "Welcome to London!", "Bienvenue à Londres !"),
    ],
    gist: choice("enlo1-d1", "Qui accueille Murzik et Tom ?", [
      ["La grand-mère de Tom.", true],
      ["La maman de Tom.", false],
      ["Le chauffeur de taxi.", false],
    ]),
  },
  grammar: [
    {
      title: "I'm — « je suis »",
      paragraphs: [
        "Bonne nouvelle : comme en français, il y a un verbe entre « je » et le nom — « je suis Tom ». En anglais : I am Tom. À l'oral, on le contracte presque toujours : I'm Tom.",
        "Le verbe est obligatoire : « I Tom » est une faute. Et pour dire son nom, l'anglais préfère My name is…, littéralement « mon nom est… », là où le français dit « je m'appelle… ».",
      ],
      examples: [
        { ru: "I'm Murzik.", en: "Je suis Murzik. / Moi, c'est Murzik." },
        { ru: "My name is Murzik.", en: "Je m'appelle Murzik." },
      ],
    },
  ],
  tasks: [
    choice("enlo1-t1", "Comment dire « Moi, c'est Tom » ?", [
      ["I'm Tom.", true],
      ["I Tom.", false],
      ["Me Tom.", false],
    ], { skill: "grammar" }),
    listen("enlo1-t2", "Écoute. Qu'est-ce que ça veut dire ?", "What's your name?", [
      ["Comment tu t'appelles ?", true],
      ["Comment ça va ?", false],
      ["Qui est-ce ?", false],
    ]),
    match("enlo1-t3", "Relie les paires.", [
      ["Hello!", "Bonjour !"],
      ["Hi!", "Salut !"],
      ["Nice to meet you.", "Enchanté."],
      ["My name is…", "Je m'appelle…"],
    ], { skill: "words" }),
    spell("enlo1-t4", "Écris le prénom de Tom.", "Tom"),
    speak("enlo1-t5", "Hello! What's your name?", "Hello! My name is Alex.", "Bonjour ! Je m'appelle Alex.", { help: "Réponds à voix haute avec ton prénom." }),
    script("enlo1-t6", "Termine le mini-dialogue.", [
      { speaker: "Mme Hope", text: "Hello! I'm Mrs Hope. What's your name?" },
      { speaker: "Toi", answer: "My name is Alex.", options: ["My name is Alex.", "Nice to meet you too.", "What's your name?"] },
      { speaker: "Mme Hope", text: "Nice to meet you!" },
      { speaker: "Toi", answer: "Nice to meet you too!", options: ["Nice to meet you too!", "Hi!", "I'm Tom."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cup",
    itemName: "Tasse et soucoupe",
    itemNameRu: "Cup and saucer",
    ru: "Hooray! A cup and saucer!",
    en: "Hourra ! Une tasse et sa soucoupe !",
    a11y: "Dans sa nouvelle chambre, Murzik tient une tasse en porcelaine avec sa soucoupe à petites fleurs bleues.",
    image: p("cup"),
    steps: ["Mme Hope conduit Murzik à sa chambre.", "Sur la table — une tasse et sa soucoupe à fleurs bleues.", "« For you, dear! » — « Pour toi, mon cher ! »", "Murzik la pose délicatement sur le rebord de la fenêtre."],
    bridge: "Le matin, une odeur délicieuse monte de la cuisine. Mme Hope est déjà debout.",
  },
};

const london2: Lesson = {
  id: "en-a1-london-2",
  level: "A1",
  cityId: "en-london",
  number: 2,
  title: "How are you? — Comment ça va ?",
  minutes: 6,
  goals: ["Saluer le matin", "Demander comment ça va", "Répondre : très bien, bien, pas mal, comme ci comme ça"],
  vocabNote: "À la question How are you?, les Anglais répondent presque toujours court et enjoué : I'm fine, thanks. And you?",
  vocab: [
    v("enlo2-1", "Good morning!", "Bonjour ! (le matin)", "Mme Hope en tablier ouvre la fenêtre, le soleil du matin brille.", "Écouter Good morning", p("l2-1"), "[goud mor-ning]"),
    v("enlo2-2", "How are you?", "Comment ça va ?", "Mme Hope regarde Murzik avec tendresse par-dessus ses lunettes.", "Écouter How are you", p("l2-2"), "[haou ar iou]"),
    v("enlo2-3", "I'm fine, thanks.", "Ça va bien, merci.", "Murzik sourit tranquillement et lève le pouce.", "Écouter I'm fine, thanks", p("l2-3"), "[aïm faïn, sènks]"),
    v("enlo2-4", "I'm great!", "Ça va super !", "Murzik saute de joie, les deux pattes en l'air.", "Écouter I'm great", p("l2-4"), "[aïm gréit]"),
    v("enlo2-5", "Not bad.", "Pas mal.", "Tom hausse les épaules en souriant.", "Écouter Not bad", p("l2-5"), "[not bèd]"),
    v("enlo2-6", "So-so.", "Comme ci comme ça.", "Tom, ensommeillé et décoiffé, balance la main de gauche à droite.", "Écouter So-so", p("l2-6"), "[sou-sou]"),
    v("enlo2-7", "And you?", "Et toi ? / Et vous ?", "Murzik montre Mme Hope d'une patte amicale.", "Écouter And you", p("l2-7"), "[ènd iou]"),
  ],
  letters: [
    letter("F f", "comme « f » ; dans l'alphabet — « èf »", "fine", "bien"),
    letter("G g", "dans l'alphabet — « dji » ; devant e, i souvent « dj », sinon « g »", "good", "bon", "good — [goud], mais orange — [o-rindj]. La lettre se dit [dji], pas « jé » !"),
    letter("H h", "un souffle léger, un peu comme un « r » français très doux ; dans l'alphabet — « éitch »", "Hello!", "Bonjour !", "Contrairement au français, le h anglais se prononce : [hèlou]."),
    letter("I i", "dans l'alphabet — « aï » ; dans les mots souvent « i »", "fine", "bien", "Dans fine, la lettre i se lit « aï » : [faïn]. Pas « i » comme en français !"),
    letter("J j", "comme « dj » ; dans l'alphabet — « djéi »", "jam", "confiture", "La lettre se dit [djéi], pas « ji » !"),
  ],
  dialogue: {
    title: "Le matin à la cuisine",
    note: "You — c'est « tu » et « vous » à la fois : un seul mot en anglais. La politesse s'entend dans le ton et dans les mots please et thank you.",
    lines: [
      line("hope", "Good morning, Murzik!", "Bonjour, Murzik !"),
      line("murzik", "Good morning, Mrs Hope!", "Bonjour, Mme Hope !"),
      line("hope", "How are you?", "Comment ça va ?"),
      line("murzik", "I'm great, thanks! And you?", "Ça va super, merci ! Et vous ?"),
      line("hope", "I'm fine, thank you. Tom! How are you?", "Bien, merci. Tom ! Et toi, comment ça va ?"),
      line("tom", "So-so… I'm sleepy!", "Comme ci comme ça… J'ai sommeil !"),
    ],
    gist: choice("enlo2-d1", "Comment va Tom ?", [
      ["Comme ci comme ça, il a sommeil.", true],
      ["Ça va super.", false],
      ["Bien, merci.", false],
    ]),
  },
  grammar: [
    {
      title: "You — « tu » et « vous » à la fois",
      paragraphs: [
        "En français, il faut choisir entre tu et vous. En anglais, c'est plus simple : un seul mot pour les deux, you. How are you? — « Comment ça va ? », à un ami comme à une dame âgée.",
        "La politesse passe par d'autres mots : thank you, please, et Mrs Hope (pas juste Hope).",
      ],
      examples: [
        { ru: "How are you, Tom?", en: "Comment ça va, Tom ?" },
        { ru: "How are you, Mrs Hope?", en: "Comment allez-vous, Mme Hope ?" },
      ],
    },
  ],
  tasks: [
    listen("enlo2-t1", "Écoute. Comment va la personne ?", "Not bad.", [
      ["Pas mal.", true],
      ["Super.", false],
      ["Mal.", false],
    ]),
    match("enlo2-t2", "Relie les paires.", [
      ["I'm fine.", "Ça va bien."],
      ["I'm great!", "Ça va super !"],
      ["So-so.", "Comme ci comme ça."],
      ["Not bad.", "Pas mal."],
    ], { skill: "words" }),
    tf("enlo2-t3", "You veut dire à la fois « tu » et « vous ».", true, "grammar"),
    missing("enlo2-t4", "Quelle lettre manque ? (« bien »)", "", "ine", "f", ["f", "d", "p"]),
    speak("enlo2-t5", "Good morning! How are you?", "Good morning! I'm fine, thanks. And you?", "Bonjour ! Ça va bien, merci. Et vous ?", { help: "Réponds à voix haute et pose la question à ton tour." }),
    choice("enlo2-t6", "Mme Hope dit : Nice to meet you! Que répondre ?", [
      ["Nice to meet you too!", true],
      ["What's your name?", false],
      ["So-so.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cushion",
    itemName: "Coussin en tricot",
    itemNameRu: "Cushion",
    ru: "Hooray! A cushion!",
    en: "Hourra ! Un coussin !",
    a11y: "Murzik s'est installé confortablement dans un fauteuil, sur un doux coussin en tricot à carreaux rouges et blancs.",
    image: p("cushion"),
    steps: ["Mme Hope apporte un coussin en tricot.", "« I made it. Long ago. » — « Je l'ai fait. Il y a longtemps. »", "Murzik pose le coussin dans le fauteuil.", "Comme c'est moelleux !"],
    bridge: "Au petit-déjeuner, Tom offre un petit cadeau à Murzik.",
  },
};

const london3: Lesson = {
  id: "en-a1-london-3",
  level: "A1",
  cityId: "en-london",
  number: 3,
  title: "Please, thank you, sorry — Les mots de la politesse",
  minutes: 6,
  goals: ["Remercier et répondre à un « merci »", "Demander poliment", "S'excuser et dire « ce n'est rien »"],
  vocabNote: "Les Anglais disent please, thank you et sorry très souvent — bien plus souvent qu'en français. C'est une part importante de la politesse.",
  vocab: [
    v("enlo3-1", "Thank you!", "Merci !", "Murzik tient une petite boîte-cadeau et sourit à Tom avec reconnaissance.", "Écouter Thank you", p("l3-1"), "[sènk iou]"),
    v("enlo3-2", "Thanks!", "Merci ! (plus simple)", "Murzik lève joyeusement le pouce vers Tom.", "Écouter Thanks", p("l3-2"), "[sènks]"),
    v("enlo3-3", "You're welcome.", "De rien. (en réponse à « merci »)", "Tom sourit chaleureusement avec un petit geste modeste de la main.", "Écouter You're welcome", p("l3-3"), "[ior ouèl-keum]"),
    v("enlo3-4", "Tea, please.", "Un thé, s'il vous plaît.", "Murzik tend sa tasse poliment.", "Écouter Tea, please", p("l3-4"), "[ti, plize]"),
    v("enlo3-5", "Sorry!", "Pardon ! / Désolé !", "Tom a marché par mégarde sur la queue de Murzik et lève la patte, confus.", "Écouter Sorry", p("l3-5"), "[so-ri]"),
    v("enlo3-6", "Excuse me.", "Excusez-moi. (pour passer ou demander)", "Murzik lève poliment la patte pour passer devant une dame dans un couloir étroit.", "Écouter Excuse me", p("l3-6"), "[èks-kiouz mi]"),
    v("enlo3-7", "That's OK.", "Ce n'est rien.", "Murzik sourit et remue gentiment la queue : tout va bien.", "Écouter That's OK", p("l3-7"), "[zèts ou-kéi]"),
  ],
  letters: [
    letter("K k", "comme « k » ; dans l'alphabet — « kéi »", "OK", "d'accord"),
    letter("L l", "comme « l » ; dans l'alphabet — « èl »", "please", "s'il te plaît"),
    letter("M m", "comme « m » ; dans l'alphabet — « èm »", "me", "moi, me"),
    letter("N n", "comme « n » ; dans l'alphabet — « èn »", "thank you", "merci"),
    letter("O o", "dans l'alphabet — « ou » ; dans les mots souvent « o » ou « a »", "sorry", "pardon", "OK se lit [ou-kéi]."),
  ],
  dialogue: {
    title: "Le cadeau",
    note: "Le son th (thank, that) n'existe pas en français : avance la pointe de la langue entre les dents. Au début, un [s] ou un [z] bien français fait très bien l'affaire.",
    lines: [
      line("tom", "Murzik, this is for you.", "Murzik, c'est pour toi."),
      line("murzik", "Oh! Thank you!", "Oh ! Merci !"),
      line("tom", "You're welcome.", "De rien."),
      line("tom", "Oh! Sorry!", "Oh ! Pardon !"),
      line("murzik", "That's OK.", "Ce n'est rien."),
      line("hope", "Tea, Murzik?", "Du thé, Murzik ?"),
      line("murzik", "Yes, please! Thanks!", "Oui, avec plaisir ! Merci !"),
    ],
    gist: choice("enlo3-d1", "Qu'est-il arrivé à la queue de Murzik ?", [
      ["Tom a marché dessus sans faire exprès.", true],
      ["Elle a été coincée dans une porte.", false],
      ["Rien du tout.", false],
    ]),
  },
  grammar: [
    {
      title: "Please ou you're welcome ?",
      paragraphs: [
        "En français, on demande avec « s'il te plaît » et on répond à « merci » par « de rien ». En anglais, ce sont deux mots différents — attention à ne pas les mélanger.",
        "Pour demander — please : Tea, please. Pour répondre à « merci » — you're welcome, littéralement « tu es le bienvenu » : Thank you! — You're welcome.",
      ],
      examples: [
        { ru: "Coffee, please.", en: "Un café, s'il vous plaît." },
        { ru: "Thank you! — You're welcome.", en: "Merci ! — De rien." },
      ],
    },
  ],
  tasks: [
    choice("enlo3-t1", "On te dit : Thank you! Que répondre ?", [
      ["You're welcome.", true],
      ["Please.", false],
      ["Excuse me.", false],
    ], { skill: "grammar" }),
    listen("enlo3-t2", "Écoute. Que dit-on ?", "Sorry!", [
      ["Pardon !", true],
      ["Merci !", false],
      ["De rien !", false],
    ]),
    tf("enlo3-t3", "Excuse me sert à passer ou à s'adresser à un inconnu.", true),
    missing("enlo3-t4", "Quelle lettre manque ? (« s'il te plaît » dans une demande)", "p", "ease", "l", ["l", "r", "n"]),
    speak("enlo3-t5", "Sorry!", "That's OK.", "Ce n'est rien.", { help: "Réponds à voix haute." }),
    choice("enlo3-t6", "Comment dire « Bonjour ! » (le matin) ?", [
      ["Good morning!", true],
      ["Good night!", false],
      ["How are you?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jam",
    itemName: "Pot de confiture de fraises",
    itemNameRu: "Jam",
    ru: "Hooray! A jar of jam!",
    en: "Hourra ! Un pot de confiture !",
    a11y: "Sur l'étagère, un pot en verre de confiture de fraises avec un couvercle à carreaux rouges et blancs.",
    image: p("jam"),
    steps: ["Dans la boîte offerte par Tom — un pot de confiture de fraises.", "« Gran's jam. The best in London! » — « La confiture de mamie. La meilleure de Londres ! »", "Murzik pose le pot sur l'étagère.", "Ça sent l'été."],
    bridge: "L'après-midi, Mme Hope raconte Londres. Mais elle parle si vite…",
  },
};

const london4: Lesson = {
  id: "en-a1-london-4",
  level: "A1",
  cityId: "en-london",
  number: 4,
  title: "Comment ça s'écrit ?",
  minutes: 7,
  goals: ["Dire que tu ne comprends pas", "Demander de répéter et de parler plus lentement", "Demander comment un mot s'écrit et ce qu'il veut dire"],
  vocabNote: "En anglais, les mots s'écrivent souvent autrement qu'ils ne se prononcent. C'est pour ça que même les Anglais se demandent entre eux : How do you spell it?",
  vocab: [
    v("enlo4-1", "I don't understand.", "Je ne comprends pas.", "Murzik se gratte derrière l'oreille, l'air perdu, un point d'interrogation au-dessus de lui.", "Écouter I don't understand", p("l4-1"), "[aï dount an-deu-stènd]"),
    v("enlo4-2", "Can you repeat that, please?", "Vous pouvez répéter, s'il vous plaît ?", "Murzik plaque une patte contre son oreille.", "Écouter Can you repeat that, please", p("l4-2"), "[kèn iou ri-pite zèt, plize]"),
    v("enlo4-3", "Slowly, please.", "Plus lentement, s'il vous plaît.", "Murzik fait un doux geste « moins vite ». À côté, un escargot avance.", "Écouter Slowly, please", p("l4-3"), "[slou-li, plize]"),
    v("enlo4-4", "How do you spell it?", "Comment ça s'écrit ?", "Murzik tient un carnet et un crayon, prêt à écrire.", "Écouter How do you spell it", p("l4-4"), "[haou dou iou spèl it]"),
    v("enlo4-5", "What does it mean?", "Qu'est-ce que ça veut dire ?", "Murzik montre un mot inconnu dans le journal.", "Écouter What does it mean", p("l4-5"), "[ouot daz it mine]"),
    v("enlo4-6", "How do you say it in English?", "Comment on dit ça en anglais ?", "Murzik tient une théière dans ses pattes et lève les yeux, interrogateur.", "Écouter How do you say it in English", p("l4-6"), "[haou dou iou séi it in in-glich]"),
    v("enlo4-7", "I don't know.", "Je ne sais pas.", "Tom écarte les bras avec un drôle de sourire perdu.", "Écouter I don't know", p("l4-7"), "[aï dount nou]"),
  ],
  letters: [
    letter("P p", "comme « p » ; dans l'alphabet — « pi »", "please", "s'il te plaît"),
    letter("Q q", "presque toujours avec u : qu- se lit « kou » ; dans l'alphabet — « kiou »", "queen", "reine"),
    letter("R r", "doux : la langue se recourbe sans rouler ni toucher le palais ; dans l'alphabet — « ar »", "repeat", "répéter", "Très différent du r français : pas de vibration."),
    letter("S s", "comme « s », entre voyelles parfois « z » ; dans l'alphabet — « ès »", "slowly", "lentement"),
    letter("T t", "comme « t », la langue un peu plus haut ; dans l'alphabet — « ti »", "it", "cela"),
  ],
  dialogue: {
    title: "Visite de la cuisine",
    note: "Scone [skon] — un petit pain anglais, on le mange avec de la confiture et de la crème épaisse.",
    lines: [
      line("hope", "And this is a scone. We eat scones with jam and cream.", "Et voici un scone. On mange les scones avec de la confiture et de la crème."),
      line("murzik", "Sorry, I don't understand. Slowly, please.", "Pardon, je ne comprends pas. Plus lentement, s'il vous plaît."),
      line("hope", "A scone. With jam.", "Un scone. Avec de la confiture."),
      line("murzik", "How do you spell it?", "Comment ça s'écrit ?"),
      line("hope", "S-C-O-N-E.", "Ès, si, ou, ène, i."),
      line("murzik", "And what does \"cream\" mean?", "Et que veut dire « cream » ?"),
      line("tom", "I don't know how to say it in Russian! Look — this is cream.", "Je ne sais pas comment le dire en russe ! Regarde — voilà la crème."),
    ],
    gist: choice("enlo4-d1", "Pourquoi Murzik redemande-t-il ?", [
      ["Mme Hope parle vite.", true],
      ["Il ne veut pas de scones.", false],
      ["Il est pressé.", false],
    ]),
  },
  grammar: [
    {
      title: "Comment dire « ne… pas »",
      paragraphs: [
        "En français, la négation entoure le verbe : « je ne comprends pas ». En anglais, un seul mot devant le verbe : don't, forme courte de do not. I understand — « je comprends », I don't understand — « je ne comprends pas ». I know → I don't know.",
        "On ne dit jamais « I not understand » : sans don't, la phrase est fausse. À l'oral, on utilise presque toujours la forme courte.",
      ],
      examples: [
        { ru: "I don't understand.", en: "Je ne comprends pas." },
        { ru: "I don't know. Can you repeat that, please?", en: "Je ne sais pas. Vous pouvez répéter, s'il vous plaît ?" },
      ],
    },
  ],
  tasks: [
    choice("enlo4-t1", "Comment dire « Je ne sais pas » ?", [
      ["I don't know.", true],
      ["I not know.", false],
      ["I no know.", false],
    ], { skill: "grammar" }),
    listen("enlo4-t2", "Écoute. Que demande-t-on ?", "Slowly, please.", [
      ["De parler plus lentement.", true],
      ["De répéter encore une fois.", false],
      ["De dire comment le mot s'écrit.", false],
    ]),
    match("enlo4-t3", "Relie les paires.", [
      ["How do you spell it?", "Comment ça s'écrit ?"],
      ["What does it mean?", "Qu'est-ce que ça veut dire ?"],
      ["I don't understand.", "Je ne comprends pas."],
      ["I don't know.", "Je ne sais pas."],
    ], { skill: "words" }),
    spell("enlo4-t4", "Écris le mot « scone » (petit pain).", "scone"),
    speak("enlo4-t5", "What does \"cream\" mean?", "I don't know. Can you repeat that, please?", "Je ne sais pas. Vous pouvez répéter, s'il vous plaît ?", { help: "Réponds à voix haute que tu ne sais pas, et demande de répéter." }),
    match("enlo4-t6", "Souvenirs de la leçon précédente. Relie les paires.", [
      ["Thank you!", "Merci !"],
      ["You're welcome.", "De rien. (en réponse)"],
      ["Sorry!", "Pardon !"],
      ["That's OK.", "Ce n'est rien."],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "towel",
    itemName: "Torchon de cuisine",
    itemNameRu: "Tea towel",
    ru: "Hooray! A tea towel!",
    en: "Hourra ! Un torchon !",
    a11y: "À un crochet pend un torchon en lin décoré d'une théière et de scones dessinés.",
    image: p("towel"),
    steps: ["Murzik aide à essuyer la vaisselle.", "Mme Hope lui offre un torchon décoré d'une théière.", "« Every cook needs one! » — « Il en faut un à chaque cuisinier ! »", "Le torchon pend à un crochet près de la porte."],
    bridge: "Le soir, Tom apprend à Murzik à compter — sur les marches de l'escalier.",
  },
};

const london5: Lesson = {
  id: "en-a1-london-5",
  level: "A1",
  cityId: "en-london",
  number: 5,
  title: "Les nombres de 1 à 10",
  minutes: 7,
  goals: ["Compter de zéro à dix", "Demander « Combien ? »", "Dicter un numéro de téléphone"],
  vocabNote: "Pour dicter un numéro de téléphone, les Anglais donnent les chiffres un par un, et le zéro est souvent dit oh [ou] : 0-7-9 — oh-seven-nine.",
  vocab: [
    v("enlo5-1", "one, two, three", "un, deux, trois", "Trois marches d'escalier, sur chacune un petit chat en peluche.", "Écouter one, two, three", p("l5-1"), "[ouan, tou, sri]"),
    v("enlo5-2", "four, five, six", "quatre, cinq, six", "Six tasses alignées en rang sur l'étagère.", "Écouter four, five, six", p("l5-2"), "[for, faïv, siks]"),
    v("enlo5-3", "seven, eight", "sept, huit", "Huit scones dans une assiette.", "Écouter seven, eight", p("l5-3"), "[sè-ven, éit]"),
    v("enlo5-4", "nine, ten", "neuf, dix", "Murzik montre dix doigts sur ses deux pattes.", "Écouter nine, ten", p("l5-4"), "[naïn, tèn]"),
    v("enlo5-5", "zero", "zéro", "Une assiette vide — pas un seul scone.", "Écouter zero", p("l5-5"), "[zi-rou]"),
    v("enlo5-6", "How many?", "Combien ?", "Mme Hope montre l'assiette de scones et lève les sourcils d'un air interrogateur.", "Écouter How many", p("l5-6"), "[haou mè-ni]"),
    v("enlo5-7", "What's your phone number?", "C'est quoi ton numéro de téléphone ?", "Tom tient son téléphone, prêt à noter.", "Écouter What's your phone number", p("l5-7"), "[ouots ior foun nam-beu]"),
  ],
  letters: [
    letter("U u", "dans l'alphabet — « iou » ; dans les mots souvent « a » ou « ou »", "number", "numéro", "Dans number, la lettre u se lit presque « a » : [nam-beu]."),
    letter("V v", "comme « v » ; dans l'alphabet — « vi »", "seven", "sept"),
    letter("W w", "les lèvres arrondies, un « ou » très bref ; dans l'alphabet — « dèbeul-iou »", "what", "quoi", "Ce n'est pas « v » : what — [ouat]. Et la lettre se nomme « double u », pas « double-vé » !"),
    letter("X x", "comme « ks » ; dans l'alphabet — « èks »", "six", "six", "six — [siks] : même orthographe qu'en français, autre prononciation !"),
    letter("Y y", "en début de mot — « y » comme dans « yaourt », en fin — « i » ou « aï » ; dans l'alphabet — « ouaï »", "my", "mon, ma", "my — [maï], yes — [yès]. La lettre se dit [ouaï], pas « i grec » !"),
    letter("Z z", "comme « z » ; dans l'alphabet — « zèd » (en Angleterre) ou « zi » (aux États-Unis)", "zero", "zéro"),
  ],
  dialogue: {
    title: "Combien de scones ?",
    note: "In the oven — « dans le four ». Scones — le pluriel : un scone, plusieurs scones.",
    lines: [
      line("hope", "How many scones, Murzik?", "Combien de scones, Murzik ?"),
      line("murzik", "One, two, three, four… Eight!", "Un, deux, trois, quatre… Huit !"),
      line("hope", "Good! And in the oven? How many?", "Bravo ! Et dans le four ? Combien ?"),
      line("murzik", "Zero!", "Zéro !"),
      line("tom", "Murzik, what's your phone number?", "Murzik, c'est quoi ton numéro de téléphone ?"),
      line("murzik", "Oh-seven-nine, six-five-four…", "Zéro-sept-neuf, six-cinq-quatre…"),
    ],
    gist: choice("enlo5-d1", "Combien y a-t-il de scones dans l'assiette ?", [
      ["Huit.", true],
      ["Trois.", false],
      ["Aucun.", false],
    ]),
  },
  grammar: [
    {
      title: "Une chose et plusieurs : -s",
      paragraphs: [
        "Comme en français, le pluriel se marque avec un -s : one scone — eight scones, one cup — two cups. Mais différence importante : en français, le -s du pluriel ne se prononce pas ; en anglais, il se prononce !",
        "Pour demander « combien ? » de choses qu'on peut compter : How many…? — How many cups? — Combien de tasses ?",
      ],
      examples: [
        { ru: "How many cups? — Six.", en: "Combien de tasses ? — Six." },
        { ru: "One scone, two scones.", en: "Un scone, deux scones." },
      ],
    },
  ],
  tasks: [
    listen("enlo5-t1", "Écoute. Quel nombre ?", "seven", [
      ["7", true],
      ["11", false],
      ["9", false],
    ]),
    match("enlo5-t2", "Relie les paires.", [
      ["three", "3"],
      ["five", "5"],
      ["eight", "8"],
      ["ten", "10"],
    ], { skill: "words" }),
    choice("enlo5-t3", "Comment dire « quatre tasses » ?", [
      ["four cups", true],
      ["four cup", false],
      ["a four cups", false],
    ], { skill: "grammar" }),
    missing("enlo5-t4", "Quelle lettre manque ? (« six »)", "si", "", "x", ["x", "ks", "s"]),
    speak("enlo5-t5", "What's your phone number?", "It's oh-seven-nine, two-five-one…", "Zéro-sept-neuf, deux-cinq-un…", { help: "Dicte ton numéro de téléphone à voix haute, chiffre par chiffre." }),
    choice("enlo5-t6", "Un mot n'est pas clair. Que dire ?", [
      ["What does it mean?", true],
      ["You're welcome.", false],
      ["Good morning!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "clock",
    itemName: "Réveil rouge",
    itemNameRu: "Alarm clock",
    ru: "Hooray! An alarm clock!",
    en: "Hourra ! Un réveil !",
    a11y: "Sur la table de nuit, un réveil rond et rouge avec deux cloches sur le dessus.",
    image: p("clock"),
    steps: ["Tom offre à Murzik un réveil rouge.", "« Seven o'clock, every morning! » — « Sept heures, tous les matins ! »", "Murzik le pose sur la table de nuit.", "Tic-tac, tic-tac."],
    bridge: "Le matin, Mme Hope dit : « Tu veux voir quelque chose ? En bas, derrière la vieille porte… »",
  },
};

const london6: Lesson = {
  id: "en-a1-london-6",
  level: "A1",
  cityId: "en-london",
  number: 6,
  title: "Oui, non, peut-être",
  minutes: 7,
  goals: ["Répondre « oui », « non », « bien sûr », « peut-être »", "Poser la question Is it…? et y répondre", "Dire « allons-y ! »"],
  vocabNote: "Yes, please — « oui, avec plaisir », No, thank you — « non, merci ». Un simple Yes ou No, sans mot de politesse, sonne un peu sec.",
  vocab: [
    v("enlo6-1", "Yes, please.", "Oui, avec plaisir.", "Murzik hoche joyeusement la tête et tend les pattes.", "Écouter Yes, please", p("l6-1"), "[yès, plize]"),
    v("enlo6-2", "No, thank you.", "Non, merci.", "Murzik lève poliment la patte et décline avec le sourire.", "Écouter No, thank you", p("l6-2"), "[nou, sènk iou]"),
    v("enlo6-3", "Of course!", "Bien sûr !", "Murzik hoche avec fougue, la queue droite comme un i.", "Écouter Of course", p("l6-3"), "[ov kors]"),
    v("enlo6-4", "Maybe.", "Peut-être.", "Murzik tapote son menton du bout de la patte.", "Écouter Maybe", p("l6-4"), "[méi-bi]"),
    v("enlo6-5", "Let's go!", "Allons-y ! / C'est parti !", "Murzik et Tom se tapent dans la main et la patte.", "Écouter Let's go", p("l6-5"), "[lèts gou]"),
    v("enlo6-6", "Is it your café? — Yes, it is.", "C'est votre café ? — Oui.", "Mme Hope se tient devant la vieille porte bleue et hoche la tête.", "Écouter Is it your café? Yes, it is", p("l6-6"), "[iz it ior ka-féi — yès, it iz]"),
    v("enlo6-7", "It's closed.", "C'est fermé.", "Sur la porte bleue, une pancarte est accrochée, les vitres sont poussiéreuses.", "Écouter It's closed", p("l6-7"), "[its klouzd]"),
  ],
  letters: [
    letter("A E I O U", "les voyelles : dans l'alphabet on les dit « éi, i, aï, ou, iou »", "café", "café", "Dans les mots, les voyelles sonnent souvent autrement que dans l'alphabet. C'est normal — écoute et répète. Et café vient du français, mais se dit [ka-féi] !"),
    letter("th", "un son spécial : la pointe de la langue entre les dents", "thank you", "merci", "Ni « s » ni « z » — essaie avec la langue entre les dents. Au début, [s] ou [z] suffit."),
  ],
  dialogue: {
    title: "La porte bleue",
    note: "Downstairs — « en bas, à l'étage du dessous ». Recipe book — « livre de recettes ». Pages are missing — « il manque des pages ».",
    lines: [
      line("hope", "Murzik, do you want to see something? It's downstairs.", "Murzik, tu veux voir quelque chose ? C'est en bas."),
      line("murzik", "Of course! Let's go!", "Bien sûr ! Allons-y !"),
      line("murzik", "A blue door! Is it your café?", "Une porte bleue ! C'est votre café ?"),
      line("hope", "Yes, it is. Hope's Café. It's been closed for many years.", "Oui. Le café « Hope ». Il est fermé depuis bien des années."),
      line("hope", "And this is my old recipe book. Look — some pages are missing.", "Et voici mon vieux livre de recettes. Regarde — il manque des pages."),
      line("murzik", "Where are they?", "Où sont-elles ?"),
      line("hope", "Maybe… with my old friends.", "Peut-être… chez mes vieux amis."),
    ],
    gist: choice("enlo6-d1", "Qu'y a-t-il derrière la porte bleue ?", [
      ["Le vieux café fermé de Mme Hope.", true],
      ["Un magasin tout neuf.", false],
      ["La chambre de Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "La question Is it…?",
      paragraphs: [
        "Pour demander « C'est… ? », pas besoin de « est-ce que » : on inverse simplement les mots. It is your café. — « C'est votre café. » Is it your café? — « C'est votre café ? »",
        "Réponse courte : Yes, it is. — « Oui. » No, it isn't. — « Non. » Un simple « Yes » marche aussi, mais avec it is la réponse sonne plus polie et complète.",
      ],
      examples: [
        { ru: "Is it closed? — Yes, it is.", en: "C'est fermé ? — Oui." },
        { ru: "Is it your book? — No, it isn't.", en: "C'est ton livre ? — Non." },
      ],
    },
  ],
  tasks: [
    choice("enlo6-t1", "Comment demander « C'est ton thé ? »", [
      ["Is it your tea?", true],
      ["It is your tea?", false],
      ["Your tea is it?", false],
    ], { skill: "grammar" }),
    listen("enlo6-t2", "Écoute. Que fait Murzik ?", "No, thank you.", [
      ["Il refuse poliment.", true],
      ["Il accepte.", false],
      ["Il dit qu'il ne sait pas.", false],
    ]),
    match("enlo6-t3", "Relie les paires.", [
      ["Yes, please.", "Oui, avec plaisir."],
      ["No, thank you.", "Non, merci."],
      ["Maybe.", "Peut-être."],
      ["Of course!", "Bien sûr !"],
    ], { skill: "words" }),
    spell("enlo6-t4", "Écris le mot « oui ».", "yes", ["a"]),
    speak("enlo6-t5", "Do you want to see the café?", "Of course! Let's go!", "Bien sûr ! Allons-y !", { help: "Accepte à voix haute." }),
    choice("enlo6-t6", "Comment demander « Combien ? » pour des tasses ?", [
      ["How many cups?", true],
      ["How are you?", false],
      ["What's your name?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "recipe-book",
    itemName: "Le vieux livre de recettes",
    itemNameRu: "Recipe book",
    ru: "Hooray! The old recipe book!",
    en: "Hourra ! Le vieux livre de recettes !",
    a11y: "Un gros vieux livre de recettes à la couverture bleue usée. Entre les pages, on voit les emplacements vides des feuilles arrachées.",
    image: p("recipe-book"),
    steps: ["Mme Hope tend le livre à Murzik.", "Sur la première page — la recette des scones.", "Mais plus loin, il manque beaucoup de pages.", "« Find the pages, and you'll find your café. » — « Trouve les pages, et tu trouveras ton café. »"],
    bridge: "Mme Hope dresse une liste : où habitent ses vieux amis. Premier sur la liste : Oxford.",
  },
};

const london7: Lesson = {
  id: "en-a1-london-7",
  level: "A1",
  cityId: "en-london",
  number: 7,
  title: "Goodbye! — Au revoir !",
  minutes: 8,
  goals: ["Dire au revoir à un ami et poliment", "Souhaiter une bonne journée et un bon voyage", "Revoir tous les mots de Londres"],
  vocabNote: "Goodbye — « au revoir », Bye — plus simple, « salut ». See you! — « à plus ! » — convient à tout le monde.",
  vocab: [
    v("enlo7-1", "Goodbye!", "Au revoir !", "Murzik salue poliment Mme Hope devant la porte.", "Écouter Goodbye", p("l7-1"), "[goud-baï]"),
    v("enlo7-2", "Bye!", "Salut !", "Murzik fait joyeusement signe à Tom de l'autre côté de la rue.", "Écouter Bye", p("l7-2"), "[baï]"),
    v("enlo7-3", "See you soon!", "À bientôt !", "Mme Hope serre Murzik dans ses bras pour dire au revoir.", "Écouter See you soon", p("l7-3"), "[si iou soune]"),
    v("enlo7-4", "See you tomorrow!", "À demain !", "Le soir, le fils des voisins fait signe depuis la rue. La lune brille dans le ciel.", "Écouter See you tomorrow", p("l7-4"), "[si iou te-mo-rou]"),
    v("enlo7-5", "Have a nice day!", "Bonne journée !", "Par un matin ensoleillé, le facteur sourit et salue Murzik.", "Écouter Have a nice day", p("l7-5"), "[hèv e naïs déi]"),
    v("enlo7-6", "You too!", "Vous aussi ! / Toi aussi !", "Murzik répond avec un grand sourire et un signe de la patte.", "Écouter You too", p("l7-6"), "[iou tou]"),
    v("enlo7-7", "Have a good trip!", "Bon voyage !", "Mme Hope agite un mouchoir, Murzik porte sa petite valise.", "Écouter Have a good trip", p("l7-7"), "[hèv e goud trip]"),
  ],
  letters: [
    letter("ee", "un « i » long", "see", "voir", "see — [si], meet — [mite]."),
    letter("oo", "un « ou » long ou bref", "soon", "bientôt", "soon — [soune], good — [goud]."),
  ],
  dialogue: {
    title: "Les adieux",
    note: "Dear — « mon cher, ma chère » : ainsi parlent avec affection les Anglais âgés. Page — un vrai ami : comme en français, « page » (d'un livre).",
    lines: [
      line("murzik", "Mrs Hope, we're going to Oxford tomorrow!", "Mme Hope, demain nous allons à Oxford !"),
      line("hope", "To Oxford! My friend's granddaughter Priya is there. She has a page from my book.", "À Oxford ! Là-bas vit Priya, la petite-fille de mon amie. Elle a une page de mon livre."),
      line("hope", "And this bell is for you. It's from my café door.", "Et cette clochette est pour toi. Elle vient de la porte de mon café."),
      line("murzik", "Thank you very much!", "Merci beaucoup !"),
      line("hope", "You're welcome, dear. Have a good trip!", "De rien, mon cher. Bon voyage !"),
      line("murzik", "Goodbye, Mrs Hope! See you soon!", "Au revoir, Mme Hope ! À bientôt !"),
    ],
    gist: choice("enlo7-d1", "Qu'offre Mme Hope ?", [
      ["La clochette de la porte du café.", true],
      ["Une tasse à thé.", false],
      ["Une carte postale.", false],
    ]),
  },
  grammar: [
    {
      title: "Comment dire au revoir",
      paragraphs: [
        "Goodbye! — « au revoir » (à tout le monde). Bye! — « salut ! » (entre amis). See you! — « à plus ! », et on peut préciser quand : See you tomorrow! « à demain ! », See you soon! « à bientôt ! »",
        "Au souhait Have a nice day! (« bonne journée ! ») on répond You too! — « vous aussi ! »",
      ],
      examples: [
        { ru: "Bye, Tom! See you tomorrow!", en: "Salut, Tom ! À demain !" },
        { ru: "Have a nice day! — You too!", en: "Bonne journée ! — Vous aussi !" },
      ],
    },
  ],
  tasks: [
    listen("enlo7-t1", "Examen d'écoute. Que dit Mme Hope ?", "My friend is in Oxford. Have a good trip! See you soon!", [
      ["Son amie est à Oxford, elle souhaite bon voyage.", true],
      ["Son amie est à Londres, le café est ouvert.", false],
      ["Elle va à Oxford demain.", false],
    ]),
    choice("enlo7-t2", "On te dit : Have a nice day! Que répondre ?", [
      ["You too!", true],
      ["You're welcome.", false],
      ["Of course!", false],
    ], { skill: "words" }),
    fill("enlo7-t3", "Complète : « À demain ! »", "See you", "!", "tomorrow", ["tomorrow", "soon", "day"], { skill: "grammar" }),
    missing("enlo7-t4", "Quelle lettre manque ? (« À bientôt ! »)", "See you so", "n!", "o", ["o", "u", "a"]),
    speak("enlo7-t5", "Have a nice day!", "You too!", "Vous aussi !", { help: "Réponds à voix haute." }),
    script("enlo7-t6", "Souviens-toi de tout Londres. Termine la conversation avec Mme Hope.", [
      { speaker: "Mme Hope", text: "Good morning! How are you?" },
      { speaker: "Toi", answer: "I'm fine, thanks. And you?", options: ["I'm fine, thanks. And you?", "I don't know.", "Goodbye!"] },
      { speaker: "Mme Hope", text: "Tea?" },
      { speaker: "Toi", answer: "Yes, please!", options: ["Yes, please!", "Sorry!", "What's your name?"] },
      { speaker: "Mme Hope", text: "Have a good trip!" },
      { speaker: "Toi", answer: "Thank you! Goodbye!", options: ["Thank you! Goodbye!", "You're welcome!", "Nice to meet you."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bell",
    itemName: "Clochette de la porte du café",
    itemNameRu: "Café bell",
    ru: "Hooray! The café bell!",
    en: "Hourra ! La clochette du café !",
    a11y: "Murzik tient dans ses pattes une vieille clochette en laiton montée sur un crochet courbé — comme celles qu'on accroche au-dessus de la porte d'un café.",
    image: p("bell"),
    steps: ["Mme Hope décroche la clochette de la vieille porte bleue.", "Ding ! — sonne-t-elle.", "« For your café, one day. » — « Pour ton café. Un jour. »", "Murzik la range soigneusement dans la valise."],
    bridge: "La valise est prête. Demain — Oxford !",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre chez Mme Hope",
    nameRu: "Murzik's room in London",
    image: p("home"),
    a11y: "Une petite chambre vide sous les toits, chez Mme Hope : fenêtre à cadre blanc, derrière laquelle on voit les toits et les cheminées de Londres. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "bell",
  welcomeRu: "Hello, London!",
  welcomeEn: "Bonjour, Londres !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom sortent du train avec leurs valises dans une grande gare londonienne au toit de verre. Une dame âgée en chapeau les accueille en faisant signe de la main.",
  departureImage: p("departure"),
  departureA11y: "Mme Hope fait un signe d'adieu devant la porte bleue de son vieux café.",
  finale: [
    {
      image: p("book"),
      a11y: "Gros plan : le vieux livre de recettes ouvert. Sur la première page, la recette des scones et une petite note manuscrite dans la marge. Plus loin, les emplacements vides des pages arrachées.",
      lines: [
        { en: "Avant de dormir, Murzik feuillette le livre de Mme Hope. Dans la marge de la première page — une note manuscrite :" },
        { ru: "In my café, it always smelled of cinnamon.", en: "Dans mon café, ça sentait toujours la cannelle." },
        { en: "Combien d'autres notes comme celle-ci sur les pages perdues ?" },
      ],
    },
    {
      image: p("bell"),
      a11y: "Murzik fait le tour de sa chambre chez Mme Hope, celle qu'il a meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre londonienne. Tom la photographie pour son magazine." },
        { en: "Pour le futur café, il emporte la clochette de la porte bleue." },
        { en: "Le livre de recettes se glisse dans la poche de la valise." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "London complete!", en: "Londres est terminée !" },
        { en: "7 / 7 leçons" },
        { ru: "Your first city!", en: "Ta première ville !" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Mme Hope fait un signe d'adieu devant la porte bleue.",
      lines: [
        { ru: "Goodbye, Mrs Hope!", en: "Au revoir, Mme Hope !" },
        { ru: "Next stop: Oxford!", en: "Prochain arrêt : Oxford !" },
      ],
    },
    {
      image: p("train"),
      a11y: "Un train rouge traverse les champs verts de la campagne anglaise.",
      lines: [{ ru: "London → Oxford", en: "Londres → Oxford" }],
    },
    {
      image: pic("en/oxford/arrival"),
      a11y: "Murzik et Tom à Oxford : vieux bâtiments en pierre aux tourelles, des étudiants à vélo.",
      lines: [
        { ru: "Hello, Oxford!", en: "Bonjour, Oxford !" },
        { ru: "A new city. New words. New friends.", en: "Une nouvelle ville. De nouveaux mots. De nouveaux amis." },
      ],
    },
  ],
};

export const enLondonFr = {
  id: "en-london",
  name: "Londres",
  nameEn: "London",
  lessons: [london1, london2, london3, london4, london5, london6, london7],
  story,
};
