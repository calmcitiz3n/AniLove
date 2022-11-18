import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export const PageNavigation = ({ arrayPages }) => {
  console.log(arrayPages);
  return (
    <div className={styles}>
      {arrayPages.map((number) => (
        <Link to={`animes/page/${number}`}>{number}</Link>
      ))}
    </div>
  );
};
