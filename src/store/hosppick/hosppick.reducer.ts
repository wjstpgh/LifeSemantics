import { AnyAction } from "redux";
import { HospData } from "../hospdata/hospdata.types";
import { setHosppick } from "./hosppick.actions";

export type HosppickState = {
  readonly hosppick: HospData[];
}

export const HOSPPICK_INITIAL_STATE: HosppickState = {
  hosppick: [],
};

export const hosppickReducer = (
  state = HOSPPICK_INITIAL_STATE,
  action: AnyAction
): HosppickState => {
  if (setHosppick.match(action)) {
    return {
      ...state,
      hosppick: action.payload,
    };
  }
  return state
}
