import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> {this.props.count} </h1>
        <button onClick={() => this.props.dispatch({ type: 'FOO' })}>
          {' '}
          boom
        </button>
      </div>
    );
  }
}

export default connect((state) => ({ count: state.count }))(hot(module)(App));
