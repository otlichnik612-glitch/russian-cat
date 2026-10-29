import type { SpeakerId } from "./types";

/**
 * Recorded voices. Every Russian phrase can have its own mp3 file in public/audio/<voice>/<key>.mp3.
 * If the file exists, the app plays it. If not, the phone's built-in voice reads the text, as before.
 *
 * Murzik's voice is also used for everything that is not a dialogue line:
 * phrase cards, letters, grammar examples and tasks.
 */
export type VoiceId = SpeakerId;

/** Which Grok voice records each character. Change a line here to change a voice. */
export const voiceCast: Record<VoiceId, { grok: string; character: string }> = {
  murzik: { grok: "Ara", character: "Murzik — a cheerful, curious young kitten; also reads the phrase cards and tasks" },
  tom: { grok: "Leo (male)", character: "Tom — a friendly young Englishman of about 25" },
  neighbour: { grok: "another female voice", character: "Madame Dubois — a kind elderly lady" },
  officer: { grok: "another male voice", character: "Passport officer — a polite, calm man" },
  driver: { grok: "a cheerful older male voice", character: "İstanbul taxi driver — chatty and kind" },
  passerby: { grok: "another female voice", character: "Passer-by — a friendly woman" },
  waiter: { grok: "another male voice", character: "Waiter — a cheerful man of about 40" },
  seller: { grok: "another female voice", character: "Seller — a cheerful woman" },
  cashier: { grok: "another male voice", character: "Cashier / ticket clerk — a calm, friendly voice" },
  barsik: { grok: "another male voice", character: "Barsik — a plump, lazy, funny cousin" },
  musya: { grok: "another female voice", character: "Musya — a five-year-old girl" },
  aunt: { grok: "another female voice", character: "Aunt Olya — a warm mother and teacher" },
  uncle: { grok: "another male voice", character: "Uncle Petya — a jolly cook" },
  marco: { grok: "another male voice", character: "Marco — a young Italian man" },
  irina: { grok: "another female voice", character: "Irina — a kind Russian woman of about 50" },
  karl: { grok: "another male voice", character: "Karl — a gentle old Austrian musician, speaks slowly and warmly" },
  doctor: { grok: "another female voice", character: "Dr Anna Petrovna — a calm, caring Russian doctor of about 60" },
  pharmacist: { grok: "another female voice", character: "Pharmacist — a friendly young woman" },
  katya: { grok: "another female voice", character: "Katya — a lively Russian student of about 20" },
  editor: { grok: "another female voice", character: "Editor — a confident, friendly woman of about 45" },
  nika: { grok: "another female voice", character: "Nika — a cheerful young woman from a Greek-Russian family" },
  receptionist: { grok: "another male voice", character: "Hotel receptionist — a polite, helpful young man" },
  ewa: { grok: "another female voice", character: "Pani Ewa — a lively elderly Polish lady who learned Russian at school" },
  dora: { grok: "another female voice", character: "Dora — a curious ten-year-old girl" },
  jamie: { grok: "another male voice", character: "Jamie — Tom's cheerful Scottish school friend" },
  lev: { grok: "another male voice", character: "Lev — a kind, quiet, elderly voice, warm and a little mysterious" },
  // Turkish course (Turkish voices)
  ayse: { grok: "a female Turkish voice", character: "Ayşe Teyze — a warm, chatty elderly Turkish lady who runs a small café in Paris" },
  kemal: { grok: "a male Turkish voice", character: "Kemal Bey — a calm, kind landlord in his sixties in Istanbul" },
  simitci: { grok: "a male Turkish voice", character: "An old simit seller on the ferry, cheerful and talkative" },
  zeynep: { grok: "a female Turkish voice", character: "Zeynep Hanım — a lively owner of a small restaurant in Bursa" },
  leyla: { grok: "a female Turkish voice", character: "Aunt Leyla — Asya's daughter, a warm teacher" },
  mehmet: { grok: "a male Turkish voice", character: "Uncle Mehmet — a jolly cook" },
  tarcin: { grok: "a young male Turkish voice", character: "Tarçın — Murzik's plump, lazy, funny cousin" },
  minnos: { grok: "a child's Turkish voice", character: "Minnoş — a five-year-old girl who loves drawing" },
  selin: { grok: "a young female Turkish voice", character: "Selin — the friendly daughter of the guesthouse owners in Pamukkale" },
  captain: { grok: "a male Turkish voice", character: "Captain Ali — an old sailor with a deep, kind voice" },
  hasan: { grok: "an elderly male Turkish voice", character: "Hasan Usta — an old saz player, slow and warm" },
  zehra: { grok: "a female Turkish voice", character: "Dr Zehra Hanım — a calm, caring doctor" },
  deniz: { grok: "a young female Turkish voice", character: "Deniz — a lively student" },
  potter: { grok: "a male Turkish voice", character: "The potter in Avanos — patient and proud of his craft" },
  nur: { grok: "an elderly female Turkish voice", character: "Grandma Nur — Asya's younger sister, gentle and a little sad" },
  postman: { grok: "a male Turkish voice", character: "The post office clerk in Trabzon — polite and busy" },
  gulsum: { grok: "an elderly female Turkish voice", character: "Gülsüm Teyze — runs a breakfast house in Van, generous and funny" },
  elif: { grok: "a child's Turkish voice", character: "Elif — a curious ten-year-old girl" },
  can: { grok: "a young male Turkish voice", character: "Can — Tom's photographer friend from the magazine" },
  pilot: { grok: "a male Turkish voice", character: "Kerem — a cheerful hot-air balloon pilot in Cappadocia" },
  hope: { grok: "an elderly British female voice", character: "Mrs Hope — Tom's grandmother, a retired pastry cook from London, warm and a little strict" },
  priya: { grok: "a young British female voice", character: "Priya — a cheerful Oxford student" },
  green: { grok: "a British female voice", character: "Mrs Green — a baker in Bath" },
  fiona: { grok: "a Scottish female voice", character: "Fiona MacDonald — a busy, kind mum in Edinburgh" },
  ian: { grok: "a Scottish male voice", character: "Ian MacDonald — a calm dad who loves telling stories" },
  rory: { grok: "a boy's voice", character: "Rory — a lively ten-year-old twin" },
  isla: { grok: "a girl's voice", character: "Isla — Rory's twin sister, curious and clever" },
  sean: { grok: "an Irish male voice", character: "Seán — a barista and fiddle player in Dublin" },
  marcus: { grok: "an American male voice", character: "Marcus — a big-hearted diner cook in New York" },
  rosie: { grok: "an American female voice", character: "Rosie — Marcus's chatty neighbour" },
  emily: { grok: "a young American female voice", character: "Emily — a student who works in a clothes shop in Boston" },
  tony: { grok: "an American male voice", character: "Tony — a Chicago taxi driver who loves pizza" },
  bernadette: { grok: "a warm American female voice", character: "Bernadette — a jazz singer in New Orleans" },
  daniel: { grok: "an American male voice", character: "Daniel — a café owner in San Francisco, once a programmer" },
  lee: { grok: "a Canadian female voice", character: "Dr Lee — a calm doctor in Vancouver" },
  sam: { grok: "a young Canadian male voice", character: "Sam — Dr Lee's son, a forest ranger" },
  michael: { grok: "a Canadian male voice", character: "Michael Chen — a friendly dad in Toronto" },
  lucy: { grok: "a Canadian female voice", character: "Lucy Chen — Michael's wife, who runs a family café" },
  may: { grok: "an elderly female voice", character: "Grandma May — Michael's mother" },
  chloe: { grok: "an Australian female voice", character: "Chloe — a surfer in Sydney who bakes pies" },
  grace: { grok: "an elderly New Zealand female voice", character: "Grace — Mrs Hope's oldest friend, in Wellington" },
  lucia: { grok: "a warm elderly Brazilian female voice", character: "Dona Lúcia — a cheerful, slightly absent-minded Brazilian lady of nearly 80, Murzik's neighbour in Paris" },
  bia: { grok: "a young Brazilian female voice", character: "Bia — Dona Lúcia's granddaughter, a lively journalism student from Rio, about 20" },
  pipoca: { grok: "a high, squeaky, funny voice (a parrot repeating phrases)", character: "Pipoca — Dona Lúcia's chatty green parrot who repeats everything he hears" },
  claudia: { grok: "a Brazilian female voice of about 50", character: "Cláudia — Bia's mum, Dona Lúcia's daughter, kind and busy" },
  leo: { grok: "a Brazilian boy's voice", character: "Léo — Bia's little brother, about 10, mad about football" },
  zeca: { grok: "a cheerful Brazilian male singer's voice", character: "Zeca — singer of the band Maré Alta" },
  tiago: { grok: "a young Brazilian male voice", character: "Tiago — drummer of the band Maré Alta" },
  antonio: { grok: "an older Brazilian male voice", character: "Seu Antônio — owner of a small café in Paraty" },
  neide: { grok: "a Brazilian female voice of about 60", character: "Dona Neide — cashier of a bakery in São Paulo" },
  gabriel: { grok: "a young Brazilian male voice", character: "Gabriel — runs a hostel in Curitiba" },
  caio: { grok: "a Brazilian teenage boy's voice", character: "Caio — a surfer and beach-football player in Florianópolis, about 16" },
  juliana: { grok: "a Brazilian female voice", character: "Juliana — a park guide at the Iguaçu Falls" },
  benedito: { grok: "a deep older Brazilian male voice", character: "Seu Benedito — a cowboy on a ranch in the Pantanal" },
  rafael: { grok: "a Brazilian male voice of about 30", character: "Rafael — Bia's cousin, an office worker in Brasília, always in a hurry" },
  marta: { grok: "an elderly Brazilian female voice", character: "Dona Marta — a guide in old Ouro Preto who knows every street" },
  celeste: { grok: "a warm Brazilian female voice from Bahia", character: "Dona Celeste — sells acarajé at a stall in Salvador" },
  lia: { grok: "a young Brazilian female voice", character: "Lia — a frevo dancer in Olinda" },
  paulo: { grok: "a calm Brazilian male voice", character: "Dr Paulo — a friendly doctor in Fortaleza" },
  davi: { grok: "a Brazilian boy's voice from Bahia", character: "Davi — Dona Celeste's grandson, about 12, a keen drummer" },
  ana: { grok: "a Brazilian girl's voice from Bahia", character: "Ana — Dona Celeste's granddaughter, about 9" },
  mestre: { grok: "a deep, warm Brazilian male voice from Bahia", character: "Capoeira master in Salvador" },
  pintor: { grok: "an elderly Brazilian male voice", character: "An old painter in Olinda" },
  marcos: { grok: "a Brazilian male voice of about 50", character: "Marcos — Bia's dad, who works in São Paulo; calm and funny" },
  raimundo: { grok: "an older Brazilian male voice from the Amazon", character: "Seu Raimundo — captain of a river boat in Manaus" },
  joao: { grok: "a Brazilian boy's voice from the Amazon", character: "João — a boy of about 8 travelling with his family on the riverboat" },
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
