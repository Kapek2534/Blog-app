import { BACK_END_URL } from "../constants/api";

export function addPostToFavourites({ params: { postId } }) {
  return fetch(`${BACK_END_URL}/favourites/${postId}`, {
    method: "POST",
    body: JSON.stringify({
      postId: Number(postId),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
