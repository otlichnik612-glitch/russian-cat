import type { SpeakerId } from "../../types";
import { k } from "./make";

/** Dialogue names in the French version of the Korean course: `name` in French (interface), `target` in Korean. */
export const koSpeakersFr: Partial<Record<SpeakerId, { name: string; target: string }>> = {
  murzik: { name: "Murzik", target: k("무르직") },
  sua: { name: "Sua", target: k("수아") },
  director: { name: "Le réalisateur Park", target: k("박 감독") },
  minho: { name: "Minho", target: k("민호") },
  jiyeon: { name: "Jiyeon", target: k("지연") },
  makeup: { name: "La maquilleuse", target: k("메이크업 담당") },
  cameraman: { name: "Le cadreur", target: k("촬영 감독") },
  ajumma: { name: "La dame du marché", target: k("아주머니") },
  haenyeo: { name: "La plongeuse", target: k("해녀") },
  seller: { name: "Le vendeur", target: k("점원") },
  waiter: { name: "Le serveur", target: k("직원") },
  driver: { name: "Le chauffeur", target: k("기사님") },
};
