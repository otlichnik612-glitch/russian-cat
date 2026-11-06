import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, fill, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Pamukkale · “Time and plans” · telling the time, days of the week, the bus, being late, invitations, yesterday, plans. French version. */

const p = (name: string) => pic(`tr/pamukkale/${name}`);

const pamukkale1: Lesson = {
  id: "tr-a1-pamukkale-1",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 1,
  title: "Quelle heure est-il ?",
  minutes: 7,
  goals: ["Demander l'heure", "Dire l'heure : trois heures, trois heures et demie", "Nommer les moments de la journée"],
  vocabNote: "Buçuk veut dire « et demie ». Les Turcs disent « trois et demie » — exactement comme le français « trois heures et demie ».",
  vocab: [
    v("trpm1-1", "Saat kaç?", "Quelle heure est-il ?", "Tom regarde son poignet sans montre et lève les sourcils.", "Écouter Saat kaç", p("l1-1")),
    v("trpm1-2", "Saat üç.", "Il est trois heures.", "Une horloge ronde au mur indique exactement trois heures.", "Écouter Saat üç", p("l1-2")),
    v("trpm1-3", "Saat üç buçuk.", "Il est trois heures et demie.", "L'horloge indique trois heures et demie : la grande aiguille est en bas.", "Écouter Saat üç buçuk", p("l1-3")),
    v("trpm1-4", "sabah", "matin", "Les terrasses blanches dans la douce lumière du matin, le soleil se lève au-dessus.", "Écouter sabah", p("l1-4")),
    v("trpm1-5", "öğlen", "midi", "Le soleil tout en haut, des ombres courtes, Murzik sous un parasol.", "Écouter öğlen", p("l1-5")),
    v("trpm1-6", "akşam", "soir", "Un ciel rose du soir au-dessus des pentes blanches.", "Écouter akşam", p("l1-6")),
    v("trpm1-7", "gece", "nuit", "Une nuit étoilée au-dessus de la maison d'hôtes, une lumière allumée à la fenêtre.", "Écouter gece", p("l1-7")),
  ],
  dialogue: {
    title: "Le matin à la maison d'hôtes",
    note: "Kahvaltı veut dire « petit-déjeuner ». Gün batımı veut dire « coucher de soleil ». Güzelmiş — « il paraît que c'est beau ».",
    lines: [
      line("tom", "Selin, saat kaç?", "Selin, quelle heure est-il ?"),
      line("selin", "Saat yedi buçuk. Kahvaltı hazır!", "Sept heures et demie. Le petit-déjeuner est prêt !"),
      line("murzik", "Sabah çok güzel! Teraslar ne zaman açık?", "Quelle belle matinée ! Les terrasses ouvrent quand ?"),
      line("selin", "Sabah sekizde açılıyor.", "Elles ouvrent à huit heures du matin."),
      line("tom", "Akşam da gidelim mi? Gün batımı çok güzelmiş.", "On y va aussi le soir ? Il paraît que le coucher de soleil est magnifique."),
      line("selin", "Evet! Akşam çok güzel. Gece de yıldızlar var.", "Oui ! C'est très beau le soir. Et la nuit, il y a les étoiles."),
    ],
    gist: choice("trpm1-d1", "Quelle heure est-il maintenant ?", [
      ["Sept heures et demie.", true],
      ["Huit heures.", false],
      ["Sept heures.", false],
    ]),
  },
  grammar: [
    {
      title: "Saat kaç ? — Saat + un nombre",
      paragraphs: [
        "Pour dire l'heure, on dit saat (heure, horloge) et un nombre : Saat üç. — Il est trois heures. Saat on iki. — Il est midi (douze heures).",
        "La demie, c'est buçuk : Saat üç buçuk — mot à mot « trois et demie », donc trois heures et demie (3 h 30).",
      ],
      examples: [
        { ru: "Saat kaç? — Saat dokuz.", en: "Quelle heure est-il ? — Neuf heures." },
        { ru: "Saat yedi buçuk.", en: "Il est sept heures et demie." },
      ],
    },
  ],
  tasks: [
    listen("trpm1-t1", "Écoute. Quelle heure est-il ?", "Saat dört buçuk.", [
      ["4:30", true],
      ["3:30", false],
      ["4:00", false],
    ]),
    match("trpm1-t2", "Associe les paires.", [
      ["sabah", "matin"],
      ["öğlen", "midi"],
      ["akşam", "soir"],
      ["gece", "nuit"],
    ], { skill: "words" }),
    choice("trpm1-t3", "Comment dit-on « deux heures et demie » (2 h 30) ?", [
      ["Saat iki buçuk.", true],
      ["Saat üç buçuk.", false],
      ["Saat buçuk iki.", false],
    ], { skill: "grammar" }),
    missing("trpm1-t4", "Quelle lettre manque ? (« et demie »)", "bu", "uk", "ç", ["ç", "c", "ş"]),
    speak("trpm1-t5", "Saat kaç?", "Saat on bir.", "Il est onze heures.", { help: "Regarde une horloge et dis l'heure à voix haute." }),
    choice("trpm1-t6", "Comment dit-on « Nous sommes tous là » ?", [
      ["Hepimiz buradayız.", true],
      ["Hepimiz buradasın.", false],
      ["Hepimiz buradayım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "calar-saat",
    itemName: "Réveil",
    itemNameRu: "Çalar saat",
    ru: "Yaşasın! Bir çalar saat!",
    en: "Hourra ! Un réveil !",
    a11y: "Un réveil rond en fer-blanc à deux cloches est posé sur la table de chevet.",
    image: p("calar-saat"),
    steps: ["Selin apporte un vieux réveil.", "« Sabah erken kalkın! » — « Levez-vous tôt ! »", "Murzik le pose près de son lit.", "Tic-tac !"],
    bridge: "Selin demande : « Vous restez combien de jours ? » Et au fait, on est quel jour aujourd'hui ?",
  },
};

const pamukkale2: Lesson = {
  id: "tr-a1-pamukkale-2",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 2,
  title: "On est quel jour aujourd'hui ?",
  minutes: 7,
  goals: ["Nommer les jours de la semaine", "Dire « aujourd'hui », « demain », « hier »", "Demander quel jour on est"],
  vocabNote: "Tu te souviens de pazar — « marché » ? Ça veut aussi dire « dimanche ». Cumartesi, c'est samedi — mot à mot « après vendredi » (cuma, c'est vendredi).",
  vocab: [
    v("trpm2-1", "Bugün günlerden ne?", "On est quel jour aujourd'hui ?", "Murzik est devant un calendrier et se gratte la tête.", "Écouter Bugün günlerden ne", p("l2-1")),
    v("trpm2-2", "pazartesi, salı, çarşamba", "lundi, mardi, mercredi", "Trois pages de calendrier alignées.", "Écouter pazartesi, salı, çarşamba", p("l2-2")),
    v("trpm2-3", "perşembe, cuma", "jeudi, vendredi", "Encore deux pages de calendrier, avec une étoile sur vendredi.", "Écouter perşembe, cuma", p("l2-3")),
    v("trpm2-4", "cumartesi, pazar", "samedi, dimanche", "Les deux dernières pages, avec de petits soleils — le week-end.", "Écouter cumartesi, pazar", p("l2-4")),
    v("trpm2-5", "bugün", "aujourd'hui", "Murzik montre de la patte la page du jour sur le calendrier.", "Écouter bugün", p("l2-5")),
    v("trpm2-6", "yarın", "demain", "Murzik montre la page suivante.", "Écouter yarın", p("l2-6")),
    v("trpm2-7", "dün", "hier", "Murzik regarde en arrière la page d'hier.", "Écouter dün", p("l2-7")),
  ],
  dialogue: {
    title: "Combien de jours ?",
    note: "Kalıyorsunuz — « vous restez ». Hiérapolis est une cité antique juste au-dessus des terrasses.",
    lines: [
      line("selin", "Kaç gün kalıyorsunuz?", "Vous restez combien de jours ?"),
      line("tom", "Üç gün. Bugün günlerden ne?", "Trois jours. On est quel jour aujourd'hui ?"),
      line("selin", "Bugün perşembe.", "Aujourd'hui, on est jeudi."),
      line("murzik", "Yani perşembe, cuma, cumartesi. Pazar günü gidiyoruz.", "Donc jeudi, vendredi, samedi. On part dimanche."),
      line("selin", "Cumartesi akşam teraslarda konser var!", "Samedi soir, il y a un concert sur les terrasses !"),
      line("tom", "Harika! Yarın ne yapalım?", "Super ! Qu'est-ce qu'on fait demain ?"),
      line("selin", "Yarın Hierapolis'e gidin. Çok eski bir şehir.", "Demain, allez à Hiérapolis. C'est une très vieille cité."),
    ],
    gist: choice("trpm2-d1", "On est quel jour aujourd'hui ?", [
      ["Jeudi.", true],
      ["Vendredi.", false],
      ["Dimanche.", false],
    ]),
  },
  grammar: [
    {
      title: "Aujourd'hui, demain, hier",
      paragraphs: [
        "Bugün — aujourd'hui, yarın — demain, dün — hier. On les met d'habitude en début de phrase : Yarın Hierapolis'e gidiyoruz.",
        "Pour dire « tel jour », on dit juste le nom du jour, avec günü si on veut : Pazar (günü) gidiyoruz. — On part dimanche. Comme en français, pas besoin de petit mot devant.",
      ],
      examples: [
        { ru: "Bugün cuma.", en: "Aujourd'hui, on est vendredi." },
        { ru: "Cumartesi günü konser var.", en: "Il y a un concert samedi." },
      ],
    },
  ],
  tasks: [
    listen("trpm2-t1", "Écoute. Quel jour est-on ?", "Bugün cumartesi.", [
      ["Samedi.", true],
      ["Mercredi.", false],
      ["Vendredi.", false],
    ]),
    match("trpm2-t2", "Associe les paires.", [
      ["pazartesi", "lundi"],
      ["çarşamba", "mercredi"],
      ["cuma", "vendredi"],
      ["pazar", "dimanche"],
    ], { skill: "words" }),
    fill("trpm2-t3", "Complète avec le bon mot : « Aujourd'hui, on est jeudi ».", "", "perşembe.", "Bugün", ["Bugün", "Yarın", "Dün"], { skill: "grammar" }),
    missing("trpm2-t4", "Quelle lettre manque ? (« mercredi »)", "", "arşamba", "ç", ["ç", "c", "s"]),
    speak("trpm2-t5", "Bugün günlerden ne?", "Bugün pazartesi.", "Aujourd'hui, on est lundi.", { help: "Dis à voix haute quel jour on est aujourd'hui." }),
    listen("trpm2-t6", "Souviens-toi de l'heure. Quelle heure est-il ?", "Saat sekiz buçuk.", [
      ["8:30", true],
      ["9:30", false],
      ["8:00", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "takvim",
    itemName: "Calendrier",
    itemNameRu: "Takvim",
    ru: "Yaşasın! Yeni bir takvim!",
    en: "Hourra ! Un nouveau calendrier !",
    a11y: "Un calendrier avec une photo des terrasses blanches est accroché au mur. Un petit chat est dessiné sur jeudi.",
    image: p("takvim"),
    steps: ["Murzik accroche le calendrier au mur.", "Il dessine un petit chat sur jeudi.", "Et une note de musique sur samedi : le concert !", "Maintenant, il voit combien de jours il reste."],
    bridge: "Demain — Hiérapolis. Mais d'abord, il faut aller à Denizli et savoir quand le bus revient.",
  },
};

const pamukkale3: Lesson = {
  id: "tr-a1-pamukkale-3",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 3,
  title: "Le bus est à quelle heure ?",
  minutes: 7,
  goals: ["Demander à quelle heure part le bus", "Dire « à deux heures » : saat ikide", "Trouver le quai et la durée du trajet"],
  vocabNote: "Un otogar, c'est une gare routière. Un peron, c'est le quai d'où part le bus.",
  vocab: [
    v("trpm3-1", "Otobüs saat kaçta?", "Le bus est à quelle heure ?", "Murzik, au guichet, montre les horaires.", "Écouter Otobüs saat kaçta", p("l3-1")),
    v("trpm3-2", "Saat ikide.", "À deux heures.", "La caissière montre une horloge aux aiguilles sur deux heures.", "Écouter Saat ikide", p("l3-2")),
    v("trpm3-3", "Ne zaman?", "Quand ?", "Tom écarte les mains d'un air interrogateur devant le tableau des départs.", "Écouter Ne zaman", p("l3-3")),
    v("trpm3-4", "otogar", "gare routière", "Une grande gare routière avec des rangées d'autocars.", "Écouter otogar", p("l3-4")),
    v("trpm3-5", "peron", "quai", "Un panneau « quai 12 », avec un autocar à côté.", "Écouter peron", p("l3-5")),
    v("trpm3-6", "Kaç dakika?", "Combien de minutes ?", "Murzik tient un sablier d'un air interrogateur.", "Écouter Kaç dakika", p("l3-6")),
    v("trpm3-7", "gidiş-dönüş", "aller-retour", "Deux billets : une flèche à l'aller, une flèche au retour.", "Écouter gidiş-dönüş", p("l3-7")),
  ],
  dialogue: {
    title: "La gare routière de Denizli",
    note: "Sürüyor veut dire « ça dure, ça prend ». Kaç dakika sürüyor? — « Ça prend combien de temps ? »",
    lines: [
      line("murzik", "Pamukkale'ye otobüs saat kaçta?", "Le bus pour Pamukkale est à quelle heure ?"),
      line("cashier", "Saat ikide ve saat dörtte.", "À deux heures et à quatre heures."),
      line("tom", "Şimdi saat kaç?", "Et quelle heure est-il maintenant ?"),
      line("cashier", "Bir buçuk.", "Une heure et demie."),
      line("murzik", "Saat ikide gidelim! İki bilet, lütfen.", "Prenons celui de deux heures ! Deux billets, s'il vous plaît."),
      line("cashier", "Buyurun. Peron on iki.", "Voilà. Quai douze."),
      line("tom", "Kaç dakika sürüyor?", "Ça prend combien de temps ?"),
      line("cashier", "Yirmi dakika.", "Vingt minutes."),
    ],
    gist: choice("trpm3-d1", "À quelle heure partiront-ils ?", [
      ["À deux heures.", true],
      ["À quatre heures.", false],
      ["À une heure et demie.", false],
    ]),
  },
  grammar: [
    {
      title: "À quelle heure : saat ikide",
      paragraphs: [
        "En français, on dit « à deux heures » ; le turc ajoute plutôt une terminaison : saat, le nombre et -de / -da : saat ikide (à deux heures), saat altıda (à six heures).",
        "Après les sons ç, f, h, k, p, s, ş, t, la terminaison devient -te / -ta : saat üçte (à trois heures), saat beşte (à cinq heures), saat dörtte (à quatre heures).",
      ],
      examples: [
        { ru: "Otobüs saat beşte.", en: "Le bus est à cinq heures." },
        { ru: "Saat kaçta? — Saat onda.", en: "À quelle heure ? — À dix heures." },
      ],
    },
  ],
  tasks: [
    choice("trpm3-t1", "Comment dit-on « à cinq heures » ?", [
      ["saat beşte", true],
      ["saat beşde", false],
      ["saat beş", false],
    ], { skill: "grammar" }),
    listen("trpm3-t2", "Écoute. Le bus est à quelle heure ?", "Otobüs saat dörtte.", [
      ["À quatre heures.", true],
      ["À deux heures.", false],
      ["À cinq heures.", false],
    ]),
    match("trpm3-t3", "Associe les paires.", [
      ["otogar", "gare routière"],
      ["peron", "quai"],
      ["ne zaman", "quand"],
      ["dakika", "minute"],
    ], { skill: "words" }),
    spell("trpm3-t4", "Épelle le mot « gare routière ».", "otogar"),
    speak("trpm3-t5", "Otobüs saat kaçta?", "Saat üçte.", "À trois heures.", { help: "Dis à voix haute à quelle heure est le bus." }),
    choice("trpm3-t6", "Que veut dire dün ?", [
      ["hier", true],
      ["demain", false],
      ["aujourd'hui", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "canta",
    itemName: "Sac à dos",
    itemNameRu: "Sırt çantası",
    ru: "Yaşasın! Yeni bir sırt çantası!",
    en: "Hourra ! Un nouveau sac à dos !",
    a11y: "Un petit sac à dos orange avec des poches et un porte-clés en forme de chat.",
    image: p("canta"),
    steps: ["Au marché de Denizli, Murzik repère un sac à dos orange.", "Il est pile à sa taille !", "Murzik y range de l'eau et le plan.", "Prêt pour la randonnée !"],
    bridge: "Le lendemain matin, bizarrement, le réveil ne sonne pas…",
  },
};

const pamukkale4: Lesson = {
  id: "tr-a1-pamukkale-4",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 4,
  title: "On est en retard !",
  minutes: 7,
  goals: ["Dire « on est en retard » et « le bus est parti »", "Presser un ami", "Demander le prochain bus"],
  vocabNote: "Kaçmak veut dire « s'enfuir ». Otobüs kaçtı — « le bus s'est enfui », c'est-à-dire qu'il est parti sans nous.",
  vocab: [
    v("trpm4-1", "Geç kaldık!", "On est en retard !", "Murzik et Tom courent dans la rue ; l'horloge indique déjà neuf heures.", "Écouter Geç kaldık", p("l4-1")),
    v("trpm4-2", "Acele et!", "Dépêche-toi !", "Murzik tire Tom par la manche pendant que Tom enfile une chaussure en courant.", "Écouter Acele et", p("l4-2")),
    v("trpm4-3", "erken", "tôt", "Tôt le matin, le soleil se lève à peine, Murzik bâille.", "Écouter erken", p("l4-3")),
    v("trpm4-4", "geç", "tard", "L'horloge indique bien plus de neuf heures, et Murzik se prend la tête.", "Écouter geç", p("l4-4")),
    v("trpm4-5", "Otobüs kaçtı!", "On a raté le bus !", "Le bus démarre pendant que Murzik et Tom lui font signe.", "Écouter Otobüs kaçtı", p("l4-5")),
    v("trpm4-6", "Sonraki otobüs ne zaman?", "Le prochain bus est quand ?", "Tom lit les horaires à l'arrêt de bus.", "Écouter Sonraki otobüs ne zaman", p("l4-6")),
    v("trpm4-7", "Bekleyelim.", "Attendons.", "Murzik et Tom sont assis sur un banc à l'arrêt.", "Écouter Bekleyelim", p("l4-7")),
  ],
  dialogue: {
    title: "Le réveil n'a pas sonné",
    note: "Çalmadı — « il n'a pas sonné ». Şapkalı — « au chapeau ». Gitti — « il est parti ».",
    lines: [
      line("murzik", "Tom! Saat kaç? Saat dokuz! Geç kaldık!", "Tom ! Quelle heure est-il ? Neuf heures ! On est en retard !"),
      line("tom", "Ne? Çalar saat çalmadı!", "Quoi ? Le réveil n'a pas sonné !"),
      line("murzik", "Acele et! Otobüs saat dokuzda!", "Dépêche-toi ! Le bus est à neuf heures !"),
      line("tom", "Otobüs kaçtı!", "On a raté le bus !"),
      line("murzik", "Pardon, sonraki otobüs ne zaman?", "Pardon, le prochain bus est quand ?"),
      line("passerby", "Saat onda. Bekleyin.", "À dix heures. Attendez, c'est tout."),
      line("tom", "Tamam, bekleyelim. Murzik, bak… Şapkalı, beyaz bir kedi!", "D'accord, attendons. Murzik, regarde… Un chat blanc au chapeau !"),
      line("murzik", "Nerede? Gitti…", "Où ça ? Il est parti…"),
    ],
    gist: choice("trpm4-d1", "Pourquoi sont-ils en retard ?", [
      ["Le réveil n'a pas sonné.", true],
      ["Le bus est tombé en panne.", false],
      ["Ils se sont perdus.", false],
    ]),
  },
  grammar: [
    {
      title: "Le passé : -dı, -di, -du, -dü",
      paragraphs: [
        "Le passé, c'est le verbe + -dı / -di / -du / -dü — un seul mot, là où le français dit « a fait » : Otobüs kaç-tı — le bus est parti. Après les sons ç, f, h, k, p, s, ş, t, le d devient t.",
        "« Nous » au passé, c'est -dık / -dik / -duk / -dük : geç kal-dık — nous sommes en retard, gel-dik — nous sommes venus.",
      ],
      examples: [
        { ru: "Geç kaldık!", en: "On est en retard ! (mot à mot « nous sommes restés tard »)" },
        { ru: "Otobüs saat dokuzda geldi.", en: "Le bus est arrivé à neuf heures." },
      ],
    },
  ],
  tasks: [
    listen("trpm4-t1", "Écoute. Que s'est-il passé ?", "Otobüs kaçtı!", [
      ["Ils ont raté le bus.", true],
      ["Le bus est arrivé.", false],
      ["Le bus est tombé en panne.", false],
    ]),
    choice("trpm4-t2", "Comment dit-on « On est en retard » ?", [
      ["Geç kaldık.", true],
      ["Geç kaldım.", false],
      ["Geç kalıyoruz mu.", false],
    ], { skill: "grammar" }),
    match("trpm4-t3", "Associe les paires.", [
      ["erken", "tôt"],
      ["geç", "tard"],
      ["Acele et!", "Dépêche-toi !"],
      ["Bekleyelim.", "Attendons."],
    ], { skill: "words" }),
    missing("trpm4-t4", "Quelle lettre manque ? (« il est parti, il s'est enfui »)", "ka", "tı", "ç", ["ç", "c", "ş"]),
    speak("trpm4-t5", "Sonraki otobüs ne zaman?", "Saat onda.", "À dix heures.", { help: "Réponds à voix haute." }),
    listen("trpm4-t6", "Souviens-toi de la leçon précédente. À quelle heure ?", "Saat ikide.", [
      ["À deux heures.", true],
      ["À dix heures.", false],
      ["À midi.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "terlik",
    itemName: "Chaussons",
    itemNameRu: "Terlik",
    ru: "Yaşasın! Yeni terlikler!",
    en: "Hourra ! De nouveaux chaussons !",
    a11y: "Une paire de chaussons brodés tout doux près du lit — minuscules, juste à la taille des pattes de Murzik.",
    image: p("terlik"),
    steps: ["Dans la précipitation du matin, Murzik court pieds nus.", "Selin lui offre des chaussons.", "« Acele etme! » — « Ne te presse pas ! »", "Maintenant, ses matinées sont chaudes et douillettes."],
    bridge: "Le soir, Selin les invite sur les terrasses : « Ici, c'est le plus beau coucher de soleil de Turquie ! »",
  },
};

const pamukkale5: Lesson = {
  id: "tr-a1-pamukkale-5",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 5,
  title: "Allons voir le coucher de soleil !",
  minutes: 7,
  goals: ["Inviter quelqu'un quelque part", "Accepter ou refuser poliment", "Se mettre d'accord sur le lieu de rendez-vous"],
  vocabNote: "Maalesef veut dire « malheureusement ». Commence un refus par ce mot, et il sera poli.",
  vocab: [
    v("trpm5-1", "Gün batımını izleyelim mi?", "On va voir le coucher de soleil ?", "Selin montre le ciel qui rosit au-dessus des terrasses.", "Écouter Gün batımını izleyelim mi", p("l5-1")),
    v("trpm5-2", "Bu akşam ne yapıyorsun?", "Qu'est-ce que tu fais ce soir ?", "Selin passe la tête par la porte de la chambre de Murzik.", "Écouter Bu akşam ne yapıyorsun", p("l5-2")),
    v("trpm5-3", "Benimle gelir misin?", "Tu viens avec moi ?", "Selin tend la main pour l'inviter.", "Écouter Benimle gelir misin", p("l5-3")),
    v("trpm5-4", "Çok isterim!", "Avec plaisir !", "Murzik saute de joie, la queue bien droite.", "Écouter Çok isterim", p("l5-4")),
    v("trpm5-5", "Maalesef gelemem.", "Malheureusement, je ne peux pas venir.", "Tom écarte les mains d'un air désolé et montre une pile de photos.", "Écouter Maalesef gelemem", p("l5-5")),
    v("trpm5-6", "Başka zaman.", "Une autre fois.", "Tom fait un signe amical et sourit.", "Écouter Başka zaman", p("l5-6")),
    v("trpm5-7", "Nerede buluşalım?", "On se retrouve où ?", "Murzik, un plan entre les pattes, regarde Selin.", "Écouter Nerede buluşalım", p("l5-7")),
  ],
  dialogue: {
    title: "Une invitation",
    note: "Kapının önünde — « devant le portail ».",
    lines: [
      line("selin", "Murzik, bu akşam ne yapıyorsun?", "Murzik, qu'est-ce que tu fais ce soir ?"),
      line("murzik", "Bilmiyorum. Neden?", "Je ne sais pas. Pourquoi ?"),
      line("selin", "Gün batımını izleyelim mi? Teraslarda çok güzel.", "On va voir le coucher de soleil ? C'est magnifique sur les terrasses."),
      line("murzik", "Çok isterim!", "Avec plaisir !"),
      line("tom", "Ben de! Nerede buluşalım?", "Moi aussi ! On se retrouve où ?"),
      line("selin", "Saat altıda, kapının önünde.", "À six heures, devant le portail."),
      line("murzik", "Tamam, görüşürüz!", "D'accord, à tout à l'heure !"),
    ],
    gist: choice("trpm5-d1", "Quand et où vont-ils se retrouver ?", [
      ["À six heures, devant le portail.", true],
      ["À huit heures, près du bus.", false],
      ["Le matin, sur les terrasses.", false],
    ]),
  },
  grammar: [
    {
      title: "Allons… : -elim, -alım",
      paragraphs: [
        "« Faisons quelque chose », c'est le verbe + -elim / -alım : gid-elim — allons-y, izle-yelim — regardons, buluş-alım — retrouvons-nous.",
        "Ajoute mi pour en faire une invitation, comme le français « Et si on… ? » : Gidelim mi? — On y va ? İzleyelim mi? — On regarde ?",
      ],
      examples: [
        { ru: "Saat altıda buluşalım.", en: "Retrouvons-nous à six heures." },
        { ru: "Sinemaya gidelim mi?", en: "On va au cinéma ?" },
      ],
    },
  ],
  tasks: [
    choice("trpm5-t1", "Comment dit-on « Retrouvons-nous » ?", [
      ["Buluşalım.", true],
      ["Buluşelim.", false],
      ["Buluşuyoruz mu.", false],
    ], { skill: "grammar" }),
    listen("trpm5-t2", "Écoute. Comment répond-on à l'invitation ?", "Maalesef gelemem. Başka zaman.", [
      ["On refuse.", true],
      ["On accepte avec joie.", false],
      ["On demande où se retrouver.", false],
    ]),
    match("trpm5-t3", "Associe les paires.", [
      ["Çok isterim!", "Avec plaisir !"],
      ["Maalesef gelemem.", "Malheureusement, je ne peux pas venir."],
      ["Başka zaman.", "Une autre fois."],
      ["Nerede buluşalım?", "On se retrouve où ?"],
    ], { skill: "words" }),
    missing("trpm5-t4", "Quelle lettre manque ? (« coucher de soleil »)", "Gün bat", "mı", "ı", ["ı", "i", "a"]),
    speak("trpm5-t5", "Bu akşam sinemaya gidelim mi?", "Çok isterim! Saat kaçta?", "Avec plaisir ! À quelle heure ?", { help: "Accepte l'invitation à voix haute." }),
    choice("trpm5-t6", "Comment dit-on « On est en retard » ?", [
      ["Geç kaldık.", true],
      ["Geç kaldınız.", false],
      ["Erken kaldık.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "afis",
    itemName: "Affiche",
    itemNameRu: "Afiş",
    ru: "Yaşasın! Bir afiş!",
    en: "Hourra ! Une affiche !",
    a11y: "Une affiche du concert du soir sur les terrasses est accrochée au mur : des pentes blanches dans la lumière rose du couchant.",
    image: p("afis"),
    steps: ["Les affiches du concert de samedi sont accrochées près du portail.", "Selin en donne une à Murzik.", "Murzik l'accroche au-dessus de son lit.", "Le concert, c'est demain !"],
    bridge: "Le matin, Selin demande : « Où étiez-vous hier après-midi ? Je vous cherchais ! »",
  },
};

const pamukkale6: Lesson = {
  id: "tr-a1-pamukkale-6",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 6,
  title: "Où étiez-vous hier ?",
  minutes: 7,
  goals: ["Demander où quelqu'un était", "Dire : nous étions…, c'était beau", "Décrire le passé : il faisait chaud, il y avait du monde"],
  vocabNote: "Kalabalık veut dire à la fois « foule » et « bondé ». Kalabalıktı — « il y avait du monde ».",
  vocab: [
    v("trpm6-1", "Dün neredeydiniz?", "Où étiez-vous hier ?", "Selin regarde avec surprise Murzik et Tom tout bronzés.", "Écouter Dün neredeydiniz", p("l6-1")),
    v("trpm6-2", "Termal havuzdaydık.", "Nous étions à la piscine thermale.", "Murzik et Tom nagent dans la piscine antique, parmi des colonnes tombées.", "Écouter Termal havuzdaydık", p("l6-2")),
    v("trpm6-3", "Evdeydik.", "Nous étions à la maison.", "Murzik et Tom sont assis sur le canapé à la maison, avec du thé.", "Écouter Evdeydik", p("l6-3")),
    v("trpm6-4", "Hava nasıldı?", "Quel temps faisait-il ?", "Selin montre le ciel et lève les sourcils.", "Écouter Hava nasıldı", p("l6-4")),
    v("trpm6-5", "Çok güzeldi!", "C'était vraiment magnifique !", "Murzik ferme les yeux d'un air rêveur, en repensant aux terrasses blanches.", "Écouter Çok güzeldi", p("l6-5")),
    v("trpm6-6", "Kalabalıktı.", "Il y avait du monde.", "Une foule de touristes avec des appareils photo sur les terrasses.", "Écouter Kalabalıktı", p("l6-6")),
    v("trpm6-7", "Su sıcaktı.", "L'eau était chaude.", "Une légère vapeur monte de l'eau bleue de la piscine.", "Écouter Su sıcaktı", p("l6-7")),
  ],
  dialogue: {
    title: "La piscine antique",
    note: "Antik veut dire « antique ». Yazın veut dire « en été ». Hep veut dire « toujours ».",
    lines: [
      line("selin", "Günaydın! Dün neredeydiniz?", "Bonjour ! Où étiez-vous hier ?"),
      line("tom", "Dün Hierapolis'teydik. Sonra termal havuzdaydık.", "Hier, nous étions à Hiérapolis. Puis nous étions à la piscine thermale."),
      line("selin", "Antik havuzda mı? Su nasıldı?", "Dans la piscine antique ? Comment était l'eau ?"),
      line("murzik", "Su sıcaktı! Çok güzeldi!", "L'eau était chaude ! C'était vraiment magnifique !"),
      line("tom", "Ama çok kalabalıktı.", "Mais il y avait beaucoup de monde."),
      line("selin", "Evet, yazın hep kalabalık.", "Oui, en été, il y a toujours du monde."),
    ],
    gist: choice("trpm6-d1", "Où étaient Tom et Murzik hier ?", [
      ["À Hiérapolis et à la piscine thermale.", true],
      ["À la maison.", false],
      ["À Denizli.", false],
    ]),
  },
  grammar: [
    {
      title: "Était, étaient : -dı",
      paragraphs: [
        "« Était » au passé utilise la même terminaison -dı / -di / -du / -dü, ajoutée directement au mot : güzel-di — c'était beau, sıcak-tı — il faisait chaud.",
        "« Nous étions », c'est -dık ; « vous étiez » (poli ou pluriel), c'est -dınız : havuzda-y-dık — nous étions à la piscine, nerede-y-diniz — où étiez-vous ? Après une voyelle, on ajoute un y.",
      ],
      examples: [
        { ru: "Dün evdeydik.", en: "Hier, nous étions à la maison." },
        { ru: "Hava çok sıcaktı.", en: "Il faisait très chaud." },
      ],
    },
  ],
  tasks: [
    choice("trpm6-t1", "Comment demander « Où étiez-vous hier ? »", [
      ["Dün neredeydiniz?", true],
      ["Dün neredesiniz?", false],
      ["Dün nerede olacaksınız?", false],
    ], { skill: "grammar" }),
    listen("trpm6-t2", "Écoute. Comment était l'eau ?", "Su çok sıcaktı.", [
      ["Très chaude.", true],
      ["Froide.", false],
      ["Sale.", false],
    ]),
    match("trpm6-t3", "Associe les paires.", [
      ["kalabalık", "bondé, plein de monde"],
      ["sıcak", "chaud"],
      ["havuz", "piscine"],
      ["dün", "hier"],
    ], { skill: "words" }),
    missing("trpm6-t4", "Quelle lettre manque ? (« C'était beau »)", "Güzel", "i", "d", ["d", "t", "l"]),
    speak("trpm6-t5", "Dün neredeydiniz?", "Dün evdeydik.", "Hier, nous étions à la maison.", { help: "Dis à voix haute où tu étais hier." }),
    choice("trpm6-t6", "On t'invite au cinéma, mais tu ne peux pas y aller. Que dis-tu ?", [
      ["Maalesef gelemem.", true],
      ["Çok isterim!", false],
      ["Buluşalım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bornoz",
    itemName: "Peignoir",
    itemNameRu: "Bornoz",
    ru: "Yaşasın! Yumuşak bir bornoz!",
    en: "Hourra ! Un peignoir tout doux !",
    a11y: "Un peignoir blanc moelleux à capuche est accroché à une patère. Murzik s'y perd complètement — on ne voit que ses oreilles.",
    image: p("bornoz"),
    steps: ["Selin apporte un peignoir : « Prends-le pour la piscine, la prochaine fois ! »", "Il est énorme !", "Murzik y disparaît complètement.", "Chaud et doux !"],
    bridge: "Les derniers jours à Pamukkale. Selin demande : « Qu'est-ce que vous faites ce week-end ? »",
  },
};

const pamukkale7: Lesson = {
  id: "tr-a1-pamukkale-7",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 7,
  title: "Les projets du week-end",
  minutes: 8,
  goals: ["Parler de ses projets : le futur", "Demander à quelqu'un ses projets pour le week-end", "Réviser tous les mots de Pamukkale"],
  vocabNote: "Hafta veut dire « semaine », et sonu, « sa fin ». Hafta sonu — « le week-end », mot à mot « la fin de la semaine ».",
  vocab: [
    v("trpm7-1", "Hafta sonu ne yapacaksın?", "Qu'est-ce que vous allez faire ce week-end ?", "Selin regarde Murzik avec curiosité.", "Écouter Hafta sonu ne yapacaksın", p("l7-1")),
    v("trpm7-2", "Pazar günü Bodrum'a gideceğiz.", "Dimanche, nous allons à Bodrum.", "Tom montre sur la carte une baie bleue au bord de la mer.", "Écouter Pazar günü Bodrum'a gideceğiz", p("l7-2")),
    v("trpm7-3", "Fotoğraf çekeceğim.", "Je vais prendre des photos.", "Tom porte son appareil photo à son œil.", "Écouter Fotoğraf çekeceğim", p("l7-3")),
    v("trpm7-4", "Dinleneceğim.", "Je vais me reposer.", "Murzik est allongé sur un transat avec un livre.", "Écouter Dinleneceğim", p("l7-4")),
    v("trpm7-5", "Belki yüzeceğiz.", "On ira peut-être nager.", "Murzik, un masque de plongée sur le nez, regarde l'eau d'un air rêveur.", "Écouter Belki yüzeceğiz", p("l7-5")),
    v("trpm7-6", "hafta sonu", "week-end", "Deux pages de calendrier avec de petits soleils.", "Écouter hafta sonu", p("l7-6")),
    v("trpm7-7", "Planın ne?", "Quels sont vos projets ?", "Murzik tient un carnet où il a dessiné ses projets.", "Écouter Planın ne", p("l7-7")),
  ],
  dialogue: {
    title: "Le dernier jour",
    note: "Tekneler veut dire « des bateaux ». Planımız — « notre plan ».",
    lines: [
      line("selin", "Hafta sonu ne yapacaksınız?", "Qu'est-ce que vous allez faire ce week-end ?"),
      line("tom", "Cumartesi konsere gideceğiz. Ben fotoğraf çekeceğim.", "Samedi, on va au concert. Je vais prendre des photos."),
      line("murzik", "Ben de dinleneceğim! Belki yüzeceğiz.", "Et moi, je vais me reposer ! On ira peut-être nager."),
      line("selin", "Pazar günü?", "Et dimanche ?"),
      line("tom", "Pazar günü Bodrum'a gideceğiz.", "Dimanche, nous allons à Bodrum."),
      line("selin", "Bodrum mu? Deniz, tekneler… Harika!", "Bodrum ? La mer, les bateaux… Merveilleux !"),
      line("murzik", "Planımız çok güzel!", "On a un super plan !"),
    ],
    gist: choice("trpm7-d1", "Que feront-ils dimanche ?", [
      ["Ils iront à Bodrum.", true],
      ["Ils iront au concert.", false],
      ["Ils se reposeront à la maison.", false],
    ]),
  },
  grammar: [
    {
      title: "Le futur : -ecek, -acak",
      paragraphs: [
        "Le futur, c'est le verbe + -ecek / -acak — en turc aussi, c'est une terminaison, comme le futur français en -rai : gid-ecek — ira, çek-ecek — prendra (des photos), yap-acak — fera. Après une voyelle, on ajoute un y : oku-y-acak — lira, izle-y-ecek — regardera.",
        "Devant une voyelle, le k devient ğ : gideceğ-im — j'irai, gideceğ-iz — nous irons. Avec « tu », il reste : yapacak-sın.",
      ],
      examples: [
        { ru: "Yarın Bodrum'a gideceğiz.", en: "Demain, nous allons à Bodrum." },
        { ru: "Hafta sonu ne yapacaksın?", en: "Qu'est-ce que vous allez faire ce week-end ?" },
      ],
    },
  ],
  tasks: [
    listen("trpm7-t1", "Examen audio. Que se passe-t-il samedi ?", "Cumartesi akşam saat sekizde konser var. Sonra gece yüzeceğiz.", [
      ["Un concert à huit heures, puis une baignade de nuit.", true],
      ["Un concert à six heures, puis le dîner.", false],
      ["Un bus à huit heures.", false],
    ]),
    choice("trpm7-t2", "Comment dit-on « Nous allons à Bodrum » ?", [
      ["Bodrum'a gideceğiz.", true],
      ["Bodrum'a gittik.", false],
      ["Bodrum'a gidiyoruz mu.", false],
    ], { skill: "grammar" }),
    match("trpm7-t3", "Associe les paires.", [
      ["hafta sonu", "week-end"],
      ["plan", "un plan, un projet"],
      ["dinlenmek", "se reposer"],
      ["yüzmek", "nager"],
    ], { skill: "words" }),
    missing("trpm7-t4", "Quelle lettre manque ? (« nous irons »)", "gidece", "iz", "ğ", ["ğ", "k", "g"]),
    speak("trpm7-t5", "Hafta sonu ne yapacaksın?", "Dinleneceğim ve kitap okuyacağım.", "Je vais me reposer et lire un livre.", { help: "Parle à voix haute de tes projets pour le week-end." }),
    script("trpm7-t6", "Souviens-toi de tout Pamukkale. Complète les conversations.", [
      { speaker: "Selin", text: "Saat kaç?" },
      { speaker: "You", answer: "Saat yedi buçuk.", options: ["Saat yedi buçuk.", "Bugün perşembe.", "Saat kaçta?"] },
      { speaker: "Cashier", text: "Otobüs saat ikide." },
      { speaker: "You", answer: "İki bilet, lütfen.", options: ["İki bilet, lütfen.", "Geç kaldık!", "Çok güzeldi!"] },
      { speaker: "Selin", text: "Dün neredeydiniz?" },
      { speaker: "You", answer: "Termal havuzdaydık.", options: ["Termal havuzdaydık.", "Yarın gideceğiz.", "Bekleyelim."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pestamal",
    itemName: "Serviette en coton",
    itemNameRu: "Peştamal",
    ru: "Yaşasın! Bir peştamal!",
    en: "Hourra ! Un peştamal !",
    a11y: "Une fine serviette peştamal en coton rayé est pliée sur le lit. Elle vient de Denizli, la région du coton célèbre.",
    image: p("pestamal"),
    steps: ["Selin offre à Murzik un peştamal rayé.", "« Denizli'nin pamuğu! » — « Du coton de Denizli ! »", "Murzik s'y enroule après la baignade.", "Léger et chaud !"],
    bridge: "Samedi soir, le concert sur les terrasses. Et de nouveau, un chat blanc au chapeau passe dans la foule…",
  },
};

const story: CityStory = {
  home: {
    name: "Une maison d'hôtes près des terrasses",
    nameRu: "Pansiyon odası",
    image: p("home"),
    a11y: "Une chambre simple et vide dans une petite maison d'hôtes au pied des terrasses blanches. Par la fenêtre, on voit la pente blanche comme neige. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "pestamal",
  welcomeRu: "Merhaba, Pamukkale!",
  welcomeEn: "Bonjour, Pamukkale !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom au pied des terrasses blanches comme neige de Pamukkale. Le ciel se reflète dans les bassins bleus.",
  departureImage: p("departure"),
  departureA11y: "Murzik et Tom montent dans un bus avec leurs valises ; derrière eux, les terrasses blanches.",
  finale: [
    {
      image: p("lev"),
      a11y: "Le concert du soir sur les terrasses blanches, dans la lumière rose du couchant. Au loin, dans la foule, un vieux chat blanc au chapeau regarde vers Murzik. Murzik ne le voit pas.",
      lines: [
        { en: "Le concert du samedi sur les terrasses. Tom filme le coucher de soleil pour son carnet de voyage." },
        { en: "De retour à la maison d'hôtes, Tom fait défiler ses photos. Sur l'une d'elles, tout au coin, il y a un vieux chat blanc au chapeau. Il regarde droit vers Murzik." },
        { ru: "Bu şapkalı kedi kim?", en: "Qui est ce chat au chapeau ?" },
      ],
    },
    {
      image: p("pestamal"),
      a11y: "Murzik fait le tour de sa chambre à la maison d'hôtes, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre près des terrasses. Tom la prend en photo." },
        { en: "Murzik emporte le peştamal rayé de Denizli." },
        { en: "Tom garde la photo du chat au chapeau. On ne sait jamais." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Pamukkale tamamlandı!", en: "Pamukkale, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — cinquième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik et Tom montent dans le bus.",
      lines: [
        { ru: "Hoşça kal, Pamukkale!", en: "Au revoir, Pamukkale !" },
        { ru: "Sıradaki durak: Bodrum!", en: "Prochain arrêt : Bodrum !" },
      ],
    },
    {
      image: p("road"),
      a11y: "Le bus descend des montagnes en lacets vers la mer Égée toute bleue.",
      lines: [{ ru: "Pamukkale → Bodrum", en: "Pamukkale → Bodrum" }],
    },
    {
      image: pic("tr/bodrum/arrival"),
      a11y: "Murzik et Tom sur le front de mer de Bodrum : des petites maisons blanches, un vieux château et des bateaux en bois dans une baie bleue.",
      lines: [
        { ru: "Merhaba, Bodrum!", en: "Bonjour, Bodrum !" },
        { ru: "Deniz! Güneş! Tekneler!", en: "La mer ! Le soleil ! Des bateaux !" },
      ],
    },
  ],
};

export const trPamukkaleFr = {
  id: "tr-pamukkale",
  name: "Pamukkale",
  nameTr: "Pamukkale",
  lessons: [pamukkale1, pamukkale2, pamukkale3, pamukkale4, pamukkale5, pamukkale6, pamukkale7],
  story,
};
