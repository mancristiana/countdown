import React, { useContext } from 'react';
import styles from './Header.module.css';
import { ColorContext } from '../../shared/Color.context';

const CounterUnit = ({ children }) => {
  const { color } = useContext(ColorContext);
  return (
    <div className={styles.header} style={{ color }}>
      {children}
    </div>
  );
};

export default CounterUnit;
