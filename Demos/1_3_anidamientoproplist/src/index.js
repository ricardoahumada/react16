import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentBox from './components/CommentBox';
import * as serviceWorker from './serviceWorker';

const data_comments = [
    { id: 1, author: "Pete Hunt", text: "Este es un comentario" },
    { id: 2, author: "Jordan Walke", text: "Este es *otro* comentario" }
];

ReactDOM.render(<ComponentBox data={data_comments}/>, document.getElementById('root'));

serviceWorker.unregister();
