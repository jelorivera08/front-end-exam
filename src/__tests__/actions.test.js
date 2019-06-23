import * as actions from '../actions';
import * as constants from '../constants';

describe('Test suite for actions.js', () => {
  it('should get counters', () => {
    expect(actions.getCounters()).toEqual({ type: constants.GET_COUNTERS });
  });

  it('should get success', () => {
    expect(actions.success({ payload: 'test' })).toEqual({
      type: constants.SUCCESS,
      payload: 'test',
    });
  });

  it('should add a counter', () => {
    expect(actions.addACounter(49)).toEqual({
      type: constants.ADD_A_COUNTER,
      payload: 49,
    });
  });

  it('should increment', () => {
    expect(actions.increment(49)).toEqual({
      type: constants.INCREMENT,
      payload: 49,
    });
  });

  it('should decrement', () => {
    expect(actions.decrement(49)).toEqual({
      type: constants.DECREMENT,
      payload: 49,
    });
  });

  it('should delete counter', () => {
    expect(actions.deleteCounter(49)).toEqual({
      type: constants.DELETE,
      payload: 49,
    });
  });
});
