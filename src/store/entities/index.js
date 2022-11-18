import { animeSlice } from "./anime";
import { mangaSlice } from "./manga";
import { charactersSlice } from "./characters";
import { producersSlice } from "./producers";
import { episodesSlice } from "./episodes";
export const entitiesReducer = (state = {}, action) => ({
  anime: animeSlice.reducer(state.anime, action),
  manga: mangaSlice.reducer(state.manga, action),
  characters: charactersSlice.reducer(state.characters, action),
  producers: producersSlice.reducer(state.producers, action),
  // episodes: episodesSlice.reducer(state.video, action),
  // reccomendation: reccomendationSlice.reducer(state.reccomendation, action),
  // manga: mangaSlice.reducer(state.manga, action),
});
