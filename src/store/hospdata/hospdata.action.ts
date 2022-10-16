import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { HOSPDATA_ACTION_TYPES, HospData } from "./hospdata.types";

export type FetchHospdataStart = Action<HOSPDATA_ACTION_TYPES.FETCH_HOSPDATA_START>

export const fetchHospdataStart = withMatcher((): FetchHospdataStart => (
  createAction(HOSPDATA_ACTION_TYPES.FETCH_HOSPDATA_START)
))

export type FetchHospdataSuccess = ActionWithPayload<HOSPDATA_ACTION_TYPES.FETCH_HOSPDATA_SUCCESS, HospData[]>

export const fetchHospdataSuccess = withMatcher((hospdata: HospData[]): FetchHospdataSuccess => (
  createAction(HOSPDATA_ACTION_TYPES.FETCH_HOSPDATA_SUCCESS, hospdata)
))

export type FetchHospdataFailed = ActionWithPayload<HOSPDATA_ACTION_TYPES.FETCH_HOSPDATA_FAILED, Error>

export const fetchHospdataFailed = withMatcher((error: Error): FetchHospdataFailed => (
  createAction(HOSPDATA_ACTION_TYPES.FETCH_HOSPDATA_FAILED, error)
))