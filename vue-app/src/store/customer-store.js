import 'whatwg-fetch';

import Vue from 'vue';

const defaultState = {
  item: {},
};

const mutations = {
  customerLoaded(state, customer) {
    Vue.set(state, 'item', customer);
  },
  customerSaved(state, customer) {
    Vue.set(state, 'item', customer);
  },
};

const actions = {
  loadCustomer(context, customerId) {
    return fetch(`http://localhost:3001/customers/${customerId}`)
      .then(
        response => response.json(),
        error => console.error('An error occurred.', error),
      )
      .then(response => context.commit('customerLoaded', response));
  },
  saveCustomer(context, customer) {
    return fetch(`http://localhost:3001/customers/${customer.id}`, {
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

const CustomerStore = {
  namespaced: true,
  defaultState,
  mutations,
  actions,
};

export default CustomerStore;
