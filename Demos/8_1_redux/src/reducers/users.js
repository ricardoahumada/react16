const initialState = {
	users: [
		{ id: 1, name: "Ricardo", email: "ricardo@netmind.com" },
		{ id: 2, name: "Juan", email: "juan@netmind.com" },
		{ id: 3, name: "Roberto", email: "roberto@netmind.com" }
	]
};

const users = (state = initialState.users, action) => {
	switch (action.type) {
		case 'ADD_USER':
			action.user.id = Date.now();
			return [...state, action.user];

		case 'DEL_USER':
			console.log('Borrando usario...', state, action);
			return state.filter(aU => { return aU.id !== action.id });			
			
		default:
			return state;
	}
}

export default users;