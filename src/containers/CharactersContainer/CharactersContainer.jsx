import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCharactersIds } from "../../store/entities/characters/selectors";
import { loadCharacters } from "../../store/entities/characters/thunk/loadCharacters";
import { Characters } from "../../components/Characters/Characters";
export const CharactersContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadCharacters();
    dispatch(loadFunction);
  }, []);
  const ids = useSelector((state) => selectCharactersIds(state));
  return <Characters ids={ids} />;
};
