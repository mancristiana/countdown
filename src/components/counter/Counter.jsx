import React, { useState, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';
import { getDurationFromNow } from './../../shared/Time.service';

const Counter = ({ endDate }) => {
  const [duration, setDuration] = useState(getDurationFromNow(endDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(getDurationFromNow(endDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <CounterDisplay {...duration} />;
};

export default Counter;
