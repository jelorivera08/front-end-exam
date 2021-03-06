import * as constants from './constants';

export const getCounters = () => {
  return {
    type: constants.GET_COUNTERS,
  };
};

export const success = ({ payload }) => {
  return {
    type: constants.SUCCESS,
    payload,
  };
};

export const addACounter = (counter) => {
  return {
    type: constants.ADD_A_COUNTER,
    payload: counter,
  };
};

export const increment = (id) => {
  return {
    type: constants.INCREMENT,
    payload: id,
  };
};

export const decrement = (id) => {
  return {
    type: constants.DECREMENT,
    payload: id,
  };
};

export const deleteCounter = (id) => {
  return {
    type: constants.DELETE,
    payload: id,
  };
};
