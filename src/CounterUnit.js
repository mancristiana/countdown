import React from 'react';
import './CounterUnit.css';

const CounterUnit = ({ unit, value }) => (
  <div className="CounterUnit">
    <div className="units">{value}</div>
    <div className="label">{unit}</div>
  </div>
);

export default CounterUnit;
