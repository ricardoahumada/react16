import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink to='/'>Usuarios</NavLink></li>
            <li><NavLink to='/new'>Nuevo Usuario</NavLink></li>
            <li><NavLink to='/comps'>Empresas</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;
