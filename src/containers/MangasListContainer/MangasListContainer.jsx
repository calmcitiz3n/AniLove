import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadManga } from "../../store/entities/manga/thunk/loadManga";
import {
  MangaList,
  MangaListWithMemo,
} from "../../components/MangaList/MangaList";
import { selectMangaIds } from "../../store/entities/manga/selectors";
export const MangasListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadManga();
    dispatch(loadFunction);
  }, []);
  const ids = useSelector((state) => selectMangaIds(state));
  return <MangaList ids={ids} />;
};
