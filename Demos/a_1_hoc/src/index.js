import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HOC from './components/Hoc';
import TickTock from './components/TickTock';
import * as serviceWorker from './serviceWorker';


const intervalFn = (state) => {
    return { seconds: state.seconds + 1 };
};

const Wrapped = HOC(TickTock, { seconds: 0 }, intervalFn);
const Wrapped2 = HOC(TickTock, { seconds: 3 }, intervalFn);
const Wrapped3 = HOC(TickTock, { seconds: 6 }, intervalFn);


ReactDOM.render(
    <div>
        <Wrapped />
        <Wrapped2 />
        <Wrapped3 />
    </div>
, document.getElementById('root'));

serviceWorker.unregister();
