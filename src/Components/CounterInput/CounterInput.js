import React, { useState } from 'react';
import add from '../../icons/add.svg';
import './CounterInput.scss';

const CounterInput = ({ handleCounterSubmit }) => {
  const [counter, setCounter] = useState({ title: '' });

  const handleInputChange = (e) => {
    setCounter({ title: e.target.value });
  };

  const handleSubmit = () => {
    handleCounterSubmit(counter);
    setCounter({ title: '' });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(counter);
    }
  };

  return (
    <div className="counter-input-container">
      <input
        value={counter.title}
        onKeyPress={handleKeyPress}
        placeholder="quick! add a counter here :)"
        className="counter-input"
        onChange={handleInputChange}
      />
      <img
        className="counter-add"
        src={add}
        alt="plus"
        onClick={() => handleSubmit(counter)}
      />
    </div>
  );
};

export default CounterInput;
