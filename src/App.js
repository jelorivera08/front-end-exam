import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from './actions';
import CounterInput from './Components/CounterInput';
import CounterList from './Components/CounterList';
import CounterTotal from './Components/CounterTotal';

const App = ({ counters, getCounters }) => {
  let totalCount = 0;
  useEffect(() => {
    getCounters();
  }, []);

  return (
    <div>
      <CounterInput />
      <CounterList counters={counters} />
      <CounterTotal totalCount={totalCount} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
  getCounters: () => dispatch(actions.getCounters()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(App));
