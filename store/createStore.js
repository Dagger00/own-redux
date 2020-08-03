const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, {});
  const subs = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subs.forEach(func => func(state));
    },
    subscribe(func) {
      subs.push(func);
    },
    getState() {
      return state;
    }
  }
}
