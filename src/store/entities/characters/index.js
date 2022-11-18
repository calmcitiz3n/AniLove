import { createSlice } from "@reduxjs/toolkit";
const SLICE_NAME = "characters";
export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
export const charactersSlice = createSlice({
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
      state.entities = data.reduce((acc, characters) => {
        const id = characters?.mal_id;
        acc[id] = characters;
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
