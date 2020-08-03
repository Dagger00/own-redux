import {createStore} from 'redux'
import {rootReducer} from "./rootReducer";

export const store = createStore(rootReducer, { color: '#61DAFB'});
