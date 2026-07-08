import { images } from "./images";

export const faunaOverview = {
  title: "Fauna",
  intro: `The location is home to a highly diverse and rich fauna. Besides the domesticated animals of the compound like chickens, goats, cows, ducks, and fishes, there are other beautiful creatures of the nature that can be found in the region. One may come across a few peacocks and peahens at times, especially in the evening. There are hornbills, kingfishers, Asian fairy bluebirds, cuckoos, owls, herons and plenty of other birds to be seen around.`,
  wildlife: `Outside the compound, the wildlife is even richer. Animals such as tiger, leopard, black panther, sambar deer, and bison are native to the region. These animals don't come in the sight usually except for the mighty bisons who can be seen grazing sometimes in a far-off pasture among the distant hills.`,
  image: images.faunaWildlife,
};

export const faunaSections = [
  {
    id: "poultry",
    title: "The Poultry Farm",
    description: `These chickens too are raised in an absolutely organic way. They are fed organic food free from pesticides and chemicals, they roam freely in big spaces, and they lay eggs naturally.`,
    image: images.poultry,
  },
  {
    id: "goats",
    title: "The Goat Farm",
    description: `Our goat farm reflects the same organic principles — animals raised with care, fed naturally, and allowed to roam freely across spacious pastures.`,
    image: images.goats,
  },
  {
    id: "cows",
    title: "The Cow Farm",
    description: `Cows graze peacefully across the green pastures of the property, raised organically alongside the rest of the farm. Calves roam freely in the open fields, reflecting the same care and natural living that defines Kannai.`,
    image: images.cows,
  },
  {
    id: "wildlife",
    title: "Wildlife & Birds",
    description: `From peacocks dancing at dusk to hornbills soaring overhead, the property and its surroundings teem with life. Keep your binoculars ready for kingfishers, Asian fairy bluebirds, cuckoos, owls, and herons.`,
    image: images.turtle,
  },
] as const;

export const birds = [
  "Peacocks & Peahens",
  "Hornbills",
  "Kingfishers",
  "Asian Fairy Bluebirds",
  "Cuckoos",
  "Owls",
  "Herons",
] as const;

export const wildlife = [
  "Tiger",
  "Leopard",
  "Black Panther",
  "Sambar Deer",
  "Bison",
] as const;

export const domesticAnimals = [
  "Chickens",
  "Goats",
  "Cows",
  "Ducks",
  "Fishes",
] as const;
