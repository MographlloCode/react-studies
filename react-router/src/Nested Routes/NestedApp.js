import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Footer from './Footer.js';
import Header from './Header.js';
import NotFound from './NotFound.js';
import Login from './Login';
import Produto from './Produto';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoDescricao from './ProdutoDescricao';

const NestedApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />}></Route>
          <Route path="avaliacao" element={<ProdutoAvaliacao />}></Route>
          <Route path="customizado" element={<ProdutoCustomizado />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default NestedApp;
