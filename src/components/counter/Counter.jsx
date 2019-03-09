import React from 'react';
import CounterDisplay from './CounterDisplay';
import { getDuration, getNow } from './../../shared/Time.service';

const Counter = ({ endDate }) => {
  const startDate = getNow();
  const duration = getDuration(startDate, endDate);

  return <CounterDisplay {...duration} />;
};

export default Counter;
