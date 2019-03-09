import React, { useState } from 'react';
import './App.css';

import Counter from './components/counter/Counter';
import RandomImage from './components/randomImage/RandomImage';

const App = () => {
  const [color, setColor] = useState('#fff');
  return (
    <div className="App">
      <RandomImage setColor={color => setColor(color)} />
      <div className="App-counter">
        <Counter endDate={'2019-06-01'} color={color} />
      </div>
    </div>
  );
};

export default App;
