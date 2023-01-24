import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Footer from './Footer.js';
import Header from './Header.js';
import NotFound from './NotFound.js';
import Login from './Login';

const LinkApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default LinkApp;
