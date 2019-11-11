export function addTarea(new_tarea) {
	//console.log("Dispatching add Tarea");
	return {
		type: 'ADD_TAREA',
		tarea: new_tarea
	}
}

export function deleteTarea(id, id_empresa) {
	//console.log("Dispatching remove Tarea");
	return {
		type: 'DEL_TAREA',
		id,
		id_empresa
	}
}

function loadTareas(url) {
	//console.log("Loading tareas from...:", url);
	return {
		type: 'LOAD_TAREAS',
		url
	}
}

function receiveTareas(url, json) {
	//console.log("Recived users from...:", url, json);
	return {
		type: 'RECEIVED_TAREAS',
		url,
		tareas: json,
		receivedAt: Date.now()
	}
}

export function fetchTareas() {
	const url='http://localhost:8080/tareas';
	//console.log('fetchTareas:', url);

	return function (dispatch) {
		dispatch(loadTareas(url));

		return fetch(url)
			.then(response => response.json())
			.then(json => {
				//console.log('fetched tareas:', json);
				dispatch(receiveTareas(url, json))
			});
	}

}

export function addTareaAPI(newT) {
	const url = 'http://localhost:8080/tareas';
	//console.log('addTareasAPI:', url);

	return function (dispatch) {

		return fetch(url, {
			method: 'post',
			body: JSON.stringify(newT),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => response.json())
			.then(json => {
				//console.log('added tarea api:', json);
				dispatch({
					type: 'ADD_TAREA',
					tarea: json
				});
			})
			.catch(function (err) {
				console.log(err);
			});
	}

}
