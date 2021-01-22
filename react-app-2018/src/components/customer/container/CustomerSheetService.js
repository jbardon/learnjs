import 'whatwg-fetch';

import { customerLoaded, customerSaved } from './CustomerSheetActions';

export const loadCustomer = customerId => dispatch =>
  fetch(`http://localhost:2092/customers/${customerId}`)
    .then(
      response => response.json(),
      error => console.error('An error occurred.', error),
    )
    .then(response => dispatch(customerLoaded(response)));

export const saveCustomer = customer => dispatch =>
  fetch(`http://localhost:2092/customers/${customer.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customer),
  })
    .then(
      response => response.json(),
      error => console.error('An error occurred.', error),
    )
    .then(response => dispatch(customerSaved(response)));
