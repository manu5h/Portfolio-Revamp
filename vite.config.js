import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Fixes blank screen issue on Netlify
  server: {
    host: "0.0.0.0", // Allow access from other devices
    port: 5173, // Set port
    strictPort: true, // Ensure Vite doesn't switch ports if 5173 is busy
  },
});
