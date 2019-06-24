import { runSaga } from 'redux-saga';
import {
  getCounters,
  addACounter,
  increment,
  decrement,
  deleteCounter,
} from '../saga/rootSaga';
import axios from 'axios';

jest.mock('axios');

export async function recordSaga(saga, initialAction) {
  const dispatched = [];
  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    saga,
    initialAction
  ).done;

  return dispatched;
}

describe('Test suite for rootSaga', () => {
  it('shouldbe able to get all counters', async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: [{ id: '123', title: 'foo', count: 0 }],
    });
    await recordSaga(getCounters, {});
  });

  it('shouldbe able to add one counter', async () => {
    axios.post.mockResolvedValue({
      status: 202,
      data: [{ id: '123', title: 'foo', count: 0 }],
    });
    await recordSaga(() => addACounter({ payload: { title: 'foo' } }), {});
  });

  it('shouldbe able to increment a counter', async () => {
    axios.post.mockResolvedValue({
      status: 202,
      data: [{ id: '123', title: 'foo', count: 0 }],
    });
    await recordSaga(() => increment({ payload: { id: 'foo' } }), {});
  });

  it('shouldbe able to decrement a counter', async () => {
    axios.post.mockResolvedValue({
      status: 202,
      data: [{ id: '123', title: 'foo', count: 0 }],
    });
    await recordSaga(() => decrement({ payload: { id: 'foo' } }), {});
  });

  it('shouldbe able to delete a counter', async () => {
    axios.delete.mockResolvedValue({
      status: 202,
      data: [{ id: '123', title: 'foo', count: 0 }],
    });
    await recordSaga(() => deleteCounter({ payload: { id: 'foo' } }), {});
  });
});
