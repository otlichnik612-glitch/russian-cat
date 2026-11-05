import { images as img, pic } from "../../art";
import { choice, fill, letter, line, listen, match, missing, script, speak, spell, v } from "../make";
import type { Lesson } from "../../types";

/* Paris · « Première conversation » · leçons 1–3 */

export const lesson1: Lesson = {
  id: "a1-paris-1",
  level: "A1",
  cityId: "paris",
  number: 1,
  title: "Bonjour !",
  minutes: 6,
  goals: ["Saluer un ami et saluer poliment", "Demander le nom de quelqu'un et dire le tien", "Dire « Enchanté »"],
  vocabNote:
    "Привет! est le salut des amis et des enfants. Здравствуйте! est le bonjour poli, pour les adultes que tu ne connais pas. Dans le doute, dis Здравствуйте!",
  vocab: [
    v("l1-1", "Привет!", "Salut !", "Murzik sourit et salue de la patte.", "Écouter Привет", img.murzik, "privet!"),
    v("l1-2", "Здравствуйте!", "Bonjour ! (poli)", "Murzik se tient bien droit, pattes jointes, et fait une petite révérence à une dame âgée.", "Écouter Здравствуйте", pic("paris/l1-2"), "zdrastvouïté!"),
    v("l1-3", "Как тебя зовут?", "Comment tu t'appelles ?", "Tom se penche vers Murzik avec un air amical et curieux, comme pour poser une question.", "Écouter Как тебя зовут", pic("paris/l1-4"), "kak tibia zavout?"),
    v("l1-4", "Меня зовут…", "Je m'appelle…", "Murzik pose une patte sur son torse et annonce fièrement son nom.", "Écouter Меня зовут", pic("paris/l1-5"), "menia zavout…"),
    v("l1-5", "А тебя?", "Et toi ?", "Murzik tend une patte vers Tom d'un air interrogateur.", "Écouter А тебя", pic("paris/l1-6"), "a tibia?"),
    v("l1-6", "Очень приятно.", "Enchanté.", "Murzik et Tom se saluent dans un jardin parisien, avec la tour Eiffel derrière eux.", "Écouter Очень приятно", img.greet, "otchen priiatno."),
    v("l1-7", "Мне тоже.", "Moi aussi.", "Murzik hoche joyeusement la tête et pose une patte sur son torse en souriant à Tom.", "Écouter Мне тоже", pic("paris/l1-8"), "mne toje."),
  ],
  letters: [
    letter("А а", "« a » comme dans « patte »", "А тебя?", "Et toi ?"),
    letter("О о", "« o » comme dans « dos »", "Том", "Tom"),
    letter("К к", "« k » comme dans « kilo »", "Как тебя зовут?", "Comment tu t'appelles ?"),
    letter("М м", "« m » comme dans « maman »", "Меня зовут…", "Je m'appelle…"),
    letter("Т т", "« t » comme dans « table »", "Том", "Tom"),
  ],
  dialogue: {
    title: "Un nouvel ami à Paris",
    note: "Я Том veut dire « moi, c'est Tom ». En russe, il n'y a pas de mot pour « suis » ici : on dit simplement « je — Tom ».",
    lines: [
      line("tom", "Привет!", "Salut !"),
      line("murzik", "Привет!", "Salut !"),
      line("tom", "Я Том. Как тебя зовут?", "Moi, c'est Tom. Comment tu t'appelles ?"),
      line("murzik", "Меня зовут Мурзик.", "Je m'appelle Murzik."),
      line("tom", "Очень приятно!", "Enchanté !"),
      line("murzik", "Мне тоже! Том, а это мой дом.", "Moi aussi ! Tom, et voici ma maison."),
      line("tom", "Ого! Как красиво!", "Ouah ! Comme c'est beau !"),
    ],
    gist: choice("l1-d1", "Que se passe-t-il ?", [
      ["Tom et Murzik se rencontrent pour la première fois.", true],
      ["Tom et Murzik se disent au revoir.", false],
      ["Tom commande un café.", false],
    ]),
  },
  grammar: [
    {
      title: "Привет ou Здравствуйте ?",
      paragraphs: [
        "Le russe, comme le français, a deux façons de dire « tu » : ты pour un ami, un enfant ou la famille, et вы pour un adulte que tu ne connais pas bien — c'est le vouvoiement.",
        "Avec ты : Привет! Как тебя зовут? Avec вы : Здравствуйте! Как вас зовут?",
      ],
      examples: [
        { ru: "Привет! Как тебя зовут?", en: "Salut ! Comment tu t'appelles ? (à un ami)" },
        { ru: "Здравствуйте! Как вас зовут?", en: "Bonjour ! Comment vous appelez-vous ? (poli)" },
      ],
    },
  ],
  tasks: [
    choice("l1-t1", "Que veut dire Очень приятно ?", [
      ["Enchanté.", true],
      ["Moi aussi.", false],
      ["Bonjour.", false],
    ], { skill: "words" }),
    listen("l1-t2", "Écoute. Qu'est-ce que ça veut dire ?", "Как тебя зовут?", [
      ["Comment tu t'appelles ?", true],
      ["Comment ça va ?", false],
      ["Qui est-ce ?", false],
    ]),
    choice("l1-t3", "Tu rencontres ton nouveau professeur, un adulte. Que dis-tu ?", [
      ["Привет! Как тебя зовут?", false],
      ["Здравствуйте! Как вас зовут?", true],
    ], { skill: "grammar" }),
    spell("l1-t4", "Assemble les lettres du nom de Tom.", "Том"),
    speak("l1-t5", "Привет! Как тебя зовут?", "Привет! Меня зовут Алекс.", "Salut ! Je m'appelle Alex.", {
      help: "Réponds à voix haute avec ton propre prénom.",
    }),
    script("l1-t6", "Termine le mini-dialogue.", [
      { speaker: "Tom", text: "Меня зовут Том. А тебя?" },
      {
        speaker: "Toi",
        answer: "Меня зовут Алекс.",
        options: ["Меня зовут Алекс.", "Мне тоже.", "Как тебя зовут?"],
      },
      { speaker: "Tom", text: "Очень приятно!" },
      {
        speaker: "Toi",
        answer: "Мне тоже!",
        options: ["Мне тоже!", "Здравствуйте!", "А тебя?"],
      },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bowl",
    itemName: "Bol",
    itemNameRu: "Миска",
    ru: "Ура! Это моя миска!",
    en: "Hourra ! C'est mon bol !",
    a11y: "Murzik est assis dans son appartement et serre joyeusement son nouveau bol. Tom sourit à côté.",
    image: img.rewardBowl,
    steps: ["Murzik remarque le bol.", "Il court vers lui.", "Il serre le bol dans ses pattes.", "Tom sourit."],
    bridge: "Tom promet de revenir demain. Murzik veut savoir comment va son nouvel ami.",
  },
};

export const lesson2: Lesson = {
  id: "a1-paris-2",
  level: "A1",
  cityId: "paris",
  number: 2,
  title: "Comment ça va ?",
  minutes: 6,
  goals: ["Demander comment ça va", "Dire très bien, bien, bof ou mal", "Demander « Et toi ? »"],
  vocabNote:
    "Les Russes répondent souvent Нормально (« ça va, normal »). C'est une réponse normale et honnête, pas triste.",
  vocab: [
    v("l2-1", "Как дела?", "Comment ça va ?", "Tom salue Murzik sur le pas de la porte avec un sourire chaleureux et curieux.", "Écouter Как дела", pic("paris/l2-1"), "kak dela?"),
    v("l2-2", "Хорошо, спасибо.", "Bien, merci.", "Murzik sourit calmement et lève le pouce de sa patte.", "Écouter Хорошо, спасибо", pic("paris/l2-3"), "khoracho, spassibo."),
    v("l2-3", "Отлично!", "Super !", "Murzik saute de joie, les deux pattes en l'air.", "Écouter Отлично", pic("paris/l2-4"), "atlitchno!"),
    v("l2-4", "Нормально.", "Ça va. / Pas mal.", "Murzik hausse les épaules avec un air détendu et neutre.", "Écouter Нормально", pic("paris/l2-5"), "normalno."),
    v("l2-5", "Так себе.", "Bof.", "Murzik balance sa patte d'un côté et de l'autre avec un air dubitatif.", "Écouter Так себе", pic("paris/l2-6"), "tak sebe."),
    v("l2-6", "Плохо.", "Mal.", "Murzik est assis sous un petit nuage gris, les oreilles tombantes.", "Écouter Плохо", pic("paris/l2-7"), "plokho."),
    v("l2-7", "А у тебя?", "Et toi ?", "Murzik tend une patte vers Tom d'un air amical et interrogateur.", "Écouter А у тебя", pic("paris/l2-8"), "a ou tibia?"),
  ],
  letters: [
    letter("Р р", "un « r » roulé", "Привет", "Salut", "Ressemble à notre P, mais se prononce R !"),
    letter("В в", "« v » comme dans « vélo »", "Привет", "Salut", "Ressemble à B, mais se prononce V !"),
    letter("Н н", "« n » comme dans « non »", "Нормально", "Ça va", "Ressemble à H, mais se prononce N !"),
    letter("С с", "« s » comme dans « soleil »", "Спасибо", "Merci", "Ressemble à C, et se prononce toujours S."),
    letter("Е е", "« ié » comme dans « pied »", "Привет", "Salut", "Ressemble à E, mais se prononce IÉ."),
  ],
  dialogue: {
    title: "Le lendemain matin",
    note: "Madame Dubois est la voisine âgée de Murzik. Murzik est poli avec elle : Здравствуйте! et Как у вас дела? — le vouvoiement, comme en français.",
    lines: [
      line("tom", "Привет, Мурзик! Как дела?", "Salut, Murzik ! Comment ça va ?"),
      line("murzik", "Привет! Так себе. А у тебя?", "Salut ! Bof. Et toi ?"),
      line("tom", "Отлично!", "Super !"),
      line("murzik", "Здравствуйте, мадам Дюбуа! Как у вас дела?", "Bonjour, Madame Dubois ! Comment allez-vous ?"),
      line("neighbour", "Хорошо, спасибо. А у тебя?", "Bien, merci. Et toi ?"),
      line("murzik", "Теперь — отлично!", "Maintenant — super !"),
    ],
    gist: choice("l2-d1", "Comment va Murzik à la fin ?", [
      ["Bof.", false],
      ["Super.", true],
      ["Mal.", false],
    ]),
  },
  grammar: [
    {
      title: "А тебя? ou А у тебя?",
      paragraphs: [
        "Après Как тебя зовут? on redemande avec А тебя? — on attend un prénom.",
        "Après Как дела? on redemande avec А у тебя? — on veut savoir comment ça va. Poliment : А у вас?",
      ],
      examples: [
        { ru: "Меня зовут Том. А тебя?", en: "Je m'appelle Tom. Et toi ?" },
        { ru: "Хорошо, спасибо. А у тебя?", en: "Bien, merci. Et toi ?" },
      ],
    },
  ],
  tasks: [
    match("l2-t1", "Relie les paires.", [
      ["Отлично!", "Super !"],
      ["Нормально.", "Ça va."],
      ["Так себе.", "Bof."],
      ["Плохо.", "Mal."],
    ], { skill: "words" }),
    listen("l2-t2", "Écoute. Qu'as-tu entendu ?", "А у тебя?", [
      ["А у тебя?", true],
      ["А тебя?", false],
      ["А у вас?", false],
    ]),
    fill("l2-t3", "Tom demande Как дела? Demande-lui en retour.", "Хорошо, спасибо. А", "?", "у тебя", ["у тебя", "тебя", "меня"], { skill: "grammar" }),
    missing("l2-t4", "Quelle lettre manque ? (Salut !)", "При", "ет", "в", ["в", "р", "н"]),
    speak("l2-t5", "Как дела?", "Как дела?", "Comment ça va ?", {
      help: "Écoute et répète. Essaie de ressembler exactement à l'enregistrement.",
    }),
    listen("l2-t6", "Écoute et choisis la meilleure réponse.", "Очень приятно!", [
      ["Мне тоже!", true],
      ["Так себе.", false],
      ["А у тебя?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chair",
    itemName: "Chaise",
    itemNameRu: "Стул",
    ru: "Ура! У меня новый стул!",
    en: "Hourra ! J'ai une nouvelle chaise !",
    a11y: "Murzik est assis joyeusement sur sa nouvelle chaise. Son bol est à côté, et Tom sourit près de lui.",
    image: img.chair,
    steps: ["Murzik remarque la nouvelle chaise.", "Il grimpe dessus.", "Il s'assoit, fier.", "Tom sourit."],
    bridge: "Tom revient le lendemain avec son appareil photo — il est photographe — et un petit cadeau. Murzik aura besoin de mots polis.",
  },
};

export const lesson3: Lesson = {
  id: "a1-paris-3",
  level: "A1",
  cityId: "paris",
  number: 3,
  title: "Merci et pardon",
  minutes: 6,
  goals: ["Dire merci et répondre à un merci", "Donner quelque chose à quelqu'un", "S'excuser auprès d'un ami et d'un adulte"],
  vocabNote:
    "Пожалуйста est un mot très occupé : « s'il te plaît », « de rien » (la réponse à Спасибо) et, avec Вот, « voici, je t'en prie ». Не за что répond aussi à Спасибо.",
  vocab: [
    v("l3-1", "Спасибо!", "Merci !", "Murzik tient une petite boîte cadeau et sourit à Tom avec reconnaissance.", "Écouter Спасибо", pic("paris/l3-1"), "spassibo!"),
    v("l3-2", "Спасибо большое!", "Merci beaucoup !", "Murzik serre une boîte cadeau, les yeux brillants et un immense sourire.", "Écouter Спасибо большое", pic("paris/l3-2"), "spassibo bolchoïe!"),
    v("l3-3", "Пожалуйста.", "De rien. / S'il te plaît.", "Tom sourit chaleureusement et fait un petit geste modeste de la main.", "Écouter Пожалуйста", pic("paris/l3-3"), "pojalousta."),
    v("l3-4", "Вот, пожалуйста.", "Voici, je t'en prie.", "Tom tend une petite boîte cadeau à Murzik à deux mains.", "Écouter Вот, пожалуйста", pic("paris/l3-5"), "vot, pojalousta."),
    v("l3-5", "Извини!", "Pardon ! (à un ami)", "Tom a marché par accident sur la queue de Murzik et lève le pied, l'air navré.", "Écouter Извини", pic("paris/l3-6"), "izvini!"),
    v("l3-6", "Извините!", "Pardon ! / Excusez-moi ! (poli)", "Murzik lève poliment une patte pour attirer l'attention de Madame Dubois dans l'escalier.", "Écouter Извините", pic("paris/l3-7"), "izvinité!"),
    v("l3-7", "Ничего страшного.", "Ce n'est rien. / Pas grave.", "Murzik sourit et agite gentiment la queue : tout va bien.", "Écouter Ничего страшного", pic("paris/l3-8"), "nitchevo strachnava."),
  ],
  letters: [
    letter("П п", "« p » comme dans « papa »", "Пожалуйста", "S'il te plaît"),
    letter("И и", "« i » comme dans « si »", "Извини", "Pardon", "Ressemble à un N à l'envers. Se prononce I."),
    letter("З з", "« z » comme dans « zoo »", "Извините", "Excusez-moi", "Ressemble au chiffre 3."),
    letter("Д д", "« d » comme dans « don »", "Да", "Oui"),
    letter("Ж ж", "« j » comme dans « jour »", "Пожалуйста", "S'il te plaît"),
  ],
  dialogue: {
    title: "Un cadeau pour Murzik",
    note: "Это тебе veut dire « c'est pour toi ». Ой! est ce que les Russes disent quand quelque chose tourne un peu mal — comme notre « oups ! ».",
    lines: [
      line("tom", "Привет, Мурзик! Вот, пожалуйста. Это тебе.", "Salut, Murzik ! Voici. C'est pour toi."),
      line("murzik", "Мне? Спасибо большое!", "Pour moi ? Merci beaucoup !"),
      line("tom", "Пожалуйста!", "De rien !"),
      line("murzik", "Ой! Мой хвост!", "Aïe ! Ma queue !"),
      line("tom", "Ой, извини!", "Oups, pardon !"),
      line("murzik", "Ничего страшного.", "Ce n'est rien."),
    ],
    gist: choice("l3-d1", "Que se passe-t-il ?", [
      ["Tom offre un cadeau à Murzik.", true],
      ["Tom demande l'addition.", false],
      ["Tom dit au revoir.", false],
    ]),
  },
  grammar: [
    {
      title: "Извини ou Извините ?",
      paragraphs: [
        "Извини s'adresse à quelqu'un qu'on tutoie : un ami, un enfant, la famille. Извините, c'est pour le vouvoiement : un adulte qu'on ne connaît pas bien.",
        "Извините veut aussi dire « Excusez-moi » quand on veut attirer l'attention de quelqu'un.",
      ],
      examples: [
        { ru: "Извини, Том!", en: "Pardon, Tom !" },
        { ru: "Извините, мадам Дюбуа!", en: "Excusez-moi, Madame Dubois !" },
      ],
    },
  ],
  tasks: [
    choice("l3-t1", "Quelqu'un te dit Спасибо! Que peux-tu répondre ?", [
      ["Пожалуйста.", true],
      ["Извини.", false],
      ["Спасибо большое!", false],
    ], { skill: "words" }),
    listen("l3-t2", "Écoute et choisis la meilleure réponse.", "Ой, извини!", [
      ["Ничего страшного.", true],
      ["Пожалуйста.", false],
      ["Мне тоже.", false],
    ]),
    choice("l3-t3", "Tu bouscules un adulte dans la rue. Que dis-tu ?", [
      ["Извини!", false],
      ["Извините!", true],
    ], { skill: "grammar" }),
    spell("l3-t4", "Assemble les lettres du mot « Pardon ! » (à un ami).", "Извини"),
    speak("l3-t5", "Вот, пожалуйста. Это тебе.", "Спасибо большое!", "Merci beaucoup !", {
      help: "Tom t'offre un cadeau. Réponds à voix haute.",
    }),
    listen("l3-t6", "Écoute. Qu'as-tu entendu ?", "Так себе.", [
      ["Так себе.", true],
      ["Тоже хорошо.", false],
      ["Отлично.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sofa",
    itemName: "Canapé",
    itemNameRu: "Диван",
    ru: "Ура! У меня новый диван!",
    en: "Hourra ! J'ai un nouveau canapé !",
    a11y: "Murzik est assis joyeusement sur son nouveau canapé dans son appartement parisien. Son bol et sa chaise sont toujours à côté, et Tom se tient près de lui.",
    image: img.sofa,
    steps: ["Le soir, une camionnette de livraison arrive.", "Elle apporte un nouveau canapé pour Murzik.", "Murzik saute dessus.", "Tom sourit."],
    bridge: "Tom veut apprendre plus de mots russes. Murzik décide d'être son professeur.",
  },
};
