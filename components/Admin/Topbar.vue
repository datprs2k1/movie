<template>
  <!-- TOP Nav Bar -->
  <div class="iq-top-navbar">
    <div class="iq-navbar-custom">
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="iq-menu-bt d-flex align-items-center">
          <div class="wrapper-menu" @click="miniSidebar">
            <div class="main-circle">
              <i class="las la-bars" />
            </div>
          </div>
          <div class="iq-navbar-logo d-flex justify-content-between">
            <a class="header-logo">
              <img
                src="~assets/images/logo.png"
                class="img-fluid rounded-normal"
                alt="logo"
              />
              <div class="logo-title">
                <span class="text-primary text-uppercase">Streamit</span>
              </div>
            </a>
          </div>
        </div>
        <div class="iq-search-bar ml-auto">
          <form action="#" class="searchbox">
            <input
              type="text"
              class="text search-input"
              style="cursor: pointer"
              placeholder="Search Here..."
            />
            <a class="search-link" href="#"><i class="ri-search-line" /></a>
          </form>
        </div>
        <b-navbar-toggle target="nav-collapse" class="mr-2 text-primary">
          <i class="ri-menu-3-line" />
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav ml-auto navbar-list">
            <li class="nav-item nav-icon search-content toggleClass">
              <a
                href="javascript:void(0)"
                class="search-toggle iq-waves-effect text-gray rounded"
              >
                <i class="ri-search-line" />
              </a>
              <form action="javascript:void(0)" class="search-box p-0">
                <input
                  type="text"
                  class="text search-input"
                  placeholder="Type here to search..."
                />
                <a class="search-link" href="javascript:void(0)"
                  ><i class="ri-search-line"
                /></a>
              </form>
            </li>
            <li class="nav-item nav-icon toggleClass">
              <a
                href="javascript:void(0)"
                class="search-toggle iq-waves-effect text-gray rounded"
              >
                <i class="ri-notification-2-line" />
                <span class="bg-primary dots" />
              </a>
            </li>
            <li class="nav-item nav-icon dropdown toggleClass">
              <a
                href="javascript:void(0)"
                class="search-toggle iq-waves-effect text-gray rounded"
              >
                <i class="ri-mail-line" />
                <span class="bg-primary dots" />
              </a>
            </li>
            <li class="line-height pt-3 user-profile toggleClass">
              <a
                href="javascript:void(0)"
                class="search-toggle iq-waves-effect d-flex align-items-center"
              >
                <img
                  src="~assets/images/user/user-1.jpg"
                  class="img-fluid rounded-circle mr-3"
                  alt="user"
                />
              </a>
            </li>
          </ul>
        </b-collapse>
      </nav>
    </div>
  </div>
  <!-- TOP Nav Bar END -->
</template>

<script>
export default {
  methods: {
    miniSidebar() {
      const element = document.querySelector('#wrapper-menu')
      if (element.classList.contains('open')) {
        element.classList.remove('open')
        document.querySelector('body').classList.remove('sidebar-main')
      } else {
        element.classList.add('open')
        document.querySelector('body').classList.add('sidebar-main')
      }
    },
  },
}
</script>
