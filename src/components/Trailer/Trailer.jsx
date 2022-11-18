import ReactPlayer from "react-player";
import styles from "./styles.module.css";
export const Trailer = ({ trailer }) => {
  if (!trailer) {
    return null;
  }
  return (
    <div className={styles.trailer}>
      <h3>Trailer:</h3>
      <ReactPlayer url={trailer} />
    </div>
  );
};
