import { createSelector } from "reselect";
import { RootState } from "../store";
import { HosppickState } from "./hosppick.reducer";

const selectHosppickReducer = (state: RootState): HosppickState => state.hosppick;

export const selectHosppick = createSelector(
  [selectHosppickReducer],
  (hosp) => hosp.hosppick
);