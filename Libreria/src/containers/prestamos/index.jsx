import React from 'react';

import PrestamoComp from './component/PrestamoComp'
import NewPrestamo from './new'

import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const style = {
    backgroundColor: 'yellow',
    borderRadius:'5px',
    padding: '5px'
};

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

    devolverHandler=(idLibro)=>{
        console.log('devolverHandler:',idLibro);
        const prestamos = this.state.prestamos.filter(aL=>aL.libro!==idLibro);
        this.setState({ prestamos });
        this.props.devuelto(idLibro);        
    }
    

    render() {
        const prestamo = this.props.prestamo;
        const usuario = this.props.usuario;
        const prestamos = this.state.prestamos.map(aP => <PrestamoComp key={aP.id} prestamo={aP} devolver={this.devolverHandler}/>)
        const num = this.state.prestamos.length;

        return (
            <section>
                <Typography variant="h3">Prestamos</Typography>
                {num >= 4 ? <Typography variant="h5" style={style}>Máximo de préstamos alcanzado!!</Typography> : null}
                <Paper>
                    <List>
                        {prestamos}
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