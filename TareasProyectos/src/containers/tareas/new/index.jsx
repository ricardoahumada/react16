import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addTarea, addTareaAPI } from '../../../actions/tareasActionCreator';

import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import Tarea from '../../../models/tarea';
import './index.css';


class NewTareasComponent extends Component {
    state = {
        description: '', tiempo: 0, proyecto: 0, errors: {}
    };

    redirectToTarget = () => {
        this.props.history.push(`/tareas`)
    }

    handleDescriptionChange = (e) => {
        const desc = e.target.value;
        if (!desc.match(/[0-9]/g)) this.setState({ description: desc });
    }

    handleTiempoChange = (e, val) => {
        this.setState({ tiempo: val });
    }

    handleProyectoChange = (e) => {
        this.setState({ proyecto: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const description = this.state.description.trim();
        const tiempo = this.state.tiempo;
        const proyecto = this.state.proyecto;

        let tareaN = new Tarea(0, description, tiempo, proyecto);

        if (description && tiempo && proyecto) {
            this.props.addTareaAPI(tareaN);
            this.setState({ description: '', tiempo: 0, proyecto: 0 });
            this.redirectToTarget();
        } else {
            const errors = {
                description: description ? '' : 'Añade una descripción',
                tiempo: tiempo ? '' : 'Añade a duración (1-16)',
                proyecto: proyecto ? '' : 'Selecciona un proyecto',
            };
            this.setState({ errors })
        }
    }

    render() {
        // console.log('New Tarea:', this.props, this.state);

        const errors = this.state.errors;
        const proyectos = !this.props.proyectos ? null : this.props.proyectos.map(aP => <MenuItem value={aP.id} key={aP.id}>{aP.nombre}</MenuItem>)

        return (
            <form className="tareaForm" onSubmit={this.handleSubmit}>
                <h2>Nueva Tarea</h2>
                <Divider />
                <div>
                    {errors.description ? <Chip label={errors.description} color="secondary" /> : null}
                    <br /><br /><TextField
                        variant="filled"
                        label="Descripción"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                    />
                </div>
                <Divider />

                <div>
                    {errors.tiempo ? <Chip label={errors.tiempo} color="secondary" /> : null}
                    <br /><br />
                    <div className="myslider">

                        <Typography id="discrete-slider" gutterBottom>Tiempo</Typography>
                        <Slider
                            variant="filled"

                            defaultValue={0}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay={"auto"}
                            value={this.state.tiempo}
                            step={1}
                            min={1}
                            max={16}
                            onChange={this.handleTiempoChange}
                        />
                    </div>
                </div>
                <Divider />

                <div>
                    {errors.proyecto ? <Chip label={errors.proyecto} color="secondary" /> : null}
                    <br /><br />
                    <Select
                        variant="filled"
                        value={this.state.proyecto}
                        onChange={this.handleProyectoChange}
                        labelWidth={50}
                    >
                        <MenuItem value={0} disabled={true}>Proyecto</MenuItem>
                        {proyectos}
                    </Select>

                </div>
                <Divider />

                <div>
                    <Button type="submit" variant="contained" color="primary">Crear</Button>
                </div>

            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    proyectos: state.proyectos.data,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { addTarea, addTareaAPI },
        dispatch
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(NewTareasComponent);