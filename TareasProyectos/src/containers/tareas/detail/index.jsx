import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const DetailTareasComponent = (props) => {
    // const tid = parseInt(props.match.params.tid);
    const detalle = props.tarea;
    const proyecto = props.proyecto;

    return !detalle?null:<Card>
        <CardContent>
            <Typography variant="h5" component="h2">{detalle.description}</Typography>

            <Typography color="textSecondary">Id: {detalle.id}</Typography>
            <Typography color="textSecondary">Duración: {detalle.tiempo}</Typography>
            <Typography color="textSecondary">Proyecto: {proyecto.nombre}</Typography>
        </CardContent>
        <CardActions>
            <Link to="/tareas"><Button size="small" >Volver</Button></Link>
        </CardActions>
    </Card>;
}

export default DetailTareasComponent;