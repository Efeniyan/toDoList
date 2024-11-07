import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/components/TodoList.vue'
import Login from '@/components/Login.vue'
let isAuthenticated = false;
const routes = [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList, 
      meta: { requiresAuth: true },
    },
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Gestion de la redirection si non authentifié
router.beforeEach((to, from, next) => {
  const isAuthenticated = false;  
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export function setAuthentication(status) {
  isAuthenticated = status;
}

export default router;
