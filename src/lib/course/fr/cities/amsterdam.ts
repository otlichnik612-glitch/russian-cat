import type { CityPlan } from "../../types";

/** Amsterdam in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const amsterdamFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-amsterdam-1",
      "level": "A1",
      "cityId": "amsterdam",
      "number": 1,
      "title": "À pied ou à vélo ?",
      "minutes": 5,
      "goals": [
        "Demander où quelqu'un va",
        "Dire que tu y vas à pied ou à vélo",
        "Dire « Je rentre à la maison »"
      ],
      "vocabNote": "Là où le français n'a qu'un verbe « aller », le russe en a deux : иду, c'est à pied ; еду, c'est à vélo, en bus, en voiture ou en train.",
      "vocab": [
        {
          "id": "am1-1",
          "ru": "Куда ты идёшь?",
          "en": "Tu vas où ?",
          "a11y": "Tom croise Murzik sur un pont au-dessus d'un canal et lui fait un signe amical.",
          "audioLabel": "Écouter Куда ты идёшь",
          "image": "/art/amsterdam/1-1.jpg"
        },
        {
          "id": "am1-2",
          "ru": "Я иду домой.",
          "en": "Je rentre à la maison.",
          "a11y": "Murzik marche le long d'un canal vers une petite péniche à la fenêtre éclairée.",
          "audioLabel": "Écouter Я иду домой",
          "image": "/art/amsterdam/1-2.jpg"
        },
        {
          "id": "am1-3",
          "ru": "пешком",
          "en": "à pied",
          "a11y": "Murzik marche à grandes enjambées joyeuses ; gros plan sur ses pattes sur les vieux pavés.",
          "audioLabel": "Écouter пешком",
          "image": "/art/amsterdam/1-3.jpg"
        },
        {
          "id": "am1-4",
          "ru": "велосипед или машина",
          "en": "un vélo ou une voiture",
          "a11y": "Un grand vélo hollandais à côté d'une petite voiture rouge, dans une rue le long d'un canal.",
          "audioLabel": "Écouter велосипед или машина",
          "image": "/art/amsterdam/1-4b.jpg"
        },
        {
          "id": "am1-5",
          "ru": "Я еду на велосипеде.",
          "en": "J'y vais à vélo.",
          "a11y": "Tom roule à vélo le long d'un canal, son manteau vert au vent.",
          "audioLabel": "Écouter Я еду на велосипеде",
          "image": "/art/amsterdam/1-5.jpg"
        },
        {
          "id": "am1-6",
          "ru": "Пойдём пешком!",
          "en": "Allons-y à pied !",
          "a11y": "Murzik prend Tom par la main et montre une jolie rue au bord d'un canal.",
          "audioLabel": "Écouter Пойдём пешком",
          "image": "/art/amsterdam/1-6.jpg"
        },
        {
          "id": "am1-7",
          "ru": "Здесь все на велосипедах!",
          "en": "Ici, tout le monde est à vélo !",
          "a11y": "Une rue animée d'Amsterdam pleine de cyclistes ; Murzik regarde, les yeux écarquillés.",
          "audioLabel": "Écouter Здесь все на велосипедах",
          "image": "/art/amsterdam/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Une maison sur l'eau",
        "note": "На воде veut dire « sur l'eau ». Murzik et Tom vont habiter sur une péniche.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, куда мы идём?",
            "en": "Tom, on va où ?"
          },
          {
            "speaker": "tom",
            "ru": "Домой! Наш дом — на воде.",
            "en": "À la maison ! Notre maison est sur l'eau."
          },
          {
            "speaker": "murzik",
            "ru": "На воде? Ого! А это далеко?",
            "en": "Sur l'eau ? Ouah ! C'est loin ?"
          },
          {
            "speaker": "tom",
            "ru": "Нет, близко. Пойдём пешком!",
            "en": "Non, c'est tout près. Allons-y à pied !"
          },
          {
            "speaker": "murzik",
            "ru": "Смотри, здесь все на велосипедах!",
            "en": "Regarde, ici, tout le monde est à vélo !"
          },
          {
            "speaker": "tom",
            "ru": "Да! Завтра я еду на велосипеде. А ты?",
            "en": "Oui ! Demain, j'y vais à vélo. Et toi ?"
          },
          {
            "speaker": "murzik",
            "ru": "И я!",
            "en": "Moi aussi !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "am1-d1",
          "prompt": "Où est leur nouvelle maison ?",
          "options": [
            {
              "label": "Sur l'eau.",
              "correct": true
            },
            {
              "label": "À côté de la gare.",
              "correct": false
            },
            {
              "label": "Loin, en dehors de la ville.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Иду ou еду ?",
          "paragraphs": [
            "идти — aller à pied : я иду, ты идёшь. ехать — aller en véhicule : я еду, ты едешь.",
            "Я иду домой — Je rentre à pied à la maison. Я еду на велосипеде — J'y vais à vélo."
          ],
          "examples": [
            {
              "ru": "Я иду пешком.",
              "en": "J'y vais à pied."
            },
            {
              "ru": "Ты едешь на велосипеде?",
              "en": "Tu y vas à vélo ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "am1-t1",
          "prompt": "Écoute. Comment cette personne se déplace-t-elle ?",
          "skill": "listening",
          "audio": "Я еду на велосипеде.",
          "options": [
            {
              "label": "À vélo.",
              "correct": true
            },
            {
              "label": "À pied.",
              "correct": false
            },
            {
              "label": "En bus.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "am1-t2",
          "prompt": "Que veut dire пешком ?",
          "skill": "words",
          "options": [
            {
              "label": "à pied",
              "correct": true
            },
            {
              "label": "à vélo",
              "correct": false
            },
            {
              "label": "à la maison",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "am1-t3",
          "prompt": "Complète : « Je rentre à pied à la maison. »",
          "before": "Я",
          "after": "домой.",
          "answer": "иду",
          "options": [
            "иду",
            "еду",
            "идёшь"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "am1-t4",
          "prompt": "Forme le mot « à la maison » (vers la maison).",
          "word": "домой",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "am1-t5",
          "prompt": "Куда ты идёшь?",
          "model": "Я иду домой.",
          "modelEn": "Je rentre à la maison.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis à Tom que tu rentres à la maison."
        },
        {
          "kind": "choice",
          "id": "am1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Который час?",
          "options": [
            {
              "label": "Сейчас пять часов.",
              "correct": true
            },
            {
              "label": "Сегодня пятница.",
              "correct": false
            },
            {
              "label": "Через час.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "tulips",
        "itemName": "Tulipes",
        "itemNameRu": "Тюльпаны",
        "ru": "Ура! Тюльпаны на палубу!",
        "en": "Youpi ! Des tulipes pour le pont !",
        "a11y": "Murzik renifle une jardinière en bois pleine de tulipes rouges et jaunes sur le pont d'une petite péniche verte.",
        "image": "/art/amsterdam/reward-1.jpg",
        "steps": [
          "Un ami de Tom leur prête une petite péniche.",
          "La chambre de Murzik a un hublot juste au-dessus de l'eau.",
          "Sur le pont, il y a une jardinière de tulipes rouges et jaunes.",
          "Murzik les sent et éternue !"
        ],
        "bridge": "Demain, Barsik arrive de Rome ! Tout le monde veut faire du vélo ensemble."
      }
    },
    {
      "id": "a1-amsterdam-2",
      "level": "A1",
      "cityId": "amsterdam",
      "number": 2,
      "title": "Louer des vélos",
      "minutes": 5,
      "goals": [
        "Demander à louer un vélo",
        "Dire pour combien de temps",
        "Prévenir un ami : Attention !"
      ],
      "vocabNote": "Взять veut dire « prendre ». Dans un magasin ou une location, Можно взять…? veut dire « Je peux prendre / louer… ? ».",
      "vocab": [
        {
          "id": "am2-1",
          "ru": "Можно взять велосипед?",
          "en": "Je peux louer un vélo ?",
          "a11y": "Au comptoir d'un loueur de vélos, Tom montre une rangée de bicyclettes.",
          "audioLabel": "Écouter Можно взять велосипед",
          "image": "/art/amsterdam/2-1.jpg"
        },
        {
          "id": "am2-2",
          "ru": "На сколько?",
          "en": "Pour combien de temps ?",
          "a11y": "La loueuse lève les sourcils et tapote sa montre.",
          "audioLabel": "Écouter На сколько",
          "image": "/art/amsterdam/2-2.jpg"
        },
        {
          "id": "am2-3",
          "ru": "На один день.",
          "en": "Pour une journée.",
          "a11y": "Un soleil se lève à gauche et se couche à droite, et un vélo roule entre les deux.",
          "audioLabel": "Écouter На один день",
          "image": "/art/amsterdam/2-3.jpg"
        },
        {
          "id": "am2-4",
          "ru": "Вот ваш велосипед.",
          "en": "Voici votre vélo.",
          "a11y": "La loueuse pousse un vélo tout brillant vers Tom en souriant.",
          "audioLabel": "Écouter Вот ваш велосипед",
          "image": "/art/amsterdam/2-4.jpg"
        },
        {
          "id": "am2-5",
          "ru": "шлем",
          "en": "casque",
          "a11y": "Murzik met un casque de vélo rond et bleu, un peu trop grand pour lui.",
          "audioLabel": "Écouter шлем",
          "image": "/art/amsterdam/2-5.jpg"
        },
        {
          "id": "am2-6",
          "ru": "Осторожно!",
          "en": "Attention !",
          "a11y": "Murzik attrape le guidon de Barsik juste avant qu'il ne fonce dans un canal.",
          "audioLabel": "Écouter Осторожно",
          "image": "/art/amsterdam/2-6.jpg"
        },
        {
          "id": "am2-7",
          "ru": "Это легко!",
          "en": "C'est facile !",
          "a11y": "Murzik roule sur un petit vélo sans les mains, avec un grand sourire.",
          "audioLabel": "Écouter Это легко",
          "image": "/art/amsterdam/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Trois vélos",
        "note": "Три велосипеда — trois vélos. Трудно veut dire « difficile ».",
        "lines": [
          {
            "speaker": "seller",
            "ru": "Здравствуйте! Что вы хотите?",
            "en": "Bonjour ! Que désirez-vous ?"
          },
          {
            "speaker": "tom",
            "ru": "Можно взять три велосипеда?",
            "en": "On peut louer trois vélos ?"
          },
          {
            "speaker": "seller",
            "ru": "Конечно. На сколько?",
            "en": "Bien sûr. Pour combien de temps ?"
          },
          {
            "speaker": "tom",
            "ru": "На один день.",
            "en": "Pour une journée."
          },
          {
            "speaker": "seller",
            "ru": "Вот ваши велосипеды. И шлемы!",
            "en": "Voici vos vélos. Et des casques !"
          },
          {
            "speaker": "barsik",
            "ru": "Ой… Это трудно!",
            "en": "Oh… C'est difficile !"
          },
          {
            "speaker": "murzik",
            "ru": "Нет, Барсик, это легко! Осторожно!",
            "en": "Mais non, Barsik, c'est facile ! Attention !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "am2-d1",
          "prompt": "Pour combien de temps louent-ils les vélos ?",
          "options": [
            {
              "label": "Pour une journée.",
              "correct": true
            },
            {
              "label": "Pour une heure.",
              "correct": false
            },
            {
              "label": "Pour une semaine.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Pour combien de temps ? — на + durée",
          "paragraphs": [
            "На сколько? demande « pour combien de temps ? ». On répond avec на, comme « pour » : на один день, на час, на два часа.",
            "Souviens-toi de через à Berlin : через час, c'est « dans une heure » (à partir de maintenant). На час, c'est « pour une heure »."
          ],
          "examples": [
            {
              "ru": "Велосипед на два часа, пожалуйста.",
              "en": "Un vélo pour deux heures, s'il vous plaît."
            },
            {
              "ru": "На один день.",
              "en": "Pour une journée."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "am2-t1",
          "prompt": "Écoute. Pour combien de temps ?",
          "skill": "listening",
          "audio": "На два часа.",
          "options": [
            {
              "label": "Pour deux heures.",
              "correct": true
            },
            {
              "label": "Dans deux heures.",
              "correct": false
            },
            {
              "label": "À deux heures.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "am2-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "шлем",
              "right": "casque"
            },
            {
              "left": "Осторожно!",
              "right": "Attention !"
            },
            {
              "left": "Это легко!",
              "right": "C'est facile !"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "am2-t3",
          "prompt": "Comment dit-on « pour une journée » ?",
          "skill": "grammar",
          "options": [
            {
              "label": "на один день",
              "correct": true
            },
            {
              "label": "через один день",
              "correct": false
            },
            {
              "label": "в один день",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "am2-t4",
          "prompt": "Quelle lettre manque ? (casque)",
          "before": "ш",
          "after": "ем",
          "answer": "л",
          "options": [
            "л",
            "д",
            "м"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "am2-t5",
          "prompt": "Здравствуйте! Что вы хотите?",
          "model": "Можно взять велосипед на один день?",
          "modelEn": "Je peux louer un vélo pour une journée ?",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es chez un loueur de vélos. Demande un vélo pour une journée."
        },
        {
          "kind": "choice",
          "id": "am2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Давай пойдём в кино!",
          "options": [
            {
              "label": "Давай!",
              "correct": true
            },
            {
              "label": "Через час.",
              "correct": false
            },
            {
              "label": "Мы были в музее.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "fairy-lights",
        "itemName": "Guirlande lumineuse",
        "itemNameRu": "Гирлянда",
        "ru": "Ура! Гирлянда на палубу!",
        "en": "Youpi ! Une guirlande pour le pont !",
        "a11y": "Au crépuscule, une guirlande de petites lumières chaudes est accrochée le long de la rambarde de la péniche. Murzik et Barsik la regardent, tout contents.",
        "image": "/art/amsterdam/reward-2.jpg",
        "steps": [
          "Barsik apporte un cadeau de la part de tante Olia.",
          "C'est une longue guirlande de petites lumières.",
          "Ils l'accrochent le long du pont.",
          "Le soir, la péniche brille."
        ],
        "bridge": "Ils ont des vélos maintenant. Mais où aller en premier ?"
      }
    },
    {
      "id": "a1-amsterdam-3",
      "level": "A1",
      "cityId": "amsterdam",
      "number": 3,
      "title": "On va où ?",
      "minutes": 6,
      "goals": [
        "Demander où aller",
        "Dire où se trouve un lieu",
        "Dire « Ça m'est égal »"
      ],
      "vocabNote": "Куда? demande « où ? » avec un mouvement (vers où). Где? demande « où ? » pour un lieu. La terminaison du lieu change : в музей (au musée, on y va), в музее (au musée, on y est).",
      "vocab": [
        {
          "id": "am3-1",
          "ru": "Куда едем?",
          "en": "On va où ?",
          "a11y": "Murzik, Tom et Barsik sont sur leurs vélos à un carrefour et se regardent.",
          "audioLabel": "Écouter Куда едем",
          "image": "/art/amsterdam/3-1.jpg"
        },
        {
          "id": "am3-2",
          "ru": "В музей!",
          "en": "Au musée !",
          "a11y": "Murzik montre devant lui un grand bâtiment ancien avec des tours : un musée.",
          "audioLabel": "Écouter В музей",
          "image": "/art/amsterdam/3-2.jpg"
        },
        {
          "id": "am3-3",
          "ru": "Где музей?",
          "en": "Où est le musée ?",
          "a11y": "Tom regarde autour de lui sur une place, l'air interrogateur.",
          "audioLabel": "Écouter Где музей",
          "image": "/art/amsterdam/3-3.jpg"
        },
        {
          "id": "am3-4",
          "ru": "в центре",
          "en": "dans le centre",
          "a11y": "Un plan de ville tout simple, rond, avec un gros point rouge au milieu.",
          "audioLabel": "Écouter в центре",
          "image": "/art/amsterdam/3-4.jpg"
        },
        {
          "id": "am3-5",
          "ru": "Давай сначала в парк!",
          "en": "Allons d'abord au parc !",
          "a11y": "Barsik montre un parc vert avec des canards et un étang.",
          "audioLabel": "Écouter Давай сначала в парк",
          "image": "/art/amsterdam/3-5.jpg"
        },
        {
          "id": "am3-6",
          "ru": "А потом в музей.",
          "en": "Et ensuite au musée.",
          "a11y": "Une flèche va d'un parc vert vers un grand musée.",
          "audioLabel": "Écouter А потом в музей",
          "image": "/art/amsterdam/3-6.jpg"
        },
        {
          "id": "am3-7",
          "ru": "Мне всё равно.",
          "en": "Ça m'est égal.",
          "a11y": "Barsik hausse les épaules avec un sourire détendu et endormi.",
          "audioLabel": "Écouter Мне всё равно",
          "image": "/art/amsterdam/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le parc ou le musée ?",
        "note": "Я хочу есть veut dire « J'ai faim » — mot à mot « Je veux manger ».",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Ну, куда едем?",
            "en": "Alors, on va où ?"
          },
          {
            "speaker": "murzik",
            "ru": "В музей!",
            "en": "Au musée !"
          },
          {
            "speaker": "barsik",
            "ru": "А я хочу в парк.",
            "en": "Et moi, je veux aller au parc."
          },
          {
            "speaker": "tom",
            "ru": "А где музей?",
            "en": "Et où est le musée ?"
          },
          {
            "speaker": "murzik",
            "ru": "Музей в центре. Парк тоже в центре.",
            "en": "Le musée est dans le centre. Le parc aussi est dans le centre."
          },
          {
            "speaker": "tom",
            "ru": "Хорошо. Давай сначала в парк, а потом в музей.",
            "en": "D'accord. Allons d'abord au parc, et ensuite au musée."
          },
          {
            "speaker": "barsik",
            "ru": "Мне всё равно. Я хочу есть!",
            "en": "Ça m'est égal. J'ai faim !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "am3-d1",
          "prompt": "Où vont-ils en premier ?",
          "options": [
            {
              "label": "Au parc.",
              "correct": true
            },
            {
              "label": "Au musée.",
              "correct": false
            },
            {
              "label": "À la maison.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Куда? et Где?",
          "paragraphs": [
            "Куда? (vers où ?) → в музей, в парк, в кафе. Где? (où ?) → в музее, в парке, в центре. En français, « au parc » sert pour les deux ; en russe, non !",
            "Après где, la plupart des lieux finissent par -е : парк → в парке, центр → в центре, музей → в музее."
          ],
          "examples": [
            {
              "ru": "Мы едем в парк.",
              "en": "Nous allons au parc."
            },
            {
              "ru": "Мы в парке.",
              "en": "Nous sommes au parc."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "am3-t1",
          "prompt": "Écoute. Où est le musée ?",
          "skill": "listening",
          "audio": "Музей в центре.",
          "options": [
            {
              "label": "Dans le centre.",
              "correct": true
            },
            {
              "label": "Dans le parc.",
              "correct": false
            },
            {
              "label": "À côté de la gare.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "am3-t2",
          "prompt": "Tes amis n'arrivent pas à choisir : le parc ou le musée ? Les deux te vont. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Мне всё равно.",
              "correct": true
            },
            {
              "label": "Это трудно!",
              "correct": false
            },
            {
              "label": "Осторожно!",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "am3-t3",
          "prompt": "Complète : « Nous allons au parc. »",
          "before": "Мы едем в",
          "after": ".",
          "answer": "парк",
          "options": [
            "парк",
            "парке",
            "парка"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "am3-t4",
          "prompt": "Forme le mot « musée ».",
          "word": "музей",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "am3-t5",
          "prompt": "Куда едем?",
          "model": "Давай сначала в парк!",
          "modelEn": "Allons d'abord au parc !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Choisis : le parc ou le musée. Dis où tu veux aller en premier."
        },
        {
          "kind": "choice",
          "id": "am3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Какой сегодня день?",
          "options": [
            {
              "label": "Сегодня суббота.",
              "correct": true
            },
            {
              "label": "В центре.",
              "correct": false
            },
            {
              "label": "На один день.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "picnic-basket",
        "itemName": "Panier de pique-nique",
        "itemNameRu": "Корзинка",
        "ru": "Ура! Корзинка для пикника!",
        "en": "Youpi ! Un panier de pique-nique !",
        "a11y": "Sur le pont de la péniche, Murzik tient un panier de pique-nique en osier avec une nappe à carreaux. Barsik jette un œil dedans, en espérant y trouver à manger.",
        "image": "/art/amsterdam/reward-3.jpg",
        "steps": [
          "Au parc, ils pique-niquent.",
          "Barsik mange presque tout.",
          "Tom achète un petit panier en osier.",
          "Maintenant, Murzik le garde sur le pont."
        ],
        "bridge": "Après le pique-nique, place au musée. Tom a son appareil photo à la main…"
      }
    },
    {
      "id": "a1-amsterdam-4",
      "level": "A1",
      "cityId": "amsterdam",
      "number": 4,
      "title": "Au musée",
      "minutes": 6,
      "goals": [
        "Acheter des billets de musée",
        "Demander si on peut prendre des photos",
        "Comprendre « c'est interdit »"
      ],
      "vocabNote": "Можно veut dire « on peut / c'est permis ». Нельзя veut dire « on ne peut pas / c'est interdit ». Касса, c'est la billetterie.",
      "vocab": [
        {
          "id": "am4-1",
          "ru": "Где касса?",
          "en": "Où est la billetterie ?",
          "a11y": "Murzik regarde autour de lui dans un grand hall de musée, l'air interrogateur.",
          "audioLabel": "Écouter Где касса",
          "image": "/art/amsterdam/4-1.jpg"
        },
        {
          "id": "am4-2",
          "ru": "Три билета, пожалуйста.",
          "en": "Trois billets, s'il vous plaît.",
          "a11y": "Tom montre trois doigts au guichet.",
          "audioLabel": "Écouter Три билета, пожалуйста",
          "image": "/art/amsterdam/4-2.jpg"
        },
        {
          "id": "am4-3",
          "ru": "Сколько стоит билет?",
          "en": "Combien coûte un billet ?",
          "a11y": "Tom tient un billet et regarde le tableau des prix, l'air interrogateur.",
          "audioLabel": "Écouter Сколько стоит билет",
          "image": "/art/amsterdam/4-3.jpg"
        },
        {
          "id": "am4-4",
          "ru": "Можно фотографировать?",
          "en": "On peut prendre des photos ?",
          "a11y": "Tom lève son appareil photo et regarde un gardien du musée, plein d'espoir.",
          "audioLabel": "Écouter Можно фотографировать",
          "image": "/art/amsterdam/4-4.jpg"
        },
        {
          "id": "am4-5",
          "ru": "Здесь нельзя.",
          "en": "Ici, c'est interdit.",
          "a11y": "Un gardien agite gentiment le doigt à côté d'un panneau montrant un appareil photo barré.",
          "audioLabel": "Écouter Здесь нельзя",
          "image": "/art/amsterdam/4-5.jpg"
        },
        {
          "id": "am4-6",
          "ru": "Можно.",
          "en": "On peut. / C'est permis.",
          "a11y": "Un gardien sourit et hoche la tête, la main ouverte.",
          "audioLabel": "Écouter Можно",
          "image": "/art/amsterdam/4-6.jpg"
        },
        {
          "id": "am4-7",
          "ru": "Какая красота!",
          "en": "Que c'est beau !",
          "a11y": "Murzik, émerveillé, est devant un grand tableau d'un moulin au coucher du soleil.",
          "audioLabel": "Écouter Какая красота",
          "image": "/art/amsterdam/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Pas de photos !",
        "note": "Ладно veut dire « bon, d'accord » (un peu déçu). Мельница, c'est un moulin.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Здравствуйте! Три билета, пожалуйста. Сколько стоит билет?",
            "en": "Bonjour ! Trois billets, s'il vous plaît. Combien coûte un billet ?"
          },
          {
            "speaker": "cashier",
            "ru": "Двадцать евро.",
            "en": "Vingt euros."
          },
          {
            "speaker": "tom",
            "ru": "Вот, пожалуйста. А можно фотографировать?",
            "en": "Voici. Et on peut prendre des photos ?"
          },
          {
            "speaker": "cashier",
            "ru": "Нет, здесь нельзя.",
            "en": "Non, ici, c'est interdit."
          },
          {
            "speaker": "tom",
            "ru": "Ох… Ладно.",
            "en": "Oh… Bon, d'accord."
          },
          {
            "speaker": "murzik",
            "ru": "Том, смотри! Мельница! Какая красота!",
            "en": "Tom, regarde ! Un moulin ! Que c'est beau !"
          },
          {
            "speaker": "barsik",
            "ru": "А где здесь кафе?",
            "en": "Et où est le café, ici ?"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "am4-d1",
          "prompt": "Tom peut-il prendre des photos au musée ?",
          "options": [
            {
              "label": "Non, c'est interdit.",
              "correct": true
            },
            {
              "label": "Oui, partout.",
              "correct": false
            },
            {
              "label": "Oui, mais seulement des moulins.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Можно et нельзя + verbe",
          "paragraphs": [
            "Можно + verbe : Можно фотографировать? — Je peux prendre des photos ? Нельзя + verbe : Здесь нельзя фотографировать.",
            "La réponse peut tenir en un mot : Можно! ou Нельзя."
          ],
          "examples": [
            {
              "ru": "Здесь нельзя есть.",
              "en": "On ne peut pas manger ici."
            },
            {
              "ru": "Можно взять велосипед?",
              "en": "Je peux louer un vélo ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "am4-t1",
          "prompt": "Écoute. Combien coûte un billet ?",
          "skill": "listening",
          "audio": "Билет стоит двадцать евро.",
          "options": [
            {
              "label": "20 euros",
              "correct": true
            },
            {
              "label": "50 euros",
              "correct": false
            },
            {
              "label": "2 euros",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "am4-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "касса",
              "right": "billetterie"
            },
            {
              "left": "Можно.",
              "right": "C'est permis."
            },
            {
              "left": "Нельзя.",
              "right": "C'est interdit."
            }
          ]
        },
        {
          "kind": "choice",
          "id": "am4-t3",
          "prompt": "Un panneau montre un appareil photo barré. Qu'est-ce que ça veut dire ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Здесь нельзя фотографировать.",
              "correct": true
            },
            {
              "label": "Здесь можно фотографировать.",
              "correct": false
            },
            {
              "label": "Здесь нельзя есть.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "am4-t4",
          "prompt": "Quelle lettre manque ? (billetterie)",
          "before": "ка",
          "after": "са",
          "answer": "с",
          "options": [
            "с",
            "ш",
            "з"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "am4-t5",
          "prompt": "Сколько билетов?",
          "model": "Три билета, пожалуйста.",
          "modelEn": "Trois billets, s'il vous plaît.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es à la billetterie avec deux amis. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "am4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Где вы были вчера?",
          "options": [
            {
              "label": "Мы были в музее.",
              "correct": true
            },
            {
              "label": "Мы едем в парк.",
              "correct": false
            },
            {
              "label": "Через час.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "windmill-print",
        "itemName": "Tableau de moulin",
        "itemNameRu": "Картина",
        "ru": "Ура! Картина с мельницей!",
        "en": "Youpi ! Un tableau avec un moulin !",
        "a11y": "Murzik accroche un petit tableau encadré d'un moulin au coucher du soleil au-dessus du hublot de sa chambre, sur la péniche.",
        "image": "/art/amsterdam/reward-4.jpg",
        "steps": [
          "À la boutique du musée, il y a des reproductions des tableaux.",
          "Murzik trouve un petit tableau avec un moulin.",
          "Tom le lui achète.",
          "Il est accroché au-dessus du hublot."
        ],
        "bridge": "Maintenant, Murzik veut voir de vrais moulins. Demain, ils sortiront de la ville avec une carte."
      }
    },
    {
      "id": "a1-amsterdam-5",
      "level": "A1",
      "cityId": "amsterdam",
      "number": 5,
      "title": "Montrez-moi sur la carte",
      "minutes": 6,
      "goals": [
        "Demander « Où sommes-nous ? »",
        "Demander à quelqu'un de montrer sur une carte",
        "Comprendre ici, là-bas et tout près"
      ],
      "vocabNote": "Покажите est le « Montrez(-moi) » poli. Нам туда veut dire mot à mot « Pour nous — par là » : « Il faut aller par là ».",
      "vocab": [
        {
          "id": "am5-1",
          "ru": "Где мы?",
          "en": "Où sommes-nous ?",
          "a11y": "Sur leurs vélos, Murzik, Tom et Barsik regardent une grande carte en papier, perplexes.",
          "audioLabel": "Écouter Где мы",
          "image": "/art/amsterdam/5-1.jpg"
        },
        {
          "id": "am5-2",
          "ru": "Мы здесь.",
          "en": "Nous sommes ici.",
          "a11y": "La patte de Murzik montre un point rouge sur une carte en papier.",
          "audioLabel": "Écouter Мы здесь",
          "image": "/art/amsterdam/5-2.jpg"
        },
        {
          "id": "am5-3",
          "ru": "Покажите на карте, пожалуйста.",
          "en": "Montrez-moi sur la carte, s'il vous plaît.",
          "a11y": "Tom tend une carte à une femme sympathique à vélo.",
          "audioLabel": "Écouter Покажите на карте, пожалуйста",
          "image": "/art/amsterdam/5-3.jpg"
        },
        {
          "id": "am5-4",
          "ru": "Вот здесь.",
          "en": "Juste ici.",
          "a11y": "Le doigt d'une femme touche un endroit sur la carte ; Tom se penche pour regarder.",
          "audioLabel": "Écouter Вот здесь",
          "image": "/art/amsterdam/5-4.jpg"
        },
        {
          "id": "am5-5",
          "ru": "там",
          "en": "là-bas",
          "a11y": "Murzik montre au loin, au-delà des champs verts, un moulin.",
          "audioLabel": "Écouter там",
          "image": "/art/amsterdam/5-5.jpg"
        },
        {
          "id": "am5-6",
          "ru": "рядом",
          "en": "tout près",
          "a11y": "Un moulin se dresse tout près, juste derrière Murzik et son vélo.",
          "audioLabel": "Écouter рядом",
          "image": "/art/amsterdam/5-6.jpg"
        },
        {
          "id": "am5-7",
          "ru": "Нам туда!",
          "en": "Il faut aller par là !",
          "a11y": "Sur son vélo, Murzik montre un chemin de campagne d'un grand geste, comme une flèche.",
          "audioLabel": "Écouter Нам туда",
          "image": "/art/amsterdam/5-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Où sont les moulins ?",
        "note": "Мельницы — les moulins. Ура!, tu le connais grâce à chaque récompense.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, где мы?",
            "en": "Murzik, où sommes-nous ?"
          },
          {
            "speaker": "murzik",
            "ru": "Не знаю… Барсик, где карта?",
            "en": "Je ne sais pas… Barsik, où est la carte ?"
          },
          {
            "speaker": "barsik",
            "ru": "Вот карта!",
            "en": "Voilà la carte !"
          },
          {
            "speaker": "tom",
            "ru": "Извините, где мы? Покажите на карте, пожалуйста.",
            "en": "Excusez-moi, où sommes-nous ? Montrez-moi sur la carte, s'il vous plaît."
          },
          {
            "speaker": "passerby",
            "ru": "Вот здесь. А мельницы там, рядом.",
            "en": "Juste ici. Et les moulins sont là-bas, tout près."
          },
          {
            "speaker": "tom",
            "ru": "Спасибо! Нам туда!",
            "en": "Merci ! Il faut aller par là !"
          },
          {
            "speaker": "murzik",
            "ru": "Ура! Мельницы!",
            "en": "Youpi ! Des moulins !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "am5-d1",
          "prompt": "Où sont les moulins ?",
          "options": [
            {
              "label": "Tout près.",
              "correct": true
            },
            {
              "label": "Très loin.",
              "correct": false
            },
            {
              "label": "Au musée.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Здесь, там, туда",
          "paragraphs": [
            "Где? (où ?) → здесь (ici), там (là-bas), рядом (tout près).",
            "Куда? (vers où ?) → туда (par là, là-bas), сюда (par ici). Иди сюда! — Viens ici !"
          ],
          "examples": [
            {
              "ru": "Мельница там.",
              "en": "Le moulin est là-bas."
            },
            {
              "ru": "Нам туда.",
              "en": "Il faut aller par là."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "am5-t1",
          "prompt": "Écoute. Où est le moulin ?",
          "skill": "listening",
          "audio": "Мельница рядом.",
          "options": [
            {
              "label": "Tout près.",
              "correct": true
            },
            {
              "label": "Loin.",
              "correct": false
            },
            {
              "label": "Dans le centre.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "am5-t2",
          "prompt": "Que veut dire там ?",
          "skill": "words",
          "options": [
            {
              "label": "là-bas",
              "correct": true
            },
            {
              "label": "ici",
              "correct": false
            },
            {
              "label": "tout près",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "am5-t3",
          "prompt": "Complète : « Il faut aller par là ! »",
          "before": "Нам",
          "after": "!",
          "answer": "туда",
          "options": [
            "туда",
            "там",
            "здесь"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "am5-t4",
          "prompt": "Forme le mot « carte ».",
          "word": "карта",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "am5-t5",
          "prompt": "Где мы?",
          "model": "Мы здесь.",
          "modelEn": "Nous sommes ici.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Montre la carte et réponds."
        },
        {
          "kind": "choice",
          "id": "am5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Куда едем?",
          "options": [
            {
              "label": "В музей!",
              "correct": true
            },
            {
              "label": "В музее.",
              "correct": false
            },
            {
              "label": "Мне холодно.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "stove",
        "itemName": "Petit poêle",
        "itemNameRu": "Печка",
        "ru": "Ура! Тёплая печка!",
        "en": "Youpi ! Un petit poêle bien chaud !",
        "a11y": "Un petit poêle à bois, rond et noir, rougeoie dans le coin de la chambre de la péniche. Murzik se réchauffe les pattes devant.",
        "image": "/art/amsterdam/reward-5.jpg",
        "steps": [
          "Le soir, il fait froid sur l'eau.",
          "Tom trouve un vieux petit poêle dans le placard.",
          "Il l'allume.",
          "Murzik se réchauffe les pattes et ronronne."
        ],
        "bridge": "Le dernier jour complet. Ils veulent faire du vélo le long des canaux — cette fois sans carte."
      }
    },
    {
      "id": "a1-amsterdam-6",
      "level": "A1",
      "cityId": "amsterdam",
      "number": 6,
      "title": "On s'est perdus !",
      "minutes": 6,
      "goals": [
        "Dire qu'on s'est perdu",
        "Demander de l'aide",
        "Rassurer un ami"
      ],
      "vocabNote": "Мы заблудились est la forme du passé pour « nous », la même pour tout le monde. Телефон сел veut dire mot à mot « le téléphone s'est assis » : la batterie est à plat !",
      "vocab": [
        {
          "id": "am6-1",
          "ru": "Мы заблудились!",
          "en": "On s'est perdus !",
          "a11y": "Murzik, Tom et Barsik, avec leurs vélos, sont au milieu d'un labyrinthe de rues et de canaux tous pareils, l'air inquiet.",
          "audioLabel": "Écouter Мы заблудились",
          "image": "/art/amsterdam/6-1.jpg"
        },
        {
          "id": "am6-2",
          "ru": "Помогите, пожалуйста!",
          "en": "Aidez-nous, s'il vous plaît !",
          "a11y": "Barsik lève les deux pattes et appelle, l'air inquiet.",
          "audioLabel": "Écouter Помогите, пожалуйста",
          "image": "/art/amsterdam/6-2.jpg"
        },
        {
          "id": "am6-3",
          "ru": "Как называется эта улица?",
          "en": "Comment s'appelle cette rue ?",
          "a11y": "Murzik lève les yeux vers un coin de rue, perplexe ; la plaque est vide.",
          "audioLabel": "Écouter Как называется эта улица",
          "image": "/art/amsterdam/6-3.jpg"
        },
        {
          "id": "am6-4",
          "ru": "Не волнуйся!",
          "en": "Ne t'inquiète pas !",
          "a11y": "Tom pose une main rassurante sur l'épaule de Barsik et sourit.",
          "audioLabel": "Écouter Не волнуйся",
          "image": "/art/amsterdam/6-4.jpg"
        },
        {
          "id": "am6-5",
          "ru": "Телефон сел.",
          "en": "Le téléphone est à plat.",
          "a11y": "Tom regarde tristement son téléphone : l'écran montre une batterie vide.",
          "audioLabel": "Écouter Телефон сел",
          "image": "/art/amsterdam/6-5.jpg"
        },
        {
          "id": "am6-6",
          "ru": "Вон там!",
          "en": "Là-bas !",
          "a11y": "Sur un petit pont au-dessus d'un canal, un gentil vieux chat blanc en chapeau gris sourit et montre le canal du doigt.",
          "audioLabel": "Écouter Вон там",
          "image": "/art/amsterdam/6-6.jpg"
        },
        {
          "id": "am6-7",
          "ru": "Спасибо за помощь!",
          "en": "Merci pour votre aide !",
          "a11y": "Murzik fait signe et crie merci vers un petit pont.",
          "audioLabel": "Écouter Спасибо за помощь",
          "image": "/art/amsterdam/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le chat sur le pont",
        "note": "Он показывает veut dire « il montre ». Наш канал — notre canal.",
        "lines": [
          {
            "speaker": "barsik",
            "ru": "Мурзик, где мы?",
            "en": "Murzik, où sommes-nous ?"
          },
          {
            "speaker": "murzik",
            "ru": "Не знаю… Мы заблудились!",
            "en": "Je ne sais pas… On s'est perdus !"
          },
          {
            "speaker": "tom",
            "ru": "Не волнуйся! Есть телефон… Ой. Телефон сел.",
            "en": "Ne t'inquiète pas ! J'ai mon téléphone… Oh. Le téléphone est à plat."
          },
          {
            "speaker": "murzik",
            "ru": "Как называется эта улица?",
            "en": "Comment s'appelle cette rue ?"
          },
          {
            "speaker": "barsik",
            "ru": "Не знаю! Помогите!",
            "en": "Je ne sais pas ! Au secours !"
          },
          {
            "speaker": "murzik",
            "ru": "Смотрите, кот в шляпе! Он показывает — вон там!",
            "en": "Regarde, un chat en chapeau ! Il montre quelque chose — là-bas !"
          },
          {
            "speaker": "tom",
            "ru": "Вон там наш канал! Спасибо за помощь!",
            "en": "Notre canal est là-bas ! Merci pour votre aide !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "am6-d1",
          "prompt": "Qui les aide ?",
          "options": [
            {
              "label": "Un chat en chapeau.",
              "correct": true
            },
            {
              "label": "Un policier.",
              "correct": false
            },
            {
              "label": "Le téléphone de Tom.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Помоги! et Помогите!",
          "paragraphs": [
            "Tu connais la règle du -те depuis Rome. À un ami : Помоги! Не волнуйся! À un inconnu ou à plusieurs personnes : Помогите! Не волнуйтесь!",
            "Не + verbe veut dire « Ne… pas ! » : Не волнуйся! — Ne t'inquiète pas !"
          ],
          "examples": [
            {
              "ru": "Помогите, пожалуйста!",
              "en": "Aidez-moi, s'il vous plaît ! (poli)"
            },
            {
              "ru": "Не волнуйтесь!",
              "en": "Ne vous inquiétez pas ! (poli ou à plusieurs)"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "am6-t1",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "listening",
          "audio": "Мы заблудились!",
          "options": [
            {
              "label": "Мы заблудились!",
              "correct": true
            },
            {
              "label": "Мы опоздали!",
              "correct": false
            },
            {
              "label": "Мы проспали.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "am6-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Телефон сел.",
              "right": "Le téléphone est à plat."
            },
            {
              "left": "Вон там!",
              "right": "Là-bas !"
            },
            {
              "left": "Не волнуйся!",
              "right": "Ne t'inquiète pas !"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "am6-t3",
          "prompt": "Tu t'es perdu et tu demandes de l'aide à un inconnu. Que dis-tu ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Помогите, пожалуйста!",
              "correct": true
            },
            {
              "label": "Помоги, пожалуйста!",
              "correct": false
            },
            {
              "label": "Не волнуйся!",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "am6-t4",
          "prompt": "Quelle lettre manque ? (rue)",
          "before": "ул",
          "after": "ца",
          "answer": "и",
          "options": [
            "и",
            "ы",
            "е"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "am6-t5",
          "prompt": "Мы заблудились!",
          "model": "Не волнуйся! Вон там!",
          "modelEn": "Ne t'inquiète pas ! Là-bas !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Ton ami panique. Rassure-le et montre-lui le chemin."
        },
        {
          "kind": "choice",
          "id": "am6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Где мы?",
          "options": [
            {
              "label": "Мы здесь.",
              "correct": true
            },
            {
              "label": "Нам туда.",
              "correct": false
            },
            {
              "label": "Можно.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "fishing-rod",
        "itemName": "Canne à pêche",
        "itemNameRu": "Удочка",
        "ru": "Ура! У меня удочка!",
        "en": "Youpi ! J'ai une canne à pêche !",
        "a11y": "Murzik est assis sur le pont de la péniche, une petite canne à pêche en bois au-dessus du canal, tout souriant.",
        "image": "/art/amsterdam/reward-6.jpg",
        "steps": [
          "Quand ils regardent à nouveau vers le pont, le chat au chapeau a disparu.",
          "De retour au canal, un vieux pêcheur range ses affaires.",
          "Il donne à Murzik sa vieille canne à pêche : « Pour le chat de la péniche ! »",
          "Murzik s'assoit sur le pont et pêche."
        ],
        "bridge": "Demain, Barsik rentre à Rome. Une dernière soirée ensemble sur le bateau."
      }
    },
    {
      "id": "a1-amsterdam-7",
      "level": "A1",
      "cityId": "amsterdam",
      "number": 7,
      "title": "La dernière soirée",
      "minutes": 7,
      "goals": [
        "Dire que tu es fatigué et que c'était amusant",
        "Dire « Tu vas me manquer »",
        "Comprendre un chemin à l'oral"
      ],
      "vocabNote": "Я буду скучать veut dire « Tu vas me manquer » — mot à mot « Je vais m'ennuyer (sans toi) ». C'est la même forme pour tout le monde.",
      "vocab": [
        {
          "id": "am7-1",
          "ru": "Мы устали.",
          "en": "On est fatigués.",
          "a11y": "Murzik, Tom et Barsik s'affalent, heureux, sur des coussins sur le pont, sous la guirlande lumineuse.",
          "audioLabel": "Écouter Мы устали",
          "image": "/art/amsterdam/7-1.jpg"
        },
        {
          "id": "am7-2",
          "ru": "Какой день!",
          "en": "Quelle journée !",
          "a11y": "Murzik lève les pattes en l'air et rit en repensant à la journée.",
          "audioLabel": "Écouter Какой день",
          "image": "/art/amsterdam/7-2.jpg"
        },
        {
          "id": "am7-3",
          "ru": "Было весело!",
          "en": "C'était amusant !",
          "a11y": "Murzik, Tom et Barsik rient ensemble sur le pont.",
          "audioLabel": "Écouter Было весело",
          "image": "/art/amsterdam/7-3.jpg"
        },
        {
          "id": "am7-4",
          "ru": "Я буду скучать.",
          "en": "Tu vas me manquer.",
          "a11y": "Murzik serre Barsik très fort ; ils ont tous les deux un doux sourire un peu triste.",
          "audioLabel": "Écouter Я буду скучать",
          "image": "/art/amsterdam/7-4.jpg"
        },
        {
          "id": "am7-5",
          "ru": "Приезжай в гости!",
          "en": "Viens me voir !",
          "a11y": "Barsik fait un signe d'invitation de la patte ; dans une petite bulle de pensée, les toits de Rome.",
          "audioLabel": "Écouter Приезжай в гости",
          "image": "/art/amsterdam/7-5.jpg"
        },
        {
          "id": "am7-6",
          "ru": "Обязательно!",
          "en": "Promis !",
          "a11y": "Murzik hoche fermement la tête avec un grand sourire, la patte sur le cœur.",
          "audioLabel": "Écouter Обязательно",
          "image": "/art/amsterdam/7-6.jpg"
        },
        {
          "id": "am7-7",
          "ru": "Спокойной ночи!",
          "en": "Bonne nuit !",
          "a11y": "La péniche la nuit, avec la lune au-dessus du canal et un seul hublot éclairé.",
          "audioLabel": "Écouter Спокойной ночи",
          "image": "/art/amsterdam/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Sur le pont, la nuit",
        "note": "Не проспи! veut dire « Ne rate pas ton réveil ! » — tu te souviens de Berlin ? Друзья — les amis.",
        "lines": [
          {
            "speaker": "barsik",
            "ru": "Ох, мы устали. Какой день!",
            "en": "Oh, on est fatigués. Quelle journée !"
          },
          {
            "speaker": "murzik",
            "ru": "Было весело! Барсик, я буду скучать.",
            "en": "C'était amusant ! Barsik, tu vas me manquer."
          },
          {
            "speaker": "barsik",
            "ru": "И я. Приезжай в гости!",
            "en": "Toi aussi. Viens me voir !"
          },
          {
            "speaker": "murzik",
            "ru": "Обязательно!",
            "en": "Promis !"
          },
          {
            "speaker": "tom",
            "ru": "Барсик, твой поезд завтра в девять. Не проспи!",
            "en": "Barsik, ton train est demain à neuf heures. Ne rate pas ton réveil !"
          },
          {
            "speaker": "barsik",
            "ru": "У Мурзика есть будильник!",
            "en": "Murzik a un réveil !"
          },
          {
            "speaker": "tom",
            "ru": "Спокойной ночи, друзья!",
            "en": "Bonne nuit, les amis !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "am7-d1",
          "prompt": "Quand est le train de Barsik ?",
          "options": [
            {
              "label": "Demain à neuf heures.",
              "correct": true
            },
            {
              "label": "Ce soir à neuf heures.",
              "correct": false
            },
            {
              "label": "Demain à sept heures.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Было + mot : c'était…",
          "paragraphs": [
            "Pour dire comment c'était, on utilise было : Было весело! — C'était amusant ! Было интересно. — C'était intéressant.",
            "Tu connais déjà Было вкусно! depuis Rome. C'est la même construction."
          ],
          "examples": [
            {
              "ru": "Было весело!",
              "en": "C'était amusant !"
            },
            {
              "ru": "Было холодно.",
              "en": "Il faisait froid."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "am7-t1",
          "prompt": "Écoute. Où est le musée ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute d'Amsterdam.",
          "audio": "Мы заблудились. Телефон сел. Музей в центре, а наш канал — вон там.",
          "options": [
            {
              "label": "Dans le centre.",
              "correct": true
            },
            {
              "label": "Là-bas, près du canal.",
              "correct": false
            },
            {
              "label": "Tout près, dans le parc.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "am7-t2",
          "prompt": "Quand dit-on Спокойной ночи! ?",
          "skill": "words",
          "options": [
            {
              "label": "Avant d'aller se coucher.",
              "correct": true
            },
            {
              "label": "Le matin.",
              "correct": false
            },
            {
              "label": "Quand on rencontre quelqu'un.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "am7-t3",
          "prompt": "Complète : « C'était amusant ! »",
          "before": "Было",
          "after": "!",
          "answer": "весело",
          "options": [
            "весело",
            "весёлый",
            "весела"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "am7-t4",
          "prompt": "Forme le mot « vélo ».",
          "word": "велосипед",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "am7-t5",
          "prompt": "Приезжай в гости!",
          "model": "Обязательно! Спасибо!",
          "modelEn": "Promis ! Merci !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Barsik t'invite à Rome. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "am7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "На сколько?",
          "options": [
            {
              "label": "На один день.",
              "correct": true
            },
            {
              "label": "Через час.",
              "correct": false
            },
            {
              "label": "В центре.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "am7-t7",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Можно фотографировать?",
          "options": [
            {
              "label": "Нет, здесь нельзя.",
              "correct": true
            },
            {
              "label": "Мне всё равно.",
              "correct": false
            },
            {
              "label": "Мы здесь.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "clogs",
        "itemName": "Sabots en bois",
        "itemNameRu": "Башмачки",
        "ru": "Ура! Деревянные башмачки!",
        "en": "Youpi ! De petits sabots en bois !",
        "a11y": "Sur le pont de la péniche, Murzik porte fièrement de minuscules sabots en bois jaunes peints de tulipes rouges. Barsik applaudit.",
        "image": "/art/amsterdam/reward-7.jpg",
        "steps": [
          "Barsik a un cadeau pour Murzik.",
          "De minuscules sabots en bois — juste à la taille de Murzik !",
          "Ils sont jaunes, avec des tulipes rouges peintes dessus.",
          "Murzik fait le tour du pont : clip-clop, clip-clop !"
        ],
        "bridge": "Le train de Barsik part à neuf heures. Cette fois, tout le monde se réveille à l'heure."
      }
    }
  ],
  "story": {
    "home": {
      "name": "La péniche de Murzik à Amsterdam",
      "nameRu": "Домик на воде",
      "image": "/art/amsterdam/home.jpg",
      "a11y": "Une petite chambre vide dans une petite péniche verte sur un canal. Un hublot donne sur l'eau."
    },
    "keepsakeId": "clogs",
    "welcomeRu": "Привет, Амстердам!",
    "welcomeEn": "Bonjour, Amsterdam !",
    "welcomeImage": "/art/amsterdam/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Amsterdam : un canal bordé de hautes maisons étroites, de petits ponts et beaucoup de vélos.",
    "departureImage": "/art/amsterdam/departure.jpg",
    "departureA11y": "Murzik et Tom avec leurs valises devant la grande gare en briques rouges d'Amsterdam. Murzik porte ses petits sabots en bois.",
    "finale": [
      {
        "image": "/art/amsterdam/finale-1.jpg",
        "a11y": "Murzik est sur le pont de sa péniche douillette : des tulipes, une guirlande lumineuse, un panier de pique-nique, un petit poêle qui rougeoie derrière le hublot, un tableau de moulin et une canne à pêche. Il porte ses minuscules sabots en bois.",
        "lines": [
          {
            "en": "La petite péniche de Murzik est douillette maintenant. Les lumières brillent sur l'eau."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : les petits sabots en bois."
          }
        ]
      },
      {
        "image": "/art/amsterdam/finale-2.jpg",
        "a11y": "Murzik et Tom passent à vélo sur un pont au-dessus d'un canal en faisant de grands signes joyeux.",
        "lines": [
          {
            "ru": "Амстердам завершён!",
            "en": "Amsterdam, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже шесть городов!",
            "en": "Déjà six villes !"
          }
        ]
      },
      {
        "image": "/art/amsterdam/barsik-train.jpg",
        "a11y": "Barsik fait signe depuis la fenêtre du train. Murzik et Tom lui répondent depuis le quai.",
        "lines": [
          {
            "en": "Le matin, Barsik fait signe depuis la fenêtre du train."
          },
          {
            "ru": "Пиши мне!",
            "en": "Écris-moi !"
          },
          {
            "en": "Murzik pense au chat sur le pont. Déjà deux fois. Qui est-ce ?"
          }
        ]
      },
      {
        "image": "/art/amsterdam/departure.jpg",
        "a11y": "Murzik et Tom avec leurs valises devant la grande gare en briques rouges d'Amsterdam. Murzik porte ses petits sabots en bois.",
        "lines": [
          {
            "ru": "До свидания, Амстердам!",
            "en": "Au revoir, Amsterdam !"
          },
          {
            "ru": "Следующая остановка: Вена!",
            "en": "Prochain arrêt : Vienne !"
          }
        ]
      },
      {
        "image": "/art/amsterdam/finale-5.jpg",
        "a11y": "Un train roule vers le sud-est à travers des collines vertes et des forêts, d'Amsterdam vers Vienne.",
        "lines": [
          {
            "ru": "Амстердам → Вена",
            "en": "Amsterdam → Vienne"
          }
        ]
      },
      {
        "image": "/art/vienna/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Vienne devant un grand opéra ancien ; une calèche passe.",
        "lines": [
          {
            "ru": "Привет, Вена!",
            "en": "Bonjour, Vienne !"
          },
          {
            "ru": "Новый город. Новые слова. Новые приключения.",
            "en": "Une nouvelle ville. De nouveaux mots. De nouvelles aventures."
          }
        ]
      }
    ]
  }
};
