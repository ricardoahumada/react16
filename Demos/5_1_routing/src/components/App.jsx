import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import UserBox from './UserBox';
// import UserForm from './UserForm';



const data = [
	{ id: "1", name: "Ricardo", email: "ricardo@netmind.com" },
	{ id: "2", name: "Juan", email: "juan@netmind.com" },
	{ id: "3", name: "Roberto", email: "roberto@netmind.com" }
];

const UserForm = lazy(() => import('./UserForm'));

class Main extends Component {
	state = { data: data };

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
					<Route exact path='/' component={() => <UserBox data={this.state.data} />}></Route>
					<Route exact path='/new' render={() =>
						<Suspense fallback="Loading...">
							<UserForm onUserSubmit={this.handleUserSubmit} {...this.props} />
						</Suspense>
					}></Route>
				</Switch>
			</div>
		)
	}
}

export default Main;