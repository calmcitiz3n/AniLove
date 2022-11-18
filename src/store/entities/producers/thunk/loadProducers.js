import { producersSlice } from "../../producers";
import { selectProducersIds } from "../../producers/selectors";
import { selectLoadingStatus } from "../../producers/selectors";
export const loadProducers = () => (dispatch, getState) => {
  const state = getState();
  if (
    selectProducersIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === "start"
  ) {
    console.log("not rerender");
    return;
  }
  dispatch(producersSlice.actions.startLoading());
  fetch("https://api.jikan.moe/v4/producers")
    .then((res) => res.json())
    .then(({ data }) => dispatch(producersSlice.actions.finishLoading(data)))
    .catch((e) => {
      console.log(e);
      dispatch(producersSlice.actions.finishLoading());
    });
};
