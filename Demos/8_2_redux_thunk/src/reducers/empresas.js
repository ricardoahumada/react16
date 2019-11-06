const initialState = {
	data: [
		{ id: 1, name: "Empresa 1", usuario: 1 },
		{ id: 2, name: "Empresa 2", usuario: 2 },
	]
};

const empresas = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_EMPRESA':
			// return the new state with the new comment
			return {
				...state, data: [...state.data, {
					id: state.length + 1,
					name: action.name,
				}]
			};

		case 'DEL_EMPRESA':
			console.log('Borrando datos...', state, action);
			return { ...state, data: state.data.filter(aE => { return aE.id !== action.id }) };

		case 'DEL_USER':
			console.log('Borrando datos usuario en empresa...', state.data, action);
			return { ...state, data: state.data.filter(aE => { return aE.usuario !== parseInt(action.id) }) };

		default:
			return state;
	}
}

export default empresas;