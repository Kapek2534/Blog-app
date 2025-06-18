import styles from "./Topic.module.css";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function Topic({ post }) {
  const [isDark] = useContext(LightmodeContext);

  return (
    <div className={`${styles.topic} ${isDark && styles.dark}`}>
      <span>{post.title}</span>
    </div>
  );
}
