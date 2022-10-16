import { createSelector } from "reselect";
import { HospdataState } from "./hospdata.reducer";
import { RootState } from "../store";

const selectHospdataReducer = (state: RootState): HospdataState => state.hospdata;

export const selectHospdata = createSelector(
  [selectHospdataReducer],
  (hosp) => Object.values(hosp.hospdata[0])
);

export const selectHospIsLoading = createSelector(
  [selectHospdataReducer],
  (hosp) => hosp.isLoading
);