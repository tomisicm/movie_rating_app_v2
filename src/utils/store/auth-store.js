import authService from '@/utils/services/auth-service'
import router from '@/router'

/* errors in store is just wrong */

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user')
  if (user) return JSON.parse(user)
}

export default {
  state: {
    user: getUserFromLocalStorage(),
    errors: null
  },

  mutations: {
    SET_DATA(state, { user }) {
      state.user = user,
      state.errors = null
    },
    SET_ERRORS(state, errors) {
      state.errors = errors
    }
  },

  actions: {
    async login({ commit }, { email, password }) {
      try {
        const { data } = await authService.login(email, password)
        commit('SET_DATA', data)
        router.push({ name: 'home' })
      } catch(e) {
        commit('SET_ERRORS', e.response.data.message)
      }
    },
    async register({ commit }, user) {
      try {
        commit('SET_DATA', await authService.register(user))
        router.push({ name: 'login' })               
      } catch(e) {
        commit('SET_ERRORS', e)
      }
    },
    async logout({ commit }) {
      authService.logout()
      .then(() => {
        commit('SET_DATA', { user: null })
      }).then(() => {
        router.push({ name: 'login' }) 
      })
    }
  },

  getters: {
    getUser: state => state.user,
    getErrors: state => state.errors
  }
}
