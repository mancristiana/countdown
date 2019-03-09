import React, { useContext } from 'react';
import './CounterUnit.css';
import { getContrast } from '../../shared/Color.service';
import { ColorContext } from '../../shared/Color.context';

const CounterUnit = ({ unit, number }) => {
  const { color } = useContext(ColorContext);
  const style = {
    background: color,
    color: getContrast(color)
  };
  return (
    <div className="CounterUnit" style={style}>
      <div className="number">{number}</div>
      <div className="unit">{unit}</div>
    </div>
  );
};

export default CounterUnit;
