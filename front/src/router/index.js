import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateProduct from '../views/CreateProduct.vue'
import SearchResultsView from  '../views/SearchResultsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastrar-produto',
    name: 'create',
    component: CreateProduct
  },
  {
    path: '/buscar',
    name: 'get',
    component: SearchResultsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
