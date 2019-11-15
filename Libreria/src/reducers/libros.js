const initialState = {
	data: [],
	isFetching: false
};

const libros = (state = initialState, action) => {
	
	switch (action.type) {
		case 'LOAD_LIBROS':
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})

		case 'RECEIVED_LIBROS':
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				data: action.libros,
				lastUpdated: action.receivedAt
			})

		default:
			return state;
	}
}

export default libros;