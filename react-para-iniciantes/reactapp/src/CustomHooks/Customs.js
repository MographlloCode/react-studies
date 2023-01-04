import React from 'react';
import useLocalStorage from './LocalStorage';
import useFetch from './Fetch';

const Customs = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  const { request, data, loading, error } = useFetch();
  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>Erro</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>{produto}</p>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>
          Notebook
        </button>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>
          Smartphone
        </button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default Customs;
