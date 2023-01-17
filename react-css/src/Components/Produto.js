import React from 'react';
import styles from './Produto.module.css';

const Produto = () => {
  return (
    <>
      <h1 className={styles.tituloProduto}>Notebook</h1>
      <p className={styles.precoProduto}>R$4000,00</p>
      <button className={styles.comprarProduto}>Comprar</button>
    </>
  );
};

export default Produto;
