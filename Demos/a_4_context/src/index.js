import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import ThemeContext from './ThemeContext';

const value = { color: 'green', border:'1px solid black'}
ReactDOM.render(
  <ThemeContext.Provider value={value}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById('root')
);

registerServiceWorker();
