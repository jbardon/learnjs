import {mapActions, mapState} from 'vuex';

export default {
  computed: {
    ...mapState(['customer'])
  },
  beforeMount: function () {
    this.loadCustomer(this.$route.params.id); 
  },
  methods: {
    ...mapActions('customer', ['loadCustomer'])
  }
};