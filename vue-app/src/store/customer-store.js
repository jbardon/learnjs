import 'whatwg-fetch';

import Vue from 'vue';

const defaultState = {
    item: {}
};

const mutations = {
    customerLoaded (state, customer) {
        Vue.set(state, 'item', customer);
    }
};

const actions = {
    loadCustomer (context, customerId) {
        return fetch('http://localhost:3001/customers/' + customerId)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(response => context.commit('customerLoaded', response));
    }
};

export const CustomerStore = {
    namespaced: true,
    defaultState,
    mutations,
    actions
};