import React, { useState } from 'react';
import styles from './App.module.css';

import Counter from './components/counter/Counter';
import RandomImage from './components/randomImage/RandomImage';

import { ColorContext } from './shared/Color.context';

const App = () => {
  const [color, setColor] = useState('#fff');
  return (
    <div className={styles.app}>
      <ColorContext.Provider value={{ color, setColor }}>
        <RandomImage />
        <div className={styles.counter}>
          <Counter endDate={'2019-06-01'} />
        </div>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
