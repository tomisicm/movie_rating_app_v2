import './plugins/vuetify'

import Vue from 'vue'
import store from './utils/store'
import router from './router'

import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
