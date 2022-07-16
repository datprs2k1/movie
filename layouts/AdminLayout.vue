<template>
  <div class="wrapper">
    <Sidebar />
    <Topbar />
    <Nuxt />
  </div>
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar.vue'
import Topbar from '@/components/Admin/Topbar.vue'
export default {
  components: {
    Sidebar,
    Topbar,
  },
}
</script>

<style>
@import url('../assets/css/custom.css');
@import url('../assets/css/backend/variable.css');
@import url('../assets/css/backend/dark.css');
@import url('../assets/css/backend/responsive.css');
@import url('../assets/css/backend/style.css');
@import url('../assets/css/backend/typography.css');
</style>
