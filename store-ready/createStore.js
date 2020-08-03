const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, {});
  const subscribers = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach(func => func(state));
    },
    subscribe(func) {
      subscribers.push(func);
    },
    getState() {
      return state;
    }
  }
}
