import styles from "./MainMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function MainMenu() {
  const [isDark] = useContext(LightmodeContext);

  return (
    <ul className={styles.mainMenu}>
      {CATEGORIES.map((category) => {
        return (
          <li key={category.path}>
            <NavLink to={category.path} className={`${isDark && styles.dark}`}>
              {category.categoryName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
