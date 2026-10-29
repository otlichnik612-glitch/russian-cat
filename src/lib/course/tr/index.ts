import type { CourseDef } from "../active";
import { pic } from "../art";
import { hasCyrillic } from "../make";
import { makeCourse } from "../model";
import type { CityPlan, CityStory, Lesson, LevelPlan } from "../types";
import { trCities } from "./cities";
import { trSpeakers } from "./speakers";

/**
 * «Мурзик в Турции» — Turkish for Russian speakers, A1.
 * The same story as the Russian course: Murzik starts in Paris and follows Grandma Asya's steps,
 * this time across Turkey. Explanations and tasks are in Russian; phrases are in Turkish.
 * In lesson data `ru` = Turkish text, `en` = Russian translation.
 */

function city(id: string, name: string, nameTr: string, lessons: Lesson[] = [], story?: CityStory): CityPlan {
  return { id, name, nameRu: nameTr, lessons, story };
}

const a1: CityPlan[] = trCities.map((c) => city(c.id, c.name, c.nameTr, c.lessons, c.story));

const levels: LevelPlan[] = [{ id: "A1", title: "A1", subtitle: "Первые разговоры и жизнь в пути", cities: a1 }];

/** Turkish text: Latin letters (with Turkish ones) and no Cyrillic. Russian translations are Cyrillic. */
function isTurkish(text: string): boolean {
  return /[A-Za-zÇĞİÖŞÜçğıöşüÂâÎîÛû]/.test(text) && !hasCyrillic(text);
}

export const turkishCourseDef: CourseDef = {
  id: "tr",
  speechLang: "tr-TR",
  htmlLang: "tr",
  uiLang: "ru",
  title: "Мурзик в Турции",
  model: makeCourse(levels),
  isTarget: isTurkish,
  prologue: {
    find: {
      image: pic("prologue/1"),
      a11y: "Утро в Париже. На полу у двери пустой квартиры Мурзика лежит старая, чуть пожелтевшая открытка. Мурзик удивлённо наклоняется, чтобы её поднять.",
      title: "Утро в Париже",
      text: "Однажды утром я нашёл под дверью своей парижской квартиры старую открытку.",
    },
    postcard: {
      image: pic("tr/prologue/2"),
      a11y: "Старая открытка крупно: на одной стороне вид Стамбула — паромы, чайки и купола над морем; на другой несколько строчек от руки, маленькая рыжая кошка в углу и турецкая марка со штемпелем. Обратного адреса нет.",
      ru: "İzimi takip et. — Asya",
      en: "Иди по моим следам. — Ася",
      text: "Ася — моя бабушка. Она всю жизнь путешествовала по миру, но однажды бесследно исчезла. С тех пор никто не знает, где она.",
      question: "Кто оставил эту открытку? И куда ведут следы бабушки Аси? На марке — Стамбул…",
    },
    journey: {
      image: pic("tr/prologue/3"),
      a11y: "Мурзик с чемоданом у самолёта. За иллюминаторами вдали — Стамбул: море, паромы и купола.",
      // The author's text, in Russian for this course.
      text: "Мы с Томом путешествуем по разным городам. В каждом городе у меня есть свой маленький дом. За каждый пройденный урок ты получаешь новый предмет, который поможет сделать его уютнее. Постепенно дом наполняется интересными вещами. А когда приходит время отправляться дальше, я беру с собой то, что полюбилось мне больше всего!",
    },
  },
  intro: {
    heading: "Учи турецкий и помоги мне обустроить дом!",
    tomBold: "Знакомься, это Том!",
    tomRest: "Он путешествует со мной и учит турецкий — как ты. Присоединяйся к нам!",
    start: "Наше путешествие начинается в Стамбуле!",
    go: "Вперёд, к приключениям!",
  },
  speakers: trSpeakers,
};
