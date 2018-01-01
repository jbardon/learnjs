import { mapMutations, mapActions, mapState } from 'vuex';

import CustomersListDisplay from './customers-list-display.vue';
import CustomersListItem from './customers-list-item.vue';

export default {
  components: {
    CustomersListDisplay,
    CustomersListItem,
  },
  computed: {
    ...mapState(['customers']),
  },
  beforeMount() {
    return this.loadCustomers();
  },
  methods: {
    ...mapMutations('customers', [
      'addCustomer',
      'deleteCustomer',
      'clearCustomers',
    ]),
    ...mapActions('customers', ['loadCustomers']),
    createCustomer() {
      this.addCustomer({
        id: 12,
        firstname: 'First',
        lastname: 'Last',
      });
    },
  },
};
