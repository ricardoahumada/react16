import {createStore,compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';

const initialState={};

// Para tool redux
const enhacers=compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():f=>f
);

const store = createStore(rootReducer,initialState,enhacers);
console.log('Store state:',store.getState());

export const history = syncHistoryWithStore(createBrowserHistory (),store);

export default store