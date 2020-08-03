import {getRandomColor} from "../utils";
import {CHANGE_BACK_COLOR, CHANGE_LOGO_COLOR, RESET_BACK_COLOR, RESET_LOGO_COLOR} from "./constants";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LOGO_COLOR:
      return {
        ...state,
        logoColor: getRandomColor(),
      }
    case RESET_LOGO_COLOR:
      return {
        ...state,
        logoColor: '#61DAFB',
      }
    case CHANGE_BACK_COLOR:
      return {
        ...state,
        backgroundColor: getRandomColor(),
      }
    case RESET_BACK_COLOR:
      return {
        ...state,
        backgroundColor: '#282c34',
      }
    default:
      return state;
  }
}
