import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tareas from './tareas';
import proyectos from './proyectos';

const rootReducer = combineReducers({
	tareas,
	proyectos,
	routing: routerReducer
});

export default rootReducer;