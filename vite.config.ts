import { UserConfigExport, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import { resolve } from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import { viteMockServe } from 'vite-plugin-mock';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueI18n({
        include: resolve(__dirname, 'src/locales/**')
      }),
      viteMockServe({
        localEnabled: command === 'serve'
      }),
      styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name: string) => {
              const scssName = name.slice(3);
              return `element-plus/packages/theme-chalk/src/${scssName}.scss`;
            },
            resolveComponent: (name: string) => `element-plus/lib/${name}`
          }
        ]
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@layout': resolve(__dirname, 'src/layout'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@config': resolve(__dirname, 'src/config'),
        '@apis': resolve(__dirname, 'src/apis'),
        '@router': resolve(__dirname, 'src/router'),
        '@components': resolve(__dirname, 'src/components'),
        '@store': resolve(__dirname, 'src/store'),
        '@services': resolve(__dirname, 'src/services'),
        '@directives': resolve(__dirname, 'src/directives'),
        '@common': resolve(__dirname, 'src/common')
      }
    }
  };
};
