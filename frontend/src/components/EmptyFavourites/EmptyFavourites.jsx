import styles from "./EmptyFavourites.module.css";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function EmptyFavourites() {
  const [isDark] = useContext(LightmodeContext);

  return (
    <div className={`${styles.emptyContainer} ${isDark && styles.dark}`}>
      <h3>Nie masz jeszcze ulubionych postów</h3>
      <p>Dodaj coś do ulubionych, aby szybko je odnaleźć!</p>
    </div>
  );
}
