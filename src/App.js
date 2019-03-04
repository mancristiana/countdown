import React, { Component } from 'react';
import './App.css';

import Counter from './Counter';

import { getRandomPhoto } from './services/Unsplash.service';
import { getDuration } from './services/Time.service';
import { getContrast } from './services/Color.service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      color: '#fff',
      duration: ''
    };
  }

  componentDidMount() {
    getRandomPhoto('home').then(({ urls, color }) => {
      this.setState({ image: urls.full, color });
    });
    this.setState({ duration: getDuration('2019-06-01', new Date()) });
  }

  render() {
    const { image, color, duration } = this.state;
    const headerStyle = {
      backgroundColor: `${color}7F`
    };
    const textStyle = {
      color: getContrast(color)
    };
    return (
      <div className="App">
        <header className="App-header" style={headerStyle}>
          <img src={image} className="App-image" alt="logo" />
          <div className="App-text" style={textStyle}>
            <Counter {...duration} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
