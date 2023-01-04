import React from 'react';

const Exercicio1 = () => {
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <section id="Exercicio1">
      <h1>Exercicio 1</h1>
      <div id="enunciadoEx1">
        <ul>
          <li>Cliente: {dados.cliente}</li>
          <li>Idade: {dados.idade}</li>
          <li>Produtos:</li>
          <ul>
            {dados.compras.map(({ nome, preco }) => (
              <li key={nome}>
                Produto: {nome}
                <br />
                Preço: {preco}
              </li>
            ))}
          </ul>
          <li>
            Situação:
            <span style={{ color: dados.ativa ? 'green' : 'red' }}>
              {dados.ativa ? ' Ativa' : ' Inativa'}
            </span>
          </li>
          <li>Total: {total}</li>
          {total > 10000 && <p>Você está gastando muito</p>}
        </ul>
      </div>
    </section>
  );
};

export default Exercicio1;
