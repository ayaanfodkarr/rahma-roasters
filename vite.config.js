import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// On GitHub Pages the site is served from https://ayaanfodkarr.github.io/rahma-roasters/,
// so the production build is based at that sub path. Local dev stays at the root.
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/rahma-roasters/' : '/',
  plugins: [react()],
}))
