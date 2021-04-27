import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
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
          resolveComponent: (name: string) => {
            return `element-plus/lib/${name}`;
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'pages'),
      '@layout': resolve(__dirname, 'layout'),
      '@utils': resolve(__dirname, 'utils'),
      '@config': resolve(__dirname, 'config'),
      '@apis': resolve(__dirname, 'apis'),
      '@router': resolve(__dirname, 'router'),
      '@components': resolve(__dirname, 'components'),
      '@store': resolve(__dirname, 'store'),
      '@services': resolve(__dirname, 'services'),
      '@directives': resolve(__dirname, 'directives')
    }
  }
});
