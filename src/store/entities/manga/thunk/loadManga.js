import { mangaSlice } from "..";
import { selectMangaIds } from "../../manga/selectors";
import { selectLoadingStatus } from "../../manga/selectors";
export const loadManga = () => (dispatch, getState) => {
  const state = getState();
  if (
    selectMangaIds(state).length !== 0 ||
    selectLoadingStatus(state) === "start"
  ) {
    console.log("not rerender");
    return;
  }
  dispatch(mangaSlice.actions.startLoading());
  fetch("https://api.jikan.moe/v4/manga")
    .then((res) => res.json())
    .then(({ data }) => dispatch(mangaSlice.actions.finishLoading(data)))
    .catch((e) => {
      console.log(e);
      dispatch(mangaSlice.actions.finishLoading());
    });
};
