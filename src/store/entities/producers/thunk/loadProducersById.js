import { producersSlice } from "..";
import { selectProducersById } from "../selectors";
import { useSelector } from "react-redux";

export const loadProducersById = (id) => (dispatch, getState) => {
  const state = getState();
  if (selectProducersById(state, { id })) {
    console.log("not render");
    return state;
  }
  dispatch(producersSlice.actions.startLoading());
  fetch(`https://api.jikan.moe/v4/Producers/${id}/full`)
    .then((res) => res.json())
    .then((Character) =>
      dispatch(producersSlice.actions.finishLoading([Character?.data]))
    )
    .catch((e) => {
      dispatch(producersSlice.actions.failedLoading());
      console.log(e);
    });
};
