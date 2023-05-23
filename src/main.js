import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import './rules';
import money from 'v-money'



Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use(money, {precision: 4})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

