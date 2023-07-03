import path from 'path';

// https://vitejs.dev/config/
export default ({

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
  }
)
