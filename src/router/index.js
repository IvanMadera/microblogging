import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import(/* webpackChunkName: "about" */ '../views/Report.vue')
  },
  {
    path: '/anime',
    name: 'Anime',
    component: () => import(/* webpackChunkName: "about" */ '../views/Anime.vue')
  },
  {
    path: '/gaming',
    name: 'Gaming',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gaming.vue')
  },
  {
    path: '/tecnologia',
    name: 'Tecnologia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tecnologia.vue')
  },
  {
    path: '/programacion',
    name: 'Programacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Programacion.vue')
  },
  {
    path: '/ia',
    name: 'IA',
    component: () => import(/* webpackChunkName: "about" */ '../views/IA.vue')
  },
  {
    path: '/deportes',
    name: 'Deportes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Deportes.vue')
  },
  {
    path: '/ciberseguridad',
    name: 'Ciberseguridad',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ciberseguridad.vue')
  },
  {
    path: '/s&h',
    name: 'S&H',
    component: () => import(/* webpackChunkName: "about" */ '../views/S&H.vue')
  },
  {
    path: '/electronica',
    name: 'Electrónica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Electronica.vue')
  },
  {
    path: '/musica',
    name: 'Musica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Musica.vue')
  },
  {
    path: '/itm',
    name: 'ITM',
    component: () => import(/* webpackChunkName: "about" */ '../views/ITM.vue')
  },
  {
    path: '/homenew',
    name: 'HomeNew',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeNew.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
