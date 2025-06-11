import styles from "./PostList.module.css";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Post } from "../Post/Post";
import { PostForm } from "../PostForm/PostForm";
import { useState } from "react";

export function PostList({ posts }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <CenteredContent>
      <div className={styles.postListWrapper}>
        <h2>Witaj na liście postów</h2>
        <motion.button
          onClick={() => setIsFormOpen(!isFormOpen)}
          whileTap={{ y: 10 }}
        >
          {isFormOpen ? "Zwiń" : "Dodaj post"}
        </motion.button>
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: "hidden" }}
            >
              <PostForm />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={styles.postList}>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
