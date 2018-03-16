import { mapMutations, mapActions, mapState } from 'vuex';

import CustomersListDisplay from './customers-list-display.vue';
import CustomersListItem from './customers-list-item.vue';

const CustomersList = {
  components: {
    CustomersListDisplay,
    CustomersListItem,
  },
  computed: {
    // Same as data but using cache no calculation parameter changed
    // https://vuejs.org/v2/guide/computed.html
    // This syntax requires babel plugin: transform-object-rest-spread
    ...mapState(['customers']), // Map VueX state as computed data (immutable)
  },
  beforeMount() {
    // Component lifecycle
    // https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
    return this.loadCustomers();
  },
  methods: {
    // Component methods
    ...mapMutations('customers', [
      // Map VueX mutations as methods
      'addCustomer',
      'deleteCustomer',
      'clearCustomers',
    ]),
    ...mapActions('customers', ['loadCustomers']), // Map VueX actions as methods
    createCustomer() {
      this.addCustomer({
        id: 12,
        firstname: 'First',
        lastname: 'Last',
      });
    },
  },
};

// Export default for SFC is necessary
// Don't use named exports for component definition
export default CustomersList;
