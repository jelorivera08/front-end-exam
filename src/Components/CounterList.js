import React from 'react';
import inc from '../icons/add-circle.svg';
import dec from '../icons/minus-circle.svg';
import del from '../icons/delete.svg';

const CounterList = ({
  counters,
  handleIncrementClick,
  handleDecrementClick,
  handleDeleteClick,
}) => {
  return (
    <div>
      {counters.map((counter) => (
        <div key={counter.id}>
          <img
            src={del}
            alt="delete"
            onClick={() => handleDeleteClick(counter.id)}
          />
          <div>{counter.title}</div>
          <div>{counter.count}</div>
          <img
            src={dec}
            alt="decrement"
            onClick={() => handleDecrementClick(counter.id)}
          />
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
