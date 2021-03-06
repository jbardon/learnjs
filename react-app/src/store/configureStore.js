import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import index from './reducers';

const configureStore = (initialState = {}) =>
  createStore(index, initialState, applyMiddleware(thunkMiddleware));

export default configureStore;
