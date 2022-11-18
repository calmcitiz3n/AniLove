import Logo from "./img/logo.png";
import { Link } from "react-router-dom";
import { AnimesPage } from "../../pages/AnimesPage/AnimesPage";
import styles from "./styles.module.css";
export const Header = () => {
  return (
    <header className={styles.root}>
      <img src={Logo} alt="logo" className={styles.logo} />
      <nav className={styles.links}>
        <Link to="/anime" style={{ textDecoration: "none" }}>
          Anime
        </Link>
        <Link to="/manga" style={{ textDecoration: "none" }}>
          Manga
        </Link>
        <Link to="/characters" style={{ textDecoration: "none" }}>
          Characters
        </Link>

        <Link to="/producers" style={{ textDecoration: "none" }}>
          Producers
        </Link>
        <li>Recommendation</li>
      </nav>
    </header>
  );
};
