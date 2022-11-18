import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMangaById } from "../../store/entities/manga/selectors";
import { Info } from "../../components/Info/Info";
import { useEffect } from "react";
import { loadMangaById } from "../../store/entities/manga/thunk/loadMangaById";

import { useDispatch } from "react-redux";
export const MangaInfoContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadMangaById(id);
    dispatch(loadFunction);
  }, [id]);
  const mangaInfo = useSelector((state) => selectMangaById(state, { id }));
  return (
    <Info
      img={mangaInfo?.images?.jpg?.large_image_url}
      score={mangaInfo?.score}
      title={mangaInfo?.title}
      type={mangaInfo?.type}
      title_english={mangaInfo?.title_english}
      title_japanies={mangaInfo?.title_japanies}
      status={mangaInfo?.status}
      themes={mangaInfo?.themes}
      year={mangaInfo?.published?.string}
      synopsis={mangaInfo?.synopsis}
      genres={mangaInfo?.genres}
      infoFor="character"
      videoPlayer=""
    />
  );
};
