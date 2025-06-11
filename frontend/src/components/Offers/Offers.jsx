import styles from "./Offers.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Offer } from "../Offer/Offer";

export function Offers({ offers }) {
  return (
    <CenteredContent style={{ margin: `2rem` }}>
      <h2 className={styles.offersHeader}>Przeglądaj, twórz i poznaj nas</h2>
      <div className={styles.offersWrapper}>
        {offers.map((offer) => {
          return <Offer key={offer.id} offer={offer} />;
        })}
      </div>
    </CenteredContent>
  );
}
