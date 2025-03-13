import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow access from other devices
    port: 5173, // Set port
    strictPort: true // Ensure Vite doesn't switch ports if 5173 is busy
  }
})
