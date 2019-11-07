import React from 'react';
import Proyecto from '../../models/proyecto';
import ProyectoComp from './ProyectoComp';

import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

const proyectos = [
    new Proyecto(1, 'Proyecyo 1'),
    new Proyecto(2, 'Proyecyo 2'),
];

class ProyectosContainer extends React.Component {

    state = { proyectos: [] }

    componentDidMount() {
        this.setState({ proyectos });
    }

    deletePHandler = (pid) => {
        const proyectos = this.state.proyectos.filter(aP => aP.id !== pid);
        this.setState({ proyectos })
    }

    render() {

        const proyectos = this.state.proyectos.map(aP => <ProyectoComp key={aP.id} proyecto={aP} deleteP={this.deletePHandler} />)

        return (
            <Paper>
                <h2>Proyectos</h2>
                <List>
                    {proyectos}
                </List>
            </Paper>

        );
    }
}

export default ProyectosContainer;