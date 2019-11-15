import React, { useState, useEffect, useMemo } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import PrestamoComp from './component/PrestamoComp'
import NewPrestamo from './new'

import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const style = {
    backgroundColor: 'yellow',
    borderRadius: '5px',
    padding: '5px'
};

const MAX = 4;


/* 

class PrestamosBox extends React.Component {

    state = { prestamos: [] }

    componentDidMount() {
    }

    prestarHandler = (prestamo) => {
        prestamo.id = new Date().getTime();
        const prestamos = this.state.prestamos;
        prestamos.push(prestamo);
        this.setState({ prestamos });
        this.props.prestado(prestamo.libro);
    }

    devolverHandler = (idLibro) => {
        console.log('devolverHandler:', idLibro);
        const prestamos = this.state.prestamos.filter(aL => aL.libro !== idLibro);
        this.setState({ prestamos });
        this.props.devuelto(idLibro);
    }


    render() {
        const prestamo = this.props.prestamo;
        const usuario = this.props.usuario;
        const prestamos = this.state.prestamos.map(aP => <PrestamoComp key={aP.id} prestamo={aP} devolver={this.devolverHandler} />)
        const num = this.state.prestamos.length;

        return (
            <section>
                <Typography variant="h3">Prestamos</Typography>
                {num >= MAX ? <Typography variant="h5" style={style}>Máximo de préstamos alcanzado!!</Typography> : null}
                <Paper>
                    <List>
                        {prestamos}
                        {num === 0 ? <Typography variant="h5" style={style}>Sin prestamos</Typography> : null}

                    </List>
                </Paper>

                {!prestamo ? null : <Paper>
                    <NewPrestamo libro={prestamo} usuario={usuario} prestarH={this.prestarHandler} />
                </Paper>}
            </section >
        )
    }
}

export default PrestamosBox;

 */
const PrestamosBox = ({ prestamo, usuario, prestado, devuelto }) => {
    const [num, setNum] = useState(0);
    const [prestamos, setPrestamos] = useState([]);

    const prestarHandler = (prestamo) => {
        prestamo.id = new Date().getTime();
        prestamos.push(prestamo);
        setPrestamos(prestamos);
        prestado(prestamo.libro);
    }

    const devolverHandler = (idLibro) => {
        setPrestamos(prestamos.filter(aP => aP.libro !== idLibro));
        devuelto(idLibro);
    }

    useEffect(() => {
        setNum(prestamos.length);
    }, [prestamos.length]);

    const showNew = !prestamo || num >= MAX ? null : (
        <Paper>
            <NewPrestamo libro={prestamo} usuario={usuario} prestarH={prestarHandler} />
        </Paper>
    );

    return (
        <section>
            <Switch>
                <Route exact path="/prestamos">

                    <Typography variant="h3">Prestamos</Typography>
                    {num >= MAX ? <Typography variant="h5" style={style}>Máximo de préstamos alcanzado!!</Typography> : null}
                    <Paper>
                        <List>
                            {prestamos.map(aP => <PrestamoComp key={aP.id} prestamo={aP} devolver={devolverHandler} />)}
                            {num === 0 ? <Typography variant="h5" style={style}>Sin prestamos</Typography> : null}

                        </List>
                    </Paper>
                </Route>

                <Route exact path="/prestamos/nuevo">
                    {showNew}
                </Route>
            </Switch>
        </section >
    );
}

export default PrestamosBox;
