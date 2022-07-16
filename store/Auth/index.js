const state = () => ({
  user: {},
  isAuthenticated: false,
  token: null,
  expiresIn: null,
  tokenType: null,
})

const getters = {
  user: (state) => state.user,
  isAuthenticated: (state) => state.isAuthenticated,
  token: (state) => state.token,
  expiresIn: (state) => state.expiresIn,
  tokenType: (state) => state.tokenType,
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  setToken(state, token) {
    state.token = token
  },
  setExpiresIn(state, expiresIn) {
    state.expiresIn = expiresIn
  },
  setTokenType(state, tokenType) {
    state.tokenType = tokenType
  },
}

const actions = {
  async signin({ commit }, data) {
    const response = await this.$axios.post('/api/signin', data)

    commit('setUser', response.data.user)
    commit('setIsAuthenticated', true)
    commit('setToken', response.data.token)
    commit('setExpiresIn', response.data.expires_in)
    commit('setTokenType', response.data.token_type)

    return response
  },

  async signup({ commit }, data) {
    const response = await this.$axios.$post('/api/signup', data)

    return response
  },

  signout({ commit }) {
    // eslint-disable-next-line no-console
    console.log('Logout')
    commit('setUser', {})
    commit('setIsAuthenticated', false)
    commit('setToken', null)
    commit('setExpiresIn', null)
    commit('setTokenType', null)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
