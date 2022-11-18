import { animeSlice } from "..";
import { selectAnimeById } from "../selectors";
import { useSelector } from "react-redux";
export const loadAnimeById = (id) => (dispatch, getState) => {
  const state = getState();
  if (selectAnimeById(state, { id })) {
    console.log("not render");
    return state;
  }
  dispatch(animeSlice.actions.startLoading());
  fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
    .then((res) => res.json())
    .then((anime) => dispatch(animeSlice.actions.finishLoading([anime?.data])))
    .catch((e) => {
      dispatch(animeSlice.actions.failedLoading());
      console.log(e);
    });
};
