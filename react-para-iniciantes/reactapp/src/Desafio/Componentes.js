import React from 'react';
import Home from './Parts/Home';
import Menu from './Parts/Menu';
import Produtos from './Parts/Produtos';

const Componentes = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <>
      <Menu />
      <Component />
    </>
  );
};

export default Componentes;
