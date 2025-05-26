import styles from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function Post({ post }) {
  return (
    <div className={styles.post}>
      <div className={styles.bar}>
        <h4>{post.title}</h4>
        <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
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
