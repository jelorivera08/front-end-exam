import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import store from '../redux/store';

describe('Test suite for App', () => {
  it('renders without crashing', () => {
    shallow(
      <App store={store} counters={[{ id: 123, count: 0, title: 'foo' }]} />
    );
  });
});
