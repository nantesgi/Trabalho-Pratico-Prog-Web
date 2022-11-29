import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductList from  '../views/ProductList.vue'
import ProductDetails from  '../views/ProductDetails.vue'
import ProductBag from  '../views/ProductBag.vue'
import Registration from  '../views/Registration.vue'
import Authentication from  '../views/Authentication.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastrar-produto',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/buscar/:search?',
    name: 'ProductList',
    component: ProductList,
    props: true
  },
  {
    path: '/visualizar-produto/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/sacola-de-compras',
    name: 'ProductBag',
    component: ProductBag
  },
  {
    path: '/cadastrar-cliente',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Authentication',
    component: Authentication
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
