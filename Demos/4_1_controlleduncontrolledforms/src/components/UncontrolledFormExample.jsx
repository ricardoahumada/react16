import React, { Component } from 'react';

const validateEmail = (value) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(value);
}

const validForm = (errors) => {
    let isOk = true;
    for (let key in errors) {
        if (errors[key]) {
            isOk = false;
            break;
        }
    }
    return isOk;
}

class UncontrolledForm extends Component {

    email= React.createRef();
    password = React.createRef();
    state={errors: { email: 'oblligatorio', password: 'oblligatorio' }};

    handlerSubmitForm = (event) => {
        event.preventDefault();
        this.setState({ email: this.email.current.value, password: this.password.current.value });
    }

    changeEmailHandle = (e) => {
        const value = this.email.current.value;
        const isValid = validateEmail(value);
        const errors = { ...this.state.errors, email: isValid ? null : 'No válido' }
        this.setState({ errors });
    }

    changePassHandle = (e) => {
        const value = this.password.current.value;
        const isValid = value.length >= 3;
        const errors = { ...this.state.errors, password: isValid ? null : 'No válido' }
        this.setState({ errors });
    }

    render() {
        return (
            <div className="container">
                <h1>Uncontrolled Components</h1>
                <form onSubmit={this.handlerSubmitForm} noValidate>
                    <div className="form-group">
                        <input type="email" name="my_email" placeholder="Tu email" onChange={this.changeEmailHandle} ref={this.email} defaultValue={"r@r.com"} required />
                    </div>
                    <div className="form-group">
                        <input type="password" name="my_pass" placeholder="Tu password" required onChange={this.changePassHandle} ref={this.password} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" disabled={!validForm(this.state.errors)}>Enviar</button>
                    </div>
                </form>
                <hr />
                <div className="alert alert-primary" role="alert">
                    Valor: {JSON.stringify(this.state)}
                </div>
            </div>
        );
    }
}

export default UncontrolledForm;