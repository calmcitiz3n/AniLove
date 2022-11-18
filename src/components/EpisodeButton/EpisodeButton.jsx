import styles from "./styles.module.css";
export const EpisodeButton = ({ number }) => {
  return <button className={styles.button}>{number}</button>;
};
