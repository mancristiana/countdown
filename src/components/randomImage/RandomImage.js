import React, { useState, useEffect } from 'react';
import './RandomImage.css';

import { getRandomPhoto } from '../../shared/Unsplash.service';

const RandomImage = ({ setColor }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    getRandomPhoto('home').then(({ urls, color }) => {
      setImage(urls.full);
      setColor(color);
    });
  }, []);

  return <img src={image} className="RandomImage" alt="logo" />;
};

export default RandomImage;
