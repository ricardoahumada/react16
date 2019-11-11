import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store, { history } from './store';

ReactDOM.render(
    <Provider store={store} history={history}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
