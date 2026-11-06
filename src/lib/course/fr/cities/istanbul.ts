import type { CityPlan } from "../../types";

/** Istanbul in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const istanbulFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-istanbul-1",
      "level": "A1",
      "cityId": "istanbul",
      "number": 1,
      "title": "J'ai une réservation",
      "minutes": 5,
      "goals": [
        "Faire son check-in à l'hôtel",
        "Dire combien de nuits",
        "Demander si le petit-déjeuner est compris"
      ],
      "vocabNote": "Бронь, c'est une réservation. Ночь (nuit) change comme час : одна ночь, две ночи, пять ночей.",
      "vocab": [
        {
          "id": "is1-1",
          "ru": "У меня бронь.",
          "en": "J'ai une réservation.",
          "a11y": "Tom est à la réception d'un hôtel avec sa valise et sourit.",
          "audioLabel": "Écouter У меня бронь",
          "image": "/art/istanbul/1-1.jpg"
        },
        {
          "id": "is1-2",
          "ru": "На имя Том Браун.",
          "en": "Au nom de Tom Brown.",
          "a11y": "Le réceptionniste regarde l'écran de son ordinateur et trouve la réservation.",
          "audioLabel": "Écouter На имя Том Браун",
          "image": "/art/istanbul/1-2.jpg"
        },
        {
          "id": "is1-3",
          "ru": "На сколько ночей?",
          "en": "Pour combien de nuits ?",
          "a11y": "Le réceptionniste lève les sourcils avec un sourire aimable ; par la fenêtre, la lune.",
          "audioLabel": "Écouter На сколько ночей",
          "image": "/art/istanbul/1-3.jpg"
        },
        {
          "id": "is1-4",
          "ru": "На три ночи.",
          "en": "Pour trois nuits.",
          "a11y": "Trois petites lunes alignées.",
          "audioLabel": "Écouter На три ночи",
          "image": "/art/istanbul/1-4.jpg"
        },
        {
          "id": "is1-5",
          "ru": "Вот ваш ключ.",
          "en": "Voici votre clé.",
          "a11y": "Le réceptionniste tend à Tom une vieille clé en laiton avec un gros pompon.",
          "audioLabel": "Écouter Вот ваш ключ",
          "image": "/art/istanbul/1-5.jpg"
        },
        {
          "id": "is1-6",
          "ru": "Это хорошая гостиница.",
          "en": "C'est un bon hôtel.",
          "a11y": "Un petit hôtel charmant avec des fleurs aux balcons et une vue sur la mer.",
          "audioLabel": "Écouter Это хорошая гостиница",
          "image": "/art/istanbul/1-6b.jpg"
        },
        {
          "id": "is1-7",
          "ru": "Завтрак включён?",
          "en": "Le petit-déjeuner est compris ?",
          "a11y": "Une table de petit-déjeuner avec du pain, du fromage, des olives, des tomates et du thé dans des verres en forme de tulipe.",
          "audioLabel": "Écouter Завтрак включён",
          "image": "/art/istanbul/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "À la réception",
        "note": "Номер veut dire à la fois « numéro » et « chambre d'hôtel ». С семи до десяти — de sept heures à dix heures.",
        "lines": [
          {
            "speaker": "receptionist",
            "ru": "Добрый вечер! Добро пожаловать!",
            "en": "Bonsoir ! Bienvenue !"
          },
          {
            "speaker": "tom",
            "ru": "Добрый вечер! У меня бронь. На имя Том Браун.",
            "en": "Bonsoir ! J'ai une réservation. Au nom de Tom Brown."
          },
          {
            "speaker": "receptionist",
            "ru": "Да, вот. На сколько ночей?",
            "en": "Oui, la voici. Pour combien de nuits ?"
          },
          {
            "speaker": "tom",
            "ru": "На три ночи.",
            "en": "Pour trois nuits."
          },
          {
            "speaker": "receptionist",
            "ru": "Хорошо. Вот ваш ключ. Номер двенадцать.",
            "en": "Bien. Voici votre clé. Chambre douze."
          },
          {
            "speaker": "murzik",
            "ru": "А завтрак включён?",
            "en": "Et le petit-déjeuner est compris ?"
          },
          {
            "speaker": "receptionist",
            "ru": "Конечно! С семи до десяти.",
            "en": "Bien sûr ! De sept heures à dix heures."
          },
          {
            "speaker": "murzik",
            "ru": "Ура! Это хорошая гостиница!",
            "en": "Youpi ! C'est un bon hôtel !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "is1-d1",
          "prompt": "Combien de nuits vont-ils rester ?",
          "options": [
            {
              "label": "Trois.",
              "correct": true
            },
            {
              "label": "Deux.",
              "correct": false
            },
            {
              "label": "Douze.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Ночь, ночи, ночей",
          "paragraphs": [
            "Ça marche comme час et год : одна ночь, две / три / четыре ночи, пять ночей.",
            "На + nombre veut dire « pour » : на одну ночь, на три ночи, на пять ночей."
          ],
          "examples": [
            {
              "ru": "на одну ночь",
              "en": "pour une nuit"
            },
            {
              "ru": "на пять ночей",
              "en": "pour cinq nuits"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "is1-t1",
          "prompt": "Écoute. Pour combien de nuits ?",
          "skill": "listening",
          "audio": "На пять ночей.",
          "options": [
            {
              "label": "Cinq.",
              "correct": true
            },
            {
              "label": "Quatre.",
              "correct": false
            },
            {
              "label": "Deux.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "is1-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "бронь",
              "right": "réservation"
            },
            {
              "left": "ключ",
              "right": "clé"
            },
            {
              "left": "завтрак",
              "right": "petit-déjeuner"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "is1-t3",
          "prompt": "Complète : « pour deux nuits ».",
          "before": "на две",
          "after": "",
          "answer": "ночи",
          "options": [
            "ночи",
            "ночей",
            "ночь"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "is1-t4",
          "prompt": "Forme le mot « petit-déjeuner ».",
          "word": "завтрак",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "is1-t5",
          "prompt": "Добрый вечер! Чем могу помочь?",
          "model": "У меня бронь. На три ночи.",
          "modelEn": "J'ai une réservation. Pour trois nuits.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu arrives à l'hôtel. Dis que tu as une réservation pour trois nuits."
        },
        {
          "kind": "choice",
          "id": "is1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Когда у тебя день рождения?",
          "options": [
            {
              "label": "Пятого мая.",
              "correct": true
            },
            {
              "label": "На три ночи.",
              "correct": false
            },
            {
              "label": "Номер двенадцать.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "brass-lamp",
        "itemName": "Lampe en mosaïque",
        "itemNameRu": "Лампа",
        "ru": "Ура! Разноцветная лампа!",
        "en": "Youpi ! Une lampe colorée !",
        "a11y": "Une suspension faite de nombreux petits morceaux de verre coloré brille dans la chambre d'hôtel. Par la porte du balcon, le Bosphore scintille dans la nuit.",
        "image": "/art/istanbul/reward-1.jpg",
        "steps": [
          "La chambre douze a un petit balcon.",
          "De là, on voit la mer et les bateaux.",
          "Au-dessus du lit est suspendue une lampe en verre coloré.",
          "Elle jette de petites couleurs sur tous les murs."
        ],
        "bridge": "Le matin, Murzik ouvre la douche… et rien ne se passe."
      }
    },
    {
      "id": "a1-istanbul-2",
      "level": "A1",
      "cityId": "istanbul",
      "number": 2,
      "title": "Ça ne marche pas !",
      "minutes": 6,
      "goals": [
        "Dire que quelque chose ne marche pas",
        "Dire que quelque chose manque",
        "Demander une autre chambre"
      ],
      "vocabNote": "Нет + chose utilise la forme « de » : вода → нет воды, полотенца → нет полотенец — comme « pas d'eau, pas de serviettes ». Tu l'as vu à Prague : У меня нет шапки.",
      "vocab": [
        {
          "id": "is2-1",
          "ru": "Не работает кондиционер.",
          "en": "La climatisation ne marche pas.",
          "a11y": "Tom appuie sur le bouton d'un climatiseur ; rien ne se passe ; il s'évente dans la chaleur.",
          "audioLabel": "Écouter Не работает кондиционер",
          "image": "/art/istanbul/2-1.jpg"
        },
        {
          "id": "is2-2",
          "ru": "Нет горячей воды.",
          "en": "Il n'y a pas d'eau chaude.",
          "a11y": "Murzik sous une douche froide, le poil hérissé.",
          "audioLabel": "Écouter Нет горячей воды",
          "image": "/art/istanbul/2-2.jpg"
        },
        {
          "id": "is2-3",
          "ru": "Нет полотенец.",
          "en": "Il n'y a pas de serviettes.",
          "a11y": "Un porte-serviettes vide dans une salle de bains d'hôtel ; Murzik dégouline sur le sol.",
          "audioLabel": "Écouter Нет полотенец",
          "image": "/art/istanbul/2-3.jpg"
        },
        {
          "id": "is2-4",
          "ru": "Можно другой номер?",
          "en": "On peut avoir une autre chambre ?",
          "a11y": "Tom demande à la réception en montrant l'étage.",
          "audioLabel": "Écouter Можно другой номер",
          "image": "/art/istanbul/2-4.jpg"
        },
        {
          "id": "is2-5",
          "ru": "Извините за неудобства.",
          "en": "Désolé pour le dérangement.",
          "a11y": "Le réceptionniste pose la main sur son cœur et baisse poliment la tête.",
          "audioLabel": "Écouter Извините за неудобства",
          "image": "/art/istanbul/2-5.jpg"
        },
        {
          "id": "is2-6",
          "ru": "Сейчас всё исправим.",
          "en": "Nous allons tout réparer tout de suite.",
          "a11y": "Un réparateur avec une boîte à outils se dirige vite vers la chambre.",
          "audioLabel": "Écouter Сейчас всё исправим",
          "image": "/art/istanbul/2-6.jpg"
        },
        {
          "id": "is2-7",
          "ru": "Теперь всё в порядке.",
          "en": "Maintenant, tout va bien.",
          "a11y": "Murzik, enveloppé dans une grande serviette moelleuse, lève le pouce.",
          "audioLabel": "Écouter Теперь всё в порядке",
          "image": "/art/istanbul/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La chambre douze",
        "note": "И ещё — et aussi. Через пять минут — dans cinq minutes (tu connais через depuis Berlin).",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Извините, в номере двенадцать не работает кондиционер.",
            "en": "Excusez-moi, dans la chambre douze, la climatisation ne marche pas."
          },
          {
            "speaker": "murzik",
            "ru": "И нет горячей воды! И нет полотенец!",
            "en": "Et il n'y a pas d'eau chaude ! Et il n'y a pas de serviettes !"
          },
          {
            "speaker": "receptionist",
            "ru": "Ой! Извините за неудобства. Сейчас всё исправим.",
            "en": "Oh ! Désolé pour le dérangement. Nous allons tout réparer tout de suite."
          },
          {
            "speaker": "tom",
            "ru": "А можно другой номер?",
            "en": "Et on peut avoir une autre chambre ?"
          },
          {
            "speaker": "receptionist",
            "ru": "К сожалению, нет. Но мастер будет через пять минут.",
            "en": "Malheureusement non. Mais le réparateur sera là dans cinq minutes."
          },
          {
            "speaker": "murzik",
            "ru": "Ура! Теперь всё в порядке!",
            "en": "Youpi ! Maintenant, tout va bien !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "is2-d1",
          "prompt": "Qu'est-ce qui n'est PAS un problème dans la chambre douze ?",
          "options": [
            {
              "label": "La clé ne marche pas.",
              "correct": true
            },
            {
              "label": "Il n'y a pas d'eau chaude.",
              "correct": false
            },
            {
              "label": "Il n'y a pas de serviettes.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Нет + la forme « de »",
          "paragraphs": [
            "Есть вода. → Нет воды. Есть шапка. → Нет шапки. Есть полотенца. → Нет полотенец.",
            "Il suffit d'apprendre les plus courants comme des phrases : нет воды, нет света (pas de lumière), нет интернета."
          ],
          "examples": [
            {
              "ru": "Нет интернета.",
              "en": "Il n'y a pas d'internet."
            },
            {
              "ru": "Нет света.",
              "en": "Il n'y a pas de lumière."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "is2-t1",
          "prompt": "Écoute. Quel est le problème ?",
          "skill": "listening",
          "audio": "Нет интернета.",
          "options": [
            {
              "label": "Il n'y a pas d'internet.",
              "correct": true
            },
            {
              "label": "Il n'y a pas d'eau chaude.",
              "correct": false
            },
            {
              "label": "La lumière ne marche pas.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "is2-t2",
          "prompt": "Que veut dire Извините за неудобства ?",
          "skill": "words",
          "options": [
            {
              "label": "Désolé pour le dérangement.",
              "correct": true
            },
            {
              "label": "Maintenant, tout va bien.",
              "correct": false
            },
            {
              "label": "On peut avoir une autre chambre ?",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "is2-t3",
          "prompt": "Complète : « Il n'y a pas d'eau chaude. »",
          "before": "Нет горячей",
          "after": ".",
          "answer": "воды",
          "options": [
            "воды",
            "вода",
            "воду"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "is2-t4",
          "prompt": "Quelle lettre manque ? (serviette)",
          "before": "пол",
          "after": "тенце",
          "answer": "о",
          "options": [
            "о",
            "а",
            "е"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "is2-t5",
          "prompt": "Чем могу помочь?",
          "model": "В номере нет горячей воды.",
          "modelEn": "Il n'y a pas d'eau chaude dans la chambre.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Appelle la réception et dis qu'il n'y a pas d'eau chaude."
        },
        {
          "kind": "choice",
          "id": "is2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "На сколько ночей?",
          "options": [
            {
              "label": "На три ночи.",
              "correct": true
            },
            {
              "label": "Номер двенадцать.",
              "correct": false
            },
            {
              "label": "Нет полотенец.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "tea-glasses",
        "itemName": "Verres à thé",
        "itemNameRu": "Стаканчики",
        "ru": "Ура! Стаканчики для чая!",
        "en": "Youpi ! De petits verres à thé !",
        "a11y": "Deux petits verres en forme de tulipe remplis de thé rouge, sur de petites soucoupes, sont posés sur la table du balcon.",
        "image": "/art/istanbul/reward-2.jpg",
        "steps": [
          "Pour s'excuser, le réceptionniste apporte du thé.",
          "Il est servi dans de petits verres en forme de tulipe.",
          "« Pour vous. Un cadeau », dit-il.",
          "Du thé sur le balcon, avec vue sur la mer."
        ],
        "bridge": "Murzik et Tom veulent aller en ville. Mais d'abord, quelques demandes à la réception."
      }
    },
    {
      "id": "a1-istanbul-3",
      "level": "A1",
      "cityId": "istanbul",
      "number": 3,
      "title": "Je pourrais avoir… ?",
      "minutes": 6,
      "goals": [
        "Faire des demandes polies à l'hôtel",
        "Demander un taxi ou un réveil",
        "Demander le mot de passe du wifi"
      ],
      "vocabNote": "Après можно et les autres mots pour « donnez-moi », les mots féminins changent -а en -у : подушка → одну подушку, карта → карту.",
      "vocab": [
        {
          "id": "is3-1",
          "ru": "Можно ещё одну подушку?",
          "en": "Je pourrais avoir un oreiller de plus ?",
          "a11y": "Murzik serre un oreiller dans ses pattes et lève un doigt à la réception.",
          "audioLabel": "Écouter Можно ещё одну подушку",
          "image": "/art/istanbul/3-1.jpg"
        },
        {
          "id": "is3-2",
          "ru": "Разбудите меня в семь, пожалуйста.",
          "en": "Réveillez-moi à sept heures, s'il vous plaît.",
          "a11y": "Murzik montre une horloge qui indique sept heures en parlant au réceptionniste.",
          "audioLabel": "Écouter Разбудите меня в семь, пожалуйста",
          "image": "/art/istanbul/3-2.jpg"
        },
        {
          "id": "is3-3",
          "ru": "Можно оставить чемодан?",
          "en": "Je peux laisser ma valise ?",
          "a11y": "Tom pose une valise à côté de la réception.",
          "audioLabel": "Écouter Можно оставить чемодан",
          "image": "/art/istanbul/3-3.jpg"
        },
        {
          "id": "is3-4",
          "ru": "Вызовите такси, пожалуйста.",
          "en": "Appelez un taxi, s'il vous plaît.",
          "a11y": "Un taxi jaune attend devant l'hôtel.",
          "audioLabel": "Écouter Вызовите такси, пожалуйста",
          "image": "/art/istanbul/3-4.jpg"
        },
        {
          "id": "is3-5",
          "ru": "Какой пароль от вай-фая?",
          "en": "Quel est le mot de passe du wifi ?",
          "a11y": "Tom lève son téléphone et regarde le réceptionniste.",
          "audioLabel": "Écouter Какой пароль от вай-фая",
          "image": "/art/istanbul/3-5.jpg"
        },
        {
          "id": "is3-6",
          "ru": "Без проблем.",
          "en": "Pas de problème.",
          "a11y": "Le réceptionniste lève le pouce, l'air aimable.",
          "audioLabel": "Écouter Без проблем",
          "image": "/art/istanbul/3-6.jpg"
        },
        {
          "id": "is3-7",
          "ru": "Мы скоро вернёмся.",
          "en": "Nous revenons bientôt.",
          "a11y": "Murzik et Tom font signe à la porte de l'hôtel en partant.",
          "audioLabel": "Écouter Мы скоро вернёмся",
          "image": "/art/istanbul/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Avant de sortir",
        "note": "Вот, пожалуйста — voici. Пароль — mot de passe.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Извините, можно оставить чемодан? Мы идём в город.",
            "en": "Excusez-moi, on peut laisser la valise ? Nous allons en ville."
          },
          {
            "speaker": "receptionist",
            "ru": "Без проблем. Оставьте здесь.",
            "en": "Pas de problème. Laissez-la ici."
          },
          {
            "speaker": "murzik",
            "ru": "И можно ещё одну подушку?",
            "en": "Et je pourrais avoir un oreiller de plus ?"
          },
          {
            "speaker": "receptionist",
            "ru": "Конечно.",
            "en": "Bien sûr."
          },
          {
            "speaker": "tom",
            "ru": "А какой пароль от вай-фая?",
            "en": "Et quel est le mot de passe du wifi ?"
          },
          {
            "speaker": "receptionist",
            "ru": "Вот, пожалуйста. Вызвать такси?",
            "en": "Voici. Je vous appelle un taxi ?"
          },
          {
            "speaker": "tom",
            "ru": "Нет, спасибо. Мы пешком. Мы скоро вернёмся!",
            "en": "Non, merci. Nous y allons à pied. Nous revenons bientôt !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "is3-d1",
          "prompt": "Où laissent-ils la valise ?",
          "options": [
            {
              "label": "À la réception.",
              "correct": true
            },
            {
              "label": "Dans un taxi.",
              "correct": false
            },
            {
              "label": "Dans la chambre douze.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Les mots féminins après можно : -у",
          "paragraphs": [
            "Quand tu demandes un mot féminin, -а devient -у : подушка → Можно подушку? карта → Дайте карту, пожалуйста.",
            "Les mots masculins ne changent pas : Можно чемодан? Можно ключ?"
          ],
          "examples": [
            {
              "ru": "Можно карту?",
              "en": "Je pourrais avoir un plan ?"
            },
            {
              "ru": "Дайте, пожалуйста, воду.",
              "en": "Je pourrais avoir de l'eau, s'il vous plaît ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "is3-t1",
          "prompt": "Écoute. À quelle heure est le réveil ?",
          "skill": "listening",
          "audio": "Разбудите меня в шесть, пожалуйста.",
          "options": [
            {
              "label": "À six heures.",
              "correct": true
            },
            {
              "label": "À sept heures.",
              "correct": false
            },
            {
              "label": "À dix heures.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "is3-t2",
          "prompt": "Il te faut un taxi pour l'aéroport. Que dis-tu à la réception ?",
          "skill": "words",
          "options": [
            {
              "label": "Вызовите такси, пожалуйста.",
              "correct": true
            },
            {
              "label": "Можно оставить чемодан?",
              "correct": false
            },
            {
              "label": "Какой пароль от вай-фая?",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "is3-t3",
          "prompt": "Complète : « Je pourrais avoir un plan ? »",
          "before": "Можно",
          "after": "?",
          "answer": "карту",
          "options": [
            "карту",
            "карта",
            "карты"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "is3-t4",
          "prompt": "Forme le mot « oreiller / coussin ».",
          "word": "подушка",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "is3-t5",
          "prompt": "Чем могу помочь?",
          "model": "Какой пароль от вай-фая?",
          "modelEn": "Quel est le mot de passe du wifi ?",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Il te faut internet. Demande au réceptionniste le mot de passe du wifi."
        },
        {
          "kind": "choice",
          "id": "is3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Извините, нет горячей воды.",
          "options": [
            {
              "label": "Извините за неудобства. Сейчас всё исправим.",
              "correct": true
            },
            {
              "label": "Без проблем. Оставьте здесь.",
              "correct": false
            },
            {
              "label": "Завтрак включён.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "turkish-delight",
        "itemName": "Boîte de loukoums",
        "itemNameRu": "Лукум",
        "ru": "Ура! Коробка лукума!",
        "en": "Youpi ! Une boîte de loukoums !",
        "a11y": "Une boîte ronde en bois ouverte, pleine de loukoums roses et blancs saupoudrés de sucre, sur la table du balcon.",
        "image": "/art/istanbul/reward-3.jpg",
        "steps": [
          "Au vieux bazar, il y a tant de sucreries.",
          "Murzik goûte un loukoum.",
          "C'est doux et sucré, et ça sent la rose.",
          "Tom achète une boîte entière."
        ],
        "bridge": "Ils reviennent à l'hôtel chercher la valise. Le réceptionniste regarde derrière le comptoir… La valise a disparu !"
      }
    },
    {
      "id": "a1-istanbul-4",
      "level": "A1",
      "cityId": "istanbul",
      "number": 4,
      "title": "La valise perdue",
      "minutes": 6,
      "goals": [
        "Dire que tu as perdu quelque chose",
        "Décrire à quoi ça ressemble",
        "Consoler un ami"
      ],
      "vocabNote": "Мы потеряли est le passé pour « nous » : le même pour tout le monde. Был est le passé de « être » pour un mot masculin : Чемодан был здесь.",
      "vocab": [
        {
          "id": "is4-1",
          "ru": "Мы потеряли чемодан!",
          "en": "Nous avons perdu notre valise !",
          "a11y": "Murzik et Tom regardent l'endroit vide derrière la réception, l'air choqué.",
          "audioLabel": "Écouter Мы потеряли чемодан",
          "image": "/art/istanbul/4-1.jpg"
        },
        {
          "id": "is4-2",
          "ru": "Он был здесь!",
          "en": "Elle était ici !",
          "a11y": "Murzik montre un endroit vide par terre.",
          "audioLabel": "Écouter Он был здесь",
          "image": "/art/istanbul/4-2.jpg"
        },
        {
          "id": "is4-3",
          "ru": "Как он выглядит?",
          "en": "À quoi ressemble-t-elle ?",
          "a11y": "Le réceptionniste tient un bloc-notes et un stylo, prêt à écrire.",
          "audioLabel": "Écouter Как он выглядит",
          "image": "/art/istanbul/4-3.jpg"
        },
        {
          "id": "is4-4",
          "ru": "Большой и коричневый.",
          "en": "Grande et marron.",
          "a11y": "Murzik ouvre grand les bras pour montrer une grande valise ; à côté de lui, une tache de couleur marron.",
          "audioLabel": "Écouter Большой и коричневый",
          "image": "/art/istanbul/4-4.jpg"
        },
        {
          "id": "is4-5",
          "ru": "Там все мои вещи!",
          "en": "Toutes mes affaires sont dedans !",
          "a11y": "Dans une bulle au-dessus de Murzik : sa gamelle, la théière, l'éventail, la photo de famille, le réveil, les sabots, la boîte à musique, la marionnette, l'azulejo et la carte postale.",
          "audioLabel": "Écouter Там все мои вещи",
          "image": "/art/istanbul/4-5.jpg"
        },
        {
          "id": "is4-6",
          "ru": "Мы обязательно поищем.",
          "en": "Nous allons la chercher, c'est promis.",
          "a11y": "Le réceptionniste et un bagagiste commencent à fouiller l'hôtel.",
          "audioLabel": "Écouter Мы обязательно поищем",
          "image": "/art/istanbul/4-6.jpg"
        },
        {
          "id": "is4-7",
          "ru": "Не плачь!",
          "en": "Ne pleure pas !",
          "a11y": "Tom serre Murzik dans ses bras ; une larme coule sur sa joue.",
          "audioLabel": "Écouter Не плачь",
          "image": "/art/istanbul/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Où est-elle ?",
        "note": "Моя миска, мой чайник — ma gamelle, ma théière. Мы найдём — nous la retrouverons.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том! Мы потеряли чемодан!",
            "en": "Tom ! Nous avons perdu la valise !"
          },
          {
            "speaker": "tom",
            "ru": "Извините, где наш чемодан? Он был здесь!",
            "en": "Excusez-moi, où est notre valise ? Elle était ici !"
          },
          {
            "speaker": "receptionist",
            "ru": "Ой… А как он выглядит?",
            "en": "Oh… Et à quoi ressemble-t-elle ?"
          },
          {
            "speaker": "tom",
            "ru": "Большой и коричневый.",
            "en": "Grande et marron."
          },
          {
            "speaker": "murzik",
            "ru": "Там все мои вещи! Моя миска, мой чайник, открытка…",
            "en": "Toutes mes affaires sont dedans ! Ma gamelle, ma théière, la carte postale…"
          },
          {
            "speaker": "receptionist",
            "ru": "Не волнуйтесь. Мы обязательно поищем.",
            "en": "Ne vous inquiétez pas. Nous allons la chercher, c'est promis."
          },
          {
            "speaker": "tom",
            "ru": "Мурзик, не плачь. Мы найдём.",
            "en": "Murzik, ne pleure pas. Nous la retrouverons."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "is4-d1",
          "prompt": "À quoi ressemble la valise ?",
          "options": [
            {
              "label": "Grande et marron.",
              "correct": true
            },
            {
              "label": "Petite et rouge.",
              "correct": false
            },
            {
              "label": "Grande et bleue.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Был, была, было, были",
          "paragraphs": [
            "Le passé de « être » change avec le mot : чемодан был, сумка была, письмо было, вещи были.",
            "Он был здесь — Elle (la valise, чемодан est masculin) était ici. Она была здесь — Il (le sac, сумка est féminin) était ici. Attention : le genre russe n'est pas toujours le genre français !"
          ],
          "examples": [
            {
              "ru": "Сумка была здесь.",
              "en": "Le sac était ici."
            },
            {
              "ru": "Вещи были в чемодане.",
              "en": "Les affaires étaient dans la valise."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "is4-t1",
          "prompt": "Écoute. À quoi ressemble le sac ?",
          "skill": "listening",
          "audio": "Сумка маленькая и красная.",
          "options": [
            {
              "label": "Petite et rouge.",
              "correct": true
            },
            {
              "label": "Grande et marron.",
              "correct": false
            },
            {
              "label": "Petit et noir.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "is4-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Мы потеряли чемодан!",
              "right": "Nous avons perdu notre valise !"
            },
            {
              "left": "Не плачь!",
              "right": "Ne pleure pas !"
            },
            {
              "left": "Там все мои вещи!",
              "right": "Toutes mes affaires sont dedans !"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "is4-t3",
          "prompt": "Complète : « Le sac était ici. »",
          "before": "Сумка",
          "after": "здесь.",
          "answer": "была",
          "options": [
            "была",
            "был",
            "были"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "is4-t4",
          "prompt": "Quelle lettre manque ? (valise)",
          "before": "чем",
          "after": "дан",
          "answer": "о",
          "options": [
            "о",
            "а",
            "е"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "is4-t5",
          "prompt": "Как выглядит ваш чемодан?",
          "model": "Большой и коричневый.",
          "modelEn": "Grande et marron.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Décris ta valise perdue : sa taille et sa couleur."
        },
        {
          "kind": "choice",
          "id": "is4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Можно оставить чемодан?",
          "options": [
            {
              "label": "Без проблем.",
              "correct": true
            },
            {
              "label": "Не плачь!",
              "correct": false
            },
            {
              "label": "Большой и коричневый.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "flashlight",
        "itemName": "Lampe de poche",
        "itemNameRu": "Фонарик",
        "ru": "Фонарик… для поисков.",
        "en": "Une lampe de poche… pour les recherches.",
        "a11y": "Murzik tient une petite lampe de poche et éclaire sous l'escalier de l'hôtel, l'air très déterminé.",
        "image": "/art/istanbul/reward-4.jpg",
        "steps": [
          "Le réceptionniste donne une lampe de poche à Murzik.",
          "Murzik regarde sous les lits.",
          "Il regarde derrière les rideaux.",
          "Rien. Il n'abandonne pas."
        ],
        "bridge": "Pendant que l'hôtel cherche, Tom a une idée : la poste. Peut-être que quelqu'un là-bas se souvient de la carte."
      }
    },
    {
      "id": "a1-istanbul-5",
      "level": "A1",
      "cityId": "istanbul",
      "number": 5,
      "title": "À la poste",
      "minutes": 6,
      "goals": [
        "Demander où est la poste",
        "Envoyer une carte postale",
        "Dire « Je veux… »"
      ],
      "vocabNote": "Хочу + action veut dire « Je veux… » : Я хочу отправить открытку. Tu connais хочешь depuis Paris.",
      "vocab": [
        {
          "id": "is5-1",
          "ru": "Где почта?",
          "en": "Où est la poste ?",
          "a11y": "Murzik et Tom regardent autour d'eux dans une vieille rue animée pleine de boutiques.",
          "audioLabel": "Écouter Где почта",
          "image": "/art/istanbul/5-1.jpg"
        },
        {
          "id": "is5-2",
          "ru": "Я хочу отправить открытку.",
          "en": "Je veux envoyer une carte postale.",
          "a11y": "Au guichet de la poste, Murzik montre une carte postale d'Istanbul.",
          "audioLabel": "Écouter Я хочу отправить открытку",
          "image": "/art/istanbul/5-2.jpg"
        },
        {
          "id": "is5-3",
          "ru": "марка",
          "en": "timbre",
          "a11y": "Un timbre coloré avec une mouette.",
          "audioLabel": "Écouter марка",
          "image": "/art/istanbul/5-3.jpg"
        },
        {
          "id": "is5-4",
          "ru": "в Рим",
          "en": "pour Rome",
          "a11y": "Une flèche va d'Istanbul vers un petit dessin du Colisée.",
          "audioLabel": "Écouter в Рим",
          "image": "/art/istanbul/5-4.jpg"
        },
        {
          "id": "is5-5",
          "ru": "Кто отправил эту открытку?",
          "en": "Qui a envoyé cette carte ?",
          "a11y": "Murzik montre la mystérieuse carte d'anniversaire à une employée de la poste.",
          "audioLabel": "Écouter Кто отправил эту открытку",
          "image": "/art/istanbul/5-5.jpg"
        },
        {
          "id": "is5-6",
          "ru": "Я не помню.",
          "en": "Je ne me souviens pas.",
          "a11y": "L'employée hausse les épaules, l'air gentil et désolé.",
          "audioLabel": "Écouter Я не помню",
          "image": "/art/istanbul/5-6.jpg"
        },
        {
          "id": "is5-7",
          "ru": "Каждый день — сотни открыток.",
          "en": "Des centaines de cartes chaque jour.",
          "a11y": "Une énorme pile de cartes postales et de lettres sur le guichet de la poste.",
          "audioLabel": "Écouter Каждый день — сотни открыток",
          "image": "/art/istanbul/5-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le cachet de la poste",
        "note": "Барсику — à Barsik. Жаль — dommage.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Здравствуйте! Я хочу отправить открытку в Рим. Барсику!",
            "en": "Bonjour ! Je veux envoyer une carte postale à Rome. À Barsik !"
          },
          {
            "speaker": "cashier",
            "ru": "Конечно. Вот марка.",
            "en": "Bien sûr. Voici un timbre."
          },
          {
            "speaker": "tom",
            "ru": "И ещё вопрос. Кто отправил эту открытку? Отсюда.",
            "en": "Et encore une question. Qui a envoyé cette carte ? D'ici."
          },
          {
            "speaker": "cashier",
            "ru": "Ой… Я не помню. Каждый день — сотни открыток.",
            "en": "Oh… Je ne me souviens pas. Des centaines de cartes chaque jour."
          },
          {
            "speaker": "murzik",
            "ru": "Жаль…",
            "en": "Dommage…"
          },
          {
            "speaker": "cashier",
            "ru": "Но эта кошка… Красивая. Как вы!",
            "en": "Mais ce chat… Il est joli. Comme toi !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "is5-d1",
          "prompt": "L'employée sait-elle qui a envoyé la carte ?",
          "options": [
            {
              "label": "Non, elle ne s'en souvient pas.",
              "correct": true
            },
            {
              "label": "Oui, une vieille dame.",
              "correct": false
            },
            {
              "label": "Oui, un ami de Tom.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Хочу + action",
          "paragraphs": [
            "я хочу, ты хочешь + action : Я хочу отправить открытку. Ты хочешь купить марку?",
            "Хочу + lieu veut dire « je veux aller à… » : Я хочу в Рим. (Tu as vu Ты хочешь в Лондон? à Paris.)"
          ],
          "examples": [
            {
              "ru": "Я хочу купить марку.",
              "en": "Je veux acheter un timbre."
            },
            {
              "ru": "Ты хочешь отправить письмо?",
              "en": "Tu veux envoyer une lettre ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "is5-t1",
          "prompt": "Écoute. Où cette personne veut-elle envoyer la carte ?",
          "skill": "listening",
          "audio": "Я хочу отправить открытку в Лондон.",
          "options": [
            {
              "label": "À Londres.",
              "correct": true
            },
            {
              "label": "À Rome.",
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
          "id": "is5-t2",
          "prompt": "Qu'est-ce que марка ?",
          "skill": "words",
          "options": [
            {
              "label": "un timbre",
              "correct": true
            },
            {
              "label": "une carte postale",
              "correct": false
            },
            {
              "label": "une poste",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "is5-t3",
          "prompt": "Complète : « Je veux envoyer une lettre. »",
          "before": "Я",
          "after": "отправить письмо.",
          "answer": "хочу",
          "options": [
            "хочу",
            "хочешь",
            "хочет"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "is5-t4",
          "prompt": "Forme le mot « poste ».",
          "word": "почта",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "is5-t5",
          "prompt": "Что вы хотите?",
          "model": "Я хочу отправить открытку.",
          "modelEn": "Je veux envoyer une carte postale.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es à la poste. Dis que tu veux envoyer une carte postale."
        },
        {
          "kind": "choice",
          "id": "is5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Мы потеряли чемодан!",
          "options": [
            {
              "label": "Не волнуйтесь. Мы обязательно поищем.",
              "correct": true
            },
            {
              "label": "Вот марка.",
              "correct": false
            },
            {
              "label": "Без проблем.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "stamp-album",
        "itemName": "Album de timbres",
        "itemNameRu": "Марки",
        "ru": "Ура! Альбом для марок!",
        "en": "Youpi ! Un album de timbres !",
        "a11y": "Murzik ouvre un petit album de timbres bleu, avec quelques timbres colorés de différents pays.",
        "image": "/art/istanbul/reward-5.jpg",
        "steps": [
          "L'employée a de la peine pour Murzik.",
          "Elle lui donne un petit album de timbres.",
          "Dedans, il y a des timbres de nombreux pays.",
          "« Commence une collection ! » dit-elle."
        ],
        "bridge": "De retour à l'hôtel, le réceptionniste court vers eux : « Venez vite ! La buanderie ! »"
      }
    },
    {
      "id": "a1-istanbul-6",
      "level": "A1",
      "cityId": "istanbul",
      "number": 6,
      "title": "Retrouvée !",
      "minutes": 6,
      "goals": [
        "Dire que quelque chose a été retrouvé",
        "Vérifier que rien ne manque",
        "Dire un grand merci"
      ],
      "vocabNote": "Le passé change avec la chose : чемодан нашёлся (mot masculin), сумка нашлась (mot féminin). Нашёлся veut dire « a été retrouvé ».",
      "vocab": [
        {
          "id": "is6-1",
          "ru": "Чемодан нашёлся!",
          "en": "La valise a été retrouvée !",
          "a11y": "Le réceptionniste montre une grande valise marron dans une buanderie pleine de draps blancs.",
          "audioLabel": "Écouter Чемодан нашёлся",
          "image": "/art/istanbul/6-1.jpg"
        },
        {
          "id": "is6-2",
          "ru": "Вот он!",
          "en": "La voilà !",
          "a11y": "Murzik court vers la valise marron, les bras grands ouverts.",
          "audioLabel": "Écouter Вот он",
          "image": "/art/istanbul/6-2.jpg"
        },
        {
          "id": "is6-3",
          "ru": "Какое счастье!",
          "en": "Quel bonheur !",
          "a11y": "Murzik serre la valise dans ses bras, les yeux fermés et un immense sourire aux lèvres.",
          "audioLabel": "Écouter Какое счастье",
          "image": "/art/istanbul/6-3.jpg"
        },
        {
          "id": "is6-4",
          "ru": "Всё на месте?",
          "en": "Tout est là ?",
          "a11y": "Tom ouvre la valise et regarde dedans.",
          "audioLabel": "Écouter Всё на месте",
          "image": "/art/istanbul/6-4.jpg"
        },
        {
          "id": "is6-5",
          "ru": "Ничего не пропало.",
          "en": "Rien n'a disparu.",
          "a11y": "Dans la valise ouverte : la gamelle, la théière, l'éventail, la photo de famille, le réveil, les sabots, la boîte à musique, la marionnette, l'azulejo et la carte postale.",
          "audioLabel": "Écouter Ничего не пропало",
          "image": "/art/istanbul/6-5.jpg"
        },
        {
          "id": "is6-6",
          "ru": "Кто его нашёл?",
          "en": "Qui l'a retrouvée ?",
          "a11y": "Murzik regarde autour de lui dans la buanderie, l'air interrogateur.",
          "audioLabel": "Écouter Кто его нашёл",
          "image": "/art/istanbul/6-6.jpg"
        },
        {
          "id": "is6-7",
          "ru": "Спасибо огромное!",
          "en": "Merci infiniment !",
          "a11y": "Murzik serre la main du réceptionniste à deux pattes.",
          "audioLabel": "Écouter Спасибо огромное",
          "image": "/art/istanbul/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La buanderie",
        "note": "Памук est le chat blanc tout duveteux de l'hôtel (un chat ordinaire — il ne parle pas !). Спит — il dort. Тёплый — chaud.",
        "lines": [
          {
            "speaker": "receptionist",
            "ru": "Смотрите! Чемодан нашёлся!",
            "en": "Regardez ! La valise a été retrouvée !"
          },
          {
            "speaker": "murzik",
            "ru": "Вот он! Какое счастье!",
            "en": "La voilà ! Quel bonheur !"
          },
          {
            "speaker": "tom",
            "ru": "А кто его нашёл?",
            "en": "Et qui l'a retrouvée ?"
          },
          {
            "speaker": "receptionist",
            "ru": "Памук! Наш кот. Он спит на нём. Чемодан тёплый!",
            "en": "Pamuk ! Notre chat. Il dort dessus. La valise est chaude !"
          },
          {
            "speaker": "tom",
            "ru": "Ха-ха! Мурзик, всё на месте?",
            "en": "Ha ha ! Murzik, tout est là ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да! Ничего не пропало. Спасибо огромное!",
            "en": "Oui ! Rien n'a disparu. Merci infiniment !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "is6-d1",
          "prompt": "Qui a retrouvé la valise ?",
          "options": [
            {
              "label": "Pamuk, le chat de l'hôtel.",
              "correct": true
            },
            {
              "label": "Tom.",
              "correct": false
            },
            {
              "label": "L'employée de la poste.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Le passé : -л, -ла, -ло, -ли",
          "paragraphs": [
            "Au passé, la terminaison montre qui ou quoi a fait l'action : чемодан нашёлся, сумка нашлась, письмо пришло, вещи пропали.",
            "Mots masculins : -л. Mots féminins : -ла. Mots neutres : -ло. Pluriel : -ли."
          ],
          "examples": [
            {
              "ru": "Сумка нашлась!",
              "en": "Le sac a été retrouvé !"
            },
            {
              "ru": "Письмо пришло.",
              "en": "La lettre est arrivée."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "is6-t1",
          "prompt": "Écoute. Qu'est-ce qui a été retrouvé ?",
          "skill": "listening",
          "audio": "Сумка нашлась!",
          "options": [
            {
              "label": "Le sac.",
              "correct": true
            },
            {
              "label": "La valise.",
              "correct": false
            },
            {
              "label": "La clé.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "is6-t2",
          "prompt": "On te rend tes affaires perdues. Que dis-tu à la personne qui t'a aidé ?",
          "skill": "words",
          "options": [
            {
              "label": "Спасибо огромное!",
              "correct": true
            },
            {
              "label": "Ничего не пропало.",
              "correct": false
            },
            {
              "label": "Кто его нашёл?",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "is6-t3",
          "prompt": "Laquelle est juste : « Le sac a été retrouvé ! » ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Сумка нашлась!",
              "correct": true
            },
            {
              "label": "Сумка нашёлся!",
              "correct": false
            },
            {
              "label": "Сумка нашлись!",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "is6-t4",
          "prompt": "Forme le mot « bonheur ».",
          "word": "счастье",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "is6-t5",
          "prompt": "Всё на месте?",
          "model": "Да! Ничего не пропало. Спасибо огромное!",
          "modelEn": "Oui ! Rien n'a disparu. Merci infiniment !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Ta valise perdue est de retour. Vérifie-la et remercie le réceptionniste."
        },
        {
          "kind": "choice",
          "id": "is6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Кто отправил эту открытку?",
          "options": [
            {
              "label": "Я не помню.",
              "correct": true
            },
            {
              "label": "Вот марка.",
              "correct": false
            },
            {
              "label": "Чемодан нашёлся!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "iznik-plate",
        "itemName": "Assiette peinte",
        "itemNameRu": "Тарелка",
        "ru": "Ура! Расписная тарелка!",
        "en": "Youpi ! Une assiette peinte !",
        "a11y": "Une assiette ronde peinte de tulipes bleues et de fleurs rouges est accrochée au mur de la chambre d'hôtel. En dessous, Pamuk, un chat blanc tout duveteux, dort sur le lit de Murzik.",
        "image": "/art/istanbul/reward-6.jpg",
        "steps": [
          "Le patron de l'hôtel s'excuse encore.",
          "Il donne à Murzik une assiette peinte.",
          "Elle est décorée de tulipes bleues.",
          "Maintenant, Pamuk dort sur le lit de Murzik."
        ],
        "bridge": "Le dernier matin à Istanbul. Il est temps de payer et de dire au revoir."
      }
    },
    {
      "id": "a1-istanbul-7",
      "level": "A1",
      "cityId": "istanbul",
      "number": 7,
      "title": "Le départ",
      "minutes": 7,
      "goals": [
        "Quitter l'hôtel",
        "Dire que tout était parfait",
        "Comprendre des problèmes d'hôtel à l'oral"
      ],
      "vocabNote": "Мы выезжаем veut dire « nous libérons la chambre / nous partons ». Отзыв, c'est un avis.",
      "vocab": [
        {
          "id": "is7-1",
          "ru": "Мы выезжаем сегодня.",
          "en": "Nous partons aujourd'hui.",
          "a11y": "Tom est à la réception avec la valise et rend la clé en laiton.",
          "audioLabel": "Écouter Мы выезжаем сегодня",
          "image": "/art/istanbul/7-1.jpg"
        },
        {
          "id": "is7-2",
          "ru": "Вот ваш счёт.",
          "en": "Voici votre facture.",
          "a11y": "Le réceptionniste tend à Tom une petite facture en papier.",
          "audioLabel": "Écouter Вот ваш счёт",
          "image": "/art/istanbul/7-2.jpg"
        },
        {
          "id": "is7-3",
          "ru": "Всё было отлично!",
          "en": "Tout était parfait !",
          "a11y": "Murzik lève les deux pouces avec un grand sourire.",
          "audioLabel": "Écouter Всё было отлично",
          "image": "/art/istanbul/7-3.jpg"
        },
        {
          "id": "is7-4",
          "ru": "Хорошей дороги!",
          "en": "Bonne route !",
          "a11y": "Le réceptionniste fait signe depuis la porte de l'hôtel.",
          "audioLabel": "Écouter Хорошей дороги",
          "image": "/art/istanbul/7-4.jpg"
        },
        {
          "id": "is7-5",
          "ru": "Оставьте, пожалуйста, отзыв.",
          "en": "Laissez-nous un avis, s'il vous plaît.",
          "a11y": "Le réceptionniste montre l'écran d'un téléphone avec cinq étoiles vides.",
          "audioLabel": "Écouter Оставьте, пожалуйста, отзыв",
          "image": "/art/istanbul/7-5.jpg"
        },
        {
          "id": "is7-6",
          "ru": "Обязательно оставим!",
          "en": "C'est promis !",
          "a11y": "Tom touche cinq étoiles sur son téléphone.",
          "audioLabel": "Écouter Обязательно оставим",
          "image": "/art/istanbul/7-6.jpg"
        },
        {
          "id": "is7-7",
          "ru": "Приезжайте к нам ещё!",
          "en": "Revenez chez nous !",
          "a11y": "Tout le personnel de l'hôtel dit au revoir ; Pamuk le chat est assis sur les marches.",
          "audioLabel": "Écouter Приезжайте к нам ещё",
          "image": "/art/istanbul/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Au revoir, chambre douze",
        "note": "Пять звёзд — cinq étoiles. Даже — même.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Доброе утро! Мы выезжаем сегодня.",
            "en": "Bonjour ! Nous partons aujourd'hui."
          },
          {
            "speaker": "receptionist",
            "ru": "Конечно. Вот ваш счёт. Как вам у нас?",
            "en": "Bien sûr. Voici votre facture. Ça vous a plu ?"
          },
          {
            "speaker": "murzik",
            "ru": "Всё было отлично! Даже чемодан нашёлся!",
            "en": "Tout était parfait ! Même la valise a été retrouvée !"
          },
          {
            "speaker": "receptionist",
            "ru": "Ха-ха! Оставьте, пожалуйста, отзыв.",
            "en": "Ha ha ! Laissez-nous un avis, s'il vous plaît."
          },
          {
            "speaker": "tom",
            "ru": "Обязательно оставим! Пять звёзд.",
            "en": "C'est promis ! Cinq étoiles."
          },
          {
            "speaker": "receptionist",
            "ru": "Спасибо! Хорошей дороги! Приезжайте к нам ещё!",
            "en": "Merci ! Bonne route ! Revenez chez nous !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "is7-d1",
          "prompt": "Combien d'étoiles Tom va-t-il donner ?",
          "options": [
            {
              "label": "Cinq.",
              "correct": true
            },
            {
              "label": "Trois.",
              "correct": false
            },
            {
              "label": "Douze.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Всё было… — tout était…",
          "paragraphs": [
            "Всё (tout) est un mot neutre, donc : Всё было отлично! Всё было хорошо.",
            "Compare : Номер был хороший. Еда была вкусная. Всё было отлично!"
          ],
          "examples": [
            {
              "ru": "Всё было хорошо.",
              "en": "Tout s'est bien passé."
            },
            {
              "ru": "Завтрак был вкусный.",
              "en": "Le petit-déjeuner était bon."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "is7-t1",
          "prompt": "Écoute. Quel est le problème avec la chambre ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute d'Istanbul.",
          "audio": "Здравствуйте! Номер семь. Кондиционер работает, но нет горячей воды. И, пожалуйста, ещё одну подушку.",
          "options": [
            {
              "label": "Pas d'eau chaude.",
              "correct": true
            },
            {
              "label": "La climatisation ne marche pas.",
              "correct": false
            },
            {
              "label": "Pas de serviettes.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "is7-t2",
          "prompt": "Ton ami part pour un long voyage. Que lui dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Хорошей дороги!",
              "correct": true
            },
            {
              "label": "Вот ваш счёт.",
              "correct": false
            },
            {
              "label": "Мы выезжаем сегодня.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "is7-t3",
          "prompt": "Complète : « Tout était parfait ! »",
          "before": "Всё",
          "after": "отлично!",
          "answer": "было",
          "options": [
            "было",
            "был",
            "была"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "is7-t4",
          "prompt": "Forme le mot « clé ».",
          "word": "ключ",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "is7-t5",
          "prompt": "Как вам у нас?",
          "model": "Всё было отлично! Спасибо!",
          "modelEn": "Tout était parfait ! Merci !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Le réceptionniste te demande si l'hôtel t'a plu. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "is7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Чемодан нашёлся!",
          "options": [
            {
              "label": "Какое счастье!",
              "correct": true
            },
            {
              "label": "Не плачь!",
              "correct": false
            },
            {
              "label": "Хорошей дороги!",
              "correct": false
            }
          ]
        },
        {
          "kind": "truefalse",
          "id": "is7-t7",
          "prompt": "Vrai ou faux",
          "statement": "Нет полотенец veut dire « Il n'y a pas de serviettes ».",
          "correct": true,
          "skill": "review"
        }
      ],
      "reward": {
        "itemId": "luggage-tag",
        "itemName": "Étiquette à bagage",
        "itemNameRu": "Бирка",
        "ru": "Ура! Бирка для чемодана!",
        "en": "Youpi ! Une étiquette à bagage !",
        "a11y": "Murzik attache une petite étiquette en cuir en forme de patte de chat à la poignée de sa valise marron.",
        "image": "/art/istanbul/reward-7.jpg",
        "steps": [
          "Au marché, Tom trouve une étiquette à bagage en cuir.",
          "Elle a la forme d'une patte de chat.",
          "Murzik l'attache à sa valise.",
          "Maintenant, la valise ne se perdra plus jamais."
        ],
        "bridge": "La valise est en sécurité. Mais la carte postale reste un mystère…"
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre douze à Istanbul",
      "nameRu": "Номер двенадцать",
      "image": "/art/istanbul/home.jpg",
      "a11y": "Une petite chambre d'hôtel toute simple avec un petit balcon. Au-delà, l'eau bleue du Bosphore avec des bateaux et des mouettes."
    },
    "keepsakeId": "luggage-tag",
    "welcomeRu": "Привет, Стамбул!",
    "welcomeEn": "Bonjour, Istanbul !",
    "welcomeImage": "/art/istanbul/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Istanbul par la mer : des coupoles et des minarets s'élèvent au-dessus de l'eau, des mouettes volent et des bateaux passent.",
    "departureImage": "/art/istanbul/departure.jpg",
    "departureA11y": "Murzik et Tom disent au revoir depuis le pont d'un ferry qui quitte Istanbul. La valise de Murzik a une étiquette en forme de patte.",
    "finale": [
      {
        "image": "/art/istanbul/finale-1.jpg",
        "a11y": "Murzik sur le balcon de la chambre douze : une lampe en verre coloré, des verres à thé en forme de tulipe, une boîte de loukoums, une lampe de poche, un album de timbres et une assiette peinte. Pamuk le chat blanc dort sur la valise. Murzik tient l'étiquette en forme de patte.",
        "lines": [
          {
            "en": "La chambre douze est douillette maintenant — et la valise est en sécurité."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : l'étiquette en forme de patte."
          }
        ]
      },
      {
        "image": "/art/istanbul/finale-2.jpg",
        "a11y": "Murzik et Tom font la fête au bord de l'eau en lançant du pain aux mouettes, avec des coupoles et des minarets derrière eux.",
        "lines": [
          {
            "ru": "Стамбул завершён!",
            "en": "Istanbul, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже одиннадцать городов!",
            "en": "Déjà onze villes !"
          }
        ]
      },
      {
        "image": "/art/istanbul/ferry.jpg",
        "a11y": "Sur le pont bondé d'un ferry, tout au bout, un gentil vieux chat blanc en chapeau gris est accoudé au bastingage et regarde la mer. Murzik ne le voit pas.",
        "lines": [
          {
            "en": "La carte postale reste un mystère. Personne à Istanbul ne sait qui l'a envoyée."
          },
          {
            "en": "Sur le ferry, au bout du pont, un vieux chat blanc en chapeau regarde la mer. Cette fois, Murzik ne le voit pas."
          }
        ]
      },
      {
        "image": "/art/istanbul/departure.jpg",
        "a11y": "Murzik et Tom disent au revoir depuis le pont d'un ferry qui quitte Istanbul. La valise de Murzik a une étiquette en forme de patte.",
        "lines": [
          {
            "ru": "До свидания, Стамбул! До свидания, Памук!",
            "en": "Au revoir, Istanbul ! Au revoir, Pamuk !"
          },
          {
            "ru": "Следующая остановка: Варшава!",
            "en": "Prochain arrêt : Varsovie !"
          }
        ]
      },
      {
        "image": "/art/istanbul/finale-5.jpg",
        "a11y": "Un petit avion vole vers le nord au-dessus des montagnes et des champs, d'Istanbul vers Varsovie.",
        "lines": [
          {
            "ru": "Стамбул → Варшава",
            "en": "Istanbul → Varsovie"
          }
        ]
      },
      {
        "image": "/art/warsaw/arrival.jpg",
        "a11y": "Murzik et Tom arrivent sur la place de la vieille ville de Varsovie, entourée de hautes maisons colorées ; une statue de sirène en bronze se dresse au milieu.",
        "lines": [
          {
            "ru": "Привет, Варшава!",
            "en": "Bonjour, Varsovie !"
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
