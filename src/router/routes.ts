import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/hospedagens',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AccommodationPage.vue') }],
  },
  {
    path: '/estados',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/StatePage.vue') }],
  },
  {
    path: '/promocoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PromotionsPage.vue') }],
  },
  {
    path: '/dicas',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TipsPage.vue') }],
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
