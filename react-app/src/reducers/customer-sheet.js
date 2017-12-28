const initialState = {};

export const customer = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMER_LOADED': return action.customer; break;
    case 'CUSTOMER_SAVED': return action; break;
    default: return state; break;
  }
};
