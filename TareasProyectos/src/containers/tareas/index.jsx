import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TareaComp from './TareaComp';
import NewTareasComponent from './new';
import DetailTareasComponent from './detail';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';

import { Switch, Route, NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { fetchTareas, deleteTarea } from '../../actions/tareasActionCreator';
import { fetchProyectos } from '../../actions/proyectosActionCreator';

/* const tareas = [
    new Tarea(1, 'Tarea 1', 5, 1),
    new Tarea(2, 'Tarea 2', 7, 1),
    new Tarea(3, 'Tarea 3', 4, 2),
    new Tarea(4, 'Tarea 4', 6, 2),
]; */

const getProy = (id, proyectos) => {
    return proyectos.find(aP => aP.id === id);
}

const getTar = (id, tareas) => {
    return tareas.find(aT => aT.id === parseInt(id));
}

class TareasContainer extends React.Component {

    //state = { tareas: [] }

    componentDidMount() {
        /* fetch('http://localhost:8080/tareas', { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                this.setState({ tareas: json });
            })
            .catch(err=>{console.log('err:',err)}); */

        this.props.fetchTareas();
        this.props.fetchProyectos();
    }

    /* deleteTHandler = (tid) => {
        const tareas = this.state.tareas.filter(aT => aT.id !== tid);
        this.setState({ tareas })
    }

    newTareaHandle = (newT) => {
        console.log('newT:', newT);

        const tareas = this.state.tareas;
        tareas.push(newT);
        this.setState({ tareas })
    } */

    render() {
        // console.log('tareas:', this.props);

        // const tareas = this.state.tareas.map(aT => <TareaComp key={aT.id} tarea={aT} deleteT={this.deleteTHandler} addTarea={this.newTareaHandle} />)
        const proyectos = this.props.proyectos;

        const tareas = this.props.tareas.map(aT => <TareaComp key={aT.id} tarea={aT} deleteT={this.props.deleteTarea} proyecto={getProy(aT.proyecto, proyectos)} />)

        const match = this.props.match;

        return (
            <Switch>
                <Route exact path={`${match.url}`}>
                    <Paper>
                        <h2>Tareas</h2>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Tiempo</TableCell>
                                    <TableCell>Proyecto</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tareas}
                            </TableBody>
                        </Table>
                        <p style={{ paddingBottom: "1em" }}>
                            <NavLink to={`${match.url}/new`}><Button variant="contained" color="primary"><AddIcon /></Button></NavLink>
                        </p>
                    </Paper>
                </Route>
                <Route exact path={`${match.url}/new`} component={(props) => <NewTareasComponent {...props} proyectos={this.props.proyectos} />} />
                <Route exact path={`${match.url}/:tid`} render={(props) => {
                    const tarea = getTar(props.match.params.tid, this.props.tareas);
                    const proyecto = !tarea ? null : getProy(tarea.id, this.props.tareas);

                    return <DetailTareasComponent
                        {...props}
                        tarea={tarea}
                        proyecto={proyecto}
                    />
                }} />
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({
    tareas: state.tareas.data,
    proyectos: state.proyectos.data,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { fetchTareas, deleteTarea, fetchProyectos },
        dispatch
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(TareasContainer);