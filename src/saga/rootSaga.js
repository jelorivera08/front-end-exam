import { put, takeEvery, all } from 'redux-saga/effects';
import * as constants from '../constants';
import * as actions from '../actions';
import createCounterAPI from '../api/counterApi';

let counterAPI = createCounterAPI().endpoints.counter;

function* getCounters() {
  let res;
  try {
    res = yield counterAPI.getAll();
    yield put(actions.gotCounters({ payload: res.data }));
  } catch (err) {
    console.error('error encountered in getting counters', err);
  }
}

function* addACounter(action) {
  let res;
  try {
    res = yield counterAPI.putOne(action.payload.title);
    yield put(actions.successfulAddOne({ payload: res.data }));
  } catch (err) {
    console.error('error encountered in getting counters', err);
  }
}

function* watchCounterAPIS() {
  yield takeEvery(constants.GET_COUNTERS, getCounters);
  yield takeEvery(constants.ADD_A_COUNTER, addACounter);
}

export default function* rootSaga() {
  yield all([watchCounterAPIS()]);
}
