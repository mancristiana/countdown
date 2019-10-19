import React, { useState, useEffect, useContext } from "react";
import styles from "./RandomImage.module.css";

import { getRandomPhoto } from "../../shared/Unsplash.service";
import { ColorContext } from "../../shared/Color.context";

const RandomImage = ({ query }) => {
  const [image, setImage] = useState("");
  const { setColor } = useContext(ColorContext);
  useEffect(() => {
    getRandomPhoto(query).then(({ urls, color }) => {
      setImage(urls.full);
      setColor(color);
    });
  }, []);

  return <img src={image} className={styles.image} alt="logo" />;
};

export default RandomImage;
