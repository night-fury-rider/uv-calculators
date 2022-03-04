import { useState } from 'react';

const useCounter = (initialCount = 0, changeValue) => {
  const [counter, setCounter] = useState(initialCount);

  const incrementCounter = () => {
    setCounter(counter => counter + changeValue);
  };

  const decrementCounter = () => {
    setCounter(counter => counter - changeValue);
  };

  const resetCounter = () => {
    setCounter(initialCount);
  };

  return [counter, incrementCounter, decrementCounter, resetCounter];
};

export default useCounter;
