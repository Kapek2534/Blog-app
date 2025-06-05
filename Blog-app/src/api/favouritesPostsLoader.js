import { BACK_END_URL } from "../constants/api";

export async function favouritesPostsLoader() {
  const res = await fetch(`${BACK_END_URL}/favourites`);
  if (!res.ok) {
    throw new Error("Błąd podczas ładowania ulubionych postów");
  }
  return res.json();
}
