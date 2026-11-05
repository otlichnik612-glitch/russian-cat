import { images as img, pic } from "../../art";
import { choice, fill, letter, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../../types";

/* Paris · « Première conversation » · leçons 4–7 */

export const lesson4: Lesson = {
  id: "a1-paris-4",
  level: "A1",
  cityId: "paris",
  number: 4,
  title: "Je ne comprends pas",
  minutes: 6,
  goals: ["Dire que tu ne comprends pas", "Demander de répéter ou de parler moins vite", "Poser une question sur un mot"],
  vocabNote:
    "Ces phrases sauvent n'importe quelle conversation. Повтори s'adresse à un ami ; ajoute -те pour le vouvoiement : Повторите — comme Извини → Извините.",
  vocab: [
    v("l4-1", "Я не понимаю.", "Je ne comprends pas.", "Tom se gratte la tête, perplexe. Un point d'interrogation flotte au-dessus de lui.", "Écouter Я не понимаю", pic("paris/l4-1"), "ia ne ponimaïou."),
    v("l4-2", "Повтори, пожалуйста.", "Répète, s'il te plaît.", "Tom se penche vers Murzik et met une main derrière son oreille.", "Écouter Повтори, пожалуйста", pic("paris/l4-3"), "povtori, pojalousta."),
    v("l4-3", "Повторите, пожалуйста.", "Vous pouvez répéter, s'il vous plaît ? (poli)", "Murzik met poliment une patte derrière son oreille pendant que Madame Dubois parle.", "Écouter Повторите, пожалуйста", pic("paris/l4-4"), "povtorité, pojalousta."),
    v("l4-4", "Медленнее, пожалуйста.", "Plus lentement, s'il vous plaît.", "Tom fait un doux geste « doucement » des deux mains. Un petit escargot est posé sur la table.", "Écouter Медленнее, пожалуйста", pic("paris/l4-5"), "medlenneïe, pojalousta."),
    v("l4-5", "Как по-русски…?", "Comment dit-on … en russe ?", "Tom tient une tasse en l'air et regarde Murzik d'un air interrogateur.", "Écouter Как по-русски", pic("paris/l4-8"), "kak pa-rousski…?"),
    v("l4-6", "Что значит…?", "Que veut dire … ?", "Tom tient un carnet ouvert avec un mot souligné et a l'air perplexe.", "Écouter Что значит", pic("paris/l4-9"), "chto znatchit…?"),
    v("l4-7", "Я не знаю.", "Je ne sais pas.", "Murzik hausse les épaules, pattes ouvertes, avec une drôle de tête perdue.", "Écouter Я не знаю", pic("paris/l4-10"), "ia ne znaïou."),
  ],
  letters: [
    letter("Л л", "« l » comme dans « lune »", "Медленнее", "Plus lentement"),
    letter("Я я", "« ia » comme dans « piano »", "Я не знаю", "Je ne sais pas", "Ressemble à un R à l'envers. Ça veut dire « je » !"),
    letter("Ю ю", "se prononce « iou »", "Я не понимаю", "Je ne comprends pas"),
    letter("Ч ч", "« tch » comme dans « Tchèque »", "Что значит…?", "Que veut dire … ?", "Ressemble au chiffre 4."),
    letter("Э э", "« è » ouvert comme dans « fête »", "Это лампа", "C'est une lampe"),
  ],
  dialogue: {
    title: "Une leçon de russe dans la cuisine",
    lines: [
      line("tom", "Мурзик, что это?", "Murzik, qu'est-ce que c'est ?"),
      line("murzik", "Это лампа.", "C'est une lampe."),
      line("tom", "Извини, я не понимаю. Повтори, пожалуйста.", "Pardon, je ne comprends pas. Répète, s'il te plaît."),
      line("murzik", "Лам-па.", "Lam-pe."),
      line("tom", "А как по-русски “table”?", "Et comment dit-on « table » en russe ?"),
      line("murzik", "Стол.", "Table."),
      line("tom", "Медленнее, пожалуйста.", "Plus lentement, s'il te plaît."),
      line("murzik", "Сто-о-ол.", "Ta-a-abe."),
      line("tom", "А это что?", "Et ça, c'est quoi ?"),
      line("murzik", "Хм… Я не знаю!", "Hmm… Je ne sais pas !"),
    ],
    gist: choice("l4-d1", "Que fait Tom ?", [
      ["Il apprend des mots russes.", true],
      ["Il achète une lampe.", false],
      ["Il dit au revoir.", false],
    ]),
  },
  grammar: [
    {
      title: "Не veut dire « ne… pas »",
      paragraphs: [
        "Place не juste avant le verbe pour rendre la phrase négative. Cet ordre ne change jamais.",
        "Я понимаю — je comprends. Я не понимаю — je ne comprends pas. Я знаю — je sais. Я не знаю — je ne sais pas. Un seul mot, не : pas besoin du « ne … pas » français !",
      ],
      examples: [
        { ru: "Я не понимаю.", en: "Je ne comprends pas." },
        { ru: "Я не знаю.", en: "Je ne sais pas." },
      ],
    },
  ],
  tasks: [
    choice("l4-t1", "Comment demander « Que veut dire … ? »", [
      ["Что значит…?", true],
      ["Как по-русски…?", false],
      ["Я не знаю.", false],
    ], { skill: "words" }),
    listen("l4-t2", "Écoute. Qu'as-tu entendu ?", "Повторите, пожалуйста.", [
      ["Повторите, пожалуйста.", true],
      ["Повтори, пожалуйста.", false],
      ["Медленнее, пожалуйста.", false],
    ]),
    choice("l4-t3", "Trouve la phrase correcte.", [
      ["Я понимаю не.", false],
      ["Я не понимаю.", true],
      ["Не я понимаю.", false],
    ], { skill: "grammar" }),
    missing("l4-t4", "Quelle lettre manque ? (Je ne comprends pas.)", "Я не понима", "", "ю", ["ю", "я", "а"]),
    speak("l4-t5", "Как у тебя дела?", "Медленнее, пожалуйста.", "Plus lentement, s'il te plaît.", {
      help: "Tom parle beaucoup trop vite ! Demande-lui à voix haute de ralentir.",
    }),
    choice("l4-t6", "Ton ami t'offre une tasse de thé. Que dis-tu ?", [
      ["Спасибо!", true],
      ["Извините!", false],
      ["Ничего страшного.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kitchen-table",
    itemName: "Table de cuisine",
    itemNameRu: "Стол",
    ru: "Ура! У меня новый стол!",
    en: "Hourra ! J'ai une nouvelle table !",
    a11y: "Murzik se tient à côté de sa nouvelle table de cuisine. Une tasse et une assiette sont posées dessus. Tom est à côté, et les autres meubles de l'appartement restent visibles.",
    image: img.table,
    steps: ["La cuisine apparaît.", "Murzik remarque la nouvelle table.", "Il pose une tasse et une assiette dessus.", "Tom sourit."],
    bridge: "À la nouvelle table, Tom et Murzik boivent le thé. Tom est curieux : d'où vient un chat russe ?",
  },
};

export const lesson5: Lesson = {
  id: "a1-paris-5",
  level: "A1",
  cityId: "paris",
  number: 5,
  title: "Tu viens d'où ?",
  minutes: 6,
  goals: ["Dire d'où tu viens", "Dire où tu habites", "Demander si quelqu'un parle russe"],
  vocabNote:
    "Les noms de villes changent un peu après из (de) et в (à) : Москва → из Москвы, Париж → в Париже. Pour l'instant, apprends-les comme des phrases toutes faites.",
  vocab: [
    v("l5-1", "Откуда ты?", "Tu viens d'où ?", "Tom et Murzik sont à la table de la cuisine avec des tasses de thé. Tom pose une question d'un air curieux.", "Écouter Откуда ты", pic("paris/l5-1"), "atkouda ty?"),
    v("l5-2", "Я из Москвы.", "Je viens de Moscou.", "Murzik tient une carte postale de la place Rouge à Moscou, avec ses dômes colorés.", "Écouter Я из Москвы", pic("paris/l5-2"), "ia iz Maskvy."),
    v("l5-3", "Я из Лондона.", "Je viens de Londres.", "Tom tient une carte postale de Londres avec Big Ben et un bus rouge.", "Écouter Я из Лондона", pic("paris/l5-3"), "ia iz Londona."),
    v("l5-4", "Где ты живёшь?", "Où habites-tu ?", "Tom montre une petite carte d'Europe accrochée au mur, l'air interrogateur.", "Écouter Где ты живёшь", pic("paris/l5-4"), "gde ty jivioch?"),
    v("l5-5", "Я живу в Париже.", "J'habite à Paris.", "Murzik se tient à sa fenêtre. On voit la tour Eiffel dehors.", "Écouter Я живу в Париже", pic("paris/l5-5"), "ia jivou v Parijé."),
    v("l5-6", "Ты говоришь по-русски?", "Tu parles russe ?", "Murzik regarde Tom en haussant les sourcils, avec un sourire encourageant.", "Écouter Ты говоришь по-русски", pic("paris/l5-6"), "ty gavorich pa-rousski?"),
    v("l5-7", "Да, немного.", "Oui, un peu.", "Tom montre un tout petit écart entre le pouce et le doigt et sourit timidement.", "Écouter Да, немного", pic("paris/l5-7"), "da, nemnogo."),
  ],
  letters: [
    letter("Г г", "« g » comme dans « gare »", "Ты говоришь по-русски?", "Tu parles russe ?"),
    letter("У у", "« ou » comme dans « roue »", "Я учу русский", "J'apprends le russe", "Ressemble à Y, mais se prononce OU !"),
    letter("Ш ш", "« ch » comme dans « chat »", "Хорошо", "Bien"),
    letter("Ё ё", "« io » comme dans « pioche »", "Где ты живёшь?", "Où habites-tu ?", "Toujours accentué. À l'écrit, on oublie souvent les deux points."),
    letter("Ь ь", "pas de son à elle", "Ты говоришь", "Tu parles", "Le signe mou adoucit la lettre qui précède."),
  ],
  dialogue: {
    title: "Thé et questions",
    note: "Я учу русский veut dire « j'apprends le russe ». Но veut dire « mais ».",
    lines: [
      line("murzik", "Том, откуда ты?", "Tom, tu viens d'où ?"),
      line("tom", "Я из Лондона. А ты?", "Je viens de Londres. Et toi ?"),
      line("murzik", "Я из Москвы. Но я живу в Париже.", "Je viens de Moscou. Mais j'habite à Paris."),
      line("tom", "Ты русский кот!", "Tu es un chat russe !"),
      line("murzik", "Да! А ты говоришь по-русски?", "Oui ! Et tu parles russe ?"),
      line("tom", "Да, немного. Я учу русский.", "Oui, un peu. J'apprends le russe."),
      line("murzik", "А где ты живёшь?", "Et où habites-tu ?"),
      line("tom", "Я живу в Лондоне.", "J'habite à Londres."),
    ],
    gist: choice("l5-d1", "D'où vient Murzik ?", [
      ["De Moscou.", true],
      ["De Londres.", false],
      ["De Paris.", false],
    ]),
  },
  grammar: [
    {
      title: "Venu d'une ville, dans une ville",
      paragraphs: [
        "Я из … — je viens de … : Москва → из Москвы, Лондон → из Лондона, Париж → из Парижа.",
        "Я живу в … — j'habite à … : Париж → в Париже, Лондон → в Лондоне, Москва → в Москве. Le nom de la ville change de fin : rien à voir avec le français, apprends chaque paire entière.",
      ],
      examples: [
        { ru: "Я из Лондона.", en: "Je viens de Londres." },
        { ru: "Я живу в Париже.", en: "J'habite à Paris." },
      ],
    },
  ],
  tasks: [
    tf("l5-t1", "Том живёт в Париже.", false, "Vrai ou faux : Tom habite à Paris.", { skill: "words" }),
    listen("l5-t2", "Écoute. Qu'est-ce que ça veut dire ?", "Где ты живёшь?", [
      ["Où habites-tu ?", true],
      ["Tu viens d'où ?", false],
      ["Tu parles russe ?", false],
    ]),
    fill("l5-t3", "Complète.", "Я живу в", ".", "Париже", ["Париже", "Париж", "Парижа"], { skill: "grammar" }),
    spell("l5-t4", "Assemble les lettres du mot « j'apprends ».", "учу"),
    speak("l5-t5", "Откуда ты?", "Я из Лондона.", "Je viens de Londres.", {
      help: "Réponds à voix haute. Utilise ta propre ville si tu sais la dire.",
    }),
    listen("l5-t6", "Écoute et choisis la meilleure réponse.", "Что значит «миска»?", [
      ["Миска — это “bol”.", true],
      ["Я из Москвы.", false],
      ["Да, немного.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fridge",
    itemName: "Réfrigérateur",
    itemNameRu: "Холодильник",
    ru: "Ура! У меня новый холодильник!",
    en: "Hourra ! J'ai un nouveau réfrigérateur !",
    a11y: "Murzik se tient à côté de son nouveau réfrigérateur dans la cuisine. Il l'a ouvert et regarde joyeusement à l'intérieur. Tom est à côté de lui. La table de cuisine, le bol, la chaise et le canapé restent visibles dans l'appartement.",
    image: img.fridge,
    steps: ["Murzik remarque le nouveau réfrigérateur.", "Il l'ouvre.", "Il regarde joyeusement à l'intérieur.", "Tom regarde à l'intérieur aussi."],
    bridge: "Tom habite à Londres. Il a une idée, et il veut poser une question à Murzik.",
  },
};

export const lesson6: Lesson = {
  id: "a1-paris-6",
  level: "A1",
  cityId: "paris",
  number: 6,
  title: "Oui, non, peut-être",
  minutes: 6,
  goals: ["Proposer quelque chose à un ami", "Dire oui, non merci ou peut-être", "Inviter un ami à se promener"],
  vocabNote:
    "Les Russes répondent souvent avec le verbe, pas seulement avec oui ou non : Хочешь? — Хочу! (« Tu veux ? — Je veux ! »).",
  vocab: [
    v("l6-1", "Хочешь чай?", "Tu veux un thé ?", "Tom tient une théière au-dessus d'une tasse et regarde Murzik.", "Écouter Хочешь чай", pic("paris/l6-2"), "khotech tchaï?"),
    v("l6-2", "Да, хочу.", "Oui, je veux bien.", "Murzik hoche la tête avec enthousiasme et tend sa tasse à deux pattes.", "Écouter Да, хочу", pic("paris/l6-3"), "da, khatchou."),
    v("l6-3", "Нет, спасибо.", "Non, merci.", "Murzik lève poliment une patte et sourit en refusant gentiment.", "Écouter Нет, спасибо", pic("paris/l6-5"), "net, spassibo."),
    v("l6-4", "Конечно!", "Bien sûr !", "Murzik hoche la tête avec beaucoup d'enthousiasme, la queue haute.", "Écouter Конечно", pic("paris/l6-6"), "konetchno!"),
    v("l6-5", "Может быть.", "Peut-être.", "Murzik se tapote le menton avec une patte, pensif, un sourcil levé.", "Écouter Может быть", pic("paris/l6-7"), "mojet byt'."),
    v("l6-6", "Давай!", "C'est parti ! / D'accord !", "Murzik et Tom se tapent dans la patte et la main.", "Écouter Давай", pic("paris/l6-8"), "davaï!"),
    v("l6-7", "Пойдём гулять?", "On va se promener ?", "Tom se tient à la porte en manteau et montre l'extérieur, invitant Murzik.", "Écouter Пойдём гулять", pic("paris/l6-9"), "poïdiom gouliat'?"),
  ],
  letters: [
    letter("Х х", "un « h » très fort, comme le « j » espagnol", "Хочешь чай?", "Tu veux un thé ?", "Ressemble à X, mais se prononce comme un H très fort."),
    letter("Б б", "« b » comme dans « bon »", "Может быть", "Peut-être"),
    letter("Ы ы", "un « i » très profond, dit avec un sourire", "Может быть", "Peut-être", "Aucun son français ne correspond. Écoute et imite."),
    letter("Й й", "un « i » très bref, comme dans « yaourt »", "Давай!", "C'est parti !"),
    letter("Ц ц", "« ts » comme dans « tsar »", "Улица", "Rue"),
  ],
  dialogue: {
    title: "L'idée de Tom",
    note: "Ты хочешь в Лондон? veut dire « Tu veux aller à Londres ? ». Les Russes laissent souvent tomber le verbe « aller ».",
    lines: [
      line("tom", "Мурзик, хочешь чай?", "Murzik, tu veux un thé ?"),
      line("murzik", "Нет, спасибо.", "Non, merci."),
      line("tom", "А кофе?", "Et un café ?"),
      line("murzik", "Может быть… Да, хочу!", "Peut-être… Oui, je veux bien !"),
      line("tom", "Пойдём гулять?", "On va se promener ?"),
      line("murzik", "Давай!", "C'est parti !"),
      line("tom", "И ещё… Ты хочешь в Лондон? Со мной?", "Et encore une chose… Tu veux aller à Londres ? Avec moi ?"),
      line("murzik", "В Лондон? Конечно!", "À Londres ? Bien sûr !"),
    ],
    gist: choice("l6-d1", "Quelle est la grande idée de Tom ?", [
      ["Aller à Londres ensemble.", true],
      ["Faire du thé.", false],
      ["Acheter une lampe.", false],
    ]),
  },
  grammar: [
    {
      title: "Хочу et хочешь",
      paragraphs: [
        "я хочу — je veux. ты хочешь — tu veux. Une question se dit comme une phrase normale, avec la voix qui monte : Хочешь чай? ↗",
        "On répond avec le verbe : Да, хочу. — Нет, не хочу. Poliment : Нет, спасибо.",
      ],
      examples: [
        { ru: "Хочешь кофе? — Да, хочу!", en: "Tu veux un café ? — Oui, je veux bien !" },
        { ru: "Хочешь чай? — Нет, спасибо.", en: "Tu veux un thé ? — Non, merci." },
      ],
    },
  ],
  tasks: [
    match("l6-t1", "Relie les paires.", [
      ["Конечно!", "Bien sûr !"],
      ["Может быть.", "Peut-être."],
      ["Давай!", "C'est parti !"],
    ], { skill: "words" }),
    listen("l6-t2", "Écoute et choisis la meilleure réponse.", "Хочешь кофе?", [
      ["Да, хочу!", true],
      ["Да, хочешь!", false],
      ["Мне тоже.", false],
    ]),
    fill("l6-t3", "Complète.", "Ты", "чай?", "хочешь", ["хочешь", "хочу", "хочет"], { skill: "grammar" }),
    missing("l6-t4", "Quelle lettre manque ? (Je veux.)", "Хо", "у", "ч", ["ч", "ш", "ж"]),
    speak("l6-t5", "Пойдём гулять?", "Давай! Хорошая идея!", "C'est parti ! Bonne idée !", {
      help: "Tom t'invite à te promener. Réponds à voix haute.",
    }),
    listen("l6-t6", "Écoute. Qu'as-tu entendu ?", "Я из Москвы.", [
      ["Я из Москвы.", true],
      ["Я в Москве.", false],
      ["Я из Лондона.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "desk",
    itemName: "Bureau",
    itemNameRu: "Письменный стол",
    ru: "Ура! У меня новый стол!",
    en: "Hourra ! J'ai un nouveau bureau !",
    a11y: "Murzik est assis à son nouveau bureau près de la fenêtre. Son ordinateur portable est posé dessus. Tom se tient à côté. Les meubles et objets des leçons précédentes restent visibles dans l'appartement.",
    image: img.desk,
    steps: ["Un vieux bureau du marché aux puces apparaît près de la fenêtre.", "Murzik ouvre son tiroir.", "À l'intérieur, il y a une autre carte postale — celle-ci a un timbre de Londres !", "La même écriture. Le même petit chat peint. Grand-mère Assia !"],
    bridge: "Grand-mère Assia a été à Londres autrefois ! Maintenant Murzik sait où commencent ses pas. Il achète un billet. Demain, il doit dire au revoir à Paris.",
  },
};

export const lesson7: Lesson = {
  id: "a1-paris-7",
  level: "A1",
  cityId: "paris",
  number: 7,
  title: "À bientôt !",
  minutes: 6,
  goals: ["Dire au revoir à un ami et poliment", "Souhaiter une bonne journée et un bon voyage", "Répondre à un souhait"],
  vocabNote:
    "Пока! est pour les amis. До свидания! est poli et sans risque avec tout le monde. Les souhaits comme Хорошего дня! sont des phrases toutes faites : apprends-les entières.",
  vocab: [
    v("l7-1", "Пока!", "Salut !", "Murzik fait signe à Tom au revoir à la porte, avec un grand sourire.", "Écouter Пока", pic("paris/l7-1"), "poka!"),
    v("l7-2", "До свидания!", "Au revoir ! (poli)", "Murzik fait au revoir de la patte à Madame Dubois dans l'escalier, bien droit.", "Écouter До свидания", pic("paris/l7-2"), "do svidania!"),
    v("l7-3", "До завтра!", "À demain !", "Tom fait signe depuis la rue, le soir. Un croissant de lune dans le ciel.", "Écouter До завтра", pic("paris/l7-3"), "do zavtra!"),
    v("l7-4", "Мне пора.", "Je dois y aller.", "Tom regarde sa montre et enfile son manteau à la hâte.", "Écouter Мне пора", pic("paris/l7-5"), "mne pora."),
    v("l7-5", "Хорошего дня!", "Bonne journée !", "Madame Dubois sourit et fait signe à Murzik par un matin ensoleillé.", "Écouter Хорошего дня", pic("paris/l7-6"), "khorochevo dnia!"),
    v("l7-6", "И тебе!", "Toi aussi !", "Murzik répond à Tom d'un signe de la patte avec un grand sourire.", "Écouter И тебе", pic("paris/l7-7"), "i tebe!"),
    v("l7-7", "Счастливого пути!", "Bon voyage !", "Madame Dubois agite un mouchoir pendant que Murzik porte sa petite valise.", "Écouter Счастливого пути", pic("paris/l7-9"), "stchastlivogo pouti!"),
  ],
  letters: [
    letter("Ф ф", "« f » comme dans « fleur »", "Кофе", "Café"),
    letter("Щ щ", "un « ch » long et doux", "Ещё раз!", "Encore une fois !", "Plus doux et plus long que Ш."),
    letter("Ъ ъ", "pas de son à lui", "Подъезд", "Entrée (d'immeuble)", "Le signe dur est rare. Il fait une toute petite pause."),
  ],
  dialogue: {
    title: "Au revoir, Paris",
    note: "Я еду в … veut dire « je vais à … » en voiture, en train ou en avion. Tu le retrouveras à Londres. И вам! est le « vous aussi ! » poli.",
    lines: [
      line("murzik", "Мадам Дюбуа, до свидания! Я еду в Лондон.", "Madame Dubois, au revoir ! Je vais à Londres."),
      line("neighbour", "В Лондон? Счастливого пути!", "À Londres ? Bon voyage !"),
      line("murzik", "Спасибо! Хорошего дня!", "Merci ! Bonne journée !"),
      line("neighbour", "И тебе!", "À toi aussi !"),
      line("tom", "Мурзик, мне пора. До завтра!", "Murzik, je dois y aller. À demain !"),
      line("murzik", "Пока, Том! До завтра!", "Salut, Tom ! À demain !"),
    ],
    gist: choice("l7-d1", "Où va Murzik ?", [
      ["À Londres.", true],
      ["À Moscou.", false],
      ["Au parc.", false],
    ]),
  },
  grammar: [
    {
      title: "Пока ou До свидания ?",
      paragraphs: [
        "Пока! — aux amis, à la famille et aux enfants. До свидания! — poliment, à tout le monde. Ce n'est jamais une faute.",
        "Pour répondre à un souhait, dis И тебе! à un ami, ou И вам! poliment.",
      ],
      examples: [
        { ru: "Хорошего дня! — И тебе!", en: "Bonne journée ! — Toi aussi !" },
        { ru: "Хорошего дня! — Спасибо, и вам!", en: "Bonne journée ! — Merci, à vous aussi !" },
      ],
    },
  ],
  tasks: [
    listen("l7-t1", "Écoute la petite conversation. Comment va la deuxième personne ?", "Привет! Как дела? — Так себе. А у тебя? — Отлично!", [
      ["Bof.", true],
      ["Super.", false],
      ["Mal.", false],
    ], { help: "C'est ton examen d'écoute de Paris." }),
    choice("l7-t2", "Tu quittes un magasin. La vendeuse est une adulte. Que dis-tu ?", [
      ["Пока!", false],
      ["До свидания!", true],
    ], { skill: "grammar" }),
    choice("l7-t3", "Ton ami te dit Хорошего дня! Que réponds-tu ?", [
      ["И тебе!", true],
      ["И вам!", false],
      ["Мне пора.", false],
    ], { skill: "words" }),
    spell("l7-t4", "Assemble les lettres du mot « Merci ».", "Спасибо"),
    speak("l7-t5", "Мне пора.", "Пока! До завтра!", "Salut ! À demain !", { help: "Tom doit partir. Dis-lui au revoir à voix haute." }),
    listen("l7-t6", "Écoute et choisis la meilleure réponse.", "Откуда ты?", [
      ["Я из Лондона.", true],
      ["Мне пора.", false],
      ["Хорошо, спасибо.", false],
    ], { skill: "review" }),
    choice("l7-t7", "Хочешь чай? Tu n'en veux pas. Choisis la réponse polie.", [
      ["Нет, спасибо.", true],
      ["Давай!", false],
      ["Конечно!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "clock",
    itemName: "Horloge murale",
    itemNameRu: "Часы",
    ru: "Ура! У меня новые часы!",
    en: "Hourra ! J'ai une nouvelle horloge !",
    a11y: "Une nouvelle horloge murale apparaît dans l'appartement de Murzik. Murzik la regarde joyeusement. Le bol, la chaise, le canapé, la table de cuisine, le réfrigérateur et le bureau sont toujours là.",
    image: img.clock,
    steps: ["Une nouvelle horloge murale apparaît.", "Murzik la regarde joyeusement.", "L'horloge montre qu'il est l'heure de partir.", "Murzik prend sa valise."],
    bridge: "L'horloge donne l'heure. Le vol pour Londres part le matin.",
  },
};
