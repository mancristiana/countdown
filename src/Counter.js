import React from 'react';
import './Counter.css';
import CounterUnit from './CounterUnit';
import { Units } from './services/Time.service';

const Counter = ({ days, hours, minutes, seconds }) => (
  <div className="Counter">
    <CounterUnit unit={Units.Days} number={days} />
    <CounterUnit unit={Units.Hours} number={hours} />
    <CounterUnit unit={Units.Minutes} number={minutes} />
    <CounterUnit unit={Units.Seconds} number={seconds} />
  </div>
);

export default Counter;
