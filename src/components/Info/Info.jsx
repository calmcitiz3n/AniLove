import styles from "./styles.module.css";
import { Score } from "../Score/Score";
import { Description } from "../Description/Description";
import { Synopsis } from "../Synopsis/Synopsis";
import { Trailer } from "../Trailer/Trailer";
import { nanoid } from "@reduxjs/toolkit";
import { PlayerContainer } from "../../containers/PlayerContainer/PlayerContainer";
export const Info = ({
  img,
  source,
  title,
  title_english,
  title_japanies,
  duration,
  type,
  established,
  score,
  status,
  theme,
  rating,
  year,
  trailer,
  synopsis,
  genres,
  infoFor,
  videoPlayer,
}) => {
  const key = nanoid();
  return (
    <div className={styles.root}>
      <div>
        <img src={img} alt="" />
      </div>
      <div className={styles.info}>
        <Score score={score} />
        <h2 className={styles.title}>{title}</h2>
        <Description
          type={type}
          status={status}
          year={year}
          duration={duration}
          genres={genres}
          theme={theme}
          source={score}
          established={established}
          key={key}
        />
        <Synopsis synopsis={synopsis} />
        <Trailer trailer={trailer} />
        {Boolean(videoPlayer) && <PlayerContainer />}
      </div>
    </div>
  );
};
