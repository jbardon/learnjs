import 'whatwg-fetch';

export const loadCustomer = (customerId) => {
  return (dispatch, getState) => {
    return fetch('http://localhost:3001/customers/' + customerId)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).
    then(response =>
        dispatch(customerLoaded(response))
    );
  }
}

const customerLoaded = (customer) => {
  return { type : 'CUSTOMER_LOADED', customer }
}
