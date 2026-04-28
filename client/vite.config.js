import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Default: root path (empty) for Vercel
  // For docker/local subpath, set VITE_BASE_PATH to "/heyron-docs"
  base: process.env.VITE_BASE_PATH === undefined ? '' : process.env.VITE_BASE_PATH,
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(process.env.VITE_BASE_PATH === undefined ? '' : process.env.VITE_BASE_PATH)
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
