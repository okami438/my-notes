import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/login',
        name: 'home',
        component: () => import('@/views/SignInView.vue')
      },
      {
        path: '/signup',
        name: 'home',
        component: () => import('@/views/SignUpView.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})

export default router
