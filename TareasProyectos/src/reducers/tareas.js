const initialState = {
	data: [],
	isFetching: false
};

const users = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TAREA':
			// action.tarea.id = Date.now();
			return { ...state, data: [...state.data, action.tarea] };

		case 'DEL_TAREA':
			//console.log('Borrando tarea...', state, action);
			return { ...state, data: state.data.filter(aU => { return aU.id !== action.id }) };

		case 'DEL_PROYECTO':
			//console.log('Borrando tareas de un proyecto...', state, action);
			return { ...state, data: state.data.filter(aT => { return aT.id !== action.id }) };

		case 'LOAD_TAREAS':
			//console.log('Cargando tareas...', state, action);
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})

		case 'RECEIVED_TAREAS':
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				data: action.tareas,
				lastUpdated: action.receivedAt
			})

		default:
			return state;
	}
}

export default users;