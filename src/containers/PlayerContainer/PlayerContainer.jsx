import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Player } from "../../components/Player/Player";
import {
  selectEpisodesById,
  selectEpisodesIds,
} from "../../store/entities/episodes/selectors";
import { loadEpisodes } from "../../store/entities/episodes/thunk/loadEpisodes";
import { selectAnimeById } from "../../store/entities/anime/selectors";
export const PlayerContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadEpisodes(id);
    dispatch(loadFunction);
  }, [id]);
  const animeName = useSelector((state) => selectAnimeById(state, { id }));
  const episodes = useSelector((state) => selectEpisodesIds(state));
  console.log("episodes", episodes);

  return <Player episodes={episodes} animeName={animeName?.title} id={id} />;
};
