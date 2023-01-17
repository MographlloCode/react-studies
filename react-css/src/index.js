import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import StyledApp from './StyledComponents/StyledApp';
import CssFrameworksApp from './Frameworks/CssFrameworksApp';
import ReactBootstrapApp from './Frameworks/ReactBootstrapApp';
import AppProduto from './Animations/AppProduto';
import ProjectApp from './Animations/ProjectSlide/ProjectApp';
import ImagesApp from './Images/ImagesApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImagesApp />
  </React.StrictMode>,
);
