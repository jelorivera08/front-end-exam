import * as constants from '../constants';

const rootReducer = (state = { counters: [] }, action) => {
  switch (action.type) {
    case constants.GOT_COUNTERS:
      return { ...state, counters: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
