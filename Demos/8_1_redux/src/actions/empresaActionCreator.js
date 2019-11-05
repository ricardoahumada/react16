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


