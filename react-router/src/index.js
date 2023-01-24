import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterApp from './Router/RouterApp';
import LinkApp from './Link/LinkApp';
import ParamsApp from './useParams/ParamsApp';
import NestedApp from './Nested Routes/NestedApp';
import HeadApp from './Head/HeadApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HeadApp />
  </>,
);
