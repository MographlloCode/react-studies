import React from 'react';
import { BrowserRouter, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota');
  });

  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <br />
      <NavLink to="sobre">Sobre</NavLink>
      <br />
      <NavLink to="login">Login</NavLink>
    </nav>
  );
};

export default Header;
