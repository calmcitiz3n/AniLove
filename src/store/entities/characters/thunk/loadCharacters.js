import React, { Dispatch } from "react";
import { charactersSlice } from "..";
import { selectCharactersIds } from "../selectors";
import { selectCharactersStatus } from "../selectors";
export const loadCharacters = () => (dispatch, getState) => {
  const state = getState();
  // if (
  //   selectCharactersIds(state) !== 0 ||
  //   selectCharactersStatus(state) === "start"
  // ) {
  //   return;
  // }
  dispatch(charactersSlice.actions.startLoading());
  fetch("https://api.jikan.moe/v4/characters")
    .then((res) => res.json())
    .then(({ data }) => {
      console.log(data);
      dispatch(charactersSlice.actions.finishLoading(data));
    })
    .catch((e) => {
      console.log(e);
      dispatch(charactersSlice.actions.failedLoading());
    });
};
