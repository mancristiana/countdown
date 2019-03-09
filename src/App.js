import React, { PureComponent } from 'react';
import './App.css';

import Counter from './Counter';
import RandomImage from './RandomImage';

import { getContrast } from './shared/Color.service';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: '#fff',
      duration: {
        days: 6,
        minutes: 15,
        hours: 1,
        seconds: 32
      }
    };
  }

  setColor = color => {
    this.setState(color);
  };

  render() {
    console.log('RENDERING APP');
    const { color, duration } = this.state;
    const headerStyle = {
      backgroundColor: `${color}7F`
    };
    const textStyle = {
      color: getContrast(color)
    };
    return (
      <div className="App">
        <header className="App-header" style={headerStyle}>
          <RandomImage setColor={color => console.log(color)} />
          <div className="App-text" style={textStyle}>
            <Counter {...duration} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
