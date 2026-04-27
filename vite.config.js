import { defineConfig } from 'vite'

export default defineConfig({
  // Pure static HTML — no React plugins needed
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
