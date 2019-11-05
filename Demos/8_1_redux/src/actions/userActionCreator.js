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


