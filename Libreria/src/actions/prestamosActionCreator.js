export function addPrestamo(id) {
	return {
		type: 'ADD_PRESTAMO',
		id
	}
}

export function deletePrestamo(id) {
	return {
		type: 'DEL_PRESTAMO',
		id
	}
}

export function fetchPrestamos() {
	const url = 'http://localhost:8080/prestamos';

	return function (dispatch) {
		dispatch({
			type: 'LOAD_PRESTAMOS',
			url
		});

		return fetch(url)
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: 'RECEIVED_PRESTAMOS',
					url,
					prestamos: json,
					receivedAt: Date.now()
				});
			});
	}

}
