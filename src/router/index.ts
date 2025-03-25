import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import AddView from '../views/AddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView,
    },
    {
      path: '/add',
      name: 'add',
      component: AddView,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: AddView,
    },
  ],
})

export default router
