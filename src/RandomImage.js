import React, { useState, useEffect } from 'react';
import './RandomImage.css';

import { getRandomPhoto } from './services/Unsplash.service';

const RandomImage = ({ setColor }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    console.log('IMAGE', image);
    getRandomPhoto('home').then(({ urls, color }) => {
      setImage(urls.full);
      setColor(color);
    });
  }, [image]);

  return <img src={image} className="RandomImage" alt="logo" />;
};

export default RandomImage;
