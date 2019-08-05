import React, { useState } from 'react';
import styles from './App.module.css';

import Counter from './components/counter/Counter';
// import RandomImage from './components/randomImage/RandomImage';
import Image from './components/image/Image';
import Header from './components/header/Header';

import { ColorContext } from './shared/Color.context';

const App = () => {
  const [color, setColor] = useState('#000');
  return (
    <div className={styles.app}>
      <ColorContext.Provider value={{ color, setColor }}>
        <Image />
        <div className={styles.counter}>
          {/* <Header>Templafy Ignite</Header> */}
          <Counter endDate={'2019-08-06 09:00'} />
        </div>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
