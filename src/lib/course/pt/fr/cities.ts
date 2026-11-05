import type { CityStory, Lesson } from "../../types";
import { ptParatyFr } from "./paraty";
import { ptRioFr } from "./rio";
import { ptSaoPauloFr } from "./saopaulo";
import { ptCuritibaFr } from "./curitiba";
import { ptFloripaFr } from "./floripa";
import { ptFozFr } from "./foz";
import { ptPantanalFr } from "./pantanal";
import { ptBrasiliaFr } from "./brasilia";
import { ptOuroPretoFr } from "./ouropreto";
import { ptSalvadorFr } from "./salvador";
import { ptOlindaFr } from "./olinda";
import { ptFortalezaFr } from "./fortaleza";
import { ptManausFr } from "./manaus";
import { ptBelemFr } from "./belem";

/**
 * The French version of the Portuguese A1 cities, in route order.
 * The cities that are written have their lessons; the others appear in the route as planned.
 */
export type PtCityFr = { id: string; name: string; namePt: string; lessons: Lesson[]; story?: CityStory };

export const ptCitiesFr: PtCityFr[] = [ptRioFr, ptParatyFr, ptSaoPauloFr, ptCuritibaFr, ptFloripaFr, ptFozFr, ptPantanalFr, ptBrasiliaFr, ptOuroPretoFr, ptSalvadorFr, ptOlindaFr, ptFortalezaFr, ptManausFr, ptBelemFr];
