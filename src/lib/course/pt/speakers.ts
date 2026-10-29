import type { SpeakerId } from "../types";
import type { PtNative } from "./make";

type Names = Partial<Record<SpeakerId, { name: string; target: string }>>;

/** Dialogue names in the Portuguese course: `name` in the learner's language, `target` in Portuguese. */
const list: [SpeakerId, string, string, string][] = [
  // id, Russian, English, Portuguese
  ["murzik", "Мурзик", "Murzik", "Murzik"],
  ["lucia", "Дона Лусия", "Dona Lúcia", "Dona Lúcia"],
  ["bia", "Биа", "Bia", "Bia"],
  ["pipoca", "Пипока", "Pipoca", "Pipoca"],
  ["claudia", "Клаудия", "Cláudia", "Cláudia"],
  ["leo", "Лео", "Léo", "Léo"],
  ["zeca", "Зека", "Zeca", "Zeca"],
  ["tiago", "Тиагу", "Tiago", "Tiago"],
  ["antonio", "Сеу Антониу", "Seu Antônio", "Seu Antônio"],
  ["neide", "Дона Нейди", "Dona Neide", "Dona Neide"],
  ["gabriel", "Габриэл", "Gabriel", "Gabriel"],
  ["caio", "Каю", "Caio", "Caio"],
  ["juliana", "Жулиана", "Juliana", "Juliana"],
  ["benedito", "Сеу Бенедиту", "Seu Benedito", "Seu Benedito"],
  ["rafael", "Рафаэл", "Rafael", "Rafael"],
  ["marta", "Дона Марта", "Dona Marta", "Dona Marta"],
  ["celeste", "Дона Селести", "Dona Celeste", "Dona Celeste"],
  ["lia", "Лия", "Lia", "Lia"],
  ["paulo", "Доктор Паулу", "Dr Paulo", "Doutor Paulo"],
  ["raimundo", "Сеу Раймунду", "Seu Raimundo", "Seu Raimundo"],
  ["joao", "Жуан", "João", "João"],
  ["marcos", "Маркус", "Marcos", "Marcos"],
  ["davi", "Дави", "Davi", "Davi"],
  ["ana", "Ана", "Ana", "Ana"],
  ["mestre", "Мастер капоэйры", "Capoeira master", "Mestre"],
  ["pintor", "Художник", "Painter", "Pintor"],
  ["officer", "Пограничник", "Passport officer", "Policial"],
  ["driver", "Водитель", "Driver", "Motorista"],
  ["passerby", "Прохожая", "Passer-by", "Moça"],
  ["waiter", "Официант", "Waiter", "Garçom"],
  ["seller", "Продавец", "Seller", "Vendedor"],
  ["cashier", "Кассир", "Cashier", "Caixa"],
  ["receptionist", "Администратор", "Receptionist", "Recepcionista"],
  ["pharmacist", "Фармацевт", "Pharmacist", "Farmacêutica"],
];

export function ptSpeakers(lang: PtNative): Names {
  return Object.fromEntries(list.map(([id, ru, en, pt]) => [id, { name: lang === "ru" ? ru : en, target: pt }])) as Names;
}
