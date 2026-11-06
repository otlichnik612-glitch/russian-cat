import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { build, choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Cappadocia · “Work and study” · where you work, studying, a working day, a job interview, good news, the first day, a celebration. French version. */

const p = (name: string) => pic(`tr/kapadokya/${name}`);

const kapadokya1: Lesson = {
  id: "tr-a1-kapadokya-1",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 1,
  title: "Où travailles-tu ?",
  minutes: 7,
  goals: ["Demander à quelqu'un où il travaille", "Dire « je travaille dans un hôtel, dans un bureau »", "Dire « je ne travaille pas »"],
  vocabNote: "Peri bacası — une « cheminée de fée », une des tours de roche de Cappadoce. On a creusé des maisons et même des hôtels dans ces rochers.",
  vocab: [
    v("trka1-1", "Nerede çalışıyorsun?", "Où travailles-tu ?", "Deniz, à la réception de l'hôtel troglodyte, regarde Tom avec curiosité.", "Écouter Nerede çalışıyorsun", p("l1-1")),
    v("trka1-2", "Bir otelde çalışıyorum.", "Je travaille dans un hôtel.", "Deniz, une étudiante joyeuse, distribue les clés à la réception.", "Écouter Bir otelde çalışıyorum", p("l1-2")),
    v("trka1-3", "Evden çalışıyorum.", "Je travaille de chez moi.", "Tom est assis sur le lit de la chambre troglodyte avec son ordinateur.", "Écouter Evden çalışıyorum", p("l1-3")),
    v("trka1-4", "iş", "travail", "Une mallette et une tasse de café sur un bureau.", "Écouter iş", p("l1-4")),
    v("trka1-5", "ofis", "bureau", "Un bureau lumineux avec des tables et des ordinateurs.", "Écouter ofis", p("l1-5")),
    v("trka1-6", "Çalışmıyorum.", "Je ne travaille pas.", "Murzik est allongé paresseusement dans un hamac, les pattes écartées.", "Écouter Çalışmıyorum", p("l1-6")),
    v("trka1-7", "çömlekçi", "potier", "Un vieux potier façonne une cruche sur son tour.", "Écouter çömlekçi", p("l1-7")),
  ],
  dialogue: {
    title: "L'hôtel troglodyte",
    note: "İş görüşmesi — « un entretien d'embauche ». Babam — « mon papa ».",
    lines: [
      line("deniz", "Hoş geldiniz! Ben Deniz. Bu otelde çalışıyorum.", "Bienvenue ! Je suis Deniz. Je travaille dans cet hôtel."),
      line("tom", "Memnun oldum! Ben Tom, fotoğrafçıyım.", "Enchanté ! Je suis Tom, je suis photographe."),
      line("deniz", "Nerede çalışıyorsun?", "Et toi, où travailles-tu ?"),
      line("tom", "Şimdi çalışmıyorum. Ama yarın bir iş görüşmem var! Bir dergide.", "Je ne travaille pas en ce moment. Mais demain, j'ai un entretien d'embauche ! Dans un magazine."),
      line("murzik", "Deniz, sen öğrenci misin?", "Deniz, tu es étudiante ?"),
      line("deniz", "Evet! Öğrenciyim ve bu otelde çalışıyorum.", "Oui ! Je suis étudiante, et je travaille dans cet hôtel."),
      line("deniz", "Babam çömlekçi. Avanos'ta çalışıyor.", "Mon papa est potier. Il travaille à Avanos."),
    ],
    gist: choice("trka1-d1", "Où travaille Deniz ?", [
      ["À l'hôtel.", true],
      ["Dans un magazine.", false],
      ["Dans un atelier de poterie.", false],
    ]),
  },
  grammar: [
    {
      title: "Où je travaille : -de çalışıyorum",
      paragraphs: [
        "« Dans, à », c'est la terminaison -de / -da : bir otel-de çalışıyorum (dans un hôtel), bir okul-da (dans une école), bir ofis-te (dans un bureau — après s, c'est -te).",
        "« De, depuis », c'est -den / -dan : ev-den çalışıyorum — je travaille de chez moi. « Je ne travaille pas », c'est çalış-mı-yorum.",
      ],
      examples: [
        { ru: "Bir hastanede çalışıyorum.", en: "Je travaille dans un hôpital." },
        { ru: "Babam Avanos'ta çalışıyor.", en: "Mon papa travaille à Avanos." },
      ],
    },
  ],
  tasks: [
    choice("trka1-t1", "Comment dit-on « Je travaille dans une école » ? (école — okul)", [
      ["Okulda çalışıyorum.", true],
      ["Okula çalışıyorum.", false],
      ["Okulde çalışıyorum.", false],
    ], { skill: "grammar" }),
    listen("trka1-t2", "Écoute. Où travaille la personne qui parle ?", "Bir hastanede çalışıyorum.", [
      ["Dans un hôpital.", true],
      ["Dans un hôtel.", false],
      ["À la maison.", false],
    ]),
    match("trka1-t3", "Associe les paires.", [
      ["iş", "travail"],
      ["ofis", "bureau"],
      ["otel", "hôtel"],
      ["çömlekçi", "potier"],
    ], { skill: "words" }),
    missing("trka1-t4", "Quelle lettre manque ? (« je travaille »)", "Çal", "şıyorum", "ı", ["ı", "i", "u"]),
    speak("trka1-t5", "Nerede çalışıyorsun?", "Bir ofiste çalışıyorum.", "Je travaille dans un bureau.", { help: "Dis à voix haute où tu travailles ou étudies." }),
    choice("trka1-t6", "Comment dit-on « Je me sens mieux » ?", [
      ["Daha iyiyim.", true],
      ["Daha iyisin.", false],
      ["İyi daha.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "masa-lambasi",
    itemName: "Lampe de bureau",
    itemNameRu: "Masa lambası",
    ru: "Yaşasın! Bir masa lambası!",
    en: "Hourra ! Une lampe de bureau !",
    a11y: "Une lampe de bureau à abat-jour en tissu est posée dans une niche de pierre de la chambre troglodyte.",
    image: p("masa-lambasi"),
    steps: ["Deniz apporte une lampe de bureau dans leur chambre.", "« Akşam çalışmak için! » — « Pour travailler le soir ! »", "Murzik la pose dans une niche de pierre.", "La grotte devient douillette."],
    bridge: "Deniz leur raconte : le jour, elle étudie à l'université, et le soir, elle travaille.",
  },
};

const kapadokya2: Lesson = {
  id: "tr-a1-kapadokya-2",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 2,
  title: "Je suis étudiante",
  minutes: 7,
  goals: ["Demander à quelqu'un ce qu'il étudie", "Dire « je suis à l'université »", "Distinguer okumak et öğrenmek"],
  vocabNote: "Okumak veut dire à la fois « lire » et « étudier (à l'école ou à l'université) ». Öğrenmek veut dire « apprendre quelque chose » : Türkçe öğreniyorum.",
  vocab: [
    v("trka2-1", "Öğrenci misin?", "Tu es étudiante ?", "Murzik regarde avec curiosité la pile de manuels de Deniz.", "Écouter Öğrenci misin", p("l2-1")),
    v("trka2-2", "Üniversitede okuyorum.", "Je suis à l'université.", "Deniz avec son sac à dos devant le bâtiment de l'université.", "Écouter Üniversitede okuyorum", p("l2-2")),
    v("trka2-3", "Ne okuyorsun?", "Qu'est-ce que tu étudies ?", "Tom montre le manuel de Deniz.", "Écouter Ne okuyorsun", p("l2-3")),
    v("trka2-4", "Turizm okuyorum.", "J'étudie le tourisme.", "Un manuel avec une carte du monde et un petit avion sur la couverture.", "Écouter Turizm okuyorum", p("l2-4")),
    v("trka2-5", "Türkçe öğreniyorum.", "J'apprends le turc.", "Murzik écrit des mots turcs dans un cahier.", "Écouter Türkçe öğreniyorum", p("l2-5")),
    v("trka2-6", "ders", "cours, leçon", "Un amphithéâtre avec un professeur au tableau.", "Écouter ders", p("l2-6")),
    v("trka2-7", "sınav", "examen", "Deniz s'inquiète devant une copie d'examen.", "Écouter sınav", p("l2-7")),
  ],
  dialogue: {
    title: "Études et travail",
    note: "Zor veut dire « difficile ». Türkçen iyi! — « Ton turc est bon ! »",
    lines: [
      line("murzik", "Deniz, ne okuyorsun?", "Deniz, qu'est-ce que tu étudies ?"),
      line("deniz", "Turizm okuyorum. Üniversitede.", "Le tourisme. À l'université."),
      line("tom", "Zor mu?", "C'est difficile ?"),
      line("deniz", "Biraz. Yarın sınavım var!", "Un peu. J'ai un examen demain !"),
      line("murzik", "Ben de Türkçe öğreniyorum! Her gün bir ders.", "Et moi, j'apprends le turc ! Une leçon tous les jours."),
      line("deniz", "Çok güzel! Türkçen iyi!", "C'est super ! Ton turc est bon !"),
    ],
    gist: choice("trka2-d1", "Qu'étudie Deniz ?", [
      ["Le tourisme.", true],
      ["Le turc.", false],
      ["La photographie.", false],
    ]),
  },
  grammar: [
    {
      title: "Okumak ou öğrenmek ?",
      paragraphs: [
        "Okumak, c'est « lire », et aussi « étudier » à l'école ou à l'université : Üniversitede okuyorum. Turizm okuyorum — j'étudie le tourisme (c'est ma matière).",
        "Öğrenmek, c'est « apprendre, découvrir quelque chose de nouveau » : Türkçe öğreniyorum. — J'apprends le turc.",
      ],
      examples: [
        { ru: "Deniz turizm okuyor.", en: "Deniz étudie le tourisme." },
        { ru: "Murzik Türkçe öğreniyor.", en: "Murzik apprend le turc." },
      ],
    },
  ],
  tasks: [
    choice("trka2-t1", "Comment dit-on « J'apprends le turc » ?", [
      ["Türkçe öğreniyorum.", true],
      ["Türkçe öğretiyorum.", false],
      ["Türkçe okuyor.", false],
    ], { skill: "grammar" }),
    listen("trka2-t2", "Écoute. Que se passe-t-il demain ?", "Yarın sınavım var.", [
      ["Un examen.", true],
      ["Une fête.", false],
      ["Un cours de dessin.", false],
    ]),
    match("trka2-t3", "Associe les paires.", [
      ["ders", "cours, leçon"],
      ["sınav", "examen"],
      ["üniversite", "université"],
      ["öğrenmek", "apprendre"],
    ], { skill: "words" }),
    spell("trka2-t4", "Épelle le mot « cours ».", "ders"),
    speak("trka2-t5", "Ne öğreniyorsun?", "Türkçe öğreniyorum. Her gün bir ders!", "J'apprends le turc. Une leçon tous les jours !", { help: "Dis à voix haute ce que tu apprends." }),
    listen("trka2-t6", "Souviens-toi de la leçon précédente. Où travaille la personne qui parle ?", "Evden çalışıyorum.", [
      ["De chez elle.", true],
      ["Dans un bureau.", false],
      ["Dans un hôtel.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "defter",
    itemName: "Cahier",
    itemNameRu: "Defter",
    ru: "Yaşasın! Yeni bir defter!",
    en: "Hourra ! Un nouveau cahier !",
    a11y: "Un cahier avec un motif de montgolfières sur la couverture. Des mots turcs sont écrits sur la première page.",
    image: p("defter"),
    steps: ["Deniz offre un cahier à Murzik.", "« Türkçe kelimeler için! » — « Pour les mots turcs ! »", "Murzik écrit son premier mot : balon.", "Bientôt, le cahier sera plein !"],
    bridge: "Deniz les invite à l'atelier de poterie de son papa : « Sa journée commence à six heures du matin ! »",
  },
};

const kapadokya3: Lesson = {
  id: "tr-a1-kapadokya-3",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 3,
  title: "Ma journée de travail",
  minutes: 7,
  goals: ["Raconter sa journée", "Dire à quelle heure on se lève, on commence et on finit", "Dire « tous les matins »"],
  vocabNote: "Avanos est une petite ville au bord d'une rivière, en Cappadoce, où l'on fabrique des cruches en argile rouge de la rivière depuis des milliers d'années.",
  vocab: [
    v("trka3-1", "Saat altıda kalkıyorum.", "Je me lève à six heures.", "Le potier s'étire près de la fenêtre ; dehors, c'est l'aube, et l'horloge indique six heures.", "Écouter Saat altıda kalkıyorum", p("l3-1")),
    v("trka3-2", "İşe saat yedide başlıyorum.", "Je commence le travail à sept heures.", "Le potier s'assoit devant son tour ; l'horloge indique sept heures.", "Écouter İşe saat yedide başlıyorum", p("l3-2")),
    v("trka3-3", "Öğlen yemek yiyorum.", "Je déjeune à midi.", "Le potier mange du pain plat et du fromage devant l'atelier.", "Écouter Öğlen yemek yiyorum", p("l3-3")),
    v("trka3-4", "Saat beşte bitiriyorum.", "Je finis à cinq heures.", "Le potier s'essuie les mains ; l'horloge indique cinq heures.", "Écouter Saat beşte bitiriyorum", p("l3-4")),
    v("trka3-5", "Akşam dinleniyorum.", "Le soir, je me repose.", "Le potier est assis avec un thé sur un banc au bord de la rivière.", "Écouter Akşam dinleniyorum", p("l3-5")),
    v("trka3-6", "her sabah", "tous les matins", "Sept petits soleils au-dessus de l'horizon.", "Écouter her sabah", p("l3-6")),
    v("trka3-7", "Çok yoğun bir gün.", "Une journée très chargée.", "Le potier est entouré de dizaines de cruches neuves.", "Écouter Çok yoğun bir gün", p("l3-7")),
  ],
  dialogue: {
    title: "À l'atelier",
    note: "Yine veut dire « de nouveau ». İşimi seviyorum — « j'aime mon travail ».",
    lines: [
      line("potter", "Hoş geldiniz! Ben her sabah saat altıda kalkıyorum.", "Bienvenue ! Je me lève à six heures tous les matins."),
      line("murzik", "Altıda mı? Çok erken!", "À six heures ? C'est tellement tôt !"),
      line("potter", "İşe saat yedide başlıyorum. Öğlen yemek yiyorum, sonra yine çalışıyorum.", "Je commence le travail à sept heures. Je déjeune à midi, puis je retravaille."),
      line("tom", "Saat kaçta bitiriyorsunuz?", "À quelle heure finissez-vous ?"),
      line("potter", "Saat beşte. Akşam dinleniyorum.", "À cinq heures. Le soir, je me repose."),
      line("deniz", "Babam çok çalışkan!", "Mon papa est très travailleur !"),
      line("potter", "Çok yoğun bir gün, ama işimi seviyorum.", "C'est une journée très chargée, mais j'aime mon travail."),
    ],
    gist: choice("trka3-d1", "À quelle heure le potier commence-t-il le travail ?", [
      ["À sept heures.", true],
      ["À six heures.", false],
      ["À cinq heures.", false],
    ]),
  },
  grammar: [
    {
      title: "Ma journée : -iyorum + une heure",
      paragraphs: [
        "Pour la routine, le français utilise le présent (« je me lève »), et le turc utilise souvent la même forme en -iyorum : kalk-ıyorum (je me lève), başl-ıyorum (je commence), bitir-iyorum (je finis).",
        "Les heures prennent la terminaison -de / -da / -te / -ta : saat altıda, saat yedide, saat beşte. Pour l'ordre : önce (d'abord), sonra (ensuite).",
      ],
      examples: [
        { ru: "Önce kahvaltı yapıyorum, sonra işe gidiyorum.", en: "D'abord, je prends le petit-déjeuner, ensuite je vais au travail." },
        { ru: "Saat dokuzda başlıyorum.", en: "Je commence à neuf heures." },
      ],
    },
  ],
  tasks: [
    listen("trka3-t1", "Écoute. À quelle heure se lève la personne qui parle ?", "Her sabah saat yedide kalkıyorum.", [
      ["À sept heures.", true],
      ["À six heures.", false],
      ["À huit heures.", false],
    ]),
    build("trka3-t2", "Mets les mots dans l'ordre : « Je commence le travail à sept heures ».", ["İşe", "saat", "yedide", "başlıyorum."]),
    match("trka3-t3", "Associe les paires.", [
      ["kalkmak", "se lever"],
      ["başlamak", "commencer"],
      ["bitirmek", "finir"],
      ["dinlenmek", "se reposer"],
    ], { skill: "words" }),
    missing("trka3-t4", "Quelle lettre manque ? (« je finis »)", "bit", "riyorum", "i", ["i", "ı", "e"]),
    speak("trka3-t5", "Günün nasıl geçiyor?", "Saat yedide kalkıyorum, dokuzda işe başlıyorum.", "Je me lève à sept heures et je commence le travail à neuf heures.", { help: "Décris ta journée habituelle à voix haute." }),
    choice("trka3-t6", "Comment dit-on « Je suis à l'université » ?", [
      ["Üniversitede okuyorum.", true],
      ["Üniversiteye okuyorum.", false],
      ["Üniversiteden okuyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kalemlik",
    itemName: "Pot à crayons",
    itemNameRu: "Kalemlik",
    ru: "Yaşasın! Bir kalemlik!",
    en: "Hourra ! Un pot à crayons !",
    a11y: "Un pot en argile fait main, plein de crayons et de pinceaux.",
    image: p("kalemlik"),
    steps: ["Le potier façonne un petit pot sur son tour.", "« Bu senin için! » — « C'est pour toi ! »", "Murzik y met ses crayons.", "Dessiner, c'est encore plus facile maintenant !"],
    bridge: "Et ce soir, Tom a son entretien avec le magazine. Il est très nerveux.",
  },
};

const kapadokya4: Lesson = {
  id: "tr-a1-kapadokya-4",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 4,
  title: "L'entretien d'embauche",
  minutes: 7,
  goals: ["Répondre à « pourquoi ? » : çünkü", "Dire depuis combien de temps on fait quelque chose", "Comprendre les questions d'un entretien"],
  vocabNote: "Üç yıldır — « depuis trois ans ». La terminaison -dır après une durée marche comme le français « depuis ».",
  vocab: [
    v("trka4-1", "iş görüşmesi", "entretien d'embauche", "Tom, en chemise, est assis devant un ordinateur, en visioconférence.", "Écouter iş görüşmesi", p("l4-1")),
    v("trka4-2", "Neden bu işi istiyorsunuz?", "Pourquoi voulez-vous ce travail ?", "Sur l'écran : une rédactrice en chef sévère mais aimable.", "Écouter Neden bu işi istiyorsunuz", p("l4-2")),
    v("trka4-3", "Çünkü fotoğraf çekmeyi seviyorum.", "Parce que j'adore prendre des photos.", "Tom montre avec enthousiasme son appareil photo à la webcam.", "Écouter Çünkü fotoğraf çekmeyi seviyorum", p("l4-3")),
    v("trka4-4", "Deneyiminiz var mı?", "Vous avez de l'expérience ?", "À l'écran, la rédactrice feuillette un dossier de photos de Tom.", "Écouter Deneyiminiz var mı", p("l4-4")),
    v("trka4-5", "Üç yıldır fotoğrafçıyım.", "Je suis photographe depuis trois ans.", "Trois albums photo empilés à côté de Tom.", "Écouter Üç yıldır fotoğrafçıyım", p("l4-5")),
    v("trka4-6", "Ne zaman başlayabilirsiniz?", "Quand pouvez-vous commencer ?", "La rédactrice regarde un calendrier en souriant.", "Écouter Ne zaman başlayabilirsiniz", p("l4-6")),
    v("trka4-7", "Hemen!", "Tout de suite !", "Tom se lève d'un bond, les yeux brillants.", "Écouter Hemen", p("l4-7")),
  ],
  dialogue: {
    title: "La visioconférence",
    note: "Seyahat etmek — « voyager ». Tom Bey — une façon polie de s'adresser à Tom.",
    lines: [
      line("editor", "Merhaba, Tom Bey. Neden bu işi istiyorsunuz?", "Bonjour, Tom. Pourquoi voulez-vous ce travail ?"),
      line("tom", "Çünkü fotoğraf çekmeyi çok seviyorum. Ve seyahat etmeyi!", "Parce que j'adore prendre des photos. Et voyager !"),
      line("editor", "Deneyiminiz var mı?", "Vous avez de l'expérience ?"),
      line("tom", "Evet. Üç yıldır fotoğrafçıyım.", "Oui. Je suis photographe depuis trois ans."),
      line("editor", "Güzel. Fotoğraflarınızda hep bir kedi var. Neden?", "Bien. Il y a toujours un chat sur vos photos. Pourquoi ?"),
      line("tom", "Çünkü o benim en iyi arkadaşım: Murzik!", "Parce que c'est mon meilleur ami : Murzik !"),
      line("editor", "Harika. Ne zaman başlayabilirsiniz?", "Merveilleux. Quand pouvez-vous commencer ?"),
      line("tom", "Hemen!", "Tout de suite !"),
    ],
    gist: choice("trka4-d1", "Pourquoi y a-t-il un chat sur toutes les photos de Tom ?", [
      ["Parce que Murzik est son meilleur ami.", true],
      ["Parce qu'il adore tous les chats.", false],
      ["Parce que le magazine le lui a demandé.", false],
    ]),
  },
  grammar: [
    {
      title: "Pourquoi ? — Parce que…",
      paragraphs: [
        "Neden? veut dire « pourquoi ? ». La réponse commence par çünkü — « parce que » : Neden? — Çünkü seyahat etmeyi seviyorum.",
        "« Depuis (une durée) », c'est la durée + -dır / -dir / -dur / -dür, ou -tır / -tir / -tur / -tür après ç, f, h, k, p, s, ş, t : üç yıldır (depuis trois ans), iki aydır (depuis deux mois). Comme en français, le verbe reste au présent : Üç yıldır fotoğrafçıyım — « je suis photographe depuis trois ans ».",
      ],
      examples: [
        { ru: "Neden Türkçe öğreniyorsun? — Çünkü Türkiye'yi seviyorum.", en: "Pourquoi apprends-tu le turc ? — Parce que j'adore la Turquie." },
        { ru: "Beş yıldır öğretmenim.", en: "Je suis professeur depuis cinq ans." },
      ],
    },
  ],
  tasks: [
    choice("trka4-t1", "Comment répondre « Parce que j'adore la mer » ?", [
      ["Çünkü denizi seviyorum.", true],
      ["Neden denizi seviyorum.", false],
      ["Çünkü deniz seviyor.", false],
    ], { skill: "grammar" }),
    listen("trka4-t2", "Écoute. Combien d'années d'expérience a la personne qui parle ?", "Beş yıldır öğretmenim.", [
      ["Cinq ans.", true],
      ["Trois ans.", false],
      ["Un an.", false],
    ]),
    match("trka4-t3", "Associe les paires.", [
      ["iş görüşmesi", "entretien d'embauche"],
      ["deneyim", "expérience"],
      ["Hemen!", "Tout de suite !"],
      ["neden", "pourquoi"],
    ], { skill: "words" }),
    missing("trka4-t4", "Quelle lettre manque ? (« parce que »)", "Ç", "nkü", "ü", ["ü", "u", "i"]),
    speak("trka4-t5", "Neden Türkçe öğreniyorsun?", "Çünkü Türkiye'yi çok seviyorum!", "Parce que j'adore vraiment la Turquie !", { help: "Dis à voix haute pourquoi tu apprends le turc." }),
    listen("trka4-t6", "Souviens-toi de la leçon précédente. Que dit le potier ?", "Saat beşte bitiriyorum.", [
      ["Il finit à cinq heures.", true],
      ["Il commence à cinq heures.", false],
      ["Il se lève à cinq heures.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sandik",
    itemName: "Coffre",
    itemNameRu: "Sandık",
    ru: "Yaşasın! Eski bir sandık!",
    en: "Hourra ! Un vieux coffre !",
    a11y: "Un coffre en bois sculpté aux coins en fer est posé dans une niche de la chambre troglodyte.",
    image: p("sandik"),
    steps: ["Pendant que Tom parle avec le magazine, Deniz apporte un coffre.", "« Fotoğraflarınız için! » — « Pour vos photos ! »", "Murzik y range les photos.", "Le coffre sent le vieux bois."],
    bridge: "Le lendemain matin, Tom reçoit une réponse…",
  },
};

const kapadokya5: Lesson = {
  id: "tr-a1-kapadokya-5",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 5,
  title: "Une bonne nouvelle !",
  minutes: 7,
  goals: ["Annoncer une nouvelle", "Féliciter quelqu'un et lui souhaiter bonne chance", "Dire « à partir de lundi » : -den itibaren"],
  vocabNote: "Köşe veut dire « coin », et dans un magazine, c'est une « rubrique ». Şehir şehir — « ville après ville ».",
  vocab: [
    v("trka5-1", "Bir haberim var!", "J'ai une nouvelle !", "Tom entre en coup de vent en agitant son téléphone.", "Écouter Bir haberim var", p("l5-1")),
    v("trka5-2", "İyi haber!", "Une bonne nouvelle !", "Un soleil dessiné brille au-dessus de Tom.", "Écouter İyi haber", p("l5-2")),
    v("trka5-3", "İşe alındım!", "J'ai eu le poste !", "Tom saute de joie, et Murzik applaudit des pattes.", "Écouter İşe alındım", p("l5-3")),
    v("trka5-4", "Pazartesiden itibaren", "à partir de lundi", "Un calendrier avec lundi entouré en rouge.", "Écouter Pazartesiden itibaren", p("l5-4")),
    v("trka5-5", "Tebrikler!", "Félicitations !", "Deniz et Murzik serrent Tom dans leurs bras.", "Écouter Tebrikler", p("l5-5")),
    v("trka5-6", "Çok sevindim!", "Je suis tellement content pour toi !", "Murzik tourne sur lui-même de bonheur.", "Écouter Çok sevindim", p("l5-6")),
    v("trka5-7", "Başarılar!", "Bonne chance !", "Deniz lève le pouce vers Tom.", "Écouter Başarılar", p("l5-7")),
  ],
  dialogue: {
    title: "La réponse du magazine",
    note: "Peki — « bon, alors ». İlk veut dire « premier ».",
    lines: [
      line("tom", "Murzik! Deniz! Bir haberim var!", "Murzik ! Deniz ! J'ai une nouvelle !"),
      line("deniz", "Ne oldu? İyi haber mi?", "Qu'est-ce que c'est ? Une bonne nouvelle ?"),
      line("tom", "Çok iyi haber! İşe alındım!", "Une très bonne nouvelle ! J'ai eu le poste !"),
      line("murzik", "Tebrikler, Tom! Çok sevindim!", "Félicitations, Tom ! Je suis tellement contente pour toi !"),
      line("tom", "Pazartesiden itibaren dergide çalışıyorum. «Şehir Şehir» köşesi!", "À partir de lundi, je travaille pour le magazine. La rubrique « Ville après ville » !"),
      line("deniz", "Başarılar! Peki, ilk fotoğraf ne?", "Bonne chance ! Alors, quelle sera la première photo ?"),
      line("tom", "Balonlar! Ve tabii Murzik!", "Les montgolfières ! Et Murzik, bien sûr !"),
    ],
    gist: choice("trka5-d1", "À partir de quel jour Tom travaille-t-il pour le magazine ?", [
      ["À partir de lundi.", true],
      ["À partir de demain.", false],
      ["Dans un mois.", false],
    ]),
  },
  grammar: [
    {
      title: "À partir de : -den itibaren",
      paragraphs: [
        "« À partir de », c'est un mot avec la terminaison -den / -dan + itibaren : pazartesi-den itibaren — à partir de lundi, yarın-dan itibaren — à partir de demain.",
        "Après ç, f, h, k, p, s, ş, t, c'est -ten / -tan : bugün-den, mais saat beş-ten itibaren — à partir de cinq heures.",
      ],
      examples: [
        { ru: "Yarından itibaren çalışıyorum.", en: "Je travaille à partir de demain." },
        { ru: "Saat beşten itibaren evdeyim.", en: "Je suis à la maison à partir de cinq heures." },
      ],
    },
  ],
  tasks: [
    choice("trka5-t1", "Comment dit-on « à partir de demain » ?", [
      ["yarından itibaren", true],
      ["yarına itibaren", false],
      ["yarında itibaren", false],
    ], { skill: "grammar" }),
    listen("trka5-t2", "Écoute. Quelle est la nouvelle ?", "İşe alındım!", [
      ["Il a eu le poste.", true],
      ["Il a perdu son travail.", false],
      ["Il était en retard au travail.", false],
    ]),
    match("trka5-t3", "Associe les paires.", [
      ["Tebrikler!", "Félicitations !"],
      ["Başarılar!", "Bonne chance !"],
      ["haber", "nouvelle"],
      ["köşe", "rubrique, coin"],
    ], { skill: "words" }),
    missing("trka5-t4", "Quelle lettre manque ? (« Félicitations ! »)", "Tebr", "kler!", "i", ["i", "ı", "e"]),
    speak("trka5-t5", "Bir haberim var: işe alındım!", "Tebrikler! Başarılar!", "Félicitations ! Bonne chance !", { help: "Félicite ton ami à voix haute." }),
    choice("trka5-t6", "Comment demander « Pourquoi ? »", [
      ["Neden?", true],
      ["Çünkü?", false],
      ["Nerede?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balon",
    itemName: "Montgolfière miniature",
    itemNameRu: "Balon",
    ru: "Yaşasın! Küçük bir balon!",
    en: "Hourra ! Une petite montgolfière !",
    a11y: "Une montgolfière miniature avec une nacelle rayée est suspendue au plafond de la chambre troglodyte.",
    image: p("balon"),
    steps: ["Deniz offre à Tom une montgolfière miniature.", "« Yeni işine! » — « À ton nouveau travail ! »", "Murzik la suspend au plafond.", "La montgolfière se balance doucement."],
    bridge: "Lundi. Le premier jour de travail de Tom — à l'aube, dans le ciel !",
  },
};

const kapadokya6: Lesson = {
  id: "tr-a1-kapadokya-6",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 6,
  title: "Le premier jour",
  minutes: 7,
  goals: ["Dire qu'on est nerveux", "Dire « notre » : -ımız, -imiz", "Comprendre le pilote de montgolfière"],
  vocabNote: "Heyecan veut dire « émotion » — joie ou trac. Heyecanlıyım — « je suis tout excité, j'ai le trac ».",
  vocab: [
    v("trka6-1", "İlk günüm!", "Mon premier jour !", "Tom à l'aube, avec son appareil photo, près d'une immense montgolfière.", "Écouter İlk günüm", p("l6-1")),
    v("trka6-2", "Heyecanlıyım.", "J'ai le trac.", "Tom ajuste nerveusement la sangle de son appareil photo.", "Écouter Heyecanlıyım", p("l6-2")),
    v("trka6-3", "Bu bizim balonumuz.", "Voici notre montgolfière.", "Le pilote montre une montgolfière rayée.", "Écouter Bu bizim balonumuz", p("l6-3")),
    v("trka6-4", "Sıkı tutunun!", "Tenez-vous bien !", "Murzik et Tom agrippent le bord de la nacelle.", "Écouter Sıkı tutunun", p("l6-4")),
    v("trka6-5", "Yükseliyoruz!", "On monte !", "La montgolfière décolle ; en bas, des gens font signe.", "Écouter Yükseliyoruz", p("l6-5")),
    v("trka6-6", "Manzara harika!", "La vue est incroyable !", "En bas : des cheminées de fées et des vallées dans l'aube rose.", "Écouter Manzara harika", p("l6-6")),
    v("trka6-7", "peri bacaları", "cheminées de fées", "De hautes tours de roche aux minuscules fenêtres.", "Écouter peri bacaları", p("l6-7")),
  ],
  dialogue: {
    title: "Un vol à l'aube",
    note: "Gülümse! veut dire « Souris ! ». Ofisim — « mon bureau ».",
    lines: [
      line("tom", "Bugün ilk günüm! Çok heyecanlıyım.", "Aujourd'hui, c'est mon premier jour ! J'ai tellement le trac."),
      line("pilot", "Günaydın! Ben Kerem, sizin pilotunuz. Bu bizim balonumuz.", "Bonjour ! Je suis Kerem, votre pilote. Voici notre montgolfière."),
      line("murzik", "Vay! Çok büyük!", "Ouah ! Elle est immense !"),
      line("pilot", "Sıkı tutunun! Yükseliyoruz!", "Tenez-vous bien ! On monte !"),
      line("tom", "Manzara harika! Murzik, gülümse!", "La vue est incroyable ! Murzik, souris !"),
      line("murzik", "Bak, Tom! Peri bacaları!", "Regarde, Tom ! Des cheminées de fées !"),
      line("pilot", "Burası benim ofisim!", "Voici mon bureau !"),
    ],
    gist: choice("trka6-d1", "Où Tom passe-t-il son premier jour de travail ?", [
      ["Dans une montgolfière.", true],
      ["Dans les bureaux du magazine.", false],
      ["À l'hôtel.", false],
    ]),
  },
  grammar: [
    {
      title: "Notre : -ımız, -imiz, -umuz, -ümüz",
      paragraphs: [
        "« Notre », c'est la terminaison -ımız / -imiz / -umuz / -ümüz : bizim balon-umuz — notre montgolfière, bizim ev-imiz — notre maison. Après une voyelle : oda-mız — notre chambre.",
        "« Votre » (poli ou pluriel), c'est -ınız / -iniz / -unuz / -ünüz : sizin pilot-unuz — votre pilote. On peut omettre bizim et sizin.",
      ],
      examples: [
        { ru: "Bu bizim evimiz.", en: "C'est notre maison." },
        { ru: "Pilotunuz kim?", en: "Qui est votre pilote ?" },
      ],
    },
  ],
  tasks: [
    choice("trka6-t1", "Comment dit-on « notre montgolfière » ?", [
      ["bizim balonumuz", true],
      ["bizim balonum", false],
      ["biz balon", false],
    ], { skill: "grammar" }),
    listen("trka6-t2", "Écoute. Que dit le pilote ?", "Sıkı tutunun! Yükseliyoruz!", [
      ["Tenez-vous bien, on monte !", true],
      ["On atterrit !", false],
      ["On est en retard !", false],
    ]),
    match("trka6-t3", "Associe les paires.", [
      ["İlk günüm!", "Mon premier jour !"],
      ["Heyecanlıyım.", "J'ai le trac."],
      ["manzara", "vue"],
      ["pilot", "pilote de montgolfière"],
    ], { skill: "words" }),
    missing("trka6-t4", "Quelle lettre manque ? (« vue »)", "manz", "ra", "a", ["a", "e", "ı"]),
    speak("trka6-t5", "Bugün ilk günün mü?", "Evet, ilk günüm! Çok heyecanlıyım.", "Oui, c'est mon premier jour ! J'ai tellement le trac.", { help: "Réponds à voix haute." }),
    choice("trka6-t6", "Comment féliciter un ami ?", [
      ["Tebrikler!", true],
      ["Geçmiş olsun!", false],
      ["Afiyet olsun!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fotograf-makinesi",
    itemName: "Appareil photo",
    itemNameRu: "Fotoğraf makinesi",
    ru: "Yaşasın! Bir fotoğraf makinesi!",
    en: "Hourra ! Un appareil photo !",
    a11y: "Le vieil appareil photo argentique de Tom dans son étui en cuir — maintenant, c'est celui de Murzik.",
    image: p("fotograf-makinesi"),
    steps: ["Après le vol, Tom sort son vieil appareil photo.", "« Al, artık senin. Sen de çek! » — « Tiens, il est à toi maintenant. À toi de prendre des photos ! »", "Murzik prend sa première photo.", "On y voit des montgolfières au-dessus des rochers."],
    bridge: "Le soir, il y a une fête chez le potier : Tom a eu le poste !",
  },
};

const kapadokya7: Lesson = {
  id: "tr-a1-kapadokya-7",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 7,
  title: "Une fête chez le potier",
  minutes: 8,
  goals: ["Porter un toast : « À ton succès ! »", "Dire « je suis fier » et « merci pour tout »", "Réviser tous les mots de Cappadoce"],
  vocabNote: "Les toasts utilisent la terminaison « à » : Başarına! — « À ton succès ! », Sağlığına! — « À ta santé ! ». On peut les dire avec n'importe quelle boisson.",
  vocab: [
    v("trka7-1", "Kutlayalım!", "Fêtons ça !", "Une table est dressée dans la cour de l'atelier, des lanternes accrochées au-dessus.", "Écouter Kutlayalım", p("l7-1")),
    v("trka7-2", "Başarına!", "À ton succès !", "Tout le monde lève son verre d'ayran ou de jus de fruits.", "Écouter Başarına", p("l7-2")),
    v("trka7-3", "Sağlığına!", "À votre santé !", "Le potier lève un verre de thé.", "Écouter Sağlığına", p("l7-3")),
    v("trka7-4", "Gurur duyuyorum.", "Je suis fier.", "Murzik regarde fièrement Tom, le torse bombé.", "Écouter Gurur duyuyorum", p("l7-4")),
    v("trka7-5", "Her şey için teşekkürler.", "Merci pour tout.", "Tom serre Deniz et le potier dans ses bras.", "Écouter Her şey için teşekkürler", p("l7-5")),
    v("trka7-6", "hatıra", "souvenir", "De petites cruches souvenirs en argile sur une étagère.", "Écouter hatıra", p("l7-6")),
    v("trka7-7", "Kim bilir?", "Qui sait ?", "Tom fait un clin d'œil malicieux et cache une enveloppe derrière son dos.", "Écouter Kim bilir", p("l7-7")),
  ],
  dialogue: {
    title: "Une soirée à Avanos",
    note: "Avanos'tan hatıra — « un souvenir d'Avanos ». Sıradaki — « la suivante ».",
    lines: [
      line("potter", "Kutlayalım! Tom'un yeni işine!", "Fêtons ça ! Au nouveau travail de Tom !"),
      line("deniz", "Başarına, Tom!", "À ton succès, Tom !"),
      line("tom", "Her şey için teşekkürler!", "Merci pour tout !"),
      line("murzik", "Seninle gurur duyuyorum, Tom!", "Je suis fier de toi, Tom !"),
      line("potter", "Murzik, bu testi senin için. Avanos'tan hatıra.", "Murzik, cette cruche est pour toi. Un souvenir d'Avanos."),
      line("deniz", "Sıradaki şehir neresi?", "C'est quelle ville, la prochaine ?"),
      line("tom", "Kim bilir?", "Qui sait ?"),
    ],
    gist: choice("trka7-d1", "Que fêtent-ils ?", [
      ["Le nouveau travail de Tom.", true],
      ["L'anniversaire de Murzik.", false],
      ["L'examen de Deniz.", false],
    ]),
  },
  grammar: [
    {
      title: "Les toasts : -a, -e",
      paragraphs: [
        "Un toast, c'est un mot avec la terminaison « à » -a / -e : başarı-n-a — à ton succès, sağlığ-ın-a — à ta santé, dostluğ-a — à l'amitié.",
        "Attention : un k en fin de mot devient souvent ğ devant une voyelle : sağlık → sağlığına, dostluk → dostluğa.",
      ],
      examples: [
        { ru: "Dostluğa!", en: "À l'amitié !" },
        { ru: "Yeni işine!", en: "À ton nouveau travail !" },
      ],
    },
  ],
  tasks: [
    listen("trka7-t1", "Examen audio. Quand viendra-t-on les chercher, et combien de temps dure le vol ?", "Yarın sabah saat beşte sizi otelden alacağız. Uçuş bir saat sürüyor.", [
      ["On viendra les chercher à l'hôtel à cinq heures du matin, et le vol dure une heure.", true],
      ["Le vol est à cinq heures du soir.", false],
      ["Le vol dure trois heures.", false],
    ]),
    choice("trka7-t2", "Comment porter le toast « À l'amitié ! » ? (amitié — dostluk)", [
      ["Dostluğa!", true],
      ["Dostluk!", false],
      ["Dostlukta!", false],
    ], { skill: "grammar" }),
    match("trka7-t3", "Associe les paires.", [
      ["Kutlayalım!", "Fêtons ça !"],
      ["Başarılar!", "Bonne chance !"],
      ["Kim bilir?", "Qui sait ?"],
      ["hatıra", "souvenir"],
    ], { skill: "words" }),
    missing("trka7-t4", "Quelle lettre manque ? (« cruche »)", "tes", "i", "t", ["t", "d", "s"]),
    speak("trka7-t5", "Neden gurur duyuyorsun?", "Çünkü arkadaşım işe alındı!", "Parce que mon ami a eu le poste !", { help: "Réponds à voix haute." }),
    script("trka7-t6", "Souviens-toi de toute la Cappadoce. Complète les conversations.", [
      { speaker: "Deniz", text: "Nerede çalışıyorsun?" },
      { speaker: "You", answer: "Bir ofiste çalışıyorum.", options: ["Bir ofiste çalışıyorum.", "Bir ofise çalışıyorum.", "Hemen!"] },
      { speaker: "Editor", text: "Neden bu işi istiyorsunuz?" },
      { speaker: "You", answer: "Çünkü fotoğraf çekmeyi seviyorum.", options: ["Çünkü fotoğraf çekmeyi seviyorum.", "Neden fotoğraf.", "İlk günüm!"] },
      { speaker: "Tom", text: "İşe alındım!" },
      { speaker: "You", answer: "Tebrikler! Başarılar!", options: ["Tebrikler! Başarılar!", "Geçmiş olsun!", "Kim bilir?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "testi",
    itemName: "Cruche en argile",
    itemNameRu: "Testi",
    ru: "Yaşasın! Bir testi!",
    en: "Hourra ! Une cruche en argile !",
    a11y: "Une cruche en argile rouge d'Avanos, peinte de montgolfières.",
    image: p("testi"),
    steps: ["Le potier pose une cruche rouge sur la table.", "Elle est peinte de montgolfières.", "« Avanos'tan hatıra! » — « Un souvenir d'Avanos ! »", "Murzik serre la cruche dans ses bras."],
    bridge: "Ils vont bientôt partir. Et Tom a une sorte de secret…",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre dans un hôtel troglodyte",
    nameRu: "Mağara otelinde bir oda",
    image: p("home"),
    a11y: "Une chambre vide creusée à même la roche : un plafond en voûte de pierre, des niches dans les murs et une petite fenêtre sur la vallée. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "testi",
  welcomeRu: "Merhaba, Kapadokya!",
  welcomeEn: "Bonjour, la Cappadoce !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à l'aube parmi les cheminées de fées de Cappadoce. Des dizaines de montgolfières colorées dans le ciel.",
  departureImage: p("departure"),
  departureA11y: "Murzik et Tom avec leurs valises devant l'hôtel troglodyte. Deniz leur fait signe.",
  finale: [
    {
      image: p("magazine"),
      a11y: "Un nouveau numéro d'un magazine de voyage : en couverture, un chaton roux sur un ciel de montgolfières. Murzik et Tom le regardent, ravis.",
      lines: [
        { en: "Un mois plus tard, au printemps, le magazine paraît, avec la première rubrique « Ville après ville ». En couverture : Murzik sur un ciel de montgolfières." },
        { ru: "Murzik kapakta!", en: "Murzik est en couverture !" },
        { en: "Et sur une photo, dans la nacelle d'une montgolfière voisine, il y a un chat blanc au chapeau. Tom fronce les sourcils : encore lui ?" },
      ],
    },
    {
      image: p("testi"),
      a11y: "Murzik fait le tour de sa chambre troglodyte, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre troglodyte. Tom la prend en photo — pour le magazine, cette fois." },
        { en: "Murzik emporte la cruche rouge d'Avanos." },
        { en: "Le magazine va dans la poche de la valise, à côté des cartes postales." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Kapadokya tamamlandı!", en: "La Cappadoce, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — neuvième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik et Tom disent au revoir à Deniz devant l'hôtel.",
      lines: [
        { ru: "Hoşça kal, Kapadokya! Hoşça kal, Deniz!", en: "Au revoir, la Cappadoce ! Au revoir, Deniz !" },
        { ru: "Sıradaki durak: Ankara!", en: "Prochain arrêt : Ankara !" },
      ],
    },
    {
      image: p("train"),
      a11y: "Un train traverse la steppe printanière vers la capitale.",
      lines: [{ ru: "Kapadokya → Ankara", en: "Cappadoce → Ankara" }],
    },
    {
      image: pic("tr/ankara/arrival"),
      a11y: "Murzik et Tom près du vieux château d'Ankara sur une colline ; en bas, la grande ville. Une chaude journée de printemps.",
      lines: [
        { ru: "Merhaba, Ankara!", en: "Bonjour, Ankara !" },
        { ru: "Başkent!", en: "La capitale !" },
      ],
    },
  ],
};

export const trKapadokyaFr = {
  id: "tr-kapadokya",
  name: "Cappadoce",
  nameTr: "Kapadokya",
  lessons: [kapadokya1, kapadokya2, kapadokya3, kapadokya4, kapadokya5, kapadokya6, kapadokya7],
  story,
};
