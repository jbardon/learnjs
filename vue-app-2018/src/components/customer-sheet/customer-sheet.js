import { mapActions, mapState } from 'vuex';

const CustomerSheet = {
  computed: {
    ...mapState(['customer']),
  },
  beforeMount() {
    this.loadCustomer(this.$route.params.id);
  },
  methods: {
    ...mapActions('customer', ['loadCustomer', 'saveCustomer']),
  },
};

export default CustomerSheet;
