import Vue from 'vue';
import Vuex from 'vuex';

import CustomersStore from '../store/customers-store';
import CustomerStore from '../store/customer-store';

// Use state manager plugin
// https://vuex.vuejs.org/en/intro.html
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // Split state in modules
    customers: CustomersStore,
    customer: CustomerStore,
  },
});

export default store;
