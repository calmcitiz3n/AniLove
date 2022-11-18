import ReactPlayer from "react-player";
import { EpisodeList } from "../EpisodeList/EpisodeList";
import { useState } from "react";
import styles from "./styles.module.css";
export const Player = ({ episodes, animeName, id }) => {
  const [episode, setEpisode] = useState(1);
  if (!episodes) {
    console.log("episodes is null");
    return null;
  }
  console.log(episodes);
  return (
    <iframe
      src="//50.annacdn.cc/8tNrVNk1xhCa/anime/268?autoplay=1&translation=240"
      width="640"
      height="480"
      frameborder="0"
      allowfullscreen
    ></iframe>
    // <div className={styles.root}>
    //   <ReactPlayer
    //     url={`https://myanimelist.net/anime/${id}/${animeName}/episode/${episode}`}
    //   />
    //   <EpisodeList episodes={episodes} />
    // </div>
  );
};
