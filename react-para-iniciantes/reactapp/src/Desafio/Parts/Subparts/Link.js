import React from 'react';

const Link = (props) => {
  return (
    <li>
      <a href={props.caminho}>{props.texto}</a>
    </li>
  );
};

export default Link;
