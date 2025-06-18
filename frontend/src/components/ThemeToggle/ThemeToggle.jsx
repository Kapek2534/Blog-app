import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./ThemeToggle.module.css";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useContext(LightmodeContext);

  return (
    <button className={styles.lightmode} onClick={() => setIsDark(!isDark)}>
      {isDark ? (
        <FontAwesomeIcon className={styles.lightmodeIcon} icon={faSun} />
      ) : (
        <FontAwesomeIcon className={styles.lightmodeIcon} icon={faMoon} />
      )}
    </button>
  );
}
