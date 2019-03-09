import React, { useContext } from 'react';
import styles from './CounterUnit.module.css';
import { getContrast } from '../../shared/Color.service';
import { ColorContext } from '../../shared/Color.context';

const CounterUnit = ({ unit, number }) => {
  const { color } = useContext(ColorContext);
  const style = {
    background: color,
    color: getContrast(color)
  };
  return (
    <div className={styles.container} style={style}>
      <div className={styles.number}>{number}</div>
      <div className={styles.unit}>{unit}</div>
    </div>
  );
};

export default CounterUnit;
