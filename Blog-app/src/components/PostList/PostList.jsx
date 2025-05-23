import styles from "./PostList.module.css";

import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Post } from "../Post/Post";

export function PostList({ posts }) {
  return (
    <CenteredContent>
      <div className={styles.postListWrapper}>
        <h2>Witaj na liście postów</h2>
        <div className={styles.postList}>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
