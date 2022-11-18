export const selectEpisodesModule = (state) => state?.data?.episodes;
export const selectEpisodesEntities = (state) =>
  selectEpisodesModule(state)?.entities;
export const selectEpisodesIds = (state) => selectEpisodesModule(state)?.ids;
export const selectEpisodesById = (state, { id }) =>
  selectEpisodesEntities(state)?.[id];
export const selectLoadingStatus = (state) =>
  selectEpisodesModule(state)?.status;
