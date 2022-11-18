import styles from "./styles.module.css";
import { EpisodeButtonContainer } from "../../containers/EpisodeButtonContainer/EpisodeButtonContainer";
export const EpisodeList = ({ episodes }) => {
  return (
    <div className={styles.root}>
      {episodes.map((id) => (
        <EpisodeButtonContainer id={id} />
      ))}
    </div>
  );
};
