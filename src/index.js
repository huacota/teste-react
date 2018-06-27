import React from 'react';
// const React = require(`react`); essas duas linhas são iguais - react tem o proprip manipulador n tem reactdom

import ReactDOM from 'react-dom';
import './index.css'; // importa e o próprio mecanismo 
import App from './App';  // IMPORTAÇÃO 444 
import registerServiceWorker from './registerServiceWorker'; // é o registro service work 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker(); 
// reactdom objeto metodo render função cria o html -- > a única interação entre react é esse método - oq deve aparecer na pg inicial
// react usa js atual 
// import App from './App' IMORTANDO APP DA PASTA ATUAL - TEM Q TER O EXXPORT EM APP.JS DE ONDE ELE IRA IMPORTAR
// INSTÂNCIANDO O ELEMENTO APP  555