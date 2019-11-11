import React from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Navigation = () => (
    <BottomNavigation>
        <BottomNavigationAction component={Link} to='/tareas' label="Tareas" icon={<RestoreIcon />} />
        <BottomNavigationAction component={Link} to='/proyectos'showLabel={true} label="Proyectos" icon={<FavoriteIcon />} />
    </BottomNavigation>    
);

export default Navigation;
