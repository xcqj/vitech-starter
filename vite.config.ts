import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'vue-router/vite' // 导入新插件
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
//import VueMacros from 'vue-macros/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Layouts from 'vite-plugin-vue-layouts-next'
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'src/route-map.d.ts' // 可选：生成类型文件，增强IDE支持
    }),
    vue(),
    vueJsx(),
    // VueMacros({
    //   plugins: {
    //     vue: vue(),
    //     vueJsx: vueJsx(), // 如有需要
    //     // vueRouter: VueRouter({ // 如有需要
    //     //   extensions: ['.vue', '.setup.tsx']
    //     // })
    //   },
    //   // 覆盖插件选项
    // }),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        '@vueuse/core'
      ],

    }),
    Components({
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      pagesDirs: 'src/pages',
      defaultLayout: 'default'
    }),
    mockDevServerPlugin(),
  ],
  server: {
    proxy: {
      '/api': {   // mock--这里定义要拦截的路径前缀
        target: 'http://localhost:3000',  // mock--任意可用的地址（实际不会请求）
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
