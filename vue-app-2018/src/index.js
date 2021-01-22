import Vue from 'vue';

import router from './config/router';
import store from './config/store';

import App from './app.vue';

// Vue instance (commonly named vm for view-model)
// https://vuejs.org/v2/guide/instance.html
const vm = new Vue({
  el: '#vm', // Mount on element with vm id
  router,
  store,
  components: {
    // Declare components locally
    app: App,
  },
  render(createElement) {
    // Do not use HTML template to avoid conflicts with DOM parser
    // https://vuejsdevelopers.com/2017/09/17/vue-js-avoid-dom-templates/
    // https://vuejsdevelopers.com/2017/03/24/vue-js-component-templates/
    return createElement(App);
  },
});

export default vm;
