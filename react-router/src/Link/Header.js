import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Header = () => {
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
