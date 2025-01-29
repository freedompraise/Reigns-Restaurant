import {
  GiChickenOven,
  GiBeerBottle,
  GiPharoah,
  GiMeat,
  GiBubblingBowl,
  GiRoundSilo,
} from "react-icons/gi";

export const Categories = [
  {
    id: 1,
    name: "Continentals",
    urlParam: "continental",
    icon: <GiChickenOven />,
  },
  {
    id: 2,
    name: "Africana",
    urlParam: "africana",
    icon: <GiPharoah />,
  },
  {
    id: 3,
    name: "Soft Drinks",
    urlParam: "drinks",
    icon: <GiBeerBottle />,
  },
  {
    id: 4,
    name: "Proteins",
    urlParam: "proteins",
    icon: <GiMeat />,
  },
  {
    id: 5,
    name: "Soups",
    urlParam: "soup",
    icon: <GiBubblingBowl />,
  },
  {
    id: 6,
    name: "Swallow",
    urlParam: "swallow",
    icon: <GiRoundSilo />,
  },
  // {
  //     id: 7,
  //     name: "Rice",
  //     urlParam: 'rice',
  //     icon: <GiBowlOfRice />,
  // },
  // {
  //     id: 8,
  //     name: "Curry",
  //     urlParam: 'curry',

  // }
];
