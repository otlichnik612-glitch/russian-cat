import { META } from "./META";
import { abudhabi } from "./ar-abudhabi";
import { alula } from "./ar-alula";
import { amman } from "./ar-amman";
import { aswan } from "./ar-aswan";
import { cairo } from "./ar-cairo";
import { chefchaouen } from "./ar-chefchaouen";
import { fes } from "./ar-fes";
import { jeddah } from "./ar-jeddah";
import { marrakesh } from "./ar-marrakesh";
import { muscat } from "./ar-muscat";
import { petra } from "./ar-petra";
import { sidibousaid } from "./ar-sidibousaid";
import { tunis } from "./ar-tunis";
import { wadirum } from "./ar-wadirum";

/** All French texts of the Arabic course: base Russian text → French text. */
export const frenchDict: Record<string, string> = { ...META, ...abudhabi, ...alula, ...amman, ...aswan, ...cairo, ...chefchaouen, ...fes, ...jeddah, ...marrakesh, ...muscat, ...petra, ...sidibousaid, ...tunis, ...wadirum, };
