import * as Cookies from 'js-cookie'

export default function ({ store, redirect }) {
  // eslint-disable-next-line no-console
  const isAuthenticated = store.getters['Auth/isAuthenticated']
  const token = store.getters['Auth/token']
  const expiresIn = store.getters['Auth/expiresIn']
  const user = store.getters['Auth/user']

  store.commit('Auth/setUser', 'Hello')
  // eslint-disable-next-line no-console
  console.log(store)
}
