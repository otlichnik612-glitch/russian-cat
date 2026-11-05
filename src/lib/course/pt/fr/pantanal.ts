import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, g, line, listen, match, missing, script, speak, spell, tf, v } from "./make";

/* Пантанал · «Животные» · Ранчо Сеу Бенедиту. Животные и описание, ser и estar, лошади, рыбалка, ночные звуки. Пипока выучил «Olha o jacaré!». */

const p = (name: string) => pic(`pt/pantanal/${name}`);
const BENEDITO = "Seu Benedito";

const pn1: Lesson = {
  id: "pt-a1-pantanal-1",
  level: "A1",
  cityId: "pt-pantanal",
  number: 1,
  title: "Os animais — Les animaux",
  minutes: 7,
  goals: [
    "Nommer les animaux du Pantanal",
    "Demander « c'est quoi, cet animal ? »",
    "Répondre « c'est un… »",
  ],
  vocabNote:
    "Le Pantanal est la plus grande zone humide du monde. Il y a plus de caïmans que d'habitants ! La capivara — le capybara — est le plus gros rongeur du monde.",
  vocab: [
    v("ptpn1-1", "Que animal é esse?", "C'est quoi, cet animal ?",
      "Murzik, jumelles en patte, montre quelque chose dans l'herbe.",
      p("l1-1")),
    v("ptpn1-2", "É uma capivara.", "C'est un capybara.",
      "Un grand capybara tranquille est assis au bord de l'eau.",
      p("l1-2")),
    v("ptpn1-3", "o jacaré", "le caïman",
      "Un caïman est allongé sur la rive, gueule ouverte.",
      p("l1-3")),
    v("ptpn1-4", "a arara-azul", "l'ara bleu",
      "Un ara bleu vif sur une branche.",
      p("l1-4")),
    v("ptpn1-5", "a onça-pintada", "le jaguar",
      "Un jaguar tacheté se repose à l'ombre d'un arbre.",
      p("l1-5")),
    v("ptpn1-6", "o tuiuiú", "le jabiru (une grande cigogne)",
      "Une énorme cigogne au cou noir et au collier rouge.",
      p("l1-6")),
    v("ptpn1-7", "os pássaros", "les oiseaux",
      "Une volée d'aigrettes blanches passe au-dessus de l'eau.",
      p("l1-7")),
  ],
  dialogue: {
    title: "La première promenade",
    note:
      "Pantaneiro — un habitant du Pantanal, un cow-boy. Não se mexe — « ne bouge pas ».",
    lines: [
      line("benedito", "Bem-vindos à fazenda! Eu sou o Benedito, pantaneiro.", "Bienvenue au ranch ! Je suis Benedito, pantaneiro."),
      line("murzik", "Seu Benedito, que animal é esse?", "Seu Benedito, c'est quoi, cet animal ?"),
      line("benedito", "É uma capivara. E ali tem um jacaré.", "C'est un capybara. Et là-bas, il y a un caïman."),
      line("bia", "Olha! Uma arara-azul!", "Regarde ! Un ara bleu !"),
      line("murzik", "É azul como o mar! E aquele pássaro grande?", "Il est bleu comme la mer ! Et ce grand oiseau ?"),
      line("benedito", "É o tuiuiú. E ali… shhh, não se mexe… uma onça-pintada!", "C'est un jabiru. Et là… chut, ne bouge pas… un jaguar !"),
    ],
    gist: choice("ptpn1-d1", "Quel animal voient-ils en dernier ?", [
      ["Un jaguar.", true],
      ["Un capybara.", false],
      ["Un caïman.", false],
    ]),
  },
  grammar: [
    g(
      "Que animal é esse? — É um / uma…",
      [
        "Esse — « ce, cet » (près de toi, ou celui dont on parle) : Que animal é esse? — C'est quoi, cet animal ? On répond É um jacaré ou É uma capivara : l'article um / uma suit le genre du mot, comme « un / une » en français.",
        "Pas besoin de mot pour « c' » ici : É uma capivara veut dire « C'est un capybara ». Le É suffit, comme « c'est ».",
      ],
      [
        ["Que pássaro é esse? — É uma arara.", "C'est quoi, cet oiseau ? — C'est un ara."],
        ["É um jacaré grande.", "C'est un grand caïman."],
      ],
    ),
  ],
  tasks: [
    choice("ptpn1-t1", "Comment dire « C'est un capybara » ? (a capivara)", [
      ["É uma capivara.", true],
      ["É um capivara.", false],
      ["Esse uma capivara.", false],
    ], { skill: "grammar" }),
    listen("ptpn1-t2", "Écoute. Quel animal est-ce ?", "É um jacaré.", [
      ["Un caïman.", true],
      ["Un jaguar.", false],
      ["Une cigogne.", false],
    ]),
    match("ptpn1-t3", PAIRS, [
      ["o jacaré", "le caïman"],
      ["a capivara", "le capybara"],
      ["a onça-pintada", "le jaguar"],
      ["a arara-azul", "l'ara bleu"],
    ], { skill: "words" }),
    spell("ptpn1-t4", "Assemble le mot « animal ».", "animal"),
    speak("ptpn1-t5", "Qual é o seu animal favorito?", "O meu animal favorito é a capivara.", "Mon animal préféré, c'est le capybara. (Dis le tien.)", {
      help: "Dis à voix haute ton animal préféré.",
    }),
    choice("ptpn1-t6", "Comment dire « Comme c'est beau ! » ?", [
      ["Que lindo!", true],
      ["Que fome!", false],
      ["Que barulho!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "net",
    itemName: "Moustiquaire",
    itemNameRu: "Mosquiteiro",
    ru: "Oba! Um mosquiteiro!",
    en: "Hourra ! Une moustiquaire !",
    a11y: "Une moustiquaire blanche au-dessus du lit, comme une petite tente.",
    image: p("net"),
    steps: [
      "Le soir, les moustiques tournent autour de la lampe.",
      "Seu Benedito accroche une moustiquaire au-dessus du lit de Murzik.",
      "« Aqui tem muito mosquito! » — « Il y a plein de moustiques ici ! »",
      "Murzik dort comme dans une petite tente.",
    ],
    bridge: "Le matin, Murzik veut regarder tous les animaux de plus près.",
  },
};

const pn2: Lesson = {
  id: "pt-a1-pantanal-2",
  level: "A1",
  cityId: "pt-pantanal",
  number: 2,
  title: "Grande ou pequeno? — Grand ou petit ?",
  minutes: 7,
  goals: [
    "Décrire un animal",
    "Demander si c'est dangereux",
    "Accorder les adjectifs au pluriel",
  ],
  vocabNote:
    "Colorido — « coloré », perigoso — « dangereux », calmo — « calme ». Tous s'accordent en genre et en nombre, comme en français.",
  vocab: [
    v("ptpn2-1", "A capivara é grande.", "Le capybara est grand.",
      "Murzik à côté d'un capybara — trois fois plus gros que lui.",
      p("l2-1")),
    v("ptpn2-2", "O passarinho é pequeno.", "Le petit oiseau est petit.",
      "Un oiseau minuscule perché sur la patte de Murzik.",
      p("l2-2")),
    v("ptpn2-3", "Ele é perigoso?", "Il est dangereux ?",
      "Murzik regarde un caïman avec méfiance, caché derrière un arbre.",
      p("l2-3")),
    v("ptpn2-4", "Não, ele é calmo.", "Non, il est calme.",
      "Un caïman immobile au soleil, un oiseau posé sur son dos.",
      p("l2-4")),
    v("ptpn2-5", "As araras são coloridas.", "Les aras sont colorés.",
      "Des aras rouges, bleus et jaunes sur une branche.",
      p("l2-5")),
    v("ptpn2-6", "Ela é muito rápida!", "Elle est très rapide !",
      "Un lézard traverse un rocher comme un éclair.",
      p("l2-6")),
    v("ptpn2-7", "Os jacarés são lentos.", "Les caïmans sont lents.",
      "Un caïman rampe paresseusement vers l'eau.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Le capybara et ses amis",
    note:
      "Amiga de todos — « l'amie de tout le monde ». Na água — « dans l'eau ».",
    lines: [
      line("murzik", "Seu Benedito, a capivara é grande! Ela é perigosa?", "Seu Benedito, le capybara est grand ! Il est dangereux ?"),
      line("benedito", "Não, ela é calma. Ela é amiga de todos!", "Non, il est calme. C'est l'ami de tout le monde !"),
      line("bia", "E o jacaré? Ele é perigoso?", "Et le caïman ? Il est dangereux ?"),
      line("benedito", "Um pouco. Mas os jacarés são lentos… na terra.", "Un peu. Mais les caïmans sont lents… sur la terre ferme."),
      line("murzik", "E na água?", "Et dans l'eau ?"),
      line("benedito", "Na água eles são muito rápidos!", "Dans l'eau, ils sont très rapides !"),
      line("bia", "Olha as araras! Elas são tão coloridas!", "Regarde les aras ! Comme ils sont colorés !"),
    ],
    gist: choice("ptpn2-d1", "Comment sont les caïmans dans l'eau ?", [
      ["Très rapides.", true],
      ["Lents.", false],
      ["Calmes.", false],
    ]),
  },
  grammar: [
    g(
      "Les adjectifs au pluriel",
      [
        "L'adjectif copie le genre et le nombre du nom, exactement comme en français : o jacaré lento — os jacarés lentos, a arara colorida — as araras coloridas (« colorée », « colorées »).",
        "Ser sert pour « ce qu'on est par nature » : A capivara é grande. Ela é calma. Os jacarés são lentos.",
      ],
      [
        ["Os pássaros são pequenos.", "Les oiseaux sont petits."],
        ["As onças são rápidas.", "Les jaguars sont rapides."],
      ],
    ),
  ],
  tasks: [
    choice("ptpn2-t1", "Comment dire « Les aras sont colorés » ?", [
      ["As araras são coloridas.", true],
      ["As araras é colorida.", false],
      ["As araras são colorido.", false],
    ], { skill: "grammar" }),
    listen("ptpn2-t2", "Écoute. Comment est le caïman ?", "O jacaré é lento.", [
      ["Lent.", true],
      ["Rapide.", false],
      ["Petit.", false],
    ]),
    match("ptpn2-t3", PAIRS, [
      ["grande", "grand"],
      ["pequeno", "petit"],
      ["rápido", "rapide"],
      ["perigoso", "dangereux"],
    ], { skill: "words" }),
    missing("ptpn2-t4", "Quelle lettre manque-t-il ? (« dangereux »)", "perigo", "o", "s", ["s", "z", "ss"]),
    speak("ptpn2-t5", "Como é o seu animal favorito?", "Ele é pequeno e muito rápido.", "Il est petit et très rapide.", {
      help: "Décris à voix haute ton animal préféré.",
    }),
    choice("ptpn2-t6", "Comment demander « C'est quoi, cet animal ? »", [
      ["Que animal é esse?", true],
      ["Quem é esse animal?", false],
      ["Quanto é esse animal?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "boots",
    itemName: "Bottes en caoutchouc",
    itemNameRu: "Botas de borracha",
    ru: "Oba! Botas de borracha!",
    en: "Hourra ! Des bottes en caoutchouc !",
    a11y: "De petites bottes en caoutchouc vertes, couvertes de boue, devant la porte.",
    image: p("boots"),
    steps: [
      "Les pattes de Murzik sont pleines de boue.",
      "Seu Benedito trouve des bottes minuscules dans la grange.",
      "« Eram do meu neto! » — « C'étaient celles de mon petit-fils ! »",
      "Les bottes attendent devant la porte.",
    ],
    bridge: "L'après-midi, Murzik retourne à la rivière. Le caïman dort. Ou peut-être pas ?",
  },
};

const pn3: Lesson = {
  id: "pt-a1-pantanal-3",
  level: "A1",
  cityId: "pt-pantanal",
  number: 3,
  title: "Ser ou estar? — Être, toujours ou en ce moment ?",
  minutes: 7,
  goals: [
    "Distinguer ser et estar",
    "Dire que tu as peur",
    "Décrire ce qui se passe en ce moment",
  ],
  vocabNote:
    "Estou com medo — « j'ai peur », littéralement « je suis avec la peur », comme estou com frio (« j'ai froid »). Le français dit aussi « avoir peur » ! Et ça ne change ni pour un homme ni pour une femme.",
  vocab: [
    v("ptpn3-1", "Ele está dormindo.", "Il est en train de dormir.",
      "Un caïman allongé, les yeux fermés.",
      p("l3-1")),
    v("ptpn3-2", "Estou com medo!", "J'ai peur !",
      "Murzik se cache derrière les jambes de Seu Benedito.",
      p("l3-2")),
    v("ptpn3-3", "O rio está cheio.", "La rivière a débordé.",
      "La rivière est sortie de son lit, les arbres ont les pieds dans l'eau.",
      p("l3-3")),
    v("ptpn3-4", "Eu sou curioso.", "Je suis curieux.",
      "Murzik se penche avec curiosité au-dessus d'un terrier.",
      p("l3-4")),
    v("ptpn3-5", "Ele está acordado!", "Il est réveillé !",
      "Le caïman a ouvert un œil.",
      p("l3-5")),
    v("ptpn3-6", "Calma, não tem perigo.", "Du calme, il n'y a pas de danger.",
      "Seu Benedito lève la main, tranquillement.",
      p("l3-6")),
    v("ptpn3-7", "Ufa! Que alívio!", "Ouf ! Quel soulagement !",
      "Murzik s'essuie le front avec la patte.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Le caïman endormi",
    note:
      "Só — « juste, seulement ». Bocejando — « en train de bâiller ». Longe — « loin ».",
    lines: [
      line("murzik", "Olha, o jacaré está dormindo.", "Regarde, le caïman est en train de dormir."),
      line("bia", "Murzik, você é muito curioso! Não chega perto!", "Murzik, tu es trop curieux ! N'approche pas !"),
      line("murzik", "Ai! Ele está acordado! Estou com medo!", "Aïe ! Il est réveillé ! J'ai peur !"),
      line("benedito", "Calma, não tem perigo. Ele só está bocejando.", "Du calme, il n'y a pas de danger. Il est juste en train de bâiller."),
      line("murzik", "Ufa! Que alívio!", "Ouf ! Quel soulagement !"),
      line("benedito", "Mas os jacarés são perigosos. Fique longe, tá?", "Mais les caïmans sont dangereux. Reste à distance, d'accord ?"),
    ],
    gist: choice("ptpn3-d1", "Que fait le caïman en réalité ?", [
      ["Il bâille.", true],
      ["Il attaque.", false],
      ["Il mange un poisson.", false],
    ]),
  },
  grammar: [
    g(
      "Ser et estar : « par nature » et « en ce moment »",
      [
        "Ser — ce qui est permanent : le caractère, l'identité : Eu sou curioso, Os jacarés são perigosos. Estar — ce qui est vrai maintenant et peut changer : un état, un lieu, une action en cours : O jacaré está dormindo, O rio está cheio. En français, les deux se disent « être » : à toi de choisir en portugais !",
        "Pose-toi la question : c'est pour toujours ou juste pour l'instant ? Ele é calmo — « il est calme (de caractère) ». Ele está calmo — « il est calme (là, maintenant) ».",
      ],
      [
        ["A Bia é alegre.", "Bia est joyeuse (de caractère)."],
        ["A Bia está cansada.", "Bia est fatiguée (en ce moment)."],
      ],
    ),
  ],
  tasks: [
    choice("ptpn3-t1", "Le caïman dort en ce moment. Comment le dire ?", [
      ["O jacaré está dormindo.", true],
      ["O jacaré é dormindo.", false],
      ["O jacaré dormindo.", false],
    ], { skill: "grammar" }),
    listen("ptpn3-t2", "Écoute. Comment se sent celui qui parle ?", "Estou com medo!", [
      ["Il a peur.", true],
      ["Il est content.", false],
      ["Il a froid.", false],
    ]),
    tf("ptpn3-t3", "O rio está cheio — « la rivière a débordé » (en ce moment).", true, "words"),
    spell("ptpn3-t4", "Assemble le mot « peur ».", "medo"),
    speak("ptpn3-t5", "Você está com medo?", "Não, não tem perigo. Estou calmo.", "Non, il n'y a pas de danger. Je suis calme.", {
      help: "Réponds à voix haute. Une femme dira calma.",
    }),
    choice("ptpn3-t6", "Comment dire « Le capybara est grand » ?", [
      ["A capivara é grande.", true],
      ["A capivara está grande.", false],
      ["A capivara são grandes.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "horn",
    itemName: "Corne de cow-boy",
    itemNameRu: "Berrante",
    ru: "Oba! Um berrante!",
    en: "Hourra ! Une corne de cow-boy !",
    a11y: "Une longue corne ornée d'une lanière en cuir, accrochée au mur.",
    image: p("horn"),
    steps: [
      "Seu Benedito souffle dans une longue corne : « Bouuu ! »",
      "Les vaches arrivent de tout le champ vers la maison.",
      "Il offre une petite corne à Murzik.",
      "La corne est accrochée au mur. Bouuu !",
    ],
    bridge: "Le matin, Seu Benedito sort deux chevaux de l'écurie.",
  },
};

const pn4: Lesson = {
  id: "pt-a1-pantanal-4",
  level: "A1",
  cityId: "pt-pantanal",
  number: 4,
  title: "A cavalo — À cheval",
  minutes: 7,
  goals: [
    "Parler de la vie au ranch",
    "Dire « je n'ai jamais… »",
    "Comprendre les consignes d'équitation",
  ],
  vocabNote:
    "Andar a cavalo — « monter à cheval » (avec a, comme en français !), andar de bicicleta — « faire du vélo » (avec de, comme « du »). À cheval c'est a, avec un véhicule c'est de.",
  vocab: [
    v("ptpn4-1", "o cavalo", "le cheval",
      "Un cheval bai avec une étoile blanche au front.",
      p("l4-1")),
    v("ptpn4-2", "a vaca", "la vache",
      "Une vache blanche aux grandes cornes dans un champ.",
      p("l4-2")),
    v("ptpn4-3", "Vamos andar a cavalo?", "On monte à cheval ?",
      "Seu Benedito tient deux chevaux par la bride.",
      p("l4-3")),
    v("ptpn4-4", "Eu nunca andei a cavalo.", "Je ne suis jamais monté à cheval.",
      "Murzik lève les yeux, dérouté, vers un cheval immense.",
      p("l4-4")),
    v("ptpn4-5", "Sobe aqui!", "Monte là-dessus !",
      "Seu Benedito hisse Murzik en selle.",
      p("l4-5")),
    v("ptpn4-6", "Segura as rédeas!", "Tiens les rênes !",
      "Murzik en selle, bien cramponné aux rênes.",
      p("l4-6")),
    v("ptpn4-7", "Devagar, cavalinho!", "Doucement, petit cheval !",
      "Le cheval marche au pas pendant que Murzik lui caresse l'encolure.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Le matin au ranch",
    note:
      "Primeira vez — « la première fois ». Égua — « jument ». Mansa — « douce ».",
    lines: [
      line("benedito", "Bom dia! Vamos andar a cavalo? Hoje nós levamos as vacas para o rio.", "Bonjour ! On monte à cheval ? Aujourd'hui, on emmène les vaches à la rivière."),
      line("murzik", "Eu nunca andei a cavalo. É a primeira vez!", "Je ne suis jamais monté à cheval. C'est la première fois !"),
      line("benedito", "Não tem problema. Esta égua é mansa. Sobe aqui!", "Pas de problème. Cette jument est douce. Monte là-dessus !"),
      line("benedito", "Segura as rédeas!", "Tiens les rênes !"),
      line("murzik", "Ai! Ela está andando! Devagar, cavalinho!", "Aïe ! Elle avance ! Doucement, petit cheval !"),
      line("bia", "Muito bem, Murzik! Você é um pantaneiro!", "Bravo, Murzik ! Tu es un vrai pantaneiro !"),
    ],
    gist: choice("ptpn4-d1", "Que fait Murzik pour la première fois ?", [
      ["Il monte à cheval.", true],
      ["Il trait une vache.", false],
      ["Il pêche.", false],
    ]),
  },
  grammar: [
    g(
      "Andei — « j'ai monté » : un premier passé",
      [
        "Eu nunca andei — « je n'ai jamais monté ». Pour les verbes en -ar, « je » au passé finit en -ei : andei, falei, comprei. Le français utilise le passé composé exactement de la même façon : andei — « j'ai monté / j'ai fait ».",
        "Nous apprendrons le passé en détail à Fortaleza. Pour l'instant, retiens Eu nunca… — « je n'ai jamais… ». Pas d'accord au passé : andei se dit pour un homme comme pour une femme.",
      ],
      [
        ["Eu nunca andei de barco.", "Je n'ai jamais fait de bateau."],
        ["Eu nunca falei português!", "Je n'ai jamais parlé portugais !"],
      ],
    ),
  ],
  tasks: [
    choice("ptpn4-t1", "Comment dire « faire du vélo » ?", [
      ["andar de bicicleta", true],
      ["andar a bicicleta", false],
      ["jogar bicicleta", false],
    ], { skill: "grammar" }),
    listen("ptpn4-t2", "Écoute. Que dit Seu Benedito ?", "Segura as rédeas!", [
      ["Tiens les rênes !", true],
      ["Monte là-dessus !", false],
      ["Doucement !", false],
    ]),
    match("ptpn4-t3", PAIRS, [
      ["o cavalo", "le cheval"],
      ["a vaca", "la vache"],
      ["Sobe aqui!", "Monte là-dessus !"],
      ["devagar", "lentement"],
    ], { skill: "words" }),
    missing("ptpn4-t4", "Quelle lettre manque-t-il ? (« cheval »)", "ca", "alo", "v", ["v", "b", "f"]),
    speak("ptpn4-t5", "Você já andou a cavalo?", "Não, eu nunca andei a cavalo.", "Non, je ne suis jamais monté(e) à cheval.", {
      help: "Réponds à voix haute pour toi. Pour « oui », dis Sim, já andei.",
    }),
    choice("ptpn4-t6", "Le caïman dort en ce moment. Comment le dire ?", [
      ["Ele está dormindo.", true],
      ["Ele é dormindo.", false],
      ["Ele dorme agora sempre.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jaguar",
    itemName: "Jaguar en bois",
    itemNameRu: "Onça de madeira",
    ru: "Oba! Uma onça de madeira!",
    en: "Hourra ! Un jaguar en bois !",
    a11y: "Une petite figurine de jaguar sculptée, aux taches peintes, sur l'étagère.",
    image: p("jaguar"),
    steps: [
      "Le soir, Seu Benedito sculpte quelque chose avec son couteau.",
      "C'est un petit jaguar en bois !",
      "« Para o pantaneiro corajoso! » — « Pour le pantaneiro courageux ! »",
      "Le jaguar trône sur l'étagère.",
    ],
    bridge: "Le lendemain — la pêche. Seu Benedito promet des piranhas !",
  },
};

const pn5: Lesson = {
  id: "pt-a1-pantanal-5",
  level: "A1",
  cityId: "pt-pantanal",
  number: 5,
  title: "A pescaria — La pêche",
  minutes: 7,
  goals: [
    "Parler de pêche",
    "Conjuguer ter : tenho, tem, temos, têm",
    "Se réjouir d'un coup de chance",
  ],
  vocabNote:
    "Têm (« ils ont ») s'écrit avec un accent circonflexe, tem (« il a ») sans. Ils se prononcent presque pareil.",
  vocab: [
    v("ptpn5-1", "Vamos pescar?", "On va pêcher ?",
      "Seu Benedito, la canne à pêche sur l'épaule.",
      p("l5-1")),
    v("ptpn5-2", "a vara de pescar", "la canne à pêche",
      "Murzik tient une petite canne en bambou.",
      p("l5-2")),
    v("ptpn5-3", "a piranha", "le piranha",
      "Un petit poisson argenté aux dents acérées.",
      p("l5-3")),
    v("ptpn5-4", "Peguei um peixe!", "J'ai attrapé un poisson !",
      "Murzik tient au bout de sa ligne un poisson qui gigote.",
      p("l5-4")),
    v("ptpn5-5", "Ela tem dentes grandes!", "Elle a de grandes dents !",
      "Gros plan : un piranha gueule ouverte.",
      p("l5-5")),
    v("ptpn5-6", "Joga de volta!", "Remets-le à l'eau !",
      "Murzik relâche délicatement le poisson dans la rivière.",
      p("l5-6")),
    v("ptpn5-7", "Que sorte!", "Quelle chance !",
      "Bia tape sur l'épaule de Murzik.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Au bord de la rivière",
    note:
      "Isca — « l'appât ». Que sorte! — « Quelle chance ! »",
    lines: [
      line("benedito", "Vamos pescar? Vocês têm a vara de pescar?", "On va pêcher ? Vous avez vos cannes à pêche ?"),
      line("bia", "Eu tenho. E o Murzik?", "Moi, oui. Et Murzik ?"),
      line("benedito", "Esta vara é para você, Murzik. E nós temos isca. Agora… silêncio.", "Cette canne est pour toi, Murzik. Et nous avons de l'appât. Maintenant… silence."),
      line("murzik", "Peguei! Peguei um peixe!", "J'en ai un ! J'ai attrapé un poisson !"),
      line("benedito", "É uma piranha! Que sorte!", "C'est un piranha ! Quelle chance !"),
      line("murzik", "Nossa! Ela tem dentes grandes!", "Waouh ! Elle a de grandes dents !"),
      line("bia", "Joga de volta, Murzik!", "Remets-le à l'eau, Murzik !"),
    ],
    gist: choice("ptpn5-d1", "Qu'est-ce que Murzik a attrapé ?", [
      ["Un piranha.", true],
      ["Un caïman.", false],
      ["Une vieille botte.", false],
    ]),
  },
  grammar: [
    g(
      "Ter — « avoir »",
      [
        "Ter, c'est « avoir », tout simplement : eu tenho (« j'ai »), você / ele tem (« il a »), nós temos (« nous avons »), vocês / eles têm (« ils ont »). Ela tem dentes grandes — « elle a de grandes dents ».",
        "Souviens-toi : tem veut dire aussi « il y a » : Tem piranha no rio? — « Il y a des piranhas dans la rivière ? »",
      ],
      [
        ["Nós temos duas varas.", "Nous avons deux cannes."],
        ["Eles têm um barco.", "Ils ont un bateau."],
      ],
    ),
  ],
  tasks: [
    choice("ptpn5-t1", "Comment dire « Nous avons de l'appât » ?", [
      ["Nós temos isca.", true],
      ["Nós tem isca.", false],
      ["Nós somos isca.", false],
    ], { skill: "grammar" }),
    listen("ptpn5-t2", "Écoute. Que s'est-il passé ?", "Peguei um peixe!", [
      ["Il a attrapé un poisson.", true],
      ["Il est tombé à l'eau.", false],
      ["Le poisson s'est échappé.", false],
    ]),
    match("ptpn5-t3", PAIRS, [
      ["pescar", "pêcher"],
      ["a vara", "la canne"],
      ["os dentes", "les dents"],
      ["Que sorte!", "Quelle chance !"],
    ], { skill: "words" }),
    spell("ptpn5-t4", "Assemble le mot « piranha ».", "piranha"),
    speak("ptpn5-t5", "Você tem irmãos?", "Tenho. Eu tenho uma irmã. Ela tem dez anos.", "Oui. J'ai une sœur. Elle a dix ans.", {
      help: "Parle à voix haute de ta famille — avec tenho et tem.",
    }),
    choice("ptpn5-t6", "Comment dire « Je ne suis jamais monté(e) à cheval » ?", [
      ["Eu nunca andei a cavalo.", true],
      ["Eu nunca ando de cavalo.", false],
      ["Eu não nunca cavalo.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "rod",
    itemName: "Canne à pêche en bambou",
    itemNameRu: "Vara de pescar",
    ru: "Oba! Uma vara de pescar!",
    en: "Hourra ! Une canne à pêche !",
    a11y: "Une petite canne à pêche en bambou avec un flotteur rouge, dans un coin.",
    image: p("rod"),
    steps: [
      "Seu Benedito dit que Murzik peut garder la canne en bambou.",
      "« Você é sortudo! » — « Quel veinard tu fais ! »",
      "Murzik la pose dans un coin.",
      "Un petit poisson est peint sur le flotteur.",
    ],
    bridge: "La nuit, le Pantanal est très bruyant. Qui coasse, qui hulule, qui frôle les herbes ?",
  },
};

const pn6: Lesson = {
  id: "pt-a1-pantanal-6",
  level: "A1",
  cityId: "pt-pantanal",
  number: 6,
  title: "A noite — La nuit",
  minutes: 7,
  goals: [
    "Demander « c'est quoi, ce bruit ? »",
    "Rassurer : « il n'y a rien »",
    "Souhaiter bonne nuit",
  ],
  vocabNote:
    "En portugais, la double négation est la règle : Não tem nada — « il n'y a rien », Não tem ninguém — « il n'y a personne ». Le français aussi a besoin de deux morceaux : « ne… rien », « ne… personne » !",
  vocab: [
    v("ptpn6-1", "Que barulho é esse?", "C'est quoi, ce bruit ?",
      "Murzik dresse les oreilles dans le noir.",
      p("l6-1")),
    v("ptpn6-2", "Não tem nada.", "Il n'y a rien.",
      "Bia éclaire l'herbe vide avec sa lampe torche.",
      p("l6-2")),
    v("ptpn6-3", "É só um sapo.", "C'est juste une grenouille.",
      "Une petite grenouille verte coasse sur une feuille.",
      p("l6-3")),
    v("ptpn6-4", "Não tem ninguém.", "Il n'y a personne.",
      "La véranda du ranch, déserte, sous la lune.",
      p("l6-4")),
    v("ptpn6-5", "Os olhos brilham no escuro.", "Des yeux brillent dans le noir.",
      "Des dizaines de points rouges luisent dans le noir près de l'eau.",
      p("l6-5")),
    v("ptpn6-6", "Vamos dormir?", "On va dormir ?",
      "Bia bâille et montre la maison.",
      p("l6-6")),
    v("ptpn6-7", "Durma bem!", "Dors bien !",
      "Sous la moustiquaire, Murzik serre son toucan en peluche.",
      p("l6-7")),
  ],
  dialogue: {
    title: "Les bruits de la nuit",
    note:
      "Lanterna — « lampe torche ». São jacarés — « ce sont des caïmans ». Eles não saem da água — « ils ne sortent pas de l'eau ».",
    lines: [
      line("murzik", "Bia! Que barulho é esse?", "Bia ! C'est quoi, ce bruit ?"),
      line("bia", "Calma… Não tem nada. É só um sapo.", "Du calme… Il n'y a rien. C'est juste une grenouille."),
      line("murzik", "E lá? Os olhos brilham no escuro!", "Et là-bas ? Des yeux brillent dans le noir !"),
      line("benedito", "São jacarés. Mas eles não saem da água à noite.", "Ce sont des caïmans. Mais la nuit, ils ne sortent pas de l'eau."),
      line("murzik", "Tem certeza?", "T'en es sûr ?"),
      line("benedito", "Tenho! Vamos dormir? Durma bem, Murzik!", "Sûr ! On va dormir ? Dors bien, Murzik !"),
    ],
    gist: choice("ptpn6-d1", "À qui sont les yeux qui brillent dans le noir ?", [
      ["Aux caïmans.", true],
      ["Aux grenouilles.", false],
      ["À un jaguar.", false],
    ]),
  },
  grammar: [
    g(
      "Ne… rien, ne… personne",
      [
        "En portugais comme en français, la négation se fait en deux morceaux : Não tem nada — « il n'y a rien », Não tem ninguém — « il n'y a personne », Eu não vejo nada — « je ne vois rien ». Não joue le rôle de « ne », et nada / ninguém celui de « rien / personne ».",
        "Tem certeza? — « T'en es sûr(e) ? », littéralement « tu as la certitude ? ». On répond Tenho! — « Sûr ! »",
      ],
      [
        ["Eu não vejo nada.", "Je ne vois rien."],
        ["Não tem ninguém aqui.", "Il n'y a personne ici."],
      ],
    ),
  ],
  tasks: [
    choice("ptpn6-t1", "Comment dire « Il n'y a personne ici » ?", [
      ["Não tem ninguém aqui.", true],
      ["Tem ninguém não aqui.", false],
      ["Não tem alguém aqui.", false],
    ], { skill: "grammar" }),
    listen("ptpn6-t2", "Écoute. C'est quoi, ce bruit ?", "É só um sapo.", [
      ["Juste une grenouille.", true],
      ["Un caïman.", false],
      ["Un cheval.", false],
    ]),
    match("ptpn6-t3", PAIRS, [
      ["nada", "rien"],
      ["ninguém", "personne"],
      ["o escuro", "le noir"],
      ["o sapo", "la grenouille"],
    ], { skill: "words" }),
    missing("ptpn6-t4", "Quelle lettre manque-t-il ? (« personne »)", "ningu", "m", "é", ["é", "e", "ê"]),
    speak("ptpn6-t5", "Boa noite! Vamos dormir?", "Vamos! Boa noite, durma bem!", "Allons-y ! Bonne nuit, dors bien !", {
      help: "Souhaite bonne nuit à voix haute.",
    }),
    choice("ptpn6-t6", "Comment dire « Quelle chance ! » ?", [
      ["Que sorte!", true],
      ["Que medo!", false],
      ["Que barulho!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "terere",
    itemName: "Calebasse à tereré",
    itemNameRu: "Guampa de tereré",
    ru: "Oba! Uma guampa de tereré!",
    en: "Hourra ! Une calebasse à tereré !",
    a11y: "Une calebasse en corne avec une paille en métal, sur le rebord de la fenêtre.",
    image: p("terere"),
    steps: [
      "Le matin, Seu Benedito boit du maté froid — le tereré.",
      "On le boit avec une paille en métal, dans une calebasse en corne.",
      "« Experimenta! » — « Goûte ! » C'est amer, mais ça rafraîchit.",
      "Seu Benedito offre une calebasse à Murzik.",
    ],
    bridge: "Au petit-déjeuner, Seu Benedito rit soudain : « Agora eu lembro! O papagaio! »",
  },
};

const pn7: Lesson = {
  id: "pt-a1-pantanal-7",
  level: "A1",
  cityId: "pt-pantanal",
  number: 7,
  title: "Olha o jacaré! — Attention, un caïman !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Dire que quelqu'un a sauvé quelqu'un",
    "Revoir tous les mots du Pantanal",
  ],
  vocabNote:
    "Olha o jacaré! veut dire à la fois « regarde, un caïman ! » et « attention, un caïman ! » Olha sert souvent d'avertissement.",
  vocab: [
    v("ptpn7-1", "Olha o jacaré!", "Attention, un caïman !",
      "Le perroquet vert crie en battant des ailes à la proue d'un bateau.",
      p("l7-1")),
    v("ptpn7-2", "Ele avisou todo mundo.", "Il a prévenu tout le monde.",
      "Les musiciens dans le bateau se retournent, affolés.",
      p("l7-2")),
    v("ptpn7-3", "Ele salvou o Zeca!", "Il a sauvé Zeca !",
      "Le chanteur du groupe recule d'un bond devant l'eau pendant que le caïman s'éloigne.",
      p("l7-3")),
    v("ptpn7-4", "Eles foram para Brasília.", "Ils sont partis pour Brasília.",
      "Une carte : une flèche vers une ville en forme d'avion, en plein centre du pays.",
      p("l7-4")),
    v("ptpn7-5", "a capital", "la capitale",
      "Une petite image : des bâtiments blancs aux formes étonnantes.",
      p("l7-5")),
    v("ptpn7-6", "Que aventura!", "Quelle aventure !",
      "Murzik, avec ses bottes, sa canne à pêche et sa corne, fait un signe d'adieu.",
      p("l7-6")),
    v("ptpn7-7", "Vão com cuidado!", "Soyez prudents en route !",
      "Seu Benedito fait signe avec son chapeau devant le portail du ranch.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce qu'a dit le perroquet",
    note:
      "Lembro — « je me souviens ». Na beira do rio — « au bord de la rivière ». Herói — « héros ».",
    lines: [
      line("benedito", "Agora eu lembro! O papagaio! A banda passou aqui ontem.", "Ça me revient ! Le perroquet ! Le groupe est passé par ici hier."),
      line("bia", "E o Pipoca? O que ele fez?", "Et Pipoca ? Qu'est-ce qu'il a fait ?"),
      line("benedito", "O Zeca estava na beira do rio. E tinha um jacaré! O papagaio gritou: Olha o jacaré! Olha o jacaré!", "Zeca était au bord de la rivière. Et il y avait un caïman ! Le perroquet a crié : « Attention, un caïman ! Attention, un caïman ! »"),
      line("murzik", "Ele avisou todo mundo? Ele salvou o Zeca!", "Il a prévenu tout le monde ? Il a sauvé Zeca !"),
      line("benedito", "Salvou! O Pipoca é um herói. Agora eles estão em Brasília, a capital.", "Sauvé ! Pipoca est un héros. Maintenant, ils sont à Brasília, la capitale."),
      line("murzik", "Que aventura! Obrigado por tudo, Seu Benedito!", "Quelle aventure ! Merci pour tout, Seu Benedito !"),
      line("benedito", "Vão com cuidado!", "Soyez prudents en route !"),
    ],
    gist: choice("ptpn7-d1", "Qu'a fait Pipoca dans le Pantanal ?", [
      ["Il a prévenu Zeca qu'il y avait un caïman.", true],
      ["Il a attrapé un piranha.", false],
      ["Il s'est envolé avec les aras bleus.", false],
    ]),
  },
  grammar: [
    g(
      "Le passé : avisou, salvou, gritou",
      [
        "Ele avisou — « il a prévenu », ele salvou — « il a sauvé », ele gritou — « il a crié ». Au passé, les verbes en -ar finissent en -ou pour « il » et « elle ». Comme le passé composé français : une seule forme, sans accord visible.",
        "Et pour « je », c'est -ei (tu te souviens de andei ?) : eu gritei — « j'ai crié ». Tous les détails à Fortaleza.",
      ],
      [
        ["O papagaio gritou.", "Le perroquet a crié."],
        ["Ele salvou o Zeca.", "Il a sauvé Zeca."],
      ],
    ),
  ],
  tasks: [
    listen("ptpn7-t1", "Examen audio. Que raconte Seu Benedito ?", "O papagaio gritou: Olha o jacaré! Ele salvou o Zeca. Agora a banda está em Brasília.", [
      ["Le perroquet a sauvé Zeca, et le groupe est maintenant à Brasília.", true],
      ["Un caïman a emporté le tambour.", false],
      ["Le groupe est resté au ranch.", false],
    ]),
    choice("ptpn7-t2", "Comment dire « Quelle aventure ! » ?", [
      ["Que aventura!", true],
      ["Que alívio!", false],
      ["Que perigo!", false],
    ], { skill: "words" }),
    build("ptpn7-t3", "Assemble la phrase : « Il a sauvé Zeca ».", ["Ele", "salvou", "o", "Zeca."]),
    missing("ptpn7-t4", "Quelle lettre manque-t-il ? (« capitale »)", "capi", "al", "t", ["t", "d", "ch"]),
    speak("ptpn7-t5", "Vão com cuidado!", "Obrigado por tudo! Que aventura!", "Merci pour tout ! Quelle aventure !", {
      help: "Dis au revoir à voix haute. On peut dire obrigado ou obrigada.",
    }),
    script("ptpn7-t6", "Souviens-toi de tout le Pantanal. Termine la conversation avec Seu Benedito.", [
      { speaker: BENEDITO, text: "Olha ali! Que animal é esse?" },
      { speaker: YOU, answer: "É uma capivara!", options: ["É uma capivara!", "É um capivara!", "Está capivara!"] },
      { speaker: BENEDITO, text: "E o jacaré? Ele é perigoso?" },
      { speaker: YOU, answer: "Um pouco. Mas agora ele está dormindo.", options: ["Um pouco. Mas agora ele está dormindo.", "Ele é dormindo.", "Peguei um peixe!"] },
      { speaker: BENEDITO, text: "Vamos andar a cavalo?" },
      { speaker: YOU, answer: "Vamos! Eu nunca andei a cavalo.", options: ["Vamos! Eu nunca andei a cavalo.", "Não tem ninguém.", "Joga de volta!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-pantanal",
    itemName: "Photo de Pipoca le héros",
    itemNameRu: "Foto do Pipoca herói",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y:
      "Une photo : le perroquet vert, fier, sur l'épaule du chanteur du groupe ; derrière eux, la rivière et un caïman au loin.",
    image: p("photo"),
    steps: [
      "Seu Benedito a une photo de ce jour-là.",
      "Pipoca est fier sur l'épaule de Zeca !",
      "« O herói do Pantanal! » — « Le héros du Pantanal ! »",
      "Légende : « Olha o jacaré! » Et hop, dans l'album.",
    ],
    bridge: "L'avion vole vers le cœur du Brésil — sa capitale.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre au ranch",
    nameRu: "O quarto na fazenda",
    image: p("home"),
    a11y:
      "Une simple chambre en bois dans une maison sur pilotis. Par la fenêtre : des lacs, de l'herbe et des aigrettes blanches. La valise de Murzik au milieu.",
  },
  keepsakeId: "photo-pantanal",
  welcomeRu: "Olá, Pantanal!",
  welcomeEn: "Bonjour, Pantanal !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Une maison en bois sur pilotis au milieu de plaines vertes et de lacs. Des aigrettes blanches volent au-dessus de l'eau ; un caïman se chauffe sur la rive.",
  departureImage: p("departure"),
  departureA11y: "Seu Benedito fait signe avec son chapeau devant le portail du ranch.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca sur l'épaule de Zeca.",
      lines: [
        { en: "Septième page de l'album : Pipoca, héros du Pantanal." },
        { ru: "Olha o jacaré!", en: "Attention, un caïman !" },
        { en: "La moitié du chemin est faite." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Pantanal completo!", en: "Pantanal terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Seu Benedito fait un signe d'adieu.",
      lines: [
        { ru: "Tchau, Seu Benedito!", en: "Au revoir, Seu Benedito !" },
        { ru: "Próxima parada: Brasília!", en: "Prochain arrêt : Brasília !" },
      ],
    },
    {
      image: p("plane"),
      a11y: "Un avion vole au-dessus de la terre rouge et de champs bien alignés.",
      lines: [{ ru: "Pantanal → Brasília", en: "Pantanal → Brasília" }],
    },
    {
      image: pic("pt/brasilia/arrival"),
      a11y:
        "Une large esplanade avec des bâtiments blancs aux formes étonnantes : deux hautes tours et des coupoles comme des bols renversés.",
      lines: [
        { ru: "Olá, Brasília!", en: "Bonjour, Brasília !" },
        { ru: "Que cidade diferente!", en: "Quelle ville étonnante !" },
      ],
    },
  ],
};

export const ptPantanalFr = {
  id: "pt-pantanal",
  name: "Le Pantanal",
  namePt: "Pantanal",
  lessons: [pn1, pn2, pn3, pn4, pn5, pn6, pn7],
  story,
};
