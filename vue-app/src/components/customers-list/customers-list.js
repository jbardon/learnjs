import {mapMutations, mapActions, mapState} from 'vuex';

import CustomersListItem from './customers-list-item.vue';

export default {
  components: {
    CustomersListItem
  },
  computed: {
    ...mapState(['customers'])
  },
  /*
  data: function() {
    return {
      customers: []
    };
  },
  */
  beforeMount: function () {
    return this.loadCustomers();
  },
  methods: {
    ...mapMutations('customers', ['addCustomer', 'clearCustomers']),
    ...mapActions('customers', ['loadCustomers']),
    createCustomer: function () {
      this.addCustomer({
        id: 12,
        firstname: 'First',
        lastname: 'Last'
      });
    }
  }
};
