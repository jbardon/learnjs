import 'whatwg-fetch';

import { customersLoaded } from './CustomerListActions';

export const loadCustomers = () => dispatch =>
  fetch('http://localhost:2092/customers')
    .then(
      response => response.json(),
      error => console.error('An error occurred.', error),
    )
    .then(response => dispatch(customersLoaded(response)));
