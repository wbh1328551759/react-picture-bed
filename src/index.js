import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Model from './models/index'

ReactDOM.render(
    <Router>
      <App/>
    </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
