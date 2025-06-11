import { BACK_END_URL } from "../constants/api";

export async function postsListLoader() {
  const res = await fetch(`${BACK_END_URL}/posts`);
  if (!res.ok) {
    throw new Error("Błąd podczas ładowania postów");
  }
  return res.json();
}
