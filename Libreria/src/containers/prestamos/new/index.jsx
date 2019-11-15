import React from 'react';
import { withRouter } from 'react-router-dom';

import { Divider, TextField, Typography, Button } from '@material-ui/core';

import Prestamo from '../../../models/prestamo';
import './index.css';

const today = new Date().toISOString().substring(0, 10);
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

class NewPrestamo extends React.Component {
    state = { fecha_inicio: {}, fecha_fin: {}, id_usuario: 0, libro: 0 }


    componentDidMount() {

        const prestamo = new Prestamo(
            0,
            this.props.libro.id,
            today,
            tomorrow.toISOString().substring(0, 10),
            this.props.usuario.id
        );
        this.setState({ ...prestamo })
    }

    updatePrestamo = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        // console.log(name, value);

        const prestamo = this.state;
        let isOk = true;
        if (name === 'fecha_inicio' && (value > prestamo.fecha_fin || value < today)) isOk = false;
        if (name === 'fecha_fin' && (value <= prestamo.fecha_inicio)) isOk = false;

        if (isOk) {
            prestamo[name] = value;
            this.setState({ ...prestamo });
        }

    }


    prestaLibro = (e) => {
        e.preventDefault();
        const prestamo = this.state;
        /* this.props.prestarH(prestamo);
        this.props.history.push('/prestamos') */

        fetch('http://localhost:8080/prestamos', {
            method: 'POST',
            body: JSON.stringify(prestamo),
            headers: { 'Content-type': 'application/json' }
        }).
            then(response => response.json()).
            then(prestamo => {
                this.props.prestarH(prestamo);
                this.props.history.push('/prestamos');
            });
    }

    render() {

        return (
            <form onSubmit={this.prestaLibro} className="new-prestamo">
                <Typography variant="h4">Nuevo Prestamo</Typography>
                <Divider />
                <div>
                    {this.props.libro.titulo}
                </div>
                <Divider />
                <div>
                    <TextField
                        variant="filled"
                        label="Fecha inicio"
                        type="date"
                        value={this.state.fecha_inicio}
                        name="fecha_inicio"
                        onChange={this.updatePrestamo}
                    />
                </div>
                <Divider />
                <div>
                    <TextField
                        variant="filled"
                        label="Fecha fin"
                        type="date"
                        value={this.state.fecha_fin}
                        name="fecha_fin"
                        onChange={this.updatePrestamo}
                    />
                </div>
                <Divider />

                <div>
                    <Button type="submit" variant="outlined" >Prestar</Button>
                </div>
            </form>
        );
    }

}

export default withRouter(NewPrestamo);