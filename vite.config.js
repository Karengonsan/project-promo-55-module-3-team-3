import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/repaso-final-promo-55/",
  plugins: [react()],
  server: {
    open: "/",
    watch: {
      usePolling: true
    }
  }
});

