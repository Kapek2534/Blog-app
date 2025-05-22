import styles from "./Offer.module.css";

import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export function Offer({ offer }) {
  return (
    <Link className={styles.offer}>
      <img src={offer.photo} alt={offer.alt} />
      <h3>{offer.title}</h3>
      <p>{offer.description}</p>
      <div>
        <Button>{offer.buttonText}</Button>
      </div>
    </Link>
  );
}
