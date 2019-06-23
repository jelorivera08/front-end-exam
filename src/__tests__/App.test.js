import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Test suite for App', () => {
  it('renders without crashing', () => {
    shallow(<App store={{ getState: () => jest.fn() }} />);
  });
});
