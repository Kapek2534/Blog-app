import styles from "./Topic.module.css";

export function Topic({ post }) {
  return (
    <div className={styles.topic}>
      <span>{post.title}</span>
    </div>
  );
}
