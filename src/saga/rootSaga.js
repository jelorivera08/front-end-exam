import { put, takeEvery, all } from 'redux-saga/effects';
import * as constants from '../constants';
import * as actions from '../actions';
import createCounterAPI from '../api/counterApi';

let counterAPI = createCounterAPI().endpoints.counter;

export function* getCounters() {
  let res;
  try {
    res = yield counterAPI.getAll();
    yield put(actions.success({ payload: res.data }));
  } catch (err) {
    console.error('error encountered :', err);
  }
}

export function* addACounter(action) {
  let res;
  try {
    res = yield counterAPI.putOne(action.payload.title);
    yield put(actions.success({ payload: res.data }));
  } catch (err) {
    console.error('error encountered :', err);
  }
}

export function* increment(action) {
  let res;
  try {
    res = yield counterAPI.increment(action.payload);
    yield put(actions.success({ payload: res.data }));
  } catch (err) {
    console.error('error encountered :', err);
  }
}

export function* decrement(action) {
  let res;
  try {
    res = yield counterAPI.decrement(action.payload);
    yield put(actions.success({ payload: res.data }));
  } catch (err) {
    console.error('error encountered :', err);
  }
}

export function* deleteCounter(action) {
  let res;
  try {
    res = yield counterAPI.delete(action.payload);
    yield put(actions.success({ payload: res.data }));
  } catch (err) {
    console.error('error encountered :', err);
  }
}

function* watchCounterAPIS() {
  yield takeEvery(constants.GET_COUNTERS, getCounters);
  yield takeEvery(constants.ADD_A_COUNTER, addACounter);
  yield takeEvery(constants.INCREMENT, increment);
  yield takeEvery(constants.DECREMENT, decrement);
  yield takeEvery(constants.DELETE, deleteCounter);
}

export default function* rootSaga() {
  yield all([watchCounterAPIS()]);
}
