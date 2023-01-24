import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smarthpone">Smartphone</Link>
    </>
  );
};

export default Home;
