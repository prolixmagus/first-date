import { createRouter, createWebHistory } from 'vue-router';
import StartView from '../views/StartView.vue';
import AdventureView from '../views/AdventureView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView
    },
    {
      path: '/:slug',
      name: 'adventure',
      component: AdventureView
    }
  ]
});

export default router;
