import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@yashash_sanketika/sunbird-pdf-player-web-component': path.resolve(__dirname, 'node_modules/@yashash_sanketika/sunbird-pdf-player-web-component')
    }
  },
  optimizeDeps: {
    exclude: ['@yashash_sanketika/sunbird-pdf-player-web-component']
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  }
})
