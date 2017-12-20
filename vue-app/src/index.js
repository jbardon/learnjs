import Vue from 'vue';

import {router} from './config/router';
import {store} from './config/store';

import App from './app.vue';

export const vm = new Vue({
  el: '#vm',
  router,
  store,
  components: {
    'app': App
  },
  render: function(createElement) {
      // Rien dans le template HTML à cause du DOM parser
      return createElement(App);
  }
});
