import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { NavLink } from 'react-router-dom';

const TareaComp = ({ tarea, deleteT, proyecto }) => (
    !tarea?null:(<TableRow key={tarea.id}>
        <TableCell>{tarea.id}</TableCell>
        <TableCell>{tarea.description}</TableCell>
        <TableCell>{tarea.tiempo}</TableCell>
        <TableCell>{proyecto?proyecto.nombre:null}</TableCell>
        <TableCell><NavLink to={`/tareas/${tarea.id}`}><VisibilityIcon /></NavLink></TableCell>
        <TableCell><Button variant="contained" color="secondary" onClick={()=>deleteT(tarea.id)}>Borrar</Button></TableCell>
    </TableRow>)
);

export default TareaComp;