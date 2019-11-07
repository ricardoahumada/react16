import React from 'react';
import logo from './logo.svg';
import './App.css';
import TareasContainer from './containers/tareas';
import ProyectosContainer from './containers/proyectos'

function App() {
  return (
    <div className="App">
      <TareasContainer />
      <hr />
      <ProyectosContainer />
      
    </div>
  );
}

export default App;
