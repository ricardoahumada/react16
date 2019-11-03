import React, { Component } from 'react';

class ChildComponent extends Component {
	mouseOverHandler = (e) => {
		console.log('you moused over');
		console.log(e); //e is sysnthetic event instance
	}

	clickHandler = (e) => {
		console.log('you clicked:', e);
	}

	handleChange = (e) => {
		console.log('you changed select', e);
		this.props.onChange({ seleccion: e.target.value });
	}

	render() {
		return (
			<div className="list-group">
				<div onClick={this.clickHandler} onMouseOver={this.mouseOverHandler} className="list-group-item">Haz click o pasa el ratón encima</div>
				<div className="list-group-item">
					<label>Selecciona una alternativa:</label>
					<select onChange={this.handleChange}>
						<option value="1">1</option>
						<option value="2">2</option>
					</select>
				</div>
			</div>
		)
	}
}

export default ChildComponent;