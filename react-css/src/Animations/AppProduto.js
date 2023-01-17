import React from 'react';
import ProdutoAnimado from './ProdutoAnimado';
import './AppProduto.css';

const AppProduto = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <ProdutoAnimado />}
    </>
  );
};

export default AppProduto;
