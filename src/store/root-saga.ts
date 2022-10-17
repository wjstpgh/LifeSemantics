import { all, call } from 'typed-redux-saga/macro';
import { hospdataSaga } from './hospdata/hospdata.saga';

export function* rootSaga() {
  yield* all([call(hospdataSaga)]);
}