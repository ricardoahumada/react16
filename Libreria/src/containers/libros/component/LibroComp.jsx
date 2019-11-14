import React from 'react';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { Button, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

const LibroComp = ({ libro, prestar }) => (<ListItem>
    <ListItemAvatar>
        <ChromeReaderModeIcon />
    </ListItemAvatar>
    <ListItemText primary={libro.titulo} secondary={
        <Typography variant="body2" component="div">
            {libro.autor} - {libro.isbn}<br />
            <Button
                variant="outlined"
                size="medium"
                onClick={() => prestar(libro.id)}
                disabled={libro.prestado ? true : false} > {libro.prestado ? 'Prestado' : 'Prestar'}</Button>
        </Typography>} />
</ListItem>);

export default LibroComp;