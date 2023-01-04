import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  if (global.dados === null) return null;
  console.log(global.dados);
  return (
    <div>
      Produto:{' '}
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default Produto;
