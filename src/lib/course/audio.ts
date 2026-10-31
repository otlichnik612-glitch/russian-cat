import type { SpeakerId } from "./types";

/**
 * Recorded voices. Every Russian phrase can have its own mp3 file in public/audio/<voice>/<key>.mp3.
 * If the file exists, the app plays it. If not, the phone's built-in voice reads the text, as before.
 *
 * Murzik's voice is also used for everything that is not a dialogue line:
 * phrase cards, letters, grammar examples and tasks.
 */
export type VoiceId = SpeakerId;

/**
 * Which Grok (xAI) voice records each character: a voice id from GET https://api.x.ai/v1/tts/voices.
 * Murzik = iris, Tom and Karim = sirius (chosen by the author); the others were picked by role.
 * Male / female for the other voices is guessed from their names: check them on the voice page.
 * Change a line here to change a voice; the voice page then shows that character's phrases as outdated.
 */
export const voiceCast: Record<VoiceId, { grok: string; character: string }> = {
  murzik: { grok: "iris", character: "Murzik — a cheerful, curious young kitten; also reads the phrase cards and tasks" },
  tom: { grok: "sirius", character: "Tom — a friendly young Englishman of about 25" },
  neighbour: { grok: "luna", character: "Madame Dubois — a kind elderly lady" },
  officer: { grok: "perseus", character: "Passport officer — a polite, calm man" },
  driver: { grok: "castor", character: "İstanbul taxi driver — chatty and kind" },
  passerby: { grok: "celeste", character: "Passer-by — a friendly woman" },
  waiter: { grok: "rex", character: "Waiter — a cheerful man of about 40" },
  seller: { grok: "ara", character: "Seller — a cheerful woman" },
  cashier: { grok: "atlas", character: "Cashier / ticket clerk — a calm, friendly voice" },
  barsik: { grok: "cosmo", character: "Barsik — a plump, lazy, funny cousin" },
  musya: { grok: "aurora", character: "Musya — a five-year-old girl" },
  aunt: { grok: "ara", character: "Aunt Olya — a warm mother and teacher" },
  uncle: { grok: "orion", character: "Uncle Petya — a jolly cook" },
  marco: { grok: "kepler", character: "Marco — a young Italian man" },
  irina: { grok: "celeste", character: "Irina — a kind Russian woman of about 50" },
  karl: { grok: "lux", character: "Karl — a gentle old Austrian musician, speaks slowly and warmly" },
  doctor: { grok: "carina", character: "Dr Anna Petrovna — a calm, caring Russian doctor of about 60" },
  pharmacist: { grok: "liora", character: "Pharmacist — a friendly young woman" },
  katya: { grok: "aurora", character: "Katya — a lively Russian student of about 20" },
  editor: { grok: "eve", character: "Editor — a confident, friendly woman of about 45" },
  nika: { grok: "liora", character: "Nika — a cheerful young woman from a Greek-Russian family" },
  receptionist: { grok: "helios", character: "Hotel receptionist — a polite, helpful young man" },
  ewa: { grok: "luna", character: "Pani Ewa — a lively elderly Polish lady who learned Russian at school" },
  dora: { grok: "aurora", character: "Dora — a curious ten-year-old girl" },
  jamie: { grok: "kepler", character: "Jamie — Tom's cheerful Scottish school friend" },
  lev: { grok: "lux", character: "Lev — a kind, quiet, elderly voice, warm and a little mysterious" },
  // Turkish course (Turkish voices)
  ayse: { grok: "luna", character: "Ayşe Teyze — a warm, chatty elderly Turkish lady who runs a small café in Paris" },
  kemal: { grok: "sal", character: "Kemal Bey — a calm, kind landlord in his sixties in Istanbul" },
  simitci: { grok: "orion", character: "An old simit seller on the ferry, cheerful and talkative" },
  zeynep: { grok: "ara", character: "Zeynep Hanım — a lively owner of a small restaurant in Bursa" },
  leyla: { grok: "celeste", character: "Aunt Leyla — Asya's daughter, a warm teacher" },
  mehmet: { grok: "atlas", character: "Uncle Mehmet — a jolly cook" },
  tarcin: { grok: "cosmo", character: "Tarçın — Murzik's plump, lazy, funny cousin" },
  minnos: { grok: "aurora", character: "Minnoş — a five-year-old girl who loves drawing" },
  selin: { grok: "liora", character: "Selin — the friendly daughter of the guesthouse owners in Pamukkale" },
  captain: { grok: "orion", character: "Captain Ali — an old sailor with a deep, kind voice" },
  hasan: { grok: "lux", character: "Hasan Usta — an old saz player, slow and warm" },
  zehra: { grok: "carina", character: "Dr Zehra Hanım — a calm, caring doctor" },
  deniz: { grok: "aurora", character: "Deniz — a lively student" },
  potter: { grok: "perseus", character: "The potter in Avanos — patient and proud of his craft" },
  nur: { grok: "luna", character: "Grandma Nur — Asya's younger sister, gentle and a little sad" },
  postman: { grok: "rex", character: "The post office clerk in Trabzon — polite and busy" },
  gulsum: { grok: "carina", character: "Gülsüm Teyze — runs a breakfast house in Van, generous and funny" },
  elif: { grok: "liora", character: "Elif — a curious ten-year-old girl" },
  can: { grok: "kepler", character: "Can — Tom's photographer friend from the magazine" },
  pilot: { grok: "castor", character: "Kerem — a cheerful hot-air balloon pilot in Cappadocia" },
  hope: { grok: "luna", character: "Mrs Hope — Tom's grandmother, a retired pastry cook from London, warm and a little strict" },
  priya: { grok: "aurora", character: "Priya — a cheerful Oxford student" },
  green: { grok: "ara", character: "Mrs Green — a baker in Bath" },
  fiona: { grok: "celeste", character: "Fiona MacDonald — a busy, kind mum in Edinburgh" },
  ian: { grok: "perseus", character: "Ian MacDonald — a calm dad who loves telling stories" },
  rory: { grok: "cosmo", character: "Rory — a lively ten-year-old twin" },
  isla: { grok: "liora", character: "Isla — Rory's twin sister, curious and clever" },
  sean: { grok: "castor", character: "Seán — a barista and fiddle player in Dublin" },
  marcus: { grok: "atlas", character: "Marcus — a big-hearted diner cook in New York" },
  rosie: { grok: "ara", character: "Rosie — Marcus's chatty neighbour" },
  emily: { grok: "liora", character: "Emily — a student who works in a clothes shop in Boston" },
  tony: { grok: "rex", character: "Tony — a Chicago taxi driver who loves pizza" },
  bernadette: { grok: "celeste", character: "Bernadette — a jazz singer in New Orleans" },
  daniel: { grok: "perseus", character: "Daniel — a café owner in San Francisco, once a programmer" },
  lee: { grok: "carina", character: "Dr Lee — a calm doctor in Vancouver" },
  sam: { grok: "kepler", character: "Sam — Dr Lee's son, a forest ranger" },
  michael: { grok: "rex", character: "Michael Chen — a friendly dad in Toronto" },
  lucy: { grok: "ara", character: "Lucy Chen — Michael's wife, who runs a family café" },
  may: { grok: "luna", character: "Grandma May — Michael's mother" },
  chloe: { grok: "aurora", character: "Chloe — a surfer in Sydney who bakes pies" },
  grace: { grok: "carina", character: "Grace — Mrs Hope's oldest friend, in Wellington" },
  lucia: { grok: "luna", character: "Dona Lúcia — a cheerful, slightly absent-minded Brazilian lady of nearly 80, Murzik's neighbour in Paris" },
  bia: { grok: "aurora", character: "Bia — Dona Lúcia's granddaughter, a lively journalism student from Rio, about 20" },
  pipoca: { grok: "zagan", character: "Pipoca — Dona Lúcia's chatty green parrot who repeats everything he hears" },
  claudia: { grok: "celeste", character: "Cláudia — Bia's mum, Dona Lúcia's daughter, kind and busy" },
  leo: { grok: "cosmo", character: "Léo — Bia's little brother, about 10, mad about football" },
  zeca: { grok: "castor", character: "Zeca — singer of the band Maré Alta" },
  tiago: { grok: "kepler", character: "Tiago — drummer of the band Maré Alta" },
  antonio: { grok: "orion", character: "Seu Antônio — owner of a small café in Paraty" },
  neide: { grok: "carina", character: "Dona Neide — cashier of a bakery in São Paulo" },
  gabriel: { grok: "helios", character: "Gabriel — runs a hostel in Curitiba" },
  caio: { grok: "cosmo", character: "Caio — a surfer and beach-football player in Florianópolis, about 16" },
  juliana: { grok: "ara", character: "Juliana — a park guide at the Iguaçu Falls" },
  benedito: { grok: "sal", character: "Seu Benedito — a cowboy on a ranch in the Pantanal" },
  rafael: { grok: "rex", character: "Rafael — Bia's cousin, an office worker in Brasília, always in a hurry" },
  marta: { grok: "luna", character: "Dona Marta — a guide in old Ouro Preto who knows every street" },
  celeste: { grok: "celeste", character: "Dona Celeste — sells acarajé at a stall in Salvador" },
  lia: { grok: "liora", character: "Lia — a frevo dancer in Olinda" },
  paulo: { grok: "perseus", character: "Dr Paulo — a friendly doctor in Fortaleza" },
  davi: { grok: "helios", character: "Davi — Dona Celeste's grandson, about 12, a keen drummer" },
  ana: { grok: "aurora", character: "Ana — Dona Celeste's granddaughter, about 9" },
  mestre: { grok: "atlas", character: "Capoeira master in Salvador" },
  pintor: { grok: "lux", character: "An old painter in Olinda" },
  marcos: { grok: "perseus", character: "Marcos — Bia's dad, who works in São Paulo; calm and funny" },
  raimundo: { grok: "orion", character: "Seu Raimundo — captain of a river boat in Manaus" },
  karim: { grok: "sirius", character: "Karim — Murzik's neighbour in Paris, a kind student of about 20 with Moroccan family" },
  amina: { grok: "ara", character: "Aunt Amina — Karim's lively aunt of about 50, warm and loud, a great cook" },
  fatima: { grok: "luna", character: "Grandma Fatima — Karim's grandmother of about 80 in Abu Dhabi, gentle and warm" },
  salma: { grok: "aurora", character: "Salma — Karim's cousin in Tunis, a student of about 22 with a guitar, films everything on her phone" },
  hana: { grok: "liora", character: "Hana — Karim's cousin in Cairo, about 28, a museum guide who loves explaining things" },
  yusuf: { grok: "atlas", character: "Uncle Yusuf in Jordan — about 50, drives an old minibus, loves bad jokes" },
  naser: { grok: "rex", character: "Naser — Karim's cousin in Saudi Arabia, about 35, a young father" },
  laila: { grok: "celeste", character: "Laila — Naser's wife, about 30, warm and friendly" },
  said: { grok: "orion", character: "Said — Grandpa's brother in Oman, about 75, remembers every family story" },
  host: { grok: "perseus", character: "The riad host in Marrakesh — a polite man of about 50" },
  hostess: { grok: "carina", character: "The hostess of a guest house — a kind woman of about 45" },
  potterAr: { grok: "sal", character: "A potter in Fes — a cheerful craftsman of about 60" },
  weaver: { grok: "luna", character: "A weaver in Chefchaouen — about 75, an old friend of Grandma Fatima" },
  guide: { grok: "castor", character: "A tour guide — friendly, clear, about 35" },
  boatman: { grok: "orion", character: "A felucca boatman on the Nile — relaxed, about 60" },
  sua: { grok: "aurora", character: "Sua — an assistant director of about 23, Murzik's guide in Korea: quick, cheerful, always with a walkie-talkie" },
  director: { grok: "atlas", character: "Director Park — about 55, strict on set but kind, speaks slowly and clearly" },
  minho: { grok: "kepler", character: "Minho — the star actor of the series, about 27, polite and a little shy off camera" },
  jiyeon: { grok: "liora", character: "Jiyeon — the lead actress, about 25, bright and funny" },
  makeup: { grok: "celeste", character: "The make-up artist — about 35, chatty and caring" },
  cameraman: { grok: "sal", character: "The cameraman — about 40, calm, a man of few words" },
  ajumma: { grok: "carina", character: "A market auntie (ajumma) — about 60, loud, generous, feeds everyone" },
  haenyeo: { grok: "luna", character: "A Jeju sea diver (haenyeo) — about 75, strong and proud" },
  bedouin: { grok: "sal", character: "Salim — a Bedouin guide in Wadi Rum, about 45, calm, wise, knows every star" },
  joao: { grok: "cosmo", character: "João — a boy of about 8 travelling with his family on the riverboat" },
};

/** The voice for anything that is not a dialogue line. */
export const NARRATOR: VoiceId = "murzik";

function normalise(text: string): string {
  return text.normalize("NFC").replace(/\s+/g, " ").trim();
}

/** A short stable file name for a phrase (FNV-1a hash of the exact text). */
export function audioKey(text: string): string {
  let h = 0x811c9dc5;
  for (const ch of normalise(text)) {
    h ^= ch.codePointAt(0)!;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

/**
 * Where the recordings live. "/audio" = inside the project (public/audio).
 * To move them to cloud storage later, put its address here, e.g. "https://audio.example.com".
 */
export const AUDIO_BASE = "/audio";

export function audioUrl(voice: VoiceId, text: string): string {
  return `${AUDIO_BASE}/${voice}/${audioKey(text)}.mp3`;
}
