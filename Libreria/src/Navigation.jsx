import React from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Navigation = () => (
    <BottomNavigation>
        <BottomNavigationAction component={Link} to='/libros' label="Libros" icon={<AssignmentIcon />} />
        <BottomNavigationAction component={Link} to='/prestamos' showLabel={true} label="Prestamos" icon={<ChromeReaderModeIcon />} />
    </BottomNavigation>
);

export default Navigation;
