<template>
  <b-container>
    <b-row class="justify-content-center align-items-center height-self-center">
      <b-col lg="5" md="12" class="align-self-center">
        <div class="sign-user_card">
          <div class="sign-in-page-data">
            <div class="sign-in-from w-100 m-auto">
              <h3 class="mb-3 text-center">Đăng nhập</h3>
              <b-alert variant="info" :show="!!message ?? false">{{
                message
              }}</b-alert>
              <ValidationObserver>
                <form class="mt-4">
                  <b-form-group>
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required|email"
                      name="Email"
                    >
                      <b-form-input
                        id="exampleInputEmail2"
                        v-model="email"
                        type="email"
                        class="form-control mb-0"
                        placeholder="Email"
                        required
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
                      <b-form-input
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
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="mt-3">
            <div class="d-flex justify-content-center links">
              Don't have an account?
              <a href="sign-up.html" class="text-primary ml-2">Sign Up</a>
            </div>
            <div class="d-flex justify-content-center links">
              <a href="pages-recoverpw.html" class="f-link"
                >Forgot your password?</a
              >
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- Sign in END -->
    <!-- color-customizer -->
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'AuthLayout',
  data() {
    return {
      email: '',
      password: '',
      message: '',
    }
  },
  head: {
    title: 'Đăng nhập',
  },
  methods: {
    ...mapActions('Auth', ['signin']),
    async submit(e) {
      e.preventDefault()

      try {
        const response = await this.signin({
          email: this.email,
          password: this.password,
        })

        // eslint-disable-next-line no-console
        console.log(response.data)
      } catch (error) {
        this.message = error.response.data.message
      }
    },
  },
}
</script>
