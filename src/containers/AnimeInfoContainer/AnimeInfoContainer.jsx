import { Info } from "../../components/Info/Info";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAnimeById } from "../../store/entities/anime/selectors";
import { useEffect } from "react";
import { loadAnimeById } from "../../store/entities/anime/thunk/loadAnimeById";
import { nanoid } from "nanoid";
export const AnimeInfoContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadAnimeById(id);
    dispatch(loadFunction);
  }, []);
  const animeInfo = useSelector((state) => selectAnimeById(state, { id }));
  return (
    <Info
      img={animeInfo?.images?.jpg?.large_image_url}
      title={animeInfo?.title} //
      duration={animeInfo?.duration} //Продолжительность серии
      type={animeInfo?.type} //Тип
      score={animeInfo?.score} //Оценка
      status={animeInfo?.status} //Вышло или нет
      themes={animeInfo?.themes} //Жанры[]
      rating={animeInfo?.rating}
      year={animeInfo?.year}
      trailer={animeInfo?.trailer?.url}
      title_english={animeInfo?.title_english}
      title_japanies={animeInfo?.title_japanies}
      source={animeInfo?.source}
      synopsis={animeInfo?.synopsis}
      genres={animeInfo?.genres}
      videoPlayer="true"
    />
  );
};
