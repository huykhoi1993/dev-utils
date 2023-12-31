import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    VueRouter(),
    vue(),
    Components(),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink', 'createRouter', 'createWebHistory'],
        },
        'pinia',
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
    Layouts(),
  ],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
