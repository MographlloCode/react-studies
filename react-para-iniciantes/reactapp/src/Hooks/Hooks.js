import React from 'react';
import Produto from './Effect/Produto';

const Hooks = () => {
  // const [dados, setDados] = React.useState(null);
  // const [carregando, setCarregando] = React.useState(null);

  // async function handleClick(event) {
  //   setCarregando(true);
  //   const nomeDoProduto = event.target.innerText;
  //   const response = await fetch(
  //     `https://ranekapi.origamid.dev/json/api/produto/${nomeDoProduto}`,
  //   );
  //   const json = await response.json();
  //   setDados(json);
  //   setCarregando(false);
  // }

  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        tablet
      </button>
      {produto && <Produto produto={produto} />}
    </>
  );
};

export default Hooks;
