import styles from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useFetcher } from "react-router-dom";

export function Post({ post }) {
  const { Form } = useFetcher();

  return (
    <div className={styles.post}>
      <div className={styles.bar}>
        <h4>{post.title}</h4>
        {!post.isFavorite && (
          <Form method="POST" action={`/favourites/${post.id}`}>
            <button
              className={styles.fetcherButton}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
            </button>
          </Form>
        )}
      </div>
      <p>{post.description}</p>
      <div className={styles.bar}>
        <span>
          <strong>Autor:</strong> {post.author}
        </span>
      </div>
    </div>
  );
}
