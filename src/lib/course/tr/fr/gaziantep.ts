import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Gaziantep · “What I did” · the past tense in every person, telling a story in order, feelings, zaten / henüz, Tom's photos. French version. */

const p = (name: string) => pic(`tr/gaziantep/${name}`);

const gaziantep1: Lesson = {
  id: "tr-a1-gaziantep-1",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 1,
  title: "Qu'as-tu fait hier ?",
  minutes: 7,
  goals: ["Demander à quelqu'un ce qu'il a fait", "Raconter sa journée d'hier", "Dire « je n'ai rien fait »"],
  vocabNote: "Yaptın — « tu as fait », yaptım — « j'ai fait ». Dün — « hier », dün akşam — « hier soir ».",
  vocab: [
    v("trga1-1", "Dün ne yaptın?", "Qu'as-tu fait hier ?", "Elif, avec ses tresses, est assise sur les marches d'une boutique de cuivre.", "Écouter Dün ne yaptın", p("l1-1")),
    v("trga1-2", "Çarşıya gittim.", "Je suis allé au bazar.", "Murzik se promène dans le bazar du cuivre avec un panier.", "Écouter Çarşıya gittim", p("l1-2")),
    v("trga1-3", "Baklava yedim.", "J'ai mangé du baklava.", "Murzik, des miettes de baklava sur les moustaches.", "Écouter Baklava yedim", p("l1-3")),
    v("trga1-4", "Ne aldın?", "Qu'est-ce que tu as acheté ?", "Elif jette un œil dans le panier de Murzik.", "Écouter Ne aldın", p("l1-4")),
    v("trga1-5", "Hiçbir şey yapmadım.", "Je n'ai rien fait.", "Tom est allongé sur le canapé, les yeux fermés.", "Écouter Hiçbir şey yapmadım", p("l1-5")),
    v("trga1-6", "dün akşam", "hier soir", "Le bazar le soir, les lampes allumées.", "Écouter dün akşam", p("l1-6")),
    v("trga1-7", "bütün gün", "toute la journée", "Une horloge dont les aiguilles tournent à toute vitesse du matin au soir.", "Écouter bütün gün", p("l1-7")),
  ],
  dialogue: {
    title: "Elif",
    note: "Elif a dix ans ; c'est la petite-fille du dinandier. Dedem — « mon grand-père ». Bakırcı — « dinandier, artisan du cuivre ». Ders çalıştım — « j'ai fait mes devoirs, j'ai étudié ».",
    lines: [
      line("elif", "Merhaba! Ben Elif. Dedem bakırcı. Sen dün ne yaptın?", "Salut ! Je suis Elif. Mon grand-père est dinandier. Qu'est-ce que tu as fait hier ?"),
      line("murzik", "Dün çarşıya gittim. Baklava yedim!", "Hier, je suis allé au bazar. J'ai mangé du baklava !"),
      line("elif", "Ne aldın?", "Qu'est-ce que tu as acheté ?"),
      line("murzik", "Biraz pul biber aldım. Sen ne yaptın?", "J'ai acheté du piment rouge en flocons. Et toi, qu'est-ce que tu as fait ?"),
      line("elif", "Ben bütün gün ders çalıştım. Tom ne yaptı?", "J'ai fait mes devoirs toute la journée. Et Tom, qu'est-ce qu'il a fait ?"),
      line("tom", "Ben mi? Hiçbir şey yapmadım. Uyudum!", "Moi ? Je n'ai rien fait. J'ai dormi !"),
    ],
    gist: choice("trga1-d1", "Qu'a fait Elif hier ?", [
      ["Elle a fait ses devoirs toute la journée.", true],
      ["Elle est allée au bazar.", false],
      ["Elle a dormi.", false],
    ]),
  },
  grammar: [
    {
      title: "Le passé : je, tu, il",
      paragraphs: [
        "Le passé : gittim (je suis allé), gittin (tu es allé), gitti (il / elle est allé(e)). La terminaison est -dı / -tı (selon l'harmonie vocalique), puis -m pour « je » ou -n pour « tu ».",
        "Une question avec un mot interrogatif n'a pas de mı : Ne yaptın? Nereye gittin? Une question fermée (oui / non) prend mı : Baklava yedin mi? — Tu as mangé du baklava ?",
      ],
      examples: [
        { ru: "Dün akşam film izledim.", en: "Hier soir, j'ai regardé un film." },
        { ru: "Elif okula gitti.", en: "Elif est allée à l'école." },
      ],
    },
  ],
  tasks: [
    choice("trga1-t1", "Comment dit-on « J'ai mangé du baklava » ?", [
      ["Baklava yedim.", true],
      ["Baklava yedin.", false],
      ["Baklava yiyorum.", false],
    ], { skill: "grammar" }),
    listen("trga1-t2", "Écoute. Qu'a fait la personne qui parle hier ?", "Dün akşam arkadaşımla yemek yaptım.", [
      ["Elle a cuisiné avec un ami.", true],
      ["Elle est allée au cinéma avec un ami.", false],
      ["Elle a dormi toute la journée.", false],
    ]),
    match("trga1-t3", "Associe les paires.", [
      ["gittim", "je suis allé"],
      ["yedim", "j'ai mangé"],
      ["aldın", "tu as acheté"],
      ["yaptı", "il a fait"],
    ], { skill: "words" }),
    missing("trga1-t4", "Quelle lettre manque ? (« baklava »)", "bak", "ava", "l", ["l", "r", "n"]),
    speak("trga1-t5", "Dün ne yaptın?", "Dün çarşıya gittim ve baklava yedim.", "Hier, je suis allé au bazar et j'ai mangé du baklava.", { help: "Dis à voix haute ce que tu as fait hier." }),
    choice("trga1-t6", "Comment demander « Il y a un musée ici ? »", [
      ["Burada müze var mı?", true],
      ["Burada müze mi?", false],
      ["Müze burada yok mu var?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pul-biber",
    itemName: "Sachet de piment rouge",
    itemNameRu: "Pul biber",
    ru: "Yaşasın! Pul biber!",
    en: "Hourra ! Du piment rouge en flocons !",
    a11y: "Un petit sachet en lin de piment rouge en flocons, fermé par une ficelle.",
    image: p("pul-biber"),
    steps: ["Murzik rapporte du bazar un sachet de piment.", "Il sent le soleil et la fumée.", "« Az koy, çok acı! » rit Elif. « Juste un peu — ça pique ! »", "Le sachet est accroché à une patère dans sa chambre."],
    bridge: "Le lendemain, Elif frappe à la porte : « Neredeydin? Seni bekledim! » — « Où étais-tu ? Je t'ai attendu ! »",
  },
};

const gaziantep2: Lesson = {
  id: "tr-a1-gaziantep-2",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 2,
  title: "Où étais-tu ?",
  minutes: 7,
  goals: ["Demander : Neredeydin?", "Dire où on était et avec qui", "Connaître toutes les formes du passé : nous, vous, ils"],
  vocabNote: "Neredeydin? — « Où étais-tu ? » Evdeydim — « j'étais à la maison ». Kiminle? — « Avec qui ? » Tom'la — « avec Tom ».",
  vocab: [
    v("trga2-1", "Neredeydin?", "Où étais-tu ?", "Elif se tient les mains sur les hanches.", "Écouter Neredeydin", p("l2-1")),
    v("trga2-2", "Müzedeydim.", "J'étais au musée.", "Murzik devant une immense mosaïque antique.", "Écouter Müzedeydim", p("l2-2")),
    v("trga2-3", "Kiminle?", "Avec qui ?", "Elif penche la tête, curieuse.", "Écouter Kiminle", p("l2-3")),
    v("trga2-4", "Tom'la gittik.", "J'y suis allé avec Tom.", "Murzik et Tom marchent côte à côte dans une vieille rue.", "Écouter Tom'la gittik", p("l2-4")),
    v("trga2-5", "Siz ne gördünüz?", "Et qu'est-ce que vous avez vu ?", "Elif s'assoit à côté d'eux, prête à écouter.", "Écouter Siz ne gördünüz", p("l2-5")),
    v("trga2-6", "Çingene Kızı", "« La Petite Gitane » (une mosaïque)", "Une mosaïque célèbre : le visage d'une fille aux grands yeux tristes.", "Écouter Çingene Kızı", p("l2-6")),
    v("trga2-7", "Seni bekledim!", "Je t'ai attendu !", "Elif montre l'horloge.", "Écouter Seni bekledim", p("l2-7")),
  ],
  dialogue: {
    title: "La mosaïque",
    note: "Çingene Kızı (« La Petite Gitane ») est une célèbre mosaïque antique du musée de Zeugma, à Gaziantep. Gözleri — « ses yeux ». Takip ediyor — « suivent ». Tom'la gittik veut dire mot à mot « nous sommes allés avec Tom » — en turc, on dit « nous » ici.",
    lines: [
      line("elif", "Murzik! Neredeydin? Seni bekledim!", "Murzik ! Où étais-tu ? Je t'ai attendu !"),
      line("murzik", "Müzedeydim. Özür dilerim!", "J'étais au musée. Pardon !"),
      line("elif", "Kiminle?", "Avec qui ?"),
      line("murzik", "Tom'la gittik. Mozaikleri gördük.", "J'y suis allé avec Tom. On a vu les mosaïques."),
      line("elif", "Çingene Kızı'nı gördünüz mü?", "Tu as vu « La Petite Gitane » ?"),
      line("tom", "Evet, gördük! Gözleri insanı takip ediyor!", "Oui, on l'a vue ! Ses yeux te suivent partout !"),
      line("elif", "Evet! Ben de geçen yıl sınıfımla gittim.", "Oui ! J'y suis allée l'année dernière avec ma classe."),
    ],
    gist: choice("trga2-d1", "Où était Murzik ?", [
      ["Au musée avec Tom.", true],
      ["Au bazar avec Elif.", false],
      ["À la maison, tout seul.", false],
    ]),
  },
  grammar: [
    {
      title: "Le passé : toutes les personnes",
      paragraphs: [
        "Gitmek au passé : gittim (je), gittin (tu), gitti (il, elle), gittik (nous), gittiniz (vous, pluriel ou poli), gittiler (ils, elles).",
        "« Être » quelque part au passé, c'est -daydım, -deydin… : evdeydim (j'étais à la maison), neredeydin? (où étais-tu ?), müzedeydik (nous étions au musée).",
      ],
      examples: [
        { ru: "Dün Tom'la parktaydık.", en: "Hier, Tom et moi, on était au parc." },
        { ru: "Onlar dün akşam geldiler.", en: "Ils sont arrivés hier soir." },
      ],
    },
  ],
  tasks: [
    choice("trga2-t1", "Comment dit-on « nous avons vu » ?", [
      ["gördük", true],
      ["gördünüz", false],
      ["gördüler", false],
    ], { skill: "grammar" }),
    listen("trga2-t2", "Écoute. Où étaient les personnes qui parlent, hier ?", "Dün sinemadaydık.", [
      ["Au cinéma.", true],
      ["Au musée.", false],
      ["À la maison.", false],
    ]),
    match("trga2-t3", "Associe les paires.", [
      ["gittik", "nous sommes allés"],
      ["gittiniz", "vous êtes allés"],
      ["gittiler", "ils sont allés"],
      ["Kiminle?", "Avec qui ?"],
    ], { skill: "words" }),
    missing("trga2-t4", "Quelle lettre manque ? (« Où étais-tu ? »)", "Nered", "ydin?", "e", ["e", "a", "i"]),
    speak("trga2-t5", "Dün neredeydin?", "Dün evdeydim. Annemle yemek yaptık.", "Hier, j'étais à la maison. Maman et moi, on a cuisiné.", { help: "Dis à voix haute où tu étais hier et avec qui." }),
    listen("trga2-t6", "Souviens-toi de la leçon précédente. Quelle est la question ?", "Dün ne yaptın?", [
      ["Qu'as-tu fait hier ?", true],
      ["Où étiez-vous hier ?", false],
      ["Qu'est-ce que tu feras demain ?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "masa-ortusu",
    itemName: "Nappe brodée",
    itemNameRu: "Masa örtüsü",
    ru: "Yaşasın! İşlemeli bir masa örtüsü!",
    en: "Hourra ! Une nappe brodée !",
    a11y: "Une nappe blanche brodée sur le bord de grenades et de brins de pistachier.",
    image: p("masa-ortusu"),
    steps: ["La grand-mère d'Elif brode des nappes.", "Elle en offre une à Murzik, avec des grenades et des pistaches sur le bord.", "Murzik l'étale sur sa petite table.", "Aussitôt, la chambre prend un air de fête."],
    bridge: "Elif supplie : « Bana her şeyi anlat! Nasıl başladı? » — « Raconte-moi tout ! Comment ça a commencé ? »",
  },
};

const gaziantep3: Lesson = {
  id: "tr-a1-gaziantep-3",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 3,
  title: "Comment tout a commencé",
  minutes: 7,
  goals: ["Raconter une histoire dans l'ordre : önce, sonra, sonunda", "Dire « soudain » : birden", "Raconter le début du voyage"],
  vocabNote: "Önce — « d'abord », sonra — « ensuite, après », birden — « soudain », sonunda — « à la fin, finalement ».",
  vocab: [
    v("trga3-1", "Önce Paris'teydim.", "D'abord, j'étais à Paris.", "Un souvenir : Murzik sur un toit de Paris, la tour Eiffel au loin.", "Écouter Önce Paris'teydim", p("l3-1")),
    v("trga3-2", "Birden bir kartpostal geldi.", "Soudain, une carte postale est arrivée.", "Une carte postale entre par la fenêtre et Murzik l'attrape entre ses pattes.", "Écouter Birden bir kartpostal geldi", p("l3-2")),
    v("trga3-3", "Sonra İstanbul'a geldim.", "Ensuite, je suis venu à Istanbul.", "Un souvenir : un ferry sur le Bosphore, avec des mouettes.", "Écouter Sonra İstanbul'a geldim", p("l3-3")),
    v("trga3-4", "Orada Tom'la tanıştım.", "Là-bas, j'ai rencontré Tom.", "Un souvenir : Tom avec son appareil photo tend la main à Murzik sur le quai de Kadıköy.", "Écouter Orada Tom'la tanıştım", p("l3-4")),
    v("trga3-5", "Sonunda buraya geldik.", "Et finalement, nous sommes venus ici.", "Murzik et Elif sont assis sur les marches de la boutique de cuivre.", "Écouter Sonunda buraya geldik", p("l3-5")),
    v("trga3-6", "büyükannem", "ma grand-mère", "Une vieille carte postale signée « Asya ».", "Écouter büyükannem", p("l3-6")),
    v("trga3-7", "Vay be!", "Ouah !", "Elif a les yeux et la bouche grands ouverts.", "Écouter Vay be", p("l3-7")),
  ],
  dialogue: {
    title: "Une histoire sur les marches",
    note: "Kayboldu — « elle a disparu ». Arıyorum — « je cherche ». Tanışmak — « faire la connaissance de » : Tom'la tanıştım — « j'ai rencontré Tom ».",
    lines: [
      line("elif", "Anlat! Her şey nasıl başladı?", "Raconte ! Comment tout a commencé ?"),
      line("murzik", "Önce Paris'teydim. Büyükannem Asya yıllar önce kayboldu.", "D'abord, j'étais à Paris. Ma grand-mère Asya a disparu il y a des années."),
      line("murzik", "Birden bir kartpostal geldi: «İzimi takip et. — Asya»", "Soudain, une carte postale est arrivée : « Suis mes traces. — Asya »"),
      line("elif", "Vay be! Sonra?", "Ouah ! Et ensuite ?"),
      line("murzik", "Sonra İstanbul'a geldim. Orada Tom'la tanıştım. Sonra Bursa'ya, İzmir'e gittik…", "Ensuite, je suis venu à Istanbul. Là-bas, j'ai rencontré Tom. Puis on est allés à Bursa, à Izmir…"),
      line("murzik", "Sonunda buraya geldik. Ve hâlâ onu arıyorum.", "Et finalement, nous sommes venus ici. Et je la cherche toujours."),
    ],
    gist: choice("trga3-d1", "Que disait la première carte postale ?", [
      ["« Suis mes traces. — Asya »", true],
      ["« Joyeux anniversaire, mon petit »", false],
      ["« Viens à Konya. — Asya »", false],
    ]),
  },
  grammar: [
    {
      title: "Raconter une histoire dans l'ordre",
      paragraphs: [
        "Önce — d'abord, sonra — ensuite, birden — soudain, sonunda — finalement. Ces mots se mettent d'habitude en début de phrase.",
        "« Après quelque chose », c'est -den sonra : kahvaltıdan sonra (après le petit-déjeuner). « Avant quelque chose », c'est -den önce : yemekten önce (avant le repas). Remarque la terminaison : le turc dit « du petit-déjeuner après ».",
      ],
      examples: [
        { ru: "Önce kahvaltı yaptık, sonra müzeye gittik.", en: "D'abord, on a pris le petit-déjeuner, ensuite on est allés au musée." },
        { ru: "Okuldan sonra Elif dedesine gidiyor.", en: "Après l'école, Elif va chez son grand-père." },
      ],
    },
  ],
  tasks: [
    choice("trga3-t1", "Comment dit-on « après le petit-déjeuner » ?", [
      ["kahvaltıdan sonra", true],
      ["kahvaltı sonra", false],
      ["kahvaltıda sonra", false],
    ], { skill: "grammar" }),
    listen("trga3-t2", "Écoute. Qu'ont-ils fait d'abord ?", "Önce çay içtik, sonra çarşıya gittik.", [
      ["Ils ont bu du thé.", true],
      ["Ils sont allés au bazar.", false],
      ["Ils sont allés au musée.", false],
    ]),
    match("trga3-t3", "Associe les paires.", [
      ["önce", "premier"],
      ["sonra", "ensuite"],
      ["birden", "soudain"],
      ["sonunda", "finalement"],
    ], { skill: "words" }),
    spell("trga3-t4", "Épelle le mot « soudain ».", "birden"),
    speak("trga3-t5", "Bugün sabah ne yaptın?", "Önce kahvaltı yaptım, sonra işe gittim.", "D'abord, j'ai pris le petit-déjeuner, ensuite je suis allé au travail.", { help: "Dis à voix haute, dans l'ordre, ce que tu as fait ce matin." }),
    choice("trga3-t6", "Comment demander « Où étais-tu ? »", [
      ["Neredeydin?", true],
      ["Nereye gittin mi?", false],
      ["Nerede misin?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fistik",
    itemName: "Sac de pistaches",
    itemNameRu: "Fıstık",
    ru: "Yaşasın! Antep fıstığı!",
    en: "Hourra ! Des pistaches !",
    a11y: "Un sac en tissu plein de pistaches vert vif.",
    image: p("fistik"),
    steps: ["Elif écoute l'histoire en grignotant des pistaches.", "« Antep fıstığı dünyanın en iyisi! » — « Les pistaches d'Antep sont les meilleures du monde ! »", "Elle en remplit tout un sac pour Murzik.", "Le sac va sur la nappe."],
    bridge: "Elif demande : « Kartpostal gelince ne hissettin? » — « Qu'est-ce que tu as ressenti quand la carte est arrivée ? »",
  },
};

const gaziantep4: Lesson = {
  id: "tr-a1-gaziantep-4",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 4,
  title: "Qu'as-tu ressenti ?",
  minutes: 7,
  goals: ["Parler de ses sentiments au passé", "Dire « j'ai eu peur », « j'étais ravi »", "Demander : Ne hissettin?"],
  vocabNote: "En turc, les sentiments au passé sonnent comme des actions : korktum — « j'ai eu peur », sevindim — « je me suis réjoui », şaşırdım — « j'ai été surpris ».",
  vocab: [
    v("trga4-1", "Ne hissettin?", "Qu'as-tu ressenti ?", "Elif écoute, le menton sur le poing.", "Écouter Ne hissettin", p("l4-1")),
    v("trga4-2", "Çok şaşırdım.", "J'ai été très surpris.", "Un souvenir : Murzik tient la carte postale, les yeux comme des soucoupes.", "Écouter Çok şaşırdım", p("l4-2")),
    v("trga4-3", "Çok mutlu oldum.", "J'étais très heureux.", "Un souvenir : Murzik saute de joie.", "Écouter Çok mutlu oldum", p("l4-3")),
    v("trga4-4", "Biraz korktum.", "J'ai eu un peu peur.", "Un souvenir : Murzik près de l'avion, les oreilles aplaties.", "Écouter Biraz korktum", p("l4-4")),
    v("trga4-5", "Üzüldüm.", "J'étais triste.", "Un souvenir : Murzik seul à la fenêtre, sous la pluie.", "Écouter Üzüldüm", p("l4-5")),
    v("trga4-6", "Heyecanlandım.", "J'étais tout excité.", "Un souvenir : Murzik sur le pas de la porte avec sa valise.", "Écouter Heyecanlandım", p("l4-6")),
    v("trga4-7", "Çok cesursun!", "Tu es très courageux !", "Elif regarde Murzik avec admiration.", "Écouter Çok cesursun", p("l4-7")),
  ],
  dialogue: {
    title: "Ce qu'il a ressenti",
    note: "Uçak — « avion ». İlk defa — « pour la première fois ». Cesur — « courageux ». Gelince — « quand (elle) est arrivée ».",
    lines: [
      line("elif", "Kartpostal gelince ne hissettin?", "Qu'est-ce que tu as ressenti quand la carte est arrivée ?"),
      line("murzik", "Önce çok şaşırdım. Sonra çok sevindim!", "D'abord, j'ai été très surpris. Ensuite, j'étais vraiment content !"),
      line("elif", "Korktun mu?", "Tu as eu peur ?"),
      line("murzik", "Biraz korktum. İlk defa uçağa bindim!", "Un peu. C'était la première fois que je prenais l'avion !"),
      line("murzik", "Bavulum kayboldu, çok üzüldüm. Ama sonra bulundu.", "Ma valise s'est perdue et j'étais très triste. Mais ensuite, on l'a retrouvée."),
      line("elif", "Çok cesursun, Murzik!", "Tu es très courageux, Murzik !"),
    ],
    gist: choice("trga4-d1", "Qu'a ressenti Murzik quand la carte est arrivée ?", [
      ["D'abord de la surprise, puis de la joie.", true],
      ["D'abord de la peur, puis de la tristesse.", false],
      ["Il n'a rien ressenti.", false],
    ]),
  },
  grammar: [
    {
      title: "Les sentiments : le passé au lieu du présent",
      paragraphs: [
        "Quand un sentiment est déjà là, le turc utilise souvent le passé : Acıktım — « j'ai faim » (mot à mot « je suis devenu affamé »), Yoruldum — « je suis fatigué », Anladım — « j'ai compris, d'accord ».",
        "C'est pour ça que « je suis très content » se dit aussi au passé : Çok sevindim! Memnun oldum!",
      ],
      examples: [
        { ru: "Acıktım! Yemek var mı?", en: "J'ai faim ! Il y a à manger ?" },
        { ru: "Seni gördüğüme çok sevindim.", en: "Je suis si content de te voir." },
      ],
    },
  ],
  tasks: [
    choice("trga4-t1", "Comment dit-on « Je suis fatigué » ?", [
      ["Yoruldum.", true],
      ["Yoruluyorum.", false],
      ["Yorgunum değil.", false],
    ], { skill: "grammar" }),
    listen("trga4-t2", "Écoute. Qu'a ressenti la personne qui parle ?", "Sınavı geçtim, çok sevindim!", [
      ["De la joie.", true],
      ["De la peur.", false],
      ["Triste.", false],
    ]),
    match("trga4-t3", "Associe les paires.", [
      ["korktum", "j'ai eu peur"],
      ["sevindim", "je me suis réjoui"],
      ["şaşırdım", "j'ai été surpris"],
      ["üzüldüm", "j'étais triste"],
    ], { skill: "words" }),
    missing("trga4-t4", "Quelle lettre manque ? (« j'ai été surpris »)", "Şa", "ırdım", "ş", ["ş", "s", "z"]),
    speak("trga4-t5", "İlk defa uçağa bindin. Ne hissettin?", "Biraz korktum, ama çok heyecanlandım.", "J'ai eu un peu peur, mais j'étais très excité.", { help: "Dis à voix haute ce que tu as ressenti." }),
    choice("trga4-t6", "Comment dit-on « D'abord, on a bu du thé, ensuite on est allés au bazar » ?", [
      ["Önce çay içtik, sonra çarşıya gittik.", true],
      ["Sonra çay içtik, önce çarşıya gittik.", false],
      ["Önce çay içiyoruz, sonra çarşı.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "elifin-resmi",
    itemName: "Le dessin d'Elif",
    itemNameRu: "Elif'in resmi",
    ru: "Yaşasın! Elif'in resmi!",
    en: "Hourra ! Le dessin d'Elif !",
    a11y: "Un dessin d'enfant aux crayons de couleur : un chaton roux avec une valise marche sur un chemin de cartes postales ; devant, la silhouette d'un chat.",
    image: p("elifin-resmi"),
    steps: ["Elif dessine pendant que Murzik parle.", "Sur le dessin, un chaton roux avec une valise marche sur un chemin de cartes postales.", "« Bu sensin! » — « Ça, c'est toi ! »", "Murzik accroche le dessin au mur."],
    bridge: "Elif demande : « Büyükanneni buldun mu? » — « Tu as retrouvé ta grand-mère ? » Murzik soupire : « Henüz değil… » — « Pas encore… »",
  },
};

const gaziantep5: Lesson = {
  id: "tr-a1-gaziantep-5",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 5,
  title: "Déjà, ou pas encore ?",
  minutes: 7,
  goals: ["Dire « déjà » : zaten", "Dire « pas encore » : henüz … -medi", "Demander : … bitti mi?"],
  vocabNote: "Zaten — « déjà, de toute façon » : Zaten biliyorum — « Je le sais déjà ». Henüz — « (pas) encore », d'habitude avec une négation : Henüz bitmedi — « Ce n'est pas encore fini ».",
  vocab: [
    v("trga5-1", "Büyükanneni buldun mu?", "Tu as retrouvé ta grand-mère ?", "Elif touche doucement la patte de Murzik.", "Écouter Büyükanneni buldun mu", p("l5-1")),
    v("trga5-2", "Henüz bulmadım.", "Je ne l'ai pas encore retrouvée.", "Murzik regarde le coucher de soleil au-dessus du bazar.", "Écouter Henüz bulmadım", p("l5-2")),
    v("trga5-3", "Zaten biliyorum.", "Je le sais déjà.", "Elif fait un geste de la main : « Je sais, je sais ! »", "Écouter Zaten biliyorum", p("l5-3")),
    v("trga5-4", "Ödevin bitti mi?", "Tu as fini tes devoirs ?", "Le grand-père dinandier jette un œil au cahier d'Elif.", "Écouter Ödevin bitti mi", p("l5-4")),
    v("trga5-5", "Henüz bitmedi.", "Ce n'est pas encore fini.", "Le cahier d'Elif a encore beaucoup de lignes vides.", "Écouter Henüz bitmedi", p("l5-5")),
    v("trga5-6", "Zaten yedim.", "J'ai déjà mangé.", "Murzik tapote son ventre bien rond.", "Écouter Zaten yedim", p("l5-6")),
    v("trga5-7", "Hikâye henüz bitmedi!", "L'histoire n'est pas encore finie !", "Murzik serre la patte, déterminé.", "Écouter Hikâye henüz bitmedi", p("l5-7")),
  ],
  dialogue: {
    title: "Ce n'est pas encore la fin",
    note: "Dede — « grand-père ». Ödev — « devoirs ». Kebap — « kebab ». Remarque : comme le français « tu as retrouvé… ? », le turc utilise simplement le passé : buldun mu?",
    lines: [
      line("elif", "Büyükanneni buldun mu?", "Tu as retrouvé ta grand-mère ?"),
      line("murzik", "Henüz bulmadım… Ama hikâye henüz bitmedi!", "Pas encore… Mais l'histoire n'est pas encore finie !"),
      line("tom", "Elif, ödevin bitti mi? Deden soruyor.", "Elif, tu as fini tes devoirs ? Ton grand-père demande."),
      line("elif", "Henüz bitmedi. Ama matematiği zaten biliyorum!", "Pas encore. Mais les maths, je les connais déjà !"),
      line("tom", "Kebap yiyelim mi?", "On mange un kebab ?"),
      line("murzik", "Ben zaten yedim! Baklava…", "J'ai déjà mangé ! Du baklava…"),
    ],
    gist: choice("trga5-d1", "Murzik a-t-il retrouvé sa grand-mère ?", [
      ["Pas encore.", true],
      ["Oui, à Van.", false],
      ["Oui, à Gaziantep.", false],
    ]),
  },
  grammar: [
    {
      title: "Zaten et henüz",
      paragraphs: [
        "Zaten — « déjà, de toute façon » : Zaten yedim. — J'ai déjà mangé. Zaten biliyorum. — Je le sais déjà.",
        "Henüz — « (pas) encore », d'habitude avec un verbe négatif. Henüz yemedim. — Je n'ai pas encore mangé. Henüz gelmedi. — Il n'est pas encore venu. La réponse courte, c'est Henüz değil. — Pas encore.",
        "Le turc n'a qu'un seul passé de base : yedim veut dire à la fois « j'ai mangé » et « je mangeai ».",
      ],
      examples: [
        { ru: "Tom henüz uyanmadı.", en: "Tom ne s'est pas encore réveillé." },
        { ru: "Bu filmi zaten izledim.", en: "J'ai déjà vu ce film." },
      ],
    },
  ],
  tasks: [
    choice("trga5-t1", "Comment dit-on « Je n'ai pas encore mangé » ?", [
      ["Henüz yemedim.", true],
      ["Henüz yedim.", false],
      ["Zaten yemedim.", false],
    ], { skill: "grammar" }),
    listen("trga5-t2", "Écoute. Le bus est-il arrivé ?", "Otobüs henüz gelmedi.", [
      ["Pas encore.", true],
      ["Oui, il est arrivé.", false],
      ["Il ne vient pas.", false],
    ]),
    match("trga5-t3", "Associe les paires.", [
      ["zaten", "déjà, de toute façon"],
      ["henüz değil", "pas encore"],
      ["bitti", "c'est fini"],
      ["ödev", "devoirs"],
    ], { skill: "words" }),
    spell("trga5-t4", "Épelle le mot « devoirs ».", "ödev"),
    speak("trga5-t5", "Kahvaltı yaptın mı?", "Evet, zaten yaptım.", "Oui, je l'ai déjà pris.", { help: "Réponds à voix haute avec zaten ou henüz." }),
    listen("trga5-t6", "Souviens-toi de la leçon précédente. Qu'a ressenti Murzik ?", "Çok şaşırdım.", [
      ["Il a été très surpris.", true],
      ["Il était très fatigué.", false],
      ["Il a eu très peur.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gezi-gunlugu",
    itemName: "Carnet de voyage",
    itemNameRu: "Gezi günlüğü",
    ru: "Yaşasın! Bir gezi günlüğü!",
    en: "Hourra ! Un carnet de voyage !",
    a11y: "Un épais carnet à couverture de cuir gravée d'une boussole ; dedans, des pages blanches.",
    image: p("gezi-gunlugu"),
    steps: ["Tom tend un épais carnet à Murzik.", "« Hikâyeni yaz. Henüz bitmedi! » — « Écris ton histoire. Elle n'est pas encore finie ! »", "Sur la première page, Murzik écrit : « Paris ».", "Le carnet va à côté du dessin d'Elif."],
    bridge: "Le soir, Elif demande : « Fotoğraflarını göster! » — « Montre-moi tes photos ! »",
  },
};

const gaziantep6: Lesson = {
  id: "tr-a1-gaziantep-6",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 6,
  title: "Tu te souviens ?",
  minutes: 7,
  goals: ["Demander : Hatırlıyor musun?", "Montrer et décrire une photo", "Dire « je n'ai pas remarqué »"],
  vocabNote: "Fark etmek — « remarquer ». Fark etmedim — « je n'ai pas remarqué ». Tesadüf — « coïncidence, hasard ».",
  vocab: [
    v("trga6-1", "Hatırlıyor musun?", "Tu te souviens ?", "Tom montre une photo du bord de mer sur l'écran de son appareil.", "Écouter Hatırlıyor musun", p("l6-1")),
    v("trga6-2", "Bu fotoğrafı İzmir'de çektim.", "J'ai pris cette photo à Izmir.", "Une photo du front de mer d'Izmir au coucher du soleil.", "Écouter Bu fotoğrafı İzmir'de çektim", p("l6-2")),
    v("trga6-3", "Bak, yine o!", "Regarde, c'est encore lui !", "Elif pointe du doigt le coin de la photo.", "Écouter Bak, yine o", p("l6-3")),
    v("trga6-4", "Her fotoğrafta var!", "Il est sur toutes les photos !", "Un éventail de photos sur la table ; sur chacune, un minuscule chat blanc au chapeau.", "Écouter Her fotoğrafta var", p("l6-4")),
    v("trga6-5", "Hiç fark etmedim.", "Je n'ai rien remarqué du tout.", "Tom se prend la tête.", "Écouter Hiç fark etmedim", p("l6-5")),
    v("trga6-6", "Bu tesadüf değil.", "Ce n'est pas un hasard.", "Murzik regarde les photos, sérieux.", "Écouter Bu tesadüf değil", p("l6-6")),
    v("trga6-7", "Bizi takip ediyor.", "Il nous suit.", "L'ombre d'un chat au chapeau sur le mur.", "Écouter Bizi takip ediyor", p("l6-7")),
  ],
  dialogue: {
    title: "Les photos de Tom",
    note: "Fotoğraf çekmek — « prendre une photo » : çektim — « j'ai pris ». Köşede — « dans le coin ».",
    lines: [
      line("tom", "Murzik, bu fotoğrafı hatırlıyor musun? İzmir'de çektim.", "Murzik, tu te souviens de cette photo ? Je l'ai prise à Izmir."),
      line("elif", "Bak! Köşede bir kedi var. Şapkalı!", "Regarde ! Il y a un chat dans le coin. Avec un chapeau !"),
      line("tom", "Bu da İstanbul… Bak, yine o!", "Et ça, c'est Istanbul… Regarde, c'est encore lui !"),
      line("murzik", "Bursa, Kapadokya, Trabzon… Her fotoğrafta var!", "Bursa, la Cappadoce, Trabzon… Il est sur toutes les photos !"),
      line("tom", "Hiç fark etmedim!", "Je ne l'avais pas du tout remarqué sur ces photos !"),
      line("murzik", "Bu tesadüf değil, Tom. Bizi takip ediyor.", "Ce n'est pas un hasard, Tom. Il nous suit."),
    ],
    gist: choice("trga6-d1", "Qu'a repéré Elif sur les photos de Tom ?", [
      ["Le chat au chapeau sur toutes les photos.", true],
      ["Grand-mère Asya.", false],
      ["La valise perdue.", false],
    ]),
  },
  grammar: [
    {
      title: "N'a pas fait : révision",
      paragraphs: [
        "La négation au passé : fark et-me-di-m (je n'ai pas remarqué), gör-me-di-k (nous n'avons pas vu), gel-me-di-ler (ils ne sont pas venus). Le -me- / -ma- se met juste après le radical du verbe.",
        "Hiç avec une négation veut dire « pas du tout, jamais » : Hiç görmedim. — Je ne l'ai jamais vu. Hiç fark etmedik. — Nous n'avons rien remarqué du tout.",
      ],
      examples: [
        { ru: "Onu hiç görmedik.", en: "Nous ne l'avons jamais vu." },
        { ru: "Elif ödevini unutmadı.", en: "Elif n'a pas oublié ses devoirs." },
      ],
    },
  ],
  tasks: [
    choice("trga6-t1", "Comment dit-on « Nous ne l'avons jamais vu » ?", [
      ["Hiç görmedik.", true],
      ["Hiç gördük.", false],
      ["Hiç görmüyoruz değil.", false],
    ], { skill: "grammar" }),
    listen("trga6-t2", "Écoute. Où la photo a-t-elle été prise ?", "Bu fotoğrafı Antalya'da çektim.", [
      ["À Antalya.", true],
      ["À Ankara.", false],
      ["À Izmir.", false],
    ]),
    match("trga6-t3", "Associe les paires.", [
      ["fark etmek", "remarquer"],
      ["tesadüf", "coïncidence, hasard"],
      ["köşede", "dans le coin"],
      ["yine", "encore, de nouveau"],
    ], { skill: "words" }),
    missing("trga6-t4", "Quelle lettre manque ? (« photo »)", "fo", "oğraf", "t", ["t", "d", "f"]),
    speak("trga6-t5", "Bu fotoğrafı nerede çektin?", "Bu fotoğrafı İstanbul'da çektim.", "J'ai pris cette photo à Istanbul.", { help: "Dis à voix haute où tu as pris une photo." }),
    choice("trga6-t6", "Comment dit-on « Pas encore » ?", [
      ["Henüz değil.", true],
      ["Zaten değil.", false],
      ["Henüz var.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fotograf-albumu",
    itemName: "Album photo",
    itemNameRu: "Fotoğraf albümü",
    ru: "Yaşasın! Bir fotoğraf albümü!",
    en: "Hourra ! Un album photo !",
    a11y: "Un grand album photo aux pages en carton, avec des photos de toutes les villes de Turquie.",
    image: p("fotograf-albumu"),
    steps: ["Tom fait imprimer ses photos dans une boutique du bazar.", "Murzik les colle dans un grand album.", "Sous chaque photo, il écrit le nom de la ville.", "Et dans le coin de chacune — lui. Le chat au chapeau."],
    bridge: "Demain, Murzik racontera toute l'histoire — au grand-père d'Elif.",
  },
};

const gaziantep7: Lesson = {
  id: "tr-a1-gaziantep-7",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 7,
  title: "Toute l'histoire",
  minutes: 8,
  goals: ["Raconter une histoire dans l'ordre, au passé", "Répondre à des questions sur le voyage", "Réviser tous les mots de Gaziantep"],
  vocabNote: "Yolculuk — « voyage ». Şimdiye kadar — « jusqu'ici, jusqu'à présent ».",
  vocab: [
    v("trga7-1", "Şimdiye kadar on üç şehir gördüm.", "Jusqu'ici, j'ai vu treize villes.", "Une carte de la Turquie avec un drapeau à empreinte de patte sur chaque ville.", "Écouter Şimdiye kadar on üç şehir gördüm", p("l7-1")),
    v("trga7-2", "En çok hangi şehri sevdin?", "Quelle ville t'a le plus plu ?", "Le grand-père d'Elif, en tablier de cuir, interroge Murzik.", "Écouter En çok hangi şehri sevdin", p("l7-2")),
    v("trga7-3", "Hepsini sevdim!", "Elles m'ont toutes plu !", "Murzik ouvre grand les pattes comme pour serrer le monde entier dans ses bras.", "Écouter Hepsini sevdim", p("l7-3")),
    v("trga7-4", "yolculuk", "voyage", "La valise de Murzik, couverte d'autocollants de villes.", "Écouter yolculuk", p("l7-4")),
    v("trga7-5", "Çok şey öğrendim.", "J'ai appris beaucoup de choses.", "Murzik feuillette son carnet de voyage.", "Écouter Çok şey öğrendim", p("l7-5")),
    v("trga7-6", "bakır tepsi", "plateau en cuivre", "Un plateau en cuivre brillant à motif de grenades.", "Écouter bakır tepsi", p("l7-6")),
    v("trga7-7", "Yolun açık olsun!", "Bon voyage !", "Le grand-père d'Elif pose la main sur la tête de Murzik.", "Écouter Yolun açık olsun", p("l7-7")),
  ],
  dialogue: {
    title: "Le grand-père dinandier",
    note: "Le grand-père d'Elif est dinandier ; Elif transmet ses paroles. Sabahtan akşama kadar — « du matin au soir ». Yolun açık olsun — mot à mot « que ta route soit ouverte ». Diyor ki — « il dit que ».",
    lines: [
      line("elif", "Dedem soruyor: En çok hangi şehri sevdin?", "Grand-père demande : quelle ville t'a le plus plu ?"),
      line("murzik", "Hepsini sevdim! Önce İstanbul'u gördüm, sonra denizi, sonra dağları…", "Elles m'ont toutes plu ! D'abord, j'ai vu Istanbul, puis la mer, puis les montagnes…"),
      line("murzik", "Çok şey öğrendim. Ama büyükannemi henüz bulmadım.", "J'ai appris beaucoup de choses. Mais je n'ai pas encore retrouvé ma grand-mère."),
      line("elif", "Dedem bunu senin için yaptı. Sabahtan akşama kadar çalıştı!", "Grand-père a fait ça pour toi. Il a travaillé du matin au soir !"),
      line("murzik", "Bir bakır tepsi! Çok teşekkür ederim!", "Un plateau en cuivre ! Merci beaucoup !"),
      line("elif", "Dedem diyor ki: Yolun açık olsun!", "Grand-père dit : bon voyage !"),
    ],
    gist: choice("trga7-d1", "Qu'a fabriqué le grand-père d'Elif pour Murzik ?", [
      ["Un plateau en cuivre.", true],
      ["Une théière en cuivre.", false],
      ["Un album photo.", false],
    ]),
  },
  grammar: [
    {
      title: "Raconter au passé : tout ensemble",
      paragraphs: [
        "Pour raconter une histoire, il faut le passé (gittim, gördük), les mots de l'ordre (önce, sonra, birden, sonunda) et les sentiments (sevindim, korktum).",
        "Önce Paris'teydim. Birden bir kartpostal geldi. Çok şaşırdım. Sonra Tom'la yola çıktık. Sonunda buraya geldik.",
      ],
      examples: [
        { ru: "Önce Ankara'ya gittik, sonra Trabzon'a.", en: "D'abord, on est allés à Ankara, puis à Trabzon." },
        { ru: "Birden yağmur başladı ve çok üzüldük.", en: "Soudain, il s'est mis à pleuvoir et on était très déçus." },
      ],
    },
  ],
  tasks: [
    listen("trga7-t1", "Examen audio. De quoi parle l'histoire ?", "Önce Van'daydık. Sonra otobüsle buraya geldik. Birden Elif'le tanıştık. Çok sevindim!", [
      ["Ils étaient à Van, sont venus ici en bus et ont rencontré Elif.", true],
      ["Ils étaient à Trabzon, sont arrivés en avion et ont perdu une valise.", false],
      ["Ils étaient à Van, sont allés au musée et ont vu une mosaïque.", false],
    ]),
    choice("trga7-t2", "Comment dit-on « Ils sont venus hier » ?", [
      ["Dün geldiler.", true],
      ["Dün geldik.", false],
      ["Dün geliyorlar.", false],
    ], { skill: "grammar" }),
    match("trga7-t3", "Associe les paires.", [
      ["yolculuk", "voyage"],
      ["bakır", "cuivre"],
      ["öğrendim", "j'ai appris"],
      ["hepsini", "tous, toutes"],
    ], { skill: "words" }),
    spell("trga7-t4", "Épelle le mot « plateau ».", "tepsi"),
    speak("trga7-t5", "Geçen yıl nereye gittin?", "Geçen yıl denize gittim. Çok güzeldi!", "L'année dernière, je suis allé à la mer. C'était génial !", { help: "Raconte à voix haute un voyage que tu as fait." }),
    script("trga7-t6", "Souviens-toi de tout Gaziantep. Complète les conversations.", [
      { speaker: "Elif", text: "Dün ne yaptın?" },
      { speaker: "You", answer: "Önce müzeye gittim, sonra baklava yedim.", options: ["Önce müzeye gittim, sonra baklava yedim.", "Önce müzeye gidiyorum, sonra baklava.", "Henüz değil."] },
      { speaker: "Elif", text: "Kiminle gittin?" },
      { speaker: "You", answer: "Tom'la gittik.", options: ["Tom'la gittik.", "Tom gittik.", "Tom'la gittiler."] },
      { speaker: "Elif", text: "Büyükanneni buldun mu?" },
      { speaker: "You", answer: "Henüz bulmadım.", options: ["Henüz bulmadım.", "Henüz buldum.", "Zaten bulmadım."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bakir-tepsi",
    itemName: "Plateau en cuivre",
    itemNameRu: "Bakır tepsi",
    ru: "Yaşasın! Bir bakır tepsi!",
    en: "Hourra ! Un plateau en cuivre !",
    a11y: "Un plateau en cuivre brillant fait à la main. Des grenades sont martelées sur le bord, et au milieu, un petit chaton roux.",
    image: p("bakir-tepsi"),
    steps: ["Le grand-père d'Elif a tapé avec son petit marteau toute la journée.", "Sur le bord du plateau — des grenades.", "Et au milieu — un petit chaton roux !", "Murzik enveloppe le plateau dans la nappe et le range dans sa valise."],
    bridge: "La dernière ville du niveau A1, c'est Mardin. Un ami de Tom les y attend… et peut-être aussi une réponse.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre au-dessus du bazar du cuivre",
    nameRu: "Bakırcılar Çarşısı'nın üstünde bir oda",
    image: p("home"),
    a11y: "Une chambre vide aux murs de pierre au-dessus du bazar du cuivre. D'en bas montent les coups des petits marteaux. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "bakir-tepsi",
  welcomeRu: "Merhaba, Gaziantep!",
  welcomeEn: "Bonjour, Gaziantep !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom dans le bazar du cuivre de Gaziantep : des cruches et des plateaux en cuivre brillants, et un artisan qui tape avec un petit marteau.",
  departureImage: p("departure"),
  departureA11y: "Elif et son grand-père en tablier de cuir disent au revoir devant la boutique de cuivre.",
  finale: [
    {
      image: p("photos"),
      a11y: "La nuit. Murzik est penché sur l'album photo ouvert. Dans le coin de chaque photo, un chat blanc au chapeau. La dernière page est vide.",
      lines: [
        { en: "La nuit, Murzik feuillette encore l'album." },
        { en: "Istanbul, Bursa, Izmir, la Cappadoce, Trabzon… Il est sur toutes les photos." },
        { ru: "Kimsin sen?", en: "Qui es-tu ?" },
      ],
    },
    {
      image: p("bakir-tepsi"),
      a11y: "Murzik fait le tour de sa chambre au-dessus du bazar du cuivre, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre au-dessus du bazar. Tom la prend en photo pour le magazine." },
        { en: "Murzik emporte le plateau en cuivre au chaton roux." },
        { en: "Le dessin d'Elif va dans le carnet de voyage." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Gaziantep tamamlandı!", en: "Gaziantep, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — treizième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Elif dit au revoir de la main.",
      lines: [
        { ru: "Hoşça kal, Elif!", en: "Au revoir, Elif !" },
        { ru: "Sıradaki durak: Mardin!", en: "Prochain arrêt : Mardin !" },
      ],
    },
    {
      image: p("road"),
      a11y: "Le bus part vers l'est à travers une plaine jaune, vers une ville sur une montagne.",
      lines: [{ ru: "Gaziantep → Mardin", en: "Gaziantep → Mardin" }],
    },
    {
      image: pic("tr/mardin/arrival"),
      a11y: "Murzik et Tom devant Mardin : des maisons de pierre couleur miel montent en gradins à flanc de montagne, au-dessus d'une plaine infinie.",
      lines: [
        { ru: "Merhaba, Mardin!", en: "Bonjour, Mardin !" },
        { ru: "Bütün şehir taştan!", en: "Toute la ville est en pierre !" },
      ],
    },
  ],
};

export const trGaziantepFr = {
  id: "tr-gaziantep",
  name: "Gaziantep",
  nameTr: "Gaziantep",
  lessons: [gaziantep1, gaziantep2, gaziantep3, gaziantep4, gaziantep5, gaziantep6, gaziantep7],
  story,
};
