export const selectCharactersModule = (state) => state?.data?.characters;
export const selectCharactersEntities = (state) =>
  selectCharactersModule(state)?.entities;
export const selectCharactersIds = (state) =>
  selectCharactersModule(state)?.ids;
export const selectCharactersById = (state, { id }) =>
  selectCharactersEntities(state)?.[id];
export const selectCharactersStatus = (state) =>
  selectCharactersModule(state)?.status;
