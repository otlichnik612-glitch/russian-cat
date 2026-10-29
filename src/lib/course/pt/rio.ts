import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, choice, fill, g, letter, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Рио-де-Жанейро · «Olá!» · Мурзик и дона Лусия прилетают в Рио, их встречает Биа. Буквы и звуки, приветствия, семья, числа, дом. В финале Пипока улетает с группой «Maré Alta». */

const p = (name: string) => pic(`pt/rio/${name}`);
const BIA = t("Биа", "Bia");

const rio1: Lesson = {
  id: "pt-a1-rio-1",
  level: "A1",
  cityId: "pt-rio",
  number: 1,
  title: t("Oi! — Привет!", "Oi! — Hi!"),
  minutes: 6,
  goals: [
    t("Поздороваться", "Say hello"),
    t("Спросить, как зовут, и назвать себя", "Ask someone's name and say yours"),
    t("Сказать «Очень приятно»", "Say “Nice to meet you”"),
  ],
  vocabNote: t(
    "Oi — самое частое бразильское «привет», подходит почти всем. Bom dia — «доброе утро», говорят до полудня. Буква m на конце не произносится полностью: гласная просто звучит в нос.",
    "Oi is the everyday Brazilian “hi” — you can say it to almost anyone. Bom dia means “good morning” and is used until noon. A final m isn't fully pronounced: the vowel just goes through the nose.",
  ),
  vocab: [
    v("ptri1-1", "Oi!", t("Привет!", "Hi!"),
      t("Мурзик в аэропорту улыбается и машет лапой.", "Murzik at the airport, smiling and waving a paw."),
      p("l1-1"), t("[ой]", "[oy]")),
    v("ptri1-2", "Bom dia!", t("Доброе утро! / Добрый день!", "Good morning!"),
      t("Утреннее солнце над морем, Мурзик сладко потягивается.", "Morning sun over the sea; Murzik has a big stretch."),
      p("l1-2"), t("[бом джи́а]", "[bom JEE-ah]")),
    v("ptri1-3", "Qual é o seu nome?", t("Как тебя зовут?", "What's your name?"),
      t("Девушка с кудрявыми волосами с любопытством наклоняется к Мурзику.", "A girl with curly hair leans towards Murzik with a curious smile."),
      p("l1-3"), t("[куа-лэ́ у се́у но́ми]", "[kwah-LEH oo SAY-oo NOH-mee]")),
    v("ptri1-4", "Meu nome é Murzik.", t("Меня зовут Мурзик.", "My name is Murzik."),
      t("Мурзик прикладывает лапу к груди и гордо называет своё имя.", "Murzik puts a paw on his chest and proudly says his name."),
      p("l1-4"), t("[ме́у но́ми э му́рзик]", "[MAY-oo NOH-mee EH MOOR-zeek]")),
    v("ptri1-5", "Eu sou a Bia.", t("Я Биа.", "I'm Bia."),
      t("Биа, весёлая студентка с кудрявыми волосами, показывает на себя.", "Bia, a cheerful student with curly hair, points to herself."),
      p("l1-5"), t("[е́у со́у а би́а]", "[AY-oo SOH ah BEE-ah]")),
    v("ptri1-6", "Muito prazer!", t("Очень приятно!", "Nice to meet you!"),
      t("Мурзик и Биа пожимают друг другу лапу и руку.", "Murzik and Bia shake paw and hand."),
      p("l1-6"), t("[му́йнту празэ́р]", "[MWEEN-too prah-ZEHR]")),
    v("ptri1-7", "Bem-vindo!", t("Добро пожаловать!", "Welcome!"),
      t("Биа широко раскидывает руки, за ней — горы и море Рио.", "Bia opens her arms wide; behind her, the hills and the sea of Rio."),
      p("l1-7"), t("[бейн-ви́нду]", "[bayn-VEEN-doo]")),
  ],
  letters: [
    letter("A a", t("как «а»; ã с волной — «а» в нос", "like a in “father”; ã with a tilde goes through the nose"), "Bia", t("Биа", "Bia")),
    letter("B b", t("как «б»", "like b"), "Bom dia!", t("Доброе утро!", "Good morning!")),
    letter("C c", t("перед e, i — «с», в остальных случаях — «к»", "before e and i — s; otherwise — k"), "Copacabana", t("Копакабана", "Copacabana"),
      t("Copacabana — с «к», а cinco («пять») — с «с»: [си́нку].", "Copacabana has a k sound, but cinco (five) starts with s: [SEEN-koo].")),
    letter("D d", t("как «д», но перед звуком [и] — «дж»", "like d, but before an [ee] sound it's like j in “jeans”"), "Bom dia!", t("Доброе утро!", "Good morning!"),
      t("dia — [джи́а], а не «диа».", "dia is [JEE-ah], not “dee-ah”.")),
    letter("E e", t("«э» или «е»; в конце слова — почти «и»", "“eh” or “ay”; at the end of a word it sounds like “ee”"), "nome", t("имя", "name"),
      t("nome — [но́ми].", "nome is [NOH-mee].")),
  ],
  dialogue: {
    title: t("В аэропорту", "At the airport"),
    note: t(
      "Vovó — «бабуля», ласковое «бабушка». Querida — «дорогая». Бразильцы часто ставят перед именем маленькое слово: a Bia, o Pipoca.",
      "Vovó means “grandma” — an affectionate word. Querida means “dear” (to a girl or woman). Brazilians often put a little word, “the”, before names: a Bia, o Pipoca.",
    ),
    lines: [
      line("bia", "Vovó! Oi!", t("Бабуля! Привет!", "Grandma! Hi!")),
      line("lucia", "Bia, minha querida! Bom dia!", t("Биа, моя дорогая! Доброе утро!", "Bia, my dear! Good morning!")),
      line("bia", "E quem é esse?", t("А это кто?", "And who's this?")),
      line("murzik", "Oi! Meu nome é Murzik.", t("Привет! Меня зовут Мурзик.", "Hi! My name is Murzik.")),
      line("bia", "Bem-vindo, Murzik! Eu sou a Bia. Muito prazer!", t("Добро пожаловать, Мурзик! Я Биа. Очень приятно!", "Welcome, Murzik! I'm Bia. Nice to meet you!")),
      line("murzik", "Muito prazer!", t("Очень приятно!", "Nice to meet you!")),
      line("pipoca", "Bom dia, Murzik! Bom dia!", t("Доброе утро, Мурзик! Доброе утро!", "Good morning, Murzik! Good morning!")),
      line("bia", "E esse é o Pipoca!", t("А это Пипока!", "And this is Pipoca!")),
    ],
    gist: choice("ptri1-d1", t("Кто встречает Мурзика и дону Лусию?", "Who meets Murzik and Dona Lúcia?"), [
      [t("Её внучка Биа.", "Her granddaughter, Bia."), true],
      [t("Таксист.", "A taxi driver."), false],
      [t("Музыканты.", "Some musicians."), false],
    ]),
  },
  grammar: [
    g(
      t("Eu sou — «я (есть)»", "Eu sou — “I am”"),
      [
        t(
          "В русском говорят просто «Я Биа». В португальском нужен глагол «быть»: Eu sou a Bia. Без sou фраза неправильная.",
          "Eu sou means “I am”: Eu sou a Bia — “I'm Bia”. There's no short form like I'm. You'll also hear just Sou a Bia: the verb itself shows who is speaking.",
        ),
        t(
          "А перед именем часто стоит артикль: a Bia (о девушке), o Murzik (о мальчике). На русский он не переводится — просто привыкай его слышать.",
          "Notice the little word before the name: a Bia, o Murzik. Brazilians often say “the” before the names of people they know. It isn't translated — it just sounds natural and friendly.",
        ),
      ],
      [
        ["Eu sou o Murzik.", t("Я Мурзик.", "I'm Murzik.")],
        ["Eu sou a Bia.", t("Я Биа.", "I'm Bia.")],
      ],
    ),
  ],
  tasks: [
    choice("ptri1-t1", t("Как сказать «Я Биа»?", "How do you say “I'm Bia”?"), [
      ["Eu sou a Bia.", true],
      ["Eu a Bia.", false],
      ["Eu é a Bia.", false],
    ], { skill: "grammar" }),
    listen("ptri1-t2", t("Послушай. Что это значит?", "Listen. What does it mean?"), "Qual é o seu nome?", [
      [t("Как тебя зовут?", "What's your name?"), true],
      [t("Как дела?", "How are you?"), false],
      [t("Кто это?", "Who's this?"), false],
    ]),
    match("ptri1-t3", PAIRS, [
      ["Oi!", t("Привет!", "Hi!")],
      ["Bom dia!", t("Доброе утро!", "Good morning!")],
      ["Muito prazer!", t("Очень приятно!", "Nice to meet you!")],
      ["Bem-vindo!", t("Добро пожаловать!", "Welcome!")],
    ], { skill: "words" }),
    spell("ptri1-t4", t("Собери из букв имя внучки доны Лусии.", "Spell the name of Dona Lúcia's granddaughter."), "Bia"),
    speak("ptri1-t5", "Oi! Qual é o seu nome?", "Oi! Meu nome é Alex.", t("Привет! Меня зовут Алекс.", "Hi! My name is Alex."), {
      help: t("Ответь вслух и назови своё имя.", "Answer aloud with your own name."),
    }),
    script("ptri1-t6", t("Закончи мини-диалог.", "Finish the mini-dialogue."), [
      { speaker: BIA, text: "Oi! Eu sou a Bia. Qual é o seu nome?" },
      { speaker: YOU, answer: "Meu nome é Alex.", options: ["Meu nome é Alex.", "Muito prazer!", "Qual é o seu nome?"] },
      { speaker: BIA, text: "Muito prazer!" },
      { speaker: YOU, answer: "Muito prazer!", options: ["Muito prazer!", "Bem-vindo!", "Bom dia, Murzik!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hammock",
    itemName: t("Гамак", "Hammock"),
    itemNameRu: "Rede",
    ru: "Oba! Uma rede!",
    en: t("Ура! Гамак!", "Hooray! A hammock!"),
    a11y: t(
      "У окна в комнате Мурзика висит полосатый гамак — красный, жёлтый и зелёный.",
      "A striped hammock — red, yellow and green — hangs by the window in Murzik's room.",
    ),
    image: p("hammock"),
    steps: [
      t("Биа показывает Мурзику его комнату.", "Bia shows Murzik his room."),
      t("У окна висит полосатый гамак.", "A striped hammock hangs by the window."),
      t("«Pra você descansar!» — «Чтобы ты отдыхал!»", "“Pra você descansar!” — “So you can rest!”"),
      t("Мурзик забирается в гамак и тихо качается.", "Murzik climbs in and sways gently."),
    ],
    bridge: t(
      "Утром Мурзика будит запах кофе и громкое «Bom dia!» Пипоки.",
      "In the morning Murzik wakes up to the smell of coffee and Pipoca's loud “Bom dia!”",
    ),
  },
};

const rio2: Lesson = {
  id: "pt-a1-rio-2",
  level: "A1",
  cityId: "pt-rio",
  number: 2,
  title: t("Tudo bem? — Как дела?", "Tudo bem? — How are you?"),
  minutes: 6,
  goals: [
    t("Спросить, как дела, и ответить", "Ask how someone is and answer"),
    t("Поблагодарить и ответить на «спасибо»", "Say thank you and answer it"),
    t("Извиниться и попросить пройти", "Say sorry and excuse me"),
  ],
  vocabNote: t(
    "Tudo bem? буквально значит «Всё хорошо?». Это самый частый вопрос в Бразилии, и отвечают на него тоже коротко: Tudo bem!",
    "Tudo bem? literally means “All good?”. It's the most common greeting in Brazil, and people usually answer just as briefly: Tudo bem!",
  ),
  vocab: [
    v("ptri2-1", "Tudo bem?", t("Как дела?", "How are you?"),
      t("Мама Бии с чашкой кофе ласково смотрит на Мурзика.", "Bia's mum, holding a cup of coffee, smiles kindly at Murzik."),
      p("l2-1"), t("[ту́ду бейн]", "[TOO-doo bayn]")),
    v("ptri2-2", "Tudo ótimo!", t("Всё отлично!", "Everything's great!"),
      t("Мурзик радостно подпрыгивает, подняв обе лапы.", "Murzik jumps for joy with both paws in the air."),
      p("l2-2"), t("[ту́ду о́чиму]", "[TOO-doo AW-chee-moo]")),
    v("ptri2-3", "Mais ou menos.", t("Так себе.", "So-so."),
      t("Сонный мальчик в пижаме покачивает рукой туда-сюда.", "A sleepy boy in pyjamas waggles his hand: so-so."),
      p("l2-3"), t("[майс оу ме́нус]", "[mice oh MAY-noos]")),
    v("ptri2-4", "Obrigado! / Obrigada!", t("Спасибо! (говорит мужчина / женщина)", "Thank you! (said by a man / by a woman)"),
      t("Мурзик благодарно прижимает лапы к груди, рядом улыбается Биа.", "Murzik presses his paws to his chest gratefully; Bia smiles beside him."),
      p("l2-4"), t("[обрига́ду / обрига́да]", "[oh-bree-GAH-doo / oh-bree-GAH-dah]")),
    v("ptri2-5", "De nada.", t("Не за что. / Пожалуйста.", "You're welcome."),
      t("Биа скромно машет рукой: не за что.", "Bia gives a modest little wave: no problem."),
      p("l2-5"), t("[джи на́да]", "[jee NAH-dah]")),
    v("ptri2-6", "Desculpa!", t("Извини!", "Sorry!"),
      t("Мурзик случайно задел стакан с соком и виновато прижал уши.", "Murzik has knocked a glass of juice and flattens his ears, embarrassed."),
      p("l2-6"), t("[джиску́упа]", "[jees-KOOL-pah]")),
    v("ptri2-7", "Com licença.", t("Разрешите пройти. / Простите.", "Excuse me (to get past)."),
      t("Мурзик вежливо протискивается мимо людей в узком коридоре.", "Murzik politely squeezes past people in a narrow hallway."),
      p("l2-7"), t("[кон лисэ́нса]", "[kohn lee-SEN-sah]")),
  ],
  letters: [
    letter("F f", t("как «ф»", "like f"), "café", t("кофе", "coffee")),
    letter("G g", t("перед e, i — «ж»; в остальных случаях — «г»", "before e and i — like s in “pleasure”; otherwise — g as in “go”"), "obrigado", t("спасибо", "thank you"),
      t("gente («люди») — [жэ́нчи], а obrigado — с твёрдым «г».", "gente (people) is [ZHEN-chee], but obrigado has a hard g.")),
    letter("H h", t("не читается", "silent"), "hoje", t("сегодня", "today"),
      t("hoje — [о́жи].", "hoje is [OH-zhee].")),
    letter("I i", t("как «и»", "like ee in “see”"), "licença", t("разрешение", "permission")),
    letter("J j", t("как «ж»", "like s in “pleasure”"), "já", t("уже", "already")),
  ],
  dialogue: {
    title: t("Утро на кухне", "Morning in the kitchen"),
    note: t(
      "Tudo bem значит ещё и «ничего страшного». Você — «ты» и «вы» одновременно. Já — «уже», hoje — «сегодня».",
      "Tudo bem also means “that's OK”. Você is the everyday word for “you”. Já means “already” and hoje means “today”.",
    ),
    lines: [
      line("claudia", "Bom dia, Murzik! Tudo bem?", t("Доброе утро, Мурзик! Как дела?", "Good morning, Murzik! How are you?")),
      line("murzik", "Tudo ótimo, obrigado! E você?", t("Всё отлично, спасибо! А у вас?", "Great, thank you! And you?")),
      line("claudia", "Tudo bem! O café já está pronto.", t("Всё хорошо! Кофе уже готов.", "Fine! The coffee's ready.")),
      line("claudia", "Léo! Tudo bem?", t("Лео! Как дела?", "Léo! How are you?")),
      line("leo", "Mais ou menos… Hoje tem escola.", t("Так себе… Сегодня в школу.", "So-so… I've got school today.")),
      line("murzik", "Ops! Desculpa!", t("Ой! Извини!", "Oops! Sorry!")),
      line("leo", "Tudo bem!", t("Ничего страшного!", "That's OK!")),
      line("pipoca", "Com licença! Com licença!", t("Разрешите! Разрешите!", "Excuse me! Excuse me!")),
    ],
    gist: choice("ptri2-d1", t("Как дела у Лео?", "How is Léo?"), [
      [t("Так себе: сегодня в школу.", "So-so: he has school today."), true],
      [t("Отлично.", "Great."), false],
      [t("Он заболел.", "He's ill."), false],
    ]),
  },
  grammar: [
    g(
      t("Obrigado или obrigada?", "Obrigado or obrigada?"),
      [
        t(
          "«Спасибо» в португальском зависит от того, кто говорит: мужчина говорит obrigado, женщина — obrigada. Это как «я рад» и «я рада» в русском.",
          "In Portuguese, “thank you” changes with the speaker: a man says obrigado, a woman says obrigada. It literally means “obliged”, so the word agrees with you.",
        ),
        t(
          "Мурзик говорит obrigado, Биа — obrigada. Выбирай форму, которая подходит тебе: в заданиях подходят обе.",
          "Many words that describe you work like this. Murzik says obrigado, Bia says obrigada. Use the one that fits you — both are accepted in the tasks.",
        ),
      ],
      [
        ["Obrigado, Bia!", t("Спасибо, Биа! (говорит Мурзик)", "Thank you, Bia! (Murzik speaking)")],
        ["Obrigada, Murzik! — De nada.", t("Спасибо, Мурзик! (говорит Биа) — Не за что.", "Thank you, Murzik! (Bia speaking) — You're welcome.")],
      ],
    ),
  ],
  tasks: [
    listen("ptri2-t1", t("Послушай. Как дела у говорящего?", "Listen. How is the speaker?"), "Mais ou menos.", [
      [t("Так себе.", "So-so."), true],
      [t("Всё отлично.", "Great."), false],
      [t("Плохо.", "Bad."), false],
    ]),
    match("ptri2-t2", PAIRS, [
      ["Tudo bem?", t("Как дела?", "How are you?")],
      ["De nada.", t("Не за что.", "You're welcome.")],
      ["Desculpa!", t("Извини!", "Sorry!")],
      ["Com licença.", t("Разрешите пройти.", "Excuse me.")],
    ], { skill: "words" }),
    choice("ptri2-t3", t("Биа благодарит Мурзика. Что она говорит?", "Bia thanks Murzik. What does she say?"), [
      ["Obrigada!", true],
      ["Obrigado!", false],
      ["De nada!", false],
    ], { skill: "grammar" }),
    missing("ptri2-t4", t("Какой буквы не хватает? («спасибо»)", "Which letter is missing? (“thank you”)"), "obri", "ado", "g", ["g", "j", "r"]),
    speak("ptri2-t5", "Bom dia! Tudo bem?", "Tudo ótimo, obrigado! E você?", t("Всё отлично, спасибо! А у тебя?", "Great, thanks! And you?"), {
      help: t("Ответь вслух и спроси в ответ. Можно сказать obrigado или obrigada.", "Answer aloud and ask back. Say obrigado or obrigada, whichever fits you."),
    }),
    choice("ptri2-t6", t("Тебе говорят: Muito prazer! Что ответить?", "Someone says Muito prazer! What do you answer?"), [
      ["Muito prazer!", true],
      ["Qual é o seu nome?", false],
      ["De nada.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fan",
    itemName: t("Вентилятор", "Fan"),
    itemNameRu: "Ventilador",
    ru: "Oba! Um ventilador!",
    en: t("Ура! Вентилятор!", "Hooray! A fan!"),
    a11y: t(
      "На тумбочке стоит маленький белый вентилятор. Ветерок раздувает Мурзику усы.",
      "A small white fan stands on the bedside table. Its breeze ruffles Murzik's whiskers.",
    ),
    image: p("fan"),
    steps: [
      t("Клаудия приносит маленький вентилятор.", "Cláudia brings a small fan."),
      t("«No Rio faz calor!» — «В Рио жарко!»", "“No Rio faz calor!” — “It's hot in Rio!”"),
      t("Мурзик включает его.", "Murzik switches it on."),
      t("Ух! Усы так и развеваются.", "Whoosh! His whiskers flutter."),
    ],
    bridge: t("Вечером Биа показывает Мурзику семейные фотографии.", "In the evening Bia shows Murzik the family photos."),
  },
};

const rio3: Lesson = {
  id: "pt-a1-rio-3",
  level: "A1",
  cityId: "pt-rio",
  number: 3,
  title: t("A família — Семья", "A família — Family"),
  minutes: 7,
  goals: [
    t("Назвать членов семьи", "Name family members"),
    t("Сказать «мой» и «моя»", "Say “my”"),
    t("Спросить, есть ли братья и сёстры", "Ask about brothers and sisters"),
  ],
  vocabNote: t(
    "Irmãos — это и «братья», и «братья и сёстры» вместе. Так же pais — «папы» и «родители».",
    "Irmãos means “brothers” but also “brothers and sisters” together. In the same way, pais can mean “parents”.",
  ),
  vocab: [
    v("ptri3-1", "Esta é a minha mãe.", t("Это моя мама.", "This is my mum."),
      t("Биа показывает фото: улыбающаяся женщина в фартуке.", "Bia points to a photo: a smiling woman in an apron."),
      p("l3-1"), t("[э́ста э а ми́нья ма́йн]", "[EHS-tah EH ah MEEN-yah MINE]")),
    v("ptri3-2", "Este é o meu irmão.", t("Это мой брат.", "This is my brother."),
      t("На фото мальчик в футболке с мячом под мышкой.", "In the photo, a boy in a T-shirt with a football under his arm."),
      p("l3-2"), t("[э́сти э у ме́у ирма́ун]", "[AYS-chee EH oo MAY-oo eer-MOWN]")),
    v("ptri3-3", "a minha avó", t("моя бабушка", "my grandma"),
      t("На фото молодая дона Лусия в цветастом платье.", "In the photo, a young Dona Lúcia in a flowery dress."),
      p("l3-3"), t("[а ми́нья аво́]", "[ah MEEN-yah ah-VAW]")),
    v("ptri3-4", "o meu pai", t("мой папа", "my dad"),
      t("На фото мужчина с усами в рабочем костюме.", "In the photo, a man with a moustache in a work suit."),
      p("l3-4"), t("[у ме́у пай]", "[oo MAY-oo pie]")),
    v("ptri3-5", "Você tem irmãos?", t("У тебя есть братья или сёстры?", "Do you have brothers or sisters?"),
      t("Биа с интересом смотрит на Мурзика.", "Bia looks at Murzik with interest."),
      p("l3-5"), t("[восэ́ тейн ирма́унс]", "[voh-SAY tayn eer-MOWNS]")),
    v("ptri3-6", "Eu tenho uma irmã.", t("У меня есть сестра.", "I have a sister."),
      t("Мурзик показывает фото маленькой рыжей кошечки с кисточкой.", "Murzik shows a photo of a little ginger kitten holding a paintbrush."),
      p("l3-6"), t("[е́у тэ́нью у́ма ирма́]", "[AY-oo TEN-yoo OO-mah eer-MAH]")),
    v("ptri3-7", "Que família grande!", t("Какая большая семья!", "What a big family!"),
      t("Стена, вся увешанная семейными фотографиями.", "A wall covered with family photos."),
      p("l3-7"), t("[ки фами́лия гра́нджи]", "[kee fah-MEE-lee-ah GRAHN-jee]")),
  ],
  letters: [
    letter("L l", t("как «л»; в конце слова — почти «у»", "like l; at the end of a word it sounds like “oo”"), "família", t("семья", "family"),
      t("Brasil — [брази́у].", "Brasil is [brah-ZEE-oo].")),
    letter("M m", t("как «м»; в конце слова не произносится — гласная звучит в нос", "like m; at the end of a word it isn't said — the vowel goes through the nose"), "mãe", t("мама", "mum"),
      t("tem — [тейн].", "tem is [tayn].")),
    letter("N n", t("как «н»", "like n"), "grande", t("большой", "big")),
    letter("O o", t("«о»; в конце слова — почти «у»", "“oh” or “aw”; at the end of a word it sounds like “oo”"), "avó", t("бабушка", "grandma"),
      t("obrigado — [обрига́ду].", "obrigado is [oh-bree-GAH-doo].")),
    letter("P p", t("как «п»", "like p"), "pai", t("папа", "dad")),
  ],
  dialogue: {
    title: t("Семейные фотографии", "Family photos"),
    note: t(
      "Olha! — «Смотри!». Primo — «двоюродный брат». Lá — «там».",
      "Olha! means “Look!”. Primo means “cousin” (a boy or man). Lá means “there”.",
    ),
    lines: [
      line("bia", "Olha, Murzik! Esta é a minha mãe, a Cláudia.", t("Смотри, Мурзик! Это моя мама, Клаудия.", "Look, Murzik! This is my mum, Cláudia.")),
      line("murzik", "E este?", t("А это кто?", "And who's this?")),
      line("bia", "Este é o meu irmão, o Léo. E esta é a minha avó!", t("Это мой брат, Лео. А это моя бабушка!", "This is my brother, Léo. And this is my grandma!")),
      line("murzik", "E o seu pai?", t("А твой папа?", "And your dad?")),
      line("bia", "O meu pai está em São Paulo. Ele trabalha lá.", t("Папа в Сан-Паулу. Он там работает.", "My dad's in São Paulo. He works there.")),
      line("bia", "Você tem irmãos, Murzik?", t("А у тебя есть братья или сёстры, Мурзик?", "Do you have any brothers or sisters, Murzik?")),
      line("murzik", "Tenho! Eu tenho uma irmã, a Musya, e um primo, o Barsik.", t("Есть! У меня есть сестра Муся и двоюродный брат Барсик.", "I do! I have a sister, Musya, and a cousin, Barsik.")),
      line("bia", "Que família grande!", t("Какая большая семья!", "What a big family!")),
    ],
    gist: choice("ptri3-d1", t("Где папа Бии?", "Where is Bia's dad?"), [
      [t("В Сан-Паулу, он там работает.", "In São Paulo — he works there."), true],
      [t("Дома, в Рио.", "At home in Rio."), false],
      [t("В Париже.", "In Paris."), false],
    ]),
  },
  grammar: [
    g(
      t("Мужской и женский род: o и a", "Every word is masculine or feminine"),
      [
        t(
          "Все существительные в португальском — мужского или женского рода. Среднего рода, как в русском, нет. Перед словом обычно стоит артикль: o — для мужского рода, a — для женского: o pai, a mãe. В русском артиклей нет, но в португальском без них фраза звучит неполно.",
          "In Portuguese every noun is masculine or feminine — even things. You can usually hear it in the little word for “the”: o for masculine, a for feminine: o pai (the dad), a mãe (the mum).",
        ),
        t(
          "Вместе с родом меняется и «мой»: meu — o meu pai, minha — a minha mãe. Артикль перед meu и minha бразильцы обычно оставляют.",
          "“My” changes too: meu with masculine words, minha with feminine ones — o meu irmão, a minha irmã. Brazilians usually keep the o or a in front.",
        ),
      ],
      [
        ["o meu irmão", t("мой брат", "my brother")],
        ["a minha irmã", t("моя сестра", "my sister")],
      ],
    ),
  ],
  tasks: [
    choice("ptri3-t1", t("Как сказать «моя мама»?", "How do you say “my mum”?"), [
      ["a minha mãe", true],
      ["o meu mãe", false],
      ["a meu mãe", false],
    ], { skill: "grammar" }),
    listen("ptri3-t2", t("Послушай. Кто это?", "Listen. Who is it?"), "Este é o meu pai.", [
      [t("Папа.", "Dad."), true],
      [t("Брат.", "Brother."), false],
      [t("Бабушка.", "Grandma."), false],
    ]),
    match("ptri3-t3", PAIRS, [
      ["o pai", t("папа", "dad")],
      ["a mãe", t("мама", "mum")],
      ["o irmão", t("брат", "brother")],
      ["a avó", t("бабушка", "grandma")],
    ], { skill: "words" }),
    spell("ptri3-t4", t("Собери из букв слово «мама».", "Spell the word for “mum”."), "mãe"),
    speak("ptri3-t5", "Você tem irmãos?", "Tenho. Eu tenho um irmão e uma irmã.", t("Есть. У меня есть брат и сестра.", "I do. I have a brother and a sister."), {
      help: t("Ответь вслух о своей семье.", "Answer aloud about your own family."),
    }),
    choice("ptri3-t6", t("Тебе говорят: Obrigada! Что ответить?", "Someone says Obrigada! What do you answer?"), [
      ["De nada.", true],
      ["Desculpa!", false],
      ["Tudo bem?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "frame",
    itemName: t("Фоторамка", "Photo frame"),
    itemNameRu: "Porta-retrato",
    ru: "Oba! Um porta-retrato!",
    en: t("Ура! Фоторамка!", "Hooray! A photo frame!"),
    a11y: t(
      "На полке стоит деревянная рамка с фотографией: вся семья доны Лусии, а в середине — Мурзик.",
      "A wooden frame stands on the shelf with a photo of Dona Lúcia's whole family — and Murzik in the middle.",
    ),
    image: p("frame"),
    steps: [
      t("Биа печатает новую фотографию: вся семья — и Мурзик.", "Bia prints a new photo: the whole family — and Murzik."),
      t("«Agora você é da família!» — «Теперь ты член семьи!»", "“Agora você é da família!” — “Now you're part of the family!”"),
      t("Мурзик вставляет фото в рамку.", "Murzik puts it in a frame."),
      t("Рамка встаёт на полку.", "The frame goes on the shelf."),
    ],
    bridge: t("Днём Мурзик выходит на улицу. Там жарко, и очень хочется пить.", "In the afternoon Murzik goes out. It's hot, and he's very thirsty."),
  },
};

const rio4: Lesson = {
  id: "pt-a1-rio-4",
  level: "A1",
  cityId: "pt-rio",
  number: 4,
  title: t("De onde você é? — Откуда ты?", "De onde você é? — Where are you from?"),
  minutes: 7,
  goals: [
    t("Сказать, откуда ты и где живёшь", "Say where you're from and where you live"),
    t("Сказать, что не понимаешь", "Say you don't understand"),
    t("Попросить говорить медленнее", "Ask someone to speak more slowly"),
  ],
  vocabNote: t(
    "Moro — «живу», falo — «говорю»: окончание -o показывает, что говорит «я». Местоимение eu часто можно не говорить.",
    "Moro means “I live” and falo “I speak”: the ending -o already says “I”. That's why Brazilians often drop eu.",
  ),
  vocab: [
    v("ptri4-1", "De onde você é?", t("Откуда ты?", "Where are you from?"),
      t("Продавец сока за стойкой с фруктами с интересом смотрит на Мурзика.", "A juice seller behind a counter full of fruit looks at Murzik with interest."),
      p("l4-1"), t("[джи о́нджи восэ́ э]", "[jee OHN-jee voh-SAY EH]")),
    v("ptri4-2", "Eu sou da Rússia.", t("Я из России.", "I'm from Russia."),
      t("Мурзик показывает на маленький глобус.", "Murzik points to a little globe."),
      p("l4-2"), t("[е́у со́у да ху́сия]", "[AY-oo SOH dah HOO-see-ah]")),
    v("ptri4-3", "Eu moro em Paris.", t("Я живу в Париже.", "I live in Paris."),
      t("Мурзик показывает открытку с Эйфелевой башней.", "Murzik shows a postcard of the Eiffel Tower."),
      p("l4-3"), t("[е́у мо́ру ейн пари́с]", "[AY-oo MOH-roo ayn pah-REES]")),
    v("ptri4-4", "Você fala português?", t("Ты говоришь по-португальски?", "Do you speak Portuguese?"),
      t("Продавец удивлённо поднимает брови.", "The seller raises his eyebrows in surprise."),
      p("l4-4"), t("[восэ́ фа́ла португе́с]", "[voh-SAY FAH-lah por-too-GAYS]")),
    v("ptri4-5", "Falo um pouco.", t("Говорю немного.", "I speak a little."),
      t("Мурзик показывает лапами: совсем чуть-чуть.", "Murzik shows with his paws: just a tiny bit."),
      p("l4-5"), t("[фа́лу ум по́ку]", "[FAH-loo oom POH-koo]")),
    v("ptri4-6", "Não entendo.", t("Не понимаю.", "I don't understand."),
      t("Мурзик растерянно чешет за ухом, над ним знак вопроса.", "Murzik scratches behind his ear, puzzled; a question mark floats above him."),
      p("l4-6"), t("[на́ун энтэ́нду]", "[nown en-TEN-doo]")),
    v("ptri4-7", "Mais devagar, por favor.", t("Помедленнее, пожалуйста.", "More slowly, please."),
      t("Мурзик мягко показывает «помедленнее». Рядом ползёт черепаха.", "Murzik gently signals “slow down”. A tortoise crawls past."),
      p("l4-7"), t("[майс джива́гар, пор фаво́р]", "[mice jee-vah-GAR, por fah-VOR]")),
  ],
  letters: [
    letter("Q q", t("qu перед e, i — «к»; в остальных случаях — «кв»", "qu before e and i is like k; otherwise like kw"), "quer", t("хочешь", "want"),
      t("quer — [кэр], а qual — [куа́у].", "quer is [kehr], but qual is [kwow].")),
    letter("R r", t("в начале слова и rr — как «х»; между гласными — короткое «р»", "at the start of a word, and as rr, it sounds like h; between vowels it's a quick tap, like tt in American “butter”"), "Rússia", t("Россия", "Russia"),
      t("Rio — [хи́у], а не «рио»!", "Rio is [HEE-oo], not “ree-oh”!")),
    letter("S s", t("как «с»; между гласными — «з»", "like s; between two vowels like z"), "casa", t("дом", "house"),
      t("casa — [ка́за].", "casa is [KAH-zah].")),
    letter("T t", t("как «т», но перед звуком [и] — «ч»", "like t, but before an [ee] sound like ch"), "ótimo", t("отличный", "great"),
      t("ótimo — [о́чиму], noite — [но́йчи].", "ótimo is [AW-chee-moo], noite is [NOY-chee].")),
  ],
  dialogue: {
    title: t("У киоска с соком", "At the juice stand"),
    note: t(
      "Que legal! — «Как здорово!», очень бразильское выражение. Mas — «но». Claro! — «Конечно!»",
      "Que legal! means “Cool!” — a very Brazilian phrase. Mas means “but”. Claro! means “Of course!”",
    ),
    lines: [
      line("seller", "Bom dia! Você quer um suco?", t("Доброе утро! Хочешь сок?", "Good morning! Would you like a juice?")),
      line("murzik", "Sim, obrigado! Um suco de manga.", t("Да, спасибо! Сок из манго.", "Yes, thanks! A mango juice.")),
      line("seller", "De onde você é?", t("Откуда ты?", "Where are you from?")),
      line("murzik", "Eu sou da Rússia, mas moro em Paris.", t("Я из России, но живу в Париже.", "I'm from Russia, but I live in Paris.")),
      line("seller", "Que legal! Você fala português muito bem!", t("Как здорово! Ты отлично говоришь по-португальски!", "Cool! Your Portuguese is really good!")),
      line("murzik", "Falo um pouco… Desculpa, não entendo tudo. Mais devagar, por favor.", t("Немного… Простите, я понимаю не всё. Помедленнее, пожалуйста.", "Just a little… Sorry, I don't understand everything. More slowly, please.")),
      line("seller", "Claro! O seu… suco… de… manga!", t("Конечно! Твой… сок… из… манго!", "Of course! Your… mango… juice!")),
    ],
    gist: choice("ptri4-d1", t("Что заказывает Мурзик?", "What does Murzik order?"), [
      [t("Сок из манго.", "A mango juice."), true],
      [t("Кофе.", "A coffee."), false],
      [t("Воду.", "Water."), false],
    ]),
  },
  grammar: [
    g(
      t("Откуда: de + артикль", "Where from: de + “the”"),
      [
        t(
          "«Из» по-португальски — de. Перед названием страны обычно стоит артикль, и они сливаются в одно слово: de + a = da, de + o = do. Eu sou da Rússia (a Rússia), Eu sou do Brasil (o Brasil). Перед названием города артикля обычно нет: Eu sou de São Paulo.",
          "“From” is de. Most country names take “the” in Portuguese, and de joins with it: de + a = da, de + o = do, de + os = dos. So: Eu sou da Inglaterra (England), Eu sou do Canadá, Eu sou dos Estados Unidos (the United States). Cities usually don't: Eu sou de Londres.",
        ),
        t(
          "«Не» — não перед глаголом: Não entendo. — Не понимаю. Почти как в русском.",
          "To say “not”, just put não before the verb: Não entendo — “I don't understand”. There's no extra word like don't.",
        ),
      ],
      [
        ["Eu sou do Brasil.", t("Я из Бразилии.", "I'm from Brazil.")],
        ["Eu não falo inglês.", t("Я не говорю по-английски.", "I don't speak English.")],
      ],
    ),
  ],
  tasks: [
    choice("ptri4-t1", t("Как сказать «Я из Бразилии»? (o Brasil)", "How do you say “I'm from Brazil”? (o Brasil)"), [
      ["Eu sou do Brasil.", true],
      ["Eu sou da Brasil.", false],
      ["Eu sou o Brasil.", false],
    ], { skill: "grammar" }),
    listen("ptri4-t2", t("Послушай. О чём просят?", "Listen. What is the person asking for?"), "Mais devagar, por favor.", [
      [t("Говорить медленнее.", "To speak more slowly."), true],
      [t("Повторить ещё раз.", "To say it again."), false],
      [t("Сок из манго.", "A mango juice."), false],
    ]),
    match("ptri4-t3", PAIRS, [
      ["Não entendo.", t("Не понимаю.", "I don't understand.")],
      ["Falo um pouco.", t("Говорю немного.", "I speak a little.")],
      ["De onde você é?", t("Откуда ты?", "Where are you from?")],
      ["Eu moro em Paris.", t("Я живу в Париже.", "I live in Paris.")],
    ], { skill: "words" }),
    missing("ptri4-t4", t("Какой буквы не хватает? («Россия»)", "Which letter is missing? (“Russia”)"), "Rú", "sia", "s", ["s", "z", "c"]),
    speak("ptri4-t5", "De onde você é?", "Eu sou da Rússia. Eu moro em Paris.", t("Я из России. Живу в Париже. (Назови свою страну и город.)", "I'm from Russia. I live in Paris. (Say your own country and city.)"), {
      help: t("Ответь вслух: откуда ты и где живёшь.", "Answer aloud: where you're from and where you live."),
    }),
    choice("ptri4-t6", t("Как сказать «Извини!»?", "How do you say “Sorry!”?"), [
      ["Desculpa!", true],
      ["De nada.", false],
      ["Tudo ótimo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "flipflops",
    itemName: t("Шлёпанцы", "Flip-flops"),
    itemNameRu: "Chinelos",
    ru: "Oba! Chinelos!",
    en: t("Ура! Шлёпанцы!", "Hooray! Flip-flops!"),
    a11y: t(
      "У двери стоят крошечные зелёно-жёлтые шлёпанцы — как раз на лапы Мурзика.",
      "Tiny green-and-yellow flip-flops stand by the door — just the right size for Murzik's paws.",
    ),
    image: p("flipflops"),
    steps: [
      t("Продавец сока смеётся и что-то достаёт из-под прилавка.", "The juice seller laughs and takes something out from under the counter."),
      t("«No Rio todo mundo usa chinelo!» — «В Рио все ходят в шлёпанцах!»", "“No Rio todo mundo usa chinelo!” — “Everyone in Rio wears flip-flops!”"),
      t("Это крошечные шлёпанцы.", "A pair of tiny flip-flops."),
      t("Мурзик ставит их у двери.", "Murzik puts them by the door."),
    ],
    bridge: t("Вечером Лео смотрит футбол и учит Мурзика считать — голами.", "In the evening Léo watches football and teaches Murzik to count — in goals."),
  },
};

const rio5: Lesson = {
  id: "pt-a1-rio-5",
  level: "A1",
  cityId: "pt-rio",
  number: 5,
  title: t("Os números — Числа 0–10", "Os números — Numbers 0–10"),
  minutes: 7,
  goals: [
    t("Считать от нуля до десяти", "Count from zero to ten"),
    t("Спросить «Сколько?»", "Ask “How many?”"),
    t("Сказать, сколько тебе лет", "Say how old you are"),
  ],
  vocabNote: t(
    "Номер телефона бразильцы часто диктуют по одной цифре, а шестёрку называют meia [ме́йя] — «половина» (от «полдюжины»), чтобы не спутать seis и três.",
    "Brazilians often read phone numbers one digit at a time, and they call six meia [MAY-ah] — “half” (as in half a dozen), so that seis and três don't get mixed up.",
  ),
  vocab: [
    v("ptri5-1", "um, dois, três", t("один, два, три", "one, two, three"),
      t("Три футбольных мяча на траве.", "Three footballs on the grass."),
      p("l5-1"), t("[ум, дойс, трейс]", "[oom, doys, trays]")),
    v("ptri5-2", "quatro, cinco, seis", t("четыре, пять, шесть", "four, five, six"),
      t("Шесть кокосов в ряд на прилавке.", "Six coconuts in a row on a stall."),
      p("l5-2"), t("[куа́тру, си́нку, сейс]", "[KWAH-troo, SEEN-koo, says]")),
    v("ptri5-3", "sete, oito", t("семь, восемь", "seven, eight"),
      t("Восемь пирожков на тарелке.", "Eight little pastries on a plate."),
      p("l5-3"), t("[сэ́чи, о́йту]", "[SEH-chee, OY-too]")),
    v("ptri5-4", "nove, dez", t("девять, десять", "nine, ten"),
      t("Мурзик показывает десять пальцев на двух лапах.", "Murzik holds up ten fingers on two paws."),
      p("l5-4"), t("[но́ви, дэс]", "[NAW-vee, dess]")),
    v("ptri5-5", "zero", t("ноль", "zero, nought"),
      t("Пустая тарелка — ни одного пирожка.", "An empty plate — not a single pastry left."),
      p("l5-5"), t("[зэ́ру]", "[ZEH-roo]")),
    v("ptri5-6", "Quantos anos você tem?", t("Сколько тебе лет?", "How old are you?"),
      t("Лео с любопытством смотрит на Мурзика.", "Léo looks at Murzik curiously."),
      p("l5-6"), t("[куа́нтус а́нус восэ́ тейн]", "[KWAHN-toos AH-noos voh-SAY tayn]")),
    v("ptri5-7", "Eu tenho seis anos.", t("Мне шесть лет.", "I'm six."),
      t("Мурзик гордо показывает шесть пальцев.", "Murzik proudly holds up six fingers."),
      p("l5-7"), t("[е́у тэ́нью сейс а́нус]", "[AY-oo TEN-yoo says AH-noos]")),
  ],
  letters: [
    letter("U u", t("как «у»", "like oo"), "um", t("один", "one")),
    letter("V v", t("как «в»", "like v"), "nove", t("девять", "nine")),
    letter("X x", t("чаще всего — как «ш»", "usually like sh"), "xícara", t("чашка", "cup"),
      t("xícara — [ши́кара].", "xícara is [SHEE-kah-rah].")),
    letter("Z z", t("как «з»; в конце слова — как «с»", "like z; at the end of a word like s"), "dez", t("десять", "ten"),
      t("dez — [дэс].", "dez is [dess].")),
    letter("nh", t("как «нь»", "like ny in “canyon”"), "tenho", t("у меня есть", "I have"),
      t("tenho — [тэ́нью].", "tenho is [TEN-yoo].")),
  ],
  dialogue: {
    title: t("Футбол по телевизору", "Football on TV"),
    note: t(
      "Gol — «гол», time [чи́ми] — «команда». É hora de dormir — «пора спать».",
      "Gol means “goal”, and time [CHEE-mee] means “team”. É hora de dormir means “It's bedtime”.",
    ),
    lines: [
      line("leo", "Gol! Um, dois, três… Quatro gols!", t("Гол! Один, два, три… Четыре гола!", "Goal! One, two, three… Four goals!")),
      line("murzik", "Quantos gols?", t("Сколько голов?", "How many goals?")),
      line("leo", "Quatro! E o outro time: zero!", t("Четыре! А у другой команды — ноль!", "Four! And the other team: zero!")),
      line("leo", "Murzik, quantos anos você tem?", t("Мурзик, сколько тебе лет?", "Murzik, how old are you?")),
      line("murzik", "Eu tenho seis anos. E você?", t("Мне шесть лет. А тебе?", "I'm six. And you?")),
      line("leo", "Eu tenho dez anos!", t("А мне десять!", "I'm ten!")),
      line("claudia", "Léo, é hora de dormir!", t("Лео, пора спать!", "Léo, it's bedtime!")),
    ],
    gist: choice("ptri5-d1", t("Какой счёт в матче?", "What's the score?"), [
      [t("Четыре — ноль.", "Four–nil."), true],
      [t("Три — один.", "Three–one."), false],
      [t("Ноль — ноль.", "Nil–nil."), false],
    ]),
  },
  grammar: [
    g(
      t("Сколько лет: ter, а не ser", "“I have six years”"),
      [
        t(
          "О возрасте в португальском говорят «я имею шесть лет»: Eu tenho seis anos. Tenho — от глагола ter, «иметь». Сказать «Eu sou seis anos» нельзя.",
          "Portuguese says your age with ter, “to have”: Eu tenho seis anos — literally “I have six years”. Saying “Eu sou seis anos” (I am six years) is a classic mistake.",
        ),
        t(
          "«Один» и «два» меняются по роду: um gol, uma irmã; dois irmãos, duas irmãs. Как в русском «один, одна; два, две».",
          "One and two have feminine forms: um irmão, uma irmã; dois irmãos, duas irmãs. The other numbers stay the same.",
        ),
      ],
      [
        ["Eu tenho dez anos.", t("Мне десять лет.", "I'm ten.")],
        ["uma irmã, duas irmãs", t("одна сестра, две сестры", "one sister, two sisters")],
      ],
    ),
  ],
  tasks: [
    listen("ptri5-t1", t("Послушай. Какое число?", "Listen. Which number?"), "sete", [
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
    choice("ptri5-t3", t("Как сказать «Мне десять лет»?", "How do you say “I'm ten”?"), [
      ["Eu tenho dez anos.", true],
      ["Eu sou dez anos.", false],
      ["Eu dez anos.", false],
    ], { skill: "grammar" }),
    spell("ptri5-t4", t("Собери из букв число «шесть».", "Spell the number “six”."), "seis"),
    speak("ptri5-t5", "Quantos anos você tem?", "Eu tenho dez anos.", t("Мне десять лет. (Назови свой возраст.)", "I'm ten. (Say your own age.)"), {
      help: t("Ответь вслух, сколько тебе лет.", "Answer aloud with your age."),
    }),
    choice("ptri5-t6", t("Как спросить «Откуда ты?»", "How do you ask “Where are you from?”"), [
      ["De onde você é?", true],
      ["Quantos anos você tem?", false],
      ["Tudo bem?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ball",
    itemName: t("Футбольный мяч", "Football"),
    itemNameRu: "Bola",
    ru: "Oba! Uma bola!",
    en: t("Ура! Мяч!", "Hooray! A football!"),
    a11y: t(
      "Под гамаком лежит старый потёртый футбольный мяч, бело-чёрный.",
      "An old, scuffed black-and-white football lies under the hammock.",
    ),
    image: p("ball"),
    steps: [
      t("Лео приносит свой старый мяч.", "Léo brings his old football."),
      t("«Pra você, Murzik! Amanhã a gente joga!» — «Это тебе, Мурзик! Завтра поиграем!»", "“Pra você, Murzik! Amanhã a gente joga!” — “It's for you, Murzik! We'll play tomorrow!”"),
      t("Мурзик катает мяч по комнате.", "Murzik rolls it around the room."),
      t("И прячет его под гамак.", "Then he tucks it under the hammock."),
    ],
    bridge: t("Утром дона Лусия показывает Мурзику весь дом.", "In the morning Dona Lúcia shows Murzik the whole house."),
  },
};

const rio6: Lesson = {
  id: "pt-a1-rio-6",
  level: "A1",
  cityId: "pt-rio",
  number: 6,
  title: t("A casa — Дом", "A casa — The house"),
  minutes: 7,
  goals: [
    t("Назвать комнаты в доме", "Name the rooms in a house"),
    t("Сказать «здесь есть…»", "Say “there is…”"),
    t("Описать: большой, маленький, красивый", "Describe things: big, small, beautiful"),
  ],
  vocabNote: t(
    "A casa — женского рода, хотя «дом» в русском мужского. А o quarto («комната, спальня») — мужского. Род в двух языках часто не совпадает — запоминай слово вместе с o или a.",
    "Aqui means “here” and ali “there”. Learn each new word with its o or a — that's how you'll know whether it's masculine or feminine.",
  ),
  vocab: [
    v("ptri6-1", "Aqui é a cozinha.", t("Здесь кухня.", "This is the kitchen."),
      t("Светлая кухня с голубой плиткой, на плите кофейник.", "A bright kitchen with blue tiles and a coffee pot on the stove."),
      p("l6-1"), t("[аки́ э а кози́нья]", "[ah-KEE EH ah koh-ZEEN-yah]")),
    v("ptri6-2", "O banheiro é ali.", t("Ванная — вон там.", "The bathroom is over there."),
      t("Дона Лусия показывает на дверь в конце коридора.", "Dona Lúcia points to a door at the end of the hallway."),
      p("l6-2"), t("[у банье́йру э али́]", "[oo bahn-YAY-roo EH ah-LEE]")),
    v("ptri6-3", "a sala", t("гостиная", "the living room"),
      t("Гостиная с диваном, гитарой на стене и старым проигрывателем.", "A living room with a sofa, a guitar on the wall and an old record player."),
      p("l6-3"), t("[а са́ла]", "[ah SAH-lah]")),
    v("ptri6-4", "O quarto é pequeno.", t("Спальня маленькая.", "The bedroom is small."),
      t("Маленькая спальня с гамаком у окна.", "A small bedroom with a hammock by the window."),
      p("l6-4"), t("[у куа́рту э пике́ну]", "[oo KWAR-too EH pee-KAY-noo]")),
    v("ptri6-5", "Tem uma varanda!", t("Здесь есть балкон!", "There's a balcony!"),
      t("Мурзик выбегает на балкон с цветами.", "Murzik runs out onto a balcony full of flowers."),
      p("l6-5"), t("[тейн у́ма вара́нда]", "[tayn OO-mah vah-RAHN-dah]")),
    v("ptri6-6", "Que bonito!", t("Как красиво!", "How beautiful!"),
      t("С балкона видно море и зелёные горы.", "From the balcony you can see the sea and green hills."),
      p("l6-6"), t("[ки бони́ту]", "[kee boh-NEE-too]")),
    v("ptri6-7", "Fique à vontade.", t("Будь как дома.", "Make yourself at home."),
      t("Дона Лусия гостеприимно разводит руками.", "Dona Lúcia opens her arms in welcome."),
      p("l6-7"), t("[фи́ки а вонта́джи]", "[FEE-kee ah vohn-TAH-jee]")),
  ],
  letters: [
    letter("ão", t("носовое «аун»", "a nasal “own”"), "não", t("нет, не", "no, not"),
      t("não — [на́ун], irmão — [ирма́ун].", "não is [nown], irmão is [eer-MOWN].")),
    letter("ç", t("всегда «с»", "always s"), "licença", t("разрешение", "permission")),
    letter("lh", t("как «ль»", "like lli in “million”"), "olha", t("смотри", "look"),
      t("olha — [о́лья].", "olha is [OHL-yah].")),
    letter("á é ó", t("знак показывает ударный слог", "the accent shows the stressed syllable"), "avó", t("бабушка", "grandma")),
    letter("ê ô", t("закрытые «е» и «о», тоже под ударением", "a closed “e” or “o”, also stressed"), "você", t("ты", "you")),
  ],
  dialogue: {
    title: t("Дом в Санта-Терезе", "The house in Santa Teresa"),
    note: t(
      "Санта-Тереза — старый район Рио на холме. Lá em cima — «там, наверху». Статую Христа-Искупителя видно почти отовсюду.",
      "Santa Teresa is an old hilltop neighbourhood in Rio. Lá em cima means “up there”. You can see the statue of Christ the Redeemer from almost everywhere.",
    ),
    lines: [
      line("lucia", "Murzik, esta é a minha casa. Fique à vontade!", t("Мурзик, это мой дом. Будь как дома!", "Murzik, this is my house. Make yourself at home!")),
      line("murzik", "Obrigado, Dona Lúcia!", t("Спасибо, дона Лусия!", "Thank you, Dona Lúcia!")),
      line("lucia", "Aqui é a sala. E aqui é a cozinha.", t("Здесь гостиная. А здесь кухня.", "This is the living room. And this is the kitchen.")),
      line("murzik", "E o banheiro?", t("А ванная?", "And the bathroom?")),
      line("lucia", "O banheiro é ali. E este é o seu quarto. É pequeno…", t("Ванная вон там. А это твоя комната. Она маленькая…", "The bathroom's over there. And this is your room. It's small…")),
      line("murzik", "Tem uma varanda! Que bonito!", t("Здесь есть балкон! Как красиво!", "There's a balcony! How beautiful!")),
      line("lucia", "Olha o Cristo lá em cima!", t("Смотри — статуя Христа, там, наверху!", "Look — Christ the Redeemer, up there!")),
    ],
    gist: choice("ptri6-d1", t("Что больше всего нравится Мурзику?", "What does Murzik like most?"), [
      [t("Балкон с видом.", "The balcony with a view."), true],
      [t("Большая кухня.", "The big kitchen."), false],
      [t("Ванная.", "The bathroom."), false],
    ]),
  },
  grammar: [
    g(
      t("Tem — «есть»; прилагательное после слова", "Tem — “there is”; adjectives after the noun"),
      [
        t(
          "Чтобы сказать «здесь есть…», бразильцы говорят tem: Tem uma varanda. — Есть балкон. Это то же слово, что в Eu tenho, «у меня есть».",
          "Brazilians say tem (literally “has”) for “there is” and “there are”: Tem uma varanda — “There's a balcony”. It's the same verb as in Eu tenho, “I have”.",
        ),
        t(
          "Прилагательное обычно стоит после слова и меняется по его роду: o quarto pequeno, a casa pequena. Внимание: «дом» в русском мужского рода, а a casa — женского.",
          "Adjectives usually come after the noun and match it: o quarto pequeno (the small room), a casa pequena (the small house). Masculine -o becomes feminine -a.",
        ),
      ],
      [
        ["Tem uma varanda.", t("Есть балкон.", "There's a balcony.")],
        ["a casa pequena, o quarto pequeno", t("маленький дом, маленькая комната", "the small house, the small room")],
      ],
    ),
  ],
  tasks: [
    choice("ptri6-t1", t("Как сказать «маленький дом»? (a casa)", "How do you say “a small house”? (a casa)"), [
      ["a casa pequena", true],
      ["a casa pequeno", false],
      ["o casa pequena", false],
    ], { skill: "grammar" }),
    listen("ptri6-t2", t("Послушай. Где ванная?", "Listen. Where is the bathroom?"), "O banheiro é ali.", [
      [t("Вон там.", "Over there."), true],
      [t("На кухне.", "In the kitchen."), false],
      [t("Ванной нет.", "There isn't one."), false],
    ]),
    match("ptri6-t3", PAIRS, [
      ["a cozinha", t("кухня", "the kitchen")],
      ["o quarto", t("спальня", "the bedroom")],
      ["a sala", t("гостиная", "the living room")],
      ["a varanda", t("балкон", "the balcony")],
    ], { skill: "words" }),
    missing("ptri6-t4", t("Каких букв не хватает? («смотри!»)", "Which letters are missing? (“look!”)"), "O", "a!", "lh", ["lh", "l", "nh"]),
    speak("ptri6-t5", "Esta é a minha casa. Fique à vontade!", "Obrigado! Que bonito!", t("Спасибо! Как красиво!", "Thank you! How beautiful!"), {
      help: t("Ответь вслух. Можно сказать obrigado или obrigada.", "Answer aloud — obrigado or obrigada."),
    }),
    choice("ptri6-t6", t("Как спросить «Сколько тебе лет?»", "How do you ask “How old are you?”"), [
      ["Quantos anos você tem?", true],
      ["Qual é o seu nome?", false],
      ["De onde você é?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fern",
    itemName: t("Папоротник в горшке", "Potted fern"),
    itemNameRu: "Samambaia",
    ru: "Oba! Uma samambaia!",
    en: t("Ура! Папоротник!", "Hooray! A fern!"),
    a11y: t(
      "На балконе в глиняном горшке пышно зеленеет папоротник.",
      "A lush green fern grows in a clay pot on the balcony.",
    ),
    image: p("fern"),
    steps: [
      t("Дона Лусия дарит Мурзику папоротник со своего балкона.", "Dona Lúcia gives Murzik a fern from her balcony."),
      t("«Ela gosta de sol!» — «Он любит солнце!»", "“Ela gosta de sol!” — “It loves the sun!”"),
      t("Мурзик ставит горшок на свой балкон.", "Murzik puts the pot on his balcony."),
      t("И поливает его из маленькой лейки.", "And waters it with a tiny watering can."),
    ],
    bridge: t("Вечером вся семья идёт на концерт на пляж Копакабана.", "In the evening the whole family goes to a concert on Copacabana beach."),
  },
};

const rio7: Lesson = {
  id: "pt-a1-rio-7",
  level: "A1",
  cityId: "pt-rio",
  number: 7,
  title: t("Tchau! — Пока!", "Tchau! — Bye!"),
  minutes: 8,
  goals: [
    t("Здороваться днём и вечером", "Say hello in the afternoon and evening"),
    t("Прощаться", "Say goodbye"),
    t("Вспомнить все слова Рио", "Review all the words from Rio"),
  ],
  vocabNote: t(
    "Tchau — бразильское «пока», от итальянского ciao. Cadê? — разговорное «где?»: Cadê o Pipoca? = Onde está o Pipoca?",
    "Tchau is the Brazilian “bye” (from Italian ciao). Cadê? is a casual “where's…?”: Cadê o Pipoca? = Onde está o Pipoca?",
  ),
  vocab: [
    v("ptri7-1", "Boa tarde!", t("Добрый день!", "Good afternoon!"),
      t("Солнечный день на пляже, люди под зонтиками.", "A sunny afternoon on the beach, people under umbrellas."),
      p("l7-1"), t("[бо́а та́рджи]", "[BOH-ah TAR-jee]")),
    v("ptri7-2", "Boa noite!", t("Добрый вечер! / Спокойной ночи!", "Good evening! / Good night!"),
      t("Вечерний пляж, огни сцены и луна над морем.", "The beach at night: stage lights and the moon over the sea."),
      p("l7-2"), t("[бо́а но́йчи]", "[BOH-ah NOY-chee]")),
    v("ptri7-3", "Tchau!", t("Пока!", "Bye!"),
      t("Мурзик весело машет лапой.", "Murzik gives a cheerful wave."),
      p("l7-3"), t("[чау]", "[chow]")),
    v("ptri7-4", "Até amanhã!", t("До завтра!", "See you tomorrow!"),
      t("Лео в пижаме машет из двери.", "Léo in his pyjamas waves from the doorway."),
      p("l7-4"), t("[атэ́ аманья́]", "[ah-TEH ah-mahn-YAH]")),
    v("ptri7-5", "Cadê o Pipoca?", t("Где Пипока?", "Where's Pipoca?"),
      t("Пустая клетка с открытой дверцей. Мурзик растерянно оглядывается.", "An empty cage with its door open. Murzik looks around, worried."),
      p("l7-5"), t("[кадэ́ у пипо́ка]", "[kah-DAY oo pee-POH-kah]")),
    v("ptri7-6", "Ele sumiu!", t("Он пропал!", "He's gone!"),
      t("Дона Лусия в отчаянии всплёскивает руками.", "Dona Lúcia throws up her hands in dismay."),
      p("l7-6"), t("[э́ли суми́у]", "[AY-lee soo-MEE-oo]")),
    v("ptri7-7", "Vamos atrás dele!", t("Поехали за ним!", "Let's go after him!"),
      t("Мурзик и Биа бегут по ночной улице.", "Murzik and Bia run down a street at night."),
      p("l7-7"), t("[ва́мус атра́с дэ́ли]", "[VAH-moos ah-TRAHS DAY-lee]")),
  ],
  letters: [
    letter("tch", t("в словах из других языков — «ч»", "in borrowed words, like ch"), "Tchau!", t("Пока!", "Bye!")),
    letter("ã", t("«а» в нос, ударная", "a stressed “a” through the nose"), "amanhã", t("завтра", "tomorrow"),
      t("amanhã — [аманья́].", "amanhã is [ah-mahn-YAH].")),
  ],
  dialogue: {
    title: t("Концерт на Копакабане", "The concert on Copacabana"),
    note: t(
      "Ônibus — «автобус». Vai embora — «уезжает». Estava — «был» (о прошлом поговорим позже).",
      "Ônibus means “bus”. Vai embora means “is leaving”. Estava means “was” — we'll come back to the past later.",
    ),
    lines: [
      line("bia", "Boa noite, Copacabana! Olha, Murzik — a banda Maré Alta!", t("Добрый вечер, Копакабана! Смотри, Мурзик, — группа «Maré Alta»!", "Good evening, Copacabana! Look, Murzik — the band Maré Alta!")),
      line("zeca", "Boa noite, Rio! Vamos dançar!", t("Добрый вечер, Рио! Танцуем!", "Good evening, Rio! Let's dance!")),
      line("lucia", "Ai, que música linda!", t("Ах, какая красивая музыка!", "Oh, what lovely music!")),
      line("murzik", "Dona Lúcia… cadê o Pipoca?", t("Дона Лусия… а где Пипока?", "Dona Lúcia… where's Pipoca?")),
      line("lucia", "Ele estava aqui! Ele sumiu!", t("Он был здесь! Он пропал!", "He was right here! He's gone!")),
      line("bia", "Olha! Ele está no ônibus da banda!", t("Смотри! Он в автобусе группы!", "Look! He's on the band's bus!")),
      line("murzik", "O ônibus vai embora! Vamos atrás dele!", t("Автобус уезжает! Поехали за ним!", "The bus is leaving! Let's go after him!")),
    ],
    gist: choice("ptri7-d1", t("Где Пипока?", "Where is Pipoca?"), [
      [t("В автобусе группы.", "On the band's bus."), true],
      [t("На сцене.", "On the stage."), false],
      [t("У доны Лусии на плече.", "On Dona Lúcia's shoulder."), false],
    ]),
  },
  grammar: [
    g(
      t("Как здороваться и прощаться", "Good morning, good afternoon, good night"),
      [
        t(
          "Bom dia — до полудня, boa tarde — днём, boa noite — вечером и ночью. Boa noite значит и «добрый вечер», и «спокойной ночи». Bom — мужской род (o dia), boa — женский (a tarde, a noite).",
          "Bom dia until about noon, boa tarde in the afternoon, boa noite in the evening. Boa noite means both “good evening” and “good night”. Bom turns into boa because tarde and noite are feminine.",
        ),
        t(
          "Прощаются так: Tchau! — «пока», Até amanhã! — «до завтра», Até logo! — «до скорого».",
          "Saying goodbye: Tchau! (bye), Até amanhã! (see you tomorrow), Até logo! (see you later).",
        ),
      ],
      [
        ["Boa tarde, Dona Lúcia!", t("Добрый день, дона Лусия!", "Good afternoon, Dona Lúcia!")],
        ["Tchau, Léo! Até amanhã!", t("Пока, Лео! До завтра!", "Bye, Léo! See you tomorrow!")],
      ],
    ),
  ],
  tasks: [
    listen("ptri7-t1", t("Аудиоэкзамен. Что случилось?", "Audio exam. What happened?"), "Cadê o Pipoca? Ele sumiu! Ele está no ônibus da banda!", [
      [t("Пипока пропал — он в автобусе группы.", "Pipoca has gone — he's on the band's bus."), true],
      [t("Пипока поёт на сцене.", "Pipoca is singing on stage."), false],
      [t("Автобус сломался.", "The bus has broken down."), false],
    ]),
    choice("ptri7-t2", t("Вечер. Как поздороваться?", "It's evening. How do you say hello?"), [
      ["Boa noite!", true],
      ["Bom dia!", false],
      ["Boa tarde!", false],
    ], { skill: "words" }),
    fill("ptri7-t3", t("Вставь слово: «Добрый день!»", "Fill in the word: “Good afternoon!”"), "", "tarde!", "Boa", ["Boa", "Bom", "Bons"], { skill: "grammar" }),
    missing("ptri7-t4", t("Каких букв не хватает? («До завтра!»)", "Which letters are missing? (“See you tomorrow!”)"), "Até ama", "ã!", "nh", ["nh", "lh", "n"]),
    speak("ptri7-t5", "Tchau! Até amanhã!", "Tchau! Até amanhã!", t("Пока! До завтра!", "Bye! See you tomorrow!"), {
      help: t("Попрощайся вслух в ответ.", "Say goodbye back, aloud."),
    }),
    script("ptri7-t6", t("Вспомни весь Рио. Закончи разговор с Бией.", "Remember all of Rio. Finish the conversation with Bia."), [
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
    itemName: t("Альбом для фотографий", "Photo album"),
    itemNameRu: "Álbum",
    ru: "Oba! O álbum!",
    en: t("Ура! Альбом!", "Hooray! The album!"),
    a11y: t(
      "Альбом в зелёной обложке с нарисованным попугаем. На первой странице — фото Пипоки на Копакабане.",
      "An album with a green cover and a drawing of a parrot. On the first page: a photo of Pipoca on Copacabana beach.",
    ),
    image: p("album"),
    steps: [
      t("Дона Лусия даёт Мурзику пустой альбом.", "Dona Lúcia gives Murzik an empty album."),
      t("«Traga o Pipoca de volta — e muitas fotos!» — «Верни Пипоку — и привези много фотографий!»", "“Traga o Pipoca de volta — e muitas fotos!” — “Bring Pipoca back — and lots of photos!”"),
      t("На первую страницу Мурзик вклеивает последнее фото Пипоки — на Копакабане.", "On the first page Murzik sticks the last photo of Pipoca — on Copacabana."),
      t("Альбом ложится в чемодан.", "The album goes into his suitcase."),
    ],
    bridge: t(
      "На столбе у пляжа висит афиша: «Turnê Maré Alta». Первый город — Парати.",
      "A poster hangs on a lamp post by the beach: “Turnê Maré Alta”. The first stop is Paraty.",
    ),
  },
};

const story: CityStory = {
  home: {
    name: t("Комната в доме доны Лусии", "A room in Dona Lúcia's house"),
    nameRu: "O quarto do Murzik no Rio",
    image: p("home"),
    a11y: t(
      "Маленькая пустая комната в старом доме в Санта-Терезе: синие ставни, за окном зелёные холмы Рио. Посередине чемодан Мурзика.",
      "A small, empty room in an old house in Santa Teresa: blue shutters, the green hills of Rio outside the window. Murzik's suitcase in the middle.",
    ),
  },
  keepsakeId: "album",
  welcomeRu: "Olá, Rio!",
  welcomeEn: t("Привет, Рио!", "Hello, Rio!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Мурзик и дона Лусия с клеткой Пипоки выходят в зал прилёта. Девушка с кудрявыми волосами радостно машет им рукой.",
    "Murzik and Dona Lúcia, carrying Pipoca's cage, come out into the arrivals hall. A girl with curly hair waves at them happily.",
  ),
  departureImage: p("departure"),
  departureA11y: t(
    "Ночь у автовокзала. Дона Лусия, Клаудия и Лео машут Мурзику и Бие, которые садятся в автобус.",
    "Night at the bus station. Dona Lúcia, Cláudia and Léo wave to Murzik and Bia as they get on a bus.",
  ),
  finale: [
    {
      image: p("poster"),
      a11y: t(
        "Ночь, фонарный столб у пляжа. На нём яркая афиша группы с нарисованной картой Бразилии и точками городов. Биа читает её, подсвечивая телефоном.",
        "Night, a lamp post by the beach. On it, a bright band poster with a drawn map of Brazil and dots for the cities. Bia reads it by the light of her phone.",
      ),
      lines: [
        { en: t("Биа читает афишу гастролей:", "Bia reads the tour poster:") },
        { ru: "Turnê Maré Alta: Paraty, São Paulo, Curitiba…", en: t("Гастроли «Maré Alta»: Парати, Сан-Паулу, Куритиба…", "Maré Alta on tour: Paraty, São Paulo, Curitiba…") },
        { en: t("До дня рождения доны Лусии осталось не так много времени. Надо вернуть Пипоку!", "Dona Lúcia's birthday is coming up. They have to bring Pipoca back in time!") },
      ],
    },
    {
      image: p("album"),
      a11y: t(
        "Мурзик в последний раз обходит свою комнату в доме доны Лусии, которую обставлял урок за уроком.",
        "Murzik takes a last look around his room in Dona Lúcia's house, furnished lesson by lesson.",
      ),
      lines: [
        { en: t("Мурзик обходит свою комнату в Рио.", "Murzik walks around his room in Rio.") },
        { en: t("С собой он берёт альбом с первой фотографией Пипоки.", "He takes the album with the first photo of Pipoca.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Rio completo!", en: t("Рио пройден!", "Rio complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
        { ru: "A primeira cidade!", en: t("Первый город позади!", "Your first city!") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Семья доны Лусии машет на прощание у автобуса.", "Dona Lúcia's family waves goodbye by the bus."),
      lines: [
        { ru: "Tchau, Dona Lúcia!", en: t("Пока, дона Лусия!", "Bye, Dona Lúcia!") },
        { ru: "Próxima parada: Paraty!", en: t("Следующая остановка: Парати!", "Next stop: Paraty!") },
      ],
    },
    {
      image: p("bus"),
      a11y: t("Автобус едет по дороге вдоль зелёного побережья.", "A bus drives along a road by the green coast."),
      lines: [{ ru: "Rio → Paraty", en: t("Рио → Парати", "Rio → Paraty") }],
    },
    {
      image: pic("pt/paraty/arrival"),
      a11y: t(
        "Мурзик и Биа в Парати: белые домики с цветными дверями, мостовая из крупных камней, у причала лодки.",
        "Murzik and Bia in Paraty: white houses with colourful doors, a cobbled street, boats at the pier.",
      ),
      lines: [
        { ru: "Olá, Paraty!", en: t("Привет, Парати!", "Hello, Paraty!") },
        { ru: "Uma cidade nova. Palavras novas. Amigos novos.", en: t("Новый город. Новые слова. Новые друзья.", "A new city. New words. New friends.") },
      ],
    },
  ],
};

export const ptRio = {
  id: "pt-rio",
  name: t("Рио-де-Жанейро", "Rio de Janeiro"),
  namePt: "Rio de Janeiro",
  lessons: [rio1, rio2, rio3, rio4, rio5, rio6, rio7],
  story,
};
