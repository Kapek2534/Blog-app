import styles from "./FavouritesList.module.css";

import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Post } from "../Post/Post";

export function FavouritesList({ posts }) {
  return (
    <CenteredContent>
      <h2>Ulubione posty</h2>
      <div className={styles.favouritesPostList}>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </CenteredContent>
  );
}
