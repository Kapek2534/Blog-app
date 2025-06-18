import styles from "./Topics.module.css";

import { Topic } from "../Topic/Topic";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function Topics({ posts }) {
  const [isDark] = useContext(LightmodeContext);

  return (
    <div className={`${styles.topics} ${isDark && styles.dark}`}>
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
