import React from 'react';
import inc from '../icons/add-circle.svg';
import dec from '../icons/minus-circle.svg';
import del from '../icons/delete.svg';

const CounterList = ({ counters, handleIncrementClick }) => {
  return (
    <div>
      {counters.map((counter) => (
        <div key={counter.id}>
          <img src={del} alt="delete" />
          <div>{counter.title}</div>
          <div>{counter.count}</div>
          <img src={dec} alt="decrement" />
          <img
            src={inc}
            alt="increment"
            onClick={() => handleIncrementClick(counter.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default CounterList;
