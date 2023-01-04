import React from 'react';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      <p>R$ {dados.preco}</p>
      <p>{dados.descricao}</p>
    </div>
  );
};

export default Produto;
