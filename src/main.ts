import { createApp, App } from 'vue';
// element基础样式
import 'element-plus/packages/theme-chalk/src/base.scss';
// 路由配置
import router from '@router';
// 状态管理
import store from '@store';
// 国际化
import { i18n } from '@common/plugins/index';
// 全局指令
import { installGlobalDirective } from '@directives';
// 公共样式
import '@common/scss/common.scss';
// 根组件
import LcApp from './App.vue';

const app: App = createApp(LcApp);
app.use(router);
app.use(store);
app.use(i18n);
installGlobalDirective(app);
app.mount('#app');
