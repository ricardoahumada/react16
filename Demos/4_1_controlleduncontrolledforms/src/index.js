import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlledForm from './components/ControlledFormExample';
import UncontrolledForm from './components/UncontrolledFormExample';
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<ControlledForm />,document.getElementById('root'));
ReactDOM.render(<UncontrolledForm />,document.getElementById('root'));

serviceWorker.unregister();
