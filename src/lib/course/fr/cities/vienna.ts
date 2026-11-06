import type { CityPlan } from "../../types";

/** Vienna in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const viennaFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-vienna-1",
      "level": "A1",
      "cityId": "vienna",
      "number": 1,
      "title": "Qu'est-ce que tu aimes faire ?",
      "minutes": 5,
      "goals": [
        "Demander à quelqu'un ce qu'il aime faire",
        "Dire ce que tu adores faire",
        "Dire ce que tu n'aimes pas"
      ],
      "vocabNote": "Я люблю s'utilise avec une chose (Я люблю музыку) ou avec une action (Я люблю читать), comme « j'aime la musique » et « j'aime lire ». Les Russes disent люблю pour ce qu'ils aiment vraiment.",
      "vocab": [
        {
          "id": "vi1-1",
          "ru": "Что ты любишь делать?",
          "en": "Qu'est-ce que tu aimes faire ?",
          "a11y": "Assis à une table de café, Tom pose la question à Murzik avec un sourire curieux.",
          "audioLabel": "Écouter Что ты любишь делать",
          "image": "/art/vienna/1-1.jpg"
        },
        {
          "id": "vi1-2",
          "ru": "Я люблю музыку.",
          "en": "J'adore la musique.",
          "a11y": "Murzik écoute de la musique, les yeux fermés ; de petites notes flottent autour de lui.",
          "audioLabel": "Écouter Я люблю музыку",
          "image": "/art/vienna/1-2.jpg"
        },
        {
          "id": "vi1-3",
          "ru": "читать",
          "en": "lire",
          "a11y": "Murzik lit un gros livre dans un fauteuil douillet.",
          "audioLabel": "Écouter читать",
          "image": "/art/vienna/1-3.jpg"
        },
        {
          "id": "vi1-4",
          "ru": "танцевать",
          "en": "danser",
          "a11y": "Murzik danse joyeusement en tournant sur une patte.",
          "audioLabel": "Écouter танцевать",
          "image": "/art/vienna/1-4.jpg"
        },
        {
          "id": "vi1-5",
          "ru": "рисовать",
          "en": "dessiner",
          "a11y": "Murzik dessine une petite maison aux crayons de couleur, en tirant la langue de concentration.",
          "audioLabel": "Écouter рисовать",
          "image": "/art/vienna/1-5.jpg"
        },
        {
          "id": "vi1-6",
          "ru": "Я не люблю…",
          "en": "Je n'aime pas…",
          "a11y": "Murzik fait une drôle de tête et repousse un bol de bouillie.",
          "audioLabel": "Écouter Я не люблю",
          "image": "/art/vienna/1-6.jpg"
        },
        {
          "id": "vi1-7",
          "ru": "Это моё хобби.",
          "en": "C'est mon passe-temps.",
          "a11y": "Tom montre fièrement son appareil photo.",
          "audioLabel": "Écouter Это моё хобби",
          "image": "/art/vienna/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Au café viennois",
        "note": "Фотографировать — prendre des photos. Правда? — C'est vrai ?",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, что ты любишь делать?",
            "en": "Murzik, qu'est-ce que tu aimes faire ?"
          },
          {
            "speaker": "murzik",
            "ru": "Я люблю музыку. И я люблю читать.",
            "en": "J'adore la musique. Et j'adore lire."
          },
          {
            "speaker": "tom",
            "ru": "А танцевать?",
            "en": "Et danser ?"
          },
          {
            "speaker": "murzik",
            "ru": "Нет, я не люблю танцевать. А ты?",
            "en": "Non, je n'aime pas danser. Et toi ?"
          },
          {
            "speaker": "tom",
            "ru": "Я люблю фотографировать. Это моё хобби.",
            "en": "J'adore prendre des photos. C'est mon passe-temps."
          },
          {
            "speaker": "murzik",
            "ru": "А я… я люблю рисовать!",
            "en": "Et moi… j'adore dessiner !"
          },
          {
            "speaker": "tom",
            "ru": "Правда? Как твоя бабушка Ася!",
            "en": "C'est vrai ? Comme ta grand-mère Assia !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "vi1-d1",
          "prompt": "Qu'est-ce que Murzik n'aime PAS faire ?",
          "options": [
            {
              "label": "Danser.",
              "correct": true
            },
            {
              "label": "Lire.",
              "correct": false
            },
            {
              "label": "Dessiner.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Люблю + chose ou action",
          "paragraphs": [
            "я люблю, ты любишь. Après люблю, on met une chose ou une action : Я люблю музыку. Я люблю рисовать.",
            "Pour dire que tu n'aimes pas, ajoute не : Я не люблю танцевать."
          ],
          "examples": [
            {
              "ru": "Ты любишь читать?",
              "en": "Tu aimes lire ?"
            },
            {
              "ru": "Я не люблю спорт.",
              "en": "Je n'aime pas le sport."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "vi1-t1",
          "prompt": "Écoute. Qu'est-ce que cette personne adore faire ?",
          "skill": "listening",
          "audio": "Я люблю танцевать.",
          "options": [
            {
              "label": "Danser.",
              "correct": true
            },
            {
              "label": "Dessiner.",
              "correct": false
            },
            {
              "label": "Lire.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "vi1-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "читать",
              "right": "lire"
            },
            {
              "left": "рисовать",
              "right": "dessiner"
            },
            {
              "left": "танцевать",
              "right": "danser"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "vi1-t3",
          "prompt": "Complète : « Tu aimes la musique ? »",
          "before": "Ты",
          "after": "музыку?",
          "answer": "любишь",
          "options": [
            "любишь",
            "люблю",
            "любит"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "vi1-t4",
          "prompt": "Forme le mot « musique ».",
          "word": "музыка",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "vi1-t5",
          "prompt": "Что ты любишь делать?",
          "model": "Я люблю читать и рисовать.",
          "modelEn": "J'adore lire et dessiner.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis à Tom ce que tu adores vraiment faire."
        },
        {
          "kind": "choice",
          "id": "vi1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Мы заблудились!",
          "options": [
            {
              "label": "Не волнуйся!",
              "correct": true
            },
            {
              "label": "Мне всё равно.",
              "correct": false
            },
            {
              "label": "Это легко!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "easel",
        "itemName": "Chevalet",
        "itemNameRu": "Мольберт",
        "ru": "Ура! У меня мольберт!",
        "en": "Youpi ! J'ai un chevalet !",
        "a11y": "Murzik est devant un petit chevalet en bois, près de la fenêtre de sa chambre au-dessus d'un café viennois, et peint avec un pinceau.",
        "image": "/art/vienna/reward-1.jpg",
        "steps": [
          "Leur chambre est au-dessus d'un vieux café.",
          "Ça sent le café et le gâteau.",
          "Dans le coin, Murzik trouve un vieux chevalet en bois.",
          "Il se met tout de suite à peindre."
        ],
        "bridge": "En bas, dans le café, il y a un vieux piano. Quelqu'un sait-il en jouer ?"
      }
    },
    {
      "id": "a1-vienna-2",
      "level": "A1",
      "cityId": "vienna",
      "number": 2,
      "title": "Tu sais jouer du piano ?",
      "minutes": 5,
      "goals": [
        "Demander si quelqu'un sait jouer ou chanter",
        "Dire ce que tu sais faire ou non",
        "Demander à quelqu'un de t'apprendre"
      ],
      "vocabNote": "Умею veut dire « je sais (faire) » : Я умею плавать — Je sais nager. Jouer d'un instrument se dit играть на : на гитаре, на пианино.",
      "vocab": [
        {
          "id": "vi2-1",
          "ru": "Ты умеешь играть на пианино?",
          "en": "Tu sais jouer du piano ?",
          "a11y": "Murzik montre un vieux piano dans un café et regarde Tom.",
          "audioLabel": "Écouter Ты умеешь играть на пианино",
          "image": "/art/vienna/2-1.jpg"
        },
        {
          "id": "vi2-2",
          "ru": "Да, умею.",
          "en": "Oui, je sais.",
          "a11y": "Tom est assis au piano et joue avec un sourire assuré.",
          "audioLabel": "Écouter Да, умею",
          "image": "/art/vienna/2-2.jpg"
        },
        {
          "id": "vi2-3",
          "ru": "Нет, не умею.",
          "en": "Non, je ne sais pas.",
          "a11y": "Murzik appuie sur une touche du piano et fait une drôle de tête à cause de la fausse note.",
          "audioLabel": "Écouter Нет, не умею",
          "image": "/art/vienna/2-3.jpg"
        },
        {
          "id": "vi2-4",
          "ru": "играть на гитаре",
          "en": "jouer de la guitare",
          "a11y": "Tom joue de la guitare sur une terrasse de café.",
          "audioLabel": "Écouter играть на гитаре",
          "image": "/art/vienna/2-4.jpg"
        },
        {
          "id": "vi2-5",
          "ru": "петь",
          "en": "chanter",
          "a11y": "Murzik chante, la bouche grande ouverte et les yeux fermés.",
          "audioLabel": "Écouter петь",
          "image": "/art/vienna/2-5.jpg"
        },
        {
          "id": "vi2-6",
          "ru": "плавать",
          "en": "nager",
          "a11y": "Murzik nage joyeusement dans une rivière avec une petite bouée.",
          "audioLabel": "Écouter плавать",
          "image": "/art/vienna/2-6.jpg"
        },
        {
          "id": "vi2-7",
          "ru": "Научи меня!",
          "en": "Apprends-moi !",
          "a11y": "Murzik tire Tom par la manche et montre la guitare avec des yeux suppliants.",
          "audioLabel": "Écouter Научи меня",
          "image": "/art/vienna/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le vieux piano",
        "note": "Немного veut dire « un peu ». Пожалуйста veut dire ici « S'il te plaît ! ».",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, ты умеешь играть на пианино?",
            "en": "Tom, tu sais jouer du piano ?"
          },
          {
            "speaker": "tom",
            "ru": "Нет, не умею. Но я умею играть на гитаре.",
            "en": "Non, je ne sais pas. Mais je sais jouer de la guitare."
          },
          {
            "speaker": "murzik",
            "ru": "Правда? А петь?",
            "en": "C'est vrai ? Et chanter ?"
          },
          {
            "speaker": "tom",
            "ru": "Петь — немного.",
            "en": "Chanter — un peu."
          },
          {
            "speaker": "murzik",
            "ru": "А я не умею играть. Научи меня!",
            "en": "Et moi, je ne sais pas jouer. Apprends-moi !"
          },
          {
            "speaker": "tom",
            "ru": "Хорошо! Завтра.",
            "en": "D'accord ! Demain."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "vi2-d1",
          "prompt": "De quoi Tom sait-il jouer ?",
          "options": [
            {
              "label": "De la guitare.",
              "correct": true
            },
            {
              "label": "Du piano.",
              "correct": false
            },
            {
              "label": "De rien.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Умею + action",
          "paragraphs": [
            "я умею, ты умеешь + une action : Я умею плавать. Ты умеешь петь?",
            "Pour les instruments, on dit играть на, comme « jouer de » : играть на гитаре, играть на пианино."
          ],
          "examples": [
            {
              "ru": "Я умею играть на гитаре.",
              "en": "Je sais jouer de la guitare."
            },
            {
              "ru": "Я не умею петь.",
              "en": "Je ne sais pas chanter."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "vi2-t1",
          "prompt": "Écoute. Que sait faire cette personne ?",
          "skill": "listening",
          "audio": "Я умею плавать.",
          "options": [
            {
              "label": "Nager.",
              "correct": true
            },
            {
              "label": "Chanter.",
              "correct": false
            },
            {
              "label": "Écouter le piano.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "vi2-t2",
          "prompt": "Que veut dire петь ?",
          "skill": "words",
          "options": [
            {
              "label": "chanter",
              "correct": true
            },
            {
              "label": "nager",
              "correct": false
            },
            {
              "label": "danser",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "vi2-t3",
          "prompt": "Complète : « Tu sais chanter ? »",
          "before": "Ты",
          "after": "петь?",
          "answer": "умеешь",
          "options": [
            "умеешь",
            "умею",
            "любит"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "vi2-t4",
          "prompt": "Quelle lettre manque ? (guitare)",
          "before": "гит",
          "after": "ра",
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
          "id": "vi2-t5",
          "prompt": "Ты умеешь играть на гитаре?",
          "model": "Нет, не умею. Научи меня!",
          "modelEn": "Non, je ne sais pas. Apprends-moi !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Réponds sur toi. Si tu ne sais pas, demande à Tom de t'apprendre."
        },
        {
          "kind": "choice",
          "id": "vi2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Что ты любишь делать?",
          "options": [
            {
              "label": "Я люблю рисовать.",
              "correct": true
            },
            {
              "label": "Да, умею.",
              "correct": false
            },
            {
              "label": "Это моя сестра.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "guitar",
        "itemName": "Guitare",
        "itemNameRu": "Гитара",
        "ru": "Ура! У меня гитара!",
        "en": "Youpi ! J'ai une guitare !",
        "a11y": "Murzik tient une petite guitare ancienne avec un ruban rouge, assis sur son lit au-dessus du café.",
        "image": "/art/vienna/reward-2.jpg",
        "steps": [
          "Le patron du café a une vieille guitare.",
          "Plus personne n'en joue.",
          "Il la donne à Murzik.",
          "Tom lui montre les premières notes."
        ],
        "bridge": "Le matin, Tom va courir au parc. Il demande à Murzik : tu fais du sport ?"
      }
    },
    {
      "id": "a1-vienna-3",
      "level": "A1",
      "cityId": "vienna",
      "number": 3,
      "title": "Tu fais du sport ?",
      "minutes": 6,
      "goals": [
        "Parler de sport",
        "Dire à quelle fréquence tu fais quelque chose",
        "Inviter un ami à la patinoire"
      ],
      "vocabNote": "Никогда (jamais) a toujours besoin de не : Я никогда не бегаю. Comme « ne… jamais » en français : deux petits mots pour une négation !",
      "vocab": [
        {
          "id": "vi3-1",
          "ru": "Ты занимаешься спортом?",
          "en": "Tu fais du sport ?",
          "a11y": "En tenue de jogging, Tom pose la question à Murzik, allongé sur le canapé.",
          "audioLabel": "Écouter Ты занимаешься спортом",
          "image": "/art/vienna/3-1.jpg"
        },
        {
          "id": "vi3-2",
          "ru": "Я играю в футбол.",
          "en": "Je joue au football.",
          "a11y": "Murzik tape dans un ballon dans un parc verdoyant.",
          "audioLabel": "Écouter Я играю в футбол",
          "image": "/art/vienna/3-2.jpg"
        },
        {
          "id": "vi3-3",
          "ru": "Я бегаю.",
          "en": "Je cours.",
          "a11y": "Tom fait son jogging dans une allée du parc, parmi les arbres d'automne.",
          "audioLabel": "Écouter Я бегаю",
          "image": "/art/vienna/3-3.jpg"
        },
        {
          "id": "vi3-4",
          "ru": "каждый день",
          "en": "tous les jours",
          "a11y": "Une rangée de sept petits soleils, chacun avec une coche dessous.",
          "audioLabel": "Écouter каждый день",
          "image": "/art/vienna/3-4.jpg"
        },
        {
          "id": "vi3-5",
          "ru": "иногда",
          "en": "parfois",
          "a11y": "Une rangée de sept petits soleils ; seuls deux ont une coche dessous.",
          "audioLabel": "Écouter иногда",
          "image": "/art/vienna/3-5.jpg"
        },
        {
          "id": "vi3-6",
          "ru": "никогда",
          "en": "jamais",
          "a11y": "Une rangée de sept petits soleils, aucun coché ; Murzik hausse les épaules.",
          "audioLabel": "Écouter никогда",
          "image": "/art/vienna/3-6.jpg"
        },
        {
          "id": "vi3-7",
          "ru": "Пойдём на каток!",
          "en": "Allons à la patinoire !",
          "a11y": "Murzik montre une paire de patins à glace devant une patinoire en plein air illuminée.",
          "audioLabel": "Écouter Пойдём на каток",
          "image": "/art/vienna/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Au parc",
        "note": "По утрам veut dire « le matin » (tous les matins). Это весело! — C'est amusant !",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, ты занимаешься спортом?",
            "en": "Murzik, tu fais du sport ?"
          },
          {
            "speaker": "murzik",
            "ru": "Иногда. Я играю в футбол. А ты?",
            "en": "Parfois. Je joue au football. Et toi ?"
          },
          {
            "speaker": "tom",
            "ru": "Я бегаю. Каждый день, по утрам.",
            "en": "Je cours. Tous les jours, le matin."
          },
          {
            "speaker": "murzik",
            "ru": "Каждый день? А я никогда не бегаю!",
            "en": "Tous les jours ? Et moi, je ne cours jamais !"
          },
          {
            "speaker": "tom",
            "ru": "Ха-ха! А на коньках?",
            "en": "Ha ha ! Et le patin à glace ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да! Пойдём на каток! Это весело!",
            "en": "Oui ! Allons à la patinoire ! C'est amusant !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "vi3-d1",
          "prompt": "À quelle fréquence Tom court-il ?",
          "options": [
            {
              "label": "Tous les jours.",
              "correct": true
            },
            {
              "label": "Parfois.",
              "correct": false
            },
            {
              "label": "Jamais.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Jamais : никогда не",
          "paragraphs": [
            "каждый день (tous les jours), иногда (parfois), никогда (jamais). Avec никогда, on met aussi не devant le verbe.",
            "Я никогда не бегаю. — Je ne cours jamais. Я иногда играю в футбол. — Je joue parfois au football."
          ],
          "examples": [
            {
              "ru": "Я никогда не пою.",
              "en": "Je ne chante jamais."
            },
            {
              "ru": "Он бегает каждый день.",
              "en": "Il court tous les jours."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "vi3-t1",
          "prompt": "Écoute. À quelle fréquence ?",
          "skill": "listening",
          "audio": "Иногда я играю в футбол.",
          "options": [
            {
              "label": "Parfois.",
              "correct": true
            },
            {
              "label": "Tous les jours.",
              "correct": false
            },
            {
              "label": "Jamais.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "vi3-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "каждый день",
              "right": "tous les jours"
            },
            {
              "left": "иногда",
              "right": "parfois"
            },
            {
              "left": "никогда",
              "right": "jamais"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "vi3-t3",
          "prompt": "Comment dit-on « Je ne cours jamais » ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Я никогда не бегаю.",
              "correct": true
            },
            {
              "label": "Я никогда бегаю.",
              "correct": false
            },
            {
              "label": "Я не никогда бегаю.",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "vi3-t4",
          "prompt": "Forme le mot « football ».",
          "word": "футбол",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "vi3-t5",
          "prompt": "Ты занимаешься спортом?",
          "model": "Да, я бегаю каждый день.",
          "modelEn": "Oui, je cours tous les jours.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Réponds sur toi : quel sport, et à quelle fréquence ?"
        },
        {
          "kind": "choice",
          "id": "vi3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Ты умеешь плавать?",
          "options": [
            {
              "label": "Да, умею.",
              "correct": true
            },
            {
              "label": "Иногда.",
              "correct": false
            },
            {
              "label": "Я бегаю.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "skates",
        "itemName": "Patins à glace",
        "itemNameRu": "Коньки",
        "ru": "Ура! У меня коньки!",
        "en": "Youpi ! J'ai des patins à glace !",
        "a11y": "Une petite paire de patins blancs à lacets rouges est accrochée à un crochet près de la porte de Murzik.",
        "image": "/art/vienna/reward-3.jpg",
        "steps": [
          "À la patinoire, Murzik tombe cinq fois.",
          "Puis il ne tombe plus que deux fois.",
          "Puis il patine !",
          "Tom lui achète ses propres petits patins."
        ],
        "bridge": "Tom a une surprise : deux billets pour l'Opéra de Vienne !"
      }
    },
    {
      "id": "a1-vienna-4",
      "level": "A1",
      "cityId": "vienna",
      "number": 4,
      "title": "À l'opéra",
      "minutes": 6,
      "goals": [
        "Trouver sa place",
        "Comprendre des mots courts du théâtre",
        "Dire que quelque chose t'a vraiment plu"
      ],
      "vocabNote": "Мне понравилось est le passé de Мне нравится : « ça m'a plu » (après le spectacle). C'est la même forme pour tout le monde.",
      "vocab": [
        {
          "id": "vi4-1",
          "ru": "Где наши места?",
          "en": "Où sont nos places ?",
          "a11y": "En tenue élégante, Tom et Murzik regardent autour d'eux dans une immense salle d'opéra rouge et or.",
          "audioLabel": "Écouter Где наши места",
          "image": "/art/vienna/4-1.jpg"
        },
        {
          "id": "vi4-2",
          "ru": "Ряд пять, место десять.",
          "en": "Rang cinq, place dix.",
          "a11y": "Un billet de théâtre avec les numéros 5 et 10, dans la patte de Murzik.",
          "audioLabel": "Écouter Ряд пять, место десять",
          "image": "/art/vienna/4-2.jpg"
        },
        {
          "id": "vi4-3",
          "ru": "Тише!",
          "en": "Chut !",
          "a11y": "Dans la salle, une dame met un doigt sur ses lèvres.",
          "audioLabel": "Écouter Тише",
          "image": "/art/vienna/4-3.jpg"
        },
        {
          "id": "vi4-4",
          "ru": "Начинается!",
          "en": "Ça commence !",
          "a11y": "Les lumières baissent et le grand rideau rouge commence à s'ouvrir.",
          "audioLabel": "Écouter Начинается",
          "image": "/art/vienna/4-4.jpg"
        },
        {
          "id": "vi4-5",
          "ru": "антракт",
          "en": "entracte",
          "a11y": "Pendant la pause, des gens discutent dans un grand foyer avec des verres de jus.",
          "audioLabel": "Écouter антракт",
          "image": "/art/vienna/4-5.jpg"
        },
        {
          "id": "vi4-6",
          "ru": "Браво!",
          "en": "Bravo !",
          "a11y": "Murzik se lève et applaudit à tout rompre ; les chanteurs saluent sur scène.",
          "audioLabel": "Écouter Браво",
          "image": "/art/vienna/4-6.jpg"
        },
        {
          "id": "vi4-7",
          "ru": "Мне очень понравилось!",
          "en": "Ça m'a vraiment plu !",
          "a11y": "Murzik sort de l'opéra, les yeux brillants de bonheur.",
          "audioLabel": "Écouter Мне очень понравилось",
          "image": "/art/vienna/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Une soirée à l'opéra",
        "note": "Вот они! — Les voilà ! Ещё раз — encore une fois.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Где наши места?",
            "en": "Où sont nos places ?"
          },
          {
            "speaker": "murzik",
            "ru": "Ряд пять, место десять… Вот они!",
            "en": "Rang cinq, place dix… Les voilà !"
          },
          {
            "speaker": "tom",
            "ru": "Тише, Мурзик! Начинается!",
            "en": "Chut, Murzik ! Ça commence !"
          },
          {
            "speaker": "murzik",
            "ru": "Ой… Какая красота!",
            "en": "Oh… Que c'est beau !"
          },
          {
            "speaker": "tom",
            "ru": "Сейчас антракт. Тебе нравится?",
            "en": "C'est l'entracte. Ça te plaît ?"
          },
          {
            "speaker": "murzik",
            "ru": "Очень! Браво! Мне очень понравилось! Ещё раз!",
            "en": "Beaucoup ! Bravo ! Ça m'a vraiment plu ! Encore une fois !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "vi4-d1",
          "prompt": "L'opéra plaît-il à Murzik ?",
          "options": [
            {
              "label": "Oui, beaucoup.",
              "correct": true
            },
            {
              "label": "Non, c'est ennuyeux.",
              "correct": false
            },
            {
              "label": "Il ne sait pas encore.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Нравится → понравилось",
          "paragraphs": [
            "Мне нравится — ça me plaît (maintenant, en général). Мне понравилось — ça m'a plu (c'est fini).",
            "Тебе понравилось? — Ça t'a plu ? Да, очень!"
          ],
          "examples": [
            {
              "ru": "Мне нравится музыка.",
              "en": "La musique me plaît."
            },
            {
              "ru": "Мне очень понравилось!",
              "en": "Ça m'a vraiment plu !"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "vi4-t1",
          "prompt": "Écoute. Où sont les places ?",
          "skill": "listening",
          "audio": "Ряд семь, место три.",
          "options": [
            {
              "label": "Rang 7, place 3",
              "correct": true
            },
            {
              "label": "Rang 3, place 7",
              "correct": false
            },
            {
              "label": "Rang 7, place 10",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "vi4-t2",
          "prompt": "Le spectacle va commencer. Quelqu'un parle fort. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Тише!",
              "correct": true
            },
            {
              "label": "Браво!",
              "correct": false
            },
            {
              "label": "Антракт!",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "vi4-t3",
          "prompt": "Le concert est fini. Comment dit-on « Ça m'a plu » ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Мне понравилось.",
              "correct": true
            },
            {
              "label": "Мне нравится.",
              "correct": false
            },
            {
              "label": "Я люблю.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "vi4-t4",
          "prompt": "Quelle lettre manque ? (entracte)",
          "before": "антр",
          "after": "кт",
          "answer": "а",
          "options": [
            "а",
            "о",
            "и"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "vi4-t5",
          "prompt": "Тебе понравилось?",
          "model": "Да! Мне очень понравилось!",
          "modelEn": "Oui ! Ça m'a vraiment plu !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tom te demande comment était l'opéra. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "vi4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Ты занимаешься спортом?",
          "options": [
            {
              "label": "Иногда. Я бегаю.",
              "correct": true
            },
            {
              "label": "Тише!",
              "correct": false
            },
            {
              "label": "Ряд пять.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "opera-glasses",
        "itemName": "Jumelles de théâtre",
        "itemNameRu": "Театральный бинокль",
        "ru": "Ура! Театральный бинокль!",
        "en": "Youpi ! Des jumelles de théâtre !",
        "a11y": "Murzik regarde les toits de Vienne par sa fenêtre avec de petites jumelles de théâtre dorées.",
        "image": "/art/vienna/reward-4.jpg",
        "steps": [
          "Pendant l'entracte, Tom achète un petit cadeau.",
          "De petites jumelles de théâtre dorées.",
          "Murzik regarde les chanteurs avec.",
          "À la maison, il regarde toute la rue."
        ],
        "bridge": "Le lendemain, au parc, un vieil homme joue une belle valse au violon."
      }
    },
    {
      "id": "a1-vienna-5",
      "level": "A1",
      "cityId": "vienna",
      "number": 5,
      "title": "Le vieux musicien",
      "minutes": 6,
      "goals": [
        "Dire comment est une musique",
        "Dire « Je me souviens »",
        "Demander à quelqu'un d'en raconter plus"
      ],
      "vocabNote": "Les mots comme красивая, грустная changent de terminaison pour s'accorder, comme « belle / beau » : красивая музыка, красивый вальс.",
      "vocab": [
        {
          "id": "vi5-1",
          "ru": "Какая красивая музыка!",
          "en": "Quelle belle musique !",
          "a11y": "Murzik s'arrête dans le parc et écoute un vieil homme jouer du violon.",
          "audioLabel": "Écouter Какая красивая музыка",
          "image": "/art/vienna/5-1.jpg"
        },
        {
          "id": "vi5-2",
          "ru": "Кто это играет?",
          "en": "Qui joue ?",
          "a11y": "Tom regarde autour de lui dans le parc pour voir d'où vient la musique.",
          "audioLabel": "Écouter Кто это играет",
          "image": "/art/vienna/5-2.jpg"
        },
        {
          "id": "vi5-3",
          "ru": "грустная песня",
          "en": "une chanson triste",
          "a11y": "Murzik écoute, une petite larme à l'œil.",
          "audioLabel": "Écouter грустная песня",
          "image": "/art/vienna/5-3.jpg"
        },
        {
          "id": "vi5-4",
          "ru": "Это моя любимая песня.",
          "en": "C'est ma chanson préférée.",
          "a11y": "Le vieux musicien sourit et serre son violon contre son cœur.",
          "audioLabel": "Écouter Это моя любимая песня",
          "image": "/art/vienna/5-4.jpg"
        },
        {
          "id": "vi5-5",
          "ru": "Я помню.",
          "en": "Je me souviens.",
          "a11y": "Le vieux musicien regarde au loin avec un sourire chaleureux et rêveur.",
          "audioLabel": "Écouter Я помню",
          "image": "/art/vienna/5-5.jpg"
        },
        {
          "id": "vi5-6",
          "ru": "Это было давно.",
          "en": "C'était il y a longtemps.",
          "a11y": "Une vieille photo en noir et blanc d'un jeune violoniste dans un parc de Vienne.",
          "audioLabel": "Écouter Это было давно",
          "image": "/art/vienna/5-6.jpg"
        },
        {
          "id": "vi5-7",
          "ru": "Расскажите, пожалуйста!",
          "en": "Racontez-moi, s'il vous plaît !",
          "a11y": "Murzik est assis sur le banc à côté du vieil homme et se penche pour l'écouter.",
          "audioLabel": "Écouter Расскажите, пожалуйста",
          "image": "/art/vienna/5-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Une valse au parc",
        "note": "Карл parle un russe un peu ancien, lentement. Она учила меня — elle m'a appris.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Какая красивая музыка! Кто это играет?",
            "en": "Quelle belle musique ! Qui joue ?"
          },
          {
            "speaker": "karl",
            "ru": "Я. Меня зовут Карл. Это моя любимая песня.",
            "en": "Moi. Je m'appelle Karl. C'est ma chanson préférée."
          },
          {
            "speaker": "murzik",
            "ru": "Вы говорите по-русски?",
            "en": "Vous parlez russe ?"
          },
          {
            "speaker": "karl",
            "ru": "Немного. Меня учила одна рыжая кошка. Это было давно.",
            "en": "Un peu. C'est une chatte rousse qui me l'a appris. C'était il y a longtemps."
          },
          {
            "speaker": "murzik",
            "ru": "Рыжая кошка? Её звали Ася?",
            "en": "Une chatte rousse ? Elle s'appelait Assia ?"
          },
          {
            "speaker": "karl",
            "ru": "Ася… Да! Я помню.",
            "en": "Assia… Oui ! Je me souviens."
          },
          {
            "speaker": "murzik",
            "ru": "Расскажите, пожалуйста!",
            "en": "Racontez-moi, s'il vous plaît !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "vi5-d1",
          "prompt": "Qui a appris le russe à Karl ?",
          "options": [
            {
              "label": "Une chatte rousse — Assia.",
              "correct": true
            },
            {
              "label": "Tom.",
              "correct": false
            },
            {
              "label": "Son professeur à l'école.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Какая ? Какой ? — des mots qui s'accordent",
          "paragraphs": [
            "Les mots qui décrivent s'accordent avec le mot qu'ils décrivent, comme en français. Pour les mots féminins (музыка, песня) : красивая, грустная. Pour les mots masculins (вальс, концерт) : красивый, грустный.",
            "Какая красивая музыка! — Quelle belle musique ! Какой красивый вальс! — Quelle belle valse !"
          ],
          "examples": [
            {
              "ru": "грустная песня",
              "en": "une chanson triste"
            },
            {
              "ru": "весёлый вальс",
              "en": "une valse joyeuse"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "vi5-t1",
          "prompt": "Écoute. Comment est la chanson ?",
          "skill": "listening",
          "audio": "Это грустная песня.",
          "options": [
            {
              "label": "Triste.",
              "correct": true
            },
            {
              "label": "Joyeuse.",
              "correct": false
            },
            {
              "label": "Longue.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "vi5-t2",
          "prompt": "Que veut dire Я помню ?",
          "skill": "words",
          "options": [
            {
              "label": "Je me souviens.",
              "correct": true
            },
            {
              "label": "Je sais faire.",
              "correct": false
            },
            {
              "label": "Je ne sais pas.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "vi5-t3",
          "prompt": "Complète : « Quelle belle musique ! »",
          "before": "Какая",
          "after": "музыка!",
          "answer": "красивая",
          "options": [
            "красивая",
            "красивый",
            "красивое"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "vi5-t4",
          "prompt": "Forme le mot « chanson ».",
          "word": "песня",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "vi5-t5",
          "prompt": "Это было давно…",
          "model": "Расскажите, пожалуйста!",
          "modelEn": "Racontez-moi, s'il vous plaît !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Le vieil homme commence une histoire. Demande-lui poliment d'en raconter plus."
        },
        {
          "kind": "choice",
          "id": "vi5-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Мне очень понравилось!",
          "options": [
            {
              "label": "Мне очень понравилось!",
              "correct": true
            },
            {
              "label": "Мне очень нравится!",
              "correct": false
            },
            {
              "label": "Я очень люблю!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "sheet-music",
        "itemName": "Partition",
        "itemNameRu": "Ноты",
        "ru": "Ура! Старые ноты!",
        "en": "Youpi ! Une vieille partition !",
        "a11y": "Une page de vieille partition manuscrite, encadrée, est accrochée au-dessus du chevalet de Murzik. Dans le coin de la page, un minuscule chat roux peint.",
        "image": "/art/vienna/reward-5.jpg",
        "steps": [
          "Karl donne à Murzik une vieille page de musique.",
          "C'est une valse. Il l'a écrite il y a longtemps.",
          "Dans le coin, il y a un minuscule chat roux peint.",
          "C'est Assia qui l'a peint."
        ],
        "bridge": "Ce soir-là, il pleut. Tom et Murzik restent à la maison. Que font-ils d'habitude le soir ?"
      }
    },
    {
      "id": "a1-vienna-6",
      "level": "A1",
      "cityId": "vienna",
      "number": 6,
      "title": "Une soirée tranquille",
      "minutes": 6,
      "goals": [
        "Dire ce que tu fais d'habitude le soir",
        "Dire que tu t'ennuies",
        "Écouter une partie de jeu avec un ami"
      ],
      "vocabNote": "Обычно veut dire « d'habitude ». Мне скучно veut dire « Je m'ennuie » — ça marche comme Мне холодно.",
      "vocab": [
        {
          "id": "vi6-1",
          "ru": "Что ты обычно делаешь вечером?",
          "en": "Qu'est-ce que tu fais d'habitude le soir ?",
          "a11y": "Le soir, Tom et Murzik sont assis près d'une fenêtre sous la pluie.",
          "audioLabel": "Écouter Что ты обычно делаешь вечером",
          "image": "/art/vienna/6-1.jpg"
        },
        {
          "id": "vi6-2",
          "ru": "Обычно я читаю.",
          "en": "D'habitude, je lis.",
          "a11y": "Murzik lit un livre sous une lampe chaude, avec une tasse de chocolat.",
          "audioLabel": "Écouter Обычно я читаю",
          "image": "/art/vienna/6-2.jpg"
        },
        {
          "id": "vi6-3",
          "ru": "Я слушаю музыку.",
          "en": "J'écoute de la musique.",
          "a11y": "Tom est allongé sur le lit avec un gros casque.",
          "audioLabel": "Écouter Я слушаю музыку",
          "image": "/art/vienna/6-3.jpg"
        },
        {
          "id": "vi6-4",
          "ru": "Я смотрю сериал.",
          "en": "Je regarde une série.",
          "a11y": "Murzik regarde l'écran d'un ordinateur portable en serrant un coussin.",
          "audioLabel": "Écouter Я смотрю сериал",
          "image": "/art/vienna/6-4.jpg"
        },
        {
          "id": "vi6-5",
          "ru": "Мне скучно.",
          "en": "Je m'ennuie.",
          "a11y": "Murzik est allongé par terre, le menton sur les pattes, l'air de s'ennuyer à mourir.",
          "audioLabel": "Écouter Мне скучно",
          "image": "/art/vienna/6-5.jpg"
        },
        {
          "id": "vi6-6",
          "ru": "Давай сыграем в шахматы!",
          "en": "Jouons aux échecs !",
          "a11y": "Tom pose un échiquier sur la table avec un grand sourire.",
          "audioLabel": "Écouter Давай сыграем в шахматы",
          "image": "/art/vienna/6-6.jpg"
        },
        {
          "id": "vi6-7",
          "ru": "Твой ход!",
          "en": "À toi de jouer !",
          "a11y": "Murzik réfléchit dur devant l'échiquier, une patte au-dessus d'un petit cavalier.",
          "audioLabel": "Écouter Твой ход",
          "image": "/art/vienna/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La pluie à Vienne",
        "note": "Ура, я выиграл! — Youpi, j'ai gagné ! (Murzik est un garçon, donc выиграл.)",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, что ты обычно делаешь вечером?",
            "en": "Murzik, qu'est-ce que tu fais d'habitude le soir ?"
          },
          {
            "speaker": "murzik",
            "ru": "Обычно я читаю или смотрю сериал. А ты?",
            "en": "D'habitude, je lis ou je regarde une série. Et toi ?"
          },
          {
            "speaker": "tom",
            "ru": "Я слушаю музыку.",
            "en": "J'écoute de la musique."
          },
          {
            "speaker": "murzik",
            "ru": "Ох… Сегодня мне скучно.",
            "en": "Oh… Aujourd'hui, je m'ennuie."
          },
          {
            "speaker": "tom",
            "ru": "Давай сыграем в шахматы!",
            "en": "Jouons aux échecs !"
          },
          {
            "speaker": "murzik",
            "ru": "Давай! Твой ход!",
            "en": "D'accord ! À toi de jouer !"
          },
          {
            "speaker": "murzik",
            "ru": "Ура, я выиграл!",
            "en": "Youpi, j'ai gagné !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "vi6-d1",
          "prompt": "Qui gagne la partie d'échecs ?",
          "options": [
            {
              "label": "Murzik.",
              "correct": true
            },
            {
              "label": "Tom.",
              "correct": false
            },
            {
              "label": "Personne — ils arrêtent de jouer.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Я читаю, ты читаешь, он читает",
          "paragraphs": [
            "Beaucoup de verbes fonctionnent comme читать : я читаю, ты читаешь, он/она читает.",
            "Pareil avec слушать : я слушаю, ты слушаешь. Смотреть est un peu différent : я смотрю, ты смотришь."
          ],
          "examples": [
            {
              "ru": "Что ты читаешь?",
              "en": "Qu'est-ce que tu lis ?"
            },
            {
              "ru": "Том слушает музыку.",
              "en": "Tom écoute de la musique."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "vi6-t1",
          "prompt": "Écoute. Que fait cette personne d'habitude le soir ?",
          "skill": "listening",
          "audio": "Вечером я обычно слушаю музыку.",
          "options": [
            {
              "label": "Elle écoute de la musique.",
              "correct": true
            },
            {
              "label": "Elle lit.",
              "correct": false
            },
            {
              "label": "Elle joue aux échecs.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "vi6-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Мне скучно.",
              "right": "Je m'ennuie."
            },
            {
              "left": "Твой ход!",
              "right": "À toi de jouer !"
            },
            {
              "left": "обычно",
              "right": "d'habitude"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "vi6-t3",
          "prompt": "Complète : « Qu'est-ce que tu lis ? »",
          "before": "Что ты",
          "after": "?",
          "answer": "читаешь",
          "options": [
            "читаешь",
            "читаю",
            "читает"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "vi6-t4",
          "prompt": "Quelle lettre manque ? (échecs)",
          "before": "ша",
          "after": "маты",
          "answer": "х",
          "options": [
            "х",
            "к",
            "ш"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "vi6-t5",
          "prompt": "Что ты обычно делаешь вечером?",
          "model": "Обычно я читаю или слушаю музыку.",
          "modelEn": "D'habitude, je lis ou j'écoute de la musique.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis à Tom ce que tu fais vraiment le soir."
        },
        {
          "kind": "choice",
          "id": "vi6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Какая красивая музыка!",
          "options": [
            {
              "label": "Да, это моя любимая песня.",
              "correct": true
            },
            {
              "label": "Мне скучно.",
              "correct": false
            },
            {
              "label": "Твой ход!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "chess",
        "itemName": "Jeu d'échecs",
        "itemNameRu": "Шахматы",
        "ru": "Ура! У меня шахматы!",
        "en": "Youpi ! J'ai un jeu d'échecs !",
        "a11y": "Un petit échiquier en bois avec ses pièces est posé sur une petite table près de la fenêtre de Murzik. Des gouttes de pluie coulent sur la vitre.",
        "image": "/art/vienna/reward-6.jpg",
        "steps": [
          "Le patron du café les entend rire.",
          "Il monte un vieux jeu d'échecs en bois.",
          "« Un cadeau pour le gagnant ! »",
          "Murzik le pose près de la fenêtre."
        ],
        "bridge": "Karl les invite à son dernier concert à Vienne. Il jouera la valse d'Assia."
      }
    },
    {
      "id": "a1-vienna-7",
      "level": "A1",
      "cityId": "vienna",
      "number": 7,
      "title": "Le concert de Karl",
      "minutes": 7,
      "goals": [
        "Demander « Ça t'a plu ? »",
        "Dire que c'était merveilleux",
        "Remercier quelqu'un pour une soirée"
      ],
      "vocabNote": "Как тебе…? est une façon courte et amicale de demander « Comment tu trouves… ? » ou « C'était comment… ? » : Как тебе концерт?",
      "vocab": [
        {
          "id": "vi7-1",
          "ru": "Как тебе концерт?",
          "en": "Comment tu trouves le concert ?",
          "a11y": "Dans une petite salle de concert, Tom se penche vers Murzik et lui chuchote une question.",
          "audioLabel": "Écouter Как тебе концерт",
          "image": "/art/vienna/7-1.jpg"
        },
        {
          "id": "vi7-2",
          "ru": "Это было чудесно!",
          "en": "C'était merveilleux !",
          "a11y": "Murzik presse ses pattes contre son cœur, les yeux brillants.",
          "audioLabel": "Écouter Это было чудесно",
          "image": "/art/vienna/7-2.jpg"
        },
        {
          "id": "vi7-3",
          "ru": "Я в восторге!",
          "en": "Je suis ravi !",
          "a11y": "Murzik bondit de joie sur son siège, les pattes en l'air.",
          "audioLabel": "Écouter Я в восторге",
          "image": "/art/vienna/7-3.jpg"
        },
        {
          "id": "vi7-4",
          "ru": "Какой талант!",
          "en": "Quel talent !",
          "a11y": "Karl salue sur une petite scène avec son violon ; des fleurs sont à ses pieds.",
          "audioLabel": "Écouter Какой талант",
          "image": "/art/vienna/7-4.jpg"
        },
        {
          "id": "vi7-5",
          "ru": "Спасибо за вечер!",
          "en": "Merci pour la soirée !",
          "a11y": "Après le concert, Murzik serre chaleureusement la main de Karl.",
          "audioLabel": "Écouter Спасибо за вечер",
          "image": "/art/vienna/7-5.jpg"
        },
        {
          "id": "vi7-6",
          "ru": "До встречи!",
          "en": "À bientôt !",
          "a11y": "Karl dit au revoir à la porte de la salle de concert.",
          "audioLabel": "Écouter До встречи",
          "image": "/art/vienna/7-6.jpg"
        },
        {
          "id": "vi7-7",
          "ru": "Мы ещё вернёмся!",
          "en": "Nous reviendrons !",
          "a11y": "Murzik et Tom font signe vers les toits de Vienne avec un grand sourire.",
          "audioLabel": "Écouter Мы ещё вернёмся",
          "image": "/art/vienna/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La valse d'Assia",
        "note": "Вальс «Ася» — la valse « Assia ». Вам — à vous (poli).",
        "lines": [
          {
            "speaker": "karl",
            "ru": "А сейчас — вальс «Ася».",
            "en": "Et maintenant — la valse « Assia »."
          },
          {
            "speaker": "tom",
            "ru": "Мурзик, как тебе концерт?",
            "en": "Murzik, comment tu trouves le concert ?"
          },
          {
            "speaker": "murzik",
            "ru": "Это было чудесно! Я в восторге!",
            "en": "C'était merveilleux ! Je suis ravi !"
          },
          {
            "speaker": "tom",
            "ru": "Какой талант!",
            "en": "Quel talent !"
          },
          {
            "speaker": "murzik",
            "ru": "Карл, спасибо за вечер!",
            "en": "Karl, merci pour la soirée !"
          },
          {
            "speaker": "karl",
            "ru": "Спасибо вам. Найди её, Мурзик.",
            "en": "Merci à vous. Retrouve-la, Murzik."
          },
          {
            "speaker": "murzik",
            "ru": "Обязательно! Мы ещё вернёмся!",
            "en": "Promis ! Nous reviendrons !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "vi7-d1",
          "prompt": "Que joue Karl à la fin ?",
          "options": [
            {
              "label": "La valse « Assia ».",
              "correct": true
            },
            {
              "label": "Une chanson triste sur Vienne.",
              "correct": false
            },
            {
              "label": "La chanson préférée de Tom.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Как тебе …?",
          "paragraphs": [
            "Как тебе + chose demande un avis : Как тебе концерт? Как тебе Вена? Poliment : Как вам…?",
            "Réponses : Чудесно! Очень понравилось! Так себе."
          ],
          "examples": [
            {
              "ru": "Как тебе Вена? — Чудесно!",
              "en": "Comment tu trouves Vienne ? — Merveilleuse !"
            },
            {
              "ru": "Как вам концерт?",
              "en": "Comment avez-vous trouvé le concert ? (poli)"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "vi7-t1",
          "prompt": "Écoute. Que fait cette personne d'habitude le dimanche ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute de Vienne.",
          "audio": "В воскресенье я обычно играю на гитаре, а вечером слушаю музыку. Я никогда не смотрю сериалы.",
          "options": [
            {
              "label": "Elle joue de la guitare.",
              "correct": true
            },
            {
              "label": "Elle regarde des séries.",
              "correct": false
            },
            {
              "label": "Elle va à l'opéra.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "vi7-t2",
          "prompt": "Le concert était incroyable. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Это было чудесно!",
              "correct": true
            },
            {
              "label": "Мне скучно.",
              "correct": false
            },
            {
              "label": "Тише!",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "vi7-t3",
          "prompt": "Complète : « Comment tu trouves Vienne ? »",
          "before": "Как",
          "after": "Вена?",
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
          "id": "vi7-t4",
          "prompt": "Forme le mot « concert ».",
          "word": "концерт",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "vi7-t5",
          "prompt": "Как тебе концерт?",
          "model": "Это было чудесно! Спасибо за вечер!",
          "modelEn": "C'était merveilleux ! Merci pour la soirée !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Karl te demande comment était son concert. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "vi7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Ты умеешь играть на пианино?",
          "options": [
            {
              "label": "Нет, не умею. Научи меня!",
              "correct": true
            },
            {
              "label": "Это было давно.",
              "correct": false
            },
            {
              "label": "Ряд пять, место десять.",
              "correct": false
            }
          ]
        },
        {
          "kind": "truefalse",
          "id": "vi7-t7",
          "prompt": "Vrai ou faux",
          "statement": "Никогда veut dire « parfois ».",
          "correct": false,
          "skill": "review"
        }
      ],
      "reward": {
        "itemId": "music-box",
        "itemName": "Boîte à musique",
        "itemNameRu": "Музыкальная шкатулка",
        "ru": "Ура! Музыкальная шкатулка!",
        "en": "Youpi ! Une boîte à musique !",
        "a11y": "Murzik ouvre une petite boîte à musique en bois. Dedans, un minuscule chat roux avec un pinceau tourne et tourne pendant que la musique joue.",
        "image": "/art/vienna/reward-7.jpg",
        "steps": [
          "Après le concert, Karl donne à Murzik une petite boîte en bois.",
          "Murzik l'ouvre.",
          "Elle joue la valse « Assia ».",
          "À l'intérieur, un minuscule chat roux avec un pinceau tourne sur lui-même."
        ],
        "bridge": "La valise est prête. La boîte à musique joue une dernière fois dans la chambre au-dessus du café."
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre de Murzik au-dessus d'un café viennois",
      "nameRu": "Комната над кофейней",
      "image": "/art/vienna/home.jpg",
      "a11y": "Une petite chambre vide avec une haute fenêtre, au-dessus d'un vieux café viennois. Une lumière chaude monte par l'escalier."
    },
    "keepsakeId": "music-box",
    "welcomeRu": "Привет, Вена!",
    "welcomeEn": "Bonjour, Vienne !",
    "welcomeImage": "/art/vienna/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Vienne devant un grand opéra ancien ; une calèche passe.",
    "departureImage": "/art/vienna/departure.jpg",
    "departureA11y": "Murzik et Tom avec leurs valises dans une gare de Vienne. Karl agite son chapeau pour leur dire au revoir. Murzik tient la petite boîte à musique.",
    "finale": [
      {
        "image": "/art/vienna/finale-1.jpg",
        "a11y": "Murzik est dans sa chambre douillette au-dessus du café : un chevalet, une guitare, des patins accrochés à un crochet, des jumelles de théâtre, une partition encadrée, un jeu d'échecs. Il tient la boîte à musique ouverte. Tout au fond, par la fenêtre, un gentil vieux chat blanc en chapeau gris passe dans la rue.",
        "lines": [
          {
            "en": "La chambre de Murzik au-dessus du café est maintenant pleine de musique."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : la boîte à musique qui joue la valse d'Assia."
          }
        ]
      },
      {
        "image": "/art/vienna/karl-story.jpg",
        "a11y": "Karl et Murzik sont assis sur un banc du parc. Karl tient un vieux dessin de lui jeune, avec son violon, dessiné par Assia.",
        "lines": [
          {
            "en": "Le dernier matin, Karl en raconte plus. Il y a longtemps, Assia peignait dans ce parc tous les jours, et il jouait pour elle."
          },
          {
            "ru": "Она всегда ждала письмо.",
            "en": "Elle attendait toujours une lettre."
          },
          {
            "en": "« Une lettre de Moscou, dit Karl. Elle n'est jamais arrivée. Puis un jour, elle est partie. »"
          }
        ]
      },
      {
        "image": "/art/vienna/finale-2.jpg",
        "a11y": "Murzik et Tom dansent une petite valse sur une place de Vienne en riant.",
        "lines": [
          {
            "ru": "Вена завершена!",
            "en": "Vienne, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже семь городов!",
            "en": "Déjà sept villes !"
          }
        ]
      },
      {
        "image": "/art/vienna/departure.jpg",
        "a11y": "Murzik et Tom avec leurs valises dans une gare de Vienne. Karl agite son chapeau pour leur dire au revoir. Murzik tient la petite boîte à musique.",
        "lines": [
          {
            "ru": "До свидания, Вена! До свидания, Карл!",
            "en": "Au revoir, Vienne ! Au revoir, Karl !"
          },
          {
            "ru": "Следующая остановка: Прага!",
            "en": "Prochain arrêt : Prague !"
          }
        ]
      },
      {
        "image": "/art/vienna/finale-5.jpg",
        "a11y": "Un train roule vers le nord à travers des forêts d'automne et des collines sous la pluie, de Vienne vers Prague.",
        "lines": [
          {
            "ru": "Вена → Прага",
            "en": "Vienne → Prague"
          }
        ]
      },
      {
        "image": "/art/prague/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Prague par une froide journée d'automne venteuse : le vieux pont Charles en pierre, des tours et des toits rouges. Murzik grelotte.",
        "lines": [
          {
            "ru": "Привет, Прага!",
            "en": "Bonjour, Prague !"
          },
          {
            "ru": "Брр! Здесь холодно!",
            "en": "Brr ! Il fait froid ici !"
          }
        ]
      }
    ]
  }
};
