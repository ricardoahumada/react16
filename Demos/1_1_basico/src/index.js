import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AComponent from './components/AComponent';
import Lista9 from './components/Lista_9';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<AComponent />, document.getElementById('root'));
ReactDOM.render(<Lista9 />, document.getElementById('root'));

serviceWorker.unregister();
