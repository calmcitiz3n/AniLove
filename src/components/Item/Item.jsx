import styles from "./styles.module.css";
import { NavLink, Link } from "react-router-dom";
export const Item = ({
  img,
  title,
  year,
  episodes,
  rating,
  about,
  id,
  type,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles?.data}>
        <div className={styles?.episodes}>{episodes || ""}</div>
        <div className={styles?.image}>
          <img src={img} alt="" />
        </div>
      </div>
      <div className={styles?.titleAndYear}>
        <span className={styles?.title}>{title}</span>
        <span className={styles?.year}>{year || "empty year"} </span>
      </div>
    </div>
  );
};
