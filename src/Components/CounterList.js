import React from 'react';

const CounterList = ({ counters }) => {
  return (
    <div>
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>{counter.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CounterList;
