import React from 'react';

import LibroComp from './component/LibroComp';

import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const LibrosBox = ({ libros, prestar }) => {


    const libroslist = libros.map(aL => <LibroComp key={aL.id} libro={aL} prestar={prestar} />)

    return (
        <Paper>
            <Typography variant="h3">Libros</Typography>
            <List>
                {libroslist}
            </List>
        </Paper>
    )
}

export default LibrosBox;