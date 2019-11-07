import React from 'react';
import Tarea from '../../models/tarea';
import TareaComp from './TareaComp';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const tareas = [
    new Tarea(1, 'Tarea 1', 5, 1),
    new Tarea(2, 'Tarea 2', 7, 1),
    new Tarea(3, 'Tarea 3', 4, 2),
    new Tarea(4, 'Tarea 4', 6, 2),
];

class TareasContainer extends React.Component {

    state = { tareas: [] }

    componentDidMount() {
        this.setState({ tareas });
    }

    deleteTHandler=(tid)=>{
        const tareas= this.state.tareas.filter(aT=> aT.id!==tid);
        this.setState({tareas})
    }

    render() {

        const tareas = this.state.tareas.map(aT => <TareaComp key={aT.id} tarea={aT} deleteT={this.deleteTHandler} />)

        return (
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tareas}
                    </TableBody>
                </Table>
            </Paper>

        );
    }
}

export default TareasContainer;