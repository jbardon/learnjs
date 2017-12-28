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
};

export const saveCustomer = (customer) => {
	return (dispatch, getState) => {
		return fetch('http://localhost:3001/customers/' + customer.id,
          {
            method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer)
          })
          .then(
              response => response.json(),
              error => console.log('An error occurred.', error)
          ).
          then(response => {
				dispatch(customerSaved(response))
			}
          );
	}
};

const customerLoaded = (customer) => {
  return { type : 'CUSTOMER_LOADED', customer }
};

const customerSaved = (customer) => {
	return { type : 'CUSTOMER_SAVED', customer }
};