export function addProyecto(id) {
	// console.log("Dispatching ADD PROYECTO");
	return {
		type: 'ADD_PROYECTO',
		id
	}
}

export function deleteProyecto(id) {
	// console.log("Dispatching remove PROYECTO");
	return {
		type: 'DEL_PROYECTO',
		id
	}
}

export function fetchProyectos() {
	const url = 'http://localhost:8080/proyectos';
	// console.log('fetchProyectos:', url);

	return function (dispatch) {
		dispatch({
			type: 'LOAD_PROYECTOS',
			url
		});

		return fetch(url)
			.then(response => response.json())
			.then(json => {
				// console.log('fetched tareas:', json);
				dispatch({
					type: 'RECEIVED_PROYECTOS',
					url,
					proyectos: json,
					receivedAt: Date.now()
				});
			});
	}

}
