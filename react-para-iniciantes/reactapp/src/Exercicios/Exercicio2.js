import React from 'react';

const Exercicio2 = () => {
  // Organize os produtos como mostrado no vídeo
  // Mostre apenas produtos que forem mais caros que R$ 1500
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace('R$ ', '')) > 1500,
  );

  console.log(dados);

  return (
    <section id="Exercicio2">
      <h1>Exercicio 2</h1>
      <div id="enunciadoEx2">
        {dados.map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h2>{nome}</h2>
            <p>Preço: {preco}</p>
            <ul>
              {cores.map((cor) => (
                <li style={{ backgroundColor: cor, color: '#fff' }} key={cor}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exercicio2;
