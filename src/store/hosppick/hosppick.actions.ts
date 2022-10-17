import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { HOSPPICK_ACTION_TYPES } from "./hosppick.types";
import { HospData } from "../hospdata/hospdata.types";

const pickHospfunc = (
  hosppick: HospData[],
  pickitem: HospData
): HospData[] => {
  const existingData = hosppick.find(
    (hosp) => hosp.id === pickitem.id
  );

  if (existingData) {
    return hosppick
  }
  return [...hosppick, { ...pickitem }];
};

const removeHospfunc = (
  hosppick: HospData[],
  removeitem: HospData
): HospData[] => {
  return hosppick.filter((hosp) => hosp.id !== removeitem.id)
}

export type SetHosppick = ActionWithPayload<HOSPPICK_ACTION_TYPES, HospData[]>

export const setHosppick = withMatcher(
  (hosppick: HospData[]): SetHosppick =>
    createAction(HOSPPICK_ACTION_TYPES.SET_PICK_ITEMS, hosppick)
)

export const pickHosp = (
  hosppick: HospData[],
  pickitem: HospData
) => {
  const newarr = pickHospfunc(hosppick, pickitem);
  return setHosppick(newarr);
}

export const removeHosp = (
  hosppick: HospData[],
  removeitem: HospData
) => {
  const newarr = removeHospfunc(hosppick, removeitem);
  return setHosppick(newarr);
}