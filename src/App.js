import React, { PureComponent } from 'react';
import './App.css';

import Counter from './components/counter/Counter';
import RandomImage from './RandomImage';

import { getContrast } from './shared/Color.service';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: '#fff'
    };
  }

  setColor = color => {
    this.setState(color);
  };

  render() {
    console.log('RENDERING APP');
    const { color } = this.state;
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
            <Counter endDate={'2019-06-01'} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
