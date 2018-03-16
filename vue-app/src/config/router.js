import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../components/dashboard/dashboard.vue';
import CustomersList from '../components/customers-list/customers-list.vue';
import CustomerSheet from '../components/customer-sheet/customer-sheet.vue';
import CustomerSheetEdit from '../components/customer-sheet/customer-sheet-edit.vue';

// Use router plugin
// https://router.vuejs.org/en/essentials/getting-started.html
Vue.use(VueRouter);

/* Necessary if components are defined locally (components property)
   And the router is not used */
// Vue.component('dashboard', Dashboard);
// Vue.component('customers-list', CustomersList);
// Vue.component('customer-sheet', CustomerSheet);
// Vue.component('customer-sheet-list', CustomerSheetEdit);

const router = new VueRouter({
  routes: [
    { path: '/', component: Dashboard },
    { path: '/customers', component: CustomersList },
    { path: '/customer/:id', component: CustomerSheet },
    { path: '/customer/:id/edit', component: CustomerSheetEdit },
  ],
});

export default router;
