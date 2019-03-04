import React from 'react';
import './Counter.css';
import { Units } from './services/Time.service';

const Counter = ({ days, hours, minutes, seconds }) => (
  <div className="Counter">
    <CounterBox unit={Units.Days} value={days} />
    <CounterBox unit={Units.Hours} value={hours} />
    <CounterBox unit={Units.Minutes} value={minutes} />
    <CounterBox unit={Units.Seconds} value={seconds} />
  </div>
);

export default Counter;

const CounterBox = ({ unit, value }) => (
  <div className="CounterBox">
    <div className="units">{value}</div>
    <div className="label">{unit}</div>
  </div>
);
