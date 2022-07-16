<template>
  <div class="">
    <Tutorial />
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: ['Auth'],
  methods: {
    logout() {
      this.$store.dispatch('Auth/signout')
    },
  },
}
</script>
