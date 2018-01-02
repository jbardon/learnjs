import 'whatwg-fetch';

import Vue from 'vue';

const defaultState = {
  list: [],
};

const mutations = {
  addCustomer(state, customer) {
    Vue.set(state.list, state.list.length, customer);
  },
  deleteCustomer(state, customerId) {
    Vue.set(
      state,
      'list',
      state.list.filter(customer => customer.id !== customerId),
    );
  },
  clearCustomers(state) {
    Vue.set(state, 'list', []);
  },
  customersLoaded(state, customers) {
    Vue.set(state, 'list', customers);
  },
};

const actions = {
  loadCustomers({ commit }) {
    return fetch('http://localhost:3001/customers')
      .then(
        response => response.json(),
        error => console.error('An error occurred.', error),
      )
      .then(response => commit('customersLoaded', response));
  },
};

const CustomersStore = {
  namespaced: true,
  defaultState,
  mutations,
  actions,
};

export default CustomersStore;
