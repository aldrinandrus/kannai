import { images } from "./images";

export const floraOverview = {
  title: "Flora",
  intro: `Kannai Agro Tourism Centre welcomes you to observe, explore, and joyfully be a part of its lush greenery and rich farm fields. Cashew, coconut, orange, groundnut, areca nut, jackfruit, silver oak, avocado, and rambutan are some of the trees which are in abundance here. The property is home to large plantations of lemongrass, pineapple, strawberries, orange, banana, coffee, onion, potato, tomato, garlic, ginger, and mango. Besides these, it is also a habitat of some exotic fruits and spices like passion fruit, vanilla, cardamom, turmeric, and black-pepper. Some of the rare plants and trees of the world with unique medicinal properties also grow here: vetiver, galangal roots, kumkum tree, and nutmeg.`,
  image: images.flora,
};

export const plantations = [
  {
    id: "coconut",
    title: "The Coconut Plantation",
    description: `The rich flora of the tourism centre also boasts plenty of young and old coconut trees lining the wonderful trails as well as scattered around on the property.`,
    image: images.coconut,
  },
  {
    id: "lemongrass",
    title: "The Lemongrass Plantation: A Herbal Detox",
    description: `Multiple acres of land are dedicated to a full-fledged cultivation of lemongrass on an industrial scale. The property also has an oil extraction plant for extracting lemongrass oil commercially by steam distillation method. The breeze sometimes carries its wonderful fragrance and induces a freshness that lasts in the memory. Guests can avail themselves organic lemongrass drinks which are known for their naturally detoxing properties.`,
    image: images.lemongrass,
  },
  {
    id: "orange",
    title: "The Orange Plantation",
    description: `Walk through rows of vibrant orange trees and experience the citrus-scented air of our organic orange plantation nestled in the Western Ghats.`,
    image: images.orange,
  },
  {
    id: "pineapple",
    title: "Pineapple Farming",
    description: `Huge pieces of land dedicated to pineapple farming that produces tonnes of organic luscious pineapples every year. If you happen to visit us during the season, make sure to have a few glasses of the wonder juice laden with nutrients and antioxidants.`,
    image: images.pineapple,
  },
  {
    id: "coffee",
    title: "The Coffee Plantation",
    description: `A stretch of coffee plantation on the property not only gives you the feel of walking through the exotic shrubs but also gives you an opportunity to drink the most freshly ground coffee one can ever have.`,
    image: images.coffee,
  },
  {
    id: "pepper-vanilla",
    title: "Black Pepper and Vanilla Plantations",
    description: `Discover the exotic spices that thrive in our tropical climate — organically grown black pepper vines and fragrant vanilla orchids.`,
    image: images.pepperVanilla,
  },
  {
    id: "strawberry",
    title: "The Strawberry Plantation",
    description: `Like all our other agricultural products, strawberries too are grown with completely organic methods. Our efforts reflect in the purity and taste of the produce. We serve our guests fresh juices direct from the strawberry farm during the season.`,
    image: images.strawberry,
  },
  {
    id: "fruits-on-go",
    title: "Fruits On The Go",
    description: `The trails on this property are as expansive as they are pleasant. One may get a little hungry sometimes after walking for long. We have that covered. Just stop near a fruit tree, pluck a fruit and have a healthy snack to keep you energised through your walks.`,
    image: images.fruitsOnGo,
  },
  {
    id: "kumkum",
    title: "Mallotus Philippensis: A Rare Tree of the Rainforest",
    description: `Besides its scientific name, it is also known as Kumkum tree in India. Its fruits are used to make natural dye which is used in sacred rituals in India. The tree also possesses medicinal properties.`,
    image: images.kumkumTree,
  },
  {
    id: "sacred-fig",
    title: "Sacred Fig",
    description: `A wild fig tree, also known as Ficus Religiosa or Sacred Fig, stands as a testament to the spiritual and natural heritage of this land.`,
    image: images.sacredFig,
  },
] as const;
