import 'whatwg-fetch';

import { customersLoaded } from '../reducers/customers-list';

export const getAllCustomers = state => Object.values(state);

export const loadCustomers = () => dispatch =>
  fetch('http://localhost:2092/customers')
    .then(
      response => response.json(),
      error => console.error('An error occurred.', error),
    )
    .then(response => dispatch(customersLoaded(response)));
