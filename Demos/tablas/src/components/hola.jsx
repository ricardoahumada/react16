import React from 'react';

//ES5
/* var Hola = function () {
    return (<p>Hola</p>)
} */

const decirHola = (nom, apell) => {
    return `Hola ${nom.toUpperCase()} ${apell.toUpperCase()}!`;
}

//ES6
const Hola = ({nombre,apellido, email, usuario}) => {

    return (
        <article>
            <h2>Título</h2>
            <p>{decirHola(nombre, apellido)}</p>
            <p>{email}</p>
            <p>{JSON.stringify(usuario)}</p>
        </article>
    )
};

export default Hola;