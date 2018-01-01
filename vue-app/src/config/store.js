import Vue from 'vue';
import Vuex from 'vuex';

import { CustomersStore } from '../store/customers-store';
import { CustomerStore } from '../store/customer-store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    customers: CustomersStore,
    customer: CustomerStore,
  },
});
