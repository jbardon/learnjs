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
