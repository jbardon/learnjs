const initialState = {};

export const customer = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMER_LOADED':
      return action.customer;
    default:
      return state;
  }
};
