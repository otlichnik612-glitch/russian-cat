import type { SpeakerId } from "../../types";
import { k } from "./make";

/** Dialogue names in the English version of the Korean course: `name` in English (interface), `target` in Korean. */
export const koSpeakersEn: Partial<Record<SpeakerId, { name: string; target: string }>> = {
  murzik: { name: "Murzik", target: k("무르직") },
  sua: { name: "Sua", target: k("수아") },
  director: { name: "Director Park", target: k("박 감독") },
  minho: { name: "Minho", target: k("민호") },
  jiyeon: { name: "Jiyeon", target: k("지연") },
  makeup: { name: "Make-up artist", target: k("메이크업 담당") },
  cameraman: { name: "Cameraman", target: k("촬영 감독") },
  ajumma: { name: "Market auntie", target: k("아주머니") },
  haenyeo: { name: "Sea diver", target: k("해녀") },
  seller: { name: "Shop assistant", target: k("점원") },
  waiter: { name: "Waiter", target: k("직원") },
  driver: { name: "Driver", target: k("기사님") },
};
