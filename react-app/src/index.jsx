import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';

import {BrowserRouter as Router} from 'react-router-dom'
import {App} from './app.jsx';

let store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
), document.getElementById('app'))
