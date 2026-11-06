import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Bodrum · “Getting around” · on foot and by bike, renting, where to, the museum, the map, “we're lost”, the last evening. French version. */

const p = (name: string) => pic(`tr/bodrum/${name}`);

const bodrum1: Lesson = {
  id: "tr-a1-bodrum-1",
  level: "A1",
  cityId: "tr-bodrum",
  number: 1,
  title: "À pied ou à vélo ?",
  minutes: 7,
  goals: ["Dire comment on va quelque part", "Demander combien de temps dure le trajet", "Parler de ce qui se passe maintenant : -iyor"],
  vocabNote: "Kaptan veut dire « capitaine ». En Turquie, il se met après le prénom : Ali Kaptan, comme Kemal Bey ou Ayşe Teyze.",
  vocab: [
    v("trbo1-1", "yürüyerek", "à pied", "Murzik marche à grands pas dans une rue blanche aux portes bleues.", "Écouter yürüyerek", p("l1-1")),
    v("trbo1-2", "bisiklet", "vélo", "Un vélo bleu ciel avec un panier contre un mur blanc.", "Écouter bisiklet", p("l1-2")),
    v("trbo1-3", "taksi", "taxi", "Un taxi jaune sur le front de mer.", "Écouter taksi", p("l1-3")),
    v("trbo1-4", "tekne", "bateau", "Un bateau en bois se balance dans la baie bleue.", "Écouter tekne", p("l1-4")),
    v("trbo1-5", "Yürüyorum.", "Je marche.", "Murzik marche en balançant les pattes, un petit sac sur le dos.", "Écouter Yürüyorum", p("l1-5")),
    v("trbo1-6", "Bisiklete biniyorum.", "Je fais du vélo.", "Tom roule à vélo, son manteau vert flottant au vent.", "Écouter Bisiklete biniyorum", p("l1-6")),
    v("trbo1-7", "Ne kadar sürer?", "Ça prend combien de temps ?", "Murzik tient un sablier d'un air interrogateur.", "Écouter Ne kadar sürer", p("l1-7")),
  ],
  dialogue: {
    title: "Sur le gulet",
    note: "Un gulet est un voilier en bois — à Bodrum, on y vit et on voyage dessus. Dikkat veut dire « attention ». Dar veut dire « étroit ».",
    lines: [
      line("captain", "Hoş geldiniz! Benim adım Ali. Bu teknenin kaptanıyım.", "Bienvenue ! Je m'appelle Ali. Je suis le capitaine de ce bateau."),
      line("tom", "Merhaba, Ali Kaptan! Kaleye nasıl gidebiliriz?", "Bonjour, capitaine Ali ! Comment on va au château ?"),
      line("captain", "Yürüyerek gidin. Yakın.", "Allez-y à pied. C'est près."),
      line("murzik", "Ne kadar sürer?", "Ça prend combien de temps ?"),
      line("captain", "On dakika. Ama bisikletle beş dakika!", "Dix minutes. Mais à vélo, c'est cinq !"),
      line("tom", "Bisiklet var mı?", "Il y a un vélo ?"),
      line("captain", "Var! Ama dikkat: sokaklar çok dar.", "Oui ! Mais attention : les rues sont très étroites."),
      line("murzik", "Ben yürüyorum. Tom bisiklete biniyor!", "Moi, j'y vais à pied. Tom y va à vélo !"),
    ],
    gist: choice("trbo1-d1", "Comment vont-ils aller au château ?", [
      ["Murzik à pied, Tom à vélo.", true],
      ["Tous les deux en taxi.", false],
      ["En bateau.", false],
    ]),
  },
  grammar: [
    {
      title: "En ce moment : -iyor",
      paragraphs: [
        "Pour ce qui se passe en ce moment — comme « être en train de » en français — on utilise le verbe + -ıyor / -iyor / -uyor / -üyor : bin-iyor — il monte (à vélo, dans un bus). Si le verbe finit par une voyelle, elle se fond avec -yor : yürü-yor — il marche.",
        "Puis vient la terminaison de la personne : yürüyor-um — je marche, yürüyor-sun — tu marches, yürüyor — il / elle marche, yürüyor-uz — nous marchons.",
      ],
      examples: [
        { ru: "Ben yürüyorum, sen bisiklete biniyorsun.", en: "Je marche, et toi, tu fais du vélo." },
        { ru: "Tom taksiyle gidiyor.", en: "Tom y va en taxi." },
      ],
    },
  ],
  tasks: [
    choice("trbo1-t1", "Comment dit-on « Je marche » ?", [
      ["Yürüyorum.", true],
      ["Yürüyorsun.", false],
      ["Yürüdüm.", false],
    ], { skill: "grammar" }),
    listen("trbo1-t2", "Écoute. Comment se déplace la personne qui parle ?", "Taksiyle gidiyorum.", [
      ["En taxi.", true],
      ["À vélo.", false],
      ["À pied.", false],
    ]),
    match("trbo1-t3", "Associe les paires.", [
      ["yürüyerek", "à pied"],
      ["bisiklet", "vélo"],
      ["tekne", "bateau"],
      ["taksi", "taxi"],
    ], { skill: "words" }),
    missing("trbo1-t4", "Quelle lettre manque ? (« à pied »)", "y", "rüyerek", "ü", ["ü", "u", "ı"]),
    speak("trbo1-t5", "Okula nasıl gidiyorsun?", "Otobüsle gidiyorum.", "J'y vais en bus.", { help: "Dis à voix haute comment tu vas à l'école ou au travail." }),
    choice("trbo1-t6", "Comment demander « Qu'est-ce que tu vas faire ce week-end ? »", [
      ["Hafta sonu ne yapacaksın?", true],
      ["Hafta sonu ne yaptın?", false],
      ["Hafta sonu nerede?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bisiklet",
    itemName: "Vélo",
    itemNameRu: "Bisiklet",
    ru: "Yaşasın! Küçük bir bisiklet!",
    en: "Hourra ! Un petit vélo !",
    a11y: "Un petit vélo bleu ciel avec un panier est sur le quai, près du gulet.",
    image: p("bisiklet"),
    steps: ["Un vieux vélo d'enfant est posé près du gulet.", "« Bu senin olsun! » dit le capitaine — « Qu'il soit à toi ! »", "Murzik fait sonner la sonnette.", "Dring-dring !"],
    bridge: "Tom a besoin d'un vélo plus grand, alors il va dans un magasin de location.",
  },
};

const bodrum2: Lesson = {
  id: "tr-a1-bodrum-2",
  level: "A1",
  cityId: "tr-bodrum",
  number: 2,
  title: "Location à la journée",
  minutes: 7,
  goals: ["Louer quelque chose", "Dire pour combien de temps : pour une heure, pour une journée", "Dire « de … à … »"],
  vocabNote: "-liğine / -lığına / -luğuna / -lüğüne veut dire « pour (une durée) » : bir saatliğine — pour une heure, bir günlüğüne — pour une journée.",
  vocab: [
    v("trbo2-1", "kiralamak", "louer", "L'enseigne d'un magasin de location : des rangées de vélos et de scooters.", "Écouter kiralamak", p("l2-1")),
    v("trbo2-2", "Bir bisiklet kiralamak istiyorum.", "Je voudrais louer un vélo.", "Tom est au comptoir de location et montre un vélo.", "Écouter Bir bisiklet kiralamak istiyorum", p("l2-2")),
    v("trbo2-3", "Kaç saatliğine?", "Pour combien d'heures ?", "L'homme du magasin de location tient une montre et l'interroge du regard.", "Écouter Kaç saatliğine", p("l2-3")),
    v("trbo2-4", "Bir günlüğüne.", "Pour une journée.", "Tom montre un doigt et un petit soleil sur le calendrier.", "Écouter Bir günlüğüne", p("l2-4")),
    v("trbo2-5", "Saat ikiden beşe kadar.", "De deux heures à cinq heures.", "Deux horloges — l'une sur deux heures, l'autre sur cinq — avec une flèche entre elles.", "Écouter Saat ikiden beşe kadar", p("l2-5")),
    v("trbo2-6", "kask", "casque", "Murzik avec un casque bleu un peu trop grand.", "Écouter kask", p("l2-6")),
    v("trbo2-7", "depozito", "caution", "Tom pose son passeport et de l'argent sur le comptoir.", "Écouter depozito", p("l2-7")),
  ],
  dialogue: {
    title: "Au magasin de location",
    note: "İki yüz veut dire « deux cents ». Alalım — « on le prend ».",
    lines: [
      line("tom", "Merhaba! Bir bisiklet kiralamak istiyorum.", "Bonjour ! Je voudrais louer un vélo."),
      line("seller", "Tabii. Kaç saatliğine?", "Bien sûr. Pour combien d'heures ?"),
      line("tom", "Saat ikiden beşe kadar.", "De deux heures à cinq heures."),
      line("seller", "Üç saat. Altmış lira. Kask da var.", "Trois heures. Soixante livres. Il y a aussi un casque."),
      line("murzik", "Bir günlüğüne ne kadar?", "Combien ça coûte pour une journée entière ?"),
      line("seller", "Yüz lira. Depozito iki yüz lira.", "Cent livres. La caution est de deux cents livres."),
      line("tom", "Tamam, bir günlüğüne alalım!", "D'accord, on le prend pour la journée !"),
    ],
    gist: choice("trbo2-d1", "Pour combien de temps Tom loue-t-il le vélo ?", [
      ["Une journée.", true],
      ["Trois heures.", false],
      ["Une semaine.", false],
    ]),
  },
  grammar: [
    {
      title: "De … à … : -den … -e kadar",
      paragraphs: [
        "« De » est une terminaison : -den / -dan : saat iki-den — à partir de deux heures. Après les sons ç, f, h, k, p, s, ş, t, c'est -ten / -tan : beş-ten — à partir de cinq heures.",
        "« Jusqu'à », c'est -e / -a kadar : beş-e kadar — jusqu'à cinq heures, akşam-a kadar — jusqu'au soir. Ensemble : sabahtan akşama kadar — du matin au soir.",
      ],
      examples: [
        { ru: "Saat ikiden beşe kadar.", en: "De deux heures à cinq heures." },
        { ru: "Sabahtan akşama kadar plajdayız.", en: "On est à la plage du matin au soir." },
      ],
    },
  ],
  tasks: [
    listen("trbo2-t1", "Écoute. De quelle heure à quelle heure ?", "Saat üçten altıya kadar.", [
      ["De trois heures à six heures.", true],
      ["De deux heures à cinq heures.", false],
      ["De six heures à trois heures.", false],
    ]),
    choice("trbo2-t2", "Comment dit-on « du matin au soir » ?", [
      ["sabahtan akşama kadar", true],
      ["sabaha akşamdan kadar", false],
      ["sabahta akşamda kadar", false],
    ], { skill: "grammar" }),
    match("trbo2-t3", "Associe les paires.", [
      ["kask", "casque"],
      ["kiralamak", "louer"],
      ["bir günlüğüne", "pour une journée"],
      ["depozito", "caution"],
    ], { skill: "words" }),
    spell("trbo2-t4", "Épelle le mot « casque ».", "kask"),
    speak("trbo2-t5", "Kaç saatliğine?", "İki saatliğine.", "Pour deux heures.", { help: "Dis à voix haute pour combien de temps tu veux le vélo." }),
    listen("trbo2-t6", "Souviens-toi de la leçon précédente. Comment se déplace la personne qui parle ?", "Yürüyorum.", [
      ["À pied.", true],
      ["À vélo.", false],
      ["En bateau.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kum-saati",
    itemName: "Sablier",
    itemNameRu: "Kum saati",
    ru: "Yaşasın! Bir kum saati!",
    en: "Hourra ! Un sablier !",
    a11y: "Un sablier au sable bleu est posé sur une étagère de la cabine.",
    image: p("kum-saati"),
    steps: ["L'homme du magasin de location offre un sablier à Murzik.", "« Zamanı unutmayın! » — « N'oubliez pas l'heure ! »", "Murzik le retourne.", "Le sable bleu s'écoule."],
    bridge: "Tarçın appelle : « J'arrive d'Izmir pour vous voir ! Je dois aller où ? »",
  },
};

const bodrum3: Lesson = {
  id: "tr-a1-bodrum-3",
  level: "A1",
  cityId: "tr-bodrum",
  number: 3,
  title: "Où vas-tu ?",
  minutes: 7,
  goals: ["Demander à quelqu'un où il va", "Dire « à la plage », « au port », « au château »", "Proposer une baignade"],
  vocabNote: "Denize girmek — mot à mot « entrer dans la mer » — veut dire se baigner. Hadi, denize girelim! — « Allez, on va se baigner ! »",
  vocab: [
    v("trbo3-1", "Nereye gidiyorsun?", "Où vas-tu ?", "Tarçın est sur le quai avec une petite valise et fait signe.", "Écouter Nereye gidiyorsun", p("l3-1")),
    v("trbo3-2", "Plaja gidiyorum.", "Je vais à la plage.", "Murzik se dirige vers la mer avec une serviette et un parasol.", "Écouter Plaja gidiyorum", p("l3-2")),
    v("trbo3-3", "kaleye", "au château", "Un sentier monte vers le vieux château de pierre au-dessus de la baie.", "Écouter kaleye", p("l3-3")),
    v("trbo3-4", "limana", "au port", "Un panneau avec une flèche vers le port rempli de bateaux.", "Écouter limana", p("l3-4")),
    v("trbo3-5", "denize", "dans la mer, à la mer", "Murzik saute avec élan dans l'eau bleue.", "Écouter denize", p("l3-5")),
    v("trbo3-6", "Hadi, denize girelim!", "Allons nous baigner !", "Murzik, dans une bouée, traîne Tarçın vers l'eau.", "Écouter Hadi, denize girelim", p("l3-6")),
    v("trbo3-7", "Geliyorum!", "J'arrive !", "Tarçın se lève à contrecœur de son transat.", "Écouter Geliyorum", p("l3-7")),
  ],
  dialogue: {
    title: "Tarçın arrive",
    note: "Hamağa — « au hamac ». Yorucu veut dire « fatigant ».",
    lines: [
      line("tarcin", "Merhaba! Ben geldim! Nereye gidiyorsunuz?", "Salut ! Je suis là ! Vous allez où ?"),
      line("murzik", "Tarçın! Plaja gidiyoruz. Sen de gel!", "Tarçın ! On va à la plage. Viens avec nous !"),
      line("tarcin", "Plaja mı? Ben hamağa gitmek istiyorum.", "À la plage ? Moi, je veux aller au hamac."),
      line("tom", "Hamak yok! Önce kaleye, sonra limana, sonra denize!", "Il n'y a pas de hamac ! D'abord le château, puis le port, puis la mer !"),
      line("tarcin", "Çok yorucu!", "C'est trop fatigant !"),
      line("murzik", "Hadi, denize girelim!", "Allez, on va se baigner !"),
      line("tarcin", "Tamam, tamam… Geliyorum!", "D'accord, d'accord… J'arrive !"),
    ],
    gist: choice("trbo3-d1", "Où Tarçın veut-il aller ?", [
      ["Au hamac.", true],
      ["Au château.", false],
      ["Au port.", false],
    ]),
  },
  grammar: [
    {
      title: "Où : -e, -a",
      paragraphs: [
        "Le français utilise « à » ; le turc ajoute la terminaison -e ou -a : plaj → plaja (à la plage), liman → limana (au port), deniz → denize (à la mer).",
        "Après une voyelle, on ajoute un y : kale → kaleye (au château), Antalya → Antalya'ya. La question : Nereye? — Où (vas-tu) ?",
      ],
      examples: [
        { ru: "Önce kaleye, sonra limana gidiyoruz.", en: "D'abord, on va au château, puis au port." },
        { ru: "Nereye gidiyorsun? — Plaja.", en: "Où vas-tu ? — À la plage." },
      ],
    },
  ],
  tasks: [
    choice("trbo3-t1", "Comment dit-on « au château » ? (château — kale)", [
      ["kaleye", true],
      ["kalea", false],
      ["kalede", false],
    ], { skill: "grammar" }),
    listen("trbo3-t2", "Écoute. Où va la personne qui parle ?", "Limana gidiyorum.", [
      ["Au port.", true],
      ["À la plage.", false],
      ["Au château.", false],
    ]),
    match("trbo3-t3", "Associe les paires.", [
      ["plaj", "plage"],
      ["kale", "château"],
      ["liman", "port"],
      ["deniz", "mer"],
    ], { skill: "words" }),
    missing("trbo3-t4", "Quelle lettre manque ? (« plage »)", "pla", "", "j", ["j", "c", "ş"]),
    speak("trbo3-t5", "Nereye gidiyorsun?", "Plaja gidiyorum.", "Je vais à la plage.", { help: "Dis à voix haute où tu vas." }),
    choice("trbo3-t6", "Comment dit-on « de deux heures à cinq heures » ?", [
      ["Saat ikiden beşe kadar.", true],
      ["Saat ikiye beşten kadar.", false],
      ["Saat iki beş kadar.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "can-simidi",
    itemName: "Bouée de sauvetage",
    itemNameRu: "Can simidi",
    ru: "Yaşasın! Bir can simidi!",
    en: "Hourra ! Une bouée de sauvetage !",
    a11y: "Une bouée de sauvetage rouge et blanche est accrochée au mur de la cabine.",
    image: p("can-simidi"),
    steps: ["Le capitaine Ali donne une bouée de sauvetage à Tarçın.", "Tarçın s'y endort aussitôt, en pleine mer.", "Tom rit : can simidi veut dire mot à mot « simit de vie » !", "Maintenant, la bouée est accrochée dans la cabine."],
    bridge: "Demain — le musée du château. Il est plein de trésors trouvés sous la mer !",
  },
};

const bodrum4: Lesson = {
  id: "tr-a1-bodrum-4",
  level: "A1",
  cityId: "tr-bodrum",
  number: 4,
  title: "Le musée du château",
  minutes: 7,
  goals: ["Demander si c'est ouvert et combien coûte l'entrée", "Demander si on peut prendre des photos", "Comprendre ce qui est interdit : yasak"],
  vocabNote: "Le château de Bodrum abrite un musée d'archéologie sous-marine : des navires antiques et des amphores remontés du fond de la mer.",
  vocab: [
    v("trbo4-1", "müze", "musée", "Les portes du vieux château, surmontées de petits drapeaux à ancres.", "Écouter müze", p("l4-1")),
    v("trbo4-2", "Giriş ne kadar?", "Combien coûte l'entrée ?", "Tom, au guichet du musée, montre la liste des prix.", "Écouter Giriş ne kadar", p("l4-2")),
    v("trbo4-3", "Fotoğraf çekebilir miyim?", "Je peux prendre des photos ?", "Tom montre poliment son appareil photo.", "Écouter Fotoğraf çekebilir miyim", p("l4-3")),
    v("trbo4-4", "Yasak.", "C'est interdit.", "Un panneau : un flash d'appareil photo barré.", "Écouter Yasak", p("l4-4")),
    v("trbo4-5", "Dokunmak yasak!", "Ne pas toucher !", "Un panneau avec une main barrée, près d'une amphore antique.", "Écouter Dokunmak yasak", p("l4-5")),
    v("trbo4-6", "Açık mı?", "C'est ouvert ?", "Murzik jette un œil par les portes en bois entrouvertes.", "Écouter Açık mı", p("l4-6")),
    v("trbo4-7", "eski", "vieux, antique", "Un ancien navire en bois sous verre, au musée.", "Écouter eski", p("l4-7")),
  ],
  dialogue: {
    title: "Les trésors du fond de la mer",
    note: "Kişi başı — « par personne ». Flaş — « flash ». Gemi — « navire ».",
    lines: [
      line("murzik", "Merhaba! Müze açık mı?", "Bonjour ! Le musée est ouvert ?"),
      line("cashier", "Evet, açık. Hoş geldiniz.", "Oui, c'est ouvert. Bienvenue."),
      line("tom", "Giriş ne kadar?", "Combien coûte l'entrée ?"),
      line("cashier", "Kişi başı yüz lira.", "Cent livres par personne."),
      line("tom", "Fotoğraf çekebilir miyim?", "Je peux prendre des photos ?"),
      line("cashier", "Evet, ama flaş yasak.", "Oui, mais sans flash."),
      line("tarcin", "Bu eski bir gemi mi?", "C'est un vieux navire ?"),
      line("cashier", "Evet, çok eski! Ama lütfen, dokunmak yasak!", "Oui, très vieux ! Mais s'il vous plaît — ne touchez pas !"),
    ],
    gist: choice("trbo4-d1", "Qu'est-ce qui est interdit au musée ?", [
      ["Toucher les objets et utiliser le flash.", true],
      ["Prendre la moindre photo.", false],
      ["Parler.", false],
    ]),
  },
  grammar: [
    {
      title: "Interdit : -mek yasak",
      paragraphs: [
        "« Interdit de faire quelque chose », c'est le verbe à la forme en -mek / -mak (comme l'infinitif français « faire ») + yasak : Dokunmak yasak. — Interdit de toucher. Burada yüzmek yasak. — Baignade interdite ici.",
        "« Je peux ? », c'est -ebilir miyim? / -abilir miyim? (souviens-toi de Bursa) : Girebilir miyim? — Je peux entrer ?",
      ],
      examples: [
        { ru: "Burada fotoğraf çekmek yasak.", en: "Photos interdites ici." },
        { ru: "Girebilir miyim?", en: "Je peux entrer ?" },
      ],
    },
  ],
  tasks: [
    choice("trbo4-t1", "Comment dit-on « Baignade interdite ici » ? (nager — yüzmek)", [
      ["Burada yüzmek yasak.", true],
      ["Burada yüzmek yasaklar.", false],
      ["Burada yüzüyor yasak.", false],
    ], { skill: "grammar" }),
    listen("trbo4-t2", "Écoute. Qu'est-ce qui est permis ?", "Fotoğraf çekebilirsiniz, ama flaş yasak.", [
      ["Prendre des photos sans flash.", true],
      ["Prendre des photos avec flash.", false],
      ["Aucune photo.", false],
    ]),
    match("trbo4-t3", "Associe les paires.", [
      ["müze", "musée"],
      ["giriş", "entrée"],
      ["yasak", "interdit"],
      ["eski", "vieux"],
    ], { skill: "words" }),
    missing("trbo4-t4", "Quelle lettre manque ? (« toucher »)", "Dok", "nmak", "u", ["u", "ü", "o"]),
    speak("trbo4-t5", "Fotoğraf çekebilir miyim?", "Evet, ama flaş yasak.", "Oui, mais sans flash.", { help: "Réponds à voix haute comme un gardien de musée." }),
    choice("trbo4-t6", "Comment dit-on « Je vais à la plage » ?", [
      ["Plaja gidiyorum.", true],
      ["Plajda gidiyorum.", false],
      ["Plajdan gidiyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tablo",
    itemName: "Tableau de maisons blanches",
    itemNameRu: "Tablo",
    ru: "Yaşasın! Güzel bir tablo!",
    en: "Hourra ! Un beau tableau !",
    a11y: "Un petit tableau à l'huile : les maisons blanches de Bodrum, des portes bleues et des bateaux dans la baie.",
    image: p("tablo"),
    steps: ["Des tableaux sont accrochés dans une petite boutique près du musée.", "L'un d'eux montre des maisons blanches et des portes bleues.", "Murzik l'achète en souvenir.", "Le tableau est accroché au-dessus de sa couchette."],
    bridge: "Le capitaine Ali sort une carte : « Voici les plus belles baies pour la plongée. Je vous montre ? »",
  },
};

const bodrum5: Lesson = {
  id: "tr-a1-bodrum-5",
  level: "A1",
  cityId: "tr-bodrum",
  number: 5,
  title: "Montre-moi sur la carte",
  minutes: 7,
  goals: ["Demander à quelqu'un de montrer sur une carte", "Dire « ici », « là », « là-bas »", "Demander si c'est loin d'ici"],
  vocabNote: "Le français a « ce…-ci » et « ce…-là », mais le turc a trois mots : bu (celui-ci, près de moi), şu (celui-là, qu'on peut montrer du doigt), o (celui-là, loin). C'est pareil pour burada, şurada, orada.",
  vocab: [
    v("trbo5-1", "Haritada gösterir misiniz?", "Vous pouvez me montrer sur la carte ?", "Tom déplie une carte marine devant le capitaine Ali.", "Écouter Haritada gösterir misiniz", p("l5-1")),
    v("trbo5-2", "şurada", "là", "Le capitaine montre la baie d'à côté.", "Écouter şurada", p("l5-2")),
    v("trbo5-3", "orada", "là-bas, au loin", "Le capitaine montre une île à l'horizon.", "Écouter orada", p("l5-3")),
    v("trbo5-4", "koy", "baie, crique", "Une petite crique turquoise entourée de pins.", "Écouter koy", p("l5-4")),
    v("trbo5-5", "ada", "île", "Une île rocheuse au milieu de la mer bleue.", "Écouter ada", p("l5-5")),
    v("trbo5-6", "Buradan ne kadar uzak?", "C'est à quelle distance d'ici ?", "Murzik mesure une distance sur la carte avec sa patte.", "Écouter Buradan ne kadar uzak", p("l5-6")),
    v("trbo5-7", "Burada dalabilir miyiz?", "On peut plonger ici ?", "Murzik, un masque sur le nez, est sur le pont et montre l'eau.", "Écouter Burada dalabilir miyiz", p("l5-7")),
  ],
  dialogue: {
    title: "La carte marine",
    note: "Kara Ada — « l'île Noire » près de Bodrum — a des sources chaudes. Yarım saat veut dire « une demi-heure ».",
    lines: [
      line("tom", "Ali Kaptan, en güzel koy nerede? Haritada gösterir misiniz?", "Capitaine Ali, où est la plus belle baie ? Vous pouvez nous montrer sur la carte ?"),
      line("captain", "Tabii. Bakın: biz buradayız. Şu koy çok güzel.", "Bien sûr. Regardez : nous sommes ici. Cette baie-là est magnifique."),
      line("murzik", "O ada ne?", "Et cette île, c'est quoi ?"),
      line("captain", "O, Kara Ada. Orada sıcak su kaynağı var!", "C'est Kara Ada. Il y a une source chaude !"),
      line("tarcin", "Buradan ne kadar uzak?", "C'est à quelle distance d'ici ?"),
      line("captain", "Tekneyle yarım saat.", "Une demi-heure en bateau."),
      line("tom", "Burada dalabilir miyiz?", "On peut plonger ici ?"),
      line("captain", "Evet! Maskeniz var mı?", "Oui ! Vous avez des masques ?"),
    ],
    gist: choice("trbo5-d1", "Qu'y a-t-il sur Kara Ada ?", [
      ["Une source chaude.", true],
      ["Un musée.", false],
      ["Un restaurant.", false],
    ]),
  },
  grammar: [
    {
      title: "Bu, şu, o",
      paragraphs: [
        "Bu — « ce…-ci » (près de moi), şu — « ce…-là » (pas loin, on peut le montrer), o — « ce…-là » (loin).",
        "C'est pareil pour les lieux : burada — ici, şurada — là, orada — là-bas. Et « d'ici », c'est buradan, avec la terminaison -dan.",
      ],
      examples: [
        { ru: "Bu koy çok güzel, ama o ada daha güzel.", en: "Cette baie est très belle, mais cette île-là est encore plus belle." },
        { ru: "Biz buradayız, plaj şurada.", en: "Nous sommes ici, et la plage est là." },
      ],
    },
  ],
  tasks: [
    choice("trbo5-t1", "Comment dit-on « cette île-là » (au loin) ?", [
      ["o ada", true],
      ["bu ada", false],
      ["orada ada", false],
    ], { skill: "grammar" }),
    listen("trbo5-t2", "Écoute. Combien de temps faut-il pour aller à l'île ?", "Tekneyle yarım saat.", [
      ["Une demi-heure en bateau.", true],
      ["Une heure à pied.", false],
      ["Cinq minutes en taxi.", false],
    ]),
    match("trbo5-t3", "Associe les paires.", [
      ["koy", "baie"],
      ["ada", "île"],
      ["şurada", "là"],
      ["harita", "carte"],
    ], { skill: "words" }),
    spell("trbo5-t4", "Épelle le mot « île ».", "ada", ["e"]),
    speak("trbo5-t5", "Haritada gösterir misiniz?", "Tabii. Biz buradayız.", "Bien sûr. Nous sommes ici.", { help: "Réponds à voix haute et montre l'endroit sur la carte." }),
    choice("trbo5-t6", "Au musée, quelqu'un dit : Dokunmak yasak! Qu'est-ce que ça veut dire ?", [
      ["Ne pas toucher !", true],
      ["On peut prendre des photos.", false],
      ["L'entrée est gratuite.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "maske",
    itemName: "Masque de plongée",
    itemNameRu: "Maske",
    ru: "Yaşasın! Bir dalış maskesi!",
    en: "Hourra ! Un masque de plongée !",
    a11y: "Murzik sort la tête de l'eau avec un masque et un tuba, entouré de petits poissons.",
    image: p("maske"),
    steps: ["Le capitaine Ali sort des masques d'une caisse.", "Murzik met le plus petit.", "Il plonge — et voilà des poissons !", "Il peut garder le masque."],
    bridge: "Le soir, Murzik et Tarçın se promènent dans les rues blanches… et se perdent.",
  },
};

const bodrum6: Lesson = {
  id: "tr-a1-bodrum-6",
  level: "A1",
  cityId: "tr-bodrum",
  number: 6,
  title: "On est perdus !",
  minutes: 7,
  goals: ["Dire « on est perdus »", "Demander poliment de l'aide", "Demander de quel côté se trouve un endroit"],
  vocabNote: "Çıkmaz sokak veut dire « impasse » — mot à mot « une rue qui ne sort pas ».",
  vocab: [
    v("trbo6-1", "Kaybolduk!", "On est perdus !", "Murzik et Tarçın, désorientés, au milieu de rues blanches toutes pareilles, la nuit.", "Écouter Kaybolduk", p("l6-1")),
    v("trbo6-2", "Yardım eder misiniz?", "Vous pourriez nous aider ?", "Murzik fait poliment signe à quelqu'un dans le noir.", "Écouter Yardım eder misiniz", p("l6-2")),
    v("trbo6-3", "Liman hangi tarafta?", "Le port, c'est de quel côté ?", "À un carrefour, Murzik tourne à droite, puis à gauche.", "Écouter Liman hangi tarafta", p("l6-3")),
    v("trbo6-4", "Bu sokak çıkmaz.", "C'est une impasse.", "Une rue blanche se termine par un mur avec une porte bleue.", "Écouter Bu sokak çıkmaz", p("l6-4")),
    v("trbo6-5", "Geri dönelim.", "Faisons demi-tour.", "Tarçın fait demi-tour et tire Murzik en arrière.", "Écouter Geri dönelim", p("l6-5")),
    v("trbo6-6", "Onu takip edelim!", "Suivons-le !", "Murzik montre l'ombre d'un chat au chapeau, un peu plus loin.", "Écouter Onu takip edelim", p("l6-6")),
    v("trbo6-7", "Kurtulduk!", "On est sortis !", "Murzik et Tarçın courent joyeusement vers les lumières du port.", "Écouter Kurtulduk", p("l6-7")),
  ],
  dialogue: {
    title: "Les rues la nuit",
    note: "Burası neresi? — « Où sommes-nous ? ». Yine veut dire « encore ». İkinci kez — « la deuxième fois ».",
    lines: [
      line("murzik", "Tarçın, burası neresi? Kaybolduk!", "Tarçın, où sommes-nous ? On est perdus !"),
      line("tarcin", "Bu sokak çıkmaz! Geri dönelim.", "C'est une impasse ! Faisons demi-tour."),
      line("murzik", "Pardon! Yardım eder misiniz? Liman hangi tarafta?", "Pardon ! Vous pourriez nous aider ? Le port, c'est de quel côté ?"),
      line("tarcin", "Bak! Şapkalı bir kedi… Bize yolu gösteriyor!", "Regarde ! Un chat au chapeau… Il nous montre le chemin !"),
      line("murzik", "Hadi, onu takip edelim!", "Allez, suivons-le !"),
      line("tarcin", "İşte liman! Kurtulduk!", "Voilà le port ! On a réussi !"),
      line("murzik", "Kedi nerede? Yine gitti… İkinci kez!", "Où est le chat ? Encore parti… C'est la deuxième fois !"),
    ],
    gist: choice("trbo6-d1", "Qui les aide à retrouver le chemin ?", [
      ["Un chat blanc au chapeau.", true],
      ["Le capitaine Ali.", false],
      ["À Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "Les demandes polies : -er misiniz?",
      paragraphs: [
        "La façon la plus polie de demander, c'est une question, comme le français « Pourriez-vous… ? » : Yardım eder misiniz? — Vous pourriez nous aider ? Tu en connais déjà : Tekrar eder misiniz? Gösterir misiniz?",
        "C'est beaucoup plus doux que l'ordre Yardım edin! — « Au secours ! ». Garde celui-là pour les vraies urgences.",
      ],
      examples: [
        { ru: "Yardım eder misiniz?", en: "Vous pourriez nous aider ?" },
        { ru: "Haritada gösterir misiniz?", en: "Vous pouvez me montrer sur la carte ?" },
      ],
    },
  ],
  tasks: [
    listen("trbo6-t1", "Écoute. Que s'est-il passé ?", "Kaybolduk! Bu sokak çıkmaz.", [
      ["Ils sont perdus, et c'est une impasse.", true],
      ["Ils ont trouvé le port.", false],
      ["Ils ont raté le bateau.", false],
    ]),
    choice("trbo6-t2", "Comment demander poliment « Vous pourriez nous aider ? »", [
      ["Yardım eder misiniz?", true],
      ["Yardım et!", false],
      ["Yardım ediyor musun?", false],
    ], { skill: "grammar" }),
    match("trbo6-t3", "Associe les paires.", [
      ["Kaybolduk!", "On est perdus !"],
      ["Geri dönelim.", "Faisons demi-tour."],
      ["çıkmaz sokak", "impasse"],
      ["taraf", "côté, direction"],
    ], { skill: "words" }),
    missing("trbo6-t4", "Quelle lettre manque ? (« On est perdus ! »)", "Kaybol", "uk!", "d", ["d", "t", "n"]),
    speak("trbo6-t5", "Kayboldunuz mu?", "Evet! Yardım eder misiniz?", "Oui ! Vous pourriez nous aider ?", { help: "Réponds à voix haute et demande de l'aide." }),
    choice("trbo6-t6", "Comment demander « On peut plonger ici ? »", [
      ["Burada dalabilir miyiz?", true],
      ["Burada dalış var.", false],
      ["Orada dalmak.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "nazar",
    itemName: "Nazar — l'œil bleu",
    itemNameRu: "Nazar boncuğu",
    ru: "Yaşasın! Bir nazar boncuğu!",
    en: "Hourra ! Un nazar !",
    a11y: "Une amulette en verre bleu contre le mauvais œil, un nazar, est accrochée au-dessus de la porte de la cabine et brille au soleil.",
    image: p("nazar"),
    steps: ["Le matin, le capitaine Ali accroche un œil bleu au-dessus de la porte.", "« Nazar değmesin! » — « Contre le mauvais œil ! »", "Murzik le touche de la patte.", "Maintenant, ils ne se perdront plus jamais !"],
    bridge: "Le dernier soir à Bodrum. Le capitaine Ali invite tout le monde à la pêche.",
  },
};

const bodrum7: Lesson = {
  id: "tr-a1-bodrum-7",
  level: "A1",
  cityId: "tr-bodrum",
  number: 7,
  title: "Le dernier soir",
  minutes: 8,
  goals: ["Dire que c'était amusant", "Dire que quelqu'un va nous manquer", "Réviser tous les mots de Bodrum"],
  vocabNote: "Görüşmek üzere — « à la prochaine fois ». C'est un peu plus soutenu que Görüşürüz.",
  vocab: [
    v("trbo7-1", "Çok eğlenceliydi!", "C'était super amusant !", "Murzik, Tom et Tarçın rient sur le pont du gulet.", "Écouter Çok eğlenceliydi", p("l7-1")),
    v("trbo7-2", "Seni özleyeceğim.", "Tu vas me manquer.", "Murzik serre Tarçın dans ses bras sur le quai.", "Écouter Seni özleyeceğim", p("l7-2")),
    v("trbo7-3", "Bir daha gel!", "Revenez !", "Le capitaine Ali fait signe depuis le gulet en souriant.", "Écouter Bir daha gel", p("l7-3")),
    v("trbo7-4", "Balık tutalım!", "Allons pêcher !", "Murzik lance une ligne depuis le bord du bateau.", "Écouter Balık tutalım", p("l7-4")),
    v("trbo7-5", "Ne güzel bir akşam!", "Quelle belle soirée !", "Le coucher de soleil sur la baie, les lumières du château se reflètent dans l'eau.", "Écouter Ne güzel bir akşam", p("l7-5")),
    v("trbo7-6", "İyi ki geldik.", "Je suis si content qu'on soit venus.", "Murzik et Tom sont assis sur le pont et regardent le coucher de soleil.", "Écouter İyi ki geldik", p("l7-6")),
    v("trbo7-7", "Görüşmek üzere!", "À bientôt !", "Tarçın, avec son sac à dos, fait signe depuis les marches du bus.", "Écouter Görüşmek üzere", p("l7-7")),
  ],
  dialogue: {
    title: "La pêche au coucher du soleil",
    note: "Son akşam — « le dernier soir ». Uyuyacağım — « je vais dormir ».",
    lines: [
      line("captain", "Son akşam! Balık tutalım mı?", "Le dernier soir ! On va pêcher ?"),
      line("tarcin", "Ben uyuyacağım…", "Moi, je vais dormir…"),
      line("murzik", "Tarçın! Hadi, balık tutalım!", "Tarçın ! Allez, on va pêcher !"),
      line("tom", "Ne güzel bir akşam!", "Quelle belle soirée !"),
      line("murzik", "Ali Kaptan, çok eğlenceliydi. Sizi özleyeceğim.", "Capitaine Ali, c'était super amusant. Vous allez me manquer."),
      line("captain", "Ben de. Bir daha gelin!", "Toi aussi. Revenez !"),
      line("tarcin", "İyi ki geldim. Görüşmek üzere, kuzen!", "Je suis si content d'être venu. À bientôt, cousin !"),
    ],
    gist: choice("trbo7-d1", "Que font-ils le dernier soir ?", [
      ["Ils vont pêcher en bateau.", true],
      ["Ils vont au musée.", false],
      ["Ils font leurs valises.", false],
    ]),
  },
  grammar: [
    {
      title: "C'était et ce sera",
      paragraphs: [
        "Pour le passé, on utilise -dı / -di : Çok eğlenceli-ydi. — C'était super amusant. Pour le futur, -ecek / -acak : Seni özle-yeceğ-im. — Tu vas me manquer (mot à mot « je vais te regretter »).",
        "Le « vous » poli, ici, c'est sizi : Sizi özleyeceğim. — Vous allez me manquer. Une invitation polie : Bir daha gelin!",
      ],
      examples: [
        { ru: "Dün çok eğlenceliydi.", en: "Hier, c'était super amusant." },
        { ru: "Seni çok özleyeceğim.", en: "Tu vas beaucoup me manquer." },
      ],
    },
  ],
  tasks: [
    listen("trbo7-t1", "Examen audio. Que dit le capitaine ?", "Yarın sabah saat yedide limana gideceğiz. Kaybolmayın!", [
      ["Demain à sept heures du matin, au port — et ne vous perdez pas.", true],
      ["Ce soir, on va à la plage.", false],
      ["Demain, on va au musée.", false],
    ]),
    choice("trbo7-t2", "Comment dit-on « C'était super amusant » ?", [
      ["Çok eğlenceliydi.", true],
      ["Çok eğlenceli olacak.", false],
      ["Çok eğlenceliyim.", false],
    ], { skill: "grammar" }),
    match("trbo7-t3", "Associe les paires.", [
      ["Bir daha gel!", "Revenez !"],
      ["Görüşmek üzere!", "À bientôt !"],
      ["balık", "poisson"],
      ["son akşam", "le dernier soir"],
    ], { skill: "words" }),
    missing("trbo7-t4", "Quelle lettre manque ? (« Tu vas me manquer »)", "Özleyece", "im.", "ğ", ["ğ", "k", "g"]),
    speak("trbo7-t5", "Bodrum nasıldı?", "Çok eğlenceliydi!", "C'était super amusant !", { help: "Dis à voix haute comment tu as trouvé Bodrum." }),
    script("trbo7-t6", "Souviens-toi de tout Bodrum. Complète les conversations.", [
      { speaker: "Seller", text: "Kaç saatliğine?" },
      { speaker: "You", answer: "Bir günlüğüne.", options: ["Bir günlüğüne.", "Plaja.", "Yasak."] },
      { speaker: "Tarçın", text: "Nereye gidiyorsun?" },
      { speaker: "You", answer: "Plaja gidiyorum.", options: ["Plaja gidiyorum.", "Plajda gidiyorum.", "Kaybolduk!"] },
      { speaker: "Cashier", text: "Flaş yasak." },
      { speaker: "You", answer: "Tamam, teşekkürler.", options: ["Tamam, teşekkürler.", "Bir daha gel!", "Kurtulduk!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "olta",
    itemName: "Canne à pêche",
    itemNameRu: "Olta",
    ru: "Yaşasın! Bir olta!",
    en: "Hourra ! Une canne à pêche !",
    a11y: "Une canne à pêche en bois avec un flotteur rouge est appuyée contre le bord du gulet, au coucher du soleil.",
    image: p("olta"),
    steps: ["Le capitaine Ali offre une canne à pêche à Murzik.", "Murzik attrape un petit poisson…", "…et le relâche dans la mer.", "Il garde la canne en souvenir."],
    bridge: "Le matin — départ. Tarçın rentre chez lui à Izmir, et Murzik et Tom continuent vers l'est, le long de la côte.",
  },
};

const story: CityStory = {
  home: {
    name: "Une cabine sur le gulet",
    nameRu: "Guletteki kamara",
    image: p("home"),
    a11y: "Une petite cabine en bois vide sur un vieux gulet : un hublot rond, une couchette et la baie bleue dehors. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "nazar",
  welcomeRu: "Merhaba, Bodrum!",
  welcomeEn: "Bonjour, Bodrum !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom sur le front de mer de Bodrum : des petites maisons blanches, un vieux château et des bateaux en bois dans une baie bleue.",
  departureImage: p("departure"),
  departureA11y: "Murzik et Tom avec leurs valises sur le quai. Le capitaine Ali fait signe depuis le gulet ; Tarçın, avec son sac à dos, bâille.",
  finale: [
    {
      image: p("alley"),
      a11y: "Une rue blanche de Bodrum, la nuit. Au loin, sous un réverbère, la silhouette d'un chat au chapeau.",
      lines: [
        { en: "Cette nuit-là, Murzik n'arrive pas à dormir. Le chat au chapeau était sur la photo à Pamukkale, et maintenant, il est ici, à Bodrum." },
        { ru: "Kim bu kedi? Neden bize yardım ediyor?", en: "Qui est ce chat ? Pourquoi nous aide-t-il ?" },
        { en: "Murzik décide : s'ils se revoient, il lui parlera, c'est sûr." },
      ],
    },
    {
      image: p("nazar"),
      a11y: "Murzik fait le tour de sa cabine sur le gulet, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa cabine. Tom la prend en photo pour son carnet de voyage." },
        { en: "Murzik emporte le nazar bleu du capitaine Ali — contre le mauvais œil, pour la route." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Bodrum tamamlandı!", en: "Bodrum, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — sixième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik et Tom avec leurs valises sur le quai, disent au revoir au capitaine Ali et à Tarçın.",
      lines: [
        { ru: "Hoşça kal, Bodrum! Hoşça kal, Tarçın!", en: "Au revoir, Bodrum ! Au revoir, Tarçın !" },
        { ru: "Sıradaki durak: Antalya!", en: "Prochain arrêt : Antalya !" },
      ],
    },
    {
      image: p("road"),
      a11y: "Le bus roule vers l'est sur une route de montagne au bord de la mer.",
      lines: [{ ru: "Bodrum → Antalya", en: "Bodrum → Antalya" }],
    },
    {
      image: pic("tr/antalya/arrival"),
      a11y: "Murzik et Tom devant l'antique porte d'Hadrien à Antalya. Derrière eux : les ruelles de Kaleiçi et des orangers.",
      lines: [
        { ru: "Merhaba, Antalya!", en: "Bonjour, Antalya !" },
        { ru: "Portakal kokusu!", en: "Ça sent l'orange !" },
      ],
    },
  ],
};

export const trBodrumFr = {
  id: "tr-bodrum",
  name: "Bodrum",
  nameTr: "Bodrum",
  lessons: [bodrum1, bodrum2, bodrum3, bodrum4, bodrum5, bodrum6, bodrum7],
  story,
};
