<template>
  <b-container>
    <b-row class="justify-content-center align-items-center height-self-center">
      <b-col lg="5" md="12" class="align-self-center">
        <div class="sign-user_card">
          <div class="sign-in-page-data">
            <div class="sign-in-from w-100 m-auto">
              <h3 class="mb-3 text-center">Đăng ký</h3>
              <b-alert variant="info" :show="err ? true : false"
                >{{ err }} Vui lòng đăng nhập</b-alert
              >

              <ValidationObserver>
                <form class="mt-4">
                  <b-form-group>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Họ tên"
                      rules="required|max:30"
                    >
                      <input
                        id="exampleInputEmail2"
                        v-model="name"
                        type="text"
                        class="form-control mb-0"
                        placeholder="Họ tên"
                        autocomplete="off"
                        :class="errors.length ? 'is-invalid' : ''"
                      />
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>
                  <b-form-group>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Email"
                      rules="required|email"
                    >
                      <input
                        id="exampleInputEmail3"
                        v-model="email"
                        type="email"
                        class="form-control mb-0"
                        placeholder="Email"
                        autocomplete="off"
                        :class="errors.length ? 'is-invalid' : ''"
                      />
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>
                  <b-form-group>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Mật khẩu"
                      rules="required|min:6"
                    >
                      <input
                        id="exampleInputPassword2"
                        v-model="password"
                        type="password"
                        class="form-control mb-0"
                        placeholder="Mật khẩu"
                        :class="errors.length ? 'is-invalid' : ''"
                      />
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>
                  <div class="sign-info d-flex justify-content-center">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      @click="submit"
                    >
                      Đăng ký
                    </button>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="mt-3">
            <div class="d-flex justify-content-center links">
              Already have an account?
              <a href="login.html" class="text-primary ml-2">Sign In</a>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'AuthLayout',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      err: null,
    }
  },
  methods: {
    ...mapActions('Auth', ['signup']),
    async submit(e) {
      e.preventDefault()
      try {
        await this.signup({
          name: this.name,
          email: this.email,
          password: this.password,
        })
      } catch (error) {
        this.err = error.response.data.errors.email[0]
      }
    },
  },
}
</script>
