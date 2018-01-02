import Vue from 'vue';
import CustomerSheet from './customer-sheet.vue';

const CustomerSheetEdit = {
  mixins: [CustomerSheet],
  data: () => ({
    bean: {},
  }),
  beforeMount() {
    this.loadCustomer(this.$route.params.id).then(this.setBean);
  },
  computed: {
    modelChanged: () => true,
  },
  methods: {
    save() {
      this.saveCustomer(this.bean).then(this.setBean);
    },
    // Met à jour le bean en fonction de l'état
    setBean() {
      Vue.set(this, 'bean', this.customer.item);
    },
  },
};

export default CustomerSheetEdit;
