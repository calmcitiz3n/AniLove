import { createSlice } from "@reduxjs/toolkit";
// interface initialStateType {
//   entities: {};
//   ids: string[];
//   status: "idle" | "finish" | "failed" | "start";
// }
// interface propsType {
//   state: {
//     anime: {
//       entities: {
//         string: {};
//       };
//       ids: string[];
//     };
//   };
//   action: {
//     payload: any;
//     type: string;
//   };
// }
const SLICE_NAME = "anime";
export const initialState = {
  currentPage: 1,
  lastPage: 0,
  entities: {},
  ids: [],
  status: "idle",
};
export const animeSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "start";
      return state;
    },
    finishLoading: (state, action) => {
      const { data } = action.payload.dataPage;
      const pageNumber = action.payload;
      const last_page = action.payload;
      state.lastPage = action.payload.dataPage.lastPage;
      state.page = pageNumber;
      state.entities = data.reduce((acc, anime) => {
        const id = anime?.mal_id;
        acc[id] = anime;
        return acc;
      }, {});
      state.lastPage = last_page;
      state.ids = data.map(({ mal_id }) => mal_id);
      state.status = "finish";
      return state;
    },
    failedLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "failed";
      return state;
    },
  },
});
