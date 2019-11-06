import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import empresas from './empresas';

const rootReducer = combineReducers({
	users,
	empresas,
	routing: routerReducer
});

export default rootReducer;