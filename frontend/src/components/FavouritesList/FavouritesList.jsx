import styles from "./FavouritesList.module.css";

import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouritePost } from "../FavouritePost/FavouritePost";

export function FavouritesList({ posts }) {
  return (
    <CenteredContent>
      <h2>Ulubione posty</h2>
      <div className={styles.favouritesPostList}>
        {posts.map((post) => {
          return <FavouritePost key={post.id} post={post} />;
        })}
      </div>
    </CenteredContent>
  );
}
