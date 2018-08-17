const initialState = {};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMER_LOADED':
      return action.customer;
    case 'CUSTOMER_SAVED':
      return action;
    default:
      return state;
  }
};

export const customerLoaded = customer => ({
  type: 'CUSTOMER_LOADED',
  customer,
});
export const customerSaved = customer => ({ type: 'CUSTOMER_SAVED', customer });
