import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import(/* webpackChunkName: "about" */ '../views/community.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "about" */ '../views/report.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
