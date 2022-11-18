import { selectEpisodesById } from "../../store/entities/episodes/selectors";
import { EpisodeButton } from "../../components/EpisodeButton/EpisodeButton";
import { useSelector } from "react-redux";

export const EpisodeButtonContainer = ({ id }) => {
  const episodeInfo = useSelector((state) => selectEpisodesById(state, { id }));
  //   const onClick = () => setEpisode;
  return <EpisodeButton number={id} />;
};
