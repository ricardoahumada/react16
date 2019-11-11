import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProyectoComp from './ProyectoComp';

import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

import { fetchProyectos, deleteProyecto } from '../../actions/proyectosActionCreator';

/* const proyectos = [
    new Proyecto(1, 'Local Proyecto 1'),
    new Proyecto(2, 'Local Proyecto 2'),
];
 */
class ProyectosContainer extends React.Component {

    // state = { proyectos: [] }

    componentDidMount() {
        this.props.fetchProyectos();
    }

    /* deletePHandler = (pid) => {
        const proyectos = this.state.proyectos.filter(aP => aP.id !== pid);
        this.setState({ proyectos })
    } */

    render() {

        const proyectos = this.props.proyectos.map(aP => <ProyectoComp key={aP.id} proyecto={aP} deleteP={this.props.deleteProyecto} />)

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

const mapStateToProps = (state) => ({
    proyectos: state.proyectos.data,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { fetchProyectos, deleteProyecto},
        dispatch
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(ProyectosContainer);