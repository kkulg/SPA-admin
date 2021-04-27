import { createApp, App } from 'vue';
// element基础样式
import 'element-plus/packages/theme-chalk/src/base.scss';
// 路由配置
import router from '@router';
// 状态管理
import store from '@store';
// 全局指令
import { installGlobalDirective } from '@directives';
// 根组件
import AppComponent from './App.vue';

const app: App = createApp(AppComponent);
app.use(router);
app.use(store);
installGlobalDirective(app);
app.mount('#app');
