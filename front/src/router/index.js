import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductList from  '../views/ProductList.vue'
import ProductDetails from  '../views/ProductDetails.vue'
import ProductBag from  '../views/ProductBag.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cadastrar-produto',
    name: 'create',
    component: ProductCreate
  },
  {
    path: '/buscar/:search?',
    name: 'buscar',
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
    name: 'sacola',
    component: ProductBag
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
