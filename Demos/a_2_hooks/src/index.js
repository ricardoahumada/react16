import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './index.css';
import * as serviceWorker from './serviceWorker';

const router = (
    <BrowserRouter >
       <App />
    </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
