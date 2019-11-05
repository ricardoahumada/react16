import {createStore,compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory } from 'history';


// import the route reducer
import rootReducer from './reducers';
import {users,empresas} from './data/users';

const initialState={
	users:users,
	empresas:empresas
};

// Para tool redux
const enhacers=compose(
	window.devToolsExtension?window.devToolsExtension():f=>f
);

const store = createStore(rootReducer,initialState,enhacers);
console.log('Store state:',store.getState());

export const history = syncHistoryWithStore(createBrowserHistory (),store);

export default store