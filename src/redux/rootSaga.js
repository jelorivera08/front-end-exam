import { put, takeEvery, all } from 'redux-saga/effects';

function* foobar() {
  yield alert('hello from saga');
}

function* watchIncrementAsync() {
  yield takeEvery('FOO', foobar);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
