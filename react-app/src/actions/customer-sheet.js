import 'whatwg-fetch';

const customerLoaded = customer => ({ type: 'CUSTOMER_LOADED', customer });

const customerSaved = customer => ({ type: 'CUSTOMER_SAVED', customer });

export const loadCustomer = customerId => dispatch =>
  fetch(`http://localhost:3001/customers/${customerId}`)
    .then(
      response => response.json(),
      error => console.error('An error occurred.', error),
    )
    .then(response => dispatch(customerLoaded(response)));

export const saveCustomer = customer => dispatch =>
  fetch(`http://localhost:3001/customers/${customer.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customer),
  })
    .then(
      response => response.json(),
      error => console.error('An error occurred.', error),
    )
    .then(response => dispatch(customerSaved(response)));
