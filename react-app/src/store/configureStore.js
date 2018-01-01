import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from '../reducers';

export const configureStore = (initialState = {}) =>
  createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
