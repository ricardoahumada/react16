import React, { Component } from 'react';

class MyButton extends Component {
	_onPressButtonStart = (e) => {
		console.log("You start touching the button!");
	}

	_onPressButtonEnd = (e) => {
		console.log("You end touching the button!");
	}


	render() {
		return (
			<button onTouchStart={this._onPressButtonStart} onTouchEnd={this._onPressButtonEnd} className="btn btn-default navbar-btn">Touch me!</button>
		);
	}
}

export default MyButton;
