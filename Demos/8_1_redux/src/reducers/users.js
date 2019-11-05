const initialState = {
	users: [
		{ id: 1, name: "Ricardo", email: "ricardo@netmind.com" },
		{ id: 2, name: "Juan", email: "juan@netmind.com" },
		{ id: 3, name: "Roberto", email: "roberto@netmind.com" }
	]
};

const users = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USER':
			action.user.id = Date.now();
			return [...state, action.user];
		case 'DEL_USER':
			console.log('Borrando usario...', state, action);
			const newData = [];
			for (let i = 0; i <= state.length; i++) {
				console.log('Revisando...', state[i], action.id);
				if (state[i] && parseInt(state[i].id) !== parseInt(action.id)) newData.push(state[i]);
			}
			console.log('nuevo estado...', newData);

			return newData;

		default:
			return state;
	}
}

export default users;