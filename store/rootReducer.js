const rootReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case CHANGE_LOGO_COLOR:
      return {
        ...state,
        logoColor: action.payload,
      };
    case RESET_LOGO_COLOR:
      return {
        ...state,
        logoColor: '#fff',
      };
    default:
      return state;
  }
}
