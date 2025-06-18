import styles from "./IconMenu.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function IconMenu() {
  const [isDark] = useContext(LightmodeContext);

  return (
    <div className={styles.iconWrapper}>
      <Link to="/favourites">
        <FontAwesomeIcon
          className={`${styles.heartIcon} ${isDark && styles.dark}`}
          icon={faHeart}
        />
      </Link>
      <ThemeToggle />
    </div>
  );
}
