import React from 'react';
import Titulo from './Subparts/Titulo';
import Produto from './Subparts/Produto';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </>
  );
};

export default Produtos;
