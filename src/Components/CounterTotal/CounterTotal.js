import React from 'react';
import './CounterTotal.scss';

const CounterTotal = ({ totalCount }) => {
  return <div className="counter-total">total: {totalCount}</div>;
};

export default CounterTotal;
