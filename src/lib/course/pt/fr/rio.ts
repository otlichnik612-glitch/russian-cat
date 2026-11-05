import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, choice, fill, g, letter, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Рио-де-Жанейро · «Olá!» · Мурзик и дона Лусия прилетают в Рио, их встречает Биа. Буквы и звуки, приветствия, семья, числа, дом. В финале Пипока улетает с группой «Maré Alta». */

const p = (name: string) => pic(`pt/rio/${name}`);
const BIA = "Bia";

const rio1: Lesson = {
  id: "pt-a1-rio-1",
  level: "A1",
  cityId: "pt-rio",
  number: 1,
  title: "Oi! — Salut !",
  minutes: 6,
  goals: [
    "Saluer et dire bonjour",
    "Demander le nom de quelqu'un et dire le tien",
    "Dire « Enchanté ! »",
  ],
  vocabNote:
    "Oi est le « salut » brésilien de tous les jours — il convient à presque tout le monde. Bom dia, « bonjour », se dit jusqu'à midi. Le m final ne se prononce pas vraiment : la voyelle passe simplement par le nez, comme dans notre « an ».",
  vocab: [
    v("ptri1-1", "Oi!", "Salut !",
      "Murzik à l'aéroport, souriant, fait coucou de la patte.",
      p("l1-1"), "[oï]"),
    v("ptri1-2", "Bom dia!", "Bonjour ! (le matin)",
      "Soleil du matin sur la mer ; Murzik s'étire de tout son long.",
      p("l1-2"), "[bon dji-a]"),
    v("ptri1-3", "Qual é o seu nome?", "Comment tu t'appelles ?",
      "Une fille aux cheveux bouclés se penche vers Murzik, curieuse.",
      p("l1-3"), "[koual é o séou no-mi]"),
    v("ptri1-4", "Meu nome é Murzik.", "Je m'appelle Murzik.",
      "Murzik pose la patte sur son cœur et dit fièrement son nom.",
      p("l1-4"), "[méou no-mi é mourzik]"),
    v("ptri1-5", "Eu sou a Bia.", "Moi, c'est Bia.",
      "Bia, une étudiante joyeuse aux cheveux bouclés, se désigne du doigt.",
      p("l1-5"), "[éou sôu a bi-a]"),
    v("ptri1-6", "Muito prazer!", "Enchanté !",
      "Murzik et Bia se serrent la patte et la main.",
      p("l1-6"), "[mouintou prazèr]"),
    v("ptri1-7", "Bem-vindo!", "Bienvenue !",
      "Bia ouvre grand les bras ; derrière elle, les montagnes et la mer de Rio.",
      p("l1-7"), "[ben-vindou]"),
  ],
  letters: [
    letter("A a", "comme notre « a » ; ã avec le tilde — un « a » nasal, comme dans « enfant »", "Bia", "Bia"),
    letter("B b", "comme notre « b »", "Bom dia!", "Bonjour !"),
    letter("C c", "devant e, i — « s » ; sinon « k »", "Copacabana", "Copacabana",
      "Copacabana avec un « k », mais cinco (« cinq ») avec un « s » : [sinkou]. Bonne nouvelle : c'est exactement la règle française !"),
    letter("D d", "comme « d », mais devant le son [i] — « dj »", "Bom dia!", "Bonjour !",
      "dia se dit [dji-a], pas « di-a »."),
    letter("E e", "« é » ou « è » ; en fin de mot — presque « i »", "nome", "le nom",
      "nome se dit [no-mi]."),
  ],
  dialogue: {
    title: "À l'aéroport",
    note:
      "Vovó veut dire « mamie » — un mot affectueux. Querida, c'est « ma chère » (à une fille ou une femme). Les Brésiliens mettent souvent un petit mot devant les prénoms : a Bia, o Pipoca — comme un « le/la » affectueux.",
    lines: [
      line("bia", "Vovó! Oi!", "Mamie ! Salut !"),
      line("lucia", "Bia, minha querida! Bom dia!", "Bia, ma chérie ! Bonjour !"),
      line("bia", "E quem é esse?", "Et lui, c'est qui ?"),
      line("murzik", "Oi! Meu nome é Murzik.", "Salut ! Je m'appelle Murzik."),
      line("bia", "Bem-vindo, Murzik! Eu sou a Bia. Muito prazer!", "Bienvenue, Murzik ! Moi, c'est Bia. Enchantée !"),
      line("murzik", "Muito prazer!", "Enchanté !"),
      line("pipoca", "Bom dia, Murzik! Bom dia!", "Bonjour, Murzik ! Bonjour !"),
      line("bia", "E esse é o Pipoca!", "Et voilà Pipoca !"),
    ],
    gist: choice("ptri1-d1", "Qui accueille Murzik et Dona Lúcia ?", [
      ["Sa petite-fille, Bia.", true],
      ["Un chauffeur de taxi.", false],
      ["Des musiciens.", false],
    ]),
  },
  grammar: [
    g(
      "Eu sou — « je suis »",
      [
        "En français, on dit simplement « Moi, c'est Bia ». En portugais, il faut le verbe « être » : Eu sou a Bia. Sans sou, la phrase n'est pas correcte.",
        "Devant le prénom, on entend souvent l'article : a Bia (pour une fille), o Murzik (pour un garçon). C'est presque notre « la/le » — ne traduis pas, prends juste l'habitude de l'entendre.",
      ],
      [
        ["Eu sou o Murzik.", "Moi, c'est Murzik."],
        ["Eu sou a Bia.", "Moi, c'est Bia."],
      ],
    ),
  ],
  tasks: [
    choice("ptri1-t1", "Comment dit-on « Moi, c'est Bia » ?", [
      ["Eu sou a Bia.", true],
      ["Eu a Bia.", false],
      ["Eu é a Bia.", false],
    ], { skill: "grammar" }),
    listen("ptri1-t2", "Écoute. Qu'est-ce que ça veut dire ?", "Qual é o seu nome?", [
      ["Comment tu t'appelles ?", true],
      ["Comment ça va ?", false],
      ["C'est qui ?", false],
    ]),
    match("ptri1-t3", PAIRS, [
      ["Oi!", "Salut !"],
      ["Bom dia!", "Bonjour !"],
      ["Muito prazer!", "Enchanté !"],
      ["Bem-vindo!", "Bienvenue !"],
    ], { skill: "words" }),
    spell("ptri1-t4", "Épelle le prénom de la petite-fille de Dona Lúcia.", "Bia"),
    speak("ptri1-t5", "Oi! Qual é o seu nome?", "Oi! Meu nome é Alex.", "Salut ! Je m'appelle Alex.", {
      help: "Réponds à voix haute avec ton propre prénom.",
    }),
    script("ptri1-t6", "Termine le mini-dialogue.", [
      { speaker: BIA, text: "Oi! Eu sou a Bia. Qual é o seu nome?" },
      { speaker: YOU, answer: "Meu nome é Alex.", options: ["Meu nome é Alex.", "Muito prazer!", "Qual é o seu nome?"] },
      { speaker: BIA, text: "Muito prazer!" },
      { speaker: YOU, answer: "Muito prazer!", options: ["Muito prazer!", "Bem-vindo!", "Bom dia, Murzik!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hammock",
    itemName: "Hamac",
    itemNameRu: "Rede",
    ru: "Oba! Uma rede!",
    en: "Hourra ! Un hamac !",
    a11y:
      "Un hamac rayé — rouge, jaune et vert — est suspendu près de la fenêtre de la chambre de Murzik.",
    image: p("hammock"),
    steps: [
      "Bia montre sa chambre à Murzik.",
      "Un hamac rayé est suspendu près de la fenêtre.",
      "« Pra você descansar ! » — « Pour que tu puisses te reposer ! »",
      "Murzik grimpe dedans et se balance doucement.",
    ],
    bridge:
      "Le matin, Murzik est réveillé par l'odeur du café et le « Bom dia ! » tonitruant de Pipoca.",
  },
};

const rio2: Lesson = {
  id: "pt-a1-rio-2",
  level: "A1",
  cityId: "pt-rio",
  number: 2,
  title: "Tudo bem? — Comment ça va ?",
  minutes: 6,
  goals: [
    "Demander comment ça va et répondre",
    "Remercier et répondre à un « merci »",
    "S'excuser et demander le passage",
  ],
  vocabNote:
    "Tudo bem ? veut dire littéralement « Tout va bien ? ». C'est la question la plus fréquente au Brésil, et on y répond tout aussi court : Tudo bem !",
  vocab: [
    v("ptri2-1", "Tudo bem?", "Comment ça va ?",
      "La maman de Bia, une tasse de café à la main, regarde Murzik avec tendresse.",
      p("l2-1"), "[toudou ben]"),
    v("ptri2-2", "Tudo ótimo!", "Ça va super !",
      "Murzik saute de joie, les deux pattes en l'air.",
      p("l2-2"), "[toudou otchimou]"),
    v("ptri2-3", "Mais ou menos.", "Comme ci, comme ça.",
      "Un garçon ensommeillé en pyjama balance la main : comme ci, comme ça.",
      p("l2-3"), "[maïss ou mé-noss]"),
    v("ptri2-4", "Obrigado! / Obrigada!", "Merci ! (un homme / une femme)",
      "Murzik presse ses pattes contre son cœur, reconnaissant ; Bia sourit à côté.",
      p("l2-4"), "[obrigadou / obrigada]"),
    v("ptri2-5", "De nada.", "De rien.",
      "Bia fait un petit geste modeste de la main : de rien.",
      p("l2-5"), "[dji nada]"),
    v("ptri2-6", "Desculpa!", "Pardon !",
      "Murzik a renversé un verre de jus et plaque les oreilles, penaud.",
      p("l2-6"), "[deskoulpa]"),
    v("ptri2-7", "Com licença.", "Excusez-moi. (pour passer)",
      "Murzik se faufile poliment entre les gens dans un couloir étroit.",
      p("l2-7"), "[kon lissénssa]"),
  ],
  letters: [
    letter("F f", "comme notre « f »", "café", "le café"),
    letter("G g", "devant e, i — « j » comme dans « gens » ; sinon « gu » comme dans « gare »", "obrigado", "merci",
      "gente (« les gens ») se dit [jéntchi], mais obrigado garde le « gu ». Là encore, la même règle qu'en français !"),
    letter("H h", "ne se prononce pas, comme chez nous", "hoje", "aujourd'hui",
      "hoje se dit [o-ji]."),
    letter("I i", "comme notre « i »", "licença", "la permission"),
    letter("J j", "comme « j » dans « je »", "já", "déjà"),
  ],
  dialogue: {
    title: "Le matin dans la cuisine",
    note:
      "Tudo bem veut dire aussi « pas grave ». Você, c'est « tu » et « vous » à la fois — au Brésil, on l'utilise avec presque tout le monde. Já veut dire « déjà », hoje « aujourd'hui ».",
    lines: [
      line("claudia", "Bom dia, Murzik! Tudo bem?", "Bonjour, Murzik ! Comment ça va ?"),
      line("murzik", "Tudo ótimo, obrigado! E você?", "Ça va super, merci ! Et toi ?"),
      line("claudia", "Tudo bem! O café já está pronto.", "Ça va ! Le café est prêt."),
      line("claudia", "Léo! Tudo bem?", "Léo ! Comment ça va ?"),
      line("leo", "Mais ou menos… Hoje tem escola.", "Comme ci, comme ça… Aujourd'hui, j'ai école."),
      line("murzik", "Ops! Desculpa!", "Oups ! Pardon !"),
      line("leo", "Tudo bem!", "Pas grave !"),
      line("pipoca", "Com licença! Com licença!", "Excusez-moi ! Excusez-moi !"),
    ],
    gist: choice("ptri2-d1", "Comment va Léo ?", [
      ["Comme ci, comme ça : il a école aujourd'hui.", true],
      ["Très bien.", false],
      ["Il est malade.", false],
    ]),
  },
  grammar: [
    g(
      "Obrigado ou obrigada ?",
      [
        "En portugais, « merci » change selon celui qui parle : un homme dit obrigado, une femme obrigada. Le mot veut dire littéralement « obligé(e) » — il s'accorde avec toi, comme « enchanté / enchantée » en français.",
        "Murzik dit obrigado, Bia dit obrigada. Choisis la forme qui te correspond : dans les exercices, les deux sont acceptées.",
      ],
      [
        ["Obrigado, Bia!", "Merci, Bia ! (Murzik parle)"],
        ["Obrigada, Murzik! — De nada.", "Merci, Murzik ! (Bia parle) — De rien."],
      ],
    ),
  ],
  tasks: [
    listen("ptri2-t1", "Écoute. Comment va la personne ?", "Mais ou menos.", [
      ["Comme ci, comme ça.", true],
      ["Ça va super.", false],
      ["Mal.", false],
    ]),
    match("ptri2-t2", PAIRS, [
      ["Tudo bem?", "Comment ça va ?"],
      ["De nada.", "De rien."],
      ["Desculpa!", "Pardon !"],
      ["Com licença.", "Excusez-moi."],
    ], { skill: "words" }),
    choice("ptri2-t3", "Bia remercie Murzik. Que dit-elle ?", [
      ["Obrigada!", true],
      ["Obrigado!", false],
      ["De nada!", false],
    ], { skill: "grammar" }),
    missing("ptri2-t4", "Quelle lettre manque ? (« merci »)", "obri", "ado", "g", ["g", "j", "r"]),
    speak("ptri2-t5", "Bom dia! Tudo bem?", "Tudo ótimo, obrigado! E você?", "Ça va super, merci ! Et toi ?", {
      help: "Réponds à voix haute et pose la question en retour. Dis obrigado ou obrigada, comme tu veux.",
    }),
    choice("ptri2-t6", "On te dit : Muito prazer ! Que réponds-tu ?", [
      ["Muito prazer!", true],
      ["Qual é o seu nome?", false],
      ["De nada.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fan",
    itemName: "Ventilateur",
    itemNameRu: "Ventilador",
    ru: "Oba! Um ventilador!",
    en: "Hourra ! Un ventilateur !",
    a11y:
      "Un petit ventilateur blanc trône sur la table de nuit. Son souffle fait voleter les moustaches de Murzik.",
    image: p("fan"),
    steps: [
      "Cláudia apporte un petit ventilateur.",
      "« No Rio faz calor ! » — « Il fait chaud à Rio ! »",
      "Murzik l'allume.",
      "Ouah ! Ses moustaches volent au vent.",
    ],
    bridge: "Le soir, Bia montre à Murzik les photos de famille.",
  },
};

const rio3: Lesson = {
  id: "pt-a1-rio-3",
  level: "A1",
  cityId: "pt-rio",
  number: 3,
  title: "A família — La famille",
  minutes: 7,
  goals: [
    "Nommer les membres de la famille",
    "Dire « mon » et « ma »",
    "Demander si quelqu'un a des frères et sœurs",
  ],
  vocabNote:
    "Irmãos veut dire « frères », mais aussi « frères et sœurs » ensemble. De même, pais peut vouloir dire « les parents ».",
  vocab: [
    v("ptri3-1", "Esta é a minha mãe.", "Voici ma maman.",
      "Bia montre une photo : une femme souriante en tablier.",
      p("l3-1"), "[ésta é a minia main]"),
    v("ptri3-2", "Este é o meu irmão.", "Voici mon frère.",
      "Sur la photo, un garçon en T-shirt, un ballon de foot sous le bras.",
      p("l3-2"), "[éstchi é o méou irmaoun]"),
    v("ptri3-3", "a minha avó", "ma grand-mère",
      "Sur la photo, Dona Lúcia jeune, en robe à fleurs.",
      p("l3-3"), "[a minia avo]"),
    v("ptri3-4", "o meu pai", "mon papa",
      "Sur la photo, un homme moustachu en bleu de travail.",
      p("l3-4"), "[o méou paï]"),
    v("ptri3-5", "Você tem irmãos?", "Tu as des frères et sœurs ?",
      "Bia regarde Murzik avec intérêt.",
      p("l3-5"), "[vossé ten irmaounss]"),
    v("ptri3-6", "Eu tenho uma irmã.", "J'ai une sœur.",
      "Murzik montre la photo d'une petite chatte rousse avec un pinceau.",
      p("l3-6"), "[éou téniou ouma irman]"),
    v("ptri3-7", "Que família grande!", "Quelle grande famille !",
      "Un mur couvert de photos de famille.",
      p("l3-7"), "[ki família grandji]"),
  ],
  letters: [
    letter("L l", "comme « l » ; en fin de mot — presque « ou »", "família", "la famille",
      "Brasil se dit [braziou]."),
    letter("M m", "comme « m » ; en fin de mot il ne se prononce pas — la voyelle passe par le nez", "mãe", "maman",
      "tem se dit [ten], avec un « e » nasal."),
    letter("N n", "comme « n »", "grande", "grand"),
    letter("O o", "« o » ouvert ou fermé ; en fin de mot — presque « ou »", "avó", "grand-mère",
      "obrigado se dit [obrigadou]."),
    letter("P p", "comme « p »", "pai", "papa"),
  ],
  dialogue: {
    title: "Les photos de famille",
    note:
      "Olha ! veut dire « Regarde ! ». Primo, c'est « cousin ». Lá veut dire « là-bas ».",
    lines: [
      line("bia", "Olha, Murzik! Esta é a minha mãe, a Cláudia.", "Regarde, Murzik ! Voici ma maman, Cláudia."),
      line("murzik", "E este?", "Et lui, c'est qui ?"),
      line("bia", "Este é o meu irmão, o Léo. E esta é a minha avó!", "Voici mon frère, Léo. Et voilà ma grand-mère !"),
      line("murzik", "E o seu pai?", "Et ton papa ?"),
      line("bia", "O meu pai está em São Paulo. Ele trabalha lá.", "Mon papa est à São Paulo. Il travaille là-bas."),
      line("bia", "Você tem irmãos, Murzik?", "Et toi, tu as des frères et sœurs, Murzik ?"),
      line("murzik", "Tenho! Eu tenho uma irmã, a Musya, e um primo, o Barsik.", "Oui ! J'ai une sœur, Musya, et un cousin, Barsik."),
      line("bia", "Que família grande!", "Quelle grande famille !"),
    ],
    gist: choice("ptri3-d1", "Où est le papa de Bia ?", [
      ["À São Paulo — il travaille là-bas.", true],
      ["À la maison, à Rio.", false],
      ["À Paris.", false],
    ]),
  },
  grammar: [
    g(
      "o et a : presque comme « le » et « la »",
      [
        "En portugais comme en français, chaque nom est masculin ou féminin, avec son petit article : o pour le masculin, a pour le féminin : o pai, a mãe. Facile ! Mais attention : le genre n'est pas toujours le même que chez nous — on dit a casa (« la maison », ça va), mais o quarto alors que « la chambre » est féminin.",
        "« Mon/ma » change aussi : meu avec le masculin, minha avec le féminin — o meu irmão, a minha irmã. Les Brésiliens gardent en général le o ou le a devant.",
      ],
      [
        ["o meu irmão", "mon frère"],
        ["a minha irmã", "ma sœur"],
      ],
    ),
  ],
  tasks: [
    choice("ptri3-t1", "Comment dit-on « ma maman » ?", [
      ["a minha mãe", true],
      ["o meu mãe", false],
      ["a meu mãe", false],
    ], { skill: "grammar" }),
    listen("ptri3-t2", "Écoute. Qui est-ce ?", "Este é o meu pai.", [
      ["Papa.", true],
      ["Frère.", false],
      ["Grand-mère.", false],
    ]),
    match("ptri3-t3", PAIRS, [
      ["o pai", "papa"],
      ["a mãe", "maman"],
      ["o irmão", "le frère"],
      ["a avó", "grand-mère"],
    ], { skill: "words" }),
    spell("ptri3-t4", "Épelle le mot « maman ».", "mãe"),
    speak("ptri3-t5", "Você tem irmãos?", "Tenho. Eu tenho um irmão e uma irmã.", "Oui. J'ai un frère et une sœur.", {
      help: "Réponds à voix haute en parlant de ta famille.",
    }),
    choice("ptri3-t6", "On te dit : Obrigada ! Que réponds-tu ?", [
      ["De nada.", true],
      ["Desculpa!", false],
      ["Tudo bem?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "frame",
    itemName: "Cadre photo",
    itemNameRu: "Porta-retrato",
    ru: "Oba! Um porta-retrato!",
    en: "Hourra ! Un cadre photo !",
    a11y:
      "Sur l'étagère, un cadre en bois avec la photo de toute la famille de Dona Lúcia — et Murzik au milieu.",
    image: p("frame"),
    steps: [
      "Bia imprime une nouvelle photo : toute la famille — et Murzik.",
      "« Agora você é da família ! » — « Maintenant, tu fais partie de la famille ! »",
      "Murzik met la photo dans le cadre.",
      "Le cadre rejoint l'étagère.",
    ],
    bridge: "L'après-midi, Murzik sort dans la rue. Il fait chaud et il a très soif.",
  },
};

const rio4: Lesson = {
  id: "pt-a1-rio-4",
  level: "A1",
  cityId: "pt-rio",
  number: 4,
  title: "De onde você é? — Tu viens d'où ?",
  minutes: 7,
  goals: [
    "Dire d'où tu viens et où tu habites",
    "Dire que tu ne comprends pas",
    "Demander de parler plus lentement",
  ],
  vocabNote:
    "Moro veut dire « j'habite », falo « je parle » : la terminaison -o indique déjà « je ». C'est pour ça que les Brésiliens laissent souvent tomber eu.",
  vocab: [
    v("ptri4-1", "De onde você é?", "Tu viens d'où ?",
      "Un vendeur de jus derrière un comptoir plein de fruits regarde Murzik, intrigué.",
      p("l4-1"), "[dji ondji vossé é]"),
    v("ptri4-2", "Eu sou da Rússia.", "Je viens de Russie.",
      "Murzik désigne un petit globe terrestre.",
      p("l4-2"), "[éou sôu da houssi-a]"),
    v("ptri4-3", "Eu moro em Paris.", "J'habite à Paris.",
      "Murzik montre une carte postale de la tour Eiffel.",
      p("l4-3"), "[éou morou en pariss]"),
    v("ptri4-4", "Você fala português?", "Tu parles portugais ?",
      "Le vendeur hausse les sourcils, surpris.",
      p("l4-4"), "[vossé fala portouguess]"),
    v("ptri4-5", "Falo um pouco.", "Je parle un peu.",
      "Murzik montre avec ses pattes : tout petit peu.",
      p("l4-5"), "[falou oun pokou]"),
    v("ptri4-6", "Não entendo.", "Je ne comprends pas.",
      "Murzik se gratte derrière l'oreille, perplexe ; un point d'interrogation flotte au-dessus de lui.",
      p("l4-6"), "[naoun entendou]"),
    v("ptri4-7", "Mais devagar, por favor.", "Plus lentement, s'il vous plaît.",
      "Murzik fait doucement signe « moins vite ». Une tortue passe en rampant.",
      p("l4-7"), "[maïss djivagar, por favor]"),
  ],
  letters: [
    letter("Q q", "qu devant e, i — « k » ; sinon « kou »", "quer", "tu veux",
      "quer se dit [kèr], mais qual se dit [koual]."),
    letter("R r", "en début de mot, et rr — un « r » grasseyé comme le nôtre ! ; entre deux voyelles, un petit « r » battu", "Rússia", "la Russie",
      "Rio se dit [ri-ou] avec notre r français — pas besoin de le rouler !"),
    letter("S s", "comme « s » ; entre deux voyelles — « z », comme chez nous", "casa", "la maison",
      "casa se dit [kaza]."),
    letter("T t", "comme « t », mais devant le son [i] — « tch »", "ótimo", "super",
      "ótimo se dit [otchimou], noite [noïtchi]."),
  ],
  dialogue: {
    title: "Au kiosque à jus",
    note:
      "Que legal ! veut dire « Trop cool ! » — une expression très brésilienne. Mas veut dire « mais ». Claro ! — « Bien sûr ! »",
    lines: [
      line("seller", "Bom dia! Você quer um suco?", "Bonjour ! Tu veux un jus ?"),
      line("murzik", "Sim, obrigado! Um suco de manga.", "Oui, merci ! Un jus de mangue."),
      line("seller", "De onde você é?", "Tu viens d'où ?"),
      line("murzik", "Eu sou da Rússia, mas moro em Paris.", "Je viens de Russie, mais j'habite à Paris."),
      line("seller", "Que legal! Você fala português muito bem!", "Trop cool ! Tu parles très bien portugais !"),
      line("murzik", "Falo um pouco… Desculpa, não entendo tudo. Mais devagar, por favor.", "Un peu… Pardon, je ne comprends pas tout. Plus lentement, s'il vous plaît."),
      line("seller", "Claro! O seu… suco… de… manga!", "Bien sûr ! Ton… jus… de… mangue !"),
    ],
    gist: choice("ptri4-d1", "Que commande Murzik ?", [
      ["Un jus de mangue.", true],
      ["Un café.", false],
      ["De l'eau.", false],
    ]),
  },
  grammar: [
    g(
      "D'où : de + article — comme « du » et « de la »",
      [
        "« De » se dit de. Devant le nom d'un pays, on met en général l'article, et les deux fusionnent — exactement comme nos « du » et « de la » : de + a = da, de + o = do. Eu sou da Rússia (a Rússia), Eu sou do Brasil (o Brasil). Devant une ville, en général pas d'article : Eu sou de São Paulo.",
        "« Ne pas », c'est não devant le verbe : Não entendo. — Je ne comprends pas. Plus simple qu'en français : un seul mot, pas besoin de « pas ».",
      ],
      [
        ["Eu sou do Brasil.", "Je viens du Brésil."],
        ["Eu não falo inglês.", "Je ne parle pas anglais."],
      ],
    ),
  ],
  tasks: [
    choice("ptri4-t1", "Comment dit-on « Je viens du Brésil » ? (o Brasil)", [
      ["Eu sou do Brasil.", true],
      ["Eu sou da Brasil.", false],
      ["Eu sou o Brasil.", false],
    ], { skill: "grammar" }),
    listen("ptri4-t2", "Écoute. Que demande la personne ?", "Mais devagar, por favor.", [
      ["De parler plus lentement.", true],
      ["De répéter.", false],
      ["Un jus de mangue.", false],
    ]),
    match("ptri4-t3", PAIRS, [
      ["Não entendo.", "Je ne comprends pas."],
      ["Falo um pouco.", "Je parle un peu."],
      ["De onde você é?", "Tu viens d'où ?"],
      ["Eu moro em Paris.", "J'habite à Paris."],
    ], { skill: "words" }),
    missing("ptri4-t4", "Quelle lettre manque ? (« Russie »)", "Rú", "sia", "s", ["s", "z", "c"]),
    speak("ptri4-t5", "De onde você é?", "Eu sou da Rússia. Eu moro em Paris.", "Je viens de Russie. J'habite à Paris. (Dis ton pays et ta ville à toi.)", {
      help: "Réponds à voix haute : d'où tu viens et où tu habites.",
    }),
    choice("ptri4-t6", "Comment dit-on « Pardon ! » ?", [
      ["Desculpa!", true],
      ["De nada.", false],
      ["Tudo ótimo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "flipflops",
    itemName: "Tongs",
    itemNameRu: "Chinelos",
    ru: "Oba! Chinelos!",
    en: "Hourra ! Des tongs !",
    a11y:
      "De minuscules tongs vertes et jaunes attendent près de la porte — juste à la taille des pattes de Murzik.",
    image: p("flipflops"),
    steps: [
      "Le vendeur de jus rit et sort quelque chose de sous le comptoir.",
      "« No Rio todo mundo usa chinelo ! » — « À Rio, tout le monde porte des tongs ! »",
      "Une paire de tongs minuscules.",
      "Murzik les pose près de la porte.",
    ],
    bridge: "Le soir, Léo regarde le foot et apprend à Murzik à compter — en buts.",
  },
};

const rio5: Lesson = {
  id: "pt-a1-rio-5",
  level: "A1",
  cityId: "pt-rio",
  number: 5,
  title: "Os números — Les nombres de 0 à 10",
  minutes: 7,
  goals: [
    "Compter de zéro à dix",
    "Demander « Combien ? »",
    "Dire ton âge",
  ],
  vocabNote:
    "Pour dicter un numéro de téléphone, les Brésiliens disent souvent les chiffres un par un, et le six devient meia [méïa] — « la moitié » (d'une douzaine), pour ne pas confondre seis et três.",
  vocab: [
    v("ptri5-1", "um, dois, três", "un, deux, trois",
      "Trois ballons de foot sur l'herbe.",
      p("l5-1"), "[oun, doïss, tréss]"),
    v("ptri5-2", "quatro, cinco, seis", "quatre, cinq, six",
      "Six noix de coco en rang sur l'étal.",
      p("l5-2"), "[kouatrou, sinkou, seïss]"),
    v("ptri5-3", "sete, oito", "sept, huit",
      "Huit petits gâteaux dans une assiette.",
      p("l5-3"), "[sétchi, oïtou]"),
    v("ptri5-4", "nove, dez", "neuf, dix",
      "Murzik montre dix doigts sur ses deux pattes.",
      p("l5-4"), "[novi, dess]"),
    v("ptri5-5", "zero", "zéro",
      "Une assiette vide — plus un seul gâteau.",
      p("l5-5"), "[zérou]"),
    v("ptri5-6", "Quantos anos você tem?", "Quel âge as-tu ?",
      "Léo regarde Murzik avec curiosité.",
      p("l5-6"), "[kouantouss anouss vossé ten]"),
    v("ptri5-7", "Eu tenho seis anos.", "J'ai six ans.",
      "Murzik montre fièrement six doigts.",
      p("l5-7"), "[éou téniou seïss anouss]"),
  ],
  letters: [
    letter("U u", "comme « ou »", "um", "un"),
    letter("V v", "comme « v »", "nove", "neuf"),
    letter("X x", "le plus souvent — « ch » comme dans « chat »", "xícara", "la tasse",
      "xícara se dit [chikara]."),
    letter("Z z", "comme « z » ; en fin de mot — « ss »", "dez", "dix",
      "dez se dit [dess]."),
    letter("nh", "comme « gn » dans « agneau »", "tenho", "j'ai",
      "tenho se dit [téniou]. Exactement notre gn !"),
  ],
  dialogue: {
    title: "Le foot à la télé",
    note:
      "Gol veut dire « but », time [tchimi] « équipe ». É hora de dormir, c'est « au lit ».",
    lines: [
      line("leo", "Gol! Um, dois, três… Quatro gols!", "But ! Un, deux, trois… Quatre buts !"),
      line("murzik", "Quantos gols?", "Combien de buts ?"),
      line("leo", "Quatro! E o outro time: zero!", "Quatre ! Et l'autre équipe : zéro !"),
      line("leo", "Murzik, quantos anos você tem?", "Murzik, quel âge as-tu ?"),
      line("murzik", "Eu tenho seis anos. E você?", "J'ai six ans. Et toi ?"),
      line("leo", "Eu tenho dez anos!", "Moi, j'ai dix ans !"),
      line("claudia", "Léo, é hora de dormir!", "Léo, au lit !"),
    ],
    gist: choice("ptri5-d1", "Quel est le score du match ?", [
      ["Quatre - zéro.", true],
      ["Trois - un.", false],
      ["Zéro - zéro.", false],
    ]),
  },
  grammar: [
    g(
      "L'âge avec ter — comme notre « avoir »",
      [
        "Bonne nouvelle : l'âge se dit avec ter, « avoir », exactement comme en français : Eu tenho seis anos — « J'ai six ans ». C'est Eu sou seis anos (« je suis six ans ») qui serait une erreur.",
        "« Un » et « deux » changent selon le genre : um gol, uma irmã ; dois irmãos, duas irmãs. Un peu comme notre « un/une ».",
      ],
      [
        ["Eu tenho dez anos.", "J'ai dix ans."],
        ["uma irmã, duas irmãs", "une sœur, deux sœurs"],
      ],
    ),
  ],
  tasks: [
    listen("ptri5-t1", "Écoute. Quel nombre ?", "sete", [
      ["7", true],
      ["6", false],
      ["10", false],
    ]),
    match("ptri5-t2", PAIRS, [
      ["três", "3"],
      ["cinco", "5"],
      ["oito", "8"],
      ["dez", "10"],
    ], { skill: "words" }),
    choice("ptri5-t3", "Comment dit-on « J'ai dix ans » ?", [
      ["Eu tenho dez anos.", true],
      ["Eu sou dez anos.", false],
      ["Eu dez anos.", false],
    ], { skill: "grammar" }),
    spell("ptri5-t4", "Épelle le nombre « six ».", "seis"),
    speak("ptri5-t5", "Quantos anos você tem?", "Eu tenho dez anos.", "J'ai dix ans. (Dis ton âge à toi.)", {
      help: "Réponds à voix haute avec ton âge.",
    }),
    choice("ptri5-t6", "Comment demande-t-on « Tu viens d'où ? »", [
      ["De onde você é?", true],
      ["Quantos anos você tem?", false],
      ["Tudo bem?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ball",
    itemName: "Ballon de foot",
    itemNameRu: "Bola",
    ru: "Oba! Uma bola!",
    en: "Hourra ! Un ballon !",
    a11y:
      "Sous le hamac repose un vieux ballon de foot usé, noir et blanc.",
    image: p("ball"),
    steps: [
      "Léo apporte son vieux ballon.",
      "« Pra você, Murzik! Amanhã a gente joga ! » — « Pour toi, Murzik ! Demain, on joue ! »",
      "Murzik fait rouler le ballon dans la chambre.",
      "Puis le cache sous le hamac.",
    ],
    bridge: "Le matin, Dona Lúcia fait visiter toute la maison à Murzik.",
  },
};

const rio6: Lesson = {
  id: "pt-a1-rio-6",
  level: "A1",
  cityId: "pt-rio",
  number: 6,
  title: "A casa — La maison",
  minutes: 7,
  goals: [
    "Nommer les pièces de la maison",
    "Dire « il y a… »",
    "Décrire : grand, petit, beau",
  ],
  vocabNote:
    "Aqui veut dire « ici » et ali « là-bas ». Apprends chaque mot nouveau avec son o ou son a — c'est comme ça que tu sauras s'il est masculin ou féminin.",
  vocab: [
    v("ptri6-1", "Aqui é a cozinha.", "Ici, c'est la cuisine.",
      "Une cuisine lumineuse aux carreaux bleus, avec une cafetière sur le feu.",
      p("l6-1"), "[aki é a kozinia]"),
    v("ptri6-2", "O banheiro é ali.", "La salle de bain est là-bas.",
      "Dona Lúcia désigne une porte au bout du couloir.",
      p("l6-2"), "[o banéïrou é ali]"),
    v("ptri6-3", "a sala", "le salon",
      "Un salon avec un canapé, une guitare au mur et un vieux tourne-disque.",
      p("l6-3"), "[a sala]"),
    v("ptri6-4", "O quarto é pequeno.", "La chambre est petite.",
      "Une petite chambre avec un hamac près de la fenêtre.",
      p("l6-4"), "[o kouartou é pikénou]"),
    v("ptri6-5", "Tem uma varanda!", "Il y a un balcon !",
      "Murzik court sur un balcon plein de fleurs.",
      p("l6-5"), "[ten ouma varanda]"),
    v("ptri6-6", "Que bonito!", "Comme c'est beau !",
      "Du balcon, on voit la mer et les montagnes vertes.",
      p("l6-6"), "[ki bonitou]"),
    v("ptri6-7", "Fique à vontade.", "Fais comme chez toi.",
      "Dona Lúcia ouvre les bras, accueillante.",
      p("l6-7"), "[fiki a vontadji]"),
  ],
  letters: [
    letter("ão", "un « aoun » nasal, un peu comme notre « on »", "não", "non, ne… pas",
      "não se dit [naoun], irmão [irmaoun]."),
    letter("ç", "toujours « ss » — exactement comme notre ç français !", "licença", "la permission"),
    letter("lh", "un « l » mouillé, comme dans « œil »", "olha", "regarde",
      "olha se dit [olia]."),
    letter("á é ó", "l'accent marque la syllabe accentuée", "avó", "grand-mère"),
    letter("ê ô", "des « é » et « ô » fermés, eux aussi accentués", "você", "tu, vous"),
  ],
  dialogue: {
    title: "La maison de Santa Teresa",
    note:
      "Santa Teresa est un vieux quartier de Rio, perché sur une colline. Lá em cima veut dire « là-haut ». On voit la statue du Christ Rédempteur de presque partout.",
    lines: [
      line("lucia", "Murzik, esta é a minha casa. Fique à vontade!", "Murzik, voici ma maison. Fais comme chez toi !"),
      line("murzik", "Obrigado, Dona Lúcia!", "Merci, Dona Lúcia !"),
      line("lucia", "Aqui é a sala. E aqui é a cozinha.", "Ici, le salon. Et ici, la cuisine."),
      line("murzik", "E o banheiro?", "Et la salle de bain ?"),
      line("lucia", "O banheiro é ali. E este é o seu quarto. É pequeno…", "La salle de bain est là-bas. Et voici ta chambre. Elle est petite…"),
      line("murzik", "Tem uma varanda! Que bonito!", "Il y a un balcon ! Comme c'est beau !"),
      line("lucia", "Olha o Cristo lá em cima!", "Regarde — le Christ Rédempteur, là-haut !"),
    ],
    gist: choice("ptri6-d1", "Qu'est-ce que Murzik préfère ?", [
      ["Le balcon avec la vue.", true],
      ["La grande cuisine.", false],
      ["La salle de bain.", false],
    ]),
  },
  grammar: [
    g(
      "Tem — « il y a » ; l'adjectif après le nom",
      [
        "Pour dire « il y a… », les Brésiliens disent tem : Tem uma varanda. — Il y a un balcon. C'est le même verbe que dans Eu tenho, « j'ai ».",
        "L'adjectif se place en général après le nom, comme souvent en français, et s'accorde avec lui : o quarto pequeno, a casa pequena. Attention au genre : o quarto alors que « la chambre » est féminin chez nous !",
      ],
      [
        ["Tem uma varanda.", "Il y a un balcon."],
        ["a casa pequena, o quarto pequeno", "la petite maison, la petite chambre"],
      ],
    ),
  ],
  tasks: [
    choice("ptri6-t1", "Comment dit-on « la petite maison » ? (a casa)", [
      ["a casa pequena", true],
      ["a casa pequeno", false],
      ["o casa pequena", false],
    ], { skill: "grammar" }),
    listen("ptri6-t2", "Écoute. Où est la salle de bain ?", "O banheiro é ali.", [
      ["Là-bas.", true],
      ["Dans la cuisine.", false],
      ["Il n'y en a pas.", false],
    ]),
    match("ptri6-t3", PAIRS, [
      ["a cozinha", "la cuisine"],
      ["o quarto", "la chambre"],
      ["a sala", "le salon"],
      ["a varanda", "le balcon"],
    ], { skill: "words" }),
    missing("ptri6-t4", "Quelles lettres manquent ? (« regarde ! »)", "O", "a!", "lh", ["lh", "l", "nh"]),
    speak("ptri6-t5", "Esta é a minha casa. Fique à vontade!", "Obrigado! Que bonito!", "Merci ! Comme c'est beau !", {
      help: "Réponds à voix haute — obrigado ou obrigada, comme tu veux.",
    }),
    choice("ptri6-t6", "Comment demande-t-on « Quel âge as-tu ? »", [
      ["Quantos anos você tem?", true],
      ["Qual é o seu nome?", false],
      ["De onde você é?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fern",
    itemName: "Fougère en pot",
    itemNameRu: "Samambaia",
    ru: "Oba! Uma samambaia!",
    en: "Hourra ! Une fougère !",
    a11y:
      "Sur le balcon, une fougère luxuriante verdit dans un pot en terre cuite.",
    image: p("fern"),
    steps: [
      "Dona Lúcia offre à Murzik une fougère de son balcon.",
      "« Ela gosta de sol ! » — « Elle adore le soleil ! »",
      "Murzik pose le pot sur son balcon.",
      "Et l'arrose avec un petit arrosoir.",
    ],
    bridge: "Le soir, toute la famille va à un concert sur la plage de Copacabana.",
  },
};

const rio7: Lesson = {
  id: "pt-a1-rio-7",
  level: "A1",
  cityId: "pt-rio",
  number: 7,
  title: "Tchau! — Au revoir !",
  minutes: 8,
  goals: [
    "Saluer l'après-midi et le soir",
    "Dire au revoir",
    "Revoir tous les mots de Rio",
  ],
  vocabNote:
    "Tchau est le « ciao » brésilien, venu de l'italien. Cadê ? est le « où est… ? » familier : Cadê o Pipoca ? = Onde está o Pipoca ?",
  vocab: [
    v("ptri7-1", "Boa tarde!", "Bonjour ! (l'après-midi)",
      "Une après-midi ensoleillée à la plage, des gens sous les parasols.",
      p("l7-1"), "[bo-a tardji]"),
    v("ptri7-2", "Boa noite!", "Bonsoir ! / Bonne nuit !",
      "La plage le soir : les lumières de la scène et la lune sur la mer.",
      p("l7-2"), "[bo-a noïtchi]"),
    v("ptri7-3", "Tchau!", "Ciao !",
      "Murzik fait joyeusement signe de la patte.",
      p("l7-3"), "[tchaou]"),
    v("ptri7-4", "Até amanhã!", "À demain !",
      "Léo, en pyjama, fait signe depuis la porte.",
      p("l7-4"), "[até amanian]"),
    v("ptri7-5", "Cadê o Pipoca?", "Où est Pipoca ?",
      "Une cage vide, la porte ouverte. Murzik regarde autour de lui, inquiet.",
      p("l7-5"), "[kadé o pipoka]"),
    v("ptri7-6", "Ele sumiu!", "Il a disparu !",
      "Dona Lúcia lève les bras au ciel, désespérée.",
      p("l7-6"), "[éli soumiou]"),
    v("ptri7-7", "Vamos atrás dele!", "Allons à sa poursuite !",
      "Murzik et Bia courent dans une rue, la nuit.",
      p("l7-7"), "[vamouss atrass déli]"),
  ],
  letters: [
    letter("tch", "dans les mots empruntés — « tch »", "Tchau!", "Ciao !"),
    letter("ã", "un « a » nasal accentué", "amanhã", "demain",
      "amanhã se dit [amanian] — le ã se prononce presque comme notre « in »."),
  ],
  dialogue: {
    title: "Le concert de Copacabana",
    note:
      "Ônibus veut dire « bus ». Vai embora — « s'en va ». Estava veut dire « était » — on reparlera du passé plus tard.",
    lines: [
      line("bia", "Boa noite, Copacabana! Olha, Murzik — a banda Maré Alta!", "Bonsoir, Copacabana ! Regarde, Murzik — le groupe Maré Alta !"),
      line("zeca", "Boa noite, Rio! Vamos dançar!", "Bonsoir, Rio ! On danse !"),
      line("lucia", "Ai, que música linda!", "Ah, quelle belle musique !"),
      line("murzik", "Dona Lúcia… cadê o Pipoca?", "Dona Lúcia… où est Pipoca ?"),
      line("lucia", "Ele estava aqui! Ele sumiu!", "Il était juste là ! Il a disparu !"),
      line("bia", "Olha! Ele está no ônibus da banda!", "Regarde ! Il est dans le bus du groupe !"),
      line("murzik", "O ônibus vai embora! Vamos atrás dele!", "Le bus s'en va ! Allons à sa poursuite !"),
    ],
    gist: choice("ptri7-d1", "Où est Pipoca ?", [
      ["Dans le bus du groupe.", true],
      ["Sur la scène.", false],
      ["Sur l'épaule de Dona Lúcia.", false],
    ]),
  },
  grammar: [
    g(
      "Saluer et dire au revoir",
      [
        "Bom dia jusqu'à midi, boa tarde l'après-midi, boa noite le soir. Boa noite veut dire à la fois « bonsoir » et « bonne nuit ». Bom devient boa parce que tarde et noite sont féminins — bom comme « bon », boa comme « bonne » !",
        "Pour dire au revoir : Tchau ! (« ciao »), Até amanhã ! (« à demain »), Até logo ! (« à bientôt »).",
      ],
      [
        ["Boa tarde, Dona Lúcia!", "Bonjour, Dona Lúcia !"],
        ["Tchau, Léo! Até amanhã!", "Ciao, Léo ! À demain !"],
      ],
    ),
  ],
  tasks: [
    listen("ptri7-t1", "Examen d'écoute. Que s'est-il passé ?", "Cadê o Pipoca? Ele sumiu! Ele está no ônibus da banda!", [
      ["Pipoca a disparu — il est dans le bus du groupe.", true],
      ["Pipoca chante sur scène.", false],
      ["Le bus est en panne.", false],
    ]),
    choice("ptri7-t2", "C'est le soir. Comment salues-tu ?", [
      ["Boa noite!", true],
      ["Bom dia!", false],
      ["Boa tarde!", false],
    ], { skill: "words" }),
    fill("ptri7-t3", "Complète : « Bonjour ! » (l'après-midi)", "", "tarde!", "Boa", ["Boa", "Bom", "Bons"], { skill: "grammar" }),
    missing("ptri7-t4", "Quelles lettres manquent ? (« À demain ! »)", "Até ama", "ã!", "nh", ["nh", "lh", "n"]),
    speak("ptri7-t5", "Tchau! Até amanhã!", "Tchau! Até amanhã!", "Ciao ! À demain !", {
      help: "Dis au revoir à voix haute.",
    }),
    script("ptri7-t6", "Souviens-toi de tout Rio. Termine la conversation avec Bia.", [
      { speaker: BIA, text: "Oi! Tudo bem?" },
      { speaker: YOU, answer: "Tudo ótimo! E você?", options: ["Tudo ótimo! E você?", "De nada.", "Tchau!"] },
      { speaker: BIA, text: "Tudo bem! Esta é a minha casa. Fique à vontade!" },
      { speaker: YOU, answer: "Obrigado! Que bonito!", options: ["Obrigado! Que bonito!", "Desculpa!", "Mais ou menos."] },
      { speaker: BIA, text: "Tchau! Até amanhã!" },
      { speaker: YOU, answer: "Tchau!", options: ["Tchau!", "Bom dia!", "Muito prazer!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "album",
    itemName: "Album photo",
    itemNameRu: "Álbum",
    ru: "Oba! O álbum!",
    en: "Hourra ! Un album !",
    a11y:
      "Un album à la couverture verte, avec un perroquet dessiné. Sur la première page : une photo de Pipoca à Copacabana.",
    image: p("album"),
    steps: [
      "Dona Lúcia donne à Murzik un album vide.",
      "« Traga o Pipoca de volta — e muitas fotos ! » — « Ramène Pipoca — et plein de photos ! »",
      "Sur la première page, Murzik colle la dernière photo de Pipoca — à Copacabana.",
      "L'album rejoint la valise.",
    ],
    bridge:
      "Sur un poteau près de la plage est accrochée une affiche : « Turnê Maré Alta ». Première ville — Paraty.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre chez Dona Lúcia",
    nameRu: "O quarto do Murzik no Rio",
    image: p("home"),
    a11y:
      "Une petite chambre vide dans une vieille maison de Santa Teresa : volets bleus, et par la fenêtre les collines vertes de Rio. La valise de Murzik au milieu.",
  },
  keepsakeId: "album",
  welcomeRu: "Olá, Rio!",
  welcomeEn: "Bonjour, Rio !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Murzik et Dona Lúcia, avec la cage de Pipoca, arrivent dans le hall des arrivées. Une fille aux cheveux bouclés leur fait joyeusement signe.",
  departureImage: p("departure"),
  departureA11y:
    "La nuit, à la gare routière. Dona Lúcia, Cláudia et Léo font signe à Murzik et Bia, qui montent dans un bus.",
  finale: [
    {
      image: p("poster"),
      a11y:
        "La nuit, un lampadaire près de la plage. Dessus, une affiche colorée du groupe avec une carte du Brésil dessinée et des points pour les villes. Bia la lit à la lumière de son téléphone.",
      lines: [
        { en: "Bia lit l'affiche de la tournée :" },
        { ru: "Turnê Maré Alta: Paraty, São Paulo, Curitiba…", en: "Maré Alta en tournée : Paraty, São Paulo, Curitiba…" },
        { en: "L'anniversaire de Dona Lúcia approche. Il faut ramener Pipoca à temps !" },
      ],
    },
    {
      image: p("album"),
      a11y:
        "Murzik fait un dernier tour de sa chambre chez Dona Lúcia, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre de Rio." },
        { en: "Il emporte l'album avec la première photo de Pipoca." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Rio completo!", en: "Rio terminé !" },
        { en: "7 / 7 leçons" },
        { ru: "A primeira cidade!", en: "Ta première ville !" },
      ],
    },
    {
      image: p("departure"),
      a11y: "La famille de Dona Lúcia fait ses adieux près du bus.",
      lines: [
        { ru: "Tchau, Dona Lúcia!", en: "Ciao, Dona Lúcia !" },
        { ru: "Próxima parada: Paraty!", en: "Prochain arrêt : Paraty !" },
      ],
    },
    {
      image: p("bus"),
      a11y: "Un bus roule sur une route le long de la côte verdoyante.",
      lines: [{ ru: "Rio → Paraty", en: "Rio → Paraty" }],
    },
    {
      image: pic("pt/paraty/arrival"),
      a11y:
        "Murzik et Bia à Paraty : maisons blanches aux portes colorées, rue pavée de grosses pierres, barques au quai.",
      lines: [
        { ru: "Olá, Paraty!", en: "Bonjour, Paraty !" },
        { ru: "Uma cidade nova. Palavras novas. Amigos novos.", en: "Une nouvelle ville. De nouveaux mots. De nouveaux amis." },
      ],
    },
  ],
};

export const ptRioFr = {
  id: "pt-rio",
  name: "Rio de Janeiro",
  namePt: "Rio de Janeiro",
  lessons: [rio1, rio2, rio3, rio4, rio5, rio6, rio7],
  story,
};
