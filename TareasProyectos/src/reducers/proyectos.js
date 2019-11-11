const initialState = {
	data: [],
	isFetching: false
};

const proyectos = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PROYECTO':
			// return the new state with the new comment
			return {
				...state, data: [...state.data, {
					id: state.length + 1,
					name: action.name,
				}]
			};

		case 'DEL_PROYECTO':
			// console.log('Borrando datos...', state, action);
			return { ...state, data: state.data.filter(aE => { return aE.id !== action.id }) };

		case 'LOAD_PROYECTOS':
			// console.log('Cargando proyectos...', state, action);
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})

		case 'RECEIVED_PROYECTOS':
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				data: action.proyectos,
				lastUpdated: action.receivedAt
			})

		default:
			return state;
	}
}

export default proyectos;