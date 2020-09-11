import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import root from "./reducer.js";
const rootReducer = combineReducers({ root: root });
export const store = createStore(rootReducer, devToolsEnhancer());
