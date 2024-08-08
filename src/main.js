import Vue from 'vue'
import App from './App.vue'
import router from './router'


import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'

import './assets/main.scss'

const app = new Vue({
  router,
  render: (h) => h(App)
})

Vue.use(mdiVue, {
  icons: mdijs
});

app.$mount('#app')
