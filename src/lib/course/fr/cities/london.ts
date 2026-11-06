import type { CityPlan } from "../../types";

/** London in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const londonFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-london-1",
      "level": "A1",
      "cityId": "london",
      "number": 1,
      "title": "À l'aéroport",
      "minutes": 5,
      "goals": [
        "Montrer ton passeport",
        "Dire que quelque chose est à toi",
        "Demander où est la sortie"
      ],
      "vocabNote": "Au contrôle des passeports, on utilise вы, le vouvoiement : Вы турист? Это ваш чемодан? Réponds court et simple.",
      "vocab": [
        {
          "id": "lo1-1",
          "ru": "Паспорт, пожалуйста. — Вот мой паспорт.",
          "en": "Votre passeport, s'il vous plaît. — Voici mon passeport.",
          "a11y": "Un agent en uniforme bleu marine tend la main ; Murzik lui donne un passeport.",
          "audioLabel": "Écouter Паспорт, пожалуйста. — Вот мой паспорт",
          "image": "/art/london/1-1b.jpg"
        },
        {
          "id": "lo1-2",
          "ru": "аэропорт",
          "en": "aéroport",
          "a11y": "Un grand hall d'aéroport animé, avec de hautes fenêtres et des avions dehors.",
          "audioLabel": "Écouter аэропорт",
          "image": "/art/london/1-2b.jpg"
        },
        {
          "id": "lo1-3",
          "ru": "Вы турист?",
          "en": "Vous êtes touriste ?",
          "a11y": "L'agent regarde Murzik par-dessus ses lunettes, l'air curieux.",
          "audioLabel": "Écouter Вы турист",
          "image": "/art/london/1-3.jpg"
        },
        {
          "id": "lo1-4",
          "ru": "Это ваш чемодан? — Да, мой.",
          "en": "C'est votre valise ? — Oui, c'est la mienne.",
          "a11y": "L'agent montre une valise marron ; Murzik hoche la tête et pose sa patte dessus.",
          "audioLabel": "Écouter Это ваш чемодан? — Да, мой",
          "image": "/art/london/1-4b.jpg"
        },
        {
          "id": "lo1-5",
          "ru": "самолёт",
          "en": "avion",
          "a11y": "Un avion blanc atterrit sur la piste sous un ciel gris de Londres.",
          "audioLabel": "Écouter самолёт",
          "image": "/art/london/1-5b.jpg"
        },
        {
          "id": "lo1-6",
          "ru": "Где выход?",
          "en": "Où est la sortie ?",
          "a11y": "Murzik regarde autour de lui dans un grand hall d'aéroport, l'air perdu.",
          "audioLabel": "Écouter Где выход",
          "image": "/art/london/1-7.jpg"
        },
        {
          "id": "lo1-7",
          "ru": "Добро пожаловать!",
          "en": "Bienvenue !",
          "a11y": "L'agent sourit et tamponne le passeport de Murzik.",
          "audioLabel": "Écouter Добро пожаловать",
          "image": "/art/london/1-10.jpg"
        }
      ],
      "dialogue": {
        "title": "Contrôle des passeports",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Ура! Лондон! Вот и аэропорт!",
            "en": "Youpi ! Londres ! Voici l'aéroport !"
          },
          {
            "speaker": "officer",
            "ru": "Здравствуйте! Паспорт, пожалуйста.",
            "en": "Bonjour ! Votre passeport, s'il vous plaît."
          },
          {
            "speaker": "murzik",
            "ru": "Здравствуйте! Вот мой паспорт.",
            "en": "Bonjour ! Voici mon passeport."
          },
          {
            "speaker": "officer",
            "ru": "Вы турист?",
            "en": "Vous êtes touriste ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да, я турист.",
            "en": "Oui, je suis touriste."
          },
          {
            "speaker": "officer",
            "ru": "Это ваш чемодан?",
            "en": "C'est votre valise ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да, мой.",
            "en": "Oui, c'est la mienne."
          },
          {
            "speaker": "officer",
            "ru": "Добро пожаловать в Лондон!",
            "en": "Bienvenue à Londres !"
          },
          {
            "speaker": "murzik",
            "ru": "Спасибо! Извините, где выход?",
            "en": "Merci ! Excusez-moi, où est la sortie ?"
          },
          {
            "speaker": "officer",
            "ru": "Выход там.",
            "en": "La sortie est là-bas."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "lo1-d1",
          "prompt": "Où est Murzik ?",
          "options": [
            {
              "label": "Au contrôle des passeports.",
              "correct": true
            },
            {
              "label": "Dans un café.",
              "correct": false
            },
            {
              "label": "Au marché.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Мой, моя, моё",
          "paragraphs": [
            "En russe, les noms sont masculins, féminins ou neutres, et « mon » change avec eux — un peu comme mon / ma en français, mais avec un genre de plus.",
            "Masculin (finit le plus souvent par une consonne) : мой паспорт. Féminin (finit le plus souvent par -а) : моя сумка. Neutre (souvent -о, -е) : моё такси.",
            "« Votre » change de la même façon : ваш чемодан, ваша сумка."
          ],
          "examples": [
            {
              "ru": "Это мой паспорт.",
              "en": "C'est mon passeport."
            },
            {
              "ru": "Это ваша сумка? — Да, моя.",
              "en": "C'est ton sac ? — Oui, c'est le mien."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "lo1-t1",
          "prompt": "Que veut dire Где выход? ?",
          "skill": "words",
          "options": [
            {
              "label": "Où est la sortie ?",
              "correct": true
            },
            {
              "label": "Où est le taxi ?",
              "correct": false
            },
            {
              "label": "Où est mon passeport ?",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "lo1-t2",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "listening",
          "audio": "Это ваш чемодан?",
          "options": [
            {
              "label": "Это ваш чемодан?",
              "correct": true
            },
            {
              "label": "Это мой чемодан?",
              "correct": false
            },
            {
              "label": "Где ваш чемодан?",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "lo1-t3",
          "prompt": "Complète.",
          "before": "Это",
          "after": "сумка.",
          "answer": "моя",
          "options": [
            "моя",
            "мой",
            "моё"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "lo1-t4",
          "prompt": "Forme le mot « passeport ».",
          "word": "паспорт",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "lo1-t5",
          "prompt": "Здравствуйте! Паспорт, пожалуйста.",
          "model": "Здравствуйте! Вот мой паспорт.",
          "modelEn": "Bonjour ! Voici mon passeport.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es au contrôle des passeports. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "lo1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Добро пожаловать!",
          "options": [
            {
              "label": "Спасибо!",
              "correct": true
            },
            {
              "label": "Мне тоже.",
              "correct": false
            },
            {
              "label": "Пока!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "blanket",
        "itemName": "Plaid écossais",
        "itemNameRu": "Плед",
        "ru": "Ура! Тёплый плед!",
        "en": "Youpi ! Un plaid bien chaud !",
        "a11y": "Dans le hall de l'aéroport, Tom enveloppe Murzik dans un doux plaid écossais rouge et vert. Murzik sourit ; on ne voit que sa tête.",
        "image": "/art/london/reward-1.jpg",
        "steps": [
          "Tom attend Murzik à la sortie.",
          "Il fait froid à Londres aujourd'hui.",
          "Tom lui donne un plaid écossais.",
          "C'est pour la nouvelle chambre de Murzik."
        ],
        "bridge": "Murzik va habiter dans l'appartement de Tom, dans sa propre chambre. Un taxi les y emmène à travers Londres."
      }
    },
    {
      "id": "a1-london-2",
      "level": "A1",
      "cityId": "london",
      "number": 2,
      "title": "Les nombres de 0 à 20",
      "minutes": 5,
      "goals": [
        "Compter de 0 à 20",
        "Demander « Combien ? »",
        "Dire un numéro de maison ou d'appartement"
      ],
      "vocabNote": "Écoute l'accent tonique : оди́н, два, три, четы́ре, пять, шесть, семь, во́семь, де́вять, де́сять.",
      "vocab": [
        {
          "id": "lo2-1",
          "ru": "один, два, три, четыре, пять",
          "en": "un, deux, trois, quatre, cinq",
          "a11y": "Cinq bus rouges alignés, avec les numéros 1 à 5.",
          "audioLabel": "Écouter один, два, три, четыре, пять",
          "image": "/art/london/2-1b.jpg"
        },
        {
          "id": "lo2-2",
          "ru": "шесть, семь, восемь, девять, десять",
          "en": "six, sept, huit, neuf, dix",
          "a11y": "Cinq bus rouges alignés, avec les numéros 6 à 10.",
          "audioLabel": "Écouter шесть, семь, восемь, девять, десять",
          "image": "/art/london/2-2b.jpg"
        },
        {
          "id": "lo2-3",
          "ru": "одиннадцать, двенадцать, тринадцать, четырнадцать, пятнадцать",
          "en": "onze, douze, treize, quatorze, quinze",
          "a11y": "Cinq cartes avec des nombres : 11, 12, 13, 14, 15.",
          "audioLabel": "Écouter одиннадцать, двенадцать, тринадцать, четырнадцать, пятнадцать",
          "image": "/art/london/2-3b.jpg"
        },
        {
          "id": "lo2-4",
          "ru": "шестнадцать, семнадцать, восемнадцать, девятнадцать, двадцать",
          "en": "seize, dix-sept, dix-huit, dix-neuf, vingt",
          "a11y": "Cinq cartes avec des nombres : 16, 17, 18, 19, 20.",
          "audioLabel": "Écouter шестнадцать, семнадцать, восемнадцать, девятнадцать, двадцать",
          "image": "/art/london/2-4b.jpg"
        },
        {
          "id": "lo2-5",
          "ru": "ноль",
          "en": "zéro",
          "a11y": "Une carte avec un grand 0 et un arrêt de bus vide.",
          "audioLabel": "Écouter ноль",
          "image": "/art/london/2-0.jpg"
        },
        {
          "id": "lo2-6",
          "ru": "Сколько?",
          "en": "Combien ?",
          "a11y": "Par la fenêtre du taxi, Murzik regarde plein de bus rouges et compte sur sa patte.",
          "audioLabel": "Écouter Сколько",
          "image": "/art/london/2-q.jpg"
        },
        {
          "id": "lo2-7",
          "ru": "Номер…",
          "en": "Numéro…",
          "a11y": "Une porte d'entrée londonienne avec un grand numéro 8 en laiton.",
          "audioLabel": "Écouter Номер",
          "image": "/art/london/2-n.jpg"
        }
      ],
      "dialogue": {
        "title": "Bus rouges",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, смотри! Красный автобус!",
            "en": "Murzik, regarde ! Un bus rouge !"
          },
          {
            "speaker": "murzik",
            "ru": "Один! Два, три!",
            "en": "Un ! Deux, trois !"
          },
          {
            "speaker": "tom",
            "ru": "Четыре, пять…",
            "en": "Quatre, cinq…"
          },
          {
            "speaker": "murzik",
            "ru": "Шесть, семь!",
            "en": "Six, sept !"
          },
          {
            "speaker": "tom",
            "ru": "Сколько? Семь?",
            "en": "Combien ? Sept ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да, семь!",
            "en": "Oui, sept !"
          },
          {
            "speaker": "tom",
            "ru": "Смотри, автобус номер пятнадцать!",
            "en": "Regarde, le bus numéro quinze !"
          },
          {
            "speaker": "tom",
            "ru": "А вот мой дом. Номер восемь.",
            "en": "Et voici ma maison. Le numéro huit."
          },
          {
            "speaker": "murzik",
            "ru": "А квартира?",
            "en": "Et l'appartement ?"
          },
          {
            "speaker": "tom",
            "ru": "Квартира десять.",
            "en": "Appartement dix."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "lo2-d1",
          "prompt": "Combien de bus rouges Murzik compte-t-il ?",
          "options": [
            {
              "label": "Sept.",
              "correct": true
            },
            {
              "label": "Trois.",
              "correct": false
            },
            {
              "label": "Dix.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Сколько? et Номер",
          "paragraphs": [
            "Сколько? veut dire « Combien ? ». Pour l'instant, réponds juste avec le nombre : Сколько? — Семь.",
            "De 11 à 19, les nombres finissent par -надцать (« sur dix ») : одиннадцать (11), двенадцать (12), пятнадцать (15). 20, c'est двадцать.",
            "Номер (numéro) se place avant le nombre : дом номер восемь, автобус номер пять. Souvent, on l'omet : Квартира десять."
          ],
          "examples": [
            {
              "ru": "Сколько? — Пять.",
              "en": "Combien ? — Cinq."
            },
            {
              "ru": "Мой дом — номер восемь.",
              "en": "Ma maison, c'est le numéro huit."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "lo2-t1",
          "prompt": "Écoute. Quel est ce nombre ?",
          "skill": "listening",
          "audio": "восемь",
          "options": [
            {
              "label": "8",
              "correct": true
            },
            {
              "label": "7",
              "correct": false
            },
            {
              "label": "3",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "lo2-t2",
          "prompt": "Associe les nombres.",
          "skill": "words",
          "pairs": [
            {
              "left": "четыре",
              "right": "4"
            },
            {
              "left": "девять",
              "right": "9"
            },
            {
              "left": "два",
              "right": "2"
            },
            {
              "left": "десять",
              "right": "10"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "lo2-t3",
          "prompt": "Complète la suite.",
          "before": "шесть, семь,",
          "after": ", девять",
          "answer": "восемь",
          "options": [
            "восемь",
            "десять",
            "шесть"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "lo2-t4",
          "prompt": "Quelle lettre manque ? (dix)",
          "before": "дес",
          "after": "ть",
          "answer": "я",
          "options": [
            "я",
            "е",
            "а"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "lo2-t5",
          "prompt": "Compte de un à dix.",
          "model": "Один, два, три, четыре, пять, шесть, семь, восемь, девять, десять.",
          "modelEn": "Un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.",
          "skill": "speaking",
          "help": "Dis les nombres à voix haute. Prends ton temps."
        },
        {
          "kind": "choice",
          "id": "lo2-t6",
          "prompt": "Это ваш чемодан? Choisis la réponse courte.",
          "skill": "review",
          "options": [
            {
              "label": "Да, мой.",
              "correct": true
            },
            {
              "label": "Да, ваш.",
              "correct": false
            },
            {
              "label": "Да, моя.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "cushion",
        "itemName": "Coussin",
        "itemNameRu": "Подушка",
        "ru": "Ура! Новая подушка!",
        "en": "Youpi ! Un nouveau coussin !",
        "a11y": "Devant la porte de l'appartement numéro 10, Murzik serre dans ses pattes un coussin rond et doux, brodé d'un petit bus rouge.",
        "image": "/art/london/reward-2.jpg",
        "steps": [
          "Ils arrivent à l'appartement numéro 10.",
          "Sur le paillasson, il y a un colis.",
          "Dedans, un coussin tout doux avec un bus rouge.",
          "Murzik compte : un coussin !"
        ],
        "bridge": "Tom ouvre la porte de l'appartement dix. Murzik va découvrir sa chambre londonienne."
      }
    },
    {
      "id": "a1-london-3",
      "level": "A1",
      "cityId": "london",
      "number": 3,
      "title": "Chez Tom",
      "minutes": 5,
      "goals": [
        "Inviter quelqu'un à entrer",
        "Montrer sa chambre à quelqu'un",
        "Demander où est la salle de bains"
      ],
      "vocabNote": "Les Russes comptent les étages depuis la rue : le rez-de-chaussée, c'est первый этаж (le « premier étage »). Donc третий этаж correspond à notre deuxième étage.",
      "vocab": [
        {
          "id": "lo3-1",
          "ru": "Это моя квартира.",
          "en": "Voici mon appartement.",
          "a11y": "Tom ouvre sa porte d'entrée et montre un appartement londonien douillet avec une grande fenêtre.",
          "audioLabel": "Écouter Это моя квартира",
          "image": "/art/london/4-1.jpg"
        },
        {
          "id": "lo3-2",
          "ru": "Проходи!",
          "en": "Entre !",
          "a11y": "Tom tient la porte ouverte et invite Murzik à entrer d'un grand geste.",
          "audioLabel": "Écouter Проходи",
          "image": "/art/london/4-2.jpg"
        },
        {
          "id": "lo3-3",
          "ru": "Чувствуй себя как дома.",
          "en": "Fais comme chez toi.",
          "a11y": "Murzik est allongé tranquillement sur un coussin avec une tasse de thé. Tom sourit.",
          "audioLabel": "Écouter Чувствуй себя как дома",
          "image": "/art/london/4-3.jpg"
        },
        {
          "id": "lo3-4",
          "ru": "Вот ключ.",
          "en": "Voici la clé.",
          "a11y": "Tom donne à Murzik une clé brillante avec un porte-clés rouge.",
          "audioLabel": "Écouter Вот ключ",
          "image": "/art/london/4-4.jpg"
        },
        {
          "id": "lo3-5",
          "ru": "Какой этаж?",
          "en": "Quel étage ?",
          "a11y": "Murzik lève les yeux vers un grand escalier, l'air interrogateur.",
          "audioLabel": "Écouter Какой этаж",
          "image": "/art/london/4-5.jpg"
        },
        {
          "id": "lo3-6",
          "ru": "Вот кухня, а вот твоя комната.",
          "en": "Voici la cuisine, et voici ta chambre.",
          "a11y": "Tom montre une petite cuisine, puis une porte ouverte sur une petite chambre.",
          "audioLabel": "Écouter Вот кухня, а вот твоя комната",
          "image": "/art/london/3-6b.jpg"
        },
        {
          "id": "lo3-7",
          "ru": "Где ванная и туалет?",
          "en": "Où sont la salle de bains et les toilettes ?",
          "a11y": "Murzik est dans un couloir et regarde deux portes fermées, l'air interrogateur.",
          "audioLabel": "Écouter Где ванная и туалет",
          "image": "/art/london/3-7b.jpg"
        }
      ],
      "dialogue": {
        "title": "Bienvenue à la maison",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, какой этаж?",
            "en": "Tom, quel étage ?"
          },
          {
            "speaker": "tom",
            "ru": "Третий этаж. Вот ключ. Это моя квартира. Проходи!",
            "en": "Le troisième. Voici la clé. Voici mon appartement. Entre !"
          },
          {
            "speaker": "murzik",
            "ru": "Спасибо! Ого, как красиво!",
            "en": "Merci ! Ouah, que c'est joli !"
          },
          {
            "speaker": "tom",
            "ru": "Чувствуй себя как дома. Вот кухня, а вот твоя комната.",
            "en": "Fais comme chez toi. Voici la cuisine, et voici ta chambre."
          },
          {
            "speaker": "murzik",
            "ru": "Моя комната? Отлично! А где ванная и туалет?",
            "en": "Ma chambre ? Super ! Et où sont la salle de bains et les toilettes ?"
          },
          {
            "speaker": "tom",
            "ru": "Ванная и туалет там.",
            "en": "La salle de bains et les toilettes sont là-bas."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "lo3-d1",
          "prompt": "Que montre Tom à Murzik ?",
          "options": [
            {
              "label": "Son appartement et la chambre de Murzik.",
              "correct": true
            },
            {
              "label": "L'aéroport.",
              "correct": false
            },
            {
              "label": "Un arrêt de bus.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Мой et твой",
          "paragraphs": [
            "Твой veut dire « ton », quand on dit ты. Il change comme мой : твой ключ, твоя комната.",
            "Souviens-toi de la règle du -те : à un ami Проходи!, à un invité qu'on connaît peu Проходите!"
          ],
          "examples": [
            {
              "ru": "Это моя квартира.",
              "en": "Voici mon appartement."
            },
            {
              "ru": "Вот твоя комната.",
              "en": "Voici ta chambre."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "truefalse",
          "id": "lo3-t1",
          "prompt": "Vrai ou faux : Murzik a sa propre chambre.",
          "statement": "У Мурзика есть своя комната.",
          "correct": true,
          "skill": "words"
        },
        {
          "kind": "choice",
          "id": "lo3-t2",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "listening",
          "audio": "Вот твоя комната.",
          "options": [
            {
              "label": "Вот твоя комната.",
              "correct": true
            },
            {
              "label": "Вот моя комната.",
              "correct": false
            },
            {
              "label": "Где твоя комната?",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "lo3-t3",
          "prompt": "Complète.",
          "before": "Это",
          "after": "ключ.",
          "answer": "твой",
          "options": [
            "твой",
            "твоя",
            "твоё"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "lo3-t4",
          "prompt": "Quelle lettre manque ? (appartement)",
          "before": "кварт",
          "after": "ра",
          "answer": "и",
          "options": [
            "и",
            "е",
            "ы"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "lo3-t5",
          "prompt": "Привет! Можно?",
          "model": "Привет! Проходи! Чувствуй себя как дома.",
          "modelEn": "Salut ! Entre ! Fais comme chez toi.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Un ami vient te voir. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "lo3-t6",
          "prompt": "Écoute. Quel est ce nombre ?",
          "skill": "review",
          "audio": "шесть",
          "options": [
            {
              "label": "6",
              "correct": true
            },
            {
              "label": "7",
              "correct": false
            },
            {
              "label": "4",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "armchair",
        "itemName": "Fauteuil",
        "itemNameRu": "Кресло",
        "ru": "Ура! У меня кресло!",
        "en": "Youpi ! J'ai un fauteuil !",
        "a11y": "Murzik est assis dans un fauteuil vert tout doux, près de la grande fenêtre de sa chambre londonienne, avec le plaid écossais et le coussin au bus.",
        "image": "/art/london/reward-3.jpg",
        "steps": [
          "La chambre est presque vide.",
          "Mais près de la fenêtre, il y a un vieux fauteuil.",
          "Murzik y pose son plaid et son coussin.",
          "C'est maintenant son endroit préféré."
        ],
        "bridge": "Demain, Tom veut faire visiter la ville à Murzik. En métro ou en bus ?"
      }
    },
    {
      "id": "a1-london-4",
      "level": "A1",
      "cityId": "london",
      "number": 4,
      "title": "En métro ou en bus ?",
      "minutes": 5,
      "goals": [
        "Nommer le métro, le bus et l'arrêt de bus",
        "Acheter un ticket",
        "Dire comment on se déplace"
      ],
      "vocabNote": "Les Russes appellent le métro de Londres метро, comme à Moscou ou à Paris. Метро ne change jamais de forme.",
      "vocab": [
        {
          "id": "lo4-1",
          "ru": "метро",
          "en": "métro",
          "a11y": "Une entrée du métro de Londres avec le panneau rond rouge et bleu.",
          "audioLabel": "Écouter метро",
          "image": "/art/london/3-1.jpg"
        },
        {
          "id": "lo4-2",
          "ru": "автобус",
          "en": "bus",
          "a11y": "Un bus rouge à impériale dans une rue de Londres.",
          "audioLabel": "Écouter автобус",
          "image": "/art/london/3-2.jpg"
        },
        {
          "id": "lo4-3",
          "ru": "остановка",
          "en": "arrêt de bus",
          "a11y": "Un panneau d'arrêt de bus rouge et un petit banc. Murzik attend là.",
          "audioLabel": "Écouter остановка",
          "image": "/art/london/3-3.jpg"
        },
        {
          "id": "lo4-4",
          "ru": "Один билет, пожалуйста.",
          "en": "Un ticket, s'il vous plaît.",
          "a11y": "Au guichet, Murzik lève un doigt de sa patte.",
          "audioLabel": "Écouter Один билет, пожалуйста",
          "image": "/art/london/3-5.jpg"
        },
        {
          "id": "lo4-5",
          "ru": "Едем на метро.",
          "en": "On y va en métro.",
          "a11y": "Tom et Murzik descendent les marches du métro.",
          "audioLabel": "Écouter Едем на метро",
          "image": "/art/london/3-6.jpg"
        },
        {
          "id": "lo4-6",
          "ru": "Едем на автобусе.",
          "en": "On y va en bus.",
          "a11y": "Tom et Murzik sont assis à l'étage d'un bus rouge et regardent par la fenêtre.",
          "audioLabel": "Écouter Едем на автобусе",
          "image": "/art/london/3-7.jpg"
        },
        {
          "id": "lo4-7",
          "ru": "Поехали!",
          "en": "C'est parti !",
          "a11y": "Murzik est assis tout devant, à l'étage du bus, et lève joyeusement les deux pattes quand le bus démarre.",
          "audioLabel": "Écouter Поехали",
          "image": "/art/london/3-10.jpg"
        }
      ],
      "dialogue": {
        "title": "Balade dans Londres",
        "note": "Наш veut dire « notre » : наш автобус. Или veut dire « ou ».",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, вот твой билет.",
            "en": "Murzik, voici ton ticket."
          },
          {
            "speaker": "murzik",
            "ru": "Спасибо! Едем на метро?",
            "en": "Merci ! On y va en métro ?"
          },
          {
            "speaker": "tom",
            "ru": "Хочешь на метро или на автобусе?",
            "en": "Tu veux y aller en métro ou en bus ?"
          },
          {
            "speaker": "murzik",
            "ru": "На автобусе! Он красный!",
            "en": "En bus ! Il est rouge !"
          },
          {
            "speaker": "tom",
            "ru": "Хорошо. Вот остановка. Наш автобус — номер девять.",
            "en": "D'accord. Voici l'arrêt. Notre bus, c'est le numéro neuf."
          },
          {
            "speaker": "murzik",
            "ru": "Вот номер девять!",
            "en": "Voilà le neuf !"
          },
          {
            "speaker": "tom",
            "ru": "Поехали!",
            "en": "C'est parti !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "lo4-d1",
          "prompt": "Comment Tom et Murzik se déplacent-ils ?",
          "options": [
            {
              "label": "En bus.",
              "correct": true
            },
            {
              "label": "En métro.",
              "correct": false
            },
            {
              "label": "En taxi.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "На + transport",
          "paragraphs": [
            "Pour dire comment on se déplace, on utilise на : на метро, на такси, на автобусе — comme « en » en français.",
            "Метро et такси ne changent jamais. Автобус devient на автобусе. Едем veut dire « on y va » (en véhicule)."
          ],
          "examples": [
            {
              "ru": "Едем на метро.",
              "en": "On y va en métro."
            },
            {
              "ru": "Едем на автобусе.",
              "en": "On y va en bus."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "lo4-t1",
          "prompt": "Trouve l'intrus.",
          "skill": "words",
          "help": "Trois d'entre eux sont des moyens de transport.",
          "options": [
            {
              "label": "метро",
              "correct": false
            },
            {
              "label": "автобус",
              "correct": false
            },
            {
              "label": "такси",
              "correct": false
            },
            {
              "label": "чемодан",
              "correct": true
            }
          ]
        },
        {
          "kind": "choice",
          "id": "lo4-t2",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "listening",
          "audio": "Едем на метро или на автобусе?",
          "options": [
            {
              "label": "На автобусе!",
              "correct": true
            },
            {
              "label": "Номер девять.",
              "correct": false
            },
            {
              "label": "Да, мой.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "lo4-t3",
          "prompt": "Complète.",
          "before": "Едем на",
          "after": ".",
          "answer": "автобусе",
          "options": [
            "автобусе",
            "автобус",
            "автобуса"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "lo4-t4",
          "prompt": "Forme le mot « métro ».",
          "word": "метро",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "lo4-t5",
          "prompt": "Здравствуйте! Что вы хотите?",
          "model": "Один билет, пожалуйста.",
          "modelEn": "Un ticket, s'il vous plaît.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es au guichet. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "lo4-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Вот ключ.",
          "options": [
            {
              "label": "Вот ключ.",
              "correct": true
            },
            {
              "label": "Вот твой.",
              "correct": false
            },
            {
              "label": "Вот выход.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "metro-map",
        "itemName": "Affiche du plan du métro",
        "itemNameRu": "Карта метро",
        "ru": "Ура! Карта метро на стену!",
        "en": "Youpi ! Un plan du métro pour mon mur !",
        "a11y": "Murzik accroche une affiche colorée du plan du métro de Londres au mur de sa chambre, au-dessus du fauteuil.",
        "image": "/art/london/reward-4.jpg",
        "steps": [
          "Au métro, Tom trouve une grande affiche du plan.",
          "Murzik la rapporte à la maison.",
          "Il l'accroche au-dessus du fauteuil.",
          "Maintenant, sa chambre ressemble à Londres."
        ],
        "bridge": "Le matin, Murzik regarde par la fenêtre. Le ciel est gris. Quel temps fait-il ?"
      }
    },
    {
      "id": "a1-london-5",
      "level": "A1",
      "cityId": "london",
      "number": 5,
      "title": "Encore la pluie !",
      "minutes": 5,
      "goals": [
        "Demander le temps qu'il fait",
        "Dire qu'il fait froid, doux, qu'il pleut ou qu'il y a du soleil",
        "Dire que tu as froid"
      ],
      "vocabNote": "Pour la météo, le russe n'a pas de « il fait » : Сегодня холодно — mot à mot « Aujourd'hui froid ». Court et facile !",
      "vocab": [
        {
          "id": "lo5-1",
          "ru": "Какая сегодня погода?",
          "en": "Quel temps fait-il aujourd'hui ?",
          "a11y": "Murzik regarde le ciel gris de Londres par la fenêtre, le nez collé à la vitre.",
          "audioLabel": "Écouter Какая сегодня погода",
          "image": "/art/london/5-1.jpg"
        },
        {
          "id": "lo5-2",
          "ru": "Сегодня холодно.",
          "en": "Il fait froid aujourd'hui.",
          "a11y": "Murzik grelotte dans une rue de Londres, emmitouflé dans son écharpe, un petit nuage de buée devant la bouche.",
          "audioLabel": "Écouter Сегодня холодно",
          "image": "/art/london/5-2.jpg"
        },
        {
          "id": "lo5-3",
          "ru": "Сегодня тепло.",
          "en": "Il fait doux aujourd'hui.",
          "a11y": "Murzik est assis tranquillement sur un banc de parc, dans une douce lumière.",
          "audioLabel": "Écouter Сегодня тепло",
          "image": "/art/london/5-3.jpg"
        },
        {
          "id": "lo5-4",
          "ru": "Идёт дождь.",
          "en": "Il pleut.",
          "a11y": "La pluie tombe sur une rue de Londres avec des bus rouges et des immeubles gris.",
          "audioLabel": "Écouter Идёт дождь",
          "image": "/art/london/5-4.jpg"
        },
        {
          "id": "lo5-5",
          "ru": "Светит солнце.",
          "en": "Le soleil brille.",
          "a11y": "Le soleil brille fort au-dessus de Big Ben et de la Tamise.",
          "audioLabel": "Écouter Светит солнце",
          "image": "/art/london/5-5.jpg"
        },
        {
          "id": "lo5-6",
          "ru": "Мне холодно.",
          "en": "J'ai froid.",
          "a11y": "Murzik se serre dans ses pattes et grelotte, le poil hérissé.",
          "audioLabel": "Écouter Мне холодно",
          "image": "/art/london/5-7.jpg"
        },
        {
          "id": "lo5-7",
          "ru": "Возьми зонт!",
          "en": "Prends un parapluie !",
          "a11y": "À la porte d'entrée, Murzik tend un parapluie noir à Tom.",
          "audioLabel": "Écouter Возьми зонт",
          "image": "/art/london/5-8.jpg"
        }
      ],
      "dialogue": {
        "title": "La météo de Londres",
        "note": "Опять veut dire « encore ». Смотри! veut dire « Regarde ! ».",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, какая сегодня погода?",
            "en": "Tom, quel temps fait-il aujourd'hui ?"
          },
          {
            "speaker": "tom",
            "ru": "Сегодня холодно.",
            "en": "Il fait froid aujourd'hui."
          },
          {
            "speaker": "murzik",
            "ru": "Мне холодно!",
            "en": "J'ai froid !"
          },
          {
            "speaker": "tom",
            "ru": "Смотри! Идёт дождь. Возьми зонт!",
            "en": "Regarde ! Il pleut. Prends un parapluie !"
          },
          {
            "speaker": "murzik",
            "ru": "Опять дождь!",
            "en": "Encore la pluie !"
          },
          {
            "speaker": "tom",
            "ru": "Ой, смотри! Светит солнце!",
            "en": "Oh, regarde ! Le soleil brille !"
          },
          {
            "speaker": "murzik",
            "ru": "Ура! Сегодня тепло!",
            "en": "Youpi ! Il fait doux aujourd'hui !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "lo5-d1",
          "prompt": "Quel temps fait-il à la fin ?",
          "options": [
            {
              "label": "Il y a du soleil et il fait doux.",
              "correct": true
            },
            {
              "label": "Il pleut.",
              "correct": false
            },
            {
              "label": "Il neige.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Сегодня холодно et Мне холодно",
          "paragraphs": [
            "Les mots de la météo finissent par -о : холодно (froid), тепло (doux), жарко (chaud). Pas de « il fait » : Сегодня тепло.",
            "Сегодня холодно parle du temps. Мне холодно parle de toi : « j'ai froid » — mot à mot « à moi, froid ». Tu connais déjà мне avec Мне тоже et Мне пора."
          ],
          "examples": [
            {
              "ru": "Сегодня жарко.",
              "en": "Il fait chaud aujourd'hui."
            },
            {
              "ru": "Мне холодно.",
              "en": "J'ai froid."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "match",
          "id": "lo5-t1",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Идёт дождь.",
              "right": "Il pleut."
            },
            {
              "left": "Светит солнце.",
              "right": "Le soleil brille."
            },
            {
              "left": "Сегодня тепло.",
              "right": "Il fait doux aujourd'hui."
            }
          ]
        },
        {
          "kind": "choice",
          "id": "lo5-t2",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "listening",
          "audio": "Сегодня тепло.",
          "options": [
            {
              "label": "Сегодня тепло.",
              "correct": true
            },
            {
              "label": "Сегодня холодно.",
              "correct": false
            },
            {
              "label": "Мне тепло.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "lo5-t3",
          "prompt": "Tu grelottes. Trouve la phrase correcte.",
          "skill": "grammar",
          "options": [
            {
              "label": "Мне холодно.",
              "correct": true
            },
            {
              "label": "Я холодно.",
              "correct": false
            },
            {
              "label": "Мне холодный.",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "lo5-t4",
          "prompt": "Forme le mot « parapluie ».",
          "word": "зонт",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "lo5-t5",
          "prompt": "Какая сегодня погода?",
          "model": "Сегодня тепло. Светит солнце.",
          "modelEn": "Il fait doux aujourd'hui. Le soleil brille.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Regarde par ta propre fenêtre et décris à voix haute le temps qu'il fait vraiment."
        },
        {
          "kind": "choice",
          "id": "lo5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Чувствуй себя как дома.",
          "options": [
            {
              "label": "Спасибо!",
              "correct": true
            },
            {
              "label": "Третий этаж.",
              "correct": false
            },
            {
              "label": "Возьми зонт!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "plant",
        "itemName": "Plante",
        "itemNameRu": "Цветок",
        "ru": "Ура! Цветок на окне!",
        "en": "Youpi ! Une plante pour ma fenêtre !",
        "a11y": "Murzik pose sur le rebord de la fenêtre un petit pot avec une fleur jaune vif. Dehors, la pluie coule sur la vitre.",
        "image": "/art/london/reward-5.jpg",
        "steps": [
          "La pluie ne s'arrête pas.",
          "Tom rapporte une fleur jaune à la maison.",
          "Murzik la pose sur le rebord de la fenêtre.",
          "Maintenant, la chambre est lumineuse même les jours gris."
        ],
        "bridge": "Demain, Tom travaille. Murzik va se promener seul, alors ils ont besoin du numéro de téléphone de l'autre."
      }
    },
    {
      "id": "a1-london-6",
      "level": "A1",
      "cityId": "london",
      "number": 6,
      "title": "Appelle-moi !",
      "minutes": 5,
      "goals": [
        "Répondre au téléphone",
        "Demander et donner un numéro de téléphone",
        "Demander « Tu es où ? » et répondre"
      ],
      "vocabNote": "Алло! s'utilise seulement au téléphone. Les numéros de téléphone peuvent se lire chiffre par chiffre.",
      "vocab": [
        {
          "id": "lo6-1",
          "ru": "Алло!",
          "en": "Allô ?",
          "a11y": "Murzik répond à son portable qui sonne et le colle à son oreille.",
          "audioLabel": "Écouter Алло",
          "image": "/art/london/6-1.jpg"
        },
        {
          "id": "lo6-2",
          "ru": "Какой у тебя номер?",
          "en": "C'est quoi, ton numéro ?",
          "a11y": "Tom tient son téléphone et regarde Murzik, prêt à taper.",
          "audioLabel": "Écouter Какой у тебя номер",
          "image": "/art/london/6-2.jpg"
        },
        {
          "id": "lo6-3",
          "ru": "Мой номер…",
          "en": "Mon numéro, c'est…",
          "a11y": "Murzik montre l'écran de son téléphone avec des chiffres.",
          "audioLabel": "Écouter Мой номер",
          "image": "/art/london/6-3.jpg"
        },
        {
          "id": "lo6-4",
          "ru": "Позвони мне!",
          "en": "Appelle-moi !",
          "a11y": "Murzik fait le geste « appelle-moi » avec sa patte près de l'oreille.",
          "audioLabel": "Écouter Позвони мне",
          "image": "/art/london/6-5.jpg"
        },
        {
          "id": "lo6-5",
          "ru": "Напиши мне!",
          "en": "Écris-moi !",
          "a11y": "Murzik tape un message sur son téléphone avec ses deux pattes. Un cœur flotte au-dessus.",
          "audioLabel": "Écouter Напиши мне",
          "image": "/art/london/6-6.jpg"
        },
        {
          "id": "lo6-6",
          "ru": "Ты где?",
          "en": "Tu es où ?",
          "a11y": "Tom parle au téléphone dans la rue et cherche Murzik du regard.",
          "audioLabel": "Écouter Ты где",
          "image": "/art/london/6-7.jpg"
        },
        {
          "id": "lo6-7",
          "ru": "Я дома.",
          "en": "Je suis à la maison.",
          "a11y": "Tom est assis sur son canapé et parle au téléphone.",
          "audioLabel": "Écouter Я дома",
          "image": "/art/london/6-8.jpg"
        }
      ],
      "dialogue": {
        "title": "Un appel depuis le parc",
        "note": "Les premières répliques ont lieu le matin. Plus tard, le téléphone de Murzik sonne. Иду! veut dire « J'arrive ! ».",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, какой у тебя номер?",
            "en": "Murzik, c'est quoi, ton numéro ?"
          },
          {
            "speaker": "murzik",
            "ru": "Мой номер: пять, восемь, три, ноль, один.",
            "en": "Mon numéro, c'est cinq, huit, trois, zéro, un."
          },
          {
            "speaker": "tom",
            "ru": "Хорошо! Позвони мне или напиши мне.",
            "en": "D'accord ! Appelle-moi ou écris-moi."
          },
          {
            "speaker": "murzik",
            "ru": "Алло!",
            "en": "Allô ?"
          },
          {
            "speaker": "tom",
            "ru": "Алло, Мурзик! Ты где?",
            "en": "Allô, Murzik ! Tu es où ?"
          },
          {
            "speaker": "murzik",
            "ru": "Я в парке. А ты?",
            "en": "Je suis au parc. Et toi ?"
          },
          {
            "speaker": "tom",
            "ru": "Я дома. Иду!",
            "en": "Je suis à la maison. J'arrive !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "lo6-d1",
          "prompt": "Où est Murzik quand Tom appelle ?",
          "options": [
            {
              "label": "Au parc.",
              "correct": true
            },
            {
              "label": "À la maison.",
              "correct": false
            },
            {
              "label": "Dans le métro.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Ты где? — Я дома.",
          "paragraphs": [
            "Дома veut dire « à la maison ». Pour les autres lieux, on utilise в et la terminaison -е : в парке, в кафе, в метро (кафе et метро ne changent pas).",
            "Позвони мне! — Appelle-moi ! Напиши мне! — Écris-moi ! Avec вы, ajoute -те : Позвоните мне!"
          ],
          "examples": [
            {
              "ru": "Я дома.",
              "en": "Je suis à la maison."
            },
            {
              "ru": "Я в парке.",
              "en": "Je suis au parc."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "lo6-t1",
          "prompt": "Écoute le numéro de Murzik. Lequel est-ce ?",
          "skill": "listening",
          "audio": "пять, восемь, три, ноль, один",
          "options": [
            {
              "label": "5 8 3 0 1",
              "correct": true
            },
            {
              "label": "5 8 3 1 0",
              "correct": false
            },
            {
              "label": "8 5 3 0 1",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "lo6-t2",
          "prompt": "Quand dit-on Алло! ?",
          "skill": "words",
          "options": [
            {
              "label": "Quand on répond au téléphone.",
              "correct": true
            },
            {
              "label": "Quand on croise un ami dans la rue.",
              "correct": false
            },
            {
              "label": "Quand on dit au revoir.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "lo6-t3",
          "prompt": "Complète.",
          "before": "Я в",
          "after": ".",
          "answer": "парке",
          "options": [
            "парке",
            "парк",
            "дома"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "lo6-t4",
          "prompt": "Quelle lettre manque ? (Allô ?)",
          "before": "Ал",
          "after": "о!",
          "answer": "л",
          "options": [
            "л",
            "п",
            "н"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "lo6-t5",
          "prompt": "Алло! Ты где?",
          "model": "Я дома. А ты?",
          "modelEn": "Je suis à la maison. Et toi ?",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Ton téléphone sonne. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "lo6-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Идёт дождь.",
          "options": [
            {
              "label": "Идёт дождь.",
              "correct": true
            },
            {
              "label": "Опять дождь.",
              "correct": false
            },
            {
              "label": "Светит солнце.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "floor-lamp",
        "itemName": "Lampadaire",
        "itemNameRu": "Торшер",
        "ru": "Ура! У меня торшер!",
        "en": "Youpi ! J'ai un lampadaire !",
        "a11y": "Un grand lampadaire avec un abat-jour jaune et chaleureux se dresse près du fauteuil vert. Murzik lit dessous, enveloppé dans son plaid écossais.",
        "image": "/art/london/reward-6.jpg",
        "steps": [
          "Le soir, il fait nuit tôt.",
          "Tom apporte un grand lampadaire.",
          "Murzik le met à côté du fauteuil.",
          "Maintenant, sa chambre est chaude et douillette."
        ],
        "bridge": "Le dernier jour à Londres. Murzik veut voir Big Ben, mais comment y aller ?"
      }
    },
    {
      "id": "a1-london-7",
      "level": "A1",
      "cityId": "london",
      "number": 7,
      "title": "Comment y aller ?",
      "minutes": 5,
      "goals": [
        "Demander poliment son chemin",
        "Comprendre tout droit, à droite et à gauche",
        "Demander si c'est loin"
      ],
      "vocabNote": "Dans la rue, commence par Извините! Un inconnu t'indique le chemin en vouvoyant : Идите, Поверните.",
      "vocab": [
        {
          "id": "lo7-1",
          "ru": "Как пройти к…?",
          "en": "Pour aller à… ?",
          "a11y": "Une petite carte à la main, Murzik pose poliment une question à une dame dans la rue.",
          "audioLabel": "Écouter Как пройти к",
          "image": "/art/london/7-1.jpg"
        },
        {
          "id": "lo7-2",
          "ru": "Идите прямо.",
          "en": "Allez tout droit.",
          "a11y": "Une rue avec une grande flèche tout droit.",
          "audioLabel": "Écouter Идите прямо",
          "image": "/art/london/7-2.jpg"
        },
        {
          "id": "lo7-3",
          "ru": "Поверните направо.",
          "en": "Tournez à droite.",
          "a11y": "Un coin de rue avec une grande flèche vers la droite.",
          "audioLabel": "Écouter Поверните направо",
          "image": "/art/london/7-3.jpg"
        },
        {
          "id": "lo7-4",
          "ru": "Поверните налево.",
          "en": "Tournez à gauche.",
          "a11y": "Un coin de rue avec une grande flèche vers la gauche.",
          "audioLabel": "Écouter Поверните налево",
          "image": "/art/london/7-4.jpg"
        },
        {
          "id": "lo7-5",
          "ru": "Это далеко?",
          "en": "C'est loin ?",
          "a11y": "Murzik regarde une très longue route, l'air inquiet.",
          "audioLabel": "Écouter Это далеко",
          "image": "/art/london/7-5.jpg"
        },
        {
          "id": "lo7-6",
          "ru": "Нет, это близко.",
          "en": "Non, c'est tout près.",
          "a11y": "La dame sourit et montre une petite distance entre ses mains.",
          "audioLabel": "Écouter Нет, это близко",
          "image": "/art/london/7-6.jpg"
        },
        {
          "id": "lo7-7",
          "ru": "Мы на месте!",
          "en": "Nous y sommes !",
          "a11y": "Tom et Murzik sont devant Big Ben et font la fête.",
          "audioLabel": "Écouter Мы на месте",
          "image": "/art/london/7-9.jpg"
        }
      ],
      "dialogue": {
        "title": "Le chemin de Big Ben",
        "note": "Потом veut dire « ensuite ». Минут пять veut dire « environ cinq minutes ».",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Извините! Как пройти к Биг-Бену?",
            "en": "Excusez-moi ! Pour aller à Big Ben ?"
          },
          {
            "speaker": "passerby",
            "ru": "Идите прямо. Потом поверните налево.",
            "en": "Allez tout droit. Ensuite, tournez à gauche."
          },
          {
            "speaker": "murzik",
            "ru": "Это далеко?",
            "en": "C'est loin ?"
          },
          {
            "speaker": "passerby",
            "ru": "Нет, это близко. Минут пять.",
            "en": "Non, c'est tout près. Environ cinq minutes."
          },
          {
            "speaker": "murzik",
            "ru": "Спасибо большое!",
            "en": "Merci beaucoup !"
          },
          {
            "speaker": "tom",
            "ru": "Мурзик! Я здесь!",
            "en": "Murzik ! Je suis là !"
          },
          {
            "speaker": "murzik",
            "ru": "Том! Мы на месте! Какой красивый Биг-Бен!",
            "en": "Tom ! Nous y sommes ! Qu'il est beau, Big Ben !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "lo7-d1",
          "prompt": "De quel côté Murzik doit-il tourner ?",
          "options": [
            {
              "label": "À gauche.",
              "correct": true
            },
            {
              "label": "À droite.",
              "correct": false
            },
            {
              "label": "Il ne tourne pas.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Indiquer le chemin poliment",
          "paragraphs": [
            "Les inconnus te vouvoient, avec -те : Идите! (Allez !) Поверните! (Tournez !)",
            "прямо — tout droit · направо — à droite · налево — à gauche · далеко — loin · близко — près."
          ],
          "examples": [
            {
              "ru": "Идите прямо, потом поверните направо.",
              "en": "Allez tout droit, puis tournez à droite."
            },
            {
              "ru": "Как пройти к метро?",
              "en": "Pour aller au métro ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "lo7-t1",
          "prompt": "Écoute la conversation. Où est le métro ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute de Londres.",
          "audio": "Извините, где метро? — Идите прямо, потом поверните направо. — Это далеко? — Нет, минут пять.",
          "options": [
            {
              "label": "Tout droit, puis à droite. Environ cinq minutes.",
              "correct": true
            },
            {
              "label": "Tout droit, puis à gauche. C'est loin.",
              "correct": false
            },
            {
              "label": "Tournez à gauche. Environ dix minutes.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "lo7-t2",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "listening",
          "audio": "Поверните направо.",
          "options": [
            {
              "label": "Поверните направо.",
              "correct": true
            },
            {
              "label": "Поверните налево.",
              "correct": false
            },
            {
              "label": "Идите прямо.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "lo7-t3",
          "prompt": "Choisis la question polie pour un inconnu.",
          "skill": "grammar",
          "options": [
            {
              "label": "Извините, как пройти к метро?",
              "correct": true
            },
            {
              "label": "Эй, где метро?",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "lo7-t4",
          "prompt": "Forme le mot « tout droit ».",
          "word": "прямо",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "lo7-t5",
          "prompt": "Demande à un inconnu le chemin du métro.",
          "model": "Извините, как пройти к метро?",
          "modelEn": "Excusez-moi, pour aller au métro ?",
          "skill": "speaking"
        },
        {
          "kind": "choice",
          "id": "lo7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Ты где?",
          "options": [
            {
              "label": "Я в парке.",
              "correct": true
            },
            {
              "label": "Номер девять.",
              "correct": false
            },
            {
              "label": "Мне холодно.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "lo7-t7",
          "prompt": "Que veut dire Возьми зонт! ?",
          "skill": "review",
          "options": [
            {
              "label": "Prends un parapluie !",
              "correct": true
            },
            {
              "label": "Où est le parapluie ?",
              "correct": false
            },
            {
              "label": "Il pleut.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "teapot",
        "itemName": "Théière",
        "itemNameRu": "Чайник",
        "ru": "Ура! Английский чайник!",
        "en": "Youpi ! Une théière anglaise !",
        "a11y": "Murzik tient une théière ronde et blanche à petites fleurs bleues. Tom est à côté de lui, et Big Ben derrière eux.",
        "image": "/art/london/reward-7.jpg",
        "steps": [
          "Devant Big Ben, Tom offre un cadeau à Murzik.",
          "C'est une théière ronde et blanche.",
          "Tom l'a trouvée dans une toute petite boutique de thé.",
          "Murzik la serre délicatement dans ses pattes."
        ],
        "bridge": "La chambre de Londres est douillette maintenant. Murzik veut remercier la vieille dame de la boutique de thé, et il emporte la carte postale de grand-mère Assia."
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre de Murzik à Londres",
      "nameRu": "Комната в Лондоне",
      "image": "/art/london/home.jpg",
      "a11y": "Une petite chambre vide dans l'appartement londonien de Tom, avec une grande fenêtre et un ciel gris. La valise de Murzik est au milieu."
    },
    "keepsakeId": "teapot",
    "welcomeRu": "Привет, Лондон!",
    "welcomeEn": "Bonjour, Londres !",
    "welcomeImage": "/art/london/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Londres avec leurs valises. Derrière eux, Big Ben et un bus rouge à impériale. Il bruine.",
    "departureImage": "/art/london/departure.jpg",
    "departureA11y": "Murzik et Tom avec leurs valises dans un aéroport de Londres. Murzik porte un parapluie rouge.",
    "finale": [
      {
        "image": "/art/london/tea-shop.jpg",
        "a11y": "Une toute petite boutique de thé à Londres, aux étagères pleines de théières et de boîtes. Derrière le comptoir, une gentille vieille dame regarde la carte d'Assia dans les pattes de Murzik et sourit. Tom est à côté de Murzik.",
        "lines": [
          {
            "en": "Dans la petite boutique de thé, la vieille dame regarde la carte postale. Puis elle sourit."
          },
          {
            "ru": "Ася? Я её помню!",
            "en": "Assia ? Je me souviens d'elle !"
          },
          {
            "en": "« Une chatte rousse de Moscou. Elle peignait tout ce qu'elle voyait. Un jour, elle a dit : je veux du soleil — et elle est partie vers le sud. »"
          }
        ]
      },
      {
        "image": "/art/london/finale-1.jpg",
        "a11y": "Murzik est debout dans sa chambre londonienne douillette : un fauteuil vert avec un plaid écossais et le coussin au bus, un lampadaire, un plan du métro au mur et une fleur jaune sur le rebord de la fenêtre. Il tient la théière blanche.",
        "lines": [
          {
            "en": "La chambre londonienne de Murzik est douillette maintenant. Tom sourit."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : la théière."
          }
        ]
      },
      {
        "image": "/art/london/finale-2.jpg",
        "a11y": "Murzik saute de joie devant Big Ben. Tom fête ça avec lui.",
        "lines": [
          {
            "ru": "Лондон завершён!",
            "en": "Londres, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже два города!",
            "en": "Déjà deux villes !"
          },
          {
            "en": "Tom a une surprise : deux billets pour le soleil. Assia est partie vers le sud, et eux aussi."
          }
        ]
      },
      {
        "image": "/art/london/departure.jpg",
        "a11y": "Murzik et Tom avec leurs valises dans un aéroport de Londres. Murzik porte un parapluie rouge.",
        "lines": [
          {
            "ru": "До свидания, Лондон!",
            "en": "Au revoir, Londres !"
          },
          {
            "ru": "Следующая остановка: Мадрид!",
            "en": "Prochain arrêt : Madrid !"
          }
        ]
      },
      {
        "image": "/art/london/finale-4.jpg",
        "a11y": "Un petit avion vole vers le sud, de Londres sous la pluie vers un ciel clair et ensoleillé.",
        "lines": [
          {
            "ru": "Лондон → Мадрид",
            "en": "Londres → Madrid"
          }
        ]
      },
      {
        "image": "/art/madrid/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Madrid sous le soleil, sur la grande Plaza Mayor avec ses bâtiments rouges et ses arcades. Murzik enlève son écharpe au soleil.",
        "lines": [
          {
            "ru": "Привет, Мадрид!",
            "en": "Bonjour, Madrid !"
          },
          {
            "ru": "Здесь светит солнце!",
            "en": "Ici, le soleil brille !"
          }
        ]
      }
    ]
  }
};
