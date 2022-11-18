import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
const SLICE_NAME = "manga";
export const mangaSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "start";
    },
    finishLoading: (state, action) => {
      const data = action.payload;
      state.entities = data.reduce((acc, manga) => {
        const id = manga.mal_id;
        acc[id] = manga;
        return acc;
      }, {});
      state.ids = data.map(({ mal_id }) => mal_id);
      state.status = "finish";
      return state;
    },
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "failed";
    },
  },
});
