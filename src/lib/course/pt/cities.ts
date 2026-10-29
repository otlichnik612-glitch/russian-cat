import type { CityStory, Lesson } from "../types";
import { ptRio } from "./rio";
import { ptParaty } from "./paraty";
import { ptSaoPaulo } from "./saopaulo";
import { ptCuritiba } from "./curitiba";
import { ptFloripa } from "./floripa";
import { ptFoz } from "./foz";
import { ptPantanal } from "./pantanal";
import { ptBrasilia } from "./brasilia";
import { ptOuroPreto } from "./ouropreto";
import { ptSalvador } from "./salvador";
import { ptOlinda } from "./olinda";
import { ptFortaleza } from "./fortaleza";
import { ptManaus } from "./manaus";
import { ptBelem } from "./belem";

/**
 * The 14 cities of Portuguese A1, in route order. Texts in the learner's language are t(…) markers,
 * resolved for Russian or English speakers in index.ts.
 */
export type PtCity = { id: string; name: string; namePt: string; lessons: Lesson[]; story?: CityStory };

export const ptCities: PtCity[] = [ptRio, ptParaty, ptSaoPaulo, ptCuritiba, ptFloripa, ptFoz, ptPantanal, ptBrasilia, ptOuroPreto, ptSalvador, ptOlinda, ptFortaleza, ptManaus, ptBelem];
