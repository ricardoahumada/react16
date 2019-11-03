import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserBox from './components/UserBox';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <UserBox id={23} title={34} />,
    document.getElementById('root')
);

serviceWorker.unregister();
