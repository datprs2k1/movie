<template>
  <b-container fluid>
    <b-row>
      <b-col sm="6" lg="6" xl="3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div class="iq-cart-text text-capitalize">
                <p class="mb-0">view</p>
              </div>
              <div class="icon iq-icon-box-top rounded-circle bg-primary">
                <i class="las la-eye" />
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-3">
              <h4 class="mb-0">+24K</h4>
              <p class="mb-0 text-primary">
                <span><i class="fa fa-caret-down mr-2" /></span>35%
              </p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="6" xl="3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div class="iq-cart-text text-capitalize">
                <p class="mb-0 font-size-14">Rated This App</p>
              </div>
              <div class="icon iq-icon-box-top rounded-circle bg-warning">
                <i class="lar la-star" />
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-3">
              <h4 class="mb-0">+55K</h4>
              <p class="mb-0 text-warning">
                <span><i class="fa fa-caret-up mr-2" /></span>50%
              </p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="6" xl="3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div class="iq-cart-text text-capitalize">
                <p class="mb-0 font-size-14">Downloaded</p>
              </div>
              <div class="icon iq-icon-box-top rounded-circle bg-info">
                <i class="las la-download" />
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-3">
              <h4 class="mb-0">+1M</h4>
              <p class="mb-0 text-info">
                <span><i class="fa fa-caret-up mr-2" /></span>80%
              </p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="6" xl="3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div class="iq-cart-text text-uppercase">
                <p class="mb-0 font-size-14">Visitors</p>
              </div>
              <div class="icon iq-icon-box-top rounded-circle bg-success">
                <i class="lar la-user" />
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-3">
              <h4 class="mb-0">+2M</h4>
              <p class="mb-0 text-success">
                <span><i class="fa fa-caret-up mr-2" /></span>80%
              </p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <div>
      <label class="typo__label">Select with search</label>
      <multiselect
        v-model="value"
        :options="options"
        :custom-label="nameWithLang"
        :searchable="true"
        :multiple="true"
        placeholder="Select one"
        label="name"
        track-by="name"
      ></multiselect>
      <pre class="language-json"><code>{{ value  }}</code></pre>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      value: { name: 'Vue.js', language: 'JavaScript' },
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' },
      ],
    }
  },
  head: {
    title: 'Dashboard',
  },
}
</script>
