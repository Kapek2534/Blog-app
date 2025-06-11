import styles from "./FavouritePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Post } from "../Post/Post";

import { useFetcher } from "react-router-dom";

export function FavouritePost({ post }) {
  const { Form } = useFetcher();

  return (
    <div className={styles.favouritePost}>
      <Post post={post} />
      <Form method="DELETE" action={`/favourites/${post.id}`}>
        <button
          className={styles.fetcherButton}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FontAwesomeIcon className={styles.xmarkIcon} icon={faXmark} />
        </button>
      </Form>
    </div>
  );
}
