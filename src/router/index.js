import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
   {
  path: '/community/:id',
  name: 'community',
  component: () => import(/* webpackChunkName: "community" */ '../views/community.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "report" */ '../views/report.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
