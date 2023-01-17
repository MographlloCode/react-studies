import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 3rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  color: blue;
  font-size: 1.5rem;
`;

const Preco = styled.p`
  background: ${({ cor }) => cor};
  color: white;
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  color: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  padding: 1rem 0.5rem;
`;

const StyledApp = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <Titulo>Meu Titulo</Titulo>
      <Paragrafo>Meu textin</Paragrafo>
      <Preco cor="#000">R$2400,00</Preco>
      <Comprar ativo={ativo} onClick={handleClick}>
        Compre Aqui
      </Comprar>
    </div>
  );
};

export default StyledApp;
