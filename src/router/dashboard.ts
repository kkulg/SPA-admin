import { RouteRecordRaw } from 'vue-router';

export const DashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard/analysis',
    component: () => import('@pages/dashboard/analysis/analysis.vue')
  },
  {
    path: '/dashboard/monitor',
    component: () => import('@pages/dashboard/monitor/monitor.vue')
  }
];
