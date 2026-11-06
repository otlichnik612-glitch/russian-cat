import type { CityPlan } from "../../types";

/** Athens in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const athensFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-athens-1",
      "level": "A1",
      "cityId": "athens",
      "number": 1,
      "title": "Les mois",
      "minutes": 5,
      "goals": [
        "Nommer les mois et les saisons",
        "Dire quel mois on est",
        "Dire « en mai »"
      ],
      "vocabNote": "Comme en français, les mois russes s'écrivent avec une minuscule. En Russie, l'hiver, c'est décembre, janvier et février.",
      "vocab": [
        {
          "id": "at1-1",
          "ru": "Какой сейчас месяц?",
          "en": "On est en quel mois ?",
          "a11y": "Sur une terrasse blanche ensoleillée, Murzik regarde un calendrier mural, l'air interrogateur.",
          "audioLabel": "Écouter Какой сейчас месяц",
          "image": "/art/athens/1-1.jpg"
        },
        {
          "id": "at1-2",
          "ru": "Сейчас май.",
          "en": "On est en mai.",
          "a11y": "Une terrasse athénienne ensoleillée pleine de fleurs, et une page de calendrier avec des fleurs de printemps.",
          "audioLabel": "Écouter Сейчас май",
          "image": "/art/athens/1-2.jpg"
        },
        {
          "id": "at1-3",
          "ru": "зима: декабрь, январь, февраль",
          "en": "l'hiver : décembre, janvier, février",
          "a11y": "Trois petites images enneigées : un bonhomme de neige, un sapin, un étang gelé.",
          "audioLabel": "Écouter зима: декабрь, январь, февраль",
          "image": "/art/athens/1-3.jpg"
        },
        {
          "id": "at1-4",
          "ru": "весна: март, апрель, май",
          "en": "le printemps : mars, avril, mai",
          "a11y": "Trois petites images de printemps : la neige qui fond, un bourgeon, des fleurs.",
          "audioLabel": "Écouter весна: март, апрель, май",
          "image": "/art/athens/1-4.jpg"
        },
        {
          "id": "at1-5",
          "ru": "лето: июнь, июль, август",
          "en": "l'été : juin, juillet, août",
          "a11y": "Trois petites images d'été : une plage, un grand soleil, une pastèque.",
          "audioLabel": "Écouter лето: июнь, июль, август",
          "image": "/art/athens/1-5.jpg"
        },
        {
          "id": "at1-6",
          "ru": "осень: сентябрь, октябрь, ноябрь",
          "en": "l'automne : septembre, octobre, novembre",
          "a11y": "Trois petites images d'automne : un cartable, des feuilles jaunes, la pluie.",
          "audioLabel": "Écouter осень: сентябрь, октябрь, ноябрь",
          "image": "/art/athens/1-6.jpg"
        },
        {
          "id": "at1-7",
          "ru": "в мае",
          "en": "en mai",
          "a11y": "Murzik est allongé au soleil sur la terrasse, avec des lunettes de soleil.",
          "audioLabel": "Écouter в мае",
          "image": "/art/athens/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Athènes la chaude",
        "note": "Ника vient d'une famille gréco-russe : à la maison, on parle grec et russe. Уже — déjà.",
        "lines": [
          {
            "speaker": "nika",
            "ru": "Привет! Я Ника. Добро пожаловать в Афины!",
            "en": "Salut ! Je suis Nika. Bienvenue à Athènes !"
          },
          {
            "speaker": "murzik",
            "ru": "Привет! Ой, здесь так тепло! Какой сейчас месяц?",
            "en": "Salut ! Oh, il fait si chaud ici ! On est en quel mois ?"
          },
          {
            "speaker": "nika",
            "ru": "Сейчас май. В мае в Афинах уже тепло.",
            "en": "On est en mai. En mai, il fait déjà chaud à Athènes."
          },
          {
            "speaker": "tom",
            "ru": "А в Праге было холодно!",
            "en": "Et à Prague, il faisait froid !"
          },
          {
            "speaker": "nika",
            "ru": "А летом, в июле и в августе, здесь очень жарко.",
            "en": "Et en été, en juillet et en août, il fait très chaud ici."
          },
          {
            "speaker": "murzik",
            "ru": "Мой любимый месяц — май!",
            "en": "Mon mois préféré, c'est mai !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "at1-d1",
          "prompt": "On est en quel mois ?",
          "options": [
            {
              "label": "Mai.",
              "correct": true
            },
            {
              "label": "Juillet.",
              "correct": false
            },
            {
              "label": "Août.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "En mai : в + mois en -е",
          "paragraphs": [
            "Pour dire « en » avec un mois, on utilise в et la terminaison -е : май → в мае, январь → в январе, март → в марте.",
            "Les saisons, c'est différent : зимой (en hiver), весной, летом, осенью."
          ],
          "examples": [
            {
              "ru": "в январе",
              "en": "en janvier"
            },
            {
              "ru": "Летом здесь жарко.",
              "en": "En été, il fait chaud ici."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "at1-t1",
          "prompt": "Écoute. On est en quel mois ?",
          "skill": "listening",
          "audio": "Сейчас октябрь.",
          "options": [
            {
              "label": "Octobre.",
              "correct": true
            },
            {
              "label": "Août.",
              "correct": false
            },
            {
              "label": "Décembre.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "at1-t2",
          "prompt": "Associe les saisons.",
          "skill": "words",
          "pairs": [
            {
              "left": "зима",
              "right": "l'hiver"
            },
            {
              "left": "весна",
              "right": "le printemps"
            },
            {
              "left": "лето",
              "right": "l'été"
            },
            {
              "left": "осень",
              "right": "l'automne"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "at1-t3",
          "prompt": "Complète : « en mai ».",
          "before": "в",
          "after": "",
          "answer": "мае",
          "options": [
            "мае",
            "май",
            "мая"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "at1-t4",
          "prompt": "Forme le mot « printemps ».",
          "word": "весна",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "at1-t5",
          "prompt": "Какой твой любимый месяц?",
          "model": "Мой любимый месяц — июнь.",
          "modelEn": "Mon mois préféré, c'est juin.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis ton vrai mois préféré."
        },
        {
          "kind": "choice",
          "id": "at1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Где ты работаешь?",
          "options": [
            {
              "label": "Я работаю в офисе.",
              "correct": true
            },
            {
              "label": "Сейчас май.",
              "correct": false
            },
            {
              "label": "В мае.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "vase",
        "itemName": "Vase grec",
        "itemNameRu": "Ваза",
        "ru": "Ура! Греческая ваза!",
        "en": "Youpi ! Un vase grec !",
        "a11y": "Un vase en terre cuite avec un motif noir et orange est posé sur le rebord de la fenêtre d'une petite chambre blanche à la porte bleue.",
        "image": "/art/athens/reward-1.jpg",
        "steps": [
          "La famille de Nika a une petite maison d'hôtes.",
          "La chambre de Murzik est sur le toit : des murs blancs et une porte bleue.",
          "Nika apporte un vase en terre cuite avec un motif grec ancien.",
          "Murzik y met une fleur."
        ],
        "bridge": "Tom regarde le calendrier et se tait soudain. On est le combien aujourd'hui ?"
      }
    },
    {
      "id": "a1-athens-2",
      "level": "A1",
      "cityId": "athens",
      "number": 2,
      "title": "On est le combien ?",
      "minutes": 6,
      "goals": [
        "Demander la date",
        "Dire la date",
        "Comprendre premier, deuxième, troisième…"
      ],
      "vocabNote": "Pour les dates, le russe utilise « premier, deuxième, troisième… » (pas « deux, trois » comme en français), à la forme neutre, car число (date) est un mot neutre : первое, второе, третье.",
      "vocab": [
        {
          "id": "at2-1",
          "ru": "Какое сегодня число?",
          "en": "On est le combien aujourd'hui ?",
          "a11y": "Tom regarde le calendrier de son téléphone, l'air pensif.",
          "audioLabel": "Écouter Какое сегодня число",
          "image": "/art/athens/2-1.jpg"
        },
        {
          "id": "at2-2",
          "ru": "Сегодня первое мая.",
          "en": "Aujourd'hui, c'est le premier mai.",
          "a11y": "Une page de calendrier avec un grand 1 et une fleur de printemps.",
          "audioLabel": "Écouter Сегодня первое мая",
          "image": "/art/athens/2-2.jpg"
        },
        {
          "id": "at2-3",
          "ru": "второе, третье",
          "en": "deuxième, troisième",
          "a11y": "Deux pages de calendrier avec les chiffres 2 et 3.",
          "audioLabel": "Écouter второе, третье",
          "image": "/art/athens/2-3.jpg"
        },
        {
          "id": "at2-4",
          "ru": "четвёртое, пятое",
          "en": "quatrième, cinquième",
          "a11y": "Deux pages de calendrier avec les chiffres 4 et 5.",
          "audioLabel": "Écouter четвёртое, пятое",
          "image": "/art/athens/2-4.jpg"
        },
        {
          "id": "at2-5",
          "ru": "десятое",
          "en": "dixième",
          "a11y": "Une page de calendrier avec le chiffre 10.",
          "audioLabel": "Écouter десятое",
          "image": "/art/athens/2-5.jpg"
        },
        {
          "id": "at2-6",
          "ru": "двадцатое",
          "en": "vingtième",
          "a11y": "Une page de calendrier avec le chiffre 20.",
          "audioLabel": "Écouter двадцатое",
          "image": "/art/athens/2-6.jpg"
        },
        {
          "id": "at2-7",
          "ru": "Какое завтра число?",
          "en": "On sera le combien demain ?",
          "a11y": "Murzik tourne une page du calendrier, l'air curieux.",
          "audioLabel": "Écouter Какое завтра число",
          "image": "/art/athens/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Tom se souvient",
        "note": "Что-то важное — quelque chose d'important. Ничего! — Rien !",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Ника, какое сегодня число?",
            "en": "Nika, on est le combien aujourd'hui ?"
          },
          {
            "speaker": "nika",
            "ru": "Сегодня третье мая.",
            "en": "Aujourd'hui, c'est le trois mai."
          },
          {
            "speaker": "tom",
            "ru": "Третье? А какое завтра число?",
            "en": "Le trois ? Et demain, on sera le combien ?"
          },
          {
            "speaker": "nika",
            "ru": "Четвёртое. А что?",
            "en": "Le quatre. Pourquoi ?"
          },
          {
            "speaker": "tom",
            "ru": "Ой… Послезавтра — что-то важное!",
            "en": "Oh… Après-demain, c'est quelque chose d'important !"
          },
          {
            "speaker": "murzik",
            "ru": "Что? Что важное?",
            "en": "Quoi ? Qu'est-ce qui est important ?"
          },
          {
            "speaker": "tom",
            "ru": "Ничего, Мурзик! Ничего!",
            "en": "Rien, Murzik ! Rien !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "at2-d1",
          "prompt": "On est le combien aujourd'hui ?",
          "options": [
            {
              "label": "Le trois mai.",
              "correct": true
            },
            {
              "label": "Le quatre mai.",
              "correct": false
            },
            {
              "label": "Le cinq mai.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Les dates : первое мая",
          "paragraphs": [
            "On dit la date avec la forme neutre : первое, второе, третье, четвёртое, пятое… десятое, двадцатое.",
            "Le mois se met à la forme « de » : май → мая, январь → января. Сегодня первое января — Aujourd'hui, c'est le premier janvier (mot à mot « le premier de janvier »)."
          ],
          "examples": [
            {
              "ru": "Сегодня второе мая.",
              "en": "Aujourd'hui, c'est le deux mai."
            },
            {
              "ru": "Завтра десятое января.",
              "en": "Demain, c'est le dix janvier."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "at2-t1",
          "prompt": "Écoute. On est le combien ?",
          "skill": "listening",
          "audio": "Сегодня пятое мая.",
          "options": [
            {
              "label": "Le 5 mai.",
              "correct": true
            },
            {
              "label": "Le 4 mai.",
              "correct": false
            },
            {
              "label": "Le 15 mai.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "at2-t2",
          "prompt": "Que veut dire третье ?",
          "skill": "words",
          "options": [
            {
              "label": "troisième",
              "correct": true
            },
            {
              "label": "deuxième",
              "correct": false
            },
            {
              "label": "trente",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "at2-t3",
          "prompt": "Complète : « Aujourd'hui, c'est le premier mai. »",
          "before": "Сегодня первое",
          "after": ".",
          "answer": "мая",
          "options": [
            "мая",
            "май",
            "мае"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "at2-t4",
          "prompt": "Quelle lettre manque ? (date)",
          "before": "ч",
          "after": "сло",
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
          "id": "at2-t5",
          "prompt": "Какое сегодня число?",
          "model": "Сегодня десятое.",
          "modelEn": "Aujourd'hui, c'est le dix.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Regarde la date d'aujourd'hui et dis-la à voix haute (le jour suffit)."
        },
        {
          "kind": "choice",
          "id": "at2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Какой сейчас месяц?",
          "options": [
            {
              "label": "Сейчас май.",
              "correct": true
            },
            {
              "label": "Сегодня первое.",
              "correct": false
            },
            {
              "label": "В мае.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "shells",
        "itemName": "Coquillages",
        "itemNameRu": "Ракушки",
        "ru": "Ура! Красивые ракушки!",
        "en": "Youpi ! De jolis coquillages !",
        "a11y": "Un petit bol plein de coquillages blancs, roses et rayés sur le rebord de la fenêtre de Murzik, avec la mer au loin.",
        "image": "/art/athens/reward-2.jpg",
        "steps": [
          "L'après-midi, ils vont à la mer.",
          "Murzik ramasse des coquillages.",
          "Des blancs, des roses et des rayés.",
          "Tom n'arrête pas de regarder son téléphone en souriant en cachette."
        ],
        "bridge": "Pendant que Murzik dort, Tom chuchote à Nika : il a un secret."
      }
    },
    {
      "id": "a1-athens-3",
      "level": "A1",
      "cityId": "athens",
      "number": 3,
      "title": "C'est quand, l'anniversaire ?",
      "minutes": 6,
      "goals": [
        "Demander la date d'anniversaire de quelqu'un",
        "Dire « le cinq mai »",
        "Préparer une surprise"
      ],
      "vocabNote": "Pour dire « le » + date (quand quelque chose a lieu), on utilise la terminaison -ого : пятого мая — le cinq mai. Послезавтра veut dire « après-demain ».",
      "vocab": [
        {
          "id": "at3-1",
          "ru": "Когда у тебя день рождения?",
          "en": "C'est quand, ton anniversaire ?",
          "a11y": "Le soir, sur la terrasse, Nika pose la question à Tom avec un sourire curieux.",
          "audioLabel": "Écouter Когда у тебя день рождения",
          "image": "/art/athens/3-1.jpg"
        },
        {
          "id": "at3-2",
          "ru": "Пятого мая.",
          "en": "Le cinq mai.",
          "a11y": "Une page de calendrier avec un grand 5 et un petit gâteau d'anniversaire dessiné.",
          "audioLabel": "Écouter Пятого мая",
          "image": "/art/athens/3-2.jpg"
        },
        {
          "id": "at3-3",
          "ru": "послезавтра",
          "en": "après-demain",
          "a11y": "Deux flèches sautent par-dessus deux pages de calendrier.",
          "audioLabel": "Écouter послезавтра",
          "image": "/art/athens/3-3.jpg"
        },
        {
          "id": "at3-4",
          "ru": "Уже скоро!",
          "en": "C'est bientôt !",
          "a11y": "Tom regarde une horloge avec de grands yeux excités.",
          "audioLabel": "Écouter Уже скоро",
          "image": "/art/athens/3-4.jpg"
        },
        {
          "id": "at3-5",
          "ru": "Давай устроим праздник!",
          "en": "Organisons une fête !",
          "a11y": "Nika montre des ballons colorés et des chapeaux de fête avec un grand sourire.",
          "audioLabel": "Écouter Давай устроим праздник",
          "image": "/art/athens/3-5.jpg"
        },
        {
          "id": "at3-6",
          "ru": "Это сюрприз!",
          "en": "C'est une surprise !",
          "a11y": "Tom cache un cadeau dans son dos et fait un clin d'œil.",
          "audioLabel": "Écouter Это сюрприз",
          "image": "/art/athens/3-6.jpg"
        },
        {
          "id": "at3-7",
          "ru": "Только никому не говори!",
          "en": "Surtout, ne le dis à personne !",
          "a11y": "Nika met un doigt sur ses lèvres ; Tom hoche la tête.",
          "audioLabel": "Écouter Только никому не говори",
          "image": "/art/athens/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le secret de Tom",
        "note": "Мурзик спит — Murzik dort. Я знаю — je sais.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Ника, тихо! Мурзик спит. У меня секрет.",
            "en": "Nika, chut ! Murzik dort. J'ai un secret."
          },
          {
            "speaker": "nika",
            "ru": "Какой секрет?",
            "en": "Quel secret ?"
          },
          {
            "speaker": "tom",
            "ru": "У Мурзика день рождения! Пятого мая. Послезавтра!",
            "en": "C'est l'anniversaire de Murzik ! Le cinq mai. Après-demain !"
          },
          {
            "speaker": "nika",
            "ru": "Уже скоро! Давай устроим праздник!",
            "en": "C'est bientôt ! Organisons une fête !"
          },
          {
            "speaker": "tom",
            "ru": "Да! Это сюрприз. Только никому не говори!",
            "en": "Oui ! C'est une surprise. Surtout, ne le dis à personne !"
          },
          {
            "speaker": "nika",
            "ru": "Я знаю! Никому!",
            "en": "Je sais ! Pas un mot !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "at3-d1",
          "prompt": "Quand est l'anniversaire de Murzik ?",
          "options": [
            {
              "label": "Le cinq mai.",
              "correct": true
            },
            {
              "label": "Le trois mai.",
              "correct": false
            },
            {
              "label": "Demain.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "À une date : -ого",
          "paragraphs": [
            "Сегодня пятое мая — Aujourd'hui, c'est le cinq mai. Mais pour dire « le cinq » (quand) : пятого мая.",
            "первое → первого, второе → второго, третье → третьего, десятое → десятого."
          ],
          "examples": [
            {
              "ru": "У меня день рождения первого июня.",
              "en": "Mon anniversaire est le premier juin."
            },
            {
              "ru": "Концерт десятого мая.",
              "en": "Le concert est le dix mai."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "at3-t1",
          "prompt": "Écoute. Quand est l'anniversaire ?",
          "skill": "listening",
          "audio": "У меня день рождения десятого января.",
          "options": [
            {
              "label": "Le 10 janvier.",
              "correct": true
            },
            {
              "label": "Le 1er janvier.",
              "correct": false
            },
            {
              "label": "Le 10 juin.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "at3-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "послезавтра",
              "right": "après-demain"
            },
            {
              "left": "Это сюрприз!",
              "right": "C'est une surprise !"
            },
            {
              "left": "Уже скоро!",
              "right": "C'est bientôt !"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "at3-t3",
          "prompt": "Comment dit-on « le deux mai » (quand) ?",
          "skill": "grammar",
          "options": [
            {
              "label": "второго мая",
              "correct": true
            },
            {
              "label": "второе мая",
              "correct": false
            },
            {
              "label": "второй май",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "at3-t4",
          "prompt": "Forme le mot « fête ».",
          "word": "праздник",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "at3-t5",
          "prompt": "Когда у тебя день рождения?",
          "model": "У меня день рождения пятого мая.",
          "modelEn": "Mon anniversaire est le cinq mai.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis ta vraie date d'anniversaire. Utilise la terminaison -ого : пятого, десятого, двадцатого…"
        },
        {
          "kind": "choice",
          "id": "at3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Какое сегодня число?",
          "options": [
            {
              "label": "Сегодня третье.",
              "correct": true
            },
            {
              "label": "Пятого мая.",
              "correct": false
            },
            {
              "label": "Сейчас май.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "wind-chime",
        "itemName": "Carillon à vent",
        "itemNameRu": "Колокольчик",
        "ru": "Ура! Колокольчик на ветру!",
        "en": "Youpi ! Un carillon à vent !",
        "a11y": "Un petit carillon bleu et blanc à clochettes est accroché près de la porte bleue de la chambre de Murzik et se balance dans la brise.",
        "image": "/art/athens/reward-3.jpg",
        "steps": [
          "Le matin, il y a un doux son près de la porte.",
          "Ding… ding…",
          "Nika a accroché un petit carillon à vent.",
          "Murzik ne se doute de rien."
        ],
        "bridge": "Tom et Nika vont au marché. Il leur faut un cadeau pour Murzik !"
      }
    },
    {
      "id": "a1-athens-4",
      "level": "A1",
      "cityId": "athens",
      "number": 4,
      "title": "Qu'est-ce qu'on lui offre ?",
      "minutes": 6,
      "goals": [
        "Demander quoi offrir à quelqu'un",
        "Dire ce que quelqu'un aime",
        "Demander un paquet cadeau"
      ],
      "vocabNote": "Подарить veut dire « offrir ». Ему — à lui, ей — à elle, тебе — à toi. Tu les connais depuis Rome.",
      "vocab": [
        {
          "id": "at4-1",
          "ru": "Что ему подарить?",
          "en": "Qu'est-ce qu'on lui offre ?",
          "a11y": "Tom et Nika sont devant un stand plein de cadeaux et réfléchissent.",
          "audioLabel": "Écouter Что ему подарить",
          "image": "/art/athens/4-1.jpg"
        },
        {
          "id": "at4-2",
          "ru": "подарок",
          "en": "cadeau",
          "a11y": "Une boîte emballée de papier bleu avec un ruban blanc.",
          "audioLabel": "Écouter подарок",
          "image": "/art/athens/4-2.jpg"
        },
        {
          "id": "at4-3",
          "ru": "Ему нравится рисовать.",
          "en": "Il aime dessiner.",
          "a11y": "Tom montre à Nika un petit dessin de l'Acropole fait par Murzik.",
          "audioLabel": "Écouter Ему нравится рисовать",
          "image": "/art/athens/4-3.jpg"
        },
        {
          "id": "at4-4",
          "ru": "альбом для рисования",
          "en": "carnet de croquis",
          "a11y": "Un épais carnet de croquis à couverture de cuir, avec un crayon attaché.",
          "audioLabel": "Écouter альбом для рисования",
          "image": "/art/athens/4-4.jpg"
        },
        {
          "id": "at4-5",
          "ru": "Это хорошая идея!",
          "en": "Bonne idée !",
          "a11y": "Nika claque des doigts, le visage rayonnant.",
          "audioLabel": "Écouter Это хорошая идея",
          "image": "/art/athens/4-5.jpg"
        },
        {
          "id": "at4-6",
          "ru": "Упакуйте, пожалуйста.",
          "en": "Vous pouvez faire un paquet cadeau, s'il vous plaît ?",
          "a11y": "La vendeuse emballe le carnet de croquis dans du papier bleu.",
          "audioLabel": "Écouter Упакуйте, пожалуйста",
          "image": "/art/athens/4-6.jpg"
        },
        {
          "id": "at4-7",
          "ru": "А что ты подаришь?",
          "en": "Et toi, tu vas lui offrir quoi ?",
          "a11y": "Tom se tourne vers Nika d'un air interrogateur, le cadeau emballé à la main.",
          "audioLabel": "Écouter А что ты подаришь",
          "image": "/art/athens/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Au marché",
        "note": "Это секрет! — C'est un secret ! Красивый — beau.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Ника, что ему подарить?",
            "en": "Nika, qu'est-ce qu'on lui offre ?"
          },
          {
            "speaker": "nika",
            "ru": "А что он любит?",
            "en": "Et qu'est-ce qu'il aime ?"
          },
          {
            "speaker": "tom",
            "ru": "Ему нравится рисовать.",
            "en": "Il aime dessiner."
          },
          {
            "speaker": "nika",
            "ru": "Тогда альбом для рисования!",
            "en": "Alors un carnet de croquis !"
          },
          {
            "speaker": "tom",
            "ru": "Это хорошая идея! Вот этот, красивый. Упакуйте, пожалуйста.",
            "en": "Bonne idée ! Celui-ci, le beau. Vous pouvez faire un paquet cadeau, s'il vous plaît ?"
          },
          {
            "speaker": "seller",
            "ru": "Конечно!",
            "en": "Bien sûr !"
          },
          {
            "speaker": "tom",
            "ru": "А что ты подаришь?",
            "en": "Et toi, tu vas lui offrir quoi ?"
          },
          {
            "speaker": "nika",
            "ru": "Это секрет!",
            "en": "C'est un secret !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "at4-d1",
          "prompt": "Qu'achète Tom pour Murzik ?",
          "options": [
            {
              "label": "Un carnet de croquis.",
              "correct": true
            },
            {
              "label": "Un livre sur Athènes.",
              "correct": false
            },
            {
              "label": "Un appareil photo.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Кому? Мне, тебе, ему, ей",
          "paragraphs": [
            "Pour offrir quelque chose à quelqu'un, on utilise ces formes : мне (à moi), тебе (à toi), ему (à lui), ей (à elle).",
            "Что ей подарить? — Qu'est-ce qu'on lui offre (à elle) ? Ему нравится рисовать — Il aime dessiner (mot à mot « À lui, dessiner plaît »)."
          ],
          "examples": [
            {
              "ru": "Что тебе подарить?",
              "en": "Qu'est-ce que tu aimerais comme cadeau ?"
            },
            {
              "ru": "Ей нравится музыка.",
              "en": "Elle aime la musique."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "at4-t1",
          "prompt": "Écoute. Qu'est-ce qu'elle aime ?",
          "skill": "listening",
          "audio": "Ей нравится музыка.",
          "options": [
            {
              "label": "La musique.",
              "correct": true
            },
            {
              "label": "Le dessin.",
              "correct": false
            },
            {
              "label": "Les livres.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "at4-t2",
          "prompt": "Qu'est-ce que подарок ?",
          "skill": "words",
          "options": [
            {
              "label": "un cadeau",
              "correct": true
            },
            {
              "label": "une fête",
              "correct": false
            },
            {
              "label": "une surprise",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "at4-t3",
          "prompt": "Complète : « Qu'est-ce qu'on lui offre (à elle) ? »",
          "before": "Что",
          "after": "подарить?",
          "answer": "ей",
          "options": [
            "ей",
            "ему",
            "мне"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "at4-t4",
          "prompt": "Quelle lettre manque ? (cadeau)",
          "before": "под",
          "after": "рок",
          "answer": "а",
          "options": [
            "а",
            "о",
            "е"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "at4-t5",
          "prompt": "Что тебе подарить?",
          "model": "Мне нравится читать. Подари книгу!",
          "modelEn": "J'aime lire. Offre-moi un livre !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Un ami veut t'acheter un cadeau. Dis ce que tu aimes."
        },
        {
          "kind": "choice",
          "id": "at4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Когда у тебя день рождения?",
          "options": [
            {
              "label": "Пятого мая.",
              "correct": true
            },
            {
              "label": "Это сюрприз!",
              "correct": false
            },
            {
              "label": "Послезавтра пятое.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "balloons",
        "itemName": "Ballons",
        "itemNameRu": "Воздушные шары",
        "ru": "Ура! Воздушные шары!",
        "en": "Youpi ! Des ballons !",
        "a11y": "Un bouquet de ballons bleus, blancs et jaunes est attaché à la rambarde de la terrasse sur le toit.",
        "image": "/art/athens/reward-4.jpg",
        "steps": [
          "Sur le chemin du retour, Nika achète des ballons.",
          "Bleus, blancs et jaunes.",
          "Ils les cachent dans la cuisine.",
          "Murzik ne se doute toujours de rien !"
        ],
        "bridge": "Le cinq mai. Murzik se réveille… et la porte s'ouvre."
      }
    },
    {
      "id": "a1-athens-5",
      "level": "A1",
      "cityId": "athens",
      "number": 5,
      "title": "Joyeux anniversaire !",
      "minutes": 6,
      "goals": [
        "Dire Joyeux anniversaire !",
        "Offrir un cadeau",
        "Réagir à un cadeau"
      ],
      "vocabNote": "Это тебе! veut dire « C'est pour toi ! ». Не надо было! — « Il ne fallait pas ! » — est une réaction polie et joyeuse, comme en français.",
      "vocab": [
        {
          "id": "at5-1",
          "ru": "С днём рождения!",
          "en": "Joyeux anniversaire !",
          "a11y": "Tom et Nika entrent en trombe par la porte bleue avec des ballons, en criant de joie.",
          "audioLabel": "Écouter С днём рождения",
          "image": "/art/athens/5-1.jpg"
        },
        {
          "id": "at5-2",
          "ru": "Это тебе!",
          "en": "C'est pour toi !",
          "a11y": "Tom tend un cadeau emballé de papier bleu.",
          "audioLabel": "Écouter Это тебе",
          "image": "/art/athens/5-2.jpg"
        },
        {
          "id": "at5-3",
          "ru": "От всего сердца!",
          "en": "De tout mon cœur !",
          "a11y": "Murzik presse ses deux pattes contre son cœur, les yeux brillants.",
          "audioLabel": "Écouter От всего сердца",
          "image": "/art/athens/5-3b.jpg"
        },
        {
          "id": "at5-4",
          "ru": "Какой красивый подарок!",
          "en": "Quel beau cadeau !",
          "a11y": "Murzik lève un carnet de croquis en cuir, les yeux brillants.",
          "audioLabel": "Écouter Какой красивый подарок",
          "image": "/art/athens/5-4.jpg"
        },
        {
          "id": "at5-5",
          "ru": "Не надо было!",
          "en": "Il ne fallait pas !",
          "a11y": "Murzik pose ses pattes sur ses joues, ému et heureux.",
          "audioLabel": "Écouter Не надо было",
          "image": "/art/athens/5-5.jpg"
        },
        {
          "id": "at5-6",
          "ru": "Мне очень нравится!",
          "en": "Il me plaît beaucoup !",
          "a11y": "Murzik serre le carnet de croquis contre sa poitrine.",
          "audioLabel": "Écouter Мне очень нравится",
          "image": "/art/athens/5-6.jpg"
        },
        {
          "id": "at5-7",
          "ru": "Ты лучший друг!",
          "en": "Tu es le meilleur des amis !",
          "a11y": "Murzik serre Tom très fort dans ses bras.",
          "audioLabel": "Écouter Ты лучший друг",
          "image": "/art/athens/5-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le cinq mai",
        "note": "Ты помнишь? — Tu t'en souviens ? Конечно помню! — Bien sûr que je m'en souviens !",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик! С днём рождения!",
            "en": "Murzik ! Joyeux anniversaire !"
          },
          {
            "speaker": "murzik",
            "ru": "Ой! Ты помнишь?",
            "en": "Oh ! Tu t'en souviens ?"
          },
          {
            "speaker": "tom",
            "ru": "Конечно помню! Это тебе. Открой!",
            "en": "Bien sûr que je m'en souviens ! C'est pour toi. Ouvre-le !"
          },
          {
            "speaker": "murzik",
            "ru": "Альбом для рисования! Какой красивый подарок! Не надо было!",
            "en": "Un carnet de croquis ! Quel beau cadeau ! Il ne fallait pas !"
          },
          {
            "speaker": "nika",
            "ru": "Тебе нравится?",
            "en": "Il te plaît ?"
          },
          {
            "speaker": "murzik",
            "ru": "Мне очень нравится! От всего сердца спасибо! Том, ты лучший друг!",
            "en": "Il me plaît beaucoup ! Merci de tout mon cœur ! Tom, tu es le meilleur des amis !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "at5-d1",
          "prompt": "Le cadeau plaît-il à Murzik ?",
          "options": [
            {
              "label": "Oui, beaucoup.",
              "correct": true
            },
            {
              "label": "Non, il voulait un appareil photo.",
              "correct": false
            },
            {
              "label": "Il ne l'ouvre pas.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Это тебе — pour toi",
          "paragraphs": [
            "Les mêmes formes veulent dire « pour » : Это тебе — C'est pour toi. Это ему — pour lui. Это ей — pour elle.",
            "Avec лучший (meilleur) : Ты лучший друг — pour un homme. Ты лучшая подруга — pour une femme."
          ],
          "examples": [
            {
              "ru": "Это тебе!",
              "en": "C'est pour toi !"
            },
            {
              "ru": "А это ей.",
              "en": "Et ça, c'est pour elle."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "at5-t1",
          "prompt": "Écoute. Pour qui est le cadeau ?",
          "skill": "listening",
          "audio": "Это ей.",
          "options": [
            {
              "label": "Pour elle.",
              "correct": true
            },
            {
              "label": "Pour lui.",
              "correct": false
            },
            {
              "label": "Pour toi.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "at5-t2",
          "prompt": "Tu reçois un cadeau qui te plaît beaucoup. Que peux-tu dire ?",
          "skill": "words",
          "options": [
            {
              "label": "Не надо было! Мне очень нравится!",
              "correct": true
            },
            {
              "label": "Упакуйте, пожалуйста.",
              "correct": false
            },
            {
              "label": "Что ему подарить?",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "at5-t3",
          "prompt": "Complète : « C'est pour toi ! »",
          "before": "Это",
          "after": "!",
          "answer": "тебе",
          "options": [
            "тебе",
            "ты",
            "твой"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "at5-t4",
          "prompt": "Forme le mot « ami ».",
          "word": "друг",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "at5-t5",
          "prompt": "Это тебе! С днём рождения!",
          "model": "Спасибо! Какой красивый подарок!",
          "modelEn": "Merci ! Quel beau cadeau !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Ton ami t'offre un cadeau. Réagis à voix haute."
        },
        {
          "kind": "choice",
          "id": "at5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Что ему подарить?",
          "options": [
            {
              "label": "Ему нравится рисовать.",
              "correct": true
            },
            {
              "label": "Это тебе!",
              "correct": false
            },
            {
              "label": "Открой!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "sketchbook",
        "itemName": "Carnet de croquis",
        "itemNameRu": "Альбом",
        "ru": "Ура! Альбом для рисования!",
        "en": "Youpi ! Un carnet de croquis !",
        "a11y": "Murzik est assis sur la terrasse et dessine l'Acropole dans son nouveau carnet de croquis en cuir.",
        "image": "/art/athens/reward-5.jpg",
        "steps": [
          "Murzik ouvre le carnet de croquis.",
          "Les pages sont épaisses et blanches.",
          "Il fait son premier dessin : l'Acropole.",
          "Puis il dessine Tom et Nika."
        ],
        "bridge": "Le soir, il y a une fête sur le toit. La famille de Nika apporte un grand gâteau."
      }
    },
    {
      "id": "a1-athens-6",
      "level": "A1",
      "cityId": "athens",
      "number": 6,
      "title": "Le gâteau d'anniversaire",
      "minutes": 6,
      "goals": [
        "Faire des vœux d'anniversaire",
        "Souffler les bougies et faire un vœu",
        "Proposer à manger aux invités"
      ],
      "vocabNote": "Желаю… veut dire « Je (te) souhaite… » : Желаю счастья! — Je te souhaite beaucoup de bonheur ! Угощайтесь! est le « Servez-vous ! » poli.",
      "vocab": [
        {
          "id": "at6-1",
          "ru": "Желаю счастья!",
          "en": "Je te souhaite beaucoup de bonheur !",
          "a11y": "La grand-mère de Nika embrasse Murzik sur la tête et sourit chaleureusement.",
          "audioLabel": "Écouter Желаю счастья",
          "image": "/art/athens/6-1.jpg"
        },
        {
          "id": "at6-2",
          "ru": "Желаю здоровья!",
          "en": "Je te souhaite une bonne santé !",
          "a11y": "Le grand-père de Nika lève un verre de jus en l'honneur de Murzik.",
          "audioLabel": "Écouter Желаю здоровья",
          "image": "/art/athens/6-2.jpg"
        },
        {
          "id": "at6-3",
          "ru": "торт",
          "en": "gâteau",
          "a11y": "Un grand gâteau d'anniversaire rond avec de la crème blanche et des fleurs bleues.",
          "audioLabel": "Écouter торт",
          "image": "/art/athens/6-3.jpg"
        },
        {
          "id": "at6-4",
          "ru": "Задуй свечи!",
          "en": "Souffle les bougies !",
          "a11y": "Murzik prend une grande inspiration devant un gâteau aux bougies allumées.",
          "audioLabel": "Écouter Задуй свечи",
          "image": "/art/athens/6-4.jpg"
        },
        {
          "id": "at6-5",
          "ru": "Загадай желание!",
          "en": "Fais un vœu !",
          "a11y": "Murzik ferme très fort les yeux, les pattes jointes.",
          "audioLabel": "Écouter Загадай желание",
          "image": "/art/athens/6-5.jpg"
        },
        {
          "id": "at6-6",
          "ru": "Угощайтесь!",
          "en": "Servez-vous !",
          "a11y": "La mère de Nika pose des plats sur une longue table sur la terrasse du toit.",
          "audioLabel": "Écouter Угощайтесь",
          "image": "/art/athens/6-6.jpg"
        },
        {
          "id": "at6-7",
          "ru": "Какой вкусный торт!",
          "en": "Quel bon gâteau !",
          "a11y": "Murzik a de la crème sur le nez et l'air ravi.",
          "audioLabel": "Écouter Какой вкусный торт",
          "image": "/art/athens/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Une fête sur le toit",
        "note": "Загадал! — C'est fait ! (j'ai fait un vœu ; Murzik est un garçon, donc загадал). Я не скажу — je ne le dirai pas. Иначе не сбудется — sinon, il ne se réalisera pas.",
        "lines": [
          {
            "speaker": "nika",
            "ru": "Мурзик, с днём рождения! Желаю счастья и здоровья!",
            "en": "Murzik, joyeux anniversaire ! Je te souhaite beaucoup de bonheur et une bonne santé !"
          },
          {
            "speaker": "tom",
            "ru": "Вот торт! Загадай желание!",
            "en": "Voici le gâteau ! Fais un vœu !"
          },
          {
            "speaker": "murzik",
            "ru": "Хорошо… Загадал!",
            "en": "D'accord… C'est fait !"
          },
          {
            "speaker": "nika",
            "ru": "Теперь задуй свечи!",
            "en": "Maintenant, souffle les bougies !"
          },
          {
            "speaker": "tom",
            "ru": "Ура! Какое желание?",
            "en": "Youpi ! Quel était le vœu ?"
          },
          {
            "speaker": "murzik",
            "ru": "Я не скажу. Иначе не сбудется!",
            "en": "Je ne le dirai pas. Sinon, il ne se réalisera pas !"
          },
          {
            "speaker": "nika",
            "ru": "Угощайтесь! Какой вкусный торт!",
            "en": "Servez-vous ! Quel bon gâteau !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "at6-d1",
          "prompt": "Murzik leur dit-il son vœu ?",
          "options": [
            {
              "label": "Non, sinon il ne se réalisera pas.",
              "correct": true
            },
            {
              "label": "Oui, il veut un nouvel appareil photo.",
              "correct": false
            },
            {
              "label": "Oui, il veut rentrer à la maison.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Желаю + vœu",
          "paragraphs": [
            "Желаю est suivi d'une forme spéciale. Apprends les vœux courants en entier : Желаю счастья! Желаю здоровья! Желаю удачи! (bonne chance)",
            "Tu peux les combiner : Желаю счастья и здоровья!"
          ],
          "examples": [
            {
              "ru": "Желаю удачи!",
              "en": "Bonne chance !"
            },
            {
              "ru": "Желаю счастья и здоровья!",
              "en": "Je te souhaite beaucoup de bonheur et une bonne santé !"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "at6-t1",
          "prompt": "Écoute. Que souhaitent-ils ?",
          "skill": "listening",
          "audio": "Желаю здоровья!",
          "options": [
            {
              "label": "Une bonne santé.",
              "correct": true
            },
            {
              "label": "Du bonheur.",
              "correct": false
            },
            {
              "label": "Bonne chance.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "at6-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "торт",
              "right": "gâteau"
            },
            {
              "left": "Загадай желание!",
              "right": "Fais un vœu !"
            },
            {
              "left": "Угощайтесь!",
              "right": "Servez-vous !"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "at6-t3",
          "prompt": "Ton ami a un examen demain. Que lui souhaites-tu ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Желаю удачи!",
              "correct": true
            },
            {
              "label": "Желаю здоровья!",
              "correct": false
            },
            {
              "label": "Задуй свечи!",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "at6-t4",
          "prompt": "Forme le mot « gâteau ».",
          "word": "торт",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "at6-t5",
          "prompt": "У меня сегодня день рождения!",
          "model": "С днём рождения! Желаю счастья!",
          "modelEn": "Joyeux anniversaire ! Je te souhaite beaucoup de bonheur !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "C'est l'anniversaire de ton ami. Souhaite-le-lui à voix haute."
        },
        {
          "kind": "choice",
          "id": "at6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Это тебе!",
          "options": [
            {
              "label": "Спасибо! Какой красивый подарок!",
              "correct": true
            },
            {
              "label": "Угощайтесь!",
              "correct": false
            },
            {
              "label": "Желаю здоровья!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "evil-eye",
        "itemName": "Œil bleu porte-bonheur",
        "itemNameRu": "Оберег",
        "ru": "Ура! Голубой оберег!",
        "en": "Youpi ! Un œil bleu porte-bonheur !",
        "a11y": "Un porte-bonheur rond en verre bleu, en forme d'œil, est accroché à un fil près du lit de Murzik.",
        "image": "/art/athens/reward-6.jpg",
        "steps": [
          "Le cadeau secret de Nika est un petit porte-bonheur bleu.",
          "Il ressemble à un œil bleu.",
          "« En Grèce, il te protège », dit-elle.",
          "Murzik l'accroche près de son lit."
        ],
        "bridge": "Tard le soir, la grand-mère de Nika monte. « Murzik, il y avait une carte postale pour toi aujourd'hui… »"
      }
    },
    {
      "id": "a1-athens-7",
      "level": "A1",
      "cityId": "athens",
      "number": 7,
      "title": "Une carte sans adresse",
      "minutes": 7,
      "goals": [
        "Demander de qui vient quelque chose",
        "Dire que quelque chose est étrange",
        "Comprendre des dates à l'oral"
      ],
      "vocabNote": "От кого? veut dire « De qui ? ». Не может быть! — « Ce n'est pas possible ! » — montre une grande surprise.",
      "vocab": [
        {
          "id": "at7-1",
          "ru": "Тебе открытка!",
          "en": "Il y a une carte postale pour toi !",
          "a11y": "La grand-mère de Nika tend à Murzik une carte postale qui a l'air ancienne.",
          "audioLabel": "Écouter Тебе открытка",
          "image": "/art/athens/7-1.jpg"
        },
        {
          "id": "at7-2",
          "ru": "От кого?",
          "en": "De qui vient-elle ?",
          "a11y": "Murzik tourne et retourne la carte, perplexe.",
          "audioLabel": "Écouter От кого",
          "image": "/art/athens/7-2.jpg"
        },
        {
          "id": "at7-3",
          "ru": "Здесь нет адреса.",
          "en": "Il n'y a pas d'adresse.",
          "a11y": "Le dos d'une carte postale : quelques lignes manuscrites et un espace vide là où devrait être l'adresse.",
          "audioLabel": "Écouter Здесь нет адреса",
          "image": "/art/athens/7-3.jpg"
        },
        {
          "id": "at7-4",
          "ru": "Странно…",
          "en": "Étrange…",
          "a11y": "Tom se gratte la tête et fronce les sourcils devant la carte.",
          "audioLabel": "Écouter Странно",
          "image": "/art/athens/7-4.jpg"
        },
        {
          "id": "at7-5",
          "ru": "Кто это написал?",
          "en": "Qui a écrit ça ?",
          "a11y": "Murzik lève la carte vers la lampe et regarde l'écriture de près.",
          "audioLabel": "Écouter Кто это написал",
          "image": "/art/athens/7-5.jpg"
        },
        {
          "id": "at7-6",
          "ru": "Может быть, бабушка?",
          "en": "Peut-être grand-mère ?",
          "a11y": "Murzik lève les yeux vers le ciel nocturne, plein d'espoir.",
          "audioLabel": "Écouter Может быть, бабушка",
          "image": "/art/athens/7-6.jpg"
        },
        {
          "id": "at7-7",
          "ru": "Не может быть!",
          "en": "Ce n'est pas possible !",
          "a11y": "Tom reste bouche bée de surprise.",
          "audioLabel": "Écouter Не может быть",
          "image": "/art/athens/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "«С днём рождения, внук»",
        "note": "Внук — petit-fils. Такая же — la même. Рыжая кошка — une chatte rousse.",
        "lines": [
          {
            "speaker": "nika",
            "ru": "Мурзик, тебе открытка!",
            "en": "Murzik, il y a une carte postale pour toi !"
          },
          {
            "speaker": "murzik",
            "ru": "Мне? От кого?",
            "en": "Pour moi ? De qui vient-elle ?"
          },
          {
            "speaker": "tom",
            "ru": "Здесь нет адреса. Странно…",
            "en": "Il n'y a pas d'adresse. Étrange…"
          },
          {
            "speaker": "murzik",
            "ru": "«С днём рождения, внук». Кто это написал?",
            "en": "« Joyeux anniversaire, mon petit-fils. » Qui a écrit ça ?"
          },
          {
            "speaker": "tom",
            "ru": "Смотри! Здесь рыжая кошка. Такая же, как на открытке из Парижа!",
            "en": "Regarde ! Il y a une chatte rousse ici. La même que sur la carte de Paris !"
          },
          {
            "speaker": "murzik",
            "ru": "Может быть, бабушка?",
            "en": "Peut-être grand-mère ?"
          },
          {
            "speaker": "tom",
            "ru": "Не может быть!",
            "en": "Ce n'est pas possible !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "at7-d1",
          "prompt": "Qu'est-il écrit sur la carte ?",
          "options": [
            {
              "label": "« Joyeux anniversaire, mon petit-fils. »",
              "correct": true
            },
            {
              "label": "« Viens à Paris. »",
              "correct": false
            },
            {
              "label": "« Bonne chance, Tom. »",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Les mots interrogatifs",
          "paragraphs": [
            "Tu connais maintenant beaucoup de mots interrogatifs : кто? (qui), что? (quoi), где? (où), куда? (vers où), когда? (quand), почему? (pourquoi), от кого? (de qui).",
            "Dans une question russe, la voix monte sur le mot interrogatif : Кто это написал? ↗"
          ],
          "examples": [
            {
              "ru": "От кого подарок?",
              "en": "De qui vient le cadeau ?"
            },
            {
              "ru": "Когда пришла открытка?",
              "en": "Quand la carte est-elle arrivée ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "at7-t1",
          "prompt": "Écoute. Quand est l'anniversaire du frère ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute d'Athènes.",
          "audio": "Мой день рождения — двадцатого октября. А у брата — третьего марта. Сейчас март, значит, скоро праздник!",
          "options": [
            {
              "label": "Le 3 mars.",
              "correct": true
            },
            {
              "label": "Le 20 octobre.",
              "correct": false
            },
            {
              "label": "Le 20 mars.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "at7-t2",
          "prompt": "Tu reçois une lettre, mais tu ne connais pas l'expéditeur. Que demandes-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "От кого?",
              "correct": true
            },
            {
              "label": "Не может быть!",
              "correct": false
            },
            {
              "label": "Угощайтесь!",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "at7-t3",
          "prompt": "Quel mot interrogatif veut dire « quand » ?",
          "skill": "grammar",
          "options": [
            {
              "label": "когда",
              "correct": true
            },
            {
              "label": "кто",
              "correct": false
            },
            {
              "label": "почему",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "at7-t4",
          "prompt": "Forme le mot « carte postale ».",
          "word": "открытка",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "at7-t5",
          "prompt": "Тебе открытка!",
          "model": "Мне? От кого?",
          "modelEn": "Pour moi ? De qui vient-elle ?",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Quelqu'un te donne une carte postale. Demande de qui elle vient."
        },
        {
          "kind": "choice",
          "id": "at7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Задуй свечи! Загадай желание!",
          "options": [
            {
              "label": "Хорошо!",
              "correct": true
            },
            {
              "label": "Упакуйте, пожалуйста.",
              "correct": false
            },
            {
              "label": "От кого?",
              "correct": false
            }
          ]
        },
        {
          "kind": "truefalse",
          "id": "at7-t7",
          "prompt": "Vrai ou faux",
          "statement": "Пятого мая veut dire « le cinq mai ».",
          "correct": true,
          "skill": "review"
        }
      ],
      "reward": {
        "itemId": "birthday-postcard",
        "itemName": "Carte d'anniversaire",
        "itemNameRu": "Открытка",
        "ru": "Ура… Открытка без адреса.",
        "en": "Une carte postale sans adresse.",
        "a11y": "Murzik tient la mystérieuse carte d'anniversaire. Dans le coin, un petit chat roux peint — exactement comme sur la carte de Paris.",
        "image": "/art/athens/reward-7.jpg",
        "steps": [
          "Murzik relit la carte encore et encore.",
          "L'écriture est la même que sur la carte de Paris.",
          "Dans le coin, il y a un petit chat roux peint.",
          "Quelqu'un sait où il est."
        ],
        "bridge": "Murzik n'arrive pas à dormir. Il regarde le timbre de la carte…"
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre de Murzik sur un toit d'Athènes",
      "nameRu": "Комната на крыше",
      "image": "/art/athens/home.jpg",
      "a11y": "Une petite chambre blanche et vide avec une porte bleue, sur la terrasse d'une maison d'hôtes. On voit l'Acropole au loin."
    },
    "keepsakeId": "birthday-postcard",
    "welcomeRu": "Привет, Афины!",
    "welcomeEn": "Bonjour, Athènes !",
    "welcomeImage": "/art/athens/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Athènes sous le soleil et lèvent les yeux vers l'Acropole antique sur sa colline, avec des maisons blanches en contrebas.",
    "departureImage": "/art/athens/departure.jpg",
    "departureA11y": "Nika et sa famille disent au revoir à Murzik et Tom au port d'Athènes. Un grand ferry blanc attend. Murzik tient la carte postale.",
    "finale": [
      {
        "image": "/art/athens/finale-1.jpg",
        "a11y": "Murzik est dans sa chambre blanche sur le toit : un vase grec, des coquillages, un carillon à vent, des ballons, son carnet de croquis et un œil bleu porte-bonheur. Il tient la mystérieuse carte postale.",
        "lines": [
          {
            "en": "La chambre de Murzik sur le toit est lumineuse et joyeuse. C'était le plus bel anniversaire de sa vie."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : la carte sans adresse."
          }
        ]
      },
      {
        "image": "/art/athens/finale-2.jpg",
        "a11y": "Murzik, Tom et Nika font la fête la nuit sur la terrasse du toit, avec des ballons et l'Acropole illuminée derrière eux.",
        "lines": [
          {
            "ru": "Афины завершены!",
            "en": "Athènes, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже десять городов!",
            "en": "Déjà dix villes !"
          }
        ]
      },
      {
        "image": "/art/athens/stamp.jpg",
        "a11y": "Gros plan sur le coin de la carte : un timbre avec un grand bâtiment à coupole et des minarets, et un cachet de la poste rond.",
        "lines": [
          {
            "en": "La nuit, Murzik regarde le timbre. Il n'y a pas d'adresse — mais il y a un cachet de la poste."
          },
          {
            "ru": "Открытка из Стамбула!",
            "en": "La carte vient d'Istanbul !"
          },
          {
            "en": "Quelqu'un qui connaît son anniversaire est à Istanbul. Tom ne pose même pas la question : « On y va. »"
          }
        ]
      },
      {
        "image": "/art/athens/departure.jpg",
        "a11y": "Nika et sa famille disent au revoir à Murzik et Tom au port d'Athènes. Un grand ferry blanc attend. Murzik tient la carte postale.",
        "lines": [
          {
            "ru": "До свидания, Афины! До свидания, Ника!",
            "en": "Au revoir, Athènes ! Au revoir, Nika !"
          },
          {
            "ru": "Следующая остановка: Стамбул!",
            "en": "Prochain arrêt : Istanbul !"
          }
        ]
      },
      {
        "image": "/art/athens/finale-5.jpg",
        "a11y": "Un ferry blanc navigue sur une mer bleue entre les îles, d'Athènes vers Istanbul, sous les mouettes.",
        "lines": [
          {
            "ru": "Афины → Стамбул",
            "en": "Athènes → Istanbul"
          }
        ]
      },
      {
        "image": "/art/istanbul/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Istanbul par la mer : des coupoles et des minarets s'élèvent au-dessus de l'eau, des mouettes volent et des bateaux passent.",
        "lines": [
          {
            "ru": "Привет, Стамбул!",
            "en": "Bonjour, Istanbul !"
          },
          {
            "ru": "Кто же ты? Где ты?",
            "en": "Qui es-tu ? Où es-tu ?"
          }
        ]
      }
    ]
  }
};
