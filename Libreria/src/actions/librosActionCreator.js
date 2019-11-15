
export function fetchLibros() {
	const url='http://localhost:8080/libros';

	return function (dispatch) {
		dispatch({
			type: 'LOAD_LIBROS',
			url
		});

		return fetch(url)
			.then(response => response.json())
			.then(libros => {
				//console.log('fetched Libros:', libros);
				dispatch({
					type: 'RECEIVED_LIBROS',
					url,
					libros,
					receivedAt: Date.now()
				})
			});
	}

}
