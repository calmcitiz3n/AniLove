import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
const SLICE_NAME = "producers";
export const producersSlice = createSlice({
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
      state.entities = data.reduce((acc, producers) => {
        const id = producers.mal_id;
        acc[id] = producers;
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
