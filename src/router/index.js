import Vue from 'vue'
import VueRouter from 'vue-router'
import { layouts } from '../layouts'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        layout: layouts.DEFAULT,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/LoginView.vue'),
      meta: {
        layout: layouts.LOGIN,
      },
    }
  ]
})

export default router
