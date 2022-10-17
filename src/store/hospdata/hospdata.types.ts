export enum HOSPDATA_ACTION_TYPES {
  FETCH_HOSPDATA_START = 'hospdata/FETCH_HOSPDATA_START',
  FETCH_HOSPDATA_SUCCESS = 'hospdata/FETCH_HOSPDATA_SUCCESS',
  FETCH_HOSPDATA_FAILED = 'hospdata/FETCH_HOSPDATA_FAILED',
}

export type HospData = {
  id: number;
  yadmNm: string;
  addr: string;
  XPos: number;
  YPos: number;
}