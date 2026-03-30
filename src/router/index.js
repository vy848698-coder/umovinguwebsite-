import { createRouter, createWebHistory } from 'vue-router'
import AppPage from '../App.vue'
import UmovingPage from '../pages/umoving.vue'
import ContactPage from '../pages/contact.vue'
import ProductPage from '../pages/product.vue'
import AboutPage from '../pages/about.vue'

const routes = [
  {
    path: '/',
    component: UmovingPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
  {
    path: '/product',
    component: ProductPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
