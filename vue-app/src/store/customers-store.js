import 'whatwg-fetch';

import Vue from 'vue';

const defaultState = {
    list: []
};

const mutations = {
    addCustomer (state, customer) {
        Vue.set(state.list, state.list.length, customer);
    },
    clearCustomers (state) {
        Vue.set(state, 'list', []);
    },
    customersLoaded (state, customers) {
        Vue.set(state, 'list', customers);
    }
};

const actions = {
    loadCustomers ({commit}) {
        return fetch('http://localhost:3000/customers')
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(response => commit('customersLoaded', response));
      }
};

export const CustomersStore = {
    namespaced: true,
    defaultState,
    mutations,
    actions
};