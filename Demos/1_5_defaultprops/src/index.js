import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserBox from './components/UserBox';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<UserBox headerProp="Header from parent..." contentProp="Content from parent..." />, document.getElementById('root'));

serviceWorker.unregister();
