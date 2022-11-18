import { configureStore } from "@reduxjs/toolkit";
import { entitiesReducer } from "./entities";
import { saveState } from "../utils/localStorage";

export const rootReducer = (state = {}, action = {}) => ({
  data: entitiesReducer(state.anime, action),
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});
const state = store.getState();
console.log("state", state);
store.subscribe(() => {
  saveState({
    anime: store.getState()?.data?.anime,
    manga: store.getState()?.data?.manga,
  });
});
