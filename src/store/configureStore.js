import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { snackbarReducer } from 'material-ui-snackbar-redux';

import authReducer from '../containers/App/auth/reducer';
import todosReducer from '../containers/TodosPage/reducer';

/* eslint-disable no-underscore-dangle, indent */
const composeEnhancers = process.env.NODE_ENV !== 'production'
&& typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      todos: todosReducer,
      snackbar: snackbarReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
