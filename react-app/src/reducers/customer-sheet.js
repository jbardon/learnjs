const initialState = {};

const customer = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMER_LOADED':
      return action.customer;
    case 'CUSTOMER_SAVED':
      return action;
    default:
      return state;
  }
};

export default customer;
