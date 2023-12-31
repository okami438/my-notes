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
        name: 'login',
        component: () => import('@/views/SignInView.vue')
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/SignUpView.vue')
      },
    ]
  },

  {
    path: '/notes',
    name: 'notes',
    component: () => import('@/views/CardsView.vue'),
  }
]



const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})

console.log(import.meta.env.BASE_URL)

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  } else if (loggedIn && (to.path === '/' || to.path === '/login' || to.path === '/signup')) {
    return next('/notes');
  } else {
    return next();
  }

})

export default router
