import { useState, useEffect } from 'react';

const useCounters = ({ counters, getCounters }) => {
  let totalCount = 0;
  const [countersState, setCountersState] = useState(counters);

  useEffect(() => {
    getCounters();
  }, []);

  useEffect(() => {
    getCountersTotal;
  }, [countersState]);

  const getCountersTotal = () => {
    countersState.forEach((counter) => {
      totalCount += counter.count;
    });
  };

  console.log(countersState);
  return [countersState, setCountersState, totalCount];
};

export default useCounters;
