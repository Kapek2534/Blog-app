import styles from "./IconMenu.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function IconMenu() {
  return (
    <div className={styles.iconWrapper}>
      <Link to="/favourites">
        <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
      </Link>
      <select className={styles.lightmodeSelector}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
