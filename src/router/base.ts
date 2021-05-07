import { RouteRecordRaw } from 'vue-router';
import LcSignIn from '@pages/sign-in/sign-in.vue';
import LcLayout from '@layout/layout.vue';
import { DashboardRoutes } from '@router/dashboard';

export const BaseRoutes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/sign-in'
  },
  {
    path: '/sign-in',
    component: LcSignIn
  },
  {
    path: '/',
    component: LcLayout,
    children: [...DashboardRoutes]
  }
];
