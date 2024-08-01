import { createRouter, createWebHistory } from 'vue-router';
import AdventureView from '../views/AdventureView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'adventure-start',
      component: AdventureView
    },
    {
      path: '/adventure/:slug',
      name: 'adventure',
      component: AdventureView
    }
  ]
});

export default router;
