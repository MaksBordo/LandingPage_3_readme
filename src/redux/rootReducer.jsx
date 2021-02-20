import { createStore, combineReducers } from "redux";
import { reducerHeader } from "./reducers/reducerHeader/reducerHeader";

const rootReducer = combineReducers({ reducerHeader });

export const store = createStore(rootReducer);
