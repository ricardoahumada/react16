import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const TareaComp = ({ tarea, deleteT }) => (
    !tarea?null:(<TableRow key={tarea.id}>
        <TableCell>{tarea.id}</TableCell>
        <TableCell>{tarea.description}</TableCell>
        <TableCell>{tarea.tiempo}</TableCell>
        <TableCell>{tarea.proyecto}</TableCell>
        <TableCell><Button variant="contained" color="secondary" onClick={()=>deleteT(tarea.id)}>Borrar</Button></TableCell>
    </TableRow>)
);

export default TareaComp;