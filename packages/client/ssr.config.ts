import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'ssr.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'ssr-dist',
      },
    },
  },
  resolve: {
    alias: {
      '@/api': path.resolve(__dirname, './src/api'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/src': path.resolve(__dirname, './src'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/mock': path.resolve(__dirname, './src/mock'),
      '@/models': path.resolve(__dirname, './src/models'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/hoc': path.resolve(__dirname, './src/hoc'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/canvas': path.resolve(__dirname, './src/canvas'),
      '@/store': path.resolve(__dirname, './src/store'),
    },
  },
})
