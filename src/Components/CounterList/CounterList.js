import React from 'react';
import inc from '../../icons/add-circle.svg';
import dec from '../../icons/minus-circle.svg';
import del from '../../icons/delete.svg';
import './CounterList.scss';

const CounterList = ({
  counters,
  handleIncrementClick,
  handleDecrementClick,
  handleDeleteClick,
}) => {
  if (counters.length === 0) {
    return <div className="counter-list-contaier">No counters yet.</div>;
  }

  return (
    <div className="counter-list-contaier">
      {counters.map((counter) => (
        <div className="counter-list-unit" key={counter._id}>
          <img
            className="counter-list-unit-del"
            src={del}
            alt="delete"
            onClick={() => handleDeleteClick(counter._id)}
          />
          <div className="counter-list-unit-title">{counter.title}</div>
          <div className="counter-list-unit-func">
            <img
              className="counter-list-unit-dec"
              src={dec}
              alt="decrement"
              onClick={() => handleDecrementClick(counter._id)}
            />
            <div>{counter.count}</div>
            <img
              className="counter-list-unit-inc"
              src={inc}
              alt="increment"
              onClick={() => handleIncrementClick(counter._id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterList;
