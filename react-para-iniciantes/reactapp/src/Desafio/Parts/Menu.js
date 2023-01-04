import React from 'react';
import Link from './Subparts/Link';

const Menu = () => {
  return (
    <nav>
      <ul>
        <Link caminho="/" texto="Home" />
        <Link caminho="/produtos" texto="Produtos" />
      </ul>
    </nav>
  );
};

export default Menu;
