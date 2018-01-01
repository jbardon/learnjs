import { combineReducers } from 'redux';
import { customers } from './customers-list';
import { customer } from './customer-sheet';

export const rootReducer = combineReducers({
  customers, // reducer called customers
  customer,
});
