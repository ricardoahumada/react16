const initialState = {
	data: [],
	isFetching: false
};

const users = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USER':
			action.user.id = Date.now();
			return { ...state, data: [...state.data, action.user] };

		case 'DEL_USER':
			console.log('Borrando usario...', state, action);
			return { ...state, data: state.data.filter(aU => { return aU.id !== action.id }) };

		case 'LOAD_USERS':
			console.log('Cargando usuarios...', state, action);
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})

		case 'RECEIVED_USERS':
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				data: action.users,
				lastUpdated: action.receivedAt
			})

		default:
			return state;
	}
}

export default users;