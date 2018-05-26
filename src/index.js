import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Docs from './docs/Docs';
import './../node_modules/@webeetle/bee-grid/dist/css/bee-grid.min.css';
import './../node_modules/highlight.js/styles/vs2015.css';

ReactDOM.render(<Docs />, document.getElementById('root'));
registerServiceWorker();
