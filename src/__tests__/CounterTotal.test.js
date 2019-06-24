import React from 'react';
import CounterTotal from '../Components/CounterTotal/CounterTotal';
import { shallow } from 'enzyme';

describe('Test suite for Counter Total', () => {
  it('renders without crashing', () => {
    let wrapper = shallow(<CounterTotal totalCount={0} />);

    expect(wrapper.find('div').props().children).toEqual(['total: ', 0]);
  });
});
