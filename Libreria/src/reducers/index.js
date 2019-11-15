import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import libros from './libros';
import prestamos from './prestamos';

const rootReducer = combineReducers({
	libros,
	prestamos,
	routing: routerReducer
});

export default rootReducer;