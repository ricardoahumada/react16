const initialState = {
	data: [],
	isFetching: false
};

const prestamos = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PRESTAMO':
			return {
				...state, data: [...state.data, {
					id: state.length + 1,
					name: action.name,
				}]
			};

		case 'LOAD_PRESTAMOS':
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})

		case 'RECEIVED_PRESTAMOS':
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				data: action.prestamos,
				lastUpdated: action.receivedAt
			})

		default:
			return state;
	}
}

export default prestamos;