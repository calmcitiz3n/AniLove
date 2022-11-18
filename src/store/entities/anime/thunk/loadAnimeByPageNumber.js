import React, { Dispatch } from "react";
import { animeSlice } from "..";
import axios from "axios";
import { selectAnimeEntities, selectLoadingStatus } from "../selectors";
import { selectAnimeIds } from "../selectors";
import { maxValuePages } from "../../../../scripts/maxValuePages";
import { API_TOKEN } from "../../../../utils/api_key";
export const loadAnimeByPageNumber = (pageNumber) => (dispatch, getState) => {
  const state = getState();
  if (
    selectAnimeIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === "start" ||
    Object.values(selectAnimeEntities(state)).length !== 0
  ) {
    console.log("not rerender");
    return;
  }

  const last_page = maxValuePages("animes", API_TOKEN);
  dispatch(animeSlice.actions.startLoading(pageNumber));
  axios({
    url: "https://videocdn.tv/api/animes",
    headers: {
      API_TOKEN: "ximp6vZTpPJo9YXujTO1UHSiIWoApgdI",
    },
    params: {
      page: `${pageNumber}`,
      Credential: true,
      withCredentials: true,
    },
  })
    .then((response) => {
      dispatch(
        animeSlice.actions.finishLoading(response.data, pageNumber, last_page)
      );
    })
    .catch((e) => {
      console.error(e);
      dispatch(animeSlice.actions.failedLoading(pageNumber));
    });
};
//     .then((res) => res.json())
//     .then(( dataPage ) => {
//       dispatch(animeSlice.actions.finishLoading(dataPage, pageNumber));
//     })
//     .catch((e) => {
//       console.log(e);
//       dispatch(animeSlice.actions.failedLoading(pageNumber));
//     });
// };
