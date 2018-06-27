import React, { Component } from 'react';
import logo from './logo.svg'; // importarndo a img numa variavel 
import './App.css'; // importando um objeto 111° 
// classe super app - método render : transforma jsx e devolve para as instâncias html - o retorno é um componente -
// jsx - manha para misturar tags de html e js
// jsx - mudanças n pode ter class (¨por causa q react já usa class p outra coisa) - className = class html
// <img src={logo} className="App-logo" alt="logo" /> coloca o valor img na variavel
//meta , img - precisa fehar em si msm COLOCAR A BARRA NO FINAL
// N EXECUTAR O METODO RENDER QUEM EXECUTA É O REACT DOM
// return - apenas um elemento - div 
class App extends Component {
  render() {
    return (
      <div id="cabecalho">
      <header>
        <h1>GATOS</h1>
        <h2 className="azul">GATOS SÃO DEMAIS </h2>
      </header>
      <p>Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup, you’re able to show clients a more complete version of your design without actually having to invest time and effort drafting copy.
      But despite all its benefits, seeing the same random Latin text in every design can get a little boring for you and your clients. So if you have a client who’s got a sense of humour or if you’re just tired of going the traditional route in your mockups, here are 15 creative and funny lorem ipsum text generators that are sure to lighten the mood at any client meeting.
      </p>
      <p>Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup, you’re able to show clients a more complete version of your design without actually having to invest time and effort drafting copy.
      But despite all its benefits, seeing the same random Latin text in every design can get a little boring for you and your clients. So if you have a client who’s got a sense of humour or if you’re just tired of going the traditional route in your mockups, here are 15 creative and funny lorem ipsum text generators that are sure to lighten the mood at any client meeting.
      </p>
     </div>
      
  

    );
  }
}



// CRIAÇÃO DA CLASS E ESPECIFICAÇÃO DE O QUE É  um objeto 222°  
export default App;
// index js imoportando --> exporrtar do app js de algum lugar
// EXPORTANDO  333° 

// ORIENTAÇÃO A OBJETOS - OUTRA MANEIRA DE PRORGRAMAR 
// OBJETOS QUE ORGANIZAM METODOS 
// FUNÇÃO - verificar todos os objetos para agrupa-los 
/* CLASSE E INSTÂNCIA - CLASSE TODOS  OBJETOS PADRONIZADOS IDEIA ABSTRATA DEFINIÇÃO DAS CARACTERISTICA 
 INSTÂNCIA OS OBJETOS  DEFINIÇÃO DAS CARACTERÍSTICAS 
 EXEMPLO GATOS : CLASSE pelo raça fome sede
 INSTÂNCIA: POMBAS, montanha, pequeno diferentes cores, nomes, tamanho, afetvidade
 HTML - aqueles itens do html com carasc. parecidas 
 header - msm nas pgs com pequenas diferenças 
 header - classe  e cada variação - instância

*/

      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
      // 