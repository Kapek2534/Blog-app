import styles from "./IconMenu.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export function IconMenu() {
  return (
    <div className={styles.iconWrapper}>
      <Link to="/favourites">
        <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
      </Link>
      <ThemeToggle />
    </div>
  );
}
