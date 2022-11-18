import { createSlice } from "@reduxjs/toolkit";
// interface initialStateType {
//   entities: {};
//   ids: string[];
//   status: "idle" | "finish" | "failed" | "start";
// }
// interface propsType {
//   state: {
//     episodes: {
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
const SLICE_NAME = "episodes";
export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
export const episodesSlice = createSlice({
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
      const data = action.payload;
      state.entities = data.reduce((acc, episodes) => {
        const id = episodes?.mal_id;
        acc[id] = episodes;
        return acc;
      }, {});
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
