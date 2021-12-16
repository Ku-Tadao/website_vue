import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'Nieuws',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/about',
    name: 'Over ons',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
,
  {
    path: '/images',
    name: 'Afbeeldingen',
    component: () => import(/* webpackChunkName: "about" */ '../views/Images.vue')
  }
,
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
