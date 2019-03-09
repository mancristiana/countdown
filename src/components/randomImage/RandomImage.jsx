import React, { useState, useEffect, useContext } from 'react';
import './RandomImage.css';

import { getRandomPhoto } from '../../shared/Unsplash.service';
import { ColorContext } from '../../shared/Color.context';

const RandomImage = () => {
  const [image, setImage] = useState('');
  const { setColor } = useContext(ColorContext);
  console.log('ColorContext', ColorContext);

  useEffect(() => {
    getRandomPhoto('home').then(({ urls, color }) => {
      setImage(urls.full);
      setColor(color);
    });
  }, []);

  return <img src={image} className="RandomImage" alt="logo" />;
};

export default RandomImage;
