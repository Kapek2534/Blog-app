import { FlexContainer } from "../FlexContainer/FlexContainer";

import flatAbout from "../../assets/flatAbout_no_bg.png";
import styles from "./About.module.css";

export function About() {
  return (
    <FlexContainer>
      <div className={styles.imgWrapper}>
        <img src={flatAbout} alt="O nas" />
      </div>
      <div className={styles.aboutWrapper}>
        <h2>O naszym blogu</h2>
        <p>
          Witaj na naszym blogu — miejscu, gdzie możesz nie tylko czytać ciekawe
          posty, ale także tworzyć własne. Dzielimy się myślami, inspiracjami i
          doświadczeniami. To przestrzeń otwarta dla każdego, kto kocha słowo.
        </p>
      </div>
    </FlexContainer>
  );
}
