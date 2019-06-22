import API from '../api/api';
import * as constants from '../constants';

const createCounterAPI = () => {
  let counterAPI = new API(constants.API_URL);
  counterAPI.createEntity('counter');

  return counterAPI;
};

export default createCounterAPI;
