import * as constants from '../constants';

const rootReducer = (state = { counters: [] }, action) => {
  switch (action.type) {
    case constants.GOT_COUNTERS:
    case constants.SUCCESSFULL_ADD_ONE:
      return { ...state, counters: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
