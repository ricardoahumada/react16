import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Hola from './components/hola';
// import ListaUsuarios from './components/lista';
import Tabla from './table';

function App() {
  return (
    <div className="App">
      <h1>Tablas</h1>
      <Tabla min={2} max={6}/>
    </div>
  );
}

export default App;
