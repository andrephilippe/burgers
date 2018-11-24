import React from 'react';
import ReactDOM from 'react-dom';

import 'toastr/build/toastr.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/index.scss';

import registerServiceWorker from './resources/registerServiceWorker.js';
import './resources/config.js';

import App from './components/main/app/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
