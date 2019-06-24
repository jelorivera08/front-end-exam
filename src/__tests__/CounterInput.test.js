import React from 'react';
import CounterInput from '../Components/CounterInput/CounterInput';
import { shallow } from 'enzyme';

describe('Test suite for Counter Input', () => {
  it('renders without crashing', () => {
    shallow(<CounterInput handleCounterSubmit={jest.fn} />);
  });

  it('should be able to handle click on plus icon', () => {
    let wrapper = shallow(<CounterInput handleCounterSubmit={jest.fn} />);
    let wrapperInput = wrapper.find('img');
    wrapperInput.simulate('click');
  });

  it('should be able to handle change on input', () => {
    let wrapper = shallow(<CounterInput handleCounterSubmit={jest.fn} />);
    let wrapperInput = wrapper.find('input');
    wrapperInput.simulate('change', { target: { value: 'foo' } });
  });

  it('should be able to handle when user clicks enter', () => {
    let wrapper = shallow(<CounterInput handleCounterSubmit={jest.fn} />);
    let wrapperInput = wrapper.find('input');
    wrapperInput.simulate('keypress', { key: 'Enter' });
  });
});
