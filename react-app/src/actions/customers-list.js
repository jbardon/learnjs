import 'whatwg-fetch';

export const addCustomer = (customer) => {
  return { type : 'CUSTOMERS_ADD', customer }
};

export const deleteCustomer = (customerId) => {
    return { type : 'CUSTOMERS_DELETE', customerId }
};

export const clearCustomers = () => {
  return { type : 'CUSTOMERS_CLEAR' }
};

export const loadCustomers = () => {
  return (dispatch, getState) => {
    return fetch('http://localhost:3001/customers')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).
    then(response =>
        dispatch(customersLoaded(response))
    );
  }
};

const customersLoaded = (customers) => {
  return { type : 'CUSTOMERS_LOADED', customers }
};
