import { put, takeEvery, all } from 'redux-saga/effects';
import * as constants from '../constants';
import API from '../api/api';

let myAPI = new API(constants.API_URL);
myAPI.createEntity('counter');

function* getCounters() {
  let foo = yield myAPI.endpoints.counter.getAll();
  console.log(foo);
}

function* watchGetCounters() {
  yield takeEvery(constants.GET_COUNTERS, getCounters);
}

export default function* rootSaga() {
  yield all([watchGetCounters()]);
}
