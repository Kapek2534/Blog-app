import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link to="/main">
      <h1 className={styles.logo}>BLOG</h1>
    </Link>
  );
}
