import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import TareasContainer from './containers/tareas';
import ProyectosContainer from './containers/proyectos'
import Navigation from './containers/Navigation'
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container fixed style={{textAlign: 'center'}}>
      <Navigation />
      <Switch>
        <Route exact path="/"><Redirect to="/tareas"/></Route>
        <Route path="/tareas" component={TareasContainer} />
        <Route exact path="/proyectos" component={ProyectosContainer} />
      </Switch>
    </Container>
  );
}

export default App;
