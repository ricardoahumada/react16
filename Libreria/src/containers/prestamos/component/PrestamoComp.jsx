import React from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Button, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

const PrestamoComp = ({ prestamo, devolver }) => (<ListItem>
    <ListItemAvatar>
        <AssignmentIcon />
    </ListItemAvatar>
    <ListItemText primary={prestamo.libro} secondary={
        <Typography variant="body2" component="div">
            {prestamo.fecha_inicio} - {prestamo.fecha_fin}<br />
            <Button variant="outlined" size="medium" onClick={() => devolver(prestamo.libro)}>Devolver</Button>
        </Typography>} />
</ListItem>);

export default PrestamoComp;