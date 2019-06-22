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
