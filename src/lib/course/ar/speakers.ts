import type { SpeakerId } from "../types";
import { a } from "./make";

/** Dialogue names in the Arabic course: `name` in Russian (interface), `target` in Arabic. */
export const arSpeakers: Partial<Record<SpeakerId, { name: string; target: string }>> = {
  murzik: { name: "Мурзик", target: a("مُورْزِيك", "Мурзик") },
  karim: { name: "Карим", target: a("كَرِيم", "Карим") },
  amina: { name: "Тётя Амина", target: a("الْعَمَّة أَمِينَة", "аль-амма Амина") },
  fatima: { name: "Бабушка Фатима", target: a("الْجَدَّة فَاطِمَة", "аль-джадда Фатима") },
  salma: { name: "Сальма", target: a("سَلْمَى", "Сальма") },
  hana: { name: "Хана", target: a("هَنَاء", "Хана") },
  yusuf: { name: "Дядя Юсуф", target: a("الْعَمّ يُوسُف", "аль-амм Юсуф") },
  naser: { name: "Насер", target: a("نَاصِر", "Насир") },
  laila: { name: "Лейла", target: a("لَيْلَى", "Ляйля") },
  said: { name: "Дедушка Саид", target: a("الْجَدّ سَعِيد", "аль-джадд Саид") },
  host: { name: "Хозяин риада", target: a("صَاحِبُ الرِّيَاض", "сахибу р-рияд") },
  hostess: { name: "Хозяйка дома", target: a("صَاحِبَةُ الْبَيْت", "сахибату ль-байт") },
  seller: { name: "Продавец", target: a("الْبَائِع", "аль-баиа") },
  waiter: { name: "Официант", target: a("النَّادِل", "ан-надиль") },
  driver: { name: "Водитель", target: a("السَّائِق", "ас-саик") },
  receptionist: { name: "Администратор", target: a("مُوَظَّفُ الِاسْتِقْبَال", "муваззафу ль-истикбаль") },
  potterAr: { name: "Гончар", target: a("الْفَخَّارِيّ", "аль-фаххари") },
  weaver: { name: "Ткачиха", target: a("النَّسَّاجَة", "ан-нассаджа") },
  guide: { name: "Гид", target: a("الْمُرْشِد", "аль-муршид") },
  bedouin: { name: "Бедуин Салим", target: a("سَلِيم", "Салим") },
  boatman: { name: "Лодочник", target: a("الْمَرَاكِبِيّ", "аль-маракиби") },
};
