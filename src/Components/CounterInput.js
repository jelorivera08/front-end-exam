import React, { useState } from 'react';
import add from '../icons/add.svg';

const CounterInput = ({ handleCounterSubmit }) => {
  const [counter, setCounter] = useState({ title: '' });

  const handleInputChange = (e) => setCounter({ title: e.target.value });

  return (
    <div>
      <input onChange={handleInputChange} />
      <img src={add} alt="plus" onClick={() => handleCounterSubmit(counter)} />
    </div>
  );
};

export default CounterInput;
