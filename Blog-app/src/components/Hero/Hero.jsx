import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <CenteredContent>
        <div className={styles.contentWrapper}>
          <h2>Witaj na naszym blogu!</h2>
          <p>Najlepsze wpisy!</p>
        </div>
      </CenteredContent>
    </div>
  );
}
