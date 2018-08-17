import { combineReducers } from 'redux';
import { customersReducer } from './customers-list';
import { customerReducer } from './customer-sheet';

const index = combineReducers({
  customers: customersReducer, // reducer called customers
  customer: customerReducer,
});

export default index;
