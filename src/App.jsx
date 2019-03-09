import React, { useState } from 'react';
import './App.css';

import Counter from './components/counter/Counter';
import RandomImage from './components/randomImage/RandomImage';

import { getContrast } from './shared/Color.service';

const App = () => {
  const [color, setColor] = useState('#fff');

  const headerStyle = {
    backgroundColor: `${color}7F`
  };

  const textStyle = {
    color: getContrast(color)
  };

  return (
    <div className="App">
      <header className="App-header" style={headerStyle}>
        <RandomImage setColor={color => setColor(color)} />
        <div className="App-text" style={textStyle}>
          <Counter endDate={'2019-06-01'} />
        </div>
      </header>
    </div>
  );
};

export default App;
