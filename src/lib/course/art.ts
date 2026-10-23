export const images = {
  murzik: "/art/murzik.jpg",
  tom: "/art/tom.jpg",
  opening: "/art/opening.jpg",
  apartment: "/art/apartment.jpg",
  greet: "/art/greet.jpg",
  airport: "/art/airport.jpg",
  london: "/art/london.jpg",
  flight: "/art/flight.jpg",
  rewardBowl: "/art/reward-bowl.jpg",
  bowl: "/art/bowl.jpg",
  chair: "/art/chair.jpg",
  sofa: "/art/sofa.jpg",
  table: "/art/table.jpg",
  fridge: "/art/fridge.jpg",
  desk: "/art/desk.jpg",
  clock: "/art/clock.jpg",
  lamp: "/art/lamp.jpg",
  book: "/art/book.jpg",
  phone: "/art/phone.jpg",
  kitchen: "/art/kitchen.jpg",
  window: "/art/window.jpg",
  door: "/art/door.jpg",
  bed: "/art/bed.jpg",
  cup: "/art/cup.jpg",
  plate: "/art/plate.jpg",
  spoon: "/art/spoon.jpg",
  cupboard: "/art/cupboard.jpg",
  water: "/art/water.jpg",
  tea: "/art/tea.jpg",
  bread: "/art/bread.jpg",
  cheese: "/art/cheese.jpg",
  apple: "/art/apple.jpg",
  banana: "/art/banana.jpg",
  milk: "/art/milk.jpg",
  coffee: "/art/coffee.jpg",
  juice: "/art/juice.jpg",
  park: "/art/park.jpg",
  street: "/art/street.jpg",
} as const;

/**
 * A picture for one phrase or scene, stored at public/art/<name>.jpg.
 * New pictures are listed with drawing notes in docs/grok-image-notes.md.
 */
export function pic(name: string): string {
  return `/art/${name}.jpg`;
}
