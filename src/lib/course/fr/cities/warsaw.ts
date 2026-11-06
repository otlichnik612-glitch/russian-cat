import type { CityPlan } from "../../types";

/** Warsaw in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const warsawFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-warsaw-1",
      "level": "A1",
      "cityId": "warsaw",
      "number": 1,
      "title": "Qu'y a-t-il en ville ?",
      "minutes": 5,
      "goals": [
        "Demander ce qu'il y a dans un lieu",
        "Dire ce qu'il y a et ce qu'il n'y a pas",
        "Parler de ton quartier"
      ],
      "vocabNote": "Есть veut dire « il y a » : Здесь есть парк. Pour « il n'y a pas », on utilise нет et la forme « de » apprise à Istanbul : Здесь нет моря.",
      "vocab": [
        {
          "id": "wa1-1",
          "ru": "Что здесь есть?",
          "en": "Qu'y a-t-il ici ?",
          "a11y": "Murzik regarde autour de lui sur une grande place ancienne et colorée, l'air curieux.",
          "audioLabel": "Écouter Что здесь есть",
          "image": "/art/warsaw/1-1.jpg"
        },
        {
          "id": "wa1-2",
          "ru": "Здесь есть парк.",
          "en": "Il y a un parc ici.",
          "a11y": "Un parc verdoyant avec de vieux arbres, un étang et un petit palais.",
          "audioLabel": "Écouter Здесь есть парк",
          "image": "/art/warsaw/1-2.jpg"
        },
        {
          "id": "wa1-3",
          "ru": "река",
          "en": "fleuve",
          "a11y": "Un large fleuve avec un long pont et la ville sur sa rive.",
          "audioLabel": "Écouter река",
          "image": "/art/warsaw/1-3.jpg"
        },
        {
          "id": "wa1-4",
          "ru": "площадь",
          "en": "place",
          "a11y": "Une grande place de marché ancienne entourée de maisons colorées.",
          "audioLabel": "Écouter площадь",
          "image": "/art/warsaw/1-4.jpg"
        },
        {
          "id": "wa1-5",
          "ru": "старый город",
          "en": "vieille ville",
          "a11y": "Des rues étroites aux vieilles maisons colorées, avec un château au bout.",
          "audioLabel": "Écouter старый город",
          "image": "/art/warsaw/1-5.jpg"
        },
        {
          "id": "wa1-6",
          "ru": "Здесь нет моря.",
          "en": "Il n'y a pas de mer ici.",
          "a11y": "Murzik regarde tristement une carte : pas de mer bleue près de Varsovie.",
          "audioLabel": "Écouter Здесь нет моря",
          "image": "/art/warsaw/1-6.jpg"
        },
        {
          "id": "wa1-7",
          "ru": "Это мой район.",
          "en": "C'est mon quartier.",
          "a11y": "Pani Ewa, une vieille dame pleine d'énergie avec un béret rouge, ouvre grand les bras dans une rue charmante.",
          "audioLabel": "Écouter Это мой район",
          "image": "/art/warsaw/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Pani Ewa",
        "note": "Пани, c'est ainsi que les Polonais s'adressent poliment à une femme, comme « Madame ». Beaucoup de Polonais âgés ont appris le russe à l'école. Зато — en revanche.",
        "lines": [
          {
            "speaker": "ewa",
            "ru": "Добро пожаловать! Я пани Ева. Это мой район — старый город.",
            "en": "Bienvenue ! Je suis Pani Ewa. C'est mon quartier — la vieille ville."
          },
          {
            "speaker": "murzik",
            "ru": "Как красиво! А что здесь есть?",
            "en": "Que c'est beau ! Et qu'y a-t-il ici ?"
          },
          {
            "speaker": "ewa",
            "ru": "Здесь есть площадь, парк и река. И кафе, конечно!",
            "en": "Il y a une place, un parc et un fleuve. Et des cafés, bien sûr !"
          },
          {
            "speaker": "murzik",
            "ru": "А море?",
            "en": "Et la mer ?"
          },
          {
            "speaker": "ewa",
            "ru": "Нет, здесь нет моря. Зато есть Висла — большая река.",
            "en": "Non, il n'y a pas de mer ici. En revanche, il y a la Vistule — un grand fleuve."
          },
          {
            "speaker": "tom",
            "ru": "Вы хорошо говорите по-русски!",
            "en": "Vous parlez bien russe !"
          },
          {
            "speaker": "ewa",
            "ru": "Я учила русский в школе. Давно!",
            "en": "J'ai appris le russe à l'école. Il y a longtemps !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "wa1-d1",
          "prompt": "Qu'est-ce qu'il n'y a PAS à Varsovie ?",
          "options": [
            {
              "label": "La mer.",
              "correct": true
            },
            {
              "label": "Un fleuve.",
              "correct": false
            },
            {
              "label": "Un parc.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Есть et нет",
          "paragraphs": [
            "Здесь есть парк. — Il y a un parc ici. Здесь есть метро. — Il y a un métro ici.",
            "Здесь нет моря. Здесь нет парка. — « Il n'y a pas » utilise la forme « de »."
          ],
          "examples": [
            {
              "ru": "В городе есть река.",
              "en": "Il y a un fleuve dans la ville."
            },
            {
              "ru": "Здесь нет метро.",
              "en": "Il n'y a pas de métro ici."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "wa1-t1",
          "prompt": "Écoute. Qu'y a-t-il ?",
          "skill": "listening",
          "audio": "Здесь есть река и парк.",
          "options": [
            {
              "label": "Un fleuve et un parc.",
              "correct": true
            },
            {
              "label": "Une place et un parc.",
              "correct": false
            },
            {
              "label": "Un fleuve et la mer.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "wa1-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "река",
              "right": "fleuve"
            },
            {
              "left": "площадь",
              "right": "place"
            },
            {
              "left": "район",
              "right": "quartier"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "wa1-t3",
          "prompt": "Complète : « Il n'y a pas de mer ici. »",
          "before": "Здесь нет",
          "after": ".",
          "answer": "моря",
          "options": [
            "моря",
            "море",
            "морем"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "wa1-t4",
          "prompt": "Forme le mot « fleuve ».",
          "word": "река",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "wa1-t5",
          "prompt": "Что есть в твоём городе?",
          "model": "В моём городе есть парк и река.",
          "modelEn": "Dans ma ville, il y a un parc et un fleuve.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Parle de ta vraie ville : qu'y a-t-il ?"
        },
        {
          "kind": "choice",
          "id": "wa1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Всё на месте?",
          "options": [
            {
              "label": "Да! Ничего не пропало.",
              "correct": true
            },
            {
              "label": "Здесь нет моря.",
              "correct": false
            },
            {
              "label": "Это мой район.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "bean-bag",
        "itemName": "Pouf poire",
        "itemNameRu": "Кресло-мешок",
        "ru": "Ура! Кресло-мешок!",
        "en": "Youpi ! Un pouf poire !",
        "a11y": "Murzik s'enfonce avec bonheur dans un grand pouf poire orange tout mou, dans une petite chambre dont la fenêtre donne sur de vieilles maisons colorées.",
        "image": "/art/warsaw/reward-1.jpg",
        "steps": [
          "Pani Ewa leur montre une petite chambre à l'étage.",
          "La fenêtre donne sur les maisons colorées de la vieille ville.",
          "Dans le coin, il y a un grand pouf poire tout mou.",
          "Murzik s'y laisse tomber et ne veut plus se relever."
        ],
        "bridge": "Tom veut explorer. Mais où se trouve chaque chose ?"
      }
    },
    {
      "id": "a1-warsaw-2",
      "level": "A1",
      "cityId": "warsaw",
      "number": 2,
      "title": "Où est-ce ?",
      "minutes": 6,
      "goals": [
        "Demander où se trouve un lieu",
        "Dire en face, à côté, au coin de la rue",
        "Dire « entre »"
      ],
      "vocabNote": "Находится veut dire « se trouve » : Где находится банк? C'est un peu plus soutenu que Где банк?",
      "vocab": [
        {
          "id": "wa2-1",
          "ru": "Где находится банк?",
          "en": "Où se trouve la banque ?",
          "a11y": "Dans une rue, un plan à la main, Tom demande son chemin à une passante.",
          "audioLabel": "Écouter Где находится банк",
          "image": "/art/warsaw/2-1.jpg"
        },
        {
          "id": "wa2-2",
          "ru": "Напротив.",
          "en": "En face.",
          "a11y": "Deux bâtiments face à face de part et d'autre d'une rue ; une flèche traverse la rue.",
          "audioLabel": "Écouter Напротив",
          "image": "/art/warsaw/2-2.jpg"
        },
        {
          "id": "wa2-3",
          "ru": "Рядом с почтой.",
          "en": "À côté de la poste.",
          "a11y": "Deux bâtiments côte à côte ; l'un a une enseigne de poste en forme de cor, sans texte.",
          "audioLabel": "Écouter Рядом с почтой",
          "image": "/art/warsaw/2-3.jpg"
        },
        {
          "id": "wa2-4",
          "ru": "За углом.",
          "en": "Au coin de la rue.",
          "a11y": "Une flèche fait le tour du coin d'un bâtiment.",
          "audioLabel": "Écouter За углом",
          "image": "/art/warsaw/2-4.jpg"
        },
        {
          "id": "wa2-5",
          "ru": "Между кафе и аптекой.",
          "en": "Entre le café et la pharmacie.",
          "a11y": "Un petit bâtiment coincé entre un café et une pharmacie à croix verte.",
          "audioLabel": "Écouter Между кафе и аптекой",
          "image": "/art/warsaw/2-5.jpg"
        },
        {
          "id": "wa2-6",
          "ru": "Недалеко отсюда.",
          "en": "Pas loin d'ici.",
          "a11y": "Pani Ewa montre la rue en souriant ; un bâtiment est tout proche.",
          "audioLabel": "Écouter Недалеко отсюда",
          "image": "/art/warsaw/2-6.jpg"
        },
        {
          "id": "wa2-7",
          "ru": "Спасибо, понятно!",
          "en": "Merci, j'ai compris !",
          "a11y": "Tom hoche la tête, le visage éclairé et content.",
          "audioLabel": "Écouter Спасибо, понятно",
          "image": "/art/warsaw/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Les indications de Pani Ewa",
        "note": "Магазин — magasin. Пончики — beignets polonais. Самые вкусные — les meilleurs.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Пани Ева, где находится банк?",
            "en": "Pani Ewa, où se trouve la banque ?"
          },
          {
            "speaker": "ewa",
            "ru": "Недалеко отсюда. Рядом с почтой.",
            "en": "Pas loin d'ici. À côté de la poste."
          },
          {
            "speaker": "murzik",
            "ru": "А аптека?",
            "en": "Et la pharmacie ?"
          },
          {
            "speaker": "ewa",
            "ru": "Аптека напротив. А магазин — за углом.",
            "en": "La pharmacie est en face. Et le magasin est au coin de la rue."
          },
          {
            "speaker": "tom",
            "ru": "А где самые вкусные пончики?",
            "en": "Et où sont les meilleurs beignets ?"
          },
          {
            "speaker": "ewa",
            "ru": "Между кафе и аптекой! Маленькая пекарня.",
            "en": "Entre le café et la pharmacie ! Une petite boulangerie."
          },
          {
            "speaker": "tom",
            "ru": "Спасибо, понятно!",
            "en": "Merci, j'ai compris !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "wa2-d1",
          "prompt": "Où se trouve la banque ?",
          "options": [
            {
              "label": "À côté de la poste.",
              "correct": true
            },
            {
              "label": "En face de la pharmacie.",
              "correct": false
            },
            {
              "label": "Au coin de la rue.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Рядом с, между: -ой / -ом",
          "paragraphs": [
            "Après рядом с (à côté de) et между (entre), les mots changent : почта → рядом с почтой, аптека → с аптекой, банк → с банком, парк → с парком.",
            "Apprends-les comme des phrases toutes faites : рядом с почтой, между кафе и аптекой."
          ],
          "examples": [
            {
              "ru": "рядом с парком",
              "en": "à côté du parc"
            },
            {
              "ru": "между банком и почтой",
              "en": "entre la banque et la poste"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "wa2-t1",
          "prompt": "Écoute. Où est le magasin ?",
          "skill": "listening",
          "audio": "Магазин за углом.",
          "options": [
            {
              "label": "Au coin de la rue.",
              "correct": true
            },
            {
              "label": "En face.",
              "correct": false
            },
            {
              "label": "À côté de la banque.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "wa2-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "напротив",
              "right": "en face"
            },
            {
              "left": "за углом",
              "right": "au coin de la rue"
            },
            {
              "left": "недалеко",
              "right": "pas loin"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "wa2-t3",
          "prompt": "Complète : « à côté du parc ».",
          "before": "рядом с",
          "after": "",
          "answer": "парком",
          "options": [
            "парком",
            "парк",
            "парке"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "wa2-t4",
          "prompt": "Quelle lettre manque ? (entre)",
          "before": "м",
          "after": "жду",
          "answer": "е",
          "options": [
            "е",
            "и",
            "а"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "wa2-t5",
          "prompt": "Где находится аптека?",
          "model": "Аптека рядом с почтой.",
          "modelEn": "La pharmacie est à côté de la poste.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Un touriste te demande son chemin. Dis que la pharmacie est à côté de la poste."
        },
        {
          "kind": "choice",
          "id": "wa2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Что здесь есть?",
          "options": [
            {
              "label": "Здесь есть парк и река.",
              "correct": true
            },
            {
              "label": "За углом.",
              "correct": false
            },
            {
              "label": "Спасибо, понятно!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "amber",
        "itemName": "Pendentif en ambre",
        "itemNameRu": "Янтарь",
        "ru": "Ура! Кусочек янтаря!",
        "en": "Youpi ! Un morceau d'ambre !",
        "a11y": "Un chaud morceau d'ambre doré, au bout d'un fil, est suspendu à la fenêtre de Murzik et brille au soleil.",
        "image": "/art/warsaw/reward-2.jpg",
        "steps": [
          "Dans une petite boutique au coin de la rue, on vend de l'ambre.",
          "Il est doré, comme du miel.",
          "Murzik achète un petit morceau au bout d'un fil.",
          "Au soleil, il brille comme une petite lampe."
        ],
        "bridge": "Tom veut écrire sur Varsovie pour le magazine. Comment est la ville ?"
      }
    },
    {
      "id": "a1-warsaw-3",
      "level": "A1",
      "cityId": "warsaw",
      "number": 3,
      "title": "Comment est-ce ?",
      "minutes": 6,
      "goals": [
        "Décrire un lieu",
        "Utiliser des contraires : ancien et neuf, bruyant et calme",
        "Dire que tu te plais ici"
      ],
      "vocabNote": "Мне здесь нравится — Je me plais ici. Уютно veut dire douillet, confortable.",
      "vocab": [
        {
          "id": "wa3-1",
          "ru": "Какой это город?",
          "en": "C'est quel genre de ville ?",
          "a11y": "Tom tient son carnet et son stylo, prêt à écrire sa rubrique.",
          "audioLabel": "Écouter Какой это город",
          "image": "/art/warsaw/3-1.jpg"
        },
        {
          "id": "wa3-2",
          "ru": "старый / новый",
          "en": "ancien / neuf",
          "a11y": "Une vieille église en pierre à côté d'un gratte-ciel neuf en verre.",
          "audioLabel": "Écouter старый / новый",
          "image": "/art/warsaw/3-2b.jpg"
        },
        {
          "id": "wa3-3",
          "ru": "Здесь много людей.",
          "en": "Il y a beaucoup de monde ici.",
          "a11y": "Une place animée de la vieille ville, pleine de gens, de touristes et de musiciens de rue.",
          "audioLabel": "Écouter Здесь много людей",
          "image": "/art/warsaw/3-3b.jpg"
        },
        {
          "id": "wa3-4",
          "ru": "шумный / тихий",
          "en": "bruyant / calme",
          "a11y": "Un carrefour bruyant plein de voitures à côté d'une cour calme où dort un chien.",
          "audioLabel": "Écouter шумный / тихий",
          "image": "/art/warsaw/3-4b.jpg"
        },
        {
          "id": "wa3-5",
          "ru": "Какое красивое небо!",
          "en": "Quel beau ciel !",
          "a11y": "Un large ciel de coucher de soleil, rose et orange, au-dessus des toits de Varsovie.",
          "audioLabel": "Écouter Какое красивое небо",
          "image": "/art/warsaw/3-5b.jpg"
        },
        {
          "id": "wa3-6",
          "ru": "Здесь очень уютно.",
          "en": "C'est très douillet ici.",
          "a11y": "Murzik est pelotonné dans un coin de café douillet avec une tasse de chocolat chaud.",
          "audioLabel": "Écouter Здесь очень уютно",
          "image": "/art/warsaw/3-6.jpg"
        },
        {
          "id": "wa3-7",
          "ru": "Мне здесь нравится.",
          "en": "Je me plais ici.",
          "a11y": "Murzik sourit aux maisons colorées de la vieille ville.",
          "audioLabel": "Écouter Мне здесь нравится",
          "image": "/art/warsaw/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La rubrique de Tom",
        "note": "Записываю — je note. И то и другое — les deux.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, какой это город? Я записываю.",
            "en": "Murzik, c'est quel genre de ville ? Je note."
          },
          {
            "speaker": "murzik",
            "ru": "Старый! Смотри, какие старые дома. И здесь много людей!",
            "en": "Ancienne ! Regarde comme les maisons sont anciennes. Et il y a beaucoup de monde ici !"
          },
          {
            "speaker": "tom",
            "ru": "Но там новые дома. Очень новые.",
            "en": "Mais là-bas, il y a des bâtiments neufs. Très neufs."
          },
          {
            "speaker": "murzik",
            "ru": "Значит, и то и другое! Центр шумный, а наш район тихий.",
            "en": "Alors, les deux ! Le centre est bruyant, et notre quartier est calme."
          },
          {
            "speaker": "tom",
            "ru": "А тебе здесь нравится?",
            "en": "Et tu te plais ici ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да, мне здесь нравится. Здесь очень уютно.",
            "en": "Oui, je me plais ici. C'est très douillet ici."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "wa3-d1",
          "prompt": "Comment est le quartier de Murzik ?",
          "options": [
            {
              "label": "Calme.",
              "correct": true
            },
            {
              "label": "Bruyant.",
              "correct": false
            },
            {
              "label": "Neuf.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Какой? Какая? Какое? Какие?",
          "paragraphs": [
            "Le mot interrogatif s'accorde avec la chose : Какой город? — Старый. Какая улица? — Тихая. Какое кафе? — Новое. Какие дома? — Старые.",
            "La réponse s'accorde aussi : старый город, тихая улица, новое кафе, старые дома."
          ],
          "examples": [
            {
              "ru": "Какая это улица? — Тихая.",
              "en": "Comment est cette rue ? — Calme."
            },
            {
              "ru": "Какие здесь дома? — Новые.",
              "en": "Comment sont les maisons ici ? — Neuves."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "wa3-t1",
          "prompt": "Écoute. Comment est la rue ?",
          "skill": "listening",
          "audio": "Это очень шумная улица.",
          "options": [
            {
              "label": "Très bruyante.",
              "correct": true
            },
            {
              "label": "Très calme.",
              "correct": false
            },
            {
              "label": "Très ancienne.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "wa3-t2",
          "prompt": "Quel est le contraire de старый ?",
          "skill": "words",
          "options": [
            {
              "label": "новый",
              "correct": true
            },
            {
              "label": "тихий",
              "correct": false
            },
            {
              "label": "шумный",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "wa3-t3",
          "prompt": "Complète : « une rue calme ».",
          "before": "",
          "after": "улица",
          "answer": "тихая",
          "options": [
            "тихая",
            "тихий",
            "тихое"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "wa3-t4",
          "prompt": "Forme le mot « ville ».",
          "word": "город",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "wa3-t5",
          "prompt": "Какой твой город?",
          "model": "Мой город старый и тихий.",
          "modelEn": "Ma ville est ancienne et calme.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Décris ta vraie ville en deux mots."
        },
        {
          "kind": "choice",
          "id": "wa3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Где находится банк?",
          "options": [
            {
              "label": "Рядом с почтой.",
              "correct": true
            },
            {
              "label": "Здесь очень уютно.",
              "correct": false
            },
            {
              "label": "Старый.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "teddy-bear",
        "itemName": "Ours en peluche",
        "itemNameRu": "Мишка",
        "ru": "Ура! Плюшевый мишка!",
        "en": "Youpi ! Un ours en peluche !",
        "a11y": "Un ours en peluche marron avec un petit calot de soldat est assis sur le pouf de Murzik.",
        "image": "/art/warsaw/reward-3.jpg",
        "steps": [
          "Dans la boutique d'un musée, il y a un ours en peluche.",
          "Pani Ewa leur raconte l'histoire d'un célèbre ours polonais d'autrefois.",
          "Murzik adore l'histoire.",
          "L'ours rentre à la maison avec lui."
        ],
        "bridge": "Quand ils rentrent, Pani Ewa les attend avec une enveloppe. « Une lettre pour toi ! De Paris ! »"
      }
    },
    {
      "id": "a1-warsaw-4",
      "level": "A1",
      "cityId": "warsaw",
      "number": 4,
      "title": "Une lettre de Paris",
      "minutes": 6,
      "goals": [
        "Comprendre une courte lettre",
        "Commencer et finir une lettre amicale",
        "Dire que quelqu'un te manque"
      ],
      "vocabNote": "Дорогой (cher) s'accorde avec la personne, comme « cher / chère » : Дорогой Мурзик! Дорогая Ева! Я скучаю veut dire « Tu me manques » (en ce moment).",
      "vocab": [
        {
          "id": "wa4-1",
          "ru": "Тебе письмо!",
          "en": "Il y a une lettre pour toi !",
          "a11y": "Pani Ewa tend une enveloppe bleue avec un timbre de Paris.",
          "audioLabel": "Écouter Тебе письмо",
          "image": "/art/warsaw/4-1.jpg"
        },
        {
          "id": "wa4-2",
          "ru": "Дорогой Мурзик!",
          "en": "Cher Murzik !",
          "a11y": "Le haut d'une lettre écrite d'une écriture soignée, avec un petit dessin de la tour Eiffel.",
          "audioLabel": "Écouter Дорогой Мурзик",
          "image": "/art/warsaw/4-2.jpg"
        },
        {
          "id": "wa4-3",
          "ru": "Как ты там?",
          "en": "Comment ça va, là-bas ?",
          "a11y": "Madame Dubois écrit une lettre à la table de sa cuisine à Paris.",
          "audioLabel": "Écouter Как ты там",
          "image": "/art/warsaw/4-3.jpg"
        },
        {
          "id": "wa4-4",
          "ru": "У нас всё хорошо.",
          "en": "Ici, tout va bien.",
          "a11y": "Madame Dubois arrose ses fleurs sur son balcon parisien ensoleillé.",
          "audioLabel": "Écouter У нас всё хорошо",
          "image": "/art/warsaw/4-4.jpg"
        },
        {
          "id": "wa4-5",
          "ru": "Я скучаю.",
          "en": "Tu me manques.",
          "a11y": "Madame Dubois regarde une photo de Murzik avec un doux sourire.",
          "audioLabel": "Écouter Я скучаю",
          "image": "/art/warsaw/4-5.jpg"
        },
        {
          "id": "wa4-6",
          "ru": "Пиши!",
          "en": "Écris-moi !",
          "a11y": "Un stylo et une feuille blanche sur une table.",
          "audioLabel": "Écouter Пиши",
          "image": "/art/warsaw/4-6.jpg"
        },
        {
          "id": "wa4-7",
          "ru": "Целую!",
          "en": "Je t'embrasse !",
          "a11y": "De petits cœurs en bas d'une lettre.",
          "audioLabel": "Écouter Целую",
          "image": "/art/warsaw/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Madame Dubois écrit",
        "note": "Murzik lit la lettre, et on entend la voix de Madame Dubois. Спрашивал о тебе — il a demandé de tes nouvelles. Он знал — il connaissait.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "От мадам Дюбуа! «Дорогой Мурзик!»",
            "en": "De Madame Dubois ! « Cher Murzik ! »"
          },
          {
            "speaker": "neighbour",
            "ru": "Как ты там? У нас всё хорошо. Я скучаю.",
            "en": "Comment ça va, là-bas ? Ici, tout va bien. Tu me manques."
          },
          {
            "speaker": "neighbour",
            "ru": "Вчера приходил старый белый кот в шляпе. Он спрашивал о тебе.",
            "en": "Hier, un vieux chat blanc en chapeau est venu. Il a demandé de tes nouvelles."
          },
          {
            "speaker": "neighbour",
            "ru": "Он сказал: «Я знал его бабушку».",
            "en": "Il a dit : « J'ai connu sa grand-mère. »"
          },
          {
            "speaker": "neighbour",
            "ru": "Пиши! Целую, мадам Дюбуа.",
            "en": "Écris-moi ! Je t'embrasse, Madame Dubois."
          },
          {
            "speaker": "tom",
            "ru": "Кот в шляпе? Мурзик, это он!",
            "en": "Un chat en chapeau ? Murzik, c'est lui !"
          },
          {
            "speaker": "murzik",
            "ru": "Он знал бабушку…",
            "en": "Il a connu grand-mère…"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "wa4-d1",
          "prompt": "Qui est venu chez Madame Dubois ?",
          "options": [
            {
              "label": "Un vieux chat blanc en chapeau.",
              "correct": true
            },
            {
              "label": "Barsik.",
              "correct": false
            },
            {
              "label": "Grand-mère Assia.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Дорогой, дорогая — cher, chère",
          "paragraphs": [
            "Une lettre commence par Дорогой + un prénom d'homme (Дорогой Мурзик!) ou Дорогая + un prénom de femme (Дорогая Ева!). À plusieurs personnes : Дорогие друзья!",
            "Une lettre amicale finit souvent par Целую! (Je t'embrasse !) ou Обнимаю! (Je te serre dans mes bras !)"
          ],
          "examples": [
            {
              "ru": "Дорогая мадам Дюбуа!",
              "en": "Chère Madame Dubois !"
            },
            {
              "ru": "Дорогие друзья!",
              "en": "Chers amis !"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "wa4-t1",
          "prompt": "Écoute. Comment ça va à Paris ?",
          "skill": "listening",
          "audio": "У нас всё хорошо.",
          "options": [
            {
              "label": "Tout va bien.",
              "correct": true
            },
            {
              "label": "Tout le monde est malade.",
              "correct": false
            },
            {
              "label": "Il pleut.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "wa4-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "письмо",
              "right": "lettre"
            },
            {
              "left": "Я скучаю.",
              "right": "Tu me manques."
            },
            {
              "left": "Пиши!",
              "right": "Écris-moi !"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "wa4-t3",
          "prompt": "Tu écris à ton amie Anna. Comment commences-tu ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Дорогая Анна!",
              "correct": true
            },
            {
              "label": "Дорогой Анна!",
              "correct": false
            },
            {
              "label": "Дорогие Анна!",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "wa4-t4",
          "prompt": "Forme le mot « lettre ».",
          "word": "письмо",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "wa4-t5",
          "prompt": "Как ты там?",
          "model": "У нас всё хорошо. Я скучаю!",
          "modelEn": "Ici, tout va bien. Tu me manques !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Un ami qui est loin te demande comment tu vas. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "wa4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Тебе здесь нравится?",
          "options": [
            {
              "label": "Да, здесь очень уютно.",
              "correct": true
            },
            {
              "label": "Целую!",
              "correct": false
            },
            {
              "label": "Напротив.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "writing-set",
        "itemName": "Papier à lettres",
        "itemNameRu": "Бумага для писем",
        "ru": "Ура! Бумага для писем!",
        "en": "Youpi ! Du papier à lettres !",
        "a11y": "Une pile bien rangée de papier à lettres crème et d'enveloppes nouées d'un ruban, sur la table de Murzik.",
        "image": "/art/warsaw/reward-4.jpg",
        "steps": [
          "Murzik veut répondre tout de suite.",
          "Pani Ewa lui donne du papier à lettres.",
          "Du papier crème et des enveloppes bleues.",
          "« Une vraie lettre, c'est mieux qu'un message », dit-elle."
        ],
        "bridge": "Murzik s'assoit pour répondre à Paris."
      }
    },
    {
      "id": "a1-warsaw-5",
      "level": "A1",
      "cityId": "warsaw",
      "number": 5,
      "title": "La réponse",
      "minutes": 6,
      "goals": [
        "Écrire une courte lettre",
        "Dire où tu es maintenant",
        "Dire « À bientôt ! »"
      ],
      "vocabNote": "Après в, les noms de villes finissent généralement par -е : в Варшаве, в Париже, в Риме, в Берлине. Москва → в Москве.",
      "vocab": [
        {
          "id": "wa5-1",
          "ru": "Я пишу письмо.",
          "en": "J'écris une lettre.",
          "a11y": "Murzik écrit à sa table avec un stylo plume, en tirant la langue de concentration.",
          "audioLabel": "Écouter Я пишу письмо",
          "image": "/art/warsaw/5-1.jpg"
        },
        {
          "id": "wa5-2",
          "ru": "Мы сейчас в Варшаве.",
          "en": "Nous sommes à Varsovie maintenant.",
          "a11y": "Murzik et Tom font signe devant les maisons colorées de la place de la vieille ville de Varsovie.",
          "audioLabel": "Écouter Мы сейчас в Варшаве",
          "image": "/art/warsaw/5-2.jpg"
        },
        {
          "id": "wa5-3",
          "ru": "Погода хорошая.",
          "en": "Il fait beau.",
          "a11y": "Un ciel ensoleillé au-dessus des toits rouges, avec quelques nuages blancs.",
          "audioLabel": "Écouter Погода хорошая",
          "image": "/art/warsaw/5-3.jpg"
        },
        {
          "id": "wa5-4",
          "ru": "Город очень красивый.",
          "en": "La ville est très belle.",
          "a11y": "Une vue de la vieille ville de Varsovie depuis le fleuve, au coucher du soleil.",
          "audioLabel": "Écouter Город очень красивый",
          "image": "/art/warsaw/5-4.jpg"
        },
        {
          "id": "wa5-5",
          "ru": "Я по вам скучаю.",
          "en": "Tu me manques.",
          "a11y": "Murzik serre la photo de Madame Dubois contre son cœur.",
          "audioLabel": "Écouter Я по вам скучаю",
          "image": "/art/warsaw/5-5.jpg"
        },
        {
          "id": "wa5-6",
          "ru": "До скорой встречи!",
          "en": "À bientôt !",
          "a11y": "Murzik dessine un cœur à la fin de sa lettre.",
          "audioLabel": "Écouter До скорой встречи",
          "image": "/art/warsaw/5-6.jpg"
        },
        {
          "id": "wa5-7",
          "ru": "С любовью, Мурзик.",
          "en": "Affectueusement, Murzik.",
          "a11y": "Murzik signe la lettre d'une petite empreinte de patte.",
          "audioLabel": "Écouter С любовью, Мурзик",
          "image": "/art/warsaw/5-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La lettre de Murzik",
        "note": "Murzik lit sa lettre à voix haute à Tom. Расскажите — racontez (poli). О нём — sur lui.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, я пишу письмо. Слушай: «Дорогая мадам Дюбуа!»",
            "en": "Tom, j'écris une lettre. Écoute : « Chère Madame Dubois ! »"
          },
          {
            "speaker": "murzik",
            "ru": "«Мы сейчас в Варшаве. Погода хорошая, город очень красивый».",
            "en": "« Nous sommes à Varsovie maintenant. Il fait beau, la ville est très belle. »"
          },
          {
            "speaker": "murzik",
            "ru": "«Кот в шляпе — кто он? Расскажите о нём, пожалуйста!»",
            "en": "« Le chat en chapeau — qui est-ce ? Parlez-moi de lui, s'il vous plaît ! »"
          },
          {
            "speaker": "murzik",
            "ru": "«Я по вам скучаю. До скорой встречи! С любовью, Мурзик»",
            "en": "« Vous me manquez. À bientôt ! Affectueusement, Murzik. »"
          },
          {
            "speaker": "tom",
            "ru": "Очень хорошо! Отправим завтра.",
            "en": "Très bien ! Nous l'enverrons demain."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "wa5-d1",
          "prompt": "Que demande Murzik à Madame Dubois ?",
          "options": [
            {
              "label": "Qui est le chat en chapeau.",
              "correct": true
            },
            {
              "label": "Quel temps il fait à Paris.",
              "correct": false
            },
            {
              "label": "De venir le voir à Varsovie.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "В + ville : в Варшаве",
          "paragraphs": [
            "Où ? в + ville en -е : Варшава → в Варшаве, Париж → в Париже, Рим → в Риме, Лондон → в Лондоне.",
            "Certaines ne changent pas : в Токио, в Осло. Афины → в Афинах (c'est un pluriel)."
          ],
          "examples": [
            {
              "ru": "Мы сейчас в Риме.",
              "en": "Nous sommes à Rome maintenant."
            },
            {
              "ru": "Она живёт в Лондоне.",
              "en": "Elle habite à Londres."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "wa5-t1",
          "prompt": "Écoute. Où sont-ils maintenant ?",
          "skill": "listening",
          "audio": "Мы сейчас в Лондоне.",
          "options": [
            {
              "label": "À Londres.",
              "correct": true
            },
            {
              "label": "À Varsovie.",
              "correct": false
            },
            {
              "label": "À Paris.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "wa5-t2",
          "prompt": "Comment finir affectueusement une lettre à un ami ?",
          "skill": "words",
          "options": [
            {
              "label": "С любовью, …",
              "correct": true
            },
            {
              "label": "Дорогой …",
              "correct": false
            },
            {
              "label": "Как ты там?",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "wa5-t3",
          "prompt": "Complète : « Nous sommes à Varsovie maintenant. »",
          "before": "Мы сейчас в",
          "after": ".",
          "answer": "Варшаве",
          "options": [
            "Варшаве",
            "Варшава",
            "Варшаву"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "wa5-t4",
          "prompt": "Quelle lettre manque ? (rencontre)",
          "before": "встр",
          "after": "ча",
          "answer": "е",
          "options": [
            "е",
            "и",
            "я"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "wa5-t5",
          "prompt": "Где ты сейчас?",
          "model": "Я сейчас дома. Погода хорошая.",
          "modelEn": "Je suis à la maison maintenant. Il fait beau.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Un ami t'écrit. Dis où tu es maintenant et quel temps il fait."
        },
        {
          "kind": "choice",
          "id": "wa5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Тебе письмо!",
          "options": [
            {
              "label": "Мне? От кого?",
              "correct": true
            },
            {
              "label": "С любовью, Мурзик.",
              "correct": false
            },
            {
              "label": "Погода хорошая.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "fountain-pen",
        "itemName": "Stylo plume",
        "itemNameRu": "Перьевая ручка",
        "ru": "Ура! Перьевая ручка!",
        "en": "Youpi ! Un stylo plume !",
        "a11y": "Un stylo plume vert foncé et un petit flacon d'encre bleue sur la table de Murzik, à côté d'une enveloppe cachetée.",
        "image": "/art/warsaw/reward-5.jpg",
        "steps": [
          "La lettre de Murzik est prête.",
          "Pani Ewa regarde son écriture et sourit.",
          "Elle lui donne son vieux stylo plume.",
          "« Pour tes prochaines lettres. »"
        ],
        "bridge": "Le matin, ils postent la lettre. Ensuite, il leur faut quelques courses."
      }
    },
    {
      "id": "a1-warsaw-6",
      "level": "A1",
      "cityId": "warsaw",
      "number": 6,
      "title": "Ouvert ou fermé ?",
      "minutes": 6,
      "goals": [
        "Demander où est le magasin le plus proche",
        "Demander jusqu'à quelle heure c'est ouvert",
        "Comprendre ouvert, fermé, 24 h/24"
      ],
      "vocabNote": "До скольки? veut dire « jusqu'à quelle heure ? ». La réponse utilise до + la forme « de » du nombre : до восьми, до десяти.",
      "vocab": [
        {
          "id": "wa6-1",
          "ru": "Где ближайший магазин?",
          "en": "Où est le magasin le plus proche ?",
          "a11y": "Tom est au coin d'une rue avec un sac de courses et regarde autour de lui.",
          "audioLabel": "Écouter Где ближайший магазин",
          "image": "/art/warsaw/6-1.jpg"
        },
        {
          "id": "wa6-2",
          "ru": "Магазин открыт.",
          "en": "Le magasin est ouvert.",
          "a11y": "Un magasin à la porte grande ouverte, avec une lumière chaleureuse à l'intérieur.",
          "audioLabel": "Écouter Магазин открыт",
          "image": "/art/warsaw/6-2.jpg"
        },
        {
          "id": "wa6-3",
          "ru": "Магазин закрыт.",
          "en": "Le magasin est fermé.",
          "a11y": "Un magasin aux vitrines sombres et à la porte verrouillée ; Murzik colle son nez à la vitre.",
          "audioLabel": "Écouter Магазин закрыт",
          "image": "/art/warsaw/6-3.jpg"
        },
        {
          "id": "wa6-4",
          "ru": "До скольки работает?",
          "en": "C'est ouvert jusqu'à quelle heure ?",
          "a11y": "Murzik montre le panneau des horaires, l'air interrogateur ; le panneau ne montre que des dessins d'horloges.",
          "audioLabel": "Écouter До скольки работает",
          "image": "/art/warsaw/6-4.jpg"
        },
        {
          "id": "wa6-5",
          "ru": "До десяти.",
          "en": "Jusqu'à dix heures.",
          "a11y": "Une horloge sur dix heures et une petite lune à côté.",
          "audioLabel": "Écouter До десяти",
          "image": "/art/warsaw/6-5.jpg"
        },
        {
          "id": "wa6-6",
          "ru": "Круглосуточно.",
          "en": "24 heures sur 24.",
          "a11y": "Un magasin illuminé la nuit sous les étoiles, avec un soleil et une lune sur son enseigne.",
          "audioLabel": "Écouter Круглосуточно",
          "image": "/art/warsaw/6-6.jpg"
        },
        {
          "id": "wa6-7",
          "ru": "Всё рядом!",
          "en": "Tout est à côté !",
          "a11y": "Le plan d'un petit quartier avec un magasin, une pharmacie, un café et une boulangerie tout près les uns des autres.",
          "audioLabel": "Écouter Всё рядом",
          "image": "/art/warsaw/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Courses tardives",
        "note": "Уже восемь — il est déjà huit heures. Хлеб и молоко — du pain et du lait.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Пани Ева, где ближайший магазин? Нам нужны хлеб и молоко.",
            "en": "Pani Ewa, où est le magasin le plus proche ? Il nous faut du pain et du lait."
          },
          {
            "speaker": "ewa",
            "ru": "За углом. Но уже восемь…",
            "en": "Au coin de la rue. Mais il est déjà huit heures…"
          },
          {
            "speaker": "murzik",
            "ru": "А до скольки он работает?",
            "en": "Et il est ouvert jusqu'à quelle heure ?"
          },
          {
            "speaker": "ewa",
            "ru": "До восьми. Сейчас он уже закрыт.",
            "en": "Jusqu'à huit heures. Il est déjà fermé."
          },
          {
            "speaker": "tom",
            "ru": "Ой! А другой магазин?",
            "en": "Oh ! Et un autre magasin ?"
          },
          {
            "speaker": "ewa",
            "ru": "Напротив аптеки есть магазин. Он работает круглосуточно!",
            "en": "En face de la pharmacie, il y a un magasin. Il est ouvert 24 heures sur 24 !"
          },
          {
            "speaker": "murzik",
            "ru": "Ура! Здесь всё рядом!",
            "en": "Youpi ! Ici, tout est à côté !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "wa6-d1",
          "prompt": "Pourquoi ne peuvent-ils pas aller au magasin du coin ?",
          "options": [
            {
              "label": "Il est déjà fermé.",
              "correct": true
            },
            {
              "label": "Il est trop loin.",
              "correct": false
            },
            {
              "label": "Il n'a pas de pain.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "До + heure",
          "paragraphs": [
            "До veut dire « jusqu'à » : до восьми (jusqu'à huit heures), до десяти (jusqu'à dix heures), до часа (jusqu'à une heure).",
            "С … до … : Магазин работает с восьми до десяти. — Le magasin est ouvert de huit heures à dix heures."
          ],
          "examples": [
            {
              "ru": "Аптека работает до девяти.",
              "en": "La pharmacie est ouverte jusqu'à neuf heures."
            },
            {
              "ru": "с девяти до шести",
              "en": "de neuf heures à six heures"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "wa6-t1",
          "prompt": "Écoute. Jusqu'à quelle heure la pharmacie est-elle ouverte ?",
          "skill": "listening",
          "audio": "Аптека работает до девяти.",
          "options": [
            {
              "label": "Jusqu'à neuf heures.",
              "correct": true
            },
            {
              "label": "Jusqu'à dix heures.",
              "correct": false
            },
            {
              "label": "24 heures sur 24.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "wa6-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "открыт",
              "right": "ouvert"
            },
            {
              "left": "закрыт",
              "right": "fermé"
            },
            {
              "left": "круглосуточно",
              "right": "24 heures sur 24"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "wa6-t3",
          "prompt": "Comment dit-on « jusqu'à dix heures » ?",
          "skill": "grammar",
          "options": [
            {
              "label": "до десяти",
              "correct": true
            },
            {
              "label": "в десять",
              "correct": false
            },
            {
              "label": "через десять",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "wa6-t4",
          "prompt": "Forme le mot « magasin ».",
          "word": "магазин",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "wa6-t5",
          "prompt": "До скольки работает магазин?",
          "model": "Магазин работает до десяти.",
          "modelEn": "Le magasin est ouvert jusqu'à dix heures.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Un voisin te demande. Dis que le magasin est ouvert jusqu'à dix heures."
        },
        {
          "kind": "choice",
          "id": "wa6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Где находится банк?",
          "options": [
            {
              "label": "За углом.",
              "correct": true
            },
            {
              "label": "До десяти.",
              "correct": false
            },
            {
              "label": "Круглосуточно.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "thermos",
        "itemName": "Thermos",
        "itemNameRu": "Термос",
        "ru": "Ура! Тёплый термос!",
        "en": "Youpi ! Un thermos !",
        "a11y": "Un thermos rouge avec une petite tasse sur le dessus est posé à côté du pouf de Murzik ; de la vapeur sort de la tasse.",
        "image": "/art/warsaw/reward-6.jpg",
        "steps": [
          "Dans le magasin ouvert 24 h/24, Murzik voit un thermos rouge.",
          "« Pour le thé en voyage ! » dit Tom.",
          "Ils l'achètent.",
          "Maintenant, il y a toujours du thé chaud."
        ],
        "bridge": "Demain, c'est le dernier jour. Tom a un plan : Murzik sera son guide."
      }
    },
    {
      "id": "a1-warsaw-7",
      "level": "A1",
      "cityId": "warsaw",
      "number": 7,
      "title": "Murzik, guide touristique",
      "minutes": 7,
      "goals": [
        "Faire visiter un lieu",
        "Dire qui a vécu ici",
        "Comprendre un chemin en ville à l'oral"
      ],
      "vocabNote": "Давай я покажу… veut dire « Laisse-moi te montrer… ». Здесь жил… — « … a vécu ici » (жил pour un homme, жила pour une femme).",
      "vocab": [
        {
          "id": "wa7-1",
          "ru": "Давай я покажу тебе город!",
          "en": "Laisse-moi te faire visiter la ville !",
          "a11y": "Avec une petite casquette de guide, Murzik tient un petit drapeau et sourit à Tom.",
          "audioLabel": "Écouter Давай я покажу тебе город",
          "image": "/art/warsaw/7-1.jpg"
        },
        {
          "id": "wa7-2",
          "ru": "Посмотри!",
          "en": "Regarde !",
          "a11y": "Murzik montre en l'air une haute colonne surmontée d'une statue, sur la place du château.",
          "audioLabel": "Écouter Посмотри",
          "image": "/art/warsaw/7-2.jpg"
        },
        {
          "id": "wa7-3",
          "ru": "Здесь жил Шопен.",
          "en": "Chopin a vécu ici.",
          "a11y": "Une vieille maison élégante avec un piano visible à la fenêtre.",
          "audioLabel": "Écouter Здесь жил Шопен",
          "image": "/art/warsaw/7-3.jpg"
        },
        {
          "id": "wa7-4",
          "ru": "Это моё любимое место.",
          "en": "C'est mon endroit préféré.",
          "a11y": "Murzik est assis sur un banc au bord du fleuve au coucher du soleil, l'air heureux.",
          "audioLabel": "Écouter Это моё любимое место",
          "image": "/art/warsaw/7-4.jpg"
        },
        {
          "id": "wa7-5",
          "ru": "Идём дальше!",
          "en": "Continuons !",
          "a11y": "Murzik marche devant en agitant son petit drapeau ; Tom le suit avec son appareil photo.",
          "audioLabel": "Écouter Идём дальше",
          "image": "/art/warsaw/7-5.jpg"
        },
        {
          "id": "wa7-6",
          "ru": "А вот и русалка!",
          "en": "Et voici la sirène !",
          "a11y": "Une statue en bronze d'une sirène avec une épée et un bouclier sur la place de la vieille ville.",
          "audioLabel": "Écouter А вот и русалка",
          "image": "/art/warsaw/7-6.jpg"
        },
        {
          "id": "wa7-7",
          "ru": "Экскурсия окончена!",
          "en": "La visite est terminée !",
          "a11y": "Murzik salue ; Tom et Pani Ewa applaudissent.",
          "audioLabel": "Écouter Экскурсия окончена",
          "image": "/art/warsaw/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le meilleur guide",
        "note": "Символ Варшавы — le symbole de Varsovie. Лучший гид — le meilleur guide.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, давай я покажу тебе город!",
            "en": "Tom, laisse-moi te faire visiter la ville !"
          },
          {
            "speaker": "tom",
            "ru": "Давай! Я буду фотографировать.",
            "en": "D'accord ! Je prendrai des photos."
          },
          {
            "speaker": "murzik",
            "ru": "Посмотри! Это старый город и старая церковь. А здесь жил Шопен.",
            "en": "Regarde ! Voici la vieille ville et une vieille église. Et Chopin a vécu ici."
          },
          {
            "speaker": "murzik",
            "ru": "Идём дальше! А вот и русалка — символ Варшавы.",
            "en": "Continuons ! Et voici la sirène — le symbole de Varsovie."
          },
          {
            "speaker": "murzik",
            "ru": "А это моё любимое место — река.",
            "en": "Et ça, c'est mon endroit préféré — le fleuve."
          },
          {
            "speaker": "murzik",
            "ru": "Экскурсия окончена!",
            "en": "La visite est terminée !"
          },
          {
            "speaker": "ewa",
            "ru": "Браво! Лучший гид в Варшаве!",
            "en": "Bravo ! Le meilleur guide de Varsovie !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "wa7-d1",
          "prompt": "Quel est l'endroit préféré de Murzik ?",
          "options": [
            {
              "label": "Le fleuve.",
              "correct": true
            },
            {
              "label": "La maison de Chopin.",
              "correct": false
            },
            {
              "label": "La sirène.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Здесь жил / жила / жили",
          "paragraphs": [
            "Le passé s'accorde avec la personne : Здесь жил Шопен (un homme). Здесь жила Мария Кюри (une femme). Здесь жили мои друзья (plusieurs personnes).",
            "C'est le même -л / -ла / -ли que tu as appris à Istanbul."
          ],
          "examples": [
            {
              "ru": "Здесь жила моя бабушка.",
              "en": "Ma grand-mère a vécu ici."
            },
            {
              "ru": "Здесь жили студенты.",
              "en": "Des étudiants ont vécu ici."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "wa7-t1",
          "prompt": "Écoute. Où est le café ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute de Varsovie.",
          "audio": "Идите прямо. Банк будет справа. Кафе напротив банка, рядом с аптекой. Оно работает до десяти.",
          "options": [
            {
              "label": "En face de la banque.",
              "correct": true
            },
            {
              "label": "À côté de la poste.",
              "correct": false
            },
            {
              "label": "Au coin de la rue.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "wa7-t2",
          "prompt": "Tu veux que ton ami voie quelque chose. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Посмотри!",
              "correct": true
            },
            {
              "label": "Пиши!",
              "correct": false
            },
            {
              "label": "Целую!",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "wa7-t3",
          "prompt": "Complète : « Ma grand-mère a vécu ici. »",
          "before": "Здесь",
          "after": "моя бабушка.",
          "answer": "жила",
          "options": [
            "жила",
            "жил",
            "жили"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "wa7-t4",
          "prompt": "Forme le mot « endroit ».",
          "word": "место",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "wa7-t5",
          "prompt": "Какое твоё любимое место?",
          "model": "Моё любимое место — парк.",
          "modelEn": "Mon endroit préféré, c'est le parc.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis ton vrai endroit préféré dans ta ville."
        },
        {
          "kind": "choice",
          "id": "wa7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "До скольки работает магазин?",
          "options": [
            {
              "label": "До десяти.",
              "correct": true
            },
            {
              "label": "Здесь жил Шопен.",
              "correct": false
            },
            {
              "label": "Посмотри!",
              "correct": false
            }
          ]
        },
        {
          "kind": "truefalse",
          "id": "wa7-t7",
          "prompt": "Vrai ou faux",
          "statement": "Напротив veut dire « en face ».",
          "correct": true,
          "skill": "review"
        }
      ],
      "reward": {
        "itemId": "mermaid",
        "itemName": "Petite sirène",
        "itemNameRu": "Русалка",
        "ru": "Ура! Маленькая русалка!",
        "en": "Youpi ! Une petite sirène !",
        "a11y": "Murzik tient une petite figurine en bronze de la sirène de Varsovie, avec son épée et son bouclier.",
        "image": "/art/warsaw/reward-7.jpg",
        "steps": [
          "Pani Ewa a un cadeau pour le meilleur guide.",
          "Une petite sirène en bronze.",
          "« Elle protège Varsovie, dit Pani Ewa.",
          "Maintenant, elle te protégera. »"
        ],
        "bridge": "La valise est prête. Quelque part, il y a un chat en chapeau qui a connu grand-mère Assia…"
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre de Murzik à Varsovie",
      "nameRu": "Комната в Варшаве",
      "image": "/art/warsaw/home.jpg",
      "a11y": "Une petite chambre vide dans une vieille maison colorée. La fenêtre donne sur la place de la vieille ville avec ses hautes maisons peintes."
    },
    "keepsakeId": "mermaid",
    "welcomeRu": "Привет, Варшава!",
    "welcomeEn": "Bonjour, Varsovie !",
    "welcomeImage": "/art/warsaw/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent sur la place de la vieille ville de Varsovie, entourée de hautes maisons colorées ; une statue de sirène en bronze se dresse au milieu.",
    "departureImage": "/art/warsaw/departure.jpg",
    "departureA11y": "Pani Ewa agite son béret rouge pour dire au revoir à Murzik et Tom à la gare de Varsovie. Murzik tient la petite sirène en bronze.",
    "finale": [
      {
        "image": "/art/warsaw/finale-1.jpg",
        "a11y": "Murzik est dans sa chambre douillette à Varsovie : un pouf poire orange, un morceau d'ambre à la fenêtre, un ours en peluche, du papier à lettres, un stylo plume et un thermos rouge. Il tient la petite sirène en bronze.",
        "lines": [
          {
            "en": "La chambre varsovienne de Murzik est douillette et pleine de lettres."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : la petite sirène."
          }
        ]
      },
      {
        "image": "/art/warsaw/finale-2.jpg",
        "a11y": "Murzik et Tom font la fête au bord de la Vistule au coucher du soleil, avec la vieille ville derrière eux.",
        "lines": [
          {
            "ru": "Варшава завершена!",
            "en": "Varsovie, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже двенадцать городов!",
            "en": "Déjà douze villes !"
          }
        ]
      },
      {
        "image": "/art/warsaw/letter.jpg",
        "a11y": "Murzik est assis sur son pouf avec la lettre bleue de Madame Dubois et réfléchit intensément. Tom est assis à côté de lui.",
        "lines": [
          {
            "en": "Murzik relit la lettre de Madame Dubois. Un chat en chapeau. Il a connu grand-mère."
          },
          {
            "ru": "Кто же он?",
            "en": "Qui est-ce ?"
          },
          {
            "en": "« Berlin, Amsterdam, Vienne, Prague… Je l'ai vu partout, dit Murzik. Il nous suit, Tom. » Tom sourit : « Ou bien il la cherche, lui aussi. »"
          }
        ]
      },
      {
        "image": "/art/warsaw/departure.jpg",
        "a11y": "Pani Ewa agite son béret rouge pour dire au revoir à Murzik et Tom à la gare de Varsovie. Murzik tient la petite sirène en bronze.",
        "lines": [
          {
            "ru": "До свидания, Варшава! До свидания, пани Ева!",
            "en": "Au revoir, Varsovie ! Au revoir, Pani Ewa !"
          },
          {
            "ru": "Следующая остановка: Будапешт!",
            "en": "Prochain arrêt : Budapest !"
          }
        ]
      },
      {
        "image": "/art/warsaw/finale-5.jpg",
        "a11y": "Un train roule vers le sud à travers des collines vertes et des montagnes, de Varsovie vers Budapest.",
        "lines": [
          {
            "ru": "Варшава → Будапешт",
            "en": "Varsovie → Budapest"
          }
        ]
      },
      {
        "image": "/art/budapest/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Budapest : le grand bâtiment du Parlement et un pont à chaînes sur le large Danube.",
        "lines": [
          {
            "ru": "Привет, Будапешт!",
            "en": "Bonjour, Budapest !"
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
