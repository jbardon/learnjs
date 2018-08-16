const initialState = {};

export const customers = (state = initialState, action) => {
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

export const getAllCustomers = state => Object.values(state);
