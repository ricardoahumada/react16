import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './components/MyComponent';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <MyComponent />,
    document.getElementById('root')
);

serviceWorker.unregister();
