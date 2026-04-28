import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // VITE_BASE_PATH: "/" for root, "/heyron-docs/" for subpath, or unset for default
  base: (process.env.VITE_BASE_PATH !== undefined && process.env.VITE_BASE_PATH !== '') 
    ? process.env.VITE_BASE_PATH 
    : '/heyron-docs/',
  define: {
    'import.meta.env.BASE_URL': JSON.stringify((process.env.VITE_BASE_PATH !== undefined && process.env.VITE_BASE_PATH !== '') 
      ? process.env.VITE_BASE_PATH 
      : '/heyron-docs/')
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
