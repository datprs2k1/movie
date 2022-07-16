<template>
  <div class="iq-sidebar">
    <div class="iq-sidebar-logo d-flex justify-content-between">
      <a href="index.html" class="header-logo">
        <img
          src="~assets/images/logo.png"
          class="img-fluid rounded-normal"
          alt=""
        />
        <div class="logo-title">
          <span class="text-primary text-uppercase">Streamit</span>
        </div>
      </a>
      <div class="iq-menu-bt-sidebar">
        <div class="iq-menu-bt align-self-center">
          <div id="wrapper-menu" class="wrapper-menu" @click="miniSidebar">
            <div class="main-circle"><i class="las la-bars"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar-scrollbar">
      <nav class="iq-sidebar-menu">
        <ul id="iq-sidebar-toggle" class="iq-menu">
          <li>
            <a href="index.html" class="text-primary"
              ><i class="ri-arrow-right-line"></i><span>Visit site</span></a
            >
          </li>
          <li class="active active-menu">
            <a href="index.html" class="iq-waves-effect"
              ><i class="las la-home iq-arrow-left"></i
              ><span>Dashboard</span></a
            >
          </li>
          <li>
            <a v-b-toggle="'category'" href="#category" class="iq-menu"
              ><i class="las la-list-ul"></i><span>Category</span
              ><i class="ri-arrow-right-s-line iq-arrow-right"></i
            ></a>
            <b-collapse id="category">
              <ul id="category">
                <li class="iq-waves-effect">
                  <a href="add-category.html"
                    ><i class="las la-user-plus"></i>Add Category</a
                  >
                </li>
                <li class="iq-waves-effect">
                  <a href="category-list.html"
                    ><i class="las la-eye"></i>Category List</a
                  >
                </li>
              </ul>
            </b-collapse>
          </li>
        </ul>
      </nav>
    </div>
  </div>
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
