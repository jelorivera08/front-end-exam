const rootReducer = (state = { count: 0 }, action) => {
  if (action.type === 'FOO') {
    alert('hello');
  }
  return state;
};

export default rootReducer;
