import styles from "./EmptyFavourites.module.css";

export function EmptyFavourites() {
  return (
    <div className={styles.emptyContainer}>
      <h3>Nie masz jeszcze ulubionych postów</h3>
      <p>Dodaj coś do ulubionych, aby szybko je odnaleźć!</p>
    </div>
  );
}
