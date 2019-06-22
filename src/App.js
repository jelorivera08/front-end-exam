import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from './actions';

const App = ({ counters, getCounters }) => {
  const AppDidMount = () => {
    useEffect(() => {
      getCounters();
    }, []);
  };

  // render sequence stars
  AppDidMount();
  console.log(counters);
  return <div>hello</div>;
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
