import { combineReducers } from "redux";
import { hospdataReducer } from "./hospdata/hospdata.reducer";
import { hosppickReducer } from "./hosppick/hosppick.reducer";

export const rootReducer = combineReducers({
  hospdata: hospdataReducer, hosppick: hosppickReducer
});