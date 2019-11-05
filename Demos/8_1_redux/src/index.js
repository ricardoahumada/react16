import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import { Provider } from 'react-redux';
import store, { history } from './store';


import './index.css';
import * as serviceWorker from './serviceWorker';

const router = (
    <Provider store={store} history={history}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
