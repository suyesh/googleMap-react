import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/bootstrap.min.css'
import './assets/css/material-kit.css'
import './assets/css/demo.css'
import './assets/css/index.css';
import Map from './components/Map';
import registerServiceWorker from './helpers/registerServiceWorker';

ReactDOM.render(
  <Map/>, document.getElementById('root'));
registerServiceWorker();
