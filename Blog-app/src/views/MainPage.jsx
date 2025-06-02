import { Layout } from "../components/Layout/Layout";
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
  },
  {
    id: 2,
    title: "O nas",
    description: "Poznaj naszego bloga",
    photo: about,
    alt: "O blogu",
    buttonText: "Poznaj",
  },
  {
    id: 3,
    title: "Ulubione",
    description: "Zobacz ulubione posty",
    photo: add,
    alt: "Ulubione posty",
    buttonText: "Ulubione",
  },
];

export function MainPage() {
  return (
    <Layout>
      <Hero />
      <Offers offers={offers} />
    </Layout>
  );
}
