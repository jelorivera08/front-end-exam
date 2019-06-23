import * as constants from './constants';

export const getCounters = () => {
  return {
    type: constants.GET_COUNTERS,
  };
};

export const gotCounters = ({ payload }) => {
  return {
    type: constants.GOT_COUNTERS,
    payload,
  };
};

export const addACounter = (counter) => {
  return {
    type: constants.ADD_A_COUNTER,
    payload: counter,
  };
};

export const successfulAddOne = ({ payload }) => {
  return {
    type: constants.SUCCESSFULL_ADD_ONE,
    payload,
  };
};
