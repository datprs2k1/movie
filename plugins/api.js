export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Bearer ${
      store.getters['Auth/token'] ?? ''
    }`
  })
}
