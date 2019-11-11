import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';

const initialState = {};
const loggerMiddleware = createLogger();

// Para tool redux
const enhacers = compose(
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
		loggerMiddleware // neat middleware that logs actions
	),
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);


const store = createStore(rootReducer, initialState, enhacers);

// console.log('Store state:', store.getState());

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store