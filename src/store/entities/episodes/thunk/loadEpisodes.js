import { selectEpisodesById, selectEpisodesIds } from "../selectors";
import { episodesSlice } from "..";
export const loadEpisodes = (id) => (dispatch, getState) => {
  const state = getState();
  // if (selectEpisodesIds(state)?.length !== 0) {
  //   console.log("not render");
  //   return null;
  // }
  dispatch(episodesSlice.actions.startLoading());
  fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`)
    .then((res) => res.json())
    .then(({ data }) => {
      console.log(data);
      episodesSlice.actions.finishLoading(data);
    })
    .catch((e) => {
      console.log(e);
      episodesSlice.actions.failedLoading();
    });
};
