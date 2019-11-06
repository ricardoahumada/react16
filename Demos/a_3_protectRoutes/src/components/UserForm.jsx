import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


const UserForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const [redirect, setRedirect] = useState(false);

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/' />
    }
  }

  const showErrors=()=>{
    return errors?<div className="alert alert-warning">{errors}</div>:null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      props.onUserSubmit({ name, email });
      setRedirect(true);
    }else{
      setErrors('Debes completar el nombre y email');
    }

  }

  useEffect(() => {
    console.log("useffect!!");
  })

  return (
    <form className="userForm" onSubmit={handleSubmit}>
      {showErrors()}
      {renderRedirect()}
      <h2>Nuevo Usuario</h2>
      <p><input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /></p>
      <p><input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /></p>
      <button type="submit">Enviar</button>
    </form>
  );

}

export default withRouter(UserForm);
