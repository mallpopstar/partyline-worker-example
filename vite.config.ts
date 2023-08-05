import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'worker',
      fileName: () => 'worker.js',
      formats: ['iife'],
    },
    outDir: 'example/dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@partyline': path.resolve(__dirname, '../../packages/partyline/src')
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
})
