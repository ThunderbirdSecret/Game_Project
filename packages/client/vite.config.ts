import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

import dotenv from 'dotenv'

import path from 'path'

dotenv.config()

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    server: {
      port: Number(process.env.CLIENT_PORT) || 3000,
    },
    define: {
      __SERVER_PORT__: process.env.SERVER_PORT,
    },
    plugins: [svgr(), react()],
    resolve: {
      alias: {
        '@/api': path.resolve(__dirname, './src/api'),
        '@/assets': path.resolve(__dirname, './src/assets'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/pages': path.resolve(__dirname, './src/pages'),
        '@/services': path.resolve(__dirname, './src/services'),
        '@/styles': path.resolve(__dirname, './src/styles'),
        '@/utils': path.resolve(__dirname, './src/utils'),
      },
    },
    css: {
      preprocessorOptions: {
        // обсудить импорты миксинов в каждом файле по умолчанию
        scss: {},
      },
      modules: {
        localsConvention: 'camelCase',
      },
    },
  })
}
