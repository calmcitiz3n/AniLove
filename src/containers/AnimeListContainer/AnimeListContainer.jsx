import React, {
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { selectAnimeIds } from "../../store/entities/anime/selectors";
import { loadAnimeByPageNumber } from "../../store/entities/anime/thunk/loadAnimeByPageNumber";
export const AnimeListContainer = () => {
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadAnimeByPageNumber(pageNumber || 1);
    dispatch(loadFunction);
  }, []);
  const ids = useSelector((state) => selectAnimeIds(state, pageNumber || 1));
  return <AnimeList ids={ids} />;
};
