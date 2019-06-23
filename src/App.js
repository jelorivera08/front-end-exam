import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from './actions';
import CounterInput from './Components/CounterInput';
import CounterList from './Components/CounterList';
import CounterTotal from './Components/CounterTotal';

const App = ({ counters, getCounters, addACounter, increment }) => {
  let totalCount = 0;
  useEffect(() => {
    getCounters();
  }, []);

  return (
    <div>
      <CounterInput handleCounterSubmit={addACounter} />
      <CounterList counters={counters} handleIncrementClick={increment} />
      <CounterTotal totalCount={totalCount} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
  getCounters: () => dispatch(actions.getCounters()),
  addACounter: (counter) => dispatch(actions.addACounter(counter)),
  increment: (id) => dispatch(actions.increment(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(App));
