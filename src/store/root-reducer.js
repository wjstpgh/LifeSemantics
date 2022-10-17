import { combineReducers } from "redux";
import { hospdataReducer } from "./hospdata/hospdata.reducer";

export const rootReducer = combineReducers({
  hospdata: hospdataReducer,
});