import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For local/docker deployment under subpath, use:
  // base: '/heyron-docs/'
  // For Vercel (root), remove or comment base
  base: process.env.VITE_BASE_PATH || '/heyron-docs/',
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(process.env.VITE_BASE_PATH || '/heyron-docs/')
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
