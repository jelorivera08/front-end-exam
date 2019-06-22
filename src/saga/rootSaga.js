import { put, takeEvery, all } from 'redux-saga/effects';
import * as constants from '../constants';
import * as actions from '../actions';
import createCounterAPI from '../api/counterApi';

function* getCounters() {
  let counterAPI = createCounterAPI().endpoints.counter;
  let res;
  try {
    res = yield counterAPI.getAll();
    yield put(actions.gotCounters({ payload: res.data }));
  } catch (err) {
    console.error('error encountered in getting counters', err);
  }
}

function* watchCounterAPIS() {
  yield takeEvery(constants.GET_COUNTERS, getCounters);
}

export default function* rootSaga() {
  yield all([watchCounterAPIS()]);
}
