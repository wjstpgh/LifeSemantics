import { HospData } from "./hospdata.types";
import { fetchHospdataFailed, fetchHospdataStart, fetchHospdataSuccess } from "./hospdata.action";
import { AnyAction } from "redux";

export type HospdataState = {
  readonly hospdata: HospData[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const HOSPDATA_INITIAL_STATE: HospdataState = {
  hospdata: [],
  isLoading: false,
  error: null,
}

export const hospdataReducer = (
  state = HOSPDATA_INITIAL_STATE,
  action: AnyAction
): HospdataState => {
  if (fetchHospdataStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchHospdataSuccess.match(action)) {
    return { ...state, hospdata: action.payload, isLoading: false };
  }
  if (fetchHospdataFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
}