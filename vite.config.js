// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Polyfill __filename and __dirname in ESM:
const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Now `@` resolves to the `src` directory:
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
