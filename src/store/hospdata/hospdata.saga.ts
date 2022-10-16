import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { getHospitalData } from "../../utils/firebase/firebase.utils";
import { fetchHospdataSuccess, fetchHospdataFailed } from "./hospdata.action";
import { HOSPDATA_ACTION_TYPES } from "./hospdata.types";

export function* fetchHospdataAsync() {
  try {
    const hospdataArr = yield* call(getHospitalData);
    yield* put(fetchHospdataSuccess(hospdataArr));
  }
  catch (error) {
    yield* put(fetchHospdataFailed(error as Error));
  }
}

export function* onFetchHospData() {
  yield takeLatest(
    HOSPDATA_ACTION_TYPES.FETCH_HOSPDATA_START,
    fetchHospdataAsync
  )
}

export function* hospdataSaga() {
  yield all([call(onFetchHospData)]);
}