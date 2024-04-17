import React from 'react';
import ReactDOM from 'react-dom/client';
import FlavanoidsComp from './Flavanoids';
import GammaComp from './Gamma';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlavanoidsComp></FlavanoidsComp>
    <GammaComp></GammaComp>
  </React.StrictMode>
);

