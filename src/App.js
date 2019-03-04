import React, { Component } from 'react';
import './App.css';
import { getRandomPhoto } from './services/Unsplash.service';
import { getContrast } from './services/Color.service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      color: '#000000'
    };
  }

  componentDidMount() {
    getRandomPhoto('home').then(({ urls, color }) => {
      this.setState({ image: urls.full, color });
    });
  }

  render() {
    const { image, color } = this.state;
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
          <p className="App-text" style={textStyle}>
            <span className="number">33</span>remaining until moving in.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
