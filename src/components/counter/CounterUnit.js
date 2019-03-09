import React from 'react';
import './CounterUnit.css';

const CounterUnit = ({ unit, number }) => (
  <div className="CounterUnit">
    <div className="number">{number}</div>
    <div className="unit">{unit}</div>
  </div>
);

export default CounterUnit;
