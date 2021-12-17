import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import About from '../views/About.vue'
import Images from '../views/Images.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes =
    [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'Nieuws',
    component: News
  },
  {
    path: '/about',
    name: 'Over ons',
    component: About
  }
,
  {
    path: '/images',
    name: 'Afbeeldingen',
    component: Images
  }
,
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
