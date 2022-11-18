import styles from "./styles.module.css";
export const Description = ({
  type,
  status,
  year,
  duration,
  genres,
  theme,
  source,
  established,
}) => {
  if (
    !type &&
    !status &&
    !year &&
    !duration &&
    !genres &&
    !theme &&
    !source &&
    !established
  ) {
    return null;
  }
  return (
    <div className={styles.root}>
      <div className={styles.block}>
        <span className={styles.grey}>Type:</span>
        <span>{type || "-"}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.grey}>Status:</span>
        <span>{status || "-"}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.grey}>Year:</span>
        <span>{year || "-"}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.grey}>Duration</span>
        <span>{duration || "-"}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.grey}>Genres:</span>
        <div>
          {genres?.map((genre) => (
            <span className={styles.blockInfo}>{genre?.name},</span>
          ))}
        </div>
      </div>
      <div className={styles.block}>
        <span className={styles.grey}>Theme:</span>
        <span>{theme || "-"}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.grey}>Source:</span>
        <span>{source || "-"}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.grey}>Established:</span>
        <span>{established || "-"}</span>
      </div>
    </div>
  );
};
