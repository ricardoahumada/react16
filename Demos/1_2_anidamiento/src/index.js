import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentBox from './components/CommentBox';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ComponentBox />, document.getElementById('root'));

serviceWorker.unregister();
