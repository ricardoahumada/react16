import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionCreator from '../actions/userActionCreator';
import * as empresaActionCreator from '../actions/empresaActionCreator';


import Navigation from './Navigation';
import UserBox from './UserBox';
import EmpresaBox from './EmpresaBox';

// import UserForm from './UserForm';
const UserForm = lazy(() => import('./UserForm'));

class Main extends Component {

	render() {
		return (
			<div className="container">
				<h1>Usuarios</h1>
				<Navigation />
				<Switch>
					<Route exact path='/' component={() => <UserBox data={this.props.users} />}></Route>
					<Route exact path='/new' render={() =>
						<Suspense fallback="Loading...">
							<UserForm {...this.props} />
						</Suspense>
					}></Route>
					<Route exact path='/comps' component={() => <EmpresaBox data={this.props.empresas} deleteEmpresa={this.props.deleteEmpresa}/>}></Route>
				</Switch>
			</div>
		)
	}
}

function mapStateToProps(state) {
	// console.log('mapStateToProps...',state);
	return {
		users: state.users,
		empresas: state.empresas
	}
}

function mapDispatchToProps(dispatch) {
	// console.log('mapDispatchToProps...');
	return bindActionCreators({...userActionCreator,...empresaActionCreator}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
