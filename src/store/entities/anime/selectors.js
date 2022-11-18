export const selectAnimeModule = (state) => state?.data?.anime;
export const selectAnimeEntities = (state) =>
  selectAnimeModule(state)?.entities;
export const selectAnimeIds = (state) => selectAnimeModule(state)?.ids;
export const selectAnimeById = (state, { id }) =>
  selectAnimeEntities(state)?.[id];
export const selectLoadingStatus = (state) => selectAnimeModule(state)?.status;
export const selectCurrentPage = (state) =>
  selectAnimeModule(state)?.currentPage;
export const selectAnimeLastPage = (state) =>
  selectAnimeModule(state)?.lastPage;
