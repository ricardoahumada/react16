import React from 'react';

const ListaUsuarios = ({ usuarios }) => {
    const listJsx = usuarios.map((el,idx) => <li key={idx}>{el.nombre}-{el.apellido}</li>);

    return (
        <section>
            <h2>Usuarios</h2>
            <ul>
                {listJsx}
            </ul>
        </section>
    );
}

export default ListaUsuarios;