import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from './containers/App/index';
import configureStore from './store/configureStore';
import { history } from './helpers/history';

import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';
import './assets/styles/styles.scss';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');
/* eslint-disable no-underscore-dangle, indent */
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
