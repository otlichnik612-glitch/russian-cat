import type { CourseDef } from "../active";
import { pic } from "../art";
import { makeCourse } from "../model";
import type { CityPlan, LevelPlan } from "../types";
import { arCities } from "./cities";
import { a, arabicTranscription, isArabic, resolveGender } from "./make";
import { arSpeakers } from "./speakers";

/**
 * «Сюрприз для бабушки» — Arabic (simple Modern Standard Arabic) for Russian speakers, A1.
 * Murzik and Karim secretly gather the whole family for Grandma Fatima's 90th birthday in Abu Dhabi.
 * Explanations and tasks are in Russian; phrases are in Arabic with vowel marks and a simple Cyrillic transcription.
 * In lesson data `ru` = Arabic text, `en` = Russian translation.
 */

/** The whole route; cities without lessons yet are shown as planned. */
const route: { id: string; name: string; nameAr: string }[] = [
  { id: "ar-marrakesh", name: "Марракеш", nameAr: a("مَرَّاكُش", "Марракуш") },
  { id: "ar-fes", name: "Фес", nameAr: a("فَاس", "Фас") },
  { id: "ar-chefchaouen", name: "Шефшауэн", nameAr: a("شَفْشَاوَن", "Шафшаван") },
  { id: "ar-tunis", name: "Тунис", nameAr: a("تُونِس", "Тунис") },
  { id: "ar-sidibousaid", name: "Сиди-Бу-Саид", nameAr: a("سِيدِي بُو سَعِيد", "Сиди Бу Саид") },
  { id: "ar-cairo", name: "Каир", nameAr: a("الْقَاهِرَة", "аль-Кахира") },
  { id: "ar-aswan", name: "Асуан", nameAr: a("أَسْوَان", "Асван") },
  { id: "ar-amman", name: "Амман", nameAr: a("عَمَّان", "Амман") },
  { id: "ar-petra", name: "Петра", nameAr: a("الْبَتْرَاء", "аль-Батра") },
  { id: "ar-wadirum", name: "Вади-Рам", nameAr: a("وَادِي رَم", "Вади Рам") },
  { id: "ar-alula", name: "Аль-Ула", nameAr: a("الْعُلَا", "аль-Уля") },
  { id: "ar-jeddah", name: "Джидда", nameAr: a("جِدَّة", "Джидда") },
  { id: "ar-muscat", name: "Маскат", nameAr: a("مَسْقَط", "Маскат") },
  { id: "ar-abudhabi", name: "Абу-Даби", nameAr: a("أَبُوظَبْي", "Абу Заби") },
];

function levelsFor(gender: "m" | "f"): LevelPlan[] {
  const written = new Map(resolveGender(arCities, gender).map((c) => [c.id, c]));
  const a1: CityPlan[] = route.map((r) => {
    const c = written.get(r.id);
    return { id: r.id, name: r.name, nameRu: r.nameAr, lessons: c?.lessons ?? [], story: c?.story };
  });
  return [{ id: "A1", title: "A1", subtitle: "Первые слова и большая семья в пути", cities: a1 }];
}

const base: Omit<CourseDef, "model" | "gender"> = {
  id: "ar",
  speechLang: "ar-SA",
  htmlLang: "ar",
  uiLang: "ru",
  title: "Сюрприз для бабушки",
  isTarget: isArabic,
  rtl: true,
  translit: arabicTranscription,
  prologue: {
    find: {
      image: pic("ar/prologue/1"),
      a11y: "Утро в Париже. В дверях квартиры Мурзика стоит его сосед Карим — высокий юноша с альбомом для рисования. В руках у него старая фотография.",
      title: "Утро в Париже",
      text: "Однажды утром ко мне постучал мой сосед Карим. В руках у него была старая фотография.",
    },
    postcard: {
      image: pic("ar/prologue/2"),
      a11y: "Старая фотография крупно: пожилая женщина в светлом платке улыбается за большим столом, вокруг пустые стулья. На обороте несколько строк арабским почерком.",
      ru: a("أَتَمَنَّى أَنْ أَرَى عَائِلَتِي كُلَّهَا مَعًا.", "атаманна ан ара аиляти куллаха маан."),
      en: "Мечтаю увидеть всю свою семью вместе.",
      text: "Это бабушка Карима, Фатима. Скоро ей исполнится 90 лет. Она мечтает увидеть всю семью вместе, но все живут в разных странах.",
      question: "А что, если собрать всех? Тайно — и привезти к ней в день рождения!",
    },
    journey: {
      image: pic("ar/prologue/3"),
      a11y: "Мурзик и Карим с чемоданами у самолёта. За иллюминаторами вдали — красные стены Марракеша и горы.",
      // The author's own text, with Karim instead of Tom.
      text: "Мы с Каримом путешествуем по разным городам. В каждом городе у меня есть свой маленький дом. За каждый пройденный урок ты получаешь новый предмет, который поможет сделать его уютнее. Постепенно дом наполняется интересными вещами. А когда приходит время отправляться дальше, я беру с собой то, что полюбилось мне больше всего!",
    },
  },
  intro: {
    heading: "Учи арабский и помоги собрать всю семью!",
    tomBold: "Знакомься, это Карим!",
    tomRest: "Он внук бабушки Фатимы и говорит по-арабски с детства. Он будет подсказывать, а учить арабский мы будем вместе!",
    start: "Наше путешествие начинается в Марракеше!",
    go: "Поехали!",
    companionImage: pic("ar/karim"),
  },
  speakers: arSpeakers,
  uiOverrides: {
    letters: "Арабские буквы",
    lettersIntro: "Арабский пишут справа налево, и почти все буквы в слове соединяются друг с другом. Вот буквы из сегодняшних фраз.",
    playTarget: "Послушать по-арабски",
    aboutMinutes: (m: number) => `Всего ${m} минут вместе с Мурзиком и Каримом.`,
  },
};

const question = {
  title: "Как к тебе обращаться?",
  text: "В арабском «ты» звучит по-разному для мужчины и для женщины: кайфа халюка — мужчине, кайфа халюки — женщине. Как Кариму к тебе обращаться?",
  male: "Как к мужчине",
  female: "Как к женщине",
  change: "Обращение по-арабски: мужской или женский род",
};

const female: CourseDef = { ...base, model: makeCourse(levelsFor("f")) };
female.gender = { question, female };

/** The course for a male learner; `gender.female` is the same course with the female forms. */
export const arabicCourseDef: CourseDef = {
  ...base,
  model: makeCourse(levelsFor("m")),
  gender: { question, female },
};
