import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Portfolio from '../pages/Portfolio.vue'
import News from '../pages/News.vue'
import Contact from '../pages/Contact.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})