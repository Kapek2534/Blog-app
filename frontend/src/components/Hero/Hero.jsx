import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./Hero.module.css";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

export function Hero() {
  const [isDark] = useContext(LightmodeContext);

  return (
    <div className={styles.hero}>
      <CenteredContent>
        <div className={`${styles.contentWrapper} ${isDark && styles.dark}`}>
          <h2>Witaj na naszym blogu!</h2>
          <p>Najlepsze wpisy!</p>
        </div>
      </CenteredContent>
    </div>
  );
}
