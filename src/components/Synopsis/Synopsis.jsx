import styles from "./styles.module.css";
export const Synopsis = ({ synopsis }) => {
  if (!synopsis) {
    return null;
  }
  return (
    <div className={styles.synopsis}>
      <h3>Synopsis:</h3>
      <span className={styles.synopsis}>{synopsis}</span>
    </div>
  );
};
