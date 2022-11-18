import { mangaSlice } from "..";
import { selectMangaById } from "../selectors";
import { useSelector } from "react-redux";

export const loadMangaById = (id) => (dispatch, getState) => {
  const state = getState();
  if (selectMangaById(state, { id })) {
    console.log("not render");
    return state;
  }
  dispatch(mangaSlice.actions.startLoading());
  fetch(`https://api.jikan.moe/v4/manga/${id}/full`)
    .then((res) => res.json())
    .then((manga) => dispatch(mangaSlice.actions.finishLoading([manga?.data])))
    .catch((e) => {
      dispatch(mangaSlice.actions.failedLoading());
      console.log(e);
    });
};
