export const selectProducersModule = (state) => state?.data?.producers;
export const selectProducersEntities = (state) =>
  selectProducersModule(state)?.entities;
export const selectProducersIds = (state) => selectProducersModule(state)?.ids;
export const selectProducersById = (state, { id }) =>
  selectProducersEntities(state)?.[id];
export const selectLoadingStatus = (state) =>
  selectProducersModule(state)?.status;
