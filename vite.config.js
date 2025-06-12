import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/QuestionPaperFormator-React-Latex-/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // 👈 Required for Docker
    port: 5173,        // 👈 Optional, default is 5173
    strictPort: true   //i will
  }
})