import styles from "./MainContent.module.css";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function MainContent({ children }) {
  const [isDark] = useContext(LightmodeContext);

  return (
    <div className={`${styles.mainContent} ${isDark && styles.dark}`}>
      {children}
    </div>
  );
}
