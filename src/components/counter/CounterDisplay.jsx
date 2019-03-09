import React from 'react';
import styles from './CounterDisplay.module.css';
import CounterUnit from './CounterUnit';
import { Units } from '../../shared/Time.service';

const CounterDisplay = ({ days, hours, minutes, seconds }) => (
  <div className={styles.flex}>
    <CounterUnit unit={Units.Days} number={days} />
    <CounterUnit unit={Units.Hours} number={hours} />
    <CounterUnit unit={Units.Minutes} number={minutes} />
    <CounterUnit unit={Units.Seconds} number={seconds} />
  </div>
);

export default CounterDisplay;
