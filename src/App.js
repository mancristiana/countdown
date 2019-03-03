import React, { Component } from 'react';
import './App.css';
import { getRandomPhoto } from './Unsplash.service';

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

  getContrast(hexcolor) {
    const r = parseInt(hexcolor.substr(1, 2), 16);
    const g = parseInt(hexcolor.substr(3, 2), 16);
    const b = parseInt(hexcolor.substr(5, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }

  render() {
    const { image, color } = this.state;
    const headerStyle = {
      backgroundColor: `${color}7F`
    };
    const textStyle = {
      color: this.getContrast(color)
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
