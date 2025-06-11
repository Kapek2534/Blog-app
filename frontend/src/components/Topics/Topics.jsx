import styles from "./Topics.module.css";

import { Topic } from "../Topic/Topic";

export function Topics({ posts }) {
  return (
    <div className={styles.topics}>
      <span>
        <strong>Popularne tematy</strong>
      </span>
      <ul>
        {posts.map((post) => {
          return <Topic key={post.id} post={post} />;
        })}
      </ul>
    </div>
  );
}
