import 'whatwg-fetch';

export const addCustomer = customer => ({ type: 'CUSTOMERS_ADD', customer });

export const deleteCustomer = customerId => ({
  type: 'CUSTOMERS_DELETE',
  customerId,
});

export const clearCustomers = () => ({ type: 'CUSTOMERS_CLEAR' });

const customersLoaded = customers => ({ type: 'CUSTOMERS_LOADED', customers });

export const loadCustomers = () => dispatch =>
  fetch('http://localhost:3001/customers')
    .then(
      response => response.json(),
      error => console.error('An error occurred.', error),
    )
    .then(response => dispatch(customersLoaded(response)));
