import { FavouritesList } from "../components/FavouritesList/FavouritesList";
import { Layout } from "../components/Layout/Layout";

const favouritePosts = [
  {
    id: 1,
    title: "Przykladowy tytul postu nr1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.",
    author: "Jan Kowalski",
  },
  {
    id: 2,
    title: "Przykladowy tytul postu nr2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.",
    author: "Jan Pucybut",
  },
];

export function Favourites() {
  return (
    <Layout>
      <FavouritesList posts={favouritePosts} />
    </Layout>
  );
}
