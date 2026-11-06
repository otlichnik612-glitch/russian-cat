import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, fill, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Istanbul · “The European side” · a taxi to Balat, numbers, a room in Balat, the ferry, the weather, the phone, the way to the Galata Tower. French version. */

const p = (name: string) => pic(`tr/istanbul/${name}`);

const istanbul1: Lesson = {
  id: "tr-a1-istanbul-1",
  level: "A1",
  cityId: "tr-istanbul",
  number: 1,
  title: "Emménager à Balat",
  minutes: 7,
  goals: ["Prendre un taxi et donner une adresse", "Dire que quelque chose est à toi", "Demander au chauffeur de s'arrêter"],
  vocabNote: "Les chauffeurs de taxi et les passagers se vouvoient : Bu sizin bavulunuz mu? — C'est votre valise ? À « Hoş geldiniz! » (Bienvenue !), on répond d'habitude « Hoş bulduk! ».",
  vocab: [
    v("tris1-1", "Taksi! — Buyurun.", "Taxi ! — Montez, je vous en prie.", "Murzik lève la patte sur le quai, et un taxi jaune s'arrête.", "Écouter Taksi! Buyurun", p("l1-1"), "[taksi — bouyourounn]"),
    v("tris1-2", "Balat'a, lütfen.", "À Balat, s'il vous plaît.", "Murzik montre au chauffeur une carte postale de maisons colorées.", "Écouter Balat'a, lütfen", p("l1-2"), "[balata, lutfèn]"),
    v("tris1-3", "Bu sizin bavulunuz mu? — Evet, benim.", "C'est votre valise ? — Oui, c'est la mienne.", "Le chauffeur montre la valise, et Murzik pose fièrement la patte dessus.", "Écouter Bu sizin bavulunuz mu. Evet, benim", p("l1-3"), "[bou sizinn bavoulounouz mou — évèt, bénimm]"),
    v("tris1-4", "Bu senin çantan mı?", "C'est ton sac ?", "Murzik tend à Tom son sac photo.", "Écouter Bu senin çantan mı", p("l1-4"), "[bou séninn tchanntann meu]"),
    v("tris1-5", "köprü", "pont", "Le taxi traverse un long pont au-dessus de la baie, où des pêcheurs tiennent leurs cannes.", "Écouter köprü", p("l1-5"), "[keupru]"),
    v("tris1-6", "Burada durun, lütfen.", "Arrêtez-vous ici, s'il vous plaît.", "Le taxi s'arrête devant une maison colorée, dans une petite rue en pente.", "Écouter Burada durun, lütfen", p("l1-6"), "[bourada dourounn, lutfèn]"),
    v("tris1-7", "Hoş geldiniz! — Hoş bulduk!", "Bienvenue ! — Merci !", "Le chauffeur fait signe par la fenêtre en souriant ; Murzik et Tom sont debout avec leurs valises.", "Écouter Hoş geldiniz! Hoş bulduk", p("l1-7"), "[hoch guèldiniz — hoch bouldouk]"),
  ],
  dialogue: {
    title: "Le taxi",
    note: "Hoş bulduk! est la réponse habituelle à « Bienvenue ! ». Mot à mot, ça veut dire « nous l'avons trouvé bon ».",
    lines: [
      line("murzik", "Taksi!", "Taxi !"),
      line("driver", "Buyurun. Nereye?", "Montez, je vous en prie. Où allez-vous ?"),
      line("murzik", "Balat'a, lütfen.", "À Balat, s'il vous plaît."),
      line("driver", "Bu sizin bavulunuz mu?", "C'est votre valise ?"),
      line("murzik", "Evet, benim. Tom, bu senin çantan mı?", "Oui, c'est la mienne. Tom, c'est ton sac ?"),
      line("tom", "Evet, benim! Teşekkürler.", "Oui, c'est le mien ! Merci."),
      line("driver", "Bakın, köprü! Balat'a hoş geldiniz!", "Regardez, le pont ! Bienvenue à Balat !"),
      line("murzik", "Hoş bulduk! Burada durun, lütfen.", "Merci ! Arrêtez-vous ici, s'il vous plaît."),
    ],
    gist: choice("tris1-d1", "Où vont Murzik et Tom ?", [
      ["À Balat.", true],
      ["À l'aéroport.", false],
      ["À Kadıköy.", false],
    ]),
  },
  grammar: [
    {
      title: "Mon, ton",
      paragraphs: [
        "« Mon », c'est benim, « ton », c'est senin, « votre » (poli), c'est sizin. Ces mots servent aussi de réponse courte à « à qui ? » : Evet, benim. — Oui, c'est le mien.",
        "Contrairement au français, l'objet lui-même prend aussi une terminaison : bavul-um — ma valise, bavul-un — ta valise, bavul-unuz — votre valise. On verra ça en détail plus tard ; pour l'instant, apprends les questions comme des phrases toutes faites : Bu sizin bavulunuz mu? Bu senin çantan mı?",
      ],
      examples: [
        { ru: "Bu senin pasaportun mu? — Evet, benim.", en: "C'est ton passeport ? — Oui, c'est le mien." },
        { ru: "Bu sizin bavulunuz mu? — Hayır.", en: "C'est votre valise ? — Non." },
      ],
    },
  ],
  tasks: [
    listen("tris1-t1", "Écoute. Où va le passager ?", "Balat'a, lütfen.", [
      ["À Balat.", true],
      ["Au quai.", false],
      ["Au café.", false],
    ]),
    match("tris1-t2", "Associe les paires.", [
      ["taksi", "taxi"],
      ["köprü", "pont"],
      ["çanta", "sac"],
      ["bavul", "valise"],
    ], { skill: "words" }),
    choice("tris1-t3", "On te demande : Bu sizin bavulunuz mu? Comment dit-on brièvement « Oui, c'est la mienne » ?", [
      ["Evet, benim.", true],
      ["Evet, sizin.", false],
      ["Evet, senin.", false],
    ], { skill: "grammar" }),
    missing("tris1-t4", "Quelle lettre manque ? (« pont »)", "k", "prü", "ö", ["ö", "o", "ü"]),
    speak("tris1-t5", "Buyurun. Nereye?", "Balat'a, lütfen.", "À Balat, s'il vous plaît.", { help: "Dis à voix haute où tu veux aller." }),
    choice("tris1-t6", "Le chauffeur de taxi parle très vite. Que dis-tu ?", [
      ["Tekrar eder misiniz?", true],
      ["Tekrar eder misin?", false],
      ["Güle güle!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "harita",
    itemName: "Plan d'Istanbul",
    itemNameRu: "Harita",
    ru: "Yaşasın! Bir İstanbul haritası!",
    en: "Hourra ! Un plan d'Istanbul !",
    a11y: "Murzik déplie un grand plan d'Istanbul avec le Bosphore et des ferries. Tom montre le quartier de Balat.",
    image: p("harita"),
    steps: ["Le chauffeur de taxi donne à Murzik un plan d'Istanbul.", "Ils le déplient.", "Voici Kadıköy, voici le Bosphore, et voici Balat !", "C'est là que se trouve leur nouvelle maison."],
    bridge: "Pendant que Tom paie le taxi, Murzik compte tout ce qu'il voit dans la rue.",
  },
};

const istanbul2: Lesson = {
  id: "tr-a1-istanbul-2",
  level: "A1",
  cityId: "tr-istanbul",
  number: 2,
  title: "Les nombres de 0 à 20",
  minutes: 7,
  goals: ["Compter de 0 à 20", "Demander « combien ? »", "Donner un numéro de maison ou de chambre"],
  vocabNote: "Les nombres turcs sont très logiques : 11, c'est on bir (« dix un »), 15, c'est on beş (« dix cinq »). Pas de mots spéciaux comme « onze » ou « douze » !",
  vocab: [
    v("tris2-1", "bir, iki, üç, dört, beş", "un, deux, trois, quatre, cinq", "Murzik compte jusqu'à cinq sur sa patte.", "Écouter bir, iki, üç, dört, beş", p("l2-1"), "[bir, iki, utch, deurt, bèch]"),
    v("tris2-2", "altı, yedi, sekiz, dokuz, on", "six, sept, huit, neuf, dix", "Dix mouettes volent au-dessus de la Corne d'Or, chacune avec un petit numéro.", "Écouter altı, yedi, sekiz, dokuz, on", p("l2-2"), "[alteu, yédi, sékiz, dokouz, onn]"),
    v("tris2-3", "on bir, on iki, on üç, on dört, on beş", "onze, douze, treize, quatorze, quinze", "Quinze ferries blancs sont alignés le long du quai.", "Écouter on bir, on iki, on üç, on dört, on beş", p("l2-3"), "[onn bir, onn iki, onn utch, onn deurt, onn bèch]"),
    v("tris2-4", "on altı, on yedi, on sekiz, on dokuz, yirmi", "seize, dix-sept, dix-huit, dix-neuf, vingt", "Le plateau d'un vendeur porte exactement vingt simits.", "Écouter on altı, on yedi, on sekiz, on dokuz, yirmi", p("l2-4"), "[onn alteu, onn yédi, onn sékiz, onn dokouz, yirmi]"),
    v("tris2-5", "sıfır", "zéro", "Murzik tient un panier vide et dessine un zéro bien rond avec sa patte.", "Écouter sıfır", p("l2-5"), "[seufeur]"),
    v("tris2-6", "Kaç tane?", "Combien ?", "Tom montre une volée de mouettes et écarte les mains d'un air interrogateur.", "Écouter Kaç tane", p("l2-6"), "[katch tané]"),
    v("tris2-7", "numara", "numéro", "Une plaque bleue avec le numéro dix-neuf est accrochée à une maison colorée.", "Écouter numara", p("l2-7"), "[noumara]"),
  ],
  dialogue: {
    title: "Les mouettes au-dessus de la Corne d'Or",
    note: "Kemal Bey veut dire « Monsieur Kemal ». Bey se met après le prénom d'un homme, et Hanım après celui d'une femme.",
    lines: [
      line("tom", "Murzik, bak! Martılar!", "Murzik, regarde ! Des mouettes !"),
      line("murzik", "Bir! İki, üç!", "Une ! Deux, trois !"),
      line("tom", "Dört, beş…", "Quatre, cinq…"),
      line("murzik", "Altı, yedi!", "Six, sept !"),
      line("tom", "Kaç tane? Yedi mi?", "Combien ? Sept ?"),
      line("murzik", "Evet, yedi martı!", "Oui, sept mouettes !"),
      line("tom", "İşte Kemal Bey'in evi. Numarası on dokuz.", "Voici la maison de Kemal Bey. C'est le numéro dix-neuf."),
      line("murzik", "Ya oda?", "Et la chambre ?"),
      line("tom", "Oda numarası iki.", "Chambre numéro deux."),
    ],
    gist: choice("tris2-d1", "Combien de mouettes Murzik compte-t-il ?", [
      ["Sept.", true],
      ["Trois.", false],
      ["Dix.", false],
    ]),
  },
  grammar: [
    {
      title: "Kaç ? et les nombres",
      paragraphs: [
        "Kaç? veut dire « combien ? ». On peut répondre juste avec un nombre : Kaç tane? — Yedi.",
        "De 11 à 19, on dit « dix et encore » : on bir (11), on beş (15). 20, c'est yirmi.",
        "Contrairement au français, le nom après un nombre reste au singulier : yedi martı — sept mouettes (mot à mot « sept mouette »), et pas martılar.",
      ],
      examples: [
        { ru: "Kaç tane? — Beş.", en: "Combien ? — Cinq." },
        { ru: "Üç vapur, on martı.", en: "Trois ferries, dix mouettes." },
      ],
    },
  ],
  tasks: [
    listen("tris2-t1", "Écoute. Quel est ce nombre ?", "sekiz", [
      ["8", true],
      ["7", false],
      ["3", false],
    ]),
    match("tris2-t2", "Associe les nombres.", [
      ["dört", "4"],
      ["dokuz", "9"],
      ["iki", "2"],
      ["on", "10"],
    ], { skill: "words" }),
    choice("tris2-t3", "Comment dit-on « cinq mouettes » ?", [
      ["beş martı", true],
      ["beş martılar", false],
      ["beşler martı", false],
    ], { skill: "grammar" }),
    missing("tris2-t4", "Quelle lettre manque ? (« trois »)", "", "ç", "ü", ["ü", "u", "ö"]),
    speak("tris2-t5", "Birden ona kadar say!", "Bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, on.", "Un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.", {
      help: "Compte à voix haute de un à dix. Prends ton temps.",
    }),
    choice("tris2-t6", "Que veut dire Hoş geldiniz ?", [
      ["Bienvenue !", true],
      ["Où est la sortie ?", false],
      ["Bon voyage !", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "perde",
    itemName: "Rideau",
    itemNameRu: "Perde",
    ru: "Yaşasın! Yeni bir perde!",
    en: "Hourra ! Un nouveau rideau !",
    a11y: "Un rideau léger à petites fleurs bleues pend à la fenêtre de la chambre de Balat. Dehors, des maisons colorées.",
    image: p("perde"),
    steps: ["Une voisine d'en face leur offre un rideau à petites fleurs bleues.", "«Yeni evinize!» — « Pour votre nouvelle maison ! »", "Murzik le monte jusqu'à la porte.", "Bientôt, il sera accroché à la fenêtre."],
    bridge: "Le propriétaire de la maison ouvre la porte : « Hoş geldiniz! »",
  },
};

const istanbul3: Lesson = {
  id: "tr-a1-istanbul-3",
  level: "A1",
  cityId: "tr-istanbul",
  number: 3,
  title: "Une chambre à Balat",
  minutes: 7,
  goals: ["Nommer la chambre et les objets qui s'y trouvent", "Dire ce qu'il y a et ce qu'il n'y a pas : var et yok", "Demander où est la salle de bains"],
  vocabNote: "Burası veut dire « ici, cet endroit ». On l'utilise pour montrer une pièce ou une maison : Burası mutfak. — Ici, c'est la cuisine.",
  vocab: [
    v("tris3-1", "ev", "maison", "Une maison étroite et colorée de Balat : jaune, aux volets bleus.", "Écouter ev", p("l3-1"), "[èv]"),
    v("tris3-2", "oda", "chambre", "Une petite chambre claire au plancher en bois.", "Écouter oda", p("l3-2"), "[oda]"),
    v("tris3-3", "Burası senin odan.", "Voici ta chambre.", "Kemal Bey, un homme âgé à moustache, ouvre la porte et montre la chambre à Murzik en souriant.", "Écouter Burası senin odan", p("l3-3"), "[bourasseu séninn odann]"),
    v("tris3-4", "anahtar", "clé", "Kemal Bey tend à Murzik une vieille clé en fer.", "Écouter anahtar", p("l3-4"), "[anahtar]"),
    v("tris3-5", "pencere", "fenêtre", "Une grande fenêtre ; derrière, les toits de Balat et la Corne d'Or.", "Écouter pencere", p("l3-5"), "[pèndjéré]"),
    v("tris3-6", "Banyo nerede?", "Où est la salle de bains ?", "Murzik, une serviette sur l'épaule, regarde le couloir d'un air interrogateur.", "Écouter Banyo nerede", p("l3-6"), "[banyo nérédé]"),
    v("tris3-7", "Ne güzel!", "Comme c'est beau !", "Murzik presse ses pattes sur sa poitrine et regarde par la fenêtre, ravi.", "Écouter Ne güzel", p("l3-7"), "[né guzèl]"),
  ],
  dialogue: {
    title: "La maison de Balat",
    note: "Odada veut dire « dans la chambre » : oda + da. La terminaison -da / -de veut dire « dans, à » : evde — à la maison, Paris'te — à Paris.",
    lines: [
      line("kemal", "Hoş geldiniz! Ben Kemal. Burası benim evim.", "Bienvenue ! Je suis Kemal. C'est ma maison."),
      line("tom", "Hoş bulduk! Memnun oldum.", "Merci ! Enchanté."),
      line("kemal", "Murzik, burası senin odan. Bu da anahtar.", "Murzik, voici ta chambre. Et voici la clé."),
      line("murzik", "Teşekkür ederim! Ne güzel! Büyük bir pencere var!", "Merci ! Comme c'est beau ! Il y a une grande fenêtre !"),
      line("kemal", "Odada dolap var ama yatak yok. Yatak yarın geliyor.", "Il y a une armoire dans la chambre, mais pas de lit. Le lit arrive demain."),
      line("murzik", "Önemli değil! Banyo nerede?", "Pas de problème ! Où est la salle de bains ?"),
      line("kemal", "Banyo orada, sağda.", "La salle de bains est là-bas, à droite."),
    ],
    gist: choice("tris3-d1", "Qu'est-ce qui manque encore dans la chambre ?", [
      ["Un lit.", true],
      ["Une fenêtre.", false],
      ["Une clé.", false],
    ]),
  },
  grammar: [
    {
      title: "Var et yok — il y a, il n'y a pas",
      paragraphs: [
        "Var veut dire « il y a », yok veut dire « il n'y a pas ». Ils se mettent à la fin de la phrase : Odada pencere var. — Il y a une fenêtre dans la chambre (mot à mot « dans-la-chambre fenêtre il-y-a »).",
        "Question : Banyo var mı? — Il y a une salle de bains ? Réponse : Evet, var. / Hayır, yok.",
      ],
      examples: [
        { ru: "Odada büyük bir pencere var.", en: "Il y a une grande fenêtre dans la chambre." },
        { ru: "Dolap var mı? — Hayır, yok.", en: "Il y a une armoire ? — Non, il n'y en a pas." },
      ],
    },
  ],
  tasks: [
    fill("tris3-t1", "Complète avec le bon mot : « Il n'y a pas de lit dans la chambre ».", "Odada yatak", ".", "yok", ["yok", "var", "değil"], { skill: "grammar" }),
    listen("tris3-t2", "Écoute. Qu'y a-t-il dans la chambre ?", "Odada büyük bir pencere var.", [
      ["Une grande fenêtre.", true],
      ["Un grand lit.", false],
      ["Une armoire.", false],
    ]),
    match("tris3-t3", "Associe les paires.", [
      ["ev", "maison"],
      ["oda", "chambre"],
      ["anahtar", "clé"],
      ["pencere", "fenêtre"],
    ], { skill: "words" }),
    spell("tris3-t4", "Épelle le mot « fenêtre ».", "pencere"),
    speak("tris3-t5", "Odanda ne var?", "Odamda bir yatak ve bir pencere var.", "Dans ma chambre, il y a un lit et une fenêtre.", {
      help: "Dis à voix haute ce qu'il y a dans ta chambre.",
    }),
    choice("tris3-t6", "Comment demander au chauffeur de taxi de s'arrêter ici ?", [
      ["Burada durun, lütfen.", true],
      ["Balat'a, lütfen.", false],
      ["Nerelisin?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yatak",
    itemName: "Lit",
    itemNameRu: "Yatak",
    ru: "Yaşasın! Yeni bir yatak!",
    en: "Hourra ! Un nouveau lit !",
    a11y: "Un petit lit avec un couvre-lit brodé est dans la chambre. Murzik saute dessus de joie.",
    image: p("yatak"),
    steps: ["Le matin, le lit arrive.", "Kemal Bey et Tom le mettent près de la fenêtre.", "Murzik saute sur le couvre-lit.", "Qu'il est doux !"],
    bridge: "Tom appelle : « Murzik, on va voir la ville ! »",
  },
};

const istanbul4: Lesson = {
  id: "tr-a1-istanbul-4",
  level: "A1",
  cityId: "tr-istanbul",
  number: 4,
  title: "Ferry ou métro ?",
  minutes: 7,
  goals: ["Nommer les moyens de transport", "Dire comment on se déplace : -la / -le", "Acheter un ticket et trouver l'arrêt"],
  vocabNote: "Durak veut dire « arrêt » — de bus ou de tram : Durak nerede? — Où est l'arrêt ?",
  vocab: [
    v("tris4-1", "vapur", "ferry", "Un ferry blanc d'Istanbul vogue sur le Bosphore, suivi de mouettes.", "Écouter vapur", p("l4-1"), "[vapour]"),
    v("tris4-2", "metro", "métro", "Une entrée de métro avec un grand M.", "Écouter metro", p("l4-2"), "[mètro]"),
    v("tris4-3", "tramvay", "tram", "Un vieux tram rouge roule dans une rue piétonne.", "Écouter tramvay", p("l4-3"), "[trammvay]"),
    v("tris4-4", "otobüs", "bus", "Un bus de ville s'arrête à un arrêt.", "Écouter otobüs", p("l4-4"), "[otobus]"),
    v("tris4-5", "Vapurla gidelim!", "Allons-y en ferry !", "Murzik tire joyeusement Tom par la manche vers le quai.", "Écouter Vapurla gidelim", p("l4-5"), "[vapourla guidélimm]"),
    v("tris4-6", "Bir bilet, lütfen.", "Un ticket, s'il vous plaît.", "Murzik tend une pièce par le guichet.", "Écouter Bir bilet, lütfen", p("l4-6"), "[bir bilèt, lutfèn]"),
    v("tris4-7", "Durak nerede?", "Où est l'arrêt ?", "Tom regarde autour de lui dans la rue, un plan à la main.", "Écouter Durak nerede", p("l4-7"), "[dourak nérédé]"),
  ],
  dialogue: {
    title: "Comment on y va ?",
    note: "Çünkü veut dire « parce que ». On l'apprendra plus tard — pour l'instant, écoute simplement.",
    lines: [
      line("tom", "Murzik, Eminönü'ne nasıl gidelim? Metroyla mı, otobüsle mi?", "Murzik, comment on va à Eminönü ? En métro ou en bus ?"),
      line("murzik", "Vapurla gidelim!", "Allons-y en ferry !"),
      line("tom", "Vapurla mı? Neden?", "En ferry ? Pourquoi ?"),
      line("murzik", "Çünkü vapurda martılar var!", "Parce qu'il y a des mouettes sur le ferry !"),
      line("tom", "İki bilet, lütfen.", "Deux tickets, s'il vous plaît."),
      line("cashier", "Buyurun. Vapur on dakika sonra.", "Voilà. Le ferry part dans dix minutes."),
      line("murzik", "Hadi, Tom!", "Allez, Tom !"),
    ],
    gist: choice("tris4-d1", "Comment Tom et Murzik se déplacent-ils ?", [
      ["En ferry.", true],
      ["En métro.", false],
      ["En bus.", false],
    ]),
  },
  grammar: [
    {
      title: "Avec quoi : -la / -le",
      paragraphs: [
        "En français, on dit « en ferry », « en bus » ; le turc ajoute la terminaison -la ou -le : vapur-la — en ferry, otobüs-le — en bus. Après a, ı, o, u, on met -la ; après e, i, ö, ü, on met -le.",
        "Si le mot finit par une voyelle, on ajoute d'abord un y : metro-yla — en métro, araba-yla — en voiture.",
      ],
      examples: [
        { ru: "Otobüsle gidelim.", en: "Allons-y en bus." },
        { ru: "Metroyla gidiyorum.", en: "J'y vais en métro." },
      ],
    },
  ],
  tasks: [
    choice("tris4-t1", "Comment dit-on « en tram » ?", [
      ["tramvayla", true],
      ["tramvayle", false],
      ["tramvayda", false],
    ], { skill: "grammar" }),
    listen("tris4-t2", "Écoute. Combien de tickets demande-t-on ?", "İki bilet, lütfen.", [
      ["Deux.", true],
      ["Un.", false],
      ["Trois.", false],
    ]),
    match("tris4-t3", "Associe les paires.", [
      ["vapur", "ferry"],
      ["otobüs", "bus"],
      ["bilet", "ticket"],
      ["durak", "arrêt"],
    ], { skill: "words" }),
    missing("tris4-t4", "Quelle lettre manque ? (« bus »)", "otob", "s", "ü", ["ü", "u", "ı"]),
    speak("tris4-t5", "Nasıl gidelim?", "Vapurla gidelim!", "Allons-y en ferry !", { help: "Propose à voix haute un moyen de transport." }),
    listen("tris4-t6", "Souviens-toi des nombres. Quel nombre entends-tu ?", "on beş", [
      ["15", true],
      ["5", false],
      ["50", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "vapur",
    itemName: "Maquette de ferry",
    itemNameRu: "Vapur",
    ru: "Yaşasın! Küçük bir vapur!",
    en: "Hourra ! Un petit ferry !",
    a11y: "Une petite maquette en bois d'un ferry blanc d'Istanbul est posée sur le rebord de la fenêtre.",
    image: p("vapur"),
    steps: ["Sur le quai, on vend des ferries miniatures.", "Tom en achète un pour Murzik.", "Murzik le pose sur le rebord de la fenêtre.", "Maintenant, un ferry navigue aussi à la maison !"],
    bridge: "Sur le chemin du retour, il se met à pleuvoir. Et à verse !",
  },
};

const istanbul5: Lesson = {
  id: "tr-a1-istanbul-5",
  level: "A1",
  cityId: "tr-istanbul",
  number: 5,
  title: "Encore la pluie !",
  minutes: 7,
  goals: ["Demander le temps qu'il fait", "Dire : il pleut, il fait froid, il fait chaud, il y a du vent", "Se réjouir du soleil"],
  vocabNote: "Rüzgâr veut dire « vent ». Le petit chapeau sur le â adoucit le g qui le précède : [ruzguyar].",
  vocab: [
    v("tris5-1", "Hava nasıl?", "Quel temps fait-il ?", "Tom regarde le ciel gris au-dessus du Bosphore.", "Écouter Hava nasıl", p("l5-1"), "[hava nasseul]"),
    v("tris5-2", "Yağmur yağıyor.", "Il pleut.", "La pluie tombe à verse sur le ferry, les gouttes tambourinent sur le pont.", "Écouter Yağmur yağıyor", p("l5-2"), "[yamour yaeuyor]"),
    v("tris5-3", "Hava güzel.", "Il fait beau.", "Une journée ensoleillée, un ciel bleu au-dessus des mosquées et des ferries.", "Écouter Hava güzel", p("l5-3"), "[hava guzèl]"),
    v("tris5-4", "Soğuk.", "Il fait froid.", "Murzik frissonne et s'enroule dans son écharpe.", "Écouter Soğuk", p("l5-4"), "[soouk]"),
    v("tris5-5", "Sıcak.", "Il fait chaud.", "Murzik s'évente de la patte en plein soleil.", "Écouter Sıcak", p("l5-5"), "[seudjak]"),
    v("tris5-6", "Rüzgâr var.", "Il y a du vent.", "Le vent tire sur l'écharpe de Murzik et sur les chapeaux des passants.", "Écouter Rüzgâr var", p("l5-6"), "[ruzgar var]"),
    v("tris5-7", "Güneş açtı!", "Le soleil est sorti !", "Le soleil sort des nuages, un arc-en-ciel au-dessus du Bosphore.", "Écouter Güneş açtı", p("l5-7"), "[gunèch atchteu]"),
  ],
  dialogue: {
    title: "La pluie sur le ferry",
    note: "Le simit est un pain en couronne au sésame, vendu à chaque coin de rue. Et en Turquie, le thé se boit dans de petits verres — même quand il fait chaud dehors.",
    lines: [
      line("tom", "Hava nasıl? Ah, yağmur yağıyor!", "Quel temps fait-il ? Oh, il pleut !"),
      line("murzik", "Ve rüzgâr var. Soğuk!", "Et il y a du vent. Il fait froid !"),
      line("simitci", "Simit! Sıcak çay! Buyurun!", "Simit ! Thé chaud ! Voilà !"),
      line("tom", "İki çay ve bir simit, lütfen.", "Deux thés et un simit, s'il vous plaît."),
      line("simitci", "Buyurun. Hava kötü ama çay sıcak!", "Voilà. Il fait mauvais, mais le thé est chaud !"),
      line("murzik", "Bakın! Güneş açtı!", "Regarde ! Le soleil est sorti !"),
      line("simitci", "İstanbul böyle: yağmur, güneş, yağmur!", "C'est ça, Istanbul : pluie, soleil, pluie !"),
    ],
    gist: choice("tris5-d1", "Quel temps fait-il au début ?", [
      ["Il pleut et il y a du vent.", true],
      ["Il fait chaud et il y a du soleil.", false],
      ["Il neige.", false],
    ]),
  },
  grammar: [
    {
      title: "Hava + un mot",
      paragraphs: [
        "Parler du temps, c'est facile : Hava güzel. Hava soğuk. Mot à mot « temps beau », « temps froid » — pas besoin du mot « est ».",
        "En turc, la pluie « pleut » : Yağmur yağıyor — mot à mot « la pluie est en train de pleuvoir ». La terminaison -iyor veut dire « en ce moment, en train de ».",
      ],
      examples: [
        { ru: "Hava çok sıcak.", en: "Il fait très chaud." },
        { ru: "Bugün yağmur yağıyor.", en: "Aujourd'hui, il pleut." },
      ],
    },
  ],
  tasks: [
    listen("tris5-t1", "Écoute. Quel temps fait-il ?", "Rüzgâr var ve soğuk.", [
      ["Il y a du vent et il fait froid.", true],
      ["Il fait doux et il y a du soleil.", false],
      ["Il pleut.", false],
    ]),
    choice("tris5-t2", "Que veut dire Sıcak ?", [
      ["Il fait chaud.", true],
      ["Il fait froid.", false],
      ["Il y a du vent.", false],
    ], { skill: "words" }),
    choice("tris5-t3", "Comment dit-on « Il fait beau » ?", [
      ["Hava güzel.", true],
      ["Hava var güzel.", false],
      ["Güzel hava yok.", false],
    ], { skill: "grammar" }),
    missing("tris5-t4", "Quelle lettre manque ? (« pluie »)", "Ya", "mur", "ğ", ["ğ", "g", "h"]),
    speak("tris5-t5", "Bugün hava nasıl?", "Bugün hava güzel.", "Aujourd'hui, il fait beau.", { help: "Dis à voix haute quel temps il fait chez toi aujourd'hui." }),
    choice("tris5-t6", "Tu veux y aller en métro. Que dis-tu ?", [
      ["Metroyla gidelim!", true],
      ["Metroda gidelim!", false],
      ["Metro gidelim!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "semsiye",
    itemName: "Parapluie rouge",
    itemNameRu: "Şemsiye",
    ru: "Yaşasın! Kırmızı bir şemsiye!",
    en: "Hourra ! Un parapluie rouge !",
    a11y: "Murzik tient un petit parapluie rouge au-dessus de sa tête. La pluie coule des bords ; derrière lui, le Bosphore.",
    image: p("semsiye"),
    steps: ["Le vendeur de simits sort un parapluie de sous son plateau.", "« Al, hediye! » — « Tiens, un cadeau ! »", "Murzik ouvre le parapluie rouge.", "Maintenant, la pluie, peu importe !"],
    bridge: "De retour à la maison, le téléphone de Murzik sonne. Qui ça peut bien être ?",
  },
};

const istanbul6: Lesson = {
  id: "tr-a1-istanbul-6",
  level: "A1",
  cityId: "tr-istanbul",
  number: 6,
  title: "Appelle-moi !",
  minutes: 7,
  goals: ["Répondre au téléphone et dire qui on est", "Demander un numéro de téléphone", "Demander d'appeler et promettre de rappeler"],
  vocabNote: "Les Turcs disent d'habitude les numéros de téléphone par groupes, mais on peut aussi les dire chiffre par chiffre : sıfır, beş, üç, iki…",
  vocab: [
    v("tris6-1", "Alo?", "Allô ? (au téléphone)", "Murzik tient le combiné d'un vieux téléphone contre son oreille.", "Écouter Alo", p("l6-1"), "[alo]"),
    v("tris6-2", "Kim arıyor?", "Qui est à l'appareil ?", "Murzik, le combiné à la patte, lève les sourcils, surpris.", "Écouter Kim arıyor", p("l6-2"), "[kimm areuyor]"),
    v("tris6-3", "Benim, Tom.", "C'est moi, Tom.", "Tom parle sur son portable dans la rue et fait signe.", "Écouter Benim, Tom", p("l6-3"), "[bénimm, tomm]"),
    v("tris6-4", "Telefon numaran ne?", "C'est quoi, ton numéro de téléphone ?", "Tom tient un bloc-notes et un stylo, prêt à noter le numéro.", "Écouter Telefon numaran ne", p("l6-4"), "[téléfonn noumarann né]"),
    v("tris6-5", "Beni ara!", "Appelle-moi !", "Murzik fait le signe « appelle-moi », la patte contre l'oreille.", "Écouter Beni ara", p("l6-5"), "[béni ara]"),
    v("tris6-6", "Şimdi müsait misin?", "Tu as le temps de parler, là ?", "Tom appelle avec précaution et demande avec un sourire poli.", "Écouter Şimdi müsait misin", p("l6-6"), "[chimmdi mussaït missinn]"),
    v("tris6-7", "Sonra ararım.", "Je te rappelle plus tard.", "Murzik, les pattes pleines de sacs, tient le téléphone avec son épaule.", "Écouter Sonra ararım", p("l6-7"), "[sonnra arareumm]"),
  ],
  dialogue: {
    title: "Un coup de fil",
    note: "Akşam veut dire « ce soir, le soir ». Tamam veut dire « d'accord » — tu l'entendras partout en Turquie.",
    lines: [
      line("murzik", "Alo?", "Allô ?"),
      line("kemal", "Alo, Murzik? Benim, Kemal.", "Allô, Murzik ? C'est moi, Kemal."),
      line("murzik", "Merhaba, Kemal Bey! Nasılsınız?", "Bonjour, Kemal Bey ! Comment allez-vous ?"),
      line("kemal", "İyiyim. Şimdi müsait misin?", "Bien. Tu as le temps de parler, là ?"),
      line("murzik", "Evet, müsaitim.", "Oui, ça va."),
      line("kemal", "Akşam çatıda çay içelim mi? Tom'un telefon numarası ne?", "On prend le thé sur le toit ce soir ? C'est quoi, le numéro de Tom ?"),
      line("murzik", "Sıfır, beş, üç, iki… Sonra Tom sizi arar.", "Zéro, cinq, trois, deux… Tom vous rappellera plus tard."),
      line("kemal", "Tamam. Akşam görüşürüz!", "D'accord. À ce soir !"),
    ],
    gist: choice("tris6-d1", "Qui appelle Murzik ?", [
      ["Kemal Bey.", true],
      ["À Tom.", false],
      ["Ayşe Teyze.", false],
    ]),
  },
  grammar: [
    {
      title: "Ara! et beni",
      paragraphs: [
        "Une demande amicale, c'est juste le verbe nu : ara! — appelle !, gel! — viens ici !, bak! — regarde !",
        "« Me », c'est beni et « te », c'est seni — les formes pour la personne qui subit l'action, comme « me » au lieu de « je » (ben). Donc « Appelle-moi ! », c'est Beni ara! — et pas Ben ara!",
      ],
      examples: [
        { ru: "Beni ara!", en: "Appelle-moi !" },
        { ru: "Sonra seni ararım.", en: "Je t'appelle plus tard." },
      ],
    },
  ],
  tasks: [
    match("tris6-t1", "Associe les paires.", [
      ["Alo?", "Allô ? (au téléphone)"],
      ["Kim arıyor?", "Qui est à l'appareil ?"],
      ["Beni ara!", "Appelle-moi !"],
      ["Sonra ararım.", "Je te rappelle plus tard."],
    ], { skill: "words" }),
    listen("tris6-t2", "Écoute le numéro de téléphone. Quel est-il ?", "Sıfır, beş, üç, iki.", [
      ["0532", true],
      ["0523", false],
      ["0352", false],
    ]),
    choice("tris6-t3", "Comment dit-on « Appelle-moi ! » ?", [
      ["Beni ara!", true],
      ["Bana ara!", false],
      ["Ben ara!", false],
    ], { skill: "grammar" }),
    missing("tris6-t4", "Quelle lettre manque ? (« libre, disponible »)", "m", "sait", "ü", ["ü", "u", "i"]),
    speak("tris6-t5", "Telefon numaran ne?", "Telefon numaram sıfır, beş, üç, iki…", "Mon numéro, c'est zéro, cinq, trois, deux…", {
      help: "Dis un numéro de téléphone à voix haute, chiffre par chiffre. Tu peux l'inventer.",
    }),
    listen("tris6-t6", "Souviens-toi du temps qu'il fait. Qu'entends-tu ?", "Yağmur yağıyor.", [
      ["Il pleut.", true],
      ["Il fait chaud.", false],
      ["Il y a du vent.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "telefon",
    itemName: "Vieux téléphone",
    itemNameRu: "Telefon",
    ru: "Yaşasın! Eski bir telefon!",
    en: "Hourra ! Un vieux téléphone !",
    a11y: "Un vieux téléphone vert à cadran est posé sur la petite table. Murzik décroche le combiné.",
    image: p("telefon"),
    steps: ["Kemal Bey montre le vieux téléphone de la chambre : «Artık bu senin!» — « Maintenant, il est à toi ! »", "« Bu çok eski, ama çalışıyor! » — « Il est très vieux, mais il marche ! »", "Murzik tourne le cadran.", "Dring-dring !"],
    bridge: "Le soir, ils prennent le thé sur le toit. Demain, Murzik veut trouver la tour de Galata : grand-mère Asya l'a dessinée sur sa carte postale.",
  },
};

const istanbul7: Lesson = {
  id: "tr-a1-istanbul-7",
  level: "A1",
  cityId: "tr-istanbul",
  number: 7,
  title: "Par où ?",
  minutes: 8,
  goals: ["Demander son chemin", "Comprendre : tout droit, à droite, à gauche, près, loin", "Réviser tous les mots d'Istanbul"],
  vocabNote: "Yakın mı? — « C'est près ? ». Tu le sais : le petit mot mı transforme un mot en question.",
  vocab: [
    v("tris7-1", "Galata Kulesi nerede?", "Où est la tour de Galata ?", "Murzik tient la carte postale avec le dessin de la tour et interroge un passant.", "Écouter Galata Kulesi nerede", p("l7-1"), "[galata kouléssi nérédé]"),
    v("tris7-2", "Düz gidin.", "Allez tout droit.", "Un passant montre une ruelle droit devant.", "Écouter Düz gidin", p("l7-2"), "[duz guidinn]"),
    v("tris7-3", "Sağa dönün.", "Tournez à droite.", "Une flèche vers la droite sur un vieux panneau, au coin d'une rue.", "Écouter Sağa dönün", p("l7-3"), "[saa deununn]"),
    v("tris7-4", "Sola dönün.", "Tournez à gauche.", "Une flèche vers la gauche sur un vieux panneau, au coin d'une rue.", "Écouter Sola dönün", p("l7-4"), "[sola deununn]"),
    v("tris7-5", "Yakın mı?", "C'est près ?", "Murzik regarde d'un air interrogateur un long escalier qui monte.", "Écouter Yakın mı", p("l7-5"), "[yakeunn meu]"),
    v("tris7-6", "Hayır, uzak.", "Non, c'est loin.", "Un passant montre un endroit très lointain, derrière les collines.", "Écouter Hayır, uzak", p("l7-6"), "[hayeur, ouzak]"),
    v("tris7-7", "Burada!", "La voilà !", "Murzik et Tom sont au pied de la tour de Galata et la montrent joyeusement.", "Écouter Burada", p("l7-7"), "[bourada]"),
  ],
  dialogue: {
    title: "Le chemin de la tour",
    note: "Yukarı veut dire « en haut ». Des rues en pente et des escaliers montent de l'eau jusqu'à la tour de Galata.",
    lines: [
      line("murzik", "Pardon, Galata Kulesi nerede?", "Pardon, où est la tour de Galata ?"),
      line("passerby", "Galata Kulesi mi? Düz gidin, sonra sağa dönün.", "La tour de Galata ? Allez tout droit, puis tournez à droite."),
      line("murzik", "Yakın mı?", "C'est près ?"),
      line("passerby", "Evet, yakın. Beş dakika.", "Oui, c'est près. Cinq minutes."),
      line("tom", "Sağa mı, sola mı?", "À droite ou à gauche ?"),
      line("passerby", "Sağa! Sonra yukarı.", "À droite ! Puis en haut."),
      line("murzik", "Çok teşekkürler!", "Merci beaucoup !"),
      line("tom", "Burada! İşte Galata Kulesi!", "La voilà ! Voilà la tour de Galata !"),
    ],
    gist: choice("tris7-d1", "Où vont Murzik et Tom ?", [
      ["À la tour de Galata.", true],
      ["Au ferry.", false],
      ["À la maison.", false],
    ]),
  },
  grammar: [
    {
      title: "Les demandes polies : -in",
      paragraphs: [
        "Une demande polie (à quelqu'un qu'on vouvoie, siz), c'est le verbe + -in, -ın, -un ou -ün : dön → dönün (tournez), bak → bakın (regardez).",
        "Attention : git → gidin (allez). Dans certains mots, un t entre deux voyelles devient d.",
      ],
      examples: [
        { ru: "Düz gidin, sonra sola dönün.", en: "Allez tout droit, puis tournez à gauche." },
        { ru: "Bakın, burada!", en: "Regardez, la voilà !" },
      ],
    },
  ],
  tasks: [
    listen("tris7-t1", "Examen audio. Écoute. De quel côté faut-il tourner ?", "Düz gidin, sonra sola dönün.", [
      ["Tout droit, puis à gauche.", true],
      ["Tout droit, puis à droite.", false],
      ["Tout de suite à droite.", false],
    ]),
    choice("tris7-t2", "Comment dit-on poliment « Regardez ! » ?", [
      ["Bakın!", true],
      ["Bak!", false],
      ["Baksın!", false],
    ], { skill: "grammar" }),
    match("tris7-t3", "Associe les paires.", [
      ["yakın", "près"],
      ["uzak", "loin"],
      ["sağa", "à droite"],
      ["sola", "à gauche"],
    ], { skill: "words" }),
    spell("tris7-t4", "Épelle le mot « tour ».", "kule"),
    speak("tris7-t5", "Pardon, durak nerede?", "Düz gidin, sonra sağa dönün.", "Allez tout droit, puis tournez à droite.", { help: "Indique le chemin à voix haute." }),
    script("tris7-t6", "Souviens-toi de tout Istanbul. Complète les conversations.", [
      { speaker: "Taxi driver", text: "Buyurun. Nereye?" },
      { speaker: "You", answer: "Balat'a, lütfen.", options: ["Balat'a, lütfen.", "Alo?", "Sağa dönün."] },
      { speaker: "Kemal Bey", text: "Burası senin odan." },
      { speaker: "You", answer: "Teşekkür ederim! Ne güzel!", options: ["Teşekkür ederim! Ne güzel!", "Yağmur yağıyor.", "Kim arıyor?"] },
      { speaker: "Tom", text: "Nasıl gidelim?" },
      { speaker: "You", answer: "Vapurla gidelim!", options: ["Vapurla gidelim!", "Vapur gidelim!", "Hayır, uzak."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bardak",
    itemName: "Verres à thé en forme de tulipe",
    itemNameRu: "Çay bardakları",
    ru: "Yaşasın! Çay bardakları!",
    en: "Hourra ! Des verres à thé !",
    a11y: "Deux verres en forme de tulipe remplis de thé rouge bien chaud sont posés sur un plateau en cuivre. Par la fenêtre, la tour de Galata.",
    image: p("bardak"),
    steps: ["Au pied de la tour, il y a un petit salon de thé.", "Le patron offre deux verres à thé à Murzik.", "« Bunlar senin! Afiyet olsun! » — « Ils sont à toi ! Bon appétit ! »", "Murzik les enveloppe avec soin dans son écharpe."],
    bridge: "Il est temps de faire la valise. Mais d'abord — un dernier ferry, et le vieux vendeur de simits.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre à Balat",
    nameRu: "Balat'taki oda",
    image: p("home"),
    a11y: "Une petite chambre vide dans une maison colorée de Balat. Par la grande fenêtre : les toits et la Corne d'Or. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "bardak",
  welcomeRu: "Merhaba, Balat!",
  welcomeEn: "Bonjour, Balat !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom avec leurs valises sur le quai d'Istanbul. Derrière eux : la tour de Galata, des ferries sur le Bosphore et des mouettes.",
  departureImage: p("departure"),
  departureA11y: "Murzik et Tom avec leurs valises sur le quai. Un ferry rapide attend à l'embarcadère, des mouettes tournoient au-dessus.",
  finale: [
    {
      image: p("simitci"),
      a11y: "Sur le pont du ferry, un vieux vendeur avec un plateau de simits regarde la carte postale dans les pattes de Murzik et sourit. Tom est à côté d'eux.",
      lines: [
        { en: "Le même vendeur de simits est de nouveau sur le ferry. Murzik lui montre la carte de grand-mère." },
        { ru: "Asya mı? Onu hatırlıyorum!", en: "Asya ? Je me souviens d'elle !" },
        { en: "« Une chatte rousse qui peignait des ferries et des mouettes. Un jour, elle a dit : je veux voir de la vraie soie — et elle est partie, vers le sud, de l'autre côté de la mer. »" },
      ],
    },
    {
      image: p("bardak"),
      a11y: "Murzik fait le tour de sa chambre à Balat, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre à Balat. Tom la prend en photo pour son carnet de voyage." },
        { en: "Murzik emporte son objet préféré : les verres à thé en forme de tulipe." },
        { en: "Le plan d'Istanbul va dans la poche de la valise, à côté des cartes postales." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "İstanbul tamamlandı!", en: "Istanbul, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — deuxième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik et Tom avec leurs valises sur le quai, près du ferry rapide.",
      lines: [
        { ru: "Hoşça kal, İstanbul!", en: "Au revoir, Istanbul !" },
        { ru: "Sıradaki durak: Bursa!", en: "Prochain arrêt : Bursa !" },
      ],
    },
    {
      image: p("to-bursa"),
      a11y: "Un ferry rapide traverse la mer de Marmara d'Istanbul à Bursa. Murzik et Tom sont sur le pont et regardent devant eux.",
      lines: [{ ru: "İstanbul → Bursa", en: "Istanbul → Bursa" }],
    },
    {
      image: pic("tr/bursa/arrival"),
      a11y: "Murzik et Tom sont arrivés à Bursa. Derrière eux : le mont Uludağ tout vert et de vieilles coupoles, entourées d'arbres.",
      lines: [
        { ru: "Merhaba, Bursa!", en: "Bonjour, Bursa !" },
        { ru: "Yeni bir şehir. Yeni kelimeler.", en: "Une nouvelle ville. De nouveaux mots." },
      ],
    },
  ],
};

export const trIstanbulFr = {
  id: "tr-istanbul",
  name: "Istanbul",
  nameTr: "İstanbul",
  lessons: [istanbul1, istanbul2, istanbul3, istanbul4, istanbul5, istanbul6, istanbul7],
  story,
};
