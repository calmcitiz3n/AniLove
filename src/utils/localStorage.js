export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState == null) {
      return "underfined";
    }
    return JSON.stringify(serializedState);
  } catch (e) {
    return "underfined";
  }
};
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    return "undefined";
  }
};
