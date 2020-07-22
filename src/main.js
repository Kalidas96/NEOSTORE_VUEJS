import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios';

import VueRouter from 'vue-router';
Vue.use(VueRouter); 
import Routes from './router/index';
import store from '../src/store/store'


import 'bootstrap' //import Bootstrap’s JavaScript
import 'bootstrap/dist/css/bootstrap.min.css' // import Bootstrap CSS Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
//src/main.js
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);
import VueSocialSharing from 'vue-social-sharing' 
Vue.use(VueSocialSharing);
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


// Vue.prototype.$http = axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }
//interceptor.............
// axios.interceptors.request.use(
//   function(config) {
//    const token = atob(localStorage.getItem('user-token'));
//    if (token) config.headers.Authorization = `${token}`
//    return config
//   },
//   function(error) {
//    return Promise.reject(error)
//   }
//  )


Vue.config.productionTip = false
const router = new VueRouter({
  routes: Routes
})


new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount('#app')
