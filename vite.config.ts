import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        popup: resolve(__dirname, 'popup.html'),
        options: resolve(__dirname, 'options.html'),
      },
    },
  },
})
