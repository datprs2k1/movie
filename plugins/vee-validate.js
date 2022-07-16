import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate'

import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/vi.json'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Object.keys(rules).forEach((rule) => {
  // eslint-disable-next-line import/namespace
  extend(rule, rules[rule])
})

// with typescript
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
    message: messages[rule],
  })
}

localize('vi')
