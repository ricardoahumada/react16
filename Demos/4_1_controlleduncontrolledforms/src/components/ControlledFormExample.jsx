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

class ControlledForm extends Component {

	state = { email: '', password: '', errors: { email: 'oblligatorio', password: 'oblligatorio' } }

	handlerSubmitForm = (event) => {
		event.preventDefault();
		console.log("handlerSubmitForm:", event.target);
		const myForm = event.target;
		this.setState({ email: myForm.my_email.value, password: myForm.my_pass.value });
	}

	changeEmailHandle = (e) => {
		const value = e.target.value;
		const isValid = validateEmail(value);
		const errors = { ...this.state.errors, email: isValid ? null : 'No válido' }
		this.setState({ email: value, errors });
	}

	changePassHandle = (e) => {
		const value = e.target.value;
		const isValid = value.length >= 3;
		const errors = { ...this.state.errors, password: isValid ? null : 'No válido' }
		this.setState({ password: value, errors });
	}

	render() {
		return (
			<div className="container">
				<h1>Controlled Components</h1>
				<form onSubmit={this.handlerSubmitForm} noValidate>
					<div className="form-group">
						<input type="email" name="my_email" placeholder="Tu email" onChange={this.changeEmailHandle} value={this.state.email} required />
					</div>
					<div className="form-group">
						<input type="password" name="my_pass" placeholder="Tu password" required onChange={this.changePassHandle} value={this.state.password} />
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

export default ControlledForm;