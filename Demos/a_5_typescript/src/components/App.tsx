import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import UserBox from './UserBox';
import { User } from '../models/user';
// import UserForm from './UserForm';

const data: Array<User> = [
	{ id: 1, name: "Ricardo", email: "ricardo@netmind.com" },
	{ id: 2, name: "Juan", email: "juan@netmind.com" },
	{ id: 3, name: "Roberto", email: "roberto@netmind.com" }
];

const UserForm = lazy(() => import('./UserForm'));


type AppState = {
	data: Array<User>;
};

class App extends React.Component<{}, AppState> {
	state: AppState = { data: data };

	handleUserSubmit = (user: User) => {
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
							<UserForm onUserSubmit={this.handleUserSubmit} />
						</Suspense>
					}></Route>
				</Switch>
			</div>
		)
	}
}

export default App;