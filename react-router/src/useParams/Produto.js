import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const location = useLocation();

  const search = new URLSearchParams(location.search);

  console.log(params);
  return <div>Produto</div>;
};

export default Produto;
