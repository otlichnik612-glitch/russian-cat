import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Trabzon · “At the hotel” · a booking, things not working, requests, a missing suitcase, the post office, checking out. French version. */

const p = (name: string) => pic(`tr/trabzon/${name}`);

const trabzon1: Lesson = {
  id: "tr-a1-trabzon-1",
  level: "A1",
  cityId: "tr-trabzon",
  number: 1,
  title: "J'ai une réservation",
  minutes: 7,
  goals: ["Dire qu'on a une réservation", "Dire « pour deux nuits » : iki gece", "Demander pour le petit-déjeuner et l'étage"],
  vocabNote: "Souviens-toi : pas de pluriel après un nombre : iki gece — « deux nuits » (mot à mot « deux nuit »), üç gün — « trois jours », beş oda — « cinq chambres ».",
  vocab: [
    v("trtt1-1", "Rezervasyonum var.", "J'ai une réservation.", "Tom à la réception, trempé par la pluie.", "Écouter Rezervasyonum var", p("l1-1")),
    v("trtt1-2", "iki gece", "deux nuits", "Deux lunes au-dessus de la mer Noire.", "Écouter iki gece", p("l1-2")),
    v("trtt1-3", "iki kişilik oda", "une chambre double, une chambre pour deux", "Une chambre avec deux lits et une fenêtre sur la mer.", "Écouter iki kişilik oda", p("l1-3")),
    v("trtt1-4", "Anahtarınız burada.", "Voici votre clé.", "Une vieille clé avec un porte-clés en bois numéroté 305.", "Écouter Anahtarınız burada", p("l1-4")),
    v("trtt1-5", "Kahvaltı dahil mi?", "Le petit-déjeuner est compris ?", "Tom montre une image de thé et de petits pains.", "Écouter Kahvaltı dahil mi", p("l1-5")),
    v("trtt1-6", "Oda kaçıncı katta?", "La chambre est à quel étage ?", "Murzik regarde en haut de l'escalier.", "Écouter Oda kaçıncı katta", p("l1-6")),
    v("trtt1-7", "asansör", "ascenseur", "Un vieil ascenseur avec une grille en métal pliante.", "Écouter asansör", p("l1-7")),
  ],
  dialogue: {
    title: "À la réception",
    note: "Adınız? — « Votre nom ? » Buyurun — « voilà ». Üçüncü kat — « le troisième étage ».",
    lines: [
      line("tom", "İyi akşamlar! Rezervasyonum var.", "Bonsoir ! J'ai une réservation."),
      line("receptionist", "Hoş geldiniz! Adınız?", "Bienvenue ! Votre nom ?"),
      line("tom", "Tom Brown. İki gece.", "Tom Brown. Deux nuits."),
      line("receptionist", "Evet, iki kişilik oda. Buyurun, anahtarınız.", "Oui, une chambre pour deux. Voici votre clé."),
      line("murzik", "Kahvaltı dahil mi?", "Le petit-déjeuner est compris ?"),
      line("receptionist", "Evet, dahil. Sabah yediden ona kadar.", "Oui, il est compris. De sept à dix heures du matin."),
      line("tom", "Oda kaçıncı katta?", "La chambre est à quel étage ?"),
      line("receptionist", "Üçüncü katta. Asansör orada.", "Au troisième. L'ascenseur est là-bas."),
    ],
    gist: choice("trtt1-d1", "Pour combien de nuits Tom a-t-il réservé ?", [
      ["Deux.", true],
      ["Trois.", false],
      ["Un.", false],
    ]),
  },
  grammar: [
    {
      title: "Pas de -ler après un nombre",
      paragraphs: [
        "Le pluriel -ler / -lar ne s'utilise pas après un nombre : iki gece (deux nuits), üç gün (trois jours), dört kişi (quatre personnes).",
        "Ni après « combien » et « beaucoup de » : kaç gece? (combien de nuits ?), çok oda (beaucoup de chambres).",
      ],
      examples: [
        { ru: "Üç gece kalıyoruz.", en: "Nous restons trois nuits." },
        { ru: "Otelde kırk oda var.", en: "L'hôtel a quarante chambres." },
      ],
    },
  ],
  tasks: [
    choice("trtt1-t1", "Comment dit-on « trois nuits » ?", [
      ["üç gece", true],
      ["üç geceler", false],
      ["üçler gece", false],
    ], { skill: "grammar" }),
    listen("trtt1-t2", "Écoute. La chambre est à quel étage ?", "Odanız beşinci katta.", [
      ["Au cinquième.", true],
      ["Au premier.", false],
      ["Au troisième.", false],
    ]),
    match("trtt1-t3", "Associe les paires.", [
      ["anahtar", "clé"],
      ["asansör", "ascenseur"],
      ["gece", "nuit"],
      ["oda", "chambre"],
    ], { skill: "words" }),
    missing("trtt1-t4", "Quelle lettre manque ? (« ascenseur »)", "asans", "r", "ö", ["ö", "o", "ü"]),
    speak("trtt1-t5", "İyi akşamlar! Buyurun?", "Rezervasyonum var. İki gece.", "J'ai une réservation. Deux nuits.", { help: "Dis à voix haute que tu as une réservation pour deux nuits." }),
    choice("trtt1-t6", "Comment demander « On est le combien, aujourd'hui ? »", [
      ["Bugün ayın kaçı?", true],
      ["Bugün kaçıncı kat?", false],
      ["Bugün kaç gece?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yagmurluk",
    itemName: "Imperméable jaune",
    itemNameRu: "Yağmurluk",
    ru: "Yaşasın! Bir yağmurluk!",
    en: "Hourra ! Un imperméable !",
    a11y: "Un petit imperméable jaune vif à capuche est accroché à une patère près de la porte de la chambre.",
    image: p("yagmurluk"),
    steps: ["Dehors, il pleut encore.", "Le réceptionniste tend un petit imperméable jaune.", "« Trabzon'da hep lazım! » — « À Trabzon, on en a toujours besoin ! »", "Murzik l'accroche à la patère près de la porte."],
    bridge: "Murzik appuie sur l'interrupteur de la chambre… et rien ne se passe !",
  },
};

const trabzon2: Lesson = {
  id: "tr-a1-trabzon-2",
  level: "A1",
  cityId: "tr-trabzon",
  number: 2,
  title: "Ça ne marche pas !",
  minutes: 7,
  goals: ["Dire que quelque chose ne marche pas", "Former la négation : çalışmıyor", "Demander de l'aide au téléphone"],
  vocabNote: "Çalışmak veut dire « travailler » — pour les personnes comme pour les machines (en français, une machine « marche »). Bozuk veut dire « cassé, en panne ».",
  vocab: [
    v("trtt2-1", "Işık yanmıyor.", "La lumière ne marche pas.", "Murzik appuie sur l'interrupteur dans la chambre plongée dans le noir.", "Écouter Işık yanmıyor", p("l2-1")),
    v("trtt2-2", "Klima çalışmıyor.", "La climatisation ne marche pas.", "Tom tapote la télécommande de la climatisation.", "Écouter Klima çalışmıyor", p("l2-2")),
    v("trtt2-3", "Sıcak su yok.", "Il n'y a pas d'eau chaude.", "Murzik sursaute sous une douche froide.", "Écouter Sıcak su yok", p("l2-3")),
    v("trtt2-4", "Televizyon bozuk.", "La télé est en panne.", "Rien que de la neige grise sur l'écran de la télé.", "Écouter Televizyon bozuk", p("l2-4")),
    v("trtt2-5", "Yardım edebilir misiniz?", "Vous pouvez nous aider ?", "Tom appelle depuis le téléphone de la chambre.", "Écouter Yardım edebilir misiniz", p("l2-5")),
    v("trtt2-6", "Hemen geliyorum.", "J'arrive tout de suite.", "Le réceptionniste se dépêche dans le couloir avec une boîte à outils.", "Écouter Hemen geliyorum", p("l2-6")),
    v("trtt2-7", "Oldu!", "Et voilà !", "La lumière est revenue dans la chambre.", "Écouter Oldu", p("l2-7")),
  ],
  dialogue: {
    title: "Un appel à la réception",
    note: "Alo — « allô » (au téléphone). Elektrik — « électricité ». Fırtına — « tempête ».",
    lines: [
      line("tom", "Alo, iyi akşamlar. Oda üç yüz beş.", "Allô, bonsoir. Chambre trois cent cinq."),
      line("receptionist", "Buyurun, efendim.", "Oui, monsieur, que puis-je faire pour vous ?"),
      line("tom", "Işık yanmıyor. Klima da çalışmıyor.", "La lumière ne marche pas. Et la climatisation ne marche pas non plus."),
      line("receptionist", "Çok özür dilerim. Elektrik yok, fırtına var.", "Je suis vraiment désolé. Il n'y a pas d'électricité — il y a une tempête."),
      line("murzik", "Sıcak su da yok!", "Et il n'y a pas d'eau chaude !"),
      line("receptionist", "Hemen geliyorum. Size bir el feneri getiriyorum.", "J'arrive tout de suite. Je vous apporte une lampe de poche."),
    ],
    gist: choice("trtt2-d1", "Pourquoi la lumière ne marche-t-elle pas ?", [
      ["Il y a une tempête, et pas d'électricité.", true],
      ["L'ampoule a grillé.", false],
      ["Tom n'a pas payé.", false],
    ]),
  },
  grammar: [
    {
      title: "Ne fait pas : -mıyor, -miyor, -muyor, -müyor",
      paragraphs: [
        "La négation se met avant -yor : çalış-mıyor (ça ne marche pas), gel-miyor (il ne vient pas), bul-muyor (il ne trouve pas), gör-müyor (il ne voit pas).",
        "La voyelle de la négation s'accorde avec le mot : ı, i, u ou ü. Pour parler de soi : çalışmıyorum — je ne travaille pas, anlamıyorum — je ne comprends pas.",
      ],
      examples: [
        { ru: "Asansör çalışmıyor.", en: "L'ascenseur ne marche pas." },
        { ru: "Murzik uyumuyor, kitap okuyor.", en: "Murzik ne dort pas ; il lit un livre." },
      ],
    },
  ],
  tasks: [
    choice("trtt2-t1", "Comment dit-on « L'ascenseur ne marche pas » ?", [
      ["Asansör çalışmıyor.", true],
      ["Asansör çalışıyor.", false],
      ["Asansör çalışmak yok.", false],
    ], { skill: "grammar" }),
    listen("trtt2-t2", "Écoute. Qu'est-ce qui ne marche pas ?", "Televizyon çalışmıyor.", [
      ["La télé.", true],
      ["Le téléphone.", false],
      ["L'ascenseur.", false],
    ]),
    match("trtt2-t3", "Associe les paires.", [
      ["bozuk", "cassé, en panne"],
      ["ışık", "lumière"],
      ["sıcak su", "eau chaude"],
      ["Oldu!", "Et voilà !"],
    ], { skill: "words" }),
    missing("trtt2-t4", "Quelle lettre manque ? (« lumière »)", "", "şık", "I", ["I", "İ", "U"]),
    speak("trtt2-t5", "Resepsiyon, buyurun?", "Klima çalışmıyor. Yardım edebilir misiniz?", "La climatisation ne marche pas. Vous pouvez nous aider ?", { help: "Signale une panne à voix haute et demande de l'aide." }),
    listen("trtt2-t6", "Souviens-toi de la leçon précédente. Que demandent-ils ?", "Kahvaltı dahil mi?", [
      ["Le petit-déjeuner est compris ?", true],
      ["Où est l'ascenseur ?", false],
      ["Combien coûte la chambre ?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "el-feneri",
    itemName: "Lampe de poche",
    itemNameRu: "El feneri",
    ru: "Yaşasın! Bir el feneri!",
    en: "Hourra ! Une lampe de poche !",
    a11y: "Une petite lampe de poche en métal projette un rayon chaud sur le mur de la chambre.",
    image: p("el-feneri"),
    steps: ["Le réceptionniste apporte une lampe de poche.", "Avec le rayon, Murzik dessine des chats et des étoiles sur le mur.", "Une heure plus tard, la lumière revient.", "« Fener senin olsun! » — « Garde la lampe ! »"],
    bridge: "Le matin, Murzik a besoin d'une autre serviette. Comment la demander ?",
  },
};

const trabzon3: Lesson = {
  id: "tr-a1-trabzon-3",
  level: "A1",
  cityId: "tr-trabzon",
  number: 3,
  title: "Je pourrais avoir… ?",
  minutes: 7,
  goals: ["Demander poliment : alabilir miyim?", "Dire « je veux voir » : görmek istiyorum", "Demander le mot de passe du Wi-Fi"],
  vocabNote: "Alabilir miyim? — « Je pourrais avoir ? » C'est une formule polie toute faite : Bir çay alabilir miyim? — « Je pourrais avoir un thé ? »",
  vocab: [
    v("trtt3-1", "Bir havlu daha alabilir miyim?", "Je pourrais avoir une autre serviette ?", "Murzik passe la tête par la porte, enroulé dans une toute petite serviette.", "Écouter Bir havlu daha alabilir miyim", p("l3-1")),
    v("trtt3-2", "yastık", "oreiller", "Un oreiller blanc et moelleux.", "Écouter yastık", p("l3-2")),
    v("trtt3-3", "Wi-Fi şifresi ne?", "C'est quoi, le mot de passe du Wi-Fi ?", "Tom à la réception avec son ordinateur.", "Écouter Wi-Fi şifresi ne", p("l3-3")),
    v("trtt3-4", "Ben denizi görmek istiyorum.", "Je veux voir la mer.", "Murzik colle son nez à la fenêtre ; dehors, il y a du brouillard.", "Écouter Ben denizi görmek istiyorum", p("l3-4")),
    v("trtt3-5", "Çay içmek istiyorum.", "Je voudrais un thé.", "Un verre de thé en forme de tulipe sur une soucoupe.", "Écouter Çay içmek istiyorum", p("l3-5")),
    v("trtt3-6", "Tabii, buyurun.", "Bien sûr, voilà.", "Le réceptionniste tend une pile de serviettes.", "Écouter Tabii, buyurun", p("l3-6")),
    v("trtt3-7", "Uzungöl", "Le lac Uzungöl", "Un lac dans des montagnes vertes, avec une mosquée en bois au bord de l'eau et de la brume au-dessus.", "Écouter Uzungöl", p("l3-7")),
  ],
  dialogue: {
    title: "Les demandes du matin",
    note: "Daha veut dire « encore, un autre ». Dolapta — « dans l'armoire ». Gezi — « une excursion ».",
    lines: [
      line("murzik", "Günaydın! Bir havlu daha alabilir miyim?", "Bonjour ! Je pourrais avoir une autre serviette ?"),
      line("receptionist", "Tabii, buyurun. Yastık da dolapta var.", "Bien sûr, voilà. Il y a aussi un oreiller dans l'armoire."),
      line("tom", "Wi-Fi şifresi ne?", "C'est quoi, le mot de passe du Wi-Fi ?"),
      line("receptionist", "Karadeniz, büyük harfle.", "« Karadeniz », avec une majuscule."),
      line("murzik", "Bugün Uzungöl'ü görmek istiyorum!", "Aujourd'hui, je veux voir Uzungöl !"),
      line("receptionist", "Çok güzel bir yer. Saat onda gezi var.", "C'est un endroit magnifique. Il y a une excursion à dix heures."),
    ],
    gist: choice("trtt3-d1", "Que veut voir Murzik ?", [
      ["Le lac Uzungöl.", true],
      ["La mer.", false],
      ["La poste.", false],
    ]),
  },
  grammar: [
    {
      title: "Vouloir faire : -mek istiyorum",
      paragraphs: [
        "« Je veux faire quelque chose », c'est le verbe à la forme en -mek / -mak + istiyorum : görmek istiyorum (je veux voir), içmek istiyorum (je veux boire), kalmak istiyorum (je veux rester). Remarque l'ordre : le verbe vient d'abord, « vouloir » à la fin.",
        "« Je ne veux pas », c'est istemiyorum : Uyumak istemiyorum! — Je ne veux pas dormir !",
      ],
      examples: [
        { ru: "Akşam denize gitmek istiyorum.", en: "Ce soir, je veux aller à la mer." },
        { ru: "Tom fotoğraf çekmek istiyor.", en: "Tom veut prendre des photos." },
      ],
    },
  ],
  tasks: [
    choice("trtt3-t1", "Comment dit-on « Je veux rester » ?", [
      ["Kalmak istiyorum.", true],
      ["Kalıyorum istiyorum.", false],
      ["Kal istiyorum.", false],
    ], { skill: "grammar" }),
    listen("trtt3-t2", "Écoute. Que demandent-ils ?", "Bir yastık daha alabilir miyim?", [
      ["Un autre oreiller.", true],
      ["Une autre serviette.", false],
      ["Encore du thé.", false],
    ]),
    match("trtt3-t3", "Associe les paires.", [
      ["havlu", "serviette"],
      ["yastık", "oreiller"],
      ["şifre", "mot de passe"],
      ["daha", "encore, un autre"],
    ], { skill: "words" }),
    spell("trtt3-t4", "Épelle le mot « serviette ».", "havlu"),
    speak("trtt3-t5", "Ne yapmak istiyorsun?", "Ben denizi görmek istiyorum.", "Je veux voir la mer.", { help: "Dis à voix haute ce que tu veux faire." }),
    choice("trtt3-t6", "Comment dit-on « La lumière ne marche pas » ?", [
      ["Işık yanmıyor.", true],
      ["Işık yanıyor.", false],
      ["Işık yok yanıyor.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "findik",
    itemName: "Bocal de noisettes",
    itemNameRu: "Fındık",
    ru: "Yaşasın! Bir kavanoz fındık!",
    en: "Hourra ! Un bocal de noisettes !",
    a11y: "Un bocal en verre de noisettes grillées, avec un ruban vert noué autour du couvercle.",
    image: p("findik"),
    steps: ["À Uzungöl, une vieille femme vend des noisettes.", "« Karadeniz'in fındığı en iyisi! » — « Les noisettes de la mer Noire sont les meilleures ! »", "Elle offre tout un bocal à Murzik.", "Le bocal va sur l'étagère de la chambre."],
    bridge: "Après le déjeuner, Murzik revient dans la chambre… et sa valise a disparu !",
  },
};

const trabzon4: Lesson = {
  id: "tr-a1-trabzon-4",
  level: "A1",
  cityId: "tr-trabzon",
  number: 4,
  title: "La valise disparue",
  minutes: 7,
  goals: ["Dire que quelque chose a disparu", "Parler du passé : -dı, -di, -tı, -ti", "Décrire un objet : sa couleur, ce qu'il y a dedans"],
  vocabNote: "Kayboldu — « il s'est perdu, il a disparu ». Bıraktım — « je l'ai laissé ». Endişelenme — « ne t'inquiète pas ».",
  vocab: [
    v("trtt4-1", "Bavulum kayboldu!", "Ma valise a disparu !", "Murzik est au milieu de la chambre vide, les pattes sur les joues.", "Écouter Bavulum kayboldu", p("l4-1")),
    v("trtt4-2", "Burada bıraktım.", "Je l'ai laissée ici.", "Murzik montre l'endroit vide près du lit.", "Écouter Burada bıraktım", p("l4-2")),
    v("trtt4-3", "Rengi ne?", "De quelle couleur est-elle ?", "Le réceptionniste tient un carnet et un stylo.", "Écouter Rengi ne", p("l4-3")),
    v("trtt4-4", "Kırmızı, küçük.", "Rouge, et petite.", "Le dessin d'une petite valise rouge.", "Écouter Kırmızı, küçük", p("l4-4")),
    v("trtt4-5", "İçinde ne var?", "Qu'y a-t-il dedans ?", "Un schéma : une valise avec des cartes postales et des jouets dedans.", "Écouter İçinde ne var", p("l4-5")),
    v("trtt4-6", "Bulamıyorum.", "Je ne la trouve pas.", "Murzik regarde sous le lit.", "Écouter Bulamıyorum", p("l4-6")),
    v("trtt4-7", "Endişelenme!", "Ne t'inquiète pas !", "Tom pose la main sur l'épaule de Murzik.", "Écouter Endişelenme", p("l4-7")),
  ],
  dialogue: {
    title: "La chambre vide",
    note: "Sabah — « ce matin, le matin ». Kartpostallarım — « mes cartes postales ». Arıyoruz — « nous cherchons ».",
    lines: [
      line("murzik", "Tom! Bavulum kayboldu!", "Tom ! Ma valise a disparu !"),
      line("tom", "Nerede bıraktın?", "Où l'as-tu laissée ?"),
      line("murzik", "Sabah burada bıraktım. Şimdi yok!", "Je l'ai laissée ici ce matin. Et maintenant, elle n'est plus là !"),
      line("receptionist", "Rengi ne?", "De quelle couleur est-elle ?"),
      line("murzik", "Kırmızı, küçük. İçinde bütün kartpostallarım var!", "Rouge, et petite. Toutes mes cartes postales sont dedans !"),
      line("receptionist", "Endişelenme, hemen arıyoruz.", "Ne vous inquiétez pas, on la cherche tout de suite."),
    ],
    gist: choice("trtt4-d1", "Qu'y a-t-il dans la valise ?", [
      ["Toutes les cartes postales de Murzik.", true],
      ["L'appareil photo de Tom.", false],
      ["La clé de la chambre.", false],
    ]),
  },
  grammar: [
    {
      title: "Le passé : -dı, -di, -du, -dü",
      paragraphs: [
        "Le passé, c'est la terminaison -dı / -di / -du / -dü : geldi (est venu), kaldı (est resté), buldu (a trouvé), gördü (a vu).",
        "Après ç, f, h, k, p, s, ş, t, c'est -tı / -ti / -tu / -tü : bıraktı (a laissé), gitti (est allé), içti (a bu). Pour « je », on ajoute -m : geldim, bıraktım. Pour « tu », on ajoute -n : geldin, bıraktın.",
      ],
      examples: [
        { ru: "Dün Trabzon'a geldik.", en: "Nous sommes arrivés à Trabzon hier." },
        { ru: "Murzik çay içti.", en: "Murzik a bu du thé." },
      ],
    },
  ],
  tasks: [
    choice("trtt4-t1", "Comment dit-on « Je l'ai laissée » ?", [
      ["bıraktım", true],
      ["bırakdım", false],
      ["bırakıyorum", false],
    ], { skill: "grammar" }),
    listen("trtt4-t2", "Écoute. Comment est la valise ?", "Bavulum büyük ve mavi.", [
      ["Grande et bleue.", true],
      ["Petite et rouge.", false],
      ["Grande et rouge.", false],
    ]),
    match("trtt4-t3", "Associe les paires.", [
      ["bavul", "valise"],
      ["kayboldu", "il a disparu"],
      ["içinde", "dedans"],
      ["Endişelenme!", "Ne t'inquiète pas !"],
    ], { skill: "words" }),
    missing("trtt4-t4", "Quelle lettre manque ? (« Je ne la trouve pas »)", "Bula", "ıyorum", "m", ["m", "n", "y"]),
    speak("trtt4-t5", "Ne oldu?", "Bavulum kayboldu! Kırmızı, küçük.", "Ma valise a disparu ! Elle est rouge et petite.", { help: "Dis à voix haute ce qui a disparu et décris-le." }),
    choice("trtt4-t6", "Comment demander poliment un autre oreiller ?", [
      ["Bir yastık daha alabilir miyim?", true],
      ["Bir yastık daha istemiyorum.", false],
      ["Yastık çalışmıyor.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bavul-etiketi",
    itemName: "Étiquette à bagage",
    itemNameRu: "Bavul etiketi",
    ru: "Yaşasın! Bir bavul etiketi!",
    en: "Hourra ! Une étiquette à bagage !",
    a11y: "Une étiquette à bagage en cuir en forme de tête de chat, avec une carte dedans où est écrit « Murzik ».",
    image: p("bavul-etiketi"),
    steps: ["Le réceptionniste apporte une étiquette à bagage en cuir.", "« Bavul bulununca, bunu tak! » — « Quand ta valise sera retrouvée, mets-lui ça ! »", "Murzik écrit son nom sur la carte.", "L'étiquette attend sur la table de chevet."],
    bridge: "Pendant qu'on cherche la valise, Murzik va à la poste pour se renseigner sur la carte postale.",
  },
};

const trabzon5: Lesson = {
  id: "tr-a1-trabzon-5",
  level: "A1",
  cityId: "tr-trabzon",
  number: 5,
  title: "À la poste",
  minutes: 7,
  goals: ["Acheter un timbre et une enveloppe", "Demander qui a envoyé une carte postale", "Dire « je ne me souviens pas »"],
  vocabNote: "En Turquie, la poste s'appelle la PTT. Göndermek veut dire « envoyer », hatırlamak « se souvenir ».",
  vocab: [
    v("trtt5-1", "postane", "poste", "Un bâtiment de la poste avec une enseigne jaune PTT.", "Écouter postane", p("l5-1")),
    v("trtt5-2", "pul", "timbre", "Un timbre montrant des montagnes vertes au bord de la mer.", "Écouter pul", p("l5-2")),
    v("trtt5-3", "zarf", "enveloppe", "Une enveloppe blanche.", "Écouter zarf", p("l5-3")),
    v("trtt5-4", "Mektup göndermek istiyorum.", "Je voudrais envoyer une lettre.", "Murzik tend une lettre par le guichet.", "Écouter Mektup göndermek istiyorum", p("l5-4")),
    v("trtt5-5", "Bu kartpostalı kim gönderdi?", "Qui a envoyé cette carte ?", "Murzik pose la carte postale sur le comptoir.", "Écouter Bu kartpostalı kim gönderdi", p("l5-5")),
    v("trtt5-6", "Hatırlamıyorum.", "Je ne me souviens pas.", "L'employé de la poste écarte les mains.", "Écouter Hatırlamıyorum", p("l5-6")),
    v("trtt5-7", "Her gün çok mektup geliyor.", "Beaucoup de lettres arrivent tous les jours.", "Des piles de lettres et de colis derrière le comptoir.", "Écouter Her gün çok mektup geliyor", p("l5-7")),
  ],
  dialogue: {
    title: "Guichet numéro deux",
    note: "Belki veut dire « peut-être ». Yaşlı bir kedi — « un vieux chat ». Bir sorum var — « j'ai une question ».",
    lines: [
      line("murzik", "Merhaba! Bir pul ve bir zarf, lütfen.", "Bonjour ! Un timbre et une enveloppe, s'il vous plaît."),
      line("postman", "Buyurun. On beş lira.", "Voilà. Quinze livres."),
      line("murzik", "Bir sorum var. Bu kartpostalı kim gönderdi?", "J'ai une question. Qui a envoyé cette carte ?"),
      line("postman", "Hmm… Hatırlamıyorum. Her gün çok mektup geliyor.", "Hmm… Je ne me souviens pas. Beaucoup de lettres arrivent tous les jours."),
      line("murzik", "Yaşlı bir kedi… belki?", "Un vieux chat… peut-être ?"),
      line("postman", "Bilmiyorum, özür dilerim.", "Je ne sais pas, je suis désolé."),
    ],
    gist: choice("trtt5-d1", "L'employé se souvient-il de qui a envoyé la carte ?", [
      ["Non, il ne s'en souvient pas.", true],
      ["Oui, c'était un vieux chat.", false],
      ["Oui, c'était Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "Ne fait pas : révision",
      paragraphs: [
        "La négation : hatırla-mıyor-um (je ne me souviens pas), bil-miyor-um (je ne sais pas), gör-müyor-um (je ne vois pas).",
        "Ne les confonds pas : yok veut dire « il n'y a pas » (Adres yok. — Il n'y a pas d'adresse), tandis que -mıyor veut dire « ne fait pas » (Gelmiyor. — Il ne vient pas).",
      ],
      examples: [
        { ru: "Postane bugün çalışmıyor.", en: "La poste n'est pas ouverte aujourd'hui." },
        { ru: "Zarf yok.", en: "Il n'y a pas d'enveloppes." },
      ],
    },
  ],
  tasks: [
    choice("trtt5-t1", "Comment dit-on « Je ne me souviens pas » ?", [
      ["Hatırlamıyorum.", true],
      ["Hatırlıyorum.", false],
      ["Hatırlamak yok.", false],
    ], { skill: "grammar" }),
    listen("trtt5-t2", "Écoute. Combien ça coûte ?", "Yirmi lira.", [
      ["Vingt livres.", true],
      ["Douze livres.", false],
      ["Deux cents livres.", false],
    ]),
    match("trtt5-t3", "Associe les paires.", [
      ["postane", "poste"],
      ["pul", "timbre"],
      ["zarf", "enveloppe"],
      ["mektup", "lettre"],
    ], { skill: "words" }),
    spell("trtt5-t4", "Épelle le mot « enveloppe ».", "zarf"),
    speak("trtt5-t5", "Buyurun, ne istiyorsunuz?", "Mektup göndermek istiyorum. Bir pul, lütfen.", "Je voudrais envoyer une lettre. Un timbre, s'il vous plaît.", { help: "Dis à voix haute que tu voudrais envoyer une lettre." }),
    listen("trtt5-t6", "Souviens-toi de la leçon précédente. Que s'est-il passé ?", "Bavulum kayboldu.", [
      ["Une valise a disparu.", true],
      ["La télé est tombée en panne.", false],
      ["Il n'y a pas d'eau chaude.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pul-albumu",
    itemName: "Album de timbres",
    itemNameRu: "Pul albümü",
    ru: "Yaşasın! Bir pul albümü!",
    en: "Hourra ! Un album de timbres !",
    a11y: "Un album de timbres vert, avec déjà trois timbres dedans : Istanbul, la Cappadoce et Trabzon.",
    image: p("pul-albumu"),
    steps: ["L'employé de la poste sort un album de timbres d'un tiroir.", "« Üzgünüm, hatırlamıyorum. Ama bu senin olsun. » — « Je suis désolé, je ne me souviens pas. Mais tu peux garder ça. »", "Murzik colle ses premiers timbres.", "Et un jour — un timbre de grand-mère Asya."],
    bridge: "Tom attend Murzik devant la poste : « Çabuk! Otelden telefon geldi! » — « Vite ! L'hôtel a appelé ! »",
  },
};

const trabzon6: Lesson = {
  id: "tr-a1-trabzon-6",
  level: "A1",
  cityId: "tr-trabzon",
  number: 6,
  title: "Retrouvée !",
  minutes: 7,
  goals: ["Dire où on a retrouvé quelque chose", "Dire « n'a pas fait » : -medi, -madı", "Se réjouir et remercier"],
  vocabNote: "Bulundu — « on l'a retrouvé ». Çamaşırhane — « buanderie ». Eksik — « manquant » : Hiçbir şey eksik değil — « Rien ne manque ».",
  vocab: [
    v("trtt6-1", "Bavulun bulundu!", "Votre valise a été retrouvée !", "Le réceptionniste court dans le couloir en faisant de grands signes.", "Écouter Bavulun bulundu", p("l6-1")),
    v("trtt6-2", "çamaşırhanede", "dans la buanderie", "Une buanderie : des machines à laver, des piles de linge.", "Écouter çamaşırhanede", p("l6-2")),
    v("trtt6-3", "Üstünde bir kedi uyuyor.", "Il y a un chat qui dort dessus.", "Un gros chat gris est roulé en boule sur la valise rouge.", "Écouter Üstünde bir kedi uyuyor", p("l6-3")),
    v("trtt6-4", "Ne kadar tatlı!", "Trop mignon !", "Murzik regarde tendrement le chat endormi.", "Écouter Ne kadar tatlı", p("l6-4")),
    v("trtt6-5", "Hiçbir şey eksik değil.", "Rien ne manque.", "Murzik compte les cartes postales dans sa valise.", "Écouter Hiçbir şey eksik değil", p("l6-5")),
    v("trtt6-6", "Kimse almadı.", "Personne ne l'a prise.", "Le réceptionniste rit et hausse les épaules.", "Écouter Kimse almadı", p("l6-6")),
    v("trtt6-7", "Çok şükür!", "Dieu merci !", "Murzik serre sa valise dans ses bras.", "Écouter Çok şükür", p("l6-7")),
  ],
  dialogue: {
    title: "La buanderie",
    note: "Pamuk — « coton » — c'est le nom de la chatte de l'hôtel. Taşıdı — « a porté, a déplacé ». Herhalde — « sans doute ».",
    lines: [
      line("receptionist", "Murzik! Bavulun bulundu! Çamaşırhanede!", "Murzik ! Ta valise a été retrouvée ! Dans la buanderie !"),
      line("murzik", "Çamaşırhanede mi? Kim götürdü?", "Dans la buanderie ? Qui l'a emportée là-bas ?"),
      line("receptionist", "Kimse almadı. Temizlikçi taşıdı, herhalde.", "Personne ne l'a emportée. La femme de ménage l'a sans doute déplacée."),
      line("tom", "Bak! Üstünde bir kedi uyuyor!", "Regarde ! Il y a un chat qui dort dessus !"),
      line("receptionist", "Bu Pamuk, otelin kedisi. Sıcak bavulları çok seviyor.", "C'est Pamuk, la chatte de l'hôtel. Elle adore les valises bien chaudes."),
      line("murzik", "Ne kadar tatlı! Hiçbir şey eksik değil. Çok şükür!", "Trop mignon ! Rien ne manque. Dieu merci !"),
    ],
    gist: choice("trtt6-d1", "Où a-t-on retrouvé la valise ?", [
      ["Dans la buanderie.", true],
      ["À la poste.", false],
      ["Dans l'ascenseur.", false],
    ]),
  },
  grammar: [
    {
      title: "N'a pas fait : -madı, -medi",
      paragraphs: [
        "Le passé négatif met -ma / -me devant la terminaison du passé : al-madı (n'a pas pris), gel-medi (n'est pas venu), gör-medi (n'a pas vu).",
        "Pour parler de soi : almadım — je ne l'ai pas pris, görmedim — je ne l'ai pas vu. Kimse veut dire « personne », et il va avec un verbe négatif, comme le français « personne ne… » : Kimse gelmedi. — Personne n'est venu.",
      ],
      examples: [
        { ru: "Ben bavulu görmedim.", en: "Je n'ai pas vu la valise." },
        { ru: "Kedi uyanmadı.", en: "Le chat ne s'est pas réveillé." },
      ],
    },
  ],
  tasks: [
    choice("trtt6-t1", "Comment dit-on « Personne n'est venu » ?", [
      ["Kimse gelmedi.", true],
      ["Kimse geldi.", false],
      ["Kim gelmedi?", false],
    ], { skill: "grammar" }),
    listen("trtt6-t2", "Écoute. Qui dort sur la valise ?", "Bavulun üstünde bir kedi uyuyor.", [
      ["Un chat.", true],
      ["Murzik.", false],
      ["À Tom.", false],
    ]),
    match("trtt6-t3", "Associe les paires.", [
      ["bulundu", "on l'a retrouvé"],
      ["üstünde", "dessus"],
      ["kimse", "personne"],
      ["eksik", "manquant"],
    ], { skill: "words" }),
    missing("trtt6-t4", "Quelle lettre manque ? (« buanderie »)", "çama", "ırhane", "ş", ["ş", "s", "ç"]),
    speak("trtt6-t5", "Bavulu sen mi aldın?", "Hayır, ben almadım!", "Non, je ne l'ai pas prise !", { help: "Dis à voix haute que tu ne l'as pas prise." }),
    choice("trtt6-t6", "Comment dit-on « Je voudrais envoyer une lettre » ?", [
      ["Mektup göndermek istiyorum.", true],
      ["Mektup gönderdi istiyorum.", false],
      ["Mektup göndermiyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kemence",
    itemName: "Petit kemençe",
    itemNameRu: "Kemençe",
    ru: "Yaşasın! Küçük bir kemençe!",
    en: "Hourra ! Un petit kemençe !",
    a11y: "Un petit kemençe en bois — une vièle étroite à trois cordes — avec son archet.",
    image: p("kemence"),
    steps: ["Pour fêter ça, le cuisinier de l'hôtel joue du kemençe.", "Tout le monde danse le horon dans le hall, en se tenant par la main.", "Le cuisinier offre à Murzik un petit kemençe.", "Murzik essaie de jouer : « Iiiii ! » Tout le monde rit."],
    bridge: "Demain, ils quittent l'hôtel. Il est temps de faire la valise — avec sa nouvelle étiquette !",
  },
};

const trabzon7: Lesson = {
  id: "tr-a1-trabzon-7",
  level: "A1",
  cityId: "tr-trabzon",
  number: 7,
  title: "Le départ de l'hôtel",
  minutes: 8,
  goals: ["Quitter l'hôtel et payer", "Demander un taxi", "Réviser tous les mots de Trabzon"],
  vocabNote: "Çıkış veut dire « départ, sortie ». Hesap — « la note ». Yine bekleriz — « au plaisir de vous revoir » (ce que disent les hôtels et les cafés quand on part).",
  vocab: [
    v("trtt7-1", "Çıkış yapmak istiyorum.", "Je voudrais libérer la chambre.", "Tom à la réception avec les valises.", "Écouter Çıkış yapmak istiyorum", p("l7-1")),
    v("trtt7-2", "Hesabı alabilir miyim?", "Je pourrais avoir la note ?", "Le réceptionniste tend la note à Tom.", "Écouter Hesabı alabilir miyim", p("l7-2")),
    v("trtt7-3", "Taksi çağırabilir misiniz?", "Vous pourriez appeler un taxi ?", "Un taxi jaune s'arrête devant l'hôtel.", "Écouter Taksi çağırabilir misiniz", p("l7-3")),
    v("trtt7-4", "Havalimanına gidiyoruz.", "Nous allons à l'aéroport.", "Un panneau avec un symbole d'avion.", "Écouter Havalimanına gidiyoruz", p("l7-4")),
    v("trtt7-5", "Her şey çok güzeldi.", "Tout était merveilleux.", "Murzik lève les pattes : « super ! ».", "Écouter Her şey çok güzeldi", p("l7-5")),
    v("trtt7-6", "Yine bekleriz!", "Au plaisir de vous revoir !", "Le réceptionniste fait signe à la porte.", "Écouter Yine bekleriz", p("l7-6")),
    v("trtt7-7", "Yolunuz açık olsun!", "Bon voyage !", "Le taxi s'éloigne sur la route mouillée, au bord de la mer.", "Écouter Yolunuz açık olsun", p("l7-7")),
  ],
  dialogue: {
    title: "Au revoir, l'hôtel",
    note: "Güzeldi — « c'était bien, c'était agréable ». Hediyemiz — « notre cadeau ». Yolunda — « en ordre, comme il faut ».",
    lines: [
      line("tom", "Günaydın. Çıkış yapmak istiyorum. Hesabı alabilir miyim?", "Bonjour. Je voudrais libérer la chambre. Je pourrais avoir la note ?"),
      line("receptionist", "Tabii. Her şey yolunda mıydı?", "Bien sûr. Tout s'est bien passé ?"),
      line("murzik", "Evet! Her şey çok güzeldi. Pamuk da!", "Oui ! Tout était merveilleux. Pamuk aussi !"),
      line("tom", "Taksi çağırabilir misiniz? Havalimanına gidiyoruz.", "Vous pourriez appeler un taxi ? Nous allons à l'aéroport."),
      line("receptionist", "Hemen. Bu da hediyemiz, Murzik.", "Tout de suite. Et voici notre cadeau pour toi, Murzik."),
      line("receptionist", "Yolunuz açık olsun! Yine bekleriz!", "Bon voyage ! Au plaisir de vous revoir !"),
    ],
    gist: choice("trtt7-d1", "Où vont Tom et Murzik ?", [
      ["À l'aéroport.", true],
      ["À la poste.", false],
      ["Au lac.", false],
    ]),
  },
  grammar: [
    {
      title: "Était : -dı avec un adjectif",
      paragraphs: [
        "« Était », c'est la même terminaison du passé, ajoutée directement au mot : güzel → güzeldi (c'était bien), sıcak → sıcaktı (il faisait chaud), yorgun → yorgundum (j'étais fatigué).",
        "La question : … mıydı? / miydi? — Her şey yolunda mıydı? — Tout s'est bien passé ? Oda temiz miydi? — La chambre était propre ?",
      ],
      examples: [
        { ru: "Hava çok soğuktu.", en: "Il faisait très froid." },
        { ru: "Kahvaltı çok güzeldi.", en: "Le petit-déjeuner était merveilleux." },
      ],
    },
  ],
  tasks: [
    listen("trtt7-t1", "Examen audio. Que dit le réceptionniste ?", "Odanız üçüncü katta. Kahvaltı sabah yediden ona kadar. Asansör orada.", [
      ["La chambre est au troisième étage ; le petit-déjeuner est de sept à dix heures.", true],
      ["La chambre est au dixième étage ; il n'y a pas de petit-déjeuner.", false],
      ["L'ascenseur ne marche pas ; la chambre est au troisième étage.", false],
    ]),
    choice("trtt7-t2", "Comment dit-on « Il faisait froid » ?", [
      ["Soğuktu.", true],
      ["Soğukdu.", false],
      ["Soğuk değil.", false],
    ], { skill: "grammar" }),
    match("trtt7-t3", "Associe les paires.", [
      ["çıkış", "départ (de l'hôtel)"],
      ["hesap", "note, addition"],
      ["havalimanı", "aéroport"],
      ["Yine bekleriz!", "Au plaisir de vous revoir !"],
    ], { skill: "words" }),
    spell("trtt7-t4", "Épelle le mot « taxi ».", "taksi"),
    speak("trtt7-t5", "Her şey yolunda mıydı?", "Evet, her şey çok güzeldi. Teşekkürler!", "Oui, tout était merveilleux. Merci !", { help: "Réponds au réceptionniste à voix haute." }),
    script("trtt7-t6", "Souviens-toi de tout Trabzon. Complète les conversations.", [
      { speaker: "Receptionist", text: "Hoş geldiniz! Buyurun?" },
      { speaker: "You", answer: "Rezervasyonum var. İki gece.", options: ["Rezervasyonum var. İki gece.", "Rezervasyonum var. İki geceler.", "Bavulum kayboldu."] },
      { speaker: "Receptionist", text: "Odanız nasıl?" },
      { speaker: "You", answer: "Evet, klima çalışmıyor.", options: ["Evet, klima çalışmıyor.", "Evet, klima çalışıyor.", "Hayır, klima yok değil."] },
      { speaker: "Receptionist", text: "Yolunuz açık olsun!" },
      { speaker: "You", answer: "Teşekkürler! Her şey çok güzeldi.", options: ["Teşekkürler! Her şey çok güzeldi.", "Hatırlamıyorum.", "Hoş geldiniz!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "caydanlik",
    itemName: "Théière double",
    itemNameRu: "Çaydanlık",
    ru: "Yaşasın! Bir çaydanlık!",
    en: "Hourra ! Une théière !",
    a11y: "Une petite théière double turque : l'eau bouillante en bas, le thé fort en haut. Des feuilles de thé sont peintes sur le côté.",
    image: p("caydanlik"),
    steps: ["Le réceptionniste tend une boîte.", "Dedans, une théière double : l'eau en bas, le thé en haut.", "« Karadeniz çayı için! » — « Pour le thé de la mer Noire ! »", "Murzik la range avec soin dans sa valise — celle qui a la nouvelle étiquette."],
    bridge: "Prochain arrêt — Van, une ville au bord d'un immense lac.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre d'hôtel",
    nameRu: "Otel odası",
    image: p("home"),
    a11y: "Une chambre d'hôtel vide avec une grande fenêtre. Dehors : le brouillard, des montagnes vertes et mouillées et la mer Noire toute grise. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "caydanlik",
  welcomeRu: "Merhaba, Trabzon!",
  welcomeEn: "Bonjour, Trabzon !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Trabzon : des montagnes vertes, des plantations de thé sur les pentes et la mer Noire toute grise. Il bruine.",
  departureImage: p("departure"),
  departureA11y: "Le réceptionniste de l'hôtel dit au revoir à la porte ; Pamuk, la chatte grise, est assise sur les marches.",
  finale: [
    {
      image: p("umbrella"),
      a11y: "Le front de mer mouillé de Trabzon. Murzik, en imperméable jaune, marche vers le taxi. Au loin, près d'un réverbère, un chat blanc au chapeau, sous un parapluie noir, le regarde partir. Murzik ne le remarque pas.",
      lines: [
        { en: "Murzik se dépêche vers le taxi et ne se retourne pas." },
        { en: "Mais sur le front de mer, sous un parapluie noir, il y a un chat blanc au chapeau." },
        { en: "Il regarde le taxi s'éloigner et sourit doucement." },
      ],
    },
    {
      image: p("caydanlik"),
      a11y: "Murzik fait le tour de sa chambre d'hôtel, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre. Tom la prend en photo pour le magazine." },
        { en: "Murzik emporte la théière double pour le thé de la mer Noire." },
        { en: "Sa valise a maintenant une étiquette : « Murzik ». Elle ne se perdra plus." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Trabzon tamamlandı!", en: "Trabzon, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — onzième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Le réceptionniste de l'hôtel dit au revoir de la main.",
      lines: [
        { ru: "Hoşça kal, Trabzon!", en: "Au revoir, Trabzon !" },
        { ru: "Sıradaki durak: Van!", en: "Prochain arrêt : Van !" },
      ],
    },
    {
      image: p("flight"),
      a11y: "Un avion vole vers l'est au-dessus des montagnes enneigées.",
      lines: [{ ru: "Trabzon → Van", en: "Trabzon → Van" }],
    },
    {
      image: pic("tr/van/arrival"),
      a11y: "Murzik et Tom au bord de l'immense lac de Van, tout bleu. Une montagne enneigée au loin. Il fait beau.",
      lines: [
        { ru: "Merhaba, Van!", en: "Bonjour, Van !" },
        { ru: "Ne büyük bir göl!", en: "Quel lac immense !" },
      ],
    },
  ],
};

export const trTrabzonFr = {
  id: "tr-trabzon",
  name: "Trabzon",
  nameTr: "Trabzon",
  lessons: [trabzon1, trabzon2, trabzon3, trabzon4, trabzon5, trabzon6, trabzon7],
  story,
};
