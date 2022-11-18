export const selectMangaModule = (state) => state?.data?.manga;
export const selectMangaEntities = (state) =>
  selectMangaModule(state)?.entities;
export const selectMangaIds = (state) => selectMangaModule(state)?.ids;
export const selectMangaById = (state, { id }) =>
  selectMangaEntities(state)?.[id];
export const selectLoadingStatus = (state) => selectMangaModule(state)?.status;
