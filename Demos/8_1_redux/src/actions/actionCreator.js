// add user
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

export function addEmpresa(id) {
	console.log("Dispatching ADD Empresa");
	return {
		type: 'ADD_EMPRESA',
		id
	}
}

export function deleteEmpresa(id) {
	console.log("Dispatching remove Empresa");
	return {
		type: 'DEL_EMPRESA',
		id
	}
}


