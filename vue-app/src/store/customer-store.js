import 'whatwg-fetch';

import Vue from 'vue';

// Init state
const defaultState = {
  item: {},
};

// Update state (synchronous function)
const mutations = {
  customerLoaded(state, customer) {
    // Make the new object reactive
    // https://vuejs.org/v2/guide/reactivity.html#How-Changes-Are-Tracked
    Vue.set(state, 'item', customer);
  },
  customerSaved(state, customer) {
    Vue.set(state, 'item', customer);
  },
};

// Update state (asynchronous function)
const actions = {
  loadCustomer(context, customerId) {
    return (
      fetch(`http://localhost:2092/customers/${customerId}`)
        .then(
          response => response.json(),
          error => console.error('An error occurred.', error),
        )
        // Context.commit to trigger another action/mutation
        .then(response => context.commit('customerLoaded', response))
    );
  },
  saveCustomer(context, customer) {
    return fetch(`http://localhost:2092/customers/${customer.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer),
    })
      .then(
        response => response.json(),
        error => console.error('An error occurred.', error),
      )
      .then(response => context.commit('customerSaved', response));
  },
};

// Declare state module
const CustomerStore = {
  namespaced: true, // Using for mapping in components
  defaultState,
  mutations,
  actions,
};

export default CustomerStore;
