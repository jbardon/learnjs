const initialState = {};

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMERS_ADD':
      return { ...state, [action.customer.id]: action.customer };
    case 'CUSTOMERS_DELETE': {
      const { [action.customerId]: deleted, ...otherCustomers } = state;
      return otherCustomers;
    }
    case 'CUSTOMERS_CLEAR':
      return {};
    case 'CUSTOMERS_LOADED': {
      const allCustomers = {};
      action.customers.forEach(customer => {
        allCustomers[customer.id] = customer;
      });
      return allCustomers;
    }
    default:
      return state;
  }
};

export const addCustomer = customer => ({ type: 'CUSTOMERS_ADD', customer });

export const deleteCustomer = customerId => ({
  type: 'CUSTOMERS_DELETE',
  customerId,
});

export const clearCustomers = () => ({ type: 'CUSTOMERS_CLEAR' });
export const customersLoaded = customers => ({
  type: 'CUSTOMERS_LOADED',
  customers,
});
