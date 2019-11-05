import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreator from '../actions/actionCreator';


import Navigation from './Navigation';
import UserBox from './UserBox';
import EmpresaBox from './EmpresaBox';

// import UserForm from './UserForm';
const UserForm = lazy(() => import('./UserForm'));

class Main extends Component {

	handleUserSubmit = (user) => {
		var users = this.state.data;
		user.id = Date.now();
		var newUsers = users.concat([user]);
		this.setState({ data: newUsers });

		console.log(user, newUsers);
	}

	render() {
		return (
			<div className="container">
				<h1>Usuarios</h1>
				<Navigation />
				<Switch>
					<Route exact path='/' component={() => <UserBox data={this.props.users} />}></Route>
					<Route exact path='/new' render={() =>
						<Suspense fallback="Loading...">
							<UserForm onUserSubmit={this.handleUserSubmit} {...this.props} />
						</Suspense>
					}></Route>
					<Route exact path='/comps' component={() => <EmpresaBox data={this.props.empresas} deleteEmpresa={this.props.deleteEmpresa}/>}></Route>
				</Switch>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps...',state);
	return {
		users: state.users,
		empresas: state.empresas
	}
}

function mapDispatchToProps(dispatch) {
	console.log('mapDispatchToProps...');
	return bindActionCreators(actionCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
