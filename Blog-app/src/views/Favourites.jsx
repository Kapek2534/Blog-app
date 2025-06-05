import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../components/FavouritesList/FavouritesList";
import { EmptyFavourites } from "../components/EmptyFavourites/EmptyFavourites";

export function Favourites() {
  const favouritePosts = useLoaderData();

  return (
    <>
      {favouritePosts.length === 0 ? (
        <EmptyFavourites />
      ) : (
        <FavouritesList posts={favouritePosts} />
      )}
    </>
  );
}
