import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink to='/'>Usuarios</NavLink></li>
            <li><NavLink to='/new'>Nuevo</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;
