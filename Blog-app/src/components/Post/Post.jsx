import styles from "./Post.module.css";

export function Post({ post }) {
  return (
    <div className={styles.post}>
      <div className={styles.bar}>
        <h4>{post.title}</h4>
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
