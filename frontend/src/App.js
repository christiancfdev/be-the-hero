import React from 'react';
import './global.css';
import Routes from './routes';

//JSX (JavaScript XML) -> é quando o HTML está integrado dentro do JS
//Um componente no React é uma função que retorna HTML


function App() {
  //useState nos retorna um array com 2 posições
  //Array [valor , funçãoDeAtualização]
  
  return (
    
    <Routes />
  );
}

export default App;
