import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import errors from './interceptors/error.js'
import token from './interceptors/token.js'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.axios.interceptors.request.use(
  (response) => token(response),(error) => errors(error)
)

new Vue({
  render: h => h(App)
}).$mount('#app')
