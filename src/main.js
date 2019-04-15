import './plugins/vuetify'

import Vue from 'vue'

import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import store from './utils/store'
import router from './router'

import App from './App.vue'

Vue.config.productionTip = false

const SocketInstance = socketio.connect('http://localhost:3000', {
  query: {
    token: window.localStorage.getItem('token')
  }
})

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketInstance
}))

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
