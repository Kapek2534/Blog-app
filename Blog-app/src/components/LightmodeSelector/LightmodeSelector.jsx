import styles from "./LightmodeSelector.module.css";
export function LightmodeSelector() {
  return (
    <select className={styles.lightmodeSelector}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
