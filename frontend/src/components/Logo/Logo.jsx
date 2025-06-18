import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function Logo() {
  const [isDark] = useContext(LightmodeContext);

  return (
    <Link to="">
      <h1 className={`${styles.logo} ${isDark && styles.dark}`}>BLOG</h1>
    </Link>
  );
}
