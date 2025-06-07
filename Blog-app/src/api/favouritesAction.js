import { BACK_END_URL } from "../constants/api";

export async function favouritesAction({ request, params: { postId } }) {
  if (request.method === "POST") {
    return fetch(`${BACK_END_URL}/favourites/${postId}`, {
      method: "POST",
    });
  }

  if (request.method === "DELETE") {
    return fetch(`${BACK_END_URL}/favourites/${postId}`, {
      method: "DELETE",
    });
  }

  throw new Error("Unsupported method");
}
