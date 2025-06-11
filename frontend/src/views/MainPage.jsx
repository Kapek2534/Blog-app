import { Hero } from "../components/Hero/Hero";
import { Offers } from "../components/Offers/Offers";

import search from "../assets/search.jpg";
import about from "../assets/about.jpg";
import add from "../assets/add.jpg";

const offers = [
  {
    id: 1,
    title: "Przeglądaj posty",
    description: "Zobacz najnowsze posty",
    photo: search,
    alt: "Przeglądanie postów",
    buttonText: "Zobacz",
    path: "/posts",
  },
  {
    id: 2,
    title: "O nas",
    description: "Poznaj naszego bloga",
    photo: about,
    alt: "O blogu",
    buttonText: "Poznaj",
    path: "/about",
  },
  {
    id: 3,
    title: "Ulubione",
    description: "Zobacz ulubione posty",
    photo: add,
    alt: "Ulubione posty",
    buttonText: "Ulubione",
    path: "/favourites",
  },
];

export function MainPage() {
  return (
    <>
      <Hero />
      <Offers offers={offers} />
    </>
  );
}
