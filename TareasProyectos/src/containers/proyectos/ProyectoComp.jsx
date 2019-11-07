import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const ProyectoComp = ({ proyecto, deleteP }) => (
    !proyecto ? null : (
        <ListItem>
            <ListItemText primary={proyecto.nombre} />
            <ListItemSecondaryAction>
                <Button color="secondary" onClick={() => deleteP(proyecto.id)}> <DeleteIcon /></Button >
            </ListItemSecondaryAction>
        </ListItem>

    )
);

export default ProyectoComp;