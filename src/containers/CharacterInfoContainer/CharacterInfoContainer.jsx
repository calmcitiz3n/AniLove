import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Info } from "../../components/Info/Info";
import { selectCharactersById } from "../../store/entities/characters/selectors";
import { loadCharacterById } from "../../store/entities/characters/thunk/loadCharactersById";

export const CharacterInfoContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadCharacterById(id);
    dispatch(loadFunction);
  });
  const characterInfo = useSelector((state) =>
    selectCharactersById(state, { id })
  );
  return (
    <Info
      img={characterInfo?.images?.jpg?.image_url}
      title={characterInfo?.name}
      title_japanies={characterInfo?.name_kanji}
      synopsis={characterInfo?.about}
      videoPlayer=""
    />
  );
};
