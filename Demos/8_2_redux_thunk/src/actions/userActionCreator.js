export function addUser(new_user) {
	console.log("Dispatching add User");
	return {
		type: 'ADD_USER',
		user: new_user
	}
}

export function deleteUser(id, id_empresa) {
	console.log("Dispatching remove User");
	return {
		type: 'DEL_USER',
		id,
		id_empresa
	}
}

function loadUsers(url) {
	console.log("Loading users from...:", url);
	return {
		type: 'LOAD_USERS',
		url
	}
}

function receiveUsers(url, json) {
	console.log("Recived users from...:", url, json);
	return {
		type: 'RECEIVED_USERS',
		url,
		users: json,
		receivedAt: Date.now()
	}
}

export function fetchUsers(url) {
	console.log('fetchUsers:', url);

	return function (dispatch) {
		dispatch(loadUsers(url));

		return fetch(url)
			.then(response => response.json())
			.then(json => {
				console.log('fetched:', json);
				dispatch(receiveUsers(url, json))
			});
	}

}
