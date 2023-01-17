import React from 'react';
import foto from './img/foto.png';
import './Images.css';
import Nova from './svg/Nova';

const ImagesApp = () => {
  return (
    <div>
      <p className="fundo"></p>
      <img src={foto} />
      <Nova />
    </div>
  );
};

export default ImagesApp;
