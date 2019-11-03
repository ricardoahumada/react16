import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParentComponent from './components/ParentComponent';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <ParentComponent />,
    document.getElementById('root')
);

serviceWorker.unregister();
