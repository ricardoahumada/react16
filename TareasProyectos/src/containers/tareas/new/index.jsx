import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';

import Tarea from  '../../../models/tarea';


class NewTareasComponent extends Component {
    state = {
        description:'', tiempo: 0, proyecto:0
    };

    redirectToTarget = () => {
        this.props.history.push(`/tareas`)
    }

    handleDescriptionChange = (e) => {
        const desc = e.target.value;
        if (!desc.match(/[0-9]/g)) this.setState({ description: desc });
    }

    handleTiempoChange = (e) => {
        this.setState({ tiempo: e.target.value });
    }

    handleProyectoChange = (e) => {
        this.setState({ proyecto: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const description= this.state.description.trim();
        const tiempo= this.state.tiempo;
        const proyecto= this.state.proyecto;

        this.props.addTarea(new Tarea(0,description, tiempo,proyecto));
        this.setState({description:'',tiempo:0,proyecto:0});
        this.redirectToTarget();
    }

    render() {
        console.log('New Tarea:', this.props);

        return (
            <form className="tareaForm" onSubmit={this.handleSubmit}>
                <h2>Nueva Tarea</h2>
                <p><input
                    type="text"
                    placeholder="Descripcion"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                /></p>
                <p><input
                    type="number"
                    placeholder="Tiempo"
                    value={this.state.tiempo}
                    min={1}
                    max={16}
                    onChange={this.handleTiempoChange}
                /></p>

                <p><input
                    type="number"
                    placeholder="Proyecto"
                    value={this.state.proyecto}
                    min={1}
                    onChange={this.handleProyectoChange}
                /></p>

                <button type="submit">Crear</button>
            </form>
        );
    }
}

export default (NewTareasComponent);
