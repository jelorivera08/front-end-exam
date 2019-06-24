import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from './actions';
import CounterInput from './Components/CounterInput/CounterInput';
import CounterList from './Components/CounterList/CounterList';
import CounterTotal from './Components/CounterTotal/CounterTotal';
import './App.scss';

const App = ({
  counters,
  getCounters,
  addACounter,
  increment,
  decrement,
  deleteCounter,
}) => {
  useEffect(() => {
    getCounters();
  }, []);

  const getTotalCount = () => {
    let tot = 0;
    counters.forEach((counter) => {
      tot += counter.count;
    });
    return tot;
  };

  let totalCount = getTotalCount();

  return (
    <div className="counter-container">
      <CounterInput handleCounterSubmit={addACounter} />
      <CounterList
        counters={counters}
        handleIncrementClick={increment}
        handleDecrementClick={decrement}
        handleDeleteClick={deleteCounter}
      />
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
  decrement: (id) => dispatch(actions.decrement(id)),
  deleteCounter: (id) => dispatch(actions.deleteCounter(id)),
});

export { App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(App));
