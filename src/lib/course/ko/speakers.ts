import type { SpeakerId } from "../types";
import { k } from "./make";

/** Dialogue names in the Korean course: `name` in Russian (interface), `target` in Korean. */
export const koSpeakers: Partial<Record<SpeakerId, { name: string; target: string }>> = {
  murzik: { name: "Мурзик", target: k("무르직", "Мурыджик") },
  sua: { name: "Суа", target: k("수아", "Суа") },
  director: { name: "Режиссёр Пак", target: k("박 감독", "Пак ккамдок") },
  minho: { name: "Минхо", target: k("민호", "Минхо") },
  jiyeon: { name: "Чиён", target: k("지연", "Чиён") },
  makeup: { name: "Гримёрша", target: k("메이크업 담당", "мейкхыоп тамдан") },
  cameraman: { name: "Оператор", target: k("촬영 감독", "чхварён камдок") },
  ajumma: { name: "Тётушка с рынка", target: k("아주머니", "аджумони") },
  haenyeo: { name: "Ныряльщица", target: k("해녀", "хэнё") },
  seller: { name: "Продавец", target: k("점원", "чомвон") },
  waiter: { name: "Официант", target: k("직원", "чигвон") },
  driver: { name: "Водитель", target: k("기사님", "кисаним") },
};
