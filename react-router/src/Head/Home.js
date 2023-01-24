import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      {/* <Head title="Home" description="Essa é a descricao da home" /> */}
      <Helmet>
        <title>Estudos | Home</title>
        <meta name="description" content="Essa é a pagina Home" />
      </Helmet>
      <h1>Home</h1>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smarthpone">Smartphone</Link>
    </>
  );
};

export default Home;
