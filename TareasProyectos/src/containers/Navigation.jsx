import React from 'react';
import { NavLink } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Navigation = () => (
    <BottomNavigation>
        <NavLink to='/tareas'><BottomNavigationAction showLabel={true} label="Tareas" icon={<RestoreIcon />} /></NavLink>
        <NavLink to='/proyectos'><BottomNavigationAction showLabel={true} label="Proyectos" icon={<FavoriteIcon />} /></NavLink>
    </BottomNavigation>    
);

export default Navigation;
