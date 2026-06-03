import { createRouter, createWebHistory } from 'vue-router'

// Páginas Públicas
import Home from '../page/Home.vue'

// Páginas de Administração
//import DashboardLayout from '../portaladmin/page/components/layout/DashboardLayout.vue'
//import DashboardOverview from '../portaladmin/page/dashboard/DashboardOverview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 1. Rota do Site Público (O que o cliente vê)
    {
      path: '/',
      name: 'home',
      component: Home
    },
    /*
    {
      path: '/admin',
      component: DashboardLayout, // Usa o layout com a barra lateral preta
      
      children: [
        {
          path: '', // Quando fores a /admin, abre o Overview
          name: 'admin-dashboard',
          component: DashboardOverview
        }
        // No futuro ligamos aqui as páginas de Produtos, Clientes, etc.
      ]
    }
      */
  ]
})

export default router