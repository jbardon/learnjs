import { combineReducers } from 'redux';
import customers from './customers-list';
import customer from './customer-sheet';

const rootReducer = combineReducers({
  customers, // reducer called customers
  customer,
});

export default rootReducer;
