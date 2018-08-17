export const customerLoaded = customer => ({
  type: 'CUSTOMER_LOADED',
  customer,
});

export const customerSaved = customer => ({ type: 'CUSTOMER_SAVED', customer });
