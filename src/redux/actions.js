import * as constants from '../constants';

export const getCounters = () => {
  return {
    type: constants.GET_COUNTERS,
  };
};
