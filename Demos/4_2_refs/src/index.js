import React from 'react';
import ReactDOM from 'react-dom';
import ModalAlertTimeout from './components/ModalAlertTimeout';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(<ModalAlertTimeout />,document.getElementById('root'));

serviceWorker.unregister();
