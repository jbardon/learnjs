import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../components/dashboard/dashboard.vue';
import CustomersList from '../components/customers-list/customers-list.vue';
import CustomerSheet from '../components/customer-sheet/customer-sheet.vue';

Vue.use(VueRouter);

//Vue.component('dashboard', Dashboard);
//Vue.component('customers-list', CustomersList);
//Vue.component('customer-sheet', CustomerSheet);

export const router = new VueRouter({
  routes: [
    { path: '/', component: Dashboard },
    { path: '/customers', component: CustomersList },
    { path: '/customer/:id', component: CustomerSheet }
  ]
});
