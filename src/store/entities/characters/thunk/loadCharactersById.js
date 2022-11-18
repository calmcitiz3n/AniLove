import { charactersSlice } from "..";
import { selectCharactersById } from "../selectors";
import { useSelector } from "react-redux";

export const loadCharacterById = (id) => (dispatch, getState) => {
  const state = getState();
  if (selectCharactersById(state, { id })) {
    console.log("not render");
    return state;
  }
  dispatch(charactersSlice.actions.startLoading());
  fetch(`https://api.jikan.moe/v4/characters/${id}/full`)
    .then((res) => res.json())
    .then((Character) =>
      dispatch(charactersSlice.actions.finishLoading([Character?.data]))
    )
    .catch((e) => {
      dispatch(charactersSlice.actions.failedLoading());
      console.log(e);
    });
};
