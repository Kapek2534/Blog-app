import styles from "./TopBar.module.css";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function TopBar({ children }) {
  const [isDark] = useContext(LightmodeContext);

  return (
    <div className={`${styles.topBar} ${isDark && styles.dark}`}>
      {children}
    </div>
  );
}
