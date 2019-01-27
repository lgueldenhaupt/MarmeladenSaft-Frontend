import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vuecookies';
import './plugins/vuejsjwt';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
