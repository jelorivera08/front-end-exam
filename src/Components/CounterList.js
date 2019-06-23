import React from 'react';
import inc from '../icons/add-circle.svg';
import dec from '../icons/minus-circle.svg';
import del from '../icons/delete.svg';

const CounterList = ({ counters }) => {
  return (
    <div>
      {counters.map((counter) => (
        <div key={counter.id}>
          <img src={del} alt="increment" />
          <div>{counter.title}</div>
          <div>{counter.count}</div>
          <img src={dec} alt="increment" />
          <img src={inc} alt="increment" />
        </div>
      ))}
    </div>
  );
};

export default CounterList;
