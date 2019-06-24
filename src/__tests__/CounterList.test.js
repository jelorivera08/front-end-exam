import React from 'react';
import CounterList from '../Components/CounterList/CounterList';
import { shallow } from 'enzyme';

describe('Test suite for Counter List', () => {
  it('renders without crashing', () => {
    shallow(<CounterList counters={[{ id: '123', title: 'foo', count: 0 }]} />);
  });

  it('renders No counters yet. when there are no counters ', () => {
    let wrapper = shallow(<CounterList counters={[]} />);
    expect(wrapper.find('div').props().children).toEqual('No counters yet.');
  });

  it('deletes when delete icon is clicked ', () => {
    let wrapper = shallow(
      <CounterList
        handleDeleteClick={jest.fn}
        counters={[{ id: '123', title: 'foo', count: 0 }]}
      />
    );
    wrapper.find('.counter-list-unit-del').simulate('click');
  });

  it('decrements when decrement icon is clicked ', () => {
    let wrapper = shallow(
      <CounterList
        handleDecrementClick={jest.fn}
        counters={[{ id: '123', title: 'foo', count: 0 }]}
      />
    );
    wrapper.find('.counter-list-unit-dec').simulate('click');
  });

  it('increments when increment icon is clicked ', () => {
    let wrapper = shallow(
      <CounterList
        handleIncrementClick={jest.fn}
        counters={[{ id: '123', title: 'foo', count: 0 }]}
      />
    );
    wrapper.find('.counter-list-unit-inc').simulate('click');
  });
});
