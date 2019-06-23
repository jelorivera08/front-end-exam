import reducer from '../redux/reducer';
import * as constants from '../constants';

describe('Test suite for the redux reducer', () => {
  it('should return counter state when success', () => {
    const state = reducer(
      { counters: [] },
      { type: constants.SUCCESS, payload: [{ test: 'foo' }] }
    );

    expect(state).toEqual({ counters: [{ test: 'foo' }] });
  });

  it('should return default state', () => {
    const state = reducer(
      { counters: [] },
      { type: 'TEST', payload: [{ test: 'foo' }] }
    );

    expect(state).toEqual({ counters: [] });
  });
});
