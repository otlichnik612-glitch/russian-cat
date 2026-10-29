import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, choice, fill, g, line, listen, match, missing, script, speak, spell, t, tf, v } from "./make";

/* Парати · «Кафе и числа» · Группа уехала вчера. Гостиница, кафе Сеу Антониу, деньги и числа до 100, ser во всех лицах, лодка по заливу. Пипока выучил «Mais um café!». */

const p = (name: string) => pic(`pt/paraty/${name}`);
const ANTONIO = t("Сеу Антониу", "Seu Antônio");

const paraty1: Lesson = {
  id: "pt-a1-paraty-1",
  level: "A1",
  cityId: "pt-paraty",
  number: 1,
  title: t("Na pousada — В гостинице", "Na pousada — At the guesthouse"),
  minutes: 7,
  goals: [
    t("Спросить, есть ли свободная комната", "Ask if there's a room"),
    t("Сказать, на сколько ночей и для скольких человек", "Say how many nights and how many people"),
    t("Считать от 11 до 20", "Count from 11 to 20"),
  ],
  vocabNote: t(
    "Pousada — маленькая уютная гостиница, в Бразилии их очень много. Que pena! — «Как жаль!»",
    "A pousada is a small, cosy guesthouse — Brazil is full of them. Que pena! means “What a pity!”",
  ),
  vocab: [
    v("ptpa1-1", "Tem um quarto?", t("Есть свободная комната?", "Do you have a room?"),
      t("Мурзик стоит у деревянной стойки гостиницы с чемоданом.", "Murzik stands at the wooden reception desk with his suitcase."),
      p("l1-1"), t("[тейн ум куа́рту]", "[tayn oom KWAR-too]")),
    v("ptpa1-2", "Para duas pessoas.", t("На двоих.", "For two people."),
      t("Мурзик и Биа стоят рядом и показывают два пальца.", "Murzik and Bia stand side by side, holding up two fingers."),
      p("l1-2"), t("[па́ра ду́ас песо́ас]", "[PAH-rah DOO-ahs peh-SOH-ahs]")),
    v("ptpa1-3", "Quantas noites?", t("На сколько ночей?", "How many nights?"),
      t("Администратор гостиницы с блокнотом вопросительно смотрит поверх очков.", "The receptionist, notebook in hand, looks over her glasses."),
      p("l1-3"), t("[куа́нтас но́йчис]", "[KWAHN-tahs NOY-chees]")),
    v("ptpa1-4", "Duas noites.", t("Две ночи.", "Two nights."),
      t("На стойке — две маленькие луны из картона.", "Two little cardboard moons on the desk."),
      p("l1-4"), t("[ду́ас но́йчис]", "[DOO-ahs NOY-chees]")),
    v("ptpa1-5", "O quarto é o número doze.", t("Ваша комната — номер двенадцать.", "Your room is number twelve."),
      t("Синяя дверь с номером 12.", "A blue door with the number 12 on it."),
      p("l1-5"), t("[у куа́рту э у ну́меру до́зи]", "[oo KWAR-too EH oo NOO-meh-roo DOH-zee]")),
    v("ptpa1-6", "Aqui está a chave.", t("Вот ключ.", "Here's the key."),
      t("Администратор протягивает старинный ключ с деревянной биркой.", "The receptionist hands over an old key with a wooden tag."),
      p("l1-6"), t("[аки́ иста́ а ша́ви]", "[ah-KEE ees-TAH ah SHAH-vee]")),
    v("ptpa1-7", "Que pena!", t("Как жаль!", "What a pity!"),
      t("Биа разочарованно опускает плечи.", "Bia's shoulders drop in disappointment."),
      p("l1-7"), t("[ки пэ́на]", "[kee PEH-nah]")),
  ],
  dialogue: {
    title: t("В гостинице у моря", "At a guesthouse by the sea"),
    note: t(
      "Ontem — «вчера». Foram embora — «уехали». A senhora — вежливое «вы» к женщине, o senhor — к мужчине.",
      "Ontem means “yesterday”. Foram embora means “they left”. A senhora is the polite “you” for a woman, o senhor for a man.",
    ),
    lines: [
      line("bia", "Boa tarde! Tem um quarto?", t("Добрый день! Есть свободная комната?", "Good afternoon! Do you have a room?")),
      line("receptionist", "Tem, sim. Para quantas pessoas?", t("Есть. На сколько человек?", "Yes, we do. For how many people?")),
      line("bia", "Para duas pessoas.", t("На двоих.", "For two people.")),
      line("receptionist", "Quantas noites?", t("На сколько ночей?", "How many nights?")),
      line("bia", "Duas noites. A senhora conhece a banda Maré Alta?", t("Две ночи. Вы знаете группу «Maré Alta»?", "Two nights. Do you know the band Maré Alta?")),
      line("receptionist", "Conheço! Eles foram embora ontem.", t("Знаю! Они уехали вчера.", "Yes! They left yesterday.")),
      line("murzik", "Ontem? Que pena!", t("Вчера? Как жаль!", "Yesterday? What a pity!")),
      line("receptionist", "O quarto é o número doze. Aqui está a chave.", t("Ваша комната — номер двенадцать. Вот ключ.", "Your room is number twelve. Here's the key.")),
    ],
    gist: choice("ptpa1-d1", t("Когда уехала группа?", "When did the band leave?"), [
      [t("Вчера.", "Yesterday."), true],
      [t("Сегодня утром.", "This morning."), false],
      [t("Они ещё здесь.", "They're still here."), false],
    ]),
  },
  grammar: [
    g(
      t("Числа 11–20", "Numbers 11–20"),
      [
        t(
          "11–15 надо просто запомнить: onze, doze, treze, catorze, quinze. Дальше — как «десять и шесть»: dezesseis (16), dezessete (17), dezoito (18), dezenove (19). 20 — vinte.",
          "11 to 15 have their own names: onze, doze, treze, catorze, quinze. From 16 they're built like “ten-and-six”: dezesseis (16), dezessete (17), dezoito (18), dezenove (19). 20 is vinte.",
        ),
        t(
          "«Сколько» меняется по роду: quantos quartos (o quarto), quantas noites (a noite). В русском «сколько» не меняется, а в португальском — меняется.",
          "“How many” agrees with the noun: quantos quartos (masculine), quantas noites (feminine). It's the same pattern you saw with um/uma and dois/duas.",
        ),
      ],
      [
        ["doze, quinze, vinte", t("двенадцать, пятнадцать, двадцать", "twelve, fifteen, twenty")],
        ["Quantas pessoas? — Duas.", t("Сколько человек? — Двое.", "How many people? — Two.")],
      ],
    ),
  ],
  tasks: [
    listen("ptpa1-t1", t("Послушай. Какой номер комнаты?", "Listen. What's the room number?"), "O quarto é o número quinze.", [
      ["15", true],
      ["13", false],
      ["50", false],
    ]),
    match("ptpa1-t2", PAIRS, [
      ["onze", "11"],
      ["doze", "12"],
      ["dezesseis", "16"],
      ["vinte", "20"],
    ], { skill: "words" }),
    choice("ptpa1-t3", t("Как спросить «Сколько ночей?» (a noite)", "How do you ask “How many nights?” (a noite)"), [
      ["Quantas noites?", true],
      ["Quantos noites?", false],
      ["Quanto noites?", false],
    ], { skill: "grammar" }),
    spell("ptpa1-t4", t("Собери из букв слово «ключ».", "Spell the word for “key”."), "chave"),
    speak("ptpa1-t5", "Boa tarde! Para quantas pessoas?", "Para duas pessoas, por favor.", t("На двоих, пожалуйста.", "For two people, please."), {
      help: t("Ответь вслух, на сколько человек нужна комната.", "Answer aloud: how many people the room is for."),
    }),
    choice("ptpa1-t6", t("Вечер. Как попрощаться до завтра?", "It's evening. How do you say “See you tomorrow”?"), [
      ["Até amanhã!", true],
      ["Bom dia!", false],
      ["Muito prazer!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lantern",
    itemName: t("Старинный фонарь", "Old lantern"),
    itemNameRu: "Lampião",
    ru: "Oba! Um lampião!",
    en: t("Ура! Фонарь!", "Hooray! A lantern!"),
    a11y: t("На подоконнике стоит старинный кованый фонарь, внутри горит свеча.", "An old wrought-iron lantern with a candle inside stands on the windowsill."),
    image: p("lantern"),
    steps: [
      t("В комнате двенадцать темновато.", "Room twelve is a little dark."),
      t("Администратор приносит старинный фонарь.", "The receptionist brings an old lantern."),
      t("«Como nas ruas de Paraty!» — «Как на улицах Парати!»", "“Como nas ruas de Paraty!” — “Just like in the streets of Paraty!”"),
      t("Мурзик ставит его на подоконник.", "Murzik puts it on the windowsill."),
    ],
    bridge: t("Утром Мурзик и Биа идут завтракать в маленькое кафе на площади.", "In the morning Murzik and Bia go for breakfast at a little café on the square."),
  },
};

const paraty2: Lesson = {
  id: "pt-a1-paraty-2",
  level: "A1",
  cityId: "pt-paraty",
  number: 2,
  title: t("No café — В кафе", "No café — At the café"),
  minutes: 7,
  goals: [
    t("Вежливо заказать: Eu queria…", "Order politely: Eu queria…"),
    t("Сказать «с» и «без»", "Say “with” and “without”"),
    t("Ответить «Это всё»", "Say “That's all”"),
  ],
  vocabNote: t(
    "Pão de queijo — сырные булочки, любимый бразильский завтрак. Cafezinho — маленькая чашка крепкого кофе, его предлагают гостям везде.",
    "Pão de queijo are little cheese breads — a favourite Brazilian breakfast. Cafezinho is a small, strong coffee that people offer guests everywhere.",
  ),
  vocab: [
    v("ptpa2-1", "Eu queria um café, por favor.", t("Мне, пожалуйста, кофе.", "I'd like a coffee, please."),
      t("Мурзик за стойкой вежливо поднимает лапу.", "Murzik politely raises a paw at the counter."),
      p("l2-1"), t("[е́у кери́а ум кафэ́, пор фаво́р]", "[AY-oo keh-REE-ah oom kah-FEH, por fah-VOR]")),
    v("ptpa2-2", "um pão de queijo", t("сырная булочка", "a cheese bread"),
      t("Корзинка с маленькими золотистыми булочками.", "A basket of little golden cheese breads."),
      p("l2-2"), t("[ум па́ун джи ке́йжу]", "[oom POWN jee KAY-zhoo]")),
    v("ptpa2-3", "Com açúcar?", t("С сахаром?", "With sugar?"),
      t("Пожилой хозяин кафе держит сахарницу.", "The old café owner holds up a sugar bowl."),
      p("l2-3"), t("[кон асу́кар]", "[kohn ah-SOO-kar]")),
    v("ptpa2-4", "Sem açúcar.", t("Без сахара.", "Without sugar."),
      t("Мурзик качает головой и отодвигает сахарницу.", "Murzik shakes his head and pushes the sugar bowl away."),
      p("l2-4"), t("[сейн асу́кар]", "[sayn ah-SOO-kar]")),
    v("ptpa2-5", "Mais alguma coisa?", t("Что-нибудь ещё?", "Anything else?"),
      t("Хозяин кафе с карандашом за ухом наклоняется над стойкой.", "The café owner, pencil behind his ear, leans over the counter."),
      p("l2-5"), t("[майс ау-гу́ма ко́йза]", "[mice ow-GOO-mah KOY-zah]")),
    v("ptpa2-6", "Só isso, obrigado.", t("Это всё, спасибо.", "That's all, thanks."),
      t("Мурзик довольно показывает: хватит.", "Murzik happily signals: that's enough."),
      p("l2-6"), t("[со и́су, обрига́ду]", "[saw EE-soo, oh-bree-GAH-doo]")),
    v("ptpa2-7", "Aqui está.", t("Вот, пожалуйста.", "Here you are."),
      t("Хозяин ставит на стойку маленькую чашку кофе.", "The owner puts a small cup of coffee on the counter."),
      p("l2-7"), t("[аки́ иста́]", "[ah-KEE ees-TAH]")),
  ],
  dialogue: {
    title: t("Кафе Сеу Антониу", "Seu Antônio's café"),
    note: t(
      "Seu — так в Бразилии уважительно называют пожилого мужчину: Seu Antônio. Para mim — «мне».",
      "Seu is how Brazilians respectfully address an older man: Seu Antônio. Para mim means “for me”.",
    ),
    lines: [
      line("antonio", "Bom dia! O que vocês querem?", t("Доброе утро! Что будете?", "Good morning! What would you like?")),
      line("murzik", "Eu queria um café, por favor.", t("Мне, пожалуйста, кофе.", "I'd like a coffee, please.")),
      line("antonio", "Com açúcar?", t("С сахаром?", "With sugar?")),
      line("murzik", "Sem açúcar, obrigado.", t("Без сахара, спасибо.", "No sugar, thanks.")),
      line("bia", "E para mim, um suco de laranja e um pão de queijo.", t("А мне апельсиновый сок и сырную булочку.", "And for me, an orange juice and a cheese bread.")),
      line("antonio", "Mais alguma coisa?", t("Что-нибудь ещё?", "Anything else?")),
      line("bia", "Só isso, obrigada.", t("Это всё, спасибо.", "That's all, thanks.")),
      line("antonio", "Aqui está!", t("Вот, пожалуйста!", "Here you are!")),
    ],
    gist: choice("ptpa2-d1", t("Что заказывает Биа?", "What does Bia order?"), [
      [t("Апельсиновый сок и сырную булочку.", "An orange juice and a cheese bread."), true],
      [t("Кофе без сахара.", "A coffee with no sugar."), false],
      [t("Только воду.", "Just water."), false],
    ]),
  },
  grammar: [
    g(
      t("Eu queria — вежливая просьба", "Eu queria — the polite way to order"),
      [
        t(
          "Eu queria буквально — «я хотел бы». Так вежливо заказывают в кафе и магазине. Eu quero — «я хочу» — звучит резче. Приятная новость: queria не меняется по роду, это говорят и мужчины, и женщины.",
          "Eu queria is literally “I wanted”, but it works like “I'd like”: it's the polite way to order. Eu quero (I want) is fine with friends but can sound a bit blunt — just like in English.",
        ),
        t(
          "Com — «с», sem — «без»: café com açúcar, café sem açúcar.",
          "Com means “with” and sem means “without”: café com açúcar, café sem açúcar.",
        ),
      ],
      [
        ["Eu queria um suco, por favor.", t("Мне, пожалуйста, сок.", "I'd like a juice, please.")],
        ["Um café sem açúcar.", t("Кофе без сахара.", "A coffee without sugar.")],
      ],
    ),
  ],
  tasks: [
    choice("ptpa2-t1", t("Как вежливо заказать сок?", "How do you politely order a juice?"), [
      ["Eu queria um suco, por favor.", true],
      ["Suco!", false],
      ["Eu sou um suco.", false],
    ], { skill: "grammar" }),
    listen("ptpa2-t2", t("Послушай. Какой кофе хочет человек?", "Listen. What kind of coffee does the person want?"), "Um café sem açúcar, por favor.", [
      [t("Без сахара.", "Without sugar."), true],
      [t("С сахаром.", "With sugar."), false],
      [t("С молоком.", "With milk."), false],
    ]),
    match("ptpa2-t3", PAIRS, [
      ["Mais alguma coisa?", t("Что-нибудь ещё?", "Anything else?")],
      ["Só isso.", t("Это всё.", "That's all.")],
      ["Aqui está.", t("Вот, пожалуйста.", "Here you are.")],
      ["com açúcar", t("с сахаром", "with sugar")],
    ], { skill: "words" }),
    missing("ptpa2-t4", t("Какой буквы не хватает? («сахар»)", "Which letter is missing? (“sugar”)"), "a", "úcar", "ç", ["ç", "s", "c"]),
    speak("ptpa2-t5", "Bom dia! O que você quer?", "Eu queria um café, por favor.", t("Мне, пожалуйста, кофе.", "I'd like a coffee, please."), {
      help: t("Закажи вслух что-нибудь в кафе.", "Order something at the café, aloud."),
    }),
    choice("ptpa2-t6", t("Как спросить «Есть свободная комната?»", "How do you ask “Do you have a room?”"), [
      ["Tem um quarto?", true],
      ["Quantas noites?", false],
      ["Aqui está a chave.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cup",
    itemName: t("Кофейная чашечка", "Little coffee cup"),
    itemNameRu: "Xícara",
    ru: "Oba! Uma xícara!",
    en: t("Ура! Чашечка!", "Hooray! A little cup!"),
    a11y: t("Маленькая белая кофейная чашечка с синим ободком и блюдцем.", "A small white coffee cup with a blue rim, on its saucer."),
    image: p("cup"),
    steps: [
      t("Сеу Антониу смеётся: «Você gosta de café!»", "Seu Antônio laughs: “Você gosta de café!”"),
      t("«Ты любишь кофе!»", "“You like coffee!”"),
      t("Он дарит Мурзику маленькую чашечку.", "He gives Murzik a little coffee cup."),
      t("Чашечка встаёт на полку в комнате двенадцать.", "The cup goes on the shelf in room twelve."),
    ],
    bridge: t("Пора платить. Но сколько стоят кофе, сок и булочка?", "Time to pay. But how much are the coffee, the juice and the cheese bread?"),
  },
};

const paraty3: Lesson = {
  id: "pt-a1-paraty-3",
  level: "A1",
  cityId: "pt-paraty",
  number: 3,
  title: t("Quanto é? — Сколько с меня?", "Quanto é? — How much is it?"),
  minutes: 7,
  goals: [
    t("Попросить счёт", "Ask for the bill"),
    t("Считать десятками до 100", "Count in tens to 100"),
    t("Спросить, можно ли картой", "Ask if you can pay by card"),
  ],
  vocabNote: t(
    "Деньги в Бразилии — реалы: um real, dois reais. Сдачу оставляют не всегда, а «на чай» часто уже входит в счёт.",
    "Brazil's money is the real: um real, dois reais. A service charge is often already included in the bill.",
  ),
  vocab: [
    v("ptpa3-1", "A conta, por favor.", t("Счёт, пожалуйста.", "The bill, please."),
      t("Мурзик изображает в воздухе, будто пишет.", "Murzik mimes writing in the air."),
      p("l3-1"), t("[а ко́нта, пор фаво́р]", "[ah KOHN-tah, por fah-VOR]")),
    v("ptpa3-2", "Quanto é?", t("Сколько с меня?", "How much is it?"),
      t("Мурзик заглядывает в кошелёк.", "Murzik peeks into his wallet."),
      p("l3-2"), t("[куа́нту э]", "[KWAHN-too EH]")),
    v("ptpa3-3", "São vinte reais.", t("Двадцать реалов.", "That's twenty reais."),
      t("На блюдце — чек с цифрой 20.", "A receipt with the number 20 on a saucer."),
      p("l3-3"), t("[са́ун ви́нчи хеа́йс]", "[sown VEEN-chee heh-ICE]")),
    v("ptpa3-4", "trinta, quarenta, cinquenta", t("тридцать, сорок, пятьдесят", "thirty, forty, fifty"),
      t("Три стопки монет: тридцать, сорок, пятьдесят.", "Three stacks of coins: thirty, forty, fifty."),
      p("l3-4"), t("[три́нта, куаре́нта, синкуэ́нта]", "[TREEN-tah, kwah-REN-tah, seen-KWEN-tah]")),
    v("ptpa3-5", "cem", t("сто", "a hundred"),
      t("Купюра в сто реалов с рыбой-групером.", "A hundred-real note with a grouper fish on it."),
      p("l3-5"), t("[сейн]", "[sayn]")),
    v("ptpa3-6", "Pode ser no cartão?", t("Можно картой?", "Can I pay by card?"),
      t("Мурзик протягивает банковскую карту.", "Murzik holds out a bank card."),
      p("l3-6"), t("[по́джи сер ну карта́ун]", "[POH-jee sehr noo kar-TOWN]")),
    v("ptpa3-7", "Em dinheiro.", t("Наличными.", "In cash."),
      t("Биа кладёт на стойку бумажные деньги.", "Bia puts some banknotes on the counter."),
      p("l3-7"), t("[ейн джинье́йру]", "[ayn jeen-YAY-roo]")),
  ],
  dialogue: {
    title: t("Счёт", "The bill"),
    note: t(
      "Pode — «можно». Claro que pode! — «Конечно, можно!» Em dinheiro — «наличными».",
      "Pode means “you can”. Claro que pode! means “Of course you can!” Em dinheiro means “in cash”.",
    ),
    lines: [
      line("murzik", "Seu Antônio, a conta, por favor.", t("Сеу Антониу, счёт, пожалуйста.", "Seu Antônio, the bill, please.")),
      line("antonio", "Um café, um suco e um pão de queijo…", t("Один кофе, один сок и булочка…", "One coffee, one juice and a cheese bread…")),
      line("murzik", "Quanto é?", t("Сколько с меня?", "How much is it?")),
      line("antonio", "São vinte reais.", t("Двадцать реалов.", "That's twenty reais.")),
      line("murzik", "Pode ser no cartão?", t("Можно картой?", "Can I pay by card?")),
      line("antonio", "Claro que pode!", t("Конечно, можно!", "Of course you can!")),
      line("bia", "Não, não! Eu pago. Em dinheiro!", t("Нет-нет! Я плачу. Наличными!", "No, no! I'll pay. In cash!")),
    ],
    gist: choice("ptpa3-d1", t("Сколько стоит завтрак?", "How much is breakfast?"), [
      [t("Двадцать реалов.", "Twenty reais."), true],
      [t("Двенадцать реалов.", "Twelve reais."), false],
      [t("Сто реалов.", "A hundred reais."), false],
    ]),
  },
  grammar: [
    g(
      t("Много: -s и десятки", "Plurals and tens"),
      [
        t(
          "Множественное число обычно образуется просто: добавь -s: um café — dois cafés, um suco — dois sucos. Но у слов на -l своя форма: um real — dois reais.",
          "Most plurals just add -s: um café — dois cafés, um suco — dois sucos. Words ending in -l change: um real — dois reais.",
        ),
        t(
          "Десятки: vinte (20), trinta (30), quarenta (40), cinquenta (50), sessenta (60), setenta (70), oitenta (80), noventa (90), cem (100). Между десятком и единицей — e («и»): vinte e cinco — 25.",
          "Tens: vinte (20), trinta (30), quarenta (40), cinquenta (50), sessenta (60), setenta (70), oitenta (80), noventa (90), cem (100). Join tens and units with e (“and”): vinte e cinco — 25.",
        ),
      ],
      [
        ["dois cafés, três sucos", t("два кофе, три сока", "two coffees, three juices")],
        ["vinte e cinco reais", t("двадцать пять реалов", "twenty-five reais")],
      ],
    ),
  ],
  tasks: [
    listen("ptpa3-t1", t("Послушай. Сколько стоит?", "Listen. How much is it?"), "São quarenta reais.", [
      ["40", true],
      ["14", false],
      ["4", false],
    ]),
    match("ptpa3-t2", PAIRS, [
      ["trinta", "30"],
      ["cinquenta", "50"],
      ["setenta", "70"],
      ["cem", "100"],
    ], { skill: "words" }),
    choice("ptpa3-t3", t("Как сказать «два реала»?", "How do you say “two reais”?"), [
      ["dois reais", true],
      ["dois reals", false],
      ["duas real", false],
    ], { skill: "grammar" }),
    spell("ptpa3-t4", t("Собери из букв слово «счёт».", "Spell the word for “bill”."), "conta"),
    speak("ptpa3-t5", "São vinte reais.", "Pode ser no cartão?", t("Можно картой?", "Can I pay by card?"), {
      help: t("Спроси вслух, можно ли заплатить картой.", "Ask aloud if you can pay by card."),
    }),
    choice("ptpa3-t6", t("Хозяин спрашивает: Mais alguma coisa? Что ответить, если больше ничего не нужно?", "The owner asks: Mais alguma coisa? What do you say if you don't want anything else?"), [
      ["Só isso, obrigado.", true],
      ["Com açúcar.", false],
      ["Que pena!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "wallet",
    itemName: t("Кошелёк из ракушек", "Shell purse"),
    itemNameRu: "Porta-moedas",
    ru: "Oba! Um porta-moedas!",
    en: t("Ура! Кошелёк!", "Hooray! A purse!"),
    a11y: t("Маленький тканевый кошелёк, расшитый ракушками.", "A small fabric purse decorated with little shells."),
    image: p("wallet"),
    steps: [
      t("Биа покупает на площади маленький кошелёк с ракушками.", "On the square Bia buys a little purse decorated with shells."),
      t("«Para os seus reais!» — «Для твоих реалов!»", "“Para os seus reais!” — “For your reais!”"),
      t("Мурзик кладёт туда сдачу.", "Murzik puts his change inside."),
      t("Звенят монетки.", "The coins jingle."),
    ],
    bridge: t("Сеу Антониу садится к ним за столик. Он знает музыкантов!", "Seu Antônio sits down at their table. He knows the musicians!"),
  },
};

const paraty4: Lesson = {
  id: "pt-a1-paraty-4",
  level: "A1",
  cityId: "pt-paraty",
  number: 4,
  title: t("Eles são músicos — Они музыканты", "Eles são músicos — They're musicians"),
  minutes: 7,
  goals: [
    t("Сказать «он, она, мы, они»", "Say he, she, we and they"),
    t("Рассказать, кто кем работает", "Say what someone does"),
    t("Описать человека: симпатичный, весёлый", "Describe a person: nice, fun"),
  ],
  vocabNote: t(
    "Simpático — не «симпатичный внешне», а «приятный, милый в общении». О внешности говорят bonito, bonita.",
    "Simpático means “nice, friendly” — it's about character, not looks. Watch out: it doesn't mean “sympathetic”.",
  ),
  vocab: [
    v("ptpa4-1", "Quem é ele?", t("Кто он?", "Who is he?"),
      t("Мурзик показывает на фото на стене кафе.", "Murzik points to a photo on the café wall."),
      p("l4-1"), t("[кейн э э́ли]", "[kayn EH AY-lee]")),
    v("ptpa4-2", "Ele é o cantor.", t("Он певец.", "He's the singer."),
      t("На фото певец с микрофоном широко улыбается.", "In the photo, a singer with a microphone grins widely."),
      p("l4-2"), t("[э́ли э у канто́р]", "[AY-lee EH oo kahn-TOR]")),
    v("ptpa4-3", "Ela é estudante.", t("Она студентка.", "She's a student."),
      t("Биа с рюкзаком и тетрадями.", "Bia with a backpack and notebooks."),
      p("l4-3"), t("[э́ла э истуда́нчи]", "[EH-lah EH ees-too-DAHN-chee]")),
    v("ptpa4-4", "Nós somos amigos.", t("Мы друзья.", "We're friends."),
      t("Мурзик и Биа обнимаются за плечи.", "Murzik and Bia with their arms round each other's shoulders."),
      p("l4-4"), t("[нос со́мус ами́гус]", "[nohs SOH-moos ah-MEE-goos]")),
    v("ptpa4-5", "Eles são músicos.", t("Они музыканты.", "They're musicians."),
      t("Группа на сцене: певец, барабанщик, гитаристка.", "A band on stage: a singer, a drummer, a guitarist."),
      p("l4-5"), t("[э́лис са́ун му́зикус]", "[AY-lees sown MOO-zee-koos]")),
    v("ptpa4-6", "Ele é muito simpático.", t("Он очень приятный человек.", "He's really nice."),
      t("Сеу Антониу добродушно смеётся.", "Seu Antônio laughs good-naturedly."),
      p("l4-6"), t("[э́ли э му́йнту симпа́чику]", "[AY-lee EH MWEEN-too seem-PAH-chee-koo]")),
    v("ptpa4-7", "Eles são divertidos.", t("Они весёлые.", "They're fun."),
      t("Музыканты дурачатся в автобусе.", "The musicians fool around on their bus."),
      p("l4-7"), t("[э́лис са́ун дживерчи́дус]", "[AY-lees sown jee-ver-CHEE-doos]")),
  ],
  dialogue: {
    title: t("Фото на стене", "The photo on the wall"),
    note: t(
      "Famosos — «знаменитые». Não muito — «не очень». Papagaio — «попугай».",
      "Famosos means “famous”. Não muito means “not really”. Papagaio means “parrot”.",
    ),
    lines: [
      line("murzik", "Seu Antônio, quem é ele?", t("Сеу Антониу, а кто это?", "Seu Antônio, who's that?")),
      line("antonio", "Ele é o Zeca, o cantor da Maré Alta. E ele é o Tiago.", t("Это Зека, певец «Maré Alta». А это Тиагу.", "That's Zeca, the singer of Maré Alta. And that's Tiago.")),
      line("bia", "Eles são músicos famosos?", t("Они знаменитые музыканты?", "Are they famous musicians?")),
      line("antonio", "Não muito. Mas eles são muito simpáticos e divertidos!", t("Не очень. Но они очень приятные и весёлые!", "Not really. But they're really nice, and great fun!")),
      line("murzik", "Nós somos amigos do Pipoca. Ele está com a banda!", t("Мы друзья Пипоки. Он с группой!", "We're Pipoca's friends. He's with the band!")),
      line("antonio", "Pipoca? Um papagaio verde?", t("Пипока? Зелёный попугай?", "Pipoca? A green parrot?")),
    ],
    gist: choice("ptpa4-d1", t("Кто такой Зека?", "Who is Zeca?"), [
      [t("Певец группы.", "The band's singer."), true],
      [t("Хозяин кафе.", "The café owner."), false],
      [t("Брат Бии.", "Bia's brother."), false],
    ]),
  },
  grammar: [
    g(
      t("Ser: я, ты, он, мы, они", "Ser: all the persons"),
      [
        t(
          "Глагол ser («быть») меняется по лицам: eu sou, você é, ele é, ela é, nós somos, vocês são, eles são, elas são. В русском «быть» в настоящем времени пропускают, а в португальском — никогда.",
          "Ser (to be) changes with each person: eu sou, você é, ele é, ela é, nós somos, vocês são, eles são, elas são. Note that você takes the same form as ele/ela: você é, ele é.",
        ),
        t(
          "Для профессий артикль не нужен: Ela é estudante. — Она студентка. А вот o cantor da banda — «тот самый певец этой группы» — с артиклем.",
          "No “a” before jobs: Ela é estudante — “She's a student”. Use “the” only for a particular one: Ele é o cantor da banda — “He's the band's singer”.",
        ),
      ],
      [
        ["Nós somos amigos.", t("Мы друзья.", "We're friends.")],
        ["Eles são músicos.", t("Они музыканты.", "They're musicians.")],
      ],
    ),
  ],
  tasks: [
    choice("ptpa4-t1", t("Как сказать «Они музыканты»?", "How do you say “They're musicians”?"), [
      ["Eles são músicos.", true],
      ["Eles é músicos.", false],
      ["Eles somos músicos.", false],
    ], { skill: "grammar" }),
    listen("ptpa4-t2", t("Послушай. Кто она?", "Listen. Who is she?"), "Ela é estudante.", [
      [t("Студентка.", "A student."), true],
      [t("Певица.", "A singer."), false],
      [t("Хозяйка кафе.", "The café owner."), false],
    ]),
    fill("ptpa4-t3", t("Вставь слово: «Мы друзья».", "Fill in the word: “We're friends”."), "Nós", "amigos.", "somos", ["somos", "são", "sou"], { skill: "words" }),
    missing("ptpa4-t4", t("Какой буквы не хватает? («музыканты»)", "Which letter is missing? (“musicians”)"), "m", "sicos", "ú", ["ú", "u", "o"]),
    speak("ptpa4-t5", "Quem é você?", "Eu sou estudante. Eu sou da Rússia.", t("Я студент(ка). Я из России. (Расскажи о себе.)", "I'm a student. I'm from Russia. (Talk about yourself.)"), {
      help: t("Скажи вслух, кто ты и откуда.", "Say aloud who you are and where you're from."),
    }),
    choice("ptpa4-t6", t("Как попросить счёт?", "How do you ask for the bill?"), [
      ["A conta, por favor.", true],
      ["Quanto é o quarto?", false],
      ["Em dinheiro.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "boat",
    itemName: t("Деревянная лодочка", "Little wooden boat"),
    itemNameRu: "Barquinho",
    ru: "Oba! Um barquinho!",
    en: t("Ура! Лодочка!", "Hooray! A little boat!"),
    a11y: t("Маленькая деревянная лодочка, раскрашенная в жёлтый, синий и красный.", "A small wooden boat painted yellow, blue and red."),
    image: p("boat"),
    steps: [
      t("Сеу Антониу достаёт с полки маленькую лодочку.", "Seu Antônio takes a little boat from the shelf."),
      t("«Amanhã vocês vão de barco!» — «Завтра поедете на лодке!»", "“Amanhã vocês vão de barco!” — “Tomorrow you're going on a boat!”"),
      t("У его друга настоящая лодка.", "A friend of his has a real boat."),
      t("Мурзик ставит лодочку рядом с фонарём.", "Murzik puts the little boat next to the lantern."),
    ],
    bridge: t("Утром у причала их ждёт яркая лодка.", "In the morning a brightly painted boat is waiting for them at the pier."),
  },
};

const paraty5: Lesson = {
  id: "pt-a1-paraty-5",
  level: "A1",
  cityId: "pt-paraty",
  number: 5,
  title: t("De barco — На лодке", "De barco — By boat"),
  minutes: 7,
  goals: [
    t("Сказать о многих вещах: os, as", "Talk about several things: os, as"),
    t("Сказать «много» и «мало»", "Say “many” and “few”"),
    t("Восхищаться: Que…!", "Say how amazing something is: Que…!"),
  ],
  vocabNote: t(
    "Muito перед словом меняется по роду и числу: muitos barcos, muitas ilhas. А перед прилагательным не меняется: muito bonito.",
    "Muito before a noun agrees with it: muitos barcos, muitas ilhas. Before an adjective it stays the same: muito bonito (very beautiful).",
  ),
  vocab: [
    v("ptpa5-1", "o barco", t("лодка", "the boat"),
      t("Яркая деревянная лодка у причала.", "A brightly painted wooden boat at the pier."),
      p("l5-1"), t("[у ба́рку]", "[oo BAR-koo]")),
    v("ptpa5-2", "Tem muitas ilhas.", t("Здесь много островов.", "There are lots of islands."),
      t("Залив с десятком зелёных островков.", "A bay dotted with little green islands."),
      p("l5-2"), t("[тейн му́йнтас и́льяс]", "[tayn MWEEN-tahs EEL-yahs]")),
    v("ptpa5-3", "as praias", t("пляжи", "the beaches"),
      t("Маленькие пляжи с белым песком между скал.", "Little white-sand beaches between the rocks."),
      p("l5-3"), t("[ас пра́йас]", "[ahs PRAH-yahs]")),
    v("ptpa5-4", "Olha os peixes!", t("Смотри, рыбы!", "Look at the fish!"),
      t("Мурзик свесился с борта, под водой — разноцветные рыбки.", "Murzik leans over the side; colourful fish swim below."),
      p("l5-4"), t("[о́лья ус пе́йшис]", "[OHL-yah oos PAY-shees]")),
    v("ptpa5-5", "Que água azul!", t("Какая синяя вода!", "What blue water!"),
      t("Прозрачная бирюзовая вода.", "Clear turquoise water."),
      p("l5-5"), t("[ки а́гуа азу́у]", "[kee AH-gwah ah-ZOO]")),
    v("ptpa5-6", "Eu não sei nadar.", t("Я не умею плавать.", "I can't swim."),
      t("Мурзик в надувном круге смущённо улыбается.", "Murzik in a rubber ring smiles sheepishly."),
      p("l5-6"), t("[е́у на́ун сей нада́р]", "[AY-oo nown say nah-DAR]")),
    v("ptpa5-7", "Poucas pessoas.", t("Мало людей.", "Not many people."),
      t("Почти пустой пляж: двое под зонтиком.", "An almost empty beach: just two people under an umbrella."),
      p("l5-7"), t("[по́кас песо́ас]", "[POH-kahs peh-SOH-ahs]")),
  ],
  dialogue: {
    title: t("Лодка по заливу", "A boat trip around the bay"),
    note: t(
      "Mergulhar — «нырять». Não tem problema — «не беда». Colete — «спасательный жилет».",
      "Mergulhar means “to dive”. Não tem problema means “no problem”. Colete (o colete) means “life jacket”.",
    ),
    lines: [
      line("bia", "Olha, Murzik! Tem muitas ilhas!", t("Смотри, Мурзик! Сколько островов!", "Look, Murzik! There are so many islands!")),
      line("murzik", "E as praias! Poucas pessoas… Que bonito!", t("А пляжи! Людей мало… Как красиво!", "And the beaches! Hardly anyone there… How beautiful!")),
      line("bia", "Que água azul! Vamos mergulhar?", t("Какая синяя вода! Нырнём?", "What blue water! Shall we dive in?")),
      line("murzik", "Eu não sei nadar…", t("Я не умею плавать…", "I can't swim…")),
      line("bia", "Não tem problema! Aqui está o colete.", t("Не беда! Вот спасательный жилет.", "No problem! Here's a life jacket.")),
      line("murzik", "Olha os peixes! Amarelos, azuis, vermelhos!", t("Смотри, рыбы! Жёлтые, синие, красные!", "Look at the fish! Yellow, blue, red!")),
    ],
    gist: choice("ptpa5-d1", t("Почему Мурзик не ныряет сразу?", "Why doesn't Murzik dive in straight away?"), [
      [t("Он не умеет плавать.", "He can't swim."), true],
      [t("Вода холодная.", "The water's cold."), false],
      [t("Он боится рыб.", "He's scared of the fish."), false],
    ]),
  },
  grammar: [
    g(
      t("Много: os, as и -s", "More than one: os, as and -s"),
      [
        t(
          "Во множественном числе артикль тоже получает -s: o barco — os barcos, a praia — as praias. Слово, артикль и прилагательное — все во множественном: as praias bonitas.",
          "In the plural, “the” gets an -s too: o barco — os barcos, a praia — as praias. The noun, “the” and any adjective all go plural together: as praias bonitas.",
        ),
        t(
          "Muito («много») и pouco («мало») ведут себя так же: muitos barcos, muitas ilhas, poucas pessoas.",
          "Muito (many) and pouco (few) work the same way: muitos barcos, muitas ilhas, poucas pessoas.",
        ),
      ],
      [
        ["os barcos, as ilhas", t("лодки, острова", "the boats, the islands")],
        ["Tem muitos peixes.", t("Здесь много рыб.", "There are lots of fish.")],
      ],
    ),
  ],
  tasks: [
    choice("ptpa5-t1", t("Как сказать «пляжи»? (a praia)", "How do you say “the beaches”? (a praia)"), [
      ["as praias", true],
      ["os praias", false],
      ["a praias", false],
    ], { skill: "grammar" }),
    listen("ptpa5-t2", t("Послушай. Что видит Биа?", "Listen. What does Bia see?"), "Tem muitas ilhas!", [
      [t("Много островов.", "Lots of islands."), true],
      [t("Много рыб.", "Lots of fish."), false],
      [t("Мало людей.", "Not many people."), false],
    ]),
    match("ptpa5-t3", PAIRS, [
      ["o barco", t("лодка", "the boat")],
      ["a ilha", t("остров", "the island")],
      ["o peixe", t("рыба", "the fish")],
      ["a praia", t("пляж", "the beach")],
    ], { skill: "words" }),
    spell("ptpa5-t4", t("Собери из букв слово «лодка».", "Spell the word for “boat”."), "barco"),
    speak("ptpa5-t5", "Você sabe nadar?", "Não, eu não sei nadar.", t("Нет, я не умею плавать.", "No, I can't swim."), {
      help: t("Ответь вслух про себя: умеешь ли ты плавать. Для «да» скажи Sim, eu sei nadar.", "Answer aloud about yourself. For “yes”, say Sim, eu sei nadar."),
    }),
    choice("ptpa5-t6", t("Кто такой Зека?", "Who is Zeca?"), [
      ["Ele é o cantor da banda.", true],
      ["Ele é estudante.", false],
      ["Ele é o dono do café.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "shells",
    itemName: t("Баночка с ракушками", "Jar of shells"),
    itemNameRu: "Conchas",
    ru: "Oba! Conchas!",
    en: t("Ура! Ракушки!", "Hooray! Shells!"),
    a11y: t("Стеклянная баночка, полная маленьких розовых и белых ракушек.", "A glass jar full of tiny pink and white shells."),
    image: p("shells"),
    steps: [
      t("На пустом пляже Мурзик собирает ракушки.", "On the empty beach Murzik collects shells."),
      t("Одна, две, десять… двадцать!", "One, two, ten… twenty!"),
      t("Биа даёт ему баночку.", "Bia gives him a jar."),
      t("Баночка встаёт у окна.", "The jar goes by the window."),
    ],
    bridge: t("Вечером Сеу Антониу зовёт их на ужин.", "In the evening Seu Antônio invites them to dinner."),
  },
};

const paraty6: Lesson = {
  id: "pt-a1-paraty-6",
  level: "A1",
  cityId: "pt-paraty",
  number: 6,
  title: t("O jantar — Ужин", "O jantar — Dinner"),
  minutes: 7,
  goals: [
    t("Назвать простую еду", "Name some simple food"),
    t("Сказать «и», «или», «но»", "Say “and”, “or” and “but”"),
    t("Сказать, что вкусно", "Say that something is tasty"),
  ],
  vocabNote: t(
    "Arroz e feijão — рис с фасолью, основа бразильского обеда. Их едят почти каждый день.",
    "Arroz e feijão — rice and beans — is the heart of a Brazilian meal. Most people eat it almost every day.",
  ),
  vocab: [
    v("ptpa6-1", "arroz e feijão", t("рис и фасоль", "rice and beans"),
      t("Тарелка с белым рисом и тёмной фасолью.", "A plate of white rice and dark beans."),
      p("l6-1"), t("[ахо́с и фейжа́ун]", "[ah-HOHS ee fay-ZHOWN]")),
    v("ptpa6-2", "o peixe frito", t("жареная рыба", "fried fish"),
      t("Золотистая жареная рыба с лимоном.", "Golden fried fish with lemon."),
      p("l6-2"), t("[у пе́йши фри́ту]", "[oo PAY-shee FREE-too]")),
    v("ptpa6-3", "uma salada", t("салат", "a salad"),
      t("Миска салата с помидорами.", "A bowl of salad with tomatoes."),
      p("l6-3"), t("[у́ма сала́да]", "[OO-mah sah-LAH-dah]")),
    v("ptpa6-4", "Uma água, por favor.", t("Воды, пожалуйста.", "Some water, please."),
      t("Мурзик протягивает пустой стакан.", "Murzik holds out an empty glass."),
      p("l6-4"), t("[у́ма а́гуа, пор фаво́р]", "[OO-mah AH-gwah, por fah-VOR]")),
    v("ptpa6-5", "Peixe ou frango?", t("Рыбу или курицу?", "Fish or chicken?"),
      t("Сеу Антониу держит две тарелки — с рыбой и с курицей.", "Seu Antônio holds two plates: one with fish, one with chicken."),
      p("l6-5"), t("[пе́йши оу фра́нгу]", "[PAY-shee oh FRAHN-goo]")),
    v("ptpa6-6", "Eu não como carne.", t("Я не ем мясо.", "I don't eat meat."),
      t("Биа вежливо отказывается от тарелки с мясом.", "Bia politely turns down a plate of meat."),
      p("l6-6"), t("[е́у на́ун ко́му ка́рни]", "[AY-oo nown KOH-moo KAR-nee]")),
    v("ptpa6-7", "Que gostoso!", t("Как вкусно!", "That's delicious!"),
      t("Мурзик блаженно облизывается.", "Murzik licks his lips blissfully."),
      p("l6-7"), t("[ки госто́зу]", "[kee gohs-TOH-zoo]")),
  ],
  dialogue: {
    title: t("Ужин у Сеу Антониу", "Dinner at Seu Antônio's"),
    note: t(
      "Bom apetite! — «Приятного аппетита!» Então — «тогда, значит».",
      "Bom apetite! means “Enjoy your meal!” Então means “so, then”.",
    ),
    lines: [
      line("antonio", "O jantar está pronto! Peixe ou frango?", t("Ужин готов! Рыбу или курицу?", "Dinner's ready! Fish or chicken?")),
      line("murzik", "Peixe, por favor!", t("Рыбу, пожалуйста!", "Fish, please!")),
      line("bia", "Eu não como carne. Peixe também não.", t("Я не ем мясо. И рыбу тоже.", "I don't eat meat. Or fish.")),
      line("antonio", "Então arroz, feijão e uma salada?", t("Тогда рис, фасоль и салат?", "Then rice, beans and a salad?")),
      line("bia", "Perfeito! E uma água, por favor.", t("Отлично! И воды, пожалуйста.", "Perfect! And some water, please.")),
      line("antonio", "Bom apetite!", t("Приятного аппетита!", "Enjoy your meal!")),
      line("murzik", "Que gostoso! O peixe é ótimo, mas o arroz é melhor!", t("Как вкусно! Рыба отличная, но рис ещё лучше!", "Delicious! The fish is great, but the rice is even better!")),
    ],
    gist: choice("ptpa6-d1", t("Что ест Биа?", "What does Bia eat?"), [
      [t("Рис, фасоль и салат.", "Rice, beans and a salad."), true],
      [t("Жареную рыбу.", "Fried fish."), false],
      [t("Курицу.", "Chicken."), false],
    ]),
  },
  grammar: [
    g(
      t("E, ou, mas — «и», «или», «но»", "E, ou, mas — and, or, but"),
      [
        t(
          "E — «и»: arroz e feijão. Ou — «или»: peixe ou frango? Mas — «но»: O peixe é ótimo, mas… Как в русском, только короче.",
          "E means “and”: arroz e feijão. Ou means “or”: peixe ou frango? Mas means “but”: O peixe é ótimo, mas… Easy — but don't confuse e (and) with é (is)!",
        ),
        t(
          "Também — «тоже», também não — «тоже не»: Peixe também não. — И рыбу тоже нет.",
          "Também means “too, also”, and também não means “not… either”: Peixe também não — “Not fish either”.",
        ),
      ],
      [
        ["Peixe ou frango?", t("Рыбу или курицу?", "Fish or chicken?")],
        ["Eu como peixe, mas não como carne.", t("Я ем рыбу, но не ем мясо.", "I eat fish, but I don't eat meat.")],
      ],
    ),
  ],
  tasks: [
    choice("ptpa6-t1", t("Как сказать «рис или салат»?", "How do you say “rice or salad”?"), [
      ["arroz ou salada", true],
      ["arroz é salada", false],
      ["arroz mas salada", false],
    ], { skill: "grammar" }),
    listen("ptpa6-t2", t("Послушай. Что не ест человек?", "Listen. What doesn't the person eat?"), "Eu não como carne.", [
      [t("Мясо.", "Meat."), true],
      [t("Рыбу.", "Fish."), false],
      [t("Рис.", "Rice."), false],
    ]),
    match("ptpa6-t3", PAIRS, [
      ["o arroz", t("рис", "rice")],
      ["o feijão", t("фасоль", "beans")],
      ["o frango", t("курица", "chicken")],
      ["a água", t("вода", "water")],
    ], { skill: "words" }),
    missing("ptpa6-t4", t("Какой буквы не хватает? («вода»)", "Which letter is missing? (“water”)"), "ág", "a", "u", ["u", "o", "w"]),
    speak("ptpa6-t5", "Peixe ou frango?", "Peixe, por favor!", t("Рыбу, пожалуйста!", "Fish, please!"), {
      help: t("Выбери вслух, что хочешь. Можно ответить Frango, por favor!", "Choose aloud. You could also say Frango, por favor!"),
    }),
    choice("ptpa6-t6", t("Как сказать «Здесь много островов»?", "How do you say “There are lots of islands”?"), [
      ["Tem muitas ilhas.", true],
      ["Tem muitos ilhas.", false],
      ["É muitas ilhas.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hat",
    itemName: t("Соломенная шляпа", "Straw hat"),
    itemNameRu: "Chapéu de palha",
    ru: "Oba! Um chapéu de palha!",
    en: t("Ура! Соломенная шляпа!", "Hooray! A straw hat!"),
    a11y: t("Маленькая соломенная шляпа с синей лентой висит на крючке.", "A small straw hat with a blue ribbon hangs on a hook."),
    image: p("hat"),
    steps: [
      t("После ужина Сеу Антониу приносит соломенную шляпу.", "After dinner Seu Antônio brings a straw hat."),
      t("«Para o sol do Brasil!» — «От бразильского солнца!»", "“Para o sol do Brasil!” — “For the Brazilian sun!”"),
      t("Мурзик примеряет её. Как раз!", "Murzik tries it on. A perfect fit!"),
      t("Шляпа висит у двери.", "The hat hangs by the door."),
    ],
    bridge: t("Утром Сеу Антониу вспоминает кое-что важное про попугая…", "In the morning Seu Antônio remembers something important about the parrot…"),
  },
};

const paraty7: Lesson = {
  id: "pt-a1-paraty-7",
  level: "A1",
  cityId: "pt-paraty",
  number: 7,
  title: t("Mais um café! — Ещё кофе!", "Mais um café! — Another coffee!"),
  minutes: 8,
  goals: [
    t("Сказать «ещё один»", "Say “another one”"),
    t("Попрощаться и пригласить снова", "Say goodbye and “come back soon”"),
    t("Вспомнить все слова Парати", "Review all the words from Paraty"),
  ],
  vocabNote: t(
    "Ele disse — «он сказал». Так в каждом городе мы будем узнавать, какую новую фразу выучил Пипока.",
    "Ele disse means “he said”. In every city we'll hear which new phrase Pipoca has picked up.",
  ),
  vocab: [
    v("ptpa7-1", "Mais um café!", t("Ещё (один) кофе!", "Another coffee!"),
      t("Зелёный попугай на стойке кафе поднимает лапу, как посетитель.", "A green parrot on the café counter raises a foot like a customer."),
      p("l7-1"), t("[майс ум кафэ́]", "[mice oom kah-FEH]")),
    v("ptpa7-2", "O papagaio!", t("Попугай!", "The parrot!"),
      t("Мурзик радостно показывает на фото попугая в телефоне.", "Murzik excitedly points at a photo of a parrot on a phone."),
      p("l7-2"), t("[у папага́йу]", "[oo pah-pah-GUY-oo]")),
    v("ptpa7-3", "Ele disse…", t("Он сказал…", "He said…"),
      t("Сеу Антониу смешно изображает попугая.", "Seu Antônio does a funny impression of the parrot."),
      p("l7-3"), t("[э́ли джи́си]", "[AY-lee JEE-see]")),
    v("ptpa7-4", "Eles estão em São Paulo.", t("Они в Сан-Паулу.", "They're in São Paulo."),
      t("Карта с линией от Парати до большого города.", "A map with a line from Paraty to a big city."),
      p("l7-4"), t("[э́лис иста́ун ейн са́ун па́улу]", "[AY-lees ees-TOWN ayn sown POW-loo]")),
    v("ptpa7-5", "Foi um prazer!", t("Было очень приятно!", "It was a pleasure!"),
      t("Сеу Антониу пожимает Мурзику лапу.", "Seu Antônio shakes Murzik's paw."),
      p("l7-5"), t("[фой ум празэ́р]", "[foy oom prah-ZEHR]")),
    v("ptpa7-6", "Volte sempre!", t("Приезжай ещё!", "Come back anytime!"),
      t("Хозяин кафе машет у двери.", "The café owner waves at the door."),
      p("l7-6"), t("[во́учи се́мпри]", "[VOHL-chee SEM-pree]")),
    v("ptpa7-7", "Até a próxima!", t("До следующего раза!", "Until next time!"),
      t("Мурзик и Биа с чемоданами машут с автобусной остановки.", "Murzik and Bia wave from the bus stop with their suitcases."),
      p("l7-7"), t("[атэ́ а про́сима]", "[ah-TEH ah PRAW-see-mah]")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Ficou — «остался, просидел». O dia todo — «целый день». Ah, o papagaio! Ele disse… — эту фразу мы будем слышать в каждом городе.",
      "Ficou means “stayed”. O dia todo means “all day”. Ah, o papagaio! Ele disse… — we'll hear this in every city.",
    ),
    lines: [
      line("antonio", "Ah, o papagaio! Ele ficou aqui no café o dia todo.", t("А, попугай! Он целый день просидел здесь, в кафе.", "Ah, the parrot! He spent the whole day here in the café.")),
      line("murzik", "E o que ele disse?", t("И что он сказал?", "And what did he say?")),
      line("antonio", "Ele disse: Mais um café! Mais um café!", t("Он говорил: «Ещё кофе! Ещё кофе!»", "He said: Another coffee! Another coffee!")),
      line("bia", "É o Pipoca! E agora? Onde eles estão?", t("Это Пипока! И где они теперь?", "That's Pipoca! So where are they now?")),
      line("antonio", "Eles estão em São Paulo.", t("Они в Сан-Паулу.", "They're in São Paulo.")),
      line("murzik", "Obrigado, Seu Antônio! Foi um prazer!", t("Спасибо, Сеу Антониу! Было очень приятно!", "Thank you, Seu Antônio! It was a pleasure!")),
      line("antonio", "Volte sempre! Até a próxima!", t("Приезжай ещё! До следующего раза!", "Come back anytime! Until next time!")),
    ],
    gist: choice("ptpa7-d1", t("Какую фразу выучил Пипока в Парати?", "What phrase did Pipoca learn in Paraty?"), [
      [t("«Ещё кофе!»", "“Another coffee!”"), true],
      [t("«Счёт, пожалуйста!»", "“The bill, please!”"), false],
      [t("«Как вкусно!»", "“Delicious!”"), false],
    ]),
  },
  grammar: [
    g(
      t("Mais — «ещё, больше»", "Mais — “more, another”"),
      [
        t(
          "Mais um café — «ещё один кофе», mais uma água — «ещё воды». Mais перед числом значит «ещё».",
          "Mais um café — “another coffee”, mais uma água — “another water”. Before a number, mais means “more” or “another”.",
        ),
        t(
          "А ещё mais значит «больше, более»: mais devagar — «помедленнее» (помнишь Рио?), mais bonito — «красивее».",
          "Mais also makes comparisons: mais devagar — “more slowly” (remember Rio?), mais bonito — “more beautiful”.",
        ),
      ],
      [
        ["Mais um suco, por favor.", t("Ещё один сок, пожалуйста.", "Another juice, please.")],
        ["Mais devagar, por favor.", t("Помедленнее, пожалуйста.", "More slowly, please.")],
      ],
    ),
  ],
  tasks: [
    listen("ptpa7-t1", t("Аудиоэкзамен. Что рассказывает Сеу Антониу?", "Audio exam. What does Seu Antônio tell them?"), "O papagaio ficou aqui no café. Ele disse: Mais um café! Agora eles estão em São Paulo.", [
      [t("Попугай был в кафе, а теперь группа в Сан-Паулу.", "The parrot was in the café, and now the band is in São Paulo."), true],
      [t("Попугай остался в Парати.", "The parrot stayed in Paraty."), false],
      [t("Группа вернулась в Рио.", "The band went back to Rio."), false],
    ]),
    choice("ptpa7-t2", t("Как попросить ещё один сок?", "How do you ask for another juice?"), [
      ["Mais um suco, por favor.", true],
      ["Só isso, obrigado.", false],
      ["Um suco sem açúcar.", false],
    ], { skill: "grammar" }),
    tf("ptpa7-t3", t("Volte sempre! — так говорят гостю на прощание.", "Volte sempre! is something you say to a guest when they leave."), true),
    missing("ptpa7-t4", t("Какой буквы не хватает? («попугай»)", "Which letter is missing? (“parrot”)"), "papa", "aio", "g", ["g", "j", "c"]),
    speak("ptpa7-t5", "Foi um prazer! Volte sempre!", "Obrigado! Até a próxima!", t("Спасибо! До следующего раза!", "Thank you! Until next time!"), {
      help: t("Попрощайся вслух. Можно сказать obrigado или obrigada.", "Say goodbye aloud — obrigado or obrigada."),
    }),
    script("ptpa7-t6", t("Вспомни весь Парати. Закончи разговор в кафе.", "Remember all of Paraty. Finish the conversation at the café."), [
      { speaker: ANTONIO, text: "Bom dia! O que você quer?" },
      { speaker: YOU, answer: "Eu queria um café, por favor.", options: ["Eu queria um café, por favor.", "Eu sou um café.", "Que pena!"] },
      { speaker: ANTONIO, text: "Com açúcar?" },
      { speaker: YOU, answer: "Sem açúcar, obrigado.", options: ["Sem açúcar, obrigado.", "Duas noites.", "Eles são músicos."] },
      { speaker: ANTONIO, text: "Mais alguma coisa?" },
      { speaker: YOU, answer: "Não, obrigado. A conta, por favor.", options: ["Não, obrigado. A conta, por favor.", "Aqui está a chave.", "Tem muitas ilhas."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-paraty",
    itemName: t("Фото Пипоки в кафе", "Photo of Pipoca at the café"),
    itemNameRu: "Foto do Pipoca no café",
    ru: "Oba! Uma foto do Pipoca!",
    en: t("Ура! Фото Пипоки!", "Hooray! A photo of Pipoca!"),
    a11y: t(
      "Фотография: зелёный попугай сидит на кофемашине в маленьком кафе, рядом смеётся Сеу Антониу.",
      "A photo: a green parrot perched on the coffee machine in a little café, with Seu Antônio laughing beside him.",
    ),
    image: p("photo"),
    steps: [
      t("Сеу Антониу достаёт телефон: «Olha!»", "Seu Antônio takes out his phone: “Olha!”"),
      t("На фото — Пипока на кофемашине!", "In the photo: Pipoca on the coffee machine!"),
      t("Сеу Антониу печатает его для альбома.", "Seu Antônio prints it for the album."),
      t("Подпись: «Mais um café!» Мурзик кладёт альбом в чемодан.", "Caption: “Mais um café!” Murzik puts the album in his suitcase."),
    ],
    bridge: t("Автобус в Сан-Паулу отходит через час.", "The bus to São Paulo leaves in an hour."),
  },
};

const story: CityStory = {
  home: {
    name: t("Комната двенадцать в гостинице", "Room twelve at the guesthouse"),
    nameRu: "O quarto doze da pousada",
    image: p("home"),
    a11y: t(
      "Простая белая комната в старой гостинице: деревянные ставни, за окном мостовая и белые домики с цветными дверями.",
      "A simple white room in an old guesthouse: wooden shutters, and outside a cobbled street and white houses with colourful doors.",
    ),
  },
  keepsakeId: "photo-paraty",
  welcomeRu: "Olá, Paraty!",
  welcomeEn: t("Привет, Парати!", "Hello, Paraty!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Мурзик и Биа идут с чемоданами по старой мостовой Парати. Белые домики с цветными дверями, вдали лодки у причала.",
    "Murzik and Bia walk with their suitcases along Paraty's old cobbled street. White houses with colourful doors, boats at the pier in the distance.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Сеу Антониу машет у двери своего кафе.", "Seu Antônio waves at the door of his café."),
  finale: [
    {
      image: p("photo"),
      a11y: t(
        "Мурзик вклеивает в альбом фото Пипоки на кофемашине и подписывает его.",
        "Murzik sticks the photo of Pipoca on the coffee machine into the album and writes a caption.",
      ),
      lines: [
        { en: t("Вторая страница альбома: Пипока в кафе Сеу Антониу.", "Page two of the album: Pipoca at Seu Antônio's café.") },
        { ru: "Mais um café!", en: t("Ещё кофе!", "Another coffee!") },
        { en: t("Пипока жив, здоров и, кажется, отлично проводит время.", "Pipoca is safe, well — and seems to be having a great time.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Paraty completo!", en: t("Парати пройден!", "Paraty complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Сеу Антониу машет на прощание.", "Seu Antônio waves goodbye."),
      lines: [
        { ru: "Tchau, Seu Antônio!", en: t("Пока, Сеу Антониу!", "Bye, Seu Antônio!") },
        { ru: "Próxima parada: São Paulo!", en: t("Следующая остановка: Сан-Паулу!", "Next stop: São Paulo!") },
      ],
    },
    {
      image: p("bus"),
      a11y: t("Автобус поднимается по горной дороге среди тропического леса.", "A bus climbs a mountain road through the rainforest."),
      lines: [{ ru: "Paraty → São Paulo", en: t("Парати → Сан-Паулу", "Paraty → São Paulo") }],
    },
    {
      image: pic("pt/saopaulo/arrival"),
      a11y: t(
        "Мурзик и Биа на широкой улице Сан-Паулу среди небоскрёбов. Вокруг спешат люди.",
        "Murzik and Bia on a wide São Paulo avenue among skyscrapers, with people hurrying all around.",
      ),
      lines: [
        { ru: "Olá, São Paulo!", en: t("Привет, Сан-Паулу!", "Hello, São Paulo!") },
        { ru: "Que cidade grande!", en: t("Какой огромный город!", "What a huge city!") },
      ],
    },
  ],
};

export const ptParaty = {
  id: "pt-paraty",
  name: t("Парати", "Paraty"),
  namePt: "Paraty",
  lessons: [paraty1, paraty2, paraty3, paraty4, paraty5, paraty6, paraty7],
  story,
};
