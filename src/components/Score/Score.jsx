import styles from "./styles.module.css";
import { RatingStar } from "rating-star";
export const Score = ({ score }) => {
  console.log(score);
  if (!score) {
    return null;
  }
  return (
    <div className={styles.score}>
      <RatingStar maxScore={10} rating={score} />
      <span className={styles.averageScore}>{score || "-"}</span>/10
    </div>
  );
};
