const initialState = [];

export const customers = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMERS_ADD': return [ ...state, action.customer];
    case 'CUSTOMERS_CLEAR': return [];
    case 'CUSTOMERS_LOADED': return action.customers;
    default: return state;
  }
};
