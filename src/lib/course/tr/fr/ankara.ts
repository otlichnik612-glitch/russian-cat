import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Ankara · “Celebrations and dates” · at Granny Nur's: months, dates, a birthday, a present, the party, the cake, a postcard with no address. French version. */

const p = (name: string) => pic(`tr/ankara/${name}`);

const ankara1: Lesson = {
  id: "tr-a1-ankara-1",
  level: "A1",
  cityId: "tr-ankara",
  number: 1,
  title: "Les mois",
  minutes: 7,
  goals: ["Nommer les mois", "Dire « en mai » : mayısta", "Demander en quel mois on est"],
  vocabNote: "Comme en français, les mois s'écrivent avec une minuscule : mayısta — « en mai ». Mais dans une date, le turc leur met une majuscule : 5 Mayıs.",
  vocab: [
    v("trak1-1", "ocak, şubat, mart", "janvier, février, mars", "Trois pages de calendrier : de la neige, de la neige et les premiers perce-neige.", "Écouter ocak, şubat, mart", p("l1-1")),
    v("trak1-2", "nisan, mayıs, haziran", "avril, mai, juin", "Trois pages de calendrier : des tulipes, du lilas, du soleil.", "Écouter nisan, mayıs, haziran", p("l1-2")),
    v("trak1-3", "temmuz, ağustos, eylül", "juillet, août, septembre", "Trois pages de calendrier : la mer, une pastèque, les premières feuilles jaunes.", "Écouter temmuz, ağustos, eylül", p("l1-3")),
    v("trak1-4", "ekim, kasım, aralık", "octobre, novembre, décembre", "Trois pages de calendrier : des feuilles qui tombent, la pluie, un bonhomme de neige.", "Écouter ekim, kasım, aralık", p("l1-4")),
    v("trak1-5", "Hangi aydayız?", "On est en quel mois ?", "Murzik est devant un calendrier, un sourcil levé.", "Écouter Hangi aydayız", p("l1-5")),
    v("trak1-6", "mayısta", "en mai", "Du lilas en fleur près de la fenêtre.", "Écouter mayısta", p("l1-6")),
    v("trak1-7", "ilkbahar", "printemps", "Un parc au printemps, les arbres en fleurs.", "Écouter ilkbahar", p("l1-7")),
  ],
  dialogue: {
    title: "Mamie Nur",
    note: "Mamie Nur est la petite sœur de grand-mère Asya, une chatte angora blanche. Nine veut dire « mamie » — un mot affectueux. Mevsim veut dire « saison ». Doğdu — « est née ».",
    lines: [
      line("nur", "Murzik! Sen Asya'nın torunu musun?", "Murzik ! Tu es le petit-fils d'Asya ?"),
      line("murzik", "Evet! Merhaba, Nur Nine!", "Oui ! Bonjour, mamie Nur !"),
      line("nur", "Hoş geldin, canım! Hangi aydayız? Mayıs! İlkbahar en güzel mevsim.", "Bienvenue, mon chéri ! On est en quel mois ? En mai ! Le printemps est la plus belle saison."),
      line("tom", "Mayısta Ankara çok güzel.", "Ankara est magnifique en mai."),
      line("nur", "Asya da mayısta doğdu… Ya sen?", "Asya aussi est née en mai… Et toi ?"),
      line("murzik", "Ben de mayısta doğdum!", "Moi aussi, je suis né en mai !"),
    ],
    gist: choice("trak1-d1", "En quel mois est née grand-mère Asya ?", [
      ["En mai.", true],
      ["En avril.", false],
      ["En juin.", false],
    ]),
  },
  grammar: [
    {
      title: "En mai : -da, -de, -ta, -te",
      paragraphs: [
        "« En (un mois) » utilise la terminaison « dans, à » : mayıs-ta (en mai), haziran-da (en juin), eylül-de (en septembre), ağustos-ta (en août).",
        "Après s, ş, t, k et les autres sons « durs », c'est -ta / -te. La question : Hangi aydayız? — On est en quel mois ? (mot à mot « dans quel mois sommes-nous ? »)",
      ],
      examples: [
        { ru: "Haziranda deniz sıcak.", en: "En juin, la mer est chaude." },
        { ru: "Ben martta doğdum.", en: "Je suis né en mars." },
      ],
    },
  ],
  tasks: [
    choice("trak1-t1", "Comment dit-on « en août » ?", [
      ["ağustosta", true],
      ["ağustosda", false],
      ["ağustos", false],
    ], { skill: "grammar" }),
    listen("trak1-t2", "Écoute. On est en quel mois ?", "Şimdi haziran.", [
      ["En juin.", true],
      ["Janvier.", false],
      ["En mai.", false],
    ]),
    match("trak1-t3", "Associe les paires.", [
      ["ocak", "janvier"],
      ["mayıs", "mai"],
      ["eylül", "septembre"],
      ["aralık", "décembre"],
    ], { skill: "words" }),
    missing("trak1-t4", "Quelle lettre manque ? (« août »)", "a", "ustos", "ğ", ["ğ", "g", "v"]),
    speak("trak1-t5", "Hangi ayı seviyorsun?", "Haziranı seviyorum, çünkü yaz başlıyor.", "J'adore juin, parce que l'été commence.", { help: "Dis à voix haute quel mois tu aimes et pourquoi." }),
    choice("trak1-t6", "Comment porter le toast « À ton succès ! » ?", [
      ["Başarına!", true],
      ["Başarın!", false],
      ["Başarıda!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "vazo",
    itemName: "Vase de tulipes",
    itemNameRu: "Vazo",
    ru: "Yaşasın! Bir vazo!",
    en: "Hourra ! Un vase !",
    a11y: "Un vase blanc avec des tulipes de printemps est posé sur le rebord de la fenêtre, chez mamie Nur.",
    image: p("vazo"),
    steps: ["Mamie Nur met des tulipes de printemps dans un vase.", "« Odana! » — « Pour ta chambre ! »", "Murzik porte le vase jusqu'au rebord de la fenêtre.", "La chambre sent le printemps."],
    bridge: "Mamie Nur regarde le calendrier : « Et on est le combien, aujourd'hui ? »",
  },
};

const ankara2: Lesson = {
  id: "tr-a1-ankara-2",
  level: "A1",
  cityId: "tr-ankara",
  number: 2,
  title: "On est le combien, aujourd'hui ?",
  minutes: 7,
  goals: ["Demander et dire la date", "Dire « premier, deuxième, troisième »", "Dire « dans trois jours », « la semaine prochaine »"],
  vocabNote: "Comme en français, on utilise un nombre simple dans les dates : Bugün iki Mayıs — mot à mot « aujourd'hui deux mai ». Les mots comme birinci (premier) et ikinci (deuxième) servent pour autre chose : « le premier jour », « le deuxième étage ».",
  vocab: [
    v("trak2-1", "Bugün ayın kaçı?", "On est le combien, aujourd'hui ?", "Tom jette un œil discret au calendrier en le cachant de la main.", "Écouter Bugün ayın kaçı", p("l2-1")),
    v("trak2-2", "Bugün iki Mayıs.", "On est le deux mai.", "Un gros chiffre deux sur une page de calendrier.", "Écouter Bugün iki Mayıs", p("l2-2")),
    v("trak2-3", "birinci, ikinci, üçüncü", "premier, deuxième, troisième", "Trois chatons sur un podium : première, deuxième et troisième place.", "Écouter birinci, ikinci, üçüncü", p("l2-3")),
    v("trak2-4", "tarih", "date", "Un stylo souligne la date sur une lettre.", "Écouter tarih", p("l2-4")),
    v("trak2-5", "üç gün sonra", "dans trois jours", "Trois pages de calendrier, avec un gâteau dessiné sur la troisième.", "Écouter üç gün sonra", p("l2-5")),
    v("trak2-6", "geçen hafta", "la semaine dernière", "Une flèche sur le calendrier pointe vers l'arrière.", "Écouter geçen hafta", p("l2-6")),
    v("trak2-7", "gelecek hafta", "la semaine prochaine", "Une flèche sur le calendrier pointe vers l'avant.", "Écouter gelecek hafta", p("l2-7")),
  ],
  dialogue: {
    title: "Tom prépare quelque chose",
    note: "Hiç! Sadece soruyorum — « Rien ! Je demande, c'est tout ».",
    lines: [
      line("tom", "Nur Nine, bugün ayın kaçı?", "Mamie Nur, on est le combien, aujourd'hui ?"),
      line("nur", "Bugün iki Mayıs.", "On est le deux mai."),
      line("tom", "Üç gün sonra… beş Mayıs!", "Dans trois jours… le cinq mai !"),
      line("murzik", "Beş Mayıs mı? Neden?", "Le cinq mai ? Pourquoi ?"),
      line("tom", "Hiç! Sadece soruyorum.", "Rien ! Je demande, c'est tout."),
      line("nur", "Bu hafta çok güzel bir gün var, değil mi Tom?", "Il y a un jour très spécial cette semaine, n'est-ce pas, Tom ?"),
    ],
    gist: choice("trak2-d1", "On est le combien, aujourd'hui ?", [
      ["Le deux mai.", true],
      ["Le cinq mai.", false],
      ["Le trois mai.", false],
    ]),
  },
  grammar: [
    {
      title: "Les dates et les nombres ordinaux",
      paragraphs: [
        "Une date, c'est un nombre et un mois : Bugün iki Mayıs. — On est le deux mai. Bugün on beş Ağustos. — On est le quinze août.",
        "Les nombres ordinaux (premier, deuxième…) prennent la terminaison -inci / -ıncı / -uncu / -üncü : bir → birinci, iki → ikinci, üç → üçüncü, dört → dördüncü.",
      ],
      examples: [
        { ru: "Bugün on Mart.", en: "On est le dix mars." },
        { ru: "Bu benim birinci dersim.", en: "C'est ma première leçon." },
      ],
    },
  ],
  tasks: [
    listen("trak2-t1", "Écoute. On est le combien ?", "Bugün on beş Ağustos.", [
      ["Le 15 août", true],
      ["Le 5 août", false],
      ["Le 15 avril", false],
    ]),
    choice("trak2-t2", "Comment dit-on « On est le trois mai » ?", [
      ["Bugün üç Mayıs.", true],
      ["Bugün üçüncü Mayıs.", false],
      ["Bugün Mayıs üç.", false],
    ], { skill: "grammar" }),
    match("trak2-t3", "Associe les paires.", [
      ["birinci", "premier"],
      ["ikinci", "deuxième"],
      ["geçen hafta", "la semaine dernière"],
      ["gelecek hafta", "la semaine prochaine"],
    ], { skill: "words" }),
    missing("trak2-t4", "Quelle lettre manque ? (« troisième »)", "üç", "ncü", "ü", ["ü", "u", "i"]),
    speak("trak2-t5", "Bugün ayın kaçı?", "Bugün on Mart.", "On est le dix mars.", { help: "Dis la date d'aujourd'hui à voix haute." }),
    listen("trak2-t6", "Souviens-toi de la leçon précédente. Quand ?", "Mayısta.", [
      ["En mai.", true],
      ["En mars.", false],
      ["En juillet.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cerceve",
    itemName: "Cadre photo",
    itemNameRu: "Çerçeve",
    ru: "Yaşasın! Bir çerçeve!",
    en: "Hourra ! Un cadre !",
    a11y: "Un cadre photo en argent, encore vide, est posé sur la commode.",
    image: p("cerceve"),
    steps: ["Mamie Nur sort un cadre en argent de l'armoire.", "« Şimdi boş, ama yakında dolu olacak! » — « Il est vide maintenant, mais bientôt, il y aura une photo dedans ! »", "Murzik le pose sur la commode.", "Quelle photo va-t-on y mettre ?"],
    bridge: "Murzik demande à mamie Nur : « Et ton anniversaire, c'est quand ? »",
  },
};

const ankara3: Lesson = {
  id: "tr-a1-ankara-3",
  level: "A1",
  cityId: "tr-ankara",
  number: 3,
  title: "Ton anniversaire, c'est quand ?",
  minutes: 7,
  goals: ["Demander quand est l'anniversaire de quelqu'un", "Donner une date : beş Mayıs'ta", "Dire quel âge on va avoir"],
  vocabNote: "Après une date, la terminaison se met après une apostrophe : 5 Mayıs'ta, 10 Ekim'de. Kaç yaşına giriyorsun? veut dire mot à mot « dans quel âge entres-tu ? ».",
  vocab: [
    v("trak3-1", "Doğum günün ne zaman?", "Ton anniversaire, c'est quand ?", "Mamie Nur interroge Murzik en souriant, autour d'un thé.", "Écouter Doğum günün ne zaman", p("l3-1")),
    v("trak3-2", "Doğum günüm beş Mayıs'ta.", "Mon anniversaire, c'est le cinq mai.", "Murzik montre le cinq mai sur le calendrier.", "Écouter Doğum günüm beş Mayıs'ta", p("l3-2")),
    v("trak3-3", "Kaç yaşına giriyorsun?", "Tu vas avoir quel âge ?", "Mamie Nur se penche vers Murzik avec curiosité.", "Écouter Kaç yaşına giriyorsun", p("l3-3")),
    v("trak3-4", "Yedi yaşına giriyorum.", "Je vais avoir sept ans.", "Murzik montre fièrement sept doigts sur deux pattes.", "Écouter Yedi yaşına giriyorum", p("l3-4")),
    v("trak3-5", "parti", "fête", "Une pièce avec des guirlandes et des ballons.", "Écouter parti", p("l3-5")),
    v("trak3-6", "davet", "invitation", "Une jolie carte d'invitation avec des ballons dessus.", "Écouter davet", p("l3-6")),
    v("trak3-7", "Gelir misin?", "Tu viendras ?", "Tom tend une invitation à une voisine.", "Écouter Gelir misin", p("l3-7")),
  ],
  dialogue: {
    title: "Le secret est éventé",
    note: "Yani veut dire « donc, ça veut dire ». Davet edelim — « invitons ». Komşular — « les voisins ».",
    lines: [
      line("murzik", "Nur Nine, doğum gününüz ne zaman?", "Mamie Nur, ton anniversaire, c'est quand ?"),
      line("nur", "Benim doğum günüm on Ekim'de. Ya senin?", "Mon anniversaire, c'est le dix octobre. Et le tien ?"),
      line("murzik", "Benim doğum günüm beş Mayıs'ta!", "Le mien, c'est le cinq mai !"),
      line("nur", "Beş Mayıs mı? Yani üç gün sonra! Kaç yaşına giriyorsun?", "Le cinq mai ? C'est dans trois jours ! Tu vas avoir quel âge ?"),
      line("murzik", "Yedi yaşına giriyorum.", "Je vais avoir sept ans."),
      line("tom", "Parti yapalım mı?", "On fait une fête ?"),
      line("nur", "Tabii! Komşuları da davet edelim.", "Bien sûr ! Invitons aussi les voisins."),
    ],
    gist: choice("trak3-d1", "Quand est l'anniversaire de Murzik ?", [
      ["Le cinq mai.", true],
      ["Le dix octobre.", false],
      ["Le deux mai.", false],
    ]),
  },
  grammar: [
    {
      title: "À une date : 5 Mayıs'ta",
      paragraphs: [
        "« Le (une date) », c'est la date + la terminaison « dans, à » après une apostrophe : beş Mayıs'ta (le cinq mai), on Ekim'de (le dix octobre), on iki Haziran'da (le douze juin).",
        "« Je vais avoir… ans », c'est un nombre + yaşına giriyorum : yedi yaşına giriyorum — je vais avoir sept ans.",
      ],
      examples: [
        { ru: "Doğum günüm on iki Haziran'da.", en: "Mon anniversaire, c'est le douze juin." },
        { ru: "Tom yirmi altı yaşına giriyor.", en: "Tom va avoir vingt-six ans." },
      ],
    },
  ],
  tasks: [
    choice("trak3-t1", "Comment dit-on « le dix octobre » ?", [
      ["on Ekim'de", true],
      ["on Ekim'e", false],
      ["on Ekim'den", false],
    ], { skill: "grammar" }),
    listen("trak3-t2", "Écoute. Quel âge va avoir la personne qui parle ?", "Otuz yaşına giriyorum.", [
      ["Trente ans.", true],
      ["Treize ans.", false],
      ["Trois.", false],
    ]),
    match("trak3-t3", "Associe les paires.", [
      ["doğum günü", "anniversaire"],
      ["davet", "invitation"],
      ["parti", "fête"],
      ["Gelir misin?", "Tu viendras ?"],
    ], { skill: "words" }),
    spell("trak3-t4", "Épelle le mot « fête ».", "parti"),
    speak("trak3-t5", "Doğum günün ne zaman?", "Doğum günüm on iki Haziran'da.", "Mon anniversaire, c'est le douze juin.", { help: "Dis ta date d'anniversaire à voix haute." }),
    choice("trak3-t6", "Comment demander « On est le combien, aujourd'hui ? »", [
      ["Bugün ayın kaçı?", true],
      ["Bugün kaç yaşında?", false],
      ["Bugün hangi saat?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kitap",
    itemName: "Vieux livre de contes",
    itemNameRu: "Kitap",
    ru: "Yaşasın! Eski bir kitap!",
    en: "Hourra ! Un vieux livre !",
    a11y: "Un vieux livre de contes turcs avec des dessins dans les marges. Deux prénoms sont écrits à la main à l'intérieur de la couverture.",
    image: p("kitap"),
    steps: ["Mamie Nur prend un vieux livre sur l'étagère.", "« Asya ile çocukken okurduk. » — « Asya et moi, on le lisait quand on était petites. »", "À l'intérieur de la couverture, deux prénoms : Nur et Asya.", "Murzik caresse doucement les pages."],
    bridge: "Tom demande en secret à mamie Nur : « Qu'est-ce qu'on offre à Murzik ? »",
  },
};

const ankara4: Lesson = {
  id: "tr-a1-ankara-4",
  level: "A1",
  cityId: "tr-ankara",
  number: 4,
  title: "Qu'est-ce qu'on lui offre ?",
  minutes: 7,
  goals: ["Discuter d'un cadeau", "Dire « à lui, à elle, à toi, à moi » : ona, sana, bana", "Demander à quelqu'un de garder un secret"],
  vocabNote: "Ne dersin? — « Qu'est-ce que tu en dis ? Qu'en penses-tu ? » Poliment : Ne dersiniz?",
  vocab: [
    v("trak4-1", "Ona ne alalım?", "Qu'est-ce qu'on lui offre ?", "Tom et mamie Nur chuchotent dans la cuisine.", "Écouter Ona ne alalım", p("l4-1")),
    v("trak4-2", "hediye", "cadeau", "Une boîte dans du papier coloré avec un nœud.", "Écouter hediye", p("l4-2")),
    v("trak4-3", "Ona bir resim defteri alalım.", "Offrons-lui un carnet de croquis.", "Tom montre un carnet de croquis dans une vitrine.", "Écouter Ona bir resim defteri alalım", p("l4-3")),
    v("trak4-4", "Ne dersin?", "Qu'en penses-tu ?", "Tom regarde mamie Nur d'un air interrogateur.", "Écouter Ne dersin", p("l4-4")),
    v("trak4-5", "İyi fikir!", "Bonne idée !", "Une ampoule s'allume au-dessus de la tête de mamie Nur.", "Écouter İyi fikir", p("l4-5")),
    v("trak4-6", "Sürpriz!", "Surprise !", "Des confettis jaillissent d'une boîte.", "Écouter Sürpriz", p("l4-6")),
    v("trak4-7", "Ona söyleme!", "Ne lui dis rien !", "Mamie Nur met un doigt sur ses lèvres.", "Écouter Ona söyleme", p("l4-7")),
  ],
  dialogue: {
    title: "Une réunion secrète",
    note: "Vereceğim — « je donnerai ». Söylemem — « je ne dirai rien ».",
    lines: [
      line("tom", "Nur Nine, Murzik'e ne alalım?", "Mamie Nur, qu'est-ce qu'on offre à Murzik ?"),
      line("nur", "Hmm… Murzik resim yapmayı seviyor, değil mi?", "Hmm… Murzik aime dessiner, non ?"),
      line("tom", "Evet! Ona bir resim defteri alalım. Ne dersiniz?", "Oui ! Offrons-lui un carnet de croquis. Qu'en penses-tu ?"),
      line("nur", "İyi fikir! Ben de ona bir şey vereceğim…", "Bonne idée ! Moi aussi, je vais lui offrir quelque chose…"),
      line("tom", "Ne?", "Quoi ?"),
      line("nur", "Sürpriz! Ama ona söyleme!", "C'est une surprise ! Mais ne lui dis rien !"),
      line("tom", "Tamam, söylemem!", "D'accord, je ne dirai rien !"),
    ],
    gist: choice("trak4-d1", "Que veut offrir Tom à Murzik ?", [
      ["Un carnet de croquis.", true],
      ["Un saz.", false],
      ["Un appareil photo.", false],
    ]),
  },
  grammar: [
    {
      title: "À qui : bana, sana, ona",
      paragraphs: [
        "« À quelqu'un », c'est la terminaison -a / -e : Murzik'e (à Murzik), anneme (à ma maman). Les pronoms : bana — à moi, sana — à toi, ona — à lui ou à elle, bize — à nous, size — à vous (poli ou pluriel).",
        "Ona veut dire à la fois « à lui » et « à elle » : le turc utilise un seul mot, o, pour « il » et « elle ».",
      ],
      examples: [
        { ru: "Ona bir kitap alalım.", en: "Offrons-lui un livre." },
        { ru: "Bana bir hediye mi aldın?", en: "Tu m'as acheté un cadeau ?" },
      ],
    },
  ],
  tasks: [
    choice("trak4-t1", "Comment dit-on « Offrons-lui un cadeau » ?", [
      ["Ona bir hediye alalım.", true],
      ["Onu bir hediye alalım.", false],
      ["O bir hediye alalım.", false],
    ], { skill: "grammar" }),
    listen("trak4-t2", "Écoute. Que proposent-ils d'offrir ?", "Ona bir kitap alalım.", [
      ["Un livre.", true],
      ["Des fleurs.", false],
      ["Un gâteau.", false],
    ]),
    match("trak4-t3", "Associe les paires.", [
      ["hediye", "cadeau"],
      ["Sürpriz!", "Surprise !"],
      ["İyi fikir!", "Bonne idée !"],
      ["Ne dersin?", "Qu'en penses-tu ?"],
    ], { skill: "words" }),
    missing("trak4-t4", "Quelle lettre manque ? (« cadeau »)", "hed", "ye", "i", ["i", "ı", "e"]),
    speak("trak4-t5", "Annene ne alıyorsun?", "Ona çiçek alıyorum.", "Je lui offre des fleurs.", { help: "Dis à voix haute ce que tu vas offrir à ta maman." }),
    choice("trak4-t6", "Comment demander « Ton anniversaire, c'est quand ? »", [
      ["Doğum günün ne zaman?", true],
      ["Doğum günü nerede?", false],
      ["Kaç doğum günü?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balonlar",
    itemName: "Ballons",
    itemNameRu: "Balonlar",
    ru: "Yaşasın! Renkli balonlar!",
    en: "Hourra ! Des ballons colorés !",
    a11y: "Une grappe de ballons colorés attachée au dossier d'une chaise.",
    image: p("balonlar"),
    steps: ["Tom rentre à la maison avec une grappe de ballons.", "« Bunlar ne için? » demande Murzik — « C'est pour quoi, ça ? »", "« Hiç! Güzel, değil mi? » — « Pour rien ! Ils sont jolis, non ? »", "Murzik fait semblant de ne rien remarquer."],
    bridge: "Le matin du cinq mai. Murzik se réveille — et la maison est étrangement silencieuse…",
  },
};

const ankara5: Lesson = {
  id: "tr-a1-ankara-5",
  level: "A1",
  cityId: "tr-ankara",
  number: 5,
  title: "İyi ki doğdun! — Joyeux anniversaire !",
  minutes: 7,
  goals: ["Souhaiter un joyeux anniversaire", "Demander d'ouvrir un cadeau", "Dire combien on est content d'une surprise"],
  vocabNote: "İyi ki doğdun veut dire mot à mot « heureusement que tu es né ». C'est le vœu d'anniversaire le plus chaleureux.",
  vocab: [
    v("trak5-1", "Doğum günün kutlu olsun!", "Joyeux anniversaire !", "Mamie Nur tend à Murzik un cadeau avec un nœud.", "Écouter Doğum günün kutlu olsun", p("l5-1")),
    v("trak5-2", "İyi ki doğdun!", "Joyeux anniversaire ! (heureusement que tu es né)", "Tom et mamie Nur surgissent de derrière la porte avec des cotillons.", "Écouter İyi ki doğdun", p("l5-2")),
    v("trak5-3", "Hediyeni aç!", "Ouvre ton cadeau !", "Murzik défait le nœud de la boîte.", "Écouter Hediyeni aç", p("l5-3")),
    v("trak5-4", "Ne güzel bir sürpriz!", "Quelle belle surprise !", "Murzik presse ses pattes sur ses joues, ravi.", "Écouter Ne güzel bir sürpriz", p("l5-4")),
    v("trak5-5", "Ne kadar güzel!", "Qu'il est beau !", "Murzik tient son nouveau carnet de croquis, rayonnant.", "Écouter Ne kadar güzel", p("l5-5")),
    v("trak5-6", "Kaç yaşına girdin?", "Tu as quel âge maintenant ?", "Mamie Nur caresse doucement la tête de Murzik.", "Écouter Kaç yaşına girdin", p("l5-6")),
    v("trak5-7", "Seni seviyoruz!", "On t'aime !", "Tom et mamie Nur serrent Murzik dans leurs bras, chacun d'un côté.", "Écouter Seni seviyoruz", p("l5-7")),
  ],
  dialogue: {
    title: "Le matin du cinq mai",
    note: "Hediyeni — « ton cadeau ». Girdin — « tu es entré (dans un âge) », donc « tu as eu ».",
    lines: [
      line("tom", "Sürpriz! İyi ki doğdun, Murzik!", "Surprise ! Joyeux anniversaire, Murzik !"),
      line("nur", "Doğum günün kutlu olsun, canım!", "Joyeux anniversaire, mon chéri !"),
      line("murzik", "Ne güzel bir sürpriz! Teşekkürler!", "Quelle belle surprise ! Merci !"),
      line("tom", "Hediyeni aç!", "Ouvre ton cadeau !"),
      line("murzik", "Bir resim defteri! Ne kadar güzel!", "Un carnet de croquis ! Qu'il est beau !"),
      line("nur", "Kaç yaşına girdin?", "Tu as quel âge maintenant ?"),
      line("murzik", "Yedi!", "Sept ans !"),
      line("tom", "Seni seviyoruz, Murzik!", "On t'aime, Murzik !"),
    ],
    gist: choice("trak5-d1", "Qu'a offert Tom à Murzik ?", [
      ["Un carnet de croquis.", true],
      ["Un livre.", false],
      ["Des ballons.", false],
    ]),
  },
  grammar: [
    {
      title: "Les vœux d'anniversaire",
      paragraphs: [
        "Doğum günün kutlu olsun! — « Joyeux anniversaire ! » (un peu plus formel). İyi ki doğdun! — la même chose, en plus chaleureux.",
        "Avec le « vous » poli : Doğum gününüz kutlu olsun! İyi ki doğdunuz! C'est comme ça qu'on souhaite un bon anniversaire à une personne âgée ou à quelqu'un qu'on connaît peu.",
      ],
      examples: [
        { ru: "İyi ki doğdun, Tom!", en: "Joyeux anniversaire, Tom !" },
        { ru: "Doğum gününüz kutlu olsun, Nur Nine!", en: "Joyeux anniversaire, mamie Nur !" },
      ],
    },
  ],
  tasks: [
    choice("trak5-t1", "Comment souhaiter chaleureusement un bon anniversaire à un ami ?", [
      ["İyi ki doğdun!", true],
      ["Geçmiş olsun!", false],
      ["Afiyet olsun!", false],
    ], { skill: "words" }),
    listen("trak5-t2", "Écoute. Quel âge a eu la personne qui parle ?", "Kırk yaşına girdim.", [
      ["Quarante ans.", true],
      ["Quatorze ans.", false],
      ["Quatre ans.", false],
    ]),
    choice("trak5-t3", "Comment souhaiter (poliment) un bon anniversaire à ta vieille voisine ?", [
      ["Doğum gününüz kutlu olsun!", true],
      ["Doğum günün kutlu olsun!", false],
      ["Doğum günüm kutlu olsun!", false],
    ], { skill: "grammar" }),
    missing("trak5-t4", "Quelle lettre manque ? (« Heureusement que tu es né ! »)", "İyi ki do", "dun!", "ğ", ["ğ", "g", "y"]),
    speak("trak5-t5", "Bugün benim doğum günüm!", "İyi ki doğdun! Doğum günün kutlu olsun!", "Joyeux anniversaire !", { help: "Souhaite-leur un joyeux anniversaire à voix haute." }),
    choice("trak5-t6", "Comment dit-on « Offrons-lui un livre » ?", [
      ["Ona bir kitap alalım.", true],
      ["Onu bir kitap alalım.", false],
      ["Ben kitap alalım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "resim-defteri",
    itemName: "Carnet de croquis",
    itemNameRu: "Resim defteri",
    ru: "Yaşasın! Bir resim defteri!",
    en: "Hourra ! Un carnet de croquis !",
    a11y: "Un grand carnet de croquis et une boîte d'aquarelles. Tom a dessiné un chaton roux sur la couverture.",
    image: p("resim-defteri"),
    steps: ["Murzik ouvre le carnet de croquis.", "Dedans, une boîte d'aquarelles — de la part de mamie Nur !", "Tom a dessiné un chaton roux sur la couverture.", "Murzik dessine tout de suite son premier dessin."],
    bridge: "Et dans la cuisine, il y a un gâteau avec des bougies !",
  },
};

const ankara6: Lesson = {
  id: "tr-a1-ankara-6",
  level: "A1",
  cityId: "tr-ankara",
  number: 6,
  title: "Gâteau et vœux",
  minutes: 7,
  goals: ["Faire un vœu et souffler les bougies", "Souhaiter la santé et le bonheur : dilerim", "Dire « encore beaucoup d'années ! »"],
  vocabNote: "Attention : pasta veut dire « gâteau » en turc, et pas « pâtes » ! Nice yıllara! — « À beaucoup d'autres années ! » — se dit pour les anniversaires et les fêtes.",
  vocab: [
    v("trak6-1", "pasta", "gâteau", "Un gâteau au chocolat avec des bougies sur la table.", "Écouter pasta", p("l6-1")),
    v("trak6-2", "Mumları üfle!", "Souffle les bougies !", "Murzik gonfle les joues au-dessus des bougies.", "Écouter Mumları üfle", p("l6-2")),
    v("trak6-3", "Bir dilek tut!", "Fais un vœu !", "Murzik ferme fort les yeux et joint les pattes.", "Écouter Bir dilek tut", p("l6-3")),
    v("trak6-4", "Sana sağlık ve mutluluk dilerim.", "Je te souhaite la santé et le bonheur.", "Mamie Nur lève un verre de thé.", "Écouter Sana sağlık ve mutluluk dilerim", p("l6-4")),
    v("trak6-5", "Nice yıllara!", "À beaucoup d'autres années !", "Tout le monde à table lève son verre.", "Écouter Nice yıllara", p("l6-5")),
    v("trak6-6", "Bir dilim daha?", "Encore une part ?", "Tom tient un couteau au-dessus du gâteau.", "Écouter Bir dilim daha", p("l6-6")),
    v("trak6-7", "Dileğin ne?", "Qu'est-ce que tu as souhaité ?", "Mamie Nur se penche vers Murzik avec curiosité.", "Écouter Dileğin ne", p("l6-7")),
  ],
  dialogue: {
    title: "Sept bougies",
    note: "Söyleyemem — « je ne peux pas le dire ». Sır veut dire « secret ».",
    lines: [
      line("nur", "İşte pasta! Mumları üfle!", "Voilà le gâteau ! Souffle les bougies !"),
      line("tom", "Önce bir dilek tut!", "D'abord, fais un vœu !"),
      line("murzik", "Tamam… Hazır!", "D'accord… C'est fait !"),
      line("nur", "Dileğin ne?", "Qu'est-ce que tu as souhaité ?"),
      line("murzik", "Söyleyemem! Sır!", "Je ne peux pas le dire ! C'est un secret !"),
      line("tom", "Sana sağlık ve mutluluk dilerim!", "Je te souhaite la santé et le bonheur !"),
      line("nur", "Nice yıllara, Murzik!", "À beaucoup d'autres années, Murzik !"),
    ],
    gist: choice("trak6-d1", "Pourquoi Murzik ne dit-il pas quel vœu il a fait ?", [
      ["C'est un secret.", true],
      ["Il a oublié.", false],
      ["Il n'a pas fait de vœu.", false],
    ]),
  },
  grammar: [
    {
      title: "Je te souhaite… : … dilerim",
      paragraphs: [
        "« Je (te) souhaite », c'est dilerim. La personne prend la terminaison « à » : sana (à toi), size (à vous, poli). La chose qu'on souhaite, c'est juste le mot : Sana sağlık dilerim. — Je te souhaite une bonne santé.",
        "On peut en énumérer plusieurs : Sana sağlık, mutluluk ve başarı dilerim. — Je te souhaite la santé, le bonheur et la réussite.",
      ],
      examples: [
        { ru: "Size mutluluk dilerim.", en: "Je te souhaite le bonheur." },
        { ru: "Sana iyi yolculuklar dilerim.", en: "Je te souhaite bon voyage." },
      ],
    },
  ],
  tasks: [
    choice("trak6-t1", "Comment dit-on « Je te souhaite le bonheur » ?", [
      ["Sana mutluluk dilerim.", true],
      ["Seni mutluluk dilerim.", false],
      ["Sen mutluluk dilerim.", false],
    ], { skill: "grammar" }),
    listen("trak6-t2", "Écoute. Que souhaite-t-on ?", "Sana sağlık ve başarı dilerim.", [
      ["La santé et la réussite.", true],
      ["Le bonheur et l'amour.", false],
      ["Un bon voyage.", false],
    ]),
    match("trak6-t3", "Associe les paires.", [
      ["pasta", "gâteau"],
      ["mum", "bougie"],
      ["dilek", "vœu"],
      ["Nice yıllara!", "À beaucoup d'autres années !"],
    ], { skill: "words" }),
    missing("trak6-t4", "Quelle lettre manque ? (« Souffle ! »)", "Ü", "le!", "f", ["f", "v", "p"]),
    speak("trak6-t5", "Bana ne dilersin?", "Sana sağlık ve mutluluk dilerim!", "Je te souhaite la santé et le bonheur !", { help: "Souhaite quelque chose de gentil à quelqu'un, à voix haute." }),
    listen("trak6-t6", "Souviens-toi de la leçon précédente. Que disent-ils ?", "İyi ki doğdun!", [
      ["Joyeux anniversaire !", true],
      ["Bon rétablissement !", false],
      ["Bon appétit !", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mum",
    itemName: "Bougie chat",
    itemNameRu: "Mum",
    ru: "Yaşasın! Bir mum!",
    en: "Hourra ! Une bougie !",
    a11y: "Une petite bougie en forme de chat, avec le chiffre sept sur le côté, est posée sur une part de gâteau.",
    image: p("mum"),
    steps: ["Mamie Nur sort une bougie en forme de chat.", "Le chiffre sept est écrit dessus.", "« Hatıra olsun! » — « En souvenir ! »", "Murzik la pose sur l'étagère."],
    bridge: "Le soir, le facteur apporte une carte postale. Il n'y a pas d'adresse d'expéditeur…",
  },
};

const ankara7: Lesson = {
  id: "tr-a1-ankara-7",
  level: "A1",
  cityId: "tr-ankara",
  number: 7,
  title: "Une carte postale sans adresse",
  minutes: 8,
  goals: ["Poser des questions : qui, d'où, pourquoi, quel", "Comprendre une courte carte postale", "Réviser tous les mots d'Ankara"],
  vocabNote: "Torun veut dire « petit-enfant » — petit-fils ou petite-fille. Torunum — « mon petit-enfant ». Pul — « timbre ». Posta damgası — « cachet de la poste » : il montre de quelle ville vient une lettre.",
  vocab: [
    v("trak7-1", "Kim gönderdi?", "Qui l'a envoyée ?", "Murzik tient la carte postale et regarde autour de lui, perplexe.", "Écouter Kim gönderdi", p("l7-1")),
    v("trak7-2", "Nereden geldi?", "D'où vient-elle ?", "Tom examine le timbre de la carte à la loupe.", "Écouter Nereden geldi", p("l7-2")),
    v("trak7-3", "Ne yazıyor?", "Qu'est-ce qu'il dit ?", "Mamie Nur met ses lunettes.", "Écouter Ne yazıyor", p("l7-3")),
    v("trak7-4", "Neden adres yok?", "Pourquoi n'y a-t-il pas d'adresse d'expéditeur ?", "Gros plan : l'espace vide pour l'adresse de l'expéditeur sur la carte.", "Écouter Neden adres yok", p("l7-4")),
    v("trak7-5", "Hangi şehirden?", "De quelle ville ?", "Un timbre bleu montrant des montagnes vertes au bord de la mer, avec un cachet rond.", "Écouter Hangi şehirden", p("l7-5")),
    v("trak7-6", "torunum", "mon petit-enfant", "Un petit chat roux est dessiné dans le coin de la carte.", "Écouter torunum", p("l7-6")),
    v("trak7-7", "Bu onun yazısı!", "C'est son écriture !", "Mamie Nur serre la carte contre sa poitrine, les larmes aux yeux.", "Écouter Bu onun yazısı", p("l7-7")),
  ],
  dialogue: {
    title: "Le courrier du soir",
    note: "Kartpostal veut dire « carte postale ». Yazı — « écriture ».",
    lines: [
      line("murzik", "Bir kartpostal! Kim gönderdi?", "Une carte postale ! Qui l'a envoyée ?"),
      line("tom", "Bilmiyorum. Adres yok.", "Je ne sais pas. Il n'y a pas d'adresse."),
      line("murzik", "Neden adres yok? Ne yazıyor… «İyi ki doğdun, torunum.»", "Pourquoi n'y a-t-il pas d'adresse d'expéditeur ? Qu'est-ce qu'elle dit… « Joyeux anniversaire, mon petit-fils. »"),
      line("nur", "Bu… Asya'nın yazısı! Bu onun yazısı!", "C'est… l'écriture d'Asya ! C'est son écriture !"),
      line("tom", "Nereden geldi? Bak, posta damgası: Trabzon!", "D'où vient-elle ? Regarde, le cachet : Trabzon !"),
      line("murzik", "Hangi şehirden? Trabzon'dan! Trabzon'a gidelim!", "Quelle ville ? Trabzon ! Allons à Trabzon !"),
    ],
    gist: choice("trak7-d1", "D'où vient la carte postale ?", [
      ["De Trabzon.", true],
      ["D'Ankara.", false],
      ["De Paris.", false],
    ]),
  },
  grammar: [
    {
      title: "Les mots interrogatifs",
      paragraphs: [
        "Kim? — qui ? Ne? — quoi ? Nerede? — où ? Nereden? — d'où ? Nereye? — où (vers où) ? Ne zaman? — quand ? Neden? — pourquoi ? Hangi? — quel ? Kaç? — combien ?",
        "Contrairement au français, le mot interrogatif ne se met pas en premier — il se met d'habitude juste avant le verbe : Kartpostalı kim gönderdi? — Qui a envoyé la carte ? (mot à mot « la carte qui a envoyé ? »)",
      ],
      examples: [
        { ru: "Kartpostal nereden geldi?", en: "D'où vient la carte postale ?" },
        { ru: "Asya şimdi nerede?", en: "Où est Asya maintenant ?" },
      ],
    },
  ],
  tasks: [
    listen("trak7-t1", "Examen audio. Que dit la carte postale ?", "İyi ki doğdun, torunum. Seni çok seviyorum.", [
      ["Joyeux anniversaire, mon petit-fils. Je t'aime très fort.", true],
      ["Viens me voir.", false],
      ["Où habites-tu maintenant ?", false],
    ]),
    choice("trak7-t2", "Comment demander « D'où vient la lettre ? »", [
      ["Mektup nereden geldi?", true],
      ["Mektup nereye geldi?", false],
      ["Mektup nerede geldi?", false],
    ], { skill: "grammar" }),
    match("trak7-t3", "Associe les paires.", [
      ["kim", "qui"],
      ["neden", "pourquoi"],
      ["nereden", "d'où"],
      ["hangi", "quel"],
    ], { skill: "words" }),
    spell("trak7-t4", "Épelle le mot « petit-enfant ».", "torun"),
    speak("trak7-t5", "Kartpostalı kim gönderdi?", "Bilmiyorum! Adres yok.", "Je ne sais pas ! Il n'y a pas d'adresse.", { help: "Réponds à voix haute." }),
    script("trak7-t6", "Souviens-toi de tout Ankara. Complète les conversations.", [
      { speaker: "Mamie Nur", text: "Bugün ayın kaçı?" },
      { speaker: "You", answer: "Bugün beş Mayıs.", options: ["Bugün beş Mayıs.", "Bugün Mayıs.", "Beş yaşında."] },
      { speaker: "Tom", text: "Doğum günün ne zaman?" },
      { speaker: "You", answer: "Beş Mayıs'ta.", options: ["Beş Mayıs'ta.", "Beş Mayıs'tan.", "Hemen!"] },
      { speaker: "Mamie Nur", text: "İyi ki doğdun!" },
      { speaker: "You", answer: "Teşekkür ederim!", options: ["Teşekkür ederim!", "Geçmiş olsun!", "Sürpriz!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "battaniye",
    itemName: "Couverture en laine angora",
    itemNameRu: "Battaniye",
    ru: "Yaşasın! Yumuşak bir battaniye!",
    en: "Hourra ! Une couverture toute douce !",
    a11y: "Une couverture moelleuse en laine angora blanche est pliée sur un fauteuil.",
    image: p("battaniye"),
    steps: ["Mamie Nur sort une couverture blanche d'un coffre.", "« Bunu Asya ile birlikte ördük. » — « Asya et moi, on l'a tricotée ensemble. »", "La couverture est douce comme un nuage.", "Murzik s'y enroule et sourit."],
    bridge: "Demain — Trabzon. Peut-être qu'au bureau de poste, là-bas, quelqu'un a vu qui l'a envoyée.",
  },
};

const story: CityStory = {
  home: {
    name: "Chez mamie Nur",
    nameRu: "Nur Nine'nin evi",
    image: p("home"),
    a11y: "Une chambre douillette et vide chez mamie Nur : des rideaux en dentelle, un vieux fauteuil, une broderie au mur. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "battaniye",
  welcomeRu: "Merhaba, Ankara!",
  welcomeEn: "Bonjour, Ankara !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom près du vieux château d'Ankara sur une colline ; en bas, la grande ville. Une chaude journée de printemps.",
  departureImage: p("departure"),
  departureA11y: "Mamie Nur, une chatte angora blanche en châle, accompagne Murzik et Tom à l'aéroport en agitant un mouchoir blanc.",
  finale: [
    {
      image: p("postcard"),
      a11y: "Gros plan : une carte postale avec un petit chat roux dans le coin et un timbre bleu montrant des montagnes vertes au bord de la mer, avec un cachet rond. Pas d'adresse d'expéditeur. La patte blanche de mamie Nur tient la carte.",
      lines: [
        { en: "Mamie Nur tient longtemps la carte entre ses pattes." },
        { ru: "Asya yaşıyor. Biliyorum.", en: "Asya est vivante. Je le sais." },
        { en: "L'écriture est récente. Le cachet : Trabzon, une ville sur la côte de la mer Noire." },
      ],
    },
    {
      image: p("battaniye"),
      a11y: "Murzik fait le tour de sa chambre chez mamie Nur, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre chez mamie Nur. Tom la prend en photo pour le magazine." },
        { en: "Murzik emporte la couverture blanche que les deux sœurs ont tricotée." },
        { en: "Murzik met la carte d'anniversaire dans son sac à dos, pour l'avoir toujours avec lui." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Ankara tamamlandı!", en: "Ankara, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — dixième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Mamie Nur dit au revoir en agitant un mouchoir blanc.",
      lines: [
        { ru: "Hoşça kal, Nur Nine!", en: "Au revoir, mamie Nur !" },
        { ru: "Sıradaki durak: Trabzon!", en: "Prochain arrêt : Trabzon !" },
      ],
    },
    {
      image: p("flight"),
      a11y: "Un avion vole vers le nord au-dessus des montagnes, vers la mer Noire.",
      lines: [{ ru: "Ankara → Trabzon", en: "Ankara → Trabzon" }],
    },
    {
      image: pic("tr/trabzon/arrival"),
      a11y: "Murzik et Tom à Trabzon : des montagnes vertes, des plantations de thé sur les pentes et la mer Noire toute grise. Il bruine.",
      lines: [
        { ru: "Merhaba, Trabzon!", en: "Bonjour, Trabzon !" },
        { ru: "Yine yağmur!", en: "Encore la pluie !" },
      ],
    },
  ],
};

export const trAnkaraFr = {
  id: "tr-ankara",
  name: "Ankara",
  nameTr: "Ankara",
  lessons: [ankara1, ankara2, ankara3, ankara4, ankara5, ankara6, ankara7],
  story,
};
